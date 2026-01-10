(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var xc={exports:{}},La={},Sc={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function e_(){if(Pp)return ht;Pp=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function S(U,ie,be){this.props=U,this.context=ie,this.refs=C,this.updater=be||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=S.prototype;function b(U,ie,be){this.props=U,this.context=ie,this.refs=C,this.updater=be||y}var L=b.prototype=new v;L.constructor=b,T(L,S.prototype),L.isPureReactComponent=!0;var D=Array.isArray,I=Object.prototype.hasOwnProperty,F={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function j(U,ie,be){var Ye,Ke={},ee=null,ce=null;if(ie!=null)for(Ye in ie.ref!==void 0&&(ce=ie.ref),ie.key!==void 0&&(ee=""+ie.key),ie)I.call(ie,Ye)&&!O.hasOwnProperty(Ye)&&(Ke[Ye]=ie[Ye]);var ye=arguments.length-2;if(ye===1)Ke.children=be;else if(1<ye){for(var ke=Array(ye),Ie=0;Ie<ye;Ie++)ke[Ie]=arguments[Ie+2];Ke.children=ke}if(U&&U.defaultProps)for(Ye in ye=U.defaultProps,ye)Ke[Ye]===void 0&&(Ke[Ye]=ye[Ye]);return{$$typeof:a,type:U,key:ee,ref:ce,props:Ke,_owner:F.current}}function A(U,ie){return{$$typeof:a,type:U.type,key:ie,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===a}function z(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(be){return ie[be]})}var re=/\/+/g;function Z(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):ie.toString(36)}function fe(U,ie,be,Ye,Ke){var ee=typeof U;(ee==="undefined"||ee==="boolean")&&(U=null);var ce=!1;if(U===null)ce=!0;else switch(ee){case"string":case"number":ce=!0;break;case"object":switch(U.$$typeof){case a:case e:ce=!0}}if(ce)return ce=U,Ke=Ke(ce),U=Ye===""?"."+Z(ce,0):Ye,D(Ke)?(be="",U!=null&&(be=U.replace(re,"$&/")+"/"),fe(Ke,ie,be,"",function(Ie){return Ie})):Ke!=null&&(R(Ke)&&(Ke=A(Ke,be+(!Ke.key||ce&&ce.key===Ke.key?"":(""+Ke.key).replace(re,"$&/")+"/")+U)),ie.push(Ke)),1;if(ce=0,Ye=Ye===""?".":Ye+":",D(U))for(var ye=0;ye<U.length;ye++){ee=U[ye];var ke=Ye+Z(ee,ye);ce+=fe(ee,ie,be,ke,Ke)}else if(ke=x(U),typeof ke=="function")for(U=ke.call(U),ye=0;!(ee=U.next()).done;)ee=ee.value,ke=Ye+Z(ee,ye++),ce+=fe(ee,ie,be,ke,Ke);else if(ee==="object")throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ce}function ue(U,ie,be){if(U==null)return U;var Ye=[],Ke=0;return fe(U,Ye,"","",function(ee){return ie.call(be,ee,Ke++)}),Ye}function oe(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(be){(U._status===0||U._status===-1)&&(U._status=1,U._result=be)},function(be){(U._status===0||U._status===-1)&&(U._status=2,U._result=be)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var Y={current:null},X={transition:null},de={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:X,ReactCurrentOwner:F};function ne(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:ue,forEach:function(U,ie,be){ue(U,function(){ie.apply(this,arguments)},be)},count:function(U){var ie=0;return ue(U,function(){ie++}),ie},toArray:function(U){return ue(U,function(ie){return ie})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ht.Component=S,ht.Fragment=n,ht.Profiler=o,ht.PureComponent=b,ht.StrictMode=r,ht.Suspense=p,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,ht.act=ne,ht.cloneElement=function(U,ie,be){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Ye=T({},U.props),Ke=U.key,ee=U.ref,ce=U._owner;if(ie!=null){if(ie.ref!==void 0&&(ee=ie.ref,ce=F.current),ie.key!==void 0&&(Ke=""+ie.key),U.type&&U.type.defaultProps)var ye=U.type.defaultProps;for(ke in ie)I.call(ie,ke)&&!O.hasOwnProperty(ke)&&(Ye[ke]=ie[ke]===void 0&&ye!==void 0?ye[ke]:ie[ke])}var ke=arguments.length-2;if(ke===1)Ye.children=be;else if(1<ke){ye=Array(ke);for(var Ie=0;Ie<ke;Ie++)ye[Ie]=arguments[Ie+2];Ye.children=ye}return{$$typeof:a,type:U.type,key:Ke,ref:ee,props:Ye,_owner:ce}},ht.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},ht.createElement=j,ht.createFactory=function(U){var ie=j.bind(null,U);return ie.type=U,ie},ht.createRef=function(){return{current:null}},ht.forwardRef=function(U){return{$$typeof:d,render:U}},ht.isValidElement=R,ht.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:oe}},ht.memo=function(U,ie){return{$$typeof:m,type:U,compare:ie===void 0?null:ie}},ht.startTransition=function(U){var ie=X.transition;X.transition={};try{U()}finally{X.transition=ie}},ht.unstable_act=ne,ht.useCallback=function(U,ie){return Y.current.useCallback(U,ie)},ht.useContext=function(U){return Y.current.useContext(U)},ht.useDebugValue=function(){},ht.useDeferredValue=function(U){return Y.current.useDeferredValue(U)},ht.useEffect=function(U,ie){return Y.current.useEffect(U,ie)},ht.useId=function(){return Y.current.useId()},ht.useImperativeHandle=function(U,ie,be){return Y.current.useImperativeHandle(U,ie,be)},ht.useInsertionEffect=function(U,ie){return Y.current.useInsertionEffect(U,ie)},ht.useLayoutEffect=function(U,ie){return Y.current.useLayoutEffect(U,ie)},ht.useMemo=function(U,ie){return Y.current.useMemo(U,ie)},ht.useReducer=function(U,ie,be){return Y.current.useReducer(U,ie,be)},ht.useRef=function(U){return Y.current.useRef(U)},ht.useState=function(U){return Y.current.useState(U)},ht.useSyncExternalStore=function(U,ie,be){return Y.current.useSyncExternalStore(U,ie,be)},ht.useTransition=function(){return Y.current.useTransition()},ht.version="18.3.1",ht}var Lp;function Qf(){return Lp||(Lp=1,Sc.exports=e_()),Sc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function t_(){if(Dp)return La;Dp=1;var a=Qf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var g,_={},x=null,y=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(y=p.ref);for(g in p)r.call(p,g)&&!u.hasOwnProperty(g)&&(_[g]=p[g]);if(d&&d.defaultProps)for(g in p=d.defaultProps,p)_[g]===void 0&&(_[g]=p[g]);return{$$typeof:e,type:d,key:x,ref:y,props:_,_owner:o.current}}return La.Fragment=n,La.jsx=f,La.jsxs=f,La}var Np;function n_(){return Np||(Np=1,xc.exports=t_()),xc.exports}var ae=n_(),Sn=Qf(),il={},yc={exports:{}},Un={},Mc={exports:{}},Ec={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function i_(){return Ip||(Ip=1,function(a){function e(X,de){var ne=X.length;X.push(de);e:for(;0<ne;){var U=ne-1>>>1,ie=X[U];if(0<o(ie,de))X[U]=de,X[ne]=ie,ne=U;else break e}}function n(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var de=X[0],ne=X.pop();if(ne!==de){X[0]=ne;e:for(var U=0,ie=X.length,be=ie>>>1;U<be;){var Ye=2*(U+1)-1,Ke=X[Ye],ee=Ye+1,ce=X[ee];if(0>o(Ke,ne))ee<ie&&0>o(ce,Ke)?(X[U]=ce,X[ee]=ne,U=ee):(X[U]=Ke,X[Ye]=ne,U=Ye);else if(ee<ie&&0>o(ce,ne))X[U]=ce,X[ee]=ne,U=ee;else break e}}return de}function o(X,de){var ne=X.sortIndex-de.sortIndex;return ne!==0?ne:X.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();a.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,_=null,x=3,y=!1,T=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(X){for(var de=n(m);de!==null;){if(de.callback===null)r(m);else if(de.startTime<=X)r(m),de.sortIndex=de.expirationTime,e(p,de);else break;de=n(m)}}function D(X){if(C=!1,L(X),!T)if(n(p)!==null)T=!0,oe(I);else{var de=n(m);de!==null&&Y(D,de.startTime-X)}}function I(X,de){T=!1,C&&(C=!1,v(j),j=-1),y=!0;var ne=x;try{for(L(de),_=n(p);_!==null&&(!(_.expirationTime>de)||X&&!z());){var U=_.callback;if(typeof U=="function"){_.callback=null,x=_.priorityLevel;var ie=U(_.expirationTime<=de);de=a.unstable_now(),typeof ie=="function"?_.callback=ie:_===n(p)&&r(p),L(de)}else r(p);_=n(p)}if(_!==null)var be=!0;else{var Ye=n(m);Ye!==null&&Y(D,Ye.startTime-de),be=!1}return be}finally{_=null,x=ne,y=!1}}var F=!1,O=null,j=-1,A=5,R=-1;function z(){return!(a.unstable_now()-R<A)}function re(){if(O!==null){var X=a.unstable_now();R=X;var de=!0;try{de=O(!0,X)}finally{de?Z():(F=!1,O=null)}}else F=!1}var Z;if(typeof b=="function")Z=function(){b(re)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ue=fe.port2;fe.port1.onmessage=re,Z=function(){ue.postMessage(null)}}else Z=function(){S(re,0)};function oe(X){O=X,F||(F=!0,Z())}function Y(X,de){j=S(function(){X(a.unstable_now())},de)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(X){X.callback=null},a.unstable_continueExecution=function(){T||y||(T=!0,oe(I))},a.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<X?Math.floor(1e3/X):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_getFirstCallbackNode=function(){return n(p)},a.unstable_next=function(X){switch(x){case 1:case 2:case 3:var de=3;break;default:de=x}var ne=x;x=de;try{return X()}finally{x=ne}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(X,de){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ne=x;x=X;try{return de()}finally{x=ne}},a.unstable_scheduleCallback=function(X,de,ne){var U=a.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?U+ne:U):ne=U,X){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=ne+ie,X={id:g++,callback:de,priorityLevel:X,startTime:ne,expirationTime:ie,sortIndex:-1},ne>U?(X.sortIndex=ne,e(m,X),n(p)===null&&X===n(m)&&(C?(v(j),j=-1):C=!0,Y(D,ne-U))):(X.sortIndex=ie,e(p,X),T||y||(T=!0,oe(I))),X},a.unstable_shouldYield=z,a.unstable_wrapCallback=function(X){var de=x;return function(){var ne=x;x=de;try{return X.apply(this,arguments)}finally{x=ne}}}}(Ec)),Ec}var Up;function r_(){return Up||(Up=1,Mc.exports=i_()),Mc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function s_(){if(Fp)return Un;Fp=1;var a=Qf(),e=r_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function x(t){return p.call(_,t)?!0:p.call(g,t)?!1:m.test(t)?_[t]=!0:(g[t]=!0,!1)}function y(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,s,l){if(i===null||typeof i>"u"||y(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,s,l,c,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,b);S[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,b);S[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,b);S[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,s,l){var c=S.hasOwnProperty(i)?S[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,s,c,l)&&(s=null),l||c===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var D=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),F=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),X=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Object.assign,U;function ie(t){if(U===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var be=!1;function Ye(t,i){if(!t||be)return"";be=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){l=te}t.call(i.prototype)}else{try{throw Error()}catch(te){l=te}t()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var c=te.stack.split(`
`),h=l.stack.split(`
`),E=c.length-1,N=h.length-1;1<=E&&0<=N&&c[E]!==h[N];)N--;for(;1<=E&&0<=N;E--,N--)if(c[E]!==h[N]){if(E!==1||N!==1)do if(E--,N--,0>N||c[E]!==h[N]){var k=`
`+c[E].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=E&&0<=N);break}}}finally{be=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?ie(t):""}function Ke(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=Ye(t.type,!1),t;case 11:return t=Ye(t.type.render,!1),t;case 1:return t=Ye(t.type,!0),t;default:return""}}function ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case F:return"Portal";case A:return"Profiler";case j:return"StrictMode";case Z:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case re:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ue:return i=t.displayName||null,i!==null?i:ee(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return ee(t(i))}catch{}}return null}function ce(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ke(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ie(t){var i=ke(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function pt(t){t._valueTracker||(t._valueTracker=Ie(t))}function qt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=ke(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vt(t,i){var s=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function Pt(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=ye(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function lt(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function Bt(t,i){lt(t,i);var s=ye(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?zt(t,i.type,s):i.hasOwnProperty("defaultValue")&&zt(t,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function B(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function zt(t,i,s){(i!=="number"||dt(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var mt=Array.isArray;function xt(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ye(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function We(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function P(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(mt(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:ye(s)}}function M(t,i){var s=ye(i.value),l=ye(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function G(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var le,qe=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(le=le||document.createElement("div"),le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=le.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Te(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nt=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(t){nt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Be[i]=Be[t]})});function Se(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Be.hasOwnProperty(t)&&Be[t]?(""+i).trim():i+"px"}function Re(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=Se(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var He=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xe(t,i){if(i){if(He[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ae(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ot=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Le=null,Me=null,De=null;function ve(t){if(t=ga(t)){if(typeof Le!="function")throw Error(n(280));var i=t.stateNode;i&&(i=vo(i),Le(t.stateNode,t.type,i))}}function pe(t){Me?De?De.push(t):De=[t]:Me=t}function Ce(){if(Me){var t=Me,i=De;if(De=Me=null,ve(t),i)for(t=0;t<i.length;t++)ve(i[t])}}function it(t,i){return t(i)}function Dt(){}var St=!1;function kn(t,i,s){if(St)return t(i,s);St=!0;try{return it(t,i,s)}finally{St=!1,(Me!==null||De!==null)&&(Dt(),Ce())}}function Mn(t,i){var s=t.stateNode;if(s===null)return null;var l=vo(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var $s=!1;if(d)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){$s=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{$s=!1}function Ks(t,i,s,l,c,h,E,N,k){var te=Array.prototype.slice.call(arguments,3);try{i.apply(s,te)}catch(_e){this.onError(_e)}}var Cr=!1,Rr=null,br=!1,ri=null,Zs={onError:function(t){Cr=!0,Rr=t}};function Ka(t,i,s,l,c,h,E,N,k){Cr=!1,Rr=null,Ks.apply(Zs,arguments)}function Za(t,i,s,l,c,h,E,N,k){if(Ka.apply(this,arguments),Cr){if(Cr){var te=Rr;Cr=!1,Rr=null}else throw Error(n(198));br||(br=!0,ri=te)}}function Yn(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Qs(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Pr(t){if(Yn(t)!==t)throw Error(n(188))}function Qa(t){var i=t.alternate;if(!i){if(i=Yn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return Pr(c),t;if(h===l)return Pr(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var E=!1,N=c.child;N;){if(N===s){E=!0,s=c,l=h;break}if(N===l){E=!0,l=c,s=h;break}N=N.sibling}if(!E){for(N=h.child;N;){if(N===s){E=!0,s=h,l=c;break}if(N===l){E=!0,l=h,s=c;break}N=N.sibling}if(!E)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function Js(t){return t=Qa(t),t!==null?Ja(t):null}function Ja(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Ja(t);if(i!==null)return i;t=t.sibling}return null}var eo=e.unstable_scheduleCallback,to=e.unstable_cancelCallback,Hl=e.unstable_shouldYield,Gl=e.unstable_requestPaint,Ht=e.unstable_now,w=e.unstable_getCurrentPriorityLevel,W=e.unstable_ImmediatePriority,se=e.unstable_UserBlockingPriority,J=e.unstable_NormalPriority,$=e.unstable_LowPriority,Pe=e.unstable_IdlePriority,Ue=null,we=null;function Ve(t){if(we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:ct,tt=Math.log,Ze=Math.LN2;function ct(t){return t>>>=0,t===0?32:31-(tt(t)/Ze|0)|0}var yt=64,Ut=4194304;function It(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wt(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,E=s&268435455;if(E!==0){var N=E&~c;N!==0?l=It(N):(h&=E,h!==0&&(l=It(h)))}else E=s&~c,E!==0?l=It(E):h!==0&&(l=It(h));if(l===0)return 0;if(i!==0&&i!==l&&!(i&c)&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if(l&4&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-Oe(i),c=1<<s,l|=t[s],i&=~c;return l}function Qe(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rt(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-Oe(h),N=1<<E,k=c[E];k===-1?(!(N&s)||N&l)&&(c[E]=Qe(N,i)):k<=i&&(t.expiredLanes|=N),h&=~N}}function gt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hn(){var t=yt;return yt<<=1,!(yt&4194240)&&(yt=64),t}function vi(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Qt(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Oe(i),t[i]=s}function Lr(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-Oe(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function Lt(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Oe(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var st=0;function En(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rn,sn,ns,xi,dd,Wl=!1,no=[],Ji=null,er=null,tr=null,ea=new Map,ta=new Map,nr=[],Eg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hd(t,i){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":ea.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(i.pointerId)}}function na(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=ga(i),i!==null&&sn(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function Tg(t,i,s,l,c){switch(i){case"focusin":return Ji=na(Ji,t,i,s,l,c),!0;case"dragenter":return er=na(er,t,i,s,l,c),!0;case"mouseover":return tr=na(tr,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return ea.set(h,na(ea.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,ta.set(h,na(ta.get(h)||null,t,i,s,l,c)),!0}return!1}function pd(t){var i=Dr(t.target);if(i!==null){var s=Yn(i);if(s!==null){if(i=s.tag,i===13){if(i=Qs(s),i!==null){t.blockedOn=i,dd(t.priority,function(){ns(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function io(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=jl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);ot=l,s.target.dispatchEvent(l),ot=null}else return i=ga(s),i!==null&&sn(i),t.blockedOn=s,!1;i.shift()}return!0}function md(t,i,s){io(t)&&s.delete(i)}function wg(){Wl=!1,Ji!==null&&io(Ji)&&(Ji=null),er!==null&&io(er)&&(er=null),tr!==null&&io(tr)&&(tr=null),ea.forEach(md),ta.forEach(md)}function ia(t,i){t.blockedOn===i&&(t.blockedOn=null,Wl||(Wl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wg)))}function ra(t){function i(c){return ia(c,t)}if(0<no.length){ia(no[0],t);for(var s=1;s<no.length;s++){var l=no[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Ji!==null&&ia(Ji,t),er!==null&&ia(er,t),tr!==null&&ia(tr,t),ea.forEach(i),ta.forEach(i),s=0;s<nr.length;s++)l=nr[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<nr.length&&(s=nr[0],s.blockedOn===null);)pd(s),s.blockedOn===null&&nr.shift()}var is=D.ReactCurrentBatchConfig,ro=!0;function Ag(t,i,s,l){var c=st,h=is.transition;is.transition=null;try{st=1,Xl(t,i,s,l)}finally{st=c,is.transition=h}}function Cg(t,i,s,l){var c=st,h=is.transition;is.transition=null;try{st=4,Xl(t,i,s,l)}finally{st=c,is.transition=h}}function Xl(t,i,s,l){if(ro){var c=jl(t,i,s,l);if(c===null)uu(t,i,l,so,s),hd(t,l);else if(Tg(c,t,i,s,l))l.stopPropagation();else if(hd(t,l),i&4&&-1<Eg.indexOf(t)){for(;c!==null;){var h=ga(c);if(h!==null&&rn(h),h=jl(t,i,s,l),h===null&&uu(t,i,l,so,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else uu(t,i,l,null,s)}}var so=null;function jl(t,i,s,l){if(so=null,t=V(l),t=Dr(t),t!==null)if(i=Yn(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Qs(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return so=t,null}function gd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(w()){case W:return 1;case se:return 4;case J:case $:return 16;case Pe:return 536870912;default:return 16}default:return 16}}var ir=null,Yl=null,ao=null;function _d(){if(ao)return ao;var t,i=Yl,s=i.length,l,c="value"in ir?ir.value:ir.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var E=s-t;for(l=1;l<=E&&i[s-l]===c[h-l];l++);return ao=c.slice(t,1<l?1-l:void 0)}function oo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function vd(){return!1}function Bn(t){function i(s,l,c,h,E){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(s=t[N],this[N]=s?s(h):h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?lo:vd,this.isPropagationStopped=vd,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Bn(rs),sa=ne({},rs,{view:0,detail:0}),Rg=Bn(sa),$l,Kl,aa,uo=ne({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?($l=t.screenX-aa.screenX,Kl=t.screenY-aa.screenY):Kl=$l=0,aa=t),$l)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),xd=Bn(uo),bg=ne({},uo,{dataTransfer:0}),Pg=Bn(bg),Lg=ne({},sa,{relatedTarget:0}),Zl=Bn(Lg),Dg=ne({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ng=Bn(Dg),Ig=ne({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ug=Bn(Ig),Fg=ne({},rs,{data:0}),Sd=Bn(Fg),Og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Bg[t])?!!i[t]:!1}function Ql(){return zg}var Vg=ne({},sa,{key:function(t){if(t.key){var i=Og[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(t){return t.type==="keypress"?oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hg=Bn(Vg),Gg=ne({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=Bn(Gg),Wg=ne({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),Xg=Bn(Wg),jg=ne({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yg=Bn(jg),qg=ne({},uo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$g=Bn(qg),Kg=[9,13,27,32],Jl=d&&"CompositionEvent"in window,oa=null;d&&"documentMode"in document&&(oa=document.documentMode);var Zg=d&&"TextEvent"in window&&!oa,Md=d&&(!Jl||oa&&8<oa&&11>=oa),Ed=" ",Td=!1;function wd(t,i){switch(t){case"keyup":return Kg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ad(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function Qg(t,i){switch(t){case"compositionend":return Ad(i);case"keypress":return i.which!==32?null:(Td=!0,Ed);case"textInput":return t=i.data,t===Ed&&Td?null:t;default:return null}}function Jg(t,i){if(ss)return t==="compositionend"||!Jl&&wd(t,i)?(t=_d(),ao=Yl=ir=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Md&&i.locale!=="ko"?null:i.data;default:return null}}var e0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!e0[t.type]:i==="textarea"}function Rd(t,i,s,l){pe(l),i=mo(i,"onChange"),0<i.length&&(s=new ql("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var la=null,ua=null;function t0(t){jd(t,0)}function co(t){var i=cs(t);if(qt(i))return t}function n0(t,i){if(t==="change")return i}var bd=!1;if(d){var eu;if(d){var tu="oninput"in document;if(!tu){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),tu=typeof Pd.oninput=="function"}eu=tu}else eu=!1;bd=eu&&(!document.documentMode||9<document.documentMode)}function Ld(){la&&(la.detachEvent("onpropertychange",Dd),ua=la=null)}function Dd(t){if(t.propertyName==="value"&&co(ua)){var i=[];Rd(i,ua,t,V(t)),kn(t0,i)}}function i0(t,i,s){t==="focusin"?(Ld(),la=i,ua=s,la.attachEvent("onpropertychange",Dd)):t==="focusout"&&Ld()}function r0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return co(ua)}function s0(t,i){if(t==="click")return co(i)}function a0(t,i){if(t==="input"||t==="change")return co(i)}function o0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var si=typeof Object.is=="function"?Object.is:o0;function ca(t,i){if(si(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!si(t[c],i[c]))return!1}return!0}function Nd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Id(t,i){var s=Nd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Nd(s)}}function Ud(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ud(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Fd(){for(var t=window,i=dt();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=dt(t.document)}return i}function nu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function l0(t){var i=Fd(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Ud(s.ownerDocument.documentElement,s)){if(l!==null&&nu(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Id(s,h);var E=Id(s,l);c&&E&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var u0=d&&"documentMode"in document&&11>=document.documentMode,as=null,iu=null,fa=null,ru=!1;function Od(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ru||as==null||as!==dt(l)||(l=as,"selectionStart"in l&&nu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fa&&ca(fa,l)||(fa=l,l=mo(iu,"onSelect"),0<l.length&&(i=new ql("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=as)))}function fo(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var os={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},su={},kd={};d&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function ho(t){if(su[t])return su[t];if(!os[t])return t;var i=os[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in kd)return su[t]=i[s];return t}var Bd=ho("animationend"),zd=ho("animationiteration"),Vd=ho("animationstart"),Hd=ho("transitionend"),Gd=new Map,Wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,i){Gd.set(t,i),u(i,[t])}for(var au=0;au<Wd.length;au++){var ou=Wd[au],c0=ou.toLowerCase(),f0=ou[0].toUpperCase()+ou.slice(1);rr(c0,"on"+f0)}rr(Bd,"onAnimationEnd"),rr(zd,"onAnimationIteration"),rr(Vd,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(Hd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function Xd(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Za(l,i,void 0,t),t.currentTarget=null}function jd(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var N=l[E],k=N.instance,te=N.currentTarget;if(N=N.listener,k!==h&&c.isPropagationStopped())break e;Xd(c,N,te),h=k}else for(E=0;E<l.length;E++){if(N=l[E],k=N.instance,te=N.currentTarget,N=N.listener,k!==h&&c.isPropagationStopped())break e;Xd(c,N,te),h=k}}}if(br)throw t=ri,br=!1,ri=null,t}function Ot(t,i){var s=i[mu];s===void 0&&(s=i[mu]=new Set);var l=t+"__bubble";s.has(l)||(Yd(i,t,2,!1),s.add(l))}function lu(t,i,s){var l=0;i&&(l|=4),Yd(s,t,l,i)}var po="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[po]){t[po]=!0,r.forEach(function(s){s!=="selectionchange"&&(d0.has(s)||lu(s,!1,t),lu(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[po]||(i[po]=!0,lu("selectionchange",!1,i))}}function Yd(t,i,s,l){switch(gd(i)){case 1:var c=Ag;break;case 4:c=Cg;break;default:c=Xl}s=c.bind(null,i,s,t),c=void 0,!$s||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function uu(t,i,s,l,c){var h=l;if(!(i&1)&&!(i&2)&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var N=l.stateNode.containerInfo;if(N===c||N.nodeType===8&&N.parentNode===c)break;if(E===4)for(E=l.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===c||k.nodeType===8&&k.parentNode===c))return;E=E.return}for(;N!==null;){if(E=Dr(N),E===null)return;if(k=E.tag,k===5||k===6){l=h=E;continue e}N=N.parentNode}}l=l.return}kn(function(){var te=h,_e=V(s),xe=[];e:{var ge=Gd.get(t);if(ge!==void 0){var Fe=ql,Ge=t;switch(t){case"keypress":if(oo(s)===0)break e;case"keydown":case"keyup":Fe=Hg;break;case"focusin":Ge="focus",Fe=Zl;break;case"focusout":Ge="blur",Fe=Zl;break;case"beforeblur":case"afterblur":Fe=Zl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Pg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=Xg;break;case Bd:case zd:case Vd:Fe=Ng;break;case Hd:Fe=Yg;break;case"scroll":Fe=Rg;break;case"wheel":Fe=$g;break;case"copy":case"cut":case"paste":Fe=Ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=yd}var je=(i&4)!==0,$t=!je&&t==="scroll",q=je?ge!==null?ge+"Capture":null:ge;je=[];for(var H=te,K;H!==null;){K=H;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,q!==null&&(Ee=Mn(H,q),Ee!=null&&je.push(pa(H,Ee,K)))),$t)break;H=H.return}0<je.length&&(ge=new Fe(ge,Ge,null,s,_e),xe.push({event:ge,listeners:je}))}}if(!(i&7)){e:{if(ge=t==="mouseover"||t==="pointerover",Fe=t==="mouseout"||t==="pointerout",ge&&s!==ot&&(Ge=s.relatedTarget||s.fromElement)&&(Dr(Ge)||Ge[Ni]))break e;if((Fe||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Fe?(Ge=s.relatedTarget||s.toElement,Fe=te,Ge=Ge?Dr(Ge):null,Ge!==null&&($t=Yn(Ge),Ge!==$t||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Fe=null,Ge=te),Fe!==Ge)){if(je=xd,Ee="onMouseLeave",q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(je=yd,Ee="onPointerLeave",q="onPointerEnter",H="pointer"),$t=Fe==null?ge:cs(Fe),K=Ge==null?ge:cs(Ge),ge=new je(Ee,H+"leave",Fe,s,_e),ge.target=$t,ge.relatedTarget=K,Ee=null,Dr(_e)===te&&(je=new je(q,H+"enter",Ge,s,_e),je.target=K,je.relatedTarget=$t,Ee=je),$t=Ee,Fe&&Ge)t:{for(je=Fe,q=Ge,H=0,K=je;K;K=ls(K))H++;for(K=0,Ee=q;Ee;Ee=ls(Ee))K++;for(;0<H-K;)je=ls(je),H--;for(;0<K-H;)q=ls(q),K--;for(;H--;){if(je===q||q!==null&&je===q.alternate)break t;je=ls(je),q=ls(q)}je=null}else je=null;Fe!==null&&qd(xe,ge,Fe,je,!1),Ge!==null&&$t!==null&&qd(xe,$t,Ge,je,!0)}}e:{if(ge=te?cs(te):window,Fe=ge.nodeName&&ge.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ge.type==="file")var $e=n0;else if(Cd(ge))if(bd)$e=a0;else{$e=r0;var Je=i0}else(Fe=ge.nodeName)&&Fe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&($e=s0);if($e&&($e=$e(t,te))){Rd(xe,$e,s,_e);break e}Je&&Je(t,ge,te),t==="focusout"&&(Je=ge._wrapperState)&&Je.controlled&&ge.type==="number"&&zt(ge,"number",ge.value)}switch(Je=te?cs(te):window,t){case"focusin":(Cd(Je)||Je.contentEditable==="true")&&(as=Je,iu=te,fa=null);break;case"focusout":fa=iu=as=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,Od(xe,s,_e);break;case"selectionchange":if(u0)break;case"keydown":case"keyup":Od(xe,s,_e)}var et;if(Jl)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else ss?wd(t,s)&&(rt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(rt="onCompositionStart");rt&&(Md&&s.locale!=="ko"&&(ss||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ss&&(et=_d()):(ir=_e,Yl="value"in ir?ir.value:ir.textContent,ss=!0)),Je=mo(te,rt),0<Je.length&&(rt=new Sd(rt,t,null,s,_e),xe.push({event:rt,listeners:Je}),et?rt.data=et:(et=Ad(s),et!==null&&(rt.data=et)))),(et=Zg?Qg(t,s):Jg(t,s))&&(te=mo(te,"onBeforeInput"),0<te.length&&(_e=new Sd("onBeforeInput","beforeinput",null,s,_e),xe.push({event:_e,listeners:te}),_e.data=et))}jd(xe,i)})}function pa(t,i,s){return{instance:t,listener:i,currentTarget:s}}function mo(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Mn(t,s),h!=null&&l.unshift(pa(t,h,c)),h=Mn(t,i),h!=null&&l.push(pa(t,h,c))),t=t.return}return l}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qd(t,i,s,l,c){for(var h=i._reactName,E=[];s!==null&&s!==l;){var N=s,k=N.alternate,te=N.stateNode;if(k!==null&&k===l)break;N.tag===5&&te!==null&&(N=te,c?(k=Mn(s,h),k!=null&&E.unshift(pa(s,k,N))):c||(k=Mn(s,h),k!=null&&E.push(pa(s,k,N)))),s=s.return}E.length!==0&&t.push({event:i,listeners:E})}var h0=/\r\n?/g,p0=/\u0000|\uFFFD/g;function $d(t){return(typeof t=="string"?t:""+t).replace(h0,`
`).replace(p0,"")}function go(t,i,s){if(i=$d(i),$d(t)!==i&&s)throw Error(n(425))}function _o(){}var cu=null,fu=null;function du(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var hu=typeof setTimeout=="function"?setTimeout:void 0,m0=typeof clearTimeout=="function"?clearTimeout:void 0,Kd=typeof Promise=="function"?Promise:void 0,g0=typeof queueMicrotask=="function"?queueMicrotask:typeof Kd<"u"?function(t){return Kd.resolve(null).then(t).catch(_0)}:hu;function _0(t){setTimeout(function(){throw t})}function pu(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),ra(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);ra(i)}function sr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Zd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),Si="__reactFiber$"+us,ma="__reactProps$"+us,Ni="__reactContainer$"+us,mu="__reactEvents$"+us,v0="__reactListeners$"+us,x0="__reactHandles$"+us;function Dr(t){var i=t[Si];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Ni]||s[Si]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Zd(t);t!==null;){if(s=t[Si])return s;t=Zd(t)}return i}t=s,s=t.parentNode}return null}function ga(t){return t=t[Si]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function vo(t){return t[ma]||null}var gu=[],fs=-1;function ar(t){return{current:t}}function kt(t){0>fs||(t.current=gu[fs],gu[fs]=null,fs--)}function Ft(t,i){fs++,gu[fs]=t.current,t.current=i}var or={},pn=ar(or),Pn=ar(!1),Nr=or;function ds(t,i){var s=t.type.contextTypes;if(!s)return or;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Ln(t){return t=t.childContextTypes,t!=null}function xo(){kt(Pn),kt(pn)}function Qd(t,i,s){if(pn.current!==or)throw Error(n(168));Ft(pn,i),Ft(Pn,s)}function Jd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ce(t)||"Unknown",c));return ne({},s,l)}function So(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Nr=pn.current,Ft(pn,t),Ft(Pn,Pn.current),!0}function eh(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Jd(t,i,Nr),l.__reactInternalMemoizedMergedChildContext=t,kt(Pn),kt(pn),Ft(pn,t)):kt(Pn),Ft(Pn,s)}var Ii=null,yo=!1,_u=!1;function th(t){Ii===null?Ii=[t]:Ii.push(t)}function S0(t){yo=!0,th(t)}function lr(){if(!_u&&Ii!==null){_u=!0;var t=0,i=st;try{var s=Ii;for(st=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Ii=null,yo=!1}catch(c){throw Ii!==null&&(Ii=Ii.slice(t+1)),eo(W,lr),c}finally{st=i,_u=!1}}return null}var hs=[],ps=0,Mo=null,Eo=0,qn=[],$n=0,Ir=null,Ui=1,Fi="";function Ur(t,i){hs[ps++]=Eo,hs[ps++]=Mo,Mo=t,Eo=i}function nh(t,i,s){qn[$n++]=Ui,qn[$n++]=Fi,qn[$n++]=Ir,Ir=t;var l=Ui;t=Fi;var c=32-Oe(l)-1;l&=~(1<<c),s+=1;var h=32-Oe(i)+c;if(30<h){var E=c-c%5;h=(l&(1<<E)-1).toString(32),l>>=E,c-=E,Ui=1<<32-Oe(i)+c|s<<c|l,Fi=h+t}else Ui=1<<h|s<<c|l,Fi=t}function vu(t){t.return!==null&&(Ur(t,1),nh(t,1,0))}function xu(t){for(;t===Mo;)Mo=hs[--ps],hs[ps]=null,Eo=hs[--ps],hs[ps]=null;for(;t===Ir;)Ir=qn[--$n],qn[$n]=null,Fi=qn[--$n],qn[$n]=null,Ui=qn[--$n],qn[$n]=null}var zn=null,Vn=null,Vt=!1,ai=null;function ih(t,i){var s=Jn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function rh(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,zn=t,Vn=sr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,zn=t,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Ir!==null?{id:Ui,overflow:Fi}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Jn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,zn=t,Vn=null,!0):!1;default:return!1}}function Su(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yu(t){if(Vt){var i=Vn;if(i){var s=i;if(!rh(t,i)){if(Su(t))throw Error(n(418));i=sr(s.nextSibling);var l=zn;i&&rh(t,i)?ih(l,s):(t.flags=t.flags&-4097|2,Vt=!1,zn=t)}}else{if(Su(t))throw Error(n(418));t.flags=t.flags&-4097|2,Vt=!1,zn=t}}}function sh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zn=t}function To(t){if(t!==zn)return!1;if(!Vt)return sh(t),Vt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!du(t.type,t.memoizedProps)),i&&(i=Vn)){if(Su(t))throw ah(),Error(n(418));for(;i;)ih(t,i),i=sr(i.nextSibling)}if(sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Vn=sr(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Vn=null}}else Vn=zn?sr(t.stateNode.nextSibling):null;return!0}function ah(){for(var t=Vn;t;)t=sr(t.nextSibling)}function ms(){Vn=zn=null,Vt=!1}function Mu(t){ai===null?ai=[t]:ai.push(t)}var y0=D.ReactCurrentBatchConfig;function _a(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var N=c.refs;E===null?delete N[h]:N[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function wo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function oh(t){var i=t._init;return i(t._payload)}function lh(t){function i(q,H){if(t){var K=q.deletions;K===null?(q.deletions=[H],q.flags|=16):K.push(H)}}function s(q,H){if(!t)return null;for(;H!==null;)i(q,H),H=H.sibling;return null}function l(q,H){for(q=new Map;H!==null;)H.key!==null?q.set(H.key,H):q.set(H.index,H),H=H.sibling;return q}function c(q,H){return q=gr(q,H),q.index=0,q.sibling=null,q}function h(q,H,K){return q.index=K,t?(K=q.alternate,K!==null?(K=K.index,K<H?(q.flags|=2,H):K):(q.flags|=2,H)):(q.flags|=1048576,H)}function E(q){return t&&q.alternate===null&&(q.flags|=2),q}function N(q,H,K,Ee){return H===null||H.tag!==6?(H=hc(K,q.mode,Ee),H.return=q,H):(H=c(H,K),H.return=q,H)}function k(q,H,K,Ee){var $e=K.type;return $e===O?_e(q,H,K.props.children,Ee,K.key):H!==null&&(H.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&oh($e)===H.type)?(Ee=c(H,K.props),Ee.ref=_a(q,H,K),Ee.return=q,Ee):(Ee=$o(K.type,K.key,K.props,null,q.mode,Ee),Ee.ref=_a(q,H,K),Ee.return=q,Ee)}function te(q,H,K,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=pc(K,q.mode,Ee),H.return=q,H):(H=c(H,K.children||[]),H.return=q,H)}function _e(q,H,K,Ee,$e){return H===null||H.tag!==7?(H=Gr(K,q.mode,Ee,$e),H.return=q,H):(H=c(H,K),H.return=q,H)}function xe(q,H,K){if(typeof H=="string"&&H!==""||typeof H=="number")return H=hc(""+H,q.mode,K),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case I:return K=$o(H.type,H.key,H.props,null,q.mode,K),K.ref=_a(q,null,H),K.return=q,K;case F:return H=pc(H,q.mode,K),H.return=q,H;case oe:var Ee=H._init;return xe(q,Ee(H._payload),K)}if(mt(H)||de(H))return H=Gr(H,q.mode,K,null),H.return=q,H;wo(q,H)}return null}function ge(q,H,K,Ee){var $e=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return $e!==null?null:N(q,H,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case I:return K.key===$e?k(q,H,K,Ee):null;case F:return K.key===$e?te(q,H,K,Ee):null;case oe:return $e=K._init,ge(q,H,$e(K._payload),Ee)}if(mt(K)||de(K))return $e!==null?null:_e(q,H,K,Ee,null);wo(q,K)}return null}function Fe(q,H,K,Ee,$e){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get(K)||null,N(H,q,""+Ee,$e);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case I:return q=q.get(Ee.key===null?K:Ee.key)||null,k(H,q,Ee,$e);case F:return q=q.get(Ee.key===null?K:Ee.key)||null,te(H,q,Ee,$e);case oe:var Je=Ee._init;return Fe(q,H,K,Je(Ee._payload),$e)}if(mt(Ee)||de(Ee))return q=q.get(K)||null,_e(H,q,Ee,$e,null);wo(H,Ee)}return null}function Ge(q,H,K,Ee){for(var $e=null,Je=null,et=H,rt=H=0,ln=null;et!==null&&rt<K.length;rt++){et.index>rt?(ln=et,et=null):ln=et.sibling;var At=ge(q,et,K[rt],Ee);if(At===null){et===null&&(et=ln);break}t&&et&&At.alternate===null&&i(q,et),H=h(At,H,rt),Je===null?$e=At:Je.sibling=At,Je=At,et=ln}if(rt===K.length)return s(q,et),Vt&&Ur(q,rt),$e;if(et===null){for(;rt<K.length;rt++)et=xe(q,K[rt],Ee),et!==null&&(H=h(et,H,rt),Je===null?$e=et:Je.sibling=et,Je=et);return Vt&&Ur(q,rt),$e}for(et=l(q,et);rt<K.length;rt++)ln=Fe(et,q,rt,K[rt],Ee),ln!==null&&(t&&ln.alternate!==null&&et.delete(ln.key===null?rt:ln.key),H=h(ln,H,rt),Je===null?$e=ln:Je.sibling=ln,Je=ln);return t&&et.forEach(function(_r){return i(q,_r)}),Vt&&Ur(q,rt),$e}function je(q,H,K,Ee){var $e=de(K);if(typeof $e!="function")throw Error(n(150));if(K=$e.call(K),K==null)throw Error(n(151));for(var Je=$e=null,et=H,rt=H=0,ln=null,At=K.next();et!==null&&!At.done;rt++,At=K.next()){et.index>rt?(ln=et,et=null):ln=et.sibling;var _r=ge(q,et,At.value,Ee);if(_r===null){et===null&&(et=ln);break}t&&et&&_r.alternate===null&&i(q,et),H=h(_r,H,rt),Je===null?$e=_r:Je.sibling=_r,Je=_r,et=ln}if(At.done)return s(q,et),Vt&&Ur(q,rt),$e;if(et===null){for(;!At.done;rt++,At=K.next())At=xe(q,At.value,Ee),At!==null&&(H=h(At,H,rt),Je===null?$e=At:Je.sibling=At,Je=At);return Vt&&Ur(q,rt),$e}for(et=l(q,et);!At.done;rt++,At=K.next())At=Fe(et,q,rt,At.value,Ee),At!==null&&(t&&At.alternate!==null&&et.delete(At.key===null?rt:At.key),H=h(At,H,rt),Je===null?$e=At:Je.sibling=At,Je=At);return t&&et.forEach(function(J0){return i(q,J0)}),Vt&&Ur(q,rt),$e}function $t(q,H,K,Ee){if(typeof K=="object"&&K!==null&&K.type===O&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case I:e:{for(var $e=K.key,Je=H;Je!==null;){if(Je.key===$e){if($e=K.type,$e===O){if(Je.tag===7){s(q,Je.sibling),H=c(Je,K.props.children),H.return=q,q=H;break e}}else if(Je.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&oh($e)===Je.type){s(q,Je.sibling),H=c(Je,K.props),H.ref=_a(q,Je,K),H.return=q,q=H;break e}s(q,Je);break}else i(q,Je);Je=Je.sibling}K.type===O?(H=Gr(K.props.children,q.mode,Ee,K.key),H.return=q,q=H):(Ee=$o(K.type,K.key,K.props,null,q.mode,Ee),Ee.ref=_a(q,H,K),Ee.return=q,q=Ee)}return E(q);case F:e:{for(Je=K.key;H!==null;){if(H.key===Je)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){s(q,H.sibling),H=c(H,K.children||[]),H.return=q,q=H;break e}else{s(q,H);break}else i(q,H);H=H.sibling}H=pc(K,q.mode,Ee),H.return=q,q=H}return E(q);case oe:return Je=K._init,$t(q,H,Je(K._payload),Ee)}if(mt(K))return Ge(q,H,K,Ee);if(de(K))return je(q,H,K,Ee);wo(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,H!==null&&H.tag===6?(s(q,H.sibling),H=c(H,K),H.return=q,q=H):(s(q,H),H=hc(K,q.mode,Ee),H.return=q,q=H),E(q)):s(q,H)}return $t}var gs=lh(!0),uh=lh(!1),Ao=ar(null),Co=null,_s=null,Eu=null;function Tu(){Eu=_s=Co=null}function wu(t){var i=Ao.current;kt(Ao),t._currentValue=i}function Au(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function vs(t,i){Co=t,Eu=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(Dn=!0),t.firstContext=null)}function Kn(t){var i=t._currentValue;if(Eu!==t)if(t={context:t,memoizedValue:i,next:null},_s===null){if(Co===null)throw Error(n(308));_s=t,Co.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return i}var Fr=null;function Cu(t){Fr===null?Fr=[t]:Fr.push(t)}function ch(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,Cu(i)):(s.next=c.next,c.next=s),i.interleaved=s,Oi(t,l)}function Oi(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var ur=!1;function Ru(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,Mt&2){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Oi(t,s)}return c=l.interleaved,c===null?(i.next=i,Cu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Oi(t,s)}function Ro(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Lt(t,s)}}function dh(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var E={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=E:h=h.next=E,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function bo(t,i,s,l){var c=t.updateQueue;ur=!1;var h=c.firstBaseUpdate,E=c.lastBaseUpdate,N=c.shared.pending;if(N!==null){c.shared.pending=null;var k=N,te=k.next;k.next=null,E===null?h=te:E.next=te,E=k;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,N=_e.lastBaseUpdate,N!==E&&(N===null?_e.firstBaseUpdate=te:N.next=te,_e.lastBaseUpdate=k))}if(h!==null){var xe=c.baseState;E=0,_e=te=k=null,N=h;do{var ge=N.lane,Fe=N.eventTime;if((l&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Fe,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Ge=t,je=N;switch(ge=i,Fe=s,je.tag){case 1:if(Ge=je.payload,typeof Ge=="function"){xe=Ge.call(Fe,xe,ge);break e}xe=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=je.payload,ge=typeof Ge=="function"?Ge.call(Fe,xe,ge):Ge,ge==null)break e;xe=ne({},xe,ge);break e;case 2:ur=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,ge=c.effects,ge===null?c.effects=[N]:ge.push(N))}else Fe={eventTime:Fe,lane:ge,tag:N.tag,payload:N.payload,callback:N.callback,next:null},_e===null?(te=_e=Fe,k=xe):_e=_e.next=Fe,E|=ge;if(N=N.next,N===null){if(N=c.shared.pending,N===null)break;ge=N,N=ge.next,ge.next=null,c.lastBaseUpdate=ge,c.shared.pending=null}}while(!0);if(_e===null&&(k=xe),c.baseState=k,c.firstBaseUpdate=te,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do E|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Br|=E,t.lanes=E,t.memoizedState=xe}}function hh(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var va={},yi=ar(va),xa=ar(va),Sa=ar(va);function Or(t){if(t===va)throw Error(n(174));return t}function bu(t,i){switch(Ft(Sa,i),Ft(xa,t),Ft(yi,va),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=me(i,t)}kt(yi),Ft(yi,i)}function xs(){kt(yi),kt(xa),kt(Sa)}function ph(t){Or(Sa.current);var i=Or(yi.current),s=me(i,t.type);i!==s&&(Ft(xa,t),Ft(yi,s))}function Pu(t){xa.current===t&&(kt(yi),kt(xa))}var Gt=ar(0);function Po(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Lu=[];function Du(){for(var t=0;t<Lu.length;t++)Lu[t]._workInProgressVersionPrimary=null;Lu.length=0}var Lo=D.ReactCurrentDispatcher,Nu=D.ReactCurrentBatchConfig,kr=0,Wt=null,Jt=null,an=null,Do=!1,ya=!1,Ma=0,M0=0;function mn(){throw Error(n(321))}function Iu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!si(t[s],i[s]))return!1;return!0}function Uu(t,i,s,l,c,h){if(kr=h,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Lo.current=t===null||t.memoizedState===null?A0:C0,t=s(l,c),ya){h=0;do{if(ya=!1,Ma=0,25<=h)throw Error(n(301));h+=1,an=Jt=null,i.updateQueue=null,Lo.current=R0,t=s(l,c)}while(ya)}if(Lo.current=Uo,i=Jt!==null&&Jt.next!==null,kr=0,an=Jt=Wt=null,Do=!1,i)throw Error(n(300));return t}function Fu(){var t=Ma!==0;return Ma=0,t}function Mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Wt.memoizedState=an=t:an=an.next=t,an}function Zn(){if(Jt===null){var t=Wt.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var i=an===null?Wt.memoizedState:an.next;if(i!==null)an=i,Jt=t;else{if(t===null)throw Error(n(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},an===null?Wt.memoizedState=an=t:an=an.next=t}return an}function Ea(t,i){return typeof i=="function"?i(t):i}function Ou(t){var i=Zn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Jt,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var E=c.next;c.next=h.next,h.next=E}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var N=E=null,k=null,te=h;do{var _e=te.lane;if((kr&_e)===_e)k!==null&&(k=k.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:t(l,te.action);else{var xe={lane:_e,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};k===null?(N=k=xe,E=l):k=k.next=xe,Wt.lanes|=_e,Br|=_e}te=te.next}while(te!==null&&te!==h);k===null?E=l:k.next=N,si(l,i.memoizedState)||(Dn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=k,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,Wt.lanes|=h,Br|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function ku(t){var i=Zn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var E=c=c.next;do h=t(h,E.action),E=E.next;while(E!==c);si(h,i.memoizedState)||(Dn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function mh(){}function gh(t,i){var s=Wt,l=Zn(),c=i(),h=!si(l.memoizedState,c);if(h&&(l.memoizedState=c,Dn=!0),l=l.queue,Bu(xh.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||an!==null&&an.memoizedState.tag&1){if(s.flags|=2048,Ta(9,vh.bind(null,s,l,c,i),void 0,null),on===null)throw Error(n(349));kr&30||_h(s,i,c)}return c}function _h(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function vh(t,i,s,l){i.value=s,i.getSnapshot=l,Sh(i)&&yh(t)}function xh(t,i,s){return s(function(){Sh(i)&&yh(t)})}function Sh(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!si(t,s)}catch{return!0}}function yh(t){var i=Oi(t,1);i!==null&&ci(i,t,1,-1)}function Mh(t){var i=Mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},i.queue=t,t=t.dispatch=w0.bind(null,Wt,t),[i.memoizedState,t]}function Ta(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function Eh(){return Zn().memoizedState}function No(t,i,s,l){var c=Mi();Wt.flags|=t,c.memoizedState=Ta(1|i,s,void 0,l===void 0?null:l)}function Io(t,i,s,l){var c=Zn();l=l===void 0?null:l;var h=void 0;if(Jt!==null){var E=Jt.memoizedState;if(h=E.destroy,l!==null&&Iu(l,E.deps)){c.memoizedState=Ta(i,s,h,l);return}}Wt.flags|=t,c.memoizedState=Ta(1|i,s,h,l)}function Th(t,i){return No(8390656,8,t,i)}function Bu(t,i){return Io(2048,8,t,i)}function wh(t,i){return Io(4,2,t,i)}function Ah(t,i){return Io(4,4,t,i)}function Ch(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Rh(t,i,s){return s=s!=null?s.concat([t]):null,Io(4,4,Ch.bind(null,i,t),s)}function zu(){}function bh(t,i){var s=Zn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Iu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Ph(t,i){var s=Zn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Iu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function Lh(t,i,s){return kr&21?(si(s,i)||(s=hn(),Wt.lanes|=s,Br|=s,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,Dn=!0),t.memoizedState=s)}function E0(t,i){var s=st;st=s!==0&&4>s?s:4,t(!0);var l=Nu.transition;Nu.transition={};try{t(!1),i()}finally{st=s,Nu.transition=l}}function Dh(){return Zn().memoizedState}function T0(t,i,s){var l=pr(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},Nh(t))Ih(i,s);else if(s=ch(t,i,s,l),s!==null){var c=wn();ci(s,t,l,c),Uh(s,i,l)}}function w0(t,i,s){var l=pr(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(Nh(t))Ih(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,N=h(E,s);if(c.hasEagerState=!0,c.eagerState=N,si(N,E)){var k=i.interleaved;k===null?(c.next=c,Cu(i)):(c.next=k.next,k.next=c),i.interleaved=c;return}}catch{}finally{}s=ch(t,i,c,l),s!==null&&(c=wn(),ci(s,t,l,c),Uh(s,i,l))}}function Nh(t){var i=t.alternate;return t===Wt||i!==null&&i===Wt}function Ih(t,i){ya=Do=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Uh(t,i,s){if(s&4194240){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Lt(t,s)}}var Uo={readContext:Kn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},A0={readContext:Kn,useCallback:function(t,i){return Mi().memoizedState=[t,i===void 0?null:i],t},useContext:Kn,useEffect:Th,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,No(4194308,4,Ch.bind(null,i,t),s)},useLayoutEffect:function(t,i){return No(4194308,4,t,i)},useInsertionEffect:function(t,i){return No(4,2,t,i)},useMemo:function(t,i){var s=Mi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=Mi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=T0.bind(null,Wt,t),[l.memoizedState,t]},useRef:function(t){var i=Mi();return t={current:t},i.memoizedState=t},useState:Mh,useDebugValue:zu,useDeferredValue:function(t){return Mi().memoizedState=t},useTransition:function(){var t=Mh(!1),i=t[0];return t=E0.bind(null,t[1]),Mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Wt,c=Mi();if(Vt){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),on===null)throw Error(n(349));kr&30||_h(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,Th(xh.bind(null,l,h,t),[t]),l.flags|=2048,Ta(9,vh.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=Mi(),i=on.identifierPrefix;if(Vt){var s=Fi,l=Ui;s=(l&~(1<<32-Oe(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=Ma++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=M0++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},C0={readContext:Kn,useCallback:bh,useContext:Kn,useEffect:Bu,useImperativeHandle:Rh,useInsertionEffect:wh,useLayoutEffect:Ah,useMemo:Ph,useReducer:Ou,useRef:Eh,useState:function(){return Ou(Ea)},useDebugValue:zu,useDeferredValue:function(t){var i=Zn();return Lh(i,Jt.memoizedState,t)},useTransition:function(){var t=Ou(Ea)[0],i=Zn().memoizedState;return[t,i]},useMutableSource:mh,useSyncExternalStore:gh,useId:Dh,unstable_isNewReconciler:!1},R0={readContext:Kn,useCallback:bh,useContext:Kn,useEffect:Bu,useImperativeHandle:Rh,useInsertionEffect:wh,useLayoutEffect:Ah,useMemo:Ph,useReducer:ku,useRef:Eh,useState:function(){return ku(Ea)},useDebugValue:zu,useDeferredValue:function(t){var i=Zn();return Jt===null?i.memoizedState=t:Lh(i,Jt.memoizedState,t)},useTransition:function(){var t=ku(Ea)[0],i=Zn().memoizedState;return[t,i]},useMutableSource:mh,useSyncExternalStore:gh,useId:Dh,unstable_isNewReconciler:!1};function oi(t,i){if(t&&t.defaultProps){i=ne({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Vu(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:ne({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Fo={isMounted:function(t){return(t=t._reactInternals)?Yn(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=wn(),c=pr(t),h=ki(l,c);h.payload=i,s!=null&&(h.callback=s),i=cr(t,h,c),i!==null&&(ci(i,t,c,l),Ro(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=wn(),c=pr(t),h=ki(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=cr(t,h,c),i!==null&&(ci(i,t,c,l),Ro(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=wn(),l=pr(t),c=ki(s,l);c.tag=2,i!=null&&(c.callback=i),i=cr(t,c,l),i!==null&&(ci(i,t,l,s),Ro(i,t,l))}};function Fh(t,i,s,l,c,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!ca(s,l)||!ca(c,h):!0}function Oh(t,i,s){var l=!1,c=or,h=i.contextType;return typeof h=="object"&&h!==null?h=Kn(h):(c=Ln(i)?Nr:pn.current,l=i.contextTypes,h=(l=l!=null)?ds(t,c):or),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function kh(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Fo.enqueueReplaceState(i,i.state,null)}function Hu(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},Ru(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Kn(h):(h=Ln(i)?Nr:pn.current,c.context=ds(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Vu(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Fo.enqueueReplaceState(c,c.state,null),bo(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,i){try{var s="",l=i;do s+=Ke(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Gu(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Wu(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var b0=typeof WeakMap=="function"?WeakMap:Map;function Bh(t,i,s){s=ki(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Go||(Go=!0,sc=l),Wu(t,i)},s}function zh(t,i,s){s=ki(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){Wu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Wu(t,i),typeof l!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),s}function Vh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new b0;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=G0.bind(null,t,i,s),i.then(t,t))}function Hh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Gh(t,i,s,l,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=ki(-1,1),i.tag=2,cr(s,i,1))),s.lanes|=1),t)}var P0=D.ReactCurrentOwner,Dn=!1;function Tn(t,i,s,l){i.child=t===null?uh(i,null,s,l):gs(i,t.child,s,l)}function Wh(t,i,s,l,c){s=s.render;var h=i.ref;return vs(i,c),l=Uu(t,i,s,l,h,c),s=Fu(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Bi(t,i,c)):(Vt&&s&&vu(i),i.flags|=1,Tn(t,i,l,c),i.child)}function Xh(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!dc(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,jh(t,i,h,l,c)):(t=$o(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&c)){var E=h.memoizedProps;if(s=s.compare,s=s!==null?s:ca,s(E,l)&&t.ref===i.ref)return Bi(t,i,c)}return i.flags|=1,t=gr(h,l),t.ref=i.ref,t.return=i,i.child=t}function jh(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(ca(h,l)&&t.ref===i.ref)if(Dn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)t.flags&131072&&(Dn=!0);else return i.lanes=t.lanes,Bi(t,i,c)}return Xu(t,i,s,l,c)}function Yh(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Ms,Hn),Hn|=s;else{if(!(s&1073741824))return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ft(Ms,Hn),Hn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Ft(Ms,Hn),Hn|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Ft(Ms,Hn),Hn|=l;return Tn(t,i,c,s),i.child}function qh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Xu(t,i,s,l,c){var h=Ln(s)?Nr:pn.current;return h=ds(i,h),vs(i,c),s=Uu(t,i,s,l,h,c),l=Fu(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Bi(t,i,c)):(Vt&&l&&vu(i),i.flags|=1,Tn(t,i,s,c),i.child)}function $h(t,i,s,l,c){if(Ln(s)){var h=!0;So(i)}else h=!1;if(vs(i,c),i.stateNode===null)ko(t,i),Oh(i,s,l),Hu(i,s,l,c),l=!0;else if(t===null){var E=i.stateNode,N=i.memoizedProps;E.props=N;var k=E.context,te=s.contextType;typeof te=="object"&&te!==null?te=Kn(te):(te=Ln(s)?Nr:pn.current,te=ds(i,te));var _e=s.getDerivedStateFromProps,xe=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==l||k!==te)&&kh(i,E,l,te),ur=!1;var ge=i.memoizedState;E.state=ge,bo(i,l,E,c),k=i.memoizedState,N!==l||ge!==k||Pn.current||ur?(typeof _e=="function"&&(Vu(i,s,_e,l),k=i.memoizedState),(N=ur||Fh(i,s,N,l,ge,k,te))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),E.props=l,E.state=k,E.context=te,l=N):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,fh(t,i),N=i.memoizedProps,te=i.type===i.elementType?N:oi(i.type,N),E.props=te,xe=i.pendingProps,ge=E.context,k=s.contextType,typeof k=="object"&&k!==null?k=Kn(k):(k=Ln(s)?Nr:pn.current,k=ds(i,k));var Fe=s.getDerivedStateFromProps;(_e=typeof Fe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==xe||ge!==k)&&kh(i,E,l,k),ur=!1,ge=i.memoizedState,E.state=ge,bo(i,l,E,c);var Ge=i.memoizedState;N!==xe||ge!==Ge||Pn.current||ur?(typeof Fe=="function"&&(Vu(i,s,Fe,l),Ge=i.memoizedState),(te=ur||Fh(i,s,te,l,ge,Ge,k)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,Ge,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,Ge,k)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ge),E.props=l,E.state=Ge,E.context=k,l=te):(typeof E.componentDidUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return ju(t,i,s,l,h,c)}function ju(t,i,s,l,c,h){qh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return c&&eh(i,s,!1),Bi(t,i,h);l=i.stateNode,P0.current=i;var N=E&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=gs(i,t.child,null,h),i.child=gs(i,null,N,h)):Tn(t,i,N,h),i.memoizedState=l.state,c&&eh(i,s,!0),i.child}function Kh(t){var i=t.stateNode;i.pendingContext?Qd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Qd(t,i.context,!1),bu(t,i.containerInfo)}function Zh(t,i,s,l,c){return ms(),Mu(c),i.flags|=256,Tn(t,i,s,l),i.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qh(t,i,s){var l=i.pendingProps,c=Gt.current,h=!1,E=(i.flags&128)!==0,N;if((N=E)||(N=t!==null&&t.memoizedState===null?!1:(c&2)!==0),N?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Ft(Gt,c&1),t===null)return yu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},!(l&1)&&h!==null?(h.childLanes=0,h.pendingProps=E):h=Ko(E,l,0,null),t=Gr(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=qu(s),i.memoizedState=Yu,t):$u(i,E));if(c=t.memoizedState,c!==null&&(N=c.dehydrated,N!==null))return L0(t,i,E,l,N,c,s);if(h){h=l.fallback,E=i.mode,c=t.child,N=c.sibling;var k={mode:"hidden",children:l.children};return!(E&1)&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=gr(c,k),l.subtreeFlags=c.subtreeFlags&14680064),N!==null?h=gr(N,h):(h=Gr(h,E,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?qu(s):{baseLanes:E.baseLanes|s,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~s,i.memoizedState=Yu,l}return h=t.child,t=h.sibling,l=gr(h,{mode:"visible",children:l.children}),!(i.mode&1)&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function $u(t,i){return i=Ko({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Oo(t,i,s,l){return l!==null&&Mu(l),gs(i,t.child,null,s),t=$u(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function L0(t,i,s,l,c,h,E){if(s)return i.flags&256?(i.flags&=-257,l=Gu(Error(n(422))),Oo(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Ko({mode:"visible",children:l.children},c,0,null),h=Gr(h,c,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,i.mode&1&&gs(i,t.child,null,E),i.child.memoizedState=qu(E),i.memoizedState=Yu,h);if(!(i.mode&1))return Oo(t,i,E,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var N=l.dgst;return l=N,h=Error(n(419)),l=Gu(h,l,void 0),Oo(t,i,E,l)}if(N=(E&t.childLanes)!==0,Dn||N){if(l=on,l!==null){switch(E&-E){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(l.suspendedLanes|E)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Oi(t,c),ci(l,t,c,-1))}return fc(),l=Gu(Error(n(421))),Oo(t,i,E,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=W0.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Vn=sr(c.nextSibling),zn=i,Vt=!0,ai=null,t!==null&&(qn[$n++]=Ui,qn[$n++]=Fi,qn[$n++]=Ir,Ui=t.id,Fi=t.overflow,Ir=i),i=$u(i,l.children),i.flags|=4096,i)}function Jh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Au(t.return,i,s)}function Ku(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function ep(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(Tn(t,i,l.children,s),l=Gt.current,l&2)l=l&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jh(t,s,i);else if(t.tag===19)Jh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ft(Gt,l),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&Po(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Ku(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Po(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Ku(i,!0,s,null,h);break;case"together":Ku(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ko(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Bi(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Br|=i.lanes,!(s&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=gr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=gr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function D0(t,i,s){switch(i.tag){case 3:Kh(i),ms();break;case 5:ph(i);break;case 1:Ln(i.type)&&So(i);break;case 4:bu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Ft(Ao,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ft(Gt,Gt.current&1),i.flags|=128,null):s&i.child.childLanes?Qh(t,i,s):(Ft(Gt,Gt.current&1),t=Bi(t,i,s),t!==null?t.sibling:null);Ft(Gt,Gt.current&1);break;case 19:if(l=(s&i.childLanes)!==0,t.flags&128){if(l)return ep(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ft(Gt,Gt.current),l)break;return null;case 22:case 23:return i.lanes=0,Yh(t,i,s)}return Bi(t,i,s)}var tp,Zu,np,ip;tp=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Zu=function(){},np=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Or(yi.current);var h=null;switch(s){case"input":c=vt(t,c),l=vt(t,l),h=[];break;case"select":c=ne({},c,{value:void 0}),l=ne({},l,{value:void 0}),h=[];break;case"textarea":c=We(t,c),l=We(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=_o)}Xe(s,l);var E;s=null;for(te in c)if(!l.hasOwnProperty(te)&&c.hasOwnProperty(te)&&c[te]!=null)if(te==="style"){var N=c[te];for(E in N)N.hasOwnProperty(E)&&(s||(s={}),s[E]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(o.hasOwnProperty(te)?h||(h=[]):(h=h||[]).push(te,null));for(te in l){var k=l[te];if(N=c!=null?c[te]:void 0,l.hasOwnProperty(te)&&k!==N&&(k!=null||N!=null))if(te==="style")if(N){for(E in N)!N.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(s||(s={}),s[E]="");for(E in k)k.hasOwnProperty(E)&&N[E]!==k[E]&&(s||(s={}),s[E]=k[E])}else s||(h||(h=[]),h.push(te,s)),s=k;else te==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,N=N?N.__html:void 0,k!=null&&N!==k&&(h=h||[]).push(te,k)):te==="children"?typeof k!="string"&&typeof k!="number"||(h=h||[]).push(te,""+k):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(o.hasOwnProperty(te)?(k!=null&&te==="onScroll"&&Ot("scroll",t),h||N===k||(h=[])):(h=h||[]).push(te,k))}s&&(h=h||[]).push("style",s);var te=h;(i.updateQueue=te)&&(i.flags|=4)}},ip=function(t,i,s,l){s!==l&&(i.flags|=4)};function wa(t,i){if(!Vt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function gn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function N0(t,i,s){var l=i.pendingProps;switch(xu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Ln(i.type)&&xo(),gn(i),null;case 3:return l=i.stateNode,xs(),kt(Pn),kt(pn),Du(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(To(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,ai!==null&&(lc(ai),ai=null))),Zu(t,i),gn(i),null;case 5:Pu(i);var c=Or(Sa.current);if(s=i.type,t!==null&&i.stateNode!=null)np(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return gn(i),null}if(t=Or(yi.current),To(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[Si]=i,l[ma]=h,t=(i.mode&1)!==0,s){case"dialog":Ot("cancel",l),Ot("close",l);break;case"iframe":case"object":case"embed":Ot("load",l);break;case"video":case"audio":for(c=0;c<da.length;c++)Ot(da[c],l);break;case"source":Ot("error",l);break;case"img":case"image":case"link":Ot("error",l),Ot("load",l);break;case"details":Ot("toggle",l);break;case"input":Pt(l,h),Ot("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ot("invalid",l);break;case"textarea":P(l,h),Ot("invalid",l)}Xe(s,h),c=null;for(var E in h)if(h.hasOwnProperty(E)){var N=h[E];E==="children"?typeof N=="string"?l.textContent!==N&&(h.suppressHydrationWarning!==!0&&go(l.textContent,N,t),c=["children",N]):typeof N=="number"&&l.textContent!==""+N&&(h.suppressHydrationWarning!==!0&&go(l.textContent,N,t),c=["children",""+N]):o.hasOwnProperty(E)&&N!=null&&E==="onScroll"&&Ot("scroll",l)}switch(s){case"input":pt(l),B(l,h,!0);break;case"textarea":pt(l),G(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=_o)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(s,{is:l.is}):(t=E.createElement(s),s==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,s),t[Si]=i,t[ma]=l,tp(t,i,!1,!1),i.stateNode=t;e:{switch(E=Ae(s,l),s){case"dialog":Ot("cancel",t),Ot("close",t),c=l;break;case"iframe":case"object":case"embed":Ot("load",t),c=l;break;case"video":case"audio":for(c=0;c<da.length;c++)Ot(da[c],t);c=l;break;case"source":Ot("error",t),c=l;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),c=l;break;case"details":Ot("toggle",t),c=l;break;case"input":Pt(t,l),c=vt(t,l),Ot("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=ne({},l,{value:void 0}),Ot("invalid",t);break;case"textarea":P(t,l),c=We(t,l),Ot("invalid",t);break;default:c=l}Xe(s,c),N=c;for(h in N)if(N.hasOwnProperty(h)){var k=N[h];h==="style"?Re(t,k):h==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&qe(t,k)):h==="children"?typeof k=="string"?(s!=="textarea"||k!=="")&&Te(t,k):typeof k=="number"&&Te(t,""+k):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?k!=null&&h==="onScroll"&&Ot("scroll",t):k!=null&&L(t,h,k,E))}switch(s){case"input":pt(t),B(t,l,!1);break;case"textarea":pt(t),G(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ye(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?xt(t,!!l.multiple,h,!1):l.defaultValue!=null&&xt(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=_o)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(t&&i.stateNode!=null)ip(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Or(Sa.current),Or(yi.current),To(i)){if(l=i.stateNode,s=i.memoizedProps,l[Si]=i,(h=l.nodeValue!==s)&&(t=zn,t!==null))switch(t.tag){case 3:go(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[Si]=i,i.stateNode=l}return gn(i),null;case 13:if(kt(Gt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vt&&Vn!==null&&i.mode&1&&!(i.flags&128))ah(),ms(),i.flags|=98560,h=!1;else if(h=To(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Si]=i}else ms(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;gn(i),h=!1}else ai!==null&&(lc(ai),ai=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,i.mode&1&&(t===null||Gt.current&1?en===0&&(en=3):fc())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return xs(),Zu(t,i),t===null&&ha(i.stateNode.containerInfo),gn(i),null;case 10:return wu(i.type._context),gn(i),null;case 17:return Ln(i.type)&&xo(),gn(i),null;case 19:if(kt(Gt),h=i.memoizedState,h===null)return gn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)wa(h,!1);else{if(en!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(E=Po(t),E!==null){for(i.flags|=128,wa(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Ft(Gt,Gt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Ht()>Es&&(i.flags|=128,l=!0,wa(h,!1),i.lanes=4194304)}else{if(!l)if(t=Po(E),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),wa(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Vt)return gn(i),null}else 2*Ht()-h.renderingStartTime>Es&&s!==1073741824&&(i.flags|=128,l=!0,wa(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(s=h.last,s!==null?s.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ht(),i.sibling=null,s=Gt.current,Ft(Gt,l?s&1|2:s&1),i):(gn(i),null);case 22:case 23:return cc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&i.mode&1?Hn&1073741824&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function I0(t,i){switch(xu(i),i.tag){case 1:return Ln(i.type)&&xo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xs(),kt(Pn),kt(pn),Du(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return Pu(i),null;case 13:if(kt(Gt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return kt(Gt),null;case 4:return xs(),null;case 10:return wu(i.type._context),null;case 22:case 23:return cc(),null;case 24:return null;default:return null}}var Bo=!1,_n=!1,U0=typeof WeakSet=="function"?WeakSet:Set,ze=null;function ys(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){jt(t,i,l)}else s.current=null}function Qu(t,i,s){try{s()}catch(l){jt(t,i,l)}}var rp=!1;function F0(t,i){if(cu=ro,t=Fd(),nu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var E=0,N=-1,k=-1,te=0,_e=0,xe=t,ge=null;t:for(;;){for(var Fe;xe!==s||c!==0&&xe.nodeType!==3||(N=E+c),xe!==h||l!==0&&xe.nodeType!==3||(k=E+l),xe.nodeType===3&&(E+=xe.nodeValue.length),(Fe=xe.firstChild)!==null;)ge=xe,xe=Fe;for(;;){if(xe===t)break t;if(ge===s&&++te===c&&(N=E),ge===h&&++_e===l&&(k=E),(Fe=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Fe}s=N===-1||k===-1?null:{start:N,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(fu={focusedElem:t,selectionRange:s},ro=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var Ge=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var je=Ge.memoizedProps,$t=Ge.memoizedState,q=i.stateNode,H=q.getSnapshotBeforeUpdate(i.elementType===i.type?je:oi(i.type,je),$t);q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){jt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return Ge=rp,rp=!1,Ge}function Aa(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Qu(i,s,h)}c=c.next}while(c!==l)}}function zo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Ju(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function sp(t){var i=t.alternate;i!==null&&(t.alternate=null,sp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Si],delete i[ma],delete i[mu],delete i[v0],delete i[x0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ap(t){return t.tag===5||t.tag===3||t.tag===4}function op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ap(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ec(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=_o));else if(l!==4&&(t=t.child,t!==null))for(ec(t,i,s),t=t.sibling;t!==null;)ec(t,i,s),t=t.sibling}function tc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(tc(t,i,s),t=t.sibling;t!==null;)tc(t,i,s),t=t.sibling}var cn=null,li=!1;function fr(t,i,s){for(s=s.child;s!==null;)lp(t,i,s),s=s.sibling}function lp(t,i,s){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Ue,s)}catch{}switch(s.tag){case 5:_n||ys(s,i);case 6:var l=cn,c=li;cn=null,fr(t,i,s),cn=l,li=c,cn!==null&&(li?(t=cn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):cn.removeChild(s.stateNode));break;case 18:cn!==null&&(li?(t=cn,s=s.stateNode,t.nodeType===8?pu(t.parentNode,s):t.nodeType===1&&pu(t,s),ra(t)):pu(cn,s.stateNode));break;case 4:l=cn,c=li,cn=s.stateNode.containerInfo,li=!0,fr(t,i,s),cn=l,li=c;break;case 0:case 11:case 14:case 15:if(!_n&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,E=h.destroy;h=h.tag,E!==void 0&&(h&2||h&4)&&Qu(s,i,E),c=c.next}while(c!==l)}fr(t,i,s);break;case 1:if(!_n&&(ys(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(N){jt(s,i,N)}fr(t,i,s);break;case 21:fr(t,i,s);break;case 22:s.mode&1?(_n=(l=_n)||s.memoizedState!==null,fr(t,i,s),_n=l):fr(t,i,s);break;default:fr(t,i,s)}}function up(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new U0),i.forEach(function(l){var c=X0.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function ui(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,E=i,N=E;e:for(;N!==null;){switch(N.tag){case 5:cn=N.stateNode,li=!1;break e;case 3:cn=N.stateNode.containerInfo,li=!0;break e;case 4:cn=N.stateNode.containerInfo,li=!0;break e}N=N.return}if(cn===null)throw Error(n(160));lp(h,E,c),cn=null,li=!1;var k=c.alternate;k!==null&&(k.return=null),c.return=null}catch(te){jt(c,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)cp(i,t),i=i.sibling}function cp(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ui(i,t),Ei(t),l&4){try{Aa(3,t,t.return),zo(3,t)}catch(je){jt(t,t.return,je)}try{Aa(5,t,t.return)}catch(je){jt(t,t.return,je)}}break;case 1:ui(i,t),Ei(t),l&512&&s!==null&&ys(s,s.return);break;case 5:if(ui(i,t),Ei(t),l&512&&s!==null&&ys(s,s.return),t.flags&32){var c=t.stateNode;try{Te(c,"")}catch(je){jt(t,t.return,je)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,E=s!==null?s.memoizedProps:h,N=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{N==="input"&&h.type==="radio"&&h.name!=null&&lt(c,h),Ae(N,E);var te=Ae(N,h);for(E=0;E<k.length;E+=2){var _e=k[E],xe=k[E+1];_e==="style"?Re(c,xe):_e==="dangerouslySetInnerHTML"?qe(c,xe):_e==="children"?Te(c,xe):L(c,_e,xe,te)}switch(N){case"input":Bt(c,h);break;case"textarea":M(c,h);break;case"select":var ge=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Fe=h.value;Fe!=null?xt(c,!!h.multiple,Fe,!1):ge!==!!h.multiple&&(h.defaultValue!=null?xt(c,!!h.multiple,h.defaultValue,!0):xt(c,!!h.multiple,h.multiple?[]:"",!1))}c[ma]=h}catch(je){jt(t,t.return,je)}}break;case 6:if(ui(i,t),Ei(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(je){jt(t,t.return,je)}}break;case 3:if(ui(i,t),Ei(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ra(i.containerInfo)}catch(je){jt(t,t.return,je)}break;case 4:ui(i,t),Ei(t);break;case 13:ui(i,t),Ei(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(rc=Ht())),l&4&&up(t);break;case 22:if(_e=s!==null&&s.memoizedState!==null,t.mode&1?(_n=(te=_n)||_e,ui(i,t),_n=te):ui(i,t),Ei(t),l&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!_e&&t.mode&1)for(ze=t,_e=t.child;_e!==null;){for(xe=ze=_e;ze!==null;){switch(ge=ze,Fe=ge.child,ge.tag){case 0:case 11:case 14:case 15:Aa(4,ge,ge.return);break;case 1:ys(ge,ge.return);var Ge=ge.stateNode;if(typeof Ge.componentWillUnmount=="function"){l=ge,s=ge.return;try{i=l,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(je){jt(l,s,je)}}break;case 5:ys(ge,ge.return);break;case 22:if(ge.memoizedState!==null){hp(xe);continue}}Fe!==null?(Fe.return=ge,ze=Fe):hp(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{c=xe.stateNode,te?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(N=xe.stateNode,k=xe.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,N.style.display=Se("display",E))}catch(je){jt(t,t.return,je)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=te?"":xe.memoizedProps}catch(je){jt(t,t.return,je)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ui(i,t),Ei(t),l&4&&up(t);break;case 21:break;default:ui(i,t),Ei(t)}}function Ei(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(ap(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Te(c,""),l.flags&=-33);var h=op(t);tc(t,h,c);break;case 3:case 4:var E=l.stateNode.containerInfo,N=op(t);ec(t,N,E);break;default:throw Error(n(161))}}catch(k){jt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function O0(t,i,s){ze=t,fp(t)}function fp(t,i,s){for(var l=(t.mode&1)!==0;ze!==null;){var c=ze,h=c.child;if(c.tag===22&&l){var E=c.memoizedState!==null||Bo;if(!E){var N=c.alternate,k=N!==null&&N.memoizedState!==null||_n;N=Bo;var te=_n;if(Bo=E,(_n=k)&&!te)for(ze=c;ze!==null;)E=ze,k=E.child,E.tag===22&&E.memoizedState!==null?pp(c):k!==null?(k.return=E,ze=k):pp(c);for(;h!==null;)ze=h,fp(h),h=h.sibling;ze=c,Bo=N,_n=te}dp(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,ze=h):dp(t)}}function dp(t){for(;ze!==null;){var i=ze;if(i.flags&8772){var s=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:_n||zo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!_n)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:oi(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&hh(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}hh(i,E,s)}break;case 5:var N=i.stateNode;if(s===null&&i.flags&4){s=N;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&s.focus();break;case"img":k.src&&(s.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var _e=te.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&ra(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}_n||i.flags&512&&Ju(i)}catch(ge){jt(i,i.return,ge)}}if(i===t){ze=null;break}if(s=i.sibling,s!==null){s.return=i.return,ze=s;break}ze=i.return}}function hp(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var s=i.sibling;if(s!==null){s.return=i.return,ze=s;break}ze=i.return}}function pp(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{zo(4,i)}catch(k){jt(i,s,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(k){jt(i,c,k)}}var h=i.return;try{Ju(i)}catch(k){jt(i,h,k)}break;case 5:var E=i.return;try{Ju(i)}catch(k){jt(i,E,k)}}}catch(k){jt(i,i.return,k)}if(i===t){ze=null;break}var N=i.sibling;if(N!==null){N.return=i.return,ze=N;break}ze=i.return}}var k0=Math.ceil,Vo=D.ReactCurrentDispatcher,nc=D.ReactCurrentOwner,Qn=D.ReactCurrentBatchConfig,Mt=0,on=null,Kt=null,fn=0,Hn=0,Ms=ar(0),en=0,Ca=null,Br=0,Ho=0,ic=0,Ra=null,Nn=null,rc=0,Es=1/0,zi=null,Go=!1,sc=null,dr=null,Wo=!1,hr=null,Xo=0,ba=0,ac=null,jo=-1,Yo=0;function wn(){return Mt&6?Ht():jo!==-1?jo:jo=Ht()}function pr(t){return t.mode&1?Mt&2&&fn!==0?fn&-fn:y0.transition!==null?(Yo===0&&(Yo=hn()),Yo):(t=st,t!==0||(t=window.event,t=t===void 0?16:gd(t.type)),t):1}function ci(t,i,s,l){if(50<ba)throw ba=0,ac=null,Error(n(185));Qt(t,s,l),(!(Mt&2)||t!==on)&&(t===on&&(!(Mt&2)&&(Ho|=s),en===4&&mr(t,fn)),In(t,l),s===1&&Mt===0&&!(i.mode&1)&&(Es=Ht()+500,yo&&lr()))}function In(t,i){var s=t.callbackNode;Rt(t,i);var l=wt(t,t===on?fn:0);if(l===0)s!==null&&to(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&to(s),i===1)t.tag===0?S0(gp.bind(null,t)):th(gp.bind(null,t)),g0(function(){!(Mt&6)&&lr()}),s=null;else{switch(En(l)){case 1:s=W;break;case 4:s=se;break;case 16:s=J;break;case 536870912:s=Pe;break;default:s=J}s=Tp(s,mp.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function mp(t,i){if(jo=-1,Yo=0,Mt&6)throw Error(n(327));var s=t.callbackNode;if(Ts()&&t.callbackNode!==s)return null;var l=wt(t,t===on?fn:0);if(l===0)return null;if(l&30||l&t.expiredLanes||i)i=qo(t,l);else{i=l;var c=Mt;Mt|=2;var h=vp();(on!==t||fn!==i)&&(zi=null,Es=Ht()+500,Vr(t,i));do try{V0();break}catch(N){_p(t,N)}while(!0);Tu(),Vo.current=h,Mt=c,Kt!==null?i=0:(on=null,fn=0,i=en)}if(i!==0){if(i===2&&(c=gt(t),c!==0&&(l=c,i=oc(t,c))),i===1)throw s=Ca,Vr(t,0),mr(t,l),In(t,Ht()),s;if(i===6)mr(t,l);else{if(c=t.current.alternate,!(l&30)&&!B0(c)&&(i=qo(t,l),i===2&&(h=gt(t),h!==0&&(l=h,i=oc(t,h))),i===1))throw s=Ca,Vr(t,0),mr(t,l),In(t,Ht()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Hr(t,Nn,zi);break;case 3:if(mr(t,l),(l&130023424)===l&&(i=rc+500-Ht(),10<i)){if(wt(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){wn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=hu(Hr.bind(null,t,Nn,zi),i);break}Hr(t,Nn,zi);break;case 4:if(mr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var E=31-Oe(l);h=1<<E,E=i[E],E>c&&(c=E),l&=~h}if(l=c,l=Ht()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*k0(l/1960))-l,10<l){t.timeoutHandle=hu(Hr.bind(null,t,Nn,zi),l);break}Hr(t,Nn,zi);break;case 5:Hr(t,Nn,zi);break;default:throw Error(n(329))}}}return In(t,Ht()),t.callbackNode===s?mp.bind(null,t):null}function oc(t,i){var s=Ra;return t.current.memoizedState.isDehydrated&&(Vr(t,i).flags|=256),t=qo(t,i),t!==2&&(i=Nn,Nn=s,i!==null&&lc(i)),t}function lc(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function B0(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!si(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function mr(t,i){for(i&=~ic,i&=~Ho,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-Oe(i),l=1<<s;t[s]=-1,i&=~l}}function gp(t){if(Mt&6)throw Error(n(327));Ts();var i=wt(t,0);if(!(i&1))return In(t,Ht()),null;var s=qo(t,i);if(t.tag!==0&&s===2){var l=gt(t);l!==0&&(i=l,s=oc(t,l))}if(s===1)throw s=Ca,Vr(t,0),mr(t,i),In(t,Ht()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Hr(t,Nn,zi),In(t,Ht()),null}function uc(t,i){var s=Mt;Mt|=1;try{return t(i)}finally{Mt=s,Mt===0&&(Es=Ht()+500,yo&&lr())}}function zr(t){hr!==null&&hr.tag===0&&!(Mt&6)&&Ts();var i=Mt;Mt|=1;var s=Qn.transition,l=st;try{if(Qn.transition=null,st=1,t)return t()}finally{st=l,Qn.transition=s,Mt=i,!(Mt&6)&&lr()}}function cc(){Hn=Ms.current,kt(Ms)}function Vr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,m0(s)),Kt!==null)for(s=Kt.return;s!==null;){var l=s;switch(xu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&xo();break;case 3:xs(),kt(Pn),kt(pn),Du();break;case 5:Pu(l);break;case 4:xs();break;case 13:kt(Gt);break;case 19:kt(Gt);break;case 10:wu(l.type._context);break;case 22:case 23:cc()}s=s.return}if(on=t,Kt=t=gr(t.current,null),fn=Hn=i,en=0,Ca=null,ic=Ho=Br=0,Nn=Ra=null,Fr!==null){for(i=0;i<Fr.length;i++)if(s=Fr[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var E=h.next;h.next=c,l.next=E}s.pending=l}Fr=null}return t}function _p(t,i){do{var s=Kt;try{if(Tu(),Lo.current=Uo,Do){for(var l=Wt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Do=!1}if(kr=0,an=Jt=Wt=null,ya=!1,Ma=0,nc.current=null,s===null||s.return===null){en=1,Ca=i,Kt=null;break}e:{var h=t,E=s.return,N=s,k=i;if(i=fn,N.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var te=k,_e=N,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Fe=Hh(E);if(Fe!==null){Fe.flags&=-257,Gh(Fe,E,N,h,i),Fe.mode&1&&Vh(h,te,i),i=Fe,k=te;var Ge=i.updateQueue;if(Ge===null){var je=new Set;je.add(k),i.updateQueue=je}else Ge.add(k);break e}else{if(!(i&1)){Vh(h,te,i),fc();break e}k=Error(n(426))}}else if(Vt&&N.mode&1){var $t=Hh(E);if($t!==null){!($t.flags&65536)&&($t.flags|=256),Gh($t,E,N,h,i),Mu(Ss(k,N));break e}}h=k=Ss(k,N),en!==4&&(en=2),Ra===null?Ra=[h]:Ra.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var q=Bh(h,k,i);dh(h,q);break e;case 1:N=k;var H=h.type,K=h.stateNode;if(!(h.flags&128)&&(typeof H.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(dr===null||!dr.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=zh(h,N,i);dh(h,Ee);break e}}h=h.return}while(h!==null)}Sp(s)}catch($e){i=$e,Kt===s&&s!==null&&(Kt=s=s.return);continue}break}while(!0)}function vp(){var t=Vo.current;return Vo.current=Uo,t===null?Uo:t}function fc(){(en===0||en===3||en===2)&&(en=4),on===null||!(Br&268435455)&&!(Ho&268435455)||mr(on,fn)}function qo(t,i){var s=Mt;Mt|=2;var l=vp();(on!==t||fn!==i)&&(zi=null,Vr(t,i));do try{z0();break}catch(c){_p(t,c)}while(!0);if(Tu(),Mt=s,Vo.current=l,Kt!==null)throw Error(n(261));return on=null,fn=0,en}function z0(){for(;Kt!==null;)xp(Kt)}function V0(){for(;Kt!==null&&!Hl();)xp(Kt)}function xp(t){var i=Ep(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,i===null?Sp(t):Kt=i,nc.current=null}function Sp(t){var i=t;do{var s=i.alternate;if(t=i.return,i.flags&32768){if(s=I0(s,i),s!==null){s.flags&=32767,Kt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{en=6,Kt=null;return}}else if(s=N0(s,i,Hn),s!==null){Kt=s;return}if(i=i.sibling,i!==null){Kt=i;return}Kt=i=t}while(i!==null);en===0&&(en=5)}function Hr(t,i,s){var l=st,c=Qn.transition;try{Qn.transition=null,st=1,H0(t,i,s,l)}finally{Qn.transition=c,st=l}return null}function H0(t,i,s,l){do Ts();while(hr!==null);if(Mt&6)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(Lr(t,h),t===on&&(Kt=on=null,fn=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||Wo||(Wo=!0,Tp(J,function(){return Ts(),null})),h=(s.flags&15990)!==0,s.subtreeFlags&15990||h){h=Qn.transition,Qn.transition=null;var E=st;st=1;var N=Mt;Mt|=4,nc.current=null,F0(t,s),cp(s,t),l0(fu),ro=!!cu,fu=cu=null,t.current=s,O0(s),Gl(),Mt=N,st=E,Qn.transition=h}else t.current=s;if(Wo&&(Wo=!1,hr=t,Xo=c),h=t.pendingLanes,h===0&&(dr=null),Ve(s.stateNode),In(t,Ht()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Go)throw Go=!1,t=sc,sc=null,t;return Xo&1&&t.tag!==0&&Ts(),h=t.pendingLanes,h&1?t===ac?ba++:(ba=0,ac=t):ba=0,lr(),null}function Ts(){if(hr!==null){var t=En(Xo),i=Qn.transition,s=st;try{if(Qn.transition=null,st=16>t?16:t,hr===null)var l=!1;else{if(t=hr,hr=null,Xo=0,Mt&6)throw Error(n(331));var c=Mt;for(Mt|=4,ze=t.current;ze!==null;){var h=ze,E=h.child;if(ze.flags&16){var N=h.deletions;if(N!==null){for(var k=0;k<N.length;k++){var te=N[k];for(ze=te;ze!==null;){var _e=ze;switch(_e.tag){case 0:case 11:case 15:Aa(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,ze=xe;else for(;ze!==null;){_e=ze;var ge=_e.sibling,Fe=_e.return;if(sp(_e),_e===te){ze=null;break}if(ge!==null){ge.return=Fe,ze=ge;break}ze=Fe}}}var Ge=h.alternate;if(Ge!==null){var je=Ge.child;if(je!==null){Ge.child=null;do{var $t=je.sibling;je.sibling=null,je=$t}while(je!==null)}}ze=h}}if(h.subtreeFlags&2064&&E!==null)E.return=h,ze=E;else e:for(;ze!==null;){if(h=ze,h.flags&2048)switch(h.tag){case 0:case 11:case 15:Aa(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,ze=q;break e}ze=h.return}}var H=t.current;for(ze=H;ze!==null;){E=ze;var K=E.child;if(E.subtreeFlags&2064&&K!==null)K.return=E,ze=K;else e:for(E=H;ze!==null;){if(N=ze,N.flags&2048)try{switch(N.tag){case 0:case 11:case 15:zo(9,N)}}catch($e){jt(N,N.return,$e)}if(N===E){ze=null;break e}var Ee=N.sibling;if(Ee!==null){Ee.return=N.return,ze=Ee;break e}ze=N.return}}if(Mt=c,lr(),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Ue,t)}catch{}l=!0}return l}finally{st=s,Qn.transition=i}}return!1}function yp(t,i,s){i=Ss(s,i),i=Bh(t,i,1),t=cr(t,i,1),i=wn(),t!==null&&(Qt(t,1,i),In(t,i))}function jt(t,i,s){if(t.tag===3)yp(t,t,s);else for(;i!==null;){if(i.tag===3){yp(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(dr===null||!dr.has(l))){t=Ss(s,t),t=zh(i,t,1),i=cr(i,t,1),t=wn(),i!==null&&(Qt(i,1,t),In(i,t));break}}i=i.return}}function G0(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=wn(),t.pingedLanes|=t.suspendedLanes&s,on===t&&(fn&s)===s&&(en===4||en===3&&(fn&130023424)===fn&&500>Ht()-rc?Vr(t,0):ic|=s),In(t,i)}function Mp(t,i){i===0&&(t.mode&1?(i=Ut,Ut<<=1,!(Ut&130023424)&&(Ut=4194304)):i=1);var s=wn();t=Oi(t,i),t!==null&&(Qt(t,i,s),In(t,s))}function W0(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Mp(t,s)}function X0(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Mp(t,s)}var Ep;Ep=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||Pn.current)Dn=!0;else{if(!(t.lanes&s)&&!(i.flags&128))return Dn=!1,D0(t,i,s);Dn=!!(t.flags&131072)}else Dn=!1,Vt&&i.flags&1048576&&nh(i,Eo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ko(t,i),t=i.pendingProps;var c=ds(i,pn.current);vs(i,s),c=Uu(null,i,l,t,c,s);var h=Fu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(l)?(h=!0,So(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Ru(i),c.updater=Fo,i.stateNode=c,c._reactInternals=i,Hu(i,l,t,s),i=ju(null,i,l,!0,h,s)):(i.tag=0,Vt&&h&&vu(i),Tn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(ko(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=Y0(l),t=oi(l,t),c){case 0:i=Xu(null,i,l,t,s);break e;case 1:i=$h(null,i,l,t,s);break e;case 11:i=Wh(null,i,l,t,s);break e;case 14:i=Xh(null,i,l,oi(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:oi(l,c),Xu(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:oi(l,c),$h(t,i,l,c,s);case 3:e:{if(Kh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,fh(t,i),bo(i,l,null,s);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=Ss(Error(n(423)),i),i=Zh(t,i,l,s,c);break e}else if(l!==c){c=Ss(Error(n(424)),i),i=Zh(t,i,l,s,c);break e}else for(Vn=sr(i.stateNode.containerInfo.firstChild),zn=i,Vt=!0,ai=null,s=uh(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ms(),l===c){i=Bi(t,i,s);break e}Tn(t,i,l,s)}i=i.child}return i;case 5:return ph(i),t===null&&yu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,E=c.children,du(l,c)?E=null:h!==null&&du(l,h)&&(i.flags|=32),qh(t,i),Tn(t,i,E,s),i.child;case 6:return t===null&&yu(i),null;case 13:return Qh(t,i,s);case 4:return bu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=gs(i,null,l,s):Tn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:oi(l,c),Wh(t,i,l,c,s);case 7:return Tn(t,i,i.pendingProps,s),i.child;case 8:return Tn(t,i,i.pendingProps.children,s),i.child;case 12:return Tn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,E=c.value,Ft(Ao,l._currentValue),l._currentValue=E,h!==null)if(si(h.value,E)){if(h.children===c.children&&!Pn.current){i=Bi(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var N=h.dependencies;if(N!==null){E=h.child;for(var k=N.firstContext;k!==null;){if(k.context===l){if(h.tag===1){k=ki(-1,s&-s),k.tag=2;var te=h.updateQueue;if(te!==null){te=te.shared;var _e=te.pending;_e===null?k.next=k:(k.next=_e.next,_e.next=k),te.pending=k}}h.lanes|=s,k=h.alternate,k!==null&&(k.lanes|=s),Au(h.return,s,i),N.lanes|=s;break}k=k.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=s,N=E.alternate,N!==null&&(N.lanes|=s),Au(E,s,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}Tn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,vs(i,s),c=Kn(c),l=l(c),i.flags|=1,Tn(t,i,l,s),i.child;case 14:return l=i.type,c=oi(l,i.pendingProps),c=oi(l.type,c),Xh(t,i,l,c,s);case 15:return jh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:oi(l,c),ko(t,i),i.tag=1,Ln(l)?(t=!0,So(i)):t=!1,vs(i,s),Oh(i,l,c),Hu(i,l,c,s),ju(null,i,l,!0,t,s);case 19:return ep(t,i,s);case 22:return Yh(t,i,s)}throw Error(n(156,i.tag))};function Tp(t,i){return eo(t,i)}function j0(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,i,s,l){return new j0(t,i,s,l)}function dc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Y0(t){if(typeof t=="function")return dc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===re)return 11;if(t===ue)return 14}return 2}function gr(t,i){var s=t.alternate;return s===null?(s=Jn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function $o(t,i,s,l,c,h){var E=2;if(l=t,typeof t=="function")dc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case O:return Gr(s.children,c,h,i);case j:E=8,c|=8;break;case A:return t=Jn(12,s,i,c|2),t.elementType=A,t.lanes=h,t;case Z:return t=Jn(13,s,i,c),t.elementType=Z,t.lanes=h,t;case fe:return t=Jn(19,s,i,c),t.elementType=fe,t.lanes=h,t;case Y:return Ko(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:E=10;break e;case z:E=9;break e;case re:E=11;break e;case ue:E=14;break e;case oe:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Jn(E,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Gr(t,i,s,l){return t=Jn(7,t,l,i),t.lanes=s,t}function Ko(t,i,s,l){return t=Jn(22,t,l,i),t.elementType=Y,t.lanes=s,t.stateNode={isHidden:!1},t}function hc(t,i,s){return t=Jn(6,t,null,i),t.lanes=s,t}function pc(t,i,s){return i=Jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function q0(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vi(0),this.expirationTimes=vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function mc(t,i,s,l,c,h,E,N,k){return t=new q0(t,i,s,N,k),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Jn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ru(h),t}function $0(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function wp(t){if(!t)return or;t=t._reactInternals;e:{if(Yn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Ln(s))return Jd(t,s,i)}return i}function Ap(t,i,s,l,c,h,E,N,k){return t=mc(s,l,!0,t,c,h,E,N,k),t.context=wp(null),s=t.current,l=wn(),c=pr(s),h=ki(l,c),h.callback=i??null,cr(s,h,c),t.current.lanes=c,Qt(t,c,l),In(t,l),t}function Zo(t,i,s,l){var c=i.current,h=wn(),E=pr(c);return s=wp(s),i.context===null?i.context=s:i.pendingContext=s,i=ki(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=cr(c,i,E),t!==null&&(ci(t,c,E,h),Ro(t,c,E)),E}function Qo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function gc(t,i){Cp(t,i),(t=t.alternate)&&Cp(t,i)}var Rp=typeof reportError=="function"?reportError:function(t){console.error(t)};function _c(t){this._internalRoot=t}Jo.prototype.render=_c.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Zo(t,i,null,null)},Jo.prototype.unmount=_c.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;zr(function(){Zo(null,t,null,null)}),i[Ni]=null}};function Jo(t){this._internalRoot=t}Jo.prototype.unstable_scheduleHydration=function(t){if(t){var i=xi();t={blockedOn:null,target:t,priority:i};for(var s=0;s<nr.length&&i!==0&&i<nr[s].priority;s++);nr.splice(s,0,t),s===0&&pd(t)}};function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bp(){}function K0(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var te=Qo(E);h.call(te)}}var E=Ap(i,l,t,0,null,!1,!1,"",bp);return t._reactRootContainer=E,t[Ni]=E.current,ha(t.nodeType===8?t.parentNode:t),zr(),E}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var N=l;l=function(){var te=Qo(k);N.call(te)}}var k=mc(t,0,!1,null,null,!1,!1,"",bp);return t._reactRootContainer=k,t[Ni]=k.current,ha(t.nodeType===8?t.parentNode:t),zr(function(){Zo(i,k,s,l)}),k}function tl(t,i,s,l,c){var h=s._reactRootContainer;if(h){var E=h;if(typeof c=="function"){var N=c;c=function(){var k=Qo(E);N.call(k)}}Zo(i,E,t,c)}else E=K0(s,i,t,c,l);return Qo(E)}rn=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=It(i.pendingLanes);s!==0&&(Lt(i,s|1),In(i,Ht()),!(Mt&6)&&(Es=Ht()+500,lr()))}break;case 13:zr(function(){var l=Oi(t,1);if(l!==null){var c=wn();ci(l,t,1,c)}}),gc(t,1)}},sn=function(t){if(t.tag===13){var i=Oi(t,134217728);if(i!==null){var s=wn();ci(i,t,134217728,s)}gc(t,134217728)}},ns=function(t){if(t.tag===13){var i=pr(t),s=Oi(t,i);if(s!==null){var l=wn();ci(s,t,i,l)}gc(t,i)}},xi=function(){return st},dd=function(t,i){var s=st;try{return st=t,i()}finally{st=s}},Le=function(t,i,s){switch(i){case"input":if(Bt(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=vo(l);if(!c)throw Error(n(90));qt(l),Bt(l,c)}}}break;case"textarea":M(t,s);break;case"select":i=s.value,i!=null&&xt(t,!!s.multiple,i,!1)}},it=uc,Dt=zr;var Z0={usingClientEntryPoint:!1,Events:[ga,cs,vo,pe,Ce,uc]},Pa={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q0={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Js(t),t===null?null:t.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Ue=nl.inject(Q0),we=nl}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0,Un.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vc(i))throw Error(n(200));return $0(t,i,null,s)},Un.createRoot=function(t,i){if(!vc(t))throw Error(n(299));var s=!1,l="",c=Rp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=mc(t,1,!1,null,null,s,!1,l,c),t[Ni]=i.current,ha(t.nodeType===8?t.parentNode:t),new _c(i)},Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Js(i),t=t===null?null:t.stateNode,t},Un.flushSync=function(t){return zr(t)},Un.hydrate=function(t,i,s){if(!el(i))throw Error(n(200));return tl(null,t,i,!0,s)},Un.hydrateRoot=function(t,i,s){if(!vc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",E=Rp;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(E=s.onRecoverableError)),i=Ap(i,null,t,1,s??null,c,!1,h,E),t[Ni]=i.current,ha(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new Jo(i)},Un.render=function(t,i,s){if(!el(i))throw Error(n(200));return tl(null,t,i,!1,s)},Un.unmountComponentAtNode=function(t){if(!el(t))throw Error(n(40));return t._reactRootContainer?(zr(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1},Un.unstable_batchedUpdates=uc,Un.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!el(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return tl(t,i,s,!1,l)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var Op;function a_(){if(Op)return yc.exports;Op=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),yc.exports=s_(),yc.exports}var kp;function o_(){if(kp)return il;kp=1;var a=a_();return il.createRoot=a.createRoot,il.hydrateRoot=a.hydrateRoot,il}var l_=o_();/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c_=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Bp=a=>{const e=c_(a);return e.charAt(0).toUpperCase()+e.slice(1)},zm=(...a)=>a.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),f_=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var d_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=Sn.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:u,iconNode:f,...d},p)=>Sn.createElement("svg",{ref:p,...d_,width:e,height:e,stroke:a,strokeWidth:r?Number(n)*24/Number(e):n,className:zm("lucide",o),...!u&&!f_(d)&&{"aria-hidden":"true"},...d},[...f.map(([m,g])=>Sn.createElement(m,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=(a,e)=>{const n=Sn.forwardRef(({className:r,...o},u)=>Sn.createElement(h_,{ref:u,iconNode:e,className:zm(`lucide-${u_(Bp(a))}`,`lucide-${a}`,r),...o}));return n.displayName=Bp(a),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Da=bn("award",p_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],g_=bn("briefcase",m_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],v_=bn("chevron-down",__);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],S_=bn("code",x_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],M_=bn("external-link",y_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],T_=bn("github",E_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],A_=bn("graduation-cap",w_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],R_=bn("linkedin",C_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],P_=bn("mail",b_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],D_=bn("menu",L_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],I_=bn("palette",N_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],F_=bn("send",U_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],k_=bn("smartphone",O_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],z_=bn("twitter",B_);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],H_=bn("x",V_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="182",G_=0,zp=1,W_=2,Cl=1,X_=2,za=3,Ar=0,On=1,ji=2,qi=0,Bs=1,Vp=2,Hp=3,Gp=4,j_=5,Zr=100,Y_=101,q_=102,$_=103,K_=104,Z_=200,Q_=201,J_=202,ev=203,nf=204,rf=205,tv=206,nv=207,iv=208,rv=209,sv=210,av=211,ov=212,lv=213,uv=214,sf=0,af=1,of=2,Vs=3,lf=4,uf=5,cf=6,ff=7,ed=0,cv=1,fv=2,Ri=0,Vm=1,Hm=2,Gm=3,Wm=4,Xm=5,jm=6,Ym=7,qm=300,ts=301,Hs=302,df=303,hf=304,Ol=306,pf=1e3,Yi=1001,mf=1002,dn=1003,dv=1004,rl=1005,yn=1006,Tc=1007,Jr=1008,jn=1009,$m=1010,Km=1011,Ha=1012,td=1013,Pi=1014,Ai=1015,Ki=1016,nd=1017,id=1018,Ga=1020,Zm=35902,Qm=35899,Jm=1021,eg=1022,mi=1023,Zi=1026,es=1027,tg=1028,rd=1029,Gs=1030,sd=1031,ad=1033,Rl=33776,bl=33777,Pl=33778,Ll=33779,gf=35840,_f=35841,vf=35842,xf=35843,Sf=36196,yf=37492,Mf=37496,Ef=37488,Tf=37489,wf=37490,Af=37491,Cf=37808,Rf=37809,bf=37810,Pf=37811,Lf=37812,Df=37813,Nf=37814,If=37815,Uf=37816,Ff=37817,Of=37818,kf=37819,Bf=37820,zf=37821,Vf=36492,Hf=36494,Gf=36495,Wf=36283,Xf=36284,jf=36285,Yf=36286,hv=3200,ng=0,pv=1,Tr="",ti="srgb",Ws="srgb-linear",Nl="linear",Nt="srgb",ws=7680,Wp=519,mv=512,gv=513,_v=514,od=515,vv=516,xv=517,ld=518,Sv=519,Xp=35044,jp="300 es",Ci=2e3,Il=2001;function ig(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ul(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function yv(){const a=Ul("canvas");return a.style.display="block",a}const Yp={};function qp(...a){const e="THREE."+a.shift();console.log(e,...a)}function at(...a){const e="THREE."+a.shift();console.warn(e,...a)}function Ct(...a){const e="THREE."+a.shift();console.error(e,...a)}function Wa(...a){const e=a.join(" ");e in Yp||(Yp[e]=!0,at(...a))}function Mv(a,e,n){return new Promise(function(r,o){function u(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}class js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let u=0,f=o.length;u<f;u++)o[u].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=Math.PI/180,qf=180/Math.PI;function ja(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[a&255]+vn[a>>8&255]+vn[a>>16&255]+vn[a>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function _t(a,e,n){return Math.max(e,Math.min(n,a))}function Ev(a,e){return(a%e+e)%e}function Ac(a,e,n){return(1-n)*a+n*e}function Na(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Fn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,n=0){bt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*o+e.x,this.y=u*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ya{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,u,f,d){let p=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3],x=u[f+0],y=u[f+1],T=u[f+2],C=u[f+3];if(d<=0){e[n+0]=p,e[n+1]=m,e[n+2]=g,e[n+3]=_;return}if(d>=1){e[n+0]=x,e[n+1]=y,e[n+2]=T,e[n+3]=C;return}if(_!==C||p!==x||m!==y||g!==T){let S=p*x+m*y+g*T+_*C;S<0&&(x=-x,y=-y,T=-T,C=-C,S=-S);let v=1-d;if(S<.9995){const b=Math.acos(S),L=Math.sin(b);v=Math.sin(v*b)/L,d=Math.sin(d*b)/L,p=p*v+x*d,m=m*v+y*d,g=g*v+T*d,_=_*v+C*d}else{p=p*v+x*d,m=m*v+y*d,g=g*v+T*d,_=_*v+C*d;const b=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=b,m*=b,g*=b,_*=b}}e[n]=p,e[n+1]=m,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,u,f){const d=r[o],p=r[o+1],m=r[o+2],g=r[o+3],_=u[f],x=u[f+1],y=u[f+2],T=u[f+3];return e[n]=d*T+g*_+p*y-m*x,e[n+1]=p*T+g*x+m*_-d*y,e[n+2]=m*T+g*y+d*x-p*_,e[n+3]=g*T-d*_-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(o/2),_=d(u/2),x=p(r/2),y=p(o/2),T=p(u/2);switch(f){case"XYZ":this._x=x*g*_+m*y*T,this._y=m*y*_-x*g*T,this._z=m*g*T+x*y*_,this._w=m*g*_-x*y*T;break;case"YXZ":this._x=x*g*_+m*y*T,this._y=m*y*_-x*g*T,this._z=m*g*T-x*y*_,this._w=m*g*_+x*y*T;break;case"ZXY":this._x=x*g*_-m*y*T,this._y=m*y*_+x*g*T,this._z=m*g*T+x*y*_,this._w=m*g*_-x*y*T;break;case"ZYX":this._x=x*g*_-m*y*T,this._y=m*y*_+x*g*T,this._z=m*g*T-x*y*_,this._w=m*g*_+x*y*T;break;case"YZX":this._x=x*g*_+m*y*T,this._y=m*y*_+x*g*T,this._z=m*g*T-x*y*_,this._w=m*g*_-x*y*T;break;case"XZY":this._x=x*g*_-m*y*T,this._y=m*y*_-x*g*T,this._z=m*g*T+x*y*_,this._w=m*g*_+x*y*T;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],g=n[6],_=n[10],x=r+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-p)*y,this._y=(u-m)*y,this._z=(f-o)*y}else if(r>d&&r>_){const y=2*Math.sqrt(1+r-d-_);this._w=(g-p)/y,this._x=.25*y,this._y=(o+f)/y,this._z=(u+m)/y}else if(d>_){const y=2*Math.sqrt(1+d-r-_);this._w=(u-m)/y,this._x=(o+f)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+_-r-d);this._w=(f-o)/y,this._x=(u+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,g=n._w;return this._x=r*g+f*d+o*m-u*p,this._y=o*g+f*p+u*d-r*m,this._z=u*g+f*m+r*p-o*d,this._w=f*g-r*d-o*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,u=e._z,f=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,u=-u,f=-f,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),g=Math.sin(m);p=Math.sin(p*m)/g,n=Math.sin(n*m)/g,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+f*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+f*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($p.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*o,this.y=u[1]*n+u[4]*r+u[7]*o,this.z=u[2]*n+u[5]*r+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*o+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*o+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*o+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*o-d*r),g=2*(d*n-u*o),_=2*(u*r-f*n);return this.x=n+p*m+f*_-d*g,this.y=r+p*g+d*m-u*_,this.z=o+p*_+u*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o,this.y=u[1]*n+u[5]*r+u[9]*o,this.z=u[2]*n+u[6]*r+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=o*p-u*d,this.y=u*f-r*p,this.z=r*d-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new Q,$p=new Ya;class ut{constructor(e,n,r,o,u,f,d,p,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,f,d,p,m)}set(e,n,r,o,u,f,d,p,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=n,g[4]=u,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],g=r[4],_=r[7],x=r[2],y=r[5],T=r[8],C=o[0],S=o[3],v=o[6],b=o[1],L=o[4],D=o[7],I=o[2],F=o[5],O=o[8];return u[0]=f*C+d*b+p*I,u[3]=f*S+d*L+p*F,u[6]=f*v+d*D+p*O,u[1]=m*C+g*b+_*I,u[4]=m*S+g*L+_*F,u[7]=m*v+g*D+_*O,u[2]=x*C+y*b+T*I,u[5]=x*S+y*L+T*F,u[8]=x*v+y*D+T*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return n*f*g-n*d*m-r*u*g+r*d*p+o*u*m-o*f*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],_=g*f-d*m,x=d*p-g*u,y=m*u-f*p,T=n*_+r*x+o*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=_*C,e[1]=(o*m-g*r)*C,e[2]=(d*r-o*f)*C,e[3]=x*C,e[4]=(g*n-o*p)*C,e[5]=(o*u-d*n)*C,e[6]=y*C,e[7]=(r*p-m*n)*C,e[8]=(f*n-r*u)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-o*m,o*p,-o*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Rc.makeScale(e,n)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Rc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rc=new ut,Kp=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zp=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tv(){const a={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(o,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Nt&&(o.r=$i(o.r),o.g=$i(o.g),o.b=$i(o.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Nt&&(o.r=zs(o.r),o.g=zs(o.g),o.b=zs(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Tr?Nl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,f){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return Wa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return Wa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Ws]:{primaries:e,whitePoint:r,transfer:Nl,toXYZ:Kp,fromXYZ:Zp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:Kp,fromXYZ:Zp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),a}const Et=Tv();function $i(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function zs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let As;class wv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{As===void 0&&(As=Ul("canvas")),As.width=e.width,As.height=e.height;const o=As.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=As}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ul("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),u=o.data;for(let f=0;f<u.length;f++)u[f]=$i(u[f]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor($i(n[r]/255)*255):n[r]=$i(n[r]);return{data:n,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Av=0;class ud{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let f=0,d=o.length;f<d;f++)o[f].isDataTexture?u.push(bc(o[f].image)):u.push(bc(o[f]))}else u=bc(o);r.url=u}return n||(e.images[this.uuid]=r),r}}function bc(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?wv.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let Cv=0;const Pc=new Q;class Cn extends js{constructor(e=Cn.DEFAULT_IMAGE,n=Cn.DEFAULT_MAPPING,r=Yi,o=Yi,u=yn,f=Jr,d=mi,p=jn,m=Cn.DEFAULT_ANISOTROPY,g=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=ja(),this.name="",this.source=new ud(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pc).x}get height(){return this.source.getSize(Pc).y}get depth(){return this.source.getSize(Pc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){at(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){at(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pf:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pf:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=qm;Cn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,n=0,r=0,o=1){Yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,u;const p=e.elements,m=p[0],g=p[4],_=p[8],x=p[1],y=p[5],T=p[9],C=p[2],S=p[6],v=p[10];if(Math.abs(g-x)<.01&&Math.abs(_-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+C)<.1&&Math.abs(T+S)<.1&&Math.abs(m+y+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,D=(y+1)/2,I=(v+1)/2,F=(g+x)/4,O=(_+C)/4,j=(T+S)/4;return L>D&&L>I?L<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(L),o=F/r,u=O/r):D>I?D<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(D),r=F/o,u=j/o):I<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(I),r=O/u,o=j/u),this.set(r,o,u,n),this}let b=Math.sqrt((S-T)*(S-T)+(_-C)*(_-C)+(x-g)*(x-g));return Math.abs(b)<.001&&(b=1),this.x=(S-T)/b,this.y=(_-C)/b,this.z=(x-g)/b,this.w=Math.acos((m+y+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this.w=_t(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this.w=_t(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rv extends js{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Yt(0,0,e,n),this.scissorTest=!1,this.viewport=new Yt(0,0,e,n);const o={width:e,height:n,depth:r.depth},u=new Cn(o);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new ud(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Rv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class rg extends Cn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bv extends Cn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qa{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,fi):fi.fromBufferAttribute(u,f),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sl.copy(r.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const o=e.children;for(let u=0,f=o.length;u<f;u++)this.expandByObject(o[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),al.subVectors(this.max,Ia),Cs.subVectors(e.a,Ia),Rs.subVectors(e.b,Ia),bs.subVectors(e.c,Ia),vr.subVectors(Rs,Cs),xr.subVectors(bs,Rs),Wr.subVectors(Cs,bs);let n=[0,-vr.z,vr.y,0,-xr.z,xr.y,0,-Wr.z,Wr.y,vr.z,0,-vr.x,xr.z,0,-xr.x,Wr.z,0,-Wr.x,-vr.y,vr.x,0,-xr.y,xr.x,0,-Wr.y,Wr.x,0];return!Lc(n,Cs,Rs,bs,al)||(n=[1,0,0,0,1,0,0,0,1],!Lc(n,Cs,Rs,bs,al))?!1:(ol.crossVectors(vr,xr),n=[ol.x,ol.y,ol.z],Lc(n,Cs,Rs,bs,al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],fi=new Q,sl=new qa,Cs=new Q,Rs=new Q,bs=new Q,vr=new Q,xr=new Q,Wr=new Q,Ia=new Q,al=new Q,ol=new Q,Xr=new Q;function Lc(a,e,n,r,o){for(let u=0,f=a.length-3;u<=f;u+=3){Xr.fromArray(a,u);const d=o.x*Math.abs(Xr.x)+o.y*Math.abs(Xr.y)+o.z*Math.abs(Xr.z),p=e.dot(Xr),m=n.dot(Xr),g=r.dot(Xr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const Pv=new qa,Ua=new Q,Dc=new Q;class kl{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Pv.setFromPoints(e).getCenter(r);let o=0;for(let u=0,f=e.length;u<f;u++)o=Math.max(o,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const n=Ua.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ua,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(Dc)),this.expandByPoint(Ua.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hi=new Q,Nc=new Q,ll=new Q,Sr=new Q,Ic=new Q,ul=new Q,Uc=new Q;class sg{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,n),Hi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Nc.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),Sr.copy(this.origin).sub(Nc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(ll),d=Sr.dot(this.direction),p=-Sr.dot(ll),m=Sr.lengthSq(),g=Math.abs(1-f*f);let _,x,y,T;if(g>0)if(_=f*p-d,x=f*d-p,T=u*g,_>=0)if(x>=-T)if(x<=T){const C=1/g;_*=C,x*=C,y=_*(_+f*x+2*d)+x*(f*_+x+2*p)+m}else x=u,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*p)+m;else x=-u,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*p)+m;else x<=-T?(_=Math.max(0,-(-f*u+d)),x=_>0?-u:Math.min(Math.max(-u,-p),u),y=-_*_+x*(x+2*p)+m):x<=T?(_=0,x=Math.min(Math.max(-u,-p),u),y=x*(x+2*p)+m):(_=Math.max(0,-(f*u+d)),x=_>0?u:Math.min(Math.max(-u,-p),u),y=-_*_+x*(x+2*p)+m);else x=f>0?-u:u,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Nc).addScaledVector(ll,x),y}intersectSphere(e,n){Hi.subVectors(e.center,this.origin);const r=Hi.dot(this.direction),o=Hi.dot(Hi)-r*r,u=e.radius*e.radius;if(o>u)return null;const f=Math.sqrt(u-o),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,u,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),g>=0?(u=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),r>f||u>o||((u>r||isNaN(r))&&(r=u),(f<o||isNaN(o))&&(o=f),_>=0?(d=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,n,r,o,u){Ic.subVectors(n,e),ul.subVectors(r,e),Uc.crossVectors(Ic,ul);let f=this.direction.dot(Uc),d;if(f>0){if(o)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Sr.subVectors(this.origin,e);const p=d*this.direction.dot(ul.crossVectors(Sr,ul));if(p<0)return null;const m=d*this.direction.dot(Ic.cross(Sr));if(m<0||p+m>f)return null;const g=-d*Sr.dot(Uc);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,n,r,o,u,f,d,p,m,g,_,x,y,T,C,S){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,f,d,p,m,g,_,x,y,T,C,S)}set(e,n,r,o,u,f,d,p,m,g,_,x,y,T,C,S){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=u,v[5]=f,v[9]=d,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=y,v[7]=T,v[11]=C,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ps.setFromMatrixColumn(e,0).length(),u=1/Ps.setFromMatrixColumn(e,1).length(),f=1/Ps.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const x=f*g,y=f*_,T=d*g,C=d*_;n[0]=p*g,n[4]=-p*_,n[8]=m,n[1]=y+T*m,n[5]=x-C*m,n[9]=-d*p,n[2]=C-x*m,n[6]=T+y*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*g,y=p*_,T=m*g,C=m*_;n[0]=x+C*d,n[4]=T*d-y,n[8]=f*m,n[1]=f*_,n[5]=f*g,n[9]=-d,n[2]=y*d-T,n[6]=C+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*g,y=p*_,T=m*g,C=m*_;n[0]=x-C*d,n[4]=-f*_,n[8]=T+y*d,n[1]=y+T*d,n[5]=f*g,n[9]=C-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*g,y=f*_,T=d*g,C=d*_;n[0]=p*g,n[4]=T*m-y,n[8]=x*m+C,n[1]=p*_,n[5]=C*m+x,n[9]=y*m-T,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,y=f*m,T=d*p,C=d*m;n[0]=p*g,n[4]=C-x*_,n[8]=T*_+y,n[1]=_,n[5]=f*g,n[9]=-d*g,n[2]=-m*g,n[6]=y*_+T,n[10]=x-C*_}else if(e.order==="XZY"){const x=f*p,y=f*m,T=d*p,C=d*m;n[0]=p*g,n[4]=-_,n[8]=m*g,n[1]=x*_+C,n[5]=f*g,n[9]=y*_-T,n[2]=T*_-y,n[6]=d*g,n[10]=C*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lv,e,Dv)}lookAt(e,n,r){const o=this.elements;return Gn.subVectors(e,n),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),yr.crossVectors(r,Gn),yr.lengthSq()===0&&(Math.abs(r.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),yr.crossVectors(r,Gn)),yr.normalize(),cl.crossVectors(Gn,yr),o[0]=yr.x,o[4]=cl.x,o[8]=Gn.x,o[1]=yr.y,o[5]=cl.y,o[9]=Gn.y,o[2]=yr.z,o[6]=cl.z,o[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],g=r[1],_=r[5],x=r[9],y=r[13],T=r[2],C=r[6],S=r[10],v=r[14],b=r[3],L=r[7],D=r[11],I=r[15],F=o[0],O=o[4],j=o[8],A=o[12],R=o[1],z=o[5],re=o[9],Z=o[13],fe=o[2],ue=o[6],oe=o[10],Y=o[14],X=o[3],de=o[7],ne=o[11],U=o[15];return u[0]=f*F+d*R+p*fe+m*X,u[4]=f*O+d*z+p*ue+m*de,u[8]=f*j+d*re+p*oe+m*ne,u[12]=f*A+d*Z+p*Y+m*U,u[1]=g*F+_*R+x*fe+y*X,u[5]=g*O+_*z+x*ue+y*de,u[9]=g*j+_*re+x*oe+y*ne,u[13]=g*A+_*Z+x*Y+y*U,u[2]=T*F+C*R+S*fe+v*X,u[6]=T*O+C*z+S*ue+v*de,u[10]=T*j+C*re+S*oe+v*ne,u[14]=T*A+C*Z+S*Y+v*U,u[3]=b*F+L*R+D*fe+I*X,u[7]=b*O+L*z+D*ue+I*de,u[11]=b*j+L*re+D*oe+I*ne,u[15]=b*A+L*Z+D*Y+I*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],g=e[2],_=e[6],x=e[10],y=e[14],T=e[3],C=e[7],S=e[11],v=e[15],b=p*y-m*x,L=d*y-m*_,D=d*x-p*_,I=f*y-m*g,F=f*x-p*g,O=f*_-d*g;return n*(C*b-S*L+v*D)-r*(T*b-S*I+v*F)+o*(T*L-C*I+v*O)-u*(T*D-C*F+S*O)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],_=e[9],x=e[10],y=e[11],T=e[12],C=e[13],S=e[14],v=e[15],b=_*S*m-C*x*m+C*p*y-d*S*y-_*p*v+d*x*v,L=T*x*m-g*S*m-T*p*y+f*S*y+g*p*v-f*x*v,D=g*C*m-T*_*m+T*d*y-f*C*y-g*d*v+f*_*v,I=T*_*p-g*C*p-T*d*x+f*C*x+g*d*S-f*_*S,F=n*b+r*L+o*D+u*I;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=b*O,e[1]=(C*x*u-_*S*u-C*o*y+r*S*y+_*o*v-r*x*v)*O,e[2]=(d*S*u-C*p*u+C*o*m-r*S*m-d*o*v+r*p*v)*O,e[3]=(_*p*u-d*x*u-_*o*m+r*x*m+d*o*y-r*p*y)*O,e[4]=L*O,e[5]=(g*S*u-T*x*u+T*o*y-n*S*y-g*o*v+n*x*v)*O,e[6]=(T*p*u-f*S*u-T*o*m+n*S*m+f*o*v-n*p*v)*O,e[7]=(f*x*u-g*p*u+g*o*m-n*x*m-f*o*y+n*p*y)*O,e[8]=D*O,e[9]=(T*_*u-g*C*u-T*r*y+n*C*y+g*r*v-n*_*v)*O,e[10]=(f*C*u-T*d*u+T*r*m-n*C*m-f*r*v+n*d*v)*O,e[11]=(g*d*u-f*_*u-g*r*m+n*_*m+f*r*y-n*d*y)*O,e[12]=I*O,e[13]=(g*C*o-T*_*o+T*r*x-n*C*x-g*r*S+n*_*S)*O,e[14]=(T*d*o-f*C*o-T*r*p+n*C*p+f*r*S-n*d*S)*O,e[15]=(f*_*o-g*d*o+g*r*p-n*_*p-f*r*x+n*d*x)*O,this}scale(e){const n=this.elements,r=e.x,o=e.y,u=e.z;return n[0]*=r,n[4]*=o,n[8]*=u,n[1]*=r,n[5]*=o,n[9]*=u,n[2]*=r,n[6]*=o,n[10]*=u,n[3]*=r,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,g=u*d;return this.set(m*f+r,m*d-o*p,m*p+o*d,0,m*d+o*p,g*d+r,g*p-o*f,0,m*p-o*d,g*p+o*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,u,f){return this.set(1,r,u,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,g=f+f,_=d+d,x=u*m,y=u*g,T=u*_,C=f*g,S=f*_,v=d*_,b=p*m,L=p*g,D=p*_,I=r.x,F=r.y,O=r.z;return o[0]=(1-(C+v))*I,o[1]=(y+D)*I,o[2]=(T-L)*I,o[3]=0,o[4]=(y-D)*F,o[5]=(1-(x+v))*F,o[6]=(S+b)*F,o[7]=0,o[8]=(T+L)*O,o[9]=(S-b)*O,o[10]=(1-(x+C))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let u=Ps.set(o[0],o[1],o[2]).length();const f=Ps.set(o[4],o[5],o[6]).length(),d=Ps.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),di.copy(this);const m=1/u,g=1/f,_=1/d;return di.elements[0]*=m,di.elements[1]*=m,di.elements[2]*=m,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=_,di.elements[9]*=_,di.elements[10]*=_,n.setFromRotationMatrix(di),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,o,u,f,d=Ci,p=!1){const m=this.elements,g=2*u/(n-e),_=2*u/(r-o),x=(n+e)/(n-e),y=(r+o)/(r-o);let T,C;if(p)T=u/(f-u),C=f*u/(f-u);else if(d===Ci)T=-(f+u)/(f-u),C=-2*f*u/(f-u);else if(d===Il)T=-f/(f-u),C=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,u,f,d=Ci,p=!1){const m=this.elements,g=2/(n-e),_=2/(r-o),x=-(n+e)/(n-e),y=-(r+o)/(r-o);let T,C;if(p)T=1/(f-u),C=f/(f-u);else if(d===Ci)T=-2/(f-u),C=-(f+u)/(f-u);else if(d===Il)T=-1/(f-u),C=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=_,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ps=new Q,di=new Xt,Lv=new Q(0,0,0),Dv=new Q(1,1,1),yr=new Q,cl=new Q,Gn=new Q,Qp=new Xt,Jp=new Ya;class Li{constructor(e=0,n=0,r=0,o=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,u=o[0],f=o[4],d=o[8],p=o[1],m=o[5],g=o[9],_=o[2],x=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(_t(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jp.setFromEuler(this),this.setFromQuaternion(Jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class ag{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nv=0;const em=new Q,Ls=new Ya,Gi=new Xt,fl=new Q,Fa=new Q,Iv=new Q,Uv=new Ya,tm=new Q(1,0,0),nm=new Q(0,1,0),im=new Q(0,0,1),rm={type:"added"},Fv={type:"removed"},Ds={type:"childadded",child:null},Fc={type:"childremoved",child:null};class Rn extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new Q,n=new Li,r=new Ya,o=new Q(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Xt},normalMatrix:{value:new ut}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ag,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(tm,e)}rotateY(e){return this.rotateOnAxis(nm,e)}rotateZ(e){return this.rotateOnAxis(im,e)}translateOnAxis(e,n){return em.copy(e).applyQuaternion(this.quaternion),this.position.add(em.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tm,e)}translateY(e){return this.translateOnAxis(nm,e)}translateZ(e){return this.translateOnAxis(im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?fl.copy(e):fl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Fa,fl,this.up):Gi.lookAt(fl,Fa,this.up),this.quaternion.setFromRotationMatrix(Gi),o&&(Gi.extractRotation(o.matrixWorld),Ls.setFromRotationMatrix(Gi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Fv),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let u=0,f=o.length;u<f;u++)o[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,Iv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,Uv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,f=o.length;u<f;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];u(e.shapes,_)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));o.material=d}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),g=f(e.images),_=f(e.shapes),x=f(e.skeletons),y=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=o,r;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Rn.DEFAULT_UP=new Q(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new Q,Wi=new Q,Oc=new Q,Xi=new Q,Ns=new Q,Is=new Q,sm=new Q,kc=new Q,Bc=new Q,zc=new Q,Vc=new Yt,Hc=new Yt,Gc=new Yt;class pi{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),hi.subVectors(e,n),o.cross(hi);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,n,r,o,u){hi.subVectors(o,n),Wi.subVectors(r,n),Oc.subVectors(e,n);const f=hi.dot(hi),d=hi.dot(Wi),p=hi.dot(Oc),m=Wi.dot(Wi),g=Wi.dot(Oc),_=f*m-d*d;if(_===0)return u.set(0,0,0),null;const x=1/_,y=(m*p-d*g)*x,T=(f*g-d*p)*x;return u.set(1-y-T,T,y)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,n,r,o,u,f,d,p){return this.getBarycoord(e,n,r,o,Xi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Xi.x),p.addScaledVector(f,Xi.y),p.addScaledVector(d,Xi.z),p)}static getInterpolatedAttribute(e,n,r,o,u,f){return Vc.setScalar(0),Hc.setScalar(0),Gc.setScalar(0),Vc.fromBufferAttribute(e,n),Hc.fromBufferAttribute(e,r),Gc.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(Vc,u.x),f.addScaledVector(Hc,u.y),f.addScaledVector(Gc,u.z),f}static isFrontFacing(e,n,r,o){return hi.subVectors(r,n),Wi.subVectors(e,n),hi.cross(Wi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),hi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,u){return pi.getInterpolation(e,this.a,this.b,this.c,n,r,o,u)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,u=this.c;let f,d;Ns.subVectors(o,r),Is.subVectors(u,r),kc.subVectors(e,r);const p=Ns.dot(kc),m=Is.dot(kc);if(p<=0&&m<=0)return n.copy(r);Bc.subVectors(e,o);const g=Ns.dot(Bc),_=Is.dot(Bc);if(g>=0&&_<=g)return n.copy(o);const x=p*_-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(r).addScaledVector(Ns,f);zc.subVectors(e,u);const y=Ns.dot(zc),T=Is.dot(zc);if(T>=0&&y<=T)return n.copy(u);const C=y*m-p*T;if(C<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Is,d);const S=g*T-y*_;if(S<=0&&_-g>=0&&y-T>=0)return sm.subVectors(u,o),d=(_-g)/(_-g+(y-T)),n.copy(o).addScaledVector(sm,d);const v=1/(S+C+x);return f=C*v,d=x*v,n.copy(r).addScaledVector(Ns,f).addScaledVector(Is,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Wc(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Tt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Et.workingColorSpace){if(e=Ev(e,1),n=_t(n,0,1),r=_t(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Wc(f,u,e+1/3),this.g=Wc(f,u,e),this.b=Wc(f,u,e-1/3)}return Et.colorSpaceToWorking(this,o),this}setStyle(e,n=ti){function r(u){u!==void 0&&parseFloat(u)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=o[1],d=o[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ti){const r=og[e.toLowerCase()];return r!==void 0?this.setHex(r,n):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Et.workingToColorSpace(xn.copy(this),e),Math.round(_t(xn.r*255,0,255))*65536+Math.round(_t(xn.g*255,0,255))*256+Math.round(_t(xn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.workingToColorSpace(xn.copy(this),n);const r=xn.r,o=xn.g,u=xn.b,f=Math.max(r,o,u),d=Math.min(r,o,u);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const _=f-d;switch(m=g<=.5?_/(f+d):_/(2-f-d),f){case r:p=(o-u)/_+(o<u?6:0);break;case o:p=(u-r)/_+2;break;case u:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,n=Et.workingColorSpace){return Et.workingToColorSpace(xn.copy(this),n),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ti){Et.workingToColorSpace(xn.copy(this),e);const n=xn.r,r=xn.g,o=xn.b;return e!==ti?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+n,Mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Mr),e.getHSL(dl);const r=Ac(Mr.h,dl.h,n),o=Ac(Mr.s,dl.s,n),u=Ac(Mr.l,dl.l,n);return this.setHSL(r,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*o,this.g=u[1]*n+u[4]*r+u[7]*o,this.b=u[2]*n+u[5]*r+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Tt;Tt.NAMES=og;let Ov=0;class Ys extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=Bs,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nf,this.blendDst=rf,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){at(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){at(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==nf&&(r.blendSrc=this.blendSrc),this.blendDst!==rf&&(r.blendDst=this.blendDst),this.blendEquation!==Zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=o(e.textures),f=o(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cd extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new Q,hl=new bt;let kv=0;class gi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Xp,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix3(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Na(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Na(n,this.array)),n}setX(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Na(n,this.array)),n}setY(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Na(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Na(n,this.array)),n}setW(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),o=Fn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,u){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),o=Fn(o,this.array),u=Fn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xp&&(e.usage=this.usage),e}}class lg extends gi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class ug extends gi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ni extends gi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Bv=0;const ei=new Xt,Xc=new Rn,Us=new Q,Wn=new qa,Oa=new qa,un=new Q;class ii extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ig(e)?ug:lg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ut().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,n,r){return ei.makeTranslation(e,n,r),this.applyMatrix4(ei),this}scale(e,n,r){return ei.makeScale(e,n,r),this.applyMatrix4(ei),this}lookAt(e){return Xc.lookAt(e),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,u=e.length;o<u;o++){const f=e[o];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ni(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const u=e[o];n.setXYZ(o,u.x,u.y,u.z||0)}e.length>n.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const u=n[r];Wn.setFromBufferAttribute(u),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Oa.setFromBufferAttribute(d),this.morphTargetsRelative?(un.addVectors(Wn.min,Oa.min),Wn.expandByPoint(un),un.addVectors(Wn.max,Oa.max),Wn.expandByPoint(un)):(Wn.expandByPoint(Oa.min),Wn.expandByPoint(Oa.max))}Wn.getCenter(r);let o=0;for(let u=0,f=e.count;u<f;u++)un.fromBufferAttribute(e,u),o=Math.max(o,r.distanceToSquared(un));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)un.fromBufferAttribute(d,m),p&&(Us.fromBufferAttribute(e,m),un.add(Us)),o=Math.max(o,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let j=0;j<r.count;j++)d[j]=new Q,p[j]=new Q;const m=new Q,g=new Q,_=new Q,x=new bt,y=new bt,T=new bt,C=new Q,S=new Q;function v(j,A,R){m.fromBufferAttribute(r,j),g.fromBufferAttribute(r,A),_.fromBufferAttribute(r,R),x.fromBufferAttribute(u,j),y.fromBufferAttribute(u,A),T.fromBufferAttribute(u,R),g.sub(m),_.sub(m),y.sub(x),T.sub(x);const z=1/(y.x*T.y-T.x*y.y);isFinite(z)&&(C.copy(g).multiplyScalar(T.y).addScaledVector(_,-y.y).multiplyScalar(z),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-T.x).multiplyScalar(z),d[j].add(C),d[A].add(C),d[R].add(C),p[j].add(S),p[A].add(S),p[R].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let j=0,A=b.length;j<A;++j){const R=b[j],z=R.start,re=R.count;for(let Z=z,fe=z+re;Z<fe;Z+=3)v(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const L=new Q,D=new Q,I=new Q,F=new Q;function O(j){I.fromBufferAttribute(o,j),F.copy(I);const A=d[j];L.copy(A),L.sub(I.multiplyScalar(I.dot(A))).normalize(),D.crossVectors(F,A);const z=D.dot(p[j])<0?-1:1;f.setXYZW(j,L.x,L.y,L.z,z)}for(let j=0,A=b.length;j<A;++j){const R=b[j],z=R.start,re=R.count;for(let Z=z,fe=z+re;Z<fe;Z+=3)O(e.getX(Z+0)),O(e.getX(Z+1)),O(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const o=new Q,u=new Q,f=new Q,d=new Q,p=new Q,m=new Q,g=new Q,_=new Q;if(e)for(let x=0,y=e.count;x<y;x+=3){const T=e.getX(x+0),C=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(n,T),u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,S),g.subVectors(f,u),_.subVectors(o,u),g.cross(_),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,S),d.add(g),p.add(g),m.add(g),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,y=n.count;x<y;x+=3)o.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,u),_.subVectors(o,u),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)un.fromBufferAttribute(e,n),un.normalize(),e.setXYZ(n,un.x,un.y,un.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,_=d.normalized,x=new m.constructor(p.length*g);let y=0,T=0;for(let C=0,S=p.length;C<S;C++){d.isInterleavedBufferAttribute?y=p[C]*d.data.stride+d.offset:y=p[C]*g;for(let v=0;v<g;v++)x[T++]=m[y++]}return new gi(x,g,_)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ii,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,_=m.length;g<_;g++){const x=m[g],y=e(x,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,x=m.length;_<x;_++){const y=m[_];g.push(y.toJSON(e.data))}g.length>0&&(o[p]=g,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(n))}const u=e.morphAttributes;for(const m in u){const g=[],_=u[m];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const am=new Xt,jr=new sg,pl=new kl,om=new Q,ml=new Q,gl=new Q,_l=new Q,jc=new Q,vl=new Q,lm=new Q,xl=new Q;class _i extends Rn{constructor(e=new ii,n=new cd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=o.length;u<f;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(u&&d){vl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],_=u[p];g!==0&&(jc.fromBufferAttribute(_,e),f?vl.addScaledVector(jc,g):vl.addScaledVector(jc.sub(n),g))}n.add(vl)}return n}raycast(e,n){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(u),jr.copy(e.ray).recast(e.near),!(pl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(pl,om)===null||jr.origin.distanceToSquared(om)>(e.far-e.near)**2))&&(am.copy(u).invert(),jr.copy(e.ray).applyMatrix4(am),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,r){let o;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,C=x.length;T<C;T++){const S=x[T],v=f[S.materialIndex],b=Math.max(S.start,y.start),L=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let D=b,I=L;D<I;D+=3){const F=d.getX(D),O=d.getX(D+1),j=d.getX(D+2);o=Sl(this,v,e,r,m,g,_,F,O,j),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const T=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let S=T,v=C;S<v;S+=3){const b=d.getX(S),L=d.getX(S+1),D=d.getX(S+2);o=Sl(this,f,e,r,m,g,_,b,L,D),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,C=x.length;T<C;T++){const S=x[T],v=f[S.materialIndex],b=Math.max(S.start,y.start),L=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let D=b,I=L;D<I;D+=3){const F=D,O=D+1,j=D+2;o=Sl(this,v,e,r,m,g,_,F,O,j),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const T=Math.max(0,y.start),C=Math.min(p.count,y.start+y.count);for(let S=T,v=C;S<v;S+=3){const b=S,L=S+1,D=S+2;o=Sl(this,f,e,r,m,g,_,b,L,D),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function zv(a,e,n,r,o,u,f,d){let p;if(e.side===On?p=r.intersectTriangle(f,u,o,!0,d):p=r.intersectTriangle(o,u,f,e.side===Ar,d),p===null)return null;xl.copy(d),xl.applyMatrix4(a.matrixWorld);const m=n.ray.origin.distanceTo(xl);return m<n.near||m>n.far?null:{distance:m,point:xl.clone(),object:a}}function Sl(a,e,n,r,o,u,f,d,p,m){a.getVertexPosition(d,ml),a.getVertexPosition(p,gl),a.getVertexPosition(m,_l);const g=zv(a,e,n,r,ml,gl,_l,lm);if(g){const _=new Q;pi.getBarycoord(lm,ml,gl,_l,_),o&&(g.uv=pi.getInterpolatedAttribute(o,d,p,m,_,new bt)),u&&(g.uv1=pi.getInterpolatedAttribute(u,d,p,m,_,new bt)),f&&(g.normal=pi.getInterpolatedAttribute(f,d,p,m,_,new Q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new Q,materialIndex:0};pi.getNormal(ml,gl,_l,x.normal),g.face=x,g.barycoord=_}return g}class $a extends ii{constructor(e=1,n=1,r=1,o=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:u,depthSegments:f};const d=this;o=Math.floor(o),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],g=[],_=[];let x=0,y=0;T("z","y","x",-1,-1,r,n,e,f,u,0),T("z","y","x",1,-1,r,n,-e,f,u,1),T("x","z","y",1,1,e,r,n,o,f,2),T("x","z","y",1,-1,e,r,-n,o,f,3),T("x","y","z",1,-1,e,n,r,o,u,4),T("x","y","z",-1,-1,e,n,-r,o,u,5),this.setIndex(p),this.setAttribute("position",new ni(m,3)),this.setAttribute("normal",new ni(g,3)),this.setAttribute("uv",new ni(_,2));function T(C,S,v,b,L,D,I,F,O,j,A){const R=D/O,z=I/j,re=D/2,Z=I/2,fe=F/2,ue=O+1,oe=j+1;let Y=0,X=0;const de=new Q;for(let ne=0;ne<oe;ne++){const U=ne*z-Z;for(let ie=0;ie<ue;ie++){const be=ie*R-re;de[C]=be*b,de[S]=U*L,de[v]=fe,m.push(de.x,de.y,de.z),de[C]=0,de[S]=0,de[v]=F>0?1:-1,g.push(de.x,de.y,de.z),_.push(ie/O),_.push(1-ne/j),Y+=1}}for(let ne=0;ne<j;ne++)for(let U=0;U<O;U++){const ie=x+U+ue*ne,be=x+U+ue*(ne+1),Ye=x+(U+1)+ue*(ne+1),Ke=x+(U+1)+ue*ne;p.push(ie,be,Ke),p.push(be,Ye,Ke),X+=6}d.addGroup(y,X,A),y+=X,x+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function An(a){const e={};for(let n=0;n<a.length;n++){const r=Xs(a[n]);for(const o in r)e[o]=r[o]}return e}function Vv(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function cg(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Hv={clone:Xs,merge:An};var Gv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gv,this.fragmentShader=Wv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=Vv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class fg extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new Q,um=new bt,cm=new bt;class Xn extends fg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qf*2*Math.atan(Math.tan(wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,n){return this.getViewBounds(e,um,cm),n.subVectors(cm,um)}setViewOffset(e,n,r,o,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wc*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,u=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*o/p,n-=f.offsetY*r/m,o*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fs=-90,Os=1;class Xv extends Rn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Xn(Fs,Os,e,n);o.layers=this.layers,this.add(o);const u=new Xn(Fs,Os,e,n);u.layers=this.layers,this.add(u);const f=new Xn(Fs,Os,e,n);f.layers=this.layers,this.add(f);const d=new Xn(Fs,Os,e,n);d.layers=this.layers,this.add(d);const p=new Xn(Fs,Os,e,n);p.layers=this.layers,this.add(p);const m=new Xn(Fs,Os,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Ci)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Il)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,u),e.setRenderTarget(r,1,o),e.render(n,f),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),e.render(n,g),e.setRenderTarget(_,x,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class dg extends Cn{constructor(e=[],n=ts,r,o,u,f,d,p,m,g){super(e,n,r,o,u,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hg extends bi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new dg(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new $a(5,5,5),u=new Di({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:qi});u.uniforms.tEquirect.value=n;const f=new _i(o,u),d=n.minFilter;return n.minFilter===Jr&&(n.minFilter=yn),new Xv(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,o);e.setRenderTarget(u)}}class yl extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jv={type:"move"};class Yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const C of e.hand.values()){const S=n.getJointPose(C,r),v=this._getHandJoint(m,C);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,T=.005;m.inputState.pinching&&x>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(jv)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new yl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Yv extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class qv extends Cn{constructor(e=null,n=1,r=1,o,u,f,d,p,m=dn,g=dn,_,x){super(null,f,d,p,m,g,o,u,_,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qc=new Q,$v=new Q,Kv=new ut;class Kr{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=qc.subVectors(r,n).cross($v.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(qc),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Kv.getNormalMatrix(e),o=this.coplanarPoint(qc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new kl,Zv=new bt(.5,.5),Ml=new Q;class fd{constructor(e=new Kr,n=new Kr,r=new Kr,o=new Kr,u=new Kr,f=new Kr){this.planes=[e,n,r,o,u,f]}set(e,n,r,o,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ci,r=!1){const o=this.planes,u=e.elements,f=u[0],d=u[1],p=u[2],m=u[3],g=u[4],_=u[5],x=u[6],y=u[7],T=u[8],C=u[9],S=u[10],v=u[11],b=u[12],L=u[13],D=u[14],I=u[15];if(o[0].setComponents(m-f,y-g,v-T,I-b).normalize(),o[1].setComponents(m+f,y+g,v+T,I+b).normalize(),o[2].setComponents(m+d,y+_,v+C,I+L).normalize(),o[3].setComponents(m-d,y-_,v-C,I-L).normalize(),r)o[4].setComponents(p,x,S,D).normalize(),o[5].setComponents(m-p,y-x,v-S,I-D).normalize();else if(o[4].setComponents(m-p,y-x,v-S,I-D).normalize(),n===Ci)o[5].setComponents(m+p,y+x,v+S,I+D).normalize();else if(n===Il)o[5].setComponents(p,x,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const n=Zv.distanceTo(e.center);return Yr.radius=.7071067811865476+n,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Ml.x=o.normal.x>0?e.max.x:e.min.x,Ml.y=o.normal.y>0?e.max.y:e.min.y,Ml.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pg extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fm=new Xt,$f=new sg,El=new kl,Tl=new Q;class Qv extends Rn{constructor(e=new ii,n=new pg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,u=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),El.copy(r.boundingSphere),El.applyMatrix4(o),El.radius+=u,e.ray.intersectsSphere(El)===!1)return;fm.copy(o).invert(),$f.copy(e.ray).applyMatrix4(fm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,_=r.attributes.position;if(m!==null){const x=Math.max(0,f.start),y=Math.min(m.count,f.start+f.count);for(let T=x,C=y;T<C;T++){const S=m.getX(T);Tl.fromBufferAttribute(_,S),dm(Tl,S,p,o,e,n,this)}}else{const x=Math.max(0,f.start),y=Math.min(_.count,f.start+f.count);for(let T=x,C=y;T<C;T++)Tl.fromBufferAttribute(_,T),dm(Tl,T,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=o.length;u<f;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function dm(a,e,n,r,o,u,f){const d=$f.distanceSqToPoint(a);if(d<n){const p=new Q;$f.closestPointToPoint(a,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class Xa extends Cn{constructor(e,n,r=Pi,o,u,f,d=dn,p=dn,m,g=Zi,_=1){if(g!==Zi&&g!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:_};super(x,o,u,f,d,p,g,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ud(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Jv extends Xa{constructor(e,n=Pi,r=ts,o,u,f=dn,d=dn,p,m=Zi){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,n,r,o,u,f,d,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mg extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bl extends ii{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(o),m=d+1,g=p+1,_=e/d,x=n/p,y=[],T=[],C=[],S=[];for(let v=0;v<g;v++){const b=v*x-f;for(let L=0;L<m;L++){const D=L*_-u;T.push(D,-b,0),C.push(0,0,1),S.push(L/d),S.push(1-v/p)}}for(let v=0;v<p;v++)for(let b=0;b<d;b++){const L=b+m*v,D=b+m*(v+1),I=b+1+m*(v+1),F=b+1+m*v;y.push(L,D,F),y.push(D,I,F)}this.setIndex(y),this.setAttribute("position",new ni(T,3)),this.setAttribute("normal",new ni(C,3)),this.setAttribute("uv",new ni(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fl extends ii{constructor(e=1,n=.4,r=64,o=8,u=2,f=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:r,radialSegments:o,p:u,q:f},r=Math.floor(r),o=Math.floor(o);const d=[],p=[],m=[],g=[],_=new Q,x=new Q,y=new Q,T=new Q,C=new Q,S=new Q,v=new Q;for(let L=0;L<=r;++L){const D=L/r*u*Math.PI*2;b(D,u,f,e,y),b(D+.01,u,f,e,T),S.subVectors(T,y),v.addVectors(T,y),C.crossVectors(S,v),v.crossVectors(C,S),C.normalize(),v.normalize();for(let I=0;I<=o;++I){const F=I/o*Math.PI*2,O=-n*Math.cos(F),j=n*Math.sin(F);_.x=y.x+(O*v.x+j*C.x),_.y=y.y+(O*v.y+j*C.y),_.z=y.z+(O*v.z+j*C.z),p.push(_.x,_.y,_.z),x.subVectors(_,y).normalize(),m.push(x.x,x.y,x.z),g.push(L/r),g.push(I/o)}}for(let L=1;L<=r;L++)for(let D=1;D<=o;D++){const I=(o+1)*(L-1)+(D-1),F=(o+1)*L+(D-1),O=(o+1)*L+D,j=(o+1)*(L-1)+D;d.push(I,F,j),d.push(F,O,j)}this.setIndex(d),this.setAttribute("position",new ni(p,3)),this.setAttribute("normal",new ni(m,3)),this.setAttribute("uv",new ni(g,2));function b(L,D,I,F,O){const j=Math.cos(L),A=Math.sin(L),R=I/D*L,z=Math.cos(R);O.x=F*(2+z)*.5*j,O.y=F*(2+z)*A*.5,O.z=F*Math.sin(R)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ex extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tx extends Ys{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Tt(16777215),this.specular=new Tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ng,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nx extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ix extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gg extends Rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const $c=new Xt,hm=new Q,pm=new Q;class rx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fd,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;hm.setFromMatrixPosition(e.matrixWorld),n.position.copy(hm),pm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(pm),n.updateMatrixWorld(),$c.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c,n.coordinateSystem,n.reversedDepth),n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply($c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sx extends rx{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0}}class mm extends gg{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new sx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class _g extends fg{constructor(e=-1,n=1,r=1,o=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ax extends gg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class ox extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function gm(a,e,n,r){const o=lx(r);switch(n){case Jm:return a*e;case tg:return a*e/o.components*o.byteLength;case rd:return a*e/o.components*o.byteLength;case Gs:return a*e*2/o.components*o.byteLength;case sd:return a*e*2/o.components*o.byteLength;case eg:return a*e*3/o.components*o.byteLength;case mi:return a*e*4/o.components*o.byteLength;case ad:return a*e*4/o.components*o.byteLength;case Rl:case bl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Ll:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case _f:case xf:return Math.max(a,16)*Math.max(e,8)/4;case gf:case vf:return Math.max(a,8)*Math.max(e,8)/2;case Sf:case yf:case Ef:case Tf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Mf:case wf:case Af:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case bf:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Df:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case If:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Uf:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Of:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case kf:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case zf:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Vf:case Hf:case Gf:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Wf:case Xf:return Math.ceil(a/4)*Math.ceil(e/4)*8;case jf:case Yf:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function lx(a){switch(a){case jn:case $m:return{byteLength:1,components:1};case Ha:case Km:case Ki:return{byteLength:2,components:1};case nd:case id:return{byteLength:2,components:4};case Pi:case td:case Ai:return{byteLength:4,components:1};case Zm:case Qm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vg(){let a=null,e=!1,n=null,r=null;function o(u,f){n(u,f),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){a=u}}}function ux(a){const e=new WeakMap;function n(d,p){const m=d.array,g=d.usage,_=m.byteLength,x=a.createBuffer();a.bindBuffer(p,x),a.bufferData(p,m,g),d.onUploadCallback();let y;if(m instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=a.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=a.SHORT;else if(m instanceof Uint32Array)y=a.UNSIGNED_INT;else if(m instanceof Int32Array)y=a.INT;else if(m instanceof Int8Array)y=a.BYTE;else if(m instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const g=p.array,_=p.updateRanges;if(a.bindBuffer(m,d),_.length===0)a.bufferSubData(m,0,g);else{_.sort((y,T)=>y.start-T.start);let x=0;for(let y=1;y<_.length;y++){const T=_[x],C=_[y];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++x,_[x]=C)}_.length=x+1;for(let y=0,T=_.length;y<T;y++){const C=_[y];a.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(a.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:u,update:f}}var cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fx=`#ifdef USE_ALPHAHASH
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
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gx=`#ifdef USE_AOMAP
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
#endif`,_x=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vx=`#ifdef USE_BATCHING
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
#endif`,xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ex=`#ifdef USE_IRIDESCENCE
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
#endif`,Tx=`#ifdef USE_BUMPMAP
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
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nx=`#define PI 3.141592653589793
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
} // validated`,Ix=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ux=`vec3 transformedNormal = objectNormal;
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
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zx=`#ifdef USE_GRADIENTMAP
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
}`,Qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tS=`uniform bool receiveShadow;
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
#endif`,nS=`#ifdef USE_ENVMAP
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
#endif`,iS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oS=`PhysicalMaterial material;
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
#endif`,lS=`uniform sampler2D dfgLUT;
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
}`,uS=`
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
#endif`,cS=`#if defined( RE_IndirectDiffuse )
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
#endif`,fS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_S=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xS=`#if defined( USE_POINTS_UV )
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
#endif`,SS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ES=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wS=`#ifdef USE_MORPHTARGETS
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
#endif`,AS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,RS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DS=`#ifdef USE_NORMALMAP
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
#endif`,NS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,US=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,BS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qS=`float getShadowMask() {
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
}`,$S=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KS=`#ifdef USE_SKINNING
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
#endif`,ZS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QS=`#ifdef USE_SKINNING
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
#endif`,JS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ey=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ty=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ny=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iy=`#ifdef USE_TRANSMISSION
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
#endif`,ry=`#ifdef USE_TRANSMISSION
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
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ly=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cy=`uniform sampler2D t2D;
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
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`#include <common>
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
}`,gy=`#if DEPTH_PACKING == 3200
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
}`,_y=`#define DISTANCE
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
}`,vy=`#define DISTANCE
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`uniform float scale;
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
}`,My=`uniform vec3 diffuse;
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
}`,Ey=`#include <common>
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
}`,Ty=`uniform vec3 diffuse;
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
}`,wy=`#define LAMBERT
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
}`,Ay=`#define LAMBERT
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
}`,Cy=`#define MATCAP
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
}`,Ry=`#define MATCAP
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
}`,by=`#define NORMAL
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
}`,Py=`#define NORMAL
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
}`,Ly=`#define PHONG
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
}`,Dy=`#define PHONG
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
}`,Ny=`#define STANDARD
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
}`,Iy=`#define STANDARD
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
}`,Uy=`#define TOON
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
}`,Fy=`#define TOON
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
}`,Oy=`uniform float size;
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
}`,ky=`uniform vec3 diffuse;
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
}`,By=`#include <common>
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
}`,zy=`uniform vec3 color;
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
}`,Vy=`uniform float rotation;
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
}`,Hy=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:cx,alphahash_pars_fragment:fx,alphamap_fragment:dx,alphamap_pars_fragment:hx,alphatest_fragment:px,alphatest_pars_fragment:mx,aomap_fragment:gx,aomap_pars_fragment:_x,batching_pars_vertex:vx,batching_vertex:xx,begin_vertex:Sx,beginnormal_vertex:yx,bsdfs:Mx,iridescence_fragment:Ex,bumpmap_pars_fragment:Tx,clipping_planes_fragment:wx,clipping_planes_pars_fragment:Ax,clipping_planes_pars_vertex:Cx,clipping_planes_vertex:Rx,color_fragment:bx,color_pars_fragment:Px,color_pars_vertex:Lx,color_vertex:Dx,common:Nx,cube_uv_reflection_fragment:Ix,defaultnormal_vertex:Ux,displacementmap_pars_vertex:Fx,displacementmap_vertex:Ox,emissivemap_fragment:kx,emissivemap_pars_fragment:Bx,colorspace_fragment:zx,colorspace_pars_fragment:Vx,envmap_fragment:Hx,envmap_common_pars_fragment:Gx,envmap_pars_fragment:Wx,envmap_pars_vertex:Xx,envmap_physical_pars_fragment:nS,envmap_vertex:jx,fog_vertex:Yx,fog_pars_vertex:qx,fog_fragment:$x,fog_pars_fragment:Kx,gradientmap_pars_fragment:Zx,lightmap_pars_fragment:Qx,lights_lambert_fragment:Jx,lights_lambert_pars_fragment:eS,lights_pars_begin:tS,lights_toon_fragment:iS,lights_toon_pars_fragment:rS,lights_phong_fragment:sS,lights_phong_pars_fragment:aS,lights_physical_fragment:oS,lights_physical_pars_fragment:lS,lights_fragment_begin:uS,lights_fragment_maps:cS,lights_fragment_end:fS,logdepthbuf_fragment:dS,logdepthbuf_pars_fragment:hS,logdepthbuf_pars_vertex:pS,logdepthbuf_vertex:mS,map_fragment:gS,map_pars_fragment:_S,map_particle_fragment:vS,map_particle_pars_fragment:xS,metalnessmap_fragment:SS,metalnessmap_pars_fragment:yS,morphinstance_vertex:MS,morphcolor_vertex:ES,morphnormal_vertex:TS,morphtarget_pars_vertex:wS,morphtarget_vertex:AS,normal_fragment_begin:CS,normal_fragment_maps:RS,normal_pars_fragment:bS,normal_pars_vertex:PS,normal_vertex:LS,normalmap_pars_fragment:DS,clearcoat_normal_fragment_begin:NS,clearcoat_normal_fragment_maps:IS,clearcoat_pars_fragment:US,iridescence_pars_fragment:FS,opaque_fragment:OS,packing:kS,premultiplied_alpha_fragment:BS,project_vertex:zS,dithering_fragment:VS,dithering_pars_fragment:HS,roughnessmap_fragment:GS,roughnessmap_pars_fragment:WS,shadowmap_pars_fragment:XS,shadowmap_pars_vertex:jS,shadowmap_vertex:YS,shadowmask_pars_fragment:qS,skinbase_vertex:$S,skinning_pars_vertex:KS,skinning_vertex:ZS,skinnormal_vertex:QS,specularmap_fragment:JS,specularmap_pars_fragment:ey,tonemapping_fragment:ty,tonemapping_pars_fragment:ny,transmission_fragment:iy,transmission_pars_fragment:ry,uv_pars_fragment:sy,uv_pars_vertex:ay,uv_vertex:oy,worldpos_vertex:ly,background_vert:uy,background_frag:cy,backgroundCube_vert:fy,backgroundCube_frag:dy,cube_vert:hy,cube_frag:py,depth_vert:my,depth_frag:gy,distance_vert:_y,distance_frag:vy,equirect_vert:xy,equirect_frag:Sy,linedashed_vert:yy,linedashed_frag:My,meshbasic_vert:Ey,meshbasic_frag:Ty,meshlambert_vert:wy,meshlambert_frag:Ay,meshmatcap_vert:Cy,meshmatcap_frag:Ry,meshnormal_vert:by,meshnormal_frag:Py,meshphong_vert:Ly,meshphong_frag:Dy,meshphysical_vert:Ny,meshphysical_frag:Iy,meshtoon_vert:Uy,meshtoon_frag:Fy,points_vert:Oy,points_frag:ky,shadow_vert:By,shadow_frag:zy,sprite_vert:Vy,sprite_frag:Hy},Ne={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},wi={basic:{uniforms:An([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:An([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:An([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:An([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:An([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:An([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:An([Ne.points,Ne.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:An([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:An([Ne.common,Ne.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:An([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:An([Ne.sprite,Ne.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:An([Ne.common,Ne.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:An([Ne.lights,Ne.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};wi.physical={uniforms:An([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const wl={r:0,b:0,g:0},qr=new Li,Gy=new Xt;function Wy(a,e,n,r,o,u,f){const d=new Tt(0);let p=u===!0?0:1,m,g,_=null,x=0,y=null;function T(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?n:e).get(D)),D}function C(L){let D=!1;const I=T(L);I===null?v(d,p):I&&I.isColor&&(v(I,1),D=!0);const F=a.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(a.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function S(L,D){const I=T(D);I&&(I.isCubeTexture||I.mapping===Ol)?(g===void 0&&(g=new _i(new $a(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Xs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,O,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),qr.copy(D.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(qr)),g.material.toneMapped=Et.getTransfer(I.colorSpace)!==Nt,(_!==I||x!==I.version||y!==a.toneMapping)&&(g.material.needsUpdate=!0,_=I,x=I.version,y=a.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new _i(new Bl(2,2),new Di({name:"BackgroundMaterial",uniforms:Xs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Et.getTransfer(I.colorSpace)!==Nt,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||x!==I.version||y!==a.toneMapping)&&(m.material.needsUpdate=!0,_=I,x=I.version,y=a.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function v(L,D){L.getRGB(wl,cg(a)),r.buffers.color.setClear(wl.r,wl.g,wl.b,D,f)}function b(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),p=D,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,v(d,p)},render:C,addToRenderList:S,dispose:b}}function Xy(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=x(null);let u=o,f=!1;function d(R,z,re,Z,fe){let ue=!1;const oe=_(Z,re,z);u!==oe&&(u=oe,m(u.object)),ue=y(R,Z,re,fe),ue&&T(R,Z,re,fe),fe!==null&&e.update(fe,a.ELEMENT_ARRAY_BUFFER),(ue||f)&&(f=!1,D(R,z,re,Z),fe!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return a.createVertexArray()}function m(R){return a.bindVertexArray(R)}function g(R){return a.deleteVertexArray(R)}function _(R,z,re){const Z=re.wireframe===!0;let fe=r[R.id];fe===void 0&&(fe={},r[R.id]=fe);let ue=fe[z.id];ue===void 0&&(ue={},fe[z.id]=ue);let oe=ue[Z];return oe===void 0&&(oe=x(p()),ue[Z]=oe),oe}function x(R){const z=[],re=[],Z=[];for(let fe=0;fe<n;fe++)z[fe]=0,re[fe]=0,Z[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:re,attributeDivisors:Z,object:R,attributes:{},index:null}}function y(R,z,re,Z){const fe=u.attributes,ue=z.attributes;let oe=0;const Y=re.getAttributes();for(const X in Y)if(Y[X].location>=0){const ne=fe[X];let U=ue[X];if(U===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),ne===void 0||ne.attribute!==U||U&&ne.data!==U.data)return!0;oe++}return u.attributesNum!==oe||u.index!==Z}function T(R,z,re,Z){const fe={},ue=z.attributes;let oe=0;const Y=re.getAttributes();for(const X in Y)if(Y[X].location>=0){let ne=ue[X];ne===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));const U={};U.attribute=ne,ne&&ne.data&&(U.data=ne.data),fe[X]=U,oe++}u.attributes=fe,u.attributesNum=oe,u.index=Z}function C(){const R=u.newAttributes;for(let z=0,re=R.length;z<re;z++)R[z]=0}function S(R){v(R,0)}function v(R,z){const re=u.newAttributes,Z=u.enabledAttributes,fe=u.attributeDivisors;re[R]=1,Z[R]===0&&(a.enableVertexAttribArray(R),Z[R]=1),fe[R]!==z&&(a.vertexAttribDivisor(R,z),fe[R]=z)}function b(){const R=u.newAttributes,z=u.enabledAttributes;for(let re=0,Z=z.length;re<Z;re++)z[re]!==R[re]&&(a.disableVertexAttribArray(re),z[re]=0)}function L(R,z,re,Z,fe,ue,oe){oe===!0?a.vertexAttribIPointer(R,z,re,fe,ue):a.vertexAttribPointer(R,z,re,Z,fe,ue)}function D(R,z,re,Z){C();const fe=Z.attributes,ue=re.getAttributes(),oe=z.defaultAttributeValues;for(const Y in ue){const X=ue[Y];if(X.location>=0){let de=fe[Y];if(de===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){const ne=de.normalized,U=de.itemSize,ie=e.get(de);if(ie===void 0)continue;const be=ie.buffer,Ye=ie.type,Ke=ie.bytesPerElement,ee=Ye===a.INT||Ye===a.UNSIGNED_INT||de.gpuType===td;if(de.isInterleavedBufferAttribute){const ce=de.data,ye=ce.stride,ke=de.offset;if(ce.isInstancedInterleavedBuffer){for(let Ie=0;Ie<X.locationSize;Ie++)v(X.location+Ie,ce.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ie=0;Ie<X.locationSize;Ie++)S(X.location+Ie);a.bindBuffer(a.ARRAY_BUFFER,be);for(let Ie=0;Ie<X.locationSize;Ie++)L(X.location+Ie,U/X.locationSize,Ye,ne,ye*Ke,(ke+U/X.locationSize*Ie)*Ke,ee)}else{if(de.isInstancedBufferAttribute){for(let ce=0;ce<X.locationSize;ce++)v(X.location+ce,de.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ce=0;ce<X.locationSize;ce++)S(X.location+ce);a.bindBuffer(a.ARRAY_BUFFER,be);for(let ce=0;ce<X.locationSize;ce++)L(X.location+ce,U/X.locationSize,Ye,ne,U*Ke,U/X.locationSize*ce*Ke,ee)}}else if(oe!==void 0){const ne=oe[Y];if(ne!==void 0)switch(ne.length){case 2:a.vertexAttrib2fv(X.location,ne);break;case 3:a.vertexAttrib3fv(X.location,ne);break;case 4:a.vertexAttrib4fv(X.location,ne);break;default:a.vertexAttrib1fv(X.location,ne)}}}}b()}function I(){j();for(const R in r){const z=r[R];for(const re in z){const Z=z[re];for(const fe in Z)g(Z[fe].object),delete Z[fe];delete z[re]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const re in z){const Z=z[re];for(const fe in Z)g(Z[fe].object),delete Z[fe];delete z[re]}delete r[R.id]}function O(R){for(const z in r){const re=r[z];if(re[R.id]===void 0)continue;const Z=re[R.id];for(const fe in Z)g(Z[fe].object),delete Z[fe];delete re[R.id]}}function j(){A(),f=!0,u!==o&&(u=o,m(u.object))}function A(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:j,resetDefaultState:A,dispose:I,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:S,disableUnusedAttributes:b}}function jy(a,e,n){let r;function o(m){r=m}function u(m,g){a.drawArrays(r,m,g),n.update(g,r,1)}function f(m,g,_){_!==0&&(a.drawArraysInstanced(r,m,g,_),n.update(g,r,_))}function d(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let y=0;for(let T=0;T<_;T++)y+=g[T];n.update(y,r,1)}function p(m,g,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<m.length;T++)f(m[T],g[T],x[T]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,_);let T=0;for(let C=0;C<_;C++)T+=g[C]*x[C];n.update(T,r,1)}}this.setMode=o,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Yy(a,e,n,r){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(O){return!(O!==mi&&r.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const j=O===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==jn&&r.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ai&&!j)}function p(O){if(O==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(at("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),b=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),L=a.getParameter(a.MAX_VARYING_VECTORS),D=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),I=a.getParameter(a.MAX_SAMPLES),F=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:D,maxSamples:I,samples:F}}function qy(a){const e=this;let n=null,r=0,o=!1,u=!1;const f=new Kr,d=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||r!==0||o;return o=x,r=_.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,y){const T=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,v=a.get(_);if(!o||T===null||T.length===0||u&&!S)u?g(null):m();else{const b=u?0:r,L=b*4;let D=v.clippingState||null;p.value=D,D=g(T,x,L,y);for(let I=0;I!==L;++I)D[I]=n[I];v.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=b}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,x,y,T){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=p.value,T!==!0||S===null){const v=y+C*4,b=x.matrixWorldInverse;d.getNormalMatrix(b),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,D=y;L!==C;++L,D+=4)f.copy(_[L]).applyMatrix4(b,d),f.normal.toArray(S,D),S[D+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}function $y(a){let e=new WeakMap;function n(f,d){return d===df?f.mapping=ts:d===hf&&(f.mapping=Hs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===df||d===hf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new hg(p.height);return m.fromEquirectangularTexture(a,f),e.set(f,m),f.addEventListener("dispose",o),n(m.texture,f.mapping)}else return null}}return f}function o(f){const d=f.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const wr=4,_m=[.125,.215,.35,.446,.526,.582],Qr=20,Ky=256,ka=new _g,vm=new Tt;let Kc=null,Zc=0,Qc=0,Jc=!1;const Zy=new Q;class xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,u={}){const{size:f=256,position:d=Zy}=u;Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ym(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,Zc,Qc),this._renderer.xr.enabled=Jc,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ts||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Ki,format:mi,colorSpace:Ws,depthBuffer:!1},o=Sm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sm(e,n,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Qy(u)),this._blurMaterial=eM(u,e,n),this._ggxMaterial=Jy(u,e,n)}return o}_compileMaterial(e){const n=new _i(new ii,e);this._renderer.compile(n,ka)}_sceneToCubeUV(e,n,r,o,u){const p=new Xn(90,1,n,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(vm),_.toneMapping=Ri,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _i(new $a,new cd({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let v=!1;const b=e.background;b?b.isColor&&(S.color.copy(b),e.background=null,v=!0):(S.color.copy(vm),v=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(p.up.set(0,m[L],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[L],u.y,u.z)):D===1?(p.up.set(0,0,m[L]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[L],u.z)):(p.up.set(0,m[L],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[L]));const I=this._cubeSize;ks(o,D*I,L>2?I:0,I,I),_.setRenderTarget(o),v&&_.render(C,p),_.render(e,p)}_.toneMapping=y,_.autoClear=x,e.background=b}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ts||e.mapping===Hs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ym());const u=o?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;ks(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,ka)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let u=1;u<o;u++)this._applyGGXFilter(e,u-1,u);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[r];d.material=f;const p=f.uniforms,m=r/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(m*m-g*g),x=0+m*1.25,y=_*x,{_lodMax:T}=this,C=this._sizeLods[r],S=3*C*(r>T-wr?r-T+wr:0),v=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=T-n,ks(u,S,v,3*C,2*C),o.setRenderTarget(u),o.render(d,ka),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=T-r,ks(e,S,v,3*C,2*C),o.setRenderTarget(e),o.render(d,ka)}_blur(e,n,r,o,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,o,"latitudinal",u),this._halfBlur(f,e,r,r,o,"longitudinal",u)}_halfBlur(e,n,r,o,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=m;const x=m.uniforms,y=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Qr-1),C=u/T,S=isFinite(u)?1+Math.floor(g*C):Qr;S>Qr&&at(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Qr}`);const v=[];let b=0;for(let O=0;O<Qr;++O){const j=O/C,A=Math.exp(-j*j/2);v.push(A),O===0?b+=A:O<S&&(b+=2*A)}for(let O=0;O<v.length;O++)v[O]=v[O]/b;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-r;const D=this._sizeLods[o],I=3*D*(o>L-wr?o-L+wr:0),F=4*(this._cubeSize-D);ks(n,I,F,3*D,2*D),p.setRenderTarget(n),p.render(_,ka)}}function Qy(a){const e=[],n=[],r=[];let o=a;const u=a-wr+1+_m.length;for(let f=0;f<u;f++){const d=Math.pow(2,o);e.push(d);let p=1/d;f>a-wr?p=_m[f-a+wr-1]:f===0&&(p=0),n.push(p);const m=1/(d-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,T=6,C=3,S=2,v=1,b=new Float32Array(C*T*y),L=new Float32Array(S*T*y),D=new Float32Array(v*T*y);for(let F=0;F<y;F++){const O=F%3*2/3-1,j=F>2?0:-1,A=[O,j,0,O+2/3,j,0,O+2/3,j+1,0,O,j,0,O+2/3,j+1,0,O,j+1,0];b.set(A,C*T*F),L.set(x,S*T*F);const R=[F,F,F,F,F,F];D.set(R,v*T*F)}const I=new ii;I.setAttribute("position",new gi(b,C)),I.setAttribute("uv",new gi(L,S)),I.setAttribute("faceIndex",new gi(D,v)),r.push(new _i(I,null)),o>wr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Sm(a,e,n){const r=new bi(a,e,n);return r.texture.mapping=Ol,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ks(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function Jy(a,e,n){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ky,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function eM(a,e,n){const r=new Float32Array(Qr),o=new Q(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:zl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function ym(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Mm(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function zl(){return`

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
	`}function tM(a){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===df||p===hf,g=p===ts||p===Hs;if(m||g){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new xm(a)),_=m?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return m&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new xm(a)),_=m?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function o(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function nM(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Wa("WebGLRenderer: "+r+" extension not supported."),o}}}function iM(a,e,n,r){const o={},u=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete o[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(_,x){return o[x.id]===!0||(x.addEventListener("dispose",f),o[x.id]=!0,n.memory.geometries++),x}function p(_){const x=_.attributes;for(const y in x)e.update(x[y],a.ARRAY_BUFFER)}function m(_){const x=[],y=_.index,T=_.attributes.position;let C=0;if(y!==null){const b=y.array;C=y.version;for(let L=0,D=b.length;L<D;L+=3){const I=b[L+0],F=b[L+1],O=b[L+2];x.push(I,F,F,O,O,I)}}else if(T!==void 0){const b=T.array;C=T.version;for(let L=0,D=b.length/3-1;L<D;L+=3){const I=L+0,F=L+1,O=L+2;x.push(I,F,F,O,O,I)}}else return;const S=new(ig(x)?ug:lg)(x,1);S.version=C;const v=u.get(_);v&&e.remove(v),u.set(_,S)}function g(_){const x=u.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&m(_)}else m(_);return u.get(_)}return{get:d,update:p,getWireframeAttribute:g}}function rM(a,e,n){let r;function o(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,y){a.drawElements(r,y,u,x*f),n.update(y,r,1)}function m(x,y,T){T!==0&&(a.drawElementsInstanced(r,y,u,x*f,T),n.update(y,r,T))}function g(x,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,T);let S=0;for(let v=0;v<T;v++)S+=y[v];n.update(S,r,1)}function _(x,y,T,C){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)m(x[v]/f,y[v],C[v]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,C,0,T);let v=0;for(let b=0;b<T;b++)v+=y[b]*C[b];n.update(v,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function sM(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=d*(u/3);break;case a.LINES:n.lines+=d*(u/2);break;case a.LINE_STRIP:n.lines+=d*(u-1);break;case a.LINE_LOOP:n.lines+=d*u;break;case a.POINTS:n.points+=d*u;break;default:Ct("WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function aM(a,e,n){const r=new WeakMap,o=new Yt;function u(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==_){let R=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;T===!0&&(D=1),C===!0&&(D=2),S===!0&&(D=3);let I=d.attributes.position.count*D,F=1;I>e.maxTextureSize&&(F=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const O=new Float32Array(I*F*4*_),j=new rg(O,I,F,_);j.type=Ai,j.needsUpdate=!0;const A=D*4;for(let z=0;z<_;z++){const re=v[z],Z=b[z],fe=L[z],ue=I*F*4*z;for(let oe=0;oe<re.count;oe++){const Y=oe*A;T===!0&&(o.fromBufferAttribute(re,oe),O[ue+Y+0]=o.x,O[ue+Y+1]=o.y,O[ue+Y+2]=o.z,O[ue+Y+3]=0),C===!0&&(o.fromBufferAttribute(Z,oe),O[ue+Y+4]=o.x,O[ue+Y+5]=o.y,O[ue+Y+6]=o.z,O[ue+Y+7]=0),S===!0&&(o.fromBufferAttribute(fe,oe),O[ue+Y+8]=o.x,O[ue+Y+9]=o.y,O[ue+Y+10]=o.z,O[ue+Y+11]=fe.itemSize===4?o.w:1)}}x={count:_,texture:j,size:new bt(I,F)},r.set(d,x),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const C=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(a,"morphTargetBaseInfluence",C),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:u}}function oM(a,e,n,r){let o=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,_=e.get(p,g);if(o.get(_)!==m&&(e.update(_),o.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return _}function f(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const lM={[Vm]:"LINEAR_TONE_MAPPING",[Hm]:"REINHARD_TONE_MAPPING",[Gm]:"CINEON_TONE_MAPPING",[Wm]:"ACES_FILMIC_TONE_MAPPING",[jm]:"AGX_TONE_MAPPING",[Ym]:"NEUTRAL_TONE_MAPPING",[Xm]:"CUSTOM_TONE_MAPPING"};function uM(a,e,n,r,o){const u=new bi(e,n,{type:a,depthBuffer:r,stencilBuffer:o}),f=new bi(e,n,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),d=new ii;d.setAttribute("position",new ni([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ni([0,2,0,0,2,0],2));const p=new ex({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new _i(d,p),g=new _g(-1,1,1,-1,0,1);let _=null,x=null,y=!1,T,C=null,S=[],v=!1;this.setSize=function(b,L){u.setSize(b,L),f.setSize(b,L);for(let D=0;D<S.length;D++){const I=S[D];I.setSize&&I.setSize(b,L)}},this.setEffects=function(b){S=b,v=S.length>0&&S[0].isRenderPass===!0;const L=u.width,D=u.height;for(let I=0;I<S.length;I++){const F=S[I];F.setSize&&F.setSize(L,D)}},this.begin=function(b,L){if(y||b.toneMapping===Ri&&S.length===0)return!1;if(C=L,L!==null){const D=L.width,I=L.height;(u.width!==D||u.height!==I)&&this.setSize(D,I)}return v===!1&&b.setRenderTarget(u),T=b.toneMapping,b.toneMapping=Ri,!0},this.hasRenderPass=function(){return v},this.end=function(b,L){b.toneMapping=T,y=!0;let D=u,I=f;for(let F=0;F<S.length;F++){const O=S[F];if(O.enabled!==!1&&(O.render(b,I,D,L),O.needsSwap!==!1)){const j=D;D=I,I=j}}if(_!==b.outputColorSpace||x!==b.toneMapping){_=b.outputColorSpace,x=b.toneMapping,p.defines={},Et.getTransfer(_)===Nt&&(p.defines.SRGB_TRANSFER="");const F=lM[x];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=D.texture,b.setRenderTarget(C),b.render(m,g),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),f.dispose(),d.dispose(),p.dispose()}}const xg=new Cn,Kf=new Xa(1,1),Sg=new rg,yg=new bv,Mg=new dg,Em=[],Tm=[],wm=new Float32Array(16),Am=new Float32Array(9),Cm=new Float32Array(4);function qs(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let u=Em[o];if(u===void 0&&(u=new Float32Array(o),Em[o]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,a[f].toArray(u,d)}return u}function tn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function nn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Vl(a,e){let n=Tm[e];n===void 0&&(n=new Int32Array(e),Tm[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function cM(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function fM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;a.uniform2fv(this.addr,e),nn(n,e)}}function dM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(tn(n,e))return;a.uniform3fv(this.addr,e),nn(n,e)}}function hM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;a.uniform4fv(this.addr,e),nn(n,e)}}function pM(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;Cm.set(r),a.uniformMatrix2fv(this.addr,!1,Cm),nn(n,r)}}function mM(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;Am.set(r),a.uniformMatrix3fv(this.addr,!1,Am),nn(n,r)}}function gM(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;wm.set(r),a.uniformMatrix4fv(this.addr,!1,wm),nn(n,r)}}function _M(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function vM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;a.uniform2iv(this.addr,e),nn(n,e)}}function xM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;a.uniform3iv(this.addr,e),nn(n,e)}}function SM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;a.uniform4iv(this.addr,e),nn(n,e)}}function yM(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function MM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;a.uniform2uiv(this.addr,e),nn(n,e)}}function EM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;a.uniform3uiv(this.addr,e),nn(n,e)}}function TM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;a.uniform4uiv(this.addr,e),nn(n,e)}}function wM(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let u;this.type===a.SAMPLER_2D_SHADOW?(Kf.compareFunction=n.isReversedDepthBuffer()?ld:od,u=Kf):u=xg,n.setTexture2D(e||u,o)}function AM(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||yg,o)}function CM(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Mg,o)}function RM(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Sg,o)}function bM(a){switch(a){case 5126:return cM;case 35664:return fM;case 35665:return dM;case 35666:return hM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return _M;case 35667:case 35671:return vM;case 35668:case 35672:return xM;case 35669:case 35673:return SM;case 5125:return yM;case 36294:return MM;case 36295:return EM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return RM}}function PM(a,e){a.uniform1fv(this.addr,e)}function LM(a,e){const n=qs(e,this.size,2);a.uniform2fv(this.addr,n)}function DM(a,e){const n=qs(e,this.size,3);a.uniform3fv(this.addr,n)}function NM(a,e){const n=qs(e,this.size,4);a.uniform4fv(this.addr,n)}function IM(a,e){const n=qs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function UM(a,e){const n=qs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function FM(a,e){const n=qs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function OM(a,e){a.uniform1iv(this.addr,e)}function kM(a,e){a.uniform2iv(this.addr,e)}function BM(a,e){a.uniform3iv(this.addr,e)}function zM(a,e){a.uniform4iv(this.addr,e)}function VM(a,e){a.uniform1uiv(this.addr,e)}function HM(a,e){a.uniform2uiv(this.addr,e)}function GM(a,e){a.uniform3uiv(this.addr,e)}function WM(a,e){a.uniform4uiv(this.addr,e)}function XM(a,e,n){const r=this.cache,o=e.length,u=Vl(n,o);tn(r,u)||(a.uniform1iv(this.addr,u),nn(r,u));let f;this.type===a.SAMPLER_2D_SHADOW?f=Kf:f=xg;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||f,u[d])}function jM(a,e,n){const r=this.cache,o=e.length,u=Vl(n,o);tn(r,u)||(a.uniform1iv(this.addr,u),nn(r,u));for(let f=0;f!==o;++f)n.setTexture3D(e[f]||yg,u[f])}function YM(a,e,n){const r=this.cache,o=e.length,u=Vl(n,o);tn(r,u)||(a.uniform1iv(this.addr,u),nn(r,u));for(let f=0;f!==o;++f)n.setTextureCube(e[f]||Mg,u[f])}function qM(a,e,n){const r=this.cache,o=e.length,u=Vl(n,o);tn(r,u)||(a.uniform1iv(this.addr,u),nn(r,u));for(let f=0;f!==o;++f)n.setTexture2DArray(e[f]||Sg,u[f])}function $M(a){switch(a){case 5126:return PM;case 35664:return LM;case 35665:return DM;case 35666:return NM;case 35674:return IM;case 35675:return UM;case 35676:return FM;case 5124:case 35670:return OM;case 35667:case 35671:return kM;case 35668:case 35672:return BM;case 35669:case 35673:return zM;case 5125:return VM;case 36294:return HM;case 36295:return GM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return jM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return qM}}class KM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=bM(n.type)}}class ZM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$M(n.type)}}class QM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let u=0,f=o.length;u!==f;++u){const d=o[u];d.setValue(e,n[d.id],r)}}}const ef=/(\w+)(\])?(\[|\.)?/g;function Rm(a,e){a.seq.push(e),a.map[e.id]=e}function JM(a,e,n){const r=a.name,o=r.length;for(ef.lastIndex=0;;){const u=ef.exec(r),f=ef.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===o){Rm(n,m===void 0?new KM(d,a,e):new ZM(d,a,e));break}else{let _=n.map[d];_===void 0&&(_=new QM(d),Rm(n,_)),n=_}}}class Dl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const d=e.getActiveUniform(n,f),p=e.getUniformLocation(n,d.name);JM(d,p,this)}const o=[],u=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(f):u.push(f);o.length>0&&(this.seq=o.concat(u))}setValue(e,n,r,o){const u=this.map[n];u!==void 0&&u.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,u=e.length;o!==u;++o){const f=e[o];f.id in n&&r.push(f)}return r}}function bm(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const eE=37297;let tE=0;function nE(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=o;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const Pm=new ut;function iE(a){Et._getMatrix(Pm,Et.workingColorSpace,a);const e=`mat3( ${Pm.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(a)){case Nl:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Lm(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),u=(a.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return n.toUpperCase()+`

`+u+`

`+nE(a.getShaderSource(e),d)}else return u}function rE(a,e){const n=iE(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const sE={[Vm]:"Linear",[Hm]:"Reinhard",[Gm]:"Cineon",[Wm]:"ACESFilmic",[jm]:"AgX",[Ym]:"Neutral",[Xm]:"Custom"};function aE(a,e){const n=sE[e];return n===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Al=new Q;function oE(){Et.getLuminanceCoefficients(Al);const a=Al.x.toFixed(4),e=Al.y.toFixed(4),n=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lE(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function uE(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function cE(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=a.getActiveAttrib(e,o),f=u.name;let d=1;u.type===a.FLOAT_MAT2&&(d=2),u.type===a.FLOAT_MAT3&&(d=3),u.type===a.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:a.getAttribLocation(e,f),locationSize:d}}return n}function Va(a){return a!==""}function Dm(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nm(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zf(a){return a.replace(fE,hE)}const dE=new Map;function hE(a,e){let n=ft[e];if(n===void 0){const r=dE.get(e);if(r!==void 0)n=ft[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Zf(n)}const pE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(a){return a.replace(pE,mE)}function mE(a,e,n,r){let o="";for(let u=parseInt(e);u<parseInt(n);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Um(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const gE={[Cl]:"SHADOWMAP_TYPE_PCF",[za]:"SHADOWMAP_TYPE_VSM"};function _E(a){return gE[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vE={[ts]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[Ol]:"ENVMAP_TYPE_CUBE_UV"};function xE(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":vE[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const SE={[Hs]:"ENVMAP_MODE_REFRACTION"};function yE(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":SE[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ME={[ed]:"ENVMAP_BLENDING_MULTIPLY",[cv]:"ENVMAP_BLENDING_MIX",[fv]:"ENVMAP_BLENDING_ADD"};function EE(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":ME[a.combine]||"ENVMAP_BLENDING_NONE"}function TE(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function wE(a,e,n,r){const o=a.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=_E(n),m=xE(n),g=yE(n),_=EE(n),x=TE(n),y=lE(n),T=uE(u),C=o.createProgram();let S,v,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Va).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Va).join(`
`),v.length>0&&(v+=`
`)):(S=[Um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),v=[Um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ri?"#define TONE_MAPPING":"",n.toneMapping!==Ri?ft.tonemapping_pars_fragment:"",n.toneMapping!==Ri?aE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,rE("linearToOutputTexel",n.outputColorSpace),oE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Va).join(`
`)),f=Zf(f),f=Dm(f,n),f=Nm(f,n),d=Zf(d),d=Dm(d,n),d=Nm(d,n),f=Im(f),d=Im(d),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",n.glslVersion===jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=b+S+f,D=b+v+d,I=bm(o,o.VERTEX_SHADER,L),F=bm(o,o.FRAGMENT_SHADER,D);o.attachShader(C,I),o.attachShader(C,F),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function O(z){if(a.debug.checkShaderErrors){const re=o.getProgramInfoLog(C)||"",Z=o.getShaderInfoLog(I)||"",fe=o.getShaderInfoLog(F)||"",ue=re.trim(),oe=Z.trim(),Y=fe.trim();let X=!0,de=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(X=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,C,I,F);else{const ne=Lm(o,I,"vertex"),U=Lm(o,F,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ue+`
`+ne+`
`+U)}else ue!==""?at("WebGLProgram: Program Info Log:",ue):(oe===""||Y==="")&&(de=!1);de&&(z.diagnostics={runnable:X,programLog:ue,vertexShader:{log:oe,prefix:S},fragmentShader:{log:Y,prefix:v}})}o.deleteShader(I),o.deleteShader(F),j=new Dl(o,C),A=cE(o,C)}let j;this.getUniforms=function(){return j===void 0&&O(this),j};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(C,eE)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tE++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=F,this}let AE=0;class CE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new RE(e),n.set(e,r)),r}}class RE{constructor(e){this.id=AE++,this.code=e,this.usedTimes=0}}function bE(a,e,n,r,o,u,f){const d=new ag,p=new CE,m=new Set,g=[],_=new Map,x=o.logarithmicDepthBuffer;let y=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(A){return m.add(A),A===0?"uv":`uv${A}`}function S(A,R,z,re,Z){const fe=re.fog,ue=Z.geometry,oe=A.isMeshStandardMaterial?re.environment:null,Y=(A.isMeshStandardMaterial?n:e).get(A.envMap||oe),X=Y&&Y.mapping===Ol?Y.image.height:null,de=T[A.type];A.precision!==null&&(y=o.getMaxPrecision(A.precision),y!==A.precision&&at("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const ne=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,U=ne!==void 0?ne.length:0;let ie=0;ue.morphAttributes.position!==void 0&&(ie=1),ue.morphAttributes.normal!==void 0&&(ie=2),ue.morphAttributes.color!==void 0&&(ie=3);let be,Ye,Ke,ee;if(de){const St=wi[de];be=St.vertexShader,Ye=St.fragmentShader}else be=A.vertexShader,Ye=A.fragmentShader,p.update(A),Ke=p.getVertexShaderID(A),ee=p.getFragmentShaderID(A);const ce=a.getRenderTarget(),ye=a.state.buffers.depth.getReversed(),ke=Z.isInstancedMesh===!0,Ie=Z.isBatchedMesh===!0,pt=!!A.map,qt=!!A.matcap,dt=!!Y,vt=!!A.aoMap,Pt=!!A.lightMap,lt=!!A.bumpMap,Bt=!!A.normalMap,B=!!A.displacementMap,zt=!!A.emissiveMap,mt=!!A.metalnessMap,xt=!!A.roughnessMap,We=A.anisotropy>0,P=A.clearcoat>0,M=A.dispersion>0,G=A.iridescence>0,he=A.sheen>0,me=A.transmission>0,le=We&&!!A.anisotropyMap,qe=P&&!!A.clearcoatMap,Te=P&&!!A.clearcoatNormalMap,Be=P&&!!A.clearcoatRoughnessMap,nt=G&&!!A.iridescenceMap,Se=G&&!!A.iridescenceThicknessMap,Re=he&&!!A.sheenColorMap,He=he&&!!A.sheenRoughnessMap,Xe=!!A.specularMap,Ae=!!A.specularColorMap,ot=!!A.specularIntensityMap,V=me&&!!A.transmissionMap,Le=me&&!!A.thicknessMap,Me=!!A.gradientMap,De=!!A.alphaMap,ve=A.alphaTest>0,pe=!!A.alphaHash,Ce=!!A.extensions;let it=Ri;A.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(it=a.toneMapping);const Dt={shaderID:de,shaderType:A.type,shaderName:A.name,vertexShader:be,fragmentShader:Ye,defines:A.defines,customVertexShaderID:Ke,customFragmentShaderID:ee,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Ie,batchingColor:Ie&&Z._colorsTexture!==null,instancing:ke,instancingColor:ke&&Z.instanceColor!==null,instancingMorph:ke&&Z.morphTexture!==null,outputColorSpace:ce===null?a.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ws,alphaToCoverage:!!A.alphaToCoverage,map:pt,matcap:qt,envMap:dt,envMapMode:dt&&Y.mapping,envMapCubeUVHeight:X,aoMap:vt,lightMap:Pt,bumpMap:lt,normalMap:Bt,displacementMap:B,emissiveMap:zt,normalMapObjectSpace:Bt&&A.normalMapType===pv,normalMapTangentSpace:Bt&&A.normalMapType===ng,metalnessMap:mt,roughnessMap:xt,anisotropy:We,anisotropyMap:le,clearcoat:P,clearcoatMap:qe,clearcoatNormalMap:Te,clearcoatRoughnessMap:Be,dispersion:M,iridescence:G,iridescenceMap:nt,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Re,sheenRoughnessMap:He,specularMap:Xe,specularColorMap:Ae,specularIntensityMap:ot,transmission:me,transmissionMap:V,thicknessMap:Le,gradientMap:Me,opaque:A.transparent===!1&&A.blending===Bs&&A.alphaToCoverage===!1,alphaMap:De,alphaTest:ve,alphaHash:pe,combine:A.combine,mapUv:pt&&C(A.map.channel),aoMapUv:vt&&C(A.aoMap.channel),lightMapUv:Pt&&C(A.lightMap.channel),bumpMapUv:lt&&C(A.bumpMap.channel),normalMapUv:Bt&&C(A.normalMap.channel),displacementMapUv:B&&C(A.displacementMap.channel),emissiveMapUv:zt&&C(A.emissiveMap.channel),metalnessMapUv:mt&&C(A.metalnessMap.channel),roughnessMapUv:xt&&C(A.roughnessMap.channel),anisotropyMapUv:le&&C(A.anisotropyMap.channel),clearcoatMapUv:qe&&C(A.clearcoatMap.channel),clearcoatNormalMapUv:Te&&C(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&C(A.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&C(A.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&C(A.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&C(A.sheenColorMap.channel),sheenRoughnessMapUv:He&&C(A.sheenRoughnessMap.channel),specularMapUv:Xe&&C(A.specularMap.channel),specularColorMapUv:Ae&&C(A.specularColorMap.channel),specularIntensityMapUv:ot&&C(A.specularIntensityMap.channel),transmissionMapUv:V&&C(A.transmissionMap.channel),thicknessMapUv:Le&&C(A.thicknessMap.channel),alphaMapUv:De&&C(A.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Bt||We),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ue.attributes.uv&&(pt||De),fog:!!fe,useFog:A.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ye,skinning:Z.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&z.length>0,shadowMapType:a.shadowMap.type,toneMapping:it,decodeVideoTexture:pt&&A.map.isVideoTexture===!0&&Et.getTransfer(A.map.colorSpace)===Nt,decodeVideoTextureEmissive:zt&&A.emissiveMap.isVideoTexture===!0&&Et.getTransfer(A.emissiveMap.colorSpace)===Nt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ji,flipSided:A.side===On,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ce&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&A.extensions.multiDraw===!0||Ie)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Dt.vertexUv1s=m.has(1),Dt.vertexUv2s=m.has(2),Dt.vertexUv3s=m.has(3),m.clear(),Dt}function v(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const z in A.defines)R.push(z),R.push(A.defines[z]);return A.isRawShaderMaterial===!1&&(b(R,A),L(R,A),R.push(a.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function b(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function L(A,R){d.disableAll(),R.instancing&&d.enable(0),R.instancingColor&&d.enable(1),R.instancingMorph&&d.enable(2),R.matcap&&d.enable(3),R.envMap&&d.enable(4),R.normalMapObjectSpace&&d.enable(5),R.normalMapTangentSpace&&d.enable(6),R.clearcoat&&d.enable(7),R.iridescence&&d.enable(8),R.alphaTest&&d.enable(9),R.vertexColors&&d.enable(10),R.vertexAlphas&&d.enable(11),R.vertexUv1s&&d.enable(12),R.vertexUv2s&&d.enable(13),R.vertexUv3s&&d.enable(14),R.vertexTangents&&d.enable(15),R.anisotropy&&d.enable(16),R.alphaHash&&d.enable(17),R.batching&&d.enable(18),R.dispersion&&d.enable(19),R.batchingColor&&d.enable(20),R.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),A.push(d.mask)}function D(A){const R=T[A.type];let z;if(R){const re=wi[R];z=Hv.clone(re.uniforms)}else z=A.uniforms;return z}function I(A,R){let z=_.get(R);return z!==void 0?++z.usedTimes:(z=new wE(a,R,A,u),g.push(z),_.set(R,z)),z}function F(A){if(--A.usedTimes===0){const R=g.indexOf(A);g[R]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function O(A){p.remove(A)}function j(){p.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:D,acquireProgram:I,releaseProgram:F,releaseShaderCache:O,programs:g,dispose:j}}function PE(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let d=a.get(f);return d===void 0&&(d={},a.set(f,d)),d}function r(f){a.delete(f)}function o(f,d,p){a.get(f)[d]=p}function u(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:u}}function LE(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Fm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Om(){const a=[];let e=0;const n=[],r=[],o=[];function u(){e=0,n.length=0,r.length=0,o.length=0}function f(_,x,y,T,C,S){let v=a[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:T,renderOrder:_.renderOrder,z:C,group:S},a[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=C,v.group=S),e++,v}function d(_,x,y,T,C,S){const v=f(_,x,y,T,C,S);y.transmission>0?r.push(v):y.transparent===!0?o.push(v):n.push(v)}function p(_,x,y,T,C,S){const v=f(_,x,y,T,C,S);y.transmission>0?r.unshift(v):y.transparent===!0?o.unshift(v):n.unshift(v)}function m(_,x){n.length>1&&n.sort(_||LE),r.length>1&&r.sort(x||Fm),o.length>1&&o.sort(x||Fm)}function g(){for(let _=e,x=a.length;_<x;_++){const y=a[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:o,init:u,push:d,unshift:p,finish:g,sort:m}}function DE(){let a=new WeakMap;function e(r,o){const u=a.get(r);let f;return u===void 0?(f=new Om,a.set(r,[f])):o>=u.length?(f=new Om,u.push(f)):f=u[o],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function NE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new Tt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":n={color:new Tt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return a[e.id]=n,n}}}function IE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let UE=0;function FE(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function OE(a){const e=new NE,n=IE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const o=new Q,u=new Xt,f=new Xt;function d(m){let g=0,_=0,x=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let y=0,T=0,C=0,S=0,v=0,b=0,L=0,D=0,I=0,F=0,O=0;m.sort(FE);for(let A=0,R=m.length;A<R;A++){const z=m[A],re=z.color,Z=z.intensity,fe=z.distance;let ue=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Gs?ue=z.shadow.map.texture:ue=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)g+=re.r*Z,_+=re.g*Z,x+=re.b*Z;else if(z.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(z.sh.coefficients[oe],Z);O++}else if(z.isDirectionalLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Y=z.shadow,X=n.get(z);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,r.directionalShadow[y]=X,r.directionalShadowMap[y]=ue,r.directionalShadowMatrix[y]=z.shadow.matrix,b++}r.directional[y]=oe,y++}else if(z.isSpotLight){const oe=e.get(z);oe.position.setFromMatrixPosition(z.matrixWorld),oe.color.copy(re).multiplyScalar(Z),oe.distance=fe,oe.coneCos=Math.cos(z.angle),oe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),oe.decay=z.decay,r.spot[C]=oe;const Y=z.shadow;if(z.map&&(r.spotLightMap[I]=z.map,I++,Y.updateMatrices(z),z.castShadow&&F++),r.spotLightMatrix[C]=Y.matrix,z.castShadow){const X=n.get(z);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,r.spotShadow[C]=X,r.spotShadowMap[C]=ue,D++}C++}else if(z.isRectAreaLight){const oe=e.get(z);oe.color.copy(re).multiplyScalar(Z),oe.halfWidth.set(z.width*.5,0,0),oe.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=oe,S++}else if(z.isPointLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),oe.distance=z.distance,oe.decay=z.decay,z.castShadow){const Y=z.shadow,X=n.get(z);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,r.pointShadow[T]=X,r.pointShadowMap[T]=ue,r.pointShadowMatrix[T]=z.shadow.matrix,L++}r.point[T]=oe,T++}else if(z.isHemisphereLight){const oe=e.get(z);oe.skyColor.copy(z.color).multiplyScalar(Z),oe.groundColor.copy(z.groundColor).multiplyScalar(Z),r.hemi[v]=oe,v++}}S>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==y||j.pointLength!==T||j.spotLength!==C||j.rectAreaLength!==S||j.hemiLength!==v||j.numDirectionalShadows!==b||j.numPointShadows!==L||j.numSpotShadows!==D||j.numSpotMaps!==I||j.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=S,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=D+I-F,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,j.directionalLength=y,j.pointLength=T,j.spotLength=C,j.rectAreaLength=S,j.hemiLength=v,j.numDirectionalShadows=b,j.numPointShadows=L,j.numSpotShadows=D,j.numSpotMaps=I,j.numLightProbes=O,r.version=UE++)}function p(m,g){let _=0,x=0,y=0,T=0,C=0;const S=g.matrixWorldInverse;for(let v=0,b=m.length;v<b;v++){const L=m[v];if(L.isDirectionalLight){const D=r.directional[_];D.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),_++}else if(L.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),f.identity(),u.copy(L.matrixWorld),u.premultiply(S),f.extractRotation(u),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),T++}else if(L.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const D=r.hemi[C];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(S),C++}}}return{setup:d,setupView:p,state:r}}function km(a){const e=new OE(a),n=[],r=[];function o(g){m.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function f(g){r.push(g)}function d(){e.setup(n)}function p(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function kE(a){let e=new WeakMap;function n(o,u=0){const f=e.get(o);let d;return f===void 0?(d=new km(a),e.set(o,[d])):u>=f.length?(d=new km(a),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const BE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zE=`uniform sampler2D shadow_pass;
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
}`,VE=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],HE=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Bm=new Xt,Ba=new Q,tf=new Q;function GE(a,e,n){let r=new fd;const o=new bt,u=new bt,f=new Yt,d=new nx,p=new ix,m={},g=n.maxTextureSize,_={[Ar]:On,[On]:Ar,[ji]:ji},x=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:BE,fragmentShader:zE}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const T=new ii;T.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new _i(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let v=this.type;this.render=function(F,O,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;F.type===X_&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Cl);const A=a.getRenderTarget(),R=a.getActiveCubeFace(),z=a.getActiveMipmapLevel(),re=a.state;re.setBlending(qi),re.buffers.depth.getReversed()===!0?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const Z=v!==this.type;Z&&O.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(ue=>ue.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,ue=F.length;fe<ue;fe++){const oe=F[fe],Y=oe.shadow;if(Y===void 0){at("WebGLShadowMap:",oe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const X=Y.getFrameExtents();if(o.multiply(X),u.copy(Y.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/X.x),o.x=u.x*X.x,Y.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/X.y),o.y=u.y*X.y,Y.mapSize.y=u.y)),Y.map===null||Z===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===za){if(oe.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new bi(o.x,o.y,{format:Gs,type:Ki,minFilter:yn,magFilter:yn,generateMipmaps:!1}),Y.map.texture.name=oe.name+".shadowMap",Y.map.depthTexture=new Xa(o.x,o.y,Ai),Y.map.depthTexture.name=oe.name+".shadowMapDepth",Y.map.depthTexture.format=Zi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=dn,Y.map.depthTexture.magFilter=dn}else{oe.isPointLight?(Y.map=new hg(o.x),Y.map.depthTexture=new Jv(o.x,Pi)):(Y.map=new bi(o.x,o.y),Y.map.depthTexture=new Xa(o.x,o.y,Pi)),Y.map.depthTexture.name=oe.name+".shadowMap",Y.map.depthTexture.format=Zi;const ne=a.state.buffers.depth.getReversed();this.type===Cl?(Y.map.depthTexture.compareFunction=ne?ld:od,Y.map.depthTexture.minFilter=yn,Y.map.depthTexture.magFilter=yn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=dn,Y.map.depthTexture.magFilter=dn)}Y.camera.updateProjectionMatrix()}const de=Y.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<de;ne++){if(Y.map.isWebGLCubeRenderTarget)a.setRenderTarget(Y.map,ne),a.clear();else{ne===0&&(a.setRenderTarget(Y.map),a.clear());const U=Y.getViewport(ne);f.set(u.x*U.x,u.y*U.y,u.x*U.z,u.y*U.w),re.viewport(f)}if(oe.isPointLight){const U=Y.camera,ie=Y.matrix,be=oe.distance||U.far;be!==U.far&&(U.far=be,U.updateProjectionMatrix()),Ba.setFromMatrixPosition(oe.matrixWorld),U.position.copy(Ba),tf.copy(U.position),tf.add(VE[ne]),U.up.copy(HE[ne]),U.lookAt(tf),U.updateMatrixWorld(),ie.makeTranslation(-Ba.x,-Ba.y,-Ba.z),Bm.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Bm,U.coordinateSystem,U.reversedDepth)}else Y.updateMatrices(oe);r=Y.getFrustum(),D(O,j,Y.camera,oe,this.type)}Y.isPointLightShadow!==!0&&this.type===za&&b(Y,j),Y.needsUpdate=!1}v=this.type,S.needsUpdate=!1,a.setRenderTarget(A,R,z)};function b(F,O){const j=e.update(C);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new bi(o.x,o.y,{format:Gs,type:Ki})),x.uniforms.shadow_pass.value=F.map.depthTexture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,a.setRenderTarget(F.mapPass),a.clear(),a.renderBufferDirect(O,null,j,x,C,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,a.setRenderTarget(F.map),a.clear(),a.renderBufferDirect(O,null,j,y,C,null)}function L(F,O,j,A){let R=null;const z=j.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)R=z;else if(R=j.isPointLight===!0?p:d,a.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const re=R.uuid,Z=O.uuid;let fe=m[re];fe===void 0&&(fe={},m[re]=fe);let ue=fe[Z];ue===void 0&&(ue=R.clone(),fe[Z]=ue,O.addEventListener("dispose",I)),R=ue}if(R.visible=O.visible,R.wireframe=O.wireframe,A===za?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:_[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const re=a.properties.get(R);re.light=j}return R}function D(F,O,j,A,R){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===za)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,F.matrixWorld);const Z=e.update(F),fe=F.material;if(Array.isArray(fe)){const ue=Z.groups;for(let oe=0,Y=ue.length;oe<Y;oe++){const X=ue[oe],de=fe[X.materialIndex];if(de&&de.visible){const ne=L(F,de,A,R);F.onBeforeShadow(a,F,O,j,Z,ne,X),a.renderBufferDirect(j,null,Z,ne,F,X),F.onAfterShadow(a,F,O,j,Z,ne,X)}}}else if(fe.visible){const ue=L(F,fe,A,R);F.onBeforeShadow(a,F,O,j,Z,ue,null),a.renderBufferDirect(j,null,Z,ue,F,null),F.onAfterShadow(a,F,O,j,Z,ue,null)}}const re=F.children;for(let Z=0,fe=re.length;Z<fe;Z++)D(re[Z],O,j,A,R)}function I(F){F.target.removeEventListener("dispose",I);for(const j in m){const A=m[j],R=F.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const WE={[sf]:af,[of]:cf,[lf]:ff,[Vs]:uf,[af]:sf,[cf]:of,[ff]:lf,[uf]:Vs};function XE(a,e){function n(){let V=!1;const Le=new Yt;let Me=null;const De=new Yt(0,0,0,0);return{setMask:function(ve){Me!==ve&&!V&&(a.colorMask(ve,ve,ve,ve),Me=ve)},setLocked:function(ve){V=ve},setClear:function(ve,pe,Ce,it,Dt){Dt===!0&&(ve*=it,pe*=it,Ce*=it),Le.set(ve,pe,Ce,it),De.equals(Le)===!1&&(a.clearColor(ve,pe,Ce,it),De.copy(Le))},reset:function(){V=!1,Me=null,De.set(-1,0,0,0)}}}function r(){let V=!1,Le=!1,Me=null,De=null,ve=null;return{setReversed:function(pe){if(Le!==pe){const Ce=e.get("EXT_clip_control");pe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Le=pe;const it=ve;ve=null,this.setClear(it)}},getReversed:function(){return Le},setTest:function(pe){pe?ce(a.DEPTH_TEST):ye(a.DEPTH_TEST)},setMask:function(pe){Me!==pe&&!V&&(a.depthMask(pe),Me=pe)},setFunc:function(pe){if(Le&&(pe=WE[pe]),De!==pe){switch(pe){case sf:a.depthFunc(a.NEVER);break;case af:a.depthFunc(a.ALWAYS);break;case of:a.depthFunc(a.LESS);break;case Vs:a.depthFunc(a.LEQUAL);break;case lf:a.depthFunc(a.EQUAL);break;case uf:a.depthFunc(a.GEQUAL);break;case cf:a.depthFunc(a.GREATER);break;case ff:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}De=pe}},setLocked:function(pe){V=pe},setClear:function(pe){ve!==pe&&(Le&&(pe=1-pe),a.clearDepth(pe),ve=pe)},reset:function(){V=!1,Me=null,De=null,ve=null,Le=!1}}}function o(){let V=!1,Le=null,Me=null,De=null,ve=null,pe=null,Ce=null,it=null,Dt=null;return{setTest:function(St){V||(St?ce(a.STENCIL_TEST):ye(a.STENCIL_TEST))},setMask:function(St){Le!==St&&!V&&(a.stencilMask(St),Le=St)},setFunc:function(St,kn,Mn){(Me!==St||De!==kn||ve!==Mn)&&(a.stencilFunc(St,kn,Mn),Me=St,De=kn,ve=Mn)},setOp:function(St,kn,Mn){(pe!==St||Ce!==kn||it!==Mn)&&(a.stencilOp(St,kn,Mn),pe=St,Ce=kn,it=Mn)},setLocked:function(St){V=St},setClear:function(St){Dt!==St&&(a.clearStencil(St),Dt=St)},reset:function(){V=!1,Le=null,Me=null,De=null,ve=null,pe=null,Ce=null,it=null,Dt=null}}}const u=new n,f=new r,d=new o,p=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,y=[],T=null,C=!1,S=null,v=null,b=null,L=null,D=null,I=null,F=null,O=new Tt(0,0,0),j=0,A=!1,R=null,z=null,re=null,Z=null,fe=null;const ue=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,Y=0;const X=a.getParameter(a.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),oe=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),oe=Y>=2);let de=null,ne={};const U=a.getParameter(a.SCISSOR_BOX),ie=a.getParameter(a.VIEWPORT),be=new Yt().fromArray(U),Ye=new Yt().fromArray(ie);function Ke(V,Le,Me,De){const ve=new Uint8Array(4),pe=a.createTexture();a.bindTexture(V,pe),a.texParameteri(V,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(V,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ce=0;Ce<Me;Ce++)V===a.TEXTURE_3D||V===a.TEXTURE_2D_ARRAY?a.texImage3D(Le,0,a.RGBA,1,1,De,0,a.RGBA,a.UNSIGNED_BYTE,ve):a.texImage2D(Le+Ce,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ve);return pe}const ee={};ee[a.TEXTURE_2D]=Ke(a.TEXTURE_2D,a.TEXTURE_2D,1),ee[a.TEXTURE_CUBE_MAP]=Ke(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[a.TEXTURE_2D_ARRAY]=Ke(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ee[a.TEXTURE_3D]=Ke(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ce(a.DEPTH_TEST),f.setFunc(Vs),lt(!1),Bt(zp),ce(a.CULL_FACE),vt(qi);function ce(V){g[V]!==!0&&(a.enable(V),g[V]=!0)}function ye(V){g[V]!==!1&&(a.disable(V),g[V]=!1)}function ke(V,Le){return _[V]!==Le?(a.bindFramebuffer(V,Le),_[V]=Le,V===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Le),V===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ie(V,Le){let Me=y,De=!1;if(V){Me=x.get(Le),Me===void 0&&(Me=[],x.set(Le,Me));const ve=V.textures;if(Me.length!==ve.length||Me[0]!==a.COLOR_ATTACHMENT0){for(let pe=0,Ce=ve.length;pe<Ce;pe++)Me[pe]=a.COLOR_ATTACHMENT0+pe;Me.length=ve.length,De=!0}}else Me[0]!==a.BACK&&(Me[0]=a.BACK,De=!0);De&&a.drawBuffers(Me)}function pt(V){return T!==V?(a.useProgram(V),T=V,!0):!1}const qt={[Zr]:a.FUNC_ADD,[Y_]:a.FUNC_SUBTRACT,[q_]:a.FUNC_REVERSE_SUBTRACT};qt[$_]=a.MIN,qt[K_]=a.MAX;const dt={[Z_]:a.ZERO,[Q_]:a.ONE,[J_]:a.SRC_COLOR,[nf]:a.SRC_ALPHA,[sv]:a.SRC_ALPHA_SATURATE,[iv]:a.DST_COLOR,[tv]:a.DST_ALPHA,[ev]:a.ONE_MINUS_SRC_COLOR,[rf]:a.ONE_MINUS_SRC_ALPHA,[rv]:a.ONE_MINUS_DST_COLOR,[nv]:a.ONE_MINUS_DST_ALPHA,[av]:a.CONSTANT_COLOR,[ov]:a.ONE_MINUS_CONSTANT_COLOR,[lv]:a.CONSTANT_ALPHA,[uv]:a.ONE_MINUS_CONSTANT_ALPHA};function vt(V,Le,Me,De,ve,pe,Ce,it,Dt,St){if(V===qi){C===!0&&(ye(a.BLEND),C=!1);return}if(C===!1&&(ce(a.BLEND),C=!0),V!==j_){if(V!==S||St!==A){if((v!==Zr||D!==Zr)&&(a.blendEquation(a.FUNC_ADD),v=Zr,D=Zr),St)switch(V){case Bs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Vp:a.blendFunc(a.ONE,a.ONE);break;case Hp:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Gp:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ct("WebGLState: Invalid blending: ",V);break}else switch(V){case Bs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Vp:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Hp:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gp:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",V);break}b=null,L=null,I=null,F=null,O.set(0,0,0),j=0,S=V,A=St}return}ve=ve||Le,pe=pe||Me,Ce=Ce||De,(Le!==v||ve!==D)&&(a.blendEquationSeparate(qt[Le],qt[ve]),v=Le,D=ve),(Me!==b||De!==L||pe!==I||Ce!==F)&&(a.blendFuncSeparate(dt[Me],dt[De],dt[pe],dt[Ce]),b=Me,L=De,I=pe,F=Ce),(it.equals(O)===!1||Dt!==j)&&(a.blendColor(it.r,it.g,it.b,Dt),O.copy(it),j=Dt),S=V,A=!1}function Pt(V,Le){V.side===ji?ye(a.CULL_FACE):ce(a.CULL_FACE);let Me=V.side===On;Le&&(Me=!Me),lt(Me),V.blending===Bs&&V.transparent===!1?vt(qi):vt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),u.setMask(V.colorWrite);const De=V.stencilWrite;d.setTest(De),De&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),zt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ce(a.SAMPLE_ALPHA_TO_COVERAGE):ye(a.SAMPLE_ALPHA_TO_COVERAGE)}function lt(V){R!==V&&(V?a.frontFace(a.CW):a.frontFace(a.CCW),R=V)}function Bt(V){V!==G_?(ce(a.CULL_FACE),V!==z&&(V===zp?a.cullFace(a.BACK):V===W_?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ye(a.CULL_FACE),z=V}function B(V){V!==re&&(oe&&a.lineWidth(V),re=V)}function zt(V,Le,Me){V?(ce(a.POLYGON_OFFSET_FILL),(Z!==Le||fe!==Me)&&(a.polygonOffset(Le,Me),Z=Le,fe=Me)):ye(a.POLYGON_OFFSET_FILL)}function mt(V){V?ce(a.SCISSOR_TEST):ye(a.SCISSOR_TEST)}function xt(V){V===void 0&&(V=a.TEXTURE0+ue-1),de!==V&&(a.activeTexture(V),de=V)}function We(V,Le,Me){Me===void 0&&(de===null?Me=a.TEXTURE0+ue-1:Me=de);let De=ne[Me];De===void 0&&(De={type:void 0,texture:void 0},ne[Me]=De),(De.type!==V||De.texture!==Le)&&(de!==Me&&(a.activeTexture(Me),de=Me),a.bindTexture(V,Le||ee[V]),De.type=V,De.texture=Le)}function P(){const V=ne[de];V!==void 0&&V.type!==void 0&&(a.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function M(){try{a.compressedTexImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function G(){try{a.compressedTexImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function he(){try{a.texSubImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function me(){try{a.texSubImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function le(){try{a.compressedTexSubImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function qe(){try{a.compressedTexSubImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function Te(){try{a.texStorage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function Be(){try{a.texStorage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function nt(){try{a.texImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function Se(){try{a.texImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function Re(V){be.equals(V)===!1&&(a.scissor(V.x,V.y,V.z,V.w),be.copy(V))}function He(V){Ye.equals(V)===!1&&(a.viewport(V.x,V.y,V.z,V.w),Ye.copy(V))}function Xe(V,Le){let Me=m.get(Le);Me===void 0&&(Me=new WeakMap,m.set(Le,Me));let De=Me.get(V);De===void 0&&(De=a.getUniformBlockIndex(Le,V.name),Me.set(V,De))}function Ae(V,Le){const De=m.get(Le).get(V);p.get(Le)!==De&&(a.uniformBlockBinding(Le,De,V.__bindingPointIndex),p.set(Le,De))}function ot(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},de=null,ne={},_={},x=new WeakMap,y=[],T=null,C=!1,S=null,v=null,b=null,L=null,D=null,I=null,F=null,O=new Tt(0,0,0),j=0,A=!1,R=null,z=null,re=null,Z=null,fe=null,be.set(0,0,a.canvas.width,a.canvas.height),Ye.set(0,0,a.canvas.width,a.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ce,disable:ye,bindFramebuffer:ke,drawBuffers:Ie,useProgram:pt,setBlending:vt,setMaterial:Pt,setFlipSided:lt,setCullFace:Bt,setLineWidth:B,setPolygonOffset:zt,setScissorTest:mt,activeTexture:xt,bindTexture:We,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:G,texImage2D:nt,texImage3D:Se,updateUBOMapping:Xe,uniformBlockBinding:Ae,texStorage2D:Te,texStorage3D:Be,texSubImage2D:he,texSubImage3D:me,compressedTexSubImage2D:le,compressedTexSubImage3D:qe,scissor:Re,viewport:He,reset:ot}}function jE(a,e,n,r,o,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new bt,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,M){return y?new OffscreenCanvas(P,M):Ul("canvas")}function C(P,M,G){let he=1;const me=We(P);if((me.width>G||me.height>G)&&(he=G/Math.max(me.width,me.height)),he<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const le=Math.floor(he*me.width),qe=Math.floor(he*me.height);_===void 0&&(_=T(le,qe));const Te=M?T(le,qe):_;return Te.width=le,Te.height=qe,Te.getContext("2d").drawImage(P,0,0,le,qe),at("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+le+"x"+qe+")."),Te}else return"data"in P&&at("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),P;return P}function S(P){return P.generateMipmaps}function v(P){a.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function L(P,M,G,he,me=!1){if(P!==null){if(a[P]!==void 0)return a[P];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let le=M;if(M===a.RED&&(G===a.FLOAT&&(le=a.R32F),G===a.HALF_FLOAT&&(le=a.R16F),G===a.UNSIGNED_BYTE&&(le=a.R8)),M===a.RED_INTEGER&&(G===a.UNSIGNED_BYTE&&(le=a.R8UI),G===a.UNSIGNED_SHORT&&(le=a.R16UI),G===a.UNSIGNED_INT&&(le=a.R32UI),G===a.BYTE&&(le=a.R8I),G===a.SHORT&&(le=a.R16I),G===a.INT&&(le=a.R32I)),M===a.RG&&(G===a.FLOAT&&(le=a.RG32F),G===a.HALF_FLOAT&&(le=a.RG16F),G===a.UNSIGNED_BYTE&&(le=a.RG8)),M===a.RG_INTEGER&&(G===a.UNSIGNED_BYTE&&(le=a.RG8UI),G===a.UNSIGNED_SHORT&&(le=a.RG16UI),G===a.UNSIGNED_INT&&(le=a.RG32UI),G===a.BYTE&&(le=a.RG8I),G===a.SHORT&&(le=a.RG16I),G===a.INT&&(le=a.RG32I)),M===a.RGB_INTEGER&&(G===a.UNSIGNED_BYTE&&(le=a.RGB8UI),G===a.UNSIGNED_SHORT&&(le=a.RGB16UI),G===a.UNSIGNED_INT&&(le=a.RGB32UI),G===a.BYTE&&(le=a.RGB8I),G===a.SHORT&&(le=a.RGB16I),G===a.INT&&(le=a.RGB32I)),M===a.RGBA_INTEGER&&(G===a.UNSIGNED_BYTE&&(le=a.RGBA8UI),G===a.UNSIGNED_SHORT&&(le=a.RGBA16UI),G===a.UNSIGNED_INT&&(le=a.RGBA32UI),G===a.BYTE&&(le=a.RGBA8I),G===a.SHORT&&(le=a.RGBA16I),G===a.INT&&(le=a.RGBA32I)),M===a.RGB&&(G===a.UNSIGNED_INT_5_9_9_9_REV&&(le=a.RGB9_E5),G===a.UNSIGNED_INT_10F_11F_11F_REV&&(le=a.R11F_G11F_B10F)),M===a.RGBA){const qe=me?Nl:Et.getTransfer(he);G===a.FLOAT&&(le=a.RGBA32F),G===a.HALF_FLOAT&&(le=a.RGBA16F),G===a.UNSIGNED_BYTE&&(le=qe===Nt?a.SRGB8_ALPHA8:a.RGBA8),G===a.UNSIGNED_SHORT_4_4_4_4&&(le=a.RGBA4),G===a.UNSIGNED_SHORT_5_5_5_1&&(le=a.RGB5_A1)}return(le===a.R16F||le===a.R32F||le===a.RG16F||le===a.RG32F||le===a.RGBA16F||le===a.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function D(P,M){let G;return P?M===null||M===Pi||M===Ga?G=a.DEPTH24_STENCIL8:M===Ai?G=a.DEPTH32F_STENCIL8:M===Ha&&(G=a.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pi||M===Ga?G=a.DEPTH_COMPONENT24:M===Ai?G=a.DEPTH_COMPONENT32F:M===Ha&&(G=a.DEPTH_COMPONENT16),G}function I(P,M){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==dn&&P.minFilter!==yn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function F(P){const M=P.target;M.removeEventListener("dispose",F),j(M),M.isVideoTexture&&g.delete(M)}function O(P){const M=P.target;M.removeEventListener("dispose",O),R(M)}function j(P){const M=r.get(P);if(M.__webglInit===void 0)return;const G=P.source,he=x.get(G);if(he){const me=he[M.__cacheKey];me.usedTimes--,me.usedTimes===0&&A(P),Object.keys(he).length===0&&x.delete(G)}r.remove(P)}function A(P){const M=r.get(P);a.deleteTexture(M.__webglTexture);const G=P.source,he=x.get(G);delete he[M.__cacheKey],f.memory.textures--}function R(P){const M=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let me=0;me<M.__webglFramebuffer[he].length;me++)a.deleteFramebuffer(M.__webglFramebuffer[he][me]);else a.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)a.deleteFramebuffer(M.__webglFramebuffer[he]);else a.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&a.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&a.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&a.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=P.textures;for(let he=0,me=G.length;he<me;he++){const le=r.get(G[he]);le.__webglTexture&&(a.deleteTexture(le.__webglTexture),f.memory.textures--),r.remove(G[he])}r.remove(P)}let z=0;function re(){z=0}function Z(){const P=z;return P>=o.maxTextures&&at("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),z+=1,P}function fe(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function ue(P,M){const G=r.get(P);if(P.isVideoTexture&&mt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const he=P.image;if(he===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(G,P,M);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,G.__webglTexture,a.TEXTURE0+M)}function oe(P,M){const G=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){ee(G,P,M);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,G.__webglTexture,a.TEXTURE0+M)}function Y(P,M){const G=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){ee(G,P,M);return}n.bindTexture(a.TEXTURE_3D,G.__webglTexture,a.TEXTURE0+M)}function X(P,M){const G=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){ce(G,P,M);return}n.bindTexture(a.TEXTURE_CUBE_MAP,G.__webglTexture,a.TEXTURE0+M)}const de={[pf]:a.REPEAT,[Yi]:a.CLAMP_TO_EDGE,[mf]:a.MIRRORED_REPEAT},ne={[dn]:a.NEAREST,[dv]:a.NEAREST_MIPMAP_NEAREST,[rl]:a.NEAREST_MIPMAP_LINEAR,[yn]:a.LINEAR,[Tc]:a.LINEAR_MIPMAP_NEAREST,[Jr]:a.LINEAR_MIPMAP_LINEAR},U={[mv]:a.NEVER,[Sv]:a.ALWAYS,[gv]:a.LESS,[od]:a.LEQUAL,[_v]:a.EQUAL,[ld]:a.GEQUAL,[vv]:a.GREATER,[xv]:a.NOTEQUAL};function ie(P,M){if(M.type===Ai&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===yn||M.magFilter===Tc||M.magFilter===rl||M.magFilter===Jr||M.minFilter===yn||M.minFilter===Tc||M.minFilter===rl||M.minFilter===Jr)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,de[M.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,de[M.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,de[M.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,ne[M.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,ne[M.minFilter]),M.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===dn||M.minFilter!==rl&&M.minFilter!==Jr||M.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function be(P,M){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",F));const he=M.source;let me=x.get(he);me===void 0&&(me={},x.set(he,me));const le=fe(M);if(le!==P.__cacheKey){me[le]===void 0&&(me[le]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,G=!0),me[le].usedTimes++;const qe=me[P.__cacheKey];qe!==void 0&&(me[P.__cacheKey].usedTimes--,qe.usedTimes===0&&A(M)),P.__cacheKey=le,P.__webglTexture=me[le].texture}return G}function Ye(P,M,G){return Math.floor(Math.floor(P/G)/M)}function Ke(P,M,G,he){const le=P.updateRanges;if(le.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,M.width,M.height,G,he,M.data);else{le.sort((Se,Re)=>Se.start-Re.start);let qe=0;for(let Se=1;Se<le.length;Se++){const Re=le[qe],He=le[Se],Xe=Re.start+Re.count,Ae=Ye(He.start,M.width,4),ot=Ye(Re.start,M.width,4);He.start<=Xe+1&&Ae===ot&&Ye(He.start+He.count-1,M.width,4)===Ae?Re.count=Math.max(Re.count,He.start+He.count-Re.start):(++qe,le[qe]=He)}le.length=qe+1;const Te=a.getParameter(a.UNPACK_ROW_LENGTH),Be=a.getParameter(a.UNPACK_SKIP_PIXELS),nt=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,M.width);for(let Se=0,Re=le.length;Se<Re;Se++){const He=le[Se],Xe=Math.floor(He.start/4),Ae=Math.ceil(He.count/4),ot=Xe%M.width,V=Math.floor(Xe/M.width),Le=Ae,Me=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ot),a.pixelStorei(a.UNPACK_SKIP_ROWS,V),n.texSubImage2D(a.TEXTURE_2D,0,ot,V,Le,Me,G,he,M.data)}P.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Te),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Be),a.pixelStorei(a.UNPACK_SKIP_ROWS,nt)}}function ee(P,M,G){let he=a.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=a.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=a.TEXTURE_3D);const me=be(P,M),le=M.source;n.bindTexture(he,P.__webglTexture,a.TEXTURE0+G);const qe=r.get(le);if(le.version!==qe.__version||me===!0){n.activeTexture(a.TEXTURE0+G);const Te=Et.getPrimaries(Et.workingColorSpace),Be=M.colorSpace===Tr?null:Et.getPrimaries(M.colorSpace),nt=M.colorSpace===Tr||Te===Be?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Se=C(M.image,!1,o.maxTextureSize);Se=xt(M,Se);const Re=u.convert(M.format,M.colorSpace),He=u.convert(M.type);let Xe=L(M.internalFormat,Re,He,M.colorSpace,M.isVideoTexture);ie(he,M);let Ae;const ot=M.mipmaps,V=M.isVideoTexture!==!0,Le=qe.__version===void 0||me===!0,Me=le.dataReady,De=I(M,Se);if(M.isDepthTexture)Xe=D(M.format===es,M.type),Le&&(V?n.texStorage2D(a.TEXTURE_2D,1,Xe,Se.width,Se.height):n.texImage2D(a.TEXTURE_2D,0,Xe,Se.width,Se.height,0,Re,He,null));else if(M.isDataTexture)if(ot.length>0){V&&Le&&n.texStorage2D(a.TEXTURE_2D,De,Xe,ot[0].width,ot[0].height);for(let ve=0,pe=ot.length;ve<pe;ve++)Ae=ot[ve],V?Me&&n.texSubImage2D(a.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Re,He,Ae.data):n.texImage2D(a.TEXTURE_2D,ve,Xe,Ae.width,Ae.height,0,Re,He,Ae.data);M.generateMipmaps=!1}else V?(Le&&n.texStorage2D(a.TEXTURE_2D,De,Xe,Se.width,Se.height),Me&&Ke(M,Se,Re,He)):n.texImage2D(a.TEXTURE_2D,0,Xe,Se.width,Se.height,0,Re,He,Se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){V&&Le&&n.texStorage3D(a.TEXTURE_2D_ARRAY,De,Xe,ot[0].width,ot[0].height,Se.depth);for(let ve=0,pe=ot.length;ve<pe;ve++)if(Ae=ot[ve],M.format!==mi)if(Re!==null)if(V){if(Me)if(M.layerUpdates.size>0){const Ce=gm(Ae.width,Ae.height,M.format,M.type);for(const it of M.layerUpdates){const Dt=Ae.data.subarray(it*Ce/Ae.data.BYTES_PER_ELEMENT,(it+1)*Ce/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,it,Ae.width,Ae.height,1,Re,Dt)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,Se.depth,Re,Ae.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ve,Xe,Ae.width,Ae.height,Se.depth,0,Ae.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Me&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,Se.depth,Re,He,Ae.data):n.texImage3D(a.TEXTURE_2D_ARRAY,ve,Xe,Ae.width,Ae.height,Se.depth,0,Re,He,Ae.data)}else{V&&Le&&n.texStorage2D(a.TEXTURE_2D,De,Xe,ot[0].width,ot[0].height);for(let ve=0,pe=ot.length;ve<pe;ve++)Ae=ot[ve],M.format!==mi?Re!==null?V?Me&&n.compressedTexSubImage2D(a.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Re,Ae.data):n.compressedTexImage2D(a.TEXTURE_2D,ve,Xe,Ae.width,Ae.height,0,Ae.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Me&&n.texSubImage2D(a.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Re,He,Ae.data):n.texImage2D(a.TEXTURE_2D,ve,Xe,Ae.width,Ae.height,0,Re,He,Ae.data)}else if(M.isDataArrayTexture)if(V){if(Le&&n.texStorage3D(a.TEXTURE_2D_ARRAY,De,Xe,Se.width,Se.height,Se.depth),Me)if(M.layerUpdates.size>0){const ve=gm(Se.width,Se.height,M.format,M.type);for(const pe of M.layerUpdates){const Ce=Se.data.subarray(pe*ve/Se.data.BYTES_PER_ELEMENT,(pe+1)*ve/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,Re,He,Ce)}M.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Re,He,Se.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Xe,Se.width,Se.height,Se.depth,0,Re,He,Se.data);else if(M.isData3DTexture)V?(Le&&n.texStorage3D(a.TEXTURE_3D,De,Xe,Se.width,Se.height,Se.depth),Me&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Re,He,Se.data)):n.texImage3D(a.TEXTURE_3D,0,Xe,Se.width,Se.height,Se.depth,0,Re,He,Se.data);else if(M.isFramebufferTexture){if(Le)if(V)n.texStorage2D(a.TEXTURE_2D,De,Xe,Se.width,Se.height);else{let ve=Se.width,pe=Se.height;for(let Ce=0;Ce<De;Ce++)n.texImage2D(a.TEXTURE_2D,Ce,Xe,ve,pe,0,Re,He,null),ve>>=1,pe>>=1}}else if(ot.length>0){if(V&&Le){const ve=We(ot[0]);n.texStorage2D(a.TEXTURE_2D,De,Xe,ve.width,ve.height)}for(let ve=0,pe=ot.length;ve<pe;ve++)Ae=ot[ve],V?Me&&n.texSubImage2D(a.TEXTURE_2D,ve,0,0,Re,He,Ae):n.texImage2D(a.TEXTURE_2D,ve,Xe,Re,He,Ae);M.generateMipmaps=!1}else if(V){if(Le){const ve=We(Se);n.texStorage2D(a.TEXTURE_2D,De,Xe,ve.width,ve.height)}Me&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Re,He,Se)}else n.texImage2D(a.TEXTURE_2D,0,Xe,Re,He,Se);S(M)&&v(he),qe.__version=le.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ce(P,M,G){if(M.image.length!==6)return;const he=be(P,M),me=M.source;n.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+G);const le=r.get(me);if(me.version!==le.__version||he===!0){n.activeTexture(a.TEXTURE0+G);const qe=Et.getPrimaries(Et.workingColorSpace),Te=M.colorSpace===Tr?null:Et.getPrimaries(M.colorSpace),Be=M.colorSpace===Tr||qe===Te?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const nt=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,Re=[];for(let pe=0;pe<6;pe++)!nt&&!Se?Re[pe]=C(M.image[pe],!0,o.maxCubemapSize):Re[pe]=Se?M.image[pe].image:M.image[pe],Re[pe]=xt(M,Re[pe]);const He=Re[0],Xe=u.convert(M.format,M.colorSpace),Ae=u.convert(M.type),ot=L(M.internalFormat,Xe,Ae,M.colorSpace),V=M.isVideoTexture!==!0,Le=le.__version===void 0||he===!0,Me=me.dataReady;let De=I(M,He);ie(a.TEXTURE_CUBE_MAP,M);let ve;if(nt){V&&Le&&n.texStorage2D(a.TEXTURE_CUBE_MAP,De,ot,He.width,He.height);for(let pe=0;pe<6;pe++){ve=Re[pe].mipmaps;for(let Ce=0;Ce<ve.length;Ce++){const it=ve[Ce];M.format!==mi?Xe!==null?V?Me&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,it.width,it.height,Xe,it.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,ot,it.width,it.height,0,it.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,it.width,it.height,Xe,Ae,it.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,ot,it.width,it.height,0,Xe,Ae,it.data)}}}else{if(ve=M.mipmaps,V&&Le){ve.length>0&&De++;const pe=We(Re[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,De,ot,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){V?Me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Re[pe].width,Re[pe].height,Xe,Ae,Re[pe].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ot,Re[pe].width,Re[pe].height,0,Xe,Ae,Re[pe].data);for(let Ce=0;Ce<ve.length;Ce++){const Dt=ve[Ce].image[pe].image;V?Me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,Dt.width,Dt.height,Xe,Ae,Dt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,ot,Dt.width,Dt.height,0,Xe,Ae,Dt.data)}}else{V?Me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Xe,Ae,Re[pe]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ot,Xe,Ae,Re[pe]);for(let Ce=0;Ce<ve.length;Ce++){const it=ve[Ce];V?Me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,Xe,Ae,it.image[pe]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,ot,Xe,Ae,it.image[pe])}}}S(M)&&v(a.TEXTURE_CUBE_MAP),le.__version=me.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ye(P,M,G,he,me,le){const qe=u.convert(G.format,G.colorSpace),Te=u.convert(G.type),Be=L(G.internalFormat,qe,Te,G.colorSpace),nt=r.get(M),Se=r.get(G);if(Se.__renderTarget=M,!nt.__hasExternalTextures){const Re=Math.max(1,M.width>>le),He=Math.max(1,M.height>>le);me===a.TEXTURE_3D||me===a.TEXTURE_2D_ARRAY?n.texImage3D(me,le,Be,Re,He,M.depth,0,qe,Te,null):n.texImage2D(me,le,Be,Re,He,0,qe,Te,null)}n.bindFramebuffer(a.FRAMEBUFFER,P),zt(M)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,me,Se.__webglTexture,0,B(M)):(me===a.TEXTURE_2D||me>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,he,me,Se.__webglTexture,le),n.bindFramebuffer(a.FRAMEBUFFER,null)}function ke(P,M,G){if(a.bindRenderbuffer(a.RENDERBUFFER,P),M.depthBuffer){const he=M.depthTexture,me=he&&he.isDepthTexture?he.type:null,le=D(M.stencilBuffer,me),qe=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;zt(M)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,B(M),le,M.width,M.height):G?a.renderbufferStorageMultisample(a.RENDERBUFFER,B(M),le,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,le,M.width,M.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,qe,a.RENDERBUFFER,P)}else{const he=M.textures;for(let me=0;me<he.length;me++){const le=he[me],qe=u.convert(le.format,le.colorSpace),Te=u.convert(le.type),Be=L(le.internalFormat,qe,Te,le.colorSpace);zt(M)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,B(M),Be,M.width,M.height):G?a.renderbufferStorageMultisample(a.RENDERBUFFER,B(M),Be,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,Be,M.width,M.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ie(P,M,G){const he=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(M.depthTexture);if(me.__renderTarget=M,(!me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he){if(me.__webglInit===void 0&&(me.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),me.__webglTexture===void 0){me.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,me.__webglTexture),ie(a.TEXTURE_CUBE_MAP,M.depthTexture);const nt=u.convert(M.depthTexture.format),Se=u.convert(M.depthTexture.type);let Re;M.depthTexture.format===Zi?Re=a.DEPTH_COMPONENT24:M.depthTexture.format===es&&(Re=a.DEPTH24_STENCIL8);for(let He=0;He<6;He++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Re,M.width,M.height,0,nt,Se,null)}}else ue(M.depthTexture,0);const le=me.__webglTexture,qe=B(M),Te=he?a.TEXTURE_CUBE_MAP_POSITIVE_X+G:a.TEXTURE_2D,Be=M.depthTexture.format===es?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(M.depthTexture.format===Zi)zt(M)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Be,Te,le,0,qe):a.framebufferTexture2D(a.FRAMEBUFFER,Be,Te,le,0);else if(M.depthTexture.format===es)zt(M)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Be,Te,le,0,qe):a.framebufferTexture2D(a.FRAMEBUFFER,Be,Te,le,0);else throw new Error("Unknown depthTexture format")}function pt(P){const M=r.get(P),G=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const he=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",me)};he.addEventListener("dispose",me),M.__depthDisposeCallback=me}M.__boundDepthTexture=he}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let he=0;he<6;he++)Ie(M.__webglFramebuffer[he],P,he);else{const he=P.texture.mipmaps;he&&he.length>0?Ie(M.__webglFramebuffer[0],P,0):Ie(M.__webglFramebuffer,P,0)}else if(G){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=a.createRenderbuffer(),ke(M.__webglDepthbuffer[he],P,!1);else{const me=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer[he];a.bindRenderbuffer(a.RENDERBUFFER,le),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,le)}}else{const he=P.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=a.createRenderbuffer(),ke(M.__webglDepthbuffer,P,!1);else{const me=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,le),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,le)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function qt(P,M,G){const he=r.get(P);M!==void 0&&ye(he.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),G!==void 0&&pt(P)}function dt(P){const M=P.texture,G=r.get(P),he=r.get(M);P.addEventListener("dispose",O);const me=P.textures,le=P.isWebGLCubeRenderTarget===!0,qe=me.length>1;if(qe||(he.__webglTexture===void 0&&(he.__webglTexture=a.createTexture()),he.__version=M.version,f.memory.textures++),le){G.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[Te]=[];for(let Be=0;Be<M.mipmaps.length;Be++)G.__webglFramebuffer[Te][Be]=a.createFramebuffer()}else G.__webglFramebuffer[Te]=a.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let Te=0;Te<M.mipmaps.length;Te++)G.__webglFramebuffer[Te]=a.createFramebuffer()}else G.__webglFramebuffer=a.createFramebuffer();if(qe)for(let Te=0,Be=me.length;Te<Be;Te++){const nt=r.get(me[Te]);nt.__webglTexture===void 0&&(nt.__webglTexture=a.createTexture(),f.memory.textures++)}if(P.samples>0&&zt(P)===!1){G.__webglMultisampledFramebuffer=a.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Te=0;Te<me.length;Te++){const Be=me[Te];G.__webglColorRenderbuffer[Te]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,G.__webglColorRenderbuffer[Te]);const nt=u.convert(Be.format,Be.colorSpace),Se=u.convert(Be.type),Re=L(Be.internalFormat,nt,Se,Be.colorSpace,P.isXRRenderTarget===!0),He=B(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,He,Re,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Te,a.RENDERBUFFER,G.__webglColorRenderbuffer[Te])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=a.createRenderbuffer(),ke(G.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(le){n.bindTexture(a.TEXTURE_CUBE_MAP,he.__webglTexture),ie(a.TEXTURE_CUBE_MAP,M);for(let Te=0;Te<6;Te++)if(M.mipmaps&&M.mipmaps.length>0)for(let Be=0;Be<M.mipmaps.length;Be++)ye(G.__webglFramebuffer[Te][Be],P,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Be);else ye(G.__webglFramebuffer[Te],P,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);S(M)&&v(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let Te=0,Be=me.length;Te<Be;Te++){const nt=me[Te],Se=r.get(nt);let Re=a.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Re=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Re,Se.__webglTexture),ie(Re,nt),ye(G.__webglFramebuffer,P,nt,a.COLOR_ATTACHMENT0+Te,Re,0),S(nt)&&v(Re)}n.unbindTexture()}else{let Te=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Te=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Te,he.__webglTexture),ie(Te,M),M.mipmaps&&M.mipmaps.length>0)for(let Be=0;Be<M.mipmaps.length;Be++)ye(G.__webglFramebuffer[Be],P,M,a.COLOR_ATTACHMENT0,Te,Be);else ye(G.__webglFramebuffer,P,M,a.COLOR_ATTACHMENT0,Te,0);S(M)&&v(Te),n.unbindTexture()}P.depthBuffer&&pt(P)}function vt(P){const M=P.textures;for(let G=0,he=M.length;G<he;G++){const me=M[G];if(S(me)){const le=b(P),qe=r.get(me).__webglTexture;n.bindTexture(le,qe),v(le),n.unbindTexture()}}}const Pt=[],lt=[];function Bt(P){if(P.samples>0){if(zt(P)===!1){const M=P.textures,G=P.width,he=P.height;let me=a.COLOR_BUFFER_BIT;const le=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,qe=r.get(P),Te=M.length>1;if(Te)for(let nt=0;nt<M.length;nt++)n.bindFramebuffer(a.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,qe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Be=P.texture.mipmaps;Be&&Be.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let nt=0;nt<M.length;nt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(me|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(me|=a.STENCIL_BUFFER_BIT)),Te){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,qe.__webglColorRenderbuffer[nt]);const Se=r.get(M[nt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Se,0)}a.blitFramebuffer(0,0,G,he,0,0,G,he,me,a.NEAREST),p===!0&&(Pt.length=0,lt.length=0,Pt.push(a.COLOR_ATTACHMENT0+nt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Pt.push(le),lt.push(le),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,lt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Te)for(let nt=0;nt<M.length;nt++){n.bindFramebuffer(a.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.RENDERBUFFER,qe.__webglColorRenderbuffer[nt]);const Se=r.get(M[nt]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,qe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.TEXTURE_2D,Se,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const M=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[M])}}}function B(P){return Math.min(o.maxSamples,P.samples)}function zt(P){const M=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function mt(P){const M=f.render.frame;g.get(P)!==M&&(g.set(P,M),P.update())}function xt(P,M){const G=P.colorSpace,he=P.format,me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Ws&&G!==Tr&&(Et.getTransfer(G)===Nt?(he!==mi||me!==jn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",G)),M}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=re,this.setTexture2D=ue,this.setTexture2DArray=oe,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=qt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function YE(a,e){function n(r,o=Tr){let u;const f=Et.getTransfer(o);if(r===jn)return a.UNSIGNED_BYTE;if(r===nd)return a.UNSIGNED_SHORT_4_4_4_4;if(r===id)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Zm)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Qm)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===$m)return a.BYTE;if(r===Km)return a.SHORT;if(r===Ha)return a.UNSIGNED_SHORT;if(r===td)return a.INT;if(r===Pi)return a.UNSIGNED_INT;if(r===Ai)return a.FLOAT;if(r===Ki)return a.HALF_FLOAT;if(r===Jm)return a.ALPHA;if(r===eg)return a.RGB;if(r===mi)return a.RGBA;if(r===Zi)return a.DEPTH_COMPONENT;if(r===es)return a.DEPTH_STENCIL;if(r===tg)return a.RED;if(r===rd)return a.RED_INTEGER;if(r===Gs)return a.RG;if(r===sd)return a.RG_INTEGER;if(r===ad)return a.RGBA_INTEGER;if(r===Rl||r===bl||r===Pl||r===Ll)if(f===Nt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Rl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ll)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Rl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ll)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gf||r===_f||r===vf||r===xf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===gf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_f)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sf||r===yf||r===Mf||r===Ef||r===Tf||r===wf||r===Af)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Sf||r===yf)return f===Nt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Mf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ef)return u.COMPRESSED_R11_EAC;if(r===Tf)return u.COMPRESSED_SIGNED_R11_EAC;if(r===wf)return u.COMPRESSED_RG11_EAC;if(r===Af)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Cf||r===Rf||r===bf||r===Pf||r===Lf||r===Df||r===Nf||r===If||r===Uf||r===Ff||r===Of||r===kf||r===Bf||r===zf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Cf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Df)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===If)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ff)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Of)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vf||r===Hf||r===Gf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Vf)return f===Nt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wf||r===Xf||r===jf||r===Yf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Wf)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Xf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ga?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const qE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$E=`
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

}`;class KE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new mg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Di({vertexShader:qE,fragmentShader:$E,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _i(new Bl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZE extends js{constructor(e,n){super();const r=this;let o=null,u=1,f=null,d="local-floor",p=1,m=null,g=null,_=null,x=null,y=null,T=null;const C=typeof XRWebGLBinding<"u",S=new KE,v={},b=n.getContextAttributes();let L=null,D=null;const I=[],F=[],O=new bt;let j=null;const A=new Xn;A.viewport=new Yt;const R=new Xn;R.viewport=new Yt;const z=[A,R],re=new ox;let Z=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=I[ee];return ce===void 0&&(ce=new Yc,I[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=I[ee];return ce===void 0&&(ce=new Yc,I[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=I[ee];return ce===void 0&&(ce=new Yc,I[ee]=ce),ce.getHandSpace()};function ue(ee){const ce=F.indexOf(ee.inputSource);if(ce===-1)return;const ye=I[ce];ye!==void 0&&(ye.update(ee.inputSource,ee.frame,m||f),ye.dispatchEvent({type:ee.type,data:ee.inputSource}))}function oe(){o.removeEventListener("select",ue),o.removeEventListener("selectstart",ue),o.removeEventListener("selectend",ue),o.removeEventListener("squeeze",ue),o.removeEventListener("squeezestart",ue),o.removeEventListener("squeezeend",ue),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",Y);for(let ee=0;ee<I.length;ee++){const ce=F[ee];ce!==null&&(F[ee]=null,I[ee].disconnect(ce))}Z=null,fe=null,S.reset();for(const ee in v)delete v[ee];e.setRenderTarget(L),y=null,x=null,_=null,o=null,D=null,Ke.stop(),r.isPresenting=!1,e.setPixelRatio(j),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){u=ee,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(ee){m=ee},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",ue),o.addEventListener("selectstart",ue),o.addEventListener("selectend",ue),o.addEventListener("squeeze",ue),o.addEventListener("squeezestart",ue),o.addEventListener("squeezeend",ue),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&await n.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ke=null,Ie=null;b.depth&&(Ie=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=b.stencil?es:Zi,ke=b.stencil?Ga:Pi);const pt={colorFormat:n.RGBA8,depthFormat:Ie,scaleFactor:u};_=this.getBinding(),x=_.createProjectionLayer(pt),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new bi(x.textureWidth,x.textureHeight,{format:mi,type:jn,depthTexture:new Xa(x.textureWidth,x.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ye={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(o,n,ye),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new bi(y.framebufferWidth,y.framebufferHeight,{format:mi,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await o.requestReferenceSpace(d),Ke.setContext(o),Ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(ee){for(let ce=0;ce<ee.removed.length;ce++){const ye=ee.removed[ce],ke=F.indexOf(ye);ke>=0&&(F[ke]=null,I[ke].disconnect(ye))}for(let ce=0;ce<ee.added.length;ce++){const ye=ee.added[ce];let ke=F.indexOf(ye);if(ke===-1){for(let pt=0;pt<I.length;pt++)if(pt>=F.length){F.push(ye),ke=pt;break}else if(F[pt]===null){F[pt]=ye,ke=pt;break}if(ke===-1)break}const Ie=I[ke];Ie&&Ie.connect(ye)}}const X=new Q,de=new Q;function ne(ee,ce,ye){X.setFromMatrixPosition(ce.matrixWorld),de.setFromMatrixPosition(ye.matrixWorld);const ke=X.distanceTo(de),Ie=ce.projectionMatrix.elements,pt=ye.projectionMatrix.elements,qt=Ie[14]/(Ie[10]-1),dt=Ie[14]/(Ie[10]+1),vt=(Ie[9]+1)/Ie[5],Pt=(Ie[9]-1)/Ie[5],lt=(Ie[8]-1)/Ie[0],Bt=(pt[8]+1)/pt[0],B=qt*lt,zt=qt*Bt,mt=ke/(-lt+Bt),xt=mt*-lt;if(ce.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(xt),ee.translateZ(mt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ie[10]===-1)ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const We=qt+mt,P=dt+mt,M=B-xt,G=zt+(ke-xt),he=vt*dt/P*We,me=Pt*dt/P*We;ee.projectionMatrix.makePerspective(M,G,he,me,We,P),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function U(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let ce=ee.near,ye=ee.far;S.texture!==null&&(S.depthNear>0&&(ce=S.depthNear),S.depthFar>0&&(ye=S.depthFar)),re.near=R.near=A.near=ce,re.far=R.far=A.far=ye,(Z!==re.near||fe!==re.far)&&(o.updateRenderState({depthNear:re.near,depthFar:re.far}),Z=re.near,fe=re.far),re.layers.mask=ee.layers.mask|6,A.layers.mask=re.layers.mask&3,R.layers.mask=re.layers.mask&5;const ke=ee.parent,Ie=re.cameras;U(re,ke);for(let pt=0;pt<Ie.length;pt++)U(Ie[pt],ke);Ie.length===2?ne(re,A,R):re.projectionMatrix.copy(A.projectionMatrix),ie(ee,re,ke)};function ie(ee,ce,ye){ye===null?ee.matrix.copy(ce.matrixWorld):(ee.matrix.copy(ye.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ce.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=qf*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(ee){p=ee,x!==null&&(x.fixedFoveation=ee),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ee)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(re)},this.getCameraTexture=function(ee){return v[ee]};let be=null;function Ye(ee,ce){if(g=ce.getViewerPose(m||f),T=ce,g!==null){const ye=g.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let ke=!1;ye.length!==re.cameras.length&&(re.cameras.length=0,ke=!0);for(let dt=0;dt<ye.length;dt++){const vt=ye[dt];let Pt=null;if(y!==null)Pt=y.getViewport(vt);else{const Bt=_.getViewSubImage(x,vt);Pt=Bt.viewport,dt===0&&(e.setRenderTargetTextures(D,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(D))}let lt=z[dt];lt===void 0&&(lt=new Xn,lt.layers.enable(dt),lt.viewport=new Yt,z[dt]=lt),lt.matrix.fromArray(vt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(vt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),dt===0&&(re.matrix.copy(lt.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),ke===!0&&re.cameras.push(lt)}const Ie=o.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const dt=_.getDepthInformation(ye[0]);dt&&dt.isValid&&dt.texture&&S.init(dt,o.renderState)}if(Ie&&Ie.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let dt=0;dt<ye.length;dt++){const vt=ye[dt].camera;if(vt){let Pt=v[vt];Pt||(Pt=new mg,v[vt]=Pt);const lt=_.getCameraImage(vt);Pt.sourceTexture=lt}}}}for(let ye=0;ye<I.length;ye++){const ke=F[ye],Ie=I[ye];ke!==null&&Ie!==void 0&&Ie.update(ke,ce,m||f)}be&&be(ee,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),T=null}const Ke=new vg;Ke.setAnimationLoop(Ye),this.setAnimationLoop=function(ee){be=ee},this.dispose=function(){}}}const $r=new Li,QE=new Xt;function JE(a,e){function n(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,cg(a)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,b,L,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(S,v):v.isMeshToonMaterial?(u(S,v),_(S,v)):v.isMeshPhongMaterial?(u(S,v),g(S,v)):v.isMeshStandardMaterial?(u(S,v),x(S,v),v.isMeshPhysicalMaterial&&y(S,v,D)):v.isMeshMatcapMaterial?(u(S,v),T(S,v)):v.isMeshDepthMaterial?u(S,v):v.isMeshDistanceMaterial?(u(S,v),C(S,v)):v.isMeshNormalMaterial?u(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?p(S,v,b,L):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,n(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===On&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,n(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===On&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,n(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,n(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const b=e.get(v),L=b.envMap,D=b.envMapRotation;L&&(S.envMap.value=L,$r.copy(D),$r.x*=-1,$r.y*=-1,$r.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),S.envMapRotation.value.setFromMatrix4(QE.makeRotationFromEuler($r)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function p(S,v,b,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*b,S.scale.value=L*.5,v.map&&(S.map.value=v.map,n(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,b){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===On&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=b.texture,S.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,v){v.matcap&&(S.matcap.value=v.matcap)}function C(S,v){const b=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(b.matrixWorld),S.nearDistance.value=b.shadow.camera.near,S.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function e1(a,e,n,r){let o={},u={},f=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,L){const D=L.program;r.uniformBlockBinding(b,D)}function m(b,L){let D=o[b.id];D===void 0&&(T(b),D=g(b),o[b.id]=D,b.addEventListener("dispose",S));const I=L.program;r.updateUBOMapping(b,I);const F=e.render.frame;u[b.id]!==F&&(x(b),u[b.id]=F)}function g(b){const L=_();b.__bindingPointIndex=L;const D=a.createBuffer(),I=b.__size,F=b.usage;return a.bindBuffer(a.UNIFORM_BUFFER,D),a.bufferData(a.UNIFORM_BUFFER,I,F),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,L,D),D}function _(){for(let b=0;b<d;b++)if(f.indexOf(b)===-1)return f.push(b),b;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(b){const L=o[b.id],D=b.uniforms,I=b.__cache;a.bindBuffer(a.UNIFORM_BUFFER,L);for(let F=0,O=D.length;F<O;F++){const j=Array.isArray(D[F])?D[F]:[D[F]];for(let A=0,R=j.length;A<R;A++){const z=j[A];if(y(z,F,A,I)===!0){const re=z.__offset,Z=Array.isArray(z.value)?z.value:[z.value];let fe=0;for(let ue=0;ue<Z.length;ue++){const oe=Z[ue],Y=C(oe);typeof oe=="number"||typeof oe=="boolean"?(z.__data[0]=oe,a.bufferSubData(a.UNIFORM_BUFFER,re+fe,z.__data)):oe.isMatrix3?(z.__data[0]=oe.elements[0],z.__data[1]=oe.elements[1],z.__data[2]=oe.elements[2],z.__data[3]=0,z.__data[4]=oe.elements[3],z.__data[5]=oe.elements[4],z.__data[6]=oe.elements[5],z.__data[7]=0,z.__data[8]=oe.elements[6],z.__data[9]=oe.elements[7],z.__data[10]=oe.elements[8],z.__data[11]=0):(oe.toArray(z.__data,fe),fe+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,re,z.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(b,L,D,I){const F=b.value,O=L+"_"+D;if(I[O]===void 0)return typeof F=="number"||typeof F=="boolean"?I[O]=F:I[O]=F.clone(),!0;{const j=I[O];if(typeof F=="number"||typeof F=="boolean"){if(j!==F)return I[O]=F,!0}else if(j.equals(F)===!1)return j.copy(F),!0}return!1}function T(b){const L=b.uniforms;let D=0;const I=16;for(let O=0,j=L.length;O<j;O++){const A=Array.isArray(L[O])?L[O]:[L[O]];for(let R=0,z=A.length;R<z;R++){const re=A[R],Z=Array.isArray(re.value)?re.value:[re.value];for(let fe=0,ue=Z.length;fe<ue;fe++){const oe=Z[fe],Y=C(oe),X=D%I,de=X%Y.boundary,ne=X+de;D+=de,ne!==0&&I-ne<Y.storage&&(D+=I-ne),re.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=D,D+=Y.storage}}}const F=D%I;return F>0&&(D+=I-F),b.__size=D,b.__cache={},this}function C(b){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=48,L.storage=48):b.isMatrix4?(L.boundary=64,L.storage=64):b.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",b),L}function S(b){const L=b.target;L.removeEventListener("dispose",S);const D=f.indexOf(L.__bindingPointIndex);f.splice(D,1),a.deleteBuffer(o[L.id]),delete o[L.id],delete u[L.id]}function v(){for(const b in o)a.deleteBuffer(o[b]);f=[],o={},u={}}return{bind:p,update:m,dispose:v}}const t1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function n1(){return Ti===null&&(Ti=new qv(t1,16,16,Gs,Ki),Ti.name="DFG_LUT",Ti.minFilter=yn,Ti.magFilter=yn,Ti.wrapS=Yi,Ti.wrapT=Yi,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class i1{constructor(e={}){const{canvas:n=yv(),context:r=null,depth:o=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:y=jn}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=f;const C=y,S=new Set([ad,sd,rd]),v=new Set([jn,Pi,Ha,Ga,nd,id]),b=new Uint32Array(4),L=new Int32Array(4);let D=null,I=null;const F=[],O=[];let j=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let R=!1;this._outputColorSpace=ti;let z=0,re=0,Z=null,fe=-1,ue=null;const oe=new Yt,Y=new Yt;let X=null;const de=new Tt(0);let ne=0,U=n.width,ie=n.height,be=1,Ye=null,Ke=null;const ee=new Yt(0,0,U,ie),ce=new Yt(0,0,U,ie);let ye=!1;const ke=new fd;let Ie=!1,pt=!1;const qt=new Xt,dt=new Q,vt=new Yt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Bt(){return Z===null?be:1}let B=r;function zt(w,W){return n.getContext(w,W)}try{const w={alpha:!0,depth:o,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jf}`),n.addEventListener("webglcontextlost",it,!1),n.addEventListener("webglcontextrestored",Dt,!1),n.addEventListener("webglcontextcreationerror",St,!1),B===null){const W="webgl2";if(B=zt(W,w),B===null)throw zt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ct("WebGLRenderer: "+w.message),w}let mt,xt,We,P,M,G,he,me,le,qe,Te,Be,nt,Se,Re,He,Xe,Ae,ot,V,Le,Me,De,ve;function pe(){mt=new nM(B),mt.init(),Me=new YE(B,mt),xt=new Yy(B,mt,e,Me),We=new XE(B,mt),xt.reversedDepthBuffer&&x&&We.buffers.depth.setReversed(!0),P=new sM(B),M=new PE,G=new jE(B,mt,We,M,xt,Me,P),he=new $y(A),me=new tM(A),le=new ux(B),De=new Xy(B,le),qe=new iM(B,le,P,De),Te=new oM(B,qe,le,P),ot=new aM(B,xt,G),He=new qy(M),Be=new bE(A,he,me,mt,xt,De,He),nt=new JE(A,M),Se=new DE,Re=new kE(mt),Ae=new Wy(A,he,me,We,Te,T,p),Xe=new GE(A,Te,xt),ve=new e1(B,P,xt,We),V=new jy(B,mt,P),Le=new rM(B,mt,P),P.programs=Be.programs,A.capabilities=xt,A.extensions=mt,A.properties=M,A.renderLists=Se,A.shadowMap=Xe,A.state=We,A.info=P}pe(),C!==jn&&(j=new uM(C,n.width,n.height,o,u));const Ce=new ZE(A,B);this.xr=Ce,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(w){w!==void 0&&(be=w,this.setSize(U,ie,!1))},this.getSize=function(w){return w.set(U,ie)},this.setSize=function(w,W,se=!0){if(Ce.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,ie=W,n.width=Math.floor(w*be),n.height=Math.floor(W*be),se===!0&&(n.style.width=w+"px",n.style.height=W+"px"),j!==null&&j.setSize(n.width,n.height),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(U*be,ie*be).floor()},this.setDrawingBufferSize=function(w,W,se){U=w,ie=W,be=se,n.width=Math.floor(w*se),n.height=Math.floor(W*se),this.setViewport(0,0,w,W)},this.setEffects=function(w){if(C===jn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let W=0;W<w.length;W++)if(w[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(oe)},this.getViewport=function(w){return w.copy(ee)},this.setViewport=function(w,W,se,J){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,W,se,J),We.viewport(oe.copy(ee).multiplyScalar(be).round())},this.getScissor=function(w){return w.copy(ce)},this.setScissor=function(w,W,se,J){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,W,se,J),We.scissor(Y.copy(ce).multiplyScalar(be).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(w){We.setScissorTest(ye=w)},this.setOpaqueSort=function(w){Ye=w},this.setTransparentSort=function(w){Ke=w},this.getClearColor=function(w){return w.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,se=!0){let J=0;if(w){let $=!1;if(Z!==null){const Pe=Z.texture.format;$=S.has(Pe)}if($){const Pe=Z.texture.type,Ue=v.has(Pe),we=Ae.getClearColor(),Ve=Ae.getClearAlpha(),Oe=we.r,tt=we.g,Ze=we.b;Ue?(b[0]=Oe,b[1]=tt,b[2]=Ze,b[3]=Ve,B.clearBufferuiv(B.COLOR,0,b)):(L[0]=Oe,L[1]=tt,L[2]=Ze,L[3]=Ve,B.clearBufferiv(B.COLOR,0,L))}else J|=B.COLOR_BUFFER_BIT}W&&(J|=B.DEPTH_BUFFER_BIT),se&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",it,!1),n.removeEventListener("webglcontextrestored",Dt,!1),n.removeEventListener("webglcontextcreationerror",St,!1),Ae.dispose(),Se.dispose(),Re.dispose(),M.dispose(),he.dispose(),me.dispose(),Te.dispose(),De.dispose(),ve.dispose(),Be.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Rr),Ce.removeEventListener("sessionend",br),ri.stop()};function it(w){w.preventDefault(),qp("WebGLRenderer: Context Lost."),R=!0}function Dt(){qp("WebGLRenderer: Context Restored."),R=!1;const w=P.autoReset,W=Xe.enabled,se=Xe.autoUpdate,J=Xe.needsUpdate,$=Xe.type;pe(),P.autoReset=w,Xe.enabled=W,Xe.autoUpdate=se,Xe.needsUpdate=J,Xe.type=$}function St(w){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function kn(w){const W=w.target;W.removeEventListener("dispose",kn),Mn(W)}function Mn(w){$s(w),M.remove(w)}function $s(w){const W=M.get(w).programs;W!==void 0&&(W.forEach(function(se){Be.releaseProgram(se)}),w.isShaderMaterial&&Be.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,se,J,$,Pe){W===null&&(W=Pt);const Ue=$.isMesh&&$.matrixWorld.determinant()<0,we=Ja(w,W,se,J,$);We.setMaterial(J,Ue);let Ve=se.index,Oe=1;if(J.wireframe===!0){if(Ve=qe.getWireframeAttribute(se),Ve===void 0)return;Oe=2}const tt=se.drawRange,Ze=se.attributes.position;let ct=tt.start*Oe,yt=(tt.start+tt.count)*Oe;Pe!==null&&(ct=Math.max(ct,Pe.start*Oe),yt=Math.min(yt,(Pe.start+Pe.count)*Oe)),Ve!==null?(ct=Math.max(ct,0),yt=Math.min(yt,Ve.count)):Ze!=null&&(ct=Math.max(ct,0),yt=Math.min(yt,Ze.count));const Ut=yt-ct;if(Ut<0||Ut===1/0)return;De.setup($,J,we,se,Ve);let It,wt=V;if(Ve!==null&&(It=le.get(Ve),wt=Le,wt.setIndex(It)),$.isMesh)J.wireframe===!0?(We.setLineWidth(J.wireframeLinewidth*Bt()),wt.setMode(B.LINES)):wt.setMode(B.TRIANGLES);else if($.isLine){let Qe=J.linewidth;Qe===void 0&&(Qe=1),We.setLineWidth(Qe*Bt()),$.isLineSegments?wt.setMode(B.LINES):$.isLineLoop?wt.setMode(B.LINE_LOOP):wt.setMode(B.LINE_STRIP)}else $.isPoints?wt.setMode(B.POINTS):$.isSprite&&wt.setMode(B.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Wa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))wt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Qe=$._multiDrawStarts,Rt=$._multiDrawCounts,gt=$._multiDrawCount,hn=Ve?le.get(Ve).bytesPerElement:1,vi=M.get(J).currentProgram.getUniforms();for(let Qt=0;Qt<gt;Qt++)vi.setValue(B,"_gl_DrawID",Qt),wt.render(Qe[Qt]/hn,Rt[Qt])}else if($.isInstancedMesh)wt.renderInstances(ct,Ut,$.count);else if(se.isInstancedBufferGeometry){const Qe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Rt=Math.min(se.instanceCount,Qe);wt.renderInstances(ct,Ut,Rt)}else wt.render(ct,Ut)};function Qi(w,W,se){w.transparent===!0&&w.side===ji&&w.forceSinglePass===!1?(w.side=On,w.needsUpdate=!0,Pr(w,W,se),w.side=Ar,w.needsUpdate=!0,Pr(w,W,se),w.side=ji):Pr(w,W,se)}this.compile=function(w,W,se=null){se===null&&(se=w),I=Re.get(se),I.init(W),O.push(I),se.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(I.pushLight($),$.castShadow&&I.pushShadow($))}),w!==se&&w.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(I.pushLight($),$.castShadow&&I.pushShadow($))}),I.setupLights();const J=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Pe=$.material;if(Pe)if(Array.isArray(Pe))for(let Ue=0;Ue<Pe.length;Ue++){const we=Pe[Ue];Qi(we,se,$),J.add(we)}else Qi(Pe,se,$),J.add(Pe)}),I=O.pop(),J},this.compileAsync=function(w,W,se=null){const J=this.compile(w,W,se);return new Promise($=>{function Pe(){if(J.forEach(function(Ue){M.get(Ue).currentProgram.isReady()&&J.delete(Ue)}),J.size===0){$(w);return}setTimeout(Pe,10)}mt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Ks=null;function Cr(w){Ks&&Ks(w)}function Rr(){ri.stop()}function br(){ri.start()}const ri=new vg;ri.setAnimationLoop(Cr),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(w){Ks=w,Ce.setAnimationLoop(w),w===null?ri.stop():ri.start()},Ce.addEventListener("sessionstart",Rr),Ce.addEventListener("sessionend",br),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const se=Ce.enabled===!0&&Ce.isPresenting===!0,J=j!==null&&(Z===null||se)&&j.begin(A,Z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(W),W=Ce.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,W,Z),I=Re.get(w,O.length),I.init(W),O.push(I),qt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ke.setFromProjectionMatrix(qt,Ci,W.reversedDepth),pt=this.localClippingEnabled,Ie=He.init(this.clippingPlanes,pt),D=Se.get(w,F.length),D.init(),F.push(D),Ce.enabled===!0&&Ce.isPresenting===!0){const Ue=A.xr.getDepthSensingMesh();Ue!==null&&Zs(Ue,W,-1/0,A.sortObjects)}Zs(w,W,0,A.sortObjects),D.finish(),A.sortObjects===!0&&D.sort(Ye,Ke),lt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,lt&&Ae.addToRenderList(D,w),this.info.render.frame++,Ie===!0&&He.beginShadows();const $=I.state.shadowsArray;if(Xe.render($,w,W),Ie===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&j.hasRenderPass())===!1){const Ue=D.opaque,we=D.transmissive;if(I.setupLights(),W.isArrayCamera){const Ve=W.cameras;if(we.length>0)for(let Oe=0,tt=Ve.length;Oe<tt;Oe++){const Ze=Ve[Oe];Za(Ue,we,w,Ze)}lt&&Ae.render(w);for(let Oe=0,tt=Ve.length;Oe<tt;Oe++){const Ze=Ve[Oe];Ka(D,w,Ze,Ze.viewport)}}else we.length>0&&Za(Ue,we,w,W),lt&&Ae.render(w),Ka(D,w,W)}Z!==null&&re===0&&(G.updateMultisampleRenderTarget(Z),G.updateRenderTargetMipmap(Z)),J&&j.end(A),w.isScene===!0&&w.onAfterRender(A,w,W),De.resetDefaultState(),fe=-1,ue=null,O.pop(),O.length>0?(I=O[O.length-1],Ie===!0&&He.setGlobalState(A.clippingPlanes,I.state.camera)):I=null,F.pop(),F.length>0?D=F[F.length-1]:D=null};function Zs(w,W,se,J){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)se=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)I.pushLight(w),w.castShadow&&I.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ke.intersectsSprite(w)){J&&vt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(qt);const Ue=Te.update(w),we=w.material;we.visible&&D.push(w,Ue,we,se,vt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ke.intersectsObject(w))){const Ue=Te.update(w),we=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),vt.copy(w.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),vt.copy(Ue.boundingSphere.center)),vt.applyMatrix4(w.matrixWorld).applyMatrix4(qt)),Array.isArray(we)){const Ve=Ue.groups;for(let Oe=0,tt=Ve.length;Oe<tt;Oe++){const Ze=Ve[Oe],ct=we[Ze.materialIndex];ct&&ct.visible&&D.push(w,Ue,ct,se,vt.z,Ze)}}else we.visible&&D.push(w,Ue,we,se,vt.z,null)}}const Pe=w.children;for(let Ue=0,we=Pe.length;Ue<we;Ue++)Zs(Pe[Ue],W,se,J)}function Ka(w,W,se,J){const{opaque:$,transmissive:Pe,transparent:Ue}=w;I.setupLightsView(se),Ie===!0&&He.setGlobalState(A.clippingPlanes,se),J&&We.viewport(oe.copy(J)),$.length>0&&Yn($,W,se),Pe.length>0&&Yn(Pe,W,se),Ue.length>0&&Yn(Ue,W,se),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Za(w,W,se,J){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[J.id]===void 0){const ct=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[J.id]=new bi(1,1,{generateMipmaps:!0,type:ct?Ki:jn,minFilter:Jr,samples:xt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Pe=I.state.transmissionRenderTarget[J.id],Ue=J.viewport||oe;Pe.setSize(Ue.z*A.transmissionResolutionScale,Ue.w*A.transmissionResolutionScale);const we=A.getRenderTarget(),Ve=A.getActiveCubeFace(),Oe=A.getActiveMipmapLevel();A.setRenderTarget(Pe),A.getClearColor(de),ne=A.getClearAlpha(),ne<1&&A.setClearColor(16777215,.5),A.clear(),lt&&Ae.render(se);const tt=A.toneMapping;A.toneMapping=Ri;const Ze=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),I.setupLightsView(J),Ie===!0&&He.setGlobalState(A.clippingPlanes,J),Yn(w,se,J),G.updateMultisampleRenderTarget(Pe),G.updateRenderTargetMipmap(Pe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let yt=0,Ut=W.length;yt<Ut;yt++){const It=W[yt],{object:wt,geometry:Qe,material:Rt,group:gt}=It;if(Rt.side===ji&&wt.layers.test(J.layers)){const hn=Rt.side;Rt.side=On,Rt.needsUpdate=!0,Qs(wt,se,J,Qe,Rt,gt),Rt.side=hn,Rt.needsUpdate=!0,ct=!0}}ct===!0&&(G.updateMultisampleRenderTarget(Pe),G.updateRenderTargetMipmap(Pe))}A.setRenderTarget(we,Ve,Oe),A.setClearColor(de,ne),Ze!==void 0&&(J.viewport=Ze),A.toneMapping=tt}function Yn(w,W,se){const J=W.isScene===!0?W.overrideMaterial:null;for(let $=0,Pe=w.length;$<Pe;$++){const Ue=w[$],{object:we,geometry:Ve,group:Oe}=Ue;let tt=Ue.material;tt.allowOverride===!0&&J!==null&&(tt=J),we.layers.test(se.layers)&&Qs(we,W,se,Ve,tt,Oe)}}function Qs(w,W,se,J,$,Pe){w.onBeforeRender(A,W,se,J,$,Pe),w.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(A,W,se,J,w,Pe),$.transparent===!0&&$.side===ji&&$.forceSinglePass===!1?($.side=On,$.needsUpdate=!0,A.renderBufferDirect(se,W,J,$,w,Pe),$.side=Ar,$.needsUpdate=!0,A.renderBufferDirect(se,W,J,$,w,Pe),$.side=ji):A.renderBufferDirect(se,W,J,$,w,Pe),w.onAfterRender(A,W,se,J,$,Pe)}function Pr(w,W,se){W.isScene!==!0&&(W=Pt);const J=M.get(w),$=I.state.lights,Pe=I.state.shadowsArray,Ue=$.state.version,we=Be.getParameters(w,$.state,Pe,W,se),Ve=Be.getProgramCacheKey(we);let Oe=J.programs;J.environment=w.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(w.isMeshStandardMaterial?me:he).get(w.envMap||J.environment),J.envMapRotation=J.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",kn),Oe=new Map,J.programs=Oe);let tt=Oe.get(Ve);if(tt!==void 0){if(J.currentProgram===tt&&J.lightsStateVersion===Ue)return Js(w,we),tt}else we.uniforms=Be.getUniforms(w),w.onBeforeCompile(we,A),tt=Be.acquireProgram(we,Ve),Oe.set(Ve,tt),J.uniforms=we.uniforms;const Ze=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=He.uniform),Js(w,we),J.needsLights=to(w),J.lightsStateVersion=Ue,J.needsLights&&(Ze.ambientLightColor.value=$.state.ambient,Ze.lightProbe.value=$.state.probe,Ze.directionalLights.value=$.state.directional,Ze.directionalLightShadows.value=$.state.directionalShadow,Ze.spotLights.value=$.state.spot,Ze.spotLightShadows.value=$.state.spotShadow,Ze.rectAreaLights.value=$.state.rectArea,Ze.ltc_1.value=$.state.rectAreaLTC1,Ze.ltc_2.value=$.state.rectAreaLTC2,Ze.pointLights.value=$.state.point,Ze.pointLightShadows.value=$.state.pointShadow,Ze.hemisphereLights.value=$.state.hemi,Ze.directionalShadowMap.value=$.state.directionalShadowMap,Ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ze.spotShadowMap.value=$.state.spotShadowMap,Ze.spotLightMatrix.value=$.state.spotLightMatrix,Ze.spotLightMap.value=$.state.spotLightMap,Ze.pointShadowMap.value=$.state.pointShadowMap,Ze.pointShadowMatrix.value=$.state.pointShadowMatrix),J.currentProgram=tt,J.uniformsList=null,tt}function Qa(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Dl.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Js(w,W){const se=M.get(w);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function Ja(w,W,se,J,$){W.isScene!==!0&&(W=Pt),G.resetTextureUnits();const Pe=W.fog,Ue=J.isMeshStandardMaterial?W.environment:null,we=Z===null?A.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ws,Ve=(J.isMeshStandardMaterial?me:he).get(J.envMap||Ue),Oe=J.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,tt=!!se.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ze=!!se.morphAttributes.position,ct=!!se.morphAttributes.normal,yt=!!se.morphAttributes.color;let Ut=Ri;J.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ut=A.toneMapping);const It=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,wt=It!==void 0?It.length:0,Qe=M.get(J),Rt=I.state.lights;if(Ie===!0&&(pt===!0||w!==ue)){const rn=w===ue&&J.id===fe;He.setState(J,w,rn)}let gt=!1;J.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Rt.state.version||Qe.outputColorSpace!==we||$.isBatchedMesh&&Qe.batching===!1||!$.isBatchedMesh&&Qe.batching===!0||$.isBatchedMesh&&Qe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Qe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Qe.instancing===!1||!$.isInstancedMesh&&Qe.instancing===!0||$.isSkinnedMesh&&Qe.skinning===!1||!$.isSkinnedMesh&&Qe.skinning===!0||$.isInstancedMesh&&Qe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Qe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Qe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Qe.instancingMorph===!1&&$.morphTexture!==null||Qe.envMap!==Ve||J.fog===!0&&Qe.fog!==Pe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==He.numPlanes||Qe.numIntersection!==He.numIntersection)||Qe.vertexAlphas!==Oe||Qe.vertexTangents!==tt||Qe.morphTargets!==Ze||Qe.morphNormals!==ct||Qe.morphColors!==yt||Qe.toneMapping!==Ut||Qe.morphTargetsCount!==wt)&&(gt=!0):(gt=!0,Qe.__version=J.version);let hn=Qe.currentProgram;gt===!0&&(hn=Pr(J,W,$));let vi=!1,Qt=!1,Lr=!1;const Lt=hn.getUniforms(),st=Qe.uniforms;if(We.useProgram(hn.program)&&(vi=!0,Qt=!0,Lr=!0),J.id!==fe&&(fe=J.id,Qt=!0),vi||ue!==w){We.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Lt.setValue(B,"projectionMatrix",w.projectionMatrix),Lt.setValue(B,"viewMatrix",w.matrixWorldInverse);const sn=Lt.map.cameraPosition;sn!==void 0&&sn.setValue(B,dt.setFromMatrixPosition(w.matrixWorld)),xt.logarithmicDepthBuffer&&Lt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Lt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),ue!==w&&(ue=w,Qt=!0,Lr=!0)}if(Qe.needsLights&&(Rt.state.directionalShadowMap.length>0&&Lt.setValue(B,"directionalShadowMap",Rt.state.directionalShadowMap,G),Rt.state.spotShadowMap.length>0&&Lt.setValue(B,"spotShadowMap",Rt.state.spotShadowMap,G),Rt.state.pointShadowMap.length>0&&Lt.setValue(B,"pointShadowMap",Rt.state.pointShadowMap,G)),$.isSkinnedMesh){Lt.setOptional(B,$,"bindMatrix"),Lt.setOptional(B,$,"bindMatrixInverse");const rn=$.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Lt.setValue(B,"boneTexture",rn.boneTexture,G))}$.isBatchedMesh&&(Lt.setOptional(B,$,"batchingTexture"),Lt.setValue(B,"batchingTexture",$._matricesTexture,G),Lt.setOptional(B,$,"batchingIdTexture"),Lt.setValue(B,"batchingIdTexture",$._indirectTexture,G),Lt.setOptional(B,$,"batchingColorTexture"),$._colorsTexture!==null&&Lt.setValue(B,"batchingColorTexture",$._colorsTexture,G));const En=se.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&ot.update($,se,hn),(Qt||Qe.receiveShadow!==$.receiveShadow)&&(Qe.receiveShadow=$.receiveShadow,Lt.setValue(B,"receiveShadow",$.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(st.envMap.value=Ve,st.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(st.envMapIntensity.value=W.environmentIntensity),st.dfgLUT!==void 0&&(st.dfgLUT.value=n1()),Qt&&(Lt.setValue(B,"toneMappingExposure",A.toneMappingExposure),Qe.needsLights&&eo(st,Lr),Pe&&J.fog===!0&&nt.refreshFogUniforms(st,Pe),nt.refreshMaterialUniforms(st,J,be,ie,I.state.transmissionRenderTarget[w.id]),Dl.upload(B,Qa(Qe),st,G)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Dl.upload(B,Qa(Qe),st,G),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Lt.setValue(B,"center",$.center),Lt.setValue(B,"modelViewMatrix",$.modelViewMatrix),Lt.setValue(B,"normalMatrix",$.normalMatrix),Lt.setValue(B,"modelMatrix",$.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const rn=J.uniformsGroups;for(let sn=0,ns=rn.length;sn<ns;sn++){const xi=rn[sn];ve.update(xi,hn),ve.bind(xi,hn)}}return hn}function eo(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function to(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(w,W,se){const J=M.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),M.get(w.texture).__webglTexture=W,M.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:se,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const se=M.get(w);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0};const Hl=B.createFramebuffer();this.setRenderTarget=function(w,W=0,se=0){Z=w,z=W,re=se;let J=null,$=!1,Pe=!1;if(w){const we=M.get(w);if(we.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(B.FRAMEBUFFER,we.__webglFramebuffer),oe.copy(w.viewport),Y.copy(w.scissor),X=w.scissorTest,We.viewport(oe),We.scissor(Y),We.setScissorTest(X),fe=-1;return}else if(we.__webglFramebuffer===void 0)G.setupRenderTarget(w);else if(we.__hasExternalTextures)G.rebindTextures(w,M.get(w.texture).__webglTexture,M.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const tt=w.depthTexture;if(we.__boundDepthTexture!==tt){if(tt!==null&&M.has(tt)&&(w.width!==tt.image.width||w.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(w)}}const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Pe=!0);const Oe=M.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[W])?J=Oe[W][se]:J=Oe[W],$=!0):w.samples>0&&G.useMultisampledRTT(w)===!1?J=M.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?J=Oe[se]:J=Oe,oe.copy(w.viewport),Y.copy(w.scissor),X=w.scissorTest}else oe.copy(ee).multiplyScalar(be).floor(),Y.copy(ce).multiplyScalar(be).floor(),X=ye;if(se!==0&&(J=Hl),We.bindFramebuffer(B.FRAMEBUFFER,J)&&We.drawBuffers(w,J),We.viewport(oe),We.scissor(Y),We.setScissorTest(X),$){const we=M.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,we.__webglTexture,se)}else if(Pe){const we=W;for(let Ve=0;Ve<w.textures.length;Ve++){const Oe=M.get(w.textures[Ve]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ve,Oe.__webglTexture,se,we)}}else if(w!==null&&se!==0){const we=M.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,we.__webglTexture,se)}fe=-1},this.readRenderTargetPixels=function(w,W,se,J,$,Pe,Ue,we=0){if(!(w&&w.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve){We.bindFramebuffer(B.FRAMEBUFFER,Ve);try{const Oe=w.textures[we],tt=Oe.format,Ze=Oe.type;if(!xt.textureFormatReadable(tt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Ze)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-J&&se>=0&&se<=w.height-$&&(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we),B.readPixels(W,se,J,$,Me.convert(tt),Me.convert(Ze),Pe))}finally{const Oe=Z!==null?M.get(Z).__webglFramebuffer:null;We.bindFramebuffer(B.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(w,W,se,J,$,Pe,Ue,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve)if(W>=0&&W<=w.width-J&&se>=0&&se<=w.height-$){We.bindFramebuffer(B.FRAMEBUFFER,Ve);const Oe=w.textures[we],tt=Oe.format,Ze=Oe.type;if(!xt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ct),B.bufferData(B.PIXEL_PACK_BUFFER,Pe.byteLength,B.STREAM_READ),w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we),B.readPixels(W,se,J,$,Me.convert(tt),Me.convert(Ze),0);const yt=Z!==null?M.get(Z).__webglFramebuffer:null;We.bindFramebuffer(B.FRAMEBUFFER,yt);const Ut=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Mv(B,Ut,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ct),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Pe),B.deleteBuffer(ct),B.deleteSync(Ut),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,se=0){const J=Math.pow(2,-se),$=Math.floor(w.image.width*J),Pe=Math.floor(w.image.height*J),Ue=W!==null?W.x:0,we=W!==null?W.y:0;G.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,se,0,0,Ue,we,$,Pe),We.unbindTexture()};const Gl=B.createFramebuffer(),Ht=B.createFramebuffer();this.copyTextureToTexture=function(w,W,se=null,J=null,$=0,Pe=null){Pe===null&&($!==0?(Wa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=$,$=0):Pe=0);let Ue,we,Ve,Oe,tt,Ze,ct,yt,Ut;const It=w.isCompressedTexture?w.mipmaps[Pe]:w.image;if(se!==null)Ue=se.max.x-se.min.x,we=se.max.y-se.min.y,Ve=se.isBox3?se.max.z-se.min.z:1,Oe=se.min.x,tt=se.min.y,Ze=se.isBox3?se.min.z:0;else{const En=Math.pow(2,-$);Ue=Math.floor(It.width*En),we=Math.floor(It.height*En),w.isDataArrayTexture?Ve=It.depth:w.isData3DTexture?Ve=Math.floor(It.depth*En):Ve=1,Oe=0,tt=0,Ze=0}J!==null?(ct=J.x,yt=J.y,Ut=J.z):(ct=0,yt=0,Ut=0);const wt=Me.convert(W.format),Qe=Me.convert(W.type);let Rt;W.isData3DTexture?(G.setTexture3D(W,0),Rt=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(G.setTexture2DArray(W,0),Rt=B.TEXTURE_2D_ARRAY):(G.setTexture2D(W,0),Rt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const gt=B.getParameter(B.UNPACK_ROW_LENGTH),hn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),vi=B.getParameter(B.UNPACK_SKIP_PIXELS),Qt=B.getParameter(B.UNPACK_SKIP_ROWS),Lr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,It.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,It.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Oe),B.pixelStorei(B.UNPACK_SKIP_ROWS,tt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze);const Lt=w.isDataArrayTexture||w.isData3DTexture,st=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const En=M.get(w),rn=M.get(W),sn=M.get(En.__renderTarget),ns=M.get(rn.__renderTarget);We.bindFramebuffer(B.READ_FRAMEBUFFER,sn.__webglFramebuffer),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let xi=0;xi<Ve;xi++)Lt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M.get(w).__webglTexture,$,Ze+xi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M.get(W).__webglTexture,Pe,Ut+xi)),B.blitFramebuffer(Oe,tt,Ue,we,ct,yt,Ue,we,B.DEPTH_BUFFER_BIT,B.NEAREST);We.bindFramebuffer(B.READ_FRAMEBUFFER,null),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||M.has(w)){const En=M.get(w),rn=M.get(W);We.bindFramebuffer(B.READ_FRAMEBUFFER,Gl),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ht);for(let sn=0;sn<Ve;sn++)Lt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,En.__webglTexture,$,Ze+sn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,En.__webglTexture,$),st?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,rn.__webglTexture,Pe,Ut+sn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,rn.__webglTexture,Pe),$!==0?B.blitFramebuffer(Oe,tt,Ue,we,ct,yt,Ue,we,B.COLOR_BUFFER_BIT,B.NEAREST):st?B.copyTexSubImage3D(Rt,Pe,ct,yt,Ut+sn,Oe,tt,Ue,we):B.copyTexSubImage2D(Rt,Pe,ct,yt,Oe,tt,Ue,we);We.bindFramebuffer(B.READ_FRAMEBUFFER,null),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else st?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Rt,Pe,ct,yt,Ut,Ue,we,Ve,wt,Qe,It.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Rt,Pe,ct,yt,Ut,Ue,we,Ve,wt,It.data):B.texSubImage3D(Rt,Pe,ct,yt,Ut,Ue,we,Ve,wt,Qe,It):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Pe,ct,yt,Ue,we,wt,Qe,It.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Pe,ct,yt,It.width,It.height,wt,It.data):B.texSubImage2D(B.TEXTURE_2D,Pe,ct,yt,Ue,we,wt,Qe,It);B.pixelStorei(B.UNPACK_ROW_LENGTH,gt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,hn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,vi),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Lr),Pe===0&&W.generateMipmaps&&B.generateMipmap(Rt),We.unbindTexture()},this.initRenderTarget=function(w){M.get(w).__webglFramebuffer===void 0&&G.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?G.setTextureCube(w,0):w.isData3DTexture?G.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?G.setTexture2DArray(w,0):G.setTexture2D(w,0),We.unbindTexture()},this.resetState=function(){z=0,re=0,Z=null,We.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}const r1=()=>{const[a,e]=Sn.useState(!1),[n,r]=Sn.useState("home"),[o,u]=Sn.useState(0),[f,d]=Sn.useState({name:"",email:"",message:""}),p=Sn.useRef(null),m=Sn.useRef(null),g=Sn.useRef(null),_=Sn.useRef(null);Sn.useEffect(()=>{if(!p.current)return;const b=new Yv;m.current=b;const L=new Xn(75,window.innerWidth/window.innerHeight,.1,1e3);L.position.z=5;const D=new i1({alpha:!0,antialias:!0});D.setSize(window.innerWidth,window.innerHeight),D.setPixelRatio(window.devicePixelRatio),p.current.appendChild(D.domElement);const I=new Fl(1,.3,100,16),F=new tx({color:440020,emissive:674394,shininess:100,wireframe:!1}),O=new _i(I,F);g.current=O,b.add(O);const j=new Fl(1.02,.32,100,16),A=new cd({color:1096065,wireframe:!0,transparent:!0,opacity:.3}),R=new _i(j,A);O.add(R);const z=new ii,re=1e3,Z=new Float32Array(re*3);for(let ie=0;ie<re*3;ie++)Z[ie]=(Math.random()-.5)*15;z.setAttribute("position",new gi(Z,3));const fe=new pg({color:440020,size:.05,transparent:!0,opacity:.6}),ue=new Qv(z,fe);_.current=ue,b.add(ue);const oe=new ax(16777215,.5);b.add(oe);const Y=new mm(440020,2);Y.position.set(5,5,5),b.add(Y);const X=new mm(1096065,2);X.position.set(-5,-5,5),b.add(X);let de;const ne=()=>{de=requestAnimationFrame(ne),g.current&&(g.current.rotation.x+=.005,g.current.rotation.y+=.005),_.current&&(_.current.rotation.y+=.001),D.render(b,L)};ne();const U=()=>{L.aspect=window.innerWidth/window.innerHeight,L.updateProjectionMatrix(),D.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",U),()=>{cancelAnimationFrame(de),window.removeEventListener("resize",U),p.current&&D.domElement&&p.current.removeChild(D.domElement),I.dispose(),F.dispose(),j.dispose(),A.dispose(),z.dispose(),fe.dispose(),D.dispose()}},[]),Sn.useEffect(()=>{const b=()=>{const L=window.scrollY;if(u(L),g.current){const F=L*.001;g.current.rotation.y=F*2,g.current.rotation.x=F;const O=1+Math.sin(F)*.3;g.current.scale.set(O,O,O),g.current.position.y=-F*2,g.current.position.x=Math.sin(F)*2}_.current&&(_.current.rotation.x=L*5e-4);const I=["home","about","projects","services","experience","contact"].find(F=>{const O=document.getElementById(F);if(O){const j=O.getBoundingClientRect();return j.top<=100&&j.bottom>=100}return!1});I&&r(I)};return window.addEventListener("scroll",b),()=>window.removeEventListener("scroll",b)},[]);const x=b=>{var L;(L=document.getElementById(b))==null||L.scrollIntoView({behavior:"smooth"}),e(!1)},y=()=>{alert("Message sent! (Demo)"),d({name:"",email:"",message:""})},T=[{title:"E-Commerce Platform",description:"Full-stack marketplace with real-time inventory and AI recommendations",tech:["React","Node.js","MongoDB","Socket.io"],image:"https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",link:"#"},{title:"AI Chat Assistant",description:"Intelligent chatbot with NLP capabilities and multi-language support",tech:["Python","TensorFlow","FastAPI","React"],image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",link:"#"},{title:"Mobile Fitness App",description:"Cross-platform fitness tracker with social features and AR workouts",tech:["Flutter","Firebase","ARCore","GraphQL"],image:"https://images.unsplash.com/photo-1461088945293-0c17689e48ac?w=800&h=600&fit=crop",link:"#"},{title:"Analytics Dashboard",description:"Real-time data visualization platform for business intelligence",tech:["Vue.js","D3.js","PostgreSQL","Redis"],image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",link:"#"}],C=[{icon:ae.jsx(S_,{className:"w-12 h-12"}),title:"Web Development",description:"Building responsive, performant web applications with modern frameworks and best practices"},{icon:ae.jsx(k_,{className:"w-12 h-12"}),title:"Mobile Development",description:"Creating native and cross-platform mobile apps for iOS and Android"},{icon:ae.jsx(I_,{className:"w-12 h-12"}),title:"UI/UX Design",description:"Crafting beautiful, intuitive user interfaces with attention to detail"}],S=[{role:"Senior Full Stack Developer",company:"Tech Innovators Inc.",period:"2022 - Present",description:"Leading development of cloud-based SaaS products, mentoring junior developers"},{role:"Software Engineer",company:"Digital Solutions Co.",period:"2020 - 2022",description:"Developed microservices architecture, improved system performance by 40%"},{role:"Junior Developer",company:"StartUp Labs",period:"2019 - 2020",description:"Built responsive web applications, collaborated with design team"}],v=[{name:"React",level:95},{name:"Node.js",level:90},{name:"Python",level:85},{name:"Flutter",level:80},{name:"AWS",level:75},{name:"Docker",level:85}];return ae.jsxs("div",{className:"bg-slate-950 text-white min-h-screen font-sans overflow-x-hidden",children:[ae.jsx("div",{ref:p,className:"fixed top-0 left-0 w-full h-screen pointer-events-none z-0"}),ae.jsxs("nav",{className:`fixed top-0 w-full z-50 transition-all duration-300 ${o>50?"bg-slate-950/80 backdrop-blur-lg shadow-lg shadow-cyan-500/10":"bg-transparent"}`,children:[ae.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex justify-between items-center",children:[ae.jsx("div",{className:"text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent",children:"Portfolio"}),ae.jsx("div",{className:"hidden md:flex space-x-8",children:["home","about","projects","services","experience","contact"].map(b=>ae.jsx("button",{onClick:()=>x(b),className:`capitalize transition-all duration-300 hover:text-cyan-400 ${n===b?"text-cyan-400 font-semibold":"text-gray-300"}`,children:b},b))}),ae.jsx("button",{className:"md:hidden text-white",onClick:()=>e(!a),children:a?ae.jsx(H_,{}):ae.jsx(D_,{})})]}),a&&ae.jsx("div",{className:"md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-cyan-500/20",children:["home","about","projects","services","experience","contact"].map(b=>ae.jsx("button",{onClick:()=>x(b),className:"block w-full text-left px-6 py-3 capitalize hover:bg-slate-800 transition-colors border-l-2 border-transparent hover:border-cyan-400",children:b},b))})]}),ae.jsxs("section",{id:"home",className:"min-h-screen flex items-center justify-center relative px-6",style:{transform:`translateY(${o*.5}px)`},children:[ae.jsxs("div",{className:"max-w-5xl mx-auto text-center z-10",children:[ae.jsx("div",{className:"mb-8",children:ae.jsx("div",{className:"w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 p-1 shadow-lg shadow-cyan-500/50",children:ae.jsx("div",{className:"w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-5xl font-bold",children:ae.jsx("img",{src:"src/assets/myphoto.jpg",alt:"Profile",className:"w-full h-full object-cover rounded-full"})})})}),ae.jsx("h1",{className:"text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent p-5",style:{backgroundSize:"200% 200%",animation:"gradient 3s ease infinite"},children:"Numidu Dulanga"}),ae.jsx("p",{className:"text-xl md:text-3xl text-cyan-400 mb-6 font-light",style:{filter:"drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))"},children:"Full Stack Developer & Designer"}),ae.jsx("p",{className:"text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed",children:"Crafting elegant solutions to complex problems. Passionate about building scalable applications with beautiful user experiences."}),ae.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:[ae.jsx("button",{onClick:()=>x("projects"),className:"px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1",children:"View Projects"}),ae.jsx("button",{onClick:()=>x("contact"),className:"px-8 py-4 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm",children:"Get In Touch"})]}),ae.jsxs("div",{className:"flex justify-center space-x-6",children:[ae.jsx("a",{href:"#",className:"text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1",children:ae.jsx(T_,{className:"w-6 h-6"})}),ae.jsx("a",{href:"#",className:"text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1",children:ae.jsx(R_,{className:"w-6 h-6"})}),ae.jsx("a",{href:"#",className:"text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1",children:ae.jsx(z_,{className:"w-6 h-6"})})]})]}),ae.jsx("div",{className:"absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce",children:ae.jsx(v_,{className:"w-8 h-8 text-cyan-400",style:{filter:"drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))"}})})]}),ae.jsx("section",{id:"about",className:"py-32 px-6 relative z-10 bg-gradient-to-b from-transparent to-slate-950/50",style:{transform:`translateY(${o*.2}px)`},children:ae.jsxs("div",{className:"max-w-7xl mx-auto",children:[ae.jsx("h2",{className:"text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent",children:"About Me"}),ae.jsxs("div",{className:"grid md:grid-cols-2 gap-12 mb-16",children:[ae.jsxs("div",{className:"bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 transform hover:-translate-y-2",children:[ae.jsx(A_,{className:"w-12 h-12 text-cyan-400 mb-4"}),ae.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Education"}),ae.jsxs("p",{className:"text-gray-400 leading-relaxed",children:[ae.jsx("span",{className:"text-white font-semibold",children:"Bachelor of Computer Science"}),ae.jsx("br",{}),"University Of Ruhuna - 2023 to 2026",ae.jsx("br",{}),"Focus: Devops , Mobile App Development and full stack development."]})]}),ae.jsxs("div",{className:"bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20 transform hover:-translate-y-2",children:[ae.jsx(Da,{className:"w-12 h-12 text-emerald-400 mb-4"}),ae.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Career Goals"}),ae.jsx("p",{className:"text-gray-400 leading-relaxed",children:"Building innovative products that make a difference. Passionate about leading engineering teams and mentoring the next generation of developers."})]})]}),ae.jsxs("div",{className:"bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300",children:[ae.jsx("h3",{className:"text-3xl font-bold mb-8 text-center",children:"Technical Skills"}),ae.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:v.map((b,L)=>ae.jsxs("div",{className:"group",children:[ae.jsxs("div",{className:"flex justify-between mb-2",children:[ae.jsx("span",{className:"font-semibold group-hover:text-cyan-400 transition-colors",children:b.name}),ae.jsxs("span",{className:"text-cyan-400",children:[b.level,"%"]})]}),ae.jsx("div",{className:"h-3 bg-slate-800 rounded-full overflow-hidden shadow-inner",children:ae.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full transition-all duration-1000 shadow-lg shadow-cyan-500/50",style:{width:`${b.level}%`}})})]},L))})]})]})}),ae.jsx("section",{id:"projects",className:"py-32 px-6 relative z-10",style:{transform:`translateY(${o*.15}px)`},children:ae.jsxs("div",{className:"max-w-7xl mx-auto",children:[ae.jsx("h2",{className:"text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent",children:"Featured Projects"}),ae.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:T.map((b,L)=>ae.jsxs("div",{className:"group relative bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/30",children:[ae.jsxs("div",{className:"aspect-video overflow-hidden relative",children:[ae.jsx("img",{src:b.image,alt:b.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"}),ae.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"})]}),ae.jsxs("div",{className:"p-6",children:[ae.jsx("h3",{className:"text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors",children:b.title}),ae.jsx("p",{className:"text-gray-400 mb-4",children:b.description}),ae.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:b.tech.map((D,I)=>ae.jsx("span",{className:"px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400 hover:bg-cyan-500/20 transition-colors",children:D},I))}),ae.jsxs("a",{href:b.link,className:"inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:gap-3 gap-2",children:["View Project"," ",ae.jsx(M_,{className:"w-4 h-4 transition-all"})]})]})]},L))})]})}),ae.jsx("section",{id:"services",className:"py-32 px-6 relative z-10 bg-gradient-to-b from-transparent to-slate-950/50",style:{transform:`translateY(${o*.1}px)`},children:ae.jsxs("div",{className:"max-w-7xl mx-auto",children:[ae.jsx("h2",{className:"text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent",children:"Services"}),ae.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:C.map((b,L)=>ae.jsxs("div",{className:"bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 text-center transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20",children:[ae.jsx("div",{className:"text-cyan-400 mb-6 flex justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12",children:b.icon}),ae.jsx("h3",{className:"text-2xl font-bold mb-4",children:b.title}),ae.jsx("p",{className:"text-gray-400 leading-relaxed",children:b.description})]},L))})]})}),ae.jsx("section",{id:"experience",className:"py-32 px-6 relative z-10",style:{transform:`translateY(${o*.08}px)`},children:ae.jsxs("div",{className:"max-w-5xl mx-auto",children:[ae.jsx("h2",{className:"text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent",children:"Experience & Certifications"}),ae.jsx("div",{className:"space-y-8",children:S.map((b,L)=>ae.jsx("div",{className:"bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 transform hover:translate-x-2 hover:shadow-xl hover:shadow-cyan-500/20",children:ae.jsxs("div",{className:"flex items-start gap-4",children:[ae.jsx(g_,{className:"w-8 h-8 text-cyan-400 flex-shrink-0 mt-1"}),ae.jsxs("div",{className:"flex-1",children:[ae.jsx("h3",{className:"text-2xl font-bold mb-2",children:b.role}),ae.jsx("p",{className:"text-cyan-400 mb-2",children:b.company}),ae.jsx("p",{className:"text-gray-500 text-sm mb-3",children:b.period}),ae.jsx("p",{className:"text-gray-400",children:b.description})]})]})},L))}),ae.jsxs("div",{className:"mt-12 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-3xl p-8 border border-cyan-500/30 backdrop-blur-sm hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300",children:[ae.jsx("h3",{className:"text-2xl font-bold mb-6 text-center",children:"Certifications"}),ae.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[ae.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-colors",children:[ae.jsx(Da,{className:"w-6 h-6 text-cyan-400"}),ae.jsx("span",{children:"AWS Certified Solutions Architect"})]}),ae.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-500/10 transition-colors",children:[ae.jsx(Da,{className:"w-6 h-6 text-emerald-400"}),ae.jsx("span",{children:"Google Cloud Professional Developer"})]}),ae.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-colors",children:[ae.jsx(Da,{className:"w-6 h-6 text-cyan-400"}),ae.jsx("span",{children:"Meta React Native Specialist"})]}),ae.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-500/10 transition-colors",children:[ae.jsx(Da,{className:"w-6 h-6 text-emerald-400"}),ae.jsx("span",{children:"MongoDB Certified Developer"})]})]})]})]})}),ae.jsx("section",{id:"contact",className:"py-40  mb-40  px-6 relative z-10 bg-gradient-to-b from-transparent to-slate-950",style:{transform:`translateY(${o*.05}px)`},children:ae.jsxs("div",{className:"max-w-4xl mx-auto mb-10",children:[ae.jsx("h2",{className:"text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent",children:"Get In Touch"}),ae.jsxs("div",{className:"bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20",children:[ae.jsxs("div",{className:"space-y-6",children:[ae.jsxs("div",{children:[ae.jsx("label",{className:"block text-sm font-semibold mb-2 text-cyan-400",children:"Name"}),ae.jsx("input",{type:"text",value:f.name,onChange:b=>d({...f,name:b.target.value}),className:"w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all",placeholder:"Your name"})]}),ae.jsxs("div",{children:[ae.jsx("label",{className:"block text-sm font-semibold mb-2 text-cyan-400",children:"Email"}),ae.jsx("input",{type:"email",value:f.email,onChange:b=>d({...f,email:b.target.value}),className:"w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all",placeholder:"your@email.com"})]}),ae.jsxs("div",{children:[ae.jsx("label",{className:"block text-sm font-semibold mb-2 text-cyan-400",children:"Message"}),ae.jsx("textarea",{value:f.message,onChange:b=>d({...f,message:b.target.value}),rows:"5",className:"w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none",placeholder:"Your message..."})]}),ae.jsxs("button",{onClick:y,className:"w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105",children:["Send Message ",ae.jsx(F_,{className:"w-5 h-5"})]})]}),ae.jsx("div",{className:"mt-8 pt-4 border-t border-slate-800",children:ae.jsx("div",{className:"flex justify-center space-x-6",children:ae.jsxs("a",{href:"#",className:"flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110",children:[ae.jsx(P_,{className:"w-5 h-5"}),ae.jsx("span",{children:"john@email.com"})]})})})]})]})}),ae.jsx("footer",{className:"mt-10 py-12 px-6 border-t border-slate-800 relative z-10 backdrop-blur-sm",children:ae.jsxs("div",{className:"max-w-7xl mx-auto text-center text-gray-400",children:[ae.jsx("p",{className:"mb-4",children:"© 2026 John Doe. All rights reserved."}),ae.jsxs("div",{className:"flex justify-center space-x-6",children:[ae.jsx("a",{href:"#",className:"hover:text-cyan-400 transition-colors",children:"Privacy Policy"}),ae.jsx("a",{href:"#",className:"hover:text-cyan-400 transition-colors",children:"Terms of Service"})]})]})})]})};l_.createRoot(document.getElementById("root")).render(ae.jsx(Sn.StrictMode,{children:ae.jsx(r1,{})}));
