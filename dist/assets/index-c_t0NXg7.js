var xl=Object.defineProperty;var yl=(n,e,t)=>e in n?xl(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var fe=(n,e,t)=>(yl(n,typeof e!="symbol"?e+"":e,t),t),Ml=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var ot=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)};var nt=(n,e,t)=>(Ml(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ta="160",Sl=0,Ga=1,El=2,hs=1,bl=2,tn=3,gn=0,Rt=1,Wt=2,fn=0,Jn=1,Ha=2,ka=3,Va=4,Tl=5,Rn=100,Al=101,wl=102,Wa=103,Xa=104,Rl=200,Cl=201,Pl=202,Dl=203,fa=204,pa=205,Ll=206,Il=207,Ul=208,Nl=209,Ol=210,Fl=211,zl=212,Bl=213,Gl=214,Hl=0,kl=1,Vl=2,nr=3,Wl=4,Xl=5,ql=6,Yl=7,us=0,jl=1,Kl=2,pn=0,Zl=1,fs=2,$l=3,Ql=4,Jl=5,ec=6,ps=300,ni=301,ii=302,ma=303,ga=304,Rr=306,vi=1e3,Lt=1001,_a=1002,$e=1003,qa=1004,Nr=1005,ft=1006,tc=1007,ri=1008,Xt=1009,nc=1010,ic=1011,Aa=1012,ms=1013,un=1014,bt=1015,rn=1016,gs=1017,_s=1018,Pn=1020,rc=1021,xt=1023,ac=1024,oc=1025,Dn=1026,ai=1027,sc=1028,vs=1029,lc=1030,xs=1031,ys=1033,Or=33776,Fr=33777,zr=33778,Br=33779,Ya=35840,ja=35841,Ka=35842,Za=35843,Ms=36196,$a=37492,Qa=37496,Ja=37808,eo=37809,to=37810,no=37811,io=37812,ro=37813,ao=37814,oo=37815,so=37816,lo=37817,co=37818,ho=37819,uo=37820,fo=37821,Gr=36492,po=36494,mo=36495,cc=36283,go=36284,_o=36285,vo=36286,Ss=3e3,Ln=3001,dc=3200,hc=3201,Es=0,uc=1,Ot="",ut="srgb",Yt="srgb-linear",wa="display-p3",Cr="display-p3-linear",ir="linear",Ze="srgb",rr="rec709",ar="p3",Nn=7680,xo=519,fc=512,pc=513,mc=514,bs=515,gc=516,_c=517,vc=518,xc=519,yo=35044,Mo="300 es",va=1035,an=2e3,or=2001;class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hr=Math.PI/180,xa=180/Math.PI;function Si(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function yc(n,e){return(n%e+e)%e}function kr(n,e,t){return(1-t)*n+t*e}function So(n){return(n&n-1)===0&&n!==0}function ya(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,r,a,s,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],u=i[7],f=i[2],m=i[5],_=i[8],y=r[0],p=r[3],h=r[6],b=r[1],g=r[4],A=r[7],D=r[2],w=r[5],T=r[8];return a[0]=s*y+o*b+l*D,a[3]=s*p+o*g+l*w,a[6]=s*h+o*A+l*T,a[1]=c*y+d*b+u*D,a[4]=c*p+d*g+u*w,a[7]=c*h+d*A+u*T,a[2]=f*y+m*b+_*D,a[5]=f*p+m*g+_*w,a[8]=f*h+m*A+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-i*a*d+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*s-o*c,f=o*l-d*a,m=c*a-s*l,_=t*u+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=u*y,e[1]=(r*c-d*i)*y,e[2]=(o*i-r*s)*y,e[3]=f*y,e[4]=(d*t-r*l)*y,e[5]=(r*a-o*t)*y,e[6]=m*y,e[7]=(i*l-c*t)*y,e[8]=(s*t-i*a)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vr.makeScale(e,t)),this}rotate(e){return this.premultiply(Vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new Be;function Ts(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xi(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mc(){const n=xi("canvas");return n.style.display="block",n}const Eo={};function gi(n){n in Eo||(Eo[n]=!0,console.warn(n))}const bo=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),To=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ci={[Yt]:{transfer:ir,primaries:rr,toReference:n=>n,fromReference:n=>n},[ut]:{transfer:Ze,primaries:rr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Cr]:{transfer:ir,primaries:ar,toReference:n=>n.applyMatrix3(To),fromReference:n=>n.applyMatrix3(bo)},[wa]:{transfer:Ze,primaries:ar,toReference:n=>n.convertSRGBToLinear().applyMatrix3(To),fromReference:n=>n.applyMatrix3(bo).convertLinearToSRGB()}},Sc=new Set([Yt,Cr]),qe={enabled:!0,_workingColorSpace:Yt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Sc.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ci[e].toReference,r=Ci[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ci[n].primaries},getTransfer:function(n){return n===Ot?ir:Ci[n].transfer}};function ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let On;class As{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{On===void 0&&(On=xi("canvas")),On.width=e.width,On.height=e.height;const i=On.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=On}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xi("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=ei(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ei(t[i]/255)*255):t[i]=ei(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ec=0;class ws{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=Si(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Xr(r[s].image)):a.push(Xr(r[s]))}else a=Xr(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Xr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?As.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bc=0;class Tt extends si{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,i=Lt,r=Lt,a=ft,s=ri,o=xt,l=Xt,c=Tt.DEFAULT_ANISOTROPY,d=Ot){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=Si(),this.name="",this.source=new ws(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ln?ut:Ot),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ps)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vi:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case _a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vi:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case _a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ut?Ln:Ss}set encoding(e){gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ln?ut:Ot}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=ps;Tt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],m=l[5],_=l[9],y=l[2],p=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+y)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,A=(m+1)/2,D=(h+1)/2,w=(d+f)/4,T=(u+y)/4,H=(_+p)/4;return g>A&&g>D?g<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(g),r=w/i,a=T/i):A>D?A<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(A),i=w/r,a=H/r):D<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(D),i=T/a,r=H/a),this.set(i,r,a,t),this}let b=Math.sqrt((p-_)*(p-_)+(u-y)*(u-y)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(u-y)/b,this.z=(f-d)/b,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tc extends si{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(gi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ln?ut:Ot),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ft,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Tt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ws(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends Tc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rs extends Tt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ra extends Tt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class li{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],d=i[r+2],u=i[r+3];const f=a[s+0],m=a[s+1],_=a[s+2],y=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=y;return}if(u!==y||l!==f||c!==m||d!==_){let p=1-o;const h=l*f+c*m+d*_+u*y,b=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const D=Math.sqrt(g),w=Math.atan2(D,h*b);p=Math.sin(p*w)/D,o=Math.sin(o*w)/D}const A=o*b;if(l=l*p+f*A,c=c*p+m*A,d=d*p+_*A,u=u*p+y*A,p===1-o){const D=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=D,c*=D,d*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],u=a[s],f=a[s+1],m=a[s+2],_=a[s+3];return e[t]=o*_+d*u+l*m-c*f,e[t+1]=l*_+d*f+c*u-o*m,e[t+2]=c*_+d*m+o*f-l*u,e[t+3]=d*_-o*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),u=o(a/2),f=l(i/2),m=l(r/2),_=l(a/2);switch(s){case"XYZ":this._x=f*d*u+c*m*_,this._y=c*m*u-f*d*_,this._z=c*d*_+f*m*u,this._w=c*d*u-f*m*_;break;case"YXZ":this._x=f*d*u+c*m*_,this._y=c*m*u-f*d*_,this._z=c*d*_-f*m*u,this._w=c*d*u+f*m*_;break;case"ZXY":this._x=f*d*u-c*m*_,this._y=c*m*u+f*d*_,this._z=c*d*_+f*m*u,this._w=c*d*u-f*m*_;break;case"ZYX":this._x=f*d*u-c*m*_,this._y=c*m*u+f*d*_,this._z=c*d*_-f*m*u,this._w=c*d*u+f*m*_;break;case"YZX":this._x=f*d*u+c*m*_,this._y=c*m*u+f*d*_,this._z=c*d*_-f*m*u,this._w=c*d*u-f*m*_;break;case"XZY":this._x=f*d*u-c*m*_,this._y=c*m*u-f*d*_,this._z=c*d*_+f*m*u,this._w=c*d*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=i+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(d-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+s*o+r*c-a*l,this._y=r*d+s*l+a*o-i*c,this._z=a*d+s*c+i*l-r*o,this._w=s*d-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=s*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=a*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ao.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ao.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),d=2*(o*t-a*r),u=2*(a*i-s*t);return this.x=t+l*c+s*u-o*d,this.y=i+l*d+o*c-a*u,this.z=r+l*u+a*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qr.copy(this).projectOnVector(e),this.sub(qr)}reflect(e){return this.sub(qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new C,Ao=new li;class Ei{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,zt):zt.fromBufferAttribute(a,s),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pi.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pi.copy(i.boundingBox)),Pi.applyMatrix4(e.matrixWorld),this.union(Pi)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ui),Di.subVectors(this.max,ui),Fn.subVectors(e.a,ui),zn.subVectors(e.b,ui),Bn.subVectors(e.c,ui),on.subVectors(zn,Fn),sn.subVectors(Bn,zn),Sn.subVectors(Fn,Bn);let t=[0,-on.z,on.y,0,-sn.z,sn.y,0,-Sn.z,Sn.y,on.z,0,-on.x,sn.z,0,-sn.x,Sn.z,0,-Sn.x,-on.y,on.x,0,-sn.y,sn.x,0,-Sn.y,Sn.x,0];return!Yr(t,Fn,zn,Bn,Di)||(t=[1,0,0,0,1,0,0,0,1],!Yr(t,Fn,zn,Bn,Di))?!1:(Li.crossVectors(on,sn),t=[Li.x,Li.y,Li.z],Yr(t,Fn,zn,Bn,Di))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kt=[new C,new C,new C,new C,new C,new C,new C,new C],zt=new C,Pi=new Ei,Fn=new C,zn=new C,Bn=new C,on=new C,sn=new C,Sn=new C,ui=new C,Di=new C,Li=new C,En=new C;function Yr(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){En.fromArray(n,a);const o=r.x*Math.abs(En.x)+r.y*Math.abs(En.y)+r.z*Math.abs(En.z),l=e.dot(En),c=t.dot(En),d=i.dot(En);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Ac=new Ei,fi=new C,jr=new C;class Ca{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ac.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fi.subVectors(e,this.center);const t=fi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(fi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fi.copy(e.center).add(jr)),this.expandByPoint(fi.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zt=new C,Kr=new C,Ii=new C,ln=new C,Zr=new C,Ui=new C,$r=new C;class wc{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zt.copy(this.origin).addScaledVector(this.direction,t),Zt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Kr.copy(e).add(t).multiplyScalar(.5),Ii.copy(t).sub(e).normalize(),ln.copy(this.origin).sub(Kr);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Ii),o=ln.dot(this.direction),l=-ln.dot(Ii),c=ln.lengthSq(),d=Math.abs(1-s*s);let u,f,m,_;if(d>0)if(u=s*l-o,f=s*o-l,_=a*d,u>=0)if(f>=-_)if(f<=_){const y=1/d;u*=y,f*=y,m=u*(u+s*f+2*o)+f*(s*u+f+2*l)+c}else f=a,u=Math.max(0,-(s*f+o)),m=-u*u+f*(f+2*l)+c;else f=-a,u=Math.max(0,-(s*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-s*a+o)),f=u>0?-a:Math.min(Math.max(-a,-l),a),m=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+c):(u=Math.max(0,-(s*a+o)),f=u>0?a:Math.min(Math.max(-a,-l),a),m=-u*u+f*(f+2*l)+c);else f=s>0?-a:a,u=Math.max(0,-(s*f+o)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Kr).addScaledVector(Ii,f),m}intersectSphere(e,t){Zt.subVectors(e.center,this.origin);const i=Zt.dot(this.direction),r=Zt.dot(Zt)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(a=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(a=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Zt)!==null}intersectTriangle(e,t,i,r,a){Zr.subVectors(t,e),Ui.subVectors(i,e),$r.crossVectors(Zr,Ui);let s=this.direction.dot($r),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ln.subVectors(this.origin,e);const l=o*this.direction.dot(Ui.crossVectors(ln,Ui));if(l<0)return null;const c=o*this.direction.dot(Zr.cross(ln));if(c<0||l+c>s)return null;const d=-o*ln.dot($r);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,r,a,s,o,l,c,d,u,f,m,_,y,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,d,u,f,m,_,y,p)}set(e,t,i,r,a,s,o,l,c,d,u,f,m,_,y,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=a,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=u,h[14]=f,h[3]=m,h[7]=_,h[11]=y,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Gn.setFromMatrixColumn(e,0).length(),a=1/Gn.setFromMatrixColumn(e,1).length(),s=1/Gn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const f=s*d,m=s*u,_=o*d,y=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=_+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*d,m=l*u,_=c*d,y=c*u;t[0]=f+y*o,t[4]=_*o-m,t[8]=s*c,t[1]=s*u,t[5]=s*d,t[9]=-o,t[2]=m*o-_,t[6]=y+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*d,m=l*u,_=c*d,y=c*u;t[0]=f-y*o,t[4]=-s*u,t[8]=_+m*o,t[1]=m+_*o,t[5]=s*d,t[9]=y-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*d,m=s*u,_=o*d,y=o*u;t[0]=l*d,t[4]=_*c-m,t[8]=f*c+y,t[1]=l*u,t[5]=y*c+f,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,_=o*l,y=o*c;t[0]=l*d,t[4]=y-f*u,t[8]=_*u+m,t[1]=u,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*u+_,t[10]=f-y*u}else if(e.order==="XZY"){const f=s*l,m=s*c,_=o*l,y=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+y,t[5]=s*d,t[9]=m*u-_,t[2]=_*u-m,t[6]=o*d,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rc,e,Cc)}lookAt(e,t,i){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),cn.crossVectors(i,Pt),cn.lengthSq()===0&&(Math.abs(i.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),cn.crossVectors(i,Pt)),cn.normalize(),Ni.crossVectors(Pt,cn),r[0]=cn.x,r[4]=Ni.x,r[8]=Pt.x,r[1]=cn.y,r[5]=Ni.y,r[9]=Pt.y,r[2]=cn.z,r[6]=Ni.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],u=i[5],f=i[9],m=i[13],_=i[2],y=i[6],p=i[10],h=i[14],b=i[3],g=i[7],A=i[11],D=i[15],w=r[0],T=r[4],H=r[8],x=r[12],E=r[1],I=r[5],Y=r[9],re=r[13],P=r[2],U=r[6],W=r[10],q=r[14],V=r[3],X=r[7],Q=r[11],te=r[15];return a[0]=s*w+o*E+l*P+c*V,a[4]=s*T+o*I+l*U+c*X,a[8]=s*H+o*Y+l*W+c*Q,a[12]=s*x+o*re+l*q+c*te,a[1]=d*w+u*E+f*P+m*V,a[5]=d*T+u*I+f*U+m*X,a[9]=d*H+u*Y+f*W+m*Q,a[13]=d*x+u*re+f*q+m*te,a[2]=_*w+y*E+p*P+h*V,a[6]=_*T+y*I+p*U+h*X,a[10]=_*H+y*Y+p*W+h*Q,a[14]=_*x+y*re+p*q+h*te,a[3]=b*w+g*E+A*P+D*V,a[7]=b*T+g*I+A*U+D*X,a[11]=b*H+g*Y+A*W+D*Q,a[15]=b*x+g*re+A*q+D*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],m=e[14],_=e[3],y=e[7],p=e[11],h=e[15];return _*(+a*l*u-r*c*u-a*o*f+i*c*f+r*o*m-i*l*m)+y*(+t*l*m-t*c*f+a*s*f-r*s*m+r*c*d-a*l*d)+p*(+t*c*u-t*o*m-a*s*u+i*s*m+a*o*d-i*c*d)+h*(-r*o*d-t*l*u+t*o*f+r*s*u-i*s*f+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],m=e[11],_=e[12],y=e[13],p=e[14],h=e[15],b=u*p*c-y*f*c+y*l*m-o*p*m-u*l*h+o*f*h,g=_*f*c-d*p*c-_*l*m+s*p*m+d*l*h-s*f*h,A=d*y*c-_*u*c+_*o*m-s*y*m-d*o*h+s*u*h,D=_*u*l-d*y*l-_*o*f+s*y*f+d*o*p-s*u*p,w=t*b+i*g+r*A+a*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=b*T,e[1]=(y*f*a-u*p*a-y*r*m+i*p*m+u*r*h-i*f*h)*T,e[2]=(o*p*a-y*l*a+y*r*c-i*p*c-o*r*h+i*l*h)*T,e[3]=(u*l*a-o*f*a-u*r*c+i*f*c+o*r*m-i*l*m)*T,e[4]=g*T,e[5]=(d*p*a-_*f*a+_*r*m-t*p*m-d*r*h+t*f*h)*T,e[6]=(_*l*a-s*p*a-_*r*c+t*p*c+s*r*h-t*l*h)*T,e[7]=(s*f*a-d*l*a+d*r*c-t*f*c-s*r*m+t*l*m)*T,e[8]=A*T,e[9]=(_*u*a-d*y*a-_*i*m+t*y*m+d*i*h-t*u*h)*T,e[10]=(s*y*a-_*o*a+_*i*c-t*y*c-s*i*h+t*o*h)*T,e[11]=(d*o*a-s*u*a-d*i*c+t*u*c+s*i*m-t*o*m)*T,e[12]=D*T,e[13]=(d*y*r-_*u*r+_*i*f-t*y*f-d*i*p+t*u*p)*T,e[14]=(_*o*r-s*y*r-_*i*l+t*y*l+s*i*p-t*o*p)*T,e[15]=(s*u*r-d*o*r+d*i*l-t*u*l-s*i*f+t*o*f)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,d=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*s,0,c*l-r*o,d*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,d=s+s,u=o+o,f=a*c,m=a*d,_=a*u,y=s*d,p=s*u,h=o*u,b=l*c,g=l*d,A=l*u,D=i.x,w=i.y,T=i.z;return r[0]=(1-(y+h))*D,r[1]=(m+A)*D,r[2]=(_-g)*D,r[3]=0,r[4]=(m-A)*w,r[5]=(1-(f+h))*w,r[6]=(p+b)*w,r[7]=0,r[8]=(_+g)*T,r[9]=(p-b)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Gn.set(r[0],r[1],r[2]).length();const s=Gn.set(r[4],r[5],r[6]).length(),o=Gn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Bt.copy(this);const c=1/a,d=1/s,u=1/o;return Bt.elements[0]*=c,Bt.elements[1]*=c,Bt.elements[2]*=c,Bt.elements[4]*=d,Bt.elements[5]*=d,Bt.elements[6]*=d,Bt.elements[8]*=u,Bt.elements[9]*=u,Bt.elements[10]*=u,t.setFromRotationMatrix(Bt),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=an){const l=this.elements,c=2*a/(t-e),d=2*a/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r);let m,_;if(o===an)m=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===or)m=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=an){const l=this.elements,c=1/(t-e),d=1/(i-r),u=1/(s-a),f=(t+e)*c,m=(i+r)*d;let _,y;if(o===an)_=(s+a)*u,y=-2*u;else if(o===or)_=a*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gn=new C,Bt=new at,Rc=new C(0,0,0),Cc=new C(1,1,1),cn=new C,Ni=new C,Pt=new C,wo=new at,Ro=new li;class bi{constructor(e=0,t=0,i=0,r=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],d=r[9],u=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ro.setFromEuler(this),this.setFromQuaternion(Ro,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Cs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pc=0;const Co=new C,Hn=new li,$t=new at,Oi=new C,pi=new C,Dc=new C,Lc=new li,Po=new C(1,0,0),Do=new C(0,1,0),Lo=new C(0,0,1),Ic={type:"added"},Uc={type:"removed"};class At extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new C,t=new bi,i=new li,r=new C(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Be}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.multiply(Hn),this}rotateOnWorldAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.premultiply(Hn),this}rotateX(e){return this.rotateOnAxis(Po,e)}rotateY(e){return this.rotateOnAxis(Do,e)}rotateZ(e){return this.rotateOnAxis(Lo,e)}translateOnAxis(e,t){return Co.copy(e).applyQuaternion(this.quaternion),this.position.add(Co.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Po,e)}translateY(e){return this.translateOnAxis(Do,e)}translateZ(e){return this.translateOnAxis(Lo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Oi.copy(e):Oi.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(pi,Oi,this.up):$t.lookAt(Oi,pi,this.up),this.quaternion.setFromRotationMatrix($t),r&&($t.extractRotation(r.matrixWorld),Hn.setFromRotationMatrix($t),this.quaternion.premultiply(Hn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ic)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,e,Dc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,Lc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),u=s(e.shapes),f=s(e.skeletons),m=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}At.DEFAULT_UP=new C(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new C,Qt=new C,Qr=new C,Jt=new C,kn=new C,Vn=new C,Io=new C,Jr=new C,ea=new C,ta=new C;let Fi=!1;class Ht{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gt.subVectors(e,t),r.cross(Gt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Gt.subVectors(r,t),Qt.subVectors(i,t),Qr.subVectors(e,t);const s=Gt.dot(Gt),o=Gt.dot(Qt),l=Gt.dot(Qr),c=Qt.dot(Qt),d=Qt.dot(Qr),u=s*c-o*o;if(u===0)return a.set(0,0,0),null;const f=1/u,m=(c*l-o*d)*f,_=(s*d-o*l)*f;return a.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Jt)===null?!1:Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getUV(e,t,i,r,a,s,o,l){return Fi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fi=!0),this.getInterpolation(e,t,i,r,a,s,o,l)}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,Jt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Jt.x),l.addScaledVector(s,Jt.y),l.addScaledVector(o,Jt.z),l)}static isFrontFacing(e,t,i,r){return Gt.subVectors(i,t),Qt.subVectors(e,t),Gt.cross(Qt).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),Gt.cross(Qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return Fi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fi=!0),Ht.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return Ht.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;kn.subVectors(r,i),Vn.subVectors(a,i),Jr.subVectors(e,i);const l=kn.dot(Jr),c=Vn.dot(Jr);if(l<=0&&c<=0)return t.copy(i);ea.subVectors(e,r);const d=kn.dot(ea),u=Vn.dot(ea);if(d>=0&&u<=d)return t.copy(r);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(i).addScaledVector(kn,s);ta.subVectors(e,a);const m=kn.dot(ta),_=Vn.dot(ta);if(_>=0&&m<=_)return t.copy(a);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Vn,o);const p=d*_-m*u;if(p<=0&&u-d>=0&&m-_>=0)return Io.subVectors(a,r),o=(u-d)/(u-d+(m-_)),t.copy(r).addScaledVector(Io,o);const h=1/(p+y+f);return s=y*h,o=f*h,t.copy(i).addScaledVector(kn,s).addScaledVector(Vn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ps={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},zi={h:0,s:0,l:0};function na(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=qe.workingColorSpace){if(e=yc(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=na(s,a,e+1/3),this.g=na(s,a,e),this.b=na(s,a,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,t=ut){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const i=Ps[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return qe.fromWorkingColorSpace(_t.copy(this),e),Math.round(vt(_t.r*255,0,255))*65536+Math.round(vt(_t.g*255,0,255))*256+Math.round(vt(_t.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(_t.copy(this),t);const i=_t.r,r=_t.g,a=_t.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const u=s-o;switch(c=d<=.5?u/(s+o):u/(2-s-o),s){case i:l=(r-a)/u+(r<a?6:0);break;case r:l=(a-i)/u+2;break;case a:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=ut){qe.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,i=_t.g,r=_t.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(dn),this.setHSL(dn.h+e,dn.s+t,dn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL(zi);const i=kr(dn.h,zi.h,t),r=kr(dn.s,zi.s,t),a=kr(dn.l,zi.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new ke;ke.NAMES=Ps;let Nc=0;class Ti extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Jn,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=pa,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nn,this.stencilZFail=Nn,this.stencilZPass=Nn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(i.blending=this.blending),this.side!==gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fa&&(i.blendSrc=this.blendSrc),this.blendDst!==pa&&(i.blendDst=this.blendDst),this.blendEquation!==Rn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yi extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=Oc();function Oc(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const a=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;!(c&8388608);)c<<=1,d-=8388608;c&=-8388609,d+=947912704,a[l]=c|d}for(let l=1024;l<2048;++l)a[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:a,exponentTable:s,offsetTable:o}}function Fc(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=vt(n,-65504,65504),nn.floatView[0]=n;const e=nn.uint32View[0],t=e>>23&511;return nn.baseTable[t]+((e&8388607)>>nn.shiftTable[t])}function zc(n){const e=n>>10;return nn.uint32View[0]=nn.mantissaTable[nn.offsetTable[e]+(n&1023)]+nn.exponentTable[e],nn.floatView[0]}const Bi={toHalfFloat:Fc,fromHalfFloat:zc},rt=new C,Gi=new Ve;class qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gi.fromBufferAttribute(this,t),Gi.applyMatrix3(e),this.setXY(t,Gi.x,Gi.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),a=wt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yo&&(e.usage=this.usage),e}}class Ds extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ls extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class In extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Bc=0;const Ut=new at,ia=new At,Wn=new C,Dt=new Ei,mi=new Ei,ht=new C;class Un extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ts(e)?Ls:Ds)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Be().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,i){return Ut.makeTranslation(e,t,i),this.applyMatrix4(Ut),this}scale(e,t,i){return Ut.makeScale(e,t,i),this.applyMatrix4(Ut),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wn).negate(),this.translate(Wn.x,Wn.y,Wn.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new In(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Dt.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];mi.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(Dt.min,mi.min),Dt.expandByPoint(ht),ht.addVectors(Dt.max,mi.max),Dt.expandByPoint(ht)):(Dt.expandByPoint(mi.min),Dt.expandByPoint(mi.max))}Dt.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)ht.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(ht));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)ht.fromBufferAttribute(o,c),l&&(Wn.fromBufferAttribute(e,c),ht.add(Wn)),r=Math.max(r,i.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,s=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let E=0;E<o;E++)c[E]=new C,d[E]=new C;const u=new C,f=new C,m=new C,_=new Ve,y=new Ve,p=new Ve,h=new C,b=new C;function g(E,I,Y){u.fromArray(r,E*3),f.fromArray(r,I*3),m.fromArray(r,Y*3),_.fromArray(s,E*2),y.fromArray(s,I*2),p.fromArray(s,Y*2),f.sub(u),m.sub(u),y.sub(_),p.sub(_);const re=1/(y.x*p.y-p.x*y.y);isFinite(re)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(re),b.copy(m).multiplyScalar(y.x).addScaledVector(f,-p.x).multiplyScalar(re),c[E].add(h),c[I].add(h),c[Y].add(h),d[E].add(b),d[I].add(b),d[Y].add(b))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let E=0,I=A.length;E<I;++E){const Y=A[E],re=Y.start,P=Y.count;for(let U=re,W=re+P;U<W;U+=3)g(i[U+0],i[U+1],i[U+2])}const D=new C,w=new C,T=new C,H=new C;function x(E){T.fromArray(a,E*3),H.copy(T);const I=c[E];D.copy(I),D.sub(T.multiplyScalar(T.dot(I))).normalize(),w.crossVectors(H,I);const re=w.dot(d[E])<0?-1:1;l[E*4]=D.x,l[E*4+1]=D.y,l[E*4+2]=D.z,l[E*4+3]=re}for(let E=0,I=A.length;E<I;++E){const Y=A[E],re=Y.start,P=Y.count;for(let U=re,W=re+P;U<W;U+=3)x(i[U+0]),x(i[U+1]),x(i[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new C,a=new C,s=new C,o=new C,l=new C,c=new C,d=new C,u=new C;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,y),s.fromBufferAttribute(t,p),d.subVectors(s,a),u.subVectors(r,a),d.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),d.subVectors(s,a),u.subVectors(r,a),d.cross(u),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*d;for(let h=0;h<d;h++)f[_++]=c[m++]}return new qt(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,u=c.length;d<u;d++){const f=c[d],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],u=a[c];for(let f=0,m=u.length;f<m;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uo=new at,bn=new wc,Hi=new Ca,No=new C,Xn=new C,qn=new C,Yn=new C,ra=new C,ki=new C,Vi=new Ve,Wi=new Ve,Xi=new Ve,Oo=new C,Fo=new C,zo=new C,qi=new C,Yi=new C;class Ft extends At{constructor(e=new Un,t=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){ki.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],u=a[l];d!==0&&(ra.fromBufferAttribute(u,e),s?ki.addScaledVector(ra,d):ki.addScaledVector(ra.sub(t),d))}t.add(ki)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hi.copy(i.boundingSphere),Hi.applyMatrix4(a),bn.copy(e.ray).recast(e.near),!(Hi.containsPoint(bn.origin)===!1&&(bn.intersectSphere(Hi,No)===null||bn.origin.distanceToSquared(No)>(e.far-e.near)**2))&&(Uo.copy(a).invert(),bn.copy(e.ray).applyMatrix4(Uo),!(i.boundingBox!==null&&bn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bn)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,u=a.attributes.normal,f=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,y=f.length;_<y;_++){const p=f[_],h=s[p.materialIndex],b=Math.max(p.start,m.start),g=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,D=g;A<D;A+=3){const w=o.getX(A),T=o.getX(A+1),H=o.getX(A+2);r=ji(this,h,e,i,c,d,u,w,T,H),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=_,h=y;p<h;p+=3){const b=o.getX(p),g=o.getX(p+1),A=o.getX(p+2);r=ji(this,s,e,i,c,d,u,b,g,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,y=f.length;_<y;_++){const p=f[_],h=s[p.materialIndex],b=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,D=g;A<D;A+=3){const w=A,T=A+1,H=A+2;r=ji(this,h,e,i,c,d,u,w,T,H),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=_,h=y;p<h;p+=3){const b=p,g=p+1,A=p+2;r=ji(this,s,e,i,c,d,u,b,g,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Gc(n,e,t,i,r,a,s,o){let l;if(e.side===Rt?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===gn,o),l===null)return null;Yi.copy(o),Yi.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Yi);return c<t.near||c>t.far?null:{distance:c,point:Yi.clone(),object:n}}function ji(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,Xn),n.getVertexPosition(l,qn),n.getVertexPosition(c,Yn);const d=Gc(n,e,t,i,Xn,qn,Yn,qi);if(d){r&&(Vi.fromBufferAttribute(r,o),Wi.fromBufferAttribute(r,l),Xi.fromBufferAttribute(r,c),d.uv=Ht.getInterpolation(qi,Xn,qn,Yn,Vi,Wi,Xi,new Ve)),a&&(Vi.fromBufferAttribute(a,o),Wi.fromBufferAttribute(a,l),Xi.fromBufferAttribute(a,c),d.uv1=Ht.getInterpolation(qi,Xn,qn,Yn,Vi,Wi,Xi,new Ve),d.uv2=d.uv1),s&&(Oo.fromBufferAttribute(s,o),Fo.fromBufferAttribute(s,l),zo.fromBufferAttribute(s,c),d.normal=Ht.getInterpolation(qi,Xn,qn,Yn,Oo,Fo,zo,new C),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};Ht.getNormal(Xn,qn,Yn,u.normal),d.face=u}return d}class vn extends Un{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],d=[],u=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,s,a,0),_("z","y","x",1,-1,i,t,-e,s,a,1),_("x","z","y",1,1,e,i,t,r,s,2),_("x","z","y",1,-1,e,i,-t,r,s,3),_("x","y","z",1,-1,e,t,i,r,a,4),_("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new In(c,3)),this.setAttribute("normal",new In(d,3)),this.setAttribute("uv",new In(u,2));function _(y,p,h,b,g,A,D,w,T,H,x){const E=A/T,I=D/H,Y=A/2,re=D/2,P=w/2,U=T+1,W=H+1;let q=0,V=0;const X=new C;for(let Q=0;Q<W;Q++){const te=Q*I-re;for(let de=0;de<U;de++){const k=de*E-Y;X[y]=k*b,X[p]=te*g,X[h]=P,c.push(X.x,X.y,X.z),X[y]=0,X[p]=0,X[h]=w>0?1:-1,d.push(X.x,X.y,X.z),u.push(de/T),u.push(1-Q/H),q+=1}}for(let Q=0;Q<H;Q++)for(let te=0;te<T;te++){const de=f+te+U*Q,k=f+te+U*(Q+1),K=f+(te+1)+U*(Q+1),le=f+(te+1)+U*Q;l.push(de,k,le),l.push(k,K,le),V+=6}o.addGroup(m,V,x),m+=V,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Et(n){const e={};for(let t=0;t<n.length;t++){const i=oi(n[t]);for(const r in i)e[r]=i[r]}return e}function Hc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Is(n){return n.getRenderTarget()===null?n.outputColorSpace:qe.workingColorSpace}const kc={clone:oi,merge:Et};var Vc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vc,this.fragmentShader=Wc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oi(e.uniforms),this.uniformsGroups=Hc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Us extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=an}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends Us{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jn=-90,Kn=1;class Xc extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nt(jn,Kn,e,t);r.layers=this.layers,this.add(r);const a=new Nt(jn,Kn,e,t);a.layers=this.layers,this.add(a);const s=new Nt(jn,Kn,e,t);s.layers=this.layers,this.add(s);const o=new Nt(jn,Kn,e,t);o.layers=this.layers,this.add(o);const l=new Nt(jn,Kn,e,t);l.layers=this.layers,this.add(l);const c=new Nt(jn,Kn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===an)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===or)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(u,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ns extends Tt{constructor(e,t,i,r,a,s,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:ni,super(e,t,i,r,a,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qc extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(gi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ln?ut:Ot),this.texture=new Ns(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new vn(5,5,5),a=new xn({name:"CubemapFromEquirect",uniforms:oi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:fn});a.uniforms.tEquirect.value=t;const s=new Ft(r,a),o=t.minFilter;return t.minFilter===ri&&(t.minFilter=ft),new Xc(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}const aa=new C,Yc=new C,jc=new Be;class An{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=aa.subVectors(i,t).cross(Yc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(aa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jc.getNormalMatrix(e),r=this.coplanarPoint(aa).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tn=new Ca,Ki=new C;class Os{constructor(e=new An,t=new An,i=new An,r=new An,a=new An,s=new An){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=an){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],d=r[5],u=r[6],f=r[7],m=r[8],_=r[9],y=r[10],p=r[11],h=r[12],b=r[13],g=r[14],A=r[15];if(i[0].setComponents(l-a,f-c,p-m,A-h).normalize(),i[1].setComponents(l+a,f+c,p+m,A+h).normalize(),i[2].setComponents(l+s,f+d,p+_,A+b).normalize(),i[3].setComponents(l-s,f-d,p-_,A-b).normalize(),i[4].setComponents(l-o,f-u,p-y,A-g).normalize(),t===an)i[5].setComponents(l+o,f+u,p+y,A+g).normalize();else if(t===or)i[5].setComponents(o,u,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(e){return Tn.center.set(0,0,0),Tn.radius=.7071067811865476,Tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ki.x=r.normal.x>0?e.max.x:e.min.x,Ki.y=r.normal.y>0?e.max.y:e.min.y,Ki.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ki)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fs(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Kc(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,d){const u=c.array,f=c.usage,m=u.byteLength,_=n.createBuffer();n.bindBuffer(d,_),n.bufferData(d,u,f),c.onUploadCallback();let y;if(u instanceof Float32Array)y=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=n.SHORT;else if(u instanceof Uint32Array)y=n.UNSIGNED_INT;else if(u instanceof Int32Array)y=n.INT;else if(u instanceof Int8Array)y=n.BYTE;else if(u instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function a(c,d,u){const f=d.array,m=d._updateRange,_=d.updateRanges;if(n.bindBuffer(u,c),m.count===-1&&_.length===0&&n.bufferSubData(u,0,f),_.length!==0){for(let y=0,p=_.length;y<p;y++){const h=_[y];t?n.bufferSubData(u,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):n.bufferSubData(u,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}d.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);if(u===void 0)i.set(c,r(c,d));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(u.buffer,c,d),u.version=c.version}}return{get:s,remove:o,update:l}}class mn extends Un{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,u=e/o,f=t/l,m=[],_=[],y=[],p=[];for(let h=0;h<d;h++){const b=h*f-s;for(let g=0;g<c;g++){const A=g*u-a;_.push(A,-b,0),y.push(0,0,1),p.push(g/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const g=b+c*h,A=b+c*(h+1),D=b+1+c*(h+1),w=b+1+c*h;m.push(g,A,w),m.push(A,D,w)}this.setIndex(m),this.setAttribute("position",new In(_,3)),this.setAttribute("normal",new In(y,3)),this.setAttribute("uv",new In(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$c=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ed=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ld=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Md=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",wd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Od=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,th=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ih=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ah=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ch=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,uh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ph=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_h=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Th=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ah=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ch=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ph=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Lh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ih=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Uh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,iu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ru=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ou=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,su=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,du=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_u=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Su=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Au=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ru=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,j={alphahash_fragment:Zc,alphahash_pars_fragment:$c,alphamap_fragment:Qc,alphamap_pars_fragment:Jc,alphatest_fragment:ed,alphatest_pars_fragment:td,aomap_fragment:nd,aomap_pars_fragment:id,batching_pars_vertex:rd,batching_vertex:ad,begin_vertex:od,beginnormal_vertex:sd,bsdfs:ld,iridescence_fragment:cd,bumpmap_pars_fragment:dd,clipping_planes_fragment:hd,clipping_planes_pars_fragment:ud,clipping_planes_pars_vertex:fd,clipping_planes_vertex:pd,color_fragment:md,color_pars_fragment:gd,color_pars_vertex:_d,color_vertex:vd,common:xd,cube_uv_reflection_fragment:yd,defaultnormal_vertex:Md,displacementmap_pars_vertex:Sd,displacementmap_vertex:Ed,emissivemap_fragment:bd,emissivemap_pars_fragment:Td,colorspace_fragment:Ad,colorspace_pars_fragment:wd,envmap_fragment:Rd,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Pd,envmap_pars_vertex:Dd,envmap_physical_pars_fragment:Vd,envmap_vertex:Ld,fog_vertex:Id,fog_pars_vertex:Ud,fog_fragment:Nd,fog_pars_fragment:Od,gradientmap_pars_fragment:Fd,lightmap_fragment:zd,lightmap_pars_fragment:Bd,lights_lambert_fragment:Gd,lights_lambert_pars_fragment:Hd,lights_pars_begin:kd,lights_toon_fragment:Wd,lights_toon_pars_fragment:Xd,lights_phong_fragment:qd,lights_phong_pars_fragment:Yd,lights_physical_fragment:jd,lights_physical_pars_fragment:Kd,lights_fragment_begin:Zd,lights_fragment_maps:$d,lights_fragment_end:Qd,logdepthbuf_fragment:Jd,logdepthbuf_pars_fragment:eh,logdepthbuf_pars_vertex:th,logdepthbuf_vertex:nh,map_fragment:ih,map_pars_fragment:rh,map_particle_fragment:ah,map_particle_pars_fragment:oh,metalnessmap_fragment:sh,metalnessmap_pars_fragment:lh,morphcolor_vertex:ch,morphnormal_vertex:dh,morphtarget_pars_vertex:hh,morphtarget_vertex:uh,normal_fragment_begin:fh,normal_fragment_maps:ph,normal_pars_fragment:mh,normal_pars_vertex:gh,normal_vertex:_h,normalmap_pars_fragment:vh,clearcoat_normal_fragment_begin:xh,clearcoat_normal_fragment_maps:yh,clearcoat_pars_fragment:Mh,iridescence_pars_fragment:Sh,opaque_fragment:Eh,packing:bh,premultiplied_alpha_fragment:Th,project_vertex:Ah,dithering_fragment:wh,dithering_pars_fragment:Rh,roughnessmap_fragment:Ch,roughnessmap_pars_fragment:Ph,shadowmap_pars_fragment:Dh,shadowmap_pars_vertex:Lh,shadowmap_vertex:Ih,shadowmask_pars_fragment:Uh,skinbase_vertex:Nh,skinning_pars_vertex:Oh,skinning_vertex:Fh,skinnormal_vertex:zh,specularmap_fragment:Bh,specularmap_pars_fragment:Gh,tonemapping_fragment:Hh,tonemapping_pars_fragment:kh,transmission_fragment:Vh,transmission_pars_fragment:Wh,uv_pars_fragment:Xh,uv_pars_vertex:qh,uv_vertex:Yh,worldpos_vertex:jh,background_vert:Kh,background_frag:Zh,backgroundCube_vert:$h,backgroundCube_frag:Qh,cube_vert:Jh,cube_frag:eu,depth_vert:tu,depth_frag:nu,distanceRGBA_vert:iu,distanceRGBA_frag:ru,equirect_vert:au,equirect_frag:ou,linedashed_vert:su,linedashed_frag:lu,meshbasic_vert:cu,meshbasic_frag:du,meshlambert_vert:hu,meshlambert_frag:uu,meshmatcap_vert:fu,meshmatcap_frag:pu,meshnormal_vert:mu,meshnormal_frag:gu,meshphong_vert:_u,meshphong_frag:vu,meshphysical_vert:xu,meshphysical_frag:yu,meshtoon_vert:Mu,meshtoon_frag:Su,points_vert:Eu,points_frag:bu,shadow_vert:Tu,shadow_frag:Au,sprite_vert:wu,sprite_frag:Ru},ie={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Vt={basic:{uniforms:Et([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:j.meshbasic_vert,fragmentShader:j.meshbasic_frag},lambert:{uniforms:Et([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ke(0)}}]),vertexShader:j.meshlambert_vert,fragmentShader:j.meshlambert_frag},phong:{uniforms:Et([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:j.meshphong_vert,fragmentShader:j.meshphong_frag},standard:{uniforms:Et([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:j.meshphysical_vert,fragmentShader:j.meshphysical_frag},toon:{uniforms:Et([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ke(0)}}]),vertexShader:j.meshtoon_vert,fragmentShader:j.meshtoon_frag},matcap:{uniforms:Et([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:j.meshmatcap_vert,fragmentShader:j.meshmatcap_frag},points:{uniforms:Et([ie.points,ie.fog]),vertexShader:j.points_vert,fragmentShader:j.points_frag},dashed:{uniforms:Et([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:j.linedashed_vert,fragmentShader:j.linedashed_frag},depth:{uniforms:Et([ie.common,ie.displacementmap]),vertexShader:j.depth_vert,fragmentShader:j.depth_frag},normal:{uniforms:Et([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:j.meshnormal_vert,fragmentShader:j.meshnormal_frag},sprite:{uniforms:Et([ie.sprite,ie.fog]),vertexShader:j.sprite_vert,fragmentShader:j.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:j.background_vert,fragmentShader:j.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:j.backgroundCube_vert,fragmentShader:j.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:j.cube_vert,fragmentShader:j.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:j.equirect_vert,fragmentShader:j.equirect_frag},distanceRGBA:{uniforms:Et([ie.common,ie.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:j.distanceRGBA_vert,fragmentShader:j.distanceRGBA_frag},shadow:{uniforms:Et([ie.lights,ie.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:j.shadow_vert,fragmentShader:j.shadow_frag}};Vt.physical={uniforms:Et([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:j.meshphysical_vert,fragmentShader:j.meshphysical_frag};const Zi={r:0,b:0,g:0};function Cu(n,e,t,i,r,a,s){const o=new ke(0);let l=a===!0?0:1,c,d,u=null,f=0,m=null;function _(p,h){let b=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?t:e).get(g)),g===null?y(o,l):g&&g.isColor&&(y(g,1),b=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Rr)?(d===void 0&&(d=new Ft(new vn(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:oi(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=g,d.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=qe.getTransfer(g.colorSpace)!==Ze,(u!==g||f!==g.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,u=g,f=g.version,m=n.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Ft(new mn(2,2),new xn({name:"BackgroundMaterial",uniforms:oi(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=qe.getTransfer(g.colorSpace)!==Ze,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||f!==g.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=g,f=g.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,h){p.getRGB(Zi,Is(n)),i.buffers.color.setClear(Zi.r,Zi.g,Zi.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(o,l)},render:_}}function Pu(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},l=p(null);let c=l,d=!1;function u(P,U,W,q,V){let X=!1;if(s){const Q=y(q,W,U);c!==Q&&(c=Q,m(c.object)),X=h(P,q,W,V),X&&b(P,q,W,V)}else{const Q=U.wireframe===!0;(c.geometry!==q.id||c.program!==W.id||c.wireframe!==Q)&&(c.geometry=q.id,c.program=W.id,c.wireframe=Q,X=!0)}V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(X||d)&&(d=!1,H(P,U,W,q),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function f(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function m(P){return i.isWebGL2?n.bindVertexArray(P):a.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?n.deleteVertexArray(P):a.deleteVertexArrayOES(P)}function y(P,U,W){const q=W.wireframe===!0;let V=o[P.id];V===void 0&&(V={},o[P.id]=V);let X=V[U.id];X===void 0&&(X={},V[U.id]=X);let Q=X[q];return Q===void 0&&(Q=p(f()),X[q]=Q),Q}function p(P){const U=[],W=[],q=[];for(let V=0;V<r;V++)U[V]=0,W[V]=0,q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:q,object:P,attributes:{},index:null}}function h(P,U,W,q){const V=c.attributes,X=U.attributes;let Q=0;const te=W.getAttributes();for(const de in te)if(te[de].location>=0){const K=V[de];let le=X[de];if(le===void 0&&(de==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),de==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),K===void 0||K.attribute!==le||le&&K.data!==le.data)return!0;Q++}return c.attributesNum!==Q||c.index!==q}function b(P,U,W,q){const V={},X=U.attributes;let Q=0;const te=W.getAttributes();for(const de in te)if(te[de].location>=0){let K=X[de];K===void 0&&(de==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),de==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));const le={};le.attribute=K,K&&K.data&&(le.data=K.data),V[de]=le,Q++}c.attributes=V,c.attributesNum=Q,c.index=q}function g(){const P=c.newAttributes;for(let U=0,W=P.length;U<W;U++)P[U]=0}function A(P){D(P,0)}function D(P,U){const W=c.newAttributes,q=c.enabledAttributes,V=c.attributeDivisors;W[P]=1,q[P]===0&&(n.enableVertexAttribArray(P),q[P]=1),V[P]!==U&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),V[P]=U)}function w(){const P=c.newAttributes,U=c.enabledAttributes;for(let W=0,q=U.length;W<q;W++)U[W]!==P[W]&&(n.disableVertexAttribArray(W),U[W]=0)}function T(P,U,W,q,V,X,Q){Q===!0?n.vertexAttribIPointer(P,U,W,V,X):n.vertexAttribPointer(P,U,W,q,V,X)}function H(P,U,W,q){if(i.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const V=q.attributes,X=W.getAttributes(),Q=U.defaultAttributeValues;for(const te in X){const de=X[te];if(de.location>=0){let k=V[te];if(k===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){const K=k.normalized,le=k.itemSize,ve=t.get(k);if(ve===void 0)continue;const _e=ve.buffer,Pe=ve.type,Le=ve.bytesPerElement,be=i.isWebGL2===!0&&(Pe===n.INT||Pe===n.UNSIGNED_INT||k.gpuType===ms);if(k.isInterleavedBufferAttribute){const He=k.data,N=He.stride,yt=k.offset;if(He.isInstancedInterleavedBuffer){for(let ye=0;ye<de.locationSize;ye++)D(de.location+ye,He.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let ye=0;ye<de.locationSize;ye++)A(de.location+ye);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let ye=0;ye<de.locationSize;ye++)T(de.location+ye,le/de.locationSize,Pe,K,N*Le,(yt+le/de.locationSize*ye)*Le,be)}else{if(k.isInstancedBufferAttribute){for(let He=0;He<de.locationSize;He++)D(de.location+He,k.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let He=0;He<de.locationSize;He++)A(de.location+He);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let He=0;He<de.locationSize;He++)T(de.location+He,le/de.locationSize,Pe,K,le*Le,le/de.locationSize*He*Le,be)}}else if(Q!==void 0){const K=Q[te];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(de.location,K);break;case 3:n.vertexAttrib3fv(de.location,K);break;case 4:n.vertexAttrib4fv(de.location,K);break;default:n.vertexAttrib1fv(de.location,K)}}}}w()}function x(){Y();for(const P in o){const U=o[P];for(const W in U){const q=U[W];for(const V in q)_(q[V].object),delete q[V];delete U[W]}delete o[P]}}function E(P){if(o[P.id]===void 0)return;const U=o[P.id];for(const W in U){const q=U[W];for(const V in q)_(q[V].object),delete q[V];delete U[W]}delete o[P.id]}function I(P){for(const U in o){const W=o[U];if(W[P.id]===void 0)continue;const q=W[P.id];for(const V in q)_(q[V].object),delete q[V];delete W[P.id]}}function Y(){re(),d=!0,c!==l&&(c=l,m(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:re,dispose:x,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:g,enableAttribute:A,disableUnusedAttributes:w}}function Du(n,e,t,i){const r=i.isWebGL2;let a;function s(d){a=d}function o(d,u){n.drawArrays(a,d,u),t.update(u,a,1)}function l(d,u,f){if(f===0)return;let m,_;if(r)m=n,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](a,d,u,f),t.update(u,a,f)}function c(d,u,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(d[_],u[_]);else{m.multiDrawArraysWEBGL(a,d,0,u,0,f);let _=0;for(let y=0;y<f;y++)_+=u[y];t.update(_,a,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Lu(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,A=s||e.has("OES_texture_float"),D=g&&A,w=s?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:b,vertexTextures:g,floatFragmentTextures:A,floatVertexTextures:D,maxSamples:w}}function Iu(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new An,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||i!==0||r;return r=f,i=u.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,m){const _=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,h=n.get(u);if(!r||_===null||_.length===0||a&&!p)a?d(null):c();else{const b=a?0:i,g=b*4;let A=h.clippingState||null;l.value=A,A=d(_,f,g,m);for(let D=0;D!==g;++D)A[D]=t[D];h.clippingState=A,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,f,m,_){const y=u!==null?u.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const h=m+y*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let g=0,A=m;g!==y;++g,A+=4)s.copy(u[g]).applyMatrix4(b,o),s.normal.toArray(p,A),p[A+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function Uu(n){let e=new WeakMap;function t(s,o){return o===ma?s.mapping=ni:o===ga&&(s.mapping=ii),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===ma||o===ga)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new qc(l.height/2);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Pa extends Us{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $n=4,Bo=[.125,.215,.35,.446,.526,.582],Cn=20,oa=new Pa,Go=new ke;let sa=null,la=0,ca=0;const wn=(1+Math.sqrt(5))/2,Zn=1/wn,Ho=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,wn,Zn),new C(0,wn,-Zn),new C(Zn,0,wn),new C(-Zn,0,wn),new C(wn,Zn,0),new C(-wn,Zn,0)];class ko{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){sa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sa,la,ca),e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ni||e.mapping===ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ft,minFilter:ft,generateMipmaps:!1,type:rn,format:xt,colorSpace:Yt,depthBuffer:!1},r=Vo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vo(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nu(a)),this._blurMaterial=Ou(a,e,t)}return r}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,i,r){const o=new Nt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Go),d.toneMapping=pn,d.autoClear=!1;const m=new yi({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),_=new Ft(new vn,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(Go),y=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):b===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const g=this._cubeSize;$i(r,b*g,h>2?g:0,g,g),d.setRenderTarget(r),y&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ni||e.mapping===ii;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wo());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Ft(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;$i(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,oa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Ho[(r-1)%Ho.length];this._blur(e,r-1,r,a,s)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Ft(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Cn-1),y=a/_,p=isFinite(a)?1+Math.floor(d*y):Cn;p>Cn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Cn}`);const h=[];let b=0;for(let T=0;T<Cn;++T){const H=T/y,x=Math.exp(-H*H/2);h.push(x),T===0?b+=x:T<p&&(b+=2*x)}for(let T=0;T<h.length;T++)h[T]=h[T]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;const A=this._sizeLods[r],D=3*A*(r>g-$n?r-g+$n:0),w=4*(this._cubeSize-A);$i(t,D,w,3*A,2*A),l.setRenderTarget(t),l.render(u,oa)}}function Nu(n){const e=[],t=[],i=[];let r=n;const a=n-$n+1+Bo.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>n-$n?l=Bo[s-n+$n-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,_=6,y=3,p=2,h=1,b=new Float32Array(y*_*m),g=new Float32Array(p*_*m),A=new Float32Array(h*_*m);for(let w=0;w<m;w++){const T=w%3*2/3-1,H=w>2?0:-1,x=[T,H,0,T+2/3,H,0,T+2/3,H+1,0,T,H,0,T+2/3,H+1,0,T,H+1,0];b.set(x,y*_*w),g.set(f,p*_*w);const E=[w,w,w,w,w,w];A.set(E,h*_*w)}const D=new Un;D.setAttribute("position",new qt(b,y)),D.setAttribute("uv",new qt(g,p)),D.setAttribute("faceIndex",new qt(A,h)),e.push(D),r>$n&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vo(n,e,t){const i=new _n(n,e,t);return i.texture.mapping=Rr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $i(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ou(n,e,t){const i=new Float32Array(Cn),r=new C(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Wo(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Xo(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Da(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fu(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ma||l===ga,d=l===ni||l===ii;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new ko(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||d&&u&&r(u)){t===null&&(t=new ko(n));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",a),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function zu(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Bu(n,e,t,i){const r={},a=new WeakMap;function s(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let p=0,h=y.length;p<h;p++)e.remove(y[p])}f.removeEventListener("dispose",s),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const y=m[_];for(let p=0,h=y.length;p<h;p++)e.update(y[p],n.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,_=u.attributes.position;let y=0;if(m!==null){const b=m.array;y=m.version;for(let g=0,A=b.length;g<A;g+=3){const D=b[g+0],w=b[g+1],T=b[g+2];f.push(D,w,w,T,T,D)}}else if(_!==void 0){const b=_.array;y=_.version;for(let g=0,A=b.length/3-1;g<A;g+=3){const D=g+0,w=g+1,T=g+2;f.push(D,w,w,T,T,D)}}else return;const p=new(Ts(f)?Ls:Ds)(f,1);p.version=y;const h=a.get(u);h&&e.remove(h),a.set(u,p)}function d(u){const f=a.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Gu(n,e,t,i){const r=i.isWebGL2;let a;function s(m){a=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function d(m,_){n.drawElements(a,_,o,m*l),t.update(_,a,1)}function u(m,_,y){if(y===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](a,_,o,m*l,y),t.update(_,a,y)}function f(m,_,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<y;h++)this.render(m[h]/l,_[h]);else{p.multiDrawElementsWEBGL(a,_,0,o,m,0,y);let h=0;for(let b=0;b<y;b++)h+=_[b];t.update(h,a,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=u,this.renderMultiDraw=f}function Hu(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ku(n,e){return n[0]-e[0]}function Vu(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Wu(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,s=new pt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=m!==void 0?m.length:0;let y=a.get(d);if(y===void 0||y.count!==_){let P=function(){Y.dispose(),a.delete(d),d.removeEventListener("dispose",P)};y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,g=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,D=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],T=d.morphAttributes.color||[];let H=0;b===!0&&(H=1),g===!0&&(H=2),A===!0&&(H=3);let x=d.attributes.position.count*H,E=1;x>e.maxTextureSize&&(E=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const I=new Float32Array(x*E*4*_),Y=new Rs(I,x,E,_);Y.type=bt,Y.needsUpdate=!0;const re=H*4;for(let U=0;U<_;U++){const W=D[U],q=w[U],V=T[U],X=x*E*4*U;for(let Q=0;Q<W.count;Q++){const te=Q*re;b===!0&&(s.fromBufferAttribute(W,Q),I[X+te+0]=s.x,I[X+te+1]=s.y,I[X+te+2]=s.z,I[X+te+3]=0),g===!0&&(s.fromBufferAttribute(q,Q),I[X+te+4]=s.x,I[X+te+5]=s.y,I[X+te+6]=s.z,I[X+te+7]=0),A===!0&&(s.fromBufferAttribute(V,Q),I[X+te+8]=s.x,I[X+te+9]=s.y,I[X+te+10]=s.z,I[X+te+11]=V.itemSize===4?s.w:1)}}y={count:_,texture:Y,size:new Ve(x,E)},a.set(d,y),d.addEventListener("dispose",P)}let p=0;for(let b=0;b<f.length;b++)p+=f[b];const h=d.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",h),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{const m=f===void 0?0:f.length;let _=i[d.id];if(_===void 0||_.length!==m){_=[];for(let g=0;g<m;g++)_[g]=[g,0];i[d.id]=_}for(let g=0;g<m;g++){const A=_[g];A[0]=g,A[1]=f[g]}_.sort(Vu);for(let g=0;g<8;g++)g<m&&_[g][1]?(o[g][0]=_[g][0],o[g][1]=_[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(ku);const y=d.morphAttributes.position,p=d.morphAttributes.normal;let h=0;for(let g=0;g<8;g++){const A=o[g],D=A[0],w=A[1];D!==Number.MAX_SAFE_INTEGER&&w?(y&&d.getAttribute("morphTarget"+g)!==y[D]&&d.setAttribute("morphTarget"+g,y[D]),p&&d.getAttribute("morphNormal"+g)!==p[D]&&d.setAttribute("morphNormal"+g,p[D]),r[g]=w,h+=w):(y&&d.hasAttribute("morphTarget"+g)===!0&&d.deleteAttribute("morphTarget"+g),p&&d.hasAttribute("morphNormal"+g)===!0&&d.deleteAttribute("morphNormal"+g),r[g]=0)}const b=d.morphTargetsRelative?1:1-h;u.getUniforms().setValue(n,"morphTargetBaseInfluence",b),u.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Xu(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class zs extends Tt{constructor(e,t,i,r,a,s,o,l,c,d){if(d=d!==void 0?d:Dn,d!==Dn&&d!==ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Dn&&(i=un),i===void 0&&d===ai&&(i=Pn),super(null,r,a,s,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bs=new Tt,Gs=new zs(1,1);Gs.compareFunction=bs;const Hs=new Rs,ks=new Ra,Vs=new Ns,qo=[],Yo=[],jo=new Float32Array(16),Ko=new Float32Array(9),Zo=new Float32Array(4);function ci(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=qo[r];if(a===void 0&&(a=new Float32Array(r),qo[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function st(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pr(n,e){let t=Yo[e];t===void 0&&(t=new Int32Array(e),Yo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qu(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yu(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2fv(this.addr,e),lt(t,e)}}function ju(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;n.uniform3fv(this.addr,e),lt(t,e)}}function Ku(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4fv(this.addr,e),lt(t,e)}}function Zu(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(st(t,i))return;Zo.set(i),n.uniformMatrix2fv(this.addr,!1,Zo),lt(t,i)}}function $u(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(st(t,i))return;Ko.set(i),n.uniformMatrix3fv(this.addr,!1,Ko),lt(t,i)}}function Qu(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(st(t,i))return;jo.set(i),n.uniformMatrix4fv(this.addr,!1,jo),lt(t,i)}}function Ju(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ef(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2iv(this.addr,e),lt(t,e)}}function tf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3iv(this.addr,e),lt(t,e)}}function nf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4iv(this.addr,e),lt(t,e)}}function rf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function af(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2uiv(this.addr,e),lt(t,e)}}function of(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3uiv(this.addr,e),lt(t,e)}}function sf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4uiv(this.addr,e),lt(t,e)}}function lf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const a=this.type===n.SAMPLER_2D_SHADOW?Gs:Bs;t.setTexture2D(e||a,r)}function cf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ks,r)}function df(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Vs,r)}function hf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Hs,r)}function uf(n){switch(n){case 5126:return qu;case 35664:return Yu;case 35665:return ju;case 35666:return Ku;case 35674:return Zu;case 35675:return $u;case 35676:return Qu;case 5124:case 35670:return Ju;case 35667:case 35671:return ef;case 35668:case 35672:return tf;case 35669:case 35673:return nf;case 5125:return rf;case 36294:return af;case 36295:return of;case 36296:return sf;case 35678:case 36198:case 36298:case 36306:case 35682:return lf;case 35679:case 36299:case 36307:return cf;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return hf}}function ff(n,e){n.uniform1fv(this.addr,e)}function pf(n,e){const t=ci(e,this.size,2);n.uniform2fv(this.addr,t)}function mf(n,e){const t=ci(e,this.size,3);n.uniform3fv(this.addr,t)}function gf(n,e){const t=ci(e,this.size,4);n.uniform4fv(this.addr,t)}function _f(n,e){const t=ci(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vf(n,e){const t=ci(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xf(n,e){const t=ci(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yf(n,e){n.uniform1iv(this.addr,e)}function Mf(n,e){n.uniform2iv(this.addr,e)}function Sf(n,e){n.uniform3iv(this.addr,e)}function Ef(n,e){n.uniform4iv(this.addr,e)}function bf(n,e){n.uniform1uiv(this.addr,e)}function Tf(n,e){n.uniform2uiv(this.addr,e)}function Af(n,e){n.uniform3uiv(this.addr,e)}function wf(n,e){n.uniform4uiv(this.addr,e)}function Rf(n,e,t){const i=this.cache,r=e.length,a=Pr(t,r);st(i,a)||(n.uniform1iv(this.addr,a),lt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Bs,a[s])}function Cf(n,e,t){const i=this.cache,r=e.length,a=Pr(t,r);st(i,a)||(n.uniform1iv(this.addr,a),lt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||ks,a[s])}function Pf(n,e,t){const i=this.cache,r=e.length,a=Pr(t,r);st(i,a)||(n.uniform1iv(this.addr,a),lt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Vs,a[s])}function Df(n,e,t){const i=this.cache,r=e.length,a=Pr(t,r);st(i,a)||(n.uniform1iv(this.addr,a),lt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Hs,a[s])}function Lf(n){switch(n){case 5126:return ff;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return _f;case 35675:return vf;case 35676:return xf;case 5124:case 35670:return yf;case 35667:case 35671:return Mf;case 35668:case 35672:return Sf;case 35669:case 35673:return Ef;case 5125:return bf;case 36294:return Tf;case 36295:return Af;case 36296:return wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return Pf;case 36289:case 36303:case 36311:case 36292:return Df}}class If{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=uf(t.type)}}class Uf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lf(t.type)}}class Nf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const da=/(\w+)(\])?(\[|\.)?/g;function $o(n,e){n.seq.push(e),n.map[e.id]=e}function Of(n,e,t){const i=n.name,r=i.length;for(da.lastIndex=0;;){const a=da.exec(i),s=da.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){$o(t,c===void 0?new If(o,n,e):new Uf(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Nf(o),$o(t,u)),t=u}}}class er{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Of(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function Qo(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ff=37297;let zf=0;function Bf(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}function Gf(n){const e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(n);let i;switch(e===t?i="":e===ar&&t===rr?i="LinearDisplayP3ToLinearSRGB":e===rr&&t===ar&&(i="LinearSRGBToLinearDisplayP3"),n){case Yt:case Cr:return[i,"LinearTransferOETF"];case ut:case wa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Jo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Bf(n.getShaderSource(e),s)}else return r}function Hf(n,e){const t=Gf(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kf(n,e){let t;switch(e){case Zl:t="Linear";break;case fs:t="Reinhard";break;case $l:t="OptimizedCineon";break;case Ql:t="ACESFilmic";break;case ec:t="AgX";break;case Jl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vf(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qn).join(`
`)}function Wf(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Qn).join(`
`)}function Xf(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qf(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Qn(n){return n!==""}function es(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ts(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(n){return n.replace(Yf,Kf)}const jf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kf(n,e){let t=j[e];if(t===void 0){const i=jf.get(e);if(i!==void 0)t=j[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ma(t)}const Zf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ns(n){return n.replace(Zf,$f)}function $f(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function is(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qf(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hs?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===bl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===tn&&(e="SHADOWMAP_TYPE_VSM"),e}function Jf(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ni:case ii:e="ENVMAP_TYPE_CUBE";break;case Rr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ep(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ii:e="ENVMAP_MODE_REFRACTION";break}return e}function tp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case us:e="ENVMAP_BLENDING_MULTIPLY";break;case jl:e="ENVMAP_BLENDING_MIX";break;case Kl:e="ENVMAP_BLENDING_ADD";break}return e}function np(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ip(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Qf(t),c=Jf(t),d=ep(t),u=tp(t),f=np(t),m=t.isWebGL2?"":Vf(t),_=Wf(t),y=Xf(a),p=r.createProgram();let h,b,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Qn).join(`
`),h.length>0&&(h+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Qn).join(`
`),b.length>0&&(b+=`
`)):(h=[is(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qn).join(`
`),b=[m,is(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?j.tonemapping_pars_fragment:"",t.toneMapping!==pn?kf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",j.colorspace_pars_fragment,Hf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qn).join(`
`)),s=Ma(s),s=es(s,t),s=ts(s,t),o=Ma(o),o=es(o,t),o=ts(o,t),s=ns(s),o=ns(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,h=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const A=g+h+s,D=g+b+o,w=Qo(r,r.VERTEX_SHADER,A),T=Qo(r,r.FRAGMENT_SHADER,D);r.attachShader(p,w),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function H(Y){if(n.debug.checkShaderErrors){const re=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(w).trim(),U=r.getShaderInfoLog(T).trim();let W=!0,q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,w,T);else{const V=Jo(r,w,"vertex"),X=Jo(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+V+`
`+X)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(P===""||U==="")&&(q=!1);q&&(Y.diagnostics={runnable:W,programLog:re,vertexShader:{log:P,prefix:h},fragmentShader:{log:U,prefix:b}})}r.deleteShader(w),r.deleteShader(T),x=new er(r,p),E=qf(r,p)}let x;this.getUniforms=function(){return x===void 0&&H(this),x};let E;this.getAttributes=function(){return E===void 0&&H(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(p,Ff)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=T,this}let rp=0;class ap{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new op(e),t.set(e,i)),i}}class op{constructor(e){this.id=rp++,this.code=e,this.usedTimes=0}}function sp(n,e,t,i,r,a,s){const o=new Cs,l=new ap,c=[],d=r.isWebGL2,u=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return x===0?"uv":`uv${x}`}function p(x,E,I,Y,re){const P=Y.fog,U=re.geometry,W=x.isMeshStandardMaterial?Y.environment:null,q=(x.isMeshStandardMaterial?t:e).get(x.envMap||W),V=q&&q.mapping===Rr?q.image.height:null,X=_[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const Q=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,te=Q!==void 0?Q.length:0;let de=0;U.morphAttributes.position!==void 0&&(de=1),U.morphAttributes.normal!==void 0&&(de=2),U.morphAttributes.color!==void 0&&(de=3);let k,K,le,ve;if(X){const Mt=Vt[X];k=Mt.vertexShader,K=Mt.fragmentShader}else k=x.vertexShader,K=x.fragmentShader,l.update(x),le=l.getVertexShaderID(x),ve=l.getFragmentShaderID(x);const _e=n.getRenderTarget(),Pe=re.isInstancedMesh===!0,Le=re.isBatchedMesh===!0,be=!!x.map,He=!!x.matcap,N=!!q,yt=!!x.aoMap,ye=!!x.lightMap,Re=!!x.bumpMap,pe=!!x.normalMap,Qe=!!x.displacementMap,Ue=!!x.emissiveMap,S=!!x.metalnessMap,v=!!x.roughnessMap,F=x.anisotropy>0,J=x.clearcoat>0,$=x.iridescence>0,ee=x.sheen>0,me=x.transmission>0,se=F&&!!x.anisotropyMap,he=J&&!!x.clearcoatMap,Ee=J&&!!x.clearcoatNormalMap,Ne=J&&!!x.clearcoatRoughnessMap,Z=$&&!!x.iridescenceMap,Xe=$&&!!x.iridescenceThicknessMap,Ge=ee&&!!x.sheenColorMap,we=ee&&!!x.sheenRoughnessMap,xe=!!x.specularMap,ue=!!x.specularColorMap,Ie=!!x.specularIntensityMap,We=me&&!!x.transmissionMap,et=me&&!!x.thicknessMap,Fe=!!x.gradientMap,ne=!!x.alphaMap,R=x.alphaTest>0,ae=!!x.alphaHash,oe=!!x.extensions,Te=!!U.attributes.uv1,Me=!!U.attributes.uv2,Ye=!!U.attributes.uv3;let je=pn;return x.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(je=n.toneMapping),{isWebGL2:d,shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:k,fragmentShader:K,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:ve,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Le,instancing:Pe,instancingColor:Pe&&re.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Yt,map:be,matcap:He,envMap:N,envMapMode:N&&q.mapping,envMapCubeUVHeight:V,aoMap:yt,lightMap:ye,bumpMap:Re,normalMap:pe,displacementMap:f&&Qe,emissiveMap:Ue,normalMapObjectSpace:pe&&x.normalMapType===uc,normalMapTangentSpace:pe&&x.normalMapType===Es,metalnessMap:S,roughnessMap:v,anisotropy:F,anisotropyMap:se,clearcoat:J,clearcoatMap:he,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ne,iridescence:$,iridescenceMap:Z,iridescenceThicknessMap:Xe,sheen:ee,sheenColorMap:Ge,sheenRoughnessMap:we,specularMap:xe,specularColorMap:ue,specularIntensityMap:Ie,transmission:me,transmissionMap:We,thicknessMap:et,gradientMap:Fe,opaque:x.transparent===!1&&x.blending===Jn,alphaMap:ne,alphaTest:R,alphaHash:ae,combine:x.combine,mapUv:be&&y(x.map.channel),aoMapUv:yt&&y(x.aoMap.channel),lightMapUv:ye&&y(x.lightMap.channel),bumpMapUv:Re&&y(x.bumpMap.channel),normalMapUv:pe&&y(x.normalMap.channel),displacementMapUv:Qe&&y(x.displacementMap.channel),emissiveMapUv:Ue&&y(x.emissiveMap.channel),metalnessMapUv:S&&y(x.metalnessMap.channel),roughnessMapUv:v&&y(x.roughnessMap.channel),anisotropyMapUv:se&&y(x.anisotropyMap.channel),clearcoatMapUv:he&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:we&&y(x.sheenRoughnessMap.channel),specularMapUv:xe&&y(x.specularMap.channel),specularColorMapUv:ue&&y(x.specularColorMap.channel),specularIntensityMapUv:Ie&&y(x.specularIntensityMap.channel),transmissionMapUv:We&&y(x.transmissionMap.channel),thicknessMapUv:et&&y(x.thicknessMap.channel),alphaMapUv:ne&&y(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(pe||F),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Me,vertexUv3s:Ye,pointsUvs:re.isPoints===!0&&!!U.attributes.uv&&(be||ne),fog:!!P,useFog:x.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:re.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:de,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:je,useLegacyLights:n._useLegacyLights,decodeVideoTexture:be&&x.map.isVideoTexture===!0&&qe.getTransfer(x.map.colorSpace)===Ze,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Wt,flipSided:x.side===Rt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:oe&&x.extensions.derivatives===!0,extensionFragDepth:oe&&x.extensions.fragDepth===!0,extensionDrawBuffers:oe&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function h(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)E.push(I),E.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(b(E,x),g(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function b(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function g(x,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function A(x){const E=_[x.type];let I;if(E){const Y=Vt[E];I=kc.clone(Y.uniforms)}else I=x.uniforms;return I}function D(x,E){let I;for(let Y=0,re=c.length;Y<re;Y++){const P=c[Y];if(P.cacheKey===E){I=P,++I.usedTimes;break}}return I===void 0&&(I=new ip(n,E,x,a),c.push(I)),I}function w(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function T(x){l.remove(x)}function H(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:A,acquireProgram:D,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:H}}function lp(){let n=new WeakMap;function e(a){let s=n.get(a);return s===void 0&&(s={},n.set(a,s)),s}function t(a){n.delete(a)}function i(a,s,o){n.get(a)[s]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function cp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function rs(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function as(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(u,f,m,_,y,p){let h=n[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:y,group:p},n[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=m,h.groupOrder=_,h.renderOrder=u.renderOrder,h.z=y,h.group=p),e++,h}function o(u,f,m,_,y,p){const h=s(u,f,m,_,y,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(u,f,m,_,y,p){const h=s(u,f,m,_,y,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(u,f){t.length>1&&t.sort(u||cp),i.length>1&&i.sort(f||rs),r.length>1&&r.sort(f||rs)}function d(){for(let u=e,f=n.length;u<f;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:d,sort:c}}function dp(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new as,n.set(i,[s])):r>=a.length?(s=new as,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function hp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ke};break;case"SpotLight":t={position:new C,direction:new C,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function up(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let fp=0;function pp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function mp(n,e){const t=new hp,i=up(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new C);const a=new C,s=new at,o=new at;function l(d,u){let f=0,m=0,_=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let y=0,p=0,h=0,b=0,g=0,A=0,D=0,w=0,T=0,H=0,x=0;d.sort(pp);const E=u===!0?Math.PI:1;for(let Y=0,re=d.length;Y<re;Y++){const P=d[Y],U=P.color,W=P.intensity,q=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=U.r*W*E,m+=U.g*W*E,_+=U.b*W*E;else if(P.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(P.sh.coefficients[X],W);x++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const Q=P.shadow,te=i.get(P);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,r.directionalShadow[y]=te,r.directionalShadowMap[y]=V,r.directionalShadowMatrix[y]=P.shadow.matrix,A++}r.directional[y]=X,y++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(U).multiplyScalar(W*E),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,r.spot[h]=X;const Q=P.shadow;if(P.map&&(r.spotLightMap[T]=P.map,T++,Q.updateMatrices(P),P.castShadow&&H++),r.spotLightMatrix[h]=Q.matrix,P.castShadow){const te=i.get(P);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,r.spotShadow[h]=te,r.spotShadowMap[h]=V,w++}h++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(U).multiplyScalar(W),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),r.rectArea[b]=X,b++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*E),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Q=P.shadow,te=i.get(P);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,r.pointShadow[p]=te,r.pointShadowMap[p]=V,r.pointShadowMatrix[p]=P.shadow.matrix,D++}r.point[p]=X,p++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(W*E),X.groundColor.copy(P.groundColor).multiplyScalar(W*E),r.hemi[g]=X,g++}}b>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const I=r.hash;(I.directionalLength!==y||I.pointLength!==p||I.spotLength!==h||I.rectAreaLength!==b||I.hemiLength!==g||I.numDirectionalShadows!==A||I.numPointShadows!==D||I.numSpotShadows!==w||I.numSpotMaps!==T||I.numLightProbes!==x)&&(r.directional.length=y,r.spot.length=h,r.rectArea.length=b,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=w+T-H,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=x,I.directionalLength=y,I.pointLength=p,I.spotLength=h,I.rectAreaLength=b,I.hemiLength=g,I.numDirectionalShadows=A,I.numPointShadows=D,I.numSpotShadows=w,I.numSpotMaps=T,I.numLightProbes=x,r.version=fp++)}function c(d,u){let f=0,m=0,_=0,y=0,p=0;const h=u.matrixWorldInverse;for(let b=0,g=d.length;b<g;b++){const A=d[b];if(A.isDirectionalLight){const D=r.directional[f];D.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(h),f++}else if(A.isSpotLight){const D=r.spot[_];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(h),D.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(h),_++}else if(A.isRectAreaLight){const D=r.rectArea[y];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(h),o.identity(),s.copy(A.matrixWorld),s.premultiply(h),o.extractRotation(s),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),y++}else if(A.isPointLight){const D=r.point[m];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(h),m++}else if(A.isHemisphereLight){const D=r.hemi[p];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function os(n,e){const t=new mp(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function s(u){i.push(u)}function o(u){r.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function gp(n,e){let t=new WeakMap;function i(a,s=0){const o=t.get(a);let l;return o===void 0?(l=new os(n,e),t.set(a,[l])):s>=o.length?(l=new os(n,e),o.push(l)):l=o[s],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class _p extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vp extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mp(n,e,t){let i=new Os;const r=new Ve,a=new Ve,s=new pt,o=new _p({depthPacking:hc}),l=new vp,c={},d=t.maxTextureSize,u={[gn]:Rt,[Rt]:gn,[Wt]:Wt},f=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:xp,fragmentShader:yp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Un;_.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ft(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hs;let h=this.type;this.render=function(w,T,H){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const x=n.getRenderTarget(),E=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(fn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const re=h!==tn&&this.type===tn,P=h===tn&&this.type!==tn;for(let U=0,W=w.length;U<W;U++){const q=w[U],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const X=V.getFrameExtents();if(r.multiply(X),a.copy(V.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/X.x),r.x=a.x*X.x,V.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/X.y),r.y=a.y*X.y,V.mapSize.y=a.y)),V.map===null||re===!0||P===!0){const te=this.type!==tn?{minFilter:$e,magFilter:$e}:{};V.map!==null&&V.map.dispose(),V.map=new _n(r.x,r.y,te),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const Q=V.getViewportCount();for(let te=0;te<Q;te++){const de=V.getViewport(te);s.set(a.x*de.x,a.y*de.y,a.x*de.z,a.y*de.w),Y.viewport(s),V.updateMatrices(q,te),i=V.getFrustum(),A(T,H,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===tn&&b(V,H),V.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(x,E,I)};function b(w,T){const H=e.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new _n(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(T,null,H,f,y,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(T,null,H,m,y,null)}function g(w,T,H,x){let E=null;const I=H.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)E=I;else if(E=H.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const Y=E.uuid,re=T.uuid;let P=c[Y];P===void 0&&(P={},c[Y]=P);let U=P[re];U===void 0&&(U=E.clone(),P[re]=U,T.addEventListener("dispose",D)),E=U}if(E.visible=T.visible,E.wireframe=T.wireframe,x===tn?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:u[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,H.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Y=n.properties.get(E);Y.light=H}return E}function A(w,T,H,x,E){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===tn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld);const re=e.update(w),P=w.material;if(Array.isArray(P)){const U=re.groups;for(let W=0,q=U.length;W<q;W++){const V=U[W],X=P[V.materialIndex];if(X&&X.visible){const Q=g(w,X,x,E);w.onBeforeShadow(n,w,T,H,re,Q,V),n.renderBufferDirect(H,null,re,Q,w,V),w.onAfterShadow(n,w,T,H,re,Q,V)}}}else if(P.visible){const U=g(w,P,x,E);w.onBeforeShadow(n,w,T,H,re,U,null),n.renderBufferDirect(H,null,re,U,w,null),w.onAfterShadow(n,w,T,H,re,U,null)}}const Y=w.children;for(let re=0,P=Y.length;re<P;re++)A(Y[re],T,H,x,E)}function D(w){w.target.removeEventListener("dispose",D);for(const H in c){const x=c[H],E=w.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}function Sp(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const ae=new pt;let oe=null;const Te=new pt(0,0,0,0);return{setMask:function(Me){oe!==Me&&!R&&(n.colorMask(Me,Me,Me,Me),oe=Me)},setLocked:function(Me){R=Me},setClear:function(Me,Ye,je,ct,Mt){Mt===!0&&(Me*=ct,Ye*=ct,je*=ct),ae.set(Me,Ye,je,ct),Te.equals(ae)===!1&&(n.clearColor(Me,Ye,je,ct),Te.copy(ae))},reset:function(){R=!1,oe=null,Te.set(-1,0,0,0)}}}function a(){let R=!1,ae=null,oe=null,Te=null;return{setTest:function(Me){Me?Le(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(Me){ae!==Me&&!R&&(n.depthMask(Me),ae=Me)},setFunc:function(Me){if(oe!==Me){switch(Me){case Hl:n.depthFunc(n.NEVER);break;case kl:n.depthFunc(n.ALWAYS);break;case Vl:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case Wl:n.depthFunc(n.EQUAL);break;case Xl:n.depthFunc(n.GEQUAL);break;case ql:n.depthFunc(n.GREATER);break;case Yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Me}},setLocked:function(Me){R=Me},setClear:function(Me){Te!==Me&&(n.clearDepth(Me),Te=Me)},reset:function(){R=!1,ae=null,oe=null,Te=null}}}function s(){let R=!1,ae=null,oe=null,Te=null,Me=null,Ye=null,je=null,ct=null,Mt=null;return{setTest:function(Ke){R||(Ke?Le(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(Ke){ae!==Ke&&!R&&(n.stencilMask(Ke),ae=Ke)},setFunc:function(Ke,St,kt){(oe!==Ke||Te!==St||Me!==kt)&&(n.stencilFunc(Ke,St,kt),oe=Ke,Te=St,Me=kt)},setOp:function(Ke,St,kt){(Ye!==Ke||je!==St||ct!==kt)&&(n.stencilOp(Ke,St,kt),Ye=Ke,je=St,ct=kt)},setLocked:function(Ke){R=Ke},setClear:function(Ke){Mt!==Ke&&(n.clearStencil(Ke),Mt=Ke)},reset:function(){R=!1,ae=null,oe=null,Te=null,Me=null,Ye=null,je=null,ct=null,Mt=null}}}const o=new r,l=new a,c=new s,d=new WeakMap,u=new WeakMap;let f={},m={},_=new WeakMap,y=[],p=null,h=!1,b=null,g=null,A=null,D=null,w=null,T=null,H=null,x=new ke(0,0,0),E=0,I=!1,Y=null,re=null,P=null,U=null,W=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,X=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=X>=1):Q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=X>=2);let te=null,de={};const k=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),le=new pt().fromArray(k),ve=new pt().fromArray(K);function _e(R,ae,oe,Te){const Me=new Uint8Array(4),Ye=n.createTexture();n.bindTexture(R,Ye),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<oe;je++)i&&(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)?n.texImage3D(ae,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(ae+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return Ye}const Pe={};Pe[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pe[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(n.DEPTH_TEST),l.setFunc(nr),Ue(!1),S(Ga),Le(n.CULL_FACE),pe(fn);function Le(R){f[R]!==!0&&(n.enable(R),f[R]=!0)}function be(R){f[R]!==!1&&(n.disable(R),f[R]=!1)}function He(R,ae){return m[R]!==ae?(n.bindFramebuffer(R,ae),m[R]=ae,i&&(R===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ae),R===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ae)),!0):!1}function N(R,ae){let oe=y,Te=!1;if(R)if(oe=_.get(ae),oe===void 0&&(oe=[],_.set(ae,oe)),R.isWebGLMultipleRenderTargets){const Me=R.texture;if(oe.length!==Me.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Ye=0,je=Me.length;Ye<je;Ye++)oe[Ye]=n.COLOR_ATTACHMENT0+Ye;oe.length=Me.length,Te=!0}}else oe[0]!==n.COLOR_ATTACHMENT0&&(oe[0]=n.COLOR_ATTACHMENT0,Te=!0);else oe[0]!==n.BACK&&(oe[0]=n.BACK,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function yt(R){return p!==R?(n.useProgram(R),p=R,!0):!1}const ye={[Rn]:n.FUNC_ADD,[Al]:n.FUNC_SUBTRACT,[wl]:n.FUNC_REVERSE_SUBTRACT};if(i)ye[Wa]=n.MIN,ye[Xa]=n.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(ye[Wa]=R.MIN_EXT,ye[Xa]=R.MAX_EXT)}const Re={[Rl]:n.ZERO,[Cl]:n.ONE,[Pl]:n.SRC_COLOR,[fa]:n.SRC_ALPHA,[Ol]:n.SRC_ALPHA_SATURATE,[Ul]:n.DST_COLOR,[Ll]:n.DST_ALPHA,[Dl]:n.ONE_MINUS_SRC_COLOR,[pa]:n.ONE_MINUS_SRC_ALPHA,[Nl]:n.ONE_MINUS_DST_COLOR,[Il]:n.ONE_MINUS_DST_ALPHA,[Fl]:n.CONSTANT_COLOR,[zl]:n.ONE_MINUS_CONSTANT_COLOR,[Bl]:n.CONSTANT_ALPHA,[Gl]:n.ONE_MINUS_CONSTANT_ALPHA};function pe(R,ae,oe,Te,Me,Ye,je,ct,Mt,Ke){if(R===fn){h===!0&&(be(n.BLEND),h=!1);return}if(h===!1&&(Le(n.BLEND),h=!0),R!==Tl){if(R!==b||Ke!==I){if((g!==Rn||w!==Rn)&&(n.blendEquation(n.FUNC_ADD),g=Rn,w=Rn),Ke)switch(R){case Jn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ha:n.blendFunc(n.ONE,n.ONE);break;case ka:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Va:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Jn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ha:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ka:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Va:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}A=null,D=null,T=null,H=null,x.set(0,0,0),E=0,b=R,I=Ke}return}Me=Me||ae,Ye=Ye||oe,je=je||Te,(ae!==g||Me!==w)&&(n.blendEquationSeparate(ye[ae],ye[Me]),g=ae,w=Me),(oe!==A||Te!==D||Ye!==T||je!==H)&&(n.blendFuncSeparate(Re[oe],Re[Te],Re[Ye],Re[je]),A=oe,D=Te,T=Ye,H=je),(ct.equals(x)===!1||Mt!==E)&&(n.blendColor(ct.r,ct.g,ct.b,Mt),x.copy(ct),E=Mt),b=R,I=!1}function Qe(R,ae){R.side===Wt?be(n.CULL_FACE):Le(n.CULL_FACE);let oe=R.side===Rt;ae&&(oe=!oe),Ue(oe),R.blending===Jn&&R.transparent===!1?pe(fn):pe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const Te=R.stencilWrite;c.setTest(Te),Te&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),F(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Le(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(R){Y!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),Y=R)}function S(R){R!==Sl?(Le(n.CULL_FACE),R!==re&&(R===Ga?n.cullFace(n.BACK):R===El?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),re=R}function v(R){R!==P&&(V&&n.lineWidth(R),P=R)}function F(R,ae,oe){R?(Le(n.POLYGON_OFFSET_FILL),(U!==ae||W!==oe)&&(n.polygonOffset(ae,oe),U=ae,W=oe)):be(n.POLYGON_OFFSET_FILL)}function J(R){R?Le(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function $(R){R===void 0&&(R=n.TEXTURE0+q-1),te!==R&&(n.activeTexture(R),te=R)}function ee(R,ae,oe){oe===void 0&&(te===null?oe=n.TEXTURE0+q-1:oe=te);let Te=de[oe];Te===void 0&&(Te={type:void 0,texture:void 0},de[oe]=Te),(Te.type!==R||Te.texture!==ae)&&(te!==oe&&(n.activeTexture(oe),te=oe),n.bindTexture(R,ae||Pe[R]),Te.type=R,Te.texture=ae)}function me(){const R=de[te];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ne(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function we(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ie(R){le.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),le.copy(R))}function We(R){ve.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),ve.copy(R))}function et(R,ae){let oe=u.get(ae);oe===void 0&&(oe=new WeakMap,u.set(ae,oe));let Te=oe.get(R);Te===void 0&&(Te=n.getUniformBlockIndex(ae,R.name),oe.set(R,Te))}function Fe(R,ae){const Te=u.get(ae).get(R);d.get(ae)!==Te&&(n.uniformBlockBinding(ae,Te,R.__bindingPointIndex),d.set(ae,Te))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},te=null,de={},m={},_=new WeakMap,y=[],p=null,h=!1,b=null,g=null,A=null,D=null,w=null,T=null,H=null,x=new ke(0,0,0),E=0,I=!1,Y=null,re=null,P=null,U=null,W=null,le.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Le,disable:be,bindFramebuffer:He,drawBuffers:N,useProgram:yt,setBlending:pe,setMaterial:Qe,setFlipSided:Ue,setCullFace:S,setLineWidth:v,setPolygonOffset:F,setScissorTest:J,activeTexture:$,bindTexture:ee,unbindTexture:me,compressedTexImage2D:se,compressedTexImage3D:he,texImage2D:xe,texImage3D:ue,updateUBOMapping:et,uniformBlockBinding:Fe,texStorage2D:Ge,texStorage3D:we,texSubImage2D:Ee,texSubImage3D:Ne,compressedTexSubImage2D:Z,compressedTexSubImage3D:Xe,scissor:Ie,viewport:We,reset:ne}}function Ep(n,e,t,i,r,a,s){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return m?new OffscreenCanvas(S,v):xi("canvas")}function y(S,v,F,J){let $=1;if((S.width>J||S.height>J)&&($=J/Math.max(S.width,S.height)),$<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ee=v?ya:Math.floor,me=ee($*S.width),se=ee($*S.height);u===void 0&&(u=_(me,se));const he=F?_(me,se):u;return he.width=me,he.height=se,he.getContext("2d").drawImage(S,0,0,me,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+me+"x"+se+")."),he}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return So(S.width)&&So(S.height)}function h(S){return o?!1:S.wrapS!==Lt||S.wrapT!==Lt||S.minFilter!==$e&&S.minFilter!==ft}function b(S,v){return S.generateMipmaps&&v&&S.minFilter!==$e&&S.minFilter!==ft}function g(S){n.generateMipmap(S)}function A(S,v,F,J,$=!1){if(o===!1)return v;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ee=v;if(v===n.RED&&(F===n.FLOAT&&(ee=n.R32F),F===n.HALF_FLOAT&&(ee=n.R16F),F===n.UNSIGNED_BYTE&&(ee=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(ee=n.R8UI),F===n.UNSIGNED_SHORT&&(ee=n.R16UI),F===n.UNSIGNED_INT&&(ee=n.R32UI),F===n.BYTE&&(ee=n.R8I),F===n.SHORT&&(ee=n.R16I),F===n.INT&&(ee=n.R32I)),v===n.RG&&(F===n.FLOAT&&(ee=n.RG32F),F===n.HALF_FLOAT&&(ee=n.RG16F),F===n.UNSIGNED_BYTE&&(ee=n.RG8)),v===n.RGBA){const me=$?ir:qe.getTransfer(J);F===n.FLOAT&&(ee=n.RGBA32F),F===n.HALF_FLOAT&&(ee=n.RGBA16F),F===n.UNSIGNED_BYTE&&(ee=me===Ze?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function D(S,v,F){return b(S,F)===!0||S.isFramebufferTexture&&S.minFilter!==$e&&S.minFilter!==ft?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function w(S){return S===$e||S===qa||S===Nr?n.NEAREST:n.LINEAR}function T(S){const v=S.target;v.removeEventListener("dispose",T),x(v),v.isVideoTexture&&d.delete(v)}function H(S){const v=S.target;v.removeEventListener("dispose",H),I(v)}function x(S){const v=i.get(S);if(v.__webglInit===void 0)return;const F=S.source,J=f.get(F);if(J){const $=J[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(S),Object.keys(J).length===0&&f.delete(F)}i.remove(S)}function E(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const F=S.source,J=f.get(F);delete J[v.__cacheKey],s.memory.textures--}function I(S){const v=S.texture,F=i.get(S),J=i.get(v);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),s.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(F.__webglFramebuffer[$]))for(let ee=0;ee<F.__webglFramebuffer[$].length;ee++)n.deleteFramebuffer(F.__webglFramebuffer[$][ee]);else n.deleteFramebuffer(F.__webglFramebuffer[$]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[$])}else{if(Array.isArray(F.__webglFramebuffer))for(let $=0;$<F.__webglFramebuffer.length;$++)n.deleteFramebuffer(F.__webglFramebuffer[$]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let $=0;$<F.__webglColorRenderbuffer.length;$++)F.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[$]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let $=0,ee=v.length;$<ee;$++){const me=i.get(v[$]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),s.memory.textures--),i.remove(v[$])}i.remove(v),i.remove(S)}let Y=0;function re(){Y=0}function P(){const S=Y;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),Y+=1,S}function U(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function W(S,v){const F=i.get(S);if(S.isVideoTexture&&Qe(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){const J=S.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(F,S,v);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function q(S,v){const F=i.get(S);if(S.version>0&&F.__version!==S.version){le(F,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function V(S,v){const F=i.get(S);if(S.version>0&&F.__version!==S.version){le(F,S,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function X(S,v){const F=i.get(S);if(S.version>0&&F.__version!==S.version){ve(F,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const Q={[vi]:n.REPEAT,[Lt]:n.CLAMP_TO_EDGE,[_a]:n.MIRRORED_REPEAT},te={[$e]:n.NEAREST,[qa]:n.NEAREST_MIPMAP_NEAREST,[Nr]:n.NEAREST_MIPMAP_LINEAR,[ft]:n.LINEAR,[tc]:n.LINEAR_MIPMAP_NEAREST,[ri]:n.LINEAR_MIPMAP_LINEAR},de={[fc]:n.NEVER,[xc]:n.ALWAYS,[pc]:n.LESS,[bs]:n.LEQUAL,[mc]:n.EQUAL,[vc]:n.GEQUAL,[gc]:n.GREATER,[_c]:n.NOTEQUAL};function k(S,v,F){if(F?(n.texParameteri(S,n.TEXTURE_WRAP_S,Q[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,Q[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,Q[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,te[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,te[v.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Lt||v.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,w(v.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==$e&&v.minFilter!==ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,de[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===$e||v.minFilter!==Nr&&v.minFilter!==ri||v.type===bt&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===rn&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(S,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function K(S,v){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",T));const J=v.source;let $=f.get(J);$===void 0&&($={},f.set(J,$));const ee=U(v);if(ee!==S.__cacheKey){$[ee]===void 0&&($[ee]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,F=!0),$[ee].usedTimes++;const me=$[S.__cacheKey];me!==void 0&&($[S.__cacheKey].usedTimes--,me.usedTimes===0&&E(v)),S.__cacheKey=ee,S.__webglTexture=$[ee].texture}return F}function le(S,v,F){let J=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=n.TEXTURE_3D);const $=K(S,v),ee=v.source;t.bindTexture(J,S.__webglTexture,n.TEXTURE0+F);const me=i.get(ee);if(ee.version!==me.__version||$===!0){t.activeTexture(n.TEXTURE0+F);const se=qe.getPrimaries(qe.workingColorSpace),he=v.colorSpace===Ot?null:qe.getPrimaries(v.colorSpace),Ee=v.colorSpace===Ot||se===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ne=h(v)&&p(v.image)===!1;let Z=y(v.image,Ne,!1,r.maxTextureSize);Z=Ue(v,Z);const Xe=p(Z)||o,Ge=a.convert(v.format,v.colorSpace);let we=a.convert(v.type),xe=A(v.internalFormat,Ge,we,v.colorSpace,v.isVideoTexture);k(J,v,Xe);let ue;const Ie=v.mipmaps,We=o&&v.isVideoTexture!==!0&&xe!==Ms,et=me.__version===void 0||$===!0,Fe=D(v,Z,Xe);if(v.isDepthTexture)xe=n.DEPTH_COMPONENT,o?v.type===bt?xe=n.DEPTH_COMPONENT32F:v.type===un?xe=n.DEPTH_COMPONENT24:v.type===Pn?xe=n.DEPTH24_STENCIL8:xe=n.DEPTH_COMPONENT16:v.type===bt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Dn&&xe===n.DEPTH_COMPONENT&&v.type!==Aa&&v.type!==un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=un,we=a.convert(v.type)),v.format===ai&&xe===n.DEPTH_COMPONENT&&(xe=n.DEPTH_STENCIL,v.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Pn,we=a.convert(v.type))),et&&(We?t.texStorage2D(n.TEXTURE_2D,1,xe,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,xe,Z.width,Z.height,0,Ge,we,null));else if(v.isDataTexture)if(Ie.length>0&&Xe){We&&et&&t.texStorage2D(n.TEXTURE_2D,Fe,xe,Ie[0].width,Ie[0].height);for(let ne=0,R=Ie.length;ne<R;ne++)ue=Ie[ne],We?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ue.width,ue.height,Ge,we,ue.data):t.texImage2D(n.TEXTURE_2D,ne,xe,ue.width,ue.height,0,Ge,we,ue.data);v.generateMipmaps=!1}else We?(et&&t.texStorage2D(n.TEXTURE_2D,Fe,xe,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,Ge,we,Z.data)):t.texImage2D(n.TEXTURE_2D,0,xe,Z.width,Z.height,0,Ge,we,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){We&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,xe,Ie[0].width,Ie[0].height,Z.depth);for(let ne=0,R=Ie.length;ne<R;ne++)ue=Ie[ne],v.format!==xt?Ge!==null?We?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,Z.depth,Ge,ue.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,xe,ue.width,ue.height,Z.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,Z.depth,Ge,we,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,xe,ue.width,ue.height,Z.depth,0,Ge,we,ue.data)}else{We&&et&&t.texStorage2D(n.TEXTURE_2D,Fe,xe,Ie[0].width,Ie[0].height);for(let ne=0,R=Ie.length;ne<R;ne++)ue=Ie[ne],v.format!==xt?Ge!==null?We?t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,ue.width,ue.height,Ge,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,xe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ue.width,ue.height,Ge,we,ue.data):t.texImage2D(n.TEXTURE_2D,ne,xe,ue.width,ue.height,0,Ge,we,ue.data)}else if(v.isDataArrayTexture)We?(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,xe,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Ge,we,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,Z.width,Z.height,Z.depth,0,Ge,we,Z.data);else if(v.isData3DTexture)We?(et&&t.texStorage3D(n.TEXTURE_3D,Fe,xe,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Ge,we,Z.data)):t.texImage3D(n.TEXTURE_3D,0,xe,Z.width,Z.height,Z.depth,0,Ge,we,Z.data);else if(v.isFramebufferTexture){if(et)if(We)t.texStorage2D(n.TEXTURE_2D,Fe,xe,Z.width,Z.height);else{let ne=Z.width,R=Z.height;for(let ae=0;ae<Fe;ae++)t.texImage2D(n.TEXTURE_2D,ae,xe,ne,R,0,Ge,we,null),ne>>=1,R>>=1}}else if(Ie.length>0&&Xe){We&&et&&t.texStorage2D(n.TEXTURE_2D,Fe,xe,Ie[0].width,Ie[0].height);for(let ne=0,R=Ie.length;ne<R;ne++)ue=Ie[ne],We?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Ge,we,ue):t.texImage2D(n.TEXTURE_2D,ne,xe,Ge,we,ue);v.generateMipmaps=!1}else We?(et&&t.texStorage2D(n.TEXTURE_2D,Fe,xe,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ge,we,Z)):t.texImage2D(n.TEXTURE_2D,0,xe,Ge,we,Z);b(v,Xe)&&g(J),me.__version=ee.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ve(S,v,F){if(v.image.length!==6)return;const J=K(S,v),$=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+F);const ee=i.get($);if($.version!==ee.__version||J===!0){t.activeTexture(n.TEXTURE0+F);const me=qe.getPrimaries(qe.workingColorSpace),se=v.colorSpace===Ot?null:qe.getPrimaries(v.colorSpace),he=v.colorSpace===Ot||me===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,Ne=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let ne=0;ne<6;ne++)!Ee&&!Ne?Z[ne]=y(v.image[ne],!1,!0,r.maxCubemapSize):Z[ne]=Ne?v.image[ne].image:v.image[ne],Z[ne]=Ue(v,Z[ne]);const Xe=Z[0],Ge=p(Xe)||o,we=a.convert(v.format,v.colorSpace),xe=a.convert(v.type),ue=A(v.internalFormat,we,xe,v.colorSpace),Ie=o&&v.isVideoTexture!==!0,We=ee.__version===void 0||J===!0;let et=D(v,Xe,Ge);k(n.TEXTURE_CUBE_MAP,v,Ge);let Fe;if(Ee){Ie&&We&&t.texStorage2D(n.TEXTURE_CUBE_MAP,et,ue,Xe.width,Xe.height);for(let ne=0;ne<6;ne++){Fe=Z[ne].mipmaps;for(let R=0;R<Fe.length;R++){const ae=Fe[R];v.format!==xt?we!==null?Ie?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,ae.width,ae.height,we,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,ue,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,ae.width,ae.height,we,xe,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,ue,ae.width,ae.height,0,we,xe,ae.data)}}}else{Fe=v.mipmaps,Ie&&We&&(Fe.length>0&&et++,t.texStorage2D(n.TEXTURE_CUBE_MAP,et,ue,Z[0].width,Z[0].height));for(let ne=0;ne<6;ne++)if(Ne){Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Z[ne].width,Z[ne].height,we,xe,Z[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,Z[ne].width,Z[ne].height,0,we,xe,Z[ne].data);for(let R=0;R<Fe.length;R++){const oe=Fe[R].image[ne].image;Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,oe.width,oe.height,we,xe,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,ue,oe.width,oe.height,0,we,xe,oe.data)}}else{Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,we,xe,Z[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,we,xe,Z[ne]);for(let R=0;R<Fe.length;R++){const ae=Fe[R];Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,we,xe,ae.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,ue,we,xe,ae.image[ne])}}}b(v,Ge)&&g(n.TEXTURE_CUBE_MAP),ee.__version=$.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function _e(S,v,F,J,$,ee){const me=a.convert(F.format,F.colorSpace),se=a.convert(F.type),he=A(F.internalFormat,me,se,F.colorSpace);if(!i.get(v).__hasExternalTextures){const Ne=Math.max(1,v.width>>ee),Z=Math.max(1,v.height>>ee);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,ee,he,Ne,Z,v.depth,0,me,se,null):t.texImage2D($,ee,he,Ne,Z,0,me,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),pe(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,$,i.get(F).__webglTexture,0,Re(v)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,$,i.get(F).__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(S,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let J=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||pe(v)){const $=v.depthTexture;$&&$.isDepthTexture&&($.type===bt?J=n.DEPTH_COMPONENT32F:$.type===un&&(J=n.DEPTH_COMPONENT24));const ee=Re(v);pe(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,J,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,J,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){const J=Re(v);F&&pe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,v.width,v.height):pe(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{const J=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let $=0;$<J.length;$++){const ee=J[$],me=a.convert(ee.format,ee.colorSpace),se=a.convert(ee.type),he=A(ee.internalFormat,me,se,ee.colorSpace),Ee=Re(v);F&&pe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,he,v.width,v.height):pe(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,he,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,he,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const J=i.get(v.depthTexture).__webglTexture,$=Re(v);if(v.depthTexture.format===Dn)pe(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(v.depthTexture.format===ai)pe(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function be(S){const v=i.get(S),F=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Le(v.__webglFramebuffer,S)}else if(F){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]=n.createRenderbuffer(),Pe(v.__webglDepthbuffer[J],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Pe(v.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(S,v,F){const J=i.get(S);v!==void 0&&_e(J.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&be(S)}function N(S){const v=S.texture,F=i.get(S),J=i.get(v);S.addEventListener("dispose",H),S.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=v.version,s.memory.textures++);const $=S.isWebGLCubeRenderTarget===!0,ee=S.isWebGLMultipleRenderTargets===!0,me=p(S)||o;if($){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(o&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let he=0;he<v.mipmaps.length;he++)F.__webglFramebuffer[se][he]=n.createFramebuffer()}else F.__webglFramebuffer[se]=n.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)F.__webglFramebuffer[se]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(ee)if(r.drawBuffers){const se=S.texture;for(let he=0,Ee=se.length;he<Ee;he++){const Ne=i.get(se[he]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&pe(S)===!1){const se=ee?v:[v];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){const Ee=se[he];F.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[he]);const Ne=a.convert(Ee.format,Ee.colorSpace),Z=a.convert(Ee.type),Xe=A(Ee.internalFormat,Ne,Z,Ee.colorSpace,S.isXRRenderTarget===!0),Ge=Re(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Xe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,F.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),k(n.TEXTURE_CUBE_MAP,v,me);for(let se=0;se<6;se++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)_e(F.__webglFramebuffer[se][he],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,he);else _e(F.__webglFramebuffer[se],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);b(v,me)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const se=S.texture;for(let he=0,Ee=se.length;he<Ee;he++){const Ne=se[he],Z=i.get(Ne);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture),k(n.TEXTURE_2D,Ne,me),_e(F.__webglFramebuffer,S,Ne,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),b(Ne,me)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?se=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,J.__webglTexture),k(se,v,me),o&&v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)_e(F.__webglFramebuffer[he],S,v,n.COLOR_ATTACHMENT0,se,he);else _e(F.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,se,0);b(v,me)&&g(se),t.unbindTexture()}S.depthBuffer&&be(S)}function yt(S){const v=p(S)||o,F=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0,$=F.length;J<$;J++){const ee=F[J];if(b(ee,v)){const me=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(ee).__webglTexture;t.bindTexture(me,se),g(me),t.unbindTexture()}}}function ye(S){if(o&&S.samples>0&&pe(S)===!1){const v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],F=S.width,J=S.height;let $=n.COLOR_BUFFER_BIT;const ee=[],me=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(S),he=S.isWebGLMultipleRenderTargets===!0;if(he)for(let Ee=0;Ee<v.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Ee=0;Ee<v.length;Ee++){ee.push(n.COLOR_ATTACHMENT0+Ee),S.depthBuffer&&ee.push(me);const Ne=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Ne===!1&&(S.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),he&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]),Ne===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[me])),he){const Z=i.get(v[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,F,J,0,0,F,J,$,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<v.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]);const Ne=i.get(v[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Re(S){return Math.min(r.maxSamples,S.samples)}function pe(S){const v=i.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Qe(S){const v=s.render.frame;d.get(S)!==v&&(d.set(S,v),S.update())}function Ue(S,v){const F=S.colorSpace,J=S.format,$=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===va||F!==Yt&&F!==Ot&&(qe.getTransfer(F)===Ze?o===!1?e.has("EXT_sRGB")===!0&&J===xt?(S.format=va,S.minFilter=ft,S.generateMipmaps=!1):v=As.sRGBToLinear(v):(J!==xt||$!==Xt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}this.allocateTextureUnit=P,this.resetTextureUnits=re,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=X,this.rebindTextures=He,this.setupRenderTarget=N,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=pe}function bp(n,e,t){const i=t.isWebGL2;function r(a,s=Ot){let o;const l=qe.getTransfer(s);if(a===Xt)return n.UNSIGNED_BYTE;if(a===gs)return n.UNSIGNED_SHORT_4_4_4_4;if(a===_s)return n.UNSIGNED_SHORT_5_5_5_1;if(a===nc)return n.BYTE;if(a===ic)return n.SHORT;if(a===Aa)return n.UNSIGNED_SHORT;if(a===ms)return n.INT;if(a===un)return n.UNSIGNED_INT;if(a===bt)return n.FLOAT;if(a===rn)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===rc)return n.ALPHA;if(a===xt)return n.RGBA;if(a===ac)return n.LUMINANCE;if(a===oc)return n.LUMINANCE_ALPHA;if(a===Dn)return n.DEPTH_COMPONENT;if(a===ai)return n.DEPTH_STENCIL;if(a===va)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===sc)return n.RED;if(a===vs)return n.RED_INTEGER;if(a===lc)return n.RG;if(a===xs)return n.RG_INTEGER;if(a===ys)return n.RGBA_INTEGER;if(a===Or||a===Fr||a===zr||a===Br)if(l===Ze)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Or)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Fr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Br)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Or)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Fr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===zr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Br)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ya||a===ja||a===Ka||a===Za)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===Ya)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ja)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ka)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Za)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ms)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===$a||a===Qa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===$a)return l===Ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===Qa)return l===Ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ja||a===eo||a===to||a===no||a===io||a===ro||a===ao||a===oo||a===so||a===lo||a===co||a===ho||a===uo||a===fo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===Ja)return l===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===eo)return l===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===to)return l===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===no)return l===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===io)return l===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ro)return l===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===ao)return l===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===oo)return l===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===so)return l===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===lo)return l===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===co)return l===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ho)return l===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===uo)return l===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===fo)return l===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Gr||a===po||a===mo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===Gr)return l===Ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===po)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===mo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===cc||a===go||a===_o||a===vo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===Gr)return o.COMPRESSED_RED_RGTC1_EXT;if(a===go)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===_o)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===vo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Pn?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class Tp extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qi extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ap={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,i),h=this._getHandJoint(c,y);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ap)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class wp extends si{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,d=null,u=null,f=null,m=null,_=null;const y=t.getContextAttributes();let p=null,h=null;const b=[],g=[],A=new Ve;let D=null;const w=new Nt;w.layers.enable(1),w.viewport=new pt;const T=new Nt;T.layers.enable(2),T.viewport=new pt;const H=[w,T],x=new Tp;x.layers.enable(1),x.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=b[k];return K===void 0&&(K=new ha,b[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=b[k];return K===void 0&&(K=new ha,b[k]=K),K.getGripSpace()},this.getHand=function(k){let K=b[k];return K===void 0&&(K=new ha,b[k]=K),K.getHandSpace()};function Y(k){const K=g.indexOf(k.inputSource);if(K===-1)return;const le=b[K];le!==void 0&&(le.update(k.inputSource,k.frame,c||s),le.dispatchEvent({type:k.type,data:k.inputSource}))}function re(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",P);for(let k=0;k<b.length;k++){const K=g[k];K!==null&&(g[k]=null,b[k].disconnect(K))}E=null,I=null,e.setRenderTarget(p),m=null,f=null,u=null,r=null,h=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",re),r.addEventListener("inputsourceschange",P),y.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new _n(m.framebufferWidth,m.framebufferHeight,{format:xt,type:Xt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let K=null,le=null,ve=null;y.depth&&(ve=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=y.stencil?ai:Dn,le=y.stencil?Pn:un);const _e={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:a};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(_e),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new _n(f.textureWidth,f.textureHeight,{format:xt,type:Xt,depthTexture:new zs(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Pe=e.properties.get(h);Pe.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(k){for(let K=0;K<k.removed.length;K++){const le=k.removed[K],ve=g.indexOf(le);ve>=0&&(g[ve]=null,b[ve].disconnect(le))}for(let K=0;K<k.added.length;K++){const le=k.added[K];let ve=g.indexOf(le);if(ve===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=g.length){g.push(le),ve=Pe;break}else if(g[Pe]===null){g[Pe]=le,ve=Pe;break}if(ve===-1)break}const _e=b[ve];_e&&_e.connect(le)}}const U=new C,W=new C;function q(k,K,le){U.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(le.matrixWorld);const ve=U.distanceTo(W),_e=K.projectionMatrix.elements,Pe=le.projectionMatrix.elements,Le=_e[14]/(_e[10]-1),be=_e[14]/(_e[10]+1),He=(_e[9]+1)/_e[5],N=(_e[9]-1)/_e[5],yt=(_e[8]-1)/_e[0],ye=(Pe[8]+1)/Pe[0],Re=Le*yt,pe=Le*ye,Qe=ve/(-yt+ye),Ue=Qe*-yt;K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ue),k.translateZ(Qe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const S=Le+Qe,v=be+Qe,F=Re-Ue,J=pe+(ve-Ue),$=He*be/v*S,ee=N*be/v*S;k.projectionMatrix.makePerspective(F,J,$,ee,S,v),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function V(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;x.near=T.near=w.near=k.near,x.far=T.far=w.far=k.far,(E!==x.near||I!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,I=x.far);const K=k.parent,le=x.cameras;V(x,K);for(let ve=0;ve<le.length;ve++)V(le[ve],K);le.length===2?q(x,w,T):x.projectionMatrix.copy(w.projectionMatrix),X(k,x,K)};function X(k,K,le){le===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(le.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=xa*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let Q=null;function te(k,K){if(d=K.getViewerPose(c||s),_=K,d!==null){const le=d.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let ve=!1;le.length!==x.cameras.length&&(x.cameras.length=0,ve=!0);for(let _e=0;_e<le.length;_e++){const Pe=le[_e];let Le=null;if(m!==null)Le=m.getViewport(Pe);else{const He=u.getViewSubImage(f,Pe);Le=He.viewport,_e===0&&(e.setRenderTargetTextures(h,He.colorTexture,f.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(h))}let be=H[_e];be===void 0&&(be=new Nt,be.layers.enable(_e),be.viewport=new pt,H[_e]=be),be.matrix.fromArray(Pe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Pe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Le.x,Le.y,Le.width,Le.height),_e===0&&(x.matrix.copy(be.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ve===!0&&x.cameras.push(be)}}for(let le=0;le<b.length;le++){const ve=g[le],_e=b[le];ve!==null&&_e!==void 0&&_e.update(ve,K,c||s)}Q&&Q(k,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const de=new Fs;de.setAnimationLoop(te),this.setAnimationLoop=function(k){Q=k},this.dispose=function(){}}}function Rp(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Is(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,b,g,A){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(p,h):h.isMeshToonMaterial?(a(p,h),u(p,h)):h.isMeshPhongMaterial?(a(p,h),d(p,h)):h.isMeshStandardMaterial?(a(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,A)):h.isMeshMatcapMaterial?(a(p,h),_(p,h)):h.isMeshDepthMaterial?a(p,h):h.isMeshDistanceMaterial?(a(p,h),y(p,h)):h.isMeshNormalMaterial?a(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,b,g):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Rt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Rt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=e.get(h).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const g=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*g,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,g){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=g*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function d(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Rt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function y(p,h){const b=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Cp(n,e,t,i){let r={},a={},s=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,g){const A=g.program;i.uniformBlockBinding(b,A)}function c(b,g){let A=r[b.id];A===void 0&&(_(b),A=d(b),r[b.id]=A,b.addEventListener("dispose",p));const D=g.program;i.updateUBOMapping(b,D);const w=e.render.frame;a[b.id]!==w&&(f(b),a[b.id]=w)}function d(b){const g=u();b.__bindingPointIndex=g;const A=n.createBuffer(),D=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,D,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,A),A}function u(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const g=r[b.id],A=b.uniforms,D=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let w=0,T=A.length;w<T;w++){const H=Array.isArray(A[w])?A[w]:[A[w]];for(let x=0,E=H.length;x<E;x++){const I=H[x];if(m(I,w,x,D)===!0){const Y=I.__offset,re=Array.isArray(I.value)?I.value:[I.value];let P=0;for(let U=0;U<re.length;U++){const W=re[U],q=y(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,Y+P,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,g,A,D){const w=b.value,T=g+"_"+A;if(D[T]===void 0)return typeof w=="number"||typeof w=="boolean"?D[T]=w:D[T]=w.clone(),!0;{const H=D[T];if(typeof w=="number"||typeof w=="boolean"){if(H!==w)return D[T]=w,!0}else if(H.equals(w)===!1)return H.copy(w),!0}return!1}function _(b){const g=b.uniforms;let A=0;const D=16;for(let T=0,H=g.length;T<H;T++){const x=Array.isArray(g[T])?g[T]:[g[T]];for(let E=0,I=x.length;E<I;E++){const Y=x[E],re=Array.isArray(Y.value)?Y.value:[Y.value];for(let P=0,U=re.length;P<U;P++){const W=re[P],q=y(W),V=A%D;V!==0&&D-V<q.boundary&&(A+=D-V),Y.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=A,A+=q.storage}}}const w=A%D;return w>0&&(A+=D-w),b.__size=A,b.__cache={},this}function y(b){const g={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(g.boundary=4,g.storage=4):b.isVector2?(g.boundary=8,g.storage=8):b.isVector3||b.isColor?(g.boundary=16,g.storage=12):b.isVector4?(g.boundary=16,g.storage=16):b.isMatrix3?(g.boundary=48,g.storage=48):b.isMatrix4?(g.boundary=64,g.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),g}function p(b){const g=b.target;g.removeEventListener("dispose",p);const A=s.indexOf(g.__bindingPointIndex);s.splice(A,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete a[g.id]}function h(){for(const b in r)n.deleteBuffer(r[b]);s=[],r={},a={}}return{bind:l,update:c,dispose:h}}class Ws{constructor(e={}){const{canvas:t=Mc(),context:i=null,depth:r=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=s;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const h=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this._useLegacyLights=!1,this.toneMapping=pn,this.toneMappingExposure=1;const g=this;let A=!1,D=0,w=0,T=null,H=-1,x=null;const E=new pt,I=new pt;let Y=null;const re=new ke(0);let P=0,U=t.width,W=t.height,q=1,V=null,X=null;const Q=new pt(0,0,U,W),te=new pt(0,0,U,W);let de=!1;const k=new Os;let K=!1,le=!1,ve=null;const _e=new at,Pe=new Ve,Le=new C,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return T===null?q:1}let N=i;function yt(M,L){for(let z=0;z<M.length;z++){const G=M[z],O=t.getContext(G,L);if(O!==null)return O}return null}try{const M={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ta}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",ae,!1),N===null){const L=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&L.shift(),N=yt(L,M),N===null)throw yt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ye,Re,pe,Qe,Ue,S,v,F,J,$,ee,me,se,he,Ee,Ne,Z,Xe,Ge,we,xe,ue,Ie,We;function et(){ye=new zu(N),Re=new Lu(N,ye,e),ye.init(Re),ue=new bp(N,ye,Re),pe=new Sp(N,ye,Re),Qe=new Hu(N),Ue=new lp,S=new Ep(N,ye,pe,Ue,Re,ue,Qe),v=new Uu(g),F=new Fu(g),J=new Kc(N,Re),Ie=new Pu(N,ye,J,Re),$=new Bu(N,J,Qe,Ie),ee=new Xu(N,$,J,Qe),Ge=new Wu(N,Re,S),Ne=new Iu(Ue),me=new sp(g,v,F,ye,Re,Ie,Ne),se=new Rp(g,Ue),he=new dp,Ee=new gp(ye,Re),Xe=new Cu(g,v,F,pe,ee,f,l),Z=new Mp(g,ee,Re),We=new Cp(N,Qe,Re,pe),we=new Du(N,ye,Qe,Re),xe=new Gu(N,ye,Qe,Re),Qe.programs=me.programs,g.capabilities=Re,g.extensions=ye,g.properties=Ue,g.renderLists=he,g.shadowMap=Z,g.state=pe,g.info=Qe}et();const Fe=new wp(g,N);this.xr=Fe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=ye.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ye.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(U,W,!1))},this.getSize=function(M){return M.set(U,W)},this.setSize=function(M,L,z=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=M,W=L,t.width=Math.floor(M*q),t.height=Math.floor(L*q),z===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(U*q,W*q).floor()},this.setDrawingBufferSize=function(M,L,z){U=M,W=L,q=z,t.width=Math.floor(M*z),t.height=Math.floor(L*z),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(E)},this.getViewport=function(M){return M.copy(Q)},this.setViewport=function(M,L,z,G){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,L,z,G),pe.viewport(E.copy(Q).multiplyScalar(q).floor())},this.getScissor=function(M){return M.copy(te)},this.setScissor=function(M,L,z,G){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,L,z,G),pe.scissor(I.copy(te).multiplyScalar(q).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(M){pe.setScissorTest(de=M)},this.setOpaqueSort=function(M){V=M},this.setTransparentSort=function(M){X=M},this.getClearColor=function(M){return M.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(M=!0,L=!0,z=!0){let G=0;if(M){let O=!1;if(T!==null){const ce=T.texture.format;O=ce===ys||ce===xs||ce===vs}if(O){const ce=T.texture.type,ge=ce===Xt||ce===un||ce===Aa||ce===Pn||ce===gs||ce===_s,Se=Xe.getClearColor(),Ae=Xe.getClearAlpha(),Oe=Se.r,Ce=Se.g,De=Se.b;ge?(m[0]=Oe,m[1]=Ce,m[2]=De,m[3]=Ae,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=Oe,_[1]=Ce,_[2]=De,_[3]=Ae,N.clearBufferiv(N.COLOR,0,_))}else G|=N.COLOR_BUFFER_BIT}L&&(G|=N.DEPTH_BUFFER_BIT),z&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),he.dispose(),Ee.dispose(),Ue.dispose(),v.dispose(),F.dispose(),ee.dispose(),Ie.dispose(),We.dispose(),me.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Mt),Fe.removeEventListener("sessionend",Ke),ve&&(ve.dispose(),ve=null),St.stop()};function ne(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=Qe.autoReset,L=Z.enabled,z=Z.autoUpdate,G=Z.needsUpdate,O=Z.type;et(),Qe.autoReset=M,Z.enabled=L,Z.autoUpdate=z,Z.needsUpdate=G,Z.type=O}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function oe(M){const L=M.target;L.removeEventListener("dispose",oe),Te(L)}function Te(M){Me(M),Ue.remove(M)}function Me(M){const L=Ue.get(M).programs;L!==void 0&&(L.forEach(function(z){me.releaseProgram(z)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,z,G,O,ce){L===null&&(L=be);const ge=O.isMesh&&O.matrixWorld.determinant()<0,Se=ml(M,L,z,G,O);pe.setMaterial(G,ge);let Ae=z.index,Oe=1;if(G.wireframe===!0){if(Ae=$.getWireframeAttribute(z),Ae===void 0)return;Oe=2}const Ce=z.drawRange,De=z.attributes.position;let it=Ce.start*Oe,Ct=(Ce.start+Ce.count)*Oe;ce!==null&&(it=Math.max(it,ce.start*Oe),Ct=Math.min(Ct,(ce.start+ce.count)*Oe)),Ae!==null?(it=Math.max(it,0),Ct=Math.min(Ct,Ae.count)):De!=null&&(it=Math.max(it,0),Ct=Math.min(Ct,De.count));const dt=Ct-it;if(dt<0||dt===1/0)return;Ie.setup(O,G,Se,z,Ae);let jt,Je=we;if(Ae!==null&&(jt=J.get(Ae),Je=xe,Je.setIndex(jt)),O.isMesh)G.wireframe===!0?(pe.setLineWidth(G.wireframeLinewidth*He()),Je.setMode(N.LINES)):Je.setMode(N.TRIANGLES);else if(O.isLine){let ze=G.linewidth;ze===void 0&&(ze=1),pe.setLineWidth(ze*He()),O.isLineSegments?Je.setMode(N.LINES):O.isLineLoop?Je.setMode(N.LINE_LOOP):Je.setMode(N.LINE_STRIP)}else O.isPoints?Je.setMode(N.POINTS):O.isSprite&&Je.setMode(N.TRIANGLES);if(O.isBatchedMesh)Je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)Je.renderInstances(it,dt,O.count);else if(z.isInstancedBufferGeometry){const ze=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Dr=Math.min(z.instanceCount,ze);Je.renderInstances(it,dt,Dr)}else Je.render(it,dt)};function Ye(M,L,z){M.transparent===!0&&M.side===Wt&&M.forceSinglePass===!1?(M.side=Rt,M.needsUpdate=!0,Ri(M,L,z),M.side=gn,M.needsUpdate=!0,Ri(M,L,z),M.side=Wt):Ri(M,L,z)}this.compile=function(M,L,z=null){z===null&&(z=M),p=Ee.get(z),p.init(),b.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),M!==z&&M.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(g._useLegacyLights);const G=new Set;return M.traverse(function(O){const ce=O.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){const Se=ce[ge];Ye(Se,z,O),G.add(Se)}else Ye(ce,z,O),G.add(ce)}),b.pop(),p=null,G},this.compileAsync=function(M,L,z=null){const G=this.compile(M,L,z);return new Promise(O=>{function ce(){if(G.forEach(function(ge){Ue.get(ge).currentProgram.isReady()&&G.delete(ge)}),G.size===0){O(M);return}setTimeout(ce,10)}ye.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let je=null;function ct(M){je&&je(M)}function Mt(){St.stop()}function Ke(){St.start()}const St=new Fs;St.setAnimationLoop(ct),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(M){je=M,Fe.setAnimationLoop(M),M===null?St.stop():St.start()},Fe.addEventListener("sessionstart",Mt),Fe.addEventListener("sessionend",Ke),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(L),L=Fe.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,L,T),p=Ee.get(M,b.length),p.init(),b.push(p),_e.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),k.setFromProjectionMatrix(_e),le=this.localClippingEnabled,K=Ne.init(this.clippingPlanes,le),y=he.get(M,h.length),y.init(),h.push(y),kt(M,L,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(V,X),this.info.render.frame++,K===!0&&Ne.beginShadows();const z=p.state.shadowsArray;if(Z.render(z,M,L),K===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xe.render(y,M),p.setupLights(g._useLegacyLights),L.isArrayCamera){const G=L.cameras;for(let O=0,ce=G.length;O<ce;O++){const ge=G[O];Ua(y,M,ge,ge.viewport)}}else Ua(y,M,L);T!==null&&(S.updateMultisampleRenderTarget(T),S.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(g,M,L),Ie.resetDefaultState(),H=-1,x=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function kt(M,L,z,G){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||k.intersectsSprite(M)){G&&Le.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_e);const ge=ee.update(M),Se=M.material;Se.visible&&y.push(M,ge,Se,z,Le.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||k.intersectsObject(M))){const ge=ee.update(M),Se=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Le.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Le.copy(ge.boundingSphere.center)),Le.applyMatrix4(M.matrixWorld).applyMatrix4(_e)),Array.isArray(Se)){const Ae=ge.groups;for(let Oe=0,Ce=Ae.length;Oe<Ce;Oe++){const De=Ae[Oe],it=Se[De.materialIndex];it&&it.visible&&y.push(M,ge,it,z,Le.z,De)}}else Se.visible&&y.push(M,ge,Se,z,Le.z,null)}}const ce=M.children;for(let ge=0,Se=ce.length;ge<Se;ge++)kt(ce[ge],L,z,G)}function Ua(M,L,z,G){const O=M.opaque,ce=M.transmissive,ge=M.transparent;p.setupLightsView(z),K===!0&&Ne.setGlobalState(g.clippingPlanes,z),ce.length>0&&pl(O,ce,L,z),G&&pe.viewport(E.copy(G)),O.length>0&&wi(O,L,z),ce.length>0&&wi(ce,L,z),ge.length>0&&wi(ge,L,z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function pl(M,L,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ce=Re.isWebGL2;ve===null&&(ve=new _n(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?rn:Xt,minFilter:ri,samples:ce?4:0})),g.getDrawingBufferSize(Pe),ce?ve.setSize(Pe.x,Pe.y):ve.setSize(ya(Pe.x),ya(Pe.y));const ge=g.getRenderTarget();g.setRenderTarget(ve),g.getClearColor(re),P=g.getClearAlpha(),P<1&&g.setClearColor(16777215,.5),g.clear();const Se=g.toneMapping;g.toneMapping=pn,wi(M,z,G),S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve);let Ae=!1;for(let Oe=0,Ce=L.length;Oe<Ce;Oe++){const De=L[Oe],it=De.object,Ct=De.geometry,dt=De.material,jt=De.group;if(dt.side===Wt&&it.layers.test(G.layers)){const Je=dt.side;dt.side=Rt,dt.needsUpdate=!0,Na(it,z,G,Ct,dt,jt),dt.side=Je,dt.needsUpdate=!0,Ae=!0}}Ae===!0&&(S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve)),g.setRenderTarget(ge),g.setClearColor(re,P),g.toneMapping=Se}function wi(M,L,z){const G=L.isScene===!0?L.overrideMaterial:null;for(let O=0,ce=M.length;O<ce;O++){const ge=M[O],Se=ge.object,Ae=ge.geometry,Oe=G===null?ge.material:G,Ce=ge.group;Se.layers.test(z.layers)&&Na(Se,L,z,Ae,Oe,Ce)}}function Na(M,L,z,G,O,ce){M.onBeforeRender(g,L,z,G,O,ce),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(g,L,z,G,M,ce),O.transparent===!0&&O.side===Wt&&O.forceSinglePass===!1?(O.side=Rt,O.needsUpdate=!0,g.renderBufferDirect(z,L,G,O,M,ce),O.side=gn,O.needsUpdate=!0,g.renderBufferDirect(z,L,G,O,M,ce),O.side=Wt):g.renderBufferDirect(z,L,G,O,M,ce),M.onAfterRender(g,L,z,G,O,ce)}function Ri(M,L,z){L.isScene!==!0&&(L=be);const G=Ue.get(M),O=p.state.lights,ce=p.state.shadowsArray,ge=O.state.version,Se=me.getParameters(M,O.state,ce,L,z),Ae=me.getProgramCacheKey(Se);let Oe=G.programs;G.environment=M.isMeshStandardMaterial?L.environment:null,G.fog=L.fog,G.envMap=(M.isMeshStandardMaterial?F:v).get(M.envMap||G.environment),Oe===void 0&&(M.addEventListener("dispose",oe),Oe=new Map,G.programs=Oe);let Ce=Oe.get(Ae);if(Ce!==void 0){if(G.currentProgram===Ce&&G.lightsStateVersion===ge)return Fa(M,Se),Ce}else Se.uniforms=me.getUniforms(M),M.onBuild(z,Se,g),M.onBeforeCompile(Se,g),Ce=me.acquireProgram(Se,Ae),Oe.set(Ae,Ce),G.uniforms=Se.uniforms;const De=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=Ne.uniform),Fa(M,Se),G.needsLights=_l(M),G.lightsStateVersion=ge,G.needsLights&&(De.ambientLightColor.value=O.state.ambient,De.lightProbe.value=O.state.probe,De.directionalLights.value=O.state.directional,De.directionalLightShadows.value=O.state.directionalShadow,De.spotLights.value=O.state.spot,De.spotLightShadows.value=O.state.spotShadow,De.rectAreaLights.value=O.state.rectArea,De.ltc_1.value=O.state.rectAreaLTC1,De.ltc_2.value=O.state.rectAreaLTC2,De.pointLights.value=O.state.point,De.pointLightShadows.value=O.state.pointShadow,De.hemisphereLights.value=O.state.hemi,De.directionalShadowMap.value=O.state.directionalShadowMap,De.directionalShadowMatrix.value=O.state.directionalShadowMatrix,De.spotShadowMap.value=O.state.spotShadowMap,De.spotLightMatrix.value=O.state.spotLightMatrix,De.spotLightMap.value=O.state.spotLightMap,De.pointShadowMap.value=O.state.pointShadowMap,De.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ce,G.uniformsList=null,Ce}function Oa(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=er.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Fa(M,L){const z=Ue.get(M);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function ml(M,L,z,G,O){L.isScene!==!0&&(L=be),S.resetTextureUnits();const ce=L.fog,ge=G.isMeshStandardMaterial?L.environment:null,Se=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Yt,Ae=(G.isMeshStandardMaterial?F:v).get(G.envMap||ge),Oe=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ce=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!z.morphAttributes.position,it=!!z.morphAttributes.normal,Ct=!!z.morphAttributes.color;let dt=pn;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(dt=g.toneMapping);const jt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Je=jt!==void 0?jt.length:0,ze=Ue.get(G),Dr=p.state.lights;if(K===!0&&(le===!0||M!==x)){const It=M===x&&G.id===H;Ne.setState(G,M,It)}let tt=!1;G.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Dr.state.version||ze.outputColorSpace!==Se||O.isBatchedMesh&&ze.batching===!1||!O.isBatchedMesh&&ze.batching===!0||O.isInstancedMesh&&ze.instancing===!1||!O.isInstancedMesh&&ze.instancing===!0||O.isSkinnedMesh&&ze.skinning===!1||!O.isSkinnedMesh&&ze.skinning===!0||O.isInstancedMesh&&ze.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ze.instancingColor===!1&&O.instanceColor!==null||ze.envMap!==Ae||G.fog===!0&&ze.fog!==ce||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ne.numPlanes||ze.numIntersection!==Ne.numIntersection)||ze.vertexAlphas!==Oe||ze.vertexTangents!==Ce||ze.morphTargets!==De||ze.morphNormals!==it||ze.morphColors!==Ct||ze.toneMapping!==dt||Re.isWebGL2===!0&&ze.morphTargetsCount!==Je)&&(tt=!0):(tt=!0,ze.__version=G.version);let yn=ze.currentProgram;tt===!0&&(yn=Ri(G,L,O));let za=!1,di=!1,Lr=!1;const mt=yn.getUniforms(),Mn=ze.uniforms;if(pe.useProgram(yn.program)&&(za=!0,di=!0,Lr=!0),G.id!==H&&(H=G.id,di=!0),za||x!==M){mt.setValue(N,"projectionMatrix",M.projectionMatrix),mt.setValue(N,"viewMatrix",M.matrixWorldInverse);const It=mt.map.cameraPosition;It!==void 0&&It.setValue(N,Le.setFromMatrixPosition(M.matrixWorld)),Re.logarithmicDepthBuffer&&mt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&mt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,di=!0,Lr=!0)}if(O.isSkinnedMesh){mt.setOptional(N,O,"bindMatrix"),mt.setOptional(N,O,"bindMatrixInverse");const It=O.skeleton;It&&(Re.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),mt.setValue(N,"boneTexture",It.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(mt.setOptional(N,O,"batchingTexture"),mt.setValue(N,"batchingTexture",O._matricesTexture,S));const Ir=z.morphAttributes;if((Ir.position!==void 0||Ir.normal!==void 0||Ir.color!==void 0&&Re.isWebGL2===!0)&&Ge.update(O,z,yn),(di||ze.receiveShadow!==O.receiveShadow)&&(ze.receiveShadow=O.receiveShadow,mt.setValue(N,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Mn.envMap.value=Ae,Mn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),di&&(mt.setValue(N,"toneMappingExposure",g.toneMappingExposure),ze.needsLights&&gl(Mn,Lr),ce&&G.fog===!0&&se.refreshFogUniforms(Mn,ce),se.refreshMaterialUniforms(Mn,G,q,W,ve),er.upload(N,Oa(ze),Mn,S)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(er.upload(N,Oa(ze),Mn,S),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&mt.setValue(N,"center",O.center),mt.setValue(N,"modelViewMatrix",O.modelViewMatrix),mt.setValue(N,"normalMatrix",O.normalMatrix),mt.setValue(N,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const It=G.uniformsGroups;for(let Ur=0,vl=It.length;Ur<vl;Ur++)if(Re.isWebGL2){const Ba=It[Ur];We.update(Ba,yn),We.bind(Ba,yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yn}function gl(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function _l(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,L,z){Ue.get(M.texture).__webglTexture=L,Ue.get(M.depthTexture).__webglTexture=z;const G=Ue.get(M);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,L){const z=Ue.get(M);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,z=0){T=M,D=L,w=z;let G=!0,O=null,ce=!1,ge=!1;if(M){const Ae=Ue.get(M);Ae.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(N.FRAMEBUFFER,null),G=!1):Ae.__webglFramebuffer===void 0?S.setupRenderTarget(M):Ae.__hasExternalTextures&&S.rebindTextures(M,Ue.get(M.texture).__webglTexture,Ue.get(M.depthTexture).__webglTexture);const Oe=M.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ge=!0);const Ce=Ue.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ce[L])?O=Ce[L][z]:O=Ce[L],ce=!0):Re.isWebGL2&&M.samples>0&&S.useMultisampledRTT(M)===!1?O=Ue.get(M).__webglMultisampledFramebuffer:Array.isArray(Ce)?O=Ce[z]:O=Ce,E.copy(M.viewport),I.copy(M.scissor),Y=M.scissorTest}else E.copy(Q).multiplyScalar(q).floor(),I.copy(te).multiplyScalar(q).floor(),Y=de;if(pe.bindFramebuffer(N.FRAMEBUFFER,O)&&Re.drawBuffers&&G&&pe.drawBuffers(M,O),pe.viewport(E),pe.scissor(I),pe.setScissorTest(Y),ce){const Ae=Ue.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ae.__webglTexture,z)}else if(ge){const Ae=Ue.get(M.texture),Oe=L||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.__webglTexture,z||0,Oe)}H=-1},this.readRenderTargetPixels=function(M,L,z,G,O,ce,ge){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){pe.bindFramebuffer(N.FRAMEBUFFER,Se);try{const Ae=M.texture,Oe=Ae.format,Ce=Ae.type;if(Oe!==xt&&ue.convert(Oe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Ce===rn&&(ye.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ce!==Xt&&ue.convert(Ce)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ce===bt&&(Re.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-G&&z>=0&&z<=M.height-O&&N.readPixels(L,z,G,O,ue.convert(Oe),ue.convert(Ce),ce)}finally{const Ae=T!==null?Ue.get(T).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(M,L,z=0){const G=Math.pow(2,-z),O=Math.floor(L.image.width*G),ce=Math.floor(L.image.height*G);S.setTexture2D(L,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,M.x,M.y,O,ce),pe.unbindTexture()},this.copyTextureToTexture=function(M,L,z,G=0){const O=L.image.width,ce=L.image.height,ge=ue.convert(z.format),Se=ue.convert(z.type);S.setTexture2D(z,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment),L.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,G,M.x,M.y,O,ce,ge,Se,L.image.data):L.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,G,M.x,M.y,L.mipmaps[0].width,L.mipmaps[0].height,ge,L.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,G,M.x,M.y,ge,Se,L.image),G===0&&z.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(M,L,z,G,O=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=M.max.x-M.min.x+1,ge=M.max.y-M.min.y+1,Se=M.max.z-M.min.z+1,Ae=ue.convert(G.format),Oe=ue.convert(G.type);let Ce;if(G.isData3DTexture)S.setTexture3D(G,0),Ce=N.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)S.setTexture2DArray(G,0),Ce=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);const De=N.getParameter(N.UNPACK_ROW_LENGTH),it=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ct=N.getParameter(N.UNPACK_SKIP_PIXELS),dt=N.getParameter(N.UNPACK_SKIP_ROWS),jt=N.getParameter(N.UNPACK_SKIP_IMAGES),Je=z.isCompressedTexture?z.mipmaps[O]:z.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Je.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,M.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,M.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,M.min.z),z.isDataTexture||z.isData3DTexture?N.texSubImage3D(Ce,O,L.x,L.y,L.z,ce,ge,Se,Ae,Oe,Je.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ce,O,L.x,L.y,L.z,ce,ge,Se,Ae,Je.data)):N.texSubImage3D(Ce,O,L.x,L.y,L.z,ce,ge,Se,Ae,Oe,Je),N.pixelStorei(N.UNPACK_ROW_LENGTH,De),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ct),N.pixelStorei(N.UNPACK_SKIP_ROWS,dt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,jt),O===0&&G.generateMipmaps&&N.generateMipmap(Ce),pe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?S.setTextureCube(M,0):M.isData3DTexture?S.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?S.setTexture2DArray(M,0):S.setTexture2D(M,0),pe.unbindTexture()},this.resetState=function(){D=0,w=0,T=null,pe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wa?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===Cr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ut?Ln:Ss}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ln?ut:Yt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Pp extends Ws{}Pp.prototype.isWebGL1Renderer=!0;class Ji extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Sa extends Tt{constructor(e=null,t=1,i=1,r,a,s,o,l,c=$e,d=$e,u,f){super(null,s,o,l,c,d,r,a,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dp extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Es,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lp extends Dp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const sr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Ip{constructor(e,t,i){const r=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(d){o++,a===!1&&r.onStart!==void 0&&r.onStart(d,s,o),a=!0},this.itemEnd=function(d){s++,r.onProgress!==void 0&&r.onProgress(d,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(d))return _}return null}}}const Up=new Ip;class Ai{constructor(e){this.manager=e!==void 0?e:Up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ai.DEFAULT_MATERIAL_NAME="__DEFAULT";const en={};class Np extends Error{constructor(e,t){super(e),this.response=t}}class Xs extends Ai{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=sr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(en[e]!==void 0){en[e].push({onLoad:t,onProgress:i,onError:r});return}en[e]=[],en[e].push({onLoad:t,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=en[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,_=m!==0;let y=0;const p=new ReadableStream({start(h){b();function b(){u.read().then(({done:g,value:A})=>{if(g)h.close();else{y+=A.byteLength;const D=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:m});for(let w=0,T=d.length;w<T;w++){const H=d[w];H.onProgress&&H.onProgress(D)}h.enqueue(A),b()}})}}});return new Response(p)}else throw new Np(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{sr.add(e,c);const d=en[e];delete en[e];for(let u=0,f=d.length;u<f;u++){const m=d[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const d=en[e];if(d===void 0)throw this.manager.itemError(e),c;delete en[e];for(let u=0,f=d.length;u<f;u++){const m=d[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Op extends Ai{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=sr.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=xi("img");function l(){d(),sr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(u){d(),r&&r(u),a.manager.itemError(e),a.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class Fp extends Ai{constructor(e){super(e)}load(e,t,i,r){const a=this,s=new Sa,o=new Xs(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(a.withCredentials),o.load(e,function(l){let c;try{c=a.parse(l)}catch(d){if(r!==void 0)r(d);else{console.error(d);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:Lt,s.wrapT=c.wrapT!==void 0?c.wrapT:Lt,s.magFilter=c.magFilter!==void 0?c.magFilter:ft,s.minFilter=c.minFilter!==void 0?c.minFilter:ft,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?s.colorSpace=c.colorSpace:c.encoding!==void 0&&(s.encoding=c.encoding),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=ri),c.mipmapCount===1&&(s.minFilter=ft),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},i,r),s}}class zp extends Ai{constructor(e){super(e)}load(e,t,i,r){const a=new Tt,s=new Op(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}}class Bp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ss(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ss();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ss(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ta);j.pathtracing_uniforms_and_defines=`
uniform sampler2D tPreviousTexture;
uniform sampler2D tBlueNoiseTexture;
uniform mat4 uCameraMatrix;
uniform vec2 uResolution;
uniform vec2 uRandomVec2;
uniform float uEPS_intersect;
uniform float uTime;
uniform float uSampleCounter;
uniform float uFrameCounter;
uniform float uULen;
uniform float uVLen;
uniform float uApertureSize;
uniform float uFocusDistance;
uniform float uPreviousSampleCount;
uniform bool uCameraIsMoving;
uniform bool uUseOrthographicCamera;

in vec2 vUv;

#define PI               3.14159265358979323
#define TWO_PI           6.28318530717958648
#define FOUR_PI          12.5663706143591729
#define ONE_OVER_PI      0.31830988618379067
#define ONE_OVER_TWO_PI  0.15915494309
#define ONE_OVER_FOUR_PI 0.07957747154594767
#define PI_OVER_TWO      1.57079632679489662
#define ONE_OVER_THREE   0.33333333333333333
#define E                2.71828182845904524
#define INFINITY         1000000.0
#define QUADRIC_EPSILON  0.00001
#define SPOT_LIGHT -2
#define POINT_LIGHT -1
#define LIGHT 0
#define DIFF 1
#define REFR 2
#define SPEC 3
#define COAT 4
#define CARCOAT 5	
#define TRANSLUCENT 6
#define SPECSUB 7
#define CHECK 8
#define WATER 9
#define PBR_MATERIAL 10
#define WOOD 11
#define SEAFLOOR 12
#define TERRAIN 13
#define CLOTH 14
#define LIGHTWOOD 15
#define DARKWOOD 16
#define PAINTING 17
#define METALCOAT 18
#define TRUE 1
#define FALSE 0
#define ONE_OVER_MAX_INT 1.0 / float(0xffffffffU)
`;j.pathtracing_skymodel_defines=`
#define TURBIDITY 1.0
#define RAYLEIGH_COEFFICIENT 3.0
#define MIE_COEFFICIENT 0.03
#define MIE_DIRECTIONAL_G 0.76
// constants for atmospheric scattering
#define THREE_OVER_SIXTEENPI 0.05968310365946075
#define ONE_OVER_FOURPI 0.07957747154594767
// wavelength of used primaries, according to preetham
#define LAMBDA vec3( 680E-9, 550E-9, 450E-9 )
#define TOTAL_RAYLEIGH vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 )
// mie stuff
// K coefficient for the primaries
#define K vec3(0.686, 0.678, 0.666)
#define MIE_V 4.0
#define MIE_CONST vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 )
// optical length at zenith for molecules
#define RAYLEIGH_ZENITH_LENGTH 8400.0
#define MIE_ZENITH_LENGTH 1250.0
#define UP_VECTOR vec3(0.0, 1.0, 0.0)
#define SUN_POWER 1000.0
// 66 arc seconds -> degrees, and the cosine of that
#define SUN_ANGULAR_DIAMETER_COS 0.9998 //0.9999566769
#define CUTOFF_ANGLE 1.6110731556870734
#define STEEPNESS 1.5
`;j.pathtracing_plane_intersect=`
//-----------------------------------------------------------------------
float PlaneIntersect( vec4 pla, vec3 rayOrigin, vec3 rayDirection )
//-----------------------------------------------------------------------
{
	vec3 n = pla.xyz;
	float denom = dot(n, rayDirection);
	
        vec3 pOrO = (pla.w * n) - rayOrigin; 
        float result = dot(pOrO, n) / denom;
	return (result > 0.0) ? result : INFINITY;
}
`;j.pathtracing_single_sided_plane_intersect=`
//----------------------------------------------------------------------------
float SingleSidedPlaneIntersect( vec4 pla, vec3 rayOrigin, vec3 rayDirection )
//----------------------------------------------------------------------------
{
	vec3 n = pla.xyz;
	float denom = dot(n, rayDirection);
	if (denom > 0.0) return INFINITY;
	
        vec3 pOrO = (pla.w * n) - rayOrigin; 
        float result = dot(pOrO, n) / denom;
	return (result > 0.0) ? result : INFINITY;
}
`;j.pathtracing_disk_intersect=`
//-------------------------------------------------------------------------------------------
float DiskIntersect( float radius, vec3 pos, vec3 normal, vec3 rayOrigin, vec3 rayDirection )
//-------------------------------------------------------------------------------------------
{
	vec3 pOrO = pos - rayOrigin;
	float denom = dot(-normal, rayDirection);
	// use the following for one-sided disk
	//if (denom <= 0.0) return INFINITY;
	
        float result = dot(pOrO, -normal) / denom;
	if (result < 0.0) return INFINITY;
        vec3 intersectPos = rayOrigin + rayDirection * result;
	vec3 v = intersectPos - pos;
	float d2 = dot(v,v);
	float radiusSq = radius * radius;
	if (d2 > radiusSq)
		return INFINITY;
		
	return result;
}
`;j.pathtracing_rectangle_intersect=`
//----------------------------------------------------------------------------------------------------------------
float RectangleIntersect( vec3 pos, vec3 normal, float radiusU, float radiusV, vec3 rayOrigin, vec3 rayDirection )
//----------------------------------------------------------------------------------------------------------------
{
	float dt = dot(-normal, rayDirection);
	// use the following for one-sided rectangle
	if (dt < 0.0) return INFINITY;

	float t = dot(-normal, pos - rayOrigin) / dt;
	if (t < 0.0) return INFINITY;
	
	vec3 hit = rayOrigin + rayDirection * t;
	vec3 vi = hit - pos;
	vec3 U = normalize( cross( abs(normal.y) < 0.9 ? vec3(0, 1, 0) : vec3(0, 0, 1), normal ) );
	vec3 V = cross(normal, U);
	return (abs(dot(U, vi)) > radiusU || abs(dot(V, vi)) > radiusV) ? INFINITY : t;
}
`;j.pathtracing_slab_intersect=`
//---------------------------------------------------------------------------------------------
float SlabIntersect( float radius, vec3 normal, vec3 rayOrigin, vec3 rayDirection, out vec3 n )
//---------------------------------------------------------------------------------------------
{
	n = dot(normal, rayDirection) < 0.0 ? normal : -normal;
	float rad = dot(rayOrigin, n) > radius ? radius : -radius; 
	float denom = dot(n, rayDirection);
	vec3 pOrO = (rad * n) - rayOrigin; 
	float t = dot(pOrO, n) / denom;
	return t > 0.0 ? t : INFINITY;
}
`;j.pathtracing_sphere_intersect=`
/* int solveQuadratic(float A, float B, float C, out float t0, out float t1)
{
	float discrim = B * B - 4.0 * A * C;
    
	if (discrim < 0.0)
        	return FALSE;
    
	float rootDiscrim = sqrt(discrim);
	float Q = (B > 0.0) ? -0.5 * (B + rootDiscrim) : -0.5 * (B - rootDiscrim); 
	// float t_0 = Q / A; 
	// float t_1 = C / Q;
	// t0 = min( t_0, t_1 );
	// t1 = max( t_0, t_1 );
	t1 = Q / A; 
	t0 = C / Q;
	
	return TRUE;
} */
// optimized algorithm for solving quadratic equations developed by Dr. Po-Shen Loh -> https://youtu.be/XKBX0r3J-9Y
// Adapted to root finding (ray t0/t1) for all quadric shapes (sphere, ellipsoid, cylinder, cone, etc.) by Erich Loftis
void solveQuadratic(float A, float B, float C, out float t0, out float t1)
{
	float invA = 1.0 / A;
	B *= invA;
	C *= invA;
	float neg_halfB = -B * 0.5;
	float u2 = neg_halfB * neg_halfB - C;
	float u = u2 < 0.0 ? neg_halfB = 0.0 : sqrt(u2);
	t0 = neg_halfB - u;
	t1 = neg_halfB + u;
}

//-----------------------------------------------------------------------------
float SphereIntersect( float rad, vec3 pos, vec3 rayOrigin, vec3 rayDirection )
//-----------------------------------------------------------------------------
{
	float t0, t1;
	vec3 L = rayOrigin - pos;
	float a = dot( rayDirection, rayDirection );
	float b = 2.0 * dot( rayDirection, L );
	float c = dot( L, L ) - (rad * rad);
	solveQuadratic(a, b, c, t0, t1);
	return t0 > 0.0 ? t0 : t1 > 0.0 ? t1 : INFINITY;
}
`;j.pathtracing_unit_bounding_sphere_intersect=`

float UnitBoundingSphereIntersect( vec3 ro, vec3 rd, out int insideSphere )
{
	float t0, t1;
	float a = dot(rd, rd);
	float b = 2.0 * dot(rd, ro);
	float c = dot(ro, ro) - (1.01 * 1.01); // - (rad * rad) = - (1.0 * 1.0) = - 1.0 
	solveQuadratic(a, b, c, t0, t1);
	if (t0 > 0.0)
	{
		insideSphere = FALSE;
		return t0;
	}
	if (t1 > 0.0)
	{
		insideSphere = TRUE;
		return t1;
	}

	return INFINITY;
}
`;j.pathtracing_unit_sphere_intersect=`

float UnitSphereIntersect( vec3 ro, vec3 rd, out vec3 n )
{
	vec3 hitPoint;
	float t0, t1;
	float a = dot(rd, rd);
	float b = 2.0 * dot(rd, ro);
	float c = dot(ro, ro) - 1.0;// radius * radius = 1.0 * 1.0 = 1.0 
	solveQuadratic(a, b, c, t0, t1);
	
	// first, try t0
	if (t0 > 0.0)
	{
		hitPoint = ro + rd * t0;
		n = hitPoint;
		return t0;
	}
	// if t0 was invalid, try t1
	if (t1 > 0.0)
	{
		hitPoint = ro + rd * t1;
		n = hitPoint;
		return t1;
	}

	return 0.0;
}
`;j.pathtracing_unit_cylinder_intersect=`

float UnitCylinderIntersect( vec3 ro, vec3 rd, out vec3 n )
{
	vec3 hitPoint;
	float t0, t1;
	float a = rd.x * rd.x + rd.z * rd.z;
	float b = 2.0 * (rd.x * ro.x + rd.z * ro.z);
	float c = (ro.x * ro.x + ro.z * ro.z) - 0.99;// 0.99 prevents clipping at cylinder walls 
	solveQuadratic(a, b, c, t0, t1);
	
	// first, try t0
	hitPoint = ro + rd * t0;
	if (t0 > 0.0 && abs(hitPoint.y) <= 1.0)
	{
		n = vec3(hitPoint.x, 0.0, hitPoint.z);
		return t0;
	}
	// if t0 was invalid, try t1
	hitPoint = ro + rd * t1;
	if (t1 > 0.0 && abs(hitPoint.y) <= 1.0)
	{
		n = vec3(hitPoint.x, 0.0, hitPoint.z);
		return t1;
	}

	return 0.0;
}
`;j.pathtracing_unit_cone_intersect=`

float UnitConeIntersect( vec3 ro, vec3 rd, out vec3 n )
{
	// the '(ro.y - h)' parts below truncate the top half of the double-cone, leaving a single cone with apex at top
	vec3 hitPoint;
	float t0, t1;
	float h = 1.0;	      // 0.25 makes the circular base of cone end up as radius of 1, unit length
	float a = rd.x * rd.x - (0.25 * rd.y * rd.y) + rd.z * rd.z;
	float b = 2.0 * (rd.x * ro.x - (0.25 * rd.y * (ro.y - h)) + rd.z * ro.z);
	float c = ro.x * ro.x - (0.25 * (ro.y - h) * (ro.y - h)) + ro.z * ro.z;
	solveQuadratic(a, b, c, t0, t1);
	
	// first, try t0
	hitPoint = ro + rd * t0;
	if (t0 > 0.0 && abs(hitPoint.y) <= 1.0)
	{
		n = vec3(hitPoint.x, (h - hitPoint.y) * 0.25, hitPoint.z);
		return t0;
	}
	// if t0 was invalid, try t1
	hitPoint = ro + rd * t1;
	if (t1 > 0.0 && abs(hitPoint.y) <= 1.0)
	{
		n = vec3(hitPoint.x, (h - hitPoint.y) * 0.25, hitPoint.z);
		return t1;
	}

	return 0.0;
}
`;j.pathtracing_unit_paraboloid_intersect=`

float UnitParaboloidIntersect( vec3 ro, vec3 rd, out vec3 n )
{
	vec3 hitPoint;
	float t0, t1;
	float k = 0.5;
	float a = rd.x * rd.x + rd.z * rd.z;
    	float b = 2.0 * (rd.x * ro.x + rd.z * ro.z) + k * rd.y;
    	float c = ro.x * ro.x + (k * (ro.y - 1.0)) + ro.z * ro.z; 
	solveQuadratic(a, b, c, t0, t1);
	
	// first, try t0
	hitPoint = ro + rd * t0;
	if (t0 > 0.0 && abs(hitPoint.y) <= 1.0)
	{
		n = vec3(2.0 * hitPoint.x, k, 2.0 * hitPoint.z);
		return t0;
	}
	// if t0 was invalid, try t1
	hitPoint = ro + rd * t1;
	if (t1 > 0.0 && abs(hitPoint.y) <= 1.0)
	{
		n = vec3(2.0 * hitPoint.x, k, 2.0 * hitPoint.z);
		return t1;
	}

	return 0.0;
}
`;j.pathtracing_unit_box_intersect=`

float UnitBoxIntersect( vec3 ro, vec3 rd, out vec3 n )
{
	vec3 invDir = 1.0 / rd;
	vec3 near = (vec3(-1) - ro) * invDir; // unit radius box: vec3(-1,-1,-1) min corner
	vec3 far  = (vec3( 1) - ro) * invDir;  // unit radius box: vec3(+1,+1,+1) max corner
	
	vec3 tmin = min(near, far);
	vec3 tmax = max(near, far);
	float t0 = max( max(tmin.x, tmin.y), tmin.z);
	float t1 = min( min(tmax.x, tmax.y), tmax.z);

	if (t0 > t1) // test for invalid intersection
		return 0.0;

	if (t0 > 0.0)
	{
		n = -sign(rd) * step(tmin.yzx, tmin) * step(tmin.zxy, tmin);
		return t0;
	}
	if (t1 > 0.0)
	{
		n = -sign(rd) * step(tmax, tmax.yzx) * step(tmax, tmax.zxy);
		return t1;
	}
	
	return 0.0;
}
`;j.pathtracing_quadric_intersect=`

/*
The Quadric shape Parameters (A-J) are stored in a 4x4 matrix (a 'mat4' in GLSL).
Following the technique found in the 2004 paper, "Ray Tracing Arbitrary Objects on the GPU" by Wood, et al.,
the parameter layout is:
mat4 shape = mat4(A, B, C, D,
		  B, E, F, G,
		  C, F, H, I,
		  D, G, I, J);
*/

float QuadricIntersect(mat4 shape, vec4 ro, vec4 rd) 
{
	vec4 rda = shape * rd;
    	vec4 roa = shape * ro;
	vec3 hitPoint;
    
    	// quadratic coefficients
    	float a = dot(rd, rda);
    	float b = dot(ro, rda) + dot(rd, roa);
    	float c = dot(ro, roa);
	
	float t0, t1;
	solveQuadratic(a, b, c, t0, t1);

	// restrict valid intersections to be inside unit bounding box vec3(-1,-1,-1) to vec3(+1,+1,+1)
	hitPoint = ro.xyz + rd.xyz * t0;
	if ( t0 > 0.0 && all(greaterThanEqual(hitPoint, vec3(-1.0 - QUADRIC_EPSILON))) && all(lessThanEqual(hitPoint, vec3(1.0 + QUADRIC_EPSILON))) )
		return t0;
		
	hitPoint = ro.xyz + rd.xyz * t1;
	if ( t1 > 0.0 && all(greaterThanEqual(hitPoint, vec3(-1.0 - QUADRIC_EPSILON))) && all(lessThanEqual(hitPoint, vec3(1.0 + QUADRIC_EPSILON))) )
		return t1;
	
	return INFINITY;
}

`;j.pathtracing_sphere_csg_intersect=`
//------------------------------------------------------------------------------------------------------------
void Sphere_CSG_Intersect( vec3 ro, vec3 rd, out float t0, out float t1, out vec3 n0, out vec3 n1 )
//------------------------------------------------------------------------------------------------------------
{
	vec3 hit;
	// implicit equation of a unit (radius of 1) sphere:
	// x^2 + y^2 + z^2 - 1 = 0
	float a = dot(rd, rd);
	float b = 2.0 * dot(rd, ro);
	float c = dot(ro, ro) - 1.0;
	solveQuadratic(a, b, c, t0, t1);
	hit = ro + rd * t0;
	n0 = vec3(2.0 * hit.x, 2.0 * hit.y, 2.0 * hit.z);
	hit = ro + rd * t1;
	n1 = vec3(2.0 * hit.x, 2.0 * hit.y, 2.0 * hit.z);
}
`;j.pathtracing_cylinder_csg_intersect=`
//------------------------------------------------------------------------------------------------------------
void Cylinder_CSG_Intersect( vec3 ro, vec3 rd, out float t0, out float t1, out vec3 n0, out vec3 n1 )
//------------------------------------------------------------------------------------------------------------
{
	vec3 hit;
	float d0, d1;
	d0 = d1 = 0.0;
	vec3 dn0, dn1;
	// implicit equation of a unit (radius of 1) cylinder, extending infinitely in the +Y and -Y directions:
	// x^2 + z^2 - 1 = 0
	float a = (rd.x * rd.x + rd.z * rd.z);
    	float b = 2.0 * (rd.x * ro.x + rd.z * ro.z);
    	float c = (ro.x * ro.x + ro.z * ro.z) - 1.0;
	solveQuadratic(a, b, c, t0, t1);
	hit = ro + rd * t0;
	t0 = (abs(hit.y) > 1.0) ? 0.0 : t0;
	n0 = vec3(2.0 * hit.x, 0.0, 2.0 * hit.z);
	hit = ro + rd * t1;
	t1 = (abs(hit.y) > 1.0) ? 0.0 : t1;
	n1 = vec3(2.0 * hit.x, 0.0, 2.0 * hit.z);
	// intersect top and bottom unit-radius disk caps
	if (rd.y < 0.0)
	{
		d0 = (ro.y - 1.0) / -rd.y;
		dn0 = vec3(0,1,0);
		d1 = (ro.y + 1.0) / -rd.y;
		dn1 = vec3(0,-1,0);
	}
	else
	{
		d1 = (ro.y - 1.0) / -rd.y;
		dn1 = vec3(0,1,0);
		d0 = (ro.y + 1.0) / -rd.y;
		dn0 = vec3(0,-1,0);
	}
	
	hit = ro + rd * d0;
	if (hit.x * hit.x + hit.z * hit.z <= 1.0) // unit radius disk
	{
		t0 = d0;
		n0 = dn0;
	}
	hit = ro + rd * d1;
	if (hit.x * hit.x + hit.z * hit.z <= 1.0) // unit radius disk
	{
		t1 = d1;
		n1 = dn1;
	}
}
`;j.pathtracing_cone_csg_intersect=`
//------------------------------------------------------------------------------------------------------------
void Cone_CSG_Intersect( float k, vec3 ro, vec3 rd, out float t0, out float t1, out vec3 n0, out vec3 n1 )
//------------------------------------------------------------------------------------------------------------
{
	vec3 hit;
	float d0, d1, dr0, dr1;
	d0 = d1 = dr0 = dr1 = 0.0;
	vec3 dn0, dn1;
	// implicit equation of a double-cone extending infinitely in +Y and -Y directions
	// x^2 + z^2 - y^2 = 0
	// code below cuts off top cone, leaving bottom cone with apex at the top (+1.0), and circular base (radius of 1) at the bottom (-1.0)
	
	// valid range for k: 0.01 to 1.0 (1.0 being the default for cone with a sharp, pointed apex)
	k = clamp(k, 0.01, 1.0);
	
	float j = 1.0 / k;
	float h = j * 2.0 - 1.0;		   // (k * 0.25) makes the normal cone's bottom circular base have a unit radius of 1.0
	float a = j * rd.x * rd.x + j * rd.z * rd.z - (k * 0.25) * rd.y * rd.y;
    	float b = 2.0 * (j * rd.x * ro.x + j * rd.z * ro.z - (k * 0.25) * rd.y * (ro.y - h));
    	float c = j * ro.x * ro.x + j * ro.z * ro.z - (k * 0.25) * (ro.y - h) * (ro.y - h);
	solveQuadratic(a, b, c, t0, t1);
	
	hit = ro + rd * t0;
	t0 = (abs(hit.y) > 1.0) ? 0.0 : t0; // invalidate t0 if it's outside truncated cone's height bounds
	n0 = vec3(2.0 * hit.x * j, 2.0 * (h - hit.y) * (k * 0.25), 2.0 * hit.z * j);
	
	hit = ro + rd * t1;
	t1 = (abs(hit.y) > 1.0) ? 0.0 : t1; // invalidate t1 if it's outside truncated cone's height bounds
	n1 = vec3(2.0 * hit.x * j, 2.0 * (h - hit.y) * (k * 0.25), 2.0 * hit.z * j);
	// since the infinite double-cone is artificially cut off, if t0 intersection was invalidated, try t1
	if (t0 == 0.0)
	{
		t0 = t1;
		n0 = n1;
	}
	// intersect top and bottom disk caps
	if (rd.y < 0.0)
	{
		d0 = (ro.y - 1.0) / -rd.y;
		dn0 = vec3(0,1,0);
		d1 = (ro.y + 1.0) / -rd.y;
		dn1 = vec3(0,-1,0);
		dr0 = (1.0 - k) * (1.0 - k); // top cap's size is relative to k
		dr1 = 1.0; // bottom cap is unit radius
	}
	else
	{
		d1 = (ro.y - 1.0) / -rd.y;
		dn1 = vec3(0,1,0);
		d0 = (ro.y + 1.0) / -rd.y;
		dn0 = vec3(0,-1,0);
		dr0 = 1.0; // bottom cap is unit radius
		dr1 = (1.0 - k) * (1.0 - k);// top cap's size is relative to k
	}
	hit = ro + rd * d0;
	if (hit.x * hit.x + hit.z * hit.z <= dr0)
	{
		t1 = t0;
		n1 = n0;
		t0 = d0;
		n0 = dn0;
	}
	hit = ro + rd * d1;
	if (hit.x * hit.x + hit.z * hit.z <= dr1)
	{
		t1 = d1;
		n1 = dn1;
	}
}
`;j.pathtracing_conicalprism_csg_intersect=`
//------------------------------------------------------------------------------------------------------------
void ConicalPrism_CSG_Intersect( float k, vec3 ro, vec3 rd, out float t0, out float t1, out vec3 n0, out vec3 n1 )
//------------------------------------------------------------------------------------------------------------
{
	vec3 hit;
	float d0, d1, dr0, dr1;
	d0 = d1 = dr0 = dr1 = 0.0;
	vec3 dn0, dn1;
	// start with implicit equation of a double-cone extending infinitely in +Y and -Y directions
	// x^2 + z^2 - y^2 = 0
	// To obtain a conical prism along the Z axis, the Z component is simply removed, leaving:
	// x^2 - y^2 = 0
	// code below cuts off top cone of the double-cone, leaving bottom cone with apex at the top (+1.0), and base (radius of 1) at the bottom (-1.0)
	
	// valid range for k: 0.01 to 1.0 (1.0 being the default for cone with a sharp, pointed apex)
	k = clamp(k, 0.01, 1.0);
	
	float j = 1.0 / k;
	float h = j * 2.0 - 1.0;		   // (k * 0.25) makes the normal cone's bottom circular base have a unit radius of 1.0
	float a = j * rd.x * rd.x - (k * 0.25) * rd.y * rd.y;
    	float b = 2.0 * (j * rd.x * ro.x - (k * 0.25) * rd.y * (ro.y - h));
    	float c = j * ro.x * ro.x - (k * 0.25) * (ro.y - h) * (ro.y - h);
	solveQuadratic(a, b, c, t0, t1);
	hit = ro + rd * t0;
	t0 = (abs(hit.y) > 1.0 || abs(hit.z) > 1.0) ? 0.0 : t0; // invalidate t0 if it's outside unit radius bounds
	n0 = vec3(2.0 * hit.x * j, 2.0 * (hit.y - h) * -(k * 0.25), 0.0);
	
	hit = ro + rd * t1;
	t1 = (abs(hit.y) > 1.0 || abs(hit.z) > 1.0) ? 0.0 : t1; // invalidate t1 if it's outside unit radius bounds
	n1 = vec3(2.0 * hit.x * j, 2.0 * (hit.y - h) * -(k * 0.25), 0.0);
	
	// since the infinite double-cone shape is artificially cut off at the top and bottom,
	// if t0 intersection was invalidated above, try t1
	if (t0 == 0.0)
	{
		t0 = t1;
		n0 = n1;
	}
	// intersect top and bottom base rectangles
	if (rd.y < 0.0)
	{
		d0 = (ro.y - 1.0) / -rd.y;
		dn0 = vec3(0,1,0);
		d1 = (ro.y + 1.0) / -rd.y;
		dn1 = vec3(0,-1,0);
		dr0 = 1.0 - (k); // top cap's size is relative to k
		dr1 = 1.0; // bottom cap is unit radius
	}
	else
	{
		d1 = (ro.y - 1.0) / -rd.y;
		dn1 = vec3(0,1,0);
		d0 = (ro.y + 1.0) / -rd.y;
		dn0 = vec3(0,-1,0);
		dr0 = 1.0; // bottom cap is unit radius
		dr1 = 1.0 - (k);// top cap's size is relative to k
	}
	hit = ro + rd * d0;
	if (abs(hit.x) <= dr0 && abs(hit.z) <= 1.0)
	{
		t1 = t0;
		n1 = n0;
		t0 = d0;
		n0 = dn0;
	}
	hit = ro + rd * d1;
	if (abs(hit.x) <= dr1 && abs(hit.z) <= 1.0)
	{
		t1 = d1;
		n1 = dn1;
	}
	// intersect conical-shaped front and back wall pieces
	if (rd.z < 0.0)
	{
		d0 = (ro.z - 1.0) / -rd.z;
		dn0 = vec3(0,0,1);
		d1 = (ro.z + 1.0) / -rd.z;
		dn1 = vec3(0,0,-1);
	}
	else
	{
		d1 = (ro.z - 1.0) / -rd.z;
		dn1 = vec3(0,0,1);
		d0 = (ro.z + 1.0) / -rd.z;
		dn0 = vec3(0,0,-1);
	}
	
	hit = ro + rd * d0;
	if (abs(hit.x) <= 1.0 && abs(hit.y) <= 1.0 && (j * hit.x * hit.x - k * 0.25 * (hit.y - h) * (hit.y - h)) <= 0.0) // y is a quadratic (conical) function of x
	{
		if (t0 != 0.0)
		{
			t1 = t0;
			n1 = n0;
		}
		
		t0 = d0;
		n0 = dn0;
	}
	hit = ro + rd * d1;
	if (abs(hit.x) <= 1.0 && abs(hit.y) <= 1.0 && (j * hit.x * hit.x - k * 0.25 * (hit.y - h) * (hit.y - h)) <= 0.0) // y is a quadratic (conical) function of x
	{
		t1 = d1;
		n1 = dn1;
	}
	
}
`;j.pathtracing_paraboloid_csg_intersect=`
//------------------------------------------------------------------------------------------------------------
void Paraboloid_CSG_Intersect( vec3 ro, vec3 rd, out float t0, out float t1, out vec3 n0, out vec3 n1 )
//------------------------------------------------------------------------------------------------------------
{
	vec3 hit;
	float d = 0.0;
	vec3 dn;
	// implicit equation of a paraboloid (upside down rounded-v shape extending infinitely downward in the -Y direction):
	// x^2 + z^2 + y = 0
	// code below centers the paraboloid so that its rounded apex is at the top (+1.0) and 
	//   its circular base is of unit radius (1) and is located at the bottom (-1.0) where the shape is truncated 
	
	float k = 0.5;
	float a = rd.x * rd.x + rd.z * rd.z;
    	float b = 2.0 * (rd.x * ro.x + rd.z * ro.z) + k * rd.y;
    	float c = ro.x * ro.x + ro.z * ro.z + k * (ro.y - 1.0);
	solveQuadratic(a, b, c, t0, t1);
	hit = ro + rd * t0;
	t0 = (abs(hit.y) > 1.0) ? 0.0 : t0; // invalidate t0 if it's outside unit radius bounds
	n0 = vec3(2.0 * hit.x, 1.0 * k, 2.0 * hit.z);
	hit = ro + rd * t1;
	t1 = (abs(hit.y) > 1.0) ? 0.0 : t1; // invalidate t1 if it's outside unit radius bounds
	n1 = vec3(2.0 * hit.x, 1.0 * k, 2.0 * hit.z);
	// since the infinite paraboloid is artificially cut off at the bottom,
	// if t0 intersection was invalidated, try t1
	if (t0 == 0.0)
	{
		t0 = t1;
		n0 = n1;
	}
	
	// now intersect unit-radius disk located at bottom base opening of unit paraboloid shape
	d = (ro.y + 1.0) / -rd.y;
	hit = ro + rd * d;
	if (hit.x * hit.x + hit.z * hit.z <= 1.0) // disk with unit radius
	{
		if (rd.y < 0.0)
		{
			t1 = d;
			n1 = vec3(0,-1,0);
		}
		else
		{
			t1 = t0;
			n1 = n0;
			t0 = d;
			n0 = vec3(0,-1,0);
		}
	}
}
`;j.pathtracing_parabolicprism_csg_intersect=`
//------------------------------------------------------------------------------------------------------------
void ParabolicPrism_CSG_Intersect( vec3 ro, vec3 rd, out float t0, out float t1, out vec3 n0, out vec3 n1 )
//------------------------------------------------------------------------------------------------------------
{
	vec3 hit;
	float d, d0, d1;
	d = d0 = d1 = 0.0;
	vec3 dn, dn0, dn1;
	// start with implicit equation of a paraboloid (upside down rounded-v shape extending infinitely downward in the -Y direction):
	// x^2 + z^2 + y = 0
	// To obtain a parabolic prism along the Z axis, the Z component is simply removed, leaving:
	// x^2 + y = 0
	// code below centers the parabolic prism so that its rounded apex is at the top (+1.0) and 
	//   its square base is of unit radius (1) and is located at the bottom (-1.0) where the infinite parabola shape is truncated also
	
	float k = 0.5; // k:0.5 narrows the parabola to ensure that when the lower portion of the parabola reaches the cut-off at the base, it is 1 unit wide
	float a = rd.x * rd.x;
    	float b = 2.0 * (rd.x * ro.x) + k * rd.y;
    	float c = ro.x * ro.x + k * (ro.y - 1.0);
	solveQuadratic(a, b, c, t0, t1);
	hit = ro + rd * t0;
	t0 = (hit.y < -1.0 || abs(hit.z) > 1.0) ? 0.0 : t0; // invalidate t0 if it's outside unit radius bounds
	n0 = vec3(2.0 * hit.x, 1.0 * k, 0.0);
	
	hit = ro + rd * t1;
	t1 = (hit.y < -1.0 || abs(hit.z) > 1.0) ? 0.0 : t1; // invalidate t1 if it's outside unit radius bounds
	n1 = vec3(2.0 * hit.x, 1.0 * k, 0.0);
	
	// since the infinite parabolic shape is artificially cut off at the bottom,
	// if t0 intersection was invalidated above, try t1
	if (t0 == 0.0)
	{
		t0 = t1;
		n0 = n1;
	}
	
	// intersect unit-radius square located at bottom opening of unit paraboloid shape
	d = (ro.y + 1.0) / -rd.y;
	hit = ro + rd * d;
	if (abs(hit.x) <= 1.0 && abs(hit.z) <= 1.0) // square with unit radius
	{
		if (rd.y < 0.0)
		{
			t1 = d;
			n1 = vec3(0,-1,0);
		}
		else
		{
			t1 = t0;
			n1 = n0;
			t0 = d;
			n0 = vec3(0,-1,0);
		}
	}
	// intersect parabola-shaped front and back wall pieces
	if (rd.z < 0.0)
	{
		d0 = (ro.z - 1.0) / -rd.z;
		dn0 = vec3(0,0,1);
		d1 = (ro.z + 1.0) / -rd.z;
		dn1 = vec3(0,0,-1);
	}
	else
	{
		d1 = (ro.z - 1.0) / -rd.z;
		dn1 = vec3(0,0,1);
		d0 = (ro.z + 1.0) / -rd.z;
		dn0 = vec3(0,0,-1);
	}
	
	hit = ro + rd * d0;
	if (hit.y >= -1.0 && (hit.x * hit.x + k * (hit.y - 1.0)) <= 0.0) // y is a parabolic function of x
	{
		t0 = d0;
		n0 = dn0;
	}
	hit = ro + rd * d1;
	if (hit.y >= -1.0 && (hit.x * hit.x + k * (hit.y - 1.0)) <= 0.0) // y is a parabolic function of x
	{
		t1 = d1;
		n1 = dn1;
	}
}
`;j.pathtracing_hyperboloid1sheet_csg_intersect=`
//------------------------------------------------------------------------------------------------------------
void Hyperboloid1Sheet_CSG_Intersect( float k, vec3 ro, vec3 rd, out float t0, out float t1, out vec3 n0, out vec3 n1 )
//------------------------------------------------------------------------------------------------------------
{
	vec3 hit;
	float d0, d1, dr0, dr1;
	d0 = d1 = dr0 = dr1 = 0.0;
	vec3 dn0, dn1;
	// implicit equation of a hyperboloid of 1 sheet (hourglass shape extending infinitely in the +Y and -Y directions):
	// x^2 + z^2 - y^2 - 1 = 0
	// for CSG purposes, we artificially truncate the hyperboloid at the middle, so that only the top half of the hourglass remains with added top/bottom caps...
	// This way, the total number of possible intersections will be 2 max (t0/t1), rather than possibly 4 (if we left it as a full hourglass with added top/bottom caps)
	
	ro.y += 0.5; // this places the top-to-middle portion of the shape closer to its own origin, so that it rotates smoothly around its own middle. 
	
	// conservative range of k: 1 to 100
	float j = k - 1.0;
	float a = k * rd.x * rd.x + k * rd.z * rd.z - j * rd.y * rd.y;
	float b = 2.0 * (k * rd.x * ro.x + k * rd.z * ro.z - j * rd.y * ro.y);
	float c = (k * ro.x * ro.x + k * ro.z * ro.z - j * ro.y * ro.y) - 1.0;
	solveQuadratic(a, b, c, t0, t1);
	hit = ro + rd * t0;
	t0 = (hit.y > 1.0 || hit.y < 0.0) ? 0.0 : t0; // invalidate t0 if it's outside unit radius bounds of top half
	n0 = vec3(2.0 * hit.x * k, 2.0 * -hit.y * j, 2.0 * hit.z * k);
	hit = ro + rd * t1;
	t1 = (hit.y > 1.0 || hit.y < 0.0) ? 0.0 : t1; // invalidate t1 if it's outside unit radius bounds of top half
	n1 = vec3(2.0 * hit.x * k, 2.0 * -hit.y * j, 2.0 * hit.z * k);
	// since the infinite hyperboloid is artificially cut off at the top and bottom so that it has a unit radius top cap,
	// if t0 intersection was invalidated, try t1
	if (t0 == 0.0)
	{
		t0 = t1;
		n0 = n1;
	}
	if (rd.y < 0.0)
	{
		d0 = (ro.y - 1.0) / -rd.y;
		dn0 = vec3(0,1,0);
		d1 = (ro.y + 0.0) / -rd.y;
		dn1 = vec3(0,-1,0);
		dr0 = 1.0; // top cap is unit radius
		dr1 = 1.0 / k; // bottom cap is inverse size of k (smaller than 1)
	}
	else
	{
		d1 = (ro.y - 1.0) / -rd.y;
		dn1 = vec3(0,1,0);
		d0 = (ro.y + 0.0) / -rd.y;
		dn0 = vec3(0,-1,0);
		dr0 = 1.0 / k; // bottom cap is inverse size of k (smaller than 1)
		dr1 = 1.0; // top cap is unit radius
	}
	
	hit = ro + rd * d0;
	if (hit.x * hit.x + hit.z * hit.z <= dr0)
	{
		t1 = t0;
		n1 = n0;
		t0 = d0;
		n0 = dn0;
	}
	hit = ro + rd * d1;
	if (hit.x * hit.x + hit.z * hit.z <= dr1)
	{
		t1 = d1;
		n1 = dn1;
	}
}
`;j.pathtracing_hyperboloid2sheets_csg_intersect=`
//------------------------------------------------------------------------------------------------------------
void Hyperboloid2Sheets_CSG_Intersect( float k, vec3 ro, vec3 rd, out float t0, out float t1, out vec3 n0, out vec3 n1 )
//------------------------------------------------------------------------------------------------------------
{
	vec3 hit;
	float d = 0.0;
	vec3 dn;
	// implicit equation of a hyperboloid of 2 sheets (2 rounded v shapes that are mirrored and pointing at each other)
	// -x^2 - z^2 + y^2 - 1 = 0
	// for CSG purposes, we artificially truncate the hyperboloid at the middle, so that only 1 sheet (the top sheet) of the 2 mirrored sheets remains...
	// This way, the total number of possible intersections will be 2 max (t0/t1), rather than possibly 4 (if we left it as 2 full sheets with added top/bottom caps)
	
	ro.y += 0.5; // this places the top-to-middle portion of the shape closer to its own origin, so that it rotates smoothly around its own middle. 
	
	// conservative range of k: 1 to 100
	float j = k + 1.0;
	float a = -k * rd.x * rd.x - k * rd.z * rd.z + j * rd.y * rd.y;
	float b = 2.0 * (-k * rd.x * ro.x - k * rd.z * ro.z + j * rd.y * ro.y);
	float c = (-k * ro.x * ro.x - k * ro.z * ro.z + j * ro.y * ro.y) - 1.0;
	solveQuadratic(a, b, c, t0, t1);
	hit = ro + rd * t0;
	t0 = (hit.y > 1.0 || hit.y < 0.0) ? 0.0 : t0; // invalidate t0 if it's outside unit radius bounds of top half
	n0 = vec3(2.0 * -hit.x * k, 2.0 * hit.y * j, 2.0 * -hit.z * k);
	hit = ro + rd * t1;
	t1 = (hit.y > 1.0 || hit.y < 0.0) ? 0.0 : t1; // invalidate t1 if it's outside unit radius bounds of top half
	n1 = vec3(2.0 * -hit.x * k, 2.0 * hit.y * j, 2.0 * -hit.z * k);
	// since the infinite hyperboloid is artificially cut off at the top and bottom so that it has a unit radius top cap,
	// if t0 intersection was invalidated, try t1
	if (t0 == 0.0)
	{
		t0 = t1;
		n0 = n1;
	}
	// intersect unit-radius disk located at top opening of unit hyperboloid shape
	d = (ro.y - 1.0) / -rd.y;
	hit = ro + rd * d;
	if (hit.x * hit.x + hit.z * hit.z <= 1.0) // disk with unit radius
	{
		if (rd.y > 0.0)
		{
			t1 = d;
			n1 = vec3(0,1,0);
		}
		else
		{
			t1 = t0;
			n1 = n0;
			t0 = d;
			n0 = vec3(0,1,0);
		}
	}
	
}
`;j.pathtracing_hyperbolicprism1sheet_csg_intersect=`
//------------------------------------------------------------------------------------------------------------
void HyperbolicPrism1Sheet_CSG_Intersect( float k, vec3 ro, vec3 rd, out float t0, out float t1, out vec3 n0, out vec3 n1 )
//------------------------------------------------------------------------------------------------------------
{
	vec3 hit;
	float d0, d1, dr0, dr1;
	d0 = d1 = dr0 = dr1 = 0.0;
	vec3 dn0, dn1;
	// start with the implicit equation of a hyperboloid of 1 sheet (hourglass shape extending infinitely in the +Y and -Y directions):
	// x^2 + z^2 - y^2 - 1 = 0
	// To obtain a hyperbolic prism along the Z axis, the Z component is simply removed, leaving:
	// x^2 - y^2 - 1 = 0
	// for CSG purposes, we artificially truncate the hyperbolic prism at the middle, so that only the top half of the hourglass remains with added top/bottom caps...
	// This way, the total number of possible intersections will be 2 max (t0/t1), rather than possibly 4 (if we left it as a full hourglass with added top/bottom caps)
	
	ro.y += 0.5; // this places the top-to-middle portion of the shape closer to its own origin, so that it rotates smoothly around its own middle. 
	
	// conservative range of k: 1 to 100
	float j = k - 1.0;
	float a = k * rd.x * rd.x - j * rd.y * rd.y;
	float b = 2.0 * (k * rd.x * ro.x - j * rd.y * ro.y);
	float c = (k * ro.x * ro.x - j * ro.y * ro.y) - 1.0;
	solveQuadratic(a, b, c, t0, t1);
	hit = ro + rd * t0;
	t0 = (hit.y > 1.0 || hit.y < 0.0 || abs(hit.z) > 1.0) ? 0.0 : t0; // invalidate t0 if it's outside unit radius bounds of top half
	n0 = vec3(2.0 * hit.x * k, 2.0 * -hit.y * j, 0.0);
	hit = ro + rd * t1;
	t1 = (hit.y > 1.0 || hit.y < 0.0 || abs(hit.z) > 1.0) ? 0.0 : t1; // invalidate t1 if it's outside unit radius bounds of top half
	n1 = vec3(2.0 * hit.x * k, 2.0 * -hit.y * j, 0.0);
	// since the infinite hyperbolic shape is artificially cut off at the top and bottom so that it has a unit radius top cap,
	// if t0 intersection was invalidated, try t1
	if (t0 == 0.0)
	{
		t0 = t1;
		n0 = n1;
	}
	// intersect top and bottom base rectangles
	if (rd.y < 0.0)
	{
		d0 = (ro.y - 1.0) / -rd.y;
		dn0 = vec3(0,1,0);
		d1 = (ro.y + 0.0) / -rd.y;
		dn1 = vec3(0,-1,0);
		dr0 = 1.0; // top cap is unit radius
		dr1 = 1.0 / sqrt(abs(k)); // bottom cap is related to k (smaller than 1)
	}
	else
	{
		d1 = (ro.y - 1.0) / -rd.y;
		dn1 = vec3(0,1,0);
		d0 = (ro.y + 0.0) / -rd.y;
		dn0 = vec3(0,-1,0);
		dr0 = 1.0 / sqrt(abs(k)); // bottom cap is related to k (smaller than 1)
		dr1 = 1.0; // top cap is unit radius
	}
	
	hit = ro + rd * d0;
	if (abs(hit.x) <= dr0 && abs(hit.z) <= 1.0)
	{
		if (t0 != 0.0)
		{
			t1 = t0;
			n1 = n0;
		}
		t0 = d0;
		n0 = dn0;
	}
	hit = ro + rd * d1;
	if (abs(hit.x) <= dr1 && abs(hit.z) <= 1.0)
	{
		t1 = d1;
		n1 = dn1;
	}
	// intersect hyperbolic-shaped front and back wall pieces
	if (rd.z < 0.0)
	{
		d0 = (ro.z - 1.0) / -rd.z;
		dn0 = vec3(0,0,1);
		d1 = (ro.z + 1.0) / -rd.z;
		dn1 = vec3(0,0,-1);
	}
	else
	{
		d1 = (ro.z - 1.0) / -rd.z;
		dn1 = vec3(0,0,1);
		d0 = (ro.z + 1.0) / -rd.z;
		dn0 = vec3(0,0,-1);
	}
	
	hit = ro + rd * d0;
	if (abs(hit.x) <= 1.0 && hit.y >= 0.0 && hit.y <= 1.0 && (k * hit.x * hit.x - j * hit.y * hit.y - 1.0) <= 0.0) // y is a quadratic (hyperbolic) function of x
	{
		if (t0 != 0.0)
		{
			t1 = t0;
			n1 = n0;
		}
		
		t0 = d0;
		n0 = dn0;
	}
	hit = ro + rd * d1;
	if (abs(hit.x) <= 1.0 && hit.y >= 0.0 && hit.y <= 1.0 && (k * hit.x * hit.x - j * hit.y * hit.y - 1.0) <= 0.0) // y is a quadratic (hyperbolic) function of x
	{
		t1 = d1;
		n1 = dn1;
	}
}
`;j.pathtracing_hyperbolicprism2sheets_csg_intersect=`
//------------------------------------------------------------------------------------------------------------
void HyperbolicPrism2Sheets_CSG_Intersect( float k, vec3 ro, vec3 rd, out float t0, out float t1, out vec3 n0, out vec3 n1 )
//------------------------------------------------------------------------------------------------------------
{
	vec3 hit;
	float d, d0, d1, dr0, dr1;
	d = d0 = d1 = dr0 = dr1 = 0.0;
	vec3 dn0, dn1;
	// start with the implicit equation of a hyperboloid of 2 sheets (2 rounded v shapes that are mirrored and pointing at each other)
	// -x^2 - z^2 + y^2 - 1 = 0
	// To obtain a hyperbolic prism along the Z axis, the Z component is simply removed, leaving:
	// -x^2 + y^2 - 1 = 0
	// for CSG purposes, we artificially truncate the hyperbolic prism at the middle, so that only 1 sheet (the top sheet) of the 2 mirrored sheets remains...
	// This way, the total number of possible intersections will be 2 max (t0/t1), rather than possibly 4 (if we left it as 2 full sheets with added top/bottom caps)
	
	ro.y += 0.5; // this places the top-to-middle portion of the shape closer to its own origin, so that it rotates smoothly around its own middle. 
	
	// conservative range of k: 1 to 100
	float j = k + 1.0;
	float a = -k * rd.x * rd.x + j * rd.y * rd.y;
	float b = 2.0 * (-k * rd.x * ro.x + j * rd.y * ro.y);
	float c = (-k * ro.x * ro.x + j * ro.y * ro.y) - 1.0;
	solveQuadratic(a, b, c, t0, t1);
	hit = ro + rd * t0;
	t0 = (hit.y > 1.0 || hit.y < 0.0 || abs(hit.z) > 1.0) ? 0.0 : t0; // invalidate t0 if it's outside unit radius bounds of top half
	n0 = vec3(2.0 * -hit.x * k, 2.0 * hit.y * j, 0.0);
	hit = ro + rd * t1;
	t1 = (hit.y > 1.0 || hit.y < 0.0 || abs(hit.z) > 1.0) ? 0.0 : t1; // invalidate t1 if it's outside unit radius bounds of top half
	n1 = vec3(2.0 * -hit.x * k, 2.0 * hit.y * j, 0.0);
	// since the infinite hyperbolic shape is artificially cut off at the top and bottom so that it has a unit radius top cap,
	// if t0 intersection was invalidated, try t1
	if (t0 == 0.0)
	{
		t0 = t1;
		n0 = n1;
	}
	// intersect unit-radius square located at top opening of hyperbolic prism shape
	d = (ro.y - 1.0) / -rd.y;
	hit = ro + rd * d;
	if (abs(hit.x) <= 1.0 && abs(hit.z) <= 1.0) // square with unit radius
	{
		if (rd.y > 0.0)
		{
			t1 = d;
			n1 = vec3(0,1,0);
		}
		else
		{
			t1 = t0;
			n1 = n0;
			t0 = d;
			n0 = vec3(0,1,0);
		}
	}
	// intersect hyperbolic v-shaped front and back wall pieces
	if (rd.z < 0.0)
	{
		d0 = (ro.z - 1.0) / -rd.z;
		dn0 = vec3(0,0,1);
		d1 = (ro.z + 1.0) / -rd.z;
		dn1 = vec3(0,0,-1);
	}
	else
	{
		d1 = (ro.z - 1.0) / -rd.z;
		dn1 = vec3(0,0,1);
		d0 = (ro.z + 1.0) / -rd.z;
		dn0 = vec3(0,0,-1);
	}
	
	hit = ro + rd * d0;
	if (abs(hit.x) <= 1.0 && hit.y >= 0.0 && hit.y <= 1.0 && (-k * hit.x * hit.x + j * hit.y * hit.y - 1.0) >= 0.0) // y is a quadratic (hyperbolic) function of x
	{
		if (t0 != 0.0)
		{
			t1 = t0;
			n1 = n0;
		}
		
		t0 = d0;
		n0 = dn0;
	}
	hit = ro + rd * d1;
	if (abs(hit.x) <= 1.0 && hit.y >= 0.0 && hit.y <= 1.0 && (-k * hit.x * hit.x + j * hit.y * hit.y - 1.0) >= 0.0) // y is a quadratic (hyperbolic) function of x
	{
		t1 = d1;
		n1 = dn1;
	}
}
`;j.pathtracing_capsule_csg_intersect=`
//------------------------------------------------------------------------------------------------------------
void Capsule_CSG_Intersect( float k, vec3 ro, vec3 rd, out float t0, out float t1, out vec3 n0, out vec3 n1 )
//------------------------------------------------------------------------------------------------------------
{
	vec3 hit, s0n0, s0n1, s1n0, s1n1;
	float s0t0, s0t1, s1t0, s1t1;
	s0t0 = s0t1 = s1t0 = s1t1 = 0.0;
	// implicit equation of a unit (radius of 1) cylinder, extending infinitely in the +Y and -Y directions:
	// x^2 + z^2 - 1 = 0
	float a = (rd.x * rd.x + rd.z * rd.z);
    	float b = 2.0 * (rd.x * ro.x + rd.z * ro.z);
    	float c = (ro.x * ro.x + ro.z * ro.z) - 1.0;
	solveQuadratic(a, b, c, t0, t1);
	hit = ro + rd * t0;
	t0 = (abs(hit.y) > k) ? 0.0 : t0;
	n0 = vec3(2.0 * hit.x, 0.0, 2.0 * hit.z);
	hit = ro + rd * t1;
	t1 = (abs(hit.y) > k) ? 0.0 : t1;
	n1 = vec3(2.0 * hit.x, 0.0, 2.0 * hit.z);
	// intersect unit-radius sphere located at top opening of cylinder
	vec3 s0pos = vec3(0, k, 0);
	vec3 L = ro - s0pos;
	a = dot(rd, rd);
	b = 2.0 * dot(rd, L);
	c = dot(L, L) - 1.0;
	solveQuadratic(a, b, c, s0t0, s0t1);
	hit = ro + rd * s0t0;
	s0n0 = vec3(2.0 * hit.x, 2.0 * (hit.y - s0pos.y), 2.0 * hit.z);
	s0t0 = (hit.y < k) ? 0.0 : s0t0;
	hit = ro + rd * s0t1;
	s0n1 = vec3(2.0 * hit.x, 2.0 * (hit.y - s0pos.y), 2.0 * hit.z);
	s0t1 = (hit.y < k) ? 0.0 : s0t1;
	// now intersect unit-radius sphere located at bottom opening of cylinder
	vec3 s1pos = vec3(0, -k, 0);
	L = ro - s1pos;
	a = dot(rd, rd);
	b = 2.0 * dot(rd, L);
	c = dot(L, L) - 1.0;
	solveQuadratic(a, b, c, s1t0, s1t1);
	hit = ro + rd * s1t0;
	s1n0 = vec3(2.0 * hit.x, 2.0 * (hit.y - s1pos.y), 2.0 * hit.z);
	s1t0 = (hit.y > -k) ? 0.0 : s1t0;
	hit = ro + rd * s1t1;
	s1n1 = vec3(2.0 * hit.x, 2.0 * (hit.y - s1pos.y), 2.0 * hit.z);
	s1t1 = (hit.y > -k) ? 0.0 : s1t1;
	if (s0t0 != 0.0)
	{
		t0 = s0t0;
		n0 = s0n0;
	}
	else if (s1t0 != 0.0)
	{
		t0 = s1t0;
		n0 = s1n0;
	}
	
	if (s0t1 != 0.0)
	{
		t1 = s0t1;
		n1 = s0n1;
	}
	else if (s1t1 != 0.0)
	{
		t1 = s1t1;
		n1 = s1n1;
	}
}
`;j.pathtracing_box_csg_intersect=`
//------------------------------------------------------------------------------------------------------------
void Box_CSG_Intersect( vec3 ro, vec3 rd, out float t0, out float t1, out vec3 n0, out vec3 n1 )
//------------------------------------------------------------------------------------------------------------
{
	vec3 invDir = 1.0 / rd;
	vec3 near = (vec3(-1) - ro) * invDir; // unit radius box: vec3(-1,-1,-1) min corner
	vec3 far  = (vec3(1) - ro) * invDir;  // unit radius box: vec3(+1,+1,+1) max corner
	
	vec3 tmin = min(near, far);
	vec3 tmax = max(near, far);
	t0 = max( max(tmin.x, tmin.y), tmin.z);
	t1 = min( min(tmax.x, tmax.y), tmax.z);
	n0 = -sign(rd) * step(tmin.yzx, tmin) * step(tmin.zxy, tmin);
	n1 = -sign(rd) * step(tmax, tmax.yzx) * step(tmax, tmax.zxy);
	if (t0 > t1) // invalid intersection
		t0 = t1 = 0.0;
}
`;j.pathtracing_pyramidfrustum_csg_intersect=`
//------------------------------------------------------------------------------------------------------------
void PyramidFrustum_CSG_Intersect( float k, vec3 ro, vec3 rd, out float t0, out float t1, out vec3 n0, out vec3 n1 )
//------------------------------------------------------------------------------------------------------------
{
	vec3 hit, dn0, dn1, xn0, xn1, zn0, zn1;
	float d0, d1, dr0, dr1;
	float xt0, xt1, zt0, zt1;
	d0 = d1 = dr0 = dr1 = xt0 = xt1 = zt0 = zt1 = 0.0;
	// first, intersect left and right sides of pyramid/frustum
	// start with implicit equation of a double-cone extending infinitely in +Y and -Y directions
	// x^2 + z^2 - y^2 = 0
	// To obtain a conical prism along the Z axis, the Z component is simply removed, leaving:
	// x^2 - y^2 = 0
	// code below cuts off top cone of the double-cone, leaving bottom cone with apex at the top (+1.0), and base (radius of 1) at the bottom (-1.0)
	
	// valid range for k: 0.01 to 1.0 (1.0 being the default for cone with a sharp, pointed apex)
	k = clamp(k, 0.01, 1.0);
	
	float j = 1.0 / k;
	float h = j * 2.0 - 1.0; // (k * 0.25) makes the normal cone's bottom circular base have a unit radius of 1.0
	float a = j * rd.x * rd.x - (k * 0.25) * rd.y * rd.y;
    	float b = 2.0 * (j * rd.x * ro.x - (k * 0.25) * rd.y * (ro.y - h));
    	float c = j * ro.x * ro.x - (k * 0.25) * (ro.y - h) * (ro.y - h);
	solveQuadratic(a, b, c, xt0, xt1);
	hit = ro + rd * xt0;
	xt0 = (abs(hit.x) > 1.0 || abs(hit.z) > 1.0 || hit.y > 1.0 || (j * hit.z * hit.z - k * 0.25 * (hit.y - h) * (hit.y - h)) > 0.0) ? 0.0 : xt0;
	xn0 = vec3(2.0 * hit.x * j, 2.0 * (hit.y - h) * -(k * 0.25), 0.0);
	
	hit = ro + rd * xt1;
	xt1 = (abs(hit.x) > 1.0 || abs(hit.z) > 1.0 || hit.y > 1.0 || (j * hit.z * hit.z - k * 0.25 * (hit.y - h) * (hit.y - h)) > 0.0) ? 0.0 : xt1;
	xn1 = vec3(2.0 * hit.x * j, 2.0 * (hit.y - h) * -(k * 0.25), 0.0);
	
	// since the infinite double-cone shape is artificially cut off at the top and bottom,
	// if xt0 intersection was invalidated above, try xt1
	if (xt0 == 0.0)
	{
		xt0 = xt1;
		xn0 = xn1;
		xt1 = 0.0; // invalidate xt1 (see sorting algo below)
	}
	// now intersect front and back sides of pyramid/frustum
	// start with implicit equation of a double-cone extending infinitely in +Y and -Y directions
	// x^2 + z^2 - y^2 = 0
	// To obtain a conical prism along the X axis, the X component is simply removed, leaving:
	// z^2 - y^2 = 0
	a = j * rd.z * rd.z - (k * 0.25) * rd.y * rd.y;
    	b = 2.0 * (j * rd.z * ro.z - (k * 0.25) * rd.y * (ro.y - h));
    	c = j * ro.z * ro.z - (k * 0.25) * (ro.y - h) * (ro.y - h);
	solveQuadratic(a, b, c, zt0, zt1);
	hit = ro + rd * zt0;
	zt0 = (abs(hit.x) > 1.0 || abs(hit.z) > 1.0 || hit.y > 1.0 || (j * hit.x * hit.x - k * 0.25 * (hit.y - h) * (hit.y - h)) > 0.0) ? 0.0 : zt0;
	zn0 = vec3(0.0, 2.0 * (hit.y - h) * -(k * 0.25), 2.0 * hit.z * j);
	
	hit = ro + rd * zt1;
	zt1 = (abs(hit.x) > 1.0 || abs(hit.z) > 1.0 || hit.y > 1.0 || (j * hit.x * hit.x - k * 0.25 * (hit.y - h) * (hit.y - h)) > 0.0) ? 0.0 : zt1;
	zn1 = vec3(0.0, 2.0 * (hit.y - h) * -(k * 0.25), 2.0 * hit.z * j);
	// since the infinite double-cone shape is artificially cut off at the top and bottom,
	// if zt0 intersection was invalidated above, try zt1
	if (zt0 == 0.0)
	{
		zt0 = zt1;
		zn0 = zn1;
		zt1 = 0.0; // invalidate zt1 (see sorting algo below)
	}
	// sort valid intersections of 4 sides of pyramid/frustum thus far
	if (xt1 != 0.0) // the only way xt1 can be valid (not 0), is if xt0 was also valid (not 0) (see above)
	{
		t0 = xt0;
		n0 = xn0;
		t1 = xt1;
		n1 = xn1;
	}
	else if (zt1 != 0.0) // the only way zt1 can be valid (not 0), is if zt0 was also valid (not 0) (see above)
	{
		t0 = zt0;
		n0 = zn0;
		t1 = zt1;
		n1 = zn1;
	}
	else if (xt0 != 0.0)
	{
		if (zt0 == 0.0)
		{
			t0 = xt0;
			n0 = xn0;	
		}
		else if (zt0 < xt0)
		{
			t0 = zt0;
			n0 = zn0;
			t1 = xt0;
			n1 = xn0;
		}
		else
		{
			t0 = xt0;
			n0 = xn0;
			t1 = zt0;
			n1 = zn0;
		}
	}
	else if (xt0 == 0.0)
	{
		t0 = zt0;
		n0 = zn0;
	}
	
	// lastly, intersect top and bottom base squares (both are perfect squares)
	if (rd.y < 0.0)
	{
		d0 = (ro.y - 1.0) / -rd.y;
		dn0 = vec3(0,1,0);
		d1 = (ro.y + 1.0) / -rd.y;
		dn1 = vec3(0,-1,0);
		dr0 = 1.0 - k; // top square's size is relative to k
		dr1 = 1.0; // bottom square is unit radius
	}
	else
	{
		d1 = (ro.y - 1.0) / -rd.y;
		dn1 = vec3(0,1,0);
		d0 = (ro.y + 1.0) / -rd.y;
		dn0 = vec3(0,-1,0);
		dr0 = 1.0; // bottom square is unit radius
		dr1 = 1.0 - k;// top square's size is relative to k
	}
	hit = ro + rd * d0;
	if (abs(hit.x) <= dr0 && abs(hit.z) <= dr0)
	{
		t1 = t0;
		n1 = n0;
		t0 = d0;
		n0 = dn0;
	}
	hit = ro + rd * d1;
	if (abs(hit.x) <= dr1 && abs(hit.z) <= dr1)
	{
		t1 = d1;
		n1 = dn1;
	}
}
`;j.pathtracing_convexpolyhedron_intersect=`
// This convexPolyhedron routine works with any number of user-defined cutting planes (up to 20) - a plane is defined by its unit normal (vec3) and an 
// offset distance (float) from the plane origin to the shape's origin.  Examples of shapes that can be made from a list of pure convex cutting planes: 
// cube, frustum, triangular pyramid (tetrahedron), rectangular pyramid, triangular bipyramid (hexahedron), rectangular bipyramid (octahedron), and other polyhedra.

//------------------------------------------------------------------------------------------------------------
float ConvexPolyhedronIntersect( vec3 ro, vec3 rd, out vec3 n, int numPlanes, vec4 planes[20] )
//------------------------------------------------------------------------------------------------------------
{
	vec3 n0, n1;
	float t;
	float t0 = -INFINITY;
	float t1 = INFINITY;
	float plane_dot_rayDir;
	
	for (int i = 0; i < numPlanes; i++)
	{
		plane_dot_rayDir = dot(planes[i].xyz, rd);
		
		t = (-dot(planes[i].xyz, ro) + planes[i].w) / plane_dot_rayDir;

		if (plane_dot_rayDir < 0.0 && t > t0)
		{
			t0 = t;
			n0 = planes[i].xyz;
		}	
		if (plane_dot_rayDir > 0.0 && t < t1)
		{
			t1 = t;
			n1 = planes[i].xyz;
		}	
	}

	if (t0 > t1) // check for invalid t0/t1 intersection pair
		return INFINITY;
	if (t0 > 0.0)
	{
		n = n0;
		return t0;
	}
	if (t1 > 0.0)
	{
		n = n1;
		return t1;
	}

	return INFINITY;
}

/*
//----------------------------------------------------------------------------------------------------------------------------------
void ConvexPolyhedron_CSG_Intersect( vec3 ro, vec3 rd, int numPlanes, vec4 planes[20], out float t0, out float t1, out vec3 n0, out vec3 n1 )
//----------------------------------------------------------------------------------------------------------------------------------
{
	
}
*/

`;j.pathtracing_csg_operations=`
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
void CSG_Union_Operation( float A_t0, vec3 A_n0, int A_type0, vec3 A_color0, int A_objectID0, float A_t1, vec3 A_n1, int A_type1, vec3 A_color1, int A_objectID1, 
			  float B_t0, vec3 B_n0, int B_type0, vec3 B_color0, int B_objectID0, float B_t1, vec3 B_n1, int B_type1, vec3 B_color1, int B_objectID1, 
			  out float t0, out vec3 n0, out int type0, out vec3 color0, out int objectID0, out float t1, out vec3 n1, out int type1, out vec3 color1, out int objectID1 )
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
{
	// CSG UNION OPERATION [A + B] (outside of shape A and outside of shape B are fused together into a single, new shape)
	// (hypothetically, the interior volume of the newly created union could be completely filled with water in one pass)
	
	vec3 temp_n0, temp_n1, temp_col0, temp_col1;
	float temp_t0, temp_t1;
	int temp_type0, temp_type1, temp_objectID0, temp_objectID1;
	// if shape B is closer than A, swap shapes
	if (B_t0 < A_t0)
	{
		temp_t0 = A_t0;
		temp_n0 = A_n0;
		temp_col0 = A_color0;
		temp_type0 = A_type0;
		temp_objectID0 = A_objectID0;
		
		temp_t1 = A_t1;
		temp_n1 = A_n1;
		temp_col1 = A_color1;
		temp_type1 = A_type1;
		temp_objectID1 = A_objectID1;


		A_t0 = B_t0;
		A_n0 = B_n0;
		A_color0 = B_color0;
		A_type0 = B_type0;
		A_objectID0 = B_objectID0;

		A_t1 = B_t1;
		A_n1 = B_n1;
		A_color1 = B_color1;
		A_type1 = B_type1;
		A_objectID1 = B_objectID1;


		B_t0 = temp_t0;
		B_n0 = temp_n0;
		B_color0 = temp_col0;
		B_type0 = temp_type0;
		B_objectID0 = temp_objectID0;

		B_t1 = temp_t1;
		B_n1 = temp_n1;
		B_color1 = temp_col1;
		B_type1 = temp_type1;
		B_objectID1 = temp_objectID1;
	}
	// shape A is always considered to be first
	t0 = A_t0;
	n0 = A_n0;
	type0 = A_type0;
	color0 = A_color0;
	objectID0 = A_objectID0;

	t1 = A_t1;
	n1 = A_n1;
	type1 = A_type1;
	color1 = A_color1;
	objectID1 = A_objectID1;
	
	// except for when the outside of shape B matches the outside of shape A
	if (B_t0 == A_t0)
	{
		t0 = B_t0;
		n0 = B_n0;
		type0 = B_type0;
		color0 = B_color0;
		objectID0 = B_objectID0;
	}
	// A is behind us and completely in front of B
	if (A_t1 <= 0.0 && A_t1 < B_t0)
	{
		t0 = B_t0;
		n0 = B_n0;
		type0 = B_type0;
		color0 = B_color0;
		objectID0 = B_objectID0;

		t1 = B_t1;
		n1 = B_n1;
		type1 = B_type1;
		color1 = B_color1;
		objectID1 = B_objectID1;
	}
	else if (B_t0 <= A_t1 && B_t1 > A_t1)
	{
		t1 = B_t1;
		n1 = B_n1;
		type1 = B_type1;
		color1 = B_color1;
		objectID1 = B_objectID1;
	}
	else if (B_t0 <= A_t1 && B_t1 <= A_t1)
	{
		t1 = A_t1;
		n1 = A_n1;
		type1 = A_type1;
		color1 = A_color1;
		objectID1 = A_objectID1;
	}
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
void CSG_Difference_Operation( float A_t0, vec3 A_n0, int A_type0, vec3 A_color0, int A_objectID0, float A_t1, vec3 A_n1, int A_type1, vec3 A_color1, int A_objectID1, 
			       float B_t0, vec3 B_n0, int B_type0, vec3 B_color0, int B_objectID0, float B_t1, vec3 B_n1, int B_type1, vec3 B_color1, int B_objectID1, 
			       out float t0, out vec3 n0, out int type0, out vec3 color0, out int objectID0, out float t1, out vec3 n1, out int type1, out vec3 color1, out int objectID1 )
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
{
	// CSG DIFFERENCE OPERATION [A - B] (shape A is carved out with shape B where the two shapes overlap)
	
	if ((B_t0 < A_t0 && B_t1 < A_t0) || (B_t0 > A_t1 && B_t1 > A_t1))
	{
		t0 = A_t0;
		n0 = A_n0;
		type0 = A_type0;
		color0 = A_color0;
		objectID0 = A_objectID0;

		t1 = A_t1;
		n1 = A_n1;
		type1 = A_type1;
		color1 = A_color1;
		objectID1 = A_objectID1;
	}
	else if (B_t0 > 0.0 && B_t0 < A_t1 && B_t0 > A_t0)
	{
		t0 = A_t0;
		n0 = A_n0;
		type0 = A_type0;
		color0 = A_color0;
		objectID0 = A_objectID0;

		t1 = B_t0;
		n1 = B_n0;
		type1 = B_type0;
		color1 = B_color0;
		objectID1 = B_objectID0;
	}
	else if (B_t1 > A_t0 && B_t1 < A_t1)
	{
		t0 = B_t1;
		n0 = B_n1;
		type0 = B_type1;
		color0 = B_color1;
		objectID0 = B_objectID1;

		t1 = A_t1;
		n1 = A_n1;
		type1 = A_type1;
		color1 = A_color1;
		objectID1 = A_objectID1;
	}
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
void CSG_Intersection_Operation( float A_t0, vec3 A_n0, int A_type0, vec3 A_color0, int A_objectID0, float A_t1, vec3 A_n1, int A_type1, vec3 A_color1, int A_objectID1, 
			  	 float B_t0, vec3 B_n0, int B_type0, vec3 B_color0, int B_objectID0, float B_t1, vec3 B_n1, int B_type1, vec3 B_color1, int B_objectID1, 
			  	 out float t0, out vec3 n0, out int type0, out vec3 color0, out int objectID0, out float t1, out vec3 n1, out int type1, out vec3 color1, out int objectID1 )
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
{
	// CSG INTERSECTION OPERATION [A ^ B] (Only valid where shape A overlaps shape B)
	// (ray must intersect both shape A and shape B)
	vec3 temp_n0, temp_n1, temp_col0, temp_col1;
	float temp_t0, temp_t1;
	int temp_type0, temp_type1, temp_objectID0, temp_objectID1;
	// if shape B is closer than A, swap shapes
	if (B_t0 < A_t0)
	{
		temp_t0 = A_t0;
		temp_n0 = A_n0;
		temp_col0 = A_color0;
		temp_type0 = A_type0;
		temp_objectID0 = A_objectID0;
		
		temp_t1 = A_t1;
		temp_n1 = A_n1;
		temp_col1 = A_color1;
		temp_type1 = A_type1;
		temp_objectID1 = A_objectID1;


		A_t0 = B_t0;
		A_n0 = B_n0;
		A_color0 = B_color0;
		A_type0 = B_type0;
		A_objectID0 = B_objectID0;

		A_t1 = B_t1;
		A_n1 = B_n1;
		A_color1 = B_color1;
		A_type1 = B_type1;
		A_objectID1 = B_objectID1;


		B_t0 = temp_t0;
		B_n0 = temp_n0;
		B_color0 = temp_col0;
		B_type0 = temp_type0;
		B_objectID0 = temp_objectID0;

		B_t1 = temp_t1;
		B_n1 = temp_n1;
		B_color1 = temp_col1;
		B_type1 = temp_type1;
		B_objectID1 = temp_objectID1;
	}
	if (B_t0 < A_t1)
	{
		t0 = B_t0;
		n0 = B_n0;
		// in surfaceA's space, so must use surfaceA's material
		type0 = A_type0; 
		color0 = A_color0;
		objectID0 = A_objectID0;
	}
	if (A_t1 > B_t0 && A_t1 < B_t1)
	{
		t1 = A_t1;
		n1 = A_n1;
		// in surfaceB's space, so must use surfaceB's material
		type1 = B_type0;
		color1 = B_color0;
		objectID1 = B_objectID0;
	}
	else if (B_t1 > A_t0 && B_t1 <= A_t1)
	{
		t1 = B_t1;
		n1 = B_n1;
		// in surfaceA's space, so must use surfaceA's material
		type1 = A_type0;
		color1 = A_color0;
		objectID1 = A_objectID0;
	}
}
`;j.pathtracing_ellipsoid_param_intersect=`
//------------------------------------------------------------------------------------------------------------
float EllipsoidParamIntersect( float yMinPercent, float yMaxPercent, float phiMaxRadians, vec3 ro, vec3 rd, out vec3 n )
//------------------------------------------------------------------------------------------------------------
{
	vec3 pHit;
	float t, t0, t1, phi;
	// implicit equation of a unit (radius of 1) sphere:
	// x^2 + y^2 + z^2 - 1 = 0
	float a = dot(rd, rd);
	float b = 2.0 * dot(rd, ro);
	float c = dot(ro, ro) - 1.0;
	solveQuadratic(a, b, c, t0, t1);
	if (t1 <= 0.0) return INFINITY;
	t = t0 > 0.0 ? t0 : INFINITY;
	pHit = ro + rd * t;
	phi = mod(atan(pHit.z, pHit.x), TWO_PI);
	if (pHit.y > yMaxPercent || pHit.y < yMinPercent || phi > phiMaxRadians)
	{
		t = t1;
		pHit = ro + rd * t;
		phi = mod(atan(pHit.z, pHit.x), TWO_PI);
		if (pHit.y > yMaxPercent || pHit.y < yMinPercent || phi > phiMaxRadians)
			t = INFINITY;
	}
	
	n = vec3(2.0 * pHit.x, 2.0 * pHit.y, 2.0 * pHit.z);
	n = dot(rd, n) < 0.0 ? n : -n; // flip normal if it is facing away from us
	return t;
}
`;j.pathtracing_cylinder_param_intersect=`
//------------------------------------------------------------------------------------------------------------
float CylinderParamIntersect( float yMinPercent, float yMaxPercent, float phiMaxRadians, vec3 ro, vec3 rd, out vec3 n )
//------------------------------------------------------------------------------------------------------------
{
	vec3 pHit;
	float t, t0, t1, phi;
	// implicit equation of a unit (radius of 1) cylinder, extending infinitely in the +Y and -Y directions:
	// x^2 + z^2 - 1 = 0
	float a = (rd.x * rd.x + rd.z * rd.z);
    	float b = 2.0 * (rd.x * ro.x + rd.z * ro.z);
    	float c = (ro.x * ro.x + ro.z * ro.z) - 1.0;
	solveQuadratic(a, b, c, t0, t1);
	if (t1 <= 0.0) return INFINITY;
		
	t = t0 > 0.0 ? t0 : INFINITY;
	pHit = ro + rd * t;
	phi = mod(atan(pHit.z, pHit.x), TWO_PI);
	if (pHit.y > yMaxPercent || pHit.y < yMinPercent || phi > phiMaxRadians)
	{
		t = t1;
		pHit = ro + rd * t;
		phi = mod(atan(pHit.z, pHit.x), TWO_PI);
		if (pHit.y > yMaxPercent || pHit.y < yMinPercent || phi > phiMaxRadians)
			t = INFINITY;
	}
	
	n = vec3(2.0 * pHit.x, 0.0, 2.0 * pHit.z);
	n = dot(rd, n) < 0.0 ? n : -n; // flip normal if it is facing away from us
		
	return t;
}
`;j.pathtracing_cone_param_intersect=`
//------------------------------------------------------------------------------------------------------------
float ConeParamIntersect( float yMinPercent, float yMaxPercent, float phiMaxRadians, vec3 ro, vec3 rd, out vec3 n )
//------------------------------------------------------------------------------------------------------------
{
	vec3 pHit;
	float t, t0, t1, phi;
	// implicit equation of a double-cone extending infinitely in +Y and -Y directions
	// x^2 + z^2 - y^2 = 0
	// code below cuts off top cone, leaving bottom cone with apex at the top (+1.0), and circular base (radius of 1) at the bottom (-1.0)
	float k = 0.25;
	float a = rd.x * rd.x + rd.z * rd.z - k * rd.y * rd.y;
    	float b = 2.0 * (rd.x * ro.x + rd.z * ro.z - k * rd.y * (ro.y - 1.0));
    	float c = ro.x * ro.x + ro.z * ro.z - k * (ro.y - 1.0) * (ro.y - 1.0);
	
	solveQuadratic(a, b, c, t0, t1);
	if (t1 <= 0.0) return INFINITY;
		
	t = t0 > 0.0 ? t0 : INFINITY;
	pHit = ro + rd * t;
	phi = mod(atan(pHit.z, pHit.x), TWO_PI);
	if (pHit.y > yMaxPercent || pHit.y < yMinPercent || phi > phiMaxRadians)
	{
		t = t1;
		pHit = ro + rd * t;
		phi = mod(atan(pHit.z, pHit.x), TWO_PI);
		if (pHit.y > yMaxPercent || pHit.y < yMinPercent || phi > phiMaxRadians)
			t = INFINITY;
	}
	n = vec3(2.0 * pHit.x, 2.0 * (1.0 - pHit.y) * k, 2.0 * pHit.z);
	n = dot(rd, n) < 0.0 ? n : -n; // flip normal if it is facing away from us
	return t;
}
`;j.pathtracing_paraboloid_param_intersect=`
//------------------------------------------------------------------------------------------------------------
float ParaboloidParamIntersect( float yMinPercent, float yMaxPercent, float phiMaxRadians, vec3 ro, vec3 rd, out vec3 n )
//------------------------------------------------------------------------------------------------------------
{
	vec3 pHit;
	float t, t0, t1, phi;
	// implicit equation of a paraboloid (bowl or vase-shape extending infinitely in the +Y direction):
	// x^2 + z^2 - y = 0
	ro.y += 1.0; // this essentially centers the paraboloid so that the bottom is at -1.0 and 
		     // the open circular top (radius of 1) is at +1.0
	float k = 0.5;
	float a = (rd.x * rd.x + rd.z * rd.z);
    	float b = 2.0 * (rd.x * ro.x + rd.z * ro.z) - k * rd.y;
    	float c = (ro.x * ro.x + ro.z * ro.z) - k * ro.y;
	solveQuadratic(a, b, c, t0, t1);
	if (t1 <= 0.0) return INFINITY;
	
	// this takes into account that we shifted the ray origin by +1.0
	yMaxPercent += 1.0;
	yMinPercent += 1.0;
	t = t0 > 0.0 ? t0 : INFINITY;
	pHit = ro + rd * t;
	phi = mod(atan(pHit.z, pHit.x), TWO_PI);
	if (pHit.y > yMaxPercent || pHit.y < yMinPercent || phi > phiMaxRadians)
	{
		t = t1;
		pHit = ro + rd * t;
		phi = mod(atan(pHit.z, pHit.x), TWO_PI);
		if (pHit.y > yMaxPercent || pHit.y < yMinPercent || phi > phiMaxRadians)
			t = INFINITY;
	}
	
	n = vec3(2.0 * pHit.x, -1.0 * k, 2.0 * pHit.z);
	n = dot(rd, n) < 0.0 ? n : -n; // flip normal if it is facing away from us
			
	return t;
}
`;j.pathtracing_hyperboloid_param_intersect=`
//------------------------------------------------------------------------------------------------------------
float HyperboloidParamIntersect( float k, float yMinPercent, float yMaxPercent, float phiMaxRadians, vec3 ro, vec3 rd, out vec3 n )
//------------------------------------------------------------------------------------------------------------
{
	vec3 pHit;
	float t, t0, t1, phi;
	// implicit equation of a hyperboloid of 1 sheet (hourglass shape extending infinitely in the +Y and -Y directions):
	// x^2 + z^2 - y^2 - 1 = 0
	// implicit equation of a hyperboloid of 2 sheets (2 mirrored opposing paraboloids, non-connecting, top extends infinitely in +Y, bottom in -Y):
	// x^2 + z^2 - y^2 + 1 = 0
	
	// if the k argument is negative, a 2-sheet hyperboloid is created
	float j = k - 1.0;
	
	float a = k * rd.x * rd.x + k * rd.z * rd.z - j * rd.y * rd.y;
	float b = 2.0 * (k * rd.x * ro.x + k * rd.z * ro.z - j * rd.y * ro.y);
	float c = (k * ro.x * ro.x + k * ro.z * ro.z - j * ro.y * ro.y) - 1.0;
	solveQuadratic(a, b, c, t0, t1);
	if (t1 <= 0.0) return INFINITY;
	
	t = t0 > 0.0 ? t0 : INFINITY;
	pHit = ro + rd * t;
	phi = mod(atan(pHit.z, pHit.x), TWO_PI);
	if (pHit.y > yMaxPercent || pHit.y < yMinPercent || phi > phiMaxRadians)
	{
		t = t1;
		pHit = ro + rd * t;
		phi = mod(atan(pHit.z, pHit.x), TWO_PI);
		if (pHit.y > yMaxPercent || pHit.y < yMinPercent || phi > phiMaxRadians)
			t = INFINITY;
	}
	
	n = vec3(2.0 * pHit.x * k, 2.0 * -pHit.y * j, 2.0 * pHit.z * k);
	n = dot(rd, n) < 0.0 ? n : -n; // flip normal if it is facing away from us
		
	return t;
}
`;j.pathtracing_hyperbolic_paraboloid_param_intersect=`
//------------------------------------------------------------------------------------------------------------
float HyperbolicParaboloidParamIntersect( float yMinPercent, float yMaxPercent, float phiMaxRadians, vec3 ro, vec3 rd, out vec3 n )
//------------------------------------------------------------------------------------------------------------
{
	vec3 pHit;
	float t, t0, t1, phi;
	// implicit equation of an infinite hyperbolic paraboloid (saddle shape):
	// x^2 - z^2 - y = 0
	float a = rd.x * rd.x - rd.z * rd.z;
	float b = 2.0 * (rd.x * ro.x - rd.z * ro.z) - rd.y;
	float c = (ro.x * ro.x - ro.z * ro.z) - ro.y;
	solveQuadratic(a, b, c, t0, t1);
	if (t1 <= 0.0) return INFINITY;
	t = t0 > 0.0 ? t0 : INFINITY;
	pHit = ro + rd * t;
	phi = mod(atan(pHit.z, pHit.x), TWO_PI);
	if (abs(pHit.x) > yMaxPercent || abs(pHit.y) > yMaxPercent || abs(pHit.z) > yMaxPercent || phi > phiMaxRadians)
	{
		t = t1;
		pHit = ro + rd * t;
		phi = mod(atan(pHit.z, pHit.x), TWO_PI);
		if (abs(pHit.x) > yMaxPercent || abs(pHit.y) > yMaxPercent || abs(pHit.z) > yMaxPercent || phi > phiMaxRadians)
			t = INFINITY;
	}
	
	n = vec3(2.0 * pHit.x, -1.0, -2.0 * pHit.z);
	n = dot(rd, n) < 0.0 ? n : -n; // flip normal if it is facing away from us
		
	return t;
}
`;j.pathtracing_ellipsoid_intersect=`
//---------------------------------------------------------------------------------
float EllipsoidIntersect( vec3 radii, vec3 pos, vec3 rayOrigin, vec3 rayDirection )
//---------------------------------------------------------------------------------
{
	float t0, t1;
	vec3 oc = rayOrigin - pos;
	vec3 oc2 = oc*oc;
	vec3 ocrd = oc*rayDirection;
	vec3 rd2 = rayDirection*rayDirection;
	vec3 invRad = 1.0/radii;
	vec3 invRad2 = invRad*invRad;

	// quadratic equation coefficients
	float a = dot(rd2, invRad2);
	float b = 2.0*dot(ocrd, invRad2);
	float c = dot(oc2, invRad2) - 1.0;
	solveQuadratic(a, b, c, t0, t1);

	return t0 > 0.0 ? t0 : t1 > 0.0 ? t1 : INFINITY;
}
`;j.pathtracing_opencylinder_intersect=`
//-------------------------------------------------------------------------------------------------------
float OpenCylinderIntersect( vec3 p0, vec3 p1, float rad, vec3 rayOrigin, vec3 rayDirection, out vec3 n )
//-------------------------------------------------------------------------------------------------------
{
	float r2=rad*rad;
	
	vec3 dp=p1-p0;
	vec3 dpt=dp/dot(dp,dp);
	
	vec3 ao=rayOrigin-p0;
	vec3 aoxab=cross(ao,dpt);
	vec3 vxab=cross(rayDirection,dpt);
	float ab2=dot(dpt,dpt);
	float a=2.0*dot(vxab,vxab);
	float ra=1.0/a;
	float b=2.0*dot(vxab,aoxab);
	float c=dot(aoxab,aoxab)-r2*ab2;
	
	float det=b*b-2.0*a*c;
	
	if (det<0.0) 
		return INFINITY;
	
	det=sqrt(det);
	
	float t0 = (-b-det)*ra;
	float t1 = (-b+det)*ra;
	
	vec3 ip;
	vec3 lp;
	float ct;
	if (t0 > 0.0)
	{
		ip=rayOrigin+rayDirection*t0;
		lp=ip-p0;
		ct=dot(lp,dpt);
		if((ct>0.0)&&(ct<1.0))
		{
			n=ip-(p0+dp*ct);
			return t0;
		}
	}
	
	if (t1 > 0.0)
	{
		ip=rayOrigin+rayDirection*t1;
		lp=ip-p0;
		ct=dot(lp,dpt);
		if((ct>0.0)&&(ct<1.0))
		{
		     	n=(p0+dp*ct)-ip;
			return t1;
		}
	}
	
	return INFINITY;
}
`;j.pathtracing_cappedcylinder_intersect=`
//---------------------------------------------------------------------------------------------------------
float CappedCylinderIntersect( vec3 p0, vec3 p1, float rad, vec3 rayOrigin, vec3 rayDirection, out vec3 n )
//---------------------------------------------------------------------------------------------------------
{
	float r2=rad*rad;
	
	vec3 dp=p1-p0;
	vec3 dpt=dp/dot(dp,dp);
	
	vec3 ao=rayOrigin-p0;
	vec3 aoxab=cross(ao,dpt);
	vec3 vxab=cross(rayDirection,dpt);
	float ab2=dot(dpt,dpt);
	float a=2.0*dot(vxab,vxab);
	float ra=1.0/a;
	float b=2.0*dot(vxab,aoxab);
	float c=dot(aoxab,aoxab)-r2*ab2;
	
	float det=b*b-2.0*a*c;
	
	if(det<0.0)
		return INFINITY;
	
	det=sqrt(det);
	
	float t0=(-b-det)*ra;
	float t1=(-b+det)*ra;
	
	vec3 ip;
	vec3 lp;
	float ct;
	float result = INFINITY;
	
	// Cylinder caps
	// disk0
	vec3 diskNormal = normalize(dp);
	float denom = dot(diskNormal, rayDirection);
	vec3 pOrO = p0 - rayOrigin;
	float tDisk0 = dot(pOrO, diskNormal) / denom;
	if (tDisk0 > 0.0)
	{
		vec3 intersectPos = rayOrigin + rayDirection * tDisk0;
		vec3 v = intersectPos - p0;
		float d2 = dot(v,v);
		if (d2 <= r2)
		{
			result = tDisk0;
			n = diskNormal;
		}
	}
	
	// disk1
	denom = dot(diskNormal, rayDirection);
	pOrO = p1 - rayOrigin;
	float tDisk1 = dot(pOrO, diskNormal) / denom;
	if (tDisk1 > 0.0)
	{
		vec3 intersectPos = rayOrigin + rayDirection * tDisk1;
		vec3 v = intersectPos - p1;
		float d2 = dot(v,v);
		if (d2 <= r2 && tDisk1 < result)
		{
			result = tDisk1;
			n = diskNormal;
		}
	}
	
	// Cylinder body
	if (t1 > 0.0)
	{
		ip=rayOrigin+rayDirection*t1;
		lp=ip-p0;
		ct=dot(lp,dpt);
		if(ct>0.0 && ct<1.0 && t1<result)
		{
			result = t1;
		     	n=(p0+dp*ct)-ip;
		}
	}
	
	if (t0 > 0.0)
	{
		ip=rayOrigin+rayDirection*t0;
		lp=ip-p0;
		ct=dot(lp,dpt);
		if(ct>0.0 && ct<1.0 && t0<result)
		{
			result = t0;
			n=ip-(p0+dp*ct);
		}
	}
	
	return result;
}
`;j.pathtracing_cone_intersect=`
//--------------------------------------------------------------------------------------------------------
float ConeIntersect( vec3 p0, float r0, vec3 p1, float r1, vec3 rayOrigin, vec3 rayDirection, out vec3 n )
//-------------------------------------------------------------------------------------------------------- 
{
	r0 += 0.1;
	vec3 locX;
	vec3 locY;
	vec3 locZ=-(p1-p0)/(1.0 - r1/r0);
	
	rayOrigin-=p0-locZ;
	
	if(abs(locZ.x)<abs(locZ.y))
		locX=vec3(1,0,0);
	else
		locX=vec3(0,1,0);
		
	float len=length(locZ);
	locZ=normalize(locZ)/len;
	locY=normalize(cross(locX,locZ))/r0;
	locX=normalize(cross(locY,locZ))/r0;
	
	mat3 tm;
	tm[0]=locX;
	tm[1]=locY;
	tm[2]=locZ;
	
	rayDirection*=tm;
	rayOrigin*=tm;
	
	float dx=rayDirection.x;
	float dy=rayDirection.y;
	float dz=rayDirection.z;
	
	float x0=rayOrigin.x;
	float y0=rayOrigin.y;
	float z0=rayOrigin.z;
	
	float x02=x0*x0;
	float y02=y0*y0;
	float z02=z0*z0;
	
	float dx2=dx*dx;
	float dy2=dy*dy;
	float dz2=dz*dz;
	
	float det=(
		-2.0*x0*dx*z0*dz
		+2.0*x0*dx*y0*dy
		-2.0*z0*dz*y0*dy
		+dz2*x02
		+dz2*y02
		+dx2*z02
		+dy2*z02
		-dy2*x02
		-dx2*y02
        );
	
	if(det<0.0)
		return INFINITY;
		
	float t0=(-x0*dx+z0*dz-y0*dy-sqrt(abs(det)))/(dx2-dz2+dy2);
	float t1=(-x0*dx+z0*dz-y0*dy+sqrt(abs(det)))/(dx2-dz2+dy2);
	vec3 pt0=rayOrigin+t0*rayDirection;
	vec3 pt1=rayOrigin+t1*rayDirection;
	
	if(t0>0.0 && pt0.z>r1/r0 && pt0.z<1.0)
	{
		n=pt0;
		n.z=0.0;
		n=normalize(n);
		n.z=-pt0.z/abs(pt0.z);
		n=normalize(n);
		n=tm*n;
		return t0;
	}
        if(t1>0.0 && pt1.z>r1/r0 && pt1.z<1.0)
	{
		n=pt1;
		n.z=0.0;
		n=normalize(n);
		n.z=-pt1.z/abs(pt1.z);
		n=normalize(n);
		n=tm*-n;
		return t1;
	}
	
	return INFINITY;	
}
`;j.pathtracing_capsule_intersect=`
//-----------------------------------------------------------------------------------------------------------
float CapsuleIntersect( vec3 p0, float r0, vec3 p1, float r1, vec3 rayOrigin, vec3 rayDirection, out vec3 n )
//-----------------------------------------------------------------------------------------------------------
{
	/*
	// used for ConeIntersect below, if different radius sphere end-caps are desired
	vec3 l  = p1-p0;
	float ld = length(l);
	l=l/ld;
	float d= r0-r1;
	float sa = d/ld;
	float h0 = r0*sa;
	float h1 = r1*sa;
	float cr0 = sqrt(r0*r0-h0*h0);
	float cr1 = sqrt(r1*r1-h1*h1);
	vec3 coneP0=p0+l*h0;
	vec3 coneP1=p1+l*h1;
	*/
	
	float t0=INFINITY;
	    
	float t1;
	vec3 uv1;
	vec3 n1;
	//t1 = ConeIntersect(coneP0,cr0,coneP1,cr1,rayOrigin, rayDirection,n1);
	t1 = OpenCylinderIntersect(p0,p1,r0,rayOrigin, rayDirection,n1);
	if(t1<t0)
	{
		t0=t1;
		n=n1;
	}
	t1 = SphereIntersect(r0,p0,rayOrigin, rayDirection);
	if(t1<t0)
	{
		t0=t1;
		n=(rayOrigin + rayDirection * t1) - p0;
	}
	t1 = SphereIntersect(r1,p1,rayOrigin, rayDirection);
	if(t1<t0)
	{
		t0=t1;
		n=(rayOrigin + rayDirection * t1) - p1;
	}
	    
	return t0;
}
`;j.pathtracing_paraboloid_intersect=`
//-----------------------------------------------------------------------------------------------------------
float ParaboloidIntersect( float rad, float height, vec3 pos, vec3 rayOrigin, vec3 rayDirection, out vec3 n )
//-----------------------------------------------------------------------------------------------------------
{
	vec3 rd = rayDirection;
	vec3 ro = rayOrigin - pos;
	float k = height / (rad * rad);
	
	// quadratic equation coefficients
	float a = k * (rd.x * rd.x + rd.z * rd.z);
	float b = k * 2.0 * (rd.x * ro.x + rd.z * ro.z) - rd.y;
	float c = k * (ro.x * ro.x + ro.z * ro.z) - ro.y;
	float t0, t1;
	solveQuadratic(a, b, c, t0, t1);
	
	vec3 ip;
	
	if (t0 > 0.0)
	{
		ip = ro + rd * t0;
		n = vec3( 2.0 * ip.x, -1.0 / k, 2.0 * ip.z );
		// flip normal if it is facing away from us
		n *= sign(-dot(rd, n)) * 2.0 - 1.0; // sign is 0 or 1, map it to -1 and +1
		
		if (ip.y < height)
			return t0;
				
	}
	if (t1 > 0.0)
	{	
		ip = ro + rd * t1;
		n = vec3( 2.0 * ip.x, -1.0 / k, 2.0 * ip.z );
		// flip normal if it is facing away from us
		n *= sign(-dot(rd, n)) * 2.0 - 1.0; // sign is 0 or 1, map it to -1 and +1
		
		if (ip.y < height)
			return t1;		
	}
	
	return INFINITY;	
}
`;j.pathtracing_hyperboloid_intersect=`
//------------------------------------------------------------------------------------------------------------
float HyperboloidIntersect( float rad, float height, vec3 pos, vec3 rayOrigin, vec3 rayDirection, out vec3 n )
//------------------------------------------------------------------------------------------------------------
{
	vec3 rd = rayDirection;
	vec3 ro = rayOrigin - pos;
	float k = height / (rad * rad);
	
	// quadratic equation coefficients
	float a = k * ((rd.x * rd.x) - (rd.y * rd.y) + (rd.z * rd.z));
	float b = k * 2.0 * ( (rd.x * ro.x) - (rd.y * ro.y) + (rd.z * ro.z) );
	float c = k * ((ro.x * ro.x) - (ro.y * ro.y) + (ro.z * ro.z)) - (rad * rad);
	
	float t0, t1;
	solveQuadratic(a, b, c, t0, t1);
	
	vec3 ip;
	
	if (t0 > 0.0)
	{
		ip = ro + rd * t0;
		n = vec3( 2.0 * ip.x, -2.0 * ip.y, 2.0 * ip.z );
		// flip normal if it is facing away from us
		n *= sign(-dot(rd, n)) * 2.0 - 1.0; // sign is 0 or 1, map it to -1 and +1
		
		if (abs(ip.y) < height)
			return t0;		
	}
	if (t1 > 0.0)
	{	
		ip = ro + rd * t1;
		n = vec3( 2.0 * ip.x, -2.0 * ip.y, 2.0 * ip.z );
		// flip normal if it is facing away from us
		n *= sign(-dot(rd, n)) * 2.0 - 1.0; // sign is 0 or 1, map it to -1 and +1
		
		if (abs(ip.y) < height)
			return t1;	
	}
	
	return INFINITY;	
}
`;j.pathtracing_hyperbolic_paraboloid_intersect=`
//---------------------------------------------------------------------------------------------------------------------
float HyperbolicParaboloidIntersect( float rad, float height, vec3 pos, vec3 rayOrigin, vec3 rayDirection, out vec3 n )
//---------------------------------------------------------------------------------------------------------------------
{
	vec3 rd = rayDirection;
	vec3 ro = rayOrigin - pos;
	float k = height / (rad * rad);
	
	// quadratic equation coefficients
	float a = k * (rd.x * rd.x - rd.z * rd.z);
	float b = k * 2.0 * (rd.x * ro.x - rd.z * ro.z) - rd.y;
	float c = k * (ro.x * ro.x - ro.z * ro.z) - ro.y;
	
	float t0, t1;
	solveQuadratic(a, b, c, t0, t1);
	
	vec3 ip;
	if (t0 > 0.0)
	{
		ip = ro + rd * t0;
		n = vec3( 2.0 * ip.x, -1.0 / k, -2.0 * ip.z );
		// flip normal if it is facing away from us
		n *= sign(-dot(rd, n)) * 2.0 - 1.0; // sign is 0 or 1, map it to -1 and +1
		
		if (abs(ip.x) < height && abs(ip.y) < height && abs(ip.z) < height)
			return t0;		
	}
	if (t1 > 0.0)
	{	
		ip = ro + rd * t1;
		n = vec3( 2.0 * ip.x, -1.0 / k, -2.0 * ip.z );
		// flip normal if it is facing away from us
		n *= sign(-dot(rd, n)) * 2.0 - 1.0; // sign is 0 or 1, map it to -1 and +1
		
		if (abs(ip.x) < height && abs(ip.y) < height && abs(ip.z) < height)
			return t1;		
	}
		
	return INFINITY;	
}
`;j.pathtracing_unit_torus_intersect=`

// The following Torus quartic solver algo/code is from https://www.shadertoy.com/view/ssc3Dn by Shadertoy user 'mla'

float sgn(float x) 
{
	return x < 0.0 ? -1.0 : 1.0; // Return 1.0 for x == 0.0
}

float evalquadratic(float x, float A, float B, float C) 
{
  	return (A * x + B) * x + C;
}

float evalcubic(float x, float A, float B, float C, float D) 
{
  	return ((A * x + B) * x + C) * x + D;
}

// Quadratic solver from Kahan
int quadratic(float A, float B, float C, out vec2 res) 
{
  	float b = -0.5 * B, b2 = b * b;
  	float q = b2 - A * C;
  	if (q < 0.0) return 0;
  	float r = b + sgn(b) * sqrt(q);
  	if (r == 0.0) 
	{
  		res[0] = C / A;
    		res[1] = -res[0];
  	} 
	else 
	{
    		res[0] = C / r;
    		res[1] = r / A;
  	}

  	return 2;
}

// Numerical Recipes algorithm for solving cubic equation
int cubic(float a, float b, float c, float d, out vec3 res) 
{
  	if (a == 0.0) 
  	{
    		return quadratic(b, c, d, res.xy);
  	}
  	if (d == 0.0) 
  	{
    		res.x = 0.0;
    		return 1 + quadratic(a, b, c, res.yz);
  	}
  	float tmp = a; a = b / tmp; b = c / tmp; c = d / tmp;
  	// solve x^3 + ax^2 + bx + c = 0
  	float Q = (a * a - 3.0 * b) / 9.0;
  	float R = (2.0 * a * a * a - 9.0 * a * b + 27.0 * c) / 54.0;
  	float R2 = R * R, Q3 = Q * Q * Q;
  	if (R2 < Q3) 
  	{
    		float X = clamp(R / sqrt(Q3), -1.0, 1.0);
    		float theta = acos(X);
    		float S = sqrt(Q); // Q must be positive since 0 <= R2 < Q3
    		res[0] = -2.0 *S *cos(theta / 3.0) - a / 3.0;
    		res[1] = -2.0 *S *cos((theta + 2.0 * PI) / 3.0) - a / 3.0;
    		res[2] = -2.0 *S *cos((theta + 4.0 * PI) / 3.0) - a / 3.0;
    		return 3;
  	} 
  	else 
  	{
    		float alpha = -sgn(R) * pow(abs(R) + sqrt(R2 - Q3), 0.3333);
    		float beta = alpha == 0.0 ? 0.0 : Q / alpha;
    		res[0] = alpha + beta - a / 3.0;
    		return 1;
  	}
}

/* float qcubic(float B, float C, float D) {
  vec3 roots;
  int nroots = cubic(1.0,B,C,D,roots);
  // Sort into descending order
  if (nroots > 1 && roots.x < roots.y) roots.xy = roots.yx;
  if (nroots > 2) {
    if (roots.y < roots.z) roots.yz = roots.zy;
    if (roots.x < roots.y) roots.xy = roots.yx;
  }
  // And select the largest
  float psi = roots[0];
  psi = max(1e-6,psi);
  // and give a quick polish with Newton-Raphson
  for (int i = 0; i < 3; i++) {
    float delta = evalcubic(psi,1.0,B,C,D)/evalquadratic(psi,3.0,2.0*B,C);
    psi -= delta;
  }
  return psi;
} */

float qcubic(float B, float C, float D) 
{
  	vec3 roots;
  	int nroots = cubic(1.0, B, C, D, roots);
  	// Select the largest
  	float psi = roots[0];
  	if (nroots > 1) psi = max(psi, roots[1]);
  	if (nroots > 2) psi = max(psi, roots[2]);
  
  	// Give a quick polish with Newton-Raphson
  	float delta;
	delta = evalcubic(psi, 1.0, B, C, D) / evalquadratic(psi, 3.0, 2.0 * B, C);
	psi -= delta;
	delta = evalcubic(psi, 1.0, B, C, D) / evalquadratic(psi, 3.0, 2.0 * B, C);
    	psi -= delta;
  
  	return psi;
}

// The Lanczos quartic method
int lquartic(float c1, float c2, float c3, float c4, out vec4 res) 
{
  	float alpha = 0.5 * c1;
  	float A = c2 - alpha * alpha;
  	float B = c3 - alpha * A;
  	float a, b, beta, psi;
  	psi = qcubic(2.0 * A - alpha * alpha, A * A + 2.0 * B * alpha - 4.0 * c4, -B * B);
  	// There _should_ be a root >= 0, but sometimes the cubic
  	// solver misses it (probably a double root around zero).
  	psi = max(0.0, psi);
  	a = sqrt(psi);
  	beta = 0.5 * (A + psi);
  	if (psi <= 0.0) 
  	{
    		b = sqrt(max(beta * beta - c4, 0.0));
  	} 
  	else 
  	{
    		b = 0.5 * a * (alpha - B / psi);
  	}

  	int resn = quadratic(1.0, alpha + a, beta + b, res.xy);
  	vec2 tmp;
  	if (quadratic(1.0, alpha - a, beta - b, tmp) != 0) 
  	{ 
    		res.zw = res.xy;
    		res.xy = tmp;
    		resn += 2;
  	}

  	return resn;
}

// Note: the parameter below is renamed '_E', because Euler's number 'E' is already defined in 'pathtracing_defines_and_uniforms'
int quartic(float A, float B, float C, float D, float _E, out vec4 roots) 
{
    	int nroots = lquartic(B / A, C / A, D / A, _E / A, roots);
  
  	return nroots;
}


float UnitTorusIntersect(vec3 ro, vec3 rd, float k, out vec3 n) 
{
	// Note: the vec3 'rd' might not be normalized to unit length of 1, 
	//  in order to allow for inverse transform of intersecting rays into Torus' object space
	k = mix(0.5, 1.0, k);
	float torus_R = max(0.0, k); // outer extent of the entire torus/ring
	float torus_r = max(0.01, 1.0 - k); // thickness of circular 'tubing' part of torus/ring
	float torusR2 = torus_R * torus_R;
	float torusr2 = torus_r * torus_r;
	
	float U = dot(rd, rd);
	float V = 2.0 * dot(ro, rd);
	float W = dot(ro, ro) - (torusR2 + torusr2);
	// A*t^4 + B*t^3 + C*t^2 + D*t + _E = 0
	float A = U * U;
	float B = 2.0 * U * V;
	float C = V * V + 2.0 * U * W + 4.0 * torusR2 * rd.z * rd.z;
	float D = 2.0 * V * W + 8.0 * torusR2 * ro.z * rd.z;
// Note: the float below is renamed '_E', because Euler's number 'E' is already defined in 'pathtracing_defines_and_uniforms'
	float _E = W * W + 4.0 * torusR2 * (ro.z * ro.z - torusr2);
	

	vec4 res = vec4(0);
	int nr = quartic(A, B, C, D, _E, res);
	if (nr == 0) return INFINITY;
  	// Sort the roots.
  	if (res.x > res.y) res.xy = res.yx; 
  	if (nr > 2) 
	{
    		if (res.y > res.z) res.yz = res.zy; 
    		if (res.x > res.y) res.xy = res.yx;
  	}
	if (nr > 3) 
	{
		if (res.z > res.w) res.zw = res.wz; 
		if (res.y > res.z) res.yz = res.zy; 
		if (res.x > res.y) res.xy = res.yx; 
	}
  
	float t = INFINITY;
	
	t = (res.w > 0.0) ? res.w : t;	
	t = (res.z > 0.0) ? res.z : t;
	t = (res.y > 0.0) ? res.y : t;	
	t = (res.x > 0.0) ? res.x : t;
		
	vec3 pos = ro + t * rd;
	n = pos * (dot(pos, pos) - torusr2 - torusR2 * vec3(1, 1,-1));

	// float kn = sqrt(torusR2 / dot(pos.xy, pos.xy));
	// pos.xy -= kn * pos.xy;
	// n = pos;
	
  	return t;
}

`;j.pathtracing_quad_intersect=`
float TriangleIntersect( vec3 v0, vec3 v1, vec3 v2, vec3 rayOrigin, vec3 rayDirection, int isDoubleSided )
{
	vec3 edge1 = v1 - v0;
	vec3 edge2 = v2 - v0;
	vec3 pvec = cross(rayDirection, edge2);
	float det = 1.0 / dot(edge1, pvec);
	if ( isDoubleSided == FALSE && det < 0.0 ) 
		return INFINITY;
	vec3 tvec = rayOrigin - v0;
	float u = dot(tvec, pvec) * det;
	vec3 qvec = cross(tvec, edge1);
	float v = dot(rayDirection, qvec) * det;
	float t = dot(edge2, qvec) * det;
	return (u < 0.0 || u > 1.0 || v < 0.0 || u + v > 1.0 || t <= 0.0) ? INFINITY : t;
}
//--------------------------------------------------------------------------------------------------------------
float QuadIntersect( vec3 v0, vec3 v1, vec3 v2, vec3 v3, vec3 rayOrigin, vec3 rayDirection, int isDoubleSided )
//--------------------------------------------------------------------------------------------------------------
{
	return min(TriangleIntersect(v0, v1, v2, rayOrigin, rayDirection, isDoubleSided), 
		   TriangleIntersect(v0, v2, v3, rayOrigin, rayDirection, isDoubleSided));
}
`;j.pathtracing_box_intersect=`
//-----------------------------------------------------------------------------------------------------------------------------
float BoxIntersect( vec3 minCorner, vec3 maxCorner, vec3 rayOrigin, vec3 rayDirection, out vec3 normal, out int isRayExiting )
//-----------------------------------------------------------------------------------------------------------------------------
{
	vec3 invDir = 1.0 / rayDirection;
	vec3 near = (minCorner - rayOrigin) * invDir;
	vec3 far  = (maxCorner - rayOrigin) * invDir;

	vec3 tmin = min(near, far);
	vec3 tmax = max(near, far);

	float t0 = max( max(tmin.x, tmin.y), tmin.z);
	float t1 = min( min(tmax.x, tmax.y), tmax.z);

	if (t0 > t1) return INFINITY;
	if (t0 > 0.0) // if we are outside the box
	{
		normal = -sign(rayDirection) * step(tmin.yzx, tmin) * step(tmin.zxy, tmin);
		isRayExiting = FALSE;
		return t0;
	}
	if (t1 > 0.0) // if we are inside the box
	{
		normal = -sign(rayDirection) * step(tmax, tmax.yzx) * step(tmax, tmax.zxy);
		isRayExiting = TRUE;
		return t1;
	}
	return INFINITY;
}
`;j.pathtracing_box_interior_intersect=`
//--------------------------------------------------------------------------------------------------------------
float BoxInteriorIntersect( vec3 minCorner, vec3 maxCorner, vec3 rayOrigin, vec3 rayDirection, out vec3 normal )
//--------------------------------------------------------------------------------------------------------------
{
	vec3 invDir = 1.0 / rayDirection;
	vec3 near = (minCorner - rayOrigin) * invDir;
	vec3 far  = (maxCorner - rayOrigin) * invDir;
	
	vec3 tmin = min(near, far);
	vec3 tmax = max(near, far);
	
	float t0 = max( max(tmin.x, tmin.y), tmin.z);
	float t1 = min( min(tmax.x, tmax.y), tmax.z);
	
	if (t0 > t1) return INFINITY;

	/*
	if (t0 > 0.0) // if we are outside the box
	{
		normal = -sign(rayDirection) * step(tmin.yzx, tmin) * step(tmin.zxy, tmin);
		return t0;	
	}
	*/

	if (t1 > 0.0) // if we are inside the box
	{
		normal = -sign(rayDirection) * step(tmax, tmax.yzx) * step(tmax, tmax.zxy);
		return t1;
	}

	return INFINITY;
}
`;j.pathtracing_boundingbox_intersect=`
//--------------------------------------------------------------------------------------
float BoundingBoxIntersect( vec3 minCorner, vec3 maxCorner, vec3 rayOrigin, vec3 invDir )
//--------------------------------------------------------------------------------------
{
	vec3 near = (minCorner - rayOrigin) * invDir;
	vec3 far  = (maxCorner - rayOrigin) * invDir;
	
	vec3 tmin = min(near, far);
	vec3 tmax = max(near, far);
	
	float t0 = max( max(tmin.x, tmin.y), tmin.z);
	float t1 = min( min(tmax.x, tmax.y), tmax.z);
	
	return max(t0, 0.0) > t1 ? INFINITY : t0;
}
`;j.pathtracing_bvhTriangle_intersect=`
//-------------------------------------------------------------------------------------------------------------------
float BVH_TriangleIntersect( vec3 v0, vec3 v1, vec3 v2, vec3 rayOrigin, vec3 rayDirection, out float u, out float v )
//-------------------------------------------------------------------------------------------------------------------
{
	vec3 edge1 = v1 - v0;
	vec3 edge2 = v2 - v0;
	vec3 pvec = cross(rayDirection, edge2);
	float det = 1.0 / dot(edge1, pvec);
	vec3 tvec = rayOrigin - v0;
	u = dot(tvec, pvec) * det;
	vec3 qvec = cross(tvec, edge1);
	v = dot(rayDirection, qvec) * det;
	float t = dot(edge2, qvec) * det;
	return (det < 0.0 || u < 0.0 || u > 1.0 || v < 0.0 || u + v > 1.0 || t <= 0.0) ? INFINITY : t;
}
`;j.pathtracing_bvhDoubleSidedTriangle_intersect=`
//------------------------------------------------------------------------------------------------------------------------------
float BVH_DoubleSidedTriangleIntersect( vec3 v0, vec3 v1, vec3 v2, vec3 rayOrigin, vec3 rayDirection, out float u, out float v )
//------------------------------------------------------------------------------------------------------------------------------
{
	vec3 edge1 = v1 - v0;
	vec3 edge2 = v2 - v0;
	vec3 pvec = cross(rayDirection, edge2);
	float det = 1.0 / dot(edge1, pvec);
	vec3 tvec = rayOrigin - v0;
	u = dot(tvec, pvec) * det;
	vec3 qvec = cross(tvec, edge1);
	v = dot(rayDirection, qvec) * det; 
	float t = dot(edge2, qvec) * det;
	return (u < 0.0 || u > 1.0 || v < 0.0 || u + v > 1.0 || t <= 0.0) ? INFINITY : t;
}
`;j.pathtracing_physical_sky_functions=`
float RayleighPhase(float cosTheta)
{
	return THREE_OVER_SIXTEENPI * (1.0 + (cosTheta * cosTheta));
}

float hgPhase(float cosTheta, float g)
{
        float g2 = g * g;
        float inverse = 1.0 / pow(max(0.0, 1.0 - 2.0 * g * cosTheta + g2), 1.5);
	return ONE_OVER_FOURPI * ((1.0 - g2) * inverse);
}

vec3 totalMie()
{
	float c = (0.2 * TURBIDITY) * 10E-18;
	return 0.434 * c * MIE_CONST;
}

float SunIntensity(float zenithAngleCos)
{
	zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
	return SUN_POWER * max( 0.0, 1.0 - pow( E, -( ( CUTOFF_ANGLE - acos( zenithAngleCos ) ) / STEEPNESS ) ) );
}

vec3 Get_Sky_Color(vec3 rayDir)
{
	vec3 viewDirection = normalize(rayDir);
	
	/* most of the following code is borrowed from the three.js shader file: SkyShader.js */
    	// Cosine angles
	float cosViewSunAngle = dot(viewDirection, uSunDirection);
    	float cosSunUpAngle = dot(UP_VECTOR, uSunDirection); // allowed to be negative: + is daytime, - is nighttime
    	float cosUpViewAngle = dot(UP_VECTOR, viewDirection);
	
        // Get sun intensity based on how high in the sky it is
    	float sunE = SunIntensity(cosSunUpAngle);
        
	// extinction (absorbtion + out scattering)
	// rayleigh coefficients
    	vec3 rayleighAtX = TOTAL_RAYLEIGH * RAYLEIGH_COEFFICIENT;
    
	// mie coefficients
	vec3 mieAtX = totalMie() * MIE_COEFFICIENT;  
    
	// optical length
	float zenithAngle = acos( max( 0.0, dot( UP_VECTOR, viewDirection ) ) );
	float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / PI ), -1.253 ) );
	float rayleighOpticalLength = RAYLEIGH_ZENITH_LENGTH * inverse;
	float mieOpticalLength = MIE_ZENITH_LENGTH * inverse;
	// combined extinction factor	
	vec3 Fex = exp(-(rayleighAtX * rayleighOpticalLength + mieAtX * mieOpticalLength));
	// in scattering
	vec3 betaRTheta = rayleighAtX * RayleighPhase(cosViewSunAngle * 0.5 + 0.5);
	vec3 betaMTheta = mieAtX * hgPhase(cosViewSunAngle, MIE_DIRECTIONAL_G);
	
	vec3 Lin = pow( sunE * ( ( betaRTheta + betaMTheta ) / ( rayleighAtX + mieAtX ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
	Lin *= mix( vec3( 1.0 ), pow( sunE * ( ( betaRTheta + betaMTheta ) / ( rayleighAtX + mieAtX ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - cosSunUpAngle, 5.0 ), 0.0, 1.0 ) );
	// nightsky
	float theta = acos( viewDirection.y ); // elevation --> y-axis, [-pi/2, pi/2]
	float phi = atan( viewDirection.z, viewDirection.x ); // azimuth --> x-axis [-pi/2, pi/2]
	vec2 uv = vec2( phi, theta ) / vec2( 2.0 * PI, PI ) + vec2( 0.5, 0.0 );
	vec3 L0 = vec3( 0.1 ) * Fex;
	// composition + solar disc
	float sundisk = smoothstep( SUN_ANGULAR_DIAMETER_COS, SUN_ANGULAR_DIAMETER_COS + 0.00002, cosViewSunAngle );
	L0 += ( sunE * 19000.0 * Fex ) * sundisk;
	vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );
	float sunfade = 1.0 - clamp( 1.0 - exp( ( uSunDirection.y / 450000.0 ) ), 0.0, 1.0 );
	vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * sunfade ) ) ) );
	return retColor;
}
`;j.pathtracing_random_functions=`
// globals used in rand() function
vec4 randVec4; // samples and holds the RGBA blueNoise texture value for this pixel
float randNumber; // the final randomly generated number (range: 0.0 to 1.0)
float counter; // will get incremented by 1 on each call to rand()
int channel; // the final selected color channel to use for rand() calc (range: 0 to 3, corresponds to R,G,B, or A)
float rand()
{
	counter++; // increment counter by 1 on every call to rand()
	// cycles through channels, if modulus is 1.0, channel will always be 0 (the R color channel)
	channel = int(mod(counter, 2.0)); 
	// but if modulus was 4.0, channel will cycle through all available channels: 0,1,2,3,0,1,2,3, and so on...
	randNumber = randVec4[channel]; // get value stored in channel 0:R, 1:G, 2:B, or 3:A
	return fract(randNumber); // we're only interested in randNumber's fractional value between 0.0 (inclusive) and 1.0 (non-inclusive)
	//return clamp(randNumber,0.0,0.999999999); // we're only interested in randNumber's fractional value between 0.0 (inclusive) and 1.0 (non-inclusive)
}
// from iq https://www.shadertoy.com/view/4tXyWN
// global seed used in rng() function
uvec2 seed;
float rng()
{
	seed += uvec2(1);
    	uvec2 q = 1103515245U * ( (seed >> 1U) ^ (seed.yx) );
    	uint  n = 1103515245U * ( (q.x) ^ (q.y >> 3U) );
	return float(n) * ONE_OVER_MAX_INT;// (1.0 / float(0xffffffffU));
}

vec3 randomSphereDirection()
{
    	float up = rng() * 2.0 - 1.0; // range: -1 to +1
	float over = sqrt( max(0.0, 1.0 - up * up) );
	float around = rng() * TWO_PI;
	return normalize(vec3(cos(around) * over, up, sin(around) * over));	
}

/* vec3 randomCosWeightedDirectionInHemisphere(vec3 nl)
{
	float r0 = sqrt(rng());
	float phi = rng() * TWO_PI;
	float x = r0 * cos(phi);
	float y = r0 * sin(phi);
	float z = sqrt(1.0 - r0 * r0);
	vec3 T = normalize(cross(nl.yzx, nl));
	vec3 B = cross(nl, T);
	return normalize(T * x + B * y + nl * z);
} */

//the following alternative skips the creation of tangent and bi-tangent vectors T and B
vec3 randomCosWeightedDirectionInHemisphere(vec3 nl)
{
	float z = rng() * 2.0 - 1.0;
	float phi = rng() * TWO_PI;
	float r = sqrt(1.0 - z * z);
    	return normalize(nl + vec3(r * cos(phi), r * sin(phi), z));
}

vec3 randomDirectionInSpecularLobe(vec3 reflectionDir, float roughness)
{
	float z = rng() * 2.0 - 1.0;
	float phi = rng() * TWO_PI;
	float r = sqrt(1.0 - z * z);
    	vec3 cosDiffuseDir = normalize(reflectionDir + vec3(r * cos(phi), r * sin(phi), z));
	return normalize( mix(reflectionDir, cosDiffuseDir, roughness * roughness) );
}

/* vec3 randomDirectionInPhongSpecular(vec3 reflectionDir, float shininess)
{
	float cosTheta = pow(rng(), 1.0 / (2.0 + shininess));
	float sinTheta = sqrt(1.0 - cosTheta * cosTheta);
	float phi = rng() * TWO_PI;
	float x = sinTheta * cos(phi);
	float y = sinTheta * sin(phi);
	vec3 T = normalize(cross(reflectionDir.yzx, reflectionDir));
	vec3 B = cross(reflectionDir, T);
	return normalize(T * x + B * y + reflectionDir * cosTheta);
} */

/* 
// this is my crude attempt at a Fibonacci-spiral sample point pattern on a hemisphere above a diffuse surface
#define N_POINTS 64.0 //64.0
vec3 randomCosWeightedDirectionInHemisphere(vec3 nl)
{
	float i = N_POINTS * rng();
			// the Golden angle in radians
	float phi = mod(i * 2.39996322972865332, TWO_PI);
	float r = sqrt(i / N_POINTS); // sqrt pushes points outward to prevent clumping in center of disk
	float x = r * cos(phi);
	float y = r * sin(phi);
	float z = sqrt(1.0 - r * r);
	
	vec3 U = normalize( cross( abs(nl.y) < 0.9 ? vec3(0, 1, 0) : vec3(0, 0, 1), nl ) );
	vec3 V = cross(nl, U);
	return normalize(x * U + y * V + z * nl);
} */

/* 
// like the function several functions above, 
// the following alternative skips the creation of tangent and bi-tangent vectors T and B 
vec3 randomCosWeightedDirectionInHemisphere(vec3 nl)
{
	float phi = rng() * TWO_PI;
	float theta = rng() * 2.0 - 1.0;
	return normalize(nl + vec3(sqrt(1.0 - theta * theta) * vec2(cos(phi), sin(phi)), theta));
} */

`;j.pathtracing_sample_sphere_light=`
vec3 sampleSphereLight(vec3 x, vec3 nl, Sphere light, out float weight)
{
	vec3 dirToLight = (light.position - x); // no normalize (for distance calc below)
	float cos_alpha_max = sqrt(1.0 - clamp((light.radius * light.radius) / dot(dirToLight, dirToLight), 0.0, 1.0));
	float r0 = rng();
	float cos_alpha = 1.0 - r0 + r0 * cos_alpha_max;//mix( cos_alpha_max, 1.0, rng() );
	// * 0.75 below ensures shadow rays don't miss smaller sphere lights, due to shader float precision
	float sin_alpha = sqrt(max(0.0, 1.0 - cos_alpha * cos_alpha)) * 0.75; 
	float phi = rng() * TWO_PI;
	dirToLight = normalize(dirToLight);
	
	vec3 U = normalize( cross( abs(dirToLight.y) < 0.9 ? vec3(0, 1, 0) : vec3(0, 0, 1), dirToLight ) );
	vec3 V = cross(dirToLight, U);
	
	vec3 sampleDir = normalize(U * cos(phi) * sin_alpha + V * sin(phi) * sin_alpha + dirToLight * cos_alpha);
	weight = clamp(2.0 * (1.0 - cos_alpha_max) * max(0.0, dot(nl, sampleDir)), 0.0, 1.0);
	
	return sampleDir;
}
`;j.pathtracing_sample_quad_light=`
vec3 sampleQuadLight(vec3 x, vec3 nl, Quad light, out float weight)
{
	vec3 randPointOnLight;
	randPointOnLight.x = mix(light.v0.x, light.v2.x, clamp(rng(), 0.1, 0.9));
	randPointOnLight.y = light.v0.y;
	randPointOnLight.z = mix(light.v0.z, light.v2.z, clamp(rng(), 0.1, 0.9));
	vec3 dirToLight = randPointOnLight - x;
	float r2 = distance(light.v0, light.v1) * distance(light.v0, light.v3);
	float d2 = dot(dirToLight, dirToLight);
	float cos_a_max = sqrt(1.0 - clamp( r2 / d2, 0.0, 1.0));
	dirToLight = normalize(dirToLight);
	float dotNlRayDir = max(0.0, dot(nl, dirToLight)); 
	weight =  2.0 * (1.0 - cos_a_max) * max(0.0, -dot(dirToLight, light.normal)) * dotNlRayDir; 
	weight = clamp(weight, 0.0, 1.0);
	return dirToLight;
}
`;j.pathtracing_calc_fresnel_reflectance=`
float calcFresnelReflectance(vec3 rayDirection, vec3 n, float etai, float etat, out float ratioIoR)
{
	float temp = etai;
	float cosi = clamp(dot(rayDirection, n), -1.0, 1.0);
	if (cosi > 0.0)
	{
		etai = etat;
		etat = temp;
	}
	
	ratioIoR = etai / etat;
	float sint2 = ratioIoR * ratioIoR * (1.0 - (cosi * cosi));
	if (sint2 >= 1.0) 
		return 1.0; // total internal reflection
	float cost = sqrt(1.0 - sint2);
	cosi = abs(cosi);
	float Rs = ((etat * cosi) - (etai * cost)) / ((etat * cosi) + (etai * cost));
	float Rp = ((etai * cosi) - (etat * cost)) / ((etai * cosi) + (etat * cost));
	return clamp( ((Rs * Rs) + (Rp * Rp)) * 0.5, 0.0, 1.0 );
}
`;j.pathtracing_main=`
// tentFilter from Peter Shirley's 'Realistic Ray Tracing (2nd Edition)' book, pg. 60
float tentFilter(float x) // input: x: a random float(0.0 to 1.0), output: a filtered float (-1.0 to +1.0)
{
	return (x < 0.5) ? sqrt(2.0 * x) - 1.0 : 1.0 - sqrt(2.0 - (2.0 * x));
}

void main( void )
{
	vec3 camRight   = vec3( uCameraMatrix[0][0],  uCameraMatrix[0][1],  uCameraMatrix[0][2]);
	vec3 camUp      = vec3( uCameraMatrix[1][0],  uCameraMatrix[1][1],  uCameraMatrix[1][2]);
	vec3 camForward = vec3(-uCameraMatrix[2][0], -uCameraMatrix[2][1], -uCameraMatrix[2][2]);
	// the following is not needed - three.js has a built-in uniform named cameraPosition
	//vec3 camPos   = vec3( uCameraMatrix[3][0],  uCameraMatrix[3][1],  uCameraMatrix[3][2]);

	// calculate unique seed for rng() function
	seed = uvec2(uFrameCounter, uFrameCounter + 1.0) * uvec2(gl_FragCoord);
	// initialize rand() variables
	counter = -1.0; // will get incremented by 1 on each call to rand()
	channel = 0; // the final selected color channel to use for rand() calc (range: 0 to 3, corresponds to R,G,B, or A)
	randNumber = 0.0; // the final randomly-generated number (range: 0.0 to 1.0)
	randVec4 = vec4(0); // samples and holds the RGBA blueNoise texture value for this pixel
	randVec4 = texelFetch(tBlueNoiseTexture, ivec2(mod(floor(gl_FragCoord.xy) + floor(uRandomVec2 * 256.0), 256.0)), 0);
	
	vec2 pixelOffset;
	if (uSampleCounter < 100.0)
	{
		pixelOffset = vec2( tentFilter(rand()), tentFilter(rand()) );
		pixelOffset *= uCameraIsMoving ? 0.5 : 1.0;
	}	
	else pixelOffset = vec2( tentFilter(uRandomVec2.x), tentFilter(uRandomVec2.y) );
	
	// we must map pixelPos into the range -1.0 to +1.0: (-1.0,-1.0) is bottom-left screen corner, (1.0,1.0) is top-right
	vec2 pixelPos = ((gl_FragCoord.xy + vec2(0.5) + pixelOffset) / uResolution) * 2.0 - 1.0;

	vec3 rayDir = uUseOrthographicCamera ? camForward :
		      normalize( pixelPos.x * camRight * uULen + pixelPos.y * camUp * uVLen + camForward ); 
					       
	// depth of field
	vec3 focalPoint = uFocusDistance * rayDir;
	float randomAngle = rng() * TWO_PI; // pick random point on aperture
	float randomRadius = rng() * uApertureSize;
	vec3  randomAperturePos = ( cos(randomAngle) * camRight + sin(randomAngle) * camUp ) * sqrt(randomRadius);
	// point on aperture to focal point
	vec3 finalRayDir = normalize(focalPoint - randomAperturePos);

	rayOrigin = cameraPosition + randomAperturePos;
	rayOrigin += !uUseOrthographicCamera ? vec3(0) : 
		     (camRight * pixelPos.x * uULen * 100.0) + (camUp * pixelPos.y * uVLen * 100.0);
					     
	rayDirection = finalRayDir;
	

	SetupScene();

	// Edge Detection - don't want to blur edges where either surface normals change abruptly (i.e. room wall corners), objects overlap each other (i.e. edge of a foreground sphere in front of another sphere right behind it),
	// or an abrupt color variation on the same smooth surface, even if it has similar surface normals (i.e. checkerboard pattern). Want to keep all of these cases as sharp as possible - no blur filter will be applied.
	vec3 objectNormal = vec3(0);
	vec3 objectColor = vec3(0);
	float objectID = -INFINITY;
	float pixelSharpness = 0.0;

	// perform path tracing and get resulting pixel color
	vec4 currentPixel = vec4( vec3(CalculateRadiance(objectNormal, objectColor, objectID, pixelSharpness)), 0.0 );

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

	
	if (uFrameCounter == 1.0) // camera just moved after being still
	{
		previousPixel.rgb *= (1.0 / uPreviousSampleCount) * 0.5; // essentially previousPixel *= 0.5, like below
		previousPixel.a = 0.0;
		currentPixel.rgb *= 0.5;
	}
	else if (uCameraIsMoving) // camera is currently moving
	{
		previousPixel.rgb *= 0.5; // motion-blur trail amount (old image)
		previousPixel.a = 0.0;
		currentPixel.rgb *= 0.5; // brightness of new image (noisy)
	}

	// if current raytraced pixel didn't return any color value, just use the previous frame's pixel color
	if (currentPixel.rgb == vec3(0.0))
	{
		currentPixel.rgb = previousPixel.rgb;
		previousPixel.rgb *= 0.5;
		currentPixel.rgb *= 0.5;
	}


	if (colorDifference >= 1.0 || normalDifference >= 1.0 || objectDifference >= 1.0)
		pixelSharpness = 1.01;


	currentPixel.a = pixelSharpness;

	// Eventually, all edge-containing pixels' .a (alpha channel) values will converge to 1.01, which keeps them from getting blurred by the box-blur filter, thus retaining sharpness.
	if (previousPixel.a == 1.01)
		currentPixel.a = 1.01;

	pc_fragColor = vec4(previousPixel.rgb + currentPixel.rgb, currentPixel.a);
}
`;var _i=function(){var n=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(d){d.preventDefault(),i(++n%e.children.length)},!1);function t(d){return e.appendChild(d.dom),d}function i(d){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===d?"block":"none";n=d}var r=(performance||Date).now(),a=r,s=0,o=t(new _i.Panel("FPS","#0ff","#002")),l=t(new _i.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new _i.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){s++;var d=(performance||Date).now();if(l.update(d-r,200),d>=a+1e3&&(o.update(s*1e3/(d-a),100),a=d,s=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return d},update:function(){r=this.end()},domElement:e,setMode:i}};_i.Panel=function(n,e,t){var i=1/0,r=0,a=Math.round,s=a(window.devicePixelRatio||1),o=80*s,l=48*s,c=3*s,d=2*s,u=3*s,f=15*s,m=74*s,_=30*s,y=document.createElement("canvas");y.width=o,y.height=l,y.style.cssText="width:80px;height:48px";var p=y.getContext("2d");return p.font="bold "+9*s+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=t,p.fillRect(0,0,o,l),p.fillStyle=e,p.fillText(n,c,d),p.fillRect(u,f,m,_),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(u,f,m,_),{dom:y,update:function(h,b){i=Math.min(i,h),r=Math.max(r,h),p.fillStyle=t,p.globalAlpha=1,p.fillRect(0,0,o,f),p.fillStyle=e,p.fillText(a(h)+" "+n+" ("+a(i)+"-"+a(r)+")",c,d),p.drawImage(y,u+s,f,m-s,_,u,f,m-s,_),p.fillRect(u+m-s,f,s,_),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(u+m-s,f,s,a((1-h/b)*_))}}};const Gp=_i;class Hp{constructor(){fe(this,"commands",{});fe(this,"commandID",0)}sendCommand(e){this.commands[this.commandID]=e,e++}executeCommands(e){e&&(Object.values(this.commands).forEach(async t=>{await e.addGeometry(t.filePath,new C(t.position.x,t.position.y,t.position.z),t.size),e.setGeomRotation(Object.values(e.voxelGeometries).length-1,"x",-90)}),this.commands={})}}const B={tallBox:{geometry:null,material:null,mesh:null},shortBox:{geometry:null,material:null,mesh:null},voxels:{voxelGeometry:null,voxelManager:null},spawnObjectManager:new Hp,pathTracing:{vertexShader:null,fragmentShader:null,material:null,mesh:null,uniforms:{},uniformsGroups:[],geometry:new mn(2,2),scene:new Ji,renderTarget:null,defines:{}},screenCopy:{geometry:new mn(2,2),material:null,mesh:null,uniforms:null,fragmentShader:null,scene:new Ji,renderTarget:null},screenOutput:{geometry:new mn(2,2),material:null,mesh:null,uniforms:null,vertexShader:null,fragmentShader:null,scene:new Ji},oldYawRotation:null,oldPitchRotation:null,isPaused:!1,ableToEngagePointerLock:!0,cameraInfoElement:document.getElementById("cameraInfo"),blueNoiseTexture:null,container:null,stats:new Gp,quadCamera:new Pa(-1,1,1,-1,0,1),sceneIsDynamic:!0,apertureSize:0,focusDistance:132,fileLoader:new Xs,pixelRatio:1,blurRatio:.6,EPS_intersect:.01,canvas:document.getElementById("canvas"),renderer:null,context:null,demoFragmentShaderFileName:"Voxel_Rendering_Fragment.glsl",worldCamera:new Nt(60,document.body.clientWidth/document.body.clientHeight,1,1e3),isUIActive:!1,cameraRotationSpeed:1,cameraFlightSpeed:300,PI_2:Math.PI/2,controls:null,textureLoader:new zp,pixelEdgeSharpness:1,edgeSharpenSpeed:.05,filterDecaySpeed:2e-4,useToneMapping:!0,cameraIsMoving:!1,frameTime:null,elapsedTime:null,needChangePixelResolution:!0,windowIsBeingResized:!1,sampleCounter:0,frameCounter:1,debug:{scene:new Ji,geometry:new vn(1,1,1),material:new yi({color:65280}),mesh:new Ft(new vn(1,1,1),new yi({color:65280}))},clock:new Bp};B.screenCopy.scene.name="screenCopy.scene";B.screenOutput.scene.name="screenOutput.scene";B.pathTracing.scene.name="pathTracing.scene";B.screenCopy.geometry.name="screenCopy.geometry";B.screenOutput.geometry.name="screenOutput.geometry";B.pathTracing.geometry.name="pathTracing.geometry";function lr(n){B.windowIsBeingResized=!0;const e=document.body.clientWidth,t=document.body.clientHeight;B.renderer.setPixelRatio(B.pixelRatio),B.renderer.setSize(e,t),B.fontAspect=e/175*(t/200),B.fontAspect>25&&(B.fontAspect=25),B.fontAspect<4&&(B.fontAspect=4),B.fontAspect*=2,B.pathTracing.uniforms.uResolution.value.x=B.context.drawingBufferWidth,B.pathTracing.uniforms.uResolution.value.y=B.context.drawingBufferHeight,B.pathTracing.renderTarget.setSize(B.context.drawingBufferWidth,B.context.drawingBufferHeight),B.screenCopy.renderTarget.setSize(B.context.drawingBufferWidth,B.context.drawingBufferHeight),B.worldCamera.aspect=e/t,B.fovScale=B.worldCamera.fov*.5*(Math.PI/180),B.pathTracing.uniforms.uVLen.value=Math.tan(B.fovScale),B.pathTracing.uniforms.uULen.value=B.pathTracing.uniforms.uVLen.value*B.worldCamera.aspect,B.mobileShowButtons&&(B.button1Element.style.display="",B.button2Element.style.display="",B.button3Element.style.display="",B.button4Element.style.display="",B.button5Element.style.display="",B.button6Element.style.display="",e<t?(B.button1Element.style.right="36%",B.button2Element.style.right="2%",B.button3Element.style.right="16%",B.button4Element.style.right="16%",B.button5Element.style.right="3%",B.button6Element.style.right="3%",B.button1Element.style.bottom="5%",B.button2Element.style.bottom="5%",B.button3Element.style.bottom="13%",B.button4Element.style.bottom="2%",B.button5Element.style.bottom="25%",B.button6Element.style.bottom="18%"):(B.button1Element.style.right="22%",B.button2Element.style.right="3%",B.button3Element.style.right="11%",B.button4Element.style.right="11%",B.button5Element.style.right="3%",B.button6Element.style.right="3%",B.button1Element.style.bottom="10%",B.button2Element.style.bottom="10%",B.button3Element.style.bottom="26%",B.button4Element.style.bottom="4%",B.button5Element.style.bottom="48%",B.button6Element.style.bottom="34%"))}function kp({pathTracing:n,screenOutput:e,screenCopy:t,EPS_intersect:i,apertureSize:r,focusDistance:a,pixelEdgeSharpness:s,edgeSharpenSpeed:o,filterDecaySpeed:l,sceneIsDynamic:c,useToneMapping:d,blueNoiseTexture:u}){n.uniforms.tPreviousTexture={type:"t",value:t.renderTarget.texture},n.uniforms.tBlueNoiseTexture={type:"t",value:u},n.uniforms.uCameraMatrix={type:"m4",value:new at},n.uniforms.uResolution={type:"v2",value:new Ve},n.uniforms.uRandomVec2={type:"v2",value:new Ve},n.uniforms.uEPS_intersect={type:"f",value:i},n.uniforms.uTime={type:"f",value:0},n.uniforms.uSampleCounter={type:"f",value:0},n.uniforms.uPreviousSampleCount={type:"f",value:1},n.uniforms.uFrameCounter={type:"f",value:1},n.uniforms.uULen={type:"f",value:1},n.uniforms.uVLen={type:"f",value:1},n.uniforms.uApertureSize={type:"f",value:r},n.uniforms.uFocusDistance={type:"f",value:a},n.uniforms.uCameraIsMoving={type:"b1",value:!1},n.uniforms.uUseOrthographicCamera={type:"b1",value:!1},n.uniforms.uBlurRatio={type:"f",value:!1},e.uniforms={tPathTracedImageTexture:{type:"t",value:n.renderTarget.texture},uSampleCounter:{type:"f",value:0},uOneOverSampleCounter:{type:"f",value:0},uPixelEdgeSharpness:{type:"f",value:s},uEdgeSharpenSpeed:{type:"f",value:o},uFilterDecaySpeed:{type:"f",value:l},uSceneIsDynamic:{type:"b1",value:c},uUseToneMapping:{type:"b1",value:d}},t.uniforms={tPathTracedImageTexture:{type:"t",value:n.renderTarget.texture}}}function ls(n){let e=new _n(n.drawingBufferWidth,n.drawingBufferHeight,{minFilter:$e,magFilter:$e,format:xt,type:bt,depthBuffer:!1,stencilBuffer:!1});return e.texture.generateMipmaps=!1,e}function Vp({cameraIsMoving:n,sceneIsDynamic:e,sampleCounter:t,frameCounter:i,cameraRecentlyMoving:r,pathTracingUniforms:a}){return n||(e?t=1:t+=1,i+=1,r=!1),n&&(i+=1,r||(a.uPreviousSampleCount.value=t,i=1,r=!0),t=1),{sampleCounter:t,frameCounter:i}}function Wp({pathTracing:n,elapsedTime:e,cameraIsMoving:t,sampleCounter:i,frameCounter:r,blurRatio:a}){n.uniforms.uTime.value=e,n.uniforms.uCameraIsMoving.value=t,n.uniforms.uSampleCounter.value=i,n.uniforms.uFrameCounter.value=r,n.uniforms.uRandomVec2.value.set(Math.random(),Math.random()),n.uniforms.uBlurRatio.value=a}function ua(n,e){n.fileLoader.load(e.vertexShaderPath,function(t){n.fileLoader.load(e.fragmentShaderPath,function(i){const r=new xn({uniforms:e.uniforms,uniformsGroups:e.uniformsGroups||[],defines:e.defines||{},vertexShader:t,fragmentShader:i,depthTest:!1,depthWrite:!1}),a=new Ft(e.geometry,r);e.scene.add(a),e.specialHandling&&e.specialHandling(a)})})}function Xp(n){n.style.cursor="default",n.style.userSelect="none",n.style.MozUserSelect="none"}var qp={KeyA:!1,KeyB:!1,KeyC:!1,KeyD:!1,KeyE:!1,KeyF:!1,KeyG:!1,KeyH:!1,KeyI:!1,KeyJ:!1,KeyK:!1,KeyL:!1,KeyM:!1,KeyN:!1,KeyO:!1,KeyP:!1,KeyQ:!1,KeyR:!1,KeyS:!1,KeyT:!1,KeyU:!1,KeyV:!1,KeyW:!1,KeyX:!1,KeyY:!1,KeyZ:!1,ArrowLeft:!1,ArrowUp:!1,ArrowRight:!1,ArrowDown:!1,Space:!1,Enter:!1,PageUp:!1,PageDown:!1,Tab:!1,Minus:!1,Equal:!1,BracketLeft:!1,BracketRight:!1,Semicolon:!1,Quote:!1,Backquote:!1,Comma:!1,Period:!1,ShiftLeft:!1,ShiftRight:!1,Slash:!1,Backslash:!1,Backspace:!1,Digit1:!1,Digit2:!1,Digit3:!1,Digit4:!1,Digit5:!1,Digit6:!1,Digit7:!1,Digit8:!1,Digit9:!1,Digit0:!1};function Yp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}const jp=n=>n.map(e=>String.fromCharCode(e)).join("");var qs=jp;const Kp=n=>n.map((e,t)=>e*Math.pow(2,8*t)).reduce((e,t)=>e+t,0);var La=Kp;const{floor:Zp}=Math,$p=(n,e)=>n.reduce((t,i,r)=>{const a=Zp(r/e);return r%e==0&&t.push([]),t[a].push(i),t},[]);var Ia=$p;const Qp=qs,cs=La,Jp=Ia,em=4,cr=12,Ys=(n,e)=>{let t=[];for(;n.length!=0;){const i=n.slice(0,cr),r=Jp(i,em),a=Qp(r[0]),s=cs(r[1]),o=cs(r[2]);t.push(tm(n,a,s,o,e)),n=n.slice(cr+s)}return t},tm=(n,e,t,i,r)=>{const a=cr+t,s=a+i,o=n.slice(cr,a),l=n.slice(a,s);return{id:e,data:r(e,o),children:Ys(l,r)}};var nm=Ys;const im=nm,rm=(n,e,t)=>{const i=n.slice(e);return im(i,t)[0]};var am=rm;const{floor:om}=Math,Ea=8,sm=n=>[].concat.apply([],n),lm=n=>{let e=[];for(let t=1;t<=Ea;t++){const i=Math.pow(2,Ea-t),r=om(n/i);e.push(r),n=n%i}return e.reverse()},cm=n=>n.reduce((e,t,i)=>e+(t?Math.pow(2,Ea-i-1):0),-127),dm=(n,e)=>n.reduce((t,i,r)=>t+(i?Math.pow(2,-1*r-1):0),e?0:1),hm=n=>{n=n.reverse();const e=n.map(o=>lm(o).reverse()),t=sm(e),i=t[0];let r=cm(t.slice(1,9));const a=r===-127;r+=a?1:0;const s=dm(t.slice(9),a);return s===0?0:(i?-1:1)*Math.pow(s,r)};var um=hm;const hn=La,ds=um,fm=Ia,pm=4,mm=(n,e)=>{const t=fm(e,pm);return n==="PACK"?{numModels:hn(t[0])}:n==="SIZE"?{x:hn(t[0]),y:hn(t[1]),z:hn(t[2])}:n==="XYZI"?{numVoxels:hn(t[0]),values:t.slice(1).map(i=>({x:i[0],y:i[1],z:i[2],i:i[3]}))}:n==="RGBA"?{values:t.map(i=>({r:i[0],g:i[1],b:i[2],a:i[3]}))}:n==="MATT"?{id:hn(t[0]),materialType:hn(t[1]),materialWeight:ds(t[2]),propertyBits:hn(t[3]),normalizedPropertyValues:t.slice(4).map(i=>ds(i))}:{}};var gm=mm;const js=n=>{let e={};return n.children.forEach(t=>{e[t.id.toLowerCase()]=js(t)}),Object.entries(n.data).forEach(([t,i])=>{e[t]=i}),e};var _m=js;const vm=qs,xm=La,ym=Ia,Mm=am,Sm=gm,Em=_m,bm=n=>{const i=[...n],r=ym(i,4),a=vm(r[0]),s=xm(r[1]);if(a!="VOX ")throw Error(`Id of .vox-file should be "VOX ", found "${a}".`);if(s!=150)throw Error(`Version of .vox-file structure should be 150, found "${s}".`);const o=Mm(i,8,Sm);return Em(o)};var Tm=bm,Am=Tm;const wm=Yp(Am);function Rm(n,e,t,i,r){return 4*(t*i*r+e*i+n)}var hr,Ks,ur,Zs,fr,$s;const pr=class pr{constructor(e,t=new C(0,0,0),i=1){ot(this,hr);ot(this,ur);ot(this,fr);fe(this,"gridDimensions");fe(this,"textureMinPosition");fe(this,"textureMaxPosition");fe(this,"textureMinPositionNormalized");fe(this,"textureMaxPositionNormalized");fe(this,"mesh");fe(this,"texture");fe(this,"material");fe(this,"id");fe(this,"needsUpdate",!1);this.filepath=e,this.position=t,this.voxelSize=i,this.float32Data={}}static async create(e,t=new C(0,0,0),i=1){var a,s;const r=new pr(e,t,i);try{const{voxelData:o,size:l}=await nt(a=r,ur,Zs).call(a,e);r.gridDimensions=l,r.voxelData=o;const{voxelMesh:c,voxelTexture:d,voxelMaterial:u}=nt(s=r,hr,Ks).call(s,o,l,t);return r.mesh=c,r.material=u,r.texture=d,this.needsUpdate=!0,r}catch(o){throw console.error("Error creating VoxelGeometry:",o),o}}static cloneFromInstance(e,t){const i=new pr(t.filepath,e,t.voxelSize);return i.gridDimensions=t.gridDimensions,i.material=t.material.clone(),i.mesh=t.mesh.clone(),i.voxelSize=t.voxelSize,i.texture=t.texture,i.voxelData=t.voxelData,i.needsUpdate=!0,i.textureMaxPosition=t.textureMaxPosition.clone(),i.textureMaxPositionNormalized=t.textureMaxPositionNormalized.clone(),i.textureMinPosition=t.textureMinPosition.clone(),i.textureMinPositionNormalized=t.textureMinPositionNormalized.clone(),i}serialize(){return{id:this.id,gridDimensions:{x:this.gridDimensions.x,y:this.gridDimensions.y,z:this.gridDimensions.z},voxelData:this.voxelData,position:{x:this.position.x,y:this.position.y,z:this.position.z},voxelSize:this.voxelSize,textureMinPosition:{x:this.textureMinPosition.x,y:this.textureMinPosition.y,z:this.textureMinPosition.z}}}deserialize(e){e.id&&(this.id=e.id),e.gridDimensions&&(this.gridDimensions=new C(e.gridDimensions.x,e.gridDimensions.y,e.gridDimensions.z)),e.voxelData&&(this.voxelData=e.voxelData),e.position&&(this.position=new C(e.position.x,e.position.y,e.position.z)),typeof e.voxelSize<"u"&&(this.voxelSize=e.voxelSize),e.textureMinPosition&&(this.textureMinPosition=new C(e.textureMinPosition.x,e.textureMinPosition.y,e.textureMinPosition.z))}setPosition(e){this.mesh.position.set(e.x,e.y,e.z),this.mesh.updateMatrixWorld(!0),this.needsUpdate=!0}setRotation(e,t){if(typeof e=="string"&&typeof t=="number"){const i=t*(Math.PI/180);this.mesh.rotation[e]=i}else e instanceof bi?this.mesh.rotation.set(e.x,e.y,e.z):console.error("Invalid input for setRotation");this.mesh.updateMatrixWorld(!0),this.needsUpdate=!0}toFloatArray(){var s,o,l,c,d,u;const e=(s=this.float32Data)!=null&&s.matrixWorld?!this.mesh.matrixWorld.equals((o=this.float32Data)==null?void 0:o.matrixWorld):!0,t=(l=this.float32Data)!=null&&l.position?!this.mesh.position.equals((c=this.float32Data)==null?void 0:c.position):!0,i=(d=this.float32Data)!=null&&d.quaternion?!this.mesh.quaternion.equals((u=this.float32Data)==null?void 0:u.quaternion):!0;if(this.float32Data.data&&!t&&!i&&!e&&!this.needsUpdate)return this.float32Data.data;this.float32Data.quaternion=this.mesh.quaternion.clone(),this.float32Data.matrixWorld=this.mesh.matrixWorld.clone(),this.mesh.updateMatrixWorld(!0);const a=new at().copy(this.mesh.matrixWorld).invert().elements;return this.float32Data||(this.float32Data={}),this.float32Data.data=new Float32Array([this.voxelSize,this.gridDimensions.x,this.gridDimensions.y,this.gridDimensions.z,this.textureMinPositionNormalized.x,this.textureMinPositionNormalized.y,this.textureMinPositionNormalized.z,this.textureMaxPositionNormalized.x,this.textureMaxPositionNormalized.y,this.textureMaxPositionNormalized.z,0,0,a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]),this.float32Data.data}};hr=new WeakSet,Ks=function(e,t,i){const r=new Ra(e,t.x,t.y,t.z);r.format=xt,r.type=Xt,r.minFilter=$e,r.magFilter=$e,r.unpackAlignment=1,r.needsUpdate=!0,r.generateMipmaps=!1;const a=new vn(t.x,t.y,t.z),s=new Lp({map:r,transparent:!0,side:Wt});let o=new Ft(a,s);o.visible=!1;const{x:l,y:c,z:d}=i;return o.position.set(l,c,d),o.updateMatrixWorld(!0),{voxelMesh:o,voxelTexture:r,voxelMaterial:s}},ur=new WeakSet,Zs=async function(e){try{const i=await(await fetch(e)).arrayBuffer(),r=wm(new Uint8Array(i));return nt(this,fr,$s).call(this,r)}catch(t){throw console.error("Error loading voxel data:",t),t}},fr=new WeakSet,$s=function(e){const t=e.size,i=new Uint8Array(t.x*t.y*t.z*4);for(let r=0;r<t.x*t.y*t.z;r++)i[r*4+3]=0;return e.xyzi.values.forEach(r=>{const{x:a,y:s,z:o,i:l}=r,c=l-1,{r:d,g:u,b:f,a:m}=e.rgba.values[c],_=Rm(a,s,o,t.x,t.y);i[_+0]=d,i[_+1]=u,i[_+2]=f,i[_+3]=m}),{voxelData:i,size:t}};let dr=pr;var mr,Qs,gr,Js,_r,el,vr,tl,xr,nl;class Cm{constructor(){ot(this,mr);ot(this,gr);ot(this,_r);ot(this,vr);ot(this,xr);fe(this,"maxTextureDimensions",new C(258,258,258));fe(this,"voxelGeometries",{});fe(this,"cachedGeometries",{});fe(this,"voxelData",[]);fe(this,"lights",{});fe(this,"totalLights",0);fe(this,"specialColors",{});fe(this,"fileTextureMapping",{});fe(this,"needsUpdate",!1);fe(this,"voxelTexture");fe(this,"lightTexture");fe(this,"lightTextureSize");fe(this,"currentVoxelIndex",0);fe(this,"totalVoxelGeometries",0);fe(this,"textureWidth");this.worker=new Worker(new URL("/RealTimeJSRayTracer/assets/VoxelGeometryWorker-ELR9i-AC.js",import.meta.url),{type:"module"}),this.setupWorkerListener()}setupWorkerListener(){this.worker.onmessage=e=>{const{action:t,data:i}=e.data;switch(t){case"updated":this.handleWorkerUpdateResponse(i);break}}}handleWorkerUpdateResponse(e){this.voxelTexture=nt(this,gr,Js).call(this,e.atlasData,this.maxTextureDimensions),e.geometriesArray.forEach(t=>{let i=this.voxelGeometries[t.id];i?typeof i.deserialize=="function"&&(i.deserialize(t),this.updateVoxelShaderData()):console.warn(`Geometry with id ${t.id} not found.`)}),this.totalLights=e.totalLights,this.lights=e.lights}async addGeometry(e,t,i){try{const r=this.currentVoxelIndex++;this.totalVoxelGeometries++;let a;return this.cachedGeometries[e]?a=dr.cloneFromInstance(t,this.cachedGeometries[e]):(a=await dr.create(e,t,i),this.needsUpdate=!0,this.cachedGeometries[e]||(this.cachedGeometries[e]=a)),a.id=r,this.voxelGeometries[r]=a,r}catch(r){console.error(`Could not add geometry: ${r}`)}}async removeGeometry(e){this.voxelGeometries[e]?(delete this.voxelGeometries[e],this.totalVoxelGeometries--,this.needsUpdate=!0):console.warn(`Geometry ${e} not found.`)}setGeomPosition(e,t){this.voxelGeometries[e].setPosition(t),this.updateVoxelShaderData()}setGeomRotation(e,t,i){this.voxelGeometries[e].setRotation(t,i),this.updateVoxelShaderData()}async update(){nt(this,mr,Qs).call(this);const e=Object.values(this.voxelGeometries).map(i=>i.serialize()),t={maxTextureDimensions:{x:this.maxTextureDimensions.x,y:this.maxTextureDimensions.y,z:this.maxTextureDimensions.z},specialColors:this.specialColors,geometriesData:e};return new Promise((i,r)=>{this.worker.onmessage=a=>{const{action:s,data:o}=a.data;s==="updated"&&(this.handleWorkerUpdateResponse(o),i())},this.worker.onerror=a=>{console.error("Worker error:",a),r(a)},this.worker.postMessage({action:"update",data:t})})}async updateVoxelShaderData(){if(this.needsUpdate&&(this.needsUpdate=!1,this.isUpdating=!0,await this.update(),this.isUpdating=!1),this.isUpdating)return;const{dataTexture:e,textureWidth:t}=nt(this,_r,el).call(this,this.voxelGeometries);this.shaderData=e,this.textureWidth=t;const{lightTexture:i,lightTextureSize:r}=nt(this,vr,tl).call(this);this.totalLights==0&&console.warn("No lights found in scene."),this.lightTexture=i,this.lightTextureSize=r}addSpecialColor(e,t){this.specialColors[nt(this,xr,nl).call(this,e)]=t}}mr=new WeakSet,Qs=function(){const e=Object.values(this.voxelGeometries);let t={x:0,y:0,z:0},i=0,r=0;const a=1;e.sort((s,o)=>{const l=s.gridDimensions.x*s.gridDimensions.y*s.gridDimensions.z;return o.gridDimensions.x*o.gridDimensions.y*o.gridDimensions.z-l}),e.forEach(s=>{if(this.fileTextureMapping[s.filepath]){s.textureMinPosition=this.fileTextureMapping[s.filename].textureMinPosition,s.textureMaxPosition=this.fileTextureMapping[s.filename].textureMaxPosition,s.textureMinPositionNormalized=this.fileTextureMapping[s.filename].textureMinPositionNormalized,s.textureMaxPositionNormalized=this.fileTextureMapping[s.filename].textureMaxPositionNormalized;return}t.x+s.gridDimensions.x+a*2>this.maxTextureDimensions.x&&(t.x=0,t.y+=i+a,i=0),t.y+s.gridDimensions.y+a*2>this.maxTextureDimensions.y&&(t.y=0,t.z+=r+a,r=0),s.textureMinPosition=new C(t.x+a,t.y+a,t.z),s.textureMaxPosition=new C(t.x+s.gridDimensions.x+a,t.y+s.gridDimensions.y+a,t.z+s.gridDimensions.z),t.x+=s.gridDimensions.x+a*2,i=Math.max(i,s.gridDimensions.y+a*2),r=Math.max(r,s.gridDimensions.z),s.textureMinPositionNormalized=new C(s.textureMinPosition.x/this.maxTextureDimensions.x,s.textureMinPosition.y/this.maxTextureDimensions.y,s.textureMinPosition.z/this.maxTextureDimensions.z),s.textureMaxPositionNormalized=new C(s.textureMaxPosition.x/this.maxTextureDimensions.x,s.textureMaxPosition.y/this.maxTextureDimensions.y,s.textureMaxPosition.z/this.maxTextureDimensions.z),this.fileTextureMapping[s.filename]={textureMinPosition:s.textureMinPosition,textureMaxPosition:s.textureMaxPosition,textureMinPositionNormalized:s.textureMinPositionNormalized,textureMaxPositionNormalized:s.textureMaxPositionNormalized}})},gr=new WeakSet,Js=function(e,t){const i=new Ra(e,t.x,t.y,t.z);return i.format=xt,i.type=Xt,i.minFilter=$e,i.magFilter=$e,i.unpackAlignment=1,i.needsUpdate=!0,i.generateMipmaps=!0,i},_r=new WeakSet,el=function(e){const i=Object.keys(e).length*28,r=Math.ceil(i/4),a=1,s=new Float32Array(r*4*a);let o=0;Object.values(e).forEach((c,d)=>{const u=c.toFloatArray();if(u)for(let f=0;f<u.length;f++)s[o++]=u[f]});const l=new Sa(s,r,a,xt,bt);return l.needsUpdate=!0,{dataTexture:l,textureWidth:r}},vr=new WeakSet,tl=function(){const e=Math.ceil(Math.sqrt(this.totalLights)),t=new Float32Array(e*e*4);let i=0;for(const a in this.lights){const s=a.split(",").map(Number);t[i++]=s[0],t[i++]=s[1],t[i++]=s[2],t[i++]=Number(this.lights[a].voxelSize)}const r=new Sa(t,e,e,xt,bt);return r.needsUpdate=!0,{lightTexture:r,lightTextureSize:e}},xr=new WeakSet,nl=function(e){return`${e.red},${e.green},${e.blue}`};const il=["isUIActive","pixelRatio","spawnObjectManager","blurRatio","isPaused"];function Pm(n,e){e.forEach(t=>{Object.prototype.hasOwnProperty.call(n,t)&&(window[t]=n[t])})}function Dm(n,e){e.forEach(t=>{Object.prototype.hasOwnProperty.call(window,t)&&(n[t]=window[t])})}class Lm extends Fp{constructor(e){super(e),this.type=rn}parse(e){const o=function(g,A){switch(g){case 1:console.error("THREE.RGBELoader Read Error: "+(A||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(A||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(A||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(A||""))}return-1},u=`
`,f=function(g,A,D){A=A||1024;let T=g.pos,H=-1,x=0,E="",I=String.fromCharCode.apply(null,new Uint16Array(g.subarray(T,T+128)));for(;0>(H=I.indexOf(u))&&x<A&&T<g.byteLength;)E+=I,x+=I.length,T+=128,I+=String.fromCharCode.apply(null,new Uint16Array(g.subarray(T,T+128)));return-1<H?(D!==!1&&(g.pos+=x+H+1),E+I.slice(0,H)):!1},m=function(g){const A=/^#\?(\S+)/,D=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*FORMAT=(\S+)\s*$/,H=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,x={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let E,I;if(g.pos>=g.byteLength||!(E=f(g)))return o(1,"no header found");if(!(I=E.match(A)))return o(3,"bad initial token");for(x.valid|=1,x.programtype=I[1],x.string+=E+`
`;E=f(g),E!==!1;){if(x.string+=E+`
`,E.charAt(0)==="#"){x.comments+=E+`
`;continue}if((I=E.match(D))&&(x.gamma=parseFloat(I[1])),(I=E.match(w))&&(x.exposure=parseFloat(I[1])),(I=E.match(T))&&(x.valid|=2,x.format=I[1]),(I=E.match(H))&&(x.valid|=4,x.height=parseInt(I[1],10),x.width=parseInt(I[2],10)),x.valid&2&&x.valid&4)break}return x.valid&2?x.valid&4?x:o(3,"missing image size specifier"):o(3,"missing format specifier")},_=function(g,A,D){const w=A;if(w<8||w>32767||g[0]!==2||g[1]!==2||g[2]&128)return new Uint8Array(g);if(w!==(g[2]<<8|g[3]))return o(3,"wrong scanline width");const T=new Uint8Array(4*A*D);if(!T.length)return o(4,"unable to allocate buffer space");let H=0,x=0;const E=4*w,I=new Uint8Array(4),Y=new Uint8Array(E);let re=D;for(;re>0&&x<g.byteLength;){if(x+4>g.byteLength)return o(1);if(I[0]=g[x++],I[1]=g[x++],I[2]=g[x++],I[3]=g[x++],I[0]!=2||I[1]!=2||(I[2]<<8|I[3])!=w)return o(3,"bad rgbe scanline format");let P=0,U;for(;P<E&&x<g.byteLength;){U=g[x++];const q=U>128;if(q&&(U-=128),U===0||P+U>E)return o(3,"bad scanline data");if(q){const V=g[x++];for(let X=0;X<U;X++)Y[P++]=V}else Y.set(g.subarray(x,x+U),P),P+=U,x+=U}const W=w;for(let q=0;q<W;q++){let V=0;T[H]=Y[q+V],V+=w,T[H+1]=Y[q+V],V+=w,T[H+2]=Y[q+V],V+=w,T[H+3]=Y[q+V],H+=4}re--}return T},y=function(g,A,D,w){const T=g[A+3],H=Math.pow(2,T-128)/255;D[w+0]=g[A+0]*H,D[w+1]=g[A+1]*H,D[w+2]=g[A+2]*H,D[w+3]=1},p=function(g,A,D,w){const T=g[A+3],H=Math.pow(2,T-128)/255;D[w+0]=Bi.toHalfFloat(Math.min(g[A+0]*H,65504)),D[w+1]=Bi.toHalfFloat(Math.min(g[A+1]*H,65504)),D[w+2]=Bi.toHalfFloat(Math.min(g[A+2]*H,65504)),D[w+3]=Bi.toHalfFloat(1)},h=new Uint8Array(e);h.pos=0;const b=m(h);if(b!==-1){const g=b.width,A=b.height,D=_(h.subarray(h.pos),g,A);if(D!==-1){let w,T,H;switch(this.type){case bt:H=D.length/4;const x=new Float32Array(H*4);for(let I=0;I<H;I++)y(D,I*4,x,I*4);w=x,T=bt;break;case rn:H=D.length/4;const E=new Uint16Array(H*4);for(let I=0;I<H;I++)p(D,I*4,E,I*4);w=E,T=rn;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:g,height:A,data:w,header:b.string,gamma:b.gamma,exposure:b.exposure,type:T}}}return null}setDataType(e){return this.type=e,this}load(e,t,i,r){function a(s,o){switch(s.type){case bt:case rn:s.colorSpace=Yt,s.minFilter=ft,s.magFilter=ft,s.generateMipmaps=!1,s.flipY=!0;break}t&&t(s,o)}return super.load(e,a,i,r)}}var yr,al,Mr,ol,Mi,ba,Sr,sl,Er,ll,br,cl,Tr,dl,ti,tr;class rl{constructor(e){ot(this,yr);ot(this,Mr);ot(this,Mi);ot(this,Sr);ot(this,Er);ot(this,br);ot(this,Tr);ot(this,ti);fe(this,"currentControls");fe(this,"cameraRotationSpeed",1);fe(this,"PI_2",Math.PI/2);fe(this,"keyboardState",structuredClone(qp));this.worldCamera=e,this.cameraVectors=this.setupCameraVectors(),this.pitchObject=new At,this.pitchObject.add(this.worldCamera),this.yawObject=new At,this.yawObject.add(this.pitchObject),this.isPaused=!0,this.boundOnMouseMove=this.onMouseMove.bind(this),this.boundOnKeyDown=this.onKeyDown.bind(this),this.boundOnKeyUp=this.onKeyUp.bind(this),nt(this,Mr,ol).call(this),nt(this,yr,al).call(this),this.enable()}setupCameraVectors(){return{directionVector:new C,rightVector:new C,upVector:new C,worldQuaternion:new li}}updateCameraVectors(){nt(this,Er,ll).call(this,this.cameraVectors.directionVector),nt(this,br,cl).call(this,this.cameraVectors.upVector),nt(this,Tr,dl).call(this,this.cameraVectors.rightVector),this.cameraVectors.directionVector.normalize(),this.cameraVectors.upVector.normalize(),this.cameraVectors.rightVector.normalize()}handleInput(e,t,i){this.updateCameraVectors();const r={KeyW:{vector:this.cameraVectors.directionVector,multiplier:1},KeyS:{vector:this.cameraVectors.directionVector,multiplier:-1},KeyA:{vector:this.cameraVectors.rightVector,multiplier:-1},KeyD:{vector:this.cameraVectors.rightVector,multiplier:1},KeyQ:{vector:this.cameraVectors.upVector,multiplier:1},KeyZ:{vector:this.cameraVectors.upVector,multiplier:-1}};return e=this.updateCameraPosition(r,t,i),e}enable(){document.addEventListener("mousemove",this.boundOnMouseMove,!1),document.addEventListener("keydown",this.boundOnKeyDown,!1),document.addEventListener("keyup",this.boundOnKeyUp,!1)}disable(){document.removeEventListener("mousemove",this.boundOnMouseMove,!1),document.removeEventListener("keydown",this.boundOnKeyDown,!1),document.removeEventListener("keyup",this.boundOnKeyUp,!1)}updateCameraPosition(e,t,i){let r=!1;Object.entries(e).forEach(([a,{vector:s,multiplier:o}])=>{if(this.keyPressed(a)){const l=s.clone().multiplyScalar(t*i*o);this.currentControls.object.position.add(l),r=!0}return r})}onMouseMove(e){window!=null&&window.isPaused||window!=null&&window.isUIActive||(this.movementX=e.movementX||e.mozMovementX||0,this.movementY=e.movementY||e.mozMovementY||0,this.yawObject.rotation.y-=this.movementX*.0012*this.cameraRotationSpeed,this.pitchObject.rotation.x-=this.movementY*.001*this.cameraRotationSpeed,this.pitchObject.rotation.x=Math.max(-this.PI_2,Math.min(this.PI_2,this.pitchObject.rotation.x)))}keyPressed(e){return this.keyboardState[e]}onKeyDown(e){window.isUIActive||(e.preventDefault(),this.keyboardState[e.code]=!0)}onKeyUp(e){window.isUIActive||(e.preventDefault(),this.keyboardState[e.code]=!1)}}yr=new WeakSet,al=function(){document.addEventListener("pointerlockchange",nt(this,ti,tr).bind(this),!1),document.addEventListener("mozpointerlockchange",nt(this,ti,tr).bind(this),!1),document.addEventListener("webkitpointerlockchange",nt(this,ti,tr).bind(this),!1);var e=function(){document.body.requestPointerLock=document.body.requestPointerLock||document.mozRequestPointerLock||document.webkitRequestPointerLock,document.body.requestPointerLock()};document.body.addEventListener("click",e.bind(this),!1)},Mr=new WeakSet,ol=function(){this.currentControls={object:nt(this,Mi,ba).call(this),yawObject:nt(this,Mi,ba).call(this),pitchObject:nt(this,Sr,sl).call(this)}},Mi=new WeakSet,ba=function(){return this.yawObject},Sr=new WeakSet,sl=function(){return this.pitchObject},Er=new WeakSet,ll=function(e){const t=this.pitchObject.matrixWorld.elements;return e.set(t[8],t[9],t[10]).negate(),e},br=new WeakSet,cl=function(e){const t=this.pitchObject.matrixWorld.elements;return e.set(t[4],t[5],t[6]),e},Tr=new WeakSet,dl=function(e){const t=this.pitchObject.matrixWorld.elements;return e.set(t[0],t[1],t[2]),e},ti=new WeakSet,tr=function(){document.pointerLockElement===document.body||document.mozPointerLockElement===document.body||document.webkitPointerLockElement===document.body?(window.isPaused=!1,document.addEventListener("mousemove",this.onMouseMove.bind(this),!1)):(window.isPaused=!0,document.removeEventListener("mousemove",this.onMouseMove.bind(this),!1))};class Im extends rl{constructor(t,i){super(t);fe(this,"spawnShip",!1);this.ship=i,this.distance=new C().subVectors(this.worldCamera.position,this.ship.mesh.position).length(),this.boundOnMouseMove=this.onMouseMove.bind(this),this.lastFiringTime=Date.now(),this.firing=!1,this.firingDelay=500,this.shotsFired=0,this.shotsSpawned=0,this.speed=3,this.blasterIndex=0,this.mass=1,this.velocity=new C}getBlasterIndex(){return this.blasterIndex=this.shotsFired%4,this.firing=!1,this.blasterIndex}onMouseMove(t){if(window!=null&&window.isPaused||window!=null&&window.isUIActive)return;this.movementX=t.movementX||t.mozMovementX||0,this.movementY=t.movementY||t.mozMovementY||0;let i=this.movementX*.0012*this.cameraRotationSpeed,r=this.movementY*.001*this.cameraRotationSpeed,a=new C(1,0,0),s=new C(0,1,0);this.ship.mesh.rotateOnAxis(a,-i),this.ship.mesh.rotateOnAxis(s,-r)}getShipVectors(){let t=new C(1,0,0);t.applyQuaternion(this.ship.mesh.quaternion),t.negate();let i=new C;i.crossVectors(this.ship.mesh.up,t).normalize();let r=new C;return r.crossVectors(i,t).normalize(),{forwardVector:t,rightVector:i,upVector:r}}handleInput(t,i,r){const{forwardVector:a,rightVector:s,upVector:o}=this.getShipVectors(),l={KeyW:{vector:a,multiplier:1},KeyS:{vector:a,multiplier:-1},KeyA:{vector:s,multiplier:-1},KeyD:{vector:s,multiplier:1},ShiftLeft:{vector:o,multiplier:-1},ControlLeft:{vector:o,multiplier:1}};let c=new C;Object.entries(l).forEach(([p,{vector:h,multiplier:b}])=>{this.keyPressed(p)&&c.addScaledVector(h,b*i*this.speed)});let d=c.clone().divideScalar(this.mass);this.velocity.addScaledVector(d,r),this.ship.mesh.position.addScaledVector(this.velocity,r),this.velocity.multiplyScalar(.99),this.velocity.length()<.5&&(this.velocity=new C),this.keyPressed("Space")&&Date.now()-this.lastFiringTime>this.firingDelay&&(this.shotsFired++,this.firing=!0,this.lastFiringTime=Date.now()),this.keyPressed("KeyT")&&(this.spawnShip=!0);let f=new C(1,0,0),m=3;this.keyPressed("KeyQ")?(this.ship.mesh.rotateOnAxis(f,m*r),t=!0):this.keyPressed("KeyE")&&(this.ship.mesh.rotateOnAxis(f,-(m*r)),t=!0);let _=new C(this.distance,0,30);_.applyQuaternion(this.ship.mesh.quaternion);let y=new C().addVectors(this.ship.mesh.position,_);return this.worldCamera.position.copy(y),this.worldCamera.quaternion.copy(this.ship.mesh.quaternion.clone()),this.worldCamera.lookAt(this.ship.mesh.position),t}}var Ar,hl,wr,ul;class Um{constructor(e){ot(this,Ar);ot(this,wr);fe(this,"starshipFile","models/xwingColor.vox");fe(this,"sunFile","models/singleVoxelLight.vox");fe(this,"tealSunFile","models/tealLight.vox");fe(this,"redSunFile","models/redLight.vox");fe(this,"tieFile","models/tie.vox");fe(this,"starDestroyerFile","models/destroyer.vox");fe(this,"falconFile","models/falcon.vox");fe(this,"deathStarChunk","models/deathStarChunk.vox");fe(this,"BlasterBoltFile","models/blasterBolt.vox");fe(this,"transparentCubeFile","models/transparentCube.vox");fe(this,"metalCubeFile","models/metalCube.vox");fe(this,"playerGeometry");fe(this,"playerControls");fe(this,"originPosition",new C(0,0,0));fe(this,"largeDistance",new C(3e3,0,0));fe(this,"distanceUp",new C(0,100,0));fe(this,"shortDistance",new C(170,0,0));fe(this,"veryShortDistance",new C(150,0,0));fe(this,"currentRotation",0);fe(this,"bullets",{});fe(this,"tieFighters",{});fe(this,"orbitingLights",[]);fe(this,"orbitRadius",400);fe(this,"orbitSpeed",.02);fe(this,"bulletSpeed",1.1);fe(this,"trenchStartZ",0);fe(this,"trenchEndZ",4e3);this.voxelManager=e}async spawnTieFighter(){const e=new C(Math.random()*300,Math.random()*600,Math.random()*100),t=await this.voxelManager.addGeometry(this.tieFile,e,1);this.voxelManager.setGeomRotation(t,"z",90),this.voxelManager.setGeomRotation(t,"x",-90),this.tieFighters[t]=this.voxelManager.voxelGeometries[t],this.tieFighters[t].speed=Math.random()*10}moveTieFighters(){Object.entries(this.tieFighters).forEach(([e,t])=>{t.position.z+=t.speed,t.position.z>this.trenchEndZ&&(t.position.z=this.trenchStartZ),this.voxelManager.setGeomPosition(e,t.position)})}rotatePlayerModel(){this.playerGeometry&&(this.currentRotation+=1,this.voxelManager.setGeomRotation(this.playerId,"y",this.currentRotation))}async attachCamera(e){this.worldCamera=e,this.worldCamera.position.set(0,200,100),this.worldCamera.lookAt(0,0,0)}async startGame(){await nt(this,Ar,hl).call(this)}async setupPlayerControls(){this.playerControls=new Im(this.worldCamera,this.playerGeometry)}async spawnBullet(){const{forwardVector:e}=this.playerControls.getShipVectors(),t=new C().copy(this.playerGeometry.mesh.position);this.playerControls.firing=!1,this.playerControls.shotsSpawned++;const i=await this.voxelManager.addGeometry(this.BlasterBoltFile,t,1);this.bullets[i]={forwardVector:e,bulletPosition:t,moveCounter:0}}moveBullet(){Object.entries(this.bullets).forEach(async([e,t])=>{const i=new C().copy(t.forwardVector.multiplyScalar(1.2));t.bulletPosition.x+=i.x,t.bulletPosition.y+=i.y,t.bulletPosition.z+=i.z,e in this.voxelManager.voxelGeometries&&this.voxelManager.setGeomPosition(e,t.bulletPosition),t.moveCounter++,t.moveCounter>50&&(this.voxelManager.removeGeometry(e),console.log(`Removing bullet with id ${e} from tracking.`),delete this.bullets[e])})}handleAnimationFrame(){!this.voxelManager||!this.playerControls||this.voxelManager.voxelGeometries[0]&&(this.playerControls.firing&&(this.playerControls.firing=!1,this.spawnBullet()),this.playerControls.spawnShip&&(this.spawnTieFighter(),this.playerControls.spawnShip=!1),this.moveTieFighters(),this.moveBullet(),this.voxelManager.updateVoxelShaderData())}async setupTrench(){for(let o=0;o<1;o++){let l=o*4e3;this.voxelManager.addGeometry(this.deathStarChunk,new C(-2500,-100,l),100),this.voxelManager.addGeometry(this.deathStarChunk,new C(2500,-100,l),100);const c=-4e3/2-100,d=Math.ceil(1e3/4e3);for(let u=0;u<d;u++){let f=-2500+u*4e3+2e3;this.voxelManager.addGeometry(this.deathStarChunk,new C(f,c,l),100)}}}async setupRoom(){this.voxelManager.addGeometry(this.deathStarChunk,new C(0,-2e3,0),60),this.voxelManager.addGeometry(this.deathStarChunk,new C(0,2e3,0),60),this.voxelManager.addGeometry(this.deathStarChunk,new C(-2500,0,0),60),this.voxelManager.addGeometry(this.deathStarChunk,new C(2500,0,0),60),this.voxelManager.addGeometry(this.deathStarChunk,new C(0,0,-2500),60),this.voxelManager.addGeometry(this.deathStarChunk,new C(0,0,2500),60)}}Ar=new WeakSet,hl=async function(){this.playerGeometry=await nt(this,wr,ul).call(this)},wr=new WeakSet,ul=async function(){this.playerId=await this.voxelManager.addGeometry(this.starshipFile,new C(0,0,-310),1),this.voxelManager.setGeomRotation(this.playerId,"z",90),this.voxelManager.setGeomRotation(this.playerId,"x",-90),this.playerGeometry=this.voxelManager.voxelGeometries[this.playerId],await this.setupRoom(),this.voxelManager.addGeometry(this.sunFile,new C(400,0,0),50);const e=[new C(-200,-100,100),new C(150,-50,-150),new C(0,50,200),new C(100,100,0),new C(-150,0,-100)];for(let t of e){const i=Math.random()>.5?this.metalCubeFile:this.transparentCubeFile;await this.voxelManager.addGeometry(i,t,50)}return this.voxelManager.voxelGeometries[this.playerId]};function Nm(n){n.renderer=new Ws({canvas:n.canvas,context:n.canvas.getContext("webgl2")}),n.context=n.renderer.getContext(),n.context.getExtension("EXT_color_buffer_float");let e=document.getElementById("container");e.appendChild(n.stats.domElement),e.appendChild(n.renderer.domElement),n.debug.mesh=new Ft(n.debug.geometry,n.debug.material),n.pathTracing.scene.add(n.worldCamera),n.debug.material=new yi({color:65280}),n.pixelRatio=2,n.EPS_intersect=.01;let t=new Lm;t.type=bt,n.worldCamera.position.set(0,100,100),n.controls=new rl(n.worldCamera),n.gameManager.setupPlayerControls();let i=n.pathTracing.uniforms;i.uVoxelMeshInvMatrix={value:new at},i.voxelTexture={value:n.voxels.voxelManager.voxelTexture},i.uVoxelDataTexture={value:n.voxels.voxelManager.shaderData},i.uNumberOfVoxelGeometries={value:n.voxels.voxelManager.totalVoxelGeometries},i.uVoxelDataTextureWidth={value:n.voxels.voxelManager.textureWidth},i.uVoxelLightTexture={value:n.voxels.voxelManager.lightTexture},i.uNumberOfVoxelLights={value:n.voxels.voxelManager.totalLights},i.uVoxelLightTextureSize={value:n.voxels.voxelManager.lightTextureSize}}function Om(n){n.renderer.debug.checkShaderErrors=!0,n.renderer.autoClear=!1,n.renderer.toneMapping=fs,n.context=n.renderer.getContext(),n.context.getExtension("EXT_color_buffer_float"),n.quadCamera=new Pa(-1,1,1,-1,0,1),n.screenCopy.scene.add(n.quadCamera),n.screenOutput.scene.add(n.quadCamera),n.pathTracing.scene.add(n.controls.currentControls.object),n.pathTracing.renderTarget=ls(n.context),n.screenCopy.renderTarget=ls(n.context),kp(n),ua(n,{vertexShaderPath:"shaders/common_PathTracing_Vertex.glsl",fragmentShaderPath:"shaders/"+n.demoFragmentShaderFileName,uniforms:n.pathTracing.uniforms,geometry:n.pathTracing.geometry,scene:n.pathTracing.scene,specialHandling:e=>n.worldCamera.add(e)}),ua(n,{vertexShaderPath:"shaders/common_PathTracing_Vertex.glsl",fragmentShaderPath:"shaders/ScreenCopy_Fragment.glsl",uniforms:n.screenCopy.uniforms,geometry:new mn(2,2),scene:n.screenCopy.scene}),ua(n,{vertexShaderPath:"shaders/common_PathTracing_Vertex.glsl",fragmentShaderPath:"shaders/ScreenOutput_Fragment.glsl",uniforms:n.screenOutput.uniforms,geometry:new mn(2,2),scene:n.screenOutput.scene}),Xp(n.cameraInfoElement),lr(),fl()}function fl(){var a,s;Dm(B,il),B.spawnObjectManager.executeCommands(B.voxels.voxelManager),B.cameraIsMoving=!1,B.frameTime=B.clock.getDelta(),B.elapsedTime=B.clock.getElapsedTime()%1e3,B.needChangePixelResolution&&lr(),B.isPaused=B.controls.handleInput(B.cameraIsMoving,B.cameraFlightSpeed,B.frameTime),B.worldCamera.getWorldQuaternion(B.controls.cameraVectors.worldQuaternion);let n=B.pathTracing.uniforms;n.voxelTexture={value:B.voxels.voxelManager.voxelTexture},n.uVoxelDataTexture={value:B.voxels.voxelManager.shaderData},n.uNumberOfVoxelGeometries={value:B.voxels.voxelManager.totalVoxelGeometries},n.uVoxelDataTextureWidth={value:B.voxels.voxelManager.textureWidth},n.uVoxelLightTexture={value:B.voxels.voxelManager.lightTexture},n.uNumberOfVoxelLights={value:B.voxels.voxelManager.totalLights},n.uVoxelLightTextureSize={value:B.voxels.voxelManager.lightTextureSize};const e=B.controls.yawObject.position,t=Math.round(((a=B.context)==null?void 0:a.drawingBufferHeight)*((s=B.context)==null?void 0:s.drawingBufferWidth)*(B==null?void 0:B.pixelRatio));B.cameraInfoElement.innerHTML="FOV: "+B.worldCamera.fov+" / Aperture: "+B.apertureSize.toFixed(2)+" / FocusDistance: "+B.focusDistance+"<br>Samples: "+B.sampleCounter+`<br>Camera Position: x:${Math.round(e.x)}, y:${Math.round(e.y)}, z:${Math.round(e.z)} <br>Approx. Number of Rays: ${t}`;const{sampleCounter:i,frameCounter:r}=Vp(B);B.sampleCounter=i,B.frameCounter=r,Wp(B),B.windowIsBeingResized&&(B.cameraIsMoving=!0,B.windowIsBeingResized=!1),B.controls.yawObject.updateMatrixWorld(!0),B.pathTracing.uniforms.uCameraMatrix.value.copy(B.worldCamera.matrixWorld),B.screenOutput.uniforms.uSampleCounter.value=B.sampleCounter,B.screenOutput.uniforms.uOneOverSampleCounter.value=1/B.sampleCounter,B.renderer.setRenderTarget(B.pathTracing.renderTarget),B.renderer.render(B.pathTracing.scene,B.worldCamera),B.renderer.setRenderTarget(B.screenCopy.renderTarget),B.renderer.render(B.screenCopy.scene,B.quadCamera),B.renderer.setRenderTarget(null),B.renderer.render(B.screenOutput.scene,B.quadCamera),B.stats.update(),B.gameManager.handleAnimationFrame(),B.gameManager.rotatePlayerModel(),requestAnimationFrame(fl)}function Fm(){window.addEventListener("resize",lr,!1),window.addEventListener("orientationchange",lr,!1),B.blueNoiseTexture=B.textureLoader.load("textures/BlueNoise_RGBA256.png",function(n){n.wrapS=vi,n.wrapT=vi,n.flipY=!1,n.minFilter=$e,n.magFilter=$e,n.generateMipmaps=!1,Om(B)})}function zm(n){n.addSpecialColor({red:208,green:206,blue:129},20),n.addSpecialColor({red:255,green:33,blue:0},20),n.addSpecialColor({red:0,green:255,blue:203},20),n.addSpecialColor({red:208,green:204,blue:115},19),n.addSpecialColor({red:255,green:0,blue:51},19),n.addSpecialColor({red:225,green:101,blue:101},19),n.addSpecialColor({red:148,green:207,blue:210},19),n.addSpecialColor({red:228,green:92,blue:92},19),n.addSpecialColor({red:109,green:109,blue:109},3),n.addSpecialColor({red:102,green:102,blue:102},3),n.addSpecialColor({red:41,green:75,blue:55},2),n.addSpecialColor({red:72,green:132,blue:122},2),n.addSpecialColor({red:0,green:0,blue:221},2)}async function Bm(n){const e=new Cm;zm(e),n.gameManager=new Um(e),await n.gameManager.startGame(),n.voxels.voxelGeometry=e.voxelGeometries[0],n.voxels.voxelManager=e,n.isPaused=!0,Pm(n,il),Nm(n),Fm()}Bm(B);
