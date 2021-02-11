(this.webpackJsonpstyledcomponentstutorial=this.webpackJsonpstyledcomponentstutorial||[]).push([[0],{44:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(2),c=e.n(i),a=e(28),o=e.n(a),s=e(9),u=e(5),l=e(16),d=e(3),b=e(4);function x(){var n=Object(d.a)(["\n    border-radius: 4px;\n    background: ",";\n    white-space: nowrap;\n    padding: ",";\n    color: #fff;\n    font-size: ",";\n    outline: none;\n    border: none;\n    cursor: pointer;\n    margin: 10px;\n\n    &:hover {\n        transition: all 0.3s ease-out;\n        background: #fff;\n        background: ",";\n    }\n\n    @media screen and (max-width: 960px) {\n        width: 100%\n    }\n"]);return x=function(){return n},n}function p(){var n=Object(d.a)(["\n    z-index: 1;\n    width: 100%;\n    max-width: 1600px;\n    margin-right: auto;\n    margin-left: auto;\n    padding-right: 50px;\n    padding-left: 50px;\n\n    @media screen and (max-width: 991px) {\n        padding-right: 30px;\n        padding-left: 30px;\n    }\n"]);return p=function(){return n},n}function f(){var n=Object(d.a)(["\n    z-index: 1;\n    width: 100%;\n    max-width: 1300px;\n    margin-right: auto;\n    margin-left: auto;\n    padding-right: 50px;\n    padding-left: 50px;\n\n    @media screen and (max-width: 991px) {\n        padding-right: 30px;\n        padding-left: 30px;\n    }\n"]);return f=function(){return n},n}function j(){var n=Object(d.a)(["\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Source Sans Pro', sans-serif;\n}\n"]);return j=function(){return n},n}var h=Object(b.a)(j()),g=b.b.div(f()),m=(b.b.div(p()),b.b.button(x(),(function(n){return n.primary?"#4b59f7":"#0467fb"}),(function(n){return n.big?"12px 64px":"10px 20px"}),(function(n){return n.fontBig?"20px":"16px"}),(function(n){return n.primary?"#0467fb":"#4b59f7"}))),O=h,v=e(12);function y(){var n=Object(d.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-decoration: none;\n    padding: 8px 16px;\n    height: 100%;\n    width: 100%;\n    border: none;\n    outline: none;\n"]);return y=function(){return n},n}function w(){var n=Object(d.a)(["\n    @media screen and (max-width: 960px) {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        height: 120px;\n    }\n"]);return w=function(){return n},n}function k(){var n=Object(d.a)(["\n    color: #fff;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    padding: 0.5rem 1rem;\n    height: 100%;\n\n    @media screen and (max-width: 960px) {\n        text-align: center;\n        padding: 2rem;\n        width: 100%;\n        display: table;\n\n        &:hover {\n            color: #4b59f7;\n            transition: all 0.3s ease;\n        }\n    }\n"]);return k=function(){return n},n}function S(){var n=Object(d.a)(["\n    height: 80px;\n    border-bottom: 2px solid transparent;\n\n    &:hover {\n        border-bottom: 2px solid #4b59f7;\n    }\n\n    @media screen and (max-width: 960px) {\n        width: 100%;\n\n        &:hover {\n            border: none;\n        }\n    }\n"]);return S=function(){return n},n}function T(){var n=Object(d.a)(["\n    display: flex;\n    align-items: center;\n    list-style: none;\n    text-align: center;\n\n    @media screen and (max-width: 960px) {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        height: 90vh;\n        position: absolute;\n        top: 80px;\n        left: ",";\n        opacity: 1;\n        transition: all 0.5s ease;\n        background: #101522;\n    }\n"]);return T=function(){return n},n}function B(){var n=Object(d.a)(["\n    display: none;\n\n    @media screen and (max-width: 960px) {\n        display: block;\n        position: absolute;\n        top: 0;\n        right: 0;\n        transform: translate(-100%, 60%);\n        font-size: 1.8rem;\n        cursor: pointer;\n    }\n"]);return B=function(){return n},n}function L(){var n=Object(d.a)(["\n    margin-right: 0.5rem;\n"]);return L=function(){return n},n}function z(){var n=Object(d.a)(["\n    color: #fff;\n    justify-self: flex-start;\n    cursor: pointer;\n    text-decoration: none;\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n"]);return z=function(){return n},n}function A(){var n=Object(d.a)(["\n    display: flex;\n    justify-content: space-between;\n    height: 80px;\n\n    ","\n"]);return A=function(){return n},n}function C(){var n=Object(d.a)(["\n    background: #101522;\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2rem;\n    position: sticky;\n    top: 0;\n    z-index: 999;\n"]);return C=function(){return n},n}var F=b.b.nav(C()),H=Object(b.b)(g)(A(),g),G=Object(b.b)(s.b)(z()),M=Object(b.b)(v.e)(L()),D=b.b.div(B()),I=b.b.ul(T(),(function(n){return n.click?0:"-100%"})),E=b.b.li(S()),P=Object(b.b)(s.b)(k()),W=b.b.li(w()),U=Object(b.b)(s.b)(y()),J=e(0),V=function(){var n=Object(i.useState)(!1),t=Object(l.a)(n,2),e=t[0],c=t[1],a=Object(i.useState)(!0),o=Object(l.a)(a,2),s=o[0],u=o[1],d=function(){return c(!e)},b=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(i.useEffect)((function(){b()}),[]),window.addEventListener("resize",b),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(J.b.Provider,{value:{color:"#fff"},children:Object(r.jsx)(F,{children:Object(r.jsxs)(H,{children:[Object(r.jsxs)(G,{to:"/",onClick:function(){return c(!1)},children:[Object(r.jsx)(M,{}),"Kah Hwa's Portfolio"]}),Object(r.jsx)(D,{onClick:d,children:e?Object(r.jsx)(v.f,{}):Object(r.jsx)(v.a,{})}),Object(r.jsxs)(I,{onClick:d,click:e,children:[Object(r.jsx)(E,{children:Object(r.jsx)(P,{to:"/",children:"Home"})}),Object(r.jsx)(E,{children:Object(r.jsx)(P,{to:"/services",children:"Services"})}),Object(r.jsx)(E,{children:Object(r.jsx)(P,{to:"/products",children:"Products"})}),Object(r.jsx)(W,{children:s?Object(r.jsx)(U,{to:"/sign-up",children:Object(r.jsx)(m,{primary:!0,children:"SIGN UP"})}):Object(r.jsx)(U,{to:"/sign-up",children:Object(r.jsx)(m,{fontBig:!0,primary:!0,children:"SIGN UP"})})})]})]})})})})};function Q(){var n=Object(d.a)(["\n    padding-right: 0;\n    border: 0;\n    max-width: 100%;\n    vertical-align: middle;\n    display: inline-block;\n    max-height: 500px;\n"]);return Q=function(){return n},n}function Y(){var n=Object(d.a)(["\n    max-width: 555px;\n    display: flex;\n    justify-content: ",";\n"]);return Y=function(){return n},n}function _(){var n=Object(d.a)(["\n    max-width: 440px;\n    margin-bottom: 35px;\n    font-size: 18px;\n    line-height: 24px;\n    color: ",";\n\n"]);return _=function(){return n},n}function K(){var n=Object(d.a)(["\n    margin-bottom: 24px;\n    font-size: 48px;\n    line-height: 1.1;\n    color: ",";\n"]);return K=function(){return n},n}function N(){var n=Object(d.a)(["\n    color: ",";\n    font-size: 18px;\n    line-height: 16px;\n    letter-spacing: 1.4px;\n    margin-bottom: 16px;\n"]);return N=function(){return n},n}function R(){var n=Object(d.a)(["\n    max-width: 540px;\n    padding-top: 0;\n    padding-bottom: 60px;\n\n    @media screen and (max-width: 768px) {\n        padding-bottom: 65px;\n    }\n"]);return R=function(){return n},n}function q(){var n=Object(d.a)(["\n    margin-bottom: 15px;\n    padding-right: 15px;\n    padding-left: 15px;\n    flex: 1;\n    max-width: 50%;\n    flex-basis: 50%;\n\n    @media screen and (max-width: 768px) {\n        max-width: 100%;\n        flex-basis: 100%;\n        display: flex;\n        justify-content: center;\n    }\n"]);return q=function(){return n},n}function X(){var n=Object(d.a)(["\n    display: flex;\n    margin: 0 -15px -15px -15px;\n    flex-wrap: wrap;\n    align-items: center;\n    flex-direction: ",";\n"]);return X=function(){return n},n}function Z(){var n=Object(d.a)(["\n    color: #fff;\n    padding: 160px 0;\n    background: ",";\n"]);return Z=function(){return n},n}var $=b.b.div(Z(),(function(n){return n.lightBg?"#fff":"#101522"})),nn=b.b.div(X(),(function(n){return n.imgStart?"row-reverse":"row"})),tn=b.b.div(q()),en=b.b.div(R()),rn=b.b.div(N(),(function(n){return n.lightTopLine?"#A9B3C1":"#4B59F7"})),cn=b.b.h1(K(),(function(n){return n.lightText?"#F7F8FA":"#1C2237"})),an=b.b.p(_(),(function(n){return n.lightTextDesc?"#A9B3C1":"#1C2237"})),on=b.b.div(Y(),(function(n){return n.start?"flex-start":"flex-end"})),sn=b.b.img(Q()),un=function(n){var t=n.primary,e=n.lightBg,i=n.imgStart,c=n.lightTopLine,a=n.lightText,o=n.lightTextDesc,u=n.headline,l=n.description,d=n.topLine,b=n.buttonLabel,x=n.img,p=n.alt,f=n.start;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)($,{lightBg:e,children:Object(r.jsx)(g,{children:Object(r.jsxs)(nn,{imgStart:i,children:[Object(r.jsx)(tn,{children:Object(r.jsxs)(en,{children:[Object(r.jsx)(rn,{lightTopLine:c,children:d}),Object(r.jsx)(cn,{lightText:a,children:u}),Object(r.jsx)(an,{lightTextDesc:o,children:l}),Object(r.jsx)(s.b,{to:"sign-up",children:Object(r.jsx)(m,{big:!0,fontBig:!0,primary:t,children:b})})]})}),Object(r.jsx)(tn,{children:Object(r.jsx)(on,{start:f,children:Object(r.jsx)(sn,{src:x,alt:p})})})]})})})})},ln=e(14),dn=e.n(ln),bn=e(10),xn=e(21);function pn(){var n=Object(d.a)(["\n    margin: 10px;\n    opacity: 0.7;\n    color: black;\n\n"]);return pn=function(){return n},n}function fn(){var n=Object(d.a)(["\n    width: 100%;\n    background: linear-gradient(90deg, rgb(117, 252, 117) 60%, rgb(214, 214, 214) 60%);\n    outline: none;\n    opacity: 0.7;\n    transition: opacity 0.3s;\n    border-radius: 12px;\n    color: black;\n    box-shadow: 0px 1px 10px 1px black;\n\n    &:hover {\n        opacity: 1;\n    }\n\n    &::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        width: 40px;\n        height: 40px;\n        background: white;\n        border-radius: 50%;\n        cursor: pointer;\n    }\n"]);return fn=function(){return n},n}function jn(){var n=Object(d.a)(["\n    width: 100%;\n    margin: 10px;\n"]);return jn=function(){return n},n}function hn(){var n=Object(d.a)(["\n    padding-right: 0;\n    border: 0;\n    max-width: 100%;\n    vertical-align: middle;\n    display: inline-block;\n    max-height: 500px;\n"]);return hn=function(){return n},n}function gn(){var n=Object(d.a)(["\n    max-width: 555px;\n    display: flex;\n    justify-content: ",";\n"]);return gn=function(){return n},n}function mn(){var n=Object(d.a)(["\n    max-width: 440px;\n    margin-bottom: 35px;\n    font-size: 18px;\n    line-height: 24px;\n    color: ",";\n\n"]);return mn=function(){return n},n}function On(){var n=Object(d.a)(["\n    margin-bottom: 24px;\n    font-size: 30px;\n    line-height: 1.1;\n    color: ",";\n"]);return On=function(){return n},n}function vn(){var n=Object(d.a)(["\n    color: ",";\n    font-size: 18px;\n    line-height: 16px;\n    letter-spacing: 1.4px;\n    margin-bottom: 16px;\n"]);return vn=function(){return n},n}function yn(){var n=Object(d.a)(["\n    max-width: 540px;\n    padding-top: 0;\n    padding-bottom: 60px;\n\n    @media screen and (max-width: 768px) {\n        padding-bottom: 65px;\n    }\n"]);return yn=function(){return n},n}function wn(){var n=Object(d.a)(["\n    background-color: green;\n    width: 2px;\n    margin: 0 2px;\n    display: inline-block;\n"]);return wn=function(){return n},n}function kn(){var n=Object(d.a)(["\n    margin-bottom: 15px;\n    padding-right: 15px;\n    padding-left: 15px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    max-width: 80%;\n    flex: 1;\n    color: black;\n    @media screen and (max-width: 768px) {\n        max-width: 100%;\n    }\n"]);return kn=function(){return n},n}function Sn(){var n=Object(d.a)(["\n    margin-bottom: 15px;\n    padding-right: 15px;\n    padding-left: 15px;\n    flex: 1;\n    max-width: 20%;\n    /* flex-basis: 10%; */\n\n    @media screen and (max-width: 768px) {\n        max-width: 100%;\n        flex-basis: 100%;\n        display: flex;\n        justify-content: center;\n    }\n"]);return Sn=function(){return n},n}function Tn(){var n=Object(d.a)(["\n    display: flex;\n    margin: 0 -15px -15px -15px;\n    flex-wrap: wrap;\n    align-items: center;\n    flex-direction: ",";\n"]);return Tn=function(){return n},n}function Bn(){var n=Object(d.a)(["\n    color: #fff;\n    padding: 160px 0;\n    background: ",";\n"]);return Bn=function(){return n},n}var Ln=b.b.div(Bn(),(function(n){return n.lightBg?"#fff":"#101522"})),zn=b.b.div(Tn(),(function(n){return n.imgStart?"row-reverse":"row"})),An=b.b.div(Sn()),Cn=b.b.div(kn()),Fn=b.b.div.attrs((function(n){return{style:{height:"".concat(n.lineHeight,"px")}}}))(wn()),Hn=b.b.div(yn()),Gn=b.b.div(vn(),(function(n){return n.lightTopLine?"#A9B3C1":"#4B59F7"})),Mn=b.b.h1(On(),(function(n){return n.lightText?"#F7F8FA":"#1C2237"})),Dn=b.b.p(mn(),(function(n){return n.lightTextDesc?"#A9B3C1":"#1C2237"})),In=(b.b.div(gn(),(function(n){return n.start?"flex-start":"flex-end"})),b.b.img(hn()),b.b.div(jn())),En=b.b.input(fn()),Pn=b.b.p(pn()),Wn=function(){var n=Object(xn.a)(dn.a.mark((function n(t,e,r){var i,c,a=arguments;return dn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=a.length>3&&void 0!==a[3]?a[3]:[],!(e<r)){n.next=7;break}return c=Un(t,e,r,i),n.next=5,Wn(t,e,c-1,i);case 5:return n.next=7,Wn(t,c+1,r,i);case 7:return n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),Un=function(n,t,e,r){for(var i=t,c=n[e].props.lineHeight,a=t;a<e;a++)if(n[a].props.lineHeight<c){var o=[n[i],n[a]];n[a]=o[0],n[i]=o[1],r.push({animation:Object(bn.a)(n),swap:[a,i++]})}var s=[n[e],n[i]];return n[i]=s[0],n[e]=s[1],r.push({animation:Object(bn.a)(n),swap:[i,e]}),i},Jn=function(){var n=Object(xn.a)(dn.a.mark((function n(t){var e,r,i,c,a,o=arguments;return dn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=o.length>1&&void 0!==o[1]?o[1]:[],r=0;case 2:if(!(r<t.length)){n.next=10;break}for(i=!1,c=1;c<t.length-r;c++)t[c-1].props.lineHeight>t[c].props.lineHeight&&(a=[t[c],t[c-1]],t[c-1]=a[0],t[c]=a[1],e.push({animation:Object(bn.a)(t),swap:[c,c-1]}),i=!0);if(i){n.next=7;break}return n.abrupt("break",10);case 7:r++,n.next=2;break;case 10:return n.abrupt("return",e);case 11:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Vn=function(n){var t=[];return Qn(n,0,n.length-1,t),t},Qn=function n(t,e,r,i){if(r===e)return[t.slice(e,r+1),e,r];var c=Math.floor((r+e+1)/2);return Yn(t,n(t,e,c-1,i),n(t,c,r,i),i)},Yn=function(n,t,e,r){for(var i=[],c=t[0],a=e[0],o=t[1],s=e[2],u=0,l=0;u<c.length&&l<a.length;)c[u].props.lineHeight<=a[l].props.lineHeight?i.push(c[u++]):i.push(a[l++]);u<c.length?i.push.apply(i,Object(bn.a)(c.slice(u))):i.push.apply(i,Object(bn.a)(a.slice(l)));for(var d=o;d<=s;d++)n[d]=i[d-o],r.push({animation:Object(bn.a)(n)});return[i,o,s]},_n=function(n){var t=n.primary,e=n.lightBg,c=n.imgStart,a=n.lightTopLine,o=n.lightText,s=n.lightTextDesc,u=n.headline,d=n.description,b=n.topLine,x=Object(i.useState)([]),p=Object(l.a)(x,2),f=p[0],j=p[1],h=Object(i.useState)(1),O=Object(l.a)(h,2),v=O[0],y=O[1];Object(i.useEffect)((function(){k(v)}),[v]);var w=function(){var n=Object(xn.a)(dn.a.mark((function n(t){var e;return dn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=t,n.next="QuickSort"===n.t0?3:"BubbleSort"===n.t0?7:"MergeSort"===n.t0?11:13;break;case 3:return n.next=5,Wn(Object(bn.a)(f),0,f.length-1);case 5:return e=n.sent,n.abrupt("break",14);case 7:return n.next=9,Jn(Object(bn.a)(f));case 9:return e=n.sent,n.abrupt("break",14);case 11:return e=Vn(Object(bn.a)(f)),n.abrupt("break",14);case 13:e=[];case 14:e.length&&e.forEach((function(n,t){setTimeout((function(){j(n.animation)}),15*t)}));case 15:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),k=function(n){var t=Array(parseInt(n,10)).fill();j(t.map((function(n,t){return Object(r.jsx)(Fn,{lineHeight:(e=5,i=300,~~(Math.random()*(i-e+1)+e))},t);var e,i})))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Ln,{lightBg:e,children:Object(r.jsx)(g,{children:Object(r.jsxs)(zn,{imgStart:c,children:[Object(r.jsx)(An,{children:Object(r.jsxs)(Hn,{children:[Object(r.jsx)(Gn,{lightTopLine:a,children:b}),Object(r.jsx)(Mn,{lightText:o,children:u}),Object(r.jsx)(Dn,{lightTextDesc:s,children:d}),Object(r.jsxs)(In,{children:[Object(r.jsx)(En,{type:"range",min:"1",max:"150",value:v,onChange:function(n){return y(n.target.value)}}),Object(r.jsxs)(Pn,{children:["Value: ",v]})]}),Object(r.jsx)(m,{fontBig:!0,primary:t,onClick:function(){return w("QuickSort")},children:"QuickSort"}),Object(r.jsx)(m,{fontBig:!0,primary:t,onClick:function(){return w("BubbleSort")},children:"BubbleSort"}),Object(r.jsx)(m,{fontBig:!0,primary:t,onClick:function(){return w("MergeSort")},children:"MergeSort"}),Object(r.jsx)(m,{fontBig:!0,primary:t,onClick:function(){var n=Object(bn.a)(f).sort((function(n,t){return n.props.lineHeight-t.props.lineHeight}));j(n)},children:"Just Sort"}),Object(r.jsx)(m,{fontBig:!0,primary:t,onClick:function(){return k(v)},children:"Randomize"})]})}),Object(r.jsx)(Cn,{children:f})]})})})})};function Kn(){var n=Object(d.a)(["\n    color: #fff;\n    font-size: 24px;\n"]);return Kn=function(){return n},n}function Nn(){var n=Object(d.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 240px;\n"]);return Nn=function(){return n},n}function Rn(){var n=Object(d.a)(["\n    color: #fff;\n    margin-bottom: 16px;\n"]);return Rn=function(){return n},n}function qn(){var n=Object(d.a)(["\n\n    margin-right: 10px;\n"]);return qn=function(){return n},n}function Xn(){var n=Object(d.a)(["\n    color: #fff;\n    justify-self: start;\n    cursor: pointer;\n    text-decoration: none;\n    font-size: 2rem;\n    display: flex;\n    align-items: center;\n    margin-bottom: 16px;\n"]);return Xn=function(){return n},n}function Zn(){var n=Object(d.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 90%;\n    max-width: 1000px;\n    margin: 40px auto 0 auto;\n\n    @media screen and (max-width: 820px) {\n        flex-direction: column;\n    }\n"]);return Zn=function(){return n},n}function $n(){var n=Object(d.a)(["\n    max-width: 1000px;\n    width: 100%;\n"]);return $n=function(){return n},n}function nt(){var n=Object(d.a)(["\n    color: #fff;\n    text-decoration: none;\n    margin-bottom: 0.5rem;\n\n    &:hover {\n        color: #0467fb;\n        transition: 0.3s ease-out;\n    }\n"]);return nt=function(){return n},n}function tt(){var n=Object(d.a)(["\n    margin-bottom: 16px;\n"]);return tt=function(){return n},n}function et(){var n=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: left;\n    margin: 16px;\n    width: 160px;\n    box-sizing: border-box;\n    color: #fff;\n\n    @media screen and (max-width: 420px) {\n        margin: 0;\n        padding: 10px;\n        width: 100%;\n    }\n"]);return et=function(){return n},n}function rt(){var n=Object(d.a)(["\n    display: flex;\n\n    @media screen and (max-width: 820px) {\n        flex-direction: column;\n    }\n"]);return rt=function(){return n},n}function it(){var n=Object(d.a)(["\n    width: 100%;\n    max-width: 1000px;\n    display: flex;\n    justify-content: center;\n\n    @media screen and (max-width: 820px) {\n        padding-top: 32px;\n    }\n"]);return it=function(){return n},n}function ct(){var n=Object(d.a)(["\n    padding: 10px 20px;\n    border-radius: 2px;\n    margin-right: 10px;\n    outline: none;\n    border: none;\n    font-size: 16px;\n    border: 1px solid #fff;\n\n    &::placeholder {\n        color: #242424;\n    }\n\n    @media screen and (max-width: 820px) {\n       width: 100%;\n       margin: 0 0 16px 0;\n    }\n"]);return ct=function(){return n},n}function at(){var n=Object(d.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    @media screen and (max-width: 820px) {\n        flex-direction: column;\n        width: 80%;\n    }\n"]);return at=function(){return n},n}function ot(){var n=Object(d.a)(["\n    margin-bottom: 24px;\n    font-size: 20px;\n"]);return ot=function(){return n},n}function st(){var n=Object(d.a)(["\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    margin-bottom: 24px;\n    font-size: 24px;\n"]);return st=function(){return n},n}function ut(){var n=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    margin-bottom: 24px;\n    padding: 24px;\n    color: #fff;\n"]);return ut=function(){return n},n}function lt(){var n=Object(d.a)(["\n    background-color: #101522;\n    padding: 4rem 0 2rem 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return lt=function(){return n},n}var dt=b.b.div(lt()),bt=b.b.section(ut()),xt=b.b.p(st()),pt=b.b.p(ot()),ft=b.b.div(at()),jt=b.b.input(ct()),ht=b.b.div(it()),gt=b.b.div(rt()),mt=b.b.div(et()),Ot=b.b.h2(tt()),vt=Object(b.b)(s.b)(nt()),yt=b.b.section($n()),wt=b.b.div(Zn()),kt=Object(b.b)(s.b)(Xn()),St=Object(b.b)(v.e)(qn()),Tt=b.b.small(Rn()),Bt=b.b.div(Nn()),Lt=b.b.a(Kn()),zt=function(){return Object(r.jsxs)(dt,{children:[Object(r.jsxs)(bt,{children:[Object(r.jsx)(xt,{children:"Join our exclusive membership to receive the latest news and trends"}),Object(r.jsx)(pt,{children:"You can unsubscribe at any time"}),Object(r.jsxs)(ft,{children:[Object(r.jsx)(jt,{name:"email",type:"email",placeholder:"Your Email"}),Object(r.jsx)(m,{fontBig:!0,children:"Subscribe"})]})]}),Object(r.jsx)(ht,{children:Object(r.jsxs)(gt,{children:[Object(r.jsxs)(mt,{children:[Object(r.jsx)(Ot,{children:"About Us"}),Object(r.jsx)(vt,{to:"/sign-up",children:"How it works"}),Object(r.jsx)(vt,{to:"/",children:"Testemonials"}),Object(r.jsx)(vt,{to:"/",children:"Careers"}),Object(r.jsx)(vt,{to:"/",children:"Investors"})]}),Object(r.jsxs)(mt,{children:[Object(r.jsx)(Ot,{children:"Contact Us"}),Object(r.jsx)(vt,{to:"/sign-up",children:"How it works"}),Object(r.jsx)(vt,{to:"/",children:"Testemonials"}),Object(r.jsx)(vt,{to:"/",children:"Careers"}),Object(r.jsx)(vt,{to:"/",children:"Investors"})]})]})}),Object(r.jsx)(yt,{children:Object(r.jsxs)(wt,{children:[Object(r.jsxs)(kt,{to:"/",children:[Object(r.jsx)(St,{}),"KAH HWA"]}),Object(r.jsx)(Tt,{children:"Made This In 2021"}),Object(r.jsxs)(Bt,{children:[Object(r.jsx)(Lt,{href:"/",target:"_blank","aria-label":"Facebook",children:Object(r.jsx)(v.b,{})}),Object(r.jsx)(Lt,{href:"/",target:"_blank","aria-label":"Instagram",children:Object(r.jsx)(v.c,{})}),Object(r.jsx)(Lt,{href:"/",target:"_blank","aria-label":"Linkedin",children:Object(r.jsx)(v.d,{})})]})]})})]})},At=e(13),Ct=(e.p,e.p+"static/media/svg-2.ab8e3491.svg"),Ft=e.p+"static/media/svg-3.4caa0306.svg",Ht=e.p+"static/media/svg-4.e65db9bf.svg",Gt={lightBg:!0,primary:!0,imgStart:!1,lightTopLine:!1,lightTextDesc:!1,description:"Pick a Sort",headline:"Sorting Visualizer",lightText:!1,topLine:"Yours Truly"},Mt=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(_n,Object(At.a)({},Gt))})},Dt={lightBg:!0,primary:!0,imgStart:!0,lightTopLine:!1,lightTextDesc:!1,buttonLabel:"Get Started",description:"We help business owners make money. Our team of specialist can help you achieve your goals",headline:"Lead Generation Specialist for Online Businesses",lightText:!1,topLine:"Marketing Agency",img:Ht,alt:"Alt",start:""},It=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(un,Object(At.a)({},Dt))})},Et={lightBg:!0,primary:!0,imgStart:!0,lightTopLine:!1,lightTextDesc:!1,buttonLabel:"Get Started",description:"We help business owners make money. Our team of specialist can help you achieve your goals",headline:"Lead Generation Specialist for Online Businesses",lightText:!1,topLine:"Marketing Agency",img:Ct,alt:"Alt",start:""},Pt={lightBg:!1,primary:!0,imgStart:!1,lightTopLine:!0,lightTextDesc:!0,buttonLabel:"Get Started",description:"We help business owners make money. Our team of specialist can help you achieve your goals",headline:"Lead Generation Specialist for Online Businesses",lightText:!0,topLine:"Marketing Agency",img:Ft,alt:"Alt",start:""},Wt={lightBg:!0,primary:!0,imgStart:!0,lightTopLine:!1,lightTextDesc:!1,buttonLabel:"Get Started",description:"We help business owners make money. Our team of specialist can help you achieve your goals",headline:"Lead Generation Specialist for Online Businesses",lightText:!1,topLine:"Marketing Agency",img:Ht,alt:"Alt",start:""},Ut=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(un,Object(At.a)({},Et)),Object(r.jsx)(un,Object(At.a)({},Pt)),Object(r.jsx)(un,Object(At.a)({},Wt))]})},Jt={lightBg:!1,primary:!0,imgStart:!1,lightTopLine:!0,lightTextDesc:!0,buttonLabel:"Get Started",description:"We help business owners make money. Our team of specialist can help you achieve your goals",headline:"Lead Generation Specialist for Online Businesses",lightText:!0,topLine:"Marketing Agency",img:Ft,alt:"Alt",start:""},Vt=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(un,Object(At.a)({},Jt))})};function Qt(){var n=Object(u.g)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[n]),null}var Yt=function(){return Object(r.jsxs)(s.a,{children:[Object(r.jsx)(O,{}),Object(r.jsx)(Qt,{}),Object(r.jsx)(V,{}),Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{path:"/algorithmVizualizer",exact:!0,component:function(){return Object(r.jsx)(Mt,{})}}),Object(r.jsx)(u.b,{path:"/services",exact:!0,component:function(){return Object(r.jsx)(It,{})}}),Object(r.jsx)(u.b,{path:"/products",exact:!0,component:function(){return Object(r.jsx)(Ut,{})}}),Object(r.jsx)(u.b,{path:"/sign-up",exact:!0,component:function(){return Object(r.jsx)(Vt,{})}}),Object(r.jsx)(u.b,{exact:!0,path:"/",children:Object(r.jsx)(u.a,{to:"/algorithmVizualizer"})})]}),Object(r.jsx)(zt,{})]})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Yt,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.74cd24a0.chunk.js.map