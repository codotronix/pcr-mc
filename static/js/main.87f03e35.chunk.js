(this["webpackJsonppcr-mc"]=this["webpackJsonppcr-mc"]||[]).push([[0],{104:function(e,t,n){e.exports=n(135)},113:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=n(39),l=n(30),u=n(76),s=n(13),m={sidebarOpen:!1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case"ui sidebar open":return Object(s.a)(Object(s.a)({},e),{},{sidebarOpen:!0});case"ui sidebar close":return Object(s.a)(Object(s.a)({},e),{},{sidebarOpen:!1});default:return e}},p=Object(l.combineReducers)({ui:d}),b=Object(l.createStore)(p,Object(u.composeWithDevTools)(Object(l.applyMiddleware)())),f=(n(113),n(56)),h=n(11),g=n(29),v=n(161),E=n(88),y=n.n(E),O=n(87),j=n.n(O),k=n(86),w=n.n(k),x=n(85),N=n.n(x),S=n(84),C=n.n(S),M=n(80),T=n.n(M),B=n(81),I=n.n(B),R=n(49),z=n.n(R),D=n(50),X=n.n(D),Y={a:"",b:"http://192.168.0.102:9090"},A=function(){return Y.b},W=A(),L=Object(v.a)({trackpad:{position:"absolute",top:5,left:5,bottom:5,right:50,background:"darkgrey",fontSize:30,display:"flex",justifyContent:"center",alignItems:"center",letterSpacing:10,opacity:.3},mouseBtns:{position:"absolute",top:5,bottom:5,right:5,width:40,display:"flex",flexDirection:"column",fontSize:24,fontWeight:"bold","& .btn":{display:"flex",flexGrow:1,justifyContent:"center",alignItems:"center",width:"100%",backgroundColor:"darkgrey"},"& .btn + .btn":{marginTop:2},"& .btn svg":{transform:"scale(1.2)"}}}),P=function(e){var t=L(),n=null,a=z.a.throttle((function(e){var t={x:e.x-n.x,y:e.y-n.y};n=e,r("".concat(W,"/mouse-move"),t)}),100),r=function(e,t){return X.a.post(e,t)},c=function(e,t){return r("".concat(W,"/mouse-click"),{button:e,clickType:t})},i=function(e){c("left","click")},l=function(e){c("left","double")};return o.a.createElement("div",null,o.a.createElement("div",{className:t.trackpad,onTouchStart:function(e){var t=Math.round(e.pageX||e.touches[0].pageX),a=Math.round(e.pageY||e.touches[0].pageY);n={x:t,y:a}},onTouchEnd:function(){return setTimeout((function(){return n=null}),110)},onTouchMove:function(e){if(n){var t=Math.round(e.pageX||e.touches[0].pageX),o=Math.round(e.pageY||e.touches[0].pageY);a({x:t,y:o})}},onClick:i,onDoubleClick:l},"TRACKPAD"),o.a.createElement("div",{className:t.mouseBtns},o.a.createElement("span",{className:"btn ripple",onClick:function(e){}},o.a.createElement(T.a,null)),o.a.createElement("span",{className:"btn ripple",onClick:function(e){}},o.a.createElement(I.a,null)),o.a.createElement("span",{className:"btn ripple",onClick:i},"L"),o.a.createElement("span",{className:"btn ripple",onClick:function(e){c("right","click")}},"R"),o.a.createElement("span",{className:"btn ripple",onClick:l},"D")))},F=n(170),G=n(169),J=n(166),K=n(82),q=n.n(K),H=A(),U=Object(v.a)({root:{"& svg":{color:"#000"}},textFieldLine:{display:"flex",alignItems:"center"}}),$=function(e){var t=U(),n=Object(a.useState)(""),r=Object(g.a)(n,2),c=r[0],i=r[1];return o.a.createElement(F.a,{p:1,className:t.root},o.a.createElement("div",{className:t.textFieldLine},o.a.createElement(G.a,{variant:"outlined",placeholder:"Type here ...",size:"small",fullWidth:!0,value:c,onChange:function(e){return i(e.target.value)}}),o.a.createElement(J.a,{color:"primary",component:"span",onClick:function(e){var t="".concat(H,"/type-text");X.a.post(t,{typedTxt:c}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},o.a.createElement(q.a,null))))},Q=n(93),V=n(40),Z=n(3),_=function(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},ee=n(83),te=n.n(ee),ne=Object(v.a)({wheel:{background:"#000",border:"5px double #fff",height:100,width:100,borderRadius:"50%",position:"absolute",bottom:20,transformOrigin:"center",transform:"rotate(0deg)","&::after":{content:"''",position:"absolute",right:5,top:34,display:"inline-block",width:12,height:12,borderRadius:"50%",background:"lightgray"},"&.left":{left:120},"&.right":{right:120}},directionBtns:{position:"absolute",top:30,left:30,color:"#000","& .omniIcon":{fontSize:130},"& .btn":{position:"absolute",backgroundColor:"#f00",width:32,height:32},"& .btn:active":{opacity:.7},"& .btn.left":{left:9,top:49,background:"linear-gradient(to right, lightgray, #000, #000)"},"& .btn.right":{right:9,top:49,background:"linear-gradient(to right, #000, #000, lightgray)"},"& .btn.up":{left:49,top:9,background:"linear-gradient(to bottom, lightgray, #000, #000)"},"& .btn.down":{left:49,bottom:9,background:"linear-gradient(to bottom, #000, #000, lightgray)"}},actionBtns:{position:"absolute",top:30,right:160,color:"#fff","& .btn":{position:"absolute",height:40,width:40,border:"5px outset lightgrey",borderRadius:"50%",background:"#000",fontSize:28,fontWeight:"bold",textAlign:"center"},"& .btn:active":{borderStyle:"inset"},"& .btn.y":{top:0,left:50},"& .btn.x":{top:45,left:0},"& .btn.a":{top:90,left:50},"& .btn.b":{top:45,left:99}},middleBtns:{position:"relative",width:200,borderRadius:10,margin:"calc(100vh - 220px) auto",display:"grid",gridTemplate:"auto / 1fr 1fr",fontSize:11,"& .btn":{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:10},"& .btn::before":{content:'""',height:9,width:36,border:"5px double #fff",background:"#000",borderRadius:20,marginBottom:1,opacity:.9},"& .btn:active::before":{opacity:.5}}}),ae=function(e){var t=ne(),n=Object(a.createRef)(),r=Object(a.createRef)(),c=Object(a.useState)(9),i=Object(g.a)(c,2),l=i[0],u=i[1],m=Object(a.useState)(90),d=Object(g.a)(m,2),p=d[0],b=d[1],f=Object(a.useState)({}),h=Object(g.a)(f,2),v=h[0],E=h[1],y=Object(a.useState)(null),O=Object(g.a)(y,2),j=O[0],k=O[1];Object(a.useEffect)((function(){if(!j){var e=n.current.getBoundingClientRect(),t=r.current.getBoundingClientRect(),a={y:e.top+e.height/2,x:e.left+e.width/2},o={y:t.top+t.height/2,x:t.left+t.width/2};k({w1:Object(s.a)({},a),w2:Object(s.a)({},o)})}}),[n,r,j]);var w=function(e,t){var n=Math.round(e.pageX||e.touches[0].pageX),a=Math.round(e.pageY||e.touches[0].pageY);E(Object(s.a)(Object(s.a)({},v),{},Object(V.a)({},t,{x:n,y:a})))},x=function(e,t){return setTimeout((function(){return E(Object(s.a)(Object(s.a)({},v),{},Object(V.a)({},t,null)))}),110)},N=function(e,t){if(v[t]){var n=Math.round(e.pageX||e.touches[0].pageX),a=Math.round(e.pageY||e.touches[0].pageY);S({x:n,y:a,wID:t})}},S=z.a.throttle((function(e){var t=e.wID,n=Object(Q.a)(e,["wID"]),a=function(e,t,n){var a=_(n,t),o=_(n,e),r=_(e,t);return 180*Math.acos((o*o+r*r-a*a)/(2*o*r))/Math.PI}(Object(s.a)({},j[t]),Object(s.a)({},v[t]),n);isNaN(a)||("w1"===t?u(l+a):"w2"===t&&b(p-a)),E(Object(s.a)(Object(s.a)({},v),{},Object(V.a)({},t,Object(s.a)({},n))))}),100);return o.a.createElement("div",null,o.a.createElement("div",{className:Object(Z.a)(t.wheel,"left"),ref:n,onTouchStart:function(e){return w(e,"w1")},onTouchEnd:function(e){return x(0,"w1")},onTouchMove:function(e){return N(e,"w1")},style:{transform:"rotate(".concat(l,"deg)")}}),o.a.createElement("div",{className:Object(Z.a)(t.wheel,"right"),ref:r,onTouchStart:function(e){return w(e,"w2")},onTouchEnd:function(e){return x(0,"w2")},onTouchMove:function(e){return N(e,"w2")},style:{transform:"rotate(".concat(p,"deg)")}}),o.a.createElement("div",{className:t.directionBtns},o.a.createElement(te.a,{className:"omniIcon"}),o.a.createElement("div",{className:"btn left"}),o.a.createElement("div",{className:"btn right"}),o.a.createElement("div",{className:"btn up"}),o.a.createElement("div",{className:"btn down"})),o.a.createElement("div",{className:t.actionBtns},o.a.createElement("div",{className:"btn y"},"Y"),o.a.createElement("div",{className:"btn b"},"B"),o.a.createElement("div",{className:"btn a"},"A"),o.a.createElement("div",{className:"btn x"},"X")),o.a.createElement("div",{className:t.middleBtns},o.a.createElement("div",{className:"btn"},"PAUSE"),o.a.createElement("div",{className:"btn"},"START")))},oe=function(e){return o.a.createElement("div",null,"Saved Controls")},re=[{name:"Saved Controls",icon:C.a,path:"/saved-controls",component:oe},{name:"Game Controller",icon:N.a,path:"/gamepad",component:ae},{name:"Keyboard",icon:w.a,path:"/keyboard",component:$},{name:"Mouse Trackpad",icon:j.a,path:"/trackpad",component:P}],ce=Object(v.a)({root:{position:"relative",backgroundColor:"#000",height:40,display:"flex",justifyContent:"space-around",paddingLeft:40,"& > a":{display:"inline-flex",flex:1,justifyContent:"center",alignItems:"center"},"& > a > svg":{fontSize:26,color:"#fff"}},menuBtn:{position:"absolute",top:0,left:0,padding:"0 5px",height:"100%",fontSize:26,color:"#fff"},active:{background:"rgba(255, 255, 255, .3)"}}),ie=Object(i.b)(null,(function(e){return{openSidebar:function(){return e({type:"ui sidebar open"})}}}))(Object(h.f)((function(e){var t=ce(),n=Object(a.useState)(""),r=Object(g.a)(n,2),c=r[0],i=r[1],l=e.history,u=e.openSidebar;return Object(a.useEffect)((function(){i(l.location.pathname)}),[l.location.pathname]),o.a.createElement("div",{className:t.root},o.a.createElement(y.a,{className:t.menuBtn,onClick:u}),re.map((function(e){return o.a.createElement(f.b,{to:e.path,key:e.name,className:c===e.path?t.active:""},o.a.createElement(e.icon,null))})))}))),le=n(172),ue=n(165),se=n(167),me=n(168),de=n(173),pe=n(89),be=n.n(pe),fe=n(90),he=n.n(fe),ge=n(91),ve=n.n(ge),Ee=n(92),ye=n.n(Ee),Oe=[{name:"Settings",icon:be.a,path:"/"},{name:"About",icon:he.a,path:"/"},{name:"Help",icon:ve.a,path:"/"},{name:"Support",icon:ye.a,path:"/"}],je=Object(v.a)({listContainer:{minWidth:200,"& .MuiButtonBase-root":{padding:"5px 15px"},"& .MuiListItemIcon-root":{minWidth:32},"& svg":{fontSize:25,color:"#000"}}}),ke=Object(i.b)((function(e){return{sidebarOpen:e.ui.sidebarOpen}}),(function(e){return{closeSidebar:function(){return e({type:"ui sidebar close"})}}}))((function(e){var t=je(),n=e.sidebarOpen,a=e.closeSidebar;return o.a.createElement("div",null,o.a.createElement(le.a,{open:n,onClose:a},o.a.createElement(ue.a,{className:t.listContainer},Oe.map((function(e){return o.a.createElement(se.a,{button:!0,key:e.name},o.a.createElement(me.a,null,o.a.createElement(e.icon,null)),o.a.createElement(de.a,{primary:e.name}))})))))}));n(134);var we=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f.a,null,o.a.createElement(ie,null),o.a.createElement(ke,null),o.a.createElement("div",{className:"main-container"},o.a.createElement(h.c,null,re.map((function(e){return o.a.createElement(h.a,{key:e.name,exact:!0,path:e.path,component:e.component})})),o.a.createElement(h.a,{path:"**",render:function(){return o.a.createElement("span",null,"No Match")}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:b},o.a.createElement(we,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[104,1,2]]]);
//# sourceMappingURL=main.87f03e35.chunk.js.map