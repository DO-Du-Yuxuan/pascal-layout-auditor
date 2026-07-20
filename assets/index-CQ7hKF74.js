var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return T(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function O(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function k(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function A(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,A(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+O(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),A(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+O(a,u),c+=A(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+O(a,u++),c+=A(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return A(k(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function j(e,t,n){if(e==null)return e;var r=[],i=0;return A(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function M(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var N=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},P={map:j,forEach:function(e,t,n){j(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return j(e,function(){t++}),t},toArray:function(e){return j(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=P,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:M}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,N)}catch(e){N(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&O(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function E(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&O(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=E,D=function(){ne.postMessage(null)}}else D=function(){_(E,0)};function O(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,O(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),E=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),O=Symbol.iterator;function k(e){return typeof e!=`object`||!e?null:(e=O&&e[O]||e[`@@iterator`],typeof e==`function`?e:null)}var A=Symbol.for(`react.client.reference`);function j(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===A?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case T:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case E:return t=e.displayName||null,t===null?j(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return j(e(t))}catch{}}return null}var M=Array.isArray,N=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},ie=[],ae=-1;function oe(e){return{current:e}}function se(e){0>ae||(e.current=ie[ae],ie[ae]=null,ae--)}function F(e,t){ae++,ie[ae]=e.current,e.current=t}var ce=oe(null),I=oe(null),le=oe(null),ue=oe(null);function de(e,t){switch(F(le,t),F(I,e),F(ce,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}se(ce),F(ce,e)}function fe(){se(ce),se(I),se(le)}function pe(e){e.memoizedState!==null&&F(ue,e);var t=ce.current,n=Hd(t,e.type);t!==n&&(F(I,e),F(ce,n))}function me(e){I.current===e&&(se(ce),se(I)),ue.current===e&&(se(ue),Qf._currentValue=re)}var he,ge;function _e(e){if(he===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);he=t&&t[1]||``,ge=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+he+e+ge}var ve=!1;function ye(e,t){if(!e||ve)return``;ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ve=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?_e(n):``}function be(e,t){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e(`Lazy`);case 13:return e.child!==t&&t!==null?_e(`Suspense Fallback`):_e(`Suspense`);case 19:return _e(`SuspenseList`);case 0:case 15:return ye(e.type,!1);case 11:return ye(e.type.render,!1);case 1:return ye(e.type,!0);case 31:return _e(`Activity`);default:return``}}function xe(e){try{var t=``,n=null;do t+=be(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Se=Object.prototype.hasOwnProperty,Ce=t.unstable_scheduleCallback,we=t.unstable_cancelCallback,Te=t.unstable_shouldYield,Ee=t.unstable_requestPaint,De=t.unstable_now,Oe=t.unstable_getCurrentPriorityLevel,ke=t.unstable_ImmediatePriority,Ae=t.unstable_UserBlockingPriority,je=t.unstable_NormalPriority,Me=t.unstable_LowPriority,Ne=t.unstable_IdlePriority,Pe=t.log,Fe=t.unstable_setDisableYieldValue,Ie=null,Le=null;function Re(e){if(typeof Pe==`function`&&Fe(e),Le&&typeof Le.setStrictMode==`function`)try{Le.setStrictMode(Ie,e)}catch{}}var ze=Math.clz32?Math.clz32:He,Be=Math.log,Ve=Math.LN2;function He(e){return e>>>=0,e===0?32:31-(Be(e)/Ve|0)|0}var Ue=256,We=262144,Ge=4194304;function Ke(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ke(n))):i=Ke(o):i=Ke(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ke(n))):i=Ke(o)):i=Ke(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Je(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ye(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xe(){var e=Ge;return Ge<<=1,!(Ge&62914560)&&(Ge=4194304),e}function Ze(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $e(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ze(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&et(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function et(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ze(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function tt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function nt(e,t){var n=t&-t;return n=n&42?1:rt(n),(n&(e.suspendedLanes|t))===0?n:0}function rt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function it(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function at(){var e=P.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ot(e,t){var n=P.p;try{return P.p=e,t()}finally{P.p=n}}var st=Math.random().toString(36).slice(2),ct=`__reactFiber$`+st,lt=`__reactProps$`+st,ut=`__reactContainer$`+st,dt=`__reactEvents$`+st,ft=`__reactListeners$`+st,pt=`__reactHandles$`+st,mt=`__reactResources$`+st,ht=`__reactMarker$`+st;function gt(e){delete e[ct],delete e[lt],delete e[dt],delete e[ft],delete e[pt]}function _t(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ct])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function vt(e){if(e=e[ct]||e[ut]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function yt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function bt(e){var t=e[mt];return t||=e[mt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function xt(e){e[ht]=!0}var St=new Set,Ct={};function wt(e,t){Tt(e,t),Tt(e+`Capture`,t)}function Tt(e,t){for(Ct[e]=t,e=0;e<t.length;e++)St.add(t[e])}var Et=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Dt={},Ot={};function kt(e){return Se.call(Ot,e)?!0:Se.call(Dt,e)?!1:Et.test(e)?Ot[e]=!0:(Dt[e]=!0,!1)}function At(e,t,n){if(kt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function jt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function L(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Mt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function R(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Nt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pt(e){if(!e._valueTracker){var t=R(e)?`checked`:`value`;e._valueTracker=Nt(e,t,``+e[t])}}function Ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=R(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function It(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Lt=/[\n"\\]/g;function Rt(e){return e.replace(Lt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function zt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Mt(t)):e.value!==``+Mt(t)&&(e.value=``+Mt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Vt(e,o,Mt(n)):Vt(e,o,Mt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Mt(s):e.removeAttribute(`name`)}function Bt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Pt(e);return}n=n==null?``:``+Mt(n),t=t==null?n:``+Mt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Pt(e)}function Vt(e,t,n){t===`number`&&It(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ht(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ut(e,t,n){if(t!=null&&(t=``+Mt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Mt(n)}function Wt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(M(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Mt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Pt(e)}function Gt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Kt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Jt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&qt(e,o,t[o])}function Yt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Xt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qt(e){return Zt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function $t(){}var en=null;function tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nn=null,rn=null;function an(e){var t=vt(e);if(t&&(e=t.stateNode)){var n=e[lt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(zt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Rt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[lt]||null;if(!a)throw Error(i(90));zt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ft(r)}break a;case`textarea`:Ut(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ht(e,!!n.multiple,t,!1)}}}var on=!1;function sn(e,t,n){if(on)return e(t,n);on=!0;try{return e(t)}finally{if(on=!1,(nn!==null||rn!==null)&&(bu(),nn&&(t=nn,e=rn,rn=nn=null,an(t),e)))for(t=0;t<e.length;t++)an(e[t])}}function cn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[lt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var ln=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),un=!1;if(ln)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){un=!0}}),window.addEventListener(`test`,dn,dn),window.removeEventListener(`test`,dn,dn)}catch{un=!1}var fn=null,pn=null,mn=null;function hn(){if(mn)return mn;var e,t=pn,n=t.length,r,i=`value`in fn?fn.value:fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return mn=i.slice(e,1<r?1-r:void 0)}function gn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _n(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?_n:vn,this.isPropagationStopped=vn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xn=yn(bn),Sn=h({},bn,{view:0,detail:0}),Cn=yn(Sn),wn,Tn,En,Dn=h({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==En&&(En&&e.type===`mousemove`?(wn=e.screenX-En.screenX,Tn=e.screenY-En.screenY):Tn=wn=0,En=e),wn)},movementY:function(e){return`movementY`in e?e.movementY:Tn}}),On=yn(Dn),kn=yn(h({},Dn,{dataTransfer:0})),An=yn(h({},Sn,{relatedTarget:0})),jn=yn(h({},bn,{animationName:0,elapsedTime:0,pseudoElement:0})),Mn=yn(h({},bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Nn=yn(h({},bn,{data:0})),Pn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Fn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},In={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Ln(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=In[e])?!!t[e]:!1}function Rn(){return Ln}var zn=yn(h({},Sn,{key:function(e){if(e.key){var t=Pn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=gn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Fn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rn,charCode:function(e){return e.type===`keypress`?gn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?gn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Bn=yn(h({},Dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Vn=yn(h({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rn})),Hn=yn(h({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Un=yn(h({},Dn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Wn=yn(h({},bn,{newState:0,oldState:0})),Gn=[9,13,27,32],Kn=ln&&`CompositionEvent`in window,qn=null;ln&&`documentMode`in document&&(qn=document.documentMode);var Jn=ln&&`TextEvent`in window&&!qn,Yn=ln&&(!Kn||qn&&8<qn&&11>=qn),Xn=` `,Zn=!1;function Qn(e,t){switch(e){case`keyup`:return Gn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function $n(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var er=!1;function tr(e,t){switch(e){case`compositionend`:return $n(t);case`keypress`:return t.which===32?(Zn=!0,Xn):null;case`textInput`:return e=t.data,e===Xn&&Zn?null:e;default:return null}}function nr(e,t){if(er)return e===`compositionend`||!Kn&&Qn(e,t)?(e=hn(),mn=pn=fn=null,er=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Yn&&t.locale!==`ko`?null:t.data;default:return null}}var rr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!rr[e.type]:t===`textarea`}function ar(e,t,n,r){nn?rn?rn.push(r):rn=[r]:nn=r,t=Ed(t,`onChange`),0<t.length&&(n=new xn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var or=null,sr=null;function cr(e){yd(e,0)}function lr(e){if(Ft(yt(e)))return e}function ur(e,t){if(e===`change`)return t}var dr=!1;if(ln){var fr;if(ln){var pr=`oninput`in document;if(!pr){var mr=document.createElement(`div`);mr.setAttribute(`oninput`,`return;`),pr=typeof mr.oninput==`function`}fr=pr}else fr=!1;dr=fr&&(!document.documentMode||9<document.documentMode)}function hr(){or&&(or.detachEvent(`onpropertychange`,gr),sr=or=null)}function gr(e){if(e.propertyName===`value`&&lr(sr)){var t=[];ar(t,sr,e,tn(e)),sn(cr,t)}}function _r(e,t,n){e===`focusin`?(hr(),or=t,sr=n,or.attachEvent(`onpropertychange`,gr)):e===`focusout`&&hr()}function vr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return lr(sr)}function yr(e,t){if(e===`click`)return lr(t)}function br(e,t){if(e===`input`||e===`change`)return lr(t)}function xr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Sr=typeof Object.is==`function`?Object.is:xr;function Cr(e,t){if(Sr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Se.call(t,i)||!Sr(e[i],t[i]))return!1}return!0}function wr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tr(e,t){var n=wr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=wr(n)}}function Er(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Er(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=It(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=It(e.document)}return t}function Or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var kr=ln&&`documentMode`in document&&11>=document.documentMode,Ar=null,jr=null,Mr=null,Nr=!1;function Pr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nr||Ar==null||Ar!==It(r)||(r=Ar,`selectionStart`in r&&Or(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&Cr(Mr,r)||(Mr=r,r=Ed(jr,`onSelect`),0<r.length&&(t=new xn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ar)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ir={animationend:Fr(`Animation`,`AnimationEnd`),animationiteration:Fr(`Animation`,`AnimationIteration`),animationstart:Fr(`Animation`,`AnimationStart`),transitionrun:Fr(`Transition`,`TransitionRun`),transitionstart:Fr(`Transition`,`TransitionStart`),transitioncancel:Fr(`Transition`,`TransitionCancel`),transitionend:Fr(`Transition`,`TransitionEnd`)},Lr={},Rr={};ln&&(Rr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),`TransitionEvent`in window||delete Ir.transitionend.transition);function zr(e){if(Lr[e])return Lr[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rr)return Lr[e]=t[n];return e}var Br=zr(`animationend`),Vr=zr(`animationiteration`),Hr=zr(`animationstart`),Ur=zr(`transitionrun`),Wr=zr(`transitionstart`),Gr=zr(`transitioncancel`),Kr=zr(`transitionend`),qr=new Map,Jr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Jr.push(`scrollEnd`);function Yr(e,t){qr.set(e,t),wt(t,[e])}var Xr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Zr=[],Qr=0,$r=0;function ei(){for(var e=Qr,t=$r=Qr=0;t<e;){var n=Zr[t];Zr[t++]=null;var r=Zr[t];Zr[t++]=null;var i=Zr[t];Zr[t++]=null;var a=Zr[t];if(Zr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ii(n,i,a)}}function ti(e,t,n,r){Zr[Qr++]=e,Zr[Qr++]=t,Zr[Qr++]=n,Zr[Qr++]=r,$r|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ni(e,t,n,r){return ti(e,t,n,r),ai(e)}function ri(e,t){return ti(e,null,null,t),ai(e)}function ii(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ze(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ai(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var oi={};function si(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,t,n,r){return new si(e,t,n,r)}function li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ui(e,t){var n=e.alternate;return n===null?(n=ci(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function di(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function fi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)li(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ce.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=ci(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return pi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ci(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=ci(13,n,t,a),e.elementType=ee,e.lanes=o,e;case T:return e=ci(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case E:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ci(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function pi(e,t,n,r){return e=ci(7,e,r,t),e.lanes=n,e}function mi(e,t,n){return e=ci(6,e,null,t),e.lanes=n,e}function hi(e){var t=ci(18,null,null,0);return t.stateNode=e,t}function gi(e,t,n){return t=ci(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _i=new WeakMap;function vi(e,t){if(typeof e==`object`&&e){var n=_i.get(e);return n===void 0?(t={value:e,source:t,stack:xe(t)},_i.set(e,t),t):n}return{value:e,source:t,stack:xe(t)}}var yi=[],bi=0,xi=null,Si=0,Ci=[],wi=0,Ti=null,Ei=1,Di=``;function Oi(e,t){yi[bi++]=Si,yi[bi++]=xi,xi=e,Si=t}function ki(e,t,n){Ci[wi++]=Ei,Ci[wi++]=Di,Ci[wi++]=Ti,Ti=e;var r=Ei;e=Di;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var a=32-ze(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ei=1<<32-ze(t)+i|n<<i|r,Di=a+e}else Ei=1<<a|n<<i|r,Di=e}function Ai(e){e.return!==null&&(Oi(e,1),ki(e,1,0))}function ji(e){for(;e===xi;)xi=yi[--bi],yi[bi]=null,Si=yi[--bi],yi[bi]=null;for(;e===Ti;)Ti=Ci[--wi],Ci[wi]=null,Di=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null}function Mi(e,t){Ci[wi++]=Ei,Ci[wi++]=Di,Ci[wi++]=Ti,Ei=t.id,Di=t.overflow,Ti=e}var Ni=null,z=null,B=!1,V=null,Pi=!1,Fi=Error(i(519));function Ii(e){throw Hi(vi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Fi}function Li(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ct]=e,t[lt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Wt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||Ii(e,!0)}function Ri(e){for(Ni=e.return;Ni;)switch(Ni.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:Ni=Ni.return}}function zi(e){if(e!==Ni)return!1;if(!B)return Ri(e),B=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&z&&Ii(e),Ri(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));z=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));z=uf(e)}else t===27?(t=z,Zd(e.type)?(e=lf,lf=null,z=e):z=t):z=Ni?cf(e.stateNode.nextSibling):null;return!0}function Bi(){z=Ni=null,B=!1}function Vi(){var e=V;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),V=null),e}function Hi(e){V===null?V=[e]:V.push(e)}var Ui=oe(null),Wi=null,Gi=null;function Ki(e,t,n){F(Ui,t._currentValue),t._currentValue=n}function qi(e){e._currentValue=Ui.current,se(Ui)}function Ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Yi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ji(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ji(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Xi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Sr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ue.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Yi(t,e,n,r),t.flags|=262144}function Zi(e){for(e=e.firstContext;e!==null;){if(!Sr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qi(e){Wi=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $i(e){return ta(Wi,e)}function ea(e,t){return Wi===null&&Qi(e),ta(e,t)}function ta(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Gi===null){if(e===null)throw Error(i(308));Gi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gi=Gi.next=t;return n}var na=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ra=t.unstable_scheduleCallback,ia=t.unstable_NormalPriority,aa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oa(){return{controller:new na,data:new Map,refCount:0}}function sa(e){e.refCount--,e.refCount===0&&ra(ia,function(){e.controller.abort()})}var ca=null,la=0,ua=0,da=null;function fa(e,t){if(ca===null){var n=ca=[];la=0,ua=dd(),da={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return la++,t.then(pa,pa),t}function pa(){if(--la===0&&ca!==null){da!==null&&(da.status=`fulfilled`);var e=ca;ca=null,ua=0,da=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ma(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ha=N.S;N.S=function(e,t){eu=De(),typeof t==`object`&&t&&typeof t.then==`function`&&fa(e,t),ha!==null&&ha(e,t)};var ga=oe(null);function _a(){var e=ga.current;return e===null?q.pooledCache:e}function va(e,t){t===null?F(ga,ga.current):F(ga,t.pool)}function ya(){var e=_a();return e===null?null:{parent:aa._currentValue,pool:e}}var ba=Error(i(460)),xa=Error(i(474)),Sa=Error(i(542)),Ca={then:function(){}};function wa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ta(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($t,$t),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e;default:if(typeof t.status==`string`)t.then($t,$t);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e}throw Da=t,ba}}function Ea(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Da=e,ba):e}}var Da=null;function Oa(){if(Da===null)throw Error(i(459));var e=Da;return Da=null,e}function ka(e){if(e===ba||e===Sa)throw Error(i(483))}var Aa=null,ja=0;function Ma(e){var t=ja;return ja+=1,Aa===null&&(Aa=[]),Ta(Aa,e,t)}function Na(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Pa(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Fa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ui(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=mi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&Ea(i)===t.type)?(t=a(t,n.props),Na(t,n),t.return=e,t):(t=fi(n.type,n.key,n.props,null,e.mode,r),Na(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=gi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=pi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=mi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=fi(t.type,t.key,t.props,null,e.mode,n),Na(n,t),n.return=e,n;case v:return t=gi(t,e.mode,n),t.return=e,t;case D:return t=Ea(t),f(e,t,n)}if(M(t)||k(t))return t=pi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ma(t),n);if(t.$$typeof===C)return f(e,ea(e,t),n);Pa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=Ea(n),p(e,t,n,r)}if(M(n)||k(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ma(n),r);if(n.$$typeof===C)return p(e,t,ea(e,n),r);Pa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=Ea(r),m(e,t,n,r,i)}if(M(r)||k(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ma(r),i);if(r.$$typeof===C)return m(e,t,n,ea(t,r),i);Pa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),B&&Oi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return B&&Oi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),B&&Oi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),B&&Oi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return B&&Oi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),B&&Oi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&Ea(l)===r.type){n(e,r.sibling),c=a(r,o.props),Na(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=pi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=fi(o.type,o.key,o.props,null,e.mode,c),Na(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=gi(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=Ea(o),b(e,r,o,c)}if(M(o))return h(e,r,o,c);if(k(o)){if(l=k(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ma(o),c);if(o.$$typeof===C)return b(e,r,ea(e,o),c);Pa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=mi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ja=0;var i=b(e,t,n,r);return Aa=null,i}catch(t){if(t===ba||t===Sa)throw t;var a=ci(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ia=Fa(!0),La=Fa(!1),Ra=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ba(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ai(e),ii(e,null,n),t}return ti(e,r,t,n),ai(e)}function Ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tt(e,n)}}function Wa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ga=!1;function Ka(){if(Ga){var e=da;if(e!==null)throw e}}function qa(e,t,n,r){Ga=!1;var i=e.updateQueue;Ra=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ua&&(Ga=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ra=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ja(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ya(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ja(n[e],t)}var Xa=oe(null),Za=oe(0);function Qa(e,t){e=Ul,F(Za,e),F(Xa,t),Ul=e|t.baseLanes}function $a(){F(Za,Ul),F(Xa,Xa.current)}function eo(){Ul=Za.current,se(Xa),se(Za)}var to=oe(null),no=null;function ro(e){var t=e.alternate;F(co,co.current&1),F(to,e),no===null&&(t===null||Xa.current!==null||t.memoizedState!==null)&&(no=e)}function io(e){F(co,co.current),F(to,e),no===null&&(no=e)}function ao(e){e.tag===22?(F(co,co.current),F(to,e),no===null&&(no=e)):oo(e)}function oo(){F(co,co.current),F(to,to.current)}function so(e){se(to),no===e&&(no=null),se(co)}var co=oe(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uo=0,H=null,U=null,fo=null,po=!1,mo=!1,ho=!1,go=0,_o=0,vo=null,yo=0;function bo(){throw Error(i(321))}function xo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Sr(e[n],t[n]))return!1;return!0}function So(e,t,n,r,i,a){return uo=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?Rs:zs,ho=!1,a=n(r,i),ho=!1,mo&&(a=wo(t,n,r,i)),Co(e),a}function Co(e){N.H=Ls;var t=U!==null&&U.next!==null;if(uo=0,fo=U=H=null,po=!1,_o=0,vo=null,t)throw Error(i(300));e===null||nc||(e=e.dependencies,e!==null&&Zi(e)&&(nc=!0))}function wo(e,t,n,r){H=e;var a=0;do{if(mo&&(vo=null),_o=0,mo=!1,25<=a)throw Error(i(301));if(a+=1,fo=U=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}N.H=Bs,o=t(n,r)}while(mo);return o}function To(){var e=N.H,t=e.useState()[0];return t=typeof t.then==`function`?jo(t):t,e=e.useState()[0],(U===null?null:U.memoizedState)!==e&&(H.flags|=1024),t}function Eo(){var e=go!==0;return go=0,e}function Do(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Oo(e){if(po){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}po=!1}uo=0,fo=U=H=null,mo=!1,_o=go=0,vo=null}function ko(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fo===null?H.memoizedState=fo=e:fo=fo.next=e,fo}function W(){if(U===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=U.next;var t=fo===null?H.memoizedState:fo.next;if(t!==null)fo=t,U=e;else{if(e===null)throw H.alternate===null?Error(i(467)):Error(i(310));U=e,e={memoizedState:U.memoizedState,baseState:U.baseState,baseQueue:U.baseQueue,queue:U.queue,next:null},fo===null?H.memoizedState=fo=e:fo=fo.next=e}return fo}function Ao(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(e){var t=_o;return _o+=1,vo===null&&(vo=[]),e=Ta(vo,e,t),t=H,(fo===null?t.memoizedState:fo.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?Rs:zs),e}function Mo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return jo(e);if(e.$$typeof===C)return $i(e)}throw Error(i(438,String(e)))}function No(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=H.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Ao(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function Po(e,t){return typeof t==`function`?t(e):t}function Fo(e){return Io(W(),U,e)}function Io(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(uo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ua&&(d=!0);else if((uo&p)===p){u=u.next,p===ua&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,H.lanes|=p,Gl|=p;f=u.action,ho&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,H.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Sr(o,e.memoizedState)&&(nc=!0,d&&(n=da,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Lo(e){var t=W(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Sr(o,t.memoizedState)||(nc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ro(e,t,n){var r=H,a=W(),o=B;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Sr((U||a).memoizedState,n);if(s&&(a.memoizedState=n,nc=!0),a=a.queue,ls(Vo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||fo!==null&&fo.memoizedState.tag&1){if(r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||uo&127||zo(r,t,n)}return n}function zo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=Ao(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bo(e,t,n,r){t.value=n,t.getSnapshot=r,Ho(t)&&Uo(e)}function Vo(e,t,n){return n(function(){Ho(t)&&Uo(e)})}function Ho(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Sr(e,n)}catch{return!0}}function Uo(e){var t=ri(e,2);t!==null&&hu(t,e,2)}function Wo(e){var t=ko();if(typeof e==`function`){var n=e;if(e=n(),ho){Re(!0);try{n()}finally{Re(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:e},t}function Go(e,t,n,r){return e.baseState=n,Io(e,U,typeof r==`function`?r:Po)}function Ko(e,t,n,r,a){if(Ps(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};N.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=N.T,o={};N.T=o;try{var s=n(i,r),c=N.S;c!==null&&c(o,s),Jo(e,t,s)}catch(n){Xo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),N.T=a}}else try{a=n(i,r),Jo(e,t,a)}catch(n){Xo(e,t,n)}}function Jo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Yo(e,t,n)},function(n){return Xo(e,t,n)}):Yo(e,t,n)}function Yo(e,t,n){t.status=`fulfilled`,t.value=n,Zo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qo(e,n)))}function Xo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Zo(t),t=t.next;while(t!==r)}e.action=null}function Zo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qo(e,t){return t}function $o(e,t){if(B){var n=q.formState;if(n!==null){a:{var r=H;if(B){if(z){b:{for(var i=z,a=Pi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){z=cf(i.nextSibling),r=i.data===`F!`;break a}}Ii(r)}r=!1}r&&(t=n[0])}}return n=ko(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},n.queue=r,n=js.bind(null,H,r),r.dispatch=n,r=Wo(!1),a=Ns.bind(null,H,!1,r.queue),r=ko(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ko.bind(null,H,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function es(e){return ts(W(),U,e)}function ts(e,t,n){if(t=Io(e,t,Qo)[0],e=Fo(Po)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=jo(t)}catch(e){throw e===ba?Sa:e}else r=t;t=W();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(H.flags|=2048,is(9,{destroy:void 0},ns.bind(null,i,n),null)),[r,a,e]}function ns(e,t){e.action=t}function rs(e){var t=W(),n=U;if(n!==null)return ts(t,n,e);W(),t=t.memoizedState,n=W();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function is(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=H.updateQueue,t===null&&(t=Ao(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function as(){return W().memoizedState}function os(e,t,n,r){var i=ko();H.flags|=e,i.memoizedState=is(1|t,{destroy:void 0},n,r===void 0?null:r)}function ss(e,t,n,r){var i=W();r=r===void 0?null:r;var a=i.memoizedState.inst;U!==null&&r!==null&&xo(r,U.memoizedState.deps)?i.memoizedState=is(t,a,n,r):(H.flags|=e,i.memoizedState=is(1|t,a,n,r))}function cs(e,t){os(8390656,8,e,t)}function ls(e,t){ss(2048,8,e,t)}function us(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=Ao(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ds(e){var t=W().memoizedState;return us({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function fs(e,t){return ss(4,2,e,t)}function ps(e,t){return ss(4,4,e,t)}function ms(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hs(e,t,n){n=n==null?null:n.concat([e]),ss(4,4,ms.bind(null,t,e),n)}function gs(){}function _s(e,t){var n=W();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&xo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vs(e,t){var n=W();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&xo(t,r[1]))return r[0];if(r=e(),ho){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r}function ys(e,t,n){return n===void 0||uo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),H.lanes|=e,Gl|=e,n)}function bs(e,t,n,r){return Sr(n,t)?n:Xa.current===null?!(uo&42)||uo&1073741824&&!(Y&261930)?(nc=!0,e.memoizedState=n):(e=mu(),H.lanes|=e,Gl|=e,t):(e=ys(e,n,r),Sr(e,t)||(nc=!0),e)}function xs(e,t,n,r,i){var a=P.p;P.p=a!==0&&8>a?a:8;var o=N.T,s={};N.T=s,Ns(e,!1,t,n);try{var c=i(),l=N.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ms(e,t,ma(c,r),pu(e)):Ms(e,t,r,pu(e))}catch(n){Ms(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{P.p=a,o!==null&&s.types!==null&&(o.types=s.types),N.T=o}}function Ss(){}function Cs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ws(e).queue;xs(e,a,t,re,n===null?Ss:function(){return Ts(e),n(r)})}function ws(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:re},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ts(e){var t=ws(e);t.next===null&&(t=e.alternate.memoizedState),Ms(e,t.next.queue,{},pu())}function Es(){return $i(Qf)}function Ds(){return W().memoizedState}function Os(){return W().memoizedState}function ks(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Va(n);var r=Ha(t,e,n);r!==null&&(hu(r,t,n),Ua(r,t,n)),t={cache:oa()},e.payload=t;return}t=t.return}}function As(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ps(e)?Fs(t,n):(n=ni(e,t,n,r),n!==null&&(hu(n,e,r),Is(n,t,r)))}function js(e,t,n){Ms(e,t,n,pu())}function Ms(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Fs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Sr(s,o))return ti(e,t,i,0),q===null&&ei(),!1}catch{}if(n=ni(e,t,i,r),n!==null)return hu(n,e,r),Is(n,t,r),!0}return!1}function Ns(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ps(e)){if(t)throw Error(i(479))}else t=ni(e,n,r,2),t!==null&&hu(t,e,2)}function Ps(e){var t=e.alternate;return e===H||t!==null&&t===H}function Fs(e,t){mo=po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Is(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tt(e,n)}}var Ls={readContext:$i,use:Mo,useCallback:bo,useContext:bo,useEffect:bo,useImperativeHandle:bo,useLayoutEffect:bo,useInsertionEffect:bo,useMemo:bo,useReducer:bo,useRef:bo,useState:bo,useDebugValue:bo,useDeferredValue:bo,useTransition:bo,useSyncExternalStore:bo,useId:bo,useHostTransitionStatus:bo,useFormState:bo,useActionState:bo,useOptimistic:bo,useMemoCache:bo,useCacheRefresh:bo};Ls.useEffectEvent=bo;var Rs={readContext:$i,use:Mo,useCallback:function(e,t){return ko().memoizedState=[e,t===void 0?null:t],e},useContext:$i,useEffect:cs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),os(4194308,4,ms.bind(null,t,e),n)},useLayoutEffect:function(e,t){return os(4194308,4,e,t)},useInsertionEffect:function(e,t){os(4,2,e,t)},useMemo:function(e,t){var n=ko();t=t===void 0?null:t;var r=e();if(ho){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ko();if(n!==void 0){var i=n(t);if(ho){Re(!0);try{n(t)}finally{Re(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=As.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=ko();return e={current:e},t.memoizedState=e},useState:function(e){e=Wo(e);var t=e.queue,n=js.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:gs,useDeferredValue:function(e,t){return ys(ko(),e,t)},useTransition:function(){var e=Wo(!1);return e=xs.bind(null,H,e.queue,!0,!1),ko().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=H,a=ko();if(B){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||zo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,cs(Vo.bind(null,r,o,e),[e]),r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,o,n,t),null),n},useId:function(){var e=ko(),t=q.identifierPrefix;if(B){var n=Di,r=Ei;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=go++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=yo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Es,useFormState:$o,useActionState:$o,useOptimistic:function(e){var t=ko();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ns.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:No,useCacheRefresh:function(){return ko().memoizedState=ks.bind(null,H)},useEffectEvent:function(e){var t=ko(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},zs={readContext:$i,use:Mo,useCallback:_s,useContext:$i,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Fo,useRef:as,useState:function(){return Fo(Po)},useDebugValue:gs,useDeferredValue:function(e,t){return bs(W(),U.memoizedState,e,t)},useTransition:function(){var e=Fo(Po)[0],t=W().memoizedState;return[typeof e==`boolean`?e:jo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:es,useActionState:es,useOptimistic:function(e,t){return Go(W(),U,e,t)},useMemoCache:No,useCacheRefresh:Os};zs.useEffectEvent=ds;var Bs={readContext:$i,use:Mo,useCallback:_s,useContext:$i,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Lo,useRef:as,useState:function(){return Lo(Po)},useDebugValue:gs,useDeferredValue:function(e,t){var n=W();return U===null?ys(n,e,t):bs(n,U.memoizedState,e,t)},useTransition:function(){var e=Lo(Po)[0],t=W().memoizedState;return[typeof e==`boolean`?e:jo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){var n=W();return U===null?(n.baseState=e,[e,n.queue.dispatch]):Go(n,U,e,t)},useMemoCache:No,useCacheRefresh:Os};Bs.useEffectEvent=ds;function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Va(r);i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(hu(t,e,r),Ua(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Va(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(hu(t,e,r),Ua(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Va(n);r.tag=2,t!=null&&(r.callback=t),t=Ha(e,r,n),t!==null&&(hu(t,e,n),Ua(t,e,n))}};function Us(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,a):!0}function Ws(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function Gs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ks(e){Xr(e)}function qs(e){console.error(e)}function Js(e){Xr(e)}function Ys(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){return n=Va(n),n.tag=3,n.payload={element:null},n.callback=function(){Ys(e,t)},n}function Qs(e){return e=Va(e),e.tag=3,e}function $s(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Xs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Xs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ec(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Xi(t,n,a,!0),n=to.current,n!==null){switch(n.tag){case 31:case 13:return no===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(B)return t=to.current,t===null?(r!==Fi&&(t=Error(i(423),{cause:r}),Hi(vi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=vi(r,n),a=Zs(e.stateNode,r,a),Wa(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Fi&&(e=Error(i(422),{cause:r}),Hi(vi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=vi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=vi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Zs(n.stateNode,r,e),Wa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Qs(a),$s(a,e,n,r),Wa(n,a),!1}n=n.return}while(n!==null);return!1}var tc=Error(i(461)),nc=!1;function rc(e,t,n,r){t.child=e===null?La(t,null,n,r):Ia(t,e.child,n,r)}function ic(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Qi(t),r=So(e,t,n,o,a,i),s=Eo(),e!==null&&!nc?(Do(e,t,i),Oc(e,t,i)):(B&&s&&Ai(t),t.flags|=1,rc(e,t,r,i),t.child)}function ac(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!li(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,oc(e,t,a,r,i)):(e=fi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!kc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Cr:n,n(o,r)&&e.ref===t.ref)return Oc(e,t,i)}return t.flags|=1,e=ui(a,r),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Cr(a,r)&&e.ref===t.ref)if(nc=!1,t.pendingProps=r=a,kc(e,i))e.flags&131072&&(nc=!0);else return t.lanes=e.lanes,Oc(e,t,i)}return mc(e,t,n,r,i)}function sc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return lc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&va(t,a===null?null:a.cachePool),a===null?$a():Qa(t,a),ao(t);else return r=t.lanes=536870912,lc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&va(t,null),$a(),oo(t)):(va(t,a.cachePool),Qa(t,a),oo(t),t.memoizedState=null);return rc(e,t,i,n),t.child}function cc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function lc(e,t,n,r,i){var a=_a();return a=a===null?null:{parent:aa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&va(t,null),$a(),ao(t),e!==null&&Xi(e,t,r,!0),t.childLanes=i,null}function uc(e,t){return t=Cc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function dc(e,t,n){return Ia(t,e.child,null,n),e=uc(t,t.pendingProps),e.flags|=2,so(t),t.memoizedState=null,e}function fc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(B){if(r.mode===`hidden`)return e=uc(t,r),t.lanes=536870912,cc(null,e);if(io(t),(e=z)?(e=rf(e,Pi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ti===null?null:{id:Ei,overflow:Di},retryLane:536870912,hydrationErrors:null},n=hi(e),n.return=t,t.child=n,Ni=t,z=null)):e=null,e===null)throw Ii(t);return t.lanes=536870912,null}return uc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(io(t),a)if(t.flags&256)t.flags&=-257,t=dc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(nc||Xi(e,t,n,!1),a=(n&e.childLanes)!==0,nc||a){if(r=q,r!==null&&(s=nt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ri(e,s),hu(r,e,s),tc;Du(),t=dc(e,t,n)}else e=o.treeContext,z=cf(s.nextSibling),Ni=t,B=!0,V=null,Pi=!1,e!==null&&Mi(t,e),t=uc(t,r),t.flags|=4096;return t}return e=ui(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function pc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function mc(e,t,n,r,i){return Qi(t),n=So(e,t,n,r,void 0,i),r=Eo(),e!==null&&!nc?(Do(e,t,i),Oc(e,t,i)):(B&&r&&Ai(t),t.flags|=1,rc(e,t,n,i),t.child)}function hc(e,t,n,r,i,a){return Qi(t),t.updateQueue=null,n=wo(t,r,n,i),Co(e),r=Eo(),e!==null&&!nc?(Do(e,t,a),Oc(e,t,a)):(B&&r&&Ai(t),t.flags|=1,rc(e,t,n,a),t.child)}function gc(e,t,n,r,i){if(Qi(t),t.stateNode===null){var a=oi,o=n.contextType;typeof o==`object`&&o&&(a=$i(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Hs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},za(t),o=n.contextType,a.context=typeof o==`object`&&o?$i(o):oi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Vs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Hs.enqueueReplaceState(a,a.state,null),qa(t,r,a,i),Ka(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Gs(n,s);a.props=c;var l=a.context,u=n.contextType;o=oi,typeof u==`object`&&u&&(o=$i(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ws(t,a,r,o),Ra=!1;var f=t.memoizedState;a.state=f,qa(t,r,a,i),Ka(),l=t.memoizedState,s||f!==l||Ra?(typeof d==`function`&&(Vs(t,n,d,r),l=t.memoizedState),(c=Ra||Us(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ba(e,t),o=t.memoizedProps,u=Gs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=oi,typeof l==`object`&&l&&(c=$i(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ws(t,a,r,c),Ra=!1,f=t.memoizedState,a.state=f,qa(t,r,a,i),Ka();var p=t.memoizedState;o!==d||f!==p||Ra||e!==null&&e.dependencies!==null&&Zi(e.dependencies)?(typeof s==`function`&&(Vs(t,n,s,r),p=t.memoizedState),(u=Ra||Us(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Zi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,pc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ia(t,e.child,null,i),t.child=Ia(t,null,n,i)):rc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Oc(e,t,i),e}function _c(e,t,n,r){return Bi(),t.flags|=256,rc(e,t,n,r),t.child}var vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yc(e){return{baseLanes:e,cachePool:ya()}}function bc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function xc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(co.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(B){if(a?ro(t):oo(t),(e=z)?(e=rf(e,Pi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ti===null?null:{id:Ei,overflow:Di},retryLane:536870912,hydrationErrors:null},n=hi(e),n.return=t,t.child=n,Ni=t,z=null)):e=null,e===null)throw Ii(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(oo(t),a=t.mode,c=Cc({mode:`hidden`,children:c},a),r=pi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(null,r)):(ro(t),Sc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(ro(t),t.flags&=-257,t=wc(e,t,n)):t.memoizedState===null?(oo(t),c=r.fallback,a=t.mode,r=Cc({mode:`visible`,children:r.children},a),c=pi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ia(t,e.child,null,n),r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,t=cc(null,r)):(oo(t),t.child=e.child,t.flags|=128,t=null);else if(ro(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Hi({value:r,source:null,stack:null}),t=wc(e,t,n)}else if(nc||Xi(e,t,n,!1),s=(n&e.childLanes)!==0,nc||s){if(s=q,s!==null&&(r=nt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ri(e,r),hu(s,e,r),tc;af(c)||Du(),t=wc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,z=cf(c.nextSibling),Ni=t,B=!0,V=null,Pi=!1,e!==null&&Mi(t,e),t=Sc(t,r.children),t.flags|=4096);return t}return a?(oo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ui(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=pi(c,a,n,null),c.flags|=2):c=ui(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,cc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=yc(n):(a=c.cachePool,a===null?a=ya():(l=aa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(e.child,r)):(ro(t),n=e.child,e=n.sibling,n=ui(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Sc(e,t){return t=Cc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Cc(e,t){return e=ci(22,e,null,t),e.lanes=0,e}function wc(e,t,n){return Ia(t,e.child,null,n),e=Sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ji(e.return,t,n)}function Ec(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Dc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=co.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,F(co,o),rc(e,t,r,n),r=B?Si:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,n,t);else if(e.tag===19)Tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ec(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ec(t,!0,n,null,a,r);break;case`together`:Ec(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Oc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Xi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ui(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ui(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Zi(e))):!0}function Ac(e,t,n){switch(t.tag){case 3:de(t,t.stateNode.containerInfo),Ki(t,aa,e.memoizedState.cache),Bi();break;case 27:case 5:pe(t);break;case 4:de(t,t.stateNode.containerInfo);break;case 10:Ki(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,io(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ro(t),e=Oc(e,t,n),e===null?null:e.sibling):xc(e,t,n):(ro(t),t.flags|=128,null);ro(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Xi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Dc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(co,co.current),r)break;return null;case 22:return t.lanes=0,sc(e,t,n,t.pendingProps);case 24:Ki(t,aa,e.memoizedState.cache)}return Oc(e,t,n)}function jc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)nc=!0;else{if(!kc(e,n)&&!(t.flags&128))return nc=!1,Ac(e,t,n);nc=!!(e.flags&131072)}else nc=!1,B&&t.flags&1048576&&ki(t,Si,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ea(t.elementType),t.type=e,typeof e==`function`)li(e)?(r=Gs(e,r),t.tag=1,t=gc(null,t,e,r,n)):(t.tag=0,t=mc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ic(null,t,e,r,n);break a}else if(a===E){t.tag=14,t=ac(null,t,e,r,n);break a}}throw t=j(e)||e,Error(i(306,t,``))}}return t;case 0:return mc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Gs(r,t.pendingProps),gc(e,t,r,a,n);case 3:a:{if(de(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ba(e,t),qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ki(t,aa,r),r!==o.cache&&Yi(t,[aa],n,!0),Ka(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=_c(e,t,r,n);break a}else if(r!==a){a=vi(Error(i(424)),t),Hi(a),t=_c(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(z=cf(e.firstChild),Ni=t,B=!0,V=null,Pi=!0,n=La(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Bi(),r===a){t=Oc(e,t,n);break a}rc(e,t,r,n)}t=t.child}return t;case 26:return pc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:B||(n=t.type,e=t.pendingProps,r=Bd(le.current).createElement(n),r[ct]=t,r[lt]=e,Pd(r,n,e),xt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pe(t),e===null&&B&&(r=t.stateNode=ff(t.type,t.pendingProps,le.current),Ni=t,Pi=!0,a=z,Zd(t.type)?(lf=a,z=cf(r.firstChild)):z=a),rc(e,t,t.pendingProps.children,n),pc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&B&&((a=r=z)&&(r=tf(r,t.type,t.pendingProps,Pi),r===null?a=!1:(t.stateNode=r,Ni=t,z=cf(r.firstChild),Pi=!1,a=!0)),a||Ii(t)),pe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=So(e,t,To,null,null,n),Qf._currentValue=a),pc(e,t),rc(e,t,r,n),t.child;case 6:return e===null&&B&&((e=n=z)&&(n=nf(n,t.pendingProps,Pi),n===null?e=!1:(t.stateNode=n,Ni=t,z=null,e=!0)),e||Ii(t)),null;case 13:return xc(e,t,n);case 4:return de(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ia(t,null,r,n):rc(e,t,r,n),t.child;case 11:return ic(e,t,t.type,t.pendingProps,n);case 7:return rc(e,t,t.pendingProps,n),t.child;case 8:return rc(e,t,t.pendingProps.children,n),t.child;case 12:return rc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ki(t,t.type,r.value),rc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Qi(t),a=$i(a),r=r(a),t.flags|=1,rc(e,t,r,n),t.child;case 14:return ac(e,t,t.type,t.pendingProps,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 19:return Dc(e,t,n);case 31:return fc(e,t,n);case 22:return sc(e,t,n,t.pendingProps);case 24:return Qi(t),r=$i(aa),e===null?(a=_a(),a===null&&(a=q,o=oa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},za(t),Ki(t,aa,a)):((e.lanes&n)!==0&&(Ba(e,t),qa(t,null,null,n),Ka()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ki(t,aa,r),r!==a.cache&&Yi(t,[aa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ki(t,aa,r))),rc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Mc(e){e.flags|=4}function Nc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Da=Ca,xa}else e.flags&=-16777217}function Pc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Da=Ca,xa}function Fc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Xe(),e.lanes|=t,Yl|=t)}function Ic(e,t){if(!B)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Lc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(ji(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lc(t),null;case 1:return Lc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),qi(aa),fe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zi(t)?Mc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vi())),Lc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Mc(t),o===null?(Lc(t),Nc(t,a,null,r,n)):(Lc(t),Pc(t,o))):o?o===e.memoizedState?(Lc(t),t.flags&=-16777217):(Mc(t),Lc(t),Pc(t,o)):(e=e.memoizedProps,e!==r&&Mc(t),Lc(t),Nc(t,a,e,r,n)),null;case 27:if(me(t),n=le.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Lc(t),null}e=ce.current,zi(t)?Li(t,e):(e=ff(a,r,n),t.stateNode=e,Mc(t))}return Lc(t),null;case 5:if(me(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Lc(t),null}if(o=ce.current,zi(t))Li(t,o);else{var s=Bd(le.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ct]=t,o[lt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Mc(t)}}return Lc(t),Nc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=le.current,zi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ni,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ct]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ii(t,!0)}else e=Bd(e).createTextNode(r),e[ct]=t,t.stateNode=e}return Lc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=zi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ct]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Lc(t),e=!1}else n=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(so(t),t):(so(t),null);if(t.flags&128)throw Error(i(558))}return Lc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ct]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Lc(t),a=!1}else a=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(so(t),t):(so(t),null)}return so(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Fc(t,t.updateQueue),Lc(t),null);case 4:return fe(),e===null&&Sd(t.stateNode.containerInfo),Lc(t),null;case 10:return qi(t.type),Lc(t),null;case 19:if(se(co),r=t.memoizedState,r===null)return Lc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Ic(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=lo(e),o!==null){for(t.flags|=128,Ic(r,!1),e=o.updateQueue,t.updateQueue=e,Fc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)di(n,e),n=n.sibling;return F(co,co.current&1|2),B&&Oi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&De()>tu&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304)}else{if(!a)if(e=lo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Fc(t,e),Ic(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!B)return Lc(t),null}else 2*De()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Lc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=De(),e.sibling=null,n=co.current,F(co,a?n&1|2:n&1),B&&Oi(t,r.treeForkCount),e);case 22:case 23:return so(t),eo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Lc(t),t.subtreeFlags&6&&(t.flags|=8192)):Lc(t),n=t.updateQueue,n!==null&&Fc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&se(ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qi(aa),Lc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function zc(e,t){switch(ji(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qi(aa),fe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return me(t),null;case 31:if(t.memoizedState!==null){if(so(t),t.alternate===null)throw Error(i(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(so(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(co),null;case 4:return fe(),null;case 10:return qi(t.type),null;case 22:case 23:return so(t),eo(),e!==null&&se(ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qi(aa),null;case 25:return null;default:return null}}function Bc(e,t){switch(ji(t),t.tag){case 3:qi(aa),fe();break;case 26:case 27:case 5:me(t);break;case 4:fe();break;case 31:t.memoizedState!==null&&so(t);break;case 13:so(t);break;case 19:se(co);break;case 10:qi(t.type);break;case 22:case 23:so(t),eo(),e!==null&&se(ga);break;case 24:qi(aa)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ya(t,n)}catch(t){Z(e,e.return,t)}}}function Wc(e,t,n){n.props=Gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[lt]=t}catch(t){Z(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$t));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ct]=e,t[lt]=n}catch(t){Z(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,Rd=sp,e=Dr(e),Or(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Gs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Vc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ya(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:bl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&fl(e,n);break;case 13:bl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),el=i,tl=a}break;case 30:break;default:bl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var cl=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Le&&typeof Le.onCommitFiberUnmount==`function`)try{Le.onCommitFiberUnmount(Ie,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=cl,i=ll;Zd(n.type)&&(cl=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),cl=r,ll=i;break;case 5:tl||Kc(n,t);case 6:if(r=cl,i=ll,cl=null,ul(e,t,n),cl=r,ll=i,cl!==null)if(ll)try{(cl.nodeType===9?cl.body:cl.nodeName===`HTML`?cl.ownerDocument.body:cl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{cl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:cl!==null&&(ll?(e=cl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(cl,n.stateNode));break;case 4:r=cl,i=ll,cl=n.stateNode.containerInfo,ll=!0,ul(e,t,n),cl=r,ll=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ul(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ul(e,t,n),tl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function G(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=G(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){cl=c.stateNode,ll=!1;break a}break;case 5:cl=c.stateNode,ll=!1;break a;case 3:case 4:cl=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(cl===null)throw Error(i(160));dl(o,s,a),cl=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[ht]||o[ct]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ct]=e,xt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ct]=e,xt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){a=e.stateNode;try{Gt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Jc(e,a,n===null?a:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}nl&&(nl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=De()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||a,tl=d||l,hl(t,e),tl=d,el=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||el||tl||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Qc(e,Xc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Gt(o,``),n.flags&=-33),Qc(e,Xc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Zc(e,Xc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),xl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Kc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Vc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ja(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Gc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&sa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Vc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:sa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Ll={getCacheForType:function(e){var t=$i(aa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $i(aa).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:N.T===null?at():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||B){var e=We;We<<=1,!(We&3932160)&&(We=262144),Jl=e}else Jl=536870912;return e=to.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),Qe(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Je(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-De(),10<a)){if(yu(r,t,Jl,!Bl),qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},jl(t,a,d);var m=(a&62914560)===a?$l-De():(a&4194048)===a?eu-De():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Sr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ze(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&et(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Gi=Wi=null,Oo(e),Aa=null,ja=0,e=J;for(;e!==null;)Bc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=ui(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=Je(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-ze(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ei(),n}function Cu(e,t){H=null,N.H=Ls,t===ba||t===Sa?(t=Oa(),X=3):t===xa?(t=Oa(),X=4):X=t===tc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Ys(e,vi(t,e.current)))}function wu(){var e=to.current;return e===null?!0:(Y&4194048)===Y?no===null:(Y&62914560)===Y||Y&536870912?e===no:!1}function Tu(){var e=N.H;return N.H=Ls,e===null?Ls:e}function Eu(){var e=N.A;return N.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&to.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:to.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Gi=Wi=null,K=r,N.H=i,N.A=a,J===null&&(q=null,Y=0,ei()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=De()+500,Su(e,t)):Vl=Je(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(wa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:wa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Gi=Wi=null,N.H=r,N.A=a,K=n,J===null?(q=null,Y=0,ei(),Wl):0}function ju(){for(;J!==null&&!Te();)Mu(J)}function Mu(e){var t=jc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=hc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=hc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Oo(t);default:Bc(n,t),t=J=di(t,Ul),t=jc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Gi=Wi=null,Oo(t),Aa=null,ja=0;var i=t.return;try{if(ec(e,i,t,n,Y)){Wl=1,Ys(e,vi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Ys(e,vi(n,e.current)),J=null;return}t.flags&32768?(B||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=to.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Rc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=$r,$e(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(je,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=N.T,N.T=null,a=P.p,P.p=2,s=K,K|=4;try{al(e,t,n)}finally{K=s,P.p=a,N.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=N.T,N.T=null;var r=P.p;P.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Dr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Er(s.ownerDocument.documentElement,s)){if(c!==null&&Or(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Tr(s,h),v=Tr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,P.p=r,N.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=N.T,N.T=null;var r=P.p;P.p=2;var i=K;K|=4;try{ol(e,t.alternate,t)}finally{K=i,P.p=r,N.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ee();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),it(n),t=t.stateNode,Le&&typeof Le.onCommitFiberRoot==`function`)try{Le.onCommitFiberRoot(Ie,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=N.T,i=P.p,P.p=2,N.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{N.T=t,P.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=it(su),r=N.T,a=P.p;try{P.p=32>n?32:n,N.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Le&&typeof Le.onPostCommitFiberRoot==`function`)try{Le.onPostCommitFiberRoot(Ie,o)}catch{}return!0}finally{P.p=a,N.T=r,Vu(e,t)}}function Wu(e,t,n){t=vi(n,t),t=Zs(e.stateNode,t,2),e=Ha(e,t,2),e!==null&&(Qe(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=vi(n,e),n=Qs(2),r=Ha(t,n,2),r!==null&&($s(n,r,t,e),Qe(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>De()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Xe()),e=ri(e,t),e!==null&&(Qe(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ce(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ze(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=qe(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Je(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=De(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ze(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ye(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&we(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Je(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&we(r),it(n)){case 2:case 8:n=Ae;break;case 32:n=je;break;case 268435456:n=Ne;break;default:n=je}return r=cd.bind(null,e),n=Ce(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&we(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=qe(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,De()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?Ce(ke,ad):od()})}function dd(){if(nd===0){var e=ua;e===0&&(e=Ue,Ue<<=1,!(Ue&261888)&&(Ue=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Qt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[lt]||null).action),o=r.submitter;o&&(t=(t=o[lt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new xn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Cs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Cs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Jr.length;hd++){var gd=Jr[hd];Yr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Yr(Br,`onAnimationEnd`),Yr(Vr,`onAnimationIteration`),Yr(Hr,`onAnimationStart`),Yr(`dblclick`,`onDoubleClick`),Yr(`focusin`,`onFocus`),Yr(`focusout`,`onBlur`),Yr(Ur,`onTransitionRun`),Yr(Wr,`onTransitionStart`),Yr(Gr,`onTransitionCancel`),Yr(Kr,`onTransitionEnd`),Tt(`onMouseEnter`,[`mouseout`,`mouseover`]),Tt(`onMouseLeave`,[`mouseout`,`mouseover`]),Tt(`onPointerEnter`,[`pointerout`,`pointerover`]),Tt(`onPointerLeave`,[`pointerout`,`pointerover`]),wt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),wt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),wt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),wt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),wt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),wt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Xr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Xr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[dt];n===void 0&&(n=t[dt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,St.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!un||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=_t(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}sn(function(){var r=a,i=tn(n),s=[];a:{var c=qr.get(e);if(c!==void 0){var l=xn,u=e;switch(e){case`keypress`:if(gn(n)===0)break a;case`keydown`:case`keyup`:l=zn;break;case`focusin`:u=`focus`,l=An;break;case`focusout`:u=`blur`,l=An;break;case`beforeblur`:case`afterblur`:l=An;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=On;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=kn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Vn;break;case Br:case Vr:case Hr:l=jn;break;case Kr:l=Hn;break;case`scroll`:case`scrollend`:l=Cn;break;case`wheel`:l=Un;break;case`copy`:case`cut`:case`paste`:l=Mn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Bn;break;case`toggle`:case`beforetoggle`:l=Wn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=cn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==en&&(u=n.relatedTarget||n.fromElement)&&(_t(u)||u[ut]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?_t(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=On,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Bn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:yt(l),h=u==null?c:yt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,_t(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?yt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=ur;else if(ir(c))if(dr)v=br;else{v=vr;var y=_r}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Yt(r.elementType)&&(v=ur):v=yr;if(v&&=v(e,r)){ar(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Vt(c,`number`,c.value)}switch(y=r?yt(r):window,e){case`focusin`:(ir(y)||y.contentEditable===`true`)&&(Ar=y,jr=r,Mr=null);break;case`focusout`:Mr=jr=Ar=null;break;case`mousedown`:Nr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Nr=!1,Pr(s,n,i);break;case`selectionchange`:if(kr)break;case`keydown`:case`keyup`:Pr(s,n,i)}var b;if(Kn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else er?Qn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Yn&&n.locale!==`ko`&&(er||x!==`onCompositionStart`?x===`onCompositionEnd`&&er&&(b=hn()):(fn=i,pn=`value`in fn?fn.value:fn.textContent,er=!0)),y=Ed(r,x),0<y.length&&(x=new Nn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=$n(n),b!==null&&(x.data=b)))),(b=Jn?tr(e,n):nr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Nn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=cn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=cn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=cn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=cn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Gt(e,``+r);break;case`className`:jt(e,`class`,r);break;case`tabIndex`:jt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:jt(e,n,r);break;case`style`:Jt(e,r,o);break;case`data`:if(t!==`object`){jt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Qt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),At(e,`popover`,r);break;case`xlinkActuate`:L(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:L(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:L(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:L(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:L(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:L(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:L(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:L(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:L(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:At(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Xt.get(n)||n,At(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Jt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Gt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ct.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[lt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):At(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Bt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ht(e,!!r,n,!0):Ht(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Wt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Yt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}zt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ht(e,!!n,n?[]:``,!1):Ht(e,!!n,t,!0)):Ht(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Ut(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Yt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[ht]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),gt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[ht])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);gt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=P.d;P.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=vt(e);t!==null&&t.tag===5&&t.type===`form`?Ts(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Rt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),xt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Rt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Rt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Rt(n.imageSizes)+`"]`)):i+=`[href="`+Rt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),xt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Rt(r)+`"][href="`+Rt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),xt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=bt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);xt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=bt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),xt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=bt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),xt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=le.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=bt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=bt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=bt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Rt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),xt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Rt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Rt(n.href)+`"]`);if(r)return t.instance=r,xt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),xt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,xt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),xt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,xt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),xt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[ht]||a[ct]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,xt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),xt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ci(3,null,null,t),e.current=a,a.stateNode=e,t=oa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},za(a),e}function tp(e){return e?(e=oi,e):oi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Va(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ha(e,r,t),n!==null&&(hu(n,e,t),Ua(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ri(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=rt(t);var n=ri(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=N.T;N.T=null;var a=P.p;try{P.p=2,up(e,t,n,r)}finally{P.p=a,N.T=i}}function lp(e,t,n,r){var i=N.T;N.T=null;var a=P.p;try{P.p=8,up(e,t,n,r)}finally{P.p=a,N.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=vt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ke(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ze(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=De()+500,id(0,!1))}}break;case 31:case 13:s=ri(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=tn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=_t(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Oe()){case ke:return 2;case Ae:return 8;case je:case Me:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=vt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=_t(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ot(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ot(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);en=r,n.target.dispatchEvent(r),en=null}else return t=vt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=vt(n);a!==null&&(e.splice(t,3),t-=3,Cs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[lt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[lt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ut]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=at();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));P.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:N,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ie=zp.inject(Rp),Le=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ks,s=qs,c=Js;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ut]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=`{
  "nodes": {
    "door_235p9ofj5w88jxbh": {
      "id": "door_235p9ofj5w88jxbh",
      "name": "Door 3",
      "side": "front",
      "type": "door",
      "width": 1.07,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_ey9jixguhdj5n47n",
      "visible": true,
      "doorType": "hinged",
      "metadata": {},
      "panicBar": false,
      "parentId": "wall_ey9jixguhdj5n47n",
      "position": [
        1.1,
        1.05,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "leafCount": 1,
      "threshold": false,
      "archHeight": 0.45,
      "doorCloser": false,
      "frameDepth": 0.07,
      "handleSide": "right",
      "hingesSide": "left",
      "swingAngle": 1.5707963267948966,
      "trackStyle": "none",
      "openingKind": "door",
      "cornerRadius": 0.15,
      "doorCategory": "interior",
      "handleHeight": 1.05,
      "openingShape": "rectangle",
      "contentPadding": [
        0.04,
        0.04
      ],
      "frameThickness": 0.05,
      "operationState": 0,
      "panicBarHeight": 1,
      "slideDirection": "left",
      "swingDirection": "outward",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "thresholdHeight": 0.02,
      "garagePanelCount": 4,
      "openingRadiusMode": "all",
      "openingRevealRadius": 0.025
    },
    "door_39lvain1x33slnkl": {
      "object": "node",
      "id": "door_39lvain1x33slnkl",
      "type": "door",
      "name": "Door 3",
      "parentId": "wall_ovpjmscb9a1b9a2t",
      "visible": true,
      "metadata": {},
      "position": [
        2.0661409378051756,
        1.05,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_ovpjmscb9a1b9a2t",
      "width": 3,
      "height": 2.1,
      "doorCategory": "interior",
      "doorType": "sliding",
      "leafCount": 2,
      "operationState": 0,
      "slideDirection": "left",
      "trackStyle": "visible",
      "garagePanelCount": 4,
      "openingKind": "door",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.45,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "threshold": false,
      "thresholdHeight": 0.02,
      "hingesSide": "right",
      "swingDirection": "outward",
      "swingAngle": 1.5707963267948966,
      "segments": [
        {
          "type": "glass",
          "heightRatio": 0.76,
          "columnRatios": [
            1,
            1
          ],
          "dividerThickness": 0.025,
          "panelDepth": 0.01,
          "panelInset": 0.04
        },
        {
          "type": "panel",
          "heightRatio": 0.24,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.012,
          "panelInset": 0.035
        }
      ],
      "handle": true,
      "handleHeight": 1.05,
      "handleSide": "right",
      "contentPadding": [
        0.03,
        0.04
      ],
      "doorCloser": false,
      "panicBar": false,
      "panicBarHeight": 1
    },
    "door_3g0tkr0awo4n9s4i": {
      "id": "door_3g0tkr0awo4n9s4i",
      "name": "Door 4",
      "side": "front",
      "type": "door",
      "width": 0.9,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_v50ilxj4rwi1d99l",
      "visible": true,
      "doorType": "pocket",
      "metadata": {
        "isNew": true
      },
      "panicBar": false,
      "parentId": "wall_v50ilxj4rwi1d99l",
      "position": [
        3.4384392609477032,
        1.05,
        0
      ],
      "rotation": [
        0,
        6.283185307179586,
        0
      ],
      "segments": [
        {
          "type": "panel",
          "heightRatio": 1,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.02,
          "panelDepth": 0.008,
          "panelInset": 0.025
        }
      ],
      "leafCount": 1,
      "threshold": false,
      "archHeight": 0.45,
      "doorCloser": false,
      "frameDepth": 0.07,
      "handleSide": "right",
      "hingesSide": "right",
      "swingAngle": 1.5707963267948966,
      "trackStyle": "pocket",
      "openingKind": "door",
      "cornerRadius": 0.15,
      "doorCategory": "interior",
      "handleHeight": 1.05,
      "openingShape": "rectangle",
      "contentPadding": [
        0.035,
        0.045
      ],
      "frameThickness": 0.05,
      "operationState": 1,
      "panicBarHeight": 1,
      "slideDirection": "left",
      "swingDirection": "inward",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "thresholdHeight": 0.02,
      "garagePanelCount": 4,
      "openingRadiusMode": "all",
      "openingRevealRadius": 0.025
    },
    "door_3n50o6r56ncgk8zh": {
      "id": "door_3n50o6r56ncgk8zh",
      "name": "Door 4",
      "side": "back",
      "type": "door",
      "width": 0.9,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_x2ycddaw83l4nku0",
      "visible": true,
      "doorType": "hinged",
      "metadata": {},
      "panicBar": false,
      "parentId": "wall_x2ycddaw83l4nku0",
      "position": [
        0.5499999999999998,
        1.05,
        0
      ],
      "rotation": [
        0,
        9.42477796076938,
        0
      ],
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        },
        {
          "type": "panel",
          "heightRatio": 0.6,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "leafCount": 1,
      "threshold": true,
      "archHeight": 0.45,
      "doorCloser": false,
      "frameDepth": 0.07,
      "handleSide": "right",
      "hingesSide": "left",
      "swingAngle": 1.5707963267948966,
      "trackStyle": "none",
      "openingKind": "door",
      "cornerRadius": 0.15,
      "doorCategory": "interior",
      "handleHeight": 1.05,
      "openingShape": "rectangle",
      "contentPadding": [
        0.04,
        0.04
      ],
      "frameThickness": 0.05,
      "operationState": 0,
      "panicBarHeight": 1,
      "slideDirection": "left",
      "swingDirection": "inward",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "thresholdHeight": 0.02,
      "garagePanelCount": 4,
      "openingRadiusMode": "all",
      "openingRevealRadius": 0.025
    },
    "door_63mh4bxrm80jvzw3": {
      "id": "door_63mh4bxrm80jvzw3",
      "name": "Door 4",
      "side": "back",
      "type": "door",
      "width": 4.10113639831543,
      "handle": false,
      "height": 2.4,
      "object": "node",
      "wallId": "wall_grk3h1cdzdwzqwq0",
      "visible": true,
      "doorType": "garage-sectional",
      "metadata": {
        "isNew": true
      },
      "panicBar": false,
      "parentId": "wall_grk3h1cdzdwzqwq0",
      "position": [
        7.027958154678345,
        1.2,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "segments": [
        {
          "type": "panel",
          "heightRatio": 1,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.02,
          "panelDepth": 0.008,
          "panelInset": 0.025
        }
      ],
      "leafCount": 1,
      "threshold": false,
      "archHeight": 0.45,
      "doorCloser": false,
      "frameDepth": 0.07,
      "handleSide": "right",
      "hingesSide": "left",
      "swingAngle": 0,
      "trackStyle": "overhead",
      "openingKind": "door",
      "cornerRadius": 0.15,
      "doorCategory": "garage",
      "handleHeight": 1.05,
      "openingShape": "rectangle",
      "contentPadding": [
        0.04,
        0.04
      ],
      "frameThickness": 0.05,
      "operationState": 0.38,
      "panicBarHeight": 1,
      "slideDirection": "left",
      "swingDirection": "inward",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "thresholdHeight": 0.02,
      "garagePanelCount": 4,
      "openingRadiusMode": "all",
      "openingRevealRadius": 0.025
    },
    "door_68u4nm2qddm7o5j5": {
      "object": "node",
      "id": "door_68u4nm2qddm7o5j5",
      "type": "door",
      "name": "Door 4",
      "parentId": "wall_g7be4ouabnoybwg6",
      "visible": true,
      "metadata": {},
      "position": [
        0.6000000000000001,
        1.05,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_g7be4ouabnoybwg6",
      "width": 0.9,
      "height": 2.1,
      "doorCategory": "interior",
      "doorType": "hinged",
      "leafCount": 1,
      "operationState": 0,
      "slideDirection": "left",
      "trackStyle": "none",
      "garagePanelCount": 4,
      "openingKind": "door",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.45,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "threshold": true,
      "thresholdHeight": 0.02,
      "hingesSide": "right",
      "swingDirection": "inward",
      "swingAngle": 1.5707963267948966,
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        },
        {
          "type": "panel",
          "heightRatio": 0.6,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "handle": true,
      "handleHeight": 1.05,
      "handleSide": "right",
      "contentPadding": [
        0.04,
        0.04
      ],
      "doorCloser": false,
      "panicBar": false,
      "panicBarHeight": 1
    },
    "door_ayus02olzi93jnya": {
      "id": "door_ayus02olzi93jnya",
      "name": "Door 3",
      "side": "front",
      "type": "door",
      "width": 1.8324012039371924,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_ksadcg2ce927liir",
      "visible": true,
      "doorType": "double",
      "metadata": {
        "isNew": true
      },
      "panicBar": false,
      "parentId": "wall_ksadcg2ce927liir",
      "position": [
        0.9162006019685962,
        1.05,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        },
        {
          "type": "panel",
          "heightRatio": 0.6,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "leafCount": 2,
      "threshold": false,
      "archHeight": 0.45,
      "doorCloser": false,
      "frameDepth": 0.07,
      "handleSide": "right",
      "hingesSide": "right",
      "swingAngle": 1.5707963267948966,
      "trackStyle": "none",
      "openingKind": "door",
      "cornerRadius": 0.15,
      "doorCategory": "interior",
      "handleHeight": 1.05,
      "openingShape": "rectangle",
      "contentPadding": [
        0.04,
        0.04
      ],
      "frameThickness": 0.05,
      "operationState": 0,
      "panicBarHeight": 1,
      "slideDirection": "left",
      "swingDirection": "inward",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "thresholdHeight": 0.02,
      "garagePanelCount": 4,
      "openingRadiusMode": "all",
      "openingRevealRadius": 0.025
    },
    "door_b1riqeap8023qles": {
      "object": "node",
      "id": "door_b1riqeap8023qles",
      "type": "door",
      "name": "Door 3",
      "parentId": "wall_f7d71yf5kpffhcl0",
      "visible": true,
      "metadata": {},
      "position": [
        0.65,
        1.05,
        0
      ],
      "rotation": [
        0,
        6.283185307179586,
        0
      ],
      "side": "front",
      "wallId": "wall_f7d71yf5kpffhcl0",
      "width": 0.86,
      "height": 2.1,
      "doorCategory": "interior",
      "doorType": "hinged",
      "leafCount": 1,
      "operationState": 0,
      "slideDirection": "left",
      "trackStyle": "none",
      "garagePanelCount": 4,
      "openingKind": "door",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.45,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "threshold": false,
      "thresholdHeight": 0.02,
      "hingesSide": "left",
      "swingDirection": "inward",
      "swingAngle": 1.5707963267948966,
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "handle": true,
      "handleHeight": 1.05,
      "handleSide": "left",
      "contentPadding": [
        0.04,
        0.04
      ],
      "doorCloser": false,
      "panicBar": false,
      "panicBarHeight": 1
    },
    "door_d46bo6nyf6gou08a": {
      "id": "door_d46bo6nyf6gou08a",
      "name": "Door 4",
      "side": "back",
      "type": "door",
      "width": 0.9,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_eb5d3sujk2od2zdb",
      "visible": true,
      "doorType": "hinged",
      "metadata": {},
      "panicBar": false,
      "parentId": "wall_eb5d3sujk2od2zdb",
      "position": [
        1.832274341583252,
        1.05,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        },
        {
          "type": "panel",
          "heightRatio": 0.6,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "leafCount": 1,
      "threshold": true,
      "archHeight": 0.45,
      "doorCloser": false,
      "frameDepth": 0.07,
      "handleSide": "right",
      "hingesSide": "left",
      "swingAngle": 1.5707963267948966,
      "trackStyle": "none",
      "openingKind": "door",
      "cornerRadius": 0.15,
      "doorCategory": "interior",
      "handleHeight": 1.05,
      "openingShape": "rectangle",
      "contentPadding": [
        0.04,
        0.04
      ],
      "frameThickness": 0.05,
      "operationState": 0,
      "panicBarHeight": 1,
      "slideDirection": "left",
      "swingDirection": "inward",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "thresholdHeight": 0.02,
      "garagePanelCount": 4,
      "openingRadiusMode": "all",
      "openingRevealRadius": 0.025
    },
    "door_d6rtmh0y4xbii8io": {
      "object": "node",
      "id": "door_d6rtmh0y4xbii8io",
      "type": "door",
      "name": "Door 3",
      "parentId": "wall_49gje9vehl4h6hf7",
      "visible": true,
      "metadata": {},
      "position": [
        2.15,
        1.05,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_49gje9vehl4h6hf7",
      "width": 0.9,
      "height": 2.1,
      "doorCategory": "interior",
      "doorType": "pocket",
      "leafCount": 1,
      "operationState": 0,
      "slideDirection": "left",
      "trackStyle": "pocket",
      "garagePanelCount": 4,
      "openingKind": "door",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.45,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "threshold": false,
      "thresholdHeight": 0.02,
      "hingesSide": "right",
      "swingDirection": "outward",
      "swingAngle": 1.5707963267948966,
      "segments": [
        {
          "type": "panel",
          "heightRatio": 1,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.02,
          "panelDepth": 0.008,
          "panelInset": 0.025
        }
      ],
      "handle": true,
      "handleHeight": 1.05,
      "handleSide": "right",
      "contentPadding": [
        0.035,
        0.045
      ],
      "doorCloser": false,
      "panicBar": false,
      "panicBarHeight": 1
    },
    "door_d81levvdt4tmt02q": {
      "id": "door_d81levvdt4tmt02q",
      "name": "Door 4",
      "side": "front",
      "type": "door",
      "width": 0.9,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_srdt9z5br3dy70fx",
      "visible": true,
      "doorType": "hinged",
      "metadata": {},
      "panicBar": false,
      "parentId": "wall_srdt9z5br3dy70fx",
      "position": [
        1.4500000000000002,
        1.05,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        },
        {
          "type": "panel",
          "heightRatio": 0.6,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "leafCount": 1,
      "threshold": true,
      "archHeight": 0.45,
      "doorCloser": false,
      "frameDepth": 0.07,
      "handleSide": "right",
      "hingesSide": "left",
      "swingAngle": 1.5707963267948966,
      "trackStyle": "none",
      "openingKind": "opening",
      "cornerRadius": 0.15,
      "doorCategory": "interior",
      "handleHeight": 1.05,
      "openingShape": "rectangle",
      "contentPadding": [
        0.04,
        0.04
      ],
      "frameThickness": 0.05,
      "operationState": 0,
      "panicBarHeight": 1,
      "slideDirection": "left",
      "swingDirection": "inward",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "thresholdHeight": 0.02,
      "garagePanelCount": 4,
      "openingRadiusMode": "all",
      "openingRevealRadius": 0.025
    },
    "door_e10ytun62cai4o0h": {
      "id": "door_e10ytun62cai4o0h",
      "name": "Door 4",
      "side": "back",
      "type": "door",
      "width": 3.276072692871094,
      "handle": false,
      "height": 2.4,
      "object": "node",
      "wallId": "wall_grk3h1cdzdwzqwq0",
      "visible": true,
      "doorType": "garage-sectional",
      "metadata": {
        "isNew": true
      },
      "panicBar": false,
      "parentId": "wall_grk3h1cdzdwzqwq0",
      "position": [
        2.1963179111480713,
        1.2,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "segments": [
        {
          "type": "panel",
          "heightRatio": 1,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.02,
          "panelDepth": 0.008,
          "panelInset": 0.025
        }
      ],
      "leafCount": 1,
      "threshold": false,
      "archHeight": 0.45,
      "doorCloser": false,
      "frameDepth": 0.07,
      "handleSide": "right",
      "hingesSide": "left",
      "swingAngle": 0,
      "trackStyle": "overhead",
      "openingKind": "door",
      "cornerRadius": 0.15,
      "doorCategory": "garage",
      "handleHeight": 1.05,
      "openingShape": "rectangle",
      "contentPadding": [
        0.04,
        0.04
      ],
      "frameThickness": 0.05,
      "operationState": 0.38,
      "panicBarHeight": 1,
      "slideDirection": "left",
      "swingDirection": "inward",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "thresholdHeight": 0.02,
      "garagePanelCount": 4,
      "openingRadiusMode": "all",
      "openingRevealRadius": 0.025
    },
    "door_gkfoks7c5i9ssnke": {
      "id": "door_gkfoks7c5i9ssnke",
      "name": "Door 4",
      "side": "back",
      "type": "door",
      "width": 0.9,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_psgvvgjyt3h5mqs9",
      "visible": true,
      "doorType": "hinged",
      "metadata": {},
      "panicBar": false,
      "parentId": "wall_psgvvgjyt3h5mqs9",
      "position": [
        0.6000000000000001,
        1.05,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        },
        {
          "type": "panel",
          "heightRatio": 0.6,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "leafCount": 1,
      "threshold": true,
      "archHeight": 0.45,
      "doorCloser": false,
      "frameDepth": 0.07,
      "handleSide": "right",
      "hingesSide": "right",
      "swingAngle": 1.5707963267948966,
      "trackStyle": "none",
      "openingKind": "door",
      "cornerRadius": 0.15,
      "doorCategory": "interior",
      "handleHeight": 1.05,
      "openingShape": "rectangle",
      "contentPadding": [
        0.04,
        0.04
      ],
      "frameThickness": 0.05,
      "operationState": 0,
      "panicBarHeight": 1,
      "slideDirection": "left",
      "swingDirection": "inward",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "thresholdHeight": 0.02,
      "garagePanelCount": 4,
      "openingRadiusMode": "all",
      "openingRevealRadius": 0.025
    },
    "door_i6ce31ldxmt70fve": {
      "object": "node",
      "id": "door_i6ce31ldxmt70fve",
      "type": "door",
      "name": "Door 3",
      "parentId": "wall_7d0cwdfnwr8wjn7l",
      "visible": true,
      "metadata": {},
      "position": [
        0.9500000000000001,
        1.05,
        0
      ],
      "rotation": [
        0,
        6.283185307179586,
        0
      ],
      "side": "front",
      "wallId": "wall_7d0cwdfnwr8wjn7l",
      "width": 0.91,
      "height": 2.1,
      "doorCategory": "interior",
      "doorType": "hinged",
      "leafCount": 1,
      "operationState": 0,
      "slideDirection": "left",
      "trackStyle": "none",
      "garagePanelCount": 4,
      "openingKind": "door",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.45,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "threshold": false,
      "thresholdHeight": 0.02,
      "hingesSide": "left",
      "swingDirection": "inward",
      "swingAngle": 1.5707963267948966,
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "handle": true,
      "handleHeight": 1.05,
      "handleSide": "right",
      "contentPadding": [
        0.04,
        0.04
      ],
      "doorCloser": false,
      "panicBar": false,
      "panicBarHeight": 1
    },
    "door_k7gbf9b6v34vmjxw": {
      "object": "node",
      "id": "door_k7gbf9b6v34vmjxw",
      "type": "door",
      "name": "Door 3",
      "parentId": "wall_u8gh6n4rogxbkzv6",
      "visible": true,
      "metadata": {},
      "position": [
        3.9000000000000004,
        1.05,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_u8gh6n4rogxbkzv6",
      "width": 0.91,
      "height": 2.1,
      "doorCategory": "interior",
      "doorType": "hinged",
      "leafCount": 1,
      "operationState": 0,
      "slideDirection": "left",
      "trackStyle": "none",
      "garagePanelCount": 4,
      "openingKind": "door",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.45,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "threshold": false,
      "thresholdHeight": 0.02,
      "hingesSide": "right",
      "swingDirection": "inward",
      "swingAngle": 1.5707963267948966,
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "handle": true,
      "handleHeight": 1.05,
      "handleSide": "left",
      "contentPadding": [
        0.04,
        0.04
      ],
      "doorCloser": false,
      "panicBar": false,
      "panicBarHeight": 1
    },
    "door_nzuk0xuqmdjqir8w": {
      "object": "node",
      "id": "door_nzuk0xuqmdjqir8w",
      "type": "door",
      "name": "Door 3",
      "parentId": "wall_nnk3js0xjbmrg6bp",
      "visible": true,
      "metadata": {},
      "position": [
        1.25,
        1.05,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_nnk3js0xjbmrg6bp",
      "width": 0.9,
      "height": 2.1,
      "doorCategory": "interior",
      "doorType": "pocket",
      "leafCount": 1,
      "operationState": 0,
      "slideDirection": "left",
      "trackStyle": "pocket",
      "garagePanelCount": 4,
      "openingKind": "door",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.45,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "threshold": false,
      "thresholdHeight": 0.02,
      "hingesSide": "right",
      "swingDirection": "outward",
      "swingAngle": 1.5707963267948966,
      "segments": [
        {
          "type": "panel",
          "heightRatio": 1,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.02,
          "panelDepth": 0.008,
          "panelInset": 0.025
        }
      ],
      "handle": true,
      "handleHeight": 1.05,
      "handleSide": "right",
      "contentPadding": [
        0.035,
        0.045
      ],
      "doorCloser": false,
      "panicBar": false,
      "panicBarHeight": 1
    },
    "door_or0oopifhy4ntigk": {
      "id": "door_or0oopifhy4ntigk",
      "name": "Door 3",
      "side": "back",
      "type": "door",
      "width": 0.9,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_1sfwpiehgiyh1j76",
      "visible": true,
      "doorType": "hinged",
      "metadata": {},
      "panicBar": false,
      "parentId": "wall_1sfwpiehgiyh1j76",
      "position": [
        0.75,
        1.05,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "leafCount": 1,
      "threshold": false,
      "archHeight": 0.45,
      "doorCloser": false,
      "frameDepth": 0.07,
      "handleSide": "left",
      "hingesSide": "left",
      "swingAngle": 1.5707963267948966,
      "trackStyle": "none",
      "openingKind": "door",
      "cornerRadius": 0.15,
      "doorCategory": "interior",
      "handleHeight": 1.05,
      "openingShape": "rectangle",
      "contentPadding": [
        0.04,
        0.04
      ],
      "frameThickness": 0.05,
      "operationState": 0,
      "panicBarHeight": 1,
      "slideDirection": "left",
      "swingDirection": "inward",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "thresholdHeight": 0.02,
      "garagePanelCount": 4,
      "openingRadiusMode": "all",
      "openingRevealRadius": 0.025
    },
    "door_p2yxrdash2rgc49t": {
      "id": "door_p2yxrdash2rgc49t",
      "name": "Door 4",
      "side": "back",
      "type": "door",
      "width": 1.4262466430664062,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_4pfwnqac6i2cbpgg",
      "visible": true,
      "doorType": "double",
      "metadata": {},
      "panicBar": false,
      "parentId": "wall_4pfwnqac6i2cbpgg",
      "position": [
        0.8112200736999511,
        1.05,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        },
        {
          "type": "panel",
          "heightRatio": 0.6,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "leafCount": 2,
      "threshold": true,
      "archHeight": 0.45,
      "doorCloser": false,
      "frameDepth": 0.07,
      "handleSide": "right",
      "hingesSide": "left",
      "swingAngle": 1.5707963267948966,
      "trackStyle": "none",
      "openingKind": "door",
      "cornerRadius": 0.15,
      "doorCategory": "interior",
      "handleHeight": 1.05,
      "openingShape": "rectangle",
      "contentPadding": [
        0.04,
        0.04
      ],
      "frameThickness": 0.05,
      "operationState": 0,
      "panicBarHeight": 1,
      "slideDirection": "left",
      "swingDirection": "inward",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "thresholdHeight": 0.02,
      "garagePanelCount": 4,
      "openingRadiusMode": "all",
      "openingRevealRadius": 0.025
    },
    "door_s400607kau06wa3d": {
      "id": "door_s400607kau06wa3d",
      "name": "Door 4",
      "side": "back",
      "type": "door",
      "width": 0.9,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_tbbfz0sxacoadch5",
      "visible": true,
      "doorType": "hinged",
      "metadata": {},
      "panicBar": false,
      "parentId": "wall_tbbfz0sxacoadch5",
      "position": [
        1.1500000000000001,
        1.05,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        },
        {
          "type": "panel",
          "heightRatio": 0.6,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "leafCount": 1,
      "threshold": true,
      "archHeight": 0.45,
      "doorCloser": false,
      "frameDepth": 0.07,
      "handleSide": "right",
      "hingesSide": "left",
      "swingAngle": 1.5707963267948966,
      "trackStyle": "none",
      "openingKind": "door",
      "cornerRadius": 0.15,
      "doorCategory": "interior",
      "handleHeight": 1.05,
      "openingShape": "rectangle",
      "contentPadding": [
        0.04,
        0.04
      ],
      "frameThickness": 0.05,
      "operationState": 0,
      "panicBarHeight": 1,
      "slideDirection": "left",
      "swingDirection": "inward",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "thresholdHeight": 0.02,
      "garagePanelCount": 4,
      "openingRadiusMode": "all",
      "openingRevealRadius": 0.025
    },
    "door_ujpqu191fdu84dng": {
      "id": "door_ujpqu191fdu84dng",
      "name": "Door 4",
      "side": "front",
      "type": "door",
      "width": 0.9,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_psgvvgjyt3h5mqs9",
      "visible": true,
      "doorType": "pocket",
      "metadata": {},
      "panicBar": false,
      "parentId": "wall_psgvvgjyt3h5mqs9",
      "position": [
        3.5,
        1.05,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "segments": [
        {
          "type": "panel",
          "heightRatio": 1,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.02,
          "panelDepth": 0.008,
          "panelInset": 0.025
        }
      ],
      "leafCount": 1,
      "threshold": false,
      "archHeight": 0.45,
      "doorCloser": false,
      "frameDepth": 0.07,
      "handleSide": "right",
      "hingesSide": "right",
      "swingAngle": 1.5707963267948966,
      "trackStyle": "pocket",
      "openingKind": "door",
      "cornerRadius": 0.15,
      "doorCategory": "interior",
      "handleHeight": 1.05,
      "openingShape": "rectangle",
      "contentPadding": [
        0.035,
        0.045
      ],
      "frameThickness": 0.05,
      "operationState": 1,
      "panicBarHeight": 1,
      "slideDirection": "left",
      "swingDirection": "inward",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "thresholdHeight": 0.02,
      "garagePanelCount": 4,
      "openingRadiusMode": "all",
      "openingRevealRadius": 0.025
    },
    "door_ulivl1f2oxfbv7hn": {
      "id": "door_ulivl1f2oxfbv7hn",
      "name": "Door 4",
      "side": "front",
      "type": "door",
      "width": 0.9,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_lgb7shys1pvu6m0x",
      "visible": true,
      "doorType": "hinged",
      "metadata": {
        "isNew": true
      },
      "panicBar": false,
      "parentId": "wall_lgb7shys1pvu6m0x",
      "position": [
        0.6578866004943853,
        1.05,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        },
        {
          "type": "panel",
          "heightRatio": 0.6,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "leafCount": 1,
      "threshold": true,
      "archHeight": 0.45,
      "doorCloser": false,
      "frameDepth": 0.07,
      "handleSide": "right",
      "hingesSide": "left",
      "swingAngle": 1.5707963267948966,
      "trackStyle": "none",
      "openingKind": "door",
      "cornerRadius": 0.15,
      "doorCategory": "interior",
      "handleHeight": 1.05,
      "openingShape": "rectangle",
      "contentPadding": [
        0.04,
        0.04
      ],
      "frameThickness": 0.05,
      "operationState": 0,
      "panicBarHeight": 1,
      "slideDirection": "left",
      "swingDirection": "inward",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "thresholdHeight": 0.02,
      "garagePanelCount": 4,
      "openingRadiusMode": "all",
      "openingRevealRadius": 0.025
    },
    "door_wc7fcvnu0r380dm1": {
      "id": "door_wc7fcvnu0r380dm1",
      "name": "Door 1",
      "side": "back",
      "type": "door",
      "width": 0.9,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_zl2w3wx6ous4m0fa",
      "visible": true,
      "doorType": "hinged",
      "metadata": {},
      "panicBar": false,
      "parentId": "wall_zl2w3wx6ous4m0fa",
      "position": [
        1.1500000000000001,
        1.05,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        },
        {
          "type": "panel",
          "heightRatio": 0.6,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "leafCount": 1,
      "threshold": true,
      "archHeight": 0.45,
      "doorCloser": false,
      "frameDepth": 0.07,
      "handleSide": "right",
      "hingesSide": "left",
      "swingAngle": 1.5707963267948966,
      "trackStyle": "pocket",
      "openingKind": "door",
      "cornerRadius": 0.15,
      "doorCategory": "interior",
      "handleHeight": 1.05,
      "openingShape": "rectangle",
      "contentPadding": [
        0.035,
        0.045
      ],
      "frameThickness": 0.01,
      "operationState": 0,
      "panicBarHeight": 1,
      "slideDirection": "right",
      "swingDirection": "inward",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "thresholdHeight": 0.02,
      "garagePanelCount": 4,
      "openingRadiusMode": "individual",
      "openingRevealRadius": 0.025
    },
    "door_xqh3p7orm6lm9ems": {
      "id": "door_xqh3p7orm6lm9ems",
      "name": "Door 3",
      "side": "back",
      "type": "door",
      "width": 0.91,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_af75d28vkyigycat",
      "visible": true,
      "doorType": "hinged",
      "metadata": {},
      "panicBar": false,
      "parentId": "wall_af75d28vkyigycat",
      "position": [
        0.6000000000000001,
        1.05,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "leafCount": 1,
      "threshold": false,
      "archHeight": 0.45,
      "doorCloser": false,
      "frameDepth": 0.07,
      "handleSide": "left",
      "hingesSide": "right",
      "swingAngle": 1.5707963267948966,
      "trackStyle": "none",
      "openingKind": "door",
      "cornerRadius": 0.15,
      "doorCategory": "interior",
      "handleHeight": 1.05,
      "openingShape": "rectangle",
      "contentPadding": [
        0.04,
        0.04
      ],
      "frameThickness": 0.05,
      "operationState": 0,
      "panicBarHeight": 1,
      "slideDirection": "left",
      "swingDirection": "outward",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "thresholdHeight": 0.02,
      "garagePanelCount": 4,
      "openingRadiusMode": "all",
      "openingRevealRadius": 0.025
    },
    "door_zhbbcvzsr29tm9ws": {
      "id": "door_zhbbcvzsr29tm9ws",
      "name": "Door 4",
      "side": "front",
      "type": "door",
      "width": 0.9,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_1oavpa3822gmh9fe",
      "visible": true,
      "doorType": "hinged",
      "metadata": {},
      "panicBar": false,
      "parentId": "wall_1oavpa3822gmh9fe",
      "position": [
        0.55,
        1.05,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        },
        {
          "type": "panel",
          "heightRatio": 0.6,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "leafCount": 1,
      "threshold": true,
      "archHeight": 0.45,
      "doorCloser": false,
      "frameDepth": 0.07,
      "handleSide": "right",
      "hingesSide": "left",
      "swingAngle": 1.5707963267948966,
      "trackStyle": "none",
      "openingKind": "door",
      "cornerRadius": 0.15,
      "doorCategory": "interior",
      "handleHeight": 1.05,
      "openingShape": "rectangle",
      "contentPadding": [
        0.04,
        0.04
      ],
      "frameThickness": 0.05,
      "operationState": 0,
      "panicBarHeight": 1,
      "slideDirection": "left",
      "swingDirection": "inward",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "thresholdHeight": 0.02,
      "garagePanelCount": 4,
      "openingRadiusMode": "all",
      "openingRevealRadius": 0.025
    },
    "item_00zcrauqzlnioiad": {
      "id": "item_00zcrauqzlnioiad",
      "name": "Sink",
      "type": "item",
      "asset": {
        "id": "sink-mpwnhw5r",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/models/item_model_ZLuuS1FAKRYLTRkN.glb",
        "name": "Sink",
        "tags": [
          "Bathroom floating sink"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.0009755492210388184,
          0.2476077377796173,
          -0.0007567554712295532
        ],
        "source": "community",
        "isDraft": false,
        "category": "columns",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/thumbnail.png",
        "dimensions": [
          1,
          0.5,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/floor-plan.png",
        "functionTags": [
          "columns",
          "sinks",
          "cabinets"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        3.1999999999999993,
        0.4,
        -2.1999999999999997
      ],
      "rotation": [
        0,
        15.707963267948966,
        0
      ]
    },
    "item_0aahggnuvs15c6lx": {
      "id": "item_0aahggnuvs15c6lx",
      "name": "Double Bed",
      "type": "item",
      "asset": {
        "id": "double-bed",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/double-bed/model.glb",
        "name": "Double Bed",
        "tags": [
          "bed",
          "bedstead",
          "double",
          "frame",
          "bedroom",
          "sleeping",
          "modern",
          "minimalist",
          "upholstered",
          "wood",
          "sleep",
          "furniture",
          "contemporary"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.004185318946838379,
          2.028451717706048e-7,
          -0.027721375226974487
        ],
        "source": "library",
        "isDraft": false,
        "category": "double-beds",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/double-bed/thumbnail.png",
        "dimensions": [
          1.52,
          0.71,
          2
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/double-bed/floor-plan.png",
        "functionTags": [
          "double-beds"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        5.029155630497385,
        0,
        -6.488675699402083
      ],
      "rotation": [
        0,
        15.70796326794897,
        0
      ]
    },
    "item_0shz7ysys2j73rtf": {
      "id": "item_0shz7ysys2j73rtf",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        0.5,
        1,
        0.6
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -9.05,
        0,
        1.9000000000000001
      ],
      "rotation": [
        0,
        17.27875959474386,
        0
      ]
    },
    "item_12ttyzn7xszgxwhh": {
      "id": "item_12ttyzn7xszgxwhh",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        1.2,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        2.29,
        0,
        -7.75
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ]
    },
    "item_1hdkr5ppq6qmxf3i": {
      "id": "item_1hdkr5ppq6qmxf3i",
      "name": "Bathroom Sink",
      "type": "item",
      "asset": {
        "id": "bathroom-sink",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bathroom-sink/model.glb",
        "name": "Bathroom Sink",
        "tags": [
          "sink",
          "basin",
          "lavatory",
          "washbasin",
          "vanity",
          "modern",
          "minimalist",
          "ceramic",
          "porcelain",
          "white",
          "plumbing",
          "washing",
          "bathroom",
          "hygiene"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.1037352979183197,
          1.7134145480213192e-7,
          0.022128716111183167
        ],
        "source": "library",
        "isDraft": false,
        "category": "sinks",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bathroom-sink/thumbnail.png",
        "dimensions": [
          1.83,
          0.97,
          0.63
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bathroom-sink/floor-plan.png",
        "functionTags": [
          "sinks"
        ]
      },
      "scale": [
        1.6,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        6.22,
        0,
        -3.57
      ],
      "rotation": [
        0,
        4.71238898038469,
        0
      ]
    },
    "item_1zg7k0r3tdmygo37": {
      "id": "item_1zg7k0r3tdmygo37",
      "name": "Herman Miller Aeron",
      "type": "item",
      "asset": {
        "id": "herman-miller-aeron-mo8x36k9",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/models/item_model_YshL4maC8cHtry5c.glb",
        "name": "Herman Miller Aeron",
        "tags": [
          "office"
        ],
        "scale": [
          1.05,
          1.05,
          1.05
        ],
        "offset": [
          -0.0012764498591423257,
          0.5256464391946792,
          0.0028421513736248127
        ],
        "source": "library",
        "isDraft": false,
        "category": "office-chairs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/thumbnail.png",
        "dimensions": [
          0.67,
          1.06,
          0.66
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/floor-plan.png",
        "functionTags": [
          "office-chairs"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -6.4,
        0,
        3.0000000000000004
      ],
      "rotation": [
        0,
        6.283185307179586,
        0
      ]
    },
    "item_2a3bnywq7pjdrmp9": {
      "object": "node",
      "id": "item_2a3bnywq7pjdrmp9",
      "type": "item",
      "name": "AC block",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -10.799999999999995,
        0,
        -2.05
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ],
      "scale": [
        0.5,
        1.6,
        0.65
      ],
      "children": [],
      "asset": {
        "id": "ac-block",
        "category": "climate-appliances",
        "name": "AC block",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/model.glb",
        "dimensions": [
          1.06,
          0.95,
          1.06
        ],
        "tags": [
          "conditioner",
          "cooler",
          "hvac",
          "cooling",
          "appliance",
          "vent",
          "modern",
          "minimalist",
          "metal",
          "industrial",
          "white",
          "utility",
          "ventilation",
          "unit",
          "climate"
        ],
        "functionTags": [
          "climate-appliances"
        ],
        "offset": [
          0,
          0,
          0
        ],
        "rotation": [
          0,
          0,
          0
        ],
        "scale": [
          0.79,
          0.79,
          0.79
        ]
      }
    },
    "item_2tb90dr7poydmgs7": {
      "id": "item_2tb90dr7poydmgs7",
      "name": "Dining Chair",
      "type": "item",
      "asset": {
        "id": "dining-chair",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/model.glb",
        "name": "Dining Chair",
        "tags": [
          "chair",
          "seating",
          "dining",
          "furniture",
          "modern",
          "wood",
          "upholstered",
          "kitchen",
          "seat",
          "minimalist",
          "timber",
          "bistro"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          4.3958425521850586e-7,
          4.045574542033137e-8,
          0.001551710069179535
        ],
        "source": "library",
        "isDraft": false,
        "category": "dining-chairs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/thumbnail.png",
        "dimensions": [
          0.47,
          0.87,
          0.5
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/floor-plan.png",
        "functionTags": [
          "dining-chairs"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -5.65,
        0,
        -5.6000000000000005
      ],
      "rotation": [
        0,
        0,
        0
      ]
    },
    "item_3f5hxyhjs5lzu10g": {
      "id": "item_3f5hxyhjs5lzu10g",
      "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
      "type": "item",
      "asset": {
        "id": "ctlg-gd-04-010-016-mra34ejn",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/models/item_model_Sl2GjaOKnBSIkAVF.glb",
        "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.6655630066912079,
          0.001999922329713577,
          0.05081197261875771
        ],
        "source": "mine",
        "isDraft": true,
        "category": "showers",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/thumbnail.png",
        "dimensions": [
          1.34,
          1.91,
          0.14
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/floor-plan.png",
        "functionTags": [
          "showers"
        ]
      },
      "scale": [
        1.3,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        4.818217292785644,
        0,
        -2.95
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ]
    },
    "item_3p6xx6c0a2ar385p": {
      "id": "item_3p6xx6c0a2ar385p",
      "name": "Armchair",
      "type": "item",
      "asset": {
        "id": "towel-rack-mqqqn87h",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/towel-rack-mqqqn87h/models/item_model_FKS7vBwkPpxCWSbC.glb",
        "name": "Armchair",
        "tags": [
          "Armchair",
          "Seat"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.000002294778823852539,
          7.411453140093727e-8,
          -5.662441253662109e-7
        ],
        "source": "library",
        "isDraft": false,
        "category": "armchairs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/towel-rack-mqqqn87h/thumbnail.png",
        "dimensions": [
          1.03,
          1.12,
          1.09
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/towel-rack-mqqqn87h/floor-plan.png",
        "functionTags": [
          "armchairs"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        0.585,
        0,
        -0.545
      ],
      "rotation": [
        0,
        0.7853981633974483,
        0
      ]
    },
    "item_3w0a6atqrv4mfpwf": {
      "id": "item_3w0a6atqrv4mfpwf",
      "name": "Standing Desk",
      "type": "item",
      "asset": {
        "id": "standing-desk-mo8wgz95",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/models/item_model_zzZ58018waP8VY6Z.glb",
        "name": "Standing Desk",
        "tags": [
          "office"
        ],
        "scale": [
          1.4,
          1.4,
          1.4
        ],
        "offset": [
          0.00004610419273376465,
          0.4203098952770233,
          0.0018924519419670216
        ],
        "source": "library",
        "isDraft": false,
        "category": "desks",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/thumbnail.png",
        "dimensions": [
          1.41,
          0.85,
          0.68
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/floor-plan.png",
        "functionTags": [
          "desks"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -8.364093058418751,
        0,
        -8.109396936033606
      ],
      "rotation": [
        0,
        4.71238898038469,
        0
      ]
    },
    "item_3z6z594t7p9le06y": {
      "id": "item_3z6z594t7p9le06y",
      "name": "Sofa",
      "type": "item",
      "asset": {
        "id": "sofa-mpxs5iry",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/sofa/model.glb",
        "name": "Sofa",
        "tags": [
          "floor",
          "seating"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.002263486385345459,
          0.008962750434875488,
          0.04589979350566864
        ],
        "source": "community",
        "isDraft": false,
        "category": "sofas",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/sofa/thumbnail.png",
        "dimensions": [
          2.06,
          0.74,
          1.01
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/sofa/floor-plan.png",
        "functionTags": [
          "sofas"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -2.35,
        0,
        -7.975000000000001
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ]
    },
    "item_4akv5mlmq2ywzfyh": {
      "id": "item_4akv5mlmq2ywzfyh",
      "name": "Computer",
      "type": "item",
      "asset": {
        "id": "computer",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/computer/model.glb",
        "name": "Computer",
        "tags": [
          "computer",
          "desktop",
          "workstation",
          "monitor",
          "technology",
          "office",
          "electronics",
          "modern",
          "sleek",
          "metal",
          "silver",
          "minimalist",
          "hardware",
          "productivity"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.0000028014183044433594,
          3.0068996181853436e-8,
          0.0000013746321201324463
        ],
        "source": "library",
        "isDraft": false,
        "category": "computers",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/computer/thumbnail.png",
        "dimensions": [
          0.68,
          0.48,
          0.19
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/computer/floor-plan.png",
        "functionTags": [
          "computers"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": null,
      "position": [
        -0.009999999999999995,
        0.75,
        -0.10500000000000002
      ],
      "rotation": [
        0,
        0,
        0
      ]
    },
    "item_4g9fyjloay7wye05": {
      "id": "item_4g9fyjloay7wye05",
      "name": "Bedside Table",
      "type": "item",
      "asset": {
        "id": "bedside-table",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bedside-table/model.glb",
        "name": "Bedside Table",
        "tags": [
          "nightstand",
          "table",
          "bedroom",
          "storage",
          "wood",
          "modern",
          "minimalist",
          "stand",
          "drawer",
          "furniture",
          "cabinet",
          "bedside"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.0005035474896430969,
          6.364190596741537e-8,
          -0.006219811737537384
        ],
        "source": "library",
        "isDraft": false,
        "surface": {
          "height": 0.48
        },
        "category": "coffee-tables",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bedside-table/thumbnail.png",
        "dimensions": [
          0.45,
          0.48,
          0.46
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bedside-table/floor-plan.png",
        "functionTags": [
          "coffee-tables"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        10.515,
        0,
        -2.0550000000000006
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ]
    },
    "item_5pl86d2sjqzigmpw": {
      "id": "item_5pl86d2sjqzigmpw",
      "name": "Dining Chair",
      "type": "item",
      "asset": {
        "id": "dining-chair",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/model.glb",
        "name": "Dining Chair",
        "tags": [
          "chair",
          "seating",
          "dining",
          "furniture",
          "modern",
          "wood",
          "upholstered",
          "kitchen",
          "seat",
          "minimalist",
          "timber",
          "bistro"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          4.3958425521850586e-7,
          4.045574542033137e-8,
          0.001551710069179535
        ],
        "source": "library",
        "isDraft": false,
        "category": "dining-chairs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/thumbnail.png",
        "dimensions": [
          0.47,
          0.87,
          0.5
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/floor-plan.png",
        "functionTags": [
          "dining-chairs"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {
        "isTransient": true
      },
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -7.8631110191345215,
        0,
        -8.484570121765136
      ],
      "rotation": [
        0,
        1.5707963267948968,
        0
      ]
    },
    "item_5qx015iyn9pq2zcg": {
      "id": "item_5qx015iyn9pq2zcg",
      "name": "Bench",
      "type": "item",
      "asset": {
        "id": "bench-mqqr2xrw",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/bench-mqqr2xrw/models/item_model_ov1TtxbqktlFKwq9.glb",
        "name": "Bench",
        "tags": [
          "Daybed",
          "Bench",
          "Seat"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          4.76837158203125e-7,
          -0.0000013623554195874021,
          0.000001519918441772461
        ],
        "source": "library",
        "isDraft": false,
        "category": "single-beds",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/bench-mqqr2xrw/thumbnail.png",
        "dimensions": [
          3.67,
          1,
          1.2
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/bench-mqqr2xrw/floor-plan.png",
        "functionTags": [
          "single-beds",
          "benches"
        ]
      },
      "scale": [
        0.5,
        0.5,
        0.5
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        9.121871986389161,
        0,
        -4.179999999999999
      ],
      "rotation": [
        0,
        0,
        0
      ]
    },
    "item_6ilsym950zi1dcxs": {
      "id": "item_6ilsym950zi1dcxs",
      "name": "Standing Desk",
      "type": "item",
      "asset": {
        "id": "standing-desk-mo8wgz95",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/models/item_model_zzZ58018waP8VY6Z.glb",
        "name": "Standing Desk",
        "tags": [
          "office"
        ],
        "scale": [
          1.4,
          1.4,
          1.4
        ],
        "offset": [
          0.00004610419273376465,
          0.4203098952770233,
          0.0018924519419670216
        ],
        "source": "library",
        "isDraft": false,
        "category": "desks",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/thumbnail.png",
        "dimensions": [
          1.41,
          0.85,
          0.68
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/floor-plan.png",
        "functionTags": [
          "desks"
        ]
      },
      "scale": [
        0.7,
        1,
        0.8
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        5.160151938807428,
        0,
        -8.62424499722618
      ],
      "rotation": [
        0,
        6.283185307179586,
        0
      ]
    },
    "item_6lwtsrw8es0gcq24": {
      "id": "item_6lwtsrw8es0gcq24",
      "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
      "type": "item",
      "asset": {
        "id": "ctlg-gd-04-010-016-mra34ejn",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/models/item_model_Sl2GjaOKnBSIkAVF.glb",
        "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.6655630066912079,
          0.001999922329713577,
          0.05081197261875771
        ],
        "source": "mine",
        "isDraft": true,
        "category": "showers",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/thumbnail.png",
        "dimensions": [
          1.34,
          1.91,
          0.14
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/floor-plan.png",
        "functionTags": [
          "showers"
        ]
      },
      "scale": [
        1.2,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -7.1499999999999995,
        0,
        -0.8
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ]
    },
    "item_6oascx624qvoya15": {
      "id": "item_6oascx624qvoya15",
      "name": "Herman Miller Aeron",
      "type": "item",
      "asset": {
        "id": "herman-miller-aeron-mo8x36k9",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/models/item_model_YshL4maC8cHtry5c.glb",
        "name": "Herman Miller Aeron",
        "tags": [
          "office"
        ],
        "scale": [
          1.05,
          1.05,
          1.05
        ],
        "offset": [
          -0.0012764498591423257,
          0.5256464391946792,
          0.0028421513736248127
        ],
        "source": "library",
        "isDraft": false,
        "category": "office-chairs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/thumbnail.png",
        "dimensions": [
          0.67,
          1.06,
          0.66
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/floor-plan.png",
        "functionTags": [
          "office-chairs"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        2.7,
        0,
        -8.35
      ],
      "rotation": [
        0,
        23.561944901923447,
        0
      ]
    },
    "item_6on8lecsaim3tk0u": {
      "id": "item_6on8lecsaim3tk0u",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -5,
        0,
        2.5500000000000003
      ],
      "rotation": [
        0,
        17.27875959474386,
        0
      ]
    },
    "item_7idltmsotyqqa4th": {
      "id": "item_7idltmsotyqqa4th",
      "name": "AC block",
      "type": "item",
      "asset": {
        "id": "ac-block",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/model.glb",
        "name": "AC block",
        "tags": [
          "conditioner",
          "cooler",
          "hvac",
          "cooling",
          "appliance",
          "vent",
          "modern",
          "minimalist",
          "metal",
          "industrial",
          "white",
          "utility",
          "ventilation",
          "unit",
          "climate"
        ],
        "scale": [
          0.79,
          0.79,
          0.79
        ],
        "offset": [
          0,
          0,
          0
        ],
        "source": "library",
        "isDraft": false,
        "category": "climate-appliances",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/thumbnail.png",
        "dimensions": [
          1.06,
          0.95,
          1.06
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/floor-plan.png",
        "functionTags": [
          "climate-appliances"
        ]
      },
      "scale": [
        1.1,
        2,
        0.65
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -10.8,
        0,
        -0.4500000000000004
      ],
      "rotation": [
        0,
        10.995574287564276,
        0
      ]
    },
    "item_7jbysauqz8k82rh0": {
      "id": "item_7jbysauqz8k82rh0",
      "name": "Kitchen Bar",
      "type": "item",
      "asset": {
        "id": "wooden-kitchen-bar-moa2hhh4",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/models/item_model_c6iR1M2eE2I8k5M3.glb",
        "name": "Kitchen Bar",
        "tags": [
          "bar",
          "counter",
          "island",
          "breakfast",
          "modern",
          "contemporary",
          "wood",
          "stone",
          "quartz",
          "seating",
          "dining",
          "prep",
          "entertaining"
        ],
        "scale": [
          2.49,
          2.49,
          2.49
        ],
        "offset": [
          0.0003166446089745145,
          0.5321682389080525,
          -0.002378878891468039
        ],
        "source": "library",
        "isDraft": false,
        "surface": {
          "height": 1.06
        },
        "category": "counters",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/thumbnail.png",
        "dimensions": [
          2.5,
          1.06,
          0.96
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/floor-plan.png",
        "functionTags": [
          "counters"
        ]
      },
      "scale": [
        0.7,
        0.74,
        0.62
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -11.24,
        0,
        -6.520000000000001
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ]
    },
    "item_99ttltb529czv3pr": {
      "id": "item_99ttltb529czv3pr",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        1.1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        6.539999999999997,
        0,
        -7.930001311302182
      ],
      "rotation": [
        0,
        23.561944901923447,
        0
      ]
    },
    "item_9nh7sgu9kf8bo7fl": {
      "id": "item_9nh7sgu9kf8bo7fl",
      "name": "Bathtub",
      "type": "item",
      "asset": {
        "id": "bathtub",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bathtub/model.glb",
        "name": "Bathtub",
        "tags": [
          "bathtub",
          "tub",
          "bath",
          "soaking",
          "modern",
          "minimalist",
          "porcelain",
          "acrylic",
          "ceramic",
          "bathroom",
          "relaxation",
          "spa"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -4.172325134277344e-7,
          2.690202336452785e-7,
          8.642673492431641e-7
        ],
        "source": "library",
        "isDraft": false,
        "category": "bathtubs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bathtub/thumbnail.png",
        "dimensions": [
          2.34,
          0.79,
          1.11
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bathtub/floor-plan.png",
        "functionTags": [
          "bathtubs"
        ]
      },
      "scale": [
        0.7,
        1,
        0.7
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        3.21,
        0,
        -2.9299999999999997
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ]
    },
    "item_9qhehqd7qguusqxw": {
      "id": "item_9qhehqd7qguusqxw",
      "name": "Sofa",
      "type": "item",
      "asset": {
        "id": "sofa-mpxs5iry",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/sofa/model.glb",
        "name": "Sofa",
        "tags": [
          "floor",
          "seating"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.002263486385345459,
          0.008962750434875488,
          0.04589979350566864
        ],
        "source": "community",
        "isDraft": false,
        "category": "sofas",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/sofa/thumbnail.png",
        "dimensions": [
          2.06,
          0.74,
          1.01
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/sofa/floor-plan.png",
        "functionTags": [
          "sofas"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -0.7450000000000001,
        0,
        -9.920000000000002
      ],
      "rotation": [
        0,
        6.283185307179586,
        0
      ]
    },
    "item_9ssmgpspavql70u5": {
      "id": "item_9ssmgpspavql70u5",
      "name": "AC block",
      "type": "item",
      "asset": {
        "id": "ac-block",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/model.glb",
        "name": "AC block",
        "tags": [
          "conditioner",
          "cooler",
          "hvac",
          "cooling",
          "appliance",
          "vent",
          "modern",
          "minimalist",
          "metal",
          "industrial",
          "white",
          "utility",
          "ventilation",
          "unit",
          "climate"
        ],
        "scale": [
          0.79,
          0.79,
          0.79
        ],
        "offset": [
          0,
          0,
          0
        ],
        "source": "library",
        "isDraft": false,
        "category": "climate-appliances",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/thumbnail.png",
        "dimensions": [
          1.06,
          0.95,
          1.06
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/floor-plan.png",
        "functionTags": [
          "climate-appliances"
        ]
      },
      "scale": [
        0.85,
        0.6,
        0.65
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -10.799999999999999,
        0,
        -1.0000000000000002
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ]
    },
    "item_a60bxham0hkmttqn": {
      "id": "item_a60bxham0hkmttqn",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -5,
        0,
        1.1500000000000001
      ],
      "rotation": [
        0,
        17.27875959474386,
        0
      ]
    },
    "item_a720h5x84l8enxab": {
      "id": "item_a720h5x84l8enxab",
      "name": "马桶",
      "type": "item",
      "asset": {
        "id": "-mq0n6sz6",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/models/item_model_mp3ur91Y5QHaWEIY.glb",
        "name": "马桶",
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.41681656118384897,
          1.057109955127089e-11,
          0.385451077481526
        ],
        "source": "mine",
        "isDraft": false,
        "category": "toilets",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/thumbnail.png",
        "dimensions": [
          0.49,
          0.57,
          0.7
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/floor-plan.png",
        "functionTags": [
          "toilets"
        ]
      },
      "scale": [
        1.2,
        1.2,
        1.2
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        3.5272172927856444,
        0,
        -4.661400127410889
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ]
    },
    "item_ahgrfnd3wc3tnh7f": {
      "id": "item_ahgrfnd3wc3tnh7f",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        3.55,
        0,
        -8.65
      ],
      "rotation": [
        0,
        6.283185307179586,
        0
      ]
    },
    "item_am8s25oxksk6s4kq": {
      "id": "item_am8s25oxksk6s4kq",
      "name": "Kitchen Bar",
      "type": "item",
      "asset": {
        "id": "wooden-kitchen-bar-moa2hhh4",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/models/item_model_c6iR1M2eE2I8k5M3.glb",
        "name": "Kitchen Bar",
        "tags": [
          "bar",
          "counter",
          "island",
          "breakfast",
          "modern",
          "contemporary",
          "wood",
          "stone",
          "quartz",
          "seating",
          "dining",
          "prep",
          "entertaining"
        ],
        "scale": [
          2.49,
          2.49,
          2.49
        ],
        "offset": [
          0.0003166446089745145,
          0.5321682389080525,
          -0.002378878891468039
        ],
        "source": "library",
        "isDraft": false,
        "surface": {
          "height": 1.06
        },
        "category": "counters",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/thumbnail.png",
        "dimensions": [
          2.5,
          1.06,
          0.96
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/floor-plan.png",
        "functionTags": [
          "counters"
        ]
      },
      "scale": [
        0.7,
        0.74,
        0.62
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -11.25,
        0,
        -4.25
      ],
      "rotation": [
        0,
        6.283185307179586,
        0
      ]
    },
    "item_an6vix3f4h6hd5hd": {
      "id": "item_an6vix3f4h6hd5hd",
      "name": "Big Fridge",
      "type": "item",
      "asset": {
        "id": "big-fridge-mqqop7fl",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/big-fridge-mqqop7fl/models/item_model_eNH0U2jVPkH3bAUP.glb",
        "name": "Big Fridge",
        "tags": [
          "Fridge",
          "Kitchen"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          2.086162567138672e-7,
          3.685857450363983e-7,
          8.791685104370117e-7
        ],
        "source": "library",
        "isDraft": false,
        "category": "kitchen-appliances",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/big-fridge-mqqop7fl/thumbnail.png",
        "dimensions": [
          1.44,
          2.5,
          0.91
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/big-fridge-mqqop7fl/floor-plan.png",
        "functionTags": [
          "kitchen-appliances"
        ]
      },
      "scale": [
        0.8,
        1,
        0.7
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -8.400000000000002,
        0,
        -3.3499999999999996
      ],
      "rotation": [
        0,
        14.137166941154069,
        0
      ]
    },
    "item_bb69qd4p60mihfcw": {
      "id": "item_bb69qd4p60mihfcw",
      "name": "Power Tower",
      "type": "item",
      "asset": {
        "id": "power-tower-mqqqriru",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/power-tower-mqqqriru/models/item_model_okWgTQz765soCQud.glb",
        "name": "Power Tower",
        "tags": [
          "Power Tower",
          "Gym",
          "Fitness"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -5.662441253662109e-7,
          0.010504095815122128,
          4.470348358154297e-7
        ],
        "source": "library",
        "isDraft": false,
        "category": "fitness",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/power-tower-mqqqriru/thumbnail.png",
        "dimensions": [
          1.34,
          2.44,
          1.09
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/power-tower-mqqqriru/floor-plan.png",
        "functionTags": [
          "fitness"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -3.875,
        0,
        -6.8500000000000005
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ]
    },
    "item_bjt22tw6v2rl9cw4": {
      "id": "item_bjt22tw6v2rl9cw4",
      "name": "Herman Miller Aeron",
      "type": "item",
      "asset": {
        "id": "herman-miller-aeron-mo8x36k9",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/models/item_model_YshL4maC8cHtry5c.glb",
        "name": "Herman Miller Aeron",
        "tags": [
          "office"
        ],
        "scale": [
          1.05,
          1.05,
          1.05
        ],
        "offset": [
          -0.0012764498591423257,
          0.5256464391946792,
          0.0028421513736248127
        ],
        "source": "library",
        "isDraft": false,
        "category": "office-chairs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/thumbnail.png",
        "dimensions": [
          0.67,
          1.06,
          0.66
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/floor-plan.png",
        "functionTags": [
          "office-chairs"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        5.160151938807426,
        0,
        -8.149244997226177
      ],
      "rotation": [
        0,
        9.42477796076938,
        0
      ]
    },
    "item_brknoq8wgxtcw270": {
      "id": "item_brknoq8wgxtcw270",
      "name": "Tesla Model Y",
      "type": "item",
      "asset": {
        "id": "tesla",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/tesla/model.glb",
        "name": "Tesla Model Y",
        "tags": [
          "tesla",
          "car",
          "vehicle",
          "automobile",
          "electric",
          "modern",
          "minimalist",
          "sleek",
          "metal",
          "glass",
          "luxury",
          "transportation",
          "commuting"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.0038899771975877684,
          -0.01017908506396381,
          -0.01475837322021789
        ],
        "source": "library",
        "isDraft": false,
        "category": "vehicles",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/tesla/thumbnail.png",
        "dimensions": [
          1.98,
          1.62,
          4.76
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/tesla/floor-plan.png",
        "functionTags": [
          "vehicles"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -7.470000000000001,
        0,
        10.59
      ],
      "rotation": [
        0,
        1.568895021487244,
        0
      ]
    },
    "item_cldit3z1z6sk416h": {
      "id": "item_cldit3z1z6sk416h",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        0.8,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        6.500000000000001,
        0,
        -6.3000013113021875
      ],
      "rotation": [
        0,
        23.561944901923447,
        0
      ]
    },
    "item_cnc05zdyrgz07xgs": {
      "object": "node",
      "id": "item_cnc05zdyrgz07xgs",
      "type": "item",
      "name": "Closet",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -9.07,
        0,
        -0.25
      ],
      "rotation": [
        0,
        17.27875959474386,
        0
      ],
      "scale": [
        0.7,
        1,
        0.6
      ],
      "children": [],
      "asset": {
        "id": "closet",
        "category": "wardrobes",
        "name": "Closet",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "functionTags": [
          "wardrobes"
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "rotation": [
          0,
          0,
          0
        ],
        "scale": [
          1,
          1,
          1
        ]
      }
    },
    "item_cowe8780vnw2j18w": {
      "id": "item_cowe8780vnw2j18w",
      "name": "Sink",
      "type": "item",
      "asset": {
        "id": "sink-mpwnhw5r",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/models/item_model_ZLuuS1FAKRYLTRkN.glb",
        "name": "Sink",
        "tags": [
          "Bathroom floating sink"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.0009755492210388184,
          0.2476077377796173,
          -0.0007567554712295532
        ],
        "source": "community",
        "isDraft": false,
        "category": "columns",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/thumbnail.png",
        "dimensions": [
          1,
          0.5,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/floor-plan.png",
        "functionTags": [
          "columns",
          "sinks",
          "cabinets"
        ]
      },
      "scale": [
        0.8,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -7.667870521545407,
        0.4,
        0.5700000000000004
      ],
      "rotation": [
        0,
        20.420352248333657,
        0
      ]
    },
    "item_dany22d534321s2e": {
      "id": "item_dany22d534321s2e",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        0.9,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -7.8500000000000005,
        0,
        -2.5
      ],
      "rotation": [
        0,
        9.42477796076938,
        0
      ]
    },
    "item_dtrsofg93ewff2ec": {
      "id": "item_dtrsofg93ewff2ec",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        0.7,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -6.300000000000001,
        0,
        -2.5
      ],
      "rotation": [
        0,
        9.42477796076938,
        0
      ]
    },
    "item_dtsdk8v2572ab2yl": {
      "id": "item_dtsdk8v2572ab2yl",
      "name": "Showerhead",
      "side": "back",
      "type": "item",
      "asset": {
        "id": "showerhead-mqsfsfct",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/models/item_model_TZ6CRNoOLCsTOS8Z.glb",
        "name": "Showerhead",
        "tags": [
          "Fixture",
          "Showerhead"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.019445911049842834,
          0.33513043701648715,
          0.000500180758535862
        ],
        "source": "library",
        "isDraft": false,
        "attachTo": "wall-side",
        "category": "showers",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/thumbnail.png",
        "dimensions": [
          0.57,
          1.56,
          0.58
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/floor-plan.png",
        "functionTags": [
          "showers"
        ]
      },
      "scale": [
        0.7,
        0.7,
        0.7
      ],
      "wallT": 0.7555555555555565,
      "object": "node",
      "wallId": "wall_at187p89ap23ki8w",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "wall_7s021sc63nm7hmrl",
      "position": [
        2.7,
        0.7791176820195971,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ]
    },
    "item_e4strh42a4214nfy": {
      "id": "item_e4strh42a4214nfy",
      "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
      "type": "item",
      "asset": {
        "id": "ctlg-gd-04-010-016-mra34ejn",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/models/item_model_Sl2GjaOKnBSIkAVF.glb",
        "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.6655630066912079,
          0.001999922329713577,
          0.05081197261875771
        ],
        "source": "mine",
        "isDraft": true,
        "category": "showers",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/thumbnail.png",
        "dimensions": [
          1.34,
          1.91,
          0.14
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/floor-plan.png",
        "functionTags": [
          "showers"
        ]
      },
      "scale": [
        0.9,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        4.818217292785644,
        0,
        -4.692
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ]
    },
    "item_exocg9phwfk35yyc": {
      "id": "item_exocg9phwfk35yyc",
      "name": "Livingroom Chair",
      "type": "item",
      "asset": {
        "id": "livingroom-chair",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/livingroom-chair/model.glb",
        "name": "Livingroom Chair",
        "tags": [
          "chair",
          "armchair",
          "seating",
          "lounge",
          "upholstered",
          "modern",
          "fabric",
          "furniture",
          "minimalist",
          "comfort",
          "accent",
          "lounger"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -3.5762786865234375e-7,
          0.0000549523756490089,
          0.0052942633628845215
        ],
        "source": "library",
        "isDraft": false,
        "category": "armchairs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/livingroom-chair/thumbnail.png",
        "dimensions": [
          1.1,
          0.75,
          1.07
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/livingroom-chair/floor-plan.png",
        "functionTags": [
          "armchairs"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        10.75,
        0,
        -2.7
      ],
      "rotation": [
        0,
        10.210176124166829,
        0
      ]
    },
    "item_f78105xm9j2ot1ud": {
      "id": "item_f78105xm9j2ot1ud",
      "name": "Office Table",
      "type": "item",
      "asset": {
        "id": "office-table",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/office-table/model.glb",
        "name": "Office Table",
        "tags": [
          "desk",
          "table",
          "workstation",
          "furniture",
          "office",
          "work",
          "study",
          "writing",
          "modern",
          "minimalist",
          "industrial",
          "wood",
          "metal"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.00007927417755126953,
          1.6806073688258039e-7,
          -0.005174309015274048
        ],
        "source": "library",
        "isDraft": false,
        "surface": {
          "height": 0.75
        },
        "category": "desks",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/office-table/thumbnail.png",
        "dimensions": [
          1.51,
          0.76,
          0.62
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/office-table/floor-plan.png",
        "functionTags": [
          "desks"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        1.168790289567773,
        0,
        1.6746530937967814
      ],
      "rotation": [
        0,
        9.42477796076938,
        0
      ]
    },
    "item_gao0xpyfxrkmsz2y": {
      "id": "item_gao0xpyfxrkmsz2y",
      "name": "Sink",
      "type": "item",
      "asset": {
        "id": "sink-mpwnhw5r",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/models/item_model_ZLuuS1FAKRYLTRkN.glb",
        "name": "Sink",
        "tags": [
          "Bathroom floating sink"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.0009755492210388184,
          0.2476077377796173,
          -0.0007567554712295532
        ],
        "source": "community",
        "isDraft": false,
        "category": "columns",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/thumbnail.png",
        "dimensions": [
          1,
          0.5,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/floor-plan.png",
        "functionTags": [
          "columns",
          "sinks",
          "cabinets"
        ]
      },
      "scale": [
        0.8,
        1,
        0.8
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -10.18581729888916,
        0.4,
        -6.345
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ]
    },
    "item_gedhhy4u9sotya5v": {
      "id": "item_gedhhy4u9sotya5v",
      "name": "Kitchen",
      "type": "item",
      "asset": {
        "id": "kitchen",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/model.glb",
        "name": "Kitchen",
        "tags": [
          "kitchen",
          "cabinetry",
          "cabinet",
          "island",
          "cooking",
          "storage",
          "modern",
          "contemporary",
          "minimalist",
          "wood",
          "marble",
          "culinary",
          "pantry"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000029206275939941406,
          2.466928776811983e-7,
          2.9802322387695312e-8
        ],
        "source": "library",
        "isDraft": false,
        "surface": {
          "height": 0.797
        },
        "category": "sinks",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/thumbnail.png",
        "dimensions": [
          2.38,
          1.03,
          0.84
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/floor-plan.png",
        "functionTags": [
          "sinks",
          "cabinets"
        ]
      },
      "scale": [
        0.6,
        1,
        0.8
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -10.769999999999998,
        0,
        1.62
      ],
      "rotation": [
        0,
        4.71238898038469,
        0
      ]
    },
    "item_gfwnftffebe6mh54": {
      "id": "item_gfwnftffebe6mh54",
      "name": "Livingroom Chair",
      "type": "item",
      "asset": {
        "id": "livingroom-chair",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/livingroom-chair/model.glb",
        "name": "Livingroom Chair",
        "tags": [
          "chair",
          "armchair",
          "seating",
          "lounge",
          "upholstered",
          "modern",
          "fabric",
          "furniture",
          "minimalist",
          "comfort",
          "accent",
          "lounger"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -3.5762786865234375e-7,
          0.0000549523756490089,
          0.0052942633628845215
        ],
        "source": "library",
        "isDraft": false,
        "category": "armchairs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/livingroom-chair/thumbnail.png",
        "dimensions": [
          1.1,
          0.75,
          1.07
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/livingroom-chair/floor-plan.png",
        "functionTags": [
          "armchairs"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -0.5,
        0,
        -6.000000000000001
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ]
    },
    "item_gkj2403uykwaepxq": {
      "id": "item_gkj2403uykwaepxq",
      "name": "Showerhead",
      "side": "front",
      "type": "item",
      "asset": {
        "id": "showerhead-mqsfsfct",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/models/item_model_TZ6CRNoOLCsTOS8Z.glb",
        "name": "Showerhead",
        "tags": [
          "Fixture",
          "Showerhead"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.019445911049842834,
          0.33513043701648715,
          0.000500180758535862
        ],
        "source": "library",
        "isDraft": false,
        "attachTo": "wall-side",
        "category": "showers",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/thumbnail.png",
        "dimensions": [
          0.57,
          1.56,
          0.58
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/floor-plan.png",
        "functionTags": [
          "showers"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "wallT": 0.7067705036271622,
      "object": "node",
      "wallId": "wall_kl7y48oc2hxpi2k9",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "wall_kl7y48oc2hxpi2k9",
      "position": [
        1.4883162879943845,
        0.6091972523031202,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ]
    },
    "item_hplbdhrmca9acshe": {
      "object": "node",
      "id": "item_hplbdhrmca9acshe",
      "type": "item",
      "name": "Office Table",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        2.3000000000000003,
        0,
        -8.299999999999999
      ],
      "rotation": [
        0,
        10.995574287564276,
        0
      ],
      "scale": [
        0.8,
        1,
        1
      ],
      "children": [
        "item_4akv5mlmq2ywzfyh"
      ],
      "asset": {
        "id": "office-table",
        "category": "desks",
        "name": "Office Table",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/office-table/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/office-table/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/office-table/model.glb",
        "dimensions": [
          1.51,
          0.76,
          0.62
        ],
        "tags": [
          "desk",
          "table",
          "workstation",
          "furniture",
          "office",
          "work",
          "study",
          "writing",
          "modern",
          "minimalist",
          "industrial",
          "wood",
          "metal"
        ],
        "functionTags": [
          "desks"
        ],
        "offset": [
          -0.00007927417755126953,
          1.6806073688258039e-7,
          -0.005174309015274048
        ],
        "rotation": [
          0,
          0,
          0
        ],
        "scale": [
          1,
          1,
          1
        ],
        "surface": {
          "height": 0.75
        }
      }
    },
    "item_ht7u86ckuphquvci": {
      "id": "item_ht7u86ckuphquvci",
      "name": "Kitchen",
      "type": "item",
      "asset": {
        "id": "kitchen",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/model.glb",
        "name": "Kitchen",
        "tags": [
          "kitchen",
          "cabinetry",
          "cabinet",
          "island",
          "cooking",
          "storage",
          "modern",
          "contemporary",
          "minimalist",
          "wood",
          "marble",
          "culinary",
          "pantry"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000029206275939941406,
          2.466928776811983e-7,
          2.9802322387695312e-8
        ],
        "source": "library",
        "isDraft": false,
        "surface": {
          "height": 0.797
        },
        "category": "cabinets",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/thumbnail.png",
        "dimensions": [
          2.38,
          1.03,
          0.84
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/floor-plan.png",
        "functionTags": [
          "cabinets"
        ]
      },
      "scale": [
        1.2,
        1,
        0.7
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -11.729999999999999,
        0,
        -5.36
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ]
    },
    "item_hy6l9qjmcpdvpmpj": {
      "object": "node",
      "id": "item_hy6l9qjmcpdvpmpj",
      "type": "item",
      "name": "master Bed",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -9.259691581726075,
        0,
        1.496331338584422
      ],
      "rotation": [
        0,
        18.84955592153876,
        0
      ],
      "scale": [
        0.75,
        1,
        0.9
      ],
      "children": [],
      "asset": {
        "id": "master-bed-mq0d28zj",
        "category": "columns",
        "name": "master Bed",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_1l9aU1BqeLTv2ndm/master-bed-mq0d28zj/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_1l9aU1BqeLTv2ndm/master-bed-mq0d28zj/floor-plan.png",
        "source": "community",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_1l9aU1BqeLTv2ndm/master-bed-mq0d28zj/models/item_model_sPhAXBbdaZWSJhyZ.glb",
        "dimensions": [
          2.03,
          1.34,
          2.3
        ],
        "functionTags": [
          "columns",
          "double-beds"
        ],
        "offset": [
          0.0014447644352912903,
          0.6692218095064164,
          -0.003934673964977264
        ],
        "rotation": [
          0,
          0,
          0
        ],
        "scale": [
          2.3,
          2.3,
          2.3
        ]
      }
    },
    "item_i6oqa8crrz268qt0": {
      "id": "item_i6oqa8crrz268qt0",
      "name": "Dining Chair",
      "type": "item",
      "asset": {
        "id": "dining-chair",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/model.glb",
        "name": "Dining Chair",
        "tags": [
          "chair",
          "seating",
          "dining",
          "furniture",
          "modern",
          "wood",
          "upholstered",
          "kitchen",
          "seat",
          "minimalist",
          "timber",
          "bistro"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          4.3958425521850586e-7,
          4.045574542033137e-8,
          0.001551710069179535
        ],
        "source": "library",
        "isDraft": false,
        "category": "dining-chairs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/thumbnail.png",
        "dimensions": [
          0.47,
          0.87,
          0.5
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/floor-plan.png",
        "functionTags": [
          "dining-chairs"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {
        "isTransient": true
      },
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -6.072193813323974,
        0,
        -8.435280227661131
      ],
      "rotation": [
        0,
        -1.5707963267948961,
        0
      ]
    },
    "item_ikc8xdbqu9ldpa36": {
      "id": "item_ikc8xdbqu9ldpa36",
      "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
      "type": "item",
      "asset": {
        "id": "ctlg-gd-04-010-016-mra34ejn",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/models/item_model_Sl2GjaOKnBSIkAVF.glb",
        "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.6655630066912079,
          0.001999922329713577,
          0.05081197261875771
        ],
        "source": "mine",
        "isDraft": true,
        "category": "showers",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/thumbnail.png",
        "dimensions": [
          1.34,
          1.91,
          0.14
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/floor-plan.png",
        "functionTags": [
          "showers"
        ]
      },
      "scale": [
        1.4,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        4.925000000000002,
        0,
        -2.8750000000000004
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ]
    },
    "item_ipiw4y4nw2q4dp8k": {
      "id": "item_ipiw4y4nw2q4dp8k",
      "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
      "type": "item",
      "asset": {
        "id": "ctlg-gd-04-010-016-mra34ejn",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/models/item_model_Sl2GjaOKnBSIkAVF.glb",
        "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.6655630066912079,
          0.001999922329713577,
          0.05081197261875771
        ],
        "source": "mine",
        "isDraft": true,
        "category": "showers",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/thumbnail.png",
        "dimensions": [
          1.34,
          1.91,
          0.14
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/floor-plan.png",
        "functionTags": [
          "showers"
        ]
      },
      "scale": [
        1.3,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -9.721000000000002,
        0,
        -4.754999999999999
      ],
      "rotation": [
        0,
        0,
        0
      ]
    },
    "item_j5cek6k0nr6jf7ae": {
      "id": "item_j5cek6k0nr6jf7ae",
      "name": "Dining Chair",
      "type": "item",
      "asset": {
        "id": "dining-chair",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/model.glb",
        "name": "Dining Chair",
        "tags": [
          "chair",
          "seating",
          "dining",
          "furniture",
          "modern",
          "wood",
          "upholstered",
          "kitchen",
          "seat",
          "minimalist",
          "timber",
          "bistro"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          4.3958425521850586e-7,
          4.045574542033137e-8,
          0.001551710069179535
        ],
        "source": "library",
        "isDraft": false,
        "category": "dining-chairs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/thumbnail.png",
        "dimensions": [
          0.47,
          0.87,
          0.5
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/floor-plan.png",
        "functionTags": [
          "dining-chairs"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -6.550000000000001,
        0,
        -9.15
      ],
      "rotation": [
        0,
        18.06415775814131,
        0
      ]
    },
    "item_j68jyi0mxu7g4d5d": {
      "id": "item_j68jyi0mxu7g4d5d",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        1.2,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        6.25,
        0,
        -7.75
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ]
    },
    "item_jtjguqp7gipl7m5k": {
      "id": "item_jtjguqp7gipl7m5k",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        0.9,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -8.400000000000002,
        0,
        -4.800000000000001
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ]
    },
    "item_k8jiyli38lfhrpwo": {
      "id": "item_k8jiyli38lfhrpwo",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        0.8,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -7,
        0,
        2.15
      ],
      "rotation": [
        0,
        9.42477796076938,
        0
      ]
    },
    "item_kelrsbcaiecj34h0": {
      "id": "item_kelrsbcaiecj34h0",
      "name": "Kitchen",
      "type": "item",
      "asset": {
        "id": "kitchen",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/model.glb",
        "name": "Kitchen",
        "tags": [
          "kitchen",
          "cabinetry",
          "cabinet",
          "island",
          "cooking",
          "storage",
          "modern",
          "contemporary",
          "minimalist",
          "wood",
          "marble",
          "culinary",
          "pantry"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000029206275939941406,
          2.466928776811983e-7,
          2.9802322387695312e-8
        ],
        "source": "library",
        "isDraft": false,
        "surface": {
          "height": 0.797
        },
        "category": "cabinets",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/thumbnail.png",
        "dimensions": [
          2.38,
          1.03,
          0.84
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/floor-plan.png",
        "functionTags": [
          "cabinets"
        ]
      },
      "scale": [
        1.2,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -6.679999999999999,
        0,
        -4.860000000000001
      ],
      "rotation": [
        0,
        12.566370614359172,
        0
      ]
    },
    "item_krkri3xwj1ax7n5o": {
      "object": "node",
      "id": "item_krkri3xwj1ax7n5o",
      "type": "item",
      "name": "Bedside Table",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        3.854155630497387,
        0,
        -5.76367569940208
      ],
      "rotation": [
        0,
        15.70796326794897,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "bedside-table",
        "category": "coffee-tables",
        "name": "Bedside Table",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bedside-table/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bedside-table/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bedside-table/model.glb",
        "dimensions": [
          0.45,
          0.48,
          0.46
        ],
        "tags": [
          "nightstand",
          "table",
          "bedroom",
          "storage",
          "wood",
          "modern",
          "minimalist",
          "stand",
          "drawer",
          "furniture",
          "cabinet",
          "bedside"
        ],
        "functionTags": [
          "coffee-tables"
        ],
        "offset": [
          0.0005035474896430969,
          6.364190596741537e-8,
          -0.006219811737537384
        ],
        "rotation": [
          0,
          0,
          0
        ],
        "scale": [
          1,
          1,
          1
        ],
        "surface": {
          "height": 0.48
        }
      }
    },
    "item_kv6htmthblly6kyk": {
      "id": "item_kv6htmthblly6kyk",
      "name": "Standing Desk",
      "type": "item",
      "asset": {
        "id": "standing-desk-mo8wgz95",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/models/item_model_zzZ58018waP8VY6Z.glb",
        "name": "Standing Desk",
        "tags": [
          "office"
        ],
        "scale": [
          1.4,
          1.4,
          1.4
        ],
        "offset": [
          0.00004610419273376465,
          0.4203098952770233,
          0.0018924519419670216
        ],
        "source": "library",
        "isDraft": false,
        "category": "desks",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/thumbnail.png",
        "dimensions": [
          1.41,
          0.85,
          0.68
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/floor-plan.png",
        "functionTags": [
          "desks"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -6.375,
        0,
        3.1500000000000004
      ],
      "rotation": [
        0,
        6.283185307179586,
        0
      ]
    },
    "item_lof6kk6hy8bve6xa": {
      "id": "item_lof6kk6hy8bve6xa",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        0.6,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -8.200000000000001,
        0,
        2.15
      ],
      "rotation": [
        0,
        15.707963267948966,
        0
      ]
    },
    "item_m269brfz11fyc29c": {
      "id": "item_m269brfz11fyc29c",
      "name": "Dining Chair",
      "type": "item",
      "asset": {
        "id": "dining-chair",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/model.glb",
        "name": "Dining Chair",
        "tags": [
          "chair",
          "seating",
          "dining",
          "furniture",
          "modern",
          "wood",
          "upholstered",
          "kitchen",
          "seat",
          "minimalist",
          "timber",
          "bistro"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          4.3958425521850586e-7,
          4.045574542033137e-8,
          0.001551710069179535
        ],
        "source": "library",
        "isDraft": false,
        "category": "dining-chairs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/thumbnail.png",
        "dimensions": [
          0.47,
          0.87,
          0.5
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/floor-plan.png",
        "functionTags": [
          "dining-chairs"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -6.300000000000001,
        0,
        -5.6000000000000005
      ],
      "rotation": [
        0,
        0,
        0
      ]
    },
    "item_mnwpz9skkf8qlflq": {
      "id": "item_mnwpz9skkf8qlflq",
      "name": "Tesla Model Y",
      "type": "item",
      "asset": {
        "id": "tesla",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/tesla/model.glb",
        "name": "Tesla Model Y",
        "tags": [
          "tesla",
          "car",
          "vehicle",
          "automobile",
          "electric",
          "modern",
          "minimalist",
          "sleek",
          "metal",
          "glass",
          "luxury",
          "transportation",
          "commuting"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.0038899771975877684,
          -0.01017908506396381,
          -0.01475837322021789
        ],
        "source": "library",
        "isDraft": false,
        "category": "vehicles",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/tesla/thumbnail.png",
        "dimensions": [
          1.98,
          1.62,
          4.76
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/tesla/floor-plan.png",
        "functionTags": [
          "vehicles"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {
        "isTransient": true
      },
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -7.420000000000001,
        0,
        8.19
      ],
      "rotation": [
        0,
        1.568895021487244,
        0
      ]
    },
    "item_o3chnfgkzrlv5jut": {
      "id": "item_o3chnfgkzrlv5jut",
      "name": "Bathtub",
      "type": "item",
      "asset": {
        "id": "bathtub",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bathtub/model.glb",
        "name": "Bathtub",
        "tags": [
          "bathtub",
          "tub",
          "bath",
          "soaking",
          "modern",
          "minimalist",
          "porcelain",
          "acrylic",
          "ceramic",
          "bathroom",
          "relaxation",
          "spa"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -4.172325134277344e-7,
          2.690202336452785e-7,
          8.642673492431641e-7
        ],
        "source": "library",
        "isDraft": false,
        "category": "bathtubs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bathtub/thumbnail.png",
        "dimensions": [
          2.34,
          0.79,
          1.11
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bathtub/floor-plan.png",
        "functionTags": [
          "bathtubs"
        ]
      },
      "scale": [
        0.8,
        1,
        0.8
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {
        "isTransient": true
      },
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        6.469999999999999,
        0,
        -2.8499999999999996
      ],
      "rotation": [
        0,
        10.995574287564276,
        0
      ]
    },
    "item_o91slv42stvmxeys": {
      "id": "item_o91slv42stvmxeys",
      "name": "AC block",
      "type": "item",
      "asset": {
        "id": "ac-block",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/model.glb",
        "name": "AC block",
        "tags": [
          "conditioner",
          "cooler",
          "hvac",
          "cooling",
          "appliance",
          "vent",
          "modern",
          "minimalist",
          "metal",
          "industrial",
          "white",
          "utility",
          "ventilation",
          "unit",
          "climate"
        ],
        "scale": [
          0.79,
          0.79,
          0.79
        ],
        "offset": [
          0,
          0,
          0
        ],
        "source": "library",
        "isDraft": false,
        "category": "climate-appliances",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/thumbnail.png",
        "dimensions": [
          1.06,
          0.95,
          1.06
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/floor-plan.png",
        "functionTags": [
          "climate-appliances"
        ]
      },
      "scale": [
        0.65,
        2,
        0.65
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -10.8,
        0,
        -1.7000000000000002
      ],
      "rotation": [
        0,
        0,
        0
      ]
    },
    "item_ot2si54sru1var07": {
      "id": "item_ot2si54sru1var07",
      "name": "Herman Miller Aeron",
      "type": "item",
      "asset": {
        "id": "herman-miller-aeron-mo8x36k9",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/models/item_model_YshL4maC8cHtry5c.glb",
        "name": "Herman Miller Aeron",
        "tags": [
          "office"
        ],
        "scale": [
          1.05,
          1.05,
          1.05
        ],
        "offset": [
          -0.0012764498591423257,
          0.5256464391946792,
          0.0028421513736248127
        ],
        "source": "library",
        "isDraft": false,
        "category": "office-chairs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/thumbnail.png",
        "dimensions": [
          0.67,
          1.06,
          0.66
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/floor-plan.png",
        "functionTags": [
          "office-chairs"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        1.1957106781186553,
        0,
        0.9542893218813462
      ],
      "rotation": [
        0,
        18.849555921538766,
        0
      ]
    },
    "item_ousmkp19jbxsvuhz": {
      "id": "item_ousmkp19jbxsvuhz",
      "name": "AC block",
      "type": "item",
      "asset": {
        "id": "ac-block",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/model.glb",
        "name": "AC block",
        "tags": [
          "conditioner",
          "cooler",
          "hvac",
          "cooling",
          "appliance",
          "vent",
          "modern",
          "minimalist",
          "metal",
          "industrial",
          "white",
          "utility",
          "ventilation",
          "unit",
          "climate"
        ],
        "scale": [
          0.79,
          0.79,
          0.79
        ],
        "offset": [
          0,
          0,
          0
        ],
        "source": "library",
        "isDraft": false,
        "category": "climate-appliances",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/thumbnail.png",
        "dimensions": [
          1.06,
          0.95,
          1.06
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/floor-plan.png",
        "functionTags": [
          "climate-appliances"
        ]
      },
      "scale": [
        0.5,
        1.6,
        0.6
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -10,
        0,
        -3.2500000000000004
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ]
    },
    "item_p10iyo2651hbf4s6": {
      "id": "item_p10iyo2651hbf4s6",
      "name": "Kitchen Bar",
      "type": "item",
      "asset": {
        "id": "wooden-kitchen-bar-moa2hhh4",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/models/item_model_c6iR1M2eE2I8k5M3.glb",
        "name": "Kitchen Bar",
        "tags": [
          "bar",
          "counter",
          "island",
          "breakfast",
          "modern",
          "contemporary",
          "wood",
          "stone",
          "quartz",
          "seating",
          "dining",
          "prep",
          "entertaining"
        ],
        "scale": [
          2.49,
          2.49,
          2.49
        ],
        "offset": [
          0.0003166446089745145,
          0.5321682389080525,
          -0.002378878891468039
        ],
        "source": "library",
        "isDraft": false,
        "surface": {
          "height": 1.06
        },
        "category": "counters",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/thumbnail.png",
        "dimensions": [
          2.5,
          1.06,
          0.96
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/floor-plan.png",
        "functionTags": [
          "counters"
        ]
      },
      "scale": [
        0.7,
        0.74,
        0.62
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -9.15,
        0,
        -4.8500000000000005
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ]
    },
    "item_p68narnplomx7l54": {
      "id": "item_p68narnplomx7l54",
      "name": "马桶",
      "type": "item",
      "asset": {
        "id": "-mq0n6sz6",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/models/item_model_mp3ur91Y5QHaWEIY.glb",
        "name": "马桶",
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.41681656118384897,
          1.057109955127089e-11,
          0.385451077481526
        ],
        "source": "mine",
        "isDraft": false,
        "category": "toilets",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/thumbnail.png",
        "dimensions": [
          0.49,
          0.57,
          0.7
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/floor-plan.png",
        "functionTags": [
          "toilets"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -7.619762020111085,
        0,
        -0.3484272003173826
      ],
      "rotation": [
        0,
        45.553093477052,
        0
      ]
    },
    "item_puy4khda7tmn7ifu": {
      "id": "item_puy4khda7tmn7ifu",
      "name": "Round Dining Table",
      "type": "item",
      "asset": {
        "id": "round-dining-table-mqs0yfyt",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/round-dining-table-mqs0yfyt/models/item_model_YyxFuPfMhIhFiy4y.glb",
        "name": "Round Dining Table",
        "tags": [
          "Dining",
          "Table"
        ],
        "scale": [
          0.8,
          0.8,
          0.8
        ],
        "offset": [
          1.4901161193847656e-7,
          6.897352022861014e-8,
          1.4901161193847656e-7
        ],
        "source": "library",
        "isDraft": false,
        "category": "dining-tables",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/round-dining-table-mqs0yfyt/thumbnail.png",
        "dimensions": [
          1.5,
          0.75,
          1.59
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/round-dining-table-mqs0yfyt/floor-plan.png",
        "functionTags": [
          "dining-tables"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -6.95,
        0,
        -8.450000000000001
      ],
      "rotation": [
        0,
        0,
        0
      ]
    },
    "item_qmhod8evoai6fg1z": {
      "id": "item_qmhod8evoai6fg1z",
      "name": "master bed",
      "type": "item",
      "asset": {
        "id": "master-bed-mpz60tb0",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/master-bed-mpz60tb0/models/item_model_F3avXI7HsEuEq38Q.glb",
        "name": "master bed",
        "tags": [
          "bed"
        ],
        "scale": [
          1.8,
          2,
          2.5
        ],
        "offset": [
          -0.00008432865142821155,
          0.5091416835784912,
          0.0006441771984100342
        ],
        "source": "mine",
        "isDraft": true,
        "category": "double-beds",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/master-bed-mpz60tb0/thumbnail.png",
        "dimensions": [
          1.8,
          1.03,
          1.93
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/master-bed-mpz60tb0/floor-plan.png",
        "functionTags": [
          "double-beds"
        ]
      },
      "scale": [
        1.1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        9.139371986389161,
        0,
        -2.8014001274108886
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ]
    },
    "item_qpudkwziu27qu509": {
      "id": "item_qpudkwziu27qu509",
      "name": "Bedside Table",
      "type": "item",
      "asset": {
        "id": "bedside-table",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bedside-table/model.glb",
        "name": "Bedside Table",
        "tags": [
          "nightstand",
          "table",
          "bedroom",
          "storage",
          "wood",
          "modern",
          "minimalist",
          "stand",
          "drawer",
          "furniture",
          "cabinet",
          "bedside"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.0005035474896430969,
          6.364190596741537e-8,
          -0.006219811737537384
        ],
        "source": "library",
        "isDraft": false,
        "surface": {
          "height": 0.48
        },
        "category": "coffee-tables",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bedside-table/thumbnail.png",
        "dimensions": [
          0.45,
          0.48,
          0.46
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bedside-table/floor-plan.png",
        "functionTags": [
          "coffee-tables"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        7.697213150024413,
        0,
        -2.1164001274108886
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ]
    },
    "item_qt7unfxoxp0opoa1": {
      "id": "item_qt7unfxoxp0opoa1",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        0.9,
        1,
        0.7
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        1.7,
        0,
        -0.29999999999999993
      ],
      "rotation": [
        0,
        9.42477796076938,
        0
      ]
    },
    "item_rpameqlewfesmqq3": {
      "id": "item_rpameqlewfesmqq3",
      "name": "Toilet",
      "type": "item",
      "asset": {
        "id": "toilet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/toilet/model.glb",
        "name": "Toilet",
        "tags": [
          "floor",
          "large"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000010058283805847168,
          6.139533326177116e-14,
          -0.23925671353936195
        ],
        "source": "library",
        "isDraft": false,
        "category": "toilets",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/toilet/thumbnail.png",
        "dimensions": [
          0.42,
          0.82,
          0.72
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/toilet/floor-plan.png",
        "functionTags": [
          "toilets"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        4.325000000000001,
        0,
        -2.2750000000000017
      ],
      "rotation": [
        0,
        9.42477796076938,
        0
      ]
    },
    "item_s3kq6wfvjffd693u": {
      "id": "item_s3kq6wfvjffd693u",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        0.8,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -8.005396020412446,
        0,
        -0.1500000000000008
      ],
      "rotation": [
        0,
        12.566370614359176,
        0
      ]
    },
    "item_s5pl3fjik6zh45e8": {
      "id": "item_s5pl3fjik6zh45e8",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        1.2,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -7.619999999999999,
        0,
        -3.21
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ]
    },
    "item_sgt4copz63u05m9d": {
      "id": "item_sgt4copz63u05m9d",
      "name": "Round Dining Table",
      "type": "item",
      "asset": {
        "id": "round-dining-table-mqs0yfyt",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/round-dining-table-mqs0yfyt/models/item_model_YyxFuPfMhIhFiy4y.glb",
        "name": "Round Dining Table",
        "tags": [
          "Dining",
          "Table"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          1.4901161193847656e-7,
          6.897352022861014e-8,
          1.4901161193847656e-7
        ],
        "source": "library",
        "isDraft": false,
        "category": "dining-tables",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/round-dining-table-mqs0yfyt/thumbnail.png",
        "dimensions": [
          2,
          0.94,
          2
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/round-dining-table-mqs0yfyt/floor-plan.png",
        "functionTags": [
          "dining-tables"
        ]
      },
      "scale": [
        0.4,
        0.4,
        0.4
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        1.398316287994385,
        0,
        -1.2029302179091854
      ],
      "rotation": [
        0,
        0,
        0
      ]
    },
    "item_snr2dk1sdwyf09sr": {
      "id": "item_snr2dk1sdwyf09sr",
      "name": "Showerhead",
      "side": "back",
      "type": "item",
      "asset": {
        "id": "showerhead-mqsfsfct",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/models/item_model_TZ6CRNoOLCsTOS8Z.glb",
        "name": "Showerhead",
        "tags": [
          "Fixture",
          "Showerhead"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.019445911049842834,
          0.33513043701648715,
          0.000500180758535862
        ],
        "source": "library",
        "isDraft": false,
        "attachTo": "wall-side",
        "category": "showers",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/thumbnail.png",
        "dimensions": [
          0.57,
          1.56,
          0.58
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/floor-plan.png",
        "functionTags": [
          "showers"
        ]
      },
      "scale": [
        0.7,
        0.7,
        0.7
      ],
      "wallT": 0.3030303030303031,
      "object": "node",
      "wallId": "wall_l0wduir1mgtwld7f",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "wall_l0wduir1mgtwld7f",
      "position": [
        0.4,
        0.7791176820195971,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ]
    },
    "item_su66qzhxe1vng8qs": {
      "id": "item_su66qzhxe1vng8qs",
      "name": "Dining Chair",
      "type": "item",
      "asset": {
        "id": "dining-chair",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/model.glb",
        "name": "Dining Chair",
        "tags": [
          "chair",
          "seating",
          "dining",
          "furniture",
          "modern",
          "wood",
          "upholstered",
          "kitchen",
          "seat",
          "minimalist",
          "timber",
          "bistro"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          4.3958425521850586e-7,
          4.045574542033137e-8,
          0.001551710069179535
        ],
        "source": "library",
        "isDraft": false,
        "category": "dining-chairs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/thumbnail.png",
        "dimensions": [
          0.47,
          0.87,
          0.5
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/floor-plan.png",
        "functionTags": [
          "dining-chairs"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -7.45,
        0,
        -7.75
      ],
      "rotation": [
        0,
        33.772121026090275,
        0
      ]
    },
    "item_sxxpx8773ykhyjzp": {
      "id": "item_sxxpx8773ykhyjzp",
      "name": "Showerhead",
      "side": "front",
      "type": "item",
      "asset": {
        "id": "showerhead-mqsfsfct",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/models/item_model_TZ6CRNoOLCsTOS8Z.glb",
        "name": "Showerhead",
        "tags": [
          "Fixture",
          "Showerhead"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.019445911049842834,
          0.33513043701648715,
          0.000500180758535862
        ],
        "source": "library",
        "isDraft": false,
        "attachTo": "wall-side",
        "category": "showers",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/thumbnail.png",
        "dimensions": [
          0.57,
          1.56,
          0.58
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/floor-plan.png",
        "functionTags": [
          "showers"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "wallT": 0.33333333333333337,
      "object": "node",
      "wallId": "wall_f7d71yf5kpffhcl0",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "wall_f7d71yf5kpffhcl0",
      "position": [
        2.8000000000000003,
        0.2,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ]
    },
    "item_t7gztzebyd8isia2": {
      "id": "item_t7gztzebyd8isia2",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        0.8,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -8.440000000000001,
        0,
        -4.37
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ]
    },
    "item_t7ylyfrlshqzfqpq": {
      "id": "item_t7ylyfrlshqzfqpq",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        0.8,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -6.425396020412446,
        0,
        -0.14715720295905987
      ],
      "rotation": [
        0,
        12.566370614359176,
        0
      ]
    },
    "item_tbac0ek6qdmwo1ug": {
      "id": "item_tbac0ek6qdmwo1ug",
      "name": "AC block",
      "type": "item",
      "asset": {
        "id": "ac-block",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/model.glb",
        "name": "AC block",
        "tags": [
          "conditioner",
          "cooler",
          "hvac",
          "cooling",
          "appliance",
          "vent",
          "modern",
          "minimalist",
          "metal",
          "industrial",
          "white",
          "utility",
          "ventilation",
          "unit",
          "climate"
        ],
        "scale": [
          0.79,
          0.79,
          0.79
        ],
        "offset": [
          0,
          0,
          0
        ],
        "source": "library",
        "isDraft": false,
        "category": "climate-appliances",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/thumbnail.png",
        "dimensions": [
          1.06,
          0.95,
          1.06
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/ac-block/floor-plan.png",
        "functionTags": [
          "climate-appliances"
        ]
      },
      "scale": [
        0.5,
        1.6,
        0.6
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -9.250000000000004,
        0,
        -3.1999999999999997
      ],
      "rotation": [
        0,
        0,
        0
      ]
    },
    "item_tltmggpxo9dfg2e2": {
      "id": "item_tltmggpxo9dfg2e2",
      "name": "Kitchen",
      "type": "item",
      "asset": {
        "id": "kitchen",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/model.glb",
        "name": "Kitchen",
        "tags": [
          "kitchen",
          "cabinetry",
          "cabinet",
          "island",
          "cooking",
          "storage",
          "modern",
          "contemporary",
          "minimalist",
          "wood",
          "marble",
          "culinary",
          "pantry"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000029206275939941406,
          2.466928776811983e-7,
          2.9802322387695312e-8
        ],
        "source": "library",
        "isDraft": false,
        "surface": {
          "height": 0.797
        },
        "category": "sinks",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/thumbnail.png",
        "dimensions": [
          2.38,
          1.03,
          0.84
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/floor-plan.png",
        "functionTags": [
          "sinks",
          "cabinets"
        ]
      },
      "scale": [
        1,
        1,
        0.7
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        1.48,
        0,
        -3.7800000000000007
      ],
      "rotation": [
        0,
        9.42477796076938,
        0
      ]
    },
    "item_ttq70o7yr8l4lhwf": {
      "id": "item_ttq70o7yr8l4lhwf",
      "name": "马桶",
      "type": "item",
      "asset": {
        "id": "-mq0n6sz6",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/models/item_model_mp3ur91Y5QHaWEIY.glb",
        "name": "马桶",
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.41681656118384897,
          1.057109955127089e-11,
          0.385451077481526
        ],
        "source": "mine",
        "isDraft": false,
        "category": "toilets",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/thumbnail.png",
        "dimensions": [
          0.49,
          0.57,
          0.7
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/floor-plan.png",
        "functionTags": [
          "toilets"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -10.125817298889162,
        0,
        -5.291959948539735
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ]
    },
    "item_uct1sowpn5hgy53g": {
      "id": "item_uct1sowpn5hgy53g",
      "name": "Dining Chair",
      "type": "item",
      "asset": {
        "id": "dining-chair",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/model.glb",
        "name": "Dining Chair",
        "tags": [
          "chair",
          "seating",
          "dining",
          "furniture",
          "modern",
          "wood",
          "upholstered",
          "kitchen",
          "seat",
          "minimalist",
          "timber",
          "bistro"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          4.3958425521850586e-7,
          4.045574542033137e-8,
          0.001551710069179535
        ],
        "source": "library",
        "isDraft": false,
        "category": "dining-chairs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/thumbnail.png",
        "dimensions": [
          0.47,
          0.87,
          0.5
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/floor-plan.png",
        "functionTags": [
          "dining-chairs"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -6.550000000000001,
        0,
        -7.750000000000001
      ],
      "rotation": [
        0,
        22.776546738526,
        0
      ]
    },
    "item_v0rvrdhps2tzx4mo": {
      "id": "item_v0rvrdhps2tzx4mo",
      "name": "Herman Miller Aeron",
      "type": "item",
      "asset": {
        "id": "herman-miller-aeron-mo8x36k9",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/models/item_model_YshL4maC8cHtry5c.glb",
        "name": "Herman Miller Aeron",
        "tags": [
          "office"
        ],
        "scale": [
          1.05,
          1.05,
          1.05
        ],
        "offset": [
          -0.0012764498591423257,
          0.5256464391946792,
          0.0028421513736248127
        ],
        "source": "library",
        "isDraft": false,
        "category": "office-chairs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/thumbnail.png",
        "dimensions": [
          0.67,
          1.06,
          0.66
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/floor-plan.png",
        "functionTags": [
          "office-chairs"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -7.989093058418753,
        0,
        -8.159396936033605
      ],
      "rotation": [
        0,
        4.71238898038469,
        0
      ]
    },
    "item_wfzcb6l3yf45mazf": {
      "id": "item_wfzcb6l3yf45mazf",
      "name": "Pool table",
      "type": "item",
      "asset": {
        "id": "pool-table",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/pool-table/model.glb",
        "name": "Pool table",
        "tags": [
          "pool",
          "billiards",
          "snooker",
          "table",
          "recreation",
          "leisure",
          "entertainment",
          "wood",
          "felt",
          "gaming",
          "traditional",
          "luxury",
          "classic",
          "hobby",
          "furniture"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          2.980232238769531e-7,
          2.8219128012096917e-7,
          -9.5367431640625e-7
        ],
        "source": "library",
        "isDraft": false,
        "category": "toys",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/pool-table/thumbnail.png",
        "dimensions": [
          2.11,
          0.98,
          3.5
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/pool-table/floor-plan.png",
        "functionTags": [
          "toys"
        ]
      },
      "scale": [
        0.8,
        0.8,
        0.8
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {
        "isTransient": true
      },
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        9.26115999221802,
        0,
        -6.419664382934568
      ],
      "rotation": [
        0,
        6.283185307179586,
        0
      ]
    },
    "item_x1og46d4md50m302": {
      "id": "item_x1og46d4md50m302",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        0.8,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -5.42,
        0,
        2.15284279704094
      ],
      "rotation": [
        0,
        9.42477796076938,
        0
      ]
    },
    "item_x9ong8o240vab6oc": {
      "id": "item_x9ong8o240vab6oc",
      "name": "master Bed",
      "type": "item",
      "asset": {
        "id": "master-bed-mq0d28zj",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_1l9aU1BqeLTv2ndm/master-bed-mq0d28zj/models/item_model_sPhAXBbdaZWSJhyZ.glb",
        "name": "master Bed",
        "scale": [
          2.3,
          2.3,
          2.3
        ],
        "offset": [
          0.0014447644352912903,
          0.6692218095064164,
          -0.003934673964977264
        ],
        "source": "community",
        "isDraft": false,
        "category": "columns",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_1l9aU1BqeLTv2ndm/master-bed-mq0d28zj/thumbnail.png",
        "dimensions": [
          2.03,
          1.34,
          2.3
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_1l9aU1BqeLTv2ndm/master-bed-mq0d28zj/floor-plan.png",
        "functionTags": [
          "columns",
          "double-beds"
        ]
      },
      "scale": [
        0.75,
        1,
        0.9
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -5.75,
        0,
        -7.15
      ],
      "rotation": [
        0,
        17.27875959474386,
        0
      ]
    },
    "item_xnwmiavf1x9d69f5": {
      "id": "item_xnwmiavf1x9d69f5",
      "name": "Stove",
      "type": "item",
      "asset": {
        "id": "stove",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/stove/model.glb",
        "name": "Stove",
        "tags": [
          "floor",
          "large"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.004298418760299683,
          2.230835320915503e-7,
          -0.05046069622039795
        ],
        "source": "library",
        "isDraft": false,
        "category": "kitchen-appliances",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/stove/thumbnail.png",
        "dimensions": [
          0.92,
          0.85,
          0.76
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/stove/floor-plan.png",
        "functionTags": [
          "kitchen-appliances"
        ]
      },
      "scale": [
        0.7,
        0.7,
        0.7
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -6.449999999999999,
        0,
        -4.800000000000001
      ],
      "rotation": [
        0,
        12.566370614359172,
        0
      ]
    },
    "item_xqcxswzh8m3a6v81": {
      "id": "item_xqcxswzh8m3a6v81",
      "name": "Coffee Table",
      "type": "item",
      "asset": {
        "id": "coffee-table",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/coffee-table/model.glb",
        "name": "Coffee Table",
        "tags": [
          "table",
          "cocktail",
          "wood",
          "modern",
          "minimalist",
          "furniture",
          "living",
          "lounge",
          "walnut",
          "metal",
          "glass",
          "surface",
          "decor"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          5.960464477539063e-8,
          2.1958720708425972e-7,
          0.008858799934387207
        ],
        "source": "library",
        "isDraft": false,
        "surface": {
          "height": 0.3
        },
        "category": "coffee-tables",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/coffee-table/thumbnail.png",
        "dimensions": [
          1.72,
          0.3,
          1.04
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/coffee-table/floor-plan.png",
        "functionTags": [
          "coffee-tables"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -0.6250000000000002,
        0,
        -8.025
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ]
    },
    "item_y57pu4i6rmcz8y1p": {
      "id": "item_y57pu4i6rmcz8y1p",
      "name": "Stove",
      "type": "item",
      "asset": {
        "id": "stove",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/stove/model.glb",
        "name": "Stove",
        "tags": [
          "floor",
          "large"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.004298418760299683,
          2.230835320915503e-7,
          -0.05046069622039795
        ],
        "source": "library",
        "isDraft": false,
        "category": "kitchen-appliances",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/stove/thumbnail.png",
        "dimensions": [
          0.92,
          0.85,
          0.76
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/stove/floor-plan.png",
        "functionTags": [
          "kitchen-appliances"
        ]
      },
      "scale": [
        0.7,
        0.7,
        0.7
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -10.970000000000002,
        0,
        -6.54
      ],
      "rotation": [
        0,
        9.42477796076938,
        0
      ]
    },
    "item_yatt1lmodexobbuf": {
      "id": "item_yatt1lmodexobbuf",
      "name": "Washing Machine",
      "type": "item",
      "asset": {
        "id": "washing-machine",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/washing-machine/model.glb",
        "name": "Washing Machine",
        "tags": [
          "floor",
          "large",
          "electronics"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.000001862645149230957,
          1.0083027035534542e-7,
          -0.011400297284126282
        ],
        "source": "library",
        "isDraft": false,
        "category": "laundry-appliances",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/washing-machine/thumbnail.png",
        "dimensions": [
          0.6,
          0.86,
          0.53
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/washing-machine/floor-plan.png",
        "functionTags": [
          "laundry-appliances"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -10.750000000000002,
        1.31,
        0.5
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ]
    },
    "item_ycj4x3v71zgol9n9": {
      "id": "item_ycj4x3v71zgol9n9",
      "name": "Closet",
      "type": "item",
      "asset": {
        "id": "closet",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/model.glb",
        "name": "Closet",
        "tags": [
          "closet",
          "wardrobe",
          "armoire",
          "cabinet",
          "storage",
          "organization",
          "wood",
          "bedroom",
          "modern",
          "minimalist",
          "clothing",
          "apparel",
          "cupboard",
          "locker"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000032782554626464844,
          4.649089291319797e-8,
          -0.0141085684299469
        ],
        "source": "library",
        "isDraft": false,
        "category": "wardrobes",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/thumbnail.png",
        "dimensions": [
          1.95,
          2.26,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/closet/floor-plan.png",
        "functionTags": [
          "wardrobes"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        3.58,
        0,
        -6.85
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ]
    },
    "item_zysypp5wlatt84hi": {
      "id": "item_zysypp5wlatt84hi",
      "name": "Dining Chair",
      "type": "item",
      "asset": {
        "id": "dining-chair",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/model.glb",
        "name": "Dining Chair",
        "tags": [
          "chair",
          "seating",
          "dining",
          "furniture",
          "modern",
          "wood",
          "upholstered",
          "kitchen",
          "seat",
          "minimalist",
          "timber",
          "bistro"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          4.3958425521850586e-7,
          4.045574542033137e-8,
          0.001551710069179535
        ],
        "source": "library",
        "isDraft": false,
        "category": "dining-chairs",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/thumbnail.png",
        "dimensions": [
          0.47,
          0.87,
          0.5
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/floor-plan.png",
        "functionTags": [
          "dining-chairs"
        ]
      },
      "scale": [
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -7.5,
        0,
        -9.15
      ],
      "rotation": [
        0,
        7.0685834705770345,
        0
      ]
    },
    "roof_2shor7hhw0ecopyq": {
      "id": "roof_2shor7hhw0ecopyq",
      "name": "Roof 5",
      "type": "roof",
      "object": "node",
      "visible": false,
      "children": [
        "rseg_kbyojb0dlyjxhfgf"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -5.848995571216774,
        0,
        6.225897367072655
      ],
      "rotation": 0
    },
    "roof_3o2f40xn8ztdoqd3": {
      "id": "roof_3o2f40xn8ztdoqd3",
      "name": "Roof 4",
      "type": "roof",
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -11.5,
        2.5,
        -4.75
      ],
      "rotation": 0
    },
    "roof_4rdsj61l85pdcmnv": {
      "id": "roof_4rdsj61l85pdcmnv",
      "name": "Roof 10",
      "type": "roof",
      "object": "node",
      "visible": false,
      "children": [
        "rseg_dmgmpg675i852ymn"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -0.012349507889775513,
        0,
        0.10953133806315207
      ],
      "rotation": 0
    },
    "roof_6q8s6i7bk5jbz8f5": {
      "id": "roof_6q8s6i7bk5jbz8f5",
      "name": "Roof 3",
      "type": "roof",
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -9.121075612491756,
        0,
        -0.8998984807406969
      ],
      "rotation": 0
    },
    "roof_6qwhcqxsypkq0yvb": {
      "id": "roof_6qwhcqxsypkq0yvb",
      "name": "Roof 6",
      "type": "roof",
      "object": "node",
      "visible": false,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -12.150000000000002,
        0,
        0.09999999999999987
      ],
      "rotation": 0
    },
    "roof_7aff8j587sfx56k3": {
      "id": "roof_7aff8j587sfx56k3",
      "name": "Roof 11",
      "type": "roof",
      "object": "node",
      "visible": false,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        2.7,
        0,
        0
      ],
      "rotation": 0
    },
    "roof_7lsqbdxm4go5793n": {
      "id": "roof_7lsqbdxm4go5793n",
      "name": "Roof 4",
      "type": "roof",
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -8.977445629421766,
        0,
        -2.98
      ],
      "rotation": 0
    },
    "roof_ah82f09tilia8iln": {
      "id": "roof_ah82f09tilia8iln",
      "name": "Roof 7",
      "type": "roof",
      "object": "node",
      "visible": false,
      "children": [
        "rseg_8x7hwm67csqrdeu9"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -10.81290864944458,
        0,
        -0.7000000000000002
      ],
      "rotation": 0
    },
    "roof_lnsbxcznxwp9xhkc": {
      "id": "roof_lnsbxcznxwp9xhkc",
      "name": "Roof 4",
      "type": "roof",
      "object": "node",
      "visible": false,
      "children": [
        "rseg_n9udn5s7qa9cdhve"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -11.5,
        2.5,
        -4.75
      ],
      "rotation": 0
    },
    "roof_r7a5i8vfa15mqrst": {
      "id": "roof_r7a5i8vfa15mqrst",
      "name": "Roof 8",
      "type": "roof",
      "object": "node",
      "visible": false,
      "children": [
        "rseg_c33rbegb04v7y941"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -2.4664412497614125,
        0,
        2.7140821784870326
      ],
      "rotation": 0
    },
    "roof_w5he0jkiywejg966": {
      "id": "roof_w5he0jkiywejg966",
      "name": "Roof 12",
      "type": "roof",
      "object": "node",
      "visible": false,
      "children": [
        "rseg_7ykufk4hengg12ld",
        "rseg_wrsognllewarltbb",
        "rseg_yedlhyeb55bcj1s7"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -7.562908649444581,
        0,
        -3.613936042785645
      ],
      "rotation": 0
    },
    "roof_z3no8shpzwww1ds5": {
      "id": "roof_z3no8shpzwww1ds5",
      "name": "Roof 9",
      "type": "roof",
      "object": "node",
      "visible": false,
      "children": [
        "rseg_hjfgaxxbkxt38swz"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -8.660337966636243,
        0,
        -9.333357315063477
      ],
      "rotation": 0
    },
    "rseg_7ykufk4hengg12ld": {
      "id": "rseg_7ykufk4hengg12ld",
      "trim": {
        "back": 0,
        "left": 0,
        "front": 0,
        "right": 0,
        "backLeft": 0,
        "backLeftX": 0,
        "backLeftZ": 0,
        "backRight": 0,
        "frontLeft": 0,
        "backRightX": 0,
        "backRightZ": 0,
        "frontLeftX": 0,
        "frontLeftZ": 0,
        "frontRight": 0,
        "frontRightX": 0,
        "frontRightZ": 0
      },
      "type": "roof-segment",
      "depth": 6.054561907052994,
      "pitch": 16.066093464558875,
      "width": 12.600000000000001,
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "overhang": 0.3,
      "parentId": "roof_w5he0jkiywejg966",
      "position": [
        -5.716156333755555e-17,
        3.3,
        0.9335191726684569
      ],
      "roofType": "gable",
      "rotation": 1.5707963267948966,
      "wallHeight": 0,
      "deckThickness": 0.1,
      "wallThickness": 0.1,
      "dutchGabletRake": 0.48,
      "shingleThickness": 0.05,
      "dutchHipWidthRatio": 0.25,
      "dutchHipHeightRatio": 0.5,
      "dutchTopRakeThickness": 0.21,
      "dutchWaistLengthRatio": 0.98,
      "gambrelLowerWidthRatio": 0.5,
      "mansardSteepWidthRatio": 0.15,
      "gambrelLowerHeightRatio": 0.6,
      "mansardSteepHeightRatio": 0.7
    },
    "rseg_8x7hwm67csqrdeu9": {
      "id": "rseg_8x7hwm67csqrdeu9",
      "trim": {
        "back": 0,
        "left": 0,
        "front": 0,
        "right": 0,
        "backLeft": 0,
        "backLeftX": 0,
        "backLeftZ": 0,
        "backRight": 0,
        "frontLeft": 0,
        "backRightX": 0,
        "backRightZ": 0,
        "frontLeftX": 0,
        "frontLeftZ": 0,
        "frontRight": 0,
        "frontRightX": 0,
        "frontRightZ": 0
      },
      "type": "roof-segment",
      "depth": 1,
      "pitch": 27,
      "width": 5.388095664978027,
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "overhang": 0.3,
      "parentId": "roof_ah82f09tilia8iln",
      "position": [
        0.0267486572265625,
        3.1,
        0.6821611811406911
      ],
      "roofType": "gable",
      "rotation": 4.71238898038469,
      "wallHeight": 0,
      "deckThickness": 0.1,
      "wallThickness": 0.1,
      "dutchGabletRake": 0.48,
      "shingleThickness": 0.05,
      "dutchHipWidthRatio": 0.25,
      "dutchHipHeightRatio": 0.5,
      "dutchTopRakeThickness": 0.21,
      "dutchWaistLengthRatio": 0.98,
      "gambrelLowerWidthRatio": 0.5,
      "mansardSteepWidthRatio": 0.15,
      "gambrelLowerHeightRatio": 0.6,
      "mansardSteepHeightRatio": 0.7
    },
    "rseg_c33rbegb04v7y941": {
      "id": "rseg_c33rbegb04v7y941",
      "trim": {
        "back": 0,
        "left": 0,
        "front": 0,
        "right": 0,
        "backLeft": 0,
        "backLeftX": 0,
        "backLeftZ": 0,
        "backRight": 0,
        "frontLeft": 0,
        "backRightX": 0,
        "backRightZ": 0,
        "frontLeftX": 0,
        "frontLeftZ": 0,
        "frontRight": 0,
        "frontRightX": 0,
        "frontRightZ": 0
      },
      "type": "roof-segment",
      "depth": 1,
      "pitch": 45.25814733587192,
      "width": 4.5,
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "overhang": 0.3,
      "parentId": "roof_r7a5i8vfa15mqrst",
      "position": [
        -0.31577987662298446,
        3.1,
        0.0010404586791992188
      ],
      "roofType": "hip",
      "rotation": 0,
      "wallHeight": 0,
      "deckThickness": 0.1,
      "wallThickness": 0.28,
      "dutchGabletRake": 0.48,
      "shingleThickness": 0.05,
      "dutchHipWidthRatio": 0.25,
      "dutchHipHeightRatio": 0.5,
      "dutchTopRakeThickness": 0.21,
      "dutchWaistLengthRatio": 0.98,
      "gambrelLowerWidthRatio": 0.5,
      "mansardSteepWidthRatio": 0.17,
      "gambrelLowerHeightRatio": 0.6,
      "mansardSteepHeightRatio": 0.69
    },
    "rseg_dmgmpg675i852ymn": {
      "id": "rseg_dmgmpg675i852ymn",
      "trim": {
        "back": 0,
        "left": 0,
        "front": 0,
        "right": 0,
        "backLeft": 0,
        "backLeftX": 0,
        "backLeftZ": 0,
        "backRight": 0,
        "frontLeft": 0,
        "backRightX": 0,
        "backRightZ": 0,
        "frontLeftX": 0,
        "frontLeftZ": 0,
        "frontRight": 0,
        "frontRightX": 0,
        "frontRightZ": 0
      },
      "type": "roof-segment",
      "depth": 5.802736677820031,
      "pitch": 19.320142098198733,
      "width": 3.9000000000000004,
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "overhang": 0.3,
      "parentId": "roof_4rdsj61l85pdcmnv",
      "position": [
        0.8289419523943713,
        3.1,
        0.05219671964836137
      ],
      "roofType": "hip",
      "rotation": 1.5707963267948966,
      "wallHeight": 0,
      "deckThickness": 0.1,
      "wallThickness": 0.1,
      "dutchGabletRake": 0.48,
      "shingleThickness": 0.05,
      "dutchHipWidthRatio": 0.25,
      "dutchHipHeightRatio": 0.5,
      "dutchTopRakeThickness": 0.21,
      "dutchWaistLengthRatio": 0.98,
      "gambrelLowerWidthRatio": 0.5,
      "mansardSteepWidthRatio": 0.17,
      "gambrelLowerHeightRatio": 0.6,
      "mansardSteepHeightRatio": 0.69
    },
    "rseg_hjfgaxxbkxt38swz": {
      "id": "rseg_hjfgaxxbkxt38swz",
      "trim": {
        "back": 0,
        "left": 0,
        "front": 0,
        "right": 0,
        "backLeft": 0,
        "backLeftX": 0,
        "backLeftZ": 0,
        "backRight": 0,
        "frontLeft": 0,
        "backRightX": 0,
        "backRightZ": 0,
        "frontLeftX": 0,
        "frontLeftZ": 0,
        "frontRight": 0,
        "frontRightX": 0,
        "frontRightZ": 0
      },
      "type": "roof-segment",
      "depth": 3.9967146301269523,
      "pitch": 10,
      "width": 7.148460953324194,
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "overhang": 0.65,
      "parentId": "roof_z3no8shpzwww1ds5",
      "position": [
        0.6715960502624512,
        3.1,
        0.007824897766113281
      ],
      "roofType": "hip",
      "rotation": 0,
      "wallHeight": 0,
      "deckThickness": 0.13,
      "wallThickness": 0.31,
      "dutchGabletRake": 0.48,
      "shingleThickness": 0.02,
      "dutchHipWidthRatio": 0.25,
      "dutchHipHeightRatio": 0.5,
      "dutchTopRakeThickness": 0.21,
      "dutchWaistLengthRatio": 0.98,
      "gambrelLowerWidthRatio": 0.5,
      "mansardSteepWidthRatio": 0.17,
      "gambrelLowerHeightRatio": 0.6,
      "mansardSteepHeightRatio": 0.69
    },
    "rseg_kbyojb0dlyjxhfgf": {
      "id": "rseg_kbyojb0dlyjxhfgf",
      "trim": {
        "back": 0,
        "left": 0,
        "front": 0,
        "right": 0,
        "backLeft": 0,
        "backLeftX": 0,
        "backLeftZ": 0,
        "backRight": 0,
        "frontLeft": 0,
        "backRightX": 0,
        "backRightZ": 0,
        "frontLeftX": 0,
        "frontLeftZ": 0,
        "frontRight": 0,
        "frontRightX": 0,
        "frontRightZ": 0
      },
      "type": "roof-segment",
      "depth": 7,
      "pitch": 27,
      "width": 10.823620108018094,
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "overhang": 0,
      "parentId": "roof_2shor7hhw0ecopyq",
      "position": [
        -2.5167923105619474,
        3.1,
        1.77
      ],
      "roofType": "hip",
      "rotation": -1.5707963267948966,
      "wallHeight": 0.5,
      "deckThickness": 0.04,
      "wallThickness": 1,
      "dutchGabletRake": 0.48,
      "shingleThickness": 0.02,
      "dutchHipWidthRatio": 0.25,
      "dutchHipHeightRatio": 0.5,
      "dutchTopRakeThickness": 0.21,
      "dutchWaistLengthRatio": 0.98,
      "gambrelLowerWidthRatio": 0.5,
      "mansardSteepWidthRatio": 0.17,
      "gambrelLowerHeightRatio": 0.6,
      "mansardSteepHeightRatio": 0.69
    },
    "rseg_n9udn5s7qa9cdhve": {
      "id": "rseg_n9udn5s7qa9cdhve",
      "trim": {
        "back": 0,
        "left": 0,
        "front": 0,
        "right": 0,
        "backLeft": 0,
        "backLeftX": 0,
        "backLeftZ": 0,
        "backRight": 0,
        "frontLeft": 0,
        "backRightX": 0,
        "backRightZ": 0,
        "frontLeftX": 0,
        "frontLeftZ": 0,
        "frontRight": 0,
        "frontRightX": 0,
        "frontRightZ": 0
      },
      "type": "roof-segment",
      "depth": 4.81957483291626,
      "pitch": 20,
      "width": 1.2891368865966797,
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "overhang": 0.41,
      "parentId": "roof_lnsbxcznxwp9xhkc",
      "position": [
        -0.09,
        0.6,
        -0.02
      ],
      "roofType": "gable",
      "rotation": 0,
      "wallHeight": 0.9,
      "deckThickness": 0.09,
      "wallThickness": 0.28,
      "dutchGabletRake": 0.48,
      "shingleThickness": 0.06,
      "dutchHipWidthRatio": 0.25,
      "dutchHipHeightRatio": 0.5,
      "dutchTopRakeThickness": 0.21,
      "dutchWaistLengthRatio": 0.98,
      "gambrelLowerWidthRatio": 0.5,
      "mansardSteepWidthRatio": 0.15,
      "gambrelLowerHeightRatio": 0.6,
      "mansardSteepHeightRatio": 0.7
    },
    "rseg_wrsognllewarltbb": {
      "object": "node",
      "id": "rseg_wrsognllewarltbb",
      "type": "roof-segment",
      "parentId": "roof_w5he0jkiywejg966",
      "visible": true,
      "metadata": {},
      "position": [
        13.016813889878534,
        3.3,
        -1.8514371427910712
      ],
      "rotation": 6.283185307179586,
      "roofType": "gable",
      "width": 12.200000000000001,
      "depth": 7.6000000000000005,
      "trim": {
        "left": 0,
        "right": 0,
        "front": 0,
        "back": 0,
        "frontLeft": 0,
        "frontRight": 0,
        "backLeft": 0,
        "backRight": 0,
        "frontLeftX": 0,
        "frontLeftZ": 0,
        "frontRightX": 0,
        "frontRightZ": 0,
        "backLeftX": 0,
        "backLeftZ": 0,
        "backRightX": 0,
        "backRightZ": 0
      },
      "wallHeight": 0,
      "pitch": 14.112596687813216,
      "wallThickness": 0.1,
      "deckThickness": 0.1,
      "overhang": 0.3,
      "shingleThickness": 0.05,
      "gambrelLowerWidthRatio": 0.5,
      "gambrelLowerHeightRatio": 0.6,
      "mansardSteepWidthRatio": 0.15,
      "mansardSteepHeightRatio": 0.7,
      "dutchHipWidthRatio": 0.25,
      "dutchHipHeightRatio": 0.5,
      "dutchWaistLengthRatio": 0.98,
      "dutchGabletRake": 0.48,
      "dutchTopRakeThickness": 0.21,
      "children": []
    },
    "rseg_yedlhyeb55bcj1s7": {
      "id": "rseg_yedlhyeb55bcj1s7",
      "trim": {
        "back": 0,
        "left": 0,
        "front": 0,
        "right": 0,
        "backLeft": 0,
        "backLeftX": 0,
        "backLeftZ": 0,
        "backRight": 0,
        "frontLeft": 0,
        "backRightX": 0,
        "backRightZ": 0,
        "frontLeftX": 0,
        "frontLeftZ": 0,
        "frontRight": 0,
        "frontRightX": 0,
        "frontRightZ": 0
      },
      "type": "roof-segment",
      "depth": 8,
      "pitch": 24,
      "width": 13.1,
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "overhang": 0.3,
      "parentId": "roof_w5he0jkiywejg966",
      "position": [
        6.506991811841097,
        3.3,
        -1.0432825513205133
      ],
      "roofType": "gable",
      "rotation": 1.5707963267948966,
      "wallHeight": 0,
      "deckThickness": 0.1,
      "wallThickness": 0.1,
      "dutchGabletRake": 0.48,
      "shingleThickness": 0.05,
      "dutchHipWidthRatio": 0.25,
      "dutchHipHeightRatio": 0.5,
      "dutchTopRakeThickness": 0.21,
      "dutchWaistLengthRatio": 0.98,
      "gambrelLowerWidthRatio": 0.5,
      "mansardSteepWidthRatio": 0.15,
      "gambrelLowerHeightRatio": 0.6,
      "mansardSteepHeightRatio": 0.7
    },
    "site_ki35u6k5svcjwzv3": {
      "id": "site_ki35u6k5svcjwzv3",
      "type": "site",
      "object": "node",
      "polygon": {
        "type": "polygon",
        "points": [
          [
            -15,
            -15
          ],
          [
            15,
            -15
          ],
          [
            15,
            15
          ],
          [
            -15,
            15
          ]
        ]
      },
      "visible": true,
      "children": [
        "building_mzbjbmaocmp350cc"
      ],
      "metadata": {},
      "parentId": null
    },
    "slab_3vayhrm8fnttu076": {
      "id": "slab_3vayhrm8fnttu076",
      "name": "Room 44 Slab",
      "type": "slab",
      "holes": [],
      "object": "node",
      "polygon": [
        [
          -4.65,
          -5.295473098754882
        ],
        [
          -8.8,
          -5.295473098754883
        ],
        [
          -8.8,
          -8.924649810791015
        ],
        [
          -4.65,
          -8.924649810791015
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "elevation": 0.6,
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "slab_6soyr04r5vzdf7bd": {
      "id": "slab_6soyr04r5vzdf7bd",
      "name": "Room 77 Slab",
      "type": "slab",
      "holes": [],
      "object": "node",
      "polygon": [
        [
          6.618342399597168,
          -6.47076887996643
        ],
        [
          1.9000059256672868,
          -6.47076887996643
        ],
        [
          1.9000000000000001,
          -9
        ],
        [
          6.618342399597168,
          -9
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "elevation": 0.05,
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "slab_79ygeyuv6xdb2shf": {
      "object": "node",
      "id": "slab_79ygeyuv6xdb2shf",
      "type": "slab",
      "name": "Room 100 Slab",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -10.475817298889162,
          0.3499999999999981
        ],
        [
          -10.475817298889162,
          -2.817725658416748
        ],
        [
          -6.3500000000000005,
          -2.817725658416748
        ],
        [
          -6.3500000000000005,
          -1.7000000000000002
        ],
        [
          -8.029067039489746,
          -1.7
        ],
        [
          -8.029067039489746,
          0.34999999999999853
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.6,
      "autoFromWalls": true
    },
    "slab_9r9c30umnp24118q": {
      "object": "node",
      "id": "slab_9r9c30umnp24118q",
      "type": "slab",
      "name": "Room 103 Slab",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          2.7,
          -3.41571307182312
        ],
        [
          2.7,
          0.8478581309318545
        ],
        [
          -1.138415994959748,
          0.8478581299369649
        ],
        [
          -1.166545033454895,
          -0.7140538692474365
        ],
        [
          -0.6088814462456746,
          -0.8559574896968845
        ],
        [
          -0.13316236771865175,
          -1.1797115202835589
        ],
        [
          0.20345488858959593,
          -1.6464171413673683
        ],
        [
          0.3605259954929352,
          -2.2000000000000006
        ],
        [
          0.36052599549293524,
          -3.4157130718231206
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.6,
      "autoFromWalls": true
    },
    "slab_b6l7wtnteh69q62x": {
      "id": "slab_b6l7wtnteh69q62x",
      "name": "Room 109 Slab",
      "type": "slab",
      "holes": [],
      "object": "node",
      "polygon": [
        [
          -8.8,
          2.4782006740570064
        ],
        [
          -11.200000000000001,
          2.478200674057006
        ],
        [
          -11.200000000000001,
          -2.4000000000000004
        ],
        [
          -8.8,
          -2.4000000000000004
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "elevation": 0.05,
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "slab_eon14d96e9pdckls": {
      "object": "node",
      "id": "slab_eon14d96e9pdckls",
      "type": "slab",
      "name": "Room 102 Slab",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          6.6100616455078125,
          -5.300000000000001
        ],
        [
          6.6100616455078125,
          -1.8499999999999996
        ],
        [
          2.7,
          -1.8499999999999999
        ],
        [
          2.7,
          -4.04132604598999
        ],
        [
          3.1272172927856445,
          -4.04132604598999
        ],
        [
          3.1272172927856445,
          -5.2997359790289496
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.6,
      "autoFromWalls": true
    },
    "slab_ffhvq8xxzip0tso8": {
      "id": "slab_ffhvq8xxzip0tso8",
      "name": "Room 97 Slab",
      "type": "slab",
      "holes": [],
      "object": "node",
      "polygon": [
        [
          -1.1480247549681735,
          2.20020303858821
        ],
        [
          -1.145724892616272,
          0.16443949937820435
        ],
        [
          -0.6126573031526222,
          -0.05736904269178278
        ],
        [
          -0.35166916237511003,
          -0.5723887264372653
        ],
        [
          2.7,
          -0.5612221956253052
        ],
        [
          2.7,
          2.2
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "elevation": 0.05,
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "slab_gctbh8kepx5w1ysa": {
      "id": "slab_gctbh8kepx5w1ysa",
      "name": "Room 106 Slab",
      "type": "slab",
      "holes": [],
      "object": "node",
      "polygon": [
        [
          -12.100000000000001,
          -3.9014689922332764
        ],
        [
          -8.8,
          -3.9014689922332764
        ],
        [
          -8.8,
          -2.4000000000000004
        ],
        [
          -12.100000000000001,
          -2.4000000000000004
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "elevation": 0.05,
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "slab_lsf29cgczbbuuzid": {
      "object": "node",
      "id": "slab_lsf29cgczbbuuzid",
      "type": "slab",
      "name": "Room 95 Slab",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -6.3500000000000005,
          -5.295473098754883
        ],
        [
          -6.3500000000000005,
          -2.817725658416748
        ],
        [
          -8.8,
          -2.817725658416748
        ],
        [
          -8.8,
          -5.295473098754883
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.6,
      "autoFromWalls": true
    },
    "slab_pom30c7bdtulucmr": {
      "object": "node",
      "id": "slab_pom30c7bdtulucmr",
      "type": "slab",
      "name": "Room 78 Slab",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          1.9000059256672868,
          -6.47076887996643
        ],
        [
          6.618342399597168,
          -6.47076887996643
        ],
        [
          6.618342399597168,
          -9
        ],
        [
          11.55,
          -9
        ],
        [
          11.55,
          -1.8499999999999994
        ],
        [
          6.6100616455078125,
          -1.8499999999999996
        ],
        [
          6.6100616455078125,
          -5.300000000000001
        ],
        [
          1.900005925667287,
          -5.300000000000001
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.6,
      "autoFromWalls": true
    },
    "slab_qqni6z0vf7sbwhl4": {
      "object": "node",
      "id": "slab_qqni6z0vf7sbwhl4",
      "type": "slab",
      "name": "Room 102 Slab",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -8.8,
          -0.5723887264372651
        ],
        [
          -5.378747463226318,
          -0.5723887264372649
        ],
        [
          -5.129446072197104,
          -0.047581525967506644
        ],
        [
          -4.600000000000001,
          0.19171042514883752
        ],
        [
          -4.6000000000000005,
          2.478200674057007
        ],
        [
          -8.8,
          2.4782006740570064
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.05,
      "autoFromWalls": true
    },
    "slab_si2p2u02wjcg853b": {
      "object": "node",
      "id": "slab_si2p2u02wjcg853b",
      "type": "slab",
      "name": "Room 101 Slab",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -10.475817298889162,
          -2.817725658416748
        ],
        [
          -10.475817298889162,
          -3.6500000000000004
        ],
        [
          -8.8,
          -3.6500000000000004
        ],
        [
          -8.8,
          -2.817725658416748
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.6,
      "autoFromWalls": true
    },
    "slab_siuwsinr4t684yg4": {
      "id": "slab_siuwsinr4t684yg4",
      "name": "Room 111 Slab",
      "type": "slab",
      "holes": [],
      "object": "node",
      "polygon": [
        [
          6.9,
          -4
        ],
        [
          6.9,
          -1.85
        ],
        [
          2.7,
          -1.8500000000000005
        ],
        [
          2.7000000000000006,
          -4
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "elevation": 0.05,
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "slab_td7wvkz6wevyefj0": {
      "object": "node",
      "id": "slab_td7wvkz6wevyefj0",
      "type": "slab",
      "name": "Room 99 Slab",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -6.3500000000000005,
          -1.7000000000000002
        ],
        [
          -6.350000000000002,
          0.9999999999999996
        ],
        [
          -8.029067039489746,
          0.9999999999999994
        ],
        [
          -8.029067039489746,
          -1.7
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.6,
      "autoFromWalls": true
    },
    "slab_u835g26a9honz9p3": {
      "id": "slab_u835g26a9honz9p3",
      "name": "Room 32 Slab",
      "type": "slab",
      "holes": [],
      "object": "node",
      "polygon": [
        [
          -4.599999999999999,
          12.85
        ],
        [
          -12.200000000000001,
          12.850000000000001
        ],
        [
          -12.232887268066406,
          2.478200674057006
        ],
        [
          -4.6000000000000005,
          2.478200674057007
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "elevation": 0.05,
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "slab_ulr5kip3ay7gbg3g": {
      "object": "node",
      "id": "slab_ulr5kip3ay7gbg3g",
      "type": "slab",
      "name": "Room 89 Slab",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -10.475817298889162,
          -3.6500000000000004
        ],
        [
          -10.475817298889162,
          -6.8500000000000005
        ],
        [
          -8.8,
          -6.8500000000000005
        ],
        [
          -8.8,
          -3.6500000000000004
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.6,
      "autoFromWalls": true
    },
    "slab_vovty80oqxeqm8vm": {
      "id": "slab_vovty80oqxeqm8vm",
      "name": "Room 108 Slab",
      "type": "slab",
      "holes": [],
      "object": "node",
      "polygon": [
        [
          -12.100000000000001,
          -3.9014689922332764
        ],
        [
          -12.100000000000001,
          -6.8500000000000005
        ],
        [
          -8.8,
          -6.8500000000000005
        ],
        [
          -8.8,
          -3.9014689922332764
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "elevation": 0.05,
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "slab_ybjr7d24qchu5p0r": {
      "object": "node",
      "id": "slab_ybjr7d24qchu5p0r",
      "type": "slab",
      "name": "Room 84 Slab",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -3.7828824995228247,
          2.9499636829170583
        ],
        [
          -4.6000000000000005,
          2.478200674057007
        ],
        [
          -4.600000000000001,
          0.19171042514883752
        ],
        [
          -6.3500000000000005,
          0.2
        ],
        [
          -6.3500000000000005,
          -5.295473098754883
        ],
        [
          -4.65,
          -5.295473098754882
        ],
        [
          -4.65,
          -10.8
        ],
        [
          1.9000000000000001,
          -10.8
        ],
        [
          1.900005925667287,
          -5.300000000000001
        ],
        [
          3.1272172927856445,
          -5.2997359790289496
        ],
        [
          3.1272172927856445,
          -4.04132604598999
        ],
        [
          2.7,
          -4.04132604598999
        ],
        [
          2.7,
          -3.41571307182312
        ],
        [
          0.36052599549293524,
          -3.4157130718231206
        ],
        [
          0.3605259954929352,
          -2.2000000000000006
        ],
        [
          0.20345488858959593,
          -1.6464171413673683
        ],
        [
          -0.13316236771865175,
          -1.1797115202835589
        ],
        [
          -0.6088814462456746,
          -0.8559574896968845
        ],
        [
          -1.166545033454895,
          -0.7140538692474365
        ],
        [
          -1.1500000000000001,
          2.478200674057007
        ],
        [
          -1.9504812955856323,
          2.9499636829170583
        ]
      ],
      "holes": [
        [
          [
            -4.6000000000000005,
            -1.4500000000000002
          ],
          [
            -4.4,
            -2.0500000000000003
          ],
          [
            -4,
            -2.5
          ],
          [
            -3.5500000000000003,
            -2.85
          ],
          [
            -2.95,
            -3
          ],
          [
            -2.9000000000000004,
            -4.2
          ],
          [
            -2.4000000000000004,
            -4.2
          ],
          [
            -1.8,
            -3.95
          ],
          [
            -1.35,
            -3.5500000000000003
          ],
          [
            -1.1500000000000001,
            -2.85
          ],
          [
            -1.1500000000000001,
            2.478200674057007
          ],
          [
            -1.9504812955856323,
            2.9499636829170583
          ],
          [
            -3.7828824995228247,
            2.9499636829170583
          ],
          [
            -4.6000000000000005,
            2.45
          ]
        ],
        [
          [
            -4.55,
            -10.75
          ],
          [
            1.8,
            -10.75
          ],
          [
            1.8,
            -5.9
          ],
          [
            0,
            -5.9
          ],
          [
            -0.45,
            -5.9
          ],
          [
            -0.65,
            -5.95
          ],
          [
            -0.8500000000000001,
            -6.1000000000000005
          ],
          [
            -1.4000000000000001,
            -6.9
          ],
          [
            -2.15,
            -7.75
          ],
          [
            -2.6500000000000004,
            -8.200000000000001
          ],
          [
            -3.25,
            -8.450000000000001
          ],
          [
            -3.7,
            -8.55
          ],
          [
            -4.25,
            -8.55
          ],
          [
            -4.55,
            -8.55
          ]
        ]
      ],
      "holeMetadata": [
        {
          "source": "manual"
        },
        {
          "source": "manual"
        }
      ],
      "elevation": 0.6,
      "autoFromWalls": true
    },
    "sseg_ykt4p8f8w13fg08n": {
      "object": "node",
      "id": "sseg_ykt4p8f8w13fg08n",
      "type": "stair-segment",
      "parentId": "stair_dyp7dqxtm1mg9fxb",
      "visible": true,
      "metadata": {},
      "position": [
        0,
        0,
        0
      ],
      "rotation": 0,
      "segmentType": "stair",
      "width": 1,
      "length": 3,
      "height": 2.5,
      "stepCount": 10,
      "attachmentSide": "front",
      "fillToFloor": true,
      "thickness": 0.25
    },
    "wall_0e9fl70a13qct144": {
      "id": "wall_0e9fl70a13qct144",
      "end": [
        1.9000000000000001,
        -10.8
      ],
      "name": "Wall 38",
      "type": "wall",
      "start": [
        -4.65,
        -10.8
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "window_u3dbch0ez4pzi25v"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_0f6gpecryeqyyjk1": {
      "id": "wall_0f6gpecryeqyyjk1",
      "end": [
        6.9,
        -4
      ],
      "name": "Wall 51",
      "type": "wall",
      "start": [
        6.9,
        -1.85
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior"
    },
    "wall_0z5b516n99pjh22l": {
      "id": "wall_0z5b516n99pjh22l",
      "end": [
        -10.475817298889162,
        3.572127914428711
      ],
      "name": "Wall 158",
      "type": "wall",
      "start": [
        -10.475817298889162,
        -2.817725658416748
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "window_xcdxrqpcgo3p7tg3",
        "window_0i05uo9pl8jayg6w"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "exterior"
    },
    "wall_15yo6h4h6h10o4z7": {
      "object": "node",
      "id": "wall_15yo6h4h6h10o4z7",
      "type": "wall",
      "name": "Wall 112",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "door_thy03qq8wjfdktf5"
      ],
      "height": 3.05,
      "start": [
        -8.8,
        -0.5723887264372651
      ],
      "end": [
        -8.8,
        2.4782006740570064
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_1al1baxmm5ck5dib": {
      "object": "node",
      "id": "wall_1al1baxmm5ck5dib",
      "type": "wall",
      "name": "Wall 111",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -6.3500000000000005,
        -1.7000000000000002
      ],
      "end": [
        -8.029067039489746,
        -1.7
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_1clw6isadmfcdjqi": {
      "object": "node",
      "id": "wall_1clw6isadmfcdjqi",
      "type": "wall",
      "name": "Wall 114",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        0.36052599549293524,
        -3.4157130718231206
      ],
      "end": [
        2.7,
        -3.41571307182312
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_1oavpa3822gmh9fe": {
      "object": "node",
      "id": "wall_1oavpa3822gmh9fe",
      "type": "wall",
      "name": "Wall 106",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "door_zhbbcvzsr29tm9ws"
      ],
      "height": 2.74,
      "start": [
        -6.350000000000002,
        0.9999999999999996
      ],
      "end": [
        -8.029067039489746,
        0.9999999999999994
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_1sfwpiehgiyh1j76": {
      "object": "node",
      "id": "wall_1sfwpiehgiyh1j76",
      "type": "wall",
      "name": "Wall 106",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "door_or0oopifhy4ntigk"
      ],
      "height": 3.05,
      "start": [
        6.9,
        -5.5
      ],
      "end": [
        6.9,
        -4
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_216oeqpngzy1zbae": {
      "id": "wall_216oeqpngzy1zbae",
      "end": [
        6.6100616455078125,
        -1.8499999999999996
      ],
      "name": "Wall 176",
      "type": "wall",
      "start": [
        6.6100616455078125,
        -5.300000000000001
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "interior"
    },
    "wall_2toe7w07rutfm9id": {
      "id": "wall_2toe7w07rutfm9id",
      "end": [
        -10.475817298889162,
        -2.817725658416748
      ],
      "name": "Wall 158",
      "type": "wall",
      "start": [
        -10.475817298889162,
        -3.6500000000000004
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "exterior"
    },
    "wall_310ivdyjq4bc30oo": {
      "id": "wall_310ivdyjq4bc30oo",
      "end": [
        3.1272172927856445,
        -5.2997359790289496
      ],
      "name": "Wall 175",
      "type": "wall",
      "start": [
        3.1272172927856445,
        -4.04132604598999
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "interior"
    },
    "wall_3k90v6l79z717kuw": {
      "id": "wall_3k90v6l79z717kuw",
      "end": [
        -12.100000000000001,
        -6.8500000000000005
      ],
      "name": "Wall 23",
      "type": "wall",
      "start": [
        -12.100000000000001,
        -3.9014689922332764
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "window_e96ge6hutva7apdk"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_49gje9vehl4h6hf7": {
      "object": "node",
      "id": "wall_49gje9vehl4h6hf7",
      "type": "wall",
      "name": "Wall 106",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "door_d6rtmh0y4xbii8io"
      ],
      "height": 3.05,
      "start": [
        -12.100000000000001,
        -3.9014689922332764
      ],
      "end": [
        -8.8,
        -3.9014689922332764
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_4dnlh79bzdiae0sq": {
      "id": "wall_4dnlh79bzdiae0sq",
      "end": [
        -1.1480247549681735,
        2.20020303858821
      ],
      "name": "Wall 107",
      "type": "wall",
      "start": [
        2.7,
        2.2
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "window_dx3rc5l274k5ivra"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_4pfwnqac6i2cbpgg": {
      "object": "node",
      "id": "wall_4pfwnqac6i2cbpgg",
      "type": "wall",
      "name": "Wall 111",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "door_p2yxrdash2rgc49t"
      ],
      "height": 2.74,
      "start": [
        -8.8,
        -2.817725658416748
      ],
      "end": [
        -10.475817298889162,
        -2.817725658416748
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_5gwd4ynblyy04lge": {
      "id": "wall_5gwd4ynblyy04lge",
      "end": [
        11.55,
        -1.8499999999999994
      ],
      "name": "Wall 47",
      "type": "wall",
      "start": [
        6.6100616455078125,
        -1.8499999999999996
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "window_h5zbn9h52cx5sxu5",
        "window_tg8s47030gjc8jm3"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "exterior"
    },
    "wall_5ld53lqd7tpg14f9": {
      "id": "wall_5ld53lqd7tpg14f9",
      "end": [
        -4.65,
        -10.8
      ],
      "name": "Wall 35",
      "type": "wall",
      "start": [
        -4.65,
        -8.924649810791015
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "interior"
    },
    "wall_6kahn8f9drv85wf3": {
      "id": "wall_6kahn8f9drv85wf3",
      "end": [
        -8.8,
        -10.6
      ],
      "name": "Wall 27",
      "type": "wall",
      "slots": {},
      "start": [
        -8.8,
        -6.850000000000001
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "window_dqu99cjklyaruudd"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_6p6q7ojfk0w3rb2j": {
      "object": "node",
      "id": "wall_6p6q7ojfk0w3rb2j",
      "type": "wall",
      "name": "Wall 125",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "start": [
        -4.6000000000000005,
        2.478200674057007
      ],
      "end": [
        -3.7828824995228247,
        2.9499636829170583
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_6vcw97fz8posk55r": {
      "object": "node",
      "id": "wall_6vcw97fz8posk55r",
      "type": "wall",
      "name": "Wall 111",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "start": [
        -8.8,
        -3.9014689922332764
      ],
      "end": [
        -8.8,
        -2.4000000000000004
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_7d0cwdfnwr8wjn7l": {
      "object": "node",
      "id": "wall_7d0cwdfnwr8wjn7l",
      "type": "wall",
      "name": "Wall 104",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "door_i6ce31ldxmt70fve"
      ],
      "height": 3.05,
      "start": [
        -1.1500000000000001,
        2.478200674057007
      ],
      "end": [
        -1.145724892616272,
        0.16443949937820435
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_7gjnzk8uod8j1v4v": {
      "id": "wall_7gjnzk8uod8j1v4v",
      "end": [
        6.618342399597168,
        -9
      ],
      "name": "Wall 178",
      "type": "wall",
      "start": [
        6.618342399597168,
        -6.47076887996643
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "exterior"
    },
    "wall_7q0igcgudqsf4mr6": {
      "id": "wall_7q0igcgudqsf4mr6",
      "end": [
        1.9000000000000001,
        -10.8
      ],
      "name": "Wall 113",
      "type": "wall",
      "start": [
        1.9000000000000001,
        -9
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "exterior"
    },
    "wall_7s021sc63nm7hmrl": {
      "id": "wall_7s021sc63nm7hmrl",
      "end": [
        -10.475817298889162,
        -3.6500000000000004
      ],
      "name": "Wall 158",
      "type": "wall",
      "start": [
        -10.475817298889162,
        -6.8500000000000005
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "item_dtsdk8v2572ab2yl"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "exterior"
    },
    "wall_8dgmd7npuiiwfp5u": {
      "id": "wall_8dgmd7npuiiwfp5u",
      "end": [
        2.7,
        -4.04132604598999
      ],
      "name": "Wall 172",
      "type": "wall",
      "start": [
        2.7,
        -3.41571307182312
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "interior"
    },
    "wall_af75d28vkyigycat": {
      "id": "wall_af75d28vkyigycat",
      "end": [
        -8.8,
        -5.65
      ],
      "name": "Wall 25",
      "type": "wall",
      "start": [
        -8.8,
        -6.8500000000000005
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "door_xqh3p7orm6lm9ems"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_ag4xz82fkzfty3lt": {
      "object": "node",
      "id": "wall_ag4xz82fkzfty3lt",
      "type": "wall",
      "name": "Wall 125",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -4.6000000000000005,
        2.478200674057007
      ],
      "end": [
        -3.7828824995228247,
        2.9499636829170583
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_ajixfm922nen33am": {
      "object": "node",
      "id": "wall_ajixfm922nen33am",
      "type": "wall",
      "name": "Wall 109",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -6.3500000000000005,
        0.2
      ],
      "end": [
        -6.350000000000002,
        0.9999999999999996
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_akpbz3skdgydi3ov": {
      "object": "node",
      "id": "wall_akpbz3skdgydi3ov",
      "type": "wall",
      "name": "Wall 104",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -1.1500000000000001,
        2.478200674057007
      ],
      "end": [
        -1.166545033454895,
        -0.7140538692474365
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_ang3nl8g2alu35h5": {
      "id": "wall_ang3nl8g2alu35h5",
      "end": [
        2.7,
        -1.8500000000000005
      ],
      "name": "Wall 39",
      "type": "wall",
      "start": [
        2.7,
        -0.5612221956253052
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior"
    },
    "wall_ard5a93tnt3wzzh6": {
      "id": "wall_ard5a93tnt3wzzh6",
      "end": [
        2.7,
        0.8478581309318545
      ],
      "name": "Wall 105",
      "type": "wall",
      "start": [
        2.7,
        -1.8499999999999999
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "window_2xojmcf1jp0d4ku3"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "interior"
    },
    "wall_axg9hnw9xuw2zs72": {
      "id": "wall_axg9hnw9xuw2zs72",
      "end": [
        6.9,
        -9
      ],
      "name": "Wall 113",
      "type": "wall",
      "start": [
        11.55,
        -9
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "window_0fqenkdbiahxp8m4"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior"
    },
    "wall_b2orpcv271ydxy7h": {
      "object": "node",
      "id": "wall_b2orpcv271ydxy7h",
      "type": "wall",
      "name": "Wall 113",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -8.029067039489746,
        0.34999999999999853
      ],
      "end": [
        -8.029067039489746,
        0.9999999999999994
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_b5czzyf3pif5knb1": {
      "id": "wall_b5czzyf3pif5knb1",
      "end": [
        -12.100000000000001,
        -3.9014689922332764
      ],
      "name": "Wall 23",
      "type": "wall",
      "start": [
        -12.100000000000001,
        -2.4000000000000004
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_bvgcs7isi2dii2f7": {
      "id": "wall_bvgcs7isi2dii2f7",
      "end": [
        -4.65,
        -5.295473098754882
      ],
      "name": "Wall 158",
      "type": "wall",
      "start": [
        -4.65,
        -8.924649810791015
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "interior"
    },
    "wall_c783g0mjvk11z4he": {
      "id": "wall_c783g0mjvk11z4he",
      "end": [
        6.9,
        -1.85
      ],
      "name": "Wall 47",
      "type": "wall",
      "start": [
        2.7,
        -1.85
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "window_dmv96pwr85brar07"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior"
    },
    "wall_c8lo4kz4h0mef9yv": {
      "id": "wall_c8lo4kz4h0mef9yv",
      "end": [
        -1.1500000000000001,
        2.478200674057007
      ],
      "name": "Wall 129",
      "type": "wall",
      "start": [
        -1.9504812955856323,
        2.9499636829170583
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "exterior"
    },
    "wall_d4rzzj9dzbrvt35n": {
      "object": "node",
      "id": "wall_d4rzzj9dzbrvt35n",
      "type": "wall",
      "name": "Wall 113",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "curveOffset": -0.2,
      "start": [
        -1.145724892616272,
        0.16443949937820435
      ],
      "end": [
        -0.35166916237511003,
        -0.5723887264372653
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_e71f2dnudh7lpb9v": {
      "id": "wall_e71f2dnudh7lpb9v",
      "end": [
        -4.65,
        -8.924649810791015
      ],
      "name": "Wall 36",
      "type": "wall",
      "start": [
        -8.8,
        -8.924649810791015
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "window_yar8hjnszpqjqlk2"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "interior"
    },
    "wall_eb5d3sujk2od2zdb": {
      "id": "wall_eb5d3sujk2od2zdb",
      "end": [
        -6.3500000000000005,
        -5.295473098754883
      ],
      "name": "Wall 156",
      "type": "wall",
      "start": [
        -6.3500000000000005,
        -2.817725658416748
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "door_d46bo6nyf6gou08a"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "interior"
    },
    "wall_ed7diphapsqo8s61": {
      "id": "wall_ed7diphapsqo8s61",
      "end": [
        -4.65,
        -10.8
      ],
      "name": "Wall 35",
      "type": "wall",
      "start": [
        -4.65,
        -10.6
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_ennfhed1hm0ozhch": {
      "id": "wall_ennfhed1hm0ozhch",
      "end": [
        1.9000000000000001,
        -10.8
      ],
      "name": "Wall 38",
      "type": "wall",
      "start": [
        -4.65,
        -10.8
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "window_inffur51awaebd2e"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "interior"
    },
    "wall_eqe4f8yz901mak6u": {
      "object": "node",
      "id": "wall_eqe4f8yz901mak6u",
      "type": "wall",
      "name": "Wall 104",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "start": [
        6.9,
        -5.5
      ],
      "end": [
        6.9,
        -9
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_ey9jixguhdj5n47n": {
      "id": "wall_ey9jixguhdj5n47n",
      "end": [
        -11.200000000000001,
        2.478200674057006
      ],
      "name": "Wall 5",
      "type": "wall",
      "start": [
        -8.8,
        2.4782006740570064
      ],
      "camera": {
        "mode": "perspective",
        "target": [
          0,
          0,
          0
        ],
        "position": [
          5.301518750588389,
          22.750831875368014,
          25.146157458371082
        ]
      },
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "door_235p9ofj5w88jxbh"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior"
    },
    "wall_f7d71yf5kpffhcl0": {
      "object": "node",
      "id": "wall_f7d71yf5kpffhcl0",
      "type": "wall",
      "name": "Wall 108",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "item_sxxpx8773ykhyjzp",
        "door_b1riqeap8023qles"
      ],
      "height": 3.05,
      "start": [
        2.7000000000000006,
        -4
      ],
      "end": [
        6.9,
        -4
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_ffpd0by6ja6762jr": {
      "id": "wall_ffpd0by6ja6762jr",
      "end": [
        6.6100616455078125,
        -1.8499999999999996
      ],
      "name": "Wall 47",
      "type": "wall",
      "start": [
        2.7,
        -1.8499999999999999
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "window_2t5io61jjk146a60"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "exterior"
    },
    "wall_g7be4ouabnoybwg6": {
      "object": "node",
      "id": "wall_g7be4ouabnoybwg6",
      "type": "wall",
      "name": "Wall 116",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "door_68u4nm2qddm7o5j5"
      ],
      "height": 2.74,
      "start": [
        0.3605259954929352,
        -2.2000000000000006
      ],
      "end": [
        0.36052599549293524,
        -3.4157130718231206
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_ggq4ktwq1dux6fyt": {
      "id": "wall_ggq4ktwq1dux6fyt",
      "end": [
        -4.599999999999999,
        12.85
      ],
      "name": "Wall 8",
      "type": "wall",
      "start": [
        -12.200000000000001,
        12.850000000000001
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior"
    },
    "wall_gkvf6dsq8ufarogy": {
      "object": "node",
      "id": "wall_gkvf6dsq8ufarogy",
      "type": "wall",
      "name": "Wall 107",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        1.9000059256672868,
        -6.47076887996643
      ],
      "end": [
        1.900005925667287,
        -5.300000000000001
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_grk3h1cdzdwzqwq0": {
      "object": "node",
      "id": "wall_grk3h1cdzdwzqwq0",
      "type": "wall",
      "name": "Wall 126",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "door_63mh4bxrm80jvzw3",
        "door_e10ytun62cai4o0h"
      ],
      "height": 3.05,
      "start": [
        -4.6000000000000005,
        2.478200674057007
      ],
      "end": [
        -4.599999999999999,
        12.85
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_gyt1819erxgrqv3o": {
      "id": "wall_gyt1819erxgrqv3o",
      "end": [
        1.9000000000000001,
        -9
      ],
      "name": "Wall 113",
      "type": "wall",
      "start": [
        11.55,
        -9
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "window_m461uk60zudupisc",
        "window_ov12mcpitg5y6plc"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "exterior"
    },
    "wall_hr0630nj7o336vix": {
      "id": "wall_hr0630nj7o336vix",
      "end": [
        -8.8,
        -8.924649810791015
      ],
      "name": "Wall 27",
      "type": "wall",
      "slots": {},
      "start": [
        -8.8,
        -6.850000000000001
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "window_8yttdf3v9qonew6q"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "interior"
    },
    "wall_jwjfg77bupgbeu5g": {
      "object": "node",
      "id": "wall_jwjfg77bupgbeu5g",
      "type": "wall",
      "name": "Wall 107",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -4.6000000000000005,
        2.478200674057007
      ],
      "end": [
        -4.6000000000000005,
        3.572127914428711
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_k28xbwp6l4406lhn": {
      "id": "wall_k28xbwp6l4406lhn",
      "end": [
        -12.232887268066406,
        2.478200674057006
      ],
      "name": "Wall 6",
      "type": "wall",
      "start": [
        -11.200000000000001,
        2.478200674057006
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior"
    },
    "wall_kgc359p91o9vu4jf": {
      "id": "wall_kgc359p91o9vu4jf",
      "end": [
        -8.8,
        -6.8500000000000005
      ],
      "name": "Wall 24",
      "type": "wall",
      "start": [
        -12.100000000000001,
        -6.8500000000000005
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "window_8i1xpcrmupvg8ugi"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_kl7y48oc2hxpi2k9": {
      "id": "wall_kl7y48oc2hxpi2k9",
      "end": [
        4.805798530578613,
        -4.04132604598999
      ],
      "name": "Wall 171",
      "type": "wall",
      "start": [
        2.7,
        -4.04132604598999
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "item_gkj2403uykwaepxq"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "interior"
    },
    "wall_ksadcg2ce927liir": {
      "id": "wall_ksadcg2ce927liir",
      "end": [
        -1.9504812955856323,
        2.9499636829170583
      ],
      "name": "Wall 126",
      "type": "wall",
      "start": [
        -3.7828824995228247,
        2.9499636829170583
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "door_ayus02olzi93jnya"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior"
    },
    "wall_l0wduir1mgtwld7f": {
      "object": "node",
      "id": "wall_l0wduir1mgtwld7f",
      "type": "wall",
      "name": "Wall 113",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "item_snr2dk1sdwyf09sr"
      ],
      "height": 2.74,
      "start": [
        -8.029067039489746,
        -1.7
      ],
      "end": [
        -8.029067039489746,
        0.34999999999999853
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_l7c7cudzy37f1rkf": {
      "object": "node",
      "id": "wall_l7c7cudzy37f1rkf",
      "type": "wall",
      "name": "Wall 103",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "start": [
        2.7,
        -0.5612221956253052
      ],
      "end": [
        -0.35166916237511003,
        -0.5723887264372653
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_lgb7shys1pvu6m0x": {
      "id": "wall_lgb7shys1pvu6m0x",
      "end": [
        -8.8,
        -3.6500000000000004
      ],
      "name": "Wall 164",
      "type": "wall",
      "start": [
        -8.8,
        -6.8500000000000005
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "door_ulivl1f2oxfbv7hn"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "exterior"
    },
    "wall_lgrehtk44a3ftjdn": {
      "id": "wall_lgrehtk44a3ftjdn",
      "end": [
        2.7,
        -3.41571307182312
      ],
      "name": "Wall 172",
      "type": "wall",
      "start": [
        2.7,
        -1.8499999999999999
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "interior"
    },
    "wall_lq0f5o489wk7j5gm": {
      "id": "wall_lq0f5o489wk7j5gm",
      "end": [
        11.55,
        -1.8499999999999948
      ],
      "name": "Wall 47",
      "type": "wall",
      "start": [
        6.9,
        -1.85
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "window_vl3weekqdn6e8w63",
        "window_zhjk0z1ba4720khz"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior"
    },
    "wall_m33hyhbqlx4oqw8c": {
      "id": "wall_m33hyhbqlx4oqw8c",
      "end": [
        1.9000000000000001,
        -9
      ],
      "name": "Wall 113",
      "type": "wall",
      "start": [
        6.9,
        -9
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "window_yuxpgu9qeqh7ez55"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior"
    },
    "wall_mdc5ub8llx3izl6z": {
      "object": "node",
      "id": "wall_mdc5ub8llx3izl6z",
      "type": "wall",
      "name": "Wall 124",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -4.6000000000000005,
        2.478200674057007
      ],
      "end": [
        -4.600000000000001,
        0.19171042514883752
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_mhyvcpmtu121wrz2": {
      "object": "node",
      "id": "wall_mhyvcpmtu121wrz2",
      "type": "wall",
      "name": "Wall 111",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -8.029067039489746,
        0.34999999999999853
      ],
      "end": [
        -10.475817298889162,
        0.3499999999999981
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_n8p4o7n2gxnaqwde": {
      "object": "node",
      "id": "wall_n8p4o7n2gxnaqwde",
      "type": "wall",
      "name": "Wall 115",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -10.475817298889162,
        -3.6500000000000004
      ],
      "end": [
        -8.8,
        -3.6500000000000004
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_nklw3aflb1cy11dq": {
      "object": "node",
      "id": "wall_nklw3aflb1cy11dq",
      "type": "wall",
      "name": "Wall 104",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "curveOffset": -0.38693839829493304,
      "start": [
        -1.166545033454895,
        -0.7140538692474365
      ],
      "end": [
        0.3605259954929352,
        -2.2000000000000006
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_nnk3js0xjbmrg6bp": {
      "object": "node",
      "id": "wall_nnk3js0xjbmrg6bp",
      "type": "wall",
      "name": "Wall 110",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "door_nzuk0xuqmdjqir8w"
      ],
      "height": 3.05,
      "start": [
        -11.200000000000001,
        -2.4000000000000004
      ],
      "end": [
        -8.8,
        -2.4000000000000004
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_nqx2se3a3eksgajk": {
      "id": "wall_nqx2se3a3eksgajk",
      "end": [
        -1.138415994959748,
        0.8478581299369649
      ],
      "name": "Wall 106",
      "type": "wall",
      "start": [
        2.7,
        0.8478581309318545
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "window_g467zmkjfvmpi37i"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "interior"
    },
    "wall_o7vw19ar2z7vqwjz": {
      "id": "wall_o7vw19ar2z7vqwjz",
      "end": [
        -11.200000000000001,
        -2.4000000000000004
      ],
      "name": "Wall 1",
      "type": "wall",
      "start": [
        -11.200000000000001,
        2.478200674057006
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "window_lap3ui90lc29igh8"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_obbuari0p7ilw3lz": {
      "id": "wall_obbuari0p7ilw3lz",
      "end": [
        11.55,
        -9
      ],
      "name": "Wall 108",
      "type": "wall",
      "start": [
        11.55,
        -9
      ],
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "interior"
    },
    "wall_olzyoqli8tygcbfx": {
      "id": "wall_olzyoqli8tygcbfx",
      "end": [
        -12.100000000000001,
        -2.4000000000000004
      ],
      "name": "Wall 21",
      "type": "wall",
      "start": [
        -11.200000000000001,
        -2.4000000000000004
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_ovpjmscb9a1b9a2t": {
      "id": "wall_ovpjmscb9a1b9a2t",
      "end": [
        -4.65,
        -10.6
      ],
      "name": "Wall 36",
      "type": "wall",
      "start": [
        -8.8,
        -10.6
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "door_39lvain1x33slnkl"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_p2okf9q1033p6the": {
      "id": "wall_p2okf9q1033p6the",
      "end": [
        -8.8,
        2.4782006740570064
      ],
      "name": "Wall 5",
      "type": "wall",
      "start": [
        -7.800000000000001,
        2.4782006740570064
      ],
      "camera": {
        "mode": "perspective",
        "target": [
          0,
          0,
          0
        ],
        "position": [
          5.301518750588389,
          22.750831875368014,
          25.146157458371082
        ]
      },
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior"
    },
    "wall_psgvvgjyt3h5mqs9": {
      "object": "node",
      "id": "wall_psgvvgjyt3h5mqs9",
      "type": "wall",
      "name": "Wall 106",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "door_gkfoks7c5i9ssnke",
        "door_ujpqu191fdu84dng"
      ],
      "height": 2.74,
      "start": [
        1.900005925667287,
        -5.300000000000001
      ],
      "end": [
        6.6100616455078125,
        -5.300000000000001
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_pzdzghc1rqs3nz99": {
      "object": "node",
      "id": "wall_pzdzghc1rqs3nz99",
      "type": "wall",
      "name": "Wall 114",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "curveOffset": 0.2,
      "start": [
        -4.600000000000001,
        0.19171042514883752
      ],
      "end": [
        -5.378747463226318,
        -0.5723887264372649
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_qeidmjw3hsngmjw6": {
      "object": "node",
      "id": "wall_qeidmjw3hsngmjw6",
      "type": "wall",
      "name": "Wall 113",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "start": [
        -8.8,
        -5.65
      ],
      "end": [
        -8.8,
        -3.9014689922332764
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_raigk3h3xjbhtvbu": {
      "id": "wall_raigk3h3xjbhtvbu",
      "end": [
        1.9000000000000001,
        -9
      ],
      "name": "Wall 113",
      "type": "wall",
      "start": [
        1.9000000000000004,
        -5.5
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior"
    },
    "wall_rd5z773vr7loeh1h": {
      "object": "node",
      "id": "wall_rd5z773vr7loeh1h",
      "type": "wall",
      "name": "Wall 124",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "door_y7is7cpm3i59v09n"
      ],
      "height": 3.05,
      "start": [
        -4.6000000000000005,
        2.478200674057007
      ],
      "end": [
        -4.600000000000001,
        0.19171042514883752
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_ryhertsxf1amrqpm": {
      "object": "node",
      "id": "wall_ryhertsxf1amrqpm",
      "type": "wall",
      "name": "Wall 112",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -8.8,
        -3.6500000000000004
      ],
      "end": [
        -8.8,
        -2.817725658416748
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_s6wrdq4txllsvbnh": {
      "object": "node",
      "id": "wall_s6wrdq4txllsvbnh",
      "type": "wall",
      "name": "Wall 114",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "start": [
        -5.378747463226318,
        -0.5723887264372649
      ],
      "end": [
        -8.8,
        -0.5723887264372651
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_s93bobq5lzyrbas3": {
      "object": "node",
      "id": "wall_s93bobq5lzyrbas3",
      "type": "wall",
      "name": "Wall 106",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        1.9000000000000001,
        -9
      ],
      "end": [
        1.9000059256672868,
        -6.47076887996643
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_srdt9z5br3dy70fx": {
      "id": "wall_srdt9z5br3dy70fx",
      "end": [
        -8.8,
        -5.295473098754883
      ],
      "name": "Wall 165",
      "type": "wall",
      "start": [
        -6.3500000000000005,
        -5.295473098754883
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "unknown",
      "children": [
        "door_d81levvdt4tmt02q"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "unknown"
    },
    "wall_sx5zae3ghhwcqwgj": {
      "id": "wall_sx5zae3ghhwcqwgj",
      "end": [
        11.55,
        -9
      ],
      "name": "Wall 53",
      "type": "wall",
      "start": [
        11.55,
        -1.8499999999999948
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "window_0f9bl7gfvtlongnc"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior",
      "curveOffset": 0
    },
    "wall_t0oca55j4qm6ubxa": {
      "object": "node",
      "id": "wall_t0oca55j4qm6ubxa",
      "type": "wall",
      "name": "Wall 112",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "start": [
        2.7,
        -1.8500000000000005
      ],
      "end": [
        2.7000000000000006,
        -4
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_t5r91noa0eqdilf0": {
      "id": "wall_t5r91noa0eqdilf0",
      "end": [
        -4.6000000000000005,
        3.572127914428711
      ],
      "name": "Wall 106",
      "type": "wall",
      "start": [
        -10.475817298889162,
        3.572127914428711
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "window_a1wqnv1lywps5vl8"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "exterior"
    },
    "wall_tbbfz0sxacoadch5": {
      "object": "node",
      "id": "wall_tbbfz0sxacoadch5",
      "type": "wall",
      "name": "Wall 107",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "door_s400607kau06wa3d"
      ],
      "height": 2.74,
      "start": [
        -4.600000000000001,
        0.19171042514883752
      ],
      "end": [
        -6.3500000000000005,
        0.2
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_tts5tcmrlvysf3i0": {
      "object": "node",
      "id": "wall_tts5tcmrlvysf3i0",
      "type": "wall",
      "name": "Wall 9",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "start": [
        -7.800000000000001,
        2.4782006740570064
      ],
      "end": [
        -4.6000000000000005,
        2.478200674057007
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_twjrbha7gdx24q8c": {
      "id": "wall_twjrbha7gdx24q8c",
      "end": [
        -1.9504812955856323,
        2.9499636829170583
      ],
      "name": "Wall 126",
      "type": "wall",
      "start": [
        -3.7828824995228247,
        2.9499636829170583
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "window_u6yp3z754ya6gqkq"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "exterior"
    },
    "wall_tyxfrc8t1hgynakm": {
      "id": "wall_tyxfrc8t1hgynakm",
      "end": [
        -4.65,
        -5.295473098754882
      ],
      "name": "Wall 158",
      "type": "wall",
      "start": [
        -6.3500000000000005,
        -5.295473098754883
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "exterior"
    },
    "wall_u8gh6n4rogxbkzv6": {
      "object": "node",
      "id": "wall_u8gh6n4rogxbkzv6",
      "type": "wall",
      "name": "Wall 104",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "door_k7gbf9b6v34vmjxw"
      ],
      "height": 3.05,
      "start": [
        6.9,
        -5.5
      ],
      "end": [
        1.9000000000000004,
        -5.5
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_v50ilxj4rwi1d99l": {
      "id": "wall_v50ilxj4rwi1d99l",
      "end": [
        6.618342399597168,
        -6.47076887996643
      ],
      "name": "Wall 177",
      "type": "wall",
      "start": [
        1.9000059256672868,
        -6.47076887996643
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "door_3g0tkr0awo4n9s4i"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "exterior"
    },
    "wall_x0l6a948vo278i9a": {
      "object": "node",
      "id": "wall_x0l6a948vo278i9a",
      "type": "wall",
      "name": "Wall 156",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -6.3500000000000005,
        0.2
      ],
      "end": [
        -6.3500000000000005,
        -1.7000000000000002
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_x1eelmdpg7hie8kj": {
      "id": "wall_x1eelmdpg7hie8kj",
      "end": [
        11.55,
        -9
      ],
      "name": "Wall 53",
      "type": "wall",
      "start": [
        11.55,
        -1.8499999999999994
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "window_v5cxsufjyca99a13"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "exterior",
      "curveOffset": 0
    },
    "wall_x2ycddaw83l4nku0": {
      "id": "wall_x2ycddaw83l4nku0",
      "end": [
        -6.3500000000000005,
        -2.817725658416748
      ],
      "name": "Wall 156",
      "type": "wall",
      "start": [
        -6.3500000000000005,
        -1.7000000000000002
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "door_3n50o6r56ncgk8zh"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "interior"
    },
    "wall_x9ypfzv087srj3sa": {
      "id": "wall_x9ypfzv087srj3sa",
      "end": [
        -12.232887268066406,
        2.478200674057006
      ],
      "name": "Wall 43",
      "type": "wall",
      "start": [
        -12.200000000000001,
        12.850000000000001
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "window_lvqq1uv4arl582fr"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_xb8rlb5b55gd8m0v": {
      "id": "wall_xb8rlb5b55gd8m0v",
      "end": [
        2.7,
        -0.5612221956253052
      ],
      "name": "Wall 39",
      "type": "wall",
      "start": [
        2.7,
        2.2
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "window_frin1p8a6mlioimu"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior"
    },
    "wall_yjt5gubolz3aeo9c": {
      "object": "node",
      "id": "wall_yjt5gubolz3aeo9c",
      "type": "wall",
      "name": "Wall 114",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -8.8,
        -2.817725658416748
      ],
      "end": [
        -6.3500000000000005,
        -2.817725658416748
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_yw7se4h029auzwpp": {
      "id": "wall_yw7se4h029auzwpp",
      "end": [
        1.9000000000000001,
        -10.8
      ],
      "name": "Wall 113",
      "type": "wall",
      "start": [
        1.9000000000000001,
        -9
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior"
    },
    "wall_zgt30hblc7v8tpgm": {
      "id": "wall_zgt30hblc7v8tpgm",
      "end": [
        -8.8,
        -6.8500000000000005
      ],
      "name": "Wall 24",
      "type": "wall",
      "start": [
        -10.475817298889162,
        -6.8500000000000005
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "window_8h93th3pgydet9cj"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "interior"
    },
    "wall_zjgzjefvm0lq42lz": {
      "id": "wall_zjgzjefvm0lq42lz",
      "end": [
        -1.1500000000000001,
        2.478200674057007
      ],
      "name": "Wall 129",
      "type": "wall",
      "start": [
        -1.9504812955856323,
        2.9499636829170583
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior"
    },
    "wall_zl2w3wx6ous4m0fa": {
      "object": "node",
      "id": "wall_zl2w3wx6ous4m0fa",
      "type": "wall",
      "name": "Wall 109",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "door_wc7fcvnu0r380dm1"
      ],
      "height": 3.05,
      "start": [
        -8.8,
        -0.5723887264372651
      ],
      "end": [
        -8.8,
        -2.4000000000000004
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "zone_1s7y2o3ttk5muf66": {
      "id": "zone_1s7y2o3ttk5muf66",
      "name": "GARAGE",
      "type": "zone",
      "color": "#84cc16",
      "object": "node",
      "polygon": [
        [
          -12.200000000000001,
          12.850000000000001
        ],
        [
          -12.232887268066406,
          2.478200674057006
        ],
        [
          -4.6000000000000005,
          2.478200674057007
        ],
        [
          -4.599999999999999,
          12.85
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "autoFromWalls": false,
      "boundaryWallIds": []
    },
    "zone_455syxmte0eb93qi": {
      "id": "zone_455syxmte0eb93qi",
      "name": "MASTER BATH",
      "type": "zone",
      "color": "#10b981",
      "object": "node",
      "polygon": [
        [
          2.6490979194641113,
          -1.8734891414642334
        ],
        [
          2.7,
          -4.04132604598999
        ],
        [
          3.1272172927856445,
          -4.04132604598999
        ],
        [
          3.1272172927856445,
          -5.2997359790289496
        ],
        [
          6.6100616455078125,
          -5.300000000000001
        ],
        [
          6.6100616455078125,
          -1.8499999999999996
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "autoFromWalls": false,
      "boundaryWallIds": []
    },
    "zone_6ly3paxtt86e0wpt": {
      "object": "node",
      "id": "zone_6ly3paxtt86e0wpt",
      "type": "zone",
      "name": "PLAY AREA",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -0.31503617763519287,
          -0.6303873062133789
        ],
        [
          -0.046044595539569855,
          -1.203431487083435
        ],
        [
          0.07767591625452042,
          -1.8500000000000003
        ],
        [
          0.05,
          -5.4
        ],
        [
          2.6500000000000004,
          -5.4
        ],
        [
          2.6500000000000004,
          -4.05
        ],
        [
          2.7,
          -0.5612221956253052
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#ef4444"
    },
    "zone_7gzqmq88dhnp6tcv": {
      "id": "zone_7gzqmq88dhnp6tcv",
      "name": "BEDROOM 2",
      "type": "zone",
      "color": "#ef4444",
      "object": "node",
      "polygon": [
        [
          -4.66795539855957,
          -5.313344955444336
        ],
        [
          -8.800919532775879,
          -5.30269718170166
        ],
        [
          -8.790030479431152,
          -8.933555603027344
        ],
        [
          -4.673476219177246,
          -8.920652389526367
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa"
    },
    "zone_847mtcad70ykhska": {
      "id": "zone_847mtcad70ykhska",
      "name": "WALK-IN CLOSET",
      "type": "zone",
      "color": "#06b6d4",
      "object": "node",
      "polygon": [
        [
          6.618342399597168,
          -9
        ],
        [
          6.618342399597168,
          -6.47076887996643
        ],
        [
          1.9000059256672868,
          -6.47076887996643
        ],
        [
          1.9000000000000001,
          -9
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "autoFromWalls": true,
      "boundaryWallIds": [
        "wall_7gjnzk8uod8j1v4v",
        "wall_v50ilxj4rwi1d99l",
        "wall_s93bobq5lzyrbas3",
        "wall_gyt1819erxgrqv3o"
      ]
    },
    "zone_8x39l31lqslousp7": {
      "id": "zone_8x39l31lqslousp7",
      "name": "STAIR",
      "type": "zone",
      "color": "#84cc16",
      "object": "node",
      "polygon": [
        [
          -4.586207866668701,
          0.02325040102005005
        ],
        [
          -4.584458351135254,
          -5.13625431060791
        ],
        [
          0,
          -5.1000000000000005
        ],
        [
          0.05,
          -1.85
        ],
        [
          -0.1,
          -1.05
        ],
        [
          -0.65,
          -0.15000000000000002
        ],
        [
          -1.184754490852356,
          0.10151641070842743
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "autoFromWalls": false,
      "boundaryWallIds": []
    },
    "zone_9548m4bfj1zvy5bn": {
      "id": "zone_9548m4bfj1zvy5bn",
      "name": "OFFICE 1",
      "type": "zone",
      "color": "#f97316",
      "object": "node",
      "polygon": [
        [
          -1.1480247549681735,
          2.20020303858821
        ],
        [
          -1.145724892616272,
          0.16443949937820435
        ],
        [
          -0.658948540687561,
          -0.21658560633659363
        ],
        [
          -0.35166916237511003,
          -0.5723887264372653
        ],
        [
          2.7,
          -0.5612221956253052
        ],
        [
          2.7,
          2.2
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "autoFromWalls": false,
      "boundaryWallIds": []
    },
    "zone_b6ykxq9453qfekvc": {
      "id": "zone_b6ykxq9453qfekvc",
      "name": "FOYER",
      "type": "zone",
      "color": "#f59e0b",
      "object": "node",
      "polygon": [
        [
          -4.621840476989746,
          0.04533027857542038
        ],
        [
          -1.1279220581054688,
          0.05650510638952255
        ],
        [
          -1.1537832021713257,
          2.4582035541534424
        ],
        [
          -1.947273850440979,
          2.9314281940460205
        ],
        [
          -3.8069400787353516,
          2.960907220840454
        ],
        [
          -4.60713529586792,
          2.46974515914917
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5"
    },
    "zone_er1at16o0v8fwn1j": {
      "id": "zone_er1at16o0v8fwn1j",
      "name": "BATH 1",
      "type": "zone",
      "color": "#84cc16",
      "object": "node",
      "polygon": [
        [
          6.9,
          -4
        ],
        [
          6.9,
          -1.85
        ],
        [
          2.7,
          -1.8500000000000005
        ],
        [
          2.7000000000000006,
          -4
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "autoFromWalls": true,
      "boundaryWallIds": [
        "wall_0f6gpecryeqyyjk1",
        "wall_c783g0mjvk11z4he",
        "wall_t0oca55j4qm6ubxa",
        "wall_fvsxjxn9ghx8efja"
      ]
    },
    "zone_jj7f02g6yl27oowk": {
      "id": "zone_jj7f02g6yl27oowk",
      "name": "DINNING",
      "type": "zone",
      "color": "#a855f7",
      "object": "node",
      "polygon": [
        [
          -8.847864151000977,
          -6.8500000000000005
        ],
        [
          -4.583771228790283,
          -6.879721641540527
        ],
        [
          -4.580231666564941,
          -10.594766616821289
        ],
        [
          -8.8,
          -10.6
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "autoFromWalls": false,
      "boundaryWallIds": []
    },
    "zone_p9rpjd0ut6ga44hm": {
      "object": "node",
      "id": "zone_p9rpjd0ut6ga44hm",
      "type": "zone",
      "name": "OPEN TO BELOW",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -4.6000000000000005,
          -8.5
        ],
        [
          -3.7,
          -8.5
        ],
        [
          -2.6500000000000004,
          -8.15
        ],
        [
          -1.3607044696807864,
          -6.9107184410095215
        ],
        [
          -0.8,
          -6
        ],
        [
          1.75,
          -5.8500000000000005
        ],
        [
          1.8785910606384277,
          -5.321436882019043
        ],
        [
          1.8628737926483154,
          -10.830947875976562
        ],
        [
          -4.626218318939209,
          -10.808553695678711
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#10b981"
    },
    "zone_q4zc4q2u77ph0djh": {
      "id": "zone_q4zc4q2u77ph0djh",
      "name": "MASTER BEDROOM",
      "type": "zone",
      "color": "#3b82f6",
      "object": "node",
      "polygon": [
        [
          6.6100616455078125,
          -1.8499999999999996
        ],
        [
          11.55,
          -1.8499999999999994
        ],
        [
          11.55,
          -9
        ],
        [
          6.618342399597168,
          -9
        ],
        [
          6.618342399597168,
          -6.47076887996643
        ],
        [
          1.9000059256672868,
          -6.47076887996643
        ],
        [
          1.900005925667287,
          -5.300000000000001
        ],
        [
          6.6100616455078125,
          -5.300000000000001
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "autoFromWalls": false,
      "boundaryWallIds": []
    },
    "zone_savdbm5sca899j8q": {
      "object": "node",
      "id": "zone_savdbm5sca899j8q",
      "type": "zone",
      "name": "LIVING ROOM",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -4.542264938354492,
          -5.12995719909668
        ],
        [
          0,
          -5.15
        ],
        [
          0,
          -5.4
        ],
        [
          1.85,
          -5.4
        ],
        [
          1.9000000000000001,
          -10.8
        ],
        [
          -4.65,
          -10.8
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#ef4444"
    },
    "zone_xz2wynqw3ukpgteg": {
      "id": "zone_xz2wynqw3ukpgteg",
      "name": "GARAGE",
      "type": "zone",
      "color": "#a855f7",
      "object": "node",
      "polygon": [
        [
          -12.187543869018555,
          12.85317325592041
        ],
        [
          -12.242585182189941,
          2.473761796951294
        ],
        [
          -4.607490062713623,
          2.470113515853882
        ],
        [
          -4.6169657707214355,
          12.840657234191895
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5"
    },
    "fence_6fkko2bpit6v1atg": {
      "id": "fence_6fkko2bpit6v1atg",
      "end": [
        -3.25,
        -8.35
      ],
      "name": "Fence 11",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -2.7,
        -8.15
      ],
      "style": "slat",
      "height": 1.8,
      "object": "node",
      "postCap": "pyramid",
      "slatGap": 0.01,
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "postSize": 0.1,
      "baseStyle": "grounded",
      "edgeInset": 0.015,
      "thickness": 0.08,
      "baseHeight": 0.22,
      "showInfill": true,
      "postSpacing": 2,
      "topRailHeight": 0.04,
      "groundClearance": 0
    },
    "fence_a6wh20fft3v7y8jf": {
      "id": "fence_a6wh20fft3v7y8jf",
      "end": [
        -3.75,
        -8.5
      ],
      "name": "Fence 12",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -3.25,
        -8.35
      ],
      "style": "slat",
      "height": 1.8,
      "object": "node",
      "postCap": "pyramid",
      "slatGap": 0.01,
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "postSize": 0.1,
      "baseStyle": "grounded",
      "edgeInset": 0.015,
      "thickness": 0.08,
      "baseHeight": 0.22,
      "showInfill": true,
      "postSpacing": 2,
      "topRailHeight": 0.04,
      "groundClearance": 0
    },
    "fence_c6s6dz5mwca9ehky": {
      "id": "fence_c6s6dz5mwca9ehky",
      "end": [
        -0.75,
        -5.95
      ],
      "name": "Fence 6",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -0.4,
        -5.8500000000000005
      ],
      "style": "slat",
      "height": 1.8,
      "object": "node",
      "postCap": "pyramid",
      "slatGap": 0.01,
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "postSize": 0.1,
      "baseStyle": "grounded",
      "edgeInset": 0.015,
      "thickness": 0.08,
      "baseHeight": 0.22,
      "showInfill": true,
      "postSpacing": 2,
      "topRailHeight": 0.04,
      "groundClearance": 0
    },
    "fence_c99il15mpptjo7yu": {
      "id": "fence_c99il15mpptjo7yu",
      "end": [
        -0.4,
        -5.8500000000000005
      ],
      "name": "Fence 5",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        1.7000000000000002,
        -5.8500000000000005
      ],
      "style": "slat",
      "height": 1.8,
      "object": "node",
      "postCap": "pyramid",
      "slatGap": 0.01,
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "postSize": 0.1,
      "baseStyle": "grounded",
      "edgeInset": 0.015,
      "thickness": 0.08,
      "baseHeight": 0.22,
      "showInfill": true,
      "postSpacing": 2,
      "topRailHeight": 0.04,
      "groundClearance": 0
    },
    "fence_dm14c8d7mhzihi3l": {
      "id": "fence_dm14c8d7mhzihi3l",
      "end": [
        -1.4500000000000002,
        -6.8500000000000005
      ],
      "name": "Fence 8",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -0.9,
        -6.1000000000000005
      ],
      "style": "slat",
      "height": 1.8,
      "object": "node",
      "postCap": "pyramid",
      "slatGap": 0.01,
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "postSize": 0.1,
      "baseStyle": "grounded",
      "edgeInset": 0.015,
      "thickness": 0.08,
      "baseHeight": 0.22,
      "showInfill": true,
      "postSpacing": 2,
      "topRailHeight": 0.04,
      "groundClearance": 0
    },
    "fence_eze4s0kv5c5jbbs6": {
      "id": "fence_eze4s0kv5c5jbbs6",
      "end": [
        -0.9,
        -6.1000000000000005
      ],
      "name": "Fence 7",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -0.75,
        -5.95
      ],
      "style": "slat",
      "height": 1.8,
      "object": "node",
      "postCap": "pyramid",
      "slatGap": 0.01,
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "postSize": 0.1,
      "baseStyle": "grounded",
      "edgeInset": 0.015,
      "thickness": 0.08,
      "baseHeight": 0.22,
      "showInfill": true,
      "postSpacing": 2,
      "topRailHeight": 0.04,
      "groundClearance": 0
    },
    "fence_jpi9nag22exqrufs": {
      "id": "fence_jpi9nag22exqrufs",
      "end": [
        -3,
        -3
      ],
      "name": "Fence 25",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -4.6000000000000005,
        -1.5
      ],
      "style": "slat",
      "height": 1.8,
      "object": "node",
      "postCap": "pyramid",
      "slatGap": 0.01,
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "postSize": 0.1,
      "baseStyle": "grounded",
      "edgeInset": 0.015,
      "thickness": 0.08,
      "baseHeight": 0.22,
      "showInfill": true,
      "curveOffset": 0.3298375338227537,
      "postSpacing": 2,
      "topRailHeight": 0.04,
      "groundClearance": 0
    },
    "fence_lsoklv0zpciutgh4": {
      "id": "fence_lsoklv0zpciutgh4",
      "end": [
        -2.9000000000000004,
        -4.2
      ],
      "name": "Fence 23",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -1.1,
        -3
      ],
      "style": "slat",
      "height": 1.8,
      "object": "node",
      "postCap": "pyramid",
      "slatGap": 0.01,
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "postSize": 0.1,
      "baseStyle": "grounded",
      "edgeInset": 0.015,
      "thickness": 0.08,
      "baseHeight": 0.22,
      "showInfill": true,
      "curveOffset": -0.42104307867436597,
      "postSpacing": 2,
      "topRailHeight": 0.04,
      "groundClearance": 0
    },
    "fence_lz3mjhrghbe2kqg2": {
      "id": "fence_lz3mjhrghbe2kqg2",
      "end": [
        -2.2,
        -7.7
      ],
      "name": "Fence 9",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -1.4500000000000002,
        -6.8500000000000005
      ],
      "style": "slat",
      "height": 1.8,
      "object": "node",
      "postCap": "pyramid",
      "slatGap": 0.01,
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "postSize": 0.1,
      "baseStyle": "grounded",
      "edgeInset": 0.015,
      "thickness": 0.08,
      "baseHeight": 0.22,
      "showInfill": true,
      "postSpacing": 2,
      "topRailHeight": 0.04,
      "groundClearance": 0
    },
    "fence_mnaubfds34x031o5": {
      "id": "fence_mnaubfds34x031o5",
      "end": [
        -2.7,
        -8.15
      ],
      "name": "Fence 10",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -2.2,
        -7.7
      ],
      "style": "slat",
      "height": 1.8,
      "object": "node",
      "postCap": "pyramid",
      "slatGap": 0.01,
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "postSize": 0.1,
      "baseStyle": "grounded",
      "edgeInset": 0.015,
      "thickness": 0.08,
      "baseHeight": 0.22,
      "showInfill": true,
      "postSpacing": 2,
      "topRailHeight": 0.04,
      "groundClearance": 0
    },
    "fence_qa6w3uqaea24lj44": {
      "id": "fence_qa6w3uqaea24lj44",
      "end": [
        -4.6000000000000005,
        -8.5
      ],
      "name": "Fence 13",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -3.75,
        -8.5
      ],
      "style": "slat",
      "height": 1.8,
      "object": "node",
      "postCap": "pyramid",
      "slatGap": 0.01,
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "postSize": 0.1,
      "baseStyle": "grounded",
      "edgeInset": 0.015,
      "thickness": 0.08,
      "baseHeight": 0.22,
      "showInfill": true,
      "postSpacing": 2,
      "topRailHeight": 0.04,
      "groundClearance": 0
    },
    "fence_qcey9cu3d2zpl6jf": {
      "id": "fence_qcey9cu3d2zpl6jf",
      "end": [
        -4.6000000000000005,
        -1.5
      ],
      "name": "Fence 24",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -4.6000000000000005,
        0
      ],
      "style": "slat",
      "height": 1.8,
      "object": "node",
      "postCap": "pyramid",
      "slatGap": 0.01,
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "postSize": 0.1,
      "baseStyle": "grounded",
      "edgeInset": 0.015,
      "thickness": 0.08,
      "baseHeight": 0.22,
      "showInfill": true,
      "postSpacing": 2,
      "topRailHeight": 0.04,
      "groundClearance": 0
    },
    "fence_xg894usdipmqdx12": {
      "id": "fence_xg894usdipmqdx12",
      "end": [
        -1.1,
        -3
      ],
      "name": "Fence 22",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -1.1,
        -0.7000000000000001
      ],
      "style": "slat",
      "height": 1.8,
      "object": "node",
      "postCap": "pyramid",
      "slatGap": 0.01,
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "postSize": 0.1,
      "baseStyle": "grounded",
      "edgeInset": 0.015,
      "thickness": 0.08,
      "baseHeight": 0.22,
      "showInfill": true,
      "postSpacing": 2,
      "topRailHeight": 0.04,
      "groundClearance": 0
    },
    "guide_skw3c7nl1xlddmod": {
      "id": "guide_skw3c7nl1xlddmod",
      "url": "asset://2fb07cfd-34ce-4235-8e83-ed45e62512d6",
      "name": "20260706-144228",
      "type": "guide",
      "scale": 3.9371438252155233,
      "object": "node",
      "opacity": 100,
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "position": [
        -0.3,
        0,
        1.3
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ],
      "scaleReference": {
        "end": [
          -3.514033572439088,
          -35.196740389897236
        ],
        "label": "77 ft",
        "start": [
          -3.5153467655181885,
          -11.727140426635742
        ],
        "metersPerUnit": 1,
        "realLengthMeters": 23.4696,
        "measuredLengthUnits": 23.4696
      }
    },
    "guide_uzm44e84di6xijdq": {
      "id": "guide_uzm44e84di6xijdq",
      "url": "asset://c0577b5d-cb5e-4b34-9ea2-6117fd440a0f",
      "name": "20260706-161838",
      "type": "guide",
      "scale": 6.23396788604987,
      "object": "node",
      "opacity": 50,
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -1.2,
        0,
        5.2
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ],
      "scaleReference": {
        "end": [
          -18.233155650289632,
          -10.693175913040651
        ],
        "label": "23.47 m",
        "start": [
          -18.214120864868164,
          12.776816368103027
        ],
        "metersPerUnit": 1,
        "realLengthMeters": 23.47,
        "measuredLengthUnits": 23.47
      }
    },
    "level_jwi4ovhyra2ayxa5": {
      "id": "level_jwi4ovhyra2ayxa5",
      "name": "Level 1",
      "type": "level",
      "level": 0,
      "object": "node",
      "visible": true,
      "children": [
        "wall_k28xbwp6l4406lhn",
        "wall_ggq4ktwq1dux6fyt",
        "wall_tts5tcmrlvysf3i0",
        "wall_kgc359p91o9vu4jf",
        "wall_6kahn8f9drv85wf3",
        "wall_ovpjmscb9a1b9a2t",
        "wall_ed7diphapsqo8s61",
        "wall_0e9fl70a13qct144",
        "wall_x9ypfzv087srj3sa",
        "wall_c783g0mjvk11z4he",
        "wall_0f6gpecryeqyyjk1",
        "wall_yw7se4h029auzwpp",
        "stair_dyp7dqxtm1mg9fxb",
        "wall_sx5zae3ghhwcqwgj",
        "wall_lq0f5o489wk7j5gm",
        "spawn_hg41m7n0824a12jl",
        "roof_lnsbxcznxwp9xhkc",
        "item_brknoq8wgxtcw270",
        "item_mnwpz9skkf8qlflq",
        "item_7jbysauqz8k82rh0",
        "item_y57pu4i6rmcz8y1p",
        "item_ht7u86ckuphquvci",
        "item_i6oqa8crrz268qt0",
        "item_5pl86d2sjqzigmpw",
        "item_3z6z594t7p9le06y",
        "item_9qhehqd7qguusqxw",
        "item_xqcxswzh8m3a6v81",
        "item_gfwnftffebe6mh54",
        "item_wfzcb6l3yf45mazf",
        "item_o3chnfgkzrlv5jut",
        "item_rpameqlewfesmqq3",
        "item_0aahggnuvs15c6lx",
        "item_krkri3xwj1ax7n5o",
        "item_f78105xm9j2ot1ud",
        "item_ot2si54sru1var07",
        "item_kelrsbcaiecj34h0",
        "shelf_xj9qk6cc4ljecueo",
        "wall_grk3h1cdzdwzqwq0",
        "slab_u835g26a9honz9p3",
        "ceiling_kpuqe8bgji5ja9p1",
        "wall_6p6q7ojfk0w3rb2j",
        "wall_ksadcg2ce927liir",
        "wall_zjgzjefvm0lq42lz",
        "guide_uzm44e84di6xijdq",
        "wall_4dnlh79bzdiae0sq",
        "roof_6q8s6i7bk5jbz8f5",
        "roof_7lsqbdxm4go5793n",
        "roof_2shor7hhw0ecopyq",
        "roof_6qwhcqxsypkq0yvb",
        "roof_ah82f09tilia8iln",
        "roof_r7a5i8vfa15mqrst",
        "roof_z3no8shpzwww1ds5",
        "roof_4rdsj61l85pdcmnv",
        "roof_7aff8j587sfx56k3",
        "item_cldit3z1z6sk416h",
        "item_x1og46d4md50m302",
        "item_gedhhy4u9sotya5v",
        "zone_b6ykxq9453qfekvc",
        "zone_xz2wynqw3ukpgteg",
        "zone_8x39l31lqslousp7",
        "item_7idltmsotyqqa4th",
        "item_o91slv42stvmxeys",
        "item_2a3bnywq7pjdrmp9",
        "item_9ssmgpspavql70u5",
        "wall_b5czzyf3pif5knb1",
        "wall_3k90v6l79z717kuw",
        "wall_49gje9vehl4h6hf7",
        "wall_olzyoqli8tygcbfx",
        "shelf_blrhx2qcvfua5dlb",
        "item_yatt1lmodexobbuf",
        "item_lof6kk6hy8bve6xa",
        "item_k8jiyli38lfhrpwo",
        "wall_af75d28vkyigycat",
        "wall_qeidmjw3hsngmjw6",
        "item_xnwmiavf1x9d69f5",
        "item_jtjguqp7gipl7m5k",
        "item_an6vix3f4h6hd5hd",
        "wall_7d0cwdfnwr8wjn7l",
        "ceiling_b32rwiykaaxqniy9",
        "wall_t0oca55j4qm6ubxa",
        "item_00zcrauqzlnioiad",
        "item_ikc8xdbqu9ldpa36",
        "item_99ttltb529czv3pr",
        "wall_xb8rlb5b55gd8m0v",
        "wall_ang3nl8g2alu35h5",
        "item_qt7unfxoxp0opoa1",
        "shelf_e9uyd5ap46etz6hi",
        "shelf_safuubro5eg1ppap",
        "zone_1s7y2o3ttk5muf66",
        "zone_jj7f02g6yl27oowk",
        "zone_6ly3paxtt86e0wpt",
        "zone_savdbm5sca899j8q",
        "zone_9548m4bfj1zvy5bn",
        "zone_er1at16o0v8fwn1j",
        "wall_rd5z773vr7loeh1h",
        "wall_l7c7cudzy37f1rkf",
        "wall_d4rzzj9dzbrvt35n",
        "ceiling_2buqfdi7hepieouk",
        "wall_s6wrdq4txllsvbnh",
        "wall_pzdzghc1rqs3nz99",
        "slab_ffhvq8xxzip0tso8",
        "ceiling_zkplk00wrukf4j27",
        "wall_p2okf9q1033p6the",
        "wall_ey9jixguhdj5n47n",
        "wall_15yo6h4h6h10o4z7",
        "slab_qqni6z0vf7sbwhl4",
        "wall_o7vw19ar2z7vqwjz",
        "shelf_ejcmtf7w101tfqta",
        "shelf_xorotp2xq2u2k5hf",
        "item_dany22d534321s2e",
        "item_dtrsofg93ewff2ec",
        "item_2tb90dr7poydmgs7",
        "item_m269brfz11fyc29c",
        "wall_6vcw97fz8posk55r",
        "slab_gctbh8kepx5w1ysa",
        "ceiling_rhdin353n5537h2g",
        "wall_nnk3js0xjbmrg6bp",
        "slab_vovty80oqxeqm8vm",
        "wall_zl2w3wx6ous4m0fa",
        "slab_b6l7wtnteh69q62x",
        "ceiling_3alb33v7voe4szem",
        "item_puy4khda7tmn7ifu",
        "item_zysypp5wlatt84hi",
        "item_j5cek6k0nr6jf7ae",
        "item_uct1sowpn5hgy53g",
        "item_su66qzhxe1vng8qs",
        "item_am8s25oxksk6s4kq",
        "item_p10iyo2651hbf4s6",
        "wall_raigk3h3xjbhtvbu",
        "wall_u8gh6n4rogxbkzv6",
        "wall_f7d71yf5kpffhcl0",
        "slab_siuwsinr4t684yg4",
        "ceiling_gr1ataxtd8yyrgv9",
        "wall_axg9hnw9xuw2zs72",
        "wall_m33hyhbqlx4oqw8c",
        "wall_eqe4f8yz901mak6u",
        "wall_1sfwpiehgiyh1j76",
        "item_6oascx624qvoya15",
        "item_hplbdhrmca9acshe",
        "item_t7ylyfrlshqzfqpq",
        "item_s3kq6wfvjffd693u",
        "item_0shz7ysys2j73rtf",
        "item_cnc05zdyrgz07xgs",
        "item_exocg9phwfk35yyc",
        "shelf_7asjs5qt07acqgz3",
        "zone_6wqhzz5obyx2b8x1",
        "zone_w2cj2kgt0cq24eo6",
        "zone_wga04d9rsvtht7r8",
        "zone_l7rdpedmqnateqff",
        "zone_33vruxnjc7gyhsix",
        "slab_9xin9ty4ubtpgbnn",
        "slab_01h1ggysul4dqzzr",
        "ceiling_l525k31so5olfcol",
        "ceiling_yi5hdjcax8ix5loa",
        "ceiling_oijz961c0p0tetb5",
        "slab_sv3giiqi4dwpzamp",
        "zone_skd7hdve6q6s4dil",
        "zone_vl000sue7odqwi3g",
        "zone_o9u81nymh1u4ial2"
      ],
      "metadata": {},
      "parentId": null
    },
    "level_tf1ug5dswkkzfhqa": {
      "id": "level_tf1ug5dswkkzfhqa",
      "name": "Level 2",
      "type": "level",
      "level": 1,
      "object": "node",
      "visible": true,
      "children": [
        "wall_zgt30hblc7v8tpgm",
        "wall_hr0630nj7o336vix",
        "wall_e71f2dnudh7lpb9v",
        "wall_5ld53lqd7tpg14f9",
        "wall_ennfhed1hm0ozhch",
        "wall_7q0igcgudqsf4mr6",
        "wall_gyt1819erxgrqv3o",
        "wall_x1eelmdpg7hie8kj",
        "roof_3o2f40xn8ztdoqd3",
        "wall_mdc5ub8llx3izl6z",
        "wall_ag4xz82fkzfty3lt",
        "wall_twjrbha7gdx24q8c",
        "wall_c8lo4kz4h0mef9yv",
        "wall_tyxfrc8t1hgynakm",
        "wall_bvgcs7isi2dii2f7",
        "slab_3vayhrm8fnttu076",
        "ceiling_z59spencdt2wi08t",
        "wall_srdt9z5br3dy70fx",
        "wall_310ivdyjq4bc30oo",
        "wall_216oeqpngzy1zbae",
        "wall_v50ilxj4rwi1d99l",
        "wall_7gjnzk8uod8j1v4v",
        "fence_xg894usdipmqdx12",
        "fence_lsoklv0zpciutgh4",
        "fence_qcey9cu3d2zpl6jf",
        "fence_jpi9nag22exqrufs",
        "wall_ard5a93tnt3wzzh6",
        "wall_nqx2se3a3eksgajk",
        "wall_t5r91noa0eqdilf0",
        "wall_jwjfg77bupgbeu5g",
        "roof_w5he0jkiywejg966",
        "guide_skw3c7nl1xlddmod",
        "item_5qx015iyn9pq2zcg",
        "item_qpudkwziu27qu509",
        "item_4g9fyjloay7wye05",
        "item_qmhod8evoai6fg1z",
        "item_ycj4x3v71zgol9n9",
        "item_12ttyzn7xszgxwhh",
        "item_a720h5x84l8enxab",
        "item_1hdkr5ppq6qmxf3i",
        "item_9nh7sgu9kf8bo7fl",
        "item_3p6xx6c0a2ar385p",
        "item_sgt4copz63u05m9d",
        "item_tltmggpxo9dfg2e2",
        "item_s5pl3fjik6zh45e8",
        "item_t7gztzebyd8isia2",
        "item_hy6l9qjmcpdvpmpj",
        "item_p68narnplomx7l54",
        "item_cowe8780vnw2j18w",
        "item_gao0xpyfxrkmsz2y",
        "item_ttq70o7yr8l4lhwf",
        "item_ipiw4y4nw2q4dp8k",
        "item_3f5hxyhjs5lzu10g",
        "item_e4strh42a4214nfy",
        "zone_7gzqmq88dhnp6tcv",
        "zone_p9rpjd0ut6ga44hm",
        "wall_akpbz3skdgydi3ov",
        "ceiling_f8jone6o85q2jqmk",
        "wall_nklw3aflb1cy11dq",
        "item_ousmkp19jbxsvuhz",
        "item_tbac0ek6qdmwo1ug",
        "item_kv6htmthblly6kyk",
        "item_1zg7k0r3tdmygo37",
        "item_3w0a6atqrv4mfpwf",
        "item_v0rvrdhps2tzx4mo",
        "shelf_u1i6salmpmxtuoeo",
        "wall_s93bobq5lzyrbas3",
        "ceiling_izsrkgb5ept8u3t4",
        "wall_psgvvgjyt3h5mqs9",
        "ceiling_zpw7uqjd2sotzen6",
        "wall_gkvf6dsq8ufarogy",
        "wall_ffpd0by6ja6762jr",
        "wall_5gwd4ynblyy04lge",
        "slab_6soyr04r5vzdf7bd",
        "wall_obbuari0p7ilw3lz",
        "slab_pom30c7bdtulucmr",
        "zone_455syxmte0eb93qi",
        "item_6ilsym950zi1dcxs",
        "item_bjt22tw6v2rl9cw4",
        "zone_847mtcad70ykhska",
        "zone_q4zc4q2u77ph0djh",
        "item_ahgrfnd3wc3tnh7f",
        "wall_tbbfz0sxacoadch5",
        "slab_ybjr7d24qchu5p0r",
        "item_6lwtsrw8es0gcq24",
        "wall_ajixfm922nen33am",
        "wall_ryhertsxf1amrqpm",
        "wall_yjt5gubolz3aeo9c",
        "wall_lgb7shys1pvu6m0x",
        "wall_7s021sc63nm7hmrl",
        "wall_n8p4o7n2gxnaqwde",
        "slab_ulr5kip3ay7gbg3g",
        "ceiling_e7ojqzid4x6mpbwu",
        "wall_eb5d3sujk2od2zdb",
        "slab_lsf29cgczbbuuzid",
        "ceiling_aq8ywck3ckszqm8n",
        "wall_0z5b516n99pjh22l",
        "wall_2toe7w07rutfm9id",
        "wall_4pfwnqac6i2cbpgg",
        "wall_x0l6a948vo278i9a",
        "wall_x2ycddaw83l4nku0",
        "wall_1al1baxmm5ck5dib",
        "wall_1oavpa3822gmh9fe",
        "ceiling_ithz70uth9ws3wxb",
        "wall_l0wduir1mgtwld7f",
        "wall_b2orpcv271ydxy7h",
        "slab_td7wvkz6wevyefj0",
        "ceiling_7n2c7tnrlmg5i7g4",
        "wall_mhyvcpmtu121wrz2",
        "ceiling_d636g6o6dzwobyhl",
        "item_6on8lecsaim3tk0u",
        "slab_79ygeyuv6xdb2shf",
        "slab_si2p2u02wjcg853b",
        "ceiling_ykyg0fsf8jyr1wy7",
        "item_x9ong8o240vab6oc",
        "wall_kl7y48oc2hxpi2k9",
        "wall_lgrehtk44a3ftjdn",
        "wall_8dgmd7npuiiwfp5u",
        "slab_eon14d96e9pdckls",
        "ceiling_kboy3qcsmyfq0l92",
        "wall_1clw6isadmfcdjqi",
        "wall_g7be4ouabnoybwg6",
        "slab_9r9c30umnp24118q",
        "ceiling_gt5o59e5bpkqfsz9",
        "item_j68jyi0mxu7g4d5d",
        "item_a60bxham0hkmttqn",
        "item_bb69qd4p60mihfcw",
        "fence_c99il15mpptjo7yu",
        "fence_c6s6dz5mwca9ehky",
        "fence_eze4s0kv5c5jbbs6",
        "fence_dm14c8d7mhzihi3l",
        "fence_lz3mjhrghbe2kqg2",
        "fence_mnaubfds34x031o5",
        "fence_6fkko2bpit6v1atg",
        "fence_a6wh20fft3v7y8jf",
        "fence_qa6w3uqaea24lj44",
        "slab_fhqmyvs2l5x8njb0",
        "zone_goeez0uwr2t1imci",
        "zone_9bb51qomzt502jep",
        "zone_rp84hescjsbymavx",
        "zone_z0jagp9vt3kt3fd7",
        "zone_jt59f49fi4uqlzuu",
        "zone_nfh3m6wsuog3znk0",
        "zone_ld5qolsuosrcf8lo",
        "zone_u2zribmc6m20yp54",
        "zone_lt6tl3xiav5cw00q"
      ],
      "metadata": {},
      "parentId": "building_mzbjbmaocmp350cc"
    },
    "shelf_7asjs5qt07acqgz3": {
      "object": "node",
      "id": "shelf_7asjs5qt07acqgz3",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        7.2,
        0.35,
        -3
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ],
      "width": 2.0434059715270987,
      "depth": 0.45,
      "thickness": 0.05,
      "height": 0.82,
      "style": "bookshelf",
      "rows": 2,
      "columns": 4,
      "withBack": false,
      "withSides": true,
      "withBottom": true,
      "bracketStyle": "minimal"
    },
    "shelf_blrhx2qcvfua5dlb": {
      "object": "node",
      "id": "shelf_blrhx2qcvfua5dlb",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        -11.2,
        0.49999999999999994,
        -3.6500000000000004
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "width": 1.04,
      "depth": 0.35,
      "thickness": 0.05,
      "height": 2,
      "style": "open-rack",
      "rows": 4,
      "columns": 4,
      "withBack": false,
      "withSides": true,
      "withBottom": true,
      "bracketStyle": "minimal"
    },
    "shelf_e9uyd5ap46etz6hi": {
      "object": "node",
      "id": "shelf_e9uyd5ap46etz6hi",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        2.4000000000000004,
        0.1,
        -1.35
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ],
      "width": 1.46,
      "depth": 0.45,
      "thickness": 0.05,
      "height": 0.82,
      "style": "bookshelf",
      "rows": 2,
      "columns": 4,
      "withBack": false,
      "withSides": true,
      "withBottom": true,
      "bracketStyle": "minimal"
    },
    "shelf_ejcmtf7w101tfqta": {
      "object": "node",
      "id": "shelf_ejcmtf7w101tfqta",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        -9.05,
        0.65,
        -3.15
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ],
      "width": 1.3695974349975577,
      "depth": 0.35,
      "thickness": 0.05,
      "height": 2,
      "style": "open-rack",
      "rows": 4,
      "columns": 4,
      "withBack": false,
      "withSides": true,
      "withBottom": true,
      "bracketStyle": "minimal"
    },
    "shelf_safuubro5eg1ppap": {
      "object": "node",
      "id": "shelf_safuubro5eg1ppap",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        2.4000000000000004,
        0.25,
        -2.8000000000000003
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ],
      "width": 1.4421147918701172,
      "depth": 0.45,
      "thickness": 0.05,
      "height": 0.82,
      "style": "bookshelf",
      "rows": 2,
      "columns": 4,
      "withBack": false,
      "withSides": true,
      "withBottom": true,
      "bracketStyle": "minimal"
    },
    "shelf_u1i6salmpmxtuoeo": {
      "object": "node",
      "id": "shelf_u1i6salmpmxtuoeo",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        -8.5,
        0,
        -7.05
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ],
      "width": 0.7035053730010987,
      "depth": 0.39023590087890625,
      "thickness": 0.05,
      "height": 1.879268131777494,
      "style": "bookshelf",
      "rows": 3,
      "columns": 1,
      "withBack": false,
      "withSides": true,
      "withBottom": true,
      "bracketStyle": "minimal"
    },
    "shelf_xj9qk6cc4ljecueo": {
      "object": "node",
      "id": "shelf_xj9qk6cc4ljecueo",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        -11.84,
        0.3,
        -3.1
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ],
      "width": 1.4272098541259766,
      "depth": 0.35,
      "thickness": 0.05,
      "height": 2,
      "style": "open-rack",
      "rows": 4,
      "columns": 4,
      "withBack": false,
      "withSides": true,
      "withBottom": true,
      "bracketStyle": "minimal"
    },
    "shelf_xorotp2xq2u2k5hf": {
      "object": "node",
      "id": "shelf_xorotp2xq2u2k5hf",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        -11.200000000000001,
        0.9000000000000002,
        -2.6500000000000004
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "width": 1.0739173889160147,
      "depth": 0.35,
      "thickness": 0.05,
      "height": 2,
      "style": "open-rack",
      "rows": 4,
      "columns": 4,
      "withBack": false,
      "withSides": true,
      "withBottom": true,
      "bracketStyle": "minimal"
    },
    "spawn_hg41m7n0824a12jl": {
      "id": "spawn_hg41m7n0824a12jl",
      "name": "Spawn Point",
      "type": "spawn",
      "object": "node",
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -2.896535873413086,
        0,
        1.3351815938949585
      ],
      "rotation": 0
    },
    "stair_dyp7dqxtm1mg9fxb": {
      "object": "node",
      "id": "stair_dyp7dqxtm1mg9fxb",
      "type": "stair",
      "name": "Staircase 1",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -2.828537762593098,
        0,
        -2.6500000000000004
      ],
      "rotation": -1.2217304763960306,
      "stairType": "spiral",
      "fromLevelId": "level_fkoejbpxrc8pfko1",
      "toLevelId": "level_3xsbeo3c6y50zj52",
      "slabOpeningMode": "none",
      "openingOffset": 0,
      "width": 1.1,
      "totalRise": 2.5,
      "stepCount": 18,
      "thickness": 0.25,
      "fillToFloor": false,
      "innerRadius": 0.4,
      "sweepAngle": -5.585053606381854,
      "topLandingMode": "none",
      "topLandingDepth": 0.9,
      "showCenterColumn": false,
      "showStepSupports": false,
      "railingMode": "both",
      "railingHeight": 0.92,
      "children": [
        "sseg_ykt4p8f8w13fg08n"
      ]
    },
    "window_0f9bl7gfvtlongnc": {
      "object": "node",
      "id": "window_0f9bl7gfvtlongnc",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_sx5zae3ghhwcqwgj",
      "visible": true,
      "metadata": {},
      "position": [
        3.7,
        1.4,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_sx5zae3ghhwcqwgj",
      "width": 1.22,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "awning",
      "operationState": 0,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_0fqenkdbiahxp8m4": {
      "object": "node",
      "id": "window_0fqenkdbiahxp8m4",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_axg9hnw9xuw2zs72",
      "visible": true,
      "metadata": {},
      "position": [
        2.45,
        1.4000000000000001,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_axg9hnw9xuw2zs72",
      "width": 2.9,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "casement",
      "operationState": 1,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_0i05uo9pl8jayg6w": {
      "object": "node",
      "id": "window_0i05uo9pl8jayg6w",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_0z5b516n99pjh22l",
      "visible": true,
      "metadata": {},
      "position": [
        4.800000000000001,
        1.6,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_0z5b516n99pjh22l",
      "width": 0.61,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "awning",
      "operationState": 0,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_2t5io61jjk146a60": {
      "object": "node",
      "id": "window_2t5io61jjk146a60",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_ffpd0by6ja6762jr",
      "visible": true,
      "metadata": {},
      "position": [
        1.6,
        1.4,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_ffpd0by6ja6762jr",
      "width": 0.61,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "awning",
      "operationState": 0,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_2xojmcf1jp0d4ku3": {
      "object": "node",
      "id": "window_2xojmcf1jp0d4ku3",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_ard5a93tnt3wzzh6",
      "visible": true,
      "metadata": {},
      "position": [
        1.4500000000000002,
        1.4,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_ard5a93tnt3wzzh6",
      "width": 1.22,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "casement",
      "operationState": 1,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_8h93th3pgydet9cj": {
      "object": "node",
      "id": "window_8h93th3pgydet9cj",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_zgt30hblc7v8tpgm",
      "visible": true,
      "metadata": {},
      "position": [
        1.05,
        1.4,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_zgt30hblc7v8tpgm",
      "width": 0.61,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "sliding",
      "operationState": 0,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_8i1xpcrmupvg8ugi": {
      "object": "node",
      "id": "window_8i1xpcrmupvg8ugi",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_kgc359p91o9vu4jf",
      "visible": true,
      "metadata": {},
      "position": [
        2.1,
        1.4000000000000001,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_kgc359p91o9vu4jf",
      "width": 0.61,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "casement",
      "operationState": 1,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_8yttdf3v9qonew6q": {
      "object": "node",
      "id": "window_8yttdf3v9qonew6q",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_hr0630nj7o336vix",
      "visible": true,
      "metadata": {},
      "position": [
        1.35,
        1.6,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_hr0630nj7o336vix",
      "width": 0.61,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "awning",
      "operationState": 0,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_a1wqnv1lywps5vl8": {
      "object": "node",
      "id": "window_a1wqnv1lywps5vl8",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_t5r91noa0eqdilf0",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        2.81497678756714,
        1.1,
        0
      ],
      "rotation": [
        0,
        6.283185307179586,
        0
      ],
      "side": "front",
      "wallId": "wall_t5r91noa0eqdilf0",
      "width": 1.81,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "awning",
      "operationState": 0.46,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_dmv96pwr85brar07": {
      "object": "node",
      "id": "window_dmv96pwr85brar07",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_c783g0mjvk11z4he",
      "visible": true,
      "metadata": {},
      "position": [
        1.6,
        1.4,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_c783g0mjvk11z4he",
      "width": 0.61,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "awning",
      "operationState": 0,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_dqu99cjklyaruudd": {
      "object": "node",
      "id": "window_dqu99cjklyaruudd",
      "type": "window",
      "name": "Window 3",
      "parentId": "wall_6kahn8f9drv85wf3",
      "visible": true,
      "metadata": {},
      "position": [
        1.928915548324585,
        1.15,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_6kahn8f9drv85wf3",
      "width": 3.05,
      "height": 2.3,
      "openingKind": "window",
      "windowType": "fixed",
      "operationState": 0,
      "awningDirection": "up",
      "casementStyle": "single",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        0.3333333333333333,
        0.3333333333333333,
        0.3333333333333333
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_dx3rc5l274k5ivra": {
      "id": "window_dx3rc5l274k5ivra",
      "name": "Window 1",
      "side": "back",
      "sill": false,
      "type": "window",
      "width": 1.4406158104538918,
      "height": 1.5,
      "object": "node",
      "wallId": "wall_4dnlh79bzdiae0sq",
      "visible": true,
      "metadata": {},
      "parentId": "wall_4dnlh79bzdiae0sq",
      "position": [
        2,
        1.4,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "rowRatios": [
        1
      ],
      "sillDepth": 0.08,
      "archHeight": 0.35,
      "frameDepth": 0.07,
      "hingesSide": "left",
      "windowType": "casement",
      "openingKind": "window",
      "columnRatios": [
        1
      ],
      "cornerRadius": 0.15,
      "openingShape": "rectangle",
      "casementStyle": "french",
      "sillThickness": 0.03,
      "frameThickness": 0.05,
      "operationState": 1,
      "awningDirection": "up",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "openingRevealRadius": 0.025,
      "rowDividerThickness": 0.03,
      "columnDividerThickness": 0.03
    },
    "window_e96ge6hutva7apdk": {
      "object": "node",
      "id": "window_e96ge6hutva7apdk",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_3k90v6l79z717kuw",
      "visible": true,
      "metadata": {},
      "position": [
        1.4468936920166016,
        1.4000000000000001,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_3k90v6l79z717kuw",
      "width": 1.22,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "casement",
      "operationState": 1,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_frin1p8a6mlioimu": {
      "object": "node",
      "id": "window_frin1p8a6mlioimu",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_xb8rlb5b55gd8m0v",
      "visible": true,
      "metadata": {},
      "position": [
        1.3,
        1.4,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_xb8rlb5b55gd8m0v",
      "width": 1.22,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "casement",
      "operationState": 1,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_g467zmkjfvmpi37i": {
      "object": "node",
      "id": "window_g467zmkjfvmpi37i",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_nqx2se3a3eksgajk",
      "visible": true,
      "metadata": {},
      "position": [
        1.85,
        1.4,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_nqx2se3a3eksgajk",
      "width": 1.81,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "casement",
      "operationState": 1,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_h5zbn9h52cx5sxu5": {
      "object": "node",
      "id": "window_h5zbn9h52cx5sxu5",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_5gwd4ynblyy04lge",
      "visible": true,
      "metadata": {},
      "position": [
        1.1,
        1.4,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_5gwd4ynblyy04lge",
      "width": 0.61,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "awning",
      "operationState": 0,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_inffur51awaebd2e": {
      "object": "node",
      "id": "window_inffur51awaebd2e",
      "type": "window",
      "name": "Window 4",
      "parentId": "wall_ennfhed1hm0ozhch",
      "visible": true,
      "metadata": {},
      "slots": {},
      "position": [
        3.45,
        1.15,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_ennfhed1hm0ozhch",
      "width": 4.88,
      "height": 2.3,
      "openingKind": "window",
      "windowType": "fixed",
      "operationState": 0,
      "awningDirection": "up",
      "casementStyle": "single",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        0.25,
        0.25,
        0.25,
        0.25
      ],
      "rowRatios": [
        0.3,
        0.7000000000000001
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": true,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_lap3ui90lc29igh8": {
      "id": "window_lap3ui90lc29igh8",
      "name": "Window 1",
      "side": "front",
      "sill": false,
      "type": "window",
      "width": 1.22,
      "height": 1.5,
      "object": "node",
      "wallId": "wall_o7vw19ar2z7vqwjz",
      "visible": true,
      "metadata": {},
      "parentId": "wall_o7vw19ar2z7vqwjz",
      "position": [
        1.75,
        1.5,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "rowRatios": [
        1
      ],
      "sillDepth": 0.08,
      "archHeight": 0.35,
      "frameDepth": 0.07,
      "hingesSide": "left",
      "windowType": "casement",
      "openingKind": "window",
      "columnRatios": [
        1
      ],
      "cornerRadius": 0.15,
      "openingShape": "rectangle",
      "casementStyle": "french",
      "sillThickness": 0.03,
      "frameThickness": 0.05,
      "operationState": 1,
      "awningDirection": "up",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "openingRevealRadius": 0.025,
      "rowDividerThickness": 0.03,
      "columnDividerThickness": 0.03
    },
    "window_lvqq1uv4arl582fr": {
      "id": "window_lvqq1uv4arl582fr",
      "name": "Window 1",
      "side": "back",
      "sill": false,
      "type": "window",
      "width": 1.22,
      "height": 1.5,
      "object": "node",
      "wallId": "wall_x9ypfzv087srj3sa",
      "visible": true,
      "metadata": {},
      "parentId": "wall_x9ypfzv087srj3sa",
      "position": [
        8,
        1.5,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "rowRatios": [
        1
      ],
      "sillDepth": 0.08,
      "archHeight": 0.35,
      "frameDepth": 0.07,
      "hingesSide": "left",
      "windowType": "casement",
      "openingKind": "window",
      "columnRatios": [
        1
      ],
      "cornerRadius": 0.15,
      "openingShape": "rectangle",
      "casementStyle": "french",
      "sillThickness": 0.03,
      "frameThickness": 0.05,
      "operationState": 1,
      "awningDirection": "up",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "openingRevealRadius": 0.025,
      "rowDividerThickness": 0.03,
      "columnDividerThickness": 0.03
    },
    "window_m461uk60zudupisc": {
      "object": "node",
      "id": "window_m461uk60zudupisc",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_gyt1819erxgrqv3o",
      "visible": true,
      "metadata": {},
      "position": [
        2.45,
        1.4000000000000001,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_gyt1819erxgrqv3o",
      "width": 2.9,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "casement",
      "operationState": 0,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_ov12mcpitg5y6plc": {
      "id": "window_ov12mcpitg5y6plc",
      "name": "Window 1",
      "side": "front",
      "sill": false,
      "type": "window",
      "width": 1.22,
      "height": 1.5,
      "object": "node",
      "wallId": "wall_gyt1819erxgrqv3o",
      "visible": true,
      "metadata": {},
      "parentId": "wall_gyt1819erxgrqv3o",
      "position": [
        6.294368696212769,
        1.4,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "rowRatios": [
        1
      ],
      "sillDepth": 0.08,
      "archHeight": 0.35,
      "frameDepth": 0.07,
      "hingesSide": "left",
      "windowType": "awning",
      "openingKind": "window",
      "columnRatios": [
        1
      ],
      "cornerRadius": 0.15,
      "openingShape": "rectangle",
      "casementStyle": "french",
      "sillThickness": 0.03,
      "frameThickness": 0.05,
      "operationState": 0,
      "awningDirection": "up",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "openingRevealRadius": 0.025,
      "rowDividerThickness": 0.03,
      "columnDividerThickness": 0.03
    },
    "window_tg8s47030gjc8jm3": {
      "object": "node",
      "id": "window_tg8s47030gjc8jm3",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_5gwd4ynblyy04lge",
      "visible": true,
      "metadata": {},
      "position": [
        4,
        1.4,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_5gwd4ynblyy04lge",
      "width": 0.61,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "awning",
      "operationState": 0,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_u3dbch0ez4pzi25v": {
      "object": "node",
      "id": "window_u3dbch0ez4pzi25v",
      "type": "window",
      "name": "Window 4",
      "parentId": "wall_0e9fl70a13qct144",
      "visible": true,
      "metadata": {},
      "slots": {},
      "position": [
        3.45,
        1.15,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_0e9fl70a13qct144",
      "width": 4.88,
      "height": 2.3,
      "openingKind": "window",
      "windowType": "fixed",
      "operationState": 0,
      "awningDirection": "up",
      "casementStyle": "single",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        0.25,
        0.25,
        0.25,
        0.25
      ],
      "rowRatios": [
        0.3,
        0.7000000000000001
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": true,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_u6yp3z754ya6gqkq": {
      "id": "window_u6yp3z754ya6gqkq",
      "name": "Window 1",
      "side": "back",
      "sill": false,
      "type": "window",
      "width": 1.1192901194095612,
      "height": 1.5,
      "object": "node",
      "wallId": "wall_twjrbha7gdx24q8c",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "parentId": "wall_twjrbha7gdx24q8c",
      "position": [
        0.9003166435429053,
        1.4,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "rowRatios": [
        1
      ],
      "sillDepth": 0.08,
      "archHeight": 0.35,
      "frameDepth": 0.07,
      "hingesSide": "left",
      "windowType": "awning",
      "openingKind": "window",
      "columnRatios": [
        1
      ],
      "cornerRadius": 0.15,
      "openingShape": "rectangle",
      "casementStyle": "french",
      "sillThickness": 0.03,
      "frameThickness": 0.05,
      "operationState": 0,
      "awningDirection": "up",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "openingRevealRadius": 0.025,
      "rowDividerThickness": 0.03,
      "columnDividerThickness": 0.03
    },
    "window_v5cxsufjyca99a13": {
      "object": "node",
      "id": "window_v5cxsufjyca99a13",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_x1eelmdpg7hie8kj",
      "visible": true,
      "metadata": {},
      "position": [
        3.7,
        1.4,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_x1eelmdpg7hie8kj",
      "width": 1.22,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "casement",
      "operationState": 0,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_vl3weekqdn6e8w63": {
      "object": "node",
      "id": "window_vl3weekqdn6e8w63",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_lq0f5o489wk7j5gm",
      "visible": true,
      "metadata": {},
      "position": [
        0.8500000000000001,
        1.4000000000000001,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_lq0f5o489wk7j5gm",
      "width": 0.61,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "awning",
      "operationState": 0,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_xcdxrqpcgo3p7tg3": {
      "object": "node",
      "id": "window_xcdxrqpcgo3p7tg3",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_0z5b516n99pjh22l",
      "visible": true,
      "metadata": {},
      "position": [
        1.9683760076761245,
        1.6,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_0z5b516n99pjh22l",
      "width": 0.61,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "awning",
      "operationState": 0,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_yar8hjnszpqjqlk2": {
      "object": "node",
      "id": "window_yar8hjnszpqjqlk2",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_e71f2dnudh7lpb9v",
      "visible": true,
      "metadata": {},
      "position": [
        1.6500000000000001,
        1.1,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_e71f2dnudh7lpb9v",
      "width": 1.81,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "awning",
      "operationState": 0.46,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_yuxpgu9qeqh7ez55": {
      "id": "window_yuxpgu9qeqh7ez55",
      "name": "Window 1",
      "side": "front",
      "sill": false,
      "type": "window",
      "width": 1.22,
      "height": 1.5,
      "object": "node",
      "wallId": "wall_m33hyhbqlx4oqw8c",
      "visible": true,
      "metadata": {},
      "parentId": "wall_m33hyhbqlx4oqw8c",
      "position": [
        1.5999999999999996,
        1.4000000000000001,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "rowRatios": [
        1
      ],
      "sillDepth": 0.08,
      "archHeight": 0.35,
      "frameDepth": 0.07,
      "hingesSide": "left",
      "windowType": "casement",
      "openingKind": "window",
      "columnRatios": [
        1
      ],
      "cornerRadius": 0.15,
      "openingShape": "rectangle",
      "casementStyle": "french",
      "sillThickness": 0.03,
      "frameThickness": 0.05,
      "operationState": 1,
      "awningDirection": "up",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "openingRevealRadius": 0.025,
      "rowDividerThickness": 0.03,
      "columnDividerThickness": 0.03
    },
    "window_zhjk0z1ba4720khz": {
      "object": "node",
      "id": "window_zhjk0z1ba4720khz",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_lq0f5o489wk7j5gm",
      "visible": true,
      "metadata": {},
      "position": [
        3.75,
        1.4000000000000001,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_lq0f5o489wk7j5gm",
      "width": 0.61,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "awning",
      "operationState": 0,
      "awningDirection": "up",
      "casementStyle": "french",
      "hingesSide": "left",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingCornerRadii": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.35,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "columnRatios": [
        1
      ],
      "rowRatios": [
        1
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "ceiling_2buqfdi7hepieouk": {
      "object": "node",
      "id": "ceiling_2buqfdi7hepieouk",
      "type": "ceiling",
      "name": "Room 64 Ceiling",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -8.8,
          -0.5723887264372651
        ],
        [
          -5.378747463226318,
          -0.5723887264372649
        ],
        [
          -5.129446072197104,
          -0.047581525967506644
        ],
        [
          -4.600000000000001,
          0.19171042514883752
        ],
        [
          -4.6000000000000005,
          2.478200674057007
        ],
        [
          -8.8,
          2.4782006740570064
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 3.0999999999999996,
      "autoFromWalls": true
    },
    "ceiling_3alb33v7voe4szem": {
      "id": "ceiling_3alb33v7voe4szem",
      "name": "Room 76 Ceiling",
      "type": "ceiling",
      "holes": [],
      "height": 3.0999999999999996,
      "object": "node",
      "polygon": [
        [
          -8.8,
          2.4782006740570064
        ],
        [
          -11.200000000000001,
          2.478200674057006
        ],
        [
          -11.200000000000001,
          -2.4000000000000004
        ],
        [
          -8.8,
          -2.4000000000000004
        ]
      ],
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "ceiling_7n2c7tnrlmg5i7g4": {
      "object": "node",
      "id": "ceiling_7n2c7tnrlmg5i7g4",
      "type": "ceiling",
      "name": "Room 87 Ceiling",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -6.3500000000000005,
          -1.7000000000000002
        ],
        [
          -6.350000000000002,
          0.9999999999999996
        ],
        [
          -8.029067039489746,
          0.9999999999999994
        ],
        [
          -8.029067039489746,
          -1.7
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 3.3400000000000003,
      "autoFromWalls": true
    },
    "ceiling_aq8ywck3ckszqm8n": {
      "object": "node",
      "id": "ceiling_aq8ywck3ckszqm8n",
      "type": "ceiling",
      "name": "Room 83 Ceiling",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -6.3500000000000005,
          -5.295473098754883
        ],
        [
          -6.3500000000000005,
          -2.817725658416748
        ],
        [
          -8.8,
          -2.817725658416748
        ],
        [
          -8.8,
          -5.295473098754883
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 3.3400000000000003,
      "autoFromWalls": true
    },
    "ceiling_b32rwiykaaxqniy9": {
      "id": "ceiling_b32rwiykaaxqniy9",
      "name": "Room 54 Ceiling",
      "type": "ceiling",
      "holes": [],
      "height": 3.0999999999999996,
      "object": "node",
      "polygon": [
        [
          -12.100000000000001,
          -3.9014689922332764
        ],
        [
          -12.100000000000001,
          -6.8500000000000005
        ],
        [
          -8.8,
          -6.8500000000000005
        ],
        [
          -8.8,
          -3.9014689922332764
        ]
      ],
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "ceiling_d636g6o6dzwobyhl": {
      "object": "node",
      "id": "ceiling_d636g6o6dzwobyhl",
      "type": "ceiling",
      "name": "Room 88 Ceiling",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -10.475817298889162,
          0.3499999999999981
        ],
        [
          -10.475817298889162,
          -2.817725658416748
        ],
        [
          -6.3500000000000005,
          -2.817725658416748
        ],
        [
          -6.3500000000000005,
          -1.7000000000000002
        ],
        [
          -8.029067039489746,
          -1.7
        ],
        [
          -8.029067039489746,
          0.34999999999999853
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 3.3400000000000003,
      "autoFromWalls": true
    },
    "ceiling_e7ojqzid4x6mpbwu": {
      "object": "node",
      "id": "ceiling_e7ojqzid4x6mpbwu",
      "type": "ceiling",
      "name": "Room 78 Ceiling",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -10.475817298889162,
          -3.6500000000000004
        ],
        [
          -10.475817298889162,
          -6.8500000000000005
        ],
        [
          -8.8,
          -6.8500000000000005
        ],
        [
          -8.8,
          -3.6500000000000004
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 3.3400000000000003,
      "autoFromWalls": true
    },
    "ceiling_f8jone6o85q2jqmk": {
      "object": "node",
      "id": "ceiling_f8jone6o85q2jqmk",
      "type": "ceiling",
      "name": "Room 62 Ceiling",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -3.7828824995228247,
          2.9499636829170583
        ],
        [
          -4.6000000000000005,
          2.478200674057007
        ],
        [
          -4.600000000000001,
          0.19171042514883752
        ],
        [
          -6.3500000000000005,
          0.2
        ],
        [
          -6.3500000000000005,
          -5.295473098754883
        ],
        [
          -4.65,
          -5.295473098754882
        ],
        [
          -4.65,
          -10.8
        ],
        [
          1.9000000000000001,
          -10.8
        ],
        [
          1.900005925667287,
          -5.300000000000001
        ],
        [
          3.1272172927856445,
          -5.2997359790289496
        ],
        [
          3.1272172927856445,
          -4.04132604598999
        ],
        [
          2.7,
          -4.04132604598999
        ],
        [
          2.7,
          -3.41571307182312
        ],
        [
          0.36052599549293524,
          -3.4157130718231206
        ],
        [
          0.3605259954929352,
          -2.2000000000000006
        ],
        [
          0.20345488858959593,
          -1.6464171413673683
        ],
        [
          -0.13316236771865175,
          -1.1797115202835589
        ],
        [
          -0.6088814462456746,
          -0.8559574896968845
        ],
        [
          -1.166545033454895,
          -0.7140538692474365
        ],
        [
          -1.1500000000000001,
          2.478200674057007
        ],
        [
          -1.9504812955856323,
          2.9499636829170583
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 3.3400000000000003,
      "autoFromWalls": true
    },
    "ceiling_gr1ataxtd8yyrgv9": {
      "id": "ceiling_gr1ataxtd8yyrgv9",
      "name": "Room 77 Ceiling",
      "type": "ceiling",
      "holes": [],
      "height": 3.0999999999999996,
      "object": "node",
      "polygon": [
        [
          6.9,
          -4
        ],
        [
          6.9,
          -1.85
        ],
        [
          2.7,
          -1.8500000000000005
        ],
        [
          2.7000000000000006,
          -4
        ]
      ],
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "ceiling_gt5o59e5bpkqfsz9": {
      "object": "node",
      "id": "ceiling_gt5o59e5bpkqfsz9",
      "type": "ceiling",
      "name": "Room 91 Ceiling",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          2.7,
          -3.41571307182312
        ],
        [
          2.7,
          0.8478581309318545
        ],
        [
          -1.138415994959748,
          0.8478581299369649
        ],
        [
          -1.166545033454895,
          -0.7140538692474365
        ],
        [
          -0.6088814462456746,
          -0.8559574896968845
        ],
        [
          -0.13316236771865175,
          -1.1797115202835589
        ],
        [
          0.20345488858959593,
          -1.6464171413673683
        ],
        [
          0.3605259954929352,
          -2.2000000000000006
        ],
        [
          0.36052599549293524,
          -3.4157130718231206
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 3.3400000000000003,
      "autoFromWalls": true
    },
    "ceiling_ithz70uth9ws3wxb": {
      "object": "node",
      "id": "ceiling_ithz70uth9ws3wxb",
      "type": "ceiling",
      "name": "Room 86 Ceiling",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -10.475817298889162,
          3.572127914428711
        ],
        [
          -10.475817298889162,
          0.3499999999999981
        ],
        [
          -8.029067039489746,
          0.34999999999999853
        ],
        [
          -8.029067039489746,
          0.9999999999999994
        ],
        [
          -6.350000000000002,
          0.9999999999999996
        ],
        [
          -6.3500000000000005,
          0.2
        ],
        [
          -4.600000000000001,
          0.19171042514883752
        ],
        [
          -4.6000000000000005,
          3.572127914428711
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 3.3400000000000003,
      "autoFromWalls": true
    },
    "ceiling_izsrkgb5ept8u3t4": {
      "id": "ceiling_izsrkgb5ept8u3t4",
      "name": "Room 67 Ceiling",
      "type": "ceiling",
      "holes": [],
      "height": 2.79,
      "object": "node",
      "polygon": [
        [
          6.618342399597168,
          -6.47076887996643
        ],
        [
          1.9000059256672868,
          -6.47076887996643
        ],
        [
          1.9000000000000001,
          -9
        ],
        [
          6.618342399597168,
          -9
        ]
      ],
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "ceiling_kboy3qcsmyfq0l92": {
      "object": "node",
      "id": "ceiling_kboy3qcsmyfq0l92",
      "type": "ceiling",
      "name": "Room 90 Ceiling",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          6.6100616455078125,
          -5.300000000000001
        ],
        [
          6.6100616455078125,
          -1.8499999999999996
        ],
        [
          2.7,
          -1.8499999999999999
        ],
        [
          2.7,
          -4.04132604598999
        ],
        [
          3.1272172927856445,
          -4.04132604598999
        ],
        [
          3.1272172927856445,
          -5.2997359790289496
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 3.3400000000000003,
      "autoFromWalls": true
    },
    "ceiling_kpuqe8bgji5ja9p1": {
      "id": "ceiling_kpuqe8bgji5ja9p1",
      "name": "Room 31 Ceiling",
      "type": "ceiling",
      "holes": [],
      "height": 3.0999999999999996,
      "object": "node",
      "polygon": [
        [
          -4.599999999999999,
          12.85
        ],
        [
          -12.200000000000001,
          12.850000000000001
        ],
        [
          -12.232887268066406,
          2.478200674057006
        ],
        [
          -4.6000000000000005,
          2.478200674057007
        ]
      ],
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "ceiling_rhdin353n5537h2g": {
      "id": "ceiling_rhdin353n5537h2g",
      "name": "Room 75 Ceiling",
      "type": "ceiling",
      "holes": [],
      "height": 3.0999999999999996,
      "object": "node",
      "polygon": [
        [
          -12.100000000000001,
          -3.9014689922332764
        ],
        [
          -8.8,
          -3.9014689922332764
        ],
        [
          -8.8,
          -2.4000000000000004
        ],
        [
          -12.100000000000001,
          -2.4000000000000004
        ]
      ],
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "ceiling_ykyg0fsf8jyr1wy7": {
      "object": "node",
      "id": "ceiling_ykyg0fsf8jyr1wy7",
      "type": "ceiling",
      "name": "Room 89 Ceiling",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -10.475817298889162,
          -2.817725658416748
        ],
        [
          -10.475817298889162,
          -3.6500000000000004
        ],
        [
          -8.8,
          -3.6500000000000004
        ],
        [
          -8.8,
          -2.817725658416748
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 3.3400000000000003,
      "autoFromWalls": true
    },
    "ceiling_z59spencdt2wi08t": {
      "id": "ceiling_z59spencdt2wi08t",
      "name": "Room 42 Ceiling",
      "type": "ceiling",
      "holes": [],
      "height": 3.3400000000000003,
      "object": "node",
      "polygon": [
        [
          -4.65,
          -5.295473098754882
        ],
        [
          -8.8,
          -5.295473098754883
        ],
        [
          -8.8,
          -8.924649810791015
        ],
        [
          -4.65,
          -8.924649810791015
        ]
      ],
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "ceiling_zkplk00wrukf4j27": {
      "id": "ceiling_zkplk00wrukf4j27",
      "name": "Room 67 Ceiling",
      "type": "ceiling",
      "holes": [],
      "height": 3.0999999999999996,
      "object": "node",
      "polygon": [
        [
          -1.1480247549681735,
          2.20020303858821
        ],
        [
          -1.145724892616272,
          0.16443949937820435
        ],
        [
          -0.6126573031526222,
          -0.05736904269178278
        ],
        [
          -0.35166916237511003,
          -0.5723887264372653
        ],
        [
          2.7,
          -0.5612221956253052
        ],
        [
          2.7,
          2.2
        ]
      ],
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "ceiling_zpw7uqjd2sotzen6": {
      "id": "ceiling_zpw7uqjd2sotzen6",
      "name": "Room 69 Ceiling",
      "type": "ceiling",
      "holes": [],
      "height": 2.79,
      "object": "node",
      "polygon": [
        [
          1.9000059256672868,
          -6.47076887996643
        ],
        [
          6.618342399597168,
          -6.47076887996643
        ],
        [
          6.618342399597168,
          -9
        ],
        [
          11.55,
          -8.950000000000001
        ],
        [
          11.55,
          -1.8499999999999994
        ],
        [
          6.6100616455078125,
          -1.8499999999999996
        ],
        [
          6.6100616455078125,
          -5.300000000000001
        ],
        [
          1.900005925667287,
          -5.300000000000001
        ]
      ],
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "holeMetadata": [],
      "autoFromWalls": false
    },
    "building_mzbjbmaocmp350cc": {
      "id": "building_mzbjbmaocmp350cc",
      "type": "building",
      "object": "node",
      "visible": true,
      "children": [
        "level_jwi4ovhyra2ayxa5",
        "level_tf1ug5dswkkzfhqa"
      ],
      "metadata": {},
      "parentId": null,
      "position": [
        0,
        0,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ]
    },
    "door_thy03qq8wjfdktf5": {
      "object": "node",
      "id": "door_thy03qq8wjfdktf5",
      "type": "door",
      "name": "Door 1",
      "parentId": "wall_15yo6h4h6h10o4z7",
      "visible": true,
      "metadata": {},
      "position": [
        1.5,
        1.05,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_15yo6h4h6h10o4z7",
      "width": 0.91,
      "height": 2.1,
      "doorCategory": "interior",
      "doorType": "hinged",
      "leafCount": 1,
      "operationState": 0,
      "slideDirection": "right",
      "trackStyle": "pocket",
      "garagePanelCount": 4,
      "openingKind": "door",
      "openingShape": "rectangle",
      "openingRadiusMode": "individual",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.45,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.01,
      "frameDepth": 0.07,
      "threshold": true,
      "thresholdHeight": 0.02,
      "hingesSide": "left",
      "swingDirection": "inward",
      "swingAngle": 1.5707963267948966,
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        },
        {
          "type": "panel",
          "heightRatio": 0.6,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "handle": true,
      "handleHeight": 1.05,
      "handleSide": "right",
      "contentPadding": [
        0.035,
        0.045
      ],
      "doorCloser": false,
      "panicBar": false,
      "panicBarHeight": 1
    },
    "zone_6wqhzz5obyx2b8x1": {
      "object": "node",
      "id": "zone_6wqhzz5obyx2b8x1",
      "type": "zone",
      "name": "MUD",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -11.200000000000001,
          2.478200674057006
        ],
        [
          -8.8,
          2.4782006740570064
        ],
        [
          -8.8,
          -2.4000000000000004
        ],
        [
          -11.200000000000001,
          -2.4000000000000004
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#22c55e"
    },
    "zone_w2cj2kgt0cq24eo6": {
      "object": "node",
      "id": "zone_w2cj2kgt0cq24eo6",
      "type": "zone",
      "name": "PANTRY",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -12.100000000000001,
          -2.4000000000000004
        ],
        [
          -8.8,
          -2.4000000000000004
        ],
        [
          -8.8,
          -3.9014689922332764
        ],
        [
          -12.100000000000001,
          -3.9014689922332764
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#10b981"
    },
    "zone_wga04d9rsvtht7r8": {
      "object": "node",
      "id": "zone_wga04d9rsvtht7r8",
      "type": "zone",
      "name": "CHINESE KITCHEN",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -12.100000000000001,
          -3.9014689922332764
        ],
        [
          -8.8,
          -3.9014689922332764
        ],
        [
          -8.8,
          -6.8500000000000005
        ],
        [
          -12.100000000000001,
          -6.8500000000000005
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#06b6d4"
    },
    "zone_l7rdpedmqnateqff": {
      "object": "node",
      "id": "zone_l7rdpedmqnateqff",
      "type": "zone",
      "name": "WALK-IN CLOSET",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -8.8,
          2.4782006740570064
        ],
        [
          -4.6000000000000005,
          2.478200674057007
        ],
        [
          -4.600000000000001,
          0.25
        ],
        [
          -4.95,
          0.1
        ],
        [
          -5.225646552149591,
          -0.16017679632242593
        ],
        [
          -5.378747463226318,
          -0.5723887264372649
        ],
        [
          -8.8,
          -0.5723887264372651
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#3b82f6"
    },
    "zone_33vruxnjc7gyhsix": {
      "object": "node",
      "id": "zone_33vruxnjc7gyhsix",
      "type": "zone",
      "name": "OPEN KITCHEN",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -4.600000000000001,
          0.19171042514883752
        ],
        [
          -4.6000000000000005,
          -6.9
        ],
        [
          -8.8,
          -6.850000000000001
        ],
        [
          -8.8,
          -0.5723887264372651
        ],
        [
          -5.378747463226318,
          -0.5723887264372649
        ],
        [
          -5.25,
          -0.25
        ],
        [
          -5.015044543609794,
          0.04646376900397653
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#6366f1"
    },
    "slab_9xin9ty4ubtpgbnn": {
      "object": "node",
      "id": "slab_9xin9ty4ubtpgbnn",
      "type": "slab",
      "name": "Room 113 Slab",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          6.9,
          -9
        ],
        [
          11.55,
          -9
        ],
        [
          11.55,
          -1.8499999999999948
        ],
        [
          6.9,
          -1.85
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.05,
      "autoFromWalls": true
    },
    "slab_01h1ggysul4dqzzr": {
      "object": "node",
      "id": "slab_01h1ggysul4dqzzr",
      "type": "slab",
      "name": "Room 114 Slab",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          6.9,
          -9
        ],
        [
          6.9,
          -5.5
        ],
        [
          1.9000000000000004,
          -5.5
        ],
        [
          1.9000000000000001,
          -9
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.05,
      "autoFromWalls": true
    },
    "ceiling_l525k31so5olfcol": {
      "object": "node",
      "id": "ceiling_l525k31so5olfcol",
      "type": "ceiling",
      "name": "Room 78 Ceiling",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          6.9,
          -4
        ],
        [
          2.7000000000000006,
          -4
        ],
        [
          2.7,
          -0.5612221956253052
        ],
        [
          -0.35166916237511003,
          -0.5723887264372653
        ],
        [
          -0.6126573031526222,
          -0.05736904269178278
        ],
        [
          -1.145724892616272,
          0.16443949937820435
        ],
        [
          -1.1500000000000001,
          2.478200674057007
        ],
        [
          -1.9504812955856323,
          2.9499636829170583
        ],
        [
          -3.7828824995228247,
          2.9499636829170583
        ],
        [
          -4.6000000000000005,
          2.478200674057007
        ],
        [
          -4.600000000000001,
          0.19171042514883752
        ],
        [
          -5.129446072197104,
          -0.047581525967506644
        ],
        [
          -5.378747463226318,
          -0.5723887264372649
        ],
        [
          -8.8,
          -0.5723887264372651
        ],
        [
          -8.8,
          -10.6
        ],
        [
          -4.65,
          -10.6
        ],
        [
          -4.65,
          -10.8
        ],
        [
          1.9000000000000001,
          -10.8
        ],
        [
          1.9000000000000004,
          -5.5
        ],
        [
          6.9,
          -5.5
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 3.0999999999999996,
      "autoFromWalls": true
    },
    "ceiling_yi5hdjcax8ix5loa": {
      "object": "node",
      "id": "ceiling_yi5hdjcax8ix5loa",
      "type": "ceiling",
      "name": "Room 79 Ceiling",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          6.9,
          -9
        ],
        [
          11.55,
          -9
        ],
        [
          11.55,
          -1.8499999999999948
        ],
        [
          6.9,
          -1.85
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 3.0999999999999996,
      "autoFromWalls": true
    },
    "ceiling_oijz961c0p0tetb5": {
      "object": "node",
      "id": "ceiling_oijz961c0p0tetb5",
      "type": "ceiling",
      "name": "Room 80 Ceiling",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          6.9,
          -9
        ],
        [
          6.9,
          -5.5
        ],
        [
          1.9000000000000004,
          -5.5
        ],
        [
          1.9000000000000001,
          -9
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 3.0999999999999996,
      "autoFromWalls": true
    },
    "slab_sv3giiqi4dwpzamp": {
      "object": "node",
      "id": "slab_sv3giiqi4dwpzamp",
      "type": "slab",
      "name": "Room 115 Slab",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          6.9,
          -4
        ],
        [
          2.7000000000000006,
          -4
        ],
        [
          2.7,
          -0.5612221956253052
        ],
        [
          -0.35166916237511003,
          -0.5723887264372653
        ],
        [
          -0.6126573031526222,
          -0.05736904269178278
        ],
        [
          -1.145724892616272,
          0.16443949937820435
        ],
        [
          -1.1500000000000001,
          2.478200674057007
        ],
        [
          -1.9504812955856323,
          2.9499636829170583
        ],
        [
          -3.7828824995228247,
          2.9499636829170583
        ],
        [
          -4.6000000000000005,
          2.478200674057007
        ],
        [
          -4.600000000000001,
          0.19171042514883752
        ],
        [
          -5.129446072197104,
          -0.047581525967506644
        ],
        [
          -5.378747463226318,
          -0.5723887264372649
        ],
        [
          -8.8,
          -0.5723887264372651
        ],
        [
          -8.8,
          -10.6
        ],
        [
          -4.65,
          -10.6
        ],
        [
          -4.65,
          -10.8
        ],
        [
          1.9000000000000001,
          -10.8
        ],
        [
          1.9000000000000004,
          -5.5
        ],
        [
          6.9,
          -5.5
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.05,
      "autoFromWalls": true
    },
    "zone_skd7hdve6q6s4dil": {
      "object": "node",
      "id": "zone_skd7hdve6q6s4dil",
      "type": "zone",
      "name": "HALL",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          2.7000000000000006,
          -4
        ],
        [
          2.7,
          -5.5
        ],
        [
          6.9,
          -5.5
        ],
        [
          6.9,
          -4
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#a855f7"
    },
    "zone_vl000sue7odqwi3g": {
      "object": "node",
      "id": "zone_vl000sue7odqwi3g",
      "type": "zone",
      "name": "BEDROOM 1",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          1.9000000000000004,
          -5.5
        ],
        [
          6.9,
          -5.45
        ],
        [
          6.8500000000000005,
          -9.05
        ],
        [
          1.9000000000000001,
          -9
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#64748b"
    },
    "zone_o9u81nymh1u4ial2": {
      "object": "node",
      "id": "zone_o9u81nymh1u4ial2",
      "type": "zone",
      "name": "RECREATION ROOM",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          6.9,
          -1.85
        ],
        [
          6.9,
          -9
        ],
        [
          11.5,
          -9
        ],
        [
          11.55,
          -1.9000000000000001
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#cccccc"
    },
    "slab_fhqmyvs2l5x8njb0": {
      "object": "node",
      "id": "slab_fhqmyvs2l5x8njb0",
      "type": "slab",
      "name": "Room 104 Slab",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -10.475817298889162,
          3.572127914428711
        ],
        [
          -10.475817298889162,
          0.3499999999999981
        ],
        [
          -8.029067039489746,
          0.34999999999999853
        ],
        [
          -8.029067039489746,
          0.9999999999999994
        ],
        [
          -6.350000000000002,
          0.9999999999999996
        ],
        [
          -6.3500000000000005,
          0.2
        ],
        [
          -4.600000000000001,
          0.19171042514883752
        ],
        [
          -4.6000000000000005,
          3.572127914428711
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.6,
      "autoFromWalls": true
    },
    "zone_goeez0uwr2t1imci": {
      "object": "node",
      "id": "zone_goeez0uwr2t1imci",
      "type": "zone",
      "name": "HALL",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          1.900005925667287,
          -5.885384439983215
        ],
        [
          1.900005925667287,
          -5.300000000000001
        ],
        [
          3.1272172927856445,
          -5.2997359790289496
        ],
        [
          3.1272172927856445,
          -4.04132604598999
        ],
        [
          2.7,
          -4.04132604598999
        ],
        [
          2.7,
          -3.41571307182312
        ],
        [
          0.36052599549293524,
          -3.4157130718231206
        ],
        [
          0.3605259954929352,
          -2.2000000000000006
        ],
        [
          0.20345488858959593,
          -1.6464171413673683
        ],
        [
          -0.30000000000000004,
          -1.05
        ],
        [
          -0.881517934309086,
          -0.7606588988824945
        ],
        [
          -1.166545033454895,
          -0.7140538692474365
        ],
        [
          -1.1500000000000001,
          -2.8000000000000003
        ],
        [
          -1.2000000000000002,
          -3.3000000000000003
        ],
        [
          -1.6,
          -3.85
        ],
        [
          -2.3000000000000003,
          -4.2
        ],
        [
          -3,
          -4.2
        ],
        [
          -3,
          -3
        ],
        [
          -3.8000000000000003,
          -2.7
        ],
        [
          -4.25,
          -2.25
        ],
        [
          -4.45,
          -1.85
        ],
        [
          -4.6000000000000005,
          -1.5
        ],
        [
          -4.600000000000001,
          0.19171042514883752
        ],
        [
          -6.3500000000000005,
          0.2
        ],
        [
          -6.3500000000000005,
          -5.295473098754883
        ],
        [
          -4.65,
          -5.295473098754882
        ],
        [
          -4.65,
          -8.5
        ],
        [
          -3.75,
          -8.55
        ],
        [
          -3.1500000000000004,
          -8.450000000000001
        ],
        [
          -2.6,
          -8.200000000000001
        ],
        [
          -2.15,
          -7.75
        ],
        [
          -1.4000000000000001,
          -6.9
        ],
        [
          -0.8500000000000001,
          -6.1000000000000005
        ],
        [
          -0.6000000000000001,
          -5.95
        ],
        [
          -0.4,
          -5.9
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#64748b"
    },
    "zone_9bb51qomzt502jep": {
      "object": "node",
      "id": "zone_9bb51qomzt502jep",
      "type": "zone",
      "name": "BEDROOM 3",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -10.475817298889162,
          3.5
        ],
        [
          -10.475817298889162,
          0.3499999999999981
        ],
        [
          -8.029067039489746,
          0.34999999999999853
        ],
        [
          -8,
          1.05
        ],
        [
          -6.350000000000002,
          0.9999999999999996
        ],
        [
          -6.3500000000000005,
          0.2
        ],
        [
          -4.600000000000001,
          0.19171042514883752
        ],
        [
          -4.65,
          3.572127914428711
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#cccccc"
    },
    "zone_rp84hescjsbymavx": {
      "object": "node",
      "id": "zone_rp84hescjsbymavx",
      "type": "zone",
      "name": "BATH 3",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -8.029067039489746,
          0.9500000000000001
        ],
        [
          -8.029067039489746,
          -1.7
        ],
        [
          -6.3500000000000005,
          -1.7000000000000002
        ],
        [
          -6.350000000000002,
          0.9999999999999996
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#ef4444"
    },
    "zone_z0jagp9vt3kt3fd7": {
      "object": "node",
      "id": "zone_z0jagp9vt3kt3fd7",
      "type": "zone",
      "name": "LAUNDRY",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -10.475817298889162,
          0.3499999999999981
        ],
        [
          -8.029067039489746,
          0.34999999999999853
        ],
        [
          -8.029067039489746,
          -1.7
        ],
        [
          -6.3500000000000005,
          -1.7000000000000002
        ],
        [
          -6.3500000000000005,
          -2.817725658416748
        ],
        [
          -10.475817298889162,
          -2.817725658416748
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#f97316"
    },
    "zone_jt59f49fi4uqlzuu": {
      "object": "node",
      "id": "zone_jt59f49fi4uqlzuu",
      "type": "zone",
      "name": "MEP",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -10.475817298889162,
          -2.817725658416748
        ],
        [
          -10.475817298889162,
          -3.6500000000000004
        ],
        [
          -8.8,
          -3.6500000000000004
        ],
        [
          -8.8,
          -2.817725658416748
        ]
      ],
      "autoFromWalls": true,
      "boundaryWallIds": [
        "wall_2toe7w07rutfm9id",
        "wall_n8p4o7n2gxnaqwde",
        "wall_ryhertsxf1amrqpm",
        "wall_4pfwnqac6i2cbpgg"
      ],
      "color": "#f59e0b"
    },
    "zone_nfh3m6wsuog3znk0": {
      "object": "node",
      "id": "zone_nfh3m6wsuog3znk0",
      "type": "zone",
      "name": "WIC 2",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -8.8,
          -2.817725658416748
        ],
        [
          -6.3500000000000005,
          -2.817725658416748
        ],
        [
          -6.3500000000000005,
          -5.295473098754883
        ],
        [
          -8.8,
          -5.295473098754883
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#84cc16"
    },
    "zone_ld5qolsuosrcf8lo": {
      "object": "node",
      "id": "zone_ld5qolsuosrcf8lo",
      "type": "zone",
      "name": "BATH 2",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -10.475817298889162,
          -3.6500000000000004
        ],
        [
          -8.8,
          -3.6500000000000004
        ],
        [
          -8.8,
          -6.8500000000000005
        ],
        [
          -10.475817298889162,
          -6.8500000000000005
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#22c55e"
    },
    "zone_u2zribmc6m20yp54": {
      "object": "node",
      "id": "zone_u2zribmc6m20yp54",
      "type": "zone",
      "name": "READING",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -1.138415994959748,
          0.8478581299369649
        ],
        [
          2.7,
          0.8478581309318545
        ],
        [
          2.6500000000000004,
          -3.41571307182312
        ],
        [
          0.36052599549293524,
          -3.4157130718231206
        ],
        [
          0.3605259954929352,
          -2.2000000000000006
        ],
        [
          0.20345488858959593,
          -1.6464171413673683
        ],
        [
          -0.25,
          -1.05
        ],
        [
          -1.166545033454895,
          -0.7140538692474365
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#10b981"
    },
    "door_y7is7cpm3i59v09n": {
      "object": "node",
      "id": "door_y7is7cpm3i59v09n",
      "type": "door",
      "name": "Door 3",
      "parentId": "wall_rd5z773vr7loeh1h",
      "visible": true,
      "metadata": {},
      "position": [
        1.4500000000000002,
        1.05,
        0
      ],
      "rotation": [
        0,
        6.283185307179586,
        0
      ],
      "side": "front",
      "wallId": "wall_rd5z773vr7loeh1h",
      "width": 0.91,
      "height": 2.1,
      "doorCategory": "interior",
      "doorType": "hinged",
      "leafCount": 1,
      "operationState": 0,
      "slideDirection": "left",
      "trackStyle": "none",
      "garagePanelCount": 4,
      "openingKind": "door",
      "openingShape": "rectangle",
      "openingRadiusMode": "all",
      "openingTopRadii": [
        0.15,
        0.15
      ],
      "cornerRadius": 0.15,
      "archHeight": 0.45,
      "openingRevealRadius": 0.025,
      "frameThickness": 0.05,
      "frameDepth": 0.07,
      "threshold": false,
      "thresholdHeight": 0.02,
      "hingesSide": "right",
      "swingDirection": "outward",
      "swingAngle": 1.5707963267948966,
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.4,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        }
      ],
      "handle": true,
      "handleHeight": 1.05,
      "handleSide": "left",
      "contentPadding": [
        0.04,
        0.04
      ],
      "doorCloser": false,
      "panicBar": false,
      "panicBarHeight": 1
    },
    "zone_lt6tl3xiav5cw00q": {
      "object": "node",
      "id": "zone_lt6tl3xiav5cw00q",
      "type": "zone",
      "name": "OPEN TO BELOW",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -4.6000000000000005,
          2.478200674057007
        ],
        [
          -3.7828824995228247,
          2.9499636829170583
        ],
        [
          -1.9504812955856323,
          2.9499636829170583
        ],
        [
          -1.1500000000000001,
          2.478200674057007
        ],
        [
          -1.1500000000000001,
          -2.8000000000000003
        ],
        [
          -1.35,
          -3.5
        ],
        [
          -1.8,
          -3.95
        ],
        [
          -2.25,
          -4.15
        ],
        [
          -2.75,
          -4.2
        ],
        [
          -2.95,
          -4.2
        ],
        [
          -2.9000000000000004,
          -3
        ],
        [
          -3.5500000000000003,
          -2.8000000000000003
        ],
        [
          -4.25,
          -2.15
        ],
        [
          -4.6000000000000005,
          -1.4500000000000002
        ]
      ],
      "autoFromWalls": false,
      "boundaryWallIds": [],
      "color": "#06b6d4"
    }
  },
  "rootNodeIds": [
    "site_ki35u6k5svcjwzv3"
  ],
  "installedPlugins": [
    "pascal:trees"
  ]
}`,b;function x(e,t,n){function r(n,r){if(n._zod||Object.defineProperty(n,"_zod",{value:{def:r,constr:o,traits:new Set},enumerable:!1}),n._zod.traits.has(e))return;n._zod.traits.add(e),t(n,r);let i=o.prototype,a=Object.keys(i);for(let e=0;e<a.length;e++){let t=a[e];t in n||(n[t]=i[t].bind(n))}}let i=n?.Parent??Object;class a extends i{}Object.defineProperty(a,"name",{value:e});function o(e){var t;let i=n?.Parent?new a:this;r(i,e),(t=i._zod).deferred??(t.deferred=[]);for(let e of i._zod.deferred)e();return i}return Object.defineProperty(o,"init",{value:r}),Object.defineProperty(o,Symbol.hasInstance,{value:t=>n?.Parent&&t instanceof n.Parent?!0:t?._zod?.traits?.has(e)}),Object.defineProperty(o,"name",{value:e}),o}var S=class extends Error{constructor(){super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`)}},C=class extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name=`ZodEncodeError`}};(b=globalThis).__zod_globalConfig??(b.__zod_globalConfig={});var w=globalThis.__zod_globalConfig;function ee(e){return e&&Object.assign(w,e),w}function T(e){let t=Object.values(e).filter(e=>typeof e==`number`);return Object.entries(e).filter(([e,n])=>t.indexOf(+e)===-1).map(([e,t])=>t)}function E(e,t){return typeof t==`bigint`?t.toString():t}function D(e){return{get value(){{let t=e();return Object.defineProperty(this,"value",{value:t}),t}throw Error(`cached value already set`)}}}function te(e){return e==null}function ne(e){let t=+!!e.startsWith(`^`),n=e.endsWith(`$`)?e.length-1:e.length;return e.slice(t,n)}var O=Symbol(`evaluating`);function k(e,t,n){let r;Object.defineProperty(e,t,{get(){if(r!==O)return r===void 0&&(r=O,r=n()),r},set(n){Object.defineProperty(e,t,{value:n})},configurable:!0})}function A(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!0,configurable:!0})}function j(...e){let t={};for(let n of e){let e=Object.getOwnPropertyDescriptors(n);Object.assign(t,e)}return Object.defineProperties({},t)}function M(e){return JSON.stringify(e)}function N(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,``).replace(/[\s_-]+/g,`-`).replace(/^-+|-+$/g,``)}var P=`captureStackTrace`in Error?Error.captureStackTrace:(...e)=>{};function re(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var ie=D(()=>{if(w.jitless||typeof navigator<`u`&&navigator?.userAgent?.includes(`Cloudflare`))return!1;try{return Function(``),!0}catch{return!1}});function ae(e){if(re(e)===!1)return!1;let t=e.constructor;if(t===void 0||typeof t!=`function`)return!0;let n=t.prototype;return!(re(n)===!1||Object.prototype.hasOwnProperty.call(n,`isPrototypeOf`)===!1)}function oe(e){return ae(e)?{...e}:Array.isArray(e)?[...e]:e instanceof Map?new Map(e):e instanceof Set?new Set(e):e}var se=new Set([`string`,`number`,`symbol`]);function F(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function ce(e,t,n){let r=new e._zod.constr(t??e._zod.def);return(!t||n?.parent)&&(r._zod.parent=e),r}function I(e){let t=e;if(!t)return{};if(typeof t==`string`)return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error==`string`?{...t,error:()=>t.error}:t}function le(e){return Object.keys(e).filter(t=>e[t]._zod.optin===`optional`&&e[t]._zod.optout===`optional`)}-Number.MAX_VALUE,Number.MAX_VALUE;function ue(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.pick() cannot be used on object schemas containing refinements`);return ce(e,j(e._zod.def,{get shape(){let e={};for(let r in t){if(!(r in n.shape))throw Error(`Unrecognized key: "${r}"`);t[r]&&(e[r]=n.shape[r])}return A(this,`shape`,e),e},checks:[]}))}function de(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.omit() cannot be used on object schemas containing refinements`);return ce(e,j(e._zod.def,{get shape(){let r={...e._zod.def.shape};for(let e in t){if(!(e in n.shape))throw Error(`Unrecognized key: "${e}"`);t[e]&&delete r[e]}return A(this,`shape`,r),r},checks:[]}))}function fe(e,t){if(!ae(t))throw Error(`Invalid input to extend: expected a plain object`);let n=e._zod.def.checks;if(n&&n.length>0){let n=e._zod.def.shape;for(let e in t)if(Object.getOwnPropertyDescriptor(n,e)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return ce(e,j(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t};return A(this,`shape`,n),n}}))}function pe(e,t){if(!ae(t))throw Error(`Invalid input to safeExtend: expected a plain object`);return ce(e,j(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t};return A(this,`shape`,n),n}}))}function me(e,t){if(e._zod.def.checks?.length)throw Error(`.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`);return ce(e,j(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t._zod.def.shape};return A(this,`shape`,n),n},get catchall(){return t._zod.def.catchall},checks:t._zod.def.checks??[]}))}function he(e,t,n){let r=t._zod.def.checks;if(r&&r.length>0)throw Error(`.partial() cannot be used on object schemas containing refinements`);return ce(t,j(t._zod.def,{get shape(){let r=t._zod.def.shape,i={...r};if(n)for(let t in n){if(!(t in r))throw Error(`Unrecognized key: "${t}"`);n[t]&&(i[t]=e?new e({type:`optional`,innerType:r[t]}):r[t])}else for(let t in r)i[t]=e?new e({type:`optional`,innerType:r[t]}):r[t];return A(this,`shape`,i),i},checks:[]}))}function ge(e,t,n){return ce(t,j(t._zod.def,{get shape(){let r=t._zod.def.shape,i={...r};if(n)for(let t in n){if(!(t in i))throw Error(`Unrecognized key: "${t}"`);n[t]&&(i[t]=new e({type:`nonoptional`,innerType:r[t]}))}else for(let t in r)i[t]=new e({type:`nonoptional`,innerType:r[t]});return A(this,`shape`,i),i}}))}function _e(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue!==!0)return!0;return!1}function ve(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue===!1)return!0;return!1}function ye(e,t){return t.map(t=>{var n;return(n=t).path??(n.path=[]),t.path.unshift(e),t})}function be(e){return typeof e==`string`?e:e?.message}function xe(e,t,n){let r=e.message?e.message:be(e.inst?._zod.def?.error?.(e))??be(t?.error?.(e))??be(n.customError?.(e))??be(n.localeError?.(e))??`Invalid input`,{inst:i,continue:a,input:o,...s}=e;return s.path??=[],s.message=r,t?.reportInput&&(s.input=o),s}function Se(e){return Array.isArray(e)?`array`:typeof e==`string`?`string`:`unknown`}function Ce(...e){let[t,n,r]=e;return typeof t==`string`?{message:t,code:`custom`,input:n,inst:r}:{...t}}var we=(e,t)=>{e.name=`$ZodError`,Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:t,enumerable:!1}),e.message=JSON.stringify(t,E,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},Te=x(`$ZodError`,we),Ee=x(`$ZodError`,we,{Parent:Error});function De(e,t=e=>e.message){let n={},r=[];for(let i of e.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(t(i))):r.push(t(i));return{formErrors:r,fieldErrors:n}}function Oe(e,t=e=>e.message){let n={_errors:[]},r=(e,i=[])=>{for(let a of e.issues)if(a.code===`invalid_union`&&a.errors.length)a.errors.map(e=>r({issues:e},[...i,...a.path]));else if(a.code===`invalid_key`)r({issues:a.issues},[...i,...a.path]);else if(a.code===`invalid_element`)r({issues:a.issues},[...i,...a.path]);else{let e=[...i,...a.path];if(e.length===0)n._errors.push(t(a));else{let r=n,i=0;for(;i<e.length;){let n=e[i];i===e.length-1?(r[n]=r[n]||{_errors:[]},r[n]._errors.push(t(a))):r[n]=r[n]||{_errors:[]},r=r[n],i++}}}};return r(e),n}var ke=e=>(t,n,r,i)=>{let a=r?{...r,async:!1}:{async:!1},o=t._zod.run({value:n,issues:[]},a);if(o instanceof Promise)throw new S;if(o.issues.length){let t=new((i?.Err)??e)(o.issues.map(e=>xe(e,a,ee())));throw P(t,i?.callee),t}return o.value},Ae=e=>async(t,n,r,i)=>{let a=r?{...r,async:!0}:{async:!0},o=t._zod.run({value:n,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){let t=new((i?.Err)??e)(o.issues.map(e=>xe(e,a,ee())));throw P(t,i?.callee),t}return o.value},je=e=>(t,n,r)=>{let i=r?{...r,async:!1}:{async:!1},a=t._zod.run({value:n,issues:[]},i);if(a instanceof Promise)throw new S;return a.issues.length?{success:!1,error:new(e??Te)(a.issues.map(e=>xe(e,i,ee())))}:{success:!0,data:a.value}},Me=je(Ee),Ne=e=>async(t,n,r)=>{let i=r?{...r,async:!0}:{async:!0},a=t._zod.run({value:n,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?{success:!1,error:new e(a.issues.map(e=>xe(e,i,ee())))}:{success:!0,data:a.value}},Pe=Ne(Ee),Fe=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return ke(e)(t,n,i)},Ie=e=>(t,n,r)=>ke(e)(t,n,r),Le=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Ae(e)(t,n,i)},Re=e=>async(t,n,r)=>Ae(e)(t,n,r),ze=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return je(e)(t,n,i)},Be=e=>(t,n,r)=>je(e)(t,n,r),Ve=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Ne(e)(t,n,i)},He=e=>async(t,n,r)=>Ne(e)(t,n,r),Ue=/^[cC][0-9a-z]{6,}$/,We=/^[0-9a-z]+$/,Ge=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Ke=/^[0-9a-vA-V]{20}$/,qe=/^[A-Za-z0-9]{27}$/,Je=/^[a-zA-Z0-9_-]{21}$/,Ye=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Xe=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Ze=e=>e?RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Qe=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,$e=`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;function et(){return new RegExp($e,`u`)}var tt=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,nt=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,rt=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,it=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,at=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,ot=/^[A-Za-z0-9_-]*$/,st=/^https?$/,ct=/^\+[1-9]\d{6,14}$/,lt=`(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`,ut=RegExp(`^${lt}$`);function dt(e){let t=`(?:[01]\\d|2[0-3]):[0-5]\\d`;return typeof e.precision==`number`?e.precision===-1?`${t}`:e.precision===0?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}function ft(e){return RegExp(`^${dt(e)}$`)}function pt(e){let t=dt({precision:e.precision}),n=[`Z`];e.local&&n.push(``),e.offset&&n.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);let r=`${t}(?:${n.join(`|`)})`;return RegExp(`^${lt}T(?:${r})$`)}var mt=e=>{let t=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??``}}`:`[\\s\\S]*`;return RegExp(`^${t}$`)},ht=/^-?\d+(?:\.\d+)?$/,gt=/^[^A-Z]*$/,_t=/^[^a-z]*$/,vt=x(`$ZodCheck`,(e,t)=>{var n;e._zod??={},e._zod.def=t,(n=e._zod).onattach??(n.onattach=[])}),yt=x(`$ZodCheckMaxLength`,(e,t)=>{var n;vt.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!te(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag.maximum??1/0;t.maximum<n&&(e._zod.bag.maximum=t.maximum)}),e._zod.check=n=>{let r=n.value;if(r.length<=t.maximum)return;let i=Se(r);n.issues.push({origin:i,code:`too_big`,maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),bt=x(`$ZodCheckMinLength`,(e,t)=>{var n;vt.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!te(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag.minimum??-1/0;t.minimum>n&&(e._zod.bag.minimum=t.minimum)}),e._zod.check=n=>{let r=n.value;if(r.length>=t.minimum)return;let i=Se(r);n.issues.push({origin:i,code:`too_small`,minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),xt=x(`$ZodCheckLengthEquals`,(e,t)=>{var n;vt.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!te(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag;n.minimum=t.length,n.maximum=t.length,n.length=t.length}),e._zod.check=n=>{let r=n.value,i=r.length;if(i===t.length)return;let a=Se(r),o=i>t.length;n.issues.push({origin:a,...o?{code:`too_big`,maximum:t.length}:{code:`too_small`,minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),St=x(`$ZodCheckStringFormat`,(e,t)=>{var n,r;vt.init(e,t),e._zod.onattach.push(e=>{let n=e._zod.bag;n.format=t.format,t.pattern&&(n.patterns??=new Set,n.patterns.add(t.pattern))}),t.pattern?(n=e._zod).check??(n.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:t.format,input:n.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}):(r=e._zod).check??(r.check=()=>{})}),Ct=x(`$ZodCheckRegex`,(e,t)=>{St.init(e,t),e._zod.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:`regex`,input:n.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),wt=x(`$ZodCheckLowerCase`,(e,t)=>{t.pattern??=gt,St.init(e,t)}),Tt=x(`$ZodCheckUpperCase`,(e,t)=>{t.pattern??=_t,St.init(e,t)}),Et=x(`$ZodCheckIncludes`,(e,t)=>{vt.init(e,t);let n=F(t.includes),r=new RegExp(typeof t.position==`number`?`^.{${t.position}}${n}`:n);t.pattern=r,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=new Set,t.patterns.add(r)}),e._zod.check=n=>{n.value.includes(t.includes,t.position)||n.issues.push({origin:`string`,code:`invalid_format`,format:`includes`,includes:t.includes,input:n.value,inst:e,continue:!t.abort})}}),Dt=x(`$ZodCheckStartsWith`,(e,t)=>{vt.init(e,t);let n=RegExp(`^${F(t.prefix)}.*`);t.pattern??=n,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=new Set,t.patterns.add(n)}),e._zod.check=n=>{n.value.startsWith(t.prefix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`starts_with`,prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),Ot=x(`$ZodCheckEndsWith`,(e,t)=>{vt.init(e,t);let n=RegExp(`.*${F(t.suffix)}$`);t.pattern??=n,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=new Set,t.patterns.add(n)}),e._zod.check=n=>{n.value.endsWith(t.suffix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`ends_with`,suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}}),kt=x(`$ZodCheckOverwrite`,(e,t)=>{vt.init(e,t),e._zod.check=e=>{e.value=t.tx(e.value)}}),At=class{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),--this.indent}write(e){if(typeof e==`function`){e(this,{execution:`sync`}),e(this,{execution:`async`});return}let t=e.split(`
`).filter(e=>e),n=Math.min(...t.map(e=>e.length-e.trimStart().length)),r=t.map(e=>e.slice(n)).map(e=>` `.repeat(this.indent*2)+e);for(let e of r)this.content.push(e)}compile(){let e=Function,t=this?.args,n=[...(this?.content??[``]).map(e=>`  ${e}`)];return new e(...t,n.join(`
`))}},jt={major:4,minor:4,patch:3},L=x(`$ZodType`,(e,t)=>{var n;e??={},e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=jt;let r=[...e._zod.def.checks??[]];e._zod.traits.has(`$ZodCheck`)&&r.unshift(e);for(let t of r)for(let n of t._zod.onattach)n(e);if(r.length===0)(n=e._zod).deferred??(n.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let t=(e,t,n)=>{let r=_e(e),i;for(let a of t){if(a._zod.def.when){if(ve(e)||!a._zod.def.when(e))continue}else if(r)continue;let t=e.issues.length,o=a._zod.check(e);if(o instanceof Promise&&n?.async===!1)throw new S;if(i||o instanceof Promise)i=(i??Promise.resolve()).then(async()=>{await o,e.issues.length!==t&&(r||=_e(e,t))});else{if(e.issues.length===t)continue;r||=_e(e,t)}}return i?i.then(()=>e):e},n=(n,i,a)=>{if(_e(n))return n.aborted=!0,n;let o=t(i,r,a);if(o instanceof Promise){if(a.async===!1)throw new S;return o.then(t=>e._zod.parse(t,a))}return e._zod.parse(o,a)};e._zod.run=(i,a)=>{if(a.skipChecks)return e._zod.parse(i,a);if(a.direction===`backward`){let t=e._zod.parse({value:i.value,issues:[]},{...a,skipChecks:!0});return t instanceof Promise?t.then(e=>n(e,i,a)):n(t,i,a)}let o=e._zod.parse(i,a);if(o instanceof Promise){if(a.async===!1)throw new S;return o.then(e=>t(e,r,a))}return t(o,r,a)}}k(e,`~standard`,()=>({validate:t=>{try{let n=Me(e,t);return n.success?{value:n.data}:{issues:n.error?.issues}}catch{return Pe(e,t).then(e=>e.success?{value:e.data}:{issues:e.error?.issues})}},vendor:`zod`,version:1}))}),Mt=x(`$ZodString`,(e,t)=>{L.init(e,t),e._zod.pattern=[...e?._zod.bag?.patterns??[]].pop()??mt(e._zod.bag),e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=String(n.value)}catch{}return typeof n.value==`string`||n.issues.push({expected:`string`,code:`invalid_type`,input:n.value,inst:e}),n}}),R=x(`$ZodStringFormat`,(e,t)=>{St.init(e,t),Mt.init(e,t)}),Nt=x(`$ZodGUID`,(e,t)=>{t.pattern??=Xe,R.init(e,t)}),Pt=x(`$ZodUUID`,(e,t)=>{if(t.version){let e={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(e===void 0)throw Error(`Invalid UUID version: "${t.version}"`);t.pattern??=Ze(e)}else t.pattern??=Ze();R.init(e,t)}),Ft=x(`$ZodEmail`,(e,t)=>{t.pattern??=Qe,R.init(e,t)}),It=x(`$ZodURL`,(e,t)=>{R.init(e,t),e._zod.check=n=>{try{let r=n.value.trim();if(!t.normalize&&t.protocol?.source===st.source&&!/^https?:\/\//i.test(r)){n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid URL format`,input:n.value,inst:e,continue:!t.abort});return}let i=new URL(r);t.hostname&&(t.hostname.lastIndex=0,t.hostname.test(i.hostname)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid hostname`,pattern:t.hostname.source,input:n.value,inst:e,continue:!t.abort})),t.protocol&&(t.protocol.lastIndex=0,t.protocol.test(i.protocol.endsWith(`:`)?i.protocol.slice(0,-1):i.protocol)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid protocol`,pattern:t.protocol.source,input:n.value,inst:e,continue:!t.abort})),t.normalize?n.value=i.href:n.value=r;return}catch{n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort})}}}),Lt=x(`$ZodEmoji`,(e,t)=>{t.pattern??=et(),R.init(e,t)}),Rt=x(`$ZodNanoID`,(e,t)=>{t.pattern??=Je,R.init(e,t)}),zt=x(`$ZodCUID`,(e,t)=>{t.pattern??=Ue,R.init(e,t)}),Bt=x(`$ZodCUID2`,(e,t)=>{t.pattern??=We,R.init(e,t)}),Vt=x(`$ZodULID`,(e,t)=>{t.pattern??=Ge,R.init(e,t)}),Ht=x(`$ZodXID`,(e,t)=>{t.pattern??=Ke,R.init(e,t)}),Ut=x(`$ZodKSUID`,(e,t)=>{t.pattern??=qe,R.init(e,t)}),Wt=x(`$ZodISODateTime`,(e,t)=>{t.pattern??=pt(t),R.init(e,t)}),Gt=x(`$ZodISODate`,(e,t)=>{t.pattern??=ut,R.init(e,t)}),Kt=x(`$ZodISOTime`,(e,t)=>{t.pattern??=ft(t),R.init(e,t)}),qt=x(`$ZodISODuration`,(e,t)=>{t.pattern??=Ye,R.init(e,t)}),Jt=x(`$ZodIPv4`,(e,t)=>{t.pattern??=tt,R.init(e,t),e._zod.bag.format=`ipv4`}),Yt=x(`$ZodIPv6`,(e,t)=>{t.pattern??=nt,R.init(e,t),e._zod.bag.format=`ipv6`,e._zod.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:`invalid_format`,format:`ipv6`,input:n.value,inst:e,continue:!t.abort})}}}),Xt=x(`$ZodCIDRv4`,(e,t)=>{t.pattern??=rt,R.init(e,t)}),Zt=x(`$ZodCIDRv6`,(e,t)=>{t.pattern??=it,R.init(e,t),e._zod.check=n=>{let r=n.value.split(`/`);try{if(r.length!==2)throw Error();let[e,t]=r;if(!t)throw Error();let n=Number(t);if(`${n}`!==t||n<0||n>128)throw Error();new URL(`http://[${e}]`)}catch{n.issues.push({code:`invalid_format`,format:`cidrv6`,input:n.value,inst:e,continue:!t.abort})}}});function Qt(e){if(e===``)return!0;if(/\s/.test(e)||e.length%4!=0)return!1;try{return atob(e),!0}catch{return!1}}var $t=x(`$ZodBase64`,(e,t)=>{t.pattern??=at,R.init(e,t),e._zod.bag.contentEncoding=`base64`,e._zod.check=n=>{Qt(n.value)||n.issues.push({code:`invalid_format`,format:`base64`,input:n.value,inst:e,continue:!t.abort})}});function en(e){if(!ot.test(e))return!1;let t=e.replace(/[-_]/g,e=>e===`-`?`+`:`/`);return Qt(t.padEnd(Math.ceil(t.length/4)*4,`=`))}var tn=x(`$ZodBase64URL`,(e,t)=>{t.pattern??=ot,R.init(e,t),e._zod.bag.contentEncoding=`base64url`,e._zod.check=n=>{en(n.value)||n.issues.push({code:`invalid_format`,format:`base64url`,input:n.value,inst:e,continue:!t.abort})}}),nn=x(`$ZodE164`,(e,t)=>{t.pattern??=ct,R.init(e,t)});function rn(e,t=null){try{let n=e.split(`.`);if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let i=JSON.parse(atob(r));return!(`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&(!(`alg`in i)||i.alg!==t))}catch{return!1}}var an=x(`$ZodJWT`,(e,t)=>{R.init(e,t),e._zod.check=n=>{rn(n.value,t.alg)||n.issues.push({code:`invalid_format`,format:`jwt`,input:n.value,inst:e,continue:!t.abort})}}),on=x(`$ZodUnknown`,(e,t)=>{L.init(e,t),e._zod.parse=e=>e}),sn=x(`$ZodNever`,(e,t)=>{L.init(e,t),e._zod.parse=(t,n)=>(t.issues.push({expected:`never`,code:`invalid_type`,input:t.value,inst:e}),t)});function cn(e,t,n){e.issues.length&&t.issues.push(...ye(n,e.issues)),t.value[n]=e.value}var ln=x(`$ZodArray`,(e,t)=>{L.init(e,t),e._zod.parse=(n,r)=>{let i=n.value;if(!Array.isArray(i))return n.issues.push({expected:`array`,code:`invalid_type`,input:i,inst:e}),n;n.value=Array(i.length);let a=[];for(let e=0;e<i.length;e++){let o=i[e],s=t.element._zod.run({value:o,issues:[]},r);s instanceof Promise?a.push(s.then(t=>cn(t,n,e))):cn(s,n,e)}return a.length?Promise.all(a).then(()=>n):n}});function un(e,t,n,r,i,a){let o=n in r;if(e.issues.length){if(i&&a&&!o)return;t.issues.push(...ye(n,e.issues))}if(!o&&!i){e.issues.length||t.issues.push({code:`invalid_type`,expected:`nonoptional`,input:void 0,path:[n]});return}e.value===void 0?o&&(t.value[n]=void 0):t.value[n]=e.value}function dn(e){let t=Object.keys(e.shape);for(let n of t)if(!e.shape?.[n]?._zod?.traits?.has(`$ZodType`))throw Error(`Invalid element at key "${n}": expected a Zod schema`);let n=le(e.shape);return{...e,keys:t,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(n)}}function fn(e,t,n,r,i,a){let o=[],s=i.keySet,c=i.catchall._zod,l=c.def.type,u=c.optin===`optional`,d=c.optout===`optional`;for(let i in t){if(i===`__proto__`||s.has(i))continue;if(l===`never`){o.push(i);continue}let a=c.run({value:t[i],issues:[]},r);a instanceof Promise?e.push(a.then(e=>un(e,n,i,t,u,d))):un(a,n,i,t,u,d)}return o.length&&n.issues.push({code:`unrecognized_keys`,keys:o,input:t,inst:a}),e.length?Promise.all(e).then(()=>n):n}var pn=x(`$ZodObject`,(e,t)=>{if(L.init(e,t),!Object.getOwnPropertyDescriptor(t,`shape`)?.get){let e=t.shape;Object.defineProperty(t,"shape",{get:()=>{let n={...e};return Object.defineProperty(t,"shape",{value:n}),n}})}let n=D(()=>dn(t));k(e._zod,`propValues`,()=>{let e=t.shape,n={};for(let t in e){let r=e[t]._zod;if(r.values){n[t]??(n[t]=new Set);for(let e of r.values)n[t].add(e)}}return n});let r=re,i=t.catchall,a;e._zod.parse=(t,o)=>{a??=n.value;let s=t.value;if(!r(s))return t.issues.push({expected:`object`,code:`invalid_type`,input:s,inst:e}),t;t.value={};let c=[],l=a.shape;for(let e of a.keys){let n=l[e],r=n._zod.optin===`optional`,i=n._zod.optout===`optional`,a=n._zod.run({value:s[e],issues:[]},o);a instanceof Promise?c.push(a.then(n=>un(n,t,e,s,r,i))):un(a,t,e,s,r,i)}return i?fn(c,s,t,o,n.value,e):c.length?Promise.all(c).then(()=>t):t}}),mn=x(`$ZodObjectJIT`,(e,t)=>{pn.init(e,t);let n=e._zod.parse,r=D(()=>dn(t)),i=e=>{let t=new At([`shape`,`payload`,`ctx`]),n=r.value,i=e=>{let t=M(e);return`shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`};t.write(`const input = payload.value;`);let a=Object.create(null),o=0;for(let e of n.keys)a[e]=`key_${o++}`;t.write(`const newResult = {};`);for(let r of n.keys){let n=a[r],o=M(r),s=e[r],c=s?._zod?.optin===`optional`,l=s?._zod?.optout===`optional`;t.write(`const ${n} = ${i(r)};`),c&&l?t.write(`
        if (${n}.issues.length) {
          if (${o} in input) {
            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${o}, ...iss.path] : [${o}]
            })));
          }
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `):c?t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `):t.write(`
        const ${n}_present = ${o} in input;
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${o}]
          });
        }

        if (${n}_present) {
          if (${n}.value === undefined) {
            newResult[${o}] = undefined;
          } else {
            newResult[${o}] = ${n}.value;
          }
        }

      `)}t.write(`payload.value = newResult;`),t.write(`return payload;`);let s=t.compile();return(t,n)=>s(e,t,n)},a,o=re,s=!w.jitless,c=s&&ie.value,l=t.catchall,u;e._zod.parse=(d,f)=>{u??=r.value;let p=d.value;return o(p)?s&&c&&f?.async===!1&&f.jitless!==!0?(a||=i(t.shape),d=a(d,f),l?fn([],p,d,f,u,e):d):n(d,f):(d.issues.push({expected:`object`,code:`invalid_type`,input:p,inst:e}),d)}});function hn(e,t,n,r){for(let n of e)if(n.issues.length===0)return t.value=n.value,t;let i=e.filter(e=>!_e(e));return i.length===1?(t.value=i[0].value,i[0]):(t.issues.push({code:`invalid_union`,input:t.value,inst:n,errors:e.map(e=>e.issues.map(e=>xe(e,r,ee())))}),t)}var gn=x(`$ZodUnion`,(e,t)=>{L.init(e,t),k(e._zod,`optin`,()=>t.options.some(e=>e._zod.optin===`optional`)?`optional`:void 0),k(e._zod,`optout`,()=>t.options.some(e=>e._zod.optout===`optional`)?`optional`:void 0),k(e._zod,`values`,()=>{if(t.options.every(e=>e._zod.values))return new Set(t.options.flatMap(e=>Array.from(e._zod.values)))}),k(e._zod,`pattern`,()=>{if(t.options.every(e=>e._zod.pattern)){let e=t.options.map(e=>e._zod.pattern);return RegExp(`^(${e.map(e=>ne(e.source)).join(`|`)})$`)}});let n=t.options.length===1?t.options[0]._zod.run:null;e._zod.parse=(r,i)=>{if(n)return n(r,i);let a=!1,o=[];for(let e of t.options){let t=e._zod.run({value:r.value,issues:[]},i);if(t instanceof Promise)o.push(t),a=!0;else{if(t.issues.length===0)return t;o.push(t)}}return a?Promise.all(o).then(t=>hn(t,r,e,i)):hn(o,r,e,i)}}),_n=x(`$ZodIntersection`,(e,t)=>{L.init(e,t),e._zod.parse=(e,n)=>{let r=e.value,i=t.left._zod.run({value:r,issues:[]},n),a=t.right._zod.run({value:r,issues:[]},n);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([t,n])=>yn(e,t,n)):yn(e,i,a)}});function vn(e,t){if(e===t||e instanceof Date&&t instanceof Date&&+e==+t)return{valid:!0,data:e};if(ae(e)&&ae(t)){let n=Object.keys(t),r=Object.keys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};for(let n of r){let r=vn(e[n],t[n]);if(!r.valid)return{valid:!1,mergeErrorPath:[n,...r.mergeErrorPath]};i[n]=r.data}return{valid:!0,data:i}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=vn(i,a);if(!o.valid)return{valid:!1,mergeErrorPath:[r,...o.mergeErrorPath]};n.push(o.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function yn(e,t,n){let r=new Map,i;for(let n of t.issues)if(n.code===`unrecognized_keys`){i??=n;for(let e of n.keys)r.has(e)||r.set(e,{}),r.get(e).l=!0}else e.issues.push(n);for(let t of n.issues)if(t.code===`unrecognized_keys`)for(let e of t.keys)r.has(e)||r.set(e,{}),r.get(e).r=!0;else e.issues.push(t);let a=[...r].filter(([,e])=>e.l&&e.r).map(([e])=>e);if(a.length&&i&&e.issues.push({...i,keys:a}),_e(e))return e;let o=vn(t.value,n.value);if(!o.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);return e.value=o.data,e}var bn=x(`$ZodRecord`,(e,t)=>{L.init(e,t),e._zod.parse=(n,r)=>{let i=n.value;if(!ae(i))return n.issues.push({expected:`record`,code:`invalid_type`,input:i,inst:e}),n;let a=[],o=t.keyType._zod.values;if(o){n.value={};let s=new Set;for(let c of o)if(typeof c==`string`||typeof c==`number`||typeof c==`symbol`){s.add(typeof c==`number`?c.toString():c);let o=t.keyType._zod.run({value:c,issues:[]},r);if(o instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);if(o.issues.length){n.issues.push({code:`invalid_key`,origin:`record`,issues:o.issues.map(e=>xe(e,r,ee())),input:c,path:[c],inst:e});continue}let l=o.value,u=t.valueType._zod.run({value:i[c],issues:[]},r);u instanceof Promise?a.push(u.then(e=>{e.issues.length&&n.issues.push(...ye(c,e.issues)),n.value[l]=e.value})):(u.issues.length&&n.issues.push(...ye(c,u.issues)),n.value[l]=u.value)}let c;for(let e in i)s.has(e)||(c??=[],c.push(e));c&&c.length>0&&n.issues.push({code:`unrecognized_keys`,input:i,inst:e,keys:c})}else{n.value={};for(let o of Reflect.ownKeys(i)){if(o===`__proto__`||!Object.prototype.propertyIsEnumerable.call(i,o))continue;let s=t.keyType._zod.run({value:o,issues:[]},r);if(s instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);if(typeof o==`string`&&ht.test(o)&&s.issues.length){let e=t.keyType._zod.run({value:Number(o),issues:[]},r);if(e instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);e.issues.length===0&&(s=e)}if(s.issues.length){t.mode===`loose`?n.value[o]=i[o]:n.issues.push({code:`invalid_key`,origin:`record`,issues:s.issues.map(e=>xe(e,r,ee())),input:o,path:[o],inst:e});continue}let c=t.valueType._zod.run({value:i[o],issues:[]},r);c instanceof Promise?a.push(c.then(e=>{e.issues.length&&n.issues.push(...ye(o,e.issues)),n.value[s.value]=e.value})):(c.issues.length&&n.issues.push(...ye(o,c.issues)),n.value[s.value]=c.value)}}return a.length?Promise.all(a).then(()=>n):n}}),xn=x(`$ZodEnum`,(e,t)=>{L.init(e,t);let n=T(t.entries),r=new Set(n);e._zod.values=r,e._zod.pattern=RegExp(`^(${n.filter(e=>se.has(typeof e)).map(e=>typeof e==`string`?F(e):e.toString()).join(`|`)})$`),e._zod.parse=(t,i)=>{let a=t.value;return r.has(a)||t.issues.push({code:`invalid_value`,values:n,input:a,inst:e}),t}}),Sn=x(`$ZodTransform`,(e,t)=>{L.init(e,t),e._zod.optin=`optional`,e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new C(e.constructor.name);let i=t.transform(n.value,n);if(r.async)return(i instanceof Promise?i:Promise.resolve(i)).then(e=>(n.value=e,n.fallback=!0,n));if(i instanceof Promise)throw new S;return n.value=i,n.fallback=!0,n}});function Cn(e,t){return t===void 0&&(e.issues.length||e.fallback)?{issues:[],value:void 0}:e}var wn=x(`$ZodOptional`,(e,t)=>{L.init(e,t),e._zod.optin=`optional`,e._zod.optout=`optional`,k(e._zod,`values`,()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,void 0]):void 0),k(e._zod,`pattern`,()=>{let e=t.innerType._zod.pattern;return e?RegExp(`^(${ne(e.source)})?$`):void 0}),e._zod.parse=(e,n)=>{if(t.innerType._zod.optin===`optional`){let r=e.value,i=t.innerType._zod.run(e,n);return i instanceof Promise?i.then(e=>Cn(e,r)):Cn(i,r)}return e.value===void 0?e:t.innerType._zod.run(e,n)}}),Tn=x(`$ZodExactOptional`,(e,t)=>{wn.init(e,t),k(e._zod,`values`,()=>t.innerType._zod.values),k(e._zod,`pattern`,()=>t.innerType._zod.pattern),e._zod.parse=(e,n)=>t.innerType._zod.run(e,n)}),En=x(`$ZodNullable`,(e,t)=>{L.init(e,t),k(e._zod,`optin`,()=>t.innerType._zod.optin),k(e._zod,`optout`,()=>t.innerType._zod.optout),k(e._zod,`pattern`,()=>{let e=t.innerType._zod.pattern;return e?RegExp(`^(${ne(e.source)}|null)$`):void 0}),k(e._zod,`values`,()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,null]):void 0),e._zod.parse=(e,n)=>e.value===null?e:t.innerType._zod.run(e,n)}),Dn=x(`$ZodDefault`,(e,t)=>{L.init(e,t),e._zod.optin=`optional`,k(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);if(e.value===void 0)return e.value=t.defaultValue,e;let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(e=>On(e,t)):On(r,t)}});function On(e,t){return e.value===void 0&&(e.value=t.defaultValue),e}var kn=x(`$ZodPrefault`,(e,t)=>{L.init(e,t),e._zod.optin=`optional`,k(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>(n.direction===`backward`||e.value===void 0&&(e.value=t.defaultValue),t.innerType._zod.run(e,n))}),An=x(`$ZodNonOptional`,(e,t)=>{L.init(e,t),k(e._zod,`values`,()=>{let e=t.innerType._zod.values;return e?new Set([...e].filter(e=>e!==void 0)):void 0}),e._zod.parse=(n,r)=>{let i=t.innerType._zod.run(n,r);return i instanceof Promise?i.then(t=>jn(t,e)):jn(i,e)}});function jn(e,t){return!e.issues.length&&e.value===void 0&&e.issues.push({code:`invalid_type`,expected:`nonoptional`,input:e.value,inst:t}),e}var Mn=x(`$ZodCatch`,(e,t)=>{L.init(e,t),e._zod.optin=`optional`,k(e._zod,`optout`,()=>t.innerType._zod.optout),k(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(r=>(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>xe(e,n,ee()))},input:e.value}),e.issues=[],e.fallback=!0),e)):(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>xe(e,n,ee()))},input:e.value}),e.issues=[],e.fallback=!0),e)}}),Nn=x(`$ZodPipe`,(e,t)=>{L.init(e,t),k(e._zod,`values`,()=>t.in._zod.values),k(e._zod,`optin`,()=>t.in._zod.optin),k(e._zod,`optout`,()=>t.out._zod.optout),k(e._zod,`propValues`,()=>t.in._zod.propValues),e._zod.parse=(e,n)=>{if(n.direction===`backward`){let r=t.out._zod.run(e,n);return r instanceof Promise?r.then(e=>Pn(e,t.in,n)):Pn(r,t.in,n)}let r=t.in._zod.run(e,n);return r instanceof Promise?r.then(e=>Pn(e,t.out,n)):Pn(r,t.out,n)}});function Pn(e,t,n){return e.issues.length?(e.aborted=!0,e):t._zod.run({value:e.value,issues:e.issues,fallback:e.fallback},n)}var Fn=x(`$ZodReadonly`,(e,t)=>{L.init(e,t),k(e._zod,`propValues`,()=>t.innerType._zod.propValues),k(e._zod,`values`,()=>t.innerType._zod.values),k(e._zod,`optin`,()=>t.innerType?._zod?.optin),k(e._zod,`optout`,()=>t.innerType?._zod?.optout),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(In):In(r)}});function In(e){return e.value=Object.freeze(e.value),e}var Ln=x(`$ZodCustom`,(e,t)=>{vt.init(e,t),L.init(e,t),e._zod.parse=(e,t)=>e,e._zod.check=n=>{let r=n.value,i=t.fn(r);if(i instanceof Promise)return i.then(t=>Rn(t,n,r,e));Rn(i,n,r,e)}});function Rn(e,t,n,r){if(!e){let e={code:`custom`,input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(e.params=r._zod.def.params),t.issues.push(Ce(e))}}var zn,Bn=class{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){let n=t[0];return this._map.set(e,n),n&&typeof n==`object`&&`id`in n&&this._idmap.set(n.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let t=this._map.get(e);return t&&typeof t==`object`&&`id`in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){let t=e._zod.parent;if(t){let n={...this.get(t)??{}};delete n.id;let r={...n,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}};function Vn(){return new Bn}(zn=globalThis).__zod_globalRegistry??(zn.__zod_globalRegistry=Vn());var Hn=globalThis.__zod_globalRegistry;function Un(e,t){return new e({type:`string`,...I(t)})}function Wn(e,t){return new e({type:`string`,format:`email`,check:`string_format`,abort:!1,...I(t)})}function Gn(e,t){return new e({type:`string`,format:`guid`,check:`string_format`,abort:!1,...I(t)})}function Kn(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,...I(t)})}function qn(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v4`,...I(t)})}function Jn(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v6`,...I(t)})}function Yn(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v7`,...I(t)})}function Xn(e,t){return new e({type:`string`,format:`url`,check:`string_format`,abort:!1,...I(t)})}function Zn(e,t){return new e({type:`string`,format:`emoji`,check:`string_format`,abort:!1,...I(t)})}function Qn(e,t){return new e({type:`string`,format:`nanoid`,check:`string_format`,abort:!1,...I(t)})}function $n(e,t){return new e({type:`string`,format:`cuid`,check:`string_format`,abort:!1,...I(t)})}function er(e,t){return new e({type:`string`,format:`cuid2`,check:`string_format`,abort:!1,...I(t)})}function tr(e,t){return new e({type:`string`,format:`ulid`,check:`string_format`,abort:!1,...I(t)})}function nr(e,t){return new e({type:`string`,format:`xid`,check:`string_format`,abort:!1,...I(t)})}function rr(e,t){return new e({type:`string`,format:`ksuid`,check:`string_format`,abort:!1,...I(t)})}function ir(e,t){return new e({type:`string`,format:`ipv4`,check:`string_format`,abort:!1,...I(t)})}function ar(e,t){return new e({type:`string`,format:`ipv6`,check:`string_format`,abort:!1,...I(t)})}function or(e,t){return new e({type:`string`,format:`cidrv4`,check:`string_format`,abort:!1,...I(t)})}function sr(e,t){return new e({type:`string`,format:`cidrv6`,check:`string_format`,abort:!1,...I(t)})}function cr(e,t){return new e({type:`string`,format:`base64`,check:`string_format`,abort:!1,...I(t)})}function lr(e,t){return new e({type:`string`,format:`base64url`,check:`string_format`,abort:!1,...I(t)})}function ur(e,t){return new e({type:`string`,format:`e164`,check:`string_format`,abort:!1,...I(t)})}function dr(e,t){return new e({type:`string`,format:`jwt`,check:`string_format`,abort:!1,...I(t)})}function fr(e,t){return new e({type:`string`,format:`datetime`,check:`string_format`,offset:!1,local:!1,precision:null,...I(t)})}function pr(e,t){return new e({type:`string`,format:`date`,check:`string_format`,...I(t)})}function mr(e,t){return new e({type:`string`,format:`time`,check:`string_format`,precision:null,...I(t)})}function hr(e,t){return new e({type:`string`,format:`duration`,check:`string_format`,...I(t)})}function gr(e){return new e({type:`unknown`})}function _r(e,t){return new e({type:`never`,...I(t)})}function vr(e,t){return new yt({check:`max_length`,...I(t),maximum:e})}function yr(e,t){return new bt({check:`min_length`,...I(t),minimum:e})}function br(e,t){return new xt({check:`length_equals`,...I(t),length:e})}function xr(e,t){return new Ct({check:`string_format`,format:`regex`,...I(t),pattern:e})}function Sr(e){return new wt({check:`string_format`,format:`lowercase`,...I(e)})}function Cr(e){return new Tt({check:`string_format`,format:`uppercase`,...I(e)})}function wr(e,t){return new Et({check:`string_format`,format:`includes`,...I(t),includes:e})}function Tr(e,t){return new Dt({check:`string_format`,format:`starts_with`,...I(t),prefix:e})}function Er(e,t){return new Ot({check:`string_format`,format:`ends_with`,...I(t),suffix:e})}function Dr(e){return new kt({check:`overwrite`,tx:e})}function Or(e){return Dr(t=>t.normalize(e))}function kr(){return Dr(e=>e.trim())}function Ar(){return Dr(e=>e.toLowerCase())}function jr(){return Dr(e=>e.toUpperCase())}function Mr(){return Dr(e=>N(e))}function Nr(e,t,n){return new e({type:`array`,element:t,...I(n)})}function Pr(e,t,n){return new e({type:`custom`,check:`custom`,fn:t,...I(n)})}function Fr(e,t){let n=Ir(t=>(t.addIssue=e=>{if(typeof e==`string`)t.issues.push(Ce(e,t.value,n._zod.def));else{let r=e;r.fatal&&(r.continue=!1),r.code??=`custom`,r.input??=t.value,r.inst??=n,r.continue??=!n._zod.def.abort,t.issues.push(Ce(r))}},e(t.value,t)),t);return n}function Ir(e,t){let n=new vt({check:`custom`,...I(t)});return n._zod.check=e,n}function Lr(e){let t=e?.target??`draft-2020-12`;return t===`draft-4`&&(t=`draft-04`),t===`draft-7`&&(t=`draft-07`),{processors:e.processors??{},metadataRegistry:e?.metadata??Hn,target:t,unrepresentable:e?.unrepresentable??`throw`,override:e?.override??(()=>{}),io:e?.io??`output`,counter:0,seen:new Map,cycles:e?.cycles??`ref`,reused:e?.reused??`inline`,external:e?.external??void 0}}function Rr(e,t,n={path:[],schemaPath:[]}){var r;let i=e._zod.def,a=t.seen.get(e);if(a)return a.count++,n.schemaPath.includes(e)&&(a.cycle=n.path),a.schema;let o={schema:{},count:1,cycle:void 0,path:n.path};t.seen.set(e,o);let s=e._zod.toJSONSchema?.();if(s)o.schema=s;else{let r={...n,schemaPath:[...n.schemaPath,e],path:n.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(t,o.schema,r);else{let n=o.schema,a=t.processors[i.type];if(!a)throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);a(e,t,n,r)}let a=e._zod.parent;a&&(o.ref||=a,Rr(a,t,r),t.seen.get(a).isParent=!0)}let c=t.metadataRegistry.get(e);return c&&Object.assign(o.schema,c),t.io===`input`&&Vr(e)&&(delete o.schema.examples,delete o.schema.default),t.io===`input`&&`_prefault`in o.schema&&((r=o.schema).default??(r.default=o.schema._prefault)),delete o.schema._prefault,t.seen.get(e).schema}function zr(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);let r=new Map;for(let t of e.seen.entries()){let n=e.metadataRegistry.get(t[0])?.id;if(n){let e=r.get(n);if(e&&e!==t[0])throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);r.set(n,t[0])}}let i=t=>{let r=e.target===`draft-2020-12`?`$defs`:`definitions`;if(e.external){let n=e.external.registry.get(t[0])?.id,i=e.external.uri??(e=>e);if(n)return{ref:i(n)};let a=t[1].defId??t[1].schema.id??`schema${e.counter++}`;return t[1].defId=a,{defId:a,ref:`${i(`__shared`)}#/${r}/${a}`}}if(t[1]===n)return{ref:`#`};let i=`#/${r}/`,a=t[1].schema.id??`__schema${e.counter++}`;return{defId:a,ref:i+a}},a=e=>{if(e[1].schema.$ref)return;let t=e[1],{ref:n,defId:r}=i(e);t.def={...t.schema},r&&(t.defId=r);let a=t.schema;for(let e in a)delete a[e];a.$ref=n};if(e.cycles===`throw`)for(let t of e.seen.entries()){let e=t[1];if(e.cycle)throw Error(`Cycle detected: #/${e.cycle?.join(`/`)}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let n of e.seen.entries()){let r=n[1];if(t===n[0]){a(n);continue}if(e.external){let r=e.external.registry.get(n[0])?.id;if(t!==n[0]&&r){a(n);continue}}if(e.metadataRegistry.get(n[0])?.id){a(n);continue}if(r.cycle){a(n);continue}if(r.count>1&&e.reused===`ref`){a(n);continue}}}function Br(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);let r=t=>{let n=e.seen.get(t);if(n.ref===null)return;let i=n.def??n.schema,a={...i},o=n.ref;if(n.ref=null,o){r(o);let n=e.seen.get(o),s=n.schema;if(s.$ref&&(e.target===`draft-07`||e.target===`draft-04`||e.target===`openapi-3.0`)?(i.allOf=i.allOf??[],i.allOf.push(s)):Object.assign(i,s),Object.assign(i,a),t._zod.parent===o)for(let e in i)e===`$ref`||e===`allOf`||e in a||delete i[e];if(s.$ref&&n.def)for(let e in i)e===`$ref`||e===`allOf`||e in n.def&&JSON.stringify(i[e])===JSON.stringify(n.def[e])&&delete i[e]}let s=t._zod.parent;if(s&&s!==o){r(s);let t=e.seen.get(s);if(t?.schema.$ref&&(i.$ref=t.schema.$ref,t.def))for(let e in i)e===`$ref`||e===`allOf`||e in t.def&&JSON.stringify(i[e])===JSON.stringify(t.def[e])&&delete i[e]}e.override({zodSchema:t,jsonSchema:i,path:n.path??[]})};for(let t of[...e.seen.entries()].reverse())r(t[0]);let i={};if(e.target===`draft-2020-12`?i.$schema=`https://json-schema.org/draft/2020-12/schema`:e.target===`draft-07`?i.$schema=`http://json-schema.org/draft-07/schema#`:e.target===`draft-04`?i.$schema=`http://json-schema.org/draft-04/schema#`:e.target,e.external?.uri){let n=e.external.registry.get(t)?.id;if(!n)throw Error("Schema is missing an `id` property");i.$id=e.external.uri(n)}Object.assign(i,n.def??n.schema);let a=e.metadataRegistry.get(t)?.id;a!==void 0&&i.id===a&&delete i.id;let o=e.external?.defs??{};for(let t of e.seen.entries()){let e=t[1];e.def&&e.defId&&(e.def.id===e.defId&&delete e.def.id,o[e.defId]=e.def)}e.external||Object.keys(o).length>0&&(e.target===`draft-2020-12`?i.$defs=o:i.definitions=o);try{let n=JSON.parse(JSON.stringify(i));return Object.defineProperty(n,"~standard",{value:{...t[`~standard`],jsonSchema:{input:Ur(t,`input`,e.processors),output:Ur(t,`output`,e.processors)}},enumerable:!1,writable:!1}),n}catch{throw Error(`Error converting schema to JSON.`)}}function Vr(e,t){let n=t??{seen:new Set};if(n.seen.has(e))return!1;n.seen.add(e);let r=e._zod.def;if(r.type===`transform`)return!0;if(r.type===`array`)return Vr(r.element,n);if(r.type===`set`)return Vr(r.valueType,n);if(r.type===`lazy`)return Vr(r.getter(),n);if(r.type===`promise`||r.type===`optional`||r.type===`nonoptional`||r.type===`nullable`||r.type===`readonly`||r.type==="default"||r.type===`prefault`)return Vr(r.innerType,n);if(r.type===`intersection`)return Vr(r.left,n)||Vr(r.right,n);if(r.type===`record`||r.type===`map`)return Vr(r.keyType,n)||Vr(r.valueType,n);if(r.type===`pipe`)return e._zod.traits.has(`$ZodCodec`)?!0:Vr(r.in,n)||Vr(r.out,n);if(r.type===`object`){for(let e in r.shape)if(Vr(r.shape[e],n))return!0;return!1}if(r.type===`union`){for(let e of r.options)if(Vr(e,n))return!0;return!1}if(r.type===`tuple`){for(let e of r.items)if(Vr(e,n))return!0;return!!(r.rest&&Vr(r.rest,n))}return!1}var Hr=(e,t={})=>n=>{let r=Lr({...n,processors:t});return Rr(e,r),zr(r,e),Br(r,e)},Ur=(e,t,n={})=>r=>{let{libraryOptions:i,target:a}=r??{},o=Lr({...i??{},target:a,io:t,processors:n});return Rr(e,o),zr(o,e),Br(o,e)},Wr={guid:`uuid`,url:`uri`,datetime:`date-time`,json_string:`json-string`,regex:``},Gr=(e,t,n,r)=>{let i=n;i.type=`string`;let{minimum:a,maximum:o,format:s,patterns:c,contentEncoding:l}=e._zod.bag;if(typeof a==`number`&&(i.minLength=a),typeof o==`number`&&(i.maxLength=o),s&&(i.format=Wr[s]??s,i.format===``&&delete i.format,s===`time`&&delete i.format),l&&(i.contentEncoding=l),c&&c.size>0){let e=[...c];e.length===1?i.pattern=e[0].source:e.length>1&&(i.allOf=[...e.map(e=>({...t.target===`draft-07`||t.target===`draft-04`||t.target===`openapi-3.0`?{type:`string`}:{},pattern:e.source}))])}},Kr=(e,t,n,r)=>{n.not={}},qr=(e,t,n,r)=>{let i=e._zod.def,a=T(i.entries);a.every(e=>typeof e==`number`)&&(n.type=`number`),a.every(e=>typeof e==`string`)&&(n.type=`string`),n.enum=a},Jr=(e,t,n,r)=>{if(t.unrepresentable===`throw`)throw Error(`Custom types cannot be represented in JSON Schema`)},Yr=(e,t,n,r)=>{if(t.unrepresentable===`throw`)throw Error(`Transforms cannot be represented in JSON Schema`)},Xr=(e,t,n,r)=>{let i=n,a=e._zod.def,{minimum:o,maximum:s}=e._zod.bag;typeof o==`number`&&(i.minItems=o),typeof s==`number`&&(i.maxItems=s),i.type=`array`,i.items=Rr(a.element,t,{...r,path:[...r.path,`items`]})},Zr=(e,t,n,r)=>{let i=n,a=e._zod.def;i.type=`object`,i.properties={};let o=a.shape;for(let e in o)i.properties[e]=Rr(o[e],t,{...r,path:[...r.path,`properties`,e]});let s=new Set(Object.keys(o)),c=new Set([...s].filter(e=>{let n=a.shape[e]._zod;return t.io===`input`?n.optin===void 0:n.optout===void 0}));c.size>0&&(i.required=Array.from(c)),a.catchall?._zod.def.type===`never`?i.additionalProperties=!1:a.catchall?a.catchall&&(i.additionalProperties=Rr(a.catchall,t,{...r,path:[...r.path,`additionalProperties`]})):t.io===`output`&&(i.additionalProperties=!1)},Qr=(e,t,n,r)=>{let i=e._zod.def,a=i.inclusive===!1,o=i.options.map((e,n)=>Rr(e,t,{...r,path:[...r.path,a?`oneOf`:`anyOf`,n]}));a?n.oneOf=o:n.anyOf=o},$r=(e,t,n,r)=>{let i=e._zod.def,a=Rr(i.left,t,{...r,path:[...r.path,`allOf`,0]}),o=Rr(i.right,t,{...r,path:[...r.path,`allOf`,1]}),s=e=>`allOf`in e&&Object.keys(e).length===1;n.allOf=[...s(a)?a.allOf:[a],...s(o)?o.allOf:[o]]},ei=(e,t,n,r)=>{let i=n,a=e._zod.def;i.type=`object`;let o=a.keyType,s=o._zod.bag?.patterns;if(a.mode===`loose`&&s&&s.size>0){let e=Rr(a.valueType,t,{...r,path:[...r.path,`patternProperties`,`*`]});i.patternProperties={};for(let t of s)i.patternProperties[t.source]=e}else(t.target===`draft-07`||t.target===`draft-2020-12`)&&(i.propertyNames=Rr(a.keyType,t,{...r,path:[...r.path,`propertyNames`]})),i.additionalProperties=Rr(a.valueType,t,{...r,path:[...r.path,`additionalProperties`]});let c=o._zod.values;if(c){let e=[...c].filter(e=>typeof e==`string`||typeof e==`number`);e.length>0&&(i.required=e)}},ti=(e,t,n,r)=>{let i=e._zod.def,a=Rr(i.innerType,t,r),o=t.seen.get(e);t.target===`openapi-3.0`?(o.ref=i.innerType,n.nullable=!0):n.anyOf=[a,{type:`null`}]},ni=(e,t,n,r)=>{let i=e._zod.def;Rr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},ri=(e,t,n,r)=>{let i=e._zod.def;Rr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,n.default=JSON.parse(JSON.stringify(i.defaultValue))},ii=(e,t,n,r)=>{let i=e._zod.def;Rr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,t.io===`input`&&(n._prefault=JSON.parse(JSON.stringify(i.defaultValue)))},ai=(e,t,n,r)=>{let i=e._zod.def;Rr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType;let o;try{o=i.catchValue(void 0)}catch{throw Error(`Dynamic catch values are not supported in JSON Schema`)}n.default=o},oi=(e,t,n,r)=>{let i=e._zod.def,a=i.in._zod.traits.has(`$ZodTransform`),o=t.io===`input`?a?i.out:i.in:i.out;Rr(o,t,r);let s=t.seen.get(e);s.ref=o},si=(e,t,n,r)=>{let i=e._zod.def;Rr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,n.readOnly=!0},ci=(e,t,n,r)=>{let i=e._zod.def;Rr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},li=x(`ZodISODateTime`,(e,t)=>{Wt.init(e,t),V.init(e,t)});function ui(e){return fr(li,e)}var di=x(`ZodISODate`,(e,t)=>{Gt.init(e,t),V.init(e,t)});function fi(e){return pr(di,e)}var pi=x(`ZodISOTime`,(e,t)=>{Kt.init(e,t),V.init(e,t)});function mi(e){return mr(pi,e)}var hi=x(`ZodISODuration`,(e,t)=>{qt.init(e,t),V.init(e,t)});function gi(e){return hr(hi,e)}var _i=x(`ZodError`,(e,t)=>{Te.init(e,t),e.name=`ZodError`,Object.defineProperties(e,{format:{value:t=>Oe(e,t)},flatten:{value:t=>De(e,t)},addIssue:{value:t=>{e.issues.push(t),e.message=JSON.stringify(e.issues,E,2)}},addIssues:{value:t=>{e.issues.push(...t),e.message=JSON.stringify(e.issues,E,2)}},isEmpty:{get(){return e.issues.length===0}}})},{Parent:Error}),vi=ke(_i),yi=Ae(_i),bi=je(_i),xi=Ne(_i),Si=Fe(_i),Ci=Ie(_i),wi=Le(_i),Ti=Re(_i),Ei=ze(_i),Di=Be(_i),Oi=Ve(_i),ki=He(_i),Ai=new WeakMap;function ji(e,t,n){let r=Object.getPrototypeOf(e),i=Ai.get(r);if(i||(i=new Set,Ai.set(r,i)),!i.has(t)){i.add(t);for(let e in n){let t=n[e];Object.defineProperty(r,e,{configurable:!0,enumerable:!1,get(){let n=t.bind(this);return Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:!0,value:n}),n},set(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:!0,value:t})}})}}}var Mi=x(`ZodType`,(e,t)=>(L.init(e,t),Object.assign(e[`~standard`],{jsonSchema:{input:Ur(e,`input`),output:Ur(e,`output`)}}),e.toJSONSchema=Hr(e,{}),e.def=t,e.type=t.type,Object.defineProperty(e,"_def",{value:t}),e.parse=(t,n)=>vi(e,t,n,{callee:e.parse}),e.safeParse=(t,n)=>bi(e,t,n),e.parseAsync=async(t,n)=>yi(e,t,n,{callee:e.parseAsync}),e.safeParseAsync=async(t,n)=>xi(e,t,n),e.spa=e.safeParseAsync,e.encode=(t,n)=>Si(e,t,n),e.decode=(t,n)=>Ci(e,t,n),e.encodeAsync=async(t,n)=>wi(e,t,n),e.decodeAsync=async(t,n)=>Ti(e,t,n),e.safeEncode=(t,n)=>Ei(e,t,n),e.safeDecode=(t,n)=>Di(e,t,n),e.safeEncodeAsync=async(t,n)=>Oi(e,t,n),e.safeDecodeAsync=async(t,n)=>ki(e,t,n),ji(e,`ZodType`,{check(...e){let t=this.def;return this.clone(j(t,{checks:[...t.checks??[],...e.map(e=>typeof e==`function`?{_zod:{check:e,def:{check:`custom`},onattach:[]}}:e)]}),{parent:!0})},with(...e){return this.check(...e)},clone(e,t){return ce(this,e,t)},brand(){return this},register(e,t){return e.add(this,t),this},refine(e,t){return this.check(Ia(e,t))},superRefine(e,t){return this.check(La(e,t))},overwrite(e){return this.check(Dr(e))},optional(){return va(this)},exactOptional(){return ba(this)},nullable(){return Sa(this)},nullish(){return va(Sa(this))},nonoptional(e){return Oa(this,e)},array(){return ia(this)},or(e){return ca([this,e])},and(e){return ua(this,e)},transform(e){return Ma(this,ga(e))},default(e){return wa(this,e)},prefault(e){return Ea(this,e)},catch(e){return Aa(this,e)},pipe(e){return Ma(this,e)},readonly(){return Pa(this)},describe(e){let t=this.clone();return Hn.add(t,{description:e}),t},meta(...e){if(e.length===0)return Hn.get(this);let t=this.clone();return Hn.add(t,e[0]),t},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(e){return e(this)}}),Object.defineProperty(e,"description",{get(){return Hn.get(e)?.description},configurable:!0}),e)),Ni=x(`_ZodString`,(e,t)=>{Mt.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Gr(e,t,n,r);let n=e._zod.bag;e.format=n.format??null,e.minLength=n.minimum??null,e.maxLength=n.maximum??null,ji(e,`_ZodString`,{regex(...e){return this.check(xr(...e))},includes(...e){return this.check(wr(...e))},startsWith(...e){return this.check(Tr(...e))},endsWith(...e){return this.check(Er(...e))},min(...e){return this.check(yr(...e))},max(...e){return this.check(vr(...e))},length(...e){return this.check(br(...e))},nonempty(...e){return this.check(yr(1,...e))},lowercase(e){return this.check(Sr(e))},uppercase(e){return this.check(Cr(e))},trim(){return this.check(kr())},normalize(...e){return this.check(Or(...e))},toLowerCase(){return this.check(Ar())},toUpperCase(){return this.check(jr())},slugify(){return this.check(Mr())}})}),z=x(`ZodString`,(e,t)=>{Mt.init(e,t),Ni.init(e,t),e.email=t=>e.check(Wn(Pi,t)),e.url=t=>e.check(Xn(Li,t)),e.jwt=t=>e.check(dr(Qi,t)),e.emoji=t=>e.check(Zn(Ri,t)),e.guid=t=>e.check(Gn(Fi,t)),e.uuid=t=>e.check(Kn(Ii,t)),e.uuidv4=t=>e.check(qn(Ii,t)),e.uuidv6=t=>e.check(Jn(Ii,t)),e.uuidv7=t=>e.check(Yn(Ii,t)),e.nanoid=t=>e.check(Qn(zi,t)),e.guid=t=>e.check(Gn(Fi,t)),e.cuid=t=>e.check($n(Bi,t)),e.cuid2=t=>e.check(er(Vi,t)),e.ulid=t=>e.check(tr(Hi,t)),e.base64=t=>e.check(cr(Yi,t)),e.base64url=t=>e.check(lr(Xi,t)),e.xid=t=>e.check(nr(Ui,t)),e.ksuid=t=>e.check(rr(Wi,t)),e.ipv4=t=>e.check(ir(Gi,t)),e.ipv6=t=>e.check(ar(Ki,t)),e.cidrv4=t=>e.check(or(qi,t)),e.cidrv6=t=>e.check(sr(Ji,t)),e.e164=t=>e.check(ur(Zi,t)),e.datetime=t=>e.check(ui(t)),e.date=t=>e.check(fi(t)),e.time=t=>e.check(mi(t)),e.duration=t=>e.check(gi(t))});function B(e){return Un(z,e)}var V=x(`ZodStringFormat`,(e,t)=>{R.init(e,t),Ni.init(e,t)}),Pi=x(`ZodEmail`,(e,t)=>{Ft.init(e,t),V.init(e,t)}),Fi=x(`ZodGUID`,(e,t)=>{Nt.init(e,t),V.init(e,t)}),Ii=x(`ZodUUID`,(e,t)=>{Pt.init(e,t),V.init(e,t)}),Li=x(`ZodURL`,(e,t)=>{It.init(e,t),V.init(e,t)}),Ri=x(`ZodEmoji`,(e,t)=>{Lt.init(e,t),V.init(e,t)}),zi=x(`ZodNanoID`,(e,t)=>{Rt.init(e,t),V.init(e,t)}),Bi=x(`ZodCUID`,(e,t)=>{zt.init(e,t),V.init(e,t)}),Vi=x(`ZodCUID2`,(e,t)=>{Bt.init(e,t),V.init(e,t)}),Hi=x(`ZodULID`,(e,t)=>{Vt.init(e,t),V.init(e,t)}),Ui=x(`ZodXID`,(e,t)=>{Ht.init(e,t),V.init(e,t)}),Wi=x(`ZodKSUID`,(e,t)=>{Ut.init(e,t),V.init(e,t)}),Gi=x(`ZodIPv4`,(e,t)=>{Jt.init(e,t),V.init(e,t)}),Ki=x(`ZodIPv6`,(e,t)=>{Yt.init(e,t),V.init(e,t)}),qi=x(`ZodCIDRv4`,(e,t)=>{Xt.init(e,t),V.init(e,t)}),Ji=x(`ZodCIDRv6`,(e,t)=>{Zt.init(e,t),V.init(e,t)}),Yi=x(`ZodBase64`,(e,t)=>{$t.init(e,t),V.init(e,t)}),Xi=x(`ZodBase64URL`,(e,t)=>{tn.init(e,t),V.init(e,t)}),Zi=x(`ZodE164`,(e,t)=>{nn.init(e,t),V.init(e,t)}),Qi=x(`ZodJWT`,(e,t)=>{an.init(e,t),V.init(e,t)}),$i=x(`ZodUnknown`,(e,t)=>{on.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(e,t,n)=>void 0});function ea(){return gr($i)}var ta=x(`ZodNever`,(e,t)=>{sn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Kr(e,t,n,r)});function na(e){return _r(ta,e)}var ra=x(`ZodArray`,(e,t)=>{ln.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Xr(e,t,n,r),e.element=t.element,ji(e,`ZodArray`,{min(e,t){return this.check(yr(e,t))},nonempty(e){return this.check(yr(1,e))},max(e,t){return this.check(vr(e,t))},length(e,t){return this.check(br(e,t))},unwrap(){return this.element}})});function ia(e,t){return Nr(ra,e,t)}var aa=x(`ZodObject`,(e,t)=>{mn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Zr(e,t,n,r),k(e,`shape`,()=>t.shape),ji(e,`ZodObject`,{keyof(){return ma(Object.keys(this._zod.def.shape))},catchall(e){return this.clone({...this._zod.def,catchall:e})},passthrough(){return this.clone({...this._zod.def,catchall:ea()})},loose(){return this.clone({...this._zod.def,catchall:ea()})},strict(){return this.clone({...this._zod.def,catchall:na()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(e){return fe(this,e)},safeExtend(e){return pe(this,e)},merge(e){return me(this,e)},pick(e){return ue(this,e)},omit(e){return de(this,e)},partial(...e){return he(_a,this,e[0])},required(...e){return ge(Da,this,e[0])}})});function oa(e,t){return new aa({type:`object`,shape:e??{},...I(t)})}var sa=x(`ZodUnion`,(e,t)=>{gn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Qr(e,t,n,r),e.options=t.options});function ca(e,t){return new sa({type:`union`,options:e,...I(t)})}var la=x(`ZodIntersection`,(e,t)=>{_n.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>$r(e,t,n,r)});function ua(e,t){return new la({type:`intersection`,left:e,right:t})}var da=x(`ZodRecord`,(e,t)=>{bn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ei(e,t,n,r),e.keyType=t.keyType,e.valueType=t.valueType});function fa(e,t,n){return!t||!t._zod?new da({type:`record`,keyType:B(),valueType:e,...I(t)}):new da({type:`record`,keyType:e,valueType:t,...I(n)})}var pa=x(`ZodEnum`,(e,t)=>{xn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>qr(e,t,n,r),e.enum=t.entries,e.options=Object.values(t.entries);let n=new Set(Object.keys(t.entries));e.extract=(e,r)=>{let i={};for(let r of e)if(n.has(r))i[r]=t.entries[r];else throw Error(`Key ${r} not found in enum`);return new pa({...t,checks:[],...I(r),entries:i})},e.exclude=(e,r)=>{let i={...t.entries};for(let t of e)if(n.has(t))delete i[t];else throw Error(`Key ${t} not found in enum`);return new pa({...t,checks:[],...I(r),entries:i})}});function ma(e,t){return new pa({type:`enum`,entries:Array.isArray(e)?Object.fromEntries(e.map(e=>[e,e])):e,...I(t)})}var ha=x(`ZodTransform`,(e,t)=>{Sn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Yr(e,t,n,r),e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new C(e.constructor.name);n.addIssue=r=>{if(typeof r==`string`)n.issues.push(Ce(r,n.value,t));else{let t=r;t.fatal&&(t.continue=!1),t.code??=`custom`,t.input??=n.value,t.inst??=e,n.issues.push(Ce(t))}};let i=t.transform(n.value,n);return i instanceof Promise?i.then(e=>(n.value=e,n.fallback=!0,n)):(n.value=i,n.fallback=!0,n)}});function ga(e){return new ha({type:`transform`,transform:e})}var _a=x(`ZodOptional`,(e,t)=>{wn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ci(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function va(e){return new _a({type:`optional`,innerType:e})}var ya=x(`ZodExactOptional`,(e,t)=>{Tn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ci(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function ba(e){return new ya({type:`optional`,innerType:e})}var xa=x(`ZodNullable`,(e,t)=>{En.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ti(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Sa(e){return new xa({type:`nullable`,innerType:e})}var Ca=x(`ZodDefault`,(e,t)=>{Dn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ri(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function wa(e,t){return new Ca({type:`default`,innerType:e,get defaultValue(){return typeof t==`function`?t():oe(t)}})}var Ta=x(`ZodPrefault`,(e,t)=>{kn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ii(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Ea(e,t){return new Ta({type:`prefault`,innerType:e,get defaultValue(){return typeof t==`function`?t():oe(t)}})}var Da=x(`ZodNonOptional`,(e,t)=>{An.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ni(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Oa(e,t){return new Da({type:`nonoptional`,innerType:e,...I(t)})}var ka=x(`ZodCatch`,(e,t)=>{Mn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ai(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function Aa(e,t){return new ka({type:`catch`,innerType:e,catchValue:typeof t==`function`?t:()=>t})}var ja=x(`ZodPipe`,(e,t)=>{Nn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>oi(e,t,n,r),e.in=t.in,e.out=t.out});function Ma(e,t){return new ja({type:`pipe`,in:e,out:t})}var Na=x(`ZodReadonly`,(e,t)=>{Fn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>si(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Pa(e){return new Na({type:`readonly`,innerType:e})}var Fa=x(`ZodCustom`,(e,t)=>{Ln.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Jr(e,t,n,r)});function Ia(e,t={}){return Pr(Fa,e,t)}function La(e,t){return Fr(e,t)}var Ra=oa({id:B().optional(),type:B()}).passthrough(),za=oa({nodes:fa(B(),ea()),rootNodeIds:ia(B()).optional(),installedPlugins:ia(ea()).optional()}).passthrough();function Ba(e){let t=[],n=za.safeParse(e);if(!n.success)return{nodes:{},raw:e,diagnostics:[{severity:`error`,code:`missing_nodes`,message:`顶层缺少有效的 nodes 对象`,sourcePath:`nodes`}]};let r={};for(let[e,i]of Object.entries(n.data.nodes)){let n=Ra.safeParse(i);if(!n.success){t.push({severity:`error`,code:`invalid_node`,message:`节点不是可识别对象`,nodeId:e,sourcePath:`nodes.${e}`});continue}r[e]={...n.data,id:e}}return{nodes:r,raw:e,diagnostics:t}}var Va=(e,t=[0,0,0])=>Array.isArray(e)&&e.length>=3&&e.every(Number.isFinite)?[e[0],e[1],e[2]]:t,Ha=e=>Array.isArray(e)&&e.length>=2&&e.every(Number.isFinite)?[e[0],e[1]]:[0,0];function Ua(e,t,n){let r=Math.cos(n),i=Math.sin(n);return{x:e*r+t*i,z:-e*i+t*r}}function Wa(e,t){let n=[],r=new Set,i=e;for(;i;){if(r.has(i))return{sourceNodeIds:n,error:`parent_cycle`};r.add(i),n.push(i);let e=t[i];if(!e)return{sourceNodeIds:n,error:`missing_parent`};if(e.type===`level`)return{levelId:e.id,sourceNodeIds:n};i=e.parentId}return{sourceNodeIds:n,error:`missing_parent`}}function Ga(e){let t=e.asset?.dimensions;return Array.isArray(t)&&t.length>=3&&t.every(e=>Number.isFinite(e)&&e>0)?[t[0],t[1],t[2]]:null}function Ka(e){let t=e.scale??[1,1,1];return Array.isArray(t)&&t.length>=3&&t.every(e=>Number.isFinite(e)&&e>0)?[t[0],t[1],t[2]]:null}function qa(e){let t=Ga(e),n=Ka(e);return t&&n?{width:t[0]*n[0],height:t[1]*n[1],depth:t[2]*n[2]}:null}function Ja(e){return(e*180/Math.PI%360+360)%360}function Ya(e,t){let n=Wa(e,t),r=new Set,i=(e,t)=>({x:0,z:0,rotationY:0,sourceNodeIds:t,status:`error`,error:e});function a(e){if(r.has(e))return i(`parent_cycle`,[e]);r.add(e);let o=t[e];if(!o)return i(`missing_parent`,[e]);let s=Va(o.position),c=Va(o.rotation)[1];if(!o.parentId)return o.type===`level`?{x:0,z:0,rotationY:0,ancestorLevelId:o.id,sourceNodeIds:[e],status:`ok`}:i(`missing_parent`,[e]);let l=t[o.parentId];if(!l)return i(`missing_parent`,[e,o.parentId]);if(l.type===`wall`){let t=Ha(l.start),r=Ha(l.end),i=-Math.atan2(r[1]-t[1],r[0]-t[0]),a=o.asset?.attachTo===`wall-side`,u=Number.isFinite(l.thickness)&&l.thickness>0?l.thickness:.1,d=a?u/2*(o.side===`front`?1:-1):s[2],f=Ua(s[0],d,i),p=i+c,m=t[0]+f.x,h=t[1]+f.z;if(a){let e=qa(o);if(e){let t=Ua(0,e.depth/2,p);m+=t.x,h+=t.z}}return{x:m,z:h,rotationY:p,ancestorLevelId:n.levelId,sourceNodeIds:[e,l.id],status:`ok`}}if(![`level`,`slab`,`ceiling`,`item`,`shelf`].includes(l.type))return i(`unsupported_parent_transform`,[e,l.id]);if(l.type===`level`||l.type===`slab`||l.type===`ceiling`)return{x:s[0],z:s[2],rotationY:c,ancestorLevelId:n.levelId,sourceNodeIds:[e,l.id],status:`ok`};let u=a(l.id);if(u.status===`error`)return{...u,sourceNodeIds:[e,...u.sourceNodeIds]};let d=Ua(s[0],s[2],u.rotationY);return{x:u.x+d.x,z:u.z+d.z,rotationY:u.rotationY+c,ancestorLevelId:n.levelId,sourceNodeIds:[e,...u.sourceNodeIds],status:`ok`}}let o=a(e);return o.status===`ok`?{...o,ancestorLevelId:n.levelId}:o}function Xa(e,t){return{x:e,y:t}}function Za(e){let t=Math.cos(e.rotationY),n=Math.sin(e.rotationY),r=Xa(e.x,e.z);return{a:t,b:-n,c:n,d:t,e:r.x,f:r.y}}function Qa(e){return`matrix(${e.a} ${e.b} ${e.c} ${e.d} ${e.e} ${e.f})`}function $a(e,t){let n=t[e.wallId||e.parentId||``];if(!n||n.type!==`wall`)return null;let r=Ha(n.start),i=Ha(n.end),a=i[0]-r[0],o=i[1]-r[1],s=Math.hypot(a,o);if(!Number.isFinite(s)||s===0)return null;let c=Array.isArray(e.position)&&Number.isFinite(e.position[0])?e.position[0]:0;return{x:r[0]+a/s*c,z:r[1]+o/s*c,rotationY:Math.atan2(o,a),ancestorLevelId:Wa(e.id,t).levelId,sourceNodeIds:[e.id,n.id]}}function eo(e,t=1){if(!e.length)return{minX:-5,minZ:-5,width:10,height:10};let n=e.map(e=>e.x),r=e.map(e=>e.z),i=Math.min(...n)-t,a=Math.max(...n)+t,o=Math.min(...r)-t,s=Math.max(...r)+t;return{minX:i,minZ:o,width:Math.max(a-i,1),height:Math.max(s-o,1)}}function to(e,t,n){return{minX:t.x-(t.x-e.minX)*n,minZ:t.z-(t.z-e.minZ)*n,width:e.width*n,height:e.height*n}}function no(e,t,n){let r=n*Math.PI/180,i=Math.cos(r),a=Math.sin(r);return{x:-(e*i+t*a),z:-(-e*a+t*i)}}function ro(e){let t=[],n=new Set([`site`,`building`,`level`,`zone`,`wall`,`door`,`window`,`item`,`slab`,`ceiling`,`shelf`,`stair`,`stair-segment`]);for(let r of Object.values(e)){if(n.has(r.type)||t.push({severity:`info`,code:`unsupported_node_type`,message:`暂未渲染的节点类型：${r.type}`,nodeId:r.id,sourcePath:`nodes.${r.id}.type`}),r.type!==`item`)continue;Ga(r)||t.push({severity:`error`,code:`invalid_item_dimensions`,message:`asset.dimensions 必须是三个大于 0 的有限数值；未生成虚假尺寸`,nodeId:r.id,sourcePath:`nodes.${r.id}.asset.dimensions`});let e=r.scale;Array.isArray(e)&&!e.every(e=>Number.isFinite(e)&&e>0)&&t.push({severity:`error`,code:`invalid_item_scale`,message:`item.scale 包含无效数值`,nodeId:r.id,sourcePath:`nodes.${r.id}.scale`}),Array.isArray(e)&&e.length>=3&&!(e[0]===e[1]&&e[1]===e[2])&&t.push({severity:`warning`,code:`non_uniform_item_scale`,message:`非等比例 item.scale，图片会被非等比例拉伸`,nodeId:r.id,sourcePath:`nodes.${r.id}.scale`}),r.asset?.floorPlanUrl||t.push({severity:`info`,code:`missing_floor_plan_image`,message:`缺少 floorPlanUrl，将显示物理占地框`,nodeId:r.id,sourcePath:`nodes.${r.id}.asset.floorPlanUrl`}),r.asset?.rotation?.some(e=>e!==0)&&t.push({severity:`warning`,code:`asset_corrective_rotation_present`,message:`GLB 校正旋转不参与 floorPlanUrl 二维实例旋转`,nodeId:r.id,sourcePath:`nodes.${r.id}.asset.rotation`})}return t}var io=.1;function ao(e){return e.thickness===void 0?{rawThickness:null,resolvedPhysicalThickness:io,thicknessSource:`pascal-default`}:{rawThickness:e.thickness,resolvedPhysicalThickness:e.thickness,thicknessSource:`explicit`}}var oo=1e-6,so=e=>({x:e.start[0],y:e.start[1]}),co=e=>({x:e.end[0],y:e.end[1]}),lo=e=>{let t=so(e),n=co(e),r=n.x-t.x,i=n.y-t.y,a=Math.hypot(r,i);return{start:t,end:n,length:a,tangent:a<oo?{x:1,y:0}:{x:r/a,y:i/a},normal:a<oo?{x:0,y:1}:{x:-i/a,y:r/a},midpoint:{x:(t.x+n.x)/2,y:(t.y+n.y)/2}}};function uo(e){let t=lo(e),n=t.length/2,r=Math.max(-n,Math.min(n,e.curveOffset??0)),i=Math.min(.03,Math.max(.005,t.length*.005));return Math.abs(r)<=i?0:r}function H(e){return Math.abs(uo(e))>oo}function U(e){let t=lo(e),n=uo(e);if(Math.abs(n)<=oo||t.length<oo)return null;let r=t.length*t.length/(8*Math.abs(n))+Math.abs(n)/2,i=Math.sign(n)||1,a=r-Math.abs(n),o={x:t.midpoint.x+t.normal.x*a*i,y:t.midpoint.y+t.normal.y*a*i},s=Math.atan2(t.start.y-o.y,t.start.x-o.x),c=Math.atan2(t.end.y-o.y,t.end.x-o.x)-s;if(i>0)for(;c<=0;)c+=Math.PI*2;else for(;c>=0;)c-=Math.PI*2;return{center:o,radius:r,startAngle:s,delta:c,direction:i}}function fo(e,t){let n=lo(e),r=Math.max(0,Math.min(1,t));if(!H(e)||n.length<oo)return{point:{x:n.start.x+(n.end.x-n.start.x)*r,y:n.start.y+(n.end.y-n.start.y)*r},tangent:n.tangent,normal:n.normal};let i=U(e),a=i.startAngle+i.delta*r,o={x:i.center.x+Math.cos(a)*i.radius,y:i.center.y+Math.sin(a)*i.radius},s=i.direction>0?{x:-Math.sin(a),y:Math.cos(a)}:{x:Math.sin(a),y:-Math.cos(a)};return{point:o,tangent:s,normal:{x:-s.y,y:s.x}}}function po(e,t=24,n){let r=(e.thickness??.1)/2,i=[],a=[];for(let n=0;n<=Math.max(1,t);n++){let o=fo(e,n/Math.max(1,t));i.push({x:o.point.x+o.normal.x*r,y:o.point.y+o.normal.y*r}),a.push({x:o.point.x-o.normal.x*r,y:o.point.y-o.normal.y*r})}return i[0]=n?.startLeft??i[0],a[0]=n?.startRight??a[0],i[i.length-1]=n?.endLeft??i[i.length-1],a[a.length-1]=n?.endRight??a[a.length-1],[...a,...i.reverse()]}var mo=.001,ho=(e,t=mo)=>`${Math.round(e.x/t)},${Math.round(e.y/t)}`,go=(e,t)=>({a:-t.y,b:t.x,c:-(-t.y*e.x+t.x*e.y)}),_o=(e,t)=>{let n={x:t.start[0],y:t.start[1]},r={x:t.end[0],y:t.end[1]};if(ho(e)===ho(n)||ho(e)===ho(r))return!1;let i=r.x-n.x,a=r.y-n.y,o=i*i+a*a;if(o<1e-9)return!1;let s=(i*(e.x-n.x)+a*(e.y-n.y))/o;return s<.001||s>.999?!1:Math.hypot(e.x-(n.x+s*i),e.y-(n.y+s*a))<mo};function vo(e){let t=new Map;for(let n of e){let e=[[`start`,{x:n.start[0],y:n.start[1]}],[`end`,{x:n.end[0],y:n.end[1]}]];for(let[r,i]of e){let e=ho(i),a=t.get(e)??{meetingPoint:i,connectedWalls:[]};a.connectedWalls.push({wall:n,endType:r}),t.set(e,a)}}for(let n of t.values())for(let t of e)!n.connectedWalls.some(e=>e.wall.id===t.id)&&_o(n.meetingPoint,t)&&n.connectedWalls.push({wall:t,endType:`passthrough`});let n=new Map([...t].filter(([,e])=>e.connectedWalls.length>=2)),r=new Map;for(let[e,t]of n){let n=[];for(let e of t.connectedWalls){let r=(e.wall.thickness??.1)/2,i=e.endType===`passthrough`?[{x:e.wall.end[0]-e.wall.start[0],y:e.wall.end[1]-e.wall.start[1]},{x:e.wall.start[0]-e.wall.end[0],y:e.wall.start[1]-e.wall.end[1]}]:[yo(e.wall,e.endType)];for(let a of i){let i=Math.hypot(a.x,a.y);if(i<1e-9)continue;let o={x:-a.y/i,y:a.x/i};n.push({wallId:e.wall.id,angle:Math.atan2(a.y,a.x),edgeA:go({x:t.meetingPoint.x+o.x*r,y:t.meetingPoint.y+o.y*r},a),edgeB:go({x:t.meetingPoint.x-o.x*r,y:t.meetingPoint.y-o.y*r},a),isPassthrough:e.endType===`passthrough`,half:r})}}n.sort((e,t)=>e.angle-t.angle);let i=new Map;for(let e=0;e<n.length;e+=1){let r=n[e],a=n[(e+1)%n.length];if(!r||!a)continue;let o=r.edgeA.a*a.edgeB.b-a.edgeB.a*r.edgeA.b;if(Math.abs(o)<1e-9)continue;let s={x:(r.edgeA.b*a.edgeB.c-a.edgeB.b*r.edgeA.c)/o,y:(a.edgeB.a*r.edgeA.c-r.edgeA.a*a.edgeB.c)/o},c=10*Math.max(r.half,a.half);!Number.isFinite(s.x)||!Number.isFinite(s.y)||Math.hypot(s.x-t.meetingPoint.x,s.y-t.meetingPoint.y)>c||(r.isPassthrough||i.set(r.wallId,{...i.get(r.wallId)??{},left:s}),a.isPassthrough||i.set(a.wallId,{...i.get(a.wallId)??{},right:s}))}r.set(e,i)}return{junctionData:r,junctions:n}}function yo(e,t){if(H(e)){let n=fo(e,t===`start`?0:1);return t===`start`?n.tangent:{x:-n.tangent.x,y:-n.tangent.y}}return t===`start`?{x:e.end[0]-e.start[0],y:e.end[1]-e.start[1]}:{x:e.start[0]-e.end[0],y:e.start[1]-e.end[1]}}function bo(e,t){let n=(e.thickness??.1)/2,r=t=>{let n=t===`start`?{x:e.start[0],y:e.start[1]}:{x:e.end[0],y:e.end[1]};if(H(e)){let n=fo(e,t===`start`?0:1);return{point:n.point,normal:n.normal}}let r=yo(e,t),i=Math.hypot(r.x,r.y)||1;return{point:n,normal:{x:-r.y/i,y:r.x/i}}},i=r(`start`),a=r(`end`),o=t.junctionData.get(ho(i.point))?.get(e.id),s=t.junctionData.get(ho(a.point))?.get(e.id);return{startLeft:o?.left??{x:i.point.x+i.normal.x*n,y:i.point.y+i.normal.y*n},startRight:o?.right??{x:i.point.x-i.normal.x*n,y:i.point.y-i.normal.y*n},endLeft:s?.right??{x:a.point.x+a.normal.x*n,y:a.point.y+a.normal.y*n},endRight:s?.left??{x:a.point.x-a.normal.x*n,y:a.point.y-a.normal.y*n}}}function xo(e,t){let n={x:e.start[0],y:e.start[1]},r={x:e.end[0],y:e.end[1]},i=r.x-n.x,a=r.y-n.y,o=Math.hypot(i,a);if(o<1e-9)return[];if(H(e))return po(e,24,bo(e,t));let s=ao(e).resolvedPhysicalThickness/2,c={x:-a/o,y:i/o},l=t.junctionData.get(ho(n))?.get(e.id),u=t.junctionData.get(ho(r))?.get(e.id),d=l?.left??{x:n.x+c.x*s,y:n.y+c.y*s},f=l?.right??{x:n.x-c.x*s,y:n.y-c.y*s},p=u?.right??{x:r.x+c.x*s,y:r.y+c.y*s},m=[f,u?.left??{x:r.x-c.x*s,y:r.y-c.y*s}];return u&&m.push(r),m.push(p,d),l&&m.push(n),m}var So=e=>e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n.x*i.y-n.y*i.x},0)/2,Co=(e,t,n,r)=>{let i=(e,t)=>e.x*t.y-e.y*t.x,a={x:t.x-e.x,y:t.y-e.y},o={x:r.x-n.x,y:r.y-n.y},s=i(a,o);if(Math.abs(s)<1e-9)return!1;let c={x:n.x-e.x,y:n.y-e.y},l=i(c,o)/s,u=i(c,a)/s;return l>1e-8&&l<.99999999&&u>1e-8&&u<.99999999};function wo(e,t){let n=[];if(!t.length)return n.push(`wall_zero_length`),{valid:!1,codes:n,area:0,maxVertexDistance:0};t.length<3&&n.push(`wall_invalid_footprint`),t.some(e=>!Number.isFinite(e.x)||!Number.isFinite(e.y))&&n.push(`wall_non_finite_geometry`);for(let e=0;e<t.length;e++)for(let r=e+1;r<t.length;r++)Math.abs(e-r)>1&&!(e===0&&r===t.length-1)&&Co(t[e],t[(e+1)%t.length],t[r],t[(r+1)%t.length])&&n.push(`wall_self_intersection`);let r=So(t);Math.abs(r)<1e-10&&n.push(`wall_invalid_footprint`);let i=Array.from({length:25},(t,n)=>fo(e,n/24).point),a=Math.max(...t.map(e=>Math.min(...i.map(t=>Math.hypot(e.x-t.x,e.y-t.y)))),0);return a>Math.max(ao(e).resolvedPhysicalThickness*12,1)&&n.push(`wall_miter_outlier`),H(e)&&i.every(t=>Math.abs((t.y-e.start[1])*(e.end[0]-e.start[0])-(t.x-e.start[0])*(e.end[1]-e.start[1]))<1e-5)&&n.push(`wall_curve_invalid`),{valid:n.length===0,codes:[...new Set(n)],area:r,maxVertexDistance:a}}function To(e){let t=vo(e);return e.map(e=>{let n=xo(e,t);return{wallId:e.id,footprint:n,validation:wo(e,n),thickness:ao(e)}})}var Eo={width:1.2,depth:.3,thickness:.04,height:.9,rows:1,columns:1,style:`wall-shelf`,withBack:!1,withSides:!0,withBottom:!1,bracketStyle:`minimal`},Do=new Set([`wall-shelf`,`bookshelf`,`open-rack`,`cubby`]),Oo=new Set([`minimal`,`industrial`,`hidden`]),ko=(e,t,n,r,i=!1)=>{let a=e[t];return typeof a==`number`&&Number.isFinite(a)&&a>=n&&a<=r&&(!i||Number.isInteger(a))?a:Eo[t]};function W(e){let t=[],n=ko(e,`width`,.3,3),r=ko(e,`depth`,.1,1),i=ko(e,`thickness`,.01,.1),a=ko(e,`height`,.05,2.5),o=ko(e,`rows`,1,8,!0),s=ko(e,`columns`,1,6,!0);for(let[c,l]of Object.entries({width:n,depth:r,thickness:i,height:a,rows:o,columns:s}))c in e||t.push(c);let c=Do.has(e.style)?e.style:Eo.style;`style`in e||t.push(`style`);let l=Oo.has(e.bracketStyle)?e.bracketStyle:Eo.bracketStyle;`bracketStyle`in e||t.push(`bracketStyle`);let u=n=>(n in e||t.push(n),typeof e[n]==`boolean`?e[n]:Eo[n]);return{width:n,depth:r,thickness:i,height:a,rows:o,columns:s,style:c,bracketStyle:l,withBack:u(`withBack`),withSides:u(`withSides`),withBottom:u(`withBottom`),defaultFields:t}}function Ao(e){return Number.isFinite(e.width??Eo.width)&&Number.isFinite(e.depth??Eo.depth)&&(e.width===void 0||e.width>=.3&&e.width<=3)&&(e.depth===void 0||e.depth>=.1&&e.depth<=1)}function jo(e,t){let n=Wa(e,t),r=new Set,i=(e,t)=>({x:0,z:0,rotationY:0,sourceNodeIds:t,status:`error`,error:e}),a=e=>{if(r.has(e))return i(`parent_cycle`,[e]);r.add(e);let o=t[e];if(!o)return i(`missing_parent`,[e]);let s=Array.isArray(o.position)?o.position:[0,0,0],c=Array.isArray(o.rotation)?o.rotation[1]??0:0,l=t[o.parentId??``];if(!o.parentId||!l)return i(`missing_parent`,[e,o.parentId??``]);if([`level`,`slab`,`ceiling`].includes(l.type))return{x:s[0],z:s[2],rotationY:c,ancestorLevelId:n.levelId,sourceNodeIds:[e,l.id],status:`ok`};if(l.type===`item`){let r=Ya(l.id,t);if(r.status===`error`)return r;let i=Ua(s[0],s[2],r.rotationY);return{x:r.x+i.x,z:r.z+i.z,rotationY:r.rotationY+c,ancestorLevelId:n.levelId,sourceNodeIds:[e,...r.sourceNodeIds],status:`ok`}}if(l.type===`shelf`){let t=a(l.id);if(t.status===`error`)return t;let r=Ua(s[0],s[2],t.rotationY);return{x:t.x+r.x,z:t.z+r.z,rotationY:t.rotationY+c,ancestorLevelId:n.levelId,sourceNodeIds:[e,...t.sourceNodeIds],status:`ok`}}return i(`unsupported_parent_transform`,[e,l.id])},o=a(e);return o.status===`ok`?{...o,ancestorLevelId:n.levelId}:o}function Mo(e,t){let n=jo(e.id,t);return n.status===`ok`?Za(n):null}function No(e,t){let n=W(e),r=Mo(e,t);return!r||!Ao(e)?[]:[[-n.width/2,-n.depth/2],[n.width/2,-n.depth/2],[n.width/2,n.depth/2],[-n.width/2,n.depth/2]].map(([e,t])=>({x:r.a*e+r.c*t+r.e,z:r.b*e+r.d*t+r.f}))}function Po(e){return(e.style===`bookshelf`||e.style===`cubby`)&&e.columns>1?Array.from({length:e.columns-1},(t,n)=>-((e.width-2*e.thickness)/2)+(n+1)*(e.width-2*e.thickness)/e.columns):[]}var Fo={position:[0,0,0],rotation:0,stairType:`straight`,fromLevelId:null,toLevelId:null,width:1,totalRise:2.5,stepCount:10,thickness:.25,fillToFloor:!0,innerRadius:.9,sweepAngle:Math.PI/2,topLandingMode:`none`,topLandingDepth:.9,showCenterColumn:!0,showStepSupports:!0,railingMode:`none`,railingHeight:.92,children:[],slabOpeningMode:`none`,openingOffset:0},Io=(e,t,n)=>({x:e.x+t*Math.cos(n),z:e.z+t*Math.sin(n)});function Lo(e){let t=Object.keys(Fo).filter(t=>!(t in e));return{...Fo,...e,sourceFields:t}}function Ro(e){let t=Lo(e),n=Array.isArray(t.position)&&t.position.length>=3?t.position:null;if(!n||typeof t.width!=`number`||t.width<=0||typeof t.innerRadius!=`number`||t.innerRadius<=0||typeof t.sweepAngle!=`number`||!Number.isFinite(t.sweepAngle)||t.sweepAngle===0||!Number.isInteger(t.stepCount)||t.stepCount<1)return null;let r={x:n[0],z:n[2]},i=Math.abs(t.sweepAngle)>=Math.PI*2?Math.sign(t.sweepAngle)*(Math.PI*2-.001):t.sweepAngle,a=t.innerRadius+t.width,o=-t.rotation-i/2,s=o+i,c=s+(t.topLandingMode===`integrated`?Math.sign(i)*Math.min(Math.PI*.75,Math.max(.3,t.topLandingDepth)/Math.max(t.innerRadius+t.width/2,.1)):0),l=t.stepCount,u=Array.from({length:Math.max(24,Math.ceil(Math.abs(c-o)/.12))+1},(e,t)=>o+(c-o)*t/Math.max(24,Math.ceil(Math.abs(c-o)/.12))),d=[...u.map(e=>Io(r,a,e)),...u.slice().reverse().map(e=>Io(r,t.innerRadius,e))],f=Array.from({length:l+1},(e,n)=>{let s=o+i*n/l;return{start:Io(r,t.innerRadius,s),end:Io(r,a,s)}}),p=t.innerRadius+t.width/2,m=s-i/l*.8,h={from:Io(r,p,m-i/l*.7),to:Io(r,p,m+(Math.sign(i)>=0?Math.PI/2:-Math.PI/2)*.15)},g=e=>u.map(t=>Io(r,e,t)),_=[...t.railingMode===`left`||t.railingMode===`both`?[g(t.innerRadius)]:[],...t.railingMode===`right`||t.railingMode===`both`?[g(a)]:[]];return{center:r,innerRadius:t.innerRadius,outerRadius:a,startAngle:o,endAngle:s,sweepAngle:i,treadLines:f,footprint:d,footprintPath:`M ${d.map(e=>`${e.x} ${e.z}`).join(` L `)} Z`,upDirection:h,centerColumn:t.showCenterColumn?r:null,supportLines:t.showStepSupports?f:[],railingPaths:_,landingGeometry:t.topLandingMode===`integrated`?[Io(r,t.innerRadius,s),Io(r,a,s),Io(r,a,c),Io(r,t.innerRadius,c)]:null,sourceFields:t.sourceFields,stepCount:l,railingMode:t.railingMode}}var zo=e=>Ro(e)?.footprint.map(e=>({x:e.x,z:e.z}))??[];function Bo(e){let t=Ro(e);return t?{footprint:t.footprint,downDirection:{from:t.upDirection.to,to:t.upDirection.from}}:null}function Vo(e){if(!Array.isArray(e)||e.length<3)return null;let t=e.map(e=>{if(!Array.isArray(e))return null;let t=e[0],n=e[2]??e[1];return Number.isFinite(t)&&Number.isFinite(n)?{x:t,z:n}:null});return t.every(Boolean)?t:null}function Ho(e){return Math.abs(e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n.x*i.z-i.x*n.z},0)/2)}function Uo(e){return`M ${e.map(e=>`${e.x} ${e.z}`).join(` L `)} Z`}function Wo(e){let t=Vo(e.polygon);if(!t)return null;let n=(Array.isArray(e.holes)?e.holes:[]).map(Vo).filter(e=>e!==null),r=Ho(t),i=n.reduce((e,t)=>e+Ho(t),0);return{outer:t,holes:n,path:[Uo(t),...n.map(Uo)].join(` `),outerArea:r,holeArea:i,netArea:r-i}}var Go=e=>Number.isFinite(e)?Number(e):null,Ko=(e,t)=>Go(e)??t,qo=(e,t,n)=>({x:e*Math.cos(n)+t*Math.sin(n),z:-e*Math.sin(n)+t*Math.cos(n)}),Jo=(e,t,n,r)=>{let i=qo(e,t,n);return{x:r.x+i.x,z:r.z+i.z}};function Yo(e,t){let n=Array.isArray(e.children)?e.children:[];return Object.values(t).filter(t=>t.type===`stair-segment`&&t.parentId===e.id).sort((e,t)=>{let r=n.indexOf(e.id),i=n.indexOf(t.id);return(r<0?2**53-1:r)-(i<0?2**53-1:i)})}function Xo(e,t){let n=Yo(e,t).filter(e=>e.visible!==!1);if(!n.length||!Array.isArray(e.position))return null;let r={x:0,z:0},i=0,a=[];for(let t=0;t<n.length;t+=1){let o=n[t],s=Go(o.width),c=Go(o.length);if(!(s&&s>0&&c&&c>0))return null;if(t>0){let e=n[t-1],a=Ko(e.width,0),s=Ko(e.length,0),c=0,l=s,u=0;o.attachmentSide===`left`?(c=a/2,l=s/2,u=Math.PI/2):o.attachmentSide===`right`&&(c=-a/2,l=s/2,u=-Math.PI/2);let d=qo(c,l,i);r={x:r.x+d.x,z:r.z+d.z},i+=u}let l=[[-s/2,0],[s/2,0],[s/2,c],[-s/2,c]],u={x:Ko(e.position[0],0),z:Ko(e.position[2],0)},d=Ko(e.rotation,0),f=(e,t)=>{let n=qo(e,t,i);return Jo(r.x+n.x,r.z+n.z,d,u)},p=l.map(([e,t])=>f(e,t)),m=Math.round(Ko(o.stepCount,0)),h=o.segmentType===`stair`&&m>1?Array.from({length:m-1},(e,t)=>{let n=(t+1)/m;return{start:f(-s/2,c*n),end:f(s/2,c*n)}}):[];a.push({node:o,polygon:p,treads:h})}let o=a[a.length-1].polygon;return{segments:a,upDirection:{from:{x:(a[0].polygon[0].x+a[0].polygon[1].x)/2,z:(a[0].polygon[0].z+a[0].polygon[1].z)/2},to:{x:(o[2].x+o[3].x)/2,z:(o[2].z+o[3].z)/2}}}}function Zo(e){if(!Array.isArray(e.position))return null;let t=Go(e.width),n=Go(e.innerRadius),r=Go(e.sweepAngle),i=Math.round(Ko(e.stepCount,10));if(!(t&&t>0&&n!==null&&n>0&&r&&i>0))return null;let a={x:Ko(e.position[0],0),z:Ko(e.position[2],0)},o=Ko(e.rotation,0),s=n+t,c=-o-r/2,l=c+r,u=(e,t)=>({x:a.x+Math.cos(t)*e,z:a.z+Math.sin(t)*e}),d=u(s,c),f=u(s,l),p=u(n,l),m=u(n,c),h=+(Math.abs(r)>Math.PI),g=+(r>=0),_=+!g,v=`M ${d.x} ${d.z} A ${s} ${s} 0 ${h} ${g} ${f.x} ${f.z} L ${p.x} ${p.z} A ${n} ${n} 0 ${h} ${_} ${m.x} ${m.z} Z`,y=Array.from({length:i+1},(e,t)=>{let a=c+r*t/i;return{start:u(n,a),end:u(s,a)}}),b=n+t/2,x=u(b,c+r*.2),S=u(b,c+r*.8),C=Math.max(16,Math.ceil(Math.abs(r)/(Math.PI/18))),w=[...Array.from({length:C+1},(e,t)=>u(s,c+r*t/C)),...Array.from({length:C+1},(e,t)=>u(n,l-r*t/C))];return{footprintPath:v,treadLines:y,upDirection:{from:x,to:S},corners:w}}function Qo(e,t){return e.stairType===`spiral`?Ro(e)?.footprint??[]:e.stairType===`curved`?Zo(e)?.corners??[]:Xo(e,t)?.segments.flatMap(e=>e.polygon)??[]}function $o(e,t){return e.stairType===`spiral`?!!Ro(e):e.stairType===`curved`?!!Zo(e):!!Xo(e,t)}var es=[`#3b82f6`,`#10b981`,`#f59e0b`,`#ef4444`,`#8b5cf6`,`#06b6d4`,`#84cc16`,`#f97316`];function ts(e){return Array.isArray(e.polygon)?e.polygon.flatMap(e=>{if(!Array.isArray(e))return[];let t=e[0],n=e[2]??e[1];return Number.isFinite(t)&&Number.isFinite(n)?[{x:t,z:n}]:[]}):[]}function ns(e){return typeof e.color==`string`&&/^#[0-9a-f]{6}$/i.test(e.color)?e.color:es[[...e.id].reduce((e,t)=>e*31+t.charCodeAt(0)>>>0,0)%es.length]}function rs(e){let t=ts(e);if(t.length<3)return null;let n=0,r=0,i=0;for(let e=0;e<t.length;e+=1){let a=t[e],o=t[(e+1)%t.length],s=a.x*o.z-o.x*a.z;n+=s,r+=(a.x+o.x)*s,i+=(a.z+o.z)*s}return Math.abs(n)>1e-9?{x:r/(3*n),z:i/(3*n)}:{x:t.reduce((e,t)=>e+t.x,0)/t.length,z:t.reduce((e,t)=>e+t.z,0)/t.length}}var is=c(o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self,n.polygonClipping=r())})(e,(function(){function e(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(o){if(r)throw TypeError(`Generator is already executing.`);for(;n;)try{if(r=1,i&&(a=o[0]&2?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[o[0]&2,a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,i=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if((a=n.trys,!(a=a.length>0&&a[a.length-1]))&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=t.call(e,n)}catch(e){o=[6,e],i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}var t=function(){function e(e,t){this.next=null,this.key=e,this.data=t,this.left=null,this.right=null}return e}();function n(e,t){return e>t?1:e<t?-1:0}function r(e,n,r){for(var i=new t(null,null),a=i,o=i;;){var s=r(e,n.key);if(s<0){if(n.left===null)break;if(r(e,n.left.key)<0){var c=n.left;if(n.left=c.right,c.right=n,n=c,n.left===null)break}o.left=n,o=n,n=n.left}else if(s>0){if(n.right===null)break;if(r(e,n.right.key)>0){var c=n.right;if(n.right=c.left,c.left=n,n=c,n.right===null)break}a.right=n,a=n,n=n.right}else break}return a.right=n.left,o.left=n.right,n.left=i.right,n.right=i.left,n}function i(e,n,i,a){var o=new t(e,n);if(i===null)return o.left=o.right=null,o;i=r(e,i,a);var s=a(e,i.key);return s<0?(o.left=i.left,o.right=i,i.left=null):s>=0&&(o.right=i.right,o.left=i,i.right=null),o}function a(e,t,n){var i=null,a=null;if(t){t=r(e,t,n);var o=n(t.key,e);o===0?(i=t.left,a=t.right):o<0?(a=t.right,t.right=null,i=t):(i=t.left,t.left=null,a=t)}return{left:i,right:a}}function o(e,t,n){return t===null?e:e===null?t:(t=r(e.key,t,n),t.left=e,t)}function s(e,t,n,r,i){if(e){r(``+t+(n?`└── `:`├── `)+i(e)+`
`);var a=t+(n?`    `:`│   `);e.left&&s(e.left,a,!1,r,i),e.right&&s(e.right,a,!0,r,i)}}var c=function(){function c(e){e===void 0&&(e=n),this._root=null,this._size=0,this._comparator=e}return c.prototype.insert=function(e,t){return this._size++,this._root=i(e,t,this._root,this._comparator)},c.prototype.add=function(e,n){var i=new t(e,n);this._root===null&&(i.left=i.right=null,this._size++,this._root=i);var a=this._comparator,o=r(e,this._root,a),s=a(e,o.key);return s===0?this._root=o:(s<0?(i.left=o.left,i.right=o,o.left=null):s>0&&(i.right=o.right,i.left=o,o.right=null),this._size++,this._root=i),this._root},c.prototype.remove=function(e){this._root=this._remove(e,this._root,this._comparator)},c.prototype._remove=function(e,t,n){var i;return t===null?null:(t=r(e,t,n),n(e,t.key)===0?(t.left===null?i=t.right:(i=r(e,t.left,n),i.right=t.right),this._size--,i):t)},c.prototype.pop=function(){var e=this._root;if(e){for(;e.left;)e=e.left;return this._root=r(e.key,this._root,this._comparator),this._root=this._remove(e.key,this._root,this._comparator),{key:e.key,data:e.data}}return null},c.prototype.findStatic=function(e){for(var t=this._root,n=this._comparator;t;){var r=n(e,t.key);if(r===0)return t;t=r<0?t.left:t.right}return null},c.prototype.find=function(e){return this._root&&(this._root=r(e,this._root,this._comparator),this._comparator(e,this._root.key)!==0)?null:this._root},c.prototype.contains=function(e){for(var t=this._root,n=this._comparator;t;){var r=n(e,t.key);if(r===0)return!0;t=r<0?t.left:t.right}return!1},c.prototype.forEach=function(e,t){for(var n=this._root,r=[],i=!1;!i;)n===null?r.length===0?i=!0:(n=r.pop(),e.call(t,n),n=n.right):(r.push(n),n=n.left);return this},c.prototype.range=function(e,t,n,r){for(var i=[],a=this._comparator,o=this._root,s;i.length!==0||o;)if(o)i.push(o),o=o.left;else{if(o=i.pop(),s=a(o.key,t),s>0)break;if(a(o.key,e)>=0&&n.call(r,o))return this;o=o.right}return this},c.prototype.keys=function(){var e=[];return this.forEach(function(t){var n=t.key;return e.push(n)}),e},c.prototype.values=function(){var e=[];return this.forEach(function(t){var n=t.data;return e.push(n)}),e},c.prototype.min=function(){return this._root?this.minNode(this._root).key:null},c.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},c.prototype.minNode=function(e){if(e===void 0&&(e=this._root),e)for(;e.left;)e=e.left;return e},c.prototype.maxNode=function(e){if(e===void 0&&(e=this._root),e)for(;e.right;)e=e.right;return e},c.prototype.at=function(e){for(var t=this._root,n=!1,r=0,i=[];!n;)if(t)i.push(t),t=t.left;else if(i.length>0){if(t=i.pop(),r===e)return t;r++,t=t.right}else n=!0;return null},c.prototype.next=function(e){var t=this._root,n=null;if(e.right){for(n=e.right;n.left;)n=n.left;return n}for(var r=this._comparator;t;){var i=r(e.key,t.key);if(i===0)break;i<0?(n=t,t=t.left):t=t.right}return n},c.prototype.prev=function(e){var t=this._root,n=null;if(e.left!==null){for(n=e.left;n.right;)n=n.right;return n}for(var r=this._comparator;t;){var i=r(e.key,t.key);if(i===0)break;i<0?t=t.left:(n=t,t=t.right)}return n},c.prototype.clear=function(){return this._root=null,this._size=0,this},c.prototype.toList=function(){return d(this._root)},c.prototype.load=function(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!1);var r=e.length,i=this._comparator;if(n&&m(e,t,0,r-1,i),this._root===null)this._root=l(e,t,0,r),this._size=r;else{var a=p(this.toList(),u(e,t),i);r=this._size+r,this._root=f({head:a},0,r)}return this},c.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(c.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),c.prototype.toString=function(e){e===void 0&&(e=function(e){return String(e.key)});var t=[];return s(this._root,``,!0,function(e){return t.push(e)},e),t.join(``)},c.prototype.update=function(e,t,n){var r=this._comparator,s=a(e,this._root,r),c=s.left,l=s.right;r(e,t)<0?l=i(t,n,l,r):c=i(t,n,c,r),this._root=o(c,l,r)},c.prototype.split=function(e){return a(e,this._root,this._comparator)},c.prototype[Symbol.iterator]=function(){var t,n,r;return e(this,function(e){switch(e.label){case 0:t=this._root,n=[],r=!1,e.label=1;case 1:return r?[3,6]:t===null?[3,2]:(n.push(t),t=t.left,[3,5]);case 2:return n.length===0?[3,4]:(t=n.pop(),[4,t]);case 3:return e.sent(),t=t.right,[3,5];case 4:r=!0,e.label=5;case 5:return[3,1];case 6:return[2]}})},c}();function l(e,n,r,i){var a=i-r;if(a>0){var o=r+Math.floor(a/2),s=e[o],c=n[o],u=new t(s,c);return u.left=l(e,n,r,o),u.right=l(e,n,o+1,i),u}return null}function u(e,n){for(var r=new t(null,null),i=r,a=0;a<e.length;a++)i=i.next=new t(e[a],n[a]);return i.next=null,r.next}function d(e){for(var n=e,r=[],i=!1,a=new t(null,null),o=a;!i;)n?(r.push(n),n=n.left):r.length>0?(n=o=o.next=r.pop(),n=n.right):i=!0;return o.next=null,a.next}function f(e,t,n){var r=n-t;if(r>0){var i=t+Math.floor(r/2),a=f(e,t,i),o=e.head;return o.left=a,e.head=e.head.next,o.right=f(e,i+1,n),o}return null}function p(e,n,r){for(var i=new t(null,null),a=i,o=e,s=n;o!==null&&s!==null;)r(o.key,s.key)<0?(a.next=o,o=o.next):(a.next=s,s=s.next),a=a.next;return o===null?s!==null&&(a.next=s):a.next=o,i.next}function m(e,t,n,r,i){if(!(n>=r)){for(var a=e[n+r>>1],o=n-1,s=r+1;;){do o++;while(i(e[o],a)<0);do s--;while(i(e[s],a)>0);if(o>=s)break;var c=e[o];e[o]=e[s],e[s]=c,c=t[o],t[o]=t[s],t[s]=c}m(e,t,n,s,i),m(e,t,s+1,r,i)}}let h=(e,t)=>e.ll.x<=t.x&&t.x<=e.ur.x&&e.ll.y<=t.y&&t.y<=e.ur.y,g=(e,t)=>{if(t.ur.x<e.ll.x||e.ur.x<t.ll.x||t.ur.y<e.ll.y||e.ur.y<t.ll.y)return null;let n=e.ll.x<t.ll.x?t.ll.x:e.ll.x,r=e.ur.x<t.ur.x?e.ur.x:t.ur.x,i=e.ll.y<t.ll.y?t.ll.y:e.ll.y,a=e.ur.y<t.ur.y?e.ur.y:t.ur.y;return{ll:{x:n,y:i},ur:{x:r,y:a}}},_=2**-52;_===void 0&&(_=2**-52);let v=_*_,y=(e,t)=>{if(-_<e&&e<_&&-_<t&&t<_)return 0;let n=e-t;return n*n<v*e*t?0:e<t?-1:1};class b{constructor(){this.reset()}reset(){this.xRounder=new x,this.yRounder=new x}round(e,t){return{x:this.xRounder.round(e),y:this.yRounder.round(t)}}}class x{constructor(){this.tree=new c,this.round(0)}round(e){let t=this.tree.add(e),n=this.tree.prev(t);if(n!==null&&y(t.key,n.key)===0)return this.tree.remove(e),n.key;let r=this.tree.next(t);return r!==null&&y(t.key,r.key)===0?(this.tree.remove(e),r.key):e}}let S=new b,C=134217729;function w(e,t,n,r,i){let a,o,s,c,l=t[0],u=r[0],d=0,f=0;u>l==u>-l?(a=l,l=t[++d]):(a=u,u=r[++f]);let p=0;if(d<e&&f<n)for(u>l==u>-l?(o=l+a,s=a-(o-l),l=t[++d]):(o=u+a,s=a-(o-u),u=r[++f]),a=o,s!==0&&(i[p++]=s);d<e&&f<n;)u>l==u>-l?(o=a+l,c=o-a,s=a-(o-c)+(l-c),l=t[++d]):(o=a+u,c=o-a,s=a-(o-c)+(u-c),u=r[++f]),a=o,s!==0&&(i[p++]=s);for(;d<e;)o=a+l,c=o-a,s=a-(o-c)+(l-c),l=t[++d],a=o,s!==0&&(i[p++]=s);for(;f<n;)o=a+u,c=o-a,s=a-(o-c)+(u-c),u=r[++f],a=o,s!==0&&(i[p++]=s);return(a!==0||p===0)&&(i[p++]=a),p}function ee(e,t){let n=t[0];for(let r=1;r<e;r++)n+=t[r];return n}function T(e){return new Float64Array(e)}let E=T(4),D=T(8),te=T(12),ne=T(16),O=T(4);function k(e,t,n,r,i,a,o){let s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,T,k,A=e-i,j=n-i,M=t-a,N=r-a;b=A*N,f=C*A,p=f-(f-A),m=A-p,f=C*N,h=f-(f-N),g=N-h,x=m*g-(b-p*h-m*h-p*g),S=M*j,f=C*M,p=f-(f-M),m=M-p,f=C*j,h=f-(f-j),g=j-h,T=m*g-(S-p*h-m*h-p*g),_=x-T,d=x-_,E[0]=x-(_+d)+(d-T),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,E[1]=y-(_+d)+(d-S),k=v+_,d=k-v,E[2]=v-(k-d)+(_-d),E[3]=k;let P=ee(4,E),re=22204460492503146e-32*o;if(P>=re||-P>=re||(d=e-A,s=e-(A+d)+(d-i),d=n-j,l=n-(j+d)+(d-i),d=t-M,c=t-(M+d)+(d-a),d=r-N,u=r-(N+d)+(d-a),s===0&&c===0&&l===0&&u===0)||(re=11093356479670487e-47*o+33306690738754706e-32*Math.abs(P),P+=A*u+N*s-(M*l+j*c),P>=re||-P>=re))return P;b=s*N,f=C*s,p=f-(f-s),m=s-p,f=C*N,h=f-(f-N),g=N-h,x=m*g-(b-p*h-m*h-p*g),S=c*j,f=C*c,p=f-(f-c),m=c-p,f=C*j,h=f-(f-j),g=j-h,T=m*g-(S-p*h-m*h-p*g),_=x-T,d=x-_,O[0]=x-(_+d)+(d-T),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,O[1]=y-(_+d)+(d-S),k=v+_,d=k-v,O[2]=v-(k-d)+(_-d),O[3]=k;let ie=w(4,E,4,O,D);b=A*u,f=C*A,p=f-(f-A),m=A-p,f=C*u,h=f-(f-u),g=u-h,x=m*g-(b-p*h-m*h-p*g),S=M*l,f=C*M,p=f-(f-M),m=M-p,f=C*l,h=f-(f-l),g=l-h,T=m*g-(S-p*h-m*h-p*g),_=x-T,d=x-_,O[0]=x-(_+d)+(d-T),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,O[1]=y-(_+d)+(d-S),k=v+_,d=k-v,O[2]=v-(k-d)+(_-d),O[3]=k;let ae=w(ie,D,4,O,te);b=s*u,f=C*s,p=f-(f-s),m=s-p,f=C*u,h=f-(f-u),g=u-h,x=m*g-(b-p*h-m*h-p*g),S=c*l,f=C*c,p=f-(f-c),m=c-p,f=C*l,h=f-(f-l),g=l-h,T=m*g-(S-p*h-m*h-p*g),_=x-T,d=x-_,O[0]=x-(_+d)+(d-T),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,O[1]=y-(_+d)+(d-S),k=v+_,d=k-v,O[2]=v-(k-d)+(_-d),O[3]=k;let oe=w(ae,te,4,O,ne);return ne[oe-1]}function A(e,t,n,r,i,a){let o=(t-a)*(n-i),s=(e-i)*(r-a),c=o-s,l=Math.abs(o+s);return Math.abs(c)>=33306690738754716e-32*l?c:-k(e,t,n,r,i,a,l)}let j=(e,t)=>e.x*t.y-e.y*t.x,M=(e,t)=>e.x*t.x+e.y*t.y,N=(e,t,n)=>{let r=A(e.x,e.y,t.x,t.y,n.x,n.y);return r>0?-1:+(r<0)},P=e=>Math.sqrt(M(e,e)),re=(e,t,n)=>{let r={x:t.x-e.x,y:t.y-e.y},i={x:n.x-e.x,y:n.y-e.y};return j(i,r)/P(i)/P(r)},ie=(e,t,n)=>{let r={x:t.x-e.x,y:t.y-e.y},i={x:n.x-e.x,y:n.y-e.y};return M(i,r)/P(i)/P(r)},ae=(e,t,n)=>t.y===0?null:{x:e.x+t.x/t.y*(n-e.y),y:n},oe=(e,t,n)=>t.x===0?null:{x:n,y:e.y+t.y/t.x*(n-e.x)},se=(e,t,n,r)=>{if(t.x===0)return oe(n,r,e.x);if(r.x===0)return oe(e,t,n.x);if(t.y===0)return ae(n,r,e.y);if(r.y===0)return ae(e,t,n.y);let i=j(t,r);if(i==0)return null;let a={x:n.x-e.x,y:n.y-e.y},o=j(a,t)/i,s=j(a,r)/i,c=e.x+s*t.x,l=n.x+o*r.x,u=e.y+s*t.y,d=n.y+o*r.y;return{x:(c+l)/2,y:(u+d)/2}};class F{static compare(e,t){let n=F.comparePoints(e.point,t.point);return n===0?(e.point!==t.point&&e.link(t),e.isLeft===t.isLeft?I.compare(e.segment,t.segment):e.isLeft?1:-1):n}static comparePoints(e,t){return e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:+(e.y>t.y)}constructor(e,t){e.events===void 0?e.events=[this]:e.events.push(this),this.point=e,this.isLeft=t}link(e){if(e.point===this.point)throw Error(`Tried to link already linked events`);let t=e.point.events;for(let e=0,n=t.length;e<n;e++){let n=t[e];this.point.events.push(n),n.point=this.point}this.checkForConsuming()}checkForConsuming(){let e=this.point.events.length;for(let t=0;t<e;t++){let n=this.point.events[t];if(n.segment.consumedBy===void 0)for(let r=t+1;r<e;r++){let e=this.point.events[r];e.consumedBy===void 0&&n.otherSE.point.events===e.otherSE.point.events&&n.segment.consume(e.segment)}}}getAvailableLinkedEvents(){let e=[];for(let t=0,n=this.point.events.length;t<n;t++){let n=this.point.events[t];n!==this&&!n.segment.ringOut&&n.segment.isInResult()&&e.push(n)}return e}getLeftmostComparator(e){let t=new Map,n=n=>{let r=n.otherSE;t.set(n,{sine:re(this.point,e.point,r.point),cosine:ie(this.point,e.point,r.point)})};return(e,r)=>{t.has(e)||n(e),t.has(r)||n(r);let{sine:i,cosine:a}=t.get(e),{sine:o,cosine:s}=t.get(r);return i>=0&&o>=0?a<s?1:a>s?-1:0:i<0&&o<0?a<s?-1:+(a>s):o<i?-1:+(o>i)}}}let ce=0;class I{static compare(e,t){let n=e.leftSE.point.x,r=t.leftSE.point.x,i=e.rightSE.point.x,a=t.rightSE.point.x;if(a<n)return 1;if(i<r)return-1;let o=e.leftSE.point.y,s=t.leftSE.point.y,c=e.rightSE.point.y,l=t.rightSE.point.y;if(n<r){if(s<o&&s<c)return 1;if(s>o&&s>c)return-1;let n=e.comparePoint(t.leftSE.point);if(n<0)return 1;if(n>0)return-1;let r=t.comparePoint(e.rightSE.point);return r===0?-1:r}if(n>r){if(o<s&&o<l)return-1;if(o>s&&o>l)return 1;let n=t.comparePoint(e.leftSE.point);if(n!==0)return n;let r=e.comparePoint(t.rightSE.point);return r<0?1:r>0?-1:1}if(o<s)return-1;if(o>s)return 1;if(i<a){let n=t.comparePoint(e.rightSE.point);if(n!==0)return n}if(i>a){let n=e.comparePoint(t.rightSE.point);if(n<0)return 1;if(n>0)return-1}if(i!==a){let e=c-o,t=i-n,u=l-s,d=a-r;if(e>t&&u<d)return 1;if(e<t&&u>d)return-1}return i>a?1:i<a||c<l?-1:c>l?1:e.id<t.id?-1:+(e.id>t.id)}constructor(e,t,n,r){this.id=++ce,this.leftSE=e,e.segment=this,e.otherSE=t,this.rightSE=t,t.segment=this,t.otherSE=e,this.rings=n,this.windings=r}static fromRing(e,t,n){let r,i,a,o=F.comparePoints(e,t);if(o<0)r=e,i=t,a=1;else if(o>0)r=t,i=e,a=-1;else throw Error(`Tried to create degenerate segment at [${e.x}, ${e.y}]`);let s=new F(r,!0),c=new F(i,!1);return new I(s,c,[n],[a])}replaceRightSE(e){this.rightSE=e,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let e=this.leftSE.point.y,t=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:e<t?e:t},ur:{x:this.rightSE.point.x,y:e>t?e:t}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(e){return e.x===this.leftSE.point.x&&e.y===this.leftSE.point.y||e.x===this.rightSE.point.x&&e.y===this.rightSE.point.y}comparePoint(e){if(this.isAnEndpoint(e))return 0;let t=this.leftSE.point,n=this.rightSE.point,r=this.vector();if(t.x===n.x)return e.x===t.x?0:e.x<t.x?1:-1;let i=(e.y-t.y)/r.y,a=t.x+i*r.x;if(e.x===a)return 0;let o=(e.x-t.x)/r.x,s=t.y+o*r.y;return e.y===s?0:e.y<s?-1:1}getIntersection(e){let t=this.bbox(),n=e.bbox(),r=g(t,n);if(r===null)return null;let i=this.leftSE.point,a=this.rightSE.point,o=e.leftSE.point,s=e.rightSE.point,c=h(t,o)&&this.comparePoint(o)===0,l=h(n,i)&&e.comparePoint(i)===0,u=h(t,s)&&this.comparePoint(s)===0,d=h(n,a)&&e.comparePoint(a)===0;if(l&&c)return d&&!u?a:!d&&u?s:null;if(l)return u&&i.x===s.x&&i.y===s.y?null:i;if(c)return d&&a.x===o.x&&a.y===o.y?null:o;if(d&&u)return null;if(d)return a;if(u)return s;let f=se(i,this.vector(),o,e.vector());return f===null||!h(r,f)?null:S.round(f.x,f.y)}split(e){let t=[],n=e.events!==void 0,r=new F(e,!0),i=new F(e,!1),a=this.rightSE;this.replaceRightSE(i),t.push(i),t.push(r);let o=new I(r,a,this.rings.slice(),this.windings.slice());return F.comparePoints(o.leftSE.point,o.rightSE.point)>0&&o.swapEvents(),F.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),n&&(r.checkForConsuming(),i.checkForConsuming()),t}swapEvents(){let e=this.rightSE;this.rightSE=this.leftSE,this.leftSE=e,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let e=0,t=this.windings.length;e<t;e++)this.windings[e]*=-1}consume(e){let t=this,n=e;for(;t.consumedBy;)t=t.consumedBy;for(;n.consumedBy;)n=n.consumedBy;let r=I.compare(t,n);if(r!==0){if(r>0){let e=t;t=n,n=e}if(t.prev===n){let e=t;t=n,n=e}for(let e=0,r=n.rings.length;e<r;e++){let r=n.rings[e],i=n.windings[e],a=t.rings.indexOf(r);a===-1?(t.rings.push(r),t.windings.push(i)):t.windings[a]+=i}n.rings=null,n.windings=null,n.consumedBy=t,n.leftSE.consumedBy=t.leftSE,n.rightSE.consumedBy=t.rightSE}}prevInResult(){return this._prevInResult===void 0&&(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null),this._prevInResult}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let e=this.prev.consumedBy||this.prev;this._beforeState=e.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let e=this.beforeState();this._afterState={rings:e.rings.slice(0),windings:e.windings.slice(0),multiPolys:[]};let t=this._afterState.rings,n=this._afterState.windings,r=this._afterState.multiPolys;for(let e=0,r=this.rings.length;e<r;e++){let r=this.rings[e],i=this.windings[e],a=t.indexOf(r);a===-1?(t.push(r),n.push(i)):n[a]+=i}let i=[],a=[];for(let e=0,r=t.length;e<r;e++){if(n[e]===0)continue;let r=t[e],o=r.poly;if(a.indexOf(o)===-1)if(r.isExterior)i.push(o);else{a.indexOf(o)===-1&&a.push(o);let e=i.indexOf(r.poly);e!==-1&&i.splice(e,1)}}for(let e=0,t=i.length;e<t;e++){let t=i[e].multiPoly;r.indexOf(t)===-1&&r.push(t)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let e=this.beforeState().multiPolys,t=this.afterState().multiPolys;switch(ye.type){case`union`:{let n=e.length===0,r=t.length===0;this._isInResult=n!==r;break}case`intersection`:{let n,r;e.length<t.length?(n=e.length,r=t.length):(n=t.length,r=e.length),this._isInResult=r===ye.numMultiPolys&&n<r;break}case`xor`:{let n=Math.abs(e.length-t.length);this._isInResult=n%2==1;break}case`difference`:{let n=e=>e.length===1&&e[0].isSubject;this._isInResult=n(e)!==n(t);break}default:throw Error(`Unrecognized operation type found ${ye.type}`)}return this._isInResult}}class le{constructor(e,t,n){if(!Array.isArray(e)||e.length===0||(this.poly=t,this.isExterior=n,this.segments=[],typeof e[0][0]!=`number`||typeof e[0][1]!=`number`))throw Error(`Input geometry is not a valid Polygon or MultiPolygon`);let r=S.round(e[0][0],e[0][1]);this.bbox={ll:{x:r.x,y:r.y},ur:{x:r.x,y:r.y}};let i=r;for(let t=1,n=e.length;t<n;t++){if(typeof e[t][0]!=`number`||typeof e[t][1]!=`number`)throw Error(`Input geometry is not a valid Polygon or MultiPolygon`);let n=S.round(e[t][0],e[t][1]);n.x===i.x&&n.y===i.y||(this.segments.push(I.fromRing(i,n,this)),n.x<this.bbox.ll.x&&(this.bbox.ll.x=n.x),n.y<this.bbox.ll.y&&(this.bbox.ll.y=n.y),n.x>this.bbox.ur.x&&(this.bbox.ur.x=n.x),n.y>this.bbox.ur.y&&(this.bbox.ur.y=n.y),i=n)}(r.x!==i.x||r.y!==i.y)&&this.segments.push(I.fromRing(i,r,this))}getSweepEvents(){let e=[];for(let t=0,n=this.segments.length;t<n;t++){let n=this.segments[t];e.push(n.leftSE),e.push(n.rightSE)}return e}}class ue{constructor(e,t){if(!Array.isArray(e))throw Error(`Input geometry is not a valid Polygon or MultiPolygon`);this.exteriorRing=new le(e[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let t=1,n=e.length;t<n;t++){let n=new le(e[t],this,!1);n.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=n.bbox.ll.x),n.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=n.bbox.ll.y),n.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=n.bbox.ur.x),n.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=n.bbox.ur.y),this.interiorRings.push(n)}this.multiPoly=t}getSweepEvents(){let e=this.exteriorRing.getSweepEvents();for(let t=0,n=this.interiorRings.length;t<n;t++){let n=this.interiorRings[t].getSweepEvents();for(let t=0,r=n.length;t<r;t++)e.push(n[t])}return e}}class de{constructor(e,t){if(!Array.isArray(e))throw Error(`Input geometry is not a valid Polygon or MultiPolygon`);try{typeof e[0][0][0]==`number`&&(e=[e])}catch{}this.polys=[],this.bbox={ll:{x:1/0,y:1/0},ur:{x:-1/0,y:-1/0}};for(let t=0,n=e.length;t<n;t++){let n=new ue(e[t],this);n.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=n.bbox.ll.x),n.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=n.bbox.ll.y),n.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=n.bbox.ur.x),n.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=n.bbox.ur.y),this.polys.push(n)}this.isSubject=t}getSweepEvents(){let e=[];for(let t=0,n=this.polys.length;t<n;t++){let n=this.polys[t].getSweepEvents();for(let t=0,r=n.length;t<r;t++)e.push(n[t])}return e}}class fe{static factory(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];if(!r.isInResult()||r.ringOut)continue;let i=null,a=r.leftSE,o=r.rightSE,s=[a],c=a.point,l=[];for(;i=a,a=o,s.push(a),a.point!==c;)for(;;){let e=a.getAvailableLinkedEvents();if(e.length===0){let e=s[0].point,t=s[s.length-1].point;throw Error(`Unable to complete output ring starting at [${e.x}, ${e.y}]. Last matching segment found ends at [${t.x}, ${t.y}].`)}if(e.length===1){o=e[0].otherSE;break}let n=null;for(let e=0,t=l.length;e<t;e++)if(l[e].point===a.point){n=e;break}if(n!==null){let e=l.splice(n)[0],r=s.splice(e.index);r.unshift(r[0].otherSE),t.push(new fe(r.reverse()));continue}l.push({index:s.length,point:a.point});let r=a.getLeftmostComparator(i);o=e.sort(r)[0].otherSE;break}t.push(new fe(s))}return t}constructor(e){this.events=e;for(let t=0,n=e.length;t<n;t++)e[t].segment.ringOut=this;this.poly=null}getGeom(){let e=this.events[0].point,t=[e];for(let n=1,r=this.events.length-1;n<r;n++){let r=this.events[n].point,i=this.events[n+1].point;N(r,e,i)!==0&&(t.push(r),e=r)}if(t.length===1)return null;let n=t[0],r=t[1];N(n,e,r)===0&&t.shift(),t.push(t[0]);let i=this.isExteriorRing()?1:-1,a=this.isExteriorRing()?0:t.length-1,o=this.isExteriorRing()?t.length:-1,s=[];for(let e=a;e!=o;e+=i)s.push([t[e].x,t[e].y]);return s}isExteriorRing(){if(this._isExteriorRing===void 0){let e=this.enclosingRing();this._isExteriorRing=!e||!e.isExteriorRing()}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let e=this.events[0];for(let t=1,n=this.events.length;t<n;t++){let n=this.events[t];F.compare(e,n)>0&&(e=n)}let t=e.segment.prevInResult(),n=t?t.prevInResult():null;for(;;){if(!t)return null;if(!n)return t.ringOut;if(n.ringOut!==t.ringOut)return n.ringOut.enclosingRing()===t.ringOut?t.ringOut.enclosingRing():t.ringOut;t=n.prevInResult(),n=t?t.prevInResult():null}}}class pe{constructor(e){this.exteriorRing=e,e.poly=this,this.interiorRings=[]}addInterior(e){this.interiorRings.push(e),e.poly=this}getGeom(){let e=[this.exteriorRing.getGeom()];if(e[0]===null)return null;for(let t=0,n=this.interiorRings.length;t<n;t++){let n=this.interiorRings[t].getGeom();n!==null&&e.push(n)}return e}}class me{constructor(e){this.rings=e,this.polys=this._composePolys(e)}getGeom(){let e=[];for(let t=0,n=this.polys.length;t<n;t++){let n=this.polys[t].getGeom();n!==null&&e.push(n)}return e}_composePolys(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];if(!r.poly)if(r.isExteriorRing())t.push(new pe(r));else{let e=r.enclosingRing();e.poly||t.push(new pe(e)),e.poly.addInterior(r)}}return t}}class he{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:I.compare;this.queue=e,this.tree=new c(t),this.segments=[]}process(e){let t=e.segment,n=[];if(e.consumedBy)return e.isLeft?this.queue.remove(e.otherSE):this.tree.remove(t),n;let r=e.isLeft?this.tree.add(t):this.tree.find(t);if(!r)throw Error(`Unable to find segment #${t.id} [${t.leftSE.point.x}, ${t.leftSE.point.y}] -> [${t.rightSE.point.x}, ${t.rightSE.point.y}] in SweepLine tree.`);let i=r,a=r,o,s;for(;o===void 0;)i=this.tree.prev(i),i===null?o=null:i.key.consumedBy===void 0&&(o=i.key);for(;s===void 0;)a=this.tree.next(a),a===null?s=null:a.key.consumedBy===void 0&&(s=a.key);if(e.isLeft){let r=null;if(o){let e=o.getIntersection(t);if(e!==null&&(t.isAnEndpoint(e)||(r=e),!o.isAnEndpoint(e))){let t=this._splitSafely(o,e);for(let e=0,r=t.length;e<r;e++)n.push(t[e])}}let i=null;if(s){let e=s.getIntersection(t);if(e!==null&&(t.isAnEndpoint(e)||(i=e),!s.isAnEndpoint(e))){let t=this._splitSafely(s,e);for(let e=0,r=t.length;e<r;e++)n.push(t[e])}}if(r!==null||i!==null){let e=null;e=r===null?i:i===null||F.comparePoints(r,i)<=0?r:i,this.queue.remove(t.rightSE),n.push(t.rightSE);let a=t.split(e);for(let e=0,t=a.length;e<t;e++)n.push(a[e])}n.length>0?(this.tree.remove(t),n.push(e)):(this.segments.push(t),t.prev=o)}else{if(o&&s){let e=o.getIntersection(s);if(e!==null){if(!o.isAnEndpoint(e)){let t=this._splitSafely(o,e);for(let e=0,r=t.length;e<r;e++)n.push(t[e])}if(!s.isAnEndpoint(e)){let t=this._splitSafely(s,e);for(let e=0,r=t.length;e<r;e++)n.push(t[e])}}}this.tree.remove(t)}return n}_splitSafely(e,t){this.tree.remove(e);let n=e.rightSE;this.queue.remove(n);let r=e.split(t);return r.push(n),e.consumedBy===void 0&&this.tree.add(e),r}}let ge=typeof process<`u`&&{}.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,_e=typeof process<`u`&&{}.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class ve{run(e,t,n){ye.type=e,S.reset();let r=[new de(t,!0)];for(let e=0,t=n.length;e<t;e++)r.push(new de(n[e],!1));if(ye.numMultiPolys=r.length,ye.type===`difference`){let e=r[0],t=1;for(;t<r.length;)g(r[t].bbox,e.bbox)===null?r.splice(t,1):t++}if(ye.type===`intersection`)for(let e=0,t=r.length;e<t;e++){let t=r[e];for(let n=e+1,i=r.length;n<i;n++)if(g(t.bbox,r[n].bbox)===null)return[]}let i=new c(F.compare);for(let e=0,t=r.length;e<t;e++){let t=r[e].getSweepEvents();for(let e=0,n=t.length;e<n;e++)if(i.insert(t[e]),i.size>ge)throw Error(`Infinite loop when putting segment endpoints in a priority queue (queue size too big).`)}let a=new he(i),o=i.size,s=i.pop();for(;s;){let e=s.key;if(i.size===o){let t=e.segment;throw Error(`Unable to pop() ${e.isLeft?`left`:`right`} SweepEvent [${e.point.x}, ${e.point.y}] from segment #${t.id} [${t.leftSE.point.x}, ${t.leftSE.point.y}] -> [${t.rightSE.point.x}, ${t.rightSE.point.y}] from queue.`)}if(i.size>ge)throw Error(`Infinite loop when passing sweep line over endpoints (queue size too big).`);if(a.segments.length>_e)throw Error(`Infinite loop when passing sweep line over endpoints (too many sweep line segments).`);let t=a.process(e);for(let e=0,n=t.length;e<n;e++){let n=t[e];n.consumedBy===void 0&&i.insert(n)}o=i.size,s=i.pop()}S.reset();let l=fe.factory(a.segments);return new me(l).getGeom()}}let ye=new ve;return{union:function(e){var t=[...arguments].slice(1);return ye.run(`union`,e,t)},intersection:function(e){var t=[...arguments].slice(1);return ye.run(`intersection`,e,t)},xor:function(e){var t=[...arguments].slice(1);return ye.run(`xor`,e,t)},difference:function(e){var t=[...arguments].slice(1);return ye.run(`difference`,e,t)}}}))}))(),1),as=.001,os=.45,ss=.85,cs=.1,ls=1e-6,us=.001,ds=(e,t)=>[e[0]-t[0],e[1]-t[1]],fs=(e,t,n=1)=>[e[0]+t[0]*n,e[1]+t[1]*n],ps=(e,t)=>e[0]*t[0]+e[1]*t[1],ms=(e,t)=>e[0]*t[1]-e[1]*t[0],hs=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1]),gs=e=>{let t=Math.hypot(e[0],e[1]);return t>1e-12?[e[0]/t,e[1]/t]:[0,0]},_s=e=>[...new Set(e)],vs=e=>Math.round(e/as)*as,ys=e=>[vs(e[0]),vs(e[1])],bs=(e,t,n)=>{let r=ds(n,t),i=Math.hypot(...r);return i<1e-12?hs(e,t):Math.abs(ms(r,ds(e,t)))/i},xs=(e,t,n,r)=>{let i=gs(ds(t,e));if(hs(e,t)<=.001||hs(n,r)<=.001||bs(n,e,t)>.001||bs(r,e,t)>.001)return!1;let a=[ps(ds(n,e),i),ps(ds(r,e),i)].sort((e,t)=>e-t);return Math.min(hs(e,t),a[1])-Math.max(0,a[0])>as};function Ss(e){return e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n[0]*i[1]-i[0]*n[1]},0)/2}function Cs(e){return String(Math.round(e*1e3))}function ws(e,t=0){let n=Math.atan2(e[1],e[0])*180/Math.PI,r=((n+t+180)%360+360)%360-180;return(r>90||r<=-90)&&(n+=180),n}function Ts(e,t){let n=[],r=Object.values(e).filter(n=>n.type===`wall`&&Wa(n.id,e).levelId===t),i=To(r).filter(e=>e.validation.valid&&e.footprint.length>=3),a={exteriorComponentCount:0,exteriorRingCount:0,interiorRingCount:0,exteriorRunCount:0,innerChainCount:0,innerSegmentCount:0,overallDimensionCount:0,exteriorDoorCount:0,exteriorWindowCount:0,excludedInteriorOpeningCount:0,curvedExteriorRunCount:0,unresolvedRunCount:0,chainSumMismatchCount:0,dimensionTextUnresolvedCollisionCount:0};if(!i.length)return{levelId:t,rings:[],runs:[],dimensions:[],diagnostics:[{severity:`warning`,code:`no_exterior_contour`,message:`当前 Level 没有可用于外围尺寸的有效墙体 footprint`,sourcePath:`nodes`}],summary:a};let o;try{let[e,...t]=i.map(e=>[[e.footprint.map(e=>ys([e.x,e.y]))]]);o=is.default.union(e,...t)}catch{return{levelId:t,rings:[],runs:[],dimensions:[],diagnostics:[{severity:`error`,code:`exterior_union_failed`,message:`墙体 physical footprint polygon union 失败`,sourcePath:`derived.exterior-dimensions`}],summary:a}}if(!Array.isArray(o)||!o.length)return{levelId:t,rings:[],runs:[],dimensions:[],diagnostics:[{severity:`warning`,code:`no_exterior_contour`,message:`Polygon union 未生成外轮廓`,sourcePath:`derived.exterior-dimensions`}],summary:a};let s=[],c=[],l=0,u=0,d=0;o.forEach((e,a)=>{let o=`component-${a+1}`;l+=Math.max(0,e.length-1);let f=e[0],p=f.slice(0,f.length>1&&hs(f[0],f[f.length-1])<=.001?-1:void 0).map(e=>[e[0],e[1]]);if(p.length<3||Math.abs(Ss(p))<1e-9){n.push({severity:`error`,code:`invalid_exterior_ring`,message:`无效外围 ring：${o}`,sourcePath:`derived.exterior-dimensions`});return}let m=Ss(p),h=p.map((e,t)=>{let n=p[(t+1)%p.length];return{start:e,end:n,sourceWallIds:i.filter(t=>{let r=t.footprint.map(e=>[e.x,e.y]);return r.some((t,i)=>xs(e,n,t,r[(i+1)%r.length]))}).map(e=>e.wallId)}}),g=_s(h.flatMap(e=>e.sourceWallIds));s.push({componentId:o,ringId:`${o}-outer`,points:p,signedArea:m,winding:m>0?`counterclockwise`:`clockwise`,sourceWallIds:g});let _=h.map(e=>({...e,direction:gs(ds(e.end,e.start)),curved:e.sourceWallIds.some(e=>H(r.find(t=>t.id===e))),unresolved:e.sourceWallIds.length===0,boundarySegments:[e]})),v=[];for(let e of _){let t=v[v.length-1];t&&!t.unresolved&&!e.unresolved&&t.curved===e.curved&&Math.abs(ms(t.direction,e.direction))<=ls&&ps(t.direction,e.direction)>0?(t.end=e.end,t.sourceWallIds=_s([...t.sourceWallIds,...e.sourceWallIds]),t.boundarySegments.push(...e.boundarySegments)):v.push({...e,sourceWallIds:[...e.sourceWallIds]})}if(v.length>1){let e=v[0],t=v[v.length-1];!e.unresolved&&!t.unresolved&&e.curved===t.curved&&Math.abs(ms(t.direction,e.direction))<=ls&&ps(t.direction,e.direction)>0&&(e.start=t.start,e.sourceWallIds=_s([...t.sourceWallIds,...e.sourceWallIds]),e.boundarySegments=[...t.boundarySegments,...e.boundarySegments],v.pop())}v.forEach((e,i)=>{let a=`${o}-run-${i+1}`,s=hs(e.start,e.end),l=gs(ds(e.end,e.start)),f=m>0?[l[1],-l[0]]:[-l[1],l[0]];if(e.unresolved){d+=1,n.push({severity:`error`,code:`ambiguous_exterior_wall_mapping`,message:`外围边界无法映射到来源 Wall：${a}`,sourcePath:`derived.exterior-dimensions`});return}if(e.curved){u+=1;let t=e.sourceWallIds.filter(e=>H(r.find(t=>t.id===e)));for(let e of t){let t=U(r.find(t=>t.id===e));n.push({severity:`warning`,code:`unsupported_curved_exterior_dimension`,message:`曲墙外围段本轮不生成直线尺寸：${e}; radius=${t?.radius??`unknown`}; sweep=${t?.delta??`unknown`}`,nodeId:e,sourcePath:`nodes.${e}.curveOffset`})}return}s>.001&&c.push({id:a,levelId:t,componentId:o,start:e.start,end:e.end,direction:l,outwardNormal:f,sourceWallIds:e.sourceWallIds,boundarySegments:e.boundarySegments,lengthMeters:s})})}),o.length>1&&n.push({severity:`info`,code:`multiple_exterior_components`,message:`检测到 ${o.length} 个互不连接的外围组件`,sourcePath:`derived.exterior-dimensions`});let f=[],p=new Set,m=new Set,h=0,g=0;for(let i of c){let a=[Es(i,0,`exterior-run-start`,i.id),Es(i,i.lengthMeters,`exterior-run-end`,i.id)],o=i.sourceWallIds.map(e=>r.find(t=>t.id===e)).filter(e=>!!e).filter(e=>Math.abs(ms(gs([e.end[0]-e.start[0],e.end[1]-e.start[1]]),i.direction))<=ls);if(o.length>1)for(let e of o)for(let t of[e.start,e.end]){let n=ps(ds([t[0],t[1]],i.start),i.direction);n>.001&&n<i.lengthMeters-.001&&bs([t[0],t[1]],i.start,i.end)<=Math.max((e.thickness??.1)/2+.001,.001)&&a.push(Es(i,n,`exterior-wall-junction`,e.id))}let s=Object.values(e).filter(n=>(n.type===`door`||n.type===`window`)&&Wa(n.id,e).levelId===t);for(let e of s){let t=e.wallId??e.parentId;if(!i.sourceWallIds.includes(t))continue;let o=r.find(e=>e.id===t),s=Number(e.width),c=Array.isArray(e.position)?Number(e.position[0]):NaN;if(!o||!Number.isFinite(s)||s<=0||!Number.isFinite(c)){n.push({severity:`error`,code:`invalid_opening_span_for_dimension`,message:`无效 ${e.type} opening span`,nodeId:e.id,sourcePath:`nodes.${e.id}`});continue}let l=gs([o.end[0]-o.start[0],o.end[1]-o.start[1]]),u=[o.start[0]+l[0]*c,o.start[1]+l[1]*c],d=fs(u,l,-s/2),f=fs(u,l,s/2),h=[ps(ds(d,i.start),i.direction),ps(ds(f,i.start),i.direction)].sort((e,t)=>e-t);if(h[0]<-.001||h[1]>i.lengthMeters+.001||Math.abs(h[1]-h[0]-s)>us){n.push({severity:`warning`,code:`opening_not_on_exterior_run`,message:`${e.type} opening span 不在外墙 run 有效范围`,nodeId:e.id,sourcePath:`nodes.${e.id}`});continue}let g=e.type;a.push(Es(i,Math.max(0,h[0]),`${g}-left`,e.id),Es(i,Math.min(i.lengthMeters,h[1]),`${g}-right`,e.id)),g===`door`?p.add(e.id):m.add(e.id)}let c=a.sort((e,t)=>e.scalarOnRun-t.scalarOnRun),l=[];for(let e of c){let t=l[l.length-1];if(t&&Math.abs(e.scalarOnRun-t.scalarOnRun)<=.001){e.sourceNodeId!==t.sourceNodeId&&n.push({severity:`info`,code:`duplicate_dimension_witness`,message:`尺寸基准点按 ${as}m 容差去重`,sourcePath:e.sourcePath});continue}l.push(e)}if(l.length>2){for(let e=0;e<l.length-1;e+=1){let t=l[e],r=l[e+1];if(r.scalarOnRun-t.scalarOnRun<=.001){n.push({severity:`error`,code:`invalid_dimension_segment`,message:`零长度外围尺寸段：${i.id}`,sourcePath:`derived.exterior-dimensions`});continue}f.push(Ds(i,t,r,`inner-chain`,e+1))}let e=f.filter(e=>e.runId===i.id&&e.dimensionLayer===`inner-chain`).reduce((e,t)=>e+t.valueMeters,0);Math.abs(e-i.lengthMeters)>us&&(g+=1,n.push({severity:`error`,code:`dimension_chain_sum_mismatch`,message:`${i.id} 分段和 ${e}m 不等于总长 ${i.lengthMeters}m`,sourcePath:`derived.exterior-dimensions`}))}f.push(Ds(i,l[0],l[l.length-1],`overall`,1))}let _=new Set([...p,...m]);h=Object.values(e).filter(n=>(n.type===`door`||n.type===`window`)&&Wa(n.id,e).levelId===t&&!_.has(n.id)).length;let v=0;for(let e of new Set(f.filter(e=>e.dimensionLayer===`inner-chain`).map(e=>e.chainId))){let t=f.filter(t=>t.chainId===e).filter(e=>e.valueMeters<=Math.max(.24,e.displayMillimeters.length*.105)+.16).map(e=>({item:e,start:e.sourceEnd.scalarOnRun+.14,end:e.sourceEnd.scalarOnRun+.14+Math.max(.24,e.displayMillimeters.length*.105)})).sort((e,t)=>e.start-t.start);for(let e=1;e<t.length;e+=1)t[e].start<t[e-1].end-.001&&(v+=1,n.push({severity:`warning`,code:`dimension_text_collision_unresolved`,message:`短尺寸外置文字仍有碰撞风险：${t[e].item.id}`,sourcePath:`derived.exterior-dimensions`}))}return{levelId:t,rings:s,runs:c,dimensions:f,diagnostics:n,summary:{exteriorComponentCount:o.length,exteriorRingCount:s.length,interiorRingCount:l,exteriorRunCount:c.length,innerChainCount:new Set(f.filter(e=>e.dimensionLayer===`inner-chain`).map(e=>e.chainId)).size,innerSegmentCount:f.filter(e=>e.dimensionLayer===`inner-chain`).length,overallDimensionCount:f.filter(e=>e.dimensionLayer===`overall`).length,exteriorDoorCount:p.size,exteriorWindowCount:m.size,excludedInteriorOpeningCount:h,curvedExteriorRunCount:u,unresolvedRunCount:d,chainSumMismatchCount:g,dimensionTextUnresolvedCollisionCount:v}}}function Es(e,t,n,r){return{id:`${e.id}-${n}-${r}-${t.toFixed(6)}`,point:fs(e.start,e.direction,t),scalarOnRun:t,sourceNodeId:r,sourceKind:n,sourcePath:r===e.id?`derived.exterior-run`:`nodes.${r}`}}function Ds(e,t,n,r,i){let a=Math.abs(n.scalarOnRun-t.scalarOnRun);return{id:`${e.id}-${r}-${i}`,chainId:`${e.id}-${r}`,levelId:e.levelId,componentId:e.componentId,runId:e.id,dimensionLayer:r,start:t.point,end:n.point,valueMeters:a,displayMillimeters:Cs(a),direction:e.direction,outwardNormal:e.outwardNormal,sourceStart:t,sourceEnd:n,sourceWallIds:e.sourceWallIds,sourceOpeningIds:_s([t,n].filter(e=>e.sourceKind.startsWith(`door`)||e.sourceKind.startsWith(`window`)).map(e=>e.sourceNodeId)),sourcePaths:_s([t.sourcePath,n.sourcePath]),method:`projected-world-distance`,unionAlgorithm:`polygon-clipping.union`}}var Os=e=>Math.abs(e[0])>=1-ls?`horizontal`:Math.abs(e[1])>=1-ls?`vertical`:`diagonal`,ks=e=>({minX:Math.min(...e.points.map(e=>e[0])),maxX:Math.max(...e.points.map(e=>e[0])),minY:Math.min(...e.points.map(e=>e[1])),maxY:Math.max(...e.points.map(e=>e[1]))}),As=(e,t)=>{let n=ks(t);return Os(e.direction)===`horizontal`?Math.abs(e.start[1]-(e.outwardNormal[1]<0?n.minY:n.maxY))<=as:Os(e.direction)===`vertical`&&Math.abs(e.start[0]-(e.outwardNormal[0]<0?n.minX:n.maxX))<=as};function js(e,t,n){let r=ks(t),i=n===`top`||n===`bottom`,a=n===`top`?[r.minX,r.minY]:n===`right`?[r.maxX,r.minY]:n===`bottom`?[r.maxX,r.maxY]:[r.minX,r.maxY],o=n===`top`?[r.maxX,r.minY]:n===`right`?[r.maxX,r.maxY]:n===`bottom`?[r.minX,r.maxY]:[r.minX,r.minY],s=gs(ds(o,a)),c=n===`top`?[0,-1]:n===`right`?[1,0]:n===`bottom`?[0,1]:[-1,0],l=i?r.maxX-r.minX:r.maxY-r.minY,u=`${t.componentId}-frame-${n}`,d={id:`${u}-start`,point:a,scalarOnRun:0,sourceNodeId:t.ringId,sourceKind:`exterior-run-start`,sourcePath:`derived.exterior-ring.bounds`},f={id:`${u}-end`,point:o,scalarOnRun:l,sourceNodeId:t.ringId,sourceKind:`exterior-run-end`,sourcePath:`derived.exterior-ring.bounds`};return{id:`${u}-overall`,chainId:`${u}-overall`,levelId:e.levelId,componentId:t.componentId,runId:u,dimensionLayer:`overall`,start:a,end:o,valueMeters:l,displayMillimeters:Cs(l),direction:s,outwardNormal:c,sourceStart:d,sourceEnd:f,sourceWallIds:t.sourceWallIds,sourceOpeningIds:[],sourcePaths:[`derived.exterior-ring.bounds`],method:`projected-world-distance`,unionAlgorithm:`polygon-clipping.union`}}function Ms(e){let t=e.dimensions.filter(t=>{if(t.dimensionLayer===`inner-chain`||Os(t.direction)===`diagonal`)return!0;let n=e.runs.find(e=>e.id===t.runId),r=e.rings.find(e=>e.componentId===t.componentId);return!n||!r||!As(n,r)});for(let n of e.rings){let r=e.runs.filter(e=>e.componentId===n.componentId),i=new Set;for(let e of r)As(e,n)&&(Os(e.direction)===`horizontal`&&i.add(e.outwardNormal[1]<0?`top`:`bottom`),Os(e.direction)===`vertical`&&i.add(e.outwardNormal[0]<0?`left`:`right`));for(let r of i)t.push(js(e,n,r))}return t}function Ns(e,t){let n=e.rings.find(e=>e.componentId===t.componentId),r=e.runs.find(e=>e.id===t.runId);if(!n||!r||!As(r,n)||t.dimensionLayer!==`inner-chain`||Os(t.direction)===`diagonal`)return{edgeStart:t.start,edgeEnd:t.end,faceStart:t.start,faceEnd:t.end};let i=ks(n);if(Os(t.direction)===`horizontal`){let e=t.outwardNormal[1]<0?i.minY:i.maxY;return{edgeStart:t.start,edgeEnd:t.end,faceStart:[t.start[0],e],faceEnd:[t.end[0],e]}}let a=t.outwardNormal[0]<0?i.minX:i.maxX;return{edgeStart:t.start,edgeEnd:t.end,faceStart:[a,t.start[1]],faceEnd:[a,t.end[1]]}}function Ps(e){return Ms(e).flatMap(t=>{let n=Ns(e,t),r=t.dimensionLayer===`inner-chain`?os:ss,i=fs(n.faceStart,t.outwardNormal,r),a=fs(n.faceEnd,t.outwardNormal,r),o=Math.max(.25,t.displayMillimeters.length*.055);return[n.edgeStart,n.edgeEnd,fs(i,t.outwardNormal,cs),fs(a,t.outwardNormal,cs),fs(i,t.direction,-o),fs(a,t.direction,o)].map(e=>({x:e[0],z:e[1]}))})}var Fs=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1]),Is=e=>{let t=Math.hypot(e[0],e[1]);return t>1e-12?[e[0]/t,e[1]/t]:[1,0]},Ls=(e,t,n)=>e.map((r,i)=>({start:r,end:e[(i+1)%e.length],sourceNodeId:t,sourceType:n})),Rs=(e,t)=>{let n=qa(e),r=Ya(e.id,t);if(!n||r.status!==`ok`)return[];let i=Za(r);return[[-n.width/2,-n.depth/2],[n.width/2,-n.depth/2],[n.width/2,n.depth/2],[-n.width/2,n.depth/2]].map(([e,t])=>[i.a*e+i.c*t+i.e,i.b*e+i.d*t+i.f])};function zs(e,t){let n=Object.values(e).filter(n=>Wa(n.id,e).levelId===t),r=[],i=To(n.filter(e=>e.type===`wall`));for(let e of i)e.validation.valid&&e.footprint.length>=3&&r.push(...Ls(e.footprint.map(e=>[e.x,e.y]),e.wallId,`wall`));for(let t of n){if(t.type===`item`){let n=Rs(t,e);n.length===4&&r.push(...Ls(n,t.id,`furniture`))}if(t.type===`shelf`&&Ao(t)){let n=No(t,e).map(e=>[e.x,e.z]);n.length===4&&r.push(...Ls(n,t.id,`shelf`))}}return r}var Bs=(e,t)=>{let n=t.end[0]-t.start[0],r=t.end[1]-t.start[1],i=n*n+r*r;if(i<=1e-18)return t.start;let a=Math.max(0,Math.min(1,((e[0]-t.start[0])*n+(e[1]-t.start[1])*r)/i));return[t.start[0]+n*a,t.start[1]+r*a]},Vs=(e,t)=>e===`wall`?t?`wall-corner`:`wall-edge`:e===`shelf`?t?`shelf-corner`:`shelf-edge`:t?`furniture-corner`:`furniture-edge`;function Hs(e,t,n){let r=null;for(let i of t)for(let t of[i.start,i.end]){let a=Fs(e,t);a<=n&&(!r||a<r.distanceMeters)&&(r={point:t,kind:Vs(i.sourceType,!0),sourceNodeId:i.sourceNodeId,distanceMeters:a})}if(r)return r;let i=null;for(let r of t){let t=Bs(e,r),a=Fs(e,t);a<=n&&(!i||a<i.distanceMeters)&&(i={point:t,kind:Vs(r.sourceType,!1),sourceNodeId:r.sourceNodeId,distanceMeters:a})}return i??{point:e,kind:`free`,distanceMeters:0}}var Us=(e,t)=>t?Us(t,e%t):e;function Ws(e,t){if(t===`millimeters`)return String(Math.round(e*1e3));let n=e<0?`−`:``,r=Math.round(Math.abs(e)*39.37007874015748*16),i=Math.floor(r/192),a=r%192,o=Math.floor(a/16),s=a%16;if(!s)return`${n}${i}'-${o}\"`;let c=Us(s,16);return`${n}${i}'-${o} ${s/c}/${16/c}\"`}function Gs(e,t){return t===`millimeters`?`${e.toFixed(2)} m²`:`${(e*10.76391041671).toFixed(2)} ft²`}function Ks(e,t,n){let r=t,i=[];n===`horizontal`&&(r=[t[0],e[1]],Fs(t,r)>1e-9&&(i=[{start:t,end:r}])),n===`vertical`&&(r=[e[0],t[1]],Fs(t,r)>1e-9&&(i=[{start:t,end:r}]));let a=[r[0]-e[0],r[1]-e[1]],o=Math.hypot(a[0],a[1]),s=Is(a),c=[-s[1],s[0]],l=[(e[0]+r[0])/2,(e[1]+r[1])/2];return{measurementStart:e,measurementEnd:r,extensionLines:i,valueMeters:o,direction:s,normal:c,labelPoint:l}}function qs(e,t,n){return!n||!e||!t?`aligned`:Math.abs(t[0]-e[0])>=Math.abs(t[1]-e[1])?`horizontal`:`vertical`}var Js=new Map,Ys=new Map,Xs=new Set,Zs=(e,t=16)=>`${e}|alpha:${t}`,Qs=()=>Xs.forEach(e=>e());function $s(e){return Xs.add(e),()=>{Xs.delete(e)}}function ec(e,t=16){return Js.get(Zs(e,t))??null}function tc(e,t,n,r=16){if(!Number.isInteger(t)||!Number.isInteger(n)||t<=0||n<=0||e.length<t*n*4)return null;let i=t,a=n,o=-1,s=-1;for(let c=0;c<n;c+=1)for(let n=0;n<t;n+=1)e[(c*t+n)*4+3]>=r&&(i=Math.min(i,n),a=Math.min(a,c),o=Math.max(o,n),s=Math.max(s,c));return o<i||s<a?null:{x:i,y:a,width:o-i+1,height:s-a+1}}function nc(e,t,n){if(![e.width,e.height,t,n].every(e=>Number.isFinite(e)&&e>0))return null;let r=t/e.width,i=n/e.height,a=e.width/e.height,o=t/n;return{drawWidth:t,drawHeight:n,offsetX:0,offsetY:0,scaleX:r,scaleY:i,uniformScaleApplied:Math.abs(r-i)<=1e-12,contentAspectRatio:a,physicalAspectRatio:o,aspectDifferencePercent:Math.abs(a-o)/o*100}}var rc=(e,t,n=0,r=0)=>({imageUrl:e,naturalWidth:n,naturalHeight:r,alphaThreshold:16,cropX:0,cropY:0,cropWidth:n,cropHeight:r,isFallback:!0,fallbackReason:t}),ic=e=>new Promise((t,n)=>{if(typeof Image>`u`||typeof document>`u`){n(Error(`canvas-unavailable`));return}let r=new Image;r.crossOrigin=`anonymous`,r.onload=()=>{let e=document.createElement(`canvas`);e.width=r.naturalWidth,e.height=r.naturalHeight;let i=e.getContext(`2d`,{willReadFrequently:!0});if(!i){n(Error(`canvas-unavailable`));return}try{i.drawImage(r,0,0),t({naturalWidth:r.naturalWidth,naturalHeight:r.naturalHeight,data:i.getImageData(0,0,r.naturalWidth,r.naturalHeight).data})}catch{let e=Error(`pixel-read-failed`);e.naturalWidth=r.naturalWidth,e.naturalHeight=r.naturalHeight,n(e)}},r.onerror=()=>n(Error(`image-load-failed`)),r.src=e});function ac(e,t=ic){let n=Zs(e),r=Js.get(n);if(r)return Promise.resolve(r);let i=Ys.get(n);if(i)return i;let a=t(e).then(t=>{if(t.data.length<t.naturalWidth*t.naturalHeight*4)return rc(e,`invalid-pixel-data`,t.naturalWidth,t.naturalHeight);let n=tc(t.data,t.naturalWidth,t.naturalHeight);return n?{imageUrl:e,naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight,alphaThreshold:16,cropX:n.x,cropY:n.y,cropWidth:n.width,cropHeight:n.height,isFallback:!1,fallbackReason:null}:rc(e,`empty-alpha`,t.naturalWidth,t.naturalHeight)}).catch(t=>rc(e,[`image-load-failed`,`canvas-unavailable`,`pixel-read-failed`].includes(t.message)?t.message:`pixel-read-failed`,t.naturalWidth??0,t.naturalHeight??0)).then(e=>(Js.set(n,e),Ys.delete(n),Qs(),e));return Ys.set(n,a),a}function oc(e){let t=[];for(let n of Object.values(e)){if(n.type!==`item`||!n.asset?.floorPlanUrl)continue;let e=ec(n.asset.floorPlanUrl);if(!e)continue;e.isFallback&&t.push({severity:`warning`,code:e.fallbackReason===`empty-alpha`?`floorplan_image_empty_alpha`:`floorplan_image_crop_unavailable`,message:e.fallbackReason===`empty-alpha`?`floorPlan 图片没有达到 alpha 阈值的有效像素，已回退整图显示`:`floorPlan 图片无法读取像素，已回退整图显示：${e.fallbackReason}`,nodeId:n.id,sourcePath:`nodes.${n.id}.asset.floorPlanUrl`});let r=qa(n),i=r&&!e.isFallback&&e.cropWidth>0&&e.cropHeight>0?nc({x:e.cropX,y:e.cropY,width:e.cropWidth,height:e.cropHeight},r.width,r.depth):null;i&&i.aspectDifferencePercent>.05*100&&t.push({severity:`warning`,code:`floorplan_image_aspect_mismatch`,message:`裁切内容与物理占地框宽高比差异 ${i.aspectDifferencePercent.toFixed(2)}%，已使用 X/Y 独立缩放实现四边贴合`,nodeId:n.id,sourcePath:`nodes.${n.id}.asset.floorPlanUrl`})}return t}var sc=`pascalorg/editor`,cc=`22c9472066398dae668b45e65c4785a56b3d0fb8`,lc=`site.building.elevator.level.column.wall.fence.cabinet.cabinet-module.item.zone.slab.ceiling.roof.roof-segment.shelf.stair.stair-segment.scan.guide.spawn.window.door.box-vent.ridge-vent.turbine-vent.cupola.eyebrow-vent.gutter.chimney.solar-panel.skylight.dormer.downspout.duct-segment.duct-fitting.duct-terminal.hvac-equipment.lineset.liquid-line.pipe-segment.pipe-fitting.pipe-trap`.split(`.`),uc=new Set([`site`,`building`,`level`,`stair-segment`,`scan`,`guide`,`downspout`]),dc=new Set([`fence`,`cabinet`,`cabinet-module`,`slab`,`shelf`,`duct-segment`,`duct-fitting`,`duct-terminal`,`hvac-equipment`,`lineset`,`liquid-line`,`pipe-segment`,`pipe-fitting`,`pipe-trap`]),fc={site:[`container`],building:[`container`],elevator:[`standalone`,`source-dependent`],level:[`container`],column:[`standalone`],wall:[`standalone`],fence:[`standalone`],cabinet:[`standalone`],"cabinet-module":[`hosted`],item:[`standalone`,`hosted`],zone:[`standalone`],slab:[`standalone`],ceiling:[`view-specific`],roof:[`standalone`],"roof-segment":[`hosted`,`source-dependent`],shelf:[`standalone`],stair:[`standalone`,`source-dependent`],"stair-segment":[`parent-emitted`],scan:[`helper-view-specific`],guide:[`helper-view-specific`],spawn:[`helper-view-specific`,`symbol-only`],window:[`hosted`],door:[`hosted`],"box-vent":[`hosted`],"ridge-vent":[`hosted`],"turbine-vent":[`hosted`],cupola:[`hosted`],"eyebrow-vent":[`hosted`],gutter:[`hosted`],chimney:[`hosted`],"solar-panel":[`hosted`],skylight:[`hosted`],dormer:[`hosted`],downspout:[`hosted`,`source-dependent`],"duct-segment":[`standalone`],"duct-fitting":[`standalone`],"duct-terminal":[`standalone`],"hvac-equipment":[`standalone`],lineset:[`standalone`],"liquid-line":[`standalone`],"pipe-segment":[`standalone`],"pipe-fitting":[`standalone`],"pipe-trap":[`standalone`]},pc={stair:{stairType:[`straight`,`curved`,`spiral`],railingMode:[`none`,`left`,`right`,`both`],topLandingMode:[`none`,`integrated`],slabOpeningMode:[`none`,`destination`]},"stair-segment":{segmentType:[`stair`,`landing`],attachmentSide:[`front`,`left`,`right`]},door:{doorType:[`hinged`,`double`,`french`,`folding`,`pocket`,`barn`,`sliding`,`garage-sectional`,`garage-rollup`,`garage-tiltup`],doorCategory:[`interior`,`garage`],trackStyle:[`none`,`visible`,`pocket`,`overhead`]},window:{windowType:[`fixed`,`sliding`,`casement`,`awning`,`hopper`,`single-hung`,`double-hung`,`bay`,`bow`,`louvered`]},shelf:{style:[`wall-shelf`,`bookshelf`,`open-rack`,`cubby`],bracketStyle:[`minimal`,`industrial`,`hidden`]},cabinet:{runTier:[`base`,`wall`,`tall`],frontStyle:[`slab`,`shaker`,`raised-arch`],compartmentType:[`shelf`,`drawer`,`door`,`sink`,`oven`,`microwave`,`dishwasher`,`cooktop-gas`,`cooktop-induction`,`pull-out-pantry`,`fridge-single`,`fridge-double`,`fridge-top-freezer`,`fridge-bottom-freezer`,`hood-pyramid`,`hood-curved-glass`]},"cabinet-module":{frontStyle:[`slab`,`shaker`,`raised-arch`]},column:{style:[`plain`,`faceted`,`fluted`,`lathe-turned`,`dravidian-carved`,`cluster`],crossSection:[`round`,`square`,`rectangular`,`octagonal`,`sixteen-sided`],shaftProfile:[`straight`,`tapered`,`bulged`,`baluster`,`hourglass`],shaftDetail:[`none`,`fluted`,`spiral`,`panelled`,`lathe-turned`]},fence:{style:[`slat`,`rail`,`privacy`,`horizontal`],baseStyle:[`floating`,`grounded`],postCap:[`none`,`flat`,`pyramid`]},"roof-segment":{roofType:[`hip`,`gable`,`shed`,`gambrel`,`dutch`,`mansard`,`flat`]},skylight:{skylightType:[`flat`,`walk-on`,`lantern`,`opening`,`sliding`],openingSide:[`top`,`bottom`,`left`,`right`],slideDirection:[`x`,`z`]},elevator:{doorStyle:[`center-opening`,`single-left`,`single-right`],doorPanelStyle:[`glass-frame`,`solid-panel`,`segmented-panel`],shaftStyle:[`solid`,`glass`]},"box-vent":{style:[`box`,`cap`,`dome`]},"ridge-vent":{style:[`standard`,`shingled`,`metal`]},"turbine-vent":{style:[`globe`,`cylinder`]},cupola:{roofStyle:[`dome`,`pyramid`]},"eyebrow-vent":{style:[`scoop`,`half-round`,`slant-box`]},gutter:{profile:[`k-style`,`half-round`,`box`],hangerStyle:[`strap`,`none`]},chimney:{bodyShape:[`square`,`round`],capStyle:[`none`,`sloped`,`flat`,`stepped`]},"solar-panel":{mountType:[`flush`,`tilted`]},"duct-segment":{shape:[`round`,`rect`,`oval`],material:[`sheet-metal`,`spiral`,`flex`,`duct-board`],system:[`supply`,`return`]},"duct-fitting":{fittingType:[`elbow`,`tee`,`cross`,`reducer`,`transition`],shape:[`round`,`rect`,`oval`]},"duct-terminal":{terminalType:[`supply-register`,`diffuser`,`return-grille`],mountType:[`floor`,`ceiling`,`wall`]},"hvac-equipment":{equipmentType:[`furnace`,`air-handler`,`condenser`]},"pipe-fitting":{fittingType:[`elbow`,`wye`,`sanitary-tee`,`cross`],material:[`pvc`,`abs`,`cast-iron`],system:[`waste`,`vent`]},"pipe-segment":{material:[`pvc`,`abs`,`cast-iron`],system:[`waste`,`vent`]},"pipe-trap":{material:[`pvc`,`abs`,`cast-iron`]}},mc={site:{surfaceType:[`polygon`,`terrain`]},item:{attachTo:[`wall`,`wall-side`,`ceiling`],assetSource:[`library`,`community`,`mine`],side:[`front`,`back`]},wall:{treatmentSide:[`interior`,`exterior`,`both`],faceSide:[`interior`,`exterior`,`unknown`]},"cabinet-module":{cabinetType:[`base`,`tall`],moduleKind:[`standard`,`corner-filler`],openSide:[`left`,`right`]},dormer:{roofType:[`hip`,`gable`,`shed`,`gambrel`,`dutch`,`mansard`,`flat`],windowShape:[`rectangle`,`rounded`,`arch`]},downspout:{shape:[`auto`,`round`,`rect`],strapStyle:[`band`,`none`],terminal:[`splash`,`kickout`,`straight`]},"duct-terminal":{collarShape:[`round`,`rect`,`oval`]},"hvac-equipment":{supplyShape:[`round`,`rect`,`oval`],returnShape:[`round`,`rect`,`oval`]}},hc={item:{controlKind:[`toggle`,`slider`,`temperature`],effectKind:[`animation`,`light`],roofFace:[`front`,`back`,`right`,`left`]},cabinet:{handleStyle:[`none`,`bar`,`cutout`,`hole`,`knob`],handlePosition:[`auto`,`top`,`center`],frontOverlay:[`full`,`inset`],barLedgeEdge:[`back`,`left`,`right`]},column:{panelShape:[`rectangle`,`arched`,`diamond`],baseStyle:[`none`,`simple-square`,`round-rings`,`square-plinth`,`stepped-square`,`lotus`,`ribbed-lotus`,`panelled-pedestal`],capitalStyle:[`none`,`simple`,`simple-slab`,`rounded`,`stepped`,`doric`,`volute`,`ionic-volute`,`leaf-carved`,`corinthian-leaf`,`south-indian-bracket`,`wood-bracket`],ringPlacement:[`ends`,`even`,`top`,`bottom`],carvingPlacement:[`shaft`,`base`,`capital`,`all`],supportStyle:[`vertical`,`a-frame`,`y-frame`,`v-frame`,`x-brace`,`k-brace`,`single-strut`,`tripod`,`trestle`,`portal-frame`,`box-frame`]},door:{segmentType:[`panel`,`glass`,`empty`],roofFace:[`front`,`back`,`right`,`left`],swingSide:[`left`,`right`],swingDirection:[`inward`,`outward`],openingShape:[`rectangle`,`rounded`,`arch`]},window:{roofFace:[`front`,`back`,`right`,`left`],openingShape:[`rectangle`,`rounded`,`arch`],hungDirection:[`up`,`down`],casementStyle:[`single`,`french`]},wall:{trimProfile:[`flat`,`bevel`,`round`,`cove`,`ogee`,`stepped`]},chimney:{flueShape:[`round`,`square`],shoulderStyle:[`none`,`tapered`,`corbeled`],bandStyle:[`none`,`single`,`double`],cricketStyle:[`none`,`simple`],cricketSide:[`front`,`back`],panelStyle:[`none`,`rectangular`]},gutter:{hangerStyle:[`strap`,`none`]},downspout:{shape:[`auto`,`round`,`rect`],strapStyle:[`band`,`none`],terminal:[`splash`,`kickout`,`straight`]}},gc={wall:{thickness:.1},item:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},shelf:{position:[0,0,0],rotation:[0,0,0],width:1.2,depth:.3,thickness:.04,height:.9,style:`wall-shelf`,rows:1,columns:1},stair:{position:[0,0,0],rotation:0,stairType:`straight`,width:1,totalRise:2.5,stepCount:10,innerRadius:.9,sweepAngle:`Math.PI / 2`},"stair-segment":{position:[0,0,0],rotation:0,segmentType:`stair`,width:1,length:3,height:2.5,stepCount:10},door:{position:[0,0,0],rotation:[0,0,0],width:.9,height:2.1,doorType:`hinged`},window:{position:[0,0,0],rotation:[0,0,0],width:1.5,height:1.5,windowType:`fixed`},column:{position:[0,0,0],rotation:0,style:`plain`,crossSection:`round`,height:2.5},fence:{height:1.8,thickness:.08,style:`slat`},elevator:{position:[0,0,0],rotation:0,width:1.84,depth:1.84},"roof-segment":{position:[0,0,0],rotation:0,roofType:`gable`,width:8,depth:6,pitch:40},slab:{elevation:.05,autoFromWalls:!1},ceiling:{height:2.5,autoFromWalls:!1},zone:{color:`#3b82f6`}},_c={site:{children:[]},building:{},level:{level:0},roof:{position:[0,0,0],rotation:0,children:[]},"cabinet-module":{position:[0,0,0],rotation:0,width:.6,depth:.58,cabinetType:`base`,moduleKind:`standard`},cabinet:{position:[0,0,0],rotation:0,width:.6,depth:.58,runTier:`base`,children:[]},scan:{position:[0,0,0],scale:1,opacity:100},guide:{position:[0,0,0],scale:1,opacity:50},spawn:{position:[0,0,0],rotation:0},"box-vent":{position:[0,0,0],rotation:0,width:.4,depth:.4,height:.15},"ridge-vent":{position:[0,0,0],rotation:0,length:2,width:.3,height:.1},"turbine-vent":{position:[0,0,0],rotation:0,diameter:.32,height:.42,vaneCount:20},cupola:{position:[0,0,0],rotation:0,width:.8,depth:.8,height:1},"eyebrow-vent":{position:[0,0,0],rotation:0,width:.5,depth:.6,height:.3},gutter:{position:[0,0,0],rotation:0,length:2,size:.13,thickness:.006},chimney:{position:[0,0,0],rotation:0,width:.6,depth:.6,heightAboveRidge:1},"solar-panel":{position:[0,0,0],rotation:0,rows:2,columns:3,panelWidth:1,panelHeight:1.65},skylight:{position:[0,0,0],rotation:0,skylightType:`flat`},dormer:{position:[0,0,0],rotation:0},downspout:{position:[0,0,0],length:2.5,diameter:.07,shape:`auto`},"duct-segment":{diameter:6,width:14,height:8,shape:`round`},"duct-fitting":{fittingType:`elbow`,shape:`round`,width:14,height:8,angle:90},"duct-terminal":{position:[0,0,0],rotation:0,terminalType:`supply-register`,mountType:`floor`,width:.3,depth:.15},"hvac-equipment":{position:[0,0,0],rotation:0,equipmentType:`furnace`,width:.56,depth:.71,height:1.1},lineset:{suctionDiameter:.875,liquidDiameter:.375,insulated:!0},"liquid-line":{diameter:.375},"pipe-segment":{diameter:2,material:`pvc`,system:`waste`},"pipe-fitting":{fittingType:`elbow`,angle:90,diameter:2,material:`pvc`,system:`waste`},"pipe-trap":{position:[0,0,0],rotation:0,diameter:2,material:`pvc`}},vc={building:[`site`],level:[`building`],elevator:[`building`],wall:[`level`],fence:[`level`],column:[`level`],cabinet:[`level`,`cabinet`,`cabinet-module`],"cabinet-module":[`cabinet`,`cabinet-module`],item:[`level`,`slab`,`ceiling`,`item`,`shelf`,`wall`,`roof-segment`],zone:[`level`],slab:[`level`],ceiling:[`level`],roof:[`level`],"roof-segment":[`roof`],shelf:[`level`,`item`,`shelf`],stair:[`level`],"stair-segment":[`stair`],window:[`wall`,`roof-segment`],door:[`wall`,`roof-segment`],"box-vent":[`roof-segment`],"ridge-vent":[`roof-segment`],"turbine-vent":[`roof-segment`],cupola:[`roof-segment`],"eyebrow-vent":[`roof-segment`],gutter:[`roof-segment`],chimney:[`roof-segment`],"solar-panel":[`roof-segment`],skylight:[`roof-segment`],dormer:[`roof-segment`],downspout:[`roof-segment`],"duct-segment":[`level`],"duct-fitting":[`level`],"duct-terminal":[`level`],"hvac-equipment":[`level`],lineset:[`level`],"liquid-line":[`level`],"pipe-segment":[`level`],"pipe-fitting":[`level`],"pipe-trap":[`level`]},yc={wall:{space:`ancestor Level XZ`,positionFields:[`start`,`end`,`curveOffset`],rotationFields:[],hosted:`not-applicable`},fence:{space:`ancestor Level XZ`,positionFields:[`start`,`end`],rotationFields:[],hosted:`not-applicable`},zone:{space:`ancestor Level polygon XZ`,positionFields:[`polygon`],rotationFields:[],hosted:`not-applicable`},slab:{space:`ancestor Level polygon XZ`,positionFields:[`polygon`,`holes`],rotationFields:[],hosted:`hosts item children`},ceiling:{space:`ancestor Level polygon XZ`,positionFields:[`polygon`,`holes`],rotationFields:[],hosted:`hosts ceiling items`},item:{space:`parent-local; resolved through item/shelf/wall/level hosts`,positionFields:[`position`],rotationFields:[`rotation[1]`],hosted:`wall-side uses wall tangent/normal; shelf/item compose parent transform`},shelf:{space:`parent-local XZ`,positionFields:[`position[0]`,`position[2]`],rotationFields:[`rotation[1]`],hosted:`children are shelf-local items`},stair:{space:`ancestor Level XZ`,positionFields:[`position[0]`,`position[2]`],rotationFields:[`rotation`],hosted:`stair-segment children are parent-emitted`},"stair-segment":{space:`stair-local cumulative chain`,positionFields:[`position`],rotationFields:[`rotation`,`attachmentSide`],hosted:`parent stair walks segment siblings cumulatively`},door:{space:`wall-distance or roof-face-local`,positionFields:[`position`,`wallId`,`roofSegmentId`,`roofFace`],rotationFields:[`rotation`],hosted:`wall/roof face defines world frame`},window:{space:`wall-distance or roof-face-local`,positionFields:[`position`,`wallId`,`roofSegmentId`,`roofFace`],rotationFields:[`rotation`],hosted:`wall/roof face defines world frame`},"roof-segment":{space:`roof-local`,positionFields:[`position`,`width`,`depth`],rotationFields:[`rotation`],hosted:`parent roof supplies frame`},"box-vent":{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host frame`},"ridge-vent":{space:`roof-segment-local ridge line`,positionFields:[`position`,`length`],rotationFields:[`rotation`],hosted:`roof ridge host frame`},"turbine-vent":{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host frame`},cupola:{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host frame`},"eyebrow-vent":{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host frame`},gutter:{space:`roof-segment edge-local`,positionFields:[`position`,`length`,`offset`],rotationFields:[`rotation`],hosted:`roof edge host`},chimney:{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host and cutout`},"solar-panel":{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host frame`},skylight:{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment opening frame`},dormer:{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host/cutout`},downspout:{space:`roof-segment/gutter outlet-derived`,positionFields:[`position`,`outlet`],rotationFields:[],hosted:`host gutter/roof segment determines placement`},"duct-segment":{space:`Level route points`,positionFields:[`points`],rotationFields:[`roll`],hosted:`not-applicable`},"pipe-segment":{space:`Level route points`,positionFields:[`points`],rotationFields:[],hosted:`not-applicable`},lineset:{space:`Level route points`,positionFields:[`points`],rotationFields:[],hosted:`not-applicable`},"liquid-line":{space:`Level route points`,positionFields:[`points`],rotationFields:[],hosted:`not-applicable`}},bc={wall:[`door`,`window`,`item`],ceiling:[`item`],cabinet:[`cabinet-module`],roof:[`roof-segment`],stair:[`stair-segment`],shelf:[`item`]},xc=e=>{let t={schemaRecognition:`partial`,rawDataPreservation:`complete`,levelResolution:`partial`,transformResolution:`none`,floorplanRendering:`none`,inspectorSupport:`partial`,diagnosticSupport:`partial`,testCoverage:`none`,overallStatus:`parsed-not-rendered`,evidence:{files:[`src/parser/parse.ts`,`src/main.tsx`],functions:[`parseProject`,`objectsOnLevel`],tests:[]}};return[`site`,`building`,`level`].includes(e)?{...t,levelResolution:`not-applicable`,transformResolution:`not-applicable`,floorplanRendering:`intentionally-hidden`,overallStatus:`parsed-container`}:[`scan`,`guide`,`spawn`].includes(e)?{...t,floorplanRendering:`intentionally-hidden`,overallStatus:`parsed-intentionally-hidden`}:e===`item`?{...t,levelResolution:`complete`,transformResolution:`complete`,floorplanRendering:`exact`,diagnosticSupport:`complete`,testCoverage:`complete`,overallStatus:`supported-exact`,evidence:{files:[`src/geometry/transform.ts`,`src/main.tsx`],functions:[`resolveItemPlanTransform`,`Furniture`],tests:[`src/geometry/geometry.test.ts`]}}:e===`wall`?{...t,levelResolution:`complete`,transformResolution:`not-applicable`,floorplanRendering:`pascal-equivalent`,testCoverage:`complete`,overallStatus:`supported-pascal-equivalent`,evidence:{files:[`src/geometry/walls`,`src/main.tsx`],functions:[`buildExperimentalWalls`,`Wall`],tests:[`src/geometry/walls/walls.test.ts`]}}:e===`shelf`?{...t,levelResolution:`complete`,transformResolution:`complete`,floorplanRendering:`pascal-equivalent`,testCoverage:`complete`,overallStatus:`supported-pascal-equivalent`,evidence:{files:[`src/geometry/shelf.ts`,`src/main.tsx`],functions:[`resolveShelfPlanTransform`,`Shelf`],tests:[`src/geometry/shelf.test.ts`]}}:e===`stair`?{...t,levelResolution:`complete`,transformResolution:`complete`,floorplanRendering:`pascal-equivalent`,testCoverage:`complete`,overallStatus:`partially-supported`,evidence:{files:[`src/geometry/spiral-stair.ts`,`src/geometry/stairs.ts`,`src/main.tsx`],functions:[`buildSpiralStairPlanGeometry`,`buildStraightStairPlanGeometry`,`buildCurvedStairPlanGeometry`,`Stair`],tests:[`src/geometry/spiral-stair.test.ts`,`src/geometry/stairs.test.ts`]}}:e===`stair-segment`?{...t,floorplanRendering:`parent-emitted`,overallStatus:`parsed-parent-emitted`,evidence:{files:[`src/geometry/stairs.ts`,`src/main.tsx`,`src/coverage/renderedNodeRegistry.ts`],functions:[`buildStraightStairPlanGeometry`,`Stair`,`collectCurrentRenderRegistry`],tests:[`src/geometry/stairs.test.ts`,`src/coverage/coverage.test.ts`]}}:e===`slab`?{...t,levelResolution:`complete`,transformResolution:`not-applicable`,floorplanRendering:`pascal-equivalent`,testCoverage:`complete`,overallStatus:`supported-pascal-equivalent`,evidence:{files:[`src/geometry/slab.ts`,`src/main.tsx`],functions:[`buildSlabPlanGeometry`,`Slab`],tests:[`src/geometry/slab.test.ts`,`src/coverage/coverage.test.ts`]}}:e===`ceiling`?{...t,floorplanRendering:`intentionally-hidden`,overallStatus:`parsed-intentionally-hidden`,evidence:{files:[`src/coverage/auditSceneCoverage.ts`,`src/coverage/renderedNodeRegistry.ts`],functions:[`auditSceneCoverage`,`collectCurrentRenderRegistry`],tests:[`src/coverage/coverage.test.ts`]}}:e===`zone`?{...t,levelResolution:`complete`,transformResolution:`not-applicable`,floorplanRendering:`pascal-equivalent`,overallStatus:`supported-pascal-equivalent`,evidence:{files:[`src/main.tsx`],functions:[`Polygon`],tests:[]}}:e===`door`||e===`window`?{...t,levelResolution:`complete`,transformResolution:`partial`,floorplanRendering:`demo-custom-symbol`,overallStatus:`partially-supported`,evidence:{files:[`src/geometry/transform.ts`,`src/main.tsx`],functions:[`resolveWallOpeningTransform`,`Opening`],tests:[]}}:t},Sc=lc.map(e=>{let t=e===`cabinet-module`?`cabinet`:e,n=`packages/core/src/schema/nodes/${t}.ts`,r=`packages/nodes/src/${t}/definition.ts`,i={...pc[e]??{},...mc[e]??{},...hc[e]??{}},a=yc[e],o={...gc[e]??{},..._c[e]??{}},s=[...new Set([`parentId`,`children`,...Object.keys(o),...Object.keys(i),...a?.positionFields??[],...a?.rotationFields??[]])];return{kind:e,upstream:{repository:sc,commit:cc,schemaPath:n,definitionPath:r,...!uc.has(e)&&{floorplanPath:`packages/nodes/src/${t}/floorplan.ts`},...!dc.has(e)&&{rendererPath:`packages/nodes/src/${t}/renderer.tsx`}},classification:{category:fc[e][0],expectedVisibilityStrategy:fc[e]},schema:{schemaVersion:`fixed-commit-source`,discriminators:[`type`,...Object.keys(i)],variants:Object.values(i)[0]??[],importantEnums:i,requiredFields:[`id`,`type`],optionalFields:s,defaultedFields:o},hierarchy:{allowedParentKinds:vc[e]??`unknown-from-reviewed-source`,allowedChildKinds:bc[e]??[],hosts:bc[e]??[],...e===`stair-segment`&&{parentEmittedBy:`stair`}},coordinates:{coordinateSpace:a?.space??`unknown-from-reviewed-source`,positionFields:a?.positionFields??[],rotationFields:a?.rotationFields??[],hostedCoordinateMeaning:a?.hosted??`unknown-from-reviewed-source`},pascalCapabilities:{hasPascalFloorplan:!uc.has(e),hasPascal3DRenderer:!dc.has(e),hasGeometryBuilder:`unknown-from-reviewed-source`,hasFloorplanLevelData:![`site`,`building`,`level`].includes(e)&&`unknown-from-reviewed-source`,floorplanDependsOnParent:fc[e].includes(`hosted`)||fc[e].includes(`parent-emitted`),floorplanDependsOnSiblings:e===`stair-segment`||e===`cabinet-module`},currentDemoStatus:xc(e),reviewEvidence:[n,r,...uc.has(e)?[]:[`packages/nodes/src/${t}/floorplan.ts`]]}});Object.fromEntries(Sc.map(e=>[e.kind,e.currentDemoStatus]));var Cc={stair:{spiral:`supported-demo-symbol`,curved:`supported-pascal-equivalent`,straight:`supported-pascal-equivalent`},shelf:{"wall-shelf":`supported-pascal-equivalent`,bookshelf:`supported-pascal-equivalent`,"open-rack":`supported-pascal-equivalent`,cubby:`supported-pascal-equivalent`},door:{hinged:`partially-supported`,double:`partially-supported`,french:`partially-supported`,folding:`partially-supported`,pocket:`partially-supported`,barn:`partially-supported`,sliding:`partially-supported`,"garage-sectional":`partially-supported`,"garage-rollup":`partially-supported`,"garage-tiltup":`partially-supported`},window:{fixed:`partially-supported`,sliding:`partially-supported`,casement:`partially-supported`,awning:`partially-supported`,hopper:`partially-supported`,"single-hung":`partially-supported`,"double-hung":`partially-supported`,bay:`partially-supported`,bow:`partially-supported`,louvered:`partially-supported`}},wc=class{records=new Map;register(e){this.records.set(e.nodeId,e)}get(e){return this.records.get(e)}all(){return[...this.records.values()]}},Tc=e=>e.type===`stair`?e.stairType:e.type===`door`?e.doorType:e.type===`window`?e.windowType:e.type===`shelf`?e.style:void 0;function Ec(e,t={}){let n=new wc;for(let r of Object.values(e)){if([`site`,`building`,`level`,`scan`,`guide`,`spawn`].includes(r.type)){n.register({nodeId:r.id,kind:r.type,variant:Tc(r),renderStrategy:`intentionally-hidden`});continue}if(r.type===`ceiling`){n.register({nodeId:r.id,kind:r.type,renderStrategy:`intentionally-hidden`});continue}if(r.type===`slab`&&Wo(r)){n.register({nodeId:r.id,kind:r.type,renderStrategy:r.visible===!1?`intentionally-hidden`:t.slabs===!1?`hidden-by-layer-toggle`:`self`});continue}if(r.type===`wall`&&Array.isArray(r.start)&&Array.isArray(r.end))n.register({nodeId:r.id,kind:r.type,renderStrategy:`self`});else if(r.type===`zone`&&Array.isArray(r.polygon))n.register({nodeId:r.id,kind:r.type,renderStrategy:`self`});else if(r.type===`item`&&qa(r)&&Ya(r.id,e).status===`ok`)n.register({nodeId:r.id,kind:r.type,renderStrategy:`self`});else if(r.type===`shelf`&&Ao(r)&&jo(r.id,e).status===`ok`)n.register({nodeId:r.id,kind:r.type,variant:Tc(r),renderStrategy:`self`});else if((r.type===`door`||r.type===`window`)&&$a(r,e))n.register({nodeId:r.id,kind:r.type,variant:Tc(r),renderStrategy:`self`});else if(r.type===`stair`&&$o(r,e))n.register({nodeId:r.id,kind:r.type,variant:r.stairType??`straight`,renderStrategy:t.stairs===!1?`hidden-by-layer-toggle`:`self`});else if(r.type===`stair-segment`){let i=e[r.parentId??``];i?.type===`stair`&&$o(i,e)&&n.register({nodeId:r.id,kind:r.type,emittedByNodeId:i.id,renderStrategy:t.stairs===!1?`hidden-by-layer-toggle`:`parent-emitted`})}}return n}var Dc=e=>e.type===`stair`?e.stairType:e.type===`door`?e.doorType??`hinged`:e.type===`window`?e.windowType??`fixed`:e.type===`shelf`?e.style??`wall-shelf`:void 0,Oc=(e,t)=>{if(e.type===`item`&&!qa(e))return`item dimensions/scale 无效`;if(e.type===`shelf`&&!Ao(e))return`shelf dimensions 无效`;if(e.type===`wall`){if(!Array.isArray(e.start)||!Array.isArray(e.end))return`wall endpoints 缺失`;if(Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1])<1e-9)return`wall 长度为零`}if(e.type===`stair`&&!$o(e,t))return`stair 关键几何无效`;if((e.type===`door`||e.type===`window`)&&e.width!==void 0&&(!Number.isFinite(e.width)||e.width<=0))return`${e.type} width 无效`};function kc(e,t=[],n={}){let r=new Set(lc),i=Ec(e,n),a=Object.values(e).map(t=>{let n=Sc.find(e=>e.kind===t.type),r=Dc(t),a=Wa(t.id,e),o=i.get(t.id),s=Oc(t,e),c,l;return n?s?(c=`invalid-data`,l=s):o?.renderStrategy===`intentionally-hidden`?(c=n.classification.expectedVisibilityStrategy.includes(`container`)?`parsed-container`:`parsed-intentionally-hidden`,l=t.type===`ceiling`?`Ceiling数据用于顶面/天花视图，不在当前平面布置图默认渲染。`:`按当前视图策略正常不独立绘制`):o?.renderStrategy===`hidden-by-layer-toggle`?(c=`parsed-intentionally-hidden`,l=`图层被用户关闭，未参与当前画布绘制`):o?.renderStrategy===`parent-emitted`?(c=`parsed-parent-emitted`,l=`由父节点 ${o.emittedByNodeId} 输出`):o?(c=(r&&t.type in Cc?Cc[t.type]?.[r]:void 0)??n.currentDemoStatus.overallStatus,l=`实际登记为 ${o.renderStrategy} 渲染`):n.classification.expectedVisibilityStrategy.includes(`container`)?(c=`parsed-container`,l=`容器节点正常不独立绘制`):n.classification.expectedVisibilityStrategy.includes(`parent-emitted`)?(c=`parsed-not-rendered`,l=`期望由父节点输出，但当前没有父级渲染登记`):(c=r&&t.type in Cc?Cc[t.type]?.[r]??`parsed-not-rendered`:`parsed-not-rendered`,l=c===`partially-supported`?`当前 variant 仅有简化表达且本节点未满足渲染条件`:`${t.type}${r?`.`+r:``} 已解析但没有实际渲染登记`):(c=`unknown-plugin-node`,l=`不属于固定 Pascal Core 43-kind；缺少对应插件 Schema`),{nodeId:t.id,kind:t.type,variant:r,ancestorLevelId:a.levelId,parentChain:a.sourceNodeIds,sourcePath:`nodes.${t.id}`,schemaStatus:n?.currentDemoStatus.schemaRecognition??`none`,transformStatus:a.error?`none`:n?.currentDemoStatus.transformResolution??`none`,expectedVisibility:n?.classification.expectedVisibilityStrategy??[`unknown-plugin`],actualRenderStatus:o?.renderStrategy??`none`,overallStatus:c,reason:l,evidence:n?.currentDemoStatus.evidence??{files:[],functions:[],tests:[]}}}),o=(...e)=>a.filter(t=>e.includes(t.overallStatus)).length,s=a.reduce((e,t)=>((e[t.kind]??=[]).push(t),e),{}),c=a.reduce((e,t)=>{let n=`${t.kind}.${t.variant??`(none)`}`;return e[n]=(e[n]??0)+1,e},{}),l=a.reduce((e,n)=>(n.overallStatus===`parsed-not-rendered`?e.push({severity:`error`,code:`parsed-not-rendered`,message:n.reason,nodeId:n.nodeId,sourcePath:n.sourcePath}):n.overallStatus===`invalid-data`?e.push({severity:`error`,code:`invalid-data`,message:n.reason,nodeId:n.nodeId,sourcePath:n.sourcePath}):n.overallStatus===`partially-supported`?e.push({severity:`warning`,code:`partially-supported`,message:n.reason,nodeId:n.nodeId,sourcePath:n.sourcePath}):n.overallStatus===`unknown-plugin-node`&&e.push({severity:`warning`,code:`unknown-plugin-node`,message:`${n.reason}; installedPlugins=${JSON.stringify(t)}`,nodeId:n.nodeId,sourcePath:n.sourcePath}),e),[]);return{summary:{totalNodes:a.length,builtInNodes:a.filter(e=>r.has(e.kind)).length,unknownPluginNodes:o(`unknown-plugin-node`),fullySupportedNodes:o(`supported-exact`,`supported-pascal-equivalent`,`supported-demo-symbol`),partiallySupportedNodes:o(`partially-supported`),parsedNotRenderedNodes:o(`parsed-not-rendered`),invalidNodes:o(`invalid-data`)},entries:a,byKind:s,byVariant:c,missingRenderers:a.filter(e=>e.overallStatus===`parsed-not-rendered`),unknownKinds:[...new Set(a.filter(e=>e.overallStatus===`unknown-plugin-node`).map(e=>e.kind))],installedPlugins:t,renderedRegistry:i.all(),diagnostics:l}}var Ac=e=>Array.isArray(e)&&e.length>=2&&e.slice(0,2).every(Number.isFinite)?[e[0],e[1]]:null,jc=e=>Math.abs(e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n[0]*i[1]-n[1]*i[0]},0)/2),Mc=(e,t)=>Wa(e.id,t).levelId??null,Nc=new Set([`climate-appliances`,`kitchen-appliances`,`laundry-appliances`]),Pc=(e,t)=>({id:e.id,rawPascalId:e.id,name:e.name??null,parentId:e.parentId??null,levelId:Mc(e,t),visible:e.visible!==!1});function Fc(e){let{nodes:t}=e,n=Object.values(t),r=e=>n.filter(t=>t.type===e),i=r(`level`).map(e=>({...Pc(e,t),ordinal:Number.isFinite(e.level)?e.level:null})),a=r(`zone`).map(e=>{let n=ts(e).map(e=>[e.x,e.z]);return{...Pc(e,t),color:e.color??null,outline:n,areaSquareMeters:n.length>=3?jc(n):null}}),o=r(`slab`).map(e=>{let n=Wo(e);return{...Pc(e,t),outline:n?.outer.map(e=>[e.x,e.z])??[],holes:n?.holes.map(e=>e.map(e=>[e.x,e.z]))??[],areaSquareMeters:n?.netArea??null,autoFromWalls:e.autoFromWalls===!0}}),s=r(`wall`),c=new Map,l=s.filter(e=>Ac(e.start)&&Ac(e.end)),u=[...new Set(l.map(e=>Mc(e,t)))];for(let e of u){let n=l.filter(n=>Mc(n,t)===e);try{To(n).forEach(e=>c.set(e.wallId,{valid:e.validation.valid,codes:e.validation.codes,areaSquareMeters:Math.abs(e.validation.area)}))}catch{n.forEach(e=>c.set(e.id,{valid:!1,codes:[`wall_footprint_evaluation_failed`],areaSquareMeters:0}))}}let d=s.map(e=>({...Pc(e,t),start:Ac(e.start),end:Ac(e.end),thicknessMeters:Number.isFinite(e.thickness)&&e.thickness>0?e.thickness:.1,thicknessSource:Number.isFinite(e.thickness)&&e.thickness>0?`explicit`:`pascal-default`,heightMeters:Number.isFinite(e.height)?e.height:null,curveOffsetMeters:Number.isFinite(e.curveOffset)?e.curveOffset:0,frontSide:e.frontSide??null,backSide:e.backSide??null,footprintValidation:c.get(e.id)??{valid:!1,codes:[`wall_invalid_centerline`],areaSquareMeters:0}})),f=e=>{let n=$a(e,t);return{...Pc(e,t),hostWallId:e.wallId??e.parentId??null,rawWallLocalPosition:Array.isArray(e.position)?e.position:null,resolvedWorldPosition:n?[n.x,n.z]:null,resolvedTangentRadians:n?.rotationY??null,widthMeters:Number.isFinite(e.width)?e.width:null,heightMeters:Number.isFinite(e.height)?e.height:null,side:e.side??null,openingKind:e.openingKind??null,openingShape:e.openingShape??null,frameThicknessMeters:Number.isFinite(e.frameThickness)?e.frameThickness:null,frameDepthMeters:Number.isFinite(e.frameDepth)?e.frameDepth:null}},p=r(`door`).map(e=>({...f(e),doorType:e.doorType??`hinged`,hingesSide:e.hingesSide??null,swingDirection:e.swingDirection??null,swingAngleRadians:Number.isFinite(e.swingAngle)?e.swingAngle:null,slideDirection:e.slideDirection??null,trackStyle:e.trackStyle??null,leafCount:Number.isFinite(e.leafCount)?e.leafCount:null,garagePanelCount:Number.isFinite(e.garagePanelCount)?e.garagePanelCount:null})),m=r(`window`).map(e=>({...f(e),windowType:e.windowType??null,hingesSide:e.hingesSide??null,awningDirection:e.awningDirection??null,casementStyle:e.casementStyle??null,sill:e.sill??null,sillDepthMeters:Number.isFinite(e.sillDepth)?e.sillDepth:null})),h=e=>{let n=qa(e),r=Ya(e.id,t),i=e.asset?.category??null;return{...Pc(e,t),assetId:e.asset?.id??null,category:i,functionTags:e.asset?.functionTags??[],dimensionsMeters:n?[n.width,n.height,n.depth]:null,rawPosition:Array.isArray(e.position)?e.position:null,rawRotation:Array.isArray(e.rotation)?e.rotation:null,resolvedWorldPosition:r.status===`ok`?[r.x,r.z]:null,resolvedRotationRadians:r.status===`ok`?r.rotationY:null,floorPlanUrl:e.asset?.floorPlanUrl??null,transformStatus:r.status,transformError:r.error??null}},g=r(`item`),_=g.filter(e=>e.asset?.category===`columns`).map(h),v=g.filter(e=>Nc.has(e.asset?.category)).map(h),y=g.filter(e=>e.asset?.category!==`columns`&&!Nc.has(e.asset?.category)).map(h),b=r(`shelf`).map(e=>{let n=W(e);return{...Pc(e,t),style:n.style,dimensionsMeters:[n.width,n.height,n.depth],rows:n.rows,columns:n.columns,childItemIds:e.children??[]}}),x=r(`stair`).map(e=>({...Pc(e,t),stairType:e.stairType??`straight`,fromLevelId:e.fromLevelId??null,toLevelId:e.toLevelId??null,widthMeters:Number.isFinite(e.width)?e.width:null,totalRiseMeters:Number.isFinite(e.totalRise)?e.totalRise:null,stepCount:Number.isFinite(e.stepCount)?e.stepCount:null,innerRadiusMeters:Number.isFinite(e.innerRadius)?e.innerRadius:null,sweepAngleRadians:Number.isFinite(e.sweepAngle)?e.sweepAngle:null})),S=r(`shaft`).map(e=>({...Pc(e,t),outline:Array.isArray(e.polygon)?e.polygon.map(Ac).filter(e=>!!e):[],heightMeters:Number.isFinite(e.height)?e.height:null})),C=d.flatMap((e,t)=>d.slice(t+1).flatMap(t=>[`start`,`end`].flatMap(n=>[`start`,`end`].flatMap(r=>{let i=e[n],a=t[r];return i&&a&&Math.hypot(i[0]-a[0],i[1]-a[1])<=1e-6?[{wallId:e.id,wallEnd:n,connectedWallId:t.id,connectedWallEnd:r}]:[]})))),w=new Set([...d,...a,...o,...p,...m,...y,...v,..._,...b,...x,...S,...i].map(e=>e.id));return{schemaVersion:`1.0`,source:{format:`Pascal JSON`,rootNodeIds:Array.isArray(e.raw?.rootNodeIds)?e.raw.rootNodeIds:[]},units:{length:`meter`,area:`square-meter`,angles:`radian`,planCoordinates:`Pascal Level plane [x,z]`,svgProjection:`[x,z] -> [x,y] identity; default viewer rotation is clockwise 90 degrees`},levels:i,zones:a,slabs:o,spaces:a.map(e=>({...e,sourceZoneId:e.id,source:`derived-from-zone`})),walls:d,doors:p,windows:m,furniture:y,equipment:v,columns:_,shelves:b,stairs:x,shafts:S,relationships:{parentChild:n.filter(e=>e.parentId).map(e=>({parentId:e.parentId,childId:e.id})),levelMembership:n.map(e=>({nodeId:e.id,levelId:Mc(e,t)})).filter(e=>e.levelId),hostedOpenings:[...p,...m].filter(e=>e.hostWallId).map(e=>({openingId:e.id,wallId:e.hostWallId})),wallConnections:C},unclassifiedNodes:n.filter(e=>!w.has(e.id)).map(e=>({id:e.id,rawPascalId:e.id,type:e.type})),diagnostics:e.diagnostics}}var Ic=Object.freeze({lengthMeters:1e-6,areaSquareMeters:1e-8,pointOnBoundaryMeters:.01,overlapAreaSquareMeters:.01});function Lc(e,t){let n=(t,n,r=e.hostWallId)=>({status:t,openingId:e.id,wallId:r,wallLengthMeters:null,openingStartMeters:null,openingEndMeters:null,openingCenterMeters:null,rightOvershootMeters:null,leftOvershootMeters:null,reason:n});if(!e.hostWallId||!t)return n(`invalid`,`宿主墙缺失`);if(!t.footprintValidation.valid)return n(`invalid`,`宿主墙 footprint 无效：${t.footprintValidation.codes.join(`, `)}`,t.id);if(Math.abs(t.curveOffsetMeters)>Ic.lengthMeters)return n(`unsupported`,`曲墙门窗定位在当前交接中不可靠`,t.id);if(!t.start||!t.end||!t.start.every(Number.isFinite)||!t.end.every(Number.isFinite))return n(`invalid`,`宿主墙几何无效`,t.id);let r=Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1]),i=e.rawWallLocalPosition?.[0],a=e.widthMeters;if(!Number.isFinite(i)||!Number.isFinite(a)||a<=0||r<=Ic.lengthMeters)return{status:`invalid`,openingId:e.id,wallId:t.id,wallLengthMeters:r,openingStartMeters:null,openingEndMeters:null,openingCenterMeters:null,rightOvershootMeters:null,leftOvershootMeters:null,reason:`门窗位置、宽度或墙长无效`};let o=i-a/2,s=i+a/2,c=Ic.pointOnBoundaryMeters,l=Math.max(0,-o),u=Math.max(0,s-r);return{status:o>=-c&&s<=r+c?`inside`:`outside`,openingId:e.id,wallId:t.id,wallLengthMeters:r,openingStartMeters:o,openingEndMeters:s,openingCenterMeters:i,rightOvershootMeters:u,leftOvershootMeters:l}}var Rc=e=>Array.isArray(e)&&e.length>=2&&e.slice(0,2).every(Number.isFinite),zc=e=>Math.abs(e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n[0]*i[1]-i[0]*n[1]},0)/2),Bc=e=>e.length>2&&(e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]?e:[...e,e[0]]),Vc=e=>e.reduce((e,t)=>e+Math.max(0,zc(t[0]??[])-t.slice(1).reduce((e,t)=>e+zc(t),0)),0);function Hc(e,t,n,r){let i=(e,t,n)=>(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]),a=i(e,t,n),o=i(e,t,r),s=i(n,r,e),c=i(n,r,t);return a*o<0&&s*c<0}function Uc(e){for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++)if(!(Math.abs(t-n)<=1||t===0&&n===e.length-1)&&Hc(e[t],e[(t+1)%e.length],e[n],e[(n+1)%e.length]))return!0;return!1}function Wc(e){return e.levels.map(t=>{let n=(e.slabs??[]).filter(e=>e.levelId===t.id&&e.visible);if(!n.length)return{levelId:t.id,polygons:[],holes:[],sourceType:`none`,sourceObjectIds:[],pascalSourceIds:[],areaSquareMeters:null,confidence:`low`,diagnostics:[{code:`no_level_slab`,message:`该楼层没有可用的 Floor/Slab 轮廓`}],usableForEvaluation:!1};let r=n.filter(e=>e.outline.length<3||!e.outline.every(Rc)||zc(e.outline)<=Ic.areaSquareMeters||Uc(e.outline));if(r.length)return{levelId:t.id,polygons:[],holes:[],sourceType:`slab-union`,sourceObjectIds:r.map(e=>e.id),pascalSourceIds:r.map(e=>e.rawPascalId),areaSquareMeters:null,confidence:`low`,diagnostics:r.map(e=>({code:`invalid_slab_polygon`,message:`${e.name??e.id} 的 Slab Polygon 无效或自相交`,sourceObjectIds:[e.id]})),usableForEvaluation:!1};try{let[e,...r]=n.map(e=>[Bc(e.outline),...e.holes.map(Bc)]),i=is.default.union(e,...r),a=Vc(i),o=i.flatMap(e=>e.slice(1));if(!i.length||a<=Ic.areaSquareMeters)throw Error(`empty_union`);return{levelId:t.id,polygons:i,holes:o,sourceType:`slab-union`,sourceObjectIds:n.map(e=>e.id),pascalSourceIds:n.map(e=>e.rawPascalId),areaSquareMeters:a,confidence:`medium`,diagnostics:[{code:`slab_semantics_limited`,message:`边界由可见 Slab 并集推导；未把 Zone 或墙体集合当作建筑边界。`},...i.length>1?[{code:`multiple_components`,message:`检测到 ${i.length} 个不相连的建筑区域`}]:[]],usableForEvaluation:!0}}catch{return{levelId:t.id,polygons:[],holes:[],sourceType:`slab-union`,sourceObjectIds:n.map(e=>e.id),pascalSourceIds:n.map(e=>e.rawPascalId),areaSquareMeters:null,confidence:`low`,diagnostics:[{code:`slab_union_failed`,message:`Slab Polygon 无法稳定合并为建筑边界`}],usableForEvaluation:!1}}})}function Gc(e){let[t,,n]=e.dimensionsMeters??[],[r,i]=e.resolvedWorldPosition??[],a=e.resolvedRotationRadians;if(![t,n,r,i,a].every(Number.isFinite)||t<=Ic.lengthMeters||n<=Ic.lengthMeters)return null;let o=Math.cos(a),s=Math.sin(a);return[[-t/2,-n/2],[t/2,-n/2],[t/2,n/2],[-t/2,n/2]].map(([e,t])=>[r+e*o-t*s,i+e*s+t*o])}function Kc(e,t){if(!t.usableForEvaluation)return null;try{return Vc(is.default.difference([Bc(e)],t.polygons))}catch{return null}}var qc=[`levels`,`spaces`,`walls`,`doors`,`windows`,`furniture`,`equipment`,`columns`,`shelves`,`stairs`,`shafts`],Jc=e=>qc.flatMap(t=>e[t]),Yc=e=>[...new Set(e.map(e=>e.id))],Xc=e=>[...new Set(e.map(e=>e.rawPascalId))],Zc=(e,t=[])=>({level:e,score:e===`high`?1:e===`medium`?.75:.4,reasons:t}),Qc=(e,t,n,r,i={})=>({ruleId:e,ruleName:t,status:n,severity:n===`issue`?`error`:n===`unable_to_determine`?`warning`:`info`,summary:r,details:[],normalizedObjectIds:[],pascalSourceIds:[],measurements:[],thresholds:[],missingData:[],confidence:Zc(`high`),diagnostics:[],...i}),$c=e=>Array.isArray(e)&&e.length>=2&&e.every(Number.isFinite),el=e=>Number.isFinite(e)&&e>Ic.lengthMeters,tl=[e=>{let t={length:`meter`,area:`square-meter`,angles:`radian`},n=Object.entries(t).filter(([t,n])=>e.units[t]!==n);return Qc(`G1-001`,`项目单位有效`,n.length?`issue`:`pass`,n.length?`项目单位与评价器支持的单位不一致`:`长度、面积和角度单位均受支持`,{details:n.map(([e,t])=>`${e} 应为 ${t}`),measurements:Object.entries(t).map(([t])=>({name:t,value:e.units[t]})),thresholds:Object.entries(t).map(([e,t])=>({name:`required-${e}`,value:t})),confidence:Zc(`high`)})},e=>{let t=Jc(e),n=new Map;t.forEach(e=>n.set(e.id,[...n.get(e.id)??[],e]));let r=[...n.entries()].filter(([,e])=>e.length>1),i=r.flatMap(([,e])=>e);return Qc(`G1-002`,`参与评价的对象具有唯一身份`,r.length?`issue`:`pass`,r.length?`发现 ${r.length} 个重复标准化 ID`:`${t.length} 个参与评价对象的标准化 ID 唯一`,{details:r.map(([e,t])=>`${e} 出现 ${t.length} 次`),normalizedObjectIds:Yc(i),pascalSourceIds:Xc(i),measurements:[{name:`participatingObjectCount`,value:t.length},{name:`duplicateIdCount`,value:r.length}],thresholds:[{name:`maximumDuplicateIdCount`,value:0}],confidence:Zc(`high`)})},e=>{let t=new Set(e.levels.map(e=>e.id)),n=Jc(e).filter(e=>!e.levelId||!t.has(e.levelId));return Qc(`G1-003`,`对象的楼层归属明确`,n.length?`issue`:`pass`,n.length?`${n.length} 个对象缺少有效楼层归属`:`所有参与评价对象均可归属到已知楼层`,{details:n.map(e=>`${e.id}: ${e.levelId?`楼层 ${e.levelId} 不存在`:`未解析出楼层`}`),normalizedObjectIds:Yc(n),pascalSourceIds:Xc(n),measurements:[{name:`unresolvedLevelObjectCount`,value:n.length}],thresholds:[{name:`maximumUnresolvedLevelObjectCount`,value:0}],missingData:n.map(e=>`${e.id}.levelId`),confidence:Zc(`high`)})},e=>{let t=[],n=[],r=(e,r,i)=>{t.push(e),n.push({severity:`error`,code:`invalid_dimension_or_coordinate`,message:r,normalizedObjectIds:[e.id],...i})};e.spaces.forEach(e=>{(e.outline.length<3||e.outline.some(e=>!$c(e))||!el(e.areaSquareMeters))&&r(e,`${e.id} 的 Zone 派生轮廓或面积无效`)}),e.walls.forEach(e=>{let t=$c(e.start)&&$c(e.end)?Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]):null;!$c(e.start)||!$c(e.end)?r(e,`${e.name??e.id} 的起点或终点不是有限坐标`,{field:`wall.start/end`,actualValue:`start=${JSON.stringify(e.start)}, end=${JSON.stringify(e.end)}`,expectedValue:`两个有限 [x,z] 坐标`,origin:`source_data`,recommendation:`检查 Pascal Wall.start 和 Wall.end。`}):t<=Ic.lengthMeters&&r(e,`${e.name??e.id} 的起点与终点重合，墙长为 0 mm`,{field:`wall.lengthMeters`,actualValue:t,expectedValue:`大于 ${Ic.lengthMeters} m`,origin:`source_data`,recommendation:`删除残留零长度墙，或为该墙提供不同的起点和终点。`}),el(e.thicknessMeters)||r(e,`${e.name??e.id} 的墙厚无效`,{field:`wall.thicknessMeters`,actualValue:e.thicknessMeters,expectedValue:`大于 ${Ic.lengthMeters} m`,origin:`source_data`,recommendation:`检查 Pascal Wall.thickness。`})}),[...e.doors,...e.windows].forEach(e=>{(!el(e.widthMeters)||!el(e.heightMeters)||!$c(e.rawWallLocalPosition))&&r(e,`${e.id} 的门窗尺寸或墙局部坐标无效`)}),[...e.furniture,...e.equipment,...e.columns].forEach(e=>{(!e.dimensionsMeters||e.dimensionsMeters.some(e=>!el(e))||e.transformStatus!==`ok`||!$c(e.resolvedWorldPosition))&&r(e,`${e.id} 的物体尺寸或解析坐标无效`)}),e.shelves.forEach(e=>{e.dimensionsMeters.some(e=>!el(e))&&r(e,`${e.id} 的架体尺寸无效`)});let i=e.walls.filter(e=>Yc(t).includes(e.id));return Qc(`G1-004`,`对象尺寸与坐标有效`,t.length?`issue`:`pass`,t.length?`${Yc(t).length} 个对象存在无效尺寸或坐标`:`已提供的评价对象尺寸与坐标有效`,{details:n.map(e=>e.message),normalizedObjectIds:Yc(t),pascalSourceIds:Xc(t),measurements:[{name:`invalidObjectCount`,value:Yc(t).length},...i.flatMap(e=>[{name:`wallStart`,value:JSON.stringify(e.start),normalizedObjectId:e.id},{name:`wallEnd`,value:JSON.stringify(e.end),normalizedObjectId:e.id},{name:`wallLength`,value:e.start&&e.end?Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]):null,unit:`m`,normalizedObjectId:e.id},{name:`wallThickness`,value:e.thicknessMeters,unit:`m`,normalizedObjectId:e.id},{name:`wallHeight`,value:e.heightMeters,unit:`m`,normalizedObjectId:e.id},{name:`wallCurveOffset`,value:e.curveOffsetMeters,unit:`m`,normalizedObjectId:e.id},{name:`footprintValid`,value:e.footprintValidation.valid,normalizedObjectId:e.id},{name:`footprintArea`,value:e.footprintValidation.areaSquareMeters,unit:`m²`,normalizedObjectId:e.id},{name:`footprintCodes`,value:e.footprintValidation.codes.join(`, `),normalizedObjectId:e.id}])],thresholds:[{name:`minimumLength`,value:Ic.lengthMeters,unit:`m`},{name:`minimumArea`,value:Ic.areaSquareMeters,unit:`m²`}],confidence:Zc(`high`),diagnostics:n})},e=>{let t=[...Jc(e),...e.zones,...e.unclassifiedNodes.map(e=>({...e,levelId:null,parentId:null}))],n=new Set(t.map(e=>e.id)),r=[],i=[],a=[],o=(e,t,o,s=`现有标准化对象 ID`)=>{if(t&&!n.has(t)){r.push(e);let n=`${e.id}: ${o} ${t} 不存在`;i.push(n),a.push({severity:`error`,code:`missing_reference`,message:`${e.name??e.id} 的 ${o} 指向项目中不存在的对象`,normalizedObjectIds:[e.id],field:o,actualValue:t,expectedValue:s,origin:`source_data`,recommendation:`检查源 Pascal JSON 中的引用 ID；若项目经历复制或楼层重建，请重新关联该对象。`})}};return Jc(e).forEach(e=>o(e,e.parentId,`parentId`)),[...e.doors,...e.windows].forEach(e=>o(e,e.hostWallId,`hostWallId`)),e.spaces.forEach(e=>o(e,e.sourceZoneId,`sourceZoneId`)),e.stairs.forEach(e=>{o(e,e.fromLevelId,`fromLevelId`,`现有 Level ID`),o(e,e.toLevelId,`toLevelId`,`现有 Level ID`)}),e.shelves.forEach(e=>e.childItemIds.forEach(t=>o(e,t,`childItemId`))),Qc(`G1-005`,`对象关联关系有效`,r.length?`issue`:`pass`,r.length?`发现 ${i.length} 条失效引用`:`已声明的对象引用均可解析`,{details:i,normalizedObjectIds:Yc(r),pascalSourceIds:Xc(r),measurements:[{name:`brokenReferenceCount`,value:i.length},{name:`knownLevelIds`,value:e.levels.map(e=>e.id).join(`, `)}],thresholds:[{name:`maximumBrokenReferenceCount`,value:0}],missingData:i,confidence:Zc(`high`),diagnostics:a})},e=>{let t=Wc(e),n=t.filter(e=>!e.usableForEvaluation),r=n.filter(e=>e.sourceType!==`none`),i=r.length?`issue`:n.length?`unable_to_determine`:`pass`;return Qc(`G1-006`,`建筑平面边界能够识别`,i,i===`pass`?`${t.length} 个参与评价楼层均已由 Slab 轮廓识别有效建筑范围`:r.length?`${r.length} 个楼层的 Slab 边界存在明确几何异常`:`${n.length} 个楼层缺少可作为建筑范围的可靠 Slab 轮廓`,{details:t.flatMap(e=>e.diagnostics.map(t=>`${e.levelId}: ${t.message}`)),normalizedObjectIds:t.flatMap(e=>[e.levelId,...e.sourceObjectIds]),pascalSourceIds:t.flatMap(e=>e.pascalSourceIds),measurements:t.flatMap(e=>[{name:`envelopeArea`,value:e.areaSquareMeters,unit:`m²`,normalizedObjectId:e.levelId},{name:`polygonCount`,value:e.polygons.length,normalizedObjectId:e.levelId},{name:`holeCount`,value:e.holes.length,normalizedObjectId:e.levelId},{name:`usableForEvaluation`,value:e.usableForEvaluation,normalizedObjectId:e.levelId},{name:`sourceType`,value:e.sourceType,normalizedObjectId:e.levelId}]),thresholds:[{name:`minimumEnvelopeArea`,value:Ic.areaSquareMeters,unit:`m²`},{name:`boundaryContactTolerance`,value:Ic.pointOnBoundaryMeters,unit:`m`}],missingData:n.flatMap(e=>e.diagnostics.map(t=>`${e.levelId}: ${t.message}`)),confidence:Zc(i===`pass`?`medium`:`low`,t.flatMap(e=>e.diagnostics.map(e=>e.message))),diagnostics:n.flatMap(e=>e.diagnostics.map(t=>({severity:e.sourceType===`none`?`warning`:`error`,code:t.code,message:t.message,normalizedObjectIds:[e.levelId,...e.sourceObjectIds],origin:e.sourceType===`none`?`insufficient_information`:`source_data`,recommendation:`补充或修复该楼层的可见室内 Floor/Slab Polygon；Zone 不会被当作建筑边界。`})))})},e=>{let t=[...e.doors,...e.windows];if(!t.length)return Qc(`G1-013`,`门窗位于有效开口边界`,`not_applicable`,`项目中没有门窗对象`,{confidence:Zc(`high`)});let n=new Map(e.walls.map(e=>[e.id,e])),r=t.map(e=>Lc(e,e.hostWallId?n.get(e.hostWallId):void 0)),i=r.filter(e=>e.status===`outside`),a=r.filter(e=>e.status===`invalid`||e.status===`unsupported`),o=t.filter(e=>[...i,...a].some(t=>t.openingId===e.id)),s=i.length?`issue`:a.length?`unable_to_determine`:`pass`,c=new Map(t.map(e=>[e.id,e])),l=r.filter(e=>e.status!==`inside`),u=l.map(e=>{let t=c.get(e.openingId);if(e.status===`outside`){let n=(e.rightOvershootMeters??0)>0?`右侧`:`左侧`,r=Math.max(e.rightOvershootMeters??0,e.leftOvershootMeters??0);return{severity:`error`,code:`opening_outside_host_wall`,message:`${t.name??t.id} 的洞口${n}超出宿主墙端约 ${(r*1e3).toFixed(1)} mm`,normalizedObjectIds:[t.id,e.wallId],field:`opening.position[0] + opening.width / 2`,actualValue:`${e.openingEndMeters?.toFixed(6)} m`,expectedValue:`0–${e.wallLengthMeters?.toFixed(6)} m（容差 ±${Ic.pointOnBoundaryMeters} m）`,origin:`source_data`,recommendation:`检查窗户位置、洞口宽度或宿主墙关系；此检查使用 Pascal width 洞口宽度，不使用 frameThickness/frameDepth 或模型包围盒。`}}return{severity:`warning`,code:e.status===`unsupported`?`curved_wall_opening_unsupported`:`invalid_opening_geometry`,message:e.reason??`无法判断`,normalizedObjectIds:[t.id],origin:e.status===`unsupported`?`insufficient_information`:`source_data`,recommendation:e.status===`unsupported`?`提供沿曲线弧长的门窗定位后再检查。`:`修复宿主墙或门窗的几何字段后再检查。`}});return Qc(`G1-013`,`门窗位于有效开口边界`,s,i.length?`${i.length} 个门窗超出直墙有效区间`:a.length?`${a.length} 个门窗因几何或宿主证据不足无法判断`:`所有可评价门窗均位于直墙有效区间`,{details:l.map(e=>`${e.openingId}: ${e.status}${e.reason?`（${e.reason}）`:``}`),normalizedObjectIds:Yc(o),pascalSourceIds:Xc(o),measurements:l.flatMap(e=>{let t=c.get(e.openingId);return[{name:`wallLength`,value:e.wallLengthMeters,unit:`m`,normalizedObjectId:e.openingId},{name:`openingCenterAlongWall`,value:e.openingCenterMeters,unit:`m`,normalizedObjectId:e.openingId},{name:`openingWidth`,value:t.widthMeters,unit:`m`,normalizedObjectId:e.openingId},{name:`openingStart`,value:e.openingStartMeters,unit:`m`,normalizedObjectId:e.openingId},{name:`openingEnd`,value:e.openingEndMeters,unit:`m`,normalizedObjectId:e.openingId},{name:`rightOvershoot`,value:e.rightOvershootMeters,unit:`m`,normalizedObjectId:e.openingId},{name:`leftOvershoot`,value:e.leftOvershootMeters,unit:`m`,normalizedObjectId:e.openingId},{name:`resolvedWorldPosition`,value:JSON.stringify(t.resolvedWorldPosition),normalizedObjectId:e.openingId}]}),thresholds:[{name:`pointOnBoundaryTolerance`,value:Ic.pointOnBoundaryMeters,unit:`m`}],missingData:a.map(e=>`${e.openingId}: ${e.reason}`),confidence:Zc(a.length?`medium`:`high`,a.map(e=>`${e.openingId}: ${e.reason}`)),diagnostics:u})},e=>{if(!e.spaces.length)return Qc(`G1-019`,`主要空间具有明确名称`,`unable_to_determine`,`没有可供检查的 Space`,{missingData:[`spaces`],confidence:Zc(`low`,[`Pascal 当前未提供独立 Space`]),diagnostics:[{severity:`warning`,code:`space_semantics_unavailable`,message:`Space 仅由 Zone 派生，无法识别主要空间`,normalizedObjectIds:[]}]});let t=e.spaces.filter(e=>!e.name?.trim());return Qc(`G1-019`,`主要空间具有明确名称`,`unable_to_determine`,t.length?`当前 ${e.spaces.length} 个 Zone 派生 Space 中有 ${t.length} 个未命名；仍无法确认主要空间全集`:`当前 ${e.spaces.length} 个 Zone 派生 Space 均有名称；但无法确认主要空间是否全部命名`,{details:t.map(e=>`${e.id} 未命名`),normalizedObjectIds:Yc(t),pascalSourceIds:Xc(t),measurements:[{name:`derivedSpaceCount`,value:e.spaces.length},{name:`unnamedDerivedSpaceCount`,value:t.length}],thresholds:[{name:`requiredNonBlankName`,value:!0}],missingData:[`独立 Space 对象`,`主要空间分类或用途语义`,`完整封闭房间识别结果`],confidence:Zc(`low`,[`Space 由 Zone 一对一派生`,`Zone 不保证是封闭房间或完整房间分区`]),diagnostics:[{severity:`warning`,code:`zone_derived_space_limit`,message:`当前 Zone 派生 Space 均有名称；这不代表已经发现未命名房间，也不能证明所有主要空间均已命名。`,normalizedObjectIds:e.spaces.map(e=>e.id),origin:`insufficient_information`,recommendation:`提供独立房间识别结果以及主要空间分类后再运行此规则。`}]})},e=>{let t=new Map(Wc(e).map(e=>[e.levelId,e])),n=new Set([`vehicles`]),r=[...e.furniture,...e.equipment].filter(e=>!n.has(e.category??``)),i=Ic.pointOnBoundaryMeters**2*2;if(!r.length)return Qc(`G1-023`,`家具与设备位于有效建筑范围`,`not_applicable`,`没有参与室内平面评价的家具或设备`);let a=[],o=[],s=[],c=[];for(let e of r){let n=Gc(e),r=e.levelId?t.get(e.levelId):void 0;if(!e.category||!n){o.push(e),c.push({severity:`warning`,code:`item_footprint_unavailable`,message:`${e.name??e.id} 缺少可靠的类别、尺寸或平面坐标`,normalizedObjectIds:[e.id],origin:`insufficient_information`,recommendation:`补充对象类别、宽度、深度和可解析的平面位置后再检查。`});continue}if(!r?.usableForEvaluation){o.push(e),c.push({severity:`warning`,code:`building_envelope_unavailable`,message:`${e.name??e.id} 所属楼层没有可靠建筑边界`,normalizedObjectIds:[e.id],origin:`insufficient_information`,recommendation:`先补充该楼层的有效 Floor/Slab Polygon。`});continue}let l=Kc(n,r),u=zc(n);if(l===null){o.push(e),c.push({severity:`warning`,code:`containment_geometry_failed`,message:`${e.name??e.id} 的包含关系几何计算失败`,normalizedObjectIds:[e.id],origin:`insufficient_information`});continue}let d=u>0?l/u:null;l>i&&(a.push(e),s.push({name:`footprintArea`,value:u,unit:`m²`,normalizedObjectId:e.id},{name:`outsideArea`,value:l,unit:`m²`,normalizedObjectId:e.id},{name:`outsideAreaRatio`,value:d,normalizedObjectId:e.id},{name:`envelopeArea`,value:r.areaSquareMeters,unit:`m²`,normalizedObjectId:e.id}),c.push({severity:`error`,code:`item_outside_building_envelope`,message:`${e.name??e.id} 有 ${(l*1e6).toFixed(0)} mm² 的平面占地越出建筑范围`,normalizedObjectIds:[e.id,...r.sourceObjectIds],field:`footprint`,actualValue:l,expectedValue:`≤ ${i} m²`,origin:`source_data`,recommendation:`检查家具/设备位置、尺寸或所属楼层；如该对象属于室外，请使用明确的室外分类。`}))}let l=a.length?`issue`:o.length?`unable_to_determine`:`pass`,u=[...a,...o];return Qc(`G1-023`,`家具与设备位于有效建筑范围`,l,a.length?`${a.length} 个家具或设备部分或完全位于建筑范围外`:o.length?`${o.length} 个家具或设备因边界、类别或占地信息不足无法判断`:`${r.length} 个参与评价的家具和设备均位于有效建筑范围内`,{normalizedObjectIds:Yc(u),pascalSourceIds:Xc(u),measurements:[{name:`participatingItemCount`,value:r.length},{name:`outsideItemCount`,value:a.length},{name:`unableToDetermineItemCount`,value:o.length},...s],thresholds:[{name:`outsideAreaTolerance`,value:i,unit:`m²`},{name:`boundaryContactTolerance`,value:Ic.pointOnBoundaryMeters,unit:`m`}],missingData:o.map(e=>`${e.id}: 需要可靠的对象 footprint 与所属 Level 建筑边界`),confidence:Zc(l===`pass`?`medium`:o.length?`low`:`medium`,[`建筑边界由 Slab 并集推导`,...o.map(e=>`${e.id} 缺少包含关系输入`)]),diagnostics:c,details:c.map(e=>e.message)})}];function nl(e,t=new Date().toISOString()){let n=tl.map(t=>t(e)),r={pass:0,issue:0,unable_to_determine:0,not_applicable:0};n.forEach(e=>r[e.status]++);let i=r.issue?`issue`:r.unable_to_determine?`unable_to_determine`:r.pass?`pass`:`not_applicable`;return{reportVersion:`1.0`,handoffSchemaVersion:e.schemaVersion,generatedAt:t,scope:`G1-foundation`,overallStatus:i,counts:r,tolerances:Ic,rules:n,diagnostics:e.diagnostics}}var rl=(e,t)=>e.measurements.find(e=>e.name===t)?.value,il=(e,t)=>e?t[e]?.name||`未命名楼层`:`楼层未确定`;function al(e,t){if(e.status!==`issue`)return[];let n=e.normalizedObjectIds.map(e=>t[e]).filter(e=>!!e);return(e.ruleId===`G1-004`?n.filter(e=>e.type===`wall`):e.ruleId===`G1-005`?n.filter(e=>e.type===`stair`):e.ruleId===`G1-013`?n.filter(e=>e.type===`window`||e.type===`door`):e.ruleId===`G1-023`?n.filter(e=>e.type===`item`):[]).map((n,r)=>{let i=Wa(n.id,t).levelId??null,a=il(i??void 0,t),o=e.ruleId===`G1-004`?`无效墙体 ${r+1}`:e.ruleId===`G1-023`?`${n.name||`家具或设备`} ${r+1}`:n.type===`stair`?`楼梯`:n.type===`window`?`窗户`:`门`,s=e.ruleId===`G1-013`?n.wallId??n.parentId:null;return{primaryId:n.id,relatedIds:s&&t[s]?[s]:[],label:`${o} · ${a}`,levelId:i,levelName:a}})}function ol(e,t){let n=al(e,t),r=n.length;if(e.ruleId===`G1-004`&&e.status===`issue`)return{title:`发现 ${r} 段无效墙体`,description:`这些墙段的起点和终点重合，实际长度为 0，可能是误操作产生的无效墙段。`,rationale:`零长度墙无法形成有效墙面，也可能影响后续尺寸、开口和空间检查。`,recommendation:`在图中逐段定位后删除无效墙体，或重新确定墙体的起点和终点。`,problemCountLabel:String(r),targets:n};if(e.ruleId===`G1-005`&&e.status===`issue`)return{title:`楼梯的楼层关联已丢失`,description:`这座楼梯记录的起始楼层和到达楼层在当前项目中都不存在，因此无法确认它实际连接的楼层。`,rationale:`楼层关联缺失会使跨层关系、到达层入口和后续通行检查失去依据。`,recommendation:`检查楼梯的上下楼层设置，并重新关联到项目中的有效楼层。`,supplemental:`可以在图中定位楼梯本身；缺失的楼层无法高亮。`,problemCountLabel:String(r),targets:n};if(e.ruleId===`G1-013`&&e.status===`issue`){let t=Number(rl(e,`rightOvershoot`)??rl(e,`leftOvershoot`)),i=Number(e.thresholds.find(e=>e.name===`pointOnBoundaryTolerance`)?.value);return{title:`窗户超出所在墙体`,description:`该窗洞右侧超出宿主墙约 ${Number.isFinite(t)?Math.round(t*1e3):`—`} 毫米，超过当前允许的 ${Number.isFinite(i)?Math.round(i*1e3):`—`} 毫米几何容差。`,rationale:`超出墙端的洞口可能造成墙体与窗洞关系错误，并影响施工尺寸。`,recommendation:`检查窗户位置、洞口宽度或宿主墙长度。`,problemCountLabel:String(r),targets:n}}if(e.ruleId===`G1-019`&&e.status===`unable_to_determine`)return{title:`主要空间名称暂时无法完整核验`,description:`当前 ${Number(rl(e,`derivedSpaceCount`)??0)} 个 Zone 派生空间均有名称，但系统还不能确认这些 Zone 是否覆盖全部主要房间。`,rationale:`目前缺少独立房间识别和主要空间分类，不能对房间全集作结论。`,recommendation:`补充独立房间识别和主要空间分类后再核验。`,supplemental:`这不代表已经发现未命名房间。`,problemCountLabel:`未确定`,targets:[]};if(e.ruleId===`G1-006`){let t=Number(+(rl(e,`usableForEvaluation`)===!1));return{title:e.status===`pass`?`已识别各楼层的建筑范围`:`建筑范围暂时无法可靠识别`,description:e.status===`pass`?`系统已根据楼层中的 Floor/Slab 轮廓生成建筑平面范围。`:`当前 Floor/Slab 轮廓不足或存在异常，系统不能可靠判断该楼层的室内建筑范围。`,rationale:`建筑范围是判断家具、设备和后续空间关系的共同依据。`,recommendation:e.status===`pass`?`可在画布中打开“显示建筑边界”核对结果。`:`检查该楼层的 Floor/Slab 轮廓是否完整、闭合且属于室内区域。`,problemCountLabel:e.status===`pass`?`0`:String(Math.max(1,t)),targets:[]}}return e.ruleId===`G1-023`&&e.status===`issue`?{title:`发现 ${r} 个家具或设备越出建筑范围`,description:`这些对象的实际平面占地有一部分落在计算出的建筑范围之外。`,rationale:`越界对象可能影响布置、施工尺寸或室内外功能判断。`,recommendation:`在图中定位后检查对象位置、尺寸和所属楼层；室外对象应使用明确的室外分类。`,problemCountLabel:String(r),targets:n}:e.ruleId===`G1-023`&&e.status===`unable_to_determine`?{title:`部分家具或设备暂时无法核验范围`,description:`缺少可靠建筑边界、对象占地或类别信息，系统不会猜测对象是否在室内。`,rationale:`需要同时具备可靠的建筑范围和对象平面占地，才能判断是否越界。`,recommendation:`补充 Floor/Slab 轮廓以及对象位置、宽度、深度和类别。`,problemCountLabel:`未确定`,targets:n}:{title:e.ruleName,description:e.summary,rationale:e.status===`pass`?`当前数据满足本项基础检查。`:`请查看技术详情了解判断依据。`,recommendation:e.status===`pass`||e.status===`not_applicable`?`无需处理。`:`根据技术详情补充或修正数据。`,problemCountLabel:e.status===`issue`?String(e.normalizedObjectIds.length):`0`,targets:n}}function sl(e,t){return e.flatMap(e=>ol(e,t).targets.map((t,n)=>({...t,ruleId:e.ruleId,targetIndex:n})))}var cl=e=>Array.isArray(e)&&e.length>=2&&e.slice(0,2).every(Number.isFinite),ll=(e,t=2.4,n=.55)=>{if(!e.length||e.some(e=>!Number.isFinite(e.x)||!Number.isFinite(e.z)))return null;let r=e.map(e=>e.x),i=e.map(e=>e.z),a=Math.max(...r)-Math.min(...r),o=Math.max(...i)-Math.min(...i),s=Math.max(t,a+n*2),c=Math.max(t,o+n*2),l=(Math.min(...r)+Math.max(...r))/2,u=(Math.min(...i)+Math.max(...i))/2;return{minX:l-s/2,minZ:u-c/2,width:s,height:c}};function ul(e,t){let n=e[t];if(!n)return{renderable:!1,levelId:null,viewBox:null,reason:`评价引用的对象已不存在。`};let r=Wa(n.id,e).levelId??null;if(!r)return{renderable:!1,levelId:null,viewBox:null,reason:`无法确定对象所属楼层。`};let i=[];if(n.type===`wall`&&cl(n.start)&&cl(n.end))i=[{x:n.start[0],z:n.start[1]},{x:n.end[0],z:n.end[1]}];else if(n.type===`door`||n.type===`window`){let t=$a(n,e),r=Number(n.width);if(t&&Number.isFinite(r)&&r>0){let e=Math.cos(t.rotationY)*r/2,n=Math.sin(t.rotationY)*r/2;i=[{x:t.x-e,z:t.z-n},{x:t.x+e,z:t.z+n}]}}else if(n.type===`stair`)i=Qo(n,e);else if(n.type===`shelf`)i=No(n,e);else if(n.type===`zone`)i=ts(n);else if(n.type===`item`){let t=Ya(n.id,e),r=qa(n);t.status===`ok`&&r&&(i=[{x:t.x-r.width/2,z:t.z-r.depth/2},{x:t.x+r.width/2,z:t.z+r.depth/2}])}let a=ll(i);return a?{renderable:!0,levelId:r,viewBox:a}:{renderable:!1,levelId:r,viewBox:null,reason:`该对象暂时无法在画布中显示。`}}function dl(e,t,n){return{ruleId:e,primaryId:t.primaryId,relatedIds:[...t.relatedIds],targetIndex:n}}function fl(e,t){return e?e.primaryId===t?`primary`:e.relatedIds.includes(t)?`related`:null:null}var pl=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),G=o(((e,t)=>{t.exports=pl()}))(),ml={images:!0,boxes:!1,centers:!1,axes:!1,names:!1,zones:!0,slabs:!0,walls:!0,shelves:!0,stairs:!0,openings:!0,dimensions:!0},hl={minX:-5,minZ:-5,width:10,height:10},gl=90,_l=(e,t)=>t===`millimeters`?`${Ws(e,t)} mm`:Ws(e,t);function vl(){let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)(`未导入文件`),[i,a]=(0,_.useState)([{id:1,levelId:``,viewBox:hl,rotation:gl}]),[o,s]=(0,_.useState)(2),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)([]),[g,v]=(0,_.useState)(`off`),[b,x]=(0,_.useState)(`millimeters`),[S,C]=(0,_.useState)(0),[w,ee]=(0,_.useState)(null),[T,E]=(0,_.useState)([]),[D,te]=(0,_.useState)(!1),[ne,O]=(0,_.useState)(null),[k,A]=(0,_.useState)([]),[j,M]=(0,_.useState)(null),[N,P]=(0,_.useState)(null),[re,ie]=(0,_.useState)(ml),ae=(0,_.useRef)(null),oe=(0,_.useRef)(1),se=(0,_.useRef)({}),F=e?.nodes||{},ce=Object.values(F).filter(e=>e.type===`level`);(0,_.useEffect)(()=>{let e=e=>{e.key===`Escape`&&v(`off`)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]),(0,_.useEffect)(()=>$s(()=>C(e=>e+1)),[]);let I=(e,n)=>{try{let i=Ba(JSON.parse(e));i.diagnostics=[...i.diagnostics,...ro(i.nodes)];let o=Object.values(i.nodes).find(e=>e.type===`level`)?.id||``;t(i),ee(null),E([]),te(!1),O(null),A([]),M(null),P(null),r(n),l(null),d(null),p(null),h([]),v(`off`),oe.current=1,a([{id:1,levelId:o,viewBox:Sl(i.nodes,o,!0),rotation:gl}]),s(2)}catch{ee(null),E([]),te(!1),O(null),A([]),M(null),P(null),t({nodes:{},raw:null,diagnostics:[{severity:`error`,code:`invalid_json`,message:`无法解析 JSON 文件`}]})}};(0,_.useEffect)(()=>{I(y,`Bellevue demo.json`)},[]);let le=(e,t)=>a(n=>n.map(n=>n.id===e?{...n,...t}:n)),ue=()=>{let e=i[0]?.levelId||ce[0]?.id||``;a(t=>[...t,{id:o,levelId:e,viewBox:Sl(F,e,re.dimensions),rotation:gl}]),s(e=>e+1)},de=e=>a(t=>t.length>1?t.filter(t=>t.id!==e):t),fe=(0,_.useMemo)(()=>Object.values(F).filter(e=>e.type===`level`).flatMap(e=>Ts(F,e.id).diagnostics),[F]),pe=(0,_.useMemo)(()=>oc(F),[F,S]),me=(0,_.useMemo)(()=>kc(F,Array.isArray(e?.raw?.installedPlugins)?e.raw.installedPlugins:[],re),[F,e,re]),he=(0,_.useMemo)(()=>e?[...e.diagnostics,...ql(F),...me.diagnostics,...fe,...pe]:[],[e,F,me,fe,pe]),ge=e=>{let t=!re[e];ie(n=>e===`images`?{...n,images:t,shelves:t}:e===`centers`?{...n,centers:t,axes:t}:{...n,[e]:t}),e===`dimensions`&&a(e=>e.map(e=>({...e,viewBox:Sl(F,e.levelId,t)})))},_e=()=>{if(e)try{let t=Fc(e),n=nl(t);ee(n),E(Wc(t)),A(sl(n.rules,F).map(e=>dl(e.ruleId,e,e.targetIndex))),M(null),O(null),P(null)}catch(e){ee(null),O(e instanceof Error?e.message:`评价器发生未知错误`)}},ve=e=>{window.setTimeout(()=>se.current[e]?.scrollIntoView({behavior:`smooth`,block:`center`}),0)},ye=(e,t,n,r=!1)=>{let i=ul(F,t.primaryId);if(P(i.renderable?null:i.reason??`该对象暂时无法在画布中显示。`),!i.renderable||!i.levelId||!i.viewBox){M(null);return}M(dl(e,t,n)),r&&ve(e),l(t.primaryId),d(null),p(null),v(`off`);let o=F[t.primaryId]?.type;ie(e=>({...e,walls:o===`wall`||t.relatedIds.some(e=>F[e]?.type===`wall`)?!0:e.walls,openings:o===`door`||o===`window`||e.openings,stairs:o===`stair`||e.stairs})),a(e=>{let t=e.findIndex(e=>e.levelId===i.levelId),n=t>=0?t:0;return e.map((e,t)=>t===n?{...e,levelId:i.levelId,viewBox:i.viewBox}:e)})},be=e=>{let t=w?.rules.find(t=>t.ruleId===e.ruleId),n=t&&ol(t,F).targets[e.targetIndex];n&&ye(e.ruleId,n,e.targetIndex,!0)},xe=e=>{l(e),d(null),p(null),(!e||!k.some(t=>e===t.primaryId||t.relatedIds.includes(e)))&&(A([]),M(null))};return(0,G.jsxs)(`div`,{className:`app`,children:[(0,G.jsxs)(`header`,{className:`topbar`,children:[(0,G.jsxs)(`div`,{className:`brand`,children:[(0,G.jsx)(`b`,{children:`Pascal Layout Auditor`}),(0,G.jsx)(`span`,{children:`只读 JSON 几何核验`})]}),(0,G.jsxs)(`div`,{className:`actions`,children:[(0,G.jsx)(`button`,{className:`primary`,onClick:()=>ae.current?.click(),children:`导入 JSON`}),(0,G.jsx)(`button`,{onClick:()=>I(y,`Bellevue demo.json`),children:`加载示例`}),(0,G.jsx)(`input`,{ref:ae,hidden:!0,type:`file`,accept:`.json,application/json`,onChange:e=>e.target.files?.[0]?.text().then(t=>I(t,e.target.files[0].name))}),(0,G.jsx)(`span`,{className:`file`,children:n})]})]}),(0,G.jsxs)(`main`,{className:`workspace`,children:[(0,G.jsxs)(`aside`,{className:`sidebar`,children:[(0,G.jsxs)(`section`,{className:`side-section`,children:[(0,G.jsx)(`div`,{className:`side-heading`,children:(0,G.jsx)(`h2`,{children:`显示图层`})}),(0,G.jsxs)(`div`,{className:`visibility`,children:[Object.entries({images:`家具模型`,boxes:`物理占地框`,centers:`家具中心`,names:`家具名称`,zones:`Zone`,slabs:`Slab（楼地面）`,walls:`墙体`,openings:`门窗`,stairs:`楼梯`,dimensions:`外围尺寸`}).map(([e,t])=>(0,G.jsxs)(`label`,{children:[(0,G.jsx)(`input`,{type:`checkbox`,checked:re[e],onChange:()=>ge(e)}),t]},e)),(0,G.jsxs)(`label`,{children:[(0,G.jsx)(`input`,{type:`checkbox`,checked:D,onChange:()=>te(e=>!e)}),`显示建筑边界`]})]})]}),(0,G.jsx)(J,{node:c?F[c]:null,nodes:F,coverage:me,dimension:u,manualMeasurement:m.find(e=>e.id===f)??null,measurementUnit:b}),(0,G.jsx)(Hl,{nodes:F}),(0,G.jsx)(Kl,{report:w,nodes:F,error:ne,focusMessage:N,activeHighlight:j,disabled:!e||!Object.keys(F).length,onRun:_e,onFocus:ye,onRegisterRule:(e,t)=>{se.current[e]=t}}),(0,G.jsx)(Jl,{diagnostics:he})]}),(0,G.jsxs)(`section`,{className:`canvas-workspace`,children:[(0,G.jsxs)(`div`,{className:`canvas-workspace-head`,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`span`,{className:`eyebrow`,children:`PLAN VIEWS`}),(0,G.jsx)(`h1`,{children:`画布工作区`})]}),(0,G.jsxs)(`div`,{className:`measurement-toolbar`,children:[(0,G.jsxs)(`label`,{children:[`全局单位 `,(0,G.jsxs)(`select`,{value:b,onChange:e=>x(e.target.value),children:[(0,G.jsx)(`option`,{value:`millimeters`,children:`公制（mm / m²）`}),(0,G.jsx)(`option`,{value:`feet-inches`,children:`英制（ft-in / ft²）`})]})]}),(0,G.jsx)(`button`,{className:`measure-toggle ${g===`off`?``:`active`}`,title:`开启后点击两点测量；按一次 Shift 切换正交；Esc 退出`,onClick:()=>v(e=>e===`off`?`aligned`:`off`),children:g===`off`?`测量`:`退出测量`}),(0,G.jsx)(`button`,{className:`primary`,onClick:ue,children:`+ 添加画布`})]})]}),(0,G.jsx)(`div`,{className:`canvas-grid count-${Math.min(i.length,4)}`,children:i.map(e=>(0,G.jsx)(yl,{canvas:e,nodes:F,levels:ce,visibility:re,selectedId:c,evaluationHighlights:k,activeEvaluationHighlight:j,buildingEnvelopes:T,showBuildingEnvelope:D,measurementMode:g,measurementUnit:b,manualMeasurements:m.filter(t=>t.levelId===(e.levelId||ce[0]?.id||``)),selectedManualId:f,onSelect:xe,onClearEvaluationHighlight:()=>{A([]),M(null),P(null)},onActivateEvaluationHighlight:be,onSelectDimension:e=>{l(null),d(e),p(null)},onCreateMeasurement:e=>{let t={...e,id:`measure-${oe.current++}`,createdAt:Date.now()};h(e=>[...e,t]),l(null),d(null),p(t.id)},onSelectManual:e=>{l(null),d(null),p(e)},onDeleteManual:e=>{h(t=>t.filter(t=>t.id!==e)),p(t=>t===e?null:t)},onUpdate:le,onRemove:de,canRemove:i.length>1},e.id))})]})]})]})}function yl({canvas:e,nodes:t,levels:n,visibility:r,selectedId:i,evaluationHighlights:a,activeEvaluationHighlight:o,buildingEnvelopes:s,showBuildingEnvelope:c,onSelect:l,onClearEvaluationHighlight:u,onActivateEvaluationHighlight:d,onSelectDimension:f,measurementMode:p,measurementUnit:m,manualMeasurements:h,selectedManualId:g,onCreateMeasurement:_,onSelectManual:v,onDeleteManual:y,onUpdate:b,onRemove:x,canRemove:S}){let C=e.levelId||n[0]?.id||``;return(0,G.jsxs)(`article`,{className:`canvas-card`,children:[(0,G.jsxs)(`div`,{className:`canvas-card-head`,children:[(0,G.jsxs)(`label`,{children:[`楼层`,` `,(0,G.jsx)(`select`,{value:C,onChange:n=>b(e.id,{levelId:n.target.value,viewBox:Sl(t,n.target.value,r.dimensions)}),children:n.map(e=>(0,G.jsx)(`option`,{value:e.id,children:e.name||e.id},e.id))})]}),(0,G.jsxs)(`div`,{className:`canvas-tools`,children:[(0,G.jsx)(`button`,{title:`逆时针旋转 90°`,onClick:()=>b(e.id,{rotation:(e.rotation+270)%360}),children:`↶ 90°`}),(0,G.jsx)(`button`,{title:`顺时针旋转 90°`,onClick:()=>b(e.id,{rotation:(e.rotation+90)%360}),children:`↷ 90°`}),(0,G.jsx)(`button`,{onClick:()=>b(e.id,{viewBox:Sl(t,C,r.dimensions)}),children:`适配`}),S&&(0,G.jsx)(`button`,{className:`danger`,title:`移除此画布`,onClick:()=>x(e.id),children:`×`})]})]}),(0,G.jsx)(Cl,{nodes:t,levelId:C,viewBox:e.viewBox,rotation:e.rotation,setViewBox:t=>b(e.id,{viewBox:t}),visibility:r,selectedId:i,evaluationHighlights:a,activeEvaluationHighlight:o,buildingEnvelope:s.find(e=>e.levelId===C)??null,showBuildingEnvelope:c,onSelect:l,onClearEvaluationHighlight:u,onActivateEvaluationHighlight:d,onSelectDimension:f,measurementMode:p,measurementUnit:m,manualMeasurements:h,selectedManualId:g,onCreateMeasurement:_,onSelectManual:v,onDeleteManual:y})]})}function bl(e,t){return Object.values(e).filter(n=>Wa(n.id,e).levelId===t)}function xl(e,t){return Object.values(e).filter(n=>n.type===`stair`&&n.stairType===`spiral`&&n.toLevelId===t&&Wa(n.id,e).levelId!==t)}function Sl(e,t,n=!0){let r=[],i=bl(e,t),a=new Map(To(i.filter(e=>e.type===`wall`)).map(e=>[e.wallId,e]));for(let t of i)if(t.type===`wall`){let e=a.get(t.id);e?.validation.valid&&r.push(...e.footprint.map(e=>({x:e.x,z:e.y})))}else if((t.type===`zone`||t.type===`slab`)&&Array.isArray(t.polygon))for(let e of t.polygon)Array.isArray(e)&&r.push({x:e[0],z:e[2]??e[1]});else if(t.type===`item`){let n=Ya(t.id,e),i=qa(t);n.status===`ok`&&i&&r.push({x:n.x-i.width/2,z:n.z-i.depth/2},{x:n.x+i.width/2,z:n.z+i.depth/2})}else t.type===`shelf`?r.push(...No(t,e)):t.type===`stair`&&r.push(...Qo(t,e));for(let n of xl(e,t))r.push(...zo(n));return n&&t&&r.push(...Ps(Ts(e,t))),eo(r,1)}function Cl({nodes:e,levelId:t,viewBox:n,rotation:r,setViewBox:i,visibility:a,selectedId:o,evaluationHighlights:s,activeEvaluationHighlight:c,buildingEnvelope:l,showBuildingEnvelope:u,onSelect:d,onClearEvaluationHighlight:f,onActivateEvaluationHighlight:p,onSelectDimension:m,measurementMode:h,measurementUnit:g,manualMeasurements:v,selectedManualId:y,onCreateMeasurement:b,onSelectManual:x,onDeleteManual:S}){let C=(0,_.useRef)(null),w=(0,_.useRef)(!1),ee=(0,_.useRef)(null),T=(0,_.useRef)(null),[E,D]=(0,_.useState)(null),[te,ne]=(0,_.useState)(null),[O,k]=(0,_.useState)(!1),A=bl(e,t),j=A.filter(e=>e.type===`item`),M=A.filter(e=>e.type===`zone`),N=A.filter(e=>e.type===`wall`),P=(0,_.useMemo)(()=>To(N),[N]),re=xl(e,t),ie=(0,_.useMemo)(()=>Ts(e,t),[e,t]),ae=n.minX+n.width/2,oe=n.minZ+n.height/2,se=`${n.minX} ${n.minZ} ${n.width} ${n.height}`,F=s.filter(n=>Wa(n.primaryId,e).levelId===t),ce=(0,_.useMemo)(()=>zs(e,t),[e,t]),I=qs(E?.point??null,te?.point??null,O);(0,_.useEffect)(()=>{D(null),ne(null),k(!1)},[h,t]),(0,_.useEffect)(()=>{let e=e=>{e.key===`Shift`&&!e.repeat&&k(e=>!e),e.key===`Escape`&&(D(null),ne(null)),(e.key===`Delete`||e.key===`Backspace`)&&y&&(e.preventDefault(),S(y))};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[y,S]);let le=e=>{let t=T.current?.getScreenCTM();if(!t)return null;let n=new DOMPoint(e.clientX,e.clientY).matrixTransform(t.inverse());return[n.x,n.y]},ue=e=>{let t=le(e);if(!t)return null;let r=ee.current?.clientWidth||1,i=ee.current?.clientHeight||1,a=Math.max(n.width/r,n.height/i)*12;return Hs(t,ce,a)},de=e=>{if(!E){D(e),ne(e);return}if(h===`off`)return;let n=qs(E.point,e.point,O);Ks(E.point,e.point,n).valueMeters>5e-4&&b({levelId:t,mode:n,start:E,end:e}),D(null),ne(null)};return(0,G.jsxs)(`div`,{className:`plan ${h===`off`?``:`measuring`}`,style:{userSelect:`none`,WebkitUserSelect:`none`},onWheel:e=>{e.preventDefault();let t=e.deltaY<0?.9:1.1,r=ee.current?.getScreenCTM();if(!r)return;let a=new DOMPoint(e.clientX,e.clientY).matrixTransform(r.inverse());i(to(n,{x:a.x,z:a.y},t))},onPointerDown:e=>{h!==`off`||e.button!==0||(C.current={x:e.clientX,y:e.clientY,box:n,moved:!1})},onPointerMove:e=>{if(h!==`off`||!C.current)return;let t=e.clientX-C.current.x,n=e.clientY-C.current.y;if(!C.current.moved&&Math.hypot(t,n)<3)return;C.current.moved||(C.current.moved=!0,e.currentTarget.setPointerCapture?.(e.pointerId));let a=no(t*C.current.box.width/(e.currentTarget.clientWidth||1),n*C.current.box.height/(e.currentTarget.clientHeight||1),r);i({...C.current.box,minX:C.current.box.minX+a.x,minZ:C.current.box.minZ+a.z})},onPointerUp:e=>{C.current&&(C.current?.moved&&(w.current=!0,window.setTimeout(()=>{w.current=!1},0)),C.current=null,e.currentTarget.hasPointerCapture?.(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId))},onPointerCancel:()=>{C.current=null},children:[(0,G.jsxs)(`svg`,{ref:ee,viewBox:se,onPointerMove:e=>{if(h!==`off`){let t=ue(e);t&&ne(t)}},onPointerLeave:()=>{E||ne(null)},onContextMenu:e=>{h!==`off`&&(e.preventDefault(),D(null),ne(null))},onClickCapture:e=>{if(w.current){e.preventDefault(),e.stopPropagation(),w.current=!1;return}let t=e.target,n=t.closest(`[data-delete-measurement]`)?.getAttribute(`data-delete-measurement`),r=t.closest(`[data-manual-measurement]`)?.getAttribute(`data-manual-measurement`);if(n||r){e.preventDefault(),e.stopPropagation(),n?S(n):r&&x(r);return}if(h===`off`)return;e.preventDefault(),e.stopPropagation();let i=ue(e);i&&de(i)},onClick:e=>{e.target.closest(`[data-selectable]`)||(d(null),x(null))},children:[(0,G.jsxs)(`defs`,{children:[(0,G.jsx)(`marker`,{id:`arrow-${t}`,markerWidth:`.18`,markerHeight:`.18`,refX:`.16`,refY:`.09`,orient:`auto`,children:(0,G.jsx)(`path`,{d:`M0,0 L.18,.09 L0,.18z`,fill:`#e75c3c`})}),(0,G.jsx)(`marker`,{id:`stair-up`,markerWidth:`.18`,markerHeight:`.18`,refX:`.16`,refY:`.09`,orient:`auto`,children:(0,G.jsx)(`path`,{d:`M0,0 L.18,.09 L0,.18z`,fill:`#171717`})}),(0,G.jsx)(`marker`,{id:`stair-down`,markerWidth:`.18`,markerHeight:`.18`,refX:`.16`,refY:`.09`,orient:`auto`,children:(0,G.jsx)(`path`,{d:`M0,0 L.18,.09 L0,.18z`,fill:`#59635f`})})]}),(0,G.jsx)(`rect`,{x:n.minX,y:n.minZ,width:n.width,height:n.height,fill:`#f7f8f5`}),(0,G.jsxs)(`g`,{ref:T,style:{transform:`rotate(${r}deg)`,transformOrigin:`${ae}px ${oe}px`,transition:`transform 240ms cubic-bezier(.2,.8,.2,1)`},children:[(0,G.jsxs)(`g`,{className:F.length?`evaluation-scene-dimmed`:void 0,children:[a.slabs&&A.filter(e=>e.type===`slab`&&e.visible!==!1).map(e=>(0,G.jsx)(Nl,{node:e,selected:o===e.id,onSelect:d},e.id)),a.zones&&M.map(e=>(0,G.jsx)(Dl,{node:e,onSelect:d},e.id)),a.walls&&P.map(t=>(0,G.jsx)(Pl,{node:e[t.wallId],footprint:t.footprint,valid:t.validation.valid,diagnosticCodes:t.validation.codes,selected:o===t.wallId,onSelect:d},t.wallId)),a.shelves&&A.filter(e=>e.type===`shelf`).map(t=>(0,G.jsx)(Fl,{node:t,nodes:e,selected:o===t.id,onSelect:d},t.id)),a.openings&&A.filter(e=>e.type===`door`||e.type===`window`).map(t=>(0,G.jsx)(Il,{node:t,nodes:e,selected:o===t.id,onSelect:d},t.id)),a.stairs&&A.filter(e=>e.type===`stair`).map(t=>(0,G.jsx)(Ll,{node:t,nodes:e,onSelect:d},t.id)),a.stairs&&re.map(e=>(0,G.jsx)(Rl,{node:e,onSelect:d},`entry-${e.id}`)),j.map(n=>(0,G.jsx)(q,{node:n,nodes:e,visibility:a,selected:o===n.id,viewRotation:r,markerId:`arrow-${t}`,onSelect:d},n.id)),a.zones&&M.map(e=>(0,G.jsx)(Ol,{node:e,viewRotation:r},`zone-label-${e.id}`)),a.dimensions&&(0,G.jsx)(kl,{report:ie,viewRotation:r,unit:g,onSelect:m}),(0,G.jsx)(Al,{measurements:v,preview:h!==`off`&&E&&te?{mode:I,start:E,end:te}:null,unit:g,viewRotation:r,selectedId:y,onSelect:x,onDelete:S}),h!==`off`&&te&&(0,G.jsx)(Ml,{snap:te,active:!!E})]}),F.length>0&&(0,G.jsx)(Tl,{highlights:F,activeHighlight:c,nodes:e,exactWalls:P,onActivate:p}),u&&l?.usableForEvaluation&&(0,G.jsx)(wl,{envelope:l})]})]}),h!==`off`&&(0,G.jsx)(`div`,{className:`measure-hint`,children:E?`${O?I===`horizontal`?`水平正交已开启`:`垂直正交已开启`:`自由对齐`} · 点击第二点 · Shift 切换正交 · Esc 退出`:`${O?`正交已开启`:`正交已关闭`} · 点击第一点 · Shift 切换正交 · Esc 退出`}),(0,G.jsx)(El,{rotation:r}),F.length>0&&(0,G.jsxs)(`div`,{className:`evaluation-highlight-legend`,children:[(0,G.jsxs)(`span`,{children:[(0,G.jsx)(`i`,{className:`primary`}),`问题对象（点击红框查看说明）`]}),(0,G.jsxs)(`span`,{children:[(0,G.jsx)(`i`,{className:`related`}),`关联对象`]}),(0,G.jsxs)(`span`,{children:[(0,G.jsx)(`i`,{className:`muted`}),`其他对象`]}),(0,G.jsx)(`button`,{onClick:f,children:`关闭高亮`})]}),(0,G.jsxs)(`div`,{className:`legend`,children:[_l(n.width,g),` × `,_l(n.height,g)]})]})}function wl({envelope:e}){return(0,G.jsx)(`g`,{className:`building-envelope-overlay`,pointerEvents:`none`,children:e.polygons.map((e,t)=>(0,G.jsx)(`g`,{children:e.map((e,t)=>(0,G.jsx)(`polygon`,{points:e.map(([e,t])=>`${e},${t}`).join(` `),fill:t===0?`#ed8b2c`:`#f7f8f5`,fillOpacity:t===0?`.05`:`1`,stroke:`#ed8b2c`,strokeWidth:t===0?`2`:`1`,vectorEffect:`non-scaling-stroke`},t))},t))})}function Tl({highlights:e,activeHighlight:t,nodes:n,exactWalls:r,onActivate:i}){let a=new Map(r.map(e=>[e.wallId,e])),o=new Map;return e.forEach(e=>[e.primaryId,...e.relatedIds].forEach(t=>{let n=fl(e,t);n&&(!o.has(t)||n===`primary`)&&o.set(t,{highlight:e,role:n})})),(0,G.jsx)(`g`,{className:`evaluation-highlight-overlay`,children:[...o.entries()].map(([e,r])=>{let{highlight:o,role:s}=r,c=n[e];if(!c||!s)return null;let l=s===`primary`?`#e23d35`:`#ed8b2c`,u=s===`primary`?.28:.18,d=t?.primaryId===o.primaryId,f=e=>{e.preventDefault(),e.stopPropagation(),i(o)};if(c.type===`wall`){let t=a.get(e);if(t?.validation.valid&&t.footprint.length>=3)return(0,G.jsx)(`polygon`,{className:d?`active`:void 0,"data-evaluation-highlight":e,"data-highlight-role":s,points:t.footprint.map(e=>`${e.x},${e.y}`).join(` `),fill:l,fillOpacity:u,stroke:l,strokeWidth:`3`,vectorEffect:`non-scaling-stroke`,onClick:f},e);if(Array.isArray(c.start)&&c.start.length>=2&&c.start.slice(0,2).every(Number.isFinite))return(0,G.jsxs)(`g`,{className:d?`active`:void 0,"data-evaluation-highlight":e,"data-highlight-role":s,onClick:f,children:[(0,G.jsx)(`circle`,{cx:c.start[0],cy:c.start[1],r:`.24`,fill:l,fillOpacity:u,stroke:l,strokeWidth:`3`,vectorEffect:`non-scaling-stroke`}),(0,G.jsx)(`line`,{x1:c.start[0]-.32,y1:c.start[1],x2:c.start[0]+.32,y2:c.start[1],stroke:l,strokeWidth:`2`,vectorEffect:`non-scaling-stroke`}),(0,G.jsx)(`line`,{x1:c.start[0],y1:c.start[1]-.32,x2:c.start[0],y2:c.start[1]+.32,stroke:l,strokeWidth:`2`,vectorEffect:`non-scaling-stroke`})]},e)}if(c.type===`door`||c.type===`window`){let t=$a(c,n),r=Number(c.width);if(t&&Number.isFinite(r)&&r>0)return(0,G.jsx)(`g`,{className:d?`active`:void 0,"data-evaluation-highlight":e,"data-highlight-role":s,transform:`translate(${t.x} ${t.z}) rotate(${t.rotationY*180/Math.PI})`,onClick:f,children:(0,G.jsx)(`rect`,{x:-r/2,y:`-.16`,width:r,height:`.32`,fill:l,fillOpacity:u,stroke:l,strokeWidth:`3`,vectorEffect:`non-scaling-stroke`})},e)}if(c.type===`stair`){let t=Qo(c,n);if(t.length>=3)return(0,G.jsx)(`polygon`,{className:d?`active`:void 0,"data-evaluation-highlight":e,"data-highlight-role":s,points:t.map(e=>`${e.x},${e.z}`).join(` `),fill:l,fillOpacity:u,stroke:l,strokeWidth:`3`,vectorEffect:`non-scaling-stroke`,onClick:f},e)}return null})})}function El({rotation:e}){return(0,G.jsxs)(`div`,{className:`compass`,title:`视图旋转 ${e}°`,children:[(0,G.jsx)(`div`,{className:`compass-arrow`,style:{transform:`rotate(${gl-e}deg)`},children:`▲`}),(0,G.jsx)(`b`,{children:`N`})]})}function Dl({node:e,onSelect:t}){let n=ts(e),r=ns(e);return n.length<3?null:(0,G.jsx)(`polygon`,{"data-selectable":!0,points:n.map(e=>`${e.x},${e.z}`).join(` `),fill:r,fillOpacity:`.12`,stroke:r,strokeOpacity:`.32`,strokeWidth:`.03`,onClick:()=>t(e.id)})}function Ol({node:e,viewRotation:t}){let n=rs(e),r=ns(e);return n?(0,G.jsx)(`text`,{x:n.x,y:n.z,className:`zone-label`,fontSize:`.22`,fontWeight:`700`,textAnchor:`middle`,dominantBaseline:`middle`,style:{fill:r,transform:`rotate(${-t}deg)`,transformOrigin:`${n.x}px ${n.z}px`,transition:`transform 240ms cubic-bezier(.2,.8,.2,1)`},stroke:`#ffffff`,strokeWidth:`.035`,strokeOpacity:`.9`,paintOrder:`stroke`,pointerEvents:`none`,children:e.name||`Zone`}):null}function kl({report:e,viewRotation:t,unit:n,onSelect:r}){let i=`#4b5563`;return(0,G.jsx)(`g`,{className:`exterior-dimensions`,children:Ms(e).map(a=>{let o=Ws(a.valueMeters,n),s=Ns(e,a),c=a.dimensionLayer===`inner-chain`?os:ss,l=[s.faceStart[0]+a.outwardNormal[0]*c,s.faceStart[1]+a.outwardNormal[1]*c],u=[s.faceEnd[0]+a.outwardNormal[0]*c,s.faceEnd[1]+a.outwardNormal[1]*c],d=[(l[0]+u[0])/2,(l[1]+u[1])/2],f=Math.max(.24,o.length*.105),p=a.valueMeters>f+.16,m=p?d:[u[0]+a.direction[0]*(f/2+.14),u[1]+a.direction[1]*(f/2+.14)],h=Math.min(f/2+.05,a.valueMeters*.4),g=[d[0]-a.direction[0]*h,d[1]-a.direction[1]*h],_=[d[0]+a.direction[0]*h,d[1]+a.direction[1]*h],v=[l[0]+a.outwardNormal[0]*cs,l[1]+a.outwardNormal[1]*cs],y=[u[0]+a.outwardNormal[0]*cs,u[1]+a.outwardNormal[1]*cs],b=[(a.direction[0]+a.outwardNormal[0])*.065,(a.direction[1]+a.outwardNormal[1])*.065],x=ws(a.direction,t);return(0,G.jsxs)(`g`,{"data-selectable":!0,onClick:()=>r(a),style:{cursor:`pointer`},children:[(0,G.jsx)(`line`,{x1:s.edgeStart[0],y1:s.edgeStart[1],x2:v[0],y2:v[1],stroke:i,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`}),(0,G.jsx)(`line`,{x1:s.edgeEnd[0],y1:s.edgeEnd[1],x2:y[0],y2:y[1],stroke:i,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`}),p?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`line`,{x1:l[0],y1:l[1],x2:g[0],y2:g[1],stroke:i,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`}),(0,G.jsx)(`line`,{x1:_[0],y1:_[1],x2:u[0],y2:u[1],stroke:i,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`})]}):(0,G.jsx)(`line`,{x1:l[0],y1:l[1],x2:m[0]+a.direction[0]*f/2,y2:m[1]+a.direction[1]*f/2,stroke:i,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`}),[l,u].map((e,t)=>(0,G.jsx)(`line`,{x1:e[0]-b[0],y1:e[1]-b[1],x2:e[0]+b[0],y2:e[1]+b[1],stroke:i,strokeWidth:`1.2`,vectorEffect:`non-scaling-stroke`},t)),(0,G.jsx)(`text`,{x:m[0],y:m[1],transform:`rotate(${x} ${m[0]} ${m[1]})`,textAnchor:`middle`,dominantBaseline:`middle`,fontFamily:`DM Mono, monospace`,fontSize:`.18`,fill:i,stroke:`#f7f8f5`,strokeWidth:`.04`,paintOrder:`stroke`,children:o})]},a.id)})})}function Al({measurements:e,preview:t,unit:n,viewRotation:r,selectedId:i,onSelect:a,onDelete:o}){return(0,G.jsxs)(`g`,{className:`manual-measurements`,children:[e.map(e=>(0,G.jsx)(jl,{measurement:e,unit:n,viewRotation:r,selected:i===e.id,onSelect:a,onDelete:o},e.id)),t&&(0,G.jsx)(jl,{measurement:{id:`measurement-preview`,levelId:``,createdAt:0,...t},unit:n,viewRotation:r,selected:!1,preview:!0})]})}function jl({measurement:e,unit:t,viewRotation:n,selected:r,preview:i=!1,onSelect:a,onDelete:o}){let s=Ks(e.start.point,e.end.point,e.mode),c=i?`#d97706`:r?`#e75c3c`:`#246b72`,l=Ws(s.valueMeters,t),u=ws(s.direction,n),d=[s.normal[0]*.08,s.normal[1]*.08],f=[s.labelPoint[0]+s.normal[0]*.32,s.labelPoint[1]+s.normal[1]*.32];return s.valueMeters<=5e-4?null:(0,G.jsxs)(`g`,{"data-selectable":!i||void 0,"data-manual-measurement":i?void 0:e.id,onClick:t=>{i||(t.stopPropagation(),a?.(e.id))},style:{cursor:i?`crosshair`:`pointer`},children:[s.extensionLines.map((e,t)=>(0,G.jsx)(`line`,{x1:e.start[0],y1:e.start[1],x2:e.end[0],y2:e.end[1],stroke:c,strokeWidth:`1`,strokeDasharray:i?`4 3`:void 0,vectorEffect:`non-scaling-stroke`},t)),(0,G.jsx)(`line`,{x1:s.measurementStart[0],y1:s.measurementStart[1],x2:s.measurementEnd[0],y2:s.measurementEnd[1],stroke:c,strokeWidth:r?`1.8`:`1.2`,strokeDasharray:i?`5 4`:void 0,vectorEffect:`non-scaling-stroke`}),[s.measurementStart,s.measurementEnd].map((e,t)=>(0,G.jsx)(`line`,{x1:e[0]-d[0],y1:e[1]-d[1],x2:e[0]+d[0],y2:e[1]+d[1],stroke:c,strokeWidth:`1.3`,vectorEffect:`non-scaling-stroke`},t)),(0,G.jsx)(`circle`,{cx:e.start.point[0],cy:e.start.point[1],r:`.045`,fill:c}),(0,G.jsx)(`circle`,{cx:e.end.point[0],cy:e.end.point[1],r:`.045`,fill:c}),(0,G.jsx)(`text`,{x:s.labelPoint[0],y:s.labelPoint[1],transform:`rotate(${u} ${s.labelPoint[0]} ${s.labelPoint[1]})`,textAnchor:`middle`,dominantBaseline:`middle`,fontFamily:`DM Mono, monospace`,fontSize:`.18`,fill:c,stroke:`#f7f8f5`,strokeWidth:`.045`,paintOrder:`stroke`,pointerEvents:`none`,children:l}),r&&!i&&(0,G.jsxs)(`g`,{"data-delete-measurement":e.id,onClick:t=>{t.stopPropagation(),o?.(e.id)},style:{cursor:`pointer`},children:[(0,G.jsx)(`circle`,{cx:f[0],cy:f[1],r:`.14`,fill:`#fff`,stroke:`#d84f42`,strokeWidth:`1.4`,vectorEffect:`non-scaling-stroke`}),(0,G.jsx)(`line`,{x1:f[0]-.05,y1:f[1]-.05,x2:f[0]+.05,y2:f[1]+.05,stroke:`#d84f42`,strokeWidth:`1.8`,vectorEffect:`non-scaling-stroke`}),(0,G.jsx)(`line`,{x1:f[0]+.05,y1:f[1]-.05,x2:f[0]-.05,y2:f[1]+.05,stroke:`#d84f42`,strokeWidth:`1.8`,vectorEffect:`non-scaling-stroke`})]})]})}function Ml({snap:e,active:t}){let n=e.kind===`free`?`#d97706`:`#16a085`;return(0,G.jsxs)(`g`,{pointerEvents:`none`,children:[(0,G.jsx)(`circle`,{cx:e.point[0],cy:e.point[1],r:t?`.095`:`.075`,fill:`#fff`,stroke:n,strokeWidth:`1.5`,vectorEffect:`non-scaling-stroke`}),(0,G.jsx)(`line`,{x1:e.point[0]-.05,y1:e.point[1],x2:e.point[0]+.05,y2:e.point[1],stroke:n,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`}),(0,G.jsx)(`line`,{x1:e.point[0],y1:e.point[1]-.05,x2:e.point[0],y2:e.point[1]+.05,stroke:n,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`})]})}function Nl({node:e,selected:t,onSelect:n}){let r=Wo(e);return r?(0,G.jsx)(`path`,{"data-selectable":!0,d:r.path,fill:t?`#dbe8dc`:`#e8eee8`,fillRule:`evenodd`,clipRule:`evenodd`,stroke:t?`#e75c3c`:`#b5c2b8`,strokeWidth:t?`.04`:`.018`,opacity:`.78`,onClick:()=>n(e.id)}):null}function Pl({node:e,footprint:t,valid:n,diagnosticCodes:r,selected:i,onSelect:a}){return!Array.isArray(e.start)||!Array.isArray(e.end)?null:t?.length&&n?(0,G.jsx)(`polygon`,{"data-selectable":!0,points:t.map(e=>`${e.x},${e.y}`).join(` `),fill:i?`#e75c3c`:`#303a3b`,stroke:`#202929`,strokeWidth:`.018`,vectorEffect:`non-scaling-stroke`,onClick:()=>a(e.id)}):t&&!n?(0,G.jsxs)(`g`,{"data-selectable":!0,"aria-label":`experimental wall diagnostic: ${r?.join(`, `)||`unknown`}`,onClick:()=>a(e.id),children:[(0,G.jsx)(`title`,{children:r?.join(`, `)||`wall_invalid_footprint`}),(0,G.jsx)(`line`,{x1:e.start[0],y1:e.start[1],x2:e.end[0],y2:e.end[1],stroke:`#d95446`,strokeWidth:`.05`}),(0,G.jsx)(`circle`,{cx:e.start[0],cy:e.start[1],r:`.12`,fill:`#d95446`})]}):null}function Fl({node:e,nodes:t,selected:n,onSelect:r}){let i=W(e),a=Mo(e,t);return!a||!Ao(e)?null:(0,G.jsxs)(`g`,{"data-selectable":!0,transform:Qa(a),onClick:()=>r(e.id),className:`shelf`,children:[(0,G.jsx)(`rect`,{x:-i.width/2,y:-i.depth/2,width:i.width,height:i.depth,fill:`#d6d3d1`,stroke:n?`#e75c3c`:`#1f2937`,strokeWidth:n?`.045`:`.015`,opacity:`.9`}),Po(i).map(e=>(0,G.jsx)(`line`,{x1:e,x2:e,y1:-i.depth/2+i.thickness,y2:i.depth/2-i.thickness,stroke:`#1f2937`,strokeWidth:`.012`,opacity:`.7`},e))]})}function Il({node:e,nodes:t,selected:n,onSelect:r}){let i=$a(e,t);if(!i)return null;let a=Number.isFinite(e.width)?e.width:.9,o=.12,s=i.rotationY*180/Math.PI;if(e.type===`door`){let t=n?`#e75c3c`:`#9b6736`,c=e.doorType??`hinged`,l=c===`double`||c===`french`,u=((Array.isArray(e.rotation)&&Number.isFinite(e.rotation[1])?e.rotation[1]:0)%(Math.PI*2)+Math.PI*2)%(Math.PI*2),d=u>Math.PI/2&&u<Math.PI*3/2,f=e.hingesSide??`left`,p=d?f===`left`?`right`:`left`:f,m=e.swingDirection??`inward`,h=(d?m===`inward`?`outward`:`inward`:m)===`inward`?1:-1,g=(e,r,i,a)=>{let o=Math.abs(r),s=e+r,c=e,l=r*Math.sin(i),u=+(i>=0);return(0,G.jsxs)(_.Fragment,{children:[(0,G.jsx)(`line`,{x1:e,y1:`0`,x2:c,y2:l,stroke:t,strokeWidth:n?`2.4`:`1.7`,vectorEffect:`non-scaling-stroke`}),(0,G.jsx)(`path`,{d:`M ${s} 0 A ${o} ${o} 0 0 ${u} ${c} ${l}`,fill:`none`,stroke:t,strokeWidth:n?`1.6`:`1.1`,strokeDasharray:`5 4`,strokeLinecap:`round`,vectorEffect:`non-scaling-stroke`})]},a)};return(0,G.jsxs)(`g`,{"data-selectable":!0,transform:`translate(${i.x} ${i.z}) rotate(${s})`,onClick:()=>r(e.id),children:[(0,G.jsx)(`rect`,{x:-a/2,y:-.12/2,width:a,height:o,fill:`#f7f8f5`,stroke:t,strokeWidth:n?`.045`:`.025`}),e.openingKind!==`opening`&&(l?(0,G.jsxs)(G.Fragment,{children:[g(-a/2,a/2,h*Math.PI/2,`left`),g(a/2,-a/2,-h*Math.PI/2,`right`)]}):c===`hinged`&&g(p===`left`?-a/2:a/2,p===`left`?a:-a,h*(p===`left`?1:-1)*Math.PI/2,`single`))]})}return(0,G.jsxs)(`g`,{"data-selectable":!0,transform:`translate(${i.x} ${i.z}) rotate(${s})`,onClick:()=>r(e.id),children:[(0,G.jsx)(`rect`,{x:-a/2,y:-.12/2,width:a,height:o,fill:`#f7f8f5`,stroke:n?`#e75c3c`:`#287b8e`,strokeWidth:n?.045:.025}),(0,G.jsx)(`line`,{x1:-a/2,x2:a/2,stroke:`#65a9b8`,strokeWidth:`.025`})]})}function Ll({node:e,nodes:t,onSelect:n}){if(e.stairType===`spiral`){let t=Ro(e);return t?(0,G.jsxs)(`g`,{"data-selectable":!0,onClick:()=>n(e.id),children:[(0,G.jsx)(`path`,{d:t.footprintPath,fill:`rgba(255,255,255,.08)`,stroke:`#171717`,strokeWidth:`.025`}),t.treadLines.map((e,n)=>(0,G.jsx)(`line`,{x1:e.start.x,y1:e.start.z,x2:e.end.x,y2:e.end.z,stroke:`#262626`,strokeWidth:n===t.treadLines.length-1?`.035`:`.018`},n)),t.railingPaths.map((e,t)=>(0,G.jsx)(`polyline`,{points:e.map(e=>`${e.x},${e.z}`).join(` `),fill:`none`,stroke:`#171717`,strokeWidth:`.025`},t)),t.centerColumn&&(0,G.jsx)(`circle`,{cx:t.centerColumn.x,cy:t.centerColumn.z,r:Math.max(t.innerRadius*.18,.06),fill:`#d6d3d1`,stroke:`#171717`,strokeWidth:`.02`}),(0,G.jsx)(`line`,{x1:t.upDirection.from.x,y1:t.upDirection.from.z,x2:t.upDirection.to.x,y2:t.upDirection.to.z,stroke:`#171717`,strokeWidth:`.03`,markerEnd:`url(#stair-up)`})]}):null}if(e.stairType===`curved`){let t=Zo(e);return t?(0,G.jsxs)(`g`,{"data-selectable":!0,onClick:()=>n(e.id),children:[(0,G.jsx)(`path`,{d:t.footprintPath,fill:`rgba(255,255,255,.08)`,stroke:`#171717`,strokeWidth:`.025`}),t.treadLines.map((e,n)=>(0,G.jsx)(`line`,{x1:e.start.x,y1:e.start.z,x2:e.end.x,y2:e.end.z,stroke:`#262626`,strokeWidth:n===0||n===t.treadLines.length-1?`.03`:`.018`},n)),(0,G.jsx)(`line`,{x1:t.upDirection.from.x,y1:t.upDirection.from.z,x2:t.upDirection.to.x,y2:t.upDirection.to.z,stroke:`#171717`,strokeWidth:`.03`,markerEnd:`url(#stair-up)`})]}):null}let r=Xo(e,t);return r?(0,G.jsxs)(`g`,{"data-selectable":!0,onClick:()=>n(e.id),children:[r.segments.map(e=>(0,G.jsxs)(`g`,{children:[(0,G.jsx)(`polygon`,{points:e.polygon.map(e=>`${e.x},${e.z}`).join(` `),fill:`rgba(255,255,255,.08)`,stroke:`#171717`,strokeWidth:`.025`}),e.treads.map((e,t)=>(0,G.jsx)(`line`,{x1:e.start.x,y1:e.start.z,x2:e.end.x,y2:e.end.z,stroke:`#262626`,strokeWidth:`.018`},t))]},e.node.id)),(0,G.jsx)(`line`,{x1:r.upDirection.from.x,y1:r.upDirection.from.z,x2:r.upDirection.to.x,y2:r.upDirection.to.z,stroke:`#171717`,strokeWidth:`.03`,fill:`none`,markerEnd:`url(#stair-up)`})]}):null}function Rl({node:e,onSelect:t}){let n=Bo(e);return n?(0,G.jsxs)(`g`,{"data-selectable":!0,onClick:()=>t(e.id),children:[(0,G.jsx)(`path`,{d:`M ${n.footprint.map(e=>`${e.x} ${e.z}`).join(` L `)} Z`,fill:`rgba(255,255,255,.02)`,stroke:`#59635f`,strokeWidth:`.025`,strokeDasharray:`.08 .05`}),(0,G.jsx)(`line`,{x1:n.downDirection.from.x,y1:n.downDirection.from.z,x2:n.downDirection.to.x,y2:n.downDirection.to.z,stroke:`#59635f`,strokeWidth:`.03`,markerEnd:`url(#stair-down)`})]}):null}function K(e){let[t,n]=(0,_.useState)(()=>e?ec(e):null);return(0,_.useEffect)(()=>{let t=!1;return n(e?ec(e):null),e&&ac(e).then(e=>{t||n(e)}),()=>{t=!0}},[e]),t}function q({node:e,nodes:t,visibility:n,selected:r,viewRotation:i,markerId:a,onSelect:o}){let s=qa(e),c=Ya(e.id,t),l=e.asset?.floorPlanUrl,u=K(l);if(!s||c.status===`error`)return null;let d=Za(c),f=u&&!u.isFallback?nc({x:u.cropX,y:u.cropY,width:u.cropWidth,height:u.cropHeight},s.width,s.depth):null,p=s.depth/2+.15,m=c.rotationY*180/Math.PI-i;return(0,G.jsxs)(`g`,{"data-selectable":!0,className:`furniture`,transform:Qa(d),onClick:()=>o(e.id),children:[n.images&&l&&(u&&f?(0,G.jsx)(`svg`,{x:-s.width/2+f.offsetX,y:-s.depth/2+f.offsetY,width:f.drawWidth,height:f.drawHeight,viewBox:`${u.cropX} ${u.cropY} ${u.cropWidth} ${u.cropHeight}`,preserveAspectRatio:`none`,overflow:`hidden`,children:(0,G.jsx)(`image`,{href:l,x:`0`,y:`0`,width:u.naturalWidth,height:u.naturalHeight,preserveAspectRatio:`xMidYMid meet`})}):(0,G.jsx)(`image`,{href:l,x:-s.width/2,y:-s.depth/2,width:s.width,height:s.depth,preserveAspectRatio:`none`})),(n.boxes||r)&&(0,G.jsx)(`rect`,{x:-s.width/2,y:-s.depth/2,width:s.width,height:s.depth,fill:`none`,stroke:r?`#e75c3c`:`#b88348`,strokeWidth:r?.06:.025}),` `,n.images&&!l&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`line`,{x1:-s.width/2,y1:-s.depth/2,x2:s.width/2,y2:s.depth/2,stroke:`#b88348`,strokeWidth:`.025`}),(0,G.jsx)(`line`,{x1:s.width/2,y1:-s.depth/2,x2:-s.width/2,y2:s.depth/2,stroke:`#b88348`,strokeWidth:`.025`})]}),n.centers&&(0,G.jsx)(`circle`,{r:`.04`,fill:`#e75c3c`}),n.centers&&(0,G.jsx)(`line`,{x2:`0`,y2:s.depth/2,stroke:`#e75c3c`,strokeWidth:`.025`,markerEnd:`url(#${a})`}),` `,n.names&&(0,G.jsx)(`text`,{y:p,textAnchor:`middle`,className:`item-label`,fontSize:`.14`,style:{transform:`rotate(${m}deg)`,transformOrigin:`0px ${p}px`,transition:`transform 240ms cubic-bezier(.2,.8,.2,1)`},children:e.name||e.asset?.name||e.id})]})}function J({node:e,nodes:t,coverage:n,dimension:r,manualMeasurement:i,measurementUnit:a}){if(i)return(0,G.jsx)(zl,{title:`手动尺寸`,rows:[[`数值`,Ws(Ks(i.start.point,i.end.point,i.mode).valueMeters,a)],[`模式`,i.mode],[`楼层`,Y(i.levelId,t)],[`起点吸附`,i.start.kind],[`终点吸附`,i.end.kind]]});if(r)return(0,G.jsx)(zl,{title:`外围尺寸`,rows:[[`数值`,Ws(r.valueMeters,a)],[`标注层`,r.dimensionLayer],[`楼层`,Y(r.levelId,t)],[`来源墙体`,String(r.sourceWallIds.length)],[`来源洞口`,String(r.sourceOpeningIds.length)]]});if(!e)return(0,G.jsxs)(`section`,{className:`side-section inspector`,children:[(0,G.jsx)(`h2`,{children:`检查面板`}),(0,G.jsx)(`p`,{children:`点击对象查看原始字段与派生几何。`})]});if(e.type===`item`)return(0,G.jsx)(Bl,{node:e,nodes:t,unit:a});if(e.type===`shelf`){let n=W(e);return(0,G.jsx)(zl,{title:e.name||`Shelf`,node:e,rows:X(e,t).concat([[`尺寸 W/D/H`,`${_l(n.width,a)} / ${_l(n.depth,a)} / ${_l(n.height,a)}`],[`分格`,`${n.rows} 行 × ${n.columns} 列`],[`样式`,n.style],[`子 Item`,String((e.children??[]).length)]])})}if(e.type===`slab`){let r=Wo(e),i=n.entries.find(t=>t.nodeId===e.id);return(0,G.jsx)(zl,{title:e.name||`Slab（楼地面）`,node:e,rows:X(e,t).concat([[`净面积`,r?Gs(r.netArea,a):`未解析`],[`标高`,_l(e.elevation??.05,a)],[`轮廓 / 洞`,`${e.polygon?.length??0} / ${e.holes?.length??0}`],[`渲染状态`,i?.actualRenderStatus??`—`]])})}return(0,G.jsx)(Vl,{node:e,nodes:t,unit:a})}function Y(e,t){return e?t[e]?.name||e:`未确定`}function X(e,t){let n=Wa(e.id,t);return[[`类型`,e.type],[`所属楼层`,Y(n.levelId,t)],[`父节点`,e.parentId?t[e.parentId]?.name||t[e.parentId]?.type||e.parentId:`—`]]}function zl({title:e,rows:t,node:n}){return(0,G.jsxs)(`section`,{className:`side-section inspector`,children:[(0,G.jsx)(`h2`,{children:e}),(0,G.jsx)(`dl`,{children:t.map(([e,t])=>(0,G.jsxs)(_.Fragment,{children:[(0,G.jsx)(`dt`,{children:e}),(0,G.jsx)(`dd`,{children:t})]},e))}),n&&(0,G.jsxs)(`details`,{children:[(0,G.jsx)(`summary`,{children:`原始 JSON`}),(0,G.jsx)(`pre`,{children:JSON.stringify(n,null,2)})]})]})}function Bl({node:e,nodes:t,unit:n}){let r=qa(e),i=Ya(e.id,t),a=e.asset?.floorPlanUrl,o=K(a),s=r&&o&&!o.isFallback&&o.cropWidth>0&&o.cropHeight>0?nc({x:o.cropX,y:o.cropY,width:o.cropWidth,height:o.cropHeight},r.width,r.depth):null,c=a?o?o.isFallback?`整图回退：${o.fallbackReason}`:`已加载并裁剪`:`图片加载中`:`无平面图图片`;return(0,G.jsx)(zl,{title:e.name||e.asset?.name||`家具`,node:e,rows:X(e,t).concat([[`尺寸 W/H/D`,r?`${_l(r.width,n)} / ${_l(r.height,n)} / ${_l(r.depth,n)}`:`无效`],[`朝向`,i.status===`ok`?`${Ja(i.rotationY)}°`:`未解析`],[`平面图`,c],[`图片贴合`,s?`四边贴合`:`—`]])})}function Vl({node:e,nodes:t,unit:n}){let r=X(e,t);if(e.type===`level`&&r.splice(1,0,[`名称`,e.name||`未命名`],[`子节点`,String(Object.values(t).filter(t=>t.parentId===e.id).length)]),e.type===`wall`){let t=Array.isArray(e.start)&&Array.isArray(e.end)?Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]):null;r.push([`长度`,t===null?`未解析`:_l(t,n)],[`墙厚`,_l(e.thickness??.1,n)],[`几何`,Number.isFinite(e.curveOffset)&&e.curveOffset!==0?`曲墙`:`直墙`])}if((e.type===`door`||e.type===`window`)&&r.push([`宿主墙`,e.wallId?t[e.wallId]?.name||`墙体`:`未关联`],[`尺寸 W/H`,`${_l(e.width??.9,n)} / ${_l(e.height??2,n)}`],[`类型`,e.type===`door`?e.doorType??`hinged`:e.windowType??`window`],[`开口`,e.openingKind??`door/window`]),e.type===`zone`){let t=ts(e),i=Math.abs(t.reduce((e,n,r)=>{let i=t[(r+1)%t.length];return e+n.x*i.z-n.z*i.x},0)/2);r.push([`面积`,t.length>2?Gs(i,n):`未解析`],[`轮廓点`,String(t.length)])}return e.type===`stair`&&r.push([`楼梯类型`,e.stairType??`straight`],[`宽度`,Number.isFinite(e.width)?_l(e.width,n):`—`],[`级数`,String(e.stepCount??e.steps?.length??`—`)]),(0,G.jsx)(zl,{title:e.name||e.type,node:e,rows:r})}function Hl({nodes:e}){let t=t=>Object.values(e).filter(e=>e.type===t).length,n=Object.values(e).filter(e=>e.type===`shelf`),r=n.filter(e=>!Ao(e)),i=n.filter(t=>jo(t.id,e).status===`error`),a=n.reduce((e,t)=>{let n=W(t).style;return e[n]=(e[n]||0)+1,e},{});return(0,G.jsxs)(`section`,{className:`side-section`,children:[(0,G.jsx)(`h2`,{children:`文件统计`}),(0,G.jsxs)(`div`,{className:`stat-grid`,children:[(0,G.jsxs)(`span`,{children:[`节点`,(0,G.jsx)(`b`,{children:Object.keys(e).length})]}),(0,G.jsxs)(`span`,{children:[`Level`,(0,G.jsx)(`b`,{children:t(`level`)})]}),(0,G.jsxs)(`span`,{children:[`Wall`,(0,G.jsx)(`b`,{children:t(`wall`)})]}),(0,G.jsxs)(`span`,{children:[`Item`,(0,G.jsx)(`b`,{children:t(`item`)})]}),(0,G.jsxs)(`span`,{children:[`Shelf`,(0,G.jsx)(`b`,{children:n.length})]}),(0,G.jsxs)(`span`,{children:[`无效 Shelf`,(0,G.jsx)(`b`,{children:r.length})]}),(0,G.jsxs)(`span`,{children:[`父级异常 Shelf`,(0,G.jsx)(`b`,{children:i.length})]}),Object.entries(a).map(([e,t])=>(0,G.jsxs)(`span`,{children:[e,(0,G.jsx)(`b`,{children:t})]},e))]})]})}var Ul={pass:`通过`,issue:`存在问题`,unable_to_determine:`无法判断`,not_applicable:`不适用`},Wl={source_data:`源数据`,parser:`解析`,handoff:`交接映射`,rule:`评价规则`,geometry_tolerance:`几何容差`,insufficient_information:`信息不足`},Gl=e=>e==null?`—`:typeof e==`string`?e:String(e);function Kl({report:e,nodes:t,error:n,focusMessage:r,activeHighlight:i,disabled:a,onRun:o,onFocus:s,onRegisterRule:c}){return(0,G.jsxs)(`section`,{className:`side-section evaluation-panel`,children:[(0,G.jsxs)(`div`,{className:`side-heading`,children:[(0,G.jsx)(`h2`,{children:`G1 基础检查`}),(0,G.jsx)(`button`,{className:`primary`,disabled:a,onClick:o,children:`运行基础检查`})]}),n&&(0,G.jsxs)(`div`,{className:`evaluation-error`,children:[(0,G.jsx)(`b`,{children:`评价失败`}),(0,G.jsx)(`span`,{children:n})]}),r&&(0,G.jsx)(`div`,{className:`evaluation-focus-message`,children:r}),!e&&!n&&(0,G.jsx)(`p`,{children:`解析完成后手动运行；评价不会随画布变化自动重复。`}),e&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`div`,{className:`evaluation-overall status-${e.overallStatus}`,children:[(0,G.jsx)(`span`,{children:`整体状态`}),(0,G.jsx)(`b`,{children:Ul[e.overallStatus]})]}),(0,G.jsx)(`div`,{className:`evaluation-counts`,children:Object.keys(Ul).map(t=>(0,G.jsxs)(`span`,{children:[Ul[t],` `,(0,G.jsx)(`b`,{children:e.counts[t]})]},t))}),(0,G.jsx)(`div`,{className:`evaluation-rules`,children:e.rules.map(e=>{let n=ol(e,t),r=[...new Set(n.targets.map(e=>e.levelName))],a=i?.ruleId===e.ruleId?i.targetIndex:0,o=Math.min(a,Math.max(0,n.targets.length-1)),l=n.targets[o],u=i?.ruleId===e.ruleId;return(0,G.jsxs)(`article`,{ref:t=>c(e.ruleId,t),className:`evaluation-rule status-${e.status}${u?` active-evaluation-rule`:``}`,children:[(0,G.jsxs)(`div`,{className:`evaluation-rule-heading`,children:[(0,G.jsx)(`strong`,{children:n.title}),(0,G.jsx)(`em`,{children:Ul[e.status]})]}),(0,G.jsx)(`p`,{children:n.description}),(0,G.jsxs)(`div`,{className:`designer-guidance`,children:[(0,G.jsxs)(`span`,{children:[(0,G.jsx)(`b`,{children:`为什么要处理`}),n.rationale]}),(0,G.jsxs)(`span`,{children:[(0,G.jsx)(`b`,{children:`建议`}),n.recommendation]}),n.supplemental&&(0,G.jsx)(`span`,{className:`supplemental`,children:n.supplemental})]}),(0,G.jsxs)(`div`,{className:`evaluation-card-meta`,children:[(0,G.jsxs)(`span`,{children:[`问题数量 `,(0,G.jsx)(`b`,{children:n.problemCountLabel})]}),(0,G.jsxs)(`span`,{children:[`所在楼层 `,(0,G.jsx)(`b`,{children:r.length?r.join(`、`):`—`})]})]}),l&&(0,G.jsxs)(`div`,{className:`evaluation-object-nav`,children:[(0,G.jsx)(`span`,{className:`evaluation-object-label`,children:l.label}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`button`,{disabled:o===0,"aria-label":`${n.title} 上一处`,onClick:()=>s(e.ruleId,n.targets[o-1],o-1),children:`上一处`}),(0,G.jsxs)(`b`,{children:[o+1,` / `,n.targets.length]}),(0,G.jsx)(`button`,{disabled:o>=n.targets.length-1,"aria-label":`${n.title} 下一处`,onClick:()=>s(e.ruleId,n.targets[o+1],o+1),children:`下一处`})]}),(0,G.jsx)(`button`,{className:`view-on-canvas`,onClick:()=>s(e.ruleId,l,o),children:`在图中查看`})]}),(0,G.jsxs)(`details`,{children:[(0,G.jsx)(`summary`,{children:`技术明细`}),(0,G.jsxs)(`small`,{children:[(0,G.jsx)(`b`,{children:`规则`}),e.ruleId,` · `,e.ruleName]}),e.normalizedObjectIds.length>0&&(0,G.jsxs)(`small`,{children:[(0,G.jsx)(`b`,{children:`标准化 ID`}),e.normalizedObjectIds.join(`, `)]}),e.pascalSourceIds.length>0&&(0,G.jsxs)(`small`,{children:[(0,G.jsx)(`b`,{children:`Pascal ID`}),e.pascalSourceIds.join(`, `)]}),e.missingData.length>0&&(0,G.jsxs)(`small`,{children:[(0,G.jsx)(`b`,{children:`缺失数据`}),e.missingData.join(`；`)]}),(0,G.jsxs)(`small`,{children:[(0,G.jsx)(`b`,{children:`置信度`}),e.confidence.level,` (`,e.confidence.score,`)`,e.confidence.reasons.length?` · ${e.confidence.reasons.join(`；`)}`:``]}),e.diagnostics.length>0&&(0,G.jsxs)(`small`,{children:[(0,G.jsx)(`b`,{children:`原始字段与诊断`}),e.diagnostics.map(e=>`${e.field??e.code}: 实际=${Gl(e.actualValue)}；要求=${e.expectedValue??`—`}；来源=${e.origin?Wl[e.origin]:`—`}；${e.message}`).join(`；`)]}),e.measurements.length>0&&(0,G.jsxs)(`small`,{children:[(0,G.jsx)(`b`,{children:`测量值`}),e.measurements.map(e=>`${e.normalizedObjectId?`${e.normalizedObjectId}.`:``}${e.name}=${Gl(e.value)}${e.unit?` ${e.unit}`:``}`).join(`；`)]}),e.thresholds.length>0&&(0,G.jsxs)(`small`,{children:[(0,G.jsx)(`b`,{children:`阈值/容差`}),e.thresholds.map(e=>`${e.name}=${Gl(e.value)}${e.unit?` ${e.unit}`:``}`).join(`；`)]})]})]},e.ruleId)})})]})]})}function ql(e){let t=Object.values(e).filter(e=>e.type===`item`).flatMap(t=>{let n=Ya(t.id,e);return n.status===`error`?[{severity:`error`,code:n.error||`unsupported_parent_transform`,message:`无法确定家具楼层坐标`,nodeId:t.id}]:[]}),n=Object.values(e).filter(e=>e.type===`shelf`).flatMap(t=>{let n=jo(t.id,e);W(t);let r=[];return Ao(t)||r.push({severity:`error`,code:`invalid_shelf_dimensions`,message:`Shelf width/depth 无效；未绘制虚假占地`,nodeId:t.id,sourcePath:`nodes.${t.id}`}),t.rows!==void 0&&(!Number.isInteger(t.rows)||t.rows<1||t.rows>8)&&r.push({severity:`error`,code:`invalid_shelf_rows`,message:`Shelf rows 必须为 1–8 的整数`,nodeId:t.id,sourcePath:`nodes.${t.id}.rows`}),t.columns!==void 0&&(!Number.isInteger(t.columns)||t.columns<1||t.columns>6)&&r.push({severity:`error`,code:`invalid_shelf_columns`,message:`Shelf columns 必须为 1–6 的整数`,nodeId:t.id,sourcePath:`nodes.${t.id}.columns`}),n.status===`error`&&r.push({severity:`error`,code:n.error===`parent_cycle`?`shelf_parent_cycle`:n.error===`missing_parent`?`missing_shelf_parent`:`unsupported_shelf_parent_transform`,message:`无法确定 Shelf 的楼层坐标`,nodeId:t.id,sourcePath:`nodes.${t.id}.parentId`}),r});return[...t,...n]}function Jl({diagnostics:e}){return(0,G.jsx)(`section`,{className:`side-section diagnostics-panel`,children:(0,G.jsxs)(`details`,{children:[(0,G.jsxs)(`summary`,{className:`side-heading`,children:[(0,G.jsx)(`h2`,{children:`诊断`}),(0,G.jsx)(`span`,{className:`pill`,children:e.length})]}),e.slice(0,30).map((e,t)=>(0,G.jsxs)(`div`,{className:`diag ${e.severity}`,children:[(0,G.jsx)(`b`,{children:e.code}),(0,G.jsx)(`span`,{children:e.message}),(0,G.jsx)(`small`,{children:e.nodeId||``})]},`${e.code}-${t}`))]})})}(0,v.createRoot)(document.getElementById(`root`)).render((0,G.jsx)(vl,{}));