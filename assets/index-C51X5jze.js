var Z=Object.defineProperty;var J=(t,e,n)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var u=(t,e,n)=>J(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();class z{constructor(e,n){this.btn=e,this.dialogElement=n,this.attachClickHandler()}attachClickHandler(){this.btn.addEventListener("click",()=>{this.dialogElement.close()})}}function w(t){return+(Math.round(parseFloat(t+"e2"))+"e-2")}const y=1.1547005;function F(t){return`.hexagon-wrapper {
  background-color: ${t};
  display: flex;
  justify-content: center;
  align-items: center;
  }
  `}function ee(t,e,n,o){return`
  .hexagon-wrapper__hexagon-container {
    width: ${t*e}vw;
    display: flex;
    flex-wrap: wrap;
    transform: skew(${n}deg, ${o}deg);
  }
  `}function k({width:t,height:e=t,unit:n}){return`-webkit-clip-path: polygon(
  0 25%,
  50% 0,
  100% 25%,
  100% 75%,
  50% 100%,
  0 75%
);
clip-path: polygon(
  0 25%,
  50% 0,
  100% 25%,
  100% 75%,
  50% 100%,
  0 75%
);
width: ${t}${n};
height: ${e}${n};
display: flex;
justify-content: center;
align-items: center;`}function te(t){return w(y*t/-4)}function ne(t){return .5*t}function oe(t){const e=w(y*t);return k({height:e,width:t,unit:"vw"})}function re(t,e){const n=te(t),o=oe(t);return`
	.hexagon__outer {
    margin-top: ${n}vw;
    transition: all ${e}s;
    ${o}
  }
  `}function ae(t,e){return`
	.hexagon__outer:hover {
    transform: scale(${t}) rotate(${e}deg);
  }
  `}function ie(t,e){const n=ne(e);return`
	.hexagon__outer:nth-child(${t===1?"n":"-n"} + ${t===1?0:t}) {
      margin-top: 0;
  }

  .hexagon__outer:nth-child(${t===1?"":t*2-1}n + ${t===1?"":t+1}) {
      margin-left: ${n}vw;
  }
  `}function se(t,e,n){const o=100-n,r=k({width:o,unit:"%"});return`
	.hexagon__inner {
  background-color: ${t};
  color: ${e};
  ${r}
	}
	`}function v(t,e,n,o,r=""){return`
  @media (max-width: ${t}px) {
    ${r}
    .hexagon-wrapper__hexagon-container {
      width: ${(n-e)*o}vw;
    }

    /* reset */
    .hexagon__outer:nth-child(-n + ${n+1-e}) {
      margin-top: ${w(y*o/-4)}vw;
    }

    /* reset */
    .hexagon__outer:nth-child(${n*2-e*2+1}n + ${n+2-e}) {
        margin-left: 0;
    }

    .hexagon__outer:nth-child(${n-e<2?"n":"-n"} + ${n-e<2?0:n-e}) {
        margin-top: 0;
    }

    .hexagon__outer:nth-child(${n*2-e*2-1<3?0:n*2-e*2-1}n + ${n+1-e<3?0:n+1-e}) {
      margin-left: ${.5*o}vw;
    }
  }
`}function ce(t,e,n,o,r){let a="";return t-1>0&&(a+=v(n,1,t,e)),t-2>0&&(a+=v(o,2,t,e,`html {
      font-size: 50%;
      }
			`)),t-3>0&&(a+=v(r,3,t,e)),a}function le({backgroundColor:t,containerSkewX:e,containerSkewY:n,hexagonsFirstRow:o,hexagonColor:r,hexagonGap:a,hexagonRotation:s,hexagonScale:g,hexagonSize:l,hexagonTransition:d,mediaQuery_1:m,mediaQuery_2:_,mediaQuery_3:x,textColor:p}){const f=F(t),S=ee(o,l,e,n),E=re(l,d),C=ae(g,s),T=ie(o,l),H=se(r,p,a),I=ce(o,l,m,_,x);return f+S+E+C+T+H+I}class ue{constructor(e,n,o,r,a,s,g,l,d,m,_,x,p,f,S,E,C){this.btn=e,this.backgroundColor=n,this.containerSkewX=o,this.containerSkewY=r,this.hexagonColor=a,this.hexagonGap=s,this.hexagonRotation=g,this.hexagonScale=l,this.hexagonsFirstRow=d,this.hexagonSize=m,this.hexagonTransition=_,this.mediaQuery_1=x,this.mediaQuery_2=p,this.mediaQuery_3=f,this.textColor=S,this.dialogElement=E,this.dialogTextElement=C,this.attachClickHandler()}attachClickHandler(){this.btn.addEventListener("click",()=>{this.dialogElement.open||(this.dialogTextElement.innerText=le({backgroundColor:this.backgroundColor.value,containerSkewX:Number(this.containerSkewX.value),containerSkewY:Number(this.containerSkewY.value),hexagonsFirstRow:Number(this.hexagonsFirstRow.value),hexagonColor:this.hexagonColor.value,hexagonGap:Number(this.hexagonGap.value),hexagonRotation:Number(this.hexagonRotation.value),hexagonScale:Number(this.hexagonScale.value),hexagonSize:Number(this.hexagonSize.value),hexagonTransition:Number(this.hexagonTransition.value),mediaQuery_1:Number(this.mediaQuery_1.value),mediaQuery_2:Number(this.mediaQuery_2.value),mediaQuery_3:Number(this.mediaQuery_3.value),textColor:this.textColor.value}),this.dialogElement.showModal())})}}function h(t,e){const n=document.createElement("div"),o=document.createElement("div");return n.classList.add("hexagon__outer"),e&&n.classList.add(e),o.classList.add("hexagon__inner"),o.innerText=t,n.appendChild(o),n}function he(t,e){const n=document.createDocumentFragment();if(t<1||e<1)return null;if(t===1&&e===1)return h(String(1));if(e<=t)return Array(e).fill(0).forEach((a,s)=>n.appendChild(h(String(s+1)))),n;if(t===1)return Array(e).fill(0).forEach((a,s)=>n.appendChild(h(String(s+1),"first-row__margin-top"))),n;Array(t).fill(0).forEach((a,s)=>{n.appendChild(h(String(s+1),"first-row__margin-top"))});let o=0,r=t+1;for(;o<e-t;)o===0||o%((t-1)*2+1)===0?n.appendChild(h(String(r),"even-rows__margin-left")):n.appendChild(h(String(r))),r++,o++;return n}class ge{constructor(e,n,o){this.hexagonContainer=e,this.numberOfHexagonsElement=n,this.hexagonsFirstRowElement=o}generate(){this.hexagonContainer.innerHTML="";const e=he(Number(this.hexagonsFirstRowElement.value),Number(this.numberOfHexagonsElement.value));e&&this.hexagonContainer.appendChild(e)}}function de(t){return`<div class="hexagon__outer">
	  <div class="hexagon__inner">${t}</div>
	</div>
  `}function me(t){let e="";return Array(t).fill(0).forEach((n,o)=>{e+=de(o+1)}),e}function _e(t){return`
    <div class="hexagon-wrapper">
		  <div class="hexagon-wrapper__hexagon-container">
			
		    ${t}
		  </div>
		</div>
    `}function xe({numberOfHexagons:t}){const e=me(t);return _e(e)}class pe{constructor(e,n,o,r){this.btn=e,this.numberOfHexagonsElement=n,this.dialogElement=o,this.dialogTextElement=r,this.attachClickHandler()}attachClickHandler(){this.btn.addEventListener("click",()=>{this.dialogElement.open||(this.dialogTextElement.innerText=xe({numberOfHexagons:Number(this.numberOfHexagonsElement.value)}),this.dialogElement.showModal())})}}class N{constructor(e){this.element=e}get valueAsNumber(){return Number(this.element.value)}get valueAsString(){return String(this.element.value)}}class fe{constructor(e,n){u(this,"root",document.documentElement);u(this,"input");this.inputElement=e,this.generateHexagonSection=n,this.input=new N(e),this.attachInputHandler()}changeRoot(e){this.root.style.setProperty("--number-of-hexagons-first-row",String(e))}attachInputHandler(){this.input.element.oninput=()=>{this.changeRoot(this.input.valueAsNumber),this.generateHexagonSection()}}}class c{constructor(e,n,o=""){u(this,"root",document.documentElement);u(this,"input");this.inputElement=e,this.rootElementName=n,this.postFix=o,this.input=new N(e),this.attachInputHandler()}changeRoot(e,n){this.root.style.setProperty(e,n)}attachInputHandler(){this.input.element.oninput=()=>{this.changeRoot(this.rootElementName,this.input.valueAsString+this.postFix)}}}class Se extends c{constructor(e,n,o=""){super(e,n,o)}attachInputHandler(){this.input.element.oninput=()=>{this.changeRoot(this.rootElementName,100-this.input.valueAsNumber+this.postFix)}}}class Ee{constructor(e,n){u(this,"input");this.inputElement=e,this.generateHexagonSection=n,this.input=new N(e),this.attachInputHandler()}attachInputHandler(){this.input.element.oninput=()=>this.generateHexagonSection()}}function Ce(t,e){if(t==null)throw Error(e)}function Te(t){return`HTMLElement #${t} not found!`}function i(t){const e=document.getElementById(t),n=Te(t);return Ce(e,n),e}const He="cssBtn",Ie="htmlBtn",ve="hexagon__container",D="numberOfHexagons",L="hexagon-first-row",we="bg-color",ye="hexagon-color",Ne="hexagon-size",Oe="media-query--1",be="media-query--2",Ae="media-query--3",$e="text-color",De="container-skew-X",Le="container-skew-Y",ke="hexagon-rotation",Ge="hexagon-transition",Me="hexagon-scale",Xe="hexagon-gap",Qe="dialog",Be="dialog__close-btn",Pe="dialog__text";function Ye(){const t=i(D),e=i(L),n=i(we),o=i(ye),r=i($e),a=i(Ne),s=i(De),g=i(Le),l=i(ke),d=i(Ge),m=i(Me),_=i(Xe),x=i(Oe),p=i(be),f=i(Ae),S=i(He),E=i(Ie),C=i(ve),T=i(D),H=i(L),I=i(Qe),$=i(Be),V=i(Pe);return{numberOfHexagons:t,hexagonsFirstRow:e,backgroundColor:n,hexagonColor:o,textColor:r,hexagonSize:a,containerSkewX:s,containerSkewY:g,hexagonRotation:l,hexagonTransition:d,hexagonScale:m,hexagonGap:_,mediaQuery_1:x,mediaQuery_2:p,mediaQuery_3:f,cssBtn:S,htmlBtn:E,hexagonContainer:C,numberOfHexagonsElement:T,hexagonsFirstRowElement:H,dialogElement:I,dialogCloseBtn:$,dialogText:V}}const Re="%",O="deg",We="vw",qe="s";console.info("🚀 Running the app!");const{numberOfHexagons:Ue,hexagonsFirstRow:G,backgroundColor:M,hexagonColor:X,textColor:Q,hexagonSize:B,containerSkewX:P,containerSkewY:Y,hexagonRotation:R,hexagonTransition:W,hexagonScale:q,hexagonGap:U,mediaQuery_1:Ke,mediaQuery_2:je,mediaQuery_3:Ve,htmlBtn:Ze,cssBtn:Je,hexagonContainer:ze,hexagonsFirstRowElement:Fe,numberOfHexagonsElement:K,dialogElement:b,dialogCloseBtn:et,dialogText:j}=Ye();function A(){const t=new ge(ze,K,Fe);return function(){t.generate()}}A()();new fe(G,A());new Ee(Ue,A());new c(M,"--color-bg");new c(X,"--color-inner-hexagon");new c(Q,"--color-text");new c(B,"--width-hexagon-outer",We);new c(P,"--skew-X",O);new c(Y,"--skew-Y",O);new c(R,"--hover-rotation",O);new c(W,"--hover-transition",qe);new c(q,"--hover-scale");new Se(U,"--size-hexagon-inner",Re);new pe(Ze,K,b,j);new ue(Je,M,P,Y,X,U,R,q,G,B,W,Ke,je,Ve,Q,b,j);new z(et,b);
