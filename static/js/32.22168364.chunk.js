(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[32,31],{635:function(t,e,r){"use strict";r.r(e);var n=r(7),c=r(20),a=r(87),i=r(84),o=r.n(i),u=r(82),s=r.n(u),l=r(2),f=r(726),j=r(89),O=r(18);function b(t){var e=t.statistic,r=t.total,i=t.delta,o=Object(f.a)().t,u=Object(j.useSpring)({total:r,delta:i,config:n.s}),s=n.w[e];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h5",{children:o(Object(c.a)(s.displayName))}),Object(O.jsx)(j.animated.h4,{children:"active"!==e?i>0?u.delta.to((function(t){return"+ ".concat(Object(c.e)(t,s.format,e))})):Object(O.jsx)(a.k,{size:9,verticalAlign:2}):"\xa0"}),Object(O.jsx)(j.animated.h1,{children:u.total.to((function(t){return Object(c.e)(t,s.format,e)}))})]})}var d=Object(l.memo)(b);function p(t){var e=t.data,r=Object(l.useMemo)((function(){var t=[];return n.r.map((function(e,r){return t.push({animationDelay:"".concat(750+250*r,"ms")}),null})),t}),[]);return Object(O.jsx)("div",{className:"Level",children:n.r.map((function(t,n){return Object(O.jsx)(j.animated.div,{className:o()("level-item","is-".concat(t),"fadeInUp"),style:r[n],children:Object(O.jsx)(d,{statistic:t,total:Object(c.h)(e,"total",t),delta:Object(c.h)(e,"delta",t)})},n)}))})}var h=function(t,e){return!!s()(t.data,e.data)};e.default=Object(l.memo)(p,h)},82:function(t,e,r){"use strict";t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,c,a;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(c=n;0!==c--;)if(!t(e[c],r[c]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(a=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(c=n;0!==c--;)if(!Object.prototype.hasOwnProperty.call(r,a[c]))return!1;for(c=n;0!==c--;){var i=a[c];if(!t(e[i],r[i]))return!1}return!0}return e!==e&&r!==r}}}]);
//# sourceMappingURL=32.22168364.chunk.js.map