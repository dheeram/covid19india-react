(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[14],{145:function(e,t,a){"use strict";var n=a(24),r=a(99),i=a(31),l=a(85),c=a(79),o=a.n(c),s=a(82),d=a.n(s),u=a(89),m=a(0),f=a.n(m),b=a(250),g=function(e){(function(e){return"touches"in e})(e)&&e.touches.length<2&&e.preventDefault&&e.preventDefault()},p=function(e,t){var a=void 0===t?{}:t,n=a.isPreventDefault,r=void 0===n||n,i=a.delay,l=void 0===i?300:i,c=Object(m.useRef)(),o=Object(m.useRef)(),s=Object(m.useCallback)((function(t){r&&t.target&&(t.target.addEventListener("touchend",g,{passive:!1}),o.current=t.target),c.current=setTimeout((function(){return e(t)}),l)}),[e,l]),d=Object(m.useCallback)((function(){c.current&&clearTimeout(c.current),r&&o.current&&o.current.removeEventListener("touchend",g)}),[]);return{onMouseDown:function(e){return s(e)},onTouchStart:function(e){return s(e)},onMouseUp:d,onMouseLeave:d,onTouchEnd:d}};t.a=f.a.memo((function(e){var t=e.handleSort,a=e.sortData,c=e.setSortData,s=e.statistic,d=Object(b.a)().t,m=p((function(){a.sortColumn===s&&c(Object(u.a)(a,(function(e){e.delta=!a.delta})))}),{isPreventDefault:!1});return f.a.createElement("div",Object.assign({className:"cell heading",onClick:t.bind(this,s)},m),a.sortColumn===s&&f.a.createElement("div",{className:o()("sort-icon",Object(n.a)({invert:a.isAscending},"is-".concat(s),a.delta))},f.a.createElement(l.e,{size:10})),f.a.createElement("div",null,d(Object(i.l)(s))),"other"===s&&f.a.createElement(r.a,{data:"Migrated cases or non-COVID deaths"},f.a.createElement(l.j,{size:14})))}),(function(e,t){return!!d()(e.sortData,t.sortData)}))},171:function(e,t,a){var n=a(172),r=["getDistricts"];e.exports=function(){var e=new Worker(a.p+"2607bfc30afc84ea4e21.worker.js",{name:"[hash].worker.js"});return n(e,r),e}},172:function(e,t){e.exports=function(e,t){var a=0,n={};e.addEventListener("message",(function(t){var a=t.data;if("RPC"===a.type)if(a.id){var r=n[a.id];r&&(delete n[a.id],a.error?r[1](Object.assign(Error(a.error.message),a.error)):r[0](a.result))}else{var i=document.createEvent("Event");i.initEvent(a.method,!1,!1),i.data=a.params,e.dispatchEvent(i)}})),t.forEach((function(t){e[t]=function(){var r=arguments;return new Promise((function(i,l){var c=++a;n[c]=[i,l],e.postMessage({type:"RPC",id:c,method:t,params:[].slice.call(r)})}))}}))}},245:function(e,t,a){"use strict";a.r(t);var n=a(94),r=a(78),i=a(145),l=a(0),c=a.n(l),o=a(92),s=function(){var e=window.innerWidth,t=e>769?448:e;return c.a.createElement("div",{className:"TableLoader"},c.a.createElement(o.a,{viewBox:"0 0 ".concat(t," ").concat(135),height:135,width:t,speed:2,animate:!1},c.a.createElement("rect",{x:"0",y:"0",rx:"3",ry:"3",width:t,height:"40"}),c.a.createElement("rect",{x:"0",y:"45",rx:"3",ry:"3",width:t,height:"40"}),c.a.createElement("rect",{x:"0",y:"90",rx:"3",ry:"3",width:t,height:"40"})))},d=a(23),u=a(85),m=a(79),f=a.n(m),b=function(){var e=Object(l.useState)(0),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(l.useEffect)((function(){var e=window.setTimeout((function(){n((function(e){return e===d.s.length-1?0:e+1})),window.clearTimeout(e)}),1e3)}),[a]),c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:f()("is-".concat(d.s[a]))},c.a.createElement(u.e,{size:14})),c.a.createElement("p",null,"Sort by Delta [long press]"))},g=a(97),p=a(31),h=a(82),v=a.n(h),E=a(89),O=a(250),j=a(37),y=a(81),C=a(213),k=a(171),N=a.n(k),x=Object(l.lazy)((function(){return a.e(34).then(a.bind(null,246))}));t.default=c.a.memo((function(e){var t=this,a=e.data,o=e.regionHighlighted,m=e.setRegionHighlighted,h=e.expandTable,v=e.setExpandTable,k=Object(O.a)().t,T=Object(C.a)("sortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),w=Object(r.a)(T,2),S=w[0],D=w[1],P=Object(l.useCallback)((function(e){S.sortColumn!==e?D(Object(E.a)(S,(function(t){t.sortColumn=e}))):D(Object(E.a)(S,(function(e){e.isAscending=!S.isAscending})))}),[S,D]),M=Object(y.e)(3,{from:{transform:"translate3d(0, 10px, 0)",opacity:0},to:{transform:"translate3d(0, 0px, 0)",opacity:1},config:y.b.wobbly}),H=Object(l.useState)(),z=Object(r.a)(H,2),R=z[0],A=z[1],L=Object(l.useState)("States"),U=Object(r.a)(L,2),q=U[0],I=U[1],B=Object(l.useState)(!1),F=Object(r.a)(B,2),G=F[0],J=F[1],K=Object(l.useState)(!1),W=Object(r.a)(K,2),_=W[0],V=W[1],X=Object(l.useCallback)((function(e,t){if("regionName"!==S.sortColumn){var r=d.r[S.sortColumn],i=Object(n.a)(Object(n.a)({},r.options),{},{perMillion:G}),l=Object(p.i)((null===R||void 0===R?void 0:R[e])||a[e],S.delta?"delta":"total",r.key,i)||0,c=Object(p.i)((null===R||void 0===R?void 0:R[t])||a[t],S.delta?"delta":"total",r.key,i)||0;return S.isAscending?l-c:c-l}var o,s,u=(null===R||void 0===R||null===(o=R[e])||void 0===o?void 0:o.districtName)||d.q[e],m=(null===R||void 0===R||null===(s=R[t])||void 0===s?void 0:s.districtName)||d.q[t];return S.isAscending?u.localeCompare(m):m.localeCompare(u)}),[R,G,S.delta,S.isAscending,S.sortColumn,a]),Q=Object(l.useCallback)((function(){I((function(e){return"States"===e?"Districts":"States"}))}),[]);Object(l.useEffect)((function(){var e=N()();e.getDistricts(a),e.addEventListener("message",(function(t){"RPC"!==t.data.type&&(A(t.data),e.terminate())}))}),[q,a]);var Y=Object(y.f)(_,null,{from:g.h,enter:g.g,leave:g.h}),Z=h?d.t:d.s;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"table-top"},c.a.createElement(y.a.div,{className:f()("option-toggle",{"is-highlighted":"Districts"===q}),onClick:Q,style:M[0]},c.a.createElement(u.l,{size:14})),c.a.createElement(y.a.div,{className:f()("million-toggle",{"is-highlighted":G}),onClick:J.bind(this,!G),style:M[0]},c.a.createElement("span",null,"1M")),c.a.createElement(y.a.div,{className:f()("info-toggle",{"is-highlighted":_}),onClick:V.bind(this,!_),style:M[0]},c.a.createElement(u.n,{size:14})),c.a.createElement(y.a.div,{className:f()("expand-table-toggle",{"is-highlighted":h}),style:M[1],onClick:v.bind(this,!h)},c.a.createElement(u.f,{size:16}))),Y.map((function(e){var t=e.item,a=e.key,n=e.props;return t?c.a.createElement(y.a.div,{key:a,className:"table-helper",style:n},c.a.createElement("div",{className:"helper-top"},c.a.createElement("div",{className:"helper-left"},c.a.createElement("div",{className:"info-item"},c.a.createElement("span",null,c.a.createElement(u.l,{size:14})),c.a.createElement("p",null,"Toggle between States/Districts")),c.a.createElement("div",{className:"info-item"},c.a.createElement("h5",null,"1M"),c.a.createElement("p",null,"Per Million of Population")),c.a.createElement("div",{className:"info-item sort"},c.a.createElement("span",null,c.a.createElement(u.e,{size:14})),c.a.createElement("p",null,"Sort by Descending")),c.a.createElement("div",{className:"info-item sort invert"},c.a.createElement("span",null,c.a.createElement(u.e,{size:14})),c.a.createElement("p",null,"Sort by Ascending")),c.a.createElement("div",{className:"info-item sort"},c.a.createElement(b,null)),c.a.createElement("div",{className:"info-item notes"},c.a.createElement("span",null,c.a.createElement(u.j,{size:15})),c.a.createElement("p",null,"Notes")))),c.a.createElement("h5",{className:"text"},k("Compiled from State Govt. numbers"),","," ",c.a.createElement(j.b,{to:"/about"},k("know more"),"!"))):null})),c.a.createElement("div",{className:"table-container"},c.a.createElement("div",{className:"table fadeInUp",style:{gridTemplateColumns:"repeat(".concat(Z.length+1,", auto)")}},c.a.createElement("div",{className:"row heading"},c.a.createElement("div",{className:"cell heading",onClick:P.bind(this,"regionName")},c.a.createElement("div",null,k("States"===q?"State/UT":"District")),"regionName"===S.sortColumn&&c.a.createElement("div",{className:f()("sort-icon",{invert:S.isAscending})},c.a.createElement(u.e,{size:10}))),Z.map((function(e){return c.a.createElement(i.a,Object.assign({key:e},{statistic:e,sortData:S,setSortData:D},{handleSort:P.bind(t,e)}))}))),"States"===q&&Object.keys(a).filter((function(e){return"TT"!==e&&!(e===d.x&&G)})).sort((function(e,t){return X(e,t)})).map((function(e){return c.a.createElement(x,Object.assign({key:e,data:a[e]},{stateCode:e,isPerMillion:G,regionHighlighted:o,setRegionHighlighted:m,expandTable:h}))})),"Districts"===q&&!R&&c.a.createElement(s,null),"Districts"===q&&R&&Object.keys(R).sort((function(e,t){return X(e,t)})).slice(0,d.d).map((function(e){return c.a.createElement(x,Object.assign({key:e,data:R[e],districtName:R[e].districtName},{isPerMillion:G,regionHighlighted:o,setRegionHighlighted:m,expandTable:h}))})),c.a.createElement(x,Object.assign({key:"TT",data:a.TT,stateCode:"TT"},{isPerMillion:G,regionHighlighted:o,setRegionHighlighted:m,expandTable:h})))))}),(function(e,t){var a,n,r,i;return!!v()(null===(a=e.regionHighlighted)||void 0===a?void 0:a.districtName,null===(n=t.regionHighlighted)||void 0===n?void 0:n.districtName)&&(!!v()(null===(r=e.regionHighlighted)||void 0===r?void 0:r.stateCode,null===(i=t.regionHighlighted)||void 0===i?void 0:i.stateCode)&&(!!v()(e.data.TT.total.confirmed,t.data.TT.total.confirmed)&&!!v()(e.expandTable,t.expandTable)))}))},92:function(e,t,a){"use strict";var n=a(0),r=function(){return(r=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,a=e.backgroundColor,i=e.backgroundOpacity,l=e.baseUrl,c=e.children,o=e.foregroundColor,s=e.foregroundOpacity,d=e.gradientRatio,u=e.uniqueKey,m=e.interval,f=e.rtl,b=e.speed,g=e.style,p=e.title,h=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),v=u||Math.random().toString(36).substring(6),E=v+"-diff",O=v+"-animated-diff",j=v+"-aria",y=f?{transform:"scaleX(-1)"}:null,C="0; "+m+"; 1",k=b+"s";return Object(n.createElement)("svg",r({"aria-labelledby":j,role:"img",style:r(r({},g),y)},h),p?Object(n.createElement)("title",{id:j},p):null,Object(n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+l+"#"+E+")",style:{fill:"url("+l+"#"+O+")"}}),Object(n.createElement)("defs",{role:"presentation"},Object(n.createElement)("clipPath",{id:E},c),Object(n.createElement)("linearGradient",{id:O},Object(n.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:i},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:C,dur:k,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:s},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:C,dur:k,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:i},t&&Object(n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:C,dur:k,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var l=function(e){return e.children?Object(n.createElement)(i,r({},e)):Object(n.createElement)(c,r({},e))},c=function(e){return Object(n.createElement)(l,r({viewBox:"0 0 476 124"},e),Object(n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=l},99:function(e,t,a){"use strict";var n=a(78),r=a(97),i=a(0),l=a.n(i),c=a(81);t.a=function(e){var t=e.data,a=e.children,o=Object(i.useState)(!1),s=Object(n.a)(o,2),d=s[0],u=s[1],m=Object(c.f)(d,null,{from:r.j,enter:r.i,leave:r.j,config:{mass:1,tension:210,friction:20}}),f=Object(i.useCallback)((function(e){return e.stopPropagation()}),[]);return l.a.createElement("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:u.bind(void 0,!0),onMouseLeave:u.bind(void 0,!1),onClick:f.bind(void 0)},a,m.map((function(e){var a=e.item,n=e.key,r=e.props;return a?l.a.createElement(c.a.div,{key:n,style:r},l.a.createElement("div",{className:"message"},l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br/>")}}))):l.a.createElement(c.a.div,{key:n})})))}}}]);
//# sourceMappingURL=14.8231a83e.chunk.js.map