function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire7674;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire7674=o),(0,o.register)("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return n},set:function(e){return n=e},enumerable:!0,configurable:!0});var n,r=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)r.set(t[n],{baseUrl:e,path:t[n+1]})}}),o("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["aM4q3","index.79dafabd.js","j5xfa","icon-arrow-left.30f94de3.svg","luUv0","icon-arrow-right.e6109eac.svg"]'));var i="undefined"!=typeof window?window:{screen:{},navigator:{}},a=(i.matchMedia||function(){return{matches:!1}}).bind(i),s=!1,l=function(){};i.addEventListener&&i.addEventListener("p",l,{get passive(){return s=!0}}),i.removeEventListener&&i.removeEventListener("p",l,!1);var u=s,c="ontouchstart"in i,d="TouchEvent"in i;c||d&&a("(any-pointer: coarse)").matches,i.navigator.maxTouchPoints;var f=i.navigator.userAgent||"";a("(pointer: coarse)").matches&&/iPad|Macintosh/.test(f)&&(i.screen.width,i.screen.height),(a("(pointer: coarse)").matches||!a("(pointer: fine)").matches&&c)&&/Windows.*Firefox/.test(f),a("(any-pointer: fine)").matches||a("(any-hover: hover)").matches;var p={};p=new URL("icon-arrow-left.30f94de3.svg",import.meta.url).toString();var g={};g=new URL("icon-arrow-right.e6109eac.svg",import.meta.url).toString();const h="Next Item",v="Previous Item",m=document.querySelector(".myWork"),b=document.createElement("p"),y=document.querySelector("[data-slider-wrapper]"),w=document.querySelector("[data-slider]"),E=document.querySelectorAll("[data-slide]"),_=document.createElement("ul");let L=0,A=!1,S=null,x=null,R=null,T=null,H=null,M=!1,F=!1,N=null;_.className="myWork__BtnControls",_.insertAdjacentHTML("afterbegin",`<li>      
    <button type='button' class='btn__previous btn__slider' aria-label='Previous Item'>   
      <img src='${e(p)}' aria-hidden='true' alt=''>
    </button>
  </li>
  <li>
    <button type='button' class='btn__next btn__slider' aria-label='Next Item'>
      <img src='${e(g)}' aria-hidden='true' alt=''>
    </button>
  </li>`),m?.appendChild(_);const q=function(){let e=E[0].cloneNode(!0),t=E[1].cloneNode(!0),n=E[E.length-2].cloneNode(!0),r=E[E.length-1].cloneNode(!0);return w?.append(e,t),w?.prepend(n,r),document.querySelectorAll("[data-slide]")}();function k(){let e=w.getBoundingClientRect().width,t=parseFloat(getComputedStyle(w).gap),n=q[0].getBoundingClientRect().width+t;return[e,t,n]}function C(e){L=e;let[t,n,r]=k(),o=-n/2+r*e-(t-r)/2;w.style.transform=`translateX(${o>0?"-":""}${Math.abs(o)}px)`}function U(){let e=q[L];q.forEach(function(t){t.setAttribute("aria-hidden",`${e!==t}`)})}function X(){C(L)}function $(e){H!=h||(L>=R&&e?(w.style.transition="none",C(S)):e||(w.style.transition="transform 0.25s ease-in-out",C(++L))),H!=v||(L<=T&&e?(w.style.transition="none",C(x)):e||(w.style.transition="transform 0.25s ease-in-out",C(--L))),U()}function I(e,t){e>t?(H=h,$()):e<-t&&(H=v,$())}function O(e){!M&&e instanceof MouseEvent&&(M=!0,N=e.clientX),!F&&e instanceof TouchEvent&&(F=!0,N=e.changedTouches[0].pageX),w.style.cursor="grabbing"}function P(e){let t=k()[2]/2;if(M&&e instanceof MouseEvent){let n=e.clientX-N;M=!1,I(n,t)}if(F&&e instanceof TouchEvent){let n=e.changedTouches[0].pageX-N;F=!1,I(n,t)}w.style.cursor="grab"}document.querySelectorAll(".btn__slider").forEach(function(e){e.addEventListener("click",function(e){let t=e.target.closest(".btn__slider");t&&(H=t.getAttribute("aria-label"),$())})}),y.addEventListener("mousedown",O),y.addEventListener("mouseup",P),y.addEventListener("touchstart",O,!!u&&{capture:!1,passive:!0}),y.addEventListener("touchend",P,!!u&&{capture:!1,passive:!0}),w.addEventListener("transitionend",function(){$(!0),b.setAttribute("aria-live","polite"),b.setAttribute("aria-atomic","true"),b.setAttribute("class","sr-only"),b.textContent=`Item ${L-1} of ${E.length}`,m?.appendChild(b)}),window.addEventListener("load",function(){S=q.length-7,x=q.length-3,R=q.length-2,T=q.length-8,C(L=Math.floor((q.length-1)/2)),U()}),window.addEventListener("resize",function(){clearTimeout(A),A=setTimeout(X,300)}),window.addEventListener("keydown",function(e){e instanceof KeyboardEvent&&("ArrowRight"===e.key?(H=h,$()):"ArrowLeft"===e.key&&(H=v,$()))});
//# sourceMappingURL=index.79dafabd.js.map