precision highp float;
precision highp int;
precision highp sampler2D;
precision highp sampler3D;

uniform float uBlurRatio;

// Voxel related uniforms.
uniform sampler3D voxelTexture;
uniform int uNumberOfVoxelGeometries;
uniform sampler2D uVoxelDataTexture;
uniform float uVoxelDataTextureWidth;

uniform sampler2D uVoxelLightTexture;
uniform int uNumberOfVoxelLights;
uniform float uVoxelLightTextureSize;

vec3 emission = vec3(1);
vec3 yellowLightColor = vec3(1.0, 0.8, 0.2) * 2.0;

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
	texelIndex = texelIndex * 1.01;
	float row = 0.0;

	VoxelGeometry voxel;
	vec4 temp;

    // Read voxel data
	temp = texture2D(uVoxelDataTexture, vec2(texelIndex / uVoxelDataTextureWidth, row));

	// Voxel size.
	voxel.voxelSize = temp.r; 

	// Voxel grid dimensions.
	voxel.gridDimensions = temp.gba;
	temp = texture2D(uVoxelDataTexture, vec2((texelIndex + 1.0) / uVoxelDataTextureWidth, row));

	// textureMinPositionNormalized
	voxel.textureMinPosition = temp.rgb;

	// textureMaxPositionNormalized
	voxel.textureMaxPosition.x = temp.a;
	temp = texture2D(uVoxelDataTexture, vec2((texelIndex + 2.0) / uVoxelDataTextureWidth, row));
	voxel.textureMaxPosition.yz = temp.rg;

	// Read and reconstruct the matrix directly without a loop
	voxel.voxelMeshInvMatrix[0] = texture2D(uVoxelDataTexture, vec2((texelIndex + 3.0) / uVoxelDataTextureWidth, row));
	voxel.voxelMeshInvMatrix[1] = texture2D(uVoxelDataTexture, vec2((texelIndex + 4.0) / uVoxelDataTextureWidth, row));
	voxel.voxelMeshInvMatrix[2] = texture2D(uVoxelDataTexture, vec2((texelIndex + 5.0) / uVoxelDataTextureWidth, row));
	voxel.voxelMeshInvMatrix[3] = texture2D(uVoxelDataTexture, vec2((texelIndex + 6.0) / uVoxelDataTextureWidth, row));

	return voxel;
}

#include <pathtracing_uniforms_and_defines>
const float epsilon = 0.0001;

#define N_BOXES 4

//-----------------------------------------------------------------------

vec3 rayOrigin, rayDirection;
// recorded intersection data:
vec3 hitNormal, hitEmission, hitColor, voxelCenter;
vec2 hitUV;
float hitObjectID, voxelSize, hitRoughness;
int hitType = -100;

struct Box {
	vec3 minCorner;
	vec3 maxCorner;
	vec3 emission;
	vec3 color;
	int type;
};

struct Sphere {
	float radius;
	vec3 position;
	vec3 emission;
	vec3 color;
	float roughness;
	int type;
};

Box boxes[N_BOXES];

#include <pathtracing_random_functions>

#include <pathtracing_calc_fresnel_reflectance>

#include <pathtracing_box_intersect>

#include <pathtracing_box_interior_intersect>

#include <pathtracing_sphere_intersect>

#include <pathtracing_sample_sphere_light>

Box getLightData(int lightIndex) {
	float N = float(uVoxelLightTextureSize);
	// lightIndex = 0; // FOR TESTING
	float index = float(lightIndex);
	float x = mod(index, N);
	float y = floor(index / N);

    // Correctly normalize the coordinates
	vec2 uv = vec2((x + 0.5) / N, (y + 0.5) / N);
	vec4 encodedLightData = texture2D(uVoxelLightTexture, uv);

	vec3 position = encodedLightData.rgb;
	float size = encodedLightData.a; 

    // Calculate the half size of the voxel cube to find min and max corners.
	float halfSize = size * 0.4;
	vec3 minCorner = position - vec3(halfSize);
	vec3 maxCorner = position + vec3(halfSize);

	return Box(minCorner, maxCorner, emission, yellowLightColor, LIGHT);
}

Box getRandomLightData() {
	int lightIndex = int(rand() * float(uNumberOfVoxelLights));
	Box light = getLightData(lightIndex);
	return light;
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

vec3 sampleBoxLight(vec3 x, vec3 nl, Box light, out float weight) {
    // Calculate the center of the box light
	vec3 lightCenter = (light.minCorner + light.maxCorner) * 0.5;
	vec3 dims = light.maxCorner - light.minCorner;

    // Direction from the point being shaded to the center of the box
	vec3 dirToLightCenter = lightCenter - x;
	float distanceToLightCenter = length(dirToLightCenter);
	dirToLightCenter = dirToLightCenter / distanceToLightCenter; // Normalize

    // Randomly choose an offset within the box dimensions to simulate variability in emitted light directions
	float offsetX = (rng() - 0.5) * dims.x;
	float offsetY = (rng() - 0.5) * dims.y;
	float offsetZ = (rng() - 0.5) * dims.z;
	vec3 offset = vec3(offsetX, offsetY, offsetZ);

    // Calculate a new light direction based on the random offset
	vec3 dirToRandomPointOnLight = normalize((lightCenter + offset) - x);

    // Weight calculation: Inverse square law for distance attenuation and Lambert's cosine law for angle of incidence
    // Note: This is a simplification and may not accurately represent the true distribution of light from a box source.
	float cosTheta = max(dot(nl, dirToRandomPointOnLight), 0.0);
	weight = cosTheta / (distanceToLightCenter * distanceToLightCenter);
	weight = clamp(weight, 0.0, 1.0); // Ensure weight is in [0, 1]

	return dirToRandomPointOnLight;
}

float SceneIntersect()
//--------------------------------------------------------------------------------------------------------
{
	vec3 rObjOrigin, rObjDirection;
	vec3 hitWorldSpace;
	vec3 normal, n;

	float d = INFINITY;
	float t = INFINITY;

	int objectCount = 0;

	int isRayExiting = FALSE;

	// Lights.
	for(int i = 0; i < uNumberOfVoxelLights; i++) {
		Box light = getLightData(i);
		d = BoxIntersect(light.minCorner, light.maxCorner, rObjOrigin, rObjDirection, normal, isRayExiting);
		if(d < t) {
			t = d;
			hitNormal = normal;
			hitEmission = light.emission;
			hitColor = light.color;
			hitType = light.type;
			hitObjectID = float(objectCount);
		}
		objectCount++;
	}

	// Voxels.
	// Transform the ray into the coordinateg space of the box containing the voxels.
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

				// Normalize cellIndex to a 0-1 range within the voxel geometry's local space.
				vec3 normalizedCoords = vec3(voxelCoords) / voxelGeometry.gridDimensions;

				// Map the normalized coordinates to the corresponding segment of the texture atlas.
				// This is done by scaling the normalized coordinates to the size of the segment (textureMaxPosition - textureMinPosition)
				// and then translating them to the starting position of the segment (textureMinPosition).
				vec3 atlasCoords = voxelGeometry.textureMinPosition + normalizedCoords * (voxelGeometry.textureMaxPosition - voxelGeometry.textureMinPosition);
				vec4 voxelHitColor = texture(voxelTexture, atlasCoords).rgba;

				// Record the hit info. 
				t = d;
				hitColor = voxelHitColor.rgb;
				hitType = int(voxelHitColor.a * 255.0);
				hitEmission = hitColor;

				if(hitType == 20) {
					hitType = LIGHT;
				}
				hitNormal = transpose(mat3(voxelGeometry.voxelMeshInvMatrix)) * normal;
				hitObjectID = float(objectCount);
				objectCount++;
			}
		}
		objectCount++;
	}

	return t;
}

vec3 Get_Star_Field_Color(vec3 rDirection) {
	vec3 baseColor = vec3(0.0); // Dark sky background color
	float starThreshold = 0.999; // Threshold to reduce the number of stars
	float scale = 1.0; // Adjust scale to control the density of stars

    // Normalize rDirection to ensure it's a unit vector
	rDirection = normalize(rDirection);

    // Convert rDirection from Cartesian to spherical coordinates (longitude and latitude)
	float longitude = atan(rDirection.z, rDirection.x) / PI;
	float latitude = asin(rDirection.y) / PI; // Use asin for latitude to spread stars more evenly

    // Apply a scaling factor to adjust the star distribution
	vec2 scaledCoords = vec2(longitude, latitude) * scale;

    // Sample the blue noise texture with the adjusted spherical coordinates
	vec3 noiseValue = texture2D(tBlueNoiseTexture, fract(scaledCoords)).rgb;

    // Determine if the current pixel should display a star based on the noise value
	if(noiseValue.r > starThreshold) {
		float brightness = fract(noiseValue.g * 20.0) * 0.5 + 0.5; // Modulate star brightness
		vec3 starColor = vec3(1.0); // White stars for simplicity, adjust for color variations

        // Add the star's brightness and color to the base sky color
		return baseColor + starColor * brightness;
	}

    // Return the base sky color where there are no stars
	return baseColor;
}

vec3 CalculateRadiance(out vec3 objectNormal, out vec3 objectColor, out float objectID, out float pixelSharpness)
//-----------------------------------------------------------------------------------------------------------------------------
{
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
	float thickness = 0.05; // 0.02
	float firstIntersectionRoughness = 0.0;

	float hitObjectID;
	bool voxelLight = false;

	int diffuseCount = 0;
	int previousIntersecType = -100;
	hitType = -100;

	int coatTypeIntersected = FALSE;
	int bounceIsSpecular = TRUE;
	int sampleLight = FALSE;
	int willNeedReflectionRay = FALSE;

	Box testLight = getRandomLightData();

	float r = (testLight.maxCorner - testLight.minCorner).x; // Take one component since it is a cube
	vec3 p = vec3((testLight.maxCorner + testLight.minCorner) / 2.0);
	Sphere testLightSphere = Sphere(r, p, emission, yellowLightColor, 0.0, LIGHT);

	for(int bounces = 0; bounces < 6; bounces++) {
		previousIntersecType = hitType;

		t = SceneIntersect();

		if(t == INFINITY) {

			if(bounces == 0) {
				pixelSharpness = 1.01;
				vec3 environmentCol = Get_Star_Field_Color(rayDirection);

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
			firstIntersectionRoughness = hitRoughness;
			objectNormal = nl;
			objectColor = hitColor;
			objectID = hitObjectID;
		}

		if(hitType == LIGHT || hitType == 19) {
			pixelSharpness = diffuseCount == 0 && firstIntersectionRoughness < 0.1 ? 1.01 : 0.0;

			if(bounceIsSpecular == TRUE || sampleLight == TRUE || hitType == 19)
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
			mask *= hitColor;

			diffuseCount++;

			bounceIsSpecular = FALSE;

			if(diffuseCount == 1 && rand() < 0.4) {
				mask /= 0.4;
				// choose random Diffuse sample vector
				rayDirection = randomCosWeightedDirectionInHemisphere(nl);
				rayOrigin = x + nl * uEPS_intersect;
				continue;
			}
			dirToLight = sampleSphereLight(x, nl, testLightSphere, weight);
			// dirToLight = sampleBoxLight(x, nl, testLight, weight);
			mask /= diffuseCount == 1 ? 0.6 : 1.0;
			mask *= weight * float(uNumberOfVoxelLights);

			rayDirection = dirToLight;
			rayOrigin = x + nl * uEPS_intersect;

			sampleLight = TRUE;
			continue;

		} // end if (hitType == DIFF)

		if(hitType == SPEC)  // Ideal SPECULAR reflection
		{
			mask *= hitColor;
			mask *= 1.25;

			if(diffuseCount == 0 && rand() >= hitRoughness) {
				rayDirection = reflect(rayDirection, nl); // reflect ray from metal surface
				rayDirection = randomDirectionInSpecularLobe(rayDirection, hitRoughness * 0.9);
				rayOrigin = x + nl * uEPS_intersect;
				continue;
			}

			diffuseCount++;

			bounceIsSpecular = FALSE;

			if(diffuseCount == 1 && rand() < 0.5) {
				mask *= 2.0;
				// choose random Diffuse sample vector
				rayDirection = randomCosWeightedDirectionInHemisphere(nl);
				rayOrigin = x + nl * uEPS_intersect;
				continue;
			}
			dirToLight = sampleSphereLight(x, nl, testLightSphere, weight);
			// dirToLight = sampleBoxLight(x, nl, testLight, weight);
			mask *= diffuseCount == 1 ? 2.0 : 1.0;
			mask *= weight;// * float(uNumberOfVoxelLights);

			rayDirection = dirToLight;
			rayOrigin = x + nl * uEPS_intersect;

			sampleLight = TRUE;
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

			mask *= Tr;

			tdir = refract(rayDirection, nl, ratioIoR);
			rayDirection = tdir;
			rayOrigin = x - nl * uEPS_intersect;

			continue;

		}

	}
	return max(vec3(0), accumCol);
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
		previousPixel.rgb *= uBlurRatio; // motion-blur trail amount (old image)
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
	if(previousPixel.a == 1.01 && rng() < 0.5)
		currentPixel.a = 1.0;

	pc_fragColor = vec4(previousPixel.rgb + currentPixel.rgb, currentPixel.a);
}
