(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[23],{122:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(32),c=(t(92),t(28)),o=t(54),s=t.n(o),l=t(134),d=t(143),u=t(23),p=t(133),h={opacity:1,height:"20rem",paddingTop:"7.5rem",paddingBottom:"7.5rem"},m={opacity:0,height:"0rem",paddingTop:"0rem",paddingBottom:"0rem"};var g=i.a.memo((function(e){var a,t=e.showLanguageSwitcher,r=e.setShowLanguageSwitcher,o=Object(d.a)().i18n,g=Object.keys(c).includes(null===o||void 0===o?void 0:o.language)?null===o||void 0===o?void 0:o.language:null===o||void 0===o||null===(a=o.options)||void 0===a?void 0:a.fallbackLng[0],f=Object(u.f)(t,null,{from:m,enter:h,leave:m,config:{mass:1,tension:210,friction:25}}),T=Object(n.useRef)();return Object(p.a)(T,(function(){r(!1)})),f.map((function(e){var a=e.item,t=e.key,n=e.props;return a?i.a.createElement(u.a.div,{key:t,className:"LanguageSwitcher",style:n,ref:T},i.a.createElement("h3",null,"We speak the following languages"),i.a.createElement("div",{className:"languages"},Object.keys(c).map((function(e){return i.a.createElement("div",{key:e,className:s()("language",{"is-highlighted":g===e}),onClick:function(){o&&o.changeLanguage(e)}},i.a.createElement("span",null,c[e]))}))),i.a.createElement("div",{className:"close-button",onClick:function(){r(!1)}},i.a.createElement(l.a,{width:16}))):i.a.createElement(u.a.div,{key:t})}))})),f=t(62),T=t(136),b=t(137),v=t(138),j=t(139),D=t(140),E=t(141),y=t(20),w=t(135),O=t(142),k=t(75);function S(e){e.expand;var a=e.pages,t=e.setExpand,r=e.darkMode,c=e.windowSize,o=Object(n.useRef)(null),s=Object(d.a)().t;return Object(k.a)((function(){Object(f.a)({targets:o.current,translateX:"10.5rem",easing:"easeOutExpo",duration:250})})),i.a.createElement("div",{className:"expand",ref:o,onMouseLeave:function(){c.width>769&&t(!1)}},a.map((function(e,a){return!0===e.showInNavbar?i.a.createElement(y.b,{to:e.pageLink,key:a,onClick:function(){t(!1)}},i.a.createElement("span",N(e.pageLink,e.animationDelayForNavbar),s(e.displayName))):null})),window.innerWidth<768&&i.a.createElement(F,{darkMode:r}),i.a.createElement("div",{className:"expand-bottom fadeInUp",style:{animationDelay:"1s"}},i.a.createElement("h5",null,s("A crowdsourced initiative."))))}var A=function(e){var a,t=e.pages,o=e.darkMode,s=(e.showLanguageSwitcher,e.setShowLanguageSwitcher),l=Object(d.a)(),p=l.i18n,h=l.t,m=Object.keys(c).includes(null===p||void 0===p?void 0:p.language)?null===p||void 0===p?void 0:p.language:null===p||void 0===p||null===(a=p.options)||void 0===a?void 0:a.fallbackLng[0],g=Object(n.useState)(!1),f=Object(r.a)(g,2),D=f[0],E=f[1];Object(w.a)(D);var k=Object(O.a)(),A=Object(u.c)((function(){return{opacity:0}})),N=Object(r.a)(A,3),_=N[0],M=N[1],C=N[2];return M({opacity:1}),C(),i.a.createElement(u.a.div,{className:"Navbar",style:_},i.a.createElement("div",{className:"navbar-left",onClick:function(){s((function(e){return!e}))}},c[m]),i.a.createElement("div",{className:"navbar-middle"},i.a.createElement(y.b,{to:"/",onClick:function(){E(!1)}},"Covid19",i.a.createElement("span",null,"India"))),i.a.createElement("div",{className:"navbar-right",onClick:function(){E(!D)},onMouseEnter:function(){window.innerWidth>769&&E(!0)}},k.width<769&&i.a.createElement("span",null,h(D?"Close":"Menu")),k.width>769&&i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,i.a.createElement(y.b,{to:"/"},i.a.createElement(T.a,L("/")))),i.a.createElement("span",null,i.a.createElement(y.b,{to:"/demographics"},i.a.createElement(b.a,L("/demographics")))),i.a.createElement("span",null,i.a.createElement(y.b,{to:"/essentials"},i.a.createElement(v.a,L("/essentials")))),i.a.createElement("span",null,i.a.createElement(y.b,{to:"/about"},i.a.createElement(j.a,L("/about")))),i.a.createElement("span",null,window.innerWidth>768&&i.a.createElement(F,{darkMode:o})))),D&&i.a.createElement(S,{expand:D,pages:t,setExpand:E,darkMode:o,windowSize:k}))},N=function(e,a){return{className:"fadeInUp ".concat(window.location.pathname===e?"focused":""),style:{animationDelay:"".concat(a,"s")}}},L=function(e){return{style:{stroke:window.location.pathname===e?"#4c75f2":""}}},F=function(e){var a=e.darkMode;return i.a.createElement("div",{className:"SunMoon",onClick:function(){a.toggle()}},i.a.createElement("div",null,a.value?i.a.createElement(D.a,{color:"#ffc107"}):i.a.createElement(E.a,null)))},_=t(10);function M(){var e=Object(_.h)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var C=t(55),P=t(79),R=Object(n.lazy)((function(){return Promise.all([t.e(3),t.e(2),t.e(10)]).then(t.bind(null,383))})),H=Object(n.lazy)((function(){return t.e(5).then(t.bind(null,365))})),I=Object(n.lazy)((function(){return Promise.all([t.e(4),t.e(26),t.e(7)]).then(t.bind(null,384))})),K=Object(n.lazy)((function(){return Promise.all([t.e(1),t.e(3),t.e(17)]).then(t.bind(null,380))})),U=Object(n.lazy)((function(){return Promise.all([t.e(28),t.e(8)]).then(t.bind(null,386))})),W={"@context":"http://schema.org/","@type":"NGO",name:"Coronavirus Outbreak in India: Latest Map and Case Count",alternateName:"COVID-19 Tracker",url:"https://www.covid19india.org/",image:"https://www.covid19india.org/thumbnail.png"};var B=function(){var e=Object(P.a)(!1),a=Object(n.useState)(!1),t=Object(r.a)(a,2),c=t[0],o=t[1],s=[{pageLink:"/",view:R,displayName:"Home",showInNavbar:!0},{pageLink:"/demographics",view:I,displayName:"Demographics",showInNavbar:!0},{pageLink:"/essentials",view:U,displayName:"Essentials",showInNavbar:!0},{pageLink:"/about",view:H,displayName:"About",showInNavbar:!0},{pageLink:"/state/:stateCode",view:K,displayName:"State",showInNavbar:!1}];return i.a.createElement("div",{className:"App"},i.a.createElement(C.a,null,i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(W))),i.a.createElement(g,{showLanguageSwitcher:c,setShowLanguageSwitcher:o}),i.a.createElement(n.Suspense,{fallback:i.a.createElement("div",null)},i.a.createElement(y.a,null,i.a.createElement(M,null),i.a.createElement(A,Object.assign({pages:s},{darkMode:e},{showLanguageSwitcher:c,setShowLanguageSwitcher:o})),i.a.createElement(_.b,{render:function(e){var a=e.location;return i.a.createElement(i.a.Fragment,null,i.a.createElement(_.d,{location:a},s.map((function(e,a){return i.a.createElement(_.b,{exact:!0,path:e.pageLink,render:function(a){a.match;return i.a.createElement(e.view,null)},key:a})})),i.a.createElement(_.a,{to:"/"})))}}))))},J=t(48),G=t(31),x=t(81),z=t(82),Y=t(38);G.a.use(z.a).use(x.a).use(Y.e).init({debug:Object(J.k)()&&!1,keySeparator:!1,returnEmptyString:!1,fallbackLng:"english",load:"languageOnly",backend:{loadPath:"https://api.covid19india.org/locales/locale_{{lng}}.json",addPath:"http://localhost:9999/"},saveMissing:Object(J.k)()&&!1,interpolation:{escapeValue:!1}});G.a;var V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var q=t(57);t.n(q).a.render(i.a.createElement(n.Suspense,{fallback:i.a.createElement("div",null)},i.a.createElement(B,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");V?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Z(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Z(a,e)}))}}()},28:function(e){e.exports=JSON.parse('{"english":"English","hindi":"\u0939\u093f\u0902\u0926\u0940","bengali":"\u09ac\u09be\u0982\u09b2\u09be","gujarati":"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0","kannada":"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1","malayalam":"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02","marathi":"\u092e\u0930\u093e\u0920\u0940","odiya":"\u0b13\u0b21\u0b3f\u0b06","punjabi":"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40","tamil":"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd","telugu":"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"}')},33:function(e,a,t){"use strict";t.d(a,"n",(function(){return s})),t.d(a,"i",(function(){return l})),t.d(a,"w",(function(){return d})),t.d(a,"b",(function(){return u})),t.d(a,"l",(function(){return p})),t.d(a,"m",(function(){return h})),t.d(a,"x",(function(){return m})),t.d(a,"d",(function(){return g})),t.d(a,"a",(function(){return f})),t.d(a,"u",(function(){return T})),t.d(a,"v",(function(){return b})),t.d(a,"h",(function(){return v})),t.d(a,"k",(function(){return j})),t.d(a,"j",(function(){return D})),t.d(a,"y",(function(){return E})),t.d(a,"g",(function(){return w})),t.d(a,"f",(function(){return O})),t.d(a,"r",(function(){return k})),t.d(a,"p",(function(){return N})),t.d(a,"q",(function(){return L})),t.d(a,"s",(function(){return F})),t.d(a,"t",(function(){return _})),t.d(a,"o",(function(){return M})),t.d(a,"e",(function(){return C})),t.d(a,"c",(function(){return P}));var n=t(124),i=t(125),r=t(126),c=t(127),o=t(128),s=["confirmed","active","recovered","deceased"],l=([].concat(s,["tested"]),[].concat(s,["tested"])),d=[].concat(s,["tested"]),u=300,p=20,h=5,m="Unknown",g="T00:00:00+05:30",f={confirmed:"#ff073a",active:"#007bff",recovered:"#28a745",deceased:"#6c757d",tested:"#4b1eaa"},T={total:"Cumulative",delta:"Daily"},b={BEGINNING:"Beginning",MONTH:"1 Month",TWO_WEEKS:"2 Weeks"},v={TOTAL:"Total",PER_MILLION:"Per million",HOTSPOTS:"Hotspots"},j={STATES:0,DISTRICTS:1},D={COUNTRY:0,STATE:1},E={Red:"#d73027",Orange:"#fee08b",Green:"#66bd63"},y="/mini_maps",w={AP:{geoDataFile:"".concat(y,"/andhrapradesh.json"),mapType:D.STATE,graphObjectDistricts:"andhrapradesh_district"},AR:{geoDataFile:"".concat(y,"/arunachalpradesh.json"),mapType:D.STATE,graphObjectDistricts:"arunachalpradesh_district"},AS:{geoDataFile:"".concat(y,"/assam.json"),mapType:D.STATE,graphObjectDistricts:"assam_district"},BR:{geoDataFile:"".concat(y,"/bihar.json"),mapType:D.STATE,graphObjectDistricts:"bihar_district"},CT:{name:"Chhattisgarh",geoDataFile:"".concat(y,"/chhattisgarh.json"),mapType:D.STATE,graphObjectDistricts:"chhattisgarh_district"},GA:{geoDataFile:"".concat(y,"/goa.json"),mapType:D.STATE,graphObjectDistricts:"goa_district"},GJ:{geoDataFile:"".concat(y,"/gujarat.json"),mapType:D.STATE,graphObjectDistricts:"gujarat_district"},HR:{geoDataFile:"".concat(y,"/haryana.json"),mapType:D.STATE,graphObjectDistricts:"haryana_district"},HP:{geoDataFile:"".concat(y,"/himachalpradesh.json"),mapType:D.STATE,graphObjectDistricts:"himachalpradesh_district"},JK:{geoDataFile:"".concat(y,"/jammukashmir.json"),mapType:D.STATE,graphObjectDistricts:"jammukashmir_district"},JH:{geoDataFile:"".concat(y,"/jharkhand.json"),mapType:D.STATE,graphObjectDistricts:"jharkhand_district"},KA:{geoDataFile:"".concat(y,"/karnataka.json"),mapType:D.STATE,graphObjectDistricts:"karnataka_district"},KL:{geoDataFile:"".concat(y,"/kerala.json"),mapType:D.STATE,graphObjectDistricts:"kerala_district"},MP:{geoDataFile:"".concat(y,"/madhyapradesh.json"),mapType:D.STATE,graphObjectDistricts:"madhyapradesh_district"},MH:{geoDataFile:"".concat(y,"/maharashtra.json"),mapType:D.STATE,graphObjectDistricts:"maharashtra_district"},MN:{geoDataFile:"".concat(y,"/manipur.json"),mapType:D.STATE,graphObjectDistricts:"manipur_district"},ML:{geoDataFile:"".concat(y,"/meghalaya.json"),mapType:D.STATE,graphObjectDistricts:"meghalaya_district"},MZ:{geoDataFile:"".concat(y,"/mizoram.json"),mapType:D.STATE,graphObjectDistricts:"mizoram_district"},NL:{geoDataFile:"".concat(y,"/nagaland.json"),mapType:D.STATE,graphObjectDistricts:"nagaland_district"},OR:{geoDataFile:"".concat(y,"/odisha.json"),mapType:D.STATE,graphObjectDistricts:"odisha_district"},PB:{geoDataFile:"".concat(y,"/punjab.json"),mapType:D.STATE,graphObjectDistricts:"punjab_district"},RJ:{geoDataFile:"".concat(y,"/rajasthan.json"),mapType:D.STATE,graphObjectDistricts:"rajasthan_district"},SK:{geoDataFile:"".concat(y,"/sikkim.json"),mapType:D.STATE,graphObjectDistricts:"sikkim_district"},TN:{geoDataFile:"".concat(y,"/tamilnadu.json"),mapType:D.STATE,graphObjectDistricts:"tamilnadu_district"},TG:{geoDataFile:"".concat(y,"/telangana.json"),mapType:D.STATE,graphObjectDistricts:"telangana_district"},TR:{geoDataFile:"".concat(y,"/tripura.json"),mapType:D.STATE,graphObjectDistricts:"tripura_district"},UT:{geoDataFile:"".concat(y,"/uttarakhand.json"),mapType:D.STATE,graphObjectDistricts:"uttarakhand_district"},UP:{geoDataFile:"".concat(y,"/uttarpradesh.json"),mapType:D.STATE,graphObjectDistricts:"uttarpradesh_district"},WB:{geoDataFile:"".concat(y,"/westbengal.json"),mapType:D.STATE,graphObjectDistricts:"westbengal_district"},AN:{name:"Andaman and Nicobar Islands",geoDataFile:"".concat(y,"/andamannicobarislands.json"),mapType:D.STATE,graphObjectDistricts:"andamannicobarislands_district"},CH:{geoDataFile:"".concat(y,"/chandigarh.json"),mapType:D.STATE,graphObjectDistricts:"chandigarh_district"},DN:{geoDataFile:"".concat(y,"/dnh-and-dd.json"),mapType:D.STATE,graphObjectDistricts:"dnh-and-dd"},DL:{geoDataFile:"".concat(y,"/delhi.json"),mapType:D.STATE,graphObjectDistricts:"delhi_district"},LA:{geoDataFile:"".concat(y,"/ladakh.json"),mapType:D.STATE,graphObjectDistricts:"ladakh_district"},LD:{geoDataFile:"".concat(y,"/lakshadweep.json"),mapType:D.STATE,graphObjectDistricts:"lakshadweep_district"},PY:{geoDataFile:"".concat(y,"/puducherry.json"),mapType:D.STATE,graphObjectDistricts:"puducherry_district"},TT:{geoDataFile:"".concat(y,"/india.json"),mapType:D.COUNTRY,graphObjectStates:"india-states",graphObjectDistricts:"india-districts-2019-734"}},O=50,k={AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chhattisgarh",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UT:"Uttarakhand",UP:"Uttar Pradesh",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",DN:"Dadra and Nagar Haveli and Daman and Diu",DL:"Delhi",JK:"Jammu and Kashmir",LA:"Ladakh",LD:"Lakshadweep",PY:"Puducherry",TT:"Total",UN:"Unassigned"},S=[],A={};Object.keys(k).map((function(e,a){return A[k[e]]=e,S.push({code:e,name:k[e]}),null}));var N=A,L=S,F={AP:52221e3,AR:1504e3,AS:34293e3,BR:11952e4,CT:28724e3,GA:154e4,GJ:67936e3,HR:28672e3,HP:73e5,JH:37403e3,KA:65798e3,KL:35125e3,MP:82232e3,MH:122153e3,MN:3103e3,ML:3224e3,MZ:1192e3,NL:215e4,OR:43671e3,PB:29859e3,RJ:77264e3,SK:664e3,TN:75695e3,TG:3722e4,TR:3992e3,UP:224979e3,UT:11141e3,WB:96906e3,AN:397e3,CH:1179e3,DN:959e3,DL:19814e3,JK:13203e3,LA:293e3,LD:68e3,PY:1504e3,TT:13329e5},_=Object.keys(F).reduce((function(e,a){return e[a]=1e-6*F[a],e}),{}),M={v1:{start:new Date(2020,0,1),end:new Date(2020,3,19)},v2:{start:new Date(2020,3,20),end:new Date(2020,3,26)},v3:{start:new Date(2020,3,27),end:new Date(2020,4,9)},v4:{start:new Date(2020,4,10),end:new Date(2020,4,23)},v5:{start:new Date(2020,4,24),end:new Date(2020,5,4)},v6:{start:new Date(2020,5,5),end:new Date}},C={english:null,hindi:n.a,telugu:i.a,kannada:null,gujarati:r.a,marathi:null,tamil:c.a,bengali:o.a,punjabi:null,malayalam:null,odiya:null},P={"Accommodation and Shelter Homes":"homes",Ambulance:"ambulance","Community Kitchen":"kitchen","CoVID-19 Testing Lab":"lab","Delivery [Vegetables, Fruits, Groceries, Medicines, etc.]":"delivery","Fire Brigade":"fire","Free Food":"food",Fundraisers:"fund","Government Helpline":"helpline","Hospitals and Centers":"hospital","Mental well being and Emotional Support":"well-being",Police:"police","Senior Citizen Support":"seniors",Transportation:"transport","Quarantine Facility":"quarantine",Other:"other","Helpline for Cyclone Amphan":"cyclone amphan"}},48:function(e,a,t){"use strict";t.d(a,"k",(function(){return p})),t.d(a,"g",(function(){return h})),t.d(a,"h",(function(){return m})),t.d(a,"i",(function(){return g})),t.d(a,"e",(function(){return f})),t.d(a,"l",(function(){return T})),t.d(a,"d",(function(){return b})),t.d(a,"f",(function(){return v})),t.d(a,"a",(function(){return j})),t.d(a,"b",(function(){return D})),t.d(a,"j",(function(){return E})),t.d(a,"c",(function(){return y}));var n=t(33),i=t(56),r=t.n(i),c=t(84),o=t(89),s=t(123),l=t(129),d=t(85),u=t(31),p=function(){return!1},h=function(){return Object(d.a)(new Date,"Asia/Kolkata")},m=function(){return Object(c.a)(h(),{representation:"date"})},g=function(){return Object(c.a)(Object(o.a)(h(),1),{representation:"date"})},f=function(e){return Object(s.a)(new Date(e),new Date,{locale:n.e[u.a.language]})},T=function(e){return new Date(e+n.d)},b=function(e,a){"string"===typeof e&&e.match(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g)&&(e+=n.d);var t=Object(d.a)(new Date(e),"Asia/Kolkata");return Object(l.a)(t,a,{locale:n.e[u.a.language]})};var v=function(e){var a=new Intl.NumberFormat("en-IN",{maximumFractionDigits:2});return isNaN(e)?"-":a.format(e)},j=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},D=function(e){if("string"!==typeof e)return"";for(var a=e.toLowerCase().split(" "),t=0;t<a.length;t++)a[t]=j(a[t]);return a.join(" ")},E=function(e,a,t){var n,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("active"===t){var r,c,o,s,l=(null===e||void 0===e||null===(r=e[a])||void 0===r?void 0:r.confirmed)||0,d=(null===e||void 0===e||null===(c=e[a])||void 0===c?void 0:c.deceased)||0,u=(null===e||void 0===e||null===(o=e[a])||void 0===o?void 0:o.recovered)||0,p=(null===e||void 0===e||null===(s=e[a])||void 0===s?void 0:s.migrated)||0;n=l-d-u-p}else{var h;n=(null===e||void 0===e||null===(h=e[a])||void 0===h?void 0:h[t])||0}return n/i},y=function(e){return r()(e).then((function(e){return e.data}))}},90:function(e,a,t){e.exports=t(122)},92:function(e,a,t){}},[[90,24,25]]]);
//# sourceMappingURL=main.17aa9abb.chunk.js.map