(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function my(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var U0={exports:{}},Fc={},O0={exports:{}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=Symbol.for("react.element"),gy=Symbol.for("react.portal"),xy=Symbol.for("react.fragment"),vy=Symbol.for("react.strict_mode"),_y=Symbol.for("react.profiler"),yy=Symbol.for("react.provider"),Sy=Symbol.for("react.context"),My=Symbol.for("react.forward_ref"),wy=Symbol.for("react.suspense"),Ey=Symbol.for("react.memo"),by=Symbol.for("react.lazy"),vp=Symbol.iterator;function Ty(t){return t===null||typeof t!="object"?null:(t=vp&&t[vp]||t["@@iterator"],typeof t=="function"?t:null)}var F0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z0=Object.assign,k0={};function rs(t,e,n){this.props=t,this.context=e,this.refs=k0,this.updater=n||F0}rs.prototype.isReactComponent={};rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function B0(){}B0.prototype=rs.prototype;function Jd(t,e,n){this.props=t,this.context=e,this.refs=k0,this.updater=n||F0}var $d=Jd.prototype=new B0;$d.constructor=Jd;z0($d,rs.prototype);$d.isPureReactComponent=!0;var _p=Array.isArray,V0=Object.prototype.hasOwnProperty,eh={current:null},H0={key:!0,ref:!0,__self:!0,__source:!0};function G0(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)V0.call(e,i)&&!H0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ha,type:t,key:o,ref:s,props:r,_owner:eh.current}}function Ay(t,e){return{$$typeof:ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function th(t){return typeof t=="object"&&t!==null&&t.$$typeof===ha}function Cy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yp=/\/+/g;function xu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Cy(""+t.key):e.toString(36)}function Al(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ha:case gy:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+xu(s,0):i,_p(r)?(n="",t!=null&&(n=t.replace(yp,"$&/")+"/"),Al(r,e,n,"",function(c){return c})):r!=null&&(th(r)&&(r=Ay(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(yp,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",_p(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+xu(o,a);s+=Al(o,e,n,l,r)}else if(l=Ty(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+xu(o,a++),s+=Al(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Aa(t,e,n){if(t==null)return t;var i=[],r=0;return Al(t,i,"","",function(o){return e.call(n,o,r++)}),i}function Ry(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tn={current:null},Cl={transition:null},Ly={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:eh};function W0(){throw Error("act(...) is not supported in production builds of React.")}et.Children={map:Aa,forEach:function(t,e,n){Aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Aa(t,function(){e++}),e},toArray:function(t){return Aa(t,function(e){return e})||[]},only:function(t){if(!th(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};et.Component=rs;et.Fragment=xy;et.Profiler=_y;et.PureComponent=Jd;et.StrictMode=vy;et.Suspense=wy;et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ly;et.act=W0;et.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=z0({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=eh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)V0.call(e,l)&&!H0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ha,type:t.type,key:r,ref:o,props:i,_owner:s}};et.createContext=function(t){return t={$$typeof:Sy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yy,_context:t},t.Consumer=t};et.createElement=G0;et.createFactory=function(t){var e=G0.bind(null,t);return e.type=t,e};et.createRef=function(){return{current:null}};et.forwardRef=function(t){return{$$typeof:My,render:t}};et.isValidElement=th;et.lazy=function(t){return{$$typeof:by,_payload:{_status:-1,_result:t},_init:Ry}};et.memo=function(t,e){return{$$typeof:Ey,type:t,compare:e===void 0?null:e}};et.startTransition=function(t){var e=Cl.transition;Cl.transition={};try{t()}finally{Cl.transition=e}};et.unstable_act=W0;et.useCallback=function(t,e){return tn.current.useCallback(t,e)};et.useContext=function(t){return tn.current.useContext(t)};et.useDebugValue=function(){};et.useDeferredValue=function(t){return tn.current.useDeferredValue(t)};et.useEffect=function(t,e){return tn.current.useEffect(t,e)};et.useId=function(){return tn.current.useId()};et.useImperativeHandle=function(t,e,n){return tn.current.useImperativeHandle(t,e,n)};et.useInsertionEffect=function(t,e){return tn.current.useInsertionEffect(t,e)};et.useLayoutEffect=function(t,e){return tn.current.useLayoutEffect(t,e)};et.useMemo=function(t,e){return tn.current.useMemo(t,e)};et.useReducer=function(t,e,n){return tn.current.useReducer(t,e,n)};et.useRef=function(t){return tn.current.useRef(t)};et.useState=function(t){return tn.current.useState(t)};et.useSyncExternalStore=function(t,e,n){return tn.current.useSyncExternalStore(t,e,n)};et.useTransition=function(){return tn.current.useTransition()};et.version="18.3.1";O0.exports=et;var ne=O0.exports;const Py=my(ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy=ne,Iy=Symbol.for("react.element"),Ny=Symbol.for("react.fragment"),Uy=Object.prototype.hasOwnProperty,Oy=Dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fy={key:!0,ref:!0,__self:!0,__source:!0};function X0(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Uy.call(e,i)&&!Fy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Iy,type:t,key:o,ref:s,props:r,_owner:Oy.current}}Fc.Fragment=Ny;Fc.jsx=X0;Fc.jsxs=X0;U0.exports=Fc;var z=U0.exports,Nf={},j0={exports:{}},bn={},Y0={exports:{}},q0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,X){var k=U.length;U.push(X);e:for(;0<k;){var D=k-1>>>1,H=U[D];if(0<r(H,X))U[D]=X,U[k]=H,k=D;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var X=U[0],k=U.pop();if(k!==X){U[0]=k;e:for(var D=0,H=U.length,ee=H>>>1;D<ee;){var se=2*(D+1)-1,fe=U[se],ce=se+1,xe=U[ce];if(0>r(fe,k))ce<H&&0>r(xe,fe)?(U[D]=xe,U[ce]=k,D=ce):(U[D]=fe,U[se]=k,D=se);else if(ce<H&&0>r(xe,k))U[D]=xe,U[ce]=k,D=ce;else break e}}return X}function r(U,X){var k=U.sortIndex-X.sortIndex;return k!==0?k:U.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],f=1,d=null,u=3,p=!1,x=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(U){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=U)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function w(U){if(_=!1,g(U),!x)if(n(l)!==null)x=!0,B(E);else{var X=n(c);X!==null&&G(w,X.startTime-U)}}function E(U,X){x=!1,_&&(_=!1,h(R),R=-1),p=!0;var k=u;try{for(g(X),d=n(l);d!==null&&(!(d.expirationTime>X)||U&&!I());){var D=d.callback;if(typeof D=="function"){d.callback=null,u=d.priorityLevel;var H=D(d.expirationTime<=X);X=t.unstable_now(),typeof H=="function"?d.callback=H:d===n(l)&&i(l),g(X)}else i(l);d=n(l)}if(d!==null)var ee=!0;else{var se=n(c);se!==null&&G(w,se.startTime-X),ee=!1}return ee}finally{d=null,u=k,p=!1}}var T=!1,A=null,R=-1,M=5,S=-1;function I(){return!(t.unstable_now()-S<M)}function N(){if(A!==null){var U=t.unstable_now();S=U;var X=!0;try{X=A(!0,U)}finally{X?P():(T=!1,A=null)}}else T=!1}var P;if(typeof v=="function")P=function(){v(N)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,O=C.port2;C.port1.onmessage=N,P=function(){O.postMessage(null)}}else P=function(){m(N,0)};function B(U){A=U,T||(T=!0,P())}function G(U,X){R=m(function(){U(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,B(E))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(u){case 1:case 2:case 3:var X=3;break;default:X=u}var k=u;u=X;try{return U()}finally{u=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,X){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var k=u;u=U;try{return X()}finally{u=k}},t.unstable_scheduleCallback=function(U,X,k){var D=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?D+k:D):k=D,U){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=k+H,U={id:f++,callback:X,priorityLevel:U,startTime:k,expirationTime:H,sortIndex:-1},k>D?(U.sortIndex=k,e(c,U),n(l)===null&&U===n(c)&&(_?(h(R),R=-1):_=!0,G(w,k-D))):(U.sortIndex=H,e(l,U),x||p||(x=!0,B(E))),U},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(U){var X=u;return function(){var k=u;u=X;try{return U.apply(this,arguments)}finally{u=k}}}})(q0);Y0.exports=q0;var zy=Y0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky=ne,wn=zy;function we(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var K0=new Set,js={};function qr(t,e){Wo(t,e),Wo(t+"Capture",e)}function Wo(t,e){for(js[t]=e,t=0;t<e.length;t++)K0.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=Object.prototype.hasOwnProperty,By=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sp={},Mp={};function Vy(t){return Uf.call(Mp,t)?!0:Uf.call(Sp,t)?!1:By.test(t)?Mp[t]=!0:(Sp[t]=!0,!1)}function Hy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Gy(t,e,n,i){if(e===null||typeof e>"u"||Hy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var nh=/[\-:]([a-z])/g;function ih(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nh,ih);Vt[e]=new nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nh,ih);Vt[e]=new nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nh,ih);Vt[e]=new nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new nn(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function rh(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Gy(e,n,r,i)&&(n=null),i||r===null?Vy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ca=Symbol.for("react.element"),So=Symbol.for("react.portal"),Mo=Symbol.for("react.fragment"),oh=Symbol.for("react.strict_mode"),Of=Symbol.for("react.profiler"),Z0=Symbol.for("react.provider"),Q0=Symbol.for("react.context"),sh=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),zf=Symbol.for("react.suspense_list"),ah=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),J0=Symbol.for("react.offscreen"),wp=Symbol.iterator;function us(t){return t===null||typeof t!="object"?null:(t=wp&&t[wp]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,vu;function bs(t){if(vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vu=e&&e[1]||""}return`
`+vu+t}var _u=!1;function yu(t,e){if(!t||_u)return"";_u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{_u=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bs(t):""}function Wy(t){switch(t.tag){case 5:return bs(t.type);case 16:return bs("Lazy");case 13:return bs("Suspense");case 19:return bs("SuspenseList");case 0:case 2:case 15:return t=yu(t.type,!1),t;case 11:return t=yu(t.type.render,!1),t;case 1:return t=yu(t.type,!0),t;default:return""}}function kf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mo:return"Fragment";case So:return"Portal";case Of:return"Profiler";case oh:return"StrictMode";case Ff:return"Suspense";case zf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Q0:return(t.displayName||"Context")+".Consumer";case Z0:return(t._context.displayName||"Context")+".Provider";case sh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ah:return e=t.displayName||null,e!==null?e:kf(t.type)||"Memo";case Gi:e=t._payload,t=t._init;try{return kf(t(e))}catch{}}return null}function Xy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kf(e);case 8:return e===oh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jy(t){var e=$0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=jy(t))}function ex(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=$0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bf(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ep(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tx(t,e){e=e.checked,e!=null&&rh(t,"checked",e,!1)}function Vf(t,e){tx(t,e);var n=cr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hf(t,e.type,cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hf(t,e,n){(e!=="number"||Yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ts=Array.isArray;function No(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+cr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Gf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(we(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(we(92));if(Ts(n)){if(1<n.length)throw Error(we(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cr(n)}}function nx(t,e){var n=cr(e.value),i=cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ap(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ix(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ix(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var La,rx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(La=La||document.createElement("div"),La.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=La.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ys(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yy=["Webkit","ms","Moz","O"];Object.keys(Ns).forEach(function(t){Yy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ns[e]=Ns[t]})});function ox(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ns.hasOwnProperty(t)&&Ns[t]?(""+e).trim():e+"px"}function sx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ox(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var qy=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xf(t,e){if(e){if(qy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(we(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(we(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(we(61))}if(e.style!=null&&typeof e.style!="object")throw Error(we(62))}}function jf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yf=null;function lh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qf=null,Uo=null,Oo=null;function Cp(t){if(t=ga(t)){if(typeof qf!="function")throw Error(we(280));var e=t.stateNode;e&&(e=Hc(e),qf(t.stateNode,t.type,e))}}function ax(t){Uo?Oo?Oo.push(t):Oo=[t]:Uo=t}function lx(){if(Uo){var t=Uo,e=Oo;if(Oo=Uo=null,Cp(t),e)for(t=0;t<e.length;t++)Cp(e[t])}}function cx(t,e){return t(e)}function ux(){}var Su=!1;function fx(t,e,n){if(Su)return t(e,n);Su=!0;try{return cx(t,e,n)}finally{Su=!1,(Uo!==null||Oo!==null)&&(ux(),lx())}}function qs(t,e){var n=t.stateNode;if(n===null)return null;var i=Hc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(we(231,e,typeof n));return n}var Kf=!1;if(Ci)try{var fs={};Object.defineProperty(fs,"passive",{get:function(){Kf=!0}}),window.addEventListener("test",fs,fs),window.removeEventListener("test",fs,fs)}catch{Kf=!1}function Ky(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Us=!1,ql=null,Kl=!1,Zf=null,Zy={onError:function(t){Us=!0,ql=t}};function Qy(t,e,n,i,r,o,s,a,l){Us=!1,ql=null,Ky.apply(Zy,arguments)}function Jy(t,e,n,i,r,o,s,a,l){if(Qy.apply(this,arguments),Us){if(Us){var c=ql;Us=!1,ql=null}else throw Error(we(198));Kl||(Kl=!0,Zf=c)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rp(t){if(Kr(t)!==t)throw Error(we(188))}function $y(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(we(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Rp(r),t;if(o===i)return Rp(r),e;o=o.sibling}throw Error(we(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(we(189))}}if(n.alternate!==i)throw Error(we(190))}if(n.tag!==3)throw Error(we(188));return n.stateNode.current===n?t:e}function hx(t){return t=$y(t),t!==null?px(t):null}function px(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=px(t);if(e!==null)return e;t=t.sibling}return null}var mx=wn.unstable_scheduleCallback,Lp=wn.unstable_cancelCallback,e1=wn.unstable_shouldYield,t1=wn.unstable_requestPaint,_t=wn.unstable_now,n1=wn.unstable_getCurrentPriorityLevel,ch=wn.unstable_ImmediatePriority,gx=wn.unstable_UserBlockingPriority,Zl=wn.unstable_NormalPriority,i1=wn.unstable_LowPriority,xx=wn.unstable_IdlePriority,zc=null,si=null;function r1(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(zc,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:a1,o1=Math.log,s1=Math.LN2;function a1(t){return t>>>=0,t===0?32:31-(o1(t)/s1|0)|0}var Pa=64,Da=4194304;function As(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=As(a):(o&=s,o!==0&&(i=As(o)))}else s=n&~r,s!==0?i=As(s):o!==0&&(i=As(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),r=1<<n,i|=t[n],e&=~r;return i}function l1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Qn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=l1(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Qf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vx(){var t=Pa;return Pa<<=1,!(Pa&4194240)&&(Pa=64),t}function Mu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function u1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Qn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function uh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function _x(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yx,fh,Sx,Mx,wx,Jf=!1,Ia=[],Ji=null,$i=null,er=null,Ks=new Map,Zs=new Map,Xi=[],f1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pp(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Ks.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(e.pointerId)}}function ds(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=ga(e),e!==null&&fh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function d1(t,e,n,i,r){switch(e){case"focusin":return Ji=ds(Ji,t,e,n,i,r),!0;case"dragenter":return $i=ds($i,t,e,n,i,r),!0;case"mouseover":return er=ds(er,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Ks.set(o,ds(Ks.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Zs.set(o,ds(Zs.get(o)||null,t,e,n,i,r)),!0}return!1}function Ex(t){var e=Lr(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=dx(n),e!==null){t.blockedOn=e,wx(t.priority,function(){Sx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Yf=i,n.target.dispatchEvent(i),Yf=null}else return e=ga(n),e!==null&&fh(e),t.blockedOn=n,!1;e.shift()}return!0}function Dp(t,e,n){Rl(t)&&n.delete(e)}function h1(){Jf=!1,Ji!==null&&Rl(Ji)&&(Ji=null),$i!==null&&Rl($i)&&($i=null),er!==null&&Rl(er)&&(er=null),Ks.forEach(Dp),Zs.forEach(Dp)}function hs(t,e){t.blockedOn===e&&(t.blockedOn=null,Jf||(Jf=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,h1)))}function Qs(t){function e(r){return hs(r,t)}if(0<Ia.length){hs(Ia[0],t);for(var n=1;n<Ia.length;n++){var i=Ia[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&hs(Ji,t),$i!==null&&hs($i,t),er!==null&&hs(er,t),Ks.forEach(e),Zs.forEach(e),n=0;n<Xi.length;n++)i=Xi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Xi.length&&(n=Xi[0],n.blockedOn===null);)Ex(n),n.blockedOn===null&&Xi.shift()}var Fo=Ui.ReactCurrentBatchConfig,Jl=!0;function p1(t,e,n,i){var r=ot,o=Fo.transition;Fo.transition=null;try{ot=1,dh(t,e,n,i)}finally{ot=r,Fo.transition=o}}function m1(t,e,n,i){var r=ot,o=Fo.transition;Fo.transition=null;try{ot=4,dh(t,e,n,i)}finally{ot=r,Fo.transition=o}}function dh(t,e,n,i){if(Jl){var r=$f(t,e,n,i);if(r===null)Du(t,e,i,$l,n),Pp(t,i);else if(d1(r,t,e,n,i))i.stopPropagation();else if(Pp(t,i),e&4&&-1<f1.indexOf(t)){for(;r!==null;){var o=ga(r);if(o!==null&&yx(o),o=$f(t,e,n,i),o===null&&Du(t,e,i,$l,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Du(t,e,i,null,n)}}var $l=null;function $f(t,e,n,i){if($l=null,t=lh(i),t=Lr(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $l=t,null}function bx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n1()){case ch:return 1;case gx:return 4;case Zl:case i1:return 16;case xx:return 536870912;default:return 16}default:return 16}}var Yi=null,hh=null,Ll=null;function Tx(){if(Ll)return Ll;var t,e=hh,n=e.length,i,r="value"in Yi?Yi.value:Yi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Ll=r.slice(t,1<i?1-i:void 0)}function Pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Na(){return!0}function Ip(){return!1}function Tn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Na:Ip,this.isPropagationStopped=Ip,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),e}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ph=Tn(os),ma=gt({},os,{view:0,detail:0}),g1=Tn(ma),wu,Eu,ps,kc=gt({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ps&&(ps&&t.type==="mousemove"?(wu=t.screenX-ps.screenX,Eu=t.screenY-ps.screenY):Eu=wu=0,ps=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:Eu}}),Np=Tn(kc),x1=gt({},kc,{dataTransfer:0}),v1=Tn(x1),_1=gt({},ma,{relatedTarget:0}),bu=Tn(_1),y1=gt({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),S1=Tn(y1),M1=gt({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),w1=Tn(M1),E1=gt({},os,{data:0}),Up=Tn(E1),b1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=A1[t])?!!e[t]:!1}function mh(){return C1}var R1=gt({},ma,{key:function(t){if(t.key){var e=b1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?T1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mh,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),L1=Tn(R1),P1=gt({},kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=Tn(P1),D1=gt({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mh}),I1=Tn(D1),N1=gt({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),U1=Tn(N1),O1=gt({},kc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),F1=Tn(O1),z1=[9,13,27,32],gh=Ci&&"CompositionEvent"in window,Os=null;Ci&&"documentMode"in document&&(Os=document.documentMode);var k1=Ci&&"TextEvent"in window&&!Os,Ax=Ci&&(!gh||Os&&8<Os&&11>=Os),Fp=" ",zp=!1;function Cx(t,e){switch(t){case"keyup":return z1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wo=!1;function B1(t,e){switch(t){case"compositionend":return Rx(e);case"keypress":return e.which!==32?null:(zp=!0,Fp);case"textInput":return t=e.data,t===Fp&&zp?null:t;default:return null}}function V1(t,e){if(wo)return t==="compositionend"||!gh&&Cx(t,e)?(t=Tx(),Ll=hh=Yi=null,wo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ax&&e.locale!=="ko"?null:e.data;default:return null}}var H1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!H1[t.type]:e==="textarea"}function Lx(t,e,n,i){ax(i),e=ec(e,"onChange"),0<e.length&&(n=new ph("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fs=null,Js=null;function G1(t){Vx(t,0)}function Bc(t){var e=To(t);if(ex(e))return t}function W1(t,e){if(t==="change")return e}var Px=!1;if(Ci){var Tu;if(Ci){var Au="oninput"in document;if(!Au){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Au=typeof Bp.oninput=="function"}Tu=Au}else Tu=!1;Px=Tu&&(!document.documentMode||9<document.documentMode)}function Vp(){Fs&&(Fs.detachEvent("onpropertychange",Dx),Js=Fs=null)}function Dx(t){if(t.propertyName==="value"&&Bc(Js)){var e=[];Lx(e,Js,t,lh(t)),fx(G1,e)}}function X1(t,e,n){t==="focusin"?(Vp(),Fs=e,Js=n,Fs.attachEvent("onpropertychange",Dx)):t==="focusout"&&Vp()}function j1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bc(Js)}function Y1(t,e){if(t==="click")return Bc(e)}function q1(t,e){if(t==="input"||t==="change")return Bc(e)}function K1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:K1;function $s(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Uf.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function Hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gp(t,e){var n=Hp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hp(n)}}function Ix(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ix(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Nx(){for(var t=window,e=Yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yl(t.document)}return e}function xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Z1(t){var e=Nx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ix(n.ownerDocument.documentElement,n)){if(i!==null&&xh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Gp(n,o);var s=Gp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Q1=Ci&&"documentMode"in document&&11>=document.documentMode,Eo=null,ed=null,zs=null,td=!1;function Wp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;td||Eo==null||Eo!==Yl(i)||(i=Eo,"selectionStart"in i&&xh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),zs&&$s(zs,i)||(zs=i,i=ec(ed,"onSelect"),0<i.length&&(e=new ph("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Eo)))}function Ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bo={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},Cu={},Ux={};Ci&&(Ux=document.createElement("div").style,"AnimationEvent"in window||(delete bo.animationend.animation,delete bo.animationiteration.animation,delete bo.animationstart.animation),"TransitionEvent"in window||delete bo.transitionend.transition);function Vc(t){if(Cu[t])return Cu[t];if(!bo[t])return t;var e=bo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ux)return Cu[t]=e[n];return t}var Ox=Vc("animationend"),Fx=Vc("animationiteration"),zx=Vc("animationstart"),kx=Vc("transitionend"),Bx=new Map,Xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){Bx.set(t,e),qr(e,[t])}for(var Ru=0;Ru<Xp.length;Ru++){var Lu=Xp[Ru],J1=Lu.toLowerCase(),$1=Lu[0].toUpperCase()+Lu.slice(1);hr(J1,"on"+$1)}hr(Ox,"onAnimationEnd");hr(Fx,"onAnimationIteration");hr(zx,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(kx,"onTransitionEnd");Wo("onMouseEnter",["mouseout","mouseover"]);Wo("onMouseLeave",["mouseout","mouseover"]);Wo("onPointerEnter",["pointerout","pointerover"]);Wo("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cs));function jp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Jy(i,e,void 0,t),t.currentTarget=null}function Vx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;jp(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;jp(r,a,c),o=l}}}if(Kl)throw t=Zf,Kl=!1,Zf=null,t}function lt(t,e){var n=e[sd];n===void 0&&(n=e[sd]=new Set);var i=t+"__bubble";n.has(i)||(Hx(e,t,2,!1),n.add(i))}function Pu(t,e,n){var i=0;e&&(i|=4),Hx(n,t,i,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function ea(t){if(!t[Oa]){t[Oa]=!0,K0.forEach(function(n){n!=="selectionchange"&&(eS.has(n)||Pu(n,!1,t),Pu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,Pu("selectionchange",!1,e))}}function Hx(t,e,n,i){switch(bx(e)){case 1:var r=p1;break;case 4:r=m1;break;default:r=dh}n=r.bind(null,e,n,t),r=void 0,!Kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Du(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Lr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}fx(function(){var c=o,f=lh(n),d=[];e:{var u=Bx.get(t);if(u!==void 0){var p=ph,x=t;switch(t){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":p=L1;break;case"focusin":x="focus",p=bu;break;case"focusout":x="blur",p=bu;break;case"beforeblur":case"afterblur":p=bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=v1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=I1;break;case Ox:case Fx:case zx:p=S1;break;case kx:p=U1;break;case"scroll":p=g1;break;case"wheel":p=F1;break;case"copy":case"cut":case"paste":p=w1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Op}var _=(e&4)!==0,m=!_&&t==="scroll",h=_?u!==null?u+"Capture":null:u;_=[];for(var v=c,g;v!==null;){g=v;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,h!==null&&(w=qs(v,h),w!=null&&_.push(ta(v,w,g)))),m)break;v=v.return}0<_.length&&(u=new p(u,x,null,n,f),d.push({event:u,listeners:_}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==Yf&&(x=n.relatedTarget||n.fromElement)&&(Lr(x)||x[Ri]))break e;if((p||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Lr(x):null,x!==null&&(m=Kr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(_=Np,w="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Op,w="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?u:To(p),g=x==null?u:To(x),u=new _(w,v+"leave",p,n,f),u.target=m,u.relatedTarget=g,w=null,Lr(f)===c&&(_=new _(h,v+"enter",x,n,f),_.target=g,_.relatedTarget=m,w=_),m=w,p&&x)t:{for(_=p,h=x,v=0,g=_;g;g=Jr(g))v++;for(g=0,w=h;w;w=Jr(w))g++;for(;0<v-g;)_=Jr(_),v--;for(;0<g-v;)h=Jr(h),g--;for(;v--;){if(_===h||h!==null&&_===h.alternate)break t;_=Jr(_),h=Jr(h)}_=null}else _=null;p!==null&&Yp(d,u,p,_,!1),x!==null&&m!==null&&Yp(d,m,x,_,!0)}}e:{if(u=c?To(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var E=W1;else if(kp(u))if(Px)E=q1;else{E=j1;var T=X1}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(E=Y1);if(E&&(E=E(t,c))){Lx(d,E,n,f);break e}T&&T(t,u,c),t==="focusout"&&(T=u._wrapperState)&&T.controlled&&u.type==="number"&&Hf(u,"number",u.value)}switch(T=c?To(c):window,t){case"focusin":(kp(T)||T.contentEditable==="true")&&(Eo=T,ed=c,zs=null);break;case"focusout":zs=ed=Eo=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,Wp(d,n,f);break;case"selectionchange":if(Q1)break;case"keydown":case"keyup":Wp(d,n,f)}var A;if(gh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else wo?Cx(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Ax&&n.locale!=="ko"&&(wo||R!=="onCompositionStart"?R==="onCompositionEnd"&&wo&&(A=Tx()):(Yi=f,hh="value"in Yi?Yi.value:Yi.textContent,wo=!0)),T=ec(c,R),0<T.length&&(R=new Up(R,t,null,n,f),d.push({event:R,listeners:T}),A?R.data=A:(A=Rx(n),A!==null&&(R.data=A)))),(A=k1?B1(t,n):V1(t,n))&&(c=ec(c,"onBeforeInput"),0<c.length&&(f=new Up("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=A))}Vx(d,e)})}function ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ec(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=qs(t,n),o!=null&&i.unshift(ta(t,o,r)),o=qs(t,e),o!=null&&i.push(ta(t,o,r))),t=t.return}return i}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=qs(n,o),l!=null&&s.unshift(ta(n,l,a))):r||(l=qs(n,o),l!=null&&s.push(ta(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var tS=/\r\n?/g,nS=/\u0000|\uFFFD/g;function qp(t){return(typeof t=="string"?t:""+t).replace(tS,`
`).replace(nS,"")}function Fa(t,e,n){if(e=qp(e),qp(t)!==e&&n)throw Error(we(425))}function tc(){}var nd=null,id=null;function rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var od=typeof setTimeout=="function"?setTimeout:void 0,iS=typeof clearTimeout=="function"?clearTimeout:void 0,Kp=typeof Promise=="function"?Promise:void 0,rS=typeof queueMicrotask=="function"?queueMicrotask:typeof Kp<"u"?function(t){return Kp.resolve(null).then(t).catch(oS)}:od;function oS(t){setTimeout(function(){throw t})}function Iu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Qs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Qs(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),oi="__reactFiber$"+ss,na="__reactProps$"+ss,Ri="__reactContainer$"+ss,sd="__reactEvents$"+ss,sS="__reactListeners$"+ss,aS="__reactHandles$"+ss;function Lr(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zp(t);t!==null;){if(n=t[oi])return n;t=Zp(t)}return e}t=n,n=t.parentNode}return null}function ga(t){return t=t[oi]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function To(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(we(33))}function Hc(t){return t[na]||null}var ad=[],Ao=-1;function pr(t){return{current:t}}function ut(t){0>Ao||(t.current=ad[Ao],ad[Ao]=null,Ao--)}function at(t,e){Ao++,ad[Ao]=t.current,t.current=e}var ur={},qt=pr(ur),un=pr(!1),Br=ur;function Xo(t,e){var n=t.type.contextTypes;if(!n)return ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function nc(){ut(un),ut(qt)}function Qp(t,e,n){if(qt.current!==ur)throw Error(we(168));at(qt,e),at(un,n)}function Gx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(we(108,Xy(t)||"Unknown",r));return gt({},n,i)}function ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Br=qt.current,at(qt,t),at(un,un.current),!0}function Jp(t,e,n){var i=t.stateNode;if(!i)throw Error(we(169));n?(t=Gx(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,ut(un),ut(qt),at(qt,t)):ut(un),at(un,n)}var yi=null,Gc=!1,Nu=!1;function Wx(t){yi===null?yi=[t]:yi.push(t)}function lS(t){Gc=!0,Wx(t)}function mr(){if(!Nu&&yi!==null){Nu=!0;var t=0,e=ot;try{var n=yi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,Gc=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),mx(ch,mr),r}finally{ot=e,Nu=!1}}return null}var Co=[],Ro=0,rc=null,oc=0,Ln=[],Pn=0,Vr=null,wi=1,Ei="";function Er(t,e){Co[Ro++]=oc,Co[Ro++]=rc,rc=t,oc=e}function Xx(t,e,n){Ln[Pn++]=wi,Ln[Pn++]=Ei,Ln[Pn++]=Vr,Vr=t;var i=wi;t=Ei;var r=32-Qn(i)-1;i&=~(1<<r),n+=1;var o=32-Qn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,wi=1<<32-Qn(e)+r|n<<r|i,Ei=o+t}else wi=1<<o|n<<r|i,Ei=t}function vh(t){t.return!==null&&(Er(t,1),Xx(t,1,0))}function _h(t){for(;t===rc;)rc=Co[--Ro],Co[Ro]=null,oc=Co[--Ro],Co[Ro]=null;for(;t===Vr;)Vr=Ln[--Pn],Ln[Pn]=null,Ei=Ln[--Pn],Ln[Pn]=null,wi=Ln[--Pn],Ln[Pn]=null}var Mn=null,yn=null,dt=!1,jn=null;function jx(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $p(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,yn=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vr!==null?{id:wi,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,yn=null,!0):!1;default:return!1}}function ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cd(t){if(dt){var e=yn;if(e){var n=e;if(!$p(t,e)){if(ld(t))throw Error(we(418));e=tr(n.nextSibling);var i=Mn;e&&$p(t,e)?jx(i,n):(t.flags=t.flags&-4097|2,dt=!1,Mn=t)}}else{if(ld(t))throw Error(we(418));t.flags=t.flags&-4097|2,dt=!1,Mn=t}}}function em(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function za(t){if(t!==Mn)return!1;if(!dt)return em(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rd(t.type,t.memoizedProps)),e&&(e=yn)){if(ld(t))throw Yx(),Error(we(418));for(;e;)jx(t,e),e=tr(e.nextSibling)}if(em(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(we(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Mn?tr(t.stateNode.nextSibling):null;return!0}function Yx(){for(var t=yn;t;)t=tr(t.nextSibling)}function jo(){yn=Mn=null,dt=!1}function yh(t){jn===null?jn=[t]:jn.push(t)}var cS=Ui.ReactCurrentBatchConfig;function ms(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(we(309));var i=n.stateNode}if(!i)throw Error(we(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(we(284));if(!n._owner)throw Error(we(290,t))}return t}function ka(t,e){throw t=Object.prototype.toString.call(e),Error(we(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tm(t){var e=t._init;return e(t._payload)}function qx(t){function e(h,v){if(t){var g=h.deletions;g===null?(h.deletions=[v],h.flags|=16):g.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=or(h,v),h.index=0,h.sibling=null,h}function o(h,v,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<v?(h.flags|=2,v):g):(h.flags|=2,v)):(h.flags|=1048576,v)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,g,w){return v===null||v.tag!==6?(v=Vu(g,h.mode,w),v.return=h,v):(v=r(v,g),v.return=h,v)}function l(h,v,g,w){var E=g.type;return E===Mo?f(h,v,g.props.children,w,g.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Gi&&tm(E)===v.type)?(w=r(v,g.props),w.ref=ms(h,v,g),w.return=h,w):(w=zl(g.type,g.key,g.props,null,h.mode,w),w.ref=ms(h,v,g),w.return=h,w)}function c(h,v,g,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Hu(g,h.mode,w),v.return=h,v):(v=r(v,g.children||[]),v.return=h,v)}function f(h,v,g,w,E){return v===null||v.tag!==7?(v=Ur(g,h.mode,w,E),v.return=h,v):(v=r(v,g),v.return=h,v)}function d(h,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Vu(""+v,h.mode,g),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ca:return g=zl(v.type,v.key,v.props,null,h.mode,g),g.ref=ms(h,null,v),g.return=h,g;case So:return v=Hu(v,h.mode,g),v.return=h,v;case Gi:var w=v._init;return d(h,w(v._payload),g)}if(Ts(v)||us(v))return v=Ur(v,h.mode,g,null),v.return=h,v;ka(h,v)}return null}function u(h,v,g,w){var E=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(h,v,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ca:return g.key===E?l(h,v,g,w):null;case So:return g.key===E?c(h,v,g,w):null;case Gi:return E=g._init,u(h,v,E(g._payload),w)}if(Ts(g)||us(g))return E!==null?null:f(h,v,g,w,null);ka(h,g)}return null}function p(h,v,g,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(g)||null,a(v,h,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ca:return h=h.get(w.key===null?g:w.key)||null,l(v,h,w,E);case So:return h=h.get(w.key===null?g:w.key)||null,c(v,h,w,E);case Gi:var T=w._init;return p(h,v,g,T(w._payload),E)}if(Ts(w)||us(w))return h=h.get(g)||null,f(v,h,w,E,null);ka(v,w)}return null}function x(h,v,g,w){for(var E=null,T=null,A=v,R=v=0,M=null;A!==null&&R<g.length;R++){A.index>R?(M=A,A=null):M=A.sibling;var S=u(h,A,g[R],w);if(S===null){A===null&&(A=M);break}t&&A&&S.alternate===null&&e(h,A),v=o(S,v,R),T===null?E=S:T.sibling=S,T=S,A=M}if(R===g.length)return n(h,A),dt&&Er(h,R),E;if(A===null){for(;R<g.length;R++)A=d(h,g[R],w),A!==null&&(v=o(A,v,R),T===null?E=A:T.sibling=A,T=A);return dt&&Er(h,R),E}for(A=i(h,A);R<g.length;R++)M=p(A,h,R,g[R],w),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?R:M.key),v=o(M,v,R),T===null?E=M:T.sibling=M,T=M);return t&&A.forEach(function(I){return e(h,I)}),dt&&Er(h,R),E}function _(h,v,g,w){var E=us(g);if(typeof E!="function")throw Error(we(150));if(g=E.call(g),g==null)throw Error(we(151));for(var T=E=null,A=v,R=v=0,M=null,S=g.next();A!==null&&!S.done;R++,S=g.next()){A.index>R?(M=A,A=null):M=A.sibling;var I=u(h,A,S.value,w);if(I===null){A===null&&(A=M);break}t&&A&&I.alternate===null&&e(h,A),v=o(I,v,R),T===null?E=I:T.sibling=I,T=I,A=M}if(S.done)return n(h,A),dt&&Er(h,R),E;if(A===null){for(;!S.done;R++,S=g.next())S=d(h,S.value,w),S!==null&&(v=o(S,v,R),T===null?E=S:T.sibling=S,T=S);return dt&&Er(h,R),E}for(A=i(h,A);!S.done;R++,S=g.next())S=p(A,h,R,S.value,w),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?R:S.key),v=o(S,v,R),T===null?E=S:T.sibling=S,T=S);return t&&A.forEach(function(N){return e(h,N)}),dt&&Er(h,R),E}function m(h,v,g,w){if(typeof g=="object"&&g!==null&&g.type===Mo&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ca:e:{for(var E=g.key,T=v;T!==null;){if(T.key===E){if(E=g.type,E===Mo){if(T.tag===7){n(h,T.sibling),v=r(T,g.props.children),v.return=h,h=v;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Gi&&tm(E)===T.type){n(h,T.sibling),v=r(T,g.props),v.ref=ms(h,T,g),v.return=h,h=v;break e}n(h,T);break}else e(h,T);T=T.sibling}g.type===Mo?(v=Ur(g.props.children,h.mode,w,g.key),v.return=h,h=v):(w=zl(g.type,g.key,g.props,null,h.mode,w),w.ref=ms(h,v,g),w.return=h,h=w)}return s(h);case So:e:{for(T=g.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(h,v.sibling),v=r(v,g.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=Hu(g,h.mode,w),v.return=h,h=v}return s(h);case Gi:return T=g._init,m(h,v,T(g._payload),w)}if(Ts(g))return x(h,v,g,w);if(us(g))return _(h,v,g,w);ka(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,g),v.return=h,h=v):(n(h,v),v=Vu(g,h.mode,w),v.return=h,h=v),s(h)):n(h,v)}return m}var Yo=qx(!0),Kx=qx(!1),sc=pr(null),ac=null,Lo=null,Sh=null;function Mh(){Sh=Lo=ac=null}function wh(t){var e=sc.current;ut(sc),t._currentValue=e}function ud(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function zo(t,e){ac=t,Sh=Lo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(Sh!==t)if(t={context:t,memoizedValue:e,next:null},Lo===null){if(ac===null)throw Error(we(308));Lo=t,ac.dependencies={lanes:0,firstContext:t}}else Lo=Lo.next=t;return e}var Pr=null;function Eh(t){Pr===null?Pr=[t]:Pr.push(t)}function Zx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Eh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Li(t,i)}function Li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wi=!1;function bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(t,n)}return r=i.interleaved,r===null?(e.next=e,Eh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(t,n)}function Dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uh(t,n)}}function nm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lc(t,e,n,i){var r=t.updateQueue;Wi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,f=c=l=null,a=o;do{var u=a.lane,p=a.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,_=a;switch(u=e,p=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){d=x.call(p,d,u);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,u=typeof x=="function"?x.call(p,d,u):x,u==null)break e;d=gt({},d,u);break e;case 2:Wi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,s|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Gr|=s,t.lanes=s,t.memoizedState=d}}function im(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(we(191,r));r.call(i)}}}var xa={},ai=pr(xa),ia=pr(xa),ra=pr(xa);function Dr(t){if(t===xa)throw Error(we(174));return t}function Th(t,e){switch(at(ra,e),at(ia,t),at(ai,xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wf(e,t)}ut(ai),at(ai,e)}function qo(){ut(ai),ut(ia),ut(ra)}function Jx(t){Dr(ra.current);var e=Dr(ai.current),n=Wf(e,t.type);e!==n&&(at(ia,t),at(ai,n))}function Ah(t){ia.current===t&&(ut(ai),ut(ia))}var pt=pr(0);function cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uu=[];function Ch(){for(var t=0;t<Uu.length;t++)Uu[t]._workInProgressVersionPrimary=null;Uu.length=0}var Il=Ui.ReactCurrentDispatcher,Ou=Ui.ReactCurrentBatchConfig,Hr=0,mt=null,Tt=null,It=null,uc=!1,ks=!1,oa=0,uS=0;function Gt(){throw Error(we(321))}function Rh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function Lh(t,e,n,i,r,o){if(Hr=o,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Il.current=t===null||t.memoizedState===null?pS:mS,t=n(i,r),ks){o=0;do{if(ks=!1,oa=0,25<=o)throw Error(we(301));o+=1,It=Tt=null,e.updateQueue=null,Il.current=gS,t=n(i,r)}while(ks)}if(Il.current=fc,e=Tt!==null&&Tt.next!==null,Hr=0,It=Tt=mt=null,uc=!1,e)throw Error(we(300));return t}function Ph(){var t=oa!==0;return oa=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?mt.memoizedState=It=t:It=It.next=t,It}function Fn(){if(Tt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=It===null?mt.memoizedState:It.next;if(e!==null)It=e,Tt=t;else{if(t===null)throw Error(we(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},It===null?mt.memoizedState=It=t:It=It.next=t}return It}function sa(t,e){return typeof e=="function"?e(t):e}function Fu(t){var e=Fn(),n=e.queue;if(n===null)throw Error(we(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var f=c.lane;if((Hr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,mt.lanes|=f,Gr|=f}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,ei(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,mt.lanes|=o,Gr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zu(t){var e=Fn(),n=e.queue;if(n===null)throw Error(we(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);ei(o,e.memoizedState)||(ln=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function $x(){}function ev(t,e){var n=mt,i=Fn(),r=e(),o=!ei(i.memoizedState,r);if(o&&(i.memoizedState=r,ln=!0),i=i.queue,Dh(iv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,aa(9,nv.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(we(349));Hr&30||tv(n,e,r)}return r}function tv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nv(t,e,n,i){e.value=n,e.getSnapshot=i,rv(e)&&ov(t)}function iv(t,e,n){return n(function(){rv(e)&&ov(t)})}function rv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function ov(t){var e=Li(t,1);e!==null&&Jn(e,t,1,-1)}function rm(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},e.queue=t,t=t.dispatch=hS.bind(null,mt,t),[e.memoizedState,t]}function aa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function sv(){return Fn().memoizedState}function Nl(t,e,n,i){var r=ii();mt.flags|=t,r.memoizedState=aa(1|e,n,void 0,i===void 0?null:i)}function Wc(t,e,n,i){var r=Fn();i=i===void 0?null:i;var o=void 0;if(Tt!==null){var s=Tt.memoizedState;if(o=s.destroy,i!==null&&Rh(i,s.deps)){r.memoizedState=aa(e,n,o,i);return}}mt.flags|=t,r.memoizedState=aa(1|e,n,o,i)}function om(t,e){return Nl(8390656,8,t,e)}function Dh(t,e){return Wc(2048,8,t,e)}function av(t,e){return Wc(4,2,t,e)}function lv(t,e){return Wc(4,4,t,e)}function cv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uv(t,e,n){return n=n!=null?n.concat([t]):null,Wc(4,4,cv.bind(null,e,t),n)}function Ih(){}function fv(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function dv(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function hv(t,e,n){return Hr&21?(ei(n,e)||(n=vx(),mt.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function fS(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Ou.transition;Ou.transition={};try{t(!1),e()}finally{ot=n,Ou.transition=i}}function pv(){return Fn().memoizedState}function dS(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},mv(t))gv(e,n);else if(n=Zx(t,e,n,i),n!==null){var r=$t();Jn(n,t,i,r),xv(n,e,i)}}function hS(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(mv(t))gv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,ei(a,s)){var l=e.interleaved;l===null?(r.next=r,Eh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Zx(t,e,r,i),n!==null&&(r=$t(),Jn(n,t,i,r),xv(n,e,i))}}function mv(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function gv(t,e){ks=uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uh(t,n)}}var fc={readContext:On,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},pS={readContext:On,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:om,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,cv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=dS.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:rm,useDebugValue:Ih,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=rm(!1),e=t[0];return t=fS.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=ii();if(dt){if(n===void 0)throw Error(we(407));n=n()}else{if(n=e(),Ut===null)throw Error(we(349));Hr&30||tv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,om(iv.bind(null,i,o,t),[t]),i.flags|=2048,aa(9,nv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ii(),e=Ut.identifierPrefix;if(dt){var n=Ei,i=wi;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mS={readContext:On,useCallback:fv,useContext:On,useEffect:Dh,useImperativeHandle:uv,useInsertionEffect:av,useLayoutEffect:lv,useMemo:dv,useReducer:Fu,useRef:sv,useState:function(){return Fu(sa)},useDebugValue:Ih,useDeferredValue:function(t){var e=Fn();return hv(e,Tt.memoizedState,t)},useTransition:function(){var t=Fu(sa)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:$x,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1},gS={readContext:On,useCallback:fv,useContext:On,useEffect:Dh,useImperativeHandle:uv,useInsertionEffect:av,useLayoutEffect:lv,useMemo:dv,useReducer:zu,useRef:sv,useState:function(){return zu(sa)},useDebugValue:Ih,useDeferredValue:function(t){var e=Fn();return Tt===null?e.memoizedState=t:hv(e,Tt.memoizedState,t)},useTransition:function(){var t=zu(sa)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:$x,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1};function Wn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xc={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=rr(t),o=Ti(i,r);o.payload=e,n!=null&&(o.callback=n),e=nr(t,o,r),e!==null&&(Jn(e,t,r,i),Dl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=rr(t),o=Ti(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=nr(t,o,r),e!==null&&(Jn(e,t,r,i),Dl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=rr(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(Jn(e,t,i,n),Dl(e,t,i))}};function sm(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!$s(n,i)||!$s(r,o):!0}function vv(t,e,n){var i=!1,r=ur,o=e.contextType;return typeof o=="object"&&o!==null?o=On(o):(r=fn(e)?Br:qt.current,i=e.contextTypes,o=(i=i!=null)?Xo(t,r):ur),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function am(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Xc.enqueueReplaceState(e,e.state,null)}function dd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bh(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=On(o):(o=fn(e)?Br:qt.current,r.context=Xo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(fd(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Xc.enqueueReplaceState(r,r.state,null),lc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ko(t,e){try{var n="",i=e;do n+=Wy(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function ku(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xS=typeof WeakMap=="function"?WeakMap:Map;function _v(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){hc||(hc=!0,wd=i),hd(t,e)},n}function yv(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){hd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hd(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function lm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new xS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=PS.bind(null,t,e,n),e.then(t,t))}function cm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function um(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var vS=Ui.ReactCurrentOwner,ln=!1;function Jt(t,e,n,i){e.child=t===null?Kx(e,null,n,i):Yo(e,t.child,n,i)}function fm(t,e,n,i,r){n=n.render;var o=e.ref;return zo(e,r),i=Lh(t,e,n,i,o,r),n=Ph(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(dt&&n&&vh(e),e.flags|=1,Jt(t,e,i,r),e.child)}function dm(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Vh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Sv(t,e,o,i,r)):(t=zl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:$s,n(s,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=or(o,i),t.ref=e.ref,t.return=e,e.child=t}function Sv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if($s(o,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return pd(t,e,n,i,r)}function Mv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Do,vn),vn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(Do,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,at(Do,vn),vn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,at(Do,vn),vn|=i;return Jt(t,e,r,n),e.child}function wv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,n,i,r){var o=fn(n)?Br:qt.current;return o=Xo(e,o),zo(e,r),n=Lh(t,e,n,i,o,r),i=Ph(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(dt&&i&&vh(e),e.flags|=1,Jt(t,e,n,r),e.child)}function hm(t,e,n,i,r){if(fn(n)){var o=!0;ic(e)}else o=!1;if(zo(e,r),e.stateNode===null)Ul(t,e),vv(e,n,i),dd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=On(c):(c=fn(n)?Br:qt.current,c=Xo(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&am(e,s,i,c),Wi=!1;var u=e.memoizedState;s.state=u,lc(e,i,s,r),l=e.memoizedState,a!==i||u!==l||un.current||Wi?(typeof f=="function"&&(fd(e,n,f,i),l=e.memoizedState),(a=Wi||sm(e,n,a,i,u,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,Qx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Wn(e.type,a),s.props=c,d=e.pendingProps,u=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=fn(n)?Br:qt.current,l=Xo(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||u!==l)&&am(e,s,i,l),Wi=!1,u=e.memoizedState,s.state=u,lc(e,i,s,r);var x=e.memoizedState;a!==d||u!==x||un.current||Wi?(typeof p=="function"&&(fd(e,n,p,i),x=e.memoizedState),(c=Wi||sm(e,n,c,i,u,x,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,x,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),s.props=i,s.state=x,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return md(t,e,n,i,o,r)}function md(t,e,n,i,r,o){wv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Jp(e,n,!1),Pi(t,e,o);i=e.stateNode,vS.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Yo(e,t.child,null,o),e.child=Yo(e,null,a,o)):Jt(t,e,a,o),e.memoizedState=i.state,r&&Jp(e,n,!0),e.child}function Ev(t){var e=t.stateNode;e.pendingContext?Qp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qp(t,e.context,!1),Th(t,e.containerInfo)}function pm(t,e,n,i,r){return jo(),yh(r),e.flags|=256,Jt(t,e,n,i),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function bv(t,e,n){var i=e.pendingProps,r=pt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(pt,r&1),t===null)return cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=qc(s,i,0,null),t=Ur(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=xd(n),e.memoizedState=gd,t):Nh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return _S(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=or(a,o):(o=Ur(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?xd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=gd,i}return o=t.child,t=o.sibling,i=or(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Nh(t,e){return e=qc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ba(t,e,n,i){return i!==null&&yh(i),Yo(e,t.child,null,n),t=Nh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _S(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=ku(Error(we(422))),Ba(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=qc({mode:"visible",children:i.children},r,0,null),o=Ur(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Yo(e,t.child,null,s),e.child.memoizedState=xd(s),e.memoizedState=gd,o);if(!(e.mode&1))return Ba(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(we(419)),i=ku(o,i,void 0),Ba(t,e,s,i)}if(a=(s&t.childLanes)!==0,ln||a){if(i=Ut,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Li(t,r),Jn(i,t,r,-1))}return Bh(),i=ku(Error(we(421))),Ba(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=DS.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,yn=tr(r.nextSibling),Mn=e,dt=!0,jn=null,t!==null&&(Ln[Pn++]=wi,Ln[Pn++]=Ei,Ln[Pn++]=Vr,wi=t.id,Ei=t.overflow,Vr=e),e=Nh(e,i.children),e.flags|=4096,e)}function mm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ud(t.return,e,n)}function Bu(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Tv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Jt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mm(t,n,e);else if(t.tag===19)mm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Bu(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Bu(e,!0,n,null,o);break;case"together":Bu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(we(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yS(t,e,n){switch(e.tag){case 3:Ev(e),jo();break;case 5:Jx(e);break;case 1:fn(e.type)&&ic(e);break;case 4:Th(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(sc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?bv(t,e,n):(at(pt,pt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);at(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Tv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,Mv(t,e,n)}return Pi(t,e,n)}var Av,vd,Cv,Rv;Av=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vd=function(){};Cv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Dr(ai.current);var o=null;switch(n){case"input":r=Bf(t,r),i=Bf(t,i),o=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),o=[];break;case"textarea":r=Gf(t,r),i=Gf(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=tc)}Xf(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(js.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(js.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&lt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};Rv=function(t,e,n,i){n!==i&&(e.flags|=4)};function gs(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function SS(t,e,n){var i=e.pendingProps;switch(_h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return fn(e.type)&&nc(),Wt(e),null;case 3:return i=e.stateNode,qo(),ut(un),ut(qt),Ch(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(Td(jn),jn=null))),vd(t,e),Wt(e),null;case 5:Ah(e);var r=Dr(ra.current);if(n=e.type,t!==null&&e.stateNode!=null)Cv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(we(166));return Wt(e),null}if(t=Dr(ai.current),za(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[oi]=e,i[na]=o,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<Cs.length;r++)lt(Cs[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":Ep(i,o),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},lt("invalid",i);break;case"textarea":Tp(i,o),lt("invalid",i)}Xf(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",""+a]):js.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&lt("scroll",i)}switch(n){case"input":Ra(i),bp(i,o,!0);break;case"textarea":Ra(i),Ap(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=tc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ix(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[oi]=e,t[na]=i,Av(t,e,!1,!1),e.stateNode=t;e:{switch(s=jf(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Cs.length;r++)lt(Cs[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":Ep(t,i),r=Bf(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":Tp(t,i),r=Gf(t,i),lt("invalid",t);break;default:r=i}Xf(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?sx(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rx(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ys(t,l):typeof l=="number"&&Ys(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(js.hasOwnProperty(o)?l!=null&&o==="onScroll"&&lt("scroll",t):l!=null&&rh(t,o,l,s))}switch(n){case"input":Ra(t),bp(t,i,!1);break;case"textarea":Ra(t),Ap(t);break;case"option":i.value!=null&&t.setAttribute("value",""+cr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?No(t,!!i.multiple,o,!1):i.defaultValue!=null&&No(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=tc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)Rv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(we(166));if(n=Dr(ra.current),Dr(ai.current),za(e)){if(i=e.stateNode,n=e.memoizedProps,i[oi]=e,(o=i.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:Fa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fa(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return Wt(e),null;case 13:if(ut(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&yn!==null&&e.mode&1&&!(e.flags&128))Yx(),jo(),e.flags|=98560,o=!1;else if(o=za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(we(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(we(317));o[oi]=e}else jo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),o=!1}else jn!==null&&(Td(jn),jn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Ct===0&&(Ct=3):Bh())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return qo(),vd(t,e),t===null&&ea(e.stateNode.containerInfo),Wt(e),null;case 10:return wh(e.type._context),Wt(e),null;case 17:return fn(e.type)&&nc(),Wt(e),null;case 19:if(ut(pt),o=e.memoizedState,o===null)return Wt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)gs(o,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=cc(t),s!==null){for(e.flags|=128,gs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(pt,pt.current&1|2),e.child}t=t.sibling}o.tail!==null&&_t()>Zo&&(e.flags|=128,i=!0,gs(o,!1),e.lanes=4194304)}else{if(!i)if(t=cc(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),gs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!dt)return Wt(e),null}else 2*_t()-o.renderingStartTime>Zo&&n!==1073741824&&(e.flags|=128,i=!0,gs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=_t(),e.sibling=null,n=pt.current,at(pt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return kh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(we(156,e.tag))}function MS(t,e){switch(_h(e),e.tag){case 1:return fn(e.type)&&nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qo(),ut(un),ut(qt),Ch(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ah(e),null;case 13:if(ut(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(we(340));jo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(pt),null;case 4:return qo(),null;case 10:return wh(e.type._context),null;case 22:case 23:return kh(),null;case 24:return null;default:return null}}var Va=!1,Yt=!1,wS=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Po(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function _d(t,e,n){try{n()}catch(i){xt(t,e,i)}}var gm=!1;function ES(t,e){if(nd=Jl,t=Nx(),xh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,f=0,d=t,u=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)u=d,d=p;for(;;){if(d===t)break t;if(u===n&&++c===r&&(a=s),u===o&&++f===i&&(l=s),(p=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(id={focusedElem:t,selectionRange:n},Jl=!1,Ue=e;Ue!==null;)if(e=Ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ue=t;else for(;Ue!==null;){e=Ue;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,m=x.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:Wn(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(we(163))}}catch(w){xt(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,Ue=t;break}Ue=e.return}return x=gm,gm=!1,x}function Bs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&_d(e,n,o)}r=r.next}while(r!==i)}}function jc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Lv(t){var e=t.alternate;e!==null&&(t.alternate=null,Lv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oi],delete e[na],delete e[sd],delete e[sS],delete e[aS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Pv(t){return t.tag===5||t.tag===3||t.tag===4}function xm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Pv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tc));else if(i!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}var Ot=null,Xn=!1;function Oi(t,e,n){for(n=n.child;n!==null;)Dv(t,e,n),n=n.sibling}function Dv(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(zc,n)}catch{}switch(n.tag){case 5:Yt||Po(n,e);case 6:var i=Ot,r=Xn;Ot=null,Oi(t,e,n),Ot=i,Xn=r,Ot!==null&&(Xn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Xn?(t=Ot,n=n.stateNode,t.nodeType===8?Iu(t.parentNode,n):t.nodeType===1&&Iu(t,n),Qs(t)):Iu(Ot,n.stateNode));break;case 4:i=Ot,r=Xn,Ot=n.stateNode.containerInfo,Xn=!0,Oi(t,e,n),Ot=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&_d(n,e,s),r=r.next}while(r!==i)}Oi(t,e,n);break;case 1:if(!Yt&&(Po(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,Oi(t,e,n),Yt=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function vm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wS),e.forEach(function(i){var r=IS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Xn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Xn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(Ot===null)throw Error(we(160));Dv(o,s,r),Ot=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Iv(e,t),e=e.sibling}function Iv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ni(t),i&4){try{Bs(3,t,t.return),jc(3,t)}catch(_){xt(t,t.return,_)}try{Bs(5,t,t.return)}catch(_){xt(t,t.return,_)}}break;case 1:Bn(e,t),ni(t),i&512&&n!==null&&Po(n,n.return);break;case 5:if(Bn(e,t),ni(t),i&512&&n!==null&&Po(n,n.return),t.flags&32){var r=t.stateNode;try{Ys(r,"")}catch(_){xt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&tx(r,o),jf(a,s);var c=jf(a,o);for(s=0;s<l.length;s+=2){var f=l[s],d=l[s+1];f==="style"?sx(r,d):f==="dangerouslySetInnerHTML"?rx(r,d):f==="children"?Ys(r,d):rh(r,f,d,c)}switch(a){case"input":Vf(r,o);break;case"textarea":nx(r,o);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?No(r,!!o.multiple,p,!1):u!==!!o.multiple&&(o.defaultValue!=null?No(r,!!o.multiple,o.defaultValue,!0):No(r,!!o.multiple,o.multiple?[]:"",!1))}r[na]=o}catch(_){xt(t,t.return,_)}}break;case 6:if(Bn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(we(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(_){xt(t,t.return,_)}}break;case 3:if(Bn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qs(e.containerInfo)}catch(_){xt(t,t.return,_)}break;case 4:Bn(e,t),ni(t);break;case 13:Bn(e,t),ni(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Fh=_t())),i&4&&vm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||f,Bn(e,t),Yt=c):Bn(e,t),ni(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ue=t,f=t.child;f!==null;){for(d=Ue=f;Ue!==null;){switch(u=Ue,p=u.child,u.tag){case 0:case 11:case 14:case 15:Bs(4,u,u.return);break;case 1:Po(u,u.return);var x=u.stateNode;if(typeof x.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){xt(i,n,_)}}break;case 5:Po(u,u.return);break;case 22:if(u.memoizedState!==null){ym(d);continue}}p!==null?(p.return=u,Ue=p):ym(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ox("display",s))}catch(_){xt(t,t.return,_)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){xt(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bn(e,t),ni(t),i&4&&vm(t);break;case 21:break;default:Bn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Pv(n)){var i=n;break e}n=n.return}throw Error(we(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ys(r,""),i.flags&=-33);var o=xm(t);Md(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=xm(t);Sd(t,a,s);break;default:throw Error(we(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bS(t,e,n){Ue=t,Nv(t)}function Nv(t,e,n){for(var i=(t.mode&1)!==0;Ue!==null;){var r=Ue,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Va;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=Va;var c=Yt;if(Va=s,(Yt=l)&&!c)for(Ue=r;Ue!==null;)s=Ue,l=s.child,s.tag===22&&s.memoizedState!==null?Sm(r):l!==null?(l.return=s,Ue=l):Sm(r);for(;o!==null;)Ue=o,Nv(o),o=o.sibling;Ue=r,Va=a,Yt=c}_m(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Ue=o):_m(t)}}function _m(t){for(;Ue!==null;){var e=Ue;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||jc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&im(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}im(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Qs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(we(163))}Yt||e.flags&512&&yd(e)}catch(u){xt(e,e.return,u)}}if(e===t){Ue=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function ym(t){for(;Ue!==null;){var e=Ue;if(e===t){Ue=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function Sm(t){for(;Ue!==null;){var e=Ue;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jc(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var o=e.return;try{yd(e)}catch(l){xt(e,o,l)}break;case 5:var s=e.return;try{yd(e)}catch(l){xt(e,s,l)}}}catch(l){xt(e,e.return,l)}if(e===t){Ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ue=a;break}Ue=e.return}}var TS=Math.ceil,dc=Ui.ReactCurrentDispatcher,Uh=Ui.ReactCurrentOwner,Un=Ui.ReactCurrentBatchConfig,rt=0,Ut=null,Et=null,zt=0,vn=0,Do=pr(0),Ct=0,la=null,Gr=0,Yc=0,Oh=0,Vs=null,on=null,Fh=0,Zo=1/0,_i=null,hc=!1,wd=null,ir=null,Ha=!1,qi=null,pc=0,Hs=0,Ed=null,Ol=-1,Fl=0;function $t(){return rt&6?_t():Ol!==-1?Ol:Ol=_t()}function rr(t){return t.mode&1?rt&2&&zt!==0?zt&-zt:cS.transition!==null?(Fl===0&&(Fl=vx()),Fl):(t=ot,t!==0||(t=window.event,t=t===void 0?16:bx(t.type)),t):1}function Jn(t,e,n,i){if(50<Hs)throw Hs=0,Ed=null,Error(we(185));pa(t,n,i),(!(rt&2)||t!==Ut)&&(t===Ut&&(!(rt&2)&&(Yc|=n),Ct===4&&ji(t,zt)),dn(t,i),n===1&&rt===0&&!(e.mode&1)&&(Zo=_t()+500,Gc&&mr()))}function dn(t,e){var n=t.callbackNode;c1(t,e);var i=Ql(t,t===Ut?zt:0);if(i===0)n!==null&&Lp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Lp(n),e===1)t.tag===0?lS(Mm.bind(null,t)):Wx(Mm.bind(null,t)),rS(function(){!(rt&6)&&mr()}),n=null;else{switch(_x(i)){case 1:n=ch;break;case 4:n=gx;break;case 16:n=Zl;break;case 536870912:n=xx;break;default:n=Zl}n=Hv(n,Uv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Uv(t,e){if(Ol=-1,Fl=0,rt&6)throw Error(we(327));var n=t.callbackNode;if(ko()&&t.callbackNode!==n)return null;var i=Ql(t,t===Ut?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=mc(t,i);else{e=i;var r=rt;rt|=2;var o=Fv();(Ut!==t||zt!==e)&&(_i=null,Zo=_t()+500,Nr(t,e));do try{RS();break}catch(a){Ov(t,a)}while(!0);Mh(),dc.current=o,rt=r,Et!==null?e=0:(Ut=null,zt=0,e=Ct)}if(e!==0){if(e===2&&(r=Qf(t),r!==0&&(i=r,e=bd(t,r))),e===1)throw n=la,Nr(t,0),ji(t,i),dn(t,_t()),n;if(e===6)ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!AS(r)&&(e=mc(t,i),e===2&&(o=Qf(t),o!==0&&(i=o,e=bd(t,o))),e===1))throw n=la,Nr(t,0),ji(t,i),dn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(we(345));case 2:br(t,on,_i);break;case 3:if(ji(t,i),(i&130023424)===i&&(e=Fh+500-_t(),10<e)){if(Ql(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=od(br.bind(null,t,on,_i),e);break}br(t,on,_i);break;case 4:if(ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Qn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*TS(i/1960))-i,10<i){t.timeoutHandle=od(br.bind(null,t,on,_i),i);break}br(t,on,_i);break;case 5:br(t,on,_i);break;default:throw Error(we(329))}}}return dn(t,_t()),t.callbackNode===n?Uv.bind(null,t):null}function bd(t,e){var n=Vs;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=mc(t,e),t!==2&&(e=on,on=n,e!==null&&Td(e)),t}function Td(t){on===null?on=t:on.push.apply(on,t)}function AS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ei(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ji(t,e){for(e&=~Oh,e&=~Yc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function Mm(t){if(rt&6)throw Error(we(327));ko();var e=Ql(t,0);if(!(e&1))return dn(t,_t()),null;var n=mc(t,e);if(t.tag!==0&&n===2){var i=Qf(t);i!==0&&(e=i,n=bd(t,i))}if(n===1)throw n=la,Nr(t,0),ji(t,e),dn(t,_t()),n;if(n===6)throw Error(we(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,on,_i),dn(t,_t()),null}function zh(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(Zo=_t()+500,Gc&&mr())}}function Wr(t){qi!==null&&qi.tag===0&&!(rt&6)&&ko();var e=rt;rt|=1;var n=Un.transition,i=ot;try{if(Un.transition=null,ot=1,t)return t()}finally{ot=i,Un.transition=n,rt=e,!(rt&6)&&mr()}}function kh(){vn=Do.current,ut(Do)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,iS(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(_h(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&nc();break;case 3:qo(),ut(un),ut(qt),Ch();break;case 5:Ah(i);break;case 4:qo();break;case 13:ut(pt);break;case 19:ut(pt);break;case 10:wh(i.type._context);break;case 22:case 23:kh()}n=n.return}if(Ut=t,Et=t=or(t.current,null),zt=vn=e,Ct=0,la=null,Oh=Yc=Gr=0,on=Vs=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Pr=null}return t}function Ov(t,e){do{var n=Et;try{if(Mh(),Il.current=fc,uc){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}uc=!1}if(Hr=0,It=Tt=mt=null,ks=!1,oa=0,Uh.current=null,n===null||n.return===null){Ct=1,la=e,Et=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=cm(s);if(p!==null){p.flags&=-257,um(p,s,a,o,e),p.mode&1&&lm(o,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){lm(o,c,e),Bh();break e}l=Error(we(426))}}else if(dt&&a.mode&1){var m=cm(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),um(m,s,a,o,e),yh(Ko(l,a));break e}}o=l=Ko(l,a),Ct!==4&&(Ct=2),Vs===null?Vs=[o]:Vs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=_v(o,l,e);nm(o,h);break e;case 1:a=l;var v=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ir===null||!ir.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=yv(o,a,e);nm(o,w);break e}}o=o.return}while(o!==null)}kv(n)}catch(E){e=E,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function Fv(){var t=dc.current;return dc.current=fc,t===null?fc:t}function Bh(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Ut===null||!(Gr&268435455)&&!(Yc&268435455)||ji(Ut,zt)}function mc(t,e){var n=rt;rt|=2;var i=Fv();(Ut!==t||zt!==e)&&(_i=null,Nr(t,e));do try{CS();break}catch(r){Ov(t,r)}while(!0);if(Mh(),rt=n,dc.current=i,Et!==null)throw Error(we(261));return Ut=null,zt=0,Ct}function CS(){for(;Et!==null;)zv(Et)}function RS(){for(;Et!==null&&!e1();)zv(Et)}function zv(t){var e=Vv(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?kv(t):Et=e,Uh.current=null}function kv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=MS(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,Et=null;return}}else if(n=SS(n,e,vn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);Ct===0&&(Ct=5)}function br(t,e,n){var i=ot,r=Un.transition;try{Un.transition=null,ot=1,LS(t,e,n,i)}finally{Un.transition=r,ot=i}return null}function LS(t,e,n,i){do ko();while(qi!==null);if(rt&6)throw Error(we(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(we(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(u1(t,o),t===Ut&&(Et=Ut=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,Hv(Zl,function(){return ko(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Un.transition,Un.transition=null;var s=ot;ot=1;var a=rt;rt|=4,Uh.current=null,ES(t,n),Iv(n,t),Z1(id),Jl=!!nd,id=nd=null,t.current=n,bS(n),t1(),rt=a,ot=s,Un.transition=o}else t.current=n;if(Ha&&(Ha=!1,qi=t,pc=r),o=t.pendingLanes,o===0&&(ir=null),r1(n.stateNode),dn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(hc)throw hc=!1,t=wd,wd=null,t;return pc&1&&t.tag!==0&&ko(),o=t.pendingLanes,o&1?t===Ed?Hs++:(Hs=0,Ed=t):Hs=0,mr(),null}function ko(){if(qi!==null){var t=_x(pc),e=Un.transition,n=ot;try{if(Un.transition=null,ot=16>t?16:t,qi===null)var i=!1;else{if(t=qi,qi=null,pc=0,rt&6)throw Error(we(331));var r=rt;for(rt|=4,Ue=t.current;Ue!==null;){var o=Ue,s=o.child;if(Ue.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ue=c;Ue!==null;){var f=Ue;switch(f.tag){case 0:case 11:case 15:Bs(8,f,o)}var d=f.child;if(d!==null)d.return=f,Ue=d;else for(;Ue!==null;){f=Ue;var u=f.sibling,p=f.return;if(Lv(f),f===c){Ue=null;break}if(u!==null){u.return=p,Ue=u;break}Ue=p}}}var x=o.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Ue=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Ue=s;else e:for(;Ue!==null;){if(o=Ue,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Bs(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,Ue=h;break e}Ue=o.return}}var v=t.current;for(Ue=v;Ue!==null;){s=Ue;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,Ue=g;else e:for(s=v;Ue!==null;){if(a=Ue,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jc(9,a)}}catch(E){xt(a,a.return,E)}if(a===s){Ue=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,Ue=w;break e}Ue=a.return}}if(rt=r,mr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(zc,t)}catch{}i=!0}return i}finally{ot=n,Un.transition=e}}return!1}function wm(t,e,n){e=Ko(n,e),e=_v(t,e,1),t=nr(t,e,1),e=$t(),t!==null&&(pa(t,1,e),dn(t,e))}function xt(t,e,n){if(t.tag===3)wm(t,t,n);else for(;e!==null;){if(e.tag===3){wm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=Ko(n,t),t=yv(e,t,1),e=nr(e,t,1),t=$t(),e!==null&&(pa(e,1,t),dn(e,t));break}}e=e.return}}function PS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(zt&n)===n&&(Ct===4||Ct===3&&(zt&130023424)===zt&&500>_t()-Fh?Nr(t,0):Oh|=n),dn(t,e)}function Bv(t,e){e===0&&(t.mode&1?(e=Da,Da<<=1,!(Da&130023424)&&(Da=4194304)):e=1);var n=$t();t=Li(t,e),t!==null&&(pa(t,e,n),dn(t,n))}function DS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bv(t,n)}function IS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(we(314))}i!==null&&i.delete(e),Bv(t,n)}var Vv;Vv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,yS(t,e,n);ln=!!(t.flags&131072)}else ln=!1,dt&&e.flags&1048576&&Xx(e,oc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ul(t,e),t=e.pendingProps;var r=Xo(e,qt.current);zo(e,n),r=Lh(null,e,i,t,r,n);var o=Ph();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(o=!0,ic(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bh(e),r.updater=Xc,e.stateNode=r,r._reactInternals=e,dd(e,i,t,n),e=md(null,e,i,!0,o,n)):(e.tag=0,dt&&o&&vh(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=US(i),t=Wn(i,t),r){case 0:e=pd(null,e,i,t,n);break e;case 1:e=hm(null,e,i,t,n);break e;case 11:e=fm(null,e,i,t,n);break e;case 14:e=dm(null,e,i,Wn(i.type,t),n);break e}throw Error(we(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),pd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),hm(t,e,i,r,n);case 3:e:{if(Ev(e),t===null)throw Error(we(387));i=e.pendingProps,o=e.memoizedState,r=o.element,Qx(t,e),lc(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Ko(Error(we(423)),e),e=pm(t,e,i,n,r);break e}else if(i!==r){r=Ko(Error(we(424)),e),e=pm(t,e,i,n,r);break e}else for(yn=tr(e.stateNode.containerInfo.firstChild),Mn=e,dt=!0,jn=null,n=Kx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jo(),i===r){e=Pi(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return Jx(e),t===null&&cd(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,rd(i,r)?s=null:o!==null&&rd(i,o)&&(e.flags|=32),wv(t,e),Jt(t,e,s,n),e.child;case 6:return t===null&&cd(e),null;case 13:return bv(t,e,n);case 4:return Th(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Yo(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),fm(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,at(sc,i._currentValue),i._currentValue=s,o!==null)if(ei(o.value,s)){if(o.children===r.children&&!un.current){e=Pi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ti(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ud(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(we(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ud(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,zo(e,n),r=On(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),dm(t,e,i,r,n);case 15:return Sv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Ul(t,e),e.tag=1,fn(i)?(t=!0,ic(e)):t=!1,zo(e,n),vv(e,i,r),dd(e,i,r,n),md(null,e,i,!0,t,n);case 19:return Tv(t,e,n);case 22:return Mv(t,e,n)}throw Error(we(156,e.tag))};function Hv(t,e){return mx(t,e)}function NS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new NS(t,e,n,i)}function Vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function US(t){if(typeof t=="function")return Vh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sh)return 11;if(t===ah)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Vh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Mo:return Ur(n.children,r,o,e);case oh:s=8,r|=8;break;case Of:return t=Nn(12,n,e,r|2),t.elementType=Of,t.lanes=o,t;case Ff:return t=Nn(13,n,e,r),t.elementType=Ff,t.lanes=o,t;case zf:return t=Nn(19,n,e,r),t.elementType=zf,t.lanes=o,t;case J0:return qc(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Z0:s=10;break e;case Q0:s=9;break e;case sh:s=11;break e;case ah:s=14;break e;case Gi:s=16,i=null;break e}throw Error(we(130,t==null?t:typeof t,""))}return e=Nn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Ur(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function qc(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=J0,t.lanes=n,t.stateNode={isHidden:!1},t}function Vu(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Hu(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function OS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mu(0),this.expirationTimes=Mu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hh(t,e,n,i,r,o,s,a,l){return t=new OS(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Nn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(o),t}function FS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:So,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Gv(t){if(!t)return ur;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(we(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(we(171))}if(t.tag===1){var n=t.type;if(fn(n))return Gx(t,n,e)}return e}function Wv(t,e,n,i,r,o,s,a,l){return t=Hh(n,i,!0,t,r,o,s,a,l),t.context=Gv(null),n=t.current,i=$t(),r=rr(n),o=Ti(i,r),o.callback=e??null,nr(n,o,r),t.current.lanes=r,pa(t,r,i),dn(t,i),t}function Kc(t,e,n,i){var r=e.current,o=$t(),s=rr(r);return n=Gv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,s),t!==null&&(Jn(t,r,s,o),Dl(t,r,s)),s}function gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Em(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gh(t,e){Em(t,e),(t=t.alternate)&&Em(t,e)}function zS(){return null}var Xv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wh(t){this._internalRoot=t}Zc.prototype.render=Wh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(we(409));Kc(t,e,null,null)};Zc.prototype.unmount=Wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){Kc(null,t,null,null)}),e[Ri]=null}};function Zc(t){this._internalRoot=t}Zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xi.length&&e!==0&&e<Xi[n].priority;n++);Xi.splice(n,0,t),n===0&&Ex(t)}};function Xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bm(){}function kS(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=gc(s);o.call(c)}}var s=Wv(e,i,t,0,null,!1,!1,"",bm);return t._reactRootContainer=s,t[Ri]=s.current,ea(t.nodeType===8?t.parentNode:t),Wr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=gc(l);a.call(c)}}var l=Hh(t,0,!1,null,null,!1,!1,"",bm);return t._reactRootContainer=l,t[Ri]=l.current,ea(t.nodeType===8?t.parentNode:t),Wr(function(){Kc(e,l,n,i)}),l}function Jc(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=gc(s);a.call(l)}}Kc(e,s,t,r)}else s=kS(n,e,t,r,i);return gc(s)}yx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=As(e.pendingLanes);n!==0&&(uh(e,n|1),dn(e,_t()),!(rt&6)&&(Zo=_t()+500,mr()))}break;case 13:Wr(function(){var i=Li(t,1);if(i!==null){var r=$t();Jn(i,t,1,r)}}),Gh(t,1)}};fh=function(t){if(t.tag===13){var e=Li(t,134217728);if(e!==null){var n=$t();Jn(e,t,134217728,n)}Gh(t,134217728)}};Sx=function(t){if(t.tag===13){var e=rr(t),n=Li(t,e);if(n!==null){var i=$t();Jn(n,t,e,i)}Gh(t,e)}};Mx=function(){return ot};wx=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};qf=function(t,e,n){switch(e){case"input":if(Vf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Hc(i);if(!r)throw Error(we(90));ex(i),Vf(i,r)}}}break;case"textarea":nx(t,n);break;case"select":e=n.value,e!=null&&No(t,!!n.multiple,e,!1)}};cx=zh;ux=Wr;var BS={usingClientEntryPoint:!1,Events:[ga,To,Hc,ax,lx,zh]},xs={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},VS={bundleType:xs.bundleType,version:xs.version,rendererPackageName:xs.rendererPackageName,rendererConfig:xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hx(t),t===null?null:t.stateNode},findFiberByHostInstance:xs.findFiberByHostInstance||zS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{zc=Ga.inject(VS),si=Ga}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BS;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(e))throw Error(we(200));return FS(t,e,null,n)};bn.createRoot=function(t,e){if(!Xh(t))throw Error(we(299));var n=!1,i="",r=Xv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hh(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,ea(t.nodeType===8?t.parentNode:t),new Wh(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(we(188)):(t=Object.keys(t).join(","),Error(we(268,t)));return t=hx(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return Wr(t)};bn.hydrate=function(t,e,n){if(!Qc(e))throw Error(we(200));return Jc(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!Xh(t))throw Error(we(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=Xv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Wv(e,null,t,1,n??null,r,!1,o,s),t[Ri]=e.current,ea(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Zc(e)};bn.render=function(t,e,n){if(!Qc(e))throw Error(we(200));return Jc(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!Qc(t))throw Error(we(40));return t._reactRootContainer?(Wr(function(){Jc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};bn.unstable_batchedUpdates=zh;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Qc(n))throw Error(we(200));if(t==null||t._reactInternals===void 0)throw Error(we(38));return Jc(t,e,n,!1,i)};bn.version="18.3.1-next-f1338f8080-20240426";function jv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jv)}catch(t){console.error(t)}}jv(),j0.exports=bn;var HS=j0.exports,Tm=HS;Nf.createRoot=Tm.createRoot,Nf.hydrateRoot=Tm.hydrateRoot;const GS=({softwareName:t="Software Name (title)"})=>{const[e,n]=ne.useState(!1),[i,r]=ne.useState(!1);return z.jsxs(z.Fragment,{children:[z.jsxs("div",{style:{flex:"5%",width:"100%",backgroundColor:"#000000",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",fontWeight:"bold",borderBottom:"2px solid #34495e",position:"relative"},children:[t,z.jsx("button",{onClick:()=>r(!0),style:{position:"absolute",right:"100px",top:"50%",transform:"translateY(-50%)",padding:"8px 16px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px",fontWeight:"bold",boxShadow:"0 2px 4px rgba(0,0,0,0.3)",transition:"background-color 0.2s"},onMouseEnter:o=>o.target.style.backgroundColor="#45a049",onMouseLeave:o=>o.target.style.backgroundColor="#4CAF50",children:"Help"}),z.jsx("button",{onClick:()=>n(!0),style:{position:"absolute",right:"20px",top:"50%",transform:"translateY(-50%)",padding:"8px 16px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px",fontWeight:"bold",boxShadow:"0 2px 4px rgba(0,0,0,0.3)",transition:"background-color 0.2s"},onMouseEnter:o=>o.target.style.backgroundColor="#45a049",onMouseLeave:o=>o.target.style.backgroundColor="#4CAF50",children:"About"})]}),e&&z.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4},onClick:o=>{o.target===o.currentTarget&&n(!1)},children:z.jsxs("div",{style:{backgroundColor:"#1a1a1a",padding:"30px",borderRadius:"8px",maxWidth:"600px",width:"90%",maxHeight:"80vh",overflowY:"auto",border:"2px solid #4CAF50",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",position:"relative"},onClick:o=>o.stopPropagation(),children:[z.jsx("button",{onClick:()=>n(!1),style:{position:"absolute",top:"10px",right:"10px",padding:"6px 12px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px",fontWeight:"bold",transition:"background-color 0.2s"},onMouseEnter:o=>o.target.style.backgroundColor="#45a049",onMouseLeave:o=>o.target.style.backgroundColor="#4CAF50",children:"×"}),z.jsxs("div",{style:{color:"white",fontSize:"18px",lineHeight:"1.6",textAlign:"justify"},children:["This project, completed by"," ",z.jsx("a",{href:"https://hosseinfatho.github.io/",target:"_blank",rel:"noopener noreferrer",style:{color:"#2196F3",textDecoration:"underline",fontWeight:"bold"},onMouseEnter:o=>o.target.style.color="#1976D2",onMouseLeave:o=>o.target.style.color="#2196F3",children:"Hossein Fathollahian"})," ","and"," ",z.jsx("a",{href:"https://www.linkedin.com/in/yugesh-reddy-sappidi/",target:"_blank",rel:"noopener noreferrer",style:{color:"#2196F3",textDecoration:"underline",fontWeight:"bold"},onMouseEnter:o=>o.target.style.color="#1976D2",onMouseLeave:o=>o.target.style.color="#2196F3",children:"Yugesh Sappidy"})," ","for the Visual Data Science graduate course at the University of Illinois Chicago (Fall 2025), was developed in collaboration with"," ",z.jsx("a",{href:"https://www.rushu.rush.edu/research-rush-university/departmental-research/anatomy-cell-biology-research/laboratory-lei-duan-md",target:"_blank",rel:"noopener noreferrer",style:{color:"#2196F3",textDecoration:"underline",fontWeight:"bold"},onMouseEnter:o=>o.target.style.color="#1976D2",onMouseLeave:o=>o.target.style.color="#2196F3",children:"Dr. Lei Duan"})," ","and Dr. Carl Maki of Rush Medical University. Together, we designed a Microscopy Dashboard to support the investigation of biopsy tissue CyCF microscopic images."]})]})}),i&&z.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4},onClick:o=>{o.target===o.currentTarget&&r(!1)},children:z.jsxs("div",{style:{backgroundColor:"#1a1a1a",padding:"30px",borderRadius:"8px",maxWidth:"700px",width:"90%",maxHeight:"80vh",overflowY:"auto",border:"2px solid #4CAF50",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",position:"relative"},onClick:o=>o.stopPropagation(),children:[z.jsx("button",{onClick:()=>r(!1),style:{position:"absolute",top:"10px",right:"10px",padding:"6px 12px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px",fontWeight:"bold",transition:"background-color 0.2s"},onMouseEnter:o=>o.target.style.backgroundColor="#45a049",onMouseLeave:o=>o.target.style.backgroundColor="#4CAF50",children:"×"}),z.jsxs("div",{style:{color:"white",fontSize:"18px",lineHeight:"1.8"},children:[z.jsx("h2",{style:{color:"#4CAF50",marginTop:"0",marginBottom:"20px",fontSize:"24px"},children:"Component Guide"}),z.jsxs("div",{style:{marginBottom:"25px"},children:[z.jsx("h3",{style:{color:"#4CAF50",marginBottom:"10px",fontSize:"20px"},children:"Channel Selection"}),z.jsx("p",{style:{margin:"0",textAlign:"justify"},children:"Select and configure multiple biomarker channels to visualize. You can adjust color, opacity, threshold values, and visibility for each channel. Channels can be enabled or disabled to focus on specific biomarkers."})]}),z.jsxs("div",{style:{marginBottom:"25px"},children:[z.jsx("h3",{style:{color:"#4CAF50",marginBottom:"10px",fontSize:"20px"},children:"Region Selection"}),z.jsx("p",{style:{margin:"0",textAlign:"justify"},children:"Manage and toggle different tissue regions. Select regions to analyze and compare their biomarker expressions. Each region can be individually enabled or disabled for analysis."})]}),z.jsxs("div",{style:{marginBottom:"25px"},children:[z.jsx("h3",{style:{color:"#4CAF50",marginBottom:"10px",fontSize:"20px"},children:"Main View"}),z.jsx("p",{style:{margin:"0",textAlign:"justify"},children:'Interactive 3D visualization of the entire tissue volume. Use the "3D Selection" button to draw selection boxes for analysis. Rotate (left-click + drag), pan (right-click + drag), and zoom (scroll) to explore the data. Each selection box is color-coded and can be used to extract data for detailed analysis.'})]}),z.jsxs("div",{style:{marginBottom:"25px"},children:[z.jsx("h3",{style:{color:"#4CAF50",marginBottom:"10px",fontSize:"20px"},children:"Local View"}),z.jsx("p",{style:{margin:"0",textAlign:"justify"},children:'Detailed 3D view of selected tissue regions. Each selection appears as a separate tab. You can rotate, zoom, and pan within each local view to examine the selected region in detail. Use "Reset View" to close the current tab.'})]}),z.jsxs("div",{style:{marginBottom:"25px"},children:[z.jsx("h3",{style:{color:"#4CAF50",marginBottom:"10px",fontSize:"20px"},children:"Graph Panel"}),z.jsx("p",{style:{margin:"0",textAlign:"justify"},children:"Statistical analysis and visualization of selected regions. View bar charts, heatmaps, or violin plots showing cell counts, density, and intensity distributions for each biomarker. Compare multiple selected regions side by side."})]}),z.jsxs("div",{style:{marginBottom:"0"},children:[z.jsx("h3",{style:{color:"#4CAF50",marginBottom:"10px",fontSize:"20px"},children:"Direction View"}),z.jsx("p",{style:{margin:"0",textAlign:"justify"},children:"Spatial orientation and directional analysis of biomarker distributions. Visualize how biomarkers are distributed across different spatial directions in the tissue sample."})]})]})]})})]})},Rn=["Hoechst","5'hmC","MX1","MART1","Hoechst","CD3E (do not use)","MHC-I","SOX10","Hoechst","S100B","MITF","GranzymeB (do not use)","Hoechst","pan-cytokeratin","lamin-ABC","PDL1","Hoechst","PD1 (do not use)","S100A","CD31","Hoechst","CD206","pMLC2","CD11b (do not use)","Hoechst","CD4","LAG3","CD20","Hoechst","PRAME","CD163","IRF1","Hoechst","B-catenin","CD3E","CD8a","Hoechst","CD11b","FOXP3","PD1","Hoechst","Ki67","CD11c","COX-IV","Hoechst","LysozymeC","SOX9","PMEL","CD103","Hoechst","CyclinD1","BAF1","Hoechst","B-actin","Mast cell tryptase","CD15","Podoplanin","Hoechst","B-tubulin","Catalase","y-H2AX","Hoechst","E-cadherin","Vimentin","Neurofilament L (do not use)","GranzymeB","Hoechst","MHC-II","H3K27me3","Collagen (SHG)"],$r=70,WS=({onChannelsChange:t,presetChannels:e=[],presetVersion:n=0})=>{const[i,r]=ne.useState([]),o=ne.useRef(null),s=ne.useRef(e),a=ne.useRef(!1);ne.useEffect(()=>{s.current=e},[e]);const[l,c]=ne.useState({}),[f,d]=ne.useState({}),[u,p]=ne.useState(()=>Rn&&Array.isArray(Rn)&&Rn.length>=$r?Array.from({length:$r},(R,M)=>({value:M,label:Rn[M]||`Channel ${M}`})):Array.from({length:$r},(R,M)=>({value:M,label:`Channel ${M}`})));ne.useEffect(()=>{const R=async()=>{try{const M=await fetch("/src/channel_names.json");if(M.ok){const S=await M.json();Array.isArray(S)&&S.length>=$r&&p(Array.from({length:$r},(I,N)=>({value:N,label:S[N]||`Channel ${N}`})))}}catch(M){console.warn("Could not load channel names from JSON, using defaults:",M)}};(!Rn||!Array.isArray(Rn)||Rn.length<$r)&&R()},[]);const x=ne.useMemo(()=>i.map(R=>R.channelIndex).join(","),[i]);ne.useEffect(()=>{if(n==null||o.current===n)return;o.current=n;const R=Array.isArray(s.current)?s.current:[],M=new Set,S=R.map((N,P)=>{const C=N.id??N.channelIndex??P;let O=String(C),B=1;for(;M.has(O);)O=`${C}_${B++}`;return M.add(O),{...N,id:O,visible:N.visible!==!1,opacity:N.opacity??1,color:N.color||"#ffffff"}}),I={};S.forEach(N=>{I[N.id]={thresholdMin:N.thresholdMin??0,thresholdMax:N.thresholdMax??0}}),c({}),d(I),a.current=!0,r(S)},[n,t]),ne.useEffect(()=>{d(R=>{const M={};return i.forEach(S=>{const I=R[S.id];M[S.id]=I||{thresholdMin:S.thresholdMin,thresholdMax:S.thresholdMax}}),M})},[i]),ne.useEffect(()=>{let R=!1;return(async()=>{if(i.length===0){R||c({});return}const S={...l};let I=!1;for(const N of i){const P=N.channelIndex;if(S[P])continue;const C=[`./visualization_data/channel_${P}_napari_metadata.json`,`visualization_data/channel_${P}_napari_metadata.json`,`./visualization_data/channel_${P}_metadata.json`,`visualization_data/channel_${P}_metadata.json`];for(const O of C)try{const B=await fetch(O);if(B.ok){const U=(await B.json()).dataRange||[0,65535];S[P]=U,console.log(`Channel ${P}: Data range [${U[0]}, ${U[1]}]`),I=!0;break}}catch{}S[P]||(S[P]=[0,65535],I=!0,console.log(`Channel ${P}: Using default data range [0, 65535]`))}I&&!R&&(c(S),r(N=>N.map(P=>{const C=S[P.channelIndex]||[0,65535];if(P.dataRange&&P.dataRange[0]===C[0]&&P.dataRange[1]===C[1])return P;const O=C[1]-C[0],B=Math.round(C[0]+O*.1),G=Math.round(C[0]+O*.9);return d(U=>({...U,[P.id]:{thresholdMin:B,thresholdMax:G}})),{...P,dataRange:C,thresholdMin:P.thresholdMin===void 0||P.thresholdMin<C[0]||P.thresholdMin>C[1]?B:P.thresholdMin,thresholdMax:P.thresholdMax===void 0||P.thresholdMax<C[0]||P.thresholdMax>C[1]?G:P.thresholdMax}})))})(),()=>{R=!0}},[x]),ne.useEffect(()=>{if(a.current){a.current=!1;return}t&&t(i)},[i,t]);const _=async()=>{const R=i.map(U=>typeof U.id=="number"&&Number.isFinite(U.id)?U.id:null).filter(U=>U!==null),S=(R.length>0?Math.max(...R):-1)+1;let I=[0,65535];const N=["./visualization_data/channel_0_napari_metadata.json","visualization_data/channel_0_napari_metadata.json","./visualization_data/channel_0_metadata.json","visualization_data/channel_0_metadata.json"];for(const U of N)try{const X=await fetch(U);if(X.ok){I=(await X.json()).dataRange||[0,65535];break}}catch{continue}const P=I[1]-I[0],C=Math.round(I[0]+P*.1),O=Math.round(I[0]+P*.9),B={id:S,channelIndex:0,color:"#00ff88",thresholdMin:C,thresholdMax:O,dataRange:I,opacity:1,visible:!0},G=[...i,B];r(G),d(U=>({...U,[S]:{thresholdMin:B.thresholdMin,thresholdMax:B.thresholdMax}})),t&&t(G)},m=R=>{const M=i.filter(S=>S.id!==R);r(M),d(S=>{const I={...S};return delete I[R],I}),t&&t(M)},h=(R,M,S)=>{const I=i.map(N=>{if(N.id===R){const P={...N,[M]:S};if(M==="channelIndex"){const O=parseInt(S),B=l[O]||[0,65535];P.dataRange=B;const G=B[1]-B[0];P.thresholdMin=Math.round(B[0]+G*.1),P.thresholdMax=Math.round(B[0]+G*.9)}M==="opacity"&&(P[M]=parseFloat(S)),M==="thresholdMin"&&P.thresholdMin>P.thresholdMax&&(P.thresholdMax=P.thresholdMin),M==="thresholdMax"&&P.thresholdMax<P.thresholdMin&&(P.thresholdMin=P.thresholdMax);const C=P.dataRange||[0,65535];return P.thresholdMin<C[0]&&(P.thresholdMin=C[0]),P.thresholdMin>C[1]&&(P.thresholdMin=C[1]),P.thresholdMax<C[0]&&(P.thresholdMax=C[0]),P.thresholdMax>C[1]&&(P.thresholdMax=C[1]),M==="channelIndex"&&d(O=>({...O,[R]:{thresholdMin:P.thresholdMin,thresholdMax:P.thresholdMax}})),P}return N});r(I),t&&t(I)},v=(R,M,S)=>{const I=i.find(C=>C.id===R);if(!I)return;const N=I.dataRange||[0,65535],P=g(parseInt(S,10),N[0],N[1]);d(C=>{const B={...C[R]||{thresholdMin:I.thresholdMin,thresholdMax:I.thresholdMax},[M]:P};return M==="thresholdMin"&&B.thresholdMin>B.thresholdMax&&(B.thresholdMax=B.thresholdMin),M==="thresholdMax"&&B.thresholdMax<B.thresholdMin&&(B.thresholdMin=B.thresholdMax),B.thresholdMin=g(B.thresholdMin,N[0],N[1]),B.thresholdMax=g(B.thresholdMax,N[0],N[1]),{...C,[R]:B}})},g=(R,M,S)=>Number.isNaN(R)?M:Math.min(Math.max(R,M),S),w=()=>{let R=!1;const M=i.map(S=>{const I=f[S.id];return!I||S.thresholdMin===I.thresholdMin&&S.thresholdMax===I.thresholdMax?S:(R=!0,{...S,thresholdMin:I.thresholdMin,thresholdMax:I.thresholdMax})});R&&(r(M),d(S=>{const I={...S};return M.forEach(N=>{I[N.id]={thresholdMin:N.thresholdMin,thresholdMax:N.thresholdMax}}),I}),t&&t(M))},E=R=>{const M=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(R);return M?{r:parseInt(M[1],16),g:parseInt(M[2],16),b:parseInt(M[3],16)}:{r:255,g:255,b:255}},[T,A]=ne.useState(!1);return z.jsxs("div",{style:{height:"100%",width:"100%",backgroundColor:"#000000",border:"1px solid #444",padding:"10px",display:"flex",flexDirection:"column",fontSize:"12px",boxSizing:"border-box",overflow:"hidden"},children:[z.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px",paddingBottom:"12px",borderBottom:"1px solid #444"},children:z.jsxs("h3",{style:{margin:0,fontSize:"16px",color:"white",fontWeight:"500",display:"flex",alignItems:"center",gap:"8px"},children:["Channel Selection",z.jsx("button",{onClick:()=>A(!T),style:{background:"transparent",border:"1px solid rgba(255, 255, 255, 0.3)",borderRadius:"50%",width:"18px",height:"18px",cursor:"pointer",color:"#fff",fontSize:"11px",display:"flex",alignItems:"center",justifyContent:"center",padding:0,transition:"all 0.2s"},onMouseEnter:R=>{R.target.style.background="rgba(255, 255, 255, 0.1)",R.target.style.borderColor="rgba(255, 255, 255, 0.5)"},onMouseLeave:R=>{R.target.style.background="transparent",R.target.style.borderColor="rgba(255, 255, 255, 0.3)"},title:"Show channel selection help",children:"?"})]})}),T&&z.jsxs("div",{style:{backgroundColor:"rgba(45, 127, 249, 0.15)",border:"1px solid rgba(45, 127, 249, 0.4)",borderRadius:"6px",padding:"10px 12px",marginBottom:"12px",fontSize:"14px",lineHeight:"1.5",color:"#e0e0e0"},children:[z.jsx("div",{style:{fontWeight:"bold",marginBottom:"6px",color:"#fff"},children:"Quick Guide:"}),z.jsxs("ul",{style:{margin:0,paddingLeft:"16px"},children:[z.jsxs("li",{children:[z.jsx("strong",{children:"Checkbox:"})," Toggle channel visibility on/off"]}),z.jsxs("li",{children:[z.jsx("strong",{children:" Color Square:"})," Click to change channel display color"]}),z.jsxs("li",{children:[z.jsx("strong",{children:" Dropdown:"})," Select different biomarker channels"]}),z.jsxs("li",{children:[z.jsx("strong",{children:" Slider:"})," Adjust min/max intensity thresholds"]}),z.jsxs("li",{children:[z.jsx("strong",{children:"Apply Filter:"})," Update visualization with new thresholds"]})]})]}),z.jsx("div",{style:{flex:1,overflowY:"auto",marginBottom:"12px"},children:i.map((R,M)=>{const S=E(R.color),I=`rgb(${S.r}, ${S.g}, ${S.b})`;return z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px",padding:"6px",backgroundColor:"#1a1a1a",borderRadius:"4px",border:"1px solid #444"},children:[z.jsxs("div",{style:{position:"relative",width:"16px",height:"16px"},children:[z.jsx("input",{type:"checkbox",checked:R.visible,onChange:N=>h(R.id,"visible",N.target.checked),style:{width:"16px",height:"16px",cursor:"pointer",appearance:"none",border:"2px solid #ccc",borderRadius:"3px",backgroundColor:R.visible?I:"white",position:"relative"}}),R.visible&&z.jsx("span",{style:{position:"absolute",left:"2px",top:"-1px",color:"white",fontSize:"12px",fontWeight:"bold",pointerEvents:"none"},children:"✓"})]}),z.jsx("div",{style:{width:"16px",height:"16px",backgroundColor:R.color,borderRadius:"3px",border:"1px solid #555",flexShrink:0}}),z.jsx("select",{value:R.channelIndex,onChange:N=>h(R.id,"channelIndex",parseInt(N.target.value)),style:{padding:"5px 8px",backgroundColor:"#2a2a2a",color:"white",border:"1px solid #555",borderRadius:"4px",fontSize:"11px",minWidth:"100px",cursor:"pointer",outline:"none"},children:u.map(N=>z.jsx("option",{value:N.value,children:N.label},N.value))}),z.jsx("input",{type:"color",value:R.color,onChange:N=>h(R.id,"color",N.target.value),style:{width:"0px",height:"0px",opacity:0,position:"absolute",pointerEvents:"none"},id:`color-picker-${R.id}`}),z.jsx("div",{onClick:()=>document.getElementById(`color-picker-${R.id}`).click(),style:{width:"20px",height:"20px",backgroundColor:R.color,borderRadius:"4px",border:"1px solid #555",cursor:"pointer",flexShrink:0}}),z.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",minWidth:"160px",flex:1,position:"relative"},children:[(()=>{const N=R.dataRange||[0,65535],P=N[0],C=N[1],O=f[R.id]||{thresholdMin:R.thresholdMin??P,thresholdMax:R.thresholdMax??C},B=O.thresholdMin,G=O.thresholdMax,U=(B-P)/(C-P)*100,X=(G-P)/(C-P)*100;return z.jsxs(z.Fragment,{children:[z.jsxs("div",{style:{position:"relative",width:"100%",height:"20px",marginBottom:"4px"},children:[z.jsx("div",{style:{position:"absolute",left:`${U}%`,transform:"translateX(-50%)",top:"0px",backgroundColor:R.color,color:"white",padding:"2px 6px",borderRadius:"10px",fontSize:"10px",fontWeight:"bold",whiteSpace:"nowrap",pointerEvents:"none",zIndex:10,boxShadow:"0 2px 4px rgba(0,0,0,0.3)"},children:B.toLocaleString()}),z.jsx("div",{style:{position:"absolute",left:`${X}%`,transform:"translateX(-50%)",top:"0px",backgroundColor:R.color,color:"white",padding:"2px 6px",borderRadius:"10px",fontSize:"10px",fontWeight:"bold",whiteSpace:"nowrap",pointerEvents:"none",zIndex:10,boxShadow:"0 2px 4px rgba(0,0,0,0.3)"},children:G.toLocaleString()})]}),z.jsxs("div",{style:{position:"relative",width:"100%",height:"10px",display:"flex",alignItems:"center",flex:1},children:[z.jsx("div",{style:{position:"absolute",width:"100%",height:"5px",backgroundColor:"#555",borderRadius:"3px",zIndex:0}}),z.jsx("div",{style:{position:"absolute",left:`${U}%`,width:`${X-U}%`,height:"5px",backgroundColor:R.color,borderRadius:"3px",zIndex:0,pointerEvents:"none",opacity:.8}}),z.jsx("input",{type:"range",min:P,max:C,step:Math.max(1,Math.floor((C-P)/1e3)),value:B,onChange:k=>{const D=Math.min(parseInt(k.target.value,10),G);v(R.id,"thresholdMin",D)},onMouseDown:k=>{k.stopPropagation(),k.currentTarget.style.zIndex="10";const D=k.currentTarget.closest("div");if(D){const H=D.querySelector('input[type="range"]:last-of-type');H&&H!==k.currentTarget&&(H.style.zIndex="9")}},onMouseUp:k=>{const D=(B-P)/(C-P),H=(G-P)/(C-P);k.currentTarget.style.zIndex=D<=H?"4":"5"},style:{position:"absolute",width:"100%",height:"10px",margin:0,padding:0,top:"-2px",zIndex:U<=X?"4":"5",pointerEvents:"auto",background:"transparent",WebkitAppearance:"none",appearance:"none",cursor:"pointer",outline:"none",touchAction:"none"}}),z.jsx("input",{type:"range",min:P,max:C,step:Math.max(1,Math.floor((C-P)/1e3)),value:G,onChange:k=>{const D=Math.max(parseInt(k.target.value,10),B);v(R.id,"thresholdMax",D)},onMouseDown:k=>{k.stopPropagation(),k.currentTarget.style.zIndex="10";const D=k.currentTarget.closest("div");if(D){const H=D.querySelector('input[type="range"]:first-of-type');H&&H!==k.currentTarget&&(H.style.zIndex="9")}},onMouseUp:k=>{const D=(B-P)/(C-P),H=(G-P)/(C-P);k.currentTarget.style.zIndex=H>=D?"5":"4"},style:{position:"absolute",width:"100%",height:"10px",margin:0,padding:0,top:"-2px",zIndex:X>=U?"5":"4",pointerEvents:"auto",background:"transparent",WebkitAppearance:"none",appearance:"none",cursor:"pointer",outline:"none",touchAction:"none"}})]})]})})(),z.jsx("div",{})]}),z.jsx("div",{style:{position:"relative"},children:z.jsx("button",{onClick:N=>{N.stopPropagation(),window.confirm(`Delete channel ${R.channelIndex}?`)&&m(R.id)},style:{background:"none",border:"none",cursor:"pointer",padding:"2px 6px",fontSize:"16px",color:"#aaa",display:"flex",alignItems:"center",justifyContent:"center"},title:"Delete channel",children:"⋮"})})]},R.id)})}),z.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[z.jsx("button",{onClick:_,style:{flex:1,padding:"8px 16px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"11px",fontWeight:"500",textTransform:"uppercase",letterSpacing:"0.4px"},onMouseOver:R=>{R.target.style.backgroundColor="#45a049"},onMouseOut:R=>{R.target.style.backgroundColor="#4CAF50"},children:"+ Add Channel"}),z.jsx("button",{onClick:w,disabled:!i.some(R=>{const M=f[R.id];return M?M.thresholdMin!==R.thresholdMin||M.thresholdMax!==R.thresholdMax:!1}),style:{padding:"8px 16px",backgroundColor:i.some(R=>{const M=f[R.id];return M?M.thresholdMin!==R.thresholdMin||M.thresholdMax!==R.thresholdMax:!1})?"#2d7ff9":"#444",color:"#fff",border:"none",borderRadius:"4px",cursor:i.some(R=>{const M=f[R.id];return M?M.thresholdMin!==R.thresholdMin||M.thresholdMax!==R.thresholdMax:!1})?"pointer":"default",fontSize:"11px",fontWeight:"500",textTransform:"uppercase",letterSpacing:"0.4px"},children:"Apply Filter"})]})]})},Gu=[{id:"tumor-epithelial",title:"Tumor / Epithelial",markers:["MART1","SOX10","MITF","S100B","pan-CK","PRAME","β-catenin","E-cadherin"],palette:[[27,158,119],[217,95,2],[117,112,179],[231,41,138]]},{id:"immune",title:"Immune (T/B/Myeloid)",markers:["CD11b","CD11c","CD4","CD20","CD8a","FOXP3","PD1","LAG3","CD163","CD206"],palette:[[166,206,227],[31,120,180],[51,160,44],[251,154,153]]},{id:"stroma",title:"Stroma",markers:["CD31","Collagen (SHG)","Lamin-ABC","pMLC2"],palette:[[228,26,28],[55,126,184],[77,175,74],[152,78,163]]},{id:"stress-metabolism",title:"Stress / Metabolism",markers:["COX-IV","Catalase","γ-H2AX"],palette:[[102,194,165],[252,141,98],[141,160,203],[231,138,195]]},{id:"checkpoint-crosstalk",title:"Checkpoint / Crosstalk",markers:["PDL1","PD1","MHC-I","MHC-II","IRF1"],palette:[[141,211,199],[255,255,179],[190,186,218],[251,128,114]]},{id:"proliferation-cellstate",title:"Proliferation / Cell State",markers:["Ki67","CyclinD1","BAF1","H3K27me3","5’hmC"],palette:[[127,201,127],[190,174,212],[253,192,134],[56,108,176]]}],XS=[{id:"tumor-immune",title:"Tumor + Immune",description:"Tumor–immune interaction",regionIds:["tumor-epithelial","immune"]},{id:"tumor-checkpoint",title:"Tumor + Checkpoint",description:"Immune evasion / PD-L1 biology",regionIds:["tumor-epithelial","checkpoint-crosstalk"]},{id:"immune-stroma",title:"Immune + Stroma",description:"Immune positioning & stromal barriers",regionIds:["immune","stroma"]}],jS=[{id:"tumor-immune-checkpoint",title:"Tumor + Immune + Checkpoint",description:"Comprehensive immuno-oncology view",regionIds:["tumor-epithelial","immune","checkpoint-crosstalk"]},{id:"tumor-stroma-proliferation",title:"Tumor + Stroma + Proliferation",description:"Architecture + growth + tumor cell state",regionIds:["tumor-epithelial","stroma","proliferation-cellstate"]}],YS=(t,e,n)=>{const i=r=>{const s=Math.max(0,Math.min(255,r)).toString(16);return s.length===1?`0${s}`:s};return`#${i(t)}${i(e)}${i(n)}`},xc=t=>t.toLowerCase().replace(/[’']/g,"'").replace(/β/g,"b").replace(/γ/g,"y").replace(/\s+/g," ").trim(),qS={"pan-ck":"pan-cytokeratin"},KS=t=>{const e=new Map,n=new Map;return t.forEach((i,r)=>{const o=xc(i);e.has(o)||e.set(o,r);const s=i.replace(/\(.*?\)/g,"").trim();if(s){const a=xc(s);n.has(a)||n.set(a,r)}}),{exact:e,withoutParens:n}},ZS=({onToggleRegion:t,selectedRegions:e=[]})=>{const[n,i]=ne.useState("single"),r=ne.useMemo(()=>KS(Rn||[]),[]),o=ne.useMemo(()=>new Set(e.map(u=>u.id)),[e]),s=u=>{if(!u)return null;const p=xc(u),x=qS[p];if(x)return s(x);if(r.exact.has(p))return r.exact.get(p);if(r.withoutParens.has(p))return r.withoutParens.get(p);const _=Rn.findIndex(m=>xc(m).includes(p));return _!==-1?_:(console.warn(`Region_Selection: marker "${u}" not found in channel list.`),null)},a=u=>{const x=u.markers.slice(0,4).map((_,m)=>{const h=s(_),v=u.palette[m]||u.palette[u.palette.length-1],g=Array.isArray(v)?YS(v[0],v[1],v[2]):"#ffffff";return h==null?null:{id:`${u.id}-${h??m}`,channelIndex:h,color:g,thresholdMin:void 0,thresholdMax:void 0,opacity:1,visible:!0,markerName:_,regionId:u.id}}).filter(Boolean);return{id:u.id,title:u.title,topMarkers:x.map(({markerName:_,color:m})=>({name:_,color:m})),channels:x,markers:u.markers,palette:u.palette}},l=(u,p)=>{t&&t({regionPayload:a(u),shouldSelect:p})},c=(u,p)=>{t&&u.regionIds.forEach(x=>{const _=Gu.find(m=>m.id===x);_&&o.has(x)!==p&&t({regionPayload:a(_),shouldSelect:p})})},f=u=>u.regionIds.every(p=>o.has(p)),d=()=>{t&&e.forEach(u=>{const p=Gu.find(x=>x.id===u.id);p&&t({regionPayload:a(p),shouldSelect:!1})})};return z.jsxs("div",{style:{height:"100%",width:"100%",backgroundColor:"#000000",border:"1px solid #444",padding:"12px",overflow:"hidden",display:"flex",flexDirection:"column",gap:"12px",boxSizing:"border-box"},children:[z.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[z.jsx("h3",{style:{margin:0,fontSize:"18px",color:"white",fontWeight:500},children:"Region Selection"}),z.jsx("button",{type:"button",onClick:d,disabled:e.length===0,style:{padding:"6px 12px",fontSize:"12px",fontWeight:500,color:e.length===0?"#666":"#fff",background:e.length===0?"#1a1a1a":"#2d7ff9",border:e.length===0?"1px solid #444":"1px solid #2d7ff9",borderRadius:"4px",cursor:e.length===0?"not-allowed":"pointer",transition:"all 0.15s ease",outline:"none"},onMouseEnter:u=>{e.length>0&&(u.target.style.background="#1f57b8")},onMouseLeave:u=>{e.length>0&&(u.target.style.background="#2d7ff9")},title:"Reset all selections",children:"Reset"})]}),z.jsxs("div",{style:{display:"flex",borderBottom:"1px solid #444",paddingBottom:"8px",gap:"4px",flexShrink:0},children:[z.jsx("button",{type:"button",onClick:()=>i("single"),style:{flex:1,padding:"8px 12px",fontSize:"12px",fontWeight:n==="single"?600:400,color:n==="single"?"#fff":"#b9bed0",background:n==="single"?"#1a1d29":"transparent",border:n==="single"?"1px solid #2d7ff9":"1px solid #444",borderRadius:"4px",cursor:"pointer",transition:"all 0.15s ease"},children:"Single Region"}),z.jsx("button",{type:"button",onClick:()=>i("two"),style:{flex:1,padding:"8px 12px",fontSize:"12px",fontWeight:n==="two"?600:400,color:n==="two"?"#fff":"#b9bed0",background:n==="two"?"#1a1d29":"transparent",border:n==="two"?"1px solid #2d7ff9":"1px solid #444",borderRadius:"4px",cursor:"pointer",transition:"all 0.15s ease"},children:"Two Regions"}),z.jsx("button",{type:"button",onClick:()=>i("three"),style:{flex:1,padding:"8px 12px",fontSize:"12px",fontWeight:n==="three"?600:400,color:n==="three"?"#fff":"#b9bed0",background:n==="three"?"#1a1d29":"transparent",border:n==="three"?"1px solid #2d7ff9":"1px solid #444",borderRadius:"4px",cursor:"pointer",transition:"all 0.15s ease"},children:"Three Regions"})]}),z.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",overflowY:"auto",flex:1,minHeight:0},children:[n==="single"&&Gu.map(u=>{const p=o.has(u.id);return z.jsxs("button",{type:"button",onClick:()=>l(u,!p),style:{display:"flex",alignItems:"flex-start",gap:"12px",width:"100%",background:p?"#1a1d29":"#0f1016",borderRadius:"6px",padding:"10px 12px",cursor:"pointer",border:"none",outline:"none"},"aria-pressed":p,children:[z.jsx("div",{style:{width:"18px",height:"18px",borderRadius:"5px",border:p?"1px solid #1f57b8":"1px solid #5a5f73",backgroundColor:p?"#2d7ff9":"#12131d",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:"1px",transition:"background-color 0.15s ease, border 0.15s ease"},children:p&&z.jsx("svg",{viewBox:"0 0 16 16",style:{width:"12px",height:"12px"},children:z.jsx("polyline",{points:"3.2 8.6 6.4 11.6 12.4 4.4",style:{fill:"none",stroke:"#ffffff",strokeWidth:"2.1",strokeLinecap:"round",strokeLinejoin:"round"}})})}),z.jsxs("div",{style:{flex:1},children:[z.jsx("div",{style:{color:"white",fontSize:"14px",fontWeight:500,marginBottom:"4px"},children:u.title}),z.jsxs("div",{style:{color:"#b9bed0",fontSize:"12px",lineHeight:1.4},children:["(",u.markers.join(", "),")"]})]})]},u.id)}),n==="two"&&XS.map(u=>{const p=f(u);return z.jsxs("button",{type:"button",onClick:()=>c(u,!p),style:{display:"flex",alignItems:"flex-start",gap:"12px",width:"100%",background:p?"#1a1d29":"#0f1016",borderRadius:"6px",padding:"10px 12px",cursor:"pointer",border:"none",outline:"none"},"aria-pressed":p,children:[z.jsx("div",{style:{width:"18px",height:"18px",borderRadius:"5px",border:p?"1px solid #1f57b8":"1px solid #5a5f73",backgroundColor:p?"#2d7ff9":"#12131d",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:"1px",transition:"background-color 0.15s ease, border 0.15s ease"},children:p&&z.jsx("svg",{viewBox:"0 0 16 16",style:{width:"12px",height:"12px"},children:z.jsx("polyline",{points:"3.2 8.6 6.4 11.6 12.4 4.4",style:{fill:"none",stroke:"#ffffff",strokeWidth:"2.1",strokeLinecap:"round",strokeLinejoin:"round"}})})}),z.jsxs("div",{style:{flex:1},children:[z.jsx("div",{style:{color:"white",fontSize:"14px",fontWeight:500,marginBottom:"4px"},children:u.title}),z.jsx("div",{style:{color:"#b9bed0",fontSize:"12px",lineHeight:1.4},children:u.description})]})]},u.id)}),n==="three"&&jS.map(u=>{const p=f(u);return z.jsxs("button",{type:"button",onClick:()=>c(u,!p),style:{display:"flex",alignItems:"flex-start",gap:"12px",width:"100%",background:p?"#1a1d29":"#0f1016",borderRadius:"6px",padding:"10px 12px",cursor:"pointer",border:"none",outline:"none"},"aria-pressed":p,children:[z.jsx("div",{style:{width:"18px",height:"18px",borderRadius:"5px",border:p?"1px solid #1f57b8":"1px solid #5a5f73",backgroundColor:p?"#2d7ff9":"#12131d",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:"1px",transition:"background-color 0.15s ease, border 0.15s ease"},children:p&&z.jsx("svg",{viewBox:"0 0 16 16",style:{width:"12px",height:"12px"},children:z.jsx("polyline",{points:"3.2 8.6 6.4 11.6 12.4 4.4",style:{fill:"none",stroke:"#ffffff",strokeWidth:"2.1",strokeLinecap:"round",strokeLinejoin:"round"}})})}),z.jsxs("div",{style:{flex:1},children:[z.jsx("div",{style:{color:"white",fontSize:"14px",fontWeight:500,marginBottom:"4px"},children:u.title}),z.jsx("div",{style:{color:"#b9bed0",fontSize:"12px",lineHeight:1.4},children:u.description})]})]},u.id)})]})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jh="158",QS=0,Am=1,JS=2,Yv=1,$S=2,vi=3,fr=0,hn=1,Mi=2,Ai=0,Bo=1,vc=2,Cm=3,Rm=4,eM=5,Cr=100,tM=101,nM=102,Lm=103,Pm=104,iM=200,rM=201,oM=202,sM=203,Ad=204,Cd=205,aM=206,lM=207,cM=208,uM=209,fM=210,dM=211,hM=212,pM=213,mM=214,gM=0,xM=1,vM=2,_c=3,_M=4,yM=5,SM=6,MM=7,qv=0,wM=1,EM=2,sr=0,bM=1,TM=2,AM=3,CM=4,RM=5,Kv=300,Qo=301,Jo=302,Rd=303,Ld=304,$c=306,Pd=1e3,qn=1001,Dd=1002,Ft=1003,Dm=1004,Wu=1005,_n=1006,LM=1007,ca=1008,ar=1009,PM=1010,DM=1011,Yh=1012,Zv=1013,Ki=1014,Zi=1015,dr=1016,Qv=1017,Jv=1018,Or=1020,IM=1021,Kn=1023,NM=1024,UM=1025,Fr=1026,$o=1027,OM=1028,$v=1029,FM=1030,e_=1031,t_=1033,Xu=33776,ju=33777,Yu=33778,qu=33779,Im=35840,Nm=35841,Um=35842,Om=35843,zM=36196,Fm=37492,zm=37496,km=37808,Bm=37809,Vm=37810,Hm=37811,Gm=37812,Wm=37813,Xm=37814,jm=37815,Ym=37816,qm=37817,Km=37818,Zm=37819,Qm=37820,Jm=37821,Ku=36492,$m=36494,eg=36495,kM=36283,tg=36284,ng=36285,ig=36286,n_=3e3,lr=3001,BM=3200,VM=3201,HM=0,GM=1,In="",At="srgb",Di="srgb-linear",qh="display-p3",eu="display-p3-linear",yc="linear",ct="srgb",Sc="rec709",Mc="p3",eo=7680,rg=519,WM=512,XM=513,jM=514,YM=515,qM=516,KM=517,ZM=518,QM=519,og=35044,sg="300 es",Id=1035,bi=2e3,wc=2001;class as{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kl=Math.PI/180,Nd=180/Math.PI;function va(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function JM(t,e){return(t%e+e)%e}function Zu(t,e,n){return(1-n)*t+n*e}function ag(t){return(t&t-1)===0&&t!==0}function Ud(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function vs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,n,i,r,o,s,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=o,f[5]=l,f[6]=i,f[7]=s,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],u=i[2],p=i[5],x=i[8],_=r[0],m=r[3],h=r[6],v=r[1],g=r[4],w=r[7],E=r[2],T=r[5],A=r[8];return o[0]=s*_+a*v+l*E,o[3]=s*m+a*g+l*T,o[6]=s*h+a*w+l*A,o[1]=c*_+f*v+d*E,o[4]=c*m+f*g+d*T,o[7]=c*h+f*w+d*A,o[2]=u*_+p*v+x*E,o[5]=u*m+p*g+x*T,o[8]=u*h+p*w+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*s*f-n*a*c-i*o*f+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*s-a*c,u=a*l-f*o,p=c*o-s*l,x=n*d+i*u+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=d*_,e[1]=(r*c-f*i)*_,e[2]=(a*i-r*s)*_,e[3]=u*_,e[4]=(f*n-r*l)*_,e[5]=(r*o-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(s*n-i*o)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Qu.makeScale(e,n)),this}rotate(e){return this.premultiply(Qu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qu=new Je;function i_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ec(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function $M(){const t=Ec("canvas");return t.style.display="block",t}const lg={};function Gs(t){t in lg||(lg[t]=!0,console.warn(t))}const cg=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ug=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wa={[Di]:{transfer:yc,primaries:Sc,toReference:t=>t,fromReference:t=>t},[At]:{transfer:ct,primaries:Sc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[eu]:{transfer:yc,primaries:Mc,toReference:t=>t.applyMatrix3(ug),fromReference:t=>t.applyMatrix3(cg)},[qh]:{transfer:ct,primaries:Mc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(ug),fromReference:t=>t.applyMatrix3(cg).convertLinearToSRGB()}},ew=new Set([Di,eu]),st={enabled:!0,_workingColorSpace:Di,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ew.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Wa[e].toReference,r=Wa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Wa[t].primaries},getTransfer:function(t){return t===In?yc:Wa[t].transfer}};function Vo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ju(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let to;class r_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{to===void 0&&(to=Ec("canvas")),to.width=e.width,to.height=e.height;const i=to.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=to}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ec("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Vo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vo(n[i]/255)*255):n[i]=Vo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tw=0;class o_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tw++}),this.uuid=va(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push($u(r[s].image)):o.push($u(r[s]))}else o=$u(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function $u(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?r_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nw=0;class en extends as{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=qn,r=qn,o=_n,s=ca,a=Kn,l=ar,c=en.DEFAULT_ANISOTROPY,f=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nw++}),this.uuid=va(),this.name="",this.source=new o_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===lr?At:In),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pd:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pd:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?lr:n_}set encoding(e){Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===lr?At:In}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Kv;en.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],f=l[4],d=l[8],u=l[1],p=l[5],x=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(d-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,w=(p+1)/2,E=(h+1)/2,T=(f+u)/4,A=(d+_)/4,R=(x+m)/4;return g>w&&g>E?g<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(g),r=T/i,o=A/i):w>E?w<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(w),i=T/r,o=R/r):E<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(E),i=A/o,r=R/o),this.set(i,r,o,n),this}let v=Math.sqrt((m-x)*(m-x)+(d-_)*(d-_)+(u-f)*(u-f));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(d-_)/v,this.z=(u-f)/v,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iw extends as{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Gs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===lr?At:In),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new en(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new o_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends iw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class s_ extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rw extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const u=o[s+0],p=o[s+1],x=o[s+2],_=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=u,e[n+1]=p,e[n+2]=x,e[n+3]=_;return}if(d!==_||l!==u||c!==p||f!==x){let m=1-a;const h=l*u+c*p+f*x+d*_,v=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const E=Math.sqrt(g),T=Math.atan2(E,h*v);m=Math.sin(m*T)/E,a=Math.sin(a*T)/E}const w=a*v;if(l=l*m+u*w,c=c*m+p*w,f=f*m+x*w,d=d*m+_*w,m===1-a){const E=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=E,c*=E,f*=E,d*=E}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=o[s],u=o[s+1],p=o[s+2],x=o[s+3];return e[n]=a*x+f*d+l*p-c*u,e[n+1]=l*x+f*u+c*d-a*p,e[n+2]=c*x+f*p+a*u-l*d,e[n+3]=f*x-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(o/2),u=l(i/2),p=l(r/2),x=l(o/2);switch(s){case"XYZ":this._x=u*f*d+c*p*x,this._y=c*p*d-u*f*x,this._z=c*f*x+u*p*d,this._w=c*f*d-u*p*x;break;case"YXZ":this._x=u*f*d+c*p*x,this._y=c*p*d-u*f*x,this._z=c*f*x-u*p*d,this._w=c*f*d+u*p*x;break;case"ZXY":this._x=u*f*d-c*p*x,this._y=c*p*d+u*f*x,this._z=c*f*x+u*p*d,this._w=c*f*d-u*p*x;break;case"ZYX":this._x=u*f*d-c*p*x,this._y=c*p*d+u*f*x,this._z=c*f*x-u*p*d,this._w=c*f*d+u*p*x;break;case"YZX":this._x=u*f*d+c*p*x,this._y=c*p*d+u*f*x,this._z=c*f*x-u*p*d,this._w=c*f*d-u*p*x;break;case"XZY":this._x=u*f*d-c*p*x,this._y=c*p*d-u*f*x,this._z=c*f*x+u*p*d,this._w=c*f*d+u*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],u=i+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(o-c)*p,this._z=(s-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(o-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(s-r)/p,this._x=(o+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+s*a+r*c-o*l,this._y=r*f+s*l+o*a-i*c,this._z=o*f+s*c+i*l-r*a,this._w=s*f-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,u=Math.sin(n*f)/c;return this._w=s*d+this._w*u,this._x=i*d+this._x*u,this._y=r*d+this._y*u,this._z=o*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),f=2*(a*n-o*r),d=2*(o*i-s*n);return this.x=n+l*c+s*d-a*f,this.y=i+l*f+a*c-o*d,this.z=r+l*d+o*f-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ef.copy(this).projectOnVector(e),this.sub(ef)}reflect(e){return this.sub(ef.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ef=new j,fg=new Xr;class _a{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Vn):Vn.fromBufferAttribute(o,s),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),ja.subVectors(this.max,_s),no.subVectors(e.a,_s),io.subVectors(e.b,_s),ro.subVectors(e.c,_s),Fi.subVectors(io,no),zi.subVectors(ro,io),yr.subVectors(no,ro);let n=[0,-Fi.z,Fi.y,0,-zi.z,zi.y,0,-yr.z,yr.y,Fi.z,0,-Fi.x,zi.z,0,-zi.x,yr.z,0,-yr.x,-Fi.y,Fi.x,0,-zi.y,zi.x,0,-yr.y,yr.x,0];return!tf(n,no,io,ro,ja)||(n=[1,0,0,0,1,0,0,0,1],!tf(n,no,io,ro,ja))?!1:(Ya.crossVectors(Fi,zi),n=[Ya.x,Ya.y,Ya.z],tf(n,no,io,ro,ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new j,new j,new j,new j,new j,new j,new j,new j],Vn=new j,Xa=new _a,no=new j,io=new j,ro=new j,Fi=new j,zi=new j,yr=new j,_s=new j,ja=new j,Ya=new j,Sr=new j;function tf(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Sr.fromArray(t,o);const a=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),c=n.dot(Sr),f=i.dot(Sr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const ow=new _a,ys=new j,nf=new j;class tu{constructor(e=new j,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ow.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const n=ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(nf)),this.expandByPoint(ys.copy(e.center).sub(nf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new j,rf=new j,qa=new j,ki=new j,of=new j,Ka=new j,sf=new j;class Kh{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){rf.copy(e).add(n).multiplyScalar(.5),qa.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(rf);const o=e.distanceTo(n)*.5,s=-this.direction.dot(qa),a=ki.dot(this.direction),l=-ki.dot(qa),c=ki.lengthSq(),f=Math.abs(1-s*s);let d,u,p,x;if(f>0)if(d=s*l-a,u=s*a-l,x=o*f,d>=0)if(u>=-x)if(u<=x){const _=1/f;d*=_,u*=_,p=d*(d+s*u+2*a)+u*(s*d+u+2*l)+c}else u=o,d=Math.max(0,-(s*u+a)),p=-d*d+u*(u+2*l)+c;else u=-o,d=Math.max(0,-(s*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-s*o+a)),u=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-o,-l),o),p=u*(u+2*l)+c):(d=Math.max(0,-(s*o+a)),u=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+u*(u+2*l)+c);else u=s>0?-o:o,d=Math.max(0,-(s*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(rf).addScaledVector(qa,u),p}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(o=(e.min.y-u.y)*f,s=(e.max.y-u.y)*f):(o=(e.max.y-u.y)*f,s=(e.min.y-u.y)*f),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,o){of.subVectors(n,e),Ka.subVectors(i,e),sf.crossVectors(of,Ka);let s=this.direction.dot(sf),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(Ka.crossVectors(ki,Ka));if(l<0)return null;const c=a*this.direction.dot(of.cross(ki));if(c<0||l+c>s)return null;const f=-a*ki.dot(sf);return f<0?null:this.at(f/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,n,i,r,o,s,a,l,c,f,d,u,p,x,_,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,f,d,u,p,x,_,m)}set(e,n,i,r,o,s,a,l,c,f,d,u,p,x,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=o,h[5]=s,h[9]=a,h[13]=l,h[2]=c,h[6]=f,h[10]=d,h[14]=u,h[3]=p,h[7]=x,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/oo.setFromMatrixColumn(e,0).length(),o=1/oo.setFromMatrixColumn(e,1).length(),s=1/oo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const u=s*f,p=s*d,x=a*f,_=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+x*c,n[5]=u-_*c,n[9]=-a*l,n[2]=_-u*c,n[6]=x+p*c,n[10]=s*l}else if(e.order==="YXZ"){const u=l*f,p=l*d,x=c*f,_=c*d;n[0]=u+_*a,n[4]=x*a-p,n[8]=s*c,n[1]=s*d,n[5]=s*f,n[9]=-a,n[2]=p*a-x,n[6]=_+u*a,n[10]=s*l}else if(e.order==="ZXY"){const u=l*f,p=l*d,x=c*f,_=c*d;n[0]=u-_*a,n[4]=-s*d,n[8]=x+p*a,n[1]=p+x*a,n[5]=s*f,n[9]=_-u*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const u=s*f,p=s*d,x=a*f,_=a*d;n[0]=l*f,n[4]=x*c-p,n[8]=u*c+_,n[1]=l*d,n[5]=_*c+u,n[9]=p*c-x,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const u=s*l,p=s*c,x=a*l,_=a*c;n[0]=l*f,n[4]=_-u*d,n[8]=x*d+p,n[1]=d,n[5]=s*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+x,n[10]=u-_*d}else if(e.order==="XZY"){const u=s*l,p=s*c,x=a*l,_=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=u*d+_,n[5]=s*f,n[9]=p*d-x,n[2]=x*d-p,n[6]=a*f,n[10]=_*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sw,e,aw)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Bi.crossVectors(i,gn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Bi.crossVectors(i,gn)),Bi.normalize(),Za.crossVectors(gn,Bi),r[0]=Bi.x,r[4]=Za.x,r[8]=gn.x,r[1]=Bi.y,r[5]=Za.y,r[9]=gn.y,r[2]=Bi.z,r[6]=Za.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],u=i[9],p=i[13],x=i[2],_=i[6],m=i[10],h=i[14],v=i[3],g=i[7],w=i[11],E=i[15],T=r[0],A=r[4],R=r[8],M=r[12],S=r[1],I=r[5],N=r[9],P=r[13],C=r[2],O=r[6],B=r[10],G=r[14],U=r[3],X=r[7],k=r[11],D=r[15];return o[0]=s*T+a*S+l*C+c*U,o[4]=s*A+a*I+l*O+c*X,o[8]=s*R+a*N+l*B+c*k,o[12]=s*M+a*P+l*G+c*D,o[1]=f*T+d*S+u*C+p*U,o[5]=f*A+d*I+u*O+p*X,o[9]=f*R+d*N+u*B+p*k,o[13]=f*M+d*P+u*G+p*D,o[2]=x*T+_*S+m*C+h*U,o[6]=x*A+_*I+m*O+h*X,o[10]=x*R+_*N+m*B+h*k,o[14]=x*M+_*P+m*G+h*D,o[3]=v*T+g*S+w*C+E*U,o[7]=v*A+g*I+w*O+E*X,o[11]=v*R+g*N+w*B+E*k,o[15]=v*M+g*P+w*G+E*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],u=e[10],p=e[14],x=e[3],_=e[7],m=e[11],h=e[15];return x*(+o*l*d-r*c*d-o*a*u+i*c*u+r*a*p-i*l*p)+_*(+n*l*p-n*c*u+o*s*u-r*s*p+r*c*f-o*l*f)+m*(+n*c*d-n*a*p-o*s*d+i*s*p+o*a*f-i*c*f)+h*(-r*a*f-n*l*d+n*a*u+r*s*d-i*s*u+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],u=e[10],p=e[11],x=e[12],_=e[13],m=e[14],h=e[15],v=d*m*c-_*u*c+_*l*p-a*m*p-d*l*h+a*u*h,g=x*u*c-f*m*c-x*l*p+s*m*p+f*l*h-s*u*h,w=f*_*c-x*d*c+x*a*p-s*_*p-f*a*h+s*d*h,E=x*d*l-f*_*l-x*a*u+s*_*u+f*a*m-s*d*m,T=n*v+i*g+r*w+o*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(_*u*o-d*m*o-_*r*p+i*m*p+d*r*h-i*u*h)*A,e[2]=(a*m*o-_*l*o+_*r*c-i*m*c-a*r*h+i*l*h)*A,e[3]=(d*l*o-a*u*o-d*r*c+i*u*c+a*r*p-i*l*p)*A,e[4]=g*A,e[5]=(f*m*o-x*u*o+x*r*p-n*m*p-f*r*h+n*u*h)*A,e[6]=(x*l*o-s*m*o-x*r*c+n*m*c+s*r*h-n*l*h)*A,e[7]=(s*u*o-f*l*o+f*r*c-n*u*c-s*r*p+n*l*p)*A,e[8]=w*A,e[9]=(x*d*o-f*_*o-x*i*p+n*_*p+f*i*h-n*d*h)*A,e[10]=(s*_*o-x*a*o+x*i*c-n*_*c-s*i*h+n*a*h)*A,e[11]=(f*a*o-s*d*o-f*i*c+n*d*c+s*i*p-n*a*p)*A,e[12]=E*A,e[13]=(f*_*r-x*d*r+x*i*u-n*_*u-f*i*m+n*d*m)*A,e[14]=(x*a*r-s*_*r-x*i*l+n*_*l+s*i*m-n*a*m)*A,e[15]=(s*d*r-f*a*r+f*i*l-n*d*l-s*i*u+n*a*u)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,f=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*s,0,c*l-r*a,f*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,f=s+s,d=a+a,u=o*c,p=o*f,x=o*d,_=s*f,m=s*d,h=a*d,v=l*c,g=l*f,w=l*d,E=i.x,T=i.y,A=i.z;return r[0]=(1-(_+h))*E,r[1]=(p+w)*E,r[2]=(x-g)*E,r[3]=0,r[4]=(p-w)*T,r[5]=(1-(u+h))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(x+g)*A,r[9]=(m-v)*A,r[10]=(1-(u+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=oo.set(r[0],r[1],r[2]).length();const s=oo.set(r[4],r[5],r[6]).length(),a=oo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const c=1/o,f=1/s,d=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=f,Hn.elements[5]*=f,Hn.elements[6]*=f,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,n.setFromRotationMatrix(Hn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=bi){const l=this.elements,c=2*o/(n-e),f=2*o/(i-r),d=(n+e)/(n-e),u=(i+r)/(i-r);let p,x;if(a===bi)p=-(s+o)/(s-o),x=-2*s*o/(s-o);else if(a===wc)p=-s/(s-o),x=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=bi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(s-o),u=(n+e)*c,p=(i+r)*f;let x,_;if(a===bi)x=(s+o)*d,_=-2*d;else if(a===wc)x=o*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const oo=new j,Hn=new bt,sw=new j(0,0,0),aw=new j(1,1,1),Bi=new j,Za=new j,gn=new j,dg=new bt,hg=new Xr;class nu{constructor(e=0,n=0,i=0,r=nu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-sn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hg.setFromEuler(this),this.setFromQuaternion(hg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nu.DEFAULT_ORDER="XYZ";class Zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lw=0;const pg=new j,so=new Xr,pi=new bt,Qa=new j,Ss=new j,cw=new j,uw=new Xr,mg=new j(1,0,0),gg=new j(0,1,0),xg=new j(0,0,1),fw={type:"added"},dw={type:"removed"};class kt extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lw++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new j,n=new nu,i=new Xr,r=new j(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Je}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return so.setFromAxisAngle(e,n),this.quaternion.multiply(so),this}rotateOnWorldAxis(e,n){return so.setFromAxisAngle(e,n),this.quaternion.premultiply(so),this}rotateX(e){return this.rotateOnAxis(mg,e)}rotateY(e){return this.rotateOnAxis(gg,e)}rotateZ(e){return this.rotateOnAxis(xg,e)}translateOnAxis(e,n){return pg.copy(e).applyQuaternion(this.quaternion),this.position.add(pg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mg,e)}translateY(e){return this.translateOnAxis(gg,e)}translateZ(e){return this.translateOnAxis(xg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Qa.copy(e):Qa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ss,Qa,this.up):pi.lookAt(Qa,Ss,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),so.setFromRotationMatrix(pi),this.quaternion.premultiply(so.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dw)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,cw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,uw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),f=s(e.images),d=s(e.shapes),u=s(e.skeletons),p=s(e.animations),x=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function s(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new j(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new j,mi=new j,af=new j,gi=new j,ao=new j,lo=new j,vg=new j,lf=new j,cf=new j,uf=new j;let Ja=!1;class Dn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gn.subVectors(e,n),r.cross(Gn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Gn.subVectors(r,n),mi.subVectors(i,n),af.subVectors(e,n);const s=Gn.dot(Gn),a=Gn.dot(mi),l=Gn.dot(af),c=mi.dot(mi),f=mi.dot(af),d=s*c-a*a;if(d===0)return o.set(-2,-1,-1);const u=1/d,p=(c*l-a*f)*u,x=(s*f-a*l)*u;return o.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi),gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,n,i,r,o,s,a,l){return Ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ja=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,gi),l.setScalar(0),l.addScaledVector(o,gi.x),l.addScaledVector(s,gi.y),l.addScaledVector(a,gi.z),l}static isFrontFacing(e,n,i,r){return Gn.subVectors(i,n),mi.subVectors(e,n),Gn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Gn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Dn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return Ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ja=!0),Dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return Dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;ao.subVectors(r,i),lo.subVectors(o,i),lf.subVectors(e,i);const l=ao.dot(lf),c=lo.dot(lf);if(l<=0&&c<=0)return n.copy(i);cf.subVectors(e,r);const f=ao.dot(cf),d=lo.dot(cf);if(f>=0&&d<=f)return n.copy(r);const u=l*d-f*c;if(u<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector(ao,s);uf.subVectors(e,o);const p=ao.dot(uf),x=lo.dot(uf);if(x>=0&&p<=x)return n.copy(o);const _=p*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(lo,a);const m=f*x-p*d;if(m<=0&&d-f>=0&&p-x>=0)return vg.subVectors(o,r),a=(d-f)/(d-f+(p-x)),n.copy(r).addScaledVector(vg,a);const h=1/(m+_+u);return s=_*h,a=u*h,n.copy(i).addScaledVector(ao,s).addScaledVector(lo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const a_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},$a={h:0,s:0,l:0};function ff(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}let $e=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=JM(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=ff(s,o,e+1/3),this.g=ff(s,o,e),this.b=ff(s,o,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=At){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=At){const i=a_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}copyLinearToSRGB(e){return this.r=Ju(e.r),this.g=Ju(e.g),this.b=Ju(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return st.fromWorkingColorSpace(jt.copy(this),e),Math.round(sn(jt.r*255,0,255))*65536+Math.round(sn(jt.g*255,0,255))*256+Math.round(sn(jt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,o=jt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const f=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=f<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=At){st.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==At?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL($a);const i=Zu(Vi.h,$a.h,n),r=Zu(Vi.s,$a.s,n),o=Zu(Vi.l,$a.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const jt=new $e;$e.NAMES=a_;let hw=0;class ya extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hw++}),this.uuid=va(),this.name="",this.type="Material",this.blending=Bo,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Cd,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=_c,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bo&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ad&&(i.blendSrc=this.blendSrc),this.blendDst!==Cd&&(i.blendDst=this.blendDst),this.blendEquation!==Cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_c&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bc extends ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new j,el=new qe;class $n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=og,this.updateRange={offset:0,count:-1},this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)el.fromBufferAttribute(this,n),el.applyMatrix3(e),this.setXY(n,el.x,el.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vs(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vs(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vs(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array),o=rn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==og&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class l_ extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class c_ extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Bt extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pw=0;const Cn=new bt,df=new kt,co=new j,xn=new _a,Ms=new _a,Pt=new j;class An extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pw++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i_(e)?c_:l_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Je().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return df.lookAt(e),df.updateMatrix(),this.applyMatrix4(df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Bt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];xn.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(xn.min,Ms.min),xn.expandByPoint(Pt),Pt.addVectors(xn.max,Ms.max),xn.expandByPoint(Pt)):(xn.expandByPoint(Ms.min),xn.expandByPoint(Ms.max))}xn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Pt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Pt.fromBufferAttribute(a,c),l&&(co.fromBufferAttribute(e,c),Pt.add(co)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let S=0;S<a;S++)c[S]=new j,f[S]=new j;const d=new j,u=new j,p=new j,x=new qe,_=new qe,m=new qe,h=new j,v=new j;function g(S,I,N){d.fromArray(r,S*3),u.fromArray(r,I*3),p.fromArray(r,N*3),x.fromArray(s,S*2),_.fromArray(s,I*2),m.fromArray(s,N*2),u.sub(d),p.sub(d),_.sub(x),m.sub(x);const P=1/(_.x*m.y-m.x*_.y);isFinite(P)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(P),v.copy(p).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(P),c[S].add(h),c[I].add(h),c[N].add(h),f[S].add(v),f[I].add(v),f[N].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let S=0,I=w.length;S<I;++S){const N=w[S],P=N.start,C=N.count;for(let O=P,B=P+C;O<B;O+=3)g(i[O+0],i[O+1],i[O+2])}const E=new j,T=new j,A=new j,R=new j;function M(S){A.fromArray(o,S*3),R.copy(A);const I=c[S];E.copy(I),E.sub(A.multiplyScalar(A.dot(I))).normalize(),T.crossVectors(R,I);const P=T.dot(f[S])<0?-1:1;l[S*4]=E.x,l[S*4+1]=E.y,l[S*4+2]=E.z,l[S*4+3]=P}for(let S=0,I=w.length;S<I;++S){const N=w[S],P=N.start,C=N.count;for(let O=P,B=P+C;O<B;O+=3)M(i[O+0]),M(i[O+1]),M(i[O+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new j,o=new j,s=new j,a=new j,l=new j,c=new j,f=new j,d=new j;if(e)for(let u=0,p=e.count;u<p;u+=3){const x=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,_),s.fromBufferAttribute(n,m),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),o.fromBufferAttribute(n,u+1),s.fromBufferAttribute(n,u+2),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,u=new c.constructor(l.length*f);let p=0,x=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*f;for(let h=0;h<f;h++)u[x++]=c[p++]}return new $n(u,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new An,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let f=0,d=c.length;f<d;f++){const u=c[f],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const o=e.morphAttributes;for(const c in o){const f=[],d=o[c];for(let u=0,p=d.length;u<p;u++)f.push(d[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,f=s.length;c<f;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _g=new bt,Mr=new Kh,tl=new tu,yg=new j,uo=new j,fo=new j,ho=new j,hf=new j,nl=new j,il=new qe,rl=new qe,ol=new qe,Sg=new j,Mg=new j,wg=new j,sl=new j,al=new j;class Sn extends kt{constructor(e=new An,n=new bc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){nl.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const f=a[l],d=o[l];f!==0&&(hf.fromBufferAttribute(d,e),s?nl.addScaledVector(hf,f):nl.addScaledVector(hf.sub(n),f))}n.add(nl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(o),Mr.copy(e.ray).recast(e.near),!(tl.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(tl,yg)===null||Mr.origin.distanceToSquared(yg)>(e.far-e.near)**2))&&(_g.copy(o).invert(),Mr.copy(e.ray).applyMatrix4(_g),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,f=o.attributes.uv1,d=o.attributes.normal,u=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let x=0,_=u.length;x<_;x++){const m=u[x],h=s[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=v,E=g;w<E;w+=3){const T=a.getX(w),A=a.getX(w+1),R=a.getX(w+2);r=ll(this,h,e,i,c,f,d,T,A,R),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,h=_;m<h;m+=3){const v=a.getX(m),g=a.getX(m+1),w=a.getX(m+2);r=ll(this,s,e,i,c,f,d,v,g,w),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,_=u.length;x<_;x++){const m=u[x],h=s[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=v,E=g;w<E;w+=3){const T=w,A=w+1,R=w+2;r=ll(this,h,e,i,c,f,d,T,A,R),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=x,h=_;m<h;m+=3){const v=m,g=m+1,w=m+2;r=ll(this,s,e,i,c,f,d,v,g,w),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function mw(t,e,n,i,r,o,s,a){let l;if(e.side===hn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===fr,a),l===null)return null;al.copy(a),al.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(al);return c<n.near||c>n.far?null:{distance:c,point:al.clone(),object:t}}function ll(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,uo),t.getVertexPosition(l,fo),t.getVertexPosition(c,ho);const f=mw(t,e,n,i,uo,fo,ho,sl);if(f){r&&(il.fromBufferAttribute(r,a),rl.fromBufferAttribute(r,l),ol.fromBufferAttribute(r,c),f.uv=Dn.getInterpolation(sl,uo,fo,ho,il,rl,ol,new qe)),o&&(il.fromBufferAttribute(o,a),rl.fromBufferAttribute(o,l),ol.fromBufferAttribute(o,c),f.uv1=Dn.getInterpolation(sl,uo,fo,ho,il,rl,ol,new qe),f.uv2=f.uv1),s&&(Sg.fromBufferAttribute(s,a),Mg.fromBufferAttribute(s,l),wg.fromBufferAttribute(s,c),f.normal=Dn.getInterpolation(sl,uo,fo,ho,Sg,Mg,wg,new j),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new j,materialIndex:0};Dn.getNormal(uo,fo,ho,d.normal),f.face=d}return f}class Ii extends An{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],f=[],d=[];let u=0,p=0;x("z","y","x",-1,-1,i,n,e,s,o,0),x("z","y","x",1,-1,i,n,-e,s,o,1),x("x","z","y",1,1,e,i,n,r,s,2),x("x","z","y",1,-1,e,i,-n,r,s,3),x("x","y","z",1,-1,e,n,i,r,o,4),x("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(d,2));function x(_,m,h,v,g,w,E,T,A,R,M){const S=w/A,I=E/R,N=w/2,P=E/2,C=T/2,O=A+1,B=R+1;let G=0,U=0;const X=new j;for(let k=0;k<B;k++){const D=k*I-P;for(let H=0;H<O;H++){const ee=H*S-N;X[_]=ee*v,X[m]=D*g,X[h]=C,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[h]=T>0?1:-1,f.push(X.x,X.y,X.z),d.push(H/A),d.push(1-k/R),G+=1}}for(let k=0;k<R;k++)for(let D=0;D<A;D++){const H=u+D+O*k,ee=u+D+O*(k+1),se=u+(D+1)+O*(k+1),fe=u+(D+1)+O*k;l.push(H,ee,fe),l.push(ee,se,fe),U+=6}a.addGroup(p,U,M),p+=U,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function es(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=es(t[n]);for(const r in i)e[r]=i[r]}return e}function gw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function u_(t){return t.getRenderTarget()===null?t.outputColorSpace:st.workingColorSpace}const Ws={clone:es,merge:Qt};var xw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xw,this.fragmentShader=vw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=gw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class f_ extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class an extends f_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Nd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nd*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const po=-90,mo=1;class _w extends kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(po,mo,e,n);r.layers=this.layers,this.add(r);const o=new an(po,mo,e,n);o.layers=this.layers,this.add(o);const s=new an(po,mo,e,n);s.layers=this.layers,this.add(s);const a=new an(po,mo,e,n);a.layers=this.layers,this.add(a);const l=new an(po,mo,e,n);l.layers=this.layers,this.add(l);const c=new an(po,mo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,f]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,u,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class d_ extends en{constructor(e,n,i,r,o,s,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Qo,super(e,n,i,r,o,s,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yw extends ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Gs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===lr?At:In),this.texture=new d_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ii(5,5,5),o=new pn({name:"CubemapFromEquirect",uniforms:es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Ai});o.uniforms.tEquirect.value=n;const s=new Sn(r,o),a=n.minFilter;return n.minFilter===ca&&(n.minFilter=_n),new _w(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const pf=new j,Sw=new j,Mw=new Je;class Si{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=pf.subVectors(i,n).cross(Sw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(pf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Mw.getNormalMatrix(e),r=this.coplanarPoint(pf).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new tu,cl=new j;class Qh{constructor(e=new Si,n=new Si,i=new Si,r=new Si,o=new Si,s=new Si){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=bi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],u=r[7],p=r[8],x=r[9],_=r[10],m=r[11],h=r[12],v=r[13],g=r[14],w=r[15];if(i[0].setComponents(l-o,u-c,m-p,w-h).normalize(),i[1].setComponents(l+o,u+c,m+p,w+h).normalize(),i[2].setComponents(l+s,u+f,m+x,w+v).normalize(),i[3].setComponents(l-s,u-f,m-x,w-v).normalize(),i[4].setComponents(l-a,u-d,m-_,w-g).normalize(),n===bi)i[5].setComponents(l+a,u+d,m+_,w+g).normalize();else if(n===wc)i[5].setComponents(a,d,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(cl.x=r.normal.x>0?e.max.x:e.min.x,cl.y=r.normal.y>0?e.max.y:e.min.y,cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function h_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function ww(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,u=c.usage,p=t.createBuffer();t.bindBuffer(f,p),t.bufferData(f,d,u),c.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function o(c,f,d){const u=f.array,p=f.updateRange;t.bindBuffer(d,c),p.count===-1?t.bufferSubData(d,0,u):(n?t.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):t.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),f.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,f)):d.version<c.version&&(o(d.buffer,c,f),d.version=c.version)}return{get:s,remove:a,update:l}}class Jh extends An{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,u=n/l,p=[],x=[],_=[],m=[];for(let h=0;h<f;h++){const v=h*u-s;for(let g=0;g<c;g++){const w=g*d-o;x.push(w,-v,0),_.push(0,0,1),m.push(g/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const g=v+c*h,w=v+c*(h+1),E=v+1+c*(h+1),T=v+1+c*h;p.push(g,w,T),p.push(w,E,T)}this.setIndex(p),this.setAttribute("position",new Bt(x,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jh(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ew=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bw=`#ifdef USE_ALPHAHASH
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
#endif`,Tw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Aw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lw=`#ifdef USE_AOMAP
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
#endif`,Pw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uw=`#ifdef USE_IRIDESCENCE
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
#endif`,Ow=`#ifdef USE_BUMPMAP
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
#endif`,Fw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ww=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xw=`#define PI 3.141592653589793
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
} // validated`,jw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Yw=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jw="gl_FragColor = linearToOutputTexel( gl_FragColor );",$w=`
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
}`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nE=`#ifdef USE_ENVMAP
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
#endif`,iE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
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
#endif`,oE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cE=`#ifdef USE_GRADIENTMAP
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
}`,uE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pE=`uniform bool receiveShadow;
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
#endif`,mE=`#ifdef USE_ENVMAP
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
#endif`,gE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yE=`PhysicalMaterial material;
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,SE=`struct PhysicalMaterial {
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
}`,ME=`
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
#endif`,wE=`#if defined( RE_IndirectDiffuse )
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
#endif`,EE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,CE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,RE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DE=`#if defined( USE_POINTS_UV )
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
#endif`,IE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OE=`#ifdef USE_MORPHNORMALS
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
#endif`,FE=`#ifdef USE_MORPHTARGETS
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
#endif`,zE=`#ifdef USE_MORPHTARGETS
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
#endif`,kE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WE=`#ifdef USE_NORMALMAP
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
#endif`,XE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ib=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sb=`float getShadowMask() {
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
}`,ab=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,cb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ub=`#ifdef USE_SKINNING
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
#endif`,fb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,db=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mb=`#ifdef USE_TRANSMISSION
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
#endif`,gb=`#ifdef USE_TRANSMISSION
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
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mb=`uniform sampler2D t2D;
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,Cb=`#if DEPTH_PACKING == 3200
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
}`,Rb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,Lb=`#define DISTANCE
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
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Db=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`uniform float scale;
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
}`,Nb=`uniform vec3 diffuse;
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
}`,Ub=`#include <common>
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
}`,Ob=`uniform vec3 diffuse;
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
}`,Fb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,zb=`#define LAMBERT
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
}`,kb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,Bb=`#define MATCAP
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
}`,Vb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,Hb=`#define NORMAL
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
}`,Gb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Wb=`#define PHONG
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
}`,Xb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
}`,jb=`#define STANDARD
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
}`,Yb=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
}`,qb=`#define TOON
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
}`,Kb=`uniform float size;
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
}`,Zb=`uniform vec3 diffuse;
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
}`,Qb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
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
}`,Jb=`uniform vec3 color;
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
}`,$b=`uniform float rotation;
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
}`,e2=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Ew,alphahash_pars_fragment:bw,alphamap_fragment:Tw,alphamap_pars_fragment:Aw,alphatest_fragment:Cw,alphatest_pars_fragment:Rw,aomap_fragment:Lw,aomap_pars_fragment:Pw,begin_vertex:Dw,beginnormal_vertex:Iw,bsdfs:Nw,iridescence_fragment:Uw,bumpmap_pars_fragment:Ow,clipping_planes_fragment:Fw,clipping_planes_pars_fragment:zw,clipping_planes_pars_vertex:kw,clipping_planes_vertex:Bw,color_fragment:Vw,color_pars_fragment:Hw,color_pars_vertex:Gw,color_vertex:Ww,common:Xw,cube_uv_reflection_fragment:jw,defaultnormal_vertex:Yw,displacementmap_pars_vertex:qw,displacementmap_vertex:Kw,emissivemap_fragment:Zw,emissivemap_pars_fragment:Qw,colorspace_fragment:Jw,colorspace_pars_fragment:$w,envmap_fragment:eE,envmap_common_pars_fragment:tE,envmap_pars_fragment:nE,envmap_pars_vertex:iE,envmap_physical_pars_fragment:mE,envmap_vertex:rE,fog_vertex:oE,fog_pars_vertex:sE,fog_fragment:aE,fog_pars_fragment:lE,gradientmap_pars_fragment:cE,lightmap_fragment:uE,lightmap_pars_fragment:fE,lights_lambert_fragment:dE,lights_lambert_pars_fragment:hE,lights_pars_begin:pE,lights_toon_fragment:gE,lights_toon_pars_fragment:xE,lights_phong_fragment:vE,lights_phong_pars_fragment:_E,lights_physical_fragment:yE,lights_physical_pars_fragment:SE,lights_fragment_begin:ME,lights_fragment_maps:wE,lights_fragment_end:EE,logdepthbuf_fragment:bE,logdepthbuf_pars_fragment:TE,logdepthbuf_pars_vertex:AE,logdepthbuf_vertex:CE,map_fragment:RE,map_pars_fragment:LE,map_particle_fragment:PE,map_particle_pars_fragment:DE,metalnessmap_fragment:IE,metalnessmap_pars_fragment:NE,morphcolor_vertex:UE,morphnormal_vertex:OE,morphtarget_pars_vertex:FE,morphtarget_vertex:zE,normal_fragment_begin:kE,normal_fragment_maps:BE,normal_pars_fragment:VE,normal_pars_vertex:HE,normal_vertex:GE,normalmap_pars_fragment:WE,clearcoat_normal_fragment_begin:XE,clearcoat_normal_fragment_maps:jE,clearcoat_pars_fragment:YE,iridescence_pars_fragment:qE,opaque_fragment:KE,packing:ZE,premultiplied_alpha_fragment:QE,project_vertex:JE,dithering_fragment:$E,dithering_pars_fragment:eb,roughnessmap_fragment:tb,roughnessmap_pars_fragment:nb,shadowmap_pars_fragment:ib,shadowmap_pars_vertex:rb,shadowmap_vertex:ob,shadowmask_pars_fragment:sb,skinbase_vertex:ab,skinning_pars_vertex:lb,skinning_vertex:cb,skinnormal_vertex:ub,specularmap_fragment:fb,specularmap_pars_fragment:db,tonemapping_fragment:hb,tonemapping_pars_fragment:pb,transmission_fragment:mb,transmission_pars_fragment:gb,uv_pars_fragment:xb,uv_pars_vertex:vb,uv_vertex:_b,worldpos_vertex:yb,background_vert:Sb,background_frag:Mb,backgroundCube_vert:wb,backgroundCube_frag:Eb,cube_vert:bb,cube_frag:Tb,depth_vert:Ab,depth_frag:Cb,distanceRGBA_vert:Rb,distanceRGBA_frag:Lb,equirect_vert:Pb,equirect_frag:Db,linedashed_vert:Ib,linedashed_frag:Nb,meshbasic_vert:Ub,meshbasic_frag:Ob,meshlambert_vert:Fb,meshlambert_frag:zb,meshmatcap_vert:kb,meshmatcap_frag:Bb,meshnormal_vert:Vb,meshnormal_frag:Hb,meshphong_vert:Gb,meshphong_frag:Wb,meshphysical_vert:Xb,meshphysical_frag:jb,meshtoon_vert:Yb,meshtoon_frag:qb,points_vert:Kb,points_frag:Zb,shadow_vert:Qb,shadow_frag:Jb,sprite_vert:$b,sprite_frag:e2},Ce={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ri={basic:{uniforms:Qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Qt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Qt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Qt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Qt([Ce.points,Ce.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Qt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Qt([Ce.common,Ce.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Qt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Qt([Ce.sprite,Ce.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Qt([Ce.common,Ce.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Qt([Ce.lights,Ce.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ri.physical={uniforms:Qt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const ul={r:0,b:0,g:0};function t2(t,e,n,i,r,o,s){const a=new $e(0);let l=o===!0?0:1,c,f,d=null,u=0,p=null;function x(m,h){let v=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?n:e).get(g)),g===null?_(a,l):g&&g.isColor&&(_(g,1),v=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===$c)?(f===void 0&&(f=new Sn(new Ii(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:es(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,f.material.toneMapped=st.getTransfer(g.colorSpace)!==ct,(d!==g||u!==g.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=g,u=g.version,p=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Sn(new Jh(2,2),new pn({name:"BackgroundMaterial",uniforms:es(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=st.getTransfer(g.colorSpace)!==ct,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||u!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,u=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,h){m.getRGB(ul,u_(t)),i.buffers.color.setClear(ul.r,ul.g,ul.b,h,s)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:x}}function n2(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=m(null);let c=l,f=!1;function d(C,O,B,G,U){let X=!1;if(s){const k=_(G,B,O);c!==k&&(c=k,p(c.object)),X=h(C,G,B,U),X&&v(C,G,B,U)}else{const k=O.wireframe===!0;(c.geometry!==G.id||c.program!==B.id||c.wireframe!==k)&&(c.geometry=G.id,c.program=B.id,c.wireframe=k,X=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(X||f)&&(f=!1,R(C,O,B,G),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function u(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function p(C){return i.isWebGL2?t.bindVertexArray(C):o.bindVertexArrayOES(C)}function x(C){return i.isWebGL2?t.deleteVertexArray(C):o.deleteVertexArrayOES(C)}function _(C,O,B){const G=B.wireframe===!0;let U=a[C.id];U===void 0&&(U={},a[C.id]=U);let X=U[O.id];X===void 0&&(X={},U[O.id]=X);let k=X[G];return k===void 0&&(k=m(u()),X[G]=k),k}function m(C){const O=[],B=[],G=[];for(let U=0;U<r;U++)O[U]=0,B[U]=0,G[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:G,object:C,attributes:{},index:null}}function h(C,O,B,G){const U=c.attributes,X=O.attributes;let k=0;const D=B.getAttributes();for(const H in D)if(D[H].location>=0){const se=U[H];let fe=X[H];if(fe===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor)),se===void 0||se.attribute!==fe||fe&&se.data!==fe.data)return!0;k++}return c.attributesNum!==k||c.index!==G}function v(C,O,B,G){const U={},X=O.attributes;let k=0;const D=B.getAttributes();for(const H in D)if(D[H].location>=0){let se=X[H];se===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const fe={};fe.attribute=se,se&&se.data&&(fe.data=se.data),U[H]=fe,k++}c.attributes=U,c.attributesNum=k,c.index=G}function g(){const C=c.newAttributes;for(let O=0,B=C.length;O<B;O++)C[O]=0}function w(C){E(C,0)}function E(C,O){const B=c.newAttributes,G=c.enabledAttributes,U=c.attributeDivisors;B[C]=1,G[C]===0&&(t.enableVertexAttribArray(C),G[C]=1),U[C]!==O&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,O),U[C]=O)}function T(){const C=c.newAttributes,O=c.enabledAttributes;for(let B=0,G=O.length;B<G;B++)O[B]!==C[B]&&(t.disableVertexAttribArray(B),O[B]=0)}function A(C,O,B,G,U,X,k){k===!0?t.vertexAttribIPointer(C,O,B,U,X):t.vertexAttribPointer(C,O,B,G,U,X)}function R(C,O,B,G){if(i.isWebGL2===!1&&(C.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const U=G.attributes,X=B.getAttributes(),k=O.defaultAttributeValues;for(const D in X){const H=X[D];if(H.location>=0){let ee=U[D];if(ee===void 0&&(D==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),D==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),ee!==void 0){const se=ee.normalized,fe=ee.itemSize,ce=n.get(ee);if(ce===void 0)continue;const xe=ce.buffer,ue=ce.type,Se=ce.bytesPerElement,Re=i.isWebGL2===!0&&(ue===t.INT||ue===t.UNSIGNED_INT||ee.gpuType===Zv);if(ee.isInterleavedBufferAttribute){const Ee=ee.data,W=Ee.stride,Oe=ee.offset;if(Ee.isInstancedInterleavedBuffer){for(let Le=0;Le<H.locationSize;Le++)E(H.location+Le,Ee.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Le=0;Le<H.locationSize;Le++)w(H.location+Le);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let Le=0;Le<H.locationSize;Le++)A(H.location+Le,fe/H.locationSize,ue,se,W*Se,(Oe+fe/H.locationSize*Le)*Se,Re)}else{if(ee.isInstancedBufferAttribute){for(let Ee=0;Ee<H.locationSize;Ee++)E(H.location+Ee,ee.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)w(H.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let Ee=0;Ee<H.locationSize;Ee++)A(H.location+Ee,fe/H.locationSize,ue,se,fe*Se,fe/H.locationSize*Ee*Se,Re)}}else if(k!==void 0){const se=k[D];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(H.location,se);break;case 3:t.vertexAttrib3fv(H.location,se);break;case 4:t.vertexAttrib4fv(H.location,se);break;default:t.vertexAttrib1fv(H.location,se)}}}}T()}function M(){N();for(const C in a){const O=a[C];for(const B in O){const G=O[B];for(const U in G)x(G[U].object),delete G[U];delete O[B]}delete a[C]}}function S(C){if(a[C.id]===void 0)return;const O=a[C.id];for(const B in O){const G=O[B];for(const U in G)x(G[U].object),delete G[U];delete O[B]}delete a[C.id]}function I(C){for(const O in a){const B=a[O];if(B[C.id]===void 0)continue;const G=B[C.id];for(const U in G)x(G[U].object),delete G[U];delete B[C.id]}}function N(){P(),f=!0,c!==l&&(c=l,p(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:N,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:I,initAttributes:g,enableAttribute:w,disableUnusedAttributes:T}}function i2(t,e,n,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,f){t.drawArrays(o,c,f),n.update(f,o,1)}function l(c,f,d){if(d===0)return;let u,p;if(r)u=t,p="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](o,c,f,d),n.update(f,o,d)}this.setMode=s,this.render=a,this.renderInstances=l}function r2(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),u=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=u>0,w=s||e.has("OES_texture_float"),E=g&&w,T=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:w,floatVertexTextures:E,maxSamples:T}}function o2(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Si,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,u){n=f(d,u,0)},this.setState=function(d,u,p){const x=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||x===null||x.length===0||o&&!m)o?f(null):c();else{const v=o?0:i,g=v*4;let w=h.clippingState||null;l.value=w,w=f(x,u,g,p);for(let E=0;E!==g;++E)w[E]=n[E];h.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,u,p,x){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,x!==!0||m===null){const h=p+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,w=p;g!==_;++g,w+=4)s.copy(d[g]).applyMatrix4(v,a),s.normal.toArray(m,w),m[w+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function s2(t){let e=new WeakMap;function n(s,a){return a===Rd?s.mapping=Qo:a===Ld&&(s.mapping=Jo),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Rd||a===Ld)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new yw(l.height/2);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class $h extends f_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Io=4,Eg=[.125,.215,.35,.446,.526,.582],Rr=20,mf=new $h,bg=new $e;let gf=null,xf=0,vf=0;const Tr=(1+Math.sqrt(5))/2,go=1/Tr,Tg=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Tr,go),new j(0,Tr,-go),new j(go,0,Tr),new j(-go,0,Tr),new j(Tr,go,0),new j(-Tr,go,0)];class Ag{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){gf=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gf,xf,vf),e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qo||e.mapping===Jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gf=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:dr,format:Kn,colorSpace:Di,depthBuffer:!1},r=Cg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a2(o)),this._blurMaterial=l2(o,e,n)}return r}_compileMaterial(e){const n=new Sn(this._lodPlanes[0],e);this._renderer.compile(n,mf)}_sceneToCubeUV(e,n,i,r){const a=new an(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(bg),f.toneMapping=sr,f.autoClear=!1;const p=new bc({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),x=new Sn(new Ii,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(bg),_=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const g=this._cubeSize;fl(r,v*g,h>2?g:0,g,g),f.setRenderTarget(r),_&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=u,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Qo||e.mapping===Jo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rg());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Sn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;fl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,mf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Tg[(r-1)%Tg.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Sn(this._lodPlanes[r],c),u=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Rr-1),_=o/x,m=isFinite(o)?1+Math.floor(f*_):Rr;m>Rr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rr}`);const h=[];let v=0;for(let A=0;A<Rr;++A){const R=A/_,M=Math.exp(-R*R/2);h.push(M),A===0?v+=M:A<m&&(v+=2*M)}for(let A=0;A<h.length;A++)h[A]=h[A]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=s==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:g}=this;u.dTheta.value=x,u.mipInt.value=g-i;const w=this._sizeLods[r],E=3*w*(r>g-Io?r-g+Io:0),T=4*(this._cubeSize-w);fl(n,E,T,3*w,2*w),l.setRenderTarget(n),l.render(d,mf)}}function a2(t){const e=[],n=[],i=[];let r=t;const o=t-Io+1+Eg.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Io?l=Eg[s-t+Io-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,u=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,x=6,_=3,m=2,h=1,v=new Float32Array(_*x*p),g=new Float32Array(m*x*p),w=new Float32Array(h*x*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,R=T>2?0:-1,M=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];v.set(M,_*x*T),g.set(u,m*x*T);const S=[T,T,T,T,T,T];w.set(S,h*x*T)}const E=new An;E.setAttribute("position",new $n(v,_)),E.setAttribute("uv",new $n(g,m)),E.setAttribute("faceIndex",new $n(w,h)),e.push(E),r>Io&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Cg(t,e,n){const i=new ci(t,e,n);return i.texture.mapping=$c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function l2(t,e,n){const i=new Float32Array(Rr),r=new j(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ep(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Rg(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ep(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Lg(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function ep(){return`

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
	`}function c2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Rd||l===Ld,f=l===Qo||l===Jo;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Ag(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new Ag(t));const u=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",o),u.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function u2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function f2(t,e,n,i){const r={},o=new WeakMap;function s(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);for(const x in u.morphAttributes){const _=u.morphAttributes[x];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}u.removeEventListener("dispose",s),delete r[u.id];const p=o.get(u);p&&(e.remove(p),o.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const x in u)e.update(u[x],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const _=p[x];for(let m=0,h=_.length;m<h;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,x=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let g=0,w=v.length;g<w;g+=3){const E=v[g+0],T=v[g+1],A=v[g+2];u.push(E,T,T,A,A,E)}}else if(x!==void 0){const v=x.array;_=x.version;for(let g=0,w=v.length/3-1;g<w;g+=3){const E=g+0,T=g+1,A=g+2;u.push(E,T,T,A,A,E)}}else return;const m=new(i_(u)?c_:l_)(u,1);m.version=_;const h=o.get(d);h&&e.remove(h),o.set(d,m)}function f(d){const u=o.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function d2(t,e,n,i){const r=i.isWebGL2;let o;function s(u){o=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function f(u,p){t.drawElements(o,p,a,u*l),n.update(p,o,1)}function d(u,p,x){if(x===0)return;let _,m;if(r)_=t,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](o,p,a,u*l,x),n.update(p,o,x)}this.setMode=s,this.setIndex=c,this.render=f,this.renderInstances=d}function h2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function p2(t,e){return t[0]-e[0]}function m2(t,e){return Math.abs(e[1])-Math.abs(t[1])}function g2(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new Nt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=x!==void 0?x.length:0;let m=o.get(f);if(m===void 0||m.count!==_){let O=function(){P.dispose(),o.delete(f),f.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const g=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,E=f.morphAttributes.color!==void 0,T=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let M=0;g===!0&&(M=1),w===!0&&(M=2),E===!0&&(M=3);let S=f.attributes.position.count*M,I=1;S>e.maxTextureSize&&(I=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const N=new Float32Array(S*I*4*_),P=new s_(N,S,I,_);P.type=Zi,P.needsUpdate=!0;const C=M*4;for(let B=0;B<_;B++){const G=T[B],U=A[B],X=R[B],k=S*I*4*B;for(let D=0;D<G.count;D++){const H=D*C;g===!0&&(s.fromBufferAttribute(G,D),N[k+H+0]=s.x,N[k+H+1]=s.y,N[k+H+2]=s.z,N[k+H+3]=0),w===!0&&(s.fromBufferAttribute(U,D),N[k+H+4]=s.x,N[k+H+5]=s.y,N[k+H+6]=s.z,N[k+H+7]=0),E===!0&&(s.fromBufferAttribute(X,D),N[k+H+8]=s.x,N[k+H+9]=s.y,N[k+H+10]=s.z,N[k+H+11]=X.itemSize===4?s.w:1)}}m={count:_,texture:P,size:new qe(S,I)},o.set(f,m),f.addEventListener("dispose",O)}let h=0;for(let g=0;g<u.length;g++)h+=u[g];const v=f.morphTargetsRelative?1:1-h;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",u),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const x=u===void 0?0:u.length;let _=i[f.id];if(_===void 0||_.length!==x){_=[];for(let w=0;w<x;w++)_[w]=[w,0];i[f.id]=_}for(let w=0;w<x;w++){const E=_[w];E[0]=w,E[1]=u[w]}_.sort(m2);for(let w=0;w<8;w++)w<x&&_[w][1]?(a[w][0]=_[w][0],a[w][1]=_[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(p2);const m=f.morphAttributes.position,h=f.morphAttributes.normal;let v=0;for(let w=0;w<8;w++){const E=a[w],T=E[0],A=E[1];T!==Number.MAX_SAFE_INTEGER&&A?(m&&f.getAttribute("morphTarget"+w)!==m[T]&&f.setAttribute("morphTarget"+w,m[T]),h&&f.getAttribute("morphNormal"+w)!==h[T]&&f.setAttribute("morphNormal"+w,h[T]),r[w]=A,v+=A):(m&&f.hasAttribute("morphTarget"+w)===!0&&f.deleteAttribute("morphTarget"+w),h&&f.hasAttribute("morphNormal"+w)===!0&&f.deleteAttribute("morphNormal"+w),r[w]=0)}const g=f.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function x2(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}const p_=new en,m_=new s_,g_=new rw,x_=new d_,Pg=[],Dg=[],Ig=new Float32Array(16),Ng=new Float32Array(9),Ug=new Float32Array(4);function ls(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Pg[r];if(o===void 0&&(o=new Float32Array(r),Pg[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function iu(t,e){let n=Dg[e];n===void 0&&(n=new Int32Array(e),Dg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function v2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function y2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function S2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function M2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Rt(n,i))return;Ug.set(i),t.uniformMatrix2fv(this.addr,!1,Ug),Lt(n,i)}}function w2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Rt(n,i))return;Ng.set(i),t.uniformMatrix3fv(this.addr,!1,Ng),Lt(n,i)}}function E2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Rt(n,i))return;Ig.set(i),t.uniformMatrix4fv(this.addr,!1,Ig),Lt(n,i)}}function b2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function T2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function A2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function C2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function R2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function L2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function P2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function D2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function I2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||p_,r)}function N2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||g_,r)}function U2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||x_,r)}function O2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||m_,r)}function F2(t){switch(t){case 5126:return v2;case 35664:return _2;case 35665:return y2;case 35666:return S2;case 35674:return M2;case 35675:return w2;case 35676:return E2;case 5124:case 35670:return b2;case 35667:case 35671:return T2;case 35668:case 35672:return A2;case 35669:case 35673:return C2;case 5125:return R2;case 36294:return L2;case 36295:return P2;case 36296:return D2;case 35678:case 36198:case 36298:case 36306:case 35682:return I2;case 35679:case 36299:case 36307:return N2;case 35680:case 36300:case 36308:case 36293:return U2;case 36289:case 36303:case 36311:case 36292:return O2}}function z2(t,e){t.uniform1fv(this.addr,e)}function k2(t,e){const n=ls(e,this.size,2);t.uniform2fv(this.addr,n)}function B2(t,e){const n=ls(e,this.size,3);t.uniform3fv(this.addr,n)}function V2(t,e){const n=ls(e,this.size,4);t.uniform4fv(this.addr,n)}function H2(t,e){const n=ls(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function G2(t,e){const n=ls(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function W2(t,e){const n=ls(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function X2(t,e){t.uniform1iv(this.addr,e)}function j2(t,e){t.uniform2iv(this.addr,e)}function Y2(t,e){t.uniform3iv(this.addr,e)}function q2(t,e){t.uniform4iv(this.addr,e)}function K2(t,e){t.uniform1uiv(this.addr,e)}function Z2(t,e){t.uniform2uiv(this.addr,e)}function Q2(t,e){t.uniform3uiv(this.addr,e)}function J2(t,e){t.uniform4uiv(this.addr,e)}function $2(t,e,n){const i=this.cache,r=e.length,o=iu(n,r);Rt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||p_,o[s])}function eT(t,e,n){const i=this.cache,r=e.length,o=iu(n,r);Rt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||g_,o[s])}function tT(t,e,n){const i=this.cache,r=e.length,o=iu(n,r);Rt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||x_,o[s])}function nT(t,e,n){const i=this.cache,r=e.length,o=iu(n,r);Rt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||m_,o[s])}function iT(t){switch(t){case 5126:return z2;case 35664:return k2;case 35665:return B2;case 35666:return V2;case 35674:return H2;case 35675:return G2;case 35676:return W2;case 5124:case 35670:return X2;case 35667:case 35671:return j2;case 35668:case 35672:return Y2;case 35669:case 35673:return q2;case 5125:return K2;case 36294:return Z2;case 36295:return Q2;case 36296:return J2;case 35678:case 36198:case 36298:case 36306:case 35682:return $2;case 35679:case 36299:case 36307:return eT;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return nT}}class rT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=F2(n.type)}}class oT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=iT(n.type)}}class sT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const _f=/(\w+)(\])?(\[|\.)?/g;function Og(t,e){t.seq.push(e),t.map[e.id]=e}function aT(t,e,n){const i=t.name,r=i.length;for(_f.lastIndex=0;;){const o=_f.exec(i),s=_f.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Og(n,c===void 0?new rT(a,t,e):new oT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new sT(a),Og(n,d)),n=d}}}class Bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);aT(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Fg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const lT=37297;let cT=0;function uT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function fT(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===Mc&&n===Sc?i="LinearDisplayP3ToLinearSRGB":e===Sc&&n===Mc&&(i="LinearSRGBToLinearDisplayP3"),t){case Di:case eu:return[i,"LinearTransferOETF"];case At:case qh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function zg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+uT(t.getShaderSource(e),s)}else return r}function dT(t,e){const n=fT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function hT(t,e){let n;switch(e){case bM:n="Linear";break;case TM:n="Reinhard";break;case AM:n="OptimizedCineon";break;case CM:n="ACESFilmic";break;case RM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function pT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rs).join(`
`)}function mT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function gT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Rs(t){return t!==""}function kg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(t){return t.replace(xT,_T)}const vT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _T(t,e){let n=Ze[e];if(n===void 0){const i=vT.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Od(n)}const yT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vg(t){return t.replace(yT,ST)}function ST(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Hg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Yv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$S?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function wT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Qo:case Jo:e="ENVMAP_TYPE_CUBE";break;case $c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ET(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Jo:e="ENVMAP_MODE_REFRACTION";break}return e}function bT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case qv:e="ENVMAP_BLENDING_MULTIPLY";break;case wM:e="ENVMAP_BLENDING_MIX";break;case EM:e="ENVMAP_BLENDING_ADD";break}return e}function TT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function AT(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=MT(n),c=wT(n),f=ET(n),d=bT(n),u=TT(n),p=n.isWebGL2?"":pT(n),x=mT(o),_=r.createProgram();let m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Rs).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Rs).join(`
`),h.length>0&&(h+=`
`)):(m=[Hg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),h=[p,Hg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?Ze.tonemapping_pars_fragment:"",n.toneMapping!==sr?hT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,dT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Rs).join(`
`)),s=Od(s),s=kg(s,n),s=Bg(s,n),a=Od(a),a=kg(a,n),a=Bg(a,n),s=Vg(s),a=Vg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const g=v+m+s,w=v+h+a,E=Fg(r,r.VERTEX_SHADER,g),T=Fg(r,r.FRAGMENT_SHADER,w);r.attachShader(_,E),r.attachShader(_,T),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(I){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),P=r.getShaderInfoLog(E).trim(),C=r.getShaderInfoLog(T).trim();let O=!0,B=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,E,T);else{const G=zg(r,E,"vertex"),U=zg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+G+`
`+U)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(P===""||C==="")&&(B=!1);B&&(I.diagnostics={runnable:O,programLog:N,vertexShader:{log:P,prefix:m},fragmentShader:{log:C,prefix:h}})}r.deleteShader(E),r.deleteShader(T),R=new Bl(r,_),M=gT(r,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,lT)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}let CT=0;class RT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new LT(e),n.set(e,i)),i}}class LT{constructor(e){this.id=CT++,this.code=e,this.usedTimes=0}}function PT(t,e,n,i,r,o,s){const a=new Zh,l=new RT,c=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,S,I,N,P){const C=N.fog,O=P.geometry,B=M.isMeshStandardMaterial?N.environment:null,G=(M.isMeshStandardMaterial?n:e).get(M.envMap||B),U=G&&G.mapping===$c?G.image.height:null,X=x[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const k=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,D=k!==void 0?k.length:0;let H=0;O.morphAttributes.position!==void 0&&(H=1),O.morphAttributes.normal!==void 0&&(H=2),O.morphAttributes.color!==void 0&&(H=3);let ee,se,fe,ce;if(X){const Ae=ri[X];ee=Ae.vertexShader,se=Ae.fragmentShader}else ee=M.vertexShader,se=M.fragmentShader,l.update(M),fe=l.getVertexShaderID(M),ce=l.getFragmentShaderID(M);const xe=t.getRenderTarget(),ue=P.isInstancedMesh===!0,Se=!!M.map,Re=!!M.matcap,Ee=!!G,W=!!M.aoMap,Oe=!!M.lightMap,Le=!!M.bumpMap,Fe=!!M.normalMap,Ne=!!M.displacementMap,He=!!M.emissiveMap,ze=!!M.metalnessMap,ve=!!M.roughnessMap,be=M.anisotropy>0,Qe=M.clearcoat>0,Ye=M.iridescence>0,b=M.sheen>0,y=M.transmission>0,F=be&&!!M.anisotropyMap,Y=Qe&&!!M.clearcoatMap,te=Qe&&!!M.clearcoatNormalMap,q=Qe&&!!M.clearcoatRoughnessMap,Q=Ye&&!!M.iridescenceMap,Z=Ye&&!!M.iridescenceThicknessMap,J=b&&!!M.sheenColorMap,de=b&&!!M.sheenRoughnessMap,le=!!M.specularMap,ae=!!M.specularColorMap,Pe=!!M.specularIntensityMap,ge=y&&!!M.transmissionMap,_e=y&&!!M.thicknessMap,Te=!!M.gradientMap,pe=!!M.alphaMap,De=M.alphaTest>0,V=!!M.alphaHash,ye=!!M.extensions,me=!!O.attributes.uv1,oe=!!O.attributes.uv2,he=!!O.attributes.uv3;let ke=sr;return M.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(ke=t.toneMapping),{isWebGL2:f,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:se,defines:M.defines,customVertexShaderID:fe,customFragmentShaderID:ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:ue,instancingColor:ue&&P.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:xe===null?t.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Di,map:Se,matcap:Re,envMap:Ee,envMapMode:Ee&&G.mapping,envMapCubeUVHeight:U,aoMap:W,lightMap:Oe,bumpMap:Le,normalMap:Fe,displacementMap:u&&Ne,emissiveMap:He,normalMapObjectSpace:Fe&&M.normalMapType===GM,normalMapTangentSpace:Fe&&M.normalMapType===HM,metalnessMap:ze,roughnessMap:ve,anisotropy:be,anisotropyMap:F,clearcoat:Qe,clearcoatMap:Y,clearcoatNormalMap:te,clearcoatRoughnessMap:q,iridescence:Ye,iridescenceMap:Q,iridescenceThicknessMap:Z,sheen:b,sheenColorMap:J,sheenRoughnessMap:de,specularMap:le,specularColorMap:ae,specularIntensityMap:Pe,transmission:y,transmissionMap:ge,thicknessMap:_e,gradientMap:Te,opaque:M.transparent===!1&&M.blending===Bo,alphaMap:pe,alphaTest:De,alphaHash:V,combine:M.combine,mapUv:Se&&_(M.map.channel),aoMapUv:W&&_(M.aoMap.channel),lightMapUv:Oe&&_(M.lightMap.channel),bumpMapUv:Le&&_(M.bumpMap.channel),normalMapUv:Fe&&_(M.normalMap.channel),displacementMapUv:Ne&&_(M.displacementMap.channel),emissiveMapUv:He&&_(M.emissiveMap.channel),metalnessMapUv:ze&&_(M.metalnessMap.channel),roughnessMapUv:ve&&_(M.roughnessMap.channel),anisotropyMapUv:F&&_(M.anisotropyMap.channel),clearcoatMapUv:Y&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:J&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(M.sheenRoughnessMap.channel),specularMapUv:le&&_(M.specularMap.channel),specularColorMapUv:ae&&_(M.specularColorMap.channel),specularIntensityMapUv:Pe&&_(M.specularIntensityMap.channel),transmissionMapUv:ge&&_(M.transmissionMap.channel),thicknessMapUv:_e&&_(M.thicknessMap.channel),alphaMapUv:pe&&_(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Fe||be),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:me,vertexUv2s:oe,vertexUv3s:he,pointsUvs:P.isPoints===!0&&!!O.attributes.uv&&(Se||pe),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:H,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:ke,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Se&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Mi,flipSided:M.side===hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ye&&M.extensions.derivatives===!0,extensionFragDepth:ye&&M.extensions.fragDepth===!0,extensionDrawBuffers:ye&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(v(S,M),g(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function g(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function w(M){const S=x[M.type];let I;if(S){const N=ri[S];I=Ws.clone(N.uniforms)}else I=M.uniforms;return I}function E(M,S){let I;for(let N=0,P=c.length;N<P;N++){const C=c[N];if(C.cacheKey===S){I=C,++I.usedTimes;break}}return I===void 0&&(I=new AT(t,S,M,o),c.push(I)),I}function T(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:w,acquireProgram:E,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:R}}function DT(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function IT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Gg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,u,p,x,_,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:u,material:p,groupOrder:x,renderOrder:d.renderOrder,z:_,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=u,h.material=p,h.groupOrder=x,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,u,p,x,_,m){const h=s(d,u,p,x,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,u,p,x,_,m){const h=s(d,u,p,x,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,u){n.length>1&&n.sort(d||IT),i.length>1&&i.sort(u||Gg),r.length>1&&r.sort(u||Gg)}function f(){for(let d=e,u=t.length;d<u;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:f,sort:c}}function NT(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Wg,t.set(i,[s])):r>=o.length?(s=new Wg,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function UT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new $e};break;case"SpotLight":n={position:new j,direction:new j,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function OT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let FT=0;function zT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function kT(t,e){const n=new UT,i=OT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new j);const o=new j,s=new bt,a=new bt;function l(f,d){let u=0,p=0,x=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let _=0,m=0,h=0,v=0,g=0,w=0,E=0,T=0,A=0,R=0,M=0;f.sort(zT);const S=d===!0?Math.PI:1;for(let N=0,P=f.length;N<P;N++){const C=f[N],O=C.color,B=C.intensity,G=C.distance,U=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=O.r*B*S,p+=O.g*B*S,x+=O.b*B*S;else if(C.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(C.sh.coefficients[X],B);M++}else if(C.isDirectionalLight){const X=n.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity*S),C.castShadow){const k=C.shadow,D=i.get(C);D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,r.directionalShadow[_]=D,r.directionalShadowMap[_]=U,r.directionalShadowMatrix[_]=C.shadow.matrix,w++}r.directional[_]=X,_++}else if(C.isSpotLight){const X=n.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(O).multiplyScalar(B*S),X.distance=G,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,r.spot[h]=X;const k=C.shadow;if(C.map&&(r.spotLightMap[A]=C.map,A++,k.updateMatrices(C),C.castShadow&&R++),r.spotLightMatrix[h]=k.matrix,C.castShadow){const D=i.get(C);D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,r.spotShadow[h]=D,r.spotShadowMap[h]=U,T++}h++}else if(C.isRectAreaLight){const X=n.get(C);X.color.copy(O).multiplyScalar(B),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),r.rectArea[v]=X,v++}else if(C.isPointLight){const X=n.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity*S),X.distance=C.distance,X.decay=C.decay,C.castShadow){const k=C.shadow,D=i.get(C);D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,D.shadowCameraNear=k.camera.near,D.shadowCameraFar=k.camera.far,r.pointShadow[m]=D,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=C.shadow.matrix,E++}r.point[m]=X,m++}else if(C.isHemisphereLight){const X=n.get(C);X.skyColor.copy(C.color).multiplyScalar(B*S),X.groundColor.copy(C.groundColor).multiplyScalar(B*S),r.hemi[g]=X,g++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=p,r.ambient[2]=x;const I=r.hash;(I.directionalLength!==_||I.pointLength!==m||I.spotLength!==h||I.rectAreaLength!==v||I.hemiLength!==g||I.numDirectionalShadows!==w||I.numPointShadows!==E||I.numSpotShadows!==T||I.numSpotMaps!==A||I.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=T+A-R,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=M,I.directionalLength=_,I.pointLength=m,I.spotLength=h,I.rectAreaLength=v,I.hemiLength=g,I.numDirectionalShadows=w,I.numPointShadows=E,I.numSpotShadows=T,I.numSpotMaps=A,I.numLightProbes=M,r.version=FT++)}function c(f,d){let u=0,p=0,x=0,_=0,m=0;const h=d.matrixWorldInverse;for(let v=0,g=f.length;v<g;v++){const w=f[v];if(w.isDirectionalLight){const E=r.directional[u];E.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(h),u++}else if(w.isSpotLight){const E=r.spot[x];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(h),x++}else if(w.isRectAreaLight){const E=r.rectArea[_];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(h),a.identity(),s.copy(w.matrixWorld),s.premultiply(h),a.extractRotation(s),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(h),p++}else if(w.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function Xg(t,e){const n=new kT(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function BT(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new Xg(t,e),n.set(o,[l])):s>=a.length?(l=new Xg(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class VT extends ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HT extends ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WT=`uniform sampler2D shadow_pass;
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
}`;function XT(t,e,n){let i=new Qh;const r=new qe,o=new qe,s=new Nt,a=new VT({depthPacking:VM}),l=new HT,c={},f=n.maxTextureSize,d={[fr]:hn,[hn]:fr,[Mi]:Mi},u=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:GT,fragmentShader:WT}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const x=new An;x.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Sn(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yv;let h=this.type;this.render=function(E,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const R=t.getRenderTarget(),M=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Ai),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=h!==vi&&this.type===vi,P=h===vi&&this.type!==vi;for(let C=0,O=E.length;C<O;C++){const B=E[C],G=B.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const U=G.getFrameExtents();if(r.multiply(U),o.copy(G.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/U.x),r.x=o.x*U.x,G.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/U.y),r.y=o.y*U.y,G.mapSize.y=o.y)),G.map===null||N===!0||P===!0){const k=this.type!==vi?{minFilter:Ft,magFilter:Ft}:{};G.map!==null&&G.map.dispose(),G.map=new ci(r.x,r.y,k),G.map.texture.name=B.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const X=G.getViewportCount();for(let k=0;k<X;k++){const D=G.getViewport(k);s.set(o.x*D.x,o.y*D.y,o.x*D.z,o.y*D.w),I.viewport(s),G.updateMatrices(B,k),i=G.getFrustum(),w(T,A,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===vi&&v(G,A),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(R,M,S)};function v(E,T){const A=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ci(r.x,r.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(T,null,A,u,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(T,null,A,p,_,null)}function g(E,T,A,R){let M=null;const S=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)M=S;else if(M=A.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=M.uuid,N=T.uuid;let P=c[I];P===void 0&&(P={},c[I]=P);let C=P[N];C===void 0&&(C=M.clone(),P[N]=C),M=C}if(M.visible=T.visible,M.wireframe=T.wireframe,R===vi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:d[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=t.properties.get(M);I.light=A}return M}function w(E,T,A,R,M){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===vi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const N=e.update(E),P=E.material;if(Array.isArray(P)){const C=N.groups;for(let O=0,B=C.length;O<B;O++){const G=C[O],U=P[G.materialIndex];if(U&&U.visible){const X=g(E,U,R,M);t.renderBufferDirect(A,null,N,X,E,G)}}}else if(P.visible){const C=g(E,P,R,M);t.renderBufferDirect(A,null,N,C,E,null)}}const I=E.children;for(let N=0,P=I.length;N<P;N++)w(I[N],T,A,R,M)}}function jT(t,e,n){const i=n.isWebGL2;function r(){let V=!1;const ye=new Nt;let me=null;const oe=new Nt(0,0,0,0);return{setMask:function(he){me!==he&&!V&&(t.colorMask(he,he,he,he),me=he)},setLocked:function(he){V=he},setClear:function(he,ke,Me,Ae,tt){tt===!0&&(he*=Ae,ke*=Ae,Me*=Ae),ye.set(he,ke,Me,Ae),oe.equals(ye)===!1&&(t.clearColor(he,ke,Me,Ae),oe.copy(ye))},reset:function(){V=!1,me=null,oe.set(-1,0,0,0)}}}function o(){let V=!1,ye=null,me=null,oe=null;return{setTest:function(he){he?Se(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(he){ye!==he&&!V&&(t.depthMask(he),ye=he)},setFunc:function(he){if(me!==he){switch(he){case gM:t.depthFunc(t.NEVER);break;case xM:t.depthFunc(t.ALWAYS);break;case vM:t.depthFunc(t.LESS);break;case _c:t.depthFunc(t.LEQUAL);break;case _M:t.depthFunc(t.EQUAL);break;case yM:t.depthFunc(t.GEQUAL);break;case SM:t.depthFunc(t.GREATER);break;case MM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=he}},setLocked:function(he){V=he},setClear:function(he){oe!==he&&(t.clearDepth(he),oe=he)},reset:function(){V=!1,ye=null,me=null,oe=null}}}function s(){let V=!1,ye=null,me=null,oe=null,he=null,ke=null,Me=null,Ae=null,tt=null;return{setTest:function(We){V||(We?Se(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(We){ye!==We&&!V&&(t.stencilMask(We),ye=We)},setFunc:function(We,it,Ht){(me!==We||oe!==it||he!==Ht)&&(t.stencilFunc(We,it,Ht),me=We,oe=it,he=Ht)},setOp:function(We,it,Ht){(ke!==We||Me!==it||Ae!==Ht)&&(t.stencilOp(We,it,Ht),ke=We,Me=it,Ae=Ht)},setLocked:function(We){V=We},setClear:function(We){tt!==We&&(t.clearStencil(We),tt=We)},reset:function(){V=!1,ye=null,me=null,oe=null,he=null,ke=null,Me=null,Ae=null,tt=null}}}const a=new r,l=new o,c=new s,f=new WeakMap,d=new WeakMap;let u={},p={},x=new WeakMap,_=[],m=null,h=!1,v=null,g=null,w=null,E=null,T=null,A=null,R=null,M=new $e(0,0,0),S=0,I=!1,N=null,P=null,C=null,O=null,B=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,X=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=X>=2);let D=null,H={};const ee=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),fe=new Nt().fromArray(ee),ce=new Nt().fromArray(se);function xe(V,ye,me,oe){const he=new Uint8Array(4),ke=t.createTexture();t.bindTexture(V,ke),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Me=0;Me<me;Me++)i&&(V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY)?t.texImage3D(ye,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ye+Me,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return ke}const ue={};ue[t.TEXTURE_2D]=xe(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ue[t.TEXTURE_2D_ARRAY]=xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(t.DEPTH_TEST),l.setFunc(_c),ze(!1),ve(Am),Se(t.CULL_FACE),Ne(Ai);function Se(V){u[V]!==!0&&(t.enable(V),u[V]=!0)}function Re(V){u[V]!==!1&&(t.disable(V),u[V]=!1)}function Ee(V,ye){return p[V]!==ye?(t.bindFramebuffer(V,ye),p[V]=ye,i&&(V===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ye),V===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ye)),!0):!1}function W(V,ye){let me=_,oe=!1;if(V)if(me=x.get(ye),me===void 0&&(me=[],x.set(ye,me)),V.isWebGLMultipleRenderTargets){const he=V.texture;if(me.length!==he.length||me[0]!==t.COLOR_ATTACHMENT0){for(let ke=0,Me=he.length;ke<Me;ke++)me[ke]=t.COLOR_ATTACHMENT0+ke;me.length=he.length,oe=!0}}else me[0]!==t.COLOR_ATTACHMENT0&&(me[0]=t.COLOR_ATTACHMENT0,oe=!0);else me[0]!==t.BACK&&(me[0]=t.BACK,oe=!0);oe&&(n.isWebGL2?t.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Oe(V){return m!==V?(t.useProgram(V),m=V,!0):!1}const Le={[Cr]:t.FUNC_ADD,[tM]:t.FUNC_SUBTRACT,[nM]:t.FUNC_REVERSE_SUBTRACT};if(i)Le[Lm]=t.MIN,Le[Pm]=t.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(Le[Lm]=V.MIN_EXT,Le[Pm]=V.MAX_EXT)}const Fe={[iM]:t.ZERO,[rM]:t.ONE,[oM]:t.SRC_COLOR,[Ad]:t.SRC_ALPHA,[fM]:t.SRC_ALPHA_SATURATE,[cM]:t.DST_COLOR,[aM]:t.DST_ALPHA,[sM]:t.ONE_MINUS_SRC_COLOR,[Cd]:t.ONE_MINUS_SRC_ALPHA,[uM]:t.ONE_MINUS_DST_COLOR,[lM]:t.ONE_MINUS_DST_ALPHA,[dM]:t.CONSTANT_COLOR,[hM]:t.ONE_MINUS_CONSTANT_COLOR,[pM]:t.CONSTANT_ALPHA,[mM]:t.ONE_MINUS_CONSTANT_ALPHA};function Ne(V,ye,me,oe,he,ke,Me,Ae,tt,We){if(V===Ai){h===!0&&(Re(t.BLEND),h=!1);return}if(h===!1&&(Se(t.BLEND),h=!0),V!==eM){if(V!==v||We!==I){if((g!==Cr||T!==Cr)&&(t.blendEquation(t.FUNC_ADD),g=Cr,T=Cr),We)switch(V){case Bo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vc:t.blendFunc(t.ONE,t.ONE);break;case Cm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Bo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vc:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Cm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}w=null,E=null,A=null,R=null,M.set(0,0,0),S=0,v=V,I=We}return}he=he||ye,ke=ke||me,Me=Me||oe,(ye!==g||he!==T)&&(t.blendEquationSeparate(Le[ye],Le[he]),g=ye,T=he),(me!==w||oe!==E||ke!==A||Me!==R)&&(t.blendFuncSeparate(Fe[me],Fe[oe],Fe[ke],Fe[Me]),w=me,E=oe,A=ke,R=Me),(Ae.equals(M)===!1||tt!==S)&&(t.blendColor(Ae.r,Ae.g,Ae.b,tt),M.copy(Ae),S=tt),v=V,I=!1}function He(V,ye){V.side===Mi?Re(t.CULL_FACE):Se(t.CULL_FACE);let me=V.side===hn;ye&&(me=!me),ze(me),V.blending===Bo&&V.transparent===!1?Ne(Ai):Ne(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),a.setMask(V.colorWrite);const oe=V.stencilWrite;c.setTest(oe),oe&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Qe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Se(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(V){N!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),N=V)}function ve(V){V!==QS?(Se(t.CULL_FACE),V!==P&&(V===Am?t.cullFace(t.BACK):V===JS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),P=V}function be(V){V!==C&&(U&&t.lineWidth(V),C=V)}function Qe(V,ye,me){V?(Se(t.POLYGON_OFFSET_FILL),(O!==ye||B!==me)&&(t.polygonOffset(ye,me),O=ye,B=me)):Re(t.POLYGON_OFFSET_FILL)}function Ye(V){V?Se(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function b(V){V===void 0&&(V=t.TEXTURE0+G-1),D!==V&&(t.activeTexture(V),D=V)}function y(V,ye,me){me===void 0&&(D===null?me=t.TEXTURE0+G-1:me=D);let oe=H[me];oe===void 0&&(oe={type:void 0,texture:void 0},H[me]=oe),(oe.type!==V||oe.texture!==ye)&&(D!==me&&(t.activeTexture(me),D=me),t.bindTexture(V,ye||ue[V]),oe.type=V,oe.texture=ye)}function F(){const V=H[D];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{t.texSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function J(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{t.texStorage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{t.texImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{t.texImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(V){fe.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),fe.copy(V))}function _e(V){ce.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),ce.copy(V))}function Te(V,ye){let me=d.get(ye);me===void 0&&(me=new WeakMap,d.set(ye,me));let oe=me.get(V);oe===void 0&&(oe=t.getUniformBlockIndex(ye,V.name),me.set(V,oe))}function pe(V,ye){const oe=d.get(ye).get(V);f.get(ye)!==oe&&(t.uniformBlockBinding(ye,oe,V.__bindingPointIndex),f.set(ye,oe))}function De(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},D=null,H={},p={},x=new WeakMap,_=[],m=null,h=!1,v=null,g=null,w=null,E=null,T=null,A=null,R=null,M=new $e(0,0,0),S=0,I=!1,N=null,P=null,C=null,O=null,B=null,fe.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Se,disable:Re,bindFramebuffer:Ee,drawBuffers:W,useProgram:Oe,setBlending:Ne,setMaterial:He,setFlipSided:ze,setCullFace:ve,setLineWidth:be,setPolygonOffset:Qe,setScissorTest:Ye,activeTexture:b,bindTexture:y,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:te,texImage2D:ae,texImage3D:Pe,updateUBOMapping:Te,uniformBlockBinding:pe,texStorage2D:de,texStorage3D:le,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:Z,compressedTexSubImage3D:J,scissor:ge,viewport:_e,reset:De}}function YT(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,f=r.maxTextureSize,d=r.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let _;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,y){return h?new OffscreenCanvas(b,y):Ec("canvas")}function g(b,y,F,Y){let te=1;if((b.width>Y||b.height>Y)&&(te=Y/Math.max(b.width,b.height)),te<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const q=y?Ud:Math.floor,Q=q(te*b.width),Z=q(te*b.height);_===void 0&&(_=v(Q,Z));const J=F?v(Q,Z):_;return J.width=Q,J.height=Z,J.getContext("2d").drawImage(b,0,0,Q,Z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Q+"x"+Z+")."),J}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function w(b){return ag(b.width)&&ag(b.height)}function E(b){return a?!1:b.wrapS!==qn||b.wrapT!==qn||b.minFilter!==Ft&&b.minFilter!==_n}function T(b,y){return b.generateMipmaps&&y&&b.minFilter!==Ft&&b.minFilter!==_n}function A(b){t.generateMipmap(b)}function R(b,y,F,Y,te=!1){if(a===!1)return y;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=y;if(y===t.RED&&(F===t.FLOAT&&(q=t.R32F),F===t.HALF_FLOAT&&(q=t.R16F),F===t.UNSIGNED_BYTE&&(q=t.R8)),y===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(q=t.R8UI),F===t.UNSIGNED_SHORT&&(q=t.R16UI),F===t.UNSIGNED_INT&&(q=t.R32UI),F===t.BYTE&&(q=t.R8I),F===t.SHORT&&(q=t.R16I),F===t.INT&&(q=t.R32I)),y===t.RG&&(F===t.FLOAT&&(q=t.RG32F),F===t.HALF_FLOAT&&(q=t.RG16F),F===t.UNSIGNED_BYTE&&(q=t.RG8)),y===t.RGBA){const Q=te?yc:st.getTransfer(Y);F===t.FLOAT&&(q=t.RGBA32F),F===t.HALF_FLOAT&&(q=t.RGBA16F),F===t.UNSIGNED_BYTE&&(q=Q===ct?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(b,y,F){return T(b,F)===!0||b.isFramebufferTexture&&b.minFilter!==Ft&&b.minFilter!==_n?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function S(b){return b===Ft||b===Dm||b===Wu?t.NEAREST:t.LINEAR}function I(b){const y=b.target;y.removeEventListener("dispose",I),P(y),y.isVideoTexture&&x.delete(y)}function N(b){const y=b.target;y.removeEventListener("dispose",N),O(y)}function P(b){const y=i.get(b);if(y.__webglInit===void 0)return;const F=b.source,Y=m.get(F);if(Y){const te=Y[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(b),Object.keys(Y).length===0&&m.delete(F)}i.remove(b)}function C(b){const y=i.get(b);t.deleteTexture(y.__webglTexture);const F=b.source,Y=m.get(F);delete Y[y.__cacheKey],s.memory.textures--}function O(b){const y=b.texture,F=i.get(b),Y=i.get(y);if(Y.__webglTexture!==void 0&&(t.deleteTexture(Y.__webglTexture),s.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(F.__webglFramebuffer[te]))for(let q=0;q<F.__webglFramebuffer[te].length;q++)t.deleteFramebuffer(F.__webglFramebuffer[te][q]);else t.deleteFramebuffer(F.__webglFramebuffer[te]);F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer[te])}else{if(Array.isArray(F.__webglFramebuffer))for(let te=0;te<F.__webglFramebuffer.length;te++)t.deleteFramebuffer(F.__webglFramebuffer[te]);else t.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&t.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let te=0;te<F.__webglColorRenderbuffer.length;te++)F.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(F.__webglColorRenderbuffer[te]);F.__webglDepthRenderbuffer&&t.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let te=0,q=y.length;te<q;te++){const Q=i.get(y[te]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),s.memory.textures--),i.remove(y[te])}i.remove(y),i.remove(b)}let B=0;function G(){B=0}function U(){const b=B;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),B+=1,b}function X(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function k(b,y){const F=i.get(b);if(b.isVideoTexture&&Qe(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(F,b,y);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+y)}function D(b,y){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Se(F,b,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+y)}function H(b,y){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Se(F,b,y);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+y)}function ee(b,y){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Re(F,b,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+y)}const se={[Pd]:t.REPEAT,[qn]:t.CLAMP_TO_EDGE,[Dd]:t.MIRRORED_REPEAT},fe={[Ft]:t.NEAREST,[Dm]:t.NEAREST_MIPMAP_NEAREST,[Wu]:t.NEAREST_MIPMAP_LINEAR,[_n]:t.LINEAR,[LM]:t.LINEAR_MIPMAP_NEAREST,[ca]:t.LINEAR_MIPMAP_LINEAR},ce={[WM]:t.NEVER,[QM]:t.ALWAYS,[XM]:t.LESS,[YM]:t.LEQUAL,[jM]:t.EQUAL,[ZM]:t.GEQUAL,[qM]:t.GREATER,[KM]:t.NOTEQUAL};function xe(b,y,F){if(F?(t.texParameteri(b,t.TEXTURE_WRAP_S,se[y.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,se[y.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,se[y.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,fe[y.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,fe[y.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(y.wrapS!==qn||y.wrapT!==qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,S(y.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,S(y.minFilter)),y.minFilter!==Ft&&y.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Ft||y.minFilter!==Wu&&y.minFilter!==ca||y.type===Zi&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===dr&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(t.texParameterf(b,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function ue(b,y){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",I));const Y=y.source;let te=m.get(Y);te===void 0&&(te={},m.set(Y,te));const q=X(y);if(q!==b.__cacheKey){te[q]===void 0&&(te[q]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,F=!0),te[q].usedTimes++;const Q=te[b.__cacheKey];Q!==void 0&&(te[b.__cacheKey].usedTimes--,Q.usedTimes===0&&C(y)),b.__cacheKey=q,b.__webglTexture=te[q].texture}return F}function Se(b,y,F){let Y=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=t.TEXTURE_3D);const te=ue(b,y),q=y.source;n.bindTexture(Y,b.__webglTexture,t.TEXTURE0+F);const Q=i.get(q);if(q.version!==Q.__version||te===!0){n.activeTexture(t.TEXTURE0+F);const Z=st.getPrimaries(st.workingColorSpace),J=y.colorSpace===In?null:st.getPrimaries(y.colorSpace),de=y.colorSpace===In||Z===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const le=E(y)&&w(y.image)===!1;let ae=g(y.image,le,!1,f);ae=Ye(y,ae);const Pe=w(ae)||a,ge=o.convert(y.format,y.colorSpace);let _e=o.convert(y.type),Te=R(y.internalFormat,ge,_e,y.colorSpace,y.isVideoTexture);xe(Y,y,Pe);let pe;const De=y.mipmaps,V=a&&y.isVideoTexture!==!0,ye=Q.__version===void 0||te===!0,me=M(y,ae,Pe);if(y.isDepthTexture)Te=t.DEPTH_COMPONENT,a?y.type===Zi?Te=t.DEPTH_COMPONENT32F:y.type===Ki?Te=t.DEPTH_COMPONENT24:y.type===Or?Te=t.DEPTH24_STENCIL8:Te=t.DEPTH_COMPONENT16:y.type===Zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Fr&&Te===t.DEPTH_COMPONENT&&y.type!==Yh&&y.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ki,_e=o.convert(y.type)),y.format===$o&&Te===t.DEPTH_COMPONENT&&(Te=t.DEPTH_STENCIL,y.type!==Or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Or,_e=o.convert(y.type))),ye&&(V?n.texStorage2D(t.TEXTURE_2D,1,Te,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Te,ae.width,ae.height,0,ge,_e,null));else if(y.isDataTexture)if(De.length>0&&Pe){V&&ye&&n.texStorage2D(t.TEXTURE_2D,me,Te,De[0].width,De[0].height);for(let oe=0,he=De.length;oe<he;oe++)pe=De[oe],V?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,pe.width,pe.height,ge,_e,pe.data):n.texImage2D(t.TEXTURE_2D,oe,Te,pe.width,pe.height,0,ge,_e,pe.data);y.generateMipmaps=!1}else V?(ye&&n.texStorage2D(t.TEXTURE_2D,me,Te,ae.width,ae.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,ge,_e,ae.data)):n.texImage2D(t.TEXTURE_2D,0,Te,ae.width,ae.height,0,ge,_e,ae.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){V&&ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Te,De[0].width,De[0].height,ae.depth);for(let oe=0,he=De.length;oe<he;oe++)pe=De[oe],y.format!==Kn?ge!==null?V?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,pe.width,pe.height,ae.depth,ge,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,Te,pe.width,pe.height,ae.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,pe.width,pe.height,ae.depth,ge,_e,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,Te,pe.width,pe.height,ae.depth,0,ge,_e,pe.data)}else{V&&ye&&n.texStorage2D(t.TEXTURE_2D,me,Te,De[0].width,De[0].height);for(let oe=0,he=De.length;oe<he;oe++)pe=De[oe],y.format!==Kn?ge!==null?V?n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,pe.width,pe.height,ge,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,Te,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,pe.width,pe.height,ge,_e,pe.data):n.texImage2D(t.TEXTURE_2D,oe,Te,pe.width,pe.height,0,ge,_e,pe.data)}else if(y.isDataArrayTexture)V?(ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Te,ae.width,ae.height,ae.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ge,_e,ae.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,ae.width,ae.height,ae.depth,0,ge,_e,ae.data);else if(y.isData3DTexture)V?(ye&&n.texStorage3D(t.TEXTURE_3D,me,Te,ae.width,ae.height,ae.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ge,_e,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Te,ae.width,ae.height,ae.depth,0,ge,_e,ae.data);else if(y.isFramebufferTexture){if(ye)if(V)n.texStorage2D(t.TEXTURE_2D,me,Te,ae.width,ae.height);else{let oe=ae.width,he=ae.height;for(let ke=0;ke<me;ke++)n.texImage2D(t.TEXTURE_2D,ke,Te,oe,he,0,ge,_e,null),oe>>=1,he>>=1}}else if(De.length>0&&Pe){V&&ye&&n.texStorage2D(t.TEXTURE_2D,me,Te,De[0].width,De[0].height);for(let oe=0,he=De.length;oe<he;oe++)pe=De[oe],V?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ge,_e,pe):n.texImage2D(t.TEXTURE_2D,oe,Te,ge,_e,pe);y.generateMipmaps=!1}else V?(ye&&n.texStorage2D(t.TEXTURE_2D,me,Te,ae.width,ae.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,_e,ae)):n.texImage2D(t.TEXTURE_2D,0,Te,ge,_e,ae);T(y,Pe)&&A(Y),Q.__version=q.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Re(b,y,F){if(y.image.length!==6)return;const Y=ue(b,y),te=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+F);const q=i.get(te);if(te.version!==q.__version||Y===!0){n.activeTexture(t.TEXTURE0+F);const Q=st.getPrimaries(st.workingColorSpace),Z=y.colorSpace===In?null:st.getPrimaries(y.colorSpace),J=y.colorSpace===In||Q===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const de=y.isCompressedTexture||y.image[0].isCompressedTexture,le=y.image[0]&&y.image[0].isDataTexture,ae=[];for(let oe=0;oe<6;oe++)!de&&!le?ae[oe]=g(y.image[oe],!1,!0,c):ae[oe]=le?y.image[oe].image:y.image[oe],ae[oe]=Ye(y,ae[oe]);const Pe=ae[0],ge=w(Pe)||a,_e=o.convert(y.format,y.colorSpace),Te=o.convert(y.type),pe=R(y.internalFormat,_e,Te,y.colorSpace),De=a&&y.isVideoTexture!==!0,V=q.__version===void 0||Y===!0;let ye=M(y,Pe,ge);xe(t.TEXTURE_CUBE_MAP,y,ge);let me;if(de){De&&V&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,pe,Pe.width,Pe.height);for(let oe=0;oe<6;oe++){me=ae[oe].mipmaps;for(let he=0;he<me.length;he++){const ke=me[he];y.format!==Kn?_e!==null?De?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he,0,0,ke.width,ke.height,_e,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he,pe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he,0,0,ke.width,ke.height,_e,Te,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he,pe,ke.width,ke.height,0,_e,Te,ke.data)}}}else{me=y.mipmaps,De&&V&&(me.length>0&&ye++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,pe,ae[0].width,ae[0].height));for(let oe=0;oe<6;oe++)if(le){De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ae[oe].width,ae[oe].height,_e,Te,ae[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,pe,ae[oe].width,ae[oe].height,0,_e,Te,ae[oe].data);for(let he=0;he<me.length;he++){const Me=me[he].image[oe].image;De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he+1,0,0,Me.width,Me.height,_e,Te,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he+1,pe,Me.width,Me.height,0,_e,Te,Me.data)}}else{De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,_e,Te,ae[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,pe,_e,Te,ae[oe]);for(let he=0;he<me.length;he++){const ke=me[he];De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he+1,0,0,_e,Te,ke.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he+1,pe,_e,Te,ke.image[oe])}}}T(y,ge)&&A(t.TEXTURE_CUBE_MAP),q.__version=te.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Ee(b,y,F,Y,te,q){const Q=o.convert(F.format,F.colorSpace),Z=o.convert(F.type),J=R(F.internalFormat,Q,Z,F.colorSpace);if(!i.get(y).__hasExternalTextures){const le=Math.max(1,y.width>>q),ae=Math.max(1,y.height>>q);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,q,J,le,ae,y.depth,0,Q,Z,null):n.texImage2D(te,q,J,le,ae,0,Q,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),be(y)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,te,i.get(F).__webglTexture,0,ve(y)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,te,i.get(F).__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function W(b,y,F){if(t.bindRenderbuffer(t.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let Y=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(F||be(y)){const te=y.depthTexture;te&&te.isDepthTexture&&(te.type===Zi?Y=t.DEPTH_COMPONENT32F:te.type===Ki&&(Y=t.DEPTH_COMPONENT24));const q=ve(y);be(y)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,Y,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,q,Y,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,Y,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){const Y=ve(y);F&&be(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,y.width,y.height):be(y)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const Y=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let te=0;te<Y.length;te++){const q=Y[te],Q=o.convert(q.format,q.colorSpace),Z=o.convert(q.type),J=R(q.internalFormat,Q,Z,q.colorSpace),de=ve(y);F&&be(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,J,y.width,y.height):be(y)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,J,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,J,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),k(y.depthTexture,0);const Y=i.get(y.depthTexture).__webglTexture,te=ve(y);if(y.depthTexture.format===Fr)be(y)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(y.depthTexture.format===$o)be(y)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Le(b){const y=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Oe(y.__webglFramebuffer,b)}else if(F){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]=t.createRenderbuffer(),W(y.__webglDepthbuffer[Y],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),W(y.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(b,y,F){const Y=i.get(b);y!==void 0&&Ee(Y.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Le(b)}function Ne(b){const y=b.texture,F=i.get(b),Y=i.get(y);b.addEventListener("dispose",N),b.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=y.version,s.memory.textures++);const te=b.isWebGLCubeRenderTarget===!0,q=b.isWebGLMultipleRenderTargets===!0,Q=w(b)||a;if(te){F.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(a&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[Z]=[];for(let J=0;J<y.mipmaps.length;J++)F.__webglFramebuffer[Z][J]=t.createFramebuffer()}else F.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)F.__webglFramebuffer[Z]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(q)if(r.drawBuffers){const Z=b.texture;for(let J=0,de=Z.length;J<de;J++){const le=i.get(Z[J]);le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&be(b)===!1){const Z=q?y:[y];F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const de=Z[J];F.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[J]);const le=o.convert(de.format,de.colorSpace),ae=o.convert(de.type),Pe=R(de.internalFormat,le,ae,de.colorSpace,b.isXRRenderTarget===!0),ge=ve(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,Pe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,F.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),W(F.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),xe(t.TEXTURE_CUBE_MAP,y,Q);for(let Z=0;Z<6;Z++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)Ee(F.__webglFramebuffer[Z][J],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else Ee(F.__webglFramebuffer[Z],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);T(y,Q)&&A(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(q){const Z=b.texture;for(let J=0,de=Z.length;J<de;J++){const le=Z[J],ae=i.get(le);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),xe(t.TEXTURE_2D,le,Q),Ee(F.__webglFramebuffer,b,le,t.COLOR_ATTACHMENT0+J,t.TEXTURE_2D,0),T(le,Q)&&A(t.TEXTURE_2D)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?Z=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Z,Y.__webglTexture),xe(Z,y,Q),a&&y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)Ee(F.__webglFramebuffer[J],b,y,t.COLOR_ATTACHMENT0,Z,J);else Ee(F.__webglFramebuffer,b,y,t.COLOR_ATTACHMENT0,Z,0);T(y,Q)&&A(Z),n.unbindTexture()}b.depthBuffer&&Le(b)}function He(b){const y=w(b)||a,F=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Y=0,te=F.length;Y<te;Y++){const q=F[Y];if(T(q,y)){const Q=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Z=i.get(q).__webglTexture;n.bindTexture(Q,Z),A(Q),n.unbindTexture()}}}function ze(b){if(a&&b.samples>0&&be(b)===!1){const y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],F=b.width,Y=b.height;let te=t.COLOR_BUFFER_BIT;const q=[],Q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=i.get(b),J=b.isWebGLMultipleRenderTargets===!0;if(J)for(let de=0;de<y.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let de=0;de<y.length;de++){q.push(t.COLOR_ATTACHMENT0+de),b.depthBuffer&&q.push(Q);const le=Z.__ignoreDepthValues!==void 0?Z.__ignoreDepthValues:!1;if(le===!1&&(b.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),J&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Z.__webglColorRenderbuffer[de]),le===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Q]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Q])),J){const ae=i.get(y[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ae,0)}t.blitFramebuffer(0,0,F,Y,0,0,F,Y,te,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,q)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let de=0;de<y.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,Z.__webglColorRenderbuffer[de]);const le=i.get(y[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}}function ve(b){return Math.min(d,b.samples)}function be(b){const y=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Qe(b){const y=s.render.frame;x.get(b)!==y&&(x.set(b,y),b.update())}function Ye(b,y){const F=b.colorSpace,Y=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Id||F!==Di&&F!==In&&(st.getTransfer(F)===ct?a===!1?e.has("EXT_sRGB")===!0&&Y===Kn?(b.format=Id,b.minFilter=_n,b.generateMipmaps=!1):y=r_.sRGBToLinear(y):(Y!==Kn||te!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}this.allocateTextureUnit=U,this.resetTextureUnits=G,this.setTexture2D=k,this.setTexture2DArray=D,this.setTexture3D=H,this.setTextureCube=ee,this.rebindTextures=Fe,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=be}function qT(t,e,n){const i=n.isWebGL2;function r(o,s=In){let a;const l=st.getTransfer(s);if(o===ar)return t.UNSIGNED_BYTE;if(o===Qv)return t.UNSIGNED_SHORT_4_4_4_4;if(o===Jv)return t.UNSIGNED_SHORT_5_5_5_1;if(o===PM)return t.BYTE;if(o===DM)return t.SHORT;if(o===Yh)return t.UNSIGNED_SHORT;if(o===Zv)return t.INT;if(o===Ki)return t.UNSIGNED_INT;if(o===Zi)return t.FLOAT;if(o===dr)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===IM)return t.ALPHA;if(o===Kn)return t.RGBA;if(o===NM)return t.LUMINANCE;if(o===UM)return t.LUMINANCE_ALPHA;if(o===Fr)return t.DEPTH_COMPONENT;if(o===$o)return t.DEPTH_STENCIL;if(o===Id)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===OM)return t.RED;if(o===$v)return t.RED_INTEGER;if(o===FM)return t.RG;if(o===e_)return t.RG_INTEGER;if(o===t_)return t.RGBA_INTEGER;if(o===Xu||o===ju||o===Yu||o===qu)if(l===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Xu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ju)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Yu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Xu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ju)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Yu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===qu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Im||o===Nm||o===Um||o===Om)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Im)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Nm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Um)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Om)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===zM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Fm||o===zm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Fm)return l===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===zm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===km||o===Bm||o===Vm||o===Hm||o===Gm||o===Wm||o===Xm||o===jm||o===Ym||o===qm||o===Km||o===Zm||o===Qm||o===Jm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===km)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Bm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Vm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Hm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Gm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Wm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Xm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===jm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Ym)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===qm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Km)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Zm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Qm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Jm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Ku||o===$m||o===eg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Ku)return l===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===$m)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===eg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===kM||o===tg||o===ng||o===ig)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Ku)return a.COMPRESSED_RED_RGTC1_EXT;if(o===tg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===ng)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===ig)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Or?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class KT extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dl extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZT={type:"move"};class yf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=f.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&u>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new dl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class QT extends en{constructor(e,n,i,r,o,s,a,l,c,f){if(f=f!==void 0?f:Fr,f!==Fr&&f!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Fr&&(i=Ki),i===void 0&&f===$o&&(i=Or),super(null,r,o,s,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class JT extends as{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,f=null,d=null,u=null,p=null,x=null;const _=n.getContextAttributes();let m=null,h=null;const v=[],g=[],w=new an;w.layers.enable(1),w.viewport=new Nt;const E=new an;E.layers.enable(2),E.viewport=new Nt;const T=[w,E],A=new KT;A.layers.enable(1),A.layers.enable(2);let R=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let H=v[D];return H===void 0&&(H=new yf,v[D]=H),H.getTargetRaySpace()},this.getControllerGrip=function(D){let H=v[D];return H===void 0&&(H=new yf,v[D]=H),H.getGripSpace()},this.getHand=function(D){let H=v[D];return H===void 0&&(H=new yf,v[D]=H),H.getHandSpace()};function S(D){const H=g.indexOf(D.inputSource);if(H===-1)return;const ee=v[H];ee!==void 0&&(ee.update(D.inputSource,D.frame,c||s),ee.dispatchEvent({type:D.type,data:D.inputSource}))}function I(){r.removeEventListener("select",S),r.removeEventListener("selectstart",S),r.removeEventListener("selectend",S),r.removeEventListener("squeeze",S),r.removeEventListener("squeezestart",S),r.removeEventListener("squeezeend",S),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",N);for(let D=0;D<v.length;D++){const H=g[D];H!==null&&(g[D]=null,v[D].disconnect(H))}R=null,M=null,e.setRenderTarget(m),p=null,u=null,d=null,r=null,h=null,k.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){o=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",S),r.addEventListener("selectstart",S),r.addEventListener("selectend",S),r.addEventListener("squeeze",S),r.addEventListener("squeezestart",S),r.addEventListener("squeezeend",S),r.addEventListener("end",I),r.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,H),r.updateRenderState({baseLayer:p}),h=new ci(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:ar,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let H=null,ee=null,se=null;_.depth&&(se=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,H=_.stencil?$o:Fr,ee=_.stencil?Or:Ki);const fe={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:o};d=new XRWebGLBinding(r,n),u=d.createProjectionLayer(fe),r.updateRenderState({layers:[u]}),h=new ci(u.textureWidth,u.textureHeight,{format:Kn,type:ar,depthTexture:new QT(u.textureWidth,u.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ce=e.properties.get(h);ce.__ignoreDepthValues=u.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),k.setContext(r),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(D){for(let H=0;H<D.removed.length;H++){const ee=D.removed[H],se=g.indexOf(ee);se>=0&&(g[se]=null,v[se].disconnect(ee))}for(let H=0;H<D.added.length;H++){const ee=D.added[H];let se=g.indexOf(ee);if(se===-1){for(let ce=0;ce<v.length;ce++)if(ce>=g.length){g.push(ee),se=ce;break}else if(g[ce]===null){g[ce]=ee,se=ce;break}if(se===-1)break}const fe=v[se];fe&&fe.connect(ee)}}const P=new j,C=new j;function O(D,H,ee){P.setFromMatrixPosition(H.matrixWorld),C.setFromMatrixPosition(ee.matrixWorld);const se=P.distanceTo(C),fe=H.projectionMatrix.elements,ce=ee.projectionMatrix.elements,xe=fe[14]/(fe[10]-1),ue=fe[14]/(fe[10]+1),Se=(fe[9]+1)/fe[5],Re=(fe[9]-1)/fe[5],Ee=(fe[8]-1)/fe[0],W=(ce[8]+1)/ce[0],Oe=xe*Ee,Le=xe*W,Fe=se/(-Ee+W),Ne=Fe*-Ee;H.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Ne),D.translateZ(Fe),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const He=xe+Fe,ze=ue+Fe,ve=Oe-Ne,be=Le+(se-Ne),Qe=Se*ue/ze*He,Ye=Re*ue/ze*He;D.projectionMatrix.makePerspective(ve,be,Qe,Ye,He,ze),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function B(D,H){H===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(H.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;A.near=E.near=w.near=D.near,A.far=E.far=w.far=D.far,(R!==A.near||M!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,M=A.far);const H=D.parent,ee=A.cameras;B(A,H);for(let se=0;se<ee.length;se++)B(ee[se],H);ee.length===2?O(A,w,E):A.projectionMatrix.copy(w.projectionMatrix),G(D,A,H)};function G(D,H,ee){ee===null?D.matrix.copy(H.matrixWorld):(D.matrix.copy(ee.matrixWorld),D.matrix.invert(),D.matrix.multiply(H.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(H.projectionMatrix),D.projectionMatrixInverse.copy(H.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Nd*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(D){l=D,u!==null&&(u.fixedFoveation=D),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=D)};let U=null;function X(D,H){if(f=H.getViewerPose(c||s),x=H,f!==null){const ee=f.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let se=!1;ee.length!==A.cameras.length&&(A.cameras.length=0,se=!0);for(let fe=0;fe<ee.length;fe++){const ce=ee[fe];let xe=null;if(p!==null)xe=p.getViewport(ce);else{const Se=d.getViewSubImage(u,ce);xe=Se.viewport,fe===0&&(e.setRenderTargetTextures(h,Se.colorTexture,u.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(h))}let ue=T[fe];ue===void 0&&(ue=new an,ue.layers.enable(fe),ue.viewport=new Nt,T[fe]=ue),ue.matrix.fromArray(ce.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ce.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(xe.x,xe.y,xe.width,xe.height),fe===0&&(A.matrix.copy(ue.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),se===!0&&A.cameras.push(ue)}}for(let ee=0;ee<v.length;ee++){const se=g[ee],fe=v[ee];se!==null&&fe!==void 0&&fe.update(se,H,c||s)}U&&U(D,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),x=null}const k=new h_;k.setAnimationLoop(X),this.setAnimationLoop=function(D){U=D},this.dispose=function(){}}}function $T(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,u_(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,g,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(m,h):h.isMeshToonMaterial?(o(m,h),d(m,h)):h.isMeshPhongMaterial?(o(m,h),f(m,h)):h.isMeshStandardMaterial?(o(m,h),u(m,h),h.isMeshPhysicalMaterial&&p(m,h,w)):h.isMeshMatcapMaterial?(o(m,h),x(m,h)):h.isMeshDepthMaterial?o(m,h):h.isMeshDistanceMaterial?(o(m,h),_(m,h)):h.isMeshNormalMaterial?o(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,g):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===hn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===hn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*g,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=g*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===hn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eA(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const w=g.program;i.uniformBlockBinding(v,w)}function c(v,g){let w=r[v.id];w===void 0&&(x(v),w=f(v),r[v.id]=w,v.addEventListener("dispose",m));const E=g.program;i.updateUBOMapping(v,E);const T=e.render.frame;o[v.id]!==T&&(u(v),o[v.id]=T)}function f(v){const g=d();v.__bindingPointIndex=g;const w=t.createBuffer(),E=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,E,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,w),w}function d(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const g=r[v.id],w=v.uniforms,E=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let T=0,A=w.length;T<A;T++){const R=w[T];if(p(R,T,E)===!0){const M=R.__offset,S=Array.isArray(R.value)?R.value:[R.value];let I=0;for(let N=0;N<S.length;N++){const P=S[N],C=_(P);typeof P=="number"?(R.__data[0]=P,t.bufferSubData(t.UNIFORM_BUFFER,M+I,R.__data)):P.isMatrix3?(R.__data[0]=P.elements[0],R.__data[1]=P.elements[1],R.__data[2]=P.elements[2],R.__data[3]=P.elements[0],R.__data[4]=P.elements[3],R.__data[5]=P.elements[4],R.__data[6]=P.elements[5],R.__data[7]=P.elements[0],R.__data[8]=P.elements[6],R.__data[9]=P.elements[7],R.__data[10]=P.elements[8],R.__data[11]=P.elements[0]):(P.toArray(R.__data,I),I+=C.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,R.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,w){const E=v.value;if(w[g]===void 0){if(typeof E=="number")w[g]=E;else{const T=Array.isArray(E)?E:[E],A=[];for(let R=0;R<T.length;R++)A.push(T[R].clone());w[g]=A}return!0}else if(typeof E=="number"){if(w[g]!==E)return w[g]=E,!0}else{const T=Array.isArray(w[g])?w[g]:[w[g]],A=Array.isArray(E)?E:[E];for(let R=0;R<T.length;R++){const M=T[R];if(M.equals(A[R])===!1)return M.copy(A[R]),!0}}return!1}function x(v){const g=v.uniforms;let w=0;const E=16;let T=0;for(let A=0,R=g.length;A<R;A++){const M=g[A],S={boundary:0,storage:0},I=Array.isArray(M.value)?M.value:[M.value];for(let N=0,P=I.length;N<P;N++){const C=I[N],O=_(C);S.boundary+=O.boundary,S.storage+=O.storage}if(M.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=w,A>0){T=w%E;const N=E-T;T!==0&&N-S.boundary<0&&(w+=E-T,M.__offset=w)}w+=S.storage}return T=w%E,T>0&&(w+=E-T),v.__size=w,v.__cache={},this}function _(v){const g={boundary:0,storage:0};return typeof v=="number"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const w=s.indexOf(g.__bindingPointIndex);s.splice(w,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete o[g.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:c,dispose:h}}class ru{constructor(e={}){const{canvas:n=$M(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=s;const p=new Uint32Array(4),x=new Int32Array(4);let _=null,m=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=sr,this.toneMappingExposure=1;const g=this;let w=!1,E=0,T=0,A=null,R=-1,M=null;const S=new Nt,I=new Nt;let N=null;const P=new $e(0);let C=0,O=n.width,B=n.height,G=1,U=null,X=null;const k=new Nt(0,0,O,B),D=new Nt(0,0,O,B);let H=!1;const ee=new Qh;let se=!1,fe=!1,ce=null;const xe=new bt,ue=new qe,Se=new j,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return A===null?G:1}let W=i;function Oe(L,K){for(let $=0;$<L.length;$++){const ie=L[$],re=n.getContext(ie,K);if(re!==null)return re}return null}try{const L={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jh}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",V,!1),n.addEventListener("webglcontextcreationerror",ye,!1),W===null){const K=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&K.shift(),W=Oe(K,L),W===null)throw Oe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Le,Fe,Ne,He,ze,ve,be,Qe,Ye,b,y,F,Y,te,q,Q,Z,J,de,le,ae,Pe,ge,_e;function Te(){Le=new u2(W),Fe=new r2(W,Le,e),Le.init(Fe),Pe=new qT(W,Le,Fe),Ne=new jT(W,Le,Fe),He=new h2(W),ze=new DT,ve=new YT(W,Le,Ne,ze,Fe,Pe,He),be=new s2(g),Qe=new c2(g),Ye=new ww(W,Fe),ge=new n2(W,Le,Ye,Fe),b=new f2(W,Ye,He,ge),y=new x2(W,b,Ye,He),de=new g2(W,Fe,ve),Q=new o2(ze),F=new PT(g,be,Qe,Le,Fe,ge,Q),Y=new $T(g,ze),te=new NT,q=new BT(Le,Fe),J=new t2(g,be,Qe,Ne,y,u,l),Z=new XT(g,y,Fe),_e=new eA(W,He,Fe,Ne),le=new i2(W,Le,He,Fe),ae=new d2(W,Le,He,Fe),He.programs=F.programs,g.capabilities=Fe,g.extensions=Le,g.properties=ze,g.renderLists=te,g.shadowMap=Z,g.state=Ne,g.info=He}Te();const pe=new JT(g,W);this.xr=pe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const L=Le.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Le.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(L){L!==void 0&&(G=L,this.setSize(O,B,!1))},this.getSize=function(L){return L.set(O,B)},this.setSize=function(L,K,$=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=L,B=K,n.width=Math.floor(L*G),n.height=Math.floor(K*G),$===!0&&(n.style.width=L+"px",n.style.height=K+"px"),this.setViewport(0,0,L,K)},this.getDrawingBufferSize=function(L){return L.set(O*G,B*G).floor()},this.setDrawingBufferSize=function(L,K,$){O=L,B=K,G=$,n.width=Math.floor(L*$),n.height=Math.floor(K*$),this.setViewport(0,0,L,K)},this.getCurrentViewport=function(L){return L.copy(S)},this.getViewport=function(L){return L.copy(k)},this.setViewport=function(L,K,$,ie){L.isVector4?k.set(L.x,L.y,L.z,L.w):k.set(L,K,$,ie),Ne.viewport(S.copy(k).multiplyScalar(G).floor())},this.getScissor=function(L){return L.copy(D)},this.setScissor=function(L,K,$,ie){L.isVector4?D.set(L.x,L.y,L.z,L.w):D.set(L,K,$,ie),Ne.scissor(I.copy(D).multiplyScalar(G).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(L){Ne.setScissorTest(H=L)},this.setOpaqueSort=function(L){U=L},this.setTransparentSort=function(L){X=L},this.getClearColor=function(L){return L.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(L=!0,K=!0,$=!0){let ie=0;if(L){let re=!1;if(A!==null){const Ie=A.texture.format;re=Ie===t_||Ie===e_||Ie===$v}if(re){const Ie=A.texture.type,Be=Ie===ar||Ie===Ki||Ie===Yh||Ie===Or||Ie===Qv||Ie===Jv,Ve=J.getClearColor(),Ge=J.getClearAlpha(),Ke=Ve.r,Xe=Ve.g,je=Ve.b;Be?(p[0]=Ke,p[1]=Xe,p[2]=je,p[3]=Ge,W.clearBufferuiv(W.COLOR,0,p)):(x[0]=Ke,x[1]=Xe,x[2]=je,x[3]=Ge,W.clearBufferiv(W.COLOR,0,x))}else ie|=W.COLOR_BUFFER_BIT}K&&(ie|=W.DEPTH_BUFFER_BIT),$&&(ie|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",V,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),te.dispose(),q.dispose(),ze.dispose(),be.dispose(),Qe.dispose(),y.dispose(),ge.dispose(),_e.dispose(),F.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",tt),pe.removeEventListener("sessionend",We),ce&&(ce.dispose(),ce=null),it.stop()};function De(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const L=He.autoReset,K=Z.enabled,$=Z.autoUpdate,ie=Z.needsUpdate,re=Z.type;Te(),He.autoReset=L,Z.enabled=K,Z.autoUpdate=$,Z.needsUpdate=ie,Z.type=re}function ye(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function me(L){const K=L.target;K.removeEventListener("dispose",me),oe(K)}function oe(L){he(L),ze.remove(L)}function he(L){const K=ze.get(L).programs;K!==void 0&&(K.forEach(function($){F.releaseProgram($)}),L.isShaderMaterial&&F.releaseShaderCache(L))}this.renderBufferDirect=function(L,K,$,ie,re,Ie){K===null&&(K=Re);const Be=re.isMesh&&re.matrixWorld.determinant()<0,Ve=ba(L,K,$,ie,re);Ne.setMaterial(ie,Be);let Ge=$.index,Ke=1;if(ie.wireframe===!0){if(Ge=b.getWireframeAttribute($),Ge===void 0)return;Ke=2}const Xe=$.drawRange,je=$.attributes.position;let ht=Xe.start*Ke,Kt=(Xe.start+Xe.count)*Ke;Ie!==null&&(ht=Math.max(ht,Ie.start*Ke),Kt=Math.min(Kt,(Ie.start+Ie.count)*Ke)),Ge!==null?(ht=Math.max(ht,0),Kt=Math.min(Kt,Ge.count)):je!=null&&(ht=Math.max(ht,0),Kt=Math.min(Kt,je.count));const St=Kt-ht;if(St<0||St===1/0)return;ge.setup(re,ie,Ve,$,Ge);let kn,ft=le;if(Ge!==null&&(kn=Ye.get(Ge),ft=ae,ft.setIndex(kn)),re.isMesh)ie.wireframe===!0?(Ne.setLineWidth(ie.wireframeLinewidth*Ee()),ft.setMode(W.LINES)):ft.setMode(W.TRIANGLES);else if(re.isLine){let nt=ie.linewidth;nt===void 0&&(nt=1),Ne.setLineWidth(nt*Ee()),re.isLineSegments?ft.setMode(W.LINES):re.isLineLoop?ft.setMode(W.LINE_LOOP):ft.setMode(W.LINE_STRIP)}else re.isPoints?ft.setMode(W.POINTS):re.isSprite&&ft.setMode(W.TRIANGLES);if(re.isInstancedMesh)ft.renderInstances(ht,St,re.count);else if($.isInstancedBufferGeometry){const nt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,hu=Math.min($.instanceCount,nt);ft.renderInstances(ht,St,hu)}else ft.render(ht,St)};function ke(L,K,$){L.transparent===!0&&L.side===Mi&&L.forceSinglePass===!1?(L.side=hn,L.needsUpdate=!0,xr(L,K,$),L.side=fr,L.needsUpdate=!0,xr(L,K,$),L.side=Mi):xr(L,K,$)}this.compile=function(L,K,$=null){$===null&&($=L),m=q.get($),m.init(),v.push(m),$.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(m.pushLight(re),re.castShadow&&m.pushShadow(re))}),L!==$&&L.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(m.pushLight(re),re.castShadow&&m.pushShadow(re))}),m.setupLights(g._useLegacyLights);const ie=new Set;return L.traverse(function(re){const Ie=re.material;if(Ie)if(Array.isArray(Ie))for(let Be=0;Be<Ie.length;Be++){const Ve=Ie[Be];ke(Ve,$,re),ie.add(Ve)}else ke(Ie,$,re),ie.add(Ie)}),v.pop(),m=null,ie},this.compileAsync=function(L,K,$=null){const ie=this.compile(L,K,$);return new Promise(re=>{function Ie(){if(ie.forEach(function(Be){ze.get(Be).currentProgram.isReady()&&ie.delete(Be)}),ie.size===0){re(L);return}setTimeout(Ie,10)}Le.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Me=null;function Ae(L){Me&&Me(L)}function tt(){it.stop()}function We(){it.start()}const it=new h_;it.setAnimationLoop(Ae),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(L){Me=L,pe.setAnimationLoop(L),L===null?it.stop():it.start()},pe.addEventListener("sessionstart",tt),pe.addEventListener("sessionend",We),this.render=function(L,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(K),K=pe.getCamera()),L.isScene===!0&&L.onBeforeRender(g,L,K,A),m=q.get(L,v.length),m.init(),v.push(m),xe.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ee.setFromProjectionMatrix(xe),fe=this.localClippingEnabled,se=Q.init(this.clippingPlanes,fe),_=te.get(L,h.length),_.init(),h.push(_),Ht(L,K,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(U,X),this.info.render.frame++,se===!0&&Q.beginShadows();const $=m.state.shadowsArray;if(Z.render($,L,K),se===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(_,L),m.setupLights(g._useLegacyLights),K.isArrayCamera){const ie=K.cameras;for(let re=0,Ie=ie.length;re<Ie;re++){const Be=ie[re];gr(_,L,Be,Be.viewport)}}else gr(_,L,K);A!==null&&(ve.updateMultisampleRenderTarget(A),ve.updateRenderTargetMipmap(A)),L.isScene===!0&&L.onAfterRender(g,L,K),ge.resetDefaultState(),R=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Ht(L,K,$,ie){if(L.visible===!1)return;if(L.layers.test(K.layers)){if(L.isGroup)$=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(K);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ee.intersectsSprite(L)){ie&&Se.setFromMatrixPosition(L.matrixWorld).applyMatrix4(xe);const Be=y.update(L),Ve=L.material;Ve.visible&&_.push(L,Be,Ve,$,Se.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||ee.intersectsObject(L))){const Be=y.update(L),Ve=L.material;if(ie&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Se.copy(L.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Se.copy(Be.boundingSphere.center)),Se.applyMatrix4(L.matrixWorld).applyMatrix4(xe)),Array.isArray(Ve)){const Ge=Be.groups;for(let Ke=0,Xe=Ge.length;Ke<Xe;Ke++){const je=Ge[Ke],ht=Ve[je.materialIndex];ht&&ht.visible&&_.push(L,Be,ht,$,Se.z,je)}}else Ve.visible&&_.push(L,Be,Ve,$,Se.z,null)}}const Ie=L.children;for(let Be=0,Ve=Ie.length;Be<Ve;Be++)Ht(Ie[Be],K,$,ie)}function gr(L,K,$,ie){const re=L.opaque,Ie=L.transmissive,Be=L.transparent;m.setupLightsView($),se===!0&&Q.setGlobalState(g.clippingPlanes,$),Ie.length>0&&yt(re,Ie,K,$),ie&&Ne.viewport(S.copy(ie)),re.length>0&&zn(re,K,$),Ie.length>0&&zn(Ie,K,$),Be.length>0&&zn(Be,K,$),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function yt(L,K,$,ie){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const Ie=Fe.isWebGL2;ce===null&&(ce=new ci(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?dr:ar,minFilter:ca,samples:Ie?4:0})),g.getDrawingBufferSize(ue),Ie?ce.setSize(ue.x,ue.y):ce.setSize(Ud(ue.x),Ud(ue.y));const Be=g.getRenderTarget();g.setRenderTarget(ce),g.getClearColor(P),C=g.getClearAlpha(),C<1&&g.setClearColor(16777215,.5),g.clear();const Ve=g.toneMapping;g.toneMapping=sr,zn(L,$,ie),ve.updateMultisampleRenderTarget(ce),ve.updateRenderTargetMipmap(ce);let Ge=!1;for(let Ke=0,Xe=K.length;Ke<Xe;Ke++){const je=K[Ke],ht=je.object,Kt=je.geometry,St=je.material,kn=je.group;if(St.side===Mi&&ht.layers.test(ie.layers)){const ft=St.side;St.side=hn,St.needsUpdate=!0,fi(ht,$,ie,Kt,St,kn),St.side=ft,St.needsUpdate=!0,Ge=!0}}Ge===!0&&(ve.updateMultisampleRenderTarget(ce),ve.updateRenderTargetMipmap(ce)),g.setRenderTarget(Be),g.setClearColor(P,C),g.toneMapping=Ve}function zn(L,K,$){const ie=K.isScene===!0?K.overrideMaterial:null;for(let re=0,Ie=L.length;re<Ie;re++){const Be=L[re],Ve=Be.object,Ge=Be.geometry,Ke=ie===null?Be.material:ie,Xe=Be.group;Ve.layers.test($.layers)&&fi(Ve,K,$,Ge,Ke,Xe)}}function fi(L,K,$,ie,re,Ie){L.onBeforeRender(g,K,$,ie,re,Ie),L.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),re.onBeforeRender(g,K,$,ie,L,Ie),re.transparent===!0&&re.side===Mi&&re.forceSinglePass===!1?(re.side=hn,re.needsUpdate=!0,g.renderBufferDirect($,K,ie,re,L,Ie),re.side=fr,re.needsUpdate=!0,g.renderBufferDirect($,K,ie,re,L,Ie),re.side=Mi):g.renderBufferDirect($,K,ie,re,L,Ie),L.onAfterRender(g,K,$,ie,re,Ie)}function xr(L,K,$){K.isScene!==!0&&(K=Re);const ie=ze.get(L),re=m.state.lights,Ie=m.state.shadowsArray,Be=re.state.version,Ve=F.getParameters(L,re.state,Ie,K,$),Ge=F.getProgramCacheKey(Ve);let Ke=ie.programs;ie.environment=L.isMeshStandardMaterial?K.environment:null,ie.fog=K.fog,ie.envMap=(L.isMeshStandardMaterial?Qe:be).get(L.envMap||ie.environment),Ke===void 0&&(L.addEventListener("dispose",me),Ke=new Map,ie.programs=Ke);let Xe=Ke.get(Ge);if(Xe!==void 0){if(ie.currentProgram===Xe&&ie.lightsStateVersion===Be)return Ea(L,Ve),Xe}else Ve.uniforms=F.getUniforms(L),L.onBuild($,Ve,g),L.onBeforeCompile(Ve,g),Xe=F.acquireProgram(Ve,Ge),Ke.set(Ge,Xe),ie.uniforms=Ve.uniforms;const je=ie.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(je.clippingPlanes=Q.uniform),Ea(L,Ve),ie.needsLights=Qr(L),ie.lightsStateVersion=Be,ie.needsLights&&(je.ambientLightColor.value=re.state.ambient,je.lightProbe.value=re.state.probe,je.directionalLights.value=re.state.directional,je.directionalLightShadows.value=re.state.directionalShadow,je.spotLights.value=re.state.spot,je.spotLightShadows.value=re.state.spotShadow,je.rectAreaLights.value=re.state.rectArea,je.ltc_1.value=re.state.rectAreaLTC1,je.ltc_2.value=re.state.rectAreaLTC2,je.pointLights.value=re.state.point,je.pointLightShadows.value=re.state.pointShadow,je.hemisphereLights.value=re.state.hemi,je.directionalShadowMap.value=re.state.directionalShadowMap,je.directionalShadowMatrix.value=re.state.directionalShadowMatrix,je.spotShadowMap.value=re.state.spotShadowMap,je.spotLightMatrix.value=re.state.spotLightMatrix,je.spotLightMap.value=re.state.spotLightMap,je.pointShadowMap.value=re.state.pointShadowMap,je.pointShadowMatrix.value=re.state.pointShadowMatrix),ie.currentProgram=Xe,ie.uniformsList=null,Xe}function Zr(L){if(L.uniformsList===null){const K=L.currentProgram.getUniforms();L.uniformsList=Bl.seqWithValue(K.seq,L.uniforms)}return L.uniformsList}function Ea(L,K){const $=ze.get(L);$.outputColorSpace=K.outputColorSpace,$.instancing=K.instancing,$.instancingColor=K.instancingColor,$.skinning=K.skinning,$.morphTargets=K.morphTargets,$.morphNormals=K.morphNormals,$.morphColors=K.morphColors,$.morphTargetsCount=K.morphTargetsCount,$.numClippingPlanes=K.numClippingPlanes,$.numIntersection=K.numClipIntersection,$.vertexAlphas=K.vertexAlphas,$.vertexTangents=K.vertexTangents,$.toneMapping=K.toneMapping}function ba(L,K,$,ie,re){K.isScene!==!0&&(K=Re),ve.resetTextureUnits();const Ie=K.fog,Be=ie.isMeshStandardMaterial?K.environment:null,Ve=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Di,Ge=(ie.isMeshStandardMaterial?Qe:be).get(ie.envMap||Be),Ke=ie.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xe=!!$.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),je=!!$.morphAttributes.position,ht=!!$.morphAttributes.normal,Kt=!!$.morphAttributes.color;let St=sr;ie.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(St=g.toneMapping);const kn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ft=kn!==void 0?kn.length:0,nt=ze.get(ie),hu=m.state.lights;if(se===!0&&(fe===!0||L!==M)){const mn=L===M&&ie.id===R;Q.setState(ie,L,mn)}let Mt=!1;ie.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==hu.state.version||nt.outputColorSpace!==Ve||re.isInstancedMesh&&nt.instancing===!1||!re.isInstancedMesh&&nt.instancing===!0||re.isSkinnedMesh&&nt.skinning===!1||!re.isSkinnedMesh&&nt.skinning===!0||re.isInstancedMesh&&nt.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&nt.instancingColor===!1&&re.instanceColor!==null||nt.envMap!==Ge||ie.fog===!0&&nt.fog!==Ie||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Q.numPlanes||nt.numIntersection!==Q.numIntersection)||nt.vertexAlphas!==Ke||nt.vertexTangents!==Xe||nt.morphTargets!==je||nt.morphNormals!==ht||nt.morphColors!==Kt||nt.toneMapping!==St||Fe.isWebGL2===!0&&nt.morphTargetsCount!==ft)&&(Mt=!0):(Mt=!0,nt.__version=ie.version);let vr=nt.currentProgram;Mt===!0&&(vr=xr(ie,K,re));let gp=!1,cs=!1,pu=!1;const Zt=vr.getUniforms(),_r=nt.uniforms;if(Ne.useProgram(vr.program)&&(gp=!0,cs=!0,pu=!0),ie.id!==R&&(R=ie.id,cs=!0),gp||M!==L){Zt.setValue(W,"projectionMatrix",L.projectionMatrix),Zt.setValue(W,"viewMatrix",L.matrixWorldInverse);const mn=Zt.map.cameraPosition;mn!==void 0&&mn.setValue(W,Se.setFromMatrixPosition(L.matrixWorld)),Fe.logarithmicDepthBuffer&&Zt.setValue(W,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Zt.setValue(W,"isOrthographic",L.isOrthographicCamera===!0),M!==L&&(M=L,cs=!0,pu=!0)}if(re.isSkinnedMesh){Zt.setOptional(W,re,"bindMatrix"),Zt.setOptional(W,re,"bindMatrixInverse");const mn=re.skeleton;mn&&(Fe.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),Zt.setValue(W,"boneTexture",mn.boneTexture,ve),Zt.setValue(W,"boneTextureSize",mn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const mu=$.morphAttributes;if((mu.position!==void 0||mu.normal!==void 0||mu.color!==void 0&&Fe.isWebGL2===!0)&&de.update(re,$,vr),(cs||nt.receiveShadow!==re.receiveShadow)&&(nt.receiveShadow=re.receiveShadow,Zt.setValue(W,"receiveShadow",re.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(_r.envMap.value=Ge,_r.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),cs&&(Zt.setValue(W,"toneMappingExposure",g.toneMappingExposure),nt.needsLights&&Ta(_r,pu),Ie&&ie.fog===!0&&Y.refreshFogUniforms(_r,Ie),Y.refreshMaterialUniforms(_r,ie,G,B,ce),Bl.upload(W,Zr(nt),_r,ve)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Bl.upload(W,Zr(nt),_r,ve),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Zt.setValue(W,"center",re.center),Zt.setValue(W,"modelViewMatrix",re.modelViewMatrix),Zt.setValue(W,"normalMatrix",re.normalMatrix),Zt.setValue(W,"modelMatrix",re.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const mn=ie.uniformsGroups;for(let gu=0,py=mn.length;gu<py;gu++)if(Fe.isWebGL2){const xp=mn[gu];_e.update(xp,vr),_e.bind(xp,vr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vr}function Ta(L,K){L.ambientLightColor.needsUpdate=K,L.lightProbe.needsUpdate=K,L.directionalLights.needsUpdate=K,L.directionalLightShadows.needsUpdate=K,L.pointLights.needsUpdate=K,L.pointLightShadows.needsUpdate=K,L.spotLights.needsUpdate=K,L.spotLightShadows.needsUpdate=K,L.rectAreaLights.needsUpdate=K,L.hemisphereLights.needsUpdate=K}function Qr(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(L,K,$){ze.get(L.texture).__webglTexture=K,ze.get(L.depthTexture).__webglTexture=$;const ie=ze.get(L);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=$===void 0,ie.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,K){const $=ze.get(L);$.__webglFramebuffer=K,$.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(L,K=0,$=0){A=L,E=K,T=$;let ie=!0,re=null,Ie=!1,Be=!1;if(L){const Ge=ze.get(L);Ge.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(W.FRAMEBUFFER,null),ie=!1):Ge.__webglFramebuffer===void 0?ve.setupRenderTarget(L):Ge.__hasExternalTextures&&ve.rebindTextures(L,ze.get(L.texture).__webglTexture,ze.get(L.depthTexture).__webglTexture);const Ke=L.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Be=!0);const Xe=ze.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Xe[K])?re=Xe[K][$]:re=Xe[K],Ie=!0):Fe.isWebGL2&&L.samples>0&&ve.useMultisampledRTT(L)===!1?re=ze.get(L).__webglMultisampledFramebuffer:Array.isArray(Xe)?re=Xe[$]:re=Xe,S.copy(L.viewport),I.copy(L.scissor),N=L.scissorTest}else S.copy(k).multiplyScalar(G).floor(),I.copy(D).multiplyScalar(G).floor(),N=H;if(Ne.bindFramebuffer(W.FRAMEBUFFER,re)&&Fe.drawBuffers&&ie&&Ne.drawBuffers(L,re),Ne.viewport(S),Ne.scissor(I),Ne.setScissorTest(N),Ie){const Ge=ze.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ge.__webglTexture,$)}else if(Be){const Ge=ze.get(L.texture),Ke=K||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ge.__webglTexture,$||0,Ke)}R=-1},this.readRenderTargetPixels=function(L,K,$,ie,re,Ie,Be){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ze.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve){Ne.bindFramebuffer(W.FRAMEBUFFER,Ve);try{const Ge=L.texture,Ke=Ge.format,Xe=Ge.type;if(Ke!==Kn&&Pe.convert(Ke)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=Xe===dr&&(Le.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&Le.has("EXT_color_buffer_float"));if(Xe!==ar&&Pe.convert(Xe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===Zi&&(Fe.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=L.width-ie&&$>=0&&$<=L.height-re&&W.readPixels(K,$,ie,re,Pe.convert(Ke),Pe.convert(Xe),Ie)}finally{const Ge=A!==null?ze.get(A).__webglFramebuffer:null;Ne.bindFramebuffer(W.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(L,K,$=0){const ie=Math.pow(2,-$),re=Math.floor(K.image.width*ie),Ie=Math.floor(K.image.height*ie);ve.setTexture2D(K,0),W.copyTexSubImage2D(W.TEXTURE_2D,$,0,0,L.x,L.y,re,Ie),Ne.unbindTexture()},this.copyTextureToTexture=function(L,K,$,ie=0){const re=K.image.width,Ie=K.image.height,Be=Pe.convert($.format),Ve=Pe.convert($.type);ve.setTexture2D($,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,$.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,$.unpackAlignment),K.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ie,L.x,L.y,re,Ie,Be,Ve,K.image.data):K.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ie,L.x,L.y,K.mipmaps[0].width,K.mipmaps[0].height,Be,K.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,ie,L.x,L.y,Be,Ve,K.image),ie===0&&$.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(L,K,$,ie,re=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=L.max.x-L.min.x+1,Be=L.max.y-L.min.y+1,Ve=L.max.z-L.min.z+1,Ge=Pe.convert(ie.format),Ke=Pe.convert(ie.type);let Xe;if(ie.isData3DTexture)ve.setTexture3D(ie,0),Xe=W.TEXTURE_3D;else if(ie.isDataArrayTexture)ve.setTexture2DArray(ie,0),Xe=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,ie.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,ie.unpackAlignment);const je=W.getParameter(W.UNPACK_ROW_LENGTH),ht=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Kt=W.getParameter(W.UNPACK_SKIP_PIXELS),St=W.getParameter(W.UNPACK_SKIP_ROWS),kn=W.getParameter(W.UNPACK_SKIP_IMAGES),ft=$.isCompressedTexture?$.mipmaps[0]:$.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,ft.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ft.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,L.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,L.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,L.min.z),$.isDataTexture||$.isData3DTexture?W.texSubImage3D(Xe,re,K.x,K.y,K.z,Ie,Be,Ve,Ge,Ke,ft.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Xe,re,K.x,K.y,K.z,Ie,Be,Ve,Ge,ft.data)):W.texSubImage3D(Xe,re,K.x,K.y,K.z,Ie,Be,Ve,Ge,Ke,ft),W.pixelStorei(W.UNPACK_ROW_LENGTH,je),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ht),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Kt),W.pixelStorei(W.UNPACK_SKIP_ROWS,St),W.pixelStorei(W.UNPACK_SKIP_IMAGES,kn),re===0&&ie.generateMipmaps&&W.generateMipmap(Xe),Ne.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?ve.setTextureCube(L,0):L.isData3DTexture?ve.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ve.setTexture2DArray(L,0):ve.setTexture2D(L,0),Ne.unbindTexture()},this.resetState=function(){E=0,T=0,A=null,Ne.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===qh?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===eu?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?lr:n_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===lr?At:Di}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class tA extends ru{}tA.prototype.isWebGL1Renderer=!0;class tp extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Tc extends $n{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class ou extends ya{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jg=new j,Yg=new j,qg=new bt,Sf=new Kh,hl=new tu;class nA extends kt{constructor(e=new An,n=new ou){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)jg.fromBufferAttribute(n,r-1),Yg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=jg.distanceTo(Yg);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(r),hl.radius+=o,e.ray.intersectsSphere(hl)===!1)return;qg.copy(r).invert(),Sf.copy(e.ray).applyMatrix4(qg);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new j,f=new j,d=new j,u=new j,p=this.isLineSegments?2:1,x=i.index,m=i.attributes.position;if(x!==null){const h=Math.max(0,s.start),v=Math.min(x.count,s.start+s.count);for(let g=h,w=v-1;g<w;g+=p){const E=x.getX(g),T=x.getX(g+1);if(c.fromBufferAttribute(m,E),f.fromBufferAttribute(m,T),Sf.distanceSqToSegment(c,f,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(u);R<e.near||R>e.far||n.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,s.start),v=Math.min(m.count,s.start+s.count);for(let g=h,w=v-1;g<w;g+=p){if(c.fromBufferAttribute(m,g),f.fromBufferAttribute(m,g+1),Sf.distanceSqToSegment(c,f,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(u);T<e.near||T>e.far||n.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}const Kg=new j,Zg=new j;class np extends nA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)Kg.fromBufferAttribute(n,r),Zg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Kg.distanceTo(Zg);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class su extends An{constructor(e=1,n=1,i=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),o=Math.floor(o);const f=[],d=[],u=[],p=[];let x=0;const _=[],m=i/2;let h=0;v(),s===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(f),this.setAttribute("position",new Bt(d,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(p,2));function v(){const w=new j,E=new j;let T=0;const A=(n-e)/i;for(let R=0;R<=o;R++){const M=[],S=R/o,I=S*(n-e)+e;for(let N=0;N<=r;N++){const P=N/r,C=P*l+a,O=Math.sin(C),B=Math.cos(C);E.x=I*O,E.y=-S*i+m,E.z=I*B,d.push(E.x,E.y,E.z),w.set(O,A,B).normalize(),u.push(w.x,w.y,w.z),p.push(P,1-S),M.push(x++)}_.push(M)}for(let R=0;R<r;R++)for(let M=0;M<o;M++){const S=_[M][R],I=_[M+1][R],N=_[M+1][R+1],P=_[M][R+1];f.push(S,I,P),f.push(I,N,P),T+=6}c.addGroup(h,T,0),h+=T}function g(w){const E=x,T=new qe,A=new j;let R=0;const M=w===!0?e:n,S=w===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,m*S,0),u.push(0,S,0),p.push(.5,.5),x++;const I=x;for(let N=0;N<=r;N++){const C=N/r*l+a,O=Math.cos(C),B=Math.sin(C);A.x=M*B,A.y=m*S,A.z=M*O,d.push(A.x,A.y,A.z),u.push(0,S,0),T.x=O*.5+.5,T.y=B*.5*S+.5,p.push(T.x,T.y),x++}for(let N=0;N<r;N++){const P=E+N,C=I+N;w===!0?f.push(C,C+1,P):f.push(C+1,C,P),R+=3}c.addGroup(h,R,w===!0?1:2),h+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ip extends su{constructor(e=1,n=1,i=32,r=1,o=!1,s=0,a=Math.PI*2){super(0,e,n,i,r,o,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a}}static fromJSON(e){return new ip(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const pl=new j,ml=new j,Mf=new j,gl=new Dn;class v_ extends An{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),o=Math.cos(kl*n),s=e.getIndex(),a=e.getAttribute("position"),l=s?s.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),u={},p=[];for(let x=0;x<l;x+=3){s?(c[0]=s.getX(x),c[1]=s.getX(x+1),c[2]=s.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:_,b:m,c:h}=gl;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),gl.getNormal(Mf),d[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const g=(v+1)%3,w=d[v],E=d[g],T=gl[f[v]],A=gl[f[g]],R=`${w}_${E}`,M=`${E}_${w}`;M in u&&u[M]?(Mf.dot(u[M].normal)<=o&&(p.push(T.x,T.y,T.z),p.push(A.x,A.y,A.z)),u[M]=null):R in u||(u[R]={index0:c[v],index1:c[g],normal:Mf.clone()})}}for(const x in u)if(u[x]){const{index0:_,index1:m}=u[x];pl.fromBufferAttribute(a,_),ml.fromBufferAttribute(a,m),p.push(pl.x,pl.y,pl.z),p.push(ml.x,ml.y,ml.z)}this.setAttribute("position",new Bt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class __ extends kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const wf=new bt,Qg=new j,Jg=new j;class iA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qh,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Qg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qg),Jg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Jg),n.updateMatrixWorld(),wf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rA extends iA{constructor(){super(new $h(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oA extends __{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new rA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rp extends __{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class y_ extends An{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class sA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$g(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=$g();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function $g(){return(typeof performance>"u"?Date:performance).now()}class Fd{constructor(e,n,i=0,r=1/0){this.ray=new Kh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Zh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return zd(e,this,i,n),i.sort(e0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,o=e.length;r<o;r++)zd(e[r],this,i,n);return i.sort(e0),i}}function e0(t,e){return t.distance-e.distance}function zd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let o=0,s=r.length;o<s;o++)zd(r[o],e,n,!0)}}class aA extends np{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new An;r.setAttribute("position",new Bt(n,3)),r.setAttribute("color",new Bt(i,3));const o=new ou({vertexColors:!0,toneMapped:!1});super(r,o),this.type="AxesHelper"}setColors(e,n,i){const r=new $e,o=this.geometry.attributes.color.array;return r.set(e),r.toArray(o,0),r.toArray(o,3),r.set(n),r.toArray(o,6),r.toArray(o,9),r.set(i),r.toArray(o,12),r.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jh);const lA={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Sa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cA=new $h(-1,1,1,-1,0,1);class uA extends An{constructor(){super(),this.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bt([0,2,0,0,2,0],2))}}const fA=new uA;class S_{constructor(e){this._mesh=new Sn(fA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class M_ extends Sa{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ws.clone(e.uniforms),this.material=new pn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new S_(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class t0 extends Sa{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class dA extends Sa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hA{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new qe);this._width=i.width,this._height=i.height,n=new ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dr}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new M_(lA),this.copyPass.material.blending=Ai,this.clock=new sA}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}t0!==void 0&&(s instanceof t0?i=!0:s instanceof dA&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class pA extends Sa{constructor(e,n,i=null,r=null,o=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $e}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let o,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}}const mA={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new qe(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`},xl={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new qe(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},vl={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new qe(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Ef={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new qe(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class gA extends Sa{constructor(e,n){super(),this.edgesRT=new ci(e,n,{depthBuffer:!1,type:dr}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new ci(e,n,{depthBuffer:!1,type:dr}),this.weightsRT.texture.name="SMAAPass.weights";const i=this,r=new Image;r.src=this.getAreaTexture(),r.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new en,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=r,this.areaTexture.minFilter=_n,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const o=new Image;o.src=this.getSearchTexture(),o.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new en,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=o,this.searchTexture.magFilter=Ft,this.searchTexture.minFilter=Ft,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=Ws.clone(xl.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/n),this.materialEdges=new pn({defines:Object.assign({},xl.defines),uniforms:this.uniformsEdges,vertexShader:xl.vertexShader,fragmentShader:xl.fragmentShader}),this.uniformsWeights=Ws.clone(vl.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/n),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new pn({defines:Object.assign({},vl.defines),uniforms:this.uniformsWeights,vertexShader:vl.vertexShader,fragmentShader:vl.fragmentShader}),this.uniformsBlend=Ws.clone(Ef.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/n),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new pn({uniforms:this.uniformsBlend,vertexShader:Ef.vertexShader,fragmentShader:Ef.fragmentShader}),this.fsQuad=new S_(null)}render(e,n,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,n){this.edgesRT.setSize(e,n),this.weightsRT.setSize(e,n),this.materialEdges.uniforms.resolution.value.set(1/e,1/n),this.materialWeights.uniforms.resolution.value.set(1/e,1/n),this.materialBlend.uniforms.resolution.value.set(1/e,1/n)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const Hi={VISUALIZATION_DATA_DIR:"visualization_data"},bf=new Map,zr=async t=>{if(t==null)return null;if(bf.has(t))return bf.get(t);const e=[{data:`./${Hi.VISUALIZATION_DATA_DIR}/channel_${t}_napari_data.raw`,metadata:`./${Hi.VISUALIZATION_DATA_DIR}/channel_${t}_napari_metadata.json`},{data:`${Hi.VISUALIZATION_DATA_DIR}/channel_${t}_napari_data.raw`,metadata:`${Hi.VISUALIZATION_DATA_DIR}/channel_${t}_napari_metadata.json`},{data:`./${Hi.VISUALIZATION_DATA_DIR}/channel_${t}_data.raw`,metadata:`./${Hi.VISUALIZATION_DATA_DIR}/channel_${t}_metadata.json`},{data:`${Hi.VISUALIZATION_DATA_DIR}/channel_${t}_data.raw`,metadata:`${Hi.VISUALIZATION_DATA_DIR}/channel_${t}_metadata.json`}];for(const n of e)try{const i=await fetch(n.metadata);if(!i.ok)continue;const r=i.headers.get("content-type");if(r&&!r.includes("application/json"))continue;const o=await i.text();if(o.trim().startsWith("<!DOCTYPE")||o.trim().startsWith("<html"))continue;const s=JSON.parse(o),a=await fetch(n.data);if(!a.ok)continue;const l=a.headers.get("content-type");if(l&&l.includes("text/html"))continue;const c=await a.arrayBuffer(),d={data:new Uint8Array(c),metadata:s};return bf.set(t,d),d}catch{continue}return console.warn(`Failed to load data for channel ${t}`),null},n0={rotation:{x:0,y:Math.PI},distance:.75,panOffset:{x:0,y:0,z:0}},xA=.05,vA=.15,_A=200,_l=16e6,yA=1.3,SA=.99,Tf=.1;new $e(.9,.9,.95);const MA=.1,wA=.9,i0=["#ca0020","#f4a582","#f7f7f7","#92c5de","#0571b0"],xo=(t,e,n)=>Math.min(Math.max(t,e),n),vo=t=>{t&&(t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose())},yl=(t,e)=>{const n=e.indexOf(t);n!==-1&&e.splice(n,1)},_o=t=>[t.thresholdMin??"",t.thresholdMax??"",t.color??"",t.opacity??""].join("|"),EA=({channels:t=[],activeRegions:e=[],onSelectionChange:n,initialSelectionBounds:i,selectedRegionsData:r=[]})=>{const o=ne.useRef(null),s=ne.useRef(null),a=ne.useRef(null),l=ne.useRef(null),c=ne.useRef(null),f=ne.useRef(null),d=ne.useRef(null),u=ne.useRef(null),p=ne.useRef([]),x=ne.useRef(new Map),_=ne.useRef(new Map),m=ne.useRef(new Map),h=ne.useRef({lastSampling:null,lastUpdate:0}),v=ne.useRef({}),g=ne.useRef(!1),w=ne.useRef(null),E=ne.useRef(null),T=ne.useRef([]),A=ne.useRef(new Map),R=ne.useRef(!1),M=ne.useRef(null),S=ne.useRef(!1),I=ne.useRef(i||null),[N,P]=ne.useState(0),[C,O]=ne.useState(!1),[B,G]=ne.useState(!1),[U,X]=ne.useState(null),[k,D]=ne.useState(null),[H,ee]=ne.useState(.1),[se,fe]=ne.useState(null),[ce,xe]=ne.useState(null);ne.useEffect(()=>{g.current=C},[C]),ne.useEffect(()=>{R.current=B},[B]),ne.useEffect(()=>{M.current=k},[k]);const ue=ne.useRef({...n0}),Se=ne.useCallback((b=3)=>b>=8?6:b>=5.5?4:b>=3.5?3:b>=2?2:1,[]),Re=ne.useCallback((b,y,F)=>{if(!b||!y)return null;const{data:Y,metadata:te}=b,{color:q,thresholdMin:Q,thresholdMax:Z}=y,[J,de,le]=te.shape||[];if(!J||!de||!le)return null;const[ae=0,Pe=65535]=te.dataRange||[],ge=Math.max(1,Pe-ae),_e=Math.round(ae+ge*MA),Te=Math.round(ae+ge*wA);let pe=Q??_e,De=Z??Te;pe>De&&([pe,De]=[De,pe]),pe=xo(pe,ae,Pe),De=xo(De,ae,Pe);const V=q.replace("#",""),ye=parseInt(V.substring(0,2),16)/255,me=parseInt(V.substring(2,4),16)/255,oe=parseInt(V.substring(4,6),16)/255,he=[],ke=[],Me=.35,Ae=Math.max(J,de,le),tt=le/Ae,We=de/Ae,it=J/Ae/4,Ht=J*de*le,gr=Ht*.08;let yt=1;if(gr>_l){const $=gr/_l;yt=Math.max(2,Math.ceil(Math.cbrt(Math.max($,1)*2))),Ht>2e7&&(yt=Math.max(yt,4))}if(F!==void 0){const $=Math.max(1,Math.round(F));yt=Math.max(yt,$)}console.log(`Channel visualization: shape=${te.shape}, sampling=${yt}, totalVoxels=${Ht}`),console.log(`Channel ${y.channelIndex}: Data range [${ae}, ${Pe}], Threshold range [${pe}, ${De}]`);const zn=2/le*tt*yt,fi=2/de*We*yt,xr=2/J*it*yt;let Zr=0;const Ea=Math.max(1,De-pe);for(let $=0;$<J;$+=yt)for(let ie=0;ie<de;ie+=yt)for(let re=0;re<le;re+=yt){const Ie=$*de*le+ie*le+re,Ve=Y[Ie]/255*(Pe-ae)+ae;if(Ve>=pe&&Ve<=De){if(Zr>=_l){console.warn(`Channel ${y.channelIndex}: Reached max points limit (${_l})`);break}Zr+=1;const Ge=(re/le*2-1)*tt,Ke=(ie/de*2-1)*We,Xe=($/J*2-1)*it,je=(Math.random()-.5)*zn*Tf,ht=(Math.random()-.5)*fi*Tf,Kt=(Math.random()-.5)*xr*Tf;he.push(Ge+je,Ke+ht,Xe+Kt);const St=(Ve-pe)/Ea,kn=xo(St,0,1),ft=Me+(1-Me)*kn*yA;ke.push(xo(ft,Me,1))}}console.log(`Channel ${y.channelIndex}: Created ${Zr} voxels with sampling=${yt}`);const ba=he.length/3;if(ba===0)return console.warn(`Channel ${y.channelIndex}: No voxels within threshold range`),null;const Ta=new Ii(zn,fi,xr),Qr=new y_().copy(Ta);Ta.dispose(),Qr.instanceCount=ba,Qr.setAttribute("instanceOffset",new Tc(new Float32Array(he),3)),Qr.setAttribute("instanceOpacity",new Tc(new Float32Array(ke),1));const L=new pn({uniforms:{color:{value:new $e(ye,me,oe)},edgeFeather:{value:SA}},vertexShader:`
        attribute vec3 instanceOffset;
        attribute float instanceOpacity;
        varying float vOpacity;
        varying vec3 vLocalPos;
        void main() {
          vOpacity = instanceOpacity;
          vec3 transformed = position + instanceOffset;
          vLocalPos = position;
          vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 color;
        uniform float edgeFeather;
        varying float vOpacity;
        varying vec3 vLocalPos;
        void main() {
          float base = clamp(vOpacity, 0.0, 1.0);
          float edge = max(max(abs(vLocalPos.x), abs(vLocalPos.y)), abs(vLocalPos.z));
          float edgeFade = smoothstep(0.5 - edgeFeather, 0.5, edge);
          base *= (1.0 - edgeFade);
          if (base <= 0.01) discard;
          vec3 finalColor = pow(color, vec3(0.55));
          gl_FragColor = vec4(finalColor * base, base);
        }
      `,transparent:!0,depthWrite:!1,depthTest:!1,blending:vc}),K=new Sn(Qr,L);return K.frustumCulled=!1,K.userData={channelIndex:y.channelIndex,sampling:yt},{mesh:K,sampling:yt}},[]),Ee=ne.useCallback(()=>{const b=s.current,y=a.current;!b||!y||(c.current?c.current.render():l.current&&l.current.render(b,y))},[]),W=ne.useCallback(()=>{const b=a.current;if(!b)return;const y=ue.current,F=new j(y.panOffset.x||0,y.panOffset.y||0,y.panOffset.z||0),Y=y.distance,te=y.rotation.y,q=y.rotation.x;b.position.x=F.x+Y*Math.sin(te)*Math.cos(q),b.position.y=F.y+Y*Math.sin(q),b.position.z=F.z+Y*Math.cos(te)*Math.cos(q),b.up.set(0,-1,0),b.lookAt(F)},[]),Oe=ne.useCallback(()=>{const b=s.current;if(!b)return;const y=ue.current;if(!y)return;const F=Se(y.distance||3),Y=Date.now(),te=h.current;if(Y-te.lastUpdate<_A)return;te.lastUpdate=Y;const q=x.current;q.forEach((Q,Z)=>{if(!Q||Q.sampling===F||Q.lastRequestedSampling===F)return;const J=_.current.get(Z),de=m.current.get(Z);if(!J||!de)return;const le=Q.mesh,ae=le?b.children.includes(le):!1,Pe=Re(J,de,F);if(Q.lastRequestedSampling=F,!Pe){ae&&le&&b.remove(le),vo(le),yl(le,p.current),q.delete(Z);return}const{mesh:ge,sampling:_e}=Pe;le&&(b.children.includes(le)&&b.remove(le),vo(le),yl(le,p.current)),p.current.push(ge),q.set(Z,{mesh:ge,sampling:_e,lastRequestedSampling:F}),ae&&de.visible!==!1&&b.add(ge)}),te.lastSampling=F,Ee()},[Re,Se,Ee]),Le=ne.useCallback(()=>{ue.current={...n0},a.current&&(W(),h.current.lastUpdate=0,Oe());const b=s.current;if(b&&(T.current.forEach(y=>{if(y&&b.children.includes(y))try{b.remove(y),y.geometry&&y.geometry.dispose(),y.material&&y.material.dispose()}catch(F){console.error("Main_View: Error removing wireframe:",F)}}),E.current&&b.children.includes(E.current)))try{b.remove(E.current),E.current.geometry&&E.current.geometry.dispose(),E.current.material&&E.current.material.dispose()}catch(y){console.error("Main_View: Error removing temporary wireframe:",y)}T.current=[],E.current=null,w.current=null,A.current.clear(),I.current=null,fe(null),xe(null),X(null),D(null),n&&n(null),Ee(),requestAnimationFrame(()=>{W(),Oe(),Ee()}),console.log("Main_View: Camera reset to default view and all boxes cleared")},[W,Oe,n,Ee]),Fe=ne.useCallback(()=>{const b=a.current;if(!b)return;const y=v.current,Y=y.shift||y.shiftleft||y.shiftright||y.shiftleft||y.shiftright?vA:xA,te=ue.current;let q=!1;const Q=new j,Z=new j,J=de=>{te.panOffset.x+=de.x,te.panOffset.y+=de.y,te.panOffset.z+=de.z};(y.w||y.arrowup)&&(b.getWorldDirection(Q),J(Q.multiplyScalar(Y)),q=!0),(y.s||y.arrowdown)&&(b.getWorldDirection(Q),J(Q.multiplyScalar(-Y)),q=!0),(y.a||y.arrowleft)&&(b.getWorldDirection(Q),Z.crossVectors(b.up,Q).normalize().multiplyScalar(Y),J(Z),q=!0),(y.d||y.arrowright)&&(b.getWorldDirection(Q),Z.crossVectors(b.up,Q).normalize().multiplyScalar(-Y),J(Z),q=!0),y.q&&(Z.copy(b.up).normalize().multiplyScalar(Y),J(Z),q=!0),y.e&&(Z.copy(b.up).normalize().multiplyScalar(-Y),J(Z),q=!0),q&&(W(),Oe())},[W,Oe]),Ne=(b,y,F,Y)=>({x:b/F*2-1,y:-(y/Y)*2+1}),He=(b,y,F,Y,te=0)=>{if(!a.current||!l.current)return null;const q=l.current.domElement.getBoundingClientRect(),Q=q.width,Z=q.height,J=Ne(b-q.left,y-q.top,Q,Z),de=Ne(F-q.left,Y-q.top,Q,Z),le=new Fd,ae=a.current,Pe=new Si(new j(0,0,1),-te),ge=[new qe(J.x,J.y),new qe(de.x,J.y),new qe(de.x,de.y),new qe(J.x,de.y)],_e=[];if(ge.forEach(he=>{le.setFromCamera(he,ae);const ke=new j;le.ray.intersectPlane(Pe,ke),_e.push(ke)}),_e.length===0)return null;const Te=Math.min(..._e.map(he=>he.x)),pe=Math.max(..._e.map(he=>he.x)),De=Math.min(..._e.map(he=>he.y)),V=Math.max(..._e.map(he=>he.y)),ye=Math.abs(te)/2,me=-ye,oe=ye;return{min:new j(Te,De,me),max:new j(pe,V,oe),center:new j((Te+pe)/2,(De+V)/2,0),size:new j(pe-Te,V-De,oe-me)}},ze=(b,y=!1)=>{try{if(!s.current||!b){console.warn("Main_View: Cannot update wireframe - scene or bounds missing");return}if(!b.size||!b.center){console.warn("Main_View: Invalid worldBounds structure:",b);return}const F=b.size,Y=b.center;if(!F.x||!F.y||!F.z||isNaN(F.x)||isNaN(F.y)||isNaN(F.z)||!isFinite(F.x)||!isFinite(F.y)||!isFinite(F.z)||F.x<=0||F.y<=0||F.z<=0){console.warn("Main_View: Invalid size values:",F);return}const te=.001,q=Math.max(te,Math.abs(F.x)),Q=Math.max(te,Math.abs(F.y)),Z=Math.max(te,Math.abs(F.z)),J=new Ii(q,Q,Z),de=new v_(J),le=T.current.length,ae=i0[le%i0.length],Pe=parseInt(ae.replace("#",""),16),ge=new ou({color:Pe,linewidth:6,transparent:!0,opacity:y?.7:.96}),_e=new np(de,ge);if(_e.renderOrder=100,Y&&!isNaN(Y.x)&&!isNaN(Y.y)&&!isNaN(Y.z)?_e.position.copy(Y):_e.position.set(0,0,0),y?_e.userData.isTemporary=!0:(_e.userData.worldBounds=b,_e.userData.boxColor=ae,_e.userData.boxIndex=le),s.current.add(_e),!y)T.current.push(_e),E.current=_e;else{if(E.current&&E.current.userData.isTemporary)try{s.current.children.includes(E.current)&&s.current.remove(E.current),E.current.geometry&&E.current.geometry.dispose(),E.current.material&&E.current.material.dispose()}catch(Te){console.error("Main_View: Error removing temporary wireframe:",Te)}E.current=_e}w.current={center:Y?Y.clone():new j(0,0,0),size:F.clone(),min:b.min?b.min.clone():new j(-q/2,-Q/2,-Z/2),max:b.max?b.max.clone():new j(q/2,Q/2,Z/2)},J.dispose()}catch(F){console.error("Main_View: Error in updateCuboidWireframe:",F),console.error("Main_View: worldBounds:",b)}},ve=ne.useCallback(async b=>{if(!b||!b.min||!b.max)return console.warn("Main_View: extractSelectedRegion - Invalid world bounds:",b),null;const y={channels:[],bounds:null,worldBounds:b},F=t.filter(ye=>ye.visible!==!1);if(F.length===0)return console.warn("Main_View: extractSelectedRegion - No visible channels"),null;let Y=null;for(const ye of F){let me=_.current.get(ye.channelIndex);if(!me){console.log(`Main_View: extractSelectedRegion - Data missing for channel ${ye.channelIndex}, fetching...`);try{me=await zr(ye.channelIndex),me&&_.current.set(ye.channelIndex,me)}catch(oe){console.warn(`Main_View: extractSelectedRegion - Failed to fetch channel ${ye.channelIndex}`,oe)}}if(me){Y=me;break}}if(!Y)return console.warn("Main_View: extractSelectedRegion - Failed to obtain data for ANY visible channel"),null;const{metadata:te}=Y,q=te.shape,[Q,Z,J]=q,de=Math.max(Q,Z,J),le=J/de,ae=Z/de,Pe=Q/de/4;let ge=Math.max(0,Math.floor((b.min.x/le+1)/2*J)),_e=Math.min(J-1,Math.ceil((b.max.x/le+1)/2*J)),Te=Math.max(0,Math.floor((b.min.y/ae+1)/2*Z)),pe=Math.min(Z-1,Math.ceil((b.max.y/ae+1)/2*Z)),De=Math.max(0,Math.floor((b.min.z/Pe+1)/2*Q)),V=Math.min(Q-1,Math.ceil((b.max.z/Pe+1)/2*Q));return ge>_e&&([ge,_e]=[_e,ge]),Te>pe&&([Te,pe]=[pe,Te]),De>V&&([De,V]=[V,De]),_e===ge&&(_e=Math.min(J-1,ge+1)),pe===Te&&(pe=Math.min(Z-1,Te+1)),V===De&&(V=Math.min(Q-1,De+1)),y.bounds={min:{x:ge,y:Te,z:De},max:{x:_e,y:pe,z:V}},y.scaling={scaleX:le,scaleY:ae,scaleZ:Pe,xSize:J,ySize:Z,zSize:Q},console.log(`Main_View: Calculated voxel bounds: X[${ge}, ${_e}], Y[${Te}, ${pe}], Z[${De}, ${V}]`),console.log(`Main_View: Bounds size: ${_e-ge+1} x ${pe-Te+1} x ${V-De+1} voxels`),F.forEach(ye=>{y.channels.push({channelIndex:ye.channelIndex,color:ye.color,thresholdMin:ye.thresholdMin,thresholdMax:ye.thresholdMax,opacity:ye.opacity})}),console.log(`Main_View: Added ${y.channels.length} channels to selection`),y},[t]),be=ne.useCallback(async b=>{if(!b){console.warn("Main_View: Invalid world bounds");return}I.current=b,console.log("Main_View: ===== SELECTION COMPLETED ====="),console.log("Main_View: 3D Cuboid selection completed"),console.log("Main_View: World bounds:",b),console.log("Main_View: Cuboid center:",b.center),console.log("Main_View: Cuboid size:",b.size),console.log("Main_View: Current channels:",t),console.log("Main_View: onSelectionChange callback exists:",!!n);try{const y=await ve(b);y?(console.log("Main_View: ✓ Extracted selected region data:",y),console.log("Main_View: Voxel bounds:",y.bounds),console.log("Main_View: Channels count:",y.channels.length),console.log("Main_View: Channels:",y.channels),console.log("Main_View: Scaling factors:",y.scaling),n?n(y):console.warn("Main_View: onSelectionChange prop is missing")):(console.error("Main_View: ✗ Failed to extract selected region data"),console.error("Main_View: World bounds were:",b),console.error("Main_View: Visible channels:",t.filter(F=>F.visible!==!1)))}catch(y){console.error("Main_View: Error in handleSelectionComplete:",y),console.error("Main_View: Error stack:",y.stack)}},[t,n,ve]);ne.useEffect(()=>{if(I.current){console.log("Main_View: Channels changed, triggering selection refresh...");const b=setTimeout(()=>{be(I.current)},200);return()=>clearTimeout(b)}else console.log("Main_View: No currentSelectionBoundsRef to refresh")},[t,be]),ne.useEffect(()=>{i&&!I.current&&(console.log("Main_View: Restoring selection from initial bounds:",i),I.current=i,O(!0),s.current&&(ze(i),fe(i.center),xe(i.size)),be(i))},[i,be]),ne.useEffect(()=>{if(!s.current)return;const b=s.current,y=T.current,F=A.current,Y=(Q,Z)=>{if(!Q||!Z)return!1;const J=1e-4,de=Q.center&&Z.center&&Math.abs(Q.center.x-Z.center.x)<J&&Math.abs(Q.center.y-Z.center.y)<J&&Math.abs(Q.center.z-Z.center.z)<J,le=Q.size&&Z.size&&Math.abs(Q.size.x-Z.size.x)<J&&Math.abs(Q.size.y-Z.size.y)<J&&Math.abs(Q.size.z-Z.size.z)<J;return de&&le},te=r.filter(Q=>Q.worldBounds).map(Q=>Q.worldBounds),q=[];y.forEach((Q,Z)=>{if(!Q||Q.userData.isTemporary)return;const J=Q.userData.worldBounds;if(!J)return;te.some(le=>Y(J,le))||q.push({wireframe:Q,index:Z})}),q.forEach(({wireframe:Q,index:Z})=>{try{b.children.includes(Q)&&b.remove(Q),Q.geometry&&Q.geometry.dispose(),Q.material&&Q.material.dispose(),y.splice(Z,1),F.delete(Q),console.log("Main_View: Removed wireframe for deleted region")}catch(J){console.error("Main_View: Error removing wireframe:",J)}}),q.length>0&&Ee()},[r,Ee]),ne.useEffect(()=>{if(!o.current)return;const b=o.current,y=b.clientWidth,F=b.clientHeight,Y=new tp;s.current=Y;const te=new an(75,y/F,.1,1e3);a.current=te,W();const q=new ru({antialias:!0,alpha:!1,powerPreference:"high-performance"});q.setSize(y,F),q.setClearColor(0),q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.outputColorSpace!==void 0&&(q.outputColorSpace=At),b.appendChild(q.domElement),l.current=q,q.capabilities.isWebGL2,d.current=null,console.log("Main_View: MSAA not available, using post-process AA");const Q=new hA(q),Z=new pA(Y,te);Q.addPass(Z);let J=null;try{J=new gA(y*q.getPixelRatio(),F*q.getPixelRatio()),Q.addPass(J),console.log("Main_View: SMAA pass enabled")}catch(Me){console.warn("Main_View: SMAA unavailable, falling back to FXAA",Me),J=new M_(mA),J.material.uniforms.resolution.value.set(1/y,1/F),Q.addPass(J),console.log("Main_View: FXAA pass enabled")}c.current=Q,f.current=J,Y.add(new rp(16777215,1));let de=!1,le=!1,ae=0,Pe=0,ge=null,_e=.1;const Te=Me=>{try{if(console.log("Main_View: Mouse down - selectionMode:",g.current,"button:",Me.button),g.current&&Me.button===0){if(console.log("Main_View: Starting 3D cuboid selection..."),!l.current||!l.current.domElement){console.error("Main_View: Renderer not initialized");return}const Ae=l.current.domElement.getBoundingClientRect();if(ge={x:Me.clientX,y:Me.clientY},G(!0),X(ge),D(ge),_e=H,console.log("Main_View: Selection started at:",ge,"depth:",_e),E.current&&E.current.userData.isTemporary&&s.current)try{s.current.remove(E.current),E.current.geometry&&E.current.geometry.dispose(),E.current.material&&E.current.material.dispose(),E.current=null}catch(tt){console.error("Main_View: Error clearing temporary cuboid:",tt)}}else Me.button===0&&(de=!0),Me.button===2&&(le=!0),ae=Me.clientX,Pe=Me.clientY}catch(Ae){console.error("Main_View: Error in handleMouseDown:",Ae)}},pe=Me=>{try{if(console.log("Main_View: Mouse up - selectionMode:",g.current,"selectionStartPos:",ge),g.current&&ge){const Ae=Me.clientX,tt=Me.clientY;console.log("Main_View: Selection completed - start:",ge,"end:",{x:Ae,y:tt},"depth:",_e);const We=He(ge.x,ge.y,Ae,tt,_e);if(console.log("Main_View: World bounds from selection:",We),We)try{if(E.current&&E.current.userData.isTemporary)try{s.current&&s.current.children.includes(E.current)&&s.current.remove(E.current),E.current.geometry&&E.current.geometry.dispose(),E.current.material&&E.current.material.dispose(),E.current=null}catch(it){console.error("Main_View: Error removing temporary wireframe:",it)}ze(We,!1),console.log("Main_View: Calling handleSelectionComplete..."),be(We).catch(it=>{console.error("Main_View: Error in handleSelectionComplete:",it)}),console.log("Main_View: Auto-disabling selection mode after box completion"),O(!1)}catch(it){console.error("Main_View: Error updating cuboid wireframe:",it)}else console.warn("Main_View: No world bounds calculated from selection");G(!1),X(null),D(null),ge=null}else de=!1,le=!1}catch(Ae){console.error("Main_View: Error in handleMouseUp:",Ae),G(!1),de=!1,le=!1}},De=Me=>{try{if(g.current&&ge){D({x:Me.clientX,y:Me.clientY});const Ae=He(ge.x,ge.y,Me.clientX,Me.clientY,_e);if(Ae)try{ze(Ae,!0),fe(Ae.center),xe(Ae.size)}catch(tt){console.error("Main_View: Error updating wireframe:",tt)}}else{const Ae=ue.current;de&&(Ae.rotation.y+=(Me.clientX-ae)*.01,Ae.rotation.x=xo(Ae.rotation.x+(Me.clientY-Pe)*.01,-Math.PI/2+.01,Math.PI/2-.01),W(),Oe()),le&&(Ae.panOffset.x+=(Me.clientX-ae)*.001,Ae.panOffset.y-=(Me.clientY-Pe)*.001,W())}ae=Me.clientX,Pe=Me.clientY}catch(Ae){console.error("Main_View: Error in handleMouseMove:",Ae)}},V=Me=>{try{if(g.current&&R.current&&ge){Me.preventDefault();const Ae=Me.deltaY*1e-4;_e=Math.max(.01,Math.min(1,_e+Ae)),ee(_e);const tt=M.current||ge,We=He(ge.x,ge.y,tt.x||ge.x,tt.y||ge.y,_e);if(We)try{ze(We,!0),fe(We.center),xe(We.size)}catch(it){console.error("Main_View: Error updating wireframe on wheel:",it)}}else if(g.current&&T.current.length>0){Me.preventDefault();const Ae=Me.deltaY*.001,tt=T.current[T.current.length-1];tt&&!tt.userData.isTemporary&&(tt.position.z+=Ae,w.current&&(w.current.center.z+=Ae,w.current.min.z+=Ae,w.current.max.z+=Ae))}else{const Ae=ue.current,tt=1+Me.deltaY*.001,We=Ae.distance;if(Ae.distance*=tt,Ae.distance=xo(Ae.distance,.1,20),a.current&&l.current){const it=l.current.domElement.getBoundingClientRect(),Ht=(Me.clientX-it.left)/it.width*2-1,gr=-((Me.clientY-it.top)/it.height)*2+1,yt=new Fd;yt.setFromCamera(new qe(Ht,gr),a.current);const zn=(We-Ae.distance)*.3,fi=yt.ray.direction.clone().normalize();Ae.panOffset.x+=fi.x*zn,Ae.panOffset.y+=fi.y*zn,Ae.panOffset.z+=fi.z*zn}W(),Oe()}}catch(Ae){console.error("Main_View: Error in handleWheel:",Ae)}},ye=Me=>Me.preventDefault(),me=Me=>{const Ae=Me.key.toLowerCase();v.current[Ae]=!0,v.current[Me.code.toLowerCase()]=!0},oe=Me=>{const Ae=Me.key.toLowerCase();v.current[Ae]=!1,v.current[Me.code.toLowerCase()]=!1};q.domElement.addEventListener("mousedown",Te),q.domElement.addEventListener("mouseup",pe),q.domElement.addEventListener("mousemove",De),q.domElement.addEventListener("wheel",V),q.domElement.addEventListener("contextmenu",ye),q.domElement.setAttribute("tabindex","0"),q.domElement.style.outline="none",q.domElement.addEventListener("click",()=>{q.domElement.focus()}),window.addEventListener("keydown",me),window.addEventListener("keyup",oe);const he=()=>{Fe(),Ee(),u.current=requestAnimationFrame(he)};u.current=requestAnimationFrame(he);const ke=()=>{var tt,We;const Me=b.clientWidth,Ae=b.clientHeight;te.aspect=Me/Ae,te.updateProjectionMatrix(),q.setSize(Me,Ae),c.current&&c.current.setSize(Me,Ae),d.current&&d.current.setSize(Me,Ae),f.current&&(typeof f.current.setSize=="function"?f.current.setSize(Me*q.getPixelRatio(),Ae*q.getPixelRatio()):(We=(tt=f.current.material)==null?void 0:tt.uniforms)!=null&&We.resolution&&f.current.material.uniforms.resolution.value.set(1/Me,1/Ae))};return window.addEventListener("resize",ke),()=>{u.current&&cancelAnimationFrame(u.current),window.removeEventListener("resize",ke),window.removeEventListener("keydown",me),window.removeEventListener("keyup",oe),q.domElement.removeEventListener("mousedown",Te),q.domElement.removeEventListener("mouseup",pe),q.domElement.removeEventListener("mousemove",De),q.domElement.removeEventListener("wheel",V),q.domElement.removeEventListener("contextmenu",ye),p.current.forEach(vo),p.current=[],x.current.clear(),_.current.clear(),m.current.clear(),h.current={lastSampling:null,lastUpdate:0},T.current.forEach(Me=>{if(Me&&s.current)try{s.current.children.includes(Me)&&s.current.remove(Me),Me.geometry&&Me.geometry.dispose(),Me.material&&Me.material.dispose()}catch(Ae){console.error("Main_View: Error disposing wireframe:",Ae)}}),T.current=[],d.current&&(d.current.dispose(),d.current=null),c.current=null,f.current=null,b.contains(q.domElement)&&b.removeChild(q.domElement),q.dispose()}},[Fe,Ee,W,Oe,be]),ne.useEffect(()=>{const b=s.current;if(!b)return;if(t.length===0){const Q=x.current;Q.forEach(Z=>{const J=Z==null?void 0:Z.mesh;J&&b.children.includes(J)&&b.remove(J),vo(J)}),Q.clear(),_.current.clear(),m.current.clear(),p.current=[],Ee();return}const y=x.current,F=_.current,Y=new Map;t.forEach(Q=>{Y.set(Q.channelIndex,Q)});let te=!1;y.forEach((Q,Z)=>{const J=Y.get(Z);if(J){const de=J.visible!==!1,le=Q==null?void 0:Q.mesh;le&&b.children.includes(le)&&!de&&(b.remove(le),te=!0,console.log(`Main_View: ⚠️ Channel ${Z} removed from scene (not visible)`))}else{const de=Q==null?void 0:Q.mesh;de&&b.children.includes(de)&&(b.remove(de),te=!0),vo(de),yl(de,p.current),y.delete(Z),F.delete(Z),console.log(`Main_View: 🗑️ Removed channel ${Z} (no longer selected)`)}}),te&&Ee(),m.current.clear(),t.forEach(Q=>{const Z=Q.channelIndex;m.current.set(Z,Q);const J=y.get(Z);F.get(Z);let de=(J==null?void 0:J.mesh)??null;const le=_o(Q),ae=(J==null?void 0:J.configSignature)!==le;if(J&&ae&&(de&&b.children.includes(de)&&b.remove(de),vo(de),yl(de,p.current),y.delete(Z),F.delete(Z),de=null,console.log(`Main_View:  Channel ${Z} flagged for reload due to configuration change`)),de){const Pe=Q.visible!==!1,ge=b.children.includes(de);Pe&&!ge?(b.add(de),console.log(`Main_View:  Channel ${Z} turned ON`),Ee()):!Pe&&ge&&(b.remove(de),console.log(`Main_View:  Channel ${Z} turned OFF`),Ee())}}),(async()=>{var de;const Q=t.filter(le=>le.visible!==!1),Z=Q.filter(le=>!y.has(le.channelIndex));if(Z.length===0){Ee();return}console.log(`Main_View: Loading ${Z.length} channel(s)`);for(const le of Z)if(le.visible!==!1){try{const ae=m.current.get(le.channelIndex);if(!ae||_o(ae)!==_o(le)){console.log(`Main_View:  Skipping stale load for channel ${le.channelIndex}`);continue}let Pe=F.get(le.channelIndex);Pe||(Pe=await zr(le.channelIndex),Pe&&F.set(le.channelIndex,Pe));const ge=m.current.get(le.channelIndex);if(!ge||_o(ge)!==_o(le)){console.log(`Main_View:  Loaded data discarded for channel ${le.channelIndex} (stale)`);continue}if(!Pe)continue;const _e=Se(((de=ue.current)==null?void 0:de.distance)||3),Te=Re(Pe,le,_e);if(Te){const{mesh:pe,sampling:De}=Te;y.set(le.channelIndex,{mesh:pe,sampling:De,lastRequestedSampling:_e,configSignature:_o(le)}),h.current.lastSampling=De,p.current.push(pe),le.visible!==!1?(b.add(pe),pe.renderOrder=1,console.log(`Main_View:  Channel ${le.channelIndex} added (sampling=${De})`)):console.log(`Main_View:  Channel ${le.channelIndex} prepared but not visible`),Ee()}else console.warn(`Main_View:  Channel ${le.channelIndex} produced no voxels`)}catch(ae){console.error(`Main_View:  Error loading channel ${le.channelIndex}:`,ae)}await new Promise(ae=>setTimeout(ae,100))}const J=Q.filter(le=>{const ae=y.get(le.channelIndex);return(ae==null?void 0:ae.mesh)&&b.children.includes(ae.mesh)}).length;console.log(`Main_View: Channel update complete. Visible ${J}/${Q.length}`),Ee(),P(le=>le+1)})()},[t,Re,Se,zr,Ee]);const Ye=(()=>{try{if(!ce||!w.current)return null;const b=t.filter(ke=>ke.visible!==!1);if(b.length===0)return null;const y=b[0],F=_.current.get(y.channelIndex);if(!F)return null;const{metadata:Y}=F,[te,q,Q]=Y.shape,Z=Math.max(te,q,Q),J=Q/Z,de=q/Z,le=te/Z/4,ae=w.current.min,Pe=w.current.max;if(!ae||!Pe)return null;let ge=Math.max(0,Math.floor((ae.x/J+1)/2*Q)),_e=Math.min(Q-1,Math.ceil((Pe.x/J+1)/2*Q)),Te=Math.max(0,Math.floor((ae.y/de+1)/2*q)),pe=Math.min(q-1,Math.ceil((Pe.y/de+1)/2*q)),De=Math.max(0,Math.floor((ae.z/le+1)/2*te)),V=Math.min(te-1,Math.ceil((Pe.z/le+1)/2*te));ge>_e&&([ge,_e]=[_e,ge]),Te>pe&&([Te,pe]=[pe,Te]),De>V&&([De,V]=[V,De]);const ye=_e-ge+1,me=pe-Te+1,oe=V-De+1,he=1;return{width:(ye*he).toFixed(1),height:(me*he).toFixed(1),depth:(oe*he).toFixed(1),volume:(ye*me*oe*he*he*he).toFixed(1)}}catch(b){return console.error("Main_View: Error calculating cuboid dimensions:",b),null}})();return z.jsxs("div",{style:{height:"100%",width:"100%",position:"relative",backgroundColor:"#000000",overflow:"hidden",boxSizing:"border-box"},children:[z.jsx("div",{ref:o,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,overflow:"hidden"}}),z.jsx("button",{onClick:b=>{if(b.preventDefault(),b.stopPropagation(),S.current){console.log("Main_View: Toggle already in progress, ignoring click");return}try{S.current=!0;const y=!C;console.log("Main_View: Selection mode toggled:",y),O(y),!y&&E.current&&s.current?requestAnimationFrame(()=>{try{s.current&&E.current&&(s.current.children.includes(E.current)&&s.current.remove(E.current),E.current.geometry&&E.current.geometry.dispose(),E.current.material&&E.current.material.dispose(),E.current=null,w.current=null,fe(null),xe(null),I.current=null)}catch(F){console.error("Main_View: Error clearing cuboid:",F)}finally{S.current=!1}}):S.current=!1}catch(y){console.error("Main_View: Error toggling selection mode:",y),S.current=!1;try{O(!C)}catch(F){console.error("Main_View: Failed to update state:",F)}}},style:{position:"absolute",top:"10px",right:"10px",zIndex:1e3,padding:"8px 16px",backgroundColor:C?"#4CAF50":"#555",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px",fontWeight:"bold",boxShadow:"0 2px 4px rgba(0,0,0,0.3)",transition:"background-color 0.2s"},title:C?"Click to disable 3D selection":"Click to enable 3D selection",children:C?"✓ 3D Selection":"3D Selection"}),z.jsx("button",{onClick:Le,style:{position:"absolute",bottom:"20px",right:"10px",zIndex:1e3,padding:"8px 14px",backgroundColor:"#555",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",fontWeight:"500",boxShadow:"0 2px 4px rgba(0,0,0,0.3)",transition:"background-color 0.2s",display:"flex",alignItems:"center",gap:"6px"},onMouseEnter:b=>b.target.style.backgroundColor="#666",onMouseLeave:b=>b.target.style.backgroundColor="#555",title:"Reset camera to initial view",children:"↺ Reset View"}),C&&!B&&!Ye&&z.jsxs("div",{style:{position:"absolute",top:"60px",right:"10px",zIndex:1e3,backgroundColor:"rgba(45, 127, 249, 0.9)",color:"white",padding:"10px 14px",borderRadius:"6px",fontSize:"14px",maxWidth:"220px",boxShadow:"0 4px 12px rgba(0,0,0,0.4)",lineHeight:"1.5"},children:[z.jsx("div",{style:{fontWeight:"bold",marginBottom:"6px"},children:" How to Select:"}),z.jsxs("div",{children:["• ",z.jsx("strong",{children:"Click & drag"})," to draw selection box"]}),z.jsxs("div",{children:["• ",z.jsx("strong",{children:"Scroll"})," while drawing to adjust Z-depth"]}),z.jsx("div",{children:"• Release to confirm selection"})]}),C&&Ye&&z.jsxs("div",{style:{position:"absolute",top:"60px",right:"10px",zIndex:1e3,backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white",padding:"10px",borderRadius:"4px",fontSize:"12px",fontFamily:"monospace",minWidth:"200px"},children:[z.jsx("div",{style:{fontWeight:"bold",marginBottom:"5px",borderBottom:"1px solid #555",paddingBottom:"5px"},children:"3D Cuboid Selection"}),z.jsxs("div",{children:["Width: ",Ye.width," μm"]}),z.jsxs("div",{children:["Height: ",Ye.height," μm"]}),z.jsxs("div",{children:["Depth: ",Ye.depth," μm"]}),z.jsxs("div",{style:{marginTop:"5px",borderTop:"1px solid #555",paddingTop:"5px"},children:["Volume: ",Ye.volume," μm³"]}),B&&z.jsx("div",{style:{marginTop:"5px",color:"#00ff00",fontSize:"11px"},children:"Scroll to adjust Z-depth"})]}),e.length>0&&z.jsx("div",{style:{position:"absolute",top:"16px",left:"16px",background:"rgba(0, 0, 0, 0.65)",border:"1px solid rgba(255, 255, 255, 0.18)",borderRadius:"8px",padding:"12px 14px",color:"#FFFFFF",pointerEvents:"none",backdropFilter:"blur(6px)",maxWidth:"260px",display:"flex",flexDirection:"column",gap:"10px"},children:e.map(b=>z.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[z.jsx("div",{style:{fontSize:"14px",fontWeight:600},children:b.title}),b.topMarkers.map(y=>z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"12px",lineHeight:1.4},children:[z.jsx("span",{style:{width:"12px",height:"12px",borderRadius:"3px",backgroundColor:y.color,border:"1px solid rgba(255,255,255,0.25)",flexShrink:0}}),z.jsx("span",{children:y.name})]},`${b.id}-${y.name}`))]},`hud-${b.id}`))})]})},Af=.35,bA=1.3,TA=.99,Cf=.1,r0=(t,e,n)=>Math.min(Math.max(t,e),n),o0=({selectedRegionData:t,channels:e=[],onCloseTab:n,regionId:i})=>{const r=ne.useRef(null),o=ne.useRef(null),s=ne.useRef(null),a=ne.useRef(null),l=ne.useRef(null),c=ne.useRef([]),f=ne.useRef(null),d=ne.useRef(null),[u,p]=ne.useState(0),[x,_]=ne.useState(!1);ne.useEffect(()=>{console.log("LocalViewContent: Props received - selectedRegionData:",t),console.log("LocalViewContent: Props received - channels:",e)},[t,e]);const m=ne.useRef({rotation:{x:.5,y:.5},distance:.3,panOffset:{x:0,y:0,z:0}}),h=ne.useRef(null),v=ne.useRef(null),g=(S,I,N,P,C=null,O=null)=>{const{data:B,metadata:G}=S,{color:U,thresholdMin:X,thresholdMax:k}=I,D=G.shape,[H,ee,se]=D;console.log(`Local_View: Creating visualization for channel ${I.channelIndex}`),console.log(`Local_View: Shape: [${H}, ${ee}, ${se}], Bounds:`,N);const fe=G.dataRange||[0,65535],ce=fe[0],xe=fe[1];let ue=X!==void 0?X:ce,Se=k!==void 0?k:xe;ue>Se&&([ue,Se]=[Se,ue]),ue=Math.max(ce,Math.min(xe,ue)),Se=Math.max(ce,Math.min(xe,Se)),console.log(`Local_View: Threshold range: [${ue}, ${Se}], Data range: [${ce}, ${xe}]`);const Re=U.replace("#",""),Ee=parseInt(Re.substr(0,2),16)/255,W=parseInt(Re.substr(2,2),16)/255,Oe=parseInt(Re.substr(4,2),16)/255,Le=[],Fe=[];let Ne,He,ze;if(C)Ne=C.scaleX,He=C.scaleY,ze=C.scaleZ,console.log(`Local_View: Using scaling factors from Main_View: scaleX=${Ne}, scaleY=${He}, scaleZ=${ze}`);else{const ge=Math.max(H,ee,se);Ne=se/ge,He=ee/ge,ze=H/ge/4,console.log(`Local_View: Calculated scaling factors: scaleX=${Ne}, scaleY=${He}, scaleZ=${ze}`)}const ve=1,be=Math.max(0,Math.floor(N.min.x)),Qe=Math.min(se-1,Math.ceil(N.max.x)),Ye=Math.max(0,Math.floor(N.min.y)),b=Math.min(ee-1,Math.ceil(N.max.y)),y=Math.max(0,Math.floor(N.min.z)),F=Math.min(H-1,Math.ceil(N.max.z));if(console.log(`Local_View: Voxel bounds: X[${be}, ${Qe}], Y[${Ye}, ${b}], Z[${y}, ${F}]`),be>Qe||Ye>b||y>F)return console.warn(`Local_View: Invalid bounds for channel ${I.channelIndex}`),null;let Y=0,te=0;const q=2/se*Ne*Math.max(1,ve),Q=2/ee*He*Math.max(1,ve),Z=2/H*ze*Math.max(1,ve);console.log(`Local_View: Voxel step sizes (1:1 with Main_View): X=${q.toFixed(6)}, Y=${Q.toFixed(6)}, Z=${Z.toFixed(6)}`),console.log(`Local_View: Using sampling=${ve} (full resolution)`);for(let ge=y;ge<=F;ge+=ve)for(let _e=Ye;_e<=b;_e+=ve)for(let Te=be;Te<=Qe;Te+=ve){const pe=ge*ee*se+_e*se+Te;if(pe>=B.length){console.warn(`Local_View: Index ${pe} out of bounds (data length: ${B.length})`);continue}const V=B[pe]/255*(xe-ce)+ce;if(V>=ue&&V<=Se){te++;let ye=(Te/se*2-1)*Ne,me=(_e/ee*2-1)*He,oe=(ge/H*2-1)*ze;ye=-ye;const he=(Math.random()-.5)*q*Cf,ke=(Math.random()-.5)*Q*Cf,Me=(Math.random()-.5)*Z*Cf;O&&(ye-=O.x,me-=O.y,oe-=O.z),Le.push(ye+he,me+ke,oe+Me);const Ae=Math.max(1,Se-ue),tt=(V-ue)/Ae,We=r0(tt,0,1),it=Af+(1-Af)*We*bA;Fe.push(r0(it,Af,1)),Y++}}console.log(`Local_View: Extracted ${Y} points (${te} passed threshold) from ${(Qe-be+1)*(b-Ye+1)*(F-y+1)} voxels`);const J=Le.length/3;if(J===0)return console.warn(`Local_View: No points extracted for channel ${I.channelIndex}`),null;const de=new Ii(q,Q,Z),le=new y_;le.copy(de),de.dispose(),le.instanceCount=J,le.setAttribute("instanceOffset",new Tc(new Float32Array(Le),3)),le.setAttribute("instanceOpacity",new Tc(new Float32Array(Fe),1));const ae=new pn({uniforms:{color:{value:new $e(Ee,W,Oe)},edgeFeather:{value:TA}},vertexShader:`
        attribute vec3 instanceOffset;
        attribute float instanceOpacity;
        varying float vOpacity;
        varying vec3 vLocalPos;
        void main() {
          vOpacity = instanceOpacity;
          vec3 transformed = position + instanceOffset;
          vLocalPos = position;
          vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 color;
        uniform float edgeFeather;
        varying float vOpacity;
        varying vec3 vLocalPos;
        void main() {
          float base = clamp(vOpacity, 0.0, 1.0);
          float edge = max(max(abs(vLocalPos.x), abs(vLocalPos.y)), abs(vLocalPos.z));
          float edgeFade = smoothstep(0.5 - edgeFeather, 0.5, edge);
          base *= (1.0 - edgeFade);
          if (base <= 0.01) discard;
          
          // Match Main_View color processing
          vec3 finalColor = pow(color, vec3(0.55));
          
          // Additive blending expects pre-multiplied alpha
          gl_FragColor = vec4(finalColor * base, base);
        }
      `,transparent:!0,depthWrite:!1,depthTest:!1,blending:vc}),Pe=new Sn(le,ae);return Pe.frustumCulled=!1,Pe.userData={channelIndex:I.channelIndex},Pe},w=ne.useCallback(()=>{if(!s.current)return;const S=m.current,I=new j(S.panOffset.x||0,S.panOffset.y||0,S.panOffset.z||0),N=S.distance,P=S.rotation.y,C=S.rotation.x;s.current.position.x=I.x+N*Math.sin(P)*Math.cos(C),s.current.position.y=I.y+N*Math.sin(C),s.current.position.z=I.z+N*Math.cos(P)*Math.cos(C),s.current.up.set(0,-1,0),s.current.lookAt(I)},[]),E=ne.useCallback(()=>{},[]),T=async(S,I=null)=>{if(!o.current||!S||!S.bounds){console.log("Local_View: Invalid selected data",S);return}let N=I&&I.length>0?I:S.channels;if((!N||N.length===0)&&(console.log("Local_View: No current channels provided, falling back to stored channels"),N=S.channels||[]),console.log(`Local_View: Using ${N.length} channel(s) for visualization`),N.length===0){console.log("Local_View: No channels available"),c.current.forEach(y=>{o.current.remove(y),y.geometry&&y.geometry.dispose(),y.material&&y.material.dispose()}),c.current=[],p(0);return}const P=N.filter(y=>y.visible!==!1);if(P.length===0){console.log("Local_View: No visible channels"),c.current.forEach(y=>{o.current.remove(y),y.geometry&&y.geometry.dispose(),y.material&&y.material.dispose()}),c.current=[],p(0);return}console.log("Local_View: Creating visualization for selected region",S),console.log(`Local_View: Using ${P.length} visible channel(s) (${I?"current":"stored"} channels)`);const C=o.current;for(let y=C.children.length-1;y>=0;y--){const F=C.children[y];(F.isMesh||F.isLineSegments||F.isAxesHelper)&&(C.remove(F),F.geometry&&F.geometry.dispose(),F.material&&F.material.dispose())}c.current=[],f.current=null,d.current=null,f.current&&(C.remove(f.current),f.current.geometry&&f.current.geometry.dispose(),f.current.material&&f.current.material.dispose(),f.current=null),d.current&&(C.remove(d.current),d.current=null);const{bounds:O,scaling:B}=S;let G=null,U=null;for(const y of P)try{const F=await zr(y.channelIndex);if(F){G=y,U=F;break}}catch(F){console.warn(`Local_View: Failed to load channel ${y.channelIndex} for reference`,F)}if(!U){console.warn("Local_View: Failed to load data for ANY visible channel - cannot create visualization");return}const{metadata:X}=U,[k,D,H]=X.shape;let ee,se,fe;if(B)ee=B.scaleX,se=B.scaleY,fe=B.scaleZ,console.log("Local_View: Using scaling factors from Main_View for bounding box");else{const y=Math.max(k,D,H);ee=H/y,se=D/y,fe=k/y/4,console.log("Local_View: Calculated scaling factors for bounding box")}const ce=O.max.x-O.min.x+1,xe=O.max.y-O.min.y+1,ue=O.max.z-O.min.z+1,Se=(O.min.x+O.max.x)/2,Re=(O.min.y+O.max.y)/2,Ee=(O.min.z+O.max.z)/2,W={x:-(Se/H*2-1)*ee,y:(Re/D*2-1)*se,z:(Ee/k*2-1)*fe},Oe={x:ce/H*2*ee,y:xe/D*2*se,z:ue/k*2*fe};console.log("Local_View: Bounding box center",W,"size",Oe),console.log("Local_View: Bounds dimensions (voxels)",ce,xe,ue),console.log("Local_View: Using exact same scaling as Main_View - maintaining 1:1 spatial scale");const Le=new Ii(Oe.x,Oe.y,Oe.z),Fe=new v_(Le),Ne=new ou({color:16776960,linewidth:2}),He=new np(Fe,Ne);He.position.set(W.x,W.y,W.z),C.add(He),f.current=He;let ze=0,ve=0;const be={x:W.x,y:W.y,z:W.z};console.log(`Local_View: Center offset to apply: (${be.x.toFixed(4)}, ${be.y.toFixed(4)}, ${be.z.toFixed(4)})`),console.log(`Local_View: Processing ${P.length} visible channel(s)`);for(const y of P)try{console.log(`Local_View: Loading channel ${y.channelIndex}...`);const F=await zr(y.channelIndex);if(!F){console.warn(`Local_View: Failed to load channel ${y.channelIndex}`);continue}console.log(`Local_View: Channel ${y.channelIndex} loaded, creating visualization...`);const Y=g(F,y,O,C,B,be);Y?(console.log(`Local_View: Mesh created for channel ${y.channelIndex}, adding to scene...`),Y.visible=!0,Y.frustumCulled=!1,C.add(Y),c.current.push(Y),ze++,ve+=Y.geometry.instanceCount,console.log(`Local_View: ✓ Added mesh for channel ${y.channelIndex} with ${Y.geometry.instanceCount} instances`),console.log("Local_View: Mesh position:",Y.position),console.log("Local_View: Mesh visible:",Y.visible),console.log("Local_View: Mesh in scene:",C.children.includes(Y))):console.warn(`Local_View: ✗ No mesh created for channel ${y.channelIndex} (no points in bounds)`)}catch(F){console.error(`Local_View: Error processing channel ${y.channelIndex}:`,F),console.error("Local_View: Error stack:",F.stack)}p(ve),console.log(`Local_View: Created ${ze} meshes`);const Qe=Math.max(Oe.x,Oe.y,Oe.z)*.3,Ye=new aA(Qe);Ye.position.set(W.x,W.y,W.z),C.add(Ye),d.current=Ye,f.current&&f.current.position.set(0,0,0),d.current&&d.current.position.set(0,0,0),m.current.panOffset={x:0,y:0,z:0};const b=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(Oe.z));if(b>0&&Number.isFinite(b)){const y=60*Math.PI/180,F=2,Y=b/2/Math.tan(y/2);m.current.distance=Y*F,m.current.distance=Math.max(.1,Math.min(10,m.current.distance))}else m.current.distance=.5;m.current.rotation={x:.5,y:.5},console.log(`Local_View: Geometry centered at origin (offset: ${be.x.toFixed(4)}, ${be.y.toFixed(4)}, ${be.z.toFixed(4)})`),console.log(`Local_View: Camera distance: ${m.current.distance.toFixed(4)} (based on max dimension: ${b.toFixed(4)})`),h.current={rotation:{...m.current.rotation},distance:m.current.distance,panOffset:{...m.current.panOffset}},w(),E(),a.current&&s.current&&o.current&&(w(),E(),a.current.render(o.current,s.current),requestAnimationFrame(()=>{a.current&&s.current&&o.current&&(w(),E(),a.current.render(o.current,s.current),setTimeout(()=>{a.current&&s.current&&o.current&&a.current.render(o.current,s.current)},50))})),console.log("Local_View: Camera positioned at distance",m.current.distance,"looking at",W),console.log(`Local_View: Visualization complete - ${ze} meshes added to scene, ${ve} total cells`),console.log(`Local_View: Scene children count: ${o.current.children.length}`),console.log(`Local_View: Voxel meshes count: ${c.current.length}`),console.log("Local_View: Renderer exists:",!!a.current),console.log("Local_View: Camera exists:",!!s.current),c.current.forEach((y,F)=>{console.log(`Local_View: Mesh ${F}: visible=${y.visible}, position=`,y.position,`instances=${y.geometry.instanceCount}, inScene=${o.current.children.includes(y)}`)}),a.current&&a.current.domElement&&(console.log(`Local_View: Renderer canvas size: ${a.current.domElement.width}x${a.current.domElement.height}`),console.log("Local_View: Renderer canvas visible:",a.current.domElement.offsetWidth>0&&a.current.domElement.offsetHeight>0))};ne.useEffect(()=>{if(!r.current)return;const S=r.current,I=S.clientWidth,N=S.clientHeight,P=new tp;o.current=P;const C=new an(60,I/N,.001,100);s.current=C,w();const O=new ru({antialias:!0,alpha:!1,powerPreference:"high-performance"});O.setSize(I,N),O.setClearColor(0),O.setPixelRatio(Math.min(window.devicePixelRatio,2)),O.outputEncoding!==void 0&&(O.outputEncoding=lr),O.domElement.style.display="block",O.domElement.style.width="100%",O.domElement.style.height="100%",O.domElement.style.position="absolute",O.domElement.style.top="0",O.domElement.style.left="0",S.appendChild(O.domElement),a.current=O,console.log("Local_View: Renderer initialized, canvas size:",I,"x",N),console.log("Local_View: Canvas element:",O.domElement),console.log("Local_View: Canvas visible:",O.domElement.offsetWidth>0&&O.domElement.offsetHeight>0);const B=new rp(16777215,1);P.add(B);let G=!1,U=0,X=0;const k=xe=>{xe.button===0&&(G=!0,U=xe.clientX,X=xe.clientY)},D=()=>{G=!1},H=xe=>{if(G){const ue=m.current;ue.rotation.y+=(xe.clientX-U)*.01,ue.rotation.x+=(xe.clientY-X)*.01,w(),E()}U=xe.clientX,X=xe.clientY},ee=xe=>{const ue=m.current;ue.distance*=1+xe.deltaY*.001,ue.distance=Math.max(.1,Math.min(5,ue.distance)),w(),E()},se=xe=>xe.preventDefault();O.domElement.addEventListener("mousedown",k),O.domElement.addEventListener("mouseup",D),O.domElement.addEventListener("mousemove",H),O.domElement.addEventListener("wheel",ee),O.domElement.addEventListener("contextmenu",se);const fe=()=>{if(s.current&&o.current&&a.current)try{E(),a.current.render(o.current,s.current)}catch(xe){console.error("Local_View: Error in animation loop:",xe)}l.current=requestAnimationFrame(fe)};if(fe(),console.log("Local_View: Scene initialized, rendering initial frame"),console.log("Local_View: Scene children:",P.children.length),console.log("Local_View: Camera position:",C.position),console.log("Local_View: Camera distance:",m.current.distance),s.current&&o.current&&a.current)try{w(),E(),a.current.render(o.current,s.current)}catch(xe){console.error("Local_View: Error in initial render:",xe)}const ce=()=>{const xe=S.clientWidth,ue=S.clientHeight;C.aspect=xe/ue,C.updateProjectionMatrix(),O.setSize(xe,ue)};return window.addEventListener("resize",ce),()=>{l.current&&cancelAnimationFrame(l.current),window.removeEventListener("resize",ce),O.domElement.removeEventListener("mousedown",k),O.domElement.removeEventListener("mouseup",D),O.domElement.removeEventListener("mousemove",H),O.domElement.removeEventListener("wheel",ee),O.domElement.removeEventListener("contextmenu",se),c.current.forEach(xe=>{xe.geometry&&xe.geometry.dispose(),xe.material&&xe.material.dispose()}),c.current=[],f.current&&(f.current.geometry&&f.current.geometry.dispose(),f.current.material&&f.current.material.dispose()),S&&O.domElement&&S.removeChild(O.domElement),o.current=null,s.current=null,a.current=null}},[w,E]),ne.useEffect(()=>{if(v.current&&(clearTimeout(v.current),v.current=null),!t||!t.bounds){console.log("Local_View: No selected region data, clearing visualization"),o.current&&(c.current.forEach(N=>{o.current.remove(N),N.geometry&&N.geometry.dispose(),N.material&&N.material.dispose()}),c.current=[],p(0));return}let S=[];if(e&&e.length>0&&t.channels&&t.channels.length>0){const N=new Set(t.channels.map(P=>P.channelIndex));console.log("Local_View: Selected channel indices:",Array.from(N)),console.log("Local_View: Current channel indices:",e.map(P=>P.channelIndex)),S=e.filter(P=>N.has(P.channelIndex)),console.log(`Local_View: Matched ${S.length} current channel(s) to selection`),S.length===0&&(console.warn("Local_View: No current channels matched, using stored channels"),S=t.channels||[])}else S=e&&e.length>0?e:t.channels||[],console.log(`Local_View: Using ${S.length} ${e&&e.length>0?"current":"stored"} channel(s)`);if(!S||S.length===0){console.log("Local_View: No channels available, waiting...");return}console.log("Local_View: Updating visualization"),console.log(`Local_View: Using ${S.length} channel(s) - ${e&&e.length>0?"current":"stored"}`),console.log("Local_View: SelectedRegionData:",t),console.log("Local_View: Channels:",S);const I=(N=10)=>{if(!o.current||!a.current||!s.current)if(N>0){console.warn(`Local_View: Scene/renderer not initialized yet, retrying... (${N} retries left)`),setTimeout(()=>I(N-1),200);return}else{console.error("Local_View: Scene/renderer not initialized after retries");return}console.log("Local_View: Creating visualization now..."),T(t,S).catch(P=>{console.error("Local_View: Error creating visualization:",P),console.error("Local_View: Error stack:",P.stack)})};return v.current=setTimeout(()=>{I()},100),()=>{v.current&&(clearTimeout(v.current),v.current=null)}},[t,e]),ne.useEffect(()=>{const S=I=>{if(x){const N=document.getElementById("info-modal"),P=I.target.closest("button");N&&!N.contains(I.target)&&(!P||!P.textContent.includes("ⓘ"))&&_(!1)}};if(x)return setTimeout(()=>{document.addEventListener("mousedown",S)},100),()=>{document.removeEventListener("mousedown",S)}},[x]);const A=S=>{if(n&&i!==void 0&&t){const I=S||{stopPropagation:()=>{}};I.stopPropagation(),n(I,t),console.log("Local_View: Closing tab via Reset View");return}console.log("Local_View: No tabs to close, view will show placeholder")},M=(()=>{if(!t||!t.bounds)return null;const S=t.bounds,I=S.max.x-S.min.x+1,N=S.max.y-S.min.y+1,P=S.max.z-S.min.z+1,C=1,O=I*C,B=N*C,G=P*C,U=O*B*G;return{width:Math.round(O),height:Math.round(B),depth:Math.round(G),volume:Math.round(U)}})();return z.jsxs("div",{style:{height:"100%",width:"100%",backgroundColor:"#000000",border:"1px solid #444",padding:"1px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden",position:"relative"},children:[z.jsxs("h3",{style:{marginTop:0,marginBottom:"5px",fontSize:"14px",color:"white",position:"absolute",top:"5px",left:"10px",zIndex:100,display:"flex",alignItems:"center",gap:"8px"},children:["Local View",t&&M&&z.jsx("button",{onClick:S=>{S.stopPropagation(),_(!x)},style:{background:"transparent",border:"1px solid rgba(255, 255, 255, 0.3)",borderRadius:"50%",width:"20px",height:"20px",cursor:"pointer",color:"#fff",fontSize:"12px",display:"flex",alignItems:"center",justifyContent:"center",padding:0,transition:"all 0.2s",lineHeight:"1"},onMouseEnter:S=>{S.target.style.background="rgba(255, 255, 255, 0.1)",S.target.style.borderColor="rgba(255, 255, 255, 0.5)"},onMouseLeave:S=>{S.target.style.background="transparent",S.target.style.borderColor="rgba(255, 255, 255, 0.3)"},title:"Show selection information",children:"ⓘ"})]}),!t&&z.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#666",fontSize:"12px",textAlign:"center",zIndex:50,pointerEvents:"none"},children:[z.jsx("div",{children:"No selection made"}),z.jsx("div",{style:{fontSize:"10px",marginTop:"5px"},children:"Select a region in Main View"})]}),t&&M&&x&&z.jsxs("div",{id:"info-modal",style:{position:"absolute",top:"40px",left:"10px",backgroundColor:"rgba(20, 20, 20, 0.95)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"6px",padding:"12px",zIndex:1e3,fontSize:"12px",fontFamily:"monospace",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.5)",minWidth:"200px"},onClick:S=>S.stopPropagation(),children:[z.jsx("div",{style:{fontWeight:"bold",marginBottom:"8px",fontSize:"13px",color:"#fff",borderBottom:"1px solid rgba(255, 255, 255, 0.2)",paddingBottom:"6px"},children:"3D Selection Info"}),z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",margin:"4px 0",gap:"16px"},children:[z.jsx("span",{style:{color:"rgba(255, 255, 255, 0.7)"},children:"Dimensions (μm³):"}),z.jsxs("span",{style:{color:"#4ade80",fontWeight:"500"},children:[M.width," × ",M.height," × ",M.depth]})]}),z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",margin:"4px 0",gap:"16px"},children:[z.jsx("span",{style:{color:"rgba(255, 255, 255, 0.7)"},children:"Volume:"}),z.jsxs("span",{style:{color:"#4ade80",fontWeight:"500"},children:[M.volume.toLocaleString()," μm³"]})]}),z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",margin:"4px 0",gap:"16px",borderTop:"1px solid rgba(255, 255, 255, 0.2)",paddingTop:"6px"},children:[z.jsx("span",{style:{color:"rgba(255, 255, 255, 0.7)"},children:"Cells:"}),z.jsx("span",{style:{color:"#4ade80",fontWeight:"500"},children:u.toLocaleString()})]}),z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",margin:"4px 0",gap:"16px"},children:[z.jsx("span",{style:{color:"rgba(255, 255, 255, 0.7)"},children:"Scale:"}),z.jsx("span",{style:{color:"#4ade80",fontWeight:"500",fontStyle:"italic"},children:"1:1 with main view"})]})]}),t&&z.jsx("button",{id:"reset-view-btn",onClick:A,style:{position:"absolute",top:"10px",right:"10px",zIndex:100,padding:"6px 12px",backgroundColor:"#555",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",fontWeight:"bold",boxShadow:"0 2px 4px rgba(0,0,0,0.3)",transition:"all 0.15s ease",transform:"scale(1)"},onMouseEnter:S=>S.target.style.backgroundColor="#666",onMouseLeave:S=>{S.target.style.backgroundColor="#555",S.target.style.transform="scale(1)"},title:"Reset camera view to initial position",children:"Reset View"}),z.jsxs("div",{style:{position:"absolute",bottom:"20px",right:"20px",zIndex:100,display:"flex",flexDirection:"column",alignItems:"flex-end"},children:[z.jsx("div",{style:{width:"60px",height:"2px",backgroundColor:"white",marginBottom:"4px"}}),z.jsx("div",{style:{color:"white",fontSize:"10px"},children:"10 µm"})]}),z.jsx("div",{ref:r,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0}})]})},AA=({selectedRegionsData:t,selectedRegionData:e,channels:n=[],onRegionRemove:i})=>{const r=t||(e?[e]:[]),[o,s]=ne.useState(0),[a,l]=ne.useState(new Set),c=ne.useMemo(()=>{const u=new Map;return r.forEach((p,x)=>{const _=p.id||x;u.set(p,_)}),u},[r]),f=ne.useMemo(()=>r.filter(u=>{const p=c.get(u);return p!==void 0&&!a.has(p)}),[r,a,c]);ne.useEffect(()=>{console.log("Local_View: regionsArray length:",r.length),console.log("Local_View: regionsArray:",r),r.forEach((u,p)=>{console.log(`Local_View: Region ${p}:`,{id:u.id,hasBounds:!!u.bounds,bounds:u.bounds})})},[r]),ne.useEffect(()=>{f.length>0?o>=f.length?s(f.length-1):o<0&&s(0):s(0)},[f.length]);const d=(u,p)=>{u.stopPropagation();const x=c.get(p);if(x===void 0)return;const _=f.findIndex(h=>c.get(h)===x);if(_===-1)return;const m=f.length-1;if(o===_)if(m>0){const h=Math.min(_,m-1);s(h)}else s(0);else o>_&&s(h=>Math.max(0,h-1));l(h=>new Set([...h,x])),i&&i(x)};if(f.length===0)return z.jsx("div",{style:{height:"100%",width:"100%",backgroundColor:"#000000",border:"1px solid #444",padding:"1px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden",position:"relative"},children:z.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#666",fontSize:"12px",textAlign:"center",zIndex:50,pointerEvents:"none"},children:[z.jsx("div",{children:"No selection made"}),z.jsx("div",{style:{fontSize:"10px",marginTop:"5px"},children:"Select a region in Main View"})]})});if(f.length===1){const u=f[0],p=c.get(u);return z.jsx(o0,{selectedRegionData:u,channels:n,onCloseTab:d,regionId:p})}return z.jsxs("div",{style:{height:"100%",width:"100%",backgroundColor:"#000000",border:"1px solid #444",display:"flex",flexDirection:"column",overflow:"hidden"},children:[z.jsx("div",{style:{display:"flex",backgroundColor:"#1a1a1a",borderBottom:"1px solid #444",padding:"0",overflowX:"auto",overflowY:"hidden",flexShrink:0,zIndex:10},children:f.map((u,p)=>{const x=c.get(u);return z.jsxs("div",{style:{display:"flex",alignItems:"center",backgroundColor:o===p?"#333":"transparent",borderBottom:o===p?"2px solid #4ade80":"2px solid transparent",transition:"all 0.2s",position:"relative"},onMouseEnter:_=>{o!==p&&(_.currentTarget.style.backgroundColor="#222")},onMouseLeave:_=>{o!==p&&(_.currentTarget.style.backgroundColor="transparent")},children:[z.jsxs("button",{onClick:()=>s(p),style:{padding:"8px 16px",paddingRight:"8px",backgroundColor:"transparent",color:o===p?"#fff":"#aaa",border:"none",cursor:"pointer",fontSize:"12px",fontWeight:o===p?"bold":"normal",whiteSpace:"nowrap",transition:"all 0.2s",minWidth:"60px"},children:["Tab ",p+1]}),z.jsx("button",{onClick:_=>d(_,u),style:{padding:"4px 8px",backgroundColor:"transparent",color:o===p?"#fff":"#aaa",border:"none",cursor:"pointer",fontSize:"14px",fontWeight:"bold",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",width:"20px",height:"20px",borderRadius:"3px",transition:"all 0.2s",marginRight:"4px"},onMouseEnter:_=>{_.target.style.backgroundColor=o===p?"#ff4444":"#ff6666",_.target.style.color="#fff"},onMouseLeave:_=>{_.target.style.backgroundColor="transparent",_.target.style.color=o===p?"#fff":"#aaa"},title:"Close tab",children:"×"})]},x||`tab-${p}`)})}),z.jsx("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:f.map((u,p)=>{const x=o===p;return z.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:x?1:0,opacity:x?1:0,pointerEvents:x?"auto":"none",transition:"opacity 0.2s"},children:z.jsx(o0,{selectedRegionData:u,channels:n,onCloseTab:d,regionId:c.get(u)},`content-${u.id||p}`)},u.id||`region-${p}`)})})]})};function Ho(t,e){return t==null||e==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function CA(t,e){return t==null||e==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function w_(t){let e,n,i;t.length!==2?(e=Ho,n=(a,l)=>Ho(t(a),l),i=(a,l)=>t(a)-l):(e=t===Ho||t===CA?t:RA,n=t,i=t);function r(a,l,c=0,f=a.length){if(c<f){if(e(l,l)!==0)return f;do{const d=c+f>>>1;n(a[d],l)<0?c=d+1:f=d}while(c<f)}return c}function o(a,l,c=0,f=a.length){if(c<f){if(e(l,l)!==0)return f;do{const d=c+f>>>1;n(a[d],l)<=0?c=d+1:f=d}while(c<f)}return c}function s(a,l,c=0,f=a.length){const d=r(a,l,c,f-1);return d>c&&i(a[d-1],l)>-i(a[d],l)?d-1:d}return{left:r,center:s,right:o}}function RA(){return 0}function LA(t){return t===null?NaN:+t}function*PA(t,e){for(let n of t)n!=null&&(n=+n)>=n&&(yield n)}const DA=w_(Ho),IA=DA.right;w_(LA).center;function NA(t,e){let n=0,i,r=0,o=0;for(let s of t)s!=null&&(s=+s)>=s&&(i=s-r,r+=i/++n,o+=i*(s-r));if(n>1)return o/(n-1)}function UA(t,e){const n=NA(t);return n&&Math.sqrt(n)}class s0 extends Map{constructor(e,n=zA){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),e!=null)for(const[i,r]of e)this.set(i,r)}get(e){return super.get(a0(this,e))}has(e){return super.has(a0(this,e))}set(e,n){return super.set(OA(this,e),n)}delete(e){return super.delete(FA(this,e))}}function a0({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):n}function OA({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):(t.set(i,n),n)}function FA({_intern:t,_key:e},n){const i=e(n);return t.has(i)&&(n=t.get(i),t.delete(i)),n}function zA(t){return t!==null&&typeof t=="object"?t.valueOf():t}function kA(t=Ho){if(t===Ho)return E_;if(typeof t!="function")throw new TypeError("compare is not a function");return(e,n)=>{const i=t(e,n);return i||i===0?i:(t(n,n)===0)-(t(e,e)===0)}}function E_(t,e){return(t==null||!(t>=t))-(e==null||!(e>=e))||(t<e?-1:t>e?1:0)}const BA=Math.sqrt(50),VA=Math.sqrt(10),HA=Math.sqrt(2);function Ac(t,e,n){const i=(e-t)/Math.max(0,n),r=Math.floor(Math.log10(i)),o=i/Math.pow(10,r),s=o>=BA?10:o>=VA?5:o>=HA?2:1;let a,l,c;return r<0?(c=Math.pow(10,-r)/s,a=Math.round(t*c),l=Math.round(e*c),a/c<t&&++a,l/c>e&&--l,c=-c):(c=Math.pow(10,r)*s,a=Math.round(t/c),l=Math.round(e/c),a*c<t&&++a,l*c>e&&--l),l<a&&.5<=n&&n<2?Ac(t,e,n*2):[a,l,c]}function GA(t,e,n){if(e=+e,t=+t,n=+n,!(n>0))return[];if(t===e)return[t];const i=e<t,[r,o,s]=i?Ac(e,t,n):Ac(t,e,n);if(!(o>=r))return[];const a=o-r+1,l=new Array(a);if(i)if(s<0)for(let c=0;c<a;++c)l[c]=(o-c)/-s;else for(let c=0;c<a;++c)l[c]=(o-c)*s;else if(s<0)for(let c=0;c<a;++c)l[c]=(r+c)/-s;else for(let c=0;c<a;++c)l[c]=(r+c)*s;return l}function kd(t,e,n){return e=+e,t=+t,n=+n,Ac(t,e,n)[2]}function WA(t,e,n){e=+e,t=+t,n=+n;const i=e<t,r=i?kd(e,t,n):kd(t,e,n);return(i?-1:1)*(r<0?1/-r:r)}function Xs(t,e){let n;if(e===void 0)for(const i of t)i!=null&&(n<i||n===void 0&&i>=i)&&(n=i);else{let i=-1;for(let r of t)(r=e(r,++i,t))!=null&&(n<r||n===void 0&&r>=r)&&(n=r)}return n}function Bd(t,e){let n;for(const i of t)i!=null&&(n>i||n===void 0&&i>=i)&&(n=i);return n}function b_(t,e,n=0,i=1/0,r){if(e=Math.floor(e),n=Math.floor(Math.max(0,n)),i=Math.floor(Math.min(t.length-1,i)),!(n<=e&&e<=i))return t;for(r=r===void 0?E_:kA(r);i>n;){if(i-n>600){const l=i-n+1,c=e-n+1,f=Math.log(l),d=.5*Math.exp(2*f/3),u=.5*Math.sqrt(f*d*(l-d)/l)*(c-l/2<0?-1:1),p=Math.max(n,Math.floor(e-c*d/l+u)),x=Math.min(i,Math.floor(e+(l-c)*d/l+u));b_(t,e,p,x,r)}const o=t[e];let s=n,a=i;for(ws(t,n,e),r(t[i],o)>0&&ws(t,n,i);s<a;){for(ws(t,s,a),++s,--a;r(t[s],o)<0;)++s;for(;r(t[a],o)>0;)--a}r(t[n],o)===0?ws(t,n,a):(++a,ws(t,a,i)),a<=e&&(n=a+1),e<=a&&(i=a-1)}return t}function ws(t,e,n){const i=t[e];t[e]=t[n],t[n]=i}function Vl(t,e,n){if(t=Float64Array.from(PA(t)),!(!(i=t.length)||isNaN(e=+e))){if(e<=0||i<2)return Bd(t);if(e>=1)return Xs(t);var i,r=(i-1)*e,o=Math.floor(r),s=Xs(b_(t,o).subarray(0,o+1)),a=Bd(t.subarray(o+1));return s+(a-s)*(r-o)}}function Sl(t,e){let n=0,i=0;if(e===void 0)for(let r of t)r!=null&&(r=+r)>=r&&(++n,i+=r);else{let r=-1;for(let o of t)(o=e(o,++r,t))!=null&&(o=+o)>=o&&(++n,i+=o)}if(n)return i/n}function XA(t,e){return Vl(t,.5)}function T_(t,e,n){t=+t,e=+e,n=(r=arguments.length)<2?(e=t,t=0,1):r<3?1:+n;for(var i=-1,r=Math.max(0,Math.ceil((e-t)/n))|0,o=new Array(r);++i<r;)o[i]=t+i*n;return o}function jA(t){return t}var Rf=1,Hl=2,Vd=3,Ls=4,l0=1e-6;function YA(t){return"translate("+t+",0)"}function qA(t){return"translate(0,"+t+")"}function KA(t){return e=>+t(e)}function ZA(t,e){return e=Math.max(0,t.bandwidth()-e*2)/2,t.round()&&(e=Math.round(e)),n=>+t(n)+e}function QA(){return!this.__axis}function op(t,e){var n=[],i=null,r=null,o=6,s=6,a=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=t===Rf||t===Ls?-1:1,f=t===Ls||t===Hl?"x":"y",d=t===Rf||t===Vd?YA:qA;function u(p){var x=i??(e.ticks?e.ticks.apply(e,n):e.domain()),_=r??(e.tickFormat?e.tickFormat.apply(e,n):jA),m=Math.max(o,0)+a,h=e.range(),v=+h[0]+l,g=+h[h.length-1]+l,w=(e.bandwidth?ZA:KA)(e.copy(),l),E=p.selection?p.selection():p,T=E.selectAll(".domain").data([null]),A=E.selectAll(".tick").data(x,e).order(),R=A.exit(),M=A.enter().append("g").attr("class","tick"),S=A.select("line"),I=A.select("text");T=T.merge(T.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),A=A.merge(M),S=S.merge(M.append("line").attr("stroke","currentColor").attr(f+"2",c*o)),I=I.merge(M.append("text").attr("fill","currentColor").attr(f,c*m).attr("dy",t===Rf?"0em":t===Vd?"0.71em":"0.32em")),p!==E&&(T=T.transition(p),A=A.transition(p),S=S.transition(p),I=I.transition(p),R=R.transition(p).attr("opacity",l0).attr("transform",function(N){return isFinite(N=w(N))?d(N+l):this.getAttribute("transform")}),M.attr("opacity",l0).attr("transform",function(N){var P=this.parentNode.__axis;return d((P&&isFinite(P=P(N))?P:w(N))+l)})),R.remove(),T.attr("d",t===Ls||t===Hl?s?"M"+c*s+","+v+"H"+l+"V"+g+"H"+c*s:"M"+l+","+v+"V"+g:s?"M"+v+","+c*s+"V"+l+"H"+g+"V"+c*s:"M"+v+","+l+"H"+g),A.attr("opacity",1).attr("transform",function(N){return d(w(N)+l)}),S.attr(f+"2",c*o),I.attr(f,c*m).text(_),E.filter(QA).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Hl?"start":t===Ls?"end":"middle"),E.each(function(){this.__axis=w})}return u.scale=function(p){return arguments.length?(e=p,u):e},u.ticks=function(){return n=Array.from(arguments),u},u.tickArguments=function(p){return arguments.length?(n=p==null?[]:Array.from(p),u):n.slice()},u.tickValues=function(p){return arguments.length?(i=p==null?null:Array.from(p),u):i&&i.slice()},u.tickFormat=function(p){return arguments.length?(r=p,u):r},u.tickSize=function(p){return arguments.length?(o=s=+p,u):o},u.tickSizeInner=function(p){return arguments.length?(o=+p,u):o},u.tickSizeOuter=function(p){return arguments.length?(s=+p,u):s},u.tickPadding=function(p){return arguments.length?(a=+p,u):a},u.offset=function(p){return arguments.length?(l=+p,u):l},u}function JA(t){return op(Hl,t)}function Lf(t){return op(Vd,t)}function Pf(t){return op(Ls,t)}var $A={value:()=>{}};function A_(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Gl(n)}function Gl(t){this._=t}function eC(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Gl.prototype=A_.prototype={constructor:Gl,on:function(t,e){var n=this._,i=eC(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=tC(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=c0(n[r],t.name,e);else if(e==null)for(r in n)n[r]=c0(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Gl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function tC(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function c0(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=$A,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var Hd="http://www.w3.org/1999/xhtml";const u0={svg:"http://www.w3.org/2000/svg",xhtml:Hd,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function au(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),u0.hasOwnProperty(e)?{space:u0[e],local:t}:t}function nC(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===Hd&&e.documentElement.namespaceURI===Hd?e.createElement(t):e.createElementNS(n,t)}}function iC(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function C_(t){var e=au(t);return(e.local?iC:nC)(e)}function rC(){}function sp(t){return t==null?rC:function(){return this.querySelector(t)}}function oC(t){typeof t!="function"&&(t=sp(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,c,f=0;f<s;++f)(l=o[f])&&(c=t.call(l,l.__data__,f,o))&&("__data__"in l&&(c.__data__=l.__data__),a[f]=c);return new En(i,this._parents)}function sC(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function aC(){return[]}function R_(t){return t==null?aC:function(){return this.querySelectorAll(t)}}function lC(t){return function(){return sC(t.apply(this,arguments))}}function cC(t){typeof t=="function"?t=lC(t):t=R_(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,c=0;c<a;++c)(l=s[c])&&(i.push(t.call(l,l.__data__,c,s)),r.push(l));return new En(i,r)}function L_(t){return function(){return this.matches(t)}}function P_(t){return function(e){return e.matches(t)}}var uC=Array.prototype.find;function fC(t){return function(){return uC.call(this.children,t)}}function dC(){return this.firstElementChild}function hC(t){return this.select(t==null?dC:fC(typeof t=="function"?t:P_(t)))}var pC=Array.prototype.filter;function mC(){return Array.from(this.children)}function gC(t){return function(){return pC.call(this.children,t)}}function xC(t){return this.selectAll(t==null?mC:gC(typeof t=="function"?t:P_(t)))}function vC(t){typeof t!="function"&&(t=L_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,c=0;c<s;++c)(l=o[c])&&t.call(l,l.__data__,c,o)&&a.push(l);return new En(i,this._parents)}function D_(t){return new Array(t.length)}function _C(){return new En(this._enter||this._groups.map(D_),this._parents)}function Cc(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}Cc.prototype={constructor:Cc,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function yC(t){return function(){return t}}function SC(t,e,n,i,r,o){for(var s=0,a,l=e.length,c=o.length;s<c;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new Cc(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function MC(t,e,n,i,r,o,s){var a,l,c=new Map,f=e.length,d=o.length,u=new Array(f),p;for(a=0;a<f;++a)(l=e[a])&&(u[a]=p=s.call(l,l.__data__,a,e)+"",c.has(p)?r[a]=l:c.set(p,l));for(a=0;a<d;++a)p=s.call(t,o[a],a,o)+"",(l=c.get(p))?(i[a]=l,l.__data__=o[a],c.delete(p)):n[a]=new Cc(t,o[a]);for(a=0;a<f;++a)(l=e[a])&&c.get(u[a])===l&&(r[a]=l)}function wC(t){return t.__data__}function EC(t,e){if(!arguments.length)return Array.from(this,wC);var n=e?MC:SC,i=this._parents,r=this._groups;typeof t!="function"&&(t=yC(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),c=0;c<o;++c){var f=i[c],d=r[c],u=d.length,p=bC(t.call(f,f&&f.__data__,c,i)),x=p.length,_=a[c]=new Array(x),m=s[c]=new Array(x),h=l[c]=new Array(u);n(f,d,_,m,h,p,e);for(var v=0,g=0,w,E;v<x;++v)if(w=_[v]){for(v>=g&&(g=v+1);!(E=m[g])&&++g<x;);w._next=E||null}}return s=new En(s,i),s._enter=a,s._exit=l,s}function bC(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function TC(){return new En(this._exit||this._groups.map(D_),this._parents)}function AC(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function CC(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var c=n[l],f=i[l],d=c.length,u=a[l]=new Array(d),p,x=0;x<d;++x)(p=c[x]||f[x])&&(u[x]=p);for(;l<r;++l)a[l]=n[l];return new En(a,this._parents)}function RC(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function LC(t){t||(t=PC);function e(d,u){return d&&u?t(d.__data__,u.__data__):!d-!u}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),c,f=0;f<a;++f)(c=s[f])&&(l[f]=c);l.sort(e)}return new En(r,this._parents).order()}function PC(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function DC(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function IC(){return Array.from(this)}function NC(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function UC(){let t=0;for(const e of this)++t;return t}function OC(){return!this.node()}function FC(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function zC(t){return function(){this.removeAttribute(t)}}function kC(t){return function(){this.removeAttributeNS(t.space,t.local)}}function BC(t,e){return function(){this.setAttribute(t,e)}}function VC(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function HC(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function GC(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function WC(t,e){var n=au(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?kC:zC:typeof e=="function"?n.local?GC:HC:n.local?VC:BC)(n,e))}function I_(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function XC(t){return function(){this.style.removeProperty(t)}}function jC(t,e,n){return function(){this.style.setProperty(t,e,n)}}function YC(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function qC(t,e,n){return arguments.length>1?this.each((e==null?XC:typeof e=="function"?YC:jC)(t,e,n??"")):ts(this.node(),t)}function ts(t,e){return t.style.getPropertyValue(e)||I_(t).getComputedStyle(t,null).getPropertyValue(e)}function KC(t){return function(){delete this[t]}}function ZC(t,e){return function(){this[t]=e}}function QC(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function JC(t,e){return arguments.length>1?this.each((e==null?KC:typeof e=="function"?QC:ZC)(t,e)):this.node()[t]}function N_(t){return t.trim().split(/^|\s+/)}function ap(t){return t.classList||new U_(t)}function U_(t){this._node=t,this._names=N_(t.getAttribute("class")||"")}U_.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function O_(t,e){for(var n=ap(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function F_(t,e){for(var n=ap(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function $C(t){return function(){O_(this,t)}}function eR(t){return function(){F_(this,t)}}function tR(t,e){return function(){(e.apply(this,arguments)?O_:F_)(this,t)}}function nR(t,e){var n=N_(t+"");if(arguments.length<2){for(var i=ap(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?tR:e?$C:eR)(n,e))}function iR(){this.textContent=""}function rR(t){return function(){this.textContent=t}}function oR(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function sR(t){return arguments.length?this.each(t==null?iR:(typeof t=="function"?oR:rR)(t)):this.node().textContent}function aR(){this.innerHTML=""}function lR(t){return function(){this.innerHTML=t}}function cR(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function uR(t){return arguments.length?this.each(t==null?aR:(typeof t=="function"?cR:lR)(t)):this.node().innerHTML}function fR(){this.nextSibling&&this.parentNode.appendChild(this)}function dR(){return this.each(fR)}function hR(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function pR(){return this.each(hR)}function mR(t){var e=typeof t=="function"?t:C_(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function gR(){return null}function xR(t,e){var n=typeof t=="function"?t:C_(t),i=e==null?gR:typeof e=="function"?e:sp(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function vR(){var t=this.parentNode;t&&t.removeChild(this)}function _R(){return this.each(vR)}function yR(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function SR(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function MR(t){return this.select(t?SR:yR)}function wR(t){return arguments.length?this.property("__data__",t):this.node().__data__}function ER(t){return function(e){t.call(this,e,this.__data__)}}function bR(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function TR(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function AR(t,e,n){return function(){var i=this.__on,r,o=ER(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function CR(t,e,n){var i=bR(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,f;l<c;++l)for(r=0,f=a[l];r<o;++r)if((s=i[r]).type===f.type&&s.name===f.name)return f.value}return}for(a=e?AR:TR,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function z_(t,e,n){var i=I_(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function RR(t,e){return function(){return z_(this,t,e)}}function LR(t,e){return function(){return z_(this,t,e.apply(this,arguments))}}function PR(t,e){return this.each((typeof e=="function"?LR:RR)(t,e))}function*DR(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var k_=[null];function En(t,e){this._groups=t,this._parents=e}function Ma(){return new En([[document.documentElement]],k_)}function IR(){return this}En.prototype=Ma.prototype={constructor:En,select:oC,selectAll:cC,selectChild:hC,selectChildren:xC,filter:vC,data:EC,enter:_C,exit:TC,join:AC,merge:CC,selection:IR,order:RC,sort:LC,call:DC,nodes:IC,node:NC,size:UC,empty:OC,each:FC,attr:WC,style:qC,property:JC,classed:nR,text:sR,html:uR,raise:dR,lower:pR,append:mR,insert:xR,remove:_R,clone:MR,datum:wR,on:CR,dispatch:PR,[Symbol.iterator]:DR};function vt(t){return typeof t=="string"?new En([[document.querySelector(t)]],[document.documentElement]):new En([[t]],k_)}function lp(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function B_(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function wa(){}var ua=.7,Rc=1/ua,Go="\\s*([+-]?\\d+)\\s*",fa="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",li="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",NR=/^#([0-9a-f]{3,8})$/,UR=new RegExp(`^rgb\\(${Go},${Go},${Go}\\)$`),OR=new RegExp(`^rgb\\(${li},${li},${li}\\)$`),FR=new RegExp(`^rgba\\(${Go},${Go},${Go},${fa}\\)$`),zR=new RegExp(`^rgba\\(${li},${li},${li},${fa}\\)$`),kR=new RegExp(`^hsl\\(${fa},${li},${li}\\)$`),BR=new RegExp(`^hsla\\(${fa},${li},${li},${fa}\\)$`),f0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};lp(wa,jr,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:d0,formatHex:d0,formatHex8:VR,formatHsl:HR,formatRgb:h0,toString:h0});function d0(){return this.rgb().formatHex()}function VR(){return this.rgb().formatHex8()}function HR(){return V_(this).formatHsl()}function h0(){return this.rgb().formatRgb()}function jr(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=NR.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?p0(e):n===3?new cn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?Ml(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?Ml(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=UR.exec(t))?new cn(e[1],e[2],e[3],1):(e=OR.exec(t))?new cn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=FR.exec(t))?Ml(e[1],e[2],e[3],e[4]):(e=zR.exec(t))?Ml(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=kR.exec(t))?x0(e[1],e[2]/100,e[3]/100,1):(e=BR.exec(t))?x0(e[1],e[2]/100,e[3]/100,e[4]):f0.hasOwnProperty(t)?p0(f0[t]):t==="transparent"?new cn(NaN,NaN,NaN,0):null}function p0(t){return new cn(t>>16&255,t>>8&255,t&255,1)}function Ml(t,e,n,i){return i<=0&&(t=e=n=NaN),new cn(t,e,n,i)}function GR(t){return t instanceof wa||(t=jr(t)),t?(t=t.rgb(),new cn(t.r,t.g,t.b,t.opacity)):new cn}function Gd(t,e,n,i){return arguments.length===1?GR(t):new cn(t,e,n,i??1)}function cn(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}lp(cn,Gd,B_(wa,{brighter(t){return t=t==null?Rc:Math.pow(Rc,t),new cn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?ua:Math.pow(ua,t),new cn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new cn(kr(this.r),kr(this.g),kr(this.b),Lc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:m0,formatHex:m0,formatHex8:WR,formatRgb:g0,toString:g0}));function m0(){return`#${Ir(this.r)}${Ir(this.g)}${Ir(this.b)}`}function WR(){return`#${Ir(this.r)}${Ir(this.g)}${Ir(this.b)}${Ir((isNaN(this.opacity)?1:this.opacity)*255)}`}function g0(){const t=Lc(this.opacity);return`${t===1?"rgb(":"rgba("}${kr(this.r)}, ${kr(this.g)}, ${kr(this.b)}${t===1?")":`, ${t})`}`}function Lc(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function kr(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Ir(t){return t=kr(t),(t<16?"0":"")+t.toString(16)}function x0(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Zn(t,e,n,i)}function V_(t){if(t instanceof Zn)return new Zn(t.h,t.s,t.l,t.opacity);if(t instanceof wa||(t=jr(t)),!t)return new Zn;if(t instanceof Zn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),o=Math.max(e,n,i),s=NaN,a=o-r,l=(o+r)/2;return a?(e===o?s=(n-i)/a+(n<i)*6:n===o?s=(i-e)/a+2:s=(e-n)/a+4,a/=l<.5?o+r:2-o-r,s*=60):a=l>0&&l<1?0:s,new Zn(s,a,l,t.opacity)}function XR(t,e,n,i){return arguments.length===1?V_(t):new Zn(t,e,n,i??1)}function Zn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}lp(Zn,XR,B_(wa,{brighter(t){return t=t==null?Rc:Math.pow(Rc,t),new Zn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?ua:Math.pow(ua,t),new Zn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new cn(Df(t>=240?t-240:t+120,r,i),Df(t,r,i),Df(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new Zn(v0(this.h),wl(this.s),wl(this.l),Lc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Lc(this.opacity);return`${t===1?"hsl(":"hsla("}${v0(this.h)}, ${wl(this.s)*100}%, ${wl(this.l)*100}%${t===1?")":`, ${t})`}`}}));function v0(t){return t=(t||0)%360,t<0?t+360:t}function wl(t){return Math.max(0,Math.min(1,t||0))}function Df(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const cp=t=>()=>t;function jR(t,e){return function(n){return t+n*e}}function YR(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function qR(t){return(t=+t)==1?H_:function(e,n){return n-e?YR(e,n,t):cp(isNaN(e)?n:e)}}function H_(t,e){var n=e-t;return n?jR(t,n):cp(isNaN(t)?e:t)}const Pc=function t(e){var n=qR(e);function i(r,o){var s=n((r=Gd(r)).r,(o=Gd(o)).r),a=n(r.g,o.g),l=n(r.b,o.b),c=H_(r.opacity,o.opacity);return function(f){return r.r=s(f),r.g=a(f),r.b=l(f),r.opacity=c(f),r+""}}return i.gamma=t,i}(1);function KR(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,i=e.slice(),r;return function(o){for(r=0;r<n;++r)i[r]=t[r]*(1-o)+e[r]*o;return i}}function ZR(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function QR(t,e){var n=e?e.length:0,i=t?Math.min(n,t.length):0,r=new Array(i),o=new Array(n),s;for(s=0;s<i;++s)r[s]=lu(t[s],e[s]);for(;s<n;++s)o[s]=e[s];return function(a){for(s=0;s<i;++s)o[s]=r[s](a);return o}}function JR(t,e){var n=new Date;return t=+t,e=+e,function(i){return n.setTime(t*(1-i)+e*i),n}}function Yn(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function $R(t,e){var n={},i={},r;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in t?n[r]=lu(t[r],e[r]):i[r]=e[r];return function(o){for(r in n)i[r]=n[r](o);return i}}var Wd=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,If=new RegExp(Wd.source,"g");function eL(t){return function(){return t}}function tL(t){return function(e){return t(e)+""}}function G_(t,e){var n=Wd.lastIndex=If.lastIndex=0,i,r,o,s=-1,a=[],l=[];for(t=t+"",e=e+"";(i=Wd.exec(t))&&(r=If.exec(e));)(o=r.index)>n&&(o=e.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(i=i[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,l.push({i:s,x:Yn(i,r)})),n=If.lastIndex;return n<e.length&&(o=e.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?tL(l[0].x):eL(e):(e=l.length,function(c){for(var f=0,d;f<e;++f)a[(d=l[f]).i]=d.x(c);return a.join("")})}function lu(t,e){var n=typeof e,i;return e==null||n==="boolean"?cp(e):(n==="number"?Yn:n==="string"?(i=jr(e))?(e=i,Pc):G_:e instanceof jr?Pc:e instanceof Date?JR:ZR(e)?KR:Array.isArray(e)?QR:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?$R:Yn)(t,e)}function W_(t,e){return t=+t,e=+e,function(n){return Math.round(t*(1-n)+e*n)}}var _0=180/Math.PI,Xd={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function X_(t,e,n,i,r,o){var s,a,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,s=-s),{translateX:r,translateY:o,rotate:Math.atan2(e,t)*_0,skewX:Math.atan(l)*_0,scaleX:s,scaleY:a}}var El;function nL(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?Xd:X_(e.a,e.b,e.c,e.d,e.e,e.f)}function iL(t){return t==null||(El||(El=document.createElementNS("http://www.w3.org/2000/svg","g")),El.setAttribute("transform",t),!(t=El.transform.baseVal.consolidate()))?Xd:(t=t.matrix,X_(t.a,t.b,t.c,t.d,t.e,t.f))}function j_(t,e,n,i){function r(c){return c.length?c.pop()+" ":""}function o(c,f,d,u,p,x){if(c!==d||f!==u){var _=p.push("translate(",null,e,null,n);x.push({i:_-4,x:Yn(c,d)},{i:_-2,x:Yn(f,u)})}else(d||u)&&p.push("translate("+d+e+u+n)}function s(c,f,d,u){c!==f?(c-f>180?f+=360:f-c>180&&(c+=360),u.push({i:d.push(r(d)+"rotate(",null,i)-2,x:Yn(c,f)})):f&&d.push(r(d)+"rotate("+f+i)}function a(c,f,d,u){c!==f?u.push({i:d.push(r(d)+"skewX(",null,i)-2,x:Yn(c,f)}):f&&d.push(r(d)+"skewX("+f+i)}function l(c,f,d,u,p,x){if(c!==d||f!==u){var _=p.push(r(p)+"scale(",null,",",null,")");x.push({i:_-4,x:Yn(c,d)},{i:_-2,x:Yn(f,u)})}else(d!==1||u!==1)&&p.push(r(p)+"scale("+d+","+u+")")}return function(c,f){var d=[],u=[];return c=t(c),f=t(f),o(c.translateX,c.translateY,f.translateX,f.translateY,d,u),s(c.rotate,f.rotate,d,u),a(c.skewX,f.skewX,d,u),l(c.scaleX,c.scaleY,f.scaleX,f.scaleY,d,u),c=f=null,function(p){for(var x=-1,_=u.length,m;++x<_;)d[(m=u[x]).i]=m.x(p);return d.join("")}}}var rL=j_(nL,"px, ","px)","deg)"),oL=j_(iL,", ",")",")"),ns=0,Ps=0,Es=0,Y_=1e3,Dc,Ds,Ic=0,Yr=0,cu=0,da=typeof performance=="object"&&performance.now?performance:Date,q_=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function up(){return Yr||(q_(sL),Yr=da.now()+cu)}function sL(){Yr=0}function Nc(){this._call=this._time=this._next=null}Nc.prototype=K_.prototype={constructor:Nc,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?up():+n)+(e==null?0:+e),!this._next&&Ds!==this&&(Ds?Ds._next=this:Dc=this,Ds=this),this._call=t,this._time=n,jd()},stop:function(){this._call&&(this._call=null,this._time=1/0,jd())}};function K_(t,e,n){var i=new Nc;return i.restart(t,e,n),i}function aL(){up(),++ns;for(var t=Dc,e;t;)(e=Yr-t._time)>=0&&t._call.call(void 0,e),t=t._next;--ns}function y0(){Yr=(Ic=da.now())+cu,ns=Ps=0;try{aL()}finally{ns=0,cL(),Yr=0}}function lL(){var t=da.now(),e=t-Ic;e>Y_&&(cu-=e,Ic=t)}function cL(){for(var t,e=Dc,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Dc=n);Ds=t,jd(i)}function jd(t){if(!ns){Ps&&(Ps=clearTimeout(Ps));var e=t-Yr;e>24?(t<1/0&&(Ps=setTimeout(y0,t-da.now()-cu)),Es&&(Es=clearInterval(Es))):(Es||(Ic=da.now(),Es=setInterval(lL,Y_)),ns=1,q_(y0))}}function S0(t,e,n){var i=new Nc;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var uL=A_("start","end","cancel","interrupt"),fL=[],Z_=0,M0=1,Yd=2,Wl=3,w0=4,qd=5,Xl=6;function uu(t,e,n,i,r,o){var s=t.__transition;if(!s)t.__transition={};else if(n in s)return;dL(t,n,{name:e,index:i,group:r,on:uL,tween:fL,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Z_})}function fp(t,e){var n=ti(t,e);if(n.state>Z_)throw new Error("too late; already scheduled");return n}function ui(t,e){var n=ti(t,e);if(n.state>Wl)throw new Error("too late; already running");return n}function ti(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function dL(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=K_(o,0,n.time);function o(c){n.state=M0,n.timer.restart(s,n.delay,n.time),n.delay<=c&&s(c-n.delay)}function s(c){var f,d,u,p;if(n.state!==M0)return l();for(f in i)if(p=i[f],p.name===n.name){if(p.state===Wl)return S0(s);p.state===w0?(p.state=Xl,p.timer.stop(),p.on.call("interrupt",t,t.__data__,p.index,p.group),delete i[f]):+f<e&&(p.state=Xl,p.timer.stop(),p.on.call("cancel",t,t.__data__,p.index,p.group),delete i[f])}if(S0(function(){n.state===Wl&&(n.state=w0,n.timer.restart(a,n.delay,n.time),a(c))}),n.state=Yd,n.on.call("start",t,t.__data__,n.index,n.group),n.state===Yd){for(n.state=Wl,r=new Array(u=n.tween.length),f=0,d=-1;f<u;++f)(p=n.tween[f].value.call(t,t.__data__,n.index,n.group))&&(r[++d]=p);r.length=d+1}}function a(c){for(var f=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=qd,1),d=-1,u=r.length;++d<u;)r[d].call(t,f);n.state===qd&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=Xl,n.timer.stop(),delete i[e];for(var c in i)return;delete t.__transition}}function hL(t,e){var n=t.__transition,i,r,o=!0,s;if(n){e=e==null?null:e+"";for(s in n){if((i=n[s]).name!==e){o=!1;continue}r=i.state>Yd&&i.state<qd,i.state=Xl,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[s]}o&&delete t.__transition}}function pL(t){return this.each(function(){hL(this,t)})}function mL(t,e){var n,i;return function(){var r=ui(this,t),o=r.tween;if(o!==n){i=n=o;for(var s=0,a=i.length;s<a;++s)if(i[s].name===e){i=i.slice(),i.splice(s,1);break}}r.tween=i}}function gL(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var o=ui(this,t),s=o.tween;if(s!==i){r=(i=s).slice();for(var a={name:e,value:n},l=0,c=r.length;l<c;++l)if(r[l].name===e){r[l]=a;break}l===c&&r.push(a)}o.tween=r}}function xL(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=ti(this.node(),n).tween,r=0,o=i.length,s;r<o;++r)if((s=i[r]).name===t)return s.value;return null}return this.each((e==null?mL:gL)(n,t,e))}function dp(t,e,n){var i=t._id;return t.each(function(){var r=ui(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return ti(r,i).value[e]}}function Q_(t,e){var n;return(typeof e=="number"?Yn:e instanceof jr?Pc:(n=jr(e))?(e=n,Pc):G_)(t,e)}function vL(t){return function(){this.removeAttribute(t)}}function _L(t){return function(){this.removeAttributeNS(t.space,t.local)}}function yL(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttribute(t);return s===r?null:s===i?o:o=e(i=s,n)}}function SL(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===r?null:s===i?o:o=e(i=s,n)}}function ML(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function wL(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function EL(t,e){var n=au(t),i=n==="transform"?oL:Q_;return this.attrTween(t,typeof e=="function"?(n.local?wL:ML)(n,i,dp(this,"attr."+t,e)):e==null?(n.local?_L:vL)(n):(n.local?SL:yL)(n,i,e))}function bL(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function TL(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function AL(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&TL(t,o)),n}return r._value=e,r}function CL(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&bL(t,o)),n}return r._value=e,r}function RL(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=au(t);return this.tween(n,(i.local?AL:CL)(i,e))}function LL(t,e){return function(){fp(this,t).delay=+e.apply(this,arguments)}}function PL(t,e){return e=+e,function(){fp(this,t).delay=e}}function DL(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?LL:PL)(e,t)):ti(this.node(),e).delay}function IL(t,e){return function(){ui(this,t).duration=+e.apply(this,arguments)}}function NL(t,e){return e=+e,function(){ui(this,t).duration=e}}function UL(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?IL:NL)(e,t)):ti(this.node(),e).duration}function OL(t,e){if(typeof e!="function")throw new Error;return function(){ui(this,t).ease=e}}function FL(t){var e=this._id;return arguments.length?this.each(OL(e,t)):ti(this.node(),e).ease}function zL(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;ui(this,t).ease=n}}function kL(t){if(typeof t!="function")throw new Error;return this.each(zL(this._id,t))}function BL(t){typeof t!="function"&&(t=L_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,c=0;c<s;++c)(l=o[c])&&t.call(l,l.__data__,c,o)&&a.push(l);return new Ni(i,this._parents,this._name,this._id)}function VL(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,o=Math.min(i,r),s=new Array(i),a=0;a<o;++a)for(var l=e[a],c=n[a],f=l.length,d=s[a]=new Array(f),u,p=0;p<f;++p)(u=l[p]||c[p])&&(d[p]=u);for(;a<i;++a)s[a]=e[a];return new Ni(s,this._parents,this._name,this._id)}function HL(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function GL(t,e,n){var i,r,o=HL(e)?fp:ui;return function(){var s=o(this,t),a=s.on;a!==i&&(r=(i=a).copy()).on(e,n),s.on=r}}function WL(t,e){var n=this._id;return arguments.length<2?ti(this.node(),n).on.on(t):this.each(GL(n,t,e))}function XL(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function jL(){return this.on("end.remove",XL(this._id))}function YL(t){var e=this._name,n=this._id;typeof t!="function"&&(t=sp(t));for(var i=this._groups,r=i.length,o=new Array(r),s=0;s<r;++s)for(var a=i[s],l=a.length,c=o[s]=new Array(l),f,d,u=0;u<l;++u)(f=a[u])&&(d=t.call(f,f.__data__,u,a))&&("__data__"in f&&(d.__data__=f.__data__),c[u]=d,uu(c[u],e,n,u,c,ti(f,n)));return new Ni(o,this._parents,e,n)}function qL(t){var e=this._name,n=this._id;typeof t!="function"&&(t=R_(t));for(var i=this._groups,r=i.length,o=[],s=[],a=0;a<r;++a)for(var l=i[a],c=l.length,f,d=0;d<c;++d)if(f=l[d]){for(var u=t.call(f,f.__data__,d,l),p,x=ti(f,n),_=0,m=u.length;_<m;++_)(p=u[_])&&uu(p,e,n,_,u,x);o.push(u),s.push(f)}return new Ni(o,s,e,n)}var KL=Ma.prototype.constructor;function ZL(){return new KL(this._groups,this._parents)}function QL(t,e){var n,i,r;return function(){var o=ts(this,t),s=(this.style.removeProperty(t),ts(this,t));return o===s?null:o===n&&s===i?r:r=e(n=o,i=s)}}function J_(t){return function(){this.style.removeProperty(t)}}function JL(t,e,n){var i,r=n+"",o;return function(){var s=ts(this,t);return s===r?null:s===i?o:o=e(i=s,n)}}function $L(t,e,n){var i,r,o;return function(){var s=ts(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),ts(this,t))),s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a))}}function e3(t,e){var n,i,r,o="style."+e,s="end."+o,a;return function(){var l=ui(this,t),c=l.on,f=l.value[o]==null?a||(a=J_(e)):void 0;(c!==n||r!==f)&&(i=(n=c).copy()).on(s,r=f),l.on=i}}function t3(t,e,n){var i=(t+="")=="transform"?rL:Q_;return e==null?this.styleTween(t,QL(t,i)).on("end.style."+t,J_(t)):typeof e=="function"?this.styleTween(t,$L(t,i,dp(this,"style."+t,e))).each(e3(this._id,t)):this.styleTween(t,JL(t,i,e),n).on("end.style."+t,null)}function n3(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function i3(t,e,n){var i,r;function o(){var s=e.apply(this,arguments);return s!==r&&(i=(r=s)&&n3(t,s,n)),i}return o._value=e,o}function r3(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,i3(t,e,n??""))}function o3(t){return function(){this.textContent=t}}function s3(t){return function(){var e=t(this);this.textContent=e??""}}function a3(t){return this.tween("text",typeof t=="function"?s3(dp(this,"text",t)):o3(t==null?"":t+""))}function l3(t){return function(e){this.textContent=t.call(this,e)}}function c3(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&l3(r)),e}return i._value=t,i}function u3(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,c3(t))}function f3(){for(var t=this._name,e=this._id,n=$_(),i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,c=0;c<a;++c)if(l=s[c]){var f=ti(l,e);uu(l,t,n,c,s,{time:f.time+f.delay+f.duration,delay:0,duration:f.duration,ease:f.ease})}return new Ni(i,this._parents,t,n)}function d3(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--r===0&&o()}};n.each(function(){var c=ui(this,i),f=c.on;f!==t&&(e=(t=f).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),c.on=e}),r===0&&o()})}var h3=0;function Ni(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function $_(){return++h3}var xi=Ma.prototype;Ni.prototype={constructor:Ni,select:YL,selectAll:qL,selectChild:xi.selectChild,selectChildren:xi.selectChildren,filter:BL,merge:VL,selection:ZL,transition:f3,call:xi.call,nodes:xi.nodes,node:xi.node,size:xi.size,empty:xi.empty,each:xi.each,on:WL,attr:EL,attrTween:RL,style:t3,styleTween:r3,text:a3,textTween:u3,remove:jL,tween:xL,delay:DL,duration:UL,ease:FL,easeVarying:kL,end:d3,[Symbol.iterator]:xi[Symbol.iterator]};function p3(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var m3={time:null,delay:0,duration:250,ease:p3};function g3(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function x3(t){var e,n;t instanceof Ni?(e=t._id,t=t._name):(e=$_(),(n=m3).time=up(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,c=0;c<a;++c)(l=s[c])&&uu(l,t,e,c,s,n||g3(l,e));return new Ni(i,this._parents,t,e)}Ma.prototype.interrupt=pL;Ma.prototype.transition=x3;const Kd=Math.PI,Zd=2*Kd,Ar=1e-6,v3=Zd-Ar;function ey(t){this._+=t[0];for(let e=1,n=t.length;e<n;++e)this._+=arguments[e]+t[e]}function _3(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return ey;const n=10**e;return function(i){this._+=i[0];for(let r=1,o=i.length;r<o;++r)this._+=Math.round(arguments[r]*n)/n+i[r]}}class y3{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=e==null?ey:_3(e)}moveTo(e,n){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,n){this._append`L${this._x1=+e},${this._y1=+n}`}quadraticCurveTo(e,n,i,r){this._append`Q${+e},${+n},${this._x1=+i},${this._y1=+r}`}bezierCurveTo(e,n,i,r,o,s){this._append`C${+e},${+n},${+i},${+r},${this._x1=+o},${this._y1=+s}`}arcTo(e,n,i,r,o){if(e=+e,n=+n,i=+i,r=+r,o=+o,o<0)throw new Error(`negative radius: ${o}`);let s=this._x1,a=this._y1,l=i-e,c=r-n,f=s-e,d=a-n,u=f*f+d*d;if(this._x1===null)this._append`M${this._x1=e},${this._y1=n}`;else if(u>Ar)if(!(Math.abs(d*l-c*f)>Ar)||!o)this._append`L${this._x1=e},${this._y1=n}`;else{let p=i-s,x=r-a,_=l*l+c*c,m=p*p+x*x,h=Math.sqrt(_),v=Math.sqrt(u),g=o*Math.tan((Kd-Math.acos((_+u-m)/(2*h*v)))/2),w=g/v,E=g/h;Math.abs(w-1)>Ar&&this._append`L${e+w*f},${n+w*d}`,this._append`A${o},${o},0,0,${+(d*p>f*x)},${this._x1=e+E*l},${this._y1=n+E*c}`}}arc(e,n,i,r,o,s){if(e=+e,n=+n,i=+i,s=!!s,i<0)throw new Error(`negative radius: ${i}`);let a=i*Math.cos(r),l=i*Math.sin(r),c=e+a,f=n+l,d=1^s,u=s?r-o:o-r;this._x1===null?this._append`M${c},${f}`:(Math.abs(this._x1-c)>Ar||Math.abs(this._y1-f)>Ar)&&this._append`L${c},${f}`,i&&(u<0&&(u=u%Zd+Zd),u>v3?this._append`A${i},${i},0,1,${d},${e-a},${n-l}A${i},${i},0,1,${d},${this._x1=c},${this._y1=f}`:u>Ar&&this._append`A${i},${i},0,${+(u>=Kd)},${d},${this._x1=e+i*Math.cos(o)},${this._y1=n+i*Math.sin(o)}`)}rect(e,n,i,r){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+n}h${i=+i}v${+r}h${-i}Z`}toString(){return this._}}function S3(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function Uc(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,i=t.slice(0,n);return[i.length>1?i[0]+i.slice(2):i,+t.slice(n+1)]}function is(t){return t=Uc(Math.abs(t)),t?t[1]:NaN}function M3(t,e){return function(n,i){for(var r=n.length,o=[],s=0,a=t[0],l=0;r>0&&a>0&&(l+a+1>i&&(a=Math.max(1,i-l)),o.push(n.substring(r-=a,r+a)),!((l+=a+1)>i));)a=t[s=(s+1)%t.length];return o.reverse().join(e)}}function w3(t){return function(e){return e.replace(/[0-9]/g,function(n){return t[+n]})}}var E3=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Oc(t){if(!(e=E3.exec(t)))throw new Error("invalid format: "+t);var e;return new hp({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}Oc.prototype=hp.prototype;function hp(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}hp.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function b3(t){e:for(var e=t.length,n=1,i=-1,r;n<e;++n)switch(t[n]){case".":i=r=n;break;case"0":i===0&&(i=n),r=n;break;default:if(!+t[n])break e;i>0&&(i=0);break}return i>0?t.slice(0,i)+t.slice(r+1):t}var ty;function T3(t,e){var n=Uc(t,e);if(!n)return t+"";var i=n[0],r=n[1],o=r-(ty=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,s=i.length;return o===s?i:o>s?i+new Array(o-s+1).join("0"):o>0?i.slice(0,o)+"."+i.slice(o):"0."+new Array(1-o).join("0")+Uc(t,Math.max(0,e+o-1))[0]}function E0(t,e){var n=Uc(t,e);if(!n)return t+"";var i=n[0],r=n[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}const b0={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:S3,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>E0(t*100,e),r:E0,s:T3,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function T0(t){return t}var A0=Array.prototype.map,C0=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function A3(t){var e=t.grouping===void 0||t.thousands===void 0?T0:M3(A0.call(t.grouping,Number),t.thousands+""),n=t.currency===void 0?"":t.currency[0]+"",i=t.currency===void 0?"":t.currency[1]+"",r=t.decimal===void 0?".":t.decimal+"",o=t.numerals===void 0?T0:w3(A0.call(t.numerals,String)),s=t.percent===void 0?"%":t.percent+"",a=t.minus===void 0?"−":t.minus+"",l=t.nan===void 0?"NaN":t.nan+"";function c(d){d=Oc(d);var u=d.fill,p=d.align,x=d.sign,_=d.symbol,m=d.zero,h=d.width,v=d.comma,g=d.precision,w=d.trim,E=d.type;E==="n"?(v=!0,E="g"):b0[E]||(g===void 0&&(g=12),w=!0,E="g"),(m||u==="0"&&p==="=")&&(m=!0,u="0",p="=");var T=_==="$"?n:_==="#"&&/[boxX]/.test(E)?"0"+E.toLowerCase():"",A=_==="$"?i:/[%p]/.test(E)?s:"",R=b0[E],M=/[defgprs%]/.test(E);g=g===void 0?6:/[gprs]/.test(E)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g));function S(I){var N=T,P=A,C,O,B;if(E==="c")P=R(I)+P,I="";else{I=+I;var G=I<0||1/I<0;if(I=isNaN(I)?l:R(Math.abs(I),g),w&&(I=b3(I)),G&&+I==0&&x!=="+"&&(G=!1),N=(G?x==="("?x:a:x==="-"||x==="("?"":x)+N,P=(E==="s"?C0[8+ty/3]:"")+P+(G&&x==="("?")":""),M){for(C=-1,O=I.length;++C<O;)if(B=I.charCodeAt(C),48>B||B>57){P=(B===46?r+I.slice(C+1):I.slice(C))+P,I=I.slice(0,C);break}}}v&&!m&&(I=e(I,1/0));var U=N.length+I.length+P.length,X=U<h?new Array(h-U+1).join(u):"";switch(v&&m&&(I=e(X+I,X.length?h-P.length:1/0),X=""),p){case"<":I=N+I+P+X;break;case"=":I=N+X+I+P;break;case"^":I=X.slice(0,U=X.length>>1)+N+I+P+X.slice(U);break;default:I=X+N+I+P;break}return o(I)}return S.toString=function(){return d+""},S}function f(d,u){var p=c((d=Oc(d),d.type="f",d)),x=Math.max(-8,Math.min(8,Math.floor(is(u)/3)))*3,_=Math.pow(10,-x),m=C0[8+x/3];return function(h){return p(_*h)+m}}return{format:c,formatPrefix:f}}var bl,ny,iy;C3({thousands:",",grouping:[3],currency:["$",""]});function C3(t){return bl=A3(t),ny=bl.format,iy=bl.formatPrefix,bl}function R3(t){return Math.max(0,-is(Math.abs(t)))}function L3(t,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(is(e)/3)))*3-is(Math.abs(t)))}function P3(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,is(e)-is(t))+1}function pp(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}function D3(t,e){switch(arguments.length){case 0:break;case 1:{typeof t=="function"?this.interpolator(t):this.range(t);break}default:{this.domain(t),typeof e=="function"?this.interpolator(e):this.range(e);break}}return this}const R0=Symbol("implicit");function ry(){var t=new s0,e=[],n=[],i=R0;function r(o){let s=t.get(o);if(s===void 0){if(i!==R0)return i;t.set(o,s=e.push(o)-1)}return n[s%n.length]}return r.domain=function(o){if(!arguments.length)return e.slice();e=[],t=new s0;for(const s of o)t.has(s)||t.set(s,e.push(s)-1);return r},r.range=function(o){return arguments.length?(n=Array.from(o),r):n.slice()},r.unknown=function(o){return arguments.length?(i=o,r):i},r.copy=function(){return ry(e,n).unknown(i)},pp.apply(r,arguments),r}function yo(){var t=ry().unknown(void 0),e=t.domain,n=t.range,i=0,r=1,o,s,a=!1,l=0,c=0,f=.5;delete t.unknown;function d(){var u=e().length,p=r<i,x=p?r:i,_=p?i:r;o=(_-x)/Math.max(1,u-l+c*2),a&&(o=Math.floor(o)),x+=(_-x-o*(u-l))*f,s=o*(1-l),a&&(x=Math.round(x),s=Math.round(s));var m=T_(u).map(function(h){return x+o*h});return n(p?m.reverse():m)}return t.domain=function(u){return arguments.length?(e(u),d()):e()},t.range=function(u){return arguments.length?([i,r]=u,i=+i,r=+r,d()):[i,r]},t.rangeRound=function(u){return[i,r]=u,i=+i,r=+r,a=!0,d()},t.bandwidth=function(){return s},t.step=function(){return o},t.round=function(u){return arguments.length?(a=!!u,d()):a},t.padding=function(u){return arguments.length?(l=Math.min(1,c=+u),d()):l},t.paddingInner=function(u){return arguments.length?(l=Math.min(1,u),d()):l},t.paddingOuter=function(u){return arguments.length?(c=+u,d()):c},t.align=function(u){return arguments.length?(f=Math.max(0,Math.min(1,u)),d()):f},t.copy=function(){return yo(e(),[i,r]).round(a).paddingInner(l).paddingOuter(c).align(f)},pp.apply(d(),arguments)}function I3(t){return function(){return t}}function N3(t){return+t}var L0=[0,1];function Qi(t){return t}function Qd(t,e){return(e-=t=+t)?function(n){return(n-t)/e}:I3(isNaN(e)?NaN:.5)}function U3(t,e){var n;return t>e&&(n=t,t=e,e=n),function(i){return Math.max(t,Math.min(e,i))}}function O3(t,e,n){var i=t[0],r=t[1],o=e[0],s=e[1];return r<i?(i=Qd(r,i),o=n(s,o)):(i=Qd(i,r),o=n(o,s)),function(a){return o(i(a))}}function F3(t,e,n){var i=Math.min(t.length,e.length)-1,r=new Array(i),o=new Array(i),s=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++s<i;)r[s]=Qd(t[s],t[s+1]),o[s]=n(e[s],e[s+1]);return function(a){var l=IA(t,a,1,i)-1;return o[l](r[l](a))}}function z3(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function k3(){var t=L0,e=L0,n=lu,i,r,o,s=Qi,a,l,c;function f(){var u=Math.min(t.length,e.length);return s!==Qi&&(s=U3(t[0],t[u-1])),a=u>2?F3:O3,l=c=null,d}function d(u){return u==null||isNaN(u=+u)?o:(l||(l=a(t.map(i),e,n)))(i(s(u)))}return d.invert=function(u){return s(r((c||(c=a(e,t.map(i),Yn)))(u)))},d.domain=function(u){return arguments.length?(t=Array.from(u,N3),f()):t.slice()},d.range=function(u){return arguments.length?(e=Array.from(u),f()):e.slice()},d.rangeRound=function(u){return e=Array.from(u),n=W_,f()},d.clamp=function(u){return arguments.length?(s=u?!0:Qi,f()):s!==Qi},d.interpolate=function(u){return arguments.length?(n=u,f()):n},d.unknown=function(u){return arguments.length?(o=u,d):o},function(u,p){return i=u,r=p,f()}}function B3(){return k3()(Qi,Qi)}function V3(t,e,n,i){var r=WA(t,e,n),o;switch(i=Oc(i??",f"),i.type){case"s":{var s=Math.max(Math.abs(t),Math.abs(e));return i.precision==null&&!isNaN(o=L3(r,s))&&(i.precision=o),iy(i,s)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(o=P3(r,Math.max(Math.abs(t),Math.abs(e))))&&(i.precision=o-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(o=R3(r))&&(i.precision=o-(i.type==="%")*2);break}}return ny(i)}function oy(t){var e=t.domain;return t.ticks=function(n){var i=e();return GA(i[0],i[i.length-1],n??10)},t.tickFormat=function(n,i){var r=e();return V3(r[0],r[r.length-1],n??10,i)},t.nice=function(n){n==null&&(n=10);var i=e(),r=0,o=i.length-1,s=i[r],a=i[o],l,c,f=10;for(a<s&&(c=s,s=a,a=c,c=r,r=o,o=c);f-- >0;){if(c=kd(s,a,n),c===l)return i[r]=s,i[o]=a,e(i);if(c>0)s=Math.floor(s/c)*c,a=Math.ceil(a/c)*c;else if(c<0)s=Math.ceil(s*c)/c,a=Math.floor(a*c)/c;else break;l=c}return t},t}function jl(){var t=B3();return t.copy=function(){return z3(t,jl())},pp.apply(t,arguments),oy(t)}function H3(){var t=0,e=1,n,i,r,o,s=Qi,a=!1,l;function c(d){return d==null||isNaN(d=+d)?l:s(r===0?.5:(d=(o(d)-n)*r,a?Math.max(0,Math.min(1,d)):d))}c.domain=function(d){return arguments.length?([t,e]=d,n=o(t=+t),i=o(e=+e),r=n===i?0:1/(i-n),c):[t,e]},c.clamp=function(d){return arguments.length?(a=!!d,c):a},c.interpolator=function(d){return arguments.length?(s=d,c):s};function f(d){return function(u){var p,x;return arguments.length?([p,x]=u,s=d(p,x),c):[s(0),s(1)]}}return c.range=f(lu),c.rangeRound=f(W_),c.unknown=function(d){return arguments.length?(l=d,c):l},function(d){return o=d,n=d(t),i=d(e),r=n===i?0:1/(i-n),c}}function G3(t,e){return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function sy(){var t=oy(H3()(Qi));return t.copy=function(){return G3(t,sy())},D3.apply(t,arguments)}function fu(t){for(var e=t.length/6|0,n=new Array(e),i=0;i<e;)n[i]="#"+t.slice(i*6,++i*6);return n}function du(t){var e=t.length;return function(n){return t[Math.max(0,Math.min(e-1,Math.floor(n*e)))]}}const W3=du(fu("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));du(fu("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));du(fu("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));du(fu("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));function Dt(t){return function(){return t}}const P0=1e-12;function ay(t){let e=3;return t.digits=function(n){if(!arguments.length)return e;if(n==null)e=null;else{const i=Math.floor(n);if(!(i>=0))throw new RangeError(`invalid digits: ${n}`);e=i}return t},()=>new y3(e)}function ly(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function cy(t){this._context=t}cy.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e);break}}};function uy(t){return new cy(t)}function fy(t){return t[0]}function dy(t){return t[1]}function X3(t,e){var n=Dt(!0),i=null,r=uy,o=null,s=ay(a);t=typeof t=="function"?t:t===void 0?fy:Dt(t),e=typeof e=="function"?e:e===void 0?dy:Dt(e);function a(l){var c,f=(l=ly(l)).length,d,u=!1,p;for(i==null&&(o=r(p=s())),c=0;c<=f;++c)!(c<f&&n(d=l[c],c,l))===u&&((u=!u)?o.lineStart():o.lineEnd()),u&&o.point(+t(d,c,l),+e(d,c,l));if(p)return o=null,p+""||null}return a.x=function(l){return arguments.length?(t=typeof l=="function"?l:Dt(+l),a):t},a.y=function(l){return arguments.length?(e=typeof l=="function"?l:Dt(+l),a):e},a.defined=function(l){return arguments.length?(n=typeof l=="function"?l:Dt(!!l),a):n},a.curve=function(l){return arguments.length?(r=l,i!=null&&(o=r(i)),a):r},a.context=function(l){return arguments.length?(l==null?i=o=null:o=r(i=l),a):i},a}function D0(t,e,n){var i=null,r=Dt(!0),o=null,s=uy,a=null,l=ay(c);t=typeof t=="function"?t:t===void 0?fy:Dt(+t),e=typeof e=="function"?e:Dt(e===void 0?0:+e),n=typeof n=="function"?n:n===void 0?dy:Dt(+n);function c(d){var u,p,x,_=(d=ly(d)).length,m,h=!1,v,g=new Array(_),w=new Array(_);for(o==null&&(a=s(v=l())),u=0;u<=_;++u){if(!(u<_&&r(m=d[u],u,d))===h)if(h=!h)p=u,a.areaStart(),a.lineStart();else{for(a.lineEnd(),a.lineStart(),x=u-1;x>=p;--x)a.point(g[x],w[x]);a.lineEnd(),a.areaEnd()}h&&(g[u]=+t(m,u,d),w[u]=+e(m,u,d),a.point(i?+i(m,u,d):g[u],n?+n(m,u,d):w[u]))}if(v)return a=null,v+""||null}function f(){return X3().defined(r).curve(s).context(o)}return c.x=function(d){return arguments.length?(t=typeof d=="function"?d:Dt(+d),i=null,c):t},c.x0=function(d){return arguments.length?(t=typeof d=="function"?d:Dt(+d),c):t},c.x1=function(d){return arguments.length?(i=d==null?null:typeof d=="function"?d:Dt(+d),c):i},c.y=function(d){return arguments.length?(e=typeof d=="function"?d:Dt(+d),n=null,c):e},c.y0=function(d){return arguments.length?(e=typeof d=="function"?d:Dt(+d),c):e},c.y1=function(d){return arguments.length?(n=d==null?null:typeof d=="function"?d:Dt(+d),c):n},c.lineX0=c.lineY0=function(){return f().x(t).y(e)},c.lineY1=function(){return f().x(t).y(n)},c.lineX1=function(){return f().x(i).y(e)},c.defined=function(d){return arguments.length?(r=typeof d=="function"?d:Dt(!!d),c):r},c.curve=function(d){return arguments.length?(s=d,o!=null&&(a=s(o)),c):s},c.context=function(d){return arguments.length?(d==null?o=a=null:a=s(o=d),c):o},c}function I0(t,e,n){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-e),t._y2+t._k*(t._y1-n),t._x2,t._y2)}function mp(t,e){this._context=t,this._k=(1-e)/6}mp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:I0(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2,this._x1=t,this._y1=e;break;case 2:this._point=3;default:I0(this,t,e);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};(function t(e){function n(i){return new mp(i,e)}return n.tension=function(i){return t(+i)},n})(0);function j3(t,e,n){var i=t._x1,r=t._y1,o=t._x2,s=t._y2;if(t._l01_a>P0){var a=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,l=3*t._l01_a*(t._l01_a+t._l12_a);i=(i*a-t._x0*t._l12_2a+t._x2*t._l01_2a)/l,r=(r*a-t._y0*t._l12_2a+t._y2*t._l01_2a)/l}if(t._l23_a>P0){var c=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,f=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*c+t._x1*t._l23_2a-e*t._l12_2a)/f,s=(s*c+t._y1*t._l23_2a-n*t._l12_2a)/f}t._context.bezierCurveTo(i,r,o,s,t._x2,t._y2)}function hy(t,e){this._context=t,this._alpha=e}hy.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){var n=this._x2-t,i=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+i*i,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3;default:j3(this,t,e);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const N0=function t(e){function n(i){return e?new hy(i,e):new mp(i,0)}return n.alpha=function(i){return t(+i)},n}(.5);function Is(t,e,n){this.k=t,this.x=e,this.y=n}Is.prototype={constructor:Is,scale:function(t){return t===1?this:new Is(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Is(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Is.prototype;const Tl=["#ca0020","#f4a582","#f7f7f7","#92c5de","#0571b0"],Y3=({selectedRegionData:t,selectedRegionsData:e,channels:n=[],selectedRegions:i=[]})=>{const r=ne.useRef(null),o=ne.useRef(null),[s,a]=ne.useState("bar"),[l,c]=ne.useState(null),[f,d]=ne.useState(!1),[u,p]=ne.useState(null),x=ne.useRef(null),_=ne.useCallback(M=>Rn&&M>=0&&M<Rn.length?Rn[M].replace(/\s*\(do not use\)/gi,"").trim()||`Channel ${M}`:`Channel ${M}`,[]),m=ne.useCallback((M,S,I,N)=>{if(!M||!S)return[];const{data:P,metadata:C}=M,O=C.shape,[B,G,U]=O,X=C.dataRange||[0,65535],k=X[0],D=X[1],H=Math.max(0,Math.floor(S.min.x)),ee=Math.min(U-1,Math.ceil(S.max.x)),se=Math.max(0,Math.floor(S.min.y)),fe=Math.min(G-1,Math.ceil(S.max.y)),ce=Math.max(0,Math.floor(S.min.z)),xe=Math.min(B-1,Math.ceil(S.max.z)),ue=[];let Se=0;for(let Re=ce;Re<=xe;Re++)for(let Ee=se;Ee<=fe;Ee++)for(let W=H;W<=ee;W++){const Oe=Re*G*U+Ee*U+W;if(Oe>=P.length)continue;const Fe=P[Oe]/255*(D-k)+k;let Ne=I!==void 0?I:k,He=N!==void 0?N:D;Ne>He&&([Ne,He]=[He,Ne]),Fe>=Ne&&Fe<=He&&(ue.push(Fe),Se++)}return{voxels:ue,cellCount:Se,totalVoxels:(ee-H+1)*(fe-se+1)*(xe-ce+1)}},[]),h=ne.useCallback(M=>{if(!M||M.length===0)return{mean:0,median:0,std:0,q1:0,q2:0,q3:0,min:0,max:0,distribution:[]};const S=[...M].sort((X,k)=>X-k),I=Sl(S),N=XA(S),P=UA(S)||0,C=Vl(S,.25),O=Vl(S,.5),B=Vl(S,.75),G=Bd(S),U=Xs(S);return{mean:I||0,median:N||0,std:P||0,q1:C||0,q2:O||0,q3:B||0,min:G||0,max:U||0,distribution:S}},[]),v=ne.useCallback(async()=>{const M=e&&e.length>0?e:t?[t]:[];if(M.length===0){c(null);return}d(!0),p(null);try{const S={};for(let I=0;I<M.length;I++){const N=M[I];if(!N||!N.bounds)continue;const P=N.bounds;let C=n.length>0?n:N.channels||[];if(s==="heatmap"&&i.length>0){const k=new Map;i.forEach(D=>{D.channels&&Array.isArray(D.channels)&&D.channels.forEach(H=>{k.has(H.channelIndex)||k.set(H.channelIndex,{...H,visible:!0})})}),k.size>0&&(C=Array.from(k.values()))}const O=C.filter(k=>k.visible!==!1||s==="heatmap");if(O.length===0){c(null),d(!1);return}const B={},G=(P.max.x-P.min.x+1)*(P.max.y-P.min.y+1)*(P.max.z-P.min.z+1),U=O.map(async k=>{try{const D=await zr(k.channelIndex);return D?{config:k,data:D}:(console.warn(`Graph_Panel: Failed to load channel ${k.channelIndex}`),null)}catch(D){return console.error(`Graph_Panel: Error loading channel ${k.channelIndex}:`,D),null}}),X=await Promise.all(U);for(const k of X){if(!k)continue;const{config:D,data:H}=k,{voxels:ee,cellCount:se,totalVoxels:fe}=m(H,P,D.thresholdMin,D.thresholdMax),ce=h(ee),xe=D.channelIndex;S[xe]||(S[xe]={name:_(D.channelIndex),channelIndex:D.channelIndex,color:D.color,regions:[]});const ue=["#ca0020","#f4a582","#f7f7f7","#92c5de","#0571b0"],Se=ue[I%ue.length];S[xe].regions.push({regionIndex:I,regionId:N.id||I,color:Se,cellCount:se,totalVoxels:fe,volumeOccupied:se,density:se/G,meanIntensity:ce.mean,medianIntensity:ce.median,stdIntensity:ce.std,q1:ce.q1,q2:ce.q2,q3:ce.q3,min:ce.min,max:ce.max,distribution:ce.distribution})}}c(S)}catch(S){console.error("Graph_Panel: Error analyzing region:",S),p(S.message)}finally{d(!1)}},[t,e,n,i,s,m,h,_]);ne.useEffect(()=>{var S;e&&e.length>0||t||(c(null),d(!1),p(null),(S=x.current)!=null&&S.tooltip&&(x.current.tooltip.remove(),x.current=null),r.current&&vt(r.current).selectAll("*").remove(),console.log("Graph_Panel: Reset - no regions selected"))},[e,t]),ne.useEffect(()=>{v()},[v]);const g=ne.useCallback(()=>{if(!r.current||!l)return;const M=vt(r.current);M.selectAll("*").remove();const S=o.current;if(!S)return;const I=S.clientWidth,N=S.clientHeight,P={top:30,right:20,bottom:120,left:60},C=I-P.left-P.right,O=N-P.top-P.bottom,B=M.attr("width",I).attr("height",N).append("g").attr("transform",`translate(${P.left},${P.top})`),G=Object.values(l);if(G.length===0)return;const U=G.some(ce=>ce.regions&&ce.regions.length>1),X=U?Math.max(...G.map(ce=>ce.regions?ce.regions.length:1)):1,k=yo().domain(G.map(ce=>ce.name)).range([0,C]).padding(.2);let D=0;G.forEach(ce=>{ce.regions&&ce.regions.length>0?ce.regions.forEach(xe=>{D=Math.max(D,xe.cellCount)}):D=Math.max(D,ce.cellCount||0)});const H=jl().domain([0,D||1]).nice().range([O,0]),ee=U?yo().domain(T_(X)).range([0,k.bandwidth()]).padding(.1):null,se=vt("body").append("div").attr("class","graph-tooltip").style("opacity",0).style("position","absolute").style("background","rgba(0, 0, 0, 0.9)").style("color","#fff").style("padding","8px").style("border-radius","4px").style("pointer-events","none").style("font-size","12px").style("z-index","10000");U?G.forEach((ce,xe)=>{const ue=k(ce.name);ce.regions&&ce.regions.length>0&&ce.regions.forEach((Se,Re)=>{const Ee=ee.bandwidth(),W=ue+ee(Re);B.append("rect").attr("class","bar").attr("x",W).attr("y",H(Se.cellCount)).attr("width",Ee).attr("height",O-H(Se.cellCount)).attr("fill",Se.color).attr("opacity",.8).on("mouseover",function(Oe){vt(this).attr("opacity",1),se.style("opacity",1).html(`<strong>${ce.name}</strong><br/>Box ${Re+1}<br/>Cells: ${Se.cellCount.toLocaleString()}<br/>Density: ${Se.density.toFixed(2)} cells/μm³`).style("left",Oe.pageX+10+"px").style("top",Oe.pageY-10+"px")}).on("mouseout",function(){vt(this).attr("opacity",.8),se.style("opacity",0)})})}):G.forEach(ce=>{const xe=ce.regions&&ce.regions.length>0?ce.regions[0].cellCount:ce.cellCount,ue=ce.regions&&ce.regions.length>0?ce.regions[0].density:ce.density,Se=ce.regions&&ce.regions.length>0?ce.regions[0].color:ce.color;B.append("rect").attr("class","bar").attr("x",k(ce.name)).attr("y",H(xe)).attr("width",k.bandwidth()).attr("height",O-H(xe)).attr("fill",Se).attr("opacity",.8).on("mouseover",function(Re){vt(this).attr("opacity",1),se.style("opacity",1).html(`<strong>${ce.name}</strong><br/>Cells: ${xe.toLocaleString()}<br/>Density: ${ue.toFixed(2)} cells/μm³`).style("left",Re.pageX+10+"px").style("top",Re.pageY-10+"px")}).on("mouseout",function(){vt(this).attr("opacity",.8),se.style("opacity",0)})}),B.append("g").attr("transform",`translate(0,${O})`).call(Lf(k)).selectAll("text").style("fill","#fff").style("font-size",G.length>15?"9px":"11px").attr("transform","rotate(-45)").style("text-anchor","end").attr("dx","-0.8em").attr("dy","0.15em"),B.append("g").call(Pf(H).ticks(10)).selectAll("text").style("fill","#fff").style("font-size","11px"),B.append("text").attr("transform","rotate(-90)").attr("y",0-P.left).attr("x",0-O/2).attr("dy","1em").style("text-anchor","middle").style("fill","#fff").style("font-size","12px").text("Cell Count"),B.append("text").attr("transform",`translate(${C/2}, ${O+P.bottom-10})`).style("text-anchor","middle").style("fill","#fff").style("font-size","12px").text("Biomarker"),B.append("text").attr("x",C/2).attr("y",-10).style("text-anchor","middle").style("fill","#fff").style("font-size","14px").style("font-weight","bold").text(U?"Cell Distribution Across Multiple Regions":"Cell Distribution in Selected Region"),x.current={tooltip:se}},[l]),w=ne.useCallback(()=>{if(!r.current||!l)return;const M=vt(r.current);M.selectAll("*").remove();const S=o.current;if(!S)return;const I=S.clientWidth,N=S.clientHeight,P={top:40,right:80,bottom:120,left:60},C=I-P.left-P.right,O=N-P.top-P.bottom,B=M.attr("width",I).attr("height",N).append("g").attr("transform",`translate(${P.left},${P.top})`),G=Object.values(l);if(G.length===0)return;const U=G.some(ve=>ve.regions&&ve.regions.length>=2),X=Tl[0],k=Tl[1],D=[],H=[],ee=G.map(ve=>ve.name);for(let ve=0;ve<G.length;ve++){D[ve]=[],H[ve]=[];for(let be=0;be<G.length;be++)if(ve===be)D[ve][be]=1,H[ve][be]=1;else{const Qe=G[ve].regions&&G[ve].regions[0]?G[ve].regions[0].distribution:G[ve].distribution,Ye=G[be].regions&&G[be].regions[0]?G[be].regions[0].distribution:G[be].distribution,b=G[ve].regions&&G[ve].regions.length>1&&G[ve].regions[1]?G[ve].regions[1].distribution:Qe,y=G[be].regions&&G[be].regions.length>1&&G[be].regions[1]?G[be].regions[1].distribution:Ye,F=E(Qe,Ye),Y=U?E(b,y):F;D[ve][be]=F,H[ve][be]=Y}}Math.min(C,O)/G.length;const se=yo().domain(ee).range([0,C]).padding(.05),fe=yo().domain(ee).range([0,O]).padding(.05),ce=sy(W3).domain([0,1]);for(let ve=0;ve<G.length;ve++)for(let be=0;be<G.length;be++){const Qe=se.bandwidth(),Ye=fe.bandwidth();U?(B.append("rect").attr("x",se(ee[be])).attr("y",fe(ee[ve])).attr("width",Qe/2).attr("height",Ye).attr("fill",ce(D[ve][be])).attr("stroke",X).attr("stroke-width",1).on("mouseover",function(b){vt(this).attr("stroke-width",2),ze.style("opacity",1).html(`<strong>${ee[ve]} × ${ee[be]}</strong><br/>Box 1<br/>Correlation: ${D[ve][be].toFixed(3)}`).style("left",b.pageX+10+"px").style("top",b.pageY-10+"px")}).on("mouseout",function(){vt(this).attr("stroke-width",1),ze.style("opacity",0)}),B.append("rect").attr("x",se(ee[be])+Qe/2).attr("y",fe(ee[ve])).attr("width",Qe/2).attr("height",Ye).attr("fill",ce(H[ve][be])).attr("stroke",k).attr("stroke-width",1).on("mouseover",function(b){vt(this).attr("stroke-width",2),ze.style("opacity",1).html(`<strong>${ee[ve]} × ${ee[be]}</strong><br/>Box 2<br/>Correlation: ${H[ve][be].toFixed(3)}`).style("left",b.pageX+10+"px").style("top",b.pageY-10+"px")}).on("mouseout",function(){vt(this).attr("stroke-width",1),ze.style("opacity",0)})):B.append("rect").attr("x",se(ee[be])).attr("y",fe(ee[ve])).attr("width",Qe).attr("height",Ye).attr("fill",ce(D[ve][be])).attr("stroke","#000").attr("stroke-width",.5).on("mouseover",function(b){vt(this).attr("stroke-width",2),ze.style("opacity",1).html(`<strong>${ee[ve]} × ${ee[be]}</strong><br/>Correlation: ${D[ve][be].toFixed(3)}`).style("left",b.pageX+10+"px").style("top",b.pageY-10+"px")}).on("mouseout",function(){vt(this).attr("stroke-width",.5),ze.style("opacity",0)})}B.append("g").attr("transform",`translate(0,${O})`).call(Lf(se)).selectAll("text").style("fill","#fff").attr("transform","rotate(-45)").style("text-anchor","end").style("font-size",ee.length>15?"9px":"11px"),B.append("g").call(Pf(fe)).selectAll("text").style("fill","#fff").style("font-size",ee.length>15?"9px":"11px");const Se=U?"Biomarker Co-expression Heatmap (Box 1 vs Box 2)":"Biomarker Co-expression Heatmap";if(B.append("text").attr("x",C/2).attr("y",-20).style("text-anchor","middle").style("fill","#fff").style("font-size","14px").style("font-weight","bold").text(Se),U){const be=C-150;B.append("rect").attr("x",be).attr("y",-5).attr("width",12).attr("height",12).attr("fill","none").attr("stroke",X).attr("stroke-width",2),B.append("text").attr("x",be+18).attr("y",4).style("fill",X).style("font-size","11px").text("Box 1"),B.append("rect").attr("x",be+70).attr("y",-5).attr("width",12).attr("height",12).attr("fill","none").attr("stroke",k).attr("stroke-width",2),B.append("text").attr("x",be+88).attr("y",4).style("fill",k).style("font-size","11px").text("Box 2")}const Re=15,Ee=Math.min(200,O),W=C+20,Oe=(O-Ee)/2,Le=jl().domain([1,0]).range([0,Ee]),Fe=`heatmap-gradient-${Date.now()}`,Ne=M.append("defs").append("linearGradient").attr("id",Fe).attr("x1","0%").attr("x2","0%").attr("y1","0%").attr("y2","100%");for(let ve=0;ve<=100;ve++){const Qe=1-ve/100;Ne.append("stop").attr("offset",`${ve}%`).attr("stop-color",ce(Qe))}B.append("rect").attr("x",W).attr("y",Oe).attr("width",Re).attr("height",Ee).style("fill",`url(#${Fe})`).style("stroke","#666").style("stroke-width",1);const He=JA(Le).ticks(5).tickFormat(ve=>ve.toFixed(1));B.append("g").attr("transform",`translate(${W+Re}, ${Oe})`).call(He).selectAll("text").style("fill","#fff").style("font-size","10px"),B.append("text").attr("x",W+Re/2).attr("y",Oe-10).style("text-anchor","middle").style("fill","#fff").style("font-size","11px").text("Corr");const ze=vt("body").append("div").attr("class","graph-tooltip").style("opacity",0).style("position","absolute").style("background","rgba(0, 0, 0, 0.9)").style("color","#fff").style("padding","8px").style("border-radius","4px").style("pointer-events","none").style("font-size","12px").style("z-index","10000");x.current={tooltip:ze}},[l]),E=(M,S)=>{if(!M||!S||M.length===0||S.length===0||M.length!==S.length)return 0;const N=Math.min(1e4,M.length),P=Math.max(1,Math.floor(M.length/N)),C=[],O=[];for(let ee=0;ee<M.length;ee+=P)C.push(M[ee]),O.push(S[ee]);const B=C.length,G=Sl(C),U=Sl(O);let X=0,k=0,D=0;for(let ee=0;ee<B;ee++){const se=C[ee]-G,fe=O[ee]-U;X+=se*fe,k+=se*se,D+=fe*fe}const H=Math.sqrt(k*D);return H===0?0:X/H},T=ne.useCallback(()=>{if(!r.current||!l)return;const M=vt(r.current);M.selectAll("*").remove();const S=o.current;if(!S)return;const I=S.clientWidth,N=S.clientHeight,P=Object.values(l);if(P.length===0)return;const C=P.length,O={top:30,right:40,bottom:120,left:60},B=I-O.left-O.right,G=N-O.top-O.bottom,U=M.attr("width",I).attr("height",N).append("g").attr("transform",`translate(${O.left},${O.top})`),X=C>5?.2:.3,k=yo().domain(P.map(ue=>ue.name)).range([0,B]).padding(X),D=jl().domain([0,1]).nice().range([G,0]),H=vt("body").append("div").attr("class","graph-tooltip").style("opacity",0).style("position","absolute").style("background","rgba(0, 0, 0, 0.95)").style("color","#fff").style("padding","12px").style("border-radius","6px").style("pointer-events","none").style("font-size","12px").style("z-index","10000").style("border","1px solid rgba(255, 255, 255, 0.2)").style("box-shadow","0 4px 12px rgba(0, 0, 0, 0.5)"),ee=P.some(ue=>ue.regions&&ue.regions.length>=2),se=Tl[0],fe=Tl[1];P.forEach((ue,Se)=>{const Re=ue.regions&&ue.regions.length>0?ue.regions[0]:null,Ee=ue.regions&&ue.regions.length>1?ue.regions[1]:null;if(!Re||!Re.distribution||Re.distribution.length===0)return;const W=k(ue.name)+k.bandwidth()/2,Oe=k.bandwidth()/2.2,Le=Re.max||1,Fe=Re.distribution.map(Y=>Y/Le),He=R(A(.05),D.ticks(40))(Fe),ze=Xs(He,Y=>Y[1]),ve=He.map(Y=>[Y[0],Y[1]/ze]),be=D0().x0(Y=>W-Oe*Y[1]).x1(Y=>W).y(Y=>D(Y[0])).curve(N0.alpha(.5));if(U.append("path").datum(ve).attr("fill",se).attr("opacity",.7).attr("d",be).attr("stroke",se).attr("stroke-width",1.5).attr("stroke-opacity",.9).on("mouseover",function(Y){vt(this).attr("opacity",1).attr("stroke-width",2.5),H.style("opacity",1).html(`
              <div style="font-weight: bold; margin-bottom: 6px; color: ${se}; font-size: 13px;">
                ${ue.name} - Box 1
              </div>
              <div style="line-height: 1.6;">
                <div><strong>Mean:</strong> ${Re.meanIntensity.toFixed(2)}</div>
                <div><strong>Max:</strong> ${Re.max.toFixed(2)}</div>
                <div style="margin-top: 4px; font-style: italic; color: #aaa;">Normalized View</div>
              </div>
            `).style("left",Y.pageX+15+"px").style("top",Y.pageY-10+"px")}).on("mouseout",function(){vt(this).attr("opacity",.7).attr("stroke-width",1.5),H.style("opacity",0)}),ee&&Ee&&Ee.distribution&&Ee.distribution.length>0){const Y=Ee.max||1,te=Ee.distribution.map(le=>le/Y),Q=R(A(.05),D.ticks(40))(te),Z=Xs(Q,le=>le[1]),J=Q.map(le=>[le[0],le[1]/Z]),de=D0().x0(le=>W).x1(le=>W+Oe*le[1]).y(le=>D(le[0])).curve(N0.alpha(.5));U.append("path").datum(J).attr("fill",fe).attr("opacity",.7).attr("d",de).attr("stroke",fe).attr("stroke-width",1.5).attr("stroke-opacity",.9).on("mouseover",function(le){vt(this).attr("opacity",1).attr("stroke-width",2.5),H.style("opacity",1).html(`
                <div style="font-weight: bold; margin-bottom: 6px; color: ${fe}; font-size: 13px;">
                  ${ue.name} - Box 2
                </div>
                <div style="line-height: 1.6;">
                  <div><strong>Mean:</strong> ${Ee.meanIntensity.toFixed(2)}</div>
                  <div><strong>Max:</strong> ${Ee.max.toFixed(2)}</div>
                  <div style="margin-top: 4px; font-style: italic; color: #aaa;">Normalized View</div>
                </div>
              `).style("left",le.pageX+15+"px").style("top",le.pageY-10+"px")}).on("mouseout",function(){vt(this).attr("opacity",.7).attr("stroke-width",1.5),H.style("opacity",0)})}const Qe=D(Re.q1/Le),Ye=D(Re.q2/Le),b=D(Re.q3/Le),y=D(Re.min/Le),F=D(Re.max/Le);if(U.append("line").attr("x1",W-Oe*1.1).attr("x2",W).attr("y1",Ye).attr("y2",Ye).attr("stroke",se).attr("stroke-width",2.5).attr("opacity",.95),U.append("rect").attr("x",W-Oe*.6).attr("y",b).attr("width",Oe*.6).attr("height",Qe-b).attr("fill","none").attr("stroke",se).attr("stroke-width",1.5).attr("opacity",.6),U.append("line").attr("x1",W-Oe*.3).attr("x2",W-Oe*.3).attr("y1",b).attr("y2",F).attr("stroke",se).attr("stroke-width",1).attr("opacity",.5).attr("stroke-dasharray","3,3"),U.append("line").attr("x1",W-Oe*.3).attr("x2",W-Oe*.3).attr("y1",Qe).attr("y2",y).attr("stroke",se).attr("stroke-width",1).attr("opacity",.5).attr("stroke-dasharray","3,3"),ee&&Ee){const Y=Ee.max||1,te=D(Ee.q1/Y),q=D(Ee.q2/Y),Q=D(Ee.q3/Y),Z=D(Ee.min/Y),J=D(Ee.max/Y);U.append("line").attr("x1",W).attr("x2",W+Oe*1.1).attr("y1",q).attr("y2",q).attr("stroke",fe).attr("stroke-width",2.5).attr("opacity",.95),U.append("rect").attr("x",W).attr("y",Q).attr("width",Oe*.6).attr("height",te-Q).attr("fill","none").attr("stroke",fe).attr("stroke-width",1.5).attr("opacity",.6),U.append("line").attr("x1",W+Oe*.3).attr("x2",W+Oe*.3).attr("y1",Q).attr("y2",J).attr("stroke",fe).attr("stroke-width",1).attr("opacity",.5).attr("stroke-dasharray","3,3"),U.append("line").attr("x1",W+Oe*.3).attr("x2",W+Oe*.3).attr("y1",te).attr("y2",Z).attr("stroke",fe).attr("stroke-width",1).attr("opacity",.5).attr("stroke-dasharray","3,3")}}),U.append("g").attr("transform",`translate(0,${G})`).call(Lf(k)).selectAll("text").style("fill","#fff").style("font-size",C>15?"9px":"11px").attr("transform","rotate(-45)").style("text-anchor","end").attr("dx","-0.8em").attr("dy","0.15em"),U.append("g").call(Pf(D).ticks(10)).selectAll("text").style("fill","#fff").style("font-size","11px"),U.selectAll(".domain, .tick line").style("stroke","#666").style("stroke-width",1),U.append("text").attr("transform","rotate(-90)").attr("y",0-O.left).attr("x",0-G/2).attr("dy","1em").style("text-anchor","middle").style("fill","#fff").style("font-size","13px").style("font-weight","500").text("Normalized Intensity (0-1)"),U.append("text").attr("transform",`translate(${B/2}, ${G+O.bottom-15})`).style("text-anchor","middle").style("fill","#fff").style("font-size","13px").style("font-weight","500").text("Biomarker");const xe=ee?"Normalized Intensity Distributions (Box 1 vs Box 2)":"Normalized Intensity Distributions";if(U.append("text").attr("x",B/2).attr("y",-10).style("text-anchor","middle").style("fill","#fff").style("font-size","16px").style("font-weight","bold").text(xe),ee){const Se=B-150;U.append("rect").attr("x",Se).attr("y",-5).attr("width",12).attr("height",12).attr("fill",se).attr("opacity",.7),U.append("text").attr("x",Se+18).attr("y",4).style("fill",se).style("font-size","11px").text("Box 1 (Left)"),U.append("rect").attr("x",Se+90).attr("y",-5).attr("width",12).attr("height",12).attr("fill",fe).attr("opacity",.7),U.append("text").attr("x",Se+108).attr("y",4).style("fill",fe).style("font-size","11px").text("Box 2 (Right)")}x.current={tooltip:H}},[l]),A=M=>S=>Math.abs(S/=M)<=1?.75*(1-S*S)/M:0,R=(M,S)=>I=>S.map(N=>[N,Sl(I,P=>M(N-P))]);return ne.useEffect(()=>{var M;if(!(f||!l)){switch((M=x.current)!=null&&M.tooltip&&x.current.tooltip.remove(),s){case"bar":g();break;case"heatmap":w();break;case"violin":T();break}return()=>{var S;(S=x.current)!=null&&S.tooltip&&x.current.tooltip.remove()}}},[s,l,f,g,w,T]),ne.useEffect(()=>()=>{var M;(M=x.current)!=null&&M.tooltip&&x.current.tooltip.remove()},[]),z.jsxs("div",{ref:o,style:{height:"100%",width:"100%",backgroundColor:"#000000",border:"1px solid #444",padding:"1px",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"},children:[z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",backgroundColor:"rgba(0, 0, 0, 0.5)",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",flexShrink:0,zIndex:10},children:[z.jsx("h3",{style:{margin:0,fontSize:"14px",color:"white",fontWeight:"500"},children:"Graph Panel"}),z.jsxs("div",{style:{display:"flex",gap:"4px",padding:"3px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"4px"},children:[z.jsxs("button",{onClick:()=>a("bar"),style:{padding:"4px 8px",background:s==="bar"?"rgba(74, 222, 128, 0.3)":"transparent",border:"none",borderRadius:"3px",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",transition:"all 0.2s"},title:"Bar Chart - Cell count distribution",children:[z.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[z.jsx("rect",{x:"2",y:"12",width:"2",height:"2",fill:s==="bar"?"#4ade80":"#fff",opacity:s==="bar"?1:.7}),z.jsx("rect",{x:"5",y:"8",width:"2",height:"6",fill:s==="bar"?"#4ade80":"#fff",opacity:s==="bar"?1:.7}),z.jsx("rect",{x:"8",y:"4",width:"2",height:"10",fill:s==="bar"?"#4ade80":"#fff",opacity:s==="bar"?1:.7}),z.jsx("rect",{x:"11",y:"6",width:"2",height:"8",fill:s==="bar"?"#4ade80":"#fff",opacity:s==="bar"?1:.7})]}),z.jsx("span",{style:{fontSize:"11px",color:s==="bar"?"#4ade80":"rgba(255,255,255,0.7)",fontWeight:s==="bar"?"600":"400"},children:"Bar"})]}),z.jsxs("button",{onClick:()=>a("heatmap"),style:{padding:"4px 8px",background:s==="heatmap"?"rgba(74, 222, 128, 0.3)":"transparent",border:"none",borderRadius:"3px",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",transition:"all 0.2s"},title:"Heatmap - Biomarker co-expression correlation",children:[z.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[z.jsx("rect",{x:"2",y:"2",width:"3",height:"3",fill:s==="heatmap"?"#4ade80":"#fff",opacity:s==="heatmap"?1:.7}),z.jsx("rect",{x:"6",y:"2",width:"3",height:"3",fill:s==="heatmap"?"#4ade80":"#fff",opacity:s==="heatmap"?1:.7}),z.jsx("rect",{x:"10",y:"2",width:"3",height:"3",fill:s==="heatmap"?"#4ade80":"#fff",opacity:s==="heatmap"?1:.7}),z.jsx("rect",{x:"2",y:"6",width:"3",height:"3",fill:s==="heatmap"?"#4ade80":"#fff",opacity:s==="heatmap"?1:.7}),z.jsx("rect",{x:"6",y:"6",width:"3",height:"3",fill:s==="heatmap"?"#4ade80":"#fff",opacity:s==="heatmap"?1:.7}),z.jsx("rect",{x:"10",y:"6",width:"3",height:"3",fill:s==="heatmap"?"#4ade80":"#fff",opacity:s==="heatmap"?1:.7}),z.jsx("rect",{x:"2",y:"10",width:"3",height:"3",fill:s==="heatmap"?"#4ade80":"#fff",opacity:s==="heatmap"?1:.7}),z.jsx("rect",{x:"6",y:"10",width:"3",height:"3",fill:s==="heatmap"?"#4ade80":"#fff",opacity:s==="heatmap"?1:.7}),z.jsx("rect",{x:"10",y:"10",width:"3",height:"3",fill:s==="heatmap"?"#4ade80":"#fff",opacity:s==="heatmap"?1:.7})]}),z.jsx("span",{style:{fontSize:"11px",color:s==="heatmap"?"#4ade80":"rgba(255,255,255,0.7)",fontWeight:s==="heatmap"?"600":"400"},children:"Heatmap"})]}),z.jsxs("button",{onClick:()=>a("violin"),style:{padding:"4px 8px",background:s==="violin"?"rgba(74, 222, 128, 0.3)":"transparent",border:"none",borderRadius:"3px",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",transition:"all 0.2s"},title:"Violin Plot - Intensity distribution shapes",children:[z.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[z.jsx("path",{d:"M8 2 L6 4 L5 6 L5 10 L6 12 L8 14 L10 12 L11 10 L11 6 L10 4 Z",fill:s==="violin"?"#4ade80":"#fff",opacity:s==="violin"?1:.7}),z.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"14",stroke:s==="violin"?"#4ade80":"#fff",strokeWidth:"1.5",opacity:s==="violin"?1:.7})]}),z.jsx("span",{style:{fontSize:"11px",color:s==="violin"?"#4ade80":"rgba(255,255,255,0.7)",fontWeight:s==="violin"?"600":"400"},children:"Violin"})]})]})]}),z.jsxs("div",{style:{flex:1,padding:"0px",overflow:"hidden",position:"relative",width:"100%",height:"100%"},children:[f&&z.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#666",fontSize:"12px"},children:"Loading..."}),u&&z.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#f44",fontSize:"12px",textAlign:"center"},children:["Error: ",u]}),!f&&!u&&!t&&(!e||e.length===0)&&z.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#666",fontSize:"12px",textAlign:"center"},children:[z.jsx("div",{children:"No selection made"}),z.jsx("div",{style:{fontSize:"10px",marginTop:"5px"},children:"Select a region in Main View"})]}),!f&&!u&&(t||e&&e.length>0)&&(!l||Object.keys(l).length===0)&&z.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#666",fontSize:"12px",textAlign:"center"},children:[z.jsx("div",{children:"No channel data available"}),z.jsx("div",{style:{fontSize:"10px",marginTop:"5px"},children:"Enable channels to see statistics"})]}),z.jsx("svg",{ref:r,style:{width:"100%",height:"100%"}})]})]})},q3=t=>{if(t.length<2)return null;const e=t.length,n=new j;t.forEach(T=>n.add(T)),n.divideScalar(e);const i=t.map(T=>new j().subVectors(T,n));let r=0,o=0,s=0,a=0,l=0,c=0;i.forEach(T=>{r+=T.x*T.x,o+=T.x*T.y,s+=T.x*T.z,a+=T.y*T.y,l+=T.y*T.z,c+=T.z*T.z});const f=r+a+c,d=r*(a*c-l*l)-o*(o*c-s*l)+s*(o*l-a*s),u=(f*f-(r*r+a*a+c*c+2*(o*o+s*s+l*l)))/2;if(u<=0){const T=new j(1/0,1/0,1/0),A=new j(-1/0,-1/0,-1/0);return t.forEach(M=>{T.min(M),A.max(M)}),{direction:new j().subVectors(A,T).normalize(),center:n}}const p=f,x=d,_=Math.acos(Math.max(-1,Math.min(1,(2*p*p*p-9*p*u+27*x)/(2*Math.pow(p*p-3*u,1.5))))),m=Math.sqrt(p*p-3*u),h=p/3+2/3*m*Math.cos(_/3),v=p/3+2/3*m*Math.cos((_+2*Math.PI)/3),g=p/3+2/3*m*Math.cos((_+4*Math.PI)/3),w=Math.max(h,v,g);let E=new j(1,0,0);if(Math.abs(w-h)<.001){const T=(a-h)*(c-h)-l*l;if(Math.abs(T)>1e-6){const A=(o*(c-h)-s*l)/T,R=(s-l*A)/(c-h);E=new j(1,A,R).normalize()}}else if(Math.abs(w-v)<.001){const T=(r-v)*(c-v)-s*s;if(Math.abs(T)>1e-6){const A=(o*(c-v)-s*l)/T,R=(l-s*A)/(c-v);E=new j(A,1,R).normalize()}}else{const T=(r-g)*(a-g)-o*o;if(Math.abs(T)>1e-6){const A=(o*(a-g)-s*o)/T,R=(s-o*A)/(a-g);E=new j(A,R,1).normalize()}}if(E.length()<.1){const T=new j(1/0,1/0,1/0),A=new j(-1/0,-1/0,-1/0);t.forEach(R=>{T.min(R),A.max(R)}),E=new j().subVectors(A,T).normalize()}return{direction:E,center:n}},K3=({channels:t=[]})=>{const e=ne.useRef(null),n=ne.useRef(null),i=ne.useRef(null),r=ne.useRef(null),o=ne.useRef(null),s=ne.useRef([]),a=ne.useRef(new Map),[l,c]=ne.useState({x:0,y:0,z:0}),f=u=>{u&&(u.line&&(u.line.geometry&&u.line.geometry.dispose(),u.line.material&&u.line.material.dispose()),u.cone&&(u.cone.geometry&&u.cone.geometry.dispose(),u.cone.material&&u.cone.material.dispose()))},d=ne.useCallback((u,p,x,_=.6,m=.05)=>{const h=x.replace("#",""),v=parseInt(h.substring(0,2),16)/255,g=parseInt(h.substring(2,4),16)/255,w=parseInt(h.substring(4,6),16)/255,E=u.clone().normalize(),T=new j().copy(p).sub(E.clone().multiplyScalar(_/2)),A=new j().copy(p).add(E.clone().multiplyScalar(_/2)),M=new j().subVectors(A,T).length(),S=new j().addVectors(T,A).multiplyScalar(.5),I=new su(m,m,M,16),N=new bc({color:new $e(v,g,w)}),P=new Sn(I,N);P.position.copy(S);const C=new j(0,1,0),O=new Xr;O.setFromUnitVectors(C,E),P.setRotationFromQuaternion(O);const B=_*.2,G=m*2,U=new ip(G,B,16),X=new bc({color:new $e(v,g,w)}),k=new Sn(U,X),D=E.clone(),H=A.clone();k.position.copy(H);const ee=new j(0,1,0),se=new Xr;return se.setFromUnitVectors(ee,D),k.setRotationFromQuaternion(se),{line:P,cone:k}},[]);return ne.useEffect(()=>{if(!e.current)return;const u=e.current,p=u.clientWidth,x=u.clientHeight,_=new tp;_.background=new $e(0),n.current=_;const m=new an(50,p/x,.1,1e3);m.position.set(.5,.5,1.5),m.lookAt(0,0,0),i.current=m;const h=new ru({antialias:!0});h.setSize(p,x),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.outputColorSpace!==void 0&&(h.outputColorSpace=At),u.appendChild(h.domElement),r.current=h;const v=new rp(16777215,.6);_.add(v);const g=new oA(16777215,.4);g.position.set(1,1,1),_.add(g);let w=!1,E=0,T=0,A=1.5,R=0,M=0;const S=()=>{const U=A*Math.sin(M)*Math.cos(R),X=A*Math.sin(R),k=A*Math.cos(M)*Math.cos(R);m.position.set(U,X,k),m.lookAt(0,0,0)},I=U=>{U.button===0&&(w=!0,h.domElement.style.cursor="grabbing"),U.button,E=U.clientX,T=U.clientY},N=()=>{w=!1,h.domElement.style.cursor="grab"},P=U=>{if(w){const se=(U.clientX-E)*.01,fe=(U.clientY-T)*.01;M+=se,R=Math.max(-Math.PI/2,Math.min(Math.PI/2,R+fe)),S()}const X=h.domElement.getBoundingClientRect(),k=new qe;k.x=(U.clientX-X.left)/X.width*2-1,k.y=-((U.clientY-X.top)/X.height)*2+1;const D=new Fd;D.setFromCamera(k,m);const H=new Si(new j(0,0,1),0),ee=new j;D.ray.intersectPlane(H,ee),c({x:ee.x.toFixed(3),y:ee.y.toFixed(3),z:ee.z.toFixed(3)}),E=U.clientX,T=U.clientY},C=U=>{U.preventDefault(),A*=1+U.deltaY*.001,A=Math.max(.5,Math.min(5,A)),S()},O=U=>U.preventDefault();h.domElement.addEventListener("mousedown",I),h.domElement.addEventListener("mouseup",N),h.domElement.addEventListener("mousemove",P),h.domElement.addEventListener("wheel",C),h.domElement.addEventListener("contextmenu",O),h.domElement.style.cursor="grab";const B=()=>{h.render(_,m),o.current=requestAnimationFrame(B)};o.current=requestAnimationFrame(B);const G=()=>{const U=u.clientWidth,X=u.clientHeight;m.aspect=U/X,m.updateProjectionMatrix(),h.setSize(U,X)};return window.addEventListener("resize",G),()=>{window.removeEventListener("resize",G),h.domElement.removeEventListener("mousedown",I),h.domElement.removeEventListener("mouseup",N),h.domElement.removeEventListener("mousemove",P),h.domElement.removeEventListener("wheel",C),h.domElement.removeEventListener("contextmenu",O),o.current&&cancelAnimationFrame(o.current),s.current.forEach(f),s.current=[],u.contains(h.domElement)&&u.removeChild(h.domElement),h.dispose()}},[]),ne.useEffect(()=>{const u=n.current;if(!u)return;if(s.current.forEach(x=>{x.line&&u.children.includes(x.line)&&u.remove(x.line),x.cone&&u.children.includes(x.cone)&&u.remove(x.cone),f(x)}),s.current=[],t.length===0){r.current&&i.current&&r.current.render(u,i.current);return}(async()=>{const x=t.filter(_=>_.visible!==!1);console.log(`Direction_view: Processing ${x.length} visible channel(s) out of ${t.length} total`),console.log("Direction_view: Visible channels:",x.map(_=>({index:_.channelIndex,color:_.color,visible:_.visible})));for(const _ of x){const m=_.channelIndex;if(m==null){console.warn("Direction_view: Channel config missing channelIndex:",_);continue}const h=_.color||"#ffffff";console.log(`Direction_view: Processing channel ${m} (visible: ${_.visible!==!1}) with color ${h}`,{channelConfig:{channelIndex:_.channelIndex,color:_.color,visible:_.visible,id:_.id}});try{let v=a.current.get(m);if(v||(v=await zr(m),v&&a.current.set(m,v)),!v){console.warn(`Direction_view: Could not load channel ${m}, creating default arrow`);const ue=new j(1,0,0).normalize(),Se=new j(0,0,0),W=d(ue,Se,h,1.5,.02);u.add(W.line),u.add(W.cone),s.current.push(W);continue}const{data:g,metadata:w}=v,[E,T,A]=w.shape||[];if(!E||!T||!A){console.warn(`Direction_view: Invalid shape for channel ${m}, creating default arrow`);const ue=new j(1,0,0).normalize(),Se=new j(0,0,0),W=d(ue,Se,h,1.5,.02);u.add(W.line),u.add(W.cone),s.current.push(W);continue}const[R=0,M=65535]=w.dataRange||[],I=R+(M-R)*.6,N=Math.max(E,T,A),P=A/N,C=T/N,O=E/N,B=E*T*A,G=[],U=[],X=Math.max(1,Math.floor(Math.cbrt(B)/50));let k=0;for(let ue=0;ue<E;ue+=X)for(let Se=0;Se<T;Se+=X)for(let Re=0;Re<A;Re+=X){const Ee=ue*T*A+Se*A+Re;if(Ee>=g.length)continue;if(g[Ee]/255*(M-R)+R>=I){k+=X*X*X,G.push(new j(Re,Se,ue));const Le=(Re/A*2-1)*P,Fe=(Se/T*2-1)*C,Ne=(ue/E*2-1)*O;U.push(new j(Le,Fe,Ne))}}let D,H;if(G.length<2)console.warn(`Direction_view: Not enough high-intensity points (${G.length}) for channel ${m}, using default direction`),D=new j(1,0,0).normalize(),H=new j(0,0,0);else{const ue=q3(G);if(!ue)console.warn(`Direction_view: Could not compute principal direction for channel ${m}, using default`),D=new j(1,0,0).normalize(),H=new j(0,0,0);else{const Se=ue.direction,Re=ue.center,Ee=(Re.x/A*2-1)*P,W=(Re.y/T*2-1)*C,Oe=(Re.z/E*2-1)*O;H=new j(Ee,W,Oe);const Le=Se.x*P,Fe=Se.y*C,Ne=Se.z*O;D=new j(Le,Fe,Ne).normalize(),console.log(`Direction_view: Channel ${m} - Original direction: (${Se.x.toFixed(3)}, ${Se.y.toFixed(3)}, ${Se.z.toFixed(3)}), Scaled direction: (${D.x.toFixed(3)}, ${D.y.toFixed(3)}, ${D.z.toFixed(3)})`)}}const ee=k/B,se=.02,fe=Math.max(se,Math.min(.05,se+ee*.03)),xe=d(D,H,h,1.5,fe);console.log(`Direction_view: Created arrow for channel ${m} with thickness ${fe.toFixed(3)} and color ${h}`),u.add(xe.line),u.add(xe.cone),s.current.push(xe)}catch(v){console.error(`Direction_view: Error processing channel ${m}:`,v)}}console.log(`Direction_view: Created ${s.current.length} arrow(s) for ${x.length} visible channel(s)`),r.current&&i.current&&r.current.render(u,i.current)})()},[t,d]),z.jsxs("div",{style:{height:"100%",width:"100%",backgroundColor:"#000000",border:"1px solid #444",padding:"1px",display:"flex",flexDirection:"column",overflow:"hidden",boxSizing:"border-box"},children:[z.jsxs("div",{style:{margin:"8px",flexShrink:0},children:[z.jsx("h3",{style:{margin:0,fontSize:"14px",color:"white",fontWeight:500},children:"Direction View"}),z.jsx("div",{style:{fontSize:"11px",color:"rgba(255, 255, 255, 0.6)",marginTop:"4px",fontStyle:"italic"},children:"Arrows show principal direction of each channel's high-intensity regions"})]}),z.jsx("div",{ref:e,style:{width:"100%",flex:1,overflow:"hidden",boxSizing:"border-box",position:"relative"},children:z.jsxs("div",{style:{position:"absolute",top:"8px",left:"8px",background:"rgba(0, 0, 0, 0.7)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"4px",padding:"6px 10px",color:"#ffffff",fontSize:"12px",fontFamily:"monospace",pointerEvents:"none",zIndex:1e3},children:["X: ",l.x," | Y: ",l.y," | Z: ",l.z]})})]})};function Z3(){const[t,e]=ne.useState([]),[n,i]=ne.useState([]),[r,o]=ne.useState(0),s=ne.useRef(""),[a,l]=ne.useState([]),c=ne.useRef(null),f=ne.useCallback(h=>{console.log("App: Channels updated:",h.length,"channels"),e(h)},[]),d=ne.useCallback(h=>{if(console.log("App: ===== RECEIVED SELECTION DATA ====="),console.log("App: Selected data received:",h),console.log("App: Bounds:",h==null?void 0:h.bounds),console.log("App: Channels:",h==null?void 0:h.channels),console.log("App: Scaling:",h==null?void 0:h.scaling),console.log("App: Adding to selectedRegionsData array..."),!h||!h.bounds){console.error("App: Invalid selection data received:",h);return}h.worldBounds&&(c.current=h.worldBounds,console.log("App: Updated persistent selection bounds"));const v={...h,id:Date.now()};l(g=>g.some(E=>!E.bounds||!h.bounds?!1:E.bounds.min.x===h.bounds.min.x&&E.bounds.min.y===h.bounds.min.y&&E.bounds.min.z===h.bounds.min.z&&E.bounds.max.x===h.bounds.max.x&&E.bounds.max.y===h.bounds.max.y&&E.bounds.max.z===h.bounds.max.z)?(console.log("App: Selection already exists, not adding duplicate"),g):(console.log(`App: ✓ Adding new selection (total: ${g.length+1})`),[...g,v]))},[]),u=ne.useCallback(h=>{console.log("App: Removing region with id:",h),l(v=>{const g=v.filter(w=>w.id!==h);return console.log(`App: ✓ Removed region. Remaining: ${g.length}`),g})},[]),p=ne.useCallback(h=>h.flatMap(v=>v.channels.map((g,w)=>({...g,id:g.id??`${v.id}-${g.channelIndex??w}`,regionId:v.id,visible:g.visible!==!1,opacity:g.opacity??1}))),[]),x=ne.useCallback(({regionPayload:h,shouldSelect:v})=>{h&&i(g=>{let w=g;return v?g.some(T=>T.id===h.id)||(w=[...g,h]):w=g.filter(E=>E.id!==h.id),console.log("App: Region toggled. New regions count:",w.length),w})},[p]),_=ne.useMemo(()=>p(n),[n,p]),m=ne.useMemo(()=>_.map(h=>`${h.regionId}-${h.channelIndex}`).join("|"),[_]);return ne.useEffect(()=>{m!==s.current&&(s.current=m,e(_),o(h=>h+1))},[m,_]),z.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100vw",height:"100vh",overflow:"hidden",backgroundColor:"#000000",position:"fixed",top:0,left:0,boxSizing:"border-box"},children:[z.jsx("div",{style:{height:"4%",width:"100%",flexShrink:0,overflow:"hidden"},children:z.jsx(GS,{softwareName:"Melanoma Tissue Volumes"})}),z.jsxs("div",{style:{height:"100%",width:"100%",display:"flex",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:[z.jsxs("div",{style:{width:"25%",height:"100%",display:"flex",flexDirection:"column",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:[z.jsx("div",{style:{height:"45%",width:"100%",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:z.jsx(WS,{onChannelsChange:f,presetChannels:t,presetVersion:r})}),z.jsx("div",{style:{height:"55%",width:"100%",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:z.jsx(ZS,{onToggleRegion:x,selectedRegions:n})})]}),z.jsxs("div",{style:{width:"75%",height:"100%",display:"flex",flexDirection:"column",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:[z.jsx("div",{style:{height:"68%",width:"100%",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:z.jsx(EA,{channels:t,activeRegions:n,onSelectionChange:d,initialSelectionBounds:c.current,selectedRegionsData:a})}),z.jsxs("div",{style:{height:"32%",width:"100%",display:"flex",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:[z.jsx("div",{style:{width:"33.3%",height:"100%",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:z.jsx(AA,{selectedRegionsData:a,channels:t,onRegionRemove:u})}),z.jsx("div",{style:{width:"33.3%",height:"100%",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:z.jsx(Y3,{selectedRegionsData:a,channels:t,selectedRegions:n},a.map(h=>h.id).join("-")||"empty")}),z.jsx("div",{style:{width:"33.3%",height:"100%",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:z.jsx(K3,{channels:t})})]})]})]})]})}Nf.createRoot(document.getElementById("root")).render(z.jsx(Py.StrictMode,{children:z.jsx(Z3,{})}));
