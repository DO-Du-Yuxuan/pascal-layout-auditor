var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function te(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function D(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function O(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function k(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,k(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+D(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),k(o,r,i,``,function(e){return e})):o!=null&&(te(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+D(a,u),c+=k(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+D(a,u++),c+=k(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return k(O(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function A(e,t,n){if(e==null)return e;var r=[],i=0;return k(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function j(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var M=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},N={map:A,forEach:function(e,t,n){A(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(e){return e})||[]},only:function(e){if(!te(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=N,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=te,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:j}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,M)}catch(e){M(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,te());else{var t=n(l);t!==null&&D(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&D(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?te():S=!1}}}var te;if(typeof y==`function`)te=function(){y(ee)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=ee,te=function(){re.postMessage(null)}}else te=function(){_(ee,0)};function D(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,D(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,te()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),te=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),D=Symbol.iterator;function O(e){return typeof e!=`object`||!e?null:(e=D&&e[D]||e[`@@iterator`],typeof e==`function`?e:null)}var k=Symbol.for(`react.client.reference`);function A(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===k?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?A(e.type)||`Memo`:t;case te:t=e._payload,e=e._init;try{return A(e(t))}catch{}}return null}var j=Array.isArray,M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ie=[],ae=-1;function oe(e){return{current:e}}function F(e){0>ae||(e.current=ie[ae],ie[ae]=null,ae--)}function I(e,t){ae++,ie[ae]=e.current,e.current=t}var se=oe(null),L=oe(null),ce=oe(null),le=oe(null);function ue(e,t){switch(I(ce,t),I(L,e),I(se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}F(se),I(se,e)}function de(){F(se),F(L),F(ce)}function fe(e){e.memoizedState!==null&&I(le,e);var t=se.current,n=Ud(t,e.type);t!==n&&(I(L,e),I(se,n))}function pe(e){L.current===e&&(F(se),F(L)),le.current===e&&(F(le),Qf._currentValue=P)}var me,he;function ge(e){if(me===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);me=t&&t[1]||``,he=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+me+e+he}var _e=!1;function ve(e,t){if(!e||_e)return``;_e=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{_e=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ge(n):``}function ye(e,t){switch(e.tag){case 26:case 27:case 5:return ge(e.type);case 16:return ge(`Lazy`);case 13:return e.child!==t&&t!==null?ge(`Suspense Fallback`):ge(`Suspense`);case 19:return ge(`SuspenseList`);case 0:case 15:return ve(e.type,!1);case 11:return ve(e.type.render,!1);case 1:return ve(e.type,!0);case 31:return ge(`Activity`);default:return``}}function be(e){try{var t=``,n=null;do t+=ye(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var xe=Object.prototype.hasOwnProperty,Se=t.unstable_scheduleCallback,Ce=t.unstable_cancelCallback,we=t.unstable_shouldYield,Te=t.unstable_requestPaint,Ee=t.unstable_now,De=t.unstable_getCurrentPriorityLevel,Oe=t.unstable_ImmediatePriority,ke=t.unstable_UserBlockingPriority,Ae=t.unstable_NormalPriority,je=t.unstable_LowPriority,Me=t.unstable_IdlePriority,Ne=t.log,Pe=t.unstable_setDisableYieldValue,Fe=null,Ie=null;function Le(e){if(typeof Ne==`function`&&Pe(e),Ie&&typeof Ie.setStrictMode==`function`)try{Ie.setStrictMode(Fe,e)}catch{}}var Re=Math.clz32?Math.clz32:Ve,ze=Math.log,Be=Math.LN2;function Ve(e){return e>>>=0,e===0?32:31-(ze(e)/Be|0)|0}var He=256,Ue=262144,We=4194304;function Ge(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ke(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ge(n))):i=Ge(o):i=Ge(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ge(n))):i=Ge(o)):i=Ge(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Je(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var e=We;return We<<=1,!(We&62914560)&&(We=4194304),e}function Xe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ze(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Re(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&$e(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function $e(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Re(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function et(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function tt(e,t){var n=t&-t;return n=n&42?1:nt(n),(n&(e.suspendedLanes|t))===0?n:0}function nt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function it(){var e=N.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function at(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var ot=Math.random().toString(36).slice(2),st=`__reactFiber$`+ot,ct=`__reactProps$`+ot,lt=`__reactContainer$`+ot,ut=`__reactEvents$`+ot,dt=`__reactListeners$`+ot,ft=`__reactHandles$`+ot,pt=`__reactResources$`+ot,mt=`__reactMarker$`+ot;function ht(e){delete e[st],delete e[ct],delete e[ut],delete e[dt],delete e[ft]}function gt(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[st])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function _t(e){if(e=e[st]||e[lt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function vt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function yt(e){var t=e[pt];return t||=e[pt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function bt(e){e[mt]=!0}var xt=new Set,St={};function Ct(e,t){wt(e,t),wt(e+`Capture`,t)}function wt(e,t){for(St[e]=t,e=0;e<t.length;e++)xt.add(t[e])}var Tt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Et={},Dt={};function Ot(e){return xe.call(Dt,e)?!0:xe.call(Et,e)?!1:Tt.test(e)?Dt[e]=!0:(Et[e]=!0,!1)}function kt(e,t,n){if(Ot(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function At(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function R(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function jt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Mt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Nt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pt(e){if(!e._valueTracker){var t=Mt(e)?`checked`:`value`;e._valueTracker=Nt(e,t,``+e[t])}}function Ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Mt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function It(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Lt=/[\n"\\]/g;function Rt(e){return e.replace(Lt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function zt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+jt(t)):e.value!==``+jt(t)&&(e.value=``+jt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Vt(e,o,jt(n)):Vt(e,o,jt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+jt(s):e.removeAttribute(`name`)}function Bt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Pt(e);return}n=n==null?``:``+jt(n),t=t==null?n:``+jt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Pt(e)}function Vt(e,t,n){t===`number`&&It(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ht(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ut(e,t,n){if(t!=null&&(t=``+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+jt(n)}function Wt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(j(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=jt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Pt(e)}function Gt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Kt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Jt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&qt(e,o,t[o])}function Yt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Xt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qt(e){return Zt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function $t(){}var en=null;function tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nn=null,rn=null;function an(e){var t=_t(e);if(t&&(e=t.stateNode)){var n=e[ct]||null;a:switch(e=t.stateNode,t.type){case`input`:if(zt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Rt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ct]||null;if(!a)throw Error(i(90));zt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ft(r)}break a;case`textarea`:Ut(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ht(e,!!n.multiple,t,!1)}}}var on=!1;function sn(e,t,n){if(on)return e(t,n);on=!0;try{return e(t)}finally{if(on=!1,(nn!==null||rn!==null)&&(xu(),nn&&(t=nn,e=rn,rn=nn=null,an(t),e)))for(t=0;t<e.length;t++)an(e[t])}}function cn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ct]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var ln=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),un=!1;if(ln)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){un=!0}}),window.addEventListener(`test`,dn,dn),window.removeEventListener(`test`,dn,dn)}catch{un=!1}var fn=null,pn=null,mn=null;function hn(){if(mn)return mn;var e,t=pn,n=t.length,r,i=`value`in fn?fn.value:fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return mn=i.slice(e,1<r?1-r:void 0)}function gn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _n(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?_n:vn,this.isPropagationStopped=vn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xn=yn(bn),Sn=h({},bn,{view:0,detail:0}),Cn=yn(Sn),wn,Tn,En,Dn=h({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==En&&(En&&e.type===`mousemove`?(wn=e.screenX-En.screenX,Tn=e.screenY-En.screenY):Tn=wn=0,En=e),wn)},movementY:function(e){return`movementY`in e?e.movementY:Tn}}),On=yn(Dn),kn=yn(h({},Dn,{dataTransfer:0})),An=yn(h({},Sn,{relatedTarget:0})),jn=yn(h({},bn,{animationName:0,elapsedTime:0,pseudoElement:0})),Mn=yn(h({},bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Nn=yn(h({},bn,{data:0})),Pn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Fn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},In={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Ln(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=In[e])?!!t[e]:!1}function Rn(){return Ln}var zn=yn(h({},Sn,{key:function(e){if(e.key){var t=Pn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=gn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Fn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rn,charCode:function(e){return e.type===`keypress`?gn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?gn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Bn=yn(h({},Dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Vn=yn(h({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rn})),Hn=yn(h({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Un=yn(h({},Dn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Wn=yn(h({},bn,{newState:0,oldState:0})),Gn=[9,13,27,32],Kn=ln&&`CompositionEvent`in window,qn=null;ln&&`documentMode`in document&&(qn=document.documentMode);var Jn=ln&&`TextEvent`in window&&!qn,Yn=ln&&(!Kn||qn&&8<qn&&11>=qn),Xn=` `,Zn=!1;function Qn(e,t){switch(e){case`keyup`:return Gn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function $n(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var er=!1;function tr(e,t){switch(e){case`compositionend`:return $n(t);case`keypress`:return t.which===32?(Zn=!0,Xn):null;case`textInput`:return e=t.data,e===Xn&&Zn?null:e;default:return null}}function nr(e,t){if(er)return e===`compositionend`||!Kn&&Qn(e,t)?(e=hn(),mn=pn=fn=null,er=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Yn&&t.locale!==`ko`?null:t.data;default:return null}}var rr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!rr[e.type]:t===`textarea`}function ar(e,t,n,r){nn?rn?rn.push(r):rn=[r]:nn=r,t=Dd(t,`onChange`),0<t.length&&(n=new xn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var or=null,sr=null;function cr(e){bd(e,0)}function lr(e){if(Ft(vt(e)))return e}function ur(e,t){if(e===`change`)return t}var dr=!1;if(ln){var fr;if(ln){var pr=`oninput`in document;if(!pr){var mr=document.createElement(`div`);mr.setAttribute(`oninput`,`return;`),pr=typeof mr.oninput==`function`}fr=pr}else fr=!1;dr=fr&&(!document.documentMode||9<document.documentMode)}function hr(){or&&(or.detachEvent(`onpropertychange`,gr),sr=or=null)}function gr(e){if(e.propertyName===`value`&&lr(sr)){var t=[];ar(t,sr,e,tn(e)),sn(cr,t)}}function _r(e,t,n){e===`focusin`?(hr(),or=t,sr=n,or.attachEvent(`onpropertychange`,gr)):e===`focusout`&&hr()}function vr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return lr(sr)}function yr(e,t){if(e===`click`)return lr(t)}function br(e,t){if(e===`input`||e===`change`)return lr(t)}function xr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Sr=typeof Object.is==`function`?Object.is:xr;function Cr(e,t){if(Sr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xe.call(t,i)||!Sr(e[i],t[i]))return!1}return!0}function wr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tr(e,t){var n=wr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=wr(n)}}function Er(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Er(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=It(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=It(e.document)}return t}function Or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var kr=ln&&`documentMode`in document&&11>=document.documentMode,Ar=null,jr=null,Mr=null,Nr=!1;function Pr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nr||Ar==null||Ar!==It(r)||(r=Ar,`selectionStart`in r&&Or(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&Cr(Mr,r)||(Mr=r,r=Dd(jr,`onSelect`),0<r.length&&(t=new xn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ar)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ir={animationend:Fr(`Animation`,`AnimationEnd`),animationiteration:Fr(`Animation`,`AnimationIteration`),animationstart:Fr(`Animation`,`AnimationStart`),transitionrun:Fr(`Transition`,`TransitionRun`),transitionstart:Fr(`Transition`,`TransitionStart`),transitioncancel:Fr(`Transition`,`TransitionCancel`),transitionend:Fr(`Transition`,`TransitionEnd`)},Lr={},Rr={};ln&&(Rr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),`TransitionEvent`in window||delete Ir.transitionend.transition);function zr(e){if(Lr[e])return Lr[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rr)return Lr[e]=t[n];return e}var Br=zr(`animationend`),Vr=zr(`animationiteration`),Hr=zr(`animationstart`),Ur=zr(`transitionrun`),Wr=zr(`transitionstart`),Gr=zr(`transitioncancel`),Kr=zr(`transitionend`),qr=new Map,Jr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Jr.push(`scrollEnd`);function Yr(e,t){qr.set(e,t),Ct(t,[e])}var Xr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Zr=[],Qr=0,$r=0;function ei(){for(var e=Qr,t=$r=Qr=0;t<e;){var n=Zr[t];Zr[t++]=null;var r=Zr[t];Zr[t++]=null;var i=Zr[t];Zr[t++]=null;var a=Zr[t];if(Zr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ii(n,i,a)}}function ti(e,t,n,r){Zr[Qr++]=e,Zr[Qr++]=t,Zr[Qr++]=n,Zr[Qr++]=r,$r|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ni(e,t,n,r){return ti(e,t,n,r),ai(e)}function ri(e,t){return ti(e,null,null,t),ai(e)}function ii(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Re(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ai(e){if(50<fu)throw fu=0,pu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var oi={};function si(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,t,n,r){return new si(e,t,n,r)}function li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ui(e,t){var n=e.alternate;return n===null?(n=ci(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function di(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function fi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)li(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,se.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=ci(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return pi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ci(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ci(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=ci(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case te:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ci(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function pi(e,t,n,r){return e=ci(7,e,r,t),e.lanes=n,e}function mi(e,t,n){return e=ci(6,e,null,t),e.lanes=n,e}function hi(e){var t=ci(18,null,null,0);return t.stateNode=e,t}function gi(e,t,n){return t=ci(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _i=new WeakMap;function vi(e,t){if(typeof e==`object`&&e){var n=_i.get(e);return n===void 0?(t={value:e,source:t,stack:be(t)},_i.set(e,t),t):n}return{value:e,source:t,stack:be(t)}}var yi=[],bi=0,xi=null,Si=0,Ci=[],wi=0,Ti=null,Ei=1,Di=``;function Oi(e,t){yi[bi++]=Si,yi[bi++]=xi,xi=e,Si=t}function ki(e,t,n){Ci[wi++]=Ei,Ci[wi++]=Di,Ci[wi++]=Ti,Ti=e;var r=Ei;e=Di;var i=32-Re(r)-1;r&=~(1<<i),n+=1;var a=32-Re(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ei=1<<32-Re(t)+i|n<<i|r,Di=a+e}else Ei=1<<a|n<<i|r,Di=e}function Ai(e){e.return!==null&&(Oi(e,1),ki(e,1,0))}function ji(e){for(;e===xi;)xi=yi[--bi],yi[bi]=null,Si=yi[--bi],yi[bi]=null;for(;e===Ti;)Ti=Ci[--wi],Ci[wi]=null,Di=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null}function Mi(e,t){Ci[wi++]=Ei,Ci[wi++]=Di,Ci[wi++]=Ti,Ei=t.id,Di=t.overflow,Ti=e}var Ni=null,Pi=null,z=!1,B=null,Fi=!1,Ii=Error(i(519));function Li(e){throw Ui(vi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ii}function Ri(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[st]=e,t[ct]=r,n){case`dialog`:Z(`cancel`,t),Z(`close`,t);break;case`iframe`:case`object`:case`embed`:Z(`load`,t);break;case`video`:case`audio`:for(n=0;n<vd.length;n++)Z(vd[n],t);break;case`source`:Z(`error`,t);break;case`img`:case`image`:case`link`:Z(`error`,t),Z(`load`,t);break;case`details`:Z(`toggle`,t);break;case`input`:Z(`invalid`,t),Bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Z(`invalid`,t);break;case`textarea`:Z(`invalid`,t),Wt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Nd(t.textContent,n)?(r.popover!=null&&(Z(`beforetoggle`,t),Z(`toggle`,t)),r.onScroll!=null&&Z(`scroll`,t),r.onScrollEnd!=null&&Z(`scrollend`,t),r.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||Li(e,!0)}function zi(e){for(Ni=e.return;Ni;)switch(Ni.tag){case 5:case 31:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:Ni=Ni.return}}function Bi(e){if(e!==Ni)return!1;if(!z)return zi(e),z=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Wd(e.type,e.memoizedProps)),n=!n),n&&Pi&&Li(e),zi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Pi=df(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Pi=df(e)}else t===27?(t=Pi,Qd(e.type)?(e=uf,uf=null,Pi=e):Pi=t):Pi=Ni?lf(e.stateNode.nextSibling):null;return!0}function Vi(){Pi=Ni=null,z=!1}function Hi(){var e=B;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),B=null),e}function Ui(e){B===null?B=[e]:B.push(e)}var Wi=oe(null),Gi=null,Ki=null;function qi(e,t,n){I(Wi,t._currentValue),t._currentValue=n}function Ji(e){e._currentValue=Wi.current,F(Wi)}function Yi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Xi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Yi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Yi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Zi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Sr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===le.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Xi(t,e,n,r),t.flags|=262144}function Qi(e){for(e=e.firstContext;e!==null;){if(!Sr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $i(e){Gi=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ea(e){return na(Gi,e)}function ta(e,t){return Gi===null&&$i(e),na(e,t)}function na(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ki===null){if(e===null)throw Error(i(308));Ki=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ki=Ki.next=t;return n}var ra=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ia=t.unstable_scheduleCallback,aa=t.unstable_NormalPriority,oa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sa(){return{controller:new ra,data:new Map,refCount:0}}function ca(e){e.refCount--,e.refCount===0&&ia(aa,function(){e.controller.abort()})}var la=null,ua=0,da=0,fa=null;function pa(e,t){if(la===null){var n=la=[];ua=0,da=fd(),fa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ua++,t.then(ma,ma),t}function ma(){if(--ua===0&&la!==null){fa!==null&&(fa.status=`fulfilled`);var e=la;la=null,da=0,fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ha(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ga=M.S;M.S=function(e,t){tu=Ee(),typeof t==`object`&&t&&typeof t.then==`function`&&pa(e,t),ga!==null&&ga(e,t)};var _a=oe(null);function va(){var e=_a.current;return e===null?zl.pooledCache:e}function ya(e,t){t===null?I(_a,_a.current):I(_a,t.pool)}function ba(){var e=va();return e===null?null:{parent:oa._currentValue,pool:e}}var xa=Error(i(460)),Sa=Error(i(474)),Ca=Error(i(542)),wa={then:function(){}};function Ta(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ea(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($t,$t),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e;default:if(typeof t.status==`string`)t.then($t,$t);else{if(e=zl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e}throw Oa=t,xa}}function Da(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Oa=e,xa):e}}var Oa=null;function ka(){if(Oa===null)throw Error(i(459));var e=Oa;return Oa=null,e}function Aa(e){if(e===xa||e===Ca)throw Error(i(483))}var ja=null,Ma=0;function Na(e){var t=Ma;return Ma+=1,ja===null&&(ja=[]),Ea(ja,e,t)}function Pa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Fa(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ia(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ui(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=mi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===te&&Da(i)===t.type)?(t=a(t,n.props),Pa(t,n),t.return=e,t):(t=fi(n.type,n.key,n.props,null,e.mode,r),Pa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=gi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=pi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=mi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=fi(t.type,t.key,t.props,null,e.mode,n),Pa(n,t),n.return=e,n;case v:return t=gi(t,e.mode,n),t.return=e,t;case te:return t=Da(t),f(e,t,n)}if(j(t)||O(t))return t=pi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Na(t),n);if(t.$$typeof===C)return f(e,ta(e,t),n);Fa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case te:return n=Da(n),p(e,t,n,r)}if(j(n)||O(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Na(n),r);if(n.$$typeof===C)return p(e,t,ta(e,n),r);Fa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case te:return r=Da(r),m(e,t,n,r,i)}if(j(r)||O(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Na(r),i);if(r.$$typeof===C)return m(e,t,n,ta(t,r),i);Fa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),z&&Oi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return z&&Oi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),z&&Oi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),z&&Oi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return z&&Oi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),z&&Oi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===te&&Da(l)===r.type){n(e,r.sibling),c=a(r,o.props),Pa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=pi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=fi(o.type,o.key,o.props,null,e.mode,c),Pa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=gi(o,e.mode,c),c.return=e,e=c}return s(e);case te:return o=Da(o),b(e,r,o,c)}if(j(o))return h(e,r,o,c);if(O(o)){if(l=O(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Na(o),c);if(o.$$typeof===C)return b(e,r,ta(e,o),c);Fa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=mi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ma=0;var i=b(e,t,n,r);return ja=null,i}catch(t){if(t===xa||t===Ca)throw t;var a=ci(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var La=Ia(!0),Ra=Ia(!1),za=!1;function Ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Va(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ai(e),ii(e,null,n),t}return ti(e,r,t,n),ai(e)}function Wa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}function Ga(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ka=!1;function qa(){if(Ka){var e=fa;if(e!==null)throw e}}function Ja(e,t,n,r){Ka=!1;var i=e.updateQueue;za=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===da&&(Ka=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:za=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function Ya(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Xa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ya(n[e],t)}var Za=oe(null),Qa=oe(0);function $a(e,t){e=Wl,I(Qa,e),I(Za,t),Wl=e|t.baseLanes}function eo(){I(Qa,Wl),I(Za,Za.current)}function to(){Wl=Qa.current,F(Za),F(Qa)}var no=oe(null),ro=null;function io(e){var t=e.alternate;I(lo,lo.current&1),I(no,e),ro===null&&(t===null||Za.current!==null||t.memoizedState!==null)&&(ro=e)}function ao(e){I(lo,lo.current),I(no,e),ro===null&&(ro=e)}function oo(e){e.tag===22?(I(lo,lo.current),I(no,e),ro===null&&(ro=e)):so(e)}function so(){I(lo,lo.current),I(no,no.current)}function co(e){F(no),ro===e&&(ro=null),F(lo)}var lo=oe(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fo=0,V=null,H=null,po=null,mo=!1,ho=!1,go=!1,_o=0,vo=0,yo=null,bo=0;function xo(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Sr(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return fo=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Bs:Vs,go=!1,a=n(r,i),go=!1,ho&&(a=To(t,n,r,i)),wo(e),a}function wo(e){M.H=zs;var t=H!==null&&H.next!==null;if(fo=0,po=H=V=null,mo=!1,vo=0,yo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&Qi(e)&&(ic=!0))}function To(e,t,n,r){V=e;var a=0;do{if(ho&&(yo=null),vo=0,ho=!1,25<=a)throw Error(i(301));if(a+=1,po=H=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}M.H=Hs,o=t(n,r)}while(ho);return o}function Eo(){var e=M.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(H===null?null:H.memoizedState)!==e&&(V.flags|=1024),t}function Do(){var e=_o!==0;return _o=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(mo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mo=!1}fo=0,po=H=V=null,ho=!1,vo=_o=0,yo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return po===null?V.memoizedState=po=e:po=po.next=e,po}function jo(){if(H===null){var e=V.alternate;e=e===null?null:e.memoizedState}else e=H.next;var t=po===null?V.memoizedState:po.next;if(t!==null)po=t,H=e;else{if(e===null)throw V.alternate===null?Error(i(467)):Error(i(310));H=e,e={memoizedState:H.memoizedState,baseState:H.baseState,baseQueue:H.baseQueue,queue:H.queue,next:null},po===null?V.memoizedState=po=e:po=po.next=e}return po}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=vo;return vo+=1,yo===null&&(yo=[]),e=Ea(yo,e,t),t=V,(po===null?t.memoizedState:po.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return ea(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=V.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=V.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),V.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),H,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(fo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===da&&(d=!0);else if((fo&p)===p){u=u.next,p===da&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,V.lanes|=p,Kl|=p;f=u.action,go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,V.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Sr(o,e.memoizedState)&&(ic=!0,d&&(n=fa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Sr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=V,a=jo(),o=z;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Sr((H||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||po!==null&&po.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),zl===null)throw Error(i(349));o||fo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t=Mo(),V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Sr(e,n)}catch{return!0}}function Go(e){var t=ri(e,2);t!==null&&gu(t,e,2)}function Ko(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),go){Le(!0);try{n()}finally{Le(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,H,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};M.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=M.T,o={};M.T=o;try{var s=n(i,r),c=M.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),M.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(z){var n=zl.formState;if(n!==null){a:{var r=V;if(z){if(Pi){b:{for(var i=Pi,a=Fi;i.nodeType!==8;){if(!a){i=null;break b}if(i=lf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Pi=lf(i.nextSibling),r=i.data===`F!`;break a}}Li(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,V,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,V,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,V,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(jo(),H,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===xa?Ca:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(V.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=jo(),n=H;if(n!==null)return rs(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=V.updateQueue,t===null&&(t=Mo(),V.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return jo().memoizedState}function cs(e,t,n,r){var i=Ao();V.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;H!==null&&r!==null&&So(r,H.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(V.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){V.flags|=4;var t=V.updateQueue;if(t===null)t=Mo(),V.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=jo().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),go){Le(!0);try{e()}finally{Le(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||fo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=hu(),V.lanes|=e,Kl|=e,n)}function Ss(e,t,n,r){return Sr(n,t)?n:Za.current===null?!(fo&42)||fo&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=hu(),V.lanes|=e,Kl|=e,t):(e=xs(e,n,r),Sr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=N.p;N.p=a!==0&&8>a?a:8;var o=M.T,s={};M.T=s,Fs(e,!1,t,n);try{var c=i(),l=M.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,ha(c,r),mu(e)):Ps(e,t,r,mu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},mu())}finally{N.p=a,o!==null&&s.types!==null&&(o.types=s.types),M.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,P,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},mu())}function Os(){return ea(Qf)}function ks(){return jo().memoizedState}function As(){return jo().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=mu();e=Ha(n);var r=Ua(t,e,n);r!==null&&(gu(r,t,n),Wa(r,t,n)),t={cache:sa()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=mu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ni(e,t,n,r),n!==null&&(gu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,mu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Sr(s,o))return ti(e,t,i,0),zl===null&&ei(),!1}catch{}if(n=ni(e,t,i,r),n!==null)return gu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:fd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ni(e,n,r,2),t!==null&&gu(t,e,2)}function Is(e){var t=e.alternate;return e===V||t!==null&&t===V}function Ls(e,t){ho=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}var zs={readContext:ea,use:Po,useCallback:xo,useContext:xo,useEffect:xo,useImperativeHandle:xo,useLayoutEffect:xo,useInsertionEffect:xo,useMemo:xo,useReducer:xo,useRef:xo,useState:xo,useDebugValue:xo,useDeferredValue:xo,useTransition:xo,useSyncExternalStore:xo,useId:xo,useHostTransitionStatus:xo,useFormState:xo,useActionState:xo,useOptimistic:xo,useMemoCache:xo,useCacheRefresh:xo};zs.useEffectEvent=xo;var Bs={readContext:ea,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:ea,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(go){Le(!0);try{e()}finally{Le(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(go){Le(!0);try{n(t)}finally{Le(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,V,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Ao(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,V,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=V,a=Ao();if(z){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),zl===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=zl.identifierPrefix;if(z){var n=Di,r=Ei;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=_o++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=bo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,V,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=js.bind(null,V)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ea,use:Po,useCallback:ys,useContext:ea,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(jo(),H.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(jo(),H,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ea,use:Po,useCallback:ys,useContext:ea,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=jo();return H===null?xs(n,e,t):Ss(n,H.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=jo();return H===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,H,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Ha(r);i.payload=t,n!=null&&(i.callback=n),t=Ua(e,i,r),t!==null&&(gu(t,e,r),Wa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Ha(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ua(e,i,r),t!==null&&(gu(t,e,r),Wa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mu(),r=Ha(n);r.tag=2,t!=null&&(r.callback=t),t=Ua(e,r,n),t!==null&&(gu(t,e,n),Wa(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){Xr(e)}function Ys(e){console.error(e)}function Xs(e){Xr(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ha(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ha(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Zi(t,n,a,!0),n=no.current,n!==null){switch(n.tag){case 31:case 13:return ro===null?Ou():n.alternate===null&&Gl===0&&(Gl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ku(e,r,a)),!1;case 22:return n.flags|=65536,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ku(e,r,a)),!1}throw Error(i(435,n.tag))}return Ku(e,r,a),Ou(),!1}if(z)return t=no.current,t===null?(r!==Ii&&(t=Error(i(423),{cause:r}),Ui(vi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=vi(r,n),a=$s(e.stateNode,r,a),Ga(e,a),Gl!==4&&(Gl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ii&&(e=Error(i(422),{cause:r}),Ui(vi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=vi(o,n),Zl===null?Zl=[o]:Zl.push(o),Gl!==4&&(Gl=2),t===null)return!0;r=vi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ga(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ga(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Ra(t,null,n,r):La(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return $i(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(z&&s&&Ai(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!li(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=fi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Cr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=ui(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Cr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ya(t,a===null?null:a.cachePool),a===null?eo():$a(t,a),oo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ya(t,null),eo(),so(t)):(ya(t,a.cachePool),$a(t,a),so(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=va();return a=a===null?null:{parent:oa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ya(t,null),eo(),oo(t),e!==null&&Zi(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return La(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,co(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(z){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(ao(t),(e=Pi)?(e=af(e,Fi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ti===null?null:{id:Ei,overflow:Di},retryLane:536870912,hydrationErrors:null},n=hi(e),n.return=t,t.child=n,Ni=t,Pi=null)):e=null,e===null)throw Li(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(ao(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||Zi(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=zl,r!==null&&(s=tt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ri(e,s),gu(r,e,s),rc;Ou(),t=pc(e,t,n)}else e=o.treeContext,Pi=lf(s.nextSibling),Ni=t,z=!0,B=null,Fi=!1,e!==null&&Mi(t,e),t=fc(t,r),t.flags|=4096;return t}return e=ui(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return $i(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(z&&r&&Ai(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return $i(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!ic?(Oo(e,t,a),Ac(e,t,a)):(z&&r&&Ai(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if($i(t),t.stateNode===null){var a=oi,o=n.contextType;typeof o==`object`&&o&&(a=ea(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ba(t),o=n.contextType,a.context=typeof o==`object`&&o?ea(o):oi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Ja(t,r,a,i),qa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=oi,typeof u==`object`&&u&&(o=ea(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),za=!1;var f=t.memoizedState;a.state=f,Ja(t,r,a,i),qa(),l=t.memoizedState,s||f!==l||za?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=za||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Va(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=oi,typeof l==`object`&&l&&(c=ea(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),za=!1,f=t.memoizedState,a.state=f,Ja(t,r,a,i),qa();var p=t.memoizedState;o!==d||f!==p||za||e!==null&&e.dependencies!==null&&Qi(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=za||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Qi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=La(t,e.child,null,i),t.child=La(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Vi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:ba()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(lo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(z){if(a?io(t):so(t),(e=Pi)?(e=af(e,Fi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ti===null?null:{id:Ei,overflow:Di},retryLane:536870912,hydrationErrors:null},n=hi(e),n.return=t,t.child=n,Ni=t,Pi=null)):e=null,e===null)throw Li(t);return sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(so(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=pi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(io(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(io(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(so(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=pi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,La(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(so(t),t.child=e.child,t.flags|=128,t=null);else if(io(t),sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ui({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||Zi(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=zl,s!==null&&(r=tt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ri(e,r),gu(s,e,r),rc;of(c)||Ou(),t=Ec(e,t,n)}else of(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Pi=lf(c.nextSibling),Ni=t,z=!0,B=null,Fi=!1,e!==null&&Mi(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(so(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ui(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=pi(c,a,n,null),c.flags|=2):c=ui(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=ba():(l=oa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(io(t),n=e.child,e=n.sibling,n=ui(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=ci(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return La(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=lo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,I(lo,o),ac(e,t,r,n),r=z?Si:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Zi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ui(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ui(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Qi(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:ue(t,t.stateNode.containerInfo),qi(t,oa,e.memoizedState.cache),Vi();break;case 27:case 5:fe(t);break;case 4:ue(t,t.stateNode.containerInfo);break;case 10:qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ao(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(io(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(io(t),t.flags|=128,null);io(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Zi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(lo,lo.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:qi(t,oa,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,z&&t.flags&1048576&&ki(t,Si,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Da(t.elementType),t.type=e,typeof e==`function`)li(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===ee){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=A(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ue(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Va(e,t),Ja(t,r,null,n);var s=t.memoizedState;if(r=s.cache,qi(t,oa,r),r!==o.cache&&Xi(t,[oa],n,!0),qa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=vi(Error(i(424)),t),Ui(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Pi=lf(e.firstChild),Ni=t,z=!0,B=null,Fi=!0,n=Ra(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Vi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=Af(t.type,null,t.pendingProps,null))?t.memoizedState=n:z||(n=t.type,e=t.pendingProps,r=Vd(ce.current).createElement(n),r[st]=t,r[ct]=e,Fd(r,n,e),bt(r),t.stateNode=r):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fe(t),e===null&&z&&(r=t.stateNode=pf(t.type,t.pendingProps,ce.current),Ni=t,Fi=!0,a=Pi,Qd(t.type)?(uf=a,Pi=lf(r.firstChild)):Pi=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&z&&((a=r=Pi)&&(r=nf(r,t.type,t.pendingProps,Fi),r===null?a=!1:(t.stateNode=r,Ni=t,Pi=lf(r.firstChild),Fi=!1,a=!0)),a||Li(t)),fe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&z&&((e=n=Pi)&&(n=rf(n,t.pendingProps,Fi),n===null?e=!1:(t.stateNode=n,Ni=t,Pi=null,e=!0)),e||Li(t)),null;case 13:return Cc(e,t,n);case 4:return ue(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=La(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,qi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,$i(t),a=ea(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return $i(t),r=ea(oa),e===null?(a=va(),a===null&&(a=zl,o=sa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ba(t),qi(t,oa,a)):((e.lanes&n)!==0&&(Va(e,t),Ja(t,null,null,n),qa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,qi(t,oa,r),r!==a.cache&&Xi(t,[oa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),qi(t,oa,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Tu())e.flags|=8192;else throw Oa=wa,Sa}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(Tu())e.flags|=8192;else throw Oa=wa,Sa}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ye(),e.lanes|=t,Xl|=t)}function Rc(e,t){if(!z)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(ji(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ji(oa),de(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Hi())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(pe(t),n=ce.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=se.current,Bi(t)?Ri(t,e):(e=pf(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(pe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=se.current,Bi(t))Ri(t,o);else{var s=Vd(ce.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[st]=t,o[ct]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Fd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ce.current,Bi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ni,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Nd(e.nodeValue,n)),e||Li(t,!0)}else e=Vd(e).createTextNode(r),e[st]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Bi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[st]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(co(t),t):(co(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[st]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(co(t),t):(co(t),null)}return co(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return de(),e===null&&Cd(t.stateNode.containerInfo),U(t),null;case 10:return Ji(t.type),U(t),null;case 19:if(F(lo),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(Gl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=uo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)di(n,e),n=n.sibling;return I(lo,lo.current&1|2),z&&Oi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ee()>nu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=uo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!z)return U(t),null}else 2*Ee()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ee(),e.sibling=null,n=lo.current,I(lo,a?n&1|2:n&1),z&&Oi(t,r.treeForkCount),e);case 22:case 23:return co(t),to(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&F(_a),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ji(oa),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function W(e,t){switch(ji(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ji(oa),de(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return pe(t),null;case 31:if(t.memoizedState!==null){if(co(t),t.alternate===null)throw Error(i(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(co(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(lo),null;case 4:return de(),null;case 10:return Ji(t.type),null;case 22:case 23:return co(t),to(),e!==null&&F(_a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ji(oa),null;case 25:return null;default:return null}}function Bc(e,t){switch(ji(t),t.tag){case 3:Ji(oa),de();break;case 26:case 27:case 5:pe(t);break;case 4:de();break;case 31:t.memoizedState!==null&&co(t);break;case 13:co(t);break;case 19:F(lo);break;case 10:Ji(t.type);break;case 22:case 23:co(t),to(),e!==null&&F(_a);break;case 24:Ji(oa)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){X(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){X(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){X(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xa(t,n)}catch(t){X(e,e.return,t)}}}function Wc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){X(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){X(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){X(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){X(e,t,n)}else n.current=null}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){X(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[ct]=t}catch(t){X(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$t));else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[st]=e,t[ct]=n}catch(t){X(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,zd=sp,e=Dr(e),Or(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},sp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){X(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:tf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Vc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){X(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){X(n,n.return,e)}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Xa(e,t)}catch(e){X(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:bl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&fl(e,n);break;case 13:bl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yu.bind(null,n),cf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),el=i,tl=a}break;case 30:break;default:bl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ht(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var cl=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ie&&typeof Ie.onCommitFiberUnmount==`function`)try{Ie.onCommitFiberUnmount(Fe,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=cl,i=ll;Qd(n.type)&&(cl=n.stateNode,ll=!1),ul(e,t,n),mf(n.stateNode),cl=r,ll=i;break;case 5:tl||Kc(n,t);case 6:if(r=cl,i=ll,cl=null,ul(e,t,n),cl=r,ll=i,cl!==null)if(ll)try{(cl.nodeType===9?cl.body:cl.nodeName===`HTML`?cl.ownerDocument.body:cl).removeChild(n.stateNode)}catch(e){X(n,t,e)}else try{cl.removeChild(n.stateNode)}catch(e){X(n,t,e)}break;case 18:cl!==null&&(ll?(e=cl,$d(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):$d(cl,n.stateNode));break;case 4:r=cl,i=ll,cl=n.stateNode.containerInfo,ll=!0,ul(e,t,n),cl=r,ll=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ul(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ul(e,t,n),tl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){X(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){X(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Xu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Qd(c.type)){cl=c.stateNode,ll=!1;break a}break;case 5:cl=c.stateNode,ll=!1;break a;case 3:case 4:cl=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(cl===null)throw Error(i(160));dl(o,s,a),cl=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),G(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:gl(t,e),G(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),G(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[mt]||o[st]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Fd(o,r,n),o[st]=e,bt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[st]=e,bt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),G(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),G(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){a=e.stateNode;try{Gt(a,``)}catch(t){X(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Jc(e,a,n===null?a:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(gl(t,e),G(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){X(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=_f(t.containerInfo),gl(t,e),_l=a,G(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){X(e,e.return,t)}nl&&(nl=!1,yl(e));break;case 4:r=_l,_l=_f(e.stateNode.containerInfo),gl(t,e),G(e),_l=r;break;case 12:gl(t,e),G(e);break;case 31:gl(t,e),G(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),G(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Ee()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||a,tl=d||l,gl(t,e),tl=d,el=u,G(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||el||tl||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){X(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){X(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?ef(m,!0):ef(l.stateNode,!1)}catch(e){X(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),G(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),G(e)}}function G(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Qc(e,Xc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Gt(o,``),n.flags&=-33),Qc(e,Xc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Zc(e,Xc(e),s);break;default:throw Error(i(161))}}catch(t){X(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),xl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),xl(t);break;case 27:mf(t.stateNode);case 26:case 5:Kc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Vc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){X(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ya(c[i],s)}catch(e){X(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Gc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ca(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Vc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){X(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=_l;_l=_f(e.stateNode.containerInfo),Al(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ca(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Ll={getCacheForType:function(e){var t=ea(oa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ea(oa).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,zl=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,au=0,ou=null,su=null,cu=0,lu=0,uu=null,du=null,fu=0,pu=null;function mu(){return K&2&&J!==0?J&-J:M.T===null?it():fd()}function hu(){if(Yl===0)if(!(J&536870912)||z){var e=Ue;Ue<<=1,!(Ue&3932160)&&(Ue=262144),Yl=e}else Yl=536870912;return e=no.current,e!==null&&(e.flags|=32),Yl}function gu(e,t,n){(e===zl&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Cu(e,0),bu(e,J,Yl,!1)),Ze(e,n),(!(K&2)||e!==zl)&&(e===zl&&(!(K&2)&&(ql|=n),Gl===4&&bu(e,J,Yl,!1)),id(e))}function _u(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||qe(e,t),a=r?ju(e,t):ku(e,t,!0),o=r;do{if(a===0){Hl&&!r&&bu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!yu(n)){a=ku(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Cu(c,s).flags|=256),s=ku(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Cu(e,0),bu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:bu(r,t,Yl,!Vl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Ee(),10<a)){if(bu(r,t,Yl,!Vl),Ke(r,0,!0)!==0)break a;cu=t,r.timeoutHandle=qd(vu.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,`Throttled`,-0,0),a);break a}vu(r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,null,-0,0)}}break}while(1);id(e)}function vu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},jl(t,a,d);var m=(a&62914560)===a?eu-Ee():(a&4194048)===a?tu-Ee():0;if(m=qf(d,m),m!==null){cu=a,e.cancelPendingCommit=m(Ru.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),bu(e,a,o,!l);return}}Ru(e,t,a,n,r,i,o,s,c)}function yu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Sr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Re(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&$e(e,n,t)}function xu(){return K&6?!0:(ad(0,!1),!1)}function Su(){if(q!==null){if(Y===0)var e=q.return;else e=q,Ki=Gi=null,ko(e),ja=null,Ma=0,e=q;for(;e!==null;)Bc(e.alternate,e),e=e.return;q=null}}function Cu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),cu=0,Su(),zl=e,q=n=ui(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=qe(e,t),Ul=!1,Xl=Yl=Jl=ql=Kl=Gl=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Re(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ei(),n}function wu(e,t){V=null,M.H=zs,t===xa||t===Ca?(t=ka(),Y=3):t===Sa?(t=ka(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(Gl=1,Zs(e,vi(t,e.current)))}function Tu(){var e=no.current;return e===null?!0:(J&4194048)===J?ro===null:(J&62914560)===J||J&536870912?e===ro:!1}function Eu(){var e=M.H;return M.H=zs,e===null?zs:e}function Du(){var e=M.A;return M.A=Ll,e}function Ou(){Gl=4,Vl||(J&4194048)!==J&&no.current!==null||(Hl=!0),!(Kl&134217727)&&!(ql&134217727)||zl===null||bu(zl,J,Yl,!1)}function ku(e,t,n){var r=K;K|=2;var i=Eu(),a=Du();(zl!==e||J!==t)&&(ru=null,Cu(e,t)),t=!1;var o=Gl;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:Su(),o=6;break a;case 3:case 2:case 9:case 6:no.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Fu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Fu(e,s,c,l)}}Au(),o=Gl;break}catch(t){wu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ki=Gi=null,K=r,M.H=i,M.A=a,q===null&&(zl=null,J=0,ei()),o}function Au(){for(;q!==null;)Nu(q)}function ju(e,t){var n=K;K|=2;var r=Eu(),a=Du();zl!==e||J!==t?(ru=null,nu=Ee()+500,Cu(e,t)):Hl=qe(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Fu(e,t,o,1);break;case 2:case 9:if(Ta(o)){Y=0,Bl=null,Pu(t);break}t=function(){Y!==2&&Y!==9||zl!==e||(Y=7),id(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Ta(o)?(Y=0,Bl=null,Pu(t)):(Y=0,Bl=null,Fu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Iu(u))}break b}}Y=0,Bl=null,Fu(e,t,o,5);break;case 6:Y=0,Bl=null,Fu(e,t,o,6);break;case 8:Su(),Gl=6;break a;default:throw Error(i(462))}}Mu();break}catch(t){wu(e,t)}while(1);return Ki=Gi=null,M.H=r,M.A=a,K=n,q===null?(zl=null,J=0,ei(),Gl):0}function Mu(){for(;q!==null&&!we();)Nu(q)}function Nu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Iu(e):q=t}function Pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:ko(t);default:Bc(n,t),t=q=di(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Iu(e):q=t}function Fu(e,t,n,r){Ki=Gi=null,ko(t),ja=null,Ma=0;var i=t.return;try{if(nc(e,i,t,n,J)){Gl=1,Zs(e,vi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;Gl=1,Zs(e,vi(n,e.current)),q=null;return}t.flags&32768?(z||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=no.current,r!==null&&r.tag===13&&(r.flags|=16384))),Lu(t,e)):Iu(t)}function Iu(e){var t=e;do{if(t.flags&32768){Lu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);Gl===0&&(Gl=5)}function Lu(e,t){do{var n=W(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);Gl=6,q=null}function Ru(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Uu();while(au!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=$r,Qe(e,n,o,s,c,l),e===zl&&(q=zl=null,J=0),su=t,ou=e,cu=n,lu=o,uu=a,du=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Zu(Ae,function(){return Wu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=M.T,M.T=null,a=N.p,N.p=2,s=K,K|=4;try{al(e,t,n)}finally{K=s,N.p=a,M.T=r}}au=1,zu(),Bu(),Vu()}}function zu(){if(au===1){au=0;var e=ou,t=su,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=K;K|=4;try{vl(t,e);var a=Bd,o=Dr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Er(s.ownerDocument.documentElement,s)){if(c!==null&&Or(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Tr(s,h),v=Tr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!zd,Bd=zd=null}finally{K=i,N.p=r,M.T=n}}e.current=t,au=2}}function Bu(){if(au===2){au=0;var e=ou,t=su,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=K;K|=4;try{ol(e,t.alternate,t)}finally{K=i,N.p=r,M.T=n}}au=3}}function Vu(){if(au===4||au===3){au=0,Te();var e=ou,t=su,n=cu,r=du;t.subtreeFlags&10256||t.flags&10256?au=5:(au=0,su=ou=null,Hu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),rt(n),t=t.stateNode,Ie&&typeof Ie.onCommitFiberRoot==`function`)try{Ie.onCommitFiberRoot(Fe,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=M.T,i=N.p,N.p=2,M.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{M.T=t,N.p=i}}cu&3&&Uu(),id(e),i=e.pendingLanes,n&261930&&i&42?e===pu?fu++:(fu=0,pu=e):fu=0,ad(0,!1)}}function Hu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ca(t)))}function Uu(){return zu(),Bu(),Vu(),Wu()}function Wu(){if(au!==5)return!1;var e=ou,t=lu;lu=0;var n=rt(cu),r=M.T,a=N.p;try{N.p=32>n?32:n,M.T=null,n=uu,uu=null;var o=ou,s=cu;if(au=0,su=ou=null,cu=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,ad(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot==`function`)try{Ie.onPostCommitFiberRoot(Fe,o)}catch{}return!0}finally{N.p=a,M.T=r,Hu(e,t)}}function Gu(e,t,n){t=vi(n,t),t=$s(e.stateNode,t,2),e=Ua(e,t,2),e!==null&&(Ze(e,2),id(e))}function X(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=vi(n,e),n=ec(2),r=Ua(t,n,2),r!==null&&(tc(n,r,t,e),Ze(r,2),id(r));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=qu.bind(null,e,t,n),t.then(e,e))}function qu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,zl===e&&(J&n)===n&&(Gl===4||Gl===3&&(J&62914560)===J&&300>Ee()-eu?!(K&2)&&Cu(e,0):Jl|=n,Xl===J&&(Xl=0)),id(e)}function Ju(e,t){t===0&&(t=Ye()),e=ri(e,t),e!==null&&(Ze(e,t),id(e))}function Yu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Xu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ju(e,n)}function Zu(e,t){return Se(e,t)}var Qu=null,$u=null,ed=!1,td=!1,nd=!1,rd=0;function id(e){e!==$u&&e.next===null&&($u===null?Qu=$u=e:$u=$u.next=e),td=!0,ed||(ed=!0,dd())}function ad(e,t){if(!nd&&td){nd=!0;do for(var n=!1,r=Qu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Re(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ud(r,a))}else a=J,a=Ke(r,r===zl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||qe(r,a)||(n=!0,ud(r,a));r=r.next}while(n);nd=!1}}function od(){sd()}function sd(){td=ed=!1;var e=0;rd!==0&&Kd()&&(e=rd);for(var t=Ee(),n=null,r=Qu;r!==null;){var i=r.next,a=cd(r,t);a===0?(r.next=null,n===null?Qu=i:n.next=i,i===null&&($u=n)):(n=r,(e!==0||a&3)&&(td=!0)),r=i}au!==0&&au!==5||ad(e,!1),rd!==0&&(rd=0)}function cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Re(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Je(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=zl,n=J,n=Ke(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ce(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ce(r),rt(n)){case 2:case 8:n=ke;break;case 32:n=Ae;break;case 268435456:n=Me;break;default:n=Ae}return r=ld.bind(null,e),n=Se(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ce(r),e.callbackPriority=2,e.callbackNode=null,2}function ld(e,t){if(au!==0&&au!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Uu()&&e.callbackNode!==n)return null;var r=J;return r=Ke(e,e===zl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(_u(e,r,t),cd(e,Ee()),e.callbackNode!=null&&e.callbackNode===n?ld.bind(null,e):null)}function ud(e,t){if(Uu())return null;_u(e,t,!0)}function dd(){Xd(function(){K&6?Se(Oe,od):sd()})}function fd(){if(rd===0){var e=da;e===0&&(e=He,He<<=1,!(He&261888)&&(He=256)),rd=e}return rd}function pd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Qt(``+e)}function md(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=pd((i[ct]||null).action),o=r.submitter;o&&(t=(t=o[ct]||null)?pd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new xn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rd!==0){var e=o?md(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?md(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var gd=0;gd<Jr.length;gd++){var _d=Jr[gd];Yr(_d.toLowerCase(),`on`+(_d[0].toUpperCase()+_d.slice(1)))}Yr(Br,`onAnimationEnd`),Yr(Vr,`onAnimationIteration`),Yr(Hr,`onAnimationStart`),Yr(`dblclick`,`onDoubleClick`),Yr(`focusin`,`onFocus`),Yr(`focusout`,`onBlur`),Yr(Ur,`onTransitionRun`),Yr(Wr,`onTransitionStart`),Yr(Gr,`onTransitionCancel`),Yr(Kr,`onTransitionEnd`),wt(`onMouseEnter`,[`mouseout`,`mouseover`]),wt(`onMouseLeave`,[`mouseout`,`mouseover`]),wt(`onPointerEnter`,[`pointerout`,`pointerover`]),wt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ct(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ct(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ct(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ct(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ct(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ct(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var vd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),yd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(vd));function bd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Xr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Xr(e)}i.currentTarget=null,a=c}}}}function Z(e,t){var n=t[ut];n===void 0&&(n=t[ut]=new Set);var r=e+`__bubble`;n.has(r)||(wd(t,e,2,!1),n.add(r))}function xd(e,t,n){var r=0;t&&(r|=4),wd(n,e,r,t)}var Sd=`_reactListening`+Math.random().toString(36).slice(2);function Cd(e){if(!e[Sd]){e[Sd]=!0,xt.forEach(function(t){t!==`selectionchange`&&(yd.has(t)||xd(t,!1,e),xd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sd]||(t[Sd]=!0,xd(`selectionchange`,!1,t))}}function wd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!un||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Td(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=gt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}sn(function(){var r=a,i=tn(n),s=[];a:{var c=qr.get(e);if(c!==void 0){var l=xn,u=e;switch(e){case`keypress`:if(gn(n)===0)break a;case`keydown`:case`keyup`:l=zn;break;case`focusin`:u=`focus`,l=An;break;case`focusout`:u=`blur`,l=An;break;case`beforeblur`:case`afterblur`:l=An;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=On;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=kn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Vn;break;case Br:case Vr:case Hr:l=jn;break;case Kr:l=Hn;break;case`scroll`:case`scrollend`:l=Cn;break;case`wheel`:l=Un;break;case`copy`:case`cut`:case`paste`:l=Mn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Bn;break;case`toggle`:case`beforetoggle`:l=Wn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=cn(m,p),g!=null&&d.push(Ed(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==en&&(u=n.relatedTarget||n.fromElement)&&(gt(u)||u[lt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?gt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=On,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Bn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:vt(l),h=u==null?c:vt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,gt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Od,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&kd(s,c,l,d,!1),u!==null&&f!==null&&kd(s,f,u,d,!0)}}a:{if(c=r?vt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=ur;else if(ir(c))if(dr)v=br;else{v=vr;var y=_r}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Yt(r.elementType)&&(v=ur):v=yr;if(v&&=v(e,r)){ar(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Vt(c,`number`,c.value)}switch(y=r?vt(r):window,e){case`focusin`:(ir(y)||y.contentEditable===`true`)&&(Ar=y,jr=r,Mr=null);break;case`focusout`:Mr=jr=Ar=null;break;case`mousedown`:Nr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Nr=!1,Pr(s,n,i);break;case`selectionchange`:if(kr)break;case`keydown`:case`keyup`:Pr(s,n,i)}var b;if(Kn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else er?Qn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Yn&&n.locale!==`ko`&&(er||x!==`onCompositionStart`?x===`onCompositionEnd`&&er&&(b=hn()):(fn=i,pn=`value`in fn?fn.value:fn.textContent,er=!0)),y=Dd(r,x),0<y.length&&(x=new Nn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=$n(n),b!==null&&(x.data=b)))),(b=Jn?tr(e,n):nr(e,n))&&(x=Dd(r,`onBeforeInput`),0<x.length&&(y=new Nn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),hd(s,e,r,n,i)}bd(s,t)})}function Ed(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=cn(e,n),i!=null&&r.unshift(Ed(e,i,a)),i=cn(e,t),i!=null&&r.push(Ed(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Od(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=cn(n,a),l!=null&&o.unshift(Ed(n,l,c))):i||(l=cn(n,a),l!=null&&o.push(Ed(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ad=/\r\n?/g,jd=/\u0000|\uFFFD/g;function Md(e){return(typeof e==`string`?e:``+e).replace(Ad,`
`).replace(jd,``)}function Nd(e,t){return t=Md(t),Md(e)===t}function Q(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Gt(e,``+r);break;case`className`:At(e,`class`,r);break;case`tabIndex`:At(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:At(e,n,r);break;case`style`:Jt(e,r,o);break;case`data`:if(t!==`object`){At(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Q(e,t,`name`,a.name,a,null),Q(e,t,`formEncType`,a.formEncType,a,null),Q(e,t,`formMethod`,a.formMethod,a,null),Q(e,t,`formTarget`,a.formTarget,a,null)):(Q(e,t,`encType`,a.encType,a,null),Q(e,t,`method`,a.method,a,null),Q(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Qt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Z(`beforetoggle`,e),Z(`toggle`,e),kt(e,`popover`,r);break;case`xlinkActuate`:R(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:R(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:R(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:R(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:R(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:R(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:R(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:R(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:R(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:kt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Xt.get(n)||n,kt(e,n,r))}}function Pd(e,t,n,r,a,o){switch(n){case`style`:Jt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Gt(e,``+r);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!St.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ct]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):kt(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Z(`error`,e),Z(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,o,s,n,null)}}a&&Q(e,t,`srcSet`,n.srcSet,n,null),r&&Q(e,t,`src`,n.src,n,null);return;case`input`:Z(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Q(e,t,r,d,n,null)}}Bt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Z(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Q(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ht(e,!!r,n,!0):Ht(e,!!r,t,!1);return;case`textarea`:for(s in Z(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Q(e,t,s,c,n,null)}Wt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Q(e,t,l,r,n,null)}return;case`dialog`:Z(`beforetoggle`,e),Z(`toggle`,e),Z(`cancel`,e),Z(`close`,e);break;case`iframe`:case`object`:Z(`load`,e);break;case`video`:case`audio`:for(r=0;r<vd.length;r++)Z(vd[r],e);break;case`image`:Z(`error`,e),Z(`load`,e);break;case`details`:Z(`toggle`,e);break;case`embed`:case`source`:case`link`:Z(`error`,e),Z(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,u,r,n,null)}return;default:if(Yt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Q(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Q(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Q(e,t,p,m,r,f)}}zt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Q(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Q(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ht(e,!!n,n?[]:``,!1):Ht(e,!!n,t,!0)):Ht(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Q(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Q(e,t,s,a,r,o)}Ut(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Q(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Q(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Q(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Q(e,t,u,p,r,m)}return;default:if(Yt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Q(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Q(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e===Gd?!1:(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function Qd(e){return e===`head`}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)mf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,mf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[mt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&mf(e.ownerDocument.body);n=i}while(n);Np(t)}function ef(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function tf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:tf(n),ht(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[mt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lf(e.nextSibling),e===null)break}return null}function rf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lf(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lf(e.nextSibling),e===null))return null;return e}function of(e){return e.data===`$?`||e.data===`$~`}function sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var uf=null;function df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pf(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ht(e)}var hf=new Map,gf=new Set;function _f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vf=N.d;N.d={f:yf,r:bf,D:Cf,C:wf,L:Tf,m:Ef,X:Of,S:Df,M:kf};function yf(){var e=vf.f(),t=xu();return e||t}function bf(e){var t=_t(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):vf.r(e)}var xf=typeof document>`u`?null:document;function Sf(e,t,n){var r=xf;if(r&&typeof t==`string`&&t){var i=Rt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),gf.has(i)||(gf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),bt(t),r.head.appendChild(t)))}}function Cf(e){vf.D(e),Sf(`dns-prefetch`,e,null)}function wf(e,t){vf.C(e,t),Sf(`preconnect`,e,t)}function Tf(e,t,n){vf.L(e,t,n);var r=xf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Rt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Rt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Rt(n.imageSizes)+`"]`)):i+=`[href="`+Rt(e)+`"]`;var a=i;switch(t){case`style`:a=jf(e);break;case`script`:a=$(e)}hf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),hf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Mf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Fd(t,`link`,e),bt(t),r.head.appendChild(t)))}}function Ef(e,t){vf.m(e,t);var n=xf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Rt(r)+`"][href="`+Rt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=$(e)}if(!hf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),hf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),bt(r),n.head.appendChild(r)}}}function Df(e,t,n){vf.S(e,t,n);var r=xf;if(r&&e){var i=yt(r).hoistableStyles,a=jf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Mf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=hf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);bt(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Of(e,t){vf.X(e,t);var n=xf;if(n&&e){var r=yt(n).hoistableScripts,i=$(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=hf.get(i))&&zf(e,t),a=n.createElement(`script`),bt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t){vf.M(e,t);var n=xf;if(n&&e){var r=yt(n).hoistableScripts,i=$(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=hf.get(i))&&zf(e,t),a=n.createElement(`script`),bt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t,n,r){var a=(a=ce.current)?_f(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=jf(n.href),n=yt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=jf(n.href);var o=yt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Mf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),hf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hf.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=$(n),n=yt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function jf(e){return`href="`+Rt(e)+`"`}function Mf(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),bt(t),e.head.appendChild(t))}function $(e){return`[src="`+Rt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Rt(n.href)+`"]`);if(r)return t.instance=r,bt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),bt(r),Fd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=jf(n.href);var o=e.querySelector(Mf(a));if(o)return t.state.loading|=4,t.instance=o,bt(o),o;r=Nf(n),(a=hf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),bt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Fd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=$(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,bt(a),a):(r=n,(a=hf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),bt(a),Fd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[mt]||a[st]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=jf(r.href),a=t.querySelector(Mf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,bt(a);return}a=t.ownerDocument||t,r=Nf(r),(i=hf.get(i))&&Rf(r,i),a=a.createElement(`link`),bt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ci(3,null,null,t),e.current=a,a.stateNode=e,t=sa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ba(a),e}function tp(e){return e?(e=oi,e):oi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ha(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ua(e,r,t),n!==null&&(gu(n,e,t),Wa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ri(e,67108864);t!==null&&gu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=mu();t=nt(t);var n=ri(e,t);n!==null&&gu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=2,up(e,t,n,r)}finally{N.p=a,M.T=i}}function lp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=8,up(e,t,n,r)}finally{N.p=a,M.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Td(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=_t(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ge(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Re(o);s.entanglements[1]|=c,o&=~c}id(a),!(K&6)&&(nu=Ee()+500,ad(0,!1))}}break;case 31:case 13:s=ri(a,2),s!==null&&gu(s,a,2),xu(),ip(a,2)}if(a=dp(r),a===null&&Td(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Td(e,t,r,null,n)}}function dp(e){return e=tn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=gt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(De()){case Oe:return 2;case ke:return 8;case Ae:case je:return 32;case Me:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=_t(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=gt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,at(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,at(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);en=r,n.target.dispatchEvent(r),en=null}else return t=_t(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=_t(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ct]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ct]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,mu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),xu(),t[lt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=it();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:M,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Fe=zp.inject(Rp),Ie=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[lt]=t.current,Cd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=`{
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
      "fromLevelId": "level_jwi4ovhyra2ayxa5",
      "toLevelId": "level_tf1ug5dswkkzfhqa",
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
}`,b;function x(e,t,n){function r(n,r){if(n._zod||Object.defineProperty(n,"_zod",{value:{def:r,constr:o,traits:new Set},enumerable:!1}),n._zod.traits.has(e))return;n._zod.traits.add(e),t(n,r);let i=o.prototype,a=Object.keys(i);for(let e=0;e<a.length;e++){let t=a[e];t in n||(n[t]=i[t].bind(n))}}let i=n?.Parent??Object;class a extends i{}Object.defineProperty(a,"name",{value:e});function o(e){var t;let i=n?.Parent?new a:this;r(i,e),(t=i._zod).deferred??(t.deferred=[]);for(let e of i._zod.deferred)e();return i}return Object.defineProperty(o,"init",{value:r}),Object.defineProperty(o,Symbol.hasInstance,{value:t=>n?.Parent&&t instanceof n.Parent?!0:t?._zod?.traits?.has(e)}),Object.defineProperty(o,"name",{value:e}),o}var S=class extends Error{constructor(){super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`)}},C=class extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name=`ZodEncodeError`}};(b=globalThis).__zod_globalConfig??(b.__zod_globalConfig={});var w=globalThis.__zod_globalConfig;function T(e){return e&&Object.assign(w,e),w}function E(e){let t=Object.values(e).filter(e=>typeof e==`number`);return Object.entries(e).filter(([e,n])=>t.indexOf(+e)===-1).map(([e,t])=>t)}function ee(e,t){return typeof t==`bigint`?t.toString():t}function te(e){return{get value(){{let t=e();return Object.defineProperty(this,"value",{value:t}),t}throw Error(`cached value already set`)}}}function ne(e){return e==null}function re(e){let t=+!!e.startsWith(`^`),n=e.endsWith(`$`)?e.length-1:e.length;return e.slice(t,n)}var D=Symbol(`evaluating`);function O(e,t,n){let r;Object.defineProperty(e,t,{get(){if(r!==D)return r===void 0&&(r=D,r=n()),r},set(n){Object.defineProperty(e,t,{value:n})},configurable:!0})}function k(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!0,configurable:!0})}function A(...e){let t={};for(let n of e){let e=Object.getOwnPropertyDescriptors(n);Object.assign(t,e)}return Object.defineProperties({},t)}function j(e){return JSON.stringify(e)}function M(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,``).replace(/[\s_-]+/g,`-`).replace(/^-+|-+$/g,``)}var N=`captureStackTrace`in Error?Error.captureStackTrace:(...e)=>{};function P(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var ie=te(()=>{if(w.jitless||typeof navigator<`u`&&navigator?.userAgent?.includes(`Cloudflare`))return!1;try{return Function(``),!0}catch{return!1}});function ae(e){if(P(e)===!1)return!1;let t=e.constructor;if(t===void 0||typeof t!=`function`)return!0;let n=t.prototype;return!(P(n)===!1||Object.prototype.hasOwnProperty.call(n,`isPrototypeOf`)===!1)}function oe(e){return ae(e)?{...e}:Array.isArray(e)?[...e]:e instanceof Map?new Map(e):e instanceof Set?new Set(e):e}var F=new Set([`string`,`number`,`symbol`]);function I(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function se(e,t,n){let r=new e._zod.constr(t??e._zod.def);return(!t||n?.parent)&&(r._zod.parent=e),r}function L(e){let t=e;if(!t)return{};if(typeof t==`string`)return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error==`string`?{...t,error:()=>t.error}:t}function ce(e){return Object.keys(e).filter(t=>e[t]._zod.optin===`optional`&&e[t]._zod.optout===`optional`)}-Number.MAX_VALUE,Number.MAX_VALUE;function le(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.pick() cannot be used on object schemas containing refinements`);return se(e,A(e._zod.def,{get shape(){let e={};for(let r in t){if(!(r in n.shape))throw Error(`Unrecognized key: "${r}"`);t[r]&&(e[r]=n.shape[r])}return k(this,`shape`,e),e},checks:[]}))}function ue(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.omit() cannot be used on object schemas containing refinements`);return se(e,A(e._zod.def,{get shape(){let r={...e._zod.def.shape};for(let e in t){if(!(e in n.shape))throw Error(`Unrecognized key: "${e}"`);t[e]&&delete r[e]}return k(this,`shape`,r),r},checks:[]}))}function de(e,t){if(!ae(t))throw Error(`Invalid input to extend: expected a plain object`);let n=e._zod.def.checks;if(n&&n.length>0){let n=e._zod.def.shape;for(let e in t)if(Object.getOwnPropertyDescriptor(n,e)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return se(e,A(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t};return k(this,`shape`,n),n}}))}function fe(e,t){if(!ae(t))throw Error(`Invalid input to safeExtend: expected a plain object`);return se(e,A(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t};return k(this,`shape`,n),n}}))}function pe(e,t){if(e._zod.def.checks?.length)throw Error(`.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`);return se(e,A(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t._zod.def.shape};return k(this,`shape`,n),n},get catchall(){return t._zod.def.catchall},checks:t._zod.def.checks??[]}))}function me(e,t,n){let r=t._zod.def.checks;if(r&&r.length>0)throw Error(`.partial() cannot be used on object schemas containing refinements`);return se(t,A(t._zod.def,{get shape(){let r=t._zod.def.shape,i={...r};if(n)for(let t in n){if(!(t in r))throw Error(`Unrecognized key: "${t}"`);n[t]&&(i[t]=e?new e({type:`optional`,innerType:r[t]}):r[t])}else for(let t in r)i[t]=e?new e({type:`optional`,innerType:r[t]}):r[t];return k(this,`shape`,i),i},checks:[]}))}function he(e,t,n){return se(t,A(t._zod.def,{get shape(){let r=t._zod.def.shape,i={...r};if(n)for(let t in n){if(!(t in i))throw Error(`Unrecognized key: "${t}"`);n[t]&&(i[t]=new e({type:`nonoptional`,innerType:r[t]}))}else for(let t in r)i[t]=new e({type:`nonoptional`,innerType:r[t]});return k(this,`shape`,i),i}}))}function ge(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue!==!0)return!0;return!1}function _e(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue===!1)return!0;return!1}function ve(e,t){return t.map(t=>{var n;return(n=t).path??(n.path=[]),t.path.unshift(e),t})}function ye(e){return typeof e==`string`?e:e?.message}function be(e,t,n){let r=e.message?e.message:ye(e.inst?._zod.def?.error?.(e))??ye(t?.error?.(e))??ye(n.customError?.(e))??ye(n.localeError?.(e))??`Invalid input`,{inst:i,continue:a,input:o,...s}=e;return s.path??=[],s.message=r,t?.reportInput&&(s.input=o),s}function xe(e){return Array.isArray(e)?`array`:typeof e==`string`?`string`:`unknown`}function Se(...e){let[t,n,r]=e;return typeof t==`string`?{message:t,code:`custom`,input:n,inst:r}:{...t}}var Ce=(e,t)=>{e.name=`$ZodError`,Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:t,enumerable:!1}),e.message=JSON.stringify(t,ee,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},we=x(`$ZodError`,Ce),Te=x(`$ZodError`,Ce,{Parent:Error});function Ee(e,t=e=>e.message){let n={},r=[];for(let i of e.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(t(i))):r.push(t(i));return{formErrors:r,fieldErrors:n}}function De(e,t=e=>e.message){let n={_errors:[]},r=(e,i=[])=>{for(let a of e.issues)if(a.code===`invalid_union`&&a.errors.length)a.errors.map(e=>r({issues:e},[...i,...a.path]));else if(a.code===`invalid_key`)r({issues:a.issues},[...i,...a.path]);else if(a.code===`invalid_element`)r({issues:a.issues},[...i,...a.path]);else{let e=[...i,...a.path];if(e.length===0)n._errors.push(t(a));else{let r=n,i=0;for(;i<e.length;){let n=e[i];i===e.length-1?(r[n]=r[n]||{_errors:[]},r[n]._errors.push(t(a))):r[n]=r[n]||{_errors:[]},r=r[n],i++}}}};return r(e),n}var Oe=e=>(t,n,r,i)=>{let a=r?{...r,async:!1}:{async:!1},o=t._zod.run({value:n,issues:[]},a);if(o instanceof Promise)throw new S;if(o.issues.length){let t=new((i?.Err)??e)(o.issues.map(e=>be(e,a,T())));throw N(t,i?.callee),t}return o.value},ke=e=>async(t,n,r,i)=>{let a=r?{...r,async:!0}:{async:!0},o=t._zod.run({value:n,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){let t=new((i?.Err)??e)(o.issues.map(e=>be(e,a,T())));throw N(t,i?.callee),t}return o.value},Ae=e=>(t,n,r)=>{let i=r?{...r,async:!1}:{async:!1},a=t._zod.run({value:n,issues:[]},i);if(a instanceof Promise)throw new S;return a.issues.length?{success:!1,error:new(e??we)(a.issues.map(e=>be(e,i,T())))}:{success:!0,data:a.value}},je=Ae(Te),Me=e=>async(t,n,r)=>{let i=r?{...r,async:!0}:{async:!0},a=t._zod.run({value:n,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?{success:!1,error:new e(a.issues.map(e=>be(e,i,T())))}:{success:!0,data:a.value}},Ne=Me(Te),Pe=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Oe(e)(t,n,i)},Fe=e=>(t,n,r)=>Oe(e)(t,n,r),Ie=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return ke(e)(t,n,i)},Le=e=>async(t,n,r)=>ke(e)(t,n,r),Re=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Ae(e)(t,n,i)},ze=e=>(t,n,r)=>Ae(e)(t,n,r),Be=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Me(e)(t,n,i)},Ve=e=>async(t,n,r)=>Me(e)(t,n,r),He=/^[cC][0-9a-z]{6,}$/,Ue=/^[0-9a-z]+$/,We=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Ge=/^[0-9a-vA-V]{20}$/,Ke=/^[A-Za-z0-9]{27}$/,qe=/^[a-zA-Z0-9_-]{21}$/,Je=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Ye=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Xe=e=>e?RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Ze=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,Qe=`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;function $e(){return new RegExp(Qe,`u`)}var et=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,tt=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,nt=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,rt=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,it=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,at=/^[A-Za-z0-9_-]*$/,ot=/^https?$/,st=/^\+[1-9]\d{6,14}$/,ct=`(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`,lt=RegExp(`^${ct}$`);function ut(e){let t=`(?:[01]\\d|2[0-3]):[0-5]\\d`;return typeof e.precision==`number`?e.precision===-1?`${t}`:e.precision===0?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}function dt(e){return RegExp(`^${ut(e)}$`)}function ft(e){let t=ut({precision:e.precision}),n=[`Z`];e.local&&n.push(``),e.offset&&n.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);let r=`${t}(?:${n.join(`|`)})`;return RegExp(`^${ct}T(?:${r})$`)}var pt=e=>{let t=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??``}}`:`[\\s\\S]*`;return RegExp(`^${t}$`)},mt=/^-?\d+(?:\.\d+)?$/,ht=/^[^A-Z]*$/,gt=/^[^a-z]*$/,_t=x(`$ZodCheck`,(e,t)=>{var n;e._zod??={},e._zod.def=t,(n=e._zod).onattach??(n.onattach=[])}),vt=x(`$ZodCheckMaxLength`,(e,t)=>{var n;_t.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!ne(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag.maximum??1/0;t.maximum<n&&(e._zod.bag.maximum=t.maximum)}),e._zod.check=n=>{let r=n.value;if(r.length<=t.maximum)return;let i=xe(r);n.issues.push({origin:i,code:`too_big`,maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),yt=x(`$ZodCheckMinLength`,(e,t)=>{var n;_t.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!ne(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag.minimum??-1/0;t.minimum>n&&(e._zod.bag.minimum=t.minimum)}),e._zod.check=n=>{let r=n.value;if(r.length>=t.minimum)return;let i=xe(r);n.issues.push({origin:i,code:`too_small`,minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),bt=x(`$ZodCheckLengthEquals`,(e,t)=>{var n;_t.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!ne(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag;n.minimum=t.length,n.maximum=t.length,n.length=t.length}),e._zod.check=n=>{let r=n.value,i=r.length;if(i===t.length)return;let a=xe(r),o=i>t.length;n.issues.push({origin:a,...o?{code:`too_big`,maximum:t.length}:{code:`too_small`,minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),xt=x(`$ZodCheckStringFormat`,(e,t)=>{var n,r;_t.init(e,t),e._zod.onattach.push(e=>{let n=e._zod.bag;n.format=t.format,t.pattern&&(n.patterns??=new Set,n.patterns.add(t.pattern))}),t.pattern?(n=e._zod).check??(n.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:t.format,input:n.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}):(r=e._zod).check??(r.check=()=>{})}),St=x(`$ZodCheckRegex`,(e,t)=>{xt.init(e,t),e._zod.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:`regex`,input:n.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),Ct=x(`$ZodCheckLowerCase`,(e,t)=>{t.pattern??=ht,xt.init(e,t)}),wt=x(`$ZodCheckUpperCase`,(e,t)=>{t.pattern??=gt,xt.init(e,t)}),Tt=x(`$ZodCheckIncludes`,(e,t)=>{_t.init(e,t);let n=I(t.includes),r=new RegExp(typeof t.position==`number`?`^.{${t.position}}${n}`:n);t.pattern=r,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=new Set,t.patterns.add(r)}),e._zod.check=n=>{n.value.includes(t.includes,t.position)||n.issues.push({origin:`string`,code:`invalid_format`,format:`includes`,includes:t.includes,input:n.value,inst:e,continue:!t.abort})}}),Et=x(`$ZodCheckStartsWith`,(e,t)=>{_t.init(e,t);let n=RegExp(`^${I(t.prefix)}.*`);t.pattern??=n,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=new Set,t.patterns.add(n)}),e._zod.check=n=>{n.value.startsWith(t.prefix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`starts_with`,prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),Dt=x(`$ZodCheckEndsWith`,(e,t)=>{_t.init(e,t);let n=RegExp(`.*${I(t.suffix)}$`);t.pattern??=n,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=new Set,t.patterns.add(n)}),e._zod.check=n=>{n.value.endsWith(t.suffix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`ends_with`,suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}}),Ot=x(`$ZodCheckOverwrite`,(e,t)=>{_t.init(e,t),e._zod.check=e=>{e.value=t.tx(e.value)}}),kt=class{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),--this.indent}write(e){if(typeof e==`function`){e(this,{execution:`sync`}),e(this,{execution:`async`});return}let t=e.split(`
`).filter(e=>e),n=Math.min(...t.map(e=>e.length-e.trimStart().length)),r=t.map(e=>e.slice(n)).map(e=>` `.repeat(this.indent*2)+e);for(let e of r)this.content.push(e)}compile(){let e=Function,t=this?.args,n=[...(this?.content??[``]).map(e=>`  ${e}`)];return new e(...t,n.join(`
`))}},At={major:4,minor:4,patch:3},R=x(`$ZodType`,(e,t)=>{var n;e??={},e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=At;let r=[...e._zod.def.checks??[]];e._zod.traits.has(`$ZodCheck`)&&r.unshift(e);for(let t of r)for(let n of t._zod.onattach)n(e);if(r.length===0)(n=e._zod).deferred??(n.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let t=(e,t,n)=>{let r=ge(e),i;for(let a of t){if(a._zod.def.when){if(_e(e)||!a._zod.def.when(e))continue}else if(r)continue;let t=e.issues.length,o=a._zod.check(e);if(o instanceof Promise&&n?.async===!1)throw new S;if(i||o instanceof Promise)i=(i??Promise.resolve()).then(async()=>{await o,e.issues.length!==t&&(r||=ge(e,t))});else{if(e.issues.length===t)continue;r||=ge(e,t)}}return i?i.then(()=>e):e},n=(n,i,a)=>{if(ge(n))return n.aborted=!0,n;let o=t(i,r,a);if(o instanceof Promise){if(a.async===!1)throw new S;return o.then(t=>e._zod.parse(t,a))}return e._zod.parse(o,a)};e._zod.run=(i,a)=>{if(a.skipChecks)return e._zod.parse(i,a);if(a.direction===`backward`){let t=e._zod.parse({value:i.value,issues:[]},{...a,skipChecks:!0});return t instanceof Promise?t.then(e=>n(e,i,a)):n(t,i,a)}let o=e._zod.parse(i,a);if(o instanceof Promise){if(a.async===!1)throw new S;return o.then(e=>t(e,r,a))}return t(o,r,a)}}O(e,`~standard`,()=>({validate:t=>{try{let n=je(e,t);return n.success?{value:n.data}:{issues:n.error?.issues}}catch{return Ne(e,t).then(e=>e.success?{value:e.data}:{issues:e.error?.issues})}},vendor:`zod`,version:1}))}),jt=x(`$ZodString`,(e,t)=>{R.init(e,t),e._zod.pattern=[...e?._zod.bag?.patterns??[]].pop()??pt(e._zod.bag),e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=String(n.value)}catch{}return typeof n.value==`string`||n.issues.push({expected:`string`,code:`invalid_type`,input:n.value,inst:e}),n}}),Mt=x(`$ZodStringFormat`,(e,t)=>{xt.init(e,t),jt.init(e,t)}),Nt=x(`$ZodGUID`,(e,t)=>{t.pattern??=Ye,Mt.init(e,t)}),Pt=x(`$ZodUUID`,(e,t)=>{if(t.version){let e={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(e===void 0)throw Error(`Invalid UUID version: "${t.version}"`);t.pattern??=Xe(e)}else t.pattern??=Xe();Mt.init(e,t)}),Ft=x(`$ZodEmail`,(e,t)=>{t.pattern??=Ze,Mt.init(e,t)}),It=x(`$ZodURL`,(e,t)=>{Mt.init(e,t),e._zod.check=n=>{try{let r=n.value.trim();if(!t.normalize&&t.protocol?.source===ot.source&&!/^https?:\/\//i.test(r)){n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid URL format`,input:n.value,inst:e,continue:!t.abort});return}let i=new URL(r);t.hostname&&(t.hostname.lastIndex=0,t.hostname.test(i.hostname)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid hostname`,pattern:t.hostname.source,input:n.value,inst:e,continue:!t.abort})),t.protocol&&(t.protocol.lastIndex=0,t.protocol.test(i.protocol.endsWith(`:`)?i.protocol.slice(0,-1):i.protocol)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid protocol`,pattern:t.protocol.source,input:n.value,inst:e,continue:!t.abort})),t.normalize?n.value=i.href:n.value=r;return}catch{n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort})}}}),Lt=x(`$ZodEmoji`,(e,t)=>{t.pattern??=$e(),Mt.init(e,t)}),Rt=x(`$ZodNanoID`,(e,t)=>{t.pattern??=qe,Mt.init(e,t)}),zt=x(`$ZodCUID`,(e,t)=>{t.pattern??=He,Mt.init(e,t)}),Bt=x(`$ZodCUID2`,(e,t)=>{t.pattern??=Ue,Mt.init(e,t)}),Vt=x(`$ZodULID`,(e,t)=>{t.pattern??=We,Mt.init(e,t)}),Ht=x(`$ZodXID`,(e,t)=>{t.pattern??=Ge,Mt.init(e,t)}),Ut=x(`$ZodKSUID`,(e,t)=>{t.pattern??=Ke,Mt.init(e,t)}),Wt=x(`$ZodISODateTime`,(e,t)=>{t.pattern??=ft(t),Mt.init(e,t)}),Gt=x(`$ZodISODate`,(e,t)=>{t.pattern??=lt,Mt.init(e,t)}),Kt=x(`$ZodISOTime`,(e,t)=>{t.pattern??=dt(t),Mt.init(e,t)}),qt=x(`$ZodISODuration`,(e,t)=>{t.pattern??=Je,Mt.init(e,t)}),Jt=x(`$ZodIPv4`,(e,t)=>{t.pattern??=et,Mt.init(e,t),e._zod.bag.format=`ipv4`}),Yt=x(`$ZodIPv6`,(e,t)=>{t.pattern??=tt,Mt.init(e,t),e._zod.bag.format=`ipv6`,e._zod.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:`invalid_format`,format:`ipv6`,input:n.value,inst:e,continue:!t.abort})}}}),Xt=x(`$ZodCIDRv4`,(e,t)=>{t.pattern??=nt,Mt.init(e,t)}),Zt=x(`$ZodCIDRv6`,(e,t)=>{t.pattern??=rt,Mt.init(e,t),e._zod.check=n=>{let r=n.value.split(`/`);try{if(r.length!==2)throw Error();let[e,t]=r;if(!t)throw Error();let n=Number(t);if(`${n}`!==t||n<0||n>128)throw Error();new URL(`http://[${e}]`)}catch{n.issues.push({code:`invalid_format`,format:`cidrv6`,input:n.value,inst:e,continue:!t.abort})}}});function Qt(e){if(e===``)return!0;if(/\s/.test(e)||e.length%4!=0)return!1;try{return atob(e),!0}catch{return!1}}var $t=x(`$ZodBase64`,(e,t)=>{t.pattern??=it,Mt.init(e,t),e._zod.bag.contentEncoding=`base64`,e._zod.check=n=>{Qt(n.value)||n.issues.push({code:`invalid_format`,format:`base64`,input:n.value,inst:e,continue:!t.abort})}});function en(e){if(!at.test(e))return!1;let t=e.replace(/[-_]/g,e=>e===`-`?`+`:`/`);return Qt(t.padEnd(Math.ceil(t.length/4)*4,`=`))}var tn=x(`$ZodBase64URL`,(e,t)=>{t.pattern??=at,Mt.init(e,t),e._zod.bag.contentEncoding=`base64url`,e._zod.check=n=>{en(n.value)||n.issues.push({code:`invalid_format`,format:`base64url`,input:n.value,inst:e,continue:!t.abort})}}),nn=x(`$ZodE164`,(e,t)=>{t.pattern??=st,Mt.init(e,t)});function rn(e,t=null){try{let n=e.split(`.`);if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let i=JSON.parse(atob(r));return!(`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&(!(`alg`in i)||i.alg!==t))}catch{return!1}}var an=x(`$ZodJWT`,(e,t)=>{Mt.init(e,t),e._zod.check=n=>{rn(n.value,t.alg)||n.issues.push({code:`invalid_format`,format:`jwt`,input:n.value,inst:e,continue:!t.abort})}}),on=x(`$ZodUnknown`,(e,t)=>{R.init(e,t),e._zod.parse=e=>e}),sn=x(`$ZodNever`,(e,t)=>{R.init(e,t),e._zod.parse=(t,n)=>(t.issues.push({expected:`never`,code:`invalid_type`,input:t.value,inst:e}),t)});function cn(e,t,n){e.issues.length&&t.issues.push(...ve(n,e.issues)),t.value[n]=e.value}var ln=x(`$ZodArray`,(e,t)=>{R.init(e,t),e._zod.parse=(n,r)=>{let i=n.value;if(!Array.isArray(i))return n.issues.push({expected:`array`,code:`invalid_type`,input:i,inst:e}),n;n.value=Array(i.length);let a=[];for(let e=0;e<i.length;e++){let o=i[e],s=t.element._zod.run({value:o,issues:[]},r);s instanceof Promise?a.push(s.then(t=>cn(t,n,e))):cn(s,n,e)}return a.length?Promise.all(a).then(()=>n):n}});function un(e,t,n,r,i,a){let o=n in r;if(e.issues.length){if(i&&a&&!o)return;t.issues.push(...ve(n,e.issues))}if(!o&&!i){e.issues.length||t.issues.push({code:`invalid_type`,expected:`nonoptional`,input:void 0,path:[n]});return}e.value===void 0?o&&(t.value[n]=void 0):t.value[n]=e.value}function dn(e){let t=Object.keys(e.shape);for(let n of t)if(!e.shape?.[n]?._zod?.traits?.has(`$ZodType`))throw Error(`Invalid element at key "${n}": expected a Zod schema`);let n=ce(e.shape);return{...e,keys:t,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(n)}}function fn(e,t,n,r,i,a){let o=[],s=i.keySet,c=i.catchall._zod,l=c.def.type,u=c.optin===`optional`,d=c.optout===`optional`;for(let i in t){if(i===`__proto__`||s.has(i))continue;if(l===`never`){o.push(i);continue}let a=c.run({value:t[i],issues:[]},r);a instanceof Promise?e.push(a.then(e=>un(e,n,i,t,u,d))):un(a,n,i,t,u,d)}return o.length&&n.issues.push({code:`unrecognized_keys`,keys:o,input:t,inst:a}),e.length?Promise.all(e).then(()=>n):n}var pn=x(`$ZodObject`,(e,t)=>{if(R.init(e,t),!Object.getOwnPropertyDescriptor(t,`shape`)?.get){let e=t.shape;Object.defineProperty(t,"shape",{get:()=>{let n={...e};return Object.defineProperty(t,"shape",{value:n}),n}})}let n=te(()=>dn(t));O(e._zod,`propValues`,()=>{let e=t.shape,n={};for(let t in e){let r=e[t]._zod;if(r.values){n[t]??(n[t]=new Set);for(let e of r.values)n[t].add(e)}}return n});let r=P,i=t.catchall,a;e._zod.parse=(t,o)=>{a??=n.value;let s=t.value;if(!r(s))return t.issues.push({expected:`object`,code:`invalid_type`,input:s,inst:e}),t;t.value={};let c=[],l=a.shape;for(let e of a.keys){let n=l[e],r=n._zod.optin===`optional`,i=n._zod.optout===`optional`,a=n._zod.run({value:s[e],issues:[]},o);a instanceof Promise?c.push(a.then(n=>un(n,t,e,s,r,i))):un(a,t,e,s,r,i)}return i?fn(c,s,t,o,n.value,e):c.length?Promise.all(c).then(()=>t):t}}),mn=x(`$ZodObjectJIT`,(e,t)=>{pn.init(e,t);let n=e._zod.parse,r=te(()=>dn(t)),i=e=>{let t=new kt([`shape`,`payload`,`ctx`]),n=r.value,i=e=>{let t=j(e);return`shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`};t.write(`const input = payload.value;`);let a=Object.create(null),o=0;for(let e of n.keys)a[e]=`key_${o++}`;t.write(`const newResult = {};`);for(let r of n.keys){let n=a[r],o=j(r),s=e[r],c=s?._zod?.optin===`optional`,l=s?._zod?.optout===`optional`;t.write(`const ${n} = ${i(r)};`),c&&l?t.write(`
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

      `)}t.write(`payload.value = newResult;`),t.write(`return payload;`);let s=t.compile();return(t,n)=>s(e,t,n)},a,o=P,s=!w.jitless,c=s&&ie.value,l=t.catchall,u;e._zod.parse=(d,f)=>{u??=r.value;let p=d.value;return o(p)?s&&c&&f?.async===!1&&f.jitless!==!0?(a||=i(t.shape),d=a(d,f),l?fn([],p,d,f,u,e):d):n(d,f):(d.issues.push({expected:`object`,code:`invalid_type`,input:p,inst:e}),d)}});function hn(e,t,n,r){for(let n of e)if(n.issues.length===0)return t.value=n.value,t;let i=e.filter(e=>!ge(e));return i.length===1?(t.value=i[0].value,i[0]):(t.issues.push({code:`invalid_union`,input:t.value,inst:n,errors:e.map(e=>e.issues.map(e=>be(e,r,T())))}),t)}var gn=x(`$ZodUnion`,(e,t)=>{R.init(e,t),O(e._zod,`optin`,()=>t.options.some(e=>e._zod.optin===`optional`)?`optional`:void 0),O(e._zod,`optout`,()=>t.options.some(e=>e._zod.optout===`optional`)?`optional`:void 0),O(e._zod,`values`,()=>{if(t.options.every(e=>e._zod.values))return new Set(t.options.flatMap(e=>Array.from(e._zod.values)))}),O(e._zod,`pattern`,()=>{if(t.options.every(e=>e._zod.pattern)){let e=t.options.map(e=>e._zod.pattern);return RegExp(`^(${e.map(e=>re(e.source)).join(`|`)})$`)}});let n=t.options.length===1?t.options[0]._zod.run:null;e._zod.parse=(r,i)=>{if(n)return n(r,i);let a=!1,o=[];for(let e of t.options){let t=e._zod.run({value:r.value,issues:[]},i);if(t instanceof Promise)o.push(t),a=!0;else{if(t.issues.length===0)return t;o.push(t)}}return a?Promise.all(o).then(t=>hn(t,r,e,i)):hn(o,r,e,i)}}),_n=x(`$ZodIntersection`,(e,t)=>{R.init(e,t),e._zod.parse=(e,n)=>{let r=e.value,i=t.left._zod.run({value:r,issues:[]},n),a=t.right._zod.run({value:r,issues:[]},n);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([t,n])=>yn(e,t,n)):yn(e,i,a)}});function vn(e,t){if(e===t||e instanceof Date&&t instanceof Date&&+e==+t)return{valid:!0,data:e};if(ae(e)&&ae(t)){let n=Object.keys(t),r=Object.keys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};for(let n of r){let r=vn(e[n],t[n]);if(!r.valid)return{valid:!1,mergeErrorPath:[n,...r.mergeErrorPath]};i[n]=r.data}return{valid:!0,data:i}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=vn(i,a);if(!o.valid)return{valid:!1,mergeErrorPath:[r,...o.mergeErrorPath]};n.push(o.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function yn(e,t,n){let r=new Map,i;for(let n of t.issues)if(n.code===`unrecognized_keys`){i??=n;for(let e of n.keys)r.has(e)||r.set(e,{}),r.get(e).l=!0}else e.issues.push(n);for(let t of n.issues)if(t.code===`unrecognized_keys`)for(let e of t.keys)r.has(e)||r.set(e,{}),r.get(e).r=!0;else e.issues.push(t);let a=[...r].filter(([,e])=>e.l&&e.r).map(([e])=>e);if(a.length&&i&&e.issues.push({...i,keys:a}),ge(e))return e;let o=vn(t.value,n.value);if(!o.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);return e.value=o.data,e}var bn=x(`$ZodRecord`,(e,t)=>{R.init(e,t),e._zod.parse=(n,r)=>{let i=n.value;if(!ae(i))return n.issues.push({expected:`record`,code:`invalid_type`,input:i,inst:e}),n;let a=[],o=t.keyType._zod.values;if(o){n.value={};let s=new Set;for(let c of o)if(typeof c==`string`||typeof c==`number`||typeof c==`symbol`){s.add(typeof c==`number`?c.toString():c);let o=t.keyType._zod.run({value:c,issues:[]},r);if(o instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);if(o.issues.length){n.issues.push({code:`invalid_key`,origin:`record`,issues:o.issues.map(e=>be(e,r,T())),input:c,path:[c],inst:e});continue}let l=o.value,u=t.valueType._zod.run({value:i[c],issues:[]},r);u instanceof Promise?a.push(u.then(e=>{e.issues.length&&n.issues.push(...ve(c,e.issues)),n.value[l]=e.value})):(u.issues.length&&n.issues.push(...ve(c,u.issues)),n.value[l]=u.value)}let c;for(let e in i)s.has(e)||(c??=[],c.push(e));c&&c.length>0&&n.issues.push({code:`unrecognized_keys`,input:i,inst:e,keys:c})}else{n.value={};for(let o of Reflect.ownKeys(i)){if(o===`__proto__`||!Object.prototype.propertyIsEnumerable.call(i,o))continue;let s=t.keyType._zod.run({value:o,issues:[]},r);if(s instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);if(typeof o==`string`&&mt.test(o)&&s.issues.length){let e=t.keyType._zod.run({value:Number(o),issues:[]},r);if(e instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);e.issues.length===0&&(s=e)}if(s.issues.length){t.mode===`loose`?n.value[o]=i[o]:n.issues.push({code:`invalid_key`,origin:`record`,issues:s.issues.map(e=>be(e,r,T())),input:o,path:[o],inst:e});continue}let c=t.valueType._zod.run({value:i[o],issues:[]},r);c instanceof Promise?a.push(c.then(e=>{e.issues.length&&n.issues.push(...ve(o,e.issues)),n.value[s.value]=e.value})):(c.issues.length&&n.issues.push(...ve(o,c.issues)),n.value[s.value]=c.value)}}return a.length?Promise.all(a).then(()=>n):n}}),xn=x(`$ZodEnum`,(e,t)=>{R.init(e,t);let n=E(t.entries),r=new Set(n);e._zod.values=r,e._zod.pattern=RegExp(`^(${n.filter(e=>F.has(typeof e)).map(e=>typeof e==`string`?I(e):e.toString()).join(`|`)})$`),e._zod.parse=(t,i)=>{let a=t.value;return r.has(a)||t.issues.push({code:`invalid_value`,values:n,input:a,inst:e}),t}}),Sn=x(`$ZodTransform`,(e,t)=>{R.init(e,t),e._zod.optin=`optional`,e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new C(e.constructor.name);let i=t.transform(n.value,n);if(r.async)return(i instanceof Promise?i:Promise.resolve(i)).then(e=>(n.value=e,n.fallback=!0,n));if(i instanceof Promise)throw new S;return n.value=i,n.fallback=!0,n}});function Cn(e,t){return t===void 0&&(e.issues.length||e.fallback)?{issues:[],value:void 0}:e}var wn=x(`$ZodOptional`,(e,t)=>{R.init(e,t),e._zod.optin=`optional`,e._zod.optout=`optional`,O(e._zod,`values`,()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,void 0]):void 0),O(e._zod,`pattern`,()=>{let e=t.innerType._zod.pattern;return e?RegExp(`^(${re(e.source)})?$`):void 0}),e._zod.parse=(e,n)=>{if(t.innerType._zod.optin===`optional`){let r=e.value,i=t.innerType._zod.run(e,n);return i instanceof Promise?i.then(e=>Cn(e,r)):Cn(i,r)}return e.value===void 0?e:t.innerType._zod.run(e,n)}}),Tn=x(`$ZodExactOptional`,(e,t)=>{wn.init(e,t),O(e._zod,`values`,()=>t.innerType._zod.values),O(e._zod,`pattern`,()=>t.innerType._zod.pattern),e._zod.parse=(e,n)=>t.innerType._zod.run(e,n)}),En=x(`$ZodNullable`,(e,t)=>{R.init(e,t),O(e._zod,`optin`,()=>t.innerType._zod.optin),O(e._zod,`optout`,()=>t.innerType._zod.optout),O(e._zod,`pattern`,()=>{let e=t.innerType._zod.pattern;return e?RegExp(`^(${re(e.source)}|null)$`):void 0}),O(e._zod,`values`,()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,null]):void 0),e._zod.parse=(e,n)=>e.value===null?e:t.innerType._zod.run(e,n)}),Dn=x(`$ZodDefault`,(e,t)=>{R.init(e,t),e._zod.optin=`optional`,O(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);if(e.value===void 0)return e.value=t.defaultValue,e;let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(e=>On(e,t)):On(r,t)}});function On(e,t){return e.value===void 0&&(e.value=t.defaultValue),e}var kn=x(`$ZodPrefault`,(e,t)=>{R.init(e,t),e._zod.optin=`optional`,O(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>(n.direction===`backward`||e.value===void 0&&(e.value=t.defaultValue),t.innerType._zod.run(e,n))}),An=x(`$ZodNonOptional`,(e,t)=>{R.init(e,t),O(e._zod,`values`,()=>{let e=t.innerType._zod.values;return e?new Set([...e].filter(e=>e!==void 0)):void 0}),e._zod.parse=(n,r)=>{let i=t.innerType._zod.run(n,r);return i instanceof Promise?i.then(t=>jn(t,e)):jn(i,e)}});function jn(e,t){return!e.issues.length&&e.value===void 0&&e.issues.push({code:`invalid_type`,expected:`nonoptional`,input:e.value,inst:t}),e}var Mn=x(`$ZodCatch`,(e,t)=>{R.init(e,t),e._zod.optin=`optional`,O(e._zod,`optout`,()=>t.innerType._zod.optout),O(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(r=>(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>be(e,n,T()))},input:e.value}),e.issues=[],e.fallback=!0),e)):(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>be(e,n,T()))},input:e.value}),e.issues=[],e.fallback=!0),e)}}),Nn=x(`$ZodPipe`,(e,t)=>{R.init(e,t),O(e._zod,`values`,()=>t.in._zod.values),O(e._zod,`optin`,()=>t.in._zod.optin),O(e._zod,`optout`,()=>t.out._zod.optout),O(e._zod,`propValues`,()=>t.in._zod.propValues),e._zod.parse=(e,n)=>{if(n.direction===`backward`){let r=t.out._zod.run(e,n);return r instanceof Promise?r.then(e=>Pn(e,t.in,n)):Pn(r,t.in,n)}let r=t.in._zod.run(e,n);return r instanceof Promise?r.then(e=>Pn(e,t.out,n)):Pn(r,t.out,n)}});function Pn(e,t,n){return e.issues.length?(e.aborted=!0,e):t._zod.run({value:e.value,issues:e.issues,fallback:e.fallback},n)}var Fn=x(`$ZodReadonly`,(e,t)=>{R.init(e,t),O(e._zod,`propValues`,()=>t.innerType._zod.propValues),O(e._zod,`values`,()=>t.innerType._zod.values),O(e._zod,`optin`,()=>t.innerType?._zod?.optin),O(e._zod,`optout`,()=>t.innerType?._zod?.optout),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(In):In(r)}});function In(e){return e.value=Object.freeze(e.value),e}var Ln=x(`$ZodCustom`,(e,t)=>{_t.init(e,t),R.init(e,t),e._zod.parse=(e,t)=>e,e._zod.check=n=>{let r=n.value,i=t.fn(r);if(i instanceof Promise)return i.then(t=>Rn(t,n,r,e));Rn(i,n,r,e)}});function Rn(e,t,n,r){if(!e){let e={code:`custom`,input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(e.params=r._zod.def.params),t.issues.push(Se(e))}}var zn,Bn=class{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){let n=t[0];return this._map.set(e,n),n&&typeof n==`object`&&`id`in n&&this._idmap.set(n.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let t=this._map.get(e);return t&&typeof t==`object`&&`id`in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){let t=e._zod.parent;if(t){let n={...this.get(t)??{}};delete n.id;let r={...n,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}};function Vn(){return new Bn}(zn=globalThis).__zod_globalRegistry??(zn.__zod_globalRegistry=Vn());var Hn=globalThis.__zod_globalRegistry;function Un(e,t){return new e({type:`string`,...L(t)})}function Wn(e,t){return new e({type:`string`,format:`email`,check:`string_format`,abort:!1,...L(t)})}function Gn(e,t){return new e({type:`string`,format:`guid`,check:`string_format`,abort:!1,...L(t)})}function Kn(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,...L(t)})}function qn(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v4`,...L(t)})}function Jn(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v6`,...L(t)})}function Yn(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v7`,...L(t)})}function Xn(e,t){return new e({type:`string`,format:`url`,check:`string_format`,abort:!1,...L(t)})}function Zn(e,t){return new e({type:`string`,format:`emoji`,check:`string_format`,abort:!1,...L(t)})}function Qn(e,t){return new e({type:`string`,format:`nanoid`,check:`string_format`,abort:!1,...L(t)})}function $n(e,t){return new e({type:`string`,format:`cuid`,check:`string_format`,abort:!1,...L(t)})}function er(e,t){return new e({type:`string`,format:`cuid2`,check:`string_format`,abort:!1,...L(t)})}function tr(e,t){return new e({type:`string`,format:`ulid`,check:`string_format`,abort:!1,...L(t)})}function nr(e,t){return new e({type:`string`,format:`xid`,check:`string_format`,abort:!1,...L(t)})}function rr(e,t){return new e({type:`string`,format:`ksuid`,check:`string_format`,abort:!1,...L(t)})}function ir(e,t){return new e({type:`string`,format:`ipv4`,check:`string_format`,abort:!1,...L(t)})}function ar(e,t){return new e({type:`string`,format:`ipv6`,check:`string_format`,abort:!1,...L(t)})}function or(e,t){return new e({type:`string`,format:`cidrv4`,check:`string_format`,abort:!1,...L(t)})}function sr(e,t){return new e({type:`string`,format:`cidrv6`,check:`string_format`,abort:!1,...L(t)})}function cr(e,t){return new e({type:`string`,format:`base64`,check:`string_format`,abort:!1,...L(t)})}function lr(e,t){return new e({type:`string`,format:`base64url`,check:`string_format`,abort:!1,...L(t)})}function ur(e,t){return new e({type:`string`,format:`e164`,check:`string_format`,abort:!1,...L(t)})}function dr(e,t){return new e({type:`string`,format:`jwt`,check:`string_format`,abort:!1,...L(t)})}function fr(e,t){return new e({type:`string`,format:`datetime`,check:`string_format`,offset:!1,local:!1,precision:null,...L(t)})}function pr(e,t){return new e({type:`string`,format:`date`,check:`string_format`,...L(t)})}function mr(e,t){return new e({type:`string`,format:`time`,check:`string_format`,precision:null,...L(t)})}function hr(e,t){return new e({type:`string`,format:`duration`,check:`string_format`,...L(t)})}function gr(e){return new e({type:`unknown`})}function _r(e,t){return new e({type:`never`,...L(t)})}function vr(e,t){return new vt({check:`max_length`,...L(t),maximum:e})}function yr(e,t){return new yt({check:`min_length`,...L(t),minimum:e})}function br(e,t){return new bt({check:`length_equals`,...L(t),length:e})}function xr(e,t){return new St({check:`string_format`,format:`regex`,...L(t),pattern:e})}function Sr(e){return new Ct({check:`string_format`,format:`lowercase`,...L(e)})}function Cr(e){return new wt({check:`string_format`,format:`uppercase`,...L(e)})}function wr(e,t){return new Tt({check:`string_format`,format:`includes`,...L(t),includes:e})}function Tr(e,t){return new Et({check:`string_format`,format:`starts_with`,...L(t),prefix:e})}function Er(e,t){return new Dt({check:`string_format`,format:`ends_with`,...L(t),suffix:e})}function Dr(e){return new Ot({check:`overwrite`,tx:e})}function Or(e){return Dr(t=>t.normalize(e))}function kr(){return Dr(e=>e.trim())}function Ar(){return Dr(e=>e.toLowerCase())}function jr(){return Dr(e=>e.toUpperCase())}function Mr(){return Dr(e=>M(e))}function Nr(e,t,n){return new e({type:`array`,element:t,...L(n)})}function Pr(e,t,n){return new e({type:`custom`,check:`custom`,fn:t,...L(n)})}function Fr(e,t){let n=Ir(t=>(t.addIssue=e=>{if(typeof e==`string`)t.issues.push(Se(e,t.value,n._zod.def));else{let r=e;r.fatal&&(r.continue=!1),r.code??=`custom`,r.input??=t.value,r.inst??=n,r.continue??=!n._zod.def.abort,t.issues.push(Se(r))}},e(t.value,t)),t);return n}function Ir(e,t){let n=new _t({check:`custom`,...L(t)});return n._zod.check=e,n}function Lr(e){let t=e?.target??`draft-2020-12`;return t===`draft-4`&&(t=`draft-04`),t===`draft-7`&&(t=`draft-07`),{processors:e.processors??{},metadataRegistry:e?.metadata??Hn,target:t,unrepresentable:e?.unrepresentable??`throw`,override:e?.override??(()=>{}),io:e?.io??`output`,counter:0,seen:new Map,cycles:e?.cycles??`ref`,reused:e?.reused??`inline`,external:e?.external??void 0}}function Rr(e,t,n={path:[],schemaPath:[]}){var r;let i=e._zod.def,a=t.seen.get(e);if(a)return a.count++,n.schemaPath.includes(e)&&(a.cycle=n.path),a.schema;let o={schema:{},count:1,cycle:void 0,path:n.path};t.seen.set(e,o);let s=e._zod.toJSONSchema?.();if(s)o.schema=s;else{let r={...n,schemaPath:[...n.schemaPath,e],path:n.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(t,o.schema,r);else{let n=o.schema,a=t.processors[i.type];if(!a)throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);a(e,t,n,r)}let a=e._zod.parent;a&&(o.ref||=a,Rr(a,t,r),t.seen.get(a).isParent=!0)}let c=t.metadataRegistry.get(e);return c&&Object.assign(o.schema,c),t.io===`input`&&Vr(e)&&(delete o.schema.examples,delete o.schema.default),t.io===`input`&&`_prefault`in o.schema&&((r=o.schema).default??(r.default=o.schema._prefault)),delete o.schema._prefault,t.seen.get(e).schema}function zr(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);let r=new Map;for(let t of e.seen.entries()){let n=e.metadataRegistry.get(t[0])?.id;if(n){let e=r.get(n);if(e&&e!==t[0])throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);r.set(n,t[0])}}let i=t=>{let r=e.target===`draft-2020-12`?`$defs`:`definitions`;if(e.external){let n=e.external.registry.get(t[0])?.id,i=e.external.uri??(e=>e);if(n)return{ref:i(n)};let a=t[1].defId??t[1].schema.id??`schema${e.counter++}`;return t[1].defId=a,{defId:a,ref:`${i(`__shared`)}#/${r}/${a}`}}if(t[1]===n)return{ref:`#`};let i=`#/${r}/`,a=t[1].schema.id??`__schema${e.counter++}`;return{defId:a,ref:i+a}},a=e=>{if(e[1].schema.$ref)return;let t=e[1],{ref:n,defId:r}=i(e);t.def={...t.schema},r&&(t.defId=r);let a=t.schema;for(let e in a)delete a[e];a.$ref=n};if(e.cycles===`throw`)for(let t of e.seen.entries()){let e=t[1];if(e.cycle)throw Error(`Cycle detected: #/${e.cycle?.join(`/`)}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let n of e.seen.entries()){let r=n[1];if(t===n[0]){a(n);continue}if(e.external){let r=e.external.registry.get(n[0])?.id;if(t!==n[0]&&r){a(n);continue}}if(e.metadataRegistry.get(n[0])?.id){a(n);continue}if(r.cycle){a(n);continue}if(r.count>1&&e.reused===`ref`){a(n);continue}}}function Br(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);let r=t=>{let n=e.seen.get(t);if(n.ref===null)return;let i=n.def??n.schema,a={...i},o=n.ref;if(n.ref=null,o){r(o);let n=e.seen.get(o),s=n.schema;if(s.$ref&&(e.target===`draft-07`||e.target===`draft-04`||e.target===`openapi-3.0`)?(i.allOf=i.allOf??[],i.allOf.push(s)):Object.assign(i,s),Object.assign(i,a),t._zod.parent===o)for(let e in i)e===`$ref`||e===`allOf`||e in a||delete i[e];if(s.$ref&&n.def)for(let e in i)e===`$ref`||e===`allOf`||e in n.def&&JSON.stringify(i[e])===JSON.stringify(n.def[e])&&delete i[e]}let s=t._zod.parent;if(s&&s!==o){r(s);let t=e.seen.get(s);if(t?.schema.$ref&&(i.$ref=t.schema.$ref,t.def))for(let e in i)e===`$ref`||e===`allOf`||e in t.def&&JSON.stringify(i[e])===JSON.stringify(t.def[e])&&delete i[e]}e.override({zodSchema:t,jsonSchema:i,path:n.path??[]})};for(let t of[...e.seen.entries()].reverse())r(t[0]);let i={};if(e.target===`draft-2020-12`?i.$schema=`https://json-schema.org/draft/2020-12/schema`:e.target===`draft-07`?i.$schema=`http://json-schema.org/draft-07/schema#`:e.target===`draft-04`?i.$schema=`http://json-schema.org/draft-04/schema#`:e.target,e.external?.uri){let n=e.external.registry.get(t)?.id;if(!n)throw Error("Schema is missing an `id` property");i.$id=e.external.uri(n)}Object.assign(i,n.def??n.schema);let a=e.metadataRegistry.get(t)?.id;a!==void 0&&i.id===a&&delete i.id;let o=e.external?.defs??{};for(let t of e.seen.entries()){let e=t[1];e.def&&e.defId&&(e.def.id===e.defId&&delete e.def.id,o[e.defId]=e.def)}e.external||Object.keys(o).length>0&&(e.target===`draft-2020-12`?i.$defs=o:i.definitions=o);try{let n=JSON.parse(JSON.stringify(i));return Object.defineProperty(n,"~standard",{value:{...t[`~standard`],jsonSchema:{input:Ur(t,`input`,e.processors),output:Ur(t,`output`,e.processors)}},enumerable:!1,writable:!1}),n}catch{throw Error(`Error converting schema to JSON.`)}}function Vr(e,t){let n=t??{seen:new Set};if(n.seen.has(e))return!1;n.seen.add(e);let r=e._zod.def;if(r.type===`transform`)return!0;if(r.type===`array`)return Vr(r.element,n);if(r.type===`set`)return Vr(r.valueType,n);if(r.type===`lazy`)return Vr(r.getter(),n);if(r.type===`promise`||r.type===`optional`||r.type===`nonoptional`||r.type===`nullable`||r.type===`readonly`||r.type==="default"||r.type===`prefault`)return Vr(r.innerType,n);if(r.type===`intersection`)return Vr(r.left,n)||Vr(r.right,n);if(r.type===`record`||r.type===`map`)return Vr(r.keyType,n)||Vr(r.valueType,n);if(r.type===`pipe`)return e._zod.traits.has(`$ZodCodec`)?!0:Vr(r.in,n)||Vr(r.out,n);if(r.type===`object`){for(let e in r.shape)if(Vr(r.shape[e],n))return!0;return!1}if(r.type===`union`){for(let e of r.options)if(Vr(e,n))return!0;return!1}if(r.type===`tuple`){for(let e of r.items)if(Vr(e,n))return!0;return!!(r.rest&&Vr(r.rest,n))}return!1}var Hr=(e,t={})=>n=>{let r=Lr({...n,processors:t});return Rr(e,r),zr(r,e),Br(r,e)},Ur=(e,t,n={})=>r=>{let{libraryOptions:i,target:a}=r??{},o=Lr({...i??{},target:a,io:t,processors:n});return Rr(e,o),zr(o,e),Br(o,e)},Wr={guid:`uuid`,url:`uri`,datetime:`date-time`,json_string:`json-string`,regex:``},Gr=(e,t,n,r)=>{let i=n;i.type=`string`;let{minimum:a,maximum:o,format:s,patterns:c,contentEncoding:l}=e._zod.bag;if(typeof a==`number`&&(i.minLength=a),typeof o==`number`&&(i.maxLength=o),s&&(i.format=Wr[s]??s,i.format===``&&delete i.format,s===`time`&&delete i.format),l&&(i.contentEncoding=l),c&&c.size>0){let e=[...c];e.length===1?i.pattern=e[0].source:e.length>1&&(i.allOf=[...e.map(e=>({...t.target===`draft-07`||t.target===`draft-04`||t.target===`openapi-3.0`?{type:`string`}:{},pattern:e.source}))])}},Kr=(e,t,n,r)=>{n.not={}},qr=(e,t,n,r)=>{let i=e._zod.def,a=E(i.entries);a.every(e=>typeof e==`number`)&&(n.type=`number`),a.every(e=>typeof e==`string`)&&(n.type=`string`),n.enum=a},Jr=(e,t,n,r)=>{if(t.unrepresentable===`throw`)throw Error(`Custom types cannot be represented in JSON Schema`)},Yr=(e,t,n,r)=>{if(t.unrepresentable===`throw`)throw Error(`Transforms cannot be represented in JSON Schema`)},Xr=(e,t,n,r)=>{let i=n,a=e._zod.def,{minimum:o,maximum:s}=e._zod.bag;typeof o==`number`&&(i.minItems=o),typeof s==`number`&&(i.maxItems=s),i.type=`array`,i.items=Rr(a.element,t,{...r,path:[...r.path,`items`]})},Zr=(e,t,n,r)=>{let i=n,a=e._zod.def;i.type=`object`,i.properties={};let o=a.shape;for(let e in o)i.properties[e]=Rr(o[e],t,{...r,path:[...r.path,`properties`,e]});let s=new Set(Object.keys(o)),c=new Set([...s].filter(e=>{let n=a.shape[e]._zod;return t.io===`input`?n.optin===void 0:n.optout===void 0}));c.size>0&&(i.required=Array.from(c)),a.catchall?._zod.def.type===`never`?i.additionalProperties=!1:a.catchall?a.catchall&&(i.additionalProperties=Rr(a.catchall,t,{...r,path:[...r.path,`additionalProperties`]})):t.io===`output`&&(i.additionalProperties=!1)},Qr=(e,t,n,r)=>{let i=e._zod.def,a=i.inclusive===!1,o=i.options.map((e,n)=>Rr(e,t,{...r,path:[...r.path,a?`oneOf`:`anyOf`,n]}));a?n.oneOf=o:n.anyOf=o},$r=(e,t,n,r)=>{let i=e._zod.def,a=Rr(i.left,t,{...r,path:[...r.path,`allOf`,0]}),o=Rr(i.right,t,{...r,path:[...r.path,`allOf`,1]}),s=e=>`allOf`in e&&Object.keys(e).length===1;n.allOf=[...s(a)?a.allOf:[a],...s(o)?o.allOf:[o]]},ei=(e,t,n,r)=>{let i=n,a=e._zod.def;i.type=`object`;let o=a.keyType,s=o._zod.bag?.patterns;if(a.mode===`loose`&&s&&s.size>0){let e=Rr(a.valueType,t,{...r,path:[...r.path,`patternProperties`,`*`]});i.patternProperties={};for(let t of s)i.patternProperties[t.source]=e}else(t.target===`draft-07`||t.target===`draft-2020-12`)&&(i.propertyNames=Rr(a.keyType,t,{...r,path:[...r.path,`propertyNames`]})),i.additionalProperties=Rr(a.valueType,t,{...r,path:[...r.path,`additionalProperties`]});let c=o._zod.values;if(c){let e=[...c].filter(e=>typeof e==`string`||typeof e==`number`);e.length>0&&(i.required=e)}},ti=(e,t,n,r)=>{let i=e._zod.def,a=Rr(i.innerType,t,r),o=t.seen.get(e);t.target===`openapi-3.0`?(o.ref=i.innerType,n.nullable=!0):n.anyOf=[a,{type:`null`}]},ni=(e,t,n,r)=>{let i=e._zod.def;Rr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},ri=(e,t,n,r)=>{let i=e._zod.def;Rr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,n.default=JSON.parse(JSON.stringify(i.defaultValue))},ii=(e,t,n,r)=>{let i=e._zod.def;Rr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,t.io===`input`&&(n._prefault=JSON.parse(JSON.stringify(i.defaultValue)))},ai=(e,t,n,r)=>{let i=e._zod.def;Rr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType;let o;try{o=i.catchValue(void 0)}catch{throw Error(`Dynamic catch values are not supported in JSON Schema`)}n.default=o},oi=(e,t,n,r)=>{let i=e._zod.def,a=i.in._zod.traits.has(`$ZodTransform`),o=t.io===`input`?a?i.out:i.in:i.out;Rr(o,t,r);let s=t.seen.get(e);s.ref=o},si=(e,t,n,r)=>{let i=e._zod.def;Rr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,n.readOnly=!0},ci=(e,t,n,r)=>{let i=e._zod.def;Rr(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},li=x(`ZodISODateTime`,(e,t)=>{Wt.init(e,t),B.init(e,t)});function ui(e){return fr(li,e)}var di=x(`ZodISODate`,(e,t)=>{Gt.init(e,t),B.init(e,t)});function fi(e){return pr(di,e)}var pi=x(`ZodISOTime`,(e,t)=>{Kt.init(e,t),B.init(e,t)});function mi(e){return mr(pi,e)}var hi=x(`ZodISODuration`,(e,t)=>{qt.init(e,t),B.init(e,t)});function gi(e){return hr(hi,e)}var _i=x(`ZodError`,(e,t)=>{we.init(e,t),e.name=`ZodError`,Object.defineProperties(e,{format:{value:t=>De(e,t)},flatten:{value:t=>Ee(e,t)},addIssue:{value:t=>{e.issues.push(t),e.message=JSON.stringify(e.issues,ee,2)}},addIssues:{value:t=>{e.issues.push(...t),e.message=JSON.stringify(e.issues,ee,2)}},isEmpty:{get(){return e.issues.length===0}}})},{Parent:Error}),vi=Oe(_i),yi=ke(_i),bi=Ae(_i),xi=Me(_i),Si=Pe(_i),Ci=Fe(_i),wi=Ie(_i),Ti=Le(_i),Ei=Re(_i),Di=ze(_i),Oi=Be(_i),ki=Ve(_i),Ai=new WeakMap;function ji(e,t,n){let r=Object.getPrototypeOf(e),i=Ai.get(r);if(i||(i=new Set,Ai.set(r,i)),!i.has(t)){i.add(t);for(let e in n){let t=n[e];Object.defineProperty(r,e,{configurable:!0,enumerable:!1,get(){let n=t.bind(this);return Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:!0,value:n}),n},set(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:!0,value:t})}})}}}var Mi=x(`ZodType`,(e,t)=>(R.init(e,t),Object.assign(e[`~standard`],{jsonSchema:{input:Ur(e,`input`),output:Ur(e,`output`)}}),e.toJSONSchema=Hr(e,{}),e.def=t,e.type=t.type,Object.defineProperty(e,"_def",{value:t}),e.parse=(t,n)=>vi(e,t,n,{callee:e.parse}),e.safeParse=(t,n)=>bi(e,t,n),e.parseAsync=async(t,n)=>yi(e,t,n,{callee:e.parseAsync}),e.safeParseAsync=async(t,n)=>xi(e,t,n),e.spa=e.safeParseAsync,e.encode=(t,n)=>Si(e,t,n),e.decode=(t,n)=>Ci(e,t,n),e.encodeAsync=async(t,n)=>wi(e,t,n),e.decodeAsync=async(t,n)=>Ti(e,t,n),e.safeEncode=(t,n)=>Ei(e,t,n),e.safeDecode=(t,n)=>Di(e,t,n),e.safeEncodeAsync=async(t,n)=>Oi(e,t,n),e.safeDecodeAsync=async(t,n)=>ki(e,t,n),ji(e,`ZodType`,{check(...e){let t=this.def;return this.clone(A(t,{checks:[...t.checks??[],...e.map(e=>typeof e==`function`?{_zod:{check:e,def:{check:`custom`},onattach:[]}}:e)]}),{parent:!0})},with(...e){return this.check(...e)},clone(e,t){return se(this,e,t)},brand(){return this},register(e,t){return e.add(this,t),this},refine(e,t){return this.check(La(e,t))},superRefine(e,t){return this.check(Ra(e,t))},overwrite(e){return this.check(Dr(e))},optional(){return ya(this)},exactOptional(){return xa(this)},nullable(){return Ca(this)},nullish(){return ya(Ca(this))},nonoptional(e){return ka(this,e)},array(){return aa(this)},or(e){return la([this,e])},and(e){return da(this,e)},transform(e){return Na(this,_a(e))},default(e){return Ta(this,e)},prefault(e){return Da(this,e)},catch(e){return ja(this,e)},pipe(e){return Na(this,e)},readonly(){return Fa(this)},describe(e){let t=this.clone();return Hn.add(t,{description:e}),t},meta(...e){if(e.length===0)return Hn.get(this);let t=this.clone();return Hn.add(t,e[0]),t},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(e){return e(this)}}),Object.defineProperty(e,"description",{get(){return Hn.get(e)?.description},configurable:!0}),e)),Ni=x(`_ZodString`,(e,t)=>{jt.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Gr(e,t,n,r);let n=e._zod.bag;e.format=n.format??null,e.minLength=n.minimum??null,e.maxLength=n.maximum??null,ji(e,`_ZodString`,{regex(...e){return this.check(xr(...e))},includes(...e){return this.check(wr(...e))},startsWith(...e){return this.check(Tr(...e))},endsWith(...e){return this.check(Er(...e))},min(...e){return this.check(yr(...e))},max(...e){return this.check(vr(...e))},length(...e){return this.check(br(...e))},nonempty(...e){return this.check(yr(1,...e))},lowercase(e){return this.check(Sr(e))},uppercase(e){return this.check(Cr(e))},trim(){return this.check(kr())},normalize(...e){return this.check(Or(...e))},toLowerCase(){return this.check(Ar())},toUpperCase(){return this.check(jr())},slugify(){return this.check(Mr())}})}),Pi=x(`ZodString`,(e,t)=>{jt.init(e,t),Ni.init(e,t),e.email=t=>e.check(Wn(Fi,t)),e.url=t=>e.check(Xn(Ri,t)),e.jwt=t=>e.check(dr($i,t)),e.emoji=t=>e.check(Zn(zi,t)),e.guid=t=>e.check(Gn(Ii,t)),e.uuid=t=>e.check(Kn(Li,t)),e.uuidv4=t=>e.check(qn(Li,t)),e.uuidv6=t=>e.check(Jn(Li,t)),e.uuidv7=t=>e.check(Yn(Li,t)),e.nanoid=t=>e.check(Qn(Bi,t)),e.guid=t=>e.check(Gn(Ii,t)),e.cuid=t=>e.check($n(Vi,t)),e.cuid2=t=>e.check(er(Hi,t)),e.ulid=t=>e.check(tr(Ui,t)),e.base64=t=>e.check(cr(Xi,t)),e.base64url=t=>e.check(lr(Zi,t)),e.xid=t=>e.check(nr(Wi,t)),e.ksuid=t=>e.check(rr(Gi,t)),e.ipv4=t=>e.check(ir(Ki,t)),e.ipv6=t=>e.check(ar(qi,t)),e.cidrv4=t=>e.check(or(Ji,t)),e.cidrv6=t=>e.check(sr(Yi,t)),e.e164=t=>e.check(ur(Qi,t)),e.datetime=t=>e.check(ui(t)),e.date=t=>e.check(fi(t)),e.time=t=>e.check(mi(t)),e.duration=t=>e.check(gi(t))});function z(e){return Un(Pi,e)}var B=x(`ZodStringFormat`,(e,t)=>{Mt.init(e,t),Ni.init(e,t)}),Fi=x(`ZodEmail`,(e,t)=>{Ft.init(e,t),B.init(e,t)}),Ii=x(`ZodGUID`,(e,t)=>{Nt.init(e,t),B.init(e,t)}),Li=x(`ZodUUID`,(e,t)=>{Pt.init(e,t),B.init(e,t)}),Ri=x(`ZodURL`,(e,t)=>{It.init(e,t),B.init(e,t)}),zi=x(`ZodEmoji`,(e,t)=>{Lt.init(e,t),B.init(e,t)}),Bi=x(`ZodNanoID`,(e,t)=>{Rt.init(e,t),B.init(e,t)}),Vi=x(`ZodCUID`,(e,t)=>{zt.init(e,t),B.init(e,t)}),Hi=x(`ZodCUID2`,(e,t)=>{Bt.init(e,t),B.init(e,t)}),Ui=x(`ZodULID`,(e,t)=>{Vt.init(e,t),B.init(e,t)}),Wi=x(`ZodXID`,(e,t)=>{Ht.init(e,t),B.init(e,t)}),Gi=x(`ZodKSUID`,(e,t)=>{Ut.init(e,t),B.init(e,t)}),Ki=x(`ZodIPv4`,(e,t)=>{Jt.init(e,t),B.init(e,t)}),qi=x(`ZodIPv6`,(e,t)=>{Yt.init(e,t),B.init(e,t)}),Ji=x(`ZodCIDRv4`,(e,t)=>{Xt.init(e,t),B.init(e,t)}),Yi=x(`ZodCIDRv6`,(e,t)=>{Zt.init(e,t),B.init(e,t)}),Xi=x(`ZodBase64`,(e,t)=>{$t.init(e,t),B.init(e,t)}),Zi=x(`ZodBase64URL`,(e,t)=>{tn.init(e,t),B.init(e,t)}),Qi=x(`ZodE164`,(e,t)=>{nn.init(e,t),B.init(e,t)}),$i=x(`ZodJWT`,(e,t)=>{an.init(e,t),B.init(e,t)}),ea=x(`ZodUnknown`,(e,t)=>{on.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(e,t,n)=>void 0});function ta(){return gr(ea)}var na=x(`ZodNever`,(e,t)=>{sn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Kr(e,t,n,r)});function ra(e){return _r(na,e)}var ia=x(`ZodArray`,(e,t)=>{ln.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Xr(e,t,n,r),e.element=t.element,ji(e,`ZodArray`,{min(e,t){return this.check(yr(e,t))},nonempty(e){return this.check(yr(1,e))},max(e,t){return this.check(vr(e,t))},length(e,t){return this.check(br(e,t))},unwrap(){return this.element}})});function aa(e,t){return Nr(ia,e,t)}var oa=x(`ZodObject`,(e,t)=>{mn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Zr(e,t,n,r),O(e,`shape`,()=>t.shape),ji(e,`ZodObject`,{keyof(){return ha(Object.keys(this._zod.def.shape))},catchall(e){return this.clone({...this._zod.def,catchall:e})},passthrough(){return this.clone({...this._zod.def,catchall:ta()})},loose(){return this.clone({...this._zod.def,catchall:ta()})},strict(){return this.clone({...this._zod.def,catchall:ra()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(e){return de(this,e)},safeExtend(e){return fe(this,e)},merge(e){return pe(this,e)},pick(e){return le(this,e)},omit(e){return ue(this,e)},partial(...e){return me(va,this,e[0])},required(...e){return he(Oa,this,e[0])}})});function sa(e,t){return new oa({type:`object`,shape:e??{},...L(t)})}var ca=x(`ZodUnion`,(e,t)=>{gn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Qr(e,t,n,r),e.options=t.options});function la(e,t){return new ca({type:`union`,options:e,...L(t)})}var ua=x(`ZodIntersection`,(e,t)=>{_n.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>$r(e,t,n,r)});function da(e,t){return new ua({type:`intersection`,left:e,right:t})}var fa=x(`ZodRecord`,(e,t)=>{bn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ei(e,t,n,r),e.keyType=t.keyType,e.valueType=t.valueType});function pa(e,t,n){return!t||!t._zod?new fa({type:`record`,keyType:z(),valueType:e,...L(t)}):new fa({type:`record`,keyType:e,valueType:t,...L(n)})}var ma=x(`ZodEnum`,(e,t)=>{xn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>qr(e,t,n,r),e.enum=t.entries,e.options=Object.values(t.entries);let n=new Set(Object.keys(t.entries));e.extract=(e,r)=>{let i={};for(let r of e)if(n.has(r))i[r]=t.entries[r];else throw Error(`Key ${r} not found in enum`);return new ma({...t,checks:[],...L(r),entries:i})},e.exclude=(e,r)=>{let i={...t.entries};for(let t of e)if(n.has(t))delete i[t];else throw Error(`Key ${t} not found in enum`);return new ma({...t,checks:[],...L(r),entries:i})}});function ha(e,t){return new ma({type:`enum`,entries:Array.isArray(e)?Object.fromEntries(e.map(e=>[e,e])):e,...L(t)})}var ga=x(`ZodTransform`,(e,t)=>{Sn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Yr(e,t,n,r),e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new C(e.constructor.name);n.addIssue=r=>{if(typeof r==`string`)n.issues.push(Se(r,n.value,t));else{let t=r;t.fatal&&(t.continue=!1),t.code??=`custom`,t.input??=n.value,t.inst??=e,n.issues.push(Se(t))}};let i=t.transform(n.value,n);return i instanceof Promise?i.then(e=>(n.value=e,n.fallback=!0,n)):(n.value=i,n.fallback=!0,n)}});function _a(e){return new ga({type:`transform`,transform:e})}var va=x(`ZodOptional`,(e,t)=>{wn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ci(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function ya(e){return new va({type:`optional`,innerType:e})}var ba=x(`ZodExactOptional`,(e,t)=>{Tn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ci(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function xa(e){return new ba({type:`optional`,innerType:e})}var Sa=x(`ZodNullable`,(e,t)=>{En.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ti(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Ca(e){return new Sa({type:`nullable`,innerType:e})}var wa=x(`ZodDefault`,(e,t)=>{Dn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ri(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function Ta(e,t){return new wa({type:`default`,innerType:e,get defaultValue(){return typeof t==`function`?t():oe(t)}})}var Ea=x(`ZodPrefault`,(e,t)=>{kn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ii(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Da(e,t){return new Ea({type:`prefault`,innerType:e,get defaultValue(){return typeof t==`function`?t():oe(t)}})}var Oa=x(`ZodNonOptional`,(e,t)=>{An.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ni(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function ka(e,t){return new Oa({type:`nonoptional`,innerType:e,...L(t)})}var Aa=x(`ZodCatch`,(e,t)=>{Mn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ai(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function ja(e,t){return new Aa({type:`catch`,innerType:e,catchValue:typeof t==`function`?t:()=>t})}var Ma=x(`ZodPipe`,(e,t)=>{Nn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>oi(e,t,n,r),e.in=t.in,e.out=t.out});function Na(e,t){return new Ma({type:`pipe`,in:e,out:t})}var Pa=x(`ZodReadonly`,(e,t)=>{Fn.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>si(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Fa(e){return new Pa({type:`readonly`,innerType:e})}var Ia=x(`ZodCustom`,(e,t)=>{Ln.init(e,t),Mi.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Jr(e,t,n,r)});function La(e,t={}){return Pr(Ia,e,t)}function Ra(e,t){return Fr(e,t)}var za=sa({id:z().optional(),type:z()}).passthrough(),Ba=sa({nodes:pa(z(),ta()),rootNodeIds:aa(z()).optional(),installedPlugins:aa(ta()).optional()}).passthrough();function Va(e){let t=[],n=Ba.safeParse(e);if(!n.success)return{nodes:{},raw:e,diagnostics:[{severity:`error`,code:`missing_nodes`,message:`顶层缺少有效的 nodes 对象`,sourcePath:`nodes`}]};let r={};for(let[e,i]of Object.entries(n.data.nodes)){let n=za.safeParse(i);if(!n.success){t.push({severity:`error`,code:`invalid_node`,message:`节点不是可识别对象`,nodeId:e,sourcePath:`nodes.${e}`});continue}r[e]={...n.data,id:e}}return{nodes:r,raw:e,diagnostics:t}}var Ha=(e,t=[0,0,0])=>Array.isArray(e)&&e.length>=3&&e.every(Number.isFinite)?[e[0],e[1],e[2]]:t,Ua=e=>Array.isArray(e)&&e.length>=2&&e.every(Number.isFinite)?[e[0],e[1]]:[0,0];function Wa(e,t,n){let r=Math.cos(n),i=Math.sin(n);return{x:e*r+t*i,z:-e*i+t*r}}function Ga(e,t){let n=[],r=new Set,i=e;for(;i;){if(r.has(i))return{sourceNodeIds:n,error:`parent_cycle`};r.add(i),n.push(i);let e=t[i];if(!e)return{sourceNodeIds:n,error:`missing_parent`};if(e.type===`level`)return{levelId:e.id,sourceNodeIds:n};i=e.parentId}return{sourceNodeIds:n,error:`missing_parent`}}function Ka(e){let t=e.asset?.dimensions;return Array.isArray(t)&&t.length>=3&&t.every(e=>Number.isFinite(e)&&e>0)?[t[0],t[1],t[2]]:null}function qa(e){let t=e.scale??[1,1,1];return Array.isArray(t)&&t.length>=3&&t.every(e=>Number.isFinite(e)&&e>0)?[t[0],t[1],t[2]]:null}function Ja(e){let t=Ka(e),n=qa(e);return t&&n?{width:t[0]*n[0],height:t[1]*n[1],depth:t[2]*n[2]}:null}function Ya(e,t){let n=t[e],r=n?Ja(n):null;if(!n||!r)return{bottom:0,top:0,status:`error`,error:n?`invalid_dimensions`:`missing_item`};let i=0,a=n,o=new Set;for(;a;){if(o.has(a.id))return{bottom:0,top:0,status:`error`,error:`parent_cycle`};if(o.add(a.id),a.type===`ceiling`||a.asset?.attachTo===`ceiling`)return{bottom:0,top:0,status:`error`,error:`ceiling_elevation_unresolved`};let e=Array.isArray(a.position)&&Number.isFinite(a.position[1])?a.position[1]:0;if(i+=e,!a.parentId)break;if(a=t[a.parentId],!a)return{bottom:0,top:0,status:`error`,error:`missing_parent`};if(a.type===`level`)break}return{bottom:i,top:i+r.height,status:`ok`}}function Xa(e){return(e*180/Math.PI%360+360)%360}function Za(e,t){let n=Ga(e,t),r=new Set,i=(e,t)=>({x:0,z:0,rotationY:0,sourceNodeIds:t,status:`error`,error:e});function a(e){if(r.has(e))return i(`parent_cycle`,[e]);r.add(e);let o=t[e];if(!o)return i(`missing_parent`,[e]);let s=Ha(o.position),c=Ha(o.rotation)[1];if(!o.parentId)return o.type===`level`?{x:0,z:0,rotationY:0,ancestorLevelId:o.id,sourceNodeIds:[e],status:`ok`}:i(`missing_parent`,[e]);let l=t[o.parentId];if(!l)return i(`missing_parent`,[e,o.parentId]);if(l.type===`wall`){let t=Ua(l.start),r=Ua(l.end),i=-Math.atan2(r[1]-t[1],r[0]-t[0]),a=o.asset?.attachTo===`wall-side`,u=Number.isFinite(l.thickness)&&l.thickness>0?l.thickness:.1,d=a?u/2*(o.side===`front`?1:-1):s[2],f=Wa(s[0],d,i),p=i+c,m=t[0]+f.x,h=t[1]+f.z;if(a){let e=Ja(o);if(e){let t=Wa(0,e.depth/2,p);m+=t.x,h+=t.z}}return{x:m,z:h,rotationY:p,ancestorLevelId:n.levelId,sourceNodeIds:[e,l.id],status:`ok`}}if(![`level`,`slab`,`ceiling`,`item`,`shelf`].includes(l.type))return i(`unsupported_parent_transform`,[e,l.id]);if(l.type===`level`||l.type===`slab`||l.type===`ceiling`)return{x:s[0],z:s[2],rotationY:c,ancestorLevelId:n.levelId,sourceNodeIds:[e,l.id],status:`ok`};let u=a(l.id);if(u.status===`error`)return{...u,sourceNodeIds:[e,...u.sourceNodeIds]};let d=Wa(s[0],s[2],u.rotationY);return{x:u.x+d.x,z:u.z+d.z,rotationY:u.rotationY+c,ancestorLevelId:n.levelId,sourceNodeIds:[e,...u.sourceNodeIds],status:`ok`}}let o=a(e);return o.status===`ok`?{...o,ancestorLevelId:n.levelId}:o}function Qa(e,t){return{x:e,y:t}}function $a(e){let t=Math.cos(e.rotationY),n=Math.sin(e.rotationY),r=Qa(e.x,e.z);return{a:t,b:-n,c:n,d:t,e:r.x,f:r.y}}function eo(e){return`matrix(${e.a} ${e.b} ${e.c} ${e.d} ${e.e} ${e.f})`}function to(e,t){let n=t[e.wallId||e.parentId||``];if(!n||n.type!==`wall`)return null;let r=Ua(n.start),i=Ua(n.end),a=i[0]-r[0],o=i[1]-r[1],s=Math.hypot(a,o);if(!Number.isFinite(s)||s===0)return null;let c=Array.isArray(e.position)&&Number.isFinite(e.position[0])?e.position[0]:0;return{x:r[0]+a/s*c,z:r[1]+o/s*c,rotationY:Math.atan2(o,a),ancestorLevelId:Ga(e.id,t).levelId,sourceNodeIds:[e.id,n.id]}}function no(e){let t=Array.isArray(e.rotation)&&Number.isFinite(e.rotation[1])?e.rotation[1]:0,n=(t%(Math.PI*2)+Math.PI*2)%(Math.PI*2),r=n>Math.PI/2&&n<Math.PI*3/2,i=e.hingesSide??`left`,a=e.swingDirection??`inward`;return{rawRotationYRadians:t,placementFlipped:r,effectiveHingesSide:r?i===`left`?`right`:`left`:i,effectiveSwingDirection:r?a===`inward`?`outward`:`inward`:a}}function ro(e,t=1){if(!e.length)return{minX:-5,minZ:-5,width:10,height:10};let n=e.map(e=>e.x),r=e.map(e=>e.z),i=Math.min(...n)-t,a=Math.max(...n)+t,o=Math.min(...r)-t,s=Math.max(...r)+t;return{minX:i,minZ:o,width:Math.max(a-i,1),height:Math.max(s-o,1)}}function io(e,t,n){return{minX:t.x-(t.x-e.minX)*n,minZ:t.z-(t.z-e.minZ)*n,width:e.width*n,height:e.height*n}}function ao(e,t,n){let r=n*Math.PI/180,i=Math.cos(r),a=Math.sin(r);return{x:-(e*i+t*a),z:-(-e*a+t*i)}}function oo(e){let t=[],n=new Set([`site`,`building`,`level`,`zone`,`wall`,`door`,`window`,`item`,`slab`,`ceiling`,`shelf`,`stair`,`stair-segment`]);for(let r of Object.values(e)){if(n.has(r.type)||t.push({severity:`info`,code:`unsupported_node_type`,message:`暂未渲染的节点类型：${r.type}`,nodeId:r.id,sourcePath:`nodes.${r.id}.type`}),r.type!==`item`)continue;Ka(r)||t.push({severity:`error`,code:`invalid_item_dimensions`,message:`asset.dimensions 必须是三个大于 0 的有限数值；未生成虚假尺寸`,nodeId:r.id,sourcePath:`nodes.${r.id}.asset.dimensions`});let e=r.scale;Array.isArray(e)&&!e.every(e=>Number.isFinite(e)&&e>0)&&t.push({severity:`error`,code:`invalid_item_scale`,message:`item.scale 包含无效数值`,nodeId:r.id,sourcePath:`nodes.${r.id}.scale`}),Array.isArray(e)&&e.length>=3&&!(e[0]===e[1]&&e[1]===e[2])&&t.push({severity:`warning`,code:`non_uniform_item_scale`,message:`非等比例 item.scale，图片会被非等比例拉伸`,nodeId:r.id,sourcePath:`nodes.${r.id}.scale`}),r.asset?.floorPlanUrl||t.push({severity:`info`,code:`missing_floor_plan_image`,message:`缺少 floorPlanUrl，将显示物理占地框`,nodeId:r.id,sourcePath:`nodes.${r.id}.asset.floorPlanUrl`}),r.asset?.rotation?.some(e=>e!==0)&&t.push({severity:`warning`,code:`asset_corrective_rotation_present`,message:`GLB 校正旋转不参与 floorPlanUrl 二维实例旋转`,nodeId:r.id,sourcePath:`nodes.${r.id}.asset.rotation`})}return t}var so=.1;function co(e){return e.thickness===void 0?{rawThickness:null,resolvedPhysicalThickness:so,thicknessSource:`pascal-default`}:{rawThickness:e.thickness,resolvedPhysicalThickness:e.thickness,thicknessSource:`explicit`}}var lo=1e-6,uo=e=>({x:e.start[0],y:e.start[1]}),fo=e=>({x:e.end[0],y:e.end[1]}),V=e=>{let t=uo(e),n=fo(e),r=n.x-t.x,i=n.y-t.y,a=Math.hypot(r,i);return{start:t,end:n,length:a,tangent:a<lo?{x:1,y:0}:{x:r/a,y:i/a},normal:a<lo?{x:0,y:1}:{x:-i/a,y:r/a},midpoint:{x:(t.x+n.x)/2,y:(t.y+n.y)/2}}};function H(e){let t=V(e),n=t.length/2,r=Math.max(-n,Math.min(n,e.curveOffset??0)),i=Math.min(.03,Math.max(.005,t.length*.005));return Math.abs(r)<=i?0:r}function po(e){return Math.abs(H(e))>lo}function mo(e){let t=V(e),n=H(e);if(Math.abs(n)<=lo||t.length<lo)return null;let r=t.length*t.length/(8*Math.abs(n))+Math.abs(n)/2,i=Math.sign(n)||1,a=r-Math.abs(n),o={x:t.midpoint.x+t.normal.x*a*i,y:t.midpoint.y+t.normal.y*a*i},s=Math.atan2(t.start.y-o.y,t.start.x-o.x),c=Math.atan2(t.end.y-o.y,t.end.x-o.x)-s;if(i>0)for(;c<=0;)c+=Math.PI*2;else for(;c>=0;)c-=Math.PI*2;return{center:o,radius:r,startAngle:s,delta:c,direction:i}}function ho(e,t){let n=V(e),r=Math.max(0,Math.min(1,t));if(!po(e)||n.length<lo)return{point:{x:n.start.x+(n.end.x-n.start.x)*r,y:n.start.y+(n.end.y-n.start.y)*r},tangent:n.tangent,normal:n.normal};let i=mo(e),a=i.startAngle+i.delta*r,o={x:i.center.x+Math.cos(a)*i.radius,y:i.center.y+Math.sin(a)*i.radius},s=i.direction>0?{x:-Math.sin(a),y:Math.cos(a)}:{x:Math.sin(a),y:-Math.cos(a)};return{point:o,tangent:s,normal:{x:-s.y,y:s.x}}}function go(e,t=24,n){let r=(e.thickness??.1)/2,i=[],a=[];for(let n=0;n<=Math.max(1,t);n++){let o=ho(e,n/Math.max(1,t));i.push({x:o.point.x+o.normal.x*r,y:o.point.y+o.normal.y*r}),a.push({x:o.point.x-o.normal.x*r,y:o.point.y-o.normal.y*r})}return i[0]=n?.startLeft??i[0],a[0]=n?.startRight??a[0],i[i.length-1]=n?.endLeft??i[i.length-1],a[a.length-1]=n?.endRight??a[a.length-1],[...a,...i.reverse()]}var _o=.001,vo=(e,t=_o)=>`${Math.round(e.x/t)},${Math.round(e.y/t)}`,yo=(e,t)=>({a:-t.y,b:t.x,c:-(-t.y*e.x+t.x*e.y)}),bo=(e,t)=>{let n={x:t.start[0],y:t.start[1]},r={x:t.end[0],y:t.end[1]};if(vo(e)===vo(n)||vo(e)===vo(r))return!1;let i=r.x-n.x,a=r.y-n.y,o=i*i+a*a;if(o<1e-9)return!1;let s=(i*(e.x-n.x)+a*(e.y-n.y))/o;return s<.001||s>.999?!1:Math.hypot(e.x-(n.x+s*i),e.y-(n.y+s*a))<_o};function xo(e){let t=new Map;for(let n of e){let e=[[`start`,{x:n.start[0],y:n.start[1]}],[`end`,{x:n.end[0],y:n.end[1]}]];for(let[r,i]of e){let e=vo(i),a=t.get(e)??{meetingPoint:i,connectedWalls:[]};a.connectedWalls.push({wall:n,endType:r}),t.set(e,a)}}for(let n of t.values())for(let t of e)!n.connectedWalls.some(e=>e.wall.id===t.id)&&bo(n.meetingPoint,t)&&n.connectedWalls.push({wall:t,endType:`passthrough`});let n=new Map([...t].filter(([,e])=>e.connectedWalls.length>=2)),r=new Map;for(let[e,t]of n){let n=[];for(let e of t.connectedWalls){let r=(e.wall.thickness??.1)/2,i=e.endType===`passthrough`?[{x:e.wall.end[0]-e.wall.start[0],y:e.wall.end[1]-e.wall.start[1]},{x:e.wall.start[0]-e.wall.end[0],y:e.wall.start[1]-e.wall.end[1]}]:[So(e.wall,e.endType)];for(let a of i){let i=Math.hypot(a.x,a.y);if(i<1e-9)continue;let o={x:-a.y/i,y:a.x/i};n.push({wallId:e.wall.id,angle:Math.atan2(a.y,a.x),edgeA:yo({x:t.meetingPoint.x+o.x*r,y:t.meetingPoint.y+o.y*r},a),edgeB:yo({x:t.meetingPoint.x-o.x*r,y:t.meetingPoint.y-o.y*r},a),isPassthrough:e.endType===`passthrough`,half:r})}}n.sort((e,t)=>e.angle-t.angle);let i=new Map;for(let e=0;e<n.length;e+=1){let r=n[e],a=n[(e+1)%n.length];if(!r||!a)continue;let o=r.edgeA.a*a.edgeB.b-a.edgeB.a*r.edgeA.b;if(Math.abs(o)<1e-9)continue;let s={x:(r.edgeA.b*a.edgeB.c-a.edgeB.b*r.edgeA.c)/o,y:(a.edgeB.a*r.edgeA.c-r.edgeA.a*a.edgeB.c)/o},c=10*Math.max(r.half,a.half);!Number.isFinite(s.x)||!Number.isFinite(s.y)||Math.hypot(s.x-t.meetingPoint.x,s.y-t.meetingPoint.y)>c||(r.isPassthrough||i.set(r.wallId,{...i.get(r.wallId)??{},left:s}),a.isPassthrough||i.set(a.wallId,{...i.get(a.wallId)??{},right:s}))}r.set(e,i)}return{junctionData:r,junctions:n}}function So(e,t){if(po(e)){let n=ho(e,t===`start`?0:1);return t===`start`?n.tangent:{x:-n.tangent.x,y:-n.tangent.y}}return t===`start`?{x:e.end[0]-e.start[0],y:e.end[1]-e.start[1]}:{x:e.start[0]-e.end[0],y:e.start[1]-e.end[1]}}function Co(e,t){let n=(e.thickness??.1)/2,r=t=>{let n=t===`start`?{x:e.start[0],y:e.start[1]}:{x:e.end[0],y:e.end[1]};if(po(e)){let n=ho(e,t===`start`?0:1);return{point:n.point,normal:n.normal}}let r=So(e,t),i=Math.hypot(r.x,r.y)||1;return{point:n,normal:{x:-r.y/i,y:r.x/i}}},i=r(`start`),a=r(`end`),o=t.junctionData.get(vo(i.point))?.get(e.id),s=t.junctionData.get(vo(a.point))?.get(e.id);return{startLeft:o?.left??{x:i.point.x+i.normal.x*n,y:i.point.y+i.normal.y*n},startRight:o?.right??{x:i.point.x-i.normal.x*n,y:i.point.y-i.normal.y*n},endLeft:s?.right??{x:a.point.x+a.normal.x*n,y:a.point.y+a.normal.y*n},endRight:s?.left??{x:a.point.x-a.normal.x*n,y:a.point.y-a.normal.y*n}}}function wo(e,t){let n={x:e.start[0],y:e.start[1]},r={x:e.end[0],y:e.end[1]},i=r.x-n.x,a=r.y-n.y,o=Math.hypot(i,a);if(o<1e-9)return[];if(po(e))return go(e,24,Co(e,t));let s=co(e).resolvedPhysicalThickness/2,c={x:-a/o,y:i/o},l=t.junctionData.get(vo(n))?.get(e.id),u=t.junctionData.get(vo(r))?.get(e.id),d=l?.left??{x:n.x+c.x*s,y:n.y+c.y*s},f=l?.right??{x:n.x-c.x*s,y:n.y-c.y*s},p=u?.right??{x:r.x+c.x*s,y:r.y+c.y*s},m=[f,u?.left??{x:r.x-c.x*s,y:r.y-c.y*s}];return u&&m.push(r),m.push(p,d),l&&m.push(n),m}var To=e=>e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n.x*i.y-n.y*i.x},0)/2,Eo=(e,t,n,r)=>{let i=(e,t)=>e.x*t.y-e.y*t.x,a={x:t.x-e.x,y:t.y-e.y},o={x:r.x-n.x,y:r.y-n.y},s=i(a,o);if(Math.abs(s)<1e-9)return!1;let c={x:n.x-e.x,y:n.y-e.y},l=i(c,o)/s,u=i(c,a)/s;return l>1e-8&&l<.99999999&&u>1e-8&&u<.99999999};function Do(e,t){let n=[];if(!t.length)return n.push(`wall_zero_length`),{valid:!1,codes:n,area:0,maxVertexDistance:0};t.length<3&&n.push(`wall_invalid_footprint`),t.some(e=>!Number.isFinite(e.x)||!Number.isFinite(e.y))&&n.push(`wall_non_finite_geometry`);for(let e=0;e<t.length;e++)for(let r=e+1;r<t.length;r++)Math.abs(e-r)>1&&!(e===0&&r===t.length-1)&&Eo(t[e],t[(e+1)%t.length],t[r],t[(r+1)%t.length])&&n.push(`wall_self_intersection`);let r=To(t);Math.abs(r)<1e-10&&n.push(`wall_invalid_footprint`);let i=Array.from({length:25},(t,n)=>ho(e,n/24).point),a=Math.max(...t.map(e=>Math.min(...i.map(t=>Math.hypot(e.x-t.x,e.y-t.y)))),0);return a>Math.max(co(e).resolvedPhysicalThickness*12,1)&&n.push(`wall_miter_outlier`),po(e)&&i.every(t=>Math.abs((t.y-e.start[1])*(e.end[0]-e.start[0])-(t.x-e.start[0])*(e.end[1]-e.start[1]))<1e-5)&&n.push(`wall_curve_invalid`),{valid:n.length===0,codes:[...new Set(n)],area:r,maxVertexDistance:a}}function Oo(e){let t=xo(e);return e.map(e=>{let n=wo(e,t);return{wallId:e.id,footprint:n,validation:Do(e,n),thickness:co(e)}})}var ko={width:1.2,depth:.3,thickness:.04,height:.9,rows:1,columns:1,style:`wall-shelf`,withBack:!1,withSides:!0,withBottom:!1,bracketStyle:`minimal`},Ao=new Set([`wall-shelf`,`bookshelf`,`open-rack`,`cubby`]),jo=new Set([`minimal`,`industrial`,`hidden`]),Mo=(e,t,n,r,i=!1)=>{let a=e[t];return typeof a==`number`&&Number.isFinite(a)&&a>=n&&a<=r&&(!i||Number.isInteger(a))?a:ko[t]};function No(e){let t=[],n=Mo(e,`width`,.3,3),r=Mo(e,`depth`,.1,1),i=Mo(e,`thickness`,.01,.1),a=Mo(e,`height`,.05,2.5),o=Mo(e,`rows`,1,8,!0),s=Mo(e,`columns`,1,6,!0);for(let[c,l]of Object.entries({width:n,depth:r,thickness:i,height:a,rows:o,columns:s}))c in e||t.push(c);let c=Ao.has(e.style)?e.style:ko.style;`style`in e||t.push(`style`);let l=jo.has(e.bracketStyle)?e.bracketStyle:ko.bracketStyle;`bracketStyle`in e||t.push(`bracketStyle`);let u=n=>(n in e||t.push(n),typeof e[n]==`boolean`?e[n]:ko[n]);return{width:n,depth:r,thickness:i,height:a,rows:o,columns:s,style:c,bracketStyle:l,withBack:u(`withBack`),withSides:u(`withSides`),withBottom:u(`withBottom`),defaultFields:t}}function Po(e){return Number.isFinite(e.width??ko.width)&&Number.isFinite(e.depth??ko.depth)&&(e.width===void 0||e.width>=.3&&e.width<=3)&&(e.depth===void 0||e.depth>=.1&&e.depth<=1)}function Fo(e,t){let n=Ga(e,t),r=new Set,i=(e,t)=>({x:0,z:0,rotationY:0,sourceNodeIds:t,status:`error`,error:e}),a=e=>{if(r.has(e))return i(`parent_cycle`,[e]);r.add(e);let o=t[e];if(!o)return i(`missing_parent`,[e]);let s=Array.isArray(o.position)?o.position:[0,0,0],c=Array.isArray(o.rotation)?o.rotation[1]??0:0,l=t[o.parentId??``];if(!o.parentId||!l)return i(`missing_parent`,[e,o.parentId??``]);if([`level`,`slab`,`ceiling`].includes(l.type))return{x:s[0],z:s[2],rotationY:c,ancestorLevelId:n.levelId,sourceNodeIds:[e,l.id],status:`ok`};if(l.type===`item`){let r=Za(l.id,t);if(r.status===`error`)return r;let i=Wa(s[0],s[2],r.rotationY);return{x:r.x+i.x,z:r.z+i.z,rotationY:r.rotationY+c,ancestorLevelId:n.levelId,sourceNodeIds:[e,...r.sourceNodeIds],status:`ok`}}if(l.type===`shelf`){let t=a(l.id);if(t.status===`error`)return t;let r=Wa(s[0],s[2],t.rotationY);return{x:t.x+r.x,z:t.z+r.z,rotationY:t.rotationY+c,ancestorLevelId:n.levelId,sourceNodeIds:[e,...t.sourceNodeIds],status:`ok`}}return i(`unsupported_parent_transform`,[e,l.id])},o=a(e);return o.status===`ok`?{...o,ancestorLevelId:n.levelId}:o}function Io(e,t){let n=Fo(e.id,t);return n.status===`ok`?$a(n):null}function Lo(e,t){let n=No(e),r=Io(e,t);return!r||!Po(e)?[]:[[-n.width/2,-n.depth/2],[n.width/2,-n.depth/2],[n.width/2,n.depth/2],[-n.width/2,n.depth/2]].map(([e,t])=>({x:r.a*e+r.c*t+r.e,z:r.b*e+r.d*t+r.f}))}function Ro(e){return(e.style===`bookshelf`||e.style===`cubby`)&&e.columns>1?Array.from({length:e.columns-1},(t,n)=>-((e.width-2*e.thickness)/2)+(n+1)*(e.width-2*e.thickness)/e.columns):[]}var zo={position:[0,0,0],rotation:0,stairType:`straight`,fromLevelId:null,toLevelId:null,width:1,totalRise:2.5,stepCount:10,thickness:.25,fillToFloor:!0,innerRadius:.9,sweepAngle:Math.PI/2,topLandingMode:`none`,topLandingDepth:.9,showCenterColumn:!0,showStepSupports:!0,railingMode:`none`,railingHeight:.92,children:[],slabOpeningMode:`none`,openingOffset:0},Bo=(e,t,n)=>({x:e.x+t*Math.cos(n),z:e.z+t*Math.sin(n)});function Vo(e){let t=Object.keys(zo).filter(t=>!(t in e));return{...zo,...e,sourceFields:t}}function Ho(e){let t=Vo(e),n=Array.isArray(t.position)&&t.position.length>=3?t.position:null;if(!n||typeof t.width!=`number`||t.width<=0||typeof t.innerRadius!=`number`||t.innerRadius<=0||typeof t.sweepAngle!=`number`||!Number.isFinite(t.sweepAngle)||t.sweepAngle===0||!Number.isInteger(t.stepCount)||t.stepCount<1)return null;let r={x:n[0],z:n[2]},i=Math.abs(t.sweepAngle)>=Math.PI*2?Math.sign(t.sweepAngle)*(Math.PI*2-.001):t.sweepAngle,a=t.innerRadius+t.width,o=-t.rotation-i/2,s=o+i,c=s+(t.topLandingMode===`integrated`?Math.sign(i)*Math.min(Math.PI*.75,Math.max(.3,t.topLandingDepth)/Math.max(t.innerRadius+t.width/2,.1)):0),l=t.stepCount,u=Array.from({length:Math.max(24,Math.ceil(Math.abs(c-o)/.12))+1},(e,t)=>o+(c-o)*t/Math.max(24,Math.ceil(Math.abs(c-o)/.12))),d=[...u.map(e=>Bo(r,a,e)),...u.slice().reverse().map(e=>Bo(r,t.innerRadius,e))],f=Array.from({length:l+1},(e,n)=>{let s=o+i*n/l;return{start:Bo(r,t.innerRadius,s),end:Bo(r,a,s)}}),p=t.innerRadius+t.width/2,m=s-i/l*.8,h={from:Bo(r,p,m-i/l*.7),to:Bo(r,p,m+(Math.sign(i)>=0?Math.PI/2:-Math.PI/2)*.15)},g=e=>u.map(t=>Bo(r,e,t)),_=[...t.railingMode===`left`||t.railingMode===`both`?[g(t.innerRadius)]:[],...t.railingMode===`right`||t.railingMode===`both`?[g(a)]:[]];return{center:r,innerRadius:t.innerRadius,outerRadius:a,startAngle:o,endAngle:s,sweepAngle:i,treadLines:f,footprint:d,footprintPath:`M ${d.map(e=>`${e.x} ${e.z}`).join(` L `)} Z`,upDirection:h,centerColumn:t.showCenterColumn?r:null,supportLines:t.showStepSupports?f:[],railingPaths:_,landingGeometry:t.topLandingMode===`integrated`?[Bo(r,t.innerRadius,s),Bo(r,a,s),Bo(r,a,c),Bo(r,t.innerRadius,c)]:null,sourceFields:t.sourceFields,stepCount:l,railingMode:t.railingMode}}var Uo=e=>Ho(e)?.footprint.map(e=>({x:e.x,z:e.z}))??[];function Wo(e){let t=Ho(e);return t?{footprint:t.footprint,downDirection:{from:t.upDirection.to,to:t.upDirection.from}}:null}function Go(e){if(!Array.isArray(e)||e.length<3)return null;let t=e.map(e=>{if(!Array.isArray(e))return null;let t=e[0],n=e[2]??e[1];return Number.isFinite(t)&&Number.isFinite(n)?{x:t,z:n}:null});return t.every(Boolean)?t:null}function Ko(e){return Math.abs(e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n.x*i.z-i.x*n.z},0)/2)}function qo(e){return`M ${e.map(e=>`${e.x} ${e.z}`).join(` L `)} Z`}function Jo(e){let t=Go(e.polygon);if(!t)return null;let n=(Array.isArray(e.holes)?e.holes:[]).map(Go).filter(e=>e!==null),r=Ko(t),i=n.reduce((e,t)=>e+Ko(t),0);return{outer:t,holes:n,path:[qo(t),...n.map(qo)].join(` `),outerArea:r,holeArea:i,netArea:r-i}}var Yo=e=>Number.isFinite(e)?Number(e):null,Xo=(e,t)=>Yo(e)??t,Zo=(e,t,n)=>({x:e*Math.cos(n)+t*Math.sin(n),z:-e*Math.sin(n)+t*Math.cos(n)}),Qo=(e,t,n,r)=>{let i=Zo(e,t,n);return{x:r.x+i.x,z:r.z+i.z}};function $o(e,t){let n=Array.isArray(e.children)?e.children:[];return Object.values(t).filter(t=>t.type===`stair-segment`&&t.parentId===e.id).sort((e,t)=>{let r=n.indexOf(e.id),i=n.indexOf(t.id);return(r<0?2**53-1:r)-(i<0?2**53-1:i)})}function es(e,t){let n=$o(e,t).filter(e=>e.visible!==!1);if(!n.length||!Array.isArray(e.position))return null;let r={x:0,z:0},i=0,a=[];for(let t=0;t<n.length;t+=1){let o=n[t],s=Yo(o.width),c=Yo(o.length);if(!(s&&s>0&&c&&c>0))return null;if(t>0){let e=n[t-1],a=Xo(e.width,0),s=Xo(e.length,0),c=0,l=s,u=0;o.attachmentSide===`left`?(c=a/2,l=s/2,u=Math.PI/2):o.attachmentSide===`right`&&(c=-a/2,l=s/2,u=-Math.PI/2);let d=Zo(c,l,i);r={x:r.x+d.x,z:r.z+d.z},i+=u}let l=[[-s/2,0],[s/2,0],[s/2,c],[-s/2,c]],u={x:Xo(e.position[0],0),z:Xo(e.position[2],0)},d=Xo(e.rotation,0),f=(e,t)=>{let n=Zo(e,t,i);return Qo(r.x+n.x,r.z+n.z,d,u)},p=l.map(([e,t])=>f(e,t)),m=Math.round(Xo(o.stepCount,0)),h=o.segmentType===`stair`&&m>1?Array.from({length:m-1},(e,t)=>{let n=(t+1)/m;return{start:f(-s/2,c*n),end:f(s/2,c*n)}}):[];a.push({node:o,polygon:p,treads:h})}let o=a[a.length-1].polygon;return{segments:a,upDirection:{from:{x:(a[0].polygon[0].x+a[0].polygon[1].x)/2,z:(a[0].polygon[0].z+a[0].polygon[1].z)/2},to:{x:(o[2].x+o[3].x)/2,z:(o[2].z+o[3].z)/2}}}}function ts(e){if(!Array.isArray(e.position))return null;let t=Yo(e.width),n=Yo(e.innerRadius),r=Yo(e.sweepAngle),i=Math.round(Xo(e.stepCount,10));if(!(t&&t>0&&n!==null&&n>0&&r&&i>0))return null;let a={x:Xo(e.position[0],0),z:Xo(e.position[2],0)},o=Xo(e.rotation,0),s=n+t,c=-o-r/2,l=c+r,u=(e,t)=>({x:a.x+Math.cos(t)*e,z:a.z+Math.sin(t)*e}),d=u(s,c),f=u(s,l),p=u(n,l),m=u(n,c),h=+(Math.abs(r)>Math.PI),g=+(r>=0),_=+!g,v=`M ${d.x} ${d.z} A ${s} ${s} 0 ${h} ${g} ${f.x} ${f.z} L ${p.x} ${p.z} A ${n} ${n} 0 ${h} ${_} ${m.x} ${m.z} Z`,y=Array.from({length:i+1},(e,t)=>{let a=c+r*t/i;return{start:u(n,a),end:u(s,a)}}),b=n+t/2,x=u(b,c+r*.2),S=u(b,c+r*.8),C=Math.max(16,Math.ceil(Math.abs(r)/(Math.PI/18))),w=[...Array.from({length:C+1},(e,t)=>u(s,c+r*t/C)),...Array.from({length:C+1},(e,t)=>u(n,l-r*t/C))];return{footprintPath:v,treadLines:y,upDirection:{from:x,to:S},corners:w}}function ns(e,t){return e.stairType===`spiral`?Ho(e)?.footprint??[]:e.stairType===`curved`?ts(e)?.corners??[]:es(e,t)?.segments.flatMap(e=>e.polygon)??[]}function rs(e,t){if(e.stairType===`spiral`||e.stairType===`curved`){let t=Yo(e.width),n=Yo(e.innerRadius),r=Yo(e.sweepAngle),i=Array.isArray(e.position)?e.position:null;if(!(t&&t>0&&n!==null&&n>0&&r&&i))return null;let a={x:Xo(i[0],0),z:Xo(i[2],0)},o=-Xo(e.rotation,0)-r/2,s=o+r,c=n+t/2,l=Math.sign(r),u=e=>({x:a.x+Math.cos(e)*c,z:a.z+Math.sin(e)*c}),d=e=>({x:-Math.sin(e)*l,z:Math.cos(e)*l}),f=d(o),p=d(s);return{fromCenter:u(o),toCenter:u(s),fromOutward:{x:-f.x,z:-f.z},toOutward:p,width:t}}let n=es(e,t),r=n?.segments[0]?.polygon,i=n?.segments[n.segments.length-1]?.polygon;if(!r||!i)return null;let a=(e,t)=>({x:(e.x+t.x)/2,z:(e.z+t.z)/2}),o=(e,t)=>{let n=t.x-e.x,r=t.z-e.z,i=Math.hypot(n,r);return i>0?{x:n/i,z:r/i}:null},s=a(r[0],r[1]),c=a(r[2],r[3]),l=a(i[0],i[1]),u=a(i[2],i[3]),d=o(c,s),f=o(l,u),p=Math.hypot(r[1].x-r[0].x,r[1].z-r[0].z);return d&&f?{fromCenter:s,toCenter:u,fromOutward:d,toOutward:f,width:p}:null}function is(e,t){return e.stairType===`spiral`?!!Ho(e):e.stairType===`curved`?!!ts(e):!!es(e,t)}var as=[`#3b82f6`,`#10b981`,`#f59e0b`,`#ef4444`,`#8b5cf6`,`#06b6d4`,`#84cc16`,`#f97316`];function os(e){return Array.isArray(e.polygon)?e.polygon.flatMap(e=>{if(!Array.isArray(e))return[];let t=e[0],n=e[2]??e[1];return Number.isFinite(t)&&Number.isFinite(n)?[{x:t,z:n}]:[]}):[]}function ss(e){return typeof e.color==`string`&&/^#[0-9a-f]{6}$/i.test(e.color)?e.color:as[[...e.id].reduce((e,t)=>e*31+t.charCodeAt(0)>>>0,0)%as.length]}function cs(e){let t=os(e);if(t.length<3)return null;let n=0,r=0,i=0;for(let e=0;e<t.length;e+=1){let a=t[e],o=t[(e+1)%t.length],s=a.x*o.z-o.x*a.z;n+=s,r+=(a.x+o.x)*s,i+=(a.z+o.z)*s}return Math.abs(n)>1e-9?{x:r/(3*n),z:i/(3*n)}:{x:t.reduce((e,t)=>e+t.x,0)/t.length,z:t.reduce((e,t)=>e+t.z,0)/t.length}}var ls=c(o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self,n.polygonClipping=r())})(e,(function(){function e(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(o){if(r)throw TypeError(`Generator is already executing.`);for(;n;)try{if(r=1,i&&(a=o[0]&2?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[o[0]&2,a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,i=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if((a=n.trys,!(a=a.length>0&&a[a.length-1]))&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=t.call(e,n)}catch(e){o=[6,e],i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}var t=function(){function e(e,t){this.next=null,this.key=e,this.data=t,this.left=null,this.right=null}return e}();function n(e,t){return e>t?1:e<t?-1:0}function r(e,n,r){for(var i=new t(null,null),a=i,o=i;;){var s=r(e,n.key);if(s<0){if(n.left===null)break;if(r(e,n.left.key)<0){var c=n.left;if(n.left=c.right,c.right=n,n=c,n.left===null)break}o.left=n,o=n,n=n.left}else if(s>0){if(n.right===null)break;if(r(e,n.right.key)>0){var c=n.right;if(n.right=c.left,c.left=n,n=c,n.right===null)break}a.right=n,a=n,n=n.right}else break}return a.right=n.left,o.left=n.right,n.left=i.right,n.right=i.left,n}function i(e,n,i,a){var o=new t(e,n);if(i===null)return o.left=o.right=null,o;i=r(e,i,a);var s=a(e,i.key);return s<0?(o.left=i.left,o.right=i,i.left=null):s>=0&&(o.right=i.right,o.left=i,i.right=null),o}function a(e,t,n){var i=null,a=null;if(t){t=r(e,t,n);var o=n(t.key,e);o===0?(i=t.left,a=t.right):o<0?(a=t.right,t.right=null,i=t):(i=t.left,t.left=null,a=t)}return{left:i,right:a}}function o(e,t,n){return t===null?e:e===null?t:(t=r(e.key,t,n),t.left=e,t)}function s(e,t,n,r,i){if(e){r(``+t+(n?`└── `:`├── `)+i(e)+`
`);var a=t+(n?`    `:`│   `);e.left&&s(e.left,a,!1,r,i),e.right&&s(e.right,a,!0,r,i)}}var c=function(){function c(e){e===void 0&&(e=n),this._root=null,this._size=0,this._comparator=e}return c.prototype.insert=function(e,t){return this._size++,this._root=i(e,t,this._root,this._comparator)},c.prototype.add=function(e,n){var i=new t(e,n);this._root===null&&(i.left=i.right=null,this._size++,this._root=i);var a=this._comparator,o=r(e,this._root,a),s=a(e,o.key);return s===0?this._root=o:(s<0?(i.left=o.left,i.right=o,o.left=null):s>0&&(i.right=o.right,i.left=o,o.right=null),this._size++,this._root=i),this._root},c.prototype.remove=function(e){this._root=this._remove(e,this._root,this._comparator)},c.prototype._remove=function(e,t,n){var i;return t===null?null:(t=r(e,t,n),n(e,t.key)===0?(t.left===null?i=t.right:(i=r(e,t.left,n),i.right=t.right),this._size--,i):t)},c.prototype.pop=function(){var e=this._root;if(e){for(;e.left;)e=e.left;return this._root=r(e.key,this._root,this._comparator),this._root=this._remove(e.key,this._root,this._comparator),{key:e.key,data:e.data}}return null},c.prototype.findStatic=function(e){for(var t=this._root,n=this._comparator;t;){var r=n(e,t.key);if(r===0)return t;t=r<0?t.left:t.right}return null},c.prototype.find=function(e){return this._root&&(this._root=r(e,this._root,this._comparator),this._comparator(e,this._root.key)!==0)?null:this._root},c.prototype.contains=function(e){for(var t=this._root,n=this._comparator;t;){var r=n(e,t.key);if(r===0)return!0;t=r<0?t.left:t.right}return!1},c.prototype.forEach=function(e,t){for(var n=this._root,r=[],i=!1;!i;)n===null?r.length===0?i=!0:(n=r.pop(),e.call(t,n),n=n.right):(r.push(n),n=n.left);return this},c.prototype.range=function(e,t,n,r){for(var i=[],a=this._comparator,o=this._root,s;i.length!==0||o;)if(o)i.push(o),o=o.left;else{if(o=i.pop(),s=a(o.key,t),s>0)break;if(a(o.key,e)>=0&&n.call(r,o))return this;o=o.right}return this},c.prototype.keys=function(){var e=[];return this.forEach(function(t){var n=t.key;return e.push(n)}),e},c.prototype.values=function(){var e=[];return this.forEach(function(t){var n=t.data;return e.push(n)}),e},c.prototype.min=function(){return this._root?this.minNode(this._root).key:null},c.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},c.prototype.minNode=function(e){if(e===void 0&&(e=this._root),e)for(;e.left;)e=e.left;return e},c.prototype.maxNode=function(e){if(e===void 0&&(e=this._root),e)for(;e.right;)e=e.right;return e},c.prototype.at=function(e){for(var t=this._root,n=!1,r=0,i=[];!n;)if(t)i.push(t),t=t.left;else if(i.length>0){if(t=i.pop(),r===e)return t;r++,t=t.right}else n=!0;return null},c.prototype.next=function(e){var t=this._root,n=null;if(e.right){for(n=e.right;n.left;)n=n.left;return n}for(var r=this._comparator;t;){var i=r(e.key,t.key);if(i===0)break;i<0?(n=t,t=t.left):t=t.right}return n},c.prototype.prev=function(e){var t=this._root,n=null;if(e.left!==null){for(n=e.left;n.right;)n=n.right;return n}for(var r=this._comparator;t;){var i=r(e.key,t.key);if(i===0)break;i<0?t=t.left:(n=t,t=t.right)}return n},c.prototype.clear=function(){return this._root=null,this._size=0,this},c.prototype.toList=function(){return d(this._root)},c.prototype.load=function(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!1);var r=e.length,i=this._comparator;if(n&&m(e,t,0,r-1,i),this._root===null)this._root=l(e,t,0,r),this._size=r;else{var a=p(this.toList(),u(e,t),i);r=this._size+r,this._root=f({head:a},0,r)}return this},c.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(c.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),c.prototype.toString=function(e){e===void 0&&(e=function(e){return String(e.key)});var t=[];return s(this._root,``,!0,function(e){return t.push(e)},e),t.join(``)},c.prototype.update=function(e,t,n){var r=this._comparator,s=a(e,this._root,r),c=s.left,l=s.right;r(e,t)<0?l=i(t,n,l,r):c=i(t,n,c,r),this._root=o(c,l,r)},c.prototype.split=function(e){return a(e,this._root,this._comparator)},c.prototype[Symbol.iterator]=function(){var t,n,r;return e(this,function(e){switch(e.label){case 0:t=this._root,n=[],r=!1,e.label=1;case 1:return r?[3,6]:t===null?[3,2]:(n.push(t),t=t.left,[3,5]);case 2:return n.length===0?[3,4]:(t=n.pop(),[4,t]);case 3:return e.sent(),t=t.right,[3,5];case 4:r=!0,e.label=5;case 5:return[3,1];case 6:return[2]}})},c}();function l(e,n,r,i){var a=i-r;if(a>0){var o=r+Math.floor(a/2),s=e[o],c=n[o],u=new t(s,c);return u.left=l(e,n,r,o),u.right=l(e,n,o+1,i),u}return null}function u(e,n){for(var r=new t(null,null),i=r,a=0;a<e.length;a++)i=i.next=new t(e[a],n[a]);return i.next=null,r.next}function d(e){for(var n=e,r=[],i=!1,a=new t(null,null),o=a;!i;)n?(r.push(n),n=n.left):r.length>0?(n=o=o.next=r.pop(),n=n.right):i=!0;return o.next=null,a.next}function f(e,t,n){var r=n-t;if(r>0){var i=t+Math.floor(r/2),a=f(e,t,i),o=e.head;return o.left=a,e.head=e.head.next,o.right=f(e,i+1,n),o}return null}function p(e,n,r){for(var i=new t(null,null),a=i,o=e,s=n;o!==null&&s!==null;)r(o.key,s.key)<0?(a.next=o,o=o.next):(a.next=s,s=s.next),a=a.next;return o===null?s!==null&&(a.next=s):a.next=o,i.next}function m(e,t,n,r,i){if(!(n>=r)){for(var a=e[n+r>>1],o=n-1,s=r+1;;){do o++;while(i(e[o],a)<0);do s--;while(i(e[s],a)>0);if(o>=s)break;var c=e[o];e[o]=e[s],e[s]=c,c=t[o],t[o]=t[s],t[s]=c}m(e,t,n,s,i),m(e,t,s+1,r,i)}}let h=(e,t)=>e.ll.x<=t.x&&t.x<=e.ur.x&&e.ll.y<=t.y&&t.y<=e.ur.y,g=(e,t)=>{if(t.ur.x<e.ll.x||e.ur.x<t.ll.x||t.ur.y<e.ll.y||e.ur.y<t.ll.y)return null;let n=e.ll.x<t.ll.x?t.ll.x:e.ll.x,r=e.ur.x<t.ur.x?e.ur.x:t.ur.x,i=e.ll.y<t.ll.y?t.ll.y:e.ll.y,a=e.ur.y<t.ur.y?e.ur.y:t.ur.y;return{ll:{x:n,y:i},ur:{x:r,y:a}}},_=2**-52;_===void 0&&(_=2**-52);let v=_*_,y=(e,t)=>{if(-_<e&&e<_&&-_<t&&t<_)return 0;let n=e-t;return n*n<v*e*t?0:e<t?-1:1};class b{constructor(){this.reset()}reset(){this.xRounder=new x,this.yRounder=new x}round(e,t){return{x:this.xRounder.round(e),y:this.yRounder.round(t)}}}class x{constructor(){this.tree=new c,this.round(0)}round(e){let t=this.tree.add(e),n=this.tree.prev(t);if(n!==null&&y(t.key,n.key)===0)return this.tree.remove(e),n.key;let r=this.tree.next(t);return r!==null&&y(t.key,r.key)===0?(this.tree.remove(e),r.key):e}}let S=new b,C=134217729;function w(e,t,n,r,i){let a,o,s,c,l=t[0],u=r[0],d=0,f=0;u>l==u>-l?(a=l,l=t[++d]):(a=u,u=r[++f]);let p=0;if(d<e&&f<n)for(u>l==u>-l?(o=l+a,s=a-(o-l),l=t[++d]):(o=u+a,s=a-(o-u),u=r[++f]),a=o,s!==0&&(i[p++]=s);d<e&&f<n;)u>l==u>-l?(o=a+l,c=o-a,s=a-(o-c)+(l-c),l=t[++d]):(o=a+u,c=o-a,s=a-(o-c)+(u-c),u=r[++f]),a=o,s!==0&&(i[p++]=s);for(;d<e;)o=a+l,c=o-a,s=a-(o-c)+(l-c),l=t[++d],a=o,s!==0&&(i[p++]=s);for(;f<n;)o=a+u,c=o-a,s=a-(o-c)+(u-c),u=r[++f],a=o,s!==0&&(i[p++]=s);return(a!==0||p===0)&&(i[p++]=a),p}function T(e,t){let n=t[0];for(let r=1;r<e;r++)n+=t[r];return n}function E(e){return new Float64Array(e)}let ee=E(4),te=E(8),ne=E(12),re=E(16),D=E(4);function O(e,t,n,r,i,a,o){let s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,E,O,k=e-i,A=n-i,j=t-a,M=r-a;b=k*M,f=C*k,p=f-(f-k),m=k-p,f=C*M,h=f-(f-M),g=M-h,x=m*g-(b-p*h-m*h-p*g),S=j*A,f=C*j,p=f-(f-j),m=j-p,f=C*A,h=f-(f-A),g=A-h,E=m*g-(S-p*h-m*h-p*g),_=x-E,d=x-_,ee[0]=x-(_+d)+(d-E),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,ee[1]=y-(_+d)+(d-S),O=v+_,d=O-v,ee[2]=v-(O-d)+(_-d),ee[3]=O;let N=T(4,ee),P=22204460492503146e-32*o;if(N>=P||-N>=P||(d=e-k,s=e-(k+d)+(d-i),d=n-A,l=n-(A+d)+(d-i),d=t-j,c=t-(j+d)+(d-a),d=r-M,u=r-(M+d)+(d-a),s===0&&c===0&&l===0&&u===0)||(P=11093356479670487e-47*o+33306690738754706e-32*Math.abs(N),N+=k*u+M*s-(j*l+A*c),N>=P||-N>=P))return N;b=s*M,f=C*s,p=f-(f-s),m=s-p,f=C*M,h=f-(f-M),g=M-h,x=m*g-(b-p*h-m*h-p*g),S=c*A,f=C*c,p=f-(f-c),m=c-p,f=C*A,h=f-(f-A),g=A-h,E=m*g-(S-p*h-m*h-p*g),_=x-E,d=x-_,D[0]=x-(_+d)+(d-E),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,D[1]=y-(_+d)+(d-S),O=v+_,d=O-v,D[2]=v-(O-d)+(_-d),D[3]=O;let ie=w(4,ee,4,D,te);b=k*u,f=C*k,p=f-(f-k),m=k-p,f=C*u,h=f-(f-u),g=u-h,x=m*g-(b-p*h-m*h-p*g),S=j*l,f=C*j,p=f-(f-j),m=j-p,f=C*l,h=f-(f-l),g=l-h,E=m*g-(S-p*h-m*h-p*g),_=x-E,d=x-_,D[0]=x-(_+d)+(d-E),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,D[1]=y-(_+d)+(d-S),O=v+_,d=O-v,D[2]=v-(O-d)+(_-d),D[3]=O;let ae=w(ie,te,4,D,ne);b=s*u,f=C*s,p=f-(f-s),m=s-p,f=C*u,h=f-(f-u),g=u-h,x=m*g-(b-p*h-m*h-p*g),S=c*l,f=C*c,p=f-(f-c),m=c-p,f=C*l,h=f-(f-l),g=l-h,E=m*g-(S-p*h-m*h-p*g),_=x-E,d=x-_,D[0]=x-(_+d)+(d-E),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,D[1]=y-(_+d)+(d-S),O=v+_,d=O-v,D[2]=v-(O-d)+(_-d),D[3]=O;let oe=w(ae,ne,4,D,re);return re[oe-1]}function k(e,t,n,r,i,a){let o=(t-a)*(n-i),s=(e-i)*(r-a),c=o-s,l=Math.abs(o+s);return Math.abs(c)>=33306690738754716e-32*l?c:-O(e,t,n,r,i,a,l)}let A=(e,t)=>e.x*t.y-e.y*t.x,j=(e,t)=>e.x*t.x+e.y*t.y,M=(e,t,n)=>{let r=k(e.x,e.y,t.x,t.y,n.x,n.y);return r>0?-1:+(r<0)},N=e=>Math.sqrt(j(e,e)),P=(e,t,n)=>{let r={x:t.x-e.x,y:t.y-e.y},i={x:n.x-e.x,y:n.y-e.y};return A(i,r)/N(i)/N(r)},ie=(e,t,n)=>{let r={x:t.x-e.x,y:t.y-e.y},i={x:n.x-e.x,y:n.y-e.y};return j(i,r)/N(i)/N(r)},ae=(e,t,n)=>t.y===0?null:{x:e.x+t.x/t.y*(n-e.y),y:n},oe=(e,t,n)=>t.x===0?null:{x:n,y:e.y+t.y/t.x*(n-e.x)},F=(e,t,n,r)=>{if(t.x===0)return oe(n,r,e.x);if(r.x===0)return oe(e,t,n.x);if(t.y===0)return ae(n,r,e.y);if(r.y===0)return ae(e,t,n.y);let i=A(t,r);if(i==0)return null;let a={x:n.x-e.x,y:n.y-e.y},o=A(a,t)/i,s=A(a,r)/i,c=e.x+s*t.x,l=n.x+o*r.x,u=e.y+s*t.y,d=n.y+o*r.y;return{x:(c+l)/2,y:(u+d)/2}};class I{static compare(e,t){let n=I.comparePoints(e.point,t.point);return n===0?(e.point!==t.point&&e.link(t),e.isLeft===t.isLeft?L.compare(e.segment,t.segment):e.isLeft?1:-1):n}static comparePoints(e,t){return e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:+(e.y>t.y)}constructor(e,t){e.events===void 0?e.events=[this]:e.events.push(this),this.point=e,this.isLeft=t}link(e){if(e.point===this.point)throw Error(`Tried to link already linked events`);let t=e.point.events;for(let e=0,n=t.length;e<n;e++){let n=t[e];this.point.events.push(n),n.point=this.point}this.checkForConsuming()}checkForConsuming(){let e=this.point.events.length;for(let t=0;t<e;t++){let n=this.point.events[t];if(n.segment.consumedBy===void 0)for(let r=t+1;r<e;r++){let e=this.point.events[r];e.consumedBy===void 0&&n.otherSE.point.events===e.otherSE.point.events&&n.segment.consume(e.segment)}}}getAvailableLinkedEvents(){let e=[];for(let t=0,n=this.point.events.length;t<n;t++){let n=this.point.events[t];n!==this&&!n.segment.ringOut&&n.segment.isInResult()&&e.push(n)}return e}getLeftmostComparator(e){let t=new Map,n=n=>{let r=n.otherSE;t.set(n,{sine:P(this.point,e.point,r.point),cosine:ie(this.point,e.point,r.point)})};return(e,r)=>{t.has(e)||n(e),t.has(r)||n(r);let{sine:i,cosine:a}=t.get(e),{sine:o,cosine:s}=t.get(r);return i>=0&&o>=0?a<s?1:a>s?-1:0:i<0&&o<0?a<s?-1:+(a>s):o<i?-1:+(o>i)}}}let se=0;class L{static compare(e,t){let n=e.leftSE.point.x,r=t.leftSE.point.x,i=e.rightSE.point.x,a=t.rightSE.point.x;if(a<n)return 1;if(i<r)return-1;let o=e.leftSE.point.y,s=t.leftSE.point.y,c=e.rightSE.point.y,l=t.rightSE.point.y;if(n<r){if(s<o&&s<c)return 1;if(s>o&&s>c)return-1;let n=e.comparePoint(t.leftSE.point);if(n<0)return 1;if(n>0)return-1;let r=t.comparePoint(e.rightSE.point);return r===0?-1:r}if(n>r){if(o<s&&o<l)return-1;if(o>s&&o>l)return 1;let n=t.comparePoint(e.leftSE.point);if(n!==0)return n;let r=e.comparePoint(t.rightSE.point);return r<0?1:r>0?-1:1}if(o<s)return-1;if(o>s)return 1;if(i<a){let n=t.comparePoint(e.rightSE.point);if(n!==0)return n}if(i>a){let n=e.comparePoint(t.rightSE.point);if(n<0)return 1;if(n>0)return-1}if(i!==a){let e=c-o,t=i-n,u=l-s,d=a-r;if(e>t&&u<d)return 1;if(e<t&&u>d)return-1}return i>a?1:i<a||c<l?-1:c>l?1:e.id<t.id?-1:+(e.id>t.id)}constructor(e,t,n,r){this.id=++se,this.leftSE=e,e.segment=this,e.otherSE=t,this.rightSE=t,t.segment=this,t.otherSE=e,this.rings=n,this.windings=r}static fromRing(e,t,n){let r,i,a,o=I.comparePoints(e,t);if(o<0)r=e,i=t,a=1;else if(o>0)r=t,i=e,a=-1;else throw Error(`Tried to create degenerate segment at [${e.x}, ${e.y}]`);let s=new I(r,!0),c=new I(i,!1);return new L(s,c,[n],[a])}replaceRightSE(e){this.rightSE=e,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let e=this.leftSE.point.y,t=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:e<t?e:t},ur:{x:this.rightSE.point.x,y:e>t?e:t}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(e){return e.x===this.leftSE.point.x&&e.y===this.leftSE.point.y||e.x===this.rightSE.point.x&&e.y===this.rightSE.point.y}comparePoint(e){if(this.isAnEndpoint(e))return 0;let t=this.leftSE.point,n=this.rightSE.point,r=this.vector();if(t.x===n.x)return e.x===t.x?0:e.x<t.x?1:-1;let i=(e.y-t.y)/r.y,a=t.x+i*r.x;if(e.x===a)return 0;let o=(e.x-t.x)/r.x,s=t.y+o*r.y;return e.y===s?0:e.y<s?-1:1}getIntersection(e){let t=this.bbox(),n=e.bbox(),r=g(t,n);if(r===null)return null;let i=this.leftSE.point,a=this.rightSE.point,o=e.leftSE.point,s=e.rightSE.point,c=h(t,o)&&this.comparePoint(o)===0,l=h(n,i)&&e.comparePoint(i)===0,u=h(t,s)&&this.comparePoint(s)===0,d=h(n,a)&&e.comparePoint(a)===0;if(l&&c)return d&&!u?a:!d&&u?s:null;if(l)return u&&i.x===s.x&&i.y===s.y?null:i;if(c)return d&&a.x===o.x&&a.y===o.y?null:o;if(d&&u)return null;if(d)return a;if(u)return s;let f=F(i,this.vector(),o,e.vector());return f===null||!h(r,f)?null:S.round(f.x,f.y)}split(e){let t=[],n=e.events!==void 0,r=new I(e,!0),i=new I(e,!1),a=this.rightSE;this.replaceRightSE(i),t.push(i),t.push(r);let o=new L(r,a,this.rings.slice(),this.windings.slice());return I.comparePoints(o.leftSE.point,o.rightSE.point)>0&&o.swapEvents(),I.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),n&&(r.checkForConsuming(),i.checkForConsuming()),t}swapEvents(){let e=this.rightSE;this.rightSE=this.leftSE,this.leftSE=e,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let e=0,t=this.windings.length;e<t;e++)this.windings[e]*=-1}consume(e){let t=this,n=e;for(;t.consumedBy;)t=t.consumedBy;for(;n.consumedBy;)n=n.consumedBy;let r=L.compare(t,n);if(r!==0){if(r>0){let e=t;t=n,n=e}if(t.prev===n){let e=t;t=n,n=e}for(let e=0,r=n.rings.length;e<r;e++){let r=n.rings[e],i=n.windings[e],a=t.rings.indexOf(r);a===-1?(t.rings.push(r),t.windings.push(i)):t.windings[a]+=i}n.rings=null,n.windings=null,n.consumedBy=t,n.leftSE.consumedBy=t.leftSE,n.rightSE.consumedBy=t.rightSE}}prevInResult(){return this._prevInResult===void 0&&(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null),this._prevInResult}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let e=this.prev.consumedBy||this.prev;this._beforeState=e.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let e=this.beforeState();this._afterState={rings:e.rings.slice(0),windings:e.windings.slice(0),multiPolys:[]};let t=this._afterState.rings,n=this._afterState.windings,r=this._afterState.multiPolys;for(let e=0,r=this.rings.length;e<r;e++){let r=this.rings[e],i=this.windings[e],a=t.indexOf(r);a===-1?(t.push(r),n.push(i)):n[a]+=i}let i=[],a=[];for(let e=0,r=t.length;e<r;e++){if(n[e]===0)continue;let r=t[e],o=r.poly;if(a.indexOf(o)===-1)if(r.isExterior)i.push(o);else{a.indexOf(o)===-1&&a.push(o);let e=i.indexOf(r.poly);e!==-1&&i.splice(e,1)}}for(let e=0,t=i.length;e<t;e++){let t=i[e].multiPoly;r.indexOf(t)===-1&&r.push(t)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let e=this.beforeState().multiPolys,t=this.afterState().multiPolys;switch(ve.type){case`union`:{let n=e.length===0,r=t.length===0;this._isInResult=n!==r;break}case`intersection`:{let n,r;e.length<t.length?(n=e.length,r=t.length):(n=t.length,r=e.length),this._isInResult=r===ve.numMultiPolys&&n<r;break}case`xor`:{let n=Math.abs(e.length-t.length);this._isInResult=n%2==1;break}case`difference`:{let n=e=>e.length===1&&e[0].isSubject;this._isInResult=n(e)!==n(t);break}default:throw Error(`Unrecognized operation type found ${ve.type}`)}return this._isInResult}}class ce{constructor(e,t,n){if(!Array.isArray(e)||e.length===0||(this.poly=t,this.isExterior=n,this.segments=[],typeof e[0][0]!=`number`||typeof e[0][1]!=`number`))throw Error(`Input geometry is not a valid Polygon or MultiPolygon`);let r=S.round(e[0][0],e[0][1]);this.bbox={ll:{x:r.x,y:r.y},ur:{x:r.x,y:r.y}};let i=r;for(let t=1,n=e.length;t<n;t++){if(typeof e[t][0]!=`number`||typeof e[t][1]!=`number`)throw Error(`Input geometry is not a valid Polygon or MultiPolygon`);let n=S.round(e[t][0],e[t][1]);n.x===i.x&&n.y===i.y||(this.segments.push(L.fromRing(i,n,this)),n.x<this.bbox.ll.x&&(this.bbox.ll.x=n.x),n.y<this.bbox.ll.y&&(this.bbox.ll.y=n.y),n.x>this.bbox.ur.x&&(this.bbox.ur.x=n.x),n.y>this.bbox.ur.y&&(this.bbox.ur.y=n.y),i=n)}(r.x!==i.x||r.y!==i.y)&&this.segments.push(L.fromRing(i,r,this))}getSweepEvents(){let e=[];for(let t=0,n=this.segments.length;t<n;t++){let n=this.segments[t];e.push(n.leftSE),e.push(n.rightSE)}return e}}class le{constructor(e,t){if(!Array.isArray(e))throw Error(`Input geometry is not a valid Polygon or MultiPolygon`);this.exteriorRing=new ce(e[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let t=1,n=e.length;t<n;t++){let n=new ce(e[t],this,!1);n.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=n.bbox.ll.x),n.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=n.bbox.ll.y),n.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=n.bbox.ur.x),n.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=n.bbox.ur.y),this.interiorRings.push(n)}this.multiPoly=t}getSweepEvents(){let e=this.exteriorRing.getSweepEvents();for(let t=0,n=this.interiorRings.length;t<n;t++){let n=this.interiorRings[t].getSweepEvents();for(let t=0,r=n.length;t<r;t++)e.push(n[t])}return e}}class ue{constructor(e,t){if(!Array.isArray(e))throw Error(`Input geometry is not a valid Polygon or MultiPolygon`);try{typeof e[0][0][0]==`number`&&(e=[e])}catch{}this.polys=[],this.bbox={ll:{x:1/0,y:1/0},ur:{x:-1/0,y:-1/0}};for(let t=0,n=e.length;t<n;t++){let n=new le(e[t],this);n.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=n.bbox.ll.x),n.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=n.bbox.ll.y),n.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=n.bbox.ur.x),n.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=n.bbox.ur.y),this.polys.push(n)}this.isSubject=t}getSweepEvents(){let e=[];for(let t=0,n=this.polys.length;t<n;t++){let n=this.polys[t].getSweepEvents();for(let t=0,r=n.length;t<r;t++)e.push(n[t])}return e}}class de{static factory(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];if(!r.isInResult()||r.ringOut)continue;let i=null,a=r.leftSE,o=r.rightSE,s=[a],c=a.point,l=[];for(;i=a,a=o,s.push(a),a.point!==c;)for(;;){let e=a.getAvailableLinkedEvents();if(e.length===0){let e=s[0].point,t=s[s.length-1].point;throw Error(`Unable to complete output ring starting at [${e.x}, ${e.y}]. Last matching segment found ends at [${t.x}, ${t.y}].`)}if(e.length===1){o=e[0].otherSE;break}let n=null;for(let e=0,t=l.length;e<t;e++)if(l[e].point===a.point){n=e;break}if(n!==null){let e=l.splice(n)[0],r=s.splice(e.index);r.unshift(r[0].otherSE),t.push(new de(r.reverse()));continue}l.push({index:s.length,point:a.point});let r=a.getLeftmostComparator(i);o=e.sort(r)[0].otherSE;break}t.push(new de(s))}return t}constructor(e){this.events=e;for(let t=0,n=e.length;t<n;t++)e[t].segment.ringOut=this;this.poly=null}getGeom(){let e=this.events[0].point,t=[e];for(let n=1,r=this.events.length-1;n<r;n++){let r=this.events[n].point,i=this.events[n+1].point;M(r,e,i)!==0&&(t.push(r),e=r)}if(t.length===1)return null;let n=t[0],r=t[1];M(n,e,r)===0&&t.shift(),t.push(t[0]);let i=this.isExteriorRing()?1:-1,a=this.isExteriorRing()?0:t.length-1,o=this.isExteriorRing()?t.length:-1,s=[];for(let e=a;e!=o;e+=i)s.push([t[e].x,t[e].y]);return s}isExteriorRing(){if(this._isExteriorRing===void 0){let e=this.enclosingRing();this._isExteriorRing=!e||!e.isExteriorRing()}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let e=this.events[0];for(let t=1,n=this.events.length;t<n;t++){let n=this.events[t];I.compare(e,n)>0&&(e=n)}let t=e.segment.prevInResult(),n=t?t.prevInResult():null;for(;;){if(!t)return null;if(!n)return t.ringOut;if(n.ringOut!==t.ringOut)return n.ringOut.enclosingRing()===t.ringOut?t.ringOut.enclosingRing():t.ringOut;t=n.prevInResult(),n=t?t.prevInResult():null}}}class fe{constructor(e){this.exteriorRing=e,e.poly=this,this.interiorRings=[]}addInterior(e){this.interiorRings.push(e),e.poly=this}getGeom(){let e=[this.exteriorRing.getGeom()];if(e[0]===null)return null;for(let t=0,n=this.interiorRings.length;t<n;t++){let n=this.interiorRings[t].getGeom();n!==null&&e.push(n)}return e}}class pe{constructor(e){this.rings=e,this.polys=this._composePolys(e)}getGeom(){let e=[];for(let t=0,n=this.polys.length;t<n;t++){let n=this.polys[t].getGeom();n!==null&&e.push(n)}return e}_composePolys(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];if(!r.poly)if(r.isExteriorRing())t.push(new fe(r));else{let e=r.enclosingRing();e.poly||t.push(new fe(e)),e.poly.addInterior(r)}}return t}}class me{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L.compare;this.queue=e,this.tree=new c(t),this.segments=[]}process(e){let t=e.segment,n=[];if(e.consumedBy)return e.isLeft?this.queue.remove(e.otherSE):this.tree.remove(t),n;let r=e.isLeft?this.tree.add(t):this.tree.find(t);if(!r)throw Error(`Unable to find segment #${t.id} [${t.leftSE.point.x}, ${t.leftSE.point.y}] -> [${t.rightSE.point.x}, ${t.rightSE.point.y}] in SweepLine tree.`);let i=r,a=r,o,s;for(;o===void 0;)i=this.tree.prev(i),i===null?o=null:i.key.consumedBy===void 0&&(o=i.key);for(;s===void 0;)a=this.tree.next(a),a===null?s=null:a.key.consumedBy===void 0&&(s=a.key);if(e.isLeft){let r=null;if(o){let e=o.getIntersection(t);if(e!==null&&(t.isAnEndpoint(e)||(r=e),!o.isAnEndpoint(e))){let t=this._splitSafely(o,e);for(let e=0,r=t.length;e<r;e++)n.push(t[e])}}let i=null;if(s){let e=s.getIntersection(t);if(e!==null&&(t.isAnEndpoint(e)||(i=e),!s.isAnEndpoint(e))){let t=this._splitSafely(s,e);for(let e=0,r=t.length;e<r;e++)n.push(t[e])}}if(r!==null||i!==null){let e=null;e=r===null?i:i===null||I.comparePoints(r,i)<=0?r:i,this.queue.remove(t.rightSE),n.push(t.rightSE);let a=t.split(e);for(let e=0,t=a.length;e<t;e++)n.push(a[e])}n.length>0?(this.tree.remove(t),n.push(e)):(this.segments.push(t),t.prev=o)}else{if(o&&s){let e=o.getIntersection(s);if(e!==null){if(!o.isAnEndpoint(e)){let t=this._splitSafely(o,e);for(let e=0,r=t.length;e<r;e++)n.push(t[e])}if(!s.isAnEndpoint(e)){let t=this._splitSafely(s,e);for(let e=0,r=t.length;e<r;e++)n.push(t[e])}}}this.tree.remove(t)}return n}_splitSafely(e,t){this.tree.remove(e);let n=e.rightSE;this.queue.remove(n);let r=e.split(t);return r.push(n),e.consumedBy===void 0&&this.tree.add(e),r}}let he=typeof process<`u`&&{}.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,ge=typeof process<`u`&&{}.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class _e{run(e,t,n){ve.type=e,S.reset();let r=[new ue(t,!0)];for(let e=0,t=n.length;e<t;e++)r.push(new ue(n[e],!1));if(ve.numMultiPolys=r.length,ve.type===`difference`){let e=r[0],t=1;for(;t<r.length;)g(r[t].bbox,e.bbox)===null?r.splice(t,1):t++}if(ve.type===`intersection`)for(let e=0,t=r.length;e<t;e++){let t=r[e];for(let n=e+1,i=r.length;n<i;n++)if(g(t.bbox,r[n].bbox)===null)return[]}let i=new c(I.compare);for(let e=0,t=r.length;e<t;e++){let t=r[e].getSweepEvents();for(let e=0,n=t.length;e<n;e++)if(i.insert(t[e]),i.size>he)throw Error(`Infinite loop when putting segment endpoints in a priority queue (queue size too big).`)}let a=new me(i),o=i.size,s=i.pop();for(;s;){let e=s.key;if(i.size===o){let t=e.segment;throw Error(`Unable to pop() ${e.isLeft?`left`:`right`} SweepEvent [${e.point.x}, ${e.point.y}] from segment #${t.id} [${t.leftSE.point.x}, ${t.leftSE.point.y}] -> [${t.rightSE.point.x}, ${t.rightSE.point.y}] from queue.`)}if(i.size>he)throw Error(`Infinite loop when passing sweep line over endpoints (queue size too big).`);if(a.segments.length>ge)throw Error(`Infinite loop when passing sweep line over endpoints (too many sweep line segments).`);let t=a.process(e);for(let e=0,n=t.length;e<n;e++){let n=t[e];n.consumedBy===void 0&&i.insert(n)}o=i.size,s=i.pop()}S.reset();let l=de.factory(a.segments);return new pe(l).getGeom()}}let ve=new _e;return{union:function(e){var t=[...arguments].slice(1);return ve.run(`union`,e,t)},intersection:function(e){var t=[...arguments].slice(1);return ve.run(`intersection`,e,t)},xor:function(e){var t=[...arguments].slice(1);return ve.run(`xor`,e,t)},difference:function(e){var t=[...arguments].slice(1);return ve.run(`difference`,e,t)}}}))}))(),1),us=.001,ds=.45,fs=.85,ps=.1,ms=1e-6,hs=.001,gs=(e,t)=>[e[0]-t[0],e[1]-t[1]],_s=(e,t,n=1)=>[e[0]+t[0]*n,e[1]+t[1]*n],vs=(e,t)=>e[0]*t[0]+e[1]*t[1],ys=(e,t)=>e[0]*t[1]-e[1]*t[0],bs=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1]),xs=e=>{let t=Math.hypot(e[0],e[1]);return t>1e-12?[e[0]/t,e[1]/t]:[0,0]},Ss=e=>[...new Set(e)],Cs=e=>Math.round(e/us)*us,ws=e=>[Cs(e[0]),Cs(e[1])],Ts=(e,t,n)=>{let r=gs(n,t),i=Math.hypot(...r);return i<1e-12?bs(e,t):Math.abs(ys(r,gs(e,t)))/i},Es=(e,t,n,r)=>{let i=xs(gs(t,e));if(bs(e,t)<=.001||bs(n,r)<=.001||Ts(n,e,t)>.001||Ts(r,e,t)>.001)return!1;let a=[vs(gs(n,e),i),vs(gs(r,e),i)].sort((e,t)=>e-t);return Math.min(bs(e,t),a[1])-Math.max(0,a[0])>us};function Ds(e){return e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n[0]*i[1]-i[0]*n[1]},0)/2}function Os(e){return String(Math.round(e*1e3))}function ks(e,t=0){let n=Math.atan2(e[1],e[0])*180/Math.PI,r=((n+t+180)%360+360)%360-180;return(r>90||r<=-90)&&(n+=180),n}function As(e,t){let n=[],r=Object.values(e).filter(n=>n.type===`wall`&&Ga(n.id,e).levelId===t),i=Oo(r).filter(e=>e.validation.valid&&e.footprint.length>=3),a={exteriorComponentCount:0,exteriorRingCount:0,interiorRingCount:0,exteriorRunCount:0,innerChainCount:0,innerSegmentCount:0,overallDimensionCount:0,exteriorDoorCount:0,exteriorWindowCount:0,excludedInteriorOpeningCount:0,curvedExteriorRunCount:0,unresolvedRunCount:0,chainSumMismatchCount:0,dimensionTextUnresolvedCollisionCount:0};if(!i.length)return{levelId:t,rings:[],runs:[],dimensions:[],diagnostics:[{severity:`warning`,code:`no_exterior_contour`,message:`当前 Level 没有可用于外围尺寸的有效墙体 footprint`,sourcePath:`nodes`}],summary:a};let o;try{let[e,...t]=i.map(e=>[[e.footprint.map(e=>ws([e.x,e.y]))]]);o=ls.default.union(e,...t)}catch{return{levelId:t,rings:[],runs:[],dimensions:[],diagnostics:[{severity:`error`,code:`exterior_union_failed`,message:`墙体 physical footprint polygon union 失败`,sourcePath:`derived.exterior-dimensions`}],summary:a}}if(!Array.isArray(o)||!o.length)return{levelId:t,rings:[],runs:[],dimensions:[],diagnostics:[{severity:`warning`,code:`no_exterior_contour`,message:`Polygon union 未生成外轮廓`,sourcePath:`derived.exterior-dimensions`}],summary:a};let s=[],c=[],l=0,u=0,d=0;o.forEach((e,a)=>{let o=`component-${a+1}`;l+=Math.max(0,e.length-1);let f=e[0],p=f.slice(0,f.length>1&&bs(f[0],f[f.length-1])<=.001?-1:void 0).map(e=>[e[0],e[1]]);if(p.length<3||Math.abs(Ds(p))<1e-9){n.push({severity:`error`,code:`invalid_exterior_ring`,message:`无效外围 ring：${o}`,sourcePath:`derived.exterior-dimensions`});return}let m=Ds(p),h=p.map((e,t)=>{let n=p[(t+1)%p.length];return{start:e,end:n,sourceWallIds:i.filter(t=>{let r=t.footprint.map(e=>[e.x,e.y]);return r.some((t,i)=>Es(e,n,t,r[(i+1)%r.length]))}).map(e=>e.wallId)}}),g=Ss(h.flatMap(e=>e.sourceWallIds));s.push({componentId:o,ringId:`${o}-outer`,points:p,signedArea:m,winding:m>0?`counterclockwise`:`clockwise`,sourceWallIds:g});let _=h.map(e=>({...e,direction:xs(gs(e.end,e.start)),curved:e.sourceWallIds.some(e=>po(r.find(t=>t.id===e))),unresolved:e.sourceWallIds.length===0,boundarySegments:[e]})),v=[];for(let e of _){let t=v[v.length-1];t&&!t.unresolved&&!e.unresolved&&t.curved===e.curved&&Math.abs(ys(t.direction,e.direction))<=ms&&vs(t.direction,e.direction)>0?(t.end=e.end,t.sourceWallIds=Ss([...t.sourceWallIds,...e.sourceWallIds]),t.boundarySegments.push(...e.boundarySegments)):v.push({...e,sourceWallIds:[...e.sourceWallIds]})}if(v.length>1){let e=v[0],t=v[v.length-1];!e.unresolved&&!t.unresolved&&e.curved===t.curved&&Math.abs(ys(t.direction,e.direction))<=ms&&vs(t.direction,e.direction)>0&&(e.start=t.start,e.sourceWallIds=Ss([...t.sourceWallIds,...e.sourceWallIds]),e.boundarySegments=[...t.boundarySegments,...e.boundarySegments],v.pop())}v.forEach((e,i)=>{let a=`${o}-run-${i+1}`,s=bs(e.start,e.end),l=xs(gs(e.end,e.start)),f=m>0?[l[1],-l[0]]:[-l[1],l[0]];if(e.unresolved){d+=1,n.push({severity:`error`,code:`ambiguous_exterior_wall_mapping`,message:`外围边界无法映射到来源 Wall：${a}`,sourcePath:`derived.exterior-dimensions`});return}if(e.curved){u+=1;let t=e.sourceWallIds.filter(e=>po(r.find(t=>t.id===e)));for(let e of t){let t=mo(r.find(t=>t.id===e));n.push({severity:`warning`,code:`unsupported_curved_exterior_dimension`,message:`曲墙外围段本轮不生成直线尺寸：${e}; radius=${t?.radius??`unknown`}; sweep=${t?.delta??`unknown`}`,nodeId:e,sourcePath:`nodes.${e}.curveOffset`})}return}s>.001&&c.push({id:a,levelId:t,componentId:o,start:e.start,end:e.end,direction:l,outwardNormal:f,sourceWallIds:e.sourceWallIds,boundarySegments:e.boundarySegments,lengthMeters:s})})}),o.length>1&&n.push({severity:`info`,code:`multiple_exterior_components`,message:`检测到 ${o.length} 个互不连接的外围组件`,sourcePath:`derived.exterior-dimensions`});let f=[],p=new Set,m=new Set,h=0,g=0;for(let i of c){let a=[js(i,0,`exterior-run-start`,i.id),js(i,i.lengthMeters,`exterior-run-end`,i.id)],o=i.sourceWallIds.map(e=>r.find(t=>t.id===e)).filter(e=>!!e).filter(e=>Math.abs(ys(xs([e.end[0]-e.start[0],e.end[1]-e.start[1]]),i.direction))<=ms);if(o.length>1)for(let e of o)for(let t of[e.start,e.end]){let n=vs(gs([t[0],t[1]],i.start),i.direction);n>.001&&n<i.lengthMeters-.001&&Ts([t[0],t[1]],i.start,i.end)<=Math.max((e.thickness??.1)/2+.001,.001)&&a.push(js(i,n,`exterior-wall-junction`,e.id))}let s=Object.values(e).filter(n=>(n.type===`door`||n.type===`window`)&&Ga(n.id,e).levelId===t);for(let e of s){let t=e.wallId??e.parentId;if(!i.sourceWallIds.includes(t))continue;let o=r.find(e=>e.id===t),s=Number(e.width),c=Array.isArray(e.position)?Number(e.position[0]):NaN;if(!o||!Number.isFinite(s)||s<=0||!Number.isFinite(c)){n.push({severity:`error`,code:`invalid_opening_span_for_dimension`,message:`无效 ${e.type} opening span`,nodeId:e.id,sourcePath:`nodes.${e.id}`});continue}let l=xs([o.end[0]-o.start[0],o.end[1]-o.start[1]]),u=[o.start[0]+l[0]*c,o.start[1]+l[1]*c],d=_s(u,l,-s/2),f=_s(u,l,s/2),h=[vs(gs(d,i.start),i.direction),vs(gs(f,i.start),i.direction)].sort((e,t)=>e-t);if(h[0]<-.001||h[1]>i.lengthMeters+.001||Math.abs(h[1]-h[0]-s)>hs){n.push({severity:`warning`,code:`opening_not_on_exterior_run`,message:`${e.type} opening span 不在外墙 run 有效范围`,nodeId:e.id,sourcePath:`nodes.${e.id}`});continue}let g=e.type;a.push(js(i,Math.max(0,h[0]),`${g}-left`,e.id),js(i,Math.min(i.lengthMeters,h[1]),`${g}-right`,e.id)),g===`door`?p.add(e.id):m.add(e.id)}let c=a.sort((e,t)=>e.scalarOnRun-t.scalarOnRun),l=[];for(let e of c){let t=l[l.length-1];if(t&&Math.abs(e.scalarOnRun-t.scalarOnRun)<=.001){e.sourceNodeId!==t.sourceNodeId&&n.push({severity:`info`,code:`duplicate_dimension_witness`,message:`尺寸基准点按 ${us}m 容差去重`,sourcePath:e.sourcePath});continue}l.push(e)}if(l.length>2){for(let e=0;e<l.length-1;e+=1){let t=l[e],r=l[e+1];if(r.scalarOnRun-t.scalarOnRun<=.001){n.push({severity:`error`,code:`invalid_dimension_segment`,message:`零长度外围尺寸段：${i.id}`,sourcePath:`derived.exterior-dimensions`});continue}f.push(Ms(i,t,r,`inner-chain`,e+1))}let e=f.filter(e=>e.runId===i.id&&e.dimensionLayer===`inner-chain`).reduce((e,t)=>e+t.valueMeters,0);Math.abs(e-i.lengthMeters)>hs&&(g+=1,n.push({severity:`error`,code:`dimension_chain_sum_mismatch`,message:`${i.id} 分段和 ${e}m 不等于总长 ${i.lengthMeters}m`,sourcePath:`derived.exterior-dimensions`}))}f.push(Ms(i,l[0],l[l.length-1],`overall`,1))}let _=new Set([...p,...m]);h=Object.values(e).filter(n=>(n.type===`door`||n.type===`window`)&&Ga(n.id,e).levelId===t&&!_.has(n.id)).length;let v=0;for(let e of new Set(f.filter(e=>e.dimensionLayer===`inner-chain`).map(e=>e.chainId))){let t=f.filter(t=>t.chainId===e).filter(e=>e.valueMeters<=Math.max(.24,e.displayMillimeters.length*.105)+.16).map(e=>({item:e,start:e.sourceEnd.scalarOnRun+.14,end:e.sourceEnd.scalarOnRun+.14+Math.max(.24,e.displayMillimeters.length*.105)})).sort((e,t)=>e.start-t.start);for(let e=1;e<t.length;e+=1)t[e].start<t[e-1].end-.001&&(v+=1,n.push({severity:`warning`,code:`dimension_text_collision_unresolved`,message:`短尺寸外置文字仍有碰撞风险：${t[e].item.id}`,sourcePath:`derived.exterior-dimensions`}))}return{levelId:t,rings:s,runs:c,dimensions:f,diagnostics:n,summary:{exteriorComponentCount:o.length,exteriorRingCount:s.length,interiorRingCount:l,exteriorRunCount:c.length,innerChainCount:new Set(f.filter(e=>e.dimensionLayer===`inner-chain`).map(e=>e.chainId)).size,innerSegmentCount:f.filter(e=>e.dimensionLayer===`inner-chain`).length,overallDimensionCount:f.filter(e=>e.dimensionLayer===`overall`).length,exteriorDoorCount:p.size,exteriorWindowCount:m.size,excludedInteriorOpeningCount:h,curvedExteriorRunCount:u,unresolvedRunCount:d,chainSumMismatchCount:g,dimensionTextUnresolvedCollisionCount:v}}}function js(e,t,n,r){return{id:`${e.id}-${n}-${r}-${t.toFixed(6)}`,point:_s(e.start,e.direction,t),scalarOnRun:t,sourceNodeId:r,sourceKind:n,sourcePath:r===e.id?`derived.exterior-run`:`nodes.${r}`}}function Ms(e,t,n,r,i){let a=Math.abs(n.scalarOnRun-t.scalarOnRun);return{id:`${e.id}-${r}-${i}`,chainId:`${e.id}-${r}`,levelId:e.levelId,componentId:e.componentId,runId:e.id,dimensionLayer:r,start:t.point,end:n.point,valueMeters:a,displayMillimeters:Os(a),direction:e.direction,outwardNormal:e.outwardNormal,sourceStart:t,sourceEnd:n,sourceWallIds:e.sourceWallIds,sourceOpeningIds:Ss([t,n].filter(e=>e.sourceKind.startsWith(`door`)||e.sourceKind.startsWith(`window`)).map(e=>e.sourceNodeId)),sourcePaths:Ss([t.sourcePath,n.sourcePath]),method:`projected-world-distance`,unionAlgorithm:`polygon-clipping.union`}}var Ns=e=>Math.abs(e[0])>=1-ms?`horizontal`:Math.abs(e[1])>=1-ms?`vertical`:`diagonal`,Ps=e=>({minX:Math.min(...e.points.map(e=>e[0])),maxX:Math.max(...e.points.map(e=>e[0])),minY:Math.min(...e.points.map(e=>e[1])),maxY:Math.max(...e.points.map(e=>e[1]))}),Fs=(e,t)=>{let n=Ps(t);return Ns(e.direction)===`horizontal`?Math.abs(e.start[1]-(e.outwardNormal[1]<0?n.minY:n.maxY))<=us:Ns(e.direction)===`vertical`&&Math.abs(e.start[0]-(e.outwardNormal[0]<0?n.minX:n.maxX))<=us};function Is(e,t,n){let r=Ps(t),i=n===`top`||n===`bottom`,a=n===`top`?[r.minX,r.minY]:n===`right`?[r.maxX,r.minY]:n===`bottom`?[r.maxX,r.maxY]:[r.minX,r.maxY],o=n===`top`?[r.maxX,r.minY]:n===`right`?[r.maxX,r.maxY]:n===`bottom`?[r.minX,r.maxY]:[r.minX,r.minY],s=xs(gs(o,a)),c=n===`top`?[0,-1]:n===`right`?[1,0]:n===`bottom`?[0,1]:[-1,0],l=i?r.maxX-r.minX:r.maxY-r.minY,u=`${t.componentId}-frame-${n}`,d={id:`${u}-start`,point:a,scalarOnRun:0,sourceNodeId:t.ringId,sourceKind:`exterior-run-start`,sourcePath:`derived.exterior-ring.bounds`},f={id:`${u}-end`,point:o,scalarOnRun:l,sourceNodeId:t.ringId,sourceKind:`exterior-run-end`,sourcePath:`derived.exterior-ring.bounds`};return{id:`${u}-overall`,chainId:`${u}-overall`,levelId:e.levelId,componentId:t.componentId,runId:u,dimensionLayer:`overall`,start:a,end:o,valueMeters:l,displayMillimeters:Os(l),direction:s,outwardNormal:c,sourceStart:d,sourceEnd:f,sourceWallIds:t.sourceWallIds,sourceOpeningIds:[],sourcePaths:[`derived.exterior-ring.bounds`],method:`projected-world-distance`,unionAlgorithm:`polygon-clipping.union`}}function Ls(e){let t=e.dimensions.filter(t=>{if(t.dimensionLayer===`inner-chain`||Ns(t.direction)===`diagonal`)return!0;let n=e.runs.find(e=>e.id===t.runId),r=e.rings.find(e=>e.componentId===t.componentId);return!n||!r||!Fs(n,r)});for(let n of e.rings){let r=e.runs.filter(e=>e.componentId===n.componentId),i=new Set;for(let e of r)Fs(e,n)&&(Ns(e.direction)===`horizontal`&&i.add(e.outwardNormal[1]<0?`top`:`bottom`),Ns(e.direction)===`vertical`&&i.add(e.outwardNormal[0]<0?`left`:`right`));for(let r of i)t.push(Is(e,n,r))}return t}function Rs(e,t){let n=e.rings.find(e=>e.componentId===t.componentId),r=e.runs.find(e=>e.id===t.runId);if(!n||!r||!Fs(r,n)||t.dimensionLayer!==`inner-chain`||Ns(t.direction)===`diagonal`)return{edgeStart:t.start,edgeEnd:t.end,faceStart:t.start,faceEnd:t.end};let i=Ps(n);if(Ns(t.direction)===`horizontal`){let e=t.outwardNormal[1]<0?i.minY:i.maxY;return{edgeStart:t.start,edgeEnd:t.end,faceStart:[t.start[0],e],faceEnd:[t.end[0],e]}}let a=t.outwardNormal[0]<0?i.minX:i.maxX;return{edgeStart:t.start,edgeEnd:t.end,faceStart:[a,t.start[1]],faceEnd:[a,t.end[1]]}}function zs(e){return Ls(e).flatMap(t=>{let n=Rs(e,t),r=t.dimensionLayer===`inner-chain`?ds:fs,i=_s(n.faceStart,t.outwardNormal,r),a=_s(n.faceEnd,t.outwardNormal,r),o=Math.max(.25,t.displayMillimeters.length*.055);return[n.edgeStart,n.edgeEnd,_s(i,t.outwardNormal,ps),_s(a,t.outwardNormal,ps),_s(i,t.direction,-o),_s(a,t.direction,o)].map(e=>({x:e[0],z:e[1]}))})}var Bs=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1]),Vs=e=>{let t=Math.hypot(e[0],e[1]);return t>1e-12?[e[0]/t,e[1]/t]:[1,0]},Hs=(e,t,n)=>e.map((r,i)=>({start:r,end:e[(i+1)%e.length],sourceNodeId:t,sourceType:n})),Us=(e,t)=>{let n=Ja(e),r=Za(e.id,t);if(!n||r.status!==`ok`)return[];let i=$a(r);return[[-n.width/2,-n.depth/2],[n.width/2,-n.depth/2],[n.width/2,n.depth/2],[-n.width/2,n.depth/2]].map(([e,t])=>[i.a*e+i.c*t+i.e,i.b*e+i.d*t+i.f])};function Ws(e,t){let n=Object.values(e).filter(n=>Ga(n.id,e).levelId===t),r=[],i=Oo(n.filter(e=>e.type===`wall`));for(let e of i)e.validation.valid&&e.footprint.length>=3&&r.push(...Hs(e.footprint.map(e=>[e.x,e.y]),e.wallId,`wall`));for(let t of n){if(t.type===`item`){let n=Us(t,e);n.length===4&&r.push(...Hs(n,t.id,`furniture`))}if(t.type===`shelf`&&Po(t)){let n=Lo(t,e).map(e=>[e.x,e.z]);n.length===4&&r.push(...Hs(n,t.id,`shelf`))}}return r}var Gs=(e,t)=>{let n=t.end[0]-t.start[0],r=t.end[1]-t.start[1],i=n*n+r*r;if(i<=1e-18)return t.start;let a=Math.max(0,Math.min(1,((e[0]-t.start[0])*n+(e[1]-t.start[1])*r)/i));return[t.start[0]+n*a,t.start[1]+r*a]},Ks=(e,t)=>e===`wall`?t?`wall-corner`:`wall-edge`:e===`shelf`?t?`shelf-corner`:`shelf-edge`:t?`furniture-corner`:`furniture-edge`;function qs(e,t,n){let r=null;for(let i of t)for(let t of[i.start,i.end]){let a=Bs(e,t);a<=n&&(!r||a<r.distanceMeters)&&(r={point:t,kind:Ks(i.sourceType,!0),sourceNodeId:i.sourceNodeId,distanceMeters:a})}if(r)return r;let i=null;for(let r of t){let t=Gs(e,r),a=Bs(e,t);a<=n&&(!i||a<i.distanceMeters)&&(i={point:t,kind:Ks(r.sourceType,!1),sourceNodeId:r.sourceNodeId,distanceMeters:a})}return i??{point:e,kind:`free`,distanceMeters:0}}var Js=(e,t)=>t?Js(t,e%t):e;function Ys(e,t){if(t===`millimeters`)return String(Math.round(e*1e3));let n=e<0?`−`:``,r=Math.round(Math.abs(e)*39.37007874015748*16),i=Math.floor(r/192),a=r%192,o=Math.floor(a/16),s=a%16;if(!s)return`${n}${i}'-${o}\"`;let c=Js(s,16);return`${n}${i}'-${o} ${s/c}/${16/c}\"`}function Xs(e,t){return t===`millimeters`?`${e.toFixed(2)} m²`:`${(e*10.76391041671).toFixed(2)} ft²`}function Zs(e,t,n){let r=t,i=[];n===`horizontal`&&(r=[t[0],e[1]],Bs(t,r)>1e-9&&(i=[{start:t,end:r}])),n===`vertical`&&(r=[e[0],t[1]],Bs(t,r)>1e-9&&(i=[{start:t,end:r}]));let a=[r[0]-e[0],r[1]-e[1]],o=Math.hypot(a[0],a[1]),s=Vs(a),c=[-s[1],s[0]],l=[(e[0]+r[0])/2,(e[1]+r[1])/2];return{measurementStart:e,measurementEnd:r,extensionLines:i,valueMeters:o,direction:s,normal:c,labelPoint:l}}function Qs(e,t,n){return!n||!e||!t?`aligned`:Math.abs(t[0]-e[0])>=Math.abs(t[1]-e[1])?`horizontal`:`vertical`}var $s=new Map,ec=new Map,tc=new Set,nc=(e,t=16)=>`${e}|alpha:${t}`,rc=()=>tc.forEach(e=>e());function ic(e){return tc.add(e),()=>{tc.delete(e)}}function ac(e,t=16){return $s.get(nc(e,t))??null}function oc(e,t,n,r=16){if(!Number.isInteger(t)||!Number.isInteger(n)||t<=0||n<=0||e.length<t*n*4)return null;let i=t,a=n,o=-1,s=-1;for(let c=0;c<n;c+=1)for(let n=0;n<t;n+=1)e[(c*t+n)*4+3]>=r&&(i=Math.min(i,n),a=Math.min(a,c),o=Math.max(o,n),s=Math.max(s,c));return o<i||s<a?null:{x:i,y:a,width:o-i+1,height:s-a+1}}function sc(e,t,n){if(![e.width,e.height,t,n].every(e=>Number.isFinite(e)&&e>0))return null;let r=t/e.width,i=n/e.height,a=e.width/e.height,o=t/n;return{drawWidth:t,drawHeight:n,offsetX:0,offsetY:0,scaleX:r,scaleY:i,uniformScaleApplied:Math.abs(r-i)<=1e-12,contentAspectRatio:a,physicalAspectRatio:o,aspectDifferencePercent:Math.abs(a-o)/o*100}}var cc=(e,t,n=0,r=0)=>({imageUrl:e,naturalWidth:n,naturalHeight:r,alphaThreshold:16,cropX:0,cropY:0,cropWidth:n,cropHeight:r,isFallback:!0,fallbackReason:t}),lc=e=>new Promise((t,n)=>{if(typeof Image>`u`||typeof document>`u`){n(Error(`canvas-unavailable`));return}let r=new Image;r.crossOrigin=`anonymous`,r.onload=()=>{let e=document.createElement(`canvas`);e.width=r.naturalWidth,e.height=r.naturalHeight;let i=e.getContext(`2d`,{willReadFrequently:!0});if(!i){n(Error(`canvas-unavailable`));return}try{i.drawImage(r,0,0),t({naturalWidth:r.naturalWidth,naturalHeight:r.naturalHeight,data:i.getImageData(0,0,r.naturalWidth,r.naturalHeight).data})}catch{let e=Error(`pixel-read-failed`);e.naturalWidth=r.naturalWidth,e.naturalHeight=r.naturalHeight,n(e)}},r.onerror=()=>n(Error(`image-load-failed`)),r.src=e});function uc(e,t=lc){let n=nc(e),r=$s.get(n);if(r)return Promise.resolve(r);let i=ec.get(n);if(i)return i;let a=t(e).then(t=>{if(t.data.length<t.naturalWidth*t.naturalHeight*4)return cc(e,`invalid-pixel-data`,t.naturalWidth,t.naturalHeight);let n=oc(t.data,t.naturalWidth,t.naturalHeight);return n?{imageUrl:e,naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight,alphaThreshold:16,cropX:n.x,cropY:n.y,cropWidth:n.width,cropHeight:n.height,isFallback:!1,fallbackReason:null}:cc(e,`empty-alpha`,t.naturalWidth,t.naturalHeight)}).catch(t=>cc(e,[`image-load-failed`,`canvas-unavailable`,`pixel-read-failed`].includes(t.message)?t.message:`pixel-read-failed`,t.naturalWidth??0,t.naturalHeight??0)).then(e=>($s.set(n,e),ec.delete(n),rc(),e));return ec.set(n,a),a}function dc(e){let t=[];for(let n of Object.values(e)){if(n.type!==`item`||!n.asset?.floorPlanUrl)continue;let e=ac(n.asset.floorPlanUrl);if(!e)continue;e.isFallback&&t.push({severity:`warning`,code:e.fallbackReason===`empty-alpha`?`floorplan_image_empty_alpha`:`floorplan_image_crop_unavailable`,message:e.fallbackReason===`empty-alpha`?`floorPlan 图片没有达到 alpha 阈值的有效像素，已回退整图显示`:`floorPlan 图片无法读取像素，已回退整图显示：${e.fallbackReason}`,nodeId:n.id,sourcePath:`nodes.${n.id}.asset.floorPlanUrl`});let r=Ja(n),i=r&&!e.isFallback&&e.cropWidth>0&&e.cropHeight>0?sc({x:e.cropX,y:e.cropY,width:e.cropWidth,height:e.cropHeight},r.width,r.depth):null;i&&i.aspectDifferencePercent>.05*100&&t.push({severity:`warning`,code:`floorplan_image_aspect_mismatch`,message:`裁切内容与物理占地框宽高比差异 ${i.aspectDifferencePercent.toFixed(2)}%，已使用 X/Y 独立缩放实现四边贴合`,nodeId:n.id,sourcePath:`nodes.${n.id}.asset.floorPlanUrl`})}return t}var fc=`pascalorg/editor`,pc=`22c9472066398dae668b45e65c4785a56b3d0fb8`,mc=`site.building.elevator.level.column.wall.fence.cabinet.cabinet-module.item.zone.slab.ceiling.roof.roof-segment.shelf.stair.stair-segment.scan.guide.spawn.window.door.box-vent.ridge-vent.turbine-vent.cupola.eyebrow-vent.gutter.chimney.solar-panel.skylight.dormer.downspout.duct-segment.duct-fitting.duct-terminal.hvac-equipment.lineset.liquid-line.pipe-segment.pipe-fitting.pipe-trap`.split(`.`),hc=new Set([`site`,`building`,`level`,`stair-segment`,`scan`,`guide`,`downspout`]),gc=new Set([`fence`,`cabinet`,`cabinet-module`,`slab`,`shelf`,`duct-segment`,`duct-fitting`,`duct-terminal`,`hvac-equipment`,`lineset`,`liquid-line`,`pipe-segment`,`pipe-fitting`,`pipe-trap`]),_c={site:[`container`],building:[`container`],elevator:[`standalone`,`source-dependent`],level:[`container`],column:[`standalone`],wall:[`standalone`],fence:[`standalone`],cabinet:[`standalone`],"cabinet-module":[`hosted`],item:[`standalone`,`hosted`],zone:[`standalone`],slab:[`standalone`],ceiling:[`view-specific`],roof:[`standalone`],"roof-segment":[`hosted`,`source-dependent`],shelf:[`standalone`],stair:[`standalone`,`source-dependent`],"stair-segment":[`parent-emitted`],scan:[`helper-view-specific`],guide:[`helper-view-specific`],spawn:[`helper-view-specific`,`symbol-only`],window:[`hosted`],door:[`hosted`],"box-vent":[`hosted`],"ridge-vent":[`hosted`],"turbine-vent":[`hosted`],cupola:[`hosted`],"eyebrow-vent":[`hosted`],gutter:[`hosted`],chimney:[`hosted`],"solar-panel":[`hosted`],skylight:[`hosted`],dormer:[`hosted`],downspout:[`hosted`,`source-dependent`],"duct-segment":[`standalone`],"duct-fitting":[`standalone`],"duct-terminal":[`standalone`],"hvac-equipment":[`standalone`],lineset:[`standalone`],"liquid-line":[`standalone`],"pipe-segment":[`standalone`],"pipe-fitting":[`standalone`],"pipe-trap":[`standalone`]},vc={stair:{stairType:[`straight`,`curved`,`spiral`],railingMode:[`none`,`left`,`right`,`both`],topLandingMode:[`none`,`integrated`],slabOpeningMode:[`none`,`destination`]},"stair-segment":{segmentType:[`stair`,`landing`],attachmentSide:[`front`,`left`,`right`]},door:{doorType:[`hinged`,`double`,`french`,`folding`,`pocket`,`barn`,`sliding`,`garage-sectional`,`garage-rollup`,`garage-tiltup`],doorCategory:[`interior`,`garage`],trackStyle:[`none`,`visible`,`pocket`,`overhead`]},window:{windowType:[`fixed`,`sliding`,`casement`,`awning`,`hopper`,`single-hung`,`double-hung`,`bay`,`bow`,`louvered`]},shelf:{style:[`wall-shelf`,`bookshelf`,`open-rack`,`cubby`],bracketStyle:[`minimal`,`industrial`,`hidden`]},cabinet:{runTier:[`base`,`wall`,`tall`],frontStyle:[`slab`,`shaker`,`raised-arch`],compartmentType:[`shelf`,`drawer`,`door`,`sink`,`oven`,`microwave`,`dishwasher`,`cooktop-gas`,`cooktop-induction`,`pull-out-pantry`,`fridge-single`,`fridge-double`,`fridge-top-freezer`,`fridge-bottom-freezer`,`hood-pyramid`,`hood-curved-glass`]},"cabinet-module":{frontStyle:[`slab`,`shaker`,`raised-arch`]},column:{style:[`plain`,`faceted`,`fluted`,`lathe-turned`,`dravidian-carved`,`cluster`],crossSection:[`round`,`square`,`rectangular`,`octagonal`,`sixteen-sided`],shaftProfile:[`straight`,`tapered`,`bulged`,`baluster`,`hourglass`],shaftDetail:[`none`,`fluted`,`spiral`,`panelled`,`lathe-turned`]},fence:{style:[`slat`,`rail`,`privacy`,`horizontal`],baseStyle:[`floating`,`grounded`],postCap:[`none`,`flat`,`pyramid`]},"roof-segment":{roofType:[`hip`,`gable`,`shed`,`gambrel`,`dutch`,`mansard`,`flat`]},skylight:{skylightType:[`flat`,`walk-on`,`lantern`,`opening`,`sliding`],openingSide:[`top`,`bottom`,`left`,`right`],slideDirection:[`x`,`z`]},elevator:{doorStyle:[`center-opening`,`single-left`,`single-right`],doorPanelStyle:[`glass-frame`,`solid-panel`,`segmented-panel`],shaftStyle:[`solid`,`glass`]},"box-vent":{style:[`box`,`cap`,`dome`]},"ridge-vent":{style:[`standard`,`shingled`,`metal`]},"turbine-vent":{style:[`globe`,`cylinder`]},cupola:{roofStyle:[`dome`,`pyramid`]},"eyebrow-vent":{style:[`scoop`,`half-round`,`slant-box`]},gutter:{profile:[`k-style`,`half-round`,`box`],hangerStyle:[`strap`,`none`]},chimney:{bodyShape:[`square`,`round`],capStyle:[`none`,`sloped`,`flat`,`stepped`]},"solar-panel":{mountType:[`flush`,`tilted`]},"duct-segment":{shape:[`round`,`rect`,`oval`],material:[`sheet-metal`,`spiral`,`flex`,`duct-board`],system:[`supply`,`return`]},"duct-fitting":{fittingType:[`elbow`,`tee`,`cross`,`reducer`,`transition`],shape:[`round`,`rect`,`oval`]},"duct-terminal":{terminalType:[`supply-register`,`diffuser`,`return-grille`],mountType:[`floor`,`ceiling`,`wall`]},"hvac-equipment":{equipmentType:[`furnace`,`air-handler`,`condenser`]},"pipe-fitting":{fittingType:[`elbow`,`wye`,`sanitary-tee`,`cross`],material:[`pvc`,`abs`,`cast-iron`],system:[`waste`,`vent`]},"pipe-segment":{material:[`pvc`,`abs`,`cast-iron`],system:[`waste`,`vent`]},"pipe-trap":{material:[`pvc`,`abs`,`cast-iron`]}},yc={site:{surfaceType:[`polygon`,`terrain`]},item:{attachTo:[`wall`,`wall-side`,`ceiling`],assetSource:[`library`,`community`,`mine`],side:[`front`,`back`]},wall:{treatmentSide:[`interior`,`exterior`,`both`],faceSide:[`interior`,`exterior`,`unknown`]},"cabinet-module":{cabinetType:[`base`,`tall`],moduleKind:[`standard`,`corner-filler`],openSide:[`left`,`right`]},dormer:{roofType:[`hip`,`gable`,`shed`,`gambrel`,`dutch`,`mansard`,`flat`],windowShape:[`rectangle`,`rounded`,`arch`]},downspout:{shape:[`auto`,`round`,`rect`],strapStyle:[`band`,`none`],terminal:[`splash`,`kickout`,`straight`]},"duct-terminal":{collarShape:[`round`,`rect`,`oval`]},"hvac-equipment":{supplyShape:[`round`,`rect`,`oval`],returnShape:[`round`,`rect`,`oval`]}},bc={item:{controlKind:[`toggle`,`slider`,`temperature`],effectKind:[`animation`,`light`],roofFace:[`front`,`back`,`right`,`left`]},cabinet:{handleStyle:[`none`,`bar`,`cutout`,`hole`,`knob`],handlePosition:[`auto`,`top`,`center`],frontOverlay:[`full`,`inset`],barLedgeEdge:[`back`,`left`,`right`]},column:{panelShape:[`rectangle`,`arched`,`diamond`],baseStyle:[`none`,`simple-square`,`round-rings`,`square-plinth`,`stepped-square`,`lotus`,`ribbed-lotus`,`panelled-pedestal`],capitalStyle:[`none`,`simple`,`simple-slab`,`rounded`,`stepped`,`doric`,`volute`,`ionic-volute`,`leaf-carved`,`corinthian-leaf`,`south-indian-bracket`,`wood-bracket`],ringPlacement:[`ends`,`even`,`top`,`bottom`],carvingPlacement:[`shaft`,`base`,`capital`,`all`],supportStyle:[`vertical`,`a-frame`,`y-frame`,`v-frame`,`x-brace`,`k-brace`,`single-strut`,`tripod`,`trestle`,`portal-frame`,`box-frame`]},door:{segmentType:[`panel`,`glass`,`empty`],roofFace:[`front`,`back`,`right`,`left`],swingSide:[`left`,`right`],swingDirection:[`inward`,`outward`],openingShape:[`rectangle`,`rounded`,`arch`]},window:{roofFace:[`front`,`back`,`right`,`left`],openingShape:[`rectangle`,`rounded`,`arch`],hungDirection:[`up`,`down`],casementStyle:[`single`,`french`]},wall:{trimProfile:[`flat`,`bevel`,`round`,`cove`,`ogee`,`stepped`]},chimney:{flueShape:[`round`,`square`],shoulderStyle:[`none`,`tapered`,`corbeled`],bandStyle:[`none`,`single`,`double`],cricketStyle:[`none`,`simple`],cricketSide:[`front`,`back`],panelStyle:[`none`,`rectangular`]},gutter:{hangerStyle:[`strap`,`none`]},downspout:{shape:[`auto`,`round`,`rect`],strapStyle:[`band`,`none`],terminal:[`splash`,`kickout`,`straight`]}},xc={wall:{thickness:.1},item:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},shelf:{position:[0,0,0],rotation:[0,0,0],width:1.2,depth:.3,thickness:.04,height:.9,style:`wall-shelf`,rows:1,columns:1},stair:{position:[0,0,0],rotation:0,stairType:`straight`,width:1,totalRise:2.5,stepCount:10,innerRadius:.9,sweepAngle:`Math.PI / 2`},"stair-segment":{position:[0,0,0],rotation:0,segmentType:`stair`,width:1,length:3,height:2.5,stepCount:10},door:{position:[0,0,0],rotation:[0,0,0],width:.9,height:2.1,doorType:`hinged`},window:{position:[0,0,0],rotation:[0,0,0],width:1.5,height:1.5,windowType:`fixed`},column:{position:[0,0,0],rotation:0,style:`plain`,crossSection:`round`,height:2.5},fence:{height:1.8,thickness:.08,style:`slat`},elevator:{position:[0,0,0],rotation:0,width:1.84,depth:1.84},"roof-segment":{position:[0,0,0],rotation:0,roofType:`gable`,width:8,depth:6,pitch:40},slab:{elevation:.05,autoFromWalls:!1},ceiling:{height:2.5,autoFromWalls:!1},zone:{color:`#3b82f6`}},Sc={site:{children:[]},building:{},level:{level:0},roof:{position:[0,0,0],rotation:0,children:[]},"cabinet-module":{position:[0,0,0],rotation:0,width:.6,depth:.58,cabinetType:`base`,moduleKind:`standard`},cabinet:{position:[0,0,0],rotation:0,width:.6,depth:.58,runTier:`base`,children:[]},scan:{position:[0,0,0],scale:1,opacity:100},guide:{position:[0,0,0],scale:1,opacity:50},spawn:{position:[0,0,0],rotation:0},"box-vent":{position:[0,0,0],rotation:0,width:.4,depth:.4,height:.15},"ridge-vent":{position:[0,0,0],rotation:0,length:2,width:.3,height:.1},"turbine-vent":{position:[0,0,0],rotation:0,diameter:.32,height:.42,vaneCount:20},cupola:{position:[0,0,0],rotation:0,width:.8,depth:.8,height:1},"eyebrow-vent":{position:[0,0,0],rotation:0,width:.5,depth:.6,height:.3},gutter:{position:[0,0,0],rotation:0,length:2,size:.13,thickness:.006},chimney:{position:[0,0,0],rotation:0,width:.6,depth:.6,heightAboveRidge:1},"solar-panel":{position:[0,0,0],rotation:0,rows:2,columns:3,panelWidth:1,panelHeight:1.65},skylight:{position:[0,0,0],rotation:0,skylightType:`flat`},dormer:{position:[0,0,0],rotation:0},downspout:{position:[0,0,0],length:2.5,diameter:.07,shape:`auto`},"duct-segment":{diameter:6,width:14,height:8,shape:`round`},"duct-fitting":{fittingType:`elbow`,shape:`round`,width:14,height:8,angle:90},"duct-terminal":{position:[0,0,0],rotation:0,terminalType:`supply-register`,mountType:`floor`,width:.3,depth:.15},"hvac-equipment":{position:[0,0,0],rotation:0,equipmentType:`furnace`,width:.56,depth:.71,height:1.1},lineset:{suctionDiameter:.875,liquidDiameter:.375,insulated:!0},"liquid-line":{diameter:.375},"pipe-segment":{diameter:2,material:`pvc`,system:`waste`},"pipe-fitting":{fittingType:`elbow`,angle:90,diameter:2,material:`pvc`,system:`waste`},"pipe-trap":{position:[0,0,0],rotation:0,diameter:2,material:`pvc`}},Cc={building:[`site`],level:[`building`],elevator:[`building`],wall:[`level`],fence:[`level`],column:[`level`],cabinet:[`level`,`cabinet`,`cabinet-module`],"cabinet-module":[`cabinet`,`cabinet-module`],item:[`level`,`slab`,`ceiling`,`item`,`shelf`,`wall`,`roof-segment`],zone:[`level`],slab:[`level`],ceiling:[`level`],roof:[`level`],"roof-segment":[`roof`],shelf:[`level`,`item`,`shelf`],stair:[`level`],"stair-segment":[`stair`],window:[`wall`,`roof-segment`],door:[`wall`,`roof-segment`],"box-vent":[`roof-segment`],"ridge-vent":[`roof-segment`],"turbine-vent":[`roof-segment`],cupola:[`roof-segment`],"eyebrow-vent":[`roof-segment`],gutter:[`roof-segment`],chimney:[`roof-segment`],"solar-panel":[`roof-segment`],skylight:[`roof-segment`],dormer:[`roof-segment`],downspout:[`roof-segment`],"duct-segment":[`level`],"duct-fitting":[`level`],"duct-terminal":[`level`],"hvac-equipment":[`level`],lineset:[`level`],"liquid-line":[`level`],"pipe-segment":[`level`],"pipe-fitting":[`level`],"pipe-trap":[`level`]},wc={wall:{space:`ancestor Level XZ`,positionFields:[`start`,`end`,`curveOffset`],rotationFields:[],hosted:`not-applicable`},fence:{space:`ancestor Level XZ`,positionFields:[`start`,`end`],rotationFields:[],hosted:`not-applicable`},zone:{space:`ancestor Level polygon XZ`,positionFields:[`polygon`],rotationFields:[],hosted:`not-applicable`},slab:{space:`ancestor Level polygon XZ`,positionFields:[`polygon`,`holes`],rotationFields:[],hosted:`hosts item children`},ceiling:{space:`ancestor Level polygon XZ`,positionFields:[`polygon`,`holes`],rotationFields:[],hosted:`hosts ceiling items`},item:{space:`parent-local; resolved through item/shelf/wall/level hosts`,positionFields:[`position`],rotationFields:[`rotation[1]`],hosted:`wall-side uses wall tangent/normal; shelf/item compose parent transform`},shelf:{space:`parent-local XZ`,positionFields:[`position[0]`,`position[2]`],rotationFields:[`rotation[1]`],hosted:`children are shelf-local items`},stair:{space:`ancestor Level XZ`,positionFields:[`position[0]`,`position[2]`],rotationFields:[`rotation`],hosted:`stair-segment children are parent-emitted`},"stair-segment":{space:`stair-local cumulative chain`,positionFields:[`position`],rotationFields:[`rotation`,`attachmentSide`],hosted:`parent stair walks segment siblings cumulatively`},door:{space:`wall-distance or roof-face-local`,positionFields:[`position`,`wallId`,`roofSegmentId`,`roofFace`],rotationFields:[`rotation`],hosted:`wall/roof face defines world frame`},window:{space:`wall-distance or roof-face-local`,positionFields:[`position`,`wallId`,`roofSegmentId`,`roofFace`],rotationFields:[`rotation`],hosted:`wall/roof face defines world frame`},"roof-segment":{space:`roof-local`,positionFields:[`position`,`width`,`depth`],rotationFields:[`rotation`],hosted:`parent roof supplies frame`},"box-vent":{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host frame`},"ridge-vent":{space:`roof-segment-local ridge line`,positionFields:[`position`,`length`],rotationFields:[`rotation`],hosted:`roof ridge host frame`},"turbine-vent":{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host frame`},cupola:{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host frame`},"eyebrow-vent":{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host frame`},gutter:{space:`roof-segment edge-local`,positionFields:[`position`,`length`,`offset`],rotationFields:[`rotation`],hosted:`roof edge host`},chimney:{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host and cutout`},"solar-panel":{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host frame`},skylight:{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment opening frame`},dormer:{space:`roof-segment-local`,positionFields:[`position`],rotationFields:[`rotation`],hosted:`roof-segment host/cutout`},downspout:{space:`roof-segment/gutter outlet-derived`,positionFields:[`position`,`outlet`],rotationFields:[],hosted:`host gutter/roof segment determines placement`},"duct-segment":{space:`Level route points`,positionFields:[`points`],rotationFields:[`roll`],hosted:`not-applicable`},"pipe-segment":{space:`Level route points`,positionFields:[`points`],rotationFields:[],hosted:`not-applicable`},lineset:{space:`Level route points`,positionFields:[`points`],rotationFields:[],hosted:`not-applicable`},"liquid-line":{space:`Level route points`,positionFields:[`points`],rotationFields:[],hosted:`not-applicable`}},Tc={wall:[`door`,`window`,`item`],ceiling:[`item`],cabinet:[`cabinet-module`],roof:[`roof-segment`],stair:[`stair-segment`],shelf:[`item`]},Ec=e=>{let t={schemaRecognition:`partial`,rawDataPreservation:`complete`,levelResolution:`partial`,transformResolution:`none`,floorplanRendering:`none`,inspectorSupport:`partial`,diagnosticSupport:`partial`,testCoverage:`none`,overallStatus:`parsed-not-rendered`,evidence:{files:[`src/parser/parse.ts`,`src/main.tsx`],functions:[`parseProject`,`objectsOnLevel`],tests:[]}};return[`site`,`building`,`level`].includes(e)?{...t,levelResolution:`not-applicable`,transformResolution:`not-applicable`,floorplanRendering:`intentionally-hidden`,overallStatus:`parsed-container`}:[`scan`,`guide`,`spawn`].includes(e)?{...t,floorplanRendering:`intentionally-hidden`,overallStatus:`parsed-intentionally-hidden`}:e===`item`?{...t,levelResolution:`complete`,transformResolution:`complete`,floorplanRendering:`exact`,diagnosticSupport:`complete`,testCoverage:`complete`,overallStatus:`supported-exact`,evidence:{files:[`src/geometry/transform.ts`,`src/main.tsx`],functions:[`resolveItemPlanTransform`,`Furniture`],tests:[`src/geometry/geometry.test.ts`]}}:e===`wall`?{...t,levelResolution:`complete`,transformResolution:`not-applicable`,floorplanRendering:`pascal-equivalent`,testCoverage:`complete`,overallStatus:`supported-pascal-equivalent`,evidence:{files:[`src/geometry/walls`,`src/main.tsx`],functions:[`buildExperimentalWalls`,`Wall`],tests:[`src/geometry/walls/walls.test.ts`]}}:e===`shelf`?{...t,levelResolution:`complete`,transformResolution:`complete`,floorplanRendering:`pascal-equivalent`,testCoverage:`complete`,overallStatus:`supported-pascal-equivalent`,evidence:{files:[`src/geometry/shelf.ts`,`src/main.tsx`],functions:[`resolveShelfPlanTransform`,`Shelf`],tests:[`src/geometry/shelf.test.ts`]}}:e===`stair`?{...t,levelResolution:`complete`,transformResolution:`complete`,floorplanRendering:`pascal-equivalent`,testCoverage:`complete`,overallStatus:`partially-supported`,evidence:{files:[`src/geometry/spiral-stair.ts`,`src/geometry/stairs.ts`,`src/main.tsx`],functions:[`buildSpiralStairPlanGeometry`,`buildStraightStairPlanGeometry`,`buildCurvedStairPlanGeometry`,`Stair`],tests:[`src/geometry/spiral-stair.test.ts`,`src/geometry/stairs.test.ts`]}}:e===`stair-segment`?{...t,floorplanRendering:`parent-emitted`,overallStatus:`parsed-parent-emitted`,evidence:{files:[`src/geometry/stairs.ts`,`src/main.tsx`,`src/coverage/renderedNodeRegistry.ts`],functions:[`buildStraightStairPlanGeometry`,`Stair`,`collectCurrentRenderRegistry`],tests:[`src/geometry/stairs.test.ts`,`src/coverage/coverage.test.ts`]}}:e===`slab`?{...t,levelResolution:`complete`,transformResolution:`not-applicable`,floorplanRendering:`pascal-equivalent`,testCoverage:`complete`,overallStatus:`supported-pascal-equivalent`,evidence:{files:[`src/geometry/slab.ts`,`src/main.tsx`],functions:[`buildSlabPlanGeometry`,`Slab`],tests:[`src/geometry/slab.test.ts`,`src/coverage/coverage.test.ts`]}}:e===`ceiling`?{...t,floorplanRendering:`intentionally-hidden`,overallStatus:`parsed-intentionally-hidden`,evidence:{files:[`src/coverage/auditSceneCoverage.ts`,`src/coverage/renderedNodeRegistry.ts`],functions:[`auditSceneCoverage`,`collectCurrentRenderRegistry`],tests:[`src/coverage/coverage.test.ts`]}}:e===`zone`?{...t,levelResolution:`complete`,transformResolution:`not-applicable`,floorplanRendering:`pascal-equivalent`,overallStatus:`supported-pascal-equivalent`,evidence:{files:[`src/main.tsx`],functions:[`Polygon`],tests:[]}}:e===`door`||e===`window`?{...t,levelResolution:`complete`,transformResolution:`partial`,floorplanRendering:`demo-custom-symbol`,overallStatus:`partially-supported`,evidence:{files:[`src/geometry/transform.ts`,`src/main.tsx`],functions:[`resolveWallOpeningTransform`,`Opening`],tests:[]}}:t},Dc=mc.map(e=>{let t=e===`cabinet-module`?`cabinet`:e,n=`packages/core/src/schema/nodes/${t}.ts`,r=`packages/nodes/src/${t}/definition.ts`,i={...vc[e]??{},...yc[e]??{},...bc[e]??{}},a=wc[e],o={...xc[e]??{},...Sc[e]??{}},s=[...new Set([`parentId`,`children`,...Object.keys(o),...Object.keys(i),...a?.positionFields??[],...a?.rotationFields??[]])];return{kind:e,upstream:{repository:fc,commit:pc,schemaPath:n,definitionPath:r,...!hc.has(e)&&{floorplanPath:`packages/nodes/src/${t}/floorplan.ts`},...!gc.has(e)&&{rendererPath:`packages/nodes/src/${t}/renderer.tsx`}},classification:{category:_c[e][0],expectedVisibilityStrategy:_c[e]},schema:{schemaVersion:`fixed-commit-source`,discriminators:[`type`,...Object.keys(i)],variants:Object.values(i)[0]??[],importantEnums:i,requiredFields:[`id`,`type`],optionalFields:s,defaultedFields:o},hierarchy:{allowedParentKinds:Cc[e]??`unknown-from-reviewed-source`,allowedChildKinds:Tc[e]??[],hosts:Tc[e]??[],...e===`stair-segment`&&{parentEmittedBy:`stair`}},coordinates:{coordinateSpace:a?.space??`unknown-from-reviewed-source`,positionFields:a?.positionFields??[],rotationFields:a?.rotationFields??[],hostedCoordinateMeaning:a?.hosted??`unknown-from-reviewed-source`},pascalCapabilities:{hasPascalFloorplan:!hc.has(e),hasPascal3DRenderer:!gc.has(e),hasGeometryBuilder:`unknown-from-reviewed-source`,hasFloorplanLevelData:![`site`,`building`,`level`].includes(e)&&`unknown-from-reviewed-source`,floorplanDependsOnParent:_c[e].includes(`hosted`)||_c[e].includes(`parent-emitted`),floorplanDependsOnSiblings:e===`stair-segment`||e===`cabinet-module`},currentDemoStatus:Ec(e),reviewEvidence:[n,r,...hc.has(e)?[]:[`packages/nodes/src/${t}/floorplan.ts`]]}});Object.fromEntries(Dc.map(e=>[e.kind,e.currentDemoStatus]));var Oc={stair:{spiral:`supported-demo-symbol`,curved:`supported-pascal-equivalent`,straight:`supported-pascal-equivalent`},shelf:{"wall-shelf":`supported-pascal-equivalent`,bookshelf:`supported-pascal-equivalent`,"open-rack":`supported-pascal-equivalent`,cubby:`supported-pascal-equivalent`},door:{hinged:`partially-supported`,double:`partially-supported`,french:`partially-supported`,folding:`partially-supported`,pocket:`partially-supported`,barn:`partially-supported`,sliding:`partially-supported`,"garage-sectional":`partially-supported`,"garage-rollup":`partially-supported`,"garage-tiltup":`partially-supported`},window:{fixed:`partially-supported`,sliding:`partially-supported`,casement:`partially-supported`,awning:`partially-supported`,hopper:`partially-supported`,"single-hung":`partially-supported`,"double-hung":`partially-supported`,bay:`partially-supported`,bow:`partially-supported`,louvered:`partially-supported`}},kc=class{records=new Map;register(e){this.records.set(e.nodeId,e)}get(e){return this.records.get(e)}all(){return[...this.records.values()]}},Ac=e=>e.type===`stair`?e.stairType:e.type===`door`?e.doorType:e.type===`window`?e.windowType:e.type===`shelf`?e.style:void 0;function jc(e,t={}){let n=new kc;for(let r of Object.values(e)){if([`site`,`building`,`level`,`scan`,`guide`,`spawn`].includes(r.type)){n.register({nodeId:r.id,kind:r.type,variant:Ac(r),renderStrategy:`intentionally-hidden`});continue}if(r.type===`ceiling`){n.register({nodeId:r.id,kind:r.type,renderStrategy:`intentionally-hidden`});continue}if(r.type===`slab`&&Jo(r)){n.register({nodeId:r.id,kind:r.type,renderStrategy:r.visible===!1?`intentionally-hidden`:t.slabs===!1?`hidden-by-layer-toggle`:`self`});continue}if(r.type===`wall`&&Array.isArray(r.start)&&Array.isArray(r.end))n.register({nodeId:r.id,kind:r.type,renderStrategy:`self`});else if(r.type===`zone`&&Array.isArray(r.polygon))n.register({nodeId:r.id,kind:r.type,renderStrategy:`self`});else if(r.type===`item`&&Ja(r)&&Za(r.id,e).status===`ok`)n.register({nodeId:r.id,kind:r.type,renderStrategy:`self`});else if(r.type===`shelf`&&Po(r)&&Fo(r.id,e).status===`ok`)n.register({nodeId:r.id,kind:r.type,variant:Ac(r),renderStrategy:`self`});else if((r.type===`door`||r.type===`window`)&&to(r,e))n.register({nodeId:r.id,kind:r.type,variant:Ac(r),renderStrategy:`self`});else if(r.type===`stair`&&is(r,e))n.register({nodeId:r.id,kind:r.type,variant:r.stairType??`straight`,renderStrategy:t.stairs===!1?`hidden-by-layer-toggle`:`self`});else if(r.type===`stair-segment`){let i=e[r.parentId??``];i?.type===`stair`&&is(i,e)&&n.register({nodeId:r.id,kind:r.type,emittedByNodeId:i.id,renderStrategy:t.stairs===!1?`hidden-by-layer-toggle`:`parent-emitted`})}}return n}var Mc=e=>e.type===`stair`?e.stairType:e.type===`door`?e.doorType??`hinged`:e.type===`window`?e.windowType??`fixed`:e.type===`shelf`?e.style??`wall-shelf`:void 0,Nc=(e,t)=>{if(e.type===`item`&&!Ja(e))return`item dimensions/scale 无效`;if(e.type===`shelf`&&!Po(e))return`shelf dimensions 无效`;if(e.type===`wall`){if(!Array.isArray(e.start)||!Array.isArray(e.end))return`wall endpoints 缺失`;if(Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1])<1e-9)return`wall 长度为零`}if(e.type===`stair`&&!is(e,t))return`stair 关键几何无效`;if((e.type===`door`||e.type===`window`)&&e.width!==void 0&&(!Number.isFinite(e.width)||e.width<=0))return`${e.type} width 无效`};function Pc(e,t=[],n={}){let r=new Set(mc),i=jc(e,n),a=Object.values(e).map(t=>{let n=Dc.find(e=>e.kind===t.type),r=Mc(t),a=Ga(t.id,e),o=i.get(t.id),s=Nc(t,e),c,l;return n?s?(c=`invalid-data`,l=s):o?.renderStrategy===`intentionally-hidden`?(c=n.classification.expectedVisibilityStrategy.includes(`container`)?`parsed-container`:`parsed-intentionally-hidden`,l=t.type===`ceiling`?`Ceiling数据用于顶面/天花视图，不在当前平面布置图默认渲染。`:`按当前视图策略正常不独立绘制`):o?.renderStrategy===`hidden-by-layer-toggle`?(c=`parsed-intentionally-hidden`,l=`图层被用户关闭，未参与当前画布绘制`):o?.renderStrategy===`parent-emitted`?(c=`parsed-parent-emitted`,l=`由父节点 ${o.emittedByNodeId} 输出`):o?(c=(r&&t.type in Oc?Oc[t.type]?.[r]:void 0)??n.currentDemoStatus.overallStatus,l=`实际登记为 ${o.renderStrategy} 渲染`):n.classification.expectedVisibilityStrategy.includes(`container`)?(c=`parsed-container`,l=`容器节点正常不独立绘制`):n.classification.expectedVisibilityStrategy.includes(`parent-emitted`)?(c=`parsed-not-rendered`,l=`期望由父节点输出，但当前没有父级渲染登记`):(c=r&&t.type in Oc?Oc[t.type]?.[r]??`parsed-not-rendered`:`parsed-not-rendered`,l=c===`partially-supported`?`当前 variant 仅有简化表达且本节点未满足渲染条件`:`${t.type}${r?`.`+r:``} 已解析但没有实际渲染登记`):(c=`unknown-plugin-node`,l=`不属于固定 Pascal Core 43-kind；缺少对应插件 Schema`),{nodeId:t.id,kind:t.type,variant:r,ancestorLevelId:a.levelId,parentChain:a.sourceNodeIds,sourcePath:`nodes.${t.id}`,schemaStatus:n?.currentDemoStatus.schemaRecognition??`none`,transformStatus:a.error?`none`:n?.currentDemoStatus.transformResolution??`none`,expectedVisibility:n?.classification.expectedVisibilityStrategy??[`unknown-plugin`],actualRenderStatus:o?.renderStrategy??`none`,overallStatus:c,reason:l,evidence:n?.currentDemoStatus.evidence??{files:[],functions:[],tests:[]}}}),o=(...e)=>a.filter(t=>e.includes(t.overallStatus)).length,s=a.reduce((e,t)=>((e[t.kind]??=[]).push(t),e),{}),c=a.reduce((e,t)=>{let n=`${t.kind}.${t.variant??`(none)`}`;return e[n]=(e[n]??0)+1,e},{}),l=a.reduce((e,n)=>(n.overallStatus===`parsed-not-rendered`?e.push({severity:`error`,code:`parsed-not-rendered`,message:n.reason,nodeId:n.nodeId,sourcePath:n.sourcePath}):n.overallStatus===`invalid-data`?e.push({severity:`error`,code:`invalid-data`,message:n.reason,nodeId:n.nodeId,sourcePath:n.sourcePath}):n.overallStatus===`partially-supported`?e.push({severity:`warning`,code:`partially-supported`,message:n.reason,nodeId:n.nodeId,sourcePath:n.sourcePath}):n.overallStatus===`unknown-plugin-node`&&e.push({severity:`warning`,code:`unknown-plugin-node`,message:`${n.reason}; installedPlugins=${JSON.stringify(t)}`,nodeId:n.nodeId,sourcePath:n.sourcePath}),e),[]);return{summary:{totalNodes:a.length,builtInNodes:a.filter(e=>r.has(e.kind)).length,unknownPluginNodes:o(`unknown-plugin-node`),fullySupportedNodes:o(`supported-exact`,`supported-pascal-equivalent`,`supported-demo-symbol`),partiallySupportedNodes:o(`partially-supported`),parsedNotRenderedNodes:o(`parsed-not-rendered`),invalidNodes:o(`invalid-data`)},entries:a,byKind:s,byVariant:c,missingRenderers:a.filter(e=>e.overallStatus===`parsed-not-rendered`),unknownKinds:[...new Set(a.filter(e=>e.overallStatus===`unknown-plugin-node`).map(e=>e.kind))],installedPlugins:t,renderedRegistry:i.all(),diagnostics:l}}var Fc=e=>Array.isArray(e)&&e.length>=2&&e.slice(0,2).every(Number.isFinite)?[e[0],e[1]]:null,Ic=e=>Math.abs(e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n[0]*i[1]-n[1]*i[0]},0)/2),Lc=(e,t)=>Ga(e.id,t).levelId??null,Rc=new Set([`climate-appliances`,`kitchen-appliances`,`laundry-appliances`]),U=(e,t)=>({id:e.id,rawPascalId:e.id,name:e.name??null,parentId:e.parentId??null,levelId:Lc(e,t),visible:e.visible!==!1});function zc(e){let{nodes:t}=e,n=Object.values(t),r=e=>n.filter(t=>t.type===e),i=r(`level`).map(e=>({...U(e,t),ordinal:Number.isFinite(e.level)?e.level:null})),a=r(`zone`).map(e=>{let n=os(e).map(e=>[e.x,e.z]);return{...U(e,t),color:e.color??null,outline:n,areaSquareMeters:n.length>=3?Ic(n):null}}),o=r(`slab`).map(e=>{let n=Jo(e);return{...U(e,t),outline:n?.outer.map(e=>[e.x,e.z])??[],holes:n?.holes.map(e=>e.map(e=>[e.x,e.z]))??[],areaSquareMeters:n?.netArea??null,autoFromWalls:e.autoFromWalls===!0}}),s=r(`wall`),c=new Map,l=s.filter(e=>Fc(e.start)&&Fc(e.end)),u=[...new Set(l.map(e=>Lc(e,t)))];for(let e of u){let n=l.filter(n=>Lc(n,t)===e);try{Oo(n).forEach(e=>c.set(e.wallId,{valid:e.validation.valid,codes:e.validation.codes,areaSquareMeters:Math.abs(e.validation.area),footprint:e.footprint.map(e=>[e.x,e.y])}))}catch{n.forEach(e=>c.set(e.id,{valid:!1,codes:[`wall_footprint_evaluation_failed`],areaSquareMeters:0,footprint:[]}))}}let d=s.map(e=>({...U(e,t),start:Fc(e.start),end:Fc(e.end),thicknessMeters:Number.isFinite(e.thickness)&&e.thickness>0?e.thickness:.1,thicknessSource:Number.isFinite(e.thickness)&&e.thickness>0?`explicit`:`pascal-default`,heightMeters:Number.isFinite(e.height)?e.height:null,curveOffsetMeters:Number.isFinite(e.curveOffset)?e.curveOffset:0,frontSide:e.frontSide??null,backSide:e.backSide??null,footprintValidation:c.get(e.id)??{valid:!1,codes:[`wall_invalid_centerline`],areaSquareMeters:0,footprint:[]}})),f=e=>{let n=to(e,t);return{...U(e,t),hostWallId:e.wallId??e.parentId??null,rawWallLocalPosition:Array.isArray(e.position)?e.position:null,resolvedWorldPosition:n?[n.x,n.z]:null,resolvedTangentRadians:n?.rotationY??null,widthMeters:Number.isFinite(e.width)?e.width:null,heightMeters:Number.isFinite(e.height)?e.height:null,side:e.side??null,openingKind:e.openingKind??null,openingShape:e.openingShape??null,frameThicknessMeters:Number.isFinite(e.frameThickness)?e.frameThickness:null,frameDepthMeters:Number.isFinite(e.frameDepth)?e.frameDepth:null}},p=r(`door`).map(e=>{let t=no(e),n=e.hingesSide===`left`||e.hingesSide===`right`,r=e.swingDirection===`inward`||e.swingDirection===`outward`;return{...f(e),doorType:e.doorType??`hinged`,hingesSide:n?e.hingesSide:null,swingDirection:r?e.swingDirection:null,rawRotationYRadians:t.rawRotationYRadians,placementFlipped:t.placementFlipped,effectiveHingesSide:n?t.effectiveHingesSide:null,effectiveSwingDirection:r?t.effectiveSwingDirection:null,swingAngleRadians:Number.isFinite(e.swingAngle)?e.swingAngle:null,slideDirection:e.slideDirection??null,trackStyle:e.trackStyle??null,leafCount:Number.isFinite(e.leafCount)?e.leafCount:null,garagePanelCount:Number.isFinite(e.garagePanelCount)?e.garagePanelCount:null}}),m=r(`window`).map(e=>({...f(e),windowType:e.windowType??null,hingesSide:e.hingesSide??null,awningDirection:e.awningDirection??null,casementStyle:e.casementStyle??null,operationState:Number.isFinite(e.operationState)?e.operationState:null,sill:e.sill??null,sillDepthMeters:Number.isFinite(e.sillDepth)?e.sillDepth:null})),h=e=>{let n=Ja(e),r=Za(e.id,t),i=Ya(e.id,t),a=e.asset?.category??null;return{...U(e,t),assetId:e.asset?.id??null,assetName:e.asset?.name??null,assetTags:Array.isArray(e.asset?.tags)?e.asset.tags.filter(e=>typeof e==`string`):[],assetSource:e.asset?.source??null,category:a,functionTags:e.asset?.functionTags??[],attachTo:e.asset?.attachTo??null,dimensionsMeters:n?[n.width,n.height,n.depth]:null,rawPosition:Array.isArray(e.position)?e.position:null,rawRotation:Array.isArray(e.rotation)?e.rotation:null,resolvedWorldPosition:r.status===`ok`?[r.x,r.z]:null,resolvedRotationRadians:r.status===`ok`?r.rotationY:null,resolvedVerticalRangeMeters:i.status===`ok`?[i.bottom,i.top]:null,verticalTransformError:i.error??null,floorPlanUrl:e.asset?.floorPlanUrl??null,transformStatus:r.status,transformError:r.error??null}},g=r(`item`),_=g.filter(e=>e.asset?.category===`columns`).map(h),v=g.filter(e=>Rc.has(e.asset?.category)).map(h),y=g.filter(e=>e.asset?.category!==`columns`&&!Rc.has(e.asset?.category)).map(h),b=r(`shelf`).map(e=>{let n=No(e);return{...U(e,t),style:n.style,dimensionsMeters:[n.width,n.height,n.depth],footprint:Lo(e,t).map(e=>[e.x,e.z]),rows:n.rows,columns:n.columns,childItemIds:e.children??[]}}),x=r(`stair`).map(e=>{let n=rs(e,t);return{...U(e,t),stairType:e.stairType??`straight`,fromLevelId:e.fromLevelId??null,toLevelId:e.toLevelId??null,widthMeters:Number.isFinite(e.width)?e.width:null,totalRiseMeters:Number.isFinite(e.totalRise)?e.totalRise:null,stepCount:Number.isFinite(e.stepCount)?e.stepCount:null,innerRadiusMeters:Number.isFinite(e.innerRadius)?e.innerRadius:null,sweepAngleRadians:Number.isFinite(e.sweepAngle)?e.sweepAngle:null,footprint:ns(e,t).map(e=>[e.x,e.z]),fromLandingCenter:n?[n.fromCenter.x,n.fromCenter.z]:null,toLandingCenter:n?[n.toCenter.x,n.toCenter.z]:null,fromLandingOutward:n?[n.fromOutward.x,n.fromOutward.z]:null,toLandingOutward:n?[n.toOutward.x,n.toOutward.z]:null,landingWidthMeters:n?.width??null}}),S=r(`shaft`).map(e=>({...U(e,t),outline:Array.isArray(e.polygon)?e.polygon.map(Fc).filter(e=>!!e):[],heightMeters:Number.isFinite(e.height)?e.height:null})),C=d.flatMap((e,t)=>d.slice(t+1).flatMap(t=>[`start`,`end`].flatMap(n=>[`start`,`end`].flatMap(r=>{let i=e[n],a=t[r];return i&&a&&Math.hypot(i[0]-a[0],i[1]-a[1])<=1e-6?[{wallId:e.id,wallEnd:n,connectedWallId:t.id,connectedWallEnd:r}]:[]})))),w=new Set([...d,...a,...o,...p,...m,...y,...v,..._,...b,...x,...S,...i].map(e=>e.id));return{schemaVersion:`1.0`,source:{format:`Pascal JSON`,rootNodeIds:Array.isArray(e.raw?.rootNodeIds)?e.raw.rootNodeIds:[]},units:{length:`meter`,area:`square-meter`,angles:`radian`,planCoordinates:`Pascal Level plane [x,z]`,svgProjection:`[x,z] -> [x,y] identity; default viewer rotation is clockwise 90 degrees`},levels:i,zones:a,slabs:o,spaces:a.map(e=>({...e,sourceZoneId:e.id,source:`derived-from-zone`})),walls:d,doors:p,windows:m,furniture:y,equipment:v,columns:_,shelves:b,stairs:x,shafts:S,relationships:{parentChild:n.filter(e=>e.parentId).map(e=>({parentId:e.parentId,childId:e.id})),levelMembership:n.map(e=>({nodeId:e.id,levelId:Lc(e,t)})).filter(e=>e.levelId),hostedOpenings:[...p,...m].filter(e=>e.hostWallId).map(e=>({openingId:e.id,wallId:e.hostWallId})),wallConnections:C},unclassifiedNodes:n.filter(e=>!w.has(e.id)).map(e=>({id:e.id,rawPascalId:e.id,type:e.type})),diagnostics:e.diagnostics}}var W=Object.freeze({lengthMeters:1e-6,areaSquareMeters:1e-8,pointOnBoundaryMeters:.01,overlapAreaSquareMeters:.01,roomMinimumAreaSquareMeters:.5,roomNumericalSliverAreaSquareMeters:.001,roomSlendernessMinimum:.03,roomWallGapMeters:.02,zoneRoomMatchMinimumRatio:.5,zoneCrossRoomMinimumRatio:.2,zoneOverlapMaximumRatio:.05,doorPortalSampleClearanceMeters:.05,doorPortalEndClearanceMeters:.02,doorEntryDepthMeters:.45,doorEntryMinimumClearRatio:.2,doorOperationMinimumAngleRadians:Math.PI/2,doorCollisionAreaSquareMeters:.01,doorLeafThicknessMeters:.04,basicPassageWidthMeters:.6,personRadiusMeters:.3,navigationGridMeters:.1,portalLandingSearchMeters:.75,largeFurnitureMinimumAreaSquareMeters:1,smallObjectMaximumAreaSquareMeters:.35,furnitureUseZoneClearRatio:.8,bedAccessDepthMeters:.6,seatingAccessDepthMeters:.45,diningChairPulloutDepthMeters:.6,fixtureStandingDepthMeters:.6,bathEntryDepthMeters:.6,kitchenCounterRelationMeters:1.5,cabinetOperationDepthMeters:.6,drawerOperationDepthMeters:.45,applianceOperationDepthMeters:.6,windowOperationDepthMeters:.6,windowOperationPassClearRatio:.5,windowOperationIssueClearRatio:.2,physicalCollisionAreaSquareMeters:.01,physicalCollisionVerticalMeters:.005,stairLandingSampleClearanceMeters:.1,stairLandingSampleDepthMeters:.2});function Bc(e,t){let n=(t,n,r=e.hostWallId)=>({status:t,openingId:e.id,wallId:r,wallLengthMeters:null,openingStartMeters:null,openingEndMeters:null,openingCenterMeters:null,rightOvershootMeters:null,leftOvershootMeters:null,reason:n});if(!e.hostWallId||!t)return n(`invalid`,`宿主墙缺失`);if(!t.footprintValidation.valid)return n(`invalid`,`宿主墙 footprint 无效：${t.footprintValidation.codes.join(`, `)}`,t.id);if(Math.abs(t.curveOffsetMeters)>W.lengthMeters)return n(`unsupported`,`曲墙门窗定位在当前交接中不可靠`,t.id);if(!t.start||!t.end||!t.start.every(Number.isFinite)||!t.end.every(Number.isFinite))return n(`invalid`,`宿主墙几何无效`,t.id);let r=Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1]),i=e.rawWallLocalPosition?.[0],a=e.widthMeters;if(!Number.isFinite(i)||!Number.isFinite(a)||a<=0||r<=W.lengthMeters)return{status:`invalid`,openingId:e.id,wallId:t.id,wallLengthMeters:r,openingStartMeters:null,openingEndMeters:null,openingCenterMeters:null,rightOvershootMeters:null,leftOvershootMeters:null,reason:`门窗位置、宽度或墙长无效`};let o=i-a/2,s=i+a/2,c=W.pointOnBoundaryMeters,l=Math.max(0,-o),u=Math.max(0,s-r);return{status:o>=-c&&s<=r+c?`inside`:`outside`,openingId:e.id,wallId:t.id,wallLengthMeters:r,openingStartMeters:o,openingEndMeters:s,openingCenterMeters:i,rightOvershootMeters:u,leftOvershootMeters:l}}var Vc=e=>Array.isArray(e)&&e.length>=2&&e.slice(0,2).every(Number.isFinite),Hc=e=>Math.abs(e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n[0]*i[1]-i[0]*n[1]},0)/2),Uc=e=>e.length>2&&(e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]?e:[...e,e[0]]),Wc=e=>e.reduce((e,t)=>e+Math.max(0,Hc(t[0]??[])-t.slice(1).reduce((e,t)=>e+Hc(t),0)),0);function Gc(e,t,n,r){let i=(e,t,n)=>(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]),a=i(e,t,n),o=i(e,t,r),s=i(n,r,e),c=i(n,r,t);return a*o<0&&s*c<0}function Kc(e){for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++)if(!(Math.abs(t-n)<=1||t===0&&n===e.length-1)&&Gc(e[t],e[(t+1)%e.length],e[n],e[(n+1)%e.length]))return!0;return!1}function qc(e){return e.levels.map(t=>{let n=(e.slabs??[]).filter(e=>e.levelId===t.id&&e.visible);if(!n.length)return{levelId:t.id,polygons:[],holes:[],sourceType:`none`,sourceObjectIds:[],pascalSourceIds:[],areaSquareMeters:null,confidence:`low`,diagnostics:[{code:`no_level_slab`,message:`该楼层没有可用的 Floor/Slab 轮廓`}],usableForEvaluation:!1};let r=n.filter(e=>e.outline.length<3||!e.outline.every(Vc)||Hc(e.outline)<=W.areaSquareMeters||Kc(e.outline));if(r.length)return{levelId:t.id,polygons:[],holes:[],sourceType:`slab-union`,sourceObjectIds:r.map(e=>e.id),pascalSourceIds:r.map(e=>e.rawPascalId),areaSquareMeters:null,confidence:`low`,diagnostics:r.map(e=>({code:`invalid_slab_polygon`,message:`${e.name??e.id} 的 Slab Polygon 无效或自相交`,sourceObjectIds:[e.id]})),usableForEvaluation:!1};try{let[e,...r]=n.map(e=>[Uc(e.outline),...e.holes.map(Uc)]),i=ls.default.union(e,...r),a=Wc(i),o=i.flatMap(e=>e.slice(1));if(!i.length||a<=W.areaSquareMeters)throw Error(`empty_union`);return{levelId:t.id,polygons:i,holes:o,sourceType:`slab-union`,sourceObjectIds:n.map(e=>e.id),pascalSourceIds:n.map(e=>e.rawPascalId),areaSquareMeters:a,confidence:`medium`,diagnostics:[{code:`slab_semantics_limited`,message:`边界由可见 Slab 并集推导；未把 Zone 或墙体集合当作建筑边界。`},...i.length>1?[{code:`multiple_components`,message:`检测到 ${i.length} 个不相连的建筑区域`}]:[]],usableForEvaluation:!0}}catch{return{levelId:t.id,polygons:[],holes:[],sourceType:`slab-union`,sourceObjectIds:n.map(e=>e.id),pascalSourceIds:n.map(e=>e.rawPascalId),areaSquareMeters:null,confidence:`low`,diagnostics:[{code:`slab_union_failed`,message:`Slab Polygon 无法稳定合并为建筑边界`}],usableForEvaluation:!1}}})}function Jc(e){let[t,,n]=e.dimensionsMeters??[],[r,i]=e.resolvedWorldPosition??[],a=e.resolvedRotationRadians;if(![t,n,r,i,a].every(Number.isFinite)||t<=W.lengthMeters||n<=W.lengthMeters)return null;let o=Math.cos(a),s=Math.sin(a);return[[-t/2,-n/2],[t/2,-n/2],[t/2,n/2],[-t/2,n/2]].map(([e,t])=>[r+e*o+t*s,i-e*s+t*o])}function Yc(e,t){if(!t.usableForEvaluation)return null;try{return Wc(ls.default.difference([Uc(e)],t.polygons))}catch{return null}}var Xc=e=>e.length&&(e[0][0]!==e[e.length-1][0]||e[0][1]!==e[e.length-1][1])?[...e,e[0]]:e,Zc=e=>Xc(e.map(([e,t])=>[Math.round(e*1e3)/1e3,Math.round(t*1e3)/1e3])),Qc=e=>e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+Math.hypot(i[0]-n[0],i[1]-n[1])},0),$c=e=>Math.max(0,Hc(e[0]??[])-e.slice(1).reduce((e,t)=>e+Hc(t),0)),el=e=>e.reduce((e,t)=>e+$c(t),0),tl=(e,t,n)=>{let r=n[0]-t[0],i=n[1]-t[1],a=r*r+i*i;if(!a)return Math.hypot(e[0]-t[0],e[1]-t[1]);let o=Math.max(0,Math.min(1,((e[0]-t[0])*r+(e[1]-t[1])*i)/a));return Math.hypot(e[0]-t[0]-o*r,e[1]-t[1]-o*i)},nl=(e,t)=>e.some(e=>e.some(e=>t.some((n,r)=>tl(e,n,t[(r+1)%t.length])<=W.roomWallGapMeters))),rl=(e,t)=>{try{return el(ls.default.intersection(e,t))}catch{return 0}};function il(e){let t=qc(e),n=[],r=[];for(let i of t){if(!i.usableForEvaluation){r.push({code:`room_envelope_unavailable`,message:`${i.levelId} 没有可用建筑边界，未生成 Room Region`});continue}let t=e.walls.filter(e=>e.levelId===i.levelId),a=t.filter(e=>e.footprintValidation.valid&&e.footprintValidation.footprint.length>=3),o=t.filter(e=>!a.includes(e));o.length&&r.push({code:`invalid_walls_excluded`,message:`${i.levelId} 排除 ${o.length} 个无效墙体 footprint`});let s=i.polygons;if(a.length)try{let[e,...t]=a.map(e=>[Zc(e.footprintValidation.footprint)]),n=ls.default.union(e,...t);s=ls.default.difference(i.polygons,n)}catch{r.push({code:`room_partition_failed`,message:`${i.levelId} 墙体分割运算失败，未生成 Room Region`});continue}s.map(e=>({polygon:e,area:$c(e),perimeter:e.reduce((e,t)=>e+Qc(t),0)})).filter(e=>e.area>W.areaSquareMeters).sort((e,t)=>t.area-e.area).forEach((e,t)=>{let r=e.perimeter>0?4*Math.PI*e.area/(e.perimeter*e.perimeter):0,o=e.area<=W.roomNumericalSliverAreaSquareMeters,s=!o&&e.area<W.roomMinimumAreaSquareMeters,c=!o&&r<W.roomSlendernessMinimum,l=a.filter(t=>nl(e.polygon,t.footprintValidation.footprint)).map(e=>e.id),u=[];o&&u.push({code:`geometry_artifact`,message:`区域面积 ${e.area.toFixed(6)} m²，小于几何残留阈值 ${W.roomNumericalSliverAreaSquareMeters} m²；仅保留技术诊断，不作为设计师级别空间问题`}),s&&u.push({code:`tiny_room_fragment`,message:`区域面积 ${e.area.toFixed(3)} m²，小于 ${W.roomMinimumAreaSquareMeters} m²`}),c&&u.push({code:`slender_room_fragment`,message:`区域紧凑度 ${r.toFixed(4)}，可能是墙缝或细长裂缝`}),l.length||u.push({code:`no_boundary_wall_mapping`,message:`区域边界未能映射到可靠墙体，可能是开放区域或由 Slab 边界直接形成`}),n.push({roomRegionId:`${i.levelId}-room-${t+1}`,levelId:i.levelId,polygons:[e.polygon],holes:e.polygon.slice(1),areaSquareMeters:e.area,perimeterMeters:e.perimeter,compactness:r,geometryArtifact:o,boundaryWallIds:l,sourceObjectIds:[...i.sourceObjectIds,...l],pascalSourceIds:[...i.pascalSourceIds,...l],confidence:o||s||c?`low`:l.length?`medium`:`low`,diagnostics:u,usableForEvaluation:!o&&!s&&!c})})}let i=Object.fromEntries(n.map(e=>[e.roomRegionId,[]])),a=e.zones.map(e=>{let t=[Xc(e.outline)],r=e.areaSquareMeters??Hc(e.outline),a=n.filter(t=>t.levelId===e.levelId&&t.usableForEvaluation).map(e=>{let n=rl(t,e.polygons[0]);return{roomRegionId:e.roomRegionId,intersectionAreaSquareMeters:n,zoneCoverageRatio:r>0?n/r:0,roomCoverageRatio:e.areaSquareMeters>0?n/e.areaSquareMeters:0}}).filter(e=>e.intersectionAreaSquareMeters>W.overlapAreaSquareMeters).sort((e,t)=>t.intersectionAreaSquareMeters-e.intersectionAreaSquareMeters),o=a.filter(e=>e.zoneCoverageRatio>=W.zoneCrossRoomMinimumRatio).map(e=>e.roomRegionId);o.forEach(t=>i[t]?.push(e.id));let s=a.length?o.length>1?`zone-crosses-rooms`:a[0].zoneCoverageRatio>=W.zoneRoomMatchMinimumRatio?`one-to-one`:`partial`:`unmatched-zone`;return{zoneId:e.id,levelId:e.levelId,overlaps:a,matchedRoomRegionIds:o,relationship:s,confidence:s===`one-to-one`?`medium`:s===`unmatched-zone`?`low`:`medium`,diagnostics:s===`zone-crosses-rooms`?[`Zone 与 ${o.length} 个 Room Region 有显著面积重叠`]:s===`unmatched-zone`?[`Zone 未与任何可靠 Room Region 匹配`]:[]}});for(let e of a)e.relationship===`one-to-one`&&e.matchedRoomRegionIds[0]&&(i[e.matchedRoomRegionIds[0]]?.length??0)>1&&(e.relationship=`room-with-multiple-zones`);let o=[];return e.zones.forEach((t,n)=>e.zones.slice(n+1).filter(e=>e.levelId===t.levelId).forEach(e=>{let n=rl([Xc(t.outline)],[Xc(e.outline)]),r=Math.min(t.areaSquareMeters??Hc(t.outline),e.areaSquareMeters??Hc(e.outline));n>W.overlapAreaSquareMeters&&o.push({zoneAId:t.id,zoneBId:e.id,levelId:t.levelId,intersectionAreaSquareMeters:n,smallerZoneCoverageRatio:r>0?n/r:0})})),{envelopes:t,rooms:n,zoneMatches:a,zoneOverlaps:o,unmatchedRoomRegionIds:n.filter(e=>e.usableForEvaluation&&!i[e.roomRegionId]?.length).map(e=>e.roomRegionId),roomToZoneIds:i,diagnostics:r}}var al=e=>e.length>2?[...e,e[0]]:e,ol=e=>e.reduce((e,t)=>e+Hc(t[0]??[]),0),sl=(e,t)=>{try{return ol(ls.default.intersection([al(e)],[al(t)]))}catch{return null}},cl=e=>{let t=e.resolvedVerticalRangeMeters;if(Array.isArray(t)&&t.length>=2&&t.every(Number.isFinite)&&t[1]>t[0])return[t[0],t[1]];let n=e.rawPosition?.[1],r=e.dimensionsMeters?.[1];return Number.isFinite(n)&&Number.isFinite(r)&&r>0?[n,n+r]:null},ll=(e,t)=>Math.max(0,Math.min(e[1],t[1])-Math.max(e[0],t[0])),ul=(e,t)=>e.parentId===t.id||t.parentId===e.id,dl=(e,t)=>t.test(`${e.category??``} ${e.name??``} ${(e.functionTags??[]).join(` `)}`),fl=(e,t)=>{let n=/chair|椅/i,r=/table|desk|counter|bar|桌|台/i,i=/stove|cooktop|oven|灶|炉/i,a=/cabinet|counter|kitchen|橱柜|台面/i;return dl(e,n)&&dl(t,r)||dl(t,n)&&dl(e,r)||dl(e,i)&&dl(t,a)||dl(t,i)&&dl(e,a)};function pl(e,t,n){if(!n.start||!n.end||Math.abs(n.curveOffsetMeters)>W.lengthMeters||!t.resolvedWorldPosition)return null;let r=n.end[0]-n.start[0],i=n.end[1]-n.start[1],a=Math.hypot(r,i);if(a<=W.lengthMeters)return null;let o=-i/a,s=r/a,c=([e,t])=>(e-n.start[0])*o+(t-n.start[1])*s,l=c(t.resolvedWorldPosition),u=e.map(c),d=n.thicknessMeters/2;return Math.max(0,l>=0?d-Math.min(...u):Math.max(...u)+d)}function ml(e,t){let n=new Map(t.map(e=>[e.id,Jc(e)])),r=new Map(t.map(e=>[e.id,cl(e)])),i=[],a=[],o=[];for(let a of t){let t=n.get(a.id),s=r.get(a.id);if(t)for(let n of e.walls){if(n.levelId!==a.levelId||!n.footprintValidation.valid||n.footprintValidation.footprint.length<3)continue;let e=sl(t,n.footprintValidation.footprint);if(e===null||e<=W.physicalCollisionAreaSquareMeters)continue;if(!s||!Number.isFinite(n.heightMeters)){o.push({itemIds:[a.id,n.id],reason:s?`wall_height_unavailable`:`item_vertical_range_unavailable`});continue}let r=ll(s,[0,n.heightMeters]);r<=W.physicalCollisionVerticalMeters||i.push({item:a,wall:n,overlapAreaSquareMeters:e,penetrationDepthMeters:pl(t,a,n),verticalOverlapMeters:r})}}for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){let s=t[e],c=t[i];if(s.levelId!==c.levelId||ul(s,c))continue;let l=n.get(s.id),u=n.get(c.id);if(!l||!u)continue;let d=sl(l,u);if(d===null||d<=W.physicalCollisionAreaSquareMeters)continue;let f=r.get(s.id),p=r.get(c.id);if(!f||!p){o.push({itemIds:[s.id,c.id],reason:`item_vertical_range_unavailable`});continue}let m=ll(f,p);if(m<=W.physicalCollisionVerticalMeters)continue;if(fl(s,c)){o.push({itemIds:[s.id,c.id],reason:`mesh_geometry_required_for_nestable_pair`});continue}let[h,g]=Hc(l)>=Hc(u)?[s,c]:[c,s];a.push({primary:h,related:g,overlapAreaSquareMeters:d,verticalOverlapMeters:m,overlapVolumeCubicMeters:d*m})}return{wallPenetrations:i,itemCollisions:a,unresolvedPlanarOverlaps:o}}var hl=[`levels`,`spaces`,`walls`,`doors`,`windows`,`furniture`,`equipment`,`columns`,`shelves`,`stairs`,`shafts`],gl=e=>hl.flatMap(t=>e[t]),_l=e=>[...new Set(e.map(e=>e.id))],vl=e=>[...new Set(e.map(e=>e.rawPascalId))],G=(e,t=[])=>({level:e,score:e===`high`?1:e===`medium`?.75:.4,reasons:t}),yl=new WeakMap,bl=e=>{let t=yl.get(e);if(t)return t;let n=il(e);return yl.set(e,n),n},xl=(e,t,n,r,i={})=>({ruleId:e,ruleName:t,status:n,severity:n===`issue`?`error`:n===`unable_to_determine`?`warning`:`info`,summary:r,details:[],normalizedObjectIds:[],pascalSourceIds:[],measurements:[],thresholds:[],missingData:[],confidence:G(`high`),diagnostics:[],...i}),Sl=e=>Array.isArray(e)&&e.length>=2&&e.every(Number.isFinite),Cl=e=>Number.isFinite(e)&&e>W.lengthMeters,wl=e=>{let t={length:`meter`,area:`square-meter`,angles:`radian`},n=Object.entries(t).filter(([t,n])=>e.units[t]!==n);return xl(`G1-001`,`项目单位有效`,n.length?`issue`:`pass`,n.length?`项目单位与评价器支持的单位不一致`:`长度、面积和角度单位均受支持`,{details:n.map(([e,t])=>`${e} 应为 ${t}`),measurements:Object.entries(t).map(([t])=>({name:t,value:e.units[t]})),thresholds:Object.entries(t).map(([e,t])=>({name:`required-${e}`,value:t})),confidence:G(`high`)})},Tl=e=>{let t=gl(e),n=new Map;t.forEach(e=>n.set(e.id,[...n.get(e.id)??[],e]));let r=[...n.entries()].filter(([,e])=>e.length>1),i=r.flatMap(([,e])=>e);return xl(`G1-002`,`参与评价的对象具有唯一身份`,r.length?`issue`:`pass`,r.length?`发现 ${r.length} 个重复标准化 ID`:`${t.length} 个参与评价对象的标准化 ID 唯一`,{details:r.map(([e,t])=>`${e} 出现 ${t.length} 次`),normalizedObjectIds:_l(i),pascalSourceIds:vl(i),measurements:[{name:`participatingObjectCount`,value:t.length},{name:`duplicateIdCount`,value:r.length}],thresholds:[{name:`maximumDuplicateIdCount`,value:0}],confidence:G(`high`)})},El=e=>{let t=new Set(e.levels.map(e=>e.id)),n=gl(e).filter(e=>!e.levelId||!t.has(e.levelId));return xl(`G1-003`,`对象的楼层归属明确`,n.length?`issue`:`pass`,n.length?`${n.length} 个对象缺少有效楼层归属`:`所有参与评价对象均可归属到已知楼层`,{details:n.map(e=>`${e.id}: ${e.levelId?`楼层 ${e.levelId} 不存在`:`未解析出楼层`}`),normalizedObjectIds:_l(n),pascalSourceIds:vl(n),measurements:[{name:`unresolvedLevelObjectCount`,value:n.length}],thresholds:[{name:`maximumUnresolvedLevelObjectCount`,value:0}],missingData:n.map(e=>`${e.id}.levelId`),confidence:G(`high`)})},Dl=e=>{let t=[],n=[],r=(e,r,i)=>{t.push(e),n.push({severity:`error`,code:`invalid_dimension_or_coordinate`,message:r,normalizedObjectIds:[e.id],...i})};e.spaces.forEach(e=>{(e.outline.length<3||e.outline.some(e=>!Sl(e))||!Cl(e.areaSquareMeters))&&r(e,`${e.id} 的 Zone 派生轮廓或面积无效`)}),e.walls.forEach(e=>{let t=Sl(e.start)&&Sl(e.end)?Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]):null;!Sl(e.start)||!Sl(e.end)?r(e,`${e.name??e.id} 的起点或终点不是有限坐标`,{field:`wall.start/end`,actualValue:`start=${JSON.stringify(e.start)}, end=${JSON.stringify(e.end)}`,expectedValue:`两个有限 [x,z] 坐标`,origin:`source_data`,recommendation:`检查 Pascal Wall.start 和 Wall.end。`}):t<=W.lengthMeters&&r(e,`${e.name??e.id} 的起点与终点重合，墙长为 0 mm`,{field:`wall.lengthMeters`,actualValue:t,expectedValue:`大于 ${W.lengthMeters} m`,origin:`source_data`,recommendation:`删除残留零长度墙，或为该墙提供不同的起点和终点。`}),Cl(e.thicknessMeters)||r(e,`${e.name??e.id} 的墙厚无效`,{field:`wall.thicknessMeters`,actualValue:e.thicknessMeters,expectedValue:`大于 ${W.lengthMeters} m`,origin:`source_data`,recommendation:`检查 Pascal Wall.thickness。`})}),[...e.doors,...e.windows].forEach(e=>{(!Cl(e.widthMeters)||!Cl(e.heightMeters)||!Sl(e.rawWallLocalPosition))&&r(e,`${e.id} 的门窗尺寸或墙局部坐标无效`)}),[...e.furniture,...e.equipment,...e.columns].forEach(e=>{(!e.dimensionsMeters||e.dimensionsMeters.some(e=>!Cl(e))||e.transformStatus!==`ok`||!Sl(e.resolvedWorldPosition))&&r(e,`${e.id} 的物体尺寸或解析坐标无效`)}),e.shelves.forEach(e=>{e.dimensionsMeters.some(e=>!Cl(e))&&r(e,`${e.id} 的架体尺寸无效`)});let i=e.walls.filter(e=>_l(t).includes(e.id));return xl(`G1-004`,`对象尺寸与坐标有效`,t.length?`issue`:`pass`,t.length?`${_l(t).length} 个对象存在无效尺寸或坐标`:`已提供的评价对象尺寸与坐标有效`,{details:n.map(e=>e.message),normalizedObjectIds:_l(t),pascalSourceIds:vl(t),measurements:[{name:`invalidObjectCount`,value:_l(t).length},...i.flatMap(e=>[{name:`wallStart`,value:JSON.stringify(e.start),normalizedObjectId:e.id},{name:`wallEnd`,value:JSON.stringify(e.end),normalizedObjectId:e.id},{name:`wallLength`,value:e.start&&e.end?Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]):null,unit:`m`,normalizedObjectId:e.id},{name:`wallThickness`,value:e.thicknessMeters,unit:`m`,normalizedObjectId:e.id},{name:`wallHeight`,value:e.heightMeters,unit:`m`,normalizedObjectId:e.id},{name:`wallCurveOffset`,value:e.curveOffsetMeters,unit:`m`,normalizedObjectId:e.id},{name:`footprintValid`,value:e.footprintValidation.valid,normalizedObjectId:e.id},{name:`footprintArea`,value:e.footprintValidation.areaSquareMeters,unit:`m²`,normalizedObjectId:e.id},{name:`footprintCodes`,value:e.footprintValidation.codes.join(`, `),normalizedObjectId:e.id}])],thresholds:[{name:`minimumLength`,value:W.lengthMeters,unit:`m`},{name:`minimumArea`,value:W.areaSquareMeters,unit:`m²`}],confidence:G(`high`),diagnostics:n})},Ol=e=>{let t=[...gl(e),...e.zones,...e.unclassifiedNodes.map(e=>({...e,levelId:null,parentId:null}))],n=new Set(t.map(e=>e.id)),r=[],i=[],a=[],o=(e,t,o,s=`现有标准化对象 ID`)=>{if(t&&!n.has(t)){r.push(e);let n=`${e.id}: ${o} ${t} 不存在`;i.push(n),a.push({severity:`error`,code:`missing_reference`,message:`${e.name??e.id} 的 ${o} 指向项目中不存在的对象`,normalizedObjectIds:[e.id],field:o,actualValue:t,expectedValue:s,origin:`source_data`,recommendation:`检查源 Pascal JSON 中的引用 ID；若项目经历复制或楼层重建，请重新关联该对象。`})}};return gl(e).forEach(e=>o(e,e.parentId,`parentId`)),[...e.doors,...e.windows].forEach(e=>o(e,e.hostWallId,`hostWallId`)),e.spaces.forEach(e=>o(e,e.sourceZoneId,`sourceZoneId`)),e.stairs.forEach(e=>{o(e,e.fromLevelId,`fromLevelId`,`现有 Level ID`),o(e,e.toLevelId,`toLevelId`,`现有 Level ID`)}),e.shelves.forEach(e=>e.childItemIds.forEach(t=>o(e,t,`childItemId`))),xl(`G1-005`,`对象关联关系有效`,r.length?`issue`:`pass`,r.length?`发现 ${i.length} 条失效引用`:`已声明的对象引用均可解析`,{details:i,normalizedObjectIds:_l(r),pascalSourceIds:vl(r),measurements:[{name:`brokenReferenceCount`,value:i.length},{name:`knownLevelIds`,value:e.levels.map(e=>e.id).join(`, `)}],thresholds:[{name:`maximumBrokenReferenceCount`,value:0}],missingData:i,confidence:G(`high`),diagnostics:a})},kl=e=>{let t=bl(e),n=t.rooms.filter(e=>e.usableForEvaluation),r=e.zones.filter(e=>!e.name?.trim()),i=n.filter(e=>!t.roomToZoneIds[e.roomRegionId]?.length);if(!n.length)return xl(`G1-019`,`主要空间具有明确名称`,`unable_to_determine`,`未形成可用于命名检查的可靠 Room Region`,{missingData:[`可靠 Room Region`,`独立 Space 对象`],confidence:G(`low`,t.diagnostics.map(e=>e.message)),diagnostics:[{severity:`warning`,code:`room_regions_unavailable`,message:`当前无法建立独立物理空间区域，因此不能判断主要空间名称`,normalizedObjectIds:[],origin:`insufficient_information`}]});let a=r.length?`issue`:i.length?`unable_to_determine`:`pass`;return xl(`G1-019`,`主要空间具有明确名称`,a,r.length?`${r.length} 个 Zone 没有名称`:i.length?`${i.length} 个可靠 Room Region 没有 Zone 匹配，无法确认其是否为未命名主要空间`:`${n.length} 个可靠 Room Region 均至少匹配一个有名称的 Zone`,{details:[...r.map(e=>`${e.id} 未命名`),...i.map(e=>`${e.roomRegionId} 未匹配 Zone`)],normalizedObjectIds:[...r.map(e=>e.id),...i.map(e=>e.roomRegionId)],pascalSourceIds:r.map(e=>e.rawPascalId),measurements:[{name:`reliableRoomRegionCount`,value:n.length},{name:`namedZoneCount`,value:e.zones.filter(e=>e.name?.trim()).length},{name:`unnamedZoneCount`,value:r.length},{name:`unmatchedRoomCount`,value:i.length}],thresholds:[{name:`requiredNonBlankName`,value:!0}],missingData:i.map(e=>`${e.roomRegionId}: 主要空间语义`),confidence:G(a===`pass`?`medium`:i.length?`low`:`medium`,[`Room Region 由建筑边界和墙体 footprint 独立生成`,...i.length?[`未匹配 Room 可能是开放区域、交通空间或主要房间`]:[]]),diagnostics:i.map(e=>({severity:`warning`,code:`unmatched_room_name_unknown`,message:`${e.roomRegionId} 没有 Zone；这不等于已经发现未命名房间`,normalizedObjectIds:[e.roomRegionId],origin:`insufficient_information`,recommendation:`在画布核验该区域是否属于主要空间，再决定是否补充 Zone 名称。`}))})},Al=e=>{let t=[...e.doors,...e.windows];if(!t.length)return xl(`G1-013`,`门窗位于有效开口边界`,`not_applicable`,`项目中没有门窗对象`,{confidence:G(`high`)});let n=new Map(e.walls.map(e=>[e.id,e])),r=t.map(e=>Bc(e,e.hostWallId?n.get(e.hostWallId):void 0)),i=r.filter(e=>e.status===`outside`),a=r.filter(e=>e.status===`invalid`||e.status===`unsupported`),o=t.filter(e=>[...i,...a].some(t=>t.openingId===e.id)),s=i.length?`issue`:a.length?`unable_to_determine`:`pass`,c=new Map(t.map(e=>[e.id,e])),l=r.filter(e=>e.status!==`inside`),u=l.map(e=>{let t=c.get(e.openingId);if(e.status===`outside`){let n=(e.rightOvershootMeters??0)>0?`右侧`:`左侧`,r=Math.max(e.rightOvershootMeters??0,e.leftOvershootMeters??0);return{severity:`error`,code:`opening_outside_host_wall`,message:`${t.name??t.id} 的洞口${n}超出宿主墙端约 ${(r*1e3).toFixed(1)} mm`,normalizedObjectIds:[t.id,e.wallId],field:`opening.position[0] + opening.width / 2`,actualValue:`${e.openingEndMeters?.toFixed(6)} m`,expectedValue:`0–${e.wallLengthMeters?.toFixed(6)} m（容差 ±${W.pointOnBoundaryMeters} m）`,origin:`source_data`,recommendation:`检查窗户位置、洞口宽度或宿主墙关系；此检查使用 Pascal width 洞口宽度，不使用 frameThickness/frameDepth 或模型包围盒。`}}return{severity:`warning`,code:e.status===`unsupported`?`curved_wall_opening_unsupported`:`invalid_opening_geometry`,message:e.reason??`无法判断`,normalizedObjectIds:[t.id],origin:e.status===`unsupported`?`insufficient_information`:`source_data`,recommendation:e.status===`unsupported`?`提供沿曲线弧长的门窗定位后再检查。`:`修复宿主墙或门窗的几何字段后再检查。`}});return xl(`G1-013`,`门窗位于有效开口边界`,s,i.length?`${i.length} 个门窗超出直墙有效区间`:a.length?`${a.length} 个门窗因几何或宿主证据不足无法判断`:`所有可评价门窗均位于直墙有效区间`,{details:l.map(e=>`${e.openingId}: ${e.status}${e.reason?`（${e.reason}）`:``}`),normalizedObjectIds:_l(o),pascalSourceIds:vl(o),measurements:l.flatMap(e=>{let t=c.get(e.openingId);return[{name:`wallLength`,value:e.wallLengthMeters,unit:`m`,normalizedObjectId:e.openingId},{name:`openingCenterAlongWall`,value:e.openingCenterMeters,unit:`m`,normalizedObjectId:e.openingId},{name:`openingWidth`,value:t.widthMeters,unit:`m`,normalizedObjectId:e.openingId},{name:`openingStart`,value:e.openingStartMeters,unit:`m`,normalizedObjectId:e.openingId},{name:`openingEnd`,value:e.openingEndMeters,unit:`m`,normalizedObjectId:e.openingId},{name:`rightOvershoot`,value:e.rightOvershootMeters,unit:`m`,normalizedObjectId:e.openingId},{name:`leftOvershoot`,value:e.leftOvershootMeters,unit:`m`,normalizedObjectId:e.openingId},{name:`resolvedWorldPosition`,value:JSON.stringify(t.resolvedWorldPosition),normalizedObjectId:e.openingId}]}),thresholds:[{name:`pointOnBoundaryTolerance`,value:W.pointOnBoundaryMeters,unit:`m`}],missingData:a.map(e=>`${e.openingId}: ${e.reason}`),confidence:G(a.length?`medium`:`high`,a.map(e=>`${e.openingId}: ${e.reason}`)),diagnostics:u})},jl=e=>{let t=qc(e),n=t.filter(e=>!e.usableForEvaluation),r=n.filter(e=>e.sourceType!==`none`),i=r.length?`issue`:n.length?`unable_to_determine`:`pass`;return xl(`G1-006`,`建筑平面边界能够识别`,i,i===`pass`?`${t.length} 个参与评价楼层均已由 Slab 轮廓识别有效建筑范围`:r.length?`${r.length} 个楼层的 Slab 边界存在明确几何异常`:`${n.length} 个楼层缺少可作为建筑范围的可靠 Slab 轮廓`,{details:t.flatMap(e=>e.diagnostics.map(t=>`${e.levelId}: ${t.message}`)),normalizedObjectIds:t.flatMap(e=>[e.levelId,...e.sourceObjectIds]),pascalSourceIds:t.flatMap(e=>e.pascalSourceIds),measurements:t.flatMap(e=>[{name:`envelopeArea`,value:e.areaSquareMeters,unit:`m²`,normalizedObjectId:e.levelId},{name:`polygonCount`,value:e.polygons.length,normalizedObjectId:e.levelId},{name:`holeCount`,value:e.holes.length,normalizedObjectId:e.levelId},{name:`usableForEvaluation`,value:e.usableForEvaluation,normalizedObjectId:e.levelId},{name:`sourceType`,value:e.sourceType,normalizedObjectId:e.levelId}]),thresholds:[{name:`minimumEnvelopeArea`,value:W.areaSquareMeters,unit:`m²`},{name:`boundaryContactTolerance`,value:W.pointOnBoundaryMeters,unit:`m`}],missingData:n.flatMap(e=>e.diagnostics.map(t=>`${e.levelId}: ${t.message}`)),confidence:G(i===`pass`?`medium`:`low`,t.flatMap(e=>e.diagnostics.map(e=>e.message))),diagnostics:n.flatMap(e=>e.diagnostics.map(t=>({severity:e.sourceType===`none`?`warning`:`error`,code:t.code,message:t.message,normalizedObjectIds:[e.levelId,...e.sourceObjectIds],origin:e.sourceType===`none`?`insufficient_information`:`source_data`,recommendation:`补充或修复该楼层的可见室内 Floor/Slab Polygon；Zone 不会被当作建筑边界。`})))})},Ml=e=>{let t=new Map(qc(e).map(e=>[e.levelId,e])),n=new Set([`vehicles`]),r=[...e.furniture,...e.equipment].filter(e=>!n.has(e.category??``)),i=W.pointOnBoundaryMeters**2*2;if(!r.length)return xl(`G1-023`,`家具与设备位于有效范围且无实体碰撞`,`not_applicable`,`没有参与室内平面评价的家具或设备`);let a=[],o=[],s=[],c=[];for(let e of r){let n=Jc(e),r=e.levelId?t.get(e.levelId):void 0;if(!e.category||!n){o.push(e),c.push({severity:`warning`,code:`item_footprint_unavailable`,message:`${e.name??e.id} 缺少可靠的类别、尺寸或平面坐标`,normalizedObjectIds:[e.id],origin:`insufficient_information`,recommendation:`补充对象类别、宽度、深度和可解析的平面位置后再检查。`});continue}if(!r?.usableForEvaluation){o.push(e),c.push({severity:`warning`,code:`building_envelope_unavailable`,message:`${e.name??e.id} 所属楼层没有可靠建筑边界`,normalizedObjectIds:[e.id],origin:`insufficient_information`,recommendation:`先补充该楼层的有效 Floor/Slab Polygon。`});continue}let l=Yc(n,r),u=Hc(n);if(l===null){o.push(e),c.push({severity:`warning`,code:`containment_geometry_failed`,message:`${e.name??e.id} 的包含关系几何计算失败`,normalizedObjectIds:[e.id],origin:`insufficient_information`});continue}let d=u>0?l/u:null;l>i&&(a.push(e),s.push({name:`footprintArea`,value:u,unit:`m²`,normalizedObjectId:e.id},{name:`outsideArea`,value:l,unit:`m²`,normalizedObjectId:e.id},{name:`outsideAreaRatio`,value:d,normalizedObjectId:e.id},{name:`envelopeArea`,value:r.areaSquareMeters,unit:`m²`,normalizedObjectId:e.id}),c.push({severity:`error`,code:`item_outside_building_envelope`,message:`${e.name??e.id} 有 ${(l*1e6).toFixed(0)} mm² 的平面占地越出建筑范围`,normalizedObjectIds:[e.id,...r.sourceObjectIds],field:`footprint`,actualValue:l,expectedValue:`≤ ${i} m²`,origin:`source_data`,recommendation:`检查家具/设备位置、尺寸或所属楼层；如该对象属于室外，请使用明确的室外分类。`}))}let l=ml(e,r);l.wallPenetrations.forEach(({item:e,wall:t,overlapAreaSquareMeters:n,penetrationDepthMeters:r,verticalOverlapMeters:i})=>{s.push({name:`wallPenetrationArea`,value:n,unit:`m²`,normalizedObjectId:e.id},{name:`wallPenetrationDepth`,value:r,unit:`m`,normalizedObjectId:e.id},{name:`wallVerticalOverlap`,value:i,unit:`m`,normalizedObjectId:e.id}),c.push({severity:`error`,code:`item_penetrates_wall`,message:`${e.name??e.id} 嵌入 ${t.name??t.id}${r===null?``:`约 ${(r*1e3).toFixed(1)} mm`}`,normalizedObjectIds:[e.id,t.id],field:`item footprint × wall footprint × vertical range`,actualValue:`平面重叠 ${n.toFixed(4)} m²${r===null?``:`，嵌入深度 ${r.toFixed(4)} m`}`,expectedValue:`平面实体重叠 ≤ ${W.physicalCollisionAreaSquareMeters} m²`,origin:`source_data`,recommendation:`移动或缩小家具，使其可以贴靠墙面但不穿入墙体。`})}),l.itemCollisions.forEach(({primary:e,related:t,overlapAreaSquareMeters:n,verticalOverlapMeters:r,overlapVolumeCubicMeters:i})=>{s.push({name:`itemCollisionArea`,value:n,unit:`m²`,normalizedObjectId:e.id},{name:`itemCollisionHeight`,value:r,unit:`m`,normalizedObjectId:e.id},{name:`itemCollisionVolume`,value:i,unit:`m³`,normalizedObjectId:e.id}),c.push({severity:`error`,code:`item_physical_collision`,message:`${e.name??e.id} 与 ${t.name??t.id} 占用了同一段实体空间（平面重叠 ${n.toFixed(3)} m²，高度重叠 ${r.toFixed(3)} m）`,normalizedObjectIds:[e.id,t.id],field:`3D occupied volume`,actualValue:`${i.toFixed(4)} m³`,expectedValue:`实体重叠体积为 0（仅接触允许）`,origin:`source_data`,recommendation:`检查两件对象的位置、尺寸和安装高度；若是地柜与吊柜，确认二者高度区间没有相交。`})}),l.unresolvedPlanarOverlaps.forEach(({itemIds:e,reason:t})=>{let n=t===`mesh_geometry_required_for_nestable_pair`;c.push({severity:`warning`,code:n?`physical_collision_mesh_required`:`physical_collision_vertical_range_unavailable`,message:n?`${e.join(` 与 `)} 的包围盒重叠，但这类对象可以正常穿插使用，缺少模型实体几何时不判定为碰撞`:`${e.join(` 与 `)} 的平面轮廓重叠，但缺少可靠高度信息，不能确认是否发生实体碰撞`,normalizedObjectIds:e,origin:`insufficient_information`,recommendation:n?`如需进一步核验桌椅或嵌入式设备，请提供可离线计算的模型碰撞体。`:`补充对象安装高度、物体高度或墙高后再检查。`,actualValue:t})});let u=c.filter(e=>e.severity===`error`),d=l.unresolvedPlanarOverlaps.flatMap(e=>e.itemIds),f=u.flatMap(e=>e.normalizedObjectIds),p=u.length?`issue`:o.length||d.length?`unable_to_determine`:`pass`,m=new Map(gl(e).map(e=>[e.id,e])),h=[...new Set([...f,...o.map(e=>e.id),...d])].map(e=>m.get(e)).filter(e=>!!e),g=[a.length?`${a.length} 个对象越出建筑范围`:``,l.wallPenetrations.length?`${l.wallPenetrations.length} 处家具嵌墙`:``,l.itemCollisions.length?`${l.itemCollisions.length} 组家具实体碰撞`:``].filter(Boolean);return xl(`G1-023`,`家具与设备位于有效范围且无实体碰撞`,p,g.length?`发现${g.join(`、`)}`:o.length||d.length?`${o.length+l.unresolvedPlanarOverlaps.length} 个对象或重叠关系因边界、类别、占地、高度或模型实体信息不足无法判断`:`${r.length} 个参与评价的家具和设备均在有效范围内，且未发现实体碰撞`,{normalizedObjectIds:_l(h),pascalSourceIds:vl(h),measurements:[{name:`participatingItemCount`,value:r.length},{name:`outsideItemCount`,value:a.length},{name:`wallPenetrationCount`,value:l.wallPenetrations.length},{name:`itemCollisionPairCount`,value:l.itemCollisions.length},{name:`unableToDetermineItemCount`,value:o.length+l.unresolvedPlanarOverlaps.length},...s],thresholds:[{name:`outsideAreaTolerance`,value:i,unit:`m²`},{name:`boundaryContactTolerance`,value:W.pointOnBoundaryMeters,unit:`m`},{name:`physicalCollisionAreaTolerance`,value:W.physicalCollisionAreaSquareMeters,unit:`m²`},{name:`physicalCollisionVerticalTolerance`,value:W.physicalCollisionVerticalMeters,unit:`m`}],missingData:[...o.map(e=>`${e.id}: 需要可靠的对象 footprint 与所属 Level 建筑边界`),...l.unresolvedPlanarOverlaps.map(e=>`${e.itemIds.join(`, `)}: ${e.reason===`mesh_geometry_required_for_nestable_pair`?`模型实体碰撞体`:`可靠安装高度和物体高度`}`)],confidence:G(p===`pass`?`medium`:o.length||d.length?`low`:`medium`,[`建筑边界由 Slab 并集推导`,`实体碰撞同时检查平面轮廓与垂直高度区间`,...o.map(e=>`${e.id} 缺少包含关系输入`)]),diagnostics:c,details:c.map(e=>e.message)})},Nl=/\b(BED(?:ROOM)?|BATH|TOILET|WC|WIC|CLOSET|PANTRY|LAUNDRY|MEP|STORAGE)\b|卧室|卫生间|浴室|储藏|衣帽间/i,Pl=[wl,Tl,El,Dl,Ol,jl,e=>{let t=bl(e),n=e.zones.filter(e=>Nl.test(e.name??``));if(!n.length)return xl(`G1-007`,`应封闭空间的边界闭合`,`unable_to_determine`,`Zone 缺少足以确认“必须独立封闭”的功能语义`,{missingData:[`应封闭空间用途分类`],confidence:G(`low`,[`未根据名称以外的结构化用途字段识别到应封闭空间`]),diagnostics:[{severity:`warning`,code:`enclosure_semantics_unavailable`,message:`没有结构化空间用途可用于确认哪些 Zone 必须独立封闭`,normalizedObjectIds:[],origin:`insufficient_information`}]});let r=new Map(t.zoneMatches.map(e=>[e.zoneId,e])),i=n.filter(e=>{let t=r.get(e.id);return!t||![`one-to-one`,`room-with-multiple-zones`].includes(t.relationship)||t.matchedRoomRegionIds.length!==1});return xl(`G1-007`,`应封闭空间的边界闭合`,i.length?`issue`:`pass`,i.length?`${i.length} 个明确应封闭的 Zone 未能匹配到单一可靠 Room Region`:`${n.length} 个明确应封闭的 Zone 均匹配到单一可靠 Room Region`,{normalizedObjectIds:i.map(e=>e.id),pascalSourceIds:i.map(e=>e.rawPascalId),measurements:[{name:`requiredEnclosedZoneCount`,value:n.length},{name:`failedEnclosedZoneCount`,value:i.length}],thresholds:[{name:`zoneRoomMatchMinimumRatio`,value:W.zoneRoomMatchMinimumRatio}],confidence:G(`medium`,[`应封闭语义由严格功能关键词识别`,`闭合证据来自独立 Room Region 面积匹配`]),diagnostics:i.map(e=>({severity:`error`,code:`required_zone_not_enclosed`,message:`${e.name??e.id} 未匹配到单一可靠物理空间`,normalizedObjectIds:[e.id],origin:`source_data`,recommendation:`检查该功能区周边墙体是否闭合，或修正 Zone 轮廓。`}))})},e=>{let t=bl(e),n=t.zoneOverlaps.filter(e=>e.smallerZoneCoverageRatio>W.zoneOverlapMaximumRatio),r=t.zoneMatches.filter(e=>e.relationship===`zone-crosses-rooms`),i=[...new Set([...n.flatMap(e=>[e.zoneAId,e.zoneBId]),...r.map(e=>e.zoneId)])],a=new Map(e.zones.map(e=>[e.id,e])),o=i.length?`issue`:t.rooms.some(e=>e.usableForEvaluation)?`pass`:`unable_to_determine`;return xl(`G1-009`,`不同空间不存在异常重叠`,o,n.length?`${n.length} 组 Zone 存在无设计依据的显著面积重叠`:r.length?`${r.length} 个 Zone 显著跨越多个独立 Room Region`:o===`pass`?`未发现 Zone 异常重叠或跨越多个独立 Room Region`:`缺少可靠 Room Region，无法检查空间重叠`,{normalizedObjectIds:i,pascalSourceIds:i.map(e=>a.get(e)?.rawPascalId).filter(e=>!!e),measurements:[{name:`zonePairOverlapCount`,value:n.length},{name:`zoneCrossRoomCount`,value:r.length},...n.map(e=>({name:`zoneOverlapArea`,value:e.intersectionAreaSquareMeters,unit:`m²`,normalizedObjectId:e.zoneAId}))],thresholds:[{name:`overlapAreaTolerance`,value:W.overlapAreaSquareMeters,unit:`m²`},{name:`zoneOverlapMaximumRatio`,value:W.zoneOverlapMaximumRatio},{name:`zoneCrossRoomMinimumRatio`,value:W.zoneCrossRoomMinimumRatio}],confidence:G(o===`unable_to_determine`?`low`:`medium`,[`开放式空间内多个不重叠 Zone 共享同一 Room 不视为异常`]),diagnostics:[...n.map(e=>({severity:`error`,code:`abnormal_zone_overlap`,message:`${a.get(e.zoneAId)?.name??e.zoneAId} 与 ${a.get(e.zoneBId)?.name??e.zoneBId} 重叠 ${e.intersectionAreaSquareMeters.toFixed(3)} m²`,normalizedObjectIds:[e.zoneAId,e.zoneBId],origin:`source_data`,recommendation:`检查两个功能 Zone 的轮廓是否重复绘制。`})),...r.map(e=>({severity:`error`,code:`zone_crosses_rooms`,message:`${a.get(e.zoneId)?.name??e.zoneId} 跨越 ${e.matchedRoomRegionIds.length} 个独立 Room Region`,normalizedObjectIds:[e.zoneId,...e.matchedRoomRegionIds],origin:`source_data`,recommendation:`检查 Zone 轮廓或房间分隔墙。`}))]})},e=>{let t=bl(e),n=new Map(e.walls.map(e=>[e.id,e])),r=t.rooms.filter(e=>e.geometryArtifact),i=t.rooms.filter(e=>!e.usableForEvaluation&&!e.geometryArtifact),a=t.envelopes.filter(e=>!e.usableForEvaluation),o=e=>{let t=e.boundaryWallIds.map(e=>n.get(e)).filter(e=>!!e),r=e.polygons.flatMap(e=>e.flatMap(e=>e)),i=t.some(e=>Math.abs(e.curveOffsetMeters)>W.lengthMeters),a=t.some(e=>[e.start,e.end].some(e=>e&&r.some(t=>Math.hypot(t[0]-e[0],t[1]-e[1])<=W.roomWallGapMeters)));return{room:e,nearCurvedWall:i,nearWallEnd:a,inferredSource:i?`evaluator_boolean_near_curved_wall`:a?`evaluator_boolean_near_wall_endpoint`:`evaluator_polygon_boolean_residual`}},s=r.map(o),c=i.map(o),l=a.length||i.length?`unable_to_determine`:`pass`,u=[{name:`roomRegionCount`,value:t.rooms.length},{name:`numericalSliverCount`,value:r.length},{name:`unconfirmedFragmentCount`,value:i.length},...[...s,...c].flatMap(({room:e,nearCurvedWall:t,nearWallEnd:n,inferredSource:r})=>[{name:`fragmentArea`,value:e.areaSquareMeters,unit:`m²`,normalizedObjectId:e.roomRegionId},{name:`fragmentPerimeter`,value:e.perimeterMeters,unit:`m`,normalizedObjectId:e.roomRegionId},{name:`fragmentCompactness`,value:e.compactness,normalizedObjectId:e.roomRegionId},{name:`fragmentLevelId`,value:e.levelId,normalizedObjectId:e.roomRegionId},{name:`nearbyWallIds`,value:e.boundaryWallIds.join(`,`),normalizedObjectId:e.roomRegionId},{name:`nearCurvedWall`,value:t,normalizedObjectId:e.roomRegionId},{name:`nearWallEndpoint`,value:n,normalizedObjectId:e.roomRegionId},{name:`inferredSource`,value:r,normalizedObjectId:e.roomRegionId}])],d=[...s.map(({room:e,nearCurvedWall:t,nearWallEnd:n,inferredSource:r})=>({severity:`warning`,code:`geometry_artifact`,message:`${e.roomRegionId}：面积 ${e.areaSquareMeters.toFixed(6)} m²、周长 ${e.perimeterMeters.toFixed(4)} m、紧凑度 ${e.compactness.toFixed(4)}；邻近墙 ${e.boundaryWallIds.join(`, `)||`无`}；邻近曲墙=${t}；邻近墙端=${n}；推测来源=${r}`,normalizedObjectIds:[e.roomRegionId,...e.boundaryWallIds],origin:`geometry_tolerance`,recommendation:`该区域明确低于数值残差阈值，仅保留技术诊断，不影响 G1 状态。`})),...c.map(({room:e,inferredSource:t})=>({severity:`warning`,code:`room_fragment_origin_unconfirmed`,message:`${e.roomRegionId} 面积 ${e.areaSquareMeters.toFixed(4)} m²，但尚不能确认属于源数据异常还是评价器布尔运算残片；推测来源=${t}`,normalizedObjectIds:[e.roomRegionId,...e.boundaryWallIds],origin:`insufficient_information`,recommendation:`在画布核对原始 Slab、墙端与曲墙几何后再决定是否修复源数据。`}))];return xl(`G1-012`,`不存在错误空间`,l,a.length?`部分楼层缺少可靠建筑边界，无法排查错误空间`:i.length?`${i.length} 个空间碎片来源尚不能确认`:r.length?`未发现需要设计师处理的错误空间；${r.length} 个数值残差仅保留技术诊断`:`未在 ${t.rooms.length} 个 Room Region 中发现几何碎片`,{details:d.map(e=>e.message),normalizedObjectIds:i.map(e=>e.roomRegionId),pascalSourceIds:[...new Set(i.flatMap(e=>e.pascalSourceIds))],measurements:u,thresholds:[{name:`minimumRoomArea`,value:W.roomMinimumAreaSquareMeters,unit:`m²`},{name:`numericalSliverArea`,value:W.roomNumericalSliverAreaSquareMeters,unit:`m²`},{name:`minimumRoomCompactness`,value:W.roomSlendernessMinimum},{name:`wallEndpointProximity`,value:W.roomWallGapMeters,unit:`m`}],missingData:i.map(e=>`${e.roomRegionId}: 原始几何与布尔运算来源确认`),confidence:G(l===`pass`?`high`:`low`,[`低于 0.001 m² 且形状极小的区域判为评价器计算残差`,`来源未确认的碎片不会被直接认定为设计错误`]),diagnostics:d})},Al,kl,Ml],Fl=e=>`exterior:${e}`,Il=(e,t,n,r=1e-7)=>{let i=(n[0]-t[0])**2+(n[1]-t[1])**2;if(i<=r**2)return Math.hypot(e[0]-t[0],e[1]-t[1])<=r;let a=(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0]);if(Math.abs(a)>r)return!1;let o=(e[0]-t[0])*(n[0]-t[0])+(e[1]-t[1])*(n[1]-t[1]);return o>=-r&&o<=i+r},Ll=(e,t)=>{let n=!1;for(let r=0,i=t.length-1;r<t.length;i=r++){let a=t[r],o=t[i];if(Il(e,a,o))return!0;a[1]>e[1]!=o[1]>e[1]&&e[0]<(o[0]-a[0])*(e[1]-a[1])/(o[1]-a[1])+a[0]&&(n=!n)}return n},Rl=(e,t)=>!!(t[0]&&Ll(e,t[0])&&!t.slice(1).some(t=>Ll(e,t))),K=(e,t)=>t.polygons.some(t=>Rl(e,t)),zl=(e,t)=>!!(t?.usableForEvaluation&&t.polygons.some(t=>Rl(e,t)));function q(e,t,n){let r=new Map,i=0,a=0;for(let o of e){let e=t.filter(e=>K(o,e));e.length===1?r.set(e[0].roomRegionId,(r.get(e[0].roomRegionId)??0)+1):e.length>1||zl(o,n)?a++:i++}let o=[...r.entries()].sort((e,t)=>t[1]-e[1]);return o.length===1&&o[0][1]>i&&o[0][1]>=Math.ceil(e.length/2)?{roomRegionId:o[0][0],exterior:!1}:!o.length&&i>=Math.ceil(e.length/2)?{roomRegionId:null,exterior:!0}:{roomRegionId:null,exterior:!1,diagnostic:`采样结果不一致：Room=${o.map(([e,t])=>`${e}:${t}`).join(`,`)||`0`}，Exterior=${i}，未解析=${a}`}}function J(e,t=il(e)){let n=new Map(e.walls.map(e=>[e.id,e])),r=new Map(t.envelopes.map(e=>[e.levelId,e]));return e.doors.map(e=>{let i=[],a=e.hostWallId?n.get(e.hostWallId):void 0,o=(t,n)=>({doorId:e.id,pascalSourceId:e.rawPascalId,levelId:e.levelId,hostWallId:e.hostWallId,openingCenter:e.resolvedWorldPosition,openingWidthMeters:e.widthMeters,openingSegment:null,roomRegionAId:null,roomRegionBId:null,connectsExterior:!1,sideAExterior:!1,sideBExterior:!1,samplePointsA:[],samplePointsB:[],confidence:`low`,diagnostics:[{code:t,message:n}],usableForConnectivity:!1});if(!a)return o(`door_host_wall_missing`,`门缺少可解析的宿主墙`);if(!e.levelId||!e.resolvedWorldPosition||!Number.isFinite(e.resolvedTangentRadians)||!Number.isFinite(e.widthMeters)||e.widthMeters<=W.lengthMeters)return o(`door_portal_geometry_invalid`,`门洞中心、宽度、方向或楼层信息无效`);if(!a.footprintValidation.valid)return o(`door_host_wall_geometry_invalid`,`宿主墙 footprint 无效，不能识别门两侧空间`);if(Math.abs(a.curveOffsetMeters)>W.lengthMeters)return o(`curved_door_portal_unsupported`,`曲墙门缺少可靠的局部弧线法向与弧长定位，暂不建立连接`);let s=Bc(e,a);if(s.status===`outside`)return o(`door_outside_host_wall`,`门洞超出宿主墙有效区间，不建立空间连接`);if(s.status!==`inside`)return o(`door_host_relation_unresolved`,s.reason??`门洞与宿主墙关系无法确认`);let c=e.resolvedWorldPosition,l=[Math.cos(e.resolvedTangentRadians),Math.sin(e.resolvedTangentRadians)],u=[-l[1],l[0]],d=e.widthMeters,f=[[c[0]-l[0]*d/2,c[1]-l[1]*d/2],[c[0]+l[0]*d/2,c[1]+l[1]*d/2]],p=a.thicknessMeters/2+W.doorPortalSampleClearanceMeters,m=[-.25,0,.25],h=[p,p+W.doorPortalSampleClearanceMeters],g=e=>h.flatMap(t=>m.map(n=>[c[0]+l[0]*d*n+u[0]*t*e,c[1]+l[1]*d*n+u[1]*t*e])),_=g(1),v=g(-1),y=t.rooms.filter(t=>t.levelId===e.levelId&&t.usableForEvaluation),b=r.get(e.levelId),x=q(_,y,b),S=q(v,y,b);x.diagnostic&&i.push({code:`door_side_a_unresolved`,message:x.diagnostic}),S.diagnostic&&i.push({code:`door_side_b_unresolved`,message:S.diagnostic}),x.roomRegionId&&x.roomRegionId===S.roomRegionId&&i.push({code:`door_sides_same_room`,message:`门两侧采样均落入同一 Room Region，不将其作为房间连接边`});let C=Math.min(s.openingStartMeters??1/0,(s.wallLengthMeters??0)-(s.openingEndMeters??0))<=W.doorPortalEndClearanceMeters;C&&i.push({code:`door_near_wall_end`,message:`门洞距离墙端不超过 ${W.doorPortalEndClearanceMeters} m，连接置信度降低`});let w=!!x.roomRegionId&&S.exterior||!!S.roomRegionId&&x.exterior,T=!!(x.roomRegionId&&S.roomRegionId&&x.roomRegionId!==S.roomRegionId),E=w||T;return!E&&!i.length&&i.push({code:`door_portal_unresolved`,message:`门两侧未形成可靠的 Room–Room 或 Room–Exterior 关系`}),{doorId:e.id,pascalSourceId:e.rawPascalId,levelId:e.levelId,hostWallId:a.id,openingCenter:c,openingWidthMeters:d,openingSegment:f,roomRegionAId:x.roomRegionId,roomRegionBId:S.roomRegionId,connectsExterior:w,sideAExterior:x.exterior,sideBExterior:S.exterior,samplePointsA:_,samplePointsB:v,confidence:E?C?`medium`:`high`:`low`,diagnostics:i,usableForConnectivity:E}})}function Y(e,t,n){if(!e.footprint?.length)return null;let r=e=>e.length&&(e[0][0]!==e[e.length-1][0]||e[0][1]!==e[e.length-1][1])?[...e,e[0]]:e,i=e=>Math.abs(e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n[0]*i[1]-i[0]*n[1]},0)/2),a=r(e.footprint),o=i(a);if(o<=W.areaSquareMeters)return null;let s=n.filter(e=>e.levelId===t&&e.usableForEvaluation).map(e=>{try{let t=ls.default.intersection([a],e.polygons);return{roomId:e.roomRegionId,area:t.reduce((e,t)=>e+Math.max(0,i(t[0]??[])-t.slice(1).reduce((e,t)=>e+i(t),0)),0)}}catch{return{roomId:e.roomRegionId,area:0}}}).sort((e,t)=>t.area-e.area);return s[0]&&s[0].area/o>=.5&&(!s[1]||s[1].area<=W.overlapAreaSquareMeters)?s[0].roomId:null}function Bl(e,t,n,r){let i=r===`from`?e.fromLandingCenter:e.toLandingCenter,a=r===`from`?e.fromLandingOutward:e.toLandingOutward,o=e.landingWidthMeters;if(!i||!a||!Number.isFinite(o)||o<=W.lengthMeters)return Y(e,t,n);let s=n.filter(e=>e.levelId===t&&e.usableForEvaluation),c=[-a[1],a[0]],l=[W.stairLandingSampleClearanceMeters,W.stairLandingSampleClearanceMeters+W.stairLandingSampleDepthMeters/2,W.stairLandingSampleClearanceMeters+W.stairLandingSampleDepthMeters].flatMap(e=>[-.25,0,.25].map(t=>[i[0]+a[0]*e+c[0]*o*t,i[1]+a[1]*e+c[1]*o*t])),u=new Map;l.forEach(e=>{let t=s.filter(t=>K(e,t));t.length===1&&u.set(t[0].roomRegionId,(u.get(t[0].roomRegionId)??0)+1)});let d=[...u.entries()].sort((e,t)=>t[1]-e[1]);return d[0]&&d[0][1]>=Math.ceil(l.length/2)&&(!d[1]||d[0][1]>d[1][1])?d[0][0]:null}function Vl(e,t){let n=t.filter(e=>e.usableForConnectivity&&e.connectsExterior),r=new Map(e.doors.map(e=>[e.id,e])),i=n.filter(e=>/\b(main|front|entry|entrance)\b|主入口|入户/i.test([r.get(e.doorId)?.name,r.get(e.doorId)?.openingKind,r.get(e.doorId)?.doorType].filter(Boolean).join(` `))),a=i.length===1?i[0]:n.length===1?n[0]:null,o=[];n.length?a||o.push({code:`multiple_exterior_doors_ambiguous`,message:`识别到 ${n.length} 个外门，但没有唯一可靠的主要入口语义`}):o.push({code:`residential_entrance_unresolved`,message:`没有识别到可靠的 Room–Exterior 门连接`});let s=a?.roomRegionAId??a?.roomRegionBId??null;return{candidateDoorIds:n.map(e=>e.doorId),selectedDoorId:a?.doorId??null,selectedRoomRegionId:s,confidence:a?i.length===1?`high`:`medium`:`low`,diagnostics:o}}function Hl(e,t=il(e)){let n=J(e,t),r=t.rooms.filter(e=>e.usableForEvaluation).map(e=>({nodeId:e.roomRegionId,nodeType:`room`,levelId:e.levelId,roomRegionId:e.roomRegionId}));t.envelopes.filter(e=>e.usableForEvaluation).forEach(e=>r.push({nodeId:Fl(e.levelId),nodeType:`exterior`,levelId:e.levelId}));let i=n.filter(e=>e.usableForConnectivity).map(e=>{let t=e.roomRegionAId??Fl(e.levelId),n=e.roomRegionBId??Fl(e.levelId);return{edgeId:`door-edge:${e.doorId}`,sourceObjectId:e.doorId,connectionType:`door`,fromNodeId:t,toNodeId:n,levelId:e.levelId,confidence:e.confidence,diagnostics:e.diagnostics.map(e=>e.message)}}),a=new Set(e.levels.map(e=>e.id)),o=e.stairs.map(e=>{let n=[],r=!!(e.fromLevelId&&e.toLevelId&&a.has(e.fromLevelId)&&a.has(e.toLevelId));r||n.push({code:`stair_connection_unresolved`,message:`楼梯楼层引用无效：fromLevelId=${e.fromLevelId??`null`}，toLevelId=${e.toLevelId??`null`}`});let i=r?Bl(e,e.fromLevelId,t.rooms,`from`):null,o=r?Bl(e,e.toLevelId,t.rooms,`to`):null;r&&(!i||!o)&&n.push({code:`stair_landing_room_unresolved`,message:`楼层引用有效，但无法在${!i&&!o?`上下层`:i?`到达层`:`起始层`}楼梯口确定唯一 Room Region`});let s=!!(r&&i&&o);return{stairId:e.id,pascalSourceId:e.rawPascalId,fromLevelId:e.fromLevelId,toLevelId:e.toLevelId,fromRoomRegionId:i,toRoomRegionId:o,confidence:s?`medium`:`low`,diagnostics:n,usableForConnectivity:s}});o.filter(e=>e.usableForConnectivity).forEach(e=>i.push({edgeId:`stair-edge:${e.stairId}`,sourceObjectId:e.stairId,connectionType:`stair`,fromNodeId:e.fromRoomRegionId,toNodeId:e.toRoomRegionId,levelId:null,confidence:e.confidence,diagnostics:e.diagnostics.map(e=>e.message)}));let s=Vl(e,n);return{roomAnalysis:t,portals:n,stairConnections:o,nodes:r,edges:i,entrance:s,diagnostics:[...n.flatMap(e=>e.diagnostics),...o.flatMap(e=>e.diagnostics),...s.diagnostics]}}function Ul(e,t){let n=new Map;e.edges.forEach(e=>{n.set(e.fromNodeId,[...n.get(e.fromNodeId)??[],e.toNodeId]),n.set(e.toNodeId,[...n.get(e.toNodeId)??[],e.fromNodeId])});let r=new Set,i=[t];for(;i.length;){let e=i.shift();r.has(e)||(r.add(e),(n.get(e)??[]).forEach(e=>{r.has(e)||i.push(e)}))}return r}var Wl=new WeakMap,Gl=e=>{let t=Wl.get(e);if(t)return t;let n=Hl(e);return Wl.set(e,n),n},Kl=(e,t=[])=>({level:e,score:e===`high`?1:e===`medium`?.75:.4,reasons:t}),ql=(e,t,n,r,i={})=>({ruleId:e,ruleName:t,status:n,severity:n===`issue`?`error`:n===`unable_to_determine`?`warning`:`info`,summary:r,details:[],normalizedObjectIds:[],pascalSourceIds:[],measurements:[],thresholds:[],missingData:[],confidence:Kl(`high`),diagnostics:[],...i}),Jl=/\b(SHAFT|VOID|OPEN TO BELOW|DUCT|CHASE|CAVITY)\b|井道|管井|挑空|构造空腔/i,Yl=/\b(LIVING|FAMILY|DINING|KITCHEN|BED(?:ROOM)?|BATH|TOILET|WC|OFFICE|STUDY|ENTRY|FOYER|HALL|GARAGE|LAUNDRY)\b|客厅|起居|餐厅|厨房|卧室|卫生间|书房|入口|门厅|走廊|车库|洗衣/i;function Xl(e,t){let n=new Map(e.zones.map(e=>[e.id,e]));return t.roomAnalysis.rooms.filter(e=>e.usableForEvaluation).map(e=>{let r=t.roomAnalysis.roomToZoneIds[e.roomRegionId]??[],i=r.map(e=>n.get(e)?.name?.trim()).filter(e=>!!e),a=i.length>0&&i.every(e=>Jl.test(e));return{room:e,zoneIds:r,names:i,excluded:a,usable:i.length>0&&!a,semanticsKnown:i.length>0,main:i.some(e=>Yl.test(e))&&!a}})}function Zl(e,t){return e.levels.flatMap(e=>{let n=t.nodes.filter(t=>t.nodeType===`room`&&t.levelId===e.id).map(e=>e.nodeId),r=new Set(n),i=new Map;t.edges.filter(t=>t.connectionType!==`stair`&&t.levelId===e.id).forEach(e=>{r.has(e.fromNodeId)&&r.has(e.toNodeId)&&(i.set(e.fromNodeId,[...i.get(e.fromNodeId)??[],e.toNodeId]),i.set(e.toNodeId,[...i.get(e.toNodeId)??[],e.fromNodeId]))});let a=new Set,o=0;return n.forEach(e=>{if(a.has(e))return;o++;let t=[e];for(;t.length;){let e=t.shift();a.has(e)||(a.add(e),(i.get(e)??[]).forEach(e=>t.push(e)))}}),[{name:`levelRoomCount`,value:n.length,normalizedObjectId:e.id},{name:`levelConnectivityComponentCount`,value:o,normalizedObjectId:e.id},{name:`levelSameFloorConnected`,value:n.length>0&&o===1,normalizedObjectId:e.id}]})}var Ql=[e=>{let t=Gl(e),n=Xl(e,t).filter(e=>e.main),r=t.stairConnections.filter(e=>!e.usableForConnectivity),i=t.stairConnections.filter(e=>e.usableForConnectivity),a=Zl(e,t);if(!n.length)return ql(`G3-001`,`主要空间均可正常到达`,`unable_to_determine`,`没有足够的主要空间用途语义用于可达性检查`,{missingData:[`主要空间用途分类`],confidence:Kl(`low`),diagnostics:[{severity:`warning`,code:`main_space_semantics_unresolved`,message:`没有通过结构化用途或严格名称语义识别到主要空间`,normalizedObjectIds:[],origin:`insufficient_information`}]});let o=t.portals.flatMap(e=>{let n=e.roomRegionAId??e.roomRegionBId;return e.usableForConnectivity&&e.connectsExterior&&e.levelId&&n?[{portal:e,roomRegionId:n,reached:Ul(t,n)}]:[]});if(!o.length)return ql(`G3-001`,`主要空间均可正常到达`,`unable_to_determine`,`没有识别到可作为起点的可靠外门`,{measurements:[{name:`mainRoomCount`,value:n.length},{name:`entranceCandidateCount`,value:0},{name:`resolvedDoorPortalCount`,value:t.portals.filter(e=>e.usableForConnectivity).length},{name:`unresolvedStairCount`,value:r.length},...a],missingData:[`至少一个可靠的 Room–Exterior 门连接`],confidence:Kl(`low`),diagnostics:[{severity:`warning`,code:`reliable_exterior_portal_unavailable`,message:`没有可确认连接室内 Room 与 Exterior 的门洞，无法开始可达性检查`,normalizedObjectIds:[],origin:`insufficient_information`}]});let s=o.map(e=>({...e,sameLevel:n.filter(t=>t.room.levelId===e.portal.levelId),reachableMainRooms:n.filter(t=>e.reached.has(t.room.roomRegionId))})),c=[...s].sort((e,t)=>t.reachableMainRooms.length-e.reachableMainRooms.length)[0],l=s.find(e=>e.sameLevel.every(t=>e.reached.has(t.room.roomRegionId))),u=s.find(e=>e.reachableMainRooms.length===n.length),d=n.filter(e=>e.room.levelId!==c.portal.levelId),f=c.sameLevel.filter(e=>!c.reached.has(e.room.roomRegionId)),p=d.filter(e=>!c.reached.has(e.room.roomRegionId)),m=d.length>0&&(r.length>0||i.length===0),h=m?[]:p,g=!l||!m&&!u?`issue`:m?`unable_to_determine`:`pass`,_=[...f,...h],v=[..._.map(e=>({severity:`error`,code:`main_room_unreachable`,message:`${e.names.join(` / `)} 无法从选出的外门通过连续空间连接到达`,normalizedObjectIds:[e.room.roomRegionId,...e.zoneIds],origin:`source_data`,recommendation:`检查沿途房门、开放连接和楼梯连接是否完整。`})),...r.map(e=>({severity:`warning`,code:`stair_connection_unresolved`,message:e.diagnostics.map(e=>e.message).join(`；`),normalizedObjectIds:[e.stairId],field:`stair level references / landing Room Regions`,actualValue:`${e.fromLevelId??`null`}/${e.toLevelId??`null`}`,expectedValue:`两个现有 Level ID 与两端各一个可靠落地区域`,origin:`source_data`,recommendation:`检查楼梯上下层引用、楼梯口位置以及两层 Room Region 后再评价跨层可达性。`})),...m?d.map(t=>({severity:`warning`,code:`cross_level_room_reachability_unresolved`,message:`${t.names.join(` / `)} 位于 ${e.levels.find(e=>e.id===t.room.levelId)?.name??t.room.levelId}；同层门网已连通，但楼梯连接尚未可靠建立，无法确认能否从其他楼层到达`,normalizedObjectIds:[t.room.roomRegionId,...t.zoneIds],origin:`insufficient_information`,recommendation:`先定位楼梯并核对上下层引用与两端落地区域；这不代表该空间已经不可达。`})):[]];return ql(`G3-001`,`主要空间均可正常到达`,g,g===`pass`?`${n.length} 个主要空间均可从至少一个可靠外门通过空间连接图到达`:g===`issue`?`${_.length} 个主要空间无法由同一外门通过拓扑连接完整到达`:`至少一个外门可覆盖入口层同层主要空间，但 ${d.length} 个跨层主要空间因楼梯连接不可靠而无法判断`,{details:v.map(e=>e.message),normalizedObjectIds:_.map(e=>e.room.roomRegionId),pascalSourceIds:[...new Set(_.flatMap(e=>e.room.pascalSourceIds))],measurements:[{name:`mainRoomCount`,value:n.length},{name:`entranceCandidateCount`,value:o.length},{name:`externalDoorCanReachAllMainSpaces`,value:!!u},{name:`sameLevelMainRoomCount`,value:c.sameLevel.length,normalizedObjectId:c.portal.levelId??void 0},{name:`sameLevelReachableCount`,value:c.sameLevel.length-f.length,normalizedObjectId:c.portal.levelId??void 0},{name:`sameLevelUnreachableCount`,value:f.length,normalizedObjectId:c.portal.levelId??void 0},{name:`crossLevelMainRoomCount`,value:d.length},{name:`crossLevelUnreachableCount`,value:m?`unable_to_determine`:p.length},{name:`validStairConnectionCount`,value:i.length},{name:`unresolvedStairCount`,value:r.length},...a],missingData:m?r.flatMap(e=>e.diagnostics.map(e=>e.message)):[],confidence:Kl(g===`pass`?`medium`:m?`low`:`high`,[`只做拓扑可达，不检查家具避障、门扇碰撞或通道净宽；不要求定义唯一主入口`]),diagnostics:v})},e=>{let t=Gl(e),n=Xl(e,t),r=new Map;t.edges.forEach(e=>{r.set(e.fromNodeId,(r.get(e.fromNodeId)??0)+1),r.set(e.toNodeId,(r.get(e.toNodeId)??0)+1)});let i=t.portals.filter(e=>!e.usableForConnectivity),a=n.filter(e=>!e.semanticsKnown),o=n.filter(e=>e.usable),s=o.filter(e=>!(r.get(e.room.roomRegionId)??0)&&i.some(t=>t.hostWallId&&e.room.boundaryWallIds.includes(t.hostWallId))),c=o.filter(e=>!(r.get(e.room.roomRegionId)??0)&&!s.includes(e)),l=c.length?`issue`:s.length||a.length?`unable_to_determine`:o.length?`pass`:`not_applicable`,u=[...c.map(e=>({severity:`error`,code:`usable_room_without_entrance`,message:`${e.names.join(` / `)} 所在空间没有任何有效门洞、开放连接或楼梯连接`,normalizedObjectIds:[e.room.roomRegionId,...e.zoneIds],origin:`source_data`,recommendation:`检查是否遗漏房门、门的宿主关系，或该区域是否属于不需要进入的建筑构造空间。`})),...s.map(e=>({severity:`warning`,code:`room_entrance_unresolved`,message:`${e.names.join(` / `)} 所在空间邻近未解析门洞，不能确认是否无入口`,normalizedObjectIds:[e.room.roomRegionId,...e.zoneIds],origin:`insufficient_information`,recommendation:`先修复邻近门的宿主墙、位置或曲墙门定位。`})),...a.map(e=>({severity:`warning`,code:`room_use_semantics_unresolved`,message:`${e.room.roomRegionId} 没有可靠 Zone 用途，不能判断是否要求人员进入`,normalizedObjectIds:[e.room.roomRegionId],origin:`insufficient_information`}))];return ql(`G3-005`,`已定义的使用空间不能成为无入口封闭空间`,l,c.length?`发现 ${c.length} 个已定义使用空间没有有效入口`:s.length?`${s.length} 个使用空间因邻近门连接未解析而无法确认入口`:a.length?`${a.length} 个 Room Region 缺少可靠用途语义`:`${o.length} 个可使用 Room Region 均具有至少一个有效入口`,{details:u.map(e=>e.message),normalizedObjectIds:c.map(e=>e.room.roomRegionId),pascalSourceIds:[...new Set(c.flatMap(e=>e.room.pascalSourceIds))],measurements:[{name:`usableRoomCount`,value:o.length},{name:`roomWithoutEntranceCount`,value:c.length},{name:`roomWithUnresolvedEntranceCount`,value:s.length},{name:`roomUseUnknownCount`,value:a.length},...o.map(e=>({name:`entranceCount`,value:r.get(e.room.roomRegionId)??0,normalizedObjectId:e.room.roomRegionId}))],missingData:[...s.map(e=>`${e.room.roomRegionId}: 可靠门连接`),...a.map(e=>`${e.room.roomRegionId}: 使用空间语义`)],confidence:Kl(l===`pass`?`medium`:c.length?`high`:`low`,[`只检查拓扑入口，不检查家具阻挡、门扇碰撞或净宽`]),diagnostics:u})}],$l=e=>e.length>2?[...e,e[0]]:e,eu=e=>Math.abs(e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n[0]*i[1]-i[0]*n[1]},0)/2),tu=(e,t)=>{try{return ls.default.intersection([$l(e)],[$l(t)]).reduce((e,t)=>e+eu(t[0]??[]),0)}catch{return null}},nu=(e,t,n)=>{let r=t[0]-e[0],i=t[1]-e[1],a=Math.hypot(r,i);if(a<=W.lengthMeters)return[];let o=-i/a*n/2,s=r/a*n/2;return[[e[0]+o,e[1]+s],[t[0]+o,t[1]+s],[t[0]-o,t[1]-s],[e[0]-o,e[1]-s]]},ru=(e,t,n,r)=>{let i=r>=n?1:-1;return[e,...Array.from({length:19},(a,o)=>{let s=n+i*Math.abs(r-n)*o/18;return[e[0]+Math.cos(s)*t,e[1]+Math.sin(s)*t]})]};function iu(e){let t=e.walls.map(e=>({objectId:e.id,pascalSourceId:e.rawPascalId,levelId:e.levelId,objectType:`wall`,rawCategory:null,footprint:e.footprintValidation.footprint,mobility:`fixed`,classificationConfidence:`high`,diagnostics:e.footprintValidation.valid?[]:[`wall_footprint_invalid`],usableForCollision:e.footprintValidation.valid})),n=[...e.columns.map(e=>({item:e,objectType:`column`,mobility:`fixed`,classificationConfidence:`high`})),...e.equipment.map(e=>({item:e,objectType:`equipment`,mobility:`unknown`,classificationConfidence:e.category?`medium`:`low`})),...e.furniture.map(e=>({item:e,objectType:`furniture`,mobility:`movable`,classificationConfidence:e.category?`medium`:`low`}))].map(({item:e,objectType:t,mobility:n,classificationConfidence:r})=>{let i=Jc(e),a=t===`column`||!!e.category;return{objectId:e.id,pascalSourceId:e.rawPascalId,levelId:e.levelId,objectType:t,rawCategory:e.category??null,footprint:i??[],mobility:n,classificationConfidence:r,diagnostics:[...i?[]:[`item_footprint_unavailable`],...a?[]:[`item_category_unreliable`]],usableForCollision:!!(i&&a)}}),r=e.shelves.map(e=>({objectId:e.id,pascalSourceId:e.rawPascalId,levelId:e.levelId,objectType:`fixed-cabinet`,rawCategory:e.style??null,footprint:e.footprint,mobility:`fixed`,classificationConfidence:`high`,diagnostics:e.footprint.length>=3?[]:[`shelf_footprint_unavailable`],usableForCollision:e.footprint.length>=3})),i=e.shafts.map(e=>({objectId:e.id,pascalSourceId:e.rawPascalId,levelId:e.levelId,objectType:`shaft`,rawCategory:null,footprint:e.outline,mobility:`fixed`,classificationConfidence:`high`,diagnostics:e.outline.length>=3?[]:[`shaft_footprint_unavailable`],usableForCollision:e.outline.length>=3}));return[...t,...n,...r,...i]}function au(e){let t=new Map(e.walls.map(e=>[e.id,e]));return e.doors.map(e=>{let n=e.hostWallId?t.get(e.hostWallId):void 0,r=[];if(e.doorType!==`hinged`&&e.doorType!==`double`&&e.doorType!==`french`)return{doorId:e.id,pascalSourceId:e.rawPascalId,levelId:e.levelId,hostWallId:e.hostWallId,hingePoint:null,portalSegment:null,closedLeafSegment:null,openLeafSegment:null,swingPolygon:[],requiredSwingPolygon:[],leaves:[],entryPolygon:[],openingAngleRadians:null,confidence:`high`,diagnostics:[`non_swing_door_not_applicable`],usableForEvaluation:!1};let i=e.effectiveHingesSide??e.hingesSide,a=e.effectiveSwingDirection??e.swingDirection;if(!n?.start||!n.end||Math.abs(n.curveOffsetMeters)>W.lengthMeters||!e.resolvedWorldPosition||!Number.isFinite(e.widthMeters)||!i||!a||!Number.isFinite(e.swingAngleRadians)||(e.swingAngleRadians??0)<W.doorOperationMinimumAngleRadians)return{doorId:e.id,pascalSourceId:e.rawPascalId,levelId:e.levelId,hostWallId:e.hostWallId,hingePoint:null,portalSegment:null,closedLeafSegment:null,openLeafSegment:null,swingPolygon:[],requiredSwingPolygon:[],leaves:[],entryPolygon:[],openingAngleRadians:e.swingAngleRadians,confidence:`low`,diagnostics:[`door_operation_data_unavailable`],usableForEvaluation:!1};let[o,s]=n.start,[c,l]=n.end,u=Math.hypot(c-o,l-s);if(u<=W.lengthMeters)return{doorId:e.id,pascalSourceId:e.rawPascalId,levelId:e.levelId,hostWallId:e.hostWallId,hingePoint:null,portalSegment:null,closedLeafSegment:null,openLeafSegment:null,swingPolygon:[],requiredSwingPolygon:[],leaves:[],entryPolygon:[],openingAngleRadians:e.swingAngleRadians,confidence:`low`,diagnostics:[`host_wall_invalid`],usableForEvaluation:!1};let d=(c-o)/u,f=(l-s)/u,p=e.widthMeters,m=e.resolvedWorldPosition,h=i===`left`?[m[0]-d*p/2,m[1]-f*p/2]:[m[0]+d*p/2,m[1]+f*p/2],g=i===`left`?[m[0]+d*p/2,m[1]+f*p/2]:[m[0]-d*p/2,m[1]-f*p/2],_=Math.atan2(g[1]-h[1],g[0]-h[0]),v=a===`inward`?1:-1,y=v*(i===`left`?1:-1),b=_+y*e.swingAngleRadians,x=[h[0]+Math.cos(b)*p,h[1]+Math.sin(b)*p],S=[m[0]-d*p/2,m[1]-f*p/2],C=[m[0]+d*p/2,m[1]+f*p/2],w=_+y*Math.min(e.swingAngleRadians,W.doorOperationMinimumAngleRadians);if(e.doorType===`double`||e.doorType===`french`){let t=p/2,n=v,r=[{hinge:S,end:m,rotationSign:n},{hinge:C,end:m,rotationSign:-n}].map(({hinge:n,end:r,rotationSign:i},a)=>{let o=Math.atan2(r[1]-n[1],r[0]-n[0]),s=o+i*e.swingAngleRadians,c=o+i*Math.min(e.swingAngleRadians,W.doorOperationMinimumAngleRadians),l=[n[0]+Math.cos(s)*t,n[1]+Math.sin(s)*t];return{leafIndex:a,hingePoint:n,closedLeafSegment:[n,r],openLeafSegment:[n,l],swingPolygon:ru(n,t,o,s),requiredSwingPolygon:ru(n,t,o,c)}});return{doorId:e.id,pascalSourceId:e.rawPascalId,levelId:e.levelId,hostWallId:e.hostWallId,hingePoint:null,portalSegment:[S,C],closedLeafSegment:null,openLeafSegment:null,swingPolygon:[],requiredSwingPolygon:[],leaves:r,entryPolygon:nu(S,C,W.doorEntryDepthMeters*2),openingAngleRadians:e.swingAngleRadians,confidence:`medium`,diagnostics:[`double_door_equal_leaf_assumption`],usableForEvaluation:!0}}let T={leafIndex:0,hingePoint:h,closedLeafSegment:[h,g],openLeafSegment:[h,x],swingPolygon:ru(h,p,_,b),requiredSwingPolygon:ru(h,p,_,w)};return{doorId:e.id,pascalSourceId:e.rawPascalId,levelId:e.levelId,hostWallId:e.hostWallId,hingePoint:h,portalSegment:[S,C],closedLeafSegment:T.closedLeafSegment,openLeafSegment:T.openLeafSegment,swingPolygon:T.swingPolygon,requiredSwingPolygon:T.requiredSwingPolygon,leaves:[T],entryPolygon:nu(S,C,W.doorEntryDepthMeters*2),openingAngleRadians:e.swingAngleRadians,confidence:`medium`,diagnostics:r,usableForEvaluation:!0}})}var ou=(e,t)=>e.leaves.map(e=>nu(t===`open`?e.openLeafSegment[0]:e.closedLeafSegment[0],t===`open`?e.openLeafSegment[1]:e.closedLeafSegment[1],W.doorLeafThicknessMeters)),su=(e,t,n,r,i={})=>({ruleId:e,ruleName:t,status:n,severity:n===`issue`?`error`:n===`unable_to_determine`?`warning`:`info`,summary:r,details:[],normalizedObjectIds:[],pascalSourceIds:[],measurements:[],thresholds:[],missingData:[],confidence:{level:n===`pass`?`medium`:`low`,score:n===`pass`?.75:.4,reasons:[`仅做平面几何检查，不模拟人体、门锁、把手或施工误差`]},diagnostics:[],...i}),cu=(e,t)=>{let n=[...e.doors,...e.walls,...e.furniture,...e.equipment,...e.columns,...e.shelves,...e.shafts];return[...new Set(t.map(e=>n.find(t=>t.id===e)?.rawPascalId??e))]},lu=e=>e.leaves.map(e=>e.requiredSwingPolygon),uu=(e,t)=>lu(e).reduce((e,n)=>e+(tu(n,t)??0),0),du=(e,t)=>e.reduce((e,n)=>e+t.reduce((e,t)=>e+(tu(n,t)??0),0),0),fu=e=>{let t=iu(e),n=au(e),r=e.doors.filter(e=>e.resolvedWorldPosition&&Number.isFinite(e.resolvedTangentRadians)&&Number.isFinite(e.widthMeters)&&e.widthMeters>0),i=r.map(e=>{let r=n.find(t=>t.doorId===e.id),i=Math.cos(e.resolvedTangentRadians??0),a=Math.sin(e.resolvedTangentRadians??0),o=e.resolvedWorldPosition,s=e.widthMeters,c=[o[0]-i*s/2,o[1]-a*s/2],l=[o[0]+i*s/2,o[1]+a*s/2],u=r?.entryPolygon?.length?r.entryPolygon:[[c[0]- -a*W.doorEntryDepthMeters,c[1]+i*W.doorEntryDepthMeters],[l[0]- -a*W.doorEntryDepthMeters,l[1]+i*W.doorEntryDepthMeters],[l[0]+-a*W.doorEntryDepthMeters,l[1]-i*W.doorEntryDepthMeters],[c[0]+-a*W.doorEntryDepthMeters,c[1]-i*W.doorEntryDepthMeters]],d=t.filter(t=>t.levelId===e.levelId&&t.objectId!==e.hostWallId&&t.footprint.length>=3).map(e=>({obstacle:e,area:tu(u,e.footprint)??0})).filter(e=>e.area>W.doorCollisionAreaSquareMeters),f=d.filter(e=>e.obstacle.usableForCollision),p=d.filter(e=>!e.obstacle.usableForCollision),m=s*W.doorEntryDepthMeters*2;return{door:e,hits:f,uncertainHits:p,ratio:m?Math.min(1,f.reduce((e,t)=>e+t.area,0)/m):0,uncertainRatio:m?Math.min(1,p.reduce((e,t)=>e+t.area,0)/m):0,entryArea:m}}),a=i.filter(e=>e.ratio>=1-W.doorEntryMinimumClearRatio),o=i.filter(e=>e.ratio<1-W.doorEntryMinimumClearRatio&&e.uncertainRatio>=1-W.doorEntryMinimumClearRatio),s=e.doors.filter(e=>!e.resolvedWorldPosition||!Number.isFinite(e.resolvedTangentRadians)||!Number.isFinite(e.widthMeters)||e.widthMeters<=0),c=a.length?`issue`:s.length||o.length?`unable_to_determine`:r.length?`pass`:`not_applicable`,l=[...a.map(({door:e,hits:t,ratio:n})=>({severity:`error`,code:`door_entry_fully_blocked`,message:`${e.name??e.id} 的门口检测区域被 ${t.map(e=>e.obstacle.objectType).join(`、`)} 覆盖 ${(n*100).toFixed(0)}%`,normalizedObjectIds:[e.id,...t.map(e=>e.obstacle.objectId)],origin:`source_data`,recommendation:`移开或调整门口附近的大型物体，保证门洞两侧存在基本可进入区域。`})),...o.map(({door:e,uncertainHits:t,uncertainRatio:n})=>({severity:`warning`,code:`door_entry_obstacle_classification_unreliable`,message:`${e.name??e.id} 的入口区域与低可信类别对象重叠 ${(n*100).toFixed(0)}%，无法确认其是否属于阻挡物`,normalizedObjectIds:[e.id,...t.map(e=>e.obstacle.objectId)],origin:`insufficient_information`,recommendation:`补充关联对象的可靠 category 或固定/可移动属性。`}))];return su(`G3-002`,`空间入口不得被完全阻断`,c,a.length?`发现 ${a.length} 处门口被明确完全阻断`:o.length?`${o.length} 处门口因对象分类不可靠而无法判断`:s.length?`${s.length} 扇门缺少可靠位置或宽度，无法完整核验入口`:`${r.length} 扇门的入口检测区域均保留基本可进入范围`,{details:l.map(e=>e.message),normalizedObjectIds:a.flatMap(e=>[e.door.id,...e.hits.map(e=>e.obstacle.objectId)]),pascalSourceIds:cu(e,a.flatMap(e=>[e.door.id,...e.hits.map(e=>e.obstacle.objectId)])),measurements:[...a.flatMap(e=>[{name:`entryBlockedRatio`,value:e.ratio,normalizedObjectId:e.door.id},{name:`entryArea`,value:e.entryArea,unit:`square-meter`,normalizedObjectId:e.door.id}]),...o.map(e=>({name:`uncertainObstacleCoverageRatio`,value:e.uncertainRatio,normalizedObjectId:e.door.id}))],thresholds:[{name:`entryMinimumClearRatio`,value:W.doorEntryMinimumClearRatio},{name:`entryDepth`,value:W.doorEntryDepthMeters,unit:`meter`}],missingData:[...s.map(e=>`${e.id}: 门洞位置、方向与宽度`),...o.flatMap(e=>e.uncertainHits.map(e=>`${e.obstacle.objectId}: 可靠 category 或 mobility`))],diagnostics:l})},pu=[fu,e=>{let t=au(e),n=iu(e),r=t.filter(e=>e.usableForEvaluation),i=t.filter(e=>!e.usableForEvaluation&&!e.diagnostics.includes(`non_swing_door_not_applicable`)),a=r.flatMap(e=>n.filter(t=>t.usableForCollision&&t.levelId===e.levelId&&t.objectId!==e.hostWallId).map(t=>({operation:e,obstacle:t,area:uu(e,t.footprint)})).filter(e=>e.area>W.doorCollisionAreaSquareMeters)),o=r.flatMap(e=>n.filter(t=>!t.usableForCollision&&t.footprint.length>=3&&t.levelId===e.levelId&&t.objectId!==e.hostWallId).map(t=>({operation:e,obstacle:t,area:uu(e,t.footprint)})).filter(e=>e.area>W.doorCollisionAreaSquareMeters)),s=a.length?`issue`:i.length||o.length?`unable_to_determine`:r.length?`pass`:`not_applicable`,c=[...a.map(({operation:e,obstacle:t,area:n})=>({severity:`error`,code:`door_swing_blocked`,message:`门扇开启扫掠与${t.objectType}相交 ${n.toFixed(3)} m²`,normalizedObjectIds:[e.doorId,t.objectId],origin:t.mobility===`movable`?`insufficient_information`:`source_data`,recommendation:t.mobility===`movable`?`检查该家具是否为固定摆放；若需保留，应调整门的开启方向或家具位置。`:`调整门、固定构件或柜体位置，保证门扇能达到基本开启角度。`})),...i.map(e=>({severity:`warning`,code:e.diagnostics[0]??`door_operation_data_unavailable`,message:e.diagnostics.includes(`double_door_leaf_relation_unavailable`)?`双开门只有总门宽和单组开向，缺少两片门扇各自的铰链与开启关系`:`平开门缺少可靠的铰链侧、开启方向、角度或直墙宿主`,normalizedObjectIds:[e.doorId],origin:`insufficient_information`,recommendation:`补充可独立描述每片门扇的铰链、宽度和开启方向后重新评价。`})),...o.map(({operation:e,obstacle:t,area:n})=>({severity:`warning`,code:`door_swing_obstacle_classification_unreliable`,message:`门扇基本扫掠与低可信类别对象相交 ${n.toFixed(3)} m²，无法确认是否构成实际阻挡`,normalizedObjectIds:[e.doorId,t.objectId],origin:`insufficient_information`,recommendation:`补充对象 category 或固定/可移动属性后重新评价。`})),...r.filter(e=>e.diagnostics.includes(`double_door_equal_leaf_assumption`)).map(e=>({severity:`info`,code:`double_door_equal_leaf_assumption`,message:`该双开门按两片等宽门扇计算，每片门扇宽度取门洞总宽的一半，并使用JSON中的统一开向与90°开启角度`,normalizedObjectIds:[e.doorId],origin:`rule`,recommendation:`若实际为不等宽子母门，应补充每片门扇数据后重新检查。`}))],l=[...new Set(a.flatMap(e=>[e.operation.doorId,e.obstacle.objectId]))];return su(`G3-007`,`平开门应能达到基本开启状态`,s,a.length?`发现 ${new Set(a.map(e=>e.operation.doorId)).size} 扇平开门无法完成基本开启`:i.length?`${i.length} 扇门缺少可靠的门扇操作关系`:o.length?`${new Set(o.map(e=>e.operation.doorId)).size} 扇门因障碍物分类不可靠而无法判断`:r.length?`${r.length} 扇平开门均可达到基本开启状态`:`当前没有适用的平开门`,{details:c.map(e=>e.message),normalizedObjectIds:l,pascalSourceIds:cu(e,l),measurements:[{name:`blockedDoorCount`,value:new Set(a.map(e=>e.operation.doorId)).size},{name:`collisionObjectCount`,value:a.length},{name:`usableSwingDoorCount`,value:r.length},{name:`unresolvedSwingDoorCount`,value:i.length},{name:`uncertainObstacleCollisionCount`,value:o.length},...a.map(e=>({name:`swingCollisionArea`,value:e.area,unit:`square-meter`,normalizedObjectId:e.operation.doorId}))],thresholds:[{name:`basicOpeningAngle`,value:W.doorOperationMinimumAngleRadians,unit:`radian`},{name:`collisionArea`,value:W.doorCollisionAreaSquareMeters,unit:`square-meter`}],missingData:[...i.map(e=>`${e.doorId}: ${e.diagnostics.includes(`double_door_leaf_relation_unavailable`)?`两片门扇各自的铰链、宽度与开启关系`:`铰链侧、开启方向或开启角度`}`),...o.map(e=>`${e.obstacle.objectId}: 可靠 category 或 mobility`)],diagnostics:c})},e=>{let t=au(e),n=t.filter(e=>e.usableForEvaluation),r=t.filter(e=>!e.usableForEvaluation&&!e.diagnostics.includes(`non_swing_door_not_applicable`)),i=n.flatMap((e,t)=>n.slice(t+1).filter(t=>t.levelId===e.levelId).map(t=>({operation:e,other:t,aHitsClosedB:du(lu(e),ou(t,`closed`)),bHitsClosedA:du(lu(t),ou(e,`closed`)),sweepOverlap:du(lu(e),lu(t))})).filter(e=>e.sweepOverlap>W.doorCollisionAreaSquareMeters)),a=i.filter(e=>e.aHitsClosedB>W.doorCollisionAreaSquareMeters&&e.bHitsClosedA>W.doorCollisionAreaSquareMeters),o=i.filter(e=>!a.includes(e)),s=a.length?`issue`:r.length?`unable_to_determine`:n.length?`pass`:`not_applicable`,c=[...a.map(e=>({severity:`error`,code:`door_leaf_severe_interlock`,message:`两扇门各自达到基本开启角度时都会撞到另一扇处于关闭状态的门扇`,normalizedObjectIds:[e.operation.doorId,e.other.doorId],origin:`source_data`,recommendation:`调整其中一扇门的铰链侧、开启方向或位置，避免两扇门相互锁死。`})),...o.map(e=>({severity:`info`,code:`door_sweeps_overlap_sequential_use_possible`,message:`两扇门的扫掠区域重叠 ${e.sweepOverlap.toFixed(3)} m²，但未形成双向门扇互锁`,normalizedObjectIds:[e.operation.doorId,e.other.doorId],origin:`rule`,recommendation:`本轮不作为 G3 问题；可在后续 S1 中评价顺序开关的便利性。`})),...r.map(e=>({severity:`warning`,code:e.diagnostics[0]??`door_operation_data_unavailable`,message:`缺少可靠门扇操作几何，无法排除该门与相邻门的严重互锁`,normalizedObjectIds:[e.doorId],origin:`insufficient_information`,recommendation:`补充每片门扇的铰链、宽度和开向后重新评价。`})),...n.filter(e=>e.diagnostics.includes(`double_door_equal_leaf_assumption`)).map(e=>({severity:`info`,code:`double_door_equal_leaf_assumption`,message:`该双开门按两片等宽门扇和JSON现有开向参与互锁检查`,normalizedObjectIds:[e.doorId],origin:`rule`}))];return su(`G3-008`,`不存在严重门扇互锁`,s,a.length?`发现 ${a.length} 组严重门扇互锁`:r.length?`${r.length} 扇门缺少可靠操作几何，无法完整排除严重互锁`:n.length?`未发现严重门扇互锁${o.length?`；${o.length} 组扫掠重叠仅保留诊断`:``}`:`当前没有适用的平开门`,{details:c.map(e=>e.message),normalizedObjectIds:a.flatMap(e=>[e.operation.doorId,e.other.doorId]),pascalSourceIds:cu(e,a.flatMap(e=>[e.operation.doorId,e.other.doorId])),measurements:[{name:`severeInterlockCount`,value:a.length},{name:`sequentialUseOverlapCount`,value:o.length},{name:`unresolvedDoorOperationCount`,value:r.length},...a.map(e=>({name:`mutualClosedLeafCollisionArea`,value:Math.min(e.aHitsClosedB,e.bHitsClosedA),unit:`square-meter`,normalizedObjectId:e.operation.doorId}))],thresholds:[{name:`collisionArea`,value:W.doorCollisionAreaSquareMeters,unit:`square-meter`}],missingData:r.map(e=>`${e.doorId}: 可靠门扇操作几何`),diagnostics:c})}],mu=/\b(LIVING|FAMILY|DINING|KITCHEN|BED(?:ROOM)?|BATH|TOILET|WC|OFFICE|STUDY|ENTRY|FOYER|HALL|LAUNDRY)\b|客厅|起居|餐厅|厨房|卧室|卫生间|书房|入口|门厅|走廊|洗衣/i,hu=/cabinet|counter|kitchen|appliance|toilet|sink|basin|bathtub|shower|vanity|sanitary|plumb|橱柜|台面|洁具|马桶|洗手盆|浴缸|淋浴/i,gu=/toilet|sink|basin|bathtub|shower|vanity|sanitary|plumb|洁具|马桶|洗手盆|浴缸|淋浴/i,_u=/bed|sofa|couch|dining.?table|table|desk|wardrobe|cabinet|床|沙发|餐桌|书桌|衣柜|柜体/i,vu=/chair|stool|ottoman|side.?table|nightstand|椅|凳|脚凳|边几|床头柜/i,yu=/vehicle|car\b|automobile|outdoor|patio|garden|车辆|汽车|室外/i,bu=e=>Math.abs(e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n[0]*i[1]-i[0]*n[1]},0)/2),xu=(e,t,n)=>{let r=n[0]-t[0],i=n[1]-t[1],a=r*r+i*i;if(!a)return Math.hypot(e[0]-t[0],e[1]-t[1]);let o=Math.max(0,Math.min(1,((e[0]-t[0])*r+(e[1]-t[1])*i)/a));return Math.hypot(e[0]-t[0]-o*r,e[1]-t[1]-o*i)},Su=(e,t)=>t.some((n,r)=>xu(e,n,t[(r+1)%t.length])<=1e-7),Cu=(e,t)=>{if(Su(e,t))return!0;let n=!1;for(let r=0,i=t.length-1;r<t.length;i=r++){let a=t[r],o=t[i];a[1]>e[1]!=o[1]>e[1]&&e[0]<(o[0]-a[0])*(e[1]-a[1])/(o[1]-a[1])+a[0]&&(n=!n)}return n},wu=(e,t)=>!!(t[0]&&Cu(e,t[0])&&!t.slice(1).some(t=>Cu(e,t))),Tu=(e,t)=>t.polygons.some(t=>wu(e,t)),Eu=(e,t)=>Math.min(...t.polygons.flatMap(t=>t.flatMap(t=>t.map((n,r)=>xu(e,n,t[(r+1)%t.length]))))),Du=(e,t)=>Cu(e,t.footprint)||t.footprint.some((n,r)=>xu(e,n,t.footprint[(r+1)%t.footprint.length])<W.personRadiusMeters-1e-9),Ou=e=>[e.reduce((e,t)=>e+t[0],0)/e.length,e.reduce((e,t)=>e+t[1],0)/e.length],ku=(e,t)=>`${e}:${t}`;function Au(e){let t=new Map([...e.furniture,...e.equipment,...e.columns,...e.shelves,...e.shafts,...e.walls].map(e=>[e.id,e.name??null]));return iu(e).map(e=>{let n=t.get(e.objectId)??null,r=`${n??``} ${e.rawCategory??``}`,i=bu(e.footprint),a,o;return yu.test(r)?(a=`excluded`,o=`明确车辆或室外对象`):!e.usableForCollision||e.classificationConfidence===`low`?(a=`uncertain`,o=`类别或几何置信度不足`):e.objectType===`column`&&_u.test(n??``)?(a=`uncertain`,o=`对象名称像家具，但源 category 将其标为 Column`):[`wall`,`column`,`shaft`,`fixed-cabinet`].includes(e.objectType)||e.objectType===`equipment`&&hu.test(r)||e.objectType===`furniture`&&gu.test(r)?(a=`fixed`,o=`固定构件、柜体、设备或洁具`):e.objectType===`furniture`&&(_u.test(r)||i>=W.largeFurnitureMinimumAreaSquareMeters)?(a=`large-movable`,o=`大型可移动家具`):vu.test(r)||i<=W.smallObjectMaximumAreaSquareMeters?(a=`small`,o=`小型可移动对象，仅保留诊断`):(a=`uncertain`,o=`无法可靠归入固定或大型可移动障碍`),{...e,name:n,areaSquareMeters:i,role:a,reason:o}})}function ju(e,t){let n=e.polygons.flatMap(e=>e.flatMap(e=>e)),r=n.map(e=>e[0]),i=n.map(e=>e[1]),a=Math.min(...r),o=Math.max(...r),s=Math.min(...i),c=Math.max(...i),l=[],u=new Map,d=Math.ceil((o-a)/W.navigationGridMeters),f=Math.ceil((c-s)/W.navigationGridMeters);for(let n=0;n<=d;n++)for(let r=0;r<=f;r++){let i=[a+n*W.navigationGridMeters,s+r*W.navigationGridMeters];if(!Tu(i,e)||Eu(i,e)<W.personRadiusMeters-W.navigationGridMeters*.25||t.some(e=>Du(i,e)))continue;let o={point:i,i:n,j:r,componentId:-1};l.push(o),u.set(ku(n,r),o)}let p=[];for(let e of l){if(e.componentId>=0)continue;let t=p.length,n=[],r=[e];for(e.componentId=t;r.length;){let e=r.shift();n.push(e);for(let[n,i]of[[1,0],[-1,0],[0,1],[0,-1]]){let a=u.get(ku(e.i+n,e.j+i));a&&a.componentId<0&&(a.componentId=t,r.push(a))}}p.push(n)}return{cells:l,byKey:u,components:p}}function Mu(e,t){let n=e.roomRegionAId===t?e.samplePointsA:e.samplePointsB;return n.length?Ou(n):e.openingCenter}function Nu(e,t){if(!t)return null;let n=null,r=1/0;for(let i of e.cells){let e=Math.hypot(i.point[0]-t[0],i.point[1]-t[1]);e<r&&(r=e,n=i)}return r<=W.portalLandingSearchMeters?n:null}function Pu(e){let t=[...e.components].sort((e,t)=>t.length-e.length)[0];if(!t?.length)return null;let n=Ou(t.map(e=>e.point));return t.reduce((e,t)=>Math.hypot(t.point[0]-n[0],t.point[1]-n[1])<Math.hypot(e.point[0]-n[0],e.point[1]-n[1])?t:e,t[0])}function Fu(e,t){return e.length>0&&!!t&&e.every(Boolean)&&new Set([...e.map(e=>e.componentId),t.componentId]).size===1}function Iu(e,t,n){let r=[t],i=new Map([[ku(t.i,t.j),null]]);for(;r.length;){let t=r.shift();if(t===n)break;for(let[n,a]of[[1,0],[-1,0],[0,1],[0,-1]]){let o=e.byKey.get(ku(t.i+n,t.j+a)),s=o&&ku(o.i,o.j);o&&s&&!i.has(s)&&(i.set(s,ku(t.i,t.j)),r.push(o))}}let a=ku(n.i,n.j);if(!i.has(a))return[];let o=[],s=a;for(;s;){let t=e.byKey.get(s);t&&o.push(t.point),s=i.get(s)??null}return o.reverse()}function Lu(e){let t=Hl(e),n=Au(e),r=new Map(e.zones.map(e=>[e.id,e])),i=[],a=[];for(let e of t.roomAnalysis.rooms.filter(e=>e.usableForEvaluation)){let o=t.portals.filter(t=>t.usableForConnectivity&&(t.roomRegionAId===e.roomRegionId||t.roomRegionBId===e.roomRegionId)),s=t.roomAnalysis.roomToZoneIds[e.roomRegionId]??[],c=s.map(e=>r.get(e)?.name?.trim()).filter(e=>!!e),l=n.filter(t=>t.levelId===e.levelId&&t.objectType!==`wall`&&t.role!==`excluded`&&t.footprint.length>=3&&(t.footprint.some(t=>Tu(t,e))||e.polygons.some(e=>e[0]?.some(e=>Cu(e,t.footprint))))),u=l.filter(e=>e.role===`fixed`),d=l.filter(e=>e.role===`large-movable`),f=l.filter(e=>e.role===`uncertain`),p=l.filter(e=>e.role===`small`),m=ju(e,u),h=ju(e,[...u,...d]),g=ju(e,[...u,...d,...f]),_=o.map(t=>({doorId:t.doorId,point:Mu(t,e.roomRegionId)})),v=_.map(e=>Nu(m,e.point)),y=_.map(e=>Nu(h,e.point)),b=_.map(e=>Nu(g,e.point)),x=Pu(m),S=Pu(h),C=Pu(g),w=Fu(v,x),T=Fu(y,S),E=Fu(b,C),ee=(t,n)=>{let r=l.filter(e=>e.role===`fixed`||t===`large-movable`&&e.role===`large-movable`).filter(e=>e.objectId!==n),i=ju(e,r);return Fu(_.map(e=>Nu(i,e.point)),Pu(i))},te=!T&&w?d.filter(e=>ee(`large-movable`,e.objectId)).map(e=>e.objectId):[],ne=w?[]:u.filter(t=>{let n=ju(e,u.filter(e=>e.objectId!==t.objectId));return Fu(_.map(e=>Nu(n,e.point)),Pu(n))}).map(e=>e.objectId),re=T&&!E?f.map(e=>e.objectId):[],D=[];for(let e=0;e<_.length;e++){let t=y[e],n=_[e];if(S&&t){let e=Iu(h,t,S);D.push({fromId:n.doorId,toId:`room-anchor`,points:e.length?e:[n.point,S.point],status:e.length?`connected`:`blocked`})}else D.push({fromId:n.doorId,toId:`room-anchor`,points:[n.point,...S?[S.point]:[]],status:`blocked`})}let O=[];for(let e=0;e<_.length;e++)for(let t=e+1;t<_.length;t++){let n=_[e],r=_[t],i=v[e]??null,a=v[t]??null,o=y[e]??null,s=y[t]??null,c=!!(i&&a&&i.componentId===a.componentId),l=!!(o&&s&&o.componentId===s.componentId),u=c?Iu(m,i,a):[n.point,r.point],d=l?Iu(h,o,s):[n.point,r.point];O.push({fromDoorId:n.doorId,toDoorId:r.doorId,fixedConnected:c,furnishedConnected:l,fixedPath:u,furnishedPath:d}),D.push({fromId:n.doorId,toId:r.doorId,points:d,status:l?`connected`:`blocked`})}let k=_.map((e,t)=>({doorId:e.doorId,sourcePoint:e.point,fixedLanding:v[t]?.point??null,furnishedLanding:y[t]?.point??null,fixedComponentId:v[t]?.componentId??null,furnishedComponentId:y[t]?.componentId??null})),A=o.length>0&&m.cells.length>0;o.length||a.push(`${e.roomRegionId}: 没有可用于房内路径的可靠 Door Portal`),i.push({roomRegionId:e.roomRegionId,levelId:e.levelId,zoneIds:s,zoneNames:c,mainSpace:c.some(e=>mu.test(e)),gridMeters:W.navigationGridMeters,clearanceRadiusMeters:W.personRadiusMeters,anchorPoint:S?.point??null,portalNodes:k,portalConnections:O,fixedFreeCells:m.cells.map(e=>e.point),navigableFreeCells:h.cells.map(e=>e.point),fixedComponentCount:m.components.length,furnishedComponentCount:h.components.length,fixedConnected:w,furnishedConnected:T,uncertainConnected:E,fixedObstacleIds:u.map(e=>e.objectId),fixedBlockerIds:ne,largeFurnitureBlockerIds:te,uncertainObjectIds:re,ignoredSmallObjectIds:p.map(e=>e.objectId),paths:D,diagnostics:[...m.cells.length?[]:[`room_free_space_empty`],...o.length?[]:[`room_portal_unavailable`],...re.length?[`uncertain_objects_may_block_path`]:[]],usableForEvaluation:A})}return{graph:t,obstacles:n,rooms:i,diagnostics:a}}var Ru=new WeakMap,zu=e=>{let t=Ru.get(e);if(t)return t;let n=Lu(e);return Ru.set(e,n),n},Bu=(e,t,n,r,i={})=>({ruleId:e,ruleName:t,status:n,severity:n===`issue`?`error`:n===`unable_to_determine`?`warning`:`info`,summary:r,details:[],normalizedObjectIds:[],pascalSourceIds:[],measurements:[],thresholds:[{name:`basicPassageWidth`,value:W.basicPassageWidthMeters,unit:`meter`},{name:`personRadius`,value:W.personRadiusMeters,unit:`meter`},{name:`navigationGrid`,value:W.navigationGridMeters,unit:`meter`}],missingData:[],confidence:{level:n===`pass`||n===`issue`?`medium`:`low`,score:n===`pass`?.75:n===`issue`?.7:.4,reasons:[`V0.1 使用平面栅格连通性，不代表规范通道宽度或无障碍审查`]},diagnostics:[],...i}),Vu=e=>e.zoneNames.join(` / `)||e.roomRegionId,Hu=(e,t)=>{let n=[...e.furniture,...e.equipment,...e.columns,...e.shelves,...e.shafts,...e.walls,...e.doors];return[...new Set(t.map(e=>n.find(t=>t.id===e)?.rawPascalId??e))]},Uu=(e,t)=>[e.roomRegionId,...t,...e.portalNodes.map(e=>e.doorId)],Wu=e=>[{name:`participatingRoomCount`,value:e.length},{name:`portalLandingCount`,value:e.reduce((e,t)=>e+t.portalNodes.filter(e=>e.furnishedLanding).length,0)},{name:`internallyConnectedRoomCount`,value:e.filter(e=>e.furnishedConnected).length},{name:`multiComponentRoomCount`,value:e.filter(e=>e.furnishedComponentCount>1).length},...e.flatMap(e=>[{name:`fixedFreeComponentCount`,value:e.fixedComponentCount,normalizedObjectId:e.roomRegionId},{name:`furnishedFreeComponentCount`,value:e.furnishedComponentCount,normalizedObjectId:e.roomRegionId},{name:`portalIds`,value:e.portalNodes.map(e=>e.doorId).join(`,`),normalizedObjectId:e.roomRegionId},{name:`portalSourcePoints`,value:JSON.stringify(e.portalNodes.map(e=>({doorId:e.doorId,point:e.sourcePoint}))),normalizedObjectId:e.roomRegionId},{name:`roomAnchorPoint`,value:e.anchorPoint?JSON.stringify(e.anchorPoint):null,normalizedObjectId:e.roomRegionId},{name:`connectedPortalPairCount`,value:e.portalConnections.filter(e=>e.furnishedConnected).length,normalizedObjectId:e.roomRegionId},{name:`blockedPortalPairCount`,value:e.portalConnections.filter(e=>!e.furnishedConnected).length,normalizedObjectId:e.roomRegionId},{name:`ignoredSmallObjectCount`,value:e.ignoredSmallObjectIds.length,normalizedObjectId:e.roomRegionId}])],Gu=Math.round(W.basicPassageWidthMeters*1e3),X=Math.round(W.personRadiusMeters*1e3),Ku=[e=>{let t=zu(e).rooms.filter(e=>e.mainSpace&&e.portalNodes.length>0),n=t.filter(e=>!e.fixedConnected&&e.fixedBlockerIds.length>0||e.fixedConnected&&!e.furnishedConnected&&e.largeFurnitureBlockerIds.length>0),r=t.filter(e=>!e.usableForEvaluation||e.uncertainObjectIds.length>0||!e.furnishedConnected&&!n.includes(e)),i=n.length?`issue`:r.length?`unable_to_determine`:t.length?`pass`:`not_applicable`,a=[...n.map(e=>({severity:`error`,code:`main_room_internal_path_blocked`,message:`${Vu(e)} 的门口与房间内部或其他必要门口之间没有连续的 ${Gu} mm 基本通行空间（路径中心距障碍物至少 ${X} mm）`,normalizedObjectIds:Uu(e,[...e.fixedBlockerIds,...e.largeFurnitureBlockerIds]),field:`Portal-to-anchor / Portal-to-Portal connectivity`,actualValue:`Portal=${e.portalNodes.map(e=>e.doorId).join(`, `)}；Anchor=${JSON.stringify(e.anchorPoint)}`,expectedValue:`所有必要Portal与内部锚点位于同一自由空间组件`,origin:`source_data`,recommendation:`调整阻挡对象或家具布置，使门口落点连接到同一房内自由空间。`})),...r.map(e=>({severity:`warning`,code:`main_room_navigation_unresolved`,message:`${Vu(e)} 的自由空间或对象分类不足，不能可靠确认房内路径`,normalizedObjectIds:Uu(e,e.uncertainObjectIds),field:`Room geometry / obstacle classification`,actualValue:e.diagnostics.join(`, `)||`unresolved`,expectedValue:`可靠Room、Portal落点和障碍物分类`,origin:`insufficient_information`,recommendation:`核对黄色空间、门口落点及橙色待确认对象的类别和占地。`}))];return Bu(`G3-003`,`主要空间之间的基本通行路径应连续`,i,n.length?`发现 ${n.length} 个主要空间的房内基本路径被截断`:r.length?`${r.length} 个主要空间的房内路径无法可靠判断`:`${t.length} 个主要空间的门口均可连接到房内自由空间`,{details:a.map(e=>e.message),normalizedObjectIds:n.map(e=>e.roomRegionId),pascalSourceIds:Hu(e,n.flatMap(e=>[...e.fixedBlockerIds,...e.largeFurnitureBlockerIds])),measurements:Wu(t),missingData:r.map(e=>`${e.roomRegionId}: 可靠自由空间或对象分类`),diagnostics:a})},e=>{let t=zu(e).rooms.filter(e=>e.portalNodes.length>0&&e.fixedConnected),n=t.filter(e=>!e.furnishedConnected&&e.largeFurnitureBlockerIds.length>0),r=t.filter(e=>e.uncertainObjectIds.length>0||!e.furnishedConnected&&!e.largeFurnitureBlockerIds.length),i=n.length?`issue`:r.length?`unable_to_determine`:t.length?`pass`:`not_applicable`,a=[...n.map(e=>({severity:`error`,code:`large_furniture_blocks_navigation`,message:`${Vu(e)} 仅在移除大型家具后才能恢复门口到房内的 ${Gu} mm 基本通行`,normalizedObjectIds:Uu(e,e.largeFurnitureBlockerIds),field:`fixed-only vs furnished connectivity`,actualValue:`固定障碍可通=${e.fixedConnected}；加入大型家具可通=${e.furnishedConnected}；Portal=${e.portalNodes.map(e=>e.doorId).join(`, `)}`,expectedValue:`加入大型家具后仍保持连通`,origin:`source_data`,recommendation:`移动大型家具，或调整门与家具布局，保留路径中心距障碍物至少 ${X} mm 的基本通行空间。`})),...r.map(e=>({severity:`warning`,code:`movable_obstacle_attribution_unresolved`,message:`${Vu(e)} 的对象分类不足，无法确认是否由大型可移动家具阻断`,normalizedObjectIds:Uu(e,e.uncertainObjectIds),origin:`insufficient_information`,recommendation:`核对橙色对象的类别、尺寸和可移动属性。`}))];return Bu(`G3-004`,`正常通行不得依赖移动大型家具`,i,n.length?`发现 ${n.length} 个房间的基本路径被大型家具截断`:r.length?`${r.length} 个房间的家具阻断归因无法判断`:`${t.length} 个房间的通行不依赖移动大型家具`,{details:a.map(e=>e.message),normalizedObjectIds:n.map(e=>e.roomRegionId),pascalSourceIds:Hu(e,n.flatMap(e=>e.largeFurnitureBlockerIds)),measurements:[...Wu(t),{name:`largeFurnitureBlockedPathCount`,value:n.length}],missingData:r.map(e=>`${e.roomRegionId}: 可靠家具分类`),diagnostics:a})},e=>{let t=zu(e).rooms.filter(e=>e.portalNodes.length>0),n=t.filter(e=>e.usableForEvaluation&&!e.fixedConnected&&e.fixedBlockerIds.length>0),r=t.filter(e=>!e.usableForEvaluation||!e.fixedConnected&&!e.fixedBlockerIds.length),i=n.length?`issue`:r.length?`unable_to_determine`:t.length?`pass`:`not_applicable`,a=[...n.map(e=>({severity:`error`,code:`fixed_object_blocks_navigation`,message:`${Vu(e)} 的 ${Gu} mm 基本路径被固定柜体、设备、洁具或构件截断`,normalizedObjectIds:Uu(e,e.fixedBlockerIds),field:`fixed-obstacle connectivity`,actualValue:`固定障碍可通=${e.fixedConnected}；Portal=${e.portalNodes.map(e=>e.doorId).join(`, `)}`,expectedValue:`固定对象不截断Portal与房间内部的自由空间`,origin:`source_data`,recommendation:`调整固定对象、门口或空间布局，避免日常路径穿越实体对象。`})),...r.map(e=>({severity:`warning`,code:`fixed_obstacle_attribution_unresolved`,message:e.fixedObstacleIds.length?`${Vu(e)} 在路径中心距障碍物 ${X} mm 的条件下没有可靠自由空间；已定位到相关固定设备，但尚不能确认该特殊空间是否适用日常通行检查`:`${Vu(e)} 的固定属性或自由空间不足，无法可靠归因`,normalizedObjectIds:Uu(e,[...e.fixedObstacleIds,...e.uncertainObjectIds]),origin:`insufficient_information`,recommendation:`在图中核对黄色空间和橙色固定设备，并确认该空间是否要求人员日常进入。`}))];return Bu(`G3-006`,`日常通行路径不得穿越实体对象`,i,n.length?`发现 ${n.length} 个房间的路径被固定实体对象截断`:r.length?`${r.length} 个房间的固定障碍归因无法判断`:`${t.length} 个房间未发现固定实体阻断基本路径`,{details:a.map(e=>e.message),normalizedObjectIds:n.map(e=>e.roomRegionId),pascalSourceIds:Hu(e,n.flatMap(e=>e.fixedBlockerIds)),measurements:[...Wu(t),{name:`fixedObjectBlockedPathCount`,value:n.length}],missingData:r.map(e=>`${e.roomRegionId}: 可靠固定属性或自由空间`),diagnostics:a})}],qu=e=>e.length&&(e[0][0]!==e[e.length-1][0]||e[0][1]!==e[e.length-1][1])?[...e,e[0]]:e,Ju=e=>e.reduce((e,t)=>e+Hc(t[0]??[]),0),Yu=(e,t)=>{try{return Ju(ls.default.intersection([qu(e)],t))}catch{return 0}},Xu=(e,t)=>{if(!t.length)return 0;try{let[n,...r]=t.map(e=>[qu(e)]),i=ls.default.union(n,...r);return Ju(ls.default.intersection([qu(e)],i))}catch{return 0}},Zu=e=>[e.category,e.name,e.assetName,...e.functionTags??[],...e.assetTags??[]].filter(Boolean).join(` `).toLowerCase(),Qu=e=>[e.category,...e.functionTags??[],...e.assetTags??[]].filter(Boolean).join(` `).toLowerCase(),$u=[[`dining-chair`,/dining.?chair|餐椅/],[`dining-table`,/dining.?table|餐桌/],[`coffee-table`,/coffee.?table|茶几/],[`tv-cabinet`,/tv.?cabinet|media.?console|电视柜/],[`wardrobe`,/wardrobe|closet|armoire|衣柜/],[`bed`,/(^|\W)(double.?beds?|single.?beds?|master.?beds?|beds?)(\W|$)|床/],[`sofa`,/sofa|couch|沙发/],[`lounge-chair`,/armchair|lounge.?chair|扶手椅/],[`desk`,/desk|office.?table|书桌/]];function ed(e){let t=Zu(e),n=Qu(e),r=$u.find(([,e])=>e.test(t)),i=r?.[0]??`other`,a=r?r[1].test(n):!1,o=e.category===`columns`&&i!==`other`;return{item:e,semantic:i,semanticConfidence:o?a?`medium`:`low`:a?`high`:i===`other`?`low`:`medium`,semanticReason:o?`源 category=${e.category} 与 ${i} 语义冲突；明确functionTags/tags仍支持该语义`:a?`asset category/functionTags/tags 提供明确语义`:i===`other`?`缺少本轮可用家具语义`:`仅名称提供语义`,bedType:i===`bed`?/double.?bed|master.?bed|double-beds|双人/.test(t)?`double`:/single.?bed|single-beds|单人/.test(t)?`single`:`unknown`:`unknown`}}var td=(e,t,n,r,i)=>{let[a,o]=e.resolvedWorldPosition,s=e.resolvedRotationRadians,c=Math.cos(s),l=Math.sin(s);return[[-r/2,-i/2],[r/2,-i/2],[r/2,i/2],[-r/2,i/2]].map(([e,r])=>[a+(t+e)*c+(n+r)*l,o-(t+e)*l+(n+r)*c])};function nd(e){let t=zu(e),n=t.graph.roomAnalysis.rooms.filter(e=>e.usableForEvaluation),r=[...e.furniture,...e.equipment,...e.columns].map(e=>{let t=Jc(e),r=ed(e),i=t?Hc(t):0,a=(t?n.filter(t=>t.levelId===e.levelId).map(e=>({room:e,area:e.polygons.reduce((e,n)=>e+Yu(t,n),0)})).sort((e,t)=>t.area-e.area):[])[0],o=i>0&&a?a.area/i:0;return{...r,footprint:t,roomRegionId:o>=.5?a.room.roomRegionId:null,roomCoverageRatio:o}}),i=[],a=(e,t,n,r,a,o,s=[])=>i.push({useZoneId:`${e.item.id}:${t}:${i.filter(n=>n.ownerObjectId===e.item.id&&n.kind===t).length+1}`,ownerObjectId:e.item.id,roomRegionId:e.roomRegionId,levelId:e.item.levelId,kind:t,polygon:n,relatedObjectIds:s,confidence:r,usableForEvaluation:a,diagnostics:o});for(let e of r){let t=e.item.dimensionsMeters;if(!(e.item.resolvedWorldPosition&&Number.isFinite(e.item.resolvedRotationRadians)&&t?.length===3)||!e.roomRegionId||e.semanticConfidence===`low`)continue;let[n,,r]=t;e.semantic===`bed`?(a(e,`bed-left`,td(e.item,-(n+W.bedAccessDepthMeters)/2,0,W.bedAccessDepthMeters,r),`medium`,!0,[]),a(e,`bed-right`,td(e.item,(n+W.bedAccessDepthMeters)/2,0,W.bedAccessDepthMeters,r),`medium`,!0,[])):e.semantic===`sofa`||e.semantic===`lounge-chair`?a(e,`seating-front`,td(e.item,0,(r+W.seatingAccessDepthMeters)/2,n,W.seatingAccessDepthMeters),`medium`,!0,[]):e.semantic===`dining-chair`&&a(e,`dining-chair-pullout`,td(e.item,0,-(r+W.diningChairPulloutDepthMeters)/2,n,W.diningChairPulloutDepthMeters),`medium`,!0,[`chair_pullout_uses_local_negative_z`])}return new Map(r.filter(e=>e.footprint).map(e=>[e.item.id,e.footprint])),{navigation:t,items:r,useZones:i,assessments:i.map(e=>{let t=n.find(t=>t.roomRegionId===e.roomRegionId),i=Hc(e.polygon),a=t?t.polygons.reduce((t,n)=>t+Yu(e.polygon,n),0):0,o=new Set([e.ownerObjectId,...e.relatedObjectIds]),s=r.filter(t=>t.item.levelId===e.levelId&&t.footprint&&!o.has(t.item.id)).filter(t=>Yu(e.polygon,[t.footprint])>W.overlapAreaSquareMeters),c=Xu(e.polygon,s.map(e=>e.footprint)),l=i>0?Math.min(1,a/i):0,u=i>0?Math.min(1,c/i):1,d=Math.max(0,Math.min(l,1-u));return{zone:e,insideRoomRatio:l,blockedAreaRatio:u,clearRatio:d,blockerIds:s.map(e=>e.item.id),usable:e.usableForEvaluation&&d>=W.furnitureUseZoneClearRatio}}),diagnostics:r.filter(e=>e.semantic!==`other`&&(e.semanticConfidence===`low`||e.semanticReason.includes(`语义冲突`))).map(e=>`${e.item.id}: ${e.semanticReason}`)}}var rd=new WeakMap,id=e=>{let t=rd.get(e);if(t)return t;let n=nd(e);return rd.set(e,n),n},ad=(e,t,n,r,i={})=>({ruleId:e,ruleName:t,status:n,severity:n===`issue`?`error`:n===`unable_to_determine`?`warning`:`info`,summary:r,details:[],normalizedObjectIds:[],pascalSourceIds:[],measurements:[],thresholds:[{name:`basicPassageWidth`,value:W.basicPassageWidthMeters,unit:`meter`},{name:`furnitureUseZoneClearRatio`,value:W.furnitureUseZoneClearRatio},{name:`bedAccessDepth`,value:W.bedAccessDepthMeters,unit:`meter`},{name:`seatingAccessDepth`,value:W.seatingAccessDepthMeters,unit:`meter`},{name:`diningChairPulloutDepth`,value:W.diningChairPulloutDepthMeters,unit:`meter`}],missingData:[],confidence:{level:n===`unable_to_determine`?`low`:`medium`,score:n===`unable_to_determine`?.4:.7,reasons:[`V0.1只判断基本可用性，不评价舒适度或规范符合性`]},diagnostics:[],...i}),od=(e,t)=>[...new Set(t.map(t=>e.find(e=>e.item.id===t)?.item.rawPascalId??t))],sd=(e,t)=>e.navigation.rooms.find(e=>e.roomRegionId===t)?.zoneNames.join(` / `)||t,cd=/BED(?:ROOM)?|MASTER|卧室/i,ld=/LIVING|FAMILY|LOUNGE|客厅|起居/i,ud=/DIN+ING|餐厅/i,dd=(e,t)=>e.navigation.rooms.filter(e=>e.zoneNames.some(e=>t.test(e))),fd=(e,t,n)=>e.assessments.filter(e=>e.zone.ownerObjectId===t&&(!n||e.zone.kind===n)),pd=(e,t,n,r,i,a,o={})=>({severity:e,code:t,message:n,normalizedObjectIds:r,origin:i,recommendation:a,...o}),md=(e,t)=>[{name:`${t}Count`,value:e.items.filter(e=>e.semantic===t).length},{name:`${t}LowConfidenceCount`,value:e.items.filter(e=>e.semantic===t&&e.semanticConfidence===`low`).length}],hd=[e=>{let t=id(e),n=t.items.filter(e=>e.semantic===`bed`),r=n.filter(e=>e.semanticConfidence!==`low`&&e.footprint),i=r.filter(e=>!e.roomRegionId||e.roomCoverageRatio<.98),a=n.filter(e=>e.semanticConfidence===`low`||!e.footprint),o=i.length?`issue`:a.length?`unable_to_determine`:r.length?`pass`:`not_applicable`,s=[...i.map(e=>pd(`error`,`bed_not_fully_inside_room`,`${e.item.name??`床`}只有 ${(e.roomCoverageRatio*100).toFixed(0)}% 的平面占地位于所属房间内`,[e.item.id,...e.roomRegionId?[e.roomRegionId]:[]],`source_data`,`检查床的位置、旋转、尺寸以及卧室边界。`,{field:`bed footprint / Room Region`,actualValue:e.roomCoverageRatio,expectedValue:`>= 0.98`})),...a.map(e=>pd(`warning`,`bed_semantic_or_footprint_unreliable`,`${e.item.name??`床`}的类别或占地不可靠，无法确认是否完整放置`,[e.item.id],`insufficient_information`,`修正家具category或补充可靠尺寸、位置和旋转。`))];return ad(`G3-014`,`床能够完整放置`,o,i.length?`发现 ${i.length} 张床没有完整位于可靠卧室区域内`:a.length?`${a.length} 张疑似床因类别或占地不足无法判断`:`${r.length} 张床均完整位于所属房间内`,{normalizedObjectIds:i.map(e=>e.item.id),pascalSourceIds:od(n,i.map(e=>e.item.id)),details:s.map(e=>e.message),measurements:[...md(t,`bed`),...r.map(e=>({name:`bedRoomCoverageRatio`,value:e.roomCoverageRatio,normalizedObjectId:e.item.id}))],missingData:a.map(e=>`${e.item.id}: 可靠床类别或footprint`),diagnostics:s})},e=>{let t=id(e),n=t.items.filter(e=>e.semantic===`bed`),r=n.filter(e=>e.semanticConfidence!==`low`&&e.footprint&&e.roomRegionId).map(e=>({bed:e,sides:fd(t,e.item.id).filter(e=>e.zone.kind.startsWith(`bed-`))})),i=r.filter(e=>e.sides.length===2&&!e.sides.some(e=>e.usable)),a=n.filter(e=>e.semanticConfidence===`low`||!e.footprint||!e.roomRegionId),o=i.length?`issue`:a.length?`unable_to_determine`:r.length?`pass`:`not_applicable`,s=[...i.map(({bed:e,sides:t})=>pd(`error`,`bed_has_no_usable_access_side`,`${e.item.name??`床`}两侧的600毫米基本上下床区域都不可用`,[e.item.id,...new Set(t.flatMap(e=>e.blockerIds))],`source_data`,`移动床或相邻家具，至少保留一侧基本上下床位置。`,{actualValue:JSON.stringify(t.map(e=>e.clearRatio)),expectedValue:`至少一侧净空比例 >= ${W.furnitureUseZoneClearRatio}`})),...a.map(e=>pd(`warning`,`bed_access_unresolved`,`${e.item.name??`疑似床`}无法生成可靠上下床区域`,[e.item.id],`insufficient_information`,`核对床的类别、尺寸、位置及所属卧室。`))];return ad(`G3-015`,`床至少具有一个有效上下床位置`,o,i.length?`发现 ${i.length} 张床没有可用的基本上下床位置`:a.length?`${a.length} 张疑似床无法判断上下床位置`:`${r.length} 张床至少有一侧可用于基本上下床`,{normalizedObjectIds:i.map(e=>e.bed.item.id),pascalSourceIds:od(n,i.map(e=>e.bed.item.id)),details:s.map(e=>e.message),measurements:r.flatMap(({bed:e,sides:t})=>t.map(t=>({name:`bedAccessClearRatio`,value:t.clearRatio,normalizedObjectId:e.item.id}))),missingData:a.map(e=>`${e.item.id}: 可靠床语义或Room匹配`),diagnostics:s})},e=>{let t=id(e),n=t.items.filter(e=>e.semantic===`bed`),r=n.filter(e=>e.bedType===`double`&&e.semanticConfidence!==`low`),i=n.filter(e=>e.bedType===`unknown`||e.semanticConfidence===`low`),a=r.filter(e=>!fd(t,e.item.id).some(e=>e.usable)),o=r.filter(e=>fd(t,e.item.id).filter(e=>e.usable).length===1),s=a.length?`issue`:i.length?`unable_to_determine`:r.length?`pass`:`not_applicable`,c=[...a.map(e=>pd(`error`,`double_bed_has_no_access`,`${e.item.name??`双人床`}没有任何可用上下床位置，无法满足基本双人使用`,[e.item.id],`source_data`,`至少恢复床的一侧基本上下床区域。`)),...o.map(e=>pd(`info`,`double_bed_one_side_only`,`${e.item.name??`双人床`}目前只有一侧可上下床；本轮仍按基本可用处理，舒适性留给S1`,[e.item.id],`rule`,`如需提升便利性，可在床两侧均留出空间。`)),...i.map(e=>pd(`warning`,`bed_type_unreliable`,`${e.item.name??`床`}缺少可靠单双人类型`,[e.item.id],`insufficient_information`,`补充可靠bed category/functionTags；不要仅依赖模型外观。`))];return ad(`G3-016`,`双人床具备基本双人使用条件`,s,a.length?`发现 ${a.length} 张双人床完全没有上下床位置`:i.length?`${i.length} 张床的单双人类型无法可靠确认`:`${r.length} 张双人床具备至少一个基本上下床位置`,{normalizedObjectIds:a.map(e=>e.item.id),pascalSourceIds:od(n,a.map(e=>e.item.id)),details:c.map(e=>e.message),measurements:[{name:`reliableDoubleBedCount`,value:r.length},{name:`oneSideDoubleBedCount`,value:o.length}],missingData:i.map(e=>`${e.item.id}: 单双人床类型`),diagnostics:c})},e=>{let t=id(e),n=dd(t,cd).filter(e=>e.portalNodes.length),r=n.filter(e=>!e.furnishedConnected),i=n.filter(e=>!e.usableForEvaluation||e.uncertainObjectIds.length),a=r.filter(e=>e.fixedBlockerIds.length||e.largeFurnitureBlockerIds.length),o=a.length?`not_applicable`:i.length?`unable_to_determine`:n.length?`pass`:`not_applicable`,s=[...a.map(e=>pd(`info`,`bedroom_entry_blockage_reported_by_foundation`,`${sd(t,e.roomRegionId)}的入口通行问题已由G3-003/G3-004/G3-006报告，本规则不重复生成问题卡`,[e.roomRegionId,...e.fixedBlockerIds,...e.largeFurnitureBlockerIds],`rule`,`处理基础通行规则中已经定位的阻挡对象。`)),...i.map(e=>pd(`warning`,`bedroom_entry_unresolved`,`${sd(t,e.roomRegionId)}的入口因Room或对象分类不足无法判断`,[e.roomRegionId,...e.uncertainObjectIds],`insufficient_information`,`核对入口Portal、家具类别和占地。`))];return ad(`G3-017`,`家具布置后卧室入口仍可使用`,o,a.length?`卧室入口阻断已由基础通行规则统一报告，本规则不重复报警`:i.length?`${i.length} 个卧室入口无法判断`:`${n.length} 个卧室入口可连接到房内自由空间`,{details:s.map(e=>e.message),measurements:[{name:`bedroomRoomCount`,value:n.length},{name:`bedroomEntryConnectedCount`,value:n.filter(e=>e.furnishedConnected).length}],missingData:i.map(e=>`${e.roomRegionId}: 可靠入口或家具分类`),diagnostics:s})},e=>{let t=id(e),n=t.items.filter(e=>e.semantic===`wardrobe`);return ad(`G3-018`,`衣柜能够正常开启和取物`,`not_applicable`,`当前JSON不提供衣柜门型和开启方向，本阶段已取消衣柜开启判断`,{measurements:md(t,`wardrobe`),diagnostics:n.length?[pd(`info`,`wardrobe_operation_check_disabled`,`已识别 ${n.length} 个衣柜，但不再生成无法判断或问题结果`,[],`rule`,`后续数据结构支持衣柜门型和开向后再启用本规则。`)]:[]})},e=>{let t=id(e),n=t.items.filter(e=>e.semantic===`bed`&&e.roomRegionId).filter(e=>t.navigation.rooms.find(t=>t.roomRegionId===e.roomRegionId)?.zoneNames.some(e=>cd.test(e))),r=fu(e),i=n.filter(e=>t.navigation.rooms.find(t=>t.roomRegionId===e.roomRegionId)?.largeFurnitureBlockerIds.includes(e.item.id)),a=n.flatMap(e=>r.diagnostics.filter(t=>t.code===`door_entry_fully_blocked`&&t.normalizedObjectIds.includes(e.item.id)).map(t=>({bed:e,entry:t}))),o=n.filter(e=>{let n=t.navigation.rooms.find(t=>t.roomRegionId===e.roomRegionId);return!n||!n.usableForEvaluation||!n.portalNodes.length}),s=new Set([...i.map(e=>e.item.id),...a.map(({bed:e})=>e.item.id)]),c=s.size?`not_applicable`:o.length?`unable_to_determine`:n.length?`pass`:`not_applicable`,l=[...i.map(e=>pd(`info`,`bed_path_blockage_reported_by_g3004`,`${e.item.name??`床`}造成的主要路径中断已由G3-004报告，本规则不重复报警`,[e.item.id,e.roomRegionId],`rule`,`处理G3-004中对应的大型家具阻断。`)),...a.map(({bed:e,entry:t})=>pd(`info`,`bed_entry_blockage_reported_by_g3002`,`${e.item.name??`床`}与卧室房门或相邻入口的阻断已由G3-002报告，本规则不重复报警`,[e.item.id,...t.normalizedObjectIds.filter(t=>t!==e.item.id)],`rule`,`处理G3-002中对应的门口阻断。`)),...o.map(e=>pd(`warning`,`bedroom_portal_or_path_unavailable`,`${e.item.name??`床`}所在卧室缺少可靠Door Portal或房内路径`,[e.item.id,e.roomRegionId],`insufficient_information`,`检查卧室房门、套内卫生间入口及Room路径。`)),...n.filter(e=>e.semanticConfidence===`low`&&!o.includes(e)).map(e=>pd(`info`,`bed_semantic_confidence_low_but_not_blocking`,`${e.item.name??`疑似床`}的源category存在冲突，但其几何没有形成明确入口或路径阻断`,[e.item.id,e.roomRegionId],`source_data`,`建议修正家具category；本轮不因未形成阻断而判失败。`))],u=[...new Set(n.flatMap(e=>t.navigation.rooms.find(t=>t.roomRegionId===e.roomRegionId)?.portalNodes.map(e=>e.doorId)??[]))];return ad(`G3-019`,`床不得阻断卧室房门、套内卫生间入口及已建立的主要通行路径`,c,s.size?`相关床阻断已由基础门口或通行规则统一报告`:o.length?`${o.length} 张床缺少可靠卧室入口或路径`:`${n.length} 张床未阻断卧室房门、相邻入口或已建立主要路径`,{details:l.map(e=>e.message),measurements:[{name:`bedroomBedCount`,value:n.length},{name:`checkedBedroomPortalCount`,value:u.length},{name:`duplicatedFoundationFindingCount`,value:s.size}],missingData:o.map(e=>`${e.item.id}: 可靠卧室Door Portal或路径`),diagnostics:l})},e=>{let t=id(e),n=t.items.filter(e=>e.semantic===`sofa`||e.semantic===`lounge-chair`),r=n.map(e=>({seat:e,assessment:fd(t,e.item.id,`seating-front`)[0]})).filter(e=>!!e.assessment),i=r.filter(e=>!e.assessment.usable),a=n.filter(e=>e.semanticConfidence===`low`||!r.some(t=>t.seat.item.id===e.item.id)),o=i.length?`issue`:a.length?`unable_to_determine`:r.length?`pass`:`not_applicable`,s=[...i.map(({seat:e,assessment:t})=>pd(`error`,`seating_front_use_zone_blocked`,`${e.item.name??`主要坐具`}沿家具中心红线方向的450毫米基本进入区只有 ${(t.clearRatio*100).toFixed(0)}% 可用`,[e.item.id,...t.blockerIds],`source_data`,`移动坐具或正前方家具，恢复基本进入区域。`,{actualValue:t.clearRatio,expectedValue:`>= ${W.furnitureUseZoneClearRatio}`})),...a.map(e=>pd(`warning`,`seating_geometry_unavailable`,`${e.item.name??`主要坐具`}缺少可靠类别、尺寸、位置或旋转`,[e.item.id],`insufficient_information`,`补充可靠家具几何后重新评价。`))];return ad(`G3-020`,`客厅主要坐具能够正常使用`,o,i.length?`发现 ${i.length} 件主要坐具的正前方基本进入区被阻挡`:a.length?`${a.length} 件主要坐具缺少可靠几何`:`${r.length} 件主要坐具沿家具朝向具有基本进入区域`,{normalizedObjectIds:i.map(e=>e.seat.item.id),pascalSourceIds:od(n,i.map(e=>e.seat.item.id)),details:s.map(e=>e.message),measurements:[{name:`mainSeatingCount`,value:n.length},...r.map(({seat:e,assessment:t})=>({name:`seatingFrontClearRatio`,value:t.clearRatio,normalizedObjectId:e.item.id}))],missingData:a.map(e=>`${e.item.id}: 可靠类别和几何`),diagnostics:s})},e=>{let t=id(e),n=dd(t,ld).filter(e=>e.portalNodes.length),r=n.filter(e=>!e.furnishedConnected&&e.largeFurnitureBlockerIds.length),i=n.filter(e=>e.uncertainObjectIds.length||!e.usableForEvaluation),a=r.length?`not_applicable`:i.length?`unable_to_determine`:n.length?`pass`:`not_applicable`,o=[...r.map(e=>pd(`info`,`living_path_blockage_reported_by_g3004`,`${sd(t,e.roomRegionId)}的家具通行阻断已由G3-004报告，本规则不重复报警`,[e.roomRegionId,...e.largeFurnitureBlockerIds],`rule`,`处理G3-004中对应问题。`)),...i.map(e=>pd(`warning`,`living_navigation_unresolved`,`${sd(t,e.roomRegionId)}因对象分类不足无法确认主要通行`,[e.roomRegionId,...e.uncertainObjectIds],`insufficient_information`,`核对橙色对象类别和占地。`))];return ad(`G3-021`,`客厅家具不得阻断主要通行`,a,r.length?`客厅阻断已由基础通行规则统一报告`:i.length?`${i.length} 个客厅的家具通行无法判断`:`${n.length} 个客厅的必要Portal保持连通`,{details:o.map(e=>e.message),measurements:[{name:`livingRoomCount`,value:n.length},{name:`livingRoomBlockedCount`,value:r.length}],missingData:i.map(e=>`${e.roomRegionId}: 可靠家具分类`),diagnostics:o})},e=>{let t=id(e),n=t.items.filter(e=>e.semantic===`dining-table`),r=t.items.filter(e=>e.semantic===`dining-chair`),i=n.length?`unable_to_determine`:`not_applicable`,a=n.map(e=>{let t=r.filter(t=>t.roomRegionId&&t.roomRegionId===e.roomRegionId);return pd(`warning`,`planned_dining_capacity_unavailable`,`${e.item.name??`餐桌`}所在Room识别到 ${t.length} 把餐椅，但JSON没有计划使用人数，无法判断座位是否满足计划`,[e.item.id,...t.map(e=>e.item.id)],`insufficient_information`,`提供项目计划用餐人数，或明确餐桌计划座位数。`,{actualValue:t.length,expectedValue:`plannedDiningOccupantCount`})});return ad(`G3-022`,`餐桌具有与计划人数相符的基本座位`,i,n.length?`${n.length} 张餐桌缺少计划使用人数，暂时无法判断座位是否足够`:`当前没有可识别餐桌`,{details:a.map(e=>e.message),measurements:[{name:`diningTableCount`,value:n.length},{name:`diningChairCount`,value:r.length}],missingData:n.map(e=>`${e.item.id}: 计划用餐人数或计划座位数`),diagnostics:a})},e=>{let t=id(e),n=t.items.filter(e=>e.semantic===`dining-chair`),r=n.map(e=>({chair:e,assessment:fd(t,e.item.id,`dining-chair-pullout`)[0]})).filter(e=>!!e.assessment),i=r.filter(e=>!e.assessment.usable),a=n.filter(e=>e.semanticConfidence===`low`||!r.some(t=>t.chair.item.id===e.item.id)),o=i.length?`issue`:a.length?`unable_to_determine`:r.length?`pass`:`not_applicable`,s=[...i.map(({chair:e,assessment:t})=>pd(`error`,`dining_chair_pullout_blocked`,`${e.item.name??`餐椅`}沿家具朝向反方向的600毫米拉出区域只有 ${(t.clearRatio*100).toFixed(0)}% 可用，无法完成基本拉出和入座`,[e.item.id,...t.blockerIds],`source_data`,`移动餐椅或后方家具，恢复基本拉出区域。`,{actualValue:t.clearRatio,expectedValue:`>= ${W.furnitureUseZoneClearRatio}`})),...a.map(e=>pd(`warning`,`dining_chair_geometry_unavailable`,`${e.item.name??`疑似餐椅`}缺少可靠类别、尺寸、位置或旋转，无法生成后方拉出区域`,[e.item.id],`insufficient_information`,`核对餐椅category和几何。`))];return ad(`G3-023`,`餐椅能够完成基本拉出和入座`,o,i.length?`发现 ${i.length} 把餐椅没有基本拉出空间`:a.length?`${a.length} 把餐椅缺少可靠几何`:`${r.length} 把餐椅沿家具朝向反方向具有基本拉出区域`,{normalizedObjectIds:i.map(e=>e.chair.item.id),pascalSourceIds:od(n,i.map(e=>e.chair.item.id)),details:s.map(e=>e.message),measurements:[{name:`evaluatedDiningChairCount`,value:r.length},...r.map(({chair:e,assessment:t})=>({name:`chairPulloutClearRatio`,value:t.clearRatio,normalizedObjectId:e.item.id}))],missingData:a.map(e=>`${e.item.id}: 可靠类别和几何`),diagnostics:s})},e=>{let t=id(e),n=t.navigation.rooms.filter(e=>e.zoneNames.some(e=>ld.test(e))&&e.zoneNames.some(e=>ud.test(e))),r=t.assessments.filter(e=>n.some(t=>t.roomRegionId===e.zone.roomRegionId)&&[`dining-chair-pullout`,`seating-front`].includes(e.zone.kind)),i=r.filter(e=>!e.usable),a=t.items.filter(e=>n.some(t=>t.roomRegionId===e.roomRegionId)&&[`sofa`,`lounge-chair`,`dining-chair`].includes(e.semantic)&&!r.some(t=>t.zone.ownerObjectId===e.item.id)),o=i.length?`issue`:a.length?`unable_to_determine`:n.length?`pass`:`not_applicable`,s=[...i.map(e=>pd(`error`,`composite_function_use_zone_conflict`,`客餐厅复合空间中的坐具或餐椅基本使用区被占用，多个功能不能同时成立`,[e.zone.ownerObjectId,...e.blockerIds,e.zone.roomRegionId],`source_data`,`调整客厅坐具、餐桌、餐椅或通道附近家具。`)),...a.map(e=>pd(`warning`,`composite_furniture_geometry_unavailable`,`${e.item.name??`家具`}没有可靠生成复合功能使用区`,[e.item.id,e.roomRegionId],`insufficient_information`,`核对家具类别、尺寸、位置和旋转。`))];return ad(`G3-024`,`客厅、餐厅和通道等复合功能能够同时成立`,o,i.length?`发现 ${i.length} 处复合功能使用区冲突`:a.length?`${n.length} 个客餐厅复合空间仍有 ${a.length} 件家具几何无法判断`:n.length?`${n.length} 个客餐厅复合空间的基本使用区和通道可以同时成立`:`当前没有识别到同一Room内的客餐厅复合功能`,{normalizedObjectIds:i.map(e=>e.zone.ownerObjectId),details:s.map(e=>e.message),measurements:[{name:`compositeLivingDiningRoomCount`,value:n.length},{name:`compositeUseZoneConflictCount`,value:i.length}],missingData:a.map(e=>`${e.item.id}: 可靠家具类别、尺寸、位置或旋转`),diagnostics:s})}],gd=e=>e.length&&(e[0][0]!==e[e.length-1][0]||e[0][1]!==e[e.length-1][1])?[...e,e[0]]:e,_d=e=>e.reduce((e,t)=>e+Hc(t[0]??[]),0),vd=(e,t)=>{try{return _d(ls.default.intersection([gd(e)],t))}catch{return 0}},yd=(e,t)=>{if(!t.length)return 0;try{let[n,...r]=t.map(e=>[gd(e)]),i=ls.default.union(n,...r);return _d(ls.default.intersection([gd(e)],i))}catch{return 0}},bd=(e,t)=>{let n=!1;for(let r=0,i=t.length-1;r<t.length;i=r++){let a=t[r],o=t[i];a[1]>e[1]!=o[1]>e[1]&&e[0]<(o[0]-a[0])*(e[1]-a[1])/(o[1]-a[1])+a[0]&&(n=!n)}return n},Z=e=>[e.category,e.name,e.assetName,e.assetId,...e.functionTags??[],...e.assetTags??[]].filter(Boolean).join(` `).toLowerCase(),xd=e=>e.some(e=>/KITCHEN|厨房/i.test(e))?`kitchen`:e.some(e=>/BATH|TOILET|WC|卫生间|浴室/i.test(e))?`bathroom`:`other`,Sd=(e,t,n,r,i)=>{let[a,o]=e.resolvedWorldPosition,s=e.resolvedRotationRadians,c=Math.cos(s),l=Math.sin(s);return[[-r/2,-i/2],[r/2,-i/2],[r/2,i/2],[-r/2,i/2]].map(([e,r])=>[a+(t+e)*c+(n+r)*l,o-(t+e)*l+(n+r)*c])};function Cd(e){let t=Z(e),n=[e.category,...e.functionTags??[]].filter(Boolean).join(` `).toLowerCase(),r=e.category??``,i=r===`columns`,a=`other`;/sink/.test(n)?a=`sink`:/counter/.test(n)?a=/island|kitchen.?bar|岛台/.test(t)?`island`:`counter`:/cabinet/.test(n)&&/kitchen/.test(t)?a=/tall.?cabinet|pantry|高柜/.test(n)?`tall-cabinet`:`base-cabinet`:/showerhead|shower.?head/.test(t)?a=`shower-head`:/淋浴房|shower.?enclosure|shower.?room/.test(t)||/(^|\W)showers?(\W|$)/.test(t)?a=`shower`:/bathtub|(^|\W)tub(\W|$)|浴缸/.test(t)?a=`bathtub`:/toilet|坐便|马桶/.test(t)?a=`toilet`:/bathroom.?sink|washbasin|lavatory|vanity|洗手盆/.test(t)?a=`basin`:/fridge|refrigerator|冰箱/.test(t)?a=`refrigerator`:/dishwasher|洗碗机/.test(t)?a=`dishwasher`:/cooktop|stove|range|灶/.test(t)?a=`stove`:/oven|烤箱/.test(t)?a=`oven`:/peninsula|半岛/.test(t)||/island|kitchen.?bar|岛台/.test(t)?a=`island`:/counter|台面/.test(t)?a=`counter`:/tall.?cabinet|pantry|高柜/.test(t)?a=`tall-cabinet`:/kitchen/.test(t)&&/cabinet|cabinetry/.test(t)?a=`base-cabinet`:/sink|basin|水槽/.test(t)&&(a=`sink`);let o=a!==`other`&&(!!r||(e.functionTags?.length??0)>0);return{semantic:a,semanticConfidence:a===`other`?`low`:i?`medium`:o?`high`:`medium`,semanticReason:i&&a!==`other`?`源 category=${r} 与 ${a} 语义冲突；明确functionTags/tags仍支持该语义`:o?`asset category/functionTags/tags 提供明确语义`:a===`other`?`缺少本轮可用厨卫语义`:`名称提供语义`}}function wd(e){let t=zu(e),n=t.rooms,r=[...e.furniture,...e.equipment,...e.columns].map(e=>{let r=Jc(e),i=Cd(e),a=r?Hc(r):0,o=(r?t.graph.roomAnalysis.rooms.filter(t=>t.usableForEvaluation&&t.levelId===e.levelId).map(e=>({room:e,area:e.polygons.reduce((e,t)=>e+vd(r,t),0)})).sort((e,t)=>t.area-e.area):[])[0],s=a>0&&o?o.area/a:0,c=s>=.5?o.room.roomRegionId:null,l=xd(n.find(e=>e.roomRegionId===c)?.zoneNames??[]),u=i.semantic;return u===`sink`&&l===`bathroom`&&(u=`basin`),{item:e,...i,semantic:u,footprint:r,roomRegionId:c,roomKind:l,roomCoverageRatio:s}}),i=[],a=(e,t,n,r=[])=>{let a=e.item.dimensionsMeters;if(!e.item.resolvedWorldPosition||!Number.isFinite(e.item.resolvedRotationRadians)||!a||!e.roomRegionId||e.semanticConfidence===`low`)return;let[o,,s]=a;i.push({useZoneId:`${e.item.id}:${t}`,ownerObjectId:e.item.id,roomRegionId:e.roomRegionId,levelId:e.item.levelId,kind:t,polygon:Sd(e.item,0,(s+n)/2,o,n),confidence:e.semanticConfidence,usableForEvaluation:!0,diagnostics:[`fixture_front_uses_local_positive_z`,...r]})};for(let e of r)e.roomKind===`kitchen`?[`sink`,`stove`,`refrigerator`].includes(e.semantic)?a(e,`kitchen-standing`,W.fixtureStandingDepthMeters):[`counter`,`base-cabinet`,`island`].includes(e.semantic)?a(e,`counter-standing`,W.fixtureStandingDepthMeters):[`dishwasher`,`oven`,`tall-cabinet`].includes(e.semantic)&&a(e,`appliance-operation`,W.fixtureStandingDepthMeters,[`opening_geometry_not_available`]):e.roomKind===`bathroom`&&(e.semantic===`toilet`?a(e,`toilet-front`,W.fixtureStandingDepthMeters):e.semantic===`basin`||e.semantic===`sink`?a(e,`basin-front`,W.fixtureStandingDepthMeters):e.semantic===`shower`?a(e,`shower-entry`,W.bathEntryDepthMeters,[`shower_door_operation_not_assumed`]):e.semantic===`bathtub`&&a(e,`bathtub-entry`,W.bathEntryDepthMeters,[`bathtub_primary_entry_side_uses_asset_orientation`]));let o=iu(e).filter(e=>e.usableForCollision&&e.footprint.length>=3),s=i.map(e=>{let r=t.graph.roomAnalysis.rooms.find(t=>t.roomRegionId===e.roomRegionId),i=n.find(t=>t.roomRegionId===e.roomRegionId),a=Hc(e.polygon),s=r?r.polygons.reduce((t,n)=>t+vd(e.polygon,n),0):0,c=o.filter(t=>t.levelId===e.levelId&&t.objectId!==e.ownerObjectId&&vd(e.polygon,[t.footprint])>W.overlapAreaSquareMeters),l=yd(e.polygon,c.map(e=>e.footprint)),u=a>0?Math.min(1,s/a):0,d=a>0?Math.min(1,l/a):1,f=Math.max(0,Math.min(u,1-d)),p=!!i?.navigableFreeCells.some(t=>bd(t,e.polygon)),m=!!(i?.portalNodes.some(e=>e.furnishedLanding)&&p&&i.furnishedConnected);return{zone:e,insideRoomRatio:u,blockedAreaRatio:d,clearRatio:f,blockerIds:c.map(e=>e.objectId),reachableFromRoomEntry:m,usable:f>=W.furnitureUseZoneClearRatio&&m}}),c=n.filter(e=>xd(e.zoneNames)===`kitchen`),l=n.filter(e=>xd(e.zoneNames)===`bathroom`);return{navigation:t,items:r,useZones:i,assessments:s,doorOperations:au(e),kitchenRooms:c,bathroomRooms:l,diagnostics:r.filter(e=>e.semantic!==`other`&&e.semanticReason.includes(`语义冲突`)).map(e=>`${e.item.id}: ${e.semanticReason}`)}}var Td=new WeakMap,Ed=e=>{let t=Td.get(e);if(t)return t;let n=wd(e);return Td.set(e,n),n},Dd=(e,t,n,r,i={})=>({ruleId:e,ruleName:t,status:n,severity:n===`issue`?`error`:n===`unable_to_determine`?`warning`:`info`,summary:r,details:[],normalizedObjectIds:[],pascalSourceIds:[],measurements:[],thresholds:[{name:`basicPassageWidth`,value:W.basicPassageWidthMeters,unit:`meter`},{name:`fixtureStandingDepth`,value:W.fixtureStandingDepthMeters,unit:`meter`},{name:`fixtureUseZoneClearRatio`,value:W.furnitureUseZoneClearRatio},{name:`bathEntryDepth`,value:W.bathEntryDepthMeters,unit:`meter`}],missingData:[],confidence:{level:n===`unable_to_determine`?`low`:`medium`,score:n===`unable_to_determine`?.4:.75,reasons:[`V0.1只判断基本使用，不评价规范净空、无障碍或舒适度`]},diagnostics:[],...i}),Od=(e,t,n,r,i,a,o={})=>({severity:e,code:t,message:n,normalizedObjectIds:r,origin:i,recommendation:a,...o}),kd=(e,t,n)=>e.items.filter(e=>e.roomRegionId===t&&(!n||n.includes(e.semantic))),Ad=(e,t)=>e.assessments.find(e=>e.zone.ownerObjectId===t),jd=(e,t)=>[...new Set(t.map(t=>e.find(e=>e.item.id===t)?.item.rawPascalId??t))],Md=e=>e.zoneNames.join(` / `)||e.roomRegionId,Nd=(e,t)=>e.item.resolvedWorldPosition&&t.item.resolvedWorldPosition?Math.hypot(e.item.resolvedWorldPosition[0]-t.item.resolvedWorldPosition[0],e.item.resolvedWorldPosition[1]-t.item.resolvedWorldPosition[1]):1/0,Q=(e,t,n)=>e.map(({item:e,assessment:r})=>Od(`error`,t,`${e.item.name??n}前方的600毫米基本使用区只有 ${Math.round((r?.clearRatio??0)*100)}% 可用${r?.reachableFromRoomEntry?``:`，且未能从房间入口到达`}`,[e.item.id,...r?.blockerIds??[],...e.roomRegionId?[e.roomRegionId]:[]],`source_data`,`移动前方阻挡对象或调整${n}位置，恢复基本站立和进入空间。`,{actualValue:r?.clearRatio??null,expectedValue:`>= ${W.furnitureUseZoneClearRatio}`})),Pd=e=>{let t=Ed(e),n=[],r=[];for(let e of t.kitchenRooms){let i=kd(t,e.roomRegionId,[`sink`,`stove`,`refrigerator`]);for(let t of[`sink`,`stove`,`refrigerator`])i.some(e=>e.semantic===t)||n.push({room:e,semantic:t});r.push(...i.filter(e=>!Ad(t,e.item.id)?.usable))}let i=n.length?`unable_to_determine`:r.length?`not_applicable`:t.kitchenRooms.length?`pass`:`not_applicable`,a=[...r.map(e=>Od(`info`,`kitchen_core_access_reported_by_g3026`,`${e.item.name??`厨房核心设备`}的接近问题由G3-026报告，本规则不重复报警`,[e.item.id,e.roomRegionId],`rule`,`处理G3-026中的设备接近问题。`)),...n.flatMap(({room:n,semantic:r})=>{let i=n.zoneIds.filter(t=>/KITCHEN|厨房/i.test(e.zones.find(e=>e.id===t)?.name??``)),a=i.length?i:[n.roomRegionId],o=kd(t,n.roomRegionId,[`sink`,`stove`,`refrigerator`,`counter`,`base-cabinet`,`island`]).map(e=>e.item.id);return a.map(e=>Od(`warning`,`kitchen_core_semantic_missing`,`${Md(n)}: ${r} 未被可靠识别，无法完整核验厨房基本操作关系`,[e,...o],`insufficient_information`,`核对设备category、functionTags和所在Zone。`))})];return Dd(`G3-025`,`厨房具有连续的基本操作关系`,i,n.length?`${n.length} 项厨房核心设备语义缺失，无法完整判断操作关系`:r.length?`核心设备接近问题已由G3-026统一报告`:`${t.kitchenRooms.length} 个厨房的水槽、灶具和冰箱位于可共同到达的厨房区域`,{details:a.map(e=>e.message),measurements:[{name:`kitchenRoomCount`,value:t.kitchenRooms.length},{name:`missingKitchenCoreCount`,value:n.length}],missingData:n.map(({room:e,semantic:t})=>`${Md(e)}: ${t}`),diagnostics:a})},Fd=e=>{let t=Ed(e),n=t.items.filter(e=>e.roomKind===`kitchen`&&[`sink`,`stove`,`refrigerator`].includes(e.semantic)),r=n.map(e=>({item:e,assessment:Ad(t,e.item.id)})).filter(e=>!!e.assessment),i=r.filter(e=>!e.assessment.usable),a=n.filter(e=>e.semanticConfidence===`low`||!r.some(t=>t.item.item.id===e.item.id)),o=i.length?`issue`:a.length?`unable_to_determine`:r.length?`pass`:`not_applicable`,s=[...Q(i,`kitchen_core_fixture_inaccessible`,`厨房设备`),...a.map(e=>Od(`warning`,`kitchen_core_fixture_geometry_unavailable`,`${e.item.name??`厨房设备`}缺少可靠位置、尺寸、朝向或Room归属`,[e.item.id],`insufficient_information`,`补充可靠设备几何和语义。`))];return Dd(`G3-026`,`厨房核心设备能够正常接近`,o,i.length?`发现 ${i.length} 个厨房核心设备前没有可用站立位置或无法从入口到达`:a.length?`${a.length} 个厨房核心设备无法判断`:`${r.length} 个水槽、灶具或冰箱具有基本接近空间`,{normalizedObjectIds:i.map(e=>e.item.item.id),pascalSourceIds:jd(n,i.map(e=>e.item.item.id)),details:s.map(e=>e.message),measurements:[{name:`kitchenCoreFixtureCount`,value:n.length},{name:`inaccessibleKitchenCoreCount`,value:i.length}],missingData:a.map(e=>`${e.item.id}: 可靠设备几何或Room归属`),diagnostics:s})},Id=e=>{let t=Ed(e),n=t.items.filter(e=>e.roomKind===`kitchen`&&[`counter`,`base-cabinet`,`island`].includes(e.semantic)),r=t.items.filter(e=>e.roomKind===`kitchen`&&[`sink`,`stove`].includes(e.semantic)),i=t.kitchenRooms.filter(e=>!kd(t,e.roomRegionId,[`counter`,`base-cabinet`,`island`]).length||!kd(t,e.roomRegionId,[`sink`,`stove`]).length),a=r.filter(e=>!n.some(t=>t.roomRegionId===e.roomRegionId&&Nd(e,t)<=W.kitchenCounterRelationMeters)),o=a.length?`issue`:i.length?`unable_to_determine`:r.length?`pass`:`not_applicable`,s=[...a.map(e=>Od(`error`,`kitchen_counter_unavailable_near_core`,`${e.item.name??`核心设备`}附近没有识别到基本操作台面`,[e.item.id,...e.roomRegionId?[e.roomRegionId]:[]],`source_data`,`在水槽或灶具附近补充可识别的Counter或Cabinet台面。`,{expectedValue:`可靠台面中心距离 <= ${W.kitchenCounterRelationMeters}m`})),...i.map(e=>Od(`warning`,`kitchen_counter_semantics_incomplete`,`${Md(e)}缺少可靠台面或水槽/灶具语义`,[e.roomRegionId],`insufficient_information`,`核对Counter、Cabinet、水槽和灶具category。`))];return Dd(`G3-027`,`厨房具有基本可用操作台面`,o,a.length?`发现 ${a.length} 个水槽或灶具附近没有可用操作台面`:i.length?`${i.length} 个厨房缺少可靠台面或核心设备语义`:`${r.length} 个水槽或灶具附近存在基本可用台面`,{normalizedObjectIds:a.map(e=>e.item.id),details:s.map(e=>e.message),measurements:[{name:`counterLikeObjectCount`,value:n.length},{name:`coreWithoutNearbyCounterCount`,value:a.length}],thresholds:[...Dd(``,``,`pass`,``).thresholds,{name:`kitchenCounterRelation`,value:W.kitchenCounterRelationMeters,unit:`meter`}],missingData:i.map(e=>`${e.roomRegionId}: Counter/Cabinet台面或核心设备语义`),diagnostics:s})},Ld=e=>{let t=Ed(e),n=t.kitchenRooms.filter(e=>e.portalNodes.length&&!e.furnishedConnected&&e.fixedObstacleIds.some(n=>kd(t,e.roomRegionId,[`counter`,`base-cabinet`,`island`,`tall-cabinet`]).some(e=>e.item.id===n))),r=t.kitchenRooms.filter(e=>!e.portalNodes.length||!e.usableForEvaluation),i=n.length?`issue`:r.length?`unable_to_determine`:t.kitchenRooms.length?`pass`:`not_applicable`,a=[...n.map(e=>Od(`error`,`kitchen_aisle_not_connected`,`${Md(e)}的对向固定操作面之间未形成600毫米基本连续通行空间`,[e.roomRegionId,...e.fixedBlockerIds],`source_data`,`调整橱柜、岛台或半岛位置，恢复基本通行。`)),...r.map(e=>Od(`warning`,`kitchen_aisle_geometry_unavailable`,`${Md(e)}缺少可靠入口或自由空间`,[e.roomRegionId],`insufficient_information`,`检查Room、Door Portal和固定柜体占地。`))];return Dd(`G3-028`,`对向橱柜、岛台之间可以基本通行`,i,n.length?`发现 ${n.length} 个厨房的固定操作面之间无法基本通行`:r.length?`${r.length} 个厨房无法判断对向操作区通行`:`${t.kitchenRooms.length} 个厨房保留600毫米基本通行空间`,{normalizedObjectIds:n.map(e=>e.roomRegionId),details:a.map(e=>e.message),measurements:[{name:`kitchenAisleIssueCount`,value:n.length}],missingData:r.map(e=>`${e.roomRegionId}: 可靠入口或自由空间`),diagnostics:a})},Rd=e=>{let t=Ed(e).items.filter(e=>e.roomKind===`kitchen`&&[`refrigerator`,`dishwasher`,`oven`].includes(e.semantic)),n=t.map(e=>Od(`warning`,`appliance_door_geometry_unavailable`,`${e.item.name??`厨房设备`}没有独立设备门扇宽度、铰链侧和开启方向，不能检查打开后的操作状态`,[e.item.id],`insufficient_information`,`如需启用本项，应提供设备门扇的尺寸、铰链和开向；不得用设备整体矩形代替。`));return Dd(`G3-029`,`厨房设备门能够完成基本开启和操作`,t.length?`unable_to_determine`:`not_applicable`,t.length?`${t.length} 个带门厨房设备缺少可靠门扇操作几何`:`当前没有识别到需要检查门扇的厨房设备`,{normalizedObjectIds:t.map(e=>e.item.id),pascalSourceIds:jd(t,t.map(e=>e.item.id)),details:n.map(e=>e.message),measurements:[{name:`applianceDoorCandidateCount`,value:t.length},{name:`applianceDoorGeometryCount`,value:0}],missingData:t.map(e=>`${e.item.id}: 设备门宽度、铰链侧、开启方向和开启角度`),diagnostics:n})},zd=e=>{let t=Ed(e),n=t.kitchenRooms.filter(e=>e.portalNodes.length&&!e.furnishedConnected),r=t.kitchenRooms.filter(e=>!e.portalNodes.length||!e.usableForEvaluation),i=n.length?`not_applicable`:r.length?`unable_to_determine`:t.kitchenRooms.length?`pass`:`not_applicable`,a=[...n.map(e=>Od(`info`,`kitchen_entry_reported_by_foundation`,`${Md(e)}的入口或房内通行问题已由G3-002/G3-003/G3-006报告`,[e.roomRegionId,...e.fixedBlockerIds,...e.largeFurnitureBlockerIds],`rule`,`处理基础通行规则中的同一根因。`)),...r.map(e=>Od(`warning`,`kitchen_entry_unresolved`,`${Md(e)}缺少可靠Door Portal或自由空间`,[e.roomRegionId],`insufficient_information`,`检查厨房入口门和Room边界。`))];return Dd(`G3-030`,`厨房入口能够正常进出`,i,n.length?`厨房入口问题已由基础通行规则统一报告`:r.length?`${r.length} 个厨房入口无法判断`:`${t.kitchenRooms.length} 个厨房入口可进入房内自由空间`,{details:a.map(e=>e.message),measurements:[{name:`kitchenEntryUsableCount`,value:t.kitchenRooms.length-n.length-r.length}],missingData:r.map(e=>`${e.roomRegionId}: Door Portal或自由空间`),diagnostics:a})},Bd=(e,t,n)=>{let r=new Map;for(let t of e.navigation.graph.edges)t.fromNodeId===n||t.toNodeId===n||(r.set(t.fromNodeId,[...r.get(t.fromNodeId)??[],t.toNodeId]),r.set(t.toNodeId,[...r.get(t.toNodeId)??[],t.fromNodeId]));let i=new Set([t]),a=[t];for(;a.length;)for(let e of r.get(a.shift())??[])i.has(e)||(i.add(e),a.push(e));return i},Vd=e=>{let t=Ed(e),n=[],r=[];for(let e of t.kitchenRooms){if(e.zoneNames.some(e=>/LIVING|DINING|客厅|餐厅/i.test(e)))continue;let i=t.navigation.graph.edges.flatMap(t=>t.fromNodeId===e.roomRegionId?[t.toNodeId]:t.toNodeId===e.roomRegionId?[t.fromNodeId]:[]).filter(e=>e!==`exterior`);if(i.length<2)continue;let a=Bd(t,i[0],e.roomRegionId);if(!i.slice(1).some(e=>!a.has(e)))continue;let o=t.useZones.filter(t=>t.roomRegionId===e.roomRegionId&&t.kind===`kitchen-standing`);!o.length||!e.paths.length?r.push(e):e.paths.some(e=>e.points.some(e=>o.some(t=>{let n=!1;for(let r=0,i=t.polygon.length-1;r<t.polygon.length;i=r++){let a=t.polygon[r],o=t.polygon[i];a[1]>e[1]!=o[1]>e[1]&&e[0]<(o[0]-a[0])*(e[1]-a[1])/(o[1]-a[1])+a[0]&&(n=!n)}return n})))&&n.push(e)}let i=n.length?`issue`:r.length?`unable_to_determine`:t.kitchenRooms.length?`pass`:`not_applicable`,a=[...n.map(e=>Od(`error`,`kitchen_core_is_unique_through_route`,`${Md(e)}是连接其他主要空间的唯一拓扑通道，且路径穿过水槽或灶具前操作区`,[e.roomRegionId,...kd(t,e.roomRegionId,[`sink`,`stove`]).map(e=>e.item.id)],`rule`,`调整空间连接或核心设备位置，使日常穿行不必经过核心操作位。`)),...r.map(e=>Od(`warning`,`kitchen_unique_route_geometry_unresolved`,`${Md(e)}可能承担唯一穿行关系，但缺少可靠核心使用区或房内路径`,[e.roomRegionId],`insufficient_information`,`核对厨房核心设备朝向和Room路径。`))];return Dd(`G3-031`,`厨房核心工作区不得成为通往其他主要空间的唯一通道`,i,n.length?`发现 ${n.length} 个厨房核心工作区位于唯一通行路径上`:r.length?`${r.length} 个厨房的唯一通道关系无法完整判断`:`未发现必须穿过厨房核心工作区的唯一主要通道`,{normalizedObjectIds:n.map(e=>e.roomRegionId),details:a.map(e=>e.message),measurements:[{name:`kitchenUniqueCoreRouteCount`,value:n.length}],missingData:r.map(e=>`${e.roomRegionId}: 核心使用区或房内路径`),diagnostics:a})},Hd=e=>{let t=Ed(e),n=t.items.filter(e=>e.roomKind===`kitchen`&&[`refrigerator`,`dishwasher`,`oven`,`tall-cabinet`].includes(e.semantic)),r=n.filter(e=>e.semantic===`tall-cabinet`),i=t.items.filter(e=>e.roomKind===`kitchen`&&[`base-cabinet`,`tall-cabinet`,`island`].includes(e.semantic)),a=n.flatMap(e=>i.filter(t=>t.item.id!==e.item.id&&t.roomRegionId===e.roomRegionId&&e.footprint&&t.footprint&&(tu(e.footprint,t.footprint)??0)>W.physicalCollisionAreaSquareMeters).map(t=>({item:e,cabinet:t}))),o=a.length?`issue`:r.length?`unable_to_determine`:`not_applicable`,s=[...a.map(({item:e,cabinet:t})=>Od(`error`,`kitchen_tall_unit_physical_deadlock`,`${e.item.name??`设备`}与${t.item.name??`柜体`}实体占地重叠，至少一个对象可能无法正常使用`,[e.item.id,t.item.id],`source_data`,`调整设备或高柜位置，消除实体重叠。`)),...!a.length&&r.length?r.map(e=>Od(`warning`,`kitchen_tall_unit_opening_unavailable`,`${e.item.name??`高柜`}没有可靠开启区，不能排除与设备形成使用死角`,[e.item.id],`insufficient_information`,`补充高柜门扇开向和尺寸。`)):!a.length&&n.length?[Od(`info`,`appliance_opening_uncertainty_reported_by_g3029`,`设备门扇数据不足已由G3-029统一说明；当前没有可靠高柜或实体碰撞，本规则不重复生成待核验卡片`,n.map(e=>e.item.id),`rule`,`查看G3-029中的设备门数据说明。`)]:[]];return Dd(`G3-032`,`高柜和设备之间不存在完全无法使用的死角`,o,a.length?`发现 ${a.length} 组高柜或设备实体重叠`:r.length?`${r.length} 个高柜缺少开启几何，无法排除完全死角`:n.length?`设备开门数据不足已由G3-029说明；未识别到可靠高柜或实体重叠`:`当前没有可检查的高柜或带门设备`,{normalizedObjectIds:a.map(({item:e})=>e.item.id),details:s.map(e=>e.message),measurements:[{name:`kitchenTallUnitCandidateCount`,value:n.length},{name:`reliableTallCabinetCount`,value:r.length},{name:`kitchenTallUnitCollisionCount`,value:a.length}],missingData:a.length?[]:r.map(e=>`${e.item.id}: 门扇开向和尺寸`),diagnostics:s})},Ud=e=>{let t=Ed(e),n=t.bathroomRooms.filter(e=>e.portalNodes.length&&(!e.furnishedConnected||!e.portalNodes.some(e=>e.furnishedLanding))),r=t.bathroomRooms.filter(e=>!e.portalNodes.length||!e.usableForEvaluation),i=n.length?`issue`:r.length?`unable_to_determine`:t.bathroomRooms.length?`pass`:`not_applicable`,a=[...n.map(e=>Od(`error`,`bathroom_entry_or_exit_blocked`,`${Md(e)}进入后没有连续基本站立和退出空间`,[e.roomRegionId,...e.fixedBlockerIds,...e.largeFurnitureBlockerIds],`source_data`,`调整门口洁具或柜体，恢复进入、关门和退出空间。`)),...r.map(e=>Od(`warning`,`bathroom_entry_unresolved`,`${Md(e)}缺少可靠入口或自由空间`,[e.roomRegionId],`insufficient_information`,`检查卫生间Door Portal、Room边界和洁具占地。`))];return Dd(`G3-033`,`卫生间能够正常进入和退出`,i,n.length?`发现 ${n.length} 个卫生间无法正常进入或退出`:r.length?`${r.length} 个卫生间入口无法判断`:`${t.bathroomRooms.length} 个卫生间具有基本进入和退出空间`,{normalizedObjectIds:n.map(e=>e.roomRegionId),details:a.map(e=>e.message),measurements:[{name:`bathroomRoomCount`,value:t.bathroomRooms.length},{name:`bathroomEntryIssueCount`,value:n.length}],missingData:r.map(e=>`${e.roomRegionId}: Door Portal或自由空间`),diagnostics:a})},Wd=(e,t,n,r,i)=>a=>{let o=Ed(a),s=o.items.filter(e=>e.roomKind===`bathroom`&&n.includes(e.semantic)),c=s.map(e=>({item:e,assessment:Ad(o,e.item.id)})).filter(e=>!!e.assessment),l=c.filter(e=>!e.assessment.usable),u=s.filter(e=>e.semanticConfidence===`low`||!c.some(t=>t.item.item.id===e.item.id)),d=l.length?`issue`:u.length?`unable_to_determine`:c.length?`pass`:`not_applicable`,f=[...Q(l,r,i),...u.map(e=>Od(`warning`,`${r}_geometry_unavailable`,`${e.item.name??i}缺少可靠位置、尺寸、朝向或Room归属`,[e.item.id],`insufficient_information`,`核对${i}category和几何。`))];return Dd(e,t,d,l.length?`发现 ${l.length} 个${i}没有基本使用或进入空间`:u.length?`${u.length} 个${i}无法判断`:`${c.length} 个${i}具有基本使用和进入空间`,{normalizedObjectIds:l.map(e=>e.item.item.id),pascalSourceIds:jd(s,l.map(e=>e.item.item.id)),details:f.map(e=>e.message),measurements:[{name:`${r}Count`,value:s.length},{name:`${r}IssueCount`,value:l.length}],missingData:u.map(e=>`${e.item.id}: 可靠几何或Room归属`),diagnostics:f})},Gd=[Pd,Fd,Id,Ld,Rd,zd,Vd,Hd,Ud,Wd(`G3-034`,`坐便器具备基本坐下和起身空间`,[`toilet`],`toilet_use`,`坐便器`),Wd(`G3-035`,`洗手盆具备基本站立和操作位置`,[`basin`,`sink`],`basin_use`,`洗手盆`),Wd(`G3-036`,`淋浴或浴缸能够正常进入`,[`shower`,`bathtub`],`bath_fixture_entry`,`淋浴或浴缸`),e=>{let t=Ed(e),n=new Set(t.bathroomRooms.map(e=>e.roomRegionId)),r=new Map(e.doors.map(e=>[e.id,e])),i=t.bathroomRooms.flatMap(e=>e.portalNodes.map(n=>({room:e,door:r.get(n.doorId),operation:t.doorOperations.find(e=>e.doorId===n.doorId)}))),a=i.filter(({door:e})=>e?.doorType===`hinged`||e?.doorType===`double`),o=a.filter(({operation:e})=>!e?.usableForEvaluation),s=a.filter(({room:e,operation:n})=>n?.usableForEvaluation&&n.leaves.some(n=>kd(t,e.roomRegionId,[`toilet`,`basin`,`sink`]).some(e=>e.footprint&&(tu(n.requiredSwingPolygon,e.footprint)??0)>W.doorCollisionAreaSquareMeters&&!Ad(t,e.item.id)?.usable))),c=s.length?`issue`:o.length?`unable_to_determine`:n.size?`pass`:`not_applicable`,l=[...s.map(({room:e,operation:n})=>Od(`error`,`bathroom_door_trap_confirmed`,`${Md(e)}的门扇与洁具形成明确封锁，进入后可能无法重新开门退出`,[n.doorId,...kd(t,e.roomRegionId,[`toilet`,`basin`,`sink`]).map(e=>e.item.id)],`source_data`,`调整卫生间门开向或洁具位置。`)),...o.map(({room:e,operation:t})=>Od(`warning`,`bathroom_door_operation_unavailable`,`${Md(e)}的平开门缺少可靠铰链、开向或门扇几何，不能排除被困风险`,[t?.doorId??e.portalNodes[0]?.doorId??e.roomRegionId],`insufficient_information`,`补充卫生间门的铰链侧、开向和开启角度。`))];return Dd(`G3-037`,`卫生间门不得造成使用者被困风险`,c,s.length?`发现 ${s.length} 个卫生间存在明确门扇被洁具卡住风险`:o.length?`${o.length} 扇卫生间门缺少可靠操作几何`:`未发现卫生间门与洁具形成明确被困风险`,{normalizedObjectIds:s.map(({operation:e})=>e.doorId),details:l.map(e=>e.message),measurements:[{name:`bathroomDoorCount`,value:i.length},{name:`confirmedTrapRiskCount`,value:s.length}],missingData:o.map(({operation:e,room:t})=>`${e?.doorId??t.roomRegionId}: 门铰链、开向或开启角度`),diagnostics:l})},e=>{let t=Ed(e),n=t.assessments.filter(e=>t.items.some(t=>t.item.id===e.zone.ownerObjectId&&t.roomKind===`bathroom`)),r=n.filter(e=>e.blockedAreaRatio>=.8&&e.blockerIds.some(e=>t.items.some(t=>t.item.id===e&&t.roomKind===`bathroom`&&[`toilet`,`basin`,`sink`,`shower`,`bathtub`].includes(t.semantic)))),i=r.filter(e=>r.some(t=>t.zone.ownerObjectId!==e.zone.ownerObjectId&&e.blockerIds.includes(t.zone.ownerObjectId)&&t.blockerIds.includes(e.zone.ownerObjectId))),a=i.length?`issue`:r.length?`not_applicable`:n.length?`pass`:`not_applicable`,o=[...i.map(e=>Od(`error`,`bathroom_fixture_mutual_function_deadlock`,`两个卫生设备相互占满对方唯一基本使用位置，至少一个设备无法使用`,[e.zone.ownerObjectId,...e.blockerIds],`source_data`,`调整设备位置，使至少一个设备的必要使用区恢复可用。`)),...i.length?[]:r.map(e=>Od(`info`,`bathroom_fixture_conflict_reported_by_specific_rule`,`该设备使用区被占用的问题已由对应G3-034/G3-035/G3-036报告，本规则不重复报警`,[e.zone.ownerObjectId,...e.blockerIds],`rule`,`处理对应专项规则的问题。`))];return Dd(`G3-038`,`卫生设备之间不存在完全功能冲突`,a,i.length?`发现 ${i.length} 处卫生设备相互完全占用必要使用位置`:r.length?`单项设备使用问题已由对应专项规则统一报告`:n.length?`未发现卫生设备之间的完全功能冲突`:`当前没有可评价的卫生设备使用区`,{normalizedObjectIds:i.map(e=>e.zone.ownerObjectId),details:o.map(e=>e.message),measurements:[{name:`bathroomFixtureUseZoneCount`,value:n.length},{name:`mutualFunctionDeadlockCount`,value:i.length}],diagnostics:o})}],Kd=e=>e.clearRatio<W.windowOperationIssueClearRatio?`issue`:e.clearRatio<W.windowOperationPassClearRatio?`partial`:`pass`,qd=e=>e.length&&(e[0][0]!==e[e.length-1][0]||e[0][1]!==e[e.length-1][1])?[...e,e[0]]:e,Jd=e=>e.reduce((e,t)=>e+Hc(t[0]??[]),0),Yd=(e,t)=>{try{return Jd(ls.default.intersection([qd(e)],t))}catch{return 0}},Xd=(e,t)=>{if(!t.length)return 0;try{let[n,...r]=t.map(e=>[qd(e)]),i=ls.default.union(n,...r);return Jd(ls.default.intersection([qd(e)],i))}catch{return 0}},Zd=(e,t)=>{let n=!1;for(let r=0,i=t.length-1;r<t.length;i=r++){let a=t[r],o=t[i];a[1]>e[1]!=o[1]>e[1]&&e[0]<(o[0]-a[0])*(e[1]-a[1])/(o[1]-a[1])+a[0]&&(n=!n)}return n},Qd=e=>[e.category,e.name,e.assetId,e.assetName,...e.functionTags??[],...e.assetTags??[]].filter(Boolean).join(` `).toLowerCase(),$d=(e,t)=>{let[n,,r]=e.dimensionsMeters,[i,a]=e.resolvedWorldPosition,o=e.resolvedRotationRadians,s=Math.cos(o),c=Math.sin(o),l=(r+t)/2;return[[-n/2,-t/2],[n/2,-t/2],[n/2,t/2],[-n/2,t/2]].map(([e,t])=>[i+e*s+(l+t)*c,a-e*c+(l+t)*s])},ef=(e,t,n,r,i,a)=>{let o=e[0]+n[0]*a*i/2,s=e[1]+n[1]*a*i/2,c=t[0]*r/2,l=t[1]*r/2,u=n[0]*a*i/2,d=n[1]*a*i/2;return[[o-c-u,s-l-d],[o+c-u,s+l-d],[o+c+u,s+l+d],[o-c+u,s-l+d]]};function tf(e){let t=Qd(e),n=[],r=e;/laundry.?appliance|washing.?machine|washer|dryer|洗衣|烘干/.test(t)?n.push(`laundry-appliance`,`major-appliance`):/kitchen.?appliance|fridge|refrigerator|dishwasher|oven|冰箱|洗碗|烤箱/.test(t)&&n.push(`major-appliance`),/drawer|抽屉/.test(t)&&n.push(`drawer`),/wardrobe|closet|armoire|cupboard|衣柜|储物柜/.test(t)?n.push(`storage-cabinet`):/cabinets?|cabinetry|高柜|橱柜/.test(t)&&!/drawer|bedside|nightstand|sink|basin|水槽|洗手/.test(t)&&n.push(`fixed-cabinet`),/utility.?sink|ironing|家政水槽|熨烫|家政柜/.test(t)&&n.push(`household-fixture`);let i=n.includes(`drawer`)?[`drawerDirection`,`drawerExtensionDepthMeters`]:n.some(e=>[`fixed-cabinet`,`storage-cabinet`].includes(e))?[`doorLeafCount`,`doorLeafWidthMeters`,`hingeSide`,`openingDirection`]:n.some(e=>[`major-appliance`,`laundry-appliance`].includes(e))?[`doorLeafCount`,`doorLeafWidthMeters`,`hingeSide`,`openingDirection`,`openingAngleRadians`]:[],a=i.filter(e=>r[e]===void 0||r[e]===null),o=i.length>0&&a.length===0,s=!o&&!!(e.dimensionsMeters&&e.dimensionsMeters.every(e=>Number.isFinite(e)&&e>0))&&(n.includes(`drawer`)||n.some(e=>[`major-appliance`,`laundry-appliance`].includes(e))),c=o?`explicit`:s?`bounded-assumption`:`unavailable`;return{capabilities:[...new Set(n)],confidence:n.length?e.category||e.functionTags?.length?`high`:`medium`:`low`,reason:n.length?`asset category/functionTags/tags提供操作对象语义`:`缺少本轮操作对象语义`,operationGeometryReliable:o,operationGeometryBasis:c,operationMissingFields:a}}function nf(e){let t=zu(e),n=t.graph.roomAnalysis.rooms.filter(e=>e.usableForEvaluation),r=[...e.furniture,...e.equipment,...e.columns].map(e=>{let r=Jc(e),i=r?Hc(r):0,a=(r?n.filter(t=>t.levelId===e.levelId).map(e=>({room:e,area:e.polygons.reduce((e,t)=>e+Yd(r,t),0)})).sort((e,t)=>t.area-e.area):[])[0],o=(i&&a?a.area/i:0)>=.5?a.room.roomRegionId:null,s=o?t.graph.roomAnalysis.roomToZoneIds[o]??[]:[];return{item:e,...tf(e),footprint:r,roomRegionId:o,zoneIds:s}}),i=[],a=(e,t,n,r=e.operationGeometryReliable)=>{!e.roomRegionId||!e.item.dimensionsMeters||!e.item.resolvedWorldPosition||!Number.isFinite(e.item.resolvedRotationRadians)||i.push({operationZoneId:`${e.item.id}:${t}`,ownerObjectId:e.item.id,levelId:e.item.levelId,roomRegionId:e.roomRegionId,kind:t,polygon:$d(e.item,n),geometryReliable:r,diagnostics:[`operation_front_uses_item_local_positive_z`,...e.operationMissingFields]})};for(let e of r){let t=e.item.dimensionsMeters?.[0]??W.applianceOperationDepthMeters,n=e.item.dimensionsMeters?.[2]??W.drawerOperationDepthMeters,r=e.item,i=e.operationGeometryBasis===`explicit`&&Number.isFinite(r.doorLeafWidthMeters)?Number(r.doorLeafWidthMeters):t,o=e.operationGeometryBasis===`explicit`&&Number.isFinite(r.drawerExtensionDepthMeters)?Number(r.drawerExtensionDepthMeters):n;e.capabilities.includes(`laundry-appliance`)?a(e,`laundry-front`,i):e.capabilities.includes(`major-appliance`)&&a(e,`appliance-front`,i),e.capabilities.includes(`fixed-cabinet`)&&a(e,`cabinet-front`,W.cabinetOperationDepthMeters),e.capabilities.includes(`storage-cabinet`)&&a(e,`storage-front`,W.cabinetOperationDepthMeters),e.capabilities.includes(`drawer`)&&a(e,`drawer-front`,o)}for(let e of r.filter(e=>e.capabilities.includes(`household-fixture`)&&!e.capabilities.includes(`major-appliance`)))a(e,`appliance-front`,W.applianceOperationDepthMeters);let o=e.windows.map(t=>{let r=e.walls.find(e=>e.id===t.hostWallId),i=!!(t.windowType&&t.windowType!==`fixed`),a=[],o=t.widthMeters??0;if(!r?.start||!r.end||!t.resolvedWorldPosition||o<=0)return{window:t,operable:i,dailyOperationSemanticsReliable:i,roomRegionId:null,approachPolygon:[],confidence:`low`,diagnostics:[`window_approach_geometry_unavailable`]};let s=r.end[0]-r.start[0],c=r.end[1]-r.start[1],l=Math.hypot(s,c),u=[s/l,c/l],d=[-u[1],u[0]],f=[-1,1].flatMap(e=>{let r=ef(t.resolvedWorldPosition,u,d,o,W.windowOperationDepthMeters,e);return n.filter(e=>e.levelId===t.levelId).map(e=>({room:e,polygon:r,area:e.polygons.reduce((e,t)=>e+Yd(r,t),0)}))}).sort((e,t)=>t.area-e.area)[0];return(!f||f.area<=W.areaSquareMeters)&&a.push(`window_interior_side_unresolved`),i&&a.push(`v0_1_all_operable_windows_require_daily_access`),{window:t,operable:i,dailyOperationSemanticsReliable:i,roomRegionId:f?.room.roomRegionId??null,approachPolygon:f?.polygon??[],confidence:f?`medium`:`low`,diagnostics:a}});for(let e of o.filter(e=>e.operable&&e.approachPolygon.length>=3))i.push({operationZoneId:`${e.window.id}:window-approach`,ownerObjectId:e.window.id,levelId:e.window.levelId,roomRegionId:e.roomRegionId,kind:`window-approach`,polygon:e.approachPolygon,geometryReliable:!0,diagnostics:e.diagnostics});let s=iu(e).filter(e=>e.usableForCollision&&e.footprint.length>=3),c=new Map(e.windows.map(e=>[e.id,e.hostWallId]));return{navigation:t,items:r,windows:o,zones:i,assessments:i.map(e=>{let r=n.find(t=>t.roomRegionId===e.roomRegionId),i=t.rooms.find(t=>t.roomRegionId===e.roomRegionId),a=Hc(e.polygon),o=r?r.polygons.reduce((t,n)=>t+Yd(e.polygon,n),0):0,l=new Set([e.ownerObjectId,c.get(e.ownerObjectId)??``]),u=s.filter(t=>t.levelId===e.levelId&&!l.has(t.objectId)&&Yd(e.polygon,[t.footprint])>W.overlapAreaSquareMeters),d=Xd(e.polygon,u.map(e=>e.footprint)),f=a?Math.min(1,o/a):0,p=a?Math.max(0,Math.min(f,1-d/a)):0,m=!!(i?.portalNodes.some(e=>e.furnishedLanding)&&i.furnishedConnected&&i.navigableFreeCells.some(t=>Zd(t,e.polygon)));return{zone:e,clearRatio:p,insideRoomRatio:f,blockerIds:u.map(e=>e.objectId),reachableFromEntry:m,usable:p>=W.furnitureUseZoneClearRatio&&m}}),laundryRooms:t.rooms.filter(e=>e.zoneNames.some(e=>/LAUNDRY|洗衣|家政/i.test(e))),storageRooms:t.rooms.filter(e=>e.zoneNames.some(e=>/PANTRY|WALK.?IN.?CLOSET|\bWIC\b|STORAGE|STORE|储藏|储物|衣帽/i.test(e))),diagnostics:[...r.filter(e=>e.capabilities.length&&e.operationMissingFields.length).map(e=>`${e.item.id}: ${e.operationMissingFields.join(`,`)}`),...o.filter(e=>e.operable).map(e=>`${e.window.id}: dailyOperationSemantics`)]}}var rf=new WeakMap,af=e=>{let t=rf.get(e);if(t)return t;let n=nf(e);return rf.set(e,n),n},of=(e,t,n,r,i={})=>({ruleId:e,ruleName:t,status:n,severity:n===`issue`?`error`:n===`unable_to_determine`?`warning`:`info`,summary:r,details:[],normalizedObjectIds:[],pascalSourceIds:[],measurements:[],thresholds:[{name:`basicPassageWidth`,value:W.basicPassageWidthMeters,unit:`meter`},{name:`operationZoneClearRatio`,value:W.furnitureUseZoneClearRatio},{name:`cabinetOperationDepth`,value:W.cabinetOperationDepthMeters,unit:`meter`},{name:`applianceOperationDepth`,value:W.applianceOperationDepthMeters,unit:`meter`},{name:`windowOperationDepth`,value:W.windowOperationDepthMeters,unit:`meter`},{name:`windowOperationPassClearRatio`,value:W.windowOperationPassClearRatio},{name:`windowOperationIssueClearRatio`,value:W.windowOperationIssueClearRatio}],missingData:[],confidence:{level:n===`unable_to_determine`?`low`:`medium`,score:n===`unable_to_determine`?.4:.75,reasons:[`V0.1只判断基本使用，不评价规范净空或舒适度`]},diagnostics:[],...i}),sf=(e,t,n,r,i,a,o={})=>({severity:e,code:t,message:n,normalizedObjectIds:r,origin:i,recommendation:a,...o}),cf=(e,t,n)=>e.assessments.find(e=>e.zone.ownerObjectId===t&&(!n||e.zone.kind===n)),lf=(e,t)=>[...new Set(t.map(t=>e.find(e=>e.item.id===t)?.item.rawPascalId??t))],uf=e=>e.zoneNames.join(` / `)||e.roomRegionId,df=[e=>{let t=af(e).navigation.rooms.filter(e=>e.portalNodes.length),n=t.flatMap(e=>e.portalNodes.filter(e=>!e.furnishedLanding).map(t=>({room:e,portal:t}))),r=n.filter(({room:e})=>e.fixedBlockerIds.length||e.largeFurnitureBlockerIds.length),i=n.filter(e=>!r.includes(e)&&!e.room.usableForEvaluation),a=n.filter(e=>!r.includes(e)&&!i.includes(e)),o=a.length?`issue`:i.length?`unable_to_determine`:r.length?`not_applicable`:t.length?`pass`:`not_applicable`,s=[...a.map(({room:e,portal:t})=>sf(`error`,`door_rear_standing_unavailable`,`${uf(e)}的门后没有可停留并继续进入房间的基本位置`,[t.doorId,e.roomRegionId],`source_data`,`移动门后对象或调整门和房间布局。`)),...r.map(({room:e,portal:t})=>sf(`info`,`door_rear_blockage_reported_by_navigation`,`${uf(e)}的门后阻断已由G3-003/G3-004/G3-006报告，本规则不重复报警`,[t.doorId,e.roomRegionId,...e.fixedBlockerIds,...e.largeFurnitureBlockerIds],`rule`,`处理基础通行规则中的同一根因。`)),...i.map(({room:e,portal:t})=>sf(`warning`,`door_rear_geometry_unresolved`,`${uf(e)}的门后落点因Room或Portal几何不足无法判断`,[t.doorId,e.roomRegionId],`insufficient_information`,`核对Door Portal和Room几何。`))];return of(`G3-009`,`门后具有基本停留空间`,o,a.length?`发现 ${a.length} 处门后没有基本停留空间`:i.length?`${i.length} 处门后空间无法判断`:r.length?`门后阻断已由基础通行规则统一报告`:`${t.reduce((e,t)=>e+t.portalNodes.length,0)} 个房间侧门后落点可继续进入内部`,{normalizedObjectIds:a.map(({portal:e})=>e.doorId),details:s.map(e=>e.message),measurements:[{name:`doorRoomSideLandingCount`,value:t.reduce((e,t)=>e+t.portalNodes.length,0)},{name:`doorRearUnavailableCount`,value:n.length}],missingData:i.map(({portal:e})=>`${e.doorId}: 可靠门后落点`),diagnostics:s})},e=>{let t=af(e),n=t.items.filter(e=>e.capabilities.includes(`fixed-cabinet`)),r=n.map(e=>({item:e,assessment:cf(t,e.item.id,`cabinet-front`)})).filter(e=>!!e.assessment).filter(e=>e.item.operationGeometryReliable),i=r.filter(e=>!e.assessment.usable),a=n.filter(e=>!e.operationGeometryReliable),o=[...i.map(({item:e})=>e.item.id),...a.map(e=>e.item.id)],s=i.length?`issue`:a.length?`unable_to_determine`:r.length?`pass`:`not_applicable`,c=[...i.map(({item:e,assessment:t})=>sf(`error`,`fixed_cabinet_front_fully_blocked`,`${e.item.name??`固定柜体`}前方600毫米基本操作区只有${Math.round(t.clearRatio*100)}%可用`,[e.item.id,...t.blockerIds],`source_data`,`移动柜前阻挡对象，恢复基本操作位置。`)),...a.map(e=>{let n=cf(t,e.item.id,`cabinet-front`);return sf(`warning`,`cabinet_door_geometry_unavailable`,`${e.item.name??`固定柜体`}只有柜体位置${n?`，柜前操作区可用约${Math.round(n.clearRatio*100)}%`:``}，但没有独立门片数量、宽度、铰链和开向`,[e.item.id,...n?.blockerIds??[]],`insufficient_information`,`保留柜前空间诊断；补充柜门几何后才能判断实际开启。`)})];return of(`G3-010`,`固定柜门能够正常开启`,s,i.length?`发现 ${i.length} 个固定柜门无法开启`:a.length?`${a.length} 个固定柜体缺少柜门开启几何`:r.length?`${r.length} 个固定柜门具有基本操作条件`:`当前没有可识别固定柜体`,{normalizedObjectIds:o,pascalSourceIds:lf(n,o),details:c.map(e=>e.message),measurements:[{name:`fixedCabinetCount`,value:n.length},{name:`cabinetDoorGeometryCount`,value:r.length}],missingData:a.map(e=>`${e.item.id}: 柜门数量、门宽、铰链侧和开向`),diagnostics:c})},e=>{let t=af(e),n=t.items.filter(e=>e.capabilities.includes(`drawer`)),r=n.map(e=>({item:e,assessment:cf(t,e.item.id,`drawer-front`)})).filter(e=>!!e.assessment),i=r.filter(e=>e.item.operationGeometryBasis===`explicit`&&!e.assessment.usable),a=r.filter(e=>e.item.operationGeometryBasis===`bounded-assumption`&&!e.assessment.usable),o=r.filter(e=>e.item.operationGeometryBasis!==`unavailable`&&e.assessment.usable),s=n.filter(e=>e.operationGeometryBasis===`unavailable`),c=[...i.map(({item:e,assessment:t})=>sf(`error`,`drawer_pullout_blocked`,`${e.item.name??`抽屉`}的可靠拉出区域被完全阻挡`,[e.item.id,...t.blockerIds],`source_data`,`移动抽屉前方对象。`)),...a.map(({item:e,assessment:t})=>sf(`warning`,`drawer_bounded_envelope_not_clear`,`${e.item.name??`抽屉柜`}按“拉出不超过柜体深度”的保守包络计算，前方空间未完全满足；真实抽屉可能更短`,[e.item.id,...t.blockerIds],`geometry_tolerance`,`人工核对实际抽屉深度；当前不直接判失败。`)),...o.filter(({item:e})=>e.operationGeometryBasis===`bounded-assumption`).map(({item:e})=>sf(`info`,`drawer_bounded_envelope_clear`,`${e.item.name??`抽屉柜`}沿家具正面方向、按柜体深度生成的保守拉出包络保持畅通`,[e.item.id],`rule`,`V0.1据此确认基本拉出。`)),...s.map(e=>sf(`warning`,`drawer_operation_geometry_unavailable`,`${e.item.name??`抽屉柜`}缺少可用尺寸或朝向，无法建立保守拉出包络`,[e.item.id],`insufficient_information`,`补充对象尺寸和朝向。`))];return of(`G3-011`,`主要抽屉能够基本拉出`,i.length?`issue`:a.length||s.length?`unable_to_determine`:o.length?`pass`:`not_applicable`,i.length?`发现 ${i.length} 个主要抽屉无法基本拉出`:a.length||s.length?`${a.length+s.length} 个抽屉的保守拉出包络仍需核验`:`${o.length} 个抽屉按不超过柜体深度的上界可基本拉出`,{normalizedObjectIds:[...i,...a,...s.map(e=>({item:e}))].map(({item:e})=>e.item.id),details:c.map(e=>e.message),measurements:[{name:`drawerCandidateCount`,value:n.length},{name:`boundedEnvelopeClearCount`,value:o.length},{name:`boundedEnvelopeUnclearCount`,value:a.length}],missingData:s.map(e=>`${e.item.id}: 有效尺寸或朝向`),diagnostics:c})},e=>{let t=af(e),n=t.items.filter(e=>e.capabilities.includes(`laundry-appliance`)),r=t.items.filter(e=>e.capabilities.includes(`major-appliance`)&&!e.capabilities.includes(`laundry-appliance`)),i=n.map(e=>({item:e,assessment:cf(t,e.item.id,`laundry-front`)})).filter(e=>!!e.assessment),a=i.filter(e=>e.item.operationGeometryBasis===`explicit`&&!e.assessment.usable),o=i.filter(e=>e.item.operationGeometryBasis===`bounded-assumption`&&!e.assessment.usable),s=i.filter(e=>e.item.operationGeometryBasis!==`unavailable`&&e.assessment.usable),c=n.filter(e=>e.operationGeometryBasis===`unavailable`),l=[...a.map(({item:e,assessment:t})=>sf(`error`,`major_appliance_door_operation_blocked`,`${e.item.name??`主要设备`}的可靠开门区域被阻挡`,[e.item.id,...t.blockerIds],`source_data`,`移动设备门前对象。`)),...o.map(({item:e,assessment:t})=>sf(`warning`,`appliance_bounded_envelope_not_clear`,`${e.item.name??`主要设备`}按“门体不超过设备宽度”的保守包络计算仍有阻挡；未知铰链和真实门径可能避开该阻挡`,[e.item.id,...t.blockerIds],`geometry_tolerance`,`人工核对设备门；当前不直接判失败。`)),...s.filter(({item:e})=>e.operationGeometryBasis===`bounded-assumption`).map(({item:e})=>sf(`info`,`appliance_bounded_envelope_clear`,`${e.item.name??`主要设备`}正前方按设备宽度生成的完整开门包络保持畅通`,[e.item.id],`rule`,`V0.1据此确认基本开启。`)),...c.map(e=>sf(`warning`,`major_appliance_door_geometry_unavailable`,`${e.item.name??`主要设备`}缺少可用于保守包络的尺寸或朝向`,[e.item.id],`insufficient_information`,`补充设备尺寸和朝向。`)),...r.map(e=>sf(`info`,`kitchen_appliance_door_reported_by_g3029`,`${e.item.name??`厨房设备`}的设备门数据由G3-029统一说明`,[e.item.id],`rule`,`查看G3-029，避免重复卡片。`))];return of(`G3-012`,`主要设备门能够正常开启`,a.length?`issue`:o.length||c.length?`unable_to_determine`:s.length?`pass`:(r.length,`not_applicable`),a.length?`发现 ${a.length} 个主要设备门无法基本开启`:o.length||c.length?`${o.length+c.length} 个主要设备门的保守开启包络仍需核验`:`${s.length} 个主要设备门按不超过设备宽度的上界可基本开启`,{normalizedObjectIds:[...a,...o,...c.map(e=>({item:e}))].map(({item:e})=>e.item.id),details:l.map(e=>e.message),measurements:[{name:`majorApplianceCount`,value:n.length+r.length},{name:`boundedEnvelopeClearCount`,value:s.length},{name:`boundedEnvelopeUnclearCount`,value:o.length}],missingData:c.map(e=>`${e.item.id}: 有效尺寸或朝向`),diagnostics:l})},e=>{let t=af(e),n=t.windows.filter(e=>e.operable),r=t.windows.filter(e=>!e.operable),i=n.map(e=>({window:e,assessment:cf(t,e.window.id,`window-approach`)})).filter(e=>!!e.assessment),a=i.filter(e=>Kd(e.assessment)===`issue`),o=i.filter(e=>Kd(e.assessment)===`partial`),s=i.filter(e=>Kd(e.assessment)===`pass`),c=n.filter(e=>!i.some(t=>t.window.window.id===e.window.id)),l=a.length?`issue`:o.length||c.length?`unable_to_determine`:s.length?`pass`:(r.length,`not_applicable`),u=l===`issue`?a.map(({window:e})=>e):l===`unable_to_determine`?[...o.map(({window:e})=>e),...c]:[],d=[...a.map(({window:e,assessment:t})=>sf(`error`,`operable_window_approach_blocked`,`${e.window.name??`可开启窗`}前方600毫米操作区只有${Math.round(t.clearRatio*100)}%可用，接近完全封堵`,[e.window.id,...t.blockerIds],`source_data`,`移动窗前家具或检查窗户所属Room。`)),...o.map(({window:e,assessment:t})=>sf(`warning`,`operable_window_approach_partial`,`${e.window.name??`可开启窗`}前方操作区约${Math.round(t.clearRatio*100)}%可用，无法仅凭面积比例确认是否存在完整站立位置`,[e.window.id,...t.blockerIds],`geometry_tolerance`,`在图中核对窗前剩余空间形状。`)),...c.map(e=>sf(`warning`,`operable_window_approach_unresolved`,`${e.window.name??`可开启窗`}缺少可靠宿主墙、位置、尺寸或Room归属`,[e.window.id],`insufficient_information`,`核对窗户几何和宿主墙。`))];return of(`G3-013`,`需要日常操作的窗户能够接近`,l,a.length?`发现 ${a.length} 扇可开启窗前方接近完全封堵`:o.length||c.length?`${o.length+c.length} 扇可开启窗的剩余操作空间需要核验`:`${s.length} 扇可开启窗均具有基本操作位置`,{normalizedObjectIds:u.map(e=>e.window.id),pascalSourceIds:u.map(e=>e.window.rawPascalId),details:d.map(e=>e.message),measurements:[{name:`operableWindowCount`,value:n.length},{name:`fixedWindowCount`,value:r.length},{name:`windowApproachEvaluatedCount`,value:i.length},{name:`blockedOperableWindowCount`,value:a.length},{name:`partialOperableWindowCount`,value:o.length},{name:`clearOperableWindowCount`,value:s.length}],missingData:c.map(e=>`${e.window.id}: 可靠操作位置`),diagnostics:d})},e=>{let t=af(e),n=t.items.filter(e=>e.capabilities.includes(`laundry-appliance`)),r=n.map(e=>({item:e,assessment:cf(t,e.item.id,`laundry-front`)})).filter(e=>!!e.assessment&&!!e.item.roomRegionId),i=r.filter(e=>!e.assessment.usable),a=n.filter(e=>!r.some(t=>t.item.item.id===e.item.id)),o=[...i.map(({item:e})=>e.item.id),...a.map(e=>e.item.id)],s=i.length?`issue`:a.length?`unable_to_determine`:n.length?`pass`:`not_applicable`,c=[...i.map(({item:e,assessment:t})=>sf(`error`,`laundry_appliance_operation_area_blocked`,`${e.item.name??`洗衣设备`}前方没有可从入口到达的基本装取衣物区域`,[e.item.id,...t.blockerIds],`source_data`,`移动设备前方柜体或调整洗衣设备位置。`)),...a.map(e=>sf(`warning`,`laundry_appliance_room_relation_unresolved`,`${e.item.name??`洗衣设备`}没有可靠Room归属，无法建立设备前操作位置`,[e.item.id],`insufficient_information`,`核对设备位置和Room Region。`))];return of(`G3-039`,`洗衣设备能够正常操作`,s,i.length?`发现 ${i.length} 台洗衣设备没有基本装取衣物空间`:a.length?`${a.length} 台洗衣设备缺少可靠Room归属`:n.length?`${n.length} 台洗衣设备可从所在空间入口到达并具有基本操作位置`:`当前没有识别到洗衣机或烘干机`,{normalizedObjectIds:o,pascalSourceIds:lf(n,o),details:c.map(e=>e.message),measurements:[{name:`laundryApplianceCount`,value:n.length},{name:`roomResolvedLaundryApplianceCount`,value:r.length},{name:`namedLaundryRoomCount`,value:t.laundryRooms.length}],missingData:a.map(e=>`${e.item.id}: 可靠Room归属`),diagnostics:c})},e=>{let t=af(e),n=t.items.filter(e=>e.capabilities.includes(`laundry-appliance`)),r=n.filter(e=>!e.roomRegionId),i=n.flatMap(e=>{let n=t.navigation.rooms.find(t=>t.roomRegionId===e.roomRegionId);return n&&!n.furnishedConnected&&(n.fixedBlockerIds.includes(e.item.id)||n.largeFurnitureBlockerIds.includes(e.item.id))?[{item:e,room:n}]:[]}),a=i.length?`not_applicable`:r.length?`unable_to_determine`:n.length?`pass`:`not_applicable`,o=[...i.map(({item:e,room:t})=>sf(`info`,`laundry_path_blockage_reported_by_foundation`,`${e.item.name??`洗衣设备`}造成的通行中断已由G3-003/G3-006报告`,[e.item.id,t.roomRegionId],`rule`,`处理基础通行规则中的同一根因。`)),...r.map(e=>sf(`warning`,`laundry_navigation_room_unresolved`,`${e.item.name??`洗衣设备`}没有可靠Room归属，无法判断是否阻断必要通道`,[e.item.id],`insufficient_information`,`核对设备位置和Room Region。`))];return of(`G3-040`,`洗衣设备不得阻断必要通道`,a,i.length?`洗衣设备通行阻断已由基础规则统一报告`:r.length?`${r.length} 台洗衣设备无法进行路径判断`:n.length?`未发现洗衣设备切断必要通道`:`当前没有洗衣设备`,{details:o.map(e=>e.message),measurements:[{name:`laundryPathBlockerCount`,value:i.length}],missingData:r.map(e=>`${e.item.id}: Room归属`),diagnostics:o})},e=>{let t=af(e).storageRooms,n=t.filter(e=>e.portalNodes.length&&!e.furnishedConnected),r=t.filter(e=>!e.portalNodes.length),i=[...n,...r].filter(e=>e.fixedBlockerIds.length||e.largeFurnitureBlockerIds.length),a=[...n,...r].filter(e=>!i.includes(e)),o=a.length?`issue`:i.length?`not_applicable`:t.length?`pass`:`not_applicable`,s=[...a.map(e=>sf(`error`,`storage_room_entry_unavailable`,`${uf(e)}没有可靠入口或无法进入内部自由空间`,[e.roomRegionId,...e.zoneIds],`source_data`,`检查储藏空间入口和柜体布置。`)),...i.map(e=>sf(`info`,`storage_entry_reported_by_foundation`,`${uf(e)}的入口阻断已由G3-003/G3-005/G3-006报告`,[e.roomRegionId,...e.fixedBlockerIds,...e.largeFurnitureBlockerIds],`rule`,`处理基础规则中的同一根因。`))];return of(`G3-041`,`储藏空间能够正常进入`,o,a.length?`发现 ${a.length} 个储藏空间无法正常进入`:i.length?`储藏入口问题已由基础规则统一报告`:t.length?`${t.length} 个储藏空间具有可靠入口和内部自由空间`:`当前没有识别到独立储藏空间`,{normalizedObjectIds:a.map(e=>e.roomRegionId),details:s.map(e=>e.message),measurements:[{name:`storageRoomCount`,value:t.length},{name:`storageEntryUsableCount`,value:t.filter(e=>e.portalNodes.length&&e.furnishedConnected).length}],diagnostics:s})},e=>{let t=af(e),n=t.items.filter(e=>e.capabilities.includes(`storage-cabinet`)),r=n.map(e=>({item:e,assessment:cf(t,e.item.id,`storage-front`)})).filter(e=>!!e.assessment),i=r.filter(e=>e.assessment.clearRatio<.2),a=n.filter(e=>!e.operationGeometryReliable&&!i.some(t=>t.item.item.id===e.item.id)),o=i.length?`issue`:a.length?`unable_to_determine`:r.length?`pass`:`not_applicable`,s=[...i.map(({item:e,assessment:t})=>sf(`error`,`storage_cabinet_retrieval_area_blocked`,`${e.item.name??`储物柜`}前方600毫米取物区域只有${Math.round(t.clearRatio*100)}%可用，已接近完全封堵`,[e.item.id,...t.blockerIds],`source_data`,`移动柜前床、家具或设备，恢复基本取物位置。`)),...a.map(e=>{let n=cf(t,e.item.id,`storage-front`);return sf(`warning`,`storage_cabinet_door_geometry_unavailable`,`${e.item.name??`储物柜`}柜前接近空间${n?`约${Math.round(n.clearRatio*100)}%可用`:`可检查`}，但JSON没有柜门数量、门宽、铰链和开向`,[e.item.id],`insufficient_information`,`柜门开启结论保持待核验，不用柜体宽度猜门片。`)})];return of(`G3-042`,`储物柜具备基本取物条件`,o,i.length?`发现 ${i.length} 个储物柜前方几乎完全被封堵`:a.length?`${a.length} 个储物柜可接近，但柜门开启仍待核验`:r.length?`${r.length} 个储物柜具有基本取物位置`:`当前没有识别到主要储物柜`,{normalizedObjectIds:i.map(({item:e})=>e.item.id),details:s.map(e=>e.message),measurements:[{name:`storageCabinetCount`,value:n.length},{name:`storageCabinetApproachIssueCount`,value:i.length}],missingData:a.map(e=>`${e.item.id}: 柜门数量、门宽、铰链和开向`),diagnostics:s})},e=>{let t=af(e),n=t.items.filter(e=>e.capabilities.includes(`laundry-appliance`)||e.capabilities.includes(`household-fixture`)).filter(e=>t.laundryRooms.some(t=>t.roomRegionId===e.roomRegionId)),r=n.map(e=>cf(t,e.item.id)).filter(e=>!!e).filter(e=>e.clearRatio<.2&&e.blockerIds.some(e=>n.some(t=>t.item.id===e))),i=r.length?`issue`:n.length>=2?`pass`:`not_applicable`,a=r.map(e=>sf(`error`,`household_equipment_complete_function_conflict`,`一个家务设备完全占用了另一个核心设备的唯一操作位置`,[e.zone.ownerObjectId,...e.blockerIds],`source_data`,`调整设备位置，使设备可以顺序使用。`));return of(`G3-043`,`家务设备之间不存在完全功能冲突`,i,r.length?`发现 ${r.length} 处家务设备完全功能冲突`:n.length>=2?`家务设备操作区虽可部分重叠，但仍可顺序使用`:`当前洗衣区域内不足两个可靠家务设备，不执行相互冲突判断`,{normalizedObjectIds:r.map(e=>e.zone.ownerObjectId),details:a.map(e=>e.message),measurements:[{name:`householdEquipmentCount`,value:n.length},{name:`completeHouseholdConflictCount`,value:r.length}],diagnostics:a})}],ff=()=>({pass:0,issue:0,unable_to_determine:0,not_applicable:0}),pf=e=>e.issue?`issue`:e.unable_to_determine?`unable_to_determine`:e.pass?`pass`:`not_applicable`,mf=(e,t)=>{e[t.status]++};function hf(e){let t=e.filter(e=>e.ruleId.startsWith(`G3-`)),n=ff(),r=ff(),i=ff(),a=ff();t.forEach(e=>{mf(n,e),mf(e.ruleId===`G3-001`?i:Number(e.ruleId.slice(3))<=13?r:a,e)});let o=new Set([`G3-001`,`G3-002`,`G3-003`,`G3-005`,`G3-007`,`G3-033`,`G3-037`]),s=t.filter(e=>e.status===`issue`),c=new Set(t.flatMap(e=>[...e.normalizedObjectIds,...e.diagnostics.flatMap(e=>e.normalizedObjectIds)])),l=[...c].filter(e=>e.includes(`-room-`)||e.startsWith(`room-region-`));return{overallStatus:pf(n),counts:n,severityCounts:{severe:s.filter(e=>o.has(e.ruleId)).length,major:s.filter(e=>!o.has(e.ruleId)&&e.severity===`error`).length,general:s.filter(e=>e.severity!==`error`).length},involvedRoomCount:new Set(l).size,involvedObjectCount:new Set([...c].filter(e=>!l.includes(e))).size,sections:{sameFloorUsability:r,crossFloorUsability:i,specialistChecks:a,dataGaps:n.unable_to_determine}}}function gf(e,t=new Date().toISOString()){let n=[...Pl,...Ql,...pu,...Ku,...hd,...Gd,...df].map(t=>t(e)),r={pass:0,issue:0,unable_to_determine:0,not_applicable:0};n.forEach(e=>r[e.status]++);let i=r.issue?`issue`:r.unable_to_determine?`unable_to_determine`:r.pass?`pass`:`not_applicable`;return{reportVersion:`1.0`,handoffSchemaVersion:e.schemaVersion,generatedAt:t,scope:`G1-G3-foundation`,overallStatus:i,counts:r,g3Summary:hf(n),tolerances:W,rules:n,diagnostics:e.diagnostics}}var _f={issue:0,unable_to_determine:1,pass:2,not_applicable:3},vf=e=>/^G3-0(?:1[4-9]|2[0-4])$/.test(e),yf=e=>/^G3-0(?:2[5-9]|3[0-8])$/.test(e),bf=e=>[`G3-026`,`G3-027`,`G3-029`,`G3-032`,`G3-034`,`G3-035`,`G3-036`,`G3-038`].includes(e),xf=e=>[`G3-010`,`G3-011`,`G3-012`,`G3-039`,`G3-040`,`G3-042`,`G3-043`].includes(e),Sf=e=>/^G3-0(?:0[9]|1[0-3]|3[9]|4[0-3])$/.test(e),Cf=e=>e.map((e,t)=>({rule:e,index:t})).sort((e,t)=>_f[e.rule.status]-_f[t.rule.status]||e.index-t.index).map(e=>e.rule),wf=(e,t)=>e.measurements.find(e=>e.name===t)?.value,Tf=(e,t)=>e?t[e]?.name||`未命名楼层`:`楼层未确定`;function Ef(e,t,n){if(e.status!==`issue`&&e.status!==`unable_to_determine`)return[];let r=[...new Set(e.diagnostics.filter(t=>e.status===`issue`?t.severity===`error`:t.severity!==`info`).flatMap(e=>e.normalizedObjectIds.slice(0,1)))],i=e.ruleId===`G1-023`&&e.status===`issue`?[...new Set(e.diagnostics.filter(e=>[`item_outside_building_envelope`,`item_penetrates_wall`,`item_physical_collision`].includes(e.code)).flatMap(e=>e.normalizedObjectIds.slice(0,1)))]:[`G3-001`,`G3-002`,`G3-007`,`G3-008`,`G3-009`].includes(e.ruleId)||e.status===`unable_to_determine`?r:e.normalizedObjectIds,a=i.map(e=>t[e]).filter(e=>!!e),o=(e.ruleId===`G1-004`?a.filter(e=>e.type===`wall`):e.ruleId===`G1-005`||e.ruleId===`G3-001`?a.filter(e=>e.type===`stair`):e.ruleId===`G1-013`?a.filter(e=>e.type===`window`||e.type===`door`):e.ruleId===`G1-023`?a.filter(e=>e.type===`item`):[`G3-002`,`G3-007`,`G3-008`,`G3-009`].includes(e.ruleId)?a.filter(e=>e.type===`door`):e.ruleId===`G3-013`?a.filter(e=>e.type===`window`):e.ruleId===`G3-037`?a.filter(e=>e.type===`door`):e.ruleId===`G3-025`?a.filter(e=>e.type===`zone`):bf(e.ruleId)||xf(e.ruleId)||vf(e.ruleId)?a.filter(e=>e.type===`item`):[`G1-007`,`G1-009`,`G1-019`].includes(e.ruleId)?a.filter(e=>e.type===`zone`):[]).map((n,r)=>{let i=Ga(n.id,t).levelId??null,a=Tf(i??void 0,t),o=e.ruleId===`G1-004`?`无效墙体 ${r+1}`:e.ruleId===`G1-023`?`${n.name||`家具或设备`} ${r+1}`:n.type===`zone`?`${n.name||`功能区`} ${r+1}`:n.type===`item`?`${n.name||`家具或设备`} ${r+1}`:n.type===`stair`?`楼梯`:n.type===`window`?`窗户`:`门`,s=e.ruleId===`G1-013`?n.wallId??n.parentId:null,c=e.ruleId.startsWith(`G3-`)||e.ruleId===`G1-023`?e.diagnostics.filter(e=>e.normalizedObjectIds[0]===n.id).flatMap(e=>e.normalizedObjectIds.filter(e=>e!==n.id&&t[e]&&Ga(e,t).levelId===i)).filter((e,t,n)=>n.indexOf(e)===t):s&&t[s]?[s]:[];return{primaryId:n.id,relatedIds:c,label:`${o} · ${a}`,levelId:i,levelName:a,status:e.status}}),s=[`G1-012`,`G1-019`,`G3-001`,`G3-003`,`G3-004`,`G3-005`,`G3-006`,`G3-017`,`G3-019`,`G3-021`,`G3-024`,`G3-025`,`G3-028`,`G3-030`,`G3-031`,`G3-033`,`G3-041`].includes(e.ruleId)?(n?.rooms??[]).filter(e=>i.includes(e.roomRegionId)).map((r,i)=>{let a=[`G3-003`,`G3-004`,`G3-006`,`G3-017`,`G3-019`,`G3-021`,`G3-024`,`G3-025`,`G3-028`,`G3-030`,`G3-031`,`G3-033`,`G3-041`].includes(e.ruleId),o=a?e.diagnostics.filter(e=>e.normalizedObjectIds.includes(r.roomRegionId)).flatMap(e=>e.normalizedObjectIds.filter(e=>e!==r.roomRegionId&&t[e])).filter((e,t,n)=>n.indexOf(e)===t):e.ruleId===`G3-001`&&e.status===`unable_to_determine`?[]:r.boundaryWallIds,s=(n?.roomToZoneIds[r.roomRegionId]??[]).map(e=>t[e]?.name?.trim()).filter(e=>!!e).join(` / `)||`${e.ruleId===`G3-001`?`跨层待核验空间`:e.ruleId===`G3-005`?`无入口空间`:a?e.status===`unable_to_determine`?`待核验空间`:`通行受阻空间`:`异常空间`} ${i+1}`;return{primaryId:r.roomRegionId,relatedIds:o,label:`${s} · ${Tf(r.levelId,t)}`,levelId:r.levelId,levelName:Tf(r.levelId,t),status:e.status}}):[];return[...o,...s]}function Df(e,t,n){let r=Ef(e,t,n),i=r.length;if(e.ruleId===`G1-004`&&e.status===`issue`)return{title:`发现 ${i} 段无效墙体`,description:`这些墙段的起点和终点重合，实际长度为 0，可能是误操作产生的无效墙段。`,rationale:`零长度墙无法形成有效墙面，也可能影响后续尺寸、开口和空间检查。`,recommendation:`在图中逐段定位后删除无效墙体，或重新确定墙体的起点和终点。`,problemCountLabel:String(i),targets:r};if(e.ruleId===`G1-005`&&e.status===`issue`)return{title:`楼梯的楼层关联已丢失`,description:`这座楼梯记录的起始楼层和到达楼层在当前项目中都不存在，因此无法确认它实际连接的楼层。`,rationale:`楼层关联缺失会使跨层关系、到达层入口和后续通行检查失去依据。`,recommendation:`检查楼梯的上下楼层设置，并重新关联到项目中的有效楼层。`,supplemental:`可以在图中定位楼梯本身；缺失的楼层无法高亮。`,problemCountLabel:String(i),targets:r};if(e.ruleId===`G1-013`&&e.status===`issue`){let t=Number(wf(e,`rightOvershoot`)??wf(e,`leftOvershoot`)),n=Number(e.thresholds.find(e=>e.name===`pointOnBoundaryTolerance`)?.value);return{title:`窗户超出所在墙体`,description:`该窗洞右侧超出宿主墙约 ${Number.isFinite(t)?Math.round(t*1e3):`—`} 毫米，超过当前允许的 ${Number.isFinite(n)?Math.round(n*1e3):`—`} 毫米几何容差。`,rationale:`超出墙端的洞口可能造成墙体与窗洞关系错误，并影响施工尺寸。`,recommendation:`检查窗户位置、洞口宽度或宿主墙长度。`,problemCountLabel:String(i),targets:r}}if(e.ruleId===`G1-019`&&e.status===`unable_to_determine`){let t=Number(wf(e,`reliableRoomRegionCount`)??0),n=Number(wf(e,`unmatchedRoomCount`)??0);return{title:`主要空间名称暂时无法完整核验`,description:t===0?`当前没有形成可用于命名核验的可靠 Room Region，系统不会把 Zone 直接当作房间。`:`当前识别出 ${t} 个可靠 Room Region，其中 ${n} 个尚未匹配到可用于命名的 Zone。`,rationale:`物理房间与设计师标注的功能 Zone 是两类对象；只有可靠匹配后才能核验房间名称。`,recommendation:t===0?`先检查建筑边界和墙体分隔是否能形成可靠空间。`:`核对未匹配 Room Region 附近的 Zone 范围和名称。`,supplemental:`这不代表已经发现未命名房间。`,problemCountLabel:`未确定`,targets:[]}}if(e.ruleId===`G1-006`){let t=Number(+(wf(e,`usableForEvaluation`)===!1));return{title:e.status===`pass`?`已识别各楼层的建筑范围`:`建筑范围暂时无法可靠识别`,description:e.status===`pass`?`系统已根据楼层中的 Floor/Slab 轮廓生成建筑平面范围。`:`当前 Floor/Slab 轮廓不足或存在异常，系统不能可靠判断该楼层的室内建筑范围。`,rationale:`建筑范围是判断家具、设备和后续空间关系的共同依据。`,recommendation:e.status===`pass`?`可在画布中打开“显示建筑边界”核对结果。`:`检查该楼层的 Floor/Slab 轮廓是否完整、闭合且属于室内区域。`,problemCountLabel:e.status===`pass`?`0`:String(Math.max(1,t)),targets:[]}}if(e.ruleId===`G1-023`&&e.status===`issue`)return{title:`发现 ${i} 个家具或设备放置冲突`,description:`其中 ${Number(wf(e,`outsideItemCount`)??0)} 个越出建筑范围、${Number(wf(e,`wallPenetrationCount`)??0)} 处嵌入墙体、${Number(wf(e,`itemCollisionPairCount`)??0)} 组占用同一段实体空间。`,rationale:`家具可以贴墙；只有实际穿入墙体才报警。家具平面投影重叠时，还会核对安装高度，地柜与吊柜高度错开不会被当作碰撞。`,recommendation:`逐个在图中查看红色对象和橙色关联对象，检查位置、尺寸和安装高度。`,problemCountLabel:String(i),targets:r};if(e.ruleId===`G1-023`&&e.status===`unable_to_determine`)return{title:`部分家具或设备暂时无法完整核验`,description:`缺少可靠建筑边界、对象占地、类别或安装高度，系统不会猜测是否越界或发生实体碰撞。`,rationale:`范围检查需要平面占地；物理碰撞还需要两件对象的垂直高度区间。`,recommendation:`补充 Floor/Slab 轮廓以及对象位置、宽度、深度、高度和安装高度。`,problemCountLabel:`未确定`,targets:r};if(e.ruleId===`G1-007`)return{title:e.status===`pass`?`需要独立封闭的空间边界完整`:`部分应封闭空间没有形成独立房间`,description:e.summary,rationale:`卧室、卫生间和储藏类空间需要可靠边界，才能支持隐私、功能和后续通行检查。`,recommendation:e.status===`pass`?`无需处理。`:`检查对应 Zone 周边墙体闭合情况和 Zone 轮廓。`,problemCountLabel:e.status===`issue`?String(i):`0`,targets:r};if(e.ruleId===`G1-009`)return{title:e.status===`issue`?`发现功能区域异常重叠`:`未发现空间异常重叠`,description:e.summary,rationale:`重复或跨房间的功能区域会造成面积统计和空间归属错误。`,recommendation:e.status===`issue`?`在图中检查红色 Zone 的轮廓是否重复或跨越分隔墙。`:`无需处理。`,problemCountLabel:e.status===`issue`?String(i):`0`,targets:r};if(e.ruleId===`G1-012`)return{title:e.status===`issue`?`发现 ${i} 个异常空间碎片`:`未发现错误空间`,description:e.summary,rationale:`极小或细长区域通常来自墙端缝隙、曲墙离散或边界误差，并非真实房间。`,recommendation:e.status===`issue`?`逐个定位并检查相邻墙端与 Slab 边界。`:`无需处理。`,problemCountLabel:e.status===`issue`?String(i):`0`,targets:r};if(e.ruleId===`G3-005`)return{title:e.status===`issue`?`发现 ${i} 个无法进入的房间`:e.status===`unable_to_determine`?`部分房间入口暂时无法确认`:`使用空间均有有效入口`,description:e.summary,rationale:`形成完整房间的使用空间需要至少一个有效房门、开放入口或楼梯连接。`,recommendation:e.status===`issue`?`检查是否遗漏房门、门的宿主关系，或该区域是否属于无需进入的构造空间。`:e.status===`unable_to_determine`?`先修复未解析门洞或补充空间用途。`:`无需处理。`,problemCountLabel:e.status===`issue`?String(i):e.status===`unable_to_determine`?`未确定`:`0`,targets:r};if(e.ruleId===`G3-001`){let t=Number(wf(e,`entranceCandidateCount`)??0),n=Number(wf(e,`unresolvedStairCount`)??0),a=e.measurements.filter(e=>e.name===`levelSameFloorConnected`&&e.value===!0).length,o=Number(wf(e,`crossLevelMainRoomCount`)??0);return{title:e.status===`issue`?`发现 ${i} 个外门不可达的主要空间`:e.status===`unable_to_determine`?`${o} 个跨层主要空间尚未确认`:`主要空间均可从至少一个外门到达`,description:e.status===`unable_to_determine`?`当前识别到 ${t} 个可靠外门，${a} 个楼层各自的同层门网已经连通；但 ${n} 座楼梯尚未可靠匹配上下层落地区域，因此不能确认另一层的 ${o} 个主要空间。`:e.summary,rationale:`只要存在任意一扇可靠外门能通达全部主要空间，即满足本项。当前只检查拓扑连通，不检查家具、净宽或门扇碰撞。`,recommendation:e.status===`issue`?`逐个定位不可达空间，检查沿途房门、开放连接和楼梯设置。`:e.status===`unable_to_determine`?`先在图中查看楼梯，核对上下层ID及两端楼梯口所在空间。`:`无需处理。`,supplemental:e.status===`unable_to_determine`?`黄色标注表示待核验，不代表这些空间已经不可达。`:void 0,problemCountLabel:e.status===`issue`?String(i):e.status===`unable_to_determine`?String(o):`0`,targets:r}}if(e.ruleId===`G3-002`)return{title:e.status===`issue`?`发现 ${i} 处被阻断的门口`:e.status===`unable_to_determine`?`部分门口暂时无法核验`:`门口均保留基本进入空间`,description:e.status===`issue`?`${r[0]?.label??`该门`}两侧的基本进入区域被${r[0]?.relatedIds.map(e=>t[e]?.name||t[e]?.type).filter(Boolean).join(`、`)||`大型对象`}完全占用，可能无法正常进出。`:e.summary,rationale:`门口需要保留可进入区域；轻微靠近但未完全堵住的家具不会被判为问题。`,recommendation:e.status===`issue`?`在图中定位后移动或缩小阻挡对象，恢复门口两侧的基本进入空间。`:e.status===`unable_to_determine`?`补充门洞位置、宽度或关联对象的可靠平面占地。`:`无需处理。`,problemCountLabel:e.status===`issue`?String(i):e.status===`unable_to_determine`?`未确定`:`0`,targets:r};if(e.ruleId===`G3-007`)return{title:e.status===`issue`?`发现 ${i} 扇无法打开到90°的门`:e.status===`unable_to_determine`?`${i} 扇门的90°开启情况待核验`:`门均可打开到90°`,description:e.status===`issue`?`${r[0]?.label??`该门`}在打开到90°之前会碰到${r[0]?.relatedIds.map(e=>t[e]?.name||t[e]?.type).filter(Boolean).join(`、`)||`障碍物`}。`:e.status===`unable_to_determine`?`这些门缺少可靠位置、铰链或开向；可以逐扇在图中查看。`:e.summary,rationale:`单开门按实际门扇计算；普通双开门按两片等宽门扇、各占总门洞一半，并采用JSON中的开向。`,recommendation:e.status===`issue`?`检查门的开启方向、铰链侧，以及图中橙色对象的位置。`:e.status===`unable_to_determine`?`逐扇定位并补充门的位置、铰链或开向。`:`无需处理。`,supplemental:e.status===`unable_to_determine`?`黄色标注表示数据待核验，不代表门已经打不开。`:void 0,problemCountLabel:e.status===`issue`||e.status===`unable_to_determine`?String(i):`0`,targets:r};if(e.ruleId===`G3-008`)return{title:e.status===`issue`?`发现 ${i} 组严重门扇互锁`:e.status===`unable_to_determine`?`${i} 扇门的互锁风险待核验`:`未发现严重门扇互锁`,description:e.status===`issue`?`两扇门打开到90°时会相互撞到对方关闭状态的门扇，可能形成互锁。`:e.status===`unable_to_determine`?`这些门缺少可靠操作几何，系统不能完整排除与附近门的互锁；可以逐扇在图中查看。`:e.summary,rationale:`只有两扇门相互阻挡、导致双方都不能完成90°开启时才判为严重互锁。`,recommendation:e.status===`issue`?`调整其中一扇门的开启方向、铰链侧或位置。`:e.status===`unable_to_determine`?`逐扇定位并补充门扇位置、铰链或开向。`:`无需处理。`,supplemental:e.status===`unable_to_determine`?`黄色标注表示待核验，不代表已经发现严重互锁。`:void 0,problemCountLabel:e.status===`issue`||e.status===`unable_to_determine`?String(i):`0`,targets:r};if(e.ruleId===`G3-003`)return{title:e.status===`issue`?`发现 ${i} 个主要空间通行中断`:e.status===`unable_to_determine`?`${i} 个主要空间路径待核验`:`主要空间内部基本路径连续`,description:e.status===`issue`?`从门口进入后，无法保留约600毫米宽、路径中心距障碍物至少300毫米的连续基本通行空间。`:e.summary,rationale:`本项检查房间内部的基础连通性，不评价舒适度、最优路线或规范通道宽度。`,recommendation:e.status===`issue`?`定位红色中断区域，调整橙色阻挡对象或家具布局。`:e.status===`unable_to_determine`?`逐个定位黄色空间，检查Room几何、对象类别或占地轮廓。`:`无需处理。`,problemCountLabel:e.status===`issue`||e.status===`unable_to_determine`?String(i):`0`,targets:r};if(e.ruleId===`G3-004`)return{title:e.status===`issue`?`发现 ${i} 个房间依赖移动大型家具才能通行`:e.status===`unable_to_determine`?`${i} 个房间的家具阻断归因待核验`:`通行不依赖移动大型家具`,description:e.status===`issue`?`${r[0]?.relatedIds.map(e=>t[e]?.name||`大型家具`).filter(Boolean).join(`、`)||`大型家具`}截断了门口到房间内部或其他门口之间的基本路径。`:e.summary,rationale:`只有固定障碍下可通、加入大型家具后不通，才归入本规则。`,recommendation:e.status===`issue`?`移动床、沙发、餐桌、书桌或独立柜体，恢复距障碍物至少300毫米的连续路径。`:e.status===`unable_to_determine`?`逐个定位并确认相关对象类别、尺寸和可移动属性。`:`无需处理。`,problemCountLabel:e.status===`issue`||e.status===`unable_to_determine`?String(i):`0`,targets:r};if(e.ruleId===`G3-006`)return{title:e.status===`issue`?`发现 ${i} 个房间被固定实体截断通行`:e.status===`unable_to_determine`?`${i} 个房间的固定障碍情况待核验`:`未发现路径穿越固定实体`,description:e.status===`issue`?`${r[0]?.relatedIds.map(e=>t[e]?.name||`固定对象`).filter(Boolean).join(`、`)||`固定对象`}截断了日常基本路径。`:e.status===`unable_to_determine`?`${r[0]?.label??`该空间`}按300毫米避让距离计算后没有可靠自由空间；图中橙色的${r[0]?.relatedIds.map(e=>t[e]?.name||`固定设备`).filter(Boolean).join(`、`)||`固定设备`}占用了主要空间，但系统还不能确认该设备空间是否适用日常通行检查。`:e.summary,rationale:`固定柜体、洁具、设备和建筑构件造成的中断与可移动家具分开归因。`,recommendation:e.status===`issue`?`调整固定对象、门口或空间布局。`:e.status===`unable_to_determine`?`点击“在图中查看”，核对该空间是否属于日常进入区域，以及固定设备是否真实占用通道。`:`无需处理。`,supplemental:e.status===`unable_to_determine`?`黄色标注表示待核验，不代表已经发现固定对象阻断。`:void 0,problemCountLabel:e.status===`issue`||e.status===`unable_to_determine`?String(i):`0`,targets:r};if(vf(e.ruleId)){let t={"G3-014":{issue:`床没有完整放在卧室内`,unable:`部分床的放置情况待核验`,rationale:`床的实体占地需要完整位于可靠房间内；贴墙可以，穿入墙体或越出房间不可以。`,recommendation:`在图中检查床的位置、旋转和尺寸，并修正穿墙或越界。`},"G3-015":{issue:`这张床没有可用的上下床位置`,unable:`部分床无法核验上下床位置`,rationale:`床至少需要一侧保留600毫米基本上下床区域；只有一侧可用不会在本轮判失败。`,recommendation:`移动床或相邻家具，至少恢复一侧基本上下床位置。`},"G3-016":{issue:`双人床没有基本上下床位置`,unable:`部分床的单双人类型待确认`,rationale:`本轮只要求双人床至少保留一个基本上下床位置；两侧便利性留给S1。`,recommendation:`补充可靠床型，或移动家具恢复至少一侧上下床空间。`},"G3-017":{issue:`卧室入口被家具挡住`,unable:`部分卧室入口待核验`,rationale:`从卧室门口进入后应能到达房间内部；基础通行规则已报告的问题不会在这里重复报警。`,recommendation:`检查卧室门口、Portal落点和附近家具。`},"G3-018":{issue:`衣柜无法正常打开和取物`,unable:`衣柜开启情况暂时无法判断`,rationale:`当前JSON不支持衣柜门型和开启方向，本阶段已取消该项判断。`,recommendation:`无需处理；未来数据结构支持衣柜门型后再启用。`},"G3-019":{issue:`床阻断了卧室必要通行`,unable:`部分卧室入口或路径待核验`,rationale:`本项只检查卧室房门、套内卫生间入口和已建立主要路径。普通窗户留给G3-013，紧急逃生窗属于G2；衣柜操作由G3-018独立处理。`,recommendation:`检查卧室Door Portal和主要路径；已有入口或路径阻断请查看G3-002、G3-004。`},"G3-020":{issue:`客厅主要坐具无法正常使用`,unable:`部分坐具几何待确认`,rationale:`家具中心红线就是解析后局部+Z朝向，系统沿该方向生成基本进入区；沙发靠墙不是问题。`,recommendation:`检查家具尺寸、位置、旋转和正前方阻挡对象。`},"G3-021":{issue:`客厅家具阻断了主要通行`,unable:`客厅主要通行待核验`,rationale:`本项复用600毫米房内路径；G3-004已报告的同一阻断不会重复生成问题。`,recommendation:`检查客厅Portal、蓝色路径和橙色家具。`},"G3-022":{issue:`餐桌座位不足`,unable:`餐桌计划人数尚未提供`,rationale:`系统可以数出附近餐椅，但没有计划用餐人数时无法判断座位是否满足计划。`,recommendation:`补充计划用餐人数或餐桌计划座位数。`},"G3-023":{issue:`餐椅后方空间不足，无法基本入座`,unable:`部分餐椅缺少可靠位置或尺寸`,rationale:`家具中心红线表示餐椅前方，红线反方向就是椅后方；系统沿该方向检查600毫米基本拉出区域，不需要用餐桌推断方向。`,recommendation:`移动餐椅或椅后方家具，恢复基本拉出区域。`},"G3-024":{issue:`客餐厅复合使用区发生冲突`,unable:`客餐厅复合功能暂时无法完整核验`,rationale:`客厅坐具、餐桌餐椅和主要通道需要能够同时基本使用；坐具和餐椅方向都直接复用家具中心红线。`,recommendation:`检查坐具或餐椅使用区、家具几何和主要路径。`}}[e.ruleId];return{title:e.status===`issue`?t.issue:e.status===`unable_to_determine`?t.unable:e.ruleName,description:e.summary,rationale:t.rationale,recommendation:e.status===`pass`||e.status===`not_applicable`?`无需处理。`:t.recommendation,supplemental:e.status===`unable_to_determine`?`黄色标注表示缺少判断依据，不代表已经发现设计问题。`:void 0,problemCountLabel:e.status===`issue`||e.status===`unable_to_determine`?String(i):`0`,targets:r}}if(yf(e.ruleId)){let t={"G3-025":{issue:`厨房核心设备之间无法连续使用`,unable:`厨房基本操作关系暂时无法完整核验`,rationale:`水槽、灶具和冰箱需要处在同一厨房或可靠相连区域，并能从入口到达；本轮不评价工作三角效率。`,recommendation:`核对缺失设备的category、functionTags和所在Room，或处理G3-026中的接近问题。`},"G3-026":{issue:`厨房核心设备前没有可用站立位置`,unable:`部分厨房设备的接近空间待核验`,rationale:`系统沿设备自身红线方向检查600毫米基本站立区，并确认该区域可从厨房入口到达。`,recommendation:`移动红色设备前方的橙色对象，或检查设备位置和朝向。`},"G3-027":{issue:`水槽或灶具附近缺少基本操作台面`,unable:`厨房台面语义暂时不完整`,rationale:`只有明确标记为Counter、Cabinet或Island的实体才作为台面依据，不根据空白区域猜测。`,recommendation:`核对台面对象类别，或在水槽、灶具附近补充可识别台面。`},"G3-028":{issue:`橱柜或岛台之间无法基本通行`,unable:`厨房对向操作区暂时无法核验`,rationale:`本轮只要求保留600毫米基本连续通行空间，更舒适的厨房间距留给S1。`,recommendation:`调整橱柜、岛台或半岛位置，恢复基本通行。`},"G3-029":{issue:`厨房设备门无法基本使用`,unable:`厨房设备门的开启情况无法判断`,rationale:`JSON没有设备门扇宽度、铰链和开向时，系统不会用冰箱或烤箱的整体矩形冒充门扇。`,recommendation:`补充设备门扇尺寸、铰链侧、开向和开启角度。`},"G3-030":{issue:`厨房入口被设备或岛台挡住`,unable:`厨房入口暂时无法完整核验`,rationale:`厨房入口需要连接到房内基本自由空间；基础通行规则已报告的同一问题不会重复生成卡片。`,recommendation:`检查厨房Door Portal、入口落点及附近高柜、冰箱或岛台。`},"G3-031":{issue:`厨房核心操作位成为唯一穿行通道`,unable:`厨房唯一通道关系暂时无法核验`,rationale:`只有其他主要空间的唯一拓扑路径明确穿过水槽或灶具前操作区时才判问题；开放式客餐厨不会自动失败。`,recommendation:`调整空间连接或核心设备位置，避免日常穿行经过操作位。`},"G3-032":{issue:`厨房高柜或设备形成完全死锁`,unable:`设备与高柜的开启死角无法排除`,rationale:`实体重叠可以直接确认；没有门扇开向时，只能标记待核验，不能猜测设备如何开启。`,recommendation:`检查红色设备及橙色柜体，或补充设备门和高柜门的开启几何。`},"G3-033":{issue:`卫生间无法正常进入或退出`,unable:`卫生间入口暂时无法核验`,rationale:`进入后需要存在基本站立、关门和退出空间；同一门口根因只保留一条主要问题。`,recommendation:`调整门口洁具、柜体或门开向，恢复进入和退出空间。`},"G3-034":{issue:`坐便器前方无法正常坐下和起身`,unable:`部分坐便器使用区待核验`,rationale:`这里只判断坐便器前方是否有600毫米基本使用区并能从入口到达，不执行G2规范净空。`,recommendation:`移动前方洗手台、浴缸、隔断或其他阻挡对象。`},"G3-035":{issue:`洗手盆前没有可用站立位置`,unable:`部分洗手盆使用区待核验`,rationale:`洗手盆前需要基本站立位置并可从卫生间入口到达。`,recommendation:`调整洗手盆或前方洁具、门扇和隔断。`},"G3-036":{issue:`淋浴或浴缸入口被挡住`,unable:`部分淋浴或浴缸入口待核验`,rationale:`缺少淋浴门数据时只检查几何入口，不猜测门型或开向。`,recommendation:`移动入口前的坐便器、洗手台或其他阻挡对象。`},"G3-037":{issue:`卫生间门与洁具形成被困风险`,unable:`部分卫生间平开门的被困风险待核验`,rationale:`只有门扇被洁具明确卡住且必要使用区也不可用时才判问题；推拉门不套用平开门扫掠。`,recommendation:`调整卫生间门开向、铰链侧或洁具位置。`},"G3-038":{issue:`卫生设备相互占满必要使用位置`,unable:`卫生设备功能冲突待核验`,rationale:`使用区可以部分重叠并顺序使用；只有相互完全占用、导致至少一个设备无法使用才判问题。`,recommendation:`调整冲突洁具的位置，恢复至少一个必要使用区。`}}[e.ruleId];return{title:e.status===`issue`?t.issue:e.status===`unable_to_determine`?t.unable:e.ruleName,description:e.summary,rationale:t.rationale,recommendation:e.status===`pass`||e.status===`not_applicable`?`无需处理。`:t.recommendation,supplemental:e.status===`unable_to_determine`?`黄色标注表示数据不足，不代表已经发现设计错误。`:void 0,problemCountLabel:e.status===`issue`||e.status===`unable_to_determine`?String(i||Number(wf(e,`missingKitchenCoreCount`)??0)):`0`,targets:r}}if(Sf(e.ruleId)){let t={"G3-009":{issue:`进入房间后没有可停留的位置`,unable:`部分门后的停留空间待核验`,rationale:`穿过门后需要有一个可以站住并继续进入房间的位置；同一通行阻断不会重复报警。`,recommendation:`查看门内侧红色落点，移动附近固定对象或大型家具。`},"G3-010":{issue:`固定柜前被完全挡住`,unable:`固定柜门开启情况待核验`,rationale:`当前可以检查柜前600毫米操作位置；没有门片数量、宽度、铰链和开向时，不能判断柜门实际如何打开。`,recommendation:`逐个查看黄色柜体；如需自动判断开启，资产需提供独立柜门几何。`},"G3-011":{issue:`主要抽屉无法拉出`,unable:`部分抽屉的保守拉出包络待核验`,rationale:`系统沿家具红线方向，把柜体深度作为抽屉最大拉出深度；完整包络畅通即可确认通过。`,recommendation:`查看黄色包络并人工核对实际抽屉深度；空间不足时不会直接猜测失败。`},"G3-012":{issue:`主要设备门无法打开`,unable:`部分设备门的保守开启包络待核验`,rationale:`系统沿设备正面方向，以设备宽度作为门体最大伸出范围；完整包络畅通即可确认通过。`,recommendation:`查看黄色包络；若发生局部冲突，人工核对真实门径和左右铰链。`},"G3-013":{issue:`可开启窗前无法正常操作`,unable:`部分可开启窗的操作位置无法建立`,rationale:`V0.1把所有非fixed窗都作为日常操作窗，检查窗内侧600毫米基本操作位置。`,recommendation:`移动窗前家具，或核对窗户位置、宿主墙和Room归属。`},"G3-039":{issue:`洗衣设备前没有装取衣物空间`,unable:`洗衣设备的Room归属待核验`,rationale:`洗衣机可以位于洗衣房、MUD或其他合理空间；本规则只要求所在Room可靠且设备前操作位置可达。`,recommendation:`核对洗衣机位置和Room Region，不再强制要求LAUNDRY Zone。`},"G3-040":{issue:`洗衣设备阻断必要通道`,unable:`洗衣设备的通道关系待核验`,rationale:`只有设备切断入口或必要路径才算问题；基础通行规则已报告的同一根因不会再生成卡片。`,recommendation:`核对设备Room归属和必要路径。`},"G3-041":{issue:`储藏空间无法正常进入`,unable:`储藏空间入口待核验`,rationale:`储藏室、食品储藏室和步入式衣帽间需要有入口，并能从门口进入内部自由空间。`,recommendation:`检查入口Door Portal及门后的柜体布置。`},"G3-042":{issue:`储物柜前被完全挡住`,unable:`储物柜取物条件待核验`,rationale:`系统可以检查柜前600毫米取物位置；缺少柜门几何时只保留接近检查，不猜测门片。`,recommendation:`逐个查看黄色储物柜，移动柜前大型家具，柜门开启另行人工核对。`},"G3-043":{issue:`家务设备形成完全功能冲突`,unable:`家务设备关系待核验`,rationale:`操作区允许部分重叠并顺序使用；只有一个设备完全占掉另一个设备唯一位置才判问题。`,recommendation:`调整相互锁死的设备或家政柜位置。`}}[e.ruleId];return{title:e.status===`issue`?t.issue:e.status===`unable_to_determine`?t.unable:e.ruleName,description:e.summary,rationale:t.rationale,recommendation:e.status===`pass`||e.status===`not_applicable`?`无需处理。`:t.recommendation,supplemental:e.status===`unable_to_determine`?`黄色标注是可逐项定位的待核验对象，不代表已经发现设计错误。`:void 0,problemCountLabel:e.status===`issue`||e.status===`unable_to_determine`?String(i||e.diagnostics.filter(e=>e.severity!==`info`).length):`0`,targets:r}}return{title:e.ruleName,description:e.summary,rationale:e.status===`pass`?`当前数据满足本项基础检查。`:`请查看技术详情了解判断依据。`,recommendation:e.status===`pass`||e.status===`not_applicable`?`无需处理。`:`根据技术详情补充或修正数据。`,problemCountLabel:e.status===`issue`?String(e.normalizedObjectIds.length):`0`,targets:r}}function Of(e,t,n){return e.flatMap(e=>Df(e,t,n).targets.map((t,n)=>({...t,ruleId:e.ruleId,targetIndex:n})))}var kf=e=>Array.isArray(e)&&e.length>=2&&e.slice(0,2).every(Number.isFinite),Af=(e,t=2.4,n=.55)=>{if(!e.length||e.some(e=>!Number.isFinite(e.x)||!Number.isFinite(e.z)))return null;let r=e.map(e=>e.x),i=e.map(e=>e.z),a=Math.max(...r)-Math.min(...r),o=Math.max(...i)-Math.min(...i),s=Math.max(t,a+n*2),c=Math.max(t,o+n*2),l=(Math.min(...r)+Math.max(...r))/2,u=(Math.min(...i)+Math.max(...i))/2;return{minX:l-s/2,minZ:u-c/2,width:s,height:c}};function jf(e,t,n){let r=e[t];if(!r){let e=n?.rooms.find(e=>e.roomRegionId===t),r=e?.polygons.flatMap(e=>e.flatMap(e=>e.map(([e,t])=>({x:e,z:t}))));return e&&r?.length?{renderable:!0,levelId:e.levelId,viewBox:Af(r)}:{renderable:!1,levelId:null,viewBox:null,reason:`评价引用的对象已不存在。`}}let i=Ga(r.id,e).levelId??null;if(!i)return{renderable:!1,levelId:null,viewBox:null,reason:`无法确定对象所属楼层。`};let a=[];if(r.type===`wall`&&kf(r.start)&&kf(r.end))a=[{x:r.start[0],z:r.start[1]},{x:r.end[0],z:r.end[1]}];else if(r.type===`door`||r.type===`window`){let t=to(r,e),n=Number(r.width);if(t&&Number.isFinite(n)&&n>0){let e=Math.cos(t.rotationY)*n/2,r=Math.sin(t.rotationY)*n/2;a=[{x:t.x-e,z:t.z-r},{x:t.x+e,z:t.z+r}]}}else if(r.type===`stair`)a=ns(r,e);else if(r.type===`shelf`)a=Lo(r,e);else if(r.type===`zone`)a=os(r);else if(r.type===`item`){let t=Za(r.id,e),n=Ja(r);t.status===`ok`&&n&&(a=[{x:t.x-n.width/2,z:t.z-n.depth/2},{x:t.x+n.width/2,z:t.z+n.depth/2}])}let o=Af(a);return o?{renderable:!0,levelId:i,viewBox:o}:{renderable:!1,levelId:i,viewBox:null,reason:`该对象暂时无法在画布中显示。`}}function Mf(e,t,n){return{ruleId:e,primaryId:t.primaryId,relatedIds:[...t.relatedIds],targetIndex:n,status:t.status}}function Nf(e,t){return e?e.primaryId===t?`primary`:e.relatedIds.includes(t)?`related`:null:null}var Pf=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),$=o(((e,t)=>{t.exports=Pf()}))(),Ff={images:!0,boxes:!1,centers:!1,axes:!1,names:!1,zones:!0,slabs:!0,walls:!0,shelves:!0,stairs:!0,openings:!0,dimensions:!0},If={minX:-5,minZ:-5,width:10,height:10},Lf=90,Rf=(e,t)=>t===`millimeters`?`${Ys(e,t)} mm`:Ys(e,t);function zf(){let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)(`未导入文件`),[i,a]=(0,_.useState)([{id:1,levelId:``,viewBox:If,rotation:Lf}]),[o,s]=(0,_.useState)(2),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)([]),[g,v]=(0,_.useState)(`off`),[b,x]=(0,_.useState)(`millimeters`),[S,C]=(0,_.useState)(0),[w,T]=(0,_.useState)(null),[E,ee]=(0,_.useState)([]),[te,ne]=(0,_.useState)(!1),[re,D]=(0,_.useState)(null),[O,k]=(0,_.useState)(!1),[A,j]=(0,_.useState)(null),[M,N]=(0,_.useState)(!1),[P,ie]=(0,_.useState)([]),[ae,oe]=(0,_.useState)(!1),[F,I]=(0,_.useState)(null),[se,L]=(0,_.useState)(!1),[ce,le]=(0,_.useState)(null),[ue,de]=(0,_.useState)(!1),[fe,pe]=(0,_.useState)(null),[me,he]=(0,_.useState)(!1),[ge,_e]=(0,_.useState)(null),[ve,ye]=(0,_.useState)(!1),[be,xe]=(0,_.useState)(null),[Se,Ce]=(0,_.useState)([]),[we,Te]=(0,_.useState)(null),[Ee,De]=(0,_.useState)(null),[Oe,ke]=(0,_.useState)(Ff),Ae=(0,_.useRef)(null),je=(0,_.useRef)(1),Me=(0,_.useRef)({}),Ne=e?.nodes||{},Pe=Object.values(Ne).filter(e=>e.type===`level`);(0,_.useEffect)(()=>{let e=e=>{if(e.key===`Escape`){if(v(`off`),we){Te(null),De(null);return}Ce([]),De(null)}};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[we]),(0,_.useEffect)(()=>ic(()=>C(e=>e+1)),[]);let Fe=(e,n)=>{try{let i=Va(JSON.parse(e));i.diagnostics=[...i.diagnostics,...oo(i.nodes)];let o=Object.values(i.nodes).find(e=>e.type===`level`)?.id||``;t(i),T(null),ee([]),ne(!1),D(null),k(!1),j(null),N(!1),ie([]),oe(!1),I(null),L(!1),le(null),pe(null),he(!1),_e(null),ye(!1),de(!1),xe(null),Ce([]),Te(null),De(null),r(n),l(null),d(null),p(null),h([]),v(`off`),je.current=1,a([{id:1,levelId:o,viewBox:Uf(i.nodes,o,!0),rotation:Lf}]),s(2)}catch{T(null),ee([]),ne(!1),D(null),k(!1),j(null),N(!1),ie([]),oe(!1),I(null),L(!1),le(null),pe(null),he(!1),_e(null),ye(!1),de(!1),xe(null),Ce([]),Te(null),De(null),t({nodes:{},raw:null,diagnostics:[{severity:`error`,code:`invalid_json`,message:`无法解析 JSON 文件`}]})}};(0,_.useEffect)(()=>{Fe(y,`Bellevue demo.json`)},[]);let Ie=(e,t)=>a(n=>n.map(n=>n.id===e?{...n,...t}:n)),Le=()=>{let e=i[0]?.levelId||Pe[0]?.id||``;a(t=>[...t,{id:o,levelId:e,viewBox:Uf(Ne,e,Oe.dimensions),rotation:Lf}]),s(e=>e+1)},Re=e=>a(t=>t.length>1?t.filter(t=>t.id!==e):t),ze=(0,_.useMemo)(()=>Object.values(Ne).filter(e=>e.type===`level`).flatMap(e=>As(Ne,e.id).diagnostics),[Ne]),Be=(0,_.useMemo)(()=>dc(Ne),[Ne,S]),Ve=(0,_.useMemo)(()=>Pc(Ne,Array.isArray(e?.raw?.installedPlugins)?e.raw.installedPlugins:[],Oe),[Ne,e,Oe]),He=(0,_.useMemo)(()=>e?[...e.diagnostics,...Ep(Ne),...Ve.diagnostics,...ze,...Be]:[],[e,Ne,Ve,ze,Be]),Ue=e=>{let t=!Oe[e];ke(n=>e===`images`?{...n,images:t,shelves:t}:e===`centers`?{...n,centers:t,axes:t}:{...n,[e]:t}),e===`dimensions`&&a(e=>e.map(e=>({...e,viewBox:Uf(Ne,e.levelId,t)})))},We=()=>{if(e)try{let t=zc(e),n=il(t),r=Hl(t,n),i=au(t),a=gf(t),o=zu(t),s=id(t),c=Ed(t),l=af(t);T(a),ee(qc(t)),D(n),j(r),ie(i),I(o),le(s),pe(c),_e(l),Ce(Of(a.rules,Ne,n).map(e=>Mf(e.ruleId,e,e.targetIndex))),Te(null),xe(null),De(null)}catch(e){T(null),xe(e instanceof Error?e.message:`评价器发生未知错误`)}},Ge=e=>{window.setTimeout(()=>Me.current[e]?.scrollIntoView({behavior:`smooth`,block:`center`}),0)},Ke=(e,t,n,r=!1)=>{let i=jf(Ne,t.primaryId,re);if(De(i.renderable?null:i.reason??`该对象暂时无法在画布中显示。`),!i.renderable||!i.levelId||!i.viewBox){Te(null);return}Te(Mf(e,t,n)),r&&Ge(e),l(t.primaryId),d(null),p(null),v(`off`);let o=Ne[t.primaryId]?.type;ke(e=>({...e,walls:o===`wall`||t.relatedIds.some(e=>Ne[e]?.type===`wall`)?!0:e.walls,openings:o===`door`||o===`window`||e.openings,stairs:o===`stair`||e.stairs})),a(e=>{let t=e.findIndex(e=>e.levelId===i.levelId),n=t>=0?t:0;return e.map((e,t)=>t===n?{...e,levelId:i.levelId,viewBox:i.viewBox}:e)})},qe=e=>{let t=w?.rules.find(t=>t.ruleId===e.ruleId),n=t&&Df(t,Ne,re).targets[e.targetIndex];n&&Ke(e.ruleId,n,e.targetIndex,!0)},Je=e=>{l(e),d(null),p(null)};return(0,$.jsxs)(`div`,{className:`app`,children:[(0,$.jsxs)(`header`,{className:`topbar`,children:[(0,$.jsxs)(`div`,{className:`brand`,children:[(0,$.jsx)(`b`,{children:`Pascal Layout Auditor`}),(0,$.jsx)(`span`,{children:`只读 JSON 几何核验`})]}),(0,$.jsxs)(`div`,{className:`actions`,children:[(0,$.jsx)(`button`,{className:`primary`,onClick:()=>Ae.current?.click(),children:`导入 JSON`}),(0,$.jsx)(`button`,{onClick:()=>Fe(y,`Bellevue demo.json`),children:`加载示例`}),(0,$.jsx)(`input`,{ref:Ae,hidden:!0,type:`file`,accept:`.json,application/json`,onChange:e=>e.target.files?.[0]?.text().then(t=>Fe(t,e.target.files[0].name))}),(0,$.jsx)(`span`,{className:`file`,children:n})]})]}),(0,$.jsxs)(`main`,{className:`workspace`,children:[(0,$.jsxs)(`aside`,{className:`sidebar`,children:[(0,$.jsxs)(`section`,{className:`side-section`,children:[(0,$.jsx)(`div`,{className:`side-heading`,children:(0,$.jsx)(`h2`,{children:`显示图层`})}),(0,$.jsxs)(`div`,{className:`visibility`,children:[Object.entries({images:`家具模型`,boxes:`物理占地框`,centers:`家具中心`,names:`家具名称`,zones:`Zone`,slabs:`Slab（楼地面）`,walls:`墙体`,openings:`门窗`,stairs:`楼梯`,dimensions:`外围尺寸`}).map(([e,t])=>(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:Oe[e],onChange:()=>Ue(e)}),t]},e)),(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:te,onChange:()=>ne(e=>!e)}),`显示建筑边界`]}),(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:O,onChange:()=>k(e=>!e)}),`显示识别空间`]}),(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:M,disabled:!A,onChange:()=>N(e=>!e)}),`显示空间连接`]}),(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:ae,disabled:!P.length,onChange:()=>oe(e=>!e)}),`显示门操作区域`]}),(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:se,disabled:!F,onChange:()=>L(e=>!e)}),`显示可通行空间`]}),(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:ue,disabled:!ce,onChange:()=>de(e=>!e)}),`显示家具使用区`]}),(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:me,disabled:!fe,onChange:()=>he(e=>!e)}),`显示厨卫使用区`]}),(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:ve,disabled:!ge,onChange:()=>ye(e=>!e)}),`显示操作与窗前接近区域`]})]})]}),(0,$.jsx)(hp,{node:c?Ne[c]:null,nodes:Ne,coverage:Ve,dimension:u,manualMeasurement:m.find(e=>e.id===f)??null,measurementUnit:b}),(0,$.jsx)(xp,{nodes:Ne}),(0,$.jsx)(Tp,{report:w,nodes:Ne,roomAnalysis:re,error:be,focusMessage:Ee,activeHighlight:we,disabled:!e||!Object.keys(Ne).length,onRun:We,onFocus:Ke,onRegisterRule:(e,t)=>{Me.current[e]=t}}),(0,$.jsx)(Dp,{diagnostics:He})]}),(0,$.jsxs)(`section`,{className:`canvas-workspace`,children:[(0,$.jsxs)(`div`,{className:`canvas-workspace-head`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`PLAN VIEWS`}),(0,$.jsx)(`h1`,{children:`画布工作区`})]}),(0,$.jsxs)(`div`,{className:`measurement-toolbar`,children:[(0,$.jsxs)(`label`,{children:[`全局单位 `,(0,$.jsxs)(`select`,{value:b,onChange:e=>x(e.target.value),children:[(0,$.jsx)(`option`,{value:`millimeters`,children:`公制（mm / m²）`}),(0,$.jsx)(`option`,{value:`feet-inches`,children:`英制（ft-in / ft²）`})]})]}),(0,$.jsx)(`button`,{className:`measure-toggle ${g===`off`?``:`active`}`,title:`开启后点击两点测量；按一次 Shift 切换正交；Esc 退出`,onClick:()=>v(e=>e===`off`?`aligned`:`off`),children:g===`off`?`测量`:`退出测量`}),(0,$.jsx)(`button`,{className:`primary`,onClick:Le,children:`+ 添加画布`})]})]}),(0,$.jsx)(`div`,{className:`canvas-grid count-${Math.min(i.length,4)}`,children:i.map(e=>(0,$.jsx)(Bf,{canvas:e,nodes:Ne,levels:Pe,visibility:Oe,selectedId:c,evaluationHighlights:Se,activeEvaluationHighlight:we,buildingEnvelopes:E,showBuildingEnvelope:te,roomAnalysis:re,showRoomRegions:O,connectivityGraph:A,showConnectivity:M,doorOperations:P,showDoorOperationDebug:ae,navigationAnalysis:F,showNavigableSpace:se,furnitureUseAnalysis:ce,showFurnitureUseZones:ue,fixtureUseAnalysis:fe,showFixtureUseZones:me,operationUseAnalysis:ge,showOperationUseZones:ve,measurementMode:g,measurementUnit:b,manualMeasurements:m.filter(t=>t.levelId===(e.levelId||Pe[0]?.id||``)),selectedManualId:f,onSelect:Je,onClearEvaluationHighlight:()=>{Ce([]),Te(null),De(null)},onRestoreEvaluationOverview:()=>{we&&(Te(null),De(null))},onActivateEvaluationHighlight:qe,onSelectDimension:e=>{l(null),d(e),p(null)},onCreateMeasurement:e=>{let t={...e,id:`measure-${je.current++}`,createdAt:Date.now()};h(e=>[...e,t]),l(null),d(null),p(t.id)},onSelectManual:e=>{l(null),d(null),p(e)},onDeleteManual:e=>{h(t=>t.filter(t=>t.id!==e)),p(t=>t===e?null:t)},onUpdate:Ie,onRemove:Re,canRemove:i.length>1},e.id))})]})]})]})}function Bf({canvas:e,nodes:t,levels:n,visibility:r,selectedId:i,evaluationHighlights:a,activeEvaluationHighlight:o,buildingEnvelopes:s,showBuildingEnvelope:c,roomAnalysis:l,showRoomRegions:u,connectivityGraph:d,showConnectivity:f,doorOperations:p,showDoorOperationDebug:m,navigationAnalysis:h,showNavigableSpace:g,furnitureUseAnalysis:_,showFurnitureUseZones:v,fixtureUseAnalysis:y,showFixtureUseZones:b,operationUseAnalysis:x,showOperationUseZones:S,onSelect:C,onClearEvaluationHighlight:w,onRestoreEvaluationOverview:T,onActivateEvaluationHighlight:E,onSelectDimension:ee,measurementMode:te,measurementUnit:ne,manualMeasurements:re,selectedManualId:D,onCreateMeasurement:O,onSelectManual:k,onDeleteManual:A,onUpdate:j,onRemove:M,canRemove:N}){let P=e.levelId||n[0]?.id||``;return(0,$.jsxs)(`article`,{className:`canvas-card`,children:[(0,$.jsxs)(`div`,{className:`canvas-card-head`,children:[(0,$.jsxs)(`label`,{children:[`楼层`,` `,(0,$.jsx)(`select`,{value:P,onChange:n=>j(e.id,{levelId:n.target.value,viewBox:Uf(t,n.target.value,r.dimensions)}),children:n.map(e=>(0,$.jsx)(`option`,{value:e.id,children:e.name||e.id},e.id))})]}),(0,$.jsxs)(`div`,{className:`canvas-tools`,children:[(0,$.jsx)(`button`,{title:`逆时针旋转 90°`,onClick:()=>j(e.id,{rotation:(e.rotation+270)%360}),children:`↶ 90°`}),(0,$.jsx)(`button`,{title:`顺时针旋转 90°`,onClick:()=>j(e.id,{rotation:(e.rotation+90)%360}),children:`↷ 90°`}),(0,$.jsx)(`button`,{onClick:()=>j(e.id,{viewBox:Uf(t,P,r.dimensions)}),children:`适配`}),N&&(0,$.jsx)(`button`,{className:`danger`,title:`移除此画布`,onClick:()=>M(e.id),children:`×`})]})]}),(0,$.jsx)(Wf,{nodes:t,levelId:P,viewBox:e.viewBox,rotation:e.rotation,setViewBox:t=>j(e.id,{viewBox:t}),visibility:r,selectedId:i,evaluationHighlights:a,activeEvaluationHighlight:o,buildingEnvelope:s.find(e=>e.levelId===P)??null,showBuildingEnvelope:c,roomAnalysis:l,showRoomRegions:u,connectivityGraph:d,showConnectivity:f,doorOperations:p,showDoorOperationDebug:m,navigationAnalysis:h,showNavigableSpace:g,furnitureUseAnalysis:_,showFurnitureUseZones:v,fixtureUseAnalysis:y,showFixtureUseZones:b,operationUseAnalysis:x,showOperationUseZones:S,onSelect:C,onClearEvaluationHighlight:w,onRestoreEvaluationOverview:T,onActivateEvaluationHighlight:E,onSelectDimension:ee,measurementMode:te,measurementUnit:ne,manualMeasurements:re,selectedManualId:D,onCreateMeasurement:O,onSelectManual:k,onDeleteManual:A})]})}function Vf(e,t){return Object.values(e).filter(n=>Ga(n.id,e).levelId===t)}function Hf(e,t){return Object.values(e).filter(n=>n.type===`stair`&&n.stairType===`spiral`&&n.toLevelId===t&&Ga(n.id,e).levelId!==t)}function Uf(e,t,n=!0){let r=[],i=Vf(e,t),a=new Map(Oo(i.filter(e=>e.type===`wall`)).map(e=>[e.wallId,e]));for(let t of i)if(t.type===`wall`){let e=a.get(t.id);e?.validation.valid&&r.push(...e.footprint.map(e=>({x:e.x,z:e.y})))}else if((t.type===`zone`||t.type===`slab`)&&Array.isArray(t.polygon))for(let e of t.polygon)Array.isArray(e)&&r.push({x:e[0],z:e[2]??e[1]});else if(t.type===`item`){let n=Za(t.id,e),i=Ja(t);n.status===`ok`&&i&&r.push({x:n.x-i.width/2,z:n.z-i.depth/2},{x:n.x+i.width/2,z:n.z+i.depth/2})}else t.type===`shelf`?r.push(...Lo(t,e)):t.type===`stair`&&r.push(...ns(t,e));for(let n of Hf(e,t))r.push(...Uo(n));return n&&t&&r.push(...zs(As(e,t))),ro(r,1)}function Wf({nodes:e,levelId:t,viewBox:n,rotation:r,setViewBox:i,visibility:a,selectedId:o,evaluationHighlights:s,activeEvaluationHighlight:c,buildingEnvelope:l,showBuildingEnvelope:u,roomAnalysis:d,showRoomRegions:f,connectivityGraph:p,showConnectivity:m,doorOperations:h,showDoorOperationDebug:g,navigationAnalysis:v,showNavigableSpace:y,furnitureUseAnalysis:b,showFurnitureUseZones:x,fixtureUseAnalysis:S,showFixtureUseZones:C,operationUseAnalysis:w,showOperationUseZones:T,onSelect:E,onClearEvaluationHighlight:ee,onRestoreEvaluationOverview:te,onActivateEvaluationHighlight:ne,onSelectDimension:re,measurementMode:D,measurementUnit:O,manualMeasurements:k,selectedManualId:A,onCreateMeasurement:j,onSelectManual:M,onDeleteManual:N}){let P=(0,_.useRef)(null),ie=(0,_.useRef)(!1),ae=(0,_.useRef)(null),oe=(0,_.useRef)(null),[F,I]=(0,_.useState)(null),[se,L]=(0,_.useState)(null),[ce,le]=(0,_.useState)(!1),ue=Vf(e,t),de=ue.filter(e=>e.type===`item`),fe=ue.filter(e=>e.type===`zone`),pe=ue.filter(e=>e.type===`wall`),me=(0,_.useMemo)(()=>Oo(pe),[pe]),he=Hf(e,t),ge=(0,_.useMemo)(()=>As(e,t),[e,t]),_e=n.minX+n.width/2,ve=n.minZ+n.height/2,ye=`${n.minX} ${n.minZ} ${n.width} ${n.height}`,be=(c?s.filter(e=>e.ruleId===c.ruleId&&e.targetIndex===c.targetIndex):s).filter(n=>(Ga(n.primaryId,e).levelId??d?.rooms.find(e=>e.roomRegionId===n.primaryId)?.levelId)===t),xe=(0,_.useMemo)(()=>Ws(e,t),[e,t]),Se=Qs(F?.point??null,se?.point??null,ce);(0,_.useEffect)(()=>{I(null),L(null),le(!1)},[D,t]),(0,_.useEffect)(()=>{let e=e=>{e.key===`Shift`&&!e.repeat&&le(e=>!e),e.key===`Escape`&&(I(null),L(null)),(e.key===`Delete`||e.key===`Backspace`)&&A&&(e.preventDefault(),N(A))};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[A,N]);let Ce=e=>{let t=oe.current?.getScreenCTM();if(!t)return null;let n=new DOMPoint(e.clientX,e.clientY).matrixTransform(t.inverse());return[n.x,n.y]},we=e=>{let t=Ce(e);if(!t)return null;let r=ae.current?.clientWidth||1,i=ae.current?.clientHeight||1,a=Math.max(n.width/r,n.height/i)*12;return qs(t,xe,a)},Te=e=>{if(!F){I(e),L(e);return}if(D===`off`)return;let n=Qs(F.point,e.point,ce);Zs(F.point,e.point,n).valueMeters>5e-4&&j({levelId:t,mode:n,start:F,end:e}),I(null),L(null)};return(0,$.jsxs)(`div`,{className:`plan ${D===`off`?``:`measuring`}`,style:{userSelect:`none`,WebkitUserSelect:`none`},onWheel:e=>{e.preventDefault();let t=e.deltaY<0?.9:1.1,r=ae.current?.getScreenCTM();if(!r)return;let a=new DOMPoint(e.clientX,e.clientY).matrixTransform(r.inverse());i(io(n,{x:a.x,z:a.y},t))},onPointerDown:e=>{D!==`off`||e.button!==0||(P.current={x:e.clientX,y:e.clientY,box:n,moved:!1})},onPointerMove:e=>{if(D!==`off`||!P.current)return;let t=e.clientX-P.current.x,n=e.clientY-P.current.y;if(!P.current.moved&&Math.hypot(t,n)<3)return;P.current.moved||(P.current.moved=!0,e.currentTarget.setPointerCapture?.(e.pointerId));let a=ao(t*P.current.box.width/(e.currentTarget.clientWidth||1),n*P.current.box.height/(e.currentTarget.clientHeight||1),r);i({...P.current.box,minX:P.current.box.minX+a.x,minZ:P.current.box.minZ+a.z})},onPointerUp:e=>{P.current&&(P.current?.moved&&(ie.current=!0,window.setTimeout(()=>{ie.current=!1},0)),P.current=null,e.currentTarget.hasPointerCapture?.(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId))},onPointerCancel:()=>{P.current=null},children:[(0,$.jsxs)(`svg`,{ref:ae,viewBox:ye,onPointerMove:e=>{if(D!==`off`){let t=we(e);t&&L(t)}},onPointerLeave:()=>{F||L(null)},onContextMenu:e=>{D!==`off`&&(e.preventDefault(),I(null),L(null))},onClickCapture:e=>{if(ie.current){e.preventDefault(),e.stopPropagation(),ie.current=!1;return}let t=e.target,n=t.closest(`[data-delete-measurement]`)?.getAttribute(`data-delete-measurement`),r=t.closest(`[data-manual-measurement]`)?.getAttribute(`data-manual-measurement`);if(n||r){e.preventDefault(),e.stopPropagation(),n?N(n):r&&M(r);return}if(D===`off`)return;e.preventDefault(),e.stopPropagation();let i=we(e);i&&Te(i)},onClick:e=>{e.target.closest(`[data-selectable]`)||(E(null),M(null),te())},children:[(0,$.jsxs)(`defs`,{children:[(0,$.jsx)(`marker`,{id:`arrow-${t}`,markerWidth:`.18`,markerHeight:`.18`,refX:`.16`,refY:`.09`,orient:`auto`,children:(0,$.jsx)(`path`,{d:`M0,0 L.18,.09 L0,.18z`,fill:`#e75c3c`})}),(0,$.jsx)(`marker`,{id:`stair-up`,markerWidth:`.18`,markerHeight:`.18`,refX:`.16`,refY:`.09`,orient:`auto`,children:(0,$.jsx)(`path`,{d:`M0,0 L.18,.09 L0,.18z`,fill:`#171717`})}),(0,$.jsx)(`marker`,{id:`stair-down`,markerWidth:`.18`,markerHeight:`.18`,refX:`.16`,refY:`.09`,orient:`auto`,children:(0,$.jsx)(`path`,{d:`M0,0 L.18,.09 L0,.18z`,fill:`#59635f`})})]}),(0,$.jsx)(`rect`,{x:n.minX,y:n.minZ,width:n.width,height:n.height,fill:`#f7f8f5`}),(0,$.jsxs)(`g`,{ref:oe,style:{transform:`rotate(${r}deg)`,transformOrigin:`${_e}px ${ve}px`,transition:`transform 240ms cubic-bezier(.2,.8,.2,1)`},children:[(0,$.jsxs)(`g`,{className:be.length?`evaluation-scene-dimmed`:void 0,children:[a.slabs&&ue.filter(e=>e.type===`slab`&&e.visible!==!1).map(e=>(0,$.jsx)(sp,{node:e,selected:o===e.id,onSelect:E},e.id)),a.zones&&fe.map(e=>(0,$.jsx)(tp,{node:e,onSelect:E},e.id)),a.walls&&me.map(t=>(0,$.jsx)(cp,{node:e[t.wallId],footprint:t.footprint,valid:t.validation.valid,diagnosticCodes:t.validation.codes,selected:o===t.wallId,onSelect:E},t.wallId)),a.shelves&&ue.filter(e=>e.type===`shelf`).map(t=>(0,$.jsx)(lp,{node:t,nodes:e,selected:o===t.id,onSelect:E},t.id)),a.openings&&ue.filter(e=>e.type===`door`||e.type===`window`).map(t=>(0,$.jsx)(up,{node:t,nodes:e,selected:o===t.id,onSelect:E},t.id)),a.stairs&&ue.filter(e=>e.type===`stair`).map(t=>(0,$.jsx)(dp,{node:t,nodes:e,onSelect:E},t.id)),a.stairs&&he.map(e=>(0,$.jsx)(fp,{node:e,onSelect:E},`entry-${e.id}`)),de.map(n=>(0,$.jsx)(mp,{node:n,nodes:e,visibility:a,selected:o===n.id,viewRotation:r,markerId:`arrow-${t}`,onSelect:E},n.id)),a.zones&&fe.map(e=>(0,$.jsx)(np,{node:e,viewRotation:r},`zone-label-${e.id}`)),a.dimensions&&(0,$.jsx)(rp,{report:ge,viewRotation:r,unit:O,onSelect:re}),(0,$.jsx)(ip,{measurements:k,preview:D!==`off`&&F&&se?{mode:Se,start:F,end:se}:null,unit:O,viewRotation:r,selectedId:A,onSelect:M,onDelete:N}),D!==`off`&&se&&(0,$.jsx)(op,{snap:se,active:!!F})]}),b&&(x||!!(c&&/^G3-0(?:1[4-9]|2[0-4])$/.test(c.ruleId)))&&(0,$.jsx)(qf,{analysis:b,levelId:t,activeHighlight:c,showDebug:x}),S&&(C||!!(c&&/^G3-0(?:2[5-9]|3[0-8])$/.test(c.ruleId)))&&(0,$.jsx)(Jf,{analysis:S,levelId:t,activeHighlight:c,showDebug:C}),w&&(T||!!(c&&/^G3-0(?:0[9]|1[0-3]|3[9]|4[0-3])$/.test(c.ruleId)))&&(0,$.jsx)(Yf,{analysis:w,levelId:t,activeHighlight:c,showDebug:T}),be.length>0&&(0,$.jsx)($f,{highlights:be,activeHighlight:c,nodes:e,exactWalls:me,onActivate:ne}),(g||!!(c&&[`G3-002`,`G3-007`,`G3-008`,`G3-009`].includes(c.ruleId)))&&(0,$.jsx)(Gf,{operations:h,levelId:t,activeHighlight:c,showDebug:g}),v&&(y||!!(c&&[`G3-003`,`G3-004`,`G3-006`,`G3-009`,`G3-040`,`G3-041`].includes(c.ruleId)))&&(0,$.jsx)(Kf,{analysis:v,levelId:t,activeHighlight:c,showDebug:y}),u&&l?.usableForEvaluation&&(0,$.jsx)(Xf,{envelope:l}),d&&(f||be.some(e=>d.rooms.some(t=>t.roomRegionId===e.primaryId)))&&(0,$.jsx)(Zf,{analysis:d,nodes:e,levelId:t,showAll:f,highlights:be,onActivate:ne}),m&&p&&(0,$.jsx)(Qf,{graph:p,nodes:e,levelId:t})]})]}),D!==`off`&&(0,$.jsx)(`div`,{className:`measure-hint`,children:F?`${ce?Se===`horizontal`?`水平正交已开启`:`垂直正交已开启`:`自由对齐`} · 点击第二点 · Shift 切换正交 · Esc 退出`:`${ce?`正交已开启`:`正交已关闭`} · 点击第一点 · Shift 切换正交 · Esc 退出`}),(0,$.jsx)(ep,{rotation:r}),be.length>0&&(0,$.jsxs)(`div`,{className:`evaluation-highlight-legend`,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`primary`}),`确定问题`]}),be.some(e=>e.status===`unable_to_determine`)&&(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`unresolved`}),`待核验对象`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`related`}),`关联对象`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`muted`}),`其他对象`]}),c&&(0,$.jsx)(`button`,{onClick:te,children:`返回全部问题`}),(0,$.jsx)(`button`,{onClick:ee,children:`关闭高亮`})]}),f&&(0,$.jsxs)(`div`,{className:`room-region-legend`,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`room`}),`Room Region（物理空间）`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`zone`}),`Zone（功能区域）`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`warning`}),`未匹配/部分匹配`]})]}),m&&p&&(0,$.jsxs)(`div`,{className:`connectivity-legend`,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`reachable`}),`可达节点`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`unreachable`}),`不可达/无入口`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`portal`}),`有效门连接`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`unresolved`}),`未解析门或楼梯`]})]}),g&&(0,$.jsxs)(`div`,{className:`door-operation-legend`,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`swing`}),`门扇扫掠`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`entry`}),`入口检测区域`]})]}),y&&v&&(0,$.jsxs)(`div`,{className:`navigable-space-legend`,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`free`}),`可通行区域`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`occupied`}),`障碍占用`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`path`}),`已连接路径`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`interruption`}),`路径中断`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`blocker`}),`阻挡对象`]})]}),x&&b&&(0,$.jsxs)(`div`,{className:`furniture-use-legend`,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`usable`}),`基本使用区`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`blocked`}),`不可用使用区`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`candidate`}),`方向待确认`]})]}),C&&S&&(0,$.jsxs)(`div`,{className:`fixture-use-legend`,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`usable`}),`厨卫基本使用区`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`blocked`}),`使用区被阻挡`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`candidate`}),`数据待确认`]})]}),T&&w&&(0,$.jsxs)(`div`,{className:`fixture-use-legend`,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`usable`}),`可用操作/接近区`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`blocked`}),`问题操作/接近区`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{className:`candidate`}),`部分受阻或数据待确认`]})]}),(0,$.jsxs)(`div`,{className:`legend`,children:[Rf(n.width,O),` × `,Rf(n.height,O)]})]})}function Gf({operations:e,levelId:t,activeHighlight:n,showDebug:r}){let i=new Set(n&&[`G3-002`,`G3-007`,`G3-008`].includes(n.ruleId)?[n.primaryId,...n.relatedIds]:[]);return(0,$.jsx)(`g`,{className:`door-operation-overlay`,pointerEvents:`none`,children:e.filter(e=>e.levelId===t&&e.usableForEvaluation&&(r||i.has(e.doorId))).map(e=>{let t=i.has(e.doorId),a=n?.status===`unable_to_determine`?`#d8a449`:`#e23d35`;return(0,$.jsxs)(`g`,{"data-door-operation":e.doorId,children:[e.entryPolygon.length>=3&&(r||n?.ruleId===`G3-002`)&&(0,$.jsx)(`polygon`,{points:e.entryPolygon.map(([e,t])=>`${e},${t}`).join(` `),fill:`#ed8b2c`,fillOpacity:t?`.18`:`.06`,stroke:`#ed8b2c`,strokeDasharray:`5 3`,strokeWidth:t?`2`:`1`,vectorEffect:`non-scaling-stroke`}),(r||n?.ruleId===`G3-007`||n?.ruleId===`G3-008`)&&e.leaves.map(e=>(0,$.jsxs)(`g`,{children:[(0,$.jsx)(`polygon`,{points:(t?e.requiredSwingPolygon:e.swingPolygon).map(([e,t])=>`${e},${t}`).join(` `),fill:t?a:`#7b8790`,fillOpacity:t?`.22`:`.05`,stroke:t?a:`#7b8790`,strokeDasharray:`5 3`,strokeWidth:t?`2`:`1`,vectorEffect:`non-scaling-stroke`}),(0,$.jsx)(`circle`,{cx:e.hingePoint[0],cy:e.hingePoint[1],r:t?`.08`:`.05`,fill:t?a:`#7b8790`})]},e.leafIndex))]},e.doorId)})})}function Kf({analysis:e,levelId:t,activeHighlight:n,showDebug:r}){let i=!!(n&&[`G3-003`,`G3-004`,`G3-006`].includes(n.ruleId)),a=i?n?.primaryId??null:null,o=new Set(i?n?.relatedIds??[]:[]),s=e.rooms.filter(e=>e.levelId===t&&(r||e.roomRegionId===a)),c=(e,t)=>{let n=new Map;return e.forEach(([e,r])=>{let i=Math.round(r/t);n.set(i,[...n.get(i)??[],Math.round(e/t)])}),[...n.entries()].flatMap(([e,n])=>{let r=[...new Set(n)].sort((e,t)=>e-t),i=[],a=r[0],o=r[0];for(let n of r.slice(1))n===o+1?o=n:(i.push({x:a*t,z:e*t,width:(o-a+1)*t}),a=o=n);return a!==void 0&&o!==void 0&&i.push({x:a*t,z:e*t,width:(o-a+1)*t}),i})},l=new Set(s.flatMap(e=>[...e.fixedBlockerIds,...e.largeFurnitureBlockerIds,...e.uncertainObjectIds])),u=e.obstacles.filter(e=>e.levelId===t&&e.footprint.length>=3&&e.role!==`excluded`&&(r||o.has(e.objectId)||l.has(e.objectId)));return(0,$.jsxs)(`g`,{className:`navigable-space-overlay`,pointerEvents:`none`,children:[s.flatMap(e=>c(e.navigableFreeCells,e.gridMeters).map((t,n)=>(0,$.jsx)(`rect`,{x:t.x-e.gridMeters/2,y:t.z-e.gridMeters/2,width:t.width,height:e.gridMeters,fill:`#36a269`,fillOpacity:`.16`},`${e.roomRegionId}-free-${n}`))),u.map(e=>{let t=o.has(e.objectId);return(0,$.jsx)(`polygon`,{points:e.footprint.map(([e,t])=>`${e},${t}`).join(` `),fill:t?`#ed8b2c`:`#737d78`,fillOpacity:t?`.30`:`.18`,stroke:t?`#ed8b2c`:`#737d78`,strokeWidth:t?`2`:`1`,vectorEffect:`non-scaling-stroke`},e.objectId)}),s.flatMap(e=>e.paths.map((t,r)=>t.points.length>=2?(0,$.jsx)(`polyline`,{points:t.points.map(([e,t])=>`${e},${t}`).join(` `),fill:`none`,stroke:t.status===`connected`?`#1686a0`:n?.status===`unable_to_determine`?`#d8a449`:`#e23d35`,strokeDasharray:t.status===`blocked`?`5 3`:void 0,strokeWidth:t.status===`blocked`?`2.5`:`1.6`,vectorEffect:`non-scaling-stroke`},`${e.roomRegionId}-path-${r}`):null)),s.flatMap(e=>e.portalNodes.flatMap(t=>[(0,$.jsx)(`circle`,{cx:t.sourcePoint[0],cy:t.sourcePoint[1],r:`.07`,fill:`#fff`,stroke:`#1686a0`,strokeWidth:`1.5`,vectorEffect:`non-scaling-stroke`},`${e.roomRegionId}-${t.doorId}-source`),t.furnishedLanding?(0,$.jsx)(`circle`,{cx:t.furnishedLanding[0],cy:t.furnishedLanding[1],r:`.055`,fill:`#1686a0`},`${e.roomRegionId}-${t.doorId}-landing`):(0,$.jsx)(`g`,{transform:`translate(${t.sourcePoint[0]} ${t.sourcePoint[1]})`,children:(0,$.jsx)(`path`,{d:`M-.09,-.09 L.09,.09 M.09,-.09 L-.09,.09`,stroke:`#e23d35`,strokeWidth:`2`,vectorEffect:`non-scaling-stroke`})},`${e.roomRegionId}-${t.doorId}-missing`)])),s.filter(e=>e.anchorPoint).map(e=>(0,$.jsxs)(`g`,{transform:`translate(${e.anchorPoint[0]} ${e.anchorPoint[1]})`,children:[(0,$.jsx)(`circle`,{r:`.08`,fill:`#fff`,stroke:`#1686a0`,strokeWidth:`1.5`,vectorEffect:`non-scaling-stroke`}),(0,$.jsx)(`circle`,{r:`.025`,fill:`#1686a0`})]},`${e.roomRegionId}-anchor`))]})}function qf({analysis:e,levelId:t,activeHighlight:n,showDebug:r}){let i=n&&/^G3-0(?:1[4-9]|2[0-4])$/.test(n.ruleId)?n.primaryId:null,a=new Map(e.assessments.map(e=>[e.zone.useZoneId,e]));return(0,$.jsx)(`g`,{className:`furniture-use-zone-overlay`,pointerEvents:`none`,children:e.useZones.filter(e=>e.levelId===t&&(r||e.ownerObjectId===i)).map(e=>{let t=a.get(e.useZoneId),n=e.ownerObjectId===i,r=!e.usableForEvaluation,o=t?.usable===!0,s=r?`#d8a449`:o?`#36a269`:`#e23d35`;return(0,$.jsx)(`polygon`,{"data-furniture-use-zone":e.useZoneId,points:e.polygon.map(([e,t])=>`${e},${t}`).join(` `),fill:s,fillOpacity:n?`.24`:`.12`,stroke:s,strokeDasharray:r?`6 4`:void 0,strokeWidth:n?`2.5`:`1.4`,vectorEffect:`non-scaling-stroke`},e.useZoneId)})})}function Jf({analysis:e,levelId:t,activeHighlight:n,showDebug:r}){let i=n&&/^G3-0(?:2[5-9]|3[0-8])$/.test(n.ruleId)?n.primaryId:null,a=new Map(e.assessments.map(e=>[e.zone.useZoneId,e]));return(0,$.jsx)(`g`,{className:`fixture-use-zone-overlay`,pointerEvents:`none`,children:e.useZones.filter(e=>e.levelId===t&&(r||e.ownerObjectId===i)).map(e=>{let t=a.get(e.useZoneId),n=e.ownerObjectId===i,r=!e.usableForEvaluation,o=t?.usable===!0,s=r?`#d8a449`:o?`#36a269`:`#e23d35`;return(0,$.jsx)(`polygon`,{"data-fixture-use-zone":e.useZoneId,points:e.polygon.map(([e,t])=>`${e},${t}`).join(` `),fill:s,fillOpacity:n?`.26`:`.13`,stroke:s,strokeDasharray:r?`6 4`:void 0,strokeWidth:n?`2.5`:`1.4`,vectorEffect:`non-scaling-stroke`},e.useZoneId)})})}function Yf({analysis:e,levelId:t,activeHighlight:n,showDebug:r}){let i=n&&/^G3-0(?:0[9]|1[0-3]|3[9]|4[0-3])$/.test(n.ruleId)?n.primaryId:null,a=new Map(e.assessments.map(e=>[e.zone.operationZoneId,e]));return(0,$.jsx)(`g`,{className:`fixture-use-zone-overlay`,pointerEvents:`none`,children:e.zones.filter(e=>e.levelId===t&&(r||e.ownerObjectId===i)).map(e=>{let t=a.get(e.operationZoneId),n=e.ownerObjectId===i,r=!e.geometryReliable||!t,o=e.kind===`window-approach`&&t?Kd(t):null,s=o===`partial`,c=o===`issue`,l=o?o===`pass`:t?.usable===!0,u=r||s?`#d8a449`:c||!l?`#e23d35`:`#36a269`;return(0,$.jsx)(`polygon`,{"data-operation-zone":e.operationZoneId,"data-operation-zone-kind":e.kind,points:e.polygon.map(([e,t])=>`${e},${t}`).join(` `),fill:u,fillOpacity:n?`.26`:`.13`,stroke:u,strokeDasharray:r||s?`6 4`:void 0,strokeWidth:n?`2.5`:`1.4`,vectorEffect:`non-scaling-stroke`},e.operationZoneId)})})}function Xf({envelope:e}){return(0,$.jsx)(`g`,{className:`building-envelope-overlay`,pointerEvents:`none`,children:e.polygons.map((e,t)=>(0,$.jsx)(`g`,{children:e.map((e,t)=>(0,$.jsx)(`polygon`,{points:e.map(([e,t])=>`${e},${t}`).join(` `),fill:t===0?`#ed8b2c`:`#f7f8f5`,fillOpacity:t===0?`.05`:`1`,stroke:`#ed8b2c`,strokeWidth:t===0?`2`:`1`,vectorEffect:`non-scaling-stroke`},t))},t))})}function Zf({analysis:e,nodes:t,levelId:n,showAll:r,highlights:i,onActivate:a}){let o=e.rooms.filter(e=>e.levelId===n),s=new Map(e.zoneMatches.map(e=>[e.zoneId,e]));return(0,$.jsxs)(`g`,{className:`room-region-overlay`,children:[o.map((t,n)=>{let o=i.find(e=>e.primaryId===t.roomRegionId),s=o?.status===`unable_to_determine`?`#d8a449`:`#e23d35`,c=!t.usableForEvaluation||e.unmatchedRoomRegionIds.includes(t.roomRegionId),l=t.polygons[0]?.[0]??[],u=l.length?{x:l.reduce((e,t)=>e+t[0],0)/l.length,z:l.reduce((e,t)=>e+t[1],0)/l.length}:null;return!r&&!o?null:(0,$.jsxs)(`g`,{"data-room-region":t.roomRegionId,className:o?`problem-room`:c?`warning-room`:`matched-room`,onClick:o?e=>{e.stopPropagation(),a(o)}:void 0,children:[t.polygons.flatMap((e,t)=>e.map((e,n)=>(0,$.jsx)(`polygon`,{points:e.map(([e,t])=>`${e},${t}`).join(` `),fill:n?`#f7f8f5`:o?s:c?`#d8a449`:`#4f8f72`,fillOpacity:n?1:.14,stroke:o?s:c?`#d8a449`:`#4f8f72`,strokeWidth:o?`3`:`1.5`,vectorEffect:`non-scaling-stroke`},`${t}-${n}`))),r&&u&&(0,$.jsxs)(`text`,{x:u.x,y:u.z,className:`room-region-label`,textAnchor:`middle`,dominantBaseline:`middle`,children:[`R`,n+1,` · `,t.areaSquareMeters.toFixed(1),` m²`]})]},t.roomRegionId)}),r&&Object.values(t).filter(e=>e.type===`zone`&&Ga(e.id,t).levelId===n).map(e=>{let t=os(e),n=s.get(e.id),r=n?.relationship===`unmatched-zone`||n?.relationship===`zone-crosses-rooms`||n?.relationship===`partial`;return t.length>=3?(0,$.jsx)(`polygon`,{"data-zone-match":n?.relationship??`unmatched-zone`,points:t.map(e=>`${e.x},${e.z}`).join(` `),fill:`none`,stroke:r?`#d86756`:`#3569a8`,strokeDasharray:`6 4`,strokeWidth:`2`,vectorEffect:`non-scaling-stroke`},e.id):null})]})}function Qf({graph:e,nodes:t,levelId:n}){let r=t=>{let n=e.roomAnalysis.rooms.find(e=>e.roomRegionId===t)?.polygons[0]?.[0]??[];return n.length?{x:n.reduce((e,t)=>e+t[0],0)/n.length,z:n.reduce((e,t)=>e+t[1],0)/n.length}:null},i=e=>e.length?{x:e.reduce((e,t)=>e+t[0],0)/e.length,z:e.reduce((e,t)=>e+t[1],0)/e.length}:null,a=new Map;e.edges.forEach(e=>{a.set(e.fromNodeId,(a.get(e.fromNodeId)??0)+1),a.set(e.toNodeId,(a.get(e.toNodeId)??0)+1)});let o=e.portals.filter(e=>e.usableForConnectivity&&e.connectsExterior).flatMap(e=>{let t=e.roomRegionAId??e.roomRegionBId;return t?[t]:[]}),s=new Set(o.flatMap(t=>[...Ul(e,t)])),c=e.roomAnalysis.rooms.filter(e=>e.levelId===n&&e.usableForEvaluation),l=e.portals.filter(e=>e.levelId===n),u=e.stairConnections.filter(e=>e.fromLevelId===n||e.toLevelId===n);return(0,$.jsxs)(`g`,{className:`connectivity-overlay`,pointerEvents:`none`,children:[c.filter(e=>!(a.get(e.roomRegionId)??0)).flatMap(e=>e.polygons.flatMap((t,n)=>t.slice(0,1).map(t=>(0,$.jsx)(`polygon`,{points:t.map(([e,t])=>`${e},${t}`).join(` `),fill:`#e23d35`,fillOpacity:`.08`,stroke:`#e23d35`,strokeDasharray:`5 4`,strokeWidth:`1.5`,vectorEffect:`non-scaling-stroke`},`${e.roomRegionId}-${n}`)))),l.map(e=>{let t=i(e.samplePointsA),n=i(e.samplePointsB),r=e.openingCenter;return e.usableForConnectivity&&t&&n?(0,$.jsxs)(`g`,{children:[(0,$.jsx)(`line`,{x1:t.x,y1:t.z,x2:n.x,y2:n.z,stroke:e.connectsExterior?`#ed8b2c`:`#2c8c63`,strokeWidth:`3`,vectorEffect:`non-scaling-stroke`}),(0,$.jsx)(`circle`,{cx:r?.[0],cy:r?.[1],r:`.09`,fill:`#fff`,stroke:`#2c8c63`,strokeWidth:`2`,vectorEffect:`non-scaling-stroke`})]},e.doorId):r?(0,$.jsxs)(`g`,{transform:`translate(${r[0]} ${r[1]})`,children:[(0,$.jsx)(`circle`,{r:`.16`,fill:`#fff3dd`,stroke:`#d86756`,strokeWidth:`2`,vectorEffect:`non-scaling-stroke`}),(0,$.jsx)(`path`,{d:`M-.08,-.08 L.08,.08 M.08,-.08 L-.08,.08`,stroke:`#d86756`,strokeWidth:`2`,vectorEffect:`non-scaling-stroke`})]},e.doorId):null}),c.map(e=>{let t=r(e.roomRegionId);if(!t)return null;let n=!(a.get(e.roomRegionId)??0),i=s.has(e.roomRegionId),c=n?`#e23d35`:o.length?i?`#2c8c63`:`#d86756`:`#7b8790`;return(0,$.jsxs)(`g`,{transform:`translate(${t.x} ${t.z})`,children:[(0,$.jsx)(`circle`,{r:`.14`,fill:`#fff`,stroke:c,strokeWidth:`3`,vectorEffect:`non-scaling-stroke`}),(0,$.jsxs)(`text`,{y:`-.22`,className:`connectivity-node-label`,textAnchor:`middle`,children:[a.get(e.roomRegionId)??0,`入口`]})]},e.roomRegionId)}),u.map(e=>{let n=t[e.stairId],r=n?ns(n,t):[],i=r.length?{x:r.reduce((e,t)=>e+t.x,0)/r.length,z:r.reduce((e,t)=>e+t.z,0)/r.length}:null;return i?(0,$.jsxs)(`g`,{transform:`translate(${i.x} ${i.z})`,children:[(0,$.jsx)(`circle`,{r:`.2`,fill:e.usableForConnectivity?`#e8f5ee`:`#fff3dd`,stroke:e.usableForConnectivity?`#2c8c63`:`#d86756`,strokeWidth:`2`,vectorEffect:`non-scaling-stroke`}),(0,$.jsx)(`text`,{className:`connectivity-stair-label`,textAnchor:`middle`,dominantBaseline:`middle`,children:e.usableForConnectivity?`↕`:`!`})]},e.stairId):null})]})}function $f({highlights:e,activeHighlight:t,nodes:n,exactWalls:r,onActivate:i}){let a=new Map(r.map(e=>[e.wallId,e])),o=new Map;return e.forEach(e=>[e.primaryId,...e.relatedIds].forEach(t=>{let n=Nf(e,t);n&&(!o.has(t)||n===`primary`)&&o.set(t,{highlight:e,role:n})})),(0,$.jsx)(`g`,{className:`evaluation-highlight-overlay`,children:[...o.entries()].map(([e,r])=>{let{highlight:o,role:s}=r,c=n[e];if(!c||!s)return null;let l=s===`primary`?o.status===`unable_to_determine`?`#d8a449`:`#e23d35`:`#ed8b2c`,u=s===`primary`?.28:.18,d=t?.primaryId===o.primaryId,f=e=>{e.preventDefault(),e.stopPropagation(),i(o)};if(c.type===`wall`){let t=a.get(e);if(t?.validation.valid&&t.footprint.length>=3)return(0,$.jsx)(`polygon`,{className:d?`active`:void 0,"data-evaluation-highlight":e,"data-highlight-role":s,points:t.footprint.map(e=>`${e.x},${e.y}`).join(` `),fill:l,fillOpacity:u,stroke:l,strokeWidth:`3`,vectorEffect:`non-scaling-stroke`,onClick:f},e);if(Array.isArray(c.start)&&c.start.length>=2&&c.start.slice(0,2).every(Number.isFinite))return(0,$.jsxs)(`g`,{className:d?`active`:void 0,"data-evaluation-highlight":e,"data-highlight-role":s,onClick:f,children:[(0,$.jsx)(`circle`,{cx:c.start[0],cy:c.start[1],r:`.24`,fill:l,fillOpacity:u,stroke:l,strokeWidth:`3`,vectorEffect:`non-scaling-stroke`}),(0,$.jsx)(`line`,{x1:c.start[0]-.32,y1:c.start[1],x2:c.start[0]+.32,y2:c.start[1],stroke:l,strokeWidth:`2`,vectorEffect:`non-scaling-stroke`}),(0,$.jsx)(`line`,{x1:c.start[0],y1:c.start[1]-.32,x2:c.start[0],y2:c.start[1]+.32,stroke:l,strokeWidth:`2`,vectorEffect:`non-scaling-stroke`})]},e)}if(c.type===`door`||c.type===`window`){let t=to(c,n),r=Number(c.width);if(t&&Number.isFinite(r)&&r>0)return(0,$.jsx)(`g`,{className:d?`active`:void 0,"data-evaluation-highlight":e,"data-highlight-role":s,transform:`translate(${t.x} ${t.z}) rotate(${t.rotationY*180/Math.PI})`,onClick:f,children:(0,$.jsx)(`rect`,{x:-r/2,y:`-.16`,width:r,height:`.32`,fill:l,fillOpacity:u,stroke:l,strokeWidth:`3`,vectorEffect:`non-scaling-stroke`})},e)}if(c.type===`stair`){let t=ns(c,n);if(t.length>=3)return(0,$.jsx)(`polygon`,{className:d?`active`:void 0,"data-evaluation-highlight":e,"data-highlight-role":s,points:t.map(e=>`${e.x},${e.z}`).join(` `),fill:l,fillOpacity:u,stroke:l,strokeWidth:`3`,vectorEffect:`non-scaling-stroke`,onClick:f},e)}if(c.type===`zone`){let t=os(c);if(t.length>=3)return(0,$.jsx)(`polygon`,{className:d?`active`:void 0,"data-evaluation-highlight":e,"data-highlight-role":s,points:t.map(e=>`${e.x},${e.z}`).join(` `),fill:l,fillOpacity:u,stroke:l,strokeWidth:`3`,vectorEffect:`non-scaling-stroke`,onClick:f},e)}if(c.type===`item`){let t=Za(c.id,n),r=Ja(c);if(t.status===`ok`&&r)return(0,$.jsx)(`g`,{className:d?`active`:void 0,"data-evaluation-highlight":e,"data-highlight-role":s,transform:`translate(${t.x} ${t.z}) rotate(${t.rotationY*180/Math.PI})`,onClick:f,children:(0,$.jsx)(`rect`,{x:-r.width/2,y:-r.depth/2,width:r.width,height:r.depth,fill:l,fillOpacity:u,stroke:l,strokeWidth:`3`,vectorEffect:`non-scaling-stroke`})},e)}return null})})}function ep({rotation:e}){return(0,$.jsxs)(`div`,{className:`compass`,title:`视图旋转 ${e}°`,children:[(0,$.jsx)(`div`,{className:`compass-arrow`,style:{transform:`rotate(${Lf-e}deg)`},children:`▲`}),(0,$.jsx)(`b`,{children:`N`})]})}function tp({node:e,onSelect:t}){let n=os(e),r=ss(e);return n.length<3?null:(0,$.jsx)(`polygon`,{"data-selectable":!0,points:n.map(e=>`${e.x},${e.z}`).join(` `),fill:r,fillOpacity:`.12`,stroke:r,strokeOpacity:`.32`,strokeWidth:`.03`,onClick:()=>t(e.id)})}function np({node:e,viewRotation:t}){let n=cs(e),r=ss(e);return n?(0,$.jsx)(`text`,{x:n.x,y:n.z,className:`zone-label`,fontSize:`.22`,fontWeight:`700`,textAnchor:`middle`,dominantBaseline:`middle`,style:{fill:r,transform:`rotate(${-t}deg)`,transformOrigin:`${n.x}px ${n.z}px`,transition:`transform 240ms cubic-bezier(.2,.8,.2,1)`},stroke:`#ffffff`,strokeWidth:`.035`,strokeOpacity:`.9`,paintOrder:`stroke`,pointerEvents:`none`,children:e.name||`Zone`}):null}function rp({report:e,viewRotation:t,unit:n,onSelect:r}){let i=`#4b5563`;return(0,$.jsx)(`g`,{className:`exterior-dimensions`,children:Ls(e).map(a=>{let o=Ys(a.valueMeters,n),s=Rs(e,a),c=a.dimensionLayer===`inner-chain`?ds:fs,l=[s.faceStart[0]+a.outwardNormal[0]*c,s.faceStart[1]+a.outwardNormal[1]*c],u=[s.faceEnd[0]+a.outwardNormal[0]*c,s.faceEnd[1]+a.outwardNormal[1]*c],d=[(l[0]+u[0])/2,(l[1]+u[1])/2],f=Math.max(.24,o.length*.105),p=a.valueMeters>f+.16,m=p?d:[u[0]+a.direction[0]*(f/2+.14),u[1]+a.direction[1]*(f/2+.14)],h=Math.min(f/2+.05,a.valueMeters*.4),g=[d[0]-a.direction[0]*h,d[1]-a.direction[1]*h],_=[d[0]+a.direction[0]*h,d[1]+a.direction[1]*h],v=[l[0]+a.outwardNormal[0]*ps,l[1]+a.outwardNormal[1]*ps],y=[u[0]+a.outwardNormal[0]*ps,u[1]+a.outwardNormal[1]*ps],b=[(a.direction[0]+a.outwardNormal[0])*.065,(a.direction[1]+a.outwardNormal[1])*.065],x=ks(a.direction,t);return(0,$.jsxs)(`g`,{"data-selectable":!0,onClick:()=>r(a),style:{cursor:`pointer`},children:[(0,$.jsx)(`line`,{x1:s.edgeStart[0],y1:s.edgeStart[1],x2:v[0],y2:v[1],stroke:i,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`}),(0,$.jsx)(`line`,{x1:s.edgeEnd[0],y1:s.edgeEnd[1],x2:y[0],y2:y[1],stroke:i,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`}),p?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`line`,{x1:l[0],y1:l[1],x2:g[0],y2:g[1],stroke:i,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`}),(0,$.jsx)(`line`,{x1:_[0],y1:_[1],x2:u[0],y2:u[1],stroke:i,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`})]}):(0,$.jsx)(`line`,{x1:l[0],y1:l[1],x2:m[0]+a.direction[0]*f/2,y2:m[1]+a.direction[1]*f/2,stroke:i,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`}),[l,u].map((e,t)=>(0,$.jsx)(`line`,{x1:e[0]-b[0],y1:e[1]-b[1],x2:e[0]+b[0],y2:e[1]+b[1],stroke:i,strokeWidth:`1.2`,vectorEffect:`non-scaling-stroke`},t)),(0,$.jsx)(`text`,{x:m[0],y:m[1],transform:`rotate(${x} ${m[0]} ${m[1]})`,textAnchor:`middle`,dominantBaseline:`middle`,fontFamily:`DM Mono, monospace`,fontSize:`.18`,fill:i,stroke:`#f7f8f5`,strokeWidth:`.04`,paintOrder:`stroke`,children:o})]},a.id)})})}function ip({measurements:e,preview:t,unit:n,viewRotation:r,selectedId:i,onSelect:a,onDelete:o}){return(0,$.jsxs)(`g`,{className:`manual-measurements`,children:[e.map(e=>(0,$.jsx)(ap,{measurement:e,unit:n,viewRotation:r,selected:i===e.id,onSelect:a,onDelete:o},e.id)),t&&(0,$.jsx)(ap,{measurement:{id:`measurement-preview`,levelId:``,createdAt:0,...t},unit:n,viewRotation:r,selected:!1,preview:!0})]})}function ap({measurement:e,unit:t,viewRotation:n,selected:r,preview:i=!1,onSelect:a,onDelete:o}){let s=Zs(e.start.point,e.end.point,e.mode),c=i?`#d97706`:r?`#e75c3c`:`#246b72`,l=Ys(s.valueMeters,t),u=ks(s.direction,n),d=[s.normal[0]*.08,s.normal[1]*.08],f=[s.labelPoint[0]+s.normal[0]*.32,s.labelPoint[1]+s.normal[1]*.32];return s.valueMeters<=5e-4?null:(0,$.jsxs)(`g`,{"data-selectable":!i||void 0,"data-manual-measurement":i?void 0:e.id,onClick:t=>{i||(t.stopPropagation(),a?.(e.id))},style:{cursor:i?`crosshair`:`pointer`},children:[s.extensionLines.map((e,t)=>(0,$.jsx)(`line`,{x1:e.start[0],y1:e.start[1],x2:e.end[0],y2:e.end[1],stroke:c,strokeWidth:`1`,strokeDasharray:i?`4 3`:void 0,vectorEffect:`non-scaling-stroke`},t)),(0,$.jsx)(`line`,{x1:s.measurementStart[0],y1:s.measurementStart[1],x2:s.measurementEnd[0],y2:s.measurementEnd[1],stroke:c,strokeWidth:r?`1.8`:`1.2`,strokeDasharray:i?`5 4`:void 0,vectorEffect:`non-scaling-stroke`}),[s.measurementStart,s.measurementEnd].map((e,t)=>(0,$.jsx)(`line`,{x1:e[0]-d[0],y1:e[1]-d[1],x2:e[0]+d[0],y2:e[1]+d[1],stroke:c,strokeWidth:`1.3`,vectorEffect:`non-scaling-stroke`},t)),(0,$.jsx)(`circle`,{cx:e.start.point[0],cy:e.start.point[1],r:`.045`,fill:c}),(0,$.jsx)(`circle`,{cx:e.end.point[0],cy:e.end.point[1],r:`.045`,fill:c}),(0,$.jsx)(`text`,{x:s.labelPoint[0],y:s.labelPoint[1],transform:`rotate(${u} ${s.labelPoint[0]} ${s.labelPoint[1]})`,textAnchor:`middle`,dominantBaseline:`middle`,fontFamily:`DM Mono, monospace`,fontSize:`.18`,fill:c,stroke:`#f7f8f5`,strokeWidth:`.045`,paintOrder:`stroke`,pointerEvents:`none`,children:l}),r&&!i&&(0,$.jsxs)(`g`,{"data-delete-measurement":e.id,onClick:t=>{t.stopPropagation(),o?.(e.id)},style:{cursor:`pointer`},children:[(0,$.jsx)(`circle`,{cx:f[0],cy:f[1],r:`.14`,fill:`#fff`,stroke:`#d84f42`,strokeWidth:`1.4`,vectorEffect:`non-scaling-stroke`}),(0,$.jsx)(`line`,{x1:f[0]-.05,y1:f[1]-.05,x2:f[0]+.05,y2:f[1]+.05,stroke:`#d84f42`,strokeWidth:`1.8`,vectorEffect:`non-scaling-stroke`}),(0,$.jsx)(`line`,{x1:f[0]+.05,y1:f[1]-.05,x2:f[0]-.05,y2:f[1]+.05,stroke:`#d84f42`,strokeWidth:`1.8`,vectorEffect:`non-scaling-stroke`})]})]})}function op({snap:e,active:t}){let n=e.kind===`free`?`#d97706`:`#16a085`;return(0,$.jsxs)(`g`,{pointerEvents:`none`,children:[(0,$.jsx)(`circle`,{cx:e.point[0],cy:e.point[1],r:t?`.095`:`.075`,fill:`#fff`,stroke:n,strokeWidth:`1.5`,vectorEffect:`non-scaling-stroke`}),(0,$.jsx)(`line`,{x1:e.point[0]-.05,y1:e.point[1],x2:e.point[0]+.05,y2:e.point[1],stroke:n,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`}),(0,$.jsx)(`line`,{x1:e.point[0],y1:e.point[1]-.05,x2:e.point[0],y2:e.point[1]+.05,stroke:n,strokeWidth:`1`,vectorEffect:`non-scaling-stroke`})]})}function sp({node:e,selected:t,onSelect:n}){let r=Jo(e);return r?(0,$.jsx)(`path`,{"data-selectable":!0,d:r.path,fill:t?`#dbe8dc`:`#e8eee8`,fillRule:`evenodd`,clipRule:`evenodd`,stroke:t?`#e75c3c`:`#b5c2b8`,strokeWidth:t?`.04`:`.018`,opacity:`.78`,onClick:()=>n(e.id)}):null}function cp({node:e,footprint:t,valid:n,diagnosticCodes:r,selected:i,onSelect:a}){return!Array.isArray(e.start)||!Array.isArray(e.end)?null:t?.length&&n?(0,$.jsx)(`polygon`,{"data-selectable":!0,points:t.map(e=>`${e.x},${e.y}`).join(` `),fill:i?`#e75c3c`:`#303a3b`,stroke:`#202929`,strokeWidth:`.018`,vectorEffect:`non-scaling-stroke`,onClick:()=>a(e.id)}):t&&!n?(0,$.jsxs)(`g`,{"data-selectable":!0,"aria-label":`experimental wall diagnostic: ${r?.join(`, `)||`unknown`}`,onClick:()=>a(e.id),children:[(0,$.jsx)(`title`,{children:r?.join(`, `)||`wall_invalid_footprint`}),(0,$.jsx)(`line`,{x1:e.start[0],y1:e.start[1],x2:e.end[0],y2:e.end[1],stroke:`#d95446`,strokeWidth:`.05`}),(0,$.jsx)(`circle`,{cx:e.start[0],cy:e.start[1],r:`.12`,fill:`#d95446`})]}):null}function lp({node:e,nodes:t,selected:n,onSelect:r}){let i=No(e),a=Io(e,t);return!a||!Po(e)?null:(0,$.jsxs)(`g`,{"data-selectable":!0,transform:eo(a),onClick:()=>r(e.id),className:`shelf`,children:[(0,$.jsx)(`rect`,{x:-i.width/2,y:-i.depth/2,width:i.width,height:i.depth,fill:`#d6d3d1`,stroke:n?`#e75c3c`:`#1f2937`,strokeWidth:n?`.045`:`.015`,opacity:`.9`}),Ro(i).map(e=>(0,$.jsx)(`line`,{x1:e,x2:e,y1:-i.depth/2+i.thickness,y2:i.depth/2-i.thickness,stroke:`#1f2937`,strokeWidth:`.012`,opacity:`.7`},e))]})}function up({node:e,nodes:t,selected:n,onSelect:r}){let i=to(e,t);if(!i)return null;let a=Number.isFinite(e.width)?e.width:.9,o=.12,s=i.rotationY*180/Math.PI;if(e.type===`door`){let t=n?`#e75c3c`:`#9b6736`,c=e.doorType??`hinged`,l=c===`double`||c===`french`,u=no(e),d=u.effectiveHingesSide,f=u.effectiveSwingDirection===`inward`?1:-1,p=(e,r,i,a)=>{let o=Math.abs(r),s=e+r,c=e,l=r*Math.sin(i),u=+(i>=0);return(0,$.jsxs)(_.Fragment,{children:[(0,$.jsx)(`line`,{x1:e,y1:`0`,x2:c,y2:l,stroke:t,strokeWidth:n?`2.4`:`1.7`,vectorEffect:`non-scaling-stroke`}),(0,$.jsx)(`path`,{d:`M ${s} 0 A ${o} ${o} 0 0 ${u} ${c} ${l}`,fill:`none`,stroke:t,strokeWidth:n?`1.6`:`1.1`,strokeDasharray:`5 4`,strokeLinecap:`round`,vectorEffect:`non-scaling-stroke`})]},a)};return(0,$.jsxs)(`g`,{"data-selectable":!0,transform:`translate(${i.x} ${i.z}) rotate(${s})`,onClick:()=>r(e.id),children:[(0,$.jsx)(`rect`,{x:-a/2,y:-.12/2,width:a,height:o,fill:`#f7f8f5`,stroke:t,strokeWidth:n?`.045`:`.025`}),e.openingKind!==`opening`&&(l?(0,$.jsxs)($.Fragment,{children:[p(-a/2,a/2,f*Math.PI/2,`left`),p(a/2,-a/2,-f*Math.PI/2,`right`)]}):c===`hinged`&&p(d===`left`?-a/2:a/2,d===`left`?a:-a,f*(d===`left`?1:-1)*Math.PI/2,`single`))]})}return(0,$.jsxs)(`g`,{"data-selectable":!0,transform:`translate(${i.x} ${i.z}) rotate(${s})`,onClick:()=>r(e.id),children:[(0,$.jsx)(`rect`,{x:-a/2,y:-.12/2,width:a,height:o,fill:`#f7f8f5`,stroke:n?`#e75c3c`:`#287b8e`,strokeWidth:n?.045:.025}),(0,$.jsx)(`line`,{x1:-a/2,x2:a/2,stroke:`#65a9b8`,strokeWidth:`.025`})]})}function dp({node:e,nodes:t,onSelect:n}){if(e.stairType===`spiral`){let t=Ho(e);return t?(0,$.jsxs)(`g`,{"data-selectable":!0,onClick:()=>n(e.id),children:[(0,$.jsx)(`path`,{d:t.footprintPath,fill:`rgba(255,255,255,.08)`,stroke:`#171717`,strokeWidth:`.025`}),t.treadLines.map((e,n)=>(0,$.jsx)(`line`,{x1:e.start.x,y1:e.start.z,x2:e.end.x,y2:e.end.z,stroke:`#262626`,strokeWidth:n===t.treadLines.length-1?`.035`:`.018`},n)),t.railingPaths.map((e,t)=>(0,$.jsx)(`polyline`,{points:e.map(e=>`${e.x},${e.z}`).join(` `),fill:`none`,stroke:`#171717`,strokeWidth:`.025`},t)),t.centerColumn&&(0,$.jsx)(`circle`,{cx:t.centerColumn.x,cy:t.centerColumn.z,r:Math.max(t.innerRadius*.18,.06),fill:`#d6d3d1`,stroke:`#171717`,strokeWidth:`.02`}),(0,$.jsx)(`line`,{x1:t.upDirection.from.x,y1:t.upDirection.from.z,x2:t.upDirection.to.x,y2:t.upDirection.to.z,stroke:`#171717`,strokeWidth:`.03`,markerEnd:`url(#stair-up)`})]}):null}if(e.stairType===`curved`){let t=ts(e);return t?(0,$.jsxs)(`g`,{"data-selectable":!0,onClick:()=>n(e.id),children:[(0,$.jsx)(`path`,{d:t.footprintPath,fill:`rgba(255,255,255,.08)`,stroke:`#171717`,strokeWidth:`.025`}),t.treadLines.map((e,n)=>(0,$.jsx)(`line`,{x1:e.start.x,y1:e.start.z,x2:e.end.x,y2:e.end.z,stroke:`#262626`,strokeWidth:n===0||n===t.treadLines.length-1?`.03`:`.018`},n)),(0,$.jsx)(`line`,{x1:t.upDirection.from.x,y1:t.upDirection.from.z,x2:t.upDirection.to.x,y2:t.upDirection.to.z,stroke:`#171717`,strokeWidth:`.03`,markerEnd:`url(#stair-up)`})]}):null}let r=es(e,t);return r?(0,$.jsxs)(`g`,{"data-selectable":!0,onClick:()=>n(e.id),children:[r.segments.map(e=>(0,$.jsxs)(`g`,{children:[(0,$.jsx)(`polygon`,{points:e.polygon.map(e=>`${e.x},${e.z}`).join(` `),fill:`rgba(255,255,255,.08)`,stroke:`#171717`,strokeWidth:`.025`}),e.treads.map((e,t)=>(0,$.jsx)(`line`,{x1:e.start.x,y1:e.start.z,x2:e.end.x,y2:e.end.z,stroke:`#262626`,strokeWidth:`.018`},t))]},e.node.id)),(0,$.jsx)(`line`,{x1:r.upDirection.from.x,y1:r.upDirection.from.z,x2:r.upDirection.to.x,y2:r.upDirection.to.z,stroke:`#171717`,strokeWidth:`.03`,fill:`none`,markerEnd:`url(#stair-up)`})]}):null}function fp({node:e,onSelect:t}){let n=Wo(e);return n?(0,$.jsxs)(`g`,{"data-selectable":!0,onClick:()=>t(e.id),children:[(0,$.jsx)(`path`,{d:`M ${n.footprint.map(e=>`${e.x} ${e.z}`).join(` L `)} Z`,fill:`rgba(255,255,255,.02)`,stroke:`#59635f`,strokeWidth:`.025`,strokeDasharray:`.08 .05`}),(0,$.jsx)(`line`,{x1:n.downDirection.from.x,y1:n.downDirection.from.z,x2:n.downDirection.to.x,y2:n.downDirection.to.z,stroke:`#59635f`,strokeWidth:`.03`,markerEnd:`url(#stair-down)`})]}):null}function pp(e){let[t,n]=(0,_.useState)(()=>e?ac(e):null);return(0,_.useEffect)(()=>{let t=!1;return n(e?ac(e):null),e&&uc(e).then(e=>{t||n(e)}),()=>{t=!0}},[e]),t}function mp({node:e,nodes:t,visibility:n,selected:r,viewRotation:i,markerId:a,onSelect:o}){let s=Ja(e),c=Za(e.id,t),l=e.asset?.floorPlanUrl,u=pp(l);if(!s||c.status===`error`)return null;let d=$a(c),f=u&&!u.isFallback?sc({x:u.cropX,y:u.cropY,width:u.cropWidth,height:u.cropHeight},s.width,s.depth):null,p=s.depth/2+.15,m=c.rotationY*180/Math.PI-i;return(0,$.jsxs)(`g`,{"data-selectable":!0,className:`furniture`,transform:eo(d),onClick:()=>o(e.id),children:[n.images&&l&&(u&&f?(0,$.jsx)(`svg`,{x:-s.width/2+f.offsetX,y:-s.depth/2+f.offsetY,width:f.drawWidth,height:f.drawHeight,viewBox:`${u.cropX} ${u.cropY} ${u.cropWidth} ${u.cropHeight}`,preserveAspectRatio:`none`,overflow:`hidden`,children:(0,$.jsx)(`image`,{href:l,x:`0`,y:`0`,width:u.naturalWidth,height:u.naturalHeight,preserveAspectRatio:`xMidYMid meet`})}):(0,$.jsx)(`image`,{href:l,x:-s.width/2,y:-s.depth/2,width:s.width,height:s.depth,preserveAspectRatio:`none`})),(n.boxes||r)&&(0,$.jsx)(`rect`,{x:-s.width/2,y:-s.depth/2,width:s.width,height:s.depth,fill:`none`,stroke:r?`#e75c3c`:`#b88348`,strokeWidth:r?.06:.025}),` `,n.images&&!l&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`line`,{x1:-s.width/2,y1:-s.depth/2,x2:s.width/2,y2:s.depth/2,stroke:`#b88348`,strokeWidth:`.025`}),(0,$.jsx)(`line`,{x1:s.width/2,y1:-s.depth/2,x2:-s.width/2,y2:s.depth/2,stroke:`#b88348`,strokeWidth:`.025`})]}),n.centers&&(0,$.jsx)(`circle`,{r:`.04`,fill:`#e75c3c`}),n.centers&&(0,$.jsx)(`line`,{x2:`0`,y2:s.depth/2,stroke:`#e75c3c`,strokeWidth:`.025`,markerEnd:`url(#${a})`}),` `,n.names&&(0,$.jsx)(`text`,{y:p,textAnchor:`middle`,className:`item-label`,fontSize:`.14`,style:{transform:`rotate(${m}deg)`,transformOrigin:`0px ${p}px`,transition:`transform 240ms cubic-bezier(.2,.8,.2,1)`},children:e.name||e.asset?.name||e.id})]})}function hp({node:e,nodes:t,coverage:n,dimension:r,manualMeasurement:i,measurementUnit:a}){if(i)return(0,$.jsx)(vp,{title:`手动尺寸`,rows:[[`数值`,Ys(Zs(i.start.point,i.end.point,i.mode).valueMeters,a)],[`模式`,i.mode],[`楼层`,gp(i.levelId,t)],[`起点吸附`,i.start.kind],[`终点吸附`,i.end.kind]]});if(r)return(0,$.jsx)(vp,{title:`外围尺寸`,rows:[[`数值`,Ys(r.valueMeters,a)],[`标注层`,r.dimensionLayer],[`楼层`,gp(r.levelId,t)],[`来源墙体`,String(r.sourceWallIds.length)],[`来源洞口`,String(r.sourceOpeningIds.length)]]});if(!e)return(0,$.jsxs)(`section`,{className:`side-section inspector`,children:[(0,$.jsx)(`h2`,{children:`检查面板`}),(0,$.jsx)(`p`,{children:`点击对象查看原始字段与派生几何。`})]});if(e.type===`item`)return(0,$.jsx)(yp,{node:e,nodes:t,unit:a});if(e.type===`shelf`){let n=No(e);return(0,$.jsx)(vp,{title:e.name||`Shelf`,node:e,rows:_p(e,t).concat([[`尺寸 W/D/H`,`${Rf(n.width,a)} / ${Rf(n.depth,a)} / ${Rf(n.height,a)}`],[`分格`,`${n.rows} 行 × ${n.columns} 列`],[`样式`,n.style],[`子 Item`,String((e.children??[]).length)]])})}if(e.type===`slab`){let r=Jo(e),i=n.entries.find(t=>t.nodeId===e.id);return(0,$.jsx)(vp,{title:e.name||`Slab（楼地面）`,node:e,rows:_p(e,t).concat([[`净面积`,r?Xs(r.netArea,a):`未解析`],[`标高`,Rf(e.elevation??.05,a)],[`轮廓 / 洞`,`${e.polygon?.length??0} / ${e.holes?.length??0}`],[`渲染状态`,i?.actualRenderStatus??`—`]])})}return(0,$.jsx)(bp,{node:e,nodes:t,unit:a})}function gp(e,t){return e?t[e]?.name||e:`未确定`}function _p(e,t){let n=Ga(e.id,t);return[[`类型`,e.type],[`所属楼层`,gp(n.levelId,t)],[`父节点`,e.parentId?t[e.parentId]?.name||t[e.parentId]?.type||e.parentId:`—`]]}function vp({title:e,rows:t,node:n}){return(0,$.jsxs)(`section`,{className:`side-section inspector`,children:[(0,$.jsx)(`h2`,{children:e}),(0,$.jsx)(`dl`,{children:t.map(([e,t])=>(0,$.jsxs)(_.Fragment,{children:[(0,$.jsx)(`dt`,{children:e}),(0,$.jsx)(`dd`,{children:t})]},e))}),n&&(0,$.jsxs)(`details`,{children:[(0,$.jsx)(`summary`,{children:`原始 JSON`}),(0,$.jsx)(`pre`,{children:JSON.stringify(n,null,2)})]})]})}function yp({node:e,nodes:t,unit:n}){let r=Ja(e),i=Za(e.id,t),a=e.asset?.floorPlanUrl,o=pp(a),s=r&&o&&!o.isFallback&&o.cropWidth>0&&o.cropHeight>0?sc({x:o.cropX,y:o.cropY,width:o.cropWidth,height:o.cropHeight},r.width,r.depth):null,c=a?o?o.isFallback?`整图回退：${o.fallbackReason}`:`已加载并裁剪`:`图片加载中`:`无平面图图片`;return(0,$.jsx)(vp,{title:e.name||e.asset?.name||`家具`,node:e,rows:_p(e,t).concat([[`尺寸 W/H/D`,r?`${Rf(r.width,n)} / ${Rf(r.height,n)} / ${Rf(r.depth,n)}`:`无效`],[`朝向`,i.status===`ok`?`${Xa(i.rotationY)}°`:`未解析`],[`平面图`,c],[`图片贴合`,s?`四边贴合`:`—`]])})}function bp({node:e,nodes:t,unit:n}){let r=_p(e,t);if(e.type===`level`&&r.splice(1,0,[`名称`,e.name||`未命名`],[`子节点`,String(Object.values(t).filter(t=>t.parentId===e.id).length)]),e.type===`wall`){let t=Array.isArray(e.start)&&Array.isArray(e.end)?Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]):null;r.push([`长度`,t===null?`未解析`:Rf(t,n)],[`墙厚`,Rf(e.thickness??.1,n)],[`几何`,Number.isFinite(e.curveOffset)&&e.curveOffset!==0?`曲墙`:`直墙`])}if((e.type===`door`||e.type===`window`)&&r.push([`宿主墙`,e.wallId?t[e.wallId]?.name||`墙体`:`未关联`],[`尺寸 W/H`,`${Rf(e.width??.9,n)} / ${Rf(e.height??2,n)}`],[`类型`,e.type===`door`?e.doorType??`hinged`:e.windowType??`window`],[`开口`,e.openingKind??`door/window`]),e.type===`zone`){let t=os(e),i=Math.abs(t.reduce((e,n,r)=>{let i=t[(r+1)%t.length];return e+n.x*i.z-n.z*i.x},0)/2);r.push([`面积`,t.length>2?Xs(i,n):`未解析`],[`轮廓点`,String(t.length)])}return e.type===`stair`&&r.push([`楼梯类型`,e.stairType??`straight`],[`宽度`,Number.isFinite(e.width)?Rf(e.width,n):`—`],[`级数`,String(e.stepCount??e.steps?.length??`—`)]),(0,$.jsx)(vp,{title:e.name||e.type,node:e,rows:r})}function xp({nodes:e}){let t=t=>Object.values(e).filter(e=>e.type===t).length,n=Object.values(e).filter(e=>e.type===`shelf`),r=n.filter(e=>!Po(e)),i=n.filter(t=>Fo(t.id,e).status===`error`),a=n.reduce((e,t)=>{let n=No(t).style;return e[n]=(e[n]||0)+1,e},{});return(0,$.jsxs)(`section`,{className:`side-section`,children:[(0,$.jsx)(`h2`,{children:`文件统计`}),(0,$.jsxs)(`div`,{className:`stat-grid`,children:[(0,$.jsxs)(`span`,{children:[`节点`,(0,$.jsx)(`b`,{children:Object.keys(e).length})]}),(0,$.jsxs)(`span`,{children:[`Level`,(0,$.jsx)(`b`,{children:t(`level`)})]}),(0,$.jsxs)(`span`,{children:[`Wall`,(0,$.jsx)(`b`,{children:t(`wall`)})]}),(0,$.jsxs)(`span`,{children:[`Item`,(0,$.jsx)(`b`,{children:t(`item`)})]}),(0,$.jsxs)(`span`,{children:[`Stair`,(0,$.jsx)(`b`,{children:t(`stair`)})]}),(0,$.jsxs)(`span`,{children:[`Shelf`,(0,$.jsx)(`b`,{children:n.length})]}),(0,$.jsxs)(`span`,{children:[`无效 Shelf`,(0,$.jsx)(`b`,{children:r.length})]}),(0,$.jsxs)(`span`,{children:[`父级异常 Shelf`,(0,$.jsx)(`b`,{children:i.length})]}),Object.entries(a).map(([e,t])=>(0,$.jsxs)(`span`,{children:[e,(0,$.jsx)(`b`,{children:t})]},e))]})]})}var Sp={pass:`通过`,issue:`存在问题`,unable_to_determine:`无法判断`,not_applicable:`不适用`},Cp={source_data:`源数据`,parser:`解析`,handoff:`交接映射`,rule:`评价规则`,geometry_tolerance:`几何容差`,insufficient_information:`信息不足`},wp=e=>e==null?`—`:typeof e==`string`?e:String(e);function Tp({report:e,nodes:t,roomAnalysis:n,error:r,focusMessage:i,activeHighlight:a,disabled:o,onRun:s,onFocus:c,onRegisterRule:l}){let u=e?Cf(e.rules):[];return(0,$.jsxs)(`section`,{className:`side-section evaluation-panel`,children:[(0,$.jsxs)(`div`,{className:`side-heading`,children:[(0,$.jsx)(`h2`,{children:`G1 / G3 基础检查`}),(0,$.jsx)(`button`,{className:`primary`,disabled:o,onClick:s,children:`运行基础检查`})]}),r&&(0,$.jsxs)(`div`,{className:`evaluation-error`,children:[(0,$.jsx)(`b`,{children:`评价失败`}),(0,$.jsx)(`span`,{children:r})]}),i&&(0,$.jsx)(`div`,{className:`evaluation-focus-message`,children:i}),!e&&!r&&(0,$.jsx)(`p`,{children:`解析完成后手动运行；评价不会随画布变化自动重复。`}),e&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:`evaluation-overall status-${e.overallStatus}`,children:[(0,$.jsx)(`span`,{children:`整体状态`}),(0,$.jsx)(`b`,{children:Sp[e.overallStatus]})]}),(0,$.jsx)(`div`,{className:`evaluation-counts`,children:Object.keys(Sp).map(t=>(0,$.jsxs)(`span`,{children:[Sp[t],` `,(0,$.jsx)(`b`,{children:e.counts[t]})]},t))}),e.g3Summary&&(0,$.jsxs)(`div`,{className:`g3-summary`,children:[(0,$.jsxs)(`strong`,{children:[`G3 V0.1 汇总 · `,Sp[e.g3Summary.overallStatus]]}),(0,$.jsxs)(`span`,{children:[`通过 `,e.g3Summary.counts.pass,` · 问题 `,e.g3Summary.counts.issue,` · 待核验 `,e.g3Summary.counts.unable_to_determine,` · 不适用 `,e.g3Summary.counts.not_applicable]}),(0,$.jsxs)(`span`,{children:[`严重 `,e.g3Summary.severityCounts.severe,` · 主要 `,e.g3Summary.severityCounts.major,` · 一般 `,e.g3Summary.severityCounts.general]}),(0,$.jsxs)(`span`,{children:[`涉及 Room `,e.g3Summary.involvedRoomCount,` · 对象 `,e.g3Summary.involvedObjectCount]}),(0,$.jsxs)(`span`,{children:[`同层使用性：`,Sp[e.g3Summary.sections.sameFloorUsability.issue?`issue`:e.g3Summary.sections.sameFloorUsability.unable_to_determine?`unable_to_determine`:`pass`],` · 跨层使用性：`,Sp[e.g3Summary.sections.crossFloorUsability.issue?`issue`:e.g3Summary.sections.crossFloorUsability.unable_to_determine?`unable_to_determine`:`pass`]]}),(0,$.jsxs)(`span`,{children:[`房间专项检查 `,Object.values(e.g3Summary.sections.specialistChecks).reduce((e,t)=>e+t,0),` 项 · 数据不足待核验 `,e.g3Summary.sections.dataGaps,` 项`]})]}),(0,$.jsx)(`div`,{className:`evaluation-rules`,children:u.map(e=>{let r=Df(e,t,n),i=[...new Set(r.targets.map(e=>e.levelName))],o=a?.ruleId===e.ruleId?a.targetIndex:0,s=Math.min(o,Math.max(0,r.targets.length-1)),u=r.targets[s],d=a?.ruleId===e.ruleId,f=t=>{u&&(t.target.closest(`button, details, summary, a, input, select`)||`key`in t&&t.key!==`Enter`&&t.key!==` `||(t.preventDefault(),c(e.ruleId,u,s)))};return(0,$.jsxs)(`article`,{ref:t=>l(e.ruleId,t),className:`evaluation-rule status-${e.status}${d?` active-evaluation-rule`:``}${u?` is-focusable`:``}`,role:u?`button`:void 0,tabIndex:u?0:void 0,onClick:f,onKeyDown:f,children:[(0,$.jsxs)(`div`,{className:`evaluation-rule-heading`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`code`,{children:e.ruleId}),(0,$.jsx)(`strong`,{children:r.title})]}),(0,$.jsx)(`em`,{children:Sp[e.status]})]}),(0,$.jsx)(`p`,{children:r.description}),(0,$.jsxs)(`div`,{className:`designer-guidance`,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`b`,{children:`为什么要处理`}),r.rationale]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`b`,{children:`建议`}),r.recommendation]}),r.supplemental&&(0,$.jsx)(`span`,{className:`supplemental`,children:r.supplemental})]}),(0,$.jsxs)(`div`,{className:`evaluation-card-meta`,children:[(0,$.jsxs)(`span`,{children:[e.status===`unable_to_determine`?`待核验数量`:`问题数量`,` `,(0,$.jsx)(`b`,{children:r.problemCountLabel})]}),(0,$.jsxs)(`span`,{children:[`所在楼层 `,(0,$.jsx)(`b`,{children:i.length?i.join(`、`):`—`})]})]}),u&&(0,$.jsxs)(`div`,{className:`evaluation-object-nav`,children:[(0,$.jsx)(`span`,{className:`evaluation-object-label`,children:u.label}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`button`,{disabled:s===0,"aria-label":`${r.title} 上一处`,onClick:()=>c(e.ruleId,r.targets[s-1],s-1),children:`上一处`}),(0,$.jsxs)(`b`,{children:[s+1,` / `,r.targets.length]}),(0,$.jsx)(`button`,{disabled:s>=r.targets.length-1,"aria-label":`${r.title} 下一处`,onClick:()=>c(e.ruleId,r.targets[s+1],s+1),children:`下一处`})]}),(0,$.jsx)(`button`,{className:`view-on-canvas`,onClick:()=>c(e.ruleId,u,s),children:`在图中查看`})]}),(0,$.jsxs)(`details`,{children:[(0,$.jsx)(`summary`,{children:`技术明细`}),(0,$.jsxs)(`small`,{children:[(0,$.jsx)(`b`,{children:`规则`}),e.ruleId,` · `,e.ruleName]}),e.normalizedObjectIds.length>0&&(0,$.jsxs)(`small`,{children:[(0,$.jsx)(`b`,{children:`标准化 ID`}),e.normalizedObjectIds.join(`, `)]}),e.pascalSourceIds.length>0&&(0,$.jsxs)(`small`,{children:[(0,$.jsx)(`b`,{children:`Pascal ID`}),e.pascalSourceIds.join(`, `)]}),e.missingData.length>0&&(0,$.jsxs)(`small`,{children:[(0,$.jsx)(`b`,{children:`缺失数据`}),e.missingData.join(`；`)]}),(0,$.jsxs)(`small`,{children:[(0,$.jsx)(`b`,{children:`置信度`}),e.confidence.level,` (`,e.confidence.score,`)`,e.confidence.reasons.length?` · ${e.confidence.reasons.join(`；`)}`:``]}),e.diagnostics.length>0&&(0,$.jsxs)(`small`,{children:[(0,$.jsx)(`b`,{children:`原始字段与诊断`}),e.diagnostics.map(e=>`${e.field??e.code}: 实际=${wp(e.actualValue)}；要求=${e.expectedValue??`—`}；来源=${e.origin?Cp[e.origin]:`—`}；${e.message}`).join(`；`)]}),e.measurements.length>0&&(0,$.jsxs)(`small`,{children:[(0,$.jsx)(`b`,{children:`测量值`}),e.measurements.map(e=>`${e.normalizedObjectId?`${e.normalizedObjectId}.`:``}${e.name}=${wp(e.value)}${e.unit?` ${e.unit}`:``}`).join(`；`)]}),e.thresholds.length>0&&(0,$.jsxs)(`small`,{children:[(0,$.jsx)(`b`,{children:`阈值/容差`}),e.thresholds.map(e=>`${e.name}=${wp(e.value)}${e.unit?` ${e.unit}`:``}`).join(`；`)]})]})]},e.ruleId)})})]})]})}function Ep(e){let t=Object.values(e).filter(e=>e.type===`item`).flatMap(t=>{let n=Za(t.id,e);return n.status===`error`?[{severity:`error`,code:n.error||`unsupported_parent_transform`,message:`无法确定家具楼层坐标`,nodeId:t.id}]:[]}),n=Object.values(e).filter(e=>e.type===`shelf`).flatMap(t=>{let n=Fo(t.id,e);No(t);let r=[];return Po(t)||r.push({severity:`error`,code:`invalid_shelf_dimensions`,message:`Shelf width/depth 无效；未绘制虚假占地`,nodeId:t.id,sourcePath:`nodes.${t.id}`}),t.rows!==void 0&&(!Number.isInteger(t.rows)||t.rows<1||t.rows>8)&&r.push({severity:`error`,code:`invalid_shelf_rows`,message:`Shelf rows 必须为 1–8 的整数`,nodeId:t.id,sourcePath:`nodes.${t.id}.rows`}),t.columns!==void 0&&(!Number.isInteger(t.columns)||t.columns<1||t.columns>6)&&r.push({severity:`error`,code:`invalid_shelf_columns`,message:`Shelf columns 必须为 1–6 的整数`,nodeId:t.id,sourcePath:`nodes.${t.id}.columns`}),n.status===`error`&&r.push({severity:`error`,code:n.error===`parent_cycle`?`shelf_parent_cycle`:n.error===`missing_parent`?`missing_shelf_parent`:`unsupported_shelf_parent_transform`,message:`无法确定 Shelf 的楼层坐标`,nodeId:t.id,sourcePath:`nodes.${t.id}.parentId`}),r});return[...t,...n]}function Dp({diagnostics:e}){return(0,$.jsx)(`section`,{className:`side-section diagnostics-panel`,children:(0,$.jsxs)(`details`,{children:[(0,$.jsxs)(`summary`,{className:`side-heading`,children:[(0,$.jsx)(`h2`,{children:`诊断`}),(0,$.jsx)(`span`,{className:`pill`,children:e.length})]}),e.slice(0,30).map((e,t)=>(0,$.jsxs)(`div`,{className:`diag ${e.severity}`,children:[(0,$.jsx)(`b`,{children:e.code}),(0,$.jsx)(`span`,{children:e.message}),(0,$.jsx)(`small`,{children:e.nodeId||``})]},`${e.code}-${t}`))]})})}(0,v.createRoot)(document.getElementById(`root`)).render((0,$.jsx)(zf,{}));