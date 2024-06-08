import{d as _,u as K,r as b,a as Z,b as ee,c as S,j as B,F as V,e as c,T as te,B as y,P as ie,s as Q,f as ae,M as j,S as ne}from"./index-7158ee4d.js";var l={};Object.defineProperty(l,"__esModule",{value:!0});l.linear=se;l.easeInSine=oe;l.easeOutSine=le;l.easeInOutSine=he;l.easeInQuad=ue;l.easeOutQuad=de;l.easeInOutQuad=me;var re=l.easeInCubic=ge;l.easeOutCubic=ce;l.easeInOutCubic=fe;l.easeInQuart=be;l.easeOutQuart=_e;l.easeInOutQuart=ve;l.easeInQuint=pe;l.easeOutQuint=we;l.easeInOutQuint=Ce;l.easeInExpo=Se;l.easeOutExpo=Re;l.easeInOutExpo=Le;l.easeInCirc=xe;l.easeOutCirc=Ie;l.easeInOutCirc=Me;l.easeInBack=ye;l.easeOutBack=Ee;l.easeInOutBack=We;l.easeInElastic=ke;l.easeOutElastic=Te;l.easeInOutElastic=Oe;l.easeOutBounce=O;l.easeInBounce=q;l.easeInOutBounce=Ae;function se(e){return e}function oe(e){return-1*Math.cos(e*(Math.PI/2))+1}function le(e){return Math.sin(e*(Math.PI/2))}function he(e){return-.5*(Math.cos(Math.PI*e)-1)}function ue(e){return e*e}function de(e){return e*(2-e)}function me(e){return e<.5?2*e*e:-1+(4-2*e)*e}function ge(e){return e*e*e}function ce(e){var t=e-1;return t*t*t+1}function fe(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1}function be(e){return e*e*e*e}function _e(e){var t=e-1;return 1-t*t*t*t}function ve(e){var t=e-1;return e<.5?8*e*e*e*e:1-8*t*t*t*t}function pe(e){return e*e*e*e*e}function we(e){var t=e-1;return 1+t*t*t*t*t}function Ce(e){var t=e-1;return e<.5?16*e*e*e*e*e:1+16*t*t*t*t*t}function Se(e){return e===0?0:Math.pow(2,10*(e-1))}function Re(e){return e===1?1:-Math.pow(2,-10*e)+1}function Le(e){if(e===0||e===1)return e;var t=e*2,i=t-1;return t<1?.5*Math.pow(2,10*i):.5*(-Math.pow(2,-10*i)+2)}function xe(e){var t=e/1;return-1*(Math.sqrt(1-t*e)-1)}function Ie(e){var t=e-1;return Math.sqrt(1-t*t)}function Me(e){var t=e*2,i=t-2;return t<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-i*i)+1)}function ye(e){var t=arguments.length<=1||arguments[1]===void 0?1.70158:arguments[1],i=e/1;return i*i*((t+1)*i-t)}function Ee(e){var t=arguments.length<=1||arguments[1]===void 0?1.70158:arguments[1],i=e/1-1;return i*i*((t+1)*i+t)+1}function We(e){var t=arguments.length<=1||arguments[1]===void 0?1.70158:arguments[1],i=e*2,a=i-2,n=t*1.525;return i<1?.5*i*i*((n+1)*i-n):.5*(a*a*((n+1)*a+n)+2)}function ke(e){var t=arguments.length<=1||arguments[1]===void 0?.7:arguments[1];if(e===0||e===1)return e;var i=e/1,a=i-1,n=1-t,r=n/(2*Math.PI)*Math.asin(1);return-(Math.pow(2,10*a)*Math.sin((a-r)*(2*Math.PI)/n))}function Te(e){var t=arguments.length<=1||arguments[1]===void 0?.7:arguments[1],i=1-t,a=e*2;if(e===0||e===1)return e;var n=i/(2*Math.PI)*Math.asin(1);return Math.pow(2,-10*a)*Math.sin((a-n)*(2*Math.PI)/i)+1}function Oe(e){var t=arguments.length<=1||arguments[1]===void 0?.65:arguments[1],i=1-t;if(e===0||e===1)return e;var a=e*2,n=a-1,r=i/(2*Math.PI)*Math.asin(1);return a<1?-.5*(Math.pow(2,10*n)*Math.sin((n-r)*(2*Math.PI)/i)):Math.pow(2,-10*n)*Math.sin((n-r)*(2*Math.PI)/i)*.5+1}function O(e){var t=e/1;if(t<1/2.75)return 7.5625*t*t;if(t<2/2.75){var i=t-.5454545454545454;return 7.5625*i*i+.75}else if(t<2.5/2.75){var a=t-.8181818181818182;return 7.5625*a*a+.9375}else{var n=t-.9545454545454546;return 7.5625*n*n+.984375}}function q(e){return 1-O(1-e)}function Ae(e){return e<.5?q(e*2)*.5:O(e*2-1)*.5+.5}var Be=Object.defineProperty,F=Object.getOwnPropertySymbols,Ve=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable,E=Math.pow,P=(e,t,i)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,W=(e,t)=>{for(var i in t||(t={}))Ve.call(t,i)&&P(e,i,t[i]);if(F)for(var i of F(t))Fe.call(t,i)&&P(e,i,t[i]);return e};function Pe(e=0,t=0,i=14){return parseFloat((Math.random()*(t-e)+e).toFixed(i))}function m(e=0){return e*Math.PI/180}function ze(e,t,i){return t<i?t<=e&&e<i:t<=e||e<i}function De(e,t,i,a){a.save(),a.font=`1px ${t}`;let n=a.measureText(e).width;return a.restore(),i/n}function Ne(e={x:0,y:0},t,i,a){return E(e.x-t,2)+E(e.y-i,2)<=E(a,2)}function k(e={x:0,y:0},t={},i=1){let a=t.getBoundingClientRect();return{x:(e.x-a.left)*i,y:(e.y-a.top)*i}}function Qe(e,t,i,a){let n=e-i,r=t-a,o=Math.atan2(-r,-n);return o*=180/Math.PI,o<0&&(o+=360),o}function je(e=0,t=0){let i=e+t,a;return i>0?a=i%360:a=360+i%360,a===360&&(a=0),a}function qe(e=0,t=0){let i=180-t;return 180-je(e,i)}function He(e=0,t=0,i=1){let a=(e%360+t)%360;return a=Ue(a),a=(i===1?360-a:360+a)%360,a*=i,e+a}function L(e){return typeof e=="object"&&!Array.isArray(e)&&e!==null}function d(e){return typeof e=="number"&&!Number.isNaN(e)}function h({val:e,isValid:t,errorMessage:i,defaultValue:a,action:n=null}){if(t)return n?n():e;if(e===void 0)return a;throw new Error(i)}function z(e){return e&&e.complete&&e.naturalWidth!==0&&e.naturalHeight!==0}function Ue(e=0){return Number(e.toFixed(9))}function Ye(e){return Math.sin(e*Math.PI/2)}var $e=Object.freeze({left:"left",right:"right",center:"center"}),s=Object.freeze({wheel:{borderColor:"#000",borderWidth:1,debug:!1,image:null,isInteractive:!0,itemBackgroundColors:["#fff"],itemLabelAlign:$e.right,itemLabelBaselineOffset:0,itemLabelColors:["#000"],itemLabelFont:"sans-serif",itemLabelFontSizeMax:500,itemLabelRadius:.85,itemLabelRadiusMax:.2,itemLabelRotation:0,itemLabelStrokeColor:"#fff",itemLabelStrokeWidth:0,items:[],lineColor:"#000",lineWidth:1,pixelRatio:0,radius:.95,rotation:0,rotationResistance:-35,rotationSpeedMax:300,offset:{w:0,h:0},onCurrentIndexChange:null,onRest:null,onSpin:null,overlayImage:null,pointerAngle:0},item:{backgroundColor:null,image:null,imageOpacity:1,imageRadius:.5,imageRotation:0,imageScale:1,label:"",labelColor:null,value:null,weight:1}}),R=Object.freeze({pointerLineColor:"#ff00ff",labelOutlineColor:"#ff00ff",labelRadiusColor:"#00ff00",dragEventHue:200});function Xe(e={}){Je(e),e._handler_onResize=i=>e.resize(i),window.addEventListener("resize",e._handler_onResize);let t=()=>{e._mediaQueryList=window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),e._mediaQueryList.addEventListener("change",e._handler_onDevicePixelRatioChange,{once:!0})};e._handler_onDevicePixelRatioChange=()=>{e.resize(),t()},t()}function Ge(e={}){let t=e.canvas;"PointerEvent"in window?(t.removeEventListener("pointerdown",e._handler_onPointerDown),t.removeEventListener("pointermove",e._handler_onPointerMoveRefreshCursor)):(t.removeEventListener("touchstart",e._handler_onTouchStart),t.removeEventListener("mousedown",e._handler_onMouseDown),t.removeEventListener("mousemove",e._handler_onMouseMoveRefreshCursor)),window.removeEventListener("resize",e._handler_onResize),e._mediaQueryList.removeEventListener("change",e._handler_onDevicePixelRatioChange)}function Je(e={}){let t=e.canvas;e._handler_onPointerMoveRefreshCursor=(i={})=>{let a={x:i.clientX,y:i.clientY};e._isCursorOverWheel=e.wheelHitTest(a),e.refreshCursor()},e._handler_onMouseMoveRefreshCursor=(i={})=>{let a={x:i.clientX,y:i.clientY};e._isCursorOverWheel=e.wheelHitTest(a),e.refreshCursor()},e._handler_onPointerDown=(i={})=>{let a={x:i.clientX,y:i.clientY};if(!e.isInteractive||!e.wheelHitTest(a))return;i.preventDefault(),e.dragStart(a),t.setPointerCapture(i.pointerId),t.addEventListener("pointermove",n),t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("pointerout",r);function n(o={}){o.preventDefault(),e.dragMove({x:o.clientX,y:o.clientY})}function r(o={}){o.preventDefault(),t.releasePointerCapture(o.pointerId),t.removeEventListener("pointermove",n),t.removeEventListener("pointerup",r),t.removeEventListener("pointercancel",r),t.removeEventListener("pointerout",r),e.dragEnd()}},e._handler_onMouseDown=(i={})=>{let a={x:i.clientX,y:i.clientY};if(!e.isInteractive||!e.wheelHitTest(a))return;e.dragStart(a),document.addEventListener("mousemove",n),document.addEventListener("mouseup",r);function n(o={}){o.preventDefault(),e.dragMove({x:o.clientX,y:o.clientY})}function r(o={}){o.preventDefault(),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r),e.dragEnd()}},e._handler_onTouchStart=(i={})=>{let a={x:i.targetTouches[0].clientX,y:i.targetTouches[0].clientY};if(!e.isInteractive||!e.wheelHitTest(a))return;i.preventDefault(),e.dragStart(a),t.addEventListener("touchmove",n),t.addEventListener("touchend",r),t.addEventListener("touchcancel",r);function n(o={}){o.preventDefault(),e.dragMove({x:o.targetTouches[0].clientX,y:o.targetTouches[0].clientY})}function r(o={}){o.preventDefault(),t.removeEventListener("touchmove",n),t.removeEventListener("touchend",r),t.removeEventListener("touchcancel",r),e.dragEnd()}},"PointerEvent"in window?(t.addEventListener("pointerdown",e._handler_onPointerDown),t.addEventListener("pointermove",e._handler_onPointerMoveRefreshCursor)):(t.addEventListener("touchstart",e._handler_onTouchStart),t.addEventListener("mousedown",e._handler_onMouseDown),t.addEventListener("mousemove",e._handler_onMouseMoveRefreshCursor))}var Ke=class{constructor(e,t={}){if(!L(e))throw new Error("wheel must be an instance of Wheel");if(!L(t)&&t!==null)throw new Error("props must be an Object or null");this._wheel=e;for(let i of Object.keys(s.item))this["_"+i]=s.item[i];t?this.init(t):this.init(s.item)}init(e={}){this.backgroundColor=e.backgroundColor,this.image=e.image,this.imageOpacity=e.imageOpacity,this.imageRadius=e.imageRadius,this.imageRotation=e.imageRotation,this.imageScale=e.imageScale,this.label=e.label,this.labelColor=e.labelColor,this.value=e.value,this.weight=e.weight}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){typeof e=="string"?this._backgroundColor=e:this._backgroundColor=s.item.backgroundColor,this._wheel.refresh()}get image(){return this._image}set image(e){let t;typeof e=="string"?(t=new Image,t.src=e,t.onload=i=>this._wheel.refresh()):t=s.item.image,this._image=t,this._wheel.refresh()}get imageOpacity(){return this._imageOpacity}set imageOpacity(e){typeof e=="number"?this._imageOpacity=e:this._imageOpacity=s.item.imageOpacity,this._wheel.refresh()}get imageRadius(){return this._imageRadius}set imageRadius(e){typeof e=="number"?this._imageRadius=e:this._imageRadius=s.item.imageRadius,this._wheel.refresh()}get imageRotation(){return this._imageRotation}set imageRotation(e){typeof e=="number"?this._imageRotation=e:this._imageRotation=s.item.imageRotation,this._wheel.refresh()}get imageScale(){return this._imageScale}set imageScale(e){typeof e=="number"?this._imageScale=e:this._imageScale=s.item.imageScale,this._wheel.refresh()}get label(){return this._label}set label(e){typeof e=="string"?this._label=e:this._label=s.item.label,this._wheel.refresh()}get labelColor(){return this._labelColor}set labelColor(e){typeof e=="string"?this._labelColor=e:this._labelColor=s.item.labelColor,this._wheel.refresh()}get value(){return this._value}set value(e){e!==void 0?this._value=e:this._value=s.item.value}get weight(){return this._weight}set weight(e){typeof e=="number"?this._weight=e:this._weight=s.item.weight}getIndex(){let e=this._wheel.items.findIndex(t=>t===this);if(e===-1)throw new Error("Item not found in parent Wheel");return e}getCenterAngle(){let e=this._wheel.getItemAngles()[this.getIndex()];return e.start+(e.end-e.start)/2}getStartAngle(){return this._wheel.getItemAngles()[this.getIndex()].start}getEndAngle(){return this._wheel.getItemAngles()[this.getIndex()].end}getRandomAngle(){return Pe(this.getStartAngle(),this.getEndAngle())}},Ze=class{constructor(e,t={}){if(!(e instanceof Element))throw new Error("container must be an instance of Element");if(!L(t)&&t!==null)throw new Error("props must be an Object or null");this._frameRequestId=null,this._rotationSpeed=0,this._rotationDirection=1,this._spinToTimeEnd=null,this._lastSpinFrameTime=null,this._isCursorOverWheel=!1,this.add(e);for(let i of Object.keys(s.wheel))this["_"+i]=s.wheel[i];t?this.init(t):this.init(s.wheel)}init(e={}){this._isInitialising=!0,this.borderColor=e.borderColor,this.borderWidth=e.borderWidth,this.debug=e.debug,this.image=e.image,this.isInteractive=e.isInteractive,this.itemBackgroundColors=e.itemBackgroundColors,this.itemLabelAlign=e.itemLabelAlign,this.itemLabelBaselineOffset=e.itemLabelBaselineOffset,this.itemLabelColors=e.itemLabelColors,this.itemLabelFont=e.itemLabelFont,this.itemLabelFontSizeMax=e.itemLabelFontSizeMax,this.itemLabelRadius=e.itemLabelRadius,this.itemLabelRadiusMax=e.itemLabelRadiusMax,this.itemLabelRotation=e.itemLabelRotation,this.itemLabelStrokeColor=e.itemLabelStrokeColor,this.itemLabelStrokeWidth=e.itemLabelStrokeWidth,this.items=e.items,this.lineColor=e.lineColor,this.lineWidth=e.lineWidth,this.pixelRatio=e.pixelRatio,this.rotationSpeedMax=e.rotationSpeedMax,this.radius=e.radius,this.rotation=e.rotation,this.rotationResistance=e.rotationResistance,this.offset=e.offset,this.onCurrentIndexChange=e.onCurrentIndexChange,this.onRest=e.onRest,this.onSpin=e.onSpin,this.overlayImage=e.overlayImage,this.pointerAngle=e.pointerAngle}add(e){this._canvasContainer=e,this.canvas=document.createElement("canvas"),this._context=this.canvas.getContext("2d"),this._canvasContainer.append(this.canvas),Xe(this),this._isInitialising===!1&&this.resize()}remove(){this.canvas!==null&&(this._frameRequestId!==null&&window.cancelAnimationFrame(this._frameRequestId),Ge(this),this._canvasContainer.removeChild(this.canvas),this._canvasContainer=null,this.canvas=null,this._context=null)}resize(){if(this.canvas===null)return;this.canvas.style.width=this._canvasContainer.clientWidth+"px",this.canvas.style.height=this._canvasContainer.clientHeight+"px";let[e,t]=[this._canvasContainer.clientWidth*this.getActualPixelRatio(),this._canvasContainer.clientHeight*this.getActualPixelRatio()];this.canvas.width=e,this.canvas.height=t;let i=Math.min(e,t),a={w:i-i*this.offset.w,h:i-i*this.offset.h},n=Math.min(e/a.w,t/a.h);this._size=Math.max(a.w*n,a.h*n),this._center={x:e/2+e*this.offset.w,y:t/2+t*this.offset.h},this._actualRadius=this._size/2*this.radius,this._itemLabelFontSize=this.itemLabelFontSizeMax*(this._size/500),this._labelMaxWidth=this._actualRadius*(this.itemLabelRadius-this.itemLabelRadiusMax);for(let r of this._items)this._itemLabelFontSize=Math.min(this._itemLabelFontSize,De(r.label,this.itemLabelFont,this._labelMaxWidth,this._context));this.refresh()}draw(e=0){if(this._frameRequestId=null,this._context===null||this.canvas===null)return;let t=this._context;t.clearRect(0,0,this.canvas.width,this.canvas.height),this.animateRotation(e);let i=this.getItemAngles(this._rotation),a=this.getScaledNumber(this._borderWidth);t.textBaseline="middle",t.textAlign=this.itemLabelAlign,t.font=this._itemLabelFontSize+"px "+this.itemLabelFont,t.save();for(let[n,r]of i.entries()){let o=this._items[n],u=new Path2D;u.moveTo(this._center.x,this._center.y),u.arc(this._center.x,this._center.y,this._actualRadius-a/2,m(r.start+-90),m(r.end+-90)),o.path=u}this.drawItemBackgrounds(t,i),this.drawItemImages(t,i),this.drawItemLines(t,i),this.drawItemLabels(t,i),this.drawBorder(t),this.drawImage(t,this._image,!1),this.drawImage(t,this._overlayImage,!0),this.drawPointerLine(t),this.drawDragEvents(t),this._isInitialising=!1}drawItemBackgrounds(e,t=[]){var i;for(let[a,n]of t.entries()){let r=this._items[a];e.fillStyle=(i=r.backgroundColor)!=null?i:this._itemBackgroundColors[a%this._itemBackgroundColors.length],e.fill(r.path)}}drawItemImages(e,t=[]){for(let[i,a]of t.entries()){let n=this._items[i];if(!z(n.image))continue;e.save(),e.clip(n.path);let r=a.start+(a.end-a.start)/2;e.translate(this._center.x+Math.cos(m(r+-90))*(this._actualRadius*n.imageRadius),this._center.y+Math.sin(m(r+-90))*(this._actualRadius*n.imageRadius)),e.rotate(m(r+n.imageRotation)),e.globalAlpha=n.imageOpacity;let o=this._size/500*n.image.width*n.imageScale,u=this._size/500*n.image.height*n.imageScale,v=-o/2,p=-u/2;e.drawImage(n.image,v,p,o,u),e.restore()}}drawImage(e,t,i=!1){if(!z(t))return;e.translate(this._center.x,this._center.y),i||e.rotate(m(this._rotation));let a=i?this._size:this._size*this.radius,n=-(a/2);e.drawImage(t,n,n,a,a),e.resetTransform()}drawPointerLine(e){!this.debug||(e.translate(this._center.x,this._center.y),e.rotate(m(this._pointerAngle+-90)),e.beginPath(),e.moveTo(0,0),e.lineTo(this._actualRadius*2,0),e.strokeStyle=R.pointerLineColor,e.lineWidth=this.getScaledNumber(2),e.stroke(),e.resetTransform())}drawBorder(e){if(this._borderWidth<=0)return;let t=this.getScaledNumber(this._borderWidth),i=this._borderColor||"transparent";if(e.beginPath(),e.strokeStyle=i,e.lineWidth=t,e.arc(this._center.x,this._center.y,this._actualRadius-t/2,0,2*Math.PI),e.stroke(),this.debug){let a=this.getScaledNumber(1);e.beginPath(),e.strokeStyle=e.strokeStyle=R.labelRadiusColor,e.lineWidth=a,e.arc(this._center.x,this._center.y,this._actualRadius*this.itemLabelRadius,0,2*Math.PI),e.stroke(),e.beginPath(),e.strokeStyle=e.strokeStyle=R.labelRadiusColor,e.lineWidth=a,e.arc(this._center.x,this._center.y,this._actualRadius*this.itemLabelRadiusMax,0,2*Math.PI),e.stroke()}}drawItemLines(e,t=[]){if(this._lineWidth<=0)return;let i=this.getScaledNumber(this._lineWidth),a=this.getScaledNumber(this._borderWidth);e.translate(this._center.x,this._center.y);for(let n of t)e.rotate(m(n.start+-90)),e.beginPath(),e.moveTo(0,0),e.lineTo(this._actualRadius-a,0),e.strokeStyle=this.lineColor,e.lineWidth=i,e.stroke(),e.rotate(-m(n.start+-90));e.resetTransform()}drawItemLabels(e,t=[]){let i=this._itemLabelFontSize*-this.itemLabelBaselineOffset,a=this.getScaledNumber(1),n=this.getScaledNumber(this._itemLabelStrokeWidth*2);for(let[r,o]of t.entries()){let u=this._items[r],v=u.labelColor||this._itemLabelColors[r%this._itemLabelColors.length]||"transparent";if(u.label.trim()===""||v==="transparent")continue;e.save(),e.clip(u.path);let p=o.start+(o.end-o.start)/2;e.translate(this._center.x+Math.cos(m(p+-90))*(this._actualRadius*this.itemLabelRadius),this._center.y+Math.sin(m(p+-90))*(this._actualRadius*this.itemLabelRadius)),e.rotate(m(p+-90)),e.rotate(m(this.itemLabelRotation)),this.debug&&(e.beginPath(),e.moveTo(0,0),e.lineTo(-this._labelMaxWidth,0),e.strokeStyle=R.labelOutlineColor,e.lineWidth=a,e.stroke(),e.strokeRect(0,-this._itemLabelFontSize/2,-this._labelMaxWidth,this._itemLabelFontSize)),this._itemLabelStrokeWidth>0&&(e.lineWidth=n,e.strokeStyle=this._itemLabelStrokeColor,e.lineJoin="round",e.strokeText(u.label,0,i)),e.fillStyle=v,e.fillText(u.label,0,i),e.restore()}}drawDragEvents(e){var t;if(!this.debug||!((t=this._dragEvents)!=null&&t.length))return;let i=[...this._dragEvents].reverse(),a=this.getScaledNumber(.5),n=this.getScaledNumber(4);for(let[r,o]of i.entries()){let u=r/this._dragEvents.length*100;e.beginPath(),e.arc(o.x,o.y,n,0,2*Math.PI),e.fillStyle=`hsl(${R.dragEventHue},100%,${u}%)`,e.strokeStyle="#000",e.lineWidth=a,e.fill(),e.stroke()}}animateRotation(e=0){if(this._spinToTimeEnd!==null){if(e>=this._spinToTimeEnd){this.rotation=this._spinToEndRotation,this._spinToTimeEnd=null,this.raiseEvent_onRest();return}let t=this._spinToTimeEnd-this._spinToTimeStart,i=(e-this._spinToTimeStart)/t;i=i<0?0:i;let a=this._spinToEndRotation-this._spinToStartRotation;this.rotation=this._spinToStartRotation+a*this._spinToEasingFunction(i),this.refresh();return}if(this._lastSpinFrameTime!==null){let t=e-this._lastSpinFrameTime;t>0&&(this.rotation+=t/1e3*this._rotationSpeed%360,this._rotationSpeed=this.getRotationSpeedPlusDrag(t),this._rotationSpeed===0?(this.raiseEvent_onRest(),this._lastSpinFrameTime=null):this._lastSpinFrameTime=e),this.refresh();return}}getRotationSpeedPlusDrag(e=0){let t=this._rotationSpeed+this.rotationResistance*(e/1e3)*this._rotationDirection;return this._rotationDirection===1&&t<0||this._rotationDirection===-1&&t>=0?0:t}spin(e=0){if(!d(e))throw new Error("rotationSpeed must be a number");this._dragEvents=[],this.beginSpin(e,"spin")}spinTo(e=0,t=0,i=null){if(!d(e))throw new Error("Error: rotation must be a number");if(!d(t))throw new Error("Error: duration must be a number");this.stop(),this._dragEvents=[],this.animate(e,t,i),this.raiseEvent_onSpin({method:"spinto",targetRotation:e,duration:t})}spinToItem(e=0,t=0,i=!0,a=1,n=1,r=null){this.stop(),this._dragEvents=[];let o=i?this.items[e].getCenterAngle():this.items[e].getRandomAngle(),u=He(this.rotation,o-this._pointerAngle,n);u+=a*360*n,this.animate(u,t,r),this.raiseEvent_onSpin({method:"spintoitem",targetItemIndex:e,targetRotation:u,duration:t})}animate(e,t,i){this._spinToStartRotation=this.rotation,this._spinToEndRotation=e,this._spinToTimeStart=performance.now(),this._spinToTimeEnd=this._spinToTimeStart+t,this._spinToEasingFunction=i||Ye,this.refresh()}stop(){this._spinToTimeEnd=null,this._rotationSpeed=0,this._lastSpinFrameTime=null}getScaledNumber(e){return e/500*this._size}getActualPixelRatio(){return this._pixelRatio!==0?this._pixelRatio:window.devicePixelRatio}wheelHitTest(e={x:0,y:0}){if(this.canvas===null)return!1;let t=k(e,this.canvas,this.getActualPixelRatio());return Ne(t,this._center.x,this._center.y,this._actualRadius)}refreshCursor(){if(this.canvas!==null){if(this.isInteractive){if(this.isDragging){this.canvas.style.cursor="grabbing";return}if(this._isCursorOverWheel){this.canvas.style.cursor="grab";return}}this.canvas.style.cursor=""}}getAngleFromCenter(e={x:0,y:0}){return(Qe(this._center.x,this._center.y,e.x,e.y)+90)%360}getCurrentIndex(){return this._currentIndex}refreshCurrentIndex(e=[]){this._items.length===0&&(this._currentIndex=-1);for(let[t,i]of e.entries())if(ze(this._pointerAngle,i.start%360,i.end%360)){if(this._currentIndex===t)break;this._currentIndex=t,this._isInitialising||this.raiseEvent_onCurrentIndexChange();break}}getItemAngles(e=0){let t=0;for(let o of this.items)t+=o.weight;let i=360/t,a,n=e,r=[];for(let o of this._items)a=o.weight*i,r.push({start:n,end:n+a}),n+=a;return this._items.length>1&&(r[r.length-1].end=r[0].start+360),r}refresh(){this._frameRequestId===null&&(this._frameRequestId=window.requestAnimationFrame(e=>this.draw(e)))}limitSpeed(e=0,t=0){let i=Math.min(e,t);return Math.max(i,-t)}beginSpin(e=0,t=""){this.stop(),this._rotationSpeed=this.limitSpeed(e,this._rotationSpeedMax),this._lastSpinFrameTime=performance.now(),this._rotationDirection=this._rotationSpeed>=0?1:-1,this._rotationSpeed!==0&&this.raiseEvent_onSpin({method:t,rotationSpeed:this._rotationSpeed,rotationResistance:this._rotationResistance}),this.refresh()}refreshAriaLabel(){if(this.canvas===null)return;this.canvas.setAttribute("role","img");let e=this.items.length>=2?` The wheel has ${this.items.length} slices.`:"";this.canvas.setAttribute("aria-label","An image of a spinning prize wheel."+e)}get borderColor(){return this._borderColor}set borderColor(e){this._borderColor=h({val:e,isValid:typeof e=="string",errorMessage:"Wheel.borderColor must be a string",defaultValue:s.wheel.borderColor}),this.refresh()}get borderWidth(){return this._borderWidth}set borderWidth(e){this._borderWidth=h({val:e,isValid:d(e),errorMessage:"Wheel.borderWidth must be a number",defaultValue:s.wheel.borderWidth}),this.refresh()}get debug(){return this._debug}set debug(e){this._debug=h({val:e,isValid:typeof e=="boolean",errorMessage:"Wheel.debug must be a boolean",defaultValue:s.wheel.debug}),this.refresh()}get image(){var e,t;return(t=(e=this._image)==null?void 0:e.src)!=null?t:null}set image(e){this._image=h({val:e,isValid:typeof e=="string"||e===null,errorMessage:"Wheel.image must be a url (string) or null",defaultValue:s.wheel.image,action:()=>{if(e===null)return null;let t=new Image;return t.src=e,t.onload=i=>this.refresh(),t}}),this.refresh()}get isInteractive(){return this._isInteractive}set isInteractive(e){this._isInteractive=h({val:e,isValid:typeof e=="boolean",errorMessage:"Wheel.isInteractive must be a boolean",defaultValue:s.wheel.isInteractive}),this.refreshCursor()}get itemBackgroundColors(){return this._itemBackgroundColors}set itemBackgroundColors(e){this._itemBackgroundColors=h({val:e,isValid:Array.isArray(e),errorMessage:"Wheel.itemBackgroundColors must be an array",defaultValue:s.wheel.itemBackgroundColors}),this.refresh()}get itemLabelAlign(){return this._itemLabelAlign}set itemLabelAlign(e){this._itemLabelAlign=h({val:e,isValid:typeof e=="string",errorMessage:"Wheel.itemLabelAlign must be a string",defaultValue:s.wheel.itemLabelAlign}),this.refresh()}get itemLabelBaselineOffset(){return this._itemLabelBaselineOffset}set itemLabelBaselineOffset(e){this._itemLabelBaselineOffset=h({val:e,isValid:d(e),errorMessage:"Wheel.itemLabelBaselineOffset must be a number",defaultValue:s.wheel.itemLabelBaselineOffset}),this.resize()}get itemLabelColors(){return this._itemLabelColors}set itemLabelColors(e){this._itemLabelColors=h({val:e,isValid:Array.isArray(e),errorMessage:"Wheel.itemLabelColors must be an array",defaultValue:s.wheel.itemLabelColors}),this.refresh()}get itemLabelFont(){return this._itemLabelFont}set itemLabelFont(e){this._itemLabelFont=h({val:e,isValid:typeof e=="string",errorMessage:"Wheel.itemLabelFont must be a string",defaultValue:s.wheel.itemLabelFont}),this.resize()}get itemLabelFontSizeMax(){return this._itemLabelFontSizeMax}set itemLabelFontSizeMax(e){this._itemLabelFontSizeMax=h({val:e,isValid:d(e),errorMessage:"Wheel.itemLabelFontSizeMax must be a number",defaultValue:s.wheel.itemLabelFontSizeMax}),this.resize()}get itemLabelRadius(){return this._itemLabelRadius}set itemLabelRadius(e){this._itemLabelRadius=h({val:e,isValid:d(e),errorMessage:"Wheel.itemLabelRadius must be a number",defaultValue:s.wheel.itemLabelRadius}),this.resize()}get itemLabelRadiusMax(){return this._itemLabelRadiusMax}set itemLabelRadiusMax(e){this._itemLabelRadiusMax=h({val:e,isValid:d(e),errorMessage:"Wheel.itemLabelRadiusMax must be a number",defaultValue:s.wheel.itemLabelRadiusMax}),this.resize()}get itemLabelRotation(){return this._itemLabelRotation}set itemLabelRotation(e){this._itemLabelRotation=h({val:e,isValid:d(e),errorMessage:"Wheel.itemLabelRotation must be a number",defaultValue:s.wheel.itemLabelRotation}),this.refresh()}get itemLabelStrokeColor(){return this._itemLabelStrokeColor}set itemLabelStrokeColor(e){this._itemLabelStrokeColor=h({val:e,isValid:typeof e=="string",errorMessage:"Wheel.itemLabelStrokeColor must be a string",defaultValue:s.wheel.itemLabelStrokeColor}),this.refresh()}get itemLabelStrokeWidth(){return this._itemLabelStrokeWidth}set itemLabelStrokeWidth(e){this._itemLabelStrokeWidth=h({val:e,isValid:d(e),errorMessage:"Wheel.itemLabelStrokeWidth must be a number",defaultValue:s.wheel.itemLabelStrokeWidth}),this.refresh()}get items(){return this._items}set items(e){this._items=h({val:e,isValid:Array.isArray(e),errorMessage:"Wheel.items must be an array of Items",defaultValue:s.wheel.items,action:()=>{let t=[];for(let i of e)t.push(new Ke(this,{backgroundColor:i.backgroundColor,image:i.image,imageRadius:i.imageRadius,imageRotation:i.imageRotation,imageScale:i.imageScale,label:i.label,labelColor:i.labelColor,value:i.value,weight:i.weight}));return t}}),this.refreshAriaLabel(),this.refreshCurrentIndex(this.getItemAngles(this._rotation)),this.resize()}get lineColor(){return this._lineColor}set lineColor(e){this._lineColor=h({val:e,isValid:typeof e=="string",errorMessage:"Wheel.lineColor must be a string",defaultValue:s.wheel.lineColor}),this.refresh()}get lineWidth(){return this._lineWidth}set lineWidth(e){this._lineWidth=h({val:e,isValid:d(e),errorMessage:"Wheel.lineWidth must be a number",defaultValue:s.wheel.lineWidth}),this.refresh()}get offset(){return this._offset}set offset(e){this._offset=h({val:e,isValid:L(e),errorMessage:"Wheel.offset must be an object",defaultValue:s.wheel.offset}),this.resize()}get onCurrentIndexChange(){return this._onCurrentIndexChange}set onCurrentIndexChange(e){this._onCurrentIndexChange=h({val:e,isValid:typeof e=="function"||e===null,errorMessage:"Wheel.onCurrentIndexChange must be a function or null",defaultValue:s.wheel.onCurrentIndexChange})}get onRest(){return this._onRest}set onRest(e){this._onRest=h({val:e,isValid:typeof e=="function"||e===null,errorMessage:"Wheel.onRest must be a function or null",defaultValue:s.wheel.onRest})}get onSpin(){return this._onSpin}set onSpin(e){this._onSpin=h({val:e,isValid:typeof e=="function"||e===null,errorMessage:"Wheel.onSpin must be a function or null",defaultValue:s.wheel.onSpin})}get overlayImage(){var e,t;return(t=(e=this._overlayImage)==null?void 0:e.src)!=null?t:null}set overlayImage(e){this._overlayImage=h({val:e,isValid:typeof e=="string"||e===null,errorMessage:"Wheel.overlayImage must be a url (string) or null",defaultValue:s.wheel.overlayImage,action:()=>{if(e===null)return null;let t=new Image;return t.src=e,t.onload=i=>this.refresh(),t}}),this.refresh()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){this._pixelRatio=h({val:e,isValid:d(e),errorMessage:"Wheel.pixelRatio must be a number",defaultValue:s.wheel.pixelRatio}),this._dragEvents=[],this.resize()}get pointerAngle(){return this._pointerAngle}set pointerAngle(e){this._pointerAngle=h({val:e,isValid:d(e)&&e>=0,errorMessage:"Wheel.pointerAngle must be a number between 0 and 360",defaultValue:s.wheel.pointerAngle,action:()=>e%360}),this.debug&&this.refresh()}get radius(){return this._radius}set radius(e){this._radius=h({val:e,isValid:d(e),errorMessage:"Wheel.radius must be a number",defaultValue:s.wheel.radius}),this.resize()}get rotation(){return this._rotation}set rotation(e){this._rotation=h({val:e,isValid:d(e),errorMessage:"Wheel.rotation must be a number",defaultValue:s.wheel.rotation}),this.refreshCurrentIndex(this.getItemAngles(this._rotation)),this.refresh()}get rotationResistance(){return this._rotationResistance}set rotationResistance(e){this._rotationResistance=h({val:e,isValid:d(e),errorMessage:"Wheel.rotationResistance must be a number",defaultValue:s.wheel.rotationResistance})}get rotationSpeed(){return this._rotationSpeed}get rotationSpeedMax(){return this._rotationSpeedMax}set rotationSpeedMax(e){this._rotationSpeedMax=h({val:e,isValid:d(e)&&e>=0,errorMessage:"Wheel.rotationSpeedMax must be a number >= 0",defaultValue:s.wheel.rotationSpeedMax})}dragStart(e={x:0,y:0}){if(this.canvas===null)return;let t=k(e,this.canvas,this.getActualPixelRatio());this.isDragging=!0,this.stop(),this._dragEvents=[{distance:0,x:t.x,y:t.y,now:performance.now()}],this.refreshCursor()}dragMove(e={x:0,y:0}){if(this.canvas===null)return;let t=k(e,this.canvas,this.getActualPixelRatio()),i=this.getAngleFromCenter(t),a=this._dragEvents[0],n=this.getAngleFromCenter(a),r=qe(n,i);this._dragEvents.unshift({distance:r,x:t.x,y:t.y,now:performance.now()}),this.debug&&this._dragEvents.length>=40&&this._dragEvents.pop(),this.rotation+=r}dragEnd(){this.isDragging=!1;let e=0,t=performance.now();for(let[i,a]of this._dragEvents.entries()){if(!this.isDragEventTooOld(t,a)){e+=a.distance;continue}this._dragEvents.length=i,this.debug&&this.refresh();break}this.refreshCursor(),e!==0&&this.beginSpin(e*(1e3/250),"interact")}isDragEventTooOld(e=0,t={}){return e-t.now>250}raiseEvent_onCurrentIndexChange(e={}){var t;(t=this.onCurrentIndexChange)==null||t.call(this,W({type:"currentIndexChange",currentIndex:this._currentIndex},e))}raiseEvent_onRest(e={}){var t;(t=this.onRest)==null||t.call(this,W({type:"rest",currentIndex:this._currentIndex,rotation:this._rotation},e))}raiseEvent_onSpin(e={}){var t;(t=this.onSpin)==null||t.call(this,W({type:"spin"},e))}};async function et(e=[]){if(!("fonts"in document))return;const t=[];for(const i of e)typeof i=="string"&&t.push(document.fonts.load("1em "+i));await Promise.all(t)}const tt=500,g="/spingame/",H=Object.freeze({left:"left",right:"right",center:"center"});Object.freeze({wheel:{borderColor:"#000",borderWidth:1,debug:!1,image:null,isInteractive:!0,itemBackgroundColors:["#fff"],itemLabelAlign:H.right,itemLabelBaselineOffset:0,itemLabelColors:["#000"],itemLabelFont:"sans-serif",itemLabelFontSizeMax:tt,itemLabelRadius:.85,itemLabelRadiusMax:.2,itemLabelRotation:0,itemLabelStrokeColor:"#fff",itemLabelStrokeWidth:0,items:[],lineColor:"#000",lineWidth:1,pixelRatio:0,radius:.95,rotation:0,rotationResistance:-35,rotationSpeedMax:300,offset:{w:0,h:0},onCurrentIndexChange:null,onRest:null,onSpin:null,overlayImage:null,pointerAngle:0},item:{backgroundColor:null,image:null,imageOpacity:1,imageRadius:.5,imageRotation:0,imageScale:1,label:"",labelColor:null,value:null,weight:1}});const D=[{name:"Spin Wheel",radius:.88,itemLabelRadius:.83,itemLabelRotation:180,itemLabelAlign:H.left,itemLabelColors:["#000"],itemLabelBaselineOffset:-.06,itemLabelFont:"Times New Roman",itemLabelFontSizeMax:16,lineWidth:14,lineColor:"#000",isInteractive:!1,rotation:0,rotationSpeed:100,rotationSpeedMax:300,rotationResistance:2,onRest:e=>console.log(e),overlayImage:g+"img/spin-wheel.svg",items:[{image:g+"img/one.svg",imageRadius:.65,imageScale:.4,weight:.4,backgroundColor:"#F535C9"},{image:g+"img/two.svg",imageRadius:.65,imageScale:.4,weight:.4,backgroundColor:"#1CE21B",labelColor:"#fff"},{image:g+"img/three.svg",imageRadius:.65,imageScale:.4,weight:.4,backgroundColor:"#EE22B9"},{image:g+"img/four.svg",imageRadius:.65,imageScale:.4,weight:.4,backgroundColor:"#61E128"},{image:g+"img/five.svg",imageRadius:.65,imageScale:.4,weight:.4,backgroundColor:"#F535C9"},{image:g+"img/six.svg",imageRadius:.65,imageScale:.4,weight:.4,backgroundColor:"#1CE21B"},{image:g+"img/seven.svg",imageRadius:.65,imageScale:.4,weight:.4,backgroundColor:"#EE22B9"},{image:g+"img/eight.svg",imageRadius:.65,imageScale:.4,weight:.4,backgroundColor:"#61E128"},{image:g+"img/nine.svg",imageRadius:.65,imageScale:.4,weight:.4,backgroundColor:"#F535C9"},{image:g+"img/ten.svg",imageRadius:.65,imageScale:.4,weight:.4,backgroundColor:"#1CE21B"},{image:g+"img/eleven.svg",imageRadius:.65,imageScale:.4,weight:.4,backgroundColor:"#EE22B9"},{image:g+"img/twelve.svg",imageRadius:.65,imageScale:.4,weight:.4,backgroundColor:"#61E128"}]}];const x="EQBV96AJwQ3pO1baB0C-0bTBMV9dUFJURfJR_SjSNlyBwvUh";let N={validUntil:Math.floor(Date.now()/1e3)+600,messages:[{address:x,amount:"",payload:""}],sendMode:_.SendMode.PAY_GAS_SEPARATELY+_.SendMode.IGNORE_ERRORS},T={validUntil:Math.floor(Date.now()/1e3)+600,messages:[{address:x,amount:"",payload:""}]};const it=()=>{const e=K(),[t,i]=b.useState(),[a,n]=b.useState(!1),[r,o]=b.useState("0.00"),[u,v]=b.useState(0),[p,U]=b.useState(-1),Y=Z(),[I]=ee(),A=new S.TonClient({endpoint:"https://testnet.toncenter.com/api/v2/jsonRPC",apiKey:"924e6d5718e0e0605fbe261a7573bbcec6009f73b460a52b40c19d43beb0a14e"}),$=_.beginCell().storeUint(0,32).storeStringTail("Deposit").endCell(),X=_.beginCell().storeUint(0,32).storeStringTail("Spin").endCell();b.useEffect(()=>{et(D.map(w=>w.itemLabelFont));const f=new Ze(document.querySelector(".wheel-wrapper"));f.init({...D[0],rotation:f.rotation}),i(f)},[]),b.useEffect(()=>{(async()=>{if(e){const w=_.beginCell().storeAddress(S.Address.parse(e)).endCell(),M=(await A.runMethod(S.Address.parse(x),"userBalance",[{type:"slice",cell:w}])).stack.readNumber();n(M>0),v(M),console.log(`User Balance : ${M}`)}})()},[e]);const G=async()=>{n(!1),N.messages[0].payload=X.toBoc().toString("base64"),await I.sendTransaction(N),setInterval(J,1e3);const f=10,w=1e4,C=re(1);await t.spinToItem(f,w,!0,7,C),n(!0)},J=async()=>{const f=_.beginCell().storeAddress(S.Address.parse(e)).endCell(),C=(await A.runMethod(S.Address.parse(x),"getLastSpin",[{type:"slice",cell:f}])).stack.readNumber();console.log(`WIN : ${C}`),U(C)};return B(V,{children:[c("div",{className:"wheel-wrapper"}),c("div",{children:Y?B(V,{children:[c(te,{onChange:f=>o(f),value:r}),c("br",{}),c(y,{onClick:async()=>{T.messages[0].amount=_.toNano(r).toString(),T.messages[0].payload=$.toBoc().toString("base64"),await I.sendTransaction(T)},children:"Deposit"}),c("br",{}),c(y,{onClick:G,disabled:!a,children:"Spin"})]}):c(y,{onClick:async()=>{I.openModal()},children:"Connect Wallet"})})]})};function ot(){return c(ie,{hideBack:!0,children:c(at,{children:c(it,{})})})}Q(ae)({flex:1,[`@media (max-width: ${j}px)`]:{width:"100%"}});const at=Q(ne)({gap:20,alignItems:"flex-start",width:"100%",[`@media (max-width: ${j}px)`]:{flexDirection:"column"}});export{ot as SpinGame,ot as default};
