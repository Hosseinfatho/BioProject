(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function ay(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var b0={exports:{}},Oc={},C0={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),ly=Symbol.for("react.portal"),cy=Symbol.for("react.fragment"),uy=Symbol.for("react.strict_mode"),fy=Symbol.for("react.profiler"),dy=Symbol.for("react.provider"),hy=Symbol.for("react.context"),py=Symbol.for("react.forward_ref"),my=Symbol.for("react.suspense"),gy=Symbol.for("react.memo"),vy=Symbol.for("react.lazy"),mp=Symbol.iterator;function xy(t){return t===null||typeof t!="object"?null:(t=mp&&t[mp]||t["@@iterator"],typeof t=="function"?t:null)}var R0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L0=Object.assign,P0={};function ts(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||R0}ts.prototype.isReactComponent={};ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function D0(){}D0.prototype=ts.prototype;function Kd(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||R0}var Zd=Kd.prototype=new D0;Zd.constructor=Kd;L0(Zd,ts.prototype);Zd.isPureReactComponent=!0;var gp=Array.isArray,N0=Object.prototype.hasOwnProperty,Qd={current:null},I0={key:!0,ref:!0,__self:!0,__source:!0};function U0(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)N0.call(e,i)&&!I0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ma,type:t,key:o,ref:s,props:r,_owner:Qd.current}}function _y(t,e){return{$$typeof:ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ma}function yy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vp=/\/+/g;function gu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yy(""+t.key):e.toString(36)}function Al(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ma:case ly:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+gu(s,0):i,gp(r)?(n="",t!=null&&(n=t.replace(vp,"$&/")+"/"),Al(r,e,n,"",function(c){return c})):r!=null&&(Jd(r)&&(r=_y(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(vp,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",gp(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+gu(o,a);s+=Al(o,e,n,l,r)}else if(l=xy(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+gu(o,a++),s+=Al(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ba(t,e,n){if(t==null)return t;var i=[],r=0;return Al(t,i,"","",function(o){return e.call(n,o,r++)}),i}function Sy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},bl={transition:null},My={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:bl,ReactCurrentOwner:Qd};function O0(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:ba,forEach:function(t,e,n){ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ba(t,function(){e++}),e},toArray:function(t){return ba(t,function(e){return e})||[]},only:function(t){if(!Jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=ts;$e.Fragment=cy;$e.Profiler=fy;$e.PureComponent=Kd;$e.StrictMode=uy;$e.Suspense=my;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=My;$e.act=O0;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=L0({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Qd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)N0.call(e,l)&&!I0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ma,type:t.type,key:r,ref:o,props:i,_owner:s}};$e.createContext=function(t){return t={$$typeof:hy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dy,_context:t},t.Consumer=t};$e.createElement=U0;$e.createFactory=function(t){var e=U0.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:py,render:t}};$e.isValidElement=Jd;$e.lazy=function(t){return{$$typeof:vy,_payload:{_status:-1,_result:t},_init:Sy}};$e.memo=function(t,e){return{$$typeof:gy,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=bl.transition;bl.transition={};try{t()}finally{bl.transition=e}};$e.unstable_act=O0;$e.useCallback=function(t,e){return Qt.current.useCallback(t,e)};$e.useContext=function(t){return Qt.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};$e.useEffect=function(t,e){return Qt.current.useEffect(t,e)};$e.useId=function(){return Qt.current.useId()};$e.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return Qt.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};$e.useRef=function(t){return Qt.current.useRef(t)};$e.useState=function(t){return Qt.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return Qt.current.useTransition()};$e.version="18.3.1";C0.exports=$e;var ae=C0.exports;const Ey=ay(ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy=ae,Ty=Symbol.for("react.element"),Ay=Symbol.for("react.fragment"),by=Object.prototype.hasOwnProperty,Cy=wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ry={key:!0,ref:!0,__self:!0,__source:!0};function F0(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)by.call(e,i)&&!Ry.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ty,type:t,key:o,ref:s,props:r,_owner:Cy.current}}Oc.Fragment=Ay;Oc.jsx=F0;Oc.jsxs=F0;b0.exports=Oc;var J=b0.exports,Df={},z0={exports:{}},En={},k0={exports:{}},B0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,F){var V=I.length;I.push(F);e:for(;0<V;){var N=V-1>>>1,G=I[N];if(0<r(G,F))I[N]=F,I[V]=G,V=N;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var F=I[0],V=I.pop();if(V!==F){I[0]=V;e:for(var N=0,G=I.length,le=G>>>1;N<le;){var ue=2*(N+1)-1,se=I[ue],ge=ue+1,Ne=I[ge];if(0>r(se,V))ge<G&&0>r(Ne,se)?(I[N]=Ne,I[ge]=V,N=ge):(I[N]=se,I[ue]=V,N=ue);else if(ge<G&&0>r(Ne,V))I[N]=Ne,I[ge]=V,N=ge;else break e}}return F}function r(I,F){var V=I.sortIndex-F.sortIndex;return V!==0?V:I.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,f=null,u=3,p=!1,x=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=I)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function S(I){if(_=!1,g(I),!x)if(n(l)!==null)x=!0,B(b);else{var F=n(c);F!==null&&W(S,F.startTime-I)}}function b(I,F){x=!1,_&&(_=!1,h(T),T=-1),p=!0;var V=u;try{for(g(F),f=n(l);f!==null&&(!(f.expirationTime>F)||I&&!R());){var N=f.callback;if(typeof N=="function"){f.callback=null,u=f.priorityLevel;var G=N(f.expirationTime<=F);F=t.unstable_now(),typeof G=="function"?f.callback=G:f===n(l)&&i(l),g(F)}else i(l);f=n(l)}if(f!==null)var le=!0;else{var ue=n(c);ue!==null&&W(S,ue.startTime-F),le=!1}return le}finally{f=null,u=V,p=!1}}var w=!1,A=null,T=-1,y=5,E=-1;function R(){return!(t.unstable_now()-E<y)}function D(){if(A!==null){var I=t.unstable_now();E=I;var F=!0;try{F=A(!0,I)}finally{F?U():(w=!1,A=null)}}else w=!1}var U;if(typeof v=="function")U=function(){v(D)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,z=P.port2;P.port1.onmessage=D,U=function(){z.postMessage(null)}}else U=function(){m(D,0)};function B(I){A=I,w||(w=!0,U())}function W(I,F){T=m(function(){I(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,B(b))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(u){case 1:case 2:case 3:var F=3;break;default:F=u}var V=u;u=F;try{return I()}finally{u=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var V=u;u=I;try{return F()}finally{u=V}},t.unstable_scheduleCallback=function(I,F,V){var N=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?N+V:N):V=N,I){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=V+G,I={id:d++,callback:F,priorityLevel:I,startTime:V,expirationTime:G,sortIndex:-1},V>N?(I.sortIndex=V,e(c,I),n(l)===null&&I===n(c)&&(_?(h(T),T=-1):_=!0,W(S,V-N))):(I.sortIndex=G,e(l,I),x||p||(x=!0,B(b))),I},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(I){var F=u;return function(){var V=u;u=F;try{return I.apply(this,arguments)}finally{u=V}}}})(B0);k0.exports=B0;var Ly=k0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py=ae,Sn=Ly;function me(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var V0=new Set,qs={};function jr(t,e){Vo(t,e),Vo(t+"Capture",e)}function Vo(t,e){for(qs[t]=e,t=0;t<e.length;t++)V0.add(e[t])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nf=Object.prototype.hasOwnProperty,Dy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xp={},_p={};function Ny(t){return Nf.call(_p,t)?!0:Nf.call(xp,t)?!1:Dy.test(t)?_p[t]=!0:(xp[t]=!0,!1)}function Iy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Uy(t,e,n,i){if(e===null||typeof e>"u"||Iy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var $d=/[\-:]([a-z])/g;function eh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($d,eh);kt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($d,eh);kt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($d,eh);kt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function th(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Uy(e,n,r,i)&&(n=null),i||r===null?Ny(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ni=Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ca=Symbol.for("react.element"),xo=Symbol.for("react.portal"),_o=Symbol.for("react.fragment"),nh=Symbol.for("react.strict_mode"),If=Symbol.for("react.profiler"),H0=Symbol.for("react.provider"),G0=Symbol.for("react.context"),ih=Symbol.for("react.forward_ref"),Uf=Symbol.for("react.suspense"),Of=Symbol.for("react.suspense_list"),rh=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),W0=Symbol.for("react.offscreen"),yp=Symbol.iterator;function fs(t){return t===null||typeof t!="object"?null:(t=yp&&t[yp]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,vu;function As(t){if(vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vu=e&&e[1]||""}return`
`+vu+t}var xu=!1;function _u(t,e){if(!t||xu)return"";xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?As(t):""}function Oy(t){switch(t.tag){case 5:return As(t.type);case 16:return As("Lazy");case 13:return As("Suspense");case 19:return As("SuspenseList");case 0:case 2:case 15:return t=_u(t.type,!1),t;case 11:return t=_u(t.type.render,!1),t;case 1:return t=_u(t.type,!0),t;default:return""}}function Ff(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _o:return"Fragment";case xo:return"Portal";case If:return"Profiler";case nh:return"StrictMode";case Uf:return"Suspense";case Of:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case G0:return(t.displayName||"Context")+".Consumer";case H0:return(t._context.displayName||"Context")+".Provider";case ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rh:return e=t.displayName||null,e!==null?e:Ff(t.type)||"Memo";case Vi:e=t._payload,t=t._init;try{return Ff(t(e))}catch{}}return null}function Fy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ff(e);case 8:return e===nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function X0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zy(t){var e=X0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=zy(t))}function j0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=X0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zf(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Y0(t,e){e=e.checked,e!=null&&th(t,"checked",e,!1)}function kf(t,e){Y0(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bf(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bf(t,e,n){(e!=="number"||jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bs=Array.isArray;function Po(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Vf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(me(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ep(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(me(92));if(bs(n)){if(1<n.length)throw Error(me(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function q0(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function K0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?K0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var La,Z0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(La=La||document.createElement("div"),La.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=La.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ks(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ky=["Webkit","ms","Moz","O"];Object.keys(Os).forEach(function(t){ky.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Os[e]=Os[t]})});function Q0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Os.hasOwnProperty(t)&&Os[t]?(""+e).trim():e+"px"}function J0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Q0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var By=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gf(t,e){if(e){if(By[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(me(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(me(62))}}function Wf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xf=null;function oh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jf=null,Do=null,No=null;function Tp(t){if(t=xa(t)){if(typeof jf!="function")throw Error(me(280));var e=t.stateNode;e&&(e=Vc(e),jf(t.stateNode,t.type,e))}}function $0(t){Do?No?No.push(t):No=[t]:Do=t}function ev(){if(Do){var t=Do,e=No;if(No=Do=null,Tp(t),e)for(t=0;t<e.length;t++)Tp(e[t])}}function tv(t,e){return t(e)}function nv(){}var yu=!1;function iv(t,e,n){if(yu)return t(e,n);yu=!0;try{return tv(t,e,n)}finally{yu=!1,(Do!==null||No!==null)&&(nv(),ev())}}function Zs(t,e){var n=t.stateNode;if(n===null)return null;var i=Vc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(me(231,e,typeof n));return n}var Yf=!1;if(Ai)try{var ds={};Object.defineProperty(ds,"passive",{get:function(){Yf=!0}}),window.addEventListener("test",ds,ds),window.removeEventListener("test",ds,ds)}catch{Yf=!1}function Vy(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Fs=!1,Yl=null,ql=!1,qf=null,Hy={onError:function(t){Fs=!0,Yl=t}};function Gy(t,e,n,i,r,o,s,a,l){Fs=!1,Yl=null,Vy.apply(Hy,arguments)}function Wy(t,e,n,i,r,o,s,a,l){if(Gy.apply(this,arguments),Fs){if(Fs){var c=Yl;Fs=!1,Yl=null}else throw Error(me(198));ql||(ql=!0,qf=c)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ap(t){if(Yr(t)!==t)throw Error(me(188))}function Xy(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(me(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Ap(r),t;if(o===i)return Ap(r),e;o=o.sibling}throw Error(me(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(me(189))}}if(n.alternate!==i)throw Error(me(190))}if(n.tag!==3)throw Error(me(188));return n.stateNode.current===n?t:e}function ov(t){return t=Xy(t),t!==null?sv(t):null}function sv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sv(t);if(e!==null)return e;t=t.sibling}return null}var av=Sn.unstable_scheduleCallback,bp=Sn.unstable_cancelCallback,jy=Sn.unstable_shouldYield,Yy=Sn.unstable_requestPaint,gt=Sn.unstable_now,qy=Sn.unstable_getCurrentPriorityLevel,sh=Sn.unstable_ImmediatePriority,lv=Sn.unstable_UserBlockingPriority,Kl=Sn.unstable_NormalPriority,Ky=Sn.unstable_LowPriority,cv=Sn.unstable_IdlePriority,Fc=null,ri=null;function Zy(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(Fc,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:$y,Qy=Math.log,Jy=Math.LN2;function $y(t){return t>>>=0,t===0?32:31-(Qy(t)/Jy|0)|0}var Pa=64,Da=4194304;function Cs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Cs(a):(o&=s,o!==0&&(i=Cs(o)))}else s=n&~r,s!==0?i=Cs(s):o!==0&&(i=Cs(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function eS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-qn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=eS(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Kf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function uv(){var t=Pa;return Pa<<=1,!(Pa&4194240)&&(Pa=64),t}function Su(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function nS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function ah(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function fv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dv,lh,hv,pv,mv,Zf=!1,Na=[],Zi=null,Qi=null,Ji=null,Qs=new Map,Js=new Map,Gi=[],iS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cp(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":Qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(e.pointerId)}}function hs(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=xa(e),e!==null&&lh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function rS(t,e,n,i,r){switch(e){case"focusin":return Zi=hs(Zi,t,e,n,i,r),!0;case"dragenter":return Qi=hs(Qi,t,e,n,i,r),!0;case"mouseover":return Ji=hs(Ji,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Qs.set(o,hs(Qs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Js.set(o,hs(Js.get(o)||null,t,e,n,i,r)),!0}return!1}function gv(t){var e=Rr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=rv(n),e!==null){t.blockedOn=e,mv(t.priority,function(){hv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Xf=i,n.target.dispatchEvent(i),Xf=null}else return e=xa(n),e!==null&&lh(e),t.blockedOn=n,!1;e.shift()}return!0}function Rp(t,e,n){Cl(t)&&n.delete(e)}function oS(){Zf=!1,Zi!==null&&Cl(Zi)&&(Zi=null),Qi!==null&&Cl(Qi)&&(Qi=null),Ji!==null&&Cl(Ji)&&(Ji=null),Qs.forEach(Rp),Js.forEach(Rp)}function ps(t,e){t.blockedOn===e&&(t.blockedOn=null,Zf||(Zf=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,oS)))}function $s(t){function e(r){return ps(r,t)}if(0<Na.length){ps(Na[0],t);for(var n=1;n<Na.length;n++){var i=Na[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&ps(Zi,t),Qi!==null&&ps(Qi,t),Ji!==null&&ps(Ji,t),Qs.forEach(e),Js.forEach(e),n=0;n<Gi.length;n++)i=Gi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gi.length&&(n=Gi[0],n.blockedOn===null);)gv(n),n.blockedOn===null&&Gi.shift()}var Io=Ni.ReactCurrentBatchConfig,Ql=!0;function sS(t,e,n,i){var r=nt,o=Io.transition;Io.transition=null;try{nt=1,ch(t,e,n,i)}finally{nt=r,Io.transition=o}}function aS(t,e,n,i){var r=nt,o=Io.transition;Io.transition=null;try{nt=4,ch(t,e,n,i)}finally{nt=r,Io.transition=o}}function ch(t,e,n,i){if(Ql){var r=Qf(t,e,n,i);if(r===null)Pu(t,e,i,Jl,n),Cp(t,i);else if(rS(r,t,e,n,i))i.stopPropagation();else if(Cp(t,i),e&4&&-1<iS.indexOf(t)){for(;r!==null;){var o=xa(r);if(o!==null&&dv(o),o=Qf(t,e,n,i),o===null&&Pu(t,e,i,Jl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Pu(t,e,i,null,n)}}var Jl=null;function Qf(t,e,n,i){if(Jl=null,t=oh(i),t=Rr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jl=t,null}function vv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qy()){case sh:return 1;case lv:return 4;case Kl:case Ky:return 16;case cv:return 536870912;default:return 16}default:return 16}}var Xi=null,uh=null,Rl=null;function xv(){if(Rl)return Rl;var t,e=uh,n=e.length,i,r="value"in Xi?Xi.value:Xi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Rl=r.slice(t,1<i?1-i:void 0)}function Ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ia(){return!0}function Lp(){return!1}function wn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ia:Lp,this.isPropagationStopped=Lp,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),e}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fh=wn(ns),va=ht({},ns,{view:0,detail:0}),lS=wn(va),Mu,Eu,ms,zc=ht({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ms&&(ms&&t.type==="mousemove"?(Mu=t.screenX-ms.screenX,Eu=t.screenY-ms.screenY):Eu=Mu=0,ms=t),Mu)},movementY:function(t){return"movementY"in t?t.movementY:Eu}}),Pp=wn(zc),cS=ht({},zc,{dataTransfer:0}),uS=wn(cS),fS=ht({},va,{relatedTarget:0}),wu=wn(fS),dS=ht({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),hS=wn(dS),pS=ht({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mS=wn(pS),gS=ht({},ns,{data:0}),Dp=wn(gS),vS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_S={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_S[t])?!!e[t]:!1}function dh(){return yS}var SS=ht({},va,{key:function(t){if(t.key){var e=vS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dh,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),MS=wn(SS),ES=ht({},zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=wn(ES),wS=ht({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dh}),TS=wn(wS),AS=ht({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),bS=wn(AS),CS=ht({},zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RS=wn(CS),LS=[9,13,27,32],hh=Ai&&"CompositionEvent"in window,zs=null;Ai&&"documentMode"in document&&(zs=document.documentMode);var PS=Ai&&"TextEvent"in window&&!zs,_v=Ai&&(!hh||zs&&8<zs&&11>=zs),Ip=" ",Up=!1;function yv(t,e){switch(t){case"keyup":return LS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yo=!1;function DS(t,e){switch(t){case"compositionend":return Sv(e);case"keypress":return e.which!==32?null:(Up=!0,Ip);case"textInput":return t=e.data,t===Ip&&Up?null:t;default:return null}}function NS(t,e){if(yo)return t==="compositionend"||!hh&&yv(t,e)?(t=xv(),Rl=uh=Xi=null,yo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _v&&e.locale!=="ko"?null:e.data;default:return null}}var IS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!IS[t.type]:e==="textarea"}function Mv(t,e,n,i){$0(i),e=$l(e,"onChange"),0<e.length&&(n=new fh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ks=null,ea=null;function US(t){Nv(t,0)}function kc(t){var e=Eo(t);if(j0(e))return t}function OS(t,e){if(t==="change")return e}var Ev=!1;if(Ai){var Tu;if(Ai){var Au="oninput"in document;if(!Au){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),Au=typeof Fp.oninput=="function"}Tu=Au}else Tu=!1;Ev=Tu&&(!document.documentMode||9<document.documentMode)}function zp(){ks&&(ks.detachEvent("onpropertychange",wv),ea=ks=null)}function wv(t){if(t.propertyName==="value"&&kc(ea)){var e=[];Mv(e,ea,t,oh(t)),iv(US,e)}}function FS(t,e,n){t==="focusin"?(zp(),ks=e,ea=n,ks.attachEvent("onpropertychange",wv)):t==="focusout"&&zp()}function zS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kc(ea)}function kS(t,e){if(t==="click")return kc(e)}function BS(t,e){if(t==="input"||t==="change")return kc(e)}function VS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:VS;function ta(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Nf.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bp(t,e){var n=kp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kp(n)}}function Tv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Av(){for(var t=window,e=jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jl(t.document)}return e}function ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function HS(t){var e=Av(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tv(n.ownerDocument.documentElement,n)){if(i!==null&&ph(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Bp(n,o);var s=Bp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var GS=Ai&&"documentMode"in document&&11>=document.documentMode,So=null,Jf=null,Bs=null,$f=!1;function Vp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$f||So==null||So!==jl(i)||(i=So,"selectionStart"in i&&ph(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bs&&ta(Bs,i)||(Bs=i,i=$l(Jf,"onSelect"),0<i.length&&(e=new fh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=So)))}function Ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Mo={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},bu={},bv={};Ai&&(bv=document.createElement("div").style,"AnimationEvent"in window||(delete Mo.animationend.animation,delete Mo.animationiteration.animation,delete Mo.animationstart.animation),"TransitionEvent"in window||delete Mo.transitionend.transition);function Bc(t){if(bu[t])return bu[t];if(!Mo[t])return t;var e=Mo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bv)return bu[t]=e[n];return t}var Cv=Bc("animationend"),Rv=Bc("animationiteration"),Lv=Bc("animationstart"),Pv=Bc("transitionend"),Dv=new Map,Hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){Dv.set(t,e),jr(e,[t])}for(var Cu=0;Cu<Hp.length;Cu++){var Ru=Hp[Cu],WS=Ru.toLowerCase(),XS=Ru[0].toUpperCase()+Ru.slice(1);dr(WS,"on"+XS)}dr(Cv,"onAnimationEnd");dr(Rv,"onAnimationIteration");dr(Lv,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(Pv,"onTransitionEnd");Vo("onMouseEnter",["mouseout","mouseover"]);Vo("onMouseLeave",["mouseout","mouseover"]);Vo("onPointerEnter",["pointerout","pointerover"]);Vo("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rs));function Gp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Wy(i,e,void 0,t),t.currentTarget=null}function Nv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Gp(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Gp(r,a,c),o=l}}}if(ql)throw t=qf,ql=!1,qf=null,t}function st(t,e){var n=e[rd];n===void 0&&(n=e[rd]=new Set);var i=t+"__bubble";n.has(i)||(Iv(e,t,2,!1),n.add(i))}function Lu(t,e,n){var i=0;e&&(i|=4),Iv(n,t,i,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function na(t){if(!t[Oa]){t[Oa]=!0,V0.forEach(function(n){n!=="selectionchange"&&(jS.has(n)||Lu(n,!1,t),Lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,Lu("selectionchange",!1,e))}}function Iv(t,e,n,i){switch(vv(e)){case 1:var r=sS;break;case 4:r=aS;break;default:r=ch}n=r.bind(null,e,n,t),r=void 0,!Yf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Pu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Rr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}iv(function(){var c=o,d=oh(n),f=[];e:{var u=Dv.get(t);if(u!==void 0){var p=fh,x=t;switch(t){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":p=MS;break;case"focusin":x="focus",p=wu;break;case"focusout":x="blur",p=wu;break;case"beforeblur":case"afterblur":p=wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=uS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=TS;break;case Cv:case Rv:case Lv:p=hS;break;case Pv:p=bS;break;case"scroll":p=lS;break;case"wheel":p=RS;break;case"copy":case"cut":case"paste":p=mS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Np}var _=(e&4)!==0,m=!_&&t==="scroll",h=_?u!==null?u+"Capture":null:u;_=[];for(var v=c,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,h!==null&&(S=Zs(v,h),S!=null&&_.push(ia(v,S,g)))),m)break;v=v.return}0<_.length&&(u=new p(u,x,null,n,d),f.push({event:u,listeners:_}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==Xf&&(x=n.relatedTarget||n.fromElement)&&(Rr(x)||x[bi]))break e;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Rr(x):null,x!==null&&(m=Yr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(_=Pp,S="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Np,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?u:Eo(p),g=x==null?u:Eo(x),u=new _(S,v+"leave",p,n,d),u.target=m,u.relatedTarget=g,S=null,Rr(d)===c&&(_=new _(h,v+"enter",x,n,d),_.target=g,_.relatedTarget=m,S=_),m=S,p&&x)t:{for(_=p,h=x,v=0,g=_;g;g=Zr(g))v++;for(g=0,S=h;S;S=Zr(S))g++;for(;0<v-g;)_=Zr(_),v--;for(;0<g-v;)h=Zr(h),g--;for(;v--;){if(_===h||h!==null&&_===h.alternate)break t;_=Zr(_),h=Zr(h)}_=null}else _=null;p!==null&&Wp(f,u,p,_,!1),x!==null&&m!==null&&Wp(f,m,x,_,!0)}}e:{if(u=c?Eo(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var b=OS;else if(Op(u))if(Ev)b=BS;else{b=zS;var w=FS}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(b=kS);if(b&&(b=b(t,c))){Mv(f,b,n,d);break e}w&&w(t,u,c),t==="focusout"&&(w=u._wrapperState)&&w.controlled&&u.type==="number"&&Bf(u,"number",u.value)}switch(w=c?Eo(c):window,t){case"focusin":(Op(w)||w.contentEditable==="true")&&(So=w,Jf=c,Bs=null);break;case"focusout":Bs=Jf=So=null;break;case"mousedown":$f=!0;break;case"contextmenu":case"mouseup":case"dragend":$f=!1,Vp(f,n,d);break;case"selectionchange":if(GS)break;case"keydown":case"keyup":Vp(f,n,d)}var A;if(hh)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else yo?yv(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(_v&&n.locale!=="ko"&&(yo||T!=="onCompositionStart"?T==="onCompositionEnd"&&yo&&(A=xv()):(Xi=d,uh="value"in Xi?Xi.value:Xi.textContent,yo=!0)),w=$l(c,T),0<w.length&&(T=new Dp(T,t,null,n,d),f.push({event:T,listeners:w}),A?T.data=A:(A=Sv(n),A!==null&&(T.data=A)))),(A=PS?DS(t,n):NS(t,n))&&(c=$l(c,"onBeforeInput"),0<c.length&&(d=new Dp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=A))}Nv(f,e)})}function ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $l(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Zs(t,n),o!=null&&i.unshift(ia(t,o,r)),o=Zs(t,e),o!=null&&i.push(ia(t,o,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Zs(n,o),l!=null&&s.unshift(ia(n,l,a))):r||(l=Zs(n,o),l!=null&&s.push(ia(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var YS=/\r\n?/g,qS=/\u0000|\uFFFD/g;function Xp(t){return(typeof t=="string"?t:""+t).replace(YS,`
`).replace(qS,"")}function Fa(t,e,n){if(e=Xp(e),Xp(t)!==e&&n)throw Error(me(425))}function ec(){}var ed=null,td=null;function nd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var id=typeof setTimeout=="function"?setTimeout:void 0,KS=typeof clearTimeout=="function"?clearTimeout:void 0,jp=typeof Promise=="function"?Promise:void 0,ZS=typeof queueMicrotask=="function"?queueMicrotask:typeof jp<"u"?function(t){return jp.resolve(null).then(t).catch(QS)}:id;function QS(t){setTimeout(function(){throw t})}function Du(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),$s(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);$s(e)}function $i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),ii="__reactFiber$"+is,ra="__reactProps$"+is,bi="__reactContainer$"+is,rd="__reactEvents$"+is,JS="__reactListeners$"+is,$S="__reactHandles$"+is;function Rr(t){var e=t[ii];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bi]||n[ii]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yp(t);t!==null;){if(n=t[ii])return n;t=Yp(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[ii]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Eo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(me(33))}function Vc(t){return t[ra]||null}var od=[],wo=-1;function hr(t){return{current:t}}function lt(t){0>wo||(t.current=od[wo],od[wo]=null,wo--)}function ot(t,e){wo++,od[wo]=t.current,t.current=e}var cr={},Xt=hr(cr),sn=hr(!1),zr=cr;function Ho(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function tc(){lt(sn),lt(Xt)}function qp(t,e,n){if(Xt.current!==cr)throw Error(me(168));ot(Xt,e),ot(sn,n)}function Uv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(me(108,Fy(t)||"Unknown",r));return ht({},n,i)}function nc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,zr=Xt.current,ot(Xt,t),ot(sn,sn.current),!0}function Kp(t,e,n){var i=t.stateNode;if(!i)throw Error(me(169));n?(t=Uv(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,lt(sn),lt(Xt),ot(Xt,t)):lt(sn),ot(sn,n)}var xi=null,Hc=!1,Nu=!1;function Ov(t){xi===null?xi=[t]:xi.push(t)}function e1(t){Hc=!0,Ov(t)}function pr(){if(!Nu&&xi!==null){Nu=!0;var t=0,e=nt;try{var n=xi;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,Hc=!1}catch(r){throw xi!==null&&(xi=xi.slice(t+1)),av(sh,pr),r}finally{nt=e,Nu=!1}}return null}var To=[],Ao=0,ic=null,rc=0,Rn=[],Ln=0,kr=null,Si=1,Mi="";function Er(t,e){To[Ao++]=rc,To[Ao++]=ic,ic=t,rc=e}function Fv(t,e,n){Rn[Ln++]=Si,Rn[Ln++]=Mi,Rn[Ln++]=kr,kr=t;var i=Si;t=Mi;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var o=32-qn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Si=1<<32-qn(e)+r|n<<r|i,Mi=o+t}else Si=1<<o|n<<r|i,Mi=t}function mh(t){t.return!==null&&(Er(t,1),Fv(t,1,0))}function gh(t){for(;t===ic;)ic=To[--Ao],To[Ao]=null,rc=To[--Ao],To[Ao]=null;for(;t===kr;)kr=Rn[--Ln],Rn[Ln]=null,Mi=Rn[--Ln],Rn[Ln]=null,Si=Rn[--Ln],Rn[Ln]=null}var yn=null,xn=null,ct=!1,Gn=null;function zv(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,xn=$i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:Si,overflow:Mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,xn=null,!0):!1;default:return!1}}function sd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ad(t){if(ct){var e=xn;if(e){var n=e;if(!Zp(t,e)){if(sd(t))throw Error(me(418));e=$i(n.nextSibling);var i=yn;e&&Zp(t,e)?zv(i,n):(t.flags=t.flags&-4097|2,ct=!1,yn=t)}}else{if(sd(t))throw Error(me(418));t.flags=t.flags&-4097|2,ct=!1,yn=t}}}function Qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function za(t){if(t!==yn)return!1;if(!ct)return Qp(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nd(t.type,t.memoizedProps)),e&&(e=xn)){if(sd(t))throw kv(),Error(me(418));for(;e;)zv(t,e),e=$i(e.nextSibling)}if(Qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(me(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=$i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=yn?$i(t.stateNode.nextSibling):null;return!0}function kv(){for(var t=xn;t;)t=$i(t.nextSibling)}function Go(){xn=yn=null,ct=!1}function vh(t){Gn===null?Gn=[t]:Gn.push(t)}var t1=Ni.ReactCurrentBatchConfig;function gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(me(309));var i=n.stateNode}if(!i)throw Error(me(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(me(284));if(!n._owner)throw Error(me(290,t))}return t}function ka(t,e){throw t=Object.prototype.toString.call(e),Error(me(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jp(t){var e=t._init;return e(t._payload)}function Bv(t){function e(h,v){if(t){var g=h.deletions;g===null?(h.deletions=[v],h.flags|=16):g.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=ir(h,v),h.index=0,h.sibling=null,h}function o(h,v,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<v?(h.flags|=2,v):g):(h.flags|=2,v)):(h.flags|=1048576,v)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,g,S){return v===null||v.tag!==6?(v=Bu(g,h.mode,S),v.return=h,v):(v=r(v,g),v.return=h,v)}function l(h,v,g,S){var b=g.type;return b===_o?d(h,v,g.props.children,S,g.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Vi&&Jp(b)===v.type)?(S=r(v,g.props),S.ref=gs(h,v,g),S.return=h,S):(S=Fl(g.type,g.key,g.props,null,h.mode,S),S.ref=gs(h,v,g),S.return=h,S)}function c(h,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Vu(g,h.mode,S),v.return=h,v):(v=r(v,g.children||[]),v.return=h,v)}function d(h,v,g,S,b){return v===null||v.tag!==7?(v=Ir(g,h.mode,S,b),v.return=h,v):(v=r(v,g),v.return=h,v)}function f(h,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Bu(""+v,h.mode,g),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ca:return g=Fl(v.type,v.key,v.props,null,h.mode,g),g.ref=gs(h,null,v),g.return=h,g;case xo:return v=Vu(v,h.mode,g),v.return=h,v;case Vi:var S=v._init;return f(h,S(v._payload),g)}if(bs(v)||fs(v))return v=Ir(v,h.mode,g,null),v.return=h,v;ka(h,v)}return null}function u(h,v,g,S){var b=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(h,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ca:return g.key===b?l(h,v,g,S):null;case xo:return g.key===b?c(h,v,g,S):null;case Vi:return b=g._init,u(h,v,b(g._payload),S)}if(bs(g)||fs(g))return b!==null?null:d(h,v,g,S,null);ka(h,g)}return null}function p(h,v,g,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(g)||null,a(v,h,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ca:return h=h.get(S.key===null?g:S.key)||null,l(v,h,S,b);case xo:return h=h.get(S.key===null?g:S.key)||null,c(v,h,S,b);case Vi:var w=S._init;return p(h,v,g,w(S._payload),b)}if(bs(S)||fs(S))return h=h.get(g)||null,d(v,h,S,b,null);ka(v,S)}return null}function x(h,v,g,S){for(var b=null,w=null,A=v,T=v=0,y=null;A!==null&&T<g.length;T++){A.index>T?(y=A,A=null):y=A.sibling;var E=u(h,A,g[T],S);if(E===null){A===null&&(A=y);break}t&&A&&E.alternate===null&&e(h,A),v=o(E,v,T),w===null?b=E:w.sibling=E,w=E,A=y}if(T===g.length)return n(h,A),ct&&Er(h,T),b;if(A===null){for(;T<g.length;T++)A=f(h,g[T],S),A!==null&&(v=o(A,v,T),w===null?b=A:w.sibling=A,w=A);return ct&&Er(h,T),b}for(A=i(h,A);T<g.length;T++)y=p(A,h,T,g[T],S),y!==null&&(t&&y.alternate!==null&&A.delete(y.key===null?T:y.key),v=o(y,v,T),w===null?b=y:w.sibling=y,w=y);return t&&A.forEach(function(R){return e(h,R)}),ct&&Er(h,T),b}function _(h,v,g,S){var b=fs(g);if(typeof b!="function")throw Error(me(150));if(g=b.call(g),g==null)throw Error(me(151));for(var w=b=null,A=v,T=v=0,y=null,E=g.next();A!==null&&!E.done;T++,E=g.next()){A.index>T?(y=A,A=null):y=A.sibling;var R=u(h,A,E.value,S);if(R===null){A===null&&(A=y);break}t&&A&&R.alternate===null&&e(h,A),v=o(R,v,T),w===null?b=R:w.sibling=R,w=R,A=y}if(E.done)return n(h,A),ct&&Er(h,T),b;if(A===null){for(;!E.done;T++,E=g.next())E=f(h,E.value,S),E!==null&&(v=o(E,v,T),w===null?b=E:w.sibling=E,w=E);return ct&&Er(h,T),b}for(A=i(h,A);!E.done;T++,E=g.next())E=p(A,h,T,E.value,S),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?T:E.key),v=o(E,v,T),w===null?b=E:w.sibling=E,w=E);return t&&A.forEach(function(D){return e(h,D)}),ct&&Er(h,T),b}function m(h,v,g,S){if(typeof g=="object"&&g!==null&&g.type===_o&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ca:e:{for(var b=g.key,w=v;w!==null;){if(w.key===b){if(b=g.type,b===_o){if(w.tag===7){n(h,w.sibling),v=r(w,g.props.children),v.return=h,h=v;break e}}else if(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Vi&&Jp(b)===w.type){n(h,w.sibling),v=r(w,g.props),v.ref=gs(h,w,g),v.return=h,h=v;break e}n(h,w);break}else e(h,w);w=w.sibling}g.type===_o?(v=Ir(g.props.children,h.mode,S,g.key),v.return=h,h=v):(S=Fl(g.type,g.key,g.props,null,h.mode,S),S.ref=gs(h,v,g),S.return=h,h=S)}return s(h);case xo:e:{for(w=g.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(h,v.sibling),v=r(v,g.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=Vu(g,h.mode,S),v.return=h,h=v}return s(h);case Vi:return w=g._init,m(h,v,w(g._payload),S)}if(bs(g))return x(h,v,g,S);if(fs(g))return _(h,v,g,S);ka(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,g),v.return=h,h=v):(n(h,v),v=Bu(g,h.mode,S),v.return=h,h=v),s(h)):n(h,v)}return m}var Wo=Bv(!0),Vv=Bv(!1),oc=hr(null),sc=null,bo=null,xh=null;function _h(){xh=bo=sc=null}function yh(t){var e=oc.current;lt(oc),t._currentValue=e}function ld(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Uo(t,e){sc=t,xh=bo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(xh!==t)if(t={context:t,memoizedValue:e,next:null},bo===null){if(sc===null)throw Error(me(308));bo=t,sc.dependencies={lanes:0,firstContext:t}}else bo=bo.next=t;return e}var Lr=null;function Sh(t){Lr===null?Lr=[t]:Lr.push(t)}function Hv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function Mh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,Sh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function Pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ah(t,n)}}function $p(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ac(t,e,n,i){var r=t.updateQueue;Hi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,d=c=l=null,a=o;do{var u=a.lane,p=a.eventTime;if((i&u)===u){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,_=a;switch(u=e,p=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){f=x.call(p,f,u);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,u=typeof x=="function"?x.call(p,f,u):x,u==null)break e;f=ht({},f,u);break e;case 2:Hi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,s|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Vr|=s,t.lanes=s,t.memoizedState=f}}function em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(me(191,r));r.call(i)}}}var _a={},oi=hr(_a),oa=hr(_a),sa=hr(_a);function Pr(t){if(t===_a)throw Error(me(174));return t}function Eh(t,e){switch(ot(sa,e),ot(oa,t),ot(oi,_a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hf(e,t)}lt(oi),ot(oi,e)}function Xo(){lt(oi),lt(oa),lt(sa)}function Wv(t){Pr(sa.current);var e=Pr(oi.current),n=Hf(e,t.type);e!==n&&(ot(oa,t),ot(oi,n))}function wh(t){oa.current===t&&(lt(oi),lt(oa))}var ft=hr(0);function lc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Iu=[];function Th(){for(var t=0;t<Iu.length;t++)Iu[t]._workInProgressVersionPrimary=null;Iu.length=0}var Dl=Ni.ReactCurrentDispatcher,Uu=Ni.ReactCurrentBatchConfig,Br=0,dt=null,St=null,Lt=null,cc=!1,Vs=!1,aa=0,n1=0;function Bt(){throw Error(me(321))}function Ah(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function bh(t,e,n,i,r,o){if(Br=o,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?s1:a1,t=n(i,r),Vs){o=0;do{if(Vs=!1,aa=0,25<=o)throw Error(me(301));o+=1,Lt=St=null,e.updateQueue=null,Dl.current=l1,t=n(i,r)}while(Vs)}if(Dl.current=uc,e=St!==null&&St.next!==null,Br=0,Lt=St=dt=null,cc=!1,e)throw Error(me(300));return t}function Ch(){var t=aa!==0;return aa=0,t}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?dt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function On(){if(St===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Lt===null?dt.memoizedState:Lt.next;if(e!==null)Lt=e,St=t;else{if(t===null)throw Error(me(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Lt===null?dt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function la(t,e){return typeof e=="function"?e(t):e}function Ou(t){var e=On(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var d=c.lane;if((Br&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,dt.lanes|=d,Vr|=d}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,Qn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,dt.lanes|=o,Vr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fu(t){var e=On(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Qn(o,e.memoizedState)||(rn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function Xv(){}function jv(t,e){var n=dt,i=On(),r=e(),o=!Qn(i.memoizedState,r);if(o&&(i.memoizedState=r,rn=!0),i=i.queue,Rh(Kv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,ca(9,qv.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(me(349));Br&30||Yv(n,e,r)}return r}function Yv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qv(t,e,n,i){e.value=n,e.getSnapshot=i,Zv(e)&&Qv(t)}function Kv(t,e,n){return n(function(){Zv(e)&&Qv(t)})}function Zv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function Qv(t){var e=Ci(t,1);e!==null&&Kn(e,t,1,-1)}function tm(t){var e=ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},e.queue=t,t=t.dispatch=o1.bind(null,dt,t),[e.memoizedState,t]}function ca(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Jv(){return On().memoizedState}function Nl(t,e,n,i){var r=ti();dt.flags|=t,r.memoizedState=ca(1|e,n,void 0,i===void 0?null:i)}function Gc(t,e,n,i){var r=On();i=i===void 0?null:i;var o=void 0;if(St!==null){var s=St.memoizedState;if(o=s.destroy,i!==null&&Ah(i,s.deps)){r.memoizedState=ca(e,n,o,i);return}}dt.flags|=t,r.memoizedState=ca(1|e,n,o,i)}function nm(t,e){return Nl(8390656,8,t,e)}function Rh(t,e){return Gc(2048,8,t,e)}function $v(t,e){return Gc(4,2,t,e)}function ex(t,e){return Gc(4,4,t,e)}function tx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nx(t,e,n){return n=n!=null?n.concat([t]):null,Gc(4,4,tx.bind(null,e,t),n)}function Lh(){}function ix(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function rx(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ox(t,e,n){return Br&21?(Qn(n,e)||(n=uv(),dt.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function i1(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=Uu.transition;Uu.transition={};try{t(!1),e()}finally{nt=n,Uu.transition=i}}function sx(){return On().memoizedState}function r1(t,e,n){var i=nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ax(t))lx(e,n);else if(n=Hv(t,e,n,i),n!==null){var r=Kt();Kn(n,t,i,r),cx(n,e,i)}}function o1(t,e,n){var i=nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ax(t))lx(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Qn(a,s)){var l=e.interleaved;l===null?(r.next=r,Sh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Hv(t,e,r,i),n!==null&&(r=Kt(),Kn(n,t,i,r),cx(n,e,i))}}function ax(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function lx(t,e){Vs=cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ah(t,n)}}var uc={readContext:Un,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},s1={readContext:Un,useCallback:function(t,e){return ti().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:nm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,tx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=r1.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=ti();return t={current:t},e.memoizedState=t},useState:tm,useDebugValue:Lh,useDeferredValue:function(t){return ti().memoizedState=t},useTransition:function(){var t=tm(!1),e=t[0];return t=i1.bind(null,t[1]),ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=ti();if(ct){if(n===void 0)throw Error(me(407));n=n()}else{if(n=e(),Dt===null)throw Error(me(349));Br&30||Yv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,nm(Kv.bind(null,i,o,t),[t]),i.flags|=2048,ca(9,qv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ti(),e=Dt.identifierPrefix;if(ct){var n=Mi,i=Si;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=n1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},a1={readContext:Un,useCallback:ix,useContext:Un,useEffect:Rh,useImperativeHandle:nx,useInsertionEffect:$v,useLayoutEffect:ex,useMemo:rx,useReducer:Ou,useRef:Jv,useState:function(){return Ou(la)},useDebugValue:Lh,useDeferredValue:function(t){var e=On();return ox(e,St.memoizedState,t)},useTransition:function(){var t=Ou(la)[0],e=On().memoizedState;return[t,e]},useMutableSource:Xv,useSyncExternalStore:jv,useId:sx,unstable_isNewReconciler:!1},l1={readContext:Un,useCallback:ix,useContext:Un,useEffect:Rh,useImperativeHandle:nx,useInsertionEffect:$v,useLayoutEffect:ex,useMemo:rx,useReducer:Fu,useRef:Jv,useState:function(){return Fu(la)},useDebugValue:Lh,useDeferredValue:function(t){var e=On();return St===null?e.memoizedState=t:ox(e,St.memoizedState,t)},useTransition:function(){var t=Fu(la)[0],e=On().memoizedState;return[t,e]},useMutableSource:Xv,useSyncExternalStore:jv,useId:sx,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wc={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=nr(t),o=wi(i,r);o.payload=e,n!=null&&(o.callback=n),e=er(t,o,r),e!==null&&(Kn(e,t,r,i),Pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=nr(t),o=wi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=er(t,o,r),e!==null&&(Kn(e,t,r,i),Pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=nr(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=er(t,r,i),e!==null&&(Kn(e,t,i,n),Pl(e,t,i))}};function im(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!ta(n,i)||!ta(r,o):!0}function ux(t,e,n){var i=!1,r=cr,o=e.contextType;return typeof o=="object"&&o!==null?o=Un(o):(r=an(e)?zr:Xt.current,i=e.contextTypes,o=(i=i!=null)?Ho(t,r):cr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function rm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Wc.enqueueReplaceState(e,e.state,null)}function ud(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Mh(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Un(o):(o=an(e)?zr:Xt.current,r.context=Ho(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(cd(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Wc.enqueueReplaceState(r,r.state,null),ac(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function jo(t,e){try{var n="",i=e;do n+=Oy(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var c1=typeof WeakMap=="function"?WeakMap:Map;function fx(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){dc||(dc=!0,Sd=i),fd(t,e)},n}function dx(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){fd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){fd(t,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function om(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new c1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=E1.bind(null,t,e,n),e.then(t,t))}function sm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function am(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var u1=Ni.ReactCurrentOwner,rn=!1;function qt(t,e,n,i){e.child=t===null?Vv(e,null,n,i):Wo(e,t.child,n,i)}function lm(t,e,n,i,r){n=n.render;var o=e.ref;return Uo(e,r),i=bh(t,e,n,i,o,r),n=Ch(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(ct&&n&&mh(e),e.flags|=1,qt(t,e,i,r),e.child)}function cm(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!zh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,hx(t,e,o,i,r)):(t=Fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ta,n(s,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=ir(o,i),t.ref=e.ref,t.return=e,e.child=t}function hx(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ta(o,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return dd(t,e,n,i,r)}function px(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Ro,gn),gn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(Ro,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,ot(Ro,gn),gn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,ot(Ro,gn),gn|=i;return qt(t,e,r,n),e.child}function mx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dd(t,e,n,i,r){var o=an(n)?zr:Xt.current;return o=Ho(e,o),Uo(e,r),n=bh(t,e,n,i,o,r),i=Ch(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(ct&&i&&mh(e),e.flags|=1,qt(t,e,n,r),e.child)}function um(t,e,n,i,r){if(an(n)){var o=!0;nc(e)}else o=!1;if(Uo(e,r),e.stateNode===null)Il(t,e),ux(e,n,i),ud(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=an(n)?zr:Xt.current,c=Ho(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&rm(e,s,i,c),Hi=!1;var u=e.memoizedState;s.state=u,ac(e,i,s,r),l=e.memoizedState,a!==i||u!==l||sn.current||Hi?(typeof d=="function"&&(cd(e,n,d,i),l=e.memoizedState),(a=Hi||im(e,n,a,i,u,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,Gv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Vn(e.type,a),s.props=c,f=e.pendingProps,u=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=an(n)?zr:Xt.current,l=Ho(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||u!==l)&&rm(e,s,i,l),Hi=!1,u=e.memoizedState,s.state=u,ac(e,i,s,r);var x=e.memoizedState;a!==f||u!==x||sn.current||Hi?(typeof p=="function"&&(cd(e,n,p,i),x=e.memoizedState),(c=Hi||im(e,n,c,i,u,x,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,x,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),s.props=i,s.state=x,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return hd(t,e,n,i,o,r)}function hd(t,e,n,i,r,o){mx(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Kp(e,n,!1),Ri(t,e,o);i=e.stateNode,u1.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Wo(e,t.child,null,o),e.child=Wo(e,null,a,o)):qt(t,e,a,o),e.memoizedState=i.state,r&&Kp(e,n,!0),e.child}function gx(t){var e=t.stateNode;e.pendingContext?qp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qp(t,e.context,!1),Eh(t,e.containerInfo)}function fm(t,e,n,i,r){return Go(),vh(r),e.flags|=256,qt(t,e,n,i),e.child}var pd={dehydrated:null,treeContext:null,retryLane:0};function md(t){return{baseLanes:t,cachePool:null,transitions:null}}function vx(t,e,n){var i=e.pendingProps,r=ft.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(ft,r&1),t===null)return ad(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Yc(s,i,0,null),t=Ir(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=md(n),e.memoizedState=pd,t):Ph(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return f1(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=ir(a,o):(o=Ir(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?md(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=pd,i}return o=t.child,t=o.sibling,i=ir(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ph(t,e){return e=Yc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ba(t,e,n,i){return i!==null&&vh(i),Wo(e,t.child,null,n),t=Ph(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function f1(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=zu(Error(me(422))),Ba(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Yc({mode:"visible",children:i.children},r,0,null),o=Ir(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Wo(e,t.child,null,s),e.child.memoizedState=md(s),e.memoizedState=pd,o);if(!(e.mode&1))return Ba(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(me(419)),i=zu(o,i,void 0),Ba(t,e,s,i)}if(a=(s&t.childLanes)!==0,rn||a){if(i=Dt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ci(t,r),Kn(i,t,r,-1))}return Fh(),i=zu(Error(me(421))),Ba(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=w1.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,xn=$i(r.nextSibling),yn=e,ct=!0,Gn=null,t!==null&&(Rn[Ln++]=Si,Rn[Ln++]=Mi,Rn[Ln++]=kr,Si=t.id,Mi=t.overflow,kr=e),e=Ph(e,i.children),e.flags|=4096,e)}function dm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ld(t.return,e,n)}function ku(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function xx(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(qt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dm(t,n,e);else if(t.tag===19)dm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&lc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ku(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&lc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ku(e,!0,n,null,o);break;case"together":ku(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(me(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function d1(t,e,n){switch(e.tag){case 3:gx(e),Go();break;case 5:Wv(e);break;case 1:an(e.type)&&nc(e);break;case 4:Eh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(oc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?vx(t,e,n):(ot(ft,ft.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);ot(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return xx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,px(t,e,n)}return Ri(t,e,n)}var _x,gd,yx,Sx;_x=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gd=function(){};yx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Pr(oi.current);var o=null;switch(n){case"input":r=zf(t,r),i=zf(t,i),o=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),o=[];break;case"textarea":r=Vf(t,r),i=Vf(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ec)}Gf(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qs.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&st("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};Sx=function(t,e,n,i){n!==i&&(e.flags|=4)};function vs(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function h1(t,e,n){var i=e.pendingProps;switch(gh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return an(e.type)&&tc(),Vt(e),null;case 3:return i=e.stateNode,Xo(),lt(sn),lt(Xt),Th(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(wd(Gn),Gn=null))),gd(t,e),Vt(e),null;case 5:wh(e);var r=Pr(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)yx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(me(166));return Vt(e),null}if(t=Pr(oi.current),za(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ii]=e,i[ra]=o,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<Rs.length;r++)st(Rs[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":Sp(i,o),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},st("invalid",i);break;case"textarea":Ep(i,o),st("invalid",i)}Gf(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",""+a]):qs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&st("scroll",i)}switch(n){case"input":Ra(i),Mp(i,o,!0);break;case"textarea":Ra(i),wp(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=ec)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=K0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ii]=e,t[ra]=i,_x(t,e,!1,!1),e.stateNode=t;e:{switch(s=Wf(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<Rs.length;r++)st(Rs[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":Sp(t,i),r=zf(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),st("invalid",t);break;case"textarea":Ep(t,i),r=Vf(t,i),st("invalid",t);break;default:r=i}Gf(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?J0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Z0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ks(t,l):typeof l=="number"&&Ks(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(qs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&st("scroll",t):l!=null&&th(t,o,l,s))}switch(n){case"input":Ra(t),Mp(t,i,!1);break;case"textarea":Ra(t),wp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Po(t,!!i.multiple,o,!1):i.defaultValue!=null&&Po(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ec)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)Sx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(me(166));if(n=Pr(sa.current),Pr(oi.current),za(e)){if(i=e.stateNode,n=e.memoizedProps,i[ii]=e,(o=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:Fa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fa(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ii]=e,e.stateNode=i}return Vt(e),null;case 13:if(lt(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&xn!==null&&e.mode&1&&!(e.flags&128))kv(),Go(),e.flags|=98560,o=!1;else if(o=za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(me(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(me(317));o[ii]=e}else Go(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),o=!1}else Gn!==null&&(wd(Gn),Gn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Et===0&&(Et=3):Fh())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Xo(),gd(t,e),t===null&&na(e.stateNode.containerInfo),Vt(e),null;case 10:return yh(e.type._context),Vt(e),null;case 17:return an(e.type)&&tc(),Vt(e),null;case 19:if(lt(ft),o=e.memoizedState,o===null)return Vt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)vs(o,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=lc(t),s!==null){for(e.flags|=128,vs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(ft,ft.current&1|2),e.child}t=t.sibling}o.tail!==null&&gt()>Yo&&(e.flags|=128,i=!0,vs(o,!1),e.lanes=4194304)}else{if(!i)if(t=lc(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ct)return Vt(e),null}else 2*gt()-o.renderingStartTime>Yo&&n!==1073741824&&(e.flags|=128,i=!0,vs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=gt(),e.sibling=null,n=ft.current,ot(ft,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Oh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(me(156,e.tag))}function p1(t,e){switch(gh(e),e.tag){case 1:return an(e.type)&&tc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xo(),lt(sn),lt(Xt),Th(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wh(e),null;case 13:if(lt(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(me(340));Go()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ft),null;case 4:return Xo(),null;case 10:return yh(e.type._context),null;case 22:case 23:return Oh(),null;case 24:return null;default:return null}}var Va=!1,Wt=!1,m1=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Co(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function vd(t,e,n){try{n()}catch(i){mt(t,e,i)}}var hm=!1;function g1(t,e){if(ed=Ql,t=Av(),ph(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,f=t,u=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)u=f,f=p;for(;;){if(f===t)break t;if(u===n&&++c===r&&(a=s),u===o&&++d===i&&(l=s),(p=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(td={focusedElem:t,selectionRange:n},Ql=!1,Ue=e;Ue!==null;)if(e=Ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ue=t;else for(;Ue!==null;){e=Ue;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,m=x.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:Vn(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(me(163))}}catch(S){mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ue=t;break}Ue=e.return}return x=hm,hm=!1,x}function Hs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&vd(e,n,o)}r=r.next}while(r!==i)}}function Xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mx(t){var e=t.alternate;e!==null&&(t.alternate=null,Mx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ii],delete e[ra],delete e[rd],delete e[JS],delete e[$S])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ex(t){return t.tag===5||t.tag===3||t.tag===4}function pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ex(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _d(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ec));else if(i!==4&&(t=t.child,t!==null))for(_d(t,e,n),t=t.sibling;t!==null;)_d(t,e,n),t=t.sibling}function yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}var It=null,Hn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)wx(t,e,n),n=n.sibling}function wx(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(Fc,n)}catch{}switch(n.tag){case 5:Wt||Co(n,e);case 6:var i=It,r=Hn;It=null,Ii(t,e,n),It=i,Hn=r,It!==null&&(Hn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Hn?(t=It,n=n.stateNode,t.nodeType===8?Du(t.parentNode,n):t.nodeType===1&&Du(t,n),$s(t)):Du(It,n.stateNode));break;case 4:i=It,r=Hn,It=n.stateNode.containerInfo,Hn=!0,Ii(t,e,n),It=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&vd(n,e,s),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!Wt&&(Co(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Ii(t,e,n),Wt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new m1),e.forEach(function(i){var r=T1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Hn=!1;break e;case 3:It=a.stateNode.containerInfo,Hn=!0;break e;case 4:It=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(It===null)throw Error(me(160));wx(o,s,r),It=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tx(e,t),e=e.sibling}function Tx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),ei(t),i&4){try{Hs(3,t,t.return),Xc(3,t)}catch(_){mt(t,t.return,_)}try{Hs(5,t,t.return)}catch(_){mt(t,t.return,_)}}break;case 1:Fn(e,t),ei(t),i&512&&n!==null&&Co(n,n.return);break;case 5:if(Fn(e,t),ei(t),i&512&&n!==null&&Co(n,n.return),t.flags&32){var r=t.stateNode;try{Ks(r,"")}catch(_){mt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Y0(r,o),Wf(a,s);var c=Wf(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?J0(r,f):d==="dangerouslySetInnerHTML"?Z0(r,f):d==="children"?Ks(r,f):th(r,d,f,c)}switch(a){case"input":kf(r,o);break;case"textarea":q0(r,o);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Po(r,!!o.multiple,p,!1):u!==!!o.multiple&&(o.defaultValue!=null?Po(r,!!o.multiple,o.defaultValue,!0):Po(r,!!o.multiple,o.multiple?[]:"",!1))}r[ra]=o}catch(_){mt(t,t.return,_)}}break;case 6:if(Fn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(me(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(_){mt(t,t.return,_)}}break;case 3:if(Fn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{$s(e.containerInfo)}catch(_){mt(t,t.return,_)}break;case 4:Fn(e,t),ei(t);break;case 13:Fn(e,t),ei(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Ih=gt())),i&4&&mm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(c=Wt)||d,Fn(e,t),Wt=c):Fn(e,t),ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Ue=t,d=t.child;d!==null;){for(f=Ue=d;Ue!==null;){switch(u=Ue,p=u.child,u.tag){case 0:case 11:case 14:case 15:Hs(4,u,u.return);break;case 1:Co(u,u.return);var x=u.stateNode;if(typeof x.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){mt(i,n,_)}}break;case 5:Co(u,u.return);break;case 22:if(u.memoizedState!==null){vm(f);continue}}p!==null?(p.return=u,Ue=p):vm(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Q0("display",s))}catch(_){mt(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){mt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fn(e,t),ei(t),i&4&&mm(t);break;case 21:break;default:Fn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ex(n)){var i=n;break e}n=n.return}throw Error(me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ks(r,""),i.flags&=-33);var o=pm(t);yd(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=pm(t);_d(t,a,s);break;default:throw Error(me(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function v1(t,e,n){Ue=t,Ax(t)}function Ax(t,e,n){for(var i=(t.mode&1)!==0;Ue!==null;){var r=Ue,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Va;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=Va;var c=Wt;if(Va=s,(Wt=l)&&!c)for(Ue=r;Ue!==null;)s=Ue,l=s.child,s.tag===22&&s.memoizedState!==null?xm(r):l!==null?(l.return=s,Ue=l):xm(r);for(;o!==null;)Ue=o,Ax(o),o=o.sibling;Ue=r,Va=a,Wt=c}gm(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Ue=o):gm(t)}}function gm(t){for(;Ue!==null;){var e=Ue;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||Xc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&em(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}em(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&$s(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(me(163))}Wt||e.flags&512&&xd(e)}catch(u){mt(e,e.return,u)}}if(e===t){Ue=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function vm(t){for(;Ue!==null;){var e=Ue;if(e===t){Ue=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function xm(t){for(;Ue!==null;){var e=Ue;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xc(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var o=e.return;try{xd(e)}catch(l){mt(e,o,l)}break;case 5:var s=e.return;try{xd(e)}catch(l){mt(e,s,l)}}}catch(l){mt(e,e.return,l)}if(e===t){Ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ue=a;break}Ue=e.return}}var x1=Math.ceil,fc=Ni.ReactCurrentDispatcher,Dh=Ni.ReactCurrentOwner,In=Ni.ReactCurrentBatchConfig,tt=0,Dt=null,_t=null,Ot=0,gn=0,Ro=hr(0),Et=0,ua=null,Vr=0,jc=0,Nh=0,Gs=null,en=null,Ih=0,Yo=1/0,vi=null,dc=!1,Sd=null,tr=null,Ha=!1,ji=null,hc=0,Ws=0,Md=null,Ul=-1,Ol=0;function Kt(){return tt&6?gt():Ul!==-1?Ul:Ul=gt()}function nr(t){return t.mode&1?tt&2&&Ot!==0?Ot&-Ot:t1.transition!==null?(Ol===0&&(Ol=uv()),Ol):(t=nt,t!==0||(t=window.event,t=t===void 0?16:vv(t.type)),t):1}function Kn(t,e,n,i){if(50<Ws)throw Ws=0,Md=null,Error(me(185));ga(t,n,i),(!(tt&2)||t!==Dt)&&(t===Dt&&(!(tt&2)&&(jc|=n),Et===4&&Wi(t,Ot)),ln(t,i),n===1&&tt===0&&!(e.mode&1)&&(Yo=gt()+500,Hc&&pr()))}function ln(t,e){var n=t.callbackNode;tS(t,e);var i=Zl(t,t===Dt?Ot:0);if(i===0)n!==null&&bp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&bp(n),e===1)t.tag===0?e1(_m.bind(null,t)):Ov(_m.bind(null,t)),ZS(function(){!(tt&6)&&pr()}),n=null;else{switch(fv(i)){case 1:n=sh;break;case 4:n=lv;break;case 16:n=Kl;break;case 536870912:n=cv;break;default:n=Kl}n=Ix(n,bx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bx(t,e){if(Ul=-1,Ol=0,tt&6)throw Error(me(327));var n=t.callbackNode;if(Oo()&&t.callbackNode!==n)return null;var i=Zl(t,t===Dt?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=pc(t,i);else{e=i;var r=tt;tt|=2;var o=Rx();(Dt!==t||Ot!==e)&&(vi=null,Yo=gt()+500,Nr(t,e));do try{S1();break}catch(a){Cx(t,a)}while(!0);_h(),fc.current=o,tt=r,_t!==null?e=0:(Dt=null,Ot=0,e=Et)}if(e!==0){if(e===2&&(r=Kf(t),r!==0&&(i=r,e=Ed(t,r))),e===1)throw n=ua,Nr(t,0),Wi(t,i),ln(t,gt()),n;if(e===6)Wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!_1(r)&&(e=pc(t,i),e===2&&(o=Kf(t),o!==0&&(i=o,e=Ed(t,o))),e===1))throw n=ua,Nr(t,0),Wi(t,i),ln(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(me(345));case 2:wr(t,en,vi);break;case 3:if(Wi(t,i),(i&130023424)===i&&(e=Ih+500-gt(),10<e)){if(Zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=id(wr.bind(null,t,en,vi),e);break}wr(t,en,vi);break;case 4:if(Wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-qn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*x1(i/1960))-i,10<i){t.timeoutHandle=id(wr.bind(null,t,en,vi),i);break}wr(t,en,vi);break;case 5:wr(t,en,vi);break;default:throw Error(me(329))}}}return ln(t,gt()),t.callbackNode===n?bx.bind(null,t):null}function Ed(t,e){var n=Gs;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=pc(t,e),t!==2&&(e=en,en=n,e!==null&&wd(e)),t}function wd(t){en===null?en=t:en.push.apply(en,t)}function _1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Qn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wi(t,e){for(e&=~Nh,e&=~jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function _m(t){if(tt&6)throw Error(me(327));Oo();var e=Zl(t,0);if(!(e&1))return ln(t,gt()),null;var n=pc(t,e);if(t.tag!==0&&n===2){var i=Kf(t);i!==0&&(e=i,n=Ed(t,i))}if(n===1)throw n=ua,Nr(t,0),Wi(t,e),ln(t,gt()),n;if(n===6)throw Error(me(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,en,vi),ln(t,gt()),null}function Uh(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(Yo=gt()+500,Hc&&pr())}}function Hr(t){ji!==null&&ji.tag===0&&!(tt&6)&&Oo();var e=tt;tt|=1;var n=In.transition,i=nt;try{if(In.transition=null,nt=1,t)return t()}finally{nt=i,In.transition=n,tt=e,!(tt&6)&&pr()}}function Oh(){gn=Ro.current,lt(Ro)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,KS(n)),_t!==null)for(n=_t.return;n!==null;){var i=n;switch(gh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&tc();break;case 3:Xo(),lt(sn),lt(Xt),Th();break;case 5:wh(i);break;case 4:Xo();break;case 13:lt(ft);break;case 19:lt(ft);break;case 10:yh(i.type._context);break;case 22:case 23:Oh()}n=n.return}if(Dt=t,_t=t=ir(t.current,null),Ot=gn=e,Et=0,ua=null,Nh=jc=Vr=0,en=Gs=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Lr=null}return t}function Cx(t,e){do{var n=_t;try{if(_h(),Dl.current=uc,cc){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}cc=!1}if(Br=0,Lt=St=dt=null,Vs=!1,aa=0,Dh.current=null,n===null||n.return===null){Et=1,ua=e,_t=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=sm(s);if(p!==null){p.flags&=-257,am(p,s,a,o,e),p.mode&1&&om(o,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){om(o,c,e),Fh();break e}l=Error(me(426))}}else if(ct&&a.mode&1){var m=sm(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),am(m,s,a,o,e),vh(jo(l,a));break e}}o=l=jo(l,a),Et!==4&&(Et=2),Gs===null?Gs=[o]:Gs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=fx(o,l,e);$p(o,h);break e;case 1:a=l;var v=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(tr===null||!tr.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var S=dx(o,a,e);$p(o,S);break e}}o=o.return}while(o!==null)}Px(n)}catch(b){e=b,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function Rx(){var t=fc.current;return fc.current=uc,t===null?uc:t}function Fh(){(Et===0||Et===3||Et===2)&&(Et=4),Dt===null||!(Vr&268435455)&&!(jc&268435455)||Wi(Dt,Ot)}function pc(t,e){var n=tt;tt|=2;var i=Rx();(Dt!==t||Ot!==e)&&(vi=null,Nr(t,e));do try{y1();break}catch(r){Cx(t,r)}while(!0);if(_h(),tt=n,fc.current=i,_t!==null)throw Error(me(261));return Dt=null,Ot=0,Et}function y1(){for(;_t!==null;)Lx(_t)}function S1(){for(;_t!==null&&!jy();)Lx(_t)}function Lx(t){var e=Nx(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?Px(t):_t=e,Dh.current=null}function Px(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=p1(n,e),n!==null){n.flags&=32767,_t=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,_t=null;return}}else if(n=h1(n,e,gn),n!==null){_t=n;return}if(e=e.sibling,e!==null){_t=e;return}_t=e=t}while(e!==null);Et===0&&(Et=5)}function wr(t,e,n){var i=nt,r=In.transition;try{In.transition=null,nt=1,M1(t,e,n,i)}finally{In.transition=r,nt=i}return null}function M1(t,e,n,i){do Oo();while(ji!==null);if(tt&6)throw Error(me(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(me(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(nS(t,o),t===Dt&&(_t=Dt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,Ix(Kl,function(){return Oo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=In.transition,In.transition=null;var s=nt;nt=1;var a=tt;tt|=4,Dh.current=null,g1(t,n),Tx(n,t),HS(td),Ql=!!ed,td=ed=null,t.current=n,v1(n),Yy(),tt=a,nt=s,In.transition=o}else t.current=n;if(Ha&&(Ha=!1,ji=t,hc=r),o=t.pendingLanes,o===0&&(tr=null),Zy(n.stateNode),ln(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(dc)throw dc=!1,t=Sd,Sd=null,t;return hc&1&&t.tag!==0&&Oo(),o=t.pendingLanes,o&1?t===Md?Ws++:(Ws=0,Md=t):Ws=0,pr(),null}function Oo(){if(ji!==null){var t=fv(hc),e=In.transition,n=nt;try{if(In.transition=null,nt=16>t?16:t,ji===null)var i=!1;else{if(t=ji,ji=null,hc=0,tt&6)throw Error(me(331));var r=tt;for(tt|=4,Ue=t.current;Ue!==null;){var o=Ue,s=o.child;if(Ue.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ue=c;Ue!==null;){var d=Ue;switch(d.tag){case 0:case 11:case 15:Hs(8,d,o)}var f=d.child;if(f!==null)f.return=d,Ue=f;else for(;Ue!==null;){d=Ue;var u=d.sibling,p=d.return;if(Mx(d),d===c){Ue=null;break}if(u!==null){u.return=p,Ue=u;break}Ue=p}}}var x=o.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Ue=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Ue=s;else e:for(;Ue!==null;){if(o=Ue,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Hs(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,Ue=h;break e}Ue=o.return}}var v=t.current;for(Ue=v;Ue!==null;){s=Ue;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,Ue=g;else e:for(s=v;Ue!==null;){if(a=Ue,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xc(9,a)}}catch(b){mt(a,a.return,b)}if(a===s){Ue=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ue=S;break e}Ue=a.return}}if(tt=r,pr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(Fc,t)}catch{}i=!0}return i}finally{nt=n,In.transition=e}}return!1}function ym(t,e,n){e=jo(n,e),e=fx(t,e,1),t=er(t,e,1),e=Kt(),t!==null&&(ga(t,1,e),ln(t,e))}function mt(t,e,n){if(t.tag===3)ym(t,t,n);else for(;e!==null;){if(e.tag===3){ym(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=jo(n,t),t=dx(e,t,1),e=er(e,t,1),t=Kt(),e!==null&&(ga(e,1,t),ln(e,t));break}}e=e.return}}function E1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ot&n)===n&&(Et===4||Et===3&&(Ot&130023424)===Ot&&500>gt()-Ih?Nr(t,0):Nh|=n),ln(t,e)}function Dx(t,e){e===0&&(t.mode&1?(e=Da,Da<<=1,!(Da&130023424)&&(Da=4194304)):e=1);var n=Kt();t=Ci(t,e),t!==null&&(ga(t,e,n),ln(t,n))}function w1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dx(t,n)}function T1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(me(314))}i!==null&&i.delete(e),Dx(t,n)}var Nx;Nx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,d1(t,e,n);rn=!!(t.flags&131072)}else rn=!1,ct&&e.flags&1048576&&Fv(e,rc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Il(t,e),t=e.pendingProps;var r=Ho(e,Xt.current);Uo(e,n),r=bh(null,e,i,t,r,n);var o=Ch();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(o=!0,nc(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mh(e),r.updater=Wc,e.stateNode=r,r._reactInternals=e,ud(e,i,t,n),e=hd(null,e,i,!0,o,n)):(e.tag=0,ct&&o&&mh(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=b1(i),t=Vn(i,t),r){case 0:e=dd(null,e,i,t,n);break e;case 1:e=um(null,e,i,t,n);break e;case 11:e=lm(null,e,i,t,n);break e;case 14:e=cm(null,e,i,Vn(i.type,t),n);break e}throw Error(me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),dd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),um(t,e,i,r,n);case 3:e:{if(gx(e),t===null)throw Error(me(387));i=e.pendingProps,o=e.memoizedState,r=o.element,Gv(t,e),ac(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=jo(Error(me(423)),e),e=fm(t,e,i,n,r);break e}else if(i!==r){r=jo(Error(me(424)),e),e=fm(t,e,i,n,r);break e}else for(xn=$i(e.stateNode.containerInfo.firstChild),yn=e,ct=!0,Gn=null,n=Vv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Go(),i===r){e=Ri(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return Wv(e),t===null&&ad(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,nd(i,r)?s=null:o!==null&&nd(i,o)&&(e.flags|=32),mx(t,e),qt(t,e,s,n),e.child;case 6:return t===null&&ad(e),null;case 13:return vx(t,e,n);case 4:return Eh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Wo(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),lm(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,ot(oc,i._currentValue),i._currentValue=s,o!==null)if(Qn(o.value,s)){if(o.children===r.children&&!sn.current){e=Ri(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=wi(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ld(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(me(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ld(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Uo(e,n),r=Un(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),cm(t,e,i,r,n);case 15:return hx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Il(t,e),e.tag=1,an(i)?(t=!0,nc(e)):t=!1,Uo(e,n),ux(e,i,r),ud(e,i,r,n),hd(null,e,i,!0,t,n);case 19:return xx(t,e,n);case 22:return px(t,e,n)}throw Error(me(156,e.tag))};function Ix(t,e){return av(t,e)}function A1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new A1(t,e,n,i)}function zh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function b1(t){if(typeof t=="function")return zh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ih)return 11;if(t===rh)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")zh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case _o:return Ir(n.children,r,o,e);case nh:s=8,r|=8;break;case If:return t=Nn(12,n,e,r|2),t.elementType=If,t.lanes=o,t;case Uf:return t=Nn(13,n,e,r),t.elementType=Uf,t.lanes=o,t;case Of:return t=Nn(19,n,e,r),t.elementType=Of,t.lanes=o,t;case W0:return Yc(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H0:s=10;break e;case G0:s=9;break e;case ih:s=11;break e;case rh:s=14;break e;case Vi:s=16,i=null;break e}throw Error(me(130,t==null?t:typeof t,""))}return e=Nn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Ir(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function Yc(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=W0,t.lanes=n,t.stateNode={isHidden:!1},t}function Bu(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Vu(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function C1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Su(0),this.expirationTimes=Su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Su(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kh(t,e,n,i,r,o,s,a,l){return t=new C1(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Nn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mh(o),t}function R1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ux(t){if(!t)return cr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(me(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(me(171))}if(t.tag===1){var n=t.type;if(an(n))return Uv(t,n,e)}return e}function Ox(t,e,n,i,r,o,s,a,l){return t=kh(n,i,!0,t,r,o,s,a,l),t.context=Ux(null),n=t.current,i=Kt(),r=nr(n),o=wi(i,r),o.callback=e??null,er(n,o,r),t.current.lanes=r,ga(t,r,i),ln(t,i),t}function qc(t,e,n,i){var r=e.current,o=Kt(),s=nr(r);return n=Ux(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=er(r,e,s),t!==null&&(Kn(t,r,s,o),Pl(t,r,s)),s}function mc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bh(t,e){Sm(t,e),(t=t.alternate)&&Sm(t,e)}function L1(){return null}var Fx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vh(t){this._internalRoot=t}Kc.prototype.render=Vh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(me(409));qc(t,e,null,null)};Kc.prototype.unmount=Vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){qc(null,t,null,null)}),e[bi]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=pv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gi.length&&e!==0&&e<Gi[n].priority;n++);Gi.splice(n,0,t),n===0&&gv(t)}};function Hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function P1(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=mc(s);o.call(c)}}var s=Ox(e,i,t,0,null,!1,!1,"",Mm);return t._reactRootContainer=s,t[bi]=s.current,na(t.nodeType===8?t.parentNode:t),Hr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=mc(l);a.call(c)}}var l=kh(t,0,!1,null,null,!1,!1,"",Mm);return t._reactRootContainer=l,t[bi]=l.current,na(t.nodeType===8?t.parentNode:t),Hr(function(){qc(e,l,n,i)}),l}function Qc(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=mc(s);a.call(l)}}qc(e,s,t,r)}else s=P1(n,e,t,r,i);return mc(s)}dv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Cs(e.pendingLanes);n!==0&&(ah(e,n|1),ln(e,gt()),!(tt&6)&&(Yo=gt()+500,pr()))}break;case 13:Hr(function(){var i=Ci(t,1);if(i!==null){var r=Kt();Kn(i,t,1,r)}}),Bh(t,1)}};lh=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=Kt();Kn(e,t,134217728,n)}Bh(t,134217728)}};hv=function(t){if(t.tag===13){var e=nr(t),n=Ci(t,e);if(n!==null){var i=Kt();Kn(n,t,e,i)}Bh(t,e)}};pv=function(){return nt};mv=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};jf=function(t,e,n){switch(e){case"input":if(kf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Vc(i);if(!r)throw Error(me(90));j0(i),kf(i,r)}}}break;case"textarea":q0(t,n);break;case"select":e=n.value,e!=null&&Po(t,!!n.multiple,e,!1)}};tv=Uh;nv=Hr;var D1={usingClientEntryPoint:!1,Events:[xa,Eo,Vc,$0,ev,Uh]},xs={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N1={bundleType:xs.bundleType,version:xs.version,rendererPackageName:xs.rendererPackageName,rendererConfig:xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ov(t),t===null?null:t.stateNode},findFiberByHostInstance:xs.findFiberByHostInstance||L1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{Fc=Ga.inject(N1),ri=Ga}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(e))throw Error(me(200));return R1(t,e,null,n)};En.createRoot=function(t,e){if(!Hh(t))throw Error(me(299));var n=!1,i="",r=Fx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kh(t,1,!1,null,null,n,!1,i,r),t[bi]=e.current,na(t.nodeType===8?t.parentNode:t),new Vh(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(me(188)):(t=Object.keys(t).join(","),Error(me(268,t)));return t=ov(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Hr(t)};En.hydrate=function(t,e,n){if(!Zc(e))throw Error(me(200));return Qc(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Hh(t))throw Error(me(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=Fx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Ox(e,null,t,1,n??null,r,!1,o,s),t[bi]=e.current,na(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Kc(e)};En.render=function(t,e,n){if(!Zc(e))throw Error(me(200));return Qc(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!Zc(t))throw Error(me(40));return t._reactRootContainer?(Hr(function(){Qc(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1};En.unstable_batchedUpdates=Uh;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Zc(n))throw Error(me(200));if(t==null||t._reactInternals===void 0)throw Error(me(38));return Qc(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function zx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zx)}catch(t){console.error(t)}}zx(),z0.exports=En;var I1=z0.exports,Em=I1;Df.createRoot=Em.createRoot,Df.hydrateRoot=Em.hydrateRoot;const U1=({softwareName:t="Software Name (title)"})=>J.jsx("div",{style:{flex:"5%",width:"100%",backgroundColor:"#000000",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",fontWeight:"bold",borderBottom:"2px solid #34495e"},children:t}),Cn=["Hoechst","5'hmC","MX1","MART1","Hoechst","CD3E (do not use)","MHC-I","SOX10","Hoechst","S100B","MITF","GranzymeB (do not use)","Hoechst","pan-cytokeratin","lamin-ABC","PDL1","Hoechst","PD1 (do not use)","S100A","CD31","Hoechst","CD206","pMLC2","CD11b (do not use)","Hoechst","CD4","LAG3","CD20","Hoechst","PRAME","CD163","IRF1","Hoechst","B-catenin","CD3E","CD8a","Hoechst","CD11b","FOXP3","PD1","Hoechst","Ki67","CD11c","COX-IV","Hoechst","LysozymeC","SOX9","PMEL","CD103","Hoechst","CyclinD1","BAF1","Hoechst","B-actin","Mast cell tryptase","CD15","Podoplanin","Hoechst","B-tubulin","Catalase","y-H2AX","Hoechst","E-cadherin","Vimentin","Neurofilament L (do not use)","GranzymeB","Hoechst","MHC-II","H3K27me3","Collagen (SHG)"],Qr=70,O1=({onChannelsChange:t,presetChannels:e=[],presetVersion:n=0})=>{const[i,r]=ae.useState([]),o=ae.useRef(null),s=ae.useRef(e),a=ae.useRef(!1);ae.useEffect(()=>{s.current=e},[e]);const[l,c]=ae.useState({}),[d,f]=ae.useState({}),[u,p]=ae.useState(()=>Cn&&Array.isArray(Cn)&&Cn.length>=Qr?Array.from({length:Qr},(w,A)=>({value:A,label:Cn[A]||`Channel ${A}`})):Array.from({length:Qr},(w,A)=>({value:A,label:`Channel ${A}`})));ae.useEffect(()=>{const w=async()=>{try{const A=await fetch("/src/channel_names.json");if(A.ok){const T=await A.json();Array.isArray(T)&&T.length>=Qr&&p(Array.from({length:Qr},(y,E)=>({value:E,label:T[E]||`Channel ${E}`})))}}catch(A){console.warn("Could not load channel names from JSON, using defaults:",A)}};(!Cn||!Array.isArray(Cn)||Cn.length<Qr)&&w()},[]);const x=ae.useMemo(()=>i.map(w=>w.channelIndex).join(","),[i]);ae.useEffect(()=>{if(n==null||o.current===n)return;o.current=n;const w=Array.isArray(s.current)?s.current:[],A=new Set,T=w.map((E,R)=>{const D=E.id??E.channelIndex??R;let U=String(D),P=1;for(;A.has(U);)U=`${D}_${P++}`;return A.add(U),{...E,id:U,visible:E.visible!==!1,opacity:E.opacity??1,color:E.color||"#ffffff"}}),y={};T.forEach(E=>{y[E.id]={thresholdMin:E.thresholdMin??0,thresholdMax:E.thresholdMax??0}}),c({}),f(y),a.current=!0,r(T)},[n,t]),ae.useEffect(()=>{f(w=>{const A={};return i.forEach(T=>{const y=w[T.id];A[T.id]=y||{thresholdMin:T.thresholdMin,thresholdMax:T.thresholdMax}}),A})},[i]),ae.useEffect(()=>{let w=!1;return(async()=>{if(i.length===0){w||c({});return}const T={...l};let y=!1;for(const E of i){const R=E.channelIndex;if(T[R])continue;const D=[`./visualization_data/channel_${R}_napari_metadata.json`,`visualization_data/channel_${R}_napari_metadata.json`,`./visualization_data/channel_${R}_metadata.json`,`visualization_data/channel_${R}_metadata.json`];for(const U of D)try{const P=await fetch(U);if(P.ok){const B=(await P.json()).dataRange||[0,65535];T[R]=B,console.log(`Channel ${R}: Data range [${B[0]}, ${B[1]}]`),y=!0;break}}catch{}T[R]||(T[R]=[0,65535],y=!0,console.log(`Channel ${R}: Using default data range [0, 65535]`))}y&&!w&&(c(T),r(E=>E.map(R=>{const D=T[R.channelIndex]||[0,65535];if(R.dataRange&&R.dataRange[0]===D[0]&&R.dataRange[1]===D[1])return R;const U=D[1]-D[0],P=Math.round(D[0]+U*.1),z=Math.round(D[0]+U*.9);return f(B=>({...B,[R.id]:{thresholdMin:P,thresholdMax:z}})),{...R,dataRange:D,thresholdMin:R.thresholdMin===void 0||R.thresholdMin<D[0]||R.thresholdMin>D[1]?P:R.thresholdMin,thresholdMax:R.thresholdMax===void 0||R.thresholdMax<D[0]||R.thresholdMax>D[1]?z:R.thresholdMax}})))})(),()=>{w=!0}},[x]),ae.useEffect(()=>{if(a.current){a.current=!1;return}t&&t(i)},[i,t]);const _=async()=>{const w=i.map(B=>typeof B.id=="number"&&Number.isFinite(B.id)?B.id:null).filter(B=>B!==null),T=(w.length>0?Math.max(...w):-1)+1;let y=[0,65535];const E=["./visualization_data/channel_0_napari_metadata.json","visualization_data/channel_0_napari_metadata.json","./visualization_data/channel_0_metadata.json","visualization_data/channel_0_metadata.json"];for(const B of E)try{const W=await fetch(B);if(W.ok){y=(await W.json()).dataRange||[0,65535];break}}catch{continue}const R=y[1]-y[0],D=Math.round(y[0]+R*.1),U=Math.round(y[0]+R*.9),P={id:T,channelIndex:0,color:"#ffffff",thresholdMin:D,thresholdMax:U,dataRange:y,opacity:1,visible:!1},z=[...i,P];r(z),f(B=>({...B,[T]:{thresholdMin:P.thresholdMin,thresholdMax:P.thresholdMax}})),t&&t(z)},m=w=>{const A=i.filter(T=>T.id!==w);r(A),f(T=>{const y={...T};return delete y[w],y}),t&&t(A)},h=(w,A,T)=>{const y=i.map(E=>{if(E.id===w){const R={...E,[A]:T};if(A==="channelIndex"){const U=parseInt(T),P=l[U]||[0,65535];R.dataRange=P;const z=P[1]-P[0];R.thresholdMin=Math.round(P[0]+z*.1),R.thresholdMax=Math.round(P[0]+z*.9)}A==="opacity"&&(R[A]=parseFloat(T)),A==="thresholdMin"&&R.thresholdMin>R.thresholdMax&&(R.thresholdMax=R.thresholdMin),A==="thresholdMax"&&R.thresholdMax<R.thresholdMin&&(R.thresholdMin=R.thresholdMax);const D=R.dataRange||[0,65535];return R.thresholdMin<D[0]&&(R.thresholdMin=D[0]),R.thresholdMin>D[1]&&(R.thresholdMin=D[1]),R.thresholdMax<D[0]&&(R.thresholdMax=D[0]),R.thresholdMax>D[1]&&(R.thresholdMax=D[1]),A==="channelIndex"&&f(U=>({...U,[w]:{thresholdMin:R.thresholdMin,thresholdMax:R.thresholdMax}})),R}return E});r(y),t&&t(y)},v=(w,A,T)=>{const y=i.find(D=>D.id===w);if(!y)return;const E=y.dataRange||[0,65535],R=g(parseInt(T,10),E[0],E[1]);f(D=>{const P={...D[w]||{thresholdMin:y.thresholdMin,thresholdMax:y.thresholdMax},[A]:R};return A==="thresholdMin"&&P.thresholdMin>P.thresholdMax&&(P.thresholdMax=P.thresholdMin),A==="thresholdMax"&&P.thresholdMax<P.thresholdMin&&(P.thresholdMin=P.thresholdMax),P.thresholdMin=g(P.thresholdMin,E[0],E[1]),P.thresholdMax=g(P.thresholdMax,E[0],E[1]),{...D,[w]:P}})},g=(w,A,T)=>Number.isNaN(w)?A:Math.min(Math.max(w,A),T),S=()=>{let w=!1;const A=i.map(T=>{const y=d[T.id];return!y||T.thresholdMin===y.thresholdMin&&T.thresholdMax===y.thresholdMax?T:(w=!0,{...T,thresholdMin:y.thresholdMin,thresholdMax:y.thresholdMax})});w&&(r(A),f(T=>{const y={...T};return A.forEach(E=>{y[E.id]={thresholdMin:E.thresholdMin,thresholdMax:E.thresholdMax}}),y}),t&&t(A))},b=w=>{const A=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(w);return A?{r:parseInt(A[1],16),g:parseInt(A[2],16),b:parseInt(A[3],16)}:{r:255,g:255,b:255}};return J.jsxs("div",{style:{height:"100%",width:"100%",backgroundColor:"#000000",border:"1px solid #444",padding:"10px",display:"flex",flexDirection:"column",fontSize:"12px",boxSizing:"border-box",overflow:"hidden"},children:[J.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px",paddingBottom:"12px",borderBottom:"1px solid #444"},children:J.jsx("h3",{style:{margin:0,fontSize:"16px",color:"white",fontWeight:"500"},children:"Image"})}),J.jsx("div",{style:{flex:1,overflowY:"auto",marginBottom:"12px"},children:i.map((w,A)=>{const T=b(w.color),y=`rgb(${T.r}, ${T.g}, ${T.b})`;return J.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px",padding:"6px",backgroundColor:"#1a1a1a",borderRadius:"4px",border:"1px solid #444"},children:[J.jsxs("div",{style:{position:"relative",width:"16px",height:"16px"},children:[J.jsx("input",{type:"checkbox",checked:w.visible,onChange:E=>h(w.id,"visible",E.target.checked),style:{width:"16px",height:"16px",cursor:"pointer",appearance:"none",border:"2px solid #ccc",borderRadius:"3px",backgroundColor:w.visible?y:"white",position:"relative"}}),w.visible&&J.jsx("span",{style:{position:"absolute",left:"2px",top:"-1px",color:"white",fontSize:"12px",fontWeight:"bold",pointerEvents:"none"},children:"✓"})]}),J.jsx("div",{style:{width:"16px",height:"16px",backgroundColor:w.color,borderRadius:"3px",border:"1px solid #555",flexShrink:0}}),J.jsx("select",{value:w.channelIndex,onChange:E=>h(w.id,"channelIndex",parseInt(E.target.value)),style:{padding:"5px 8px",backgroundColor:"#2a2a2a",color:"white",border:"1px solid #555",borderRadius:"4px",fontSize:"11px",minWidth:"100px",cursor:"pointer",outline:"none"},children:u.map(E=>J.jsx("option",{value:E.value,children:E.label},E.value))}),J.jsx("input",{type:"color",value:w.color,onChange:E=>h(w.id,"color",E.target.value),style:{width:"0px",height:"0px",opacity:0,position:"absolute",pointerEvents:"none"},id:`color-picker-${w.id}`}),J.jsx("div",{onClick:()=>document.getElementById(`color-picker-${w.id}`).click(),style:{width:"20px",height:"20px",backgroundColor:w.color,borderRadius:"4px",border:"1px solid #555",cursor:"pointer",flexShrink:0}}),J.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",minWidth:"160px",flex:1,position:"relative"},children:[(()=>{const E=w.dataRange||[0,65535],R=E[0],D=E[1],U=d[w.id]||{thresholdMin:w.thresholdMin??R,thresholdMax:w.thresholdMax??D},P=U.thresholdMin,z=U.thresholdMax,B=(P-R)/(D-R)*100,W=(z-R)/(D-R)*100;return J.jsxs(J.Fragment,{children:[J.jsxs("div",{style:{position:"relative",width:"100%",height:"20px",marginBottom:"4px"},children:[J.jsx("div",{style:{position:"absolute",left:`${B}%`,transform:"translateX(-50%)",top:"0px",backgroundColor:w.color,color:"white",padding:"2px 6px",borderRadius:"10px",fontSize:"10px",fontWeight:"bold",whiteSpace:"nowrap",pointerEvents:"none",zIndex:10,boxShadow:"0 2px 4px rgba(0,0,0,0.3)"},children:P.toLocaleString()}),J.jsx("div",{style:{position:"absolute",left:`${W}%`,transform:"translateX(-50%)",top:"0px",backgroundColor:w.color,color:"white",padding:"2px 6px",borderRadius:"10px",fontSize:"10px",fontWeight:"bold",whiteSpace:"nowrap",pointerEvents:"none",zIndex:10,boxShadow:"0 2px 4px rgba(0,0,0,0.3)"},children:z.toLocaleString()})]}),J.jsxs("div",{style:{position:"relative",width:"100%",height:"10px",display:"flex",alignItems:"center",flex:1},children:[J.jsx("div",{style:{position:"absolute",width:"100%",height:"5px",backgroundColor:"#555",borderRadius:"3px",zIndex:0}}),J.jsx("div",{style:{position:"absolute",left:`${B}%`,width:`${W-B}%`,height:"5px",backgroundColor:w.color,borderRadius:"3px",zIndex:0,pointerEvents:"none",opacity:.8}}),J.jsx("input",{type:"range",min:R,max:D,step:Math.max(1,Math.floor((D-R)/1e3)),value:P,onChange:I=>{const F=Math.min(parseInt(I.target.value,10),z);v(w.id,"thresholdMin",F)},onMouseDown:I=>{I.stopPropagation(),I.currentTarget.style.zIndex="10";const F=I.currentTarget.closest("div");if(F){const V=F.querySelector('input[type="range"]:last-of-type');V&&V!==I.currentTarget&&(V.style.zIndex="9")}},onMouseUp:I=>{const F=(P-R)/(D-R),V=(z-R)/(D-R);I.currentTarget.style.zIndex=F<=V?"4":"5"},style:{position:"absolute",width:"100%",height:"10px",margin:0,padding:0,top:"-2px",zIndex:B<=W?"4":"5",pointerEvents:"auto",background:"transparent",WebkitAppearance:"none",appearance:"none",cursor:"pointer",outline:"none",touchAction:"none"}}),J.jsx("input",{type:"range",min:R,max:D,step:Math.max(1,Math.floor((D-R)/1e3)),value:z,onChange:I=>{const F=Math.max(parseInt(I.target.value,10),P);v(w.id,"thresholdMax",F)},onMouseDown:I=>{I.stopPropagation(),I.currentTarget.style.zIndex="10";const F=I.currentTarget.closest("div");if(F){const V=F.querySelector('input[type="range"]:first-of-type');V&&V!==I.currentTarget&&(V.style.zIndex="9")}},onMouseUp:I=>{const F=(P-R)/(D-R),V=(z-R)/(D-R);I.currentTarget.style.zIndex=V>=F?"5":"4"},style:{position:"absolute",width:"100%",height:"10px",margin:0,padding:0,top:"-2px",zIndex:W>=B?"5":"4",pointerEvents:"auto",background:"transparent",WebkitAppearance:"none",appearance:"none",cursor:"pointer",outline:"none",touchAction:"none"}})]})]})})(),J.jsx("div",{})]}),J.jsx("div",{style:{position:"relative"},children:J.jsx("button",{onClick:E=>{E.stopPropagation(),window.confirm(`Delete channel ${w.channelIndex}?`)&&m(w.id)},style:{background:"none",border:"none",cursor:"pointer",padding:"2px 6px",fontSize:"16px",color:"#aaa",display:"flex",alignItems:"center",justifyContent:"center"},title:"Delete channel",children:"⋮"})})]},w.id)})}),J.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[J.jsx("button",{onClick:_,style:{flex:1,padding:"8px 16px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"11px",fontWeight:"500",textTransform:"uppercase",letterSpacing:"0.4px"},onMouseOver:w=>{w.target.style.backgroundColor="#45a049"},onMouseOut:w=>{w.target.style.backgroundColor="#4CAF50"},children:"+ Add Channel"}),J.jsx("button",{onClick:S,disabled:!i.some(w=>{const A=d[w.id];return A?A.thresholdMin!==w.thresholdMin||A.thresholdMax!==w.thresholdMax:!1}),style:{padding:"8px 16px",backgroundColor:i.some(w=>{const A=d[w.id];return A?A.thresholdMin!==w.thresholdMin||A.thresholdMax!==w.thresholdMax:!1})?"#2d7ff9":"#444",color:"#fff",border:"none",borderRadius:"4px",cursor:i.some(w=>{const A=d[w.id];return A?A.thresholdMin!==w.thresholdMin||A.thresholdMax!==w.thresholdMax:!1})?"pointer":"default",fontSize:"11px",fontWeight:"500",textTransform:"uppercase",letterSpacing:"0.4px"},children:"Apply Filter"})]})]})},F1=[{id:"tumor-epithelial",title:"Tumor / Epithelial",markers:["MART1","SOX10","MITF","S100B","pan-CK","PRAME","β-catenin","E-cadherin"],palette:[[27,158,119],[217,95,2],[117,112,179],[231,41,138]]},{id:"immune",title:"Immune (T/B/Myeloid)",markers:["CD11b","CD11c","CD4","CD20","CD8a","FOXP3","PD1","LAG3","CD163","CD206"],palette:[[166,206,227],[31,120,180],[51,160,44],[251,154,153]]},{id:"stroma",title:"Stroma",markers:["CD31","Collagen (SHG)","Lamin-ABC","pMLC2"],palette:[[228,26,28],[55,126,184],[77,175,74],[152,78,163]]},{id:"stress-metabolism",title:"Stress / Metabolism",markers:["COX-IV","Catalase","γ-H2AX"],palette:[[102,194,165],[252,141,98],[141,160,203],[231,138,195]]},{id:"checkpoint-crosstalk",title:"Checkpoint / Crosstalk",markers:["PDL1","PD1","MHC-I","MHC-II","IRF1"],palette:[[141,211,199],[255,255,179],[190,186,218],[251,128,114]]},{id:"proliferation-cellstate",title:"Proliferation / Cell State",markers:["Ki67","CyclinD1","BAF1","H3K27me3","5’hmC"],palette:[[127,201,127],[190,174,212],[253,192,134],[56,108,176]]}],z1=(t,e,n)=>{const i=r=>{const s=Math.max(0,Math.min(255,r)).toString(16);return s.length===1?`0${s}`:s};return`#${i(t)}${i(e)}${i(n)}`},gc=t=>t.toLowerCase().replace(/[’']/g,"'").replace(/β/g,"b").replace(/γ/g,"y").replace(/\s+/g," ").trim(),k1={"pan-ck":"pan-cytokeratin"},B1=t=>{const e=new Map,n=new Map;return t.forEach((i,r)=>{const o=gc(i);e.has(o)||e.set(o,r);const s=i.replace(/\(.*?\)/g,"").trim();if(s){const a=gc(s);n.has(a)||n.set(a,r)}}),{exact:e,withoutParens:n}},V1=({onToggleRegion:t,selectedRegions:e=[]})=>{const n=ae.useMemo(()=>B1(Cn||[]),[]),i=ae.useMemo(()=>new Set(e.map(a=>a.id)),[e]),r=a=>{if(!a)return null;const l=gc(a),c=k1[l];if(c)return r(c);if(n.exact.has(l))return n.exact.get(l);if(n.withoutParens.has(l))return n.withoutParens.get(l);const d=Cn.findIndex(f=>gc(f).includes(l));return d!==-1?d:(console.warn(`Region_Selection: marker "${a}" not found in channel list.`),null)},o=a=>{const c=a.markers.slice(0,4).map((d,f)=>{const u=r(d),p=a.palette[f]||a.palette[a.palette.length-1],x=Array.isArray(p)?z1(p[0],p[1],p[2]):"#ffffff";return u==null?null:{id:`${a.id}-${u??f}`,channelIndex:u,color:x,thresholdMin:void 0,thresholdMax:void 0,opacity:1,visible:!0,markerName:d,regionId:a.id}}).filter(Boolean);return{id:a.id,title:a.title,topMarkers:c.map(({markerName:d,color:f})=>({name:d,color:f})),channels:c,markers:a.markers,palette:a.palette}},s=(a,l)=>{t&&t({regionPayload:o(a),shouldSelect:l})};return J.jsxs("div",{style:{height:"100%",width:"100%",backgroundColor:"#000000",border:"1px solid #444",padding:"12px",overflow:"hidden",display:"flex",flexDirection:"column",gap:"12px",boxSizing:"border-box"},children:[J.jsx("h3",{style:{margin:0,fontSize:"18px",color:"white",fontWeight:500},children:"Region Selection"}),J.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",overflowY:"auto",flex:1},children:F1.map(a=>{const l=i.has(a.id);return J.jsxs("button",{type:"button",onClick:()=>s(a,!l),style:{display:"flex",alignItems:"flex-start",gap:"12px",width:"100%",background:l?"#1a1d29":"#0f1016",borderRadius:"6px",padding:"10px 12px",cursor:"pointer",border:"none",outline:"none"},"aria-pressed":l,children:[J.jsx("div",{style:{width:"18px",height:"18px",borderRadius:"5px",border:l?"1px solid #1f57b8":"1px solid #5a5f73",backgroundColor:l?"#2d7ff9":"#12131d",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:"1px",transition:"background-color 0.15s ease, border 0.15s ease"},children:l&&J.jsx("svg",{viewBox:"0 0 16 16",style:{width:"12px",height:"12px"},children:J.jsx("polyline",{points:"3.2 8.6 6.4 11.6 12.4 4.4",style:{fill:"none",stroke:"#ffffff",strokeWidth:"2.1",strokeLinecap:"round",strokeLinejoin:"round"}})})}),J.jsxs("div",{style:{flex:1},children:[J.jsx("div",{style:{color:"white",fontSize:"14px",fontWeight:500,marginBottom:"4px"},children:a.title}),J.jsxs("div",{style:{color:"#b9bed0",fontSize:"12px",lineHeight:1.4},children:["(",a.markers.join(", "),")"]})]})]},a.id)})})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gh="158",H1=0,wm=1,G1=2,kx=1,W1=2,gi=3,ur=0,cn=1,yi=2,Ti=0,Fo=1,vc=2,Tm=3,Am=4,X1=5,br=100,j1=101,Y1=102,bm=103,Cm=104,q1=200,K1=201,Z1=202,Q1=203,Td=204,Ad=205,J1=206,$1=207,eM=208,tM=209,nM=210,iM=211,rM=212,oM=213,sM=214,aM=0,lM=1,cM=2,xc=3,uM=4,fM=5,dM=6,hM=7,Bx=0,pM=1,mM=2,rr=0,gM=1,vM=2,xM=3,_M=4,yM=5,Vx=300,qo=301,Ko=302,bd=303,Cd=304,Jc=306,Rd=1e3,Xn=1001,Ld=1002,Ut=1003,Rm=1004,Hu=1005,vn=1006,SM=1007,fa=1008,or=1009,MM=1010,EM=1011,Wh=1012,Hx=1013,Yi=1014,qi=1015,fr=1016,Gx=1017,Wx=1018,Ur=1020,wM=1021,jn=1023,TM=1024,AM=1025,Or=1026,Zo=1027,bM=1028,Xx=1029,CM=1030,jx=1031,Yx=1033,Gu=33776,Wu=33777,Xu=33778,ju=33779,Lm=35840,Pm=35841,Dm=35842,Nm=35843,RM=36196,Im=37492,Um=37496,Om=37808,Fm=37809,zm=37810,km=37811,Bm=37812,Vm=37813,Hm=37814,Gm=37815,Wm=37816,Xm=37817,jm=37818,Ym=37819,qm=37820,Km=37821,Yu=36492,Zm=36494,Qm=36495,LM=36283,Jm=36284,$m=36285,eg=36286,qx=3e3,sr=3001,PM=3200,DM=3201,NM=0,IM=1,Dn="",Mt="srgb",Li="srgb-linear",Xh="display-p3",$c="display-p3-linear",_c="linear",at="srgb",yc="rec709",Sc="p3",Jr=7680,tg=519,UM=512,OM=513,FM=514,zM=515,kM=516,BM=517,VM=518,HM=519,ng=35044,ig="300 es",Pd=1035,Ei=2e3,Mc=2001;class rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zl=Math.PI/180,Dd=180/Math.PI;function ya(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function GM(t,e){return(t%e+e)%e}function qu(t,e,n){return(1-n)*t+n*e}function rg(t){return(t&t-1)===0&&t!==0}function Nd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function _s(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,n,i,r,o,s,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=o,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],p=i[5],x=i[8],_=r[0],m=r[3],h=r[6],v=r[1],g=r[4],S=r[7],b=r[2],w=r[5],A=r[8];return o[0]=s*_+a*v+l*b,o[3]=s*m+a*g+l*w,o[6]=s*h+a*S+l*A,o[1]=c*_+d*v+f*b,o[4]=c*m+d*g+f*w,o[7]=c*h+d*S+f*A,o[2]=u*_+p*v+x*b,o[5]=u*m+p*g+x*w,o[8]=u*h+p*S+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*s*d-n*a*c-i*o*d+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*s-a*c,u=a*l-d*o,p=c*o-s*l,x=n*f+i*u+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=f*_,e[1]=(r*c-d*i)*_,e[2]=(a*i-r*s)*_,e[3]=u*_,e[4]=(d*n-r*l)*_,e[5]=(r*o-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(s*n-i*o)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ku.makeScale(e,n)),this}rotate(e){return this.premultiply(Ku.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ku.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ku=new Qe;function Kx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ec(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function WM(){const t=Ec("canvas");return t.style.display="block",t}const og={};function Xs(t){t in og||(og[t]=!0,console.warn(t))}const sg=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ag=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wa={[Li]:{transfer:_c,primaries:yc,toReference:t=>t,fromReference:t=>t},[Mt]:{transfer:at,primaries:yc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[$c]:{transfer:_c,primaries:Sc,toReference:t=>t.applyMatrix3(ag),fromReference:t=>t.applyMatrix3(sg)},[Xh]:{transfer:at,primaries:Sc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(ag),fromReference:t=>t.applyMatrix3(sg).convertLinearToSRGB()}},XM=new Set([Li,$c]),it={enabled:!0,_workingColorSpace:Li,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!XM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Wa[e].toReference,r=Wa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Wa[t].primaries},getTransfer:function(t){return t===Dn?_c:Wa[t].transfer}};function zo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Zu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let $r;class Zx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$r===void 0&&($r=Ec("canvas")),$r.width=e.width,$r.height=e.height;const i=$r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$r}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ec("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=zo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zo(n[i]/255)*255):n[i]=zo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jM=0;class Qx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=ya(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Qu(r[s].image)):o.push(Qu(r[s]))}else o=Qu(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Qu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Zx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YM=0;class Zt extends rs{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=Xn,r=Xn,o=vn,s=fa,a=jn,l=or,c=Zt.DEFAULT_ANISOTROPY,d=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=ya(),this.name="",this.source=new Qx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===sr?Mt:Dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rd:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rd:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?sr:qx}set encoding(e){Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===sr?Mt:Dn}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Vx;Zt.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],p=l[5],x=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,S=(p+1)/2,b=(h+1)/2,w=(d+u)/4,A=(f+_)/4,T=(x+m)/4;return g>S&&g>b?g<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(g),r=w/i,o=A/i):S>b?S<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(S),i=w/r,o=T/r):b<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(b),i=A/o,r=T/o),this.set(i,r,o,n),this}let v=Math.sqrt((m-x)*(m-x)+(f-_)*(f-_)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(f-_)/v,this.z=(u-d)/v,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qM extends rs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Xs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===sr?Mt:Dn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Qx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends qM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Jx extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class KM extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const u=o[s+0],p=o[s+1],x=o[s+2],_=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=u,e[n+1]=p,e[n+2]=x,e[n+3]=_;return}if(f!==_||l!==u||c!==p||d!==x){let m=1-a;const h=l*u+c*p+d*x+f*_,v=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const b=Math.sqrt(g),w=Math.atan2(b,h*v);m=Math.sin(m*w)/b,a=Math.sin(a*w)/b}const S=a*v;if(l=l*m+u*S,c=c*m+p*S,d=d*m+x*S,f=f*m+_*S,m===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=b,c*=b,d*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=o[s],u=o[s+1],p=o[s+2],x=o[s+3];return e[n]=a*x+d*f+l*p-c*u,e[n+1]=l*x+d*u+c*f-a*p,e[n+2]=c*x+d*p+a*u-l*f,e[n+3]=d*x-a*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(o/2),u=l(i/2),p=l(r/2),x=l(o/2);switch(s){case"XYZ":this._x=u*d*f+c*p*x,this._y=c*p*f-u*d*x,this._z=c*d*x+u*p*f,this._w=c*d*f-u*p*x;break;case"YXZ":this._x=u*d*f+c*p*x,this._y=c*p*f-u*d*x,this._z=c*d*x-u*p*f,this._w=c*d*f+u*p*x;break;case"ZXY":this._x=u*d*f-c*p*x,this._y=c*p*f+u*d*x,this._z=c*d*x+u*p*f,this._w=c*d*f-u*p*x;break;case"ZYX":this._x=u*d*f-c*p*x,this._y=c*p*f+u*d*x,this._z=c*d*x-u*p*f,this._w=c*d*f+u*p*x;break;case"YZX":this._x=u*d*f+c*p*x,this._y=c*p*f+u*d*x,this._z=c*d*x-u*p*f,this._w=c*d*f-u*p*x;break;case"XZY":this._x=u*d*f-c*p*x,this._y=c*p*f-u*d*x,this._z=c*d*x+u*p*f,this._w=c*d*f+u*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],u=i+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(o-c)*p,this._z=(s-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(o-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(s-r)/p,this._x=(o+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*a+r*c-o*l,this._y=r*d+s*l+o*a-i*c,this._z=o*d+s*c+i*l-r*a,this._w=s*d-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,u=Math.sin(n*d)/c;return this._w=s*f+this._w*u,this._x=i*f+this._x*u,this._y=r*f+this._y*u,this._z=o*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),d=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*c+s*f-a*d,this.y=i+l*d+a*c-o*f,this.z=r+l*f+o*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ju.copy(this).projectOnVector(e),this.sub(Ju)}reflect(e){return this.sub(Ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ju=new H,lg=new Gr;class Sa{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,zn):zn.fromBufferAttribute(o,s),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),ja.subVectors(this.max,ys),eo.subVectors(e.a,ys),to.subVectors(e.b,ys),no.subVectors(e.c,ys),Ui.subVectors(to,eo),Oi.subVectors(no,to),_r.subVectors(eo,no);let n=[0,-Ui.z,Ui.y,0,-Oi.z,Oi.y,0,-_r.z,_r.y,Ui.z,0,-Ui.x,Oi.z,0,-Oi.x,_r.z,0,-_r.x,-Ui.y,Ui.x,0,-Oi.y,Oi.x,0,-_r.y,_r.x,0];return!$u(n,eo,to,no,ja)||(n=[1,0,0,0,1,0,0,0,1],!$u(n,eo,to,no,ja))?!1:(Ya.crossVectors(Ui,Oi),n=[Ya.x,Ya.y,Ya.z],$u(n,eo,to,no,ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new H,new H,new H,new H,new H,new H,new H,new H],zn=new H,Xa=new Sa,eo=new H,to=new H,no=new H,Ui=new H,Oi=new H,_r=new H,ys=new H,ja=new H,Ya=new H,yr=new H;function $u(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){yr.fromArray(t,o);const a=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),c=n.dot(yr),d=i.dot(yr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const ZM=new Sa,Ss=new H,ef=new H;class eu{constructor(e=new H,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ZM.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const n=Ss.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ss,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ef.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(ef)),this.expandByPoint(Ss.copy(e.center).sub(ef))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new H,tf=new H,qa=new H,Fi=new H,nf=new H,Ka=new H,rf=new H;class jh{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){tf.copy(e).add(n).multiplyScalar(.5),qa.copy(n).sub(e).normalize(),Fi.copy(this.origin).sub(tf);const o=e.distanceTo(n)*.5,s=-this.direction.dot(qa),a=Fi.dot(this.direction),l=-Fi.dot(qa),c=Fi.lengthSq(),d=Math.abs(1-s*s);let f,u,p,x;if(d>0)if(f=s*l-a,u=s*a-l,x=o*d,f>=0)if(u>=-x)if(u<=x){const _=1/d;f*=_,u*=_,p=f*(f+s*u+2*a)+u*(s*f+u+2*l)+c}else u=o,f=Math.max(0,-(s*u+a)),p=-f*f+u*(u+2*l)+c;else u=-o,f=Math.max(0,-(s*u+a)),p=-f*f+u*(u+2*l)+c;else u<=-x?(f=Math.max(0,-(-s*o+a)),u=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+u*(u+2*l)+c):u<=x?(f=0,u=Math.min(Math.max(-o,-l),o),p=u*(u+2*l)+c):(f=Math.max(0,-(s*o+a)),u=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+u*(u+2*l)+c);else u=s>0?-o:o,f=Math.max(0,-(s*u+a)),p=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(tf).addScaledVector(qa,u),p}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(o=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(o=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,o){nf.subVectors(n,e),Ka.subVectors(i,e),rf.crossVectors(nf,Ka);let s=this.direction.dot(rf),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Fi.subVectors(this.origin,e);const l=a*this.direction.dot(Ka.crossVectors(Fi,Ka));if(l<0)return null;const c=a*this.direction.dot(nf.cross(Fi));if(c<0||l+c>s)return null;const d=-a*Fi.dot(rf);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,o,s,a,l,c,d,f,u,p,x,_,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,d,f,u,p,x,_,m)}set(e,n,i,r,o,s,a,l,c,d,f,u,p,x,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=o,h[5]=s,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=p,h[7]=x,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/io.setFromMatrixColumn(e,0).length(),o=1/io.setFromMatrixColumn(e,1).length(),s=1/io.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const u=s*d,p=s*f,x=a*d,_=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+x*c,n[5]=u-_*c,n[9]=-a*l,n[2]=_-u*c,n[6]=x+p*c,n[10]=s*l}else if(e.order==="YXZ"){const u=l*d,p=l*f,x=c*d,_=c*f;n[0]=u+_*a,n[4]=x*a-p,n[8]=s*c,n[1]=s*f,n[5]=s*d,n[9]=-a,n[2]=p*a-x,n[6]=_+u*a,n[10]=s*l}else if(e.order==="ZXY"){const u=l*d,p=l*f,x=c*d,_=c*f;n[0]=u-_*a,n[4]=-s*f,n[8]=x+p*a,n[1]=p+x*a,n[5]=s*d,n[9]=_-u*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const u=s*d,p=s*f,x=a*d,_=a*f;n[0]=l*d,n[4]=x*c-p,n[8]=u*c+_,n[1]=l*f,n[5]=_*c+u,n[9]=p*c-x,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const u=s*l,p=s*c,x=a*l,_=a*c;n[0]=l*d,n[4]=_-u*f,n[8]=x*f+p,n[1]=f,n[5]=s*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*f+x,n[10]=u-_*f}else if(e.order==="XZY"){const u=s*l,p=s*c,x=a*l,_=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=u*f+_,n[5]=s*d,n[9]=p*f-x,n[2]=x*f-p,n[6]=a*d,n[10]=_*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QM,e,JM)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),zi.crossVectors(i,pn),zi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),zi.crossVectors(i,pn)),zi.normalize(),Za.crossVectors(pn,zi),r[0]=zi.x,r[4]=Za.x,r[8]=pn.x,r[1]=zi.y,r[5]=Za.y,r[9]=pn.y,r[2]=zi.z,r[6]=Za.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],p=i[13],x=i[2],_=i[6],m=i[10],h=i[14],v=i[3],g=i[7],S=i[11],b=i[15],w=r[0],A=r[4],T=r[8],y=r[12],E=r[1],R=r[5],D=r[9],U=r[13],P=r[2],z=r[6],B=r[10],W=r[14],I=r[3],F=r[7],V=r[11],N=r[15];return o[0]=s*w+a*E+l*P+c*I,o[4]=s*A+a*R+l*z+c*F,o[8]=s*T+a*D+l*B+c*V,o[12]=s*y+a*U+l*W+c*N,o[1]=d*w+f*E+u*P+p*I,o[5]=d*A+f*R+u*z+p*F,o[9]=d*T+f*D+u*B+p*V,o[13]=d*y+f*U+u*W+p*N,o[2]=x*w+_*E+m*P+h*I,o[6]=x*A+_*R+m*z+h*F,o[10]=x*T+_*D+m*B+h*V,o[14]=x*y+_*U+m*W+h*N,o[3]=v*w+g*E+S*P+b*I,o[7]=v*A+g*R+S*z+b*F,o[11]=v*T+g*D+S*B+b*V,o[15]=v*y+g*U+S*W+b*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],p=e[14],x=e[3],_=e[7],m=e[11],h=e[15];return x*(+o*l*f-r*c*f-o*a*u+i*c*u+r*a*p-i*l*p)+_*(+n*l*p-n*c*u+o*s*u-r*s*p+r*c*d-o*l*d)+m*(+n*c*f-n*a*p-o*s*f+i*s*p+o*a*d-i*c*d)+h*(-r*a*d-n*l*f+n*a*u+r*s*f-i*s*u+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],p=e[11],x=e[12],_=e[13],m=e[14],h=e[15],v=f*m*c-_*u*c+_*l*p-a*m*p-f*l*h+a*u*h,g=x*u*c-d*m*c-x*l*p+s*m*p+d*l*h-s*u*h,S=d*_*c-x*f*c+x*a*p-s*_*p-d*a*h+s*f*h,b=x*f*l-d*_*l-x*a*u+s*_*u+d*a*m-s*f*m,w=n*v+i*g+r*S+o*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=v*A,e[1]=(_*u*o-f*m*o-_*r*p+i*m*p+f*r*h-i*u*h)*A,e[2]=(a*m*o-_*l*o+_*r*c-i*m*c-a*r*h+i*l*h)*A,e[3]=(f*l*o-a*u*o-f*r*c+i*u*c+a*r*p-i*l*p)*A,e[4]=g*A,e[5]=(d*m*o-x*u*o+x*r*p-n*m*p-d*r*h+n*u*h)*A,e[6]=(x*l*o-s*m*o-x*r*c+n*m*c+s*r*h-n*l*h)*A,e[7]=(s*u*o-d*l*o+d*r*c-n*u*c-s*r*p+n*l*p)*A,e[8]=S*A,e[9]=(x*f*o-d*_*o-x*i*p+n*_*p+d*i*h-n*f*h)*A,e[10]=(s*_*o-x*a*o+x*i*c-n*_*c-s*i*h+n*a*h)*A,e[11]=(d*a*o-s*f*o-d*i*c+n*f*c+s*i*p-n*a*p)*A,e[12]=b*A,e[13]=(d*_*r-x*f*r+x*i*u-n*_*u-d*i*m+n*f*m)*A,e[14]=(x*a*r-s*_*r-x*i*l+n*_*l+s*i*m-n*a*m)*A,e[15]=(s*f*r-d*a*r+d*i*l-n*f*l-s*i*u+n*a*u)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,d=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*s,0,c*l-r*a,d*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,d=s+s,f=a+a,u=o*c,p=o*d,x=o*f,_=s*d,m=s*f,h=a*f,v=l*c,g=l*d,S=l*f,b=i.x,w=i.y,A=i.z;return r[0]=(1-(_+h))*b,r[1]=(p+S)*b,r[2]=(x-g)*b,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(u+h))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(x+g)*A,r[9]=(m-v)*A,r[10]=(1-(u+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=io.set(r[0],r[1],r[2]).length();const s=io.set(r[4],r[5],r[6]).length(),a=io.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const c=1/o,d=1/s,f=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=d,kn.elements[5]*=d,kn.elements[6]*=d,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,n.setFromRotationMatrix(kn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Ei){const l=this.elements,c=2*o/(n-e),d=2*o/(i-r),f=(n+e)/(n-e),u=(i+r)/(i-r);let p,x;if(a===Ei)p=-(s+o)/(s-o),x=-2*s*o/(s-o);else if(a===Mc)p=-s/(s-o),x=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Ei){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(s-o),u=(n+e)*c,p=(i+r)*d;let x,_;if(a===Ei)x=(s+o)*f,_=-2*f;else if(a===Mc)x=o*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const io=new H,kn=new yt,QM=new H(0,0,0),JM=new H(1,1,1),zi=new H,Za=new H,pn=new H,cg=new yt,ug=new Gr;class tu{constructor(e=0,n=0,i=0,r=tu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ug.setFromEuler(this),this.setFromQuaternion(ug,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tu.DEFAULT_ORDER="XYZ";class Yh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $M=0;const fg=new H,ro=new Gr,di=new yt,Qa=new H,Ms=new H,eE=new H,tE=new Gr,dg=new H(1,0,0),hg=new H(0,1,0),pg=new H(0,0,1),nE={type:"added"},iE={type:"removed"};class Ft extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new H,n=new tu,i=new Gr,r=new H(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Qe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ro.setFromAxisAngle(e,n),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,n){return ro.setFromAxisAngle(e,n),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(dg,e)}rotateY(e){return this.rotateOnAxis(hg,e)}rotateZ(e){return this.rotateOnAxis(pg,e)}translateOnAxis(e,n){return fg.copy(e).applyQuaternion(this.quaternion),this.position.add(fg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dg,e)}translateY(e){return this.translateOnAxis(hg,e)}translateZ(e){return this.translateOnAxis(pg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Qa.copy(e):Qa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Ms,Qa,this.up):di.lookAt(Qa,Ms,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),ro.setFromRotationMatrix(di),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(iE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,eE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,tE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),f=s(e.shapes),u=s(e.skeletons),p=s(e.animations),x=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function s(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new H(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new H,hi=new H,of=new H,pi=new H,oo=new H,so=new H,mg=new H,sf=new H,af=new H,lf=new H;let Ja=!1;class Pn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Bn.subVectors(r,n),hi.subVectors(i,n),of.subVectors(e,n);const s=Bn.dot(Bn),a=Bn.dot(hi),l=Bn.dot(of),c=hi.dot(hi),d=hi.dot(of),f=s*c-a*a;if(f===0)return o.set(-2,-1,-1);const u=1/f,p=(c*l-a*d)*u,x=(s*d-a*l)*u;return o.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi),pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,n,i,r,o,s,a,l){return Ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ja=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,pi),l.setScalar(0),l.addScaledVector(o,pi.x),l.addScaledVector(s,pi.y),l.addScaledVector(a,pi.z),l}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),hi.subVectors(e,n),Bn.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Bn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Pn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return Ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ja=!0),Pn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return Pn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;oo.subVectors(r,i),so.subVectors(o,i),sf.subVectors(e,i);const l=oo.dot(sf),c=so.dot(sf);if(l<=0&&c<=0)return n.copy(i);af.subVectors(e,r);const d=oo.dot(af),f=so.dot(af);if(d>=0&&f<=d)return n.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(oo,s);lf.subVectors(e,o);const p=oo.dot(lf),x=so.dot(lf);if(x>=0&&p<=x)return n.copy(o);const _=p*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(so,a);const m=d*x-p*f;if(m<=0&&f-d>=0&&p-x>=0)return mg.subVectors(o,r),a=(f-d)/(f-d+(p-x)),n.copy(r).addScaledVector(mg,a);const h=1/(m+_+u);return s=_*h,a=u*h,n.copy(i).addScaledVector(oo,s).addScaledVector(so,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},$a={h:0,s:0,l:0};function cf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}let Je=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=GM(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=cf(s,o,e+1/3),this.g=cf(s,o,e),this.b=cf(s,o,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Mt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mt){const i=$x[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}copyLinearToSRGB(e){return this.r=Zu(e.r),this.g=Zu(e.g),this.b=Zu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return it.fromWorkingColorSpace(Gt.copy(this),e),Math.round(tn(Gt.r*255,0,255))*65536+Math.round(tn(Gt.g*255,0,255))*256+Math.round(tn(Gt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,o=Gt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const d=(a+s)/2;if(a===s)l=0,c=0;else{const f=s-a;switch(c=d<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Mt){it.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==Mt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL($a);const i=qu(ki.h,$a.h,n),r=qu(ki.s,$a.s,n),o=qu(ki.l,$a.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Gt=new Je;Je.NAMES=$x;let rE=0;class Ma extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=ya(),this.name="",this.type="Material",this.blending=Fo,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=Ad,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=xc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fo&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Td&&(i.blendSrc=this.blendSrc),this.blendDst!==Ad&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wc extends Ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new H,el=new qe;class Zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ng,this.updateRange={offset:0,count:-1},this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)el.fromBufferAttribute(this,n),el.applyMatrix3(e),this.setXY(n,el.x,el.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=_s(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_s(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_s(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_s(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_s(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),o=$t(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ng&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class e_ extends Zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class t_ extends Zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zt extends Zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let oE=0;const An=new yt,uf=new Ft,ao=new H,mn=new Sa,Es=new Sa,Ct=new H;class Tn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=ya(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kx(e)?t_:e_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Qe().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return uf.lookAt(e),uf.updateMatrix(),this.applyMatrix4(uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new zt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];mn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(mn.min,Es.min),mn.expandByPoint(Ct),Ct.addVectors(mn.max,Es.max),mn.expandByPoint(Ct)):(mn.expandByPoint(Es.min),mn.expandByPoint(Es.max))}mn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Ct.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ct.fromBufferAttribute(a,c),l&&(ao.fromBufferAttribute(e,c),Ct.add(ao)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let E=0;E<a;E++)c[E]=new H,d[E]=new H;const f=new H,u=new H,p=new H,x=new qe,_=new qe,m=new qe,h=new H,v=new H;function g(E,R,D){f.fromArray(r,E*3),u.fromArray(r,R*3),p.fromArray(r,D*3),x.fromArray(s,E*2),_.fromArray(s,R*2),m.fromArray(s,D*2),u.sub(f),p.sub(f),_.sub(x),m.sub(x);const U=1/(_.x*m.y-m.x*_.y);isFinite(U)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(U),v.copy(p).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(U),c[E].add(h),c[R].add(h),c[D].add(h),d[E].add(v),d[R].add(v),d[D].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let E=0,R=S.length;E<R;++E){const D=S[E],U=D.start,P=D.count;for(let z=U,B=U+P;z<B;z+=3)g(i[z+0],i[z+1],i[z+2])}const b=new H,w=new H,A=new H,T=new H;function y(E){A.fromArray(o,E*3),T.copy(A);const R=c[E];b.copy(R),b.sub(A.multiplyScalar(A.dot(R))).normalize(),w.crossVectors(T,R);const U=w.dot(d[E])<0?-1:1;l[E*4]=b.x,l[E*4+1]=b.y,l[E*4+2]=b.z,l[E*4+3]=U}for(let E=0,R=S.length;E<R;++E){const D=S[E],U=D.start,P=D.count;for(let z=U,B=U+P;z<B;z+=3)y(i[z+0]),y(i[z+1]),y(i[z+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new H,o=new H,s=new H,a=new H,l=new H,c=new H,d=new H,f=new H;if(e)for(let u=0,p=e.count;u<p;u+=3){const x=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,_),s.fromBufferAttribute(n,m),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),o.fromBufferAttribute(n,u+1),s.fromBufferAttribute(n,u+2),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,u=new c.constructor(l.length*d);let p=0,x=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*d;for(let h=0;h<d;h++)u[x++]=c[p++]}return new Zn(u,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Tn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let d=0,f=c.length;d<f;d++){const u=c[d],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const o=e.morphAttributes;for(const c in o){const d=[],f=o[c];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gg=new yt,Sr=new jh,tl=new eu,vg=new H,lo=new H,co=new H,uo=new H,ff=new H,nl=new H,il=new qe,rl=new qe,ol=new qe,xg=new H,_g=new H,yg=new H,sl=new H,al=new H;class _n extends Ft{constructor(e=new Tn,n=new wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){nl.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const d=a[l],f=o[l];d!==0&&(ff.fromBufferAttribute(f,e),s?nl.addScaledVector(ff,d):nl.addScaledVector(ff.sub(n),d))}n.add(nl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(o),Sr.copy(e.ray).recast(e.near),!(tl.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(tl,vg)===null||Sr.origin.distanceToSquared(vg)>(e.far-e.near)**2))&&(gg.copy(o).invert(),Sr.copy(e.ray).applyMatrix4(gg),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Sr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,u=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let x=0,_=u.length;x<_;x++){const m=u[x],h=s[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,b=g;S<b;S+=3){const w=a.getX(S),A=a.getX(S+1),T=a.getX(S+2);r=ll(this,h,e,i,c,d,f,w,A,T),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,h=_;m<h;m+=3){const v=a.getX(m),g=a.getX(m+1),S=a.getX(m+2);r=ll(this,s,e,i,c,d,f,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,_=u.length;x<_;x++){const m=u[x],h=s[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,b=g;S<b;S+=3){const w=S,A=S+1,T=S+2;r=ll(this,h,e,i,c,d,f,w,A,T),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=x,h=_;m<h;m+=3){const v=m,g=m+1,S=m+2;r=ll(this,s,e,i,c,d,f,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function sE(t,e,n,i,r,o,s,a){let l;if(e.side===cn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===ur,a),l===null)return null;al.copy(a),al.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(al);return c<n.near||c>n.far?null:{distance:c,point:al.clone(),object:t}}function ll(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,lo),t.getVertexPosition(l,co),t.getVertexPosition(c,uo);const d=sE(t,e,n,i,lo,co,uo,sl);if(d){r&&(il.fromBufferAttribute(r,a),rl.fromBufferAttribute(r,l),ol.fromBufferAttribute(r,c),d.uv=Pn.getInterpolation(sl,lo,co,uo,il,rl,ol,new qe)),o&&(il.fromBufferAttribute(o,a),rl.fromBufferAttribute(o,l),ol.fromBufferAttribute(o,c),d.uv1=Pn.getInterpolation(sl,lo,co,uo,il,rl,ol,new qe),d.uv2=d.uv1),s&&(xg.fromBufferAttribute(s,a),_g.fromBufferAttribute(s,l),yg.fromBufferAttribute(s,c),d.normal=Pn.getInterpolation(sl,lo,co,uo,xg,_g,yg,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};Pn.getNormal(lo,co,uo,f.normal),d.face=f}return d}class Pi extends Tn{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],d=[],f=[];let u=0,p=0;x("z","y","x",-1,-1,i,n,e,s,o,0),x("z","y","x",1,-1,i,n,-e,s,o,1),x("x","z","y",1,1,e,i,n,r,s,2),x("x","z","y",1,-1,e,i,-n,r,s,3),x("x","y","z",1,-1,e,n,i,r,o,4),x("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(f,2));function x(_,m,h,v,g,S,b,w,A,T,y){const E=S/A,R=b/T,D=S/2,U=b/2,P=w/2,z=A+1,B=T+1;let W=0,I=0;const F=new H;for(let V=0;V<B;V++){const N=V*R-U;for(let G=0;G<z;G++){const le=G*E-D;F[_]=le*v,F[m]=N*g,F[h]=P,c.push(F.x,F.y,F.z),F[_]=0,F[m]=0,F[h]=w>0?1:-1,d.push(F.x,F.y,F.z),f.push(G/A),f.push(1-V/T),W+=1}}for(let V=0;V<T;V++)for(let N=0;N<A;N++){const G=u+N+z*V,le=u+N+z*(V+1),ue=u+(N+1)+z*(V+1),se=u+(N+1)+z*V;l.push(G,le,se),l.push(le,ue,se),I+=6}a.addGroup(p,I,y),p+=I,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=Qo(t[n]);for(const r in i)e[r]=i[r]}return e}function aE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function n_(t){return t.getRenderTarget()===null?t.outputColorSpace:it.workingColorSpace}const js={clone:Qo,merge:Yt};var lE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lE,this.fragmentShader=cE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qo(e.uniforms),this.uniformsGroups=aE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class i_ extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nn extends i_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Dd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dd*2*Math.atan(Math.tan(zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const fo=-90,ho=1;class uE extends Ft{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(fo,ho,e,n);r.layers=this.layers,this.add(r);const o=new nn(fo,ho,e,n);o.layers=this.layers,this.add(o);const s=new nn(fo,ho,e,n);s.layers=this.layers,this.add(s);const a=new nn(fo,ho,e,n);a.layers=this.layers,this.add(a);const l=new nn(fo,ho,e,n);l.layers=this.layers,this.add(l);const c=new nn(fo,ho,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,u,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class r_ extends Zt{constructor(e,n,i,r,o,s,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:qo,super(e,n,i,r,o,s,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fE extends ai{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Xs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===sr?Mt:Dn),this.texture=new r_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pi(5,5,5),o=new un({name:"CubemapFromEquirect",uniforms:Qo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ti});o.uniforms.tEquirect.value=n;const s=new _n(r,o),a=n.minFilter;return n.minFilter===fa&&(n.minFilter=vn),new uE(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const df=new H,dE=new H,hE=new Qe;class _i{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=df.subVectors(i,n).cross(dE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(df),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||hE.getNormalMatrix(e),r=this.coplanarPoint(df).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new eu,cl=new H;class qh{constructor(e=new _i,n=new _i,i=new _i,r=new _i,o=new _i,s=new _i){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],u=r[7],p=r[8],x=r[9],_=r[10],m=r[11],h=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-o,u-c,m-p,S-h).normalize(),i[1].setComponents(l+o,u+c,m+p,S+h).normalize(),i[2].setComponents(l+s,u+d,m+x,S+v).normalize(),i[3].setComponents(l-s,u-d,m-x,S-v).normalize(),i[4].setComponents(l-a,u-f,m-_,S-g).normalize(),n===Ei)i[5].setComponents(l+a,u+f,m+_,S+g).normalize();else if(n===Mc)i[5].setComponents(a,f,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(cl.x=r.normal.x>0?e.max.x:e.min.x,cl.y=r.normal.y>0?e.max.y:e.min.y,cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function o_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function pE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,u=c.usage,p=t.createBuffer();t.bindBuffer(d,p),t.bufferData(d,f,u),c.onUploadCallback();let x;if(f instanceof Float32Array)x=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=t.SHORT;else if(f instanceof Uint32Array)x=t.UNSIGNED_INT;else if(f instanceof Int32Array)x=t.INT;else if(f instanceof Int8Array)x=t.BYTE;else if(f instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function o(c,d,f){const u=d.array,p=d.updateRange;t.bindBuffer(f,c),p.count===-1?t.bufferSubData(f,0,u):(n?t.bufferSubData(f,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):t.bufferSubData(f,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,d)):f.version<c.version&&(o(f.buffer,c,d),f.version=c.version)}return{get:s,remove:a,update:l}}class Kh extends Tn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,u=n/l,p=[],x=[],_=[],m=[];for(let h=0;h<d;h++){const v=h*u-s;for(let g=0;g<c;g++){const S=g*f-o;x.push(S,-v,0),_.push(0,0,1),m.push(g/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const g=v+c*h,S=v+c*(h+1),b=v+1+c*(h+1),w=v+1+c*h;p.push(g,S,w),p.push(S,b,w)}this.setIndex(p),this.setAttribute("position",new zt(x,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kh(e.width,e.height,e.widthSegments,e.heightSegments)}}var mE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gE=`#ifdef USE_ALPHAHASH
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
#endif`,vE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SE=`#ifdef USE_AOMAP
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
#endif`,ME=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AE=`#ifdef USE_IRIDESCENCE
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
#endif`,bE=`#ifdef USE_BUMPMAP
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
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,OE=`#define PI 3.141592653589793
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
} // validated`,FE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zE=`vec3 transformedNormal = objectNormal;
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
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GE="gl_FragColor = linearToOutputTexel( gl_FragColor );",WE=`
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
}`,XE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YE=`#ifdef USE_ENVMAP
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
#endif`,qE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$E=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ew=`#ifdef USE_GRADIENTMAP
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
}`,tw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ow=`uniform bool receiveShadow;
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
#endif`,sw=`#ifdef USE_ENVMAP
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
#endif`,aw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fw=`PhysicalMaterial material;
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
#endif`,dw=`struct PhysicalMaterial {
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
}`,hw=`
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
#endif`,pw=`#if defined( RE_IndirectDiffuse )
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
#endif`,mw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_w=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ew=`#if defined( USE_POINTS_UV )
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
#endif`,ww=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Aw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bw=`#ifdef USE_MORPHNORMALS
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
#endif`,Cw=`#ifdef USE_MORPHTARGETS
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
#endif`,Rw=`#ifdef USE_MORPHTARGETS
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
#endif`,Lw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uw=`#ifdef USE_NORMALMAP
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
#endif`,Ow=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ww=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qw=`float getShadowMask() {
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
}`,Jw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$w=`#ifdef USE_SKINNING
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
#endif`,eT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tT=`#ifdef USE_SKINNING
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
#endif`,nT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sT=`#ifdef USE_TRANSMISSION
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
#endif`,aT=`#ifdef USE_TRANSMISSION
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
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hT=`uniform sampler2D t2D;
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
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`#include <common>
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
}`,_T=`#if DEPTH_PACKING == 3200
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
}`,yT=`#define DISTANCE
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
}`,ST=`#define DISTANCE
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
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ET=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`uniform float scale;
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
}`,TT=`uniform vec3 diffuse;
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
}`,AT=`#include <common>
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
}`,bT=`uniform vec3 diffuse;
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
}`,CT=`#define LAMBERT
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
}`,RT=`#define LAMBERT
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
}`,LT=`#define MATCAP
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
}`,PT=`#define MATCAP
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
}`,DT=`#define NORMAL
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
}`,NT=`#define NORMAL
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
}`,IT=`#define PHONG
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
}`,UT=`#define PHONG
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
}`,OT=`#define STANDARD
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
}`,FT=`#define STANDARD
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
}`,zT=`#define TOON
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
}`,kT=`#define TOON
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
}`,BT=`uniform float size;
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
}`,VT=`uniform vec3 diffuse;
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
}`,HT=`#include <common>
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
}`,GT=`uniform vec3 color;
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
}`,WT=`uniform float rotation;
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
}`,XT=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:mE,alphahash_pars_fragment:gE,alphamap_fragment:vE,alphamap_pars_fragment:xE,alphatest_fragment:_E,alphatest_pars_fragment:yE,aomap_fragment:SE,aomap_pars_fragment:ME,begin_vertex:EE,beginnormal_vertex:wE,bsdfs:TE,iridescence_fragment:AE,bumpmap_pars_fragment:bE,clipping_planes_fragment:CE,clipping_planes_pars_fragment:RE,clipping_planes_pars_vertex:LE,clipping_planes_vertex:PE,color_fragment:DE,color_pars_fragment:NE,color_pars_vertex:IE,color_vertex:UE,common:OE,cube_uv_reflection_fragment:FE,defaultnormal_vertex:zE,displacementmap_pars_vertex:kE,displacementmap_vertex:BE,emissivemap_fragment:VE,emissivemap_pars_fragment:HE,colorspace_fragment:GE,colorspace_pars_fragment:WE,envmap_fragment:XE,envmap_common_pars_fragment:jE,envmap_pars_fragment:YE,envmap_pars_vertex:qE,envmap_physical_pars_fragment:sw,envmap_vertex:KE,fog_vertex:ZE,fog_pars_vertex:QE,fog_fragment:JE,fog_pars_fragment:$E,gradientmap_pars_fragment:ew,lightmap_fragment:tw,lightmap_pars_fragment:nw,lights_lambert_fragment:iw,lights_lambert_pars_fragment:rw,lights_pars_begin:ow,lights_toon_fragment:aw,lights_toon_pars_fragment:lw,lights_phong_fragment:cw,lights_phong_pars_fragment:uw,lights_physical_fragment:fw,lights_physical_pars_fragment:dw,lights_fragment_begin:hw,lights_fragment_maps:pw,lights_fragment_end:mw,logdepthbuf_fragment:gw,logdepthbuf_pars_fragment:vw,logdepthbuf_pars_vertex:xw,logdepthbuf_vertex:_w,map_fragment:yw,map_pars_fragment:Sw,map_particle_fragment:Mw,map_particle_pars_fragment:Ew,metalnessmap_fragment:ww,metalnessmap_pars_fragment:Tw,morphcolor_vertex:Aw,morphnormal_vertex:bw,morphtarget_pars_vertex:Cw,morphtarget_vertex:Rw,normal_fragment_begin:Lw,normal_fragment_maps:Pw,normal_pars_fragment:Dw,normal_pars_vertex:Nw,normal_vertex:Iw,normalmap_pars_fragment:Uw,clearcoat_normal_fragment_begin:Ow,clearcoat_normal_fragment_maps:Fw,clearcoat_pars_fragment:zw,iridescence_pars_fragment:kw,opaque_fragment:Bw,packing:Vw,premultiplied_alpha_fragment:Hw,project_vertex:Gw,dithering_fragment:Ww,dithering_pars_fragment:Xw,roughnessmap_fragment:jw,roughnessmap_pars_fragment:Yw,shadowmap_pars_fragment:qw,shadowmap_pars_vertex:Kw,shadowmap_vertex:Zw,shadowmask_pars_fragment:Qw,skinbase_vertex:Jw,skinning_pars_vertex:$w,skinning_vertex:eT,skinnormal_vertex:tT,specularmap_fragment:nT,specularmap_pars_fragment:iT,tonemapping_fragment:rT,tonemapping_pars_fragment:oT,transmission_fragment:sT,transmission_pars_fragment:aT,uv_pars_fragment:lT,uv_pars_vertex:cT,uv_vertex:uT,worldpos_vertex:fT,background_vert:dT,background_frag:hT,backgroundCube_vert:pT,backgroundCube_frag:mT,cube_vert:gT,cube_frag:vT,depth_vert:xT,depth_frag:_T,distanceRGBA_vert:yT,distanceRGBA_frag:ST,equirect_vert:MT,equirect_frag:ET,linedashed_vert:wT,linedashed_frag:TT,meshbasic_vert:AT,meshbasic_frag:bT,meshlambert_vert:CT,meshlambert_frag:RT,meshmatcap_vert:LT,meshmatcap_frag:PT,meshnormal_vert:DT,meshnormal_frag:NT,meshphong_vert:IT,meshphong_frag:UT,meshphysical_vert:OT,meshphysical_frag:FT,meshtoon_vert:zT,meshtoon_frag:kT,points_vert:BT,points_frag:VT,shadow_vert:HT,shadow_frag:GT,sprite_vert:WT,sprite_frag:XT},Te={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ni={basic:{uniforms:Yt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Yt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Yt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Yt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Yt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Yt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Yt([Te.points,Te.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Yt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Yt([Te.common,Te.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Yt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Yt([Te.sprite,Te.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Yt([Te.common,Te.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Yt([Te.lights,Te.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ni.physical={uniforms:Yt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const ul={r:0,b:0,g:0};function jT(t,e,n,i,r,o,s){const a=new Je(0);let l=o===!0?0:1,c,d,f=null,u=0,p=null;function x(m,h){let v=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?n:e).get(g)),g===null?_(a,l):g&&g.isColor&&(_(g,1),v=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Jc)?(d===void 0&&(d=new _n(new Pi(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Qo(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=g,d.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=it.getTransfer(g.colorSpace)!==at,(f!==g||u!==g.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=g,u=g.version,p=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new _n(new Kh(2,2),new un({name:"BackgroundMaterial",uniforms:Qo(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=it.getTransfer(g.colorSpace)!==at,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||u!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,u=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,h){m.getRGB(ul,n_(t)),i.buffers.color.setClear(ul.r,ul.g,ul.b,h,s)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:x}}function YT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=m(null);let c=l,d=!1;function f(P,z,B,W,I){let F=!1;if(s){const V=_(W,B,z);c!==V&&(c=V,p(c.object)),F=h(P,W,B,I),F&&v(P,W,B,I)}else{const V=z.wireframe===!0;(c.geometry!==W.id||c.program!==B.id||c.wireframe!==V)&&(c.geometry=W.id,c.program=B.id,c.wireframe=V,F=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(F||d)&&(d=!1,T(P,z,B,W),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function u(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function p(P){return i.isWebGL2?t.bindVertexArray(P):o.bindVertexArrayOES(P)}function x(P){return i.isWebGL2?t.deleteVertexArray(P):o.deleteVertexArrayOES(P)}function _(P,z,B){const W=B.wireframe===!0;let I=a[P.id];I===void 0&&(I={},a[P.id]=I);let F=I[z.id];F===void 0&&(F={},I[z.id]=F);let V=F[W];return V===void 0&&(V=m(u()),F[W]=V),V}function m(P){const z=[],B=[],W=[];for(let I=0;I<r;I++)z[I]=0,B[I]=0,W[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:B,attributeDivisors:W,object:P,attributes:{},index:null}}function h(P,z,B,W){const I=c.attributes,F=z.attributes;let V=0;const N=B.getAttributes();for(const G in N)if(N[G].location>=0){const ue=I[G];let se=F[G];if(se===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),ue===void 0||ue.attribute!==se||se&&ue.data!==se.data)return!0;V++}return c.attributesNum!==V||c.index!==W}function v(P,z,B,W){const I={},F=z.attributes;let V=0;const N=B.getAttributes();for(const G in N)if(N[G].location>=0){let ue=F[G];ue===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor));const se={};se.attribute=ue,ue&&ue.data&&(se.data=ue.data),I[G]=se,V++}c.attributes=I,c.attributesNum=V,c.index=W}function g(){const P=c.newAttributes;for(let z=0,B=P.length;z<B;z++)P[z]=0}function S(P){b(P,0)}function b(P,z){const B=c.newAttributes,W=c.enabledAttributes,I=c.attributeDivisors;B[P]=1,W[P]===0&&(t.enableVertexAttribArray(P),W[P]=1),I[P]!==z&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,z),I[P]=z)}function w(){const P=c.newAttributes,z=c.enabledAttributes;for(let B=0,W=z.length;B<W;B++)z[B]!==P[B]&&(t.disableVertexAttribArray(B),z[B]=0)}function A(P,z,B,W,I,F,V){V===!0?t.vertexAttribIPointer(P,z,B,I,F):t.vertexAttribPointer(P,z,B,W,I,F)}function T(P,z,B,W){if(i.isWebGL2===!1&&(P.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const I=W.attributes,F=B.getAttributes(),V=z.defaultAttributeValues;for(const N in F){const G=F[N];if(G.location>=0){let le=I[N];if(le===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),le!==void 0){const ue=le.normalized,se=le.itemSize,ge=n.get(le);if(ge===void 0)continue;const Ne=ge.buffer,_e=ge.type,Ee=ge.bytesPerElement,Oe=i.isWebGL2===!0&&(_e===t.INT||_e===t.UNSIGNED_INT||le.gpuType===Hx);if(le.isInterleavedBufferAttribute){const Ce=le.data,X=Ce.stride,ke=le.offset;if(Ce.isInstancedInterleavedBuffer){for(let ve=0;ve<G.locationSize;ve++)b(G.location+ve,Ce.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let ve=0;ve<G.locationSize;ve++)S(G.location+ve);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let ve=0;ve<G.locationSize;ve++)A(G.location+ve,se/G.locationSize,_e,ue,X*Ee,(ke+se/G.locationSize*ve)*Ee,Oe)}else{if(le.isInstancedBufferAttribute){for(let Ce=0;Ce<G.locationSize;Ce++)b(G.location+Ce,le.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ce=0;Ce<G.locationSize;Ce++)S(G.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let Ce=0;Ce<G.locationSize;Ce++)A(G.location+Ce,se/G.locationSize,_e,ue,se*Ee,se/G.locationSize*Ce*Ee,Oe)}}else if(V!==void 0){const ue=V[N];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(G.location,ue);break;case 3:t.vertexAttrib3fv(G.location,ue);break;case 4:t.vertexAttrib4fv(G.location,ue);break;default:t.vertexAttrib1fv(G.location,ue)}}}}w()}function y(){D();for(const P in a){const z=a[P];for(const B in z){const W=z[B];for(const I in W)x(W[I].object),delete W[I];delete z[B]}delete a[P]}}function E(P){if(a[P.id]===void 0)return;const z=a[P.id];for(const B in z){const W=z[B];for(const I in W)x(W[I].object),delete W[I];delete z[B]}delete a[P.id]}function R(P){for(const z in a){const B=a[z];if(B[P.id]===void 0)continue;const W=B[P.id];for(const I in W)x(W[I].object),delete W[I];delete B[P.id]}}function D(){U(),d=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:D,resetDefaultState:U,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:S,disableUnusedAttributes:w}}function qT(t,e,n,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,d){t.drawArrays(o,c,d),n.update(d,o,1)}function l(c,d,f){if(f===0)return;let u,p;if(r)u=t,p="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](o,c,d,f),n.update(d,o,f)}this.setMode=s,this.render=a,this.renderInstances=l}function KT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),u=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=u>0,S=s||e.has("OES_texture_float"),b=g&&S,w=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:b,maxSamples:w}}function ZT(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new _i,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,u){n=d(f,u,0)},this.setState=function(f,u,p){const x=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||x===null||x.length===0||o&&!m)o?d(null):c();else{const v=o?0:i,g=v*4;let S=h.clippingState||null;l.value=S,S=d(x,u,g,p);for(let b=0;b!==g;++b)S[b]=n[b];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,p,x){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,x!==!0||m===null){const h=p+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,S=p;g!==_;++g,S+=4)s.copy(f[g]).applyMatrix4(v,a),s.normal.toArray(m,S),m[S+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function QT(t){let e=new WeakMap;function n(s,a){return a===bd?s.mapping=qo:a===Cd&&(s.mapping=Ko),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===bd||a===Cd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new fE(l.height/2);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Zh extends i_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Lo=4,Sg=[.125,.215,.35,.446,.526,.582],Cr=20,hf=new Zh,Mg=new Je;let pf=null,mf=0,gf=0;const Tr=(1+Math.sqrt(5))/2,po=1/Tr,Eg=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Tr,po),new H(0,Tr,-po),new H(po,0,Tr),new H(-po,0,Tr),new H(Tr,po,0),new H(-Tr,po,0)];class wg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ag(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pf,mf,gf),e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qo||e.mapping===Ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:fr,format:jn,colorSpace:Li,depthBuffer:!1},r=Tg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JT(o)),this._blurMaterial=$T(o,e,n)}return r}_compileMaterial(e){const n=new _n(this._lodPlanes[0],e);this._renderer.compile(n,hf)}_sceneToCubeUV(e,n,i,r){const a=new nn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(Mg),d.toneMapping=rr,d.autoClear=!1;const p=new wc({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),x=new _n(new Pi,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Mg),_=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const g=this._cubeSize;fl(r,v*g,h>2?g:0,g,g),d.setRenderTarget(r),_&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=u,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===qo||e.mapping===Ko;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ag());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new _n(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;fl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,hf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Eg[(r-1)%Eg.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new _n(this._lodPlanes[r],c),u=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Cr-1),_=o/x,m=isFinite(o)?1+Math.floor(d*_):Cr;m>Cr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cr}`);const h=[];let v=0;for(let A=0;A<Cr;++A){const T=A/_,y=Math.exp(-T*T/2);h.push(y),A===0?v+=y:A<m&&(v+=2*y)}for(let A=0;A<h.length;A++)h[A]=h[A]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=s==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:g}=this;u.dTheta.value=x,u.mipInt.value=g-i;const S=this._sizeLods[r],b=3*S*(r>g-Lo?r-g+Lo:0),w=4*(this._cubeSize-S);fl(n,b,w,3*S,2*S),l.setRenderTarget(n),l.render(f,hf)}}function JT(t){const e=[],n=[],i=[];let r=t;const o=t-Lo+1+Sg.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Lo?l=Sg[s-t+Lo-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,x=6,_=3,m=2,h=1,v=new Float32Array(_*x*p),g=new Float32Array(m*x*p),S=new Float32Array(h*x*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,T=w>2?0:-1,y=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];v.set(y,_*x*w),g.set(u,m*x*w);const E=[w,w,w,w,w,w];S.set(E,h*x*w)}const b=new Tn;b.setAttribute("position",new Zn(v,_)),b.setAttribute("uv",new Zn(g,m)),b.setAttribute("faceIndex",new Zn(S,h)),e.push(b),r>Lo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Tg(t,e,n){const i=new ai(t,e,n);return i.texture.mapping=Jc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $T(t,e,n){const i=new Float32Array(Cr),r=new H(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ag(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function bg(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Qh(){return`

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
	`}function eA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===bd||l===Cd,d=l===qo||l===Ko;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new wg(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new wg(t));const u=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",o),u.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function tA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nA(t,e,n,i){const r={},o=new WeakMap;function s(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);for(const x in u.morphAttributes){const _=u.morphAttributes[x];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}u.removeEventListener("dispose",s),delete r[u.id];const p=o.get(u);p&&(e.remove(p),o.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,n.memory.geometries++),u}function l(f){const u=f.attributes;for(const x in u)e.update(u[x],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const x in p){const _=p[x];for(let m=0,h=_.length;m<h;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(f){const u=[],p=f.index,x=f.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let g=0,S=v.length;g<S;g+=3){const b=v[g+0],w=v[g+1],A=v[g+2];u.push(b,w,w,A,A,b)}}else if(x!==void 0){const v=x.array;_=x.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const b=g+0,w=g+1,A=g+2;u.push(b,w,w,A,A,b)}}else return;const m=new(Kx(u)?t_:e_)(u,1);m.version=_;const h=o.get(f);h&&e.remove(h),o.set(f,m)}function d(f){const u=o.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function iA(t,e,n,i){const r=i.isWebGL2;let o;function s(u){o=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function d(u,p){t.drawElements(o,p,a,u*l),n.update(p,o,1)}function f(u,p,x){if(x===0)return;let _,m;if(r)_=t,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](o,p,a,u*l,x),n.update(p,o,x)}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=f}function rA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function oA(t,e){return t[0]-e[0]}function sA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function aA(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new Pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let m=o.get(d);if(m===void 0||m.count!==_){let z=function(){U.dispose(),o.delete(d),d.removeEventListener("dispose",z)};var p=z;m!==void 0&&m.texture.dispose();const g=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,w=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],T=d.morphAttributes.color||[];let y=0;g===!0&&(y=1),S===!0&&(y=2),b===!0&&(y=3);let E=d.attributes.position.count*y,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const D=new Float32Array(E*R*4*_),U=new Jx(D,E,R,_);U.type=qi,U.needsUpdate=!0;const P=y*4;for(let B=0;B<_;B++){const W=w[B],I=A[B],F=T[B],V=E*R*4*B;for(let N=0;N<W.count;N++){const G=N*P;g===!0&&(s.fromBufferAttribute(W,N),D[V+G+0]=s.x,D[V+G+1]=s.y,D[V+G+2]=s.z,D[V+G+3]=0),S===!0&&(s.fromBufferAttribute(I,N),D[V+G+4]=s.x,D[V+G+5]=s.y,D[V+G+6]=s.z,D[V+G+7]=0),b===!0&&(s.fromBufferAttribute(F,N),D[V+G+8]=s.x,D[V+G+9]=s.y,D[V+G+10]=s.z,D[V+G+11]=F.itemSize===4?s.w:1)}}m={count:_,texture:U,size:new qe(E,R)},o.set(d,m),d.addEventListener("dispose",z)}let h=0;for(let g=0;g<u.length;g++)h+=u[g];const v=d.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",u),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const x=u===void 0?0:u.length;let _=i[d.id];if(_===void 0||_.length!==x){_=[];for(let S=0;S<x;S++)_[S]=[S,0];i[d.id]=_}for(let S=0;S<x;S++){const b=_[S];b[0]=S,b[1]=u[S]}_.sort(sA);for(let S=0;S<8;S++)S<x&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(oA);const m=d.morphAttributes.position,h=d.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const b=a[S],w=b[0],A=b[1];w!==Number.MAX_SAFE_INTEGER&&A?(m&&d.getAttribute("morphTarget"+S)!==m[w]&&d.setAttribute("morphTarget"+S,m[w]),h&&d.getAttribute("morphNormal"+S)!==h[w]&&d.setAttribute("morphNormal"+S,h[w]),r[S]=A,v+=A):(m&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),h&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const g=d.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function lA(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return f}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}const s_=new Zt,a_=new Jx,l_=new KM,c_=new r_,Cg=[],Rg=[],Lg=new Float32Array(16),Pg=new Float32Array(9),Dg=new Float32Array(4);function os(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Cg[r];if(o===void 0&&(o=new Float32Array(r),Cg[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function nu(t,e){let n=Rg[e];n===void 0&&(n=new Int32Array(e),Rg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function cA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function uA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function fA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function dA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function hA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;Dg.set(i),t.uniformMatrix2fv(this.addr,!1,Dg),Tt(n,i)}}function pA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;Pg.set(i),t.uniformMatrix3fv(this.addr,!1,Pg),Tt(n,i)}}function mA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;Lg.set(i),t.uniformMatrix4fv(this.addr,!1,Lg),Tt(n,i)}}function gA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function vA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function xA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function _A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function yA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function SA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function MA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function EA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function wA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||s_,r)}function TA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||l_,r)}function AA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||c_,r)}function bA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||a_,r)}function CA(t){switch(t){case 5126:return cA;case 35664:return uA;case 35665:return fA;case 35666:return dA;case 35674:return hA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return gA;case 35667:case 35671:return vA;case 35668:case 35672:return xA;case 35669:case 35673:return _A;case 5125:return yA;case 36294:return SA;case 36295:return MA;case 36296:return EA;case 35678:case 36198:case 36298:case 36306:case 35682:return wA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return bA}}function RA(t,e){t.uniform1fv(this.addr,e)}function LA(t,e){const n=os(e,this.size,2);t.uniform2fv(this.addr,n)}function PA(t,e){const n=os(e,this.size,3);t.uniform3fv(this.addr,n)}function DA(t,e){const n=os(e,this.size,4);t.uniform4fv(this.addr,n)}function NA(t,e){const n=os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function IA(t,e){const n=os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function UA(t,e){const n=os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function OA(t,e){t.uniform1iv(this.addr,e)}function FA(t,e){t.uniform2iv(this.addr,e)}function zA(t,e){t.uniform3iv(this.addr,e)}function kA(t,e){t.uniform4iv(this.addr,e)}function BA(t,e){t.uniform1uiv(this.addr,e)}function VA(t,e){t.uniform2uiv(this.addr,e)}function HA(t,e){t.uniform3uiv(this.addr,e)}function GA(t,e){t.uniform4uiv(this.addr,e)}function WA(t,e,n){const i=this.cache,r=e.length,o=nu(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||s_,o[s])}function XA(t,e,n){const i=this.cache,r=e.length,o=nu(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||l_,o[s])}function jA(t,e,n){const i=this.cache,r=e.length,o=nu(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||c_,o[s])}function YA(t,e,n){const i=this.cache,r=e.length,o=nu(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||a_,o[s])}function qA(t){switch(t){case 5126:return RA;case 35664:return LA;case 35665:return PA;case 35666:return DA;case 35674:return NA;case 35675:return IA;case 35676:return UA;case 5124:case 35670:return OA;case 35667:case 35671:return FA;case 35668:case 35672:return zA;case 35669:case 35673:return kA;case 5125:return BA;case 36294:return VA;case 36295:return HA;case 36296:return GA;case 35678:case 36198:case 36298:case 36306:case 35682:return WA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return jA;case 36289:case 36303:case 36311:case 36292:return YA}}class KA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=CA(n.type)}}class ZA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=qA(n.type)}}class QA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const vf=/(\w+)(\])?(\[|\.)?/g;function Ng(t,e){t.seq.push(e),t.map[e.id]=e}function JA(t,e,n){const i=t.name,r=i.length;for(vf.lastIndex=0;;){const o=vf.exec(i),s=vf.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Ng(n,c===void 0?new KA(a,t,e):new ZA(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new QA(a),Ng(n,f)),n=f}}}class kl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);JA(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Ig(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const $A=37297;let e2=0;function t2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function n2(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Sc&&n===yc?i="LinearDisplayP3ToLinearSRGB":e===yc&&n===Sc&&(i="LinearSRGBToLinearDisplayP3"),t){case Li:case $c:return[i,"LinearTransferOETF"];case Mt:case Xh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Ug(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+t2(t.getShaderSource(e),s)}else return r}function i2(t,e){const n=n2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function r2(t,e){let n;switch(e){case gM:n="Linear";break;case vM:n="Reinhard";break;case xM:n="OptimizedCineon";break;case _M:n="ACESFilmic";break;case yM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function o2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function s2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function a2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Ls(t){return t!==""}function Og(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(t){return t.replace(l2,u2)}const c2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function u2(t,e){let n=Ke[e];if(n===void 0){const i=c2.get(e);if(i!==void 0)n=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Id(n)}const f2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zg(t){return t.replace(f2,d2)}function d2(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function kg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function h2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===kx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===W1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function p2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case qo:case Ko:e="ENVMAP_TYPE_CUBE";break;case Jc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ko:e="ENVMAP_MODE_REFRACTION";break}return e}function g2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Bx:e="ENVMAP_BLENDING_MULTIPLY";break;case pM:e="ENVMAP_BLENDING_MIX";break;case mM:e="ENVMAP_BLENDING_ADD";break}return e}function v2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function x2(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=h2(n),c=p2(n),d=m2(n),f=g2(n),u=v2(n),p=n.isWebGL2?"":o2(n),x=s2(o),_=r.createProgram();let m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ls).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ls).join(`
`),h.length>0&&(h+=`
`)):(m=[kg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),h=[p,kg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rr?"#define TONE_MAPPING":"",n.toneMapping!==rr?Ke.tonemapping_pars_fragment:"",n.toneMapping!==rr?r2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,i2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ls).join(`
`)),s=Id(s),s=Og(s,n),s=Fg(s,n),a=Id(a),a=Og(a,n),a=Fg(a,n),s=zg(s),a=zg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const g=v+m+s,S=v+h+a,b=Ig(r,r.VERTEX_SHADER,g),w=Ig(r,r.FRAGMENT_SHADER,S);r.attachShader(_,b),r.attachShader(_,w),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(R){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(_).trim(),U=r.getShaderInfoLog(b).trim(),P=r.getShaderInfoLog(w).trim();let z=!0,B=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,b,w);else{const W=Ug(r,b,"vertex"),I=Ug(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+D+`
`+W+`
`+I)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||P==="")&&(B=!1);B&&(R.diagnostics={runnable:z,programLog:D,vertexShader:{log:U,prefix:m},fragmentShader:{log:P,prefix:h}})}r.deleteShader(b),r.deleteShader(w),T=new kl(r,_),y=a2(r,_)}let T;this.getUniforms=function(){return T===void 0&&A(this),T};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,$A)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=e2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}let _2=0;class y2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new S2(e),n.set(e,i)),i}}class S2{constructor(e){this.id=_2++,this.code=e,this.usedTimes=0}}function M2(t,e,n,i,r,o,s){const a=new Yh,l=new y2,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,E,R,D,U){const P=D.fog,z=U.geometry,B=y.isMeshStandardMaterial?D.environment:null,W=(y.isMeshStandardMaterial?n:e).get(y.envMap||B),I=W&&W.mapping===Jc?W.image.height:null,F=x[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const V=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,N=V!==void 0?V.length:0;let G=0;z.morphAttributes.position!==void 0&&(G=1),z.morphAttributes.normal!==void 0&&(G=2),z.morphAttributes.color!==void 0&&(G=3);let le,ue,se,ge;if(F){const rt=ni[F];le=rt.vertexShader,ue=rt.fragmentShader}else le=y.vertexShader,ue=y.fragmentShader,l.update(y),se=l.getVertexShaderID(y),ge=l.getFragmentShaderID(y);const Ne=t.getRenderTarget(),_e=U.isInstancedMesh===!0,Ee=!!y.map,Oe=!!y.matcap,Ce=!!W,X=!!y.aoMap,ke=!!y.lightMap,ve=!!y.bumpMap,Ae=!!y.normalMap,we=!!y.displacementMap,Ze=!!y.emissiveMap,Fe=!!y.metalnessMap,j=!!y.roughnessMap,$=y.anisotropy>0,Me=y.clearcoat>0,de=y.iridescence>0,C=y.sheen>0,M=y.transmission>0,k=$&&!!y.anisotropyMap,Z=Me&&!!y.clearcoatMap,K=Me&&!!y.clearcoatNormalMap,Q=Me&&!!y.clearcoatRoughnessMap,ne=de&&!!y.iridescenceMap,oe=de&&!!y.iridescenceThicknessMap,fe=C&&!!y.sheenColorMap,pe=C&&!!y.sheenRoughnessMap,Le=!!y.specularMap,ce=!!y.specularColorMap,Pe=!!y.specularIntensityMap,Se=M&&!!y.transmissionMap,Re=M&&!!y.thicknessMap,be=!!y.gradientMap,xe=!!y.alphaMap,Be=y.alphaTest>0,O=!!y.alphaHash,ye=!!y.extensions,ie=!!z.attributes.uv1,Y=!!z.attributes.uv2,he=!!z.attributes.uv3;let Ie=rr;return y.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Ie=t.toneMapping),{isWebGL2:d,shaderID:F,shaderType:y.type,shaderName:y.name,vertexShader:le,fragmentShader:ue,defines:y.defines,customVertexShaderID:se,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:_e,instancingColor:_e&&U.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Ne===null?t.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Li,map:Ee,matcap:Oe,envMap:Ce,envMapMode:Ce&&W.mapping,envMapCubeUVHeight:I,aoMap:X,lightMap:ke,bumpMap:ve,normalMap:Ae,displacementMap:u&&we,emissiveMap:Ze,normalMapObjectSpace:Ae&&y.normalMapType===IM,normalMapTangentSpace:Ae&&y.normalMapType===NM,metalnessMap:Fe,roughnessMap:j,anisotropy:$,anisotropyMap:k,clearcoat:Me,clearcoatMap:Z,clearcoatNormalMap:K,clearcoatRoughnessMap:Q,iridescence:de,iridescenceMap:ne,iridescenceThicknessMap:oe,sheen:C,sheenColorMap:fe,sheenRoughnessMap:pe,specularMap:Le,specularColorMap:ce,specularIntensityMap:Pe,transmission:M,transmissionMap:Se,thicknessMap:Re,gradientMap:be,opaque:y.transparent===!1&&y.blending===Fo,alphaMap:xe,alphaTest:Be,alphaHash:O,combine:y.combine,mapUv:Ee&&_(y.map.channel),aoMapUv:X&&_(y.aoMap.channel),lightMapUv:ke&&_(y.lightMap.channel),bumpMapUv:ve&&_(y.bumpMap.channel),normalMapUv:Ae&&_(y.normalMap.channel),displacementMapUv:we&&_(y.displacementMap.channel),emissiveMapUv:Ze&&_(y.emissiveMap.channel),metalnessMapUv:Fe&&_(y.metalnessMap.channel),roughnessMapUv:j&&_(y.roughnessMap.channel),anisotropyMapUv:k&&_(y.anisotropyMap.channel),clearcoatMapUv:Z&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:K&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:pe&&_(y.sheenRoughnessMap.channel),specularMapUv:Le&&_(y.specularMap.channel),specularColorMapUv:ce&&_(y.specularColorMap.channel),specularIntensityMapUv:Pe&&_(y.specularIntensityMap.channel),transmissionMapUv:Se&&_(y.transmissionMap.channel),thicknessMapUv:Re&&_(y.thicknessMap.channel),alphaMapUv:xe&&_(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ae||$),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:ie,vertexUv2s:Y,vertexUv3s:he,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(Ee||xe),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:G,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ie,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yi,flipSided:y.side===cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ye&&y.extensions.derivatives===!0,extensionFragDepth:ye&&y.extensions.fragDepth===!0,extensionDrawBuffers:ye&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)E.push(R),E.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(v(E,y),g(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function v(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function g(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function S(y){const E=x[y.type];let R;if(E){const D=ni[E];R=js.clone(D.uniforms)}else R=y.uniforms;return R}function b(y,E){let R;for(let D=0,U=c.length;D<U;D++){const P=c[D];if(P.cacheKey===E){R=P,++R.usedTimes;break}}return R===void 0&&(R=new x2(t,E,y,o),c.push(R)),R}function w(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function A(y){l.remove(y)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:b,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:T}}function E2(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function w2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Bg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Vg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,u,p,x,_,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:u,material:p,groupOrder:x,renderOrder:f.renderOrder,z:_,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=u,h.material=p,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function a(f,u,p,x,_,m){const h=s(f,u,p,x,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,u,p,x,_,m){const h=s(f,u,p,x,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,u){n.length>1&&n.sort(f||w2),i.length>1&&i.sort(u||Bg),r.length>1&&r.sort(u||Bg)}function d(){for(let f=e,u=t.length;f<u;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:d,sort:c}}function T2(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Vg,t.set(i,[s])):r>=o.length?(s=new Vg,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function A2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new Je};break;case"SpotLight":n={position:new H,direction:new H,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function b2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let C2=0;function R2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function L2(t,e){const n=new A2,i=b2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new H);const o=new H,s=new yt,a=new yt;function l(d,f){let u=0,p=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let _=0,m=0,h=0,v=0,g=0,S=0,b=0,w=0,A=0,T=0,y=0;d.sort(R2);const E=f===!0?Math.PI:1;for(let D=0,U=d.length;D<U;D++){const P=d[D],z=P.color,B=P.intensity,W=P.distance,I=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=z.r*B*E,p+=z.g*B*E,x+=z.b*B*E;else if(P.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(P.sh.coefficients[F],B);y++}else if(P.isDirectionalLight){const F=n.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const V=P.shadow,N=i.get(P);N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,r.directionalShadow[_]=N,r.directionalShadowMap[_]=I,r.directionalShadowMatrix[_]=P.shadow.matrix,S++}r.directional[_]=F,_++}else if(P.isSpotLight){const F=n.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(z).multiplyScalar(B*E),F.distance=W,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,r.spot[h]=F;const V=P.shadow;if(P.map&&(r.spotLightMap[A]=P.map,A++,V.updateMatrices(P),P.castShadow&&T++),r.spotLightMatrix[h]=V.matrix,P.castShadow){const N=i.get(P);N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,r.spotShadow[h]=N,r.spotShadowMap[h]=I,w++}h++}else if(P.isRectAreaLight){const F=n.get(P);F.color.copy(z).multiplyScalar(B),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),r.rectArea[v]=F,v++}else if(P.isPointLight){const F=n.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity*E),F.distance=P.distance,F.decay=P.decay,P.castShadow){const V=P.shadow,N=i.get(P);N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,N.shadowCameraNear=V.camera.near,N.shadowCameraFar=V.camera.far,r.pointShadow[m]=N,r.pointShadowMap[m]=I,r.pointShadowMatrix[m]=P.shadow.matrix,b++}r.point[m]=F,m++}else if(P.isHemisphereLight){const F=n.get(P);F.skyColor.copy(P.color).multiplyScalar(B*E),F.groundColor.copy(P.groundColor).multiplyScalar(B*E),r.hemi[g]=F,g++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=p,r.ambient[2]=x;const R=r.hash;(R.directionalLength!==_||R.pointLength!==m||R.spotLength!==h||R.rectAreaLength!==v||R.hemiLength!==g||R.numDirectionalShadows!==S||R.numPointShadows!==b||R.numSpotShadows!==w||R.numSpotMaps!==A||R.numLightProbes!==y)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=w+A-T,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=y,R.directionalLength=_,R.pointLength=m,R.spotLength=h,R.rectAreaLength=v,R.hemiLength=g,R.numDirectionalShadows=S,R.numPointShadows=b,R.numSpotShadows=w,R.numSpotMaps=A,R.numLightProbes=y,r.version=C2++)}function c(d,f){let u=0,p=0,x=0,_=0,m=0;const h=f.matrixWorldInverse;for(let v=0,g=d.length;v<g;v++){const S=d[v];if(S.isDirectionalLight){const b=r.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(h),u++}else if(S.isSpotLight){const b=r.spot[x];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(h),x++}else if(S.isRectAreaLight){const b=r.rectArea[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),a.identity(),s.copy(S.matrixWorld),s.premultiply(h),a.extractRotation(s),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const b=r.point[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),p++}else if(S.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function Hg(t,e){const n=new L2(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function P2(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new Hg(t,e),n.set(o,[l])):s>=a.length?(l=new Hg(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class D2 extends Ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N2 extends Ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const I2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U2=`uniform sampler2D shadow_pass;
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
}`;function O2(t,e,n){let i=new qh;const r=new qe,o=new qe,s=new Pt,a=new D2({depthPacking:DM}),l=new N2,c={},d=n.maxTextureSize,f={[ur]:cn,[cn]:ur,[yi]:yi},u=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:I2,fragmentShader:U2}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const x=new Tn;x.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kx;let h=this.type;this.render=function(b,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const T=t.getRenderTarget(),y=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),R=t.state;R.setBlending(Ti),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const D=h!==gi&&this.type===gi,U=h===gi&&this.type!==gi;for(let P=0,z=b.length;P<z;P++){const B=b[P],W=B.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const I=W.getFrameExtents();if(r.multiply(I),o.copy(W.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/I.x),r.x=o.x*I.x,W.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/I.y),r.y=o.y*I.y,W.mapSize.y=o.y)),W.map===null||D===!0||U===!0){const V=this.type!==gi?{minFilter:Ut,magFilter:Ut}:{};W.map!==null&&W.map.dispose(),W.map=new ai(r.x,r.y,V),W.map.texture.name=B.name+".shadowMap",W.camera.updateProjectionMatrix()}t.setRenderTarget(W.map),t.clear();const F=W.getViewportCount();for(let V=0;V<F;V++){const N=W.getViewport(V);s.set(o.x*N.x,o.y*N.y,o.x*N.z,o.y*N.w),R.viewport(s),W.updateMatrices(B,V),i=W.getFrustum(),S(w,A,W.camera,B,this.type)}W.isPointLightShadow!==!0&&this.type===gi&&v(W,A),W.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(T,y,E)};function v(b,w){const A=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ai(r.x,r.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(w,null,A,u,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(w,null,A,p,_,null)}function g(b,w,A,T){let y=null;const E=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)y=E;else if(y=A.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const R=y.uuid,D=w.uuid;let U=c[R];U===void 0&&(U={},c[R]=U);let P=U[D];P===void 0&&(P=y.clone(),U[D]=P),y=P}if(y.visible=w.visible,y.wireframe=w.wireframe,T===gi?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:f[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const R=t.properties.get(y);R.light=A}return y}function S(b,w,A,T,y){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===gi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const D=e.update(b),U=b.material;if(Array.isArray(U)){const P=D.groups;for(let z=0,B=P.length;z<B;z++){const W=P[z],I=U[W.materialIndex];if(I&&I.visible){const F=g(b,I,T,y);t.renderBufferDirect(A,null,D,F,b,W)}}}else if(U.visible){const P=g(b,U,T,y);t.renderBufferDirect(A,null,D,P,b,null)}}const R=b.children;for(let D=0,U=R.length;D<U;D++)S(R[D],w,A,T,y)}}function F2(t,e,n){const i=n.isWebGL2;function r(){let O=!1;const ye=new Pt;let ie=null;const Y=new Pt(0,0,0,0);return{setMask:function(he){ie!==he&&!O&&(t.colorMask(he,he,he,he),ie=he)},setLocked:function(he){O=he},setClear:function(he,Ie,Xe,rt,Nt){Nt===!0&&(he*=rt,Ie*=rt,Xe*=rt),ye.set(he,Ie,Xe,rt),Y.equals(ye)===!1&&(t.clearColor(he,Ie,Xe,rt),Y.copy(ye))},reset:function(){O=!1,ie=null,Y.set(-1,0,0,0)}}}function o(){let O=!1,ye=null,ie=null,Y=null;return{setTest:function(he){he?Ee(t.DEPTH_TEST):Oe(t.DEPTH_TEST)},setMask:function(he){ye!==he&&!O&&(t.depthMask(he),ye=he)},setFunc:function(he){if(ie!==he){switch(he){case aM:t.depthFunc(t.NEVER);break;case lM:t.depthFunc(t.ALWAYS);break;case cM:t.depthFunc(t.LESS);break;case xc:t.depthFunc(t.LEQUAL);break;case uM:t.depthFunc(t.EQUAL);break;case fM:t.depthFunc(t.GEQUAL);break;case dM:t.depthFunc(t.GREATER);break;case hM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ie=he}},setLocked:function(he){O=he},setClear:function(he){Y!==he&&(t.clearDepth(he),Y=he)},reset:function(){O=!1,ye=null,ie=null,Y=null}}}function s(){let O=!1,ye=null,ie=null,Y=null,he=null,Ie=null,Xe=null,rt=null,Nt=null;return{setTest:function(je){O||(je?Ee(t.STENCIL_TEST):Oe(t.STENCIL_TEST))},setMask:function(je){ye!==je&&!O&&(t.stencilMask(je),ye=je)},setFunc:function(je,At,fn){(ie!==je||Y!==At||he!==fn)&&(t.stencilFunc(je,At,fn),ie=je,Y=At,he=fn)},setOp:function(je,At,fn){(Ie!==je||Xe!==At||rt!==fn)&&(t.stencilOp(je,At,fn),Ie=je,Xe=At,rt=fn)},setLocked:function(je){O=je},setClear:function(je){Nt!==je&&(t.clearStencil(je),Nt=je)},reset:function(){O=!1,ye=null,ie=null,Y=null,he=null,Ie=null,Xe=null,rt=null,Nt=null}}}const a=new r,l=new o,c=new s,d=new WeakMap,f=new WeakMap;let u={},p={},x=new WeakMap,_=[],m=null,h=!1,v=null,g=null,S=null,b=null,w=null,A=null,T=null,y=new Je(0,0,0),E=0,R=!1,D=null,U=null,P=null,z=null,B=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,F=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(V)[1]),I=F>=1):V.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),I=F>=2);let N=null,G={};const le=t.getParameter(t.SCISSOR_BOX),ue=t.getParameter(t.VIEWPORT),se=new Pt().fromArray(le),ge=new Pt().fromArray(ue);function Ne(O,ye,ie,Y){const he=new Uint8Array(4),Ie=t.createTexture();t.bindTexture(O,Ie),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<ie;Xe++)i&&(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)?t.texImage3D(ye,0,t.RGBA,1,1,Y,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ye+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return Ie}const _e={};_e[t.TEXTURE_2D]=Ne(t.TEXTURE_2D,t.TEXTURE_2D,1),_e[t.TEXTURE_CUBE_MAP]=Ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(_e[t.TEXTURE_2D_ARRAY]=Ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),_e[t.TEXTURE_3D]=Ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ee(t.DEPTH_TEST),l.setFunc(xc),Fe(!1),j(wm),Ee(t.CULL_FACE),we(Ti);function Ee(O){u[O]!==!0&&(t.enable(O),u[O]=!0)}function Oe(O){u[O]!==!1&&(t.disable(O),u[O]=!1)}function Ce(O,ye){return p[O]!==ye?(t.bindFramebuffer(O,ye),p[O]=ye,i&&(O===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ye),O===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ye)),!0):!1}function X(O,ye){let ie=_,Y=!1;if(O)if(ie=x.get(ye),ie===void 0&&(ie=[],x.set(ye,ie)),O.isWebGLMultipleRenderTargets){const he=O.texture;if(ie.length!==he.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let Ie=0,Xe=he.length;Ie<Xe;Ie++)ie[Ie]=t.COLOR_ATTACHMENT0+Ie;ie.length=he.length,Y=!0}}else ie[0]!==t.COLOR_ATTACHMENT0&&(ie[0]=t.COLOR_ATTACHMENT0,Y=!0);else ie[0]!==t.BACK&&(ie[0]=t.BACK,Y=!0);Y&&(n.isWebGL2?t.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function ke(O){return m!==O?(t.useProgram(O),m=O,!0):!1}const ve={[br]:t.FUNC_ADD,[j1]:t.FUNC_SUBTRACT,[Y1]:t.FUNC_REVERSE_SUBTRACT};if(i)ve[bm]=t.MIN,ve[Cm]=t.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(ve[bm]=O.MIN_EXT,ve[Cm]=O.MAX_EXT)}const Ae={[q1]:t.ZERO,[K1]:t.ONE,[Z1]:t.SRC_COLOR,[Td]:t.SRC_ALPHA,[nM]:t.SRC_ALPHA_SATURATE,[eM]:t.DST_COLOR,[J1]:t.DST_ALPHA,[Q1]:t.ONE_MINUS_SRC_COLOR,[Ad]:t.ONE_MINUS_SRC_ALPHA,[tM]:t.ONE_MINUS_DST_COLOR,[$1]:t.ONE_MINUS_DST_ALPHA,[iM]:t.CONSTANT_COLOR,[rM]:t.ONE_MINUS_CONSTANT_COLOR,[oM]:t.CONSTANT_ALPHA,[sM]:t.ONE_MINUS_CONSTANT_ALPHA};function we(O,ye,ie,Y,he,Ie,Xe,rt,Nt,je){if(O===Ti){h===!0&&(Oe(t.BLEND),h=!1);return}if(h===!1&&(Ee(t.BLEND),h=!0),O!==X1){if(O!==v||je!==R){if((g!==br||w!==br)&&(t.blendEquation(t.FUNC_ADD),g=br,w=br),je)switch(O){case Fo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vc:t.blendFunc(t.ONE,t.ONE);break;case Tm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Am:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Fo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vc:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Tm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Am:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,b=null,A=null,T=null,y.set(0,0,0),E=0,v=O,R=je}return}he=he||ye,Ie=Ie||ie,Xe=Xe||Y,(ye!==g||he!==w)&&(t.blendEquationSeparate(ve[ye],ve[he]),g=ye,w=he),(ie!==S||Y!==b||Ie!==A||Xe!==T)&&(t.blendFuncSeparate(Ae[ie],Ae[Y],Ae[Ie],Ae[Xe]),S=ie,b=Y,A=Ie,T=Xe),(rt.equals(y)===!1||Nt!==E)&&(t.blendColor(rt.r,rt.g,rt.b,Nt),y.copy(rt),E=Nt),v=O,R=!1}function Ze(O,ye){O.side===yi?Oe(t.CULL_FACE):Ee(t.CULL_FACE);let ie=O.side===cn;ye&&(ie=!ie),Fe(ie),O.blending===Fo&&O.transparent===!1?we(Ti):we(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const Y=O.stencilWrite;c.setTest(Y),Y&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Me(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ee(t.SAMPLE_ALPHA_TO_COVERAGE):Oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(O){D!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),D=O)}function j(O){O!==H1?(Ee(t.CULL_FACE),O!==U&&(O===wm?t.cullFace(t.BACK):O===G1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Oe(t.CULL_FACE),U=O}function $(O){O!==P&&(I&&t.lineWidth(O),P=O)}function Me(O,ye,ie){O?(Ee(t.POLYGON_OFFSET_FILL),(z!==ye||B!==ie)&&(t.polygonOffset(ye,ie),z=ye,B=ie)):Oe(t.POLYGON_OFFSET_FILL)}function de(O){O?Ee(t.SCISSOR_TEST):Oe(t.SCISSOR_TEST)}function C(O){O===void 0&&(O=t.TEXTURE0+W-1),N!==O&&(t.activeTexture(O),N=O)}function M(O,ye,ie){ie===void 0&&(N===null?ie=t.TEXTURE0+W-1:ie=N);let Y=G[ie];Y===void 0&&(Y={type:void 0,texture:void 0},G[ie]=Y),(Y.type!==O||Y.texture!==ye)&&(N!==ie&&(t.activeTexture(ie),N=ie),t.bindTexture(O,ye||_e[O]),Y.type=O,Y.texture=ye)}function k(){const O=G[N];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(O){se.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function Re(O){ge.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),ge.copy(O))}function be(O,ye){let ie=f.get(ye);ie===void 0&&(ie=new WeakMap,f.set(ye,ie));let Y=ie.get(O);Y===void 0&&(Y=t.getUniformBlockIndex(ye,O.name),ie.set(O,Y))}function xe(O,ye){const Y=f.get(ye).get(O);d.get(ye)!==Y&&(t.uniformBlockBinding(ye,Y,O.__bindingPointIndex),d.set(ye,Y))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},N=null,G={},p={},x=new WeakMap,_=[],m=null,h=!1,v=null,g=null,S=null,b=null,w=null,A=null,T=null,y=new Je(0,0,0),E=0,R=!1,D=null,U=null,P=null,z=null,B=null,se.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ee,disable:Oe,bindFramebuffer:Ce,drawBuffers:X,useProgram:ke,setBlending:we,setMaterial:Ze,setFlipSided:Fe,setCullFace:j,setLineWidth:$,setPolygonOffset:Me,setScissorTest:de,activeTexture:C,bindTexture:M,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:K,texImage2D:ce,texImage3D:Pe,updateUBOMapping:be,uniformBlockBinding:xe,texStorage2D:pe,texStorage3D:Le,texSubImage2D:Q,texSubImage3D:ne,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Se,viewport:Re,reset:Be}}function z2(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,d=r.maxTextureSize,f=r.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let _;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return h?new OffscreenCanvas(C,M):Ec("canvas")}function g(C,M,k,Z){let K=1;if((C.width>Z||C.height>Z)&&(K=Z/Math.max(C.width,C.height)),K<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const Q=M?Nd:Math.floor,ne=Q(K*C.width),oe=Q(K*C.height);_===void 0&&(_=v(ne,oe));const fe=k?v(ne,oe):_;return fe.width=ne,fe.height=oe,fe.getContext("2d").drawImage(C,0,0,ne,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ne+"x"+oe+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return rg(C.width)&&rg(C.height)}function b(C){return a?!1:C.wrapS!==Xn||C.wrapT!==Xn||C.minFilter!==Ut&&C.minFilter!==vn}function w(C,M){return C.generateMipmaps&&M&&C.minFilter!==Ut&&C.minFilter!==vn}function A(C){t.generateMipmap(C)}function T(C,M,k,Z,K=!1){if(a===!1)return M;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=M;if(M===t.RED&&(k===t.FLOAT&&(Q=t.R32F),k===t.HALF_FLOAT&&(Q=t.R16F),k===t.UNSIGNED_BYTE&&(Q=t.R8)),M===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(Q=t.R8UI),k===t.UNSIGNED_SHORT&&(Q=t.R16UI),k===t.UNSIGNED_INT&&(Q=t.R32UI),k===t.BYTE&&(Q=t.R8I),k===t.SHORT&&(Q=t.R16I),k===t.INT&&(Q=t.R32I)),M===t.RG&&(k===t.FLOAT&&(Q=t.RG32F),k===t.HALF_FLOAT&&(Q=t.RG16F),k===t.UNSIGNED_BYTE&&(Q=t.RG8)),M===t.RGBA){const ne=K?_c:it.getTransfer(Z);k===t.FLOAT&&(Q=t.RGBA32F),k===t.HALF_FLOAT&&(Q=t.RGBA16F),k===t.UNSIGNED_BYTE&&(Q=ne===at?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(C,M,k){return w(C,k)===!0||C.isFramebufferTexture&&C.minFilter!==Ut&&C.minFilter!==vn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function E(C){return C===Ut||C===Rm||C===Hu?t.NEAREST:t.LINEAR}function R(C){const M=C.target;M.removeEventListener("dispose",R),U(M),M.isVideoTexture&&x.delete(M)}function D(C){const M=C.target;M.removeEventListener("dispose",D),z(M)}function U(C){const M=i.get(C);if(M.__webglInit===void 0)return;const k=C.source,Z=m.get(k);if(Z){const K=Z[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(C),Object.keys(Z).length===0&&m.delete(k)}i.remove(C)}function P(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const k=C.source,Z=m.get(k);delete Z[M.__cacheKey],s.memory.textures--}function z(C){const M=C.texture,k=i.get(C),Z=i.get(M);if(Z.__webglTexture!==void 0&&(t.deleteTexture(Z.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(k.__webglFramebuffer[K]))for(let Q=0;Q<k.__webglFramebuffer[K].length;Q++)t.deleteFramebuffer(k.__webglFramebuffer[K][Q]);else t.deleteFramebuffer(k.__webglFramebuffer[K]);k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer[K])}else{if(Array.isArray(k.__webglFramebuffer))for(let K=0;K<k.__webglFramebuffer.length;K++)t.deleteFramebuffer(k.__webglFramebuffer[K]);else t.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&t.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let K=0;K<k.__webglColorRenderbuffer.length;K++)k.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(k.__webglColorRenderbuffer[K]);k.__webglDepthRenderbuffer&&t.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let K=0,Q=M.length;K<Q;K++){const ne=i.get(M[K]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),s.memory.textures--),i.remove(M[K])}i.remove(M),i.remove(C)}let B=0;function W(){B=0}function I(){const C=B;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),B+=1,C}function F(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function V(C,M){const k=i.get(C);if(C.isVideoTexture&&Me(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(k,C,M);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+M)}function N(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){Ee(k,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+M)}function G(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){Ee(k,C,M);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+M)}function le(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){Oe(k,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+M)}const ue={[Rd]:t.REPEAT,[Xn]:t.CLAMP_TO_EDGE,[Ld]:t.MIRRORED_REPEAT},se={[Ut]:t.NEAREST,[Rm]:t.NEAREST_MIPMAP_NEAREST,[Hu]:t.NEAREST_MIPMAP_LINEAR,[vn]:t.LINEAR,[SM]:t.LINEAR_MIPMAP_NEAREST,[fa]:t.LINEAR_MIPMAP_LINEAR},ge={[UM]:t.NEVER,[HM]:t.ALWAYS,[OM]:t.LESS,[zM]:t.LEQUAL,[FM]:t.EQUAL,[VM]:t.GEQUAL,[kM]:t.GREATER,[BM]:t.NOTEQUAL};function Ne(C,M,k){if(k?(t.texParameteri(C,t.TEXTURE_WRAP_S,ue[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,ue[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,ue[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,se[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,se[M.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Xn||M.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,E(M.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==Ut&&M.minFilter!==vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ge[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ut||M.minFilter!==Hu&&M.minFilter!==fa||M.type===qi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===fr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(C,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function _e(C,M){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const Z=M.source;let K=m.get(Z);K===void 0&&(K={},m.set(Z,K));const Q=F(M);if(Q!==C.__cacheKey){K[Q]===void 0&&(K[Q]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,k=!0),K[Q].usedTimes++;const ne=K[C.__cacheKey];ne!==void 0&&(K[C.__cacheKey].usedTimes--,ne.usedTimes===0&&P(M)),C.__cacheKey=Q,C.__webglTexture=K[Q].texture}return k}function Ee(C,M,k){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const K=_e(C,M),Q=M.source;n.bindTexture(Z,C.__webglTexture,t.TEXTURE0+k);const ne=i.get(Q);if(Q.version!==ne.__version||K===!0){n.activeTexture(t.TEXTURE0+k);const oe=it.getPrimaries(it.workingColorSpace),fe=M.colorSpace===Dn?null:it.getPrimaries(M.colorSpace),pe=M.colorSpace===Dn||oe===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Le=b(M)&&S(M.image)===!1;let ce=g(M.image,Le,!1,d);ce=de(M,ce);const Pe=S(ce)||a,Se=o.convert(M.format,M.colorSpace);let Re=o.convert(M.type),be=T(M.internalFormat,Se,Re,M.colorSpace,M.isVideoTexture);Ne(Z,M,Pe);let xe;const Be=M.mipmaps,O=a&&M.isVideoTexture!==!0,ye=ne.__version===void 0||K===!0,ie=y(M,ce,Pe);if(M.isDepthTexture)be=t.DEPTH_COMPONENT,a?M.type===qi?be=t.DEPTH_COMPONENT32F:M.type===Yi?be=t.DEPTH_COMPONENT24:M.type===Ur?be=t.DEPTH24_STENCIL8:be=t.DEPTH_COMPONENT16:M.type===qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Or&&be===t.DEPTH_COMPONENT&&M.type!==Wh&&M.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Yi,Re=o.convert(M.type)),M.format===Zo&&be===t.DEPTH_COMPONENT&&(be=t.DEPTH_STENCIL,M.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ur,Re=o.convert(M.type))),ye&&(O?n.texStorage2D(t.TEXTURE_2D,1,be,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,be,ce.width,ce.height,0,Se,Re,null));else if(M.isDataTexture)if(Be.length>0&&Pe){O&&ye&&n.texStorage2D(t.TEXTURE_2D,ie,be,Be[0].width,Be[0].height);for(let Y=0,he=Be.length;Y<he;Y++)xe=Be[Y],O?n.texSubImage2D(t.TEXTURE_2D,Y,0,0,xe.width,xe.height,Se,Re,xe.data):n.texImage2D(t.TEXTURE_2D,Y,be,xe.width,xe.height,0,Se,Re,xe.data);M.generateMipmaps=!1}else O?(ye&&n.texStorage2D(t.TEXTURE_2D,ie,be,ce.width,ce.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,Se,Re,ce.data)):n.texImage2D(t.TEXTURE_2D,0,be,ce.width,ce.height,0,Se,Re,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){O&&ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,be,Be[0].width,Be[0].height,ce.depth);for(let Y=0,he=Be.length;Y<he;Y++)xe=Be[Y],M.format!==jn?Se!==null?O?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,xe.width,xe.height,ce.depth,Se,xe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,be,xe.width,xe.height,ce.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,xe.width,xe.height,ce.depth,Se,Re,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,be,xe.width,xe.height,ce.depth,0,Se,Re,xe.data)}else{O&&ye&&n.texStorage2D(t.TEXTURE_2D,ie,be,Be[0].width,Be[0].height);for(let Y=0,he=Be.length;Y<he;Y++)xe=Be[Y],M.format!==jn?Se!==null?O?n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,xe.width,xe.height,Se,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?n.texSubImage2D(t.TEXTURE_2D,Y,0,0,xe.width,xe.height,Se,Re,xe.data):n.texImage2D(t.TEXTURE_2D,Y,be,xe.width,xe.height,0,Se,Re,xe.data)}else if(M.isDataArrayTexture)O?(ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,be,ce.width,ce.height,ce.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Se,Re,ce.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ce.width,ce.height,ce.depth,0,Se,Re,ce.data);else if(M.isData3DTexture)O?(ye&&n.texStorage3D(t.TEXTURE_3D,ie,be,ce.width,ce.height,ce.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Se,Re,ce.data)):n.texImage3D(t.TEXTURE_3D,0,be,ce.width,ce.height,ce.depth,0,Se,Re,ce.data);else if(M.isFramebufferTexture){if(ye)if(O)n.texStorage2D(t.TEXTURE_2D,ie,be,ce.width,ce.height);else{let Y=ce.width,he=ce.height;for(let Ie=0;Ie<ie;Ie++)n.texImage2D(t.TEXTURE_2D,Ie,be,Y,he,0,Se,Re,null),Y>>=1,he>>=1}}else if(Be.length>0&&Pe){O&&ye&&n.texStorage2D(t.TEXTURE_2D,ie,be,Be[0].width,Be[0].height);for(let Y=0,he=Be.length;Y<he;Y++)xe=Be[Y],O?n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Se,Re,xe):n.texImage2D(t.TEXTURE_2D,Y,be,Se,Re,xe);M.generateMipmaps=!1}else O?(ye&&n.texStorage2D(t.TEXTURE_2D,ie,be,ce.width,ce.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Re,ce)):n.texImage2D(t.TEXTURE_2D,0,be,Se,Re,ce);w(M,Pe)&&A(Z),ne.__version=Q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Oe(C,M,k){if(M.image.length!==6)return;const Z=_e(C,M),K=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+k);const Q=i.get(K);if(K.version!==Q.__version||Z===!0){n.activeTexture(t.TEXTURE0+k);const ne=it.getPrimaries(it.workingColorSpace),oe=M.colorSpace===Dn?null:it.getPrimaries(M.colorSpace),fe=M.colorSpace===Dn||ne===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const pe=M.isCompressedTexture||M.image[0].isCompressedTexture,Le=M.image[0]&&M.image[0].isDataTexture,ce=[];for(let Y=0;Y<6;Y++)!pe&&!Le?ce[Y]=g(M.image[Y],!1,!0,c):ce[Y]=Le?M.image[Y].image:M.image[Y],ce[Y]=de(M,ce[Y]);const Pe=ce[0],Se=S(Pe)||a,Re=o.convert(M.format,M.colorSpace),be=o.convert(M.type),xe=T(M.internalFormat,Re,be,M.colorSpace),Be=a&&M.isVideoTexture!==!0,O=Q.__version===void 0||Z===!0;let ye=y(M,Pe,Se);Ne(t.TEXTURE_CUBE_MAP,M,Se);let ie;if(pe){Be&&O&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,xe,Pe.width,Pe.height);for(let Y=0;Y<6;Y++){ie=ce[Y].mipmaps;for(let he=0;he<ie.length;he++){const Ie=ie[he];M.format!==jn?Re!==null?Be?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,0,0,Ie.width,Ie.height,Re,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,xe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,0,0,Ie.width,Ie.height,Re,be,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,xe,Ie.width,Ie.height,0,Re,be,Ie.data)}}}else{ie=M.mipmaps,Be&&O&&(ie.length>0&&ye++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,xe,ce[0].width,ce[0].height));for(let Y=0;Y<6;Y++)if(Le){Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ce[Y].width,ce[Y].height,Re,be,ce[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,xe,ce[Y].width,ce[Y].height,0,Re,be,ce[Y].data);for(let he=0;he<ie.length;he++){const Xe=ie[he].image[Y].image;Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,0,0,Xe.width,Xe.height,Re,be,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,xe,Xe.width,Xe.height,0,Re,be,Xe.data)}}else{Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Re,be,ce[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,xe,Re,be,ce[Y]);for(let he=0;he<ie.length;he++){const Ie=ie[he];Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,0,0,Re,be,Ie.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,xe,Re,be,Ie.image[Y])}}}w(M,Se)&&A(t.TEXTURE_CUBE_MAP),Q.__version=K.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ce(C,M,k,Z,K,Q){const ne=o.convert(k.format,k.colorSpace),oe=o.convert(k.type),fe=T(k.internalFormat,ne,oe,k.colorSpace);if(!i.get(M).__hasExternalTextures){const Le=Math.max(1,M.width>>Q),ce=Math.max(1,M.height>>Q);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,Q,fe,Le,ce,M.depth,0,ne,oe,null):n.texImage2D(K,Q,fe,Le,ce,0,ne,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),$(M)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,K,i.get(k).__webglTexture,0,j(M)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,K,i.get(k).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function X(C,M,k){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let Z=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(k||$(M)){const K=M.depthTexture;K&&K.isDepthTexture&&(K.type===qi?Z=t.DEPTH_COMPONENT32F:K.type===Yi&&(Z=t.DEPTH_COMPONENT24));const Q=j(M);$(M)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,Z,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,Z,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,Z,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const Z=j(M);k&&$(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,M.width,M.height):$(M)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const Z=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let K=0;K<Z.length;K++){const Q=Z[K],ne=o.convert(Q.format,Q.colorSpace),oe=o.convert(Q.type),fe=T(Q.internalFormat,ne,oe,Q.colorSpace),pe=j(M);k&&$(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,fe,M.width,M.height):$(M)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,fe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,fe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ke(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const Z=i.get(M.depthTexture).__webglTexture,K=j(M);if(M.depthTexture.format===Or)$(M)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(M.depthTexture.format===Zo)$(M)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ve(C){const M=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ke(M.__webglFramebuffer,C)}else if(k){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]=t.createRenderbuffer(),X(M.__webglDepthbuffer[Z],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),X(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(C,M,k){const Z=i.get(C);M!==void 0&&Ce(Z.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&ve(C)}function we(C){const M=C.texture,k=i.get(C),Z=i.get(M);C.addEventListener("dispose",D),C.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,s.memory.textures++);const K=C.isWebGLCubeRenderTarget===!0,Q=C.isWebGLMultipleRenderTargets===!0,ne=S(C)||a;if(K){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let fe=0;fe<M.mipmaps.length;fe++)k.__webglFramebuffer[oe][fe]=t.createFramebuffer()}else k.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<M.mipmaps.length;oe++)k.__webglFramebuffer[oe]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(Q)if(r.drawBuffers){const oe=C.texture;for(let fe=0,pe=oe.length;fe<pe;fe++){const Le=i.get(oe[fe]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&$(C)===!1){const oe=Q?M:[M];k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<oe.length;fe++){const pe=oe[fe];k.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const Le=o.convert(pe.format,pe.colorSpace),ce=o.convert(pe.type),Pe=T(pe.internalFormat,Le,ce,pe.colorSpace,C.isXRRenderTarget===!0),Se=j(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,Pe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),X(k.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,M,ne);for(let oe=0;oe<6;oe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)Ce(k.__webglFramebuffer[oe][fe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else Ce(k.__webglFramebuffer[oe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);w(M,ne)&&A(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Q){const oe=C.texture;for(let fe=0,pe=oe.length;fe<pe;fe++){const Le=oe[fe],ce=i.get(Le);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),Ne(t.TEXTURE_2D,Le,ne),Ce(k.__webglFramebuffer,C,Le,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),w(Le,ne)&&A(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?oe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(oe,Z.__webglTexture),Ne(oe,M,ne),a&&M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)Ce(k.__webglFramebuffer[fe],C,M,t.COLOR_ATTACHMENT0,oe,fe);else Ce(k.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,oe,0);w(M,ne)&&A(oe),n.unbindTexture()}C.depthBuffer&&ve(C)}function Ze(C){const M=S(C)||a,k=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Z=0,K=k.length;Z<K;Z++){const Q=k[Z];if(w(Q,M)){const ne=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,oe=i.get(Q).__webglTexture;n.bindTexture(ne,oe),A(ne),n.unbindTexture()}}}function Fe(C){if(a&&C.samples>0&&$(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],k=C.width,Z=C.height;let K=t.COLOR_BUFFER_BIT;const Q=[],ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(C),fe=C.isWebGLMultipleRenderTargets===!0;if(fe)for(let pe=0;pe<M.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){Q.push(t.COLOR_ATTACHMENT0+pe),C.depthBuffer&&Q.push(ne);const Le=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Le===!1&&(C.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),fe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[pe]),Le===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ne]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ne])),fe){const ce=i.get(M[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,k,Z,0,0,k,Z,K,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Q)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let pe=0;pe<M.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,oe.__webglColorRenderbuffer[pe]);const Le=i.get(M[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function j(C){return Math.min(f,C.samples)}function $(C){const M=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Me(C){const M=s.render.frame;x.get(C)!==M&&(x.set(C,M),C.update())}function de(C,M){const k=C.colorSpace,Z=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Pd||k!==Li&&k!==Dn&&(it.getTransfer(k)===at?a===!1?e.has("EXT_sRGB")===!0&&Z===jn?(C.format=Pd,C.minFilter=vn,C.generateMipmaps=!1):M=Zx.sRGBToLinear(M):(Z!==jn||K!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}this.allocateTextureUnit=I,this.resetTextureUnits=W,this.setTexture2D=V,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=le,this.rebindTextures=Ae,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=$}function k2(t,e,n){const i=n.isWebGL2;function r(o,s=Dn){let a;const l=it.getTransfer(s);if(o===or)return t.UNSIGNED_BYTE;if(o===Gx)return t.UNSIGNED_SHORT_4_4_4_4;if(o===Wx)return t.UNSIGNED_SHORT_5_5_5_1;if(o===MM)return t.BYTE;if(o===EM)return t.SHORT;if(o===Wh)return t.UNSIGNED_SHORT;if(o===Hx)return t.INT;if(o===Yi)return t.UNSIGNED_INT;if(o===qi)return t.FLOAT;if(o===fr)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===wM)return t.ALPHA;if(o===jn)return t.RGBA;if(o===TM)return t.LUMINANCE;if(o===AM)return t.LUMINANCE_ALPHA;if(o===Or)return t.DEPTH_COMPONENT;if(o===Zo)return t.DEPTH_STENCIL;if(o===Pd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===bM)return t.RED;if(o===Xx)return t.RED_INTEGER;if(o===CM)return t.RG;if(o===jx)return t.RG_INTEGER;if(o===Yx)return t.RGBA_INTEGER;if(o===Gu||o===Wu||o===Xu||o===ju)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Gu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Wu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Xu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===ju)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Gu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Wu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Xu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===ju)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Lm||o===Pm||o===Dm||o===Nm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Lm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Pm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Dm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Nm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===RM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Im||o===Um)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Im)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Um)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Om||o===Fm||o===zm||o===km||o===Bm||o===Vm||o===Hm||o===Gm||o===Wm||o===Xm||o===jm||o===Ym||o===qm||o===Km)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Om)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Fm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===zm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===km)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Bm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Vm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Hm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Gm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Wm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Xm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===jm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Ym)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===qm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Km)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Yu||o===Zm||o===Qm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Yu)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Zm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Qm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===LM||o===Jm||o===$m||o===eg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Yu)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Jm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===$m)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===eg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Ur?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class B2 extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dl extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const V2={type:"move"};class xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&u>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new dl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class H2 extends Zt{constructor(e,n,i,r,o,s,a,l,c,d){if(d=d!==void 0?d:Or,d!==Or&&d!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Or&&(i=Yi),i===void 0&&d===Zo&&(i=Ur),super(null,r,o,s,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class G2 extends rs{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,d=null,f=null,u=null,p=null,x=null;const _=n.getContextAttributes();let m=null,h=null;const v=[],g=[],S=new nn;S.layers.enable(1),S.viewport=new Pt;const b=new nn;b.layers.enable(2),b.viewport=new Pt;const w=[S,b],A=new B2;A.layers.enable(1),A.layers.enable(2);let T=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let G=v[N];return G===void 0&&(G=new xf,v[N]=G),G.getTargetRaySpace()},this.getControllerGrip=function(N){let G=v[N];return G===void 0&&(G=new xf,v[N]=G),G.getGripSpace()},this.getHand=function(N){let G=v[N];return G===void 0&&(G=new xf,v[N]=G),G.getHandSpace()};function E(N){const G=g.indexOf(N.inputSource);if(G===-1)return;const le=v[G];le!==void 0&&(le.update(N.inputSource,N.frame,c||s),le.dispatchEvent({type:N.type,data:N.inputSource}))}function R(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",D);for(let N=0;N<v.length;N++){const G=g[N];G!==null&&(g[N]=null,v[N].disconnect(G))}T=null,y=null,e.setRenderTarget(m),p=null,u=null,f=null,r=null,h=null,V.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",R),r.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,G),r.updateRenderState({baseLayer:p}),h=new ai(p.framebufferWidth,p.framebufferHeight,{format:jn,type:or,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let G=null,le=null,ue=null;_.depth&&(ue=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,G=_.stencil?Zo:Or,le=_.stencil?Ur:Yi);const se={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:o};f=new XRWebGLBinding(r,n),u=f.createProjectionLayer(se),r.updateRenderState({layers:[u]}),h=new ai(u.textureWidth,u.textureHeight,{format:jn,type:or,depthTexture:new H2(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ge=e.properties.get(h);ge.__ignoreDepthValues=u.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(N){for(let G=0;G<N.removed.length;G++){const le=N.removed[G],ue=g.indexOf(le);ue>=0&&(g[ue]=null,v[ue].disconnect(le))}for(let G=0;G<N.added.length;G++){const le=N.added[G];let ue=g.indexOf(le);if(ue===-1){for(let ge=0;ge<v.length;ge++)if(ge>=g.length){g.push(le),ue=ge;break}else if(g[ge]===null){g[ge]=le,ue=ge;break}if(ue===-1)break}const se=v[ue];se&&se.connect(le)}}const U=new H,P=new H;function z(N,G,le){U.setFromMatrixPosition(G.matrixWorld),P.setFromMatrixPosition(le.matrixWorld);const ue=U.distanceTo(P),se=G.projectionMatrix.elements,ge=le.projectionMatrix.elements,Ne=se[14]/(se[10]-1),_e=se[14]/(se[10]+1),Ee=(se[9]+1)/se[5],Oe=(se[9]-1)/se[5],Ce=(se[8]-1)/se[0],X=(ge[8]+1)/ge[0],ke=Ne*Ce,ve=Ne*X,Ae=ue/(-Ce+X),we=Ae*-Ce;G.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(we),N.translateZ(Ae),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Ze=Ne+Ae,Fe=_e+Ae,j=ke-we,$=ve+(ue-we),Me=Ee*_e/Fe*Ze,de=Oe*_e/Fe*Ze;N.projectionMatrix.makePerspective(j,$,Me,de,Ze,Fe),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function B(N,G){G===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(G.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;A.near=b.near=S.near=N.near,A.far=b.far=S.far=N.far,(T!==A.near||y!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),T=A.near,y=A.far);const G=N.parent,le=A.cameras;B(A,G);for(let ue=0;ue<le.length;ue++)B(le[ue],G);le.length===2?z(A,S,b):A.projectionMatrix.copy(S.projectionMatrix),W(N,A,G)};function W(N,G,le){le===null?N.matrix.copy(G.matrixWorld):(N.matrix.copy(le.matrixWorld),N.matrix.invert(),N.matrix.multiply(G.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(G.projectionMatrix),N.projectionMatrixInverse.copy(G.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Dd*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(N){l=N,u!==null&&(u.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)};let I=null;function F(N,G){if(d=G.getViewerPose(c||s),x=G,d!==null){const le=d.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let ue=!1;le.length!==A.cameras.length&&(A.cameras.length=0,ue=!0);for(let se=0;se<le.length;se++){const ge=le[se];let Ne=null;if(p!==null)Ne=p.getViewport(ge);else{const Ee=f.getViewSubImage(u,ge);Ne=Ee.viewport,se===0&&(e.setRenderTargetTextures(h,Ee.colorTexture,u.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(h))}let _e=w[se];_e===void 0&&(_e=new nn,_e.layers.enable(se),_e.viewport=new Pt,w[se]=_e),_e.matrix.fromArray(ge.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ge.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),se===0&&(A.matrix.copy(_e.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ue===!0&&A.cameras.push(_e)}}for(let le=0;le<v.length;le++){const ue=g[le],se=v[le];ue!==null&&se!==void 0&&se.update(ue,G,c||s)}I&&I(N,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),x=null}const V=new o_;V.setAnimationLoop(F),this.setAnimationLoop=function(N){I=N},this.dispose=function(){}}}function W2(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,n_(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,g,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(m,h):h.isMeshToonMaterial?(o(m,h),f(m,h)):h.isMeshPhongMaterial?(o(m,h),d(m,h)):h.isMeshStandardMaterial?(o(m,h),u(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(o(m,h),x(m,h)):h.isMeshDepthMaterial?o(m,h):h.isMeshDistanceMaterial?(o(m,h),_(m,h)):h.isMeshNormalMaterial?o(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,g):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===cn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===cn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*g,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=g*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===cn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function X2(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function c(v,g){let S=r[v.id];S===void 0&&(x(v),S=d(v),r[v.id]=S,v.addEventListener("dispose",m));const b=g.program;i.updateUBOMapping(v,b);const w=e.render.frame;o[v.id]!==w&&(u(v),o[v.id]=w)}function d(v){const g=f();v.__bindingPointIndex=g;const S=t.createBuffer(),b=v.__size,w=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function f(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const g=r[v.id],S=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let w=0,A=S.length;w<A;w++){const T=S[w];if(p(T,w,b)===!0){const y=T.__offset,E=Array.isArray(T.value)?T.value:[T.value];let R=0;for(let D=0;D<E.length;D++){const U=E[D],P=_(U);typeof U=="number"?(T.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,y+R,T.__data)):U.isMatrix3?(T.__data[0]=U.elements[0],T.__data[1]=U.elements[1],T.__data[2]=U.elements[2],T.__data[3]=U.elements[0],T.__data[4]=U.elements[3],T.__data[5]=U.elements[4],T.__data[6]=U.elements[5],T.__data[7]=U.elements[0],T.__data[8]=U.elements[6],T.__data[9]=U.elements[7],T.__data[10]=U.elements[8],T.__data[11]=U.elements[0]):(U.toArray(T.__data,R),R+=P.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,y,T.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,S){const b=v.value;if(S[g]===void 0){if(typeof b=="number")S[g]=b;else{const w=Array.isArray(b)?b:[b],A=[];for(let T=0;T<w.length;T++)A.push(w[T].clone());S[g]=A}return!0}else if(typeof b=="number"){if(S[g]!==b)return S[g]=b,!0}else{const w=Array.isArray(S[g])?S[g]:[S[g]],A=Array.isArray(b)?b:[b];for(let T=0;T<w.length;T++){const y=w[T];if(y.equals(A[T])===!1)return y.copy(A[T]),!0}}return!1}function x(v){const g=v.uniforms;let S=0;const b=16;let w=0;for(let A=0,T=g.length;A<T;A++){const y=g[A],E={boundary:0,storage:0},R=Array.isArray(y.value)?y.value:[y.value];for(let D=0,U=R.length;D<U;D++){const P=R[D],z=_(P);E.boundary+=z.boundary,E.storage+=z.storage}if(y.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=S,A>0){w=S%b;const D=b-w;w!==0&&D-E.boundary<0&&(S+=b-w,y.__offset=S)}S+=E.storage}return w=S%b,w>0&&(S+=b-w),v.__size=S,v.__cache={},this}function _(v){const g={boundary:0,storage:0};return typeof v=="number"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const S=s.indexOf(g.__bindingPointIndex);s.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete o[g.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:c,dispose:h}}class iu{constructor(e={}){const{canvas:n=WM(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=s;const p=new Uint32Array(4),x=new Int32Array(4);let _=null,m=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=rr,this.toneMappingExposure=1;const g=this;let S=!1,b=0,w=0,A=null,T=-1,y=null;const E=new Pt,R=new Pt;let D=null;const U=new Je(0);let P=0,z=n.width,B=n.height,W=1,I=null,F=null;const V=new Pt(0,0,z,B),N=new Pt(0,0,z,B);let G=!1;const le=new qh;let ue=!1,se=!1,ge=null;const Ne=new yt,_e=new qe,Ee=new H,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return A===null?W:1}let X=i;function ke(L,q){for(let ee=0;ee<L.length;ee++){const te=L[ee],re=n.getContext(te,q);if(re!==null)return re}return null}try{const L={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gh}`),n.addEventListener("webglcontextlost",Be,!1),n.addEventListener("webglcontextrestored",O,!1),n.addEventListener("webglcontextcreationerror",ye,!1),X===null){const q=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&q.shift(),X=ke(q,L),X===null)throw ke(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ve,Ae,we,Ze,Fe,j,$,Me,de,C,M,k,Z,K,Q,ne,oe,fe,pe,Le,ce,Pe,Se,Re;function be(){ve=new tA(X),Ae=new KT(X,ve,e),ve.init(Ae),Pe=new k2(X,ve,Ae),we=new F2(X,ve,Ae),Ze=new rA(X),Fe=new E2,j=new z2(X,ve,we,Fe,Ae,Pe,Ze),$=new QT(g),Me=new eA(g),de=new pE(X,Ae),Se=new YT(X,ve,de,Ae),C=new nA(X,de,Ze,Se),M=new lA(X,C,de,Ze),pe=new aA(X,Ae,j),ne=new ZT(Fe),k=new M2(g,$,Me,ve,Ae,Se,ne),Z=new W2(g,Fe),K=new T2,Q=new P2(ve,Ae),fe=new jT(g,$,Me,we,M,u,l),oe=new O2(g,M,Ae),Re=new X2(X,Ze,Ae,we),Le=new qT(X,ve,Ze,Ae),ce=new iA(X,ve,Ze,Ae),Ze.programs=k.programs,g.capabilities=Ae,g.extensions=ve,g.properties=Fe,g.renderLists=K,g.shadowMap=oe,g.state=we,g.info=Ze}be();const xe=new G2(g,X);this.xr=xe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const L=ve.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ve.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(L){L!==void 0&&(W=L,this.setSize(z,B,!1))},this.getSize=function(L){return L.set(z,B)},this.setSize=function(L,q,ee=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=L,B=q,n.width=Math.floor(L*W),n.height=Math.floor(q*W),ee===!0&&(n.style.width=L+"px",n.style.height=q+"px"),this.setViewport(0,0,L,q)},this.getDrawingBufferSize=function(L){return L.set(z*W,B*W).floor()},this.setDrawingBufferSize=function(L,q,ee){z=L,B=q,W=ee,n.width=Math.floor(L*ee),n.height=Math.floor(q*ee),this.setViewport(0,0,L,q)},this.getCurrentViewport=function(L){return L.copy(E)},this.getViewport=function(L){return L.copy(V)},this.setViewport=function(L,q,ee,te){L.isVector4?V.set(L.x,L.y,L.z,L.w):V.set(L,q,ee,te),we.viewport(E.copy(V).multiplyScalar(W).floor())},this.getScissor=function(L){return L.copy(N)},this.setScissor=function(L,q,ee,te){L.isVector4?N.set(L.x,L.y,L.z,L.w):N.set(L,q,ee,te),we.scissor(R.copy(N).multiplyScalar(W).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(L){we.setScissorTest(G=L)},this.setOpaqueSort=function(L){I=L},this.setTransparentSort=function(L){F=L},this.getClearColor=function(L){return L.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(L=!0,q=!0,ee=!0){let te=0;if(L){let re=!1;if(A!==null){const De=A.texture.format;re=De===Yx||De===jx||De===Xx}if(re){const De=A.texture.type,ze=De===or||De===Yi||De===Wh||De===Ur||De===Gx||De===Wx,Ve=fe.getClearColor(),He=fe.getClearAlpha(),Ye=Ve.r,Ge=Ve.g,We=Ve.b;ze?(p[0]=Ye,p[1]=Ge,p[2]=We,p[3]=He,X.clearBufferuiv(X.COLOR,0,p)):(x[0]=Ye,x[1]=Ge,x[2]=We,x[3]=He,X.clearBufferiv(X.COLOR,0,x))}else te|=X.COLOR_BUFFER_BIT}q&&(te|=X.DEPTH_BUFFER_BIT),ee&&(te|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Be,!1),n.removeEventListener("webglcontextrestored",O,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),K.dispose(),Q.dispose(),Fe.dispose(),$.dispose(),Me.dispose(),M.dispose(),Se.dispose(),Re.dispose(),k.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Nt),xe.removeEventListener("sessionend",je),ge&&(ge.dispose(),ge=null),At.stop()};function Be(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const L=Ze.autoReset,q=oe.enabled,ee=oe.autoUpdate,te=oe.needsUpdate,re=oe.type;be(),Ze.autoReset=L,oe.enabled=q,oe.autoUpdate=ee,oe.needsUpdate=te,oe.type=re}function ye(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ie(L){const q=L.target;q.removeEventListener("dispose",ie),Y(q)}function Y(L){he(L),Fe.remove(L)}function he(L){const q=Fe.get(L).programs;q!==void 0&&(q.forEach(function(ee){k.releaseProgram(ee)}),L.isShaderMaterial&&k.releaseShaderCache(L))}this.renderBufferDirect=function(L,q,ee,te,re,De){q===null&&(q=Oe);const ze=re.isMesh&&re.matrixWorld.determinant()<0,Ve=cs(L,q,ee,te,re);we.setMaterial(te,ze);let He=ee.index,Ye=1;if(te.wireframe===!0){if(He=C.getWireframeAttribute(ee),He===void 0)return;Ye=2}const Ge=ee.drawRange,We=ee.attributes.position;let ut=Ge.start*Ye,dn=(Ge.start+Ge.count)*Ye;De!==null&&(ut=Math.max(ut,De.start*Ye),dn=Math.min(dn,(De.start+De.count)*Ye)),He!==null?(ut=Math.max(ut,0),dn=Math.min(dn,He.count)):We!=null&&(ut=Math.max(ut,0),dn=Math.min(dn,We.count));const bt=dn-ut;if(bt<0||bt===1/0)return;Se.setup(re,te,Ve,ee,He);let ci,pt=Le;if(He!==null&&(ci=de.get(He),pt=ce,pt.setIndex(ci)),re.isMesh)te.wireframe===!0?(we.setLineWidth(te.wireframeLinewidth*Ce()),pt.setMode(X.LINES)):pt.setMode(X.TRIANGLES);else if(re.isLine){let et=te.linewidth;et===void 0&&(et=1),we.setLineWidth(et*Ce()),re.isLineSegments?pt.setMode(X.LINES):re.isLineLoop?pt.setMode(X.LINE_LOOP):pt.setMode(X.LINE_STRIP)}else re.isPoints?pt.setMode(X.POINTS):re.isSprite&&pt.setMode(X.TRIANGLES);if(re.isInstancedMesh)pt.renderInstances(ut,bt,re.count);else if(ee.isInstancedBufferGeometry){const et=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,du=Math.min(ee.instanceCount,et);pt.renderInstances(ut,bt,du)}else pt.render(ut,bt)};function Ie(L,q,ee){L.transparent===!0&&L.side===yi&&L.forceSinglePass===!1?(L.side=cn,L.needsUpdate=!0,mr(L,q,ee),L.side=ur,L.needsUpdate=!0,mr(L,q,ee),L.side=yi):mr(L,q,ee)}this.compile=function(L,q,ee=null){ee===null&&(ee=L),m=Q.get(ee),m.init(),v.push(m),ee.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(m.pushLight(re),re.castShadow&&m.pushShadow(re))}),L!==ee&&L.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(m.pushLight(re),re.castShadow&&m.pushShadow(re))}),m.setupLights(g._useLegacyLights);const te=new Set;return L.traverse(function(re){const De=re.material;if(De)if(Array.isArray(De))for(let ze=0;ze<De.length;ze++){const Ve=De[ze];Ie(Ve,ee,re),te.add(Ve)}else Ie(De,ee,re),te.add(De)}),v.pop(),m=null,te},this.compileAsync=function(L,q,ee=null){const te=this.compile(L,q,ee);return new Promise(re=>{function De(){if(te.forEach(function(ze){Fe.get(ze).currentProgram.isReady()&&te.delete(ze)}),te.size===0){re(L);return}setTimeout(De,10)}ve.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Xe=null;function rt(L){Xe&&Xe(L)}function Nt(){At.stop()}function je(){At.start()}const At=new o_;At.setAnimationLoop(rt),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(L){Xe=L,xe.setAnimationLoop(L),L===null?At.stop():At.start()},xe.addEventListener("sessionstart",Nt),xe.addEventListener("sessionend",je),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(q),q=xe.getCamera()),L.isScene===!0&&L.onBeforeRender(g,L,q,A),m=Q.get(L,v.length),m.init(),v.push(m),Ne.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),le.setFromProjectionMatrix(Ne),se=this.localClippingEnabled,ue=ne.init(this.clippingPlanes,se),_=K.get(L,h.length),_.init(),h.push(_),fn(L,q,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(I,F),this.info.render.frame++,ue===!0&&ne.beginShadows();const ee=m.state.shadowsArray;if(oe.render(ee,L,q),ue===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),fe.render(_,L),m.setupLights(g._useLegacyLights),q.isArrayCamera){const te=q.cameras;for(let re=0,De=te.length;re<De;re++){const ze=te[re];ss(_,L,ze,ze.viewport)}}else ss(_,L,q);A!==null&&(j.updateMultisampleRenderTarget(A),j.updateRenderTargetMipmap(A)),L.isScene===!0&&L.onAfterRender(g,L,q),Se.resetDefaultState(),T=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function fn(L,q,ee,te){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)ee=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||le.intersectsSprite(L)){te&&Ee.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ne);const ze=M.update(L),Ve=L.material;Ve.visible&&_.push(L,ze,Ve,ee,Ee.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||le.intersectsObject(L))){const ze=M.update(L),Ve=L.material;if(te&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ee.copy(L.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Ee.copy(ze.boundingSphere.center)),Ee.applyMatrix4(L.matrixWorld).applyMatrix4(Ne)),Array.isArray(Ve)){const He=ze.groups;for(let Ye=0,Ge=He.length;Ye<Ge;Ye++){const We=He[Ye],ut=Ve[We.materialIndex];ut&&ut.visible&&_.push(L,ze,ut,ee,Ee.z,We)}}else Ve.visible&&_.push(L,ze,Ve,ee,Ee.z,null)}}const De=L.children;for(let ze=0,Ve=De.length;ze<Ve;ze++)fn(De[ze],q,ee,te)}function ss(L,q,ee,te){const re=L.opaque,De=L.transmissive,ze=L.transparent;m.setupLightsView(ee),ue===!0&&ne.setGlobalState(g.clippingPlanes,ee),De.length>0&&as(re,De,q,ee),te&&we.viewport(E.copy(te)),re.length>0&&qr(re,q,ee),De.length>0&&qr(De,q,ee),ze.length>0&&qr(ze,q,ee),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function as(L,q,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const De=Ae.isWebGL2;ge===null&&(ge=new ai(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?fr:or,minFilter:fa,samples:De?4:0})),g.getDrawingBufferSize(_e),De?ge.setSize(_e.x,_e.y):ge.setSize(Nd(_e.x),Nd(_e.y));const ze=g.getRenderTarget();g.setRenderTarget(ge),g.getClearColor(U),P=g.getClearAlpha(),P<1&&g.setClearColor(16777215,.5),g.clear();const Ve=g.toneMapping;g.toneMapping=rr,qr(L,ee,te),j.updateMultisampleRenderTarget(ge),j.updateRenderTargetMipmap(ge);let He=!1;for(let Ye=0,Ge=q.length;Ye<Ge;Ye++){const We=q[Ye],ut=We.object,dn=We.geometry,bt=We.material,ci=We.group;if(bt.side===yi&&ut.layers.test(te.layers)){const pt=bt.side;bt.side=cn,bt.needsUpdate=!0,ls(ut,ee,te,dn,bt,ci),bt.side=pt,bt.needsUpdate=!0,He=!0}}He===!0&&(j.updateMultisampleRenderTarget(ge),j.updateRenderTargetMipmap(ge)),g.setRenderTarget(ze),g.setClearColor(U,P),g.toneMapping=Ve}function qr(L,q,ee){const te=q.isScene===!0?q.overrideMaterial:null;for(let re=0,De=L.length;re<De;re++){const ze=L[re],Ve=ze.object,He=ze.geometry,Ye=te===null?ze.material:te,Ge=ze.group;Ve.layers.test(ee.layers)&&ls(Ve,q,ee,He,Ye,Ge)}}function ls(L,q,ee,te,re,De){L.onBeforeRender(g,q,ee,te,re,De),L.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),re.onBeforeRender(g,q,ee,te,L,De),re.transparent===!0&&re.side===yi&&re.forceSinglePass===!1?(re.side=cn,re.needsUpdate=!0,g.renderBufferDirect(ee,q,te,re,L,De),re.side=ur,re.needsUpdate=!0,g.renderBufferDirect(ee,q,te,re,L,De),re.side=yi):g.renderBufferDirect(ee,q,te,re,L,De),L.onAfterRender(g,q,ee,te,re,De)}function mr(L,q,ee){q.isScene!==!0&&(q=Oe);const te=Fe.get(L),re=m.state.lights,De=m.state.shadowsArray,ze=re.state.version,Ve=k.getParameters(L,re.state,De,q,ee),He=k.getProgramCacheKey(Ve);let Ye=te.programs;te.environment=L.isMeshStandardMaterial?q.environment:null,te.fog=q.fog,te.envMap=(L.isMeshStandardMaterial?Me:$).get(L.envMap||te.environment),Ye===void 0&&(L.addEventListener("dispose",ie),Ye=new Map,te.programs=Ye);let Ge=Ye.get(He);if(Ge!==void 0){if(te.currentProgram===Ge&&te.lightsStateVersion===ze)return Aa(L,Ve),Ge}else Ve.uniforms=k.getUniforms(L),L.onBuild(ee,Ve,g),L.onBeforeCompile(Ve,g),Ge=k.acquireProgram(Ve,He),Ye.set(He,Ge),te.uniforms=Ve.uniforms;const We=te.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(We.clippingPlanes=ne.uniform),Aa(L,Ve),te.needsLights=Kr(L),te.lightsStateVersion=ze,te.needsLights&&(We.ambientLightColor.value=re.state.ambient,We.lightProbe.value=re.state.probe,We.directionalLights.value=re.state.directional,We.directionalLightShadows.value=re.state.directionalShadow,We.spotLights.value=re.state.spot,We.spotLightShadows.value=re.state.spotShadow,We.rectAreaLights.value=re.state.rectArea,We.ltc_1.value=re.state.rectAreaLTC1,We.ltc_2.value=re.state.rectAreaLTC2,We.pointLights.value=re.state.point,We.pointLightShadows.value=re.state.pointShadow,We.hemisphereLights.value=re.state.hemi,We.directionalShadowMap.value=re.state.directionalShadowMap,We.directionalShadowMatrix.value=re.state.directionalShadowMatrix,We.spotShadowMap.value=re.state.spotShadowMap,We.spotLightMatrix.value=re.state.spotLightMatrix,We.spotLightMap.value=re.state.spotLightMap,We.pointShadowMap.value=re.state.pointShadowMap,We.pointShadowMatrix.value=re.state.pointShadowMatrix),te.currentProgram=Ge,te.uniformsList=null,Ge}function gr(L){if(L.uniformsList===null){const q=L.currentProgram.getUniforms();L.uniformsList=kl.seqWithValue(q.seq,L.uniforms)}return L.uniformsList}function Aa(L,q){const ee=Fe.get(L);ee.outputColorSpace=q.outputColorSpace,ee.instancing=q.instancing,ee.instancingColor=q.instancingColor,ee.skinning=q.skinning,ee.morphTargets=q.morphTargets,ee.morphNormals=q.morphNormals,ee.morphColors=q.morphColors,ee.morphTargetsCount=q.morphTargetsCount,ee.numClippingPlanes=q.numClippingPlanes,ee.numIntersection=q.numClipIntersection,ee.vertexAlphas=q.vertexAlphas,ee.vertexTangents=q.vertexTangents,ee.toneMapping=q.toneMapping}function cs(L,q,ee,te,re){q.isScene!==!0&&(q=Oe),j.resetTextureUnits();const De=q.fog,ze=te.isMeshStandardMaterial?q.environment:null,Ve=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Li,He=(te.isMeshStandardMaterial?Me:$).get(te.envMap||ze),Ye=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ge=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!ee.morphAttributes.position,ut=!!ee.morphAttributes.normal,dn=!!ee.morphAttributes.color;let bt=rr;te.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(bt=g.toneMapping);const ci=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,pt=ci!==void 0?ci.length:0,et=Fe.get(te),du=m.state.lights;if(ue===!0&&(se===!0||L!==y)){const hn=L===y&&te.id===T;ne.setState(te,L,hn)}let vt=!1;te.version===et.__version?(et.needsLights&&et.lightsStateVersion!==du.state.version||et.outputColorSpace!==Ve||re.isInstancedMesh&&et.instancing===!1||!re.isInstancedMesh&&et.instancing===!0||re.isSkinnedMesh&&et.skinning===!1||!re.isSkinnedMesh&&et.skinning===!0||re.isInstancedMesh&&et.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&et.instancingColor===!1&&re.instanceColor!==null||et.envMap!==He||te.fog===!0&&et.fog!==De||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ne.numPlanes||et.numIntersection!==ne.numIntersection)||et.vertexAlphas!==Ye||et.vertexTangents!==Ge||et.morphTargets!==We||et.morphNormals!==ut||et.morphColors!==dn||et.toneMapping!==bt||Ae.isWebGL2===!0&&et.morphTargetsCount!==pt)&&(vt=!0):(vt=!0,et.__version=te.version);let vr=et.currentProgram;vt===!0&&(vr=mr(te,q,re));let hp=!1,us=!1,hu=!1;const jt=vr.getUniforms(),xr=et.uniforms;if(we.useProgram(vr.program)&&(hp=!0,us=!0,hu=!0),te.id!==T&&(T=te.id,us=!0),hp||y!==L){jt.setValue(X,"projectionMatrix",L.projectionMatrix),jt.setValue(X,"viewMatrix",L.matrixWorldInverse);const hn=jt.map.cameraPosition;hn!==void 0&&hn.setValue(X,Ee.setFromMatrixPosition(L.matrixWorld)),Ae.logarithmicDepthBuffer&&jt.setValue(X,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&jt.setValue(X,"isOrthographic",L.isOrthographicCamera===!0),y!==L&&(y=L,us=!0,hu=!0)}if(re.isSkinnedMesh){jt.setOptional(X,re,"bindMatrix"),jt.setOptional(X,re,"bindMatrixInverse");const hn=re.skeleton;hn&&(Ae.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),jt.setValue(X,"boneTexture",hn.boneTexture,j),jt.setValue(X,"boneTextureSize",hn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const pu=ee.morphAttributes;if((pu.position!==void 0||pu.normal!==void 0||pu.color!==void 0&&Ae.isWebGL2===!0)&&pe.update(re,ee,vr),(us||et.receiveShadow!==re.receiveShadow)&&(et.receiveShadow=re.receiveShadow,jt.setValue(X,"receiveShadow",re.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(xr.envMap.value=He,xr.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),us&&(jt.setValue(X,"toneMappingExposure",g.toneMappingExposure),et.needsLights&&$n(xr,hu),De&&te.fog===!0&&Z.refreshFogUniforms(xr,De),Z.refreshMaterialUniforms(xr,te,W,B,ge),kl.upload(X,gr(et),xr,j)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(kl.upload(X,gr(et),xr,j),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&jt.setValue(X,"center",re.center),jt.setValue(X,"modelViewMatrix",re.modelViewMatrix),jt.setValue(X,"normalMatrix",re.normalMatrix),jt.setValue(X,"modelMatrix",re.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const hn=te.uniformsGroups;for(let mu=0,sy=hn.length;mu<sy;mu++)if(Ae.isWebGL2){const pp=hn[mu];Re.update(pp,vr),Re.bind(pp,vr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vr}function $n(L,q){L.ambientLightColor.needsUpdate=q,L.lightProbe.needsUpdate=q,L.directionalLights.needsUpdate=q,L.directionalLightShadows.needsUpdate=q,L.pointLights.needsUpdate=q,L.pointLightShadows.needsUpdate=q,L.spotLights.needsUpdate=q,L.spotLightShadows.needsUpdate=q,L.rectAreaLights.needsUpdate=q,L.hemisphereLights.needsUpdate=q}function Kr(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(L,q,ee){Fe.get(L.texture).__webglTexture=q,Fe.get(L.depthTexture).__webglTexture=ee;const te=Fe.get(L);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,q){const ee=Fe.get(L);ee.__webglFramebuffer=q,ee.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(L,q=0,ee=0){A=L,b=q,w=ee;let te=!0,re=null,De=!1,ze=!1;if(L){const He=Fe.get(L);He.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(X.FRAMEBUFFER,null),te=!1):He.__webglFramebuffer===void 0?j.setupRenderTarget(L):He.__hasExternalTextures&&j.rebindTextures(L,Fe.get(L.texture).__webglTexture,Fe.get(L.depthTexture).__webglTexture);const Ye=L.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(ze=!0);const Ge=Fe.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ge[q])?re=Ge[q][ee]:re=Ge[q],De=!0):Ae.isWebGL2&&L.samples>0&&j.useMultisampledRTT(L)===!1?re=Fe.get(L).__webglMultisampledFramebuffer:Array.isArray(Ge)?re=Ge[ee]:re=Ge,E.copy(L.viewport),R.copy(L.scissor),D=L.scissorTest}else E.copy(V).multiplyScalar(W).floor(),R.copy(N).multiplyScalar(W).floor(),D=G;if(we.bindFramebuffer(X.FRAMEBUFFER,re)&&Ae.drawBuffers&&te&&we.drawBuffers(L,re),we.viewport(E),we.scissor(R),we.setScissorTest(D),De){const He=Fe.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,He.__webglTexture,ee)}else if(ze){const He=Fe.get(L.texture),Ye=q||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,He.__webglTexture,ee||0,Ye)}T=-1},this.readRenderTargetPixels=function(L,q,ee,te,re,De,ze){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Fe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve){we.bindFramebuffer(X.FRAMEBUFFER,Ve);try{const He=L.texture,Ye=He.format,Ge=He.type;if(Ye!==jn&&Pe.convert(Ye)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ge===fr&&(ve.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ge!==or&&Pe.convert(Ge)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===qi&&(Ae.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=L.width-te&&ee>=0&&ee<=L.height-re&&X.readPixels(q,ee,te,re,Pe.convert(Ye),Pe.convert(Ge),De)}finally{const He=A!==null?Fe.get(A).__webglFramebuffer:null;we.bindFramebuffer(X.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(L,q,ee=0){const te=Math.pow(2,-ee),re=Math.floor(q.image.width*te),De=Math.floor(q.image.height*te);j.setTexture2D(q,0),X.copyTexSubImage2D(X.TEXTURE_2D,ee,0,0,L.x,L.y,re,De),we.unbindTexture()},this.copyTextureToTexture=function(L,q,ee,te=0){const re=q.image.width,De=q.image.height,ze=Pe.convert(ee.format),Ve=Pe.convert(ee.type);j.setTexture2D(ee,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ee.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ee.unpackAlignment),q.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,te,L.x,L.y,re,De,ze,Ve,q.image.data):q.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,te,L.x,L.y,q.mipmaps[0].width,q.mipmaps[0].height,ze,q.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,te,L.x,L.y,ze,Ve,q.image),te===0&&ee.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(L,q,ee,te,re=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=L.max.x-L.min.x+1,ze=L.max.y-L.min.y+1,Ve=L.max.z-L.min.z+1,He=Pe.convert(te.format),Ye=Pe.convert(te.type);let Ge;if(te.isData3DTexture)j.setTexture3D(te,0),Ge=X.TEXTURE_3D;else if(te.isDataArrayTexture)j.setTexture2DArray(te,0),Ge=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,te.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,te.unpackAlignment);const We=X.getParameter(X.UNPACK_ROW_LENGTH),ut=X.getParameter(X.UNPACK_IMAGE_HEIGHT),dn=X.getParameter(X.UNPACK_SKIP_PIXELS),bt=X.getParameter(X.UNPACK_SKIP_ROWS),ci=X.getParameter(X.UNPACK_SKIP_IMAGES),pt=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,pt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,pt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,L.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,L.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,L.min.z),ee.isDataTexture||ee.isData3DTexture?X.texSubImage3D(Ge,re,q.x,q.y,q.z,De,ze,Ve,He,Ye,pt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Ge,re,q.x,q.y,q.z,De,ze,Ve,He,pt.data)):X.texSubImage3D(Ge,re,q.x,q.y,q.z,De,ze,Ve,He,Ye,pt),X.pixelStorei(X.UNPACK_ROW_LENGTH,We),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ut),X.pixelStorei(X.UNPACK_SKIP_PIXELS,dn),X.pixelStorei(X.UNPACK_SKIP_ROWS,bt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ci),re===0&&te.generateMipmaps&&X.generateMipmap(Ge),we.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?j.setTextureCube(L,0):L.isData3DTexture?j.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?j.setTexture2DArray(L,0):j.setTexture2D(L,0),we.unbindTexture()},this.resetState=function(){b=0,w=0,A=null,we.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Xh?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===$c?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?sr:qx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===sr?Mt:Li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class j2 extends iu{}j2.prototype.isWebGL1Renderer=!0;class Jh extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Tc extends Zn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class ru extends Ma{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gg=new H,Wg=new H,Xg=new yt,_f=new jh,hl=new eu;class Y2 extends Ft{constructor(e=new Tn,n=new ru){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)Gg.fromBufferAttribute(n,r-1),Wg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Gg.distanceTo(Wg);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(r),hl.radius+=o,e.ray.intersectsSphere(hl)===!1)return;Xg.copy(r).invert(),_f.copy(e.ray).applyMatrix4(Xg);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new H,d=new H,f=new H,u=new H,p=this.isLineSegments?2:1,x=i.index,m=i.attributes.position;if(x!==null){const h=Math.max(0,s.start),v=Math.min(x.count,s.start+s.count);for(let g=h,S=v-1;g<S;g+=p){const b=x.getX(g),w=x.getX(g+1);if(c.fromBufferAttribute(m,b),d.fromBufferAttribute(m,w),_f.distanceSqToSegment(c,d,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(u);T<e.near||T>e.far||n.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,s.start),v=Math.min(m.count,s.start+s.count);for(let g=h,S=v-1;g<S;g+=p){if(c.fromBufferAttribute(m,g),d.fromBufferAttribute(m,g+1),_f.distanceSqToSegment(c,d,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(u);w<e.near||w>e.far||n.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}const jg=new H,Yg=new H;class $h extends Y2{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)jg.fromBufferAttribute(n,r),Yg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+jg.distanceTo(Yg);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ou extends Tn{constructor(e=1,n=1,i=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),o=Math.floor(o);const d=[],f=[],u=[],p=[];let x=0;const _=[],m=i/2;let h=0;v(),s===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(d),this.setAttribute("position",new zt(f,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(p,2));function v(){const S=new H,b=new H;let w=0;const A=(n-e)/i;for(let T=0;T<=o;T++){const y=[],E=T/o,R=E*(n-e)+e;for(let D=0;D<=r;D++){const U=D/r,P=U*l+a,z=Math.sin(P),B=Math.cos(P);b.x=R*z,b.y=-E*i+m,b.z=R*B,f.push(b.x,b.y,b.z),S.set(z,A,B).normalize(),u.push(S.x,S.y,S.z),p.push(U,1-E),y.push(x++)}_.push(y)}for(let T=0;T<r;T++)for(let y=0;y<o;y++){const E=_[y][T],R=_[y+1][T],D=_[y+1][T+1],U=_[y][T+1];d.push(E,R,U),d.push(R,D,U),w+=6}c.addGroup(h,w,0),h+=w}function g(S){const b=x,w=new qe,A=new H;let T=0;const y=S===!0?e:n,E=S===!0?1:-1;for(let D=1;D<=r;D++)f.push(0,m*E,0),u.push(0,E,0),p.push(.5,.5),x++;const R=x;for(let D=0;D<=r;D++){const P=D/r*l+a,z=Math.cos(P),B=Math.sin(P);A.x=y*B,A.y=m*E,A.z=y*z,f.push(A.x,A.y,A.z),u.push(0,E,0),w.x=z*.5+.5,w.y=B*.5*E+.5,p.push(w.x,w.y),x++}for(let D=0;D<r;D++){const U=b+D,P=R+D;S===!0?d.push(P,P+1,U):d.push(P+1,P,U),T+=3}c.addGroup(h,T,S===!0?1:2),h+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ep extends ou{constructor(e=1,n=1,i=32,r=1,o=!1,s=0,a=Math.PI*2){super(0,e,n,i,r,o,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a}}static fromJSON(e){return new ep(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const pl=new H,ml=new H,yf=new H,gl=new Pn;class u_ extends Tn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),o=Math.cos(zl*n),s=e.getIndex(),a=e.getAttribute("position"),l=s?s.count:a.count,c=[0,0,0],d=["a","b","c"],f=new Array(3),u={},p=[];for(let x=0;x<l;x+=3){s?(c[0]=s.getX(x),c[1]=s.getX(x+1),c[2]=s.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:_,b:m,c:h}=gl;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),gl.getNormal(yf),f[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let v=0;v<3;v++){const g=(v+1)%3,S=f[v],b=f[g],w=gl[d[v]],A=gl[d[g]],T=`${S}_${b}`,y=`${b}_${S}`;y in u&&u[y]?(yf.dot(u[y].normal)<=o&&(p.push(w.x,w.y,w.z),p.push(A.x,A.y,A.z)),u[y]=null):T in u||(u[T]={index0:c[v],index1:c[g],normal:yf.clone()})}}for(const x in u)if(u[x]){const{index0:_,index1:m}=u[x];pl.fromBufferAttribute(a,_),ml.fromBufferAttribute(a,m),p.push(pl.x,pl.y,pl.z),p.push(ml.x,ml.y,ml.z)}this.setAttribute("position",new zt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class f_ extends Ft{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Sf=new yt,qg=new H,Kg=new H;class q2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qh,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;qg.setFromMatrixPosition(e.matrixWorld),n.position.copy(qg),Kg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Kg),n.updateMatrixWorld(),Sf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class K2 extends q2{constructor(){super(new Zh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Z2 extends f_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new K2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tp extends f_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class d_ extends Tn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Q2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Zg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Zg(){return(typeof performance>"u"?Date:performance).now()}class h_{constructor(e,n,i=0,r=1/0){this.ray=new jh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Yh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Ud(e,this,i,n),i.sort(Qg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,o=e.length;r<o;r++)Ud(e[r],this,i,n);return i.sort(Qg),i}}function Qg(t,e){return t.distance-e.distance}function Ud(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let o=0,s=r.length;o<s;o++)Ud(r[o],e,n,!0)}}class J2 extends $h{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Tn;r.setAttribute("position",new zt(n,3)),r.setAttribute("color",new zt(i,3));const o=new ru({vertexColors:!0,toneMapped:!1});super(r,o),this.type="AxesHelper"}setColors(e,n,i){const r=new Je,o=this.geometry.attributes.color.array;return r.set(e),r.toArray(o,0),r.toArray(o,3),r.set(n),r.toArray(o,6),r.toArray(o,9),r.set(i),r.toArray(o,12),r.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);const $2={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ea{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const eb=new Zh(-1,1,1,-1,0,1);class tb extends Tn{constructor(){super(),this.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new zt([0,2,0,0,2,0],2))}}const nb=new tb;class p_{constructor(e){this._mesh=new _n(nb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,eb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class m_ extends Ea{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof un?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=js.clone(e.uniforms),this.material=new un({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new p_(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Jg extends Ea{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class ib extends Ea{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class rb{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new qe);this._width=i.width,this._height=i.height,n=new ai(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fr}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new m_($2),this.copyPass.material.blending=Ti,this.clock=new Q2}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Jg!==void 0&&(s instanceof Jg?i=!0:s instanceof ib&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ob extends Ea{constructor(e,n,i=null,r=null,o=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Je}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let o,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}}const sb={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new qe(1/1024,1/512)}},vertexShader:`

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
	`},vl={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new qe(1/1024,1/512)}},vertexShader:`

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

		}`},xl={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new qe(1/1024,1/512)}},vertexShader:`

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

		}`},Mf={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new qe(1/1024,1/512)}},vertexShader:`

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

		}`};class ab extends Ea{constructor(e,n){super(),this.edgesRT=new ai(e,n,{depthBuffer:!1,type:fr}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new ai(e,n,{depthBuffer:!1,type:fr}),this.weightsRT.texture.name="SMAAPass.weights";const i=this,r=new Image;r.src=this.getAreaTexture(),r.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new Zt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=r,this.areaTexture.minFilter=vn,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const o=new Image;o.src=this.getSearchTexture(),o.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new Zt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=o,this.searchTexture.magFilter=Ut,this.searchTexture.minFilter=Ut,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=js.clone(vl.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/n),this.materialEdges=new un({defines:Object.assign({},vl.defines),uniforms:this.uniformsEdges,vertexShader:vl.vertexShader,fragmentShader:vl.fragmentShader}),this.uniformsWeights=js.clone(xl.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/n),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new un({defines:Object.assign({},xl.defines),uniforms:this.uniformsWeights,vertexShader:xl.vertexShader,fragmentShader:xl.fragmentShader}),this.uniformsBlend=js.clone(Mf.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/n),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new un({uniforms:this.uniformsBlend,vertexShader:Mf.vertexShader,fragmentShader:Mf.fragmentShader}),this.fsQuad=new p_(null)}render(e,n,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,n){this.edgesRT.setSize(e,n),this.weightsRT.setSize(e,n),this.materialEdges.uniforms.resolution.value.set(1/e,1/n),this.materialWeights.uniforms.resolution.value.set(1/e,1/n),this.materialBlend.uniforms.resolution.value.set(1/e,1/n)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const Bi={VISUALIZATION_DATA_DIR:"visualization_data"},Ef=new Map,ar=async t=>{if(t==null)return null;if(Ef.has(t))return Ef.get(t);const e=[{data:`./${Bi.VISUALIZATION_DATA_DIR}/channel_${t}_napari_data.raw`,metadata:`./${Bi.VISUALIZATION_DATA_DIR}/channel_${t}_napari_metadata.json`},{data:`${Bi.VISUALIZATION_DATA_DIR}/channel_${t}_napari_data.raw`,metadata:`${Bi.VISUALIZATION_DATA_DIR}/channel_${t}_napari_metadata.json`},{data:`./${Bi.VISUALIZATION_DATA_DIR}/channel_${t}_data.raw`,metadata:`./${Bi.VISUALIZATION_DATA_DIR}/channel_${t}_metadata.json`},{data:`${Bi.VISUALIZATION_DATA_DIR}/channel_${t}_data.raw`,metadata:`${Bi.VISUALIZATION_DATA_DIR}/channel_${t}_metadata.json`}];for(const n of e)try{const i=await fetch(n.metadata);if(!i.ok)continue;const r=i.headers.get("content-type");if(r&&!r.includes("application/json"))continue;const o=await i.text();if(o.trim().startsWith("<!DOCTYPE")||o.trim().startsWith("<html"))continue;const s=JSON.parse(o),a=await fetch(n.data);if(!a.ok)continue;const l=a.headers.get("content-type");if(l&&l.includes("text/html"))continue;const c=await a.arrayBuffer(),f={data:new Uint8Array(c),metadata:s};return Ef.set(t,f),f}catch{continue}return console.warn(`Failed to load data for channel ${t}`),null},lb={rotation:{x:0,y:Math.PI},distance:.75,panOffset:{x:0,y:0,z:0}},cb=.05,ub=.15,fb=200,_l=5e7,db=1.3,hb=.99,wf=.1;new Je(.9,.9,.95);const pb=.1,mb=.9,mo=(t,e,n)=>Math.min(Math.max(t,e),n),go=t=>{t&&(t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose())},yl=(t,e)=>{const n=e.indexOf(t);n!==-1&&e.splice(n,1)},vo=t=>[t.thresholdMin??"",t.thresholdMax??"",t.color??"",t.opacity??""].join("|"),gb=({channels:t=[],activeRegions:e=[],onSelectionChange:n,initialSelectionBounds:i})=>{const r=ae.useRef(null),o=ae.useRef(null),s=ae.useRef(null),a=ae.useRef(null),l=ae.useRef(null),c=ae.useRef(null),d=ae.useRef(null),f=ae.useRef(null),u=ae.useRef([]),p=ae.useRef(new Map),x=ae.useRef(new Map),_=ae.useRef(new Map),m=ae.useRef({lastSampling:null,lastUpdate:0}),h=ae.useRef({}),v=ae.useRef(!1),g=ae.useRef(null),S=ae.useRef(null),b=ae.useRef(!1),w=ae.useRef(null),A=ae.useRef(!1),T=ae.useRef(i||null),[y,E]=ae.useState(0),[R,D]=ae.useState(!1),[U,P]=ae.useState(!1),[z,B]=ae.useState(null),[W,I]=ae.useState(null),[F,V]=ae.useState(.1),[N,G]=ae.useState(null),[le,ue]=ae.useState(null);ae.useEffect(()=>{v.current=R},[R]),ae.useEffect(()=>{b.current=U},[U]),ae.useEffect(()=>{w.current=W},[W]);const se=ae.useRef({...lb}),ge=ae.useCallback((j=3)=>j>=8?6:j>=5.5?4:j>=3.5?3:j>=2?2:1,[]),Ne=ae.useCallback((j,$,Me)=>{if(!j||!$)return null;const{data:de,metadata:C}=j,{color:M,thresholdMin:k,thresholdMax:Z}=$,[K,Q,ne]=C.shape||[];if(!K||!Q||!ne)return null;const[oe=0,fe=65535]=C.dataRange||[],pe=Math.max(1,fe-oe),Le=Math.round(oe+pe*pb),ce=Math.round(oe+pe*mb);let Pe=k??Le,Se=Z??ce;Pe>Se&&([Pe,Se]=[Se,Pe]),Pe=mo(Pe,oe,fe),Se=mo(Se,oe,fe);const Re=M.replace("#",""),be=parseInt(Re.substring(0,2),16)/255,xe=parseInt(Re.substring(2,4),16)/255,Be=parseInt(Re.substring(4,6),16)/255,O=[],ye=[],ie=.35,Y=Math.max(K,Q,ne),he=ne/Y,Ie=Q/Y,Xe=K/Y/4,rt=K*Q*ne,Nt=rt*.08;let je=1;if(Nt>_l){const $n=Nt/_l;je=Math.max(2,Math.ceil(Math.cbrt(Math.max($n,1)*2))),rt>2e7&&(je=Math.max(je,4))}if(Me!==void 0){const $n=Math.max(1,Math.round(Me));je=Math.max(je,$n)}console.log(`Channel visualization: shape=${C.shape}, sampling=${je}, totalVoxels=${rt}`),console.log(`Channel ${$.channelIndex}: Data range [${oe}, ${fe}], Threshold range [${Pe}, ${Se}]`);const At=2/ne*he*je,fn=2/Q*Ie*je,ss=2/K*Xe*je;let as=0;const qr=Math.max(1,Se-Pe);for(let $n=0;$n<K;$n+=je)for(let Kr=0;Kr<Q;Kr+=je)for(let L=0;L<ne;L+=je){const q=$n*Q*ne+Kr*ne+L,te=de[q]/255*(fe-oe)+oe;if(te>=Pe&&te<=Se){if(as>=_l){console.warn(`Channel ${$.channelIndex}: Reached max points limit (${_l})`);break}as+=1;const re=(L/ne*2-1)*he,De=(Kr/Q*2-1)*Ie,ze=($n/K*2-1)*Xe,Ve=(Math.random()-.5)*At*wf,He=(Math.random()-.5)*fn*wf,Ye=(Math.random()-.5)*ss*wf;O.push(re+Ve,De+He,ze+Ye);const Ge=(te-Pe)/qr,We=mo(Ge,0,1),ut=ie+(1-ie)*We*db;ye.push(mo(ut,ie,1))}}console.log(`Channel ${$.channelIndex}: Created ${as} voxels with sampling=${je}`);const ls=O.length/3;if(ls===0)return console.warn(`Channel ${$.channelIndex}: No voxels within threshold range`),null;const mr=new Pi(At,fn,ss),gr=new d_().copy(mr);mr.dispose(),gr.instanceCount=ls,gr.setAttribute("instanceOffset",new Tc(new Float32Array(O),3)),gr.setAttribute("instanceOpacity",new Tc(new Float32Array(ye),1));const Aa=new un({uniforms:{color:{value:new Je(be,xe,Be)},edgeFeather:{value:hb}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,depthTest:!1,blending:vc}),cs=new _n(gr,Aa);return cs.frustumCulled=!1,cs.userData={channelIndex:$.channelIndex,sampling:je},{mesh:cs,sampling:je}},[]),_e=ae.useCallback(()=>{const j=o.current,$=s.current;!j||!$||(l.current?l.current.render():a.current&&a.current.render(j,$))},[]),Ee=ae.useCallback(()=>{const j=s.current;if(!j)return;const $=se.current,Me=new H($.panOffset.x||0,$.panOffset.y||0,$.panOffset.z||0),de=$.distance,C=$.rotation.y,M=$.rotation.x;j.position.x=Me.x+de*Math.sin(C)*Math.cos(M),j.position.y=Me.y+de*Math.sin(M),j.position.z=Me.z+de*Math.cos(C)*Math.cos(M),j.up.set(0,-1,0),j.lookAt(Me)},[]),Oe=ae.useCallback(()=>{const j=o.current;if(!j)return;const $=se.current;if(!$)return;const Me=ge($.distance||3),de=Date.now(),C=m.current;if(de-C.lastUpdate<fb)return;C.lastUpdate=de;const M=p.current;M.forEach((k,Z)=>{if(!k||k.sampling===Me||k.lastRequestedSampling===Me)return;const K=x.current.get(Z),Q=_.current.get(Z);if(!K||!Q)return;const ne=k.mesh,oe=ne?j.children.includes(ne):!1,fe=Ne(K,Q,Me);if(k.lastRequestedSampling=Me,!fe){oe&&ne&&j.remove(ne),go(ne),yl(ne,u.current),M.delete(Z);return}const{mesh:pe,sampling:Le}=fe;ne&&(j.children.includes(ne)&&j.remove(ne),go(ne),yl(ne,u.current)),u.current.push(pe),M.set(Z,{mesh:pe,sampling:Le,lastRequestedSampling:Me}),oe&&Q.visible!==!1&&j.add(pe)}),C.lastSampling=Me,_e()},[Ne,ge,_e]),Ce=ae.useCallback(()=>{const j=s.current;if(!j)return;const $=h.current,de=$.shift||$.shiftleft||$.shiftright||$.shiftleft||$.shiftright?ub:cb,C=se.current;let M=!1;const k=new H,Z=new H,K=Q=>{C.panOffset.x+=Q.x,C.panOffset.y+=Q.y,C.panOffset.z+=Q.z};($.w||$.arrowup)&&(j.getWorldDirection(k),K(k.multiplyScalar(de)),M=!0),($.s||$.arrowdown)&&(j.getWorldDirection(k),K(k.multiplyScalar(-de)),M=!0),($.a||$.arrowleft)&&(j.getWorldDirection(k),Z.crossVectors(j.up,k).normalize().multiplyScalar(de),K(Z),M=!0),($.d||$.arrowright)&&(j.getWorldDirection(k),Z.crossVectors(j.up,k).normalize().multiplyScalar(-de),K(Z),M=!0),$.q&&(Z.copy(j.up).normalize().multiplyScalar(de),K(Z),M=!0),$.e&&(Z.copy(j.up).normalize().multiplyScalar(-de),K(Z),M=!0),M&&(Ee(),Oe())},[Ee,Oe]),X=(j,$,Me,de)=>({x:j/Me*2-1,y:-($/de)*2+1}),ke=(j,$,Me,de,C=0)=>{if(!s.current||!a.current)return null;const M=a.current.domElement.getBoundingClientRect(),k=M.width,Z=M.height,K=X(j-M.left,$-M.top,k,Z),Q=X(Me-M.left,de-M.top,k,Z),ne=new h_,oe=s.current,fe=new _i(new H(0,0,1),-C),pe=[new qe(K.x,K.y),new qe(Q.x,K.y),new qe(Q.x,Q.y),new qe(K.x,Q.y)],Le=[];if(pe.forEach(O=>{ne.setFromCamera(O,oe);const ye=new H;ne.ray.intersectPlane(fe,ye),Le.push(ye)}),Le.length===0)return null;const ce=Math.min(...Le.map(O=>O.x)),Pe=Math.max(...Le.map(O=>O.x)),Se=Math.min(...Le.map(O=>O.y)),Re=Math.max(...Le.map(O=>O.y)),be=Math.abs(C)/2,xe=-be,Be=be;return{min:new H(ce,Se,xe),max:new H(Pe,Re,Be),center:new H((ce+Pe)/2,(Se+Re)/2,0),size:new H(Pe-ce,Re-Se,Be-xe)}},ve=j=>{try{if(!o.current||!j){console.warn("Main_View: Cannot update wireframe - scene or bounds missing");return}if(!j.size||!j.center){console.warn("Main_View: Invalid worldBounds structure:",j);return}if(S.current){try{o.current.children.includes(S.current)&&o.current.remove(S.current),S.current.geometry&&S.current.geometry.dispose(),S.current.material&&S.current.material.dispose()}catch(oe){console.error("Main_View: Error removing existing wireframe:",oe)}S.current=null}const $=j.size,Me=j.center;if(!$.x||!$.y||!$.z||isNaN($.x)||isNaN($.y)||isNaN($.z)||!isFinite($.x)||!isFinite($.y)||!isFinite($.z)||$.x<=0||$.y<=0||$.z<=0){console.warn("Main_View: Invalid size values:",$);return}const de=.001,C=Math.max(de,Math.abs($.x)),M=Math.max(de,Math.abs($.y)),k=Math.max(de,Math.abs($.z)),Z=new Pi(C,M,k),K=new u_(Z),Q=new ru({color:65280,linewidth:2,transparent:!0,opacity:.8}),ne=new $h(K,Q);Me&&!isNaN(Me.x)&&!isNaN(Me.y)&&!isNaN(Me.z)?ne.position.copy(Me):ne.position.set(0,0,0),o.current.add(ne),S.current=ne,g.current={center:Me?Me.clone():new H(0,0,0),size:$.clone(),min:j.min?j.min.clone():new H(-C/2,-M/2,-k/2),max:j.max?j.max.clone():new H(C/2,M/2,k/2)},Z.dispose()}catch($){console.error("Main_View: Error in updateCuboidWireframe:",$),console.error("Main_View: worldBounds:",j)}},Ae=ae.useCallback(async j=>{if(!j||!j.min||!j.max)return console.warn("Main_View: extractSelectedRegion - Invalid world bounds:",j),null;const $={channels:[],bounds:null,worldBounds:j},Me=t.filter(be=>be.visible!==!1);if(Me.length===0)return console.warn("Main_View: extractSelectedRegion - No visible channels"),null;let de=null;for(const be of Me){let xe=x.current.get(be.channelIndex);if(!xe){console.log(`Main_View: extractSelectedRegion - Data missing for channel ${be.channelIndex}, fetching...`);try{xe=await ar(be.channelIndex),xe&&x.current.set(be.channelIndex,xe)}catch(Be){console.warn(`Main_View: extractSelectedRegion - Failed to fetch channel ${be.channelIndex}`,Be)}}if(xe){de=xe;break}}if(!de)return console.warn("Main_View: extractSelectedRegion - Failed to obtain data for ANY visible channel"),null;const{metadata:C}=de,M=C.shape,[k,Z,K]=M,Q=Math.max(k,Z,K),ne=K/Q,oe=Z/Q,fe=k/Q/4;let pe=Math.max(0,Math.floor((j.min.x/ne+1)/2*K)),Le=Math.min(K-1,Math.ceil((j.max.x/ne+1)/2*K)),ce=Math.max(0,Math.floor((j.min.y/oe+1)/2*Z)),Pe=Math.min(Z-1,Math.ceil((j.max.y/oe+1)/2*Z)),Se=Math.max(0,Math.floor((j.min.z/fe+1)/2*k)),Re=Math.min(k-1,Math.ceil((j.max.z/fe+1)/2*k));return pe>Le&&([pe,Le]=[Le,pe]),ce>Pe&&([ce,Pe]=[Pe,ce]),Se>Re&&([Se,Re]=[Re,Se]),Le===pe&&(Le=Math.min(K-1,pe+1)),Pe===ce&&(Pe=Math.min(Z-1,ce+1)),Re===Se&&(Re=Math.min(k-1,Se+1)),$.bounds={min:{x:pe,y:ce,z:Se},max:{x:Le,y:Pe,z:Re}},$.scaling={scaleX:ne,scaleY:oe,scaleZ:fe,xSize:K,ySize:Z,zSize:k},console.log(`Main_View: Calculated voxel bounds: X[${pe}, ${Le}], Y[${ce}, ${Pe}], Z[${Se}, ${Re}]`),console.log(`Main_View: Bounds size: ${Le-pe+1} x ${Pe-ce+1} x ${Re-Se+1} voxels`),Me.forEach(be=>{$.channels.push({channelIndex:be.channelIndex,color:be.color,thresholdMin:be.thresholdMin,thresholdMax:be.thresholdMax,opacity:be.opacity})}),console.log(`Main_View: Added ${$.channels.length} channels to selection`),$},[t]),we=ae.useCallback(async j=>{if(!j){console.warn("Main_View: Invalid world bounds");return}T.current=j,console.log("Main_View: ===== SELECTION COMPLETED ====="),console.log("Main_View: 3D Cuboid selection completed"),console.log("Main_View: World bounds:",j),console.log("Main_View: Cuboid center:",j.center),console.log("Main_View: Cuboid size:",j.size),console.log("Main_View: Current channels:",t),console.log("Main_View: onSelectionChange callback exists:",!!n);try{const $=await Ae(j);$?(console.log("Main_View: ✓ Extracted selected region data:",$),console.log("Main_View: Voxel bounds:",$.bounds),console.log("Main_View: Channels count:",$.channels.length),console.log("Main_View: Channels:",$.channels),console.log("Main_View: Scaling factors:",$.scaling),n?n($):console.warn("Main_View: onSelectionChange prop is missing")):(console.error("Main_View: ✗ Failed to extract selected region data"),console.error("Main_View: World bounds were:",j),console.error("Main_View: Visible channels:",t.filter(Me=>Me.visible!==!1)))}catch($){console.error("Main_View: Error in handleSelectionComplete:",$),console.error("Main_View: Error stack:",$.stack)}},[t,n,Ae]);ae.useEffect(()=>{if(T.current){console.log("Main_View: Channels changed, triggering selection refresh...");const j=setTimeout(()=>{we(T.current)},200);return()=>clearTimeout(j)}else console.log("Main_View: No currentSelectionBoundsRef to refresh")},[t,we]),ae.useEffect(()=>{i&&!T.current&&(console.log("Main_View: Restoring selection from initial bounds:",i),T.current=i,D(!0),o.current&&(ve(i),G(i.center),ue(i.size)),we(i))},[i,we]),ae.useEffect(()=>{if(!r.current)return;const j=r.current,$=j.clientWidth,Me=j.clientHeight,de=new Jh;o.current=de;const C=new nn(75,$/Me,.1,1e3);s.current=C,Ee();const M=new iu({antialias:!0,alpha:!1,powerPreference:"high-performance"});M.setSize($,Me),M.setClearColor(0),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.outputColorSpace!==void 0&&(M.outputColorSpace=Mt),j.appendChild(M.domElement),a.current=M,M.capabilities.isWebGL2,d.current=null,console.log("Main_View: MSAA not available, using post-process AA");const k=new rb(M),Z=new ob(de,C);k.addPass(Z);let K=null;try{K=new ab($*M.getPixelRatio(),Me*M.getPixelRatio()),k.addPass(K),console.log("Main_View: SMAA pass enabled")}catch(ie){console.warn("Main_View: SMAA unavailable, falling back to FXAA",ie),K=new m_(sb),K.material.uniforms.resolution.value.set(1/$,1/Me),k.addPass(K),console.log("Main_View: FXAA pass enabled")}l.current=k,c.current=K,de.add(new tp(16777215,1));let Q=!1,ne=!1,oe=0,fe=0,pe=null,Le=.1;const ce=ie=>{try{if(console.log("Main_View: Mouse down - selectionMode:",v.current,"button:",ie.button),v.current&&ie.button===0){if(console.log("Main_View: Starting 3D cuboid selection..."),!a.current||!a.current.domElement){console.error("Main_View: Renderer not initialized");return}const Y=a.current.domElement.getBoundingClientRect();if(pe={x:ie.clientX,y:ie.clientY},P(!0),B(pe),I(pe),Le=F,console.log("Main_View: Selection started at:",pe,"depth:",Le),S.current&&o.current)try{o.current.remove(S.current),S.current.geometry&&S.current.geometry.dispose(),S.current.material&&S.current.material.dispose(),S.current=null}catch(he){console.error("Main_View: Error clearing previous cuboid:",he)}}else ie.button===0&&(Q=!0),ie.button===2&&(ne=!0),oe=ie.clientX,fe=ie.clientY}catch(Y){console.error("Main_View: Error in handleMouseDown:",Y)}},Pe=ie=>{try{if(console.log("Main_View: Mouse up - selectionMode:",v.current,"selectionStartPos:",pe),v.current&&pe){const Y=ie.clientX,he=ie.clientY;console.log("Main_View: Selection completed - start:",pe,"end:",{x:Y,y:he},"depth:",Le);const Ie=ke(pe.x,pe.y,Y,he,Le);if(console.log("Main_View: World bounds from selection:",Ie),Ie)try{ve(Ie),console.log("Main_View: Calling handleSelectionComplete..."),we(Ie).catch(Xe=>{console.error("Main_View: Error in handleSelectionComplete:",Xe)})}catch(Xe){console.error("Main_View: Error updating cuboid wireframe:",Xe)}else console.warn("Main_View: No world bounds calculated from selection");P(!1),B(null),I(null),pe=null}else Q=!1,ne=!1}catch(Y){console.error("Main_View: Error in handleMouseUp:",Y),P(!1),Q=!1,ne=!1}},Se=ie=>{try{if(v.current&&pe){I({x:ie.clientX,y:ie.clientY});const Y=ke(pe.x,pe.y,ie.clientX,ie.clientY,Le);if(Y)try{ve(Y),G(Y.center),ue(Y.size)}catch(he){console.error("Main_View: Error updating wireframe:",he)}}else{const Y=se.current;Q&&(Y.rotation.y+=(ie.clientX-oe)*.01,Y.rotation.x=mo(Y.rotation.x+(ie.clientY-fe)*.01,-Math.PI/2+.01,Math.PI/2-.01),Ee(),Oe()),ne&&(Y.panOffset.x+=(ie.clientX-oe)*.001,Y.panOffset.y-=(ie.clientY-fe)*.001,Ee())}oe=ie.clientX,fe=ie.clientY}catch(Y){console.error("Main_View: Error in handleMouseMove:",Y)}},Re=ie=>{try{if(v.current&&b.current&&pe){ie.preventDefault();const Y=ie.deltaY*1e-4;Le=Math.max(.01,Math.min(1,Le+Y)),V(Le);const he=w.current||pe,Ie=ke(pe.x,pe.y,he.x||pe.x,he.y||pe.y,Le);if(Ie)try{ve(Ie),G(Ie.center),ue(Ie.size)}catch(Xe){console.error("Main_View: Error updating wireframe on wheel:",Xe)}}else{const Y=se.current;Y.distance*=1+ie.deltaY*.001,Y.distance=mo(Y.distance,.1,20),Ee(),Oe()}}catch(Y){console.error("Main_View: Error in handleWheel:",Y)}},be=ie=>ie.preventDefault(),xe=ie=>{const Y=ie.key.toLowerCase();h.current[Y]=!0,h.current[ie.code.toLowerCase()]=!0},Be=ie=>{const Y=ie.key.toLowerCase();h.current[Y]=!1,h.current[ie.code.toLowerCase()]=!1};M.domElement.addEventListener("mousedown",ce),M.domElement.addEventListener("mouseup",Pe),M.domElement.addEventListener("mousemove",Se),M.domElement.addEventListener("wheel",Re),M.domElement.addEventListener("contextmenu",be),M.domElement.setAttribute("tabindex","0"),M.domElement.style.outline="none",M.domElement.addEventListener("click",()=>{M.domElement.focus()}),window.addEventListener("keydown",xe),window.addEventListener("keyup",Be);const O=()=>{Ce(),_e(),f.current=requestAnimationFrame(O)};f.current=requestAnimationFrame(O);const ye=()=>{var he,Ie;const ie=j.clientWidth,Y=j.clientHeight;C.aspect=ie/Y,C.updateProjectionMatrix(),M.setSize(ie,Y),l.current&&l.current.setSize(ie,Y),d.current&&d.current.setSize(ie,Y),c.current&&(typeof c.current.setSize=="function"?c.current.setSize(ie*M.getPixelRatio(),Y*M.getPixelRatio()):(Ie=(he=c.current.material)==null?void 0:he.uniforms)!=null&&Ie.resolution&&c.current.material.uniforms.resolution.value.set(1/ie,1/Y))};return window.addEventListener("resize",ye),()=>{f.current&&cancelAnimationFrame(f.current),window.removeEventListener("resize",ye),window.removeEventListener("keydown",xe),window.removeEventListener("keyup",Be),M.domElement.removeEventListener("mousedown",ce),M.domElement.removeEventListener("mouseup",Pe),M.domElement.removeEventListener("mousemove",Se),M.domElement.removeEventListener("wheel",Re),M.domElement.removeEventListener("contextmenu",be),u.current.forEach(go),u.current=[],p.current.clear(),x.current.clear(),_.current.clear(),m.current={lastSampling:null,lastUpdate:0},d.current&&(d.current.dispose(),d.current=null),l.current=null,c.current=null,j.contains(M.domElement)&&j.removeChild(M.domElement),M.dispose()}},[Ce,_e,Ee,Oe,we]),ae.useEffect(()=>{const j=o.current;if(!j)return;if(t.length===0){const k=p.current;k.forEach(Z=>{const K=Z==null?void 0:Z.mesh;K&&j.children.includes(K)&&j.remove(K),go(K)}),k.clear(),x.current.clear(),_.current.clear(),u.current=[],_e();return}const $=p.current,Me=x.current,de=new Map;t.forEach(k=>{de.set(k.channelIndex,k)});let C=!1;$.forEach((k,Z)=>{const K=de.get(Z);if(K){const Q=K.visible!==!1,ne=k==null?void 0:k.mesh;ne&&j.children.includes(ne)&&!Q&&(j.remove(ne),C=!0,console.log(`Main_View: ⚠️ Channel ${Z} removed from scene (not visible)`))}else{const Q=k==null?void 0:k.mesh;Q&&j.children.includes(Q)&&(j.remove(Q),C=!0),go(Q),yl(Q,u.current),$.delete(Z),Me.delete(Z),console.log(`Main_View: 🗑️ Removed channel ${Z} (no longer selected)`)}}),C&&_e(),_.current.clear(),t.forEach(k=>{const Z=k.channelIndex;_.current.set(Z,k);const K=$.get(Z);Me.get(Z);let Q=(K==null?void 0:K.mesh)??null;const ne=vo(k),oe=(K==null?void 0:K.configSignature)!==ne;if(K&&oe&&(Q&&j.children.includes(Q)&&j.remove(Q),go(Q),yl(Q,u.current),$.delete(Z),Me.delete(Z),Q=null,console.log(`Main_View:  Channel ${Z} flagged for reload due to configuration change`)),Q){const fe=k.visible!==!1,pe=j.children.includes(Q);fe&&!pe?(j.add(Q),console.log(`Main_View:  Channel ${Z} turned ON`),_e()):!fe&&pe&&(j.remove(Q),console.log(`Main_View:  Channel ${Z} turned OFF`),_e())}}),(async()=>{var Q;const k=t.filter(ne=>ne.visible!==!1),Z=k.filter(ne=>!$.has(ne.channelIndex));if(Z.length===0){_e();return}console.log(`Main_View: Loading ${Z.length} channel(s)`);for(const ne of Z)if(ne.visible!==!1){try{const oe=_.current.get(ne.channelIndex);if(!oe||vo(oe)!==vo(ne)){console.log(`Main_View:  Skipping stale load for channel ${ne.channelIndex}`);continue}let fe=Me.get(ne.channelIndex);fe||(fe=await ar(ne.channelIndex),fe&&Me.set(ne.channelIndex,fe));const pe=_.current.get(ne.channelIndex);if(!pe||vo(pe)!==vo(ne)){console.log(`Main_View:  Loaded data discarded for channel ${ne.channelIndex} (stale)`);continue}if(!fe)continue;const Le=ge(((Q=se.current)==null?void 0:Q.distance)||3),ce=Ne(fe,ne,Le);if(ce){const{mesh:Pe,sampling:Se}=ce;$.set(ne.channelIndex,{mesh:Pe,sampling:Se,lastRequestedSampling:Le,configSignature:vo(ne)}),m.current.lastSampling=Se,u.current.push(Pe),ne.visible!==!1?(j.add(Pe),Pe.renderOrder=1,console.log(`Main_View:  Channel ${ne.channelIndex} added (sampling=${Se})`)):console.log(`Main_View:  Channel ${ne.channelIndex} prepared but not visible`),_e()}else console.warn(`Main_View:  Channel ${ne.channelIndex} produced no voxels`)}catch(oe){console.error(`Main_View:  Error loading channel ${ne.channelIndex}:`,oe)}await new Promise(oe=>setTimeout(oe,100))}const K=k.filter(ne=>{const oe=$.get(ne.channelIndex);return(oe==null?void 0:oe.mesh)&&j.children.includes(oe.mesh)}).length;console.log(`Main_View: Channel update complete. Visible ${K}/${k.length}`),_e(),E(ne=>ne+1)})()},[t,Ne,ge,ar,_e]);const Fe=(()=>{try{if(!le||!g.current)return null;const j=t.filter(ye=>ye.visible!==!1);if(j.length===0)return null;const $=j[0],Me=x.current.get($.channelIndex);if(!Me)return null;const{metadata:de}=Me,[C,M,k]=de.shape,Z=Math.max(C,M,k),K=k/Z,Q=M/Z,ne=C/Z/4,oe=g.current.min,fe=g.current.max;if(!oe||!fe)return null;let pe=Math.max(0,Math.floor((oe.x/K+1)/2*k)),Le=Math.min(k-1,Math.ceil((fe.x/K+1)/2*k)),ce=Math.max(0,Math.floor((oe.y/Q+1)/2*M)),Pe=Math.min(M-1,Math.ceil((fe.y/Q+1)/2*M)),Se=Math.max(0,Math.floor((oe.z/ne+1)/2*C)),Re=Math.min(C-1,Math.ceil((fe.z/ne+1)/2*C));pe>Le&&([pe,Le]=[Le,pe]),ce>Pe&&([ce,Pe]=[Pe,ce]),Se>Re&&([Se,Re]=[Re,Se]);const be=Le-pe+1,xe=Pe-ce+1,Be=Re-Se+1,O=1;return{width:(be*O).toFixed(1),height:(xe*O).toFixed(1),depth:(Be*O).toFixed(1),volume:(be*xe*Be*O*O*O).toFixed(1)}}catch(j){return console.error("Main_View: Error calculating cuboid dimensions:",j),null}})();return J.jsxs("div",{style:{height:"100%",width:"100%",position:"relative",backgroundColor:"#000000",overflow:"hidden",boxSizing:"border-box"},children:[J.jsx("div",{ref:r,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,overflow:"hidden"}}),J.jsx("button",{onClick:j=>{if(j.preventDefault(),j.stopPropagation(),A.current){console.log("Main_View: Toggle already in progress, ignoring click");return}try{A.current=!0;const $=!R;console.log("Main_View: Selection mode toggled:",$),D($),!$&&S.current&&o.current?requestAnimationFrame(()=>{try{o.current&&S.current&&(o.current.children.includes(S.current)&&o.current.remove(S.current),S.current.geometry&&S.current.geometry.dispose(),S.current.material&&S.current.material.dispose(),S.current=null,g.current=null,G(null),ue(null),T.current=null)}catch(Me){console.error("Main_View: Error clearing cuboid:",Me)}finally{A.current=!1}}):A.current=!1}catch($){console.error("Main_View: Error toggling selection mode:",$),A.current=!1;try{D(!R)}catch(Me){console.error("Main_View: Failed to update state:",Me)}}},style:{position:"absolute",top:"10px",right:"10px",zIndex:1e3,padding:"8px 16px",backgroundColor:R?"#4CAF50":"#555",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px",fontWeight:"bold",boxShadow:"0 2px 4px rgba(0,0,0,0.3)",transition:"background-color 0.2s"},title:R?"Click to disable 3D selection":"Click to enable 3D selection",children:R?"✓ 3D Selection":"3D Selection"}),R&&Fe&&J.jsxs("div",{style:{position:"absolute",top:"50px",right:"10px",zIndex:1e3,backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white",padding:"10px",borderRadius:"4px",fontSize:"12px",fontFamily:"monospace",minWidth:"200px"},children:[J.jsx("div",{style:{fontWeight:"bold",marginBottom:"5px",borderBottom:"1px solid #555",paddingBottom:"5px"},children:"3D Cuboid Selection"}),J.jsxs("div",{children:["Width: ",Fe.width," μm"]}),J.jsxs("div",{children:["Height: ",Fe.height," μm"]}),J.jsxs("div",{children:["Depth: ",Fe.depth," μm"]}),J.jsxs("div",{style:{marginTop:"5px",borderTop:"1px solid #555",paddingTop:"5px"},children:["Volume: ",Fe.volume," μm³"]}),U&&J.jsx("div",{style:{marginTop:"5px",color:"#00ff00",fontSize:"11px"},children:"Scroll to adjust Z-depth"})]}),e.length>0&&J.jsx("div",{style:{position:"absolute",top:"16px",left:"16px",background:"rgba(0, 0, 0, 0.65)",border:"1px solid rgba(255, 255, 255, 0.18)",borderRadius:"8px",padding:"12px 14px",color:"#FFFFFF",pointerEvents:"none",backdropFilter:"blur(6px)",maxWidth:"260px",display:"flex",flexDirection:"column",gap:"10px"},children:e.map(j=>J.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[J.jsx("div",{style:{fontSize:"14px",fontWeight:600},children:j.title}),j.topMarkers.map($=>J.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"12px",lineHeight:1.4},children:[J.jsx("span",{style:{width:"12px",height:"12px",borderRadius:"3px",backgroundColor:$.color,border:"1px solid rgba(255,255,255,0.25)",flexShrink:0}}),J.jsx("span",{children:$.name})]},`${j.id}-${$.name}`))]},`hud-${j.id}`))})]})},Tf=.35,vb=1.3,xb=.99,Af=.1,$g=(t,e,n)=>Math.min(Math.max(t,e),n),_b=({selectedRegionData:t,channels:e=[]})=>{const n=ae.useRef(null),i=ae.useRef(null),r=ae.useRef(null),o=ae.useRef(null),s=ae.useRef(null),a=ae.useRef([]),l=ae.useRef(null),c=ae.useRef(null),[d,f]=ae.useState(0),[u,p]=ae.useState(!1);ae.useEffect(()=>{console.log("Local_View: Props received - selectedRegionData:",t),console.log("Local_View: Props received - channels:",e)},[t,e]);const x=ae.useRef({rotation:{x:.5,y:.5},distance:.3,panOffset:{x:0,y:0,z:0}}),_=ae.useRef(null),m=ae.useRef(null),h=(T,y,E,R,D=null,U=null)=>{const{data:P,metadata:z}=T,{color:B,thresholdMin:W,thresholdMax:I}=y,F=z.shape,[V,N,G]=F;console.log(`Local_View: Creating visualization for channel ${y.channelIndex}`),console.log(`Local_View: Shape: [${V}, ${N}, ${G}], Bounds:`,E);const le=z.dataRange||[0,65535],ue=le[0],se=le[1];let ge=W!==void 0?W:ue,Ne=I!==void 0?I:se;ge>Ne&&([ge,Ne]=[Ne,ge]),ge=Math.max(ue,Math.min(se,ge)),Ne=Math.max(ue,Math.min(se,Ne)),console.log(`Local_View: Threshold range: [${ge}, ${Ne}], Data range: [${ue}, ${se}]`);const _e=B.replace("#",""),Ee=parseInt(_e.substr(0,2),16)/255,Oe=parseInt(_e.substr(2,2),16)/255,Ce=parseInt(_e.substr(4,2),16)/255,X=[],ke=[];let ve,Ae,we;if(D)ve=D.scaleX,Ae=D.scaleY,we=D.scaleZ,console.log(`Local_View: Using scaling factors from Main_View: scaleX=${ve}, scaleY=${Ae}, scaleZ=${we}`);else{const ce=Math.max(V,N,G);ve=G/ce,Ae=N/ce,we=V/ce/4,console.log(`Local_View: Calculated scaling factors: scaleX=${ve}, scaleY=${Ae}, scaleZ=${we}`)}const Ze=1,Fe=Math.max(0,Math.floor(E.min.x)),j=Math.min(G-1,Math.ceil(E.max.x)),$=Math.max(0,Math.floor(E.min.y)),Me=Math.min(N-1,Math.ceil(E.max.y)),de=Math.max(0,Math.floor(E.min.z)),C=Math.min(V-1,Math.ceil(E.max.z));if(console.log(`Local_View: Voxel bounds: X[${Fe}, ${j}], Y[${$}, ${Me}], Z[${de}, ${C}]`),Fe>j||$>Me||de>C)return console.warn(`Local_View: Invalid bounds for channel ${y.channelIndex}`),null;let M=0,k=0;const Z=2/G*ve*Math.max(1,Ze),K=2/N*Ae*Math.max(1,Ze),Q=2/V*we*Math.max(1,Ze);console.log(`Local_View: Voxel step sizes (1:1 with Main_View): X=${Z.toFixed(6)}, Y=${K.toFixed(6)}, Z=${Q.toFixed(6)}`),console.log(`Local_View: Using sampling=${Ze} (full resolution)`);for(let ce=de;ce<=C;ce+=Ze)for(let Pe=$;Pe<=Me;Pe+=Ze)for(let Se=Fe;Se<=j;Se+=Ze){const Re=ce*N*G+Pe*G+Se;if(Re>=P.length){console.warn(`Local_View: Index ${Re} out of bounds (data length: ${P.length})`);continue}const xe=P[Re]/255*(se-ue)+ue;if(xe>=ge&&xe<=Ne){k++;let Be=(Se/G*2-1)*ve,O=(Pe/N*2-1)*Ae,ye=(ce/V*2-1)*we;Be=-Be;const ie=(Math.random()-.5)*Z*Af,Y=(Math.random()-.5)*K*Af,he=(Math.random()-.5)*Q*Af;U&&(Be-=U.x,O-=U.y,ye-=U.z),X.push(Be+ie,O+Y,ye+he);const Ie=Math.max(1,Ne-ge),Xe=(xe-ge)/Ie,rt=$g(Xe,0,1),Nt=Tf+(1-Tf)*rt*vb;ke.push($g(Nt,Tf,1)),M++}}console.log(`Local_View: Extracted ${M} points (${k} passed threshold) from ${(j-Fe+1)*(Me-$+1)*(C-de+1)} voxels`);const ne=X.length/3;if(ne===0)return console.warn(`Local_View: No points extracted for channel ${y.channelIndex}`),null;const oe=new Pi(Z,K,Q),fe=new d_;fe.copy(oe),oe.dispose(),fe.instanceCount=ne,fe.setAttribute("instanceOffset",new Tc(new Float32Array(X),3)),fe.setAttribute("instanceOpacity",new Tc(new Float32Array(ke),1));const pe=new un({uniforms:{color:{value:new Je(Ee,Oe,Ce)},edgeFeather:{value:xb}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,depthTest:!1,blending:vc}),Le=new _n(fe,pe);return Le.frustumCulled=!1,Le.userData={channelIndex:y.channelIndex},Le},v=ae.useCallback(()=>{if(!r.current)return;const T=x.current,y=new H(T.panOffset.x||0,T.panOffset.y||0,T.panOffset.z||0),E=T.distance,R=T.rotation.y,D=T.rotation.x;r.current.position.x=y.x+E*Math.sin(R)*Math.cos(D),r.current.position.y=y.y+E*Math.sin(D),r.current.position.z=y.z+E*Math.cos(R)*Math.cos(D),r.current.up.set(0,-1,0),r.current.lookAt(y)},[]),g=ae.useCallback(()=>{},[]),S=async(T,y=null)=>{if(!i.current||!T||!T.bounds){console.log("Local_View: Invalid selected data",T);return}let E=y&&y.length>0?y:T.channels;if((!E||E.length===0)&&(console.log("Local_View: No current channels provided, falling back to stored channels"),E=T.channels||[]),console.log(`Local_View: Using ${E.length} channel(s) for visualization`),E.length===0){console.log("Local_View: No channels available"),a.current.forEach(de=>{i.current.remove(de),de.geometry&&de.geometry.dispose(),de.material&&de.material.dispose()}),a.current=[],f(0);return}const R=E.filter(de=>de.visible!==!1);if(R.length===0){console.log("Local_View: No visible channels"),a.current.forEach(de=>{i.current.remove(de),de.geometry&&de.geometry.dispose(),de.material&&de.material.dispose()}),a.current=[],f(0);return}console.log("Local_View: Creating visualization for selected region",T),console.log(`Local_View: Using ${R.length} visible channel(s) (${y?"current":"stored"} channels)`);const D=i.current;for(let de=D.children.length-1;de>=0;de--){const C=D.children[de];(C.isMesh||C.isLineSegments||C.isAxesHelper)&&(D.remove(C),C.geometry&&C.geometry.dispose(),C.material&&C.material.dispose())}a.current=[],l.current=null,c.current=null,l.current&&(D.remove(l.current),l.current.geometry&&l.current.geometry.dispose(),l.current.material&&l.current.material.dispose(),l.current=null),c.current&&(D.remove(c.current),c.current=null);const{bounds:U,scaling:P}=T;let z=null,B=null;for(const de of R)try{const C=await ar(de.channelIndex);if(C){z=de,B=C;break}}catch(C){console.warn(`Local_View: Failed to load channel ${de.channelIndex} for reference`,C)}if(!B){console.warn("Local_View: Failed to load data for ANY visible channel - cannot create visualization");return}const{metadata:W}=B,[I,F,V]=W.shape;let N,G,le;if(P)N=P.scaleX,G=P.scaleY,le=P.scaleZ,console.log("Local_View: Using scaling factors from Main_View for bounding box");else{const de=Math.max(I,F,V);N=V/de,G=F/de,le=I/de/4,console.log("Local_View: Calculated scaling factors for bounding box")}const ue=U.max.x-U.min.x+1,se=U.max.y-U.min.y+1,ge=U.max.z-U.min.z+1,Ne=(U.min.x+U.max.x)/2,_e=(U.min.y+U.max.y)/2,Ee=(U.min.z+U.max.z)/2,Oe={x:-(Ne/V*2-1)*N,y:(_e/F*2-1)*G,z:(Ee/I*2-1)*le},Ce={x:ue/V*2*N,y:se/F*2*G,z:ge/I*2*le};console.log("Local_View: Bounding box center",Oe,"size",Ce),console.log("Local_View: Bounds dimensions (voxels)",ue,se,ge),console.log("Local_View: Using exact same scaling as Main_View - maintaining 1:1 spatial scale");const X=new Pi(Ce.x,Ce.y,Ce.z),ke=new u_(X),ve=new ru({color:16776960,linewidth:2}),Ae=new $h(ke,ve);Ae.position.set(Oe.x,Oe.y,Oe.z),D.add(Ae),l.current=Ae;let we=0,Ze=0;const Fe={x:Oe.x,y:Oe.y,z:Oe.z};console.log(`Local_View: Center offset to apply: (${Fe.x.toFixed(4)}, ${Fe.y.toFixed(4)}, ${Fe.z.toFixed(4)})`),console.log(`Local_View: Processing ${R.length} visible channel(s)`);for(const de of R)try{console.log(`Local_View: Loading channel ${de.channelIndex}...`);const C=await ar(de.channelIndex);if(!C){console.warn(`Local_View: Failed to load channel ${de.channelIndex}`);continue}console.log(`Local_View: Channel ${de.channelIndex} loaded, creating visualization...`);const M=h(C,de,U,D,P,Fe);M?(console.log(`Local_View: Mesh created for channel ${de.channelIndex}, adding to scene...`),M.visible=!0,M.frustumCulled=!1,D.add(M),a.current.push(M),we++,Ze+=M.geometry.instanceCount,console.log(`Local_View: ✓ Added mesh for channel ${de.channelIndex} with ${M.geometry.instanceCount} instances`),console.log("Local_View: Mesh position:",M.position),console.log("Local_View: Mesh visible:",M.visible),console.log("Local_View: Mesh in scene:",D.children.includes(M))):console.warn(`Local_View: ✗ No mesh created for channel ${de.channelIndex} (no points in bounds)`)}catch(C){console.error(`Local_View: Error processing channel ${de.channelIndex}:`,C),console.error("Local_View: Error stack:",C.stack)}f(Ze),console.log(`Local_View: Created ${we} meshes`);const j=Math.max(Ce.x,Ce.y,Ce.z)*.3,$=new J2(j);$.position.set(Oe.x,Oe.y,Oe.z),D.add($),c.current=$,l.current&&l.current.position.set(0,0,0),c.current&&c.current.position.set(0,0,0),x.current.panOffset={x:0,y:0,z:0};const Me=Math.max(Math.abs(Ce.x),Math.abs(Ce.y),Math.abs(Ce.z));if(Me>0&&Number.isFinite(Me)){const de=60*Math.PI/180,C=2,M=Me/2/Math.tan(de/2);x.current.distance=M*C,x.current.distance=Math.max(.1,Math.min(10,x.current.distance))}else x.current.distance=.5;x.current.rotation={x:.5,y:.5},console.log(`Local_View: Geometry centered at origin (offset: ${Fe.x.toFixed(4)}, ${Fe.y.toFixed(4)}, ${Fe.z.toFixed(4)})`),console.log(`Local_View: Camera distance: ${x.current.distance.toFixed(4)} (based on max dimension: ${Me.toFixed(4)})`),_.current={rotation:{...x.current.rotation},distance:x.current.distance,panOffset:{...x.current.panOffset}},v(),g(),o.current&&r.current&&i.current&&(v(),g(),o.current.render(i.current,r.current),requestAnimationFrame(()=>{o.current&&r.current&&i.current&&(v(),g(),o.current.render(i.current,r.current),setTimeout(()=>{o.current&&r.current&&i.current&&o.current.render(i.current,r.current)},50))})),console.log("Local_View: Camera positioned at distance",x.current.distance,"looking at",Oe),console.log(`Local_View: Visualization complete - ${we} meshes added to scene, ${Ze} total cells`),console.log(`Local_View: Scene children count: ${i.current.children.length}`),console.log(`Local_View: Voxel meshes count: ${a.current.length}`),console.log("Local_View: Renderer exists:",!!o.current),console.log("Local_View: Camera exists:",!!r.current),a.current.forEach((de,C)=>{console.log(`Local_View: Mesh ${C}: visible=${de.visible}, position=`,de.position,`instances=${de.geometry.instanceCount}, inScene=${i.current.children.includes(de)}`)}),o.current&&o.current.domElement&&(console.log(`Local_View: Renderer canvas size: ${o.current.domElement.width}x${o.current.domElement.height}`),console.log("Local_View: Renderer canvas visible:",o.current.domElement.offsetWidth>0&&o.current.domElement.offsetHeight>0))};ae.useEffect(()=>{if(!n.current)return;const T=n.current,y=T.clientWidth,E=T.clientHeight,R=new Jh;i.current=R;const D=new nn(60,y/E,.001,100);r.current=D,v();const U=new iu({antialias:!0,alpha:!1,powerPreference:"high-performance"});U.setSize(y,E),U.setClearColor(0),U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.outputEncoding!==void 0&&(U.outputEncoding=sr),U.domElement.style.display="block",U.domElement.style.width="100%",U.domElement.style.height="100%",U.domElement.style.position="absolute",U.domElement.style.top="0",U.domElement.style.left="0",T.appendChild(U.domElement),o.current=U,console.log("Local_View: Renderer initialized, canvas size:",y,"x",E),console.log("Local_View: Canvas element:",U.domElement),console.log("Local_View: Canvas visible:",U.domElement.offsetWidth>0&&U.domElement.offsetHeight>0);const P=new tp(16777215,1);R.add(P);let z=!1,B=0,W=0;const I=se=>{se.button===0&&(z=!0,B=se.clientX,W=se.clientY)},F=()=>{z=!1},V=se=>{if(z){const ge=x.current;ge.rotation.y+=(se.clientX-B)*.01,ge.rotation.x+=(se.clientY-W)*.01,v(),g()}B=se.clientX,W=se.clientY},N=se=>{const ge=x.current;ge.distance*=1+se.deltaY*.001,ge.distance=Math.max(.1,Math.min(5,ge.distance)),v(),g()},G=se=>se.preventDefault();U.domElement.addEventListener("mousedown",I),U.domElement.addEventListener("mouseup",F),U.domElement.addEventListener("mousemove",V),U.domElement.addEventListener("wheel",N),U.domElement.addEventListener("contextmenu",G);const le=()=>{if(r.current&&i.current&&o.current)try{g(),o.current.render(i.current,r.current)}catch(se){console.error("Local_View: Error in animation loop:",se)}s.current=requestAnimationFrame(le)};if(le(),console.log("Local_View: Scene initialized, rendering initial frame"),console.log("Local_View: Scene children:",R.children.length),console.log("Local_View: Camera position:",D.position),console.log("Local_View: Camera distance:",x.current.distance),r.current&&i.current&&o.current)try{v(),g(),o.current.render(i.current,r.current)}catch(se){console.error("Local_View: Error in initial render:",se)}const ue=()=>{const se=T.clientWidth,ge=T.clientHeight;D.aspect=se/ge,D.updateProjectionMatrix(),U.setSize(se,ge)};return window.addEventListener("resize",ue),()=>{s.current&&cancelAnimationFrame(s.current),window.removeEventListener("resize",ue),U.domElement.removeEventListener("mousedown",I),U.domElement.removeEventListener("mouseup",F),U.domElement.removeEventListener("mousemove",V),U.domElement.removeEventListener("wheel",N),U.domElement.removeEventListener("contextmenu",G),a.current.forEach(se=>{se.geometry&&se.geometry.dispose(),se.material&&se.material.dispose()}),a.current=[],l.current&&(l.current.geometry&&l.current.geometry.dispose(),l.current.material&&l.current.material.dispose()),T&&U.domElement&&T.removeChild(U.domElement),i.current=null,r.current=null,o.current=null}},[v,g]),ae.useEffect(()=>{if(m.current&&(clearTimeout(m.current),m.current=null),!t||!t.bounds){console.log("Local_View: No selected region data, clearing visualization"),i.current&&(a.current.forEach(E=>{i.current.remove(E),E.geometry&&E.geometry.dispose(),E.material&&E.material.dispose()}),a.current=[],f(0));return}let T=[];if(e&&e.length>0&&t.channels&&t.channels.length>0){const E=new Set(t.channels.map(R=>R.channelIndex));console.log("Local_View: Selected channel indices:",Array.from(E)),console.log("Local_View: Current channel indices:",e.map(R=>R.channelIndex)),T=e.filter(R=>E.has(R.channelIndex)),console.log(`Local_View: Matched ${T.length} current channel(s) to selection`),T.length===0&&(console.warn("Local_View: No current channels matched, using stored channels"),T=t.channels||[])}else T=e&&e.length>0?e:t.channels||[],console.log(`Local_View: Using ${T.length} ${e&&e.length>0?"current":"stored"} channel(s)`);if(!T||T.length===0){console.log("Local_View: No channels available, waiting...");return}console.log("Local_View: Updating visualization"),console.log(`Local_View: Using ${T.length} channel(s) - ${e&&e.length>0?"current":"stored"}`),console.log("Local_View: SelectedRegionData:",t),console.log("Local_View: Channels:",T);const y=(E=10)=>{if(!i.current||!o.current||!r.current)if(E>0){console.warn(`Local_View: Scene/renderer not initialized yet, retrying... (${E} retries left)`),setTimeout(()=>y(E-1),200);return}else{console.error("Local_View: Scene/renderer not initialized after retries");return}console.log("Local_View: Creating visualization now..."),S(t,T).catch(R=>{console.error("Local_View: Error creating visualization:",R),console.error("Local_View: Error stack:",R.stack)})};return m.current=setTimeout(()=>{y()},100),()=>{m.current&&(clearTimeout(m.current),m.current=null)}},[t,e]),ae.useEffect(()=>{const T=y=>{if(u){const E=document.getElementById("info-modal"),R=y.target.closest("button");E&&!E.contains(y.target)&&(!R||!R.textContent.includes("ⓘ"))&&p(!1)}};if(u)return setTimeout(()=>{document.addEventListener("mousedown",T)},100),()=>{document.removeEventListener("mousedown",T)}},[u]);const b=()=>{if(_.current){const T=document.getElementById("reset-view-btn");T&&(T.style.transform="scale(0.95)",T.style.backgroundColor="#4CAF50",setTimeout(()=>{T.style.transform="scale(1)",T.style.backgroundColor="#555"},150)),x.current.rotation={..._.current.rotation},x.current.distance=_.current.distance,x.current.panOffset={..._.current.panOffset},v(),g(),console.log("Local_View: Camera reset to initial position")}},A=(()=>{if(!t||!t.bounds)return null;const T=t.bounds,y=T.max.x-T.min.x+1,E=T.max.y-T.min.y+1,R=T.max.z-T.min.z+1,D=1,U=y*D,P=E*D,z=R*D,B=U*P*z;return{width:Math.round(U),height:Math.round(P),depth:Math.round(z),volume:Math.round(B)}})();return J.jsxs("div",{style:{height:"100%",width:"100%",backgroundColor:"#000000",border:"1px solid #444",padding:"1px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden",position:"relative"},children:[J.jsxs("h3",{style:{marginTop:0,marginBottom:"5px",fontSize:"14px",color:"white",position:"absolute",top:"5px",left:"10px",zIndex:100,display:"flex",alignItems:"center",gap:"8px"},children:["Local View",t&&A&&J.jsx("button",{onClick:T=>{T.stopPropagation(),p(!u)},style:{background:"transparent",border:"1px solid rgba(255, 255, 255, 0.3)",borderRadius:"50%",width:"20px",height:"20px",cursor:"pointer",color:"#fff",fontSize:"12px",display:"flex",alignItems:"center",justifyContent:"center",padding:0,transition:"all 0.2s",lineHeight:"1"},onMouseEnter:T=>{T.target.style.background="rgba(255, 255, 255, 0.1)",T.target.style.borderColor="rgba(255, 255, 255, 0.5)"},onMouseLeave:T=>{T.target.style.background="transparent",T.target.style.borderColor="rgba(255, 255, 255, 0.3)"},title:"Show selection information",children:"ⓘ"})]}),!t&&J.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#666",fontSize:"12px",textAlign:"center",zIndex:50,pointerEvents:"none"},children:[J.jsx("div",{children:"No selection made"}),J.jsx("div",{style:{fontSize:"10px",marginTop:"5px"},children:"Select a region in Main View"})]}),t&&A&&u&&J.jsxs("div",{id:"info-modal",style:{position:"absolute",top:"40px",left:"10px",backgroundColor:"rgba(20, 20, 20, 0.95)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"6px",padding:"12px",zIndex:1e3,fontSize:"12px",fontFamily:"monospace",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.5)",minWidth:"200px"},onClick:T=>T.stopPropagation(),children:[J.jsx("div",{style:{fontWeight:"bold",marginBottom:"8px",fontSize:"13px",color:"#fff",borderBottom:"1px solid rgba(255, 255, 255, 0.2)",paddingBottom:"6px"},children:"3D Selection Info"}),J.jsxs("div",{style:{display:"flex",justifyContent:"space-between",margin:"4px 0",gap:"16px"},children:[J.jsx("span",{style:{color:"rgba(255, 255, 255, 0.7)"},children:"Dimensions (μm³):"}),J.jsxs("span",{style:{color:"#4ade80",fontWeight:"500"},children:[A.width," × ",A.height," × ",A.depth]})]}),J.jsxs("div",{style:{display:"flex",justifyContent:"space-between",margin:"4px 0",gap:"16px"},children:[J.jsx("span",{style:{color:"rgba(255, 255, 255, 0.7)"},children:"Volume:"}),J.jsxs("span",{style:{color:"#4ade80",fontWeight:"500"},children:[A.volume.toLocaleString()," μm³"]})]}),J.jsxs("div",{style:{display:"flex",justifyContent:"space-between",margin:"4px 0",gap:"16px",borderTop:"1px solid rgba(255, 255, 255, 0.2)",paddingTop:"6px"},children:[J.jsx("span",{style:{color:"rgba(255, 255, 255, 0.7)"},children:"Cells:"}),J.jsx("span",{style:{color:"#4ade80",fontWeight:"500"},children:d.toLocaleString()})]}),J.jsxs("div",{style:{display:"flex",justifyContent:"space-between",margin:"4px 0",gap:"16px"},children:[J.jsx("span",{style:{color:"rgba(255, 255, 255, 0.7)"},children:"Scale:"}),J.jsx("span",{style:{color:"#4ade80",fontWeight:"500",fontStyle:"italic"},children:"1:1 with main view"})]})]}),t&&J.jsx("button",{id:"reset-view-btn",onClick:b,style:{position:"absolute",top:"10px",right:"10px",zIndex:100,padding:"6px 12px",backgroundColor:"#555",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",fontWeight:"bold",boxShadow:"0 2px 4px rgba(0,0,0,0.3)",transition:"all 0.15s ease",transform:"scale(1)"},onMouseEnter:T=>T.target.style.backgroundColor="#666",onMouseLeave:T=>{T.target.style.backgroundColor="#555",T.target.style.transform="scale(1)"},title:"Reset camera view to initial position",children:"Reset View"}),J.jsxs("div",{style:{position:"absolute",bottom:"20px",right:"20px",zIndex:100,display:"flex",flexDirection:"column",alignItems:"flex-end"},children:[J.jsx("div",{style:{width:"60px",height:"2px",backgroundColor:"white",marginBottom:"4px"}}),J.jsx("div",{style:{color:"white",fontSize:"10px"},children:"10 µm"})]}),J.jsx("div",{ref:n,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0}})]})};function ko(t,e){return t==null||e==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function yb(t,e){return t==null||e==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function g_(t){let e,n,i;t.length!==2?(e=ko,n=(a,l)=>ko(t(a),l),i=(a,l)=>t(a)-l):(e=t===ko||t===yb?t:Sb,n=t,i=t);function r(a,l,c=0,d=a.length){if(c<d){if(e(l,l)!==0)return d;do{const f=c+d>>>1;n(a[f],l)<0?c=f+1:d=f}while(c<d)}return c}function o(a,l,c=0,d=a.length){if(c<d){if(e(l,l)!==0)return d;do{const f=c+d>>>1;n(a[f],l)<=0?c=f+1:d=f}while(c<d)}return c}function s(a,l,c=0,d=a.length){const f=r(a,l,c,d-1);return f>c&&i(a[f-1],l)>-i(a[f],l)?f-1:f}return{left:r,center:s,right:o}}function Sb(){return 0}function Mb(t){return t===null?NaN:+t}function*Eb(t,e){for(let n of t)n!=null&&(n=+n)>=n&&(yield n)}const wb=g_(ko),Tb=wb.right;g_(Mb).center;function Ab(t,e){let n=0,i,r=0,o=0;for(let s of t)s!=null&&(s=+s)>=s&&(i=s-r,r+=i/++n,o+=i*(s-r));if(n>1)return o/(n-1)}function bb(t,e){const n=Ab(t);return n&&Math.sqrt(n)}class e0 extends Map{constructor(e,n=Lb){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),e!=null)for(const[i,r]of e)this.set(i,r)}get(e){return super.get(t0(this,e))}has(e){return super.has(t0(this,e))}set(e,n){return super.set(Cb(this,e),n)}delete(e){return super.delete(Rb(this,e))}}function t0({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):n}function Cb({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):(t.set(i,n),n)}function Rb({_intern:t,_key:e},n){const i=e(n);return t.has(i)&&(n=t.get(i),t.delete(i)),n}function Lb(t){return t!==null&&typeof t=="object"?t.valueOf():t}function Pb(t=ko){if(t===ko)return v_;if(typeof t!="function")throw new TypeError("compare is not a function");return(e,n)=>{const i=t(e,n);return i||i===0?i:(t(n,n)===0)-(t(e,e)===0)}}function v_(t,e){return(t==null||!(t>=t))-(e==null||!(e>=e))||(t<e?-1:t>e?1:0)}const Db=Math.sqrt(50),Nb=Math.sqrt(10),Ib=Math.sqrt(2);function Ac(t,e,n){const i=(e-t)/Math.max(0,n),r=Math.floor(Math.log10(i)),o=i/Math.pow(10,r),s=o>=Db?10:o>=Nb?5:o>=Ib?2:1;let a,l,c;return r<0?(c=Math.pow(10,-r)/s,a=Math.round(t*c),l=Math.round(e*c),a/c<t&&++a,l/c>e&&--l,c=-c):(c=Math.pow(10,r)*s,a=Math.round(t/c),l=Math.round(e/c),a*c<t&&++a,l*c>e&&--l),l<a&&.5<=n&&n<2?Ac(t,e,n*2):[a,l,c]}function Ub(t,e,n){if(e=+e,t=+t,n=+n,!(n>0))return[];if(t===e)return[t];const i=e<t,[r,o,s]=i?Ac(e,t,n):Ac(t,e,n);if(!(o>=r))return[];const a=o-r+1,l=new Array(a);if(i)if(s<0)for(let c=0;c<a;++c)l[c]=(o-c)/-s;else for(let c=0;c<a;++c)l[c]=(o-c)*s;else if(s<0)for(let c=0;c<a;++c)l[c]=(r+c)/-s;else for(let c=0;c<a;++c)l[c]=(r+c)*s;return l}function Od(t,e,n){return e=+e,t=+t,n=+n,Ac(t,e,n)[2]}function Ob(t,e,n){e=+e,t=+t,n=+n;const i=e<t,r=i?Od(e,t,n):Od(t,e,n);return(i?-1:1)*(r<0?1/-r:r)}function Ys(t,e){let n;if(e===void 0)for(const i of t)i!=null&&(n<i||n===void 0&&i>=i)&&(n=i);else{let i=-1;for(let r of t)(r=e(r,++i,t))!=null&&(n<r||n===void 0&&r>=r)&&(n=r)}return n}function Fd(t,e){let n;for(const i of t)i!=null&&(n>i||n===void 0&&i>=i)&&(n=i);return n}function x_(t,e,n=0,i=1/0,r){if(e=Math.floor(e),n=Math.floor(Math.max(0,n)),i=Math.floor(Math.min(t.length-1,i)),!(n<=e&&e<=i))return t;for(r=r===void 0?v_:Pb(r);i>n;){if(i-n>600){const l=i-n+1,c=e-n+1,d=Math.log(l),f=.5*Math.exp(2*d/3),u=.5*Math.sqrt(d*f*(l-f)/l)*(c-l/2<0?-1:1),p=Math.max(n,Math.floor(e-c*f/l+u)),x=Math.min(i,Math.floor(e+(l-c)*f/l+u));x_(t,e,p,x,r)}const o=t[e];let s=n,a=i;for(ws(t,n,e),r(t[i],o)>0&&ws(t,n,i);s<a;){for(ws(t,s,a),++s,--a;r(t[s],o)<0;)++s;for(;r(t[a],o)>0;)--a}r(t[n],o)===0?ws(t,n,a):(++a,ws(t,a,i)),a<=e&&(n=a+1),e<=a&&(i=a-1)}return t}function ws(t,e,n){const i=t[e];t[e]=t[n],t[n]=i}function Bl(t,e,n){if(t=Float64Array.from(Eb(t)),!(!(i=t.length)||isNaN(e=+e))){if(e<=0||i<2)return Fd(t);if(e>=1)return Ys(t);var i,r=(i-1)*e,o=Math.floor(r),s=Ys(x_(t,o).subarray(0,o+1)),a=Fd(t.subarray(o+1));return s+(a-s)*(r-o)}}function Sl(t,e){let n=0,i=0;if(e===void 0)for(let r of t)r!=null&&(r=+r)>=r&&(++n,i+=r);else{let r=-1;for(let o of t)(o=e(o,++r,t))!=null&&(o=+o)>=o&&(++n,i+=o)}if(n)return i/n}function Fb(t,e){return Bl(t,.5)}function zb(t,e,n){t=+t,e=+e,n=(r=arguments.length)<2?(e=t,t=0,1):r<3?1:+n;for(var i=-1,r=Math.max(0,Math.ceil((e-t)/n))|0,o=new Array(r);++i<r;)o[i]=t+i*n;return o}function kb(t){return t}var bf=1,Vl=2,zd=3,Ps=4,n0=1e-6;function Bb(t){return"translate("+t+",0)"}function Vb(t){return"translate(0,"+t+")"}function Hb(t){return e=>+t(e)}function Gb(t,e){return e=Math.max(0,t.bandwidth()-e*2)/2,t.round()&&(e=Math.round(e)),n=>+t(n)+e}function Wb(){return!this.__axis}function np(t,e){var n=[],i=null,r=null,o=6,s=6,a=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=t===bf||t===Ps?-1:1,d=t===Ps||t===Vl?"x":"y",f=t===bf||t===zd?Bb:Vb;function u(p){var x=i??(e.ticks?e.ticks.apply(e,n):e.domain()),_=r??(e.tickFormat?e.tickFormat.apply(e,n):kb),m=Math.max(o,0)+a,h=e.range(),v=+h[0]+l,g=+h[h.length-1]+l,S=(e.bandwidth?Gb:Hb)(e.copy(),l),b=p.selection?p.selection():p,w=b.selectAll(".domain").data([null]),A=b.selectAll(".tick").data(x,e).order(),T=A.exit(),y=A.enter().append("g").attr("class","tick"),E=A.select("line"),R=A.select("text");w=w.merge(w.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),A=A.merge(y),E=E.merge(y.append("line").attr("stroke","currentColor").attr(d+"2",c*o)),R=R.merge(y.append("text").attr("fill","currentColor").attr(d,c*m).attr("dy",t===bf?"0em":t===zd?"0.71em":"0.32em")),p!==b&&(w=w.transition(p),A=A.transition(p),E=E.transition(p),R=R.transition(p),T=T.transition(p).attr("opacity",n0).attr("transform",function(D){return isFinite(D=S(D))?f(D+l):this.getAttribute("transform")}),y.attr("opacity",n0).attr("transform",function(D){var U=this.parentNode.__axis;return f((U&&isFinite(U=U(D))?U:S(D))+l)})),T.remove(),w.attr("d",t===Ps||t===Vl?s?"M"+c*s+","+v+"H"+l+"V"+g+"H"+c*s:"M"+l+","+v+"V"+g:s?"M"+v+","+c*s+"V"+l+"H"+g+"V"+c*s:"M"+v+","+l+"H"+g),A.attr("opacity",1).attr("transform",function(D){return f(S(D)+l)}),E.attr(d+"2",c*o),R.attr(d,c*m).text(_),b.filter(Wb).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Vl?"start":t===Ps?"end":"middle"),b.each(function(){this.__axis=S})}return u.scale=function(p){return arguments.length?(e=p,u):e},u.ticks=function(){return n=Array.from(arguments),u},u.tickArguments=function(p){return arguments.length?(n=p==null?[]:Array.from(p),u):n.slice()},u.tickValues=function(p){return arguments.length?(i=p==null?null:Array.from(p),u):i&&i.slice()},u.tickFormat=function(p){return arguments.length?(r=p,u):r},u.tickSize=function(p){return arguments.length?(o=s=+p,u):o},u.tickSizeInner=function(p){return arguments.length?(o=+p,u):o},u.tickSizeOuter=function(p){return arguments.length?(s=+p,u):s},u.tickPadding=function(p){return arguments.length?(a=+p,u):a},u.offset=function(p){return arguments.length?(l=+p,u):l},u}function Xb(t){return np(Vl,t)}function Cf(t){return np(zd,t)}function Rf(t){return np(Ps,t)}var jb={value:()=>{}};function __(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Hl(n)}function Hl(t){this._=t}function Yb(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Hl.prototype=__.prototype={constructor:Hl,on:function(t,e){var n=this._,i=Yb(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=qb(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=i0(n[r],t.name,e);else if(e==null)for(r in n)n[r]=i0(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Hl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function qb(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function i0(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=jb,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var kd="http://www.w3.org/1999/xhtml";const r0={svg:"http://www.w3.org/2000/svg",xhtml:kd,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function su(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),r0.hasOwnProperty(e)?{space:r0[e],local:t}:t}function Kb(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===kd&&e.documentElement.namespaceURI===kd?e.createElement(t):e.createElementNS(n,t)}}function Zb(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function y_(t){var e=su(t);return(e.local?Zb:Kb)(e)}function Qb(){}function ip(t){return t==null?Qb:function(){return this.querySelector(t)}}function Jb(t){typeof t!="function"&&(t=ip(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,c,d=0;d<s;++d)(l=o[d])&&(c=t.call(l,l.__data__,d,o))&&("__data__"in l&&(c.__data__=l.__data__),a[d]=c);return new Mn(i,this._parents)}function $b(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function eC(){return[]}function S_(t){return t==null?eC:function(){return this.querySelectorAll(t)}}function tC(t){return function(){return $b(t.apply(this,arguments))}}function nC(t){typeof t=="function"?t=tC(t):t=S_(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,c=0;c<a;++c)(l=s[c])&&(i.push(t.call(l,l.__data__,c,s)),r.push(l));return new Mn(i,r)}function M_(t){return function(){return this.matches(t)}}function E_(t){return function(e){return e.matches(t)}}var iC=Array.prototype.find;function rC(t){return function(){return iC.call(this.children,t)}}function oC(){return this.firstElementChild}function sC(t){return this.select(t==null?oC:rC(typeof t=="function"?t:E_(t)))}var aC=Array.prototype.filter;function lC(){return Array.from(this.children)}function cC(t){return function(){return aC.call(this.children,t)}}function uC(t){return this.selectAll(t==null?lC:cC(typeof t=="function"?t:E_(t)))}function fC(t){typeof t!="function"&&(t=M_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,c=0;c<s;++c)(l=o[c])&&t.call(l,l.__data__,c,o)&&a.push(l);return new Mn(i,this._parents)}function w_(t){return new Array(t.length)}function dC(){return new Mn(this._enter||this._groups.map(w_),this._parents)}function bc(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}bc.prototype={constructor:bc,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function hC(t){return function(){return t}}function pC(t,e,n,i,r,o){for(var s=0,a,l=e.length,c=o.length;s<c;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new bc(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function mC(t,e,n,i,r,o,s){var a,l,c=new Map,d=e.length,f=o.length,u=new Array(d),p;for(a=0;a<d;++a)(l=e[a])&&(u[a]=p=s.call(l,l.__data__,a,e)+"",c.has(p)?r[a]=l:c.set(p,l));for(a=0;a<f;++a)p=s.call(t,o[a],a,o)+"",(l=c.get(p))?(i[a]=l,l.__data__=o[a],c.delete(p)):n[a]=new bc(t,o[a]);for(a=0;a<d;++a)(l=e[a])&&c.get(u[a])===l&&(r[a]=l)}function gC(t){return t.__data__}function vC(t,e){if(!arguments.length)return Array.from(this,gC);var n=e?mC:pC,i=this._parents,r=this._groups;typeof t!="function"&&(t=hC(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),c=0;c<o;++c){var d=i[c],f=r[c],u=f.length,p=xC(t.call(d,d&&d.__data__,c,i)),x=p.length,_=a[c]=new Array(x),m=s[c]=new Array(x),h=l[c]=new Array(u);n(d,f,_,m,h,p,e);for(var v=0,g=0,S,b;v<x;++v)if(S=_[v]){for(v>=g&&(g=v+1);!(b=m[g])&&++g<x;);S._next=b||null}}return s=new Mn(s,i),s._enter=a,s._exit=l,s}function xC(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function _C(){return new Mn(this._exit||this._groups.map(w_),this._parents)}function yC(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function SC(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var c=n[l],d=i[l],f=c.length,u=a[l]=new Array(f),p,x=0;x<f;++x)(p=c[x]||d[x])&&(u[x]=p);for(;l<r;++l)a[l]=n[l];return new Mn(a,this._parents)}function MC(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function EC(t){t||(t=wC);function e(f,u){return f&&u?t(f.__data__,u.__data__):!f-!u}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),c,d=0;d<a;++d)(c=s[d])&&(l[d]=c);l.sort(e)}return new Mn(r,this._parents).order()}function wC(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function TC(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function AC(){return Array.from(this)}function bC(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function CC(){let t=0;for(const e of this)++t;return t}function RC(){return!this.node()}function LC(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function PC(t){return function(){this.removeAttribute(t)}}function DC(t){return function(){this.removeAttributeNS(t.space,t.local)}}function NC(t,e){return function(){this.setAttribute(t,e)}}function IC(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function UC(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function OC(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function FC(t,e){var n=su(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?DC:PC:typeof e=="function"?n.local?OC:UC:n.local?IC:NC)(n,e))}function T_(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function zC(t){return function(){this.style.removeProperty(t)}}function kC(t,e,n){return function(){this.style.setProperty(t,e,n)}}function BC(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function VC(t,e,n){return arguments.length>1?this.each((e==null?zC:typeof e=="function"?BC:kC)(t,e,n??"")):Jo(this.node(),t)}function Jo(t,e){return t.style.getPropertyValue(e)||T_(t).getComputedStyle(t,null).getPropertyValue(e)}function HC(t){return function(){delete this[t]}}function GC(t,e){return function(){this[t]=e}}function WC(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function XC(t,e){return arguments.length>1?this.each((e==null?HC:typeof e=="function"?WC:GC)(t,e)):this.node()[t]}function A_(t){return t.trim().split(/^|\s+/)}function rp(t){return t.classList||new b_(t)}function b_(t){this._node=t,this._names=A_(t.getAttribute("class")||"")}b_.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function C_(t,e){for(var n=rp(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function R_(t,e){for(var n=rp(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function jC(t){return function(){C_(this,t)}}function YC(t){return function(){R_(this,t)}}function qC(t,e){return function(){(e.apply(this,arguments)?C_:R_)(this,t)}}function KC(t,e){var n=A_(t+"");if(arguments.length<2){for(var i=rp(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?qC:e?jC:YC)(n,e))}function ZC(){this.textContent=""}function QC(t){return function(){this.textContent=t}}function JC(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function $C(t){return arguments.length?this.each(t==null?ZC:(typeof t=="function"?JC:QC)(t)):this.node().textContent}function eR(){this.innerHTML=""}function tR(t){return function(){this.innerHTML=t}}function nR(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function iR(t){return arguments.length?this.each(t==null?eR:(typeof t=="function"?nR:tR)(t)):this.node().innerHTML}function rR(){this.nextSibling&&this.parentNode.appendChild(this)}function oR(){return this.each(rR)}function sR(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function aR(){return this.each(sR)}function lR(t){var e=typeof t=="function"?t:y_(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function cR(){return null}function uR(t,e){var n=typeof t=="function"?t:y_(t),i=e==null?cR:typeof e=="function"?e:ip(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function fR(){var t=this.parentNode;t&&t.removeChild(this)}function dR(){return this.each(fR)}function hR(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function pR(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function mR(t){return this.select(t?pR:hR)}function gR(t){return arguments.length?this.property("__data__",t):this.node().__data__}function vR(t){return function(e){t.call(this,e,this.__data__)}}function xR(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function _R(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function yR(t,e,n){return function(){var i=this.__on,r,o=vR(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function SR(t,e,n){var i=xR(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,d;l<c;++l)for(r=0,d=a[l];r<o;++r)if((s=i[r]).type===d.type&&s.name===d.name)return d.value}return}for(a=e?yR:_R,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function L_(t,e,n){var i=T_(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function MR(t,e){return function(){return L_(this,t,e)}}function ER(t,e){return function(){return L_(this,t,e.apply(this,arguments))}}function wR(t,e){return this.each((typeof e=="function"?ER:MR)(t,e))}function*TR(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var P_=[null];function Mn(t,e){this._groups=t,this._parents=e}function wa(){return new Mn([[document.documentElement]],P_)}function AR(){return this}Mn.prototype=wa.prototype={constructor:Mn,select:Jb,selectAll:nC,selectChild:sC,selectChildren:uC,filter:fC,data:vC,enter:dC,exit:_C,join:yC,merge:SC,selection:AR,order:MC,sort:EC,call:TC,nodes:AC,node:bC,size:CC,empty:RC,each:LC,attr:FC,style:VC,property:XC,classed:KC,text:$C,html:iR,raise:oR,lower:aR,append:lR,insert:uR,remove:dR,clone:mR,datum:gR,on:SR,dispatch:wR,[Symbol.iterator]:TR};function bn(t){return typeof t=="string"?new Mn([[document.querySelector(t)]],[document.documentElement]):new Mn([[t]],P_)}function op(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function D_(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function Ta(){}var da=.7,Cc=1/da,Bo="\\s*([+-]?\\d+)\\s*",ha="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",si="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",bR=/^#([0-9a-f]{3,8})$/,CR=new RegExp(`^rgb\\(${Bo},${Bo},${Bo}\\)$`),RR=new RegExp(`^rgb\\(${si},${si},${si}\\)$`),LR=new RegExp(`^rgba\\(${Bo},${Bo},${Bo},${ha}\\)$`),PR=new RegExp(`^rgba\\(${si},${si},${si},${ha}\\)$`),DR=new RegExp(`^hsl\\(${ha},${si},${si}\\)$`),NR=new RegExp(`^hsla\\(${ha},${si},${si},${ha}\\)$`),o0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};op(Ta,Wr,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:s0,formatHex:s0,formatHex8:IR,formatHsl:UR,formatRgb:a0,toString:a0});function s0(){return this.rgb().formatHex()}function IR(){return this.rgb().formatHex8()}function UR(){return N_(this).formatHsl()}function a0(){return this.rgb().formatRgb()}function Wr(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=bR.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?l0(e):n===3?new on(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?Ml(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?Ml(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=CR.exec(t))?new on(e[1],e[2],e[3],1):(e=RR.exec(t))?new on(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=LR.exec(t))?Ml(e[1],e[2],e[3],e[4]):(e=PR.exec(t))?Ml(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=DR.exec(t))?f0(e[1],e[2]/100,e[3]/100,1):(e=NR.exec(t))?f0(e[1],e[2]/100,e[3]/100,e[4]):o0.hasOwnProperty(t)?l0(o0[t]):t==="transparent"?new on(NaN,NaN,NaN,0):null}function l0(t){return new on(t>>16&255,t>>8&255,t&255,1)}function Ml(t,e,n,i){return i<=0&&(t=e=n=NaN),new on(t,e,n,i)}function OR(t){return t instanceof Ta||(t=Wr(t)),t?(t=t.rgb(),new on(t.r,t.g,t.b,t.opacity)):new on}function Bd(t,e,n,i){return arguments.length===1?OR(t):new on(t,e,n,i??1)}function on(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}op(on,Bd,D_(Ta,{brighter(t){return t=t==null?Cc:Math.pow(Cc,t),new on(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?da:Math.pow(da,t),new on(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new on(Fr(this.r),Fr(this.g),Fr(this.b),Rc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:c0,formatHex:c0,formatHex8:FR,formatRgb:u0,toString:u0}));function c0(){return`#${Dr(this.r)}${Dr(this.g)}${Dr(this.b)}`}function FR(){return`#${Dr(this.r)}${Dr(this.g)}${Dr(this.b)}${Dr((isNaN(this.opacity)?1:this.opacity)*255)}`}function u0(){const t=Rc(this.opacity);return`${t===1?"rgb(":"rgba("}${Fr(this.r)}, ${Fr(this.g)}, ${Fr(this.b)}${t===1?")":`, ${t})`}`}function Rc(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Fr(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Dr(t){return t=Fr(t),(t<16?"0":"")+t.toString(16)}function f0(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Yn(t,e,n,i)}function N_(t){if(t instanceof Yn)return new Yn(t.h,t.s,t.l,t.opacity);if(t instanceof Ta||(t=Wr(t)),!t)return new Yn;if(t instanceof Yn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),o=Math.max(e,n,i),s=NaN,a=o-r,l=(o+r)/2;return a?(e===o?s=(n-i)/a+(n<i)*6:n===o?s=(i-e)/a+2:s=(e-n)/a+4,a/=l<.5?o+r:2-o-r,s*=60):a=l>0&&l<1?0:s,new Yn(s,a,l,t.opacity)}function zR(t,e,n,i){return arguments.length===1?N_(t):new Yn(t,e,n,i??1)}function Yn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}op(Yn,zR,D_(Ta,{brighter(t){return t=t==null?Cc:Math.pow(Cc,t),new Yn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?da:Math.pow(da,t),new Yn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new on(Lf(t>=240?t-240:t+120,r,i),Lf(t,r,i),Lf(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new Yn(d0(this.h),El(this.s),El(this.l),Rc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Rc(this.opacity);return`${t===1?"hsl(":"hsla("}${d0(this.h)}, ${El(this.s)*100}%, ${El(this.l)*100}%${t===1?")":`, ${t})`}`}}));function d0(t){return t=(t||0)%360,t<0?t+360:t}function El(t){return Math.max(0,Math.min(1,t||0))}function Lf(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const sp=t=>()=>t;function kR(t,e){return function(n){return t+n*e}}function BR(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function VR(t){return(t=+t)==1?I_:function(e,n){return n-e?BR(e,n,t):sp(isNaN(e)?n:e)}}function I_(t,e){var n=e-t;return n?kR(t,n):sp(isNaN(t)?e:t)}const Lc=function t(e){var n=VR(e);function i(r,o){var s=n((r=Bd(r)).r,(o=Bd(o)).r),a=n(r.g,o.g),l=n(r.b,o.b),c=I_(r.opacity,o.opacity);return function(d){return r.r=s(d),r.g=a(d),r.b=l(d),r.opacity=c(d),r+""}}return i.gamma=t,i}(1);function HR(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,i=e.slice(),r;return function(o){for(r=0;r<n;++r)i[r]=t[r]*(1-o)+e[r]*o;return i}}function GR(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function WR(t,e){var n=e?e.length:0,i=t?Math.min(n,t.length):0,r=new Array(i),o=new Array(n),s;for(s=0;s<i;++s)r[s]=au(t[s],e[s]);for(;s<n;++s)o[s]=e[s];return function(a){for(s=0;s<i;++s)o[s]=r[s](a);return o}}function XR(t,e){var n=new Date;return t=+t,e=+e,function(i){return n.setTime(t*(1-i)+e*i),n}}function Wn(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function jR(t,e){var n={},i={},r;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in t?n[r]=au(t[r],e[r]):i[r]=e[r];return function(o){for(r in n)i[r]=n[r](o);return i}}var Vd=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Pf=new RegExp(Vd.source,"g");function YR(t){return function(){return t}}function qR(t){return function(e){return t(e)+""}}function U_(t,e){var n=Vd.lastIndex=Pf.lastIndex=0,i,r,o,s=-1,a=[],l=[];for(t=t+"",e=e+"";(i=Vd.exec(t))&&(r=Pf.exec(e));)(o=r.index)>n&&(o=e.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(i=i[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,l.push({i:s,x:Wn(i,r)})),n=Pf.lastIndex;return n<e.length&&(o=e.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?qR(l[0].x):YR(e):(e=l.length,function(c){for(var d=0,f;d<e;++d)a[(f=l[d]).i]=f.x(c);return a.join("")})}function au(t,e){var n=typeof e,i;return e==null||n==="boolean"?sp(e):(n==="number"?Wn:n==="string"?(i=Wr(e))?(e=i,Lc):U_:e instanceof Wr?Lc:e instanceof Date?XR:GR(e)?HR:Array.isArray(e)?WR:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?jR:Wn)(t,e)}function O_(t,e){return t=+t,e=+e,function(n){return Math.round(t*(1-n)+e*n)}}var h0=180/Math.PI,Hd={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function F_(t,e,n,i,r,o){var s,a,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,s=-s),{translateX:r,translateY:o,rotate:Math.atan2(e,t)*h0,skewX:Math.atan(l)*h0,scaleX:s,scaleY:a}}var wl;function KR(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?Hd:F_(e.a,e.b,e.c,e.d,e.e,e.f)}function ZR(t){return t==null||(wl||(wl=document.createElementNS("http://www.w3.org/2000/svg","g")),wl.setAttribute("transform",t),!(t=wl.transform.baseVal.consolidate()))?Hd:(t=t.matrix,F_(t.a,t.b,t.c,t.d,t.e,t.f))}function z_(t,e,n,i){function r(c){return c.length?c.pop()+" ":""}function o(c,d,f,u,p,x){if(c!==f||d!==u){var _=p.push("translate(",null,e,null,n);x.push({i:_-4,x:Wn(c,f)},{i:_-2,x:Wn(d,u)})}else(f||u)&&p.push("translate("+f+e+u+n)}function s(c,d,f,u){c!==d?(c-d>180?d+=360:d-c>180&&(c+=360),u.push({i:f.push(r(f)+"rotate(",null,i)-2,x:Wn(c,d)})):d&&f.push(r(f)+"rotate("+d+i)}function a(c,d,f,u){c!==d?u.push({i:f.push(r(f)+"skewX(",null,i)-2,x:Wn(c,d)}):d&&f.push(r(f)+"skewX("+d+i)}function l(c,d,f,u,p,x){if(c!==f||d!==u){var _=p.push(r(p)+"scale(",null,",",null,")");x.push({i:_-4,x:Wn(c,f)},{i:_-2,x:Wn(d,u)})}else(f!==1||u!==1)&&p.push(r(p)+"scale("+f+","+u+")")}return function(c,d){var f=[],u=[];return c=t(c),d=t(d),o(c.translateX,c.translateY,d.translateX,d.translateY,f,u),s(c.rotate,d.rotate,f,u),a(c.skewX,d.skewX,f,u),l(c.scaleX,c.scaleY,d.scaleX,d.scaleY,f,u),c=d=null,function(p){for(var x=-1,_=u.length,m;++x<_;)f[(m=u[x]).i]=m.x(p);return f.join("")}}}var QR=z_(KR,"px, ","px)","deg)"),JR=z_(ZR,", ",")",")"),$o=0,Ds=0,Ts=0,k_=1e3,Pc,Ns,Dc=0,Xr=0,lu=0,pa=typeof performance=="object"&&performance.now?performance:Date,B_=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function ap(){return Xr||(B_($R),Xr=pa.now()+lu)}function $R(){Xr=0}function Nc(){this._call=this._time=this._next=null}Nc.prototype=V_.prototype={constructor:Nc,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?ap():+n)+(e==null?0:+e),!this._next&&Ns!==this&&(Ns?Ns._next=this:Pc=this,Ns=this),this._call=t,this._time=n,Gd()},stop:function(){this._call&&(this._call=null,this._time=1/0,Gd())}};function V_(t,e,n){var i=new Nc;return i.restart(t,e,n),i}function eL(){ap(),++$o;for(var t=Pc,e;t;)(e=Xr-t._time)>=0&&t._call.call(void 0,e),t=t._next;--$o}function p0(){Xr=(Dc=pa.now())+lu,$o=Ds=0;try{eL()}finally{$o=0,nL(),Xr=0}}function tL(){var t=pa.now(),e=t-Dc;e>k_&&(lu-=e,Dc=t)}function nL(){for(var t,e=Pc,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Pc=n);Ns=t,Gd(i)}function Gd(t){if(!$o){Ds&&(Ds=clearTimeout(Ds));var e=t-Xr;e>24?(t<1/0&&(Ds=setTimeout(p0,t-pa.now()-lu)),Ts&&(Ts=clearInterval(Ts))):(Ts||(Dc=pa.now(),Ts=setInterval(tL,k_)),$o=1,B_(p0))}}function m0(t,e,n){var i=new Nc;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var iL=__("start","end","cancel","interrupt"),rL=[],H_=0,g0=1,Wd=2,Gl=3,v0=4,Xd=5,Wl=6;function cu(t,e,n,i,r,o){var s=t.__transition;if(!s)t.__transition={};else if(n in s)return;oL(t,n,{name:e,index:i,group:r,on:iL,tween:rL,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:H_})}function lp(t,e){var n=Jn(t,e);if(n.state>H_)throw new Error("too late; already scheduled");return n}function li(t,e){var n=Jn(t,e);if(n.state>Gl)throw new Error("too late; already running");return n}function Jn(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function oL(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=V_(o,0,n.time);function o(c){n.state=g0,n.timer.restart(s,n.delay,n.time),n.delay<=c&&s(c-n.delay)}function s(c){var d,f,u,p;if(n.state!==g0)return l();for(d in i)if(p=i[d],p.name===n.name){if(p.state===Gl)return m0(s);p.state===v0?(p.state=Wl,p.timer.stop(),p.on.call("interrupt",t,t.__data__,p.index,p.group),delete i[d]):+d<e&&(p.state=Wl,p.timer.stop(),p.on.call("cancel",t,t.__data__,p.index,p.group),delete i[d])}if(m0(function(){n.state===Gl&&(n.state=v0,n.timer.restart(a,n.delay,n.time),a(c))}),n.state=Wd,n.on.call("start",t,t.__data__,n.index,n.group),n.state===Wd){for(n.state=Gl,r=new Array(u=n.tween.length),d=0,f=-1;d<u;++d)(p=n.tween[d].value.call(t,t.__data__,n.index,n.group))&&(r[++f]=p);r.length=f+1}}function a(c){for(var d=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=Xd,1),f=-1,u=r.length;++f<u;)r[f].call(t,d);n.state===Xd&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=Wl,n.timer.stop(),delete i[e];for(var c in i)return;delete t.__transition}}function sL(t,e){var n=t.__transition,i,r,o=!0,s;if(n){e=e==null?null:e+"";for(s in n){if((i=n[s]).name!==e){o=!1;continue}r=i.state>Wd&&i.state<Xd,i.state=Wl,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[s]}o&&delete t.__transition}}function aL(t){return this.each(function(){sL(this,t)})}function lL(t,e){var n,i;return function(){var r=li(this,t),o=r.tween;if(o!==n){i=n=o;for(var s=0,a=i.length;s<a;++s)if(i[s].name===e){i=i.slice(),i.splice(s,1);break}}r.tween=i}}function cL(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var o=li(this,t),s=o.tween;if(s!==i){r=(i=s).slice();for(var a={name:e,value:n},l=0,c=r.length;l<c;++l)if(r[l].name===e){r[l]=a;break}l===c&&r.push(a)}o.tween=r}}function uL(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=Jn(this.node(),n).tween,r=0,o=i.length,s;r<o;++r)if((s=i[r]).name===t)return s.value;return null}return this.each((e==null?lL:cL)(n,t,e))}function cp(t,e,n){var i=t._id;return t.each(function(){var r=li(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return Jn(r,i).value[e]}}function G_(t,e){var n;return(typeof e=="number"?Wn:e instanceof Wr?Lc:(n=Wr(e))?(e=n,Lc):U_)(t,e)}function fL(t){return function(){this.removeAttribute(t)}}function dL(t){return function(){this.removeAttributeNS(t.space,t.local)}}function hL(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttribute(t);return s===r?null:s===i?o:o=e(i=s,n)}}function pL(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===r?null:s===i?o:o=e(i=s,n)}}function mL(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function gL(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function vL(t,e){var n=su(t),i=n==="transform"?JR:G_;return this.attrTween(t,typeof e=="function"?(n.local?gL:mL)(n,i,cp(this,"attr."+t,e)):e==null?(n.local?dL:fL)(n):(n.local?pL:hL)(n,i,e))}function xL(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function _L(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function yL(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&_L(t,o)),n}return r._value=e,r}function SL(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&xL(t,o)),n}return r._value=e,r}function ML(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=su(t);return this.tween(n,(i.local?yL:SL)(i,e))}function EL(t,e){return function(){lp(this,t).delay=+e.apply(this,arguments)}}function wL(t,e){return e=+e,function(){lp(this,t).delay=e}}function TL(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?EL:wL)(e,t)):Jn(this.node(),e).delay}function AL(t,e){return function(){li(this,t).duration=+e.apply(this,arguments)}}function bL(t,e){return e=+e,function(){li(this,t).duration=e}}function CL(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?AL:bL)(e,t)):Jn(this.node(),e).duration}function RL(t,e){if(typeof e!="function")throw new Error;return function(){li(this,t).ease=e}}function LL(t){var e=this._id;return arguments.length?this.each(RL(e,t)):Jn(this.node(),e).ease}function PL(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;li(this,t).ease=n}}function DL(t){if(typeof t!="function")throw new Error;return this.each(PL(this._id,t))}function NL(t){typeof t!="function"&&(t=M_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,c=0;c<s;++c)(l=o[c])&&t.call(l,l.__data__,c,o)&&a.push(l);return new Di(i,this._parents,this._name,this._id)}function IL(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,o=Math.min(i,r),s=new Array(i),a=0;a<o;++a)for(var l=e[a],c=n[a],d=l.length,f=s[a]=new Array(d),u,p=0;p<d;++p)(u=l[p]||c[p])&&(f[p]=u);for(;a<i;++a)s[a]=e[a];return new Di(s,this._parents,this._name,this._id)}function UL(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function OL(t,e,n){var i,r,o=UL(e)?lp:li;return function(){var s=o(this,t),a=s.on;a!==i&&(r=(i=a).copy()).on(e,n),s.on=r}}function FL(t,e){var n=this._id;return arguments.length<2?Jn(this.node(),n).on.on(t):this.each(OL(n,t,e))}function zL(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function kL(){return this.on("end.remove",zL(this._id))}function BL(t){var e=this._name,n=this._id;typeof t!="function"&&(t=ip(t));for(var i=this._groups,r=i.length,o=new Array(r),s=0;s<r;++s)for(var a=i[s],l=a.length,c=o[s]=new Array(l),d,f,u=0;u<l;++u)(d=a[u])&&(f=t.call(d,d.__data__,u,a))&&("__data__"in d&&(f.__data__=d.__data__),c[u]=f,cu(c[u],e,n,u,c,Jn(d,n)));return new Di(o,this._parents,e,n)}function VL(t){var e=this._name,n=this._id;typeof t!="function"&&(t=S_(t));for(var i=this._groups,r=i.length,o=[],s=[],a=0;a<r;++a)for(var l=i[a],c=l.length,d,f=0;f<c;++f)if(d=l[f]){for(var u=t.call(d,d.__data__,f,l),p,x=Jn(d,n),_=0,m=u.length;_<m;++_)(p=u[_])&&cu(p,e,n,_,u,x);o.push(u),s.push(d)}return new Di(o,s,e,n)}var HL=wa.prototype.constructor;function GL(){return new HL(this._groups,this._parents)}function WL(t,e){var n,i,r;return function(){var o=Jo(this,t),s=(this.style.removeProperty(t),Jo(this,t));return o===s?null:o===n&&s===i?r:r=e(n=o,i=s)}}function W_(t){return function(){this.style.removeProperty(t)}}function XL(t,e,n){var i,r=n+"",o;return function(){var s=Jo(this,t);return s===r?null:s===i?o:o=e(i=s,n)}}function jL(t,e,n){var i,r,o;return function(){var s=Jo(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),Jo(this,t))),s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a))}}function YL(t,e){var n,i,r,o="style."+e,s="end."+o,a;return function(){var l=li(this,t),c=l.on,d=l.value[o]==null?a||(a=W_(e)):void 0;(c!==n||r!==d)&&(i=(n=c).copy()).on(s,r=d),l.on=i}}function qL(t,e,n){var i=(t+="")=="transform"?QR:G_;return e==null?this.styleTween(t,WL(t,i)).on("end.style."+t,W_(t)):typeof e=="function"?this.styleTween(t,jL(t,i,cp(this,"style."+t,e))).each(YL(this._id,t)):this.styleTween(t,XL(t,i,e),n).on("end.style."+t,null)}function KL(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function ZL(t,e,n){var i,r;function o(){var s=e.apply(this,arguments);return s!==r&&(i=(r=s)&&KL(t,s,n)),i}return o._value=e,o}function QL(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,ZL(t,e,n??""))}function JL(t){return function(){this.textContent=t}}function $L(t){return function(){var e=t(this);this.textContent=e??""}}function e3(t){return this.tween("text",typeof t=="function"?$L(cp(this,"text",t)):JL(t==null?"":t+""))}function t3(t){return function(e){this.textContent=t.call(this,e)}}function n3(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&t3(r)),e}return i._value=t,i}function i3(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,n3(t))}function r3(){for(var t=this._name,e=this._id,n=X_(),i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,c=0;c<a;++c)if(l=s[c]){var d=Jn(l,e);cu(l,t,n,c,s,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Di(i,this._parents,t,n)}function o3(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--r===0&&o()}};n.each(function(){var c=li(this,i),d=c.on;d!==t&&(e=(t=d).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),c.on=e}),r===0&&o()})}var s3=0;function Di(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function X_(){return++s3}var mi=wa.prototype;Di.prototype={constructor:Di,select:BL,selectAll:VL,selectChild:mi.selectChild,selectChildren:mi.selectChildren,filter:NL,merge:IL,selection:GL,transition:r3,call:mi.call,nodes:mi.nodes,node:mi.node,size:mi.size,empty:mi.empty,each:mi.each,on:FL,attr:vL,attrTween:ML,style:qL,styleTween:QL,text:e3,textTween:i3,remove:kL,tween:uL,delay:TL,duration:CL,ease:LL,easeVarying:DL,end:o3,[Symbol.iterator]:mi[Symbol.iterator]};function a3(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var l3={time:null,delay:0,duration:250,ease:a3};function c3(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function u3(t){var e,n;t instanceof Di?(e=t._id,t=t._name):(e=X_(),(n=l3).time=ap(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,c=0;c<a;++c)(l=s[c])&&cu(l,t,e,c,s,n||c3(l,e));return new Di(i,this._parents,t,e)}wa.prototype.interrupt=aL;wa.prototype.transition=u3;const jd=Math.PI,Yd=2*jd,Ar=1e-6,f3=Yd-Ar;function j_(t){this._+=t[0];for(let e=1,n=t.length;e<n;++e)this._+=arguments[e]+t[e]}function d3(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return j_;const n=10**e;return function(i){this._+=i[0];for(let r=1,o=i.length;r<o;++r)this._+=Math.round(arguments[r]*n)/n+i[r]}}class h3{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=e==null?j_:d3(e)}moveTo(e,n){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,n){this._append`L${this._x1=+e},${this._y1=+n}`}quadraticCurveTo(e,n,i,r){this._append`Q${+e},${+n},${this._x1=+i},${this._y1=+r}`}bezierCurveTo(e,n,i,r,o,s){this._append`C${+e},${+n},${+i},${+r},${this._x1=+o},${this._y1=+s}`}arcTo(e,n,i,r,o){if(e=+e,n=+n,i=+i,r=+r,o=+o,o<0)throw new Error(`negative radius: ${o}`);let s=this._x1,a=this._y1,l=i-e,c=r-n,d=s-e,f=a-n,u=d*d+f*f;if(this._x1===null)this._append`M${this._x1=e},${this._y1=n}`;else if(u>Ar)if(!(Math.abs(f*l-c*d)>Ar)||!o)this._append`L${this._x1=e},${this._y1=n}`;else{let p=i-s,x=r-a,_=l*l+c*c,m=p*p+x*x,h=Math.sqrt(_),v=Math.sqrt(u),g=o*Math.tan((jd-Math.acos((_+u-m)/(2*h*v)))/2),S=g/v,b=g/h;Math.abs(S-1)>Ar&&this._append`L${e+S*d},${n+S*f}`,this._append`A${o},${o},0,0,${+(f*p>d*x)},${this._x1=e+b*l},${this._y1=n+b*c}`}}arc(e,n,i,r,o,s){if(e=+e,n=+n,i=+i,s=!!s,i<0)throw new Error(`negative radius: ${i}`);let a=i*Math.cos(r),l=i*Math.sin(r),c=e+a,d=n+l,f=1^s,u=s?r-o:o-r;this._x1===null?this._append`M${c},${d}`:(Math.abs(this._x1-c)>Ar||Math.abs(this._y1-d)>Ar)&&this._append`L${c},${d}`,i&&(u<0&&(u=u%Yd+Yd),u>f3?this._append`A${i},${i},0,1,${f},${e-a},${n-l}A${i},${i},0,1,${f},${this._x1=c},${this._y1=d}`:u>Ar&&this._append`A${i},${i},0,${+(u>=jd)},${f},${this._x1=e+i*Math.cos(o)},${this._y1=n+i*Math.sin(o)}`)}rect(e,n,i,r){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+n}h${i=+i}v${+r}h${-i}Z`}toString(){return this._}}function p3(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function Ic(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,i=t.slice(0,n);return[i.length>1?i[0]+i.slice(2):i,+t.slice(n+1)]}function es(t){return t=Ic(Math.abs(t)),t?t[1]:NaN}function m3(t,e){return function(n,i){for(var r=n.length,o=[],s=0,a=t[0],l=0;r>0&&a>0&&(l+a+1>i&&(a=Math.max(1,i-l)),o.push(n.substring(r-=a,r+a)),!((l+=a+1)>i));)a=t[s=(s+1)%t.length];return o.reverse().join(e)}}function g3(t){return function(e){return e.replace(/[0-9]/g,function(n){return t[+n]})}}var v3=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Uc(t){if(!(e=v3.exec(t)))throw new Error("invalid format: "+t);var e;return new up({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}Uc.prototype=up.prototype;function up(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}up.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function x3(t){e:for(var e=t.length,n=1,i=-1,r;n<e;++n)switch(t[n]){case".":i=r=n;break;case"0":i===0&&(i=n),r=n;break;default:if(!+t[n])break e;i>0&&(i=0);break}return i>0?t.slice(0,i)+t.slice(r+1):t}var Y_;function _3(t,e){var n=Ic(t,e);if(!n)return t+"";var i=n[0],r=n[1],o=r-(Y_=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,s=i.length;return o===s?i:o>s?i+new Array(o-s+1).join("0"):o>0?i.slice(0,o)+"."+i.slice(o):"0."+new Array(1-o).join("0")+Ic(t,Math.max(0,e+o-1))[0]}function x0(t,e){var n=Ic(t,e);if(!n)return t+"";var i=n[0],r=n[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}const _0={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:p3,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>x0(t*100,e),r:x0,s:_3,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function y0(t){return t}var S0=Array.prototype.map,M0=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function y3(t){var e=t.grouping===void 0||t.thousands===void 0?y0:m3(S0.call(t.grouping,Number),t.thousands+""),n=t.currency===void 0?"":t.currency[0]+"",i=t.currency===void 0?"":t.currency[1]+"",r=t.decimal===void 0?".":t.decimal+"",o=t.numerals===void 0?y0:g3(S0.call(t.numerals,String)),s=t.percent===void 0?"%":t.percent+"",a=t.minus===void 0?"−":t.minus+"",l=t.nan===void 0?"NaN":t.nan+"";function c(f){f=Uc(f);var u=f.fill,p=f.align,x=f.sign,_=f.symbol,m=f.zero,h=f.width,v=f.comma,g=f.precision,S=f.trim,b=f.type;b==="n"?(v=!0,b="g"):_0[b]||(g===void 0&&(g=12),S=!0,b="g"),(m||u==="0"&&p==="=")&&(m=!0,u="0",p="=");var w=_==="$"?n:_==="#"&&/[boxX]/.test(b)?"0"+b.toLowerCase():"",A=_==="$"?i:/[%p]/.test(b)?s:"",T=_0[b],y=/[defgprs%]/.test(b);g=g===void 0?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g));function E(R){var D=w,U=A,P,z,B;if(b==="c")U=T(R)+U,R="";else{R=+R;var W=R<0||1/R<0;if(R=isNaN(R)?l:T(Math.abs(R),g),S&&(R=x3(R)),W&&+R==0&&x!=="+"&&(W=!1),D=(W?x==="("?x:a:x==="-"||x==="("?"":x)+D,U=(b==="s"?M0[8+Y_/3]:"")+U+(W&&x==="("?")":""),y){for(P=-1,z=R.length;++P<z;)if(B=R.charCodeAt(P),48>B||B>57){U=(B===46?r+R.slice(P+1):R.slice(P))+U,R=R.slice(0,P);break}}}v&&!m&&(R=e(R,1/0));var I=D.length+R.length+U.length,F=I<h?new Array(h-I+1).join(u):"";switch(v&&m&&(R=e(F+R,F.length?h-U.length:1/0),F=""),p){case"<":R=D+R+U+F;break;case"=":R=D+F+R+U;break;case"^":R=F.slice(0,I=F.length>>1)+D+R+U+F.slice(I);break;default:R=F+D+R+U;break}return o(R)}return E.toString=function(){return f+""},E}function d(f,u){var p=c((f=Uc(f),f.type="f",f)),x=Math.max(-8,Math.min(8,Math.floor(es(u)/3)))*3,_=Math.pow(10,-x),m=M0[8+x/3];return function(h){return p(_*h)+m}}return{format:c,formatPrefix:d}}var Tl,q_,K_;S3({thousands:",",grouping:[3],currency:["$",""]});function S3(t){return Tl=y3(t),q_=Tl.format,K_=Tl.formatPrefix,Tl}function M3(t){return Math.max(0,-es(Math.abs(t)))}function E3(t,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(es(e)/3)))*3-es(Math.abs(t)))}function w3(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,es(e)-es(t))+1}function fp(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}function T3(t,e){switch(arguments.length){case 0:break;case 1:{typeof t=="function"?this.interpolator(t):this.range(t);break}default:{this.domain(t),typeof e=="function"?this.interpolator(e):this.range(e);break}}return this}const E0=Symbol("implicit");function Z_(){var t=new e0,e=[],n=[],i=E0;function r(o){let s=t.get(o);if(s===void 0){if(i!==E0)return i;t.set(o,s=e.push(o)-1)}return n[s%n.length]}return r.domain=function(o){if(!arguments.length)return e.slice();e=[],t=new e0;for(const s of o)t.has(s)||t.set(s,e.push(s)-1);return r},r.range=function(o){return arguments.length?(n=Array.from(o),r):n.slice()},r.unknown=function(o){return arguments.length?(i=o,r):i},r.copy=function(){return Z_(e,n).unknown(i)},fp.apply(r,arguments),r}function Is(){var t=Z_().unknown(void 0),e=t.domain,n=t.range,i=0,r=1,o,s,a=!1,l=0,c=0,d=.5;delete t.unknown;function f(){var u=e().length,p=r<i,x=p?r:i,_=p?i:r;o=(_-x)/Math.max(1,u-l+c*2),a&&(o=Math.floor(o)),x+=(_-x-o*(u-l))*d,s=o*(1-l),a&&(x=Math.round(x),s=Math.round(s));var m=zb(u).map(function(h){return x+o*h});return n(p?m.reverse():m)}return t.domain=function(u){return arguments.length?(e(u),f()):e()},t.range=function(u){return arguments.length?([i,r]=u,i=+i,r=+r,f()):[i,r]},t.rangeRound=function(u){return[i,r]=u,i=+i,r=+r,a=!0,f()},t.bandwidth=function(){return s},t.step=function(){return o},t.round=function(u){return arguments.length?(a=!!u,f()):a},t.padding=function(u){return arguments.length?(l=Math.min(1,c=+u),f()):l},t.paddingInner=function(u){return arguments.length?(l=Math.min(1,u),f()):l},t.paddingOuter=function(u){return arguments.length?(c=+u,f()):c},t.align=function(u){return arguments.length?(d=Math.max(0,Math.min(1,u)),f()):d},t.copy=function(){return Is(e(),[i,r]).round(a).paddingInner(l).paddingOuter(c).align(d)},fp.apply(f(),arguments)}function A3(t){return function(){return t}}function b3(t){return+t}var w0=[0,1];function Ki(t){return t}function qd(t,e){return(e-=t=+t)?function(n){return(n-t)/e}:A3(isNaN(e)?NaN:.5)}function C3(t,e){var n;return t>e&&(n=t,t=e,e=n),function(i){return Math.max(t,Math.min(e,i))}}function R3(t,e,n){var i=t[0],r=t[1],o=e[0],s=e[1];return r<i?(i=qd(r,i),o=n(s,o)):(i=qd(i,r),o=n(o,s)),function(a){return o(i(a))}}function L3(t,e,n){var i=Math.min(t.length,e.length)-1,r=new Array(i),o=new Array(i),s=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++s<i;)r[s]=qd(t[s],t[s+1]),o[s]=n(e[s],e[s+1]);return function(a){var l=Tb(t,a,1,i)-1;return o[l](r[l](a))}}function P3(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function D3(){var t=w0,e=w0,n=au,i,r,o,s=Ki,a,l,c;function d(){var u=Math.min(t.length,e.length);return s!==Ki&&(s=C3(t[0],t[u-1])),a=u>2?L3:R3,l=c=null,f}function f(u){return u==null||isNaN(u=+u)?o:(l||(l=a(t.map(i),e,n)))(i(s(u)))}return f.invert=function(u){return s(r((c||(c=a(e,t.map(i),Wn)))(u)))},f.domain=function(u){return arguments.length?(t=Array.from(u,b3),d()):t.slice()},f.range=function(u){return arguments.length?(e=Array.from(u),d()):e.slice()},f.rangeRound=function(u){return e=Array.from(u),n=O_,d()},f.clamp=function(u){return arguments.length?(s=u?!0:Ki,d()):s!==Ki},f.interpolate=function(u){return arguments.length?(n=u,d()):n},f.unknown=function(u){return arguments.length?(o=u,f):o},function(u,p){return i=u,r=p,d()}}function N3(){return D3()(Ki,Ki)}function I3(t,e,n,i){var r=Ob(t,e,n),o;switch(i=Uc(i??",f"),i.type){case"s":{var s=Math.max(Math.abs(t),Math.abs(e));return i.precision==null&&!isNaN(o=E3(r,s))&&(i.precision=o),K_(i,s)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(o=w3(r,Math.max(Math.abs(t),Math.abs(e))))&&(i.precision=o-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(o=M3(r))&&(i.precision=o-(i.type==="%")*2);break}}return q_(i)}function Q_(t){var e=t.domain;return t.ticks=function(n){var i=e();return Ub(i[0],i[i.length-1],n??10)},t.tickFormat=function(n,i){var r=e();return I3(r[0],r[r.length-1],n??10,i)},t.nice=function(n){n==null&&(n=10);var i=e(),r=0,o=i.length-1,s=i[r],a=i[o],l,c,d=10;for(a<s&&(c=s,s=a,a=c,c=r,r=o,o=c);d-- >0;){if(c=Od(s,a,n),c===l)return i[r]=s,i[o]=a,e(i);if(c>0)s=Math.floor(s/c)*c,a=Math.ceil(a/c)*c;else if(c<0)s=Math.ceil(s*c)/c,a=Math.floor(a*c)/c;else break;l=c}return t},t}function Xl(){var t=N3();return t.copy=function(){return P3(t,Xl())},fp.apply(t,arguments),Q_(t)}function U3(){var t=0,e=1,n,i,r,o,s=Ki,a=!1,l;function c(f){return f==null||isNaN(f=+f)?l:s(r===0?.5:(f=(o(f)-n)*r,a?Math.max(0,Math.min(1,f)):f))}c.domain=function(f){return arguments.length?([t,e]=f,n=o(t=+t),i=o(e=+e),r=n===i?0:1/(i-n),c):[t,e]},c.clamp=function(f){return arguments.length?(a=!!f,c):a},c.interpolator=function(f){return arguments.length?(s=f,c):s};function d(f){return function(u){var p,x;return arguments.length?([p,x]=u,s=f(p,x),c):[s(0),s(1)]}}return c.range=d(au),c.rangeRound=d(O_),c.unknown=function(f){return arguments.length?(l=f,c):l},function(f){return o=f,n=f(t),i=f(e),r=n===i?0:1/(i-n),c}}function O3(t,e){return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function J_(){var t=Q_(U3()(Ki));return t.copy=function(){return O3(t,J_())},T3.apply(t,arguments)}function uu(t){for(var e=t.length/6|0,n=new Array(e),i=0;i<e;)n[i]="#"+t.slice(i*6,++i*6);return n}function fu(t){var e=t.length;return function(n){return t[Math.max(0,Math.min(e-1,Math.floor(n*e)))]}}const F3=fu(uu("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));fu(uu("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));fu(uu("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));fu(uu("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));function Rt(t){return function(){return t}}const T0=1e-12;function $_(t){let e=3;return t.digits=function(n){if(!arguments.length)return e;if(n==null)e=null;else{const i=Math.floor(n);if(!(i>=0))throw new RangeError(`invalid digits: ${n}`);e=i}return t},()=>new h3(e)}function ey(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function ty(t){this._context=t}ty.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e);break}}};function ny(t){return new ty(t)}function iy(t){return t[0]}function ry(t){return t[1]}function z3(t,e){var n=Rt(!0),i=null,r=ny,o=null,s=$_(a);t=typeof t=="function"?t:t===void 0?iy:Rt(t),e=typeof e=="function"?e:e===void 0?ry:Rt(e);function a(l){var c,d=(l=ey(l)).length,f,u=!1,p;for(i==null&&(o=r(p=s())),c=0;c<=d;++c)!(c<d&&n(f=l[c],c,l))===u&&((u=!u)?o.lineStart():o.lineEnd()),u&&o.point(+t(f,c,l),+e(f,c,l));if(p)return o=null,p+""||null}return a.x=function(l){return arguments.length?(t=typeof l=="function"?l:Rt(+l),a):t},a.y=function(l){return arguments.length?(e=typeof l=="function"?l:Rt(+l),a):e},a.defined=function(l){return arguments.length?(n=typeof l=="function"?l:Rt(!!l),a):n},a.curve=function(l){return arguments.length?(r=l,i!=null&&(o=r(i)),a):r},a.context=function(l){return arguments.length?(l==null?i=o=null:o=r(i=l),a):i},a}function k3(t,e,n){var i=null,r=Rt(!0),o=null,s=ny,a=null,l=$_(c);t=typeof t=="function"?t:t===void 0?iy:Rt(+t),e=typeof e=="function"?e:Rt(e===void 0?0:+e),n=typeof n=="function"?n:n===void 0?ry:Rt(+n);function c(f){var u,p,x,_=(f=ey(f)).length,m,h=!1,v,g=new Array(_),S=new Array(_);for(o==null&&(a=s(v=l())),u=0;u<=_;++u){if(!(u<_&&r(m=f[u],u,f))===h)if(h=!h)p=u,a.areaStart(),a.lineStart();else{for(a.lineEnd(),a.lineStart(),x=u-1;x>=p;--x)a.point(g[x],S[x]);a.lineEnd(),a.areaEnd()}h&&(g[u]=+t(m,u,f),S[u]=+e(m,u,f),a.point(i?+i(m,u,f):g[u],n?+n(m,u,f):S[u]))}if(v)return a=null,v+""||null}function d(){return z3().defined(r).curve(s).context(o)}return c.x=function(f){return arguments.length?(t=typeof f=="function"?f:Rt(+f),i=null,c):t},c.x0=function(f){return arguments.length?(t=typeof f=="function"?f:Rt(+f),c):t},c.x1=function(f){return arguments.length?(i=f==null?null:typeof f=="function"?f:Rt(+f),c):i},c.y=function(f){return arguments.length?(e=typeof f=="function"?f:Rt(+f),n=null,c):e},c.y0=function(f){return arguments.length?(e=typeof f=="function"?f:Rt(+f),c):e},c.y1=function(f){return arguments.length?(n=f==null?null:typeof f=="function"?f:Rt(+f),c):n},c.lineX0=c.lineY0=function(){return d().x(t).y(e)},c.lineY1=function(){return d().x(t).y(n)},c.lineX1=function(){return d().x(i).y(e)},c.defined=function(f){return arguments.length?(r=typeof f=="function"?f:Rt(!!f),c):r},c.curve=function(f){return arguments.length?(s=f,o!=null&&(a=s(o)),c):s},c.context=function(f){return arguments.length?(f==null?o=a=null:a=s(o=f),c):o},c}function A0(t,e,n){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-e),t._y2+t._k*(t._y1-n),t._x2,t._y2)}function dp(t,e){this._context=t,this._k=(1-e)/6}dp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:A0(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2,this._x1=t,this._y1=e;break;case 2:this._point=3;default:A0(this,t,e);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};(function t(e){function n(i){return new dp(i,e)}return n.tension=function(i){return t(+i)},n})(0);function B3(t,e,n){var i=t._x1,r=t._y1,o=t._x2,s=t._y2;if(t._l01_a>T0){var a=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,l=3*t._l01_a*(t._l01_a+t._l12_a);i=(i*a-t._x0*t._l12_2a+t._x2*t._l01_2a)/l,r=(r*a-t._y0*t._l12_2a+t._y2*t._l01_2a)/l}if(t._l23_a>T0){var c=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,d=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*c+t._x1*t._l23_2a-e*t._l12_2a)/d,s=(s*c+t._y1*t._l23_2a-n*t._l12_2a)/d}t._context.bezierCurveTo(i,r,o,s,t._x2,t._y2)}function oy(t,e){this._context=t,this._alpha=e}oy.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){var n=this._x2-t,i=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+i*i,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3;default:B3(this,t,e);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const V3=function t(e){function n(i){return e?new oy(i,e):new dp(i,0)}return n.alpha=function(i){return t(+i)},n}(.5);function Us(t,e,n){this.k=t,this.x=e,this.y=n}Us.prototype={constructor:Us,scale:function(t){return t===1?this:new Us(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Us(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Us.prototype;const H3=({selectedRegionData:t,channels:e=[],selectedRegions:n=[]})=>{const i=ae.useRef(null),r=ae.useRef(null),[o,s]=ae.useState("bar"),[a,l]=ae.useState(null),[c,d]=ae.useState(!1),[f,u]=ae.useState(null),p=ae.useRef(null),x=ae.useCallback(T=>Cn&&T>=0&&T<Cn.length?Cn[T].replace(/\s*\(do not use\)/gi,"").trim()||`Channel ${T}`:`Channel ${T}`,[]),_=ae.useCallback((T,y,E,R)=>{if(!T||!y)return[];const{data:D,metadata:U}=T,P=U.shape,[z,B,W]=P,I=U.dataRange||[0,65535],F=I[0],V=I[1],N=Math.max(0,Math.floor(y.min.x)),G=Math.min(W-1,Math.ceil(y.max.x)),le=Math.max(0,Math.floor(y.min.y)),ue=Math.min(B-1,Math.ceil(y.max.y)),se=Math.max(0,Math.floor(y.min.z)),ge=Math.min(z-1,Math.ceil(y.max.z)),Ne=[];let _e=0;for(let Ee=se;Ee<=ge;Ee++)for(let Oe=le;Oe<=ue;Oe++)for(let Ce=N;Ce<=G;Ce++){const X=Ee*B*W+Oe*W+Ce;if(X>=D.length)continue;const ve=D[X]/255*(V-F)+F;let Ae=E!==void 0?E:F,we=R!==void 0?R:V;Ae>we&&([Ae,we]=[we,Ae]),ve>=Ae&&ve<=we&&(Ne.push(ve),_e++)}return{voxels:Ne,cellCount:_e,totalVoxels:(G-N+1)*(ue-le+1)*(ge-se+1)}},[]),m=ae.useCallback(T=>{if(!T||T.length===0)return{mean:0,median:0,std:0,q1:0,q2:0,q3:0,min:0,max:0,distribution:[]};const y=[...T].sort((I,F)=>I-F),E=Sl(y),R=Fb(y),D=bb(y)||0,U=Bl(y,.25),P=Bl(y,.5),z=Bl(y,.75),B=Fd(y),W=Ys(y);return{mean:E||0,median:R||0,std:D||0,q1:U||0,q2:P||0,q3:z||0,min:B||0,max:W||0,distribution:y}},[]),h=ae.useCallback(async()=>{if(!t||!t.bounds){l(null);return}d(!0),u(null);try{const T=t.bounds;let y=e.length>0?e:t.channels||[];if(o==="heatmap"&&n.length>0){const z=new Map;n.forEach(B=>{B.channels&&Array.isArray(B.channels)&&B.channels.forEach(W=>{z.has(W.channelIndex)||z.set(W.channelIndex,{...W,visible:!0})})}),z.size>0&&(y=Array.from(z.values()))}const E=y.filter(z=>z.visible!==!1||o==="heatmap");if(E.length===0){l(null),d(!1);return}const R={},D=(T.max.x-T.min.x+1)*(T.max.y-T.min.y+1)*(T.max.z-T.min.z+1),U=E.map(async z=>{try{const B=await ar(z.channelIndex);return B?{config:z,data:B}:(console.warn(`Graph_Panel: Failed to load channel ${z.channelIndex}`),null)}catch(B){return console.error(`Graph_Panel: Error loading channel ${z.channelIndex}:`,B),null}}),P=await Promise.all(U);for(const z of P){if(!z)continue;const{config:B,data:W}=z,{voxels:I,cellCount:F,totalVoxels:V}=_(W,T,B.thresholdMin,B.thresholdMax),N=m(I);R[B.channelIndex]={name:x(B.channelIndex),channelIndex:B.channelIndex,color:B.color,cellCount:F,totalVoxels:V,volumeOccupied:F,density:F/D,meanIntensity:N.mean,medianIntensity:N.median,stdIntensity:N.std,q1:N.q1,q2:N.q2,q3:N.q3,min:N.min,max:N.max,distribution:N.distribution}}l(R)}catch(T){console.error("Graph_Panel: Error analyzing region:",T),u(T.message)}finally{d(!1)}},[t,e,n,o,ar,_,m,x]);ae.useEffect(()=>{h()},[h]);const v=ae.useCallback(()=>{if(!i.current||!a)return;const T=bn(i.current);T.selectAll("*").remove();const y=r.current;if(!y)return;const E=y.clientWidth,R=y.clientHeight,D={top:30,right:20,bottom:120,left:60},U=E-D.left-D.right,P=R-D.top-D.bottom,z=T.attr("width",E).attr("height",R).append("g").attr("transform",`translate(${D.left},${D.top})`),B=Object.values(a);if(B.length===0)return;const W=Is().domain(B.map(N=>N.name)).range([0,U]).padding(.2),I=Xl().domain([0,Ys(B,N=>N.cellCount)||1]).nice().range([P,0]);z.selectAll(".bar").data(B).enter().append("rect").attr("class","bar").attr("x",N=>W(N.name)).attr("y",N=>I(N.cellCount)).attr("width",W.bandwidth()).attr("height",N=>P-I(N.cellCount)).attr("fill",N=>N.color).attr("opacity",.8).on("mouseover",function(N,G){bn(this).attr("opacity",1),V.style("opacity",1).html(`<strong>${G.name}</strong><br/>Cells: ${G.cellCount.toLocaleString()}<br/>Density: ${G.density.toFixed(2)} cells/μm³`).style("left",N.pageX+10+"px").style("top",N.pageY-10+"px")}).on("mouseout",function(){bn(this).attr("opacity",.8),V.style("opacity",0)}),z.append("g").attr("transform",`translate(0,${P})`).call(Cf(W)).selectAll("text").style("fill","#fff").style("font-size",B.length>15?"9px":"11px").attr("transform","rotate(-45)").style("text-anchor","end").attr("dx","-0.8em").attr("dy","0.15em"),z.append("g").call(Rf(I).ticks(10)).selectAll("text").style("fill","#fff").style("font-size","11px"),z.append("text").attr("transform","rotate(-90)").attr("y",0-D.left).attr("x",0-P/2).attr("dy","1em").style("text-anchor","middle").style("fill","#fff").style("font-size","12px").text("Cell Count"),z.append("text").attr("transform",`translate(${U/2}, ${P+D.bottom-10})`).style("text-anchor","middle").style("fill","#fff").style("font-size","12px").text("Biomarker"),z.append("text").attr("x",U/2).attr("y",-10).style("text-anchor","middle").style("fill","#fff").style("font-size","14px").style("font-weight","bold").text("Cell Distribution in Selected Region");const V=bn("body").append("div").attr("class","graph-tooltip").style("opacity",0).style("position","absolute").style("background","rgba(0, 0, 0, 0.9)").style("color","#fff").style("padding","8px").style("border-radius","4px").style("pointer-events","none").style("font-size","12px").style("z-index","10000");p.current={tooltip:V}},[a]),g=ae.useCallback(()=>{if(!i.current||!a)return;const T=bn(i.current);T.selectAll("*").remove();const y=r.current;if(!y)return;const E=y.clientWidth,R=y.clientHeight,D={top:40,right:80,bottom:120,left:60},U=E-D.left-D.right,P=R-D.top-D.bottom,z=T.attr("width",E).attr("height",R).append("g").attr("transform",`translate(${D.left},${D.top})`),B=Object.values(a);if(B.length===0)return;const W=[],I=B.map(ke=>ke.name);for(let ke=0;ke<B.length;ke++){W[ke]=[];for(let ve=0;ve<B.length;ve++)if(ke===ve)W[ke][ve]=1;else{const Ae=B[ke].distribution,we=B[ve].distribution,Ze=S(Ae,we);W[ke][ve]=Ze}}Math.min(U,P)/B.length;const F=Is().domain(I).range([0,U]).padding(.05),V=Is().domain(I).range([0,P]).padding(.05),N=J_(F3).domain([0,1]);for(let ke=0;ke<B.length;ke++)for(let ve=0;ve<B.length;ve++)z.append("rect").attr("x",F(I[ve])).attr("y",V(I[ke])).attr("width",F.bandwidth()).attr("height",V.bandwidth()).attr("fill",N(W[ke][ve])).attr("stroke","#000").attr("stroke-width",.5).on("mouseover",function(Ae,we){bn(this).attr("stroke-width",2),X.style("opacity",1).html(`<strong>${I[ke]} × ${I[ve]}</strong><br/>Correlation: ${W[ke][ve].toFixed(3)}`).style("left",Ae.pageX+10+"px").style("top",Ae.pageY-10+"px")}).on("mouseout",function(){bn(this).attr("stroke-width",.5),X.style("opacity",0)});z.append("g").attr("transform",`translate(0,${P})`).call(Cf(F)).selectAll("text").style("fill","#fff").attr("transform","rotate(-45)").style("text-anchor","end").style("font-size",I.length>15?"9px":"11px"),z.append("g").call(Rf(V)).selectAll("text").style("fill","#fff").style("font-size",I.length>15?"9px":"11px"),z.append("text").attr("x",U/2).attr("y",-20).style("text-anchor","middle").style("fill","#fff").style("font-size","14px").style("font-weight","bold").text("Biomarker Co-expression Heatmap");const ue=15,se=Math.min(200,P),ge=U+20,Ne=(P-se)/2,_e=Xl().domain([1,0]).range([0,se]),Ee=`heatmap-gradient-${Date.now()}`,Oe=T.append("defs").append("linearGradient").attr("id",Ee).attr("x1","0%").attr("x2","0%").attr("y1","0%").attr("y2","100%");for(let ke=0;ke<=100;ke++){const Ae=1-ke/100;Oe.append("stop").attr("offset",`${ke}%`).attr("stop-color",N(Ae))}z.append("rect").attr("x",ge).attr("y",Ne).attr("width",ue).attr("height",se).style("fill",`url(#${Ee})`).style("stroke","#666").style("stroke-width",1);const Ce=Xb(_e).ticks(5).tickFormat(ke=>ke.toFixed(1));z.append("g").attr("transform",`translate(${ge+ue}, ${Ne})`).call(Ce).selectAll("text").style("fill","#fff").style("font-size","10px"),z.append("text").attr("x",ge+ue/2).attr("y",Ne-10).style("text-anchor","middle").style("fill","#fff").style("font-size","11px").text("Corr");const X=bn("body").append("div").attr("class","graph-tooltip").style("opacity",0).style("position","absolute").style("background","rgba(0, 0, 0, 0.9)").style("color","#fff").style("padding","8px").style("border-radius","4px").style("pointer-events","none").style("font-size","12px").style("z-index","10000");p.current={tooltip:X}},[a]),S=(T,y)=>{if(!T||!y||T.length===0||y.length===0||T.length!==y.length)return 0;const R=Math.min(1e4,T.length),D=Math.max(1,Math.floor(T.length/R)),U=[],P=[];for(let G=0;G<T.length;G+=D)U.push(T[G]),P.push(y[G]);const z=U.length,B=Sl(U),W=Sl(P);let I=0,F=0,V=0;for(let G=0;G<z;G++){const le=U[G]-B,ue=P[G]-W;I+=le*ue,F+=le*le,V+=ue*ue}const N=Math.sqrt(F*V);return N===0?0:I/N},b=ae.useCallback(()=>{if(!i.current||!a)return;const T=bn(i.current);T.selectAll("*").remove();const y=r.current;if(!y)return;const E=y.clientWidth,R=y.clientHeight,D=Object.values(a);if(D.length===0)return;const U=D.length,P={top:30,right:40,bottom:120,left:60},z=E-P.left-P.right,B=R-P.top-P.bottom,W=T.attr("width",E).attr("height",R).append("g").attr("transform",`translate(${P.left},${P.top})`),I=U>5?.2:.3,F=Is().domain(D.map(le=>le.name)).range([0,z]).padding(I),V=Xl().domain([0,1]).nice().range([B,0]),N=bn("body").append("div").attr("class","graph-tooltip").style("opacity",0).style("position","absolute").style("background","rgba(0, 0, 0, 0.95)").style("color","#fff").style("padding","12px").style("border-radius","6px").style("pointer-events","none").style("font-size","12px").style("z-index","10000").style("border","1px solid rgba(255, 255, 255, 0.2)").style("box-shadow","0 4px 12px rgba(0, 0, 0, 0.5)");D.forEach((le,ue)=>{if(!le.distribution||le.distribution.length===0)return;const se=le.max||1,ge=le.distribution.map(j=>j/se),_e=A(w(.05),V.ticks(40))(ge),Ee=Ys(_e,j=>j[1]),Oe=_e.map(j=>[j[0],j[1]/Ee]),Ce=F.bandwidth()/2.2,X=F(le.name)+F.bandwidth()/2,ke=k3().x0(j=>X-Ce*j[1]).x1(j=>X+Ce*j[1]).y(j=>V(j[0])).curve(V3.alpha(.5));W.append("path").datum(Oe).attr("fill",le.color).attr("opacity",.7).attr("d",ke).attr("stroke",le.color).attr("stroke-width",1.5).attr("stroke-opacity",.9).on("mouseover",function(j){bn(this).attr("opacity",1).attr("stroke-width",2.5),N.style("opacity",1).html(`
              <div style="font-weight: bold; margin-bottom: 6px; color: ${le.color}; font-size: 13px;">
                ${le.name}
              </div>
              <div style="line-height: 1.6;">
                <div><strong>Mean:</strong> ${le.meanIntensity.toFixed(2)}</div>
                <div><strong>Max:</strong> ${le.max.toFixed(2)}</div>
                <div style="margin-top: 4px; font-style: italic; color: #aaa;">Normalized View</div>
              </div>
            `).style("left",j.pageX+15+"px").style("top",j.pageY-10+"px")}).on("mouseout",function(){bn(this).attr("opacity",.7).attr("stroke-width",1.5),N.style("opacity",0)});const ve=V(le.q1/se),Ae=V(le.q2/se),we=V(le.q3/se),Ze=V(le.min/se),Fe=V(le.max/se);W.append("line").attr("x1",X-Ce*1.1).attr("x2",X+Ce*1.1).attr("y1",Ae).attr("y2",Ae).attr("stroke","#fff").attr("stroke-width",2.5).attr("opacity",.95),W.append("rect").attr("x",X-Ce*.3).attr("y",we).attr("width",Ce*.6).attr("height",ve-we).attr("fill","none").attr("stroke","#fff").attr("stroke-width",1.5).attr("opacity",.6),W.append("line").attr("x1",X).attr("x2",X).attr("y1",we).attr("y2",Fe).attr("stroke","#fff").attr("stroke-width",1).attr("opacity",.5).attr("stroke-dasharray","3,3"),W.append("line").attr("x1",X).attr("x2",X).attr("y1",ve).attr("y2",Ze).attr("stroke","#fff").attr("stroke-width",1).attr("opacity",.5).attr("stroke-dasharray","3,3")}),W.append("g").attr("transform",`translate(0,${B})`).call(Cf(F)).selectAll("text").style("fill","#fff").style("font-size",U>15?"9px":"11px").attr("transform","rotate(-45)").style("text-anchor","end").attr("dx","-0.8em").attr("dy","0.15em"),W.append("g").call(Rf(V).ticks(10)).selectAll("text").style("fill","#fff").style("font-size","11px"),W.selectAll(".domain, .tick line").style("stroke","#666").style("stroke-width",1),W.append("text").attr("transform","rotate(-90)").attr("y",0-P.left).attr("x",0-B/2).attr("dy","1em").style("text-anchor","middle").style("fill","#fff").style("font-size","13px").style("font-weight","500").text("Normalized Intensity (0-1)"),W.append("text").attr("transform",`translate(${z/2}, ${B+P.bottom-15})`).style("text-anchor","middle").style("fill","#fff").style("font-size","13px").style("font-weight","500").text("Biomarker"),W.append("text").attr("x",z/2).attr("y",-10).style("text-anchor","middle").style("fill","#fff").style("font-size","16px").style("font-weight","bold").text("Normalized Intensity Distributions"),p.current={tooltip:N}},[a]),w=T=>y=>Math.abs(y/=T)<=1?.75*(1-y*y)/T:0,A=(T,y)=>E=>y.map(R=>[R,Sl(E,D=>T(R-D))]);return ae.useEffect(()=>{var T;if(!(c||!a)){switch((T=p.current)!=null&&T.tooltip&&p.current.tooltip.remove(),o){case"bar":v();break;case"heatmap":g();break;case"violin":b();break}return()=>{var y;(y=p.current)!=null&&y.tooltip&&p.current.tooltip.remove()}}},[o,a,c,v,g,b]),ae.useEffect(()=>()=>{var T;(T=p.current)!=null&&T.tooltip&&p.current.tooltip.remove()},[]),J.jsxs("div",{ref:r,style:{height:"100%",width:"100%",backgroundColor:"#000000",border:"1px solid #444",padding:"1px",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"},children:[J.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",backgroundColor:"rgba(0, 0, 0, 0.5)",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",flexShrink:0,zIndex:10},children:[J.jsx("h3",{style:{margin:0,fontSize:"14px",color:"white",fontWeight:"500"},children:"Graph Panel"}),J.jsxs("div",{style:{display:"flex",gap:"4px",padding:"2px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"4px"},children:[J.jsx("button",{onClick:()=>s("bar"),style:{width:"24px",height:"24px",padding:"4px",background:o==="bar"?"rgba(74, 222, 128, 0.3)":"transparent",border:"none",borderRadius:"3px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},title:"Bar Chart",children:J.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[J.jsx("rect",{x:"2",y:"12",width:"2",height:"2",fill:o==="bar"?"#4ade80":"#fff",opacity:o==="bar"?1:.7}),J.jsx("rect",{x:"5",y:"8",width:"2",height:"6",fill:o==="bar"?"#4ade80":"#fff",opacity:o==="bar"?1:.7}),J.jsx("rect",{x:"8",y:"4",width:"2",height:"10",fill:o==="bar"?"#4ade80":"#fff",opacity:o==="bar"?1:.7}),J.jsx("rect",{x:"11",y:"6",width:"2",height:"8",fill:o==="bar"?"#4ade80":"#fff",opacity:o==="bar"?1:.7})]})}),J.jsx("button",{onClick:()=>s("heatmap"),style:{width:"24px",height:"24px",padding:"4px",background:o==="heatmap"?"rgba(74, 222, 128, 0.3)":"transparent",border:"none",borderRadius:"3px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},title:"Heatmap",children:J.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[J.jsx("rect",{x:"2",y:"2",width:"3",height:"3",fill:o==="heatmap"?"#4ade80":"#fff",opacity:o==="heatmap"?1:.7}),J.jsx("rect",{x:"6",y:"2",width:"3",height:"3",fill:o==="heatmap"?"#4ade80":"#fff",opacity:o==="heatmap"?1:.7}),J.jsx("rect",{x:"10",y:"2",width:"3",height:"3",fill:o==="heatmap"?"#4ade80":"#fff",opacity:o==="heatmap"?1:.7}),J.jsx("rect",{x:"2",y:"6",width:"3",height:"3",fill:o==="heatmap"?"#4ade80":"#fff",opacity:o==="heatmap"?1:.7}),J.jsx("rect",{x:"6",y:"6",width:"3",height:"3",fill:o==="heatmap"?"#4ade80":"#fff",opacity:o==="heatmap"?1:.7}),J.jsx("rect",{x:"10",y:"6",width:"3",height:"3",fill:o==="heatmap"?"#4ade80":"#fff",opacity:o==="heatmap"?1:.7}),J.jsx("rect",{x:"2",y:"10",width:"3",height:"3",fill:o==="heatmap"?"#4ade80":"#fff",opacity:o==="heatmap"?1:.7}),J.jsx("rect",{x:"6",y:"10",width:"3",height:"3",fill:o==="heatmap"?"#4ade80":"#fff",opacity:o==="heatmap"?1:.7}),J.jsx("rect",{x:"10",y:"10",width:"3",height:"3",fill:o==="heatmap"?"#4ade80":"#fff",opacity:o==="heatmap"?1:.7})]})}),J.jsx("button",{onClick:()=>s("violin"),style:{width:"24px",height:"24px",padding:"4px",background:o==="violin"?"rgba(74, 222, 128, 0.3)":"transparent",border:"none",borderRadius:"3px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},title:"Violin Plot",children:J.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[J.jsx("path",{d:"M8 2 L6 4 L5 6 L5 10 L6 12 L8 14 L10 12 L11 10 L11 6 L10 4 Z",fill:o==="violin"?"#4ade80":"#fff",opacity:o==="violin"?1:.7}),J.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"14",stroke:o==="violin"?"#4ade80":"#fff",strokeWidth:"1.5",opacity:o==="violin"?1:.7})]})})]})]}),J.jsxs("div",{style:{flex:1,padding:"0px",overflow:"hidden",position:"relative",width:"100%",height:"100%"},children:[c&&J.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#666",fontSize:"12px"},children:"Loading..."}),f&&J.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#f44",fontSize:"12px",textAlign:"center"},children:["Error: ",f]}),!c&&!f&&!t&&J.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#666",fontSize:"12px",textAlign:"center"},children:[J.jsx("div",{children:"No selection made"}),J.jsx("div",{style:{fontSize:"10px",marginTop:"5px"},children:"Select a region in Main View"})]}),!c&&!f&&t&&(!a||Object.keys(a).length===0)&&J.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#666",fontSize:"12px",textAlign:"center"},children:[J.jsx("div",{children:"No channel data available"}),J.jsx("div",{style:{fontSize:"10px",marginTop:"5px"},children:"Enable channels to see statistics"})]}),J.jsx("svg",{ref:i,style:{width:"100%",height:"100%"}})]})]})},G3=t=>{if(t.length<2)return null;const e=t.length,n=new H;t.forEach(w=>n.add(w)),n.divideScalar(e);const i=t.map(w=>new H().subVectors(w,n));let r=0,o=0,s=0,a=0,l=0,c=0;i.forEach(w=>{r+=w.x*w.x,o+=w.x*w.y,s+=w.x*w.z,a+=w.y*w.y,l+=w.y*w.z,c+=w.z*w.z});const d=r+a+c,f=r*(a*c-l*l)-o*(o*c-s*l)+s*(o*l-a*s),u=(d*d-(r*r+a*a+c*c+2*(o*o+s*s+l*l)))/2;if(u<=0){const w=new H(1/0,1/0,1/0),A=new H(-1/0,-1/0,-1/0);return t.forEach(y=>{w.min(y),A.max(y)}),{direction:new H().subVectors(A,w).normalize(),center:n}}const p=d,x=f,_=Math.acos(Math.max(-1,Math.min(1,(2*p*p*p-9*p*u+27*x)/(2*Math.pow(p*p-3*u,1.5))))),m=Math.sqrt(p*p-3*u),h=p/3+2/3*m*Math.cos(_/3),v=p/3+2/3*m*Math.cos((_+2*Math.PI)/3),g=p/3+2/3*m*Math.cos((_+4*Math.PI)/3),S=Math.max(h,v,g);let b=new H(1,0,0);if(Math.abs(S-h)<.001){const w=(a-h)*(c-h)-l*l;if(Math.abs(w)>1e-6){const A=(o*(c-h)-s*l)/w,T=(s-l*A)/(c-h);b=new H(1,A,T).normalize()}}else if(Math.abs(S-v)<.001){const w=(r-v)*(c-v)-s*s;if(Math.abs(w)>1e-6){const A=(o*(c-v)-s*l)/w,T=(l-s*A)/(c-v);b=new H(A,1,T).normalize()}}else{const w=(r-g)*(a-g)-o*o;if(Math.abs(w)>1e-6){const A=(o*(a-g)-s*o)/w,T=(s-o*A)/(a-g);b=new H(A,T,1).normalize()}}if(b.length()<.1){const w=new H(1/0,1/0,1/0),A=new H(-1/0,-1/0,-1/0);t.forEach(T=>{w.min(T),A.max(T)}),b=new H().subVectors(A,w).normalize()}return{direction:b,center:n}},W3=({channels:t=[]})=>{const e=ae.useRef(null),n=ae.useRef(null),i=ae.useRef(null),r=ae.useRef(null),o=ae.useRef(null),s=ae.useRef([]),a=ae.useRef(new Map),[l,c]=ae.useState({x:0,y:0,z:0}),d=u=>{u&&(u.line&&(u.line.geometry&&u.line.geometry.dispose(),u.line.material&&u.line.material.dispose()),u.cone&&(u.cone.geometry&&u.cone.geometry.dispose(),u.cone.material&&u.cone.material.dispose()))},f=ae.useCallback((u,p,x,_=.6,m=.05)=>{const h=x.replace("#",""),v=parseInt(h.substring(0,2),16)/255,g=parseInt(h.substring(2,4),16)/255,S=parseInt(h.substring(4,6),16)/255,b=u.clone().normalize(),w=new H().copy(p).sub(b.clone().multiplyScalar(_/2)),A=new H().copy(p).add(b.clone().multiplyScalar(_/2)),y=new H().subVectors(A,w).length(),E=new H().addVectors(w,A).multiplyScalar(.5),R=new ou(m,m,y,16),D=new wc({color:new Je(v,g,S)}),U=new _n(R,D);U.position.copy(E);const P=new H(0,1,0),z=new Gr;z.setFromUnitVectors(P,b),U.setRotationFromQuaternion(z);const B=_*.2,W=m*2,I=new ep(W,B,16),F=new wc({color:new Je(v,g,S)}),V=new _n(I,F),N=b.clone(),G=A.clone();V.position.copy(G);const le=new H(0,1,0),ue=new Gr;return ue.setFromUnitVectors(le,N),V.setRotationFromQuaternion(ue),{line:U,cone:V}},[]);return ae.useEffect(()=>{if(!e.current)return;const u=e.current,p=u.clientWidth,x=u.clientHeight,_=new Jh;_.background=new Je(0),n.current=_;const m=new nn(50,p/x,.1,1e3);m.position.set(.5,.5,1.5),m.lookAt(0,0,0),i.current=m;const h=new iu({antialias:!0});h.setSize(p,x),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.outputColorSpace!==void 0&&(h.outputColorSpace=Mt),u.appendChild(h.domElement),r.current=h;const v=new tp(16777215,.6);_.add(v);const g=new Z2(16777215,.4);g.position.set(1,1,1),_.add(g);let S=!1,b=0,w=0,A=1.5,T=0,y=0;const E=()=>{const I=A*Math.sin(y)*Math.cos(T),F=A*Math.sin(T),V=A*Math.cos(y)*Math.cos(T);m.position.set(I,F,V),m.lookAt(0,0,0)},R=I=>{I.button===0&&(S=!0,h.domElement.style.cursor="grabbing"),I.button,b=I.clientX,w=I.clientY},D=()=>{S=!1,h.domElement.style.cursor="grab"},U=I=>{if(S){const ue=(I.clientX-b)*.01,se=(I.clientY-w)*.01;y+=ue,T=Math.max(-Math.PI/2,Math.min(Math.PI/2,T+se)),E()}const F=h.domElement.getBoundingClientRect(),V=new qe;V.x=(I.clientX-F.left)/F.width*2-1,V.y=-((I.clientY-F.top)/F.height)*2+1;const N=new h_;N.setFromCamera(V,m);const G=new _i(new H(0,0,1),0),le=new H;N.ray.intersectPlane(G,le),c({x:le.x.toFixed(3),y:le.y.toFixed(3),z:le.z.toFixed(3)}),b=I.clientX,w=I.clientY},P=I=>{I.preventDefault(),A*=1+I.deltaY*.001,A=Math.max(.5,Math.min(5,A)),E()},z=I=>I.preventDefault();h.domElement.addEventListener("mousedown",R),h.domElement.addEventListener("mouseup",D),h.domElement.addEventListener("mousemove",U),h.domElement.addEventListener("wheel",P),h.domElement.addEventListener("contextmenu",z),h.domElement.style.cursor="grab";const B=()=>{h.render(_,m),o.current=requestAnimationFrame(B)};o.current=requestAnimationFrame(B);const W=()=>{const I=u.clientWidth,F=u.clientHeight;m.aspect=I/F,m.updateProjectionMatrix(),h.setSize(I,F)};return window.addEventListener("resize",W),()=>{window.removeEventListener("resize",W),h.domElement.removeEventListener("mousedown",R),h.domElement.removeEventListener("mouseup",D),h.domElement.removeEventListener("mousemove",U),h.domElement.removeEventListener("wheel",P),h.domElement.removeEventListener("contextmenu",z),o.current&&cancelAnimationFrame(o.current),s.current.forEach(d),s.current=[],u.contains(h.domElement)&&u.removeChild(h.domElement),h.dispose()}},[]),ae.useEffect(()=>{const u=n.current;if(!u)return;if(s.current.forEach(x=>{x.line&&u.children.includes(x.line)&&u.remove(x.line),x.cone&&u.children.includes(x.cone)&&u.remove(x.cone),d(x)}),s.current=[],t.length===0){r.current&&i.current&&r.current.render(u,i.current);return}(async()=>{const x=t.filter(_=>_.visible!==!1);console.log(`Direction_view: Processing ${x.length} visible channel(s) out of ${t.length} total`),console.log("Direction_view: Visible channels:",x.map(_=>({index:_.channelIndex,color:_.color,visible:_.visible})));for(const _ of x){const m=_.channelIndex;if(m==null){console.warn("Direction_view: Channel config missing channelIndex:",_);continue}const h=_.color||"#ffffff";console.log(`Direction_view: Processing channel ${m} (visible: ${_.visible!==!1}) with color ${h}`,{channelConfig:{channelIndex:_.channelIndex,color:_.color,visible:_.visible,id:_.id}});try{let v=a.current.get(m);if(v||(v=await ar(m),v&&a.current.set(m,v)),!v){console.warn(`Direction_view: Could not load channel ${m}, creating default arrow`);const _e=new H(1,0,0).normalize(),Ee=new H(0,0,0),X=f(_e,Ee,h,1.5,.02);u.add(X.line),u.add(X.cone),s.current.push(X);continue}const{data:g,metadata:S}=v,[b,w,A]=S.shape||[];if(!b||!w||!A){console.warn(`Direction_view: Invalid shape for channel ${m}, creating default arrow`);const _e=new H(1,0,0).normalize(),Ee=new H(0,0,0),X=f(_e,Ee,h,1.5,.02);u.add(X.line),u.add(X.cone),s.current.push(X);continue}const[T=0,y=65535]=S.dataRange||[],R=T+(y-T)*.6,D=Math.max(b,w,A),U=A/D,P=w/D,z=b/D,B=b*w*A,W=[],I=[],F=Math.max(1,Math.floor(Math.cbrt(B)/50));let V=0;for(let _e=0;_e<b;_e+=F)for(let Ee=0;Ee<w;Ee+=F)for(let Oe=0;Oe<A;Oe+=F){const Ce=_e*w*A+Ee*A+Oe;if(Ce>=g.length)continue;if(g[Ce]/255*(y-T)+T>=R){V+=F*F*F,W.push(new H(Oe,Ee,_e));const ve=(Oe/A*2-1)*U,Ae=(Ee/w*2-1)*P,we=(_e/b*2-1)*z;I.push(new H(ve,Ae,we))}}let N,G;if(W.length<2)console.warn(`Direction_view: Not enough high-intensity points (${W.length}) for channel ${m}, using default direction`),N=new H(1,0,0).normalize(),G=new H(0,0,0);else{const _e=G3(W);if(!_e)console.warn(`Direction_view: Could not compute principal direction for channel ${m}, using default`),N=new H(1,0,0).normalize(),G=new H(0,0,0);else{const Ee=_e.direction,Oe=_e.center,Ce=(Oe.x/A*2-1)*U,X=(Oe.y/w*2-1)*P,ke=(Oe.z/b*2-1)*z;G=new H(Ce,X,ke);const ve=Ee.x*U,Ae=Ee.y*P,we=Ee.z*z;N=new H(ve,Ae,we).normalize(),console.log(`Direction_view: Channel ${m} - Original direction: (${Ee.x.toFixed(3)}, ${Ee.y.toFixed(3)}, ${Ee.z.toFixed(3)}), Scaled direction: (${N.x.toFixed(3)}, ${N.y.toFixed(3)}, ${N.z.toFixed(3)})`)}}const le=V/B,ue=.02,se=Math.max(ue,Math.min(.05,ue+le*.03)),Ne=f(N,G,h,1.5,se);console.log(`Direction_view: Created arrow for channel ${m} with thickness ${se.toFixed(3)} and color ${h}`),u.add(Ne.line),u.add(Ne.cone),s.current.push(Ne)}catch(v){console.error(`Direction_view: Error processing channel ${m}:`,v)}}console.log(`Direction_view: Created ${s.current.length} arrow(s) for ${x.length} visible channel(s)`),r.current&&i.current&&r.current.render(u,i.current)})()},[t,f]),J.jsxs("div",{style:{height:"100%",width:"100%",backgroundColor:"#000000",border:"1px solid #444",padding:"1px",display:"flex",flexDirection:"column",overflow:"hidden",boxSizing:"border-box"},children:[J.jsx("h3",{style:{margin:"8px",fontSize:"14px",color:"white",fontWeight:500,flexShrink:0},children:"Direction View"}),J.jsx("div",{ref:e,style:{width:"100%",flex:1,overflow:"hidden",boxSizing:"border-box",position:"relative"},children:J.jsxs("div",{style:{position:"absolute",top:"8px",left:"8px",background:"rgba(0, 0, 0, 0.7)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"4px",padding:"6px 10px",color:"#ffffff",fontSize:"12px",fontFamily:"monospace",pointerEvents:"none",zIndex:1e3},children:["X: ",l.x," | Y: ",l.y," | Z: ",l.z]})})]})};function X3(){const[t,e]=ae.useState([]),[n,i]=ae.useState([]),[r,o]=ae.useState(0),s=ae.useRef(""),[a,l]=ae.useState(null),c=ae.useRef(null),d=ae.useCallback(m=>{console.log("App: Channels updated:",m.length,"channels"),e(m)},[]),f=ae.useCallback(m=>{if(console.log("App: ===== RECEIVED SELECTION DATA ====="),console.log("App: Selected data received:",m),console.log("App: Bounds:",m==null?void 0:m.bounds),console.log("App: Channels:",m==null?void 0:m.channels),console.log("App: Scaling:",m==null?void 0:m.scaling),console.log("App: Setting selectedRegionData state..."),!m||!m.bounds){console.error("App: Invalid selection data received:",m);return}m.worldBounds&&(c.current=m.worldBounds,console.log("App: Updated persistent selection bounds")),l(m),console.log("App: ✓ selectedRegionData state updated")},[]),u=ae.useCallback(m=>m.flatMap(h=>h.channels.map((v,g)=>({...v,id:v.id??`${h.id}-${v.channelIndex??g}`,regionId:h.id,visible:v.visible!==!1,opacity:v.opacity??1}))),[]),p=ae.useCallback(({regionPayload:m,shouldSelect:h})=>{m&&i(v=>{let g=v;return h?v.some(b=>b.id===m.id)||(g=[...v,m]):g=v.filter(S=>S.id!==m.id),console.log("App: Region toggled. New regions count:",g.length),g})},[u]),x=ae.useMemo(()=>u(n),[n,u]),_=ae.useMemo(()=>x.map(m=>`${m.regionId}-${m.channelIndex}`).join("|"),[x]);return ae.useEffect(()=>{_!==s.current&&(s.current=_,e(x),o(m=>m+1))},[_,x]),J.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100vw",height:"100vh",overflow:"hidden",backgroundColor:"#000000",position:"fixed",top:0,left:0,boxSizing:"border-box"},children:[J.jsx("div",{style:{height:"4%",width:"100%",flexShrink:0,overflow:"hidden"},children:J.jsx(U1,{softwareName:"Melanoma Tissue Volumes"})}),J.jsxs("div",{style:{height:"100%",width:"100%",display:"flex",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:[J.jsxs("div",{style:{width:"25%",height:"100%",display:"flex",flexDirection:"column",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:[J.jsx("div",{style:{height:"45%",width:"100%",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:J.jsx(O1,{onChannelsChange:d,presetChannels:t,presetVersion:r})}),J.jsx("div",{style:{height:"55%",width:"100%",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:J.jsx(V1,{onToggleRegion:p,selectedRegions:n})})]}),J.jsxs("div",{style:{width:"75%",height:"100%",display:"flex",flexDirection:"column",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:[J.jsx("div",{style:{height:"70%",width:"100%",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:J.jsx(gb,{channels:t,activeRegions:n,onSelectionChange:f,initialSelectionBounds:c.current})}),J.jsxs("div",{style:{height:"30%",width:"100%",display:"flex",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:[J.jsx("div",{style:{width:"33.3%",height:"100%",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:J.jsx(_b,{selectedRegionData:a,channels:t})}),J.jsx("div",{style:{width:"33.3%",height:"100%",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:J.jsx(H3,{selectedRegionData:a,channels:t,selectedRegions:n})}),J.jsx("div",{style:{width:"33.3%",height:"100%",overflow:"hidden",boxSizing:"border-box",flexShrink:0},children:J.jsx(W3,{channels:t})})]})]})]})]})}Df.createRoot(document.getElementById("root")).render(J.jsx(Ey.StrictMode,{children:J.jsx(X3,{})}));
