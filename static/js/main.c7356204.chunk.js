(this["webpackJsonpbicycle-map"]=this["webpackJsonpbicycle-map"]||[]).push([[0],{171:function(e,t,r){},172:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(33),a=r.n(i),c=r(12),s=r(30),l=r(72),b=r(5),j="SEARCH_LOCATION",p="SET_MAP_COMPONENT",d="TOGGLE_MODAL",u=function(e){return{type:j,payload:e}},x={position:[25.046891,121.516602],map:null,modal:{isOpen:!1,content:null}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case j:return Object(b.a)(Object(b.a)({},e),{},{position:n});case p:return Object(b.a)(Object(b.a)({},e),{},{map:n});case d:return Object(b.a)(Object(b.a)({},e),{},{modal:n});default:return e}},m="GET_STATIONS",f={station:[]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;return r===m?Object(b.a)(Object(b.a)({},e),{},{station:n}):e},g=Object(l.a)({map:h,station:O});var y=r(73),w=r(7),v=r(49),C=r(20),S=r(18),A=r.p+"static/media/sprite.8ecf2683.svg",k=r(3),z=["name","color","size"],I=function(e){var t=e.name,r=e.color,n=e.size,o=Object(C.a)(e,z);return Object(k.jsx)(S.a,Object(b.a)(Object(b.a)({color:r,boxSize:n},o),{},{children:Object(k.jsx)("use",{xlinkHref:A+"#".concat(t),fill:"currentColor",style:{width:"100%",height:"100%"}})}))},E=r(87),B=function(){return Object(k.jsxs)(v.c,{bg:"primary.400",px:"4.5rem",py:4,children:[Object(k.jsx)(I,{name:"logo",viewBox:"0 0 214 32",width:"56",minHeight:"10"}),Object(k.jsx)(v.e,{}),Object(k.jsx)(v.f,{align:"center",direction:"row",spacing:4,children:[{name:"\u627e\u55ae\u8eca",path:"/home",icon:"bike",size:"6"},{name:"\u627e\u8def\u7dda",path:"/road",icon:"road",size:"5"},{name:"\u627e\u666f\u9ede",path:"/travel",icon:"travel",size:"5"}].map((function(e){return Object(k.jsx)(y.b,{to:e.path,children:Object(k.jsx)(E.a,{color:"primary.400",bg:"white",leftIcon:Object(k.jsx)(I,{name:e.icon,color:"primary.400",width:e.size,minHeight:e.size}),_hover:{bg:"primary.100",borderColor:"primary.300"},_active:{bg:"white",borderColor:"primary.400"},_focus:{boxShadow:"primary"},children:e.name})},e.name)}))})]})},_=r(88),F=r(100),T=Object(s.b)((function(e){var t=e.map;return{isOpen:t.modal.isOpen,content:t.modal.content}}))((function(e){var t=e.isOpen,r=e.content;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(F.a,{isOpen:t,size:"sm",isCentered:!0,children:[Object(k.jsx)(F.d,{}),Object(k.jsx)(F.c,{children:Object(k.jsx)(F.b,{fontSize:"2xl",textAlign:"center",color:"primary.500",children:r})})]})})})),D=Object(s.b)((function(e){return{modal:e.map.modal}}),(function(e){return{setPosition:function(t){return e(u(t))},toggleModal:function(t,r){return e(function(e){var t=e.isOpen,r=e.content;return{type:d,payload:{isOpen:t,content:r}}}({isOpen:t,content:r}))}}}))((function(e){var t=e.setPosition,r=e.modal,n=e.toggleModal;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(_.a,{label:"\u9ede\u64ca\u5b9a\u4f4d",hasArrow:!0,bg:"accent.400",mt:1,children:Object(k.jsx)(E.b,{"arial-label":"\u9ede\u64ca\u5b9a\u4f4d",isRound:!0,size:"lg",bg:"primary.400",icon:Object(k.jsx)(I,{name:"crosshairs",size:"6",color:"white"}),_hover:{bg:"primary.500"},_disabled:{bg:"gray.300"},_active:{bg:"primary.400",borderColor:"primary.500",borderWidth:"3px"},_focus:{bg:"primary.400",borderColor:"primary.500",borderWidth:"3px"},boxShadow:"base",onClick:function(){navigator.geolocation?(n(!0,"\u5b9a\u4f4d\u4e2d..."),navigator.geolocation.getCurrentPosition((function(e){n(!1,null),t([e.coords.latitude,e.coords.longitude])}),(function(){n(!0,"\u7121\u6cd5\u6aa2\u7d22\u60a8\u7684\u4f4d\u7f6e\u3002")}))):n(!0,"\u60a8\u7684\u700f\u89bd\u5668\u4e0d\u652f\u63f4\u5730\u7406\u5b9a\u4f4d\u529f\u80fd")}})}),Object(k.jsx)(T,{isOpen:r.isOpen,content:r.content})]})})),W=function(e){var t=e.buttons;return Object(k.jsx)(v.i,{display:"inline-flex",boxShadow:"base",bg:"white",px:3,py:2,rounded:"full",children:t.map((function(e){return Object(k.jsx)(v.j,{children:Object(k.jsx)(E.a,{bg:"white",color:"primary.400",rounded:"full",isActive:e.isActive,_active:{bg:"primary.400",color:"white"},_focus:{boxShadow:"primary"},leftIcon:Object(k.jsx)(I,{name:e.icon,color:"currentColor",size:5}),children:Object(k.jsx)(v.g,{fontSize:"lg",children:e.name})})},e.name)}))})},R=r(182),H=r(183),P=r(185),M=r(180),N=r(181),U=["position","icon","isPop"],L=function(e){var t=e.position,r=e.icon,n=e.isPop,o=Object(C.a)(e,U);return Object(k.jsx)(M.a,Object(b.a)(Object(b.a)({position:t,icon:r},o),{},{children:n&&Object(k.jsx)(N.a,{})}))},X=r(13),Y=r.n(X),G=r.p+"static/media/user-position.3b10a2ee.svg",J=r.p+"static/media/State-Default.18545cfa.svg",$=r.p+"static/media/State-Limited.9d5ba345.svg",V=r.p+"static/media/State-Disabled.645d2580.svg";Y.a.DefaultIcon=Y.a.Icon.extend(q(J,"default")),Y.a.LimitedIcon=Y.a.Icon.extend(q($,"limited"));var Z=new Y.a.icon({iconUrl:G,iconAnchor:null,iconSize:[75,75]});new Y.a.icon({iconUrl:V});function q(e,t){return{options:{iconUrl:e},createIcon:function(){var e=document.createElement("div"),r=function(e){var t=document.createElement("img");return t.setAttribute("src",e),t}(this.options.iconUrl),n=function(e){var t=document.createElement("div");return t.setAttribute("class","number"),t.innerHTML=e||"",t}(this.options.number||"");return e.appendChild(r),e.appendChild(n),function(e,t,r){e.setAttribute("class",t),e.style.position="relative";var n=e.querySelector(".number");if(n.style.position="absolute",n.style.top="12px",n.style.left="50%",n.style.transform="translateX(-50%)",!r)return;n.style.fontSize="22px",n.style.fontWeight="500",n.style.fontFamily="var(--chakra-fonts-body)";var o={default:"var(--chakra-colors-primary-400)",limited:"var(--chakra-colors-warn-400)"};n.style.color=o[r]}(e,"icon",t),e}}}r(148);var K=Object(s.b)((function(e){var t=e.map;return{position:t.position,map:t.map}}),(function(e){return{setPosition:function(t){e(u(t))},setMap:function(t){e({type:p,payload:t})}}}))((function(e){var t=e.position,r=e.map,o=e.setMap;return Object(n.useEffect)((function(){r&&r.flyTo(t)}),[r,t]),Object(k.jsx)(v.b,{w:"full",h:"full",children:Object(k.jsxs)(R.a,{center:t,zoom:16,zoomControl:!1,style:{height:"100%"},whenCreated:o,children:[Object(k.jsx)(H.a,{position:"topright"}),Object(k.jsx)(P.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors \xa9 <a href="https://carto.com/attributions">CARTO</a>',url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"}),Object(k.jsx)(L,{position:t,icon:Z,title:"\u76ee\u524d\u7684\u4f4d\u7f6e",alt:"\u76ee\u524d\u7684\u4f4d\u7f6e"})]})})})),Q=r(16),ee=r(39),te=r.n(ee),re=r(59),ne=r(106),oe={baseUrl:"https://ptx.transportdata.tw/MOTC/v2",headers:function(){return Object(b.a)({Accept:"application/json","Content-Type":"application/json"},function(){var e=(new Date).toGMTString(),t=new ne.a("SHA-1","TEXT");t.setHMACKey("faAVr2WjNrYgT7HCB67CJcEg6Xk","TEXT"),t.update("x-date: "+e);var r=t.getHMAC("B64");return{Authorization:'hmac username="'.concat("28f6c4868b004303b2a745c51256835a",'", algorithm="hmac-sha1", headers="x-date", signature="').concat(r,'"'),"X-Date":e}}())}},ie=oe.baseUrl,ae=oe.headers;function ce(e,t){var r=new URL("".concat(ie).concat(e));return r.searchParams.append("$format","JSON"),t&&Object.keys(t).forEach((function(e){return r.searchParams.append(e,t[e])})),fetch(r,{method:"GET",headers:ae()}).then((function(e){return e.json()}))}var se=r(184),le={$select:"StationUID,StationName,StationPosition,StationAddress"},be={$select:"StationUID,ServiceStatus,AvailableRentBikes,AvailableReturnBikes"};function je(e){return ce("/Bike/Station/Nearby",Object(b.a)(Object(b.a)({},le),e))}function pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ce("/Bike/Availability/Nearby",Object(b.a)(Object(b.a)({},be),e))}function de(){return(de=Object(re.a)(te.a.mark((function e(t){var r,n,o,i;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([je(t),pe(t)]);case 2:return r=e.sent,n=Object(Q.a)(r,2),o=n[0],i=n[1],e.prev=6,e.abrupt("return",o.map((function(e,t){return Object(b.a)(Object(b.a)(Object(b.a)({},e),{},{StationName:e.StationName.Zh_tw.replace(/(YouBike1.0_|YouBike2.0_)/g,""),StationAddress:e.StationAddress.Zh_tw},(i||[])[t]),{},{UpdateTime:ue(new Date(e.UpdateTime))})})));case 10:return e.prev=10,e.t0=e.catch(6),console.log(e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[6,10]])})))).apply(this,arguments)}function ue(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"HH:mm";return Object(se.a)(e,t)}var xe=r(105),he=r(97),me=r(101),fe=function(){return Object(k.jsxs)(v.b,{display:"flex",alignItems:"center",px:3.5,py:7,w:"full",children:[Object(k.jsxs)(he.b,{mr:2,children:[Object(k.jsx)(he.a,{rounded:"lg",bg:"gray.200",placeholder:"\u641c\u5c0b\u8def\u7dda\u6216\u9130\u8fd1\u5730\u9ede",size:"md",focusBorderColor:"primary.300",_hover:{borderColor:"primary.200"}}),Object(k.jsx)(he.c,{mr:1.5,children:Object(k.jsx)(I,{name:"search",size:5,color:"gray.500"})})]}),Object(k.jsxs)(me.a,{children:[Object(k.jsx)(me.b,{as:E.a,variant:"outline",color:"primary.400",borderColor:"primary.400",bg:"white",fontWeight:"bold",w:28,leftIcon:Object(k.jsx)(I,{name:"sort-down",size:5,color:"primary.400"}),_hover:{bg:"primary.100"},_active:{bg:"primary.100"},_focus:{boxShadow:"primary"},children:"\u6392\u5e8f"}),Object(k.jsx)(me.e,{minW:"auto",borderColor:"primary.300",px:4,children:Object(k.jsxs)(me.f,{defaultValue:"nearby",type:"radio",children:[Object(k.jsx)(me.d,{color:"primary.400",px:"0",py:1,fontWeight:"500",value:"nearby",_active:{},children:"\u8ddd\u96e2\u8f03\u8fd1"}),Object(k.jsx)(me.c,{my:1,borderColor:"gray.300"}),Object(k.jsx)(me.d,{color:"primary.400",px:"0",py:1,fontWeight:"500",value:"borrow",_active:{},children:"\u53ef\u501f\u8eca\u6578"}),Object(k.jsx)(me.c,{my:1,borderColor:"gray.300"}),Object(k.jsx)(me.d,{color:"primary.400",px:"0",py:1,fontWeight:"500",value:"return",_active:{},children:"\u53ef\u9084\u8eca\u6578"})]})})]})]})},Oe=r(98),ge=r(99),ye={bike:"\u53ef\u79df\u501f",parking:"\u53ef\u505c\u8eca"};var we=function(e){var t=e.icon,r=e.count,n=function(e){return e>5?{bg:"primary.100",color:"primary.500"}:e>0?{bg:"warn.100",color:"warn.600"}:{bg:"gray.200",color:"gray.400"}}(r),o=n.bg,i=n.color;return Object(k.jsxs)(v.h,{w:"full",p:2,bg:o,color:i,rounded:"lg",spacing:1,fontWeight:"500",children:[Object(k.jsxs)(v.b,{display:"flex",pt:1,children:[Object(k.jsx)(I,{name:t,color:i,mr:"1"}),Object(k.jsx)(v.g,{lineHeight:"1",children:ye[t]})]}),Object(k.jsx)(v.g,{fontSize:"3xl",lineHeight:"32px",children:r})]})},ve=function(e){var t=function(e){var t="",r="",n="";switch(e){case"all":t="\u53ef\u501f\u53ef\u9084",r="accent.500",n="accent.300";break;case"onlyRent":t="\u53ea\u53ef\u501f\u8eca",r="warn.400",n="accent.300";break;case"onlyReturn":t="\u53ea\u53ef\u505c\u8eca",r="warn.400",n="accent.300";break;case"maintain":t="\u7ad9\u9ede\u65bd\u5de5\u4e2d",r="gray.400",n="gray.300"}return{label:t,color:r,borderColor:n}}(e.status),r=t.label,n=t.color,o=t.borderColor;return Object(k.jsx)(Oe.a,{color:n,borderWidth:"1px",fontSize:"md",borderColor:o,bg:"white",px:3,py:1.5,children:r})},Ce=function(e){var t=e.vehicle;return Object(k.jsx)(v.h,{w:"full",alignItems:"flex-start",pb:5,spacing:3,borderBottom:"1px",borderColor:"gray.300",children:null!=t?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.g,{color:"primary.500",w:"full",fontSize:"22px",fontWeight:"500",lineHeight:"27px",isTruncated:!0,children:t.StationName}),Object(k.jsxs)(v.d,{w:"full",spacing:6,children:[Object(k.jsx)(we,{icon:"bike",count:t.AvailableRentBikes}),Object(k.jsx)(we,{icon:"parking",count:t.AvailableReturnBikes})]}),Object(k.jsxs)(v.d,{w:"full",justifyContent:"space-between",children:[Object(k.jsx)(ve,{status:0===t.ServiceStatus||2===t.ServiceStatus?"maintain":!t.AvailableRentBikes&&t.AvailableReturnBikes>0?"onlyReturn":!t.AvailableReturnBikes&&t.AvailableRentBikes>0?"onlyRent":"all"}),Object(k.jsxs)(v.b,{color:"gray.500",fontWeight:"500",children:[Object(k.jsx)(I,{name:"map",color:"gray.500",mr:"1",mt:"-2px"}),"\u8ddd\u96e2",t.distance,"\u516c\u5c3a"]})]})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(ge.a,{startColor:"gray.300",endColor:"gray.200",height:"27px",w:"full"}),Object(k.jsxs)(v.d,{w:"full",spacing:6,children:[Object(k.jsx)(ge.a,{startColor:"gray.300",endColor:"gray.200",rounded:"lg",height:"72px",w:"full"}),Object(k.jsx)(ge.a,{startColor:"gray.300",endColor:"gray.200",rounded:"lg",height:"72px",w:"full"})]}),Object(k.jsxs)(v.d,{w:"full",spacing:6,justifyContent:"space-between",children:[Object(k.jsx)(ge.a,{startColor:"gray.300",endColor:"gray.200",h:4,w:"full"}),Object(k.jsx)(ge.a,{startColor:"gray.300",endColor:"gray.200",h:4,w:"full"})]})]})})},Se=Object(s.b)((function(e){var t=e.map,r=e.station;return{position:t.position,station:r.station}}),(function(e){return{getStations:function(t){return e({type:m,payload:t})}}}))((function(e){var t=e.position,r=e.station,o=e.getStations,i=Object(n.useRef)(null),a=Object(n.useCallback)((function(){if(t.length){var e=Object(Q.a)(t,2),r=e[0],n=e[1];(function(e){return de.apply(this,arguments)})({$spatialFilter:"nearby(".concat(r,", ").concat(n,", 1000)")}).then((function(e){i.current.scrollTo(0,0);var t=e.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{distance:Object(xe.getDistance)({latitude:r,longitude:n},{latitude:e.StationPosition.PositionLat,longitude:e.StationPosition.PositionLon})})}));o(t)}))}}),[t,o]);return Object(n.useEffect)((function(){a()}),[a]),Object(k.jsx)(v.a,{w:["425px"],ratio:9/17.5,children:Object(k.jsxs)(v.c,{flexDirection:"column",justify:"flex-start !important",alignItems:"stretch !important",w:["425px"],px:3.5,pb:7,bg:"white",boxShadow:"base",rounded:"lg",children:[Object(k.jsx)(fe,{}),Object(k.jsxs)(v.h,{ref:i,flex:"1",h:"full",overflowY:"auto",px:3.5,spacing:5,sx:{"&::-webkit-scrollbar":{width:"6px"},"&::-webkit-scrollbar-thumb":{bg:"gray.400",borderRadius:"1rem"}},children:[!r.length&&[0,1,2,3].map((function(e){return Object(k.jsx)(Ce,{},e)})),r.map((function(e){return Object(k.jsx)(Ce,{vehicle:e},e.StationUID)}))]})]})})})),Ae=function(e){e.road;return Object(k.jsx)(v.h,{w:"full",alignItems:"flex-start",pb:5,spacing:3,borderBottom:"1px",borderColor:"gray.300",children:Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(v.b,{display:"flex",alignItems:"center",w:"full",spacing:6,justifyContent:"space-between",children:[Object(k.jsx)(v.g,{color:"primary.500",flex:"1",fontSize:"22px",fontWeight:"500",lineHeight:"27px",isTruncated:!0,children:"\u6211\u662f\u8def\u7dda\u6211\u662f\u8def\u7dda\u6211\u662f\u8def\u7dda\u6211\u662f\u8def\u7dda\u6211\u662f\u8def\u7dda"}),Object(k.jsxs)(v.b,{color:"gray.500",fontWeight:"500",children:[Object(k.jsx)(I,{name:"map",color:"gray.500",mr:"1",mt:"-2px"}),"\u53f0\u5317\u5e02"]})]}),Object(k.jsxs)(v.h,{w:"full",spacing:3,position:"relative",children:[Object(k.jsxs)(v.d,{w:"full",fontWeight:"500",spacing:2,children:[Object(k.jsx)(v.b,{px:3,py:2,rounded:"lg",bg:"primary.100",color:"primary.500",children:"\u8d77"}),Object(k.jsx)(v.b,{px:3,py:2,rounded:"lg",bg:"primary.100",color:"primary.500",flex:"1",children:"\u627f\u5fb7\u8def5\u6bb5"})]}),Object(k.jsxs)(v.d,{w:"full",fontWeight:"500",spacing:2,children:[Object(k.jsx)(v.b,{px:3,py:2,rounded:"lg",bg:"primary.100",color:"primary.500",children:"\u8fc4"}),Object(k.jsx)(v.b,{px:3,py:2,rounded:"lg",bg:"primary.100",color:"primary.500",flex:"1",children:"\u627f\u5fb7\u8def5\u6bb5"})]}),Object(k.jsx)(v.b,{position:"absolute",h:"50%",left:"-6px",top:"50%",w:"1px",bg:"primary.500",mt:"0 !important",transform:"translateY(-50%)",sx:{"&:before":{content:'""',display:"block",width:"4px",height:"4px",borderWidth:"1px",borderColor:"primary.500",borderRadius:"50%",position:"absolute",top:"-4px",left:"-1.5px",transform:"translateX(-0.5px)"},"&:after":{content:'""',display:"block",width:"4px",height:"4px",borderWidth:"1px",borderColor:"primary.500",borderRadius:"50%",position:"absolute",top:"100%",left:"-1.5px",transform:"translateX(-0.5px)"}}})]}),Object(k.jsxs)(v.d,{display:"flex",alignItems:"center",justifyContent:"flex-end",w:"full",color:"gray.500",mt:"8px !important",spacing:1.5,children:[Object(k.jsx)(I,{name:"road",color:"gray.500",mt:"1px"}),Object(k.jsx)(v.g,{fontWeight:"500",children:"\u7e3d\u95773.4\u516c\u91cc"})]})]})})},ke=function(e){e.road;return Object(k.jsx)(v.a,{w:["425px"],ratio:9/17.5,children:Object(k.jsxs)(v.c,{flexDirection:"column",justify:"flex-start !important",alignItems:"stretch !important",w:["425px"],px:3.5,pb:7,bg:"white",boxShadow:"base",rounded:"lg",children:[Object(k.jsx)(fe,{}),Object(k.jsxs)(v.h,{flex:"1",h:"full",overflowY:"auto",px:3.5,spacing:5,sx:{"&::-webkit-scrollbar":{width:"6px"},"&::-webkit-scrollbar-thumb":{bg:"gray.400",borderRadius:"1rem"}},children:[Object(k.jsx)(Ae,{}),[1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(k.jsx)(Ae,{},e)}))]})]})})},ze=function(e){e.spot;return Object(k.jsx)(v.h,{w:"full",alignItems:"flex-start",pb:5,spacing:3,borderBottom:"1px",borderColor:"gray.300",children:Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.b,{w:"full",minH:"155px",rounded:"lg",border:"1px",borderColor:"primary.400",display:"flex",justifyContent:"center",alignItems:"center",children:Object(k.jsx)(I,{name:"logo2",viewBox:"0 0 214 32",width:"246px",minHeight:"9"})}),Object(k.jsxs)(v.b,{display:"flex",alignItems:"center",w:"full",spacing:6,justifyContent:"space-between",children:[Object(k.jsx)(v.g,{color:"primary.500",flex:"1",fontSize:"22px",fontWeight:"500",lineHeight:"27px",isTruncated:!0,children:"\u6211\u662f\u666f\u9ede\u6211\u662f\u666f\u9ede\u6211\u662f\u666f\u9ede\u6211\u662f\u666f\u9ede\u6211\u662f\u666f\u9ede"}),Object(k.jsxs)(v.b,{color:"gray.400",fontWeight:"500",children:[Object(k.jsx)(I,{name:"map",color:"gray.400",mr:"1",mt:"-2px"}),"\u53f0\u5317\u5e02"]})]}),Object(k.jsxs)(v.b,{display:"flex",w:"full",alignItems:"flex-start",justify:"space-between",children:[Object(k.jsx)(v.d,{flex:"1",spacing:.5,mx:-1,my:-1,flexWrap:"wrap",children:["\u904a\u61a9\u985e","\u90fd\u6703\u516c\u5712\u985e"].map((function(e){return Object(k.jsx)(Oe.a,{mx:.5,my:1,bg:"primary.400",color:"white",px:3,py:2,rounded:"20px",children:e},e)}))}),Object(k.jsx)(I,{name:"web",color:"primary.300",w:7,h:7,p:1,rounded:"full",border:"1px",borderColor:"primary.300",cursor:"pointer"})]})]})})},Ie=function(){return Object(k.jsx)(v.a,{w:["425px"],ratio:9/17.5,children:Object(k.jsxs)(v.c,{flexDirection:"column",justify:"flex-start !important",alignItems:"stretch !important",w:["425px"],px:3.5,pb:7,bg:"white",boxShadow:"base",rounded:"lg",children:[Object(k.jsx)(fe,{}),Object(k.jsxs)(v.h,{flex:"1",h:"full",overflowY:"auto",px:3.5,spacing:5,sx:{"&::-webkit-scrollbar":{width:"6px"},"&::-webkit-scrollbar-thumb":{bg:"gray.400",borderRadius:"1rem"}},children:[Object(k.jsx)(ze,{}),[1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(k.jsx)(ze,{},e)}))]})]})})},Ee=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.b,{w:"max-content",position:"absolute",top:["36px"],left:["32px"],m:"0 auto",zIndex:"999",children:Object(k.jsx)(Se,{})}),Object(k.jsx)(v.b,{w:"max-content",position:"absolute",top:["36px"],left:["477px"],zIndex:"999",children:Object(k.jsxs)(v.d,{spacing:3,children:[Object(k.jsx)(W,{buttons:[{name:"\u627e\u55ae\u8eca",icon:"bike",isActive:!0},{name:"\u627e\u8eca\u4f4d",icon:"parking",isActive:!1}]}),Object(k.jsx)(D,{})]})}),Object(k.jsx)(K,{})]})},Be=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.b,{w:"max-content",position:"absolute",top:["36px"],left:["32px"],m:"0 auto",zIndex:9999,children:Object(k.jsx)(ke,{})}),Object(k.jsx)(v.b,{w:"max-content",position:"absolute",top:["36px"],left:["477px"],zIndex:9999,children:Object(k.jsx)(v.d,{spacing:3,children:Object(k.jsx)(D,{})})}),Object(k.jsx)(K,{})]})},_e=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.b,{w:"max-content",position:"absolute",top:["36px"],left:["32px"],m:"0 auto",zIndex:9999,children:Object(k.jsx)(Ie,{})}),Object(k.jsx)(v.b,{w:"max-content",position:"absolute",top:["36px"],left:["477px"],zIndex:9999,children:Object(k.jsxs)(v.d,{spacing:3,children:[Object(k.jsx)(W,{buttons:[{name:"\u627e\u666f\u9ede",icon:"travel",isActive:!0},{name:"\u627e\u9910\u5ef3",icon:"food",isActive:!1}]}),Object(k.jsx)(D,{})]})}),Object(k.jsx)(K,{})]})};r(171);var Fe=function(){return Object(k.jsx)(y.a,{children:Object(k.jsxs)(v.b,{display:"flex",flexDirection:"column",w:"full",h:"full",children:[Object(k.jsx)(B,{}),Object(k.jsx)(v.b,{flex:"1",position:"relative",children:Object(k.jsxs)(w.d,{children:[Object(k.jsx)(w.b,{exact:!0,path:"/home",element:Object(k.jsx)(Ee,{})}),Object(k.jsx)(w.b,{path:"/road",element:Object(k.jsx)(Be,{})}),Object(k.jsx)(w.b,{path:"/travel",element:Object(k.jsx)(_e,{})}),Object(k.jsx)(w.b,{path:"*",element:Object(k.jsx)(w.a,{to:"/home"})})]})})]})})},Te=Object(c.b)({fonts:{body:'"Noto Sans TC", "system-ui", sans-serif'},colors:{primary:{100:"#DFE4CE",200:"#CBD3B0",300:"#A4B375",400:"#738047",500:"#474F2C",600:"#292E19"},accent:{100:"#FAF0E5",200:"#F5DFC6",300:"#EABD8A",400:"#DE994A",500:"#C67A24",600:"#A3651E"},warn:{100:"#F7D4DD",200:"#F1B2C1",300:"#F27594",400:"#E75578",500:"#BC3253",600:"#8C3046"},gray:{100:"#FFFFFF",200:"#EEEEEE",300:"#C5C5C5",400:"#9A9A9A",500:"#767676",600:"#464646"}},shadows:{base:"4px 4px 20px rgba(118, 118, 118, 0.3)",primary:"0 0 1px 2px #A4B375, 0 0 2px 2px #A4B375"}}),De=Object(l.b)(g);a.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(s.a,{store:De,children:Object(k.jsx)(c.a,{theme:Te,children:Object(k.jsx)(Fe,{})})})}),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.c7356204.chunk.js.map