!function n(a,o,h){function l(t,e){if(!o[t]){if(!a[t]){var i="function"==typeof require&&require;if(!e&&i)return i(t,!0);if(c)return c(t,!0);var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}var r=o[t]={exports:{}};a[t][0].call(r.exports,function(e){return l(a[t][1][e]||e)},r,r.exports,n,a,o,h)}return o[t].exports}for(var c="function"==typeof require&&require,e=0;e<h.length;e++)l(h[e]);return l}({1:[function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var r=(function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}(n,[{key:"createMesh",value:function(){this.geometry=this.system.boxGeometry,this.material=new THREE.MeshBasicMaterial({color:this.color,transparent:!0,opacity:this.opacity,depthTest:!1,precision:"lowp"}),this.mesh=new THREE.Mesh(this.geometry,this.material),this.mesh.position.x=this.x,this.mesh.position.y=this.y,this.mesh.position.z=this.z,this.mesh.scale.set(this.size,this.size,this.size),this.group.add(this.mesh)}},{key:"update",value:function(e){this.progress+=this.rate*this.loader.deltaTimeNormal,this.mesh.position.y=this.yBase-this.ease.inExpo(this.progress,0,1,1)*this.yBase,this.mesh.scale.set(this.size,this.size+16*this.size*this.ease.inExpo(this.progress,0,1,1),this.size),this.mesh.material.opacity=this.ease.inExpo(this.progress,0,1,1),1<=this.progress&&(this.geometry.dispose(),this.material.dispose(),this.group.remove(this.mesh),this.array.splice(e,1),this.system.createRipple(this.mesh.position.x,this.mesh.position.z,this.strength))}}]),n);function n(e,t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.system=t,this.loader=i,this.calc=this.loader.calc,this.ease=this.loader.ease,this.array=e.array,this.group=e.group,this.x=e.x,this.y=e.y,this.z=e.z,this.size=e.size,this.color=e.color,this.opacity=e.opacity,this.strength=e.strength,this.yBase=e.y,this.progress=0,this.rate=.015,this.createMesh()}t.exports=r},{}],2:[function(e,t,i){"use strict";var s=e("../loader"),r=e("./system");window.demoNum=5;new s(r)},{"../loader":6,"./system":5}],3:[function(e,t,i){"use strict";var s=function(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e};function r(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var n=e("../particle-base"),a=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,n),s(o,[{key:"update",value:function(){var e=.075+Math.abs(this.velocity.y)/25;this.mesh.scale.set(e,e,e);var t=+Math.abs(this.velocity.y)+.15;this.mesh.material.opacity=this.calc.clamp(t,.15,1),this.velocity.y+=(this.base.y-this.mesh.position.y)*this.lerpFactor,this.velocity.multiplyScalar(this.dampFactor),this.mesh.position.add(this.velocity)}}]),o);function o(e,t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e,t,i));return s.base=new THREE.Vector3(e.x,e.y,e.z),s.velocity=new THREE.Vector3(0,0,0),s.lerpFactor=.3,s.dampFactor=.3,s}t.exports=a},{"../particle-base":7}],4:[function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var r=(function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}(n,[{key:"getInfluenceVector",value:function(e){this.influence.set(0,0,0);var t,i,s=this.sphere.distanceToPoint(e);return s<=this.threshold&&(t=this.ease.inOutSine(this.threshold-s,0,1,this.threshold),i=this.strength*t*this.life,this.influence.addVectors(e,this.sphere.center).multiplyScalar(i)),this.influence}},{key:"update",value:function(e){this.sphere.radius+=this.growth*this.life*this.loader.deltaTimeNormal,this.life-=this.decay*this.loader.deltaTimeNormal,this.mesh.position.y=-2*(1-this.life);var t=.001+this.sphere.radius;this.mesh.scale.set(t,t,t),this.mesh.material.opacity=this.life/3,this.life<=0&&this.destroy(e)}},{key:"destroy",value:function(e){this.geometry.dispose(),this.material.dispose(),this.group.remove(this.mesh),this.array.splice(e,1)}}]),n);function n(e,t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.system=t,this.loader=i,this.calc=this.loader.calc,this.ease=this.loader.ease,this.array=e.array,this.group=e.group,this.sphere=new THREE.Sphere(new THREE.Vector3(e.x,e.y,e.z),0),this.strength=e.strength?e.strength:this.calc.rand(7,12),this.threshold=this.calc.rand(4,8),this.growth=this.calc.rand(.1,.3),this.life=1,this.decay=this.calc.rand(.01,.02),this.influence=new THREE.Vector3,this.geometry=new THREE.CircleGeometry(1,36),this.geometry.vertices.shift(),this.geometry.applyMatrix((new THREE.Matrix4).makeRotationX(Math.PI/2)),this.material=new THREE.LineBasicMaterial({color:16777215,transparent:!0,opacity:1,depthTest:!1,precision:"lowp"}),this.mesh=new THREE.LineLoop(this.geometry,this.material),this.mesh.position.x=this.sphere.center.x,this.mesh.position.y=0,this.mesh.position.z=this.sphere.center.z,this.group.add(this.mesh)}t.exports=r},{}],5:[function(e,t,i){"use strict";var s=function(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e};function r(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function a(e,t,i){null===e&&(e=Function.prototype);var s=Object.getOwnPropertyDescriptor(e,t);if(void 0===s){var r=Object.getPrototypeOf(e);return null===r?void 0:a(r,t,i)}if("value"in s)return s.value;var n=s.get;return void 0!==n?n.call(i):void 0}var n=e("../system-base"),o=e("./particle"),h=e("./ripple"),l=e("./drop"),c=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(u,n),s(u,[{key:"reset",value:function(){this.tick=0,this.finalDrop=!1,this.setCamera();for(var e=this.drops.length;e--;)this.drops[e].progress=1,this.drops[e].update(e);for(var t=this.ripples.length;t--;)this.ripples[t].destroy(e);this.drops.length=0,this.ripples.length=0}},{key:"setCamera",value:function(){this.loader.isGrid||(this.loader.cameraBaseY=25,this.loader.camera.position.y=this.loader.cameraBaseY,this.loader.camera.lookAt(this.center))}},{key:"createDrop",value:function(e,t,i,s){this.drops.push(new l({array:this.drops,group:this.particleGroup,x:void 0===e?this.calc.rand(-this.size/2,this.size/2):e,y:void 0===t?this.calc.rand(15,20):t,z:void 0===i?this.calc.rand(-this.size/2,this.size/2):i,size:.1,color:16777215,opacity:0,strength:s},this,this.loader))}},{key:"updateDrops",value:function(){for(var e=this.drops.length;e--;)this.drops[e].update(e)}},{key:"createRipple",value:function(e,t,i){this.ripples.push(new h({array:this.ripples,group:this.particleGroup,x:e,y:-.1,z:t,strength:i},this,this.loader))}},{key:"updateRipples",value:function(){for(var e=this.ripples.length;e--;)this.ripples[e].update(e)}},{key:"replay",value:function(){a(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"replay",this).call(this),this.reset()}},{key:"update",value:function(){a(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"update",this).call(this),this.tick>=this.dropTick&&(this.createDrop(),this.dropTick=this.calc.randInt(this.dropTickMin,this.dropTickMax),this.tick=0),this.updateDrops(),this.updateRipples();for(var e=this.particles.length;e--;)for(var t=this.ripples.length;t--;){var i=this.particles[e],s=this.ripples[t].getInfluenceVector(i.base);s.setX(0),s.setZ(0),i.velocity.add(s)}this.particleGroup.rotation.x=.1*Math.cos(5e-4*this.loader.elapsedMilliseconds),this.particleGroup.rotation.y=.25*Math.PI+-.2*Math.sin(5e-4*this.loader.elapsedMilliseconds),this.tick+=this.loader.deltaTimeNormal,!this.exiting||this.loader.isOrbit||this.loader.isGrid||(this.finalDrop||(this.createDrop(0,20,0,20),this.finalDrop=!0),this.loader.camera.position.y=this.loader.cameraBaseY-this.ease.inExpo(this.exitProgress,0,1,1)*this.loader.cameraBaseY,this.loader.camera.position.z=this.loader.cameraBaseZ-this.ease.inExpo(this.exitProgress,0,1,1)*this.loader.cameraBaseZ,this.loader.camera.lookAt(this.center))}}]),u);function u(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e));t.duration=6e3,t.size=35,t.cols=25,t.rows=25,t.drops=[],t.ripples=[],t.dropTick=15,t.dropTickMin=15,t.dropTickMax=35;for(var i=0;i<t.cols;i++)for(var s=0;s<t.rows;s++){var r=t.calc.map(i,0,t.cols-1,-t.size/2,t.size/2),n=t.calc.map(s,0,t.rows-1,-t.size/2,t.size/2);t.particles.push(new o({group:t.particleGroup,x:r,y:0,z:n,size:.01,color:16777215,opacity:.01},t,t.loader))}return t.reset(),t}t.exports=c},{"../system-base":8,"./drop":1,"./particle":3,"./ripple":4}],6:[function(e,t,i){"use strict";var s=function(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e};function r(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var n=e("./utils/calc"),a=e("./utils/ease"),o=e("./utils/axis"),h=(s(l,[{key:"setupDebug",value:function(){var s=this;this.isDebug=0<location.hash.indexOf("debug"),this.isGrid=0<location.hash.indexOf("grid"),this.isOrbit=0<location.hash.indexOf("orbit"),this.debugHash="",this.isDebug?(this.isGrid=!0,this.isOrbit=!0,this.debugHash+="debug",this.dom.html.classList.add("is-debug")):(this.debugHash+=this.isGrid?"grid":"",this.debugHash+=this.isOrbit?"orbit":""),this.debugHash&&[].slice.call(document.querySelectorAll(".demo")).forEach(function(e,t,i){e.setAttribute("href",e.getAttribute("href")+"#"+s.debugHash)})}},{key:"setupTime",value:function(){this.timescale=1,this.clock=new THREE.Clock,this.deltaTimeSeconds=this.clock.getDelta()*this.timescale,this.deltaTimeMilliseconds=1e3*this.deltaTimeSeconds,this.deltaTimeNormal=this.deltaTimeMilliseconds/(1e3/60),this.elapsedMilliseconds=0}},{key:"setupScene",value:function(){this.scene=new THREE.Scene}},{key:"setupCamera",value:function(){this.camera=new THREE.PerspectiveCamera(100,0,1e-4,1e4),this.cameraBaseX=this.isGrid?-20:0,this.cameraBaseY=this.isGrid?15:0,this.cameraBaseZ=this.isGrid?20:30,this.camera.position.x=this.cameraBaseX,this.camera.position.y=this.cameraBaseY,this.camera.position.z=this.cameraBaseZ}},{key:"setupRenderer",value:function(){this.renderer=new THREE.WebGLRenderer({alpha:!0,antialias:!0}),this.dom.container.appendChild(this.renderer.domElement)}},{key:"setupControls",value:function(){this.isOrbit&&(this.controls=new THREE.OrbitControls(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.2,this.controls.enableKeys=!1,this.dom.timescaleWrap.style.visibility="visible")}},{key:"setupHelpers",value:function(){this.isGrid&&(this.gridOpacityMap=[.4,.2,.2,.2,.1,.2,.1,.1],this.gridHelper=new THREE.GridHelper(300,60,16777215,16777215),this.gridHelper.material.transparent=!0,this.gridHelper.material.opacity=this.gridOpacityMap[demoNum-1],this.scene.add(this.gridHelper),this.axisOpacityMap=[1,.6,.6,.6,.3,.6,.3,.3],this.axisHelper=new o(150,this.axisOpacityMap[demoNum-1]),this.scene.add(this.axisHelper),this.camera.lookAt(new THREE.Vector3))}},{key:"update",value:function(){this.deltaTimeSeconds=this.clock.getDelta(),this.diffTime&&(this.deltaTimeSeconds-=this.diffTime,this.diffTime=0),this.deltaTimeSeconds*=this.timescale,this.deltaTimeMilliseconds=1e3*this.deltaTimeSeconds,this.deltaTimeNormal=this.deltaTimeMilliseconds/(1e3/60),this.elapsedMilliseconds+=this.deltaTimeMilliseconds,this.system.update(),this.isOrbit&&this.controls.update()}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"listen",value:function(){var t=this;window.addEventListener("resize",function(e){return t.onResize(e)}),this.dom.replayButton.addEventListener("click",function(e){return t.onReplayButtonClick(e)}),this.dom.debugButton.addEventListener("click",function(e){return t.onDebugButtonClick(e)}),this.isOrbit&&(this.dom.timescaleRange.addEventListener("change",function(e){return t.onTimescaleRangeChange(e)}),this.dom.timescaleRange.addEventListener("mousemove",function(e){return t.onTimescaleRangeChange(e)})),this.hidden=null,this.visibilityChange=null,void 0!==document.hidden?(this.hidden="hidden",this.visibilityChange="visibilitychange"):void 0!==document.msHidden?(this.hidden="msHidden",this.visibilityChange="msvisibilitychange"):void 0!==document.webkitHidden&&(this.hidden="webkitHidden",this.visibilityChange="webkitvisibilitychange"),void 0===document.addEventListener||void 0===document.hidden||window.addEventListener(this.visibilityChange,function(e){return t.onVisibilityChange(e)})}},{key:"replay",value:function(){document.documentElement.classList.remove("completed"),document.documentElement.classList.add("loading"),this.camera.position.x=this.cameraBaseX,this.camera.position.y=this.cameraBaseY,this.camera.position.z=this.cameraBaseZ,this.timescale=1,this.deltaTimeSeconds=1/60,this.deltaTimeMilliseconds=1e3*this.deltaTimeSeconds,this.deltaTimeNormal=this.deltaTimeMilliseconds/(1e3/60),this.elapsedMilliseconds=0,this.blurTime=0,this.diffTime=0,this.focusTime=0,this.system.replay(),this.completed=!1,this.clock.start(),this.loop()}},{key:"complete",value:function(){var e=this;this.isOrbit||this.isGrid||(setTimeout(function(){e.clock.stop(),cancelAnimationFrame(e.raf)},600),this.completed=!0,this.dom.html.classList.remove("loading"),this.dom.html.classList.add("completed"))}},{key:"onResize",value:function(){this.width=window.innerWidth,this.height=window.innerHeight,this.dpr=1<window.devicePixelRatio?2:1,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.width,this.height)}},{key:"onReplayButtonClick",value:function(e){e.preventDefault(),this.replay()}},{key:"onDebugButtonClick",value:function(e){e.preventDefault();var t=window.location.href.split("#")[0];this.isDebug?(history?history.pushState("",document.title,window.location.pathname):location.hash="",location.href=t):location.href=t+"#debug",location.reload()}},{key:"onTimescaleRangeChange",value:function(){this.timescale=parseFloat(this.dom.timescaleRange.value),this.dom.timescaleValue.innerHTML=this.timescale.toFixed(1)}},{key:"onVisibilityChange",value:function(){document.hidden?this.blurTime=Date.now():(this.focusTime=Date.now(),this.blurTime&&(this.diffTime=(this.focusTime-this.blurTime)/1e3))}},{key:"loop",value:function(){var e=this;this.update(),this.render(),this.raf=window.requestAnimationFrame(function(){return e.loop()})}}]),l);function l(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),this.calc=new n,this.ease=new a,this.dom={html:document.documentElement,container:document.querySelector(".loader"),timescaleWrap:document.querySelector(".timescale-wrap"),timescaleRange:document.querySelector(".timescale-range"),timescaleValue:document.querySelector(".timescale-value"),replayButton:document.querySelector(".replay-animation"),debugButton:document.querySelector(".icon--debug")},this.dom.html.classList.add("loading"),this.completed=!1,this.raf=null,this.setupDebug(),this.setupTime(),this.setupScene(),this.setupCamera(),this.setupRenderer(),this.setupControls(),this.setupHelpers(),this.listen(),this.onResize(),this.system=new e(this),this.loop()}t.exports=h},{"./utils/axis":9,"./utils/calc":10,"./utils/ease":11}],7:[function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var r=(function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}(n,[{key:"createMesh",value:function(){this.geometry=this.system.sphereGeometry,this.material=new THREE.MeshBasicMaterial({color:this.color,transparent:!0,opacity:this.opacity,depthTest:!1,precision:"lowp"}),this.mesh=new THREE.Mesh(this.geometry,this.material),this.mesh.position.x=this.x,this.mesh.position.y=this.y,this.mesh.position.z=this.z,this.mesh.scale.set(this.size,this.size,this.size),this.group.add(this.mesh)}},{key:"reset",value:function(){}}]),n);function n(e,t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.system=t,this.loader=i,this.calc=this.loader.calc,this.ease=this.loader.ease,this.group=e.group,this.x=e.x,this.y=e.y,this.z=e.z,this.size=e.size,this.color=e.color,this.opacity=e.opacity,this.createMesh()}t.exports=r},{}],8:[function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var r=(function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}(n,[{key:"update",value:function(){for(var e,t=this.particles.length;t--;)this.particles[t].update();this.entering&&this.enterProgress<1&&(this.enterProgress+=this.enterRate*this.loader.deltaTimeNormal,1<this.enterProgress&&(this.enterProgress=1,this.entering=!1),e=this.ease.inOutExpo(this.enterProgress,0,1,1),this.particleGroup.scale.set(e,e,e)),!this.exiting&&this.loader.elapsedMilliseconds>this.duration&&(this.exiting=!0),this.exiting&&(this.exitProgress+=this.exitRate*this.loader.deltaTimeNormal,1<=this.exitProgress&&!this.loader.completed&&(this.exitProgress=1,this.loader.complete()))}},{key:"replay",value:function(){this.particleGroup.scale.set(1e-4,1e-4,1e-4);for(var e=this.particles.length;e--;)this.particles[e].reset();this.entering=!0,this.enterProgress=0,this.exiting=!1,this.exitProgress=0}}]),n);function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.loader=e,this.calc=this.loader.calc,this.ease=this.loader.ease,this.sphereGeometry=new THREE.SphereBufferGeometry(1,16,16),this.boxGeometry=new THREE.BoxBufferGeometry(1,1,1),this.center=new THREE.Vector3,this.particles=[],this.particleGroup=new THREE.Object3D,this.particleGroup.scale.set(1e-4,1e-4,1e-4),this.loader.scene.add(this.particleGroup),this.entering=!0,this.enterProgress=0,this.enterRate=.015,this.exiting=!1,this.exitProgress=0,this.exitRate=.01,this.duration=1/0}t.exports=r},{}],9:[function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var r=(function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}(n,[{key:"createAxis",value:function(e,t,i){var s=new THREE.Geometry,r=new THREE.LineBasicMaterial({color:i,opacity:this.opacity,transparent:!0});s.vertices.push(e,t);var n=new THREE.Line(s,r);this.object3d.add(n)}}]),n);function n(e,t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.object3d=new THREE.Object3D,this.axisLength=e,this.opacity=t,this.createAxis(new THREE.Vector3(-this.axisLength,0,0),new THREE.Vector3(this.axisLength,0,0),new THREE.Color("hsl(0, 100%, 100%)")),this.createAxis(new THREE.Vector3(0,-this.axisLength,0),new THREE.Vector3(0,this.axisLength,0),new THREE.Color("hsl(120, 100%, 100%)")),this.createAxis(new THREE.Vector3(0,0,-this.axisLength),new THREE.Vector3(0,0,this.axisLength),new THREE.Color("hsl(240, 100%, 100%)")),this.object3d}t.exports=r},{}],10:[function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var r=(function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}(n,[{key:"rand",value:function(e,t,i){void 0===t&&(t=e,e=0);var s=Math.random();return i&&(s=i(Math.random(),0,1,1)),s*(t-e)+e}},{key:"randInt",value:function(e,t,i){void 0===t&&(t=e,e=0);Math.random();return i&&i(Math.random(),0,1,1),Math.floor(Math.random()*(t-e+1))+e}},{key:"randArr",value:function(e){return e[Math.floor(Math.random()*e.length)]}},{key:"map",value:function(e,t,i,s,r){return(e-t)/(i-t)*(r-s)+s}},{key:"clamp",value:function(e,t,i){return Math.max(Math.min(e,i),t)}},{key:"lerp",value:function(e,t,i){return e+(t-e)*i}},{key:"roundToUpperInterval",value:function(e,t){return e%t==0&&(e+=1e-4),Math.ceil(e/t)*t}},{key:"roundToLowerInterval",value:function(e,t){return e%t==0&&(e-=1e-4),Math.floor(e/t)*t}},{key:"roundToNearestInterval",value:function(e,t){return Math.round(e/t)*t}},{key:"intersectSphere",value:function(e,t){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)+(e.z-t.z)*(e.z-t.z))<e.radius+t.radius}},{key:"getIndexFromCoords",value:function(e,t,i){return e+t*i}},{key:"getCoordsFromIndex",value:function(e,t){return{x:e%t,y:Math.floor(e/t)}}},{key:"visibleHeightAtZDepth",value:function(e,t){var i=t.position.z;e<i?e-=i:e+=i;var s=t.fov*Math.PI/180;return 2*Math.tan(s/2)*Math.abs(e)}},{key:"visibleWidthAtZDepth",value:function(e,t){return this.visibleHeightAtZDepth(e,t)*t.aspect}}]),n);function n(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}t.exports=r},{}],11:[function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var r=(function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}(n,[{key:"inQuad",value:function(e,t,i,s){return i*(e/=s)*e+t}},{key:"outQuad",value:function(e,t,i,s){return-i*(e/=s)*(e-2)+t}},{key:"inOutQuad",value:function(e,t,i,s){return(e/=s/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t}},{key:"inCubic",value:function(e,t,i,s){return i*(e/=s)*e*e+t}},{key:"outCubic",value:function(e,t,i,s){return i*((e=e/s-1)*e*e+1)+t}},{key:"inOutCubic",value:function(e,t,i,s){return(e/=s/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t}},{key:"inQuart",value:function(e,t,i,s){return i*(e/=s)*e*e*e+t}},{key:"outQuart",value:function(e,t,i,s){return-i*((e=e/s-1)*e*e*e-1)+t}},{key:"inOutQuart",value:function(e,t,i,s){return(e/=s/2)<1?i/2*e*e*e*e+t:-i/2*((e-=2)*e*e*e-2)+t}},{key:"inQuint",value:function(e,t,i,s){return i*(e/=s)*e*e*e*e+t}},{key:"outQuint",value:function(e,t,i,s){return i*((e=e/s-1)*e*e*e*e+1)+t}},{key:"inOutQuint",value:function(e,t,i,s){return(e/=s/2)<1?i/2*e*e*e*e*e+t:i/2*((e-=2)*e*e*e*e+2)+t}},{key:"inSine",value:function(e,t,i,s){return-i*Math.cos(e/s*(Math.PI/2))+i+t}},{key:"outSine",value:function(e,t,i,s){return i*Math.sin(e/s*(Math.PI/2))+t}},{key:"inOutSine",value:function(e,t,i,s){return-i/2*(Math.cos(Math.PI*e/s)-1)+t}},{key:"inExpo",value:function(e,t,i,s){return 0==e?t:i*Math.pow(2,10*(e/s-1))+t}},{key:"outExpo",value:function(e,t,i,s){return e==s?t+i:i*(1-Math.pow(2,-10*e/s))+t}},{key:"inOutExpo",value:function(e,t,i,s){return 0==e?t:e==s?t+i:(e/=s/2)<1?i/2*Math.pow(2,10*(e-1))+t:i/2*(2-Math.pow(2,-10*--e))+t}},{key:"inCirc",value:function(e,t,i,s){return-i*(Math.sqrt(1-(e/=s)*e)-1)+t}},{key:"outCirc",value:function(e,t,i,s){return i*Math.sqrt(1-(e=e/s-1)*e)+t}},{key:"inOutCirc",value:function(e,t,i,s){return(e/=s/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+t:i/2*(Math.sqrt(1-(e-=2)*e)+1)+t}},{key:"inElastic",value:function(e,t,i,s){var r=1.70158,n=0,a=i;return 0==e?t:1==(e/=s)?t+i:(n=n||.3*s,a<Math.abs(i)?(a=i,0):r=n/(2*Math.PI)*Math.asin(i/a),-(a*Math.pow(2,10*--e)*Math.sin((e*s-r)*(2*Math.PI)/n))+t)}},{key:"outElastic",value:function(e,t,i,s){var r=1.70158,n=0,a=i;return 0==e?t:1==(e/=s)?t+i:(n=n||.3*s,a<Math.abs(i)?(a=i,0):r=n/(2*Math.PI)*Math.asin(i/a),a*Math.pow(2,-10*e)*Math.sin((e*s-r)*(2*Math.PI)/n)+i+t)}},{key:"inOutElastic",value:function(e,t,i,s){var r=1.70158,n=0,a=i;return 0==e?t:2==(e/=s/2)?t+i:(n=n||s*(.3*1.5),a<Math.abs(i)?(a=i,0):r=n/(2*Math.PI)*Math.asin(i/a),e<1?a*Math.pow(2,10*--e)*Math.sin((e*s-r)*(2*Math.PI)/n)*-.5+t:a*Math.pow(2,-10*--e)*Math.sin((e*s-r)*(2*Math.PI)/n)*.5+i+t)}},{key:"inBack",value:function(e,t,i,s,r){return null==r&&(r=1.70158),i*(e/=s)*e*((r+1)*e-r)+t}},{key:"outBack",value:function(e,t,i,s,r){return null==r&&(r=1.70158),i*((e=e/s-1)*e*((r+1)*e+r)+1)+t}},{key:"inOutBack",value:function(e,t,i,s,r){return null==r&&(r=1.70158),(e/=s/2)<1?i/2*(e*e*((1+(r*=1.525))*e-r))+t:i/2*((e-=2)*e*((1+(r*=1.525))*e+r)+2)+t}}]),n);function n(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}t.exports=r},{}]},{},[2]);