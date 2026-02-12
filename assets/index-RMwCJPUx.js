(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var vu={exports:{}},Na={},xu={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function a_(){if(Up)return pt;Up=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function x(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function y(F,ae,Re){this.props=F,this.context=ae,this.refs=C,this.updater=Re||S}y.prototype.isReactComponent={},y.prototype.setState=function(F,ae){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ae,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=y.prototype;function N(F,ae,Re){this.props=F,this.context=ae,this.refs=C,this.updater=Re||S}var R=N.prototype=new _;R.constructor=N,T(R,y.prototype),R.isPureReactComponent=!0;var b=Array.isArray,L=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function W(F,ae,Re){var He,qe={},te=null,ue=null;if(ae!=null)for(He in ae.ref!==void 0&&(ue=ae.ref),ae.key!==void 0&&(te=""+ae.key),ae)L.call(ae,He)&&!O.hasOwnProperty(He)&&(qe[He]=ae[He]);var ve=arguments.length-2;if(ve===1)qe.children=Re;else if(1<ve){for(var Me=Array(ve),Te=0;Te<ve;Te++)Me[Te]=arguments[Te+2];qe.children=Me}if(F&&F.defaultProps)for(He in ve=F.defaultProps,ve)qe[He]===void 0&&(qe[He]=ve[He]);return{$$typeof:a,type:F,key:te,ref:ue,props:qe,_owner:I.current}}function w(F,ae){return{$$typeof:a,type:F.type,key:ae,ref:F.ref,props:F.props,_owner:F._owner}}function P(F){return typeof F=="object"&&F!==null&&F.$$typeof===a}function V(F){var ae={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Re){return ae[Re]})}var ee=/\/+/g;function J(F,ae){return typeof F=="object"&&F!==null&&F.key!=null?V(""+F.key):ae.toString(36)}function fe(F,ae,Re,He,qe){var te=typeof F;(te==="undefined"||te==="boolean")&&(F=null);var ue=!1;if(F===null)ue=!0;else switch(te){case"string":case"number":ue=!0;break;case"object":switch(F.$$typeof){case a:case e:ue=!0}}if(ue)return ue=F,qe=qe(ue),F=He===""?"."+J(ue,0):He,b(qe)?(Re="",F!=null&&(Re=F.replace(ee,"$&/")+"/"),fe(qe,ae,Re,"",function(Te){return Te})):qe!=null&&(P(qe)&&(qe=w(qe,Re+(!qe.key||ue&&ue.key===qe.key?"":(""+qe.key).replace(ee,"$&/")+"/")+F)),ae.push(qe)),1;if(ue=0,He=He===""?".":He+":",b(F))for(var ve=0;ve<F.length;ve++){te=F[ve];var Me=He+J(te,ve);ue+=fe(te,ae,Re,Me,qe)}else if(Me=x(F),typeof Me=="function")for(F=Me.call(F),ve=0;!(te=F.next()).done;)te=te.value,Me=He+J(te,ve++),ue+=fe(te,ae,Re,Me,qe);else if(te==="object")throw ae=String(F),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.");return ue}function le(F,ae,Re){if(F==null)return F;var He=[],qe=0;return fe(F,He,"","",function(te){return ae.call(Re,te,qe++)}),He}function oe(F){if(F._status===-1){var ae=F._result;ae=ae(),ae.then(function(Re){(F._status===0||F._status===-1)&&(F._status=1,F._result=Re)},function(Re){(F._status===0||F._status===-1)&&(F._status=2,F._result=Re)}),F._status===-1&&(F._status=0,F._result=ae)}if(F._status===1)return F._result.default;throw F._result}var q={current:null},Y={transition:null},de={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:Y,ReactCurrentOwner:I};function re(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:le,forEach:function(F,ae,Re){le(F,function(){ae.apply(this,arguments)},Re)},count:function(F){var ae=0;return le(F,function(){ae++}),ae},toArray:function(F){return le(F,function(ae){return ae})||[]},only:function(F){if(!P(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},pt.Component=y,pt.Fragment=n,pt.Profiler=o,pt.PureComponent=N,pt.StrictMode=r,pt.Suspense=p,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,pt.act=re,pt.cloneElement=function(F,ae,Re){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var He=T({},F.props),qe=F.key,te=F.ref,ue=F._owner;if(ae!=null){if(ae.ref!==void 0&&(te=ae.ref,ue=I.current),ae.key!==void 0&&(qe=""+ae.key),F.type&&F.type.defaultProps)var ve=F.type.defaultProps;for(Me in ae)L.call(ae,Me)&&!O.hasOwnProperty(Me)&&(He[Me]=ae[Me]===void 0&&ve!==void 0?ve[Me]:ae[Me])}var Me=arguments.length-2;if(Me===1)He.children=Re;else if(1<Me){ve=Array(Me);for(var Te=0;Te<Me;Te++)ve[Te]=arguments[Te+2];He.children=ve}return{$$typeof:a,type:F.type,key:qe,ref:te,props:He,_owner:ue}},pt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:c,_context:F},F.Consumer=F},pt.createElement=W,pt.createFactory=function(F){var ae=W.bind(null,F);return ae.type=F,ae},pt.createRef=function(){return{current:null}},pt.forwardRef=function(F){return{$$typeof:d,render:F}},pt.isValidElement=P,pt.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:oe}},pt.memo=function(F,ae){return{$$typeof:m,type:F,compare:ae===void 0?null:ae}},pt.startTransition=function(F){var ae=Y.transition;Y.transition={};try{F()}finally{Y.transition=ae}},pt.unstable_act=re,pt.useCallback=function(F,ae){return q.current.useCallback(F,ae)},pt.useContext=function(F){return q.current.useContext(F)},pt.useDebugValue=function(){},pt.useDeferredValue=function(F){return q.current.useDeferredValue(F)},pt.useEffect=function(F,ae){return q.current.useEffect(F,ae)},pt.useId=function(){return q.current.useId()},pt.useImperativeHandle=function(F,ae,Re){return q.current.useImperativeHandle(F,ae,Re)},pt.useInsertionEffect=function(F,ae){return q.current.useInsertionEffect(F,ae)},pt.useLayoutEffect=function(F,ae){return q.current.useLayoutEffect(F,ae)},pt.useMemo=function(F,ae){return q.current.useMemo(F,ae)},pt.useReducer=function(F,ae,Re){return q.current.useReducer(F,ae,Re)},pt.useRef=function(F){return q.current.useRef(F)},pt.useState=function(F){return q.current.useState(F)},pt.useSyncExternalStore=function(F,ae,Re){return q.current.useSyncExternalStore(F,ae,Re)},pt.useTransition=function(){return q.current.useTransition()},pt.version="18.3.1",pt}var Fp;function ed(){return Fp||(Fp=1,xu.exports=a_()),xu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function o_(){if(Op)return Na;Op=1;var a=ed(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var v,g={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)r.call(p,v)&&!c.hasOwnProperty(v)&&(g[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)g[v]===void 0&&(g[v]=p[v]);return{$$typeof:e,type:d,key:x,ref:S,props:g,_owner:o.current}}return Na.Fragment=n,Na.jsx=u,Na.jsxs=u,Na}var kp;function l_(){return kp||(kp=1,vu.exports=o_()),vu.exports}var k=l_(),un=ed(),nl={},yu={exports:{}},Fn={},Su={exports:{}},Mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function c_(){return Bp||(Bp=1,function(a){function e(Y,de){var re=Y.length;Y.push(de);e:for(;0<re;){var F=re-1>>>1,ae=Y[F];if(0<o(ae,de))Y[F]=de,Y[re]=ae,re=F;else break e}}function n(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var de=Y[0],re=Y.pop();if(re!==de){Y[0]=re;e:for(var F=0,ae=Y.length,Re=ae>>>1;F<Re;){var He=2*(F+1)-1,qe=Y[He],te=He+1,ue=Y[te];if(0>o(qe,re))te<ae&&0>o(ue,qe)?(Y[F]=ue,Y[te]=re,F=te):(Y[F]=qe,Y[He]=re,F=He);else if(te<ae&&0>o(ue,re))Y[F]=ue,Y[te]=re,F=te;else break e}}return de}function o(Y,de){var re=Y.sortIndex-de.sortIndex;return re!==0?re:Y.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var p=[],m=[],v=1,g=null,x=3,S=!1,T=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(Y){for(var de=n(m);de!==null;){if(de.callback===null)r(m);else if(de.startTime<=Y)r(m),de.sortIndex=de.expirationTime,e(p,de);else break;de=n(m)}}function b(Y){if(C=!1,R(Y),!T)if(n(p)!==null)T=!0,oe(L);else{var de=n(m);de!==null&&q(b,de.startTime-Y)}}function L(Y,de){T=!1,C&&(C=!1,_(W),W=-1),S=!0;var re=x;try{for(R(de),g=n(p);g!==null&&(!(g.expirationTime>de)||Y&&!V());){var F=g.callback;if(typeof F=="function"){g.callback=null,x=g.priorityLevel;var ae=F(g.expirationTime<=de);de=a.unstable_now(),typeof ae=="function"?g.callback=ae:g===n(p)&&r(p),R(de)}else r(p);g=n(p)}if(g!==null)var Re=!0;else{var He=n(m);He!==null&&q(b,He.startTime-de),Re=!1}return Re}finally{g=null,x=re,S=!1}}var I=!1,O=null,W=-1,w=5,P=-1;function V(){return!(a.unstable_now()-P<w)}function ee(){if(O!==null){var Y=a.unstable_now();P=Y;var de=!0;try{de=O(!0,Y)}finally{de?J():(I=!1,O=null)}}else I=!1}var J;if(typeof N=="function")J=function(){N(ee)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,le=fe.port2;fe.port1.onmessage=ee,J=function(){le.postMessage(null)}}else J=function(){y(ee,0)};function oe(Y){O=Y,I||(I=!0,J())}function q(Y,de){W=y(function(){Y(a.unstable_now())},de)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(Y){Y.callback=null},a.unstable_continueExecution=function(){T||S||(T=!0,oe(L))},a.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<Y?Math.floor(1e3/Y):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_getFirstCallbackNode=function(){return n(p)},a.unstable_next=function(Y){switch(x){case 1:case 2:case 3:var de=3;break;default:de=x}var re=x;x=de;try{return Y()}finally{x=re}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(Y,de){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var re=x;x=Y;try{return de()}finally{x=re}},a.unstable_scheduleCallback=function(Y,de,re){var F=a.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?F+re:F):re=F,Y){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=re+ae,Y={id:v++,callback:de,priorityLevel:Y,startTime:re,expirationTime:ae,sortIndex:-1},re>F?(Y.sortIndex=re,e(m,Y),n(p)===null&&Y===n(m)&&(C?(_(W),W=-1):C=!0,q(b,re-F))):(Y.sortIndex=ae,e(p,Y),T||S||(T=!0,oe(L))),Y},a.unstable_shouldYield=V,a.unstable_wrapCallback=function(Y){var de=x;return function(){var re=x;x=de;try{return Y.apply(this,arguments)}finally{x=re}}}}(Mu)),Mu}var zp;function u_(){return zp||(zp=1,Su.exports=c_()),Su.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function f_(){if(Vp)return Fn;Vp=1;var a=ed(),e=u_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},g={};function x(t){return p.call(g,t)?!0:p.call(v,t)?!1:m.test(t)?g[t]=!0:(v[t]=!0,!1)}function S(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,s,l){if(i===null||typeof i>"u"||S(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,s,l,f,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,N);y[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,N);y[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,N);y[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function R(t,i,s,l){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,s,f,l)&&(s=null),l||f===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):f.mustUseProperty?t[f.propertyName]=s===null?f.type===3?!1:"":s:(i=f.attributeName,l=f.attributeNamespace,s===null?t.removeAttribute(i):(f=f.type,s=f===3||f===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var b=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),V=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),Y=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,F;function ae(t){if(F===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var Re=!1;function He(t,i){if(!t||Re)return"";Re=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var l=ie}Reflect.construct(t,[],i)}else{try{i.call()}catch(ie){l=ie}t.call(i.prototype)}else{try{throw Error()}catch(ie){l=ie}t()}}catch(ie){if(ie&&l&&typeof ie.stack=="string"){for(var f=ie.stack.split(`
`),h=l.stack.split(`
`),E=f.length-1,U=h.length-1;1<=E&&0<=U&&f[E]!==h[U];)U--;for(;1<=E&&0<=U;E--,U--)if(f[E]!==h[U]){if(E!==1||U!==1)do if(E--,U--,0>U||f[E]!==h[U]){var B=`
`+f[E].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=E&&0<=U);break}}}finally{Re=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?ae(t):""}function qe(t){switch(t.tag){case 5:return ae(t.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return t=He(t.type,!1),t;case 11:return t=He(t.type.render,!1),t;case 1:return t=He(t.type,!0),t;default:return""}}function te(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case I:return"Portal";case w:return"Profiler";case W:return"StrictMode";case J:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case P:return(t._context.displayName||"Context")+".Provider";case ee:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case le:return i=t.displayName||null,i!==null?i:te(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return te(t(i))}catch{}}return null}function ue(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Me(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Te(t){var i=Me(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ct(t){t._valueTracker||(t._valueTracker=Te(t))}function Dt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Me(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function ot(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yt(t,i){var s=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function Pt(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=ve(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ut(t,i){i=i.checked,i!=null&&R(t,"checked",i,!1)}function zt(t,i){ut(t,i);var s=ve(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Vt(t,i.type,s):i.hasOwnProperty("defaultValue")&&Vt(t,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function z(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function Vt(t,i,s){(i!=="number"||ot(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var gt=Array.isArray;function St(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ve(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Xe(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function D(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(gt(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:ve(s)}}function M(t,i){var s=ve(i.value),l=ve(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function X(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ce,$e=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,f)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ce.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ae(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nt=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(t){nt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Be[i]=Be[t]})});function Se(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Be.hasOwnProperty(t)&&Be[t]?(""+i).trim():i+"px"}function Ne(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,f=Se(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,f):t[s]=f}}var Ge=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(t,i){if(i){if(Ge[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function be(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function H(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Le=null,Ee=null,Ie=null;function xe(t){if(t=ga(t)){if(typeof Le!="function")throw Error(n(280));var i=t.stateNode;i&&(i=_o(i),Le(t.stateNode,t.type,i))}}function pe(t){Ee?Ie?Ie.push(t):Ie=[t]:Ee=t}function Pe(){if(Ee){var t=Ee,i=Ie;if(Ie=Ee=null,xe(t),i)for(t=0;t<i.length;t++)xe(i[t])}}function it(t,i){return t(i)}function Lt(){}var Mt=!1;function zn(t,i,s){if(Mt)return t(i,s);Mt=!0;try{return it(t,i,s)}finally{Mt=!1,(Ee!==null||Ie!==null)&&(Lt(),Pe())}}function wn(t,i){var s=t.stateNode;if(s===null)return null;var l=_o(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var $s=!1;if(d)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){$s=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{$s=!1}function Ks(t,i,s,l,f,h,E,U,B){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(s,ie)}catch(_e){this.onError(_e)}}var Cr=!1,Rr=null,br=!1,ai=null,Zs={onError:function(t){Cr=!0,Rr=t}};function $a(t,i,s,l,f,h,E,U,B){Cr=!1,Rr=null,Ks.apply(Zs,arguments)}function Ka(t,i,s,l,f,h,E,U,B){if($a.apply(this,arguments),Cr){if(Cr){var ie=Rr;Cr=!1,Rr=null}else throw Error(n(198));br||(br=!0,ai=ie)}}function Kn(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Qs(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Pr(t){if(Kn(t)!==t)throw Error(n(188))}function Za(t){var i=t.alternate;if(!i){if(i=Kn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return Pr(f),t;if(h===l)return Pr(f),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=f,l=h;else{for(var E=!1,U=f.child;U;){if(U===s){E=!0,s=f,l=h;break}if(U===l){E=!0,l=f,s=h;break}U=U.sibling}if(!E){for(U=h.child;U;){if(U===s){E=!0,s=h,l=f;break}if(U===l){E=!0,l=h,s=f;break}U=U.sibling}if(!E)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function Js(t){return t=Za(t),t!==null?Qa(t):null}function Qa(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Qa(t);if(i!==null)return i;t=t.sibling}return null}var Ja=e.unstable_scheduleCallback,eo=e.unstable_cancelCallback,Vl=e.unstable_shouldYield,Hl=e.unstable_requestPaint,Gt=e.unstable_now,A=e.unstable_getCurrentPriorityLevel,j=e.unstable_ImmediatePriority,se=e.unstable_UserBlockingPriority,ne=e.unstable_NormalPriority,K=e.unstable_LowPriority,De=e.unstable_IdlePriority,Fe=null,Ce=null;function Ve(t){if(Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Fe,t,void 0,(t.current.flags&128)===128)}catch{}}var ke=Math.clz32?Math.clz32:dt,tt=Math.log,Ze=Math.LN2;function dt(t){return t>>>=0,t===0?32:31-(tt(t)/Ze|0)|0}var Et=64,Ft=4194304;function Ut(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function At(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,E=s&268435455;if(E!==0){var U=E&~f;U!==0?l=Ut(U):(h&=E,h!==0&&(l=Ut(h)))}else E=s&~f,E!==0?l=Ut(E):h!==0&&(l=Ut(h));if(l===0)return 0;if(i!==0&&i!==l&&!(i&f)&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if(l&4&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-ke(i),f=1<<s,l|=t[s],i&=~f;return l}function Qe(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-ke(h),U=1<<E,B=f[E];B===-1?(!(U&s)||U&l)&&(f[E]=Qe(U,i)):B<=i&&(t.expiredLanes|=U),h&=~U}}function _t(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gn(){var t=Et;return Et<<=1,!(Et&4194240)&&(Et=64),t}function vi(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Qt(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ke(i),t[i]=s}function Nr(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var f=31-ke(s),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,s&=~h}}function Nt(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-ke(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}var st=0;function Tn(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rn,sn,ns,xi,_d,Gl=!1,to=[],Ji=null,er=null,tr=null,ea=new Map,ta=new Map,nr=[],bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vd(t,i){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":ea.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(i.pointerId)}}function na(t,i,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=ga(i),i!==null&&sn(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Pg(t,i,s,l,f){switch(i){case"focusin":return Ji=na(Ji,t,i,s,l,f),!0;case"dragenter":return er=na(er,t,i,s,l,f),!0;case"mouseover":return tr=na(tr,t,i,s,l,f),!0;case"pointerover":var h=f.pointerId;return ea.set(h,na(ea.get(h)||null,t,i,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,ta.set(h,na(ta.get(h)||null,t,i,s,l,f)),!0}return!1}function xd(t){var i=Dr(t.target);if(i!==null){var s=Kn(i);if(s!==null){if(i=s.tag,i===13){if(i=Qs(s),i!==null){t.blockedOn=i,_d(t.priority,function(){ns(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function no(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Xl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);lt=l,s.target.dispatchEvent(l),lt=null}else return i=ga(s),i!==null&&sn(i),t.blockedOn=s,!1;i.shift()}return!0}function yd(t,i,s){no(t)&&s.delete(i)}function Ng(){Gl=!1,Ji!==null&&no(Ji)&&(Ji=null),er!==null&&no(er)&&(er=null),tr!==null&&no(tr)&&(tr=null),ea.forEach(yd),ta.forEach(yd)}function ia(t,i){t.blockedOn===i&&(t.blockedOn=null,Gl||(Gl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ng)))}function ra(t){function i(f){return ia(f,t)}if(0<to.length){ia(to[0],t);for(var s=1;s<to.length;s++){var l=to[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Ji!==null&&ia(Ji,t),er!==null&&ia(er,t),tr!==null&&ia(tr,t),ea.forEach(i),ta.forEach(i),s=0;s<nr.length;s++)l=nr[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<nr.length&&(s=nr[0],s.blockedOn===null);)xd(s),s.blockedOn===null&&nr.shift()}var is=b.ReactCurrentBatchConfig,io=!0;function Dg(t,i,s,l){var f=st,h=is.transition;is.transition=null;try{st=1,Wl(t,i,s,l)}finally{st=f,is.transition=h}}function Lg(t,i,s,l){var f=st,h=is.transition;is.transition=null;try{st=4,Wl(t,i,s,l)}finally{st=f,is.transition=h}}function Wl(t,i,s,l){if(io){var f=Xl(t,i,s,l);if(f===null)lc(t,i,l,ro,s),vd(t,l);else if(Pg(f,t,i,s,l))l.stopPropagation();else if(vd(t,l),i&4&&-1<bg.indexOf(t)){for(;f!==null;){var h=ga(f);if(h!==null&&rn(h),h=Xl(t,i,s,l),h===null&&lc(t,i,l,ro,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else lc(t,i,l,null,s)}}var ro=null;function Xl(t,i,s,l){if(ro=null,t=H(l),t=Dr(t),t!==null)if(i=Kn(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Qs(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ro=t,null}function Sd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A()){case j:return 1;case se:return 4;case ne:case K:return 16;case De:return 536870912;default:return 16}default:return 16}}var ir=null,jl=null,so=null;function Md(){if(so)return so;var t,i=jl,s=i.length,l,f="value"in ir?ir.value:ir.textContent,h=f.length;for(t=0;t<s&&i[t]===f[t];t++);var E=s-t;for(l=1;l<=E&&i[s-l]===f[h-l];l++);return so=f.slice(t,1<l?1-l:void 0)}function ao(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function Ed(){return!1}function Vn(t){function i(s,l,f,h,E){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(s=t[U],this[U]=s?s(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?oo:Ed,this.isPropagationStopped=Ed,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=Vn(rs),sa=re({},rs,{view:0,detail:0}),Ig=Vn(sa),ql,$l,aa,lo=re({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(ql=t.screenX-aa.screenX,$l=t.screenY-aa.screenY):$l=ql=0,aa=t),ql)},movementY:function(t){return"movementY"in t?t.movementY:$l}}),wd=Vn(lo),Ug=re({},lo,{dataTransfer:0}),Fg=Vn(Ug),Og=re({},sa,{relatedTarget:0}),Kl=Vn(Og),kg=re({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Bg=Vn(kg),zg=re({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vg=Vn(zg),Hg=re({},rs,{data:0}),Td=Vn(Hg),Gg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Xg[t])?!!i[t]:!1}function Zl(){return jg}var Yg=re({},sa,{key:function(t){if(t.key){var i=Gg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ao(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(t){return t.type==="keypress"?ao(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ao(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qg=Vn(Yg),$g=re({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=Vn($g),Kg=re({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),Zg=Vn(Kg),Qg=re({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jg=Vn(Qg),e0=re({},lo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=Vn(e0),n0=[9,13,27,32],Ql=d&&"CompositionEvent"in window,oa=null;d&&"documentMode"in document&&(oa=document.documentMode);var i0=d&&"TextEvent"in window&&!oa,Cd=d&&(!Ql||oa&&8<oa&&11>=oa),Rd=" ",bd=!1;function Pd(t,i){switch(t){case"keyup":return n0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function r0(t,i){switch(t){case"compositionend":return Nd(i);case"keypress":return i.which!==32?null:(bd=!0,Rd);case"textInput":return t=i.data,t===Rd&&bd?null:t;default:return null}}function s0(t,i){if(ss)return t==="compositionend"||!Ql&&Pd(t,i)?(t=Md(),so=jl=ir=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Cd&&i.locale!=="ko"?null:i.data;default:return null}}var a0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!a0[t.type]:i==="textarea"}function Ld(t,i,s,l){pe(l),i=po(i,"onChange"),0<i.length&&(s=new Yl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var la=null,ca=null;function o0(t){Zd(t,0)}function co(t){var i=us(t);if(Dt(i))return t}function l0(t,i){if(t==="change")return i}var Id=!1;if(d){var Jl;if(d){var ec="oninput"in document;if(!ec){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),ec=typeof Ud.oninput=="function"}Jl=ec}else Jl=!1;Id=Jl&&(!document.documentMode||9<document.documentMode)}function Fd(){la&&(la.detachEvent("onpropertychange",Od),ca=la=null)}function Od(t){if(t.propertyName==="value"&&co(ca)){var i=[];Ld(i,ca,t,H(t)),zn(o0,i)}}function c0(t,i,s){t==="focusin"?(Fd(),la=i,ca=s,la.attachEvent("onpropertychange",Od)):t==="focusout"&&Fd()}function u0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return co(ca)}function f0(t,i){if(t==="click")return co(i)}function d0(t,i){if(t==="input"||t==="change")return co(i)}function h0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var oi=typeof Object.is=="function"?Object.is:h0;function ua(t,i){if(oi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!p.call(i,f)||!oi(t[f],i[f]))return!1}return!0}function kd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bd(t,i){var s=kd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=kd(s)}}function zd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?zd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Vd(){for(var t=window,i=ot();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=ot(t.document)}return i}function tc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function p0(t){var i=Vd(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&zd(s.ownerDocument.documentElement,s)){if(l!==null&&tc(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=s.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=Bd(s,h);var E=Bd(s,l);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var m0=d&&"documentMode"in document&&11>=document.documentMode,as=null,nc=null,fa=null,ic=!1;function Hd(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ic||as==null||as!==ot(l)||(l=as,"selectionStart"in l&&tc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fa&&ua(fa,l)||(fa=l,l=po(nc,"onSelect"),0<l.length&&(i=new Yl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=as)))}function uo(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var os={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},rc={},Gd={};d&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function fo(t){if(rc[t])return rc[t];if(!os[t])return t;var i=os[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Gd)return rc[t]=i[s];return t}var Wd=fo("animationend"),Xd=fo("animationiteration"),jd=fo("animationstart"),Yd=fo("transitionend"),qd=new Map,$d="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,i){qd.set(t,i),c(i,[t])}for(var sc=0;sc<$d.length;sc++){var ac=$d[sc],g0=ac.toLowerCase(),_0=ac[0].toUpperCase()+ac.slice(1);rr(g0,"on"+_0)}rr(Wd,"onAnimationEnd"),rr(Xd,"onAnimationIteration"),rr(jd,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(Yd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v0=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function Kd(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Ka(l,i,void 0,t),t.currentTarget=null}function Zd(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var U=l[E],B=U.instance,ie=U.currentTarget;if(U=U.listener,B!==h&&f.isPropagationStopped())break e;Kd(f,U,ie),h=B}else for(E=0;E<l.length;E++){if(U=l[E],B=U.instance,ie=U.currentTarget,U=U.listener,B!==h&&f.isPropagationStopped())break e;Kd(f,U,ie),h=B}}}if(br)throw t=ai,br=!1,ai=null,t}function kt(t,i){var s=i[pc];s===void 0&&(s=i[pc]=new Set);var l=t+"__bubble";s.has(l)||(Qd(i,t,2,!1),s.add(l))}function oc(t,i,s){var l=0;i&&(l|=4),Qd(s,t,l,i)}var ho="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[ho]){t[ho]=!0,r.forEach(function(s){s!=="selectionchange"&&(v0.has(s)||oc(s,!1,t),oc(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ho]||(i[ho]=!0,oc("selectionchange",!1,i))}}function Qd(t,i,s,l){switch(Sd(i)){case 1:var f=Dg;break;case 4:f=Lg;break;default:f=Wl}s=f.bind(null,i,s,t),f=void 0,!$s||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function lc(t,i,s,l,f){var h=l;if(!(i&1)&&!(i&2)&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var U=l.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;E=E.return}for(;U!==null;){if(E=Dr(U),E===null)return;if(B=E.tag,B===5||B===6){l=h=E;continue e}U=U.parentNode}}l=l.return}zn(function(){var ie=h,_e=H(s),ye=[];e:{var ge=qd.get(t);if(ge!==void 0){var Oe=Yl,We=t;switch(t){case"keypress":if(ao(s)===0)break e;case"keydown":case"keyup":Oe=qg;break;case"focusin":We="focus",Oe=Kl;break;case"focusout":We="blur",Oe=Kl;break;case"beforeblur":case"afterblur":Oe=Kl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=Fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=Zg;break;case Wd:case Xd:case jd:Oe=Bg;break;case Yd:Oe=Jg;break;case"scroll":Oe=Ig;break;case"wheel":Oe=t0;break;case"copy":case"cut":case"paste":Oe=Vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=Ad}var Ye=(i&4)!==0,$t=!Ye&&t==="scroll",$=Ye?ge!==null?ge+"Capture":null:ge;Ye=[];for(var G=ie,Q;G!==null;){Q=G;var we=Q.stateNode;if(Q.tag===5&&we!==null&&(Q=we,$!==null&&(we=wn(G,$),we!=null&&Ye.push(pa(G,we,Q)))),$t)break;G=G.return}0<Ye.length&&(ge=new Oe(ge,We,null,s,_e),ye.push({event:ge,listeners:Ye}))}}if(!(i&7)){e:{if(ge=t==="mouseover"||t==="pointerover",Oe=t==="mouseout"||t==="pointerout",ge&&s!==lt&&(We=s.relatedTarget||s.fromElement)&&(Dr(We)||We[Li]))break e;if((Oe||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Oe?(We=s.relatedTarget||s.toElement,Oe=ie,We=We?Dr(We):null,We!==null&&($t=Kn(We),We!==$t||We.tag!==5&&We.tag!==6)&&(We=null)):(Oe=null,We=ie),Oe!==We)){if(Ye=wd,we="onMouseLeave",$="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ye=Ad,we="onPointerLeave",$="onPointerEnter",G="pointer"),$t=Oe==null?ge:us(Oe),Q=We==null?ge:us(We),ge=new Ye(we,G+"leave",Oe,s,_e),ge.target=$t,ge.relatedTarget=Q,we=null,Dr(_e)===ie&&(Ye=new Ye($,G+"enter",We,s,_e),Ye.target=Q,Ye.relatedTarget=$t,we=Ye),$t=we,Oe&&We)t:{for(Ye=Oe,$=We,G=0,Q=Ye;Q;Q=ls(Q))G++;for(Q=0,we=$;we;we=ls(we))Q++;for(;0<G-Q;)Ye=ls(Ye),G--;for(;0<Q-G;)$=ls($),Q--;for(;G--;){if(Ye===$||$!==null&&Ye===$.alternate)break t;Ye=ls(Ye),$=ls($)}Ye=null}else Ye=null;Oe!==null&&Jd(ye,ge,Oe,Ye,!1),We!==null&&$t!==null&&Jd(ye,$t,We,Ye,!0)}}e:{if(ge=ie?us(ie):window,Oe=ge.nodeName&&ge.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ge.type==="file")var Ke=l0;else if(Dd(ge))if(Id)Ke=d0;else{Ke=u0;var Je=c0}else(Oe=ge.nodeName)&&Oe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ke=f0);if(Ke&&(Ke=Ke(t,ie))){Ld(ye,Ke,s,_e);break e}Je&&Je(t,ge,ie),t==="focusout"&&(Je=ge._wrapperState)&&Je.controlled&&ge.type==="number"&&Vt(ge,"number",ge.value)}switch(Je=ie?us(ie):window,t){case"focusin":(Dd(Je)||Je.contentEditable==="true")&&(as=Je,nc=ie,fa=null);break;case"focusout":fa=nc=as=null;break;case"mousedown":ic=!0;break;case"contextmenu":case"mouseup":case"dragend":ic=!1,Hd(ye,s,_e);break;case"selectionchange":if(m0)break;case"keydown":case"keyup":Hd(ye,s,_e)}var et;if(Ql)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else ss?Pd(t,s)&&(rt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(rt="onCompositionStart");rt&&(Cd&&s.locale!=="ko"&&(ss||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ss&&(et=Md()):(ir=_e,jl="value"in ir?ir.value:ir.textContent,ss=!0)),Je=po(ie,rt),0<Je.length&&(rt=new Td(rt,t,null,s,_e),ye.push({event:rt,listeners:Je}),et?rt.data=et:(et=Nd(s),et!==null&&(rt.data=et)))),(et=i0?r0(t,s):s0(t,s))&&(ie=po(ie,"onBeforeInput"),0<ie.length&&(_e=new Td("onBeforeInput","beforeinput",null,s,_e),ye.push({event:_e,listeners:ie}),_e.data=et))}Zd(ye,i)})}function pa(t,i,s){return{instance:t,listener:i,currentTarget:s}}function po(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=wn(t,s),h!=null&&l.unshift(pa(t,h,f)),h=wn(t,i),h!=null&&l.push(pa(t,h,f))),t=t.return}return l}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jd(t,i,s,l,f){for(var h=i._reactName,E=[];s!==null&&s!==l;){var U=s,B=U.alternate,ie=U.stateNode;if(B!==null&&B===l)break;U.tag===5&&ie!==null&&(U=ie,f?(B=wn(s,h),B!=null&&E.unshift(pa(s,B,U))):f||(B=wn(s,h),B!=null&&E.push(pa(s,B,U)))),s=s.return}E.length!==0&&t.push({event:i,listeners:E})}var x0=/\r\n?/g,y0=/\u0000|\uFFFD/g;function eh(t){return(typeof t=="string"?t:""+t).replace(x0,`
`).replace(y0,"")}function mo(t,i,s){if(i=eh(i),eh(t)!==i&&s)throw Error(n(425))}function go(){}var cc=null,uc=null;function fc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var dc=typeof setTimeout=="function"?setTimeout:void 0,S0=typeof clearTimeout=="function"?clearTimeout:void 0,th=typeof Promise=="function"?Promise:void 0,M0=typeof queueMicrotask=="function"?queueMicrotask:typeof th<"u"?function(t){return th.resolve(null).then(t).catch(E0)}:dc;function E0(t){setTimeout(function(){throw t})}function hc(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(l===0){t.removeChild(f),ra(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=f}while(s);ra(i)}function sr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function nh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),yi="__reactFiber$"+cs,ma="__reactProps$"+cs,Li="__reactContainer$"+cs,pc="__reactEvents$"+cs,w0="__reactListeners$"+cs,T0="__reactHandles$"+cs;function Dr(t){var i=t[yi];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Li]||s[yi]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=nh(t);t!==null;){if(s=t[yi])return s;t=nh(t)}return i}t=s,s=t.parentNode}return null}function ga(t){return t=t[yi]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function _o(t){return t[ma]||null}var mc=[],fs=-1;function ar(t){return{current:t}}function Bt(t){0>fs||(t.current=mc[fs],mc[fs]=null,fs--)}function Ot(t,i){fs++,mc[fs]=t.current,t.current=i}var or={},_n=ar(or),Nn=ar(!1),Lr=or;function ds(t,i){var s=t.type.contextTypes;if(!s)return or;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in s)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Dn(t){return t=t.childContextTypes,t!=null}function vo(){Bt(Nn),Bt(_n)}function ih(t,i,s){if(_n.current!==or)throw Error(n(168));Ot(_n,i),Ot(Nn,s)}function rh(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,ue(t)||"Unknown",f));return re({},s,l)}function xo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Lr=_n.current,Ot(_n,t),Ot(Nn,Nn.current),!0}function sh(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=rh(t,i,Lr),l.__reactInternalMemoizedMergedChildContext=t,Bt(Nn),Bt(_n),Ot(_n,t)):Bt(Nn),Ot(Nn,s)}var Ii=null,yo=!1,gc=!1;function ah(t){Ii===null?Ii=[t]:Ii.push(t)}function A0(t){yo=!0,ah(t)}function lr(){if(!gc&&Ii!==null){gc=!0;var t=0,i=st;try{var s=Ii;for(st=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Ii=null,yo=!1}catch(f){throw Ii!==null&&(Ii=Ii.slice(t+1)),Ja(j,lr),f}finally{st=i,gc=!1}}return null}var hs=[],ps=0,So=null,Mo=0,Zn=[],Qn=0,Ir=null,Ui=1,Fi="";function Ur(t,i){hs[ps++]=Mo,hs[ps++]=So,So=t,Mo=i}function oh(t,i,s){Zn[Qn++]=Ui,Zn[Qn++]=Fi,Zn[Qn++]=Ir,Ir=t;var l=Ui;t=Fi;var f=32-ke(l)-1;l&=~(1<<f),s+=1;var h=32-ke(i)+f;if(30<h){var E=f-f%5;h=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Ui=1<<32-ke(i)+f|s<<f|l,Fi=h+t}else Ui=1<<h|s<<f|l,Fi=t}function _c(t){t.return!==null&&(Ur(t,1),oh(t,1,0))}function vc(t){for(;t===So;)So=hs[--ps],hs[ps]=null,Mo=hs[--ps],hs[ps]=null;for(;t===Ir;)Ir=Zn[--Qn],Zn[Qn]=null,Fi=Zn[--Qn],Zn[Qn]=null,Ui=Zn[--Qn],Zn[Qn]=null}var Hn=null,Gn=null,Ht=!1,li=null;function lh(t,i){var s=ni(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function ch(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Hn=t,Gn=sr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Hn=t,Gn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Ir!==null?{id:Ui,overflow:Fi}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=ni(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Hn=t,Gn=null,!0):!1;default:return!1}}function xc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yc(t){if(Ht){var i=Gn;if(i){var s=i;if(!ch(t,i)){if(xc(t))throw Error(n(418));i=sr(s.nextSibling);var l=Hn;i&&ch(t,i)?lh(l,s):(t.flags=t.flags&-4097|2,Ht=!1,Hn=t)}}else{if(xc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ht=!1,Hn=t}}}function uh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Hn=t}function Eo(t){if(t!==Hn)return!1;if(!Ht)return uh(t),Ht=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!fc(t.type,t.memoizedProps)),i&&(i=Gn)){if(xc(t))throw fh(),Error(n(418));for(;i;)lh(t,i),i=sr(i.nextSibling)}if(uh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Gn=sr(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Gn=null}}else Gn=Hn?sr(t.stateNode.nextSibling):null;return!0}function fh(){for(var t=Gn;t;)t=sr(t.nextSibling)}function ms(){Gn=Hn=null,Ht=!1}function Sc(t){li===null?li=[t]:li.push(t)}var C0=b.ReactCurrentBatchConfig;function _a(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var U=f.refs;E===null?delete U[h]:U[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function wo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function dh(t){var i=t._init;return i(t._payload)}function hh(t){function i($,G){if(t){var Q=$.deletions;Q===null?($.deletions=[G],$.flags|=16):Q.push(G)}}function s($,G){if(!t)return null;for(;G!==null;)i($,G),G=G.sibling;return null}function l($,G){for($=new Map;G!==null;)G.key!==null?$.set(G.key,G):$.set(G.index,G),G=G.sibling;return $}function f($,G){return $=gr($,G),$.index=0,$.sibling=null,$}function h($,G,Q){return $.index=Q,t?(Q=$.alternate,Q!==null?(Q=Q.index,Q<G?($.flags|=2,G):Q):($.flags|=2,G)):($.flags|=1048576,G)}function E($){return t&&$.alternate===null&&($.flags|=2),$}function U($,G,Q,we){return G===null||G.tag!==6?(G=du(Q,$.mode,we),G.return=$,G):(G=f(G,Q),G.return=$,G)}function B($,G,Q,we){var Ke=Q.type;return Ke===O?_e($,G,Q.props.children,we,Q.key):G!==null&&(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&dh(Ke)===G.type)?(we=f(G,Q.props),we.ref=_a($,G,Q),we.return=$,we):(we=qo(Q.type,Q.key,Q.props,null,$.mode,we),we.ref=_a($,G,Q),we.return=$,we)}function ie($,G,Q,we){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=hu(Q,$.mode,we),G.return=$,G):(G=f(G,Q.children||[]),G.return=$,G)}function _e($,G,Q,we,Ke){return G===null||G.tag!==7?(G=Gr(Q,$.mode,we,Ke),G.return=$,G):(G=f(G,Q),G.return=$,G)}function ye($,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number")return G=du(""+G,$.mode,Q),G.return=$,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case L:return Q=qo(G.type,G.key,G.props,null,$.mode,Q),Q.ref=_a($,null,G),Q.return=$,Q;case I:return G=hu(G,$.mode,Q),G.return=$,G;case oe:var we=G._init;return ye($,we(G._payload),Q)}if(gt(G)||de(G))return G=Gr(G,$.mode,Q,null),G.return=$,G;wo($,G)}return null}function ge($,G,Q,we){var Ke=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Ke!==null?null:U($,G,""+Q,we);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case L:return Q.key===Ke?B($,G,Q,we):null;case I:return Q.key===Ke?ie($,G,Q,we):null;case oe:return Ke=Q._init,ge($,G,Ke(Q._payload),we)}if(gt(Q)||de(Q))return Ke!==null?null:_e($,G,Q,we,null);wo($,Q)}return null}function Oe($,G,Q,we,Ke){if(typeof we=="string"&&we!==""||typeof we=="number")return $=$.get(Q)||null,U(G,$,""+we,Ke);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case L:return $=$.get(we.key===null?Q:we.key)||null,B(G,$,we,Ke);case I:return $=$.get(we.key===null?Q:we.key)||null,ie(G,$,we,Ke);case oe:var Je=we._init;return Oe($,G,Q,Je(we._payload),Ke)}if(gt(we)||de(we))return $=$.get(Q)||null,_e(G,$,we,Ke,null);wo(G,we)}return null}function We($,G,Q,we){for(var Ke=null,Je=null,et=G,rt=G=0,ln=null;et!==null&&rt<Q.length;rt++){et.index>rt?(ln=et,et=null):ln=et.sibling;var Ct=ge($,et,Q[rt],we);if(Ct===null){et===null&&(et=ln);break}t&&et&&Ct.alternate===null&&i($,et),G=h(Ct,G,rt),Je===null?Ke=Ct:Je.sibling=Ct,Je=Ct,et=ln}if(rt===Q.length)return s($,et),Ht&&Ur($,rt),Ke;if(et===null){for(;rt<Q.length;rt++)et=ye($,Q[rt],we),et!==null&&(G=h(et,G,rt),Je===null?Ke=et:Je.sibling=et,Je=et);return Ht&&Ur($,rt),Ke}for(et=l($,et);rt<Q.length;rt++)ln=Oe(et,$,rt,Q[rt],we),ln!==null&&(t&&ln.alternate!==null&&et.delete(ln.key===null?rt:ln.key),G=h(ln,G,rt),Je===null?Ke=ln:Je.sibling=ln,Je=ln);return t&&et.forEach(function(_r){return i($,_r)}),Ht&&Ur($,rt),Ke}function Ye($,G,Q,we){var Ke=de(Q);if(typeof Ke!="function")throw Error(n(150));if(Q=Ke.call(Q),Q==null)throw Error(n(151));for(var Je=Ke=null,et=G,rt=G=0,ln=null,Ct=Q.next();et!==null&&!Ct.done;rt++,Ct=Q.next()){et.index>rt?(ln=et,et=null):ln=et.sibling;var _r=ge($,et,Ct.value,we);if(_r===null){et===null&&(et=ln);break}t&&et&&_r.alternate===null&&i($,et),G=h(_r,G,rt),Je===null?Ke=_r:Je.sibling=_r,Je=_r,et=ln}if(Ct.done)return s($,et),Ht&&Ur($,rt),Ke;if(et===null){for(;!Ct.done;rt++,Ct=Q.next())Ct=ye($,Ct.value,we),Ct!==null&&(G=h(Ct,G,rt),Je===null?Ke=Ct:Je.sibling=Ct,Je=Ct);return Ht&&Ur($,rt),Ke}for(et=l($,et);!Ct.done;rt++,Ct=Q.next())Ct=Oe(et,$,rt,Ct.value,we),Ct!==null&&(t&&Ct.alternate!==null&&et.delete(Ct.key===null?rt:Ct.key),G=h(Ct,G,rt),Je===null?Ke=Ct:Je.sibling=Ct,Je=Ct);return t&&et.forEach(function(s_){return i($,s_)}),Ht&&Ur($,rt),Ke}function $t($,G,Q,we){if(typeof Q=="object"&&Q!==null&&Q.type===O&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case L:e:{for(var Ke=Q.key,Je=G;Je!==null;){if(Je.key===Ke){if(Ke=Q.type,Ke===O){if(Je.tag===7){s($,Je.sibling),G=f(Je,Q.props.children),G.return=$,$=G;break e}}else if(Je.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&dh(Ke)===Je.type){s($,Je.sibling),G=f(Je,Q.props),G.ref=_a($,Je,Q),G.return=$,$=G;break e}s($,Je);break}else i($,Je);Je=Je.sibling}Q.type===O?(G=Gr(Q.props.children,$.mode,we,Q.key),G.return=$,$=G):(we=qo(Q.type,Q.key,Q.props,null,$.mode,we),we.ref=_a($,G,Q),we.return=$,$=we)}return E($);case I:e:{for(Je=Q.key;G!==null;){if(G.key===Je)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){s($,G.sibling),G=f(G,Q.children||[]),G.return=$,$=G;break e}else{s($,G);break}else i($,G);G=G.sibling}G=hu(Q,$.mode,we),G.return=$,$=G}return E($);case oe:return Je=Q._init,$t($,G,Je(Q._payload),we)}if(gt(Q))return We($,G,Q,we);if(de(Q))return Ye($,G,Q,we);wo($,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,G!==null&&G.tag===6?(s($,G.sibling),G=f(G,Q),G.return=$,$=G):(s($,G),G=du(Q,$.mode,we),G.return=$,$=G),E($)):s($,G)}return $t}var gs=hh(!0),ph=hh(!1),To=ar(null),Ao=null,_s=null,Mc=null;function Ec(){Mc=_s=Ao=null}function wc(t){var i=To.current;Bt(To),t._currentValue=i}function Tc(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function vs(t,i){Ao=t,Mc=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(Ln=!0),t.firstContext=null)}function Jn(t){var i=t._currentValue;if(Mc!==t)if(t={context:t,memoizedValue:i,next:null},_s===null){if(Ao===null)throw Error(n(308));_s=t,Ao.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return i}var Fr=null;function Ac(t){Fr===null?Fr=[t]:Fr.push(t)}function mh(t,i,s,l){var f=i.interleaved;return f===null?(s.next=s,Ac(i)):(s.next=f.next,f.next=s),i.interleaved=s,Oi(t,l)}function Oi(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var cr=!1;function Cc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ur(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,wt&2){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Oi(t,s)}return f=l.interleaved,f===null?(i.next=i,Ac(l)):(i.next=f.next,f.next=i),l.interleaved=i,Oi(t,s)}function Co(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Nt(t,s)}}function _h(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var E={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?f=h=E:h=h.next=E,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function Ro(t,i,s,l){var f=t.updateQueue;cr=!1;var h=f.firstBaseUpdate,E=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var B=U,ie=B.next;B.next=null,E===null?h=ie:E.next=ie,E=B;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==E&&(U===null?_e.firstBaseUpdate=ie:U.next=ie,_e.lastBaseUpdate=B))}if(h!==null){var ye=f.baseState;E=0,_e=ie=B=null,U=h;do{var ge=U.lane,Oe=U.eventTime;if((l&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Oe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var We=t,Ye=U;switch(ge=i,Oe=s,Ye.tag){case 1:if(We=Ye.payload,typeof We=="function"){ye=We.call(Oe,ye,ge);break e}ye=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=Ye.payload,ge=typeof We=="function"?We.call(Oe,ye,ge):We,ge==null)break e;ye=re({},ye,ge);break e;case 2:cr=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,ge=f.effects,ge===null?f.effects=[U]:ge.push(U))}else Oe={eventTime:Oe,lane:ge,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(ie=_e=Oe,B=ye):_e=_e.next=Oe,E|=ge;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;ge=U,U=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);if(_e===null&&(B=ye),f.baseState=B,f.firstBaseUpdate=ie,f.lastBaseUpdate=_e,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Br|=E,t.lanes=E,t.memoizedState=ye}}function vh(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=s,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var va={},Si=ar(va),xa=ar(va),ya=ar(va);function Or(t){if(t===va)throw Error(n(174));return t}function Rc(t,i){switch(Ot(ya,i),Ot(xa,t),Ot(Si,va),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=me(i,t)}Bt(Si),Ot(Si,i)}function xs(){Bt(Si),Bt(xa),Bt(ya)}function xh(t){Or(ya.current);var i=Or(Si.current),s=me(i,t.type);i!==s&&(Ot(xa,t),Ot(Si,s))}function bc(t){xa.current===t&&(Bt(Si),Bt(xa))}var Wt=ar(0);function bo(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Pc=[];function Nc(){for(var t=0;t<Pc.length;t++)Pc[t]._workInProgressVersionPrimary=null;Pc.length=0}var Po=b.ReactCurrentDispatcher,Dc=b.ReactCurrentBatchConfig,kr=0,Xt=null,Jt=null,an=null,No=!1,Sa=!1,Ma=0,R0=0;function vn(){throw Error(n(321))}function Lc(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!oi(t[s],i[s]))return!1;return!0}function Ic(t,i,s,l,f,h){if(kr=h,Xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Po.current=t===null||t.memoizedState===null?D0:L0,t=s(l,f),Sa){h=0;do{if(Sa=!1,Ma=0,25<=h)throw Error(n(301));h+=1,an=Jt=null,i.updateQueue=null,Po.current=I0,t=s(l,f)}while(Sa)}if(Po.current=Io,i=Jt!==null&&Jt.next!==null,kr=0,an=Jt=Xt=null,No=!1,i)throw Error(n(300));return t}function Uc(){var t=Ma!==0;return Ma=0,t}function Mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Xt.memoizedState=an=t:an=an.next=t,an}function ei(){if(Jt===null){var t=Xt.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var i=an===null?Xt.memoizedState:an.next;if(i!==null)an=i,Jt=t;else{if(t===null)throw Error(n(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},an===null?Xt.memoizedState=an=t:an=an.next=t}return an}function Ea(t,i){return typeof i=="function"?i(t):i}function Fc(t){var i=ei(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Jt,f=l.baseQueue,h=s.pending;if(h!==null){if(f!==null){var E=f.next;f.next=h.next,h.next=E}l.baseQueue=f=h,s.pending=null}if(f!==null){h=f.next,l=l.baseState;var U=E=null,B=null,ie=h;do{var _e=ie.lane;if((kr&_e)===_e)B!==null&&(B=B.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),l=ie.hasEagerState?ie.eagerState:t(l,ie.action);else{var ye={lane:_e,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};B===null?(U=B=ye,E=l):B=B.next=ye,Xt.lanes|=_e,Br|=_e}ie=ie.next}while(ie!==null&&ie!==h);B===null?E=l:B.next=U,oi(l,i.memoizedState)||(Ln=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=B,s.lastRenderedState=l}if(t=s.interleaved,t!==null){f=t;do h=f.lane,Xt.lanes|=h,Br|=h,f=f.next;while(f!==t)}else f===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Oc(t){var i=ei(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var E=f=f.next;do h=t(h,E.action),E=E.next;while(E!==f);oi(h,i.memoizedState)||(Ln=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function yh(){}function Sh(t,i){var s=Xt,l=ei(),f=i(),h=!oi(l.memoizedState,f);if(h&&(l.memoizedState=f,Ln=!0),l=l.queue,kc(wh.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||an!==null&&an.memoizedState.tag&1){if(s.flags|=2048,wa(9,Eh.bind(null,s,l,f,i),void 0,null),on===null)throw Error(n(349));kr&30||Mh(s,i,f)}return f}function Mh(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Eh(t,i,s,l){i.value=s,i.getSnapshot=l,Th(i)&&Ah(t)}function wh(t,i,s){return s(function(){Th(i)&&Ah(t)})}function Th(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!oi(t,s)}catch{return!0}}function Ah(t){var i=Oi(t,1);i!==null&&di(i,t,1,-1)}function Ch(t){var i=Mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},i.queue=t,t=t.dispatch=N0.bind(null,Xt,t),[i.memoizedState,t]}function wa(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function Rh(){return ei().memoizedState}function Do(t,i,s,l){var f=Mi();Xt.flags|=t,f.memoizedState=wa(1|i,s,void 0,l===void 0?null:l)}function Lo(t,i,s,l){var f=ei();l=l===void 0?null:l;var h=void 0;if(Jt!==null){var E=Jt.memoizedState;if(h=E.destroy,l!==null&&Lc(l,E.deps)){f.memoizedState=wa(i,s,h,l);return}}Xt.flags|=t,f.memoizedState=wa(1|i,s,h,l)}function bh(t,i){return Do(8390656,8,t,i)}function kc(t,i){return Lo(2048,8,t,i)}function Ph(t,i){return Lo(4,2,t,i)}function Nh(t,i){return Lo(4,4,t,i)}function Dh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Lh(t,i,s){return s=s!=null?s.concat([t]):null,Lo(4,4,Dh.bind(null,i,t),s)}function Bc(){}function Ih(t,i){var s=ei();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Lc(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Uh(t,i){var s=ei();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Lc(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function Fh(t,i,s){return kr&21?(oi(s,i)||(s=gn(),Xt.lanes|=s,Br|=s,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,Ln=!0),t.memoizedState=s)}function b0(t,i){var s=st;st=s!==0&&4>s?s:4,t(!0);var l=Dc.transition;Dc.transition={};try{t(!1),i()}finally{st=s,Dc.transition=l}}function Oh(){return ei().memoizedState}function P0(t,i,s){var l=pr(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},kh(t))Bh(i,s);else if(s=mh(t,i,s,l),s!==null){var f=Cn();di(s,t,l,f),zh(s,i,l)}}function N0(t,i,s){var l=pr(t),f={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(kh(t))Bh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,U=h(E,s);if(f.hasEagerState=!0,f.eagerState=U,oi(U,E)){var B=i.interleaved;B===null?(f.next=f,Ac(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}s=mh(t,i,f,l),s!==null&&(f=Cn(),di(s,t,l,f),zh(s,i,l))}}function kh(t){var i=t.alternate;return t===Xt||i!==null&&i===Xt}function Bh(t,i){Sa=No=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function zh(t,i,s){if(s&4194240){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Nt(t,s)}}var Io={readContext:Jn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},D0={readContext:Jn,useCallback:function(t,i){return Mi().memoizedState=[t,i===void 0?null:i],t},useContext:Jn,useEffect:bh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Do(4194308,4,Dh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Do(4194308,4,t,i)},useInsertionEffect:function(t,i){return Do(4,2,t,i)},useMemo:function(t,i){var s=Mi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=Mi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=P0.bind(null,Xt,t),[l.memoizedState,t]},useRef:function(t){var i=Mi();return t={current:t},i.memoizedState=t},useState:Ch,useDebugValue:Bc,useDeferredValue:function(t){return Mi().memoizedState=t},useTransition:function(){var t=Ch(!1),i=t[0];return t=b0.bind(null,t[1]),Mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Xt,f=Mi();if(Ht){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),on===null)throw Error(n(349));kr&30||Mh(l,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,bh(wh.bind(null,l,h,t),[t]),l.flags|=2048,wa(9,Eh.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=Mi(),i=on.identifierPrefix;if(Ht){var s=Fi,l=Ui;s=(l&~(1<<32-ke(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=Ma++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=R0++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},L0={readContext:Jn,useCallback:Ih,useContext:Jn,useEffect:kc,useImperativeHandle:Lh,useInsertionEffect:Ph,useLayoutEffect:Nh,useMemo:Uh,useReducer:Fc,useRef:Rh,useState:function(){return Fc(Ea)},useDebugValue:Bc,useDeferredValue:function(t){var i=ei();return Fh(i,Jt.memoizedState,t)},useTransition:function(){var t=Fc(Ea)[0],i=ei().memoizedState;return[t,i]},useMutableSource:yh,useSyncExternalStore:Sh,useId:Oh,unstable_isNewReconciler:!1},I0={readContext:Jn,useCallback:Ih,useContext:Jn,useEffect:kc,useImperativeHandle:Lh,useInsertionEffect:Ph,useLayoutEffect:Nh,useMemo:Uh,useReducer:Oc,useRef:Rh,useState:function(){return Oc(Ea)},useDebugValue:Bc,useDeferredValue:function(t){var i=ei();return Jt===null?i.memoizedState=t:Fh(i,Jt.memoizedState,t)},useTransition:function(){var t=Oc(Ea)[0],i=ei().memoizedState;return[t,i]},useMutableSource:yh,useSyncExternalStore:Sh,useId:Oh,unstable_isNewReconciler:!1};function ci(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function zc(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:re({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Uo={isMounted:function(t){return(t=t._reactInternals)?Kn(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Cn(),f=pr(t),h=ki(l,f);h.payload=i,s!=null&&(h.callback=s),i=ur(t,h,f),i!==null&&(di(i,t,f,l),Co(i,t,f))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Cn(),f=pr(t),h=ki(l,f);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=ur(t,h,f),i!==null&&(di(i,t,f,l),Co(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Cn(),l=pr(t),f=ki(s,l);f.tag=2,i!=null&&(f.callback=i),i=ur(t,f,l),i!==null&&(di(i,t,l,s),Co(i,t,l))}};function Vh(t,i,s,l,f,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!ua(s,l)||!ua(f,h):!0}function Hh(t,i,s){var l=!1,f=or,h=i.contextType;return typeof h=="object"&&h!==null?h=Jn(h):(f=Dn(i)?Lr:_n.current,l=i.contextTypes,h=(l=l!=null)?ds(t,f):or),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Uo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function Gh(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Uo.enqueueReplaceState(i,i.state,null)}function Vc(t,i,s,l){var f=t.stateNode;f.props=s,f.state=t.memoizedState,f.refs={},Cc(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=Jn(h):(h=Dn(i)?Lr:_n.current,f.context=ds(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(zc(t,i,h,s),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Uo.enqueueReplaceState(f,f.state,null),Ro(t,s,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,i){try{var s="",l=i;do s+=qe(l),l=l.return;while(l);var f=s}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function Hc(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Gc(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var U0=typeof WeakMap=="function"?WeakMap:Map;function Wh(t,i,s){s=ki(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Ho||(Ho=!0,ru=l),Gc(t,i)},s}function Xh(t,i,s){s=ki(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;s.payload=function(){return l(f)},s.callback=function(){Gc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Gc(t,i),typeof l!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),s}function jh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new U0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(f.add(s),t=$0.bind(null,t,i,s),i.then(t,t))}function Yh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function qh(t,i,s,l,f){return t.mode&1?(t.flags|=65536,t.lanes=f,t):(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=ki(-1,1),i.tag=2,ur(s,i,1))),s.lanes|=1),t)}var F0=b.ReactCurrentOwner,Ln=!1;function An(t,i,s,l){i.child=t===null?ph(i,null,s,l):gs(i,t.child,s,l)}function $h(t,i,s,l,f){s=s.render;var h=i.ref;return vs(i,f),l=Ic(t,i,s,l,h,f),s=Uc(),t!==null&&!Ln?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Bi(t,i,f)):(Ht&&s&&_c(i),i.flags|=1,An(t,i,l,f),i.child)}function Kh(t,i,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!fu(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Zh(t,i,h,l,f)):(t=qo(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&f)){var E=h.memoizedProps;if(s=s.compare,s=s!==null?s:ua,s(E,l)&&t.ref===i.ref)return Bi(t,i,f)}return i.flags|=1,t=gr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Zh(t,i,s,l,f){if(t!==null){var h=t.memoizedProps;if(ua(h,l)&&t.ref===i.ref)if(Ln=!1,i.pendingProps=l=h,(t.lanes&f)!==0)t.flags&131072&&(Ln=!0);else return i.lanes=t.lanes,Bi(t,i,f)}return Wc(t,i,s,l,f)}function Qh(t,i,s){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Ms,Wn),Wn|=s;else{if(!(s&1073741824))return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ot(Ms,Wn),Wn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Ot(Ms,Wn),Wn|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Ot(Ms,Wn),Wn|=l;return An(t,i,f,s),i.child}function Jh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Wc(t,i,s,l,f){var h=Dn(s)?Lr:_n.current;return h=ds(i,h),vs(i,f),s=Ic(t,i,s,l,h,f),l=Uc(),t!==null&&!Ln?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Bi(t,i,f)):(Ht&&l&&_c(i),i.flags|=1,An(t,i,s,f),i.child)}function ep(t,i,s,l,f){if(Dn(s)){var h=!0;xo(i)}else h=!1;if(vs(i,f),i.stateNode===null)Oo(t,i),Hh(i,s,l),Vc(i,s,l,f),l=!0;else if(t===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var B=E.context,ie=s.contextType;typeof ie=="object"&&ie!==null?ie=Jn(ie):(ie=Dn(s)?Lr:_n.current,ie=ds(i,ie));var _e=s.getDerivedStateFromProps,ye=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==l||B!==ie)&&Gh(i,E,l,ie),cr=!1;var ge=i.memoizedState;E.state=ge,Ro(i,l,E,f),B=i.memoizedState,U!==l||ge!==B||Nn.current||cr?(typeof _e=="function"&&(zc(i,s,_e,l),B=i.memoizedState),(U=cr||Vh(i,s,U,l,ge,B,ie))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),E.props=l,E.state=B,E.context=ie,l=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,gh(t,i),U=i.memoizedProps,ie=i.type===i.elementType?U:ci(i.type,U),E.props=ie,ye=i.pendingProps,ge=E.context,B=s.contextType,typeof B=="object"&&B!==null?B=Jn(B):(B=Dn(s)?Lr:_n.current,B=ds(i,B));var Oe=s.getDerivedStateFromProps;(_e=typeof Oe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==ye||ge!==B)&&Gh(i,E,l,B),cr=!1,ge=i.memoizedState,E.state=ge,Ro(i,l,E,f);var We=i.memoizedState;U!==ye||ge!==We||Nn.current||cr?(typeof Oe=="function"&&(zc(i,s,Oe,l),We=i.memoizedState),(ie=cr||Vh(i,s,ie,l,ge,We,B)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,We,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,We,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=We),E.props=l,E.state=We,E.context=B,l=ie):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Xc(t,i,s,l,h,f)}function Xc(t,i,s,l,f,h){Jh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return f&&sh(i,s,!1),Bi(t,i,h);l=i.stateNode,F0.current=i;var U=E&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=gs(i,t.child,null,h),i.child=gs(i,null,U,h)):An(t,i,U,h),i.memoizedState=l.state,f&&sh(i,s,!0),i.child}function tp(t){var i=t.stateNode;i.pendingContext?ih(t,i.pendingContext,i.pendingContext!==i.context):i.context&&ih(t,i.context,!1),Rc(t,i.containerInfo)}function np(t,i,s,l,f){return ms(),Sc(f),i.flags|=256,An(t,i,s,l),i.child}var jc={dehydrated:null,treeContext:null,retryLane:0};function Yc(t){return{baseLanes:t,cachePool:null,transitions:null}}function ip(t,i,s){var l=i.pendingProps,f=Wt.current,h=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=t!==null&&t.memoizedState===null?!1:(f&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Ot(Wt,f&1),t===null)return yc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},!(l&1)&&h!==null?(h.childLanes=0,h.pendingProps=E):h=$o(E,l,0,null),t=Gr(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Yc(s),i.memoizedState=jc,t):qc(i,E));if(f=t.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return O0(t,i,E,l,U,f,s);if(h){h=l.fallback,E=i.mode,f=t.child,U=f.sibling;var B={mode:"hidden",children:l.children};return!(E&1)&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=gr(f,B),l.subtreeFlags=f.subtreeFlags&14680064),U!==null?h=gr(U,h):(h=Gr(h,E,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?Yc(s):{baseLanes:E.baseLanes|s,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~s,i.memoizedState=jc,l}return h=t.child,t=h.sibling,l=gr(h,{mode:"visible",children:l.children}),!(i.mode&1)&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function qc(t,i){return i=$o({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Fo(t,i,s,l){return l!==null&&Sc(l),gs(i,t.child,null,s),t=qc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function O0(t,i,s,l,f,h,E){if(s)return i.flags&256?(i.flags&=-257,l=Hc(Error(n(422))),Fo(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=$o({mode:"visible",children:l.children},f,0,null),h=Gr(h,f,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,i.mode&1&&gs(i,t.child,null,E),i.child.memoizedState=Yc(E),i.memoizedState=jc,h);if(!(i.mode&1))return Fo(t,i,E,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var U=l.dgst;return l=U,h=Error(n(419)),l=Hc(h,l,void 0),Fo(t,i,E,l)}if(U=(E&t.childLanes)!==0,Ln||U){if(l=on,l!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(l.suspendedLanes|E)?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Oi(t,f),di(l,t,f,-1))}return uu(),l=Hc(Error(n(421))),Fo(t,i,E,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=K0.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,Gn=sr(f.nextSibling),Hn=i,Ht=!0,li=null,t!==null&&(Zn[Qn++]=Ui,Zn[Qn++]=Fi,Zn[Qn++]=Ir,Ui=t.id,Fi=t.overflow,Ir=i),i=qc(i,l.children),i.flags|=4096,i)}function rp(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Tc(t.return,i,s)}function $c(t,i,s,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=f)}function sp(t,i,s){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(An(t,i,l.children,s),l=Wt.current,l&2)l=l&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rp(t,s,i);else if(t.tag===19)rp(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ot(Wt,l),!(i.mode&1))i.memoizedState=null;else switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&bo(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),$c(i,!1,f,s,h);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&bo(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}$c(i,!0,s,null,h);break;case"together":$c(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Oo(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Bi(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Br|=i.lanes,!(s&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=gr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=gr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function k0(t,i,s){switch(i.tag){case 3:tp(i),ms();break;case 5:xh(i);break;case 1:Dn(i.type)&&xo(i);break;case 4:Rc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Ot(To,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ot(Wt,Wt.current&1),i.flags|=128,null):s&i.child.childLanes?ip(t,i,s):(Ot(Wt,Wt.current&1),t=Bi(t,i,s),t!==null?t.sibling:null);Ot(Wt,Wt.current&1);break;case 19:if(l=(s&i.childLanes)!==0,t.flags&128){if(l)return sp(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ot(Wt,Wt.current),l)break;return null;case 22:case 23:return i.lanes=0,Qh(t,i,s)}return Bi(t,i,s)}var ap,Kc,op,lp;ap=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Kc=function(){},op=function(t,i,s,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Or(Si.current);var h=null;switch(s){case"input":f=yt(t,f),l=yt(t,l),h=[];break;case"select":f=re({},f,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":f=Xe(t,f),l=Xe(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=go)}je(s,l);var E;s=null;for(ie in f)if(!l.hasOwnProperty(ie)&&f.hasOwnProperty(ie)&&f[ie]!=null)if(ie==="style"){var U=f[ie];for(E in U)U.hasOwnProperty(E)&&(s||(s={}),s[E]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(o.hasOwnProperty(ie)?h||(h=[]):(h=h||[]).push(ie,null));for(ie in l){var B=l[ie];if(U=f!=null?f[ie]:void 0,l.hasOwnProperty(ie)&&B!==U&&(B!=null||U!=null))if(ie==="style")if(U){for(E in U)!U.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(s||(s={}),s[E]="");for(E in B)B.hasOwnProperty(E)&&U[E]!==B[E]&&(s||(s={}),s[E]=B[E])}else s||(h||(h=[]),h.push(ie,s)),s=B;else ie==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(h=h||[]).push(ie,B)):ie==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(ie,""+B):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(o.hasOwnProperty(ie)?(B!=null&&ie==="onScroll"&&kt("scroll",t),h||U===B||(h=[])):(h=h||[]).push(ie,B))}s&&(h=h||[]).push("style",s);var ie=h;(i.updateQueue=ie)&&(i.flags|=4)}},lp=function(t,i,s,l){s!==l&&(i.flags|=4)};function Ta(t,i){if(!Ht)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function xn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function B0(t,i,s){var l=i.pendingProps;switch(vc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return Dn(i.type)&&vo(),xn(i),null;case 3:return l=i.stateNode,xs(),Bt(Nn),Bt(_n),Nc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Eo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,li!==null&&(ou(li),li=null))),Kc(t,i),xn(i),null;case 5:bc(i);var f=Or(ya.current);if(s=i.type,t!==null&&i.stateNode!=null)op(t,i,s,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return xn(i),null}if(t=Or(Si.current),Eo(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[yi]=i,l[ma]=h,t=(i.mode&1)!==0,s){case"dialog":kt("cancel",l),kt("close",l);break;case"iframe":case"object":case"embed":kt("load",l);break;case"video":case"audio":for(f=0;f<da.length;f++)kt(da[f],l);break;case"source":kt("error",l);break;case"img":case"image":case"link":kt("error",l),kt("load",l);break;case"details":kt("toggle",l);break;case"input":Pt(l,h),kt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},kt("invalid",l);break;case"textarea":D(l,h),kt("invalid",l)}je(s,h),f=null;for(var E in h)if(h.hasOwnProperty(E)){var U=h[E];E==="children"?typeof U=="string"?l.textContent!==U&&(h.suppressHydrationWarning!==!0&&mo(l.textContent,U,t),f=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&mo(l.textContent,U,t),f=["children",""+U]):o.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&kt("scroll",l)}switch(s){case"input":ct(l),z(l,h,!0);break;case"textarea":ct(l),X(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=go)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(s,{is:l.is}):(t=E.createElement(s),s==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,s),t[yi]=i,t[ma]=l,ap(t,i,!1,!1),i.stateNode=t;e:{switch(E=be(s,l),s){case"dialog":kt("cancel",t),kt("close",t),f=l;break;case"iframe":case"object":case"embed":kt("load",t),f=l;break;case"video":case"audio":for(f=0;f<da.length;f++)kt(da[f],t);f=l;break;case"source":kt("error",t),f=l;break;case"img":case"image":case"link":kt("error",t),kt("load",t),f=l;break;case"details":kt("toggle",t),f=l;break;case"input":Pt(t,l),f=yt(t,l),kt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=re({},l,{value:void 0}),kt("invalid",t);break;case"textarea":D(t,l),f=Xe(t,l),kt("invalid",t);break;default:f=l}je(s,f),U=f;for(h in U)if(U.hasOwnProperty(h)){var B=U[h];h==="style"?Ne(t,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&$e(t,B)):h==="children"?typeof B=="string"?(s!=="textarea"||B!=="")&&Ae(t,B):typeof B=="number"&&Ae(t,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?B!=null&&h==="onScroll"&&kt("scroll",t):B!=null&&R(t,h,B,E))}switch(s){case"input":ct(t),z(t,l,!1);break;case"textarea":ct(t),X(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ve(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?St(t,!!l.multiple,h,!1):l.defaultValue!=null&&St(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=go)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(t&&i.stateNode!=null)lp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Or(ya.current),Or(Si.current),Eo(i)){if(l=i.stateNode,s=i.memoizedProps,l[yi]=i,(h=l.nodeValue!==s)&&(t=Hn,t!==null))switch(t.tag){case 3:mo(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mo(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[yi]=i,i.stateNode=l}return xn(i),null;case 13:if(Bt(Wt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ht&&Gn!==null&&i.mode&1&&!(i.flags&128))fh(),ms(),i.flags|=98560,h=!1;else if(h=Eo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[yi]=i}else ms(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;xn(i),h=!1}else li!==null&&(ou(li),li=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,i.mode&1&&(t===null||Wt.current&1?en===0&&(en=3):uu())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return xs(),Kc(t,i),t===null&&ha(i.stateNode.containerInfo),xn(i),null;case 10:return wc(i.type._context),xn(i),null;case 17:return Dn(i.type)&&vo(),xn(i),null;case 19:if(Bt(Wt),h=i.memoizedState,h===null)return xn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)Ta(h,!1);else{if(en!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(E=bo(t),E!==null){for(i.flags|=128,Ta(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Ot(Wt,Wt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Gt()>Es&&(i.flags|=128,l=!0,Ta(h,!1),i.lanes=4194304)}else{if(!l)if(t=bo(E),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Ta(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Ht)return xn(i),null}else 2*Gt()-h.renderingStartTime>Es&&s!==1073741824&&(i.flags|=128,l=!0,Ta(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(s=h.last,s!==null?s.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Gt(),i.sibling=null,s=Wt.current,Ot(Wt,l?s&1|2:s&1),i):(xn(i),null);case 22:case 23:return cu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&i.mode&1?Wn&1073741824&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function z0(t,i){switch(vc(i),i.tag){case 1:return Dn(i.type)&&vo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xs(),Bt(Nn),Bt(_n),Nc(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return bc(i),null;case 13:if(Bt(Wt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Bt(Wt),null;case 4:return xs(),null;case 10:return wc(i.type._context),null;case 22:case 23:return cu(),null;case 24:return null;default:return null}}var ko=!1,yn=!1,V0=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Ss(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Yt(t,i,l)}else s.current=null}function Zc(t,i,s){try{s()}catch(l){Yt(t,i,l)}}var cp=!1;function H0(t,i){if(cc=io,t=Vd(),tc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var E=0,U=-1,B=-1,ie=0,_e=0,ye=t,ge=null;t:for(;;){for(var Oe;ye!==s||f!==0&&ye.nodeType!==3||(U=E+f),ye!==h||l!==0&&ye.nodeType!==3||(B=E+l),ye.nodeType===3&&(E+=ye.nodeValue.length),(Oe=ye.firstChild)!==null;)ge=ye,ye=Oe;for(;;){if(ye===t)break t;if(ge===s&&++ie===f&&(U=E),ge===h&&++_e===l&&(B=E),(Oe=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Oe}s=U===-1||B===-1?null:{start:U,end:B}}else s=null}s=s||{start:0,end:0}}else s=null;for(uc={focusedElem:t,selectionRange:s},io=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var We=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var Ye=We.memoizedProps,$t=We.memoizedState,$=i.stateNode,G=$.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:ci(i.type,Ye),$t);$.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){Yt(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return We=cp,cp=!1,We}function Aa(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&Zc(i,s,h)}f=f.next}while(f!==l)}}function Bo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Qc(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function up(t){var i=t.alternate;i!==null&&(t.alternate=null,up(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[yi],delete i[ma],delete i[pc],delete i[w0],delete i[T0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fp(t){return t.tag===5||t.tag===3||t.tag===4}function dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=go));else if(l!==4&&(t=t.child,t!==null))for(Jc(t,i,s),t=t.sibling;t!==null;)Jc(t,i,s),t=t.sibling}function eu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(eu(t,i,s),t=t.sibling;t!==null;)eu(t,i,s),t=t.sibling}var hn=null,ui=!1;function fr(t,i,s){for(s=s.child;s!==null;)hp(t,i,s),s=s.sibling}function hp(t,i,s){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Fe,s)}catch{}switch(s.tag){case 5:yn||Ss(s,i);case 6:var l=hn,f=ui;hn=null,fr(t,i,s),hn=l,ui=f,hn!==null&&(ui?(t=hn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):hn.removeChild(s.stateNode));break;case 18:hn!==null&&(ui?(t=hn,s=s.stateNode,t.nodeType===8?hc(t.parentNode,s):t.nodeType===1&&hc(t,s),ra(t)):hc(hn,s.stateNode));break;case 4:l=hn,f=ui,hn=s.stateNode.containerInfo,ui=!0,fr(t,i,s),hn=l,ui=f;break;case 0:case 11:case 14:case 15:if(!yn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,E=h.destroy;h=h.tag,E!==void 0&&(h&2||h&4)&&Zc(s,i,E),f=f.next}while(f!==l)}fr(t,i,s);break;case 1:if(!yn&&(Ss(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(U){Yt(s,i,U)}fr(t,i,s);break;case 21:fr(t,i,s);break;case 22:s.mode&1?(yn=(l=yn)||s.memoizedState!==null,fr(t,i,s),yn=l):fr(t,i,s);break;default:fr(t,i,s)}}function pp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new V0),i.forEach(function(l){var f=Z0.bind(null,t,l);s.has(l)||(s.add(l),l.then(f,f))})}}function fi(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l];try{var h=t,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:hn=U.stateNode,ui=!1;break e;case 3:hn=U.stateNode.containerInfo,ui=!0;break e;case 4:hn=U.stateNode.containerInfo,ui=!0;break e}U=U.return}if(hn===null)throw Error(n(160));hp(h,E,f),hn=null,ui=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(ie){Yt(f,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)mp(i,t),i=i.sibling}function mp(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fi(i,t),Ei(t),l&4){try{Aa(3,t,t.return),Bo(3,t)}catch(Ye){Yt(t,t.return,Ye)}try{Aa(5,t,t.return)}catch(Ye){Yt(t,t.return,Ye)}}break;case 1:fi(i,t),Ei(t),l&512&&s!==null&&Ss(s,s.return);break;case 5:if(fi(i,t),Ei(t),l&512&&s!==null&&Ss(s,s.return),t.flags&32){var f=t.stateNode;try{Ae(f,"")}catch(Ye){Yt(t,t.return,Ye)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,E=s!==null?s.memoizedProps:h,U=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&ut(f,h),be(U,E);var ie=be(U,h);for(E=0;E<B.length;E+=2){var _e=B[E],ye=B[E+1];_e==="style"?Ne(f,ye):_e==="dangerouslySetInnerHTML"?$e(f,ye):_e==="children"?Ae(f,ye):R(f,_e,ye,ie)}switch(U){case"input":zt(f,h);break;case"textarea":M(f,h);break;case"select":var ge=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Oe=h.value;Oe!=null?St(f,!!h.multiple,Oe,!1):ge!==!!h.multiple&&(h.defaultValue!=null?St(f,!!h.multiple,h.defaultValue,!0):St(f,!!h.multiple,h.multiple?[]:"",!1))}f[ma]=h}catch(Ye){Yt(t,t.return,Ye)}}break;case 6:if(fi(i,t),Ei(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(Ye){Yt(t,t.return,Ye)}}break;case 3:if(fi(i,t),Ei(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ra(i.containerInfo)}catch(Ye){Yt(t,t.return,Ye)}break;case 4:fi(i,t),Ei(t);break;case 13:fi(i,t),Ei(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(iu=Gt())),l&4&&pp(t);break;case 22:if(_e=s!==null&&s.memoizedState!==null,t.mode&1?(yn=(ie=yn)||_e,fi(i,t),yn=ie):fi(i,t),Ei(t),l&8192){if(ie=t.memoizedState!==null,(t.stateNode.isHidden=ie)&&!_e&&t.mode&1)for(ze=t,_e=t.child;_e!==null;){for(ye=ze=_e;ze!==null;){switch(ge=ze,Oe=ge.child,ge.tag){case 0:case 11:case 14:case 15:Aa(4,ge,ge.return);break;case 1:Ss(ge,ge.return);var We=ge.stateNode;if(typeof We.componentWillUnmount=="function"){l=ge,s=ge.return;try{i=l,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch(Ye){Yt(l,s,Ye)}}break;case 5:Ss(ge,ge.return);break;case 22:if(ge.memoizedState!==null){vp(ye);continue}}Oe!==null?(Oe.return=ge,ze=Oe):vp(ye)}_e=_e.sibling}e:for(_e=null,ye=t;;){if(ye.tag===5){if(_e===null){_e=ye;try{f=ye.stateNode,ie?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=ye.stateNode,B=ye.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=Se("display",E))}catch(Ye){Yt(t,t.return,Ye)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=ie?"":ye.memoizedProps}catch(Ye){Yt(t,t.return,Ye)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:fi(i,t),Ei(t),l&4&&pp(t);break;case 21:break;default:fi(i,t),Ei(t)}}function Ei(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(fp(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(Ae(f,""),l.flags&=-33);var h=dp(t);eu(t,h,f);break;case 3:case 4:var E=l.stateNode.containerInfo,U=dp(t);Jc(t,U,E);break;default:throw Error(n(161))}}catch(B){Yt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function G0(t,i,s){ze=t,gp(t)}function gp(t,i,s){for(var l=(t.mode&1)!==0;ze!==null;){var f=ze,h=f.child;if(f.tag===22&&l){var E=f.memoizedState!==null||ko;if(!E){var U=f.alternate,B=U!==null&&U.memoizedState!==null||yn;U=ko;var ie=yn;if(ko=E,(yn=B)&&!ie)for(ze=f;ze!==null;)E=ze,B=E.child,E.tag===22&&E.memoizedState!==null?xp(f):B!==null?(B.return=E,ze=B):xp(f);for(;h!==null;)ze=h,gp(h),h=h.sibling;ze=f,ko=U,yn=ie}_p(t)}else f.subtreeFlags&8772&&h!==null?(h.return=f,ze=h):_p(t)}}function _p(t){for(;ze!==null;){var i=ze;if(i.flags&8772){var s=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:yn||Bo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!yn)if(s===null)l.componentDidMount();else{var f=i.elementType===i.type?s.memoizedProps:ci(i.type,s.memoizedProps);l.componentDidUpdate(f,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&vh(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}vh(i,E,s)}break;case 5:var U=i.stateNode;if(s===null&&i.flags&4){s=U;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&s.focus();break;case"img":B.src&&(s.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var _e=ie.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&ra(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}yn||i.flags&512&&Qc(i)}catch(ge){Yt(i,i.return,ge)}}if(i===t){ze=null;break}if(s=i.sibling,s!==null){s.return=i.return,ze=s;break}ze=i.return}}function vp(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var s=i.sibling;if(s!==null){s.return=i.return,ze=s;break}ze=i.return}}function xp(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Bo(4,i)}catch(B){Yt(i,s,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(B){Yt(i,f,B)}}var h=i.return;try{Qc(i)}catch(B){Yt(i,h,B)}break;case 5:var E=i.return;try{Qc(i)}catch(B){Yt(i,E,B)}}}catch(B){Yt(i,i.return,B)}if(i===t){ze=null;break}var U=i.sibling;if(U!==null){U.return=i.return,ze=U;break}ze=i.return}}var W0=Math.ceil,zo=b.ReactCurrentDispatcher,tu=b.ReactCurrentOwner,ti=b.ReactCurrentBatchConfig,wt=0,on=null,Kt=null,pn=0,Wn=0,Ms=ar(0),en=0,Ca=null,Br=0,Vo=0,nu=0,Ra=null,In=null,iu=0,Es=1/0,zi=null,Ho=!1,ru=null,dr=null,Go=!1,hr=null,Wo=0,ba=0,su=null,Xo=-1,jo=0;function Cn(){return wt&6?Gt():Xo!==-1?Xo:Xo=Gt()}function pr(t){return t.mode&1?wt&2&&pn!==0?pn&-pn:C0.transition!==null?(jo===0&&(jo=gn()),jo):(t=st,t!==0||(t=window.event,t=t===void 0?16:Sd(t.type)),t):1}function di(t,i,s,l){if(50<ba)throw ba=0,su=null,Error(n(185));Qt(t,s,l),(!(wt&2)||t!==on)&&(t===on&&(!(wt&2)&&(Vo|=s),en===4&&mr(t,pn)),Un(t,l),s===1&&wt===0&&!(i.mode&1)&&(Es=Gt()+500,yo&&lr()))}function Un(t,i){var s=t.callbackNode;bt(t,i);var l=At(t,t===on?pn:0);if(l===0)s!==null&&eo(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&eo(s),i===1)t.tag===0?A0(Sp.bind(null,t)):ah(Sp.bind(null,t)),M0(function(){!(wt&6)&&lr()}),s=null;else{switch(Tn(l)){case 1:s=j;break;case 4:s=se;break;case 16:s=ne;break;case 536870912:s=De;break;default:s=ne}s=bp(s,yp.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function yp(t,i){if(Xo=-1,jo=0,wt&6)throw Error(n(327));var s=t.callbackNode;if(ws()&&t.callbackNode!==s)return null;var l=At(t,t===on?pn:0);if(l===0)return null;if(l&30||l&t.expiredLanes||i)i=Yo(t,l);else{i=l;var f=wt;wt|=2;var h=Ep();(on!==t||pn!==i)&&(zi=null,Es=Gt()+500,Vr(t,i));do try{Y0();break}catch(U){Mp(t,U)}while(!0);Ec(),zo.current=h,wt=f,Kt!==null?i=0:(on=null,pn=0,i=en)}if(i!==0){if(i===2&&(f=_t(t),f!==0&&(l=f,i=au(t,f))),i===1)throw s=Ca,Vr(t,0),mr(t,l),Un(t,Gt()),s;if(i===6)mr(t,l);else{if(f=t.current.alternate,!(l&30)&&!X0(f)&&(i=Yo(t,l),i===2&&(h=_t(t),h!==0&&(l=h,i=au(t,h))),i===1))throw s=Ca,Vr(t,0),mr(t,l),Un(t,Gt()),s;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Hr(t,In,zi);break;case 3:if(mr(t,l),(l&130023424)===l&&(i=iu+500-Gt(),10<i)){if(At(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){Cn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=dc(Hr.bind(null,t,In,zi),i);break}Hr(t,In,zi);break;case 4:if(mr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var E=31-ke(l);h=1<<E,E=i[E],E>f&&(f=E),l&=~h}if(l=f,l=Gt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*W0(l/1960))-l,10<l){t.timeoutHandle=dc(Hr.bind(null,t,In,zi),l);break}Hr(t,In,zi);break;case 5:Hr(t,In,zi);break;default:throw Error(n(329))}}}return Un(t,Gt()),t.callbackNode===s?yp.bind(null,t):null}function au(t,i){var s=Ra;return t.current.memoizedState.isDehydrated&&(Vr(t,i).flags|=256),t=Yo(t,i),t!==2&&(i=In,In=s,i!==null&&ou(i)),t}function ou(t){In===null?In=t:In.push.apply(In,t)}function X0(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!oi(h(),f))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function mr(t,i){for(i&=~nu,i&=~Vo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-ke(i),l=1<<s;t[s]=-1,i&=~l}}function Sp(t){if(wt&6)throw Error(n(327));ws();var i=At(t,0);if(!(i&1))return Un(t,Gt()),null;var s=Yo(t,i);if(t.tag!==0&&s===2){var l=_t(t);l!==0&&(i=l,s=au(t,l))}if(s===1)throw s=Ca,Vr(t,0),mr(t,i),Un(t,Gt()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Hr(t,In,zi),Un(t,Gt()),null}function lu(t,i){var s=wt;wt|=1;try{return t(i)}finally{wt=s,wt===0&&(Es=Gt()+500,yo&&lr())}}function zr(t){hr!==null&&hr.tag===0&&!(wt&6)&&ws();var i=wt;wt|=1;var s=ti.transition,l=st;try{if(ti.transition=null,st=1,t)return t()}finally{st=l,ti.transition=s,wt=i,!(wt&6)&&lr()}}function cu(){Wn=Ms.current,Bt(Ms)}function Vr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,S0(s)),Kt!==null)for(s=Kt.return;s!==null;){var l=s;switch(vc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&vo();break;case 3:xs(),Bt(Nn),Bt(_n),Nc();break;case 5:bc(l);break;case 4:xs();break;case 13:Bt(Wt);break;case 19:Bt(Wt);break;case 10:wc(l.type._context);break;case 22:case 23:cu()}s=s.return}if(on=t,Kt=t=gr(t.current,null),pn=Wn=i,en=0,Ca=null,nu=Vo=Br=0,In=Ra=null,Fr!==null){for(i=0;i<Fr.length;i++)if(s=Fr[i],l=s.interleaved,l!==null){s.interleaved=null;var f=l.next,h=s.pending;if(h!==null){var E=h.next;h.next=f,l.next=E}s.pending=l}Fr=null}return t}function Mp(t,i){do{var s=Kt;try{if(Ec(),Po.current=Io,No){for(var l=Xt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}No=!1}if(kr=0,an=Jt=Xt=null,Sa=!1,Ma=0,tu.current=null,s===null||s.return===null){en=1,Ca=i,Kt=null;break}e:{var h=t,E=s.return,U=s,B=i;if(i=pn,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ie=B,_e=U,ye=_e.tag;if(!(_e.mode&1)&&(ye===0||ye===11||ye===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Oe=Yh(E);if(Oe!==null){Oe.flags&=-257,qh(Oe,E,U,h,i),Oe.mode&1&&jh(h,ie,i),i=Oe,B=ie;var We=i.updateQueue;if(We===null){var Ye=new Set;Ye.add(B),i.updateQueue=Ye}else We.add(B);break e}else{if(!(i&1)){jh(h,ie,i),uu();break e}B=Error(n(426))}}else if(Ht&&U.mode&1){var $t=Yh(E);if($t!==null){!($t.flags&65536)&&($t.flags|=256),qh($t,E,U,h,i),Sc(ys(B,U));break e}}h=B=ys(B,U),en!==4&&(en=2),Ra===null?Ra=[h]:Ra.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var $=Wh(h,B,i);_h(h,$);break e;case 1:U=B;var G=h.type,Q=h.stateNode;if(!(h.flags&128)&&(typeof G.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(dr===null||!dr.has(Q)))){h.flags|=65536,i&=-i,h.lanes|=i;var we=Xh(h,U,i);_h(h,we);break e}}h=h.return}while(h!==null)}Tp(s)}catch(Ke){i=Ke,Kt===s&&s!==null&&(Kt=s=s.return);continue}break}while(!0)}function Ep(){var t=zo.current;return zo.current=Io,t===null?Io:t}function uu(){(en===0||en===3||en===2)&&(en=4),on===null||!(Br&268435455)&&!(Vo&268435455)||mr(on,pn)}function Yo(t,i){var s=wt;wt|=2;var l=Ep();(on!==t||pn!==i)&&(zi=null,Vr(t,i));do try{j0();break}catch(f){Mp(t,f)}while(!0);if(Ec(),wt=s,zo.current=l,Kt!==null)throw Error(n(261));return on=null,pn=0,en}function j0(){for(;Kt!==null;)wp(Kt)}function Y0(){for(;Kt!==null&&!Vl();)wp(Kt)}function wp(t){var i=Rp(t.alternate,t,Wn);t.memoizedProps=t.pendingProps,i===null?Tp(t):Kt=i,tu.current=null}function Tp(t){var i=t;do{var s=i.alternate;if(t=i.return,i.flags&32768){if(s=z0(s,i),s!==null){s.flags&=32767,Kt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{en=6,Kt=null;return}}else if(s=B0(s,i,Wn),s!==null){Kt=s;return}if(i=i.sibling,i!==null){Kt=i;return}Kt=i=t}while(i!==null);en===0&&(en=5)}function Hr(t,i,s){var l=st,f=ti.transition;try{ti.transition=null,st=1,q0(t,i,s,l)}finally{ti.transition=f,st=l}return null}function q0(t,i,s,l){do ws();while(hr!==null);if(wt&6)throw Error(n(327));s=t.finishedWork;var f=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(Nr(t,h),t===on&&(Kt=on=null,pn=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||Go||(Go=!0,bp(ne,function(){return ws(),null})),h=(s.flags&15990)!==0,s.subtreeFlags&15990||h){h=ti.transition,ti.transition=null;var E=st;st=1;var U=wt;wt|=4,tu.current=null,H0(t,s),mp(s,t),p0(uc),io=!!cc,uc=cc=null,t.current=s,G0(s),Hl(),wt=U,st=E,ti.transition=h}else t.current=s;if(Go&&(Go=!1,hr=t,Wo=f),h=t.pendingLanes,h===0&&(dr=null),Ve(s.stateNode),Un(t,Gt()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)f=i[s],l(f.value,{componentStack:f.stack,digest:f.digest});if(Ho)throw Ho=!1,t=ru,ru=null,t;return Wo&1&&t.tag!==0&&ws(),h=t.pendingLanes,h&1?t===su?ba++:(ba=0,su=t):ba=0,lr(),null}function ws(){if(hr!==null){var t=Tn(Wo),i=ti.transition,s=st;try{if(ti.transition=null,st=16>t?16:t,hr===null)var l=!1;else{if(t=hr,hr=null,Wo=0,wt&6)throw Error(n(331));var f=wt;for(wt|=4,ze=t.current;ze!==null;){var h=ze,E=h.child;if(ze.flags&16){var U=h.deletions;if(U!==null){for(var B=0;B<U.length;B++){var ie=U[B];for(ze=ie;ze!==null;){var _e=ze;switch(_e.tag){case 0:case 11:case 15:Aa(8,_e,h)}var ye=_e.child;if(ye!==null)ye.return=_e,ze=ye;else for(;ze!==null;){_e=ze;var ge=_e.sibling,Oe=_e.return;if(up(_e),_e===ie){ze=null;break}if(ge!==null){ge.return=Oe,ze=ge;break}ze=Oe}}}var We=h.alternate;if(We!==null){var Ye=We.child;if(Ye!==null){We.child=null;do{var $t=Ye.sibling;Ye.sibling=null,Ye=$t}while(Ye!==null)}}ze=h}}if(h.subtreeFlags&2064&&E!==null)E.return=h,ze=E;else e:for(;ze!==null;){if(h=ze,h.flags&2048)switch(h.tag){case 0:case 11:case 15:Aa(9,h,h.return)}var $=h.sibling;if($!==null){$.return=h.return,ze=$;break e}ze=h.return}}var G=t.current;for(ze=G;ze!==null;){E=ze;var Q=E.child;if(E.subtreeFlags&2064&&Q!==null)Q.return=E,ze=Q;else e:for(E=G;ze!==null;){if(U=ze,U.flags&2048)try{switch(U.tag){case 0:case 11:case 15:Bo(9,U)}}catch(Ke){Yt(U,U.return,Ke)}if(U===E){ze=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,ze=we;break e}ze=U.return}}if(wt=f,lr(),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Fe,t)}catch{}l=!0}return l}finally{st=s,ti.transition=i}}return!1}function Ap(t,i,s){i=ys(s,i),i=Wh(t,i,1),t=ur(t,i,1),i=Cn(),t!==null&&(Qt(t,1,i),Un(t,i))}function Yt(t,i,s){if(t.tag===3)Ap(t,t,s);else for(;i!==null;){if(i.tag===3){Ap(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(dr===null||!dr.has(l))){t=ys(s,t),t=Xh(i,t,1),i=ur(i,t,1),t=Cn(),i!==null&&(Qt(i,1,t),Un(i,t));break}}i=i.return}}function $0(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=Cn(),t.pingedLanes|=t.suspendedLanes&s,on===t&&(pn&s)===s&&(en===4||en===3&&(pn&130023424)===pn&&500>Gt()-iu?Vr(t,0):nu|=s),Un(t,i)}function Cp(t,i){i===0&&(t.mode&1?(i=Ft,Ft<<=1,!(Ft&130023424)&&(Ft=4194304)):i=1);var s=Cn();t=Oi(t,i),t!==null&&(Qt(t,i,s),Un(t,s))}function K0(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Cp(t,s)}function Z0(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Cp(t,s)}var Rp;Rp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||Nn.current)Ln=!0;else{if(!(t.lanes&s)&&!(i.flags&128))return Ln=!1,k0(t,i,s);Ln=!!(t.flags&131072)}else Ln=!1,Ht&&i.flags&1048576&&oh(i,Mo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Oo(t,i),t=i.pendingProps;var f=ds(i,_n.current);vs(i,s),f=Ic(null,i,l,t,f,s);var h=Uc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Dn(l)?(h=!0,xo(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Cc(i),f.updater=Uo,i.stateNode=f,f._reactInternals=i,Vc(i,l,t,s),i=Xc(null,i,l,!0,h,s)):(i.tag=0,Ht&&h&&_c(i),An(null,i,f,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Oo(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=J0(l),t=ci(l,t),f){case 0:i=Wc(null,i,l,t,s);break e;case 1:i=ep(null,i,l,t,s);break e;case 11:i=$h(null,i,l,t,s);break e;case 14:i=Kh(null,i,l,ci(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ci(l,f),Wc(t,i,l,f,s);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ci(l,f),ep(t,i,l,f,s);case 3:e:{if(tp(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,gh(t,i),Ro(i,l,null,s);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=ys(Error(n(423)),i),i=np(t,i,l,s,f);break e}else if(l!==f){f=ys(Error(n(424)),i),i=np(t,i,l,s,f);break e}else for(Gn=sr(i.stateNode.containerInfo.firstChild),Hn=i,Ht=!0,li=null,s=ph(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ms(),l===f){i=Bi(t,i,s);break e}An(t,i,l,s)}i=i.child}return i;case 5:return xh(i),t===null&&yc(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,E=f.children,fc(l,f)?E=null:h!==null&&fc(l,h)&&(i.flags|=32),Jh(t,i),An(t,i,E,s),i.child;case 6:return t===null&&yc(i),null;case 13:return ip(t,i,s);case 4:return Rc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=gs(i,null,l,s):An(t,i,l,s),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ci(l,f),$h(t,i,l,f,s);case 7:return An(t,i,i.pendingProps,s),i.child;case 8:return An(t,i,i.pendingProps.children,s),i.child;case 12:return An(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,E=f.value,Ot(To,l._currentValue),l._currentValue=E,h!==null)if(oi(h.value,E)){if(h.children===f.children&&!Nn.current){i=Bi(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){E=h.child;for(var B=U.firstContext;B!==null;){if(B.context===l){if(h.tag===1){B=ki(-1,s&-s),B.tag=2;var ie=h.updateQueue;if(ie!==null){ie=ie.shared;var _e=ie.pending;_e===null?B.next=B:(B.next=_e.next,_e.next=B),ie.pending=B}}h.lanes|=s,B=h.alternate,B!==null&&(B.lanes|=s),Tc(h.return,s,i),U.lanes|=s;break}B=B.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=s,U=E.alternate,U!==null&&(U.lanes|=s),Tc(E,s,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}An(t,i,f.children,s),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,vs(i,s),f=Jn(f),l=l(f),i.flags|=1,An(t,i,l,s),i.child;case 14:return l=i.type,f=ci(l,i.pendingProps),f=ci(l.type,f),Kh(t,i,l,f,s);case 15:return Zh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ci(l,f),Oo(t,i),i.tag=1,Dn(l)?(t=!0,xo(i)):t=!1,vs(i,s),Hh(i,l,f),Vc(i,l,f,s),Xc(null,i,l,!0,t,s);case 19:return sp(t,i,s);case 22:return Qh(t,i,s)}throw Error(n(156,i.tag))};function bp(t,i){return Ja(t,i)}function Q0(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,i,s,l){return new Q0(t,i,s,l)}function fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function J0(t){if(typeof t=="function")return fu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ee)return 11;if(t===le)return 14}return 2}function gr(t,i){var s=t.alternate;return s===null?(s=ni(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function qo(t,i,s,l,f,h){var E=2;if(l=t,typeof t=="function")fu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case O:return Gr(s.children,f,h,i);case W:E=8,f|=8;break;case w:return t=ni(12,s,i,f|2),t.elementType=w,t.lanes=h,t;case J:return t=ni(13,s,i,f),t.elementType=J,t.lanes=h,t;case fe:return t=ni(19,s,i,f),t.elementType=fe,t.lanes=h,t;case q:return $o(s,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:E=10;break e;case V:E=9;break e;case ee:E=11;break e;case le:E=14;break e;case oe:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ni(E,s,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Gr(t,i,s,l){return t=ni(7,t,l,i),t.lanes=s,t}function $o(t,i,s,l){return t=ni(22,t,l,i),t.elementType=q,t.lanes=s,t.stateNode={isHidden:!1},t}function du(t,i,s){return t=ni(6,t,null,i),t.lanes=s,t}function hu(t,i,s){return i=ni(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function e_(t,i,s,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vi(0),this.expirationTimes=vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function pu(t,i,s,l,f,h,E,U,B){return t=new e_(t,i,s,U,B),i===1?(i=1,h===!0&&(i|=8)):i=0,h=ni(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cc(h),t}function t_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function Pp(t){if(!t)return or;t=t._reactInternals;e:{if(Kn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Dn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Dn(s))return rh(t,s,i)}return i}function Np(t,i,s,l,f,h,E,U,B){return t=pu(s,l,!0,t,f,h,E,U,B),t.context=Pp(null),s=t.current,l=Cn(),f=pr(s),h=ki(l,f),h.callback=i??null,ur(s,h,f),t.current.lanes=f,Qt(t,f,l),Un(t,l),t}function Ko(t,i,s,l){var f=i.current,h=Cn(),E=pr(f);return s=Pp(s),i.context===null?i.context=s:i.pendingContext=s,i=ki(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=ur(f,i,E),t!==null&&(di(t,f,E,h),Co(t,f,E)),E}function Zo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function mu(t,i){Dp(t,i),(t=t.alternate)&&Dp(t,i)}var Lp=typeof reportError=="function"?reportError:function(t){console.error(t)};function gu(t){this._internalRoot=t}Qo.prototype.render=gu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ko(t,i,null,null)},Qo.prototype.unmount=gu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;zr(function(){Ko(null,t,null,null)}),i[Li]=null}};function Qo(t){this._internalRoot=t}Qo.prototype.unstable_scheduleHydration=function(t){if(t){var i=xi();t={blockedOn:null,target:t,priority:i};for(var s=0;s<nr.length&&i!==0&&i<nr[s].priority;s++);nr.splice(s,0,t),s===0&&xd(t)}};function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function n_(t,i,s,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var ie=Zo(E);h.call(ie)}}var E=Np(i,l,t,0,null,!1,!1,"",Ip);return t._reactRootContainer=E,t[Li]=E.current,ha(t.nodeType===8?t.parentNode:t),zr(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var U=l;l=function(){var ie=Zo(B);U.call(ie)}}var B=pu(t,0,!1,null,null,!1,!1,"",Ip);return t._reactRootContainer=B,t[Li]=B.current,ha(t.nodeType===8?t.parentNode:t),zr(function(){Ko(i,B,s,l)}),B}function el(t,i,s,l,f){var h=s._reactRootContainer;if(h){var E=h;if(typeof f=="function"){var U=f;f=function(){var B=Zo(E);U.call(B)}}Ko(i,E,t,f)}else E=n_(s,i,t,f,l);return Zo(E)}rn=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=Ut(i.pendingLanes);s!==0&&(Nt(i,s|1),Un(i,Gt()),!(wt&6)&&(Es=Gt()+500,lr()))}break;case 13:zr(function(){var l=Oi(t,1);if(l!==null){var f=Cn();di(l,t,1,f)}}),mu(t,1)}},sn=function(t){if(t.tag===13){var i=Oi(t,134217728);if(i!==null){var s=Cn();di(i,t,134217728,s)}mu(t,134217728)}},ns=function(t){if(t.tag===13){var i=pr(t),s=Oi(t,i);if(s!==null){var l=Cn();di(s,t,i,l)}mu(t,i)}},xi=function(){return st},_d=function(t,i){var s=st;try{return st=t,i()}finally{st=s}},Le=function(t,i,s){switch(i){case"input":if(zt(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=_o(l);if(!f)throw Error(n(90));Dt(l),zt(l,f)}}}break;case"textarea":M(t,s);break;case"select":i=s.value,i!=null&&St(t,!!s.multiple,i,!1)}},it=lu,Lt=zr;var i_={usingClientEntryPoint:!1,Events:[ga,us,_o,pe,Pe,lu]},Pa={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},r_={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Js(t),t===null?null:t.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Fe=tl.inject(r_),Ce=tl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i_,Fn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_u(i))throw Error(n(200));return t_(t,i,null,s)},Fn.createRoot=function(t,i){if(!_u(t))throw Error(n(299));var s=!1,l="",f=Lp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=pu(t,1,!1,null,null,s,!1,l,f),t[Li]=i.current,ha(t.nodeType===8?t.parentNode:t),new gu(i)},Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Js(i),t=t===null?null:t.stateNode,t},Fn.flushSync=function(t){return zr(t)},Fn.hydrate=function(t,i,s){if(!Jo(i))throw Error(n(200));return el(null,t,i,!0,s)},Fn.hydrateRoot=function(t,i,s){if(!_u(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,f=!1,h="",E=Lp;if(s!=null&&(s.unstable_strictMode===!0&&(f=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(E=s.onRecoverableError)),i=Np(i,null,t,1,s??null,f,!1,h,E),t[Li]=i.current,ha(t),l)for(t=0;t<l.length;t++)s=l[t],f=s._getVersion,f=f(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,f]:i.mutableSourceEagerHydrationData.push(s,f);return new Qo(i)},Fn.render=function(t,i,s){if(!Jo(i))throw Error(n(200));return el(null,t,i,!1,s)},Fn.unmountComponentAtNode=function(t){if(!Jo(t))throw Error(n(40));return t._reactRootContainer?(zr(function(){el(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1},Fn.unstable_batchedUpdates=lu,Fn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Jo(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return el(t,i,s,!1,l)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var Hp;function d_(){if(Hp)return yu.exports;Hp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),yu.exports=f_(),yu.exports}var Gp;function h_(){if(Gp)return nl;Gp=1;var a=d_();return nl.createRoot=a.createRoot,nl.hydrateRoot=a.hydrateRoot,nl}var p_=h_();/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g_=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Wp=a=>{const e=g_(a);return e.charAt(0).toUpperCase()+e.slice(1)},Xm=(...a)=>a.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),__=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=un.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:u,...d},p)=>un.createElement("svg",{ref:p,...v_,width:e,height:e,stroke:a,strokeWidth:r?Number(n)*24/Number(e):n,className:Xm("lucide",o),...!c&&!__(d)&&{"aria-hidden":"true"},...d},[...u.map(([m,v])=>un.createElement(m,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=(a,e)=>{const n=un.forwardRef(({className:r,...o},c)=>un.createElement(x_,{ref:c,iconNode:e,className:Xm(`lucide-${m_(Wp(a))}`,`lucide-${a}`,r),...o}));return n.displayName=Wp(a),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Xp=dn("award",y_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],M_=dn("briefcase",S_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],w_=dn("chevron-down",E_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],A_=dn("cloud",T_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],jp=dn("code",C_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],b_=dn("database",R_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],N_=dn("external-link",P_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],L_=dn("github",D_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],U_=dn("graduation-cap",I_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],O_=dn("linkedin",F_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],B_=dn("mail",k_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],V_=dn("menu",z_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],G_=dn("send",H_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],X_=dn("server",W_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Y_=dn("settings",j_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],$_=dn("smartphone",q_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Z_=dn("twitter",K_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],J_=dn("x",Q_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const td="182",ev=0,Yp=1,tv=2,Al=1,nv=2,Ba=3,Ar=0,kn=1,ji=2,qi=0,Bs=1,rf=2,qp=3,$p=4,iv=5,Zr=100,rv=101,sv=102,av=103,ov=104,lv=200,cv=201,uv=202,fv=203,sf=204,af=205,dv=206,hv=207,pv=208,mv=209,gv=210,_v=211,vv=212,xv=213,yv=214,of=0,lf=1,cf=2,Vs=3,uf=4,ff=5,df=6,hf=7,jm=0,Sv=1,Mv=2,Ri=0,Ym=1,qm=2,$m=3,Km=4,Zm=5,Qm=6,Jm=7,eg=300,ts=301,Hs=302,pf=303,mf=304,Fl=306,gf=1e3,Yi=1001,_f=1002,mn=1003,Ev=1004,il=1005,En=1006,Eu=1007,Jr=1008,qn=1009,tg=1010,ng=1011,Va=1012,nd=1013,Pi=1014,Ai=1015,Ki=1016,id=1017,rd=1018,Ha=1020,ig=35902,rg=35899,sg=1021,ag=1022,_i=1023,Zi=1026,es=1027,og=1028,sd=1029,Gs=1030,ad=1031,od=1033,Cl=33776,Rl=33777,bl=33778,Pl=33779,vf=35840,xf=35841,yf=35842,Sf=35843,Mf=36196,Ef=37492,wf=37496,Tf=37488,Af=37489,Cf=37490,Rf=37491,bf=37808,Pf=37809,Nf=37810,Df=37811,Lf=37812,If=37813,Uf=37814,Ff=37815,Of=37816,kf=37817,Bf=37818,zf=37819,Vf=37820,Hf=37821,Gf=36492,Wf=36494,Xf=36495,jf=36283,Yf=36284,qf=36285,$f=36286,wv=3200,lg=0,Tv=1,wr="",ri="srgb",Ws="srgb-linear",Dl="linear",It="srgb",Ts=7680,Kp=519,Av=512,Cv=513,Rv=514,ld=515,bv=516,Pv=517,cd=518,Nv=519,Zp=35044,Qp="300 es",Ci=2e3,Ll=2001;function cg(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Il(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Dv(){const a=Il("canvas");return a.style.display="block",a}const Jp={};function em(...a){const e="THREE."+a.shift();console.log(e,...a)}function at(...a){const e="THREE."+a.shift();console.warn(e,...a)}function Rt(...a){const e="THREE."+a.shift();console.error(e,...a)}function Ga(...a){const e=a.join(" ");e in Jp||(Jp[e]=!0,at(...a))}function Lv(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}class js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wu=Math.PI/180,Kf=180/Math.PI;function Xa(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[a&255]+Sn[a>>8&255]+Sn[a>>16&255]+Sn[a>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function vt(a,e,n){return Math.max(e,Math.min(n,a))}function Iv(a,e){return(a%e+e)%e}function Tu(a,e,n){return(1-n)*a+n*e}function Da(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function On(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class xt{constructor(e=0,n=0){xt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ja{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,d){let p=r[o+0],m=r[o+1],v=r[o+2],g=r[o+3],x=c[u+0],S=c[u+1],T=c[u+2],C=c[u+3];if(d<=0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=g;return}if(d>=1){e[n+0]=x,e[n+1]=S,e[n+2]=T,e[n+3]=C;return}if(g!==C||p!==x||m!==S||v!==T){let y=p*x+m*S+v*T+g*C;y<0&&(x=-x,S=-S,T=-T,C=-C,y=-y);let _=1-d;if(y<.9995){const N=Math.acos(y),R=Math.sin(N);_=Math.sin(_*N)/R,d=Math.sin(d*N)/R,p=p*_+x*d,m=m*_+S*d,v=v*_+T*d,g=g*_+C*d}else{p=p*_+x*d,m=m*_+S*d,v=v*_+T*d,g=g*_+C*d;const N=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=N,m*=N,v*=N,g*=N}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,o,c,u){const d=r[o],p=r[o+1],m=r[o+2],v=r[o+3],g=c[u],x=c[u+1],S=c[u+2],T=c[u+3];return e[n]=d*T+v*g+p*S-m*x,e[n+1]=p*T+v*x+m*g-d*S,e[n+2]=m*T+v*S+d*x-p*g,e[n+3]=v*T-d*g-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(o/2),g=d(c/2),x=p(r/2),S=p(o/2),T=p(c/2);switch(u){case"XYZ":this._x=x*v*g+m*S*T,this._y=m*S*g-x*v*T,this._z=m*v*T+x*S*g,this._w=m*v*g-x*S*T;break;case"YXZ":this._x=x*v*g+m*S*T,this._y=m*S*g-x*v*T,this._z=m*v*T-x*S*g,this._w=m*v*g+x*S*T;break;case"ZXY":this._x=x*v*g-m*S*T,this._y=m*S*g+x*v*T,this._z=m*v*T+x*S*g,this._w=m*v*g-x*S*T;break;case"ZYX":this._x=x*v*g-m*S*T,this._y=m*S*g+x*v*T,this._z=m*v*T-x*S*g,this._w=m*v*g+x*S*T;break;case"YZX":this._x=x*v*g+m*S*T,this._y=m*S*g+x*v*T,this._z=m*v*T-x*S*g,this._w=m*v*g-x*S*T;break;case"XZY":this._x=x*v*g-m*S*T,this._y=m*S*g-x*v*T,this._z=m*v*T+x*S*g,this._w=m*v*g+x*S*T;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],d=n[5],p=n[9],m=n[2],v=n[6],g=n[10],x=r+d+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-p)*S,this._y=(c-m)*S,this._z=(u-o)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(v-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+m)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(c-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(u-o)/S,this._x=(c+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+u*d+o*m-c*p,this._y=o*v+u*p+c*d-r*m,this._z=c*v+u*m+r*p-o*d,this._w=u*v-r*d-o*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),v=Math.sin(m);p=Math.sin(p*m)/v,n=Math.sin(n*m)/v,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),v=2*(d*n-c*o),g=2*(c*r-u*n);return this.x=n+p*m+u*g-d*v,this.y=r+p*v+d*m-c*g,this.z=o+p*g+c*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,d=n.y,p=n.z;return this.x=o*p-c*d,this.y=c*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Au=new Z,tm=new ja;class ft{constructor(e,n,r,o,c,u,d,p,m){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,p,m)}set(e,n,r,o,c,u,d,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],v=r[4],g=r[7],x=r[2],S=r[5],T=r[8],C=o[0],y=o[3],_=o[6],N=o[1],R=o[4],b=o[7],L=o[2],I=o[5],O=o[8];return c[0]=u*C+d*N+p*L,c[3]=u*y+d*R+p*I,c[6]=u*_+d*b+p*O,c[1]=m*C+v*N+g*L,c[4]=m*y+v*R+g*I,c[7]=m*_+v*b+g*O,c[2]=x*C+S*N+T*L,c[5]=x*y+S*R+T*I,c[8]=x*_+S*b+T*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*u*v-n*d*m-r*c*v+r*d*p+o*c*m-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=v*u-d*m,x=d*p-v*c,S=m*c-u*p,T=n*g+r*x+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=g*C,e[1]=(o*m-v*r)*C,e[2]=(d*r-o*u)*C,e[3]=x*C,e[4]=(v*n-o*p)*C,e[5]=(o*c-d*n)*C,e[6]=S*C,e[7]=(r*p-m*n)*C,e[8]=(u*n-r*c)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Cu.makeScale(e,n)),this}rotate(e){return this.premultiply(Cu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cu=new ft,nm=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),im=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uv(){const a={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===It&&(o.r=$i(o.r),o.g=$i(o.g),o.b=$i(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=zs(o.r),o.g=zs(o.g),o.b=zs(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===wr?Dl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Ga("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Ga("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Ws]:{primaries:e,whitePoint:r,transfer:Dl,toXYZ:nm,fromXYZ:im,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:It,toXYZ:nm,fromXYZ:im,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),a}const Tt=Uv();function $i(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function zs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let As;class Fv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{As===void 0&&(As=Il("canvas")),As.width=e.width,As.height=e.height;const o=As.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=As}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Il("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=$i(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor($i(n[r]/255)*255):n[r]=$i(n[r]);return{data:n,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ov=0;class ud{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=Xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Ru(o[u].image)):c.push(Ru(o[u]))}else c=Ru(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Ru(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Fv.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let kv=0;const bu=new Z;class bn extends js{constructor(e=bn.DEFAULT_IMAGE,n=bn.DEFAULT_MAPPING,r=Yi,o=Yi,c=En,u=Jr,d=_i,p=qn,m=bn.DEFAULT_ANISOTROPY,v=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=Xa(),this.name="",this.source=new ud(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bu).x}get height(){return this.source.getSize(bu).y}get depth(){return this.source.getSize(bu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){at(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){at(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gf:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case _f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gf:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case _f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=eg;bn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,n=0,r=0,o=1){qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,m=p[0],v=p[4],g=p[8],x=p[1],S=p[5],T=p[9],C=p[2],y=p[6],_=p[10];if(Math.abs(v-x)<.01&&Math.abs(g-C)<.01&&Math.abs(T-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+C)<.1&&Math.abs(T+y)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(m+1)/2,b=(S+1)/2,L=(_+1)/2,I=(v+x)/4,O=(g+C)/4,W=(T+y)/4;return R>b&&R>L?R<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(R),o=I/r,c=O/r):b>L?b<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(b),r=I/o,c=W/o):L<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(L),r=O/c,o=W/c),this.set(r,o,c,n),this}let N=Math.sqrt((y-T)*(y-T)+(g-C)*(g-C)+(x-v)*(x-v));return Math.abs(N)<.001&&(N=1),this.x=(y-T)/N,this.y=(g-C)/N,this.z=(x-v)/N,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bv extends js{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n);const o={width:e,height:n,depth:r.depth},c=new bn(o);this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new ud(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Bv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class ug extends bn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=mn,this.minFilter=mn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zv extends bn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=mn,this.minFilter=mn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ya{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(hi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(hi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=hi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,hi):hi.fromBufferAttribute(c,u),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rl.copy(r.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),sl.subVectors(this.max,La),Cs.subVectors(e.a,La),Rs.subVectors(e.b,La),bs.subVectors(e.c,La),vr.subVectors(Rs,Cs),xr.subVectors(bs,Rs),Wr.subVectors(Cs,bs);let n=[0,-vr.z,vr.y,0,-xr.z,xr.y,0,-Wr.z,Wr.y,vr.z,0,-vr.x,xr.z,0,-xr.x,Wr.z,0,-Wr.x,-vr.y,vr.x,0,-xr.y,xr.x,0,-Wr.y,Wr.x,0];return!Pu(n,Cs,Rs,bs,sl)||(n=[1,0,0,0,1,0,0,0,1],!Pu(n,Cs,Rs,bs,sl))?!1:(al.crossVectors(vr,xr),n=[al.x,al.y,al.z],Pu(n,Cs,Rs,bs,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],hi=new Z,rl=new Ya,Cs=new Z,Rs=new Z,bs=new Z,vr=new Z,xr=new Z,Wr=new Z,La=new Z,sl=new Z,al=new Z,Xr=new Z;function Pu(a,e,n,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Xr.fromArray(a,c);const d=o.x*Math.abs(Xr.x)+o.y*Math.abs(Xr.y)+o.z*Math.abs(Xr.z),p=e.dot(Xr),m=n.dot(Xr),v=r.dot(Xr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const Vv=new Ya,Ia=new Z,Nu=new Z;class Ol{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Vv.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);const n=Ia.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ia,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(Nu)),this.expandByPoint(Ia.copy(e.center).sub(Nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hi=new Z,Du=new Z,ol=new Z,yr=new Z,Lu=new Z,ll=new Z,Iu=new Z;class fg{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,n),Hi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Du.copy(e).add(n).multiplyScalar(.5),ol.copy(n).sub(e).normalize(),yr.copy(this.origin).sub(Du);const c=e.distanceTo(n)*.5,u=-this.direction.dot(ol),d=yr.dot(this.direction),p=-yr.dot(ol),m=yr.lengthSq(),v=Math.abs(1-u*u);let g,x,S,T;if(v>0)if(g=u*p-d,x=u*d-p,T=c*v,g>=0)if(x>=-T)if(x<=T){const C=1/v;g*=C,x*=C,S=g*(g+u*x+2*d)+x*(u*g+x+2*p)+m}else x=c,g=Math.max(0,-(u*x+d)),S=-g*g+x*(x+2*p)+m;else x=-c,g=Math.max(0,-(u*x+d)),S=-g*g+x*(x+2*p)+m;else x<=-T?(g=Math.max(0,-(-u*c+d)),x=g>0?-c:Math.min(Math.max(-c,-p),c),S=-g*g+x*(x+2*p)+m):x<=T?(g=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+m):(g=Math.max(0,-(u*c+d)),x=g>0?c:Math.min(Math.max(-c,-p),c),S=-g*g+x*(x+2*p)+m);else x=u>0?-c:c,g=Math.max(0,-(u*x+d)),S=-g*g+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Du).addScaledVector(ol,x),S}intersectSphere(e,n){Hi.subVectors(e.center,this.origin);const r=Hi.dot(this.direction),o=Hi.dot(Hi)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),v>=0?(c=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),g>=0?(d=(e.min.z-x.z)*g,p=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,p=(e.min.z-x.z)*g),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,n,r,o,c){Lu.subVectors(n,e),ll.subVectors(r,e),Iu.crossVectors(Lu,ll);let u=this.direction.dot(Iu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;yr.subVectors(this.origin,e);const p=d*this.direction.dot(ll.crossVectors(yr,ll));if(p<0)return null;const m=d*this.direction.dot(Lu.cross(yr));if(m<0||p+m>u)return null;const v=-d*yr.dot(Iu);return v<0?null:this.at(v/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,r,o,c,u,d,p,m,v,g,x,S,T,C,y){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,p,m,v,g,x,S,T,C,y)}set(e,n,r,o,c,u,d,p,m,v,g,x,S,T,C,y){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=c,_[5]=u,_[9]=d,_[13]=p,_[2]=m,_[6]=v,_[10]=g,_[14]=x,_[3]=S,_[7]=T,_[11]=C,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ps.setFromMatrixColumn(e,0).length(),c=1/Ps.setFromMatrixColumn(e,1).length(),u=1/Ps.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=u*v,S=u*g,T=d*v,C=d*g;n[0]=p*v,n[4]=-p*g,n[8]=m,n[1]=S+T*m,n[5]=x-C*m,n[9]=-d*p,n[2]=C-x*m,n[6]=T+S*m,n[10]=u*p}else if(e.order==="YXZ"){const x=p*v,S=p*g,T=m*v,C=m*g;n[0]=x+C*d,n[4]=T*d-S,n[8]=u*m,n[1]=u*g,n[5]=u*v,n[9]=-d,n[2]=S*d-T,n[6]=C+x*d,n[10]=u*p}else if(e.order==="ZXY"){const x=p*v,S=p*g,T=m*v,C=m*g;n[0]=x-C*d,n[4]=-u*g,n[8]=T+S*d,n[1]=S+T*d,n[5]=u*v,n[9]=C-x*d,n[2]=-u*m,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const x=u*v,S=u*g,T=d*v,C=d*g;n[0]=p*v,n[4]=T*m-S,n[8]=x*m+C,n[1]=p*g,n[5]=C*m+x,n[9]=S*m-T,n[2]=-m,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const x=u*p,S=u*m,T=d*p,C=d*m;n[0]=p*v,n[4]=C-x*g,n[8]=T*g+S,n[1]=g,n[5]=u*v,n[9]=-d*v,n[2]=-m*v,n[6]=S*g+T,n[10]=x-C*g}else if(e.order==="XZY"){const x=u*p,S=u*m,T=d*p,C=d*m;n[0]=p*v,n[4]=-g,n[8]=m*v,n[1]=x*g+C,n[5]=u*v,n[9]=S*g-T,n[2]=T*g-S,n[6]=d*v,n[10]=C*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hv,e,Gv)}lookAt(e,n,r){const o=this.elements;return Xn.subVectors(e,n),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Sr.crossVectors(r,Xn),Sr.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Sr.crossVectors(r,Xn)),Sr.normalize(),cl.crossVectors(Xn,Sr),o[0]=Sr.x,o[4]=cl.x,o[8]=Xn.x,o[1]=Sr.y,o[5]=cl.y,o[9]=Xn.y,o[2]=Sr.z,o[6]=cl.z,o[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],v=r[1],g=r[5],x=r[9],S=r[13],T=r[2],C=r[6],y=r[10],_=r[14],N=r[3],R=r[7],b=r[11],L=r[15],I=o[0],O=o[4],W=o[8],w=o[12],P=o[1],V=o[5],ee=o[9],J=o[13],fe=o[2],le=o[6],oe=o[10],q=o[14],Y=o[3],de=o[7],re=o[11],F=o[15];return c[0]=u*I+d*P+p*fe+m*Y,c[4]=u*O+d*V+p*le+m*de,c[8]=u*W+d*ee+p*oe+m*re,c[12]=u*w+d*J+p*q+m*F,c[1]=v*I+g*P+x*fe+S*Y,c[5]=v*O+g*V+x*le+S*de,c[9]=v*W+g*ee+x*oe+S*re,c[13]=v*w+g*J+x*q+S*F,c[2]=T*I+C*P+y*fe+_*Y,c[6]=T*O+C*V+y*le+_*de,c[10]=T*W+C*ee+y*oe+_*re,c[14]=T*w+C*J+y*q+_*F,c[3]=N*I+R*P+b*fe+L*Y,c[7]=N*O+R*V+b*le+L*de,c[11]=N*W+R*ee+b*oe+L*re,c[15]=N*w+R*J+b*q+L*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],p=e[9],m=e[13],v=e[2],g=e[6],x=e[10],S=e[14],T=e[3],C=e[7],y=e[11],_=e[15],N=p*S-m*x,R=d*S-m*g,b=d*x-p*g,L=u*S-m*v,I=u*x-p*v,O=u*g-d*v;return n*(C*N-y*R+_*b)-r*(T*N-y*L+_*I)+o*(T*R-C*L+_*O)-c*(T*b-C*I+y*O)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=e[9],x=e[10],S=e[11],T=e[12],C=e[13],y=e[14],_=e[15],N=g*y*m-C*x*m+C*p*S-d*y*S-g*p*_+d*x*_,R=T*x*m-v*y*m-T*p*S+u*y*S+v*p*_-u*x*_,b=v*C*m-T*g*m+T*d*S-u*C*S-v*d*_+u*g*_,L=T*g*p-v*C*p-T*d*x+u*C*x+v*d*y-u*g*y,I=n*N+r*R+o*b+c*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return e[0]=N*O,e[1]=(C*x*c-g*y*c-C*o*S+r*y*S+g*o*_-r*x*_)*O,e[2]=(d*y*c-C*p*c+C*o*m-r*y*m-d*o*_+r*p*_)*O,e[3]=(g*p*c-d*x*c-g*o*m+r*x*m+d*o*S-r*p*S)*O,e[4]=R*O,e[5]=(v*y*c-T*x*c+T*o*S-n*y*S-v*o*_+n*x*_)*O,e[6]=(T*p*c-u*y*c-T*o*m+n*y*m+u*o*_-n*p*_)*O,e[7]=(u*x*c-v*p*c+v*o*m-n*x*m-u*o*S+n*p*S)*O,e[8]=b*O,e[9]=(T*g*c-v*C*c-T*r*S+n*C*S+v*r*_-n*g*_)*O,e[10]=(u*C*c-T*d*c+T*r*m-n*C*m-u*r*_+n*d*_)*O,e[11]=(v*d*c-u*g*c-v*r*m+n*g*m+u*r*S-n*d*S)*O,e[12]=L*O,e[13]=(v*C*o-T*g*o+T*r*x-n*C*x-v*r*y+n*g*y)*O,e[14]=(T*d*o-u*C*o-T*r*p+n*C*p+u*r*y-n*d*y)*O,e[15]=(u*g*o-v*d*o+v*r*p-n*g*p-u*r*x+n*d*x)*O,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,d=e.y,p=e.z,m=c*u,v=c*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,v*d+r,v*p-o*u,0,m*p-o*d,v*p+o*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,d=n._z,p=n._w,m=c+c,v=u+u,g=d+d,x=c*m,S=c*v,T=c*g,C=u*v,y=u*g,_=d*g,N=p*m,R=p*v,b=p*g,L=r.x,I=r.y,O=r.z;return o[0]=(1-(C+_))*L,o[1]=(S+b)*L,o[2]=(T-R)*L,o[3]=0,o[4]=(S-b)*I,o[5]=(1-(x+_))*I,o[6]=(y+N)*I,o[7]=0,o[8]=(T+R)*O,o[9]=(y-N)*O,o[10]=(1-(x+C))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let c=Ps.set(o[0],o[1],o[2]).length();const u=Ps.set(o[4],o[5],o[6]).length(),d=Ps.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),pi.copy(this);const m=1/c,v=1/u,g=1/d;return pi.elements[0]*=m,pi.elements[1]*=m,pi.elements[2]*=m,pi.elements[4]*=v,pi.elements[5]*=v,pi.elements[6]*=v,pi.elements[8]*=g,pi.elements[9]*=g,pi.elements[10]*=g,n.setFromRotationMatrix(pi),r.x=c,r.y=u,r.z=d,this}makePerspective(e,n,r,o,c,u,d=Ci,p=!1){const m=this.elements,v=2*c/(n-e),g=2*c/(r-o),x=(n+e)/(n-e),S=(r+o)/(r-o);let T,C;if(p)T=c/(u-c),C=u*c/(u-c);else if(d===Ci)T=-(u+c)/(u-c),C=-2*u*c/(u-c);else if(d===Ll)T=-u/(u-c),C=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,c,u,d=Ci,p=!1){const m=this.elements,v=2/(n-e),g=2/(r-o),x=-(n+e)/(n-e),S=-(r+o)/(r-o);let T,C;if(p)T=1/(u-c),C=u/(u-c);else if(d===Ci)T=-2/(u-c),C=-(u+c)/(u-c);else if(d===Ll)T=-1/(u-c),C=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=g,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ps=new Z,pi=new jt,Hv=new Z(0,0,0),Gv=new Z(1,1,1),Sr=new Z,cl=new Z,Xn=new Z,rm=new jt,sm=new ja;class Ni{constructor(e=0,n=0,r=0,o=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],p=o[1],m=o[5],v=o[9],g=o[2],x=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(vt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sm.setFromEuler(this),this.setFromQuaternion(sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class dg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wv=0;const am=new Z,Ns=new ja,Gi=new jt,ul=new Z,Ua=new Z,Xv=new Z,jv=new ja,om=new Z(1,0,0),lm=new Z(0,1,0),cm=new Z(0,0,1),um={type:"added"},Yv={type:"removed"},Ds={type:"childadded",child:null},Uu={type:"childremoved",child:null};class Pn extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new Z,n=new Ni,r=new ja,o=new Z(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new ft}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(om,e)}rotateY(e){return this.rotateOnAxis(lm,e)}rotateZ(e){return this.rotateOnAxis(cm,e)}translateOnAxis(e,n){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(om,e)}translateY(e){return this.translateOnAxis(lm,e)}translateZ(e){return this.translateOnAxis(cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ul.copy(e):ul.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Ua,ul,this.up):Gi.lookAt(ul,Ua,this.up),this.quaternion.setFromRotationMatrix(Gi),o&&(Gi.extractRotation(o.matrixWorld),Ns.setFromRotationMatrix(Gi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(um),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Yv),Uu.child=e,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(um),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,e,Xv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(c(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),v=u(e.images),g=u(e.shapes),x=u(e.skeletons),S=u(e.animations),T=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Pn.DEFAULT_UP=new Z(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new Z,Wi=new Z,Fu=new Z,Xi=new Z,Ls=new Z,Is=new Z,fm=new Z,Ou=new Z,ku=new Z,Bu=new Z,zu=new qt,Vu=new qt,Hu=new qt;class gi{constructor(e=new Z,n=new Z,r=new Z){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),mi.subVectors(e,n),o.cross(mi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){mi.subVectors(o,n),Wi.subVectors(r,n),Fu.subVectors(e,n);const u=mi.dot(mi),d=mi.dot(Wi),p=mi.dot(Fu),m=Wi.dot(Wi),v=Wi.dot(Fu),g=u*m-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,S=(m*p-d*v)*x,T=(u*v-d*p)*x;return c.set(1-S-T,T,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,n,r,o,c,u,d,p){return this.getBarycoord(e,n,r,o,Xi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Xi.x),p.addScaledVector(u,Xi.y),p.addScaledVector(d,Xi.z),p)}static getInterpolatedAttribute(e,n,r,o,c,u){return zu.setScalar(0),Vu.setScalar(0),Hu.setScalar(0),zu.fromBufferAttribute(e,n),Vu.fromBufferAttribute(e,r),Hu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(zu,c.x),u.addScaledVector(Vu,c.y),u.addScaledVector(Hu,c.z),u}static isFrontFacing(e,n,r,o){return mi.subVectors(r,n),Wi.subVectors(e,n),mi.cross(Wi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),mi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return gi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return gi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,d;Ls.subVectors(o,r),Is.subVectors(c,r),Ou.subVectors(e,r);const p=Ls.dot(Ou),m=Is.dot(Ou);if(p<=0&&m<=0)return n.copy(r);ku.subVectors(e,o);const v=Ls.dot(ku),g=Is.dot(ku);if(v>=0&&g<=v)return n.copy(o);const x=p*g-v*m;if(x<=0&&p>=0&&v<=0)return u=p/(p-v),n.copy(r).addScaledVector(Ls,u);Bu.subVectors(e,c);const S=Ls.dot(Bu),T=Is.dot(Bu);if(T>=0&&S<=T)return n.copy(c);const C=S*m-p*T;if(C<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Is,d);const y=v*T-S*g;if(y<=0&&g-v>=0&&S-T>=0)return fm.subVectors(c,o),d=(g-v)/(g-v+(S-T)),n.copy(o).addScaledVector(fm,d);const _=1/(y+C+x);return u=C*_,d=x*_,n.copy(r).addScaledVector(Ls,u).addScaledVector(Is,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},fl={h:0,s:0,l:0};function Gu(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class mt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Tt.workingColorSpace){if(e=Iv(e,1),n=vt(n,0,1),r=vt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Gu(u,c,e+1/3),this.g=Gu(u,c,e),this.b=Gu(u,c,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,n=ri){function r(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ri){const r=hg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Tt.workingToColorSpace(Mn.copy(this),e),Math.round(vt(Mn.r*255,0,255))*65536+Math.round(vt(Mn.g*255,0,255))*256+Math.round(vt(Mn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(Mn.copy(this),n);const r=Mn.r,o=Mn.g,c=Mn.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let p,m;const v=(d+u)/2;if(d===u)p=0,m=0;else{const g=u-d;switch(m=v<=.5?g/(u+d):g/(2-u-d),u){case r:p=(o-c)/g+(o<c?6:0);break;case o:p=(c-r)/g+2;break;case c:p=(r-o)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(Mn.copy(this),n),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ri){Tt.workingToColorSpace(Mn.copy(this),e);const n=Mn.r,r=Mn.g,o=Mn.b;return e!==ri?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+n,Mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Mr),e.getHSL(fl);const r=Tu(Mr.h,fl.h,n),o=Tu(Mr.s,fl.s,n),c=Tu(Mr.l,fl.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new mt;mt.NAMES=hg;let qv=0;class Ys extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=Bs,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=af,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){at(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){at(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sf&&(r.blendSrc=this.blendSrc),this.blendDst!==af&&(r.blendDst=this.blendDst),this.blendEquation!==Zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fd extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=jm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new Z,dl=new xt;let $v=0;class si{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$v++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Zp,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)dl.fromBufferAttribute(this,n),dl.applyMatrix3(e),this.setXY(n,dl.x,dl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix3(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Da(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Da(n,this.array)),n}setX(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Da(n,this.array)),n}setY(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Da(n,this.array)),n}setZ(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Da(n,this.array)),n}setW(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),o=On(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),o=On(o,this.array),c=On(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zp&&(e.usage=this.usage),e}}class pg extends si{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class mg extends si{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class fn extends si{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Kv=0;const ii=new jt,Wu=new Pn,Us=new Z,jn=new Ya,Fa=new Ya,cn=new Z;class Bn extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cg(e)?mg:pg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ft().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,n,r){return ii.makeTranslation(e,n,r),this.applyMatrix4(ii),this}scale(e,n,r){return ii.makeScale(e,n,r),this.applyMatrix4(ii),this}lookAt(e){return Wu.lookAt(e),Wu.updateMatrix(),this.applyMatrix4(Wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new fn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];jn.setFromBufferAttribute(c),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Fa.setFromBufferAttribute(d),this.morphTargetsRelative?(cn.addVectors(jn.min,Fa.min),jn.expandByPoint(cn),cn.addVectors(jn.max,Fa.max),jn.expandByPoint(cn)):(jn.expandByPoint(Fa.min),jn.expandByPoint(Fa.max))}jn.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)cn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(cn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)cn.fromBufferAttribute(d,m),p&&(Us.fromBufferAttribute(e,m),cn.add(Us)),o=Math.max(o,r.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let W=0;W<r.count;W++)d[W]=new Z,p[W]=new Z;const m=new Z,v=new Z,g=new Z,x=new xt,S=new xt,T=new xt,C=new Z,y=new Z;function _(W,w,P){m.fromBufferAttribute(r,W),v.fromBufferAttribute(r,w),g.fromBufferAttribute(r,P),x.fromBufferAttribute(c,W),S.fromBufferAttribute(c,w),T.fromBufferAttribute(c,P),v.sub(m),g.sub(m),S.sub(x),T.sub(x);const V=1/(S.x*T.y-T.x*S.y);isFinite(V)&&(C.copy(v).multiplyScalar(T.y).addScaledVector(g,-S.y).multiplyScalar(V),y.copy(g).multiplyScalar(S.x).addScaledVector(v,-T.x).multiplyScalar(V),d[W].add(C),d[w].add(C),d[P].add(C),p[W].add(y),p[w].add(y),p[P].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let W=0,w=N.length;W<w;++W){const P=N[W],V=P.start,ee=P.count;for(let J=V,fe=V+ee;J<fe;J+=3)_(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const R=new Z,b=new Z,L=new Z,I=new Z;function O(W){L.fromBufferAttribute(o,W),I.copy(L);const w=d[W];R.copy(w),R.sub(L.multiplyScalar(L.dot(w))).normalize(),b.crossVectors(I,w);const V=b.dot(p[W])<0?-1:1;u.setXYZW(W,R.x,R.y,R.z,V)}for(let W=0,w=N.length;W<w;++W){const P=N[W],V=P.start,ee=P.count;for(let J=V,fe=V+ee;J<fe;J+=3)O(e.getX(J+0)),O(e.getX(J+1)),O(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const o=new Z,c=new Z,u=new Z,d=new Z,p=new Z,m=new Z,v=new Z,g=new Z;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),C=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,y),v.subVectors(u,c),g.subVectors(o,c),v.cross(g),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,y),d.add(v),p.add(v),m.add(v),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),v.subVectors(u,c),g.subVectors(o,c),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)cn.fromBufferAttribute(e,n),cn.normalize(),e.setXYZ(n,cn.x,cn.y,cn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,g=d.normalized,x=new m.constructor(p.length*v);let S=0,T=0;for(let C=0,y=p.length;C<y;C++){d.isInterleavedBufferAttribute?S=p[C]*d.data.stride+d.offset:S=p[C]*v;for(let _=0;_<v;_++)x[T++]=m[S++]}return new si(x,v,g)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bn,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let v=0,g=m.length;v<g;v++){const x=m[v],S=e(x,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,x=m.length;g<x;g++){const S=m[g];v.push(S.toJSON(e.data))}v.length>0&&(o[p]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const c=e.morphAttributes;for(const m in c){const v=[],g=c[m];for(let x=0,S=g.length;x<S;x++)v.push(g[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const g=u[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dm=new jt,jr=new fg,hl=new Ol,hm=new Z,pl=new Z,ml=new Z,gl=new Z,Xu=new Z,_l=new Z,pm=new Z,vl=new Z;class $n extends Pn{constructor(e=new Bn,n=new fd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){_l.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=d[p],g=c[p];v!==0&&(Xu.fromBufferAttribute(g,e),u?_l.addScaledVector(Xu,v):_l.addScaledVector(Xu.sub(n),v))}n.add(_l)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hl.copy(r.boundingSphere),hl.applyMatrix4(c),jr.copy(e.ray).recast(e.near),!(hl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(hl,hm)===null||jr.origin.distanceToSquared(hm)>(e.far-e.near)**2))&&(dm.copy(c).invert(),jr.copy(e.ray).applyMatrix4(dm),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(u))for(let T=0,C=x.length;T<C;T++){const y=x[T],_=u[y.materialIndex],N=Math.max(y.start,S.start),R=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let b=N,L=R;b<L;b+=3){const I=d.getX(b),O=d.getX(b+1),W=d.getX(b+2);o=xl(this,_,e,r,m,v,g,I,O,W),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),C=Math.min(d.count,S.start+S.count);for(let y=T,_=C;y<_;y+=3){const N=d.getX(y),R=d.getX(y+1),b=d.getX(y+2);o=xl(this,u,e,r,m,v,g,N,R,b),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let T=0,C=x.length;T<C;T++){const y=x[T],_=u[y.materialIndex],N=Math.max(y.start,S.start),R=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let b=N,L=R;b<L;b+=3){const I=b,O=b+1,W=b+2;o=xl(this,_,e,r,m,v,g,I,O,W),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),C=Math.min(p.count,S.start+S.count);for(let y=T,_=C;y<_;y+=3){const N=y,R=y+1,b=y+2;o=xl(this,u,e,r,m,v,g,N,R,b),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function Zv(a,e,n,r,o,c,u,d){let p;if(e.side===kn?p=r.intersectTriangle(u,c,o,!0,d):p=r.intersectTriangle(o,c,u,e.side===Ar,d),p===null)return null;vl.copy(d),vl.applyMatrix4(a.matrixWorld);const m=n.ray.origin.distanceTo(vl);return m<n.near||m>n.far?null:{distance:m,point:vl.clone(),object:a}}function xl(a,e,n,r,o,c,u,d,p,m){a.getVertexPosition(d,pl),a.getVertexPosition(p,ml),a.getVertexPosition(m,gl);const v=Zv(a,e,n,r,pl,ml,gl,pm);if(v){const g=new Z;gi.getBarycoord(pm,pl,ml,gl,g),o&&(v.uv=gi.getInterpolatedAttribute(o,d,p,m,g,new xt)),c&&(v.uv1=gi.getInterpolatedAttribute(c,d,p,m,g,new xt)),u&&(v.normal=gi.getInterpolatedAttribute(u,d,p,m,g,new Z),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new Z,materialIndex:0};gi.getNormal(pl,ml,gl,x.normal),v.face=x,v.barycoord=g}return v}class qa extends Bn{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],v=[],g=[];let x=0,S=0;T("z","y","x",-1,-1,r,n,e,u,c,0),T("z","y","x",1,-1,r,n,-e,u,c,1),T("x","z","y",1,1,e,r,n,o,u,2),T("x","z","y",1,-1,e,r,-n,o,u,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new fn(m,3)),this.setAttribute("normal",new fn(v,3)),this.setAttribute("uv",new fn(g,2));function T(C,y,_,N,R,b,L,I,O,W,w){const P=b/O,V=L/W,ee=b/2,J=L/2,fe=I/2,le=O+1,oe=W+1;let q=0,Y=0;const de=new Z;for(let re=0;re<oe;re++){const F=re*V-J;for(let ae=0;ae<le;ae++){const Re=ae*P-ee;de[C]=Re*N,de[y]=F*R,de[_]=fe,m.push(de.x,de.y,de.z),de[C]=0,de[y]=0,de[_]=I>0?1:-1,v.push(de.x,de.y,de.z),g.push(ae/O),g.push(1-re/W),q+=1}}for(let re=0;re<W;re++)for(let F=0;F<O;F++){const ae=x+F+le*re,Re=x+F+le*(re+1),He=x+(F+1)+le*(re+1),qe=x+(F+1)+le*re;p.push(ae,Re,qe),p.push(Re,He,qe),Y+=6}d.addGroup(S,Y,w),S+=Y,x+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function Rn(a){const e={};for(let n=0;n<a.length;n++){const r=Xs(a[n]);for(const o in r)e[o]=r[o]}return e}function Qv(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function gg(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const Jv={clone:Xs,merge:Rn};var ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ex,this.fragmentShader=tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=Qv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class _g extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new Z,mm=new xt,gm=new xt;class Yn extends _g{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Kf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kf*2*Math.atan(Math.tan(wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,n){return this.getViewBounds(e,mm,gm),n.subVectors(gm,mm)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fs=-90,Os=1;class nx extends Pn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yn(Fs,Os,e,n);o.layers=this.layers,this.add(o);const c=new Yn(Fs,Os,e,n);c.layers=this.layers,this.add(c);const u=new Yn(Fs,Os,e,n);u.layers=this.layers,this.add(u);const d=new Yn(Fs,Os,e,n);d.layers=this.layers,this.add(d);const p=new Yn(Fs,Os,e,n);p.layers=this.layers,this.add(p);const m=new Yn(Fs,Os,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,d,p]=n;for(const m of n)this.remove(m);if(e===Ci)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ll)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,m,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(g,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class vg extends bn{constructor(e=[],n=ts,r,o,c,u,d,p,m,v){super(e,n,r,o,c,u,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xg extends bi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new vg(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new qa(5,5,5),c=new Di({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:qi});c.uniforms.tEquirect.value=n;const u=new $n(o,c),d=n.minFilter;return n.minFilter===Jr&&(n.minFilter=En),new nx(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}class yl extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ix={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const C of e.hand.values()){const y=n.getJointPose(C,r),_=this._getHandJoint(m,C);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],x=v.position.distanceTo(g.position),S=.02,T=.005;m.inputState.pinching&&x>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ix)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new yl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class dd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new mt(e),this.density=n}clone(){return new dd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rx extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class sx extends bn{constructor(e=null,n=1,r=1,o,c,u,d,p,m=mn,v=mn,g,x){super(null,u,d,p,m,v,o,c,g,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yu=new Z,ax=new Z,ox=new ft;class Kr{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Yu.subVectors(r,n).cross(ax.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Yu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||ox.getNormalMatrix(e),o=this.coplanarPoint(Yu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Ol,lx=new xt(.5,.5),Sl=new Z;class hd{constructor(e=new Kr,n=new Kr,r=new Kr,o=new Kr,c=new Kr,u=new Kr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ci,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],p=c[2],m=c[3],v=c[4],g=c[5],x=c[6],S=c[7],T=c[8],C=c[9],y=c[10],_=c[11],N=c[12],R=c[13],b=c[14],L=c[15];if(o[0].setComponents(m-u,S-v,_-T,L-N).normalize(),o[1].setComponents(m+u,S+v,_+T,L+N).normalize(),o[2].setComponents(m+d,S+g,_+C,L+R).normalize(),o[3].setComponents(m-d,S-g,_-C,L-R).normalize(),r)o[4].setComponents(p,x,y,b).normalize(),o[5].setComponents(m-p,S-x,_-y,L-b).normalize();else if(o[4].setComponents(m-p,S-x,_-y,L-b).normalize(),n===Ci)o[5].setComponents(m+p,S+x,_+y,L+b).normalize();else if(n===Ll)o[5].setComponents(p,x,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const n=lx.distanceTo(e.center);return Yr.radius=.7071067811865476+n,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Sl.x=o.normal.x>0?e.max.x:e.min.x,Sl.y=o.normal.y>0?e.max.y:e.min.y,Sl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yg extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _m=new jt,Zf=new fg,Ml=new Ol,El=new Z;class cx extends Pn{constructor(e=new Bn,n=new yg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ml.copy(r.boundingSphere),Ml.applyMatrix4(o),Ml.radius+=c,e.ray.intersectsSphere(Ml)===!1)return;_m.copy(o).invert(),Zf.copy(e.ray).applyMatrix4(_m);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,g=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),S=Math.min(m.count,u.start+u.count);for(let T=x,C=S;T<C;T++){const y=m.getX(T);El.fromBufferAttribute(g,y),vm(El,y,p,o,e,n,this)}}else{const x=Math.max(0,u.start),S=Math.min(g.count,u.start+u.count);for(let T=x,C=S;T<C;T++)El.fromBufferAttribute(g,T),vm(El,T,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function vm(a,e,n,r,o,c,u){const d=Zf.distanceSqToPoint(a);if(d<n){const p=new Z;Zf.closestPointToPoint(a,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Wa extends bn{constructor(e,n,r=Pi,o,c,u,d=mn,p=mn,m,v=Zi,g=1){if(v!==Zi&&v!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:g};super(x,o,c,u,d,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ud(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ux extends Wa{constructor(e,n=Pi,r=ts,o,c,u=mn,d=mn,p,m=Zi){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,n,r,o,c,u,d,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sg extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pd extends Bn{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const c=[],u=[];d(o),m(r),v(),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(c.slice(),3)),this.setAttribute("uv",new fn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(N){const R=new Z,b=new Z,L=new Z;for(let I=0;I<n.length;I+=3)S(n[I+0],R),S(n[I+1],b),S(n[I+2],L),p(R,b,L,N)}function p(N,R,b,L){const I=L+1,O=[];for(let W=0;W<=I;W++){O[W]=[];const w=N.clone().lerp(b,W/I),P=R.clone().lerp(b,W/I),V=I-W;for(let ee=0;ee<=V;ee++)ee===0&&W===I?O[W][ee]=w:O[W][ee]=w.clone().lerp(P,ee/V)}for(let W=0;W<I;W++)for(let w=0;w<2*(I-W)-1;w++){const P=Math.floor(w/2);w%2===0?(x(O[W][P+1]),x(O[W+1][P]),x(O[W][P])):(x(O[W][P+1]),x(O[W+1][P+1]),x(O[W+1][P]))}}function m(N){const R=new Z;for(let b=0;b<c.length;b+=3)R.x=c[b+0],R.y=c[b+1],R.z=c[b+2],R.normalize().multiplyScalar(N),c[b+0]=R.x,c[b+1]=R.y,c[b+2]=R.z}function v(){const N=new Z;for(let R=0;R<c.length;R+=3){N.x=c[R+0],N.y=c[R+1],N.z=c[R+2];const b=y(N)/2/Math.PI+.5,L=_(N)/Math.PI+.5;u.push(b,1-L)}T(),g()}function g(){for(let N=0;N<u.length;N+=6){const R=u[N+0],b=u[N+2],L=u[N+4],I=Math.max(R,b,L),O=Math.min(R,b,L);I>.9&&O<.1&&(R<.2&&(u[N+0]+=1),b<.2&&(u[N+2]+=1),L<.2&&(u[N+4]+=1))}}function x(N){c.push(N.x,N.y,N.z)}function S(N,R){const b=N*3;R.x=e[b+0],R.y=e[b+1],R.z=e[b+2]}function T(){const N=new Z,R=new Z,b=new Z,L=new Z,I=new xt,O=new xt,W=new xt;for(let w=0,P=0;w<c.length;w+=9,P+=6){N.set(c[w+0],c[w+1],c[w+2]),R.set(c[w+3],c[w+4],c[w+5]),b.set(c[w+6],c[w+7],c[w+8]),I.set(u[P+0],u[P+1]),O.set(u[P+2],u[P+3]),W.set(u[P+4],u[P+5]),L.copy(N).add(R).add(b).divideScalar(3);const V=y(L);C(I,P+0,N,V),C(O,P+2,R,V),C(W,P+4,b,V)}}function C(N,R,b,L){L<0&&N.x===1&&(u[R]=N.x-1),b.x===0&&b.z===0&&(u[R]=L/2/Math.PI+.5)}function y(N){return Math.atan2(N.z,-N.x)}function _(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pd(e.vertices,e.indices,e.radius,e.detail)}}class Ul extends pd{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,c,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ul(e.radius,e.detail)}}class kl extends Bn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(r),p=Math.floor(o),m=d+1,v=p+1,g=e/d,x=n/p,S=[],T=[],C=[],y=[];for(let _=0;_<v;_++){const N=_*x-u;for(let R=0;R<m;R++){const b=R*g-c;T.push(b,-N,0),C.push(0,0,1),y.push(R/d),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let N=0;N<d;N++){const R=N+m*_,b=N+m*(_+1),L=N+1+m*(_+1),I=N+1+m*_;S.push(R,b,I),S.push(b,L,I)}this.setIndex(S),this.setAttribute("position",new fn(T,3)),this.setAttribute("normal",new fn(C,3)),this.setAttribute("uv",new fn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.widthSegments,e.heightSegments)}}class md extends Bn{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const v=[],g=new Z,x=new Z,S=[],T=[],C=[],y=[];for(let _=0;_<=r;_++){const N=[],R=_/r;let b=0;_===0&&u===0?b=.5/n:_===r&&p===Math.PI&&(b=-.5/n);for(let L=0;L<=n;L++){const I=L/n;g.x=-e*Math.cos(o+I*c)*Math.sin(u+R*d),g.y=e*Math.cos(u+R*d),g.z=e*Math.sin(o+I*c)*Math.sin(u+R*d),T.push(g.x,g.y,g.z),x.copy(g).normalize(),C.push(x.x,x.y,x.z),y.push(I+b,1-R),N.push(m++)}v.push(N)}for(let _=0;_<r;_++)for(let N=0;N<n;N++){const R=v[_][N+1],b=v[_][N],L=v[_+1][N],I=v[_+1][N+1];(_!==0||u>0)&&S.push(R,b,I),(_!==r-1||p<Math.PI)&&S.push(b,L,I)}this.setIndex(S),this.setAttribute("position",new fn(T,3)),this.setAttribute("normal",new fn(C,3)),this.setAttribute("uv",new fn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new md(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gd extends Bn{constructor(e=1,n=.4,r=12,o=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:c},r=Math.floor(r),o=Math.floor(o);const u=[],d=[],p=[],m=[],v=new Z,g=new Z,x=new Z;for(let S=0;S<=r;S++)for(let T=0;T<=o;T++){const C=T/o*c,y=S/r*Math.PI*2;g.x=(e+n*Math.cos(y))*Math.cos(C),g.y=(e+n*Math.cos(y))*Math.sin(C),g.z=n*Math.sin(y),d.push(g.x,g.y,g.z),v.x=e*Math.cos(C),v.y=e*Math.sin(C),x.subVectors(g,v).normalize(),p.push(x.x,x.y,x.z),m.push(T/o),m.push(S/r)}for(let S=1;S<=r;S++)for(let T=1;T<=o;T++){const C=(o+1)*S+T-1,y=(o+1)*(S-1)+T-1,_=(o+1)*(S-1)+T,N=(o+1)*S+T;u.push(C,y,N),u.push(y,_,N)}this.setIndex(u),this.setAttribute("position",new fn(d,3)),this.setAttribute("normal",new fn(p,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fx extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dx extends Ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lg,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qu extends dx{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class hx extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class px extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Mg extends Pn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const $u=new jt,xm=new Z,ym=new Z;class mx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hd,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;xm.setFromMatrixPosition(e.matrixWorld),n.position.copy(xm),ym.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ym),n.updateMatrixWorld(),$u.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($u,n.coordinateSystem,n.reversedDepth),n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply($u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gx extends mx{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ku extends Mg{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new gx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Eg extends _g{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class _x extends Mg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class vx extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Sm(a,e,n,r){const o=xx(r);switch(n){case sg:return a*e;case og:return a*e/o.components*o.byteLength;case sd:return a*e/o.components*o.byteLength;case Gs:return a*e*2/o.components*o.byteLength;case ad:return a*e*2/o.components*o.byteLength;case ag:return a*e*3/o.components*o.byteLength;case _i:return a*e*4/o.components*o.byteLength;case od:return a*e*4/o.components*o.byteLength;case Cl:case Rl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case bl:case Pl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case xf:case Sf:return Math.max(a,16)*Math.max(e,8)/4;case vf:case yf:return Math.max(a,8)*Math.max(e,8)/2;case Mf:case Ef:case Tf:case Af:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case wf:case Cf:case Rf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case bf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Df:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case If:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Of:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case kf:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case zf:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Vf:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Gf:case Wf:case Xf:return Math.ceil(a/4)*Math.ceil(e/4)*16;case jf:case Yf:return Math.ceil(a/4)*Math.ceil(e/4)*8;case qf:case $f:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function xx(a){switch(a){case qn:case tg:return{byteLength:1,components:1};case Va:case ng:case Ki:return{byteLength:2,components:1};case id:case rd:return{byteLength:2,components:4};case Pi:case nd:case Ai:return{byteLength:4,components:1};case ig:case rg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:td}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=td);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wg(){let a=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function yx(a){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,g=m.byteLength,x=a.createBuffer();a.bindBuffer(p,x),a.bufferData(p,m,v),d.onUploadCallback();let S;if(m instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=a.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=a.SHORT;else if(m instanceof Uint32Array)S=a.UNSIGNED_INT;else if(m instanceof Int32Array)S=a.INT;else if(m instanceof Int8Array)S=a.BYTE;else if(m instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,p,m){const v=p.array,g=p.updateRanges;if(a.bindBuffer(m,d),g.length===0)a.bufferSubData(m,0,v);else{g.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<g.length;S++){const T=g[x],C=g[S];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++x,g[x]=C)}g.length=x+1;for(let S=0,T=g.length;S<T;S++){const C=g[S];a.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(a.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:c,update:u}}var Sx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mx=`#ifdef USE_ALPHAHASH
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
#endif`,Ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ax=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cx=`#ifdef USE_AOMAP
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
#endif`,Rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Px=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ix=`#ifdef USE_IRIDESCENCE
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
#endif`,Ux=`#ifdef USE_BUMPMAP
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
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wx=`#define PI 3.141592653589793
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
} // validated`,Xx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jx=`vec3 transformedNormal = objectNormal;
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
#endif`,Yx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jx=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ly=`#ifdef USE_GRADIENTMAP
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
}`,cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dy=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,hy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,my=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,xy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yy=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
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
#endif`,My=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ty=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ay=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ry=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,by=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Py=`#if defined( USE_POINTS_UV )
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
#endif`,Ny=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ly=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Iy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Oy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ky=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,By=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gy=`#ifdef USE_NORMALMAP
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
#endif`,Wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$y=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,iS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oS=`#ifdef USE_SKINNING
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
#endif`,lS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cS=`#ifdef USE_SKINNING
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
#endif`,uS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hS=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pS=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mS=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SS=`uniform sampler2D t2D;
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
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ES=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AS=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,CS=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RS=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,bS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DS=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IS=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,US=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,FS=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,OS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,kS=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,BS=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,zS=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,VS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HS=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,GS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,WS=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,XS=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,jS=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,YS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,qS=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,$S=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,KS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,ZS=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,QS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,JS=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ht={alphahash_fragment:Sx,alphahash_pars_fragment:Mx,alphamap_fragment:Ex,alphamap_pars_fragment:wx,alphatest_fragment:Tx,alphatest_pars_fragment:Ax,aomap_fragment:Cx,aomap_pars_fragment:Rx,batching_pars_vertex:bx,batching_vertex:Px,begin_vertex:Nx,beginnormal_vertex:Dx,bsdfs:Lx,iridescence_fragment:Ix,bumpmap_pars_fragment:Ux,clipping_planes_fragment:Fx,clipping_planes_pars_fragment:Ox,clipping_planes_pars_vertex:kx,clipping_planes_vertex:Bx,color_fragment:zx,color_pars_fragment:Vx,color_pars_vertex:Hx,color_vertex:Gx,common:Wx,cube_uv_reflection_fragment:Xx,defaultnormal_vertex:jx,displacementmap_pars_vertex:Yx,displacementmap_vertex:qx,emissivemap_fragment:$x,emissivemap_pars_fragment:Kx,colorspace_fragment:Zx,colorspace_pars_fragment:Qx,envmap_fragment:Jx,envmap_common_pars_fragment:ey,envmap_pars_fragment:ty,envmap_pars_vertex:ny,envmap_physical_pars_fragment:hy,envmap_vertex:iy,fog_vertex:ry,fog_pars_vertex:sy,fog_fragment:ay,fog_pars_fragment:oy,gradientmap_pars_fragment:ly,lightmap_pars_fragment:cy,lights_lambert_fragment:uy,lights_lambert_pars_fragment:fy,lights_pars_begin:dy,lights_toon_fragment:py,lights_toon_pars_fragment:my,lights_phong_fragment:gy,lights_phong_pars_fragment:_y,lights_physical_fragment:vy,lights_physical_pars_fragment:xy,lights_fragment_begin:yy,lights_fragment_maps:Sy,lights_fragment_end:My,logdepthbuf_fragment:Ey,logdepthbuf_pars_fragment:wy,logdepthbuf_pars_vertex:Ty,logdepthbuf_vertex:Ay,map_fragment:Cy,map_pars_fragment:Ry,map_particle_fragment:by,map_particle_pars_fragment:Py,metalnessmap_fragment:Ny,metalnessmap_pars_fragment:Dy,morphinstance_vertex:Ly,morphcolor_vertex:Iy,morphnormal_vertex:Uy,morphtarget_pars_vertex:Fy,morphtarget_vertex:Oy,normal_fragment_begin:ky,normal_fragment_maps:By,normal_pars_fragment:zy,normal_pars_vertex:Vy,normal_vertex:Hy,normalmap_pars_fragment:Gy,clearcoat_normal_fragment_begin:Wy,clearcoat_normal_fragment_maps:Xy,clearcoat_pars_fragment:jy,iridescence_pars_fragment:Yy,opaque_fragment:qy,packing:$y,premultiplied_alpha_fragment:Ky,project_vertex:Zy,dithering_fragment:Qy,dithering_pars_fragment:Jy,roughnessmap_fragment:eS,roughnessmap_pars_fragment:tS,shadowmap_pars_fragment:nS,shadowmap_pars_vertex:iS,shadowmap_vertex:rS,shadowmask_pars_fragment:sS,skinbase_vertex:aS,skinning_pars_vertex:oS,skinning_vertex:lS,skinnormal_vertex:cS,specularmap_fragment:uS,specularmap_pars_fragment:fS,tonemapping_fragment:dS,tonemapping_pars_fragment:hS,transmission_fragment:pS,transmission_pars_fragment:mS,uv_pars_fragment:gS,uv_pars_vertex:_S,uv_vertex:vS,worldpos_vertex:xS,background_vert:yS,background_frag:SS,backgroundCube_vert:MS,backgroundCube_frag:ES,cube_vert:wS,cube_frag:TS,depth_vert:AS,depth_frag:CS,distance_vert:RS,distance_frag:bS,equirect_vert:PS,equirect_frag:NS,linedashed_vert:DS,linedashed_frag:LS,meshbasic_vert:IS,meshbasic_frag:US,meshlambert_vert:FS,meshlambert_frag:OS,meshmatcap_vert:kS,meshmatcap_frag:BS,meshnormal_vert:zS,meshnormal_frag:VS,meshphong_vert:HS,meshphong_frag:GS,meshphysical_vert:WS,meshphysical_frag:XS,meshtoon_vert:jS,meshtoon_frag:YS,points_vert:qS,points_frag:$S,shadow_vert:KS,shadow_frag:ZS,sprite_vert:QS,sprite_frag:JS},Ue={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ti={basic:{uniforms:Rn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Rn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new mt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Rn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Rn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Rn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new mt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Rn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Rn([Ue.points,Ue.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Rn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Rn([Ue.common,Ue.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Rn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Rn([Ue.sprite,Ue.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Rn([Ue.common,Ue.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Rn([Ue.lights,Ue.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ti.physical={uniforms:Rn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const wl={r:0,b:0,g:0},qr=new Ni,eM=new jt;function tM(a,e,n,r,o,c,u){const d=new mt(0);let p=c===!0?0:1,m,v,g=null,x=0,S=null;function T(R){let b=R.isScene===!0?R.background:null;return b&&b.isTexture&&(b=(R.backgroundBlurriness>0?n:e).get(b)),b}function C(R){let b=!1;const L=T(R);L===null?_(d,p):L&&L.isColor&&(_(L,1),b=!0);const I=a.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(a.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function y(R,b){const L=T(b);L&&(L.isCubeTexture||L.mapping===Fl)?(v===void 0&&(v=new $n(new qa(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Xs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(I,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),qr.copy(b.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),v.material.uniforms.envMap.value=L,v.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(eM.makeRotationFromEuler(qr)),v.material.toneMapped=Tt.getTransfer(L.colorSpace)!==It,(g!==L||x!==L.version||S!==a.toneMapping)&&(v.material.needsUpdate=!0,g=L,x=L.version,S=a.toneMapping),v.layers.enableAll(),R.unshift(v,v.geometry,v.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new $n(new kl(2,2),new Di({name:"BackgroundMaterial",uniforms:Xs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(L.colorSpace)!==It,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||x!==L.version||S!==a.toneMapping)&&(m.material.needsUpdate=!0,g=L,x=L.version,S=a.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function _(R,b){R.getRGB(wl,gg(a)),r.buffers.color.setClear(wl.r,wl.g,wl.b,b,u)}function N(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(R,b=1){d.set(R),p=b,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,_(d,p)},render:C,addToRenderList:y,dispose:N}}function nM(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=x(null);let c=o,u=!1;function d(P,V,ee,J,fe){let le=!1;const oe=g(J,ee,V);c!==oe&&(c=oe,m(c.object)),le=S(P,J,ee,fe),le&&T(P,J,ee,fe),fe!==null&&e.update(fe,a.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,b(P,V,ee,J),fe!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return a.createVertexArray()}function m(P){return a.bindVertexArray(P)}function v(P){return a.deleteVertexArray(P)}function g(P,V,ee){const J=ee.wireframe===!0;let fe=r[P.id];fe===void 0&&(fe={},r[P.id]=fe);let le=fe[V.id];le===void 0&&(le={},fe[V.id]=le);let oe=le[J];return oe===void 0&&(oe=x(p()),le[J]=oe),oe}function x(P){const V=[],ee=[],J=[];for(let fe=0;fe<n;fe++)V[fe]=0,ee[fe]=0,J[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ee,attributeDivisors:J,object:P,attributes:{},index:null}}function S(P,V,ee,J){const fe=c.attributes,le=V.attributes;let oe=0;const q=ee.getAttributes();for(const Y in q)if(q[Y].location>=0){const re=fe[Y];let F=le[Y];if(F===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(F=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(F=P.instanceColor)),re===void 0||re.attribute!==F||F&&re.data!==F.data)return!0;oe++}return c.attributesNum!==oe||c.index!==J}function T(P,V,ee,J){const fe={},le=V.attributes;let oe=0;const q=ee.getAttributes();for(const Y in q)if(q[Y].location>=0){let re=le[Y];re===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(re=P.instanceColor));const F={};F.attribute=re,re&&re.data&&(F.data=re.data),fe[Y]=F,oe++}c.attributes=fe,c.attributesNum=oe,c.index=J}function C(){const P=c.newAttributes;for(let V=0,ee=P.length;V<ee;V++)P[V]=0}function y(P){_(P,0)}function _(P,V){const ee=c.newAttributes,J=c.enabledAttributes,fe=c.attributeDivisors;ee[P]=1,J[P]===0&&(a.enableVertexAttribArray(P),J[P]=1),fe[P]!==V&&(a.vertexAttribDivisor(P,V),fe[P]=V)}function N(){const P=c.newAttributes,V=c.enabledAttributes;for(let ee=0,J=V.length;ee<J;ee++)V[ee]!==P[ee]&&(a.disableVertexAttribArray(ee),V[ee]=0)}function R(P,V,ee,J,fe,le,oe){oe===!0?a.vertexAttribIPointer(P,V,ee,fe,le):a.vertexAttribPointer(P,V,ee,J,fe,le)}function b(P,V,ee,J){C();const fe=J.attributes,le=ee.getAttributes(),oe=V.defaultAttributeValues;for(const q in le){const Y=le[q];if(Y.location>=0){let de=fe[q];if(de===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),de!==void 0){const re=de.normalized,F=de.itemSize,ae=e.get(de);if(ae===void 0)continue;const Re=ae.buffer,He=ae.type,qe=ae.bytesPerElement,te=He===a.INT||He===a.UNSIGNED_INT||de.gpuType===nd;if(de.isInterleavedBufferAttribute){const ue=de.data,ve=ue.stride,Me=de.offset;if(ue.isInstancedInterleavedBuffer){for(let Te=0;Te<Y.locationSize;Te++)_(Y.location+Te,ue.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Te=0;Te<Y.locationSize;Te++)y(Y.location+Te);a.bindBuffer(a.ARRAY_BUFFER,Re);for(let Te=0;Te<Y.locationSize;Te++)R(Y.location+Te,F/Y.locationSize,He,re,ve*qe,(Me+F/Y.locationSize*Te)*qe,te)}else{if(de.isInstancedBufferAttribute){for(let ue=0;ue<Y.locationSize;ue++)_(Y.location+ue,de.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ue=0;ue<Y.locationSize;ue++)y(Y.location+ue);a.bindBuffer(a.ARRAY_BUFFER,Re);for(let ue=0;ue<Y.locationSize;ue++)R(Y.location+ue,F/Y.locationSize,He,re,F*qe,F/Y.locationSize*ue*qe,te)}}else if(oe!==void 0){const re=oe[q];if(re!==void 0)switch(re.length){case 2:a.vertexAttrib2fv(Y.location,re);break;case 3:a.vertexAttrib3fv(Y.location,re);break;case 4:a.vertexAttrib4fv(Y.location,re);break;default:a.vertexAttrib1fv(Y.location,re)}}}}N()}function L(){W();for(const P in r){const V=r[P];for(const ee in V){const J=V[ee];for(const fe in J)v(J[fe].object),delete J[fe];delete V[ee]}delete r[P]}}function I(P){if(r[P.id]===void 0)return;const V=r[P.id];for(const ee in V){const J=V[ee];for(const fe in J)v(J[fe].object),delete J[fe];delete V[ee]}delete r[P.id]}function O(P){for(const V in r){const ee=r[V];if(ee[P.id]===void 0)continue;const J=ee[P.id];for(const fe in J)v(J[fe].object),delete J[fe];delete ee[P.id]}}function W(){w(),u=!0,c!==o&&(c=o,m(c.object))}function w(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:W,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:y,disableUnusedAttributes:N}}function iM(a,e,n){let r;function o(m){r=m}function c(m,v){a.drawArrays(r,m,v),n.update(v,r,1)}function u(m,v,g){g!==0&&(a.drawArraysInstanced(r,m,v,g),n.update(v,r,g))}function d(m,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,g);let S=0;for(let T=0;T<g;T++)S+=v[T];n.update(S,r,1)}function p(m,v,g,x){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)u(m[T],v[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,g);let T=0;for(let C=0;C<g;C++)T+=v[C]*x[C];n.update(T,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function rM(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==_i&&r.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const W=O===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==qn&&r.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ai&&!W)}function p(O){if(O==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(at("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),N=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),R=a.getParameter(a.MAX_VARYING_VECTORS),b=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),L=a.getParameter(a.MAX_SAMPLES),I=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:N,maxVaryings:R,maxFragmentUniforms:b,maxSamples:L,samples:I}}function sM(a){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Kr,d=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||r!==0||o;return o=x,r=g.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){n=v(g,x,0)},this.setState=function(g,x,S){const T=g.clippingPlanes,C=g.clipIntersection,y=g.clipShadows,_=a.get(g);if(!o||T===null||T.length===0||c&&!y)c?v(null):m();else{const N=c?0:r,R=N*4;let b=_.clippingState||null;p.value=b,b=v(T,x,R,S);for(let L=0;L!==R;++L)b[L]=n[L];_.clippingState=b,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,S,T){const C=g!==null?g.length:0;let y=null;if(C!==0){if(y=p.value,T!==!0||y===null){const _=S+C*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(y===null||y.length<_)&&(y=new Float32Array(_));for(let R=0,b=S;R!==C;++R,b+=4)u.copy(g[R]).applyMatrix4(N,d),u.normal.toArray(y,b),y[b+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function aM(a){let e=new WeakMap;function n(u,d){return d===pf?u.mapping=ts:d===mf&&(u.mapping=Hs),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===pf||d===mf)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new xg(p.height);return m.fromEquirectangularTexture(a,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Tr=4,Mm=[.125,.215,.35,.446,.526,.582],Qr=20,oM=256,Oa=new Eg,Em=new mt;let Zu=null,Qu=0,Ju=0,ef=!1;const lM=new Z;class wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:d=lM}=c;Zu=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zu,Qu,Ju),this._renderer.xr.enabled=ef,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ts||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zu=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:En,minFilter:En,generateMipmaps:!1,type:Ki,format:_i,colorSpace:Ws,depthBuffer:!1},o=Tm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cM(c)),this._blurMaterial=fM(c,e,n),this._ggxMaterial=uM(c,e,n)}return o}_compileMaterial(e){const n=new $n(new Bn,e);this._renderer.compile(n,Oa)}_sceneToCubeUV(e,n,r,o,c){const p=new Yn(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(Em),g.toneMapping=Ri,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $n(new qa,new fd({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let _=!1;const N=e.background;N?N.isColor&&(y.color.copy(N),e.background=null,_=!0):(y.color.copy(Em),_=!0);for(let R=0;R<6;R++){const b=R%3;b===0?(p.up.set(0,m[R],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[R],c.y,c.z)):b===1?(p.up.set(0,0,m[R]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[R],c.z)):(p.up.set(0,m[R],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[R]));const L=this._cubeSize;ks(o,b*L,R>2?L:0,L,L),g.setRenderTarget(o),_&&g.render(C,p),g.render(e,p)}g.toneMapping=S,g.autoClear=x,e.background=N}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ts||e.mapping===Hs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;ks(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Oa)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),g=Math.sqrt(m*m-v*v),x=0+m*1.25,S=g*x,{_lodMax:T}=this,C=this._sizeLods[r],y=3*C*(r>T-Tr?r-T+Tr:0),_=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=T-n,ks(c,y,_,3*C,2*C),o.setRenderTarget(c),o.render(d,Oa),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=T-r,ks(e,y,_,3*C,2*C),o.setRenderTarget(e),o.render(d,Oa)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[o];g.material=m;const x=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Qr-1),C=c/T,y=isFinite(c)?1+Math.floor(v*C):Qr;y>Qr&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Qr}`);const _=[];let N=0;for(let O=0;O<Qr;++O){const W=O/C,w=Math.exp(-W*W/2);_.push(w),O===0?N+=w:O<y&&(N+=2*w)}for(let O=0;O<_.length;O++)_[O]=_[O]/N;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:R}=this;x.dTheta.value=T,x.mipInt.value=R-r;const b=this._sizeLods[o],L=3*b*(o>R-Tr?o-R+Tr:0),I=4*(this._cubeSize-b);ks(n,L,I,3*b,2*b),p.setRenderTarget(n),p.render(g,Oa)}}function cM(a){const e=[],n=[],r=[];let o=a;const c=a-Tr+1+Mm.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let p=1/d;u>a-Tr?p=Mm[u-a+Tr-1]:u===0&&(p=0),n.push(p);const m=1/(d-2),v=-m,g=1+m,x=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,T=6,C=3,y=2,_=1,N=new Float32Array(C*T*S),R=new Float32Array(y*T*S),b=new Float32Array(_*T*S);for(let I=0;I<S;I++){const O=I%3*2/3-1,W=I>2?0:-1,w=[O,W,0,O+2/3,W,0,O+2/3,W+1,0,O,W,0,O+2/3,W+1,0,O,W+1,0];N.set(w,C*T*I),R.set(x,y*T*I);const P=[I,I,I,I,I,I];b.set(P,_*T*I)}const L=new Bn;L.setAttribute("position",new si(N,C)),L.setAttribute("uv",new si(R,y)),L.setAttribute("faceIndex",new si(b,_)),r.push(new $n(L,null)),o>Tr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Tm(a,e,n){const r=new bi(a,e,n);return r.texture.mapping=Fl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ks(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function uM(a,e,n){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function fM(a,e,n){const r=new Float32Array(Qr),o=new Z(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Am(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Cm(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Bl(){return`

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
	`}function dM(a){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===pf||p===mf,v=p===ts||p===Hs;if(m||v){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new wm(a)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return m&&S&&S.height>0||v&&S&&o(S)?(n===null&&(n=new wm(a)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function o(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function hM(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Ga("WebGLRenderer: "+r+" extension not supported."),o}}}function pM(a,e,n,r){const o={},c=new WeakMap;function u(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",u),delete o[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(g,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,n.memory.geometries++),x}function p(g){const x=g.attributes;for(const S in x)e.update(x[S],a.ARRAY_BUFFER)}function m(g){const x=[],S=g.index,T=g.attributes.position;let C=0;if(S!==null){const N=S.array;C=S.version;for(let R=0,b=N.length;R<b;R+=3){const L=N[R+0],I=N[R+1],O=N[R+2];x.push(L,I,I,O,O,L)}}else if(T!==void 0){const N=T.array;C=T.version;for(let R=0,b=N.length/3-1;R<b;R+=3){const L=R+0,I=R+1,O=R+2;x.push(L,I,I,O,O,L)}}else return;const y=new(cg(x)?mg:pg)(x,1);y.version=C;const _=c.get(g);_&&e.remove(_),c.set(g,y)}function v(g){const x=c.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function mM(a,e,n){let r;function o(x){r=x}let c,u;function d(x){c=x.type,u=x.bytesPerElement}function p(x,S){a.drawElements(r,S,c,x*u),n.update(S,r,1)}function m(x,S,T){T!==0&&(a.drawElementsInstanced(r,S,c,x*u,T),n.update(S,r,T))}function v(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,x,0,T);let y=0;for(let _=0;_<T;_++)y+=S[_];n.update(y,r,1)}function g(x,S,T,C){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)m(x[_]/u,S[_],C[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,x,0,C,0,T);let _=0;for(let N=0;N<T;N++)_+=S[N]*C[N];n.update(_,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function gM(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=d*(c/3);break;case a.LINES:n.lines+=d*(c/2);break;case a.LINE_STRIP:n.lines+=d*(c-1);break;case a.LINE_LOOP:n.lines+=d*c;break;case a.POINTS:n.points+=d*c;break;default:Rt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function _M(a,e,n){const r=new WeakMap,o=new qt;function c(u,d,p){const m=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let P=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",P)};var S=P;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let b=0;T===!0&&(b=1),C===!0&&(b=2),y===!0&&(b=3);let L=d.attributes.position.count*b,I=1;L>e.maxTextureSize&&(I=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const O=new Float32Array(L*I*4*g),W=new ug(O,L,I,g);W.type=Ai,W.needsUpdate=!0;const w=b*4;for(let V=0;V<g;V++){const ee=_[V],J=N[V],fe=R[V],le=L*I*4*V;for(let oe=0;oe<ee.count;oe++){const q=oe*w;T===!0&&(o.fromBufferAttribute(ee,oe),O[le+q+0]=o.x,O[le+q+1]=o.y,O[le+q+2]=o.z,O[le+q+3]=0),C===!0&&(o.fromBufferAttribute(J,oe),O[le+q+4]=o.x,O[le+q+5]=o.y,O[le+q+6]=o.z,O[le+q+7]=0),y===!0&&(o.fromBufferAttribute(fe,oe),O[le+q+8]=o.x,O[le+q+9]=o.y,O[le+q+10]=o.z,O[le+q+11]=fe.itemSize===4?o.w:1)}}x={count:g,texture:W,size:new xt(L,I)},r.set(d,x),d.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const C=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(a,"morphTargetBaseInfluence",C),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:c}}function vM(a,e,n,r){let o=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,g=e.get(p,v);if(o.get(g)!==m&&(e.update(g),o.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return g}function u(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}const xM={[Ym]:"LINEAR_TONE_MAPPING",[qm]:"REINHARD_TONE_MAPPING",[$m]:"CINEON_TONE_MAPPING",[Km]:"ACES_FILMIC_TONE_MAPPING",[Qm]:"AGX_TONE_MAPPING",[Jm]:"NEUTRAL_TONE_MAPPING",[Zm]:"CUSTOM_TONE_MAPPING"};function yM(a,e,n,r,o){const c=new bi(e,n,{type:a,depthBuffer:r,stencilBuffer:o}),u=new bi(e,n,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),d=new Bn;d.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new fn([0,2,0,0,2,0],2));const p=new fx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new $n(d,p),v=new Eg(-1,1,1,-1,0,1);let g=null,x=null,S=!1,T,C=null,y=[],_=!1;this.setSize=function(N,R){c.setSize(N,R),u.setSize(N,R);for(let b=0;b<y.length;b++){const L=y[b];L.setSize&&L.setSize(N,R)}},this.setEffects=function(N){y=N,_=y.length>0&&y[0].isRenderPass===!0;const R=c.width,b=c.height;for(let L=0;L<y.length;L++){const I=y[L];I.setSize&&I.setSize(R,b)}},this.begin=function(N,R){if(S||N.toneMapping===Ri&&y.length===0)return!1;if(C=R,R!==null){const b=R.width,L=R.height;(c.width!==b||c.height!==L)&&this.setSize(b,L)}return _===!1&&N.setRenderTarget(c),T=N.toneMapping,N.toneMapping=Ri,!0},this.hasRenderPass=function(){return _},this.end=function(N,R){N.toneMapping=T,S=!0;let b=c,L=u;for(let I=0;I<y.length;I++){const O=y[I];if(O.enabled!==!1&&(O.render(N,L,b,R),O.needsSwap!==!1)){const W=b;b=L,L=W}}if(g!==N.outputColorSpace||x!==N.toneMapping){g=N.outputColorSpace,x=N.toneMapping,p.defines={},Tt.getTransfer(g)===It&&(p.defines.SRGB_TRANSFER="");const I=xM[x];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=b.texture,N.setRenderTarget(C),N.render(m,v),C=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),u.dispose(),d.dispose(),p.dispose()}}const Tg=new bn,Qf=new Wa(1,1),Ag=new ug,Cg=new zv,Rg=new vg,Rm=[],bm=[],Pm=new Float32Array(16),Nm=new Float32Array(9),Dm=new Float32Array(4);function qs(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=Rm[o];if(c===void 0&&(c=new Float32Array(o),Rm[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,a[u].toArray(c,d)}return c}function tn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function nn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function zl(a,e){let n=bm[e];n===void 0&&(n=new Int32Array(e),bm[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function SM(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function MM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;a.uniform2fv(this.addr,e),nn(n,e)}}function EM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(tn(n,e))return;a.uniform3fv(this.addr,e),nn(n,e)}}function wM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;a.uniform4fv(this.addr,e),nn(n,e)}}function TM(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;Dm.set(r),a.uniformMatrix2fv(this.addr,!1,Dm),nn(n,r)}}function AM(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;Nm.set(r),a.uniformMatrix3fv(this.addr,!1,Nm),nn(n,r)}}function CM(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;Pm.set(r),a.uniformMatrix4fv(this.addr,!1,Pm),nn(n,r)}}function RM(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function bM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;a.uniform2iv(this.addr,e),nn(n,e)}}function PM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;a.uniform3iv(this.addr,e),nn(n,e)}}function NM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;a.uniform4iv(this.addr,e),nn(n,e)}}function DM(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function LM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;a.uniform2uiv(this.addr,e),nn(n,e)}}function IM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;a.uniform3uiv(this.addr,e),nn(n,e)}}function UM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;a.uniform4uiv(this.addr,e),nn(n,e)}}function FM(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Qf.compareFunction=n.isReversedDepthBuffer()?cd:ld,c=Qf):c=Tg,n.setTexture2D(e||c,o)}function OM(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Cg,o)}function kM(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Rg,o)}function BM(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Ag,o)}function zM(a){switch(a){case 5126:return SM;case 35664:return MM;case 35665:return EM;case 35666:return wM;case 35674:return TM;case 35675:return AM;case 35676:return CM;case 5124:case 35670:return RM;case 35667:case 35671:return bM;case 35668:case 35672:return PM;case 35669:case 35673:return NM;case 5125:return DM;case 36294:return LM;case 36295:return IM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return FM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return BM}}function VM(a,e){a.uniform1fv(this.addr,e)}function HM(a,e){const n=qs(e,this.size,2);a.uniform2fv(this.addr,n)}function GM(a,e){const n=qs(e,this.size,3);a.uniform3fv(this.addr,n)}function WM(a,e){const n=qs(e,this.size,4);a.uniform4fv(this.addr,n)}function XM(a,e){const n=qs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function jM(a,e){const n=qs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function YM(a,e){const n=qs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function qM(a,e){a.uniform1iv(this.addr,e)}function $M(a,e){a.uniform2iv(this.addr,e)}function KM(a,e){a.uniform3iv(this.addr,e)}function ZM(a,e){a.uniform4iv(this.addr,e)}function QM(a,e){a.uniform1uiv(this.addr,e)}function JM(a,e){a.uniform2uiv(this.addr,e)}function eE(a,e){a.uniform3uiv(this.addr,e)}function tE(a,e){a.uniform4uiv(this.addr,e)}function nE(a,e,n){const r=this.cache,o=e.length,c=zl(n,o);tn(r,c)||(a.uniform1iv(this.addr,c),nn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=Qf:u=Tg;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,c[d])}function iE(a,e,n){const r=this.cache,o=e.length,c=zl(n,o);tn(r,c)||(a.uniform1iv(this.addr,c),nn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Cg,c[u])}function rE(a,e,n){const r=this.cache,o=e.length,c=zl(n,o);tn(r,c)||(a.uniform1iv(this.addr,c),nn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Rg,c[u])}function sE(a,e,n){const r=this.cache,o=e.length,c=zl(n,o);tn(r,c)||(a.uniform1iv(this.addr,c),nn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Ag,c[u])}function aE(a){switch(a){case 5126:return VM;case 35664:return HM;case 35665:return GM;case 35666:return WM;case 35674:return XM;case 35675:return jM;case 35676:return YM;case 5124:case 35670:return qM;case 35667:case 35671:return $M;case 35668:case 35672:return KM;case 35669:case 35673:return ZM;case 5125:return QM;case 36294:return JM;case 36295:return eE;case 36296:return tE;case 35678:case 36198:case 36298:case 36306:case 35682:return nE;case 35679:case 36299:case 36307:return iE;case 35680:case 36300:case 36308:case 36293:return rE;case 36289:case 36303:case 36311:case 36292:return sE}}class oE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=zM(n.type)}}class lE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=aE(n.type)}}class cE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],r)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function Lm(a,e){a.seq.push(e),a.map[e.id]=e}function uE(a,e,n){const r=a.name,o=r.length;for(tf.lastIndex=0;;){const c=tf.exec(r),u=tf.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){Lm(n,m===void 0?new oE(d,a,e):new lE(d,a,e));break}else{let g=n.map[d];g===void 0&&(g=new cE(d),Lm(n,g)),n=g}}}class Nl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(n,u),p=e.getUniformLocation(n,d.name);uE(d,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Im(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const fE=37297;let dE=0;function hE(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Um=new ft;function pE(a){Tt._getMatrix(Um,Tt.workingColorSpace,a);const e=`mat3( ${Um.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(a)){case Dl:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Fm(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+hE(a.getShaderSource(e),d)}else return c}function mE(a,e){const n=pE(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const gE={[Ym]:"Linear",[qm]:"Reinhard",[$m]:"Cineon",[Km]:"ACESFilmic",[Qm]:"AgX",[Jm]:"Neutral",[Zm]:"Custom"};function _E(a,e){const n=gE[e];return n===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Tl=new Z;function vE(){Tt.getLuminanceCoefficients(Tl);const a=Tl.x.toFixed(4),e=Tl.y.toFixed(4),n=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xE(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function yE(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function SE(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:d}}return n}function za(a){return a!==""}function Om(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function km(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ME=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jf(a){return a.replace(ME,wE)}const EE=new Map;function wE(a,e){let n=ht[e];if(n===void 0){const r=EE.get(e);if(r!==void 0)n=ht[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Jf(n)}const TE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(a){return a.replace(TE,AE)}function AE(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function zm(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const CE={[Al]:"SHADOWMAP_TYPE_PCF",[Ba]:"SHADOWMAP_TYPE_VSM"};function RE(a){return CE[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bE={[ts]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[Fl]:"ENVMAP_TYPE_CUBE_UV"};function PE(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":bE[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const NE={[Hs]:"ENVMAP_MODE_REFRACTION"};function DE(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":NE[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LE={[jm]:"ENVMAP_BLENDING_MULTIPLY",[Sv]:"ENVMAP_BLENDING_MIX",[Mv]:"ENVMAP_BLENDING_ADD"};function IE(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":LE[a.combine]||"ENVMAP_BLENDING_NONE"}function UE(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function FE(a,e,n,r){const o=a.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=RE(n),m=PE(n),v=DE(n),g=IE(n),x=UE(n),S=xE(n),T=yE(c),C=o.createProgram();let y,_,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(za).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(za).join(`
`),_.length>0&&(_+=`
`)):(y=[zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),_=[zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ri?"#define TONE_MAPPING":"",n.toneMapping!==Ri?ht.tonemapping_pars_fragment:"",n.toneMapping!==Ri?_E("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,mE("linearToOutputTexel",n.outputColorSpace),vE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(za).join(`
`)),u=Jf(u),u=Om(u,n),u=km(u,n),d=Jf(d),d=Om(d,n),d=km(d,n),u=Bm(u),d=Bm(d),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",n.glslVersion===Qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const R=N+y+u,b=N+_+d,L=Im(o,o.VERTEX_SHADER,R),I=Im(o,o.FRAGMENT_SHADER,b);o.attachShader(C,L),o.attachShader(C,I),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function O(V){if(a.debug.checkShaderErrors){const ee=o.getProgramInfoLog(C)||"",J=o.getShaderInfoLog(L)||"",fe=o.getShaderInfoLog(I)||"",le=ee.trim(),oe=J.trim(),q=fe.trim();let Y=!0,de=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(Y=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,C,L,I);else{const re=Fm(o,L,"vertex"),F=Fm(o,I,"fragment");Rt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+le+`
`+re+`
`+F)}else le!==""?at("WebGLProgram: Program Info Log:",le):(oe===""||q==="")&&(de=!1);de&&(V.diagnostics={runnable:Y,programLog:le,vertexShader:{log:oe,prefix:y},fragmentShader:{log:q,prefix:_}})}o.deleteShader(L),o.deleteShader(I),W=new Nl(o,C),w=SE(o,C)}let W;this.getUniforms=function(){return W===void 0&&O(this),W};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=o.getProgramParameter(C,fE)),P},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dE++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=L,this.fragmentShader=I,this}let OE=0;class kE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new BE(e),n.set(e,r)),r}}class BE{constructor(e){this.id=OE++,this.code=e,this.usedTimes=0}}function zE(a,e,n,r,o,c,u){const d=new dg,p=new kE,m=new Set,v=[],g=new Map,x=o.logarithmicDepthBuffer;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return m.add(w),w===0?"uv":`uv${w}`}function y(w,P,V,ee,J){const fe=ee.fog,le=J.geometry,oe=w.isMeshStandardMaterial?ee.environment:null,q=(w.isMeshStandardMaterial?n:e).get(w.envMap||oe),Y=q&&q.mapping===Fl?q.image.height:null,de=T[w.type];w.precision!==null&&(S=o.getMaxPrecision(w.precision),S!==w.precision&&at("WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const re=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,F=re!==void 0?re.length:0;let ae=0;le.morphAttributes.position!==void 0&&(ae=1),le.morphAttributes.normal!==void 0&&(ae=2),le.morphAttributes.color!==void 0&&(ae=3);let Re,He,qe,te;if(de){const Mt=Ti[de];Re=Mt.vertexShader,He=Mt.fragmentShader}else Re=w.vertexShader,He=w.fragmentShader,p.update(w),qe=p.getVertexShaderID(w),te=p.getFragmentShaderID(w);const ue=a.getRenderTarget(),ve=a.state.buffers.depth.getReversed(),Me=J.isInstancedMesh===!0,Te=J.isBatchedMesh===!0,ct=!!w.map,Dt=!!w.matcap,ot=!!q,yt=!!w.aoMap,Pt=!!w.lightMap,ut=!!w.bumpMap,zt=!!w.normalMap,z=!!w.displacementMap,Vt=!!w.emissiveMap,gt=!!w.metalnessMap,St=!!w.roughnessMap,Xe=w.anisotropy>0,D=w.clearcoat>0,M=w.dispersion>0,X=w.iridescence>0,he=w.sheen>0,me=w.transmission>0,ce=Xe&&!!w.anisotropyMap,$e=D&&!!w.clearcoatMap,Ae=D&&!!w.clearcoatNormalMap,Be=D&&!!w.clearcoatRoughnessMap,nt=X&&!!w.iridescenceMap,Se=X&&!!w.iridescenceThicknessMap,Ne=he&&!!w.sheenColorMap,Ge=he&&!!w.sheenRoughnessMap,je=!!w.specularMap,be=!!w.specularColorMap,lt=!!w.specularIntensityMap,H=me&&!!w.transmissionMap,Le=me&&!!w.thicknessMap,Ee=!!w.gradientMap,Ie=!!w.alphaMap,xe=w.alphaTest>0,pe=!!w.alphaHash,Pe=!!w.extensions;let it=Ri;w.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(it=a.toneMapping);const Lt={shaderID:de,shaderType:w.type,shaderName:w.name,vertexShader:Re,fragmentShader:He,defines:w.defines,customVertexShaderID:qe,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:Te,batchingColor:Te&&J._colorsTexture!==null,instancing:Me,instancingColor:Me&&J.instanceColor!==null,instancingMorph:Me&&J.morphTexture!==null,outputColorSpace:ue===null?a.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ws,alphaToCoverage:!!w.alphaToCoverage,map:ct,matcap:Dt,envMap:ot,envMapMode:ot&&q.mapping,envMapCubeUVHeight:Y,aoMap:yt,lightMap:Pt,bumpMap:ut,normalMap:zt,displacementMap:z,emissiveMap:Vt,normalMapObjectSpace:zt&&w.normalMapType===Tv,normalMapTangentSpace:zt&&w.normalMapType===lg,metalnessMap:gt,roughnessMap:St,anisotropy:Xe,anisotropyMap:ce,clearcoat:D,clearcoatMap:$e,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Be,dispersion:M,iridescence:X,iridescenceMap:nt,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ne,sheenRoughnessMap:Ge,specularMap:je,specularColorMap:be,specularIntensityMap:lt,transmission:me,transmissionMap:H,thicknessMap:Le,gradientMap:Ee,opaque:w.transparent===!1&&w.blending===Bs&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:xe,alphaHash:pe,combine:w.combine,mapUv:ct&&C(w.map.channel),aoMapUv:yt&&C(w.aoMap.channel),lightMapUv:Pt&&C(w.lightMap.channel),bumpMapUv:ut&&C(w.bumpMap.channel),normalMapUv:zt&&C(w.normalMap.channel),displacementMapUv:z&&C(w.displacementMap.channel),emissiveMapUv:Vt&&C(w.emissiveMap.channel),metalnessMapUv:gt&&C(w.metalnessMap.channel),roughnessMapUv:St&&C(w.roughnessMap.channel),anisotropyMapUv:ce&&C(w.anisotropyMap.channel),clearcoatMapUv:$e&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&C(w.sheenRoughnessMap.channel),specularMapUv:je&&C(w.specularMap.channel),specularColorMapUv:be&&C(w.specularColorMap.channel),specularIntensityMapUv:lt&&C(w.specularIntensityMap.channel),transmissionMapUv:H&&C(w.transmissionMap.channel),thicknessMapUv:Le&&C(w.thicknessMap.channel),alphaMapUv:Ie&&C(w.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(zt||Xe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!le.attributes.uv&&(ct||Ie),fog:!!fe,useFog:w.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ve,skinning:J.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ae,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&V.length>0,shadowMapType:a.shadowMap.type,toneMapping:it,decodeVideoTexture:ct&&w.map.isVideoTexture===!0&&Tt.getTransfer(w.map.colorSpace)===It,decodeVideoTextureEmissive:Vt&&w.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(w.emissiveMap.colorSpace)===It,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ji,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pe&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&w.extensions.multiDraw===!0||Te)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Lt.vertexUv1s=m.has(1),Lt.vertexUv2s=m.has(2),Lt.vertexUv3s=m.has(3),m.clear(),Lt}function _(w){const P=[];if(w.shaderID?P.push(w.shaderID):(P.push(w.customVertexShaderID),P.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)P.push(V),P.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(N(P,w),R(P,w),P.push(a.outputColorSpace)),P.push(w.customProgramCacheKey),P.join()}function N(w,P){w.push(P.precision),w.push(P.outputColorSpace),w.push(P.envMapMode),w.push(P.envMapCubeUVHeight),w.push(P.mapUv),w.push(P.alphaMapUv),w.push(P.lightMapUv),w.push(P.aoMapUv),w.push(P.bumpMapUv),w.push(P.normalMapUv),w.push(P.displacementMapUv),w.push(P.emissiveMapUv),w.push(P.metalnessMapUv),w.push(P.roughnessMapUv),w.push(P.anisotropyMapUv),w.push(P.clearcoatMapUv),w.push(P.clearcoatNormalMapUv),w.push(P.clearcoatRoughnessMapUv),w.push(P.iridescenceMapUv),w.push(P.iridescenceThicknessMapUv),w.push(P.sheenColorMapUv),w.push(P.sheenRoughnessMapUv),w.push(P.specularMapUv),w.push(P.specularColorMapUv),w.push(P.specularIntensityMapUv),w.push(P.transmissionMapUv),w.push(P.thicknessMapUv),w.push(P.combine),w.push(P.fogExp2),w.push(P.sizeAttenuation),w.push(P.morphTargetsCount),w.push(P.morphAttributeCount),w.push(P.numDirLights),w.push(P.numPointLights),w.push(P.numSpotLights),w.push(P.numSpotLightMaps),w.push(P.numHemiLights),w.push(P.numRectAreaLights),w.push(P.numDirLightShadows),w.push(P.numPointLightShadows),w.push(P.numSpotLightShadows),w.push(P.numSpotLightShadowsWithMaps),w.push(P.numLightProbes),w.push(P.shadowMapType),w.push(P.toneMapping),w.push(P.numClippingPlanes),w.push(P.numClipIntersection),w.push(P.depthPacking)}function R(w,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),w.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),w.push(d.mask)}function b(w){const P=T[w.type];let V;if(P){const ee=Ti[P];V=Jv.clone(ee.uniforms)}else V=w.uniforms;return V}function L(w,P){let V=g.get(P);return V!==void 0?++V.usedTimes:(V=new FE(a,P,w,c),v.push(V),g.set(P,V)),V}function I(w){if(--w.usedTimes===0){const P=v.indexOf(w);v[P]=v[v.length-1],v.pop(),g.delete(w.cacheKey),w.destroy()}}function O(w){p.remove(w)}function W(){p.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:b,acquireProgram:L,releaseProgram:I,releaseShaderCache:O,programs:v,dispose:W}}function VE(){let a=new WeakMap;function e(u){return a.has(u)}function n(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,p){a.get(u)[d]=p}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function HE(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Vm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Hm(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(g,x,S,T,C,y){let _=a[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:S,groupOrder:T,renderOrder:g.renderOrder,z:C,group:y},a[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=S,_.groupOrder=T,_.renderOrder=g.renderOrder,_.z=C,_.group=y),e++,_}function d(g,x,S,T,C,y){const _=u(g,x,S,T,C,y);S.transmission>0?r.push(_):S.transparent===!0?o.push(_):n.push(_)}function p(g,x,S,T,C,y){const _=u(g,x,S,T,C,y);S.transmission>0?r.unshift(_):S.transparent===!0?o.unshift(_):n.unshift(_)}function m(g,x){n.length>1&&n.sort(g||HE),r.length>1&&r.sort(x||Vm),o.length>1&&o.sort(x||Vm)}function v(){for(let g=e,x=a.length;g<x;g++){const S=a[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:d,unshift:p,finish:v,sort:m}}function GE(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new Hm,a.set(r,[u])):o>=c.length?(u=new Hm,c.push(u)):u=c[o],u}function n(){a=new WeakMap}return{get:e,dispose:n}}function WE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new mt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":n={color:new mt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return a[e.id]=n,n}}}function XE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let jE=0;function YE(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function qE(a){const e=new WE,n=XE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const o=new Z,c=new jt,u=new jt;function d(m){let v=0,g=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let S=0,T=0,C=0,y=0,_=0,N=0,R=0,b=0,L=0,I=0,O=0;m.sort(YE);for(let w=0,P=m.length;w<P;w++){const V=m[w],ee=V.color,J=V.intensity,fe=V.distance;let le=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Gs?le=V.shadow.map.texture:le=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=ee.r*J,g+=ee.g*J,x+=ee.b*J;else if(V.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(V.sh.coefficients[oe],J);O++}else if(V.isDirectionalLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const q=V.shadow,Y=n.get(V);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.directionalShadow[S]=Y,r.directionalShadowMap[S]=le,r.directionalShadowMatrix[S]=V.shadow.matrix,N++}r.directional[S]=oe,S++}else if(V.isSpotLight){const oe=e.get(V);oe.position.setFromMatrixPosition(V.matrixWorld),oe.color.copy(ee).multiplyScalar(J),oe.distance=fe,oe.coneCos=Math.cos(V.angle),oe.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),oe.decay=V.decay,r.spot[C]=oe;const q=V.shadow;if(V.map&&(r.spotLightMap[L]=V.map,L++,q.updateMatrices(V),V.castShadow&&I++),r.spotLightMatrix[C]=q.matrix,V.castShadow){const Y=n.get(V);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=le,b++}C++}else if(V.isRectAreaLight){const oe=e.get(V);oe.color.copy(ee).multiplyScalar(J),oe.halfWidth.set(V.width*.5,0,0),oe.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=oe,y++}else if(V.isPointLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),oe.distance=V.distance,oe.decay=V.decay,V.castShadow){const q=V.shadow,Y=n.get(V);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,r.pointShadow[T]=Y,r.pointShadowMap[T]=le,r.pointShadowMatrix[T]=V.shadow.matrix,R++}r.point[T]=oe,T++}else if(V.isHemisphereLight){const oe=e.get(V);oe.skyColor.copy(V.color).multiplyScalar(J),oe.groundColor.copy(V.groundColor).multiplyScalar(J),r.hemi[_]=oe,_++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const W=r.hash;(W.directionalLength!==S||W.pointLength!==T||W.spotLength!==C||W.rectAreaLength!==y||W.hemiLength!==_||W.numDirectionalShadows!==N||W.numPointShadows!==R||W.numSpotShadows!==b||W.numSpotMaps!==L||W.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=y,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=b+L-I,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,W.directionalLength=S,W.pointLength=T,W.spotLength=C,W.rectAreaLength=y,W.hemiLength=_,W.numDirectionalShadows=N,W.numPointShadows=R,W.numSpotShadows=b,W.numSpotMaps=L,W.numLightProbes=O,r.version=jE++)}function p(m,v){let g=0,x=0,S=0,T=0,C=0;const y=v.matrixWorldInverse;for(let _=0,N=m.length;_<N;_++){const R=m[_];if(R.isDirectionalLight){const b=r.directional[g];b.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(y),g++}else if(R.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(y),S++}else if(R.isRectAreaLight){const b=r.rectArea[T];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(y),u.identity(),c.copy(R.matrixWorld),c.premultiply(y),u.extractRotation(c),b.halfWidth.set(R.width*.5,0,0),b.halfHeight.set(0,R.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),T++}else if(R.isPointLight){const b=r.point[x];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(y),x++}else if(R.isHemisphereLight){const b=r.hemi[C];b.direction.setFromMatrixPosition(R.matrixWorld),b.direction.transformDirection(y),C++}}}return{setup:d,setupView:p,state:r}}function Gm(a){const e=new qE(a),n=[],r=[];function o(v){m.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function u(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:u}}function $E(a){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new Gm(a),e.set(o,[d])):c>=u.length?(d=new Gm(a),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const KE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,QE=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],JE=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Wm=new jt,ka=new Z,nf=new Z;function e1(a,e,n){let r=new hd;const o=new xt,c=new xt,u=new qt,d=new hx,p=new px,m={},v=n.maxTextureSize,g={[Ar]:kn,[kn]:Ar,[ji]:ji},x=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:KE,fragmentShader:ZE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new Bn;T.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new $n(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let _=this.type;this.render=function(I,O,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;I.type===nv&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Al);const w=a.getRenderTarget(),P=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),ee=a.state;ee.setBlending(qi),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const J=_!==this.type;J&&O.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(le=>le.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,le=I.length;fe<le;fe++){const oe=I[fe],q=oe.shadow;if(q===void 0){at("WebGLShadowMap:",oe,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const Y=q.getFrameExtents();if(o.multiply(Y),c.copy(q.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/Y.x),o.x=c.x*Y.x,q.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/Y.y),o.y=c.y*Y.y,q.mapSize.y=c.y)),q.map===null||J===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ba){if(oe.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new bi(o.x,o.y,{format:Gs,type:Ki,minFilter:En,magFilter:En,generateMipmaps:!1}),q.map.texture.name=oe.name+".shadowMap",q.map.depthTexture=new Wa(o.x,o.y,Ai),q.map.depthTexture.name=oe.name+".shadowMapDepth",q.map.depthTexture.format=Zi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=mn,q.map.depthTexture.magFilter=mn}else{oe.isPointLight?(q.map=new xg(o.x),q.map.depthTexture=new ux(o.x,Pi)):(q.map=new bi(o.x,o.y),q.map.depthTexture=new Wa(o.x,o.y,Pi)),q.map.depthTexture.name=oe.name+".shadowMap",q.map.depthTexture.format=Zi;const re=a.state.buffers.depth.getReversed();this.type===Al?(q.map.depthTexture.compareFunction=re?cd:ld,q.map.depthTexture.minFilter=En,q.map.depthTexture.magFilter=En):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=mn,q.map.depthTexture.magFilter=mn)}q.camera.updateProjectionMatrix()}const de=q.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<de;re++){if(q.map.isWebGLCubeRenderTarget)a.setRenderTarget(q.map,re),a.clear();else{re===0&&(a.setRenderTarget(q.map),a.clear());const F=q.getViewport(re);u.set(c.x*F.x,c.y*F.y,c.x*F.z,c.y*F.w),ee.viewport(u)}if(oe.isPointLight){const F=q.camera,ae=q.matrix,Re=oe.distance||F.far;Re!==F.far&&(F.far=Re,F.updateProjectionMatrix()),ka.setFromMatrixPosition(oe.matrixWorld),F.position.copy(ka),nf.copy(F.position),nf.add(QE[re]),F.up.copy(JE[re]),F.lookAt(nf),F.updateMatrixWorld(),ae.makeTranslation(-ka.x,-ka.y,-ka.z),Wm.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Wm,F.coordinateSystem,F.reversedDepth)}else q.updateMatrices(oe);r=q.getFrustum(),b(O,W,q.camera,oe,this.type)}q.isPointLightShadow!==!0&&this.type===Ba&&N(q,W),q.needsUpdate=!1}_=this.type,y.needsUpdate=!1,a.setRenderTarget(w,P,V)};function N(I,O){const W=e.update(C);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new bi(o.x,o.y,{format:Gs,type:Ki})),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,a.setRenderTarget(I.mapPass),a.clear(),a.renderBufferDirect(O,null,W,x,C,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,a.setRenderTarget(I.map),a.clear(),a.renderBufferDirect(O,null,W,S,C,null)}function R(I,O,W,w){let P=null;const V=W.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)P=V;else if(P=W.isPointLight===!0?p:d,a.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const ee=P.uuid,J=O.uuid;let fe=m[ee];fe===void 0&&(fe={},m[ee]=fe);let le=fe[J];le===void 0&&(le=P.clone(),fe[J]=le,O.addEventListener("dispose",L)),P=le}if(P.visible=O.visible,P.wireframe=O.wireframe,w===Ba?P.side=O.shadowSide!==null?O.shadowSide:O.side:P.side=O.shadowSide!==null?O.shadowSide:g[O.side],P.alphaMap=O.alphaMap,P.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,P.map=O.map,P.clipShadows=O.clipShadows,P.clippingPlanes=O.clippingPlanes,P.clipIntersection=O.clipIntersection,P.displacementMap=O.displacementMap,P.displacementScale=O.displacementScale,P.displacementBias=O.displacementBias,P.wireframeLinewidth=O.wireframeLinewidth,P.linewidth=O.linewidth,W.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const ee=a.properties.get(P);ee.light=W}return P}function b(I,O,W,w,P){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&P===Ba)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,I.matrixWorld);const J=e.update(I),fe=I.material;if(Array.isArray(fe)){const le=J.groups;for(let oe=0,q=le.length;oe<q;oe++){const Y=le[oe],de=fe[Y.materialIndex];if(de&&de.visible){const re=R(I,de,w,P);I.onBeforeShadow(a,I,O,W,J,re,Y),a.renderBufferDirect(W,null,J,re,I,Y),I.onAfterShadow(a,I,O,W,J,re,Y)}}}else if(fe.visible){const le=R(I,fe,w,P);I.onBeforeShadow(a,I,O,W,J,le,null),a.renderBufferDirect(W,null,J,le,I,null),I.onAfterShadow(a,I,O,W,J,le,null)}}const ee=I.children;for(let J=0,fe=ee.length;J<fe;J++)b(ee[J],O,W,w,P)}function L(I){I.target.removeEventListener("dispose",L);for(const W in m){const w=m[W],P=I.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}const t1={[of]:lf,[cf]:df,[uf]:hf,[Vs]:ff,[lf]:of,[df]:cf,[hf]:uf,[ff]:Vs};function n1(a,e){function n(){let H=!1;const Le=new qt;let Ee=null;const Ie=new qt(0,0,0,0);return{setMask:function(xe){Ee!==xe&&!H&&(a.colorMask(xe,xe,xe,xe),Ee=xe)},setLocked:function(xe){H=xe},setClear:function(xe,pe,Pe,it,Lt){Lt===!0&&(xe*=it,pe*=it,Pe*=it),Le.set(xe,pe,Pe,it),Ie.equals(Le)===!1&&(a.clearColor(xe,pe,Pe,it),Ie.copy(Le))},reset:function(){H=!1,Ee=null,Ie.set(-1,0,0,0)}}}function r(){let H=!1,Le=!1,Ee=null,Ie=null,xe=null;return{setReversed:function(pe){if(Le!==pe){const Pe=e.get("EXT_clip_control");pe?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Le=pe;const it=xe;xe=null,this.setClear(it)}},getReversed:function(){return Le},setTest:function(pe){pe?ue(a.DEPTH_TEST):ve(a.DEPTH_TEST)},setMask:function(pe){Ee!==pe&&!H&&(a.depthMask(pe),Ee=pe)},setFunc:function(pe){if(Le&&(pe=t1[pe]),Ie!==pe){switch(pe){case of:a.depthFunc(a.NEVER);break;case lf:a.depthFunc(a.ALWAYS);break;case cf:a.depthFunc(a.LESS);break;case Vs:a.depthFunc(a.LEQUAL);break;case uf:a.depthFunc(a.EQUAL);break;case ff:a.depthFunc(a.GEQUAL);break;case df:a.depthFunc(a.GREATER);break;case hf:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ie=pe}},setLocked:function(pe){H=pe},setClear:function(pe){xe!==pe&&(Le&&(pe=1-pe),a.clearDepth(pe),xe=pe)},reset:function(){H=!1,Ee=null,Ie=null,xe=null,Le=!1}}}function o(){let H=!1,Le=null,Ee=null,Ie=null,xe=null,pe=null,Pe=null,it=null,Lt=null;return{setTest:function(Mt){H||(Mt?ue(a.STENCIL_TEST):ve(a.STENCIL_TEST))},setMask:function(Mt){Le!==Mt&&!H&&(a.stencilMask(Mt),Le=Mt)},setFunc:function(Mt,zn,wn){(Ee!==Mt||Ie!==zn||xe!==wn)&&(a.stencilFunc(Mt,zn,wn),Ee=Mt,Ie=zn,xe=wn)},setOp:function(Mt,zn,wn){(pe!==Mt||Pe!==zn||it!==wn)&&(a.stencilOp(Mt,zn,wn),pe=Mt,Pe=zn,it=wn)},setLocked:function(Mt){H=Mt},setClear:function(Mt){Lt!==Mt&&(a.clearStencil(Mt),Lt=Mt)},reset:function(){H=!1,Le=null,Ee=null,Ie=null,xe=null,pe=null,Pe=null,it=null,Lt=null}}}const c=new n,u=new r,d=new o,p=new WeakMap,m=new WeakMap;let v={},g={},x=new WeakMap,S=[],T=null,C=!1,y=null,_=null,N=null,R=null,b=null,L=null,I=null,O=new mt(0,0,0),W=0,w=!1,P=null,V=null,ee=null,J=null,fe=null;const le=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,q=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),oe=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),oe=q>=2);let de=null,re={};const F=a.getParameter(a.SCISSOR_BOX),ae=a.getParameter(a.VIEWPORT),Re=new qt().fromArray(F),He=new qt().fromArray(ae);function qe(H,Le,Ee,Ie){const xe=new Uint8Array(4),pe=a.createTexture();a.bindTexture(H,pe),a.texParameteri(H,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(H,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Pe=0;Pe<Ee;Pe++)H===a.TEXTURE_3D||H===a.TEXTURE_2D_ARRAY?a.texImage3D(Le,0,a.RGBA,1,1,Ie,0,a.RGBA,a.UNSIGNED_BYTE,xe):a.texImage2D(Le+Pe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,xe);return pe}const te={};te[a.TEXTURE_2D]=qe(a.TEXTURE_2D,a.TEXTURE_2D,1),te[a.TEXTURE_CUBE_MAP]=qe(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[a.TEXTURE_2D_ARRAY]=qe(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),te[a.TEXTURE_3D]=qe(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ue(a.DEPTH_TEST),u.setFunc(Vs),ut(!1),zt(Yp),ue(a.CULL_FACE),yt(qi);function ue(H){v[H]!==!0&&(a.enable(H),v[H]=!0)}function ve(H){v[H]!==!1&&(a.disable(H),v[H]=!1)}function Me(H,Le){return g[H]!==Le?(a.bindFramebuffer(H,Le),g[H]=Le,H===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Le),H===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Le),!0):!1}function Te(H,Le){let Ee=S,Ie=!1;if(H){Ee=x.get(Le),Ee===void 0&&(Ee=[],x.set(Le,Ee));const xe=H.textures;if(Ee.length!==xe.length||Ee[0]!==a.COLOR_ATTACHMENT0){for(let pe=0,Pe=xe.length;pe<Pe;pe++)Ee[pe]=a.COLOR_ATTACHMENT0+pe;Ee.length=xe.length,Ie=!0}}else Ee[0]!==a.BACK&&(Ee[0]=a.BACK,Ie=!0);Ie&&a.drawBuffers(Ee)}function ct(H){return T!==H?(a.useProgram(H),T=H,!0):!1}const Dt={[Zr]:a.FUNC_ADD,[rv]:a.FUNC_SUBTRACT,[sv]:a.FUNC_REVERSE_SUBTRACT};Dt[av]=a.MIN,Dt[ov]=a.MAX;const ot={[lv]:a.ZERO,[cv]:a.ONE,[uv]:a.SRC_COLOR,[sf]:a.SRC_ALPHA,[gv]:a.SRC_ALPHA_SATURATE,[pv]:a.DST_COLOR,[dv]:a.DST_ALPHA,[fv]:a.ONE_MINUS_SRC_COLOR,[af]:a.ONE_MINUS_SRC_ALPHA,[mv]:a.ONE_MINUS_DST_COLOR,[hv]:a.ONE_MINUS_DST_ALPHA,[_v]:a.CONSTANT_COLOR,[vv]:a.ONE_MINUS_CONSTANT_COLOR,[xv]:a.CONSTANT_ALPHA,[yv]:a.ONE_MINUS_CONSTANT_ALPHA};function yt(H,Le,Ee,Ie,xe,pe,Pe,it,Lt,Mt){if(H===qi){C===!0&&(ve(a.BLEND),C=!1);return}if(C===!1&&(ue(a.BLEND),C=!0),H!==iv){if(H!==y||Mt!==w){if((_!==Zr||b!==Zr)&&(a.blendEquation(a.FUNC_ADD),_=Zr,b=Zr),Mt)switch(H){case Bs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case rf:a.blendFunc(a.ONE,a.ONE);break;case qp:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case $p:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Rt("WebGLState: Invalid blending: ",H);break}else switch(H){case Bs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case rf:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case qp:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $p:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",H);break}N=null,R=null,L=null,I=null,O.set(0,0,0),W=0,y=H,w=Mt}return}xe=xe||Le,pe=pe||Ee,Pe=Pe||Ie,(Le!==_||xe!==b)&&(a.blendEquationSeparate(Dt[Le],Dt[xe]),_=Le,b=xe),(Ee!==N||Ie!==R||pe!==L||Pe!==I)&&(a.blendFuncSeparate(ot[Ee],ot[Ie],ot[pe],ot[Pe]),N=Ee,R=Ie,L=pe,I=Pe),(it.equals(O)===!1||Lt!==W)&&(a.blendColor(it.r,it.g,it.b,Lt),O.copy(it),W=Lt),y=H,w=!1}function Pt(H,Le){H.side===ji?ve(a.CULL_FACE):ue(a.CULL_FACE);let Ee=H.side===kn;Le&&(Ee=!Ee),ut(Ee),H.blending===Bs&&H.transparent===!1?yt(qi):yt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),c.setMask(H.colorWrite);const Ie=H.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Vt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ue(a.SAMPLE_ALPHA_TO_COVERAGE):ve(a.SAMPLE_ALPHA_TO_COVERAGE)}function ut(H){P!==H&&(H?a.frontFace(a.CW):a.frontFace(a.CCW),P=H)}function zt(H){H!==ev?(ue(a.CULL_FACE),H!==V&&(H===Yp?a.cullFace(a.BACK):H===tv?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ve(a.CULL_FACE),V=H}function z(H){H!==ee&&(oe&&a.lineWidth(H),ee=H)}function Vt(H,Le,Ee){H?(ue(a.POLYGON_OFFSET_FILL),(J!==Le||fe!==Ee)&&(a.polygonOffset(Le,Ee),J=Le,fe=Ee)):ve(a.POLYGON_OFFSET_FILL)}function gt(H){H?ue(a.SCISSOR_TEST):ve(a.SCISSOR_TEST)}function St(H){H===void 0&&(H=a.TEXTURE0+le-1),de!==H&&(a.activeTexture(H),de=H)}function Xe(H,Le,Ee){Ee===void 0&&(de===null?Ee=a.TEXTURE0+le-1:Ee=de);let Ie=re[Ee];Ie===void 0&&(Ie={type:void 0,texture:void 0},re[Ee]=Ie),(Ie.type!==H||Ie.texture!==Le)&&(de!==Ee&&(a.activeTexture(Ee),de=Ee),a.bindTexture(H,Le||te[H]),Ie.type=H,Ie.texture=Le)}function D(){const H=re[de];H!==void 0&&H.type!==void 0&&(a.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{a.compressedTexImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function X(){try{a.compressedTexImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function he(){try{a.texSubImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function me(){try{a.texSubImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function ce(){try{a.compressedTexSubImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function $e(){try{a.compressedTexSubImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function Ae(){try{a.texStorage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function Be(){try{a.texStorage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function nt(){try{a.texImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function Se(){try{a.texImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function Ne(H){Re.equals(H)===!1&&(a.scissor(H.x,H.y,H.z,H.w),Re.copy(H))}function Ge(H){He.equals(H)===!1&&(a.viewport(H.x,H.y,H.z,H.w),He.copy(H))}function je(H,Le){let Ee=m.get(Le);Ee===void 0&&(Ee=new WeakMap,m.set(Le,Ee));let Ie=Ee.get(H);Ie===void 0&&(Ie=a.getUniformBlockIndex(Le,H.name),Ee.set(H,Ie))}function be(H,Le){const Ie=m.get(Le).get(H);p.get(Le)!==Ie&&(a.uniformBlockBinding(Le,Ie,H.__bindingPointIndex),p.set(Le,Ie))}function lt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),v={},de=null,re={},g={},x=new WeakMap,S=[],T=null,C=!1,y=null,_=null,N=null,R=null,b=null,L=null,I=null,O=new mt(0,0,0),W=0,w=!1,P=null,V=null,ee=null,J=null,fe=null,Re.set(0,0,a.canvas.width,a.canvas.height),He.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ue,disable:ve,bindFramebuffer:Me,drawBuffers:Te,useProgram:ct,setBlending:yt,setMaterial:Pt,setFlipSided:ut,setCullFace:zt,setLineWidth:z,setPolygonOffset:Vt,setScissorTest:gt,activeTexture:St,bindTexture:Xe,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:X,texImage2D:nt,texImage3D:Se,updateUBOMapping:je,uniformBlockBinding:be,texStorage2D:Ae,texStorage3D:Be,texSubImage2D:he,texSubImage3D:me,compressedTexSubImage2D:ce,compressedTexSubImage3D:$e,scissor:Ne,viewport:Ge,reset:lt}}function i1(a,e,n,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new xt,v=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,M){return S?new OffscreenCanvas(D,M):Il("canvas")}function C(D,M,X){let he=1;const me=Xe(D);if((me.width>X||me.height>X)&&(he=X/Math.max(me.width,me.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(he*me.width),$e=Math.floor(he*me.height);g===void 0&&(g=T(ce,$e));const Ae=M?T(ce,$e):g;return Ae.width=ce,Ae.height=$e,Ae.getContext("2d").drawImage(D,0,0,ce,$e),at("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ce+"x"+$e+")."),Ae}else return"data"in D&&at("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),D;return D}function y(D){return D.generateMipmaps}function _(D){a.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?a.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function R(D,M,X,he,me=!1){if(D!==null){if(a[D]!==void 0)return a[D];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=M;if(M===a.RED&&(X===a.FLOAT&&(ce=a.R32F),X===a.HALF_FLOAT&&(ce=a.R16F),X===a.UNSIGNED_BYTE&&(ce=a.R8)),M===a.RED_INTEGER&&(X===a.UNSIGNED_BYTE&&(ce=a.R8UI),X===a.UNSIGNED_SHORT&&(ce=a.R16UI),X===a.UNSIGNED_INT&&(ce=a.R32UI),X===a.BYTE&&(ce=a.R8I),X===a.SHORT&&(ce=a.R16I),X===a.INT&&(ce=a.R32I)),M===a.RG&&(X===a.FLOAT&&(ce=a.RG32F),X===a.HALF_FLOAT&&(ce=a.RG16F),X===a.UNSIGNED_BYTE&&(ce=a.RG8)),M===a.RG_INTEGER&&(X===a.UNSIGNED_BYTE&&(ce=a.RG8UI),X===a.UNSIGNED_SHORT&&(ce=a.RG16UI),X===a.UNSIGNED_INT&&(ce=a.RG32UI),X===a.BYTE&&(ce=a.RG8I),X===a.SHORT&&(ce=a.RG16I),X===a.INT&&(ce=a.RG32I)),M===a.RGB_INTEGER&&(X===a.UNSIGNED_BYTE&&(ce=a.RGB8UI),X===a.UNSIGNED_SHORT&&(ce=a.RGB16UI),X===a.UNSIGNED_INT&&(ce=a.RGB32UI),X===a.BYTE&&(ce=a.RGB8I),X===a.SHORT&&(ce=a.RGB16I),X===a.INT&&(ce=a.RGB32I)),M===a.RGBA_INTEGER&&(X===a.UNSIGNED_BYTE&&(ce=a.RGBA8UI),X===a.UNSIGNED_SHORT&&(ce=a.RGBA16UI),X===a.UNSIGNED_INT&&(ce=a.RGBA32UI),X===a.BYTE&&(ce=a.RGBA8I),X===a.SHORT&&(ce=a.RGBA16I),X===a.INT&&(ce=a.RGBA32I)),M===a.RGB&&(X===a.UNSIGNED_INT_5_9_9_9_REV&&(ce=a.RGB9_E5),X===a.UNSIGNED_INT_10F_11F_11F_REV&&(ce=a.R11F_G11F_B10F)),M===a.RGBA){const $e=me?Dl:Tt.getTransfer(he);X===a.FLOAT&&(ce=a.RGBA32F),X===a.HALF_FLOAT&&(ce=a.RGBA16F),X===a.UNSIGNED_BYTE&&(ce=$e===It?a.SRGB8_ALPHA8:a.RGBA8),X===a.UNSIGNED_SHORT_4_4_4_4&&(ce=a.RGBA4),X===a.UNSIGNED_SHORT_5_5_5_1&&(ce=a.RGB5_A1)}return(ce===a.R16F||ce===a.R32F||ce===a.RG16F||ce===a.RG32F||ce===a.RGBA16F||ce===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function b(D,M){let X;return D?M===null||M===Pi||M===Ha?X=a.DEPTH24_STENCIL8:M===Ai?X=a.DEPTH32F_STENCIL8:M===Va&&(X=a.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pi||M===Ha?X=a.DEPTH_COMPONENT24:M===Ai?X=a.DEPTH_COMPONENT32F:M===Va&&(X=a.DEPTH_COMPONENT16),X}function L(D,M){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==mn&&D.minFilter!==En?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function I(D){const M=D.target;M.removeEventListener("dispose",I),W(M),M.isVideoTexture&&v.delete(M)}function O(D){const M=D.target;M.removeEventListener("dispose",O),P(M)}function W(D){const M=r.get(D);if(M.__webglInit===void 0)return;const X=D.source,he=x.get(X);if(he){const me=he[M.__cacheKey];me.usedTimes--,me.usedTimes===0&&w(D),Object.keys(he).length===0&&x.delete(X)}r.remove(D)}function w(D){const M=r.get(D);a.deleteTexture(M.__webglTexture);const X=D.source,he=x.get(X);delete he[M.__cacheKey],u.memory.textures--}function P(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let me=0;me<M.__webglFramebuffer[he].length;me++)a.deleteFramebuffer(M.__webglFramebuffer[he][me]);else a.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)a.deleteFramebuffer(M.__webglFramebuffer[he]);else a.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&a.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&a.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&a.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=D.textures;for(let he=0,me=X.length;he<me;he++){const ce=r.get(X[he]);ce.__webglTexture&&(a.deleteTexture(ce.__webglTexture),u.memory.textures--),r.remove(X[he])}r.remove(D)}let V=0;function ee(){V=0}function J(){const D=V;return D>=o.maxTextures&&at("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),V+=1,D}function fe(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function le(D,M){const X=r.get(D);if(D.isVideoTexture&&gt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&X.__version!==D.version){const he=D.image;if(he===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{te(X,D,M);return}}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,X.__webglTexture,a.TEXTURE0+M)}function oe(D,M){const X=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){te(X,D,M);return}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,X.__webglTexture,a.TEXTURE0+M)}function q(D,M){const X=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){te(X,D,M);return}n.bindTexture(a.TEXTURE_3D,X.__webglTexture,a.TEXTURE0+M)}function Y(D,M){const X=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&X.__version!==D.version){ue(X,D,M);return}n.bindTexture(a.TEXTURE_CUBE_MAP,X.__webglTexture,a.TEXTURE0+M)}const de={[gf]:a.REPEAT,[Yi]:a.CLAMP_TO_EDGE,[_f]:a.MIRRORED_REPEAT},re={[mn]:a.NEAREST,[Ev]:a.NEAREST_MIPMAP_NEAREST,[il]:a.NEAREST_MIPMAP_LINEAR,[En]:a.LINEAR,[Eu]:a.LINEAR_MIPMAP_NEAREST,[Jr]:a.LINEAR_MIPMAP_LINEAR},F={[Av]:a.NEVER,[Nv]:a.ALWAYS,[Cv]:a.LESS,[ld]:a.LEQUAL,[Rv]:a.EQUAL,[cd]:a.GEQUAL,[bv]:a.GREATER,[Pv]:a.NOTEQUAL};function ae(D,M){if(M.type===Ai&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===En||M.magFilter===Eu||M.magFilter===il||M.magFilter===Jr||M.minFilter===En||M.minFilter===Eu||M.minFilter===il||M.minFilter===Jr)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(D,a.TEXTURE_WRAP_S,de[M.wrapS]),a.texParameteri(D,a.TEXTURE_WRAP_T,de[M.wrapT]),(D===a.TEXTURE_3D||D===a.TEXTURE_2D_ARRAY)&&a.texParameteri(D,a.TEXTURE_WRAP_R,de[M.wrapR]),a.texParameteri(D,a.TEXTURE_MAG_FILTER,re[M.magFilter]),a.texParameteri(D,a.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(a.texParameteri(D,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(D,a.TEXTURE_COMPARE_FUNC,F[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===mn||M.minFilter!==il&&M.minFilter!==Jr||M.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");a.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Re(D,M){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",I));const he=M.source;let me=x.get(he);me===void 0&&(me={},x.set(he,me));const ce=fe(M);if(ce!==D.__cacheKey){me[ce]===void 0&&(me[ce]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,X=!0),me[ce].usedTimes++;const $e=me[D.__cacheKey];$e!==void 0&&(me[D.__cacheKey].usedTimes--,$e.usedTimes===0&&w(M)),D.__cacheKey=ce,D.__webglTexture=me[ce].texture}return X}function He(D,M,X){return Math.floor(Math.floor(D/X)/M)}function qe(D,M,X,he){const ce=D.updateRanges;if(ce.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,M.width,M.height,X,he,M.data);else{ce.sort((Se,Ne)=>Se.start-Ne.start);let $e=0;for(let Se=1;Se<ce.length;Se++){const Ne=ce[$e],Ge=ce[Se],je=Ne.start+Ne.count,be=He(Ge.start,M.width,4),lt=He(Ne.start,M.width,4);Ge.start<=je+1&&be===lt&&He(Ge.start+Ge.count-1,M.width,4)===be?Ne.count=Math.max(Ne.count,Ge.start+Ge.count-Ne.start):(++$e,ce[$e]=Ge)}ce.length=$e+1;const Ae=a.getParameter(a.UNPACK_ROW_LENGTH),Be=a.getParameter(a.UNPACK_SKIP_PIXELS),nt=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,M.width);for(let Se=0,Ne=ce.length;Se<Ne;Se++){const Ge=ce[Se],je=Math.floor(Ge.start/4),be=Math.ceil(Ge.count/4),lt=je%M.width,H=Math.floor(je/M.width),Le=be,Ee=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,lt),a.pixelStorei(a.UNPACK_SKIP_ROWS,H),n.texSubImage2D(a.TEXTURE_2D,0,lt,H,Le,Ee,X,he,M.data)}D.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ae),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Be),a.pixelStorei(a.UNPACK_SKIP_ROWS,nt)}}function te(D,M,X){let he=a.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=a.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=a.TEXTURE_3D);const me=Re(D,M),ce=M.source;n.bindTexture(he,D.__webglTexture,a.TEXTURE0+X);const $e=r.get(ce);if(ce.version!==$e.__version||me===!0){n.activeTexture(a.TEXTURE0+X);const Ae=Tt.getPrimaries(Tt.workingColorSpace),Be=M.colorSpace===wr?null:Tt.getPrimaries(M.colorSpace),nt=M.colorSpace===wr||Ae===Be?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Se=C(M.image,!1,o.maxTextureSize);Se=St(M,Se);const Ne=c.convert(M.format,M.colorSpace),Ge=c.convert(M.type);let je=R(M.internalFormat,Ne,Ge,M.colorSpace,M.isVideoTexture);ae(he,M);let be;const lt=M.mipmaps,H=M.isVideoTexture!==!0,Le=$e.__version===void 0||me===!0,Ee=ce.dataReady,Ie=L(M,Se);if(M.isDepthTexture)je=b(M.format===es,M.type),Le&&(H?n.texStorage2D(a.TEXTURE_2D,1,je,Se.width,Se.height):n.texImage2D(a.TEXTURE_2D,0,je,Se.width,Se.height,0,Ne,Ge,null));else if(M.isDataTexture)if(lt.length>0){H&&Le&&n.texStorage2D(a.TEXTURE_2D,Ie,je,lt[0].width,lt[0].height);for(let xe=0,pe=lt.length;xe<pe;xe++)be=lt[xe],H?Ee&&n.texSubImage2D(a.TEXTURE_2D,xe,0,0,be.width,be.height,Ne,Ge,be.data):n.texImage2D(a.TEXTURE_2D,xe,je,be.width,be.height,0,Ne,Ge,be.data);M.generateMipmaps=!1}else H?(Le&&n.texStorage2D(a.TEXTURE_2D,Ie,je,Se.width,Se.height),Ee&&qe(M,Se,Ne,Ge)):n.texImage2D(a.TEXTURE_2D,0,je,Se.width,Se.height,0,Ne,Ge,Se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&Le&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ie,je,lt[0].width,lt[0].height,Se.depth);for(let xe=0,pe=lt.length;xe<pe;xe++)if(be=lt[xe],M.format!==_i)if(Ne!==null)if(H){if(Ee)if(M.layerUpdates.size>0){const Pe=Sm(be.width,be.height,M.format,M.type);for(const it of M.layerUpdates){const Lt=be.data.subarray(it*Pe/be.data.BYTES_PER_ELEMENT,(it+1)*Pe/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,it,be.width,be.height,1,Ne,Lt)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,be.width,be.height,Se.depth,Ne,be.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,xe,je,be.width,be.height,Se.depth,0,be.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ee&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,be.width,be.height,Se.depth,Ne,Ge,be.data):n.texImage3D(a.TEXTURE_2D_ARRAY,xe,je,be.width,be.height,Se.depth,0,Ne,Ge,be.data)}else{H&&Le&&n.texStorage2D(a.TEXTURE_2D,Ie,je,lt[0].width,lt[0].height);for(let xe=0,pe=lt.length;xe<pe;xe++)be=lt[xe],M.format!==_i?Ne!==null?H?Ee&&n.compressedTexSubImage2D(a.TEXTURE_2D,xe,0,0,be.width,be.height,Ne,be.data):n.compressedTexImage2D(a.TEXTURE_2D,xe,je,be.width,be.height,0,be.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ee&&n.texSubImage2D(a.TEXTURE_2D,xe,0,0,be.width,be.height,Ne,Ge,be.data):n.texImage2D(a.TEXTURE_2D,xe,je,be.width,be.height,0,Ne,Ge,be.data)}else if(M.isDataArrayTexture)if(H){if(Le&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ie,je,Se.width,Se.height,Se.depth),Ee)if(M.layerUpdates.size>0){const xe=Sm(Se.width,Se.height,M.format,M.type);for(const pe of M.layerUpdates){const Pe=Se.data.subarray(pe*xe/Se.data.BYTES_PER_ELEMENT,(pe+1)*xe/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,Ne,Ge,Pe)}M.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ne,Ge,Se.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,je,Se.width,Se.height,Se.depth,0,Ne,Ge,Se.data);else if(M.isData3DTexture)H?(Le&&n.texStorage3D(a.TEXTURE_3D,Ie,je,Se.width,Se.height,Se.depth),Ee&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ne,Ge,Se.data)):n.texImage3D(a.TEXTURE_3D,0,je,Se.width,Se.height,Se.depth,0,Ne,Ge,Se.data);else if(M.isFramebufferTexture){if(Le)if(H)n.texStorage2D(a.TEXTURE_2D,Ie,je,Se.width,Se.height);else{let xe=Se.width,pe=Se.height;for(let Pe=0;Pe<Ie;Pe++)n.texImage2D(a.TEXTURE_2D,Pe,je,xe,pe,0,Ne,Ge,null),xe>>=1,pe>>=1}}else if(lt.length>0){if(H&&Le){const xe=Xe(lt[0]);n.texStorage2D(a.TEXTURE_2D,Ie,je,xe.width,xe.height)}for(let xe=0,pe=lt.length;xe<pe;xe++)be=lt[xe],H?Ee&&n.texSubImage2D(a.TEXTURE_2D,xe,0,0,Ne,Ge,be):n.texImage2D(a.TEXTURE_2D,xe,je,Ne,Ge,be);M.generateMipmaps=!1}else if(H){if(Le){const xe=Xe(Se);n.texStorage2D(a.TEXTURE_2D,Ie,je,xe.width,xe.height)}Ee&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Ne,Ge,Se)}else n.texImage2D(a.TEXTURE_2D,0,je,Ne,Ge,Se);y(M)&&_(he),$e.__version=ce.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ue(D,M,X){if(M.image.length!==6)return;const he=Re(D,M),me=M.source;n.bindTexture(a.TEXTURE_CUBE_MAP,D.__webglTexture,a.TEXTURE0+X);const ce=r.get(me);if(me.version!==ce.__version||he===!0){n.activeTexture(a.TEXTURE0+X);const $e=Tt.getPrimaries(Tt.workingColorSpace),Ae=M.colorSpace===wr?null:Tt.getPrimaries(M.colorSpace),Be=M.colorSpace===wr||$e===Ae?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const nt=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,Ne=[];for(let pe=0;pe<6;pe++)!nt&&!Se?Ne[pe]=C(M.image[pe],!0,o.maxCubemapSize):Ne[pe]=Se?M.image[pe].image:M.image[pe],Ne[pe]=St(M,Ne[pe]);const Ge=Ne[0],je=c.convert(M.format,M.colorSpace),be=c.convert(M.type),lt=R(M.internalFormat,je,be,M.colorSpace),H=M.isVideoTexture!==!0,Le=ce.__version===void 0||he===!0,Ee=me.dataReady;let Ie=L(M,Ge);ae(a.TEXTURE_CUBE_MAP,M);let xe;if(nt){H&&Le&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,lt,Ge.width,Ge.height);for(let pe=0;pe<6;pe++){xe=Ne[pe].mipmaps;for(let Pe=0;Pe<xe.length;Pe++){const it=xe[Pe];M.format!==_i?je!==null?H?Ee&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,0,0,it.width,it.height,je,it.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,lt,it.width,it.height,0,it.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ee&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,0,0,it.width,it.height,je,be,it.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,lt,it.width,it.height,0,je,be,it.data)}}}else{if(xe=M.mipmaps,H&&Le){xe.length>0&&Ie++;const pe=Xe(Ne[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,lt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){H?Ee&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ne[pe].width,Ne[pe].height,je,be,Ne[pe].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,Ne[pe].width,Ne[pe].height,0,je,be,Ne[pe].data);for(let Pe=0;Pe<xe.length;Pe++){const Lt=xe[Pe].image[pe].image;H?Ee&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,0,0,Lt.width,Lt.height,je,be,Lt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,lt,Lt.width,Lt.height,0,je,be,Lt.data)}}else{H?Ee&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,je,be,Ne[pe]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,je,be,Ne[pe]);for(let Pe=0;Pe<xe.length;Pe++){const it=xe[Pe];H?Ee&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,0,0,je,be,it.image[pe]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,lt,je,be,it.image[pe])}}}y(M)&&_(a.TEXTURE_CUBE_MAP),ce.__version=me.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ve(D,M,X,he,me,ce){const $e=c.convert(X.format,X.colorSpace),Ae=c.convert(X.type),Be=R(X.internalFormat,$e,Ae,X.colorSpace),nt=r.get(M),Se=r.get(X);if(Se.__renderTarget=M,!nt.__hasExternalTextures){const Ne=Math.max(1,M.width>>ce),Ge=Math.max(1,M.height>>ce);me===a.TEXTURE_3D||me===a.TEXTURE_2D_ARRAY?n.texImage3D(me,ce,Be,Ne,Ge,M.depth,0,$e,Ae,null):n.texImage2D(me,ce,Be,Ne,Ge,0,$e,Ae,null)}n.bindFramebuffer(a.FRAMEBUFFER,D),Vt(M)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,me,Se.__webglTexture,0,z(M)):(me===a.TEXTURE_2D||me>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,he,me,Se.__webglTexture,ce),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Me(D,M,X){if(a.bindRenderbuffer(a.RENDERBUFFER,D),M.depthBuffer){const he=M.depthTexture,me=he&&he.isDepthTexture?he.type:null,ce=b(M.stencilBuffer,me),$e=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Vt(M)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,z(M),ce,M.width,M.height):X?a.renderbufferStorageMultisample(a.RENDERBUFFER,z(M),ce,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,ce,M.width,M.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,$e,a.RENDERBUFFER,D)}else{const he=M.textures;for(let me=0;me<he.length;me++){const ce=he[me],$e=c.convert(ce.format,ce.colorSpace),Ae=c.convert(ce.type),Be=R(ce.internalFormat,$e,Ae,ce.colorSpace);Vt(M)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,z(M),Be,M.width,M.height):X?a.renderbufferStorageMultisample(a.RENDERBUFFER,z(M),Be,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,Be,M.width,M.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Te(D,M,X){const he=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(M.depthTexture);if(me.__renderTarget=M,(!me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he){if(me.__webglInit===void 0&&(me.__webglInit=!0,M.depthTexture.addEventListener("dispose",I)),me.__webglTexture===void 0){me.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,me.__webglTexture),ae(a.TEXTURE_CUBE_MAP,M.depthTexture);const nt=c.convert(M.depthTexture.format),Se=c.convert(M.depthTexture.type);let Ne;M.depthTexture.format===Zi?Ne=a.DEPTH_COMPONENT24:M.depthTexture.format===es&&(Ne=a.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Ne,M.width,M.height,0,nt,Se,null)}}else le(M.depthTexture,0);const ce=me.__webglTexture,$e=z(M),Ae=he?a.TEXTURE_CUBE_MAP_POSITIVE_X+X:a.TEXTURE_2D,Be=M.depthTexture.format===es?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(M.depthTexture.format===Zi)Vt(M)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Be,Ae,ce,0,$e):a.framebufferTexture2D(a.FRAMEBUFFER,Be,Ae,ce,0);else if(M.depthTexture.format===es)Vt(M)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Be,Ae,ce,0,$e):a.framebufferTexture2D(a.FRAMEBUFFER,Be,Ae,ce,0);else throw new Error("Unknown depthTexture format")}function ct(D){const M=r.get(D),X=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",me)};he.addEventListener("dispose",me),M.__depthDisposeCallback=me}M.__boundDepthTexture=he}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(X)for(let he=0;he<6;he++)Te(M.__webglFramebuffer[he],D,he);else{const he=D.texture.mipmaps;he&&he.length>0?Te(M.__webglFramebuffer[0],D,0):Te(M.__webglFramebuffer,D,0)}else if(X){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=a.createRenderbuffer(),Me(M.__webglDepthbuffer[he],D,!1);else{const me=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[he];a.bindRenderbuffer(a.RENDERBUFFER,ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,ce)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=a.createRenderbuffer(),Me(M.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,ce)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function Dt(D,M,X){const he=r.get(D);M!==void 0&&ve(he.__webglFramebuffer,D,D.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),X!==void 0&&ct(D)}function ot(D){const M=D.texture,X=r.get(D),he=r.get(M);D.addEventListener("dispose",O);const me=D.textures,ce=D.isWebGLCubeRenderTarget===!0,$e=me.length>1;if($e||(he.__webglTexture===void 0&&(he.__webglTexture=a.createTexture()),he.__version=M.version,u.memory.textures++),ce){X.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[Ae]=[];for(let Be=0;Be<M.mipmaps.length;Be++)X.__webglFramebuffer[Ae][Be]=a.createFramebuffer()}else X.__webglFramebuffer[Ae]=a.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)X.__webglFramebuffer[Ae]=a.createFramebuffer()}else X.__webglFramebuffer=a.createFramebuffer();if($e)for(let Ae=0,Be=me.length;Ae<Be;Ae++){const nt=r.get(me[Ae]);nt.__webglTexture===void 0&&(nt.__webglTexture=a.createTexture(),u.memory.textures++)}if(D.samples>0&&Vt(D)===!1){X.__webglMultisampledFramebuffer=a.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Ae=0;Ae<me.length;Ae++){const Be=me[Ae];X.__webglColorRenderbuffer[Ae]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,X.__webglColorRenderbuffer[Ae]);const nt=c.convert(Be.format,Be.colorSpace),Se=c.convert(Be.type),Ne=R(Be.internalFormat,nt,Se,Be.colorSpace,D.isXRRenderTarget===!0),Ge=z(D);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ge,Ne,D.width,D.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.RENDERBUFFER,X.__webglColorRenderbuffer[Ae])}a.bindRenderbuffer(a.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=a.createRenderbuffer(),Me(X.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ce){n.bindTexture(a.TEXTURE_CUBE_MAP,he.__webglTexture),ae(a.TEXTURE_CUBE_MAP,M);for(let Ae=0;Ae<6;Ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let Be=0;Be<M.mipmaps.length;Be++)ve(X.__webglFramebuffer[Ae][Be],D,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Be);else ve(X.__webglFramebuffer[Ae],D,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(M)&&_(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if($e){for(let Ae=0,Be=me.length;Ae<Be;Ae++){const nt=me[Ae],Se=r.get(nt);let Ne=a.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ne=D.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ne,Se.__webglTexture),ae(Ne,nt),ve(X.__webglFramebuffer,D,nt,a.COLOR_ATTACHMENT0+Ae,Ne,0),y(nt)&&_(Ne)}n.unbindTexture()}else{let Ae=a.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ae,he.__webglTexture),ae(Ae,M),M.mipmaps&&M.mipmaps.length>0)for(let Be=0;Be<M.mipmaps.length;Be++)ve(X.__webglFramebuffer[Be],D,M,a.COLOR_ATTACHMENT0,Ae,Be);else ve(X.__webglFramebuffer,D,M,a.COLOR_ATTACHMENT0,Ae,0);y(M)&&_(Ae),n.unbindTexture()}D.depthBuffer&&ct(D)}function yt(D){const M=D.textures;for(let X=0,he=M.length;X<he;X++){const me=M[X];if(y(me)){const ce=N(D),$e=r.get(me).__webglTexture;n.bindTexture(ce,$e),_(ce),n.unbindTexture()}}}const Pt=[],ut=[];function zt(D){if(D.samples>0){if(Vt(D)===!1){const M=D.textures,X=D.width,he=D.height;let me=a.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,$e=r.get(D),Ae=M.length>1;if(Ae)for(let nt=0;nt<M.length;nt++)n.bindFramebuffer(a.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,$e.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Be=D.texture.mipmaps;Be&&Be.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let nt=0;nt<M.length;nt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(me|=a.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(me|=a.STENCIL_BUFFER_BIT)),Ae){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,$e.__webglColorRenderbuffer[nt]);const Se=r.get(M[nt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Se,0)}a.blitFramebuffer(0,0,X,he,0,0,X,he,me,a.NEAREST),p===!0&&(Pt.length=0,ut.length=0,Pt.push(a.COLOR_ATTACHMENT0+nt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Pt.push(ce),ut.push(ce),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ut)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ae)for(let nt=0;nt<M.length;nt++){n.bindFramebuffer(a.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.RENDERBUFFER,$e.__webglColorRenderbuffer[nt]);const Se=r.get(M[nt]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,$e.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.TEXTURE_2D,Se,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const M=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[M])}}}function z(D){return Math.min(o.maxSamples,D.samples)}function Vt(D){const M=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function gt(D){const M=u.render.frame;v.get(D)!==M&&(v.set(D,M),D.update())}function St(D,M){const X=D.colorSpace,he=D.format,me=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==Ws&&X!==wr&&(Tt.getTransfer(X)===It?(he!==_i||me!==qn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",X)),M}function Xe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=ee,this.setTexture2D=le,this.setTexture2DArray=oe,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=Dt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function r1(a,e){function n(r,o=wr){let c;const u=Tt.getTransfer(o);if(r===qn)return a.UNSIGNED_BYTE;if(r===id)return a.UNSIGNED_SHORT_4_4_4_4;if(r===rd)return a.UNSIGNED_SHORT_5_5_5_1;if(r===ig)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===rg)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===tg)return a.BYTE;if(r===ng)return a.SHORT;if(r===Va)return a.UNSIGNED_SHORT;if(r===nd)return a.INT;if(r===Pi)return a.UNSIGNED_INT;if(r===Ai)return a.FLOAT;if(r===Ki)return a.HALF_FLOAT;if(r===sg)return a.ALPHA;if(r===ag)return a.RGB;if(r===_i)return a.RGBA;if(r===Zi)return a.DEPTH_COMPONENT;if(r===es)return a.DEPTH_STENCIL;if(r===og)return a.RED;if(r===sd)return a.RED_INTEGER;if(r===Gs)return a.RG;if(r===ad)return a.RG_INTEGER;if(r===od)return a.RGBA_INTEGER;if(r===Cl||r===Rl||r===bl||r===Pl)if(u===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Cl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Rl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Cl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Rl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vf||r===xf||r===yf||r===Sf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===vf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mf||r===Ef||r===wf||r===Tf||r===Af||r===Cf||r===Rf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Mf||r===Ef)return u===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===wf)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Tf)return c.COMPRESSED_R11_EAC;if(r===Af)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Cf)return c.COMPRESSED_RG11_EAC;if(r===Rf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===bf||r===Pf||r===Nf||r===Df||r===Lf||r===If||r===Uf||r===Ff||r===Of||r===kf||r===Bf||r===zf||r===Vf||r===Hf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===bf)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pf)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nf)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Df)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lf)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===If)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uf)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ff)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Of)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kf)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bf)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zf)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vf)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hf)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gf||r===Wf||r===Xf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Gf)return u===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jf||r===Yf||r===qf||r===$f)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===jf)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Yf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$f)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ha?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const s1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class o1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Sg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Di({vertexShader:s1,fragmentShader:a1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $n(new kl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l1 extends js{constructor(e,n){super();const r=this;let o=null,c=1,u=null,d="local-floor",p=1,m=null,v=null,g=null,x=null,S=null,T=null;const C=typeof XRWebGLBinding<"u",y=new o1,_={},N=n.getContextAttributes();let R=null,b=null;const L=[],I=[],O=new xt;let W=null;const w=new Yn;w.viewport=new qt;const P=new Yn;P.viewport=new qt;const V=[w,P],ee=new vx;let J=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=L[te];return ue===void 0&&(ue=new ju,L[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=L[te];return ue===void 0&&(ue=new ju,L[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=L[te];return ue===void 0&&(ue=new ju,L[te]=ue),ue.getHandSpace()};function le(te){const ue=I.indexOf(te.inputSource);if(ue===-1)return;const ve=L[ue];ve!==void 0&&(ve.update(te.inputSource,te.frame,m||u),ve.dispatchEvent({type:te.type,data:te.inputSource}))}function oe(){o.removeEventListener("select",le),o.removeEventListener("selectstart",le),o.removeEventListener("selectend",le),o.removeEventListener("squeeze",le),o.removeEventListener("squeezestart",le),o.removeEventListener("squeezeend",le),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",q);for(let te=0;te<L.length;te++){const ue=I[te];ue!==null&&(I[te]=null,L[te].disconnect(ue))}J=null,fe=null,y.reset();for(const te in _)delete _[te];e.setRenderTarget(R),S=null,x=null,g=null,o=null,b=null,qe.stop(),r.isPresenting=!1,e.setPixelRatio(W),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(te){m=te},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",le),o.addEventListener("selectstart",le),o.addEventListener("selectend",le),o.addEventListener("squeeze",le),o.addEventListener("squeezestart",le),o.addEventListener("squeezeend",le),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",q),N.xrCompatible!==!0&&await n.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Me=null,Te=null;N.depth&&(Te=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=N.stencil?es:Zi,Me=N.stencil?Ha:Pi);const ct={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(ct),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),b=new bi(x.textureWidth,x.textureHeight,{format:_i,type:qn,depthTexture:new Wa(x.textureWidth,x.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ve={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,ve),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new bi(S.framebufferWidth,S.framebufferHeight,{format:_i,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),qe.setContext(o),qe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(te){for(let ue=0;ue<te.removed.length;ue++){const ve=te.removed[ue],Me=I.indexOf(ve);Me>=0&&(I[Me]=null,L[Me].disconnect(ve))}for(let ue=0;ue<te.added.length;ue++){const ve=te.added[ue];let Me=I.indexOf(ve);if(Me===-1){for(let ct=0;ct<L.length;ct++)if(ct>=I.length){I.push(ve),Me=ct;break}else if(I[ct]===null){I[ct]=ve,Me=ct;break}if(Me===-1)break}const Te=L[Me];Te&&Te.connect(ve)}}const Y=new Z,de=new Z;function re(te,ue,ve){Y.setFromMatrixPosition(ue.matrixWorld),de.setFromMatrixPosition(ve.matrixWorld);const Me=Y.distanceTo(de),Te=ue.projectionMatrix.elements,ct=ve.projectionMatrix.elements,Dt=Te[14]/(Te[10]-1),ot=Te[14]/(Te[10]+1),yt=(Te[9]+1)/Te[5],Pt=(Te[9]-1)/Te[5],ut=(Te[8]-1)/Te[0],zt=(ct[8]+1)/ct[0],z=Dt*ut,Vt=Dt*zt,gt=Me/(-ut+zt),St=gt*-ut;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(St),te.translateZ(gt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Te[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Xe=Dt+gt,D=ot+gt,M=z-St,X=Vt+(Me-St),he=yt*ot/D*Xe,me=Pt*ot/D*Xe;te.projectionMatrix.makePerspective(M,X,he,me,Xe,D),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function F(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let ue=te.near,ve=te.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),ee.near=P.near=w.near=ue,ee.far=P.far=w.far=ve,(J!==ee.near||fe!==ee.far)&&(o.updateRenderState({depthNear:ee.near,depthFar:ee.far}),J=ee.near,fe=ee.far),ee.layers.mask=te.layers.mask|6,w.layers.mask=ee.layers.mask&3,P.layers.mask=ee.layers.mask&5;const Me=te.parent,Te=ee.cameras;F(ee,Me);for(let ct=0;ct<Te.length;ct++)F(Te[ct],Me);Te.length===2?re(ee,w,P):ee.projectionMatrix.copy(w.projectionMatrix),ae(te,ee,Me)};function ae(te,ue,ve){ve===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(ve.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Kf*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(te){p=te,x!==null&&(x.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ee)},this.getCameraTexture=function(te){return _[te]};let Re=null;function He(te,ue){if(v=ue.getViewerPose(m||u),T=ue,v!==null){const ve=v.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let Me=!1;ve.length!==ee.cameras.length&&(ee.cameras.length=0,Me=!0);for(let ot=0;ot<ve.length;ot++){const yt=ve[ot];let Pt=null;if(S!==null)Pt=S.getViewport(yt);else{const zt=g.getViewSubImage(x,yt);Pt=zt.viewport,ot===0&&(e.setRenderTargetTextures(b,zt.colorTexture,zt.depthStencilTexture),e.setRenderTarget(b))}let ut=V[ot];ut===void 0&&(ut=new Yn,ut.layers.enable(ot),ut.viewport=new qt,V[ot]=ut),ut.matrix.fromArray(yt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(yt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),ot===0&&(ee.matrix.copy(ut.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Me===!0&&ee.cameras.push(ut)}const Te=o.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){g=r.getBinding();const ot=g.getDepthInformation(ve[0]);ot&&ot.isValid&&ot.texture&&y.init(ot,o.renderState)}if(Te&&Te.includes("camera-access")&&C){e.state.unbindTexture(),g=r.getBinding();for(let ot=0;ot<ve.length;ot++){const yt=ve[ot].camera;if(yt){let Pt=_[yt];Pt||(Pt=new Sg,_[yt]=Pt);const ut=g.getCameraImage(yt);Pt.sourceTexture=ut}}}}for(let ve=0;ve<L.length;ve++){const Me=I[ve],Te=L[ve];Me!==null&&Te!==void 0&&Te.update(Me,ue,m||u)}Re&&Re(te,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),T=null}const qe=new wg;qe.setAnimationLoop(He),this.setAnimationLoop=function(te){Re=te},this.dispose=function(){}}}const $r=new Ni,c1=new jt;function u1(a,e){function n(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,gg(a)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,N,R,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),g(y,_)):_.isMeshPhongMaterial?(c(y,_),v(y,_)):_.isMeshStandardMaterial?(c(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,b)):_.isMeshMatcapMaterial?(c(y,_),T(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),C(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(u(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?p(y,_,N,R):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,n(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===kn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,n(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===kn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,n(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,n(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const N=e.get(_),R=N.envMap,b=N.envMapRotation;R&&(y.envMap.value=R,$r.copy(b),$r.x*=-1,$r.y*=-1,$r.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),y.envMapRotation.value.setFromMatrix4(c1.makeRotationFromEuler($r)),y.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,y.aoMapTransform))}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,N,R){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*N,y.scale.value=R*.5,_.map&&(y.map.value=_.map,n(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,N){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function C(y,_){const N=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function f1(a,e,n,r){let o={},c={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,R){const b=R.program;r.uniformBlockBinding(N,b)}function m(N,R){let b=o[N.id];b===void 0&&(T(N),b=v(N),o[N.id]=b,N.addEventListener("dispose",y));const L=R.program;r.updateUBOMapping(N,L);const I=e.render.frame;c[N.id]!==I&&(x(N),c[N.id]=I)}function v(N){const R=g();N.__bindingPointIndex=R;const b=a.createBuffer(),L=N.__size,I=N.usage;return a.bindBuffer(a.UNIFORM_BUFFER,b),a.bufferData(a.UNIFORM_BUFFER,L,I),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,R,b),b}function g(){for(let N=0;N<d;N++)if(u.indexOf(N)===-1)return u.push(N),N;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const R=o[N.id],b=N.uniforms,L=N.__cache;a.bindBuffer(a.UNIFORM_BUFFER,R);for(let I=0,O=b.length;I<O;I++){const W=Array.isArray(b[I])?b[I]:[b[I]];for(let w=0,P=W.length;w<P;w++){const V=W[w];if(S(V,I,w,L)===!0){const ee=V.__offset,J=Array.isArray(V.value)?V.value:[V.value];let fe=0;for(let le=0;le<J.length;le++){const oe=J[le],q=C(oe);typeof oe=="number"||typeof oe=="boolean"?(V.__data[0]=oe,a.bufferSubData(a.UNIFORM_BUFFER,ee+fe,V.__data)):oe.isMatrix3?(V.__data[0]=oe.elements[0],V.__data[1]=oe.elements[1],V.__data[2]=oe.elements[2],V.__data[3]=0,V.__data[4]=oe.elements[3],V.__data[5]=oe.elements[4],V.__data[6]=oe.elements[5],V.__data[7]=0,V.__data[8]=oe.elements[6],V.__data[9]=oe.elements[7],V.__data[10]=oe.elements[8],V.__data[11]=0):(oe.toArray(V.__data,fe),fe+=q.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ee,V.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(N,R,b,L){const I=N.value,O=R+"_"+b;if(L[O]===void 0)return typeof I=="number"||typeof I=="boolean"?L[O]=I:L[O]=I.clone(),!0;{const W=L[O];if(typeof I=="number"||typeof I=="boolean"){if(W!==I)return L[O]=I,!0}else if(W.equals(I)===!1)return W.copy(I),!0}return!1}function T(N){const R=N.uniforms;let b=0;const L=16;for(let O=0,W=R.length;O<W;O++){const w=Array.isArray(R[O])?R[O]:[R[O]];for(let P=0,V=w.length;P<V;P++){const ee=w[P],J=Array.isArray(ee.value)?ee.value:[ee.value];for(let fe=0,le=J.length;fe<le;fe++){const oe=J[fe],q=C(oe),Y=b%L,de=Y%q.boundary,re=Y+de;b+=de,re!==0&&L-re<q.storage&&(b+=L-re),ee.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=b,b+=q.storage}}}const I=b%L;return I>0&&(b+=L-I),N.__size=b,N.__cache={},this}function C(N){const R={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(R.boundary=4,R.storage=4):N.isVector2?(R.boundary=8,R.storage=8):N.isVector3||N.isColor?(R.boundary=16,R.storage=12):N.isVector4?(R.boundary=16,R.storage=16):N.isMatrix3?(R.boundary=48,R.storage=48):N.isMatrix4?(R.boundary=64,R.storage=64):N.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",N),R}function y(N){const R=N.target;R.removeEventListener("dispose",y);const b=u.indexOf(R.__bindingPointIndex);u.splice(b,1),a.deleteBuffer(o[R.id]),delete o[R.id],delete c[R.id]}function _(){for(const N in o)a.deleteBuffer(o[N]);u=[],o={},c={}}return{bind:p,update:m,dispose:_}}const d1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function h1(){return wi===null&&(wi=new sx(d1,16,16,Gs,Ki),wi.name="DFG_LUT",wi.minFilter=En,wi.magFilter=En,wi.wrapS=Yi,wi.wrapT=Yi,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class p1{constructor(e={}){const{canvas:n=Dv(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:S=qn}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const C=S,y=new Set([od,ad,sd]),_=new Set([qn,Pi,Va,Ha,id,rd]),N=new Uint32Array(4),R=new Int32Array(4);let b=null,L=null;const I=[],O=[];let W=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let P=!1;this._outputColorSpace=ri;let V=0,ee=0,J=null,fe=-1,le=null;const oe=new qt,q=new qt;let Y=null;const de=new mt(0);let re=0,F=n.width,ae=n.height,Re=1,He=null,qe=null;const te=new qt(0,0,F,ae),ue=new qt(0,0,F,ae);let ve=!1;const Me=new hd;let Te=!1,ct=!1;const Dt=new jt,ot=new Z,yt=new qt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function zt(){return J===null?Re:1}let z=r;function Vt(A,j){return n.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${td}`),n.addEventListener("webglcontextlost",it,!1),n.addEventListener("webglcontextrestored",Lt,!1),n.addEventListener("webglcontextcreationerror",Mt,!1),z===null){const j="webgl2";if(z=Vt(j,A),z===null)throw Vt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Rt("WebGLRenderer: "+A.message),A}let gt,St,Xe,D,M,X,he,me,ce,$e,Ae,Be,nt,Se,Ne,Ge,je,be,lt,H,Le,Ee,Ie,xe;function pe(){gt=new hM(z),gt.init(),Ee=new r1(z,gt),St=new rM(z,gt,e,Ee),Xe=new n1(z,gt),St.reversedDepthBuffer&&x&&Xe.buffers.depth.setReversed(!0),D=new gM(z),M=new VE,X=new i1(z,gt,Xe,M,St,Ee,D),he=new aM(w),me=new dM(w),ce=new yx(z),Ie=new nM(z,ce),$e=new pM(z,ce,D,Ie),Ae=new vM(z,$e,ce,D),lt=new _M(z,St,X),Ge=new sM(M),Be=new zE(w,he,me,gt,St,Ie,Ge),nt=new u1(w,M),Se=new GE,Ne=new $E(gt),be=new tM(w,he,me,Xe,Ae,T,p),je=new e1(w,Ae,St),xe=new f1(z,D,St,Xe),H=new iM(z,gt,D),Le=new mM(z,gt,D),D.programs=Be.programs,w.capabilities=St,w.extensions=gt,w.properties=M,w.renderLists=Se,w.shadowMap=je,w.state=Xe,w.info=D}pe(),C!==qn&&(W=new yM(C,n.width,n.height,o,c));const Pe=new l1(w,z);this.xr=Pe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(A){A!==void 0&&(Re=A,this.setSize(F,ae,!1))},this.getSize=function(A){return A.set(F,ae)},this.setSize=function(A,j,se=!0){if(Pe.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,ae=j,n.width=Math.floor(A*Re),n.height=Math.floor(j*Re),se===!0&&(n.style.width=A+"px",n.style.height=j+"px"),W!==null&&W.setSize(n.width,n.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(F*Re,ae*Re).floor()},this.setDrawingBufferSize=function(A,j,se){F=A,ae=j,Re=se,n.width=Math.floor(A*se),n.height=Math.floor(j*se),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(C===qn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}W.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(oe)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,j,se,ne){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,j,se,ne),Xe.viewport(oe.copy(te).multiplyScalar(Re).round())},this.getScissor=function(A){return A.copy(ue)},this.setScissor=function(A,j,se,ne){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,j,se,ne),Xe.scissor(q.copy(ue).multiplyScalar(Re).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(A){Xe.setScissorTest(ve=A)},this.setOpaqueSort=function(A){He=A},this.setTransparentSort=function(A){qe=A},this.getClearColor=function(A){return A.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,se=!0){let ne=0;if(A){let K=!1;if(J!==null){const De=J.texture.format;K=y.has(De)}if(K){const De=J.texture.type,Fe=_.has(De),Ce=be.getClearColor(),Ve=be.getClearAlpha(),ke=Ce.r,tt=Ce.g,Ze=Ce.b;Fe?(N[0]=ke,N[1]=tt,N[2]=Ze,N[3]=Ve,z.clearBufferuiv(z.COLOR,0,N)):(R[0]=ke,R[1]=tt,R[2]=Ze,R[3]=Ve,z.clearBufferiv(z.COLOR,0,R))}else ne|=z.COLOR_BUFFER_BIT}j&&(ne|=z.DEPTH_BUFFER_BIT),se&&(ne|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",it,!1),n.removeEventListener("webglcontextrestored",Lt,!1),n.removeEventListener("webglcontextcreationerror",Mt,!1),be.dispose(),Se.dispose(),Ne.dispose(),M.dispose(),he.dispose(),me.dispose(),Ae.dispose(),Ie.dispose(),xe.dispose(),Be.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Rr),Pe.removeEventListener("sessionend",br),ai.stop()};function it(A){A.preventDefault(),em("WebGLRenderer: Context Lost."),P=!0}function Lt(){em("WebGLRenderer: Context Restored."),P=!1;const A=D.autoReset,j=je.enabled,se=je.autoUpdate,ne=je.needsUpdate,K=je.type;pe(),D.autoReset=A,je.enabled=j,je.autoUpdate=se,je.needsUpdate=ne,je.type=K}function Mt(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function zn(A){const j=A.target;j.removeEventListener("dispose",zn),wn(j)}function wn(A){$s(A),M.remove(A)}function $s(A){const j=M.get(A).programs;j!==void 0&&(j.forEach(function(se){Be.releaseProgram(se)}),A.isShaderMaterial&&Be.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,se,ne,K,De){j===null&&(j=Pt);const Fe=K.isMesh&&K.matrixWorld.determinant()<0,Ce=Qa(A,j,se,ne,K);Xe.setMaterial(ne,Fe);let Ve=se.index,ke=1;if(ne.wireframe===!0){if(Ve=$e.getWireframeAttribute(se),Ve===void 0)return;ke=2}const tt=se.drawRange,Ze=se.attributes.position;let dt=tt.start*ke,Et=(tt.start+tt.count)*ke;De!==null&&(dt=Math.max(dt,De.start*ke),Et=Math.min(Et,(De.start+De.count)*ke)),Ve!==null?(dt=Math.max(dt,0),Et=Math.min(Et,Ve.count)):Ze!=null&&(dt=Math.max(dt,0),Et=Math.min(Et,Ze.count));const Ft=Et-dt;if(Ft<0||Ft===1/0)return;Ie.setup(K,ne,Ce,se,Ve);let Ut,At=H;if(Ve!==null&&(Ut=ce.get(Ve),At=Le,At.setIndex(Ut)),K.isMesh)ne.wireframe===!0?(Xe.setLineWidth(ne.wireframeLinewidth*zt()),At.setMode(z.LINES)):At.setMode(z.TRIANGLES);else if(K.isLine){let Qe=ne.linewidth;Qe===void 0&&(Qe=1),Xe.setLineWidth(Qe*zt()),K.isLineSegments?At.setMode(z.LINES):K.isLineLoop?At.setMode(z.LINE_LOOP):At.setMode(z.LINE_STRIP)}else K.isPoints?At.setMode(z.POINTS):K.isSprite&&At.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Ga("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))At.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Qe=K._multiDrawStarts,bt=K._multiDrawCounts,_t=K._multiDrawCount,gn=Ve?ce.get(Ve).bytesPerElement:1,vi=M.get(ne).currentProgram.getUniforms();for(let Qt=0;Qt<_t;Qt++)vi.setValue(z,"_gl_DrawID",Qt),At.render(Qe[Qt]/gn,bt[Qt])}else if(K.isInstancedMesh)At.renderInstances(dt,Ft,K.count);else if(se.isInstancedBufferGeometry){const Qe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,bt=Math.min(se.instanceCount,Qe);At.renderInstances(dt,Ft,bt)}else At.render(dt,Ft)};function Qi(A,j,se){A.transparent===!0&&A.side===ji&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,Pr(A,j,se),A.side=Ar,A.needsUpdate=!0,Pr(A,j,se),A.side=ji):Pr(A,j,se)}this.compile=function(A,j,se=null){se===null&&(se=A),L=Ne.get(se),L.init(j),O.push(L),se.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(L.pushLight(K),K.castShadow&&L.pushShadow(K))}),A!==se&&A.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(L.pushLight(K),K.castShadow&&L.pushShadow(K))}),L.setupLights();const ne=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const De=K.material;if(De)if(Array.isArray(De))for(let Fe=0;Fe<De.length;Fe++){const Ce=De[Fe];Qi(Ce,se,K),ne.add(Ce)}else Qi(De,se,K),ne.add(De)}),L=O.pop(),ne},this.compileAsync=function(A,j,se=null){const ne=this.compile(A,j,se);return new Promise(K=>{function De(){if(ne.forEach(function(Fe){M.get(Fe).currentProgram.isReady()&&ne.delete(Fe)}),ne.size===0){K(A);return}setTimeout(De,10)}gt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Ks=null;function Cr(A){Ks&&Ks(A)}function Rr(){ai.stop()}function br(){ai.start()}const ai=new wg;ai.setAnimationLoop(Cr),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(A){Ks=A,Pe.setAnimationLoop(A),A===null?ai.stop():ai.start()},Pe.addEventListener("sessionstart",Rr),Pe.addEventListener("sessionend",br),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const se=Pe.enabled===!0&&Pe.isPresenting===!0,ne=W!==null&&(J===null||se)&&W.begin(w,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(W===null||W.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(j),j=Pe.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,j,J),L=Ne.get(A,O.length),L.init(j),O.push(L),Dt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Me.setFromProjectionMatrix(Dt,Ci,j.reversedDepth),ct=this.localClippingEnabled,Te=Ge.init(this.clippingPlanes,ct),b=Se.get(A,I.length),b.init(),I.push(b),Pe.enabled===!0&&Pe.isPresenting===!0){const Fe=w.xr.getDepthSensingMesh();Fe!==null&&Zs(Fe,j,-1/0,w.sortObjects)}Zs(A,j,0,w.sortObjects),b.finish(),w.sortObjects===!0&&b.sort(He,qe),ut=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,ut&&be.addToRenderList(b,A),this.info.render.frame++,Te===!0&&Ge.beginShadows();const K=L.state.shadowsArray;if(je.render(K,A,j),Te===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&W.hasRenderPass())===!1){const Fe=b.opaque,Ce=b.transmissive;if(L.setupLights(),j.isArrayCamera){const Ve=j.cameras;if(Ce.length>0)for(let ke=0,tt=Ve.length;ke<tt;ke++){const Ze=Ve[ke];Ka(Fe,Ce,A,Ze)}ut&&be.render(A);for(let ke=0,tt=Ve.length;ke<tt;ke++){const Ze=Ve[ke];$a(b,A,Ze,Ze.viewport)}}else Ce.length>0&&Ka(Fe,Ce,A,j),ut&&be.render(A),$a(b,A,j)}J!==null&&ee===0&&(X.updateMultisampleRenderTarget(J),X.updateRenderTargetMipmap(J)),ne&&W.end(w),A.isScene===!0&&A.onAfterRender(w,A,j),Ie.resetDefaultState(),fe=-1,le=null,O.pop(),O.length>0?(L=O[O.length-1],Te===!0&&Ge.setGlobalState(w.clippingPlanes,L.state.camera)):L=null,I.pop(),I.length>0?b=I[I.length-1]:b=null};function Zs(A,j,se,ne){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Me.intersectsSprite(A)){ne&&yt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Dt);const Fe=Ae.update(A),Ce=A.material;Ce.visible&&b.push(A,Fe,Ce,se,yt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Me.intersectsObject(A))){const Fe=Ae.update(A),Ce=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),yt.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),yt.copy(Fe.boundingSphere.center)),yt.applyMatrix4(A.matrixWorld).applyMatrix4(Dt)),Array.isArray(Ce)){const Ve=Fe.groups;for(let ke=0,tt=Ve.length;ke<tt;ke++){const Ze=Ve[ke],dt=Ce[Ze.materialIndex];dt&&dt.visible&&b.push(A,Fe,dt,se,yt.z,Ze)}}else Ce.visible&&b.push(A,Fe,Ce,se,yt.z,null)}}const De=A.children;for(let Fe=0,Ce=De.length;Fe<Ce;Fe++)Zs(De[Fe],j,se,ne)}function $a(A,j,se,ne){const{opaque:K,transmissive:De,transparent:Fe}=A;L.setupLightsView(se),Te===!0&&Ge.setGlobalState(w.clippingPlanes,se),ne&&Xe.viewport(oe.copy(ne)),K.length>0&&Kn(K,j,se),De.length>0&&Kn(De,j,se),Fe.length>0&&Kn(Fe,j,se),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Ka(A,j,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ne.id]===void 0){const dt=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ne.id]=new bi(1,1,{generateMipmaps:!0,type:dt?Ki:qn,minFilter:Jr,samples:St.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const De=L.state.transmissionRenderTarget[ne.id],Fe=ne.viewport||oe;De.setSize(Fe.z*w.transmissionResolutionScale,Fe.w*w.transmissionResolutionScale);const Ce=w.getRenderTarget(),Ve=w.getActiveCubeFace(),ke=w.getActiveMipmapLevel();w.setRenderTarget(De),w.getClearColor(de),re=w.getClearAlpha(),re<1&&w.setClearColor(16777215,.5),w.clear(),ut&&be.render(se);const tt=w.toneMapping;w.toneMapping=Ri;const Ze=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),L.setupLightsView(ne),Te===!0&&Ge.setGlobalState(w.clippingPlanes,ne),Kn(A,se,ne),X.updateMultisampleRenderTarget(De),X.updateRenderTargetMipmap(De),gt.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Et=0,Ft=j.length;Et<Ft;Et++){const Ut=j[Et],{object:At,geometry:Qe,material:bt,group:_t}=Ut;if(bt.side===ji&&At.layers.test(ne.layers)){const gn=bt.side;bt.side=kn,bt.needsUpdate=!0,Qs(At,se,ne,Qe,bt,_t),bt.side=gn,bt.needsUpdate=!0,dt=!0}}dt===!0&&(X.updateMultisampleRenderTarget(De),X.updateRenderTargetMipmap(De))}w.setRenderTarget(Ce,Ve,ke),w.setClearColor(de,re),Ze!==void 0&&(ne.viewport=Ze),w.toneMapping=tt}function Kn(A,j,se){const ne=j.isScene===!0?j.overrideMaterial:null;for(let K=0,De=A.length;K<De;K++){const Fe=A[K],{object:Ce,geometry:Ve,group:ke}=Fe;let tt=Fe.material;tt.allowOverride===!0&&ne!==null&&(tt=ne),Ce.layers.test(se.layers)&&Qs(Ce,j,se,Ve,tt,ke)}}function Qs(A,j,se,ne,K,De){A.onBeforeRender(w,j,se,ne,K,De),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(w,j,se,ne,A,De),K.transparent===!0&&K.side===ji&&K.forceSinglePass===!1?(K.side=kn,K.needsUpdate=!0,w.renderBufferDirect(se,j,ne,K,A,De),K.side=Ar,K.needsUpdate=!0,w.renderBufferDirect(se,j,ne,K,A,De),K.side=ji):w.renderBufferDirect(se,j,ne,K,A,De),A.onAfterRender(w,j,se,ne,K,De)}function Pr(A,j,se){j.isScene!==!0&&(j=Pt);const ne=M.get(A),K=L.state.lights,De=L.state.shadowsArray,Fe=K.state.version,Ce=Be.getParameters(A,K.state,De,j,se),Ve=Be.getProgramCacheKey(Ce);let ke=ne.programs;ne.environment=A.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(A.isMeshStandardMaterial?me:he).get(A.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",zn),ke=new Map,ne.programs=ke);let tt=ke.get(Ve);if(tt!==void 0){if(ne.currentProgram===tt&&ne.lightsStateVersion===Fe)return Js(A,Ce),tt}else Ce.uniforms=Be.getUniforms(A),A.onBeforeCompile(Ce,w),tt=Be.acquireProgram(Ce,Ve),ke.set(Ve,tt),ne.uniforms=Ce.uniforms;const Ze=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Ge.uniform),Js(A,Ce),ne.needsLights=eo(A),ne.lightsStateVersion=Fe,ne.needsLights&&(Ze.ambientLightColor.value=K.state.ambient,Ze.lightProbe.value=K.state.probe,Ze.directionalLights.value=K.state.directional,Ze.directionalLightShadows.value=K.state.directionalShadow,Ze.spotLights.value=K.state.spot,Ze.spotLightShadows.value=K.state.spotShadow,Ze.rectAreaLights.value=K.state.rectArea,Ze.ltc_1.value=K.state.rectAreaLTC1,Ze.ltc_2.value=K.state.rectAreaLTC2,Ze.pointLights.value=K.state.point,Ze.pointLightShadows.value=K.state.pointShadow,Ze.hemisphereLights.value=K.state.hemi,Ze.directionalShadowMap.value=K.state.directionalShadowMap,Ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ze.spotShadowMap.value=K.state.spotShadowMap,Ze.spotLightMatrix.value=K.state.spotLightMatrix,Ze.spotLightMap.value=K.state.spotLightMap,Ze.pointShadowMap.value=K.state.pointShadowMap,Ze.pointShadowMatrix.value=K.state.pointShadowMatrix),ne.currentProgram=tt,ne.uniformsList=null,tt}function Za(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Nl.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Js(A,j){const se=M.get(A);se.outputColorSpace=j.outputColorSpace,se.batching=j.batching,se.batchingColor=j.batchingColor,se.instancing=j.instancing,se.instancingColor=j.instancingColor,se.instancingMorph=j.instancingMorph,se.skinning=j.skinning,se.morphTargets=j.morphTargets,se.morphNormals=j.morphNormals,se.morphColors=j.morphColors,se.morphTargetsCount=j.morphTargetsCount,se.numClippingPlanes=j.numClippingPlanes,se.numIntersection=j.numClipIntersection,se.vertexAlphas=j.vertexAlphas,se.vertexTangents=j.vertexTangents,se.toneMapping=j.toneMapping}function Qa(A,j,se,ne,K){j.isScene!==!0&&(j=Pt),X.resetTextureUnits();const De=j.fog,Fe=ne.isMeshStandardMaterial?j.environment:null,Ce=J===null?w.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ws,Ve=(ne.isMeshStandardMaterial?me:he).get(ne.envMap||Fe),ke=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,tt=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!se.morphAttributes.position,dt=!!se.morphAttributes.normal,Et=!!se.morphAttributes.color;let Ft=Ri;ne.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ft=w.toneMapping);const Ut=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,At=Ut!==void 0?Ut.length:0,Qe=M.get(ne),bt=L.state.lights;if(Te===!0&&(ct===!0||A!==le)){const rn=A===le&&ne.id===fe;Ge.setState(ne,A,rn)}let _t=!1;ne.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==bt.state.version||Qe.outputColorSpace!==Ce||K.isBatchedMesh&&Qe.batching===!1||!K.isBatchedMesh&&Qe.batching===!0||K.isBatchedMesh&&Qe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Qe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Qe.instancing===!1||!K.isInstancedMesh&&Qe.instancing===!0||K.isSkinnedMesh&&Qe.skinning===!1||!K.isSkinnedMesh&&Qe.skinning===!0||K.isInstancedMesh&&Qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Qe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Qe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Qe.instancingMorph===!1&&K.morphTexture!==null||Qe.envMap!==Ve||ne.fog===!0&&Qe.fog!==De||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ge.numPlanes||Qe.numIntersection!==Ge.numIntersection)||Qe.vertexAlphas!==ke||Qe.vertexTangents!==tt||Qe.morphTargets!==Ze||Qe.morphNormals!==dt||Qe.morphColors!==Et||Qe.toneMapping!==Ft||Qe.morphTargetsCount!==At)&&(_t=!0):(_t=!0,Qe.__version=ne.version);let gn=Qe.currentProgram;_t===!0&&(gn=Pr(ne,j,K));let vi=!1,Qt=!1,Nr=!1;const Nt=gn.getUniforms(),st=Qe.uniforms;if(Xe.useProgram(gn.program)&&(vi=!0,Qt=!0,Nr=!0),ne.id!==fe&&(fe=ne.id,Qt=!0),vi||le!==A){Xe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Nt.setValue(z,"projectionMatrix",A.projectionMatrix),Nt.setValue(z,"viewMatrix",A.matrixWorldInverse);const sn=Nt.map.cameraPosition;sn!==void 0&&sn.setValue(z,ot.setFromMatrixPosition(A.matrixWorld)),St.logarithmicDepthBuffer&&Nt.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Nt.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),le!==A&&(le=A,Qt=!0,Nr=!0)}if(Qe.needsLights&&(bt.state.directionalShadowMap.length>0&&Nt.setValue(z,"directionalShadowMap",bt.state.directionalShadowMap,X),bt.state.spotShadowMap.length>0&&Nt.setValue(z,"spotShadowMap",bt.state.spotShadowMap,X),bt.state.pointShadowMap.length>0&&Nt.setValue(z,"pointShadowMap",bt.state.pointShadowMap,X)),K.isSkinnedMesh){Nt.setOptional(z,K,"bindMatrix"),Nt.setOptional(z,K,"bindMatrixInverse");const rn=K.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Nt.setValue(z,"boneTexture",rn.boneTexture,X))}K.isBatchedMesh&&(Nt.setOptional(z,K,"batchingTexture"),Nt.setValue(z,"batchingTexture",K._matricesTexture,X),Nt.setOptional(z,K,"batchingIdTexture"),Nt.setValue(z,"batchingIdTexture",K._indirectTexture,X),Nt.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&Nt.setValue(z,"batchingColorTexture",K._colorsTexture,X));const Tn=se.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&lt.update(K,se,gn),(Qt||Qe.receiveShadow!==K.receiveShadow)&&(Qe.receiveShadow=K.receiveShadow,Nt.setValue(z,"receiveShadow",K.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(st.envMap.value=Ve,st.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&j.environment!==null&&(st.envMapIntensity.value=j.environmentIntensity),st.dfgLUT!==void 0&&(st.dfgLUT.value=h1()),Qt&&(Nt.setValue(z,"toneMappingExposure",w.toneMappingExposure),Qe.needsLights&&Ja(st,Nr),De&&ne.fog===!0&&nt.refreshFogUniforms(st,De),nt.refreshMaterialUniforms(st,ne,Re,ae,L.state.transmissionRenderTarget[A.id]),Nl.upload(z,Za(Qe),st,X)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Nl.upload(z,Za(Qe),st,X),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Nt.setValue(z,"center",K.center),Nt.setValue(z,"modelViewMatrix",K.modelViewMatrix),Nt.setValue(z,"normalMatrix",K.normalMatrix),Nt.setValue(z,"modelMatrix",K.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const rn=ne.uniformsGroups;for(let sn=0,ns=rn.length;sn<ns;sn++){const xi=rn[sn];xe.update(xi,gn),xe.bind(xi,gn)}}return gn}function Ja(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function eo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,j,se){const ne=M.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=j,M.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const se=M.get(A);se.__webglFramebuffer=j,se.__useDefaultFramebuffer=j===void 0};const Vl=z.createFramebuffer();this.setRenderTarget=function(A,j=0,se=0){J=A,V=j,ee=se;let ne=null,K=!1,De=!1;if(A){const Ce=M.get(A);if(Ce.__useDefaultFramebuffer!==void 0){Xe.bindFramebuffer(z.FRAMEBUFFER,Ce.__webglFramebuffer),oe.copy(A.viewport),q.copy(A.scissor),Y=A.scissorTest,Xe.viewport(oe),Xe.scissor(q),Xe.setScissorTest(Y),fe=-1;return}else if(Ce.__webglFramebuffer===void 0)X.setupRenderTarget(A);else if(Ce.__hasExternalTextures)X.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const tt=A.depthTexture;if(Ce.__boundDepthTexture!==tt){if(tt!==null&&M.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(De=!0);const ke=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[j])?ne=ke[j][se]:ne=ke[j],K=!0):A.samples>0&&X.useMultisampledRTT(A)===!1?ne=M.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?ne=ke[se]:ne=ke,oe.copy(A.viewport),q.copy(A.scissor),Y=A.scissorTest}else oe.copy(te).multiplyScalar(Re).floor(),q.copy(ue).multiplyScalar(Re).floor(),Y=ve;if(se!==0&&(ne=Vl),Xe.bindFramebuffer(z.FRAMEBUFFER,ne)&&Xe.drawBuffers(A,ne),Xe.viewport(oe),Xe.scissor(q),Xe.setScissorTest(Y),K){const Ce=M.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ce.__webglTexture,se)}else if(De){const Ce=j;for(let Ve=0;Ve<A.textures.length;Ve++){const ke=M.get(A.textures[Ve]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ve,ke.__webglTexture,se,Ce)}}else if(A!==null&&se!==0){const Ce=M.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ce.__webglTexture,se)}fe=-1},this.readRenderTargetPixels=function(A,j,se,ne,K,De,Fe,Ce=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve){Xe.bindFramebuffer(z.FRAMEBUFFER,Ve);try{const ke=A.textures[Ce],tt=ke.format,Ze=ke.type;if(!St.textureFormatReadable(tt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Ze)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ne&&se>=0&&se<=A.height-K&&(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ce),z.readPixels(j,se,ne,K,Ee.convert(tt),Ee.convert(Ze),De))}finally{const ke=J!==null?M.get(J).__webglFramebuffer:null;Xe.bindFramebuffer(z.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,j,se,ne,K,De,Fe,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve)if(j>=0&&j<=A.width-ne&&se>=0&&se<=A.height-K){Xe.bindFramebuffer(z.FRAMEBUFFER,Ve);const ke=A.textures[Ce],tt=ke.format,Ze=ke.type;if(!St.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,dt),z.bufferData(z.PIXEL_PACK_BUFFER,De.byteLength,z.STREAM_READ),A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ce),z.readPixels(j,se,ne,K,Ee.convert(tt),Ee.convert(Ze),0);const Et=J!==null?M.get(J).__webglFramebuffer:null;Xe.bindFramebuffer(z.FRAMEBUFFER,Et);const Ft=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Lv(z,Ft,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,dt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,De),z.deleteBuffer(dt),z.deleteSync(Ft),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,se=0){const ne=Math.pow(2,-se),K=Math.floor(A.image.width*ne),De=Math.floor(A.image.height*ne),Fe=j!==null?j.x:0,Ce=j!==null?j.y:0;X.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,se,0,0,Fe,Ce,K,De),Xe.unbindTexture()};const Hl=z.createFramebuffer(),Gt=z.createFramebuffer();this.copyTextureToTexture=function(A,j,se=null,ne=null,K=0,De=null){De===null&&(K!==0?(Ga("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=K,K=0):De=0);let Fe,Ce,Ve,ke,tt,Ze,dt,Et,Ft;const Ut=A.isCompressedTexture?A.mipmaps[De]:A.image;if(se!==null)Fe=se.max.x-se.min.x,Ce=se.max.y-se.min.y,Ve=se.isBox3?se.max.z-se.min.z:1,ke=se.min.x,tt=se.min.y,Ze=se.isBox3?se.min.z:0;else{const Tn=Math.pow(2,-K);Fe=Math.floor(Ut.width*Tn),Ce=Math.floor(Ut.height*Tn),A.isDataArrayTexture?Ve=Ut.depth:A.isData3DTexture?Ve=Math.floor(Ut.depth*Tn):Ve=1,ke=0,tt=0,Ze=0}ne!==null?(dt=ne.x,Et=ne.y,Ft=ne.z):(dt=0,Et=0,Ft=0);const At=Ee.convert(j.format),Qe=Ee.convert(j.type);let bt;j.isData3DTexture?(X.setTexture3D(j,0),bt=z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(X.setTexture2DArray(j,0),bt=z.TEXTURE_2D_ARRAY):(X.setTexture2D(j,0),bt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const _t=z.getParameter(z.UNPACK_ROW_LENGTH),gn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),vi=z.getParameter(z.UNPACK_SKIP_PIXELS),Qt=z.getParameter(z.UNPACK_SKIP_ROWS),Nr=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ut.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ut.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ke),z.pixelStorei(z.UNPACK_SKIP_ROWS,tt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ze);const Nt=A.isDataArrayTexture||A.isData3DTexture,st=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const Tn=M.get(A),rn=M.get(j),sn=M.get(Tn.__renderTarget),ns=M.get(rn.__renderTarget);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,sn.__webglFramebuffer),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let xi=0;xi<Ve;xi++)Nt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,M.get(A).__webglTexture,K,Ze+xi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,M.get(j).__webglTexture,De,Ft+xi)),z.blitFramebuffer(ke,tt,Fe,Ce,dt,Et,Fe,Ce,z.DEPTH_BUFFER_BIT,z.NEAREST);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||M.has(A)){const Tn=M.get(A),rn=M.get(j);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,Hl),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,Gt);for(let sn=0;sn<Ve;sn++)Nt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Tn.__webglTexture,K,Ze+sn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Tn.__webglTexture,K),st?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,rn.__webglTexture,De,Ft+sn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,rn.__webglTexture,De),K!==0?z.blitFramebuffer(ke,tt,Fe,Ce,dt,Et,Fe,Ce,z.COLOR_BUFFER_BIT,z.NEAREST):st?z.copyTexSubImage3D(bt,De,dt,Et,Ft+sn,ke,tt,Fe,Ce):z.copyTexSubImage2D(bt,De,dt,Et,ke,tt,Fe,Ce);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else st?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(bt,De,dt,Et,Ft,Fe,Ce,Ve,At,Qe,Ut.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(bt,De,dt,Et,Ft,Fe,Ce,Ve,At,Ut.data):z.texSubImage3D(bt,De,dt,Et,Ft,Fe,Ce,Ve,At,Qe,Ut):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,De,dt,Et,Fe,Ce,At,Qe,Ut.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,De,dt,Et,Ut.width,Ut.height,At,Ut.data):z.texSubImage2D(z.TEXTURE_2D,De,dt,Et,Fe,Ce,At,Qe,Ut);z.pixelStorei(z.UNPACK_ROW_LENGTH,_t),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,vi),z.pixelStorei(z.UNPACK_SKIP_ROWS,Qt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Nr),De===0&&j.generateMipmaps&&z.generateMipmap(bt),Xe.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&X.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?X.setTextureCube(A,0):A.isData3DTexture?X.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?X.setTexture2DArray(A,0):X.setTexture2D(A,0),Xe.unbindTexture()},this.resetState=function(){V=0,ee=0,J=null,Xe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}const m1=()=>{const[a,e]=un.useState(!1),[n,r]=un.useState("home"),[o,c]=un.useState(0),[u,d]=un.useState({name:"",email:"",message:""}),p=un.useRef(null),m=un.useRef(null),v=un.useRef(null),g=un.useRef(null),x=un.useRef(null),S=un.useRef(null);un.useEffect(()=>{if(!p.current)return;const R=new rx;R.fog=new dd(1296,.02),m.current=R;const b=new Yn(75,window.innerWidth/window.innerHeight,.1,1e3);b.position.z=8;const L=new p1({alpha:!0,antialias:!0,powerPreference:"high-performance"});L.setSize(window.innerWidth,window.innerHeight),L.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.current.appendChild(L.domElement);const I=[],O=new Ul(2,1),W=new qu({color:65535,emissive:65535,emissiveIntensity:.5,metalness:.9,roughness:.1,transparent:!0,opacity:.6,wireframe:!1}),w=new $n(O,W);w.position.set(0,0,0),v.current=w,R.add(w),I.push(w);const P=new Ul(2.05,1),V=new fd({color:65416,wireframe:!0,transparent:!0,opacity:.3}),ee=new $n(P,V);w.add(ee);for(let Me=0;Me<3;Me++){const Te=new gd(.5,.15,16,32),ct=new qu({color:Me%2===0?16711935:65535,emissive:Me%2===0?16711935:65535,emissiveIntensity:.8,transparent:!0,opacity:.4,metalness:1,roughness:0}),Dt=new $n(Te,ct),ot=Me/3*Math.PI*2;Dt.position.set(Math.cos(ot)*4,Math.sin(ot*2)*2,Math.sin(ot)*4),Dt.rotation.x=ot,R.add(Dt),I.push(Dt)}x.current=I;const J=new Bn,fe=3e3,le=new Float32Array(fe*3),oe=new Float32Array(fe*3);for(let Me=0;Me<fe*3;Me+=3){le[Me]=(Math.random()-.5)*50,le[Me+1]=(Math.random()-.5)*50,le[Me+2]=(Math.random()-.5)*50;const Te=new mt;Te.setHSL(.5+Math.random()*.2,1,.5),oe[Me]=Te.r,oe[Me+1]=Te.g,oe[Me+2]=Te.b}J.setAttribute("position",new si(le,3)),J.setAttribute("color",new si(oe,3));const q=new yg({size:.1,transparent:!0,opacity:.8,vertexColors:!0,blending:rf}),Y=new cx(J,q);g.current=Y,R.add(Y);const de=new md(1.5,64,64),re=new qu({color:5424,emissive:65535,emissiveIntensity:.3,metalness:.8,roughness:.2,transparent:!0,opacity:.7,wireframe:!0}),F=new $n(de,re);F.position.set(0,-100,0),S.current=F,R.add(F);const ae=new _x(26367,.3);R.add(ae);const Re=new Ku(65535,3,50);Re.position.set(10,10,10),R.add(Re);const He=new Ku(16711935,3,50);He.position.set(-10,-10,10),R.add(He);const qe=new Ku(65416,2,30);qe.position.set(0,15,-10),R.add(qe);let te;const ue=()=>{te=requestAnimationFrame(ue),v.current&&(v.current.rotation.x+=.003,v.current.rotation.y+=.005,v.current.rotation.z+=.002),x.current&&x.current.forEach((Me,Te)=>{if(Te>0){const ct=Date.now()*.001;Me.rotation.x+=.01,Me.rotation.y+=.015;const Dt=ct+Te/3*Math.PI*2;Me.position.x=Math.cos(Dt)*4,Me.position.z=Math.sin(Dt)*4,Me.position.y=Math.sin(ct*.5+Te)*2}}),g.current&&(g.current.rotation.y+=5e-4,g.current.rotation.x+=3e-4),S.current&&(S.current.rotation.y+=.002),L.render(R,b)};ue();const ve=()=>{b.aspect=window.innerWidth/window.innerHeight,b.updateProjectionMatrix(),L.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ve),()=>{cancelAnimationFrame(te),window.removeEventListener("resize",ve),p.current&&L.domElement&&p.current.removeChild(L.domElement),R.traverse(Me=>{Me.geometry&&Me.geometry.dispose(),Me.material&&(Array.isArray(Me.material)?Me.material.forEach(Te=>Te.dispose()):Me.material.dispose())}),L.dispose()}},[]),un.useEffect(()=>{const R=()=>{const b=window.scrollY;if(c(b),v.current){const O=b*.001;v.current.position.y=-O*3,v.current.position.x=Math.sin(O)*1.5}if(g.current&&(g.current.rotation.x=b*3e-4),S.current){const O=document.getElementById("contact");if(O){const W=O.getBoundingClientRect();W.top<window.innerHeight&&W.bottom>0?S.current.position.y=0:S.current.position.y=-100}}const I=["home","about","projects","services","experience","contact"].find(O=>{const W=document.getElementById(O);if(W){const w=W.getBoundingClientRect();return w.top<=100&&w.bottom>=100}return!1});I&&r(I)};return window.addEventListener("scroll",R),()=>window.removeEventListener("scroll",R)},[]);const T=R=>{var b;(b=document.getElementById(R))==null||b.scrollIntoView({behavior:"smooth"}),e(!1)},C=()=>{alert("Message sent! (Demo)"),d({name:"",email:"",message:""})},y=[{title:"AMPORA – EV Charging System",description:"Smart EV charger booking and trip planning with automated CI/CD deployment and cloud infrastructure.",tech:["React","Spring Boot","PostgreSQL","AWS","Jenkins","Docker","Kubernetes"],image:"images/project4.png",link:"#"},{title:"Cloud Native Backend",description:"Kubernetes-deployed backend with Terraform-provisioned infrastructure and automated pipelines.",tech:["Spring Boot","Terraform","Docker","Kubernetes","GCP","Jenkins"],image:"images/project2.png",link:"#"},{title:"Visual Vibe – Social Media App",description:"Flutter-based social platform with real-time chat, feeds, and cloud-hosted backend.",tech:["Flutter","Firebase","Supabase"],image:"images/project3.png",link:"#"},{title:"Food Export Website",description:"Production website for Seneth Healing Foods with client management and order handling.",tech:["PHP","Bootstrap","HTML","MySQL"],image:"images/project6.png",link:"#"},{title:"E-Commerce Platform",description:"Online shopping platform for electronics with integrated payment gateway.",tech:["PHP","Bootstrap","MySQL"],image:"images/project5.png",link:"#"},{title:"Smart Fishery System",description:"Desktop management system for fisheries with JavaFX frontend and MySQL backend.",tech:["JavaFX","MySQL"],image:"images/project7.png",link:"#"}],_=[{icon:k.jsx(jp,{className:"w-12 h-12"}),title:"Full Stack Development",description:"Building scalable web applications with modern frameworks and cloud architecture"},{icon:k.jsx(A_,{className:"w-12 h-12"}),title:"DevOps & Cloud",description:"Kubernetes orchestration, CI/CD pipelines, and infrastructure automation"},{icon:k.jsx($_,{className:"w-12 h-12"}),title:"Mobile Development",description:"Cross-platform mobile apps with Flutter and native technologies"}],N=[{role:"DevOps & Cloud Engineer",company:"GitHub – Open Source",period:"2024 - Present",description:"Contributing to DevOps projects, focusing on CI/CD pipelines and cloud infrastructure"},{role:"Full Stack Developer",company:"Seneth Healing Foods (Pvt) Ltd",period:"2023",description:"Developed production e-commerce platform with payment integration"}];return k.jsxs("div",{className:"bg-[#000510] text-white min-h-screen font-sans overflow-x-hidden relative",children:[k.jsx("style",{children:`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.5); }
          50% { box-shadow: 0 0 40px rgba(0, 255, 255, 0.8); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 255, 255, 0.3);
        }
        .neon-text {
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.8),
                       0 0 20px rgba(0, 255, 255, 0.6),
                       0 0 30px rgba(0, 255, 255, 0.4);
        }
        .neon-border {
          border: 1px solid rgba(0, 255, 255, 0.3);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.2),
                      inset 0 0 15px rgba(0, 255, 255, 0.1);
        }
        .gradient-text {
          background: linear-gradient(90deg, #00ffff, #ff00ff, #00ff88);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite;
        }
      `}),k.jsx("div",{ref:p,className:"fixed top-0 left-0 w-full h-screen pointer-events-none z-0"}),k.jsx("div",{className:"fixed inset-0 bg-gradient-to-b from-transparent via-[#000510] to-[#001030] pointer-events-none z-0"}),k.jsxs("nav",{className:`fixed top-0 w-full z-50 transition-all duration-500 ${o>50?"glass-card shadow-2xl shadow-cyan-500/10":"bg-transparent"}`,children:[k.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex justify-between items-center",children:[k.jsx("div",{className:"text-2xl font-bold gradient-text",children:"NUMIDU"}),k.jsxs("div",{className:"hidden md:flex space-x-8",children:[["home","about","projects","services","experience","contact"].map(R=>k.jsxs("button",{onClick:()=>T(R),className:`capitalize transition-all duration-300 relative ${n===R?"text-cyan-400 font-semibold":"text-gray-400 hover:text-cyan-300"}`,children:[R,n===R&&k.jsx("div",{className:"absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"})]},R)),k.jsx("a",{href:"https://drive.google.com/file/d/1oV_C9V8RBip6HV9BpWf8GkePVFBI3siw/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:scale-105 transition-all duration-300",children:"Download CV"})]}),k.jsx("button",{className:"md:hidden text-white",onClick:()=>e(!a),children:a?k.jsx(J_,{}):k.jsx(V_,{})})]}),a&&k.jsxs("div",{className:"md:hidden glass-card border-t border-cyan-500/20",children:[["home","about","projects","services","experience","contact"].map(R=>k.jsx("button",{onClick:()=>T(R),className:"block w-full text-left px-6 py-4 capitalize hover:bg-cyan-500/10 transition-all border-l-2 border-transparent hover:border-cyan-400",children:R},R)),k.jsx("a",{href:"https://drive.google.com/uc?export=download&id=1oV_C9V8RBip6HV9BpWf8GkePVFBI3siw",target:"_blank",rel:"noopener noreferrer",className:"block px-6 py-4 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all border-l-2 border-transparent hover:border-cyan-400",children:"Download CV"})]})]}),k.jsxs("section",{id:"home",className:"min-h-screen flex items-center justify-center relative px-6 pt-20",children:[k.jsxs("div",{className:"max-w-6xl mx-auto text-center z-10",style:{animation:"float 6s ease-in-out infinite"},children:[k.jsx("div",{className:"mb-12",children:k.jsxs("div",{className:"w-48 h-48 mx-auto mb-8 rounded-full relative",children:[k.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-spin",style:{animationDuration:"3s"}}),k.jsx("div",{className:"absolute inset-2 rounded-full bg-[#000510] flex items-center justify-center overflow-hidden",children:k.jsx("img",{src:"images/myimage.png",alt:"Profile",className:"w-full h-full object-cover rounded-full"})}),k.jsx("div",{className:"absolute inset-0 rounded-full",style:{animation:"pulse-glow 2s ease-in-out infinite"}})]})}),k.jsx("h1",{className:"text-7xl md:text-9xl font-black mb-8 gradient-text",style:{letterSpacing:"0.05em"},children:"NUMIDU DULANGA"}),k.jsx("p",{className:"text-2xl md:text-4xl text-cyan-400 mb-8 font-light neon-text",children:"Software Engineer • DevOps Enthusiast • Full Stack Developer"}),k.jsx("p",{className:"text-lg text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed",children:"Computer Science undergraduate passionate about building scalable web and mobile applications. Experienced in full-stack development and familiar with DevOps practices including CI/CD and containerization."}),k.jsxs("div",{className:"flex flex-wrap justify-center gap-6 mb-16",children:[k.jsx("button",{onClick:()=>T("projects"),className:"px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 neon-border",children:"View Projects"}),k.jsx("button",{onClick:()=>T("contact"),className:"px-10 py-5 glass-card rounded-2xl font-bold hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-110 neon-border",children:"Get In Touch"})]}),k.jsxs("div",{className:"flex justify-center space-x-8",children:[k.jsx("a",{href:"#",className:"text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2",children:k.jsx(L_,{className:"w-8 h-8"})}),k.jsx("a",{href:"#",className:"text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2",children:k.jsx(O_,{className:"w-8 h-8"})}),k.jsx("a",{href:"#",className:"text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2",children:k.jsx(Z_,{className:"w-8 h-8"})})]})]}),k.jsx("div",{className:"absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce",children:k.jsx(w_,{className:"w-10 h-10 text-cyan-400 neon-text"})})]}),k.jsx("section",{id:"about",className:"py-40 px-6 relative z-10",children:k.jsxs("div",{className:"max-w-7xl mx-auto",children:[k.jsx("h2",{className:"text-6xl md:text-8xl font-black mb-20 text-center gradient-text",children:"ABOUT ME"}),k.jsxs("div",{className:"grid md:grid-cols-2 gap-8 mb-20",children:[k.jsxs("div",{className:"glass-card rounded-3xl p-10 neon-border transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20",children:[k.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-6",children:k.jsx(U_,{className:"w-10 h-10 text-white"})}),k.jsx("h3",{className:"text-3xl font-bold mb-4 text-cyan-400",children:"Education"}),k.jsxs("p",{className:"text-gray-300 leading-relaxed text-lg",children:[k.jsx("span",{className:"text-white font-bold text-xl block mb-2",children:"Bachelor of Computer Science"}),"University Of Ruhuna • 2023 - 2026",k.jsx("br",{}),k.jsx("span",{className:"text-cyan-400 mt-2 block",children:"Focus: DevOps, Cloud Architecture, Full Stack Development"})]})]}),k.jsxs("div",{className:"glass-card rounded-3xl p-10 neon-border transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20",children:[k.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6",children:k.jsx(Xp,{className:"w-10 h-10 text-white"})}),k.jsx("h3",{className:"text-3xl font-bold mb-4 text-purple-400",children:"Mission"}),k.jsx("p",{className:"text-gray-300 leading-relaxed text-lg",children:"Pioneering cloud-native solutions that push the boundaries of scalability and performance. Committed to open-source contribution and building the future of distributed systems."})]})]}),k.jsxs("div",{className:"glass-card rounded-3xl p-12 neon-border relative overflow-hidden",children:[k.jsxs("div",{className:"absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none",children:[k.jsx("div",{className:"absolute top-10 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl"}),k.jsx("div",{className:"absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"})]}),k.jsx("h3",{className:"text-4xl font-bold mb-12 text-center gradient-text relative z-10",children:"TECHNICAL SKILLS"}),k.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10",children:[k.jsxs("div",{className:"group glass-card p-6 rounded-2xl neon-border cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:bg-cyan-500/5 border border-cyan-500/30",children:[k.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[k.jsx(jp,{className:"w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300"}),k.jsx("h4",{className:"text-cyan-400 font-bold text-xl group-hover:neon-text transition-all",children:"Frontend"})]}),k.jsxs("ul",{className:"space-y-3",children:[k.jsxs("li",{className:"group/item flex items-center gap-2",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover/item:opacity-100 transition-all duration-200"}),k.jsx("span",{className:"text-gray-300 group-hover/item:text-white hover:translate-x-1 transition-all duration-200",children:"React"})]}),k.jsxs("li",{className:"group/item flex items-center gap-2",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover/item:opacity-100 transition-all duration-200"}),k.jsx("span",{className:"text-gray-300 group-hover/item:text-white hover:translate-x-1 transition-all duration-200",children:"JavaScript / TypeScript"})]}),k.jsxs("li",{className:"group/item flex items-center gap-2",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover/item:opacity-100 transition-all duration-200"}),k.jsx("span",{className:"text-gray-300 group-hover/item:text-white hover:translate-x-1 transition-all duration-200",children:"Tailwind CSS"})]}),k.jsxs("li",{className:"group/item flex items-center gap-2",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover/item:opacity-100 transition-all duration-200"}),k.jsx("span",{className:"text-gray-300 group-hover/item:text-white hover:translate-x-1 transition-all duration-200",children:"Flutter"})]})]})]}),k.jsxs("div",{className:"group glass-card p-6 rounded-2xl neon-border cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-purple-500/5 border border-purple-500/30",children:[k.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[k.jsx(X_,{className:"w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300"}),k.jsx("h4",{className:"text-purple-400 font-bold text-xl group-hover:neon-text transition-all",children:"Backend"})]}),k.jsxs("ul",{className:"space-y-3",children:[k.jsxs("li",{className:"group/item flex items-center gap-2",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-purple-400 opacity-0 group-hover/item:opacity-100 transition-all duration-200"}),k.jsx("span",{className:"text-gray-300 group-hover/item:text-white hover:translate-x-1 transition-all duration-200",children:"Spring Boot"})]}),k.jsxs("li",{className:"group/item flex items-center gap-2",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-purple-400 opacity-0 group-hover/item:opacity-100 transition-all duration-200"}),k.jsx("span",{className:"text-gray-300 group-hover/item:text-white hover:translate-x-1 transition-all duration-200",children:".NET / C#"})]}),k.jsxs("li",{className:"group/item flex items-center gap-2",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-purple-400 opacity-0 group-hover/item:opacity-100 transition-all duration-200"}),k.jsx("span",{className:"text-gray-300 group-hover/item:text-white hover:translate-x-1 transition-all duration-200",children:"Express.js"})]}),k.jsxs("li",{className:"group/item flex items-center gap-2",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-purple-400 opacity-0 group-hover/item:opacity-100 transition-all duration-200"}),k.jsx("span",{className:"text-gray-300 group-hover/item:text-white hover:translate-x-1 transition-all duration-200",children:"REST API Development"})]})]})]}),k.jsxs("div",{className:"group glass-card p-6 rounded-2xl neon-border cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:bg-green-500/5 border border-green-500/30",children:[k.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[k.jsx(b_,{className:"w-6 h-6 text-green-400 group-hover:scale-110 transition-transform duration-300"}),k.jsx("h4",{className:"text-green-400 font-bold text-xl group-hover:neon-text transition-all",children:"Databases"})]}),k.jsxs("ul",{className:"space-y-3",children:[k.jsxs("li",{className:"group/item flex items-center gap-2",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-400 opacity-0 group-hover/item:opacity-100 transition-all duration-200"}),k.jsx("span",{className:"text-gray-300 group-hover/item:text-white hover:translate-x-1 transition-all duration-200",children:"MySQL"})]}),k.jsxs("li",{className:"group/item flex items-center gap-2",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-400 opacity-0 group-hover/item:opacity-100 transition-all duration-200"}),k.jsx("span",{className:"text-gray-300 group-hover/item:text-white hover:translate-x-1 transition-all duration-200",children:"PostgreSQL"})]}),k.jsxs("li",{className:"group/item flex items-center gap-2",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-400 opacity-0 group-hover/item:opacity-100 transition-all duration-200"}),k.jsx("span",{className:"text-gray-300 group-hover/item:text-white hover:translate-x-1 transition-all duration-200",children:"MongoDB"})]}),k.jsxs("li",{className:"group/item flex items-center gap-2",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-400 opacity-0 group-hover/item:opacity-100 transition-all duration-200"}),k.jsx("span",{className:"text-gray-300 group-hover/item:text-white hover:translate-x-1 transition-all duration-200",children:"SQL Server"})]})]})]}),k.jsxs("div",{className:"group glass-card p-6 rounded-2xl neon-border cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 hover:bg-pink-500/5 border border-pink-500/30",children:[k.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[k.jsx(Y_,{className:"w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform duration-300"}),k.jsx("h4",{className:"text-pink-400 font-bold text-xl group-hover:neon-text transition-all",children:"DevOps & Tools"})]}),k.jsxs("ul",{className:"space-y-3",children:[k.jsxs("li",{className:"group/item flex items-center gap-2",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-pink-400 opacity-0 group-hover/item:opacity-100 transition-all duration-200"}),k.jsx("span",{className:"text-gray-300 group-hover/item:text-white hover:translate-x-1 transition-all duration-200",children:"Git"})]}),k.jsxs("li",{className:"group/item flex items-center gap-2",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-pink-400 opacity-0 group-hover/item:opacity-100 transition-all duration-200"}),k.jsx("span",{className:"text-gray-300 group-hover/item:text-white hover:translate-x-1 transition-all duration-200",children:"Docker"})]}),k.jsxs("li",{className:"group/item flex items-center gap-2",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-pink-400 opacity-0 group-hover/item:opacity-100 transition-all duration-200"}),k.jsx("span",{className:"text-gray-300 group-hover/item:text-white hover:translate-x-1 transition-all duration-200",children:"AWS (Basic)"})]}),k.jsxs("li",{className:"group/item flex items-center gap-2",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-pink-400 opacity-0 group-hover/item:opacity-100 transition-all duration-200"}),k.jsx("span",{className:"text-gray-300 group-hover/item:text-white hover:translate-x-1 transition-all duration-200",children:"CI/CD"})]})]})]})]})]})]})}),k.jsx("section",{id:"projects",className:"py-40 px-6 relative z-10",children:k.jsxs("div",{className:"max-w-7xl mx-auto",children:[k.jsx("h2",{className:"text-6xl md:text-8xl font-black mb-20 text-center gradient-text",children:"FEATURED WORK"}),k.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:y.map((R,b)=>k.jsxs("div",{className:"group glass-card rounded-3xl overflow-hidden neon-border transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/30",style:{animation:`float ${3+b*.5}s ease-in-out infinite`},children:[k.jsxs("div",{className:"aspect-video overflow-hidden relative bg-gradient-to-br from-cyan-900/20 to-purple-900/20",children:[k.jsx("img",{src:R.image,alt:R.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"}),k.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#000510] via-transparent to-transparent opacity-80"})]}),k.jsxs("div",{className:"p-6",children:[k.jsx("h3",{className:"text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors",children:R.title}),k.jsx("p",{className:"text-gray-400 mb-4 leading-relaxed",children:R.description}),k.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:R.tech.map((L,I)=>k.jsx("span",{className:"px-3 py-1 glass-card rounded-full text-sm text-cyan-400 neon-border hover:bg-cyan-500/20 transition-all",children:L},I))}),k.jsxs("a",{href:R.link,className:"inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-all gap-2 group-hover:gap-4 font-semibold",children:["View Project ",k.jsx(N_,{className:"w-5 h-5"})]})]})]},b))})]})}),k.jsx("section",{id:"services",className:"py-40 px-6 relative z-10",children:k.jsxs("div",{className:"max-w-7xl mx-auto",children:[k.jsx("h2",{className:"text-6xl md:text-8xl font-black mb-20 text-center gradient-text",children:"SERVICES"}),k.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:_.map((R,b)=>k.jsxs("div",{className:"glass-card rounded-3xl p-10 neon-border transition-all duration-500 text-center transform hover:scale-110 hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/30",style:{animation:`float ${4+b}s ease-in-out infinite`},children:[k.jsx("div",{className:"mb-8 flex justify-center",children:k.jsx("div",{className:"w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center transform transition-all duration-500 hover:rotate-12 hover:scale-125",children:k.jsx("div",{className:"text-white",children:R.icon})})}),k.jsx("h3",{className:"text-2xl font-bold mb-4 text-cyan-400",children:R.title}),k.jsx("p",{className:"text-gray-400 leading-relaxed text-lg",children:R.description})]},b))})]})}),k.jsx("section",{id:"experience",className:"py-40 px-6 relative z-10",children:k.jsxs("div",{className:"max-w-6xl mx-auto",children:[k.jsx("h2",{className:"text-6xl md:text-8xl font-black mb-20 text-center gradient-text",children:"EXPERIENCE"}),k.jsxs("div",{className:"relative",children:[k.jsx("div",{className:"absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"}),N.map((R,b)=>k.jsxs("div",{className:"relative pl-20 mb-12 group",children:[k.jsx("div",{className:"absolute left-4 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 border-4 border-[#000510] shadow-lg shadow-cyan-500/50 group-hover:scale-150 transition-transform duration-300"}),k.jsx("div",{className:"glass-card rounded-3xl p-8 neon-border hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:translate-x-4",children:k.jsxs("div",{className:"flex items-start gap-4",children:[k.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0",children:k.jsx(M_,{className:"w-6 h-6 text-white"})}),k.jsxs("div",{className:"flex-1",children:[k.jsx("h3",{className:"text-2xl font-bold mb-2 text-cyan-400",children:R.role}),k.jsx("p",{className:"text-purple-400 font-semibold mb-2",children:R.company}),k.jsx("p",{className:"text-gray-500 text-sm mb-4 font-mono",children:R.period}),k.jsx("p",{className:"text-gray-300 leading-relaxed",children:R.description})]})]})})]},b))]}),k.jsxs("div",{className:"mt-20 glass-card rounded-3xl p-12 neon-border hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300",children:[k.jsx("h3",{className:"text-4xl font-bold mb-10 text-center gradient-text",children:"CERTIFICATIONS"}),k.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:["DevOps Programming","AWS Educate Storage","Learning Kubernetes","Cyber Security"].map((R,b)=>k.jsxs("div",{className:"flex items-center gap-4 p-5 glass-card rounded-2xl hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105 neon-border",children:[k.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center",children:k.jsx(Xp,{className:"w-6 h-6 text-white"})}),k.jsx("span",{className:"font-semibold text-lg",children:R})]},b))})]})]})}),k.jsx("section",{id:"contact",className:"py-40 px-6 relative z-10 mb-20",children:k.jsxs("div",{className:"max-w-5xl mx-auto",children:[k.jsx("h2",{className:"text-6xl md:text-8xl font-black mb-20 text-center gradient-text",children:"LET'S CONNECT"}),k.jsxs("div",{className:"glass-card rounded-3xl p-12 neon-border hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300",children:[k.jsxs("div",{className:"space-y-8",children:[k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-bold mb-3 text-cyan-400 uppercase tracking-wider",children:"Name"}),k.jsx("input",{type:"text",value:u.name,onChange:R=>d({...u,name:R.target.value}),className:"w-full px-6 py-4 glass-card neon-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-lg",placeholder:"Your name"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-bold mb-3 text-cyan-400 uppercase tracking-wider",children:"Email"}),k.jsx("input",{type:"email",value:u.email,onChange:R=>d({...u,email:R.target.value}),className:"w-full px-6 py-4 glass-card neon-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-lg",placeholder:"your@email.com"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-bold mb-3 text-cyan-400 uppercase tracking-wider",children:"Message"}),k.jsx("textarea",{value:u.message,onChange:R=>d({...u,message:R.target.value}),rows:"6",className:"w-full px-6 py-4 glass-card neon-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none text-lg",placeholder:"Your message..."})]}),k.jsxs("button",{onClick:C,className:"w-full px-10 py-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 neon-border",children:["Send Message ",k.jsx(G_,{className:"w-6 h-6"})]})]}),k.jsx("div",{className:"mt-12 pt-8 border-t border-cyan-500/20",children:k.jsx("div",{className:"flex flex-wrap justify-center gap-8",children:k.jsxs("a",{href:"mailto:dnumidu@gmail.com",className:"flex items-center gap-3 glass-card px-6 py-3 rounded-2xl hover:bg-cyan-500/20 transition-all transform hover:scale-110 neon-border",children:[k.jsx(B_,{className:"w-5 h-5 text-cyan-400"}),k.jsx("span",{className:"text-cyan-400",children:"dnumidu@gmail.com"})]})})})]})]})}),k.jsx("footer",{className:"py-16 px-6 border-t border-cyan-500/20 relative z-10 glass-card",children:k.jsxs("div",{className:"max-w-7xl mx-auto text-center",children:[k.jsxs("p",{className:"mb-6 text-gray-400 text-lg",children:["© 2026"," ",k.jsx("span",{className:"gradient-text font-bold",children:"NUMIDU DULANGA"}),". All rights reserved."]}),k.jsxs("div",{className:"flex justify-center space-x-8",children:[k.jsx("a",{href:"#",className:"text-gray-400 hover:text-cyan-400 transition-all transform hover:scale-110",children:"Privacy Policy"}),k.jsx("a",{href:"#",className:"text-gray-400 hover:text-cyan-400 transition-all transform hover:scale-110",children:"Terms of Service"})]})]})})]})};p_.createRoot(document.getElementById("root")).render(k.jsx(un.StrictMode,{children:k.jsx(m1,{})}));
