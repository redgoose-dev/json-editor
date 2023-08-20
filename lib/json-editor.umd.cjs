var On=Object.defineProperty;var Sn=(g,y,N)=>y in g?On(g,y,{enumerable:!0,configurable:!0,writable:!0,value:N}):g[y]=N;var at=(g,y,N)=>(Sn(g,typeof y!="symbol"?y+"":y,N),N),Ft=(g,y,N)=>{if(!y.has(g))throw TypeError("Cannot "+N)};var b=(g,y,N)=>(Ft(g,y,"read from private field"),N?N.call(g):y.get(g)),v=(g,y,N)=>{if(y.has(g))throw TypeError("Cannot add the same private member more than once");y instanceof WeakSet?y.add(g):y.set(g,N)},I=(g,y,N,S)=>(Ft(g,y,"write to private field"),S?S.call(g,N):y.set(g,N),N);var h=(g,y,N)=>(Ft(g,y,"access private method"),N);(function(g,y){typeof exports=="object"&&typeof module<"u"?module.exports=y():typeof define=="function"&&define.amd?define(y):(g=typeof globalThis<"u"?globalThis:g||self,g.JsonEditor=y())})(this,function(){var G,K,bt,Ne,Ct,Ee,wt,ke,m,q,vt,Re,rt,Zt,z,At,Nt,Le,Et,Ae,X,Tt,V,ut,ot,Wt,x,O,ct,Gt,Y,lt,J,ft,Q,xt,tt,Ot,kt,Te,Rt,xe,Lt,Oe;"use strict";const g=document,y=window,N=g.documentElement,S=g.createElement.bind(g),Kt=S("div"),St=S("table"),Se=S("tbody"),qt=S("tr"),{isArray:ht,prototype:zt}=Array,{concat:_e,filter:_t,indexOf:Xt,map:Qt,push:Be,slice:te,some:Bt,splice:$e}=zt,Me=/^#(?:[\w-]|\\.|[^\x00-\xa0])*$/,Pe=/^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/,De=/<.+>/,He=/^\w+$/;function $t(t,e){const n=Ie(e);return!t||!n&&!U(e)&&!E(e)?[]:!n&&Pe.test(t)?e.getElementsByClassName(t.slice(1).replace(/\\/g,"")):!n&&He.test(t)?e.getElementsByTagName(t):e.querySelectorAll(t)}class dt{constructor(e,n){if(!e)return;if(Mt(e))return e;let i=e;if(A(e)){const s=n||g;if(i=Me.test(e)&&U(s)?s.getElementById(e.slice(1).replace(/\\/g,"")):De.test(e)?oe(e):Mt(s)?s.find(e):A(s)?o(s).find(e):$t(e,s),!i)return}else if(j(e))return this.ready(e);(i.nodeType||i===y)&&(i=[i]),this.length=i.length;for(let s=0,r=this.length;s<r;s++)this[s]=i[s]}init(e,n){return new dt(e,n)}}const c=dt.prototype,o=c.init;o.fn=o.prototype=c,c.length=0,c.splice=$e,typeof Symbol=="function"&&(c[Symbol.iterator]=zt[Symbol.iterator]);function Mt(t){return t instanceof dt}function F(t){return!!t&&t===t.window}function U(t){return!!t&&t.nodeType===9}function Ie(t){return!!t&&t.nodeType===11}function E(t){return!!t&&t.nodeType===1}function Ue(t){return!!t&&t.nodeType===3}function je(t){return typeof t=="boolean"}function j(t){return typeof t=="function"}function A(t){return typeof t=="string"}function T(t){return t===void 0}function it(t){return t===null}function ee(t){return!isNaN(parseFloat(t))&&isFinite(t)}function Pt(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}o.isWindow=F,o.isFunction=j,o.isArray=ht,o.isNumeric=ee,o.isPlainObject=Pt;function R(t,e,n){if(n){let i=t.length;for(;i--;)if(e.call(t[i],i,t[i])===!1)return t}else if(Pt(t)){const i=Object.keys(t);for(let s=0,r=i.length;s<r;s++){const u=i[s];if(e.call(t[u],u,t[u])===!1)return t}}else for(let i=0,s=t.length;i<s;i++)if(e.call(t[i],i,t[i])===!1)return t;return t}o.each=R,c.each=function(t){return R(this,t)},c.empty=function(){return this.each((t,e)=>{for(;e.firstChild;)e.removeChild(e.firstChild)})};function pt(...t){const e=je(t[0])?t.shift():!1,n=t.shift(),i=t.length;if(!n)return{};if(!i)return pt(e,o,n);for(let s=0;s<i;s++){const r=t[s];for(const u in r)e&&(ht(r[u])||Pt(r[u]))?((!n[u]||n[u].constructor!==r[u].constructor)&&(n[u]=new r[u].constructor),pt(e,n[u],r[u])):n[u]=r[u]}return n}o.extend=pt,c.extend=function(t){return pt(c,t)};const Ve=/\S+/g;function gt(t){return A(t)?t.match(Ve)||[]:[]}c.toggleClass=function(t,e){const n=gt(t),i=!T(e);return this.each((s,r)=>{E(r)&&R(n,(u,a)=>{i?e?r.classList.add(a):r.classList.remove(a):r.classList.toggle(a)})})},c.addClass=function(t){return this.toggleClass(t,!0)},c.removeAttr=function(t){const e=gt(t);return this.each((n,i)=>{E(i)&&R(e,(s,r)=>{i.removeAttribute(r)})})};function Ye(t,e){if(t){if(A(t)){if(arguments.length<2){if(!this[0]||!E(this[0]))return;const n=this[0].getAttribute(t);return it(n)?void 0:n}return T(e)?this:it(e)?this.removeAttr(t):this.each((n,i)=>{E(i)&&i.setAttribute(t,e)})}for(const n in t)this.attr(n,t[n]);return this}}c.attr=Ye,c.removeClass=function(t){return arguments.length?this.toggleClass(t,!1):this.attr("class","")},c.hasClass=function(t){return!!t&&Bt.call(this,e=>E(e)&&e.classList.contains(t))},c.get=function(t){return T(t)?te.call(this):(t=Number(t),this[t<0?t+this.length:t])},c.eq=function(t){return o(this.get(t))},c.first=function(){return this.eq(0)},c.last=function(){return this.eq(-1)};function Je(t){return T(t)?this.get().map(e=>E(e)||Ue(e)?e.textContent:"").join(""):this.each((e,n)=>{E(n)&&(n.textContent=t)})}c.text=Je;function $(t,e,n){if(!E(t))return;const i=y.getComputedStyle(t,null);return n?i.getPropertyValue(e)||void 0:i[e]||t.style[e]}function _(t,e){return parseInt($(t,e),10)||0}function ne(t,e){return _(t,`border${e?"Left":"Top"}Width`)+_(t,`padding${e?"Left":"Top"}`)+_(t,`padding${e?"Right":"Bottom"}`)+_(t,`border${e?"Right":"Bottom"}Width`)}const Dt={};function Fe(t){if(Dt[t])return Dt[t];const e=S(t);g.body.insertBefore(e,null);const n=$(e,"display");return g.body.removeChild(e),Dt[t]=n!=="none"?n:"block"}function ie(t){return $(t,"display")==="none"}function se(t,e){const n=t&&(t.matches||t.webkitMatchesSelector||t.msMatchesSelector);return!!n&&!!e&&n.call(t,e)}function yt(t){return A(t)?(e,n)=>se(n,t):j(t)?t:Mt(t)?(e,n)=>t.is(n):t?(e,n)=>n===t:()=>!1}c.filter=function(t){const e=yt(t);return o(_t.call(this,(n,i)=>e.call(n,i,n)))};function P(t,e){return e?t.filter(e):t}c.detach=function(t){return P(this,t).each((e,n)=>{n.parentNode&&n.parentNode.removeChild(n)}),this};const Ze=/^\s*<(\w+)[^>]*>/,We=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,re={"*":Kt,tr:Se,td:qt,th:qt,thead:St,tbody:St,tfoot:St};function oe(t){if(!A(t))return[];if(We.test(t))return[S(RegExp.$1)];const e=Ze.test(t)&&RegExp.$1,n=re[e]||re["*"];return n.innerHTML=t,o(n.childNodes).detach().get()}o.parseHTML=oe,c.has=function(t){const e=A(t)?(n,i)=>$t(t,i).length:(n,i)=>i.contains(t);return this.filter(e)},c.not=function(t){const e=yt(t);return this.filter((n,i)=>(!A(t)||E(i))&&!e.call(i,n,i))};function M(t,e,n,i){const s=[],r=j(e),u=i&&yt(i);for(let a=0,d=t.length;a<d;a++)if(r){const f=e(t[a]);f.length&&Be.apply(s,f)}else{let f=t[a][e];for(;f!=null&&!(i&&u(-1,f));)s.push(f),f=n?f[e]:null}return s}function ce(t){return t.multiple&&t.options?M(_t.call(t.options,e=>e.selected&&!e.disabled&&!e.parentNode.disabled),"value"):t.value||""}function Ge(t){return arguments.length?this.each((e,n)=>{const i=n.multiple&&n.options;if(i||be.test(n.type)){const s=ht(t)?Qt.call(t,String):it(t)?[]:[String(t)];i?R(n.options,(r,u)=>{u.selected=s.indexOf(u.value)>=0},!0):n.checked=s.indexOf(n.value)>=0}else n.value=T(t)||it(t)?"":t}):this[0]&&ce(this[0])}c.val=Ge,c.is=function(t){const e=yt(t);return Bt.call(this,(n,i)=>e.call(n,i,n))},o.guid=1;function B(t){return t.length>1?_t.call(t,(e,n,i)=>Xt.call(i,e)===n):t}o.unique=B,c.add=function(t,e){return o(B(this.get().concat(o(t,e).get())))},c.children=function(t){return P(o(B(M(this,e=>e.children))),t)},c.parent=function(t){return P(o(B(M(this,"parentNode"))),t)},c.index=function(t){const e=t?o(t)[0]:this[0],n=t?this:o(e).parent().children();return Xt.call(n,e)},c.closest=function(t){const e=this.filter(t);if(e.length)return e;const n=this.parent();return n.length?n.closest(t):e},c.siblings=function(t){return P(o(B(M(this,e=>o(e).parent().children().not(e)))),t)},c.find=function(t){return o(B(M(this,e=>$t(t,e))))};const Ke=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,qe=/^$|^module$|\/(java|ecma)script/i,ze=["type","src","nonce","noModule"];function Xe(t,e){const n=o(t);n.filter("script").add(n.find("script")).each((i,s)=>{if(qe.test(s.type)&&N.contains(s)){const r=S("script");r.text=s.textContent.replace(Ke,""),R(ze,(u,a)=>{s[a]&&(r[a]=s[a])}),e.head.insertBefore(r,null),e.head.removeChild(r)}})}function Qe(t,e,n,i,s){i?t.insertBefore(e,n?t.firstChild:null):t.nodeName==="HTML"?t.parentNode.replaceChild(e,t):t.parentNode.insertBefore(e,n?t:t.nextSibling),s&&Xe(e,t.ownerDocument)}function D(t,e,n,i,s,r,u,a){return R(t,(d,f)=>{R(o(f),(p,L)=>{R(o(e),(k,C)=>{const H=n?L:C,w=n?C:L,et=n?p:k;Qe(H,et?w.cloneNode(!0):w,i,s,!et)},a)},u)},r),e}c.after=function(){return D(arguments,this,!1,!1,!1,!0,!0)},c.append=function(){return D(arguments,this,!1,!1,!0)};function tn(t){if(!arguments.length)return this[0]&&this[0].innerHTML;if(T(t))return this;const e=/<script[\s>]/.test(t);return this.each((n,i)=>{E(i)&&(e?o(i).empty().append(t):i.innerHTML=t)})}c.html=tn,c.appendTo=function(t){return D(arguments,this,!0,!1,!0)},c.wrapInner=function(t){return this.each((e,n)=>{const i=o(n),s=i.contents();s.length?s.wrapAll(t):i.append(t)})},c.before=function(){return D(arguments,this,!1,!0)},c.wrapAll=function(t){let e=o(t),n=e[0];for(;n.children.length;)n=n.firstElementChild;return this.first().before(e),this.appendTo(n)},c.wrap=function(t){return this.each((e,n)=>{const i=o(t)[0];o(n).wrapAll(e?i.cloneNode(!0):i)})},c.insertAfter=function(t){return D(arguments,this,!0,!1,!1,!1,!1,!0)},c.insertBefore=function(t){return D(arguments,this,!0,!0)},c.prepend=function(){return D(arguments,this,!1,!0,!0,!0,!0)},c.prependTo=function(t){return D(arguments,this,!0,!0,!0,!1,!1,!0)},c.contents=function(){return o(B(M(this,t=>t.tagName==="IFRAME"?[t.contentDocument]:t.tagName==="TEMPLATE"?t.content.childNodes:t.childNodes)))},c.next=function(t,e,n){return P(o(B(M(this,"nextElementSibling",e,n))),t)},c.nextAll=function(t){return this.next(t,!0)},c.nextUntil=function(t,e){return this.next(e,!0,t)},c.parents=function(t,e){return P(o(B(M(this,"parentElement",!0,e))),t)},c.parentsUntil=function(t,e){return this.parents(e,t)},c.prev=function(t,e,n){return P(o(B(M(this,"previousElementSibling",e,n))),t)},c.prevAll=function(t){return this.prev(t,!0)},c.prevUntil=function(t,e){return this.prev(e,!0,t)},c.map=function(t){return o(_e.apply([],Qt.call(this,(e,n)=>t.call(e,n,e))))},c.clone=function(){return this.map((t,e)=>e.cloneNode(!0))},c.offsetParent=function(){return this.map((t,e)=>{let n=e.offsetParent;for(;n&&$(n,"position")==="static";)n=n.offsetParent;return n||N})},c.slice=function(t,e){return o(te.call(this,t,e))};const en=/-([a-z])/g;function Ht(t){return t.replace(en,(e,n)=>n.toUpperCase())}c.ready=function(t){const e=()=>setTimeout(t,0,o);return g.readyState!=="loading"?e():g.addEventListener("DOMContentLoaded",e),this},c.unwrap=function(){return this.parent().each((t,e)=>{if(e.tagName==="BODY")return;const n=o(e);n.replaceWith(n.children())}),this},c.offset=function(){const t=this[0];if(!t)return;const e=t.getBoundingClientRect();return{top:e.top+y.pageYOffset,left:e.left+y.pageXOffset}},c.position=function(){const t=this[0];if(!t)return;const e=$(t,"position")==="fixed",n=e?t.getBoundingClientRect():this.offset();if(!e){const i=t.ownerDocument;let s=t.offsetParent||i.documentElement;for(;(s===i.body||s===i.documentElement)&&$(s,"position")==="static";)s=s.parentNode;if(s!==t&&E(s)){const r=o(s).offset();n.top-=r.top+_(s,"borderTopWidth"),n.left-=r.left+_(s,"borderLeftWidth")}}return{top:n.top-_(t,"marginTop"),left:n.left-_(t,"marginLeft")}};const ae={class:"className",contenteditable:"contentEditable",for:"htmlFor",readonly:"readOnly",maxlength:"maxLength",tabindex:"tabIndex",colspan:"colSpan",rowspan:"rowSpan",usemap:"useMap"};c.prop=function(t,e){if(t){if(A(t))return t=ae[t]||t,arguments.length<2?this[0]&&this[0][t]:this.each((n,i)=>{i[t]=e});for(const n in t)this.prop(n,t[n]);return this}},c.removeProp=function(t){return this.each((e,n)=>{delete n[ae[t]||t]})};const nn=/^--/;function It(t){return nn.test(t)}const Ut={},{style:sn}=Kt,rn=["webkit","moz","ms"];function on(t,e=It(t)){if(e)return t;if(!Ut[t]){const n=Ht(t),i=`${n[0].toUpperCase()}${n.slice(1)}`,s=`${n} ${rn.join(`${i} `)}${i}`.split(" ");R(s,(r,u)=>{if(u in sn)return Ut[t]=u,!1})}return Ut[t]}const cn={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};function ue(t,e,n=It(t)){return!n&&!cn[t]&&ee(e)?`${e}px`:e}function an(t,e){if(A(t)){const n=It(t);return t=on(t,n),arguments.length<2?this[0]&&$(this[0],t,n):t?(e=ue(t,e,n),this.each((i,s)=>{E(s)&&(n?s.style.setProperty(t,e):s.style[t]=e)})):this}for(const n in t)this.css(n,t[n]);return this}c.css=an;function le(t,e){try{return t(e)}catch{return e}}const un=/^\s+|\s+$/;function fe(t,e){const n=t.dataset[e]||t.dataset[Ht(e)];return un.test(n)?n:le(JSON.parse,n)}function ln(t,e,n){n=le(JSON.stringify,n),t.dataset[Ht(e)]=n}function fn(t,e){if(!t){if(!this[0])return;const n={};for(const i in this[0].dataset)n[i]=fe(this[0],i);return n}if(A(t))return arguments.length<2?this[0]&&fe(this[0],t):T(e)?this:this.each((n,i)=>{ln(i,t,e)});for(const n in t)this.data(n,t[n]);return this}c.data=fn;function he(t,e){const n=t.documentElement;return Math.max(t.body[`scroll${e}`],n[`scroll${e}`],t.body[`offset${e}`],n[`offset${e}`],n[`client${e}`])}R([!0,!1],(t,e)=>{R(["Width","Height"],(n,i)=>{const s=`${e?"outer":"inner"}${i}`;c[s]=function(r){if(this[0])return F(this[0])?e?this[0][`inner${i}`]:this[0].document.documentElement[`client${i}`]:U(this[0])?he(this[0],i):this[0][`${e?"offset":"client"}${i}`]+(r&&e?_(this[0],`margin${n?"Top":"Left"}`)+_(this[0],`margin${n?"Bottom":"Right"}`):0)}})}),R(["Width","Height"],(t,e)=>{const n=e.toLowerCase();c[n]=function(i){if(!this[0])return T(i)?void 0:this;if(!arguments.length)return F(this[0])?this[0].document.documentElement[`client${e}`]:U(this[0])?he(this[0],e):this[0].getBoundingClientRect()[n]-ne(this[0],!t);const s=parseInt(i,10);return this.each((r,u)=>{if(!E(u))return;const a=$(u,"boxSizing");u.style[n]=ue(n,s+(a==="border-box"?ne(u,!t):0))})}});const de="___cd";c.toggle=function(t){return this.each((e,n)=>{if(!E(n))return;const i=ie(n);(T(t)?i:t)?(n.style.display=n[de]||"",ie(n)&&(n.style.display=Fe(n.tagName))):i||(n[de]=$(n,"display"),n.style.display="none")})},c.hide=function(){return this.toggle(!1)},c.show=function(){return this.toggle(!0)};const pe="___ce",jt=".",Vt={focus:"focusin",blur:"focusout"},ge={mouseenter:"mouseover",mouseleave:"mouseout"},hn=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function Yt(t){return ge[t]||Vt[t]||t}function Jt(t){const e=t.split(jt);return[e[0],e.slice(1).sort()]}c.trigger=function(t,e){if(A(t)){const[i,s]=Jt(t),r=Yt(i);if(!r)return this;const u=hn.test(r)?"MouseEvents":"HTMLEvents";t=g.createEvent(u),t.initEvent(r,!0,!0),t.namespace=s.join(jt),t.___ot=i}t.___td=e;const n=t.___ot in Vt;return this.each((i,s)=>{n&&j(s[t.___ot])&&(s[`___i${t.type}`]=!0,s[t.___ot](),s[`___i${t.type}`]=!1),s.dispatchEvent(t)})};function ye(t){return t[pe]=t[pe]||{}}function dn(t,e,n,i,s){const r=ye(t);r[e]=r[e]||[],r[e].push([n,i,s]),t.addEventListener(e,s)}function me(t,e){return!e||!Bt.call(e,n=>t.indexOf(n)<0)}function mt(t,e,n,i,s){const r=ye(t);if(e)r[e]&&(r[e]=r[e].filter(([u,a,d])=>{if(s&&d.guid!==s.guid||!me(u,n)||i&&i!==a)return!0;t.removeEventListener(e,d)}));else for(e in r)mt(t,e,n,i,s)}c.off=function(t,e,n){if(T(t))this.each((i,s)=>{!E(s)&&!U(s)&&!F(s)||mt(s)});else if(A(t))j(e)&&(n=e,e=""),R(gt(t),(i,s)=>{const[r,u]=Jt(s),a=Yt(r);this.each((d,f)=>{!E(f)&&!U(f)&&!F(f)||mt(f,a,u,e,n)})});else for(const i in t)this.off(i,t[i]);return this},c.remove=function(t){return P(this,t).detach().off(),this},c.replaceWith=function(t){return this.before(t).remove()},c.replaceAll=function(t){return o(t).replaceWith(this),this};function pn(t,e,n,i,s){if(!A(t)){for(const r in t)this.on(r,e,n,t[r],s);return this}return A(e)||(T(e)||it(e)?e="":T(n)?(n=e,e=""):(i=n,n=e,e="")),j(i)||(i=n,n=void 0),i?(R(gt(t),(r,u)=>{const[a,d]=Jt(u),f=Yt(a),p=a in ge,L=a in Vt;f&&this.each((k,C)=>{if(!E(C)&&!U(C)&&!F(C))return;const H=function(w){if(w.target[`___i${w.type}`])return w.stopImmediatePropagation();if(w.namespace&&!me(d,w.namespace.split(jt))||!e&&(L&&(w.target!==C||w.___ot===f)||p&&w.relatedTarget&&C.contains(w.relatedTarget)))return;let et=C;if(e){let nt=w.target;for(;!se(nt,e);)if(nt===C||(nt=nt.parentNode,!nt))return;et=nt}Object.defineProperty(w,"currentTarget",{configurable:!0,get(){return et}}),Object.defineProperty(w,"delegateTarget",{configurable:!0,get(){return C}}),Object.defineProperty(w,"data",{configurable:!0,get(){return n}});const xn=i.call(et,w,w.___td);s&&mt(C,f,d,e,H),xn===!1&&(w.preventDefault(),w.stopPropagation())};H.guid=i.guid=i.guid||o.guid++,dn(C,f,d,e,H)})}),this):this}c.on=pn;function gn(t,e,n,i){return this.on(t,e,n,i,!0)}c.one=gn;const yn=/\r?\n/g;function mn(t,e){return`&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(yn,`\r
`))}`}const bn=/file|reset|submit|button|image/i,be=/radio|checkbox/i;c.serialize=function(){let t="";return this.each((e,n)=>{R(n.elements||[n],(i,s)=>{if(s.disabled||!s.name||s.tagName==="FIELDSET"||bn.test(s.type)||be.test(s.type)&&!s.checked)return;const r=ce(s);if(!T(r)){const u=ht(r)?r:[r];R(u,(a,d)=>{t+=mn(s.name,d)})}})}),t.slice(1)};const Cn={live:!1,theme:"system"},wn={data:void 0,between:"after",open:!0,callback:void 0},l={OBJECT:"object",ARRAY:"array",STRING:"string",NUMBER:"number",BOOLEAN:"boolean",NULL:"null"},Z={START:"pointerdown",MOVE:"pointermove",END:"pointerup.json-editor pointercancel.json-editor"},W={CLICK:"click.json-editor-context",KEYUP:"keyup.json-editor-context"},st={START:"drag-over-start",END:"drag-over-end",ALL:"drag-over-start drag-over-end"},vn='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',Nn='<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>',En='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',Ce={object:'<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-object"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',array:'<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-array"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',string:'<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-string"><g transform="translate(0 1)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',number:'<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-number"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></svg>',boolean:'<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-boolean"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></svg>',null:'<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-null"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'},kn=[{key:"change-type",label:"Change type",children:[{key:l.OBJECT,label:"Object"},{key:l.ARRAY,label:"Array"},{key:l.STRING,label:"String"},{key:l.NUMBER,label:"Number"},{key:l.BOOLEAN,label:"Boolean"},{key:l.NULL,label:"Null"}]},{key:"insert",label:"Insert",children:[{key:l.OBJECT,label:"Object"},{key:l.ARRAY,label:"Array"},{key:l.STRING,label:"String"},{key:l.NUMBER,label:"Number"},{key:l.BOOLEAN,label:"Boolean"},{key:l.NULL,label:"Null"}]},{key:"duplicate",label:"Duplicate"},{key:"remove",label:"Remove"}];class Rn{constructor(e,n,i=!1){v(this,bt);v(this,Ct);v(this,wt);v(this,G,void 0);at(this,"el",{node:void 0,type:void 0,dialog:void 0});v(this,K,void 0);I(this,G,e),this.el.node=o(n),I(this,K,String(this.el.node.data("type"))),this.el.type=this.el.node.find("& > .node__body > .type"),this.el.type.addClass("open"),this.el.dialog=h(this,bt,Ne).call(this,kn,b(this,K),i),this.el.dialog.on("click",s=>s.stopPropagation()),this.el.dialog.find("button").on("click",s=>h(this,Ct,Ee).call(this,s)),b(this,G).customContext(this.el.dialog.get(0),{node:this.el.node.get(0),type:b(this,K),isRoot:i},o),this.el.type.append(this.el.dialog),o(window).on(W.CLICK,s=>this.close(s)),o(window).on(W.KEYUP,s=>h(this,wt,ke).call(this,s))}close(){this.el.type.removeClass("open"),this.el.dialog.remove(),o(window).off(W.CLICK),o(window).off(W.KEYUP),delete b(this,G).context}}G=new WeakMap,K=new WeakMap,bt=new WeakSet,Ne=function(e,n,i=!1){function s(a,d){let f="";const{key:p,label:L,children:k}=a;if(i)switch(p){case l.STRING:case l.NUMBER:case l.BOOLEAN:case l.NULL:if(d==="change-type")return"";break;case"duplicate":case"remove":return""}let C="",H="",w="";switch(p){case"change-type":C=' class="dropdown"',w=" disabled";break;case"insert":if([l.STRING,l.NUMBER,l.BOOLEAN,l.NULL].indexOf(n)>-1)return"";C=' class="dropdown"',w=" disabled";break;case"duplicate":C=' class="duplicate"',w=' data-mode="duplicate"';break;case"remove":C=' class="remove"',w=' data-mode="remove"';break;case l.OBJECT:case l.ARRAY:case l.STRING:case l.NUMBER:case l.BOOLEAN:case l.NULL:C=' class="type"',H=`<i class="type-icon type-icon--${p}">${Ce[p]}</i>`,w=` data-mode="${d}" data-type="${p}"`,d==="change-type"&&p===n&&(w=" disabled");break}return f+=`<li${C}>`,f+=`<button type="button"${w}>`,f+=H,f+=`<em class="label">${L}</em>`,(p==="change-type"||p==="insert")&&(f+=`<span class="arrow">${vn}</span>`),f+="</button>",(k==null?void 0:k.length)>0&&(f+='<div class="children">',f+=r(k,p),f+="</div>"),f+="</li>",f}function r(a,d=void 0){let f="<ol>";for(let p in a)f+=s(a[p],d);return f+="</ol>",f}let u=`<nav class="context${i?" is-root":""}">`;return u+=r(e),u+="</nav>",o(u)},Ct=new WeakSet,Ee=function(e){const n=o(e.currentTarget),i=n.data("mode");let s=String(n.data("type"));s=s==="undefined"?"":s,this.close(),this.selectItem&&typeof this.selectItem=="function"&&this.selectItem(this.el.node,i,s)},wt=new WeakSet,ke=function(e){e.code==="Escape"&&this.close()};function we(t){return t==null?"null":Array.isArray(t)?"array":typeof t=="string"?"string":typeof t=="number"?"number":typeof t=="boolean"?"boolean":"object"}function Ln(t){try{return typeof t=="string"?JSON.parse(t):Array.isArray(t)?Object.assign([],t):o.isPlainObject(t)?Object.assign({},t):{}}catch(e){console.error("error",e.message)}}function An(t){return Array.isArray(t)?t.length:o.isPlainObject(t)?Object.keys(t).length:0}function ve(t){if(t.ctrlKey||t.metaKey)switch(t.keyCode){case 66:case 98:case 73:case 105:case 85:case 117:return!0}return!1}class Tn{constructor(e,n={}){v(this,vt);v(this,rt);v(this,z);v(this,Nt);v(this,Et);v(this,X);v(this,V);v(this,ot);v(this,x);v(this,ct);v(this,Y);v(this,J);v(this,Q);v(this,tt);v(this,kt);v(this,Rt);v(this,Lt);at(this,"el",{wrap:null,body:null,tree:null});at(this,"options");at(this,"context");v(this,m,void 0);v(this,q,!1);this.$=o,this.el.wrap=o(e),this.el.body=o('<div class="json-editor"></div>'),this.options=new Proxy(Object.assign({},Cn,n),{get:(i,s)=>i[s],set:h(this,vt,Re).bind(this)}),this.el.wrap.append(this.el.body),h(this,rt,Zt).call(this,this.options.theme),this.replace({},!1)}addNode(e,n,i=!0,s=!0){n={...wn,...n};const{data:r,between:u,open:a,callback:d}=n;e=o(e);const{key:f,value:p,type:L}=r,k=h(this,z,At).call(this,L,!1);h(this,X,Tt).call(this,k,{...r,open:a}),h(this,J,ft).call(this,k);const C=e.find("& > .node__children > ul");u==="before"?C.prepend(k):C.append(k),s&&h(this,Y,lt).call(this,e),(L===l.ARRAY||L===l.OBJECT)&&d&&typeof d=="function"&&d(k.get(0),p),i&&h(this,x,O).call(this)}removeNode(e,n=!0){e=o(e);const i=e.parent().closest(".node");e.remove(),h(this,Y,lt).call(this,i),n&&h(this,x,O).call(this)}changeType(e,n,i=!0){const s=o(e),r={key:s.find("& > .node__body .key").text(),value:h(this,ot,Wt).call(this,s),type:n,open:s.hasClass("open")},u=s.find("& > .node__children > .tree").html(),a=s.hasClass("root");s.empty(),s.html(h(this,z,At).call(this,n,a).html()),u&&s.find("& > .node__children > .tree").html(u),h(this,X,Tt).call(this,s,r),h(this,J,ft).call(this,s),s.attr("data-type",n),i&&h(this,x,O).call(this)}duplicate(e,n=!0){e=o(e);const i=o(e.get(0).outerHTML);h(this,J,ft).call(this,i),e.after(i),h(this,Y,lt).call(this,e.parent().closest(".node")),n&&h(this,x,O).call(this)}fold(e,n){e=o(e),n===void 0?e.toggleClass("open"):n===!0?e.addClass("open"):e.removeClass("open")}clear(){this.el.tree&&(this.el.body.empty(),this.replace({},!1),h(this,x,O).call(this))}destroy(){o(window).off(Z.END).off(W.CLICK).off(W.KEYUP),this.el.wrap.empty()}replace(e,n=!0){this.el.body.empty(),e=Ln(e);const i=h(this,Nt,Le).call(this,e);this.import(i,e,!1,!1),n&&h(this,x,O).call(this)}import(e,n,i=!0,s=!0){e=o(e),o.each(n,(r,u)=>{const a=we(u),d={key:r,value:u,type:a};this.addNode(e,{data:d,open:!1,callback:(f,p)=>this.import(f,p,!1,!1)},!1,!1)}),s&&h(this,Y,lt).call(this,e),i&&h(this,x,O).call(this)}export(e=void 0,n,i=2){let s=h(this,ct,Gt).call(this,e);if(n){let r=2;return i===!0?r="	":typeof i===l.NUMBER&&(r=i),JSON.stringify(s,null,r)}else return s}preview(e){}customContext(e,{node:n,type:i,isRoot:s},r){}}m=new WeakMap,q=new WeakMap,vt=new WeakSet,Re=function(e,n,i){switch(e[n]=i,n){case"theme":h(this,rt,Zt).call(this,i);break}return!0},rt=new WeakSet,Zt=function(e){e=["system","light","dark"].indexOf(e)>-1?e:"system",this.el.body.attr("data-theme",e)},z=new WeakSet,At=function(e,n=!1){let i=`<li data-type="${e}" class="node${n?" root":""}">`;return i+='<div class="node__body">',n||(i+=`<div class="sort">${En}</div>`),i+='<div class="type"><button type="button"></button></div>',(e===l.OBJECT||e===l.ARRAY)&&(i+=`<button type="button" class="fold">${Nn}</button>`),n||(i+='<div class="key"></div>'),i+='<em class="count"></em>',n||(i+='<div class="value"></div>'),i+="</div>",i+='<div class="node__children"><ul class="tree"/></div>',i+="</li>",o(i)},Nt=new WeakSet,Le=function(e){const n=we(e),i=h(this,z,At).call(this,n,!0);return h(this,X,Tt).call(this,i,{key:void 0,value:e,type:n,open:!0}),h(this,J,ft).call(this,i),this.el.tree=o("<ul/>"),this.el.tree.append(i),this.el.body.append(this.el.tree),i},Et=new WeakSet,Ae=function(e,n,i){switch(n){case"change-type":this.changeType(e,i);break;case"insert":this.fold(e,!0),this.addNode(e,{data:{key:"",value:"",type:i}});break;case"duplicate":this.duplicate(e);break;case"remove":this.removeNode(e);break}},X=new WeakSet,Tt=function(e,n){const{key:i,value:s,type:r,open:u}=n,a=e.hasClass("root"),d=e.children(".node__body");if(d.find(".type > button").html(`<i class="type-icon type-icon--${r}">${Ce[r]}</i>`),(r===l.OBJECT||r===l.ARRAY)&&this.fold(e,u),!a){d.find(".key").html(`<div class="label-field" contenteditable="true" data-placeholder="empty">${i}</div>`);const f=d.find(".value");let p;switch(r){case l.STRING:f.html(`<div contenteditable="true" data-placeholder="empty" class="label-field type-string">${String(s)}</div>`);break;case l.NUMBER:p=Number(s),isNaN(p)&&(p=0),f.html(`<input type="number" value="${p}" placeholder="0" class="label-field type-number"/>`);break;case l.BOOLEAN:p=s==="false"?!1:!!s,f.html(`<button type="button" data-value="${p}" class="label-switch type-boolean"><span><i>${p.toString().toUpperCase()}</i></span></button>`);break;case l.NULL:f.html('<em class="label-null type-null">NULL</em>');break}}if(r===l.OBJECT||r===l.ARRAY){const f=An(s);isNaN(f)||d.find(".count").text(f)}},V=new WeakSet,ut=function(e){return String(e.data("type"))},ot=new WeakSet,Wt=function(e){const n=h(this,V,ut).call(this,e),i=e.find("& > .node__body > .value");switch(n){case l.OBJECT:case l.ARRAY:return"";case l.STRING:return i.children(".type-string").get(0).innerText||"";case l.NUMBER:return Number(i.children(".type-number").val());case l.BOOLEAN:return i.children(".type-boolean").data("value");case l.NULL:return null}},x=new WeakSet,O=function(){this.options.live&&this.preview&&typeof this.preview=="function"&&this.preview(h(this,ct,Gt).call(this))},ct=new WeakSet,Gt=function(e){const n=(r,u)=>{let a=u===l.ARRAY?[]:{};return r.find("& > .node__children > ul > li").each((f,p)=>{if(!(u===l.ARRAY||u===l.OBJECT))return!0;p=o(p);const L=h(this,V,ut).call(this,p);switch(L){case l.OBJECT:case l.ARRAY:switch(u){case l.ARRAY:a.push(n(p,L));break;case l.OBJECT:const C=p.find("& > .node__body > .key").text();C&&(a[C]=n(p,L));break}break;case l.STRING:case l.NUMBER:case l.BOOLEAN:case l.NULL:const k=h(this,ot,Wt).call(this,p);switch(u){case l.ARRAY:a.push(k);break;case l.OBJECT:const C=p.find("& > .node__body > .key").text();C&&(a[C]=k);break}break}}),a};e=o(e);const i=(e==null?void 0:e.length)>0?e:this.el.tree.children(".node"),s=h(this,V,ut).call(this,i);return[l.OBJECT,l.ARRAY].includes(s)?n(i,s):void 0},Y=new WeakSet,lt=function(e){e=o(e);const n=h(this,V,ut).call(this,e);if(!(n==="object"||n==="array"))return;const i=e.find("& > .node__children > ul > li").length;isNaN(i)||e.find("& > .node__body > .count").text(i)},J=new WeakSet,ft=function(e){const n=e.find(".sort");n.length&&n.on(Z.START,h(this,kt,Te).bind(this)),e.find(".type > button").on("click",async a=>{const d=o(a.currentTarget);if(a.stopPropagation(),d.parent().hasClass("open"))this.context&&this.context.close();else{this.context&&this.context.close();const f=d.closest(".node").hasClass("root");this.context=new Rn(this,d.closest(".node"),f),this.context.selectItem=(p,L,k)=>h(this,Et,Ae).call(this,p,L,k)}}),e.find(".fold").on("click",a=>{const f=o(a.currentTarget).closest(".node");this.fold(f)});const i=e.find(".key > .label-field");i.length&&i.on("keydown",a=>{if(a.keyCode===13||ve(a))return a.preventDefault()}).on("input",a=>h(this,Q,xt).call(this,a)).on("blur",a=>h(this,tt,Ot).call(this,a));const s=e.find(".value > .type-string");s.length&&s.on("keydown",a=>{if(ve(a))return a.preventDefault()}).on("input",a=>h(this,Q,xt).call(this,a)).on("blur",a=>h(this,tt,Ot).call(this,a));const r=e.find(".value > .type-number");r.length&&r.on("input",a=>h(this,Q,xt).call(this,a)).on("blur",a=>h(this,tt,Ot).call(this,a));const u=e.find(".value > .type-boolean");u.length&&u.on("click",a=>{const d=o(a.currentTarget),f=!d.data("value");d.data("value",f).find("i").text(f.toString().toUpperCase()),h(this,x,O).call(this)})},Q=new WeakSet,xt=function(){I(this,q,!0)},tt=new WeakSet,Ot=function(){b(this,q)&&(h(this,x,O).call(this),I(this,q,!1))},kt=new WeakSet,Te=function(e){if(e.pointerType!=="touch"){if(I(this,m,{}),b(this,m).$node=o(e.currentTarget).closest(".node"),b(this,m).$area=b(this,m).$node.parent(),b(this,m).$nodes=b(this,m).$area.children(".node"),b(this,m).$nodes.length<2){I(this,m,void 0);return}b(this,m).$nodes.on(Z.MOVE,h(this,Rt,xe).bind(this)),o(window).on(Z.END,h(this,Lt,Oe).bind(this))}},Rt=new WeakSet,xe=function(e){const n=o(e.currentTarget),i=n.children(".node__body");if(!(i.length>0))return;const{y:s,height:r}=i.get(0).getBoundingClientRect(),u=r*.5<e.y-s;if(b(this,m).activeNode||(this.el.body.addClass("dragging"),b(this,m).$area.addClass("drag-area"),b(this,m).$node.addClass("drag-select")),b(this,m).activeNode!==n.get(0))b(this,m).activeNode&&o(b(this,m).activeNode).removeClass(st.ALL),b(this,m).activeNode=n.get(0);else if(b(this,m).half===u)return;b(this,m).half=u,n.removeClass(st.ALL).addClass(u?st.END:st.START)},Lt=new WeakSet,Oe=function(){this.el.body.removeClass("dragging"),b(this,m).$area.removeClass("drag-area"),b(this,m).$node.removeClass("drag-select"),b(this,m).$nodes.removeClass(st.ALL),b(this,m).$nodes.off(Z.MOVE),o(window).off(Z.END),b(this,m).half?b(this,m).$node.insertAfter(b(this,m).activeNode):b(this,m).$node.insertBefore(b(this,m).activeNode),I(this,m,void 0),h(this,x,O).call(this)};const _n="";return Tn});
