(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[16],{204:function(e,t,n){"use strict";var r=n(0);t.a=function(e,t){var n=function(){var e=Object(r.useRef)(!0);return e.current?(e.current=!1,!0):e.current}();Object(r.useEffect)((function(){if(!n)return e()}),t)}},246:function(e,t,n){"use strict";n.r(t);var r=n(78),i=n(23),a=n(97),o=n(125);function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=n(89),l=n(0),f=n.n(l),s=n(204),d=n(106);var b=function(e,t,n){for(var i=Object(l.useState)(n),a=Object(r.a)(i,2),f=a[0],b=a[1],h=arguments.length,p=new Array(h>3?h-3:0),v=3;v<h;v++)p[v-3]=arguments[v];var y=d.a.apply(void 0,[e,t,f].concat(p)),m=y.data,O=y.isValidating,g=y.error,j=c(y,["data","isValidating","error"]);return Object(s.a)((function(){b(Object(u.a)(f,(function(e){e.initialData=m})))}),[m]),Object(o.a)(Object(o.a)({},j),{},{isValidating:O,error:g,data:m})},h=n(31),p=n(111),v=n(5),y=n(218),m=n(247),O=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,202))})),g=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(26)]).then(n.bind(null,203))})),j=Object(l.lazy)((function(){return Promise.all([n.e(19),n.e(31)]).then(n.bind(null,256))})),P=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,250))})),E=Object(l.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(23)]).then(n.bind(null,174))})),S=Object(l.lazy)((function(){return n.e(32).then(n.bind(null,107))})),w=Object(l.lazy)((function(){return n.e(35).then(n.bind(null,242))})),A=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(33)]).then(n.bind(null,132))})),k=Object(l.lazy)((function(){return n.e(22).then(n.bind(null,133))})),x=Object(l.lazy)((function(){return n.e(29).then(n.bind(null,144))}));t.default=function(e){var t,n,o=Object(l.useState)({stateCode:"TT",districtName:null}),c=Object(r.a)(o,2),u=c[0],s=c[1],d=Object(l.useState)(null),z=Object(r.a)(d,2),T=z[0],D=z[1],I=Object(y.a)("mapStatistic","active"),M=Object(r.a)(I,2),N=M[0],R=M[1],C=Object(l.useState)(""),F=Object(r.a)(C,2),_=F[0],H=F[1],K=Object(v.h)(),W=b("".concat(i.a,"/timeseries.min.json"),h.c,{revalidateOnMount:!0,refreshInterval:1e5}).data,J=b("".concat(i.a,"/data").concat(_?"-".concat(_):"",".min.json"),h.c,{revalidateOnMount:!0,refreshInterval:1e5}).data,U=Object(l.useRef)(),V=Object(a.a)(U),$=Object(m.a)().width;return f.a.createElement(f.a.Fragment,null,f.a.createElement(p.a,null,f.a.createElement("title",null,"Coronavirus Outbreak in India - covid19india.org"),f.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})),f.a.createElement("div",{className:"Home"},f.a.createElement("div",{className:"home-left"},f.a.createElement("div",{className:"header"},f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(w,null)),W&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",{style:{minHeight:"56px"}})},f.a.createElement(j,{setDate:H,dates:Object.keys(null===(t=W.TT)||void 0===t?void 0:t.dates).reverse(),date:_}))),f.a.createElement("div",{style:{position:"relative"}},J&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",{style:{height:"50rem"}})},$>769&&f.a.createElement(k,{mapStatistic:N,setMapStatistic:R}),f.a.createElement(A,{data:J.TT})),W&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",{style:{height:"50rem"}})},f.a.createElement(E,Object.assign({timeseries:null===(n=W.TT)||void 0===n?void 0:n.dates},{date:_})))),J&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(P,{data:J,regionHighlighted:u,setRegionHighlighted:s}))),f.a.createElement("div",{className:"home-right",ref:U},(V||K.hash)&&f.a.createElement(f.a.Fragment,null,J&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",{style:{height:"50rem"}})},f.a.createElement(x,{data:J.TT,stateCode:"TT"}),f.a.createElement(g,Object.assign({stateCode:"TT"},{data:J},{mapStatistic:N,setMapStatistic:R},{regionHighlighted:u,setRegionHighlighted:s},{anchor:T,setAnchor:D}))),W&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(O,Object.assign({stateCode:"TT"},{timeseries:W,date:_,regionHighlighted:u,setRegionHighlighted:s,anchor:T,setAnchor:D})))))),V&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(S,null)))}},89:function(e,t,n){"use strict";function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(e){return!!e&&!!e[V]}function a(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||Array.isArray(e)||!!e[U]||!!e.constructor[U]||d(e)||b(e))}function o(e,t,n){void 0===n&&(n=!1),0===c(e)?(n?Object.keys:$)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function c(e){var t=e[V];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:d(e)?2:b(e)?3:0}function u(e,t){return 2===c(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function l(e,t){return 2===c(e)?e.get(t):e[t]}function f(e,t,n){var r=c(e);2===r?e.set(t,n):3===r?(e.delete(t),e.add(n)):e[t]=n}function s(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){return H&&e instanceof Map}function b(e){return K&&e instanceof Set}function h(e){return e.o||e.t}function p(e){if(Array.isArray(e))return e.slice();var t=q(e);delete t[V];for(var n=$(t),r=0;r<n.length;r++){var i=n[r],a=t[i];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function v(e,t){m(e)||i(e)||!a(e)||(c(e)>1&&(e.set=e.add=e.clear=e.delete=y),Object.freeze(e),t&&o(e,(function(e,t){return v(t,!0)}),!0))}function y(){r(2)}function m(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function O(e){var t=L[e];return t||r(19,e),t}function g(){return F}function j(e,t){t&&(O("Patches"),e.u=[],e.s=[],e.v=t)}function P(e){E(e),e.p.forEach(w),e.p=null}function E(e){e===F&&(F=e.l)}function S(e){return F={p:[],l:F,h:e,m:!0,_:0}}function w(e){var t=e[V];0===t.i||1===t.i?t.j():t.g=!0}function A(e,t){t._=t.p.length;var n=t.p[0],i=void 0!==e&&e!==n;return t.h.O||O("ES5").S(t,e,i),i?(n[V].P&&(P(t),r(4)),a(e)&&(e=k(t,e),t.l||z(t,e)),t.u&&O("Patches").M(n[V],e,t.u,t.s)):e=k(t,n,[]),P(t),t.u&&t.v(t.u,t.s),e!==J?e:void 0}function k(e,t,n){if(m(t))return t;var r=t[V];if(!r)return o(t,(function(i,a){return x(e,r,t,i,a,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return z(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=p(r.k):r.o;o(i,(function(t,a){return x(e,r,i,t,a,n)})),z(e,i,!1),n&&e.u&&O("Patches").R(r,n,e.u,e.s)}return r.o}function x(e,t,n,r,o,c){if(i(o)){var l=k(e,o,c&&t&&3!==t.i&&!u(t.D,r)?c.concat(r):void 0);if(f(n,r,l),!i(l))return;e.m=!1}if(a(o)&&!m(o)){if(!e.h.N&&e._<1)return;k(e,o),t&&t.A.l||z(e,o)}}function z(e,t,n){void 0===n&&(n=!1),e.h.N&&e.m&&v(t,n)}function T(e,t){var n=e[V];return(n?h(n):e)[t]}function D(e){e.P||(e.P=!0,e.l&&D(e.l))}function I(e){e.o||(e.o=p(e.t))}function M(e,t,n){var r=d(t)?O("MapSet").T(t,n):b(t)?O("MapSet").F(t,n):e.O?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:g(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},i=r,a=X;n&&(i=[r],a=B);var o=Proxy.revocable(i,a),c=o.revoke,u=o.proxy;return r.k=u,r.j=c,u}(t,n):O("ES5").J(t,n);return(n?n.A:g()).p.push(r),r}function N(e){return i(e)||r(22,e),function e(t){if(!a(t))return t;var n,r=t[V],i=c(t);if(r){if(!r.P&&(r.i<4||!O("ES5").K(r)))return r.t;r.I=!0,n=R(t,i),r.I=!1}else n=R(t,i);return o(n,(function(t,i){r&&l(r.t,t)===i||f(n,t,e(i))})),3===i?new Set(n):n}(e)}function R(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return p(e)}var C,F,_="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),H="undefined"!=typeof Map,K="undefined"!=typeof Set,W="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,J=_?Symbol("immer-nothing"):((C={})["immer-nothing"]=!0,C),U=_?Symbol("immer-draftable"):"__$immer_draftable",V=_?Symbol("immer-state"):"__$immer_state",$=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames),q=Object.getOwnPropertyDescriptors||function(e){var t={};return $(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},L={},X={get:function(e,t){if(t===V)return e;var n=h(e);if(!u(n,t))return function(e,t,n){if(n in t)for(var r=Object.getPrototypeOf(t);r;){var i,a=Object.getOwnPropertyDescriptor(r,n);if(a)return"value"in a?a.value:null===(i=a.get)||void 0===i?void 0:i.call(e.k);r=Object.getPrototypeOf(r)}}(e,n,t);var r=n[t];return e.I||!a(r)?r:r===T(e.t,t)?(I(e),e.o[t]=M(e.A.h,r,e)):r},has:function(e,t){return t in h(e)},ownKeys:function(e){return Reflect.ownKeys(h(e))},set:function(e,t,n){if(e.D[t]=!0,!e.P){if(s(n,T(h(e),t))&&void 0!==n)return!0;I(e),D(e)}return e.o[t]=n,!0},deleteProperty:function(e,t){return void 0!==T(e.t,t)||t in e.t?(e.D[t]=!1,I(e),D(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=h(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){r(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){r(12)}},B={};o(X,(function(e,t){B[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),B.deleteProperty=function(e,t){return X.deleteProperty.call(this,e[0],t)},B.set=function(e,t,n){return X.set.call(this,e[0],t,n,e[0])};var G=new(function(){function e(e){this.O=W,this.N=!1,"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var t=e.prototype;return t.produce=function(e,t,n){if("function"==typeof e&&"function"!=typeof t){var i=t;t=e;var o=this;return function(e){var n=this;void 0===e&&(e=i);for(var r=arguments.length,a=Array(r>1?r-1:0),c=1;c<r;c++)a[c-1]=arguments[c];return o.produce(e,(function(e){var r;return(r=t).call.apply(r,[n,e].concat(a))}))}}var c;if("function"!=typeof t&&r(6),void 0!==n&&"function"!=typeof n&&r(7),a(e)){var u=S(this),l=M(this,e,void 0),f=!0;try{c=t(l),f=!1}finally{f?P(u):E(u)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(e){return j(u,n),A(e,u)}),(function(e){throw P(u),e})):(j(u,n),A(c,u))}if(!e||"object"!=typeof e){if((c=t(e))===J)return;return void 0===c&&(c=e),this.N&&v(c,!0),c}r(21,e)},t.produceWithPatches=function(e,t){var n,r,i=this;return"function"==typeof e?function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return i.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(r))}))}:[this.produce(e,t,(function(e,t){n=e,r=t})),n,r]},t.createDraft=function(e){a(e)||r(8),i(e)&&(e=N(e));var t=S(this),n=M(this,e,void 0);return n[V].C=!0,E(t),n},t.finishDraft=function(e,t){var n=(e&&e[V]).A;return j(n,t),A(void 0,n)},t.setAutoFreeze=function(e){this.N=e},t.setUseProxies=function(e){e&&!W&&r(20),this.O=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}var a=O("Patches").$;return i(e)?a(e,t):this.produce(e,(function(e){return a(e,t.slice(n+1))}))},e}()),Q=G.produce;G.produceWithPatches.bind(G),G.setAutoFreeze.bind(G),G.setUseProxies.bind(G),G.applyPatches.bind(G),G.createDraft.bind(G),G.finishDraft.bind(G);t.a=Q},97:function(e,t,n){"use strict";var r=n(78),i=n(0),a={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),o=n[0],c=n[1];return Object(i.useEffect)((function(){void 0!==e.current&&new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&window.requestIdleCallback((function(){c(!0),n.unobserve(e.current)}))}))}),a).observe(e.current)}),[e]),o}}}]);
//# sourceMappingURL=16.347b9ea8.chunk.js.map