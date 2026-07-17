var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return T(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function O(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function k(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function A(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,A(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+O(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),A(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+O(a,u),c+=A(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+O(a,u++),c+=A(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return A(k(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function j(e,t,n){if(e==null)return e;var r=[],i=0;return A(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function re(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var M=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},N={map:j,forEach:function(e,t,n){j(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return j(e,function(){t++}),t},toArray:function(e){return j(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=N,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:re}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,M)}catch(e){M(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&O(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function E(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&O(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=E,D=function(){ne.postMessage(null)}}else D=function(){_(E,0)};function O(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,O(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),E=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),O=Symbol.iterator;function k(e){return typeof e!=`object`||!e?null:(e=O&&e[O]||e[`@@iterator`],typeof e==`function`?e:null)}var A=Symbol.for(`react.client.reference`);function j(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===A?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case T:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case E:return t=e.displayName||null,t===null?j(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return j(e(t))}catch{}}return null}var re=Array.isArray,M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ae=[],oe=-1;function se(e){return{current:e}}function ce(e){0>oe||(e.current=ae[oe],ae[oe]=null,oe--)}function P(e,t){oe++,ae[oe]=e.current,e.current=t}var le=se(null),F=se(null),ue=se(null),de=se(null);function fe(e,t){switch(P(ue,t),P(F,e),P(le,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ce(le),P(le,e)}function pe(){ce(le),ce(F),ce(ue)}function me(e){e.memoizedState!==null&&P(de,e);var t=le.current,n=Hd(t,e.type);t!==n&&(P(F,e),P(le,n))}function he(e){F.current===e&&(ce(le),ce(F)),de.current===e&&(ce(de),Qf._currentValue=ie)}var ge,_e;function ve(e){if(ge===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ge=t&&t[1]||``,_e=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ge+e+_e}var ye=!1;function be(e,t){if(!e||ye)return``;ye=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ye=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ve(n):``}function xe(e,t){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve(`Lazy`);case 13:return e.child!==t&&t!==null?ve(`Suspense Fallback`):ve(`Suspense`);case 19:return ve(`SuspenseList`);case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return ve(`Activity`);default:return``}}function Se(e){try{var t=``,n=null;do t+=xe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ce=Object.prototype.hasOwnProperty,we=t.unstable_scheduleCallback,Te=t.unstable_cancelCallback,Ee=t.unstable_shouldYield,De=t.unstable_requestPaint,Oe=t.unstable_now,ke=t.unstable_getCurrentPriorityLevel,Ae=t.unstable_ImmediatePriority,je=t.unstable_UserBlockingPriority,Me=t.unstable_NormalPriority,Ne=t.unstable_LowPriority,Pe=t.unstable_IdlePriority,Fe=t.log,Ie=t.unstable_setDisableYieldValue,Le=null,Re=null;function ze(e){if(typeof Fe==`function`&&Ie(e),Re&&typeof Re.setStrictMode==`function`)try{Re.setStrictMode(Le,e)}catch{}}var Be=Math.clz32?Math.clz32:Ue,Ve=Math.log,He=Math.LN2;function Ue(e){return e>>>=0,e===0?32:31-(Ve(e)/He|0)|0}var We=256,Ge=262144,Ke=4194304;function qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Je(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=qe(n))):i=qe(o):i=qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=qe(n))):i=qe(o)):i=qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ye(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ze(){var e=Ke;return Ke<<=1,!(Ke&62914560)&&(Ke=4194304),e}function Qe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $e(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function et(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Be(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&tt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function tt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Be(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function nt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function rt(e,t){var n=t&-t;return n=n&42?1:it(n),(n&(e.suspendedLanes|t))===0?n:0}function it(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function at(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ot(){var e=N.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function st(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var ct=Math.random().toString(36).slice(2),lt=`__reactFiber$`+ct,ut=`__reactProps$`+ct,dt=`__reactContainer$`+ct,ft=`__reactEvents$`+ct,pt=`__reactListeners$`+ct,mt=`__reactHandles$`+ct,ht=`__reactResources$`+ct,gt=`__reactMarker$`+ct;function _t(e){delete e[lt],delete e[ut],delete e[ft],delete e[pt],delete e[mt]}function vt(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[lt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function yt(e){if(e=e[lt]||e[dt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function bt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function xt(e){var t=e[ht];return t||=e[ht]={hoistableStyles:new Map,hoistableScripts:new Map},t}function St(e){e[gt]=!0}var Ct=new Set,wt={};function Tt(e,t){Et(e,t),Et(e+`Capture`,t)}function Et(e,t){for(wt[e]=t,e=0;e<t.length;e++)Ct.add(t[e])}var Dt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ot={},kt={};function At(e){return Ce.call(kt,e)?!0:Ce.call(Ot,e)?!1:Dt.test(e)?kt[e]=!0:(Ot[e]=!0,!1)}function jt(e,t,n){if(At(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Mt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function I(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Nt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function L(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Pt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ft(e){if(!e._valueTracker){var t=L(e)?`checked`:`value`;e._valueTracker=Pt(e,t,``+e[t])}}function It(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=L(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Lt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Rt=/[\n"\\]/g;function zt(e){return e.replace(Rt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Bt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Nt(t)):e.value!==``+Nt(t)&&(e.value=``+Nt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ht(e,o,Nt(n)):Ht(e,o,Nt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Nt(s):e.removeAttribute(`name`)}function Vt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ft(e);return}n=n==null?``:``+Nt(n),t=t==null?n:``+Nt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ft(e)}function Ht(e,t,n){t===`number`&&Lt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ut(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Nt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wt(e,t,n){if(t!=null&&(t=``+Nt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Nt(n)}function Gt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(re(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Nt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ft(e)}function Kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Jt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Yt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Jt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Jt(e,o,t[o])}function Xt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Zt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Qt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $t(e){return Qt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function en(){}var tn=null;function nn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rn=null,an=null;function on(e){var t=yt(e);if(t&&(e=t.stateNode)){var n=e[ut]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Bt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+zt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ut]||null;if(!a)throw Error(i(90));Bt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&It(r)}break a;case`textarea`:Wt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ut(e,!!n.multiple,t,!1)}}}var sn=!1;function cn(e,t,n){if(sn)return e(t,n);sn=!0;try{return e(t)}finally{if(sn=!1,(rn!==null||an!==null)&&(bu(),rn&&(t=rn,e=an,an=rn=null,on(t),e)))for(t=0;t<e.length;t++)on(e[t])}}function ln(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ut]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var un=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),dn=!1;if(un)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){dn=!0}}),window.addEventListener(`test`,fn,fn),window.removeEventListener(`test`,fn,fn)}catch{dn=!1}var pn=null,mn=null,hn=null;function gn(){if(hn)return hn;var e,t=mn,n=t.length,r,i=`value`in pn?pn.value:pn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return hn=i.slice(e,1<r?1-r:void 0)}function _n(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vn(){return!0}function yn(){return!1}function bn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?vn:yn,this.isPropagationStopped=yn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=vn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=vn)},persist:function(){},isPersistent:vn}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sn=bn(xn),Cn=h({},xn,{view:0,detail:0}),wn=bn(Cn),Tn,En,Dn,On=h({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Dn&&(Dn&&e.type===`mousemove`?(Tn=e.screenX-Dn.screenX,En=e.screenY-Dn.screenY):En=Tn=0,Dn=e),Tn)},movementY:function(e){return`movementY`in e?e.movementY:En}}),kn=bn(On),An=bn(h({},On,{dataTransfer:0})),jn=bn(h({},Cn,{relatedTarget:0})),Mn=bn(h({},xn,{animationName:0,elapsedTime:0,pseudoElement:0})),Nn=bn(h({},xn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Pn=bn(h({},xn,{data:0})),Fn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},In={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Ln={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Rn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ln[e])?!!t[e]:!1}function zn(){return Rn}var Bn=bn(h({},Cn,{key:function(e){if(e.key){var t=Fn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=_n(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?In[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zn,charCode:function(e){return e.type===`keypress`?_n(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?_n(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Vn=bn(h({},On,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Hn=bn(h({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zn})),Un=bn(h({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Wn=bn(h({},On,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Gn=bn(h({},xn,{newState:0,oldState:0})),Kn=[9,13,27,32],qn=un&&`CompositionEvent`in window,Jn=null;un&&`documentMode`in document&&(Jn=document.documentMode);var Yn=un&&`TextEvent`in window&&!Jn,Xn=un&&(!qn||Jn&&8<Jn&&11>=Jn),Zn=` `,Qn=!1;function $n(e,t){switch(e){case`keyup`:return Kn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function er(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var tr=!1;function nr(e,t){switch(e){case`compositionend`:return er(t);case`keypress`:return t.which===32?(Qn=!0,Zn):null;case`textInput`:return e=t.data,e===Zn&&Qn?null:e;default:return null}}function rr(e,t){if(tr)return e===`compositionend`||!qn&&$n(e,t)?(e=gn(),hn=mn=pn=null,tr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Xn&&t.locale!==`ko`?null:t.data;default:return null}}var ir={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ir[e.type]:t===`textarea`}function or(e,t,n,r){rn?an?an.push(r):an=[r]:rn=r,t=Ed(t,`onChange`),0<t.length&&(n=new Sn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var sr=null,cr=null;function lr(e){yd(e,0)}function ur(e){if(It(bt(e)))return e}function dr(e,t){if(e===`change`)return t}var fr=!1;if(un){var pr;if(un){var mr=`oninput`in document;if(!mr){var hr=document.createElement(`div`);hr.setAttribute(`oninput`,`return;`),mr=typeof hr.oninput==`function`}pr=mr}else pr=!1;fr=pr&&(!document.documentMode||9<document.documentMode)}function gr(){sr&&(sr.detachEvent(`onpropertychange`,_r),cr=sr=null)}function _r(e){if(e.propertyName===`value`&&ur(cr)){var t=[];or(t,cr,e,nn(e)),cn(lr,t)}}function vr(e,t,n){e===`focusin`?(gr(),sr=t,cr=n,sr.attachEvent(`onpropertychange`,_r)):e===`focusout`&&gr()}function yr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return ur(cr)}function br(e,t){if(e===`click`)return ur(t)}function xr(e,t){if(e===`input`||e===`change`)return ur(t)}function Sr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Cr=typeof Object.is==`function`?Object.is:Sr;function wr(e,t){if(Cr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ce.call(t,i)||!Cr(e[i],t[i]))return!1}return!0}function Tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Er(e,t){var n=Tr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Tr(n)}}function Dr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Or(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Lt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lt(e.document)}return t}function kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ar=un&&`documentMode`in document&&11>=document.documentMode,jr=null,Mr=null,Nr=null,Pr=!1;function Fr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pr||jr==null||jr!==Lt(r)||(r=jr,`selectionStart`in r&&kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&wr(Nr,r)||(Nr=r,r=Ed(Mr,`onSelect`),0<r.length&&(t=new Sn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=jr)))}function Ir(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Lr={animationend:Ir(`Animation`,`AnimationEnd`),animationiteration:Ir(`Animation`,`AnimationIteration`),animationstart:Ir(`Animation`,`AnimationStart`),transitionrun:Ir(`Transition`,`TransitionRun`),transitionstart:Ir(`Transition`,`TransitionStart`),transitioncancel:Ir(`Transition`,`TransitionCancel`),transitionend:Ir(`Transition`,`TransitionEnd`)},Rr={},zr={};un&&(zr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),`TransitionEvent`in window||delete Lr.transitionend.transition);function Br(e){if(Rr[e])return Rr[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zr)return Rr[e]=t[n];return e}var Vr=Br(`animationend`),Hr=Br(`animationiteration`),Ur=Br(`animationstart`),Wr=Br(`transitionrun`),Gr=Br(`transitionstart`),Kr=Br(`transitioncancel`),qr=Br(`transitionend`),Jr=new Map,Yr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Yr.push(`scrollEnd`);function Xr(e,t){Jr.set(e,t),Tt(t,[e])}var Zr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Qr=[],$r=0,ei=0;function ti(){for(var e=$r,t=ei=$r=0;t<e;){var n=Qr[t];Qr[t++]=null;var r=Qr[t];Qr[t++]=null;var i=Qr[t];Qr[t++]=null;var a=Qr[t];if(Qr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ai(n,i,a)}}function ni(e,t,n,r){Qr[$r++]=e,Qr[$r++]=t,Qr[$r++]=n,Qr[$r++]=r,ei|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ri(e,t,n,r){return ni(e,t,n,r),oi(e)}function ii(e,t){return ni(e,null,null,t),oi(e)}function ai(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Be(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function oi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var si={};function ci(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,t,n,r){return new ci(e,t,n,r)}function ui(e){return e=e.prototype,!(!e||!e.isReactComponent)}function di(e,t){var n=e.alternate;return n===null?(n=li(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function fi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function pi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ui(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,le.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=li(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return mi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=li(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=li(13,n,t,a),e.elementType=ee,e.lanes=o,e;case T:return e=li(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case E:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=li(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function mi(e,t,n,r){return e=li(7,e,r,t),e.lanes=n,e}function hi(e,t,n){return e=li(6,e,null,t),e.lanes=n,e}function gi(e){var t=li(18,null,null,0);return t.stateNode=e,t}function _i(e,t,n){return t=li(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vi=new WeakMap;function yi(e,t){if(typeof e==`object`&&e){var n=vi.get(e);return n===void 0?(t={value:e,source:t,stack:Se(t)},vi.set(e,t),t):n}return{value:e,source:t,stack:Se(t)}}var bi=[],xi=0,Si=null,Ci=0,wi=[],Ti=0,Ei=null,Di=1,Oi=``;function ki(e,t){bi[xi++]=Ci,bi[xi++]=Si,Si=e,Ci=t}function Ai(e,t,n){wi[Ti++]=Di,wi[Ti++]=Oi,wi[Ti++]=Ei,Ei=e;var r=Di;e=Oi;var i=32-Be(r)-1;r&=~(1<<i),n+=1;var a=32-Be(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Di=1<<32-Be(t)+i|n<<i|r,Oi=a+e}else Di=1<<a|n<<i|r,Oi=e}function ji(e){e.return!==null&&(ki(e,1),Ai(e,1,0))}function Mi(e){for(;e===Si;)Si=bi[--xi],bi[xi]=null,Ci=bi[--xi],bi[xi]=null;for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Oi=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null}function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Oi,wi[Ti++]=Ei,Di=t.id,Oi=t.overflow,Ei=e}var Pi=null,R=null,z=!1,B=null,Fi=!1,Ii=Error(i(519));function Li(e){throw Ui(yi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ii}function Ri(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[lt]=e,t[ut]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Gt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=en),t=!0):t=!1,t||Li(e,!0)}function zi(e){for(Pi=e.return;Pi;)switch(Pi.tag){case 5:case 31:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:Pi=Pi.return}}function Bi(e){if(e!==Pi)return!1;if(!z)return zi(e),z=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&R&&Li(e),zi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));R=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));R=uf(e)}else t===27?(t=R,Zd(e.type)?(e=lf,lf=null,R=e):R=t):R=Pi?cf(e.stateNode.nextSibling):null;return!0}function Vi(){R=Pi=null,z=!1}function Hi(){var e=B;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),B=null),e}function Ui(e){B===null?B=[e]:B.push(e)}var Wi=se(null),Gi=null,Ki=null;function qi(e,t,n){P(Wi,t._currentValue),t._currentValue=n}function Ji(e){e._currentValue=Wi.current,ce(Wi)}function Yi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Xi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Yi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Yi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Zi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Cr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===de.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Xi(t,e,n,r),t.flags|=262144}function Qi(e){for(e=e.firstContext;e!==null;){if(!Cr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $i(e){Gi=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ea(e){return na(Gi,e)}function ta(e,t){return Gi===null&&$i(e),na(e,t)}function na(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ki===null){if(e===null)throw Error(i(308));Ki=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ki=Ki.next=t;return n}var ra=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ia=t.unstable_scheduleCallback,aa=t.unstable_NormalPriority,oa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sa(){return{controller:new ra,data:new Map,refCount:0}}function ca(e){e.refCount--,e.refCount===0&&ia(aa,function(){e.controller.abort()})}var la=null,ua=0,da=0,fa=null;function pa(e,t){if(la===null){var n=la=[];ua=0,da=dd(),fa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ua++,t.then(ma,ma),t}function ma(){if(--ua===0&&la!==null){fa!==null&&(fa.status=`fulfilled`);var e=la;la=null,da=0,fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ha(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ga=M.S;M.S=function(e,t){eu=Oe(),typeof t==`object`&&t&&typeof t.then==`function`&&pa(e,t),ga!==null&&ga(e,t)};var _a=se(null);function va(){var e=_a.current;return e===null?q.pooledCache:e}function ya(e,t){t===null?P(_a,_a.current):P(_a,t.pool)}function ba(){var e=va();return e===null?null:{parent:oa._currentValue,pool:e}}var xa=Error(i(460)),Sa=Error(i(474)),Ca=Error(i(542)),wa={then:function(){}};function Ta(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ea(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(en,en),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e;default:if(typeof t.status==`string`)t.then(en,en);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e}throw Oa=t,xa}}function Da(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Oa=e,xa):e}}var Oa=null;function ka(){if(Oa===null)throw Error(i(459));var e=Oa;return Oa=null,e}function Aa(e){if(e===xa||e===Ca)throw Error(i(483))}var ja=null,Ma=0;function Na(e){var t=Ma;return Ma+=1,ja===null&&(ja=[]),Ea(ja,e,t)}function Pa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Fa(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ia(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=di(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=hi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&Da(i)===t.type)?(t=a(t,n.props),Pa(t,n),t.return=e,t):(t=pi(n.type,n.key,n.props,null,e.mode,r),Pa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=mi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=hi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=pi(t.type,t.key,t.props,null,e.mode,n),Pa(n,t),n.return=e,n;case v:return t=_i(t,e.mode,n),t.return=e,t;case D:return t=Da(t),f(e,t,n)}if(re(t)||k(t))return t=mi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Na(t),n);if(t.$$typeof===C)return f(e,ta(e,t),n);Fa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=Da(n),p(e,t,n,r)}if(re(n)||k(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Na(n),r);if(n.$$typeof===C)return p(e,t,ta(e,n),r);Fa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=Da(r),m(e,t,n,r,i)}if(re(r)||k(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Na(r),i);if(r.$$typeof===C)return m(e,t,n,ta(t,r),i);Fa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),z&&ki(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return z&&ki(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),z&&ki(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),z&&ki(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return z&&ki(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),z&&ki(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&Da(l)===r.type){n(e,r.sibling),c=a(r,o.props),Pa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=mi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=pi(o.type,o.key,o.props,null,e.mode,c),Pa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=_i(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=Da(o),b(e,r,o,c)}if(re(o))return h(e,r,o,c);if(k(o)){if(l=k(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Na(o),c);if(o.$$typeof===C)return b(e,r,ta(e,o),c);Fa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=hi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ma=0;var i=b(e,t,n,r);return ja=null,i}catch(t){if(t===xa||t===Ca)throw t;var a=li(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var La=Ia(!0),Ra=Ia(!1),za=!1;function Ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Va(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=oi(e),ai(e,null,n),t}return ni(e,r,t,n),oi(e)}function Wa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nt(e,n)}}function Ga(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ka=!1;function qa(){if(Ka){var e=fa;if(e!==null)throw e}}function Ja(e,t,n,r){Ka=!1;var i=e.updateQueue;za=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===da&&(Ka=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:za=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ya(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Xa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ya(n[e],t)}var Za=se(null),Qa=se(0);function $a(e,t){e=Ul,P(Qa,e),P(Za,t),Ul=e|t.baseLanes}function eo(){P(Qa,Ul),P(Za,Za.current)}function to(){Ul=Qa.current,ce(Za),ce(Qa)}var no=se(null),ro=null;function io(e){var t=e.alternate;P(lo,lo.current&1),P(no,e),ro===null&&(t===null||Za.current!==null||t.memoizedState!==null)&&(ro=e)}function ao(e){P(lo,lo.current),P(no,e),ro===null&&(ro=e)}function oo(e){e.tag===22?(P(lo,lo.current),P(no,e),ro===null&&(ro=e)):so(e)}function so(){P(lo,lo.current),P(no,no.current)}function co(e){ce(no),ro===e&&(ro=null),ce(lo)}var lo=se(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fo=0,V=null,H=null,po=null,mo=!1,ho=!1,go=!1,_o=0,vo=0,yo=null,bo=0;function xo(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Cr(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return fo=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?zs:Bs,go=!1,a=n(r,i),go=!1,ho&&(a=To(t,n,r,i)),wo(e),a}function wo(e){M.H=Rs;var t=H!==null&&H.next!==null;if(fo=0,po=H=V=null,mo=!1,vo=0,yo=null,t)throw Error(i(300));e===null||rc||(e=e.dependencies,e!==null&&Qi(e)&&(rc=!0))}function To(e,t,n,r){V=e;var a=0;do{if(ho&&(yo=null),vo=0,ho=!1,25<=a)throw Error(i(301));if(a+=1,po=H=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}M.H=Vs,o=t(n,r)}while(ho);return o}function Eo(){var e=M.H,t=e.useState()[0];return t=typeof t.then==`function`?Mo(t):t,e=e.useState()[0],(H===null?null:H.memoizedState)!==e&&(V.flags|=1024),t}function Do(){var e=_o!==0;return _o=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(mo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mo=!1}fo=0,po=H=V=null,ho=!1,vo=_o=0,yo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return po===null?V.memoizedState=po=e:po=po.next=e,po}function U(){if(H===null){var e=V.alternate;e=e===null?null:e.memoizedState}else e=H.next;var t=po===null?V.memoizedState:po.next;if(t!==null)po=t,H=e;else{if(e===null)throw V.alternate===null?Error(i(467)):Error(i(310));H=e,e={memoizedState:H.memoizedState,baseState:H.baseState,baseQueue:H.baseQueue,queue:H.queue,next:null},po===null?V.memoizedState=po=e:po=po.next=e}return po}function jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var t=vo;return vo+=1,yo===null&&(yo=[]),e=Ea(yo,e,t),t=V,(po===null?t.memoizedState:po.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?zs:Bs),e}function No(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Mo(e);if(e.$$typeof===C)return ea(e)}throw Error(i(438,String(e)))}function Po(e){var t=null,n=V.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=V.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=jo(),V.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function Fo(e,t){return typeof t==`function`?t(e):t}function Io(e){return Lo(U(),H,e)}function Lo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(fo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===da&&(d=!0);else if((fo&p)===p){u=u.next,p===da&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,V.lanes|=p,Gl|=p;f=u.action,go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,V.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Cr(o,e.memoizedState)&&(rc=!0,d&&(n=fa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ro(e){var t=U(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Cr(o,t.memoizedState)||(rc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function zo(e,t,n){var r=V,a=U(),o=z;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Cr((H||a).memoizedState,n);if(s&&(a.memoizedState=n,rc=!0),a=a.queue,us(Ho.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||po!==null&&po.memoizedState.tag&1){if(r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||fo&127||Bo(r,t,n)}return n}function Bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t=jo(),V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vo(e,t,n,r){t.value=n,t.getSnapshot=r,Uo(t)&&Wo(e)}function Ho(e,t,n){return n(function(){Uo(t)&&Wo(e)})}function Uo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Cr(e,n)}catch{return!0}}function Wo(e){var t=ii(e,2);t!==null&&hu(t,e,2)}function Go(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),go){ze(!0);try{n()}finally{ze(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t}function Ko(e,t,n,r){return e.baseState=n,Lo(e,H,typeof r==`function`?r:Fo)}function qo(e,t,n,r,a){if(Fs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};M.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Jo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Jo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=M.T,o={};M.T=o;try{var s=n(i,r),c=M.S;c!==null&&c(o,s),Yo(e,t,s)}catch(n){Zo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),M.T=a}}else try{a=n(i,r),Yo(e,t,a)}catch(n){Zo(e,t,n)}}function Yo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Xo(e,t,n)},function(n){return Zo(e,t,n)}):Xo(e,t,n)}function Xo(e,t,n){t.status=`fulfilled`,t.value=n,Qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Jo(e,n)))}function Zo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Qo(t),t=t.next;while(t!==r)}e.action=null}function Qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $o(e,t){return t}function es(e,t){if(z){var n=q.formState;if(n!==null){a:{var r=V;if(z){if(R){b:{for(var i=R,a=Fi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){R=cf(i.nextSibling),r=i.data===`F!`;break a}}Li(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},n.queue=r,n=Ms.bind(null,V,r),r.dispatch=n,r=Go(!1),a=Ps.bind(null,V,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=qo.bind(null,V,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ts(e){return ns(U(),H,e)}function ns(e,t,n){if(t=Lo(e,t,$o)[0],e=Io(Fo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Mo(t)}catch(e){throw e===xa?Ca:e}else r=t;t=U();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(V.flags|=2048,as(9,{destroy:void 0},rs.bind(null,i,n),null)),[r,a,e]}function rs(e,t){e.action=t}function is(e){var t=U(),n=H;if(n!==null)return ns(t,n,e);U(),t=t.memoizedState,n=U();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function as(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=V.updateQueue,t===null&&(t=jo(),V.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function os(){return U().memoizedState}function ss(e,t,n,r){var i=Ao();V.flags|=e,i.memoizedState=as(1|t,{destroy:void 0},n,r===void 0?null:r)}function cs(e,t,n,r){var i=U();r=r===void 0?null:r;var a=i.memoizedState.inst;H!==null&&r!==null&&So(r,H.memoizedState.deps)?i.memoizedState=as(t,a,n,r):(V.flags|=e,i.memoizedState=as(1|t,a,n,r))}function ls(e,t){ss(8390656,8,e,t)}function us(e,t){cs(2048,8,e,t)}function ds(e){V.flags|=4;var t=V.updateQueue;if(t===null)t=jo(),V.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function fs(e){var t=U().memoizedState;return ds({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ps(e,t){return cs(4,2,e,t)}function ms(e,t){return cs(4,4,e,t)}function hs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gs(e,t,n){n=n==null?null:n.concat([e]),cs(4,4,hs.bind(null,t,e),n)}function _s(){}function vs(e,t){var n=U();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ys(e,t){var n=U();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),go){ze(!0);try{e()}finally{ze(!1)}}return n.memoizedState=[r,t],r}function bs(e,t,n){return n===void 0||fo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),V.lanes|=e,Gl|=e,n)}function xs(e,t,n,r){return Cr(n,t)?n:Za.current===null?!(fo&42)||fo&1073741824&&!(Y&261930)?(rc=!0,e.memoizedState=n):(e=mu(),V.lanes|=e,Gl|=e,t):(e=bs(e,n,r),Cr(e,t)||(rc=!0),e)}function Ss(e,t,n,r,i){var a=N.p;N.p=a!==0&&8>a?a:8;var o=M.T,s={};M.T=s,Ps(e,!1,t,n);try{var c=i(),l=M.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ns(e,t,ha(c,r),pu(e)):Ns(e,t,r,pu(e))}catch(n){Ns(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{N.p=a,o!==null&&s.types!==null&&(o.types=s.types),M.T=o}}function Cs(){}function ws(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ts(e).queue;Ss(e,a,t,ie,n===null?Cs:function(){return Es(e),n(r)})}function Ts(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Es(e){var t=Ts(e);t.next===null&&(t=e.alternate.memoizedState),Ns(e,t.next.queue,{},pu())}function Ds(){return ea(Qf)}function Os(){return U().memoizedState}function ks(){return U().memoizedState}function As(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ha(n);var r=Ua(t,e,n);r!==null&&(hu(r,t,n),Wa(r,t,n)),t={cache:sa()},e.payload=t;return}t=t.return}}function js(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fs(e)?Is(t,n):(n=ri(e,t,n,r),n!==null&&(hu(n,e,r),Ls(n,t,r)))}function Ms(e,t,n){Ns(e,t,n,pu())}function Ns(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fs(e))Is(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Cr(s,o))return ni(e,t,i,0),q===null&&ti(),!1}catch{}if(n=ri(e,t,i,r),n!==null)return hu(n,e,r),Ls(n,t,r),!0}return!1}function Ps(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fs(e)){if(t)throw Error(i(479))}else t=ri(e,n,r,2),t!==null&&hu(t,e,2)}function Fs(e){var t=e.alternate;return e===V||t!==null&&t===V}function Is(e,t){ho=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nt(e,n)}}var Rs={readContext:ea,use:No,useCallback:xo,useContext:xo,useEffect:xo,useImperativeHandle:xo,useLayoutEffect:xo,useInsertionEffect:xo,useMemo:xo,useReducer:xo,useRef:xo,useState:xo,useDebugValue:xo,useDeferredValue:xo,useTransition:xo,useSyncExternalStore:xo,useId:xo,useHostTransitionStatus:xo,useFormState:xo,useActionState:xo,useOptimistic:xo,useMemoCache:xo,useCacheRefresh:xo};Rs.useEffectEvent=xo;var zs={readContext:ea,use:No,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:ea,useEffect:ls,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ss(4194308,4,hs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){ss(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(go){ze(!0);try{e()}finally{ze(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(go){ze(!0);try{n(t)}finally{ze(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=js.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Go(e);var t=e.queue,n=Ms.bind(null,V,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_s,useDeferredValue:function(e,t){return bs(Ao(),e,t)},useTransition:function(){var e=Go(!1);return e=Ss.bind(null,V,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=V,a=Ao();if(z){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Bo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ls(Ho.bind(null,r,o,e),[e]),r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=q.identifierPrefix;if(z){var n=Oi,r=Di;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=_o++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=bo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ds,useFormState:es,useActionState:es,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ps.bind(null,V,!0,n),n.dispatch=t,[e,t]},useMemoCache:Po,useCacheRefresh:function(){return Ao().memoizedState=As.bind(null,V)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Bs={readContext:ea,use:No,useCallback:vs,useContext:ea,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Io,useRef:os,useState:function(){return Io(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){return xs(U(),H.memoizedState,e,t)},useTransition:function(){var e=Io(Fo)[0],t=U().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){return Ko(U(),H,e,t)},useMemoCache:Po,useCacheRefresh:ks};Bs.useEffectEvent=fs;var Vs={readContext:ea,use:No,useCallback:vs,useContext:ea,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Ro,useRef:os,useState:function(){return Ro(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){var n=U();return H===null?bs(n,e,t):xs(n,H.memoizedState,e,t)},useTransition:function(){var e=Ro(Fo)[0],t=U().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:is,useActionState:is,useOptimistic:function(e,t){var n=U();return H===null?(n.baseState=e,[e,n.queue.dispatch]):Ko(n,H,e,t)},useMemoCache:Po,useCacheRefresh:ks};Vs.useEffectEvent=fs;function Hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ha(r);i.payload=t,n!=null&&(i.callback=n),t=Ua(e,i,r),t!==null&&(hu(t,e,r),Wa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ha(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ua(e,i,r),t!==null&&(hu(t,e,r),Wa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ha(n);r.tag=2,t!=null&&(r.callback=t),t=Ua(e,r,n),t!==null&&(hu(t,e,n),Wa(t,e,n))}};function Ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!wr(n,r)||!wr(i,a):!0}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Ks(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function qs(e){Zr(e)}function Js(e){console.error(e)}function Ys(e){Zr(e)}function Xs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){return n=Ha(n),n.tag=3,n.payload={element:null},n.callback=function(){Xs(e,t)},n}function $s(e){return e=Ha(e),e.tag=3,e}function ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Zs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Zs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function tc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Zi(t,n,a,!0),n=no.current,n!==null){switch(n.tag){case 31:case 13:return ro===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(z)return t=no.current,t===null?(r!==Ii&&(t=Error(i(423),{cause:r}),Ui(yi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=yi(r,n),a=Qs(e.stateNode,r,a),Ga(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ii&&(e=Error(i(422),{cause:r}),Ui(yi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=yi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=yi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Qs(n.stateNode,r,e),Ga(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=$s(a),ec(a,e,n,r),Ga(n,a),!1}n=n.return}while(n!==null);return!1}var nc=Error(i(461)),rc=!1;function ic(e,t,n,r){t.child=e===null?Ra(t,null,n,r):La(t,e.child,n,r)}function ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return $i(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!rc?(Oo(e,t,i),kc(e,t,i)):(z&&s&&ji(t),t.flags|=1,ic(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ui(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,sc(e,t,a,r,i)):(e=pi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?wr:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=di(a,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(wr(a,r)&&e.ref===t.ref)if(rc=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(rc=!0);else return t.lanes=e.lanes,kc(e,t,i)}return hc(e,t,n,r,i)}function cc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ya(t,a===null?null:a.cachePool),a===null?eo():$a(t,a),oo(t);else return r=t.lanes=536870912,uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ya(t,null),eo(),so(t)):(ya(t,a.cachePool),$a(t,a),so(t),t.memoizedState=null);return ic(e,t,i,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uc(e,t,n,r,i){var a=va();return a=a===null?null:{parent:oa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ya(t,null),eo(),oo(t),e!==null&&Zi(e,t,r,!0),t.childLanes=i,null}function dc(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return La(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,co(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(z){if(r.mode===`hidden`)return e=dc(t,r),t.lanes=536870912,lc(null,e);if(ao(t),(e=R)?(e=rf(e,Fi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ei===null?null:{id:Di,overflow:Oi},retryLane:536870912,hydrationErrors:null},n=gi(e),n.return=t,t.child=n,Pi=t,R=null)):e=null,e===null)throw Li(t);return t.lanes=536870912,null}return dc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(ao(t),a)if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(rc||Zi(e,t,n,!1),a=(n&e.childLanes)!==0,rc||a){if(r=q,r!==null&&(s=rt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ii(e,s),hu(r,e,s),nc;Du(),t=fc(e,t,n)}else e=o.treeContext,R=cf(s.nextSibling),Pi=t,z=!0,B=null,Fi=!1,e!==null&&Ni(t,e),t=dc(t,r),t.flags|=4096;return t}return e=di(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return $i(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!rc?(Oo(e,t,i),kc(e,t,i)):(z&&r&&ji(t),t.flags|=1,ic(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return $i(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!rc?(Oo(e,t,a),kc(e,t,a)):(z&&r&&ji(t),t.flags|=1,ic(e,t,n,a),t.child)}function _c(e,t,n,r,i){if($i(t),t.stateNode===null){var a=si,o=n.contextType;typeof o==`object`&&o&&(a=ea(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Us,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ba(t),o=n.contextType,a.context=typeof o==`object`&&o?ea(o):si,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Hs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Us.enqueueReplaceState(a,a.state,null),Ja(t,r,a,i),qa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ks(n,s);a.props=c;var l=a.context,u=n.contextType;o=si,typeof u==`object`&&u&&(o=ea(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Gs(t,a,r,o),za=!1;var f=t.memoizedState;a.state=f,Ja(t,r,a,i),qa(),l=t.memoizedState,s||f!==l||za?(typeof d==`function`&&(Hs(t,n,d,r),l=t.memoizedState),(c=za||Ws(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Va(e,t),o=t.memoizedProps,u=Ks(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=si,typeof l==`object`&&l&&(c=ea(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Gs(t,a,r,c),za=!1,f=t.memoizedState,a.state=f,Ja(t,r,a,i),qa();var p=t.memoizedState;o!==d||f!==p||za||e!==null&&e.dependencies!==null&&Qi(e.dependencies)?(typeof s==`function`&&(Hs(t,n,s,r),p=t.memoizedState),(u=za||Ws(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Qi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=La(t,e.child,null,i),t.child=La(t,null,n,i)):ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Vi(),t.flags|=256,ic(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:ba()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Sc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(lo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(z){if(a?io(t):so(t),(e=R)?(e=rf(e,Fi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ei===null?null:{id:Di,overflow:Oi},retryLane:536870912,hydrationErrors:null},n=gi(e),n.return=t,t.child=n,Pi=t,R=null)):e=null,e===null)throw Li(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(so(t),a=t.mode,c=wc({mode:`hidden`,children:c},a),r=mi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(null,r)):(io(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(io(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(so(t),c=r.fallback,a=t.mode,r=wc({mode:`visible`,children:r.children},a),c=mi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,La(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,t=lc(null,r)):(so(t),t.child=e.child,t.flags|=128,t=null);else if(io(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ui({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(rc||Zi(e,t,n,!1),s=(n&e.childLanes)!==0,rc||s){if(s=q,s!==null&&(r=rt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ii(e,r),hu(s,e,r),nc;af(c)||Du(),t=Tc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,R=cf(c.nextSibling),Pi=t,z=!0,B=null,Fi=!1,e!==null&&Ni(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return a?(so(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=di(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=mi(c,a,n,null),c.flags|=2):c=di(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,lc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(a=c.cachePool,a===null?a=ba():(l=oa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(e.child,r)):(io(t),n=e.child,e=n.sibling,n=di(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=li(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return La(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yi(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=lo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,P(lo,o),ic(e,t,r,n),r=z?Ci:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Zi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=di(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=di(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Qi(e))):!0}function jc(e,t,n){switch(t.tag){case 3:fe(t,t.stateNode.containerInfo),qi(t,oa,e.memoizedState.cache),Vi();break;case 27:case 5:me(t);break;case 4:fe(t,t.stateNode.containerInfo);break;case 10:qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ao(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(io(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(io(t),t.flags|=128,null);io(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Zi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),P(lo,lo.current),r)break;return null;case 22:return t.lanes=0,cc(e,t,n,t.pendingProps);case 24:qi(t,oa,e.memoizedState.cache)}return kc(e,t,n)}function W(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)rc=!0;else{if(!Ac(e,n)&&!(t.flags&128))return rc=!1,jc(e,t,n);rc=!!(e.flags&131072)}else rc=!1,z&&t.flags&1048576&&Ai(t,Ci,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Da(t.elementType),t.type=e,typeof e==`function`)ui(e)?(r=Ks(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ac(null,t,e,r,n);break a}else if(a===E){t.tag=14,t=oc(null,t,e,r,n);break a}}throw t=j(e)||e,Error(i(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ks(r,t.pendingProps),_c(e,t,r,a,n);case 3:a:{if(fe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Va(e,t),Ja(t,r,null,n);var s=t.memoizedState;if(r=s.cache,qi(t,oa,r),r!==o.cache&&Xi(t,[oa],n,!0),qa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=vc(e,t,r,n);break a}else if(r!==a){a=yi(Error(i(424)),t),Ui(a),t=vc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(R=cf(e.firstChild),Pi=t,z=!0,B=null,Fi=!0,n=Ra(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Vi(),r===a){t=kc(e,t,n);break a}ic(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:z||(n=t.type,e=t.pendingProps,r=Bd(ue.current).createElement(n),r[lt]=t,r[ut]=e,Pd(r,n,e),St(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return me(t),e===null&&z&&(r=t.stateNode=ff(t.type,t.pendingProps,ue.current),Pi=t,Fi=!0,a=R,Zd(t.type)?(lf=a,R=cf(r.firstChild)):R=a),ic(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&z&&((a=r=R)&&(r=tf(r,t.type,t.pendingProps,Fi),r===null?a=!1:(t.stateNode=r,Pi=t,R=cf(r.firstChild),Fi=!1,a=!0)),a||Li(t)),me(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),Qf._currentValue=a),mc(e,t),ic(e,t,r,n),t.child;case 6:return e===null&&z&&((e=n=R)&&(n=nf(n,t.pendingProps,Fi),n===null?e=!1:(t.stateNode=n,Pi=t,R=null,e=!0)),e||Li(t)),null;case 13:return Sc(e,t,n);case 4:return fe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=La(t,null,r,n):ic(e,t,r,n),t.child;case 11:return ac(e,t,t.type,t.pendingProps,n);case 7:return ic(e,t,t.pendingProps,n),t.child;case 8:return ic(e,t,t.pendingProps.children,n),t.child;case 12:return ic(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,qi(t,t.type,r.value),ic(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,$i(t),a=ea(a),r=r(a),t.flags|=1,ic(e,t,r,n),t.child;case 14:return oc(e,t,t.type,t.pendingProps,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return cc(e,t,n,t.pendingProps);case 24:return $i(t),r=ea(oa),e===null?(a=va(),a===null&&(a=q,o=sa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ba(t),qi(t,oa,a)):((e.lanes&n)!==0&&(Va(e,t),Ja(t,null,null,n),qa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,qi(t,oa,r),r!==a.cache&&Xi(t,[oa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),qi(t,oa,r))),ic(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Mc(e){e.flags|=4}function Nc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Oa=wa,Sa}else e.flags&=-16777217}function Pc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Oa=wa,Sa}function Fc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ze(),e.lanes|=t,Yl|=t)}function Ic(e,t){if(!z)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function G(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(Mi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return G(t),null;case 1:return G(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ji(oa),pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?Mc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Hi())),G(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Mc(t),o===null?(G(t),Nc(t,a,null,r,n)):(G(t),Pc(t,o))):o?o===e.memoizedState?(G(t),t.flags&=-16777217):(Mc(t),G(t),Pc(t,o)):(e=e.memoizedProps,e!==r&&Mc(t),G(t),Nc(t,a,e,r,n)),null;case 27:if(he(t),n=ue.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return G(t),null}e=le.current,Bi(t)?Ri(t,e):(e=ff(a,r,n),t.stateNode=e,Mc(t))}return G(t),null;case 5:if(he(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return G(t),null}if(o=le.current,Bi(t))Ri(t,o);else{var s=Bd(ue.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[lt]=t,o[ut]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Mc(t)}}return G(t),Nc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ue.current,Bi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Pi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Li(t,!0)}else e=Bd(e).createTextNode(r),e[lt]=t,t.stateNode=e}return G(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Bi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[lt]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;G(t),e=!1}else n=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(co(t),t):(co(t),null);if(t.flags&128)throw Error(i(558))}return G(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[lt]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;G(t),a=!1}else a=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(co(t),t):(co(t),null)}return co(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Fc(t,t.updateQueue),G(t),null);case 4:return pe(),e===null&&Sd(t.stateNode.containerInfo),G(t),null;case 10:return Ji(t.type),G(t),null;case 19:if(ce(lo),r=t.memoizedState,r===null)return G(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Ic(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=uo(e),o!==null){for(t.flags|=128,Ic(r,!1),e=o.updateQueue,t.updateQueue=e,Fc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)fi(n,e),n=n.sibling;return P(lo,lo.current&1|2),z&&ki(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Oe()>tu&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304)}else{if(!a)if(e=uo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Fc(t,e),Ic(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!z)return G(t),null}else 2*Oe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(G(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Oe(),e.sibling=null,n=lo.current,P(lo,a?n&1|2:n&1),z&&ki(t,r.treeForkCount),e);case 22:case 23:return co(t),to(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(G(t),t.subtreeFlags&6&&(t.flags|=8192)):G(t),n=t.updateQueue,n!==null&&Fc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ce(_a),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ji(oa),G(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(Mi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ji(oa),pe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return he(t),null;case 31:if(t.memoizedState!==null){if(co(t),t.alternate===null)throw Error(i(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(co(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(lo),null;case 4:return pe(),null;case 10:return Ji(t.type),null;case 22:case 23:return co(t),to(),e!==null&&ce(_a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ji(oa),null;case 25:return null;default:return null}}function zc(e,t){switch(Mi(t),t.tag){case 3:Ji(oa),pe();break;case 26:case 27:case 5:he(t);break;case 4:pe();break;case 31:t.memoizedState!==null&&co(t);break;case 13:co(t);break;case 19:ce(lo);break;case 10:Ji(t.type);break;case 22:case 23:co(t),to(),e!==null&&ce(_a);break;case 24:Ji(oa)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xa(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Ks(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ut]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=en));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[lt]=e,t[ut]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=Or(e),kr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ks(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ks(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Xa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_t(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Re&&typeof Re.onCommitFiberUnmount==`function`)try{Re.onCommitFiberUnmount(Le,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null)if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[gt]||o[lt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[lt]=e,St(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[lt]=e,St(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{Kt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Oe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Kt(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ya(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ca(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ca(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=ea(oa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ea(oa).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:M.T===null?ot():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||z){var e=Ge;Ge<<=1,!(Ge&3932160)&&(Ge=262144),Jl=e}else Jl=536870912;return e=no.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),$e(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ye(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Oe(),10<a)){if(yu(r,t,Jl,!Bl),Je(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:en},jl(t,a,d);var m=(a&62914560)===a?$l-Oe():(a&4194048)===a?eu-Oe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Cr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Be(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&tt(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Ki=Gi=null,ko(e),ja=null,Ma=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=di(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=Ye(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Be(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ti(),n}function Cu(e,t){V=null,M.H=Rs,t===xa||t===Ca?(t=ka(),X=3):t===Sa?(t=ka(),X=4):X=t===nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Xs(e,yi(t,e.current)))}function wu(){var e=no.current;return e===null?!0:(Y&4194048)===Y?ro===null:(Y&62914560)===Y||Y&536870912?e===ro:!1}function Tu(){var e=M.H;return M.H=Rs,e===null?Rs:e}function Eu(){var e=M.A;return M.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&no.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:no.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ki=Gi=null,K=r,M.H=i,M.A=a,J===null&&(q=null,Y=0,ti()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=Oe()+500,Su(e,t)):Vl=Ye(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ta(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Ta(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ki=Gi=null,M.H=r,M.A=a,K=n,J===null?(q=null,Y=0,ti(),Wl):0}function ju(){for(;J!==null&&!Ee();)Mu(J)}function Mu(e){var t=W(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:ko(t);default:zc(n,t),t=J=fi(t,Ul),t=W(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Ki=Gi=null,ko(t),ja=null,Ma=0;var i=t.return;try{if(tc(e,i,t,n,Y)){Wl=1,Xs(e,yi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Xs(e,yi(n,e.current)),J=null;return}t.flags&32768?(z||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=no.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ei,et(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Me,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=M.T,M.T=null,a=N.p,N.p=2,s=K,K|=4;try{il(e,t,n)}finally{K=s,N.p=a,M.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Or(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Dr(s.ownerDocument.documentElement,s)){if(c!==null&&kr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Er(s,h),v=Er(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,N.p=r,M.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,N.p=r,M.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,De();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),at(n),t=t.stateNode,Re&&typeof Re.onCommitFiberRoot==`function`)try{Re.onCommitFiberRoot(Le,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=M.T,i=N.p,N.p=2,M.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{M.T=t,N.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ca(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=at(su),r=M.T,a=N.p;try{N.p=32>n?32:n,M.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Re&&typeof Re.onPostCommitFiberRoot==`function`)try{Re.onPostCommitFiberRoot(Le,o)}catch{}return!0}finally{N.p=a,M.T=r,Vu(e,t)}}function Wu(e,t,n){t=yi(n,t),t=Qs(e.stateNode,t,2),e=Ua(e,t,2),e!==null&&($e(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=yi(n,e),n=$s(2),r=Ua(t,n,2),r!==null&&(ec(n,r,t,e),$e(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Oe()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Ze()),e=ii(e,t),e!==null&&($e(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return we(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Be(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Je(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ye(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Oe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Be(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Xe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Je(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Te(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ye(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Te(r),at(n)){case 2:case 8:n=je;break;case 32:n=Me;break;case 268435456:n=Pe;break;default:n=Me}return r=cd.bind(null,e),n=we(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Te(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Je(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Oe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?we(Ae,ad):od()})}function dd(){if(nd===0){var e=da;e===0&&(e=We,We<<=1,!(We&261888)&&(We=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:$t(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ut]||null).action),o=r.submitter;o&&(t=(t=o[ut]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Sn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ws(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ws(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Yr.length;hd++){var gd=Yr[hd];Xr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Xr(Vr,`onAnimationEnd`),Xr(Hr,`onAnimationIteration`),Xr(Ur,`onAnimationStart`),Xr(`dblclick`,`onDoubleClick`),Xr(`focusin`,`onFocus`),Xr(`focusout`,`onBlur`),Xr(Wr,`onTransitionRun`),Xr(Gr,`onTransitionStart`),Xr(Kr,`onTransitionCancel`),Xr(qr,`onTransitionEnd`),Et(`onMouseEnter`,[`mouseout`,`mouseover`]),Et(`onMouseLeave`,[`mouseout`,`mouseover`]),Et(`onPointerEnter`,[`pointerout`,`pointerover`]),Et(`onPointerLeave`,[`pointerout`,`pointerover`]),Tt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Tt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Tt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Tt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Zr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Zr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ft];n===void 0&&(n=t[ft]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ct.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!dn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=vt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}cn(function(){var r=a,i=nn(n),s=[];a:{var c=Jr.get(e);if(c!==void 0){var l=Sn,u=e;switch(e){case`keypress`:if(_n(n)===0)break a;case`keydown`:case`keyup`:l=Bn;break;case`focusin`:u=`focus`,l=jn;break;case`focusout`:u=`blur`,l=jn;break;case`beforeblur`:case`afterblur`:l=jn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=kn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=An;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Hn;break;case Vr:case Hr:case Ur:l=Mn;break;case qr:l=Un;break;case`scroll`:case`scrollend`:l=wn;break;case`wheel`:l=Wn;break;case`copy`:case`cut`:case`paste`:l=Nn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Vn;break;case`toggle`:case`beforetoggle`:l=Gn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=ln(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==tn&&(u=n.relatedTarget||n.fromElement)&&(vt(u)||u[dt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?vt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=kn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Vn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:bt(l),h=u==null?c:bt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,vt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?bt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=dr;else if(ar(c))if(fr)v=xr;else{v=yr;var y=vr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Xt(r.elementType)&&(v=dr):v=br;if(v&&=v(e,r)){or(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ht(c,`number`,c.value)}switch(y=r?bt(r):window,e){case`focusin`:(ar(y)||y.contentEditable===`true`)&&(jr=y,Mr=r,Nr=null);break;case`focusout`:Nr=Mr=jr=null;break;case`mousedown`:Pr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Pr=!1,Fr(s,n,i);break;case`selectionchange`:if(Ar)break;case`keydown`:case`keyup`:Fr(s,n,i)}var b;if(qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else tr?$n(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Xn&&n.locale!==`ko`&&(tr||x!==`onCompositionStart`?x===`onCompositionEnd`&&tr&&(b=gn()):(pn=i,mn=`value`in pn?pn.value:pn.textContent,tr=!0)),y=Ed(r,x),0<y.length&&(x=new Pn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=er(n),b!==null&&(x.data=b)))),(b=Yn?nr(e,n):rr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Pn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=ln(e,n),i!=null&&r.unshift(Td(e,i,a)),i=ln(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=ln(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=ln(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Kt(e,``+r);break;case`className`:Mt(e,`class`,r);break;case`tabIndex`:Mt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Mt(e,n,r);break;case`style`:Yt(e,r,o);break;case`data`:if(t!==`object`){Mt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=$t(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=$t(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=en);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=$t(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),jt(e,`popover`,r);break;case`xlinkActuate`:I(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:I(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:I(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:I(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:I(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:I(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:I(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:I(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:I(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:jt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Zt.get(n)||n,jt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Yt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Kt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=en);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!wt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ut]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):jt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Vt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ut(e,!!r,n,!0):Ut(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Gt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Xt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Bt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ut(e,!!n,n?[]:``,!1):Ut(e,!!n,t,!0)):Ut(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Wt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Xt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[gt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),_t(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[gt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_t(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=N.d;N.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=yt(e);t!==null&&t.tag===5&&t.type===`form`?Es(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=zt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+zt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+zt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+zt(n.imageSizes)+`"]`)):i+=`[href="`+zt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+zt(r)+`"][href="`+zt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),St(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=xt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);St(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=xt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),St(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=xt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),St(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ue.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=xt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=xt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=xt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+zt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),St(t),e.head.appendChild(t))}function Pf(e){return`[src="`+zt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+zt(n.href)+`"]`);if(r)return t.instance=r,St(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),St(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,St(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),St(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,St(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),St(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[gt]||a[lt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,St(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),St(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=li(3,null,null,t),e.current=a,a.stateNode=e,t=sa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ba(a),e}function tp(e){return e?(e=si,e):si}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ha(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ua(e,r,t),n!==null&&(hu(n,e,t),Wa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ii(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=it(t);var n=ii(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=2,up(e,t,n,r)}finally{N.p=a,M.T=i}}function lp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=8,up(e,t,n,r)}finally{N.p=a,M.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=yt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Be(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Oe()+500,id(0,!1))}}break;case 31:case 13:s=ii(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=nn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=vt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(ke()){case Ae:return 2;case je:return 8;case Me:case Ne:return 32;case Pe:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=yt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=vt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,st(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,st(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);tn=r,n.target.dispatchEvent(r),tn=null}else return t=yt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=yt(n);a!==null&&(e.splice(t,3),t-=3,ws(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ut]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ut]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[dt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ot();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:M,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Le=zp.inject(Rp),Re=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=qs,s=Js,c=Ys;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[dt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=`{
  "nodes": {
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
    "door_8flujo6mj2vg8y4c": {
      "object": "node",
      "id": "door_8flujo6mj2vg8y4c",
      "type": "door",
      "name": "Door 3",
      "parentId": "wall_yuvcspiakcghzx4g",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        0.6999999999999975,
        1.05,
        0
      ],
      "rotation": [
        0,
        6.283185307179586,
        0
      ],
      "side": "front",
      "wallId": "wall_yuvcspiakcghzx4g",
      "width": 1.07,
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
      "handleSide": "right",
      "contentPadding": [
        0.04,
        0.04
      ],
      "doorCloser": false,
      "panicBar": false,
      "panicBarHeight": 1
    },
    "door_9uplq68zz5p6mdjt": {
      "object": "node",
      "id": "door_9uplq68zz5p6mdjt",
      "type": "door",
      "name": "Door 4",
      "parentId": "wall_sqllcfd97md9ohv6",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        2.9000000000000004,
        1.05,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_sqllcfd97md9ohv6",
      "width": 1.52,
      "height": 2.1,
      "doorCategory": "interior",
      "doorType": "double",
      "leafCount": 2,
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
      "hingesSide": "left",
      "swingDirection": "inward",
      "swingAngle": 0,
      "segments": [
        {
          "type": "panel",
          "heightRatio": 0.41,
          "columnRatios": [
            1
          ],
          "dividerThickness": 0.03,
          "panelDepth": 0.01,
          "panelInset": 0.04
        },
        {
          "type": "panel",
          "heightRatio": 0.5900000000000001,
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
      "width": 1.83,
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
    "door_br43u88syod3kso3": {
      "id": "door_br43u88syod3kso3",
      "name": "Door 3",
      "side": "front",
      "type": "door",
      "width": 0.91,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_3ykin1m7rl505en6",
      "visible": true,
      "doorType": "hinged",
      "metadata": {
        "isNew": true
      },
      "panicBar": false,
      "parentId": "wall_3ykin1m7rl505en6",
      "position": [
        0.6000000000000001,
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
        2.4487993717193604,
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
    "door_jb62k8lghwa5m56b": {
      "id": "door_jb62k8lghwa5m56b",
      "name": "Door 3",
      "side": "front",
      "type": "door",
      "width": 0.91,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_kqoyi45xe6urm70d",
      "visible": true,
      "doorType": "hinged",
      "metadata": {
        "isNew": true
      },
      "panicBar": false,
      "parentId": "wall_kqoyi45xe6urm70d",
      "position": [
        1.8,
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
    "door_k55n0sv3rgsse4zq": {
      "object": "node",
      "id": "door_k55n0sv3rgsse4zq",
      "type": "door",
      "name": "Door 4",
      "parentId": "wall_10gbw3k0x20sn9cl",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        3.3000000000000003,
        1.05,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_10gbw3k0x20sn9cl",
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
      "threshold": true,
      "thresholdHeight": 0.02,
      "hingesSide": "left",
      "swingDirection": "inward",
      "swingAngle": 0,
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
    "door_p3egizrbee74p9x4": {
      "id": "door_p3egizrbee74p9x4",
      "name": "Door 3",
      "side": "front",
      "type": "door",
      "width": 0.83,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_d58kwno1m18r2cqj",
      "visible": true,
      "doorType": "hinged",
      "metadata": {
        "isNew": true
      },
      "panicBar": false,
      "parentId": "wall_d58kwno1m18r2cqj",
      "position": [
        0.5,
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
    "door_qj1n8a15vqpnjc6b": {
      "object": "node",
      "id": "door_qj1n8a15vqpnjc6b",
      "type": "door",
      "name": "Door 4",
      "parentId": "wall_xaduc5l9dljz6qhw",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        0.7000000000000001,
        1.05,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_xaduc5l9dljz6qhw",
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
    "door_t3lb0vdxysb71jf4": {
      "id": "door_t3lb0vdxysb71jf4",
      "name": "Door 3",
      "side": "back",
      "type": "door",
      "width": 0.91,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_pumjhu1e5mfql9bf",
      "visible": true,
      "doorType": "hinged",
      "metadata": {
        "isNew": true
      },
      "panicBar": false,
      "parentId": "wall_pumjhu1e5mfql9bf",
      "position": [
        4.2,
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
    "door_twpdfy7my9v00pd2": {
      "object": "node",
      "id": "door_twpdfy7my9v00pd2",
      "type": "door",
      "name": "Door 3",
      "parentId": "wall_kboist75tx0yclsj",
      "visible": true,
      "metadata": {
        "isNew": true
      },
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
      "side": "front",
      "wallId": "wall_kboist75tx0yclsj",
      "width": 0.87,
      "height": 2.1,
      "doorCategory": "interior",
      "doorType": "hinged",
      "leafCount": 1,
      "operationState": 0,
      "slideDirection": "left",
      "trackStyle": "none",
      "garagePanelCount": 4,
      "openingKind": "opening",
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
    "door_wfnixazhrv2nabrf": {
      "id": "door_wfnixazhrv2nabrf",
      "name": "Door 3",
      "side": "front",
      "type": "door",
      "width": 0.91,
      "handle": true,
      "height": 2.1,
      "object": "node",
      "wallId": "wall_3ykin1m7rl505en6",
      "visible": true,
      "doorType": "hinged",
      "metadata": {
        "isNew": true
      },
      "panicBar": false,
      "parentId": "wall_3ykin1m7rl505en6",
      "position": [
        1.9500000000000002,
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
    "item_010u26nmiwafik24": {
      "object": "node",
      "id": "item_010u26nmiwafik24",
      "type": "item",
      "name": "Herman Miller Aeron",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -7.45,
        0,
        2.65
      ],
      "rotation": [
        0,
        18.84955592153876,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "herman-miller-aeron-mo8x36k9",
        "category": "office-chairs",
        "name": "Herman Miller Aeron",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/models/item_model_YshL4maC8cHtry5c.glb",
        "dimensions": [
          0.67,
          1.06,
          0.66
        ],
        "tags": [
          "office"
        ],
        "functionTags": [
          "office-chairs"
        ],
        "offset": [
          -0.0012764498591423257,
          0.5256464391946792,
          0.0028421513736248127
        ],
        "rotation": [
          0,
          0,
          0
        ],
        "scale": [
          1.05,
          1.05,
          1.05
        ]
      }
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
        9.92270180702209,
        0,
        -6.859999999999998
      ],
      "rotation": [
        0,
        34.55751918948772,
        0
      ]
    },
    "item_1hdkr5ppq6qmxf3i": {
      "object": "node",
      "id": "item_1hdkr5ppq6qmxf3i",
      "type": "item",
      "name": "Bathroom Sink",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        11.349227397441863,
        0,
        -4.73440688171607
      ],
      "rotation": [
        0,
        174.35839227423352,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "bathroom-sink",
        "category": "sinks",
        "name": "Bathroom Sink",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bathroom-sink/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bathroom-sink/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bathroom-sink/model.glb",
        "dimensions": [
          1.83,
          0.97,
          0.63
        ],
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
        "functionTags": [
          "sinks"
        ],
        "offset": [
          0.1037352979183197,
          1.7134145480213192e-7,
          0.022128716111183167
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
    "item_1ug0qer2vtffbel6": {
      "id": "item_1ug0qer2vtffbel6",
      "name": "Car Toy",
      "type": "item",
      "asset": {
        "id": "car-toy",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/car-toy/model.glb",
        "name": "Car Toy",
        "tags": [
          "car",
          "toy",
          "vehicle",
          "racer",
          "play",
          "nursery",
          "playroom",
          "wooden",
          "vintage",
          "decor",
          "kids",
          "child",
          "classic",
          "miniature",
          "hobby"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.0004623234272003174,
          0.0004761696618515998,
          -0.007496252655982971
        ],
        "source": "library",
        "isDraft": false,
        "category": "toys",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/car-toy/thumbnail.png",
        "dimensions": [
          0.31,
          0.38,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/car-toy/floor-plan.png",
        "functionTags": [
          "toys"
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
        4.045,
        0,
        -4.981398662959234
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ]
    },
    "item_3v9vo9n7zpzo0qv2": {
      "id": "item_3v9vo9n7zpzo0qv2",
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
        0.49894195239437106,
        0,
        -0.3350000000000002
      ],
      "rotation": [
        0,
        14.137166941154069,
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
        -1.8823576451552533,
        0,
        -7.969999999999998
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ]
    },
    "item_4g9fyjloay7wye05": {
      "object": "node",
      "id": "item_4g9fyjloay7wye05",
      "type": "item",
      "name": "Bedside Table",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        4.924999999999999,
        0,
        -4.7363342285156245
      ],
      "rotation": [
        0,
        47.12388980384689,
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
    "item_57mxo9ysbpfl6geu": {
      "id": "item_57mxo9ysbpfl6geu",
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
        -0.3122815107352388,
        0,
        -9.872789142412593
      ],
      "rotation": [
        0,
        6.283185307179586,
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
        -7.513111019134522,
        0,
        -8.834570121765138
      ],
      "rotation": [
        0,
        1.5707963267948968,
        0
      ]
    },
    "item_5qx015iyn9pq2zcg": {
      "object": "node",
      "id": "item_5qx015iyn9pq2zcg",
      "type": "item",
      "name": "Bench",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        6.511505794525151,
        0,
        -7.451379888586842
      ],
      "rotation": [
        0,
        15.707963267948966,
        0
      ],
      "scale": [
        0.5,
        0.5,
        0.5
      ],
      "children": [],
      "asset": {
        "id": "bench-mqqr2xrw",
        "category": "single-beds",
        "name": "Bench",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/bench-mqqr2xrw/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/bench-mqqr2xrw/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/bench-mqqr2xrw/models/item_model_ov1TtxbqktlFKwq9.glb",
        "dimensions": [
          3.67,
          1,
          1.2
        ],
        "tags": [
          "Daybed",
          "Bench",
          "Seat"
        ],
        "functionTags": [
          "single-beds",
          "benches"
        ],
        "offset": [
          4.76837158203125e-7,
          -0.0000013623554195874021,
          0.000001519918441772461
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
    "item_7wqf465vwnnjvlp9": {
      "id": "item_7wqf465vwnnjvlp9",
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
        -6.000000000000001,
        0,
        -9.415000000000001
      ],
      "rotation": [
        0,
        -1.5707963267948961,
        0
      ]
    },
    "item_8oollnejrkx60mqg": {
      "id": "item_8oollnejrkx60mqg",
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
        1,
        1,
        1
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "wall_8uwcx0xgj5dwqvx6",
      "position": [
        2.8000000000000003,
        0.8499999999999999,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ]
    },
    "item_99rrdwx7o00f780u": {
      "object": "node",
      "id": "item_99rrdwx7o00f780u",
      "type": "item",
      "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -5.499999999999999,
        0,
        2.4000000000000004
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "scale": [
        1.1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "ctlg-gd-04-010-016-mra34ejn",
        "category": "showers",
        "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/floor-plan.png",
        "source": "mine",
        "isDraft": true,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/models/item_model_Sl2GjaOKnBSIkAVF.glb",
        "dimensions": [
          1.34,
          1.91,
          0.14
        ],
        "functionTags": [
          "showers"
        ],
        "offset": [
          -0.6655630066912079,
          0.001999922329713577,
          0.05081197261875771
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
    "item_9nh7sgu9kf8bo7fl": {
      "object": "node",
      "id": "item_9nh7sgu9kf8bo7fl",
      "type": "item",
      "name": "Bathtub",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        11.284884525299022,
        0,
        -7.9073798904418995
      ],
      "rotation": [
        0,
        161.79202165987434,
        0
      ],
      "scale": [
        0.7,
        1,
        0.7
      ],
      "children": [],
      "asset": {
        "id": "bathtub",
        "category": "bathtubs",
        "name": "Bathtub",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bathtub/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bathtub/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/bathtub/model.glb",
        "dimensions": [
          2.34,
          0.79,
          1.11
        ],
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
        "functionTags": [
          "bathtubs"
        ],
        "offset": [
          -4.172325134277344e-7,
          2.690202336452785e-7,
          8.642673492431641e-7
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
    "item_a664tb1zep03ifd0": {
      "object": "node",
      "id": "item_a664tb1zep03ifd0",
      "type": "item",
      "name": "AC block",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -9.350000000000001,
        0,
        -1.199999999999999
      ],
      "rotation": [
        0,
        9.42477796076938,
        0
      ],
      "scale": [
        0.85,
        0.6,
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
    "item_a720h5x84l8enxab": {
      "object": "node",
      "id": "item_a720h5x84l8enxab",
      "type": "item",
      "name": "马桶",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        9.226570314407349,
        0,
        -7.351398662959226
      ],
      "rotation": [
        0,
        102.10176124166827,
        0
      ],
      "scale": [
        1.2,
        1.2,
        1.2
      ],
      "children": [],
      "asset": {
        "id": "-mq0n6sz6",
        "category": "toilets",
        "name": "马桶",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/floor-plan.png",
        "source": "mine",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/models/item_model_mp3ur91Y5QHaWEIY.glb",
        "dimensions": [
          0.49,
          0.57,
          0.7
        ],
        "functionTags": [
          "toilets"
        ],
        "offset": [
          -0.41681656118384897,
          1.057109955127089e-11,
          0.385451077481526
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
    "item_adjfujjz2nd9c3f3": {
      "object": "node",
      "id": "item_adjfujjz2nd9c3f3",
      "type": "item",
      "name": "Toilet",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -6.290000000000001,
        0,
        -0.1636686614155785
      ],
      "rotation": [
        0,
        34.55751918948772,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "toilet",
        "category": "toilets",
        "name": "Toilet",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/toilet/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/toilet/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/toilet/model.glb",
        "dimensions": [
          0.42,
          0.82,
          0.72
        ],
        "tags": [
          "floor",
          "large"
        ],
        "functionTags": [
          "toilets"
        ],
        "offset": [
          -0.0000010058283805847168,
          6.139533326177116e-14,
          -0.23925671353936195
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
    "item_aeubphnsfh369l0x": {
      "id": "item_aeubphnsfh369l0x",
      "name": "Skate",
      "type": "item",
      "asset": {
        "id": "skate",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/skate/model.glb",
        "name": "Skate",
        "tags": [
          "leisure",
          "kids",
          "floor"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.0000036656856536865234,
          0.000003114849960184074,
          -0.0000037997961044311523
        ],
        "source": "library",
        "isDraft": false,
        "category": "toys",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/skate/thumbnail.png",
        "dimensions": [
          0.86,
          0.11,
          0.2
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/skate/floor-plan.png",
        "functionTags": [
          "toys"
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
      "parentId": "shelf_f9zy9t0s97t0171h",
      "position": [
        0.26422975354278044,
        0.87,
        0.011306419753949193
      ],
      "rotation": [
        0,
        0,
        0
      ]
    },
    "item_bl7drmon79s8reo2": {
      "id": "item_bl7drmon79s8reo2",
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
        1.3292297535427804,
        0,
        0.019190541071001155
      ],
      "rotation": [
        0,
        0,
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
    "item_c3iogt8wjiwgg3ru": {
      "id": "item_c3iogt8wjiwgg3ru",
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
        0.6,
        1,
        0.7
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        3.923769760131838,
        0,
        -7.1549999999999985
      ],
      "rotation": [
        0,
        17.27875959474386,
        0
      ]
    },
    "item_c8x6jz26mix9okfl": {
      "object": "node",
      "id": "item_c8x6jz26mix9okfl",
      "type": "item",
      "name": "Showerhead",
      "parentId": "wall_jwjfg77bupgbeu5g",
      "visible": true,
      "metadata": {},
      "position": [
        0.5,
        0.19663296631980387,
        0
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
      "side": "front",
      "children": [],
      "wallId": "wall_qjygnprvr89sbc3j",
      "wallT": 0.07751969464760844,
      "asset": {
        "id": "showerhead-mqsfsfct",
        "category": "showers",
        "name": "Showerhead",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/models/item_model_TZ6CRNoOLCsTOS8Z.glb",
        "dimensions": [
          0.57,
          1.56,
          0.58
        ],
        "attachTo": "wall-side",
        "tags": [
          "Fixture",
          "Showerhead"
        ],
        "functionTags": [
          "showers"
        ],
        "offset": [
          0.019445911049842834,
          0.33513043701648715,
          0.000500180758535862
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
    "item_cdd8icfo4eos9f44": {
      "object": "node",
      "id": "item_cdd8icfo4eos9f44",
      "type": "item",
      "name": "AC block",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -10.1,
        0,
        -1.2499999999999991
      ],
      "rotation": [
        0,
        6.283185307179586,
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
    "item_cfv1xhd9yznrfv5c": {
      "id": "item_cfv1xhd9yznrfv5c",
      "name": "Barbell Stand",
      "type": "item",
      "asset": {
        "id": "barbell-stand",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/barbell-stand/model.glb",
        "name": "Barbell Stand",
        "tags": [
          "rack",
          "stand",
          "holder",
          "storage",
          "metal",
          "steel",
          "industrial",
          "fitness",
          "gym",
          "weightlifting",
          "training",
          "minimalist",
          "black",
          "organizer"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -0.017334431409835815,
          0,
          0
        ],
        "source": "library",
        "isDraft": false,
        "category": "fitness",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/barbell-stand/thumbnail.png",
        "dimensions": [
          1.34,
          1.22,
          1.72
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/barbell-stand/floor-plan.png",
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
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        9.499999999999998,
        0,
        -3.15
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ]
    },
    "item_ckpfdmacyhw7o5gu": {
      "object": "node",
      "id": "item_ckpfdmacyhw7o5gu",
      "type": "item",
      "name": "Closet",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -5.300000000000001,
        0,
        0.6000000000000001
      ],
      "rotation": [
        0,
        31.41592653589793,
        0
      ],
      "scale": [
        0.6,
        1,
        1
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
      "object": "node",
      "id": "item_cowe8780vnw2j18w",
      "type": "item",
      "name": "Sink",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -4.9360354084421045,
        0.4,
        0.9001015192593043
      ],
      "rotation": [
        0,
        23.561944901923447,
        0
      ],
      "scale": [
        1,
        1,
        0.8
      ],
      "children": [],
      "asset": {
        "id": "sink-mpwnhw5r",
        "category": "columns",
        "name": "Sink",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/floor-plan.png",
        "source": "community",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/models/item_model_ZLuuS1FAKRYLTRkN.glb",
        "dimensions": [
          1,
          0.5,
          0.6
        ],
        "tags": [
          "Bathroom floating sink"
        ],
        "functionTags": [
          "columns",
          "sinks",
          "cabinets"
        ],
        "offset": [
          0.0009755492210388184,
          0.2476077377796173,
          -0.0007567554712295532
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
    "item_cxjc5mzdlyiwlxb8": {
      "id": "item_cxjc5mzdlyiwlxb8",
      "name": "Dining Table",
      "type": "item",
      "asset": {
        "id": "dining-table",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-table/model.glb",
        "name": "Dining Table",
        "tags": [
          "table",
          "dining",
          "furniture",
          "wood",
          "modern",
          "minimalist",
          "kitchen",
          "eating",
          "surface",
          "contemporary",
          "gathering",
          "walnut"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.000007331371307373047,
          2.5154230343105155e-7,
          -0.00768674910068512
        ],
        "source": "library",
        "isDraft": false,
        "surface": {
          "height": 0.7
        },
        "category": "dining-tables",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-table/thumbnail.png",
        "dimensions": [
          2.16,
          0.7,
          0.95
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-table/floor-plan.png",
        "functionTags": [
          "dining-tables"
        ]
      },
      "scale": [
        1.3,
        1,
        1.4
      ],
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {
        "isTransient": true
      },
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -6.75,
        0,
        -8.520000000000001
      ],
      "rotation": [
        0,
        4.71238898038469,
        0
      ]
    },
    "item_disggwompqms7zqj": {
      "object": "node",
      "id": "item_disggwompqms7zqj",
      "type": "item",
      "name": "Standing Desk",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        11.329999999999998,
        0,
        -3.243152923583984
      ],
      "rotation": [
        0,
        36.12831551628262,
        0
      ],
      "scale": [
        1,
        1,
        0.9
      ],
      "children": [],
      "asset": {
        "id": "standing-desk-mo8wgz95",
        "category": "desks",
        "name": "Standing Desk",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/models/item_model_zzZ58018waP8VY6Z.glb",
        "dimensions": [
          1.41,
          0.85,
          0.68
        ],
        "tags": [
          "office"
        ],
        "functionTags": [
          "desks"
        ],
        "offset": [
          0.00004610419273376465,
          0.4203098952770233,
          0.0018924519419670216
        ],
        "rotation": [
          0,
          0,
          0
        ],
        "scale": [
          1.4,
          1.4,
          1.4
        ]
      }
    },
    "item_dvmrz1gvux3j5gpr": {
      "object": "node",
      "id": "item_dvmrz1gvux3j5gpr",
      "type": "item",
      "name": "Sink",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -7.150000000000001,
        0.4,
        -0.14999999999999786
      ],
      "rotation": [
        0,
        47.12388980384689,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "sink-mpwnhw5r",
        "category": "columns",
        "name": "Sink",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/floor-plan.png",
        "source": "community",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/models/item_model_ZLuuS1FAKRYLTRkN.glb",
        "dimensions": [
          1,
          0.5,
          0.6
        ],
        "tags": [
          "Bathroom floating sink"
        ],
        "functionTags": [
          "columns",
          "sinks",
          "cabinets"
        ],
        "offset": [
          0.0009755492210388184,
          0.2476077377796173,
          -0.0007567554712295532
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
    "item_e9hnkpu5rg6hkj1b": {
      "id": "item_e9hnkpu5rg6hkj1b",
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
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        10.450000000000003,
        0,
        -4.999999999999997
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ]
    },
    "item_e9v6hmzy9lft1q64": {
      "id": "item_e9v6hmzy9lft1q64",
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
        1.2499999999999996,
        0,
        -0.3382825513205133
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ]
    },
    "item_ezfgzb0tp299p8q0": {
      "object": "node",
      "id": "item_ezfgzb0tp299p8q0",
      "type": "item",
      "name": "小便斗",
      "parentId": "wall_64gpo4susju51rl2",
      "visible": true,
      "metadata": {},
      "position": [
        1.35,
        0,
        0
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
      "side": "front",
      "children": [],
      "wallId": "wall_8o63hlv6vydon2d9",
      "wallT": 0.7088269948959348,
      "asset": {
        "id": "-mq0n49x4",
        "category": "toilets",
        "name": "小便斗",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n49x4/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n49x4/floor-plan.png",
        "source": "mine",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n49x4/models/item_model_1PmQoTc1vvwBimHY.glb",
        "dimensions": [
          0.31,
          0.87,
          0.47
        ],
        "attachTo": "wall",
        "functionTags": [
          "toilets"
        ],
        "offset": [
          -0.4,
          0,
          0.5
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
    "item_feib83gv3xgti4dt": {
      "object": "node",
      "id": "item_feib83gv3xgti4dt",
      "type": "item",
      "name": "AC block",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -10.100000000000003,
        0,
        -2.7999999999999994
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "scale": [
        0.5,
        0.3,
        0.6
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
    "item_gedhhy4u9sotya5v": {
      "object": "node",
      "id": "item_gedhhy4u9sotya5v",
      "type": "item",
      "name": "Kitchen",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -10.828918746948242,
        0,
        1.2448541958920227
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ],
      "scale": [
        0.6,
        1,
        0.71
      ],
      "children": [],
      "asset": {
        "id": "kitchen",
        "category": "sinks",
        "name": "Kitchen",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/model.glb",
        "dimensions": [
          2.38,
          1.03,
          0.84
        ],
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
        "functionTags": [
          "sinks",
          "cabinets"
        ],
        "offset": [
          -0.0000029206275939941406,
          2.466928776811983e-7,
          2.9802322387695312e-8
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
          "height": 0.797
        }
      }
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
        -0.22795585632324084,
        0,
        -5.914305240818116
      ],
      "rotation": [
        0,
        9.42477796076938,
        0
      ]
    },
    "item_h7g1o33cdq9xy49c": {
      "id": "item_h7g1o33cdq9xy49c",
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
        -6.022193813323975,
        0,
        -7.660350513458253
      ],
      "rotation": [
        0,
        -1.5707963267948961,
        0
      ]
    },
    "item_hj6sez8ye9u4hr56": {
      "id": "item_hj6sez8ye9u4hr56",
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
        -7.498494052886963,
        0,
        -7.562904071807862
      ],
      "rotation": [
        0,
        1.5707963267948974,
        0
      ]
    },
    "item_hvs9w8vpatvsy58q": {
      "object": "node",
      "id": "item_hvs9w8vpatvsy58q",
      "type": "item",
      "name": "AC block",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -10.149999999999999,
        0,
        -2.0000000000000004
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "scale": [
        0.5,
        1.6,
        0.6
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
    "item_hy6l9qjmcpdvpmpj": {
      "object": "node",
      "id": "item_hy6l9qjmcpdvpmpj",
      "type": "item",
      "name": "master Bed",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -9.5,
        0,
        1.4000000000000004
      ],
      "rotation": [
        0,
        32.98672286269283,
        0
      ],
      "scale": [
        0.9,
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
        -6.022193813323975,
        0,
        -8.235280227661134
      ],
      "rotation": [
        0,
        -1.5707963267948961,
        0
      ]
    },
    "item_ix5w6wengpnhq4en": {
      "object": "node",
      "id": "item_ix5w6wengpnhq4en",
      "type": "item",
      "name": "Bedside Table",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -8.503471711723371,
        0,
        -8.32567114830017
      ],
      "rotation": [
        0,
        45.553093477052,
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
    "item_k84onnjg52sm1od0": {
      "id": "item_k84onnjg52sm1od0",
      "name": "Car Toy",
      "type": "item",
      "asset": {
        "id": "car-toy",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/car-toy/model.glb",
        "name": "Car Toy",
        "tags": [
          "car",
          "toy",
          "vehicle",
          "racer",
          "play",
          "nursery",
          "playroom",
          "wooden",
          "vintage",
          "decor",
          "kids",
          "child",
          "classic",
          "miniature",
          "hobby"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          0.0004623234272003174,
          0.0004761696618515998,
          -0.007496252655982971
        ],
        "source": "library",
        "isDraft": false,
        "category": "toys",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/car-toy/thumbnail.png",
        "dimensions": [
          0.31,
          0.38,
          0.6
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/car-toy/floor-plan.png",
        "functionTags": [
          "toys"
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
        3.6393614035863067,
        0,
        -4.981398662959234
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ]
    },
    "item_kehfwt4qvv9ym2eh": {
      "object": "node",
      "id": "item_kehfwt4qvv9ym2eh",
      "type": "item",
      "name": "Bedside Table",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -8.50347171172337,
        0,
        -5.529065516429947
      ],
      "rotation": [
        0,
        39.269908169872416,
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
    "item_kelrsbcaiecj34h0": {
      "object": "node",
      "id": "item_kelrsbcaiecj34h0",
      "type": "item",
      "name": "Kitchen",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -7.030000000000004,
        0,
        -4.86
      ],
      "rotation": [
        0,
        45.553093477052,
        0
      ],
      "scale": [
        1.1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "kitchen",
        "category": "cabinets",
        "name": "Kitchen",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/model.glb",
        "dimensions": [
          2.38,
          1.03,
          0.84
        ],
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
        "functionTags": [
          "cabinets"
        ],
        "offset": [
          -0.0000029206275939941406,
          2.466928776811983e-7,
          2.9802322387695312e-8
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
          "height": 0.797
        }
      }
    },
    "item_krkri3xwj1ax7n5o": {
      "id": "item_krkri3xwj1ax7n5o",
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
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        8.902701807022096,
        0,
        -6.084999999999997
      ],
      "rotation": [
        0,
        34.55751918948772,
        0
      ]
    },
    "item_l0deaqef0xo7boq8": {
      "id": "item_l0deaqef0xo7boq8",
      "name": "Gym Bench",
      "type": "item",
      "asset": {
        "id": "gym-bench-mqqqtv7m",
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/gym-bench-mqqqtv7m/models/item_model_LrNMWNIltTQ69uK2.glb",
        "name": "Gym Bench",
        "tags": [
          "Gym",
          "Bench",
          "Fitness"
        ],
        "scale": [
          1,
          1,
          1
        ],
        "offset": [
          -7.152557373046875e-7,
          0.010371342301368713,
          -0.000001817941665649414
        ],
        "source": "library",
        "isDraft": false,
        "category": "fitness",
        "rotation": [
          0,
          0,
          0
        ],
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/gym-bench-mqqqtv7m/thumbnail.png",
        "dimensions": [
          1.52,
          0.49,
          0.64
        ],
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/gym-bench-mqqqtv7m/floor-plan.png",
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
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        11.125000000000002,
        0,
        -3.2249999999999996
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ]
    },
    "item_mdw59m5sefjiw7pm": {
      "id": "item_mdw59m5sefjiw7pm",
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
        -7.488749885559082,
        0,
        -9.453348350524903
      ],
      "rotation": [
        0,
        1.5707963267948963,
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
        -7.47,
        0,
        7.624289932250976
      ],
      "rotation": [
        0,
        1.568895021487244,
        0
      ]
    },
    "item_n2i9vd54ycqea795": {
      "id": "item_n2i9vd54ycqea795",
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
        8.8020258218179,
        0.4,
        -4.48224890291691
      ],
      "rotation": [
        0,
        53.40707511102649,
        0
      ]
    },
    "item_opd8zhqoj2qfjsec": {
      "object": "node",
      "id": "item_opd8zhqoj2qfjsec",
      "type": "item",
      "name": "Closet",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        1.5000000000000002,
        0,
        -2.25
      ],
      "rotation": [
        0,
        47.12388980384689,
        0
      ],
      "scale": [
        1.2,
        1,
        1
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
    "item_p27oeu9o0gie7qln": {
      "object": "node",
      "id": "item_p27oeu9o0gie7qln",
      "type": "item",
      "name": "AC block",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -10.750000000000002,
        0,
        -0.5500000000000005
      ],
      "rotation": [
        0,
        20.420352248333657,
        0
      ],
      "scale": [
        1.1,
        2,
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
    "item_p68narnplomx7l54": {
      "object": "node",
      "id": "item_p68narnplomx7l54",
      "type": "item",
      "name": "马桶",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -5.025817298889165,
        0,
        1.9166653227806087
      ],
      "rotation": [
        0,
        29.845130209103033,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "-mq0n6sz6",
        "category": "toilets",
        "name": "马桶",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/floor-plan.png",
        "source": "mine",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/models/item_model_mp3ur91Y5QHaWEIY.glb",
        "dimensions": [
          0.49,
          0.57,
          0.7
        ],
        "functionTags": [
          "toilets"
        ],
        "offset": [
          -0.41681656118384897,
          1.057109955127089e-11,
          0.385451077481526
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
    "item_p8kn5fasbyabq95o": {
      "id": "item_p8kn5fasbyabq95o",
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
        9.815694483233475,
        0,
        -4.47224890291691
      ],
      "rotation": [
        0,
        59.690260418206066,
        0
      ]
    },
    "item_q6l1d0u0mbclckjz": {
      "object": "node",
      "id": "item_q6l1d0u0mbclckjz",
      "type": "item",
      "name": "Kitchen",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -8.11987052154541,
        0,
        -2.9579198970794662
      ],
      "rotation": [
        0,
        43.982297150257104,
        0
      ],
      "scale": [
        0.6,
        1,
        0.8
      ],
      "children": [],
      "asset": {
        "id": "kitchen",
        "category": "sinks",
        "name": "Kitchen",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/model.glb",
        "dimensions": [
          2.38,
          1.03,
          0.84
        ],
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
        "functionTags": [
          "sinks",
          "cabinets"
        ],
        "offset": [
          -0.0000029206275939941406,
          2.466928776811983e-7,
          2.9802322387695312e-8
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
          "height": 0.797
        }
      }
    },
    "item_qjjvp4whftbabkzs": {
      "id": "item_qjjvp4whftbabkzs",
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
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        10.944999999999997,
        0,
        -6.143879888586845
      ],
      "rotation": [
        0,
        34.55751918948772,
        0
      ]
    },
    "item_qmhod8evoai6fg1z": {
      "object": "node",
      "id": "item_qmhod8evoai6fg1z",
      "type": "item",
      "name": "master bed",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        6.560000000000003,
        0,
        -5.6300000000000034
      ],
      "rotation": [
        0,
        72.25663103256524,
        0
      ],
      "scale": [
        1.2,
        1.2,
        1.2
      ],
      "children": [],
      "asset": {
        "id": "master-bed-mpz60tb0",
        "category": "double-beds",
        "name": "master bed",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/master-bed-mpz60tb0/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/master-bed-mpz60tb0/floor-plan.png",
        "source": "mine",
        "isDraft": true,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/master-bed-mpz60tb0/models/item_model_F3avXI7HsEuEq38Q.glb",
        "dimensions": [
          1.8,
          1.03,
          1.93
        ],
        "tags": [
          "bed"
        ],
        "functionTags": [
          "double-beds"
        ],
        "offset": [
          -0.00008432865142821155,
          0.5091416835784912,
          0.0006441771984100342
        ],
        "rotation": [
          0,
          0,
          0
        ],
        "scale": [
          1.8,
          2,
          2.5
        ]
      }
    },
    "item_qx1s65m7u6ode81w": {
      "object": "node",
      "id": "item_qx1s65m7u6ode81w",
      "type": "item",
      "name": "Standing Desk",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -7.600000000000001,
        0,
        3.1500000000000004
      ],
      "rotation": [
        0,
        34.55751918948772,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "standing-desk-mo8wgz95",
        "category": "desks",
        "name": "Standing Desk",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/models/item_model_zzZ58018waP8VY6Z.glb",
        "dimensions": [
          1.41,
          0.85,
          0.68
        ],
        "tags": [
          "office"
        ],
        "functionTags": [
          "desks"
        ],
        "offset": [
          0.00004610419273376465,
          0.4203098952770233,
          0.0018924519419670216
        ],
        "rotation": [
          0,
          0,
          0
        ],
        "scale": [
          1.4,
          1.4,
          1.4
        ]
      }
    },
    "item_r0ux2yyxdaqm4num": {
      "object": "node",
      "id": "item_r0ux2yyxdaqm4num",
      "type": "item",
      "name": "Bedside Table",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -10.23,
        0,
        2.5299999999999994
      ],
      "rotation": [
        0,
        14.137166941154069,
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
    "item_rq6a3d1g9m0sbyhh": {
      "id": "item_rq6a3d1g9m0sbyhh",
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
        7.1000000000000005,
        0,
        -6.550000000000001
      ],
      "rotation": [
        0,
        58.119464091411174,
        0
      ]
    },
    "item_ttq70o7yr8l4lhwf": {
      "object": "node",
      "id": "item_ttq70o7yr8l4lhwf",
      "type": "item",
      "name": "马桶",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -10.105165249474638,
        0,
        -5.053919897079468
      ],
      "rotation": [
        0,
        32.98672286269283,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "-mq0n6sz6",
        "category": "toilets",
        "name": "马桶",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/floor-plan.png",
        "source": "mine",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0n6sz6/models/item_model_mp3ur91Y5QHaWEIY.glb",
        "dimensions": [
          0.49,
          0.57,
          0.7
        ],
        "functionTags": [
          "toilets"
        ],
        "offset": [
          -0.41681656118384897,
          1.057109955127089e-11,
          0.385451077481526
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
    "item_umz29qgq0hh93bxj": {
      "id": "item_umz29qgq0hh93bxj",
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
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        1.2849999999999997,
        0,
        0.8721611811406911
      ],
      "rotation": [
        0,
        0,
        0
      ]
    },
    "item_v4eqax0yf6wmnt9p": {
      "object": "node",
      "id": "item_v4eqax0yf6wmnt9p",
      "type": "item",
      "name": "Closet",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -6.699999999999999,
        0,
        2.1000000000000005
      ],
      "rotation": [
        0,
        28.274333882308138,
        0
      ],
      "scale": [
        0.9,
        1,
        1
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
    "item_vn1phhu5v0w48udl": {
      "object": "node",
      "id": "item_vn1phhu5v0w48udl",
      "type": "item",
      "name": "master Bed",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -7.573471711723373,
        0,
        -6.889065516429944
      ],
      "rotation": [
        0,
        51.83627878423159,
        0
      ],
      "scale": [
        1,
        1,
        1
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
    "item_w4ykmz7ssfow1hm8": {
      "object": "node",
      "id": "item_w4ykmz7ssfow1hm8",
      "type": "item",
      "name": "AC block",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -10.75,
        0,
        -1.25
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ],
      "scale": [
        0.65,
        2,
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
    "item_xfpbu5j0upfbvv4g": {
      "object": "node",
      "id": "item_xfpbu5j0upfbvv4g",
      "type": "item",
      "name": "Closet",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -6.7,
        0,
        0.6000000000000001
      ],
      "rotation": [
        0,
        31.41592653589793,
        0
      ],
      "scale": [
        0.9,
        1,
        1
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
        -0.31483662257270034,
        0,
        -7.971454204696254
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ]
    },
    "item_y9x9je8pttr1n83t": {
      "object": "node",
      "id": "item_y9x9je8pttr1n83t",
      "type": "item",
      "name": "Bedside Table",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -10.180000000000001,
        0,
        0.24000000000000005
      ],
      "rotation": [
        0,
        7.853981633974483,
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
    "item_ypbum4dm627slect": {
      "id": "item_ypbum4dm627slect",
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
        -7.517982387542725,
        0,
        -8.210916709899903
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ]
    },
    "item_yufy8mdmh7s13pgg": {
      "id": "item_yufy8mdmh7s13pgg",
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
        -5.997831249237061,
        0,
        -8.824824523925782
      ],
      "rotation": [
        0,
        -1.5707963267948961,
        0
      ]
    },
    "item_znmyjmiellg2z3vm": {
      "id": "item_znmyjmiellg2z3vm",
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
        7.1,
        0,
        -8.1
      ],
      "rotation": [
        0,
        58.119464091411174,
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
      "visible": false,
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
        "rseg_dmgmpg675i852ymn",
        "rseg_ygcdwubirswb5y4l"
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
      "visible": false,
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
      "visible": false,
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
        "rseg_yedlhyeb55bcj1s7",
        "rseg_b94r54lwz63dskzy"
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
    "rseg_b94r54lwz63dskzy": {
      "id": "rseg_b94r54lwz63dskzy",
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
      "depth": 9.4,
      "pitch": 24,
      "width": 10.6,
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "overhang": 0.3,
      "parentId": "roof_w5he0jkiywejg966",
      "position": [
        14.006991811841097,
        3.3,
        -0.5432825513205133
      ],
      "roofType": "gable",
      "rotation": 3.141592653589793,
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
      "width": 3.9,
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
      "depth": 4.5,
      "pitch": 20,
      "width": 1,
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {},
      "overhang": 0.41,
      "parentId": "roof_lnsbxcznxwp9xhkc",
      "position": [
        -0.0600000000000005,
        0.6,
        0.13000000000000078
      ],
      "roofType": "gable",
      "rotation": 0,
      "wallHeight": 0,
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
    "rseg_yedlhyeb55bcj1s7": {
      "object": "node",
      "id": "rseg_yedlhyeb55bcj1s7",
      "type": "roof-segment",
      "parentId": "roof_w5he0jkiywejg966",
      "visible": true,
      "metadata": {},
      "position": [
        6.506991811841097,
        3.3,
        -1.0432825513205133
      ],
      "rotation": 1.5707963267948966,
      "roofType": "gable",
      "width": 13.1,
      "depth": 8,
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
      "pitch": 24,
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
    "rseg_ygcdwubirswb5y4l": {
      "id": "rseg_ygcdwubirswb5y4l",
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
      "width": 3.9,
      "object": "node",
      "visible": true,
      "children": [],
      "metadata": {
        "isNew": true
      },
      "overhang": 0.3,
      "parentId": "roof_4rdsj61l85pdcmnv",
      "position": [
        10.640056035599736,
        3.1,
        -2.6515318702134207
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
    "site_ki35u6k5svcjwzv3": {
      "id": "site_ki35u6k5svcjwzv3",
      "type": "site",
      "object": "node",
      "polygon": {
        "type": "polygon",
        "points": [
          [
            -13.950127601623535,
            -25.476097106933594
          ],
          [
            16.644235610961914,
            -26.060827255249023
          ],
          [
            15.428971290588379,
            12.415566444396973
          ],
          [
            7.9530534744262695,
            15.803342819213867
          ],
          [
            0.34226521849632263,
            18.728437423706055
          ],
          [
            -7.730528354644775,
            20.684280395507812
          ],
          [
            -15.5745267868042,
            22.06916046142578
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
    "slab_0y248p7g2an4qoai": {
      "id": "slab_0y248p7g2an4qoai",
      "name": "Room 104 Slab",
      "type": "slab",
      "holes": [],
      "object": "node",
      "polygon": [
        [
          -1.148022018724731,
          2.19981793740085
        ],
        [
          -1.1480220187247308,
          0.5
        ],
        [
          -0.5592108880780169,
          0.08749524191253055
        ],
        [
          -0.11006018069273615,
          -0.47386236699071116
        ],
        [
          0.16322560881141568,
          -1.1388237194566686
        ],
        [
          0.23861785233020782,
          -1.8537885665893554
        ],
        [
          2.7,
          -1.8537885665893556
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
    "slab_2gd9j98t005hjd2m": {
      "object": "node",
      "id": "slab_2gd9j98t005hjd2m",
      "type": "slab",
      "name": "Room 111 Slab",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -4.6000000000000005,
          2.478200674057007
        ],
        [
          -4.596686580756225,
          -1.3311327675982185
        ],
        [
          -5.899958115009166,
          -1.3311288816418902
        ],
        [
          -5.899416981445723,
          -4.949945029051432
        ],
        [
          -4.65,
          -4.95
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
          1.9000000000000001,
          -9
        ],
        [
          1.85,
          -5.7
        ],
        [
          2.7,
          -5.7
        ],
        [
          2.7,
          -4.428850173950195
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
        ]
      ],
      "holes": [
        [
          [
            -2.95,
            -2.9000000000000004
          ],
          [
            -2.95,
            -4.25
          ],
          [
            -2.35,
            -4.25
          ],
          [
            -1.8,
            -3.9000000000000004
          ],
          [
            -1.5,
            -3.45
          ],
          [
            -1.25,
            -2.9000000000000004
          ],
          [
            -1.3,
            2.35
          ],
          [
            -2.15,
            2.85
          ],
          [
            -3.8000000000000003,
            2.8000000000000003
          ],
          [
            -4.65,
            2.4000000000000004
          ],
          [
            -4.55,
            -0.8
          ],
          [
            -4.55,
            -1.5
          ],
          [
            -4.25,
            -2.25
          ],
          [
            -3.75,
            -2.7
          ]
        ],
        [
          [
            -4.55,
            -10.600000000000001
          ],
          [
            1.8,
            -10.65
          ],
          [
            1.8,
            -5.8500000000000005
          ],
          [
            0.35000000000000003,
            -5.800000000000001
          ],
          [
            -0.45,
            -6.050000000000001
          ],
          [
            -1.6500000000000001,
            -6.300000000000001
          ],
          [
            -2.6500000000000004,
            -6.4
          ],
          [
            -3.45,
            -6.1000000000000005
          ],
          [
            -4.2,
            -5.7
          ],
          [
            -4.65,
            -5.122736549377441
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
      "autoFromWalls": false
    },
    "slab_7ny0ur8w6829spst": {
      "id": "slab_7ny0ur8w6829spst",
      "name": "Room 99 Slab",
      "type": "slab",
      "holes": [],
      "object": "node",
      "polygon": [
        [
          6.750277347883061,
          -1.8537885665893554
        ],
        [
          6.750277347883061,
          -4.1000000000000005
        ],
        [
          11.75,
          -4.1000000000000005
        ],
        [
          11.75,
          -1.8537885665893552
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "elevation": 0.05,
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "slab_egsi03j9go435l41": {
      "id": "slab_egsi03j9go435l41",
      "name": "Room 133 Slab",
      "type": "slab",
      "holes": [],
      "object": "node",
      "polygon": [
        [
          1.9000000000000001,
          -9
        ],
        [
          6.750494429018985,
          -8.999025028617169
        ],
        [
          6.750276373551734,
          -5.300026084551986
        ],
        [
          1.8999990256686734,
          -5.300007342042391
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "elevation": 0.05,
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "slab_srstr8zzwp9jwdfk": {
      "id": "slab_srstr8zzwp9jwdfk",
      "name": "Room 95 Slab",
      "type": "slab",
      "holes": [],
      "object": "node",
      "polygon": [
        [
          6.750277347883061,
          -4.1000000000000005
        ],
        [
          6.750494429018985,
          -8.999025028617169
        ],
        [
          11.75,
          -8.998152923583985
        ],
        [
          11.75,
          -5.800000000000001
        ],
        [
          8.3,
          -5.800000000000001
        ],
        [
          8.3,
          -4.1000000000000005
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "elevation": 0.05,
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "slab_tvux6lbc4ix2fogc": {
      "id": "slab_tvux6lbc4ix2fogc",
      "name": "Room 136 Slab",
      "type": "slab",
      "holes": [],
      "object": "node",
      "polygon": [
        [
          11.75,
          -4.1000000000000005
        ],
        [
          8.3,
          -4.1000000000000005
        ],
        [
          8.3,
          -5.800000000000001
        ],
        [
          11.75,
          -5.800000000000001
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "elevation": 0.05,
      "holeMetadata": [],
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
    "wall_0yioafzcbv3cj03h": {
      "object": "node",
      "id": "wall_0yioafzcbv3cj03h",
      "type": "wall",
      "name": "Wall 98",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "start": [
        1.9000000000000001,
        -9
      ],
      "end": [
        1.8999990256686734,
        -5.300007342042391
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_10gbw3k0x20sn9cl": {
      "object": "node",
      "id": "wall_10gbw3k0x20sn9cl",
      "type": "wall",
      "name": "Wall 101",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "door_k55n0sv3rgsse4zq"
      ],
      "height": 2.74,
      "start": [
        2.7,
        -1.8537885665893556
      ],
      "end": [
        -1.2000000000000002,
        -1.85
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_3ykin1m7rl505en6": {
      "id": "wall_3ykin1m7rl505en6",
      "end": [
        6.750277347883061,
        -1.8537885665893554
      ],
      "name": "Wall 93",
      "type": "wall",
      "start": [
        6.750276373551734,
        -5.300026084551986
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "door_br43u88syod3kso3",
        "door_wfnixazhrv2nabrf"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior"
    },
    "wall_4dnlh79bzdiae0sq": {
      "id": "wall_4dnlh79bzdiae0sq",
      "end": [
        -1.148022018724731,
        2.19981793740085
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
        "window_nj2k9lc7qmgls6va"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_4na2vnq6y2kpaxcw": {
      "object": "node",
      "id": "wall_4na2vnq6y2kpaxcw",
      "type": "wall",
      "name": "Wall 91",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "start": [
        2.7,
        2.2
      ],
      "end": [
        2.7,
        -1.8537885665893556
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_56m0cuwykjwedx2y": {
      "object": "node",
      "id": "wall_56m0cuwykjwedx2y",
      "type": "wall",
      "name": "Wall 113",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "window_i6jjufvdolvewfff",
        "window_4i6jqdojkycac1r3"
      ],
      "slots": {},
      "height": 3.05,
      "start": [
        11.75,
        -8.998152923583985
      ],
      "end": [
        1.9000000000000001,
        -9
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_5e74bbgfng06ij2v": {
      "id": "wall_5e74bbgfng06ij2v",
      "end": [
        -1.138415994959748,
        0.8478581299369649
      ],
      "name": "Wall 103",
      "type": "wall",
      "start": [
        -1.1500000000000001,
        2.478200674057007
      ],
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "exterior"
    },
    "wall_5ld53lqd7tpg14f9": {
      "object": "node",
      "id": "wall_5ld53lqd7tpg14f9",
      "type": "wall",
      "name": "Wall 35",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -4.65,
        -8.924649810791015
      ],
      "end": [
        -4.65,
        -10.8
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_5pkh0m9qksve8upb": {
      "id": "wall_5pkh0m9qksve8upb",
      "end": [
        -1.1480220187247308,
        0.5
      ],
      "name": "Wall 89",
      "type": "wall",
      "start": [
        0.23861785233020782,
        -1.8537885665893554
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "unknown",
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "unknown",
      "curveOffset": 0.4
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
        "window_pglflo7yj249uu3a"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_6p6q7ojfk0w3rb2j": {
      "id": "wall_6p6q7ojfk0w3rb2j",
      "end": [
        -3.7828824995228247,
        2.9499636829170583
      ],
      "name": "Wall 125",
      "type": "wall",
      "start": [
        -4.6000000000000005,
        2.478200674057007
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
    "wall_7q0igcgudqsf4mr6": {
      "object": "node",
      "id": "wall_7q0igcgudqsf4mr6",
      "type": "wall",
      "name": "Wall 113",
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
        1.9000000000000001,
        -10.8
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_84jzbms3nr73r869": {
      "id": "wall_84jzbms3nr73r869",
      "end": [
        -1.1480220187247308,
        0.5
      ],
      "name": "Wall 87",
      "type": "wall",
      "start": [
        -1.148022018724731,
        2.19981793740085
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
    "wall_8uwcx0xgj5dwqvx6": {
      "id": "wall_8uwcx0xgj5dwqvx6",
      "end": [
        11.75,
        -4.1000000000000005
      ],
      "name": "Wall 93",
      "type": "wall",
      "start": [
        8.3,
        -4.1000000000000005
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "item_8oollnejrkx60mqg"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_afhprkkvcovsgdzi": {
      "id": "wall_afhprkkvcovsgdzi",
      "end": [
        6.750494429018985,
        -8.999025028617169
      ],
      "name": "Wall 99",
      "type": "wall",
      "start": [
        6.750276373551734,
        -5.300026084551986
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
    "wall_ag4xz82fkzfty3lt": {
      "id": "wall_ag4xz82fkzfty3lt",
      "end": [
        -3.7828824995228247,
        2.9499636829170583
      ],
      "name": "Wall 125",
      "type": "wall",
      "start": [
        -4.6000000000000005,
        2.478200674057007
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
    "wall_ard5a93tnt3wzzh6": {
      "object": "node",
      "id": "wall_ard5a93tnt3wzzh6",
      "type": "wall",
      "name": "Wall 105",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        2.7,
        -1.8537885665893556
      ],
      "end": [
        2.7,
        0.8478581309318545
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_axxldfp22zv87lnt": {
      "object": "node",
      "id": "wall_axxldfp22zv87lnt",
      "type": "wall",
      "name": "Wall 95",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "start": [
        -11.19999999999968,
        2.499999978484372
      ],
      "end": [
        -12.199999999113944,
        2.499999976563334
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_bvgcs7isi2dii2f7": {
      "object": "node",
      "id": "wall_bvgcs7isi2dii2f7",
      "type": "wall",
      "name": "Wall 158",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -4.65,
        -8.924649810791015
      ],
      "end": [
        -4.65,
        -4.95
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_c783g0mjvk11z4he": {
      "object": "node",
      "id": "wall_c783g0mjvk11z4he",
      "type": "wall",
      "name": "Wall 47",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "window_dmv96pwr85brar07",
        "window_vodlvu7szftir2mv"
      ],
      "height": 3.05,
      "start": [
        2.7,
        -1.8537885665893556
      ],
      "end": [
        11.75,
        -1.8537885665893552
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_c7xckgeri2o7uts3": {
      "id": "wall_c7xckgeri2o7uts3",
      "end": [
        8.3,
        -5.800000000000001
      ],
      "name": "Wall 95",
      "type": "wall",
      "start": [
        11.75,
        -5.800000000000001
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "unknown",
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "unknown"
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
    "wall_d58kwno1m18r2cqj": {
      "id": "wall_d58kwno1m18r2cqj",
      "end": [
        8.3,
        -4.1000000000000005
      ],
      "name": "Wall 105",
      "type": "wall",
      "start": [
        8.3,
        -5.800000000000001
      ],
      "object": "node",
      "visible": true,
      "backSide": "unknown",
      "children": [
        "door_p3egizrbee74p9x4"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "unknown"
    },
    "wall_e71f2dnudh7lpb9v": {
      "object": "node",
      "id": "wall_e71f2dnudh7lpb9v",
      "type": "wall",
      "name": "Wall 36",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "window_dv1pu1mawz7e666c"
      ],
      "height": 2.74,
      "start": [
        -8.8,
        -8.924649810791015
      ],
      "end": [
        -4.65,
        -8.924649810791015
      ],
      "frontSide": "interior",
      "backSide": "exterior"
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
    "wall_grk3h1cdzdwzqwq0": {
      "id": "wall_grk3h1cdzdwzqwq0",
      "end": [
        -4.599999999999999,
        12.85
      ],
      "name": "Wall 126",
      "type": "wall",
      "start": [
        -4.6000000000000005,
        2.478200674057007
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "door_63mh4bxrm80jvzw3",
        "door_e10ytun62cai4o0h"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_jwagsbhrbrpi9qkd": {
      "id": "wall_jwagsbhrbrpi9qkd",
      "end": [
        8.3,
        -4.1000000000000005
      ],
      "name": "Wall 93",
      "type": "wall",
      "start": [
        6.750277347883061,
        -4.1000000000000005
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "unknown",
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "unknown"
    },
    "wall_jwjfg77bupgbeu5g": {
      "object": "node",
      "id": "wall_jwjfg77bupgbeu5g",
      "type": "wall",
      "name": "Wall 107",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "item_c8x6jz26mix9okfl"
      ],
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
    "wall_kboist75tx0yclsj": {
      "object": "node",
      "id": "wall_kboist75tx0yclsj",
      "type": "wall",
      "name": "Wall 124",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "door_twpdfy7my9v00pd2"
      ],
      "height": 3.05,
      "start": [
        -4.6000000000000005,
        2.478200674057007
      ],
      "end": [
        -4.5726423548447475,
        0.5
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_kqoyi45xe6urm70d": {
      "object": "node",
      "id": "wall_kqoyi45xe6urm70d",
      "type": "wall",
      "name": "Wall 93",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "door_jb62k8lghwa5m56b"
      ],
      "height": 3.05,
      "start": [
        2.7,
        -1.8537885665893556
      ],
      "end": [
        0.23861785233020782,
        -1.8537885665893554
      ],
      "frontSide": "exterior",
      "backSide": "interior"
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
    "wall_l8qn4aqt4icpw6ns": {
      "id": "wall_l8qn4aqt4icpw6ns",
      "end": [
        -1.1500000000000001,
        -1.9000000000000001
      ],
      "name": "Wall 93",
      "type": "wall",
      "start": [
        -1.138415994959748,
        0.8478581299369649
      ],
      "height": 2.74,
      "object": "node",
      "visible": true,
      "backSide": "unknown",
      "children": [],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
      "frontSide": "unknown"
    },
    "wall_li9wu3696qmij4w1": {
      "object": "node",
      "id": "wall_li9wu3696qmij4w1",
      "type": "wall",
      "name": "Wall 104",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        -12.100000000000001,
        -3.2
      ],
      "end": [
        -11.199999999995894,
        -3.1999999999999926
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_mwyxv9b3rfowofji": {
      "object": "node",
      "id": "wall_mwyxv9b3rfowofji",
      "type": "wall",
      "name": "Wall 89",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "start": [
        -4.6,
        2.4999999999999796
      ],
      "end": [
        -7.699985684586803,
        2.500000266943914
      ],
      "frontSide": "interior",
      "backSide": "exterior"
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
        "window_0ei5meru0ws6ho6c"
      ],
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa",
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
        "window_baqictsnumw1fabt"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_pumjhu1e5mfql9bf": {
      "id": "wall_pumjhu1e5mfql9bf",
      "end": [
        1.8999990256686734,
        -5.300007342042391
      ],
      "name": "Wall 98",
      "type": "wall",
      "start": [
        6.750276373551734,
        -5.300026084551986
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "exterior",
      "children": [
        "door_t3lb0vdxysb71jf4"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_sx5zae3ghhwcqwgj": {
      "id": "wall_sx5zae3ghhwcqwgj",
      "end": [
        11.75,
        -8.998152923583985
      ],
      "name": "Wall 53",
      "type": "wall",
      "slots": {},
      "start": [
        11.75,
        -1.8537885665893552
      ],
      "height": 3.05,
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [
        "window_a6r09eogcwc576nv",
        "window_6x51ris6pi67h2gq",
        "window_bkig2eusw464npij"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior",
      "curveOffset": 0
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
    "wall_x9ypfzv087srj3sa": {
      "id": "wall_x9ypfzv087srj3sa",
      "end": [
        -12.199999999113944,
        2.499999976563334
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
        "window_v3aro78mtmcz7j4p"
      ],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "interior"
    },
    "wall_yfoy804qw60xlo3w": {
      "id": "wall_yfoy804qw60xlo3w",
      "end": [
        -1.148022018724731,
        2.19981793740085
      ],
      "name": "Wall 86",
      "type": "wall",
      "start": [
        -1.1500000000000001,
        2.478200674057007
      ],
      "object": "node",
      "visible": true,
      "backSide": "interior",
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "frontSide": "exterior"
    },
    "wall_yw7se4h029auzwpp": {
      "object": "node",
      "id": "wall_yw7se4h029auzwpp",
      "type": "wall",
      "name": "Wall 113",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "start": [
        1.9000000000000001,
        -9
      ],
      "end": [
        1.9000000000000001,
        -10.8
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_zgt30hblc7v8tpgm": {
      "object": "node",
      "id": "wall_zgt30hblc7v8tpgm",
      "type": "wall",
      "name": "Wall 24",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -10.475817298889162,
        -6.8500000000000005
      ],
      "end": [
        -8.8,
        -6.8500000000000005
      ],
      "frontSide": "interior",
      "backSide": "exterior"
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
    "zone_03shf4yl22n5zgcq": {
      "id": "zone_03shf4yl22n5zgcq",
      "name": "OFFICE 1",
      "type": "zone",
      "color": "#ef4444",
      "object": "node",
      "polygon": [
        [
          -1.148022018724731,
          2.15
        ],
        [
          2.7,
          2.2
        ],
        [
          2.7,
          -1.8537885665893556
        ],
        [
          0.2,
          -1.8
        ],
        [
          0.2,
          -1.1500000000000001
        ],
        [
          -0.15000000000000002,
          -0.4
        ],
        [
          -0.5,
          -0.05
        ],
        [
          -1,
          0.4
        ],
        [
          -1.1480220187247308,
          0.5
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5"
    },
    "zone_0mk39mn9yzgozpvl": {
      "id": "zone_0mk39mn9yzgozpvl",
      "name": "READING",
      "type": "zone",
      "color": "#cccccc",
      "object": "node",
      "polygon": [
        [
          -1.1387845183948346,
          0.8997244259752715
        ],
        [
          -1.1500000000000001,
          -1.9000000000000001
        ],
        [
          2.7,
          -1.8537885665893556
        ],
        [
          2.6500000000005555,
          0.8478581309188948
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_tf1ug5dswkkzfhqa"
    },
    "zone_b01ow5jgqc65oknk": {
      "id": "zone_b01ow5jgqc65oknk",
      "name": "PE ROOM",
      "type": "zone",
      "color": "#22c55e",
      "object": "node",
      "polygon": [
        [
          6.75,
          -1.8
        ],
        [
          6.750277347883061,
          -3.809945583343506
        ],
        [
          8.5,
          -3.809945583343506
        ],
        [
          8.55,
          -4.4
        ],
        [
          11.75,
          -4.4
        ],
        [
          11.75,
          -1.8537885665893552
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5"
    },
    "zone_k5kt0iynzxq8k0ff": {
      "id": "zone_k5kt0iynzxq8k0ff",
      "name": "BATH 1",
      "type": "zone",
      "color": "#84cc16",
      "object": "node",
      "polygon": [
        [
          8.5,
          -4.4
        ],
        [
          8.5,
          -6.005707263946533
        ],
        [
          11.75,
          -5.949999999999999
        ],
        [
          11.75,
          -4.4
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5"
    },
    "zone_n7nre71pgwumtwyi": {
      "id": "zone_n7nre71pgwumtwyi",
      "name": "PLAY AREA",
      "type": "zone",
      "color": "#cccccc",
      "object": "node",
      "polygon": [
        [
          0.23861785233020782,
          -1.8537885665893554
        ],
        [
          6.750277347883061,
          -1.8537885665893554
        ],
        [
          6.7,
          -5.300000000000001
        ],
        [
          0.25,
          -5.3500000000000005
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5"
    },
    "zone_pvz03tmw5ocph3og": {
      "id": "zone_pvz03tmw5ocph3og",
      "name": "STAIR",
      "type": "zone",
      "color": "#64748b",
      "object": "node",
      "polygon": [
        [
          -4.5726423548447475,
          0.5
        ],
        [
          -1.1480220187247308,
          0.5
        ],
        [
          -0.4762705765975105,
          -0.17175144212722016
        ],
        [
          0.02193390885509583,
          -0.7302730711918637
        ],
        [
          0.3195758107229949,
          -1.8537885665893554
        ],
        [
          0.3195758107229951,
          -5.053788566589356
        ],
        [
          -4.5804241892770055,
          -5.053788566589355
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5"
    },
    "zone_q7ghxgq25nhv74sh": {
      "id": "zone_q7ghxgq25nhv74sh",
      "name": "BEDROOM 1",
      "type": "zone",
      "color": "#f59e0b",
      "object": "node",
      "polygon": [
        [
          6.750277347883061,
          -3.809945583343506
        ],
        [
          8.5,
          -3.809945583343506
        ],
        [
          8.5,
          -6
        ],
        [
          11.700000000000001,
          -6.005707263946533
        ],
        [
          11.649999657151806,
          -8.99817167569311
        ],
        [
          6.699999831213196,
          -8.999099901879685
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5"
    },
    "zone_sboupfx7zmk18btf": {
      "id": "zone_sboupfx7zmk18btf",
      "name": "RECREATION ROOM",
      "type": "zone",
      "color": "#f97316",
      "object": "node",
      "polygon": [
        [
          1.85,
          -5.25
        ],
        [
          1.9000000000000001,
          -9
        ],
        [
          6.750494429018985,
          -8.999025028617169
        ],
        [
          6.7,
          -5.300000000000001
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5"
    },
    "zone_spspdugeeh1iq7f4": {
      "id": "zone_spspdugeeh1iq7f4",
      "name": "FOYER",
      "type": "zone",
      "color": "#a855f7",
      "object": "node",
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
          -1.1480220187247308,
          0.5
        ],
        [
          -4.5726423548447475,
          0.5
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5"
    },
    "zone_vmz0bqy0qcqd9k2y": {
      "id": "zone_vmz0bqy0qcqd9k2y",
      "name": "LIVING ROOM",
      "type": "zone",
      "color": "#6366f1",
      "object": "node",
      "polygon": [
        [
          1.9000000000000004,
          -5.047865165453818
        ],
        [
          -4.6,
          -5.047865165453817
        ],
        [
          -4.6,
          -10.747865165453817
        ],
        [
          1.9000000000000001,
          -10.747865165453817
        ]
      ],
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5"
    },
    "fence_1xg9h2i1um3dhdln": {
      "id": "fence_1xg9h2i1um3dhdln",
      "end": [
        -4.25,
        -5.7
      ],
      "name": "Fence 30",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -3.9000000000000004,
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
    "fence_64xq1u3556vu77p8": {
      "id": "fence_64xq1u3556vu77p8",
      "end": [
        -3,
        -6.300000000000001
      ],
      "name": "Fence 27",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -2.4000000000000004,
        -6.3500000000000005
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
    "fence_72eiueh87kmy5xu0": {
      "id": "fence_72eiueh87kmy5xu0",
      "end": [
        -1.75,
        -6.300000000000001
      ],
      "name": "Fence 25",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -1.25,
        -6.2
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
    "fence_8phjst18vl8vdtx7": {
      "id": "fence_8phjst18vl8vdtx7",
      "end": [
        -0.65,
        -6
      ],
      "name": "Fence 23",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -0.30000000000000004,
        -5.9
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
    "fence_arvgbqjmrisk41gb": {
      "id": "fence_arvgbqjmrisk41gb",
      "end": [
        0.25,
        -5.7
      ],
      "name": "Fence 21",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        0.8,
        -5.7
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
    "fence_f4hrrg1cmvvqvb37": {
      "id": "fence_f4hrrg1cmvvqvb37",
      "end": [
        -4.6000000000000005,
        -5.4
      ],
      "name": "Fence 31",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -4.25,
        -5.7
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
    "fence_i3i283f7ehjth7yq": {
      "id": "fence_i3i283f7ehjth7yq",
      "end": [
        -1.25,
        -6.2
      ],
      "name": "Fence 24",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -0.65,
        -6
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
    "fence_io91rs91tn1xdiu7": {
      "id": "fence_io91rs91tn1xdiu7",
      "end": [
        -3.5,
        -6.1000000000000005
      ],
      "name": "Fence 28",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -3,
        -6.300000000000001
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
    "fence_k0g5y732b93a6e3a": {
      "id": "fence_k0g5y732b93a6e3a",
      "end": [
        0.8,
        -5.7
      ],
      "name": "Fence 20",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        1.2000000000000002,
        -5.7
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
    "fence_k2p6iiuldfobhjck": {
      "id": "fence_k2p6iiuldfobhjck",
      "end": [
        1.2000000000000002,
        -5.7
      ],
      "name": "Fence 19",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        1.85,
        -5.75
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
    "fence_l7anl8ogbri4hdvu": {
      "id": "fence_l7anl8ogbri4hdvu",
      "end": [
        -0.30000000000000004,
        -5.9
      ],
      "name": "Fence 22",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        0.25,
        -5.7
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
    "fence_l7mzemsgtkih0zmp": {
      "id": "fence_l7mzemsgtkih0zmp",
      "end": [
        -2.4000000000000004,
        -6.3500000000000005
      ],
      "name": "Fence 26",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -1.75,
        -6.300000000000001
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
    "fence_wpgoeyq2m7h3vkoh": {
      "id": "fence_wpgoeyq2m7h3vkoh",
      "end": [
        -3.9000000000000004,
        -5.95
      ],
      "name": "Fence 29",
      "type": "fence",
      "color": "#ffffff",
      "start": [
        -3.5,
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
    "guide_skw3c7nl1xlddmod": {
      "id": "guide_skw3c7nl1xlddmod",
      "url": "asset://2fb07cfd-34ce-4235-8e83-ed45e62512d6",
      "name": "20260706-144228",
      "type": "guide",
      "scale": 3.9371438252155233,
      "object": "node",
      "opacity": 82,
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
      "scale": 6.25,
      "object": "node",
      "opacity": 50,
      "visible": true,
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "position": [
        -1.1969835281372063,
        0,
        5.403388404846192
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ],
      "scaleReference": {
        "end": [
          22.002269444652523,
          7.704306385597903
        ],
        "label": "78 ft",
        "start": [
          -1.7721226215362542,
          7.723729133605957
        ],
        "metersPerUnit": 1,
        "realLengthMeters": 23.7744,
        "measuredLengthUnits": 23.7744
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
        "wall_ggq4ktwq1dux6fyt",
        "wall_6kahn8f9drv85wf3",
        "wall_ovpjmscb9a1b9a2t",
        "wall_ed7diphapsqo8s61",
        "wall_0e9fl70a13qct144",
        "wall_x9ypfzv087srj3sa",
        "wall_c783g0mjvk11z4he",
        "wall_yw7se4h029auzwpp",
        "wall_56m0cuwykjwedx2y",
        "stair_dyp7dqxtm1mg9fxb",
        "wall_sx5zae3ghhwcqwgj",
        "spawn_hg41m7n0824a12jl",
        "roof_lnsbxcznxwp9xhkc",
        "item_brknoq8wgxtcw270",
        "item_mnwpz9skkf8qlflq",
        "item_cxjc5mzdlyiwlxb8",
        "item_h7g1o33cdq9xy49c",
        "item_i6oqa8crrz268qt0",
        "item_yufy8mdmh7s13pgg",
        "item_7wqf465vwnnjvlp9",
        "item_hj6sez8ye9u4hr56",
        "item_ypbum4dm627slect",
        "item_5pl86d2sjqzigmpw",
        "item_mdw59m5sefjiw7pm",
        "item_3z6z594t7p9le06y",
        "item_xqcxswzh8m3a6v81",
        "item_gfwnftffebe6mh54",
        "item_0aahggnuvs15c6lx",
        "item_qjjvp4whftbabkzs",
        "item_kelrsbcaiecj34h0",
        "wall_grk3h1cdzdwzqwq0",
        "wall_kboist75tx0yclsj",
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
        "item_adjfujjz2nd9c3f3",
        "item_gedhhy4u9sotya5v",
        "shelf_f9zy9t0s97t0171h",
        "item_k84onnjg52sm1od0",
        "item_krkri3xwj1ax7n5o",
        "wall_mwyxv9b3rfowofji",
        "item_c3iogt8wjiwgg3ru",
        "item_57mxo9ysbpfl6geu",
        "item_1ug0qer2vtffbel6",
        "shelf_kxonfx3w453msbb5",
        "item_umz29qgq0hh93bxj",
        "item_bl7drmon79s8reo2",
        "wall_pumjhu1e5mfql9bf",
        "wall_0yioafzcbv3cj03h",
        "item_v4eqax0yf6wmnt9p",
        "item_dvmrz1gvux3j5gpr",
        "item_n2i9vd54ycqea795",
        "item_p8kn5fasbyabq95o",
        "item_e9hnkpu5rg6hkj1b",
        "item_cfv1xhd9yznrfv5c",
        "item_l0deaqef0xo7boq8",
        "wall_8uwcx0xgj5dwqvx6",
        "slab_srstr8zzwp9jwdfk",
        "ceiling_zjo6t980c77r2w4f",
        "wall_kqoyi45xe6urm70d",
        "wall_4na2vnq6y2kpaxcw",
        "shelf_919uxbi7tkqi2l5s",
        "wall_3ykin1m7rl505en6",
        "wall_jwagsbhrbrpi9qkd",
        "slab_7ny0ur8w6829spst",
        "ceiling_5pgrwqe0m3ikeqlx",
        "shelf_0lu8k5liwxfx3ujf",
        "wall_c7xckgeri2o7uts3",
        "ceiling_bbo9mf9el2u5xal0",
        "item_znmyjmiellg2z3vm",
        "wall_yfoy804qw60xlo3w",
        "wall_84jzbms3nr73r869",
        "wall_5pkh0m9qksve8upb",
        "slab_0y248p7g2an4qoai",
        "ceiling_6qhled75h6u8h5h8",
        "zone_vmz0bqy0qcqd9k2y",
        "zone_spspdugeeh1iq7f4",
        "zone_pvz03tmw5ocph3og",
        "zone_n7nre71pgwumtwyi",
        "zone_03shf4yl22n5zgcq",
        "zone_sboupfx7zmk18btf",
        "zone_q7ghxgq25nhv74sh",
        "zone_k5kt0iynzxq8k0ff",
        "zone_b01ow5jgqc65oknk",
        "shelf_nyts33xx28o5r3cl",
        "shelf_fltmqqy6wrlq97sz",
        "wall_axxldfp22zv87lnt",
        "wall_li9wu3696qmij4w1",
        "wall_afhprkkvcovsgdzi",
        "slab_egsi03j9go435l41",
        "ceiling_wewcqx1e471hx10w",
        "wall_d58kwno1m18r2cqj",
        "slab_tvux6lbc4ix2fogc",
        "item_rq6a3d1g9m0sbyhh",
        "item_cdd8icfo4eos9f44",
        "item_a664tb1zep03ifd0",
        "item_w4ykmz7ssfow1hm8",
        "item_p27oeu9o0gie7qln",
        "item_xfpbu5j0upfbvv4g",
        "item_ckpfdmacyhw7o5gu",
        "item_ugv5f82w7wfrzqqt",
        "wall_yuvcspiakcghzx4g",
        "wall_8sho2tmzzowgww0x",
        "item_kh9t5y5kp95wi7jv",
        "shelf_uezdda7wyo0efhp7",
        "wall_fz175tvrersrnu3o",
        "wall_kr6vucuf1jucba4m",
        "item_pg9m6esqtx68up07",
        "item_f2q959zewh6iu1n2",
        "item_348v7t77kgcx9ac5",
        "wall_2n479sj52u10o0z2",
        "wall_vdctednoz5xiqjlz",
        "wall_1np9087mdx93rr4w",
        "wall_9r2uy0oht08epwof",
        "wall_kcbhav7btp366v2v",
        "item_9srcgjx6fx7qn4ru",
        "item_xbz96hwvq9vgqvfh",
        "wall_0zyr98dkpe008asr",
        "wall_9fz5c4btvnihy7nu",
        "item_pldwa4kowdv1zr5b",
        "wall_6cwwvdsejkj5mtqj",
        "wall_s2l3s7z5tx9ibmiz",
        "slab_0e9obojce1ap3d5x",
        "ceiling_3tqalovzxhntxmk4",
        "wall_64gpo4susju51rl2",
        "wall_pvhmiwunqcp5hdtv",
        "slab_1praewuohund6oqn",
        "ceiling_1jtgbofj5be5xewr",
        "wall_6705axe3s9ceb0ay",
        "wall_yrrsrrfjd67iibsp",
        "item_7w7f81supdmz4a3r",
        "item_9a0zqvbfmsl5fw1w",
        "item_bvm6g5dv7tafz2nx",
        "shelf_rgt7s0vjijt93bji",
        "wall_2fobd0o5x204ngk1",
        "wall_iuk24zw5o84rvcxh",
        "slab_ggzwfm5sfmllafw7",
        "ceiling_ru7wc4kuyzbeuwww",
        "slab_m5z3cwvgago0ut5i",
        "ceiling_4k7bqk21s155khjv",
        "item_gq07kpc58s7fupyx",
        "item_4lwzgyd13g5lq0pt",
        "item_fyk0whfb3qnubffq",
        "item_qks6b078kc1t2tji",
        "slab_o7aqk8xf1awmro34",
        "ceiling_kh9lo8p18kumkk1a",
        "wall_x4r17ykcfb06w8r0",
        "wall_nsbplym2ij9rljak",
        "wall_fbx6g1cw8y66jyxl",
        "wall_wcgqkcmw4u2d1g76",
        "item_4wpktclqtilzdyzr",
        "item_heutnmkucr6u4z35",
        "slab_bbhiqr3nykgxgkrp",
        "ceiling_u4nehlecmtwdrky2"
      ],
      "metadata": {},
      "parentId": null
    },
    "level_tf1ug5dswkkzfhqa": {
      "id": "level_tf1ug5dswkkzfhqa",
      "name": "Level 2",
      "type": "level",
      "level": 3,
      "object": "node",
      "visible": true,
      "children": [
        "wall_zgt30hblc7v8tpgm",
        "wall_e71f2dnudh7lpb9v",
        "wall_5ld53lqd7tpg14f9",
        "wall_ennfhed1hm0ozhch",
        "wall_7q0igcgudqsf4mr6",
        "roof_3o2f40xn8ztdoqd3",
        "wall_ag4xz82fkzfty3lt",
        "wall_twjrbha7gdx24q8c",
        "wall_c8lo4kz4h0mef9yv",
        "wall_bvgcs7isi2dii2f7",
        "wall_ard5a93tnt3wzzh6",
        "wall_nqx2se3a3eksgajk",
        "wall_jwjfg77bupgbeu5g",
        "roof_w5he0jkiywejg966",
        "guide_skw3c7nl1xlddmod",
        "item_5qx015iyn9pq2zcg",
        "item_4g9fyjloay7wye05",
        "item_qmhod8evoai6fg1z",
        "item_a720h5x84l8enxab",
        "item_1hdkr5ppq6qmxf3i",
        "item_9nh7sgu9kf8bo7fl",
        "item_vn1phhu5v0w48udl",
        "item_hy6l9qjmcpdvpmpj",
        "item_q6l1d0u0mbclckjz",
        "item_p68narnplomx7l54",
        "item_cowe8780vnw2j18w",
        "item_ttq70o7yr8l4lhwf",
        "wall_5e74bbgfng06ij2v",
        "item_r0ux2yyxdaqm4num",
        "item_y9x9je8pttr1n83t",
        "item_ix5w6wengpnhq4en",
        "item_kehfwt4qvv9ym2eh",
        "wall_l8qn4aqt4icpw6ns",
        "item_e9v6hmzy9lft1q64",
        "item_3v9vo9n7zpzo0qv2",
        "wall_10gbw3k0x20sn9cl",
        "item_disggwompqms7zqj",
        "fence_k2p6iiuldfobhjck",
        "fence_k0g5y732b93a6e3a",
        "fence_arvgbqjmrisk41gb",
        "fence_l7anl8ogbri4hdvu",
        "fence_8phjst18vl8vdtx7",
        "fence_i3i283f7ehjth7yq",
        "fence_72eiueh87kmy5xu0",
        "fence_l7mzemsgtkih0zmp",
        "fence_64xq1u3556vu77p8",
        "fence_io91rs91tn1xdiu7",
        "fence_wpgoeyq2m7h3vkoh",
        "fence_1xg9h2i1um3dhdln",
        "fence_f4hrrg1cmvvqvb37",
        "shelf_iulhj8vcr7r691gd",
        "slab_2gd9j98t005hjd2m",
        "ceiling_czdauxnk25mqysgw",
        "item_opd8zhqoj2qfjsec",
        "zone_0mk39mn9yzgozpvl",
        "item_qx1s65m7u6ode81w",
        "item_010u26nmiwafik24",
        "item_hvs9w8vpatvsy58q",
        "item_feib83gv3xgti4dt",
        "item_99rrdwx7o00f780u",
        "wall_yk6pyronezflq7oq",
        "wall_7vs6usbdbwl1fpj1",
        "wall_chyvbnwkdqiarh4a",
        "wall_u8bf7qp6ir81zdje",
        "wall_ajkfn9x5nhwh0nz0",
        "wall_3h6tliyg9pf6y3er",
        "slab_wigv0olo5w0paq3x",
        "ceiling_66mqroe89qhv1e9s",
        "item_zz7yvum9mrt0j56w",
        "item_kz1xbksea7hc7mx9",
        "wall_2riamsz1w705fer1",
        "wall_j05s827qhjwcbph1",
        "shelf_7wg8928laesasxm5",
        "item_jtrur0cqvh5mwf0v",
        "item_g61nx371l5sj8k38",
        "wall_ux7q9bx68zm7ult0",
        "wall_z9mro4a3rbhvmjq0",
        "wall_9agz89c4axzi4bkc",
        "wall_ms2ba8my4dpdiavh",
        "item_c5ja0ko7ahi3y0oj",
        "wall_yo2o8nw3a4n423b3",
        "wall_hvd8u004bsrn1fg6",
        "wall_u12pm7wgggqbger9",
        "ceiling_5qsh2tudfesmcozw",
        "slab_q05q691dafpsjz96",
        "wall_s1bmn01nyv9al5ea",
        "slab_zq03zv3lr83m91ej",
        "ceiling_qd1r2b1n0yfh3j6n",
        "wall_erzhw1w5zothkceq",
        "slab_r2uu8snjatau3fhg",
        "ceiling_kd5qopvqwoeguvp6",
        "item_lwkxr6ctoadeu534",
        "slab_q76k0030ajuvgzn4",
        "ceiling_vfe0rtiujm2yu50m",
        "item_rbsl8iwg6o616xav",
        "item_4h4y5cnezdlql2ld",
        "wall_xaduc5l9dljz6qhw",
        "wall_s036gfqzmc1miaps",
        "item_63sjm8ylgm23qb1r",
        "slab_99g2l23fs254twv8",
        "ceiling_g0m4iuzk4ij5tw5f",
        "item_auy4vg58u1ifbmtw",
        "wall_0tuf5ostnayck566",
        "item_92vqmxlrz7elnndn",
        "wall_ajirvb9nh4kzaxri",
        "item_7f92ag24xxjrpbym",
        "item_fub9juq9c7jeixui",
        "slab_p2q7xl3v94vj7fv4",
        "ceiling_2oyht0io974pqaw4",
        "item_lw5om5q88e111fgb",
        "item_rjz69oafvbbkqtia",
        "item_wm1ou6xixhb2rok3",
        "item_tlprp2eo77uztu7w",
        "wall_sqllcfd97md9ohv6",
        "wall_yi3gp4vcq0alqyw6",
        "wall_fndchix487xx7wze",
        "wall_2lndng4qf6ayungu",
        "item_hpe0aeknbd50jsqy",
        "wall_j99jdesrplxx601j",
        "wall_uq1oj9r7t5kmsdrf",
        "wall_4ccxztoixucc2z4v",
        "item_ryo3lcb1s9mm2t74",
        "item_fd6o288q93b2ppr1",
        "wall_dqfovzqiua56it4i",
        "wall_6c8i5dgp88s6zr9w",
        "wall_dtic71v8klclym7f",
        "wall_n2ovifo6s90cyvo5",
        "wall_fny1uv77vol8rnos",
        "item_qa6qbmqsqcumgeu8",
        "item_6ew40b03jyyrawy9",
        "wall_at674vpu7mw818yg",
        "wall_k36u6qwtme5m5ex5",
        "wall_zd9nn4l77x2clujj",
        "item_5ed257x91yculwd5",
        "item_p80kxycneu4dbfot",
        "item_azee3g5232hyf6l0",
        "wall_8mgle38jeings29r",
        "wall_q83y2pxckd370mx9",
        "shelf_8myupo3z4jzfcr63",
        "item_rkmt97llo64fh1f5",
        "item_l6hro1258047hb4d",
        "item_6gopbpkl68b7abuv",
        "wall_uzljfp0kfhmiyf1a"
      ],
      "metadata": {},
      "parentId": "building_mzbjbmaocmp350cc"
    },
    "shelf_0lu8k5liwxfx3ujf": {
      "object": "node",
      "id": "shelf_0lu8k5liwxfx3ujf",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        7.58,
        0.25,
        -2.21
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "width": 1.53,
      "depth": 0.5,
      "thickness": 0.05,
      "height": 2.16,
      "style": "bookshelf",
      "rows": 4,
      "columns": 4,
      "withBack": false,
      "withSides": true,
      "withBottom": true,
      "bracketStyle": "minimal"
    },
    "shelf_919uxbi7tkqi2l5s": {
      "object": "node",
      "id": "shelf_919uxbi7tkqi2l5s",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        5.700000000000001,
        0.15000000000000002,
        -2.1500000000000004
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "width": 1.8,
      "depth": 0.5,
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
    "shelf_f9zy9t0s97t0171h": {
      "object": "node",
      "id": "shelf_f9zy9t0s97t0171h",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "item_aeubphnsfh369l0x"
      ],
      "position": [
        3.88388452529902,
        0.1,
        -2.174649810791014
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "width": 1.8,
      "depth": 0.5,
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
    "shelf_fltmqqy6wrlq97sz": {
      "object": "node",
      "id": "shelf_fltmqqy6wrlq97sz",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        6.44,
        0.25,
        -8.08
      ],
      "rotation": [
        0,
        4.71238898038469,
        0
      ],
      "width": 1.67,
      "depth": 0.5,
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
    "shelf_iulhj8vcr7r691gd": {
      "object": "node",
      "id": "shelf_iulhj8vcr7r691gd",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        2.35,
        1.2,
        -0.5
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ],
      "width": 1.93,
      "depth": 0.5,
      "thickness": 0.05,
      "height": 1.65,
      "style": "bookshelf",
      "rows": 3,
      "columns": 4,
      "withBack": false,
      "withSides": true,
      "withBottom": true,
      "bracketStyle": "minimal"
    },
    "shelf_kxonfx3w453msbb5": {
      "object": "node",
      "id": "shelf_kxonfx3w453msbb5",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        -0.76,
        0.05,
        1.26
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ],
      "width": 1.77,
      "depth": 0.61,
      "thickness": 0.05,
      "height": 2.38,
      "style": "bookshelf",
      "rows": 4,
      "columns": 6,
      "withBack": false,
      "withSides": true,
      "withBottom": true,
      "bracketStyle": "minimal"
    },
    "shelf_nyts33xx28o5r3cl": {
      "object": "node",
      "id": "shelf_nyts33xx28o5r3cl",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        6.44,
        0.2,
        -6.36
      ],
      "rotation": [
        0,
        4.71238898038469,
        0
      ],
      "width": 1.7,
      "depth": 0.5,
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
      "totalRise": 3.5,
      "stepCount": 20,
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
    "window_0ei5meru0ws6ho6c": {
      "id": "window_0ei5meru0ws6ho6c",
      "name": "Window 1",
      "side": "back",
      "sill": false,
      "type": "window",
      "width": 1.83,
      "height": 1.5,
      "object": "node",
      "wallId": "wall_nqx2se3a3eksgajk",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "parentId": "wall_nqx2se3a3eksgajk",
      "position": [
        1.908626687489826,
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
    "window_2nznythwlwfqntem": {
      "object": "node",
      "id": "window_2nznythwlwfqntem",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_9fz5c4btvnihy7nu",
      "visible": true,
      "metadata": {},
      "position": [
        1.25,
        1.4,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_9fz5c4btvnihy7nu",
      "width": 1.22,
      "height": 1.52,
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
    "window_6x51ris6pi67h2gq": {
      "id": "window_6x51ris6pi67h2gq",
      "name": "Window 1",
      "side": "front",
      "sill": false,
      "type": "window",
      "width": 1.22,
      "height": 1.5,
      "object": "node",
      "wallId": "wall_sx5zae3ghhwcqwgj",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "parentId": "wall_sx5zae3ghhwcqwgj",
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
    "window_a6r09eogcwc576nv": {
      "id": "window_a6r09eogcwc576nv",
      "name": "Window 1",
      "side": "front",
      "sill": false,
      "type": "window",
      "width": 0.76,
      "height": 1.5,
      "object": "node",
      "wallId": "wall_sx5zae3ghhwcqwgj",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "parentId": "wall_sx5zae3ghhwcqwgj",
      "position": [
        3.4000000000000004,
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
    "window_baqictsnumw1fabt": {
      "id": "window_baqictsnumw1fabt",
      "name": "Window 3",
      "side": "front",
      "sill": false,
      "type": "window",
      "width": 3.66,
      "height": 2.3,
      "object": "node",
      "wallId": "wall_ovpjmscb9a1b9a2t",
      "visible": true,
      "metadata": {},
      "parentId": "wall_ovpjmscb9a1b9a2t",
      "position": [
        2.1,
        1.15,
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
      "windowType": "fixed",
      "openingKind": "window",
      "columnRatios": [
        0.3333333333333333,
        0.3333333333333333,
        0.3333333333333333
      ],
      "cornerRadius": 0.15,
      "openingShape": "rectangle",
      "casementStyle": "single",
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
    "window_bkig2eusw464npij": {
      "id": "window_bkig2eusw464npij",
      "name": "Window 1",
      "side": "front",
      "sill": false,
      "type": "window",
      "width": 1.22,
      "height": 1.5,
      "object": "node",
      "wallId": "wall_sx5zae3ghhwcqwgj",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "parentId": "wall_sx5zae3ghhwcqwgj",
      "position": [
        5.7,
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
    "window_dmv96pwr85brar07": {
      "id": "window_dmv96pwr85brar07",
      "name": "Window 1",
      "side": "back",
      "sill": false,
      "type": "window",
      "width": 1.22,
      "height": 1.5,
      "object": "node",
      "wallId": "wall_c783g0mjvk11z4he",
      "visible": true,
      "metadata": {},
      "parentId": "wall_c783g0mjvk11z4he",
      "position": [
        3.25,
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
    "window_dv1pu1mawz7e666c": {
      "id": "window_dv1pu1mawz7e666c",
      "name": "Window 1",
      "side": "back",
      "sill": false,
      "type": "window",
      "width": 2.13,
      "height": 1.5,
      "object": "node",
      "wallId": "wall_e71f2dnudh7lpb9v",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "parentId": "wall_e71f2dnudh7lpb9v",
      "position": [
        2.0044506072998054,
        1.4000000000000001,
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
    "window_i6jjufvdolvewfff": {
      "id": "window_i6jjufvdolvewfff",
      "name": "Window 1",
      "side": "back",
      "sill": false,
      "type": "window",
      "width": 1.68,
      "height": 1.5,
      "object": "node",
      "wallId": "wall_56m0cuwykjwedx2y",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "parentId": "wall_56m0cuwykjwedx2y",
      "position": [
        7.621196209555706,
        1.4000000000000001,
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
      "windowType": "fixed",
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
    "window_inffur51awaebd2e": {
      "id": "window_inffur51awaebd2e",
      "name": "Window 4",
      "side": "back",
      "sill": true,
      "type": "window",
      "slots": {},
      "width": 5,
      "height": 2.9,
      "object": "node",
      "wallId": "wall_ennfhed1hm0ozhch",
      "visible": true,
      "metadata": {},
      "parentId": "wall_ennfhed1hm0ozhch",
      "position": [
        3.5,
        0.9,
        0
      ],
      "rotation": [
        0,
        9.42477796076938,
        0
      ],
      "rowRatios": [
        0.3,
        0.7000000000000001
      ],
      "sillDepth": 0.08,
      "archHeight": 0.35,
      "frameDepth": 0.07,
      "hingesSide": "left",
      "windowType": "fixed",
      "openingKind": "window",
      "columnRatios": [
        0.25,
        0.25,
        0.25,
        0.25
      ],
      "cornerRadius": 0.15,
      "openingShape": "rectangle",
      "casementStyle": "single",
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
    "window_nj2k9lc7qmgls6va": {
      "id": "window_nj2k9lc7qmgls6va",
      "name": "Window 1",
      "side": "back",
      "sill": false,
      "type": "window",
      "width": 1.83,
      "height": 1.5,
      "object": "node",
      "wallId": "wall_4dnlh79bzdiae0sq",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "parentId": "wall_4dnlh79bzdiae0sq",
      "position": [
        1.6638444395403456,
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
    "window_pglflo7yj249uu3a": {
      "id": "window_pglflo7yj249uu3a",
      "name": "Window 3",
      "side": "front",
      "sill": false,
      "type": "window",
      "width": 3.05,
      "height": 2.3,
      "object": "node",
      "wallId": "wall_6kahn8f9drv85wf3",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "parentId": "wall_6kahn8f9drv85wf3",
      "position": [
        1.8767845153808578,
        1.15,
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
      "windowType": "fixed",
      "openingKind": "window",
      "columnRatios": [
        0.3333333333333333,
        0.3333333333333333,
        0.3333333333333333
      ],
      "cornerRadius": 0.15,
      "openingShape": "rectangle",
      "casementStyle": "single",
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
    "window_pkei3xeih5hhfwxb": {
      "object": "node",
      "id": "window_pkei3xeih5hhfwxb",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_yk6pyronezflq7oq",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        2.5354716300964357,
        1.6,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_yk6pyronezflq7oq",
      "width": 1.5490567398071289,
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
      "id": "window_u3dbch0ez4pzi25v",
      "name": "Window 4",
      "side": "front",
      "sill": true,
      "type": "window",
      "slots": {},
      "width": 4.88,
      "height": 3.05,
      "object": "node",
      "wallId": "wall_0e9fl70a13qct144",
      "visible": true,
      "metadata": {},
      "parentId": "wall_0e9fl70a13qct144",
      "position": [
        3.25,
        1.525,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "rowRatios": [
        0.3,
        0.7000000000000001
      ],
      "sillDepth": 0.08,
      "archHeight": 0.35,
      "frameDepth": 0.07,
      "hingesSide": "left",
      "windowType": "fixed",
      "openingKind": "window",
      "columnRatios": [
        0.25,
        0.25,
        0.25,
        0.25
      ],
      "cornerRadius": 0.15,
      "openingShape": "rectangle",
      "casementStyle": "single",
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
    "window_u6yp3z754ya6gqkq": {
      "object": "node",
      "id": "window_u6yp3z754ya6gqkq",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_twjrbha7gdx24q8c",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        0.957665610141416,
        1.4,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_twjrbha7gdx24q8c",
      "width": 1.83,
      "height": 2.7,
      "openingKind": "window",
      "windowType": "fixed",
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
        0.3333333333333333,
        0.3333333333333333,
        0.3333333333333333
      ],
      "columnDividerThickness": 0.03,
      "rowDividerThickness": 0.03,
      "sill": false,
      "sillDepth": 0.08,
      "sillThickness": 0.03
    },
    "window_v3aro78mtmcz7j4p": {
      "object": "node",
      "id": "window_v3aro78mtmcz7j4p",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_x9ypfzv087srj3sa",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        5.210863218717852,
        2.1,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_x9ypfzv087srj3sa",
      "width": 8.604672955499248,
      "height": 0.6,
      "openingKind": "window",
      "windowType": "fixed",
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
    "window_vodlvu7szftir2mv": {
      "id": "window_vodlvu7szftir2mv",
      "name": "Window 1",
      "side": "back",
      "sill": false,
      "type": "window",
      "width": 1.22,
      "height": 1.5,
      "object": "node",
      "wallId": "wall_c783g0mjvk11z4he",
      "visible": true,
      "metadata": {},
      "parentId": "wall_c783g0mjvk11z4he",
      "position": [
        6.8500000000000005,
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
    "window_zr2qi6efks12td78": {
      "object": "node",
      "id": "window_zr2qi6efks12td78",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_7vs6usbdbwl1fpj1",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        1,
        1.6,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_7vs6usbdbwl1fpj1",
      "width": 0.9436089706420898,
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
    "ceiling_5pgrwqe0m3ikeqlx": {
      "id": "ceiling_5pgrwqe0m3ikeqlx",
      "name": "Room 96 Ceiling",
      "type": "ceiling",
      "holes": [],
      "height": 3.0999999999999996,
      "object": "node",
      "polygon": [
        [
          6.750277347883061,
          -1.8537885665893554
        ],
        [
          6.750277347883061,
          -4.1000000000000005
        ],
        [
          11.75,
          -4.1000000000000005
        ],
        [
          11.75,
          -1.8537885665893552
        ]
      ],
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "ceiling_6qhled75h6u8h5h8": {
      "id": "ceiling_6qhled75h6u8h5h8",
      "name": "Room 101 Ceiling",
      "type": "ceiling",
      "holes": [],
      "height": 3.0999999999999996,
      "object": "node",
      "polygon": [
        [
          -1.148022018724731,
          2.19981793740085
        ],
        [
          -1.1480220187247308,
          0.5
        ],
        [
          -0.5592108880780169,
          0.08749524191253055
        ],
        [
          -0.11006018069273615,
          -0.47386236699071116
        ],
        [
          0.16322560881141568,
          -1.1388237194566686
        ],
        [
          0.23861785233020782,
          -1.8537885665893554
        ],
        [
          2.7,
          -1.8537885665893556
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
    "ceiling_bbo9mf9el2u5xal0": {
      "id": "ceiling_bbo9mf9el2u5xal0",
      "name": "Room 98 Ceiling",
      "type": "ceiling",
      "holes": [],
      "height": 3.0999999999999996,
      "object": "node",
      "polygon": [
        [
          11.75,
          -4.1000000000000005
        ],
        [
          8.3,
          -4.1000000000000005
        ],
        [
          8.3,
          -5.800000000000001
        ],
        [
          11.75,
          -5.800000000000001
        ]
      ],
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "ceiling_czdauxnk25mqysgw": {
      "object": "node",
      "id": "ceiling_czdauxnk25mqysgw",
      "type": "ceiling",
      "name": "Room 109 Ceiling",
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
          -4.596686580756225,
          -1.3311327675982185
        ],
        [
          -5.899958115009166,
          -1.3311288816418902
        ],
        [
          -5.899416981445723,
          -4.949945029051432
        ],
        [
          -4.65,
          -4.95
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
          -5.7
        ],
        [
          2.7,
          -5.7
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
      "height": 2.74,
      "autoFromWalls": true
    },
    "ceiling_wewcqx1e471hx10w": {
      "id": "ceiling_wewcqx1e471hx10w",
      "name": "Room 116 Ceiling",
      "type": "ceiling",
      "holes": [],
      "height": 3.0999999999999996,
      "object": "node",
      "polygon": [
        [
          1.9000000000000001,
          -9
        ],
        [
          6.750494429018985,
          -8.999025028617169
        ],
        [
          6.750276373551734,
          -5.300026084551986
        ],
        [
          1.8999990256686734,
          -5.300007342042391
        ]
      ],
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "holeMetadata": [],
      "autoFromWalls": true
    },
    "ceiling_zjo6t980c77r2w4f": {
      "id": "ceiling_zjo6t980c77r2w4f",
      "name": "Room 92 Ceiling",
      "type": "ceiling",
      "holes": [],
      "height": 3.0999999999999996,
      "object": "node",
      "polygon": [
        [
          6.750277347883061,
          -4.1000000000000005
        ],
        [
          6.750494429018985,
          -8.999025028617169
        ],
        [
          11.75,
          -8.998152923583985
        ],
        [
          11.75,
          -5.800000000000001
        ],
        [
          8.3,
          -5.800000000000001
        ],
        [
          8.3,
          -4.1000000000000005
        ]
      ],
      "visible": true,
      "children": [],
      "metadata": {},
      "parentId": "level_jwi4ovhyra2ayxa5",
      "holeMetadata": [],
      "autoFromWalls": true
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
    "window_4i6jqdojkycac1r3": {
      "object": "node",
      "id": "window_4i6jqdojkycac1r3",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_56m0cuwykjwedx2y",
      "visible": true,
      "metadata": {
        "isNew": true
      },
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
      "wallId": "wall_56m0cuwykjwedx2y",
      "width": 2.9,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "fixed",
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
    "wall_yk6pyronezflq7oq": {
      "object": "node",
      "id": "wall_yk6pyronezflq7oq",
      "type": "wall",
      "name": "Wall 106",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "window_pkei3xeih5hhfwxb"
      ],
      "height": 2.74,
      "start": [
        -10.475817298889162,
        3.572127914428711
      ],
      "end": [
        -6.300000000000001,
        3.572127914428711
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_7vs6usbdbwl1fpj1": {
      "object": "node",
      "id": "wall_7vs6usbdbwl1fpj1",
      "type": "wall",
      "name": "Wall 106",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "window_zr2qi6efks12td78"
      ],
      "height": 2.74,
      "start": [
        -6.300000000000001,
        3.572127914428711
      ],
      "end": [
        -4.6000000000000005,
        3.572127914428711
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_chyvbnwkdqiarh4a": {
      "object": "node",
      "id": "wall_chyvbnwkdqiarh4a",
      "type": "wall",
      "name": "Wall 110",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        -6.300000000000001,
        0.34999999999999476
      ],
      "end": [
        -6.300000000000001,
        3.572127914428711
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_u8bf7qp6ir81zdje": {
      "object": "node",
      "id": "wall_u8bf7qp6ir81zdje",
      "type": "wall",
      "name": "Wall 93",
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
        -4.596687059153583,
        0.3499705521011873
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_ajkfn9x5nhwh0nz0": {
      "object": "node",
      "id": "wall_ajkfn9x5nhwh0nz0",
      "type": "wall",
      "name": "Wall 93",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -4.596687059153583,
        0.3499705521011873
      ],
      "end": [
        -4.596686580756225,
        -1.3311327675982185
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_3h6tliyg9pf6y3er": {
      "object": "node",
      "id": "wall_3h6tliyg9pf6y3er",
      "type": "wall",
      "name": "Wall 114",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "door_e5lgb5yjboln4xxm"
      ],
      "start": [
        -6.300000000000001,
        0.34999999999999476
      ],
      "end": [
        -4.596687059153583,
        0.3499705521011873
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "slab_wigv0olo5w0paq3x": {
      "object": "node",
      "id": "slab_wigv0olo5w0paq3x",
      "type": "slab",
      "name": "Room 160 Slab",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -6.300000000000001,
          3.572127914428711
        ],
        [
          -6.300000000000001,
          0.34999999999999476
        ],
        [
          -4.596687059153583,
          0.3499705521011873
        ],
        [
          -4.6000000000000005,
          3.572127914428711
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.05,
      "autoFromWalls": true
    },
    "ceiling_66mqroe89qhv1e9s": {
      "object": "node",
      "id": "ceiling_66mqroe89qhv1e9s",
      "type": "ceiling",
      "name": "Room 153 Ceiling",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -6.300000000000001,
          3.572127914428711
        ],
        [
          -6.300000000000001,
          0.34999999999999476
        ],
        [
          -4.596687059153583,
          0.3499705521011873
        ],
        [
          -4.6000000000000005,
          3.572127914428711
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 2.79,
      "autoFromWalls": true
    },
    "door_e5lgb5yjboln4xxm": {
      "object": "node",
      "id": "door_e5lgb5yjboln4xxm",
      "type": "door",
      "name": "Door 4",
      "parentId": "wall_3h6tliyg9pf6y3er",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        0.6000000000000001,
        1.05,
        0
      ],
      "rotation": [
        0,
        6.283185307179586,
        0
      ],
      "side": "front",
      "wallId": "wall_3h6tliyg9pf6y3er",
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
        0.04,
        0.04
      ],
      "doorCloser": false,
      "panicBar": false,
      "panicBarHeight": 1
    },
    "item_zz7yvum9mrt0j56w": {
      "object": "node",
      "id": "item_zz7yvum9mrt0j56w",
      "type": "item",
      "name": "Standing Desk",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -5.050000000000001,
        0,
        -8.200000000000001
      ],
      "rotation": [
        0,
        45.553093477052,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "standing-desk-mo8wgz95",
        "category": "desks",
        "name": "Standing Desk",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/models/item_model_zzZ58018waP8VY6Z.glb",
        "dimensions": [
          1.41,
          0.85,
          0.68
        ],
        "tags": [
          "office"
        ],
        "functionTags": [
          "desks"
        ],
        "offset": [
          0.00004610419273376465,
          0.4203098952770233,
          0.0018924519419670216
        ],
        "rotation": [
          0,
          0,
          0
        ],
        "scale": [
          1.4,
          1.4,
          1.4
        ]
      }
    },
    "item_kz1xbksea7hc7mx9": {
      "object": "node",
      "id": "item_kz1xbksea7hc7mx9",
      "type": "item",
      "name": "Herman Miller Aeron",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -5.550000000000002,
        0,
        -8.25
      ],
      "rotation": [
        0,
        45.553093477052,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "herman-miller-aeron-mo8x36k9",
        "category": "office-chairs",
        "name": "Herman Miller Aeron",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/models/item_model_YshL4maC8cHtry5c.glb",
        "dimensions": [
          0.67,
          1.06,
          0.66
        ],
        "tags": [
          "office"
        ],
        "functionTags": [
          "office-chairs"
        ],
        "offset": [
          -0.0012764498591423257,
          0.5256464391946792,
          0.0028421513736248127
        ],
        "rotation": [
          0,
          0,
          0
        ],
        "scale": [
          1.05,
          1.05,
          1.05
        ]
      }
    },
    "wall_2riamsz1w705fer1": {
      "object": "node",
      "id": "wall_2riamsz1w705fer1",
      "type": "wall",
      "name": "Wall 27",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "slots": {},
      "height": 2.74,
      "start": [
        -8.8,
        -6.850000000000001
      ],
      "end": [
        -8.8,
        -8.924649810791015
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_j05s827qhjwcbph1": {
      "object": "node",
      "id": "wall_j05s827qhjwcbph1",
      "type": "wall",
      "name": "Wall 158",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -10.475817298889162,
        -1.331141471862793
      ],
      "end": [
        -10.475817298889162,
        3.572127914428711
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "shelf_7wg8928laesasxm5": {
      "object": "node",
      "id": "shelf_7wg8928laesasxm5",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        -6.65,
        0.9000000000000001,
        2.35
      ],
      "rotation": [
        0,
        4.71238898038469,
        0
      ],
      "width": 2.2649059295654297,
      "depth": 0.5407485008239746,
      "thickness": 0.05,
      "height": 1.65,
      "style": "bookshelf",
      "rows": 6,
      "columns": 6,
      "withBack": false,
      "withSides": true,
      "withBottom": true,
      "bracketStyle": "minimal"
    },
    "item_jtrur0cqvh5mwf0v": {
      "object": "node",
      "id": "item_jtrur0cqvh5mwf0v",
      "type": "item",
      "name": "Sink",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -10.15,
        0.4,
        -3.9499999999999997
      ],
      "rotation": [
        0,
        45.553093477052,
        0
      ],
      "scale": [
        1.1,
        1,
        0.8
      ],
      "children": [],
      "asset": {
        "id": "sink-mpwnhw5r",
        "category": "columns",
        "name": "Sink",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/floor-plan.png",
        "source": "community",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_jse4nqRr6v8pswKv/sink-mpwnhw5r/models/item_model_ZLuuS1FAKRYLTRkN.glb",
        "dimensions": [
          1,
          0.5,
          0.6
        ],
        "tags": [
          "Bathroom floating sink"
        ],
        "functionTags": [
          "columns",
          "sinks",
          "cabinets"
        ],
        "offset": [
          0.0009755492210388184,
          0.2476077377796173,
          -0.0007567554712295532
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
    "item_g61nx371l5sj8k38": {
      "object": "node",
      "id": "item_g61nx371l5sj8k38",
      "type": "item",
      "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -9.65,
        0,
        -5.700000000000001
      ],
      "rotation": [
        0,
        9.42477796076938,
        0
      ],
      "scale": [
        1.1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "ctlg-gd-04-010-016-mra34ejn",
        "category": "showers",
        "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/floor-plan.png",
        "source": "mine",
        "isDraft": true,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/models/item_model_Sl2GjaOKnBSIkAVF.glb",
        "dimensions": [
          1.34,
          1.91,
          0.14
        ],
        "functionTags": [
          "showers"
        ],
        "offset": [
          -0.6655630066912079,
          0.001999922329713577,
          0.05081197261875771
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
    "wall_ux7q9bx68zm7ult0": {
      "object": "node",
      "id": "wall_ux7q9bx68zm7ult0",
      "type": "wall",
      "name": "Wall 107",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        -10.475817298889162,
        -1.331141471862793
      ],
      "end": [
        -8.8,
        -1.3311414718627923
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_z9mro4a3rbhvmjq0": {
      "object": "node",
      "id": "wall_z9mro4a3rbhvmjq0",
      "type": "wall",
      "name": "Wall 107",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "door_j8dfewdgzzcooxak"
      ],
      "start": [
        -8.8,
        -1.3311414718627925
      ],
      "end": [
        -8.8,
        -3.3000000000000065
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_9agz89c4axzi4bkc": {
      "object": "node",
      "id": "wall_9agz89c4axzi4bkc",
      "type": "wall",
      "name": "Wall 104",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -5.8998934462129204,
        -3.3000256132108987
      ],
      "end": [
        -5.899416981445723,
        -4.949945029051432
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_ms2ba8my4dpdiavh": {
      "object": "node",
      "id": "wall_ms2ba8my4dpdiavh",
      "type": "wall",
      "name": "Wall 110",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        -8.8,
        -1.3311414718627923
      ],
      "end": [
        -5.900055777528799,
        -1.3311582308583438
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "window_v7xmq2taos85nixt": {
      "object": "node",
      "id": "window_v7xmq2taos85nixt",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_yo2o8nw3a4n423b3",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        1.8,
        1.6,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_yo2o8nw3a4n423b3",
      "width": 0.9436089706420898,
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
    "door_j8dfewdgzzcooxak": {
      "object": "node",
      "id": "door_j8dfewdgzzcooxak",
      "type": "door",
      "name": "Door 4",
      "parentId": "wall_z9mro4a3rbhvmjq0",
      "visible": true,
      "metadata": {
        "isNew": true
      },
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
      "wallId": "wall_z9mro4a3rbhvmjq0",
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
        0.04,
        0.04
      ],
      "doorCloser": false,
      "panicBar": false,
      "panicBarHeight": 1
    },
    "item_c5ja0ko7ahi3y0oj": {
      "object": "node",
      "id": "item_c5ja0ko7ahi3y0oj",
      "type": "item",
      "name": "Closet",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -7.4,
        0,
        -0.9499999999999997
      ],
      "rotation": [
        0,
        31.41592653589793,
        0
      ],
      "scale": [
        1,
        1,
        1
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
    "item_9gtf7k7vzwbihshx": {
      "object": "node",
      "id": "item_9gtf7k7vzwbihshx",
      "type": "item",
      "name": "Showerhead",
      "parentId": "wall_yo2o8nw3a4n423b3",
      "visible": true,
      "metadata": {},
      "position": [
        0.6000000000000001,
        0.19663296631980387,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "side": "back",
      "children": [],
      "wallId": "wall_s1bmn01nyv9al5ea",
      "wallT": 0.719996977742476,
      "asset": {
        "id": "showerhead-mqsfsfct",
        "category": "showers",
        "name": "Showerhead",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/models/item_model_TZ6CRNoOLCsTOS8Z.glb",
        "dimensions": [
          0.57,
          1.56,
          0.58
        ],
        "attachTo": "wall-side",
        "tags": [
          "Fixture",
          "Showerhead"
        ],
        "functionTags": [
          "showers"
        ],
        "offset": [
          0.019445911049842834,
          0.33513043701648715,
          0.000500180758535862
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
    "wall_yo2o8nw3a4n423b3": {
      "object": "node",
      "id": "wall_yo2o8nw3a4n423b3",
      "type": "wall",
      "name": "Wall 158",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "window_v7xmq2taos85nixt",
        "item_9gtf7k7vzwbihshx"
      ],
      "height": 2.74,
      "start": [
        -10.475817298889162,
        -6.8500000000000005
      ],
      "end": [
        -10.475817298889162,
        -3.3000000000000074
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_hvd8u004bsrn1fg6": {
      "object": "node",
      "id": "wall_hvd8u004bsrn1fg6",
      "type": "wall",
      "name": "Wall 158",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        -10.475817298889162,
        -3.3000000000000074
      ],
      "end": [
        -10.475817298889162,
        -1.331141471862793
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_u12pm7wgggqbger9": {
      "object": "node",
      "id": "wall_u12pm7wgggqbger9",
      "type": "wall",
      "name": "Wall 106",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        -8.80000000376382,
        -3.3000000000000225
      ],
      "end": [
        -10.475817298889162,
        -3.3000000000000074
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "ceiling_5qsh2tudfesmcozw": {
      "object": "node",
      "id": "ceiling_5qsh2tudfesmcozw",
      "type": "ceiling",
      "name": "Room 182 Ceiling",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -8.8,
          -1.3311414718627923
        ],
        [
          -10.475817298889162,
          -1.331141471862793
        ],
        [
          -10.475817298889162,
          -3.3000000000000074
        ],
        [
          -8.8,
          -3.3000000000000065
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 2.79,
      "autoFromWalls": true
    },
    "slab_q05q691dafpsjz96": {
      "object": "node",
      "id": "slab_q05q691dafpsjz96",
      "type": "slab",
      "name": "Room 193 Slab",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -8.8,
          -1.3311414718627923
        ],
        [
          -10.475817298889162,
          -1.331141471862793
        ],
        [
          -10.475817298889162,
          -3.3000000000000074
        ],
        [
          -8.8,
          -3.3000000000000065
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.05,
      "autoFromWalls": true
    },
    "wall_s1bmn01nyv9al5ea": {
      "object": "node",
      "id": "wall_s1bmn01nyv9al5ea",
      "type": "wall",
      "name": "Wall 108",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        -8.8000004377275,
        -3.300038203431806
      ],
      "end": [
        -5.8998934462129204,
        -3.3000256132108987
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "slab_zq03zv3lr83m91ej": {
      "object": "node",
      "id": "slab_zq03zv3lr83m91ej",
      "type": "slab",
      "name": "Room 194 Slab",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -8.8,
          -1.3311414718627925
        ],
        [
          -8.8000004377275,
          -3.300038203431806
        ],
        [
          -5.8998934462129204,
          -3.3000256132108987
        ],
        [
          -5.900055777528799,
          -1.3311582308583438
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.05,
      "autoFromWalls": true
    },
    "ceiling_qd1r2b1n0yfh3j6n": {
      "object": "node",
      "id": "ceiling_qd1r2b1n0yfh3j6n",
      "type": "ceiling",
      "name": "Room 184 Ceiling",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -8.8,
          -1.3311414718627925
        ],
        [
          -8.8000004377275,
          -3.300038203431806
        ],
        [
          -5.8998934462129204,
          -3.3000256132108987
        ],
        [
          -5.900055777528799,
          -1.3311582308583438
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 2.55,
      "autoFromWalls": true
    },
    "wall_erzhw1w5zothkceq": {
      "object": "node",
      "id": "wall_erzhw1w5zothkceq",
      "type": "wall",
      "name": "Wall 105",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "door_dxyntvzmrr6s3wd6"
      ],
      "start": [
        -8.8,
        -6.8500000000000005
      ],
      "end": [
        -8.8000004377275,
        -3.300038203431806
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "slab_r2uu8snjatau3fhg": {
      "object": "node",
      "id": "slab_r2uu8snjatau3fhg",
      "type": "slab",
      "name": "Room 195 Slab",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -8.8,
          -6.8500000000000005
        ],
        [
          -8.80000000376382,
          -3.3000000000000225
        ],
        [
          -10.475817298889162,
          -3.3000000000000074
        ],
        [
          -10.475817298889162,
          -6.8500000000000005
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.05,
      "autoFromWalls": true
    },
    "ceiling_kd5qopvqwoeguvp6": {
      "object": "node",
      "id": "ceiling_kd5qopvqwoeguvp6",
      "type": "ceiling",
      "name": "Room 185 Ceiling",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -8.8,
          -6.8500000000000005
        ],
        [
          -8.80000000376382,
          -3.3000000000000225
        ],
        [
          -10.475817298889162,
          -3.3000000000000074
        ],
        [
          -10.475817298889162,
          -6.8500000000000005
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 2.79,
      "autoFromWalls": true
    },
    "item_lwkxr6ctoadeu534": {
      "object": "node",
      "id": "item_lwkxr6ctoadeu534",
      "type": "item",
      "name": "Closet",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -6.65,
        0,
        -2.95
      ],
      "rotation": [
        0,
        31.41592653589793,
        0
      ],
      "scale": [
        0.8,
        1,
        1
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
    "door_gcdducessv9xqarf": {
      "object": "node",
      "id": "door_gcdducessv9xqarf",
      "type": "door",
      "name": "Door 4",
      "parentId": "wall_ajirvb9nh4kzaxri",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        0.6000000000000004,
        1.05,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_ajirvb9nh4kzaxri",
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
        0.04,
        0.04
      ],
      "doorCloser": false,
      "panicBar": false,
      "panicBarHeight": 1
    },
    "door_dxyntvzmrr6s3wd6": {
      "object": "node",
      "id": "door_dxyntvzmrr6s3wd6",
      "type": "door",
      "name": "Door 4",
      "parentId": "wall_erzhw1w5zothkceq",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        2.35,
        1.05,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_erzhw1w5zothkceq",
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
      "swingDirection": "inward",
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
    "slab_q76k0030ajuvgzn4": {
      "object": "node",
      "id": "slab_q76k0030ajuvgzn4",
      "type": "slab",
      "name": "Room 197 Slab",
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
          -1.331141471862793
        ],
        [
          -4.596686580756225,
          -1.3311327675982185
        ],
        [
          -4.596687059153583,
          0.3499705521011873
        ],
        [
          -6.300000000000001,
          0.34999999999999476
        ],
        [
          -6.300000000000001,
          3.572127914428711
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.05,
      "autoFromWalls": true
    },
    "ceiling_vfe0rtiujm2yu50m": {
      "object": "node",
      "id": "ceiling_vfe0rtiujm2yu50m",
      "type": "ceiling",
      "name": "Room 187 Ceiling",
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
          -1.331141471862793
        ],
        [
          -4.596686580756225,
          -1.3311327675982185
        ],
        [
          -4.596687059153583,
          0.3499705521011873
        ],
        [
          -6.300000000000001,
          0.34999999999999476
        ],
        [
          -6.300000000000001,
          3.572127914428711
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 2.79,
      "autoFromWalls": true
    },
    "item_rbsl8iwg6o616xav": {
      "object": "node",
      "id": "item_rbsl8iwg6o616xav",
      "type": "item",
      "name": "Closet",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -6.300000000000001,
        0,
        -4.3
      ],
      "rotation": [
        0,
        36.12831551628262,
        0
      ],
      "scale": [
        0.7,
        1,
        1
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
    "item_4h4y5cnezdlql2ld": {
      "object": "node",
      "id": "item_4h4y5cnezdlql2ld",
      "type": "item",
      "name": "Closet",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -5.050000000000001,
        0,
        -6.95
      ],
      "rotation": [
        0,
        36.12831551628262,
        0
      ],
      "scale": [
        0.7,
        1,
        1
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
    "wall_xaduc5l9dljz6qhw": {
      "object": "node",
      "id": "wall_xaduc5l9dljz6qhw",
      "type": "wall",
      "name": "Wall 107",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "door_qj1n8a15vqpnjc6b"
      ],
      "start": [
        -5.899958115009166,
        -1.3311288816418902
      ],
      "end": [
        -5.8998934462129204,
        -3.3000256132108987
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_s036gfqzmc1miaps": {
      "object": "node",
      "id": "wall_s036gfqzmc1miaps",
      "type": "wall",
      "name": "Wall 107",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        -5.8998934462129204,
        -3.3000256132108987
      ],
      "end": [
        -5.8998934462129204,
        -3.3000256132108987
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "item_63sjm8ylgm23qb1r": {
      "object": "node",
      "id": "item_63sjm8ylgm23qb1r",
      "type": "item",
      "name": "Closet",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -6.65,
        0,
        -3.6500000000000004
      ],
      "rotation": [
        0,
        40.840704496667314,
        0
      ],
      "scale": [
        0.7,
        1,
        1
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
    "slab_99g2l23fs254twv8": {
      "object": "node",
      "id": "slab_99g2l23fs254twv8",
      "type": "slab",
      "name": "Room 198 Slab",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -4.65,
          -8.924649810791015
        ],
        [
          -4.65,
          -4.95
        ],
        [
          -5.899416981445723,
          -4.949945029051432
        ],
        [
          -5.8998934462129204,
          -3.3000256132108987
        ],
        [
          -8.8000004377275,
          -3.300038203431806
        ],
        [
          -8.8,
          -8.924649810791015
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.05,
      "autoFromWalls": true
    },
    "ceiling_g0m4iuzk4ij5tw5f": {
      "object": "node",
      "id": "ceiling_g0m4iuzk4ij5tw5f",
      "type": "ceiling",
      "name": "Room 188 Ceiling",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -4.65,
          -8.924649810791015
        ],
        [
          -4.65,
          -4.95
        ],
        [
          -5.899416981445723,
          -4.949945029051432
        ],
        [
          -5.8998934462129204,
          -3.3000256132108987
        ],
        [
          -8.8000004377275,
          -3.300038203431806
        ],
        [
          -8.8,
          -8.924649810791015
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 2.79,
      "autoFromWalls": true
    },
    "item_auy4vg58u1ifbmtw": {
      "object": "node",
      "id": "item_auy4vg58u1ifbmtw",
      "type": "item",
      "name": "Closet",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -8.05,
        0,
        -3.6500000000000004
      ],
      "rotation": [
        0,
        40.840704496667314,
        0
      ],
      "scale": [
        0.7,
        1,
        1
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
    "wall_0tuf5ostnayck566": {
      "object": "node",
      "id": "wall_0tuf5ostnayck566",
      "type": "wall",
      "name": "Wall 108",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "door_46u4g8bhvpb8pvd7"
      ],
      "start": [
        -5.900055777528799,
        -1.3311582308583438
      ],
      "end": [
        -4.596686580756225,
        -1.3311327675982185
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "door_46u4g8bhvpb8pvd7": {
      "object": "node",
      "id": "door_46u4g8bhvpb8pvd7",
      "type": "door",
      "name": "Door 4",
      "parentId": "wall_0tuf5ostnayck566",
      "visible": true,
      "metadata": {
        "isNew": true
      },
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
      "wallId": "wall_0tuf5ostnayck566",
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
    "item_92vqmxlrz7elnndn": {
      "object": "node",
      "id": "item_92vqmxlrz7elnndn",
      "type": "item",
      "name": "Closet",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        -9.450000000000001,
        0,
        -0.9500000000000001
      ],
      "rotation": [
        0,
        31.41592653589793,
        0
      ],
      "scale": [
        1,
        1,
        1
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
    "wall_ajirvb9nh4kzaxri": {
      "object": "node",
      "id": "wall_ajirvb9nh4kzaxri",
      "type": "wall",
      "name": "Wall 102",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "door_gcdducessv9xqarf"
      ],
      "height": 2.74,
      "start": [
        -5.899416981445723,
        -4.949945029051432
      ],
      "end": [
        -4.65,
        -4.95
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "item_7f92ag24xxjrpbym": {
      "object": "node",
      "id": "item_7f92ag24xxjrpbym",
      "type": "item",
      "name": "Herman Miller Aeron",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        10.9,
        0,
        -3.200000000000005
      ],
      "rotation": [
        0,
        32.98672286269283,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "herman-miller-aeron-mo8x36k9",
        "category": "office-chairs",
        "name": "Herman Miller Aeron",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/herman-miller-aeron-mo8x36k9/models/item_model_YshL4maC8cHtry5c.glb",
        "dimensions": [
          0.67,
          1.06,
          0.66
        ],
        "tags": [
          "office"
        ],
        "functionTags": [
          "office-chairs"
        ],
        "offset": [
          -0.0012764498591423257,
          0.5256464391946792,
          0.0028421513736248127
        ],
        "rotation": [
          0,
          0,
          0
        ],
        "scale": [
          1.05,
          1.05,
          1.05
        ]
      }
    },
    "item_fub9juq9c7jeixui": {
      "object": "node",
      "id": "item_fub9juq9c7jeixui",
      "type": "item",
      "name": "Armchair",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        4.5,
        0,
        -8.250000000000002
      ],
      "rotation": [
        0,
        43.19689898685966,
        0
      ],
      "scale": [
        0.8,
        1,
        0.8
      ],
      "children": [],
      "asset": {
        "id": "towel-rack-mqqqn87h",
        "category": "armchairs",
        "name": "Armchair",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/towel-rack-mqqqn87h/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/towel-rack-mqqqn87h/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/towel-rack-mqqqn87h/models/item_model_FKS7vBwkPpxCWSbC.glb",
        "dimensions": [
          1.03,
          1.12,
          1.09
        ],
        "tags": [
          "Armchair",
          "Seat"
        ],
        "functionTags": [
          "armchairs"
        ],
        "offset": [
          0.000002294778823852539,
          7.411453140093727e-8,
          -5.662441253662109e-7
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
    "slab_p2q7xl3v94vj7fv4": {
      "object": "node",
      "id": "slab_p2q7xl3v94vj7fv4",
      "type": "slab",
      "name": "Room 203 Slab",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          1.9000000000000001,
          -9
        ],
        [
          11.75,
          -8.998152923583985
        ],
        [
          11.75,
          -1.8537885665893552
        ],
        [
          2.7,
          -1.8537885665893556
        ],
        [
          2.7,
          -5.7
        ],
        [
          1.9000000000000004,
          -5.7
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.05,
      "autoFromWalls": false
    },
    "ceiling_2oyht0io974pqaw4": {
      "object": "node",
      "id": "ceiling_2oyht0io974pqaw4",
      "type": "ceiling",
      "name": "Room 194 Ceiling",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          1.9000000000000001,
          -9
        ],
        [
          11.75,
          -8.998152923583985
        ],
        [
          11.75,
          -1.8537885665893552
        ],
        [
          2.7,
          -1.8537885665893556
        ],
        [
          2.7171359139999685,
          -5.500000002411371
        ],
        [
          1.8884547943956207,
          -5.500000001675943
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 2.79,
      "autoFromWalls": false
    },
    "window_yjc4708zzn2v04qx": {
      "object": "node",
      "id": "window_yjc4708zzn2v04qx",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_6c8i5dgp88s6zr9w",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        1.1500000000000001,
        1.4,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_6c8i5dgp88s6zr9w",
      "width": 1.1208449537945202,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "fixed",
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
    "window_m12qv810wk47zqm7": {
      "object": "node",
      "id": "window_m12qv810wk47zqm7",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_dtic71v8klclym7f",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        2.21726304917644,
        1.4,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_dtic71v8klclym7f",
      "width": 2.2351521917225488,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "fixed",
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
    "item_lw5om5q88e111fgb": {
      "object": "node",
      "id": "item_lw5om5q88e111fgb",
      "type": "item",
      "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        9.351980324973113,
        0,
        -7.912376360117385
      ],
      "rotation": [
        0,
        9.42477796076938,
        0
      ],
      "scale": [
        0.8,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "ctlg-gd-04-010-016-mra34ejn",
        "category": "showers",
        "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/floor-plan.png",
        "source": "mine",
        "isDraft": true,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/models/item_model_Sl2GjaOKnBSIkAVF.glb",
        "dimensions": [
          1.34,
          1.91,
          0.14
        ],
        "functionTags": [
          "showers"
        ],
        "offset": [
          -0.6655630066912079,
          0.001999922329713577,
          0.05081197261875771
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
    "item_rjz69oafvbbkqtia": {
      "object": "node",
      "id": "item_rjz69oafvbbkqtia",
      "type": "item",
      "name": "Sofa",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        2.4999999999999996,
        0,
        -7.425000000000001
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "sofa",
        "category": "sofas",
        "name": "Sofa",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/sofa/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/sofa/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/sofa/model.glb",
        "dimensions": [
          2.06,
          0.74,
          1.01
        ],
        "tags": [
          "floor",
          "seating"
        ],
        "functionTags": [
          "sofas"
        ],
        "offset": [
          -0.002263486385345459,
          0.008962750434875488,
          0.04589979350566864
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
    "item_wm1ou6xixhb2rok3": {
      "object": "node",
      "id": "item_wm1ou6xixhb2rok3",
      "type": "item",
      "name": "1米茶几",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        3.5250000000000012,
        0,
        -7.325000000000001
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "1-mq0l3al6",
        "category": "coffee-tables",
        "name": "1米茶几",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/1-mq0l3al6/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/1-mq0l3al6/floor-plan.png",
        "source": "mine",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/1-mq0l3al6/models/item_model_i354gUejdBKQ2m1C.glb",
        "dimensions": [
          0.92,
          0.26,
          0.54
        ],
        "functionTags": [
          "coffee-tables"
        ],
        "offset": [
          -0.7291718829182161,
          -0.00042294400618170247,
          0.5550359459391787
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
    "item_tlprp2eo77uztu7w": {
      "object": "node",
      "id": "item_tlprp2eo77uztu7w",
      "type": "item",
      "name": "Closet",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        5.55,
        0,
        -4.049999999999999
      ],
      "rotation": [
        0,
        81.68140899333463,
        0
      ],
      "scale": [
        1.1,
        1,
        1
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
    "wall_sqllcfd97md9ohv6": {
      "object": "node",
      "id": "wall_sqllcfd97md9ohv6",
      "type": "wall",
      "name": "Wall 172",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "door_9uplq68zz5p6mdjt"
      ],
      "height": 2.74,
      "start": [
        2.7,
        -1.8537885665893556
      ],
      "end": [
        2.7,
        -5.7
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_yi3gp4vcq0alqyw6": {
      "object": "node",
      "id": "wall_yi3gp4vcq0alqyw6",
      "type": "wall",
      "name": "Wall 99",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        1.9000000000000001,
        -9
      ],
      "end": [
        1.9000000000000004,
        -5.7
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_fndchix487xx7wze": {
      "object": "node",
      "id": "wall_fndchix487xx7wze",
      "type": "wall",
      "name": "Wall 98",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        1.9000000000000004,
        -5.7
      ],
      "end": [
        2.7,
        -5.7
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_2lndng4qf6ayungu": {
      "object": "node",
      "id": "wall_2lndng4qf6ayungu",
      "type": "wall",
      "name": "Wall 100",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        4.932036399841309,
        -5.7
      ],
      "end": [
        4.932036399841309,
        -5.7
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "item_hpe0aeknbd50jsqy": {
      "object": "node",
      "id": "item_hpe0aeknbd50jsqy",
      "type": "item",
      "name": "Bedside Table",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        8.100000000000001,
        0,
        -4.750000000000001
      ],
      "rotation": [
        0,
        47.12388980384689,
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
    "wall_j99jdesrplxx601j": {
      "object": "node",
      "id": "wall_j99jdesrplxx601j",
      "type": "wall",
      "name": "Wall 97",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        4.499999999978298,
        -3.7628474235549088
      ],
      "end": [
        4.500000000013149,
        -4.449999999830833
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_uq1oj9r7t5kmsdrf": {
      "object": "node",
      "id": "wall_uq1oj9r7t5kmsdrf",
      "type": "wall",
      "name": "Wall 97",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        4.500000000013149,
        -4.449999999830833
      ],
      "end": [
        4.500000000017112,
        -5.791283607482171
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_4ccxztoixucc2z4v": {
      "object": "node",
      "id": "wall_4ccxztoixucc2z4v",
      "type": "wall",
      "name": "Wall 98",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        4.500000000013149,
        -4.449999999830833
      ],
      "end": [
        8.749999999996037,
        -4.449999999653237
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "item_4mz32yf8u7vatpu0": {
      "object": "node",
      "id": "item_4mz32yf8u7vatpu0",
      "type": "item",
      "name": "Showerhead",
      "parentId": "wall_n2ovifo6s90cyvo5",
      "visible": true,
      "metadata": {},
      "position": [
        1.6,
        0.19663296631980387,
        0
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
      "side": "front",
      "children": [],
      "wallId": "wall_dqfovzqiua56it4i",
      "wallT": 0.8618784530386739,
      "asset": {
        "id": "showerhead-mqsfsfct",
        "category": "showers",
        "name": "Showerhead",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_NUnPqX8vGVB4BU6h/showerhead-mqsfsfct/models/item_model_TZ6CRNoOLCsTOS8Z.glb",
        "dimensions": [
          0.57,
          1.56,
          0.58
        ],
        "attachTo": "wall-side",
        "tags": [
          "Fixture",
          "Showerhead"
        ],
        "functionTags": [
          "showers"
        ],
        "offset": [
          0.019445911049842834,
          0.33513043701648715,
          0.000500180758535862
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
    "item_ryo3lcb1s9mm2t74": {
      "object": "node",
      "id": "item_ryo3lcb1s9mm2t74",
      "type": "item",
      "name": "Closet",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        3.500000000000001,
        0,
        -2.2
      ],
      "rotation": [
        0,
        84.82300164692441,
        0
      ],
      "scale": [
        0.8,
        1,
        1
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
    "item_fd6o288q93b2ppr1": {
      "object": "node",
      "id": "item_fd6o288q93b2ppr1",
      "type": "item",
      "name": "Closet",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        5.3500000000000005,
        0,
        -2.2
      ],
      "rotation": [
        0,
        84.82300164692441,
        0
      ],
      "scale": [
        1.1,
        1,
        1
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
    "wall_dqfovzqiua56it4i": {
      "object": "node",
      "id": "wall_dqfovzqiua56it4i",
      "type": "wall",
      "name": "Wall 47",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        2.7,
        -1.8537885665893556
      ],
      "end": [
        11.75,
        -1.8537885665893552
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_6c8i5dgp88s6zr9w": {
      "object": "node",
      "id": "wall_6c8i5dgp88s6zr9w",
      "type": "wall",
      "name": "Wall 113",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "window_yjc4708zzn2v04qx"
      ],
      "height": 2.74,
      "start": [
        11.75,
        -8.998152923583985
      ],
      "end": [
        8.75000736616474,
        -8.998715483547658
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_dtic71v8klclym7f": {
      "object": "node",
      "id": "wall_dtic71v8klclym7f",
      "type": "wall",
      "name": "Wall 113",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "window_m12qv810wk47zqm7"
      ],
      "height": 2.74,
      "start": [
        8.75000736616474,
        -8.998715483547658
      ],
      "end": [
        1.9000000000000001,
        -9
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_n2ovifo6s90cyvo5": {
      "object": "node",
      "id": "wall_n2ovifo6s90cyvo5",
      "type": "wall",
      "name": "Wall 109",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "item_4mz32yf8u7vatpu0"
      ],
      "start": [
        8.750003683082369,
        -6.77435774178714
      ],
      "end": [
        8.75000736616474,
        -8.998715483547658
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_fny1uv77vol8rnos": {
      "object": "node",
      "id": "wall_fny1uv77vol8rnos",
      "type": "wall",
      "name": "Wall 104",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "door_sl0migdyu1gjd3em"
      ],
      "start": [
        8.750003683082369,
        -6.77435774178714
      ],
      "end": [
        11.75,
        -6.77435774178714
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "item_qa6qbmqsqcumgeu8": {
      "object": "node",
      "id": "item_qa6qbmqsqcumgeu8",
      "type": "item",
      "name": "Closet",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        7.350000000000002,
        0,
        -2.2
      ],
      "rotation": [
        0,
        84.82300164692441,
        0
      ],
      "scale": [
        1,
        1,
        1
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
    "item_6ew40b03jyyrawy9": {
      "object": "node",
      "id": "item_6ew40b03jyyrawy9",
      "type": "item",
      "name": "Closet",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        9.3,
        0,
        -2.2
      ],
      "rotation": [
        0,
        84.82300164692441,
        0
      ],
      "scale": [
        1,
        1,
        1
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
    "wall_at674vpu7mw818yg": {
      "object": "node",
      "id": "wall_at674vpu7mw818yg",
      "type": "wall",
      "name": "Wall 103",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        8.749999999996037,
        -4.449999999653237
      ],
      "end": [
        8.75,
        -5.75
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_k36u6qwtme5m5ex5": {
      "object": "node",
      "id": "wall_k36u6qwtme5m5ex5",
      "type": "wall",
      "name": "Wall 88",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 2.74,
      "start": [
        11.75,
        -8.998152923583985
      ],
      "end": [
        11.75,
        -6.77435774178714
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_zd9nn4l77x2clujj": {
      "object": "node",
      "id": "wall_zd9nn4l77x2clujj",
      "type": "wall",
      "name": "Wall 88",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [
        "window_1l9d9lw7xf4gkmtq"
      ],
      "height": 2.74,
      "start": [
        11.75,
        -6.77435774178714
      ],
      "end": [
        11.75,
        -1.8537885665893552
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "item_5ed257x91yculwd5": {
      "object": "node",
      "id": "item_5ed257x91yculwd5",
      "type": "item",
      "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        9.8,
        0,
        -8.4
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
      "children": [],
      "asset": {
        "id": "ctlg-gd-04-010-016-mra34ejn",
        "category": "showers",
        "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/floor-plan.png",
        "source": "mine",
        "isDraft": true,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/models/item_model_Sl2GjaOKnBSIkAVF.glb",
        "dimensions": [
          1.34,
          1.91,
          0.14
        ],
        "functionTags": [
          "showers"
        ],
        "offset": [
          -0.6655630066912079,
          0.001999922329713577,
          0.05081197261875771
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
    "item_p80kxycneu4dbfot": {
      "object": "node",
      "id": "item_p80kxycneu4dbfot",
      "type": "item",
      "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        9.8,
        0,
        -7.3500000000000005
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
      "children": [],
      "asset": {
        "id": "ctlg-gd-04-010-016-mra34ejn",
        "category": "showers",
        "name": "CTLG-GD.04.010.016 淋浴房-一字型淋浴房",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/floor-plan.png",
        "source": "mine",
        "isDraft": true,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/ctlg-gd-04-010-016-mra34ejn/models/item_model_Sl2GjaOKnBSIkAVF.glb",
        "dimensions": [
          1.34,
          1.91,
          0.14
        ],
        "functionTags": [
          "showers"
        ],
        "offset": [
          -0.6655630066912079,
          0.001999922329713577,
          0.05081197261875771
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
    "door_sl0migdyu1gjd3em": {
      "object": "node",
      "id": "door_sl0migdyu1gjd3em",
      "type": "door",
      "name": "Door 4",
      "parentId": "wall_fny1uv77vol8rnos",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        1.6500000000000001,
        1.05,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_fny1uv77vol8rnos",
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
      "threshold": true,
      "thresholdHeight": 0.02,
      "hingesSide": "left",
      "swingDirection": "inward",
      "swingAngle": 0,
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
    "item_azee3g5232hyf6l0": {
      "object": "node",
      "id": "item_azee3g5232hyf6l0",
      "type": "item",
      "name": "Closet",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        7.699999999999999,
        0,
        -4.05
      ],
      "rotation": [
        0,
        81.68140899333463,
        0
      ],
      "scale": [
        1.1,
        1,
        1
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
    "wall_8mgle38jeings29r": {
      "object": "node",
      "id": "wall_8mgle38jeings29r",
      "type": "wall",
      "name": "Wall 108",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        4.499999999978298,
        -3.7628474235549088
      ],
      "end": [
        4.059138774871826,
        -3.7628474235549088
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_q83y2pxckd370mx9": {
      "object": "node",
      "id": "wall_q83y2pxckd370mx9",
      "type": "wall",
      "name": "Wall 109",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        4.500000000017112,
        -5.791283607482171
      ],
      "end": [
        4.034729480743408,
        -5.791283607482171
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "shelf_8myupo3z4jzfcr63": {
      "object": "node",
      "id": "shelf_8myupo3z4jzfcr63",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        4.25,
        1.0000000000000002,
        -4.8
      ],
      "rotation": [
        0,
        1.5707963267948966,
        0
      ],
      "width": 1.1358318328857422,
      "depth": 0.3117036819458008,
      "thickness": 0.05,
      "height": 1.65,
      "style": "bookshelf",
      "rows": 3,
      "columns": 3,
      "withBack": false,
      "withSides": true,
      "withBottom": true,
      "bracketStyle": "minimal"
    },
    "item_rkmt97llo64fh1f5": {
      "object": "node",
      "id": "item_rkmt97llo64fh1f5",
      "type": "item",
      "name": "Closet",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        10.950000000000001,
        0,
        -2.2500000000000004
      ],
      "rotation": [
        0,
        84.82300164692441,
        0
      ],
      "scale": [
        0.7,
        1,
        1
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
    "window_1l9d9lw7xf4gkmtq": {
      "object": "node",
      "id": "window_1l9d9lw7xf4gkmtq",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_zd9nn4l77x2clujj",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        3.4000000000000004,
        1.4,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_zd9nn4l77x2clujj",
      "width": 1.1208449537945202,
      "height": 1.5,
      "openingKind": "window",
      "windowType": "fixed",
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
    "item_l6hro1258047hb4d": {
      "object": "node",
      "id": "item_l6hro1258047hb4d",
      "type": "item",
      "name": "Standing Desk",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        11.350000000000001,
        0,
        -6.15
      ],
      "rotation": [
        0,
        36.12831551628262,
        0
      ],
      "scale": [
        0.7,
        1,
        0.9
      ],
      "children": [],
      "asset": {
        "id": "standing-desk-mo8wgz95",
        "category": "desks",
        "name": "Standing Desk",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/standing-desk-mo8wgz95/models/item_model_zzZ58018waP8VY6Z.glb",
        "dimensions": [
          1.41,
          0.85,
          0.68
        ],
        "tags": [
          "office"
        ],
        "functionTags": [
          "desks"
        ],
        "offset": [
          0.00004610419273376465,
          0.4203098952770233,
          0.0018924519419670216
        ],
        "rotation": [
          0,
          0,
          0
        ],
        "scale": [
          1.4,
          1.4,
          1.4
        ]
      }
    },
    "item_6gopbpkl68b7abuv": {
      "object": "node",
      "id": "item_6gopbpkl68b7abuv",
      "type": "item",
      "name": "Closet",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "position": [
        9.1,
        0,
        -4.75
      ],
      "rotation": [
        0,
        83.25220532012952,
        0
      ],
      "scale": [
        1,
        1,
        1
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
    "wall_uzljfp0kfhmiyf1a": {
      "object": "node",
      "id": "wall_uzljfp0kfhmiyf1a",
      "type": "wall",
      "name": "Wall 107",
      "parentId": "level_tf1ug5dswkkzfhqa",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        8.75,
        -5.75
      ],
      "end": [
        9.403722763061523,
        -5.75
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "item_ugv5f82w7wfrzqqt": {
      "object": "node",
      "id": "item_ugv5f82w7wfrzqqt",
      "type": "item",
      "name": "Closet",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -10.05,
        0,
        2.2
      ],
      "rotation": [
        0,
        34.55751918948772,
        0
      ],
      "scale": [
        1.1,
        1,
        0.7
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
    "wall_yuvcspiakcghzx4g": {
      "object": "node",
      "id": "wall_yuvcspiakcghzx4g",
      "type": "wall",
      "name": "Wall 95",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "door_8flujo6mj2vg8y4c"
      ],
      "height": 3.05,
      "start": [
        -7.699985684586803,
        2.500000266943914
      ],
      "end": [
        -11.19999999999968,
        2.499999978484372
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "door_ut4pjsmoy87b9p9d": {
      "object": "node",
      "id": "door_ut4pjsmoy87b9p9d",
      "type": "door",
      "name": "Door 3",
      "parentId": "wall_8sho2tmzzowgww0x",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        1.1500000000000001,
        1.05,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_8sho2tmzzowgww0x",
      "width": 0.9,
      "height": 2.1,
      "doorCategory": "interior",
      "doorType": "pocket",
      "leafCount": 1,
      "operationState": 0,
      "slideDirection": "right",
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
      "hingesSide": "left",
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
    "window_nnuevztr0ycjdtn8": {
      "object": "node",
      "id": "window_nnuevztr0ycjdtn8",
      "type": "window",
      "name": "Window 1",
      "parentId": "wall_1np9087mdx93rr4w",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        0.9500000000000001,
        1.4,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "side": "front",
      "wallId": "wall_1np9087mdx93rr4w",
      "width": 1.22,
      "height": 1.52,
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
    "wall_8sho2tmzzowgww0x": {
      "object": "node",
      "id": "wall_8sho2tmzzowgww0x",
      "type": "wall",
      "name": "Wall 107",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "door_ut4pjsmoy87b9p9d"
      ],
      "start": [
        -7.699985684586803,
        2.500000266943914
      ],
      "end": [
        -7.699998854881567,
        0.20000028622879293
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "item_kh9t5y5kp95wi7jv": {
      "object": "node",
      "id": "item_kh9t5y5kp95wi7jv",
      "type": "item",
      "name": "Closet",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -5.25,
        0,
        2.1500000000000004
      ],
      "rotation": [
        0,
        34.55751918948772,
        0
      ],
      "scale": [
        0.6,
        1,
        1
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
    "door_tu3iv7c757vhcytr": {
      "object": "node",
      "id": "door_tu3iv7c757vhcytr",
      "type": "door",
      "name": "Door 3",
      "parentId": "wall_6cwwvdsejkj5mtqj",
      "visible": true,
      "metadata": {
        "isNew": true
      },
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
      "wallId": "wall_6cwwvdsejkj5mtqj",
      "width": 0.87,
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
      "handleSide": "right",
      "contentPadding": [
        0.04,
        0.04
      ],
      "doorCloser": false,
      "panicBar": false,
      "panicBarHeight": 1
    },
    "shelf_uezdda7wyo0efhp7": {
      "object": "node",
      "id": "shelf_uezdda7wyo0efhp7",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        -10.9,
        1.5000000000000007,
        -2.35
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ],
      "width": 1.1287112236022954,
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
    "wall_fz175tvrersrnu3o": {
      "object": "node",
      "id": "wall_fz175tvrersrnu3o",
      "type": "wall",
      "name": "Wall 107",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        -7.699999808878954,
        0.20000004776836172
      ],
      "end": [
        -5.794944183890986,
        0.19999994095398752
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_kr6vucuf1jucba4m": {
      "object": "node",
      "id": "wall_kr6vucuf1jucba4m",
      "type": "wall",
      "name": "Wall 107",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        -5.794944183890986,
        0.19999994095398752
      ],
      "end": [
        -4.905040740966797,
        0.1999999126287606
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "item_pg9m6esqtx68up07": {
      "object": "node",
      "id": "item_pg9m6esqtx68up07",
      "type": "item",
      "name": "Closet",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -7.249999999999999,
        0,
        -3.05
      ],
      "rotation": [
        0,
        48.69468613064179,
        0
      ],
      "scale": [
        0.7,
        1,
        1
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
    "item_f2q959zewh6iu1n2": {
      "object": "node",
      "id": "item_f2q959zewh6iu1n2",
      "type": "item",
      "name": "Kitchen",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -10.649999999999999,
        0,
        -6.4
      ],
      "rotation": [
        0,
        40.840704496667314,
        0
      ],
      "scale": [
        0.6,
        1,
        0.75
      ],
      "children": [],
      "asset": {
        "id": "kitchen",
        "category": "cabinets",
        "name": "Kitchen",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/kitchen/model.glb",
        "dimensions": [
          2.38,
          1.03,
          0.84
        ],
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
        "functionTags": [
          "cabinets"
        ],
        "offset": [
          -0.0000029206275939941406,
          2.466928776811983e-7,
          2.9802322387695312e-8
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
          "height": 0.797
        }
      }
    },
    "item_348v7t77kgcx9ac5": {
      "object": "node",
      "id": "item_348v7t77kgcx9ac5",
      "type": "item",
      "name": "Kitchen Bar",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -11.700000000000001,
        0,
        -6
      ],
      "rotation": [
        0,
        4.71238898038469,
        0
      ],
      "scale": [
        0.6,
        0.74,
        0.65
      ],
      "children": [],
      "asset": {
        "id": "wooden-kitchen-bar-moa2hhh4",
        "category": "counters",
        "name": "Kitchen Bar",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/models/item_model_c6iR1M2eE2I8k5M3.glb",
        "dimensions": [
          2.5,
          1.06,
          0.96
        ],
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
        "functionTags": [
          "counters"
        ],
        "offset": [
          0.0003166446089745145,
          0.5321682389080525,
          -0.002378878891468039
        ],
        "rotation": [
          0,
          0,
          0
        ],
        "scale": [
          2.49,
          2.49,
          2.49
        ],
        "surface": {
          "height": 1.06
        }
      }
    },
    "wall_2n479sj52u10o0z2": {
      "object": "node",
      "id": "wall_2n479sj52u10o0z2",
      "type": "wall",
      "name": "Wall 112",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        -11.199999999998052,
        0.2000000177425283
      ],
      "end": [
        -8.80000000000334,
        0.20000001774253243
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "door_bsxerk1ht93nb2ey": {
      "object": "node",
      "id": "door_bsxerk1ht93nb2ey",
      "type": "door",
      "name": "Door 3",
      "parentId": "wall_9r2uy0oht08epwof",
      "visible": true,
      "metadata": {
        "isNew": true
      },
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
      "wallId": "wall_9r2uy0oht08epwof",
      "width": 0.87,
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
      "handleSide": "right",
      "contentPadding": [
        0.04,
        0.04
      ],
      "doorCloser": false,
      "panicBar": false,
      "panicBarHeight": 1
    },
    "wall_vdctednoz5xiqjlz": {
      "object": "node",
      "id": "wall_vdctednoz5xiqjlz",
      "type": "wall",
      "name": "Wall 113",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "start": [
        -11.199999999995894,
        -3.1999999999999926
      ],
      "end": [
        -11.200189804474004,
        -1.6500000000000126
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_1np9087mdx93rr4w": {
      "object": "node",
      "id": "wall_1np9087mdx93rr4w",
      "type": "wall",
      "name": "Wall 1",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "window_nnuevztr0ycjdtn8"
      ],
      "height": 3.05,
      "start": [
        -11.199999999998052,
        0.2000000177425283
      ],
      "end": [
        -11.19999999999968,
        2.499999978484372
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_9r2uy0oht08epwof": {
      "object": "node",
      "id": "wall_9r2uy0oht08epwof",
      "type": "wall",
      "name": "Wall 111",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "door_bsxerk1ht93nb2ey"
      ],
      "start": [
        -8.799999934865658,
        -1.6500000000000103
      ],
      "end": [
        -8.80000000000334,
        0.20000001774253243
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_kcbhav7btp366v2v": {
      "object": "node",
      "id": "wall_kcbhav7btp366v2v",
      "type": "wall",
      "name": "Wall 108",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        -11.200189804474004,
        -1.6500000000000126
      ],
      "end": [
        -11.199999999998052,
        0.2000000177425283
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "item_9srcgjx6fx7qn4ru": {
      "object": "node",
      "id": "item_9srcgjx6fx7qn4ru",
      "type": "item",
      "name": "Kitchen Bar",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -11.700000000000001,
        0,
        -4.05
      ],
      "rotation": [
        0,
        4.71238898038469,
        0
      ],
      "scale": [
        0.6,
        0.74,
        0.65
      ],
      "children": [],
      "asset": {
        "id": "wooden-kitchen-bar-moa2hhh4",
        "category": "counters",
        "name": "Kitchen Bar",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/models/item_model_c6iR1M2eE2I8k5M3.glb",
        "dimensions": [
          2.5,
          1.06,
          0.96
        ],
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
        "functionTags": [
          "counters"
        ],
        "offset": [
          0.0003166446089745145,
          0.5321682389080525,
          -0.002378878891468039
        ],
        "rotation": [
          0,
          0,
          0
        ],
        "scale": [
          2.49,
          2.49,
          2.49
        ],
        "surface": {
          "height": 1.06
        }
      }
    },
    "item_xbz96hwvq9vgqvfh": {
      "object": "node",
      "id": "item_xbz96hwvq9vgqvfh",
      "type": "item",
      "name": "Stove",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -11.700000000000001,
        0,
        -4.8999999999999995
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ],
      "scale": [
        0.8,
        0.8,
        0.8
      ],
      "children": [],
      "asset": {
        "id": "stove",
        "category": "kitchen-appliances",
        "name": "Stove",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/stove/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/stove/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/stove/model.glb",
        "dimensions": [
          0.92,
          0.85,
          0.76
        ],
        "tags": [
          "floor",
          "large"
        ],
        "functionTags": [
          "kitchen-appliances"
        ],
        "offset": [
          0.004298418760299683,
          2.230835320915503e-7,
          -0.05046069622039795
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
    "wall_0zyr98dkpe008asr": {
      "object": "node",
      "id": "wall_0zyr98dkpe008asr",
      "type": "wall",
      "name": "Wall 23",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "start": [
        -12.100000000000001,
        -3.2
      ],
      "end": [
        -12.100000000000001,
        -6.8500000000000005
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_9fz5c4btvnihy7nu": {
      "object": "node",
      "id": "wall_9fz5c4btvnihy7nu",
      "type": "wall",
      "name": "Wall 24",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "window_2nznythwlwfqntem"
      ],
      "height": 3.05,
      "start": [
        -12.100000000000001,
        -6.8500000000000005
      ],
      "end": [
        -9.380439758300781,
        -6.8500000000000005
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "item_pldwa4kowdv1zr5b": {
      "object": "node",
      "id": "item_pldwa4kowdv1zr5b",
      "type": "item",
      "name": "Closet",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -9.05,
        0,
        -5.999999999999999
      ],
      "rotation": [
        0,
        58.119464091411174,
        0
      ],
      "scale": [
        0.8,
        1,
        1
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
    "wall_6cwwvdsejkj5mtqj": {
      "object": "node",
      "id": "wall_6cwwvdsejkj5mtqj",
      "type": "wall",
      "name": "Wall 111",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "door_tu3iv7c757vhcytr"
      ],
      "start": [
        -7.699999808878954,
        0.20000004776836172
      ],
      "end": [
        -7.700001576780763,
        -1.6500000000000101
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_s2l3s7z5tx9ibmiz": {
      "object": "node",
      "id": "wall_s2l3s7z5tx9ibmiz",
      "type": "wall",
      "name": "Wall 107",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        -5.794944183890986,
        -1.6500000153277292
      ],
      "end": [
        -5.794944183890986,
        0.19999994095398752
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "slab_0e9obojce1ap3d5x": {
      "object": "node",
      "id": "slab_0e9obojce1ap3d5x",
      "type": "slab",
      "name": "Room 178 Slab",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -5.794944183890986,
          0.19999994095398752
        ],
        [
          -7.699999808878954,
          0.20000004776836172
        ],
        [
          -7.700001576780763,
          -1.6500000000000101
        ],
        [
          -5.794944183890986,
          -1.6500000153277292
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.05,
      "autoFromWalls": true
    },
    "ceiling_3tqalovzxhntxmk4": {
      "object": "node",
      "id": "ceiling_3tqalovzxhntxmk4",
      "type": "ceiling",
      "name": "Room 151 Ceiling",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -5.794944183890986,
          0.19999994095398752
        ],
        [
          -7.699999808878954,
          0.20000004776836172
        ],
        [
          -7.700001576780763,
          -1.6500000000000101
        ],
        [
          -5.794944183890986,
          -1.6500000153277292
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 2.55,
      "autoFromWalls": true
    },
    "wall_64gpo4susju51rl2": {
      "object": "node",
      "id": "wall_64gpo4susju51rl2",
      "type": "wall",
      "name": "Wall 111",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "item_ezfgzb0tp299p8q0"
      ],
      "start": [
        -7.700001576780763,
        -1.6500000000000101
      ],
      "end": [
        -5.794944183890986,
        -1.6500000153277292
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "wall_pvhmiwunqcp5hdtv": {
      "object": "node",
      "id": "wall_pvhmiwunqcp5hdtv",
      "type": "wall",
      "name": "Wall 112",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "curveOffset": 0.3,
      "start": [
        -4.5726423548447475,
        0.5
      ],
      "end": [
        -5.794944183890986,
        -1.6500000153277292
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "slab_1praewuohund6oqn": {
      "object": "node",
      "id": "slab_1praewuohund6oqn",
      "type": "slab",
      "name": "Room 179 Slab",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -5.794944183890986,
          -1.6500000153277292
        ],
        [
          -5.444593188737619,
          -0.42673200013449253
        ],
        [
          -4.5726423548447475,
          0.5
        ],
        [
          -4.599999999999999,
          12.85
        ],
        [
          -12.200000000000001,
          12.850000000000001
        ],
        [
          -12.199999999113944,
          2.499999976563334
        ],
        [
          -7.699985684586803,
          2.500000266943914
        ],
        [
          -7.699999808878954,
          0.20000004776836172
        ],
        [
          -5.794944183890986,
          0.19999994095398752
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.05,
      "autoFromWalls": true
    },
    "ceiling_1jtgbofj5be5xewr": {
      "object": "node",
      "id": "ceiling_1jtgbofj5be5xewr",
      "type": "ceiling",
      "name": "Room 152 Ceiling",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -5.794944183890986,
          -1.6500000153277292
        ],
        [
          -5.444593188737619,
          -0.42673200013449253
        ],
        [
          -4.5726423548447475,
          0.5
        ],
        [
          -4.599999999999999,
          12.85
        ],
        [
          -12.200000000000001,
          12.850000000000001
        ],
        [
          -12.199999999113944,
          2.499999976563334
        ],
        [
          -7.699985684586803,
          2.500000266943914
        ],
        [
          -7.699999808878954,
          0.20000004776836172
        ],
        [
          -5.794944183890986,
          0.19999994095398752
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 3.0999999999999996,
      "autoFromWalls": true
    },
    "wall_6705axe3s9ceb0ay": {
      "object": "node",
      "id": "wall_6705axe3s9ceb0ay",
      "type": "wall",
      "name": "Wall 110",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        -11.199999999995894,
        -3.1999999999999926
      ],
      "end": [
        -8.8,
        -3.2
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_yrrsrrfjd67iibsp": {
      "object": "node",
      "id": "wall_yrrsrrfjd67iibsp",
      "type": "wall",
      "name": "Wall 24",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "start": [
        -9.380439758300781,
        -6.8500000000000005
      ],
      "end": [
        -8.8,
        -6.8500000000000005
      ],
      "frontSide": "interior",
      "backSide": "exterior"
    },
    "item_7w7f81supdmz4a3r": {
      "object": "node",
      "id": "item_7w7f81supdmz4a3r",
      "type": "item",
      "name": "Kitchen Bar",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -9.700000000000001,
        0,
        -6.1000000000000005
      ],
      "rotation": [
        0,
        4.71238898038469,
        0
      ],
      "scale": [
        0.6,
        0.74,
        0.65
      ],
      "children": [],
      "asset": {
        "id": "wooden-kitchen-bar-moa2hhh4",
        "category": "counters",
        "name": "Kitchen Bar",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/wooden-kitchen-bar-moa2hhh4/models/item_model_c6iR1M2eE2I8k5M3.glb",
        "dimensions": [
          2.5,
          1.06,
          0.96
        ],
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
        "functionTags": [
          "counters"
        ],
        "offset": [
          0.0003166446089745145,
          0.5321682389080525,
          -0.002378878891468039
        ],
        "rotation": [
          0,
          0,
          0
        ],
        "scale": [
          2.49,
          2.49,
          2.49
        ],
        "surface": {
          "height": 1.06
        }
      }
    },
    "item_9a0zqvbfmsl5fw1w": {
      "object": "node",
      "id": "item_9a0zqvbfmsl5fw1w",
      "type": "item",
      "name": "Small Fridge",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -9.750000000000002,
        0,
        -4.9
      ],
      "rotation": [
        0,
        4.71238898038469,
        0
      ],
      "scale": [
        0.6,
        0.6,
        0.6
      ],
      "children": [],
      "asset": {
        "id": "small-fridge-mrdm8sn9",
        "category": "kitchen-appliances",
        "name": "Small Fridge",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/small-fridge-mrdm8sn9/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/small-fridge-mrdm8sn9/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/small-fridge-mrdm8sn9/models/item_model_UPrNabJWDzLaI5Z4.glb",
        "dimensions": [
          1,
          2.03,
          1.01
        ],
        "tags": [
          "Fridge",
          "Kitchen"
        ],
        "functionTags": [
          "kitchen-appliances"
        ],
        "offset": [
          0.0000095367431640625,
          7.41760288747173e-8,
          -0.000001043081283569336
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
    "item_bvm6g5dv7tafz2nx": {
      "object": "node",
      "id": "item_bvm6g5dv7tafz2nx",
      "type": "item",
      "name": "Stove",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -7.000000000000001,
        0,
        -4.9
      ],
      "rotation": [
        0,
        14.137166941154069,
        0
      ],
      "scale": [
        0.6,
        0.8,
        0.8
      ],
      "children": [],
      "asset": {
        "id": "stove",
        "category": "kitchen-appliances",
        "name": "Stove",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/stove/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/stove/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/stove/model.glb",
        "dimensions": [
          0.92,
          0.85,
          0.76
        ],
        "tags": [
          "floor",
          "large"
        ],
        "functionTags": [
          "kitchen-appliances"
        ],
        "offset": [
          0.004298418760299683,
          2.230835320915503e-7,
          -0.05046069622039795
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
    "shelf_rgt7s0vjijt93bji": {
      "object": "node",
      "id": "shelf_rgt7s0vjijt93bji",
      "type": "shelf",
      "name": "Shelf",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "position": [
        -9.8,
        1.900000000000001,
        -1.9500000000000002
      ],
      "rotation": [
        0,
        9.42477796076938,
        0
      ],
      "width": 1.7764792442321782,
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
    "door_tlc9yr54dy7q97at": {
      "object": "node",
      "id": "door_tlc9yr54dy7q97at",
      "type": "door",
      "name": "Door 3",
      "parentId": "wall_2fobd0o5x204ngk1",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        0.55,
        1.05,
        0
      ],
      "rotation": [
        0,
        3.141592653589793,
        0
      ],
      "side": "back",
      "wallId": "wall_2fobd0o5x204ngk1",
      "width": 0.87,
      "height": 2.1,
      "doorCategory": "interior",
      "doorType": "hinged",
      "leafCount": 1,
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
      "threshold": true,
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
        0.03,
        0.04
      ],
      "doorCloser": false,
      "panicBar": false,
      "panicBarHeight": 1
    },
    "wall_2fobd0o5x204ngk1": {
      "object": "node",
      "id": "wall_2fobd0o5x204ngk1",
      "type": "wall",
      "name": "Wall 109",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "door_tlc9yr54dy7q97at"
      ],
      "start": [
        -8.8,
        -3.2
      ],
      "end": [
        -8.799999934865658,
        -1.6500000000000103
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_iuk24zw5o84rvcxh": {
      "object": "node",
      "id": "wall_iuk24zw5o84rvcxh",
      "type": "wall",
      "name": "Wall 114",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        -8.799999934865658,
        -1.6500000000000103
      ],
      "end": [
        -11.200189804474004,
        -1.6500000000000126
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "slab_ggzwfm5sfmllafw7": {
      "object": "node",
      "id": "slab_ggzwfm5sfmllafw7",
      "type": "slab",
      "name": "Room 182 Slab",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -8.8,
          -3.2
        ],
        [
          -8.799999934865658,
          -1.6500000000000103
        ],
        [
          -11.200189804474004,
          -1.6500000000000126
        ],
        [
          -11.199999999995894,
          -3.1999999999999926
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.05,
      "autoFromWalls": false
    },
    "ceiling_ru7wc4kuyzbeuwww": {
      "object": "node",
      "id": "ceiling_ru7wc4kuyzbeuwww",
      "type": "ceiling",
      "name": "Room 154 Ceiling",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -8.8,
          -3.2
        ],
        [
          -8.799999934865658,
          -1.6500000000000103
        ],
        [
          -11.200189804474004,
          -1.6500000000000126
        ],
        [
          -11.199999999995894,
          -3.1999999999999926
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 3.0999999999999996,
      "autoFromWalls": false
    },
    "slab_m5z3cwvgago0ut5i": {
      "object": "node",
      "id": "slab_m5z3cwvgago0ut5i",
      "type": "slab",
      "name": "Room 183 Slab",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -8.80000000000334,
          0.20000001774253243
        ],
        [
          -11.199999999998052,
          0.2000000177425283
        ],
        [
          -11.200189804474004,
          -1.6500000000000126
        ],
        [
          -8.799999934865658,
          -1.6500000000000103
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.05,
      "autoFromWalls": true
    },
    "ceiling_4k7bqk21s155khjv": {
      "object": "node",
      "id": "ceiling_4k7bqk21s155khjv",
      "type": "ceiling",
      "name": "Room 155 Ceiling",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -8.80000000000334,
          0.20000001774253243
        ],
        [
          -11.199999999998052,
          0.2000000177425283
        ],
        [
          -11.200189804474004,
          -1.6500000000000126
        ],
        [
          -8.799999934865658,
          -1.6500000000000103
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 2.55,
      "autoFromWalls": true
    },
    "item_gq07kpc58s7fupyx": {
      "object": "node",
      "id": "item_gq07kpc58s7fupyx",
      "type": "item",
      "name": "双开门冰箱",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -9.050000000000002,
        0,
        -4.8500000000000005
      ],
      "rotation": [
        0,
        7.853981633974483,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "-mq0m9vr1",
        "category": "kitchen-appliances",
        "name": "双开门冰箱",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0m9vr1/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0m9vr1/floor-plan.png",
        "source": "mine",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/users/user_VooX27Txi0axz2rW/-mq0m9vr1/models/item_model_36sYxXWi7RP04Iuv.glb",
        "dimensions": [
          1.07,
          2,
          0.67
        ],
        "functionTags": [
          "kitchen-appliances"
        ],
        "offset": [
          -1.0847338588093367,
          2.0930512656391898e-8,
          0.3248956196019632
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
    "item_4lwzgyd13g5lq0pt": {
      "object": "node",
      "id": "item_4lwzgyd13g5lq0pt",
      "type": "item",
      "name": "Dining Chair",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -6.250000000000001,
        0,
        -6.000000000000001
      ],
      "rotation": [
        0,
        17.27875959474386,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "dining-chair",
        "category": "dining-chairs",
        "name": "Dining Chair",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/model.glb",
        "dimensions": [
          0.47,
          0.87,
          0.5
        ],
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
        "functionTags": [
          "dining-chairs"
        ],
        "offset": [
          4.3958425521850586e-7,
          4.045574542033137e-8,
          0.001551710069179535
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
    "item_fyk0whfb3qnubffq": {
      "object": "node",
      "id": "item_fyk0whfb3qnubffq",
      "type": "item",
      "name": "Dining Chair",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -6.250000000000002,
        0,
        -5.400000000000001
      ],
      "rotation": [
        0,
        10.995574287564276,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "dining-chair",
        "category": "dining-chairs",
        "name": "Dining Chair",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/dining-chair/model.glb",
        "dimensions": [
          0.47,
          0.87,
          0.5
        ],
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
        "functionTags": [
          "dining-chairs"
        ],
        "offset": [
          4.3958425521850586e-7,
          4.045574542033137e-8,
          0.001551710069179535
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
    "item_qks6b078kc1t2tji": {
      "object": "node",
      "id": "item_qks6b078kc1t2tji",
      "type": "item",
      "name": "Closet",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -6.75,
        0,
        -3.0500000000000003
      ],
      "rotation": [
        0,
        48.69468613064179,
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
    "slab_o7aqk8xf1awmro34": {
      "object": "node",
      "id": "slab_o7aqk8xf1awmro34",
      "type": "slab",
      "name": "Room 184 Slab",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          6.750276373551734,
          -5.300026084551986
        ],
        [
          6.750277347883061,
          -1.8537885665893554
        ],
        [
          0.23861785233020782,
          -1.8537885665893554
        ],
        [
          0.16322560881141568,
          -1.1388237194566686
        ],
        [
          -0.11006018069273615,
          -0.47386236699071116
        ],
        [
          -0.5592108880780169,
          0.08749524191253055
        ],
        [
          -1.1480220187247308,
          0.5
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
          -4.5726423548447475,
          0.5
        ],
        [
          -5.444593188737619,
          -0.42673200013449253
        ],
        [
          -5.794944183890986,
          -1.6500000153277292
        ],
        [
          -7.700001576780763,
          -1.6500000000000101
        ],
        [
          -7.699985684586803,
          2.500000266943914
        ],
        [
          -11.19999999999968,
          2.499999978484372
        ],
        [
          -11.199999999998052,
          0.2000000177425283
        ],
        [
          -8.80000000000334,
          0.20000001774253243
        ],
        [
          -8.8,
          -4.2524590492248535
        ],
        [
          -9.385787323421138,
          -4.252233782463062
        ],
        [
          -9.407449931381704,
          -6.8497747443451384
        ],
        [
          -8.8,
          -6.850000000000001
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
          1.8999990256686734,
          -5.300007342042391
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.05,
      "autoFromWalls": true
    },
    "ceiling_kh9lo8p18kumkk1a": {
      "object": "node",
      "id": "ceiling_kh9lo8p18kumkk1a",
      "type": "ceiling",
      "name": "Room 156 Ceiling",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          6.750276373551734,
          -5.300026084551986
        ],
        [
          6.750277347883061,
          -1.8537885665893554
        ],
        [
          0.23861785233020782,
          -1.8537885665893554
        ],
        [
          0.16322560881141568,
          -1.1388237194566686
        ],
        [
          -0.11006018069273615,
          -0.47386236699071116
        ],
        [
          -0.5592108880780169,
          0.08749524191253055
        ],
        [
          -1.1480220187247308,
          0.5
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
          -4.5726423548447475,
          0.5
        ],
        [
          -5.444593188737619,
          -0.42673200013449253
        ],
        [
          -5.794944183890986,
          -1.6500000153277292
        ],
        [
          -7.700001576780763,
          -1.6500000000000101
        ],
        [
          -7.699985684586803,
          2.500000266943914
        ],
        [
          -11.19999999999968,
          2.499999978484372
        ],
        [
          -11.199999999998052,
          0.2000000177425283
        ],
        [
          -8.80000000000334,
          0.20000001774253243
        ],
        [
          -8.8,
          -4.2524590492248535
        ],
        [
          -9.385787323421138,
          -4.252233782463062
        ],
        [
          -9.407449931381704,
          -6.8497747443451384
        ],
        [
          -8.8,
          -6.850000000000001
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
          1.8999990256686734,
          -5.300007342042391
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 3.0999999999999996,
      "autoFromWalls": true
    },
    "wall_x4r17ykcfb06w8r0": {
      "object": "node",
      "id": "wall_x4r17ykcfb06w8r0",
      "type": "wall",
      "name": "Wall 108",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [
        "door_zp3l5ngoj2pjvhxp"
      ],
      "start": [
        -8.8,
        -3.2
      ],
      "end": [
        -8.8,
        -4.2524590492248535
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "wall_nsbplym2ij9rljak": {
      "object": "node",
      "id": "wall_nsbplym2ij9rljak",
      "type": "wall",
      "name": "Wall 113",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        -9.385787323421138,
        -4.252233782463062
      ],
      "end": [
        -9.407449931381704,
        -6.8497747443451384
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "wall_fbx6g1cw8y66jyxl": {
      "object": "node",
      "id": "wall_fbx6g1cw8y66jyxl",
      "type": "wall",
      "name": "Wall 109",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "start": [
        -8.8,
        -4.2524590492248535
      ],
      "end": [
        -9.385787323421138,
        -4.252233782463062
      ],
      "frontSide": "unknown",
      "backSide": "unknown"
    },
    "door_zp3l5ngoj2pjvhxp": {
      "object": "node",
      "id": "door_zp3l5ngoj2pjvhxp",
      "type": "door",
      "name": "Door 3",
      "parentId": "wall_x4r17ykcfb06w8r0",
      "visible": true,
      "metadata": {
        "isNew": true
      },
      "position": [
        0.5,
        1.05,
        0
      ],
      "rotation": [
        0,
        6.283185307179586,
        0
      ],
      "side": "front",
      "wallId": "wall_x4r17ykcfb06w8r0",
      "width": 0.87,
      "height": 2.1,
      "doorCategory": "interior",
      "doorType": "hinged",
      "leafCount": 1,
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
      "threshold": true,
      "thresholdHeight": 0.02,
      "hingesSide": "left",
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
        0.03,
        0.04
      ],
      "doorCloser": false,
      "panicBar": false,
      "panicBarHeight": 1
    },
    "wall_wcgqkcmw4u2d1g76": {
      "object": "node",
      "id": "wall_wcgqkcmw4u2d1g76",
      "type": "wall",
      "name": "Wall 110",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "height": 3.05,
      "start": [
        -9.380439758300781,
        -6.8500000000000005
      ],
      "end": [
        -9.407449931381704,
        -6.8497747443451384
      ],
      "frontSide": "exterior",
      "backSide": "interior"
    },
    "item_4wpktclqtilzdyzr": {
      "object": "node",
      "id": "item_4wpktclqtilzdyzr",
      "type": "item",
      "name": "Closet",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -9.8,
        0,
        0.55
      ],
      "rotation": [
        0,
        62.83185307179586,
        0
      ],
      "scale": [
        0.8,
        1,
        1
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
    "item_heutnmkucr6u4z35": {
      "object": "node",
      "id": "item_heutnmkucr6u4z35",
      "type": "item",
      "name": "Washing Machine",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "position": [
        -10.05,
        0.4,
        0.65
      ],
      "rotation": [
        0,
        37.69911184307752,
        0
      ],
      "scale": [
        1,
        1,
        1
      ],
      "children": [],
      "asset": {
        "id": "washing-machine",
        "category": "laundry-appliances",
        "name": "Washing Machine",
        "thumbnail": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/washing-machine/thumbnail.png",
        "floorPlanUrl": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/washing-machine/floor-plan.png",
        "source": "library",
        "isDraft": false,
        "src": "https://byrpxoiotywskoojsrzd.supabase.co/storage/v1/object/public/items/system/washing-machine/model.glb",
        "dimensions": [
          0.6,
          0.86,
          0.53
        ],
        "tags": [
          "floor",
          "large",
          "electronics"
        ],
        "functionTags": [
          "laundry-appliances"
        ],
        "offset": [
          -0.000001862645149230957,
          1.0083027035534542e-7,
          -0.011400297284126282
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
    "slab_bbhiqr3nykgxgkrp": {
      "object": "node",
      "id": "slab_bbhiqr3nykgxgkrp",
      "type": "slab",
      "name": "Room 185 Slab",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "polygon": [
        [
          -12.100000000000001,
          -6.8500000000000005
        ],
        [
          -9.380439758300781,
          -6.8500000000000005
        ],
        [
          -9.385787323421138,
          -4.252233782463062
        ],
        [
          -8.8,
          -4.2524590492248535
        ],
        [
          -8.8,
          -3.2
        ],
        [
          -12.100000000000001,
          -3.2
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "elevation": 0.05,
      "autoFromWalls": true
    },
    "ceiling_u4nehlecmtwdrky2": {
      "object": "node",
      "id": "ceiling_u4nehlecmtwdrky2",
      "type": "ceiling",
      "name": "Room 157 Ceiling",
      "parentId": "level_jwi4ovhyra2ayxa5",
      "visible": true,
      "metadata": {},
      "children": [],
      "polygon": [
        [
          -12.100000000000001,
          -6.8500000000000005
        ],
        [
          -9.380439758300781,
          -6.8500000000000005
        ],
        [
          -9.385787323421138,
          -4.252233782463062
        ],
        [
          -8.8,
          -4.2524590492248535
        ],
        [
          -8.8,
          -3.2
        ],
        [
          -12.100000000000001,
          -3.2
        ]
      ],
      "holes": [],
      "holeMetadata": [],
      "height": 3.0999999999999996,
      "autoFromWalls": true
    }
  },
  "rootNodeIds": [
    "site_ki35u6k5svcjwzv3"
  ],
  "installedPlugins": [
    "pascal:trees"
  ]
}`,b;function x(e,t,n){function r(n,r){if(n._zod||Object.defineProperty(n,"_zod",{value:{def:r,constr:o,traits:new Set},enumerable:!1}),n._zod.traits.has(e))return;n._zod.traits.add(e),t(n,r);let i=o.prototype,a=Object.keys(i);for(let e=0;e<a.length;e++){let t=a[e];t in n||(n[t]=i[t].bind(n))}}let i=n?.Parent??Object;class a extends i{}Object.defineProperty(a,"name",{value:e});function o(e){var t;let i=n?.Parent?new a:this;r(i,e),(t=i._zod).deferred??(t.deferred=[]);for(let e of i._zod.deferred)e();return i}return Object.defineProperty(o,"init",{value:r}),Object.defineProperty(o,Symbol.hasInstance,{value:t=>n?.Parent&&t instanceof n.Parent?!0:t?._zod?.traits?.has(e)}),Object.defineProperty(o,"name",{value:e}),o}var S=class extends Error{constructor(){super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`)}},C=class extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name=`ZodEncodeError`}};(b=globalThis).__zod_globalConfig??(b.__zod_globalConfig={});var w=globalThis.__zod_globalConfig;function ee(e){return e&&Object.assign(w,e),w}function T(e){let t=Object.values(e).filter(e=>typeof e==`number`);return Object.entries(e).filter(([e,n])=>t.indexOf(+e)===-1).map(([e,t])=>t)}function E(e,t){return typeof t==`bigint`?t.toString():t}function D(e){return{get value(){{let t=e();return Object.defineProperty(this,"value",{value:t}),t}throw Error(`cached value already set`)}}}function te(e){return e==null}function ne(e){let t=+!!e.startsWith(`^`),n=e.endsWith(`$`)?e.length-1:e.length;return e.slice(t,n)}var O=Symbol(`evaluating`);function k(e,t,n){let r;Object.defineProperty(e,t,{get(){if(r!==O)return r===void 0&&(r=O,r=n()),r},set(n){Object.defineProperty(e,t,{value:n})},configurable:!0})}function A(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!0,configurable:!0})}function j(...e){let t={};for(let n of e){let e=Object.getOwnPropertyDescriptors(n);Object.assign(t,e)}return Object.defineProperties({},t)}function re(e){return JSON.stringify(e)}function M(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,``).replace(/[\s_-]+/g,`-`).replace(/^-+|-+$/g,``)}var N=`captureStackTrace`in Error?Error.captureStackTrace:(...e)=>{};function ie(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var ae=D(()=>{if(w.jitless||typeof navigator<`u`&&navigator?.userAgent?.includes(`Cloudflare`))return!1;try{return Function(``),!0}catch{return!1}});function oe(e){if(ie(e)===!1)return!1;let t=e.constructor;if(t===void 0||typeof t!=`function`)return!0;let n=t.prototype;return!(ie(n)===!1||Object.prototype.hasOwnProperty.call(n,`isPrototypeOf`)===!1)}function se(e){return oe(e)?{...e}:Array.isArray(e)?[...e]:e instanceof Map?new Map(e):e instanceof Set?new Set(e):e}var ce=new Set([`string`,`number`,`symbol`]);function P(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function le(e,t,n){let r=new e._zod.constr(t??e._zod.def);return(!t||n?.parent)&&(r._zod.parent=e),r}function F(e){let t=e;if(!t)return{};if(typeof t==`string`)return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error==`string`?{...t,error:()=>t.error}:t}function ue(e){return Object.keys(e).filter(t=>e[t]._zod.optin===`optional`&&e[t]._zod.optout===`optional`)}-Number.MAX_VALUE,Number.MAX_VALUE;function de(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.pick() cannot be used on object schemas containing refinements`);return le(e,j(e._zod.def,{get shape(){let e={};for(let r in t){if(!(r in n.shape))throw Error(`Unrecognized key: "${r}"`);t[r]&&(e[r]=n.shape[r])}return A(this,`shape`,e),e},checks:[]}))}function fe(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.omit() cannot be used on object schemas containing refinements`);return le(e,j(e._zod.def,{get shape(){let r={...e._zod.def.shape};for(let e in t){if(!(e in n.shape))throw Error(`Unrecognized key: "${e}"`);t[e]&&delete r[e]}return A(this,`shape`,r),r},checks:[]}))}function pe(e,t){if(!oe(t))throw Error(`Invalid input to extend: expected a plain object`);let n=e._zod.def.checks;if(n&&n.length>0){let n=e._zod.def.shape;for(let e in t)if(Object.getOwnPropertyDescriptor(n,e)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return le(e,j(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t};return A(this,`shape`,n),n}}))}function me(e,t){if(!oe(t))throw Error(`Invalid input to safeExtend: expected a plain object`);return le(e,j(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t};return A(this,`shape`,n),n}}))}function he(e,t){if(e._zod.def.checks?.length)throw Error(`.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`);return le(e,j(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t._zod.def.shape};return A(this,`shape`,n),n},get catchall(){return t._zod.def.catchall},checks:t._zod.def.checks??[]}))}function ge(e,t,n){let r=t._zod.def.checks;if(r&&r.length>0)throw Error(`.partial() cannot be used on object schemas containing refinements`);return le(t,j(t._zod.def,{get shape(){let r=t._zod.def.shape,i={...r};if(n)for(let t in n){if(!(t in r))throw Error(`Unrecognized key: "${t}"`);n[t]&&(i[t]=e?new e({type:`optional`,innerType:r[t]}):r[t])}else for(let t in r)i[t]=e?new e({type:`optional`,innerType:r[t]}):r[t];return A(this,`shape`,i),i},checks:[]}))}function _e(e,t,n){return le(t,j(t._zod.def,{get shape(){let r=t._zod.def.shape,i={...r};if(n)for(let t in n){if(!(t in i))throw Error(`Unrecognized key: "${t}"`);n[t]&&(i[t]=new e({type:`nonoptional`,innerType:r[t]}))}else for(let t in r)i[t]=new e({type:`nonoptional`,innerType:r[t]});return A(this,`shape`,i),i}}))}function ve(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue!==!0)return!0;return!1}function ye(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue===!1)return!0;return!1}function be(e,t){return t.map(t=>{var n;return(n=t).path??(n.path=[]),t.path.unshift(e),t})}function xe(e){return typeof e==`string`?e:e?.message}function Se(e,t,n){let r=e.message?e.message:xe(e.inst?._zod.def?.error?.(e))??xe(t?.error?.(e))??xe(n.customError?.(e))??xe(n.localeError?.(e))??`Invalid input`,{inst:i,continue:a,input:o,...s}=e;return s.path??=[],s.message=r,t?.reportInput&&(s.input=o),s}function Ce(e){return Array.isArray(e)?`array`:typeof e==`string`?`string`:`unknown`}function we(...e){let[t,n,r]=e;return typeof t==`string`?{message:t,code:`custom`,input:n,inst:r}:{...t}}var Te=(e,t)=>{e.name=`$ZodError`,Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:t,enumerable:!1}),e.message=JSON.stringify(t,E,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},Ee=x(`$ZodError`,Te),De=x(`$ZodError`,Te,{Parent:Error});function Oe(e,t=e=>e.message){let n={},r=[];for(let i of e.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(t(i))):r.push(t(i));return{formErrors:r,fieldErrors:n}}function ke(e,t=e=>e.message){let n={_errors:[]},r=(e,i=[])=>{for(let a of e.issues)if(a.code===`invalid_union`&&a.errors.length)a.errors.map(e=>r({issues:e},[...i,...a.path]));else if(a.code===`invalid_key`)r({issues:a.issues},[...i,...a.path]);else if(a.code===`invalid_element`)r({issues:a.issues},[...i,...a.path]);else{let e=[...i,...a.path];if(e.length===0)n._errors.push(t(a));else{let r=n,i=0;for(;i<e.length;){let n=e[i];i===e.length-1?(r[n]=r[n]||{_errors:[]},r[n]._errors.push(t(a))):r[n]=r[n]||{_errors:[]},r=r[n],i++}}}};return r(e),n}var Ae=e=>(t,n,r,i)=>{let a=r?{...r,async:!1}:{async:!1},o=t._zod.run({value:n,issues:[]},a);if(o instanceof Promise)throw new S;if(o.issues.length){let t=new((i?.Err)??e)(o.issues.map(e=>Se(e,a,ee())));throw N(t,i?.callee),t}return o.value},je=e=>async(t,n,r,i)=>{let a=r?{...r,async:!0}:{async:!0},o=t._zod.run({value:n,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){let t=new((i?.Err)??e)(o.issues.map(e=>Se(e,a,ee())));throw N(t,i?.callee),t}return o.value},Me=e=>(t,n,r)=>{let i=r?{...r,async:!1}:{async:!1},a=t._zod.run({value:n,issues:[]},i);if(a instanceof Promise)throw new S;return a.issues.length?{success:!1,error:new(e??Ee)(a.issues.map(e=>Se(e,i,ee())))}:{success:!0,data:a.value}},Ne=Me(De),Pe=e=>async(t,n,r)=>{let i=r?{...r,async:!0}:{async:!0},a=t._zod.run({value:n,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?{success:!1,error:new e(a.issues.map(e=>Se(e,i,ee())))}:{success:!0,data:a.value}},Fe=Pe(De),Ie=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Ae(e)(t,n,i)},Le=e=>(t,n,r)=>Ae(e)(t,n,r),Re=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return je(e)(t,n,i)},ze=e=>async(t,n,r)=>je(e)(t,n,r),Be=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Me(e)(t,n,i)},Ve=e=>(t,n,r)=>Me(e)(t,n,r),He=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Pe(e)(t,n,i)},Ue=e=>async(t,n,r)=>Pe(e)(t,n,r),We=/^[cC][0-9a-z]{6,}$/,Ge=/^[0-9a-z]+$/,Ke=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,qe=/^[0-9a-vA-V]{20}$/,Je=/^[A-Za-z0-9]{27}$/,Ye=/^[a-zA-Z0-9_-]{21}$/,Xe=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Ze=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Qe=e=>e?RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,$e=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,et=`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;function tt(){return new RegExp(et,`u`)}var nt=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,rt=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,it=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,at=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,ot=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,st=/^[A-Za-z0-9_-]*$/,ct=/^https?$/,lt=/^\+[1-9]\d{6,14}$/,ut=`(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`,dt=RegExp(`^${ut}$`);function ft(e){let t=`(?:[01]\\d|2[0-3]):[0-5]\\d`;return typeof e.precision==`number`?e.precision===-1?`${t}`:e.precision===0?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}function pt(e){return RegExp(`^${ft(e)}$`)}function mt(e){let t=ft({precision:e.precision}),n=[`Z`];e.local&&n.push(``),e.offset&&n.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);let r=`${t}(?:${n.join(`|`)})`;return RegExp(`^${ut}T(?:${r})$`)}var ht=e=>{let t=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??``}}`:`[\\s\\S]*`;return RegExp(`^${t}$`)},gt=/^-?\d+(?:\.\d+)?$/,_t=/^[^A-Z]*$/,vt=/^[^a-z]*$/,yt=x(`$ZodCheck`,(e,t)=>{var n;e._zod??={},e._zod.def=t,(n=e._zod).onattach??(n.onattach=[])}),bt=x(`$ZodCheckMaxLength`,(e,t)=>{var n;yt.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!te(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag.maximum??1/0;t.maximum<n&&(e._zod.bag.maximum=t.maximum)}),e._zod.check=n=>{let r=n.value;if(r.length<=t.maximum)return;let i=Ce(r);n.issues.push({origin:i,code:`too_big`,maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),xt=x(`$ZodCheckMinLength`,(e,t)=>{var n;yt.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!te(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag.minimum??-1/0;t.minimum>n&&(e._zod.bag.minimum=t.minimum)}),e._zod.check=n=>{let r=n.value;if(r.length>=t.minimum)return;let i=Ce(r);n.issues.push({origin:i,code:`too_small`,minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),St=x(`$ZodCheckLengthEquals`,(e,t)=>{var n;yt.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!te(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag;n.minimum=t.length,n.maximum=t.length,n.length=t.length}),e._zod.check=n=>{let r=n.value,i=r.length;if(i===t.length)return;let a=Ce(r),o=i>t.length;n.issues.push({origin:a,...o?{code:`too_big`,maximum:t.length}:{code:`too_small`,minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),Ct=x(`$ZodCheckStringFormat`,(e,t)=>{var n,r;yt.init(e,t),e._zod.onattach.push(e=>{let n=e._zod.bag;n.format=t.format,t.pattern&&(n.patterns??=new Set,n.patterns.add(t.pattern))}),t.pattern?(n=e._zod).check??(n.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:t.format,input:n.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}):(r=e._zod).check??(r.check=()=>{})}),wt=x(`$ZodCheckRegex`,(e,t)=>{Ct.init(e,t),e._zod.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:`regex`,input:n.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),Tt=x(`$ZodCheckLowerCase`,(e,t)=>{t.pattern??=_t,Ct.init(e,t)}),Et=x(`$ZodCheckUpperCase`,(e,t)=>{t.pattern??=vt,Ct.init(e,t)}),Dt=x(`$ZodCheckIncludes`,(e,t)=>{yt.init(e,t);let n=P(t.includes),r=new RegExp(typeof t.position==`number`?`^.{${t.position}}${n}`:n);t.pattern=r,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=new Set,t.patterns.add(r)}),e._zod.check=n=>{n.value.includes(t.includes,t.position)||n.issues.push({origin:`string`,code:`invalid_format`,format:`includes`,includes:t.includes,input:n.value,inst:e,continue:!t.abort})}}),Ot=x(`$ZodCheckStartsWith`,(e,t)=>{yt.init(e,t);let n=RegExp(`^${P(t.prefix)}.*`);t.pattern??=n,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=new Set,t.patterns.add(n)}),e._zod.check=n=>{n.value.startsWith(t.prefix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`starts_with`,prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),kt=x(`$ZodCheckEndsWith`,(e,t)=>{yt.init(e,t);let n=RegExp(`.*${P(t.suffix)}$`);t.pattern??=n,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=new Set,t.patterns.add(n)}),e._zod.check=n=>{n.value.endsWith(t.suffix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`ends_with`,suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}}),At=x(`$ZodCheckOverwrite`,(e,t)=>{yt.init(e,t),e._zod.check=e=>{e.value=t.tx(e.value)}}),jt=class{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),--this.indent}write(e){if(typeof e==`function`){e(this,{execution:`sync`}),e(this,{execution:`async`});return}let t=e.split(`
`).filter(e=>e),n=Math.min(...t.map(e=>e.length-e.trimStart().length)),r=t.map(e=>e.slice(n)).map(e=>` `.repeat(this.indent*2)+e);for(let e of r)this.content.push(e)}compile(){let e=Function,t=this?.args,n=[...(this?.content??[``]).map(e=>`  ${e}`)];return new e(...t,n.join(`
`))}},Mt={major:4,minor:4,patch:3},I=x(`$ZodType`,(e,t)=>{var n;e??={},e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=Mt;let r=[...e._zod.def.checks??[]];e._zod.traits.has(`$ZodCheck`)&&r.unshift(e);for(let t of r)for(let n of t._zod.onattach)n(e);if(r.length===0)(n=e._zod).deferred??(n.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let t=(e,t,n)=>{let r=ve(e),i;for(let a of t){if(a._zod.def.when){if(ye(e)||!a._zod.def.when(e))continue}else if(r)continue;let t=e.issues.length,o=a._zod.check(e);if(o instanceof Promise&&n?.async===!1)throw new S;if(i||o instanceof Promise)i=(i??Promise.resolve()).then(async()=>{await o,e.issues.length!==t&&(r||=ve(e,t))});else{if(e.issues.length===t)continue;r||=ve(e,t)}}return i?i.then(()=>e):e},n=(n,i,a)=>{if(ve(n))return n.aborted=!0,n;let o=t(i,r,a);if(o instanceof Promise){if(a.async===!1)throw new S;return o.then(t=>e._zod.parse(t,a))}return e._zod.parse(o,a)};e._zod.run=(i,a)=>{if(a.skipChecks)return e._zod.parse(i,a);if(a.direction===`backward`){let t=e._zod.parse({value:i.value,issues:[]},{...a,skipChecks:!0});return t instanceof Promise?t.then(e=>n(e,i,a)):n(t,i,a)}let o=e._zod.parse(i,a);if(o instanceof Promise){if(a.async===!1)throw new S;return o.then(e=>t(e,r,a))}return t(o,r,a)}}k(e,`~standard`,()=>({validate:t=>{try{let n=Ne(e,t);return n.success?{value:n.data}:{issues:n.error?.issues}}catch{return Fe(e,t).then(e=>e.success?{value:e.data}:{issues:e.error?.issues})}},vendor:`zod`,version:1}))}),Nt=x(`$ZodString`,(e,t)=>{I.init(e,t),e._zod.pattern=[...e?._zod.bag?.patterns??[]].pop()??ht(e._zod.bag),e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=String(n.value)}catch{}return typeof n.value==`string`||n.issues.push({expected:`string`,code:`invalid_type`,input:n.value,inst:e}),n}}),L=x(`$ZodStringFormat`,(e,t)=>{Ct.init(e,t),Nt.init(e,t)}),Pt=x(`$ZodGUID`,(e,t)=>{t.pattern??=Ze,L.init(e,t)}),Ft=x(`$ZodUUID`,(e,t)=>{if(t.version){let e={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(e===void 0)throw Error(`Invalid UUID version: "${t.version}"`);t.pattern??=Qe(e)}else t.pattern??=Qe();L.init(e,t)}),It=x(`$ZodEmail`,(e,t)=>{t.pattern??=$e,L.init(e,t)}),Lt=x(`$ZodURL`,(e,t)=>{L.init(e,t),e._zod.check=n=>{try{let r=n.value.trim();if(!t.normalize&&t.protocol?.source===ct.source&&!/^https?:\/\//i.test(r)){n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid URL format`,input:n.value,inst:e,continue:!t.abort});return}let i=new URL(r);t.hostname&&(t.hostname.lastIndex=0,t.hostname.test(i.hostname)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid hostname`,pattern:t.hostname.source,input:n.value,inst:e,continue:!t.abort})),t.protocol&&(t.protocol.lastIndex=0,t.protocol.test(i.protocol.endsWith(`:`)?i.protocol.slice(0,-1):i.protocol)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid protocol`,pattern:t.protocol.source,input:n.value,inst:e,continue:!t.abort})),t.normalize?n.value=i.href:n.value=r;return}catch{n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort})}}}),Rt=x(`$ZodEmoji`,(e,t)=>{t.pattern??=tt(),L.init(e,t)}),zt=x(`$ZodNanoID`,(e,t)=>{t.pattern??=Ye,L.init(e,t)}),Bt=x(`$ZodCUID`,(e,t)=>{t.pattern??=We,L.init(e,t)}),Vt=x(`$ZodCUID2`,(e,t)=>{t.pattern??=Ge,L.init(e,t)}),Ht=x(`$ZodULID`,(e,t)=>{t.pattern??=Ke,L.init(e,t)}),Ut=x(`$ZodXID`,(e,t)=>{t.pattern??=qe,L.init(e,t)}),Wt=x(`$ZodKSUID`,(e,t)=>{t.pattern??=Je,L.init(e,t)}),Gt=x(`$ZodISODateTime`,(e,t)=>{t.pattern??=mt(t),L.init(e,t)}),Kt=x(`$ZodISODate`,(e,t)=>{t.pattern??=dt,L.init(e,t)}),qt=x(`$ZodISOTime`,(e,t)=>{t.pattern??=pt(t),L.init(e,t)}),Jt=x(`$ZodISODuration`,(e,t)=>{t.pattern??=Xe,L.init(e,t)}),Yt=x(`$ZodIPv4`,(e,t)=>{t.pattern??=nt,L.init(e,t),e._zod.bag.format=`ipv4`}),Xt=x(`$ZodIPv6`,(e,t)=>{t.pattern??=rt,L.init(e,t),e._zod.bag.format=`ipv6`,e._zod.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:`invalid_format`,format:`ipv6`,input:n.value,inst:e,continue:!t.abort})}}}),Zt=x(`$ZodCIDRv4`,(e,t)=>{t.pattern??=it,L.init(e,t)}),Qt=x(`$ZodCIDRv6`,(e,t)=>{t.pattern??=at,L.init(e,t),e._zod.check=n=>{let r=n.value.split(`/`);try{if(r.length!==2)throw Error();let[e,t]=r;if(!t)throw Error();let n=Number(t);if(`${n}`!==t||n<0||n>128)throw Error();new URL(`http://[${e}]`)}catch{n.issues.push({code:`invalid_format`,format:`cidrv6`,input:n.value,inst:e,continue:!t.abort})}}});function $t(e){if(e===``)return!0;if(/\s/.test(e)||e.length%4!=0)return!1;try{return atob(e),!0}catch{return!1}}var en=x(`$ZodBase64`,(e,t)=>{t.pattern??=ot,L.init(e,t),e._zod.bag.contentEncoding=`base64`,e._zod.check=n=>{$t(n.value)||n.issues.push({code:`invalid_format`,format:`base64`,input:n.value,inst:e,continue:!t.abort})}});function tn(e){if(!st.test(e))return!1;let t=e.replace(/[-_]/g,e=>e===`-`?`+`:`/`);return $t(t.padEnd(Math.ceil(t.length/4)*4,`=`))}var nn=x(`$ZodBase64URL`,(e,t)=>{t.pattern??=st,L.init(e,t),e._zod.bag.contentEncoding=`base64url`,e._zod.check=n=>{tn(n.value)||n.issues.push({code:`invalid_format`,format:`base64url`,input:n.value,inst:e,continue:!t.abort})}}),rn=x(`$ZodE164`,(e,t)=>{t.pattern??=lt,L.init(e,t)});function an(e,t=null){try{let n=e.split(`.`);if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let i=JSON.parse(atob(r));return!(`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&(!(`alg`in i)||i.alg!==t))}catch{return!1}}var on=x(`$ZodJWT`,(e,t)=>{L.init(e,t),e._zod.check=n=>{an(n.value,t.alg)||n.issues.push({code:`invalid_format`,format:`jwt`,input:n.value,inst:e,continue:!t.abort})}}),sn=x(`$ZodUnknown`,(e,t)=>{I.init(e,t),e._zod.parse=e=>e}),cn=x(`$ZodNever`,(e,t)=>{I.init(e,t),e._zod.parse=(t,n)=>(t.issues.push({expected:`never`,code:`invalid_type`,input:t.value,inst:e}),t)});function ln(e,t,n){e.issues.length&&t.issues.push(...be(n,e.issues)),t.value[n]=e.value}var un=x(`$ZodArray`,(e,t)=>{I.init(e,t),e._zod.parse=(n,r)=>{let i=n.value;if(!Array.isArray(i))return n.issues.push({expected:`array`,code:`invalid_type`,input:i,inst:e}),n;n.value=Array(i.length);let a=[];for(let e=0;e<i.length;e++){let o=i[e],s=t.element._zod.run({value:o,issues:[]},r);s instanceof Promise?a.push(s.then(t=>ln(t,n,e))):ln(s,n,e)}return a.length?Promise.all(a).then(()=>n):n}});function dn(e,t,n,r,i,a){let o=n in r;if(e.issues.length){if(i&&a&&!o)return;t.issues.push(...be(n,e.issues))}if(!o&&!i){e.issues.length||t.issues.push({code:`invalid_type`,expected:`nonoptional`,input:void 0,path:[n]});return}e.value===void 0?o&&(t.value[n]=void 0):t.value[n]=e.value}function fn(e){let t=Object.keys(e.shape);for(let n of t)if(!e.shape?.[n]?._zod?.traits?.has(`$ZodType`))throw Error(`Invalid element at key "${n}": expected a Zod schema`);let n=ue(e.shape);return{...e,keys:t,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(n)}}function pn(e,t,n,r,i,a){let o=[],s=i.keySet,c=i.catchall._zod,l=c.def.type,u=c.optin===`optional`,d=c.optout===`optional`;for(let i in t){if(i===`__proto__`||s.has(i))continue;if(l===`never`){o.push(i);continue}let a=c.run({value:t[i],issues:[]},r);a instanceof Promise?e.push(a.then(e=>dn(e,n,i,t,u,d))):dn(a,n,i,t,u,d)}return o.length&&n.issues.push({code:`unrecognized_keys`,keys:o,input:t,inst:a}),e.length?Promise.all(e).then(()=>n):n}var mn=x(`$ZodObject`,(e,t)=>{if(I.init(e,t),!Object.getOwnPropertyDescriptor(t,`shape`)?.get){let e=t.shape;Object.defineProperty(t,"shape",{get:()=>{let n={...e};return Object.defineProperty(t,"shape",{value:n}),n}})}let n=D(()=>fn(t));k(e._zod,`propValues`,()=>{let e=t.shape,n={};for(let t in e){let r=e[t]._zod;if(r.values){n[t]??(n[t]=new Set);for(let e of r.values)n[t].add(e)}}return n});let r=ie,i=t.catchall,a;e._zod.parse=(t,o)=>{a??=n.value;let s=t.value;if(!r(s))return t.issues.push({expected:`object`,code:`invalid_type`,input:s,inst:e}),t;t.value={};let c=[],l=a.shape;for(let e of a.keys){let n=l[e],r=n._zod.optin===`optional`,i=n._zod.optout===`optional`,a=n._zod.run({value:s[e],issues:[]},o);a instanceof Promise?c.push(a.then(n=>dn(n,t,e,s,r,i))):dn(a,t,e,s,r,i)}return i?pn(c,s,t,o,n.value,e):c.length?Promise.all(c).then(()=>t):t}}),hn=x(`$ZodObjectJIT`,(e,t)=>{mn.init(e,t);let n=e._zod.parse,r=D(()=>fn(t)),i=e=>{let t=new jt([`shape`,`payload`,`ctx`]),n=r.value,i=e=>{let t=re(e);return`shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`};t.write(`const input = payload.value;`);let a=Object.create(null),o=0;for(let e of n.keys)a[e]=`key_${o++}`;t.write(`const newResult = {};`);for(let r of n.keys){let n=a[r],o=re(r),s=e[r],c=s?._zod?.optin===`optional`,l=s?._zod?.optout===`optional`;t.write(`const ${n} = ${i(r)};`),c&&l?t.write(`
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

      `)}t.write(`payload.value = newResult;`),t.write(`return payload;`);let s=t.compile();return(t,n)=>s(e,t,n)},a,o=ie,s=!w.jitless,c=s&&ae.value,l=t.catchall,u;e._zod.parse=(d,f)=>{u??=r.value;let p=d.value;return o(p)?s&&c&&f?.async===!1&&f.jitless!==!0?(a||=i(t.shape),d=a(d,f),l?pn([],p,d,f,u,e):d):n(d,f):(d.issues.push({expected:`object`,code:`invalid_type`,input:p,inst:e}),d)}});function gn(e,t,n,r){for(let n of e)if(n.issues.length===0)return t.value=n.value,t;let i=e.filter(e=>!ve(e));return i.length===1?(t.value=i[0].value,i[0]):(t.issues.push({code:`invalid_union`,input:t.value,inst:n,errors:e.map(e=>e.issues.map(e=>Se(e,r,ee())))}),t)}var _n=x(`$ZodUnion`,(e,t)=>{I.init(e,t),k(e._zod,`optin`,()=>t.options.some(e=>e._zod.optin===`optional`)?`optional`:void 0),k(e._zod,`optout`,()=>t.options.some(e=>e._zod.optout===`optional`)?`optional`:void 0),k(e._zod,`values`,()=>{if(t.options.every(e=>e._zod.values))return new Set(t.options.flatMap(e=>Array.from(e._zod.values)))}),k(e._zod,`pattern`,()=>{if(t.options.every(e=>e._zod.pattern)){let e=t.options.map(e=>e._zod.pattern);return RegExp(`^(${e.map(e=>ne(e.source)).join(`|`)})$`)}});let n=t.options.length===1?t.options[0]._zod.run:null;e._zod.parse=(r,i)=>{if(n)return n(r,i);let a=!1,o=[];for(let e of t.options){let t=e._zod.run({value:r.value,issues:[]},i);if(t instanceof Promise)o.push(t),a=!0;else{if(t.issues.length===0)return t;o.push(t)}}return a?Promise.all(o).then(t=>gn(t,r,e,i)):gn(o,r,e,i)}}),vn=x(`$ZodIntersection`,(e,t)=>{I.init(e,t),e._zod.parse=(e,n)=>{let r=e.value,i=t.left._zod.run({value:r,issues:[]},n),a=t.right._zod.run({value:r,issues:[]},n);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([t,n])=>bn(e,t,n)):bn(e,i,a)}});function yn(e,t){if(e===t||e instanceof Date&&t instanceof Date&&+e==+t)return{valid:!0,data:e};if(oe(e)&&oe(t)){let n=Object.keys(t),r=Object.keys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};for(let n of r){let r=yn(e[n],t[n]);if(!r.valid)return{valid:!1,mergeErrorPath:[n,...r.mergeErrorPath]};i[n]=r.data}return{valid:!0,data:i}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=yn(i,a);if(!o.valid)return{valid:!1,mergeErrorPath:[r,...o.mergeErrorPath]};n.push(o.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function bn(e,t,n){let r=new Map,i;for(let n of t.issues)if(n.code===`unrecognized_keys`){i??=n;for(let e of n.keys)r.has(e)||r.set(e,{}),r.get(e).l=!0}else e.issues.push(n);for(let t of n.issues)if(t.code===`unrecognized_keys`)for(let e of t.keys)r.has(e)||r.set(e,{}),r.get(e).r=!0;else e.issues.push(t);let a=[...r].filter(([,e])=>e.l&&e.r).map(([e])=>e);if(a.length&&i&&e.issues.push({...i,keys:a}),ve(e))return e;let o=yn(t.value,n.value);if(!o.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);return e.value=o.data,e}var xn=x(`$ZodRecord`,(e,t)=>{I.init(e,t),e._zod.parse=(n,r)=>{let i=n.value;if(!oe(i))return n.issues.push({expected:`record`,code:`invalid_type`,input:i,inst:e}),n;let a=[],o=t.keyType._zod.values;if(o){n.value={};let s=new Set;for(let c of o)if(typeof c==`string`||typeof c==`number`||typeof c==`symbol`){s.add(typeof c==`number`?c.toString():c);let o=t.keyType._zod.run({value:c,issues:[]},r);if(o instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);if(o.issues.length){n.issues.push({code:`invalid_key`,origin:`record`,issues:o.issues.map(e=>Se(e,r,ee())),input:c,path:[c],inst:e});continue}let l=o.value,u=t.valueType._zod.run({value:i[c],issues:[]},r);u instanceof Promise?a.push(u.then(e=>{e.issues.length&&n.issues.push(...be(c,e.issues)),n.value[l]=e.value})):(u.issues.length&&n.issues.push(...be(c,u.issues)),n.value[l]=u.value)}let c;for(let e in i)s.has(e)||(c??=[],c.push(e));c&&c.length>0&&n.issues.push({code:`unrecognized_keys`,input:i,inst:e,keys:c})}else{n.value={};for(let o of Reflect.ownKeys(i)){if(o===`__proto__`||!Object.prototype.propertyIsEnumerable.call(i,o))continue;let s=t.keyType._zod.run({value:o,issues:[]},r);if(s instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);if(typeof o==`string`&&gt.test(o)&&s.issues.length){let e=t.keyType._zod.run({value:Number(o),issues:[]},r);if(e instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);e.issues.length===0&&(s=e)}if(s.issues.length){t.mode===`loose`?n.value[o]=i[o]:n.issues.push({code:`invalid_key`,origin:`record`,issues:s.issues.map(e=>Se(e,r,ee())),input:o,path:[o],inst:e});continue}let c=t.valueType._zod.run({value:i[o],issues:[]},r);c instanceof Promise?a.push(c.then(e=>{e.issues.length&&n.issues.push(...be(o,e.issues)),n.value[s.value]=e.value})):(c.issues.length&&n.issues.push(...be(o,c.issues)),n.value[s.value]=c.value)}}return a.length?Promise.all(a).then(()=>n):n}}),Sn=x(`$ZodEnum`,(e,t)=>{I.init(e,t);let n=T(t.entries),r=new Set(n);e._zod.values=r,e._zod.pattern=RegExp(`^(${n.filter(e=>ce.has(typeof e)).map(e=>typeof e==`string`?P(e):e.toString()).join(`|`)})$`),e._zod.parse=(t,i)=>{let a=t.value;return r.has(a)||t.issues.push({code:`invalid_value`,values:n,input:a,inst:e}),t}}),Cn=x(`$ZodTransform`,(e,t)=>{I.init(e,t),e._zod.optin=`optional`,e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new C(e.constructor.name);let i=t.transform(n.value,n);if(r.async)return(i instanceof Promise?i:Promise.resolve(i)).then(e=>(n.value=e,n.fallback=!0,n));if(i instanceof Promise)throw new S;return n.value=i,n.fallback=!0,n}});function wn(e,t){return t===void 0&&(e.issues.length||e.fallback)?{issues:[],value:void 0}:e}var Tn=x(`$ZodOptional`,(e,t)=>{I.init(e,t),e._zod.optin=`optional`,e._zod.optout=`optional`,k(e._zod,`values`,()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,void 0]):void 0),k(e._zod,`pattern`,()=>{let e=t.innerType._zod.pattern;return e?RegExp(`^(${ne(e.source)})?$`):void 0}),e._zod.parse=(e,n)=>{if(t.innerType._zod.optin===`optional`){let r=e.value,i=t.innerType._zod.run(e,n);return i instanceof Promise?i.then(e=>wn(e,r)):wn(i,r)}return e.value===void 0?e:t.innerType._zod.run(e,n)}}),En=x(`$ZodExactOptional`,(e,t)=>{Tn.init(e,t),k(e._zod,`values`,()=>t.innerType._zod.values),k(e._zod,`pattern`,()=>t.innerType._zod.pattern),e._zod.parse=(e,n)=>t.innerType._zod.run(e,n)}),Dn=x(`$ZodNullable`,(e,t)=>{I.init(e,t),k(e._zod,`optin`,()=>t.innerType._zod.optin),k(e._zod,`optout`,()=>t.innerType._zod.optout),k(e._zod,`pattern`,()=>{let e=t.innerType._zod.pattern;return e?RegExp(`^(${ne(e.source)}|null)$`):void 0}),k(e._zod,`values`,()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,null]):void 0),e._zod.parse=(e,n)=>e.value===null?e:t.innerType._zod.run(e,n)}),On=x(`$ZodDefault`,(e,t)=>{I.init(e,t),e._zod.optin=`optional`,k(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);if(e.value===void 0)return e.value=t.defaultValue,e;let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(e=>kn(e,t)):kn(r,t)}});function kn(e,t){return e.value===void 0&&(e.value=t.defaultValue),e}var An=x(`$ZodPrefault`,(e,t)=>{I.init(e,t),e._zod.optin=`optional`,k(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>(n.direction===`backward`||e.value===void 0&&(e.value=t.defaultValue),t.innerType._zod.run(e,n))}),jn=x(`$ZodNonOptional`,(e,t)=>{I.init(e,t),k(e._zod,`values`,()=>{let e=t.innerType._zod.values;return e?new Set([...e].filter(e=>e!==void 0)):void 0}),e._zod.parse=(n,r)=>{let i=t.innerType._zod.run(n,r);return i instanceof Promise?i.then(t=>Mn(t,e)):Mn(i,e)}});function Mn(e,t){return!e.issues.length&&e.value===void 0&&e.issues.push({code:`invalid_type`,expected:`nonoptional`,input:e.value,inst:t}),e}var Nn=x(`$ZodCatch`,(e,t)=>{I.init(e,t),e._zod.optin=`optional`,k(e._zod,`optout`,()=>t.innerType._zod.optout),k(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(r=>(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>Se(e,n,ee()))},input:e.value}),e.issues=[],e.fallback=!0),e)):(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>Se(e,n,ee()))},input:e.value}),e.issues=[],e.fallback=!0),e)}}),Pn=x(`$ZodPipe`,(e,t)=>{I.init(e,t),k(e._zod,`values`,()=>t.in._zod.values),k(e._zod,`optin`,()=>t.in._zod.optin),k(e._zod,`optout`,()=>t.out._zod.optout),k(e._zod,`propValues`,()=>t.in._zod.propValues),e._zod.parse=(e,n)=>{if(n.direction===`backward`){let r=t.out._zod.run(e,n);return r instanceof Promise?r.then(e=>Fn(e,t.in,n)):Fn(r,t.in,n)}let r=t.in._zod.run(e,n);return r instanceof Promise?r.then(e=>Fn(e,t.out,n)):Fn(r,t.out,n)}});function Fn(e,t,n){return e.issues.length?(e.aborted=!0,e):t._zod.run({value:e.value,issues:e.issues,fallback:e.fallback},n)}var In=x(`$ZodReadonly`,(e,t)=>{I.init(e,t),k(e._zod,`propValues`,()=>t.innerType._zod.propValues),k(e._zod,`values`,()=>t.innerType._zod.values),k(e._zod,`optin`,()=>t.innerType?._zod?.optin),k(e._zod,`optout`,()=>t.innerType?._zod?.optout),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(Ln):Ln(r)}});function Ln(e){return e.value=Object.freeze(e.value),e}var Rn=x(`$ZodCustom`,(e,t)=>{yt.init(e,t),I.init(e,t),e._zod.parse=(e,t)=>e,e._zod.check=n=>{let r=n.value,i=t.fn(r);if(i instanceof Promise)return i.then(t=>zn(t,n,r,e));zn(i,n,r,e)}});function zn(e,t,n,r){if(!e){let e={code:`custom`,input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(e.params=r._zod.def.params),t.issues.push(we(e))}}var Bn,Vn=class{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){let n=t[0];return this._map.set(e,n),n&&typeof n==`object`&&`id`in n&&this._idmap.set(n.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let t=this._map.get(e);return t&&typeof t==`object`&&`id`in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){let t=e._zod.parent;if(t){let n={...this.get(t)??{}};delete n.id;let r={...n,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}};function Hn(){return new Vn}(Bn=globalThis).__zod_globalRegistry??(Bn.__zod_globalRegistry=Hn());var Un=globalThis.__zod_globalRegistry;function Wn(e,t){return new e({type:`string`,...F(t)})}function Gn(e,t){return new e({type:`string`,format:`email`,check:`string_format`,abort:!1,...F(t)})}function Kn(e,t){return new e({type:`string`,format:`guid`,check:`string_format`,abort:!1,...F(t)})}function qn(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,...F(t)})}function Jn(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v4`,...F(t)})}function Yn(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v6`,...F(t)})}function Xn(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v7`,...F(t)})}function Zn(e,t){return new e({type:`string`,format:`url`,check:`string_format`,abort:!1,...F(t)})}function Qn(e,t){return new e({type:`string`,format:`emoji`,check:`string_format`,abort:!1,...F(t)})}function $n(e,t){return new e({type:`string`,format:`nanoid`,check:`string_format`,abort:!1,...F(t)})}function er(e,t){return new e({type:`string`,format:`cuid`,check:`string_format`,abort:!1,...F(t)})}function tr(e,t){return new e({type:`string`,format:`cuid2`,check:`string_format`,abort:!1,...F(t)})}function nr(e,t){return new e({type:`string`,format:`ulid`,check:`string_format`,abort:!1,...F(t)})}function rr(e,t){return new e({type:`string`,format:`xid`,check:`string_format`,abort:!1,...F(t)})}function ir(e,t){return new e({type:`string`,format:`ksuid`,check:`string_format`,abort:!1,...F(t)})}function ar(e,t){return new e({type:`string`,format:`ipv4`,check:`string_format`,abort:!1,...F(t)})}function or(e,t){return new e({type:`string`,format:`ipv6`,check:`string_format`,abort:!1,...F(t)})}function sr(e,t){return new e({type:`string`,format:`cidrv4`,check:`string_format`,abort:!1,...F(t)})}function cr(e,t){return new e({type:`string`,format:`cidrv6`,check:`string_format`,abort:!1,...F(t)})}function lr(e,t){return new e({type:`string`,format:`base64`,check:`string_format`,abort:!1,...F(t)})}function ur(e,t){return new e({type:`string`,format:`base64url`,check:`string_format`,abort:!1,...F(t)})}function dr(e,t){return new e({type:`string`,format:`e164`,check:`string_format`,abort:!1,...F(t)})}function fr(e,t){return new e({type:`string`,format:`jwt`,check:`string_format`,abort:!1,...F(t)})}function pr(e,t){return new e({type:`string`,format:`datetime`,check:`string_format`,offset:!1,local:!1,precision:null,...F(t)})}function mr(e,t){return new e({type:`string`,format:`date`,check:`string_format`,...F(t)})}function hr(e,t){return new e({type:`string`,format:`time`,check:`string_format`,precision:null,...F(t)})}function gr(e,t){return new e({type:`string`,format:`duration`,check:`string_format`,...F(t)})}function _r(e){return new e({type:`unknown`})}function vr(e,t){return new e({type:`never`,...F(t)})}function yr(e,t){return new bt({check:`max_length`,...F(t),maximum:e})}function br(e,t){return new xt({check:`min_length`,...F(t),minimum:e})}function xr(e,t){return new St({check:`length_equals`,...F(t),length:e})}function Sr(e,t){return new wt({check:`string_format`,format:`regex`,...F(t),pattern:e})}function Cr(e){return new Tt({check:`string_format`,format:`lowercase`,...F(e)})}function wr(e){return new Et({check:`string_format`,format:`uppercase`,...F(e)})}function Tr(e,t){return new Dt({check:`string_format`,format:`includes`,...F(t),includes:e})}function Er(e,t){return new Ot({check:`string_format`,format:`starts_with`,...F(t),prefix:e})}function Dr(e,t){return new kt({check:`string_format`,format:`ends_with`,...F(t),suffix:e})}function Or(e){return new At({check:`overwrite`,tx:e})}function kr(e){return Or(t=>t.normalize(e))}function Ar(){return Or(e=>e.trim())}function jr(){return Or(e=>e.toLowerCase())}function Mr(){return Or(e=>e.toUpperCase())}function Nr(){return Or(e=>M(e))}function Pr(e,t,n){return new e({type:`array`,element:t,...F(n)})}function Fr(e,t,n){return new e({type:`custom`,check:`custom`,fn:t,...F(n)})}function Ir(e,t){let n=Lr(t=>(t.addIssue=e=>{if(typeof e==`string`)t.issues.push(we(e,t.value,n._zod.def));else{let r=e;r.fatal&&(r.continue=!1),r.code??=`custom`,r.input??=t.value,r.inst??=n,r.continue??=!n._zod.def.abort,t.issues.push(we(r))}},e(t.value,t)),t);return n}function Lr(e,t){let n=new yt({check:`custom`,...F(t)});return n._zod.check=e,n}function Rr(e){let t=e?.target??`draft-2020-12`;return t===`draft-4`&&(t=`draft-04`),t===`draft-7`&&(t=`draft-07`),{processors:e.processors??{},metadataRegistry:e?.metadata??Un,target:t,unrepresentable:e?.unrepresentable??`throw`,override:e?.override??(()=>{}),io:e?.io??`output`,counter:0,seen:new Map,cycles:e?.cycles??`ref`,reused:e?.reused??`inline`,external:e?.external??void 0}}function zr(e,t,n={path:[],schemaPath:[]}){var r;let i=e._zod.def,a=t.seen.get(e);if(a)return a.count++,n.schemaPath.includes(e)&&(a.cycle=n.path),a.schema;let o={schema:{},count:1,cycle:void 0,path:n.path};t.seen.set(e,o);let s=e._zod.toJSONSchema?.();if(s)o.schema=s;else{let r={...n,schemaPath:[...n.schemaPath,e],path:n.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(t,o.schema,r);else{let n=o.schema,a=t.processors[i.type];if(!a)throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);a(e,t,n,r)}let a=e._zod.parent;a&&(o.ref||=a,zr(a,t,r),t.seen.get(a).isParent=!0)}let c=t.metadataRegistry.get(e);return c&&Object.assign(o.schema,c),t.io===`input`&&Hr(e)&&(delete o.schema.examples,delete o.schema.default),t.io===`input`&&`_prefault`in o.schema&&((r=o.schema).default??(r.default=o.schema._prefault)),delete o.schema._prefault,t.seen.get(e).schema}function Br(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);let r=new Map;for(let t of e.seen.entries()){let n=e.metadataRegistry.get(t[0])?.id;if(n){let e=r.get(n);if(e&&e!==t[0])throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);r.set(n,t[0])}}let i=t=>{let r=e.target===`draft-2020-12`?`$defs`:`definitions`;if(e.external){let n=e.external.registry.get(t[0])?.id,i=e.external.uri??(e=>e);if(n)return{ref:i(n)};let a=t[1].defId??t[1].schema.id??`schema${e.counter++}`;return t[1].defId=a,{defId:a,ref:`${i(`__shared`)}#/${r}/${a}`}}if(t[1]===n)return{ref:`#`};let i=`#/${r}/`,a=t[1].schema.id??`__schema${e.counter++}`;return{defId:a,ref:i+a}},a=e=>{if(e[1].schema.$ref)return;let t=e[1],{ref:n,defId:r}=i(e);t.def={...t.schema},r&&(t.defId=r);let a=t.schema;for(let e in a)delete a[e];a.$ref=n};if(e.cycles===`throw`)for(let t of e.seen.entries()){let e=t[1];if(e.cycle)throw Error(`Cycle detected: #/${e.cycle?.join(`/`)}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let n of e.seen.entries()){let r=n[1];if(t===n[0]){a(n);continue}if(e.external){let r=e.external.registry.get(n[0])?.id;if(t!==n[0]&&r){a(n);continue}}if(e.metadataRegistry.get(n[0])?.id){a(n);continue}if(r.cycle){a(n);continue}if(r.count>1&&e.reused===`ref`){a(n);continue}}}function Vr(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);let r=t=>{let n=e.seen.get(t);if(n.ref===null)return;let i=n.def??n.schema,a={...i},o=n.ref;if(n.ref=null,o){r(o);let n=e.seen.get(o),s=n.schema;if(s.$ref&&(e.target===`draft-07`||e.target===`draft-04`||e.target===`openapi-3.0`)?(i.allOf=i.allOf??[],i.allOf.push(s)):Object.assign(i,s),Object.assign(i,a),t._zod.parent===o)for(let e in i)e===`$ref`||e===`allOf`||e in a||delete i[e];if(s.$ref&&n.def)for(let e in i)e===`$ref`||e===`allOf`||e in n.def&&JSON.stringify(i[e])===JSON.stringify(n.def[e])&&delete i[e]}let s=t._zod.parent;if(s&&s!==o){r(s);let t=e.seen.get(s);if(t?.schema.$ref&&(i.$ref=t.schema.$ref,t.def))for(let e in i)e===`$ref`||e===`allOf`||e in t.def&&JSON.stringify(i[e])===JSON.stringify(t.def[e])&&delete i[e]}e.override({zodSchema:t,jsonSchema:i,path:n.path??[]})};for(let t of[...e.seen.entries()].reverse())r(t[0]);let i={};if(e.target===`draft-2020-12`?i.$schema=`https://json-schema.org/draft/2020-12/schema`:e.target===`draft-07`?i.$schema=`http://json-schema.org/draft-07/schema#`:e.target===`draft-04`?i.$schema=`http://json-schema.org/draft-04/schema#`:e.target,e.external?.uri){let n=e.external.registry.get(t)?.id;if(!n)throw Error("Schema is missing an `id` property");i.$id=e.external.uri(n)}Object.assign(i,n.def??n.schema);let a=e.metadataRegistry.get(t)?.id;a!==void 0&&i.id===a&&delete i.id;let o=e.external?.defs??{};for(let t of e.seen.entries()){let e=t[1];e.def&&e.defId&&(e.def.id===e.defId&&delete e.def.id,o[e.defId]=e.def)}e.external||Object.keys(o).length>0&&(e.target===`draft-2020-12`?i.$defs=o:i.definitions=o);try{let n=JSON.parse(JSON.stringify(i));return Object.defineProperty(n,"~standard",{value:{...t[`~standard`],jsonSchema:{input:Wr(t,`input`,e.processors),output:Wr(t,`output`,e.processors)}},enumerable:!1,writable:!1}),n}catch{throw Error(`Error converting schema to JSON.`)}}function Hr(e,t){let n=t??{seen:new Set};if(n.seen.has(e))return!1;n.seen.add(e);let r=e._zod.def;if(r.type===`transform`)return!0;if(r.type===`array`)return Hr(r.element,n);if(r.type===`set`)return Hr(r.valueType,n);if(r.type===`lazy`)return Hr(r.getter(),n);if(r.type===`promise`||r.type===`optional`||r.type===`nonoptional`||r.type===`nullable`||r.type===`readonly`||r.type==="default"||r.type===`prefault`)return Hr(r.innerType,n);if(r.type===`intersection`)return Hr(r.left,n)||Hr(r.right,n);if(r.type===`record`||r.type===`map`)return Hr(r.keyType,n)||Hr(r.valueType,n);if(r.type===`pipe`)return e._zod.traits.has(`$ZodCodec`)?!0:Hr(r.in,n)||Hr(r.out,n);if(r.type===`object`){for(let e in r.shape)if(Hr(r.shape[e],n))return!0;return!1}if(r.type===`union`){for(let e of r.options)if(Hr(e,n))return!0;return!1}if(r.type===`tuple`){for(let e of r.items)if(Hr(e,n))return!0;return!!(r.rest&&Hr(r.rest,n))}return!1}var Ur=(e,t={})=>n=>{let r=Rr({...n,processors:t});return zr(e,r),Br(r,e),Vr(r,e)},Wr=(e,t,n={})=>r=>{let{libraryOptions:i,target:a}=r??{},o=Rr({...i??{},target:a,io:t,processors:n});return zr(e,o),Br(o,e),Vr(o,e)},Gr={guid:`uuid`,url:`uri`,datetime:`date-time`,json_string:`json-string`,regex:``},Kr=(e,t,n,r)=>{let i=n;i.type=`string`;let{minimum:a,maximum:o,format:s,patterns:c,contentEncoding:l}=e._zod.bag;if(typeof a==`number`&&(i.minLength=a),typeof o==`number`&&(i.maxLength=o),s&&(i.format=Gr[s]??s,i.format===``&&delete i.format,s===`time`&&delete i.format),l&&(i.contentEncoding=l),c&&c.size>0){let e=[...c];e.length===1?i.pattern=e[0].source:e.length>1&&(i.allOf=[...e.map(e=>({...t.target===`draft-07`||t.target===`draft-04`||t.target===`openapi-3.0`?{type:`string`}:{},pattern:e.source}))])}},qr=(e,t,n,r)=>{n.not={}},Jr=(e,t,n,r)=>{let i=e._zod.def,a=T(i.entries);a.every(e=>typeof e==`number`)&&(n.type=`number`),a.every(e=>typeof e==`string`)&&(n.type=`string`),n.enum=a},Yr=(e,t,n,r)=>{if(t.unrepresentable===`throw`)throw Error(`Custom types cannot be represented in JSON Schema`)},Xr=(e,t,n,r)=>{if(t.unrepresentable===`throw`)throw Error(`Transforms cannot be represented in JSON Schema`)},Zr=(e,t,n,r)=>{let i=n,a=e._zod.def,{minimum:o,maximum:s}=e._zod.bag;typeof o==`number`&&(i.minItems=o),typeof s==`number`&&(i.maxItems=s),i.type=`array`,i.items=zr(a.element,t,{...r,path:[...r.path,`items`]})},Qr=(e,t,n,r)=>{let i=n,a=e._zod.def;i.type=`object`,i.properties={};let o=a.shape;for(let e in o)i.properties[e]=zr(o[e],t,{...r,path:[...r.path,`properties`,e]});let s=new Set(Object.keys(o)),c=new Set([...s].filter(e=>{let n=a.shape[e]._zod;return t.io===`input`?n.optin===void 0:n.optout===void 0}));c.size>0&&(i.required=Array.from(c)),a.catchall?._zod.def.type===`never`?i.additionalProperties=!1:a.catchall?a.catchall&&(i.additionalProperties=zr(a.catchall,t,{...r,path:[...r.path,`additionalProperties`]})):t.io===`output`&&(i.additionalProperties=!1)},$r=(e,t,n,r)=>{let i=e._zod.def,a=i.inclusive===!1,o=i.options.map((e,n)=>zr(e,t,{...r,path:[...r.path,a?`oneOf`:`anyOf`,n]}));a?n.oneOf=o:n.anyOf=o},ei=(e,t,n,r)=>{let i=e._zod.def,a=zr(i.left,t,{...r,path:[...r.path,`allOf`,0]}),o=zr(i.right,t,{...r,path:[...r.path,`allOf`,1]}),s=e=>`allOf`in e&&Object.keys(e).length===1;n.allOf=[...s(a)?a.allOf:[a],...s(o)?o.allOf:[o]]},ti=(e,t,n,r)=>{let i=n,a=e._zod.def;i.type=`object`;let o=a.keyType,s=o._zod.bag?.patterns;if(a.mode===`loose`&&s&&s.size>0){let e=zr(a.valueType,t,{...r,path:[...r.path,`patternProperties`,`*`]});i.patternProperties={};for(let t of s)i.patternProperties[t.source]=e}else(t.target===`draft-07`||t.target===`draft-2020-12`)&&(i.propertyNames=zr(a.keyType,t,{...r,path:[...r.path,`propertyNames`]})),i.additionalProperties=zr(a.valueType,t,{...r,path:[...r.path,`additionalProperties`]});let c=o._zod.values;if(c){let e=[...c].filter(e=>typeof e==`string`||typeof e==`number`);e.length>0&&(i.required=e)}},ni=(e,t,n,r)=>{let i=e._zod.def,a=zr(i.innerType,t,r),o=t.seen.get(e);t.target===`openapi-3.0`?(o.ref=i.innerType,n.nullable=!0):n.anyOf=[a,{type:`null`}]},ri=(e,t,n,r)=>{let i=e._zod.def;zr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},ii=(e,t,n,r)=>{let i=e._zod.def;zr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,n.default=JSON.parse(JSON.stringify(i.defaultValue))},ai=(e,t,n,r)=>{let i=e._zod.def;zr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,t.io===`input`&&(n._prefault=JSON.parse(JSON.stringify(i.defaultValue)))},oi=(e,t,n,r)=>{let i=e._zod.def;zr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType;let o;try{o=i.catchValue(void 0)}catch{throw Error(`Dynamic catch values are not supported in JSON Schema`)}n.default=o},si=(e,t,n,r)=>{let i=e._zod.def,a=i.in._zod.traits.has(`$ZodTransform`),o=t.io===`input`?a?i.out:i.in:i.out;zr(o,t,r);let s=t.seen.get(e);s.ref=o},ci=(e,t,n,r)=>{let i=e._zod.def;zr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,n.readOnly=!0},li=(e,t,n,r)=>{let i=e._zod.def;zr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},ui=x(`ZodISODateTime`,(e,t)=>{Gt.init(e,t),B.init(e,t)});function di(e){return pr(ui,e)}var fi=x(`ZodISODate`,(e,t)=>{Kt.init(e,t),B.init(e,t)});function pi(e){return mr(fi,e)}var mi=x(`ZodISOTime`,(e,t)=>{qt.init(e,t),B.init(e,t)});function hi(e){return hr(mi,e)}var gi=x(`ZodISODuration`,(e,t)=>{Jt.init(e,t),B.init(e,t)});function _i(e){return gr(gi,e)}var vi=x(`ZodError`,(e,t)=>{Ee.init(e,t),e.name=`ZodError`,Object.defineProperties(e,{format:{value:t=>ke(e,t)},flatten:{value:t=>Oe(e,t)},addIssue:{value:t=>{e.issues.push(t),e.message=JSON.stringify(e.issues,E,2)}},addIssues:{value:t=>{e.issues.push(...t),e.message=JSON.stringify(e.issues,E,2)}},isEmpty:{get(){return e.issues.length===0}}})},{Parent:Error}),yi=Ae(vi),bi=je(vi),xi=Me(vi),Si=Pe(vi),Ci=Ie(vi),wi=Le(vi),Ti=Re(vi),Ei=ze(vi),Di=Be(vi),Oi=Ve(vi),ki=He(vi),Ai=Ue(vi),ji=new WeakMap;function Mi(e,t,n){let r=Object.getPrototypeOf(e),i=ji.get(r);if(i||(i=new Set,ji.set(r,i)),!i.has(t)){i.add(t);for(let e in n){let t=n[e];Object.defineProperty(r,e,{configurable:!0,enumerable:!1,get(){let n=t.bind(this);return Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:!0,value:n}),n},set(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:!0,value:t})}})}}}var Ni=x(`ZodType`,(e,t)=>(I.init(e,t),Object.assign(e[`~standard`],{jsonSchema:{input:Wr(e,`input`),output:Wr(e,`output`)}}),e.toJSONSchema=Ur(e,{}),e.def=t,e.type=t.type,Object.defineProperty(e,"_def",{value:t}),e.parse=(t,n)=>yi(e,t,n,{callee:e.parse}),e.safeParse=(t,n)=>xi(e,t,n),e.parseAsync=async(t,n)=>bi(e,t,n,{callee:e.parseAsync}),e.safeParseAsync=async(t,n)=>Si(e,t,n),e.spa=e.safeParseAsync,e.encode=(t,n)=>Ci(e,t,n),e.decode=(t,n)=>wi(e,t,n),e.encodeAsync=async(t,n)=>Ti(e,t,n),e.decodeAsync=async(t,n)=>Ei(e,t,n),e.safeEncode=(t,n)=>Di(e,t,n),e.safeDecode=(t,n)=>Oi(e,t,n),e.safeEncodeAsync=async(t,n)=>ki(e,t,n),e.safeDecodeAsync=async(t,n)=>Ai(e,t,n),Mi(e,`ZodType`,{check(...e){let t=this.def;return this.clone(j(t,{checks:[...t.checks??[],...e.map(e=>typeof e==`function`?{_zod:{check:e,def:{check:`custom`},onattach:[]}}:e)]}),{parent:!0})},with(...e){return this.check(...e)},clone(e,t){return le(this,e,t)},brand(){return this},register(e,t){return e.add(this,t),this},refine(e,t){return this.check(La(e,t))},superRefine(e,t){return this.check(Ra(e,t))},overwrite(e){return this.check(Or(e))},optional(){return ya(this)},exactOptional(){return xa(this)},nullable(){return Ca(this)},nullish(){return ya(Ca(this))},nonoptional(e){return ka(this,e)},array(){return aa(this)},or(e){return la([this,e])},and(e){return da(this,e)},transform(e){return Na(this,_a(e))},default(e){return Ta(this,e)},prefault(e){return Da(this,e)},catch(e){return ja(this,e)},pipe(e){return Na(this,e)},readonly(){return Fa(this)},describe(e){let t=this.clone();return Un.add(t,{description:e}),t},meta(...e){if(e.length===0)return Un.get(this);let t=this.clone();return Un.add(t,e[0]),t},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(e){return e(this)}}),Object.defineProperty(e,"description",{get(){return Un.get(e)?.description},configurable:!0}),e)),Pi=x(`_ZodString`,(e,t)=>{Nt.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Kr(e,t,n,r);let n=e._zod.bag;e.format=n.format??null,e.minLength=n.minimum??null,e.maxLength=n.maximum??null,Mi(e,`_ZodString`,{regex(...e){return this.check(Sr(...e))},includes(...e){return this.check(Tr(...e))},startsWith(...e){return this.check(Er(...e))},endsWith(...e){return this.check(Dr(...e))},min(...e){return this.check(br(...e))},max(...e){return this.check(yr(...e))},length(...e){return this.check(xr(...e))},nonempty(...e){return this.check(br(1,...e))},lowercase(e){return this.check(Cr(e))},uppercase(e){return this.check(wr(e))},trim(){return this.check(Ar())},normalize(...e){return this.check(kr(...e))},toLowerCase(){return this.check(jr())},toUpperCase(){return this.check(Mr())},slugify(){return this.check(Nr())}})}),R=x(`ZodString`,(e,t)=>{Nt.init(e,t),Pi.init(e,t),e.email=t=>e.check(Gn(Fi,t)),e.url=t=>e.check(Zn(Ri,t)),e.jwt=t=>e.check(fr($i,t)),e.emoji=t=>e.check(Qn(zi,t)),e.guid=t=>e.check(Kn(Ii,t)),e.uuid=t=>e.check(qn(Li,t)),e.uuidv4=t=>e.check(Jn(Li,t)),e.uuidv6=t=>e.check(Yn(Li,t)),e.uuidv7=t=>e.check(Xn(Li,t)),e.nanoid=t=>e.check($n(Bi,t)),e.guid=t=>e.check(Kn(Ii,t)),e.cuid=t=>e.check(er(Vi,t)),e.cuid2=t=>e.check(tr(Hi,t)),e.ulid=t=>e.check(nr(Ui,t)),e.base64=t=>e.check(lr(Xi,t)),e.base64url=t=>e.check(ur(Zi,t)),e.xid=t=>e.check(rr(Wi,t)),e.ksuid=t=>e.check(ir(Gi,t)),e.ipv4=t=>e.check(ar(Ki,t)),e.ipv6=t=>e.check(or(qi,t)),e.cidrv4=t=>e.check(sr(Ji,t)),e.cidrv6=t=>e.check(cr(Yi,t)),e.e164=t=>e.check(dr(Qi,t)),e.datetime=t=>e.check(di(t)),e.date=t=>e.check(pi(t)),e.time=t=>e.check(hi(t)),e.duration=t=>e.check(_i(t))});function z(e){return Wn(R,e)}var B=x(`ZodStringFormat`,(e,t)=>{L.init(e,t),Pi.init(e,t)}),Fi=x(`ZodEmail`,(e,t)=>{It.init(e,t),B.init(e,t)}),Ii=x(`ZodGUID`,(e,t)=>{Pt.init(e,t),B.init(e,t)}),Li=x(`ZodUUID`,(e,t)=>{Ft.init(e,t),B.init(e,t)}),Ri=x(`ZodURL`,(e,t)=>{Lt.init(e,t),B.init(e,t)}),zi=x(`ZodEmoji`,(e,t)=>{Rt.init(e,t),B.init(e,t)}),Bi=x(`ZodNanoID`,(e,t)=>{zt.init(e,t),B.init(e,t)}),Vi=x(`ZodCUID`,(e,t)=>{Bt.init(e,t),B.init(e,t)}),Hi=x(`ZodCUID2`,(e,t)=>{Vt.init(e,t),B.init(e,t)}),Ui=x(`ZodULID`,(e,t)=>{Ht.init(e,t),B.init(e,t)}),Wi=x(`ZodXID`,(e,t)=>{Ut.init(e,t),B.init(e,t)}),Gi=x(`ZodKSUID`,(e,t)=>{Wt.init(e,t),B.init(e,t)}),Ki=x(`ZodIPv4`,(e,t)=>{Yt.init(e,t),B.init(e,t)}),qi=x(`ZodIPv6`,(e,t)=>{Xt.init(e,t),B.init(e,t)}),Ji=x(`ZodCIDRv4`,(e,t)=>{Zt.init(e,t),B.init(e,t)}),Yi=x(`ZodCIDRv6`,(e,t)=>{Qt.init(e,t),B.init(e,t)}),Xi=x(`ZodBase64`,(e,t)=>{en.init(e,t),B.init(e,t)}),Zi=x(`ZodBase64URL`,(e,t)=>{nn.init(e,t),B.init(e,t)}),Qi=x(`ZodE164`,(e,t)=>{rn.init(e,t),B.init(e,t)}),$i=x(`ZodJWT`,(e,t)=>{on.init(e,t),B.init(e,t)}),ea=x(`ZodUnknown`,(e,t)=>{sn.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(e,t,n)=>void 0});function ta(){return _r(ea)}var na=x(`ZodNever`,(e,t)=>{cn.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>qr(e,t,n,r)});function ra(e){return vr(na,e)}var ia=x(`ZodArray`,(e,t)=>{un.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Zr(e,t,n,r),e.element=t.element,Mi(e,`ZodArray`,{min(e,t){return this.check(br(e,t))},nonempty(e){return this.check(br(1,e))},max(e,t){return this.check(yr(e,t))},length(e,t){return this.check(xr(e,t))},unwrap(){return this.element}})});function aa(e,t){return Pr(ia,e,t)}var oa=x(`ZodObject`,(e,t)=>{hn.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Qr(e,t,n,r),k(e,`shape`,()=>t.shape),Mi(e,`ZodObject`,{keyof(){return ha(Object.keys(this._zod.def.shape))},catchall(e){return this.clone({...this._zod.def,catchall:e})},passthrough(){return this.clone({...this._zod.def,catchall:ta()})},loose(){return this.clone({...this._zod.def,catchall:ta()})},strict(){return this.clone({...this._zod.def,catchall:ra()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(e){return pe(this,e)},safeExtend(e){return me(this,e)},merge(e){return he(this,e)},pick(e){return de(this,e)},omit(e){return fe(this,e)},partial(...e){return ge(va,this,e[0])},required(...e){return _e(Oa,this,e[0])}})});function sa(e,t){return new oa({type:`object`,shape:e??{},...F(t)})}var ca=x(`ZodUnion`,(e,t)=>{_n.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>$r(e,t,n,r),e.options=t.options});function la(e,t){return new ca({type:`union`,options:e,...F(t)})}var ua=x(`ZodIntersection`,(e,t)=>{vn.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ei(e,t,n,r)});function da(e,t){return new ua({type:`intersection`,left:e,right:t})}var fa=x(`ZodRecord`,(e,t)=>{xn.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ti(e,t,n,r),e.keyType=t.keyType,e.valueType=t.valueType});function pa(e,t,n){return!t||!t._zod?new fa({type:`record`,keyType:z(),valueType:e,...F(t)}):new fa({type:`record`,keyType:e,valueType:t,...F(n)})}var ma=x(`ZodEnum`,(e,t)=>{Sn.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Jr(e,t,n,r),e.enum=t.entries,e.options=Object.values(t.entries);let n=new Set(Object.keys(t.entries));e.extract=(e,r)=>{let i={};for(let r of e)if(n.has(r))i[r]=t.entries[r];else throw Error(`Key ${r} not found in enum`);return new ma({...t,checks:[],...F(r),entries:i})},e.exclude=(e,r)=>{let i={...t.entries};for(let t of e)if(n.has(t))delete i[t];else throw Error(`Key ${t} not found in enum`);return new ma({...t,checks:[],...F(r),entries:i})}});function ha(e,t){return new ma({type:`enum`,entries:Array.isArray(e)?Object.fromEntries(e.map(e=>[e,e])):e,...F(t)})}var ga=x(`ZodTransform`,(e,t)=>{Cn.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Xr(e,t,n,r),e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new C(e.constructor.name);n.addIssue=r=>{if(typeof r==`string`)n.issues.push(we(r,n.value,t));else{let t=r;t.fatal&&(t.continue=!1),t.code??=`custom`,t.input??=n.value,t.inst??=e,n.issues.push(we(t))}};let i=t.transform(n.value,n);return i instanceof Promise?i.then(e=>(n.value=e,n.fallback=!0,n)):(n.value=i,n.fallback=!0,n)}});function _a(e){return new ga({type:`transform`,transform:e})}var va=x(`ZodOptional`,(e,t)=>{Tn.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>li(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function ya(e){return new va({type:`optional`,innerType:e})}var ba=x(`ZodExactOptional`,(e,t)=>{En.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>li(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function xa(e){return new ba({type:`optional`,innerType:e})}var Sa=x(`ZodNullable`,(e,t)=>{Dn.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ni(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Ca(e){return new Sa({type:`nullable`,innerType:e})}var wa=x(`ZodDefault`,(e,t)=>{On.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ii(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function Ta(e,t){return new wa({type:`default`,innerType:e,get defaultValue(){return typeof t==`function`?t():se(t)}})}var Ea=x(`ZodPrefault`,(e,t)=>{An.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ai(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Da(e,t){return new Ea({type:`prefault`,innerType:e,get defaultValue(){return typeof t==`function`?t():se(t)}})}var Oa=x(`ZodNonOptional`,(e,t)=>{jn.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ri(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function ka(e,t){return new Oa({type:`nonoptional`,innerType:e,...F(t)})}var Aa=x(`ZodCatch`,(e,t)=>{Nn.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>oi(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function ja(e,t){return new Aa({type:`catch`,innerType:e,catchValue:typeof t==`function`?t:()=>t})}var Ma=x(`ZodPipe`,(e,t)=>{Pn.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>si(e,t,n,r),e.in=t.in,e.out=t.out});function Na(e,t){return new Ma({type:`pipe`,in:e,out:t})}var Pa=x(`ZodReadonly`,(e,t)=>{In.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ci(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Fa(e){return new Pa({type:`readonly`,innerType:e})}var Ia=x(`ZodCustom`,(e,t)=>{Rn.init(e,t),Ni.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Yr(e,t,n,r)});function La(e,t={}){return Fr(Ia,e,t)}function Ra(e,t){return Ir(e,t)}var za=sa({id:z().optional(),type:z()}).passthrough(),Ba=sa({nodes:pa(z(),ta()),rootNodeIds:aa(z()).optional(),installedPlugins:aa(ta()).optional()}).passthrough();function Va(e){let t=[],n=Ba.safeParse(e);if(!n.success)return{nodes:{},raw:e,diagnostics:[{severity:`error`,code:`missing_nodes`,message:`顶层缺少有效的 nodes 对象`,sourcePath:`nodes`}]};let r={};for(let[e,i]of Object.entries(n.data.nodes)){let n=za.safeParse(i);if(!n.success){t.push({severity:`error`,code:`invalid_node`,message:`节点不是可识别对象`,nodeId:e,sourcePath:`nodes.${e}`});continue}r[e]={...n.data,id:e}}return{nodes:r,raw:e,diagnostics:t}}var Ha=(e,t=[0,0,0])=>Array.isArray(e)&&e.length>=3&&e.every(Number.isFinite)?[e[0],e[1],e[2]]:t,Ua=e=>Array.isArray(e)&&e.length>=2&&e.every(Number.isFinite)?[e[0],e[1]]:[0,0];function Wa(e,t,n){let r=Math.cos(n),i=Math.sin(n);return{x:e*r+t*i,z:-e*i+t*r}}function Ga(e,t){let n=[],r=new Set,i=e;for(;i;){if(r.has(i))return{sourceNodeIds:n,error:`parent_cycle`};r.add(i),n.push(i);let e=t[i];if(!e)return{sourceNodeIds:n,error:`missing_parent`};if(e.type===`level`)return{levelId:e.id,sourceNodeIds:n};i=e.parentId}return{sourceNodeIds:n,error:`missing_parent`}}function Ka(e){let t=e.asset?.dimensions;return Array.isArray(t)&&t.length>=3&&t.every(e=>Number.isFinite(e)&&e>0)?[t[0],t[1],t[2]]:null}function qa(e){let t=e.scale??[1,1,1];return Array.isArray(t)&&t.length>=3&&t.every(e=>Number.isFinite(e)&&e>0)?[t[0],t[1],t[2]]:null}function Ja(e){let t=Ka(e),n=qa(e);return t&&n?{width:t[0]*n[0],height:t[1]*n[1],depth:t[2]*n[2]}:null}function Ya(e){return(e*180/Math.PI%360+360)%360}function Xa(e,t){let n=Ga(e,t),r=new Set,i=(e,t)=>({x:0,z:0,rotationY:0,sourceNodeIds:t,status:`error`,error:e});function a(e){if(r.has(e))return i(`parent_cycle`,[e]);r.add(e);let o=t[e];if(!o)return i(`missing_parent`,[e]);let s=Ha(o.position),c=Ha(o.rotation)[1];if(!o.parentId)return o.type===`level`?{x:0,z:0,rotationY:0,ancestorLevelId:o.id,sourceNodeIds:[e],status:`ok`}:i(`missing_parent`,[e]);let l=t[o.parentId];if(!l)return i(`missing_parent`,[e,o.parentId]);if(l.type===`wall`){let t=Ua(l.start),r=Ua(l.end),i=-Math.atan2(r[1]-t[1],r[0]-t[0]),a=o.asset?.attachTo===`wall-side`,u=Number.isFinite(l.thickness)&&l.thickness>0?l.thickness:.1,d=a?u/2*(o.side===`front`?1:-1):s[2],f=Wa(s[0],d,i),p=i+c,m=t[0]+f.x,h=t[1]+f.z;if(a){let e=Ja(o);if(e){let t=Wa(0,e.depth/2,p);m+=t.x,h+=t.z}}return{x:m,z:h,rotationY:p,ancestorLevelId:n.levelId,sourceNodeIds:[e,l.id],status:`ok`}}if(![`level`,`slab`,`ceiling`,`item`,`shelf`].includes(l.type))return i(`unsupported_parent_transform`,[e,l.id]);if(l.type===`level`||l.type===`slab`||l.type===`ceiling`)return{x:s[0],z:s[2],rotationY:c,ancestorLevelId:n.levelId,sourceNodeIds:[e,l.id],status:`ok`};let u=a(l.id);if(u.status===`error`)return{...u,sourceNodeIds:[e,...u.sourceNodeIds]};let d=Wa(s[0],s[2],u.rotationY);return{x:u.x+d.x,z:u.z+d.z,rotationY:u.rotationY+c,ancestorLevelId:n.levelId,sourceNodeIds:[e,...u.sourceNodeIds],status:`ok`}}let o=a(e);return o.status===`ok`?{...o,ancestorLevelId:n.levelId}:o}function Za(e,t){return{x:e,y:t}}function Qa(e){let t=Math.cos(e.rotationY),n=Math.sin(e.rotationY),r=Za(e.x,e.z);return{a:t,b:-n,c:n,d:t,e:r.x,f:r.y}}function $a(e){return`matrix(${e.a} ${e.b} ${e.c} ${e.d} ${e.e} ${e.f})`}function eo(e,t){let n=t[e.wallId||e.parentId||``];if(!n||n.type!==`wall`)return null;let r=Ua(n.start),i=Ua(n.end),a=i[0]-r[0],o=i[1]-r[1],s=Math.hypot(a,o);if(!Number.isFinite(s)||s===0)return null;let c=Array.isArray(e.position)&&Number.isFinite(e.position[0])?e.position[0]:0;return{x:r[0]+a/s*c,z:r[1]+o/s*c,rotationY:Math.atan2(o,a),ancestorLevelId:Ga(e.id,t).levelId,sourceNodeIds:[e.id,n.id]}}function to(e,t=1){if(!e.length)return{minX:-5,minZ:-5,width:10,height:10};let n=e.map(e=>e.x),r=e.map(e=>e.z),i=Math.min(...n)-t,a=Math.max(...n)+t,o=Math.min(...r)-t,s=Math.max(...r)+t;return{minX:i,minZ:o,width:Math.max(a-i,1),height:Math.max(s-o,1)}}function no(e,t,n){return{minX:t.x-(t.x-e.minX)*n,minZ:t.z-(t.z-e.minZ)*n,width:e.width*n,height:e.height*n}}function ro(e,t,n){let r=n*Math.PI/180,i=Math.cos(r),a=Math.sin(r);return{x:-(e*i+t*a),z:-(-e*a+t*i)}}function io(e){let t=[],n=new Set([`site`,`building`,`level`,`zone`,`wall`,`door`,`window`,`item`,`slab`,`ceiling`,`shelf`,`stair`,`stair-segment`]);for(let r of Object.values(e)){if(n.has(r.type)||t.push({severity:`info`,code:`unsupported_node_type`,message:`暂未渲染的节点类型：${r.type}`,nodeId:r.id,sourcePath:`nodes.${r.id}.type`}),r.type!==`item`)continue;Ka(r)||t.push({severity:`error`,code:`invalid_item_dimensions`,message:`asset.dimensions 必须是三个大于 0 的有限数值；未生成虚假尺寸`,nodeId:r.id,sourcePath:`nodes.${r.id}.asset.dimensions`});let e=r.scale;Array.isArray(e)&&!e.every(e=>Number.isFinite(e)&&e>0)&&t.push({severity:`error`,code:`invalid_item_scale`,message:`item.scale 包含无效数值`,nodeId:r.id,sourcePath:`nodes.${r.id}.scale`}),Array.isArray(e)&&e.length>=3&&!(e[0]===e[1]&&e[1]===e[2])&&t.push({severity:`warning`,code:`non_uniform_item_scale`,message:`非等比例 item.scale，图片会被非等比例拉伸`,nodeId:r.id,sourcePath:`nodes.${r.id}.scale`}),r.asset?.floorPlanUrl||t.push({severity:`info`,code:`missing_floor_plan_image`,message:`缺少 floorPlanUrl，将显示物理占地框`,nodeId:r.id,sourcePath:`nodes.${r.id}.asset.floorPlanUrl`}),r.asset?.rotation?.some(e=>e!==0)&&t.push({severity:`warning`,code:`asset_corrective_rotation_present`,message:`GLB 校正旋转不参与 floorPlanUrl 二维实例旋转`,nodeId:r.id,sourcePath:`nodes.${r.id}.asset.rotation`})}return t}var ao=.1;function oo(e){return e.thickness===void 0?{rawThickness:null,resolvedPhysicalThickness:ao,thicknessSource:`pascal-default`}:{rawThickness:e.thickness,resolvedPhysicalThickness:e.thickness,thicknessSource:`explicit`}}var so=1e-6,co=e=>({x:e.start[0],y:e.start[1]}),lo=e=>({x:e.end[0],y:e.end[1]}),uo=e=>{let t=co(e),n=lo(e),r=n.x-t.x,i=n.y-t.y,a=Math.hypot(r,i);return{start:t,end:n,length:a,tangent:a<so?{x:1,y:0}:{x:r/a,y:i/a},normal:a<so?{x:0,y:1}:{x:-i/a,y:r/a},midpoint:{x:(t.x+n.x)/2,y:(t.y+n.y)/2}}};function fo(e){let t=uo(e),n=t.length/2,r=Math.max(-n,Math.min(n,e.curveOffset??0)),i=Math.min(.03,Math.max(.005,t.length*.005));return Math.abs(r)<=i?0:r}function V(e){return Math.abs(fo(e))>so}function H(e){let t=uo(e),n=fo(e);if(Math.abs(n)<=so||t.length<so)return null;let r=t.length*t.length/(8*Math.abs(n))+Math.abs(n)/2,i=Math.sign(n)||1,a=r-Math.abs(n),o={x:t.midpoint.x+t.normal.x*a*i,y:t.midpoint.y+t.normal.y*a*i},s=Math.atan2(t.start.y-o.y,t.start.x-o.x),c=Math.atan2(t.end.y-o.y,t.end.x-o.x)-s;if(i>0)for(;c<=0;)c+=Math.PI*2;else for(;c>=0;)c-=Math.PI*2;return{center:o,radius:r,startAngle:s,delta:c,direction:i}}function po(e,t){let n=uo(e),r=Math.max(0,Math.min(1,t));if(!V(e)||n.length<so)return{point:{x:n.start.x+(n.end.x-n.start.x)*r,y:n.start.y+(n.end.y-n.start.y)*r},tangent:n.tangent,normal:n.normal};let i=H(e),a=i.startAngle+i.delta*r,o={x:i.center.x+Math.cos(a)*i.radius,y:i.center.y+Math.sin(a)*i.radius},s=i.direction>0?{x:-Math.sin(a),y:Math.cos(a)}:{x:Math.sin(a),y:-Math.cos(a)};return{point:o,tangent:s,normal:{x:-s.y,y:s.x}}}function mo(e,t=24,n){let r=(e.thickness??.1)/2,i=[],a=[];for(let n=0;n<=Math.max(1,t);n++){let o=po(e,n/Math.max(1,t));i.push({x:o.point.x+o.normal.x*r,y:o.point.y+o.normal.y*r}),a.push({x:o.point.x-o.normal.x*r,y:o.point.y-o.normal.y*r})}return i[0]=n?.startLeft??i[0],a[0]=n?.startRight??a[0],i[i.length-1]=n?.endLeft??i[i.length-1],a[a.length-1]=n?.endRight??a[a.length-1],[...a,...i.reverse()]}var ho=.001,go=(e,t=ho)=>`${Math.round(e.x/t)},${Math.round(e.y/t)}`,_o=(e,t)=>({a:-t.y,b:t.x,c:-(-t.y*e.x+t.x*e.y)}),vo=(e,t)=>{let n={x:t.start[0],y:t.start[1]},r={x:t.end[0],y:t.end[1]};if(go(e)===go(n)||go(e)===go(r))return!1;let i=r.x-n.x,a=r.y-n.y,o=i*i+a*a;if(o<1e-9)return!1;let s=(i*(e.x-n.x)+a*(e.y-n.y))/o;return s<.001||s>.999?!1:Math.hypot(e.x-(n.x+s*i),e.y-(n.y+s*a))<ho};function yo(e){let t=new Map;for(let n of e){let e=[[`start`,{x:n.start[0],y:n.start[1]}],[`end`,{x:n.end[0],y:n.end[1]}]];for(let[r,i]of e){let e=go(i),a=t.get(e)??{meetingPoint:i,connectedWalls:[]};a.connectedWalls.push({wall:n,endType:r}),t.set(e,a)}}for(let n of t.values())for(let t of e)!n.connectedWalls.some(e=>e.wall.id===t.id)&&vo(n.meetingPoint,t)&&n.connectedWalls.push({wall:t,endType:`passthrough`});let n=new Map([...t].filter(([,e])=>e.connectedWalls.length>=2)),r=new Map;for(let[e,t]of n){let n=[];for(let e of t.connectedWalls){let r=(e.wall.thickness??.1)/2,i=e.endType===`passthrough`?[{x:e.wall.end[0]-e.wall.start[0],y:e.wall.end[1]-e.wall.start[1]},{x:e.wall.start[0]-e.wall.end[0],y:e.wall.start[1]-e.wall.end[1]}]:[bo(e.wall,e.endType)];for(let a of i){let i=Math.hypot(a.x,a.y);if(i<1e-9)continue;let o={x:-a.y/i,y:a.x/i};n.push({wallId:e.wall.id,angle:Math.atan2(a.y,a.x),edgeA:_o({x:t.meetingPoint.x+o.x*r,y:t.meetingPoint.y+o.y*r},a),edgeB:_o({x:t.meetingPoint.x-o.x*r,y:t.meetingPoint.y-o.y*r},a),isPassthrough:e.endType===`passthrough`,half:r})}}n.sort((e,t)=>e.angle-t.angle);let i=new Map;for(let e=0;e<n.length;e+=1){let r=n[e],a=n[(e+1)%n.length];if(!r||!a)continue;let o=r.edgeA.a*a.edgeB.b-a.edgeB.a*r.edgeA.b;if(Math.abs(o)<1e-9)continue;let s={x:(r.edgeA.b*a.edgeB.c-a.edgeB.b*r.edgeA.c)/o,y:(a.edgeB.a*r.edgeA.c-r.edgeA.a*a.edgeB.c)/o},c=10*Math.max(r.half,a.half);!Number.isFinite(s.x)||!Number.isFinite(s.y)||Math.hypot(s.x-t.meetingPoint.x,s.y-t.meetingPoint.y)>c||(r.isPassthrough||i.set(r.wallId,{...i.get(r.wallId)??{},left:s}),a.isPassthrough||i.set(a.wallId,{...i.get(a.wallId)??{},right:s}))}r.set(e,i)}return{junctionData:r,junctions:n}}function bo(e,t){if(V(e)){let n=po(e,t===`start`?0:1);return t===`start`?n.tangent:{x:-n.tangent.x,y:-n.tangent.y}}return t===`start`?{x:e.end[0]-e.start[0],y:e.end[1]-e.start[1]}:{x:e.start[0]-e.end[0],y:e.start[1]-e.end[1]}}function xo(e,t){let n=(e.thickness??.1)/2,r=t=>{let n=t===`start`?{x:e.start[0],y:e.start[1]}:{x:e.end[0],y:e.end[1]};if(V(e)){let n=po(e,t===`start`?0:1);return{point:n.point,normal:n.normal}}let r=bo(e,t),i=Math.hypot(r.x,r.y)||1;return{point:n,normal:{x:-r.y/i,y:r.x/i}}},i=r(`start`),a=r(`end`),o=t.junctionData.get(go(i.point))?.get(e.id),s=t.junctionData.get(go(a.point))?.get(e.id);return{startLeft:o?.left??{x:i.point.x+i.normal.x*n,y:i.point.y+i.normal.y*n},startRight:o?.right??{x:i.point.x-i.normal.x*n,y:i.point.y-i.normal.y*n},endLeft:s?.right??{x:a.point.x+a.normal.x*n,y:a.point.y+a.normal.y*n},endRight:s?.left??{x:a.point.x-a.normal.x*n,y:a.point.y-a.normal.y*n}}}function So(e,t){let n={x:e.start[0],y:e.start[1]},r={x:e.end[0],y:e.end[1]},i=r.x-n.x,a=r.y-n.y,o=Math.hypot(i,a);if(o<1e-9)return[];if(V(e))return mo(e,24,xo(e,t));let s=oo(e).resolvedPhysicalThickness/2,c={x:-a/o,y:i/o},l=t.junctionData.get(go(n))?.get(e.id),u=t.junctionData.get(go(r))?.get(e.id),d=l?.left??{x:n.x+c.x*s,y:n.y+c.y*s},f=l?.right??{x:n.x-c.x*s,y:n.y-c.y*s},p=u?.right??{x:r.x+c.x*s,y:r.y+c.y*s},m=[f,u?.left??{x:r.x-c.x*s,y:r.y-c.y*s}];return u&&m.push(r),m.push(p,d),l&&m.push(n),m}var Co=e=>e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n.x*i.y-n.y*i.x},0)/2,wo=(e,t,n,r)=>{let i=(e,t)=>e.x*t.y-e.y*t.x,a={x:t.x-e.x,y:t.y-e.y},o={x:r.x-n.x,y:r.y-n.y},s=i(a,o);if(Math.abs(s)<1e-9)return!1;let c={x:n.x-e.x,y:n.y-e.y},l=i(c,o)/s,u=i(c,a)/s;return l>1e-8&&l<.99999999&&u>1e-8&&u<.99999999};function To(e,t){let n=[];if(!t.length)return n.push(`wall_zero_length`),{valid:!1,codes:n,area:0,maxVertexDistance:0};t.length<3&&n.push(`wall_invalid_footprint`),t.some(e=>!Number.isFinite(e.x)||!Number.isFinite(e.y))&&n.push(`wall_non_finite_geometry`);for(let e=0;e<t.length;e++)for(let r=e+1;r<t.length;r++)Math.abs(e-r)>1&&!(e===0&&r===t.length-1)&&wo(t[e],t[(e+1)%t.length],t[r],t[(r+1)%t.length])&&n.push(`wall_self_intersection`);let r=Co(t);Math.abs(r)<1e-10&&n.push(`wall_invalid_footprint`);let i=Array.from({length:25},(t,n)=>po(e,n/24).point),a=Math.max(...t.map(e=>Math.min(...i.map(t=>Math.hypot(e.x-t.x,e.y-t.y)))),0);return a>Math.max(oo(e).resolvedPhysicalThickness*12,1)&&n.push(`wall_miter_outlier`),V(e)&&i.every(t=>Math.abs((t.y-e.start[1])*(e.end[0]-e.start[0])-(t.x-e.start[0])*(e.end[1]-e.start[1]))<1e-5)&&n.push(`wall_curve_invalid`),{valid:n.length===0,codes:[...new Set(n)],area:r,maxVertexDistance:a}}function Eo(e){let t=yo(e);return e.map(e=>{let n=So(e,t);return{wallId:e.id,footprint:n,validation:To(e,n),thickness:oo(e)}})}var Do={width:1.2,depth:.3,thickness:.04,height:.9,rows:1,columns:1,style:`wall-shelf`,withBack:!1,withSides:!0,withBottom:!1,bracketStyle:`minimal`},Oo=new Set([`wall-shelf`,`bookshelf`,`open-rack`,`cubby`]),ko=new Set([`minimal`,`industrial`,`hidden`]),Ao=(e,t,n,r,i=!1)=>{let a=e[t];return typeof a==`number`&&Number.isFinite(a)&&a>=n&&a<=r&&(!i||Number.isInteger(a))?a:Do[t]};function U(e){let t=[],n=Ao(e,`width`,.3,3),r=Ao(e,`depth`,.1,1),i=Ao(e,`thickness`,.01,.1),a=Ao(e,`height`,.05,2.5),o=Ao(e,`rows`,1,8,!0),s=Ao(e,`columns`,1,6,!0);for(let[c,l]of Object.entries({width:n,depth:r,thickness:i,height:a,rows:o,columns:s}))c in e||t.push(c);let c=Oo.has(e.style)?e.style:Do.style;`style`in e||t.push(`style`);let l=ko.has(e.bracketStyle)?e.bracketStyle:Do.bracketStyle;`bracketStyle`in e||t.push(`bracketStyle`);let u=n=>(n in e||t.push(n),typeof e[n]==`boolean`?e[n]:Do[n]);return{width:n,depth:r,thickness:i,height:a,rows:o,columns:s,style:c,bracketStyle:l,withBack:u(`withBack`),withSides:u(`withSides`),withBottom:u(`withBottom`),defaultFields:t}}function jo(e){return Number.isFinite(e.width??Do.width)&&Number.isFinite(e.depth??Do.depth)&&(e.width===void 0||e.width>=.3&&e.width<=3)&&(e.depth===void 0||e.depth>=.1&&e.depth<=1)}function Mo(e,t){let n=Ga(e,t),r=new Set,i=(e,t)=>({x:0,z:0,rotationY:0,sourceNodeIds:t,status:`error`,error:e}),a=e=>{if(r.has(e))return i(`parent_cycle`,[e]);r.add(e);let o=t[e];if(!o)return i(`missing_parent`,[e]);let s=Array.isArray(o.position)?o.position:[0,0,0],c=Array.isArray(o.rotation)?o.rotation[1]??0:0,l=t[o.parentId??``];if(!o.parentId||!l)return i(`missing_parent`,[e,o.parentId??``]);if([`level`,`slab`,`ceiling`].includes(l.type))return{x:s[0],z:s[2],rotationY:c,ancestorLevelId:n.levelId,sourceNodeIds:[e,l.id],status:`ok`};if(l.type===`item`){let r=Xa(l.id,t);if(r.status===`error`)return r;let i=Wa(s[0],s[2],r.rotationY);return{x:r.x+i.x,z:r.z+i.z,rotationY:r.rotationY+c,ancestorLevelId:n.levelId,sourceNodeIds:[e,...r.sourceNodeIds],status:`ok`}}if(l.type===`shelf`){let t=a(l.id);if(t.status===`error`)return t;let r=Wa(s[0],s[2],t.rotationY);return{x:t.x+r.x,z:t.z+r.z,rotationY:t.rotationY+c,ancestorLevelId:n.levelId,sourceNodeIds:[e,...t.sourceNodeIds],status:`ok`}}return i(`unsupported_parent_transform`,[e,l.id])},o=a(e);return o.status===`ok`?{...o,ancestorLevelId:n.levelId}:o}function No(e,t){let n=Mo(e.id,t);return n.status===`ok`?Qa(n):null}function Po(e,t){let n=U(e),r=No(e,t);return!r||!jo(e)?[]:[[-n.width/2,-n.depth/2],[n.width/2,-n.depth/2],[n.width/2,n.depth/2],[-n.width/2,n.depth/2]].map(([e,t])=>({x:r.a*e+r.c*t+r.e,z:r.b*e+r.d*t+r.f}))}function Fo(e){return(e.style===`bookshelf`||e.style===`cubby`)&&e.columns>1?Array.from({length:e.columns-1},(t,n)=>-((e.width-2*e.thickness)/2)+(n+1)*(e.width-2*e.thickness)/e.columns):[]}var Io={position:[0,0,0],rotation:0,stairType:`straight`,fromLevelId:null,toLevelId:null,width:1,totalRise:2.5,stepCount:10,thickness:.25,fillToFloor:!0,innerRadius:.9,sweepAngle:Math.PI/2,topLandingMode:`none`,topLandingDepth:.9,showCenterColumn:!0,showStepSupports:!0,railingMode:`none`,railingHeight:.92,children:[],slabOpeningMode:`none`,openingOffset:0},Lo=(e,t,n)=>({x:e.x+t*Math.cos(n),z:e.z+t*Math.sin(n)});function Ro(e){let t=Object.keys(Io).filter(t=>!(t in e));return{...Io,...e,sourceFields:t}}function zo(e){let t=Ro(e),n=Array.isArray(t.position)&&t.position.length>=3?t.position:null;if(!n||typeof t.width!=`number`||t.width<=0||typeof t.innerRadius!=`number`||t.innerRadius<=0||typeof t.sweepAngle!=`number`||!Number.isFinite(t.sweepAngle)||t.sweepAngle===0||!Number.isInteger(t.stepCount)||t.stepCount<1)return null;let r={x:n[0],z:n[2]},i=Math.abs(t.sweepAngle)>=Math.PI*2?Math.sign(t.sweepAngle)*(Math.PI*2-.001):t.sweepAngle,a=t.innerRadius+t.width,o=-t.rotation-i/2,s=o+i,c=s+(t.topLandingMode===`integrated`?Math.sign(i)*Math.min(Math.PI*.75,Math.max(.3,t.topLandingDepth)/Math.max(t.innerRadius+t.width/2,.1)):0),l=t.stepCount,u=Array.from({length:Math.max(24,Math.ceil(Math.abs(c-o)/.12))+1},(e,t)=>o+(c-o)*t/Math.max(24,Math.ceil(Math.abs(c-o)/.12))),d=[...u.map(e=>Lo(r,a,e)),...u.slice().reverse().map(e=>Lo(r,t.innerRadius,e))],f=Array.from({length:l+1},(e,n)=>{let s=o+i*n/l;return{start:Lo(r,t.innerRadius,s),end:Lo(r,a,s)}}),p=t.innerRadius+t.width/2,m=s-i/l*.8,h={from:Lo(r,p,m-i/l*.7),to:Lo(r,p,m+(Math.sign(i)>=0?Math.PI/2:-Math.PI/2)*.15)},g=e=>u.map(t=>Lo(r,e,t)),_=[...t.railingMode===`left`||t.railingMode===`both`?[g(t.innerRadius)]:[],...t.railingMode===`right`||t.railingMode===`both`?[g(a)]:[]];return{center:r,innerRadius:t.innerRadius,outerRadius:a,startAngle:o,endAngle:s,sweepAngle:i,treadLines:f,footprint:d,footprintPath:`M ${d.map(e=>`${e.x} ${e.z}`).join(` L `)} Z`,upDirection:h,centerColumn:t.showCenterColumn?r:null,supportLines:t.showStepSupports?f:[],railingPaths:_,landingGeometry:t.topLandingMode===`integrated`?[Lo(r,t.innerRadius,s),Lo(r,a,s),Lo(r,a,c),Lo(r,t.innerRadius,c)]:null,sourceFields:t.sourceFields,stepCount:l,railingMode:t.railingMode}}var Bo=e=>zo(e)?.footprint.map(e=>({x:e.x,z:e.z}))??[];function Vo(e){let t=zo(e);return t?{footprint:t.footprint,downDirection:{from:t.upDirection.to,to:t.upDirection.from}}:null}function Ho(e){if(!Array.isArray(e)||e.length<3)return null;let t=e.map(e=>{if(!Array.isArray(e))return null;let t=e[0],n=e[2]??e[1];return Number.isFinite(t)&&Number.isFinite(n)?{x:t,z:n}:null});return t.every(Boolean)?t:null}function Uo(e){return Math.abs(e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n.x*i.z-i.x*n.z},0)/2)}function Wo(e){return`M ${e.map(e=>`${e.x} ${e.z}`).join(` L `)} Z`}function Go(e){let t=Ho(e.polygon);if(!t)return null;let n=(Array.isArray(e.holes)?e.holes:[]).map(Ho).filter(e=>e!==null),r=Uo(t),i=n.reduce((e,t)=>e+Uo(t),0);return{outer:t,holes:n,path:[Wo(t),...n.map(Wo)].join(` `),outerArea:r,holeArea:i,netArea:r-i}}var Ko=e=>Number.isFinite(e)?Number(e):null,qo=(e,t)=>Ko(e)??t,Jo=(e,t,n)=>({x:e*Math.cos(n)+t*Math.sin(n),z:-e*Math.sin(n)+t*Math.cos(n)}),Yo=(e,t,n,r)=>{let i=Jo(e,t,n);return{x:r.x+i.x,z:r.z+i.z}};function Xo(e,t){let n=Array.isArray(e.children)?e.children:[];return Object.values(t).filter(t=>t.type===`stair-segment`&&t.parentId===e.id).sort((e,t)=>{let r=n.indexOf(e.id),i=n.indexOf(t.id);return(r<0?2**53-1:r)-(i<0?2**53-1:i)})}function Zo(e,t){let n=Xo(e,t).filter(e=>e.visible!==!1);if(!n.length||!Array.isArray(e.position))return null;let r={x:0,z:0},i=0,a=[];for(let t=0;t<n.length;t+=1){let o=n[t],s=Ko(o.width),c=Ko(o.length);if(!(s&&s>0&&c&&c>0))return null;if(t>0){let e=n[t-1],a=qo(e.width,0),s=qo(e.length,0),c=0,l=s,u=0;o.attachmentSide===`left`?(c=a/2,l=s/2,u=Math.PI/2):o.attachmentSide===`right`&&(c=-a/2,l=s/2,u=-Math.PI/2);let d=Jo(c,l,i);r={x:r.x+d.x,z:r.z+d.z},i+=u}let l=[[-s/2,0],[s/2,0],[s/2,c],[-s/2,c]],u={x:qo(e.position[0],0),z:qo(e.position[2],0)},d=qo(e.rotation,0),f=(e,t)=>{let n=Jo(e,t,i);return Yo(r.x+n.x,r.z+n.z,d,u)},p=l.map(([e,t])=>f(e,t)),m=Math.round(qo(o.stepCount,0)),h=o.segmentType===`stair`&&m>1?Array.from({length:m-1},(e,t)=>{let n=(t+1)/m;return{start:f(-s/2,c*n),end:f(s/2,c*n)}}):[];a.push({node:o,polygon:p,treads:h})}let o=a[a.length-1].polygon;return{segments:a,upDirection:{from:{x:(a[0].polygon[0].x+a[0].polygon[1].x)/2,z:(a[0].polygon[0].z+a[0].polygon[1].z)/2},to:{x:(o[2].x+o[3].x)/2,z:(o[2].z+o[3].z)/2}}}}function Qo(e){if(!Array.isArray(e.position))return null;let t=Ko(e.width),n=Ko(e.innerRadius),r=Ko(e.sweepAngle),i=Math.round(qo(e.stepCount,10));if(!(t&&t>0&&n!==null&&n>0&&r&&i>0))return null;let a={x:qo(e.position[0],0),z:qo(e.position[2],0)},o=qo(e.rotation,0),s=n+t,c=-o-r/2,l=c+r,u=(e,t)=>({x:a.x+Math.cos(t)*e,z:a.z+Math.sin(t)*e}),d=u(s,c),f=u(s,l),p=u(n,l),m=u(n,c),h=+(Math.abs(r)>Math.PI),g=+(r>=0),_=+!g,v=`M ${d.x} ${d.z} A ${s} ${s} 0 ${h} ${g} ${f.x} ${f.z} L ${p.x} ${p.z} A ${n} ${n} 0 ${h} ${_} ${m.x} ${m.z} Z`,y=Array.from({length:i+1},(e,t)=>{let a=c+r*t/i;return{start:u(n,a),end:u(s,a)}}),b=n+t/2,x=u(b,c+r*.2),S=u(b,c+r*.8),C=Math.max(16,Math.ceil(Math.abs(r)/(Math.PI/18))),w=[...Array.from({length:C+1},(e,t)=>u(s,c+r*t/C)),...Array.from({length:C+1},(e,t)=>u(n,l-r*t/C))];return{footprintPath:v,treadLines:y,upDirection:{from:x,to:S},corners:w}}function $o(e,t){return e.stairType===`spiral`?zo(e)?.footprint??[]:e.stairType===`curved`?Qo(e)?.corners??[]:Zo(e,t)?.segments.flatMap(e=>e.polygon)??[]}function es(e,t){return e.stairType===`spiral`?!!zo(e):e.stairType===`curved`?!!Qo(e):!!Zo(e,t)}var ts=[`#3b82f6`,`#10b981`,`#f59e0b`,`#ef4444`,`#8b5cf6`,`#06b6d4`,`#84cc16`,`#f97316`];function ns(e){return Array.isArray(e.polygon)?e.polygon.flatMap(e=>{if(!Array.isArray(e))return[];let t=e[0],n=e[2]??e[1];return Number.isFinite(t)&&Number.isFinite(n)?[{x:t,z:n}]:[]}):[]}function rs(e){return typeof e.color==`string`&&/^#[0-9a-f]{6}$/i.test(e.color)?e.color:ts[[...e.id].reduce((e,t)=>e*31+t.charCodeAt(0)>>>0,0)%ts.length]}function is(e){let t=ns(e);if(t.length<3)return null;let n=0,r=0,i=0;for(let e=0;e<t.length;e+=1){let a=t[e],o=t[(e+1)%t.length],s=a.x*o.z-o.x*a.z;n+=s,r+=(a.x+o.x)*s,i+=(a.z+o.z)*s}return Math.abs(n)>1e-9?{x:r/(3*n),z:i/(3*n)}:{x:t.reduce((e,t)=>e+t.x,0)/t.length,z:t.reduce((e,t)=>e+t.z,0)/t.length}}var as=c(o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self,n.polygonClipping=r())})(e,(function(){function e(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(o){if(r)throw TypeError(`Generator is already executing.`);for(;n;)try{if(r=1,i&&(a=o[0]&2?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[o[0]&2,a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,i=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if((a=n.trys,!(a=a.length>0&&a[a.length-1]))&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=t.call(e,n)}catch(e){o=[6,e],i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}var t=function(){function e(e,t){this.next=null,this.key=e,this.data=t,this.left=null,this.right=null}return e}();function n(e,t){return e>t?1:e<t?-1:0}function r(e,n,r){for(var i=new t(null,null),a=i,o=i;;){var s=r(e,n.key);if(s<0){if(n.left===null)break;if(r(e,n.left.key)<0){var c=n.left;if(n.left=c.right,c.right=n,n=c,n.left===null)break}o.left=n,o=n,n=n.left}else if(s>0){if(n.right===null)break;if(r(e,n.right.key)>0){var c=n.right;if(n.right=c.left,c.left=n,n=c,n.right===null)break}a.right=n,a=n,n=n.right}else break}return a.right=n.left,o.left=n.right,n.left=i.right,n.right=i.left,n}function i(e,n,i,a){var o=new t(e,n);if(i===null)return o.left=o.right=null,o;i=r(e,i,a);var s=a(e,i.key);return s<0?(o.left=i.left,o.right=i,i.left=null):s>=0&&(o.right=i.right,o.left=i,i.right=null),o}function a(e,t,n){var i=null,a=null;if(t){t=r(e,t,n);var o=n(t.key,e);o===0?(i=t.left,a=t.right):o<0?(a=t.right,t.right=null,i=t):(i=t.left,t.left=null,a=t)}return{left:i,right:a}}function o(e,t,n){return t===null?e:e===null?t:(t=r(e.key,t,n),t.left=e,t)}function s(e,t,n,r,i){if(e){r(``+t+(n?`└── `:`├── `)+i(e)+`
`);var a=t+(n?`    `:`│   `);e.left&&s(e.left,a,!1,r,i),e.right&&s(e.right,a,!0,r,i)}}var c=function(){function c(e){e===void 0&&(e=n),this._root=null,this._size=0,this._comparator=e}return c.prototype.insert=function(e,t){return this._size++,this._root=i(e,t,this._root,this._comparator)},c.prototype.add=function(e,n){var i=new t(e,n);this._root===null&&(i.left=i.right=null,this._size++,this._root=i);var a=this._comparator,o=r(e,this._root,a),s=a(e,o.key);return s===0?this._root=o:(s<0?(i.left=o.left,i.right=o,o.left=null):s>0&&(i.right=o.right,i.left=o,o.right=null),this._size++,this._root=i),this._root},c.prototype.remove=function(e){this._root=this._remove(e,this._root,this._comparator)},c.prototype._remove=function(e,t,n){var i;return t===null?null:(t=r(e,t,n),n(e,t.key)===0?(t.left===null?i=t.right:(i=r(e,t.left,n),i.right=t.right),this._size--,i):t)},c.prototype.pop=function(){var e=this._root;if(e){for(;e.left;)e=e.left;return this._root=r(e.key,this._root,this._comparator),this._root=this._remove(e.key,this._root,this._comparator),{key:e.key,data:e.data}}return null},c.prototype.findStatic=function(e){for(var t=this._root,n=this._comparator;t;){var r=n(e,t.key);if(r===0)return t;t=r<0?t.left:t.right}return null},c.prototype.find=function(e){return this._root&&(this._root=r(e,this._root,this._comparator),this._comparator(e,this._root.key)!==0)?null:this._root},c.prototype.contains=function(e){for(var t=this._root,n=this._comparator;t;){var r=n(e,t.key);if(r===0)return!0;t=r<0?t.left:t.right}return!1},c.prototype.forEach=function(e,t){for(var n=this._root,r=[],i=!1;!i;)n===null?r.length===0?i=!0:(n=r.pop(),e.call(t,n),n=n.right):(r.push(n),n=n.left);return this},c.prototype.range=function(e,t,n,r){for(var i=[],a=this._comparator,o=this._root,s;i.length!==0||o;)if(o)i.push(o),o=o.left;else{if(o=i.pop(),s=a(o.key,t),s>0)break;if(a(o.key,e)>=0&&n.call(r,o))return this;o=o.right}return this},c.prototype.keys=function(){var e=[];return this.forEach(function(t){var n=t.key;return e.push(n)}),e},c.prototype.values=function(){var e=[];return this.forEach(function(t){var n=t.data;return e.push(n)}),e},c.prototype.min=function(){return this._root?this.minNode(this._root).key:null},c.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},c.prototype.minNode=function(e){if(e===void 0&&(e=this._root),e)for(;e.left;)e=e.left;return e},c.prototype.maxNode=function(e){if(e===void 0&&(e=this._root),e)for(;e.right;)e=e.right;return e},c.prototype.at=function(e){for(var t=this._root,n=!1,r=0,i=[];!n;)if(t)i.push(t),t=t.left;else if(i.length>0){if(t=i.pop(),r===e)return t;r++,t=t.right}else n=!0;return null},c.prototype.next=function(e){var t=this._root,n=null;if(e.right){for(n=e.right;n.left;)n=n.left;return n}for(var r=this._comparator;t;){var i=r(e.key,t.key);if(i===0)break;i<0?(n=t,t=t.left):t=t.right}return n},c.prototype.prev=function(e){var t=this._root,n=null;if(e.left!==null){for(n=e.left;n.right;)n=n.right;return n}for(var r=this._comparator;t;){var i=r(e.key,t.key);if(i===0)break;i<0?t=t.left:(n=t,t=t.right)}return n},c.prototype.clear=function(){return this._root=null,this._size=0,this},c.prototype.toList=function(){return d(this._root)},c.prototype.load=function(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!1);var r=e.length,i=this._comparator;if(n&&m(e,t,0,r-1,i),this._root===null)this._root=l(e,t,0,r),this._size=r;else{var a=p(this.toList(),u(e,t),i);r=this._size+r,this._root=f({head:a},0,r)}return this},c.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(c.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),c.prototype.toString=function(e){e===void 0&&(e=function(e){return String(e.key)});var t=[];return s(this._root,``,!0,function(e){return t.push(e)},e),t.join(``)},c.prototype.update=function(e,t,n){var r=this._comparator,s=a(e,this._root,r),c=s.left,l=s.right;r(e,t)<0?l=i(t,n,l,r):c=i(t,n,c,r),this._root=o(c,l,r)},c.prototype.split=function(e){return a(e,this._root,this._comparator)},c.prototype[Symbol.iterator]=function(){var t,n,r;return e(this,function(e){switch(e.label){case 0:t=this._root,n=[],r=!1,e.label=1;case 1:return r?[3,6]:t===null?[3,2]:(n.push(t),t=t.left,[3,5]);case 2:return n.length===0?[3,4]:(t=n.pop(),[4,t]);case 3:return e.sent(),t=t.right,[3,5];case 4:r=!0,e.label=5;case 5:return[3,1];case 6:return[2]}})},c}();function l(e,n,r,i){var a=i-r;if(a>0){var o=r+Math.floor(a/2),s=e[o],c=n[o],u=new t(s,c);return u.left=l(e,n,r,o),u.right=l(e,n,o+1,i),u}return null}function u(e,n){for(var r=new t(null,null),i=r,a=0;a<e.length;a++)i=i.next=new t(e[a],n[a]);return i.next=null,r.next}function d(e){for(var n=e,r=[],i=!1,a=new t(null,null),o=a;!i;)n?(r.push(n),n=n.left):r.length>0?(n=o=o.next=r.pop(),n=n.right):i=!0;return o.next=null,a.next}function f(e,t,n){var r=n-t;if(r>0){var i=t+Math.floor(r/2),a=f(e,t,i),o=e.head;return o.left=a,e.head=e.head.next,o.right=f(e,i+1,n),o}return null}function p(e,n,r){for(var i=new t(null,null),a=i,o=e,s=n;o!==null&&s!==null;)r(o.key,s.key)<0?(a.next=o,o=o.next):(a.next=s,s=s.next),a=a.next;return o===null?s!==null&&(a.next=s):a.next=o,i.next}function m(e,t,n,r,i){if(!(n>=r)){for(var a=e[n+r>>1],o=n-1,s=r+1;;){do o++;while(i(e[o],a)<0);do s--;while(i(e[s],a)>0);if(o>=s)break;var c=e[o];e[o]=e[s],e[s]=c,c=t[o],t[o]=t[s],t[s]=c}m(e,t,n,s,i),m(e,t,s+1,r,i)}}let h=(e,t)=>e.ll.x<=t.x&&t.x<=e.ur.x&&e.ll.y<=t.y&&t.y<=e.ur.y,g=(e,t)=>{if(t.ur.x<e.ll.x||e.ur.x<t.ll.x||t.ur.y<e.ll.y||e.ur.y<t.ll.y)return null;let n=e.ll.x<t.ll.x?t.ll.x:e.ll.x,r=e.ur.x<t.ur.x?e.ur.x:t.ur.x,i=e.ll.y<t.ll.y?t.ll.y:e.ll.y,a=e.ur.y<t.ur.y?e.ur.y:t.ur.y;return{ll:{x:n,y:i},ur:{x:r,y:a}}},_=2**-52;_===void 0&&(_=2**-52);let v=_*_,y=(e,t)=>{if(-_<e&&e<_&&-_<t&&t<_)return 0;let n=e-t;return n*n<v*e*t?0:e<t?-1:1};class b{constructor(){this.reset()}reset(){this.xRounder=new x,this.yRounder=new x}round(e,t){return{x:this.xRounder.round(e),y:this.yRounder.round(t)}}}class x{constructor(){this.tree=new c,this.round(0)}round(e){let t=this.tree.add(e),n=this.tree.prev(t);if(n!==null&&y(t.key,n.key)===0)return this.tree.remove(e),n.key;let r=this.tree.next(t);return r!==null&&y(t.key,r.key)===0?(this.tree.remove(e),r.key):e}}let S=new b,C=134217729;function w(e,t,n,r,i){let a,o,s,c,l=t[0],u=r[0],d=0,f=0;u>l==u>-l?(a=l,l=t[++d]):(a=u,u=r[++f]);let p=0;if(d<e&&f<n)for(u>l==u>-l?(o=l+a,s=a-(o-l),l=t[++d]):(o=u+a,s=a-(o-u),u=r[++f]),a=o,s!==0&&(i[p++]=s);d<e&&f<n;)u>l==u>-l?(o=a+l,c=o-a,s=a-(o-c)+(l-c),l=t[++d]):(o=a+u,c=o-a,s=a-(o-c)+(u-c),u=r[++f]),a=o,s!==0&&(i[p++]=s);for(;d<e;)o=a+l,c=o-a,s=a-(o-c)+(l-c),l=t[++d],a=o,s!==0&&(i[p++]=s);for(;f<n;)o=a+u,c=o-a,s=a-(o-c)+(u-c),u=r[++f],a=o,s!==0&&(i[p++]=s);return(a!==0||p===0)&&(i[p++]=a),p}function ee(e,t){let n=t[0];for(let r=1;r<e;r++)n+=t[r];return n}function T(e){return new Float64Array(e)}let E=T(4),D=T(8),te=T(12),ne=T(16),O=T(4);function k(e,t,n,r,i,a,o){let s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,T,k,A=e-i,j=n-i,re=t-a,M=r-a;b=A*M,f=C*A,p=f-(f-A),m=A-p,f=C*M,h=f-(f-M),g=M-h,x=m*g-(b-p*h-m*h-p*g),S=re*j,f=C*re,p=f-(f-re),m=re-p,f=C*j,h=f-(f-j),g=j-h,T=m*g-(S-p*h-m*h-p*g),_=x-T,d=x-_,E[0]=x-(_+d)+(d-T),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,E[1]=y-(_+d)+(d-S),k=v+_,d=k-v,E[2]=v-(k-d)+(_-d),E[3]=k;let N=ee(4,E),ie=22204460492503146e-32*o;if(N>=ie||-N>=ie||(d=e-A,s=e-(A+d)+(d-i),d=n-j,l=n-(j+d)+(d-i),d=t-re,c=t-(re+d)+(d-a),d=r-M,u=r-(M+d)+(d-a),s===0&&c===0&&l===0&&u===0)||(ie=11093356479670487e-47*o+33306690738754706e-32*Math.abs(N),N+=A*u+M*s-(re*l+j*c),N>=ie||-N>=ie))return N;b=s*M,f=C*s,p=f-(f-s),m=s-p,f=C*M,h=f-(f-M),g=M-h,x=m*g-(b-p*h-m*h-p*g),S=c*j,f=C*c,p=f-(f-c),m=c-p,f=C*j,h=f-(f-j),g=j-h,T=m*g-(S-p*h-m*h-p*g),_=x-T,d=x-_,O[0]=x-(_+d)+(d-T),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,O[1]=y-(_+d)+(d-S),k=v+_,d=k-v,O[2]=v-(k-d)+(_-d),O[3]=k;let ae=w(4,E,4,O,D);b=A*u,f=C*A,p=f-(f-A),m=A-p,f=C*u,h=f-(f-u),g=u-h,x=m*g-(b-p*h-m*h-p*g),S=re*l,f=C*re,p=f-(f-re),m=re-p,f=C*l,h=f-(f-l),g=l-h,T=m*g-(S-p*h-m*h-p*g),_=x-T,d=x-_,O[0]=x-(_+d)+(d-T),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,O[1]=y-(_+d)+(d-S),k=v+_,d=k-v,O[2]=v-(k-d)+(_-d),O[3]=k;let oe=w(ae,D,4,O,te);b=s*u,f=C*s,p=f-(f-s),m=s-p,f=C*u,h=f-(f-u),g=u-h,x=m*g-(b-p*h-m*h-p*g),S=c*l,f=C*c,p=f-(f-c),m=c-p,f=C*l,h=f-(f-l),g=l-h,T=m*g-(S-p*h-m*h-p*g),_=x-T,d=x-_,O[0]=x-(_+d)+(d-T),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,O[1]=y-(_+d)+(d-S),k=v+_,d=k-v,O[2]=v-(k-d)+(_-d),O[3]=k;let se=w(oe,te,4,O,ne);return ne[se-1]}function A(e,t,n,r,i,a){let o=(t-a)*(n-i),s=(e-i)*(r-a),c=o-s,l=Math.abs(o+s);return Math.abs(c)>=33306690738754716e-32*l?c:-k(e,t,n,r,i,a,l)}let j=(e,t)=>e.x*t.y-e.y*t.x,re=(e,t)=>e.x*t.x+e.y*t.y,M=(e,t,n)=>{let r=A(e.x,e.y,t.x,t.y,n.x,n.y);return r>0?-1:+(r<0)},N=e=>Math.sqrt(re(e,e)),ie=(e,t,n)=>{let r={x:t.x-e.x,y:t.y-e.y},i={x:n.x-e.x,y:n.y-e.y};return j(i,r)/N(i)/N(r)},ae=(e,t,n)=>{let r={x:t.x-e.x,y:t.y-e.y},i={x:n.x-e.x,y:n.y-e.y};return re(i,r)/N(i)/N(r)},oe=(e,t,n)=>t.y===0?null:{x:e.x+t.x/t.y*(n-e.y),y:n},se=(e,t,n)=>t.x===0?null:{x:n,y:e.y+t.y/t.x*(n-e.x)},ce=(e,t,n,r)=>{if(t.x===0)return se(n,r,e.x);if(r.x===0)return se(e,t,n.x);if(t.y===0)return oe(n,r,e.y);if(r.y===0)return oe(e,t,n.y);let i=j(t,r);if(i==0)return null;let a={x:n.x-e.x,y:n.y-e.y},o=j(a,t)/i,s=j(a,r)/i,c=e.x+s*t.x,l=n.x+o*r.x,u=e.y+s*t.y,d=n.y+o*r.y;return{x:(c+l)/2,y:(u+d)/2}};class P{static compare(e,t){let n=P.comparePoints(e.point,t.point);return n===0?(e.point!==t.point&&e.link(t),e.isLeft===t.isLeft?F.compare(e.segment,t.segment):e.isLeft?1:-1):n}static comparePoints(e,t){return e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:+(e.y>t.y)}constructor(e,t){e.events===void 0?e.events=[this]:e.events.push(this),this.point=e,this.isLeft=t}link(e){if(e.point===this.point)throw Error(`Tried to link already linked events`);let t=e.point.events;for(let e=0,n=t.length;e<n;e++){let n=t[e];this.point.events.push(n),n.point=this.point}this.checkForConsuming()}checkForConsuming(){let e=this.point.events.length;for(let t=0;t<e;t++){let n=this.point.events[t];if(n.segment.consumedBy===void 0)for(let r=t+1;r<e;r++){let e=this.point.events[r];e.consumedBy===void 0&&n.otherSE.point.events===e.otherSE.point.events&&n.segment.consume(e.segment)}}}getAvailableLinkedEvents(){let e=[];for(let t=0,n=this.point.events.length;t<n;t++){let n=this.point.events[t];n!==this&&!n.segment.ringOut&&n.segment.isInResult()&&e.push(n)}return e}getLeftmostComparator(e){let t=new Map,n=n=>{let r=n.otherSE;t.set(n,{sine:ie(this.point,e.point,r.point),cosine:ae(this.point,e.point,r.point)})};return(e,r)=>{t.has(e)||n(e),t.has(r)||n(r);let{sine:i,cosine:a}=t.get(e),{sine:o,cosine:s}=t.get(r);return i>=0&&o>=0?a<s?1:a>s?-1:0:i<0&&o<0?a<s?-1:+(a>s):o<i?-1:+(o>i)}}}let le=0;class F{static compare(e,t){let n=e.leftSE.point.x,r=t.leftSE.point.x,i=e.rightSE.point.x,a=t.rightSE.point.x;if(a<n)return 1;if(i<r)return-1;let o=e.leftSE.point.y,s=t.leftSE.point.y,c=e.rightSE.point.y,l=t.rightSE.point.y;if(n<r){if(s<o&&s<c)return 1;if(s>o&&s>c)return-1;let n=e.comparePoint(t.leftSE.point);if(n<0)return 1;if(n>0)return-1;let r=t.comparePoint(e.rightSE.point);return r===0?-1:r}if(n>r){if(o<s&&o<l)return-1;if(o>s&&o>l)return 1;let n=t.comparePoint(e.leftSE.point);if(n!==0)return n;let r=e.comparePoint(t.rightSE.point);return r<0?1:r>0?-1:1}if(o<s)return-1;if(o>s)return 1;if(i<a){let n=t.comparePoint(e.rightSE.point);if(n!==0)return n}if(i>a){let n=e.comparePoint(t.rightSE.point);if(n<0)return 1;if(n>0)return-1}if(i!==a){let e=c-o,t=i-n,u=l-s,d=a-r;if(e>t&&u<d)return 1;if(e<t&&u>d)return-1}return i>a?1:i<a||c<l?-1:c>l?1:e.id<t.id?-1:+(e.id>t.id)}constructor(e,t,n,r){this.id=++le,this.leftSE=e,e.segment=this,e.otherSE=t,this.rightSE=t,t.segment=this,t.otherSE=e,this.rings=n,this.windings=r}static fromRing(e,t,n){let r,i,a,o=P.comparePoints(e,t);if(o<0)r=e,i=t,a=1;else if(o>0)r=t,i=e,a=-1;else throw Error(`Tried to create degenerate segment at [${e.x}, ${e.y}]`);let s=new P(r,!0),c=new P(i,!1);return new F(s,c,[n],[a])}replaceRightSE(e){this.rightSE=e,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let e=this.leftSE.point.y,t=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:e<t?e:t},ur:{x:this.rightSE.point.x,y:e>t?e:t}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(e){return e.x===this.leftSE.point.x&&e.y===this.leftSE.point.y||e.x===this.rightSE.point.x&&e.y===this.rightSE.point.y}comparePoint(e){if(this.isAnEndpoint(e))return 0;let t=this.leftSE.point,n=this.rightSE.point,r=this.vector();if(t.x===n.x)return e.x===t.x?0:e.x<t.x?1:-1;let i=(e.y-t.y)/r.y,a=t.x+i*r.x;if(e.x===a)return 0;let o=(e.x-t.x)/r.x,s=t.y+o*r.y;return e.y===s?0:e.y<s?-1:1}getIntersection(e){let t=this.bbox(),n=e.bbox(),r=g(t,n);if(r===null)return null;let i=this.leftSE.point,a=this.rightSE.point,o=e.leftSE.point,s=e.rightSE.point,c=h(t,o)&&this.comparePoint(o)===0,l=h(n,i)&&e.comparePoint(i)===0,u=h(t,s)&&this.comparePoint(s)===0,d=h(n,a)&&e.comparePoint(a)===0;if(l&&c)return d&&!u?a:!d&&u?s:null;if(l)return u&&i.x===s.x&&i.y===s.y?null:i;if(c)return d&&a.x===o.x&&a.y===o.y?null:o;if(d&&u)return null;if(d)return a;if(u)return s;let f=ce(i,this.vector(),o,e.vector());return f===null||!h(r,f)?null:S.round(f.x,f.y)}split(e){let t=[],n=e.events!==void 0,r=new P(e,!0),i=new P(e,!1),a=this.rightSE;this.replaceRightSE(i),t.push(i),t.push(r);let o=new F(r,a,this.rings.slice(),this.windings.slice());return P.comparePoints(o.leftSE.point,o.rightSE.point)>0&&o.swapEvents(),P.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),n&&(r.checkForConsuming(),i.checkForConsuming()),t}swapEvents(){let e=this.rightSE;this.rightSE=this.leftSE,this.leftSE=e,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let e=0,t=this.windings.length;e<t;e++)this.windings[e]*=-1}consume(e){let t=this,n=e;for(;t.consumedBy;)t=t.consumedBy;for(;n.consumedBy;)n=n.consumedBy;let r=F.compare(t,n);if(r!==0){if(r>0){let e=t;t=n,n=e}if(t.prev===n){let e=t;t=n,n=e}for(let e=0,r=n.rings.length;e<r;e++){let r=n.rings[e],i=n.windings[e],a=t.rings.indexOf(r);a===-1?(t.rings.push(r),t.windings.push(i)):t.windings[a]+=i}n.rings=null,n.windings=null,n.consumedBy=t,n.leftSE.consumedBy=t.leftSE,n.rightSE.consumedBy=t.rightSE}}prevInResult(){return this._prevInResult===void 0&&(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null),this._prevInResult}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let e=this.prev.consumedBy||this.prev;this._beforeState=e.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let e=this.beforeState();this._afterState={rings:e.rings.slice(0),windings:e.windings.slice(0),multiPolys:[]};let t=this._afterState.rings,n=this._afterState.windings,r=this._afterState.multiPolys;for(let e=0,r=this.rings.length;e<r;e++){let r=this.rings[e],i=this.windings[e],a=t.indexOf(r);a===-1?(t.push(r),n.push(i)):n[a]+=i}let i=[],a=[];for(let e=0,r=t.length;e<r;e++){if(n[e]===0)continue;let r=t[e],o=r.poly;if(a.indexOf(o)===-1)if(r.isExterior)i.push(o);else{a.indexOf(o)===-1&&a.push(o);let e=i.indexOf(r.poly);e!==-1&&i.splice(e,1)}}for(let e=0,t=i.length;e<t;e++){let t=i[e].multiPoly;r.indexOf(t)===-1&&r.push(t)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let e=this.beforeState().multiPolys,t=this.afterState().multiPolys;switch(be.type){case`union`:{let n=e.length===0,r=t.length===0;this._isInResult=n!==r;break}case`intersection`:{let n,r;e.length<t.length?(n=e.length,r=t.length):(n=t.length,r=e.length),this._isInResult=r===be.numMultiPolys&&n<r;break}case`xor`:{let n=Math.abs(e.length-t.length);this._isInResult=n%2==1;break}case`difference`:{let n=e=>e.length===1&&e[0].isSubject;this._isInResult=n(e)!==n(t);break}default:throw Error(`Unrecognized operation type found ${be.type}`)}return this._isInResult}}class ue{constructor(e,t,n){if(!Array.isArray(e)||e.length===0||(this.poly=t,this.isExterior=n,this.segments=[],typeof e[0][0]!=`number`||typeof e[0][1]!=`number`))throw Error(`Input geometry is not a valid Polygon or MultiPolygon`);let r=S.round(e[0][0],e[0][1]);this.bbox={ll:{x:r.x,y:r.y},ur:{x:r.x,y:r.y}};let i=r;for(let t=1,n=e.length;t<n;t++){if(typeof e[t][0]!=`number`||typeof e[t][1]!=`number`)throw Error(`Input geometry is not a valid Polygon or MultiPolygon`);let n=S.round(e[t][0],e[t][1]);n.x===i.x&&n.y===i.y||(this.segments.push(F.fromRing(i,n,this)),n.x<this.bbox.ll.x&&(this.bbox.ll.x=n.x),n.y<this.bbox.ll.y&&(this.bbox.ll.y=n.y),n.x>this.bbox.ur.x&&(this.bbox.ur.x=n.x),n.y>this.bbox.ur.y&&(this.bbox.ur.y=n.y),i=n)}(r.x!==i.x||r.y!==i.y)&&this.segments.push(F.fromRing(i,r,this))}getSweepEvents(){let e=[];for(let t=0,n=this.segments.length;t<n;t++){let n=this.segments[t];e.push(n.leftSE),e.push(n.rightSE)}return e}}class de{constructor(e,t){if(!Array.isArray(e))throw Error(`Input geometry is not a valid Polygon or MultiPolygon`);this.exteriorRing=new ue(e[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let t=1,n=e.length;t<n;t++){let n=new ue(e[t],this,!1);n.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=n.bbox.ll.x),n.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=n.bbox.ll.y),n.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=n.bbox.ur.x),n.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=n.bbox.ur.y),this.interiorRings.push(n)}this.multiPoly=t}getSweepEvents(){let e=this.exteriorRing.getSweepEvents();for(let t=0,n=this.interiorRings.length;t<n;t++){let n=this.interiorRings[t].getSweepEvents();for(let t=0,r=n.length;t<r;t++)e.push(n[t])}return e}}class fe{constructor(e,t){if(!Array.isArray(e))throw Error(`Input geometry is not a valid Polygon or MultiPolygon`);try{typeof e[0][0][0]==`number`&&(e=[e])}catch{}this.polys=[],this.bbox={ll:{x:1/0,y:1/0},ur:{x:-1/0,y:-1/0}};for(let t=0,n=e.length;t<n;t++){let n=new de(e[t],this);n.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=n.bbox.ll.x),n.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=n.bbox.ll.y),n.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=n.bbox.ur.x),n.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=n.bbox.ur.y),this.polys.push(n)}this.isSubject=t}getSweepEvents(){let e=[];for(let t=0,n=this.polys.length;t<n;t++){let n=this.polys[t].getSweepEvents();for(let t=0,r=n.length;t<r;t++)e.push(n[t])}return e}}class pe{static factory(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];if(!r.isInResult()||r.ringOut)continue;let i=null,a=r.leftSE,o=r.rightSE,s=[a],c=a.point,l=[];for(;i=a,a=o,s.push(a),a.point!==c;)for(;;){let e=a.getAvailableLinkedEvents();if(e.length===0){let e=s[0].point,t=s[s.length-1].point;throw Error(`Unable to complete output ring starting at [${e.x}, ${e.y}]. Last matching segment found ends at [${t.x}, ${t.y}].`)}if(e.length===1){o=e[0].otherSE;break}let n=null;for(let e=0,t=l.length;e<t;e++)if(l[e].point===a.point){n=e;break}if(n!==null){let e=l.splice(n)[0],r=s.splice(e.index);r.unshift(r[0].otherSE),t.push(new pe(r.reverse()));continue}l.push({index:s.length,point:a.point});let r=a.getLeftmostComparator(i);o=e.sort(r)[0].otherSE;break}t.push(new pe(s))}return t}constructor(e){this.events=e;for(let t=0,n=e.length;t<n;t++)e[t].segment.ringOut=this;this.poly=null}getGeom(){let e=this.events[0].point,t=[e];for(let n=1,r=this.events.length-1;n<r;n++){let r=this.events[n].point,i=this.events[n+1].point;M(r,e,i)!==0&&(t.push(r),e=r)}if(t.length===1)return null;let n=t[0],r=t[1];M(n,e,r)===0&&t.shift(),t.push(t[0]);let i=this.isExteriorRing()?1:-1,a=this.isExteriorRing()?0:t.length-1,o=this.isExteriorRing()?t.length:-1,s=[];for(let e=a;e!=o;e+=i)s.push([t[e].x,t[e].y]);return s}isExteriorRing(){if(this._isExteriorRing===void 0){let e=this.enclosingRing();this._isExteriorRing=!e||!e.isExteriorRing()}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let e=this.events[0];for(let t=1,n=this.events.length;t<n;t++){let n=this.events[t];P.compare(e,n)>0&&(e=n)}let t=e.segment.prevInResult(),n=t?t.prevInResult():null;for(;;){if(!t)return null;if(!n)return t.ringOut;if(n.ringOut!==t.ringOut)return n.ringOut.enclosingRing()===t.ringOut?t.ringOut.enclosingRing():t.ringOut;t=n.prevInResult(),n=t?t.prevInResult():null}}}class me{constructor(e){this.exteriorRing=e,e.poly=this,this.interiorRings=[]}addInterior(e){this.interiorRings.push(e),e.poly=this}getGeom(){let e=[this.exteriorRing.getGeom()];if(e[0]===null)return null;for(let t=0,n=this.interiorRings.length;t<n;t++){let n=this.interiorRings[t].getGeom();n!==null&&e.push(n)}return e}}class he{constructor(e){this.rings=e,this.polys=this._composePolys(e)}getGeom(){let e=[];for(let t=0,n=this.polys.length;t<n;t++){let n=this.polys[t].getGeom();n!==null&&e.push(n)}return e}_composePolys(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];if(!r.poly)if(r.isExteriorRing())t.push(new me(r));else{let e=r.enclosingRing();e.poly||t.push(new me(e)),e.poly.addInterior(r)}}return t}}class ge{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:F.compare;this.queue=e,this.tree=new c(t),this.segments=[]}process(e){let t=e.segment,n=[];if(e.consumedBy)return e.isLeft?this.queue.remove(e.otherSE):this.tree.remove(t),n;let r=e.isLeft?this.tree.add(t):this.tree.find(t);if(!r)throw Error(`Unable to find segment #${t.id} [${t.leftSE.point.x}, ${t.leftSE.point.y}] -> [${t.rightSE.point.x}, ${t.rightSE.point.y}] in SweepLine tree.`);let i=r,a=r,o,s;for(;o===void 0;)i=this.tree.prev(i),i===null?o=null:i.key.consumedBy===void 0&&(o=i.key);for(;s===void 0;)a=this.tree.next(a),a===null?s=null:a.key.consumedBy===void 0&&(s=a.key);if(e.isLeft){let r=null;if(o){let e=o.getIntersection(t);if(e!==null&&(t.isAnEndpoint(e)||(r=e),!o.isAnEndpoint(e))){let t=this._splitSafely(o,e);for(let e=0,r=t.length;e<r;e++)n.push(t[e])}}let i=null;if(s){let e=s.getIntersection(t);if(e!==null&&(t.isAnEndpoint(e)||(i=e),!s.isAnEndpoint(e))){let t=this._splitSafely(s,e);for(let e=0,r=t.length;e<r;e++)n.push(t[e])}}if(r!==null||i!==null){let e=null;e=r===null?i:i===null||P.comparePoints(r,i)<=0?r:i,this.queue.remove(t.rightSE),n.push(t.rightSE);let a=t.split(e);for(let e=0,t=a.length;e<t;e++)n.push(a[e])}n.length>0?(this.tree.remove(t),n.push(e)):(this.segments.push(t),t.prev=o)}else{if(o&&s){let e=o.getIntersection(s);if(e!==null){if(!o.isAnEndpoint(e)){let t=this._splitSafely(o,e);for(let e=0,r=t.length;e<r;e++)n.push(t[e])}if(!s.isAnEndpoint(e)){let t=this._splitSafely(s,e);for(let e=0,r=t.length;e<r;e++)n.push(t[e])}}}this.tree.remove(t)}return n}_splitSafely(e,t){this.tree.remove(e);let n=e.rightSE;this.queue.remove(n);let r=e.split(t);return r.push(n),e.consumedBy===void 0&&this.tree.add(e),r}}let _e=typeof process<`u`&&{}.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,ve=typeof process<`u`&&{}.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class ye{run(e,t,n){be.type=e,S.reset();let r=[new fe(t,!0)];for(let e=0,t=n.length;e<t;e++)r.push(new fe(n[e],!1));if(be.numMultiPolys=r.length,be.type===`difference`){let e=r[0],t=1;for(;t<r.length;)g(r[t].bbox,e.bbox)===null?r.splice(t,1):t++}if(be.type===`intersection`)for(let e=0,t=r.length;e<t;e++){let t=r[e];for(let n=e+1,i=r.length;n<i;n++)if(g(t.bbox,r[n].bbox)===null)return[]}let i=new c(P.compare);for(let e=0,t=r.length;e<t;e++){let t=r[e].getSweepEvents();for(let e=0,n=t.length;e<n;e++)if(i.insert(t[e]),i.size>_e)throw Error(`Infinite loop when putting segment endpoints in a priority queue (queue size too big).`)}let a=new ge(i),o=i.size,s=i.pop();for(;s;){let e=s.key;if(i.size===o){let t=e.segment;throw Error(`Unable to pop() ${e.isLeft?`left`:`right`} SweepEvent [${e.point.x}, ${e.point.y}] from segment #${t.id} [${t.leftSE.point.x}, ${t.leftSE.point.y}] -> [${t.rightSE.point.x}, ${t.rightSE.point.y}] from queue.`)}if(i.size>_e)throw Error(`Infinite loop when passing sweep line over endpoints (queue size too big).`);if(a.segments.length>ve)throw Error(`Infinite loop when passing sweep line over endpoints (too many sweep line segments).`);let t=a.process(e);for(let e=0,n=t.length;e<n;e++){let n=t[e];n.consumedBy===void 0&&i.insert(n)}o=i.size,s=i.pop()}S.reset();let l=pe.factory(a.segments);return new he(l).getGeom()}}let be=new ye;return{union:function(e){var t=[...arguments].slice(1);return be.run(`union`,e,t)},intersection:function(e){var t=[...arguments].slice(1);return be.run(`intersection`,e,t)},xor:function(e){var t=[...arguments].slice(1);return be.run(`xor`,e,t)},difference:function(e){var t=[...arguments].slice(1);return be.run(`difference`,e,t)}}}))}))(),1),os=.001,ss=.45,cs=.85,ls=.1,us=1e-6,ds=.001,fs=(e,t)=>[e[0]-t[0],e[1]-t[1]],ps=(e,t,n=1)=>[e[0]+t[0]*n,e[1]+t[1]*n],ms=(e,t)=>e[0]*t[0]+e[1]*t[1],hs=(e,t)=>e[0]*t[1]-e[1]*t[0],gs=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1]),_s=e=>{let t=Math.hypot(e[0],e[1]);return t>1e-12?[e[0]/t,e[1]/t]:[0,0]},vs=e=>[...new Set(e)],ys=e=>Math.round(e/os)*os,bs=e=>[ys(e[0]),ys(e[1])],xs=(e,t,n)=>{let r=fs(n,t),i=Math.hypot(...r);return i<1e-12?gs(e,t):Math.abs(hs(r,fs(e,t)))/i},Ss=(e,t,n,r)=>{let i=_s(fs(t,e));if(gs(e,t)<=.001||gs(n,r)<=.001||xs(n,e,t)>.001||xs(r,e,t)>.001)return!1;let a=[ms(fs(n,e),i),ms(fs(r,e),i)].sort((e,t)=>e-t);return Math.min(gs(e,t),a[1])-Math.max(0,a[0])>os};function Cs(e){return e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n[0]*i[1]-i[0]*n[1]},0)/2}function ws(e){return String(Math.round(e*1e3))}function Ts(e,t=0){let n=Math.atan2(e[1],e[0])*180/Math.PI,r=((n+t+180)%360+360)%360-180;return(r>90||r<=-90)&&(n+=180),n}function Es(e,t){let n=[],r=Object.values(e).filter(n=>n.type===`wall`&&Ga(n.id,e).levelId===t),i=Eo(r).filter(e=>e.validation.valid&&e.footprint.length>=3),a={exteriorComponentCount:0,exteriorRingCount:0,interiorRingCount:0,exteriorRunCount:0,innerChainCount:0,innerSegmentCount:0,overallDimensionCount:0,exteriorDoorCount:0,exteriorWindowCount:0,excludedInteriorOpeningCount:0,curvedExteriorRunCount:0,unresolvedRunCount:0,chainSumMismatchCount:0,dimensionTextUnresolvedCollisionCount:0};if(!i.length)return{levelId:t,rings:[],runs:[],dimensions:[],diagnostics:[{severity:`warning`,code:`no_exterior_contour`,message:`当前 Level 没有可用于外围尺寸的有效墙体 footprint`,sourcePath:`nodes`}],summary:a};let o;try{let[e,...t]=i.map(e=>[[e.footprint.map(e=>bs([e.x,e.y]))]]);o=as.default.union(e,...t)}catch{return{levelId:t,rings:[],runs:[],dimensions:[],diagnostics:[{severity:`error`,code:`exterior_union_failed`,message:`墙体 physical footprint polygon union 失败`,sourcePath:`derived.exterior-dimensions`}],summary:a}}if(!Array.isArray(o)||!o.length)return{levelId:t,rings:[],runs:[],dimensions:[],diagnostics:[{severity:`warning`,code:`no_exterior_contour`,message:`Polygon union 未生成外轮廓`,sourcePath:`derived.exterior-dimensions`}],summary:a};let s=[],c=[],l=0,u=0,d=0;o.forEach((e,a)=>{let o=`component-${a+1}`;l+=Math.max(0,e.length-1);let f=e[0],p=f.slice(0,f.length>1&&gs(f[0],f[f.length-1])<=.001?-1:void 0).map(e=>[e[0],e[1]]);if(p.length<3||Math.abs(Cs(p))<1e-9){n.push({severity:`error`,code:`invalid_exterior_ring`,message:`无效外围 ring：${o}`,sourcePath:`derived.exterior-dimensions`});return}let m=Cs(p),h=p.map((e,t)=>{let n=p[(t+1)%p.length];return{start:e,end:n,sourceWallIds:i.filter(t=>{let r=t.footprint.map(e=>[e.x,e.y]);return r.some((t,i)=>Ss(e,n,t,r[(i+1)%r.length]))}).map(e=>e.wallId)}}),g=vs(h.flatMap(e=>e.sourceWallIds));s.push({componentId:o,ringId:`${o}-outer`,points:p,signedArea:m,winding:m>0?`counterclockwise`:`clockwise`,sourceWallIds:g});let _=h.map(e=>({...e,direction:_s(fs(e.end,e.start)),curved:e.sourceWallIds.some(e=>V(r.find(t=>t.id===e))),unresolved:e.sourceWallIds.length===0,boundarySegments:[e]})),v=[];for(let e of _){let t=v[v.length-1];t&&!t.unresolved&&!e.unresolved&&t.curved===e.curved&&Math.abs(hs(t.direction,e.direction))<=us&&ms(t.direction,e.direction)>0?(t.end=e.end,t.sourceWallIds=vs([...t.sourceWallIds,...e.sourceWallIds]),t.boundarySegments.push(...e.boundarySegments)):v.push({...e,sourceWallIds:[...e.sourceWallIds]})}if(v.length>1){let e=v[0],t=v[v.length-1];!e.unresolved&&!t.unresolved&&e.curved===t.curved&&Math.abs(hs(t.direction,e.direction))<=us&&ms(t.direction,e.direction)>0&&(e.start=t.start,e.sourceWallIds=vs([...t.sourceWallIds,...e.sourceWallIds]),e.boundarySegments=[...t.boundarySegments,...e.boundarySegments],v.pop())}v.forEach((e,i)=>{let a=`${o}-run-${i+1}`,s=gs(e.start,e.end),l=_s(fs(e.end,e.start)),f=m>0?[l[1],-l[0]]:[-l[1],l[0]];if(e.unresolved){d+=1,n.push({severity:`error`,code:`ambiguous_exterior_wall_mapping`,message:`外围边界无法映射到来源 Wall：${a}`,sourcePath:`derived.exterior-dimensions`});return}if(e.curved){u+=1;let t=e.sourceWallIds.filter(e=>V(r.find(t=>t.id===e)));for(let e of t){let t=H(r.find(t=>t.id===e));n.push({severity:`warning`,code:`unsupported_curved_exterior_dimension`,message:`曲墙外围段本轮不生成直线尺寸：${e}; radius=${t?.radius??`unknown`}; sweep=${t?.delta??`unknown`}`,nodeId:e,sourcePath:`nodes.${e}.curveOffset`})}return}s>.001&&c.push({id:a,levelId:t,componentId:o,start:e.start,end:e.end,direction:l,outwardNormal:f,sourceWallIds:e.sourceWallIds,boundarySegments:e.boundarySegments,lengthMeters:s})})}),o.length>1&&n.push({severity:`info`,code:`multiple_exterior_components`,message:`检测到 ${o.length} 个互不连接的外围组件`,sourcePath:`derived.exterior-dimensions`});let f=[],p=new Set,m=new Set,h=0,g=0;for(let i of c){let a=[Ds(i,0,`exterior-run-start`,i.id),Ds(i,i.lengthMeters,`exterior-run-end`,i.id)],o=i.sourceWallIds.map(e=>r.find(t=>t.id===e)).filter(e=>!!e).filter(e=>Math.abs(hs(_s([e.end[0]-e.start[0],e.end[1]-e.start[1]]),i.direction))<=us);if(o.length>1)for(let e of o)for(let t of[e.start,e.end]){let n=ms(fs([t[0],t[1]],i.start),i.direction);n>.001&&n<i.lengthMeters-.001&&xs([t[0],t[1]],i.start,i.end)<=Math.max((e.thickness??.1)/2+.001,.001)&&a.push(Ds(i,n,`exterior-wall-junction`,e.id))}let s=Object.values(e).filter(n=>(n.type===`door`||n.type===`window`)&&Ga(n.id,e).levelId===t);for(let e of s){let t=e.wallId??e.parentId;if(!i.sourceWallIds.includes(t))continue;let o=r.find(e=>e.id===t),s=Number(e.width),c=Array.isArray(e.position)?Number(e.position[0]):NaN;if(!o||!Number.isFinite(s)||s<=0||!Number.isFinite(c)){n.push({severity:`error`,code:`invalid_opening_span_for_dimension`,message:`无效 ${e.type} opening span`,nodeId:e.id,sourcePath:`nodes.${e.id}`});continue}let l=_s([o.end[0]-o.start[0],o.end[1]-o.start[1]]),u=[o.start[0]+l[0]*c,o.start[1]+l[1]*c],d=ps(u,l,-s/2),f=ps(u,l,s/2),h=[ms(fs(d,i.start),i.direction),ms(fs(f,i.start),i.direction)].sort((e,t)=>e-t);if(h[0]<-.001||h[1]>i.lengthMeters+.001||Math.abs(h[1]-h[0]-s)>ds){n.push({severity:`warning`,code:`opening_not_on_exterior_run`,message:`${e.type} opening span 不在外墙 run 有效范围`,nodeId:e.id,sourcePath:`nodes.${e.id}`});continue}let g=e.type;a.push(Ds(i,Math.max(0,h[0]),`${g}-left`,e.id),Ds(i,Math.min(i.lengthMeters,h[1]),`${g}-right`,e.id)),g===`door`?p.add(e.id):m.add(e.id)}let c=a.sort((e,t)=>e.scalarOnRun-t.scalarOnRun),l=[];for(let e of c){let t=l[l.length-1];if(t&&Math.abs(e.scalarOnRun-t.scalarOnRun)<=.001){e.sourceNodeId!==t.sourceNodeId&&n.push({severity:`info`,code:`duplicate_dimension_witness`,message:`尺寸基准点按 ${os}m 容差去重`,sourcePath:e.sourcePath});continue}l.push(e)}if(l.length>2){for(let e=0;e<l.length-1;e+=1){let t=l[e],r=l[e+1];if(r.scalarOnRun-t.scalarOnRun<=.001){n.push({severity:`error`,code:`invalid_dimension_segment`,message:`零长度外围尺寸段：${i.id}`,sourcePath:`derived.exterior-dimensions`});continue}f.push(Os(i,t,r,`inner-chain`,e+1))}let e=f.filter(e=>e.runId===i.id&&e.dimensionLayer===`inner-chain`).reduce((e,t)=>e+t.valueMeters,0);Math.abs(e-i.lengthMeters)>ds&&(g+=1,n.push({severity:`error`,code:`dimension_chain_sum_mismatch`,message:`${i.id} 分段和 ${e}m 不等于总长 ${i.lengthMeters}m`,sourcePath:`derived.exterior-dimensions`}))}f.push(Os(i,l[0],l[l.length-1],`overall`,1))}let _=new Set([...p,...m]);h=Object.values(e).filter(n=>(n.type===`door`||n.type===`window`)&&Ga(n.id,e).levelId===t&&!_.has(n.id)).length;let v=0;for(let e of new Set(f.filter(e=>e.dimensionLayer===`inner-chain`).map(e=>e.chainId))){let t=f.filter(t=>t.chainId===e).filter(e=>e.valueMeters<=Math.max(.24,e.displayMillimeters.length*.105)+.16).map(e=>({item:e,start:e.sourceEnd.scalarOnRun+.14,end:e.sourceEnd.scalarOnRun+.14+Math.max(.24,e.displayMillimeters.length*.105)})).sort((e,t)=>e.start-t.start);for(let e=1;e<t.length;e+=1)t[e].start<t[e-1].end-.001&&(v+=1,n.push({severity:`warning`,code:`dimension_text_collision_unresolved`,message:`短尺寸外置文字仍有碰撞风险：${t[e].item.id}`,sourcePath:`derived.exterior-dimensions`}))}return{levelId:t,rings:s,runs:c,dimensions:f,diagnostics:n,summary:{exteriorComponentCount:o.length,exteriorRingCount:s.length,interiorRingCount:l,exteriorRunCount:c.length,innerChainCount:new Set(f.filter(e=>e.dimensionLayer===`inner-chain`).map(e=>e.chainId)).size,innerSegmentCount:f.filter(e=>e.dimensionLayer===`inner-chain`).length,overallDimensionCount:f.filter(e=>e.dimensionLayer===`overall`).length,exteriorDoorCount:p.size,exteriorWindowCount:m.size,excludedInteriorOpeningCount:h,curvedExteriorRunCount:u,unresolvedRunCount:d,chainSumMismatchCount:g,dimensionTextUnresolvedCollisionCount:v}}}function Ds(e,t,n,r){return{id:`${e.id}-${n}-${r}-${t.toFixed(6)}`,point:ps(e.start,e.direction,t),scalarOnRun:t,sourceNodeId:r,sourceKind:n,sourcePath:r===e.id?`derived.exterior-run`:`nodes.${r}`}}function Os(e,t,n,r,i){let a=Math.abs(n.scalarOnRun-t.scalarOnRun);return{id:`${e.id}-${r}-${i}`,chainId:`${e.id}-${r}`,levelId:e.levelId,componentId:e.componentId,runId:e.id,dimensionLayer:r,start:t.point,end:n.point,valueMeters:a,displayMillimeters:ws(a),direction:e.direction,outwardNormal:e.outwardNormal,sourceStart:t,sourceEnd:n,sourceWallIds:e.sourceWallIds,sourceOpeningIds:vs([t,n].filter(e=>e.sourceKind.startsWith(`door`)||e.sourceKind.startsWith(`window`)).map(e=>e.sourceNodeId)),sourcePaths:vs([t.sourcePath,n.sourcePath]),method:`projected-world-distance`,unionAlgorithm:`polygon-clipping.union`}}var ks=e=>Math.abs(e[0])>=1-us?`horizontal`:Math.abs(e[1])>=1-us?`vertical`:`diagonal`,As=e=>({minX:Math.min(...e.points.map(e=>e[0])),maxX:Math.max(...e.points.map(e=>e[0])),minY:Math.min(...e.points.map(e=>e[1])),maxY:Math.max(...e.points.map(e=>e[1]))}),js=(e,t)=>{let n=As(t);return ks(e.direction)===`horizontal`?Math.abs(e.start[1]-(e.outwardNormal[1]<0?n.minY:n.maxY))<=os:ks(e.direction)===`vertical`&&Math.abs(e.start[0]-(e.outwardNormal[0]<0?n.minX:n.maxX))<=os};function Ms(e,t,n){let r=As(t),i=n===`top`||n===`bottom`,a=n===`top`?[r.minX,r.minY]:n===`right`?[r.maxX,r.minY]:n===`bottom`?[r.maxX,r.maxY]:[r.minX,r.maxY],o=n===`top`?[r.maxX,r.minY]:n===`right`?[r.maxX,r.maxY]:n===`bottom`?[r.minX,r.maxY]:[r.minX,r.minY],s=_s(fs(o,a)),c=n===`top`?[0,-1]:n===`right`?[1,0]:n===`bottom`?[0,1]:[-1,0],l=i?r.maxX-r.minX:r.maxY-r.minY,u=`${t.componentId}-frame-${n}`,d={id:`${u}-start`,point:a,scalarOnRun:0,sourceNodeId:t.ringId,sourceKind:`exterior-run-start`,sourcePath:`derived.exterior-ring.bounds`},f={id:`${u}-end`,point:o,scalarOnRun:l,sourceNodeId:t.ringId,sourceKind:`exterior-run-end`,sourcePath:`derived.exterior-ring.bounds`};return{id:`${u}-overall`,chainId:`${u}-overall`,levelId:e.levelId,componentId:t.componentId,runId:u,dimensionLayer:`overall`,start:a,end:o,valueMeters:l,displayMillimeters:ws(l),direction:s,outwardNormal:c,sourceStart:d,sourceEnd:f,sourceWallIds:t.sourceWallIds,sourceOpeningIds:[],sourcePaths:[`derived.exterior-ring.bounds`],method:`projected-world-distance`,unionAlgorithm:`polygon-clipping.union`}}function Ns(e){let t=e.dimensions.filter(t=>{if(t.dimensionLayer===`inner-chain`||ks(t.direction)===`diagonal`)return!0;let n=e.runs.find(e=>e.id===t.runId),r=e.rings.find(e=>e.componentId===t.componentId);return!n||!r||!js(n,r)});for(let n of e.rings){let r=e.runs.filter(e=>e.componentId===n.componentId),i=new Set;for(let e of r)js(e,n)&&(ks(e.direction)===`horizontal`&&i.add(e.outwardNormal[1]<0?`top`:`bottom`),ks(e.direction)===`vertical`&&i.add(e.outwardNormal[0]<0?`left`:`right`));for(let r of i)t.push(Ms(e,n,r))}return t}function Ps(e,t){let n=e.rings.find(e=>e.componentId===t.componentId),r=e.runs.find(e=>e.id===t.runId);if(!n||!r||!js(r,n)||t.dimensionLayer!==`inner-chain`||ks(t.direction)===`diagonal`)return{edgeStart:t.start,edgeEnd:t.end,faceStart:t.start,faceEnd:t.end};let i=As(n);if(ks(t.direction)===`horizontal`){let e=t.outwardNormal[1]<0?i.minY:i.maxY;return{edgeStart:t.start,edgeEnd:t.end,faceStart:[t.start[0],e],faceEnd:[t.end[0],e]}}let a=t.outwardNormal[0]<0?i.minX:i.maxX;return{edgeStart:t.start,edgeEnd:t.end,faceStart:[a,t.start[1]],faceEnd:[a,t.end[1]]}}function Fs(e){return Ns(e).flatMap(t=>{let n=Ps(e,t),r=t.dimensionLayer===`inner-chain`?ss:cs,i=ps(n.faceStart,t.outwardNormal,r),a=ps(n.faceEnd,t.outwardNormal,r),o=Math.max(.25,t.displayMillimeters.length*.055);return[n.edgeStart,n.edgeEnd,ps(i,t.outwardNormal,ls),ps(a,t.outwardNormal,ls),ps(i,t.direction,-o),ps(a,t.direction,o)].map(e=>({x:e[0],z:e[1]}))})}var Is=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1]),Ls=e=>{let t=Math.hypot(e[0],e[1]);return t>1e-12?[e[0]/t,e[1]/t]:[1,0]},Rs=(e,t,n)=>e.map((r,i)=>({start:r,end:e[(i+1)%e.length],sourceNodeId:t,sourceType:n})),zs=(e,t)=>{let n=Ja(e),r=Xa(e.id,t);if(!n||r.status!==`ok`)return[];let i=Qa(r);return[[-n.width/2,-n.depth/2],[n.width/2,-n.depth/2],[n.width/2,n.depth/2],[-n.width/2,n.depth/2]].map(([e,t])=>[i.a*e+i.c*t+i.e,i.b*e+i.d*t+i.f])};function Bs(e,t){let n=Object.values(e).filter(n=>Ga(n.id,e).levelId===t),r=[],i=Eo(n.filter(e=>e.type===`wall`));for(let e of i)e.validation.valid&&e.footprint.length>=3&&r.push(...Rs(e.footprint.map(e=>[e.x,e.y]),e.wallId,`wall`));for(let t of n){if(t.type===`item`){let n=zs(t,e);n.length===4&&r.push(...Rs(n,t.id,`furniture`))}if(t.type===`shelf`&&jo(t)){let n=Po(t,e).map(e=>[e.x,e.z]);n.length===4&&r.push(...Rs(n,t.id,`shelf`))}}return r}var Vs=(e,t)=>{let n=t.end[0]-t.start[0],r=t.end[1]-t.start[1],i=n*n+r*r;if(i<=1e-18)return t.start;let a=Math.max(0,Math.min(1,((e[0]-t.start[0])*n+(e[1]-t.start[1])*r)/i));return[t.start[0]+n*a,t.start[1]+r*a]},Hs=(e,t)=>e===`wall`?t?`wall-corner`:`wall-edge`:e===`shelf`?t?`shelf-corner`:`shelf-edge`:t?`furniture-corner`:`furniture-edge`;function Us(e,t,n){let r=null;for(let i of t)for(let t of[i.start,i.end]){let a=Is(e,t);a<=n&&(!r||a<r.distanceMeters)&&(r={point:t,kind:Hs(i.sourceType,!0),sourceNodeId:i.sourceNodeId,distanceMeters:a})}if(r)return r;let i=null;for(let r of t){let t=Vs(e,r),a=Is(e,t);a<=n&&(!i||a<i.distanceMeters)&&(i={point:t,kind:Hs(r.sourceType,!1),sourceNodeId:r.sourceNodeId,distanceMeters:a})}return i??{point:e,kind:`free`,distanceMeters:0}}var Ws=(e,t)=>t?Ws(t,e%t):e;function Gs(e,t){if(t===`millimeters`)return String(Math.round(e*1e3));let n=e<0?`−`:``,r=Math.round(Math.abs(e)*39.37007874015748*16),i=Math.floor(r/192),a=r%192,o=Math.floor(a/16),s=a%16;if(!s)return`${n}${i}'-${o}\"`;let c=Ws(s,16);return`${n}${i}'-${o} ${s/c}/${16/c}\"`}function Ks(e,t){return t===`millimeters`?`${e.toFixed(2)} m²`:`${(e*10.76391041671).toFixed(2)} ft²`}function qs(e,t,n){let r=t,i=[];n===`horizontal`&&(r=[t[0],e[1]],Is(t,r)>1e-9&&(i=[{start:t,end:r}])),n===`vertical`&&(r=[e[0],t[1]],Is(t,r)>1e-9&&(i=[{start:t,end:r}]));let a=[r[0]-e[0],r[1]-e[1]],o=Math.hypot(a[0],a[1]),s=Ls(a),c=[-s[1],s[0]],l=[(e[0]+r[0])/2,(e[1]+r[1])/2];return{measurementStart:e,measurementEnd:r,extensionLines:i,valueMeters:o,direction:s,normal:c,labelPoint:l}}function Js(e,t,n){return!n||!e||!t?`aligned`:Math.abs(t[0]-e[0])>=Math.abs(t[1]-e[1])?`horizontal`:`vertical`}var Ys=new Map,Xs=new Map,Zs=new Set,Qs=(e,t=16)=>`${e}|alpha:${t}`,$s=()=>Zs.forEach(e=>e());function ec(e){return Zs.add(e),()=>{Zs.delete(e)}}function tc(e,t=16){return Ys.get(Qs(e,t))??null}function nc(e,t,n,r=16){if(!Number.isInteger(t)||!Number.isInteger(n)||t<=0||n<=0||e.length<t*n*4)return null;let i=t,a=n,o=-1,s=-1;for(let c=0;c<n;c+=1)for(let n=0;n<t;n+=1)e[(c*t+n)*4+3]>=r&&(i=Math.min(i,n),a=Math.min(a,c),o=Math.max(o,n),s=Math.max(s,c));return o<i||s<a?null:{x:i,y:a,width:o-i+1,height:s-a+1}}function rc(e,t,n){if(![e.width,e.height,t,n].every(e=>Number.isFinite(e)&&e>0))return null;let r=t/e.width,i=n/e.height,a=e.width/e.height,o=t/n;return{drawWidth:t,drawHeight:n,offsetX:0,offsetY:0,scaleX:r,scaleY:i,uniformScaleApplied:Math.abs(r-i)<=1e-12,contentAspectRatio:a,physicalAspectRatio:o,aspectDifferencePercent:Math.abs(a-o)/o*100}}var ic=(e,t,n=0,r=0)=>({imageUrl:e,naturalWidth:n,naturalHeight:r,alphaThreshold:16,cropX:0,cropY:0,cropWidth:n,cropHeight:r,isFallback:!0,fallbackReason:t}),ac=e=>new Promise((t,n)=>{if(typeof Image>`u`||typeof document>`u`){n(Error(`canvas-unavailable`));return}let r=new Image;r.crossOrigin=`anonymous`,r.onload=()=>{let e=document.createElement(`canvas`);e.width=r.naturalWidth,e.height=r.naturalHeight;let i=e.getContext(`2d`,{willReadFrequently:!0});if(!i){n(Error(`canvas-unavailable`));return}try{i.drawImage(r,0,0),t({naturalWidth:r.naturalWidth,naturalHeight:r.naturalHeight,data:i.getImageData(0,0,r.naturalWidth,r.naturalHeight).data})}catch{let e=Error(`pixel-read-failed`);e.naturalWidth=r.naturalWidth,e.naturalHeight=r.naturalHeight,n(e)}},r.onerror=()=>n(Error(`image-load-failed`)),r.src=e});function oc(e,t=ac){let n=Qs(e),r=Ys.get(n);if(r)return Promise.resolve(r);let i=Xs.get(n);if(i)return i;let a=t(e).then(t=>{if(t.data.length<t.naturalWidth*t.naturalHeight*4)return ic(e,`invalid-pixel-data`,t.naturalWidth,t.naturalHeight);let n=nc(t.data,t.naturalWidth,t.naturalHeight);return n?{imageUrl:e,naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight,alphaThreshold:16,cropX:n.x,cropY:n.y,cropWidth:n.width,cropHeight:n.height,isFallback:!1,fallbackReason:null}:ic(e,`empty-alpha`,t.naturalWidth,t.naturalHeight)}).catch(t=>ic(e,[`image-load-failed`,`canvas-unavailable`,`pixel-read-failed`].includes(t.message)?t.message:`pixel-read-failed`,t.naturalWidth??0,t.naturalHeight??0)).then(e=>(Ys.set(n,e),Xs.delete(n),$s(),e));return Xs.set(n,a),a}function sc(e){let t=[];for(let n of Object.values(e)){if(n.type!==`item`||!n.asset?.floorPlanUrl)continue;let e=tc(n.asset.floorPlanUrl);if(!e)continue;e.isFallback&&t.push({severity:`warning`,code:e.fallbackReason===`empty-alpha`?`floorplan_image_empty_alpha`:`floorplan_image_crop_unavailable`,message:e.fallbackReason===`empty-alpha`?`floorPlan 图片没有达到 alpha 阈值的有效像素，已回退整图显示`:`floorPlan 图片无法读取像素，已回退整图显示：${e.fallbackReason}`,nodeId:n.id,sourcePath:`nodes.${n.id}.asset.floorPlanUrl`});let r=Ja(n),i=r&&!e.isFallback&&e.cropWidth>0&&e.cropHeight>0?rc({x:e.cropX,y:e.cropY,width:e.cropWidth,height:e.cropHeight},r.width,r.depth):null;i&&i.aspectDifferencePercent>.05*100&&t.push({severity:`warning`,code:`floorplan_image_aspect_mismatch`,message:`裁切内容与物理占地框宽高比差异 ${i.aspectDifferencePercent.toFixed(2)}%，已使用 X/Y 独立缩放实现四边贴合`,nodeId:n.id,sourcePath:`nodes.${n.id}.asset.floorPlanUrl`})}return t}var cc=`pascalorg/editor`,lc=`22c9472066398dae668b45e65c4785a56b3d0fb8`,uc=`site.building.elevator.level.column.wall.fence.cabinet.cabinet-module.item.zone.slab.ceiling.roof.roof-segment.shelf.stair.stair-segment.scan.guide.spawn.window.door.box-vent.ridge-vent.turbine-vent.cupola.eyebrow-vent.gutter.chimney.solar-panel.skylight.dormer.downspout.duct-segment.duct-fitting.duct-terminal.hvac-equipment.lineset.liquid-line.pipe-segment.pipe-fitting.pipe-trap`.split(`.`),dc=new Set([`site`,`building`,`level`,`stair-segment`,`scan`,`guide`,`downspout`]),fc=new Set([`fence`,`cabinet`,`cabinet-module`,`slab`,`shelf`,`duct-segment`,`duct-fitting`,`duct-terminal`,`hvac-equipment`,`lineset`,`liquid-line`,`pipe-segment`,`pipe-fitting`,`pipe-trap`]),pc={site:[`container`],building:[`container`],elevator:[`standalone`,`source-dependent`],level:[`container`],column:[`standalone`],wall:[`standalone`],fence:[`standalone`],cabinet:[`standalone`],"cabinet-module":[`hosted`],item:[`standalone`,`hosted`],zone:[`standalone`],slab:[`standalone`],ceiling:[`view-specific`],roof:[`standalone`],"roof-segment":[`hosted`,`source-dependent`],shelf:[`standalone`],stair:[`standalone`,`source-dependent`],"stair-segment":[`parent-emitted`],scan:[`helper-view-specific`],guide:[`helper-view-specific`],spawn:[`helper-view-specific`,`symbol-only`],window:[`hosted`],door:[`hosted`],"box-vent":[`hosted`],"ridge-vent":[`hosted`],"turbine-vent":[`hosted`],cupola:[`hosted`],"eyebrow-vent":[`hosted`],gutter:[`hosted`],chimney:[`hosted`],"solar-panel":[`hosted`],skylight:[`hosted`],dormer:[`hosted`],downspout:[`hosted`,`source-dependent`],"duct-segment":[`standalone`],"duct-fitting":[`standalone`],"duct-terminal":[`standalone`],"hvac-equipment":[`standalone`],lineset:[`standalone`],"liquid-line":[`standalone`],"pipe-segment":[`standalone`],"pipe-fitting":[`standalone`],"pipe-trap":[`standalone`]},mc={stair:{stairType:[`straight`,`curved`,`spiral`],railingMode:[`none`,`left`,`right`,`both`],topLandingMode:[`none`,`integrated`],slabOpeningMode:[`none`,`destination`]},"stair-segment":{segmentType:[`stair`,`landing`],attachmentSide:[`front`,`left`,`right`]},door:{doorType:[`hinged`,`double`,`french`,`folding`,`pocket`,`barn`,`sliding`,`garage-sectional`,`garage-rollup`,`garage-tiltup`],doorCategory:[`interior`,`garage`],trackStyle:[`none`,`visible`,`pocket`,`overhead`]},window:{windowType:[`fixed`,`sliding`,`casement`,`awning`,`hopper`,`single-hung`,`double-hung`,`bay`,`bow`,`louvered`]},shelf:{style:[`wall-shelf`,`bookshelf`,`open-rack`,`cubby`],bracketStyle:[`minimal`,`industrial`,`hidden`]},cabinet:{runTier:[`base`,`wall`,`tall`],frontStyle:[`slab`,`shaker`,`raised-arch`],compartmentType:[`shelf`,`drawer`,`door`,`sink`,`oven`,`microwave`,`dishwasher`,`cooktop-gas`,`cooktop-induction`,`pull-out-pantry`,`fridge-single`,`fridge-double`,`fridge-top-freezer`,`fridge-bottom-freezer`,`hood-pyramid`,`hood-curved-glass`]},"cabinet-module":{frontStyle:[`slab`,`shaker`,`raised-arch`]},column:{style:[`plain`,`faceted`,`fluted`,`lathe-turned`,`dravidian-carved`,`cluster`],crossSection:[`round`,`square`,`rectangular`,`octagonal`,`sixteen-sided`],shaftProfile:[`straight`,`tapered`,`bulged`,`baluster`,`hourglass`],shaftDetail:[`none`,`fluted`,`spiral`,`panelled`,`lathe-turned`]},fence:{style:[`slat`,`rail`,`privacy`,`horizontal`],baseStyle:[`floating`,`grounded`],postCap:[`none`,`flat`,`pyramid`]},"roof-segment":{roofType:[`hip`,`gable`,`shed`,`gambrel`,`dutch`,`mansard`,`flat`]},skylight:{skylightType:[`flat`,`walk-on`,`lantern`,`opening`,`sliding`],openingSide:[`top`,`bottom`,`left`,`right`],slideDirection:[`x`,`z`]},elevator:{doorStyle:[`center-opening`,`single-left`,`single-right`],doorPanelStyle:[`glass-frame`,`solid-panel`,`segmented-panel`],shaftStyle:[`solid`,`glass`]},"box-vent":{style:[`box`,`cap`,`dome`]},"ridge-vent":{style:[`standard`,`shingled`,`metal`]},"turbine-vent":{style:[`globe`,`cylinder`]},cupola:{roofStyle:[`dome`,`pyramid`]},"eyebrow-vent":{style:[`scoop`,`half-round`,`slant-box`]},gutter:{profile:[`k-style`,`half-round`,`box`],hangerStyle:[`strap`,`none`]},chimney:{bodyShape:[`square`,`round`],capStyle:[`none`,`sloped`,`flat`,`stepped`]},"solar-panel":{mountType:[`flush`,`tilted`]},"duct-segment":{shape:[`round`,`rect`,`oval`],material:[`sheet-metal`,`spiral`,`flex`,`duct-board`],system:[`supply`,`return`]},"duct-fitting":{fittingType:[`elbow`,`tee`,`cross`,`reducer`,`transition`],shape:[`round`,`rect`,`oval`]},"duct-terminal":{terminalType:[`supply-register`,`diffuser`,`return-grille`],mountType:[`floor`,`ceiling`,`wall`]},"hvac-equipment":{equipmentType:[`furnace`,`air-handler`,`condenser`]},"pipe-fitting":{fittingType:[`elbow`,`wye`,`sanitary-tee`,`cross`],material:[`pvc`,`abs`,`cast-iron`],system:[`waste`,`vent`]},"pipe-segment":{material:[`pvc`,`abs`,`cast-iron`],system:[`waste`,`vent`]},"pipe-trap":{material:[`pvc`,`abs`,`cast-iron`]}},hc={site:{surfaceType:[`polygon`,`terrain`]},item:{attachTo:[`wall`,`wall-side`,`ceiling`],assetSource:[`library`,`community`,`mine`],side:[`front`,`back`]},wall:{treatmentSide:[`interior`,`exterior`,`both`],faceSide:[`interior`,`exterior`,`unknown`]},"cabinet-module":{cabinetType:[`base`,`tall`],moduleKind:[`standard`,`corner-filler`],openSide:[`left`,`right`]},dormer:{roofType:[`hip`,`gable`,`shed`,`gambrel`,`dutch`,`mansard`,`flat`],windowShape:[`rectangle`,`rounded`,`arch`]},downspout:{shape:[`auto`,`round`,`rect`],strapStyle:[`band`,`none`],terminal:[`splash`,`kickout`,`straight`]},"duct-terminal":{collarShape:[`round`,`rect`,`oval`]},"hvac-equipment":{supplyShape:[`round`,`rect`,`oval`],returnShape:[`round`,`rect`,`oval`]}},gc={item:{controlKind:[`toggle`,`slider`,`temperature`],effectKind:[`animation`,`light`],roofFace:[`front`,`back`,`right`,`left`]},cabinet:{handleStyle:[`none`,`bar`,`cutout`,`hole`,`knob`],handlePosition:[`auto`,`top`,`center`],frontOverlay:[`full`,`inset`],barLedgeEdge:[`back`,`left`,`right`]},column:{panelShape:[`rectangle`,`arched`,`diamond`],baseStyle:[`none`,`simple-square`,`round-rings`,`square-plinth`,`stepped-square`,`lotus`,`ribbed-lotus`,`panelled-pedestal`],capitalStyle:[`none`,`simple`,`simple-slab`,`rounded`,`stepped`,`doric`,`volute`,`ionic-volute`,`leaf-carved`,`corinthian-leaf`,`south-indian-bracket`,`wood-bracket`],ringPlacement:[`ends`,`even`,`top`,`bottom`],carvingPlacement:[`shaft`,`base`,`capital`,`all`],supportStyle:[`vertical`,`a-frame`,`y-frame`,`v-frame`,`x-brace`,`k-brace`,`single-strut`,`tripod`,`trestle`,`portal-frame`,`box-frame`]},door:{segmentType:[`panel`,`glass`,`empty`],roofFace:[`front`,`back`,`right`,`left`],swingSide:[`left`,`right`],swingDirection:[`inward`,`outward`],openingShape:[`rectangle`,`rounded`,`arch`]},window:{roofFace:[`front`,`back`,`right`,`left`],openingShape:[`rectangle`,`rounded`,`arch`],hungDirection:[`up`,`down`],casementStyle:[`single`,`french`]},wall:{trimProfile:[`flat`,`bevel`,`round`,`cove`,`ogee`,`stepped`]},chimney:{flueShape:[`round`,`square`],shoulderStyle:[`none`,`tapered`,`corbeled`],bandStyle:[`none`,`single`,`double`],cricketStyle:[`none`,`simple`],cricketSide:[`front`,`back`],panelStyle:[`none`,`rectangular`]},gutter:{hangerStyle:[`strap`,`none`]},downspout:{shape:[`auto`,`round`,`rect`],strapStyle:[`band`,`none`],terminal:[`splash`,`kickout`,`straight`]}},_c={wall:{thickness:.1},item:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},shelf:{position:[0,0,0],rotation:[0,0,0],width:1.2,depth:.3,thickness:.04,height:.9,style:`wall-shelf`,rows:1,columns:1},stair:{position:[0,0,0],rotation:0,stairType:`straight`,width:1,totalRise:2.5,stepCount:10,innerRadius:.9,sweepAngle:`Math.PI / 2`},"stair-segment":{position:[0,0,0],rotation:0,segmentType:`stair`,width:1,length:3,height:2.5,stepCount:10},door:{position:[0,0,0],rotation:[0,0,0],width:.9,height:2.1,doorType:`hinged`},window:{position:[0,0,0],rotation:[0,0,0],width:1.5,height:1.5,windowType:`fixed`},column:{position:[0,0,0],rotation:0,style:`plain`,crossSection:`round`,height:2.5},fence:{height:1.8,thickness:.08,style:`slat`},elevator:{position:[0,0,0],rotation:0,width:1.84,depth:1.84},"roof-segment":{position:[0,0,0],rotation:0,roofType:`gable`,width:8,depth:6,pitch:40},slab:{elevation:.05,autoFromWalls:!1},ceiling:{height:2.5,autoFromWalls:!1},zone:{color:`#3b82f6`}},vc={site:{children:[]},building:{},level:{level:0},roof:{position:[0,0,0],rotation:0,children:[]},"cabinet-module":{position:[0,0,0],rotation:0,width:.6,depth:.58,cabinetType:`base`,moduleKind:`standard`},cabinet:{position:[0,0,0],rotation:0,width:.6,depth:.58,runTier:`base`,children:[]},scan:{position:[0,0,0],scale:1,opacity:100},guide:{position:[0,0,0],scale:1,opacity:50},spawn:{position:[0,0,0],rotation:0},"box-vent":{position:[0,0,0],rotation:0,width:.4,depth:.4,height:.15},"ridge-vent":{position:[0,0,0],rotation:0,length:2,width:.3,height:.1},"turbine-vent":{position:[0,0,0],rotation:0,diameter:.32,height:.42,vaneCount:20},cupola:{position:[0,0,0],rotation:0,width:.8,depth:.8,height:1},"eyebrow-vent":{position:[0,0,0],rotation:0,width:.5,depth:.6,height:.3},gutter:{position:[0,0,0],rotation:0,length:2,size:.13,thickness:.006},chimney:{position:[0,0,0],rotation:0,width:.6,depth:.6,heightAboveRidge:1},"solar-panel":{position:[0,0,0],rotation:0,rows:2,columns:3,panelWidth:1,panelHeight:1.65},skylight:{position:[0,0,0],rotation:0,skylightType:`flat`},dormer:{position:[0,0,0],rotation:0},downspout:{position:[0,0,0],length:2.5,diameter:.07,shape:`auto`},"duct-segment":{diameter:6,width:14,height:8,shape:`round`},"duct-fitting":{fittingType:`elbow`,shape:`round`,width:14,height:8,angle:90},"duct-terminal":{position:[0,0,0],rotation:0,terminalType:`supply-register`,mountType:`floor`,width:.3,depth:.15},"hvac-equipment":{position:[0,0,0],rotation:0,equipmentType:`furnace`,width:.56,depth:.71,height:1.1},lineset:{suctionDiameter:.875,liquidDiameter:.375,insulated:!0},"liquid-line":{diameter:.375},"pipe-segment":{diameter:2,material:`pvc`,system:`waste`},"pipe-fitting":{fittingType:`elbow`,angle:90,diameter:2,material:`pvc`,system:`waste`},"pipe-trap":{position:[0,0,0],rotation:0,diameter:2,material:`pvc`}},yc={building:[`site`],level:[`building`],elevator:[`building`],wall:[`level`],fence:[`level`],column:[`level`],cabinet:[`level`,`cabinet`,`cabinet-module`],"cabinet-module":[`cabinet`,`cabinet-module`],item:[`level`,`slab`,`ceiling`,`item`,`shelf`,`wall`,`roof-segment`],zone:[`level`],slab:[`level`],ceiling:[`level`],roof:[`level`],"roof-segment":[`roof`],shelf:[`level`,`item`,`shelf`],stair:[`level`],"stair-segment":[`stair`],window:[`wall`,`roof-segment`],door:[`wall`,`roof-segment`],"box-vent":[`roof-segment`],"ridge-vent":[`roof-segment`],"turbine-vent":[`roof-segment`],cupola:[`roof-segment`],"eyebrow-vent":[`roof-segment`],gutter:[`roof-segment`],chimney:[`roof-segment`],"solar-panel":[`roof-segment`],skylight:[`roof-segment`],dormer:[`roof-segment`],downspout:[`roof-segment`],"duct-segment":[`level`],"duct-fitting":[`level`],"duct-terminal":[`level`],"hvac-equipment":[`level`],lineset:[`level`],"liquid-line":[`level`],"pipe-segment":[`level`],"pipe-fitting":[`level`],"pipe-trap":[`level`]},bc={wall:{space:`ancestor Level XZ`,positionFields:[`start`,`end`,`curveOffset`],rotationFields:[],hosted:`not-applicable`},fence:{space:`ancestor Level XZ`,positionFields:[`start`,`end`],rotationFields:[],hosted:`not-applicable`},zone:{space:`ancestor Level polygon XZ`,positionFields:[`polygon`],rotationFields:[],hosted:`not-applicable`},slab:{space:`ancestor Level polygon XZ`,positionFields:[`polygon`,`holes`],rotationFields:[],hosted:`hosts item children`},ceiling:{space:`ancestor Level polygon XZ`,positionFields:[`polygon`,`holes`],rotationFields:[],hosted:`hosts ceiling items`},item:{space:`parent-local; resolved through item/shelf/wall/level hosts`,positionFields:[`position`],rotationFields:[`rotation[1]`],hosted:`wall-side uses wall tangent/normal; shelf/item compose parent transform`},shelf:{space:`parent-local XZ`,positionFields:[`position[0]`,`position[2]`],rotationFields:[`rotation[1]`],hosted:`children are shelf-local items`},stair:{space:`ancestor Level XZ`,positionFields:[`position[0]`,`position[2]`],rotationFields:[`rotation`],hosted:`stair-segment children are parent-emitted`},"stair-segment":{space:`stair-local cumulative chain`,positionFields:[`position`],rotationFields:[`rotation`,`attachmentSide`],hosted:`parent stair walks segment siblings cumulatively`},door:{space:`wall-distance or roof-face-local`,positionFields:[`position`,`wallId`,`roofSegmentId`,`roofFace`],rotationFields:[`rotation`],hosted:`wall/roof face defines world frame`},window:{space:`wall-distance or roof-face-local`,positionFields:[`position`,`wallId`,`roofSegmentId`,`roofFace`],rotationFields:[`rotation`],hosted:`wall/roof face defines world frame`},"roof-segment":{space:`roof-local`,positionFields:[`position`,`width`,`depth`],rotationFields:[`rotation`],hosted:`parent roof supplies frame`},"box-vent":{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host frame`},"ridge-vent":{space:`roof-segment-local ridge line`,positionFields:[`position`,`length`],rotationFields:[`rotation`],hosted:`roof ridge host frame`},"turbine-vent":{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host frame`},cupola:{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host frame`},"eyebrow-vent":{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host frame`},gutter:{space:`roof-segment edge-local`,positionFields:[`position`,`length`,`offset`],rotationFields:[`rotation`],hosted:`roof edge host`},chimney:{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host and cutout`},"solar-panel":{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host frame`},skylight:{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment opening frame`},dormer:{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host/cutout`},downspout:{space:`roof-segment/gutter outlet-derived`,positionFields:[`position`,`outlet`],rotationFields:[],hosted:`host gutter/roof segment determines placement`},"duct-segment":{space:`Level route points`,positionFields:[`points`],rotationFields:[`roll`],hosted:`not-applicable`},"pipe-segment":{space:`Level route points`,positionFields:[`points`],rotationFields:[],hosted:`not-applicable`},lineset:{space:`Level route points`,positionFields:[`points`],rotationFields:[],hosted:`not-applicable`},"liquid-line":{space:`Level route points`,positionFields:[`points`],rotationFields:[],hosted:`not-applicable`}},xc={wall:[`door`,`window`,`item`],ceiling:[`item`],cabinet:[`cabinet-module`],roof:[`roof-segment`],stair:[`stair-segment`],shelf:[`item`]},Sc=e=>{let t={schemaRecognition:`partial`,rawDataPreservation:`complete`,levelResolution:`partial`,transformResolution:`none`,floorplanRendering:`none`,inspectorSupport:`partial`,diagnosticSupport:`partial`,testCoverage:`none`,overallStatus:`parsed-not-rendered`,evidence:{files:[`src/parser/parse.ts`,`src/main.tsx`],functions:[`parseProject`,`objectsOnLevel`],tests:[]}};return[`site`,`building`,`level`].includes(e)?{...t,levelResolution:`not-applicable`,transformResolution:`not-applicable`,floorplanRendering:`intentionally-hidden`,overallStatus:`parsed-container`}:[`scan`,`guide`,`spawn`].includes(e)?{...t,floorplanRendering:`intentionally-hidden`,overallStatus:`parsed-intentionally-hidden`}:e===`item`?{...t,levelResolution:`complete`,transformResolution:`complete`,floorplanRendering:`exact`,diagnosticSupport:`complete`,testCoverage:`complete`,overallStatus:`supported-exact`,evidence:{files:[`src/geometry/transform.ts`,`src/main.tsx`],functions:[`resolveItemPlanTransform`,`Furniture`],tests:[`src/geometry/geometry.test.ts`]}}:e===`wall`?{...t,levelResolution:`complete`,transformResolution:`not-applicable`,floorplanRendering:`pascal-equivalent`,testCoverage:`complete`,overallStatus:`supported-pascal-equivalent`,evidence:{files:[`src/geometry/walls`,`src/main.tsx`],functions:[`buildExperimentalWalls`,`Wall`],tests:[`src/geometry/walls/walls.test.ts`]}}:e===`shelf`?{...t,levelResolution:`complete`,transformResolution:`complete`,floorplanRendering:`pascal-equivalent`,testCoverage:`complete`,overallStatus:`supported-pascal-equivalent`,evidence:{files:[`src/geometry/shelf.ts`,`src/main.tsx`],functions:[`resolveShelfPlanTransform`,`Shelf`],tests:[`src/geometry/shelf.test.ts`]}}:e===`stair`?{...t,levelResolution:`complete`,transformResolution:`complete`,floorplanRendering:`pascal-equivalent`,testCoverage:`complete`,overallStatus:`partially-supported`,evidence:{files:[`src/geometry/spiral-stair.ts`,`src/geometry/stairs.ts`,`src/main.tsx`],functions:[`buildSpiralStairPlanGeometry`,`buildStraightStairPlanGeometry`,`buildCurvedStairPlanGeometry`,`Stair`],tests:[`src/geometry/spiral-stair.test.ts`,`src/geometry/stairs.test.ts`]}}:e===`stair-segment`?{...t,floorplanRendering:`parent-emitted`,overallStatus:`parsed-parent-emitted`,evidence:{files:[`src/geometry/stairs.ts`,`src/main.tsx`,`src/coverage/renderedNodeRegistry.ts`],functions:[`buildStraightStairPlanGeometry`,`Stair`,`collectCurrentRenderRegistry`],tests:[`src/geometry/stairs.test.ts`,`src/coverage/coverage.test.ts`]}}:e===`slab`?{...t,levelResolution:`complete`,transformResolution:`not-applicable`,floorplanRendering:`pascal-equivalent`,testCoverage:`complete`,overallStatus:`supported-pascal-equivalent`,evidence:{files:[`src/geometry/slab.ts`,`src/main.tsx`],functions:[`buildSlabPlanGeometry`,`Slab`],tests:[`src/geometry/slab.test.ts`,`src/coverage/coverage.test.ts`]}}:e===`ceiling`?{...t,floorplanRendering:`intentionally-hidden`,overallStatus:`parsed-intentionally-hidden`,evidence:{files:[`src/coverage/auditSceneCoverage.ts`,`src/coverage/renderedNodeRegistry.ts`],functions:[`auditSceneCoverage`,`collectCurrentRenderRegistry`],tests:[`src/coverage/coverage.test.ts`]}}:e===`zone`?{...t,levelResolution:`complete`,transformResolution:`not-applicable`,floorplanRendering:`pascal-equivalent`,overallStatus:`supported-pascal-equivalent`,evidence:{files:[`src/main.tsx`],functions:[`Polygon`],tests:[]}}:e===`door`||e===`window`?{...t,levelResolution:`complete`,transformResolution:`partial`,floorplanRendering:`demo-custom-symbol`,overallStatus:`partially-supported`,evidence:{files:[`src/geometry/transform.ts`,`src/main.tsx`],functions:[`resolveWallOpeningTransform`,`Opening`],tests:[]}}:t},Cc=uc.map(e=>{let t=e===`cabinet-module`?`cabinet`:e,n=`packages/core/src/schema/nodes/${t}.ts`,r=`packages/nodes/src/${t}/definition.ts`,i={...mc[e]??{},...hc[e]??{},...gc[e]??{}},a=bc[e],o={..._c[e]??{},...vc[e]??{}},s=[...new Set([`parentId`,`children`,...Object.keys(o),...Object.keys(i),...a?.positionFields??[],...a?.rotationFields??[]])];return{kind:e,upstream:{repository:cc,commit:lc,schemaPath:n,definitionPath:r,...!dc.has(e)&&{floorplanPath:`packages/nodes/src/${t}/floorplan.ts`},...!fc.has(e)&&{rendererPath:`packages/nodes/src/${t}/renderer.tsx`}},classification:{category:pc[e][0],expectedVisibilityStrategy:pc[e]},schema:{schemaVersion:`fixed-commit-source`,discriminators:[`type`,...Object.keys(i)],variants:Object.values(i)[0]??[],importantEnums:i,requiredFields:[`id`,`type`],optionalFields:s,defaultedFields:o},hierarchy:{allowedParentKinds:yc[e]??`unknown-from-reviewed-source`,allowedChildKinds:xc[e]??[],hosts:xc[e]??[],...e===`stair-segment`&&{parentEmittedBy:`stair`}},coordinates:{coordinateSpace:a?.space??`unknown-from-reviewed-source`,positionFields:a?.positionFields??[],rotationFields:a?.rotationFields??[],hostedCoordinateMeaning:a?.hosted??`unknown-from-reviewed-source`},pascalCapabilities:{hasPascalFloorplan:!dc.has(e),hasPascal3DRenderer:!fc.has(e),hasGeometryBuilder:`unknown-from-reviewed-source`,hasFloorplanLevelData:![`site`,`building`,`level`].includes(e)&&`unknown-from-reviewed-source`,floorplanDependsOnParent:pc[e].includes(`hosted`)||pc[e].includes(`parent-emitted`),floorplanDependsOnSiblings:e===`stair-segment`||e===`cabinet-module`},currentDemoStatus:Sc(e),reviewEvidence:[n,r,...dc.has(e)?[]:[`packages/nodes/src/${t}/floorplan.ts`]]}});Object.fromEntries(Cc.map(e=>[e.kind,e.currentDemoStatus]));var wc={stair:{spiral:`supported-demo-symbol`,curved:`supported-pascal-equivalent`,straight:`supported-pascal-equivalent`},shelf:{"wall-shelf":`supported-pascal-equivalent`,bookshelf:`supported-pascal-equivalent`,"open-rack":`supported-pascal-equivalent`,cubby:`supported-pascal-equivalent`},door:{hinged:`partially-supported`,double:`partially-supported`,french:`partially-supported`,folding:`partially-supported`,pocket:`partially-supported`,barn:`partially-supported`,sliding:`partially-supported`,"garage-sectional":`partially-supported`,"garage-rollup":`partially-supported`,"garage-tiltup":`partially-supported`},window:{fixed:`partially-supported`,sliding:`partially-supported`,casement:`partially-supported`,awning:`partially-supported`,hopper:`partially-supported`,"single-hung":`partially-supported`,"double-hung":`partially-supported`,bay:`partially-supported`,bow:`partially-supported`,louvered:`partially-supported`}},Tc=class{records=new Map;register(e){this.records.set(e.nodeId,e)}get(e){return this.records.get(e)}all(){return[...this.records.values()]}},Ec=e=>e.type===`stair`?e.stairType:e.type===`door`?e.doorType:e.type===`window`?e.windowType:e.type===`shelf`?e.style:void 0;function Dc(e,t={}){let n=new Tc;for(let r of Object.values(e)){if([`site`,`building`,`level`,`scan`,`guide`,`spawn`].includes(r.type)){n.register({nodeId:r.id,kind:r.type,variant:Ec(r),renderStrategy:`intentionally-hidden`});continue}if(r.type===`ceiling`){n.register({nodeId:r.id,kind:r.type,renderStrategy:`intentionally-hidden`});continue}if(r.type===`slab`&&Go(r)){n.register({nodeId:r.id,kind:r.type,renderStrategy:r.visible===!1?`intentionally-hidden`:t.slabs===!1?`hidden-by-layer-toggle`:`self`});continue}if(r.type===`wall`&&Array.isArray(r.start)&&Array.isArray(r.end))n.register({nodeId:r.id,kind:r.type,renderStrategy:`self`});else if(r.type===`zone`&&Array.isArray(r.polygon))n.register({nodeId:r.id,kind:r.type,renderStrategy:`self`});else if(r.type===`item`&&Ja(r)&&Xa(r.id,e).status===`ok`)n.register({nodeId:r.id,kind:r.type,renderStrategy:`self`});else if(r.type===`shelf`&&jo(r)&&Mo(r.id,e).status===`ok`)n.register({nodeId:r.id,kind:r.type,variant:Ec(r),renderStrategy:`self`});else if((r.type===`door`||r.type===`window`)&&eo(r,e))n.register({nodeId:r.id,kind:r.type,variant:Ec(r),renderStrategy:`self`});else if(r.type===`stair`&&es(r,e))n.register({nodeId:r.id,kind:r.type,variant:r.stairType??`straight`,renderStrategy:t.stairs===!1?`hidden-by-layer-toggle`:`self`});else if(r.type===`stair-segment`){let i=e[r.parentId??``];i?.type===`stair`&&es(i,e)&&n.register({nodeId:r.id,kind:r.type,emittedByNodeId:i.id,renderStrategy:t.stairs===!1?`hidden-by-layer-toggle`:`parent-emitted`})}}return n}var Oc=e=>e.type===`stair`?e.stairType:e.type===`door`?e.doorType??`hinged`:e.type===`window`?e.windowType??`fixed`:e.type===`shelf`?e.style??`wall-shelf`:void 0,kc=(e,t)=>{if(e.type===`item`&&!Ja(e))return`item dimensions/scale 无效`;if(e.type===`shelf`&&!jo(e))return`shelf dimensions 无效`;if(e.type===`wall`){if(!Array.isArray(e.start)||!Array.isArray(e.end))return`wall endpoints 缺失`;if(Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1])<1e-9)return`wall 长度为零`}if(e.type===`stair`&&!es(e,t))return`stair 关键几何无效`;if((e.type===`door`||e.type===`window`)&&e.width!==void 0&&(!Number.isFinite(e.width)||e.width<=0))return`${e.type} width 无效`};function Ac(e,t=[],n={}){let r=new Set(uc),i=Dc(e,n),a=Object.values(e).map(t=>{let n=Cc.find(e=>e.kind===t.type),r=Oc(t),a=Ga(t.id,e),o=i.get(t.id),s=kc(t,e),c,l;return n?s?(c=`invalid-data`,l=s):o?.renderStrategy===`intentionally-hidden`?(c=n.classification.expectedVisibilityStrategy.includes(`container`)?`parsed-container`:`parsed-intentionally-hidden`,l=t.type===`ceiling`?`Ceiling数据用于顶面/天花视图，不在当前平面布置图默认渲染。`:`按当前视图策略正常不独立绘制`):o?.renderStrategy===`hidden-by-layer-toggle`?(c=`parsed-intentionally-hidden`,l=`图层被用户关闭，未参与当前画布绘制`):o?.renderStrategy===`parent-emitted`?(c=`parsed-parent-emitted`,l=`由父节点 ${o.emittedByNodeId} 输出`):o?(c=(r&&t.type in wc?wc[t.type]?.[r]:void 0)??n.currentDemoStatus.overallStatus,l=`实际登记为 ${o.renderStrategy} 渲染`):n.classification.expectedVisibilityStrategy.includes(`container`)?(c=`parsed-container`,l=`容器节点正常不独立绘制`):n.classification.expectedVisibilityStrategy.includes(`parent-emitted`)?(c=`parsed-not-rendered`,l=`期望由父节点输出，但当前没有父级渲染登记`):(c=r&&t.type in wc?wc[t.type]?.[r]??`parsed-not-rendered`:`parsed-not-rendered`,l=c===`partially-supported`?`当前 variant 仅有简化表达且本节点未满足渲染条件`:`${t.type}${r?`.`+r:``} 已解析但没有实际渲染登记`):(c=`unknown-plugin-node`,l=`不属于固定 Pascal Core 43-kind；缺少对应插件 Schema`),{nodeId:t.id,kind:t.type,variant:r,ancestorLevelId:a.levelId,parentChain:a.sourceNodeIds,sourcePath:`nodes.${t.id}`,schemaStatus:n?.currentDemoStatus.schemaRecognition??`none`,transformStatus:a.error?`none`:n?.currentDemoStatus.transformResolution??`none`,expectedVisibility:n?.classification.expectedVisibilityStrategy??[`unknown-plugin`],actualRenderStatus:o?.renderStrategy??`none`,overallStatus:c,reason:l,evidence:n?.currentDemoStatus.evidence??{files:[],functions:[],tests:[]}}}),o=(...e)=>a.filter(t=>e.includes(t.overallStatus)).length,s=a.reduce((e,t)=>((e[t.kind]??=[]).push(t),e),{}),c=a.reduce((e,t)=>{let n=`${t.kind}.${t.variant??`(none)`}`;return e[n]=(e[n]??0)+1,e},{}),l=a.reduce((e,n)=>(n.overallStatus===`parsed-not-rendered`?e.push({severity:`error`,code:`parsed-not-rendered`,message:n.reason,nodeId:n.nodeId,sourcePath:n.sourcePath}):n.overallStatus===`invalid-data`?e.push({severity:`error`,code:`invalid-data`,message:n.reason,nodeId:n.nodeId,sourcePath:n.sourcePath}):n.overallStatus===`partially-supported`?e.push({severity:`warning`,code:`partially-supported`,message:n.reason,nodeId:n.nodeId,sourcePath:n.sourcePath}):n.overallStatus===`unknown-plugin-node`&&e.push({severity:`warning`,code:`unknown-plugin-node`,message:`${n.reason}; installedPlugins=${JSON.stringify(t)}`,nodeId:n.nodeId,sourcePath:n.sourcePath}),e),[]);return{summary:{totalNodes:a.length,builtInNodes:a.filter(e=>r.has(e.kind)).length,unknownPluginNodes:o(`unknown-plugin-node`),fullySupportedNodes:o(`supported-exact`,`supported-pascal-equivalent`,`supported-demo-symbol`),partiallySupportedNodes:o(`partially-supported`),parsedNotRenderedNodes:o(`parsed-not-rendered`),invalidNodes:o(`invalid-data`)},entries:a,byKind:s,byVariant:c,missingRenderers:a.filter(e=>e.overallStatus===`parsed-not-rendered`),unknownKinds:[...new Set(a.filter(e=>e.overallStatus===`unknown-plugin-node`).map(e=>e.kind))],installedPlugins:t,renderedRegistry:i.all(),diagnostics:l}}var jc=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),W=o(((e,t)=>{t.exports=jc()}))(),Mc={images:!0,boxes:!1,centers:!1,axes:!1,names:!1,zones:!0,slabs:!0,walls:!0,shelves:!0,stairs:!0,openings:!0,dimensions:!0},Nc={minX:-5,minZ:-5,width:10,height:10},Pc=90,Fc=(e,t)=>t===`millimeters`?`${Gs(e,t)} mm`:Gs(e,t);function Ic(){let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)(`未导入文件`),[i,a]=(0,_.useState)([{id:1,levelId:``,viewBox:Nc,rotation:Pc}]),[o,s]=(0,_.useState)(2),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)([]),[g,v]=(0,_.useState)(`off`),[b,x]=(0,_.useState)(`millimeters`),[S,C]=(0,_.useState)(0),[w,ee]=(0,_.useState)(Mc),T=(0,_.useRef)(null),E=(0,_.useRef)(1),D=e?.nodes||{},te=Object.values(D).filter(e=>e.type===`level`);(0,_.useEffect)(()=>{let e=e=>{e.key===`Escape`&&v(`off`)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]),(0,_.useEffect)(()=>ec(()=>C(e=>e+1)),[]);let ne=(e,n)=>{try{let i=Va(JSON.parse(e));i.diagnostics=[...i.diagnostics,...io(i.nodes)];let o=Object.values(i.nodes).find(e=>e.type===`level`)?.id||``;t(i),r(n),l(null),d(null),p(null),h([]),v(`off`),E.current=1,a([{id:1,levelId:o,viewBox:zc(i.nodes,o,!0),rotation:Pc}]),s(2)}catch{t({nodes:{},raw:null,diagnostics:[{severity:`error`,code:`invalid_json`,message:`无法解析 JSON 文件`}]})}};(0,_.useEffect)(()=>{ne(y,`reference-layout.json`)},[]);let O=(e,t)=>a(n=>n.map(n=>n.id===e?{...n,...t}:n)),k=()=>{let e=i[0]?.levelId||te[0]?.id||``;a(t=>[...t,{id:o,levelId:e,viewBox:zc(D,e,w.dimensions),rotation:Pc}]),s(e=>e+1)},A=e=>a(t=>t.length>1?t.filter(t=>t.id!==e):t),j=(0,_.useMemo)(()=>Object.values(D).filter(e=>e.type===`level`).flatMap(e=>Es(D,e.id).diagnostics),[D]),re=(0,_.useMemo)(()=>sc(D),[D,S]),M=(0,_.useMemo)(()=>Ac(D,Array.isArray(e?.raw?.installedPlugins)?e.raw.installedPlugins:[],w),[D,e,w]),N=(0,_.useMemo)(()=>e?[...e.diagnostics,...al(D),...M.diagnostics,...j,...re]:[],[e,D,M,j,re]),ie=e=>{let t=!w[e];ee(n=>e===`images`?{...n,images:t,shelves:t}:e===`centers`?{...n,centers:t,axes:t}:{...n,[e]:t}),e===`dimensions`&&a(e=>e.map(e=>({...e,viewBox:zc(D,e.levelId,t)})))};return(0,W.jsxs)(`div`,{className:`app`,children:[(0,W.jsxs)(`header`,{className:`topbar`,children:[(0,W.jsxs)(`div`,{className:`brand`,children:[(0,W.jsx)(`b`,{children:`Pascal Layout Auditor`}),(0,W.jsx)(`span`,{children:`只读 JSON 几何核验`})]}),(0,W.jsxs)(`div`,{className:`actions`,children:[(0,W.jsx)(`button`,{className:`primary`,onClick:()=>T.current?.click(),children:`导入 JSON`}),(0,W.jsx)(`button`,{onClick:()=>ne(y,`reference-layout.json`),children:`加载示例`}),(0,W.jsx)(`input`,{ref:T,hidden:!0,type:`file`,accept:`.json,application/json`,onChange:e=>e.target.files?.[0]?.text().then(t=>ne(t,e.target.files[0].name))}),(0,W.jsx)(`span`,{className:`file`,children:n})]})]}),(0,W.jsxs)(`main`,{className:`workspace`,children:[(0,W.jsxs)(`aside`,{className:`sidebar`,children:[(0,W.jsxs)(`section`,{className:`side-section`,children:[(0,W.jsx)(`div`,{className:`side-heading`,children:(0,W.jsx)(`h2`,{children:`显示图层`})}),(0,W.jsx)(`div`,{className:`visibility`,children:Object.entries({images:`家具模型`,boxes:`物理占地框`,centers:`家具中心`,names:`家具名称`,zones:`Zone`,slabs:`Slab（楼地面）`,walls:`墙体`,openings:`门窗`,stairs:`楼梯`,dimensions:`外围尺寸`}).map(([e,t])=>(0,W.jsxs)(`label`,{children:[(0,W.jsx)(`input`,{type:`checkbox`,checked:w[e],onChange:()=>ie(e)}),t]},e))})]}),(0,W.jsx)(il,{nodes:D}),(0,W.jsx)(nl,{node:c?D[c]:null,nodes:D,viewBox:i[0]?.viewBox||Nc,coverage:M,dimension:u,manualMeasurement:m.find(e=>e.id===f)??null,measurementUnit:b}),(0,W.jsx)(ol,{diagnostics:N}),(0,W.jsx)(sl,{coverage:M})]}),(0,W.jsxs)(`section`,{className:`canvas-workspace`,children:[(0,W.jsxs)(`div`,{className:`canvas-workspace-head`,children:[(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`span`,{className:`eyebrow`,children:`PLAN VIEWS`}),(0,W.jsx)(`h1`,{children:`画布工作区`})]}),(0,W.jsxs)(`div`,{className:`measurement-toolbar`,children:[(0,W.jsxs)(`label`,{children:[`全局单位 `,(0,W.jsxs)(`select`,{value:b,onChange:e=>x(e.target.value),children:[(0,W.jsx)(`option`,{value:`millimeters`,children:`公制（mm / m²）`}),(0,W.jsx)(`option`,{value:`feet-inches`,children:`英制（ft-in / ft²）`})]})]}),(0,W.jsx)(`button`,{className:`measure-toggle ${g===`off`?``:`active`}`,title:`开启后点击两点测量；按一次 Shift 切换正交；Esc 退出`,onClick:()=>v(e=>e===`off`?`aligned`:`off`),children:g===`off`?`测量`:`退出测量`}),(0,W.jsx)(`button`,{className:`primary`,onClick:k,children:`+ 添加画布`})]})]}),(0,W.jsx)(`div`,{className:`canvas-grid count-${Math.min(i.length,4)}`,children:i.map(e=>(0,W.jsx)(G,{canvas:e,nodes:D,levels:te,visibility:w,selectedId:c,measurementMode:g,measurementUnit:b,manualMeasurements:m.filter(t=>t.levelId===(e.levelId||te[0]?.id||``)),selectedManualId:f,onSelect:e=>{l(e),d(null),p(null)},onSelectDimension:e=>{l(null),d(e),p(null)},onCreateMeasurement:e=>{let t={...e,id:`measure-${E.current++}`,createdAt:Date.now()};h(e=>[...e,t]),l(null),d(null),p(t.id)},onSelectManual:e=>{l(null),d(null),p(e)},onDeleteManual:e=>{h(t=>t.filter(t=>t.id!==e)),p(t=>t===e?null:t)},onUpdate:O,onRemove:A,canRemove:i.length>1},e.id))})]})]})]})}function G({canvas:e,nodes:t,levels:n,visibility:r,selectedId:i,onSelect:a,onSelectDimension:o,measurementMode:s,measurementUnit:c,manualMeasurements:l,selectedManualId:u,onCreateMeasurement:d,onSelectManual:f,onDeleteManual:p,onUpdate:m,onRemove:h,canRemove:g}){let _=e.levelId||n[0]?.id||``;return(0,W.jsxs)(`article`,{className:`canvas-card`,children:[(0,W.jsxs)(`div`,{className:`canvas-card-head`,children:[(0,W.jsxs)(`label`,{children:[`楼层`,` `,(0,W.jsx)(`select`,{value:_,onChange:n=>m(e.id,{levelId:n.target.value,viewBox:zc(t,n.target.value,r.dimensions)}),children:n.map(e=>(0,W.jsx)(`option`,{value:e.id,children:e.name||e.id},e.id))})]}),(0,W.jsxs)(`div`,{className:`canvas-tools`,children:[(0,W.jsx)(`button`,{title:`逆时针旋转 90°`,onClick:()=>m(e.id,{rotation:(e.rotation+270)%360}),children:`↶ 90°`}),(0,W.jsx)(`button`,{title:`顺时针旋转 90°`,onClick:()=>m(e.id,{rotation:(e.rotation+90)%360}),children:`↷ 90°`}),(0,W.jsx)(`button`,{onClick:()=>m(e.id,{viewBox:zc(t,_,r.dimensions)}),children:`适配`}),g&&(0,W.jsx)(`button`,{className:`danger`,title:`移除此画布`,onClick:()=>h(e.id),children:`×`})]})]}),(0,W.jsx)(Bc,{nodes:t,levelId:_,viewBox:e.viewBox,rotation:e.rotation,setViewBox:t=>m(e.id,{viewBox:t}),visibility:r,selectedId:i,onSelect:a,onSelectDimension:o,measurementMode:s,measurementUnit:c,manualMeasurements:l,selectedManualId:u,onCreateMeasurement:d,onSelectManual:f,onDeleteManual:p})]})}function Lc(e,t){return Object.values(e).filter(n=>Ga(n.id,e).levelId===t)}function Rc(e,t){return Object.values(e).filter(n=>n.type===`stair`&&n.stairType===`spiral`&&n.toLevelId===t&&Ga(n.id,e).levelId!==t)}function zc(e,t,n=!0){let r=[],i=Lc(e,t),a=new Map(Eo(i.filter(e=>e.type===`wall`)).map(e=>[e.wallId,e]));for(let t of i)if(t.type===`wall`){let e=a.get(t.id);e?.validation.valid&&r.push(...e.footprint.map(e=>({x:e.x,z:e.y})))}else if((t.type===`zone`||t.type===`slab`)&&Array.isArray(t.polygon))for(let e of t.polygon)Array.isArray(e)&&r.push({x:e[0],z:e[2]??e[1]});else if(t.type===`item`){let n=Xa(t.id,e),i=Ja(t);n.status===`ok`&&i&&r.push({x:n.x-i.width/2,z:n.z-i.depth/2},{x:n.x+i.width/2,z:n.z+i.depth/2})}else t.type===`shelf`?r.push(...Po(t,e)):t.type===`stair`&&r.push(...$o(t,e));for(let n of Rc(e,t))r.push(...Bo(n));return n&&t&&r.push(...Fs(Es(e,t))),to(r,1)}function Bc({nodes:e,levelId:t,viewBox:n,rotation:r,setViewBox:i,visibility:a,selectedId:o,onSelect:s,onSelectDimension:c,measurementMode:l,measurementUnit:u,manualMeasurements:d,selectedManualId:f,onCreateMeasurement:p,onSelectManual:m,onDeleteManual:h}){let g=(0,_.useRef)(null),v=(0,_.useRef)(!1),y=(0,_.useRef)(null),b=(0,_.useRef)(null),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(null),[ee,T]=(0,_.useState)(!1),E=Lc(e,t),D=E.filter(e=>e.type===`item`),te=E.filter(e=>e.type===`zone`),ne=E.filter(e=>e.type===`wall`),O=(0,_.useMemo)(()=>Eo(ne),[ne]),k=Rc(e,t),A=(0,_.useMemo)(()=>Es(e,t),[e,t]),j=n.minX+n.width/2,re=n.minZ+n.height/2,M=`${n.minX} ${n.minZ} ${n.width} ${n.height}`,N=(0,_.useMemo)(()=>Bs(e,t),[e,t]),ie=Js(x?.point??null,C?.point??null,ee);(0,_.useEffect)(()=>{S(null),w(null),T(!1)},[l,t]),(0,_.useEffect)(()=>{let e=e=>{e.key===`Shift`&&!e.repeat&&T(e=>!e),e.key===`Escape`&&(S(null),w(null)),(e.key===`Delete`||e.key===`Backspace`)&&f&&(e.preventDefault(),h(f))};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[f,h]);let ae=e=>{let t=b.current?.getScreenCTM();if(!t)return null;let n=new DOMPoint(e.clientX,e.clientY).matrixTransform(t.inverse());return[n.x,n.y]},oe=e=>{let t=ae(e);if(!t)return null;let r=y.current?.clientWidth||1,i=y.current?.clientHeight||1,a=Math.max(n.width/r,n.height/i)*12;return Us(t,N,a)},se=e=>{if(!x){S(e),w(e);return}if(l===`off`)return;let n=Js(x.point,e.point,ee);qs(x.point,e.point,n).valueMeters>5e-4&&p({levelId:t,mode:n,start:x,end:e}),S(null),w(null)};return(0,W.jsxs)(`div`,{className:`plan ${l===`off`?``:`measuring`}`,style:{userSelect:`none`,WebkitUserSelect:`none`},onWheel:e=>{e.preventDefault();let t=e.deltaY<0?.9:1.1,r=y.current?.getScreenCTM();if(!r)return;let a=new DOMPoint(e.clientX,e.clientY).matrixTransform(r.inverse());i(no(n,{x:a.x,z:a.y},t))},onPointerDown:e=>{l!==`off`||e.button!==0||(g.current={x:e.clientX,y:e.clientY,box:n,moved:!1})},onPointerMove:e=>{if(l!==`off`||!g.current)return;let t=e.clientX-g.current.x,n=e.clientY-g.current.y;if(!g.current.moved&&Math.hypot(t,n)<3)return;g.current.moved||(g.current.moved=!0,e.currentTarget.setPointerCapture?.(e.pointerId));let a=ro(t*g.current.box.width/(e.currentTarget.clientWidth||1),n*g.current.box.height/(e.currentTarget.clientHeight||1),r);i({...g.current.box,minX:g.current.box.minX+a.x,minZ:g.current.box.minZ+a.z})},onPointerUp:e=>{g.current&&(g.current?.moved&&(v.current=!0,window.setTimeout(()=>{v.current=!1},0)),g.current=null,e.currentTarget.hasPointerCapture?.(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId))},onPointerCancel:()=>{g.current=null},children:[(0,W.jsxs)(`svg`,{ref:y,viewBox:M,onPointerMove:e=>{if(l!==`off`){let t=oe(e);t&&w(t)}},onPointerLeave:()=>{x||w(null)},onContextMenu:e=>{l!==`off`&&(e.preventDefault(),S(null),w(null))},onClickCapture:e=>{if(v.current){e.preventDefault(),e.stopPropagation(),v.current=!1;return}let t=e.target,n=t.closest(`[data-delete-measurement]`)?.getAttribute(`data-delete-measurement`),r=t.closest(`[data-manual-measurement]`)?.getAttribute(`data-manual-measurement`);if(n||r){e.preventDefault(),e.stopPropagation(),n?h(n):r&&m(r);return}if(l===`off`)return;e.preventDefault(),e.stopPropagation();let i=oe(e);i&&se(i)},onClick:e=>{e.target.closest(`[data-selectable]`)||(s(null),m(null))},children:[(0,W.jsxs)(`defs`,{children:[(0,W.jsx)(`marker`,{id:`arrow-${t}`,markerWidth:`.18`,markerHeight:`.18`,refX:`.16`,refY:`.09`,orient:`auto`,children:(0,W.jsx)(`path`,{d:`M0,0 L.18,.09 L0,.18z`,fill:`#e75c3c`})}),(0,W.jsx)(`marker`,{id:`stair-up`,markerWidth:`.18`,markerHeight:`.18`,refX:`.16`,refY:`.09`,orient:`auto`,children:(0,W.jsx)(`path`,{d:`M0,0 L.18,.09 L0,.18z`,fill:`#171717`})}),(0,W.jsx)(`marker`,{id:`stair-down`,markerWidth:`.18`,markerHeight:`.18`,refX:`.16`,refY:`.09`,orient:`auto`,children:(0,W.jsx)(`path`,{d:`M0,0 L.18,.09 L0,.18z`,fill:`#59635f`})})]}),(0,W.jsx)(`rect`,{x:n.minX,y:n.minZ,width:n.width,height:n.height,fill:`#f7f8f5`}),(0,W.jsxs)(`g`,{ref:b,style:{transform:`rotate(${r}deg)`,transformOrigin:`${j}px ${re}px`,transition:`transform 240ms cubic-bezier(.2,.8,.2,1)`},children:[a.slabs&&E.filter(e=>e.type===`slab`&&e.visible!==!1).map(e=>(0,W.jsx)(Jc,{node:e,selected:o===e.id,onSelect:s},e.id)),a.zones&&te.map(e=>(0,W.jsx)(Hc,{node:e},e.id)),a.walls&&O.map(t=>(0,W.jsx)(Yc,{node:e[t.wallId],footprint:t.footprint,valid:t.validation.valid,diagnosticCodes:t.validation.codes,selected:o===t.wallId,onSelect:s},t.wallId)),a.shelves&&E.filter(e=>e.type===`shelf`).map(t=>(0,W.jsx)(Xc,{node:t,nodes:e,selected:o===t.id,onSelect:s},t.id)),a.openings&&E.filter(e=>e.type===`door`||e.type===`window`).map(t=>(0,W.jsx)(Zc,{node:t,nodes:e,selected:o===t.id,onSelect:s},t.id)),a.stairs&&E.filter(e=>e.type===`stair`).map(t=>(0,W.jsx)(Qc,{node:t,nodes:e,onSelect:s},t.id)),a.stairs&&k.map(e=>(0,W.jsx)($c,{node:e,onSelect:s},`entry-${e.id}`)),D.map(n=>(0,W.jsx)(tl,{node:n,nodes:e,visibility:a,selected:o===n.id,viewRotation:r,markerId:`arrow-${t}`,onSelect:s},n.id)),a.zones&&te.map(e=>(0,W.jsx)(Uc,{node:e,viewRotation:r},`zone-label-${e.id}`)),a.dimensions&&(0,W.jsx)(Wc,{report:A,viewRotation:r,unit:u,onSelect:c}),(0,W.jsx)(Gc,{measurements:d,preview:l!==`off`&&x&&C?{mode:ie,start:x,end:C}:null,unit:u,viewRotation:r,selectedId:f,onSelect:m,onDelete:h}),l!==`off`&&C&&(0,W.jsx)(qc,{snap:C,active:!!x})]})]}),l!==`off`&&(0,W.jsx)(`div`,{className:`measure-hint`,children:x?`${ee?ie===`horizontal`?`水平正交已开启`:`垂直正交已开启`:`自由对齐`} · 点击第二点 · Shift 切换正交 · Esc 退出`:`${ee?`正交已开启`:`正交已关闭`} · 点击第一点 · Shift 切换正交 · Esc 退出`}),(0,W.jsx)(Vc,{rotation:r}),(0,W.jsxs)(`div`,{className:`legend`,children:[Fc(n.width,u),` × `,Fc(n.height,u)]})]})}function Vc({rotation:e}){return(0,W.jsxs)(`div`,{className:`compass`,title:`视图旋转 ${e}°`,children:[(0,W.jsx)(`div`,{className:`compass-arrow`,style:{transform:`rotate(${Pc-e}deg)`},children:`▲`}),(0,W.jsx)(`b`,{children:`N`})]})}function Hc({node:e}){let t=ns(e),n=rs(e);return t.length<3?null:(0,W.jsx)(`polygon`,{points:t.map(e=>`${e.x},${e.z}`).join(` `),fill:n,fillOpacity:`.12`,stroke:n,strokeOpacity:`.32`,strokeWidth:`.03`})}function Uc({node:e,viewRotation:t}){let n=is(e),r=rs(e);return n?(0,W.jsx)(`text`,{x:n.x,y:n.z,className:`zone-label`,fontSize:`.22`,fontWeight:`700`,textAnchor:`middle`,dominantBaseline:`middle`,style:{fill:r,transform:`rotate(${-t}deg)`,transformOrigin:`${n.x}px ${n.z}px`,transition:`transform 240ms cubic-bezier(.2,.8,.2,1)`},stroke:`#ffffff`,strokeWidth:`.035`,strokeOpacity:`.9`,paintOrder:`stroke`,pointerEvents:`none`,children:e.name||`Zone`}):null}function Wc({report:e,viewRotation:t,unit:n,onSelect:r}){let i=`#4b5563`;return(0,W.jsx)(`g`,{className:`exterior-dimensions`,children:Ns(e).map(a=>{let o=Gs(a.valueMeters,n),s=Ps(e,a),c=a.dimensionLayer===`inner-chain`?ss:cs,l=[s.faceStart[0]+a.outwardNormal[0]*c,s.faceStart[1]+a.outwardNormal[1]*c],u=[s.faceEnd[0]+a.outwardNormal[0]*c,s.faceEnd[1]+a.outwardNormal[1]*c],d=[(l[0]+u[0])/2,(l[1]+u[1])/2],f=Math.max(.24,o.length*.105),p=a.valueMeters>f+.16,m=p?d:[u[0]+a.direction[0]*(f/2+.14),u[1]+a.direction[1]*(f/2+.14)],h=Math.min(f/2+.05,a.valueMeters*.4),g=[d[0]-a.direction[0]*h,d[1]-a.direction[1]*h],_=[d[0]+a.direction[0]*h,d[1]+a.direction[1]*h],v=[l[0]+a.outwardNormal[0]*ls,l[1]+a.outwardNormal[1]*ls],y=[u[0]+a.outwardNormal[0]*ls,u[1]+a.outwardNormal[1]*ls],b=[(a.direction[0]+a.outwardNormal[0])*.065,(a.direction[1]+a.outwardNormal[1])*.065],x=Ts(a.direction,t);return(0,W.jsxs)(`g`,{"data-selectable":!0,onClick:()=>r(a),style:{cursor:`pointer`},children:[(0,W.jsx)(`line`,{x1:s.edgeStart[0],y1:s.edgeStart[1],x2:v[0],y2:v[1],stroke:i,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`}),(0,W.jsx)(`line`,{x1:s.edgeEnd[0],y1:s.edgeEnd[1],x2:y[0],y2:y[1],stroke:i,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`}),p?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`line`,{x1:l[0],y1:l[1],x2:g[0],y2:g[1],stroke:i,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`}),(0,W.jsx)(`line`,{x1:_[0],y1:_[1],x2:u[0],y2:u[1],stroke:i,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`})]}):(0,W.jsx)(`line`,{x1:l[0],y1:l[1],x2:m[0]+a.direction[0]*f/2,y2:m[1]+a.direction[1]*f/2,stroke:i,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`}),[l,u].map((e,t)=>(0,W.jsx)(`line`,{x1:e[0]-b[0],y1:e[1]-b[1],x2:e[0]+b[0],y2:e[1]+b[1],stroke:i,strokeWidth:`1.2`,vectorEffect:`non-scaling-stroke`},t)),(0,W.jsx)(`text`,{x:m[0],y:m[1],transform:`rotate(${x} ${m[0]} ${m[1]})`,textAnchor:`middle`,dominantBaseline:`middle`,fontFamily:`DM Mono, monospace`,fontSize:`.18`,fill:i,stroke:`#f7f8f5`,strokeWidth:`.04`,paintOrder:`stroke`,children:o})]},a.id)})})}function Gc({measurements:e,preview:t,unit:n,viewRotation:r,selectedId:i,onSelect:a,onDelete:o}){return(0,W.jsxs)(`g`,{className:`manual-measurements`,children:[e.map(e=>(0,W.jsx)(Kc,{measurement:e,unit:n,viewRotation:r,selected:i===e.id,onSelect:a,onDelete:o},e.id)),t&&(0,W.jsx)(Kc,{measurement:{id:`measurement-preview`,levelId:``,createdAt:0,...t},unit:n,viewRotation:r,selected:!1,preview:!0})]})}function Kc({measurement:e,unit:t,viewRotation:n,selected:r,preview:i=!1,onSelect:a,onDelete:o}){let s=qs(e.start.point,e.end.point,e.mode),c=i?`#d97706`:r?`#e75c3c`:`#246b72`,l=Gs(s.valueMeters,t),u=Ts(s.direction,n),d=[s.normal[0]*.08,s.normal[1]*.08],f=[s.labelPoint[0]+s.normal[0]*.32,s.labelPoint[1]+s.normal[1]*.32];return s.valueMeters<=5e-4?null:(0,W.jsxs)(`g`,{"data-selectable":!i||void 0,"data-manual-measurement":i?void 0:e.id,onClick:t=>{i||(t.stopPropagation(),a?.(e.id))},style:{cursor:i?`crosshair`:`pointer`},children:[s.extensionLines.map((e,t)=>(0,W.jsx)(`line`,{x1:e.start[0],y1:e.start[1],x2:e.end[0],y2:e.end[1],stroke:c,strokeWidth:`1`,strokeDasharray:i?`4 3`:void 0,vectorEffect:`non-scaling-stroke`},t)),(0,W.jsx)(`line`,{x1:s.measurementStart[0],y1:s.measurementStart[1],x2:s.measurementEnd[0],y2:s.measurementEnd[1],stroke:c,strokeWidth:r?`1.8`:`1.2`,strokeDasharray:i?`5 4`:void 0,vectorEffect:`non-scaling-stroke`}),[s.measurementStart,s.measurementEnd].map((e,t)=>(0,W.jsx)(`line`,{x1:e[0]-d[0],y1:e[1]-d[1],x2:e[0]+d[0],y2:e[1]+d[1],stroke:c,strokeWidth:`1.3`,vectorEffect:`non-scaling-stroke`},t)),(0,W.jsx)(`circle`,{cx:e.start.point[0],cy:e.start.point[1],r:`.045`,fill:c}),(0,W.jsx)(`circle`,{cx:e.end.point[0],cy:e.end.point[1],r:`.045`,fill:c}),(0,W.jsx)(`text`,{x:s.labelPoint[0],y:s.labelPoint[1],transform:`rotate(${u} ${s.labelPoint[0]} ${s.labelPoint[1]})`,textAnchor:`middle`,dominantBaseline:`middle`,fontFamily:`DM Mono, monospace`,fontSize:`.18`,fill:c,stroke:`#f7f8f5`,strokeWidth:`.045`,paintOrder:`stroke`,pointerEvents:`none`,children:l}),r&&!i&&(0,W.jsxs)(`g`,{"data-delete-measurement":e.id,onClick:t=>{t.stopPropagation(),o?.(e.id)},style:{cursor:`pointer`},children:[(0,W.jsx)(`circle`,{cx:f[0],cy:f[1],r:`.14`,fill:`#fff`,stroke:`#d84f42`,strokeWidth:`1.4`,vectorEffect:`non-scaling-stroke`}),(0,W.jsx)(`line`,{x1:f[0]-.05,y1:f[1]-.05,x2:f[0]+.05,y2:f[1]+.05,stroke:`#d84f42`,strokeWidth:`1.8`,vectorEffect:`non-scaling-stroke`}),(0,W.jsx)(`line`,{x1:f[0]+.05,y1:f[1]-.05,x2:f[0]-.05,y2:f[1]+.05,stroke:`#d84f42`,strokeWidth:`1.8`,vectorEffect:`non-scaling-stroke`})]})]})}function qc({snap:e,active:t}){let n=e.kind===`free`?`#d97706`:`#16a085`;return(0,W.jsxs)(`g`,{pointerEvents:`none`,children:[(0,W.jsx)(`circle`,{cx:e.point[0],cy:e.point[1],r:t?`.095`:`.075`,fill:`#fff`,stroke:n,strokeWidth:`1.5`,vectorEffect:`non-scaling-stroke`}),(0,W.jsx)(`line`,{x1:e.point[0]-.05,y1:e.point[1],x2:e.point[0]+.05,y2:e.point[1],stroke:n,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`}),(0,W.jsx)(`line`,{x1:e.point[0],y1:e.point[1]-.05,x2:e.point[0],y2:e.point[1]+.05,stroke:n,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`})]})}function Jc({node:e,selected:t,onSelect:n}){let r=Go(e);return r?(0,W.jsx)(`path`,{"data-selectable":!0,d:r.path,fill:t?`#dbe8dc`:`#e8eee8`,fillRule:`evenodd`,clipRule:`evenodd`,stroke:t?`#e75c3c`:`#b5c2b8`,strokeWidth:t?`.04`:`.018`,opacity:`.78`,onClick:()=>n(e.id)}):null}function Yc({node:e,footprint:t,valid:n,diagnosticCodes:r,selected:i,onSelect:a}){return!Array.isArray(e.start)||!Array.isArray(e.end)?null:t?.length&&n?(0,W.jsx)(`polygon`,{"data-selectable":!0,points:t.map(e=>`${e.x},${e.y}`).join(` `),fill:i?`#e75c3c`:`#303a3b`,stroke:`#202929`,strokeWidth:`.018`,vectorEffect:`non-scaling-stroke`,onClick:()=>a(e.id)}):t&&!n?(0,W.jsxs)(`g`,{"data-selectable":!0,"aria-label":`experimental wall diagnostic: ${r?.join(`, `)||`unknown`}`,onClick:()=>a(e.id),children:[(0,W.jsx)(`title`,{children:r?.join(`, `)||`wall_invalid_footprint`}),(0,W.jsx)(`line`,{x1:e.start[0],y1:e.start[1],x2:e.end[0],y2:e.end[1],stroke:`#d95446`,strokeWidth:`.05`}),(0,W.jsx)(`circle`,{cx:e.start[0],cy:e.start[1],r:`.12`,fill:`#d95446`})]}):null}function Xc({node:e,nodes:t,selected:n,onSelect:r}){let i=U(e),a=No(e,t);return!a||!jo(e)?null:(0,W.jsxs)(`g`,{"data-selectable":!0,transform:$a(a),onClick:()=>r(e.id),className:`shelf`,children:[(0,W.jsx)(`rect`,{x:-i.width/2,y:-i.depth/2,width:i.width,height:i.depth,fill:`#d6d3d1`,stroke:n?`#e75c3c`:`#1f2937`,strokeWidth:n?`.045`:`.015`,opacity:`.9`}),Fo(i).map(e=>(0,W.jsx)(`line`,{x1:e,x2:e,y1:-i.depth/2+i.thickness,y2:i.depth/2-i.thickness,stroke:`#1f2937`,strokeWidth:`.012`,opacity:`.7`},e))]})}function Zc({node:e,nodes:t,selected:n,onSelect:r}){let i=eo(e,t);if(!i)return null;let a=Number.isFinite(e.width)?e.width:.9,o=.12,s=i.rotationY*180/Math.PI;if(e.type===`door`){let t=n?`#e75c3c`:`#9b6736`,c=e.doorType??`hinged`,l=c===`double`||c===`french`,u=((Array.isArray(e.rotation)&&Number.isFinite(e.rotation[1])?e.rotation[1]:0)%(Math.PI*2)+Math.PI*2)%(Math.PI*2),d=u>Math.PI/2&&u<Math.PI*3/2,f=e.hingesSide??`left`,p=d?f===`left`?`right`:`left`:f,m=e.swingDirection??`inward`,h=(d?m===`inward`?`outward`:`inward`:m)===`inward`?1:-1,g=(e,r,i,a)=>{let o=Math.abs(r),s=e+r,c=e,l=r*Math.sin(i),u=+(i>=0);return(0,W.jsxs)(_.Fragment,{children:[(0,W.jsx)(`line`,{x1:e,y1:`0`,x2:c,y2:l,stroke:t,strokeWidth:n?`2.4`:`1.7`,vectorEffect:`non-scaling-stroke`}),(0,W.jsx)(`path`,{d:`M ${s} 0 A ${o} ${o} 0 0 ${u} ${c} ${l}`,fill:`none`,stroke:t,strokeWidth:n?`1.6`:`1.1`,strokeDasharray:`5 4`,strokeLinecap:`round`,vectorEffect:`non-scaling-stroke`})]},a)};return(0,W.jsxs)(`g`,{"data-selectable":!0,transform:`translate(${i.x} ${i.z}) rotate(${s})`,onClick:()=>r(e.id),children:[(0,W.jsx)(`rect`,{x:-a/2,y:-.12/2,width:a,height:o,fill:`#f7f8f5`,stroke:t,strokeWidth:n?`.045`:`.025`}),e.openingKind!==`opening`&&(l?(0,W.jsxs)(W.Fragment,{children:[g(-a/2,a/2,h*Math.PI/2,`left`),g(a/2,-a/2,-h*Math.PI/2,`right`)]}):c===`hinged`&&g(p===`left`?-a/2:a/2,p===`left`?a:-a,h*(p===`left`?1:-1)*Math.PI/2,`single`))]})}return(0,W.jsxs)(`g`,{"data-selectable":!0,transform:`translate(${i.x} ${i.z}) rotate(${s})`,onClick:()=>r(e.id),children:[(0,W.jsx)(`rect`,{x:-a/2,y:-.12/2,width:a,height:o,fill:`#f7f8f5`,stroke:n?`#e75c3c`:`#287b8e`,strokeWidth:n?.045:.025}),(0,W.jsx)(`line`,{x1:-a/2,x2:a/2,stroke:`#65a9b8`,strokeWidth:`.025`})]})}function Qc({node:e,nodes:t,onSelect:n}){if(e.stairType===`spiral`){let t=zo(e);return t?(0,W.jsxs)(`g`,{"data-selectable":!0,onClick:()=>n(e.id),children:[(0,W.jsx)(`path`,{d:t.footprintPath,fill:`rgba(255,255,255,.08)`,stroke:`#171717`,strokeWidth:`.025`}),t.treadLines.map((e,n)=>(0,W.jsx)(`line`,{x1:e.start.x,y1:e.start.z,x2:e.end.x,y2:e.end.z,stroke:`#262626`,strokeWidth:n===t.treadLines.length-1?`.035`:`.018`},n)),t.railingPaths.map((e,t)=>(0,W.jsx)(`polyline`,{points:e.map(e=>`${e.x},${e.z}`).join(` `),fill:`none`,stroke:`#171717`,strokeWidth:`.025`},t)),t.centerColumn&&(0,W.jsx)(`circle`,{cx:t.centerColumn.x,cy:t.centerColumn.z,r:Math.max(t.innerRadius*.18,.06),fill:`#d6d3d1`,stroke:`#171717`,strokeWidth:`.02`}),(0,W.jsx)(`line`,{x1:t.upDirection.from.x,y1:t.upDirection.from.z,x2:t.upDirection.to.x,y2:t.upDirection.to.z,stroke:`#171717`,strokeWidth:`.03`,markerEnd:`url(#stair-up)`})]}):null}if(e.stairType===`curved`){let t=Qo(e);return t?(0,W.jsxs)(`g`,{"data-selectable":!0,onClick:()=>n(e.id),children:[(0,W.jsx)(`path`,{d:t.footprintPath,fill:`rgba(255,255,255,.08)`,stroke:`#171717`,strokeWidth:`.025`}),t.treadLines.map((e,n)=>(0,W.jsx)(`line`,{x1:e.start.x,y1:e.start.z,x2:e.end.x,y2:e.end.z,stroke:`#262626`,strokeWidth:n===0||n===t.treadLines.length-1?`.03`:`.018`},n)),(0,W.jsx)(`line`,{x1:t.upDirection.from.x,y1:t.upDirection.from.z,x2:t.upDirection.to.x,y2:t.upDirection.to.z,stroke:`#171717`,strokeWidth:`.03`,markerEnd:`url(#stair-up)`})]}):null}let r=Zo(e,t);return r?(0,W.jsxs)(`g`,{"data-selectable":!0,onClick:()=>n(e.id),children:[r.segments.map(e=>(0,W.jsxs)(`g`,{children:[(0,W.jsx)(`polygon`,{points:e.polygon.map(e=>`${e.x},${e.z}`).join(` `),fill:`rgba(255,255,255,.08)`,stroke:`#171717`,strokeWidth:`.025`}),e.treads.map((e,t)=>(0,W.jsx)(`line`,{x1:e.start.x,y1:e.start.z,x2:e.end.x,y2:e.end.z,stroke:`#262626`,strokeWidth:`.018`},t))]},e.node.id)),(0,W.jsx)(`line`,{x1:r.upDirection.from.x,y1:r.upDirection.from.z,x2:r.upDirection.to.x,y2:r.upDirection.to.z,stroke:`#171717`,strokeWidth:`.03`,fill:`none`,markerEnd:`url(#stair-up)`})]}):null}function $c({node:e,onSelect:t}){let n=Vo(e);return n?(0,W.jsxs)(`g`,{"data-selectable":!0,onClick:()=>t(e.id),children:[(0,W.jsx)(`path`,{d:`M ${n.footprint.map(e=>`${e.x} ${e.z}`).join(` L `)} Z`,fill:`rgba(255,255,255,.02)`,stroke:`#59635f`,strokeWidth:`.025`,strokeDasharray:`.08 .05`}),(0,W.jsx)(`line`,{x1:n.downDirection.from.x,y1:n.downDirection.from.z,x2:n.downDirection.to.x,y2:n.downDirection.to.z,stroke:`#59635f`,strokeWidth:`.03`,markerEnd:`url(#stair-down)`})]}):null}function el(e){let[t,n]=(0,_.useState)(()=>e?tc(e):null);return(0,_.useEffect)(()=>{let t=!1;return n(e?tc(e):null),e&&oc(e).then(e=>{t||n(e)}),()=>{t=!0}},[e]),t}function tl({node:e,nodes:t,visibility:n,selected:r,viewRotation:i,markerId:a,onSelect:o}){let s=Ja(e),c=Xa(e.id,t),l=e.asset?.floorPlanUrl,u=el(l);if(!s||c.status===`error`)return null;let d=Qa(c),f=u&&!u.isFallback?rc({x:u.cropX,y:u.cropY,width:u.cropWidth,height:u.cropHeight},s.width,s.depth):null,p=s.depth/2+.15,m=c.rotationY*180/Math.PI-i;return(0,W.jsxs)(`g`,{"data-selectable":!0,className:`furniture`,transform:$a(d),onClick:()=>o(e.id),children:[n.images&&l&&(u&&f?(0,W.jsx)(`svg`,{x:-s.width/2+f.offsetX,y:-s.depth/2+f.offsetY,width:f.drawWidth,height:f.drawHeight,viewBox:`${u.cropX} ${u.cropY} ${u.cropWidth} ${u.cropHeight}`,preserveAspectRatio:`none`,overflow:`hidden`,children:(0,W.jsx)(`image`,{href:l,x:`0`,y:`0`,width:u.naturalWidth,height:u.naturalHeight,preserveAspectRatio:`xMidYMid meet`})}):(0,W.jsx)(`image`,{href:l,x:-s.width/2,y:-s.depth/2,width:s.width,height:s.depth,preserveAspectRatio:`none`})),(n.boxes||r)&&(0,W.jsx)(`rect`,{x:-s.width/2,y:-s.depth/2,width:s.width,height:s.depth,fill:`none`,stroke:r?`#e75c3c`:`#b88348`,strokeWidth:r?.06:.025}),` `,n.images&&!l&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`line`,{x1:-s.width/2,y1:-s.depth/2,x2:s.width/2,y2:s.depth/2,stroke:`#b88348`,strokeWidth:`.025`}),(0,W.jsx)(`line`,{x1:s.width/2,y1:-s.depth/2,x2:-s.width/2,y2:s.depth/2,stroke:`#b88348`,strokeWidth:`.025`})]}),n.centers&&(0,W.jsx)(`circle`,{r:`.04`,fill:`#e75c3c`}),n.centers&&(0,W.jsx)(`line`,{x2:`0`,y2:s.depth/2,stroke:`#e75c3c`,strokeWidth:`.025`,markerEnd:`url(#${a})`}),` `,n.names&&(0,W.jsx)(`text`,{y:p,textAnchor:`middle`,className:`item-label`,fontSize:`.14`,style:{transform:`rotate(${m}deg)`,transformOrigin:`0px ${p}px`,transition:`transform 240ms cubic-bezier(.2,.8,.2,1)`},children:e.name||e.asset?.name||e.id})]})}function nl({node:e,nodes:t,viewBox:n,coverage:r,dimension:i,manualMeasurement:a,measurementUnit:o}){if(a){let e=qs(a.start.point,a.end.point,a.mode);return(0,W.jsxs)(`section`,{className:`side-section inspector`,children:[(0,W.jsx)(`h2`,{children:`手动尺寸`}),(0,W.jsx)(`pre`,{children:JSON.stringify({id:a.id,levelId:a.levelId,mode:a.mode,startWorld:a.start.point,endWorld:a.end.point,startSnap:a.start,endSnap:a.end,valueMeters:e.valueMeters,displayedValue:Gs(e.valueMeters,o),unit:o,geometryMethod:a.mode===`aligned`?`euclidean-world-distance`:`${a.mode}-world-projection`,persistence:`derived-overlay / current imported project session`},null,2)})]})}if(i)return(0,W.jsxs)(`section`,{className:`side-section inspector`,children:[(0,W.jsx)(`h2`,{children:`外围尺寸`}),(0,W.jsx)(`pre`,{children:JSON.stringify({chainId:i.chainId,segmentId:i.id,levelId:i.levelId,componentId:i.componentId,runId:i.runId,dimensionLayer:i.dimensionLayer,startWorld:i.start,endWorld:i.end,valueMeters:i.valueMeters,displayedValue:Gs(i.valueMeters,o),displayMillimeters:i.displayMillimeters,roundingDifferenceMeters:Number(i.displayMillimeters)/1e3-i.valueMeters,direction:i.direction,outwardNormal:i.outwardNormal,sourceWallIds:i.sourceWallIds,sourceOpeningIds:i.sourceOpeningIds,sourceStart:i.sourceStart,sourceEnd:i.sourceEnd,sourcePaths:i.sourcePaths,exteriorContourSource:`union of formal physical wall footprints / outer rings only`,unionAlgorithm:i.unionAlgorithm,geometryMethod:i.method,registry:`derived-overlay-feature`},null,2)})]});if(!e)return(0,W.jsxs)(`section`,{className:`side-section inspector`,children:[(0,W.jsx)(`h2`,{children:`检查面板`}),(0,W.jsx)(`p`,{children:`点击对象查看原始字段与派生几何。`})]});if(e.type===`item`)return(0,W.jsx)(rl,{node:e,nodes:t,viewBox:n,unit:o});if(e.type===`shelf`){let n=U(e),r=Mo(e.id,t),i=No(e,t);return(0,W.jsxs)(`section`,{className:`side-section inspector`,children:[(0,W.jsx)(`h2`,{children:`选择了一个 Shelf`}),(0,W.jsx)(`pre`,{children:JSON.stringify({id:e.id,parentId:e.parentId,ancestorLevelId:r.ancestorLevelId,style:n.style,position:e.position,rotation:e.rotation,displayedDimensions:{width:Fc(n.width,o),depth:Fc(n.depth,o),height:Fc(n.height,o),thickness:Fc(n.thickness,o)},widthMeters:n.width,depthMeters:n.depth,heightMeters:n.height,thicknessMeters:n.thickness,rows:n.rows,columns:n.columns,withBack:n.withBack,withSides:n.withSides,withBottom:n.withBottom,bracketStyle:n.bracketStyle,children:e.children??[],resolvedWorldPosition:r.status===`ok`?[r.x,r.z]:null,resolvedRotation:r.status===`ok`?r.rotationY:null,finalSvgMatrix:i,sourcePath:`nodes.${e.id}`,schemaDefaultFields:n.defaultFields},null,2)})]})}if(e.type===`slab`){let n=Go(e),i=Ga(e.id,t),a=r.entries.find(t=>t.nodeId===e.id);return(0,W.jsxs)(`section`,{className:`side-section inspector`,children:[(0,W.jsx)(`h2`,{children:`选择了一个 Slab`}),(0,W.jsx)(`pre`,{children:JSON.stringify({id:e.id,parentId:e.parentId,ancestorLevelId:i.levelId,polygon:e.polygon,holes:e.holes??[],holeMetadata:e.holeMetadata??[],displayedElevation:Fc(e.elevation??.05,o),elevationMeters:e.elevation??.05,autoFromWalls:e.autoFromWalls??!1,visible:e.visible,displayedArea:n?{outer:Ks(n.outerArea,o),holes:Ks(n.holeArea,o),net:Ks(n.netArea,o)}:null,areaSquareMeters:n?{outer:n.outerArea,holes:n.holeArea,net:n.netArea}:null,coverageStatus:a?.overallStatus??`none`,renderRegistration:a?.actualRenderStatus??`none`},null,2)})]})}return(0,W.jsxs)(`section`,{className:`side-section inspector`,children:[(0,W.jsx)(`h2`,{children:e.name||e.id}),(0,W.jsx)(`pre`,{children:JSON.stringify(e,null,2)})]})}function rl({node:e,nodes:t,viewBox:n,unit:r}){let i=Ja(e),a=Xa(e.id,t),o=e.asset?.floorPlanUrl,s=el(o),c=i&&s&&!s.isFallback&&s.cropWidth>0&&s.cropHeight>0?rc({x:s.cropX,y:s.cropY,width:s.cropWidth,height:s.cropHeight},i.width,i.depth):null;return(0,W.jsxs)(`section`,{className:`side-section inspector`,children:[(0,W.jsx)(`h2`,{children:e.name||e.asset?.name||`家具`}),(0,W.jsxs)(`dl`,{children:[(0,W.jsx)(`dt`,{children:`尺寸 W/H/D`}),(0,W.jsx)(`dd`,{children:i?`${Fc(i.width,r)} / ${Fc(i.height,r)} / ${Fc(i.depth,r)}`:`无效`}),(0,W.jsx)(`dt`,{children:`位置 x/z`}),(0,W.jsx)(`dd`,{children:a.status===`ok`?`${Fc(a.x,r)} / ${Fc(a.z,r)}`:`未解析`}),(0,W.jsx)(`dt`,{children:`角度`}),(0,W.jsx)(`dd`,{children:a.status===`ok`?`${Ya(a.rotationY)}°`:`—`}),(0,W.jsx)(`dt`,{children:`所属楼层`}),(0,W.jsx)(`dd`,{children:a.ancestorLevelId||`未确定`}),(0,W.jsx)(`dt`,{children:`画布范围`}),(0,W.jsx)(`dd`,{children:`${Fc(n.width,r)} × ${Fc(n.height,r)}`})]}),(0,W.jsx)(`pre`,{children:JSON.stringify({id:e.id,parentId:e.parentId,position:e.position,rotation:e.rotation,scale:e.scale,physicalDimensionsMeters:e.asset?.dimensions,floorPlanImageUrl:o??null,naturalImageWidth:s?.naturalWidth??null,naturalImageHeight:s?.naturalHeight??null,alphaThreshold:s?.alphaThreshold??16,cropX:s?.cropX??null,cropY:s?.cropY??null,cropWidth:s?.cropWidth??null,cropHeight:s?.cropHeight??null,cropApplied:!!(s&&!s.isFallback&&c),cropFallbackReason:s?.fallbackReason??(o?`loading`:`missing-url`),contentAspectRatio:c?.contentAspectRatio??null,physicalAspectRatio:c?.physicalAspectRatio??(i?i.width/i.depth:null),aspectDifferencePercent:c?.aspectDifferencePercent??null,finalDrawWidth:c?.drawWidth??i?.width??null,finalDrawHeight:c?.drawHeight??i?.depth??null,drawOffsetX:c?.offsetX??0,drawOffsetY:c?.offsetY??0,scaleX:c?.scaleX??null,scaleY:c?.scaleY??null,uniformScaleApplied:c?.uniformScaleApplied??!1,fourEdgeFitApplied:!!(s&&!s.isFallback&&c)},null,2)})]})}function il({nodes:e}){let t=t=>Object.values(e).filter(e=>e.type===t).length,n=Object.values(e).filter(e=>e.type===`shelf`),r=n.filter(e=>!jo(e)),i=n.filter(t=>Mo(t.id,e).status===`error`),a=n.reduce((e,t)=>{let n=U(t).style;return e[n]=(e[n]||0)+1,e},{});return(0,W.jsxs)(`section`,{className:`side-section`,children:[(0,W.jsx)(`h2`,{children:`文件统计`}),(0,W.jsxs)(`div`,{className:`stat-grid`,children:[(0,W.jsxs)(`span`,{children:[`节点`,(0,W.jsx)(`b`,{children:Object.keys(e).length})]}),(0,W.jsxs)(`span`,{children:[`Level`,(0,W.jsx)(`b`,{children:t(`level`)})]}),(0,W.jsxs)(`span`,{children:[`Wall`,(0,W.jsx)(`b`,{children:t(`wall`)})]}),(0,W.jsxs)(`span`,{children:[`Item`,(0,W.jsx)(`b`,{children:t(`item`)})]}),(0,W.jsxs)(`span`,{children:[`Shelf`,(0,W.jsx)(`b`,{children:n.length})]}),(0,W.jsxs)(`span`,{children:[`无效 Shelf`,(0,W.jsx)(`b`,{children:r.length})]}),(0,W.jsxs)(`span`,{children:[`父级异常 Shelf`,(0,W.jsx)(`b`,{children:i.length})]}),Object.entries(a).map(([e,t])=>(0,W.jsxs)(`span`,{children:[e,(0,W.jsx)(`b`,{children:t})]},e))]})]})}function al(e){let t=Object.values(e).filter(e=>e.type===`item`).flatMap(t=>{let n=Xa(t.id,e);return n.status===`error`?[{severity:`error`,code:n.error||`unsupported_parent_transform`,message:`无法确定家具楼层坐标`,nodeId:t.id}]:[]}),n=Object.values(e).filter(e=>e.type===`shelf`).flatMap(t=>{let n=Mo(t.id,e);U(t);let r=[];return jo(t)||r.push({severity:`error`,code:`invalid_shelf_dimensions`,message:`Shelf width/depth 无效；未绘制虚假占地`,nodeId:t.id,sourcePath:`nodes.${t.id}`}),t.rows!==void 0&&(!Number.isInteger(t.rows)||t.rows<1||t.rows>8)&&r.push({severity:`error`,code:`invalid_shelf_rows`,message:`Shelf rows 必须为 1–8 的整数`,nodeId:t.id,sourcePath:`nodes.${t.id}.rows`}),t.columns!==void 0&&(!Number.isInteger(t.columns)||t.columns<1||t.columns>6)&&r.push({severity:`error`,code:`invalid_shelf_columns`,message:`Shelf columns 必须为 1–6 的整数`,nodeId:t.id,sourcePath:`nodes.${t.id}.columns`}),n.status===`error`&&r.push({severity:`error`,code:n.error===`parent_cycle`?`shelf_parent_cycle`:n.error===`missing_parent`?`missing_shelf_parent`:`unsupported_shelf_parent_transform`,message:`无法确定 Shelf 的楼层坐标`,nodeId:t.id,sourcePath:`nodes.${t.id}.parentId`}),r});return[...t,...n]}function ol({diagnostics:e}){return(0,W.jsxs)(`section`,{className:`side-section diagnostics-panel`,children:[(0,W.jsxs)(`div`,{className:`side-heading`,children:[(0,W.jsx)(`h2`,{children:`诊断`}),(0,W.jsx)(`span`,{className:`pill`,children:e.length})]}),e.slice(0,30).map((e,t)=>(0,W.jsxs)(`div`,{className:`diag ${e.severity}`,children:[(0,W.jsx)(`b`,{children:e.code}),(0,W.jsx)(`span`,{children:e.message}),(0,W.jsx)(`small`,{children:e.nodeId||``})]},`${e.code}-${t}`))]})}function sl({coverage:e}){return(0,W.jsxs)(`section`,{className:`side-section diagnostics-panel`,children:[(0,W.jsxs)(`div`,{className:`side-heading`,children:[(0,W.jsx)(`h2`,{children:`解析覆盖`}),(0,W.jsx)(`span`,{className:`pill`,children:Object.keys(e.byKind).length})]}),(0,W.jsxs)(`small`,{children:[`Core `,e.summary.builtInNodes,` · 完整 `,e.summary.fullySupportedNodes,` · 部分 `,e.summary.partiallySupportedNodes,` · 未知 `,e.summary.unknownPluginNodes,` · 未渲染 `,e.summary.parsedNotRenderedNodes,` · 无效 `,e.summary.invalidNodes]}),Object.entries(e.byKind).map(([e,t])=>(0,W.jsxs)(`details`,{children:[(0,W.jsxs)(`summary`,{children:[e,` · `,t.length,` · `,t[0].overallStatus]}),(0,W.jsxs)(`table`,{className:`coverage-table`,children:[(0,W.jsx)(`thead`,{children:(0,W.jsxs)(`tr`,{children:[(0,W.jsx)(`th`,{children:`Variant`}),(0,W.jsx)(`th`,{children:`解析`}),(0,W.jsx)(`th`,{children:`坐标`}),(0,W.jsx)(`th`,{children:`预计`}),(0,W.jsx)(`th`,{children:`实际`}),(0,W.jsx)(`th`,{children:`状态`})]})}),(0,W.jsx)(`tbody`,{children:t.map(e=>(0,W.jsxs)(`tr`,{children:[(0,W.jsx)(`td`,{children:e.variant||`—`}),(0,W.jsx)(`td`,{children:e.schemaStatus}),(0,W.jsx)(`td`,{children:e.transformStatus}),(0,W.jsx)(`td`,{children:e.expectedVisibility.join(`, `)}),(0,W.jsx)(`td`,{children:e.actualRenderStatus}),(0,W.jsx)(`td`,{children:e.overallStatus})]},e.nodeId))})]}),(0,W.jsx)(`pre`,{children:JSON.stringify(t.map(e=>({nodeId:e.nodeId,variant:e.variant,parentChain:e.parentChain,sourcePath:e.sourcePath,evidence:e.evidence,reason:e.reason})),null,2)})]},e)),e.unknownKinds.length>0&&(0,W.jsx)(`pre`,{children:JSON.stringify({unknownKinds:e.unknownKinds,installedPlugins:e.installedPlugins},null,2)})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,W.jsx)(Ic,{}));