(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[21],{110:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return o})),n.d(t,"i",(function(){return r})),n.d(t,"j",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"g",(function(){return b})),n.d(t,"h",(function(){return u}));var a={position:"absolute",transform:"translate3d(-20rem, 0, 0)",height:"100vh",zIndex:-1},i={position:"absolute",transform:"translate3d(10rem, 0, 0)"},c={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},o={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},r={opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},s={opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},l={opacity:1,marginTop:"7.5rem",marginBottom:"30rem"},d={opacity:0,height:"0rem",marginTop:"0rem",marginBottom:"0rem"},b={opacity:1,transform:"translate3d(0, 0px, 0)",height:200},u={opacity:0,transform:"translate3d(0, 2px, 0)",height:0}},149:function(e){e.exports=JSON.parse('{"english":"English","hindi":"\u0939\u093f\u0902\u0926\u0940","bengali":"\u09ac\u09be\u0982\u09b2\u09be","gujarati":"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0","kannada":"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1","malayalam":"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02","marathi":"\u092e\u0930\u093e\u0920\u0940","odiya":"\u0b13\u0b21\u0b3f\u0b06","punjabi":"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40","tamil":"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd","telugu":"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"}')},185:function(e,t,n){},718:function(e,t,n){"use strict";n.r(t);var a=n(37),i=(n(185),function(){window.location.replace("https://blog.covid19india.org")}),c=n(30),o=n(110),r=n(149),s=n(2),l=n(677),d=n(678),b=n(679),u=n(680),j=n(681),h=n(682),O=n(726),p=n(38),f=n(89),m=n(676),x=n(717),v=n(18);function g(e){var t=this,n=e.pages,a=e.setExpand,i=e.darkMode,o=e.windowSize,r=Object(s.useRef)(null),l=Object(O.a)().t,d=Object(s.useCallback)((function(){o.width>768&&a(!1)}),[a,o.width]);return Object(v.jsxs)("div",{className:"expand",ref:r,onMouseLeave:d,children:[n.map((function(e,n){return!0===e.showInNavbar?Object(v.jsx)(p.b,Object(c.a)(Object(c.a)({to:e.pageLink},o.width<769&&{onClick:a.bind(t,!1)}),{},{children:Object(v.jsx)("span",Object(c.a)(Object(c.a)({},k(e.pageLink,e.animationDelayForNavbar)),{},{children:l(e.displayName)}))}),n):null})),o.width<768&&Object(v.jsx)(N,{darkMode:i}),Object(v.jsx)("div",{className:"expand-bottom",children:Object(v.jsx)("h5",{children:l("A crowdsourced initiative.")})})]})}var w=function(e){var t,n=this,i=e.pages,j=e.darkMode,h=e.showLanguageSwitcher,w=e.setShowLanguageSwitcher,k=Object(O.a)(),S=k.i18n,L=k.t,z=Object.keys(r).includes(null===S||void 0===S?void 0:S.language)?null===S||void 0===S?void 0:S.language:null===S||void 0===S||null===(t=S.options)||void 0===t?void 0:t.fallbackLng[0],I=Object(s.useState)(!1),C=Object(a.a)(I,2),M=C[0],E=C[1];Object(m.a)(M);var T=Object(x.a)(),P=Object(f.useTransition)(!0,{from:{opacity:0},enter:{opacity:1}}),A=Object(f.useTransition)(M,{from:T.width<769?o.d:o.c,enter:T.width<769?o.f:o.e,leave:T.width<769?o.d:o.c,config:{mass:1,tension:210,friction:26}}),B=Object(s.useCallback)((function(){T.width>769&&E(!0)}),[T.width]),J=Object(s.useCallback)((function(){M&&E(!1),w(!h)}),[M,h,E,w]);return P((function(e,t){return Object(v.jsxs)(f.animated.div,{className:"Navbar",style:e,children:[Object(v.jsx)("div",{className:"navbar-left",onClick:J.bind(n),children:r[z]}),Object(v.jsx)("div",{className:"navbar-middle",children:Object(v.jsxs)(p.b,{to:"/",onClick:E.bind(n,!1),children:["Covid19",Object(v.jsx)("span",{children:"India"})]})}),Object(v.jsxs)("div",Object(c.a)(Object(c.a)({className:"navbar-right",onMouseEnter:B},T.width<769&&{onClick:E.bind(n,!M)}),{},{children:[T.width<769&&Object(v.jsx)("span",{children:L(M?"Close":"Menu")}),T.width>769&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(p.b,{to:"/",children:Object(v.jsx)("span",{children:Object(v.jsx)(l.a,Object(c.a)({},y("/")))})}),Object(v.jsx)(p.b,{to:"/blog",children:Object(v.jsx)("span",{children:Object(v.jsx)(d.a,Object(c.a)({},y("/blog")))})}),Object(v.jsx)(p.b,{to:"/about",children:Object(v.jsx)("span",{children:Object(v.jsx)(b.a,Object(c.a)({},y("/about")))})}),Object(v.jsx)(p.b,{to:"/resources",children:Object(v.jsx)("span",{children:Object(v.jsx)(u.a,Object(c.a)({},y("/resources")))})}),Object(v.jsx)("span",{children:Object(v.jsx)(N,{darkMode:j})})]})]})),A((function(e,t){return t&&Object(v.jsx)(f.animated.div,{style:e,children:Object(v.jsx)(g,{pages:i,setExpand:E,darkMode:j,windowSize:T})})}))]})}))},k=function(e,t){return{className:"".concat(window.location.pathname===e?"focused":"")}},y=function(e){return{style:{stroke:window.location.pathname===e?"#4c75f2":""}}},N=function(e){var t=e.darkMode;return Object(v.jsx)("div",{className:"SunMoon",onClick:t.toggle,children:Object(v.jsx)("div",{children:t.value?Object(v.jsx)(j.a,{color:"#ffc107"}):Object(v.jsx)(h.a,{})})})},S=n(20),L=n(5),z=n(193),I=Object(s.lazy)((function(){return Object(S.l)((function(){return Promise.all([n.e(1),n.e(4),n.e(3),n.e(7),n.e(17)]).then(n.bind(null,723))}))})),C=Object(s.lazy)((function(){return Object(S.l)((function(){return Promise.all([n.e(3),n.e(25)]).then(n.bind(null,683))}))})),M=Object(s.lazy)((function(){return Object(S.l)((function(){return Promise.all([n.e(4),n.e(3),n.e(24)]).then(n.bind(null,724))}))})),E=Object(s.lazy)((function(){return Object(S.l)((function(){return Promise.all([n.e(4),n.e(44)]).then(n.bind(null,684))}))})),T=Object(s.lazy)((function(){return Object(S.l)((function(){return n.e(26).then(n.bind(null,725))}))}));t.default=function(){var e=Object(z.a)(!1),t=Object(s.useState)(!1),n=Object(a.a)(t,2),c=n[0],o=n[1],r=Object(L.h)(),l=[{pageLink:"/",view:I,displayName:"Home",showInNavbar:!0},{pageLink:"/blog",view:i,displayName:"Blog",showInNavbar:!0},{pageLink:"/about",view:C,displayName:"About",showInNavbar:!0},{pageLink:"/resources",view:E,displayName:"Resources",showInNavbar:!0},{pageLink:"/state/:stateCode",view:M,displayName:"State",showInNavbar:!1}];return Object(s.useEffect)((function(){c&&(document.documentElement.scrollTo({top:0,behavior:"smooth"}),document.body.scrollTo({top:0,behavior:"smooth"}))}),[c]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(s.Suspense,{fallback:Object(v.jsx)("div",{}),children:Object(v.jsx)(T,{showLanguageSwitcher:c,setShowLanguageSwitcher:o})}),Object(v.jsx)(w,{pages:l,darkMode:e,showLanguageSwitcher:c,setShowLanguageSwitcher:o}),Object(v.jsx)(s.Suspense,{fallback:Object(v.jsx)("div",{}),children:Object(v.jsxs)(L.d,{location:r,children:[l.map((function(e,t){return Object(v.jsx)(L.b,{exact:!0,path:e.pageLink,render:function(t){t.match;return Object(v.jsx)(e.view,{})}},t)})),Object(v.jsx)(L.a,{to:"/"})]})})]})}}}]);
//# sourceMappingURL=21.f132f120.chunk.js.map