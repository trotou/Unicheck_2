(this.webpackJsonpreact_qrcode=this.webpackJsonpreact_qrcode||[]).push([[0],{119:function(e,t,c){"use strict";c.r(t);var i=c(3),n=c(0),a=c.n(n),r=c(14),s=c.n(r),j=(c(89),c(90),c(38)),o=c(11),d=c(148),l=c(66),b=c.n(l),O=c(70),h=c(158);var x=function(){return Object(i.jsx)(h.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},children:Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",flexWrap:"wrap",alignItems:"center",width:"100vw"},children:[Object(i.jsxs)("div",{style:{fontFamily:"Yanone Kaffeesatz"},children:[Object(i.jsx)("h1",{children:"Hackhathon FAM "}),Object(i.jsx)("h6",{children:"Leia o QR Code para ter acesso ao evento"})]}),Object(i.jsx)(j.b,{to:"validacao/qr_scanner",children:Object(i.jsx)(d.a,{variant:"contained",size:"large",color:"primary",children:Object(i.jsx)(b.a,{style:{padding:10},path:O.a,title:"QR Scanner",size:10,color:"white"})})})]})})},p=c(28),u=c(155),v=c(161),f=c(71),g=c.n(f),m=c(73),y=c.n(m),w=c(74),S=c(159),C=c(154),F=c(152),k=c(153),E=c(151),T=c(162),q=a.a.forwardRef((function(e,t){return Object(i.jsx)(T.a,Object(w.a)({direction:"up",ref:t},e))}));function R(e){var t=e.open,c=e.setOpen,n=e.msg,a=e.participante,r=e.edicao,s=e.evento,j=function(){c(!1)};return Object(i.jsx)("div",{children:Object(i.jsxs)(S.a,{open:t,TransitionComponent:q,keepMounted:!0,onClose:j,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(i.jsx)(E.a,{id:"alert-dialog-slide-title",children:n}),Object(i.jsx)(F.a,{children:a&&Object(i.jsxs)(k.a,{id:"alert-dialog-slide-description",children:["Nome: ",a,Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]}),"Evento: ",s,Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]}),"Edi\xe7\xe3o: ",r]})}),Object(i.jsx)(C.a,{children:Object(i.jsx)(d.a,{onClick:j,color:"primary",children:"Fechar"})})]})})}var _=function(){var e=Object(n.useState)(),t=Object(p.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(p.a)(r,2),o=s[0],d=s[1],l=Object(n.useState)(),b=Object(p.a)(l,2),O=b[0],x=b[1],f=Object(n.useState)(),m=Object(p.a)(f,2),w=m[0],S=m[1],C=Object(n.useState)(),F=Object(p.a)(C,2),k=F[0],E=F[1],T=Object(n.useState)(),q=Object(p.a)(T,2),_=q[0],z=q[1],A=function(e){d(!0),x(e.message),S(e.participante),E(e.evento),z(e.edicao)};return Object(i.jsx)(h.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},children:Object(i.jsxs)("div",{style:{minHeight:"500px"},children:[Object(i.jsx)(j.b,{to:"/",children:Object(i.jsx)(u.a,{style:{marginRight:10},color:"primary",children:Object(i.jsx)(v.a,{})})}),Object(i.jsx)("center",{children:Object(i.jsx)("div",{style:{marginTop:30},children:Object(i.jsx)(g.a,{delay:300,onError:function(e){console.error(e)},onScan:function(e){e&&(a(e),y.a.post("https://servicos.ibsoltelecom.com.br/unicheckapi/participante/validacao.php",{token:c}).then((function(e){return A(e.data)})).catch((function(e){1===e.response.status&&console.log(e)})))},style:{height:240,width:320}})})}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)(R,{open:o,setOpen:d,handleClickOpen:A,msg:O,participante:w,evento:k,edicao:_})]})})},z=c(156),A=c(157);function B(){return Object(i.jsx)("div",{children:Object(i.jsx)(z.a,{position:"static",children:Object(i.jsx)(A.a,{children:Object(i.jsx)("div",{children:Object(i.jsx)("img",{alt:"unloaded",src:"https://i.imgur.com/TEtQYW8.png",width:"200px"})})})})})}var I=c(160);var L=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(B,{}),Object(i.jsx)("div",{className:"App-header",children:Object(i.jsx)(j.a,{children:Object(i.jsx)("div",{children:Object(i.jsx)(I.a,{exitBeforeEnter:!0,children:Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{exact:!0,path:"/",children:Object(i.jsx)(x,{})}),Object(i.jsx)(o.a,{path:"qr_scanner",children:Object(i.jsx)(_,{})})]})})})})})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,164)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),i(e),n(e),a(e),r(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(L,{})}),document.getElementById("root")),M()},89:function(e,t,c){},90:function(e,t,c){}},[[119,1,2]]]);
//# sourceMappingURL=main.49560d8f.chunk.js.map