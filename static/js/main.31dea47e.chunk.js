(this.webpackJsonpreciapp=this.webpackJsonpreciapp||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/left.37b03e15.png"},function(e,t,n){e.exports=n.p+"static/media/right.b4429847.png"},function(e,t,n){e.exports=n.p+"static/media/016-banana.8eb46764.png"},function(e,t,n){e.exports=n.p+"static/media/011-core.32447e79.png"},function(e,t,n){e.exports=n.p+"static/media/015-can.6dce46d4.png"},function(e,t,n){e.exports=n.p+"static/media/061-rubbish.b8602afc.png"},function(e,t,n){e.exports=n.p+"static/media/052-teddy.a1f10e1a.png"},function(e,t,n){e.exports=n.p+"static/media/050-milk carton.81e8f46d.png"},function(e,t,n){e.exports=n.p+"static/media/049-jumper.63db85ef.png"},function(e,t,n){e.exports=n.p+"static/media/047-bulb.b4154d10.png"},function(e,t,n){e.exports=n.p+"static/media/017-bones.badeec1b.png"},function(e,t,n){e.exports=n.p+"static/media/014-bottle.ea71a9ed.png"},function(e,t,n){e.exports=n.p+"static/media/green.06a56446.svg"},function(e,t,n){e.exports=n.p+"static/media/red.6d7dd2fa.svg"},function(e,t,n){e.exports=n.p+"static/media/blue.2272066c.svg"},function(e,t,n){e.exports=n.p+"static/media/orange.ad7ab918.svg"},function(e,t,n){e.exports=n.p+"static/media/black.85d479ae.svg"},function(e,t,n){e.exports=n.p+"static/media/brown.fa74ac1e.svg"},function(e,t,n){e.exports=n.p+"static/media/yellow.6131dcd5.svg"},,function(e,t,n){e.exports=n(31)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(4),o=n.n(c),r=(n(30),n(24)),s=n(2),l=n(1);function m(e){var t=e.name,n=e.big,c=e.color,o=e.porcentage,r=e.state,s=e.rand,m=Object(a.useState)(r),p=Object(l.a)(m,2),u=p[0],d=p[1];return Object(a.useEffect)((function(){d(r),setTimeout((function(){d("")}),500)}),[s]),i.a.createElement("div",{style:{flex:1,margin:"1vmin",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"50vmin"}},i.a.createElement("div",{style:{position:"relative",animation:"".concat(u," 0.5s ease-in 0s")}},i.a.createElement("div",{style:{position:"absolute",height:"calc(100% - ".concat(o,"%)"),width:"30vmin",overflow:"hidden",top:"auto",zIndex:100}},i.a.createElement("img",{src:c,alt:"bin",style:{width:n?"30vmin":"20vmin",height:n?"30vmin":"20vmin",position:"absolute",filter:"brightness(0) invert(1)"}}),i.a.createElement("img",{src:c,alt:"bin",style:{width:n?"30vmin":"20vmin",height:n?"30vmin":"20vmin",position:"absolute",opacity:.7}})),i.a.createElement("img",{src:c,alt:"bin",style:{width:n?"30vmin":"20vmin",height:n?"30vmin":"20vmin",fill:"red"}})),i.a.createElement("p",null,t))}var p=n(5),u=n.n(p),d=n(6),f=n.n(d);function g(e){var t=e.bins,n=e.setBins,a=e.currentBin;return i.a.createElement("div",{style:{display:"flex",position:"absolute",bottom:0,width:"100vw",alignItems:"center"}},i.a.createElement("img",{alt:"left",style:{width:"15vmin",height:"15vmin"},src:u.a,onClick:function(){var e=t.slice(1,t.length);n([].concat(Object(s.a)(e),[t[0]]))}}),i.a.createElement("div",{style:{flex:1,display:"flex",overflow:"hidden",alignItems:"center",justifyContent:"center"}},t.map((function(e,t){var n=e.name,c=e.color,o=e.porcentage,r=e.state,s=e.rand;return i.a.createElement(m,{name:n,key:n,color:c,big:t===a,porcentage:o,state:r,rand:s})}))),i.a.createElement("img",{alt:"right",style:{width:"15vmin",height:"15vmin"},src:f.a,onClick:function(){var e=t.slice(0,t.length-1);n([t[t.length-1]].concat(Object(s.a)(e)))}}))}function v(e){var t=e.trash,n=e.recicle;return Object(a.useEffect)((function(){setTimeout((function(){n()}),2e3)}),[]),i.a.createElement("div",{style:{height:"100vh",marginTop:"-60vmin",paddingLeft:"45vw"}},i.a.createElement("img",{src:t,alt:"bin",style:{animation:"fall 2s ease-in 0s",width:"15vmin",height:"15vmin",transform:"rotate(".concat(90*Math.random()-45,"deg)")}}))}var b=n(7),h=n.n(b),y=n(8),x=n.n(y),E=n(9),j=n.n(E),w=n(10),O=n.n(w),k=n(11),B=n.n(k),M=n(12),C=n.n(M),I=n(13),S=n.n(I),T=n(14),J=n.n(T),W=n(15),z=n.n(W),A=n(16),D=n.n(A),L=n(17),N=n.n(L),R=n(18),$=n.n(R),q=n(19),F=n.n(q),G=n(20),H=n.n(G),K=n(21),P=n.n(K),Q=n(22),U=n.n(Q),V=n(23),X=n.n(V),Y="papel y carton",Z="filling",_="empty",ee="full",te="normal",ne=[{name:"vidrio",color:N.a,porcentage:0,state:te},{name:Y,color:F.a,porcentage:0,state:te},{name:"plastico",color:X.a,porcentage:0,state:te},{name:"metal",color:$.a,porcentage:0,state:te},{name:"textil",color:H.a,porcentage:0,state:te},{name:"escombro",color:P.a,porcentage:0,state:te},{name:"organico",color:U.a,porcentage:0,state:te}],ae=[{name:h.a,type:"organico"},{name:x.a,type:"organico"},{name:j.a,type:"metal"},{name:O.a,type:"escombro"},{name:B.a,type:"textil"},{name:C.a,type:Y},{name:S.a,type:"textil"},{name:J.a,type:"vidrio"},{name:z.a,type:"organico"},{name:D.a,type:"vidrio"}],ie=["organico",Y,"textil"];var ce=function(){var e=Object(a.useState)(ie),t=Object(l.a)(e,2),n=t[0],c=(t[1],Object(a.useState)()),o=Object(l.a)(c,2),m=o[0],p=o[1],u=Object(a.useState)(ne.filter((function(e){return n.find((function(t){return t===e.name}))}))),d=Object(l.a)(u,2),f=d[0],b=d[1],h=Object(a.useState)(0),y=Object(l.a)(h,2),x=y[0],E=y[1],j=Math.floor(f.length/2),w=Object(a.useRef)(f);w.current=f;var O=function(){var e=Object(s.a)(w.current);w.current[j].name===m.type?100===e[j].porcentage?(e[j].porcentage=0,e[j].state=ee,E(x+1e3)):(e[j].porcentage+=25,e[j].state=Z):(E(x-100),e[j].porcentage=0,e[j].state=_),e[j].rand=Math.random(),b(e)},k=Object(a.useCallback)((function(){var e=ae.filter((function(e){return n.find((function(t){return t===e.type}))}));return Object(r.a)({},e[Math.floor(Math.random()*e.length)],{key:Math.random()+""})}),[n]);return Object(a.useEffect)((function(){p(k())}),[k]),m?i.a.createElement("div",{className:"App"},i.a.createElement("p",null,x),i.a.createElement(v,{trash:m.name,key:m.key,recicle:function(){O(),p(k())}}),i.a.createElement(g,{bins:f,setBins:b,currentBin:j})):i.a.createElement("div",null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[25,1,2]]]);
//# sourceMappingURL=main.31dea47e.chunk.js.map