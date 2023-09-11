var Y=Object.defineProperty;var W=(n,e,t)=>e in n?Y(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var c=(n,e,t)=>(W(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();const N=1.1547005,b="css",w="html",H="cssBtn",$="htmlBtn",q="hexagon__container",D="numberOfHexagons",L="hexagon-first-row",U="bg-color",K="hexagon-color",V="hexagon-size",j="media-query--1",R="media-query--2",Z="media-query--3",J="text-color",z="container-skew-X",F="container-skew-Y",ee="hexagon-rotation",ne="hexagon-transition",te="hexagon-scale",re="hexagon-gap",p="visible",d="hidden",oe="%",y="deg",ie="vw",ae="s";function ue(n,e){if(n==null)throw Error(e)}function se(n){return`HTMLElement #${n} not found!`}function O(n){return+(Math.round(parseFloat(n+"e2"))+"e-2")}function s(n){const e=document.getElementById(n),t=se(n);return ue(e,t),e}function h(n,e){const t=document.createElement("div"),r=document.createElement("div");return t.classList.add("hexagon__outer"),e&&t.classList.add(e),r.classList.add("hexagon__inner"),r.innerText=n,t.appendChild(r),t}function ce(n,e){const t=document.createDocumentFragment();if(n<1||e<1)return null;if(n===1&&e===1)return h(String(1));if(e<=n)return Array(e).fill(0).forEach((i,a)=>t.appendChild(h(String(a+1)))),t;if(n===1)return Array(e).fill(0).forEach((i,a)=>t.appendChild(h(String(a+1),"first-row__margin-top"))),t;Array(n).fill(0).forEach((i,a)=>{t.appendChild(h(String(a+1),"first-row__margin-top"))});let r=0,o=n+1;for(;r<e-n;)r===0||r%((n-1)*2+1)===0?t.appendChild(h(String(o),"even-rows__margin-left")):t.appendChild(h(String(o))),o++,r++;return t}function M(){const n=s(q),e=s(D),t=s(L);n.innerHTML="";const r=ce(Number(t.value),Number(e.value));r&&n.appendChild(r)}class g{constructor(e){c(this,"element");this.id=e,this.element=s(this.id)}get valueAsNumber(){return Number(this.element.value)}get valueAsString(){return String(this.element.value)}runMain(){M()}}class le{constructor(e){c(this,"root",document.documentElement);c(this,"input");this.hexagonFirstRowId=e,this.input=new g(e),this.init()}changeRoot(e){this.root.style.setProperty("--number-of-hexagons-first-row",String(e))}updateOnInput(){this.input.element.oninput=()=>{this.changeRoot(this.input.valueAsNumber),this.input.runMain()}}init(){this.updateOnInput()}}class u{constructor(e,t,r=""){c(this,"root",document.documentElement);c(this,"input");this.id=e,this.rootElementName=t,this.postFix=r,this.input=new g(e),this.init()}changeRoot(e,t){this.root.style.setProperty(e,t)}updateOnInput(){this.input.element.oninput=()=>{this.changeRoot(this.rootElementName,this.input.valueAsString+this.postFix),this.input.runMain()}}init(){this.updateOnInput()}}class he extends u{constructor(e,t,r=""){super(e,t,r)}updateOnInput(){this.input.element.oninput=()=>{this.changeRoot(this.rootElementName,100-this.input.valueAsNumber+this.postFix),this.input.runMain()}}}class C{constructor(e){c(this,"input");this.id=e,this.input=new g(e),this.init()}updateOnInput(){this.input.element.oninput=()=>this.input.runMain()}init(){this.updateOnInput()}}class pe{constructor(e){c(this,"input");this.numberOfHexagonsId=e,this.input=new g(e),this.init()}updateOnInput(){this.input.element.oninput=()=>this.input.runMain()}init(){this.updateOnInput()}}function de(n){return`.hexagon-wrapper {
  background-color: ${n};
  display: flex;
  justify-content: center;
  align-items: center;
  }
  `}function ge(n,e,t,r){return`
  .hexagon-wrapper__hexagon-container {
    width: ${n*e}vw;
    display: flex;
    flex-wrap: wrap;
    transform: skew(${t}deg, ${r}deg);
  }
  `}function X(n,e=n){return`-webkit-clip-path: polygon(
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
width: ${n}%;
height: ${e}%;
display: flex;
justify-content: center;
align-items: center;`}function _e(n){return O(N*n/-4)}function me(n){return .5*n}function fe(n){const e=O(N*n);return X(n,e)}function Se(n,e){const t=_e(n),r=fe(n);return`
	.hexagon__outer {
    margin-top: ${t}vw;
    transition: all ${e}s;
    ${r}
  }
  `}function xe(n,e){return`
	.hexagon__outer:hover {
    transform: scale(${n}) rotate(${e}deg);
  }
  `}function Ie(n,e){const t=me(e);return`
	.hexagon__outer:nth-child(${n===1?"n":"-n"} + ${n===1?0:n}) {
      margin-top: 0;
  }

  .hexagon__outer:nth-child(${n===1?"":n*2-1}n + ${n===1?"":n+1}) {
      margin-left: ${t}vw;
  }
  `}function Ee(n,e,t){const r=100-t,o=X(r);return`
	.hexagon__inner {
  background-color: ${n};
  color: ${e};
  ${o}
	}
	`}function A(n,e,t,r,o=""){return`
  @media (max-width: ${n}px) {
    ${o}
    .hexagon-wrapper__hexagon-container {
      width: ${(t-e)*r}vw;
    }

    /* reset */
    .hexagon__outer:nth-child(-n + ${t+1-e}) {
      margin-top: ${O(N*r/-4)}vw;
    }

    /* reset */
    .hexagon__outer:nth-child(${t*2-e*2+1}n + ${t+2-e}) {
        margin-left: 0;
    }

    .hexagon__outer:nth-child(${t-e<2?"n":"-n"} + ${t-e<2?0:t-e}) {
        margin-top: 0;
    }

    .hexagon__outer:nth-child(${t*2-e*2-1<3?0:t*2-e*2-1}n + ${t+1-e<3?0:t+1-e}) {
      margin-left: ${.5*r}vw;
    }
  }
`}function Te(n,e,t,r,o){let i="";return n-1>0&&(i+=A(t,1,n,e)),n-2>0&&(i+=A(r,2,n,e,`html {
      font-size: 50%;
      }
			`)),n-3>0&&(i+=A(o,3,n,e)),i}function ve({backgroundColor:n,containerSkewX:e,containerSkewY:t,hexagonsFirstRow:r,hexagonColor:o,hexagonGap:i,hexagonRotation:a,hexagonScale:_,hexagonSize:l,hexagonTransition:m,mediaQuery_1:f,mediaQuery_2:S,mediaQuery_3:x,textColor:I}){const E=de(n),T=ge(r,l,e,t),v=Se(l,m),G=xe(_,a),Q=Ie(r,l),B=Ee(o,I,i),P=Te(r,l,f,S,x);return E+T+v+G+Q+B+P}function ye(n){return`<div class="hexagon__outer">
	  <div class="hexagon__inner">${n}</div>
	</div>
  `}function Ce(n){let e="";return Array(n).fill(0).forEach((t,r)=>{e+=ye(r+1)}),e}function Ae(n){return`
    <div class="hexagon-wrapper">
		  <div class="hexagon-wrapper__hexagon-container">
			
		    ${n}
		  </div>
		</div>
    `}function Ne({numberOfHexagons:n}){const e=Ce(n);return Ae(e)}const Oe={numberOfHexagons:new pe(D),hexagonsFirstRow:new le(L),backgroundColor:new u(U,"--color-bg"),hexagonColor:new u(K,"--color-inner-hexagon"),textColor:new u(J,"--color-text"),hexagonSize:new u(V,"--width-hexagon-outer",ie),containerSkewX:new u(z,"--skew-X",y),containerSkewY:new u(F,"--skew-Y",y),hexagonRotation:new u(ee,"--hover-rotation",y),hexagonTransition:new u(ne,"--hover-transition",ae),hexagonScale:new u(te,"--hover-scale"),hexagonGap:new he(re,"--size-hexagon-inner",oe),mediaQuery_1:new C(j),mediaQuery_2:new C(R),mediaQuery_3:new C(Z)};function k(n){s(n).addEventListener("click",()=>we(n))}function be(){const n=s(b),e=s(w),{backgroundColor:t,containerSkewX:r,containerSkewY:o,hexagonsFirstRow:i,hexagonColor:a,hexagonGap:_,hexagonRotation:l,hexagonScale:m,hexagonSize:f,hexagonTransition:S,mediaQuery_1:x,mediaQuery_2:I,mediaQuery_3:E,numberOfHexagons:T,textColor:v}=Oe;e.innerText=Ne({numberOfHexagons:T.input.valueAsNumber}),n.innerText=ve({backgroundColor:t.input.valueAsString,containerSkewX:r.input.valueAsNumber,containerSkewY:o.input.valueAsNumber,hexagonsFirstRow:i.input.valueAsNumber,hexagonColor:a.input.valueAsString,hexagonGap:_.input.valueAsNumber,hexagonRotation:l.input.valueAsNumber,hexagonScale:m.input.valueAsNumber,hexagonSize:f.input.valueAsNumber,hexagonTransition:S.input.valueAsNumber,mediaQuery_1:x.input.valueAsNumber,mediaQuery_2:I.input.valueAsNumber,mediaQuery_3:E.input.valueAsNumber,textColor:v.input.valueAsString})}function we(n){be();const e=s(b),t=s(w);switch(n){case H:t.style.visibility=d,e.style.visibility=e.style.visibility===p?d:p;break;case $:e.style.visibility=d,t.style.visibility=t.style.visibility===p?d:p;break}}console.info("🚀 Running the app!");M();k(H);k($);
