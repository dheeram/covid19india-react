(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[36],{236:function(n,e,t){"use strict";t.r(e);var a=t(78),o=t(30),c=t(178),i=t.n(c),r=t(0),d=t.n(r),l=t(81),s=t(145),f=t(249),u=t(189);e.default=d.a.memo((function(n){var e=n.setIsTimelineMode,t=n.setDate,c=n.dates,p=Object(s.a)(),h=Object(a.a)(p,2),m=h[0],y=h[1].width,b=Object(r.useState)(0),g=Object(a.a)(b,2),k=g[0],w=g[1],O=Object(l.d)(c.length,(function(n){return{x:160*(k-n)+240-35,color:0===n?"#6c757d":"#6c757d99",opacity:n<2?1:0}}),l.b.stiff),j=Object(a.a)(O,2),x=j[0],v=j[1],E=Object(u.a)((function(n){var e=n.down,t=Object(a.a)(n.delta,1)[0],o=Object(a.a)(n.direction,1)[0],c=n.distance,i=n.cancel,r=L(o);e&&c>25&&(i(w(r)),M(r)),0===k&&o<0&&D(),P({clampedIndex:k,xDir:o,down:e,xDelta:t})})),L=function(n){return i()(k+(n>0?1:-1),0,c.length-1)},P=function(n){n.direction;var e=n.clampedIndex,t=n.down,a=n.xDelta;v((function(n){if(n<e-1)return{x:y,color:"#6c757d99",opacity:0,display:"none"};if(n>e+1)return{x:-40,color:"#6c757d99",opacity:0,display:"none"};var o=0;return o=a?y/3*(e-n)+y/2-35+(t?a:0):y/3*(e-n)+y/3+45,n===e?{x:o,color:"#6c757d",display:"block"}:{x:o,color:"#6c757d99",opacity:1,display:"block"}}))},B=function(n){if(k<c.length){var e=L(n);P({direction:n,clampedIndex:e}),w(e),M(e)}1===k&&-1===n&&D()};Object(f.a)("ArrowLeft",(function(){B(1)})),Object(f.a)("ArrowRight",(function(){B(-1)})),Object(f.a)("Escape",(function(){e(!1),t("")}));var D=function(){setTimeout((function(){e(!1)}),1e3)},I=function(n){return c[n]===Object(o.h)()?"Today":Object(o.d)(c[n],"dd MMM")},M=function(n){t(0===n?"":c[n])},T={"2020-03-25":"Beginning of Lockdown Phase 1","2020-04-14":"End of Lockdown Phase 1","2020-04-15":"Beginning of Lockdown Phase 2","2020-05-03":"End of Lockdown Phase 2","2020-05-04":"Beginning of Lockdown Phase 3","2020-05-17":"End of Lockdown Phase 3","2020-05-18":"Beginning of Lockdown Phase 4","2020-05-31":"End of Lockdown Phase 4","2020-06-01":"Beginning of Lockdown Phase 5"},N=Object(l.f)(T.hasOwnProperty(c[k]),null,{from:{transform:"translate3d(0, 20px, 0)",opacity:0},enter:{transform:"translate3d(0, 0px, 0)",opacity:1},leave:{transform:"translate3d(0, 20px, 0)",opacity:0}}),A=function(n){B(n>k?1:-1)};return d.a.createElement(d.a.Fragment,null,N.map((function(n){var e=n.item,t=n.key,a=n.props;return e&&d.a.createElement(l.a.h5,{className:"highlight",key:t,style:a},T[c[k]])})),d.a.createElement("div",Object.assign({className:"Timeline",ref:m},E()),x.filter((function(n,e){n.opacity;return e<c.length&&(e===k+1||e===k-1||e===k+2||e===k-2||e===k)})).map((function(n,e){var t=n.x,a=n.color,o=n.opacity,i=n.display;return d.a.createElement(l.a.div,{className:"day",key:e,style:{transform:t.interpolate((function(n){return"translate3d(".concat(n,"px,0,0)")})),opacity:o,display:i}},k<2&&d.a.createElement(l.a.h5,{style:{color:a},onClick:function(){A(e)}},I(e)),k>1&&k<c.length&&d.a.createElement(l.a.h5,{style:{color:a},onClick:function(){A(k+e-2)}},I(k+e-2)))}))))}))}}]);
//# sourceMappingURL=36.0120936a.chunk.js.map