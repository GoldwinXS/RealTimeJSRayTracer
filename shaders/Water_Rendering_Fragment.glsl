precision highp float;
precision highp int;
precision highp sampler2D;
precision highp sampler3D;

uniform mat4 uTallBoxInvMatrix;
uniform sampler2D tHDRTexture;
uniform float uHDRI_Exposure;

// Voxel related uniforms.
uniform sampler3D voxelTexture;
uniform int uNumberOfVoxelGeometries;
uniform sampler2D uVoxelDataTexture;
uniform float uVoxelDataTextureWidth;

struct VoxelGeometry {
	mat4 voxelMeshInvMatrix;
	float voxelSize;
	vec3 gridDimensions;
	vec3 textureMinPosition;
	vec3 textureMaxPosition;
};

// Function to read voxel data from the texture
VoxelGeometry getVoxelGeometry(int voxelIndex) {
	float floatPerVoxel = 28.0; // Total number of floats per voxel
	float floatsPerTexel = 4.0; // 4 floats per RGBA pixel
	float texelIndex = float(voxelIndex) * floatPerVoxel / floatsPerTexel;
	float row = 0.0;

	VoxelGeometry voxel;
	vec4 temp;

    // Read voxel data
	temp = texture2D(uVoxelDataTexture, vec2(texelIndex / uVoxelDataTextureWidth, row));
	voxel.voxelSize = temp.r;
	voxel.gridDimensions = temp.gba;
	temp = texture2D(uVoxelDataTexture, vec2((texelIndex + 1.0) / uVoxelDataTextureWidth, row));
	voxel.textureMinPosition = temp.rgb;
	voxel.textureMaxPosition.x = temp.a;
	temp = texture2D(uVoxelDataTexture, vec2((texelIndex + 2.0) / uVoxelDataTextureWidth, row));
	voxel.textureMaxPosition.yz = temp.rg;

// Read and reconstruct the matrix
	for(int i = 0; i < 4; i++) {
		temp = texture2D(uVoxelDataTexture, vec2((texelIndex + 3.0 + float(i)) / uVoxelDataTextureWidth, row));
		voxel.voxelMeshInvMatrix[i] = vec4(temp.rgb, texture2D(uVoxelDataTexture, vec2((texelIndex + 4.0 + float(i)) / uVoxelDataTextureWidth, row)).r);
	}

	return voxel;
}

#include <pathtracing_uniforms_and_defines>
const float epsilon = 0.0001;

#define N_QUADS 1
#define N_BOXES 4

//-----------------------------------------------------------------------

vec3 rayOrigin, rayDirection;
// recorded intersection data:
vec3 hitNormal, hitEmission, hitColor;
vec2 hitUV;
float hitObjectID;
int hitType = -100;

struct Quad {
	vec3 normal;
	vec3 v0;
	vec3 v1;
	vec3 v2;
	vec3 v3;
	vec3 emission;
	vec3 color;
	int type;
};
struct Box {
	vec3 minCorner;
	vec3 maxCorner;
	vec3 emission;
	vec3 color;
	int type;
};

Quad quads[N_QUADS];
Box boxes[N_BOXES];

#include <pathtracing_random_functions>

#include <pathtracing_calc_fresnel_reflectance>

#include <pathtracing_quad_intersect>

#include <pathtracing_box_intersect>

#include <pathtracing_box_interior_intersect>

#include <pathtracing_sample_quad_light>

#define STILL_WATER_LEVEL -100.0
#define WATER_WAVE_AMP 20.0
#define WATER_COLOR vec3(0.6, 1.0, 1.0)

vec3 Get_HDR_Color(vec3 rDirection) {
	vec2 sampleUV;
	sampleUV.x = atan(rDirection.x, -rDirection.z) * 0.15915494309 + 0.5;
	sampleUV.y = acos(rDirection.y) * 0.318309886183790672;
	vec3 texColor = texture(tHDRTexture, sampleUV).rgb;
	return texColor * uHDRI_Exposure;
}

float getWaterWaveHeight(vec3 pos) {
	float waveSpeed = uTime * 6.0;

	float sampleAngle1 = mod(pos.x * 0.013 - waveSpeed * 0.7, TWO_PI);
	float sampleAngle2 = mod(pos.z * 0.027 - waveSpeed * 0.4, TWO_PI);
	float sampleAngle3 = mod(pos.x * 0.029 - waveSpeed * 0.5, TWO_PI);
	float sampleAngle4 = mod(pos.z * 0.015 - waveSpeed * 0.6, TWO_PI);

	float waveOffset = 0.25 * (sin(sampleAngle1) + sin(sampleAngle2) +
		sin(sampleAngle3) + sin(sampleAngle4));

	return STILL_WATER_LEVEL + (waveOffset * WATER_WAVE_AMP);
}

bool voxelInbounds(ivec3 cellIndex, ivec3 gridResolution) {
	if(cellIndex.x < 0 || cellIndex.x >= gridResolution.x ||
		cellIndex.y < 0 || cellIndex.y >= gridResolution.y ||
		cellIndex.z < 0 || cellIndex.z >= gridResolution.z) {
		return false;
	}
	return true;
}

bool voxelIsSolid(ivec3 cellIndex, VoxelGeometry voxelGeometry) {
    // Normalize cellIndex to a 0-1 range within the voxel geometry's local space.
	vec3 normalizedCoords = vec3(cellIndex) / voxelGeometry.gridDimensions;

    // Map the normalized coordinates to the corresponding segment of the texture atlas.
    // This is done by scaling the normalized coordinates to the size of the segment (textureMaxPosition - textureMinPosition)
    // and then translating them to the starting position of the segment (textureMinPosition).
	vec3 atlasCoords = voxelGeometry.textureMinPosition + normalizedCoords * (voxelGeometry.textureMaxPosition - voxelGeometry.textureMinPosition);

    // Check solidity using the alpha channel in the texture atlas.
	return texture(voxelTexture, atlasCoords).a > 0.0;
}

void getTandDeltaT(inout float t, inout float deltaT, float rayDirection, float rayOrigGrid, float cellDimension, int cellIndex) {
	// Only scalar values in this function, since the same logic applies to all axies but we need to repeat it for all 
	deltaT = cellDimension / abs(rayDirection);

	if(rayDirection < 0.0) {
		t = (float(cellIndex) * cellDimension - rayOrigGrid) / rayDirection;
	} else {
		t = ((float(cellIndex) + 1.0) * cellDimension - rayOrigGrid) / rayDirection;
	}
}

ivec3 getVoxelPosition(vec3 localRayDir, vec3 localRayOrigin, Box voxelBox, VoxelGeometry voxGeometry) {
	// Make sure we're normalized 
	// localRayDir = normalize(localRayDir);
	vec3 rayPosition = localRayOrigin;

	// gridResolution is number of cells in each dimension and should be integer values (0, 1, 2, ...)
	ivec3 gridResolution = ivec3(voxGeometry.gridDimensions.x, voxGeometry.gridDimensions.y, voxGeometry.gridDimensions.z);
	// Convert worldspace coords which can be -ve coords to all +ve coords by subtracting min corner
	// If max=1 and min=-1 then our new max will be 1 - (-1) = 2
	vec3 gridMax = voxelBox.maxCorner - voxelBox.minCorner;
	// Here, subtracting from a negative number will move the cube in a positive direction in that case
	// so if min=-1, the new min will now be -1 - (-1)  = -1 + 1 = 0
	vec3 gridMin = vec3(0);
	// translate the ray's origin so it respects the transformation we've done to the object coordinates, this is in object space, for example, 1.453
	vec3 rayOrigGrid = localRayOrigin - voxelBox.minCorner;

	// gridDimension is the overall size of the grid, which if centered at the origin, is just gridMax. 
	// It should be in world dimensions, for example: 1.453
	vec3 gridDimension = vec3(voxGeometry.gridDimensions.x, voxGeometry.gridDimensions.y, voxGeometry.gridDimensions.z) * voxGeometry.voxelSize;
	// cellDimension is the size of each cell in the grid. Since we're at the origin, gridMin is 0, so it is just:
	vec3 cellDimension = gridMax / vec3(gridResolution);
	// Initialize our delta T and next crossing 
	vec3 t;
	vec3 deltaT;

	ivec3 cellIndex = ivec3(floor(rayOrigGrid / cellDimension));

	// Determine t and detla t values for the DDA algorithm for all axies 
	getTandDeltaT(t.x, deltaT.x, localRayDir.x, rayOrigGrid.x, cellDimension.x, cellIndex.x);
	getTandDeltaT(t.y, deltaT.y, localRayDir.y, rayOrigGrid.y, cellDimension.y, cellIndex.y);
	getTandDeltaT(t.z, deltaT.z, localRayDir.z, rayOrigGrid.z, cellDimension.z, cellIndex.z);

	int MAX_CHECKS = 1024;
	float stepSize = 0.0;

	for(int check = 0; check < MAX_CHECKS; check++) {

		if(voxelIsSolid(cellIndex, voxGeometry)) {
			break;
		}
		if(!voxelInbounds(cellIndex, gridResolution)) {
			return ivec3(-1);
		}

		if(t.x < t.y) {
			if(t.x < t.z) {
				if(!voxelInbounds(cellIndex, gridResolution)) {
					break;
				}
				cellIndex.x += (localRayDir.x < 0.0) ? -1 : 1;
				t.x += deltaT.x;

			} else {
				if(!voxelInbounds(cellIndex, gridResolution)) {
					break;
				}
				cellIndex.z += (localRayDir.z < 0.0) ? -1 : 1;
				t.z += deltaT.z;

			}
		} else {
			if(t.y < t.z) {
				if(!voxelInbounds(cellIndex, gridResolution)) {
					break;
				}
				cellIndex.y += (localRayDir.y < 0.0) ? -1 : 1;
				t.y += deltaT.y;

			} else {
				if(!voxelInbounds((cellIndex), gridResolution)) {
					break;
				}
				cellIndex.z += (localRayDir.z < 0.0) ? -1 : 1;
				t.z += deltaT.z;

			}
		}

	}
	return cellIndex;
}

//--------------------------------------------------------------------------------------------------------
float SceneIntersect(int checkWater)
//--------------------------------------------------------------------------------------------------------
{
	vec3 rObjOrigin, rObjDirection;
	vec3 hitWorldSpace;
	vec3 normal, n;

	float d = INFINITY;
	float t = INFINITY;
	float waterWaveDepth;

	int objectCount = 0;

	int isRayExiting = FALSE;

	d = QuadIntersect(quads[0].v0, quads[0].v1, quads[0].v2, quads[0].v3, rayOrigin, rayDirection, FALSE);
	if(d < t) {
		t = d;
		hitNormal = quads[0].normal;
		hitEmission = quads[0].emission;
		hitColor = quads[0].color;
		hitType = quads[0].type;
		hitObjectID = float(objectCount);
	}
	objectCount++;

	d = BoxInteriorIntersect(boxes[2].minCorner, boxes[2].maxCorner, rayOrigin, rayDirection, n);
	if(d < t && n != vec3(0, 0, -1)) {
		t = d;
		hitNormal = n;
		hitEmission = boxes[2].emission;
		hitColor = vec3(1);
		hitType = DIFF;

		if(n == vec3(1, 0, 0)) // left wall
		{
			hitColor = vec3(0.67, 0.26, 0.78);
		} else if(n == vec3(-1, 0, 0)) // right wall
		{
			hitColor = vec3(0.2, 0.4, 0.36);
		}

		hitObjectID = float(objectCount);
	}
	objectCount++;

	// TALL MIRROR BOX
	// transform ray into Tall Box's object space
	rObjOrigin = vec3(uTallBoxInvMatrix * vec4(rayOrigin, 1.0));
	rObjDirection = vec3(uTallBoxInvMatrix * vec4(rayDirection, 0.0));
	d = BoxIntersect(boxes[0].minCorner, boxes[0].maxCorner, rObjOrigin, rObjDirection, normal, isRayExiting);

	if(d < t) {
		t = d;
		// transfom normal back into world space
		hitNormal = transpose(mat3(uTallBoxInvMatrix)) * normal;
		hitEmission = boxes[0].emission;
		hitColor = boxes[0].color;
		hitType = boxes[0].type;
		hitObjectID = float(objectCount);
	}
	objectCount++;

	// Voxels
	// Transform the ray into the coordinateg space of the box containing the voxels 
	for(int voxelIndex = 0; voxelIndex < uNumberOfVoxelGeometries; voxelIndex++) {
		VoxelGeometry voxelGeometry = getVoxelGeometry(voxelIndex);
		Box voxelBox = Box(vec3(-voxelGeometry.gridDimensions * voxelGeometry.voxelSize * 0.5), vec3(voxelGeometry.gridDimensions * voxelGeometry.voxelSize * 0.5), vec3(0), vec3(1), DIFF);
		rObjOrigin = vec3(voxelGeometry.voxelMeshInvMatrix * vec4(rayOrigin, 1.0));
		rObjDirection = vec3(voxelGeometry.voxelMeshInvMatrix * vec4(rayDirection, 0.0));
		vec3 rObjOriginOriginal = rObjOrigin;

		// Check if the ray will intersect with the voxel volume at all
		d = BoxIntersect(voxelBox.minCorner, voxelBox.maxCorner, rObjOrigin, rObjDirection, normal, isRayExiting);
		if(d < t) {
		// If we have a hit with the volume, then translate the ray so that it is touching the box 
			if(isRayExiting == FALSE) {
				rObjOrigin += d * rObjDirection * 1.00001;
			}
		// Get the position the voxel was hit at between 0 and voxelGridZise, as well as the ray's position 
			ivec3 voxelCoords = getVoxelPosition(rObjDirection, rObjOrigin, voxelBox, voxelGeometry);
		// See if we have hit anything in the voxel mesh, we don't want to record any hit data it we passed through
			if(voxelCoords != ivec3(-1)) {

			// Back off the ray origin so that we don't mistakenly put it inside a voxel 
				rObjOrigin -= rObjDirection;
			// Scale voxel coordinate space to voxel model space 
				vec3 voxelPosition = vec3(voxelCoords) * ((voxelBox.maxCorner - voxelBox.minCorner)) / voxelGeometry.gridDimensions;

			// Transform the voxel position by min corner, that is the voxel's min corner
				vec3 voxelMinCorner = voxelPosition + voxelBox.minCorner;
				vec3 voxelMaxCorner = voxelMinCorner + voxelGeometry.voxelSize;
				d = BoxIntersect(voxelMinCorner, voxelMaxCorner, rObjOriginOriginal, rObjDirection, normal, isRayExiting);
				t = d;
				hitNormal = transpose(mat3(voxelGeometry.voxelMeshInvMatrix)) * normal;
				hitEmission = vec3(0.0);
				// Normalize cellIndex to a 0-1 range within the voxel geometry's local space.
				vec3 normalizedCoords = vec3(voxelCoords) / voxelGeometry.gridDimensions;

				// Map the normalized coordinates to the corresponding segment of the texture atlas.
				// This is done by scaling the normalized coordinates to the size of the segment (textureMaxPosition - textureMinPosition)
				// and then translating them to the starting position of the segment (textureMinPosition).
				vec3 atlasCoords = voxelGeometry.textureMinPosition + normalizedCoords * (voxelGeometry.textureMaxPosition - voxelGeometry.textureMinPosition);

				hitColor = texture(voxelTexture, atlasCoords).rgb;
				hitType = voxelBox.type;
				hitObjectID = float(objectCount);
				objectCount++;
			}
		}
		objectCount++;
	}

	// color surfaces beneath the water
	vec3 underwaterHitPos = rayOrigin + rayDirection * t;
	float testPosWaveHeight = getWaterWaveHeight(underwaterHitPos);
	if(underwaterHitPos.y < testPosWaveHeight) {
		hitColor *= WATER_COLOR;
	}

	if(checkWater == FALSE) {
		return t;
	}

	///////////////////////////////////////////////////////////////////////////////////////////////////////
	// WATER VOLUME 
	///////////////////////////////////////////////////////////////////////////////////////////////////////

	vec3 pos = rayOrigin;
	vec3 dir = rayDirection;
	float h = 0.0;
	d = 0.0; // reset d

	for(int i = 0; i < 150; i++) {
		h = abs(pos.y - getWaterWaveHeight(pos));
		if(d > 10000.0 || h < 1.0)
			break;
		d += h * 0.5;
		pos += dir * h * 0.5;
	}
	if(h > WATER_WAVE_AMP)
		return t;

	if(d < t && pos.z < 0.0 && pos.z > -boxes[2].minCorner.z && pos.x > 0.0 && pos.x < boxes[2].minCorner.x) {
		float eps = 1.0;
		t = d;
		hitWorldSpace = pos;
		float dx = getWaterWaveHeight(hitWorldSpace - vec3(eps, 0, 0)) - getWaterWaveHeight(hitWorldSpace + vec3(eps, 0, 0));
		float dy = eps * 2.0; // (the water wave height is a function of x and z, not dependent on y)
		float dz = getWaterWaveHeight(hitWorldSpace - vec3(0, 0, eps)) - getWaterWaveHeight(hitWorldSpace + vec3(0, 0, eps));

		hitNormal = vec3(dx, dy, dz);
		hitEmission = vec3(0);
		hitColor = WATER_COLOR;
		hitType = REFR;
	}

	return t;
}

//-----------------------------------------------------------------------------------------------------------------------------
vec3 CalculateRadiance(out vec3 objectNormal, out vec3 objectColor, out float objectID, out float pixelSharpness)
//-----------------------------------------------------------------------------------------------------------------------------
{
	Quad light = quads[0];

	vec3 accumCol = vec3(0);
	vec3 mask = vec3(1);
	vec3 reflectionMask = vec3(1);
	vec3 reflectionRayOrigin = vec3(0);
	vec3 reflectionRayDirection = vec3(0);
	vec3 n, nl, x;
	vec3 dirToLight;
	vec3 tdir;

	float t = INFINITY;
	float nc, nt, ratioIoR, Re, Tr;
	//float P, RP, TP;
	float weight;
	float thickness = 0.01; // 0.02
	float hitObjectID;

	int diffuseCount = 0;
	int previousIntersecType = -100;
	hitType = -100;

	int coatTypeIntersected = FALSE;
	int bounceIsSpecular = TRUE;
	int sampleLight = FALSE;
	int checkWater = TRUE;
	int rayEnteredWater = FALSE;
	int willNeedReflectionRay = FALSE;

	for(int bounces = 0; bounces < 6; bounces++) {
		previousIntersecType = hitType;

		t = SceneIntersect(checkWater);
		checkWater = FALSE;

		if(t == INFINITY) {

			if(bounces == 0) {
				pixelSharpness = 1.01;
				vec3 environmentCol = Get_HDR_Color(rayDirection);

				accumCol += environmentCol;
				break;
			}

			if(willNeedReflectionRay == TRUE) {
				mask = reflectionMask;
				rayOrigin = reflectionRayOrigin;
				rayDirection = reflectionRayDirection;

				willNeedReflectionRay = FALSE;
				bounceIsSpecular = TRUE;
				sampleLight = FALSE;
				diffuseCount = 0;
				continue;
			}

			break;
		}

		// useful data 
		n = normalize(hitNormal);
		nl = dot(n, rayDirection) < 0.0 ? n : -n;
		x = rayOrigin + rayDirection * t;

		if(bounces == 0) {
			objectNormal = nl;
			objectColor = hitColor;
			objectID = hitObjectID;
		}
		if(bounces == 1 && previousIntersecType == SPEC) {
			objectNormal = nl;
		}

		if(hitType == LIGHT) {
			if(bounces == 0 || (bounces == 1 && previousIntersecType == SPEC))
				pixelSharpness = 1.01;

			if(diffuseCount == 0) {
				objectNormal = nl;
				objectColor = hitColor;
				objectID = hitObjectID;
			}

			if(sampleLight == TRUE || bounceIsSpecular == TRUE)
				accumCol += mask * hitEmission;

			if(willNeedReflectionRay == TRUE) {
				mask = reflectionMask;
				rayOrigin = reflectionRayOrigin;
				rayDirection = reflectionRayDirection;

				willNeedReflectionRay = FALSE;
				bounceIsSpecular = TRUE;
				sampleLight = FALSE;
				diffuseCount = 0;
				continue;
			}
			// reached a light, so we can exit
			break;
		}

		// if we get here and sampleLight is still TRUE, shadow ray failed to find the light source 
		// the ray hit an occluding object along its way to the light
		if(sampleLight == TRUE) {
			if(willNeedReflectionRay == TRUE) {
				mask = reflectionMask;
				rayOrigin = reflectionRayOrigin;
				rayDirection = reflectionRayDirection;

				willNeedReflectionRay = FALSE;
				bounceIsSpecular = TRUE;
				sampleLight = FALSE;
				diffuseCount = 0;
				continue;
			}

			break;
		}

		if(hitType == DIFF) // Ideal DIFFUSE reflection
		{

			if(rayEnteredWater == FALSE)
				mask *= hitColor;
			else {
				rayEnteredWater = FALSE;
				mask *= exp(log(WATER_COLOR) * thickness * t);
			}

			diffuseCount++;

			bounceIsSpecular = FALSE;

			if(diffuseCount == 1 && rand() < 0.4) {
				mask /= 0.4;
				// choose random Diffuse sample vector
				rayDirection = randomCosWeightedDirectionInHemisphere(nl);
				rayOrigin = x + nl * uEPS_intersect;
				continue;
			}

			dirToLight = sampleQuadLight(x, nl, quads[0], weight);
			mask /= diffuseCount == 1 ? 0.6 : 1.0;
			mask *= weight;

			rayDirection = dirToLight;
			rayOrigin = x + nl * uEPS_intersect;

			sampleLight = TRUE;
			continue;

		} // end if (hitType == DIFF)

		if(hitType == SPEC)  // Ideal SPECULAR reflection
		{
			if(rayEnteredWater == FALSE)
				mask *= hitColor;
			else {
				mask *= exp(log(WATER_COLOR) * thickness * t);
			}

			rayDirection = reflect(rayDirection, nl);
			rayOrigin = x + nl * uEPS_intersect;

			if(bounces == 0)
				checkWater = TRUE;

			continue;
		}

		if(hitType == REFR)  // Ideal dielectric REFRACTION
		{
			pixelSharpness = diffuseCount == 0 && coatTypeIntersected == FALSE ? -1.0 : pixelSharpness;

			nc = 1.0; // IOR of Air
			nt = 1.33; // IOR of Water
			Re = calcFresnelReflectance(rayDirection, n, nc, nt, ratioIoR);
			Tr = 1.0 - Re;

			if(bounces == 0 || (bounces == 1 && hitObjectID != objectID && bounceIsSpecular == TRUE)) {
				reflectionMask = mask * Re;
				reflectionRayDirection = reflect(rayDirection, nl); // reflect ray from surface
				reflectionRayOrigin = x + nl * uEPS_intersect;
				willNeedReflectionRay = TRUE;
			}

			if(Re == 1.0) {
				mask = reflectionMask;
				rayOrigin = reflectionRayOrigin;
				rayDirection = reflectionRayDirection;

				willNeedReflectionRay = FALSE;
				bounceIsSpecular = TRUE;
				sampleLight = FALSE;
				continue;
			}

			// transmit ray through surface	
			rayEnteredWater = TRUE;

			// is ray leaving a solid object from the inside? 
			// If so, attenuate ray color with object color by how far ray has travelled through the medium
			if(distance(n, nl) > 0.1) {
				rayEnteredWater = FALSE;
				mask *= exp(log(WATER_COLOR) * thickness * t);
			}

			mask *= Tr;

			tdir = refract(rayDirection, nl, ratioIoR);
			rayDirection = tdir;
			rayOrigin = x - nl * uEPS_intersect;

			continue;

		} // end if (hitType == REFR)

	} // end for (int bounces = 0; bounces < 5; bounces++)

	return max(vec3(0), accumCol); // prevents black spot artifacts appearing in the water 

}

//-----------------------------------------------------------------------
void SetupScene(void)
//-----------------------------------------------------------------------
{
	vec3 z = vec3(0);// No color value, Black        
	vec3 L1 = vec3(1.0, 0.7, 0.38) * 15.0;// Bright Yellowish light
		    // 0.736507, 0.642866, 0.210431  Original values

	boxes[0] = Box(vec3(-82.0, -170.0, -80.0), vec3(82.0, 170.0, 80.0), z, vec3(1), SPEC);// Tall Mirror Box Left
	boxes[1] = Box(vec3(-86.0, -85.0, -80.0), vec3(86.0, 85.0, 80.0), z, vec3(0.2, 0.8, 0.2), DIFF);// Short Diffuse Box Right
	boxes[2] = Box(vec3(-1000, 0, -1000), vec3(1000, 2000, 1000), z, vec3(1), DIFF);

// Centered area light (Quad) in the ceiling of the box
	float lightSideLength = 600.0; // Size of the light
	float ceilingY = 2000.0; // Y coordinate of the ceiling
	float halfBoxSize = 1000.0; // Half the size of the box
	float halfLightSize = lightSideLength * 0.5;

// Coordinates for the light
	vec3 v0 = vec3(-halfLightSize, ceilingY, -halfLightSize);
	vec3 v1 = vec3(halfLightSize, ceilingY, -halfLightSize);
	vec3 v2 = vec3(halfLightSize, ceilingY, halfLightSize);
	vec3 v3 = vec3(-halfLightSize, ceilingY, halfLightSize);

	quads[0] = Quad(vec3(0.0, -1.0, 0.0), v0, v1, v2, v3, L1, z, LIGHT);

}	

// tentFilter from Peter Shirley's 'Realistic Ray Tracing (2nd Edition)' book, pg. 60		
float tentFilter(float x) {
	return (x < 0.5) ? sqrt(2.0 * x) - 1.0 : 1.0 - sqrt(2.0 - (2.0 * x));
}

void main(void) {
        // not needed, three.js has a built-in uniform named cameraPosition
        //vec3 camPos   = vec3( uCameraMatrix[3][0],  uCameraMatrix[3][1],  uCameraMatrix[3][2]);

	vec3 camRight = vec3(uCameraMatrix[0][0], uCameraMatrix[0][1], uCameraMatrix[0][2]);
	vec3 camUp = vec3(uCameraMatrix[1][0], uCameraMatrix[1][1], uCameraMatrix[1][2]);
	vec3 camForward = vec3(-uCameraMatrix[2][0], -uCameraMatrix[2][1], -uCameraMatrix[2][2]);

        // calculate unique seed for rng() function
	seed = uvec2(uFrameCounter, uFrameCounter + 1.0) * uvec2(gl_FragCoord);

	// initialize rand() variables
	counter = -1.0; // will get incremented by 1 on each call to rand()
	channel = 0; // the final selected color channel to use for rand() calc (range: 0 to 3, corresponds to R,G,B, or A)
	randNumber = 0.0; // the final randomly-generated number (range: 0.0 to 1.0)
	randVec4 = vec4(0); // samples and holds the RGBA blueNoise texture value for this pixel
	randVec4 = texelFetch(tBlueNoiseTexture, ivec2(mod(gl_FragCoord.xy + floor(uRandomVec2 * 256.0), 256.0)), 0);

	vec2 pixelOffset = vec2(tentFilter(rand()), tentFilter(rand()));

	// we must map pixelPos into the range -1.0 to +1.0
	vec2 pixelPos = ((gl_FragCoord.xy + vec2(0.5) + pixelOffset) / uResolution) * 2.0 - 1.0;

	vec3 rayDir = uUseOrthographicCamera ? camForward : normalize(pixelPos.x * camRight * uULen + pixelPos.y * camUp * uVLen + camForward);

        // depth of field
	vec3 focalPoint = uFocusDistance * rayDir;
	float randomAngle = rng() * TWO_PI; // pick random point on aperture
	float randomRadius = rng() * uApertureSize;
	vec3 randomAperturePos = (cos(randomAngle) * camRight + sin(randomAngle) * camUp) * sqrt(randomRadius);
        // point on aperture to focal point
	vec3 finalRayDir = normalize(focalPoint - randomAperturePos);

	rayOrigin = uUseOrthographicCamera ? cameraPosition + (camRight * pixelPos.x * uULen * 100.0) + (camUp * pixelPos.y * uVLen * 100.0) + randomAperturePos : cameraPosition + randomAperturePos;
	rayDirection = finalRayDir;

	SetupScene(); 

        // Edge Detection - don't want to blur edges where either surface normals change abruptly (i.e. room wall corners), objects overlap each other (i.e. edge of a foreground sphere in front of another sphere right behind it),
	// or an abrupt color variation on the same smooth surface, even if it has similar surface normals (i.e. checkerboard pattern). Want to keep all of these cases as sharp as possible - no blur filter will be applied.
	vec3 objectNormal, objectColor;
	float objectID = -INFINITY;
	float pixelSharpness = 0.0;

	// perform path tracing and get resulting pixel color
	vec4 currentPixel = vec4(vec3(CalculateRadiance(objectNormal, objectColor, objectID, pixelSharpness)), 0.0);

	// if difference between normals of neighboring pixels is less than the first edge0 threshold, the white edge line effect is considered off (0.0)
	float edge0 = 0.2; // edge0 is the minimum difference required between normals of neighboring pixels to start becoming a white edge line
	// any difference between normals of neighboring pixels that is between edge0 and edge1 smoothly ramps up the white edge line brightness (smoothstep 0.0-1.0)
	float edge1 = 0.6; // once the difference between normals of neighboring pixels is >= this edge1 threshold, the white edge line is considered fully bright (1.0)
	float difference_Nx = fwidth(objectNormal.x);
	float difference_Ny = fwidth(objectNormal.y);
	float difference_Nz = fwidth(objectNormal.z);
	float normalDifference = smoothstep(edge0, edge1, difference_Nx) + smoothstep(edge0, edge1, difference_Ny) + smoothstep(edge0, edge1, difference_Nz);

	float objectDifference = min(fwidth(objectID), 1.0);

	float colorDifference = (fwidth(objectColor.r) + fwidth(objectColor.g) + fwidth(objectColor.b)) > 0.0 ? 1.0 : 0.0;
	// white-line debug visualization for normal difference
	//currentPixel.rgb += (rng() * 1.5) * vec3(normalDifference);
	// white-line debug visualization for object difference
	//currentPixel.rgb += (rng() * 1.5) * vec3(objectDifference);
	// white-line debug visualization for color difference
	//currentPixel.rgb += (rng() * 1.5) * vec3(colorDifference);
	// white-line debug visualization for all 3 differences
	//currentPixel.rgb += (rng() * 1.5) * vec3( clamp(max(normalDifference, max(objectDifference, colorDifference)), 0.0, 1.0) );

	vec4 previousPixel = texelFetch(tPreviousTexture, ivec2(gl_FragCoord.xy), 0);

	if(uCameraIsMoving) // camera is currently moving
	{
		previousPixel.rgb *= 0.6; // motion-blur trail amount (old image)
		currentPixel.rgb *= 0.4; // brightness of new image (noisy)

		previousPixel.a = 0.0;
	} else {
		previousPixel.rgb *= 0.8; // motion-blur trail amount (old image)
		currentPixel.rgb *= 0.2; // brightness of new image (noisy)
	}

	// if current raytraced pixel didn't return any color value, just use the previous frame's pixel color
	if(currentPixel.rgb == vec3(0.0)) {
		currentPixel.rgb = previousPixel.rgb;
		previousPixel.rgb *= 0.5;
		currentPixel.rgb *= 0.5;
	}

	currentPixel.a = 0.0;
	if(colorDifference >= 1.0 || normalDifference >= 1.0 || objectDifference >= 1.0)
		pixelSharpness = 1.01;

	currentPixel.a = pixelSharpness;

	// makes sharp edges more stable
	if(previousPixel.a == 1.01)
		currentPixel.a = 1.01;

	// for dynamic scenes (to clear out old, dark, sharp pixel trails left behind from moving objects)
	if(previousPixel.a == 1.01 && rng() < 0.05)
		currentPixel.a = 1.0;

	pc_fragColor = vec4(previousPixel.rgb + currentPixel.rgb, currentPixel.a);
}
