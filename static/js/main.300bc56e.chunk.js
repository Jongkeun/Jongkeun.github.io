(this.webpackJsonpjongkeun=this.webpackJsonpjongkeun||[]).push([[0],{29:function(n,e,t){n.exports=t(40)},40:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(18),i=t.n(o),c=t(7),l=t(1),u=t(2);function s(){var n=Object(l.a)(["\nbody {\n  background-color: #282823;\n  padding: 0;\n  margin: 0; \n}\n"]);return s=function(){return n},n}var f=Object(u.a)(s()),m=t(8);function p(){var n=Object(l.a)(["\n  width: 20px;\n  height: 20px;\n  font-size: 3rem;\n  color: white;\n  background-color: transparent;\n  transform: translate(-50%, -50%) rotate(-90deg);\n  bottom: 0;\n  cursor: pointer;\n"]);return p=function(){return n},n}var b=u.b.div(p()),d=function(n){return a.a.createElement(b,n,"<")},h=t(10),g=function(n){return a.a.createElement(c.b,Object.assign({to:"/about"},n),n.children)};function E(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-right: 2em;\n"]);return E=function(){return n},n}function v(){var n=Object(l.a)(["\n  display: ",";\n  flex-direction: column;\n  justify-content: center;\n  background: #effffa;\n  transform: ",";\n  height: 100vh;\n  text-align: left;\n  padding: 2rem;\n  position: absolute;\n  top: 0;\n  right: 0;\n  transition: transform 0.3s ease-in-out;\n\n  @media (max-width: 576px) {\n    width: 100%;\n  }\n\n  a {\n    font-size: 2rem;\n    text-transform: uppercase;\n    padding: 2rem 0;\n    font-weight: bold;\n    letter-spacing: 0.5rem;\n    color: #0d0c1d;\n    text-decoration: none;\n    transition: color 0.3s linear;\n\n    @media (max-width: 576px) {\n      font-size: 1.5rem;\n      text-align: center;\n    }\n\n    &:hover {\n      color: #343078;\n    }\n  }\n"]);return v=function(){return n},n}function O(){var n=Object(l.a)(["\n  top: 5%;\n  left: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-end;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return O=function(){return n},n}var j=u.b.button(O(),(function(n){return n.open?"#0D0C1D":"#EFFFFA"}),(function(n){return n.open?"rotate(45deg) translateX(20px) translateY(-20px)":"rotate(0)"}),(function(n){return n.open?"0":"1"}),(function(n){return n.open?"translateX(20px)":"translateX(0)"}),(function(n){return n.open?"rotate(-45deg) translateX(20px) translateY(20px)":"rotate(0)"})),x=u.b.nav(v(),(function(n){return n.open?"flex":"none"}),(function(n){return n.open?"translateX(0)":"translateX(100%)"})),y=function(n){var e=n.open,t=n.setOpen;return a.a.createElement(x,{open:e},a.a.createElement(g,{onClick:function(){return t(!e)}},a.a.createElement("span",{role:"img","aria-label":"about us"},"\ud83d\udc81\ud83c\udffb\u200d\u2642\ufe0f"),"About Me"),a.a.createElement("a",{href:"/"},a.a.createElement("span",{role:"img","aria-label":"price"},"\ud83d\udcb8"),"Pricing"),a.a.createElement("a",{href:"/"},a.a.createElement("span",{role:"img","aria-label":"contact"},"\ud83d\udce9"),"Contact"))},w=u.b.div(E()),k=function(n){var e=n.open,t=n.setOpen;return a.a.createElement(j,{open:e,onClick:function(){return t(!e)}},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},T=function(){var n=Object(r.useState)(!1),e=Object(h.a)(n,2),t=e[0],o=e[1];return a.a.createElement(w,null,a.a.createElement(k,{open:t,setOpen:o}),a.a.createElement(y,{open:t,setOpen:o}))},z=function(n){return a.a.createElement(c.b,Object.assign({to:"/"},n),n.children)};function I(){var n=Object(l.a)(['\n  color: white;\n  @import url("https://fonts.googleapis.com/css?family=Do+Hyeon");\n  font-family: "Do Hyeon", sans-serif;\n  margin-left: 2em;\n']);return I=function(){return n},n}function N(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  height: 10vh;\n"]);return N=function(){return n},n}var S=u.b.header(N()),C=u.b.h3(I()),D=function(){return a.a.createElement(S,null,a.a.createElement(z,null,a.a.createElement(C,null,"JONGKEUN")),a.a.createElement(T,null))};function F(){var n=Object(l.a)(["\n  height: 100vh;\n  background-image: ",";\n  background-size: cover;\n"]);return F=function(){return n},n}var M=u.b.section(F(),(function(n){return n.welcome?'url("./images/code_bg.jpg")':"none"})),X=function(n){var e=n.children,t=n.welcome;return a.a.createElement(M,{welcome:t},a.a.createElement(D,null),e)};function Y(){var n=Object(l.a)(['\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  display: inline-grid;\n  font-family: "Playfair Display";\n  font-size: 7em;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 110px;\n  margin: auto;\n  @media screen and (max-width: 800px) {\n    font-size: 5em;\n    line-height: 1em;\n  }\n']);return Y=function(){return n},n}function A(){var n=Object(l.a)(["\n  text-align: center;\n"]);return A=function(){return n},n}function G(){var n=Object(l.a)(["\n  position: absolute;\n  bottom: 5vh;\n  left: 50%;\n  margin-left: -10px;\n"]);return G=function(){return n},n}var H=u.b.div(G()),J=u.b.div(A()),R=u.b.h1(Y()),K=function(){var n=Object(m.f)();return a.a.createElement(X,{welcome:!0},a.a.createElement(J,null,a.a.createElement(R,null,a.a.createElement("span",null,"The more Humble "),a.a.createElement("span",null,"You are, "),a.a.createElement("span",null,"The Faster "),a.a.createElement("span",null,"You will Improve"))),a.a.createElement(H,null,a.a.createElement(d,{onClick:function(){return n.push("/about")}})))},L=t(23),P=t(24),W=t(26),B=t(25),U=t(28);function V(){var n=Object(l.a)(["\n  color: #00ff41;\n  font-size: 2rem;\n"]);return V=function(){return n},n}function $(){var n=Object(l.a)(["\n  border-left: 0.1em solid #00ff41;\n  animation: blink 0.7s steps(1) infinite;\n"]);return $=function(){return n},n}function _(){var n=Object(l.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n\n  @keyframes blink {\n    50% {\n      border-color: transparent;\n    }\n  }\n  @import url("https://fonts.googleapis.com/css?family=VT323");\n  font-family: "VT323", monospace;\n']);return _=function(){return n},n}var q=u.b.div(_()),Q=u.b.span($()),Z=u.b.h1(V()),nn=function(n){var e=n.heading,t=n.dataText,o=Object(r.useState)(""),i=Object(h.a)(o,2),c=i[0],l=i[1],u=Object(r.useState)(!1),s=Object(h.a)(u,2),f=s[0],m=s[1],p=Object(r.useState)(0),b=Object(h.a)(p,2),d=b[0],g=b[1],E=Object(r.useState)(150),v=Object(h.a)(E,2),O=v[0],j=v[1],x=function(){var n=d%t.length,e=t[n];l(f?e.substring(0,c.length-1):e.substring(0,c.length+1)),j(f?30:150),f||c!==e?f&&""===c&&(m(!1),g(d+1)):setTimeout((function(){return m(!0)}),500)};return Object(r.useEffect)((function(){var n=setTimeout(x,O);return function(){clearTimeout(n)}}),[c,f]),a.a.createElement(q,null,a.a.createElement(Z,null,e,"\xa0",a.a.createElement("span",null,c),a.a.createElement(Q,null)))},en=function(n){function e(){return Object(L.a)(this,e),Object(W.a)(this,Object(B.a)(e).apply(this,arguments))}return Object(U.a)(e,n),Object(P.a)(e,[{key:"render",value:function(){return a.a.createElement(nn,{heading:"JONGKEUN:~$",dataText:["WELCOME TO MY WORLD","THIS IS MY WEBSITE","I LIKE FRONTEND PROGRAMMING"]})}}]),e}(a.a.Component),tn=function(){return a.a.createElement(X,null,a.a.createElement(en,null))},rn=function(){return a.a.createElement(m.c,null,a.a.createElement(m.a,{path:"/about"},a.a.createElement(tn,null)),a.a.createElement(m.a,{path:"/"},a.a.createElement(K,null)))};var an=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(c.a,null,a.a.createElement(f,null),a.a.createElement(rn,null)))};i.a.render(a.a.createElement(an,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.300bc56e.chunk.js.map