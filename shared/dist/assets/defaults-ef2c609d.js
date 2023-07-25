import{d as Pe,i as J,w as Gn,s as Ee,z as _e,r as wt,A as Ce,B as Ie}from"./index-abac9e88.js";function wn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?wn(Object(e),!0).forEach(function(a){_(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):wn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Tt(t){"@babel/helpers - typeof";return Tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Tt(t)}function Ne(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function xn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Te(t,n,e){return n&&xn(t.prototype,n),e&&xn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function _(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function rn(t,n){return Re(t)||ze(t,n)||Xn(t,n)||De()}function gt(t){return Me(t)||je(t)||Xn(t)||Le()}function Me(t){if(Array.isArray(t))return Vt(t)}function Re(t){if(Array.isArray(t))return t}function je(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ze(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function Xn(t,n){if(t){if(typeof t=="string")return Vt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Vt(t,n)}}function Vt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Le(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var kn=function(){},on={},Kn={},qn=null,Jn={mark:kn,measure:kn};try{typeof window<"u"&&(on=window),typeof document<"u"&&(Kn=document),typeof MutationObserver<"u"&&(qn=MutationObserver),typeof performance<"u"&&(Jn=performance)}catch{}var Fe=on.navigator||{},An=Fe.userAgent,On=An===void 0?"":An,U=on,O=Kn,Sn=qn,xt=Jn;U.document;var $=!!O.documentElement&&!!O.head&&typeof O.addEventListener=="function"&&typeof O.createElement=="function",Qn=~On.indexOf("MSIE")||~On.indexOf("Trident/"),kt,At,Ot,St,Pt,D="___FONT_AWESOME___",Gt=16,Zn="fa",te="svg-inline--fa",X="data-fa-i2svg",Xt="data-fa-pseudo-element",Ye="data-fa-pseudo-element-pending",sn="data-prefix",fn="data-icon",Pn="fontawesome-i2svg",$e="async",Be=["HTML","HEAD","STYLE","SCRIPT"],ne=function(){try{return!0}catch{return!1}}(),A="classic",P="sharp",ln=[A,P];function bt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[A]}})}var ut=bt((kt={},_(kt,A,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),_(kt,P,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),kt)),ct=bt((At={},_(At,A,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),_(At,P,{solid:"fass",regular:"fasr",light:"fasl"}),At)),mt=bt((Ot={},_(Ot,A,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),_(Ot,P,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ot)),Ue=bt((St={},_(St,A,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),_(St,P,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),St)),He=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,ee="fa-layers-text",We=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ve=bt((Pt={},_(Pt,A,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),_(Pt,P,{900:"fass",400:"fasr",300:"fasl"}),Pt)),ae=[1,2,3,4,5,6,7,8,9,10],Ge=ae.concat([11,12,13,14,15,16,17,18,19,20]),Xe=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],V={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},dt=new Set;Object.keys(ct[A]).map(dt.add.bind(dt));Object.keys(ct[P]).map(dt.add.bind(dt));var Ke=[].concat(ln,gt(dt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",V.GROUP,V.SWAP_OPACITY,V.PRIMARY,V.SECONDARY]).concat(ae.map(function(t){return"".concat(t,"x")})).concat(Ge.map(function(t){return"w-".concat(t)})),ft=U.FontAwesomeConfig||{};function qe(t){var n=O.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Je(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(O&&typeof O.querySelector=="function"){var Qe=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Qe.forEach(function(t){var n=rn(t,2),e=n[0],a=n[1],r=Je(qe(e));r!=null&&(ft[a]=r)})}var re={styleDefault:"solid",familyDefault:"classic",cssPrefix:Zn,replacementClass:te,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ft.familyPrefix&&(ft.cssPrefix=ft.familyPrefix);var et=c(c({},re),ft);et.autoReplaceSvg||(et.observeMutations=!1);var v={};Object.keys(re).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(e){et[t]=e,lt.forEach(function(a){return a(v)})},get:function(){return et[t]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(n){et.cssPrefix=n,lt.forEach(function(e){return e(v)})},get:function(){return et.cssPrefix}});U.FontAwesomeConfig=v;var lt=[];function Ze(t){return lt.push(t),function(){lt.splice(lt.indexOf(t),1)}}var B=Gt,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ta(t){if(!(!t||!$)){var n=O.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=O.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return O.head.insertBefore(n,a),t}}var na="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vt(){for(var t=12,n="";t-- >0;)n+=na[Math.random()*62|0];return n}function at(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function un(t){return t.classList?at(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function ie(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ea(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(ie(t[e]),'" ')},"").trim()}function zt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function cn(t){return t.size!==j.size||t.x!==j.x||t.y!==j.y||t.rotate!==j.rotate||t.flipX||t.flipY}function aa(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:u}}function ra(t){var n=t.transform,e=t.width,a=e===void 0?Gt:e,r=t.height,i=r===void 0?Gt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Qn?f+="translate(".concat(n.x/B-a/2,"em, ").concat(n.y/B-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/B,"em), calc(-50% + ").concat(n.y/B,"em)) "):f+="translate(".concat(n.x/B,"em, ").concat(n.y/B,"em) "),f+="scale(".concat(n.size/B*(n.flipX?-1:1),", ").concat(n.size/B*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var ia=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function oe(){var t=Zn,n=te,e=v.cssPrefix,a=v.replacementClass,r=ia;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var En=!1;function $t(){v.autoAddCss&&!En&&(ta(oe()),En=!0)}var oa={mixout:function(){return{dom:{css:oe,insertCss:$t}}},hooks:function(){return{beforeDOMElementCreation:function(){$t()},beforeI2svg:function(){$t()}}}},F=U||{};F[D]||(F[D]={});F[D].styles||(F[D].styles={});F[D].hooks||(F[D].hooks={});F[D].shims||(F[D].shims=[]);var R=F[D],se=[],sa=function t(){O.removeEventListener("DOMContentLoaded",t),Mt=1,se.map(function(n){return n()})},Mt=!1;$&&(Mt=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),Mt||O.addEventListener("DOMContentLoaded",sa));function fa(t){$&&(Mt?setTimeout(t,0):se.push(t))}function pt(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?ie(t):"<".concat(n," ").concat(ea(a),">").concat(i.map(pt).join(""),"</").concat(n,">")}function _n(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var la=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},Bt=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?la(e,r):e,f,u,l;for(a===void 0?(f=1,l=n[i[0]]):(f=0,l=a);f<o;f++)u=i[f],l=s(l,n[u],u,n);return l};function ua(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Kt(t){var n=ua(t);return n.length===1?n[0].toString(16):null}function ca(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Cn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function qt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=Cn(n);typeof R.hooks.addPack=="function"&&!r?R.hooks.addPack(t,Cn(n)):R.styles[t]=c(c({},R.styles[t]||{}),i),t==="fas"&&qt("fa",n)}var Et,_t,Ct,Z=R.styles,ma=R.shims,da=(Et={},_(Et,A,Object.values(mt[A])),_(Et,P,Object.values(mt[P])),Et),mn=null,fe={},le={},ue={},ce={},me={},va=(_t={},_(_t,A,Object.keys(ut[A])),_(_t,P,Object.keys(ut[P])),_t);function ga(t){return~Ke.indexOf(t)}function ba(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!ga(r)?r:null}var de=function(){var n=function(i){return Bt(Z,function(o,s,f){return o[f]=Bt(s,i,{}),o},{})};fe=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),le=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),me=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in Z||v.autoFetchSvg,a=Bt(ma,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});ue=a.names,ce=a.unicodes,mn=Lt(v.styleDefault,{family:v.familyDefault})};Ze(function(t){mn=Lt(t.styleDefault,{family:v.familyDefault})});de();function dn(t,n){return(fe[t]||{})[n]}function pa(t,n){return(le[t]||{})[n]}function G(t,n){return(me[t]||{})[n]}function ve(t){return ue[t]||{prefix:null,iconName:null}}function ha(t){var n=ce[t],e=dn("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function H(){return mn}var vn=function(){return{prefix:null,iconName:null,rest:[]}};function Lt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?A:e,r=ut[a][t],i=ct[a][t]||ct[a][r],o=t in R.styles?t:null;return i||o||null}var In=(Ct={},_(Ct,A,Object.keys(mt[A])),_(Ct,P,Object.keys(mt[P])),Ct);function Dt(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},_(n,A,"".concat(v.cssPrefix,"-").concat(A)),_(n,P,"".concat(v.cssPrefix,"-").concat(P)),n),o=null,s=A;(t.includes(i[A])||t.some(function(u){return In[A].includes(u)}))&&(s=A),(t.includes(i[P])||t.some(function(u){return In[P].includes(u)}))&&(s=P);var f=t.reduce(function(u,l){var m=ba(v.cssPrefix,l);if(Z[l]?(l=da[s].includes(l)?Ue[s][l]:l,o=l,u.prefix=l):va[s].indexOf(l)>-1?(o=l,u.prefix=Lt(l,{family:s})):m?u.iconName=m:l!==v.replacementClass&&l!==i[A]&&l!==i[P]&&u.rest.push(l),!r&&u.prefix&&u.iconName){var d=o==="fa"?ve(u.iconName):{},h=G(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||h||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Z.far&&Z.fas&&!v.autoFetchSvg&&(u.prefix="fas")}return u},vn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===P&&(Z.fass||v.autoFetchSvg)&&(f.prefix="fass",f.iconName=G(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=H()||"fas"),f}var ya=function(){function t(){Ne(this,t),this.definitions={}}return Te(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=c(c({},e.definitions[s]||{}),o[s]),qt(s,o[s]);var f=mt[A][s];f&&qt(f,o[s]),de()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,u=o.icon,l=u[2];e[s]||(e[s]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(e[s][m]=u)}),e[s][f]=u}),e}}]),t}(),Nn=[],tt={},nt={},wa=Object.keys(nt);function xa(t,n){var e=n.mixoutsTo;return Nn=t,tt={},Object.keys(nt).forEach(function(a){wa.indexOf(a)===-1&&delete nt[a]}),Nn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),Tt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){tt[o]||(tt[o]=[]),tt[o].push(i[o])})}a.provides&&a.provides(nt)}),e}function Jt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=tt[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function K(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=tt[t]||[];r.forEach(function(i){i.apply(null,e)})}function Y(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return nt[t]?nt[t].apply(null,n):void 0}function Qt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||H();if(n)return n=G(e,n)||n,_n(ge.definitions,e,n)||_n(R.styles,e,n)}var ge=new ya,ka=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,K("noAuto")},Aa={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $?(K("beforeI2svg",n),Y("pseudoElements2svg",n),Y("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,fa(function(){Sa({autoReplaceSvgRoot:e}),K("watch",n)})}},Oa={icon:function(n){if(n===null)return null;if(Tt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:G(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Lt(n[0]);return{prefix:a,iconName:G(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(v.cssPrefix,"-"))>-1||n.match(He))){var r=Dt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:G(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=H();return{prefix:i,iconName:G(i,n)||n}}}},T={noAuto:ka,config:v,dom:Aa,parse:Oa,library:ge,findIconDefinition:Qt,toHtml:pt},Sa=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?O:e;(Object.keys(R.styles).length>0||v.autoFetchSvg)&&$&&v.autoReplaceSvg&&T.dom.i2svg({node:a})};function Ft(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return pt(a)})}}),Object.defineProperty(t,"node",{get:function(){if($){var a=O.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Pa(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(cn(o)&&e.found&&!a.found){var s=e.width,f=e.height,u={x:s/f/2,y:.5};r.style=zt(c(c({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Ea(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(v.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:a}]}]}function gn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,u=t.maskId,l=t.titleId,m=t.extra,d=t.watchable,h=d===void 0?!1:d,k=a.found?a:e,S=k.width,C=k.height,g=r==="fak",p=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(M){return m.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(m.classes).join(" "),x={children:[],attributes:c(c({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:p,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(C)})},w=g&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/C*16*.0625,"em")}:{};h&&(x.attributes[X]=""),f&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(l||vt())},children:[f]}),delete x.attributes.title);var b=c(c({},x),{},{prefix:r,iconName:i,main:e,mask:a,maskId:u,transform:o,symbol:s,styles:c(c({},w),m.styles)}),E=a.found&&e.found?Y("generateAbstractMask",b)||{children:[],attributes:{}}:Y("generateAbstractIcon",b)||{children:[],attributes:{}},y=E.children,z=E.attributes;return b.children=y,b.attributes=z,s?Ea(b):Pa(b)}function Tn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,u=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(u[X]="");var l=c({},o.styles);cn(r)&&(l.transform=ra({transform:r,startCentered:!0,width:e,height:a}),l["-webkit-transform"]=l.transform);var m=zt(l);m.length>0&&(u.style=m);var d=[];return d.push({tag:"span",attributes:u,children:[n]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function _a(t){var n=t.content,e=t.title,a=t.extra,r=c(c(c({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=zt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Ut=R.styles;function Zt(t){var n=t[0],e=t[1],a=t.slice(4),r=rn(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(V.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(V.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(V.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var Ca={found:!1,width:512,height:512};function Ia(t,n){!ne&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function tn(t,n){var e=n;return n==="fa"&&v.styleDefault!==null&&(n=H()),new Promise(function(a,r){if(Y("missingIconAbstract"),e==="fa"){var i=ve(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Ut[n]&&Ut[n][t]){var o=Ut[n][t];return a(Zt(o))}Ia(t,n),a(c(c({},Ca),{},{icon:v.showMissingIcons&&t?Y("missingIconAbstract")||{}:{}}))})}var Mn=function(){},nn=v.measurePerformance&&xt&&xt.mark&&xt.measure?xt:{mark:Mn,measure:Mn},st='FA "6.4.0"',Na=function(n){return nn.mark("".concat(st," ").concat(n," begins")),function(){return be(n)}},be=function(n){nn.mark("".concat(st," ").concat(n," ends")),nn.measure("".concat(st," ").concat(n),"".concat(st," ").concat(n," begins"),"".concat(st," ").concat(n," ends"))},bn={begin:Na,end:be},It=function(){};function Rn(t){var n=t.getAttribute?t.getAttribute(X):null;return typeof n=="string"}function Ta(t){var n=t.getAttribute?t.getAttribute(sn):null,e=t.getAttribute?t.getAttribute(fn):null;return n&&e}function Ma(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function Ra(){if(v.autoReplaceSvg===!0)return Nt.replace;var t=Nt[v.autoReplaceSvg];return t||Nt.replace}function ja(t){return O.createElementNS("http://www.w3.org/2000/svg",t)}function za(t){return O.createElement(t)}function pe(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?ja:za:e;if(typeof t=="string")return O.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(pe(o,{ceFn:a}))}),r}function La(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Nt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(pe(r),e)}),e.getAttribute(X)===null&&v.keepOriginalSource){var a=O.createComment(La(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~un(e).indexOf(v.replacementClass))return Nt.replace(n);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===v.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return pt(s)}).join(`
`);e.setAttribute(X,""),e.innerHTML=o}};function jn(t){t()}function he(t,n){var e=typeof n=="function"?n:It;if(t.length===0)e();else{var a=jn;v.mutateApproach===$e&&(a=U.requestAnimationFrame||jn),a(function(){var r=Ra(),i=bn.begin("mutate");t.map(r),i(),e()})}}var pn=!1;function ye(){pn=!0}function en(){pn=!1}var Rt=null;function zn(t){if(Sn&&v.observeMutations){var n=t.treeCallback,e=n===void 0?It:n,a=t.nodeCallback,r=a===void 0?It:a,i=t.pseudoElementsCallback,o=i===void 0?It:i,s=t.observeMutationsRoot,f=s===void 0?O:s;Rt=new Sn(function(u){if(!pn){var l=H();at(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Rn(m.addedNodes[0])&&(v.searchPseudoElements&&o(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&v.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Rn(m.target)&&~Xe.indexOf(m.attributeName))if(m.attributeName==="class"&&Ta(m.target)){var d=Dt(un(m.target)),h=d.prefix,k=d.iconName;m.target.setAttribute(sn,h||l),k&&m.target.setAttribute(fn,k)}else Ma(m.target)&&r(m.target)})}}),$&&Rt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Da(){Rt&&Rt.disconnect()}function Fa(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function Ya(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Dt(un(t));return r.prefix||(r.prefix=H()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=pa(r.prefix,t.innerText)||dn(r.prefix,Kt(t.innerText))),!r.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function $a(t){var n=at(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return v.autoA11y&&(e?n["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||vt()):(n["aria-hidden"]="true",n.focusable="false")),n}function Ba(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ln(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Ya(t),a=e.iconName,r=e.prefix,i=e.rest,o=$a(t),s=Jt("parseNodeAttributes",{},t),f=n.styleParser?Fa(t):[];return c({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Ua=R.styles;function we(t){var n=v.autoReplaceSvg==="nest"?Ln(t,{styleParser:!1}):Ln(t);return~n.extra.classes.indexOf(ee)?Y("generateLayersText",t,n):Y("generateSvgReplacementMutation",t,n)}var W=new Set;ln.map(function(t){W.add("fa-".concat(t))});Object.keys(ut[A]).map(W.add.bind(W));Object.keys(ut[P]).map(W.add.bind(W));W=gt(W);function Dn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$)return Promise.resolve();var e=O.documentElement.classList,a=function(m){return e.add("".concat(Pn,"-").concat(m))},r=function(m){return e.remove("".concat(Pn,"-").concat(m))},i=v.autoFetchSvg?W:ln.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Ua));i.includes("fa")||i.push("fa");var o=[".".concat(ee,":not([").concat(X,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(X,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=at(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=bn.begin("onTree"),u=s.reduce(function(l,m){try{var d=we(m);d&&l.push(d)}catch(h){ne||h.name==="MissingIcon"&&console.error(h)}return l},[]);return new Promise(function(l,m){Promise.all(u).then(function(d){he(d,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(d){f(),m(d)})})}function Ha(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;we(t).then(function(e){e&&he([e],n)})}function Wa(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Qt(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Qt(r||{})),t(a,c(c({},e),{},{mask:r}))}}var Va=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?j:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,u=e.maskId,l=u===void 0?null:u,m=e.title,d=m===void 0?null:m,h=e.titleId,k=h===void 0?null:h,S=e.classes,C=S===void 0?[]:S,g=e.attributes,p=g===void 0?{}:g,x=e.styles,w=x===void 0?{}:x;if(n){var b=n.prefix,E=n.iconName,y=n.icon;return Ft(c({type:"icon"},n),function(){return K("beforeDOMElementCreation",{iconDefinition:n,params:e}),v.autoA11y&&(d?p["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(k||vt()):(p["aria-hidden"]="true",p.focusable="false")),gn({icons:{main:Zt(y),mask:f?Zt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:E,transform:c(c({},j),r),symbol:o,title:d,maskId:l,titleId:k,extra:{attributes:p,styles:w,classes:C}})})}},Ga={mixout:function(){return{icon:Wa(Va)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Dn,e.nodeCallback=Ha,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?O:a,i=e.callback,o=i===void 0?function(){}:i;return Dn(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,u=a.symbol,l=a.mask,m=a.maskId,d=a.extra;return new Promise(function(h,k){Promise.all([tn(r,s),l.iconName?tn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var C=rn(S,2),g=C[0],p=C[1];h([e,gn({icons:{main:g,mask:p},prefix:s,iconName:r,transform:f,symbol:u,maskId:m,title:i,titleId:o,extra:d,watchable:!0})])}).catch(k)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=zt(s);f.length>0&&(r.style=f);var u;return cn(o)&&(u=Y("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},Xa={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Ft({type:"layer"},function(){K("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(gt(i)).join(" ")},children:o}]})}}}},Ka={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,u=f===void 0?{}:f,l=a.styles,m=l===void 0?{}:l;return Ft({type:"counter",content:e},function(){return K("beforeDOMElementCreation",{content:e,params:a}),_a({content:e.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(gt(s))}})})}}}},qa={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?j:r,o=a.title,s=o===void 0?null:o,f=a.classes,u=f===void 0?[]:f,l=a.attributes,m=l===void 0?{}:l,d=a.styles,h=d===void 0?{}:d;return Ft({type:"text",content:e},function(){return K("beforeDOMElementCreation",{content:e,params:a}),Tn({content:e,transform:c(c({},j),i),title:s,extra:{attributes:m,styles:h,classes:["".concat(v.cssPrefix,"-layers-text")].concat(gt(u))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Qn){var u=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/u,f=l.height/u}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Tn({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Ja=new RegExp('"',"ug"),Fn=[1105920,1112319];function Qa(t){var n=t.replace(Ja,""),e=ca(n,0),a=e>=Fn[0]&&e<=Fn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Kt(r?n[0]:n),isSecondary:a||r}}function Yn(t,n){var e="".concat(Ye).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=at(t.children),o=i.filter(function(y){return y.getAttribute(Xt)===n})[0],s=U.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(We),u=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&l!=="none"&&l!==""){var m=s.getPropertyValue("content"),d=~["Sharp"].indexOf(f[2])?P:A,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ct[d][f[2].toLowerCase()]:Ve[d][u],k=Qa(m),S=k.value,C=k.isSecondary,g=f[0].startsWith("FontAwesome"),p=dn(h,S),x=p;if(g){var w=ha(S);w.iconName&&w.prefix&&(p=w.iconName,h=w.prefix)}if(p&&!C&&(!o||o.getAttribute(sn)!==h||o.getAttribute(fn)!==x)){t.setAttribute(e,x),o&&t.removeChild(o);var b=Ba(),E=b.extra;E.attributes[Xt]=n,tn(p,h).then(function(y){var z=gn(c(c({},b),{},{icons:{main:y,mask:vn()},prefix:h,iconName:x,extra:E,watchable:!0})),M=O.createElement("svg");n==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=z.map(function(N){return pt(N)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function Za(t){return Promise.all([Yn(t,"::before"),Yn(t,"::after")])}function tr(t){return t.parentNode!==document.head&&!~Be.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Xt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function $n(t){if($)return new Promise(function(n,e){var a=at(t.querySelectorAll("*")).filter(tr).map(Za),r=bn.begin("searchPseudoElements");ye(),Promise.all(a).then(function(){r(),en(),n()}).catch(function(){r(),en(),e()})})}var nr={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=$n,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?O:a;v.searchPseudoElements&&$n(r)}}},Bn=!1,er={mixout:function(){return{dom:{unwatch:function(){ye(),Bn=!0}}}},hooks:function(){return{bootstrap:function(){zn(Jt("mutationObserverCallbacks",{}))},noAuto:function(){Da()},watch:function(e){var a=e.observeMutationsRoot;Bn?en():zn(Jt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Un=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},ar={mixout:function(){return{parse:{transform:function(e){return Un(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=Un(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(u," ").concat(l)},d={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:m,path:d};return{tag:"g",attributes:c({},h.outer),children:[{tag:"g",attributes:c({},h.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:c(c({},a.icon.attributes),h.path)}]}]}}}},Ht={x:0,y:0,width:"100%",height:"100%"};function Hn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function rr(t){return t.tag==="g"?t.children:[t]}var ir={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Dt(r.split(" ").map(function(o){return o.trim()})):vn();return i.prefix||(i.prefix=H()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,u=i.width,l=i.icon,m=o.width,d=o.icon,h=aa({transform:f,containerWidth:m,iconWidth:u}),k={tag:"rect",attributes:c(c({},Ht),{},{fill:"white"})},S=l.children?{children:l.children.map(Hn)}:{},C={tag:"g",attributes:c({},h.inner),children:[Hn(c({tag:l.tag,attributes:c(c({},l.attributes),h.path)},S))]},g={tag:"g",attributes:c({},h.outer),children:[C]},p="mask-".concat(s||vt()),x="clip-".concat(s||vt()),w={tag:"mask",attributes:c(c({},Ht),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,g]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:rr(d)},w]};return a.push(b,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(p,")")},Ht)}),{children:a,attributes:r}}}},or={provides:function(n){var e=!1;U.matchMedia&&(e=U.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},sr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},fr=[oa,Ga,Xa,Ka,qa,nr,er,ar,ir,or,sr];xa(fr,{mixoutsTo:T});T.noAuto;T.config;var Ar=T.library;T.dom;var an=T.parse;T.findIconDefinition;T.toHtml;var lr=T.icon;T.layer;T.text;T.counter;var Or={prefix:"fas",iconName:"gamepad",icon:[640,512,[],"f11b","M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"]},Sr={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},Pr={prefix:"fas",iconName:"microphone",icon:[384,512,[],"f130","M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"]};function Wn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function L(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Wn(Object(e),!0).forEach(function(a){I(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Wn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function jt(t){"@babel/helpers - typeof";return jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},jt(t)}function I(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function ur(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function cr(t,n){if(t==null)return{};var e=ur(t,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}var mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xe={exports:{}};(function(t){(function(n){var e=function(g,p,x){if(!u(p)||m(p)||d(p)||h(p)||f(p))return p;var w,b=0,E=0;if(l(p))for(w=[],E=p.length;b<E;b++)w.push(e(g,p[b],x));else{w={};for(var y in p)Object.prototype.hasOwnProperty.call(p,y)&&(w[g(y,x)]=e(g,p[y],x))}return w},a=function(g,p){p=p||{};var x=p.separator||"_",w=p.split||/(?=[A-Z])/;return g.split(w).join(x)},r=function(g){return k(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(p,x){return x?x.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},i=function(g){var p=r(g);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(g,p){return a(g,p).toLowerCase()},s=Object.prototype.toString,f=function(g){return typeof g=="function"},u=function(g){return g===Object(g)},l=function(g){return s.call(g)=="[object Array]"},m=function(g){return s.call(g)=="[object Date]"},d=function(g){return s.call(g)=="[object RegExp]"},h=function(g){return s.call(g)=="[object Boolean]"},k=function(g){return g=g-0,g===g},S=function(g,p){var x=p&&"process"in p?p.process:p;return typeof x!="function"?g:function(w,b){return x(w,g,b)}},C={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(g,p){return e(S(r,p),g)},decamelizeKeys:function(g,p){return e(S(o,p),g,p)},pascalizeKeys:function(g,p){return e(S(i,p),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=C:n.humps=C})(mr)})(xe);var dr=xe.exports,vr=["class","style"];function gr(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=dr.camelize(e.slice(0,a)),i=e.slice(a+1).trim();return n[r]=i,n},{})}function br(t){return t.split(/\s+/).reduce(function(n,e){return n[e]=!0,n},{})}function ke(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return ke(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,u){var l=t.attributes[u];switch(u){case"class":f.class=br(l);break;case"style":f.style=gr(l);break;default:f.attrs[u]=l}return f},{attrs:{},class:{},style:{}});e.class;var i=e.style,o=i===void 0?{}:i,s=cr(e,vr);return Ee(t.tag,L(L(L({},n),{},{class:r.class,style:L(L({},r.style),o)},r.attrs),s),a)}var Ae=!1;try{Ae=!0}catch{}function pr(){if(!Ae&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Wt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?I({},t,n):{}}function hr(t){var n,e=(n={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},I(n,"fa-".concat(t.size),t.size!==null),I(n,"fa-rotate-".concat(t.rotation),t.rotation!==null),I(n,"fa-pull-".concat(t.pull),t.pull!==null),I(n,"fa-swap-opacity",t.swapOpacity),I(n,"fa-bounce",t.bounce),I(n,"fa-shake",t.shake),I(n,"fa-beat",t.beat),I(n,"fa-fade",t.fade),I(n,"fa-beat-fade",t.beatFade),I(n,"fa-flash",t.flash),I(n,"fa-spin-pulse",t.spinPulse),I(n,"fa-spin-reverse",t.spinReverse),n);return Object.keys(e).map(function(a){return e[a]?a:null}).filter(function(a){return a})}function Vn(t){if(t&&jt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(an.icon)return an.icon(t);if(t===null)return null;if(jt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Er=Pe({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(n){return[!0,!1,"horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(n,e){var a=e.attrs,r=J(function(){return Vn(n.icon)}),i=J(function(){return Wt("classes",hr(n))}),o=J(function(){return Wt("transform",typeof n.transform=="string"?an.transform(n.transform):n.transform)}),s=J(function(){return Wt("mask",Vn(n.mask))}),f=J(function(){return lr(r.value,L(L(L(L({},i.value),o.value),s.value),{},{symbol:n.symbol,title:n.title}))});Gn(f,function(l){if(!l)return pr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var u=J(function(){return f.value?ke(f.value.abstract[0],{},a):null});return function(){return u.value}}});function yr(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Oe={exports:{}};(function(t){var n=function(){function e(d,h){return h!=null&&d instanceof h}var a;try{a=Map}catch{a=function(){}}var r;try{r=Set}catch{r=function(){}}var i;try{i=Promise}catch{i=function(){}}function o(d,h,k,S,C){typeof h=="object"&&(k=h.depth,S=h.prototype,C=h.includeNonEnumerable,h=h.circular);var g=[],p=[],x=typeof Buffer<"u";typeof h>"u"&&(h=!0),typeof k>"u"&&(k=1/0);function w(b,E){if(b===null)return null;if(E===0)return b;var y,z;if(typeof b!="object")return b;if(e(b,a))y=new a;else if(e(b,r))y=new r;else if(e(b,i))y=new i(function(rt,it){b.then(function(ot){rt(w(ot,E-1))},function(ot){it(w(ot,E-1))})});else if(o.__isArray(b))y=[];else if(o.__isRegExp(b))y=new RegExp(b.source,m(b)),b.lastIndex&&(y.lastIndex=b.lastIndex);else if(o.__isDate(b))y=new Date(b.getTime());else{if(x&&Buffer.isBuffer(b))return Buffer.allocUnsafe?y=Buffer.allocUnsafe(b.length):y=new Buffer(b.length),b.copy(y),y;e(b,Error)?y=Object.create(b):typeof S>"u"?(z=Object.getPrototypeOf(b),y=Object.create(z)):(y=Object.create(S),z=S)}if(h){var M=g.indexOf(b);if(M!=-1)return p[M];g.push(b),p.push(y)}e(b,a)&&b.forEach(function(rt,it){var ot=w(it,E-1),Se=w(rt,E-1);y.set(ot,Se)}),e(b,r)&&b.forEach(function(rt){var it=w(rt,E-1);y.add(it)});for(var N in b){var Yt;z&&(Yt=Object.getOwnPropertyDescriptor(z,N)),!(Yt&&Yt.set==null)&&(y[N]=w(b[N],E-1))}if(Object.getOwnPropertySymbols)for(var hn=Object.getOwnPropertySymbols(b),N=0;N<hn.length;N++){var ht=hn[N],q=Object.getOwnPropertyDescriptor(b,ht);q&&!q.enumerable&&!C||(y[ht]=w(b[ht],E-1),q.enumerable||Object.defineProperty(y,ht,{enumerable:!1}))}if(C)for(var yn=Object.getOwnPropertyNames(b),N=0;N<yn.length;N++){var yt=yn[N],q=Object.getOwnPropertyDescriptor(b,yt);q&&q.enumerable||(y[yt]=w(b[yt],E-1),Object.defineProperty(y,yt,{enumerable:!1}))}return y}return w(d,k)}o.clonePrototype=function(h){if(h===null)return null;var k=function(){};return k.prototype=h,new k};function s(d){return Object.prototype.toString.call(d)}o.__objToStr=s;function f(d){return typeof d=="object"&&s(d)==="[object Date]"}o.__isDate=f;function u(d){return typeof d=="object"&&s(d)==="[object Array]"}o.__isArray=u;function l(d){return typeof d=="object"&&s(d)==="[object RegExp]"}o.__isRegExp=l;function m(d){var h="";return d.global&&(h+="g"),d.ignoreCase&&(h+="i"),d.multiline&&(h+="m"),h}return o.__getRegExpFlags=m,o}();t.exports&&(t.exports=n)})(Oe);var wr=Oe.exports;const Q=yr(wr);function _r(t,n,e={}){var a;return(a=xr(t,n,e))===null||a===void 0?void 0:a.reactiveReplicant}function xr(t,n,e){if(_e(t))return console.warn(`Tried to create a StaticReplicant using a reactive name (${t.value})`),null;e===void 0&&typeof n!="string"&&(e=n);let a=typeof n=="string"?nodecg.Replicant(t,n,e):nodecg.Replicant(t,e);const r=wt(Q(e==null?void 0:e.defaultValue)),i=wt(Q(e==null?void 0:e.defaultValue)),o=wt(!1),s=wt(!0);function f(){o.value=JSON.stringify(r.value)!==JSON.stringify(i.value)}Gn(r,f,{deep:!0});const u=(k,S)=>{i.value=Q(k),S||(o.value=!1),o.value?(f(),s.value=!o.value):(r.value=Q(i.value),s.value=!0)};a.on("change",u);function l(){a.value=r.value}function m(){r.value=Q(i.value)}function d(){r.value=Q(e==null?void 0:e.defaultValue)}return{reactiveReplicant:Ce({data:r,oldData:Ie(i),changed:o,save:l,revert:m,loadDefault:d}),listener:u}}const Cr={name:"",id:"",teamID:"",country:"",pronouns:"",social:{twitch:""},customData:{}},Ir={teams:[],customData:{},id:""},Nr={time:"00:00:00",state:"stopped",milliseconds:0,timestamp:0,teamFinishTimes:{}};export{Er as F,Or as a,Nr as b,Cr as c,Ir as d,Sr as e,Pr as f,Ar as l,_r as u};
