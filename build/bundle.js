var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n){t.$$.on_destroy.push(function(t,e){const n=t.subscribe(e);return n.unsubscribe?()=>n.unsubscribe():n}(e,n))}function a(t,e,n,o){if(t){const s=l(t,e,n,o);return t[0](s)}}function l(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function $(t,e,n,o){if(t[2]&&o){const s=t[2](o(n));if(e.dirty){const t=[],n=Math.max(e.dirty.length,s.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|s[o];return t}return s}return e.dirty}function u(t,e,n=e){return t.set(n),e}const d="undefined"!=typeof window;let f=d?()=>window.performance.now():()=>Date.now(),p=d?t=>requestAnimationFrame(t):t;const m=new Set;function g(t){m.forEach(e=>{e.c(t)||(m.delete(e),e.f())}),0!==m.size&&p(g)}function y(t){let e;return 0===m.size&&p(g),{promise:new Promise(n=>{m.add(e={c:t,f:n})}),abort(){m.delete(e)}}}function h(t,e){t.appendChild(e)}function x(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function k(){return b(" ")}function S(){return b("")}function z(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function C(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e,n){e in t?t[e]=n:C(t,e,n)}function E(t,e){e=""+e,t.data!==e&&(t.data=e)}function O(t,e){(null!=e||t.value)&&(t.value=e)}function P(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function I(t,e,n){t.classList[n?"add":"remove"](e)}let L,T,A=0,M={};function N(t,e,n,o,s,r,c,i=0){const a=16.666/o;let l="{\n";for(let t=0;t<=1;t+=a){const o=e+(n-e)*r(t);l+=100*t+`%{${c(o,1-o)}}\n`}const $=l+`100% {${c(n,1-n)}}\n}`,u=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}($)}_${i}`;if(!M[u]){if(!L){const t=v("style");document.head.appendChild(t),L=t.sheet}M[u]=!0,L.insertRule(`@keyframes ${u} ${$}`,L.cssRules.length)}const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${u} ${o}ms linear ${s}ms 1 both`,A+=1,u}function q(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--A&&p(()=>{if(A)return;let t=L.cssRules.length;for(;t--;)L.deleteRule(t);M={}})}function H(t){T=t}function D(t){(function(){if(!T)throw new Error("Function called outside component initialization");return T})().$$.on_mount.push(t)}const X=[],R=[],B=[],j=[],J=Promise.resolve();let U,F=!1;function W(t){B.push(t)}function Y(){const t=new Set;do{for(;X.length;){const t=X.shift();H(t),G(t.$$)}for(;R.length;)R.pop()();for(let e=0;e<B.length;e+=1){const n=B[e];t.has(n)||(n(),t.add(n))}B.length=0}while(X.length);for(;j.length;)j.pop()();F=!1}function G(t){null!==t.fragment&&(t.update(),s(t.before_update),t.fragment&&t.fragment.p(t.ctx,t.dirty),t.dirty=[-1],t.after_update.forEach(W))}function K(){return U||(U=Promise.resolve(),U.then(()=>{U=null})),U}function Q(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const V=new Set;let Z;function tt(){Z={r:0,c:[],p:Z}}function et(){Z.r||s(Z.c),Z=Z.p}function nt(t,e){t&&t.i&&(V.delete(t),t.i(e))}function ot(t,e,n,o){if(t&&t.o){if(V.has(t))return;V.add(t),Z.c.push(()=>{V.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const st={duration:0};function rt(n,o,s){let c,i,a=o(n,s),l=!1,$=0;function u(){c&&q(n,c)}function d(){const{delay:o=0,duration:s=300,easing:r=e,tick:d=t,css:p}=a||st;p&&(c=N(n,0,1,s,o,r,p,$++)),d(0,1);const m=f()+o,g=m+s;i&&i.abort(),l=!0,W(()=>Q(n,!0,"start")),i=y(t=>{if(l){if(t>=g)return d(1,0),Q(n,!0,"end"),u(),l=!1;if(t>=m){const e=r((t-m)/s);d(e,1-e)}}return l})}let p=!1;return{start(){p||(q(n),r(a)?(a=a(),K().then(d)):d())},invalidate(){p=!1},end(){l&&(u(),l=!1)}}}function ct(n,o,c){let i,a=o(n,c),l=!0;const $=Z;function u(){const{delay:o=0,duration:r=300,easing:c=e,tick:u=t,css:d}=a||st;d&&(i=N(n,1,0,r,o,c,d));const p=f()+o,m=p+r;W(()=>Q(n,!1,"start")),y(t=>{if(l){if(t>=m)return u(0,1),Q(n,!1,"end"),--$.r||s($.c),!1;if(t>=p){const e=c((t-p)/r);u(1-e,e)}}return l})}return $.r+=1,r(a)?K().then(()=>{a=a(),u()}):u(),{end(t){t&&a.tick&&a.tick(1,0),l&&(i&&q(n,i),l=!1)}}}function it(t,e){ot(t,1,1,()=>{e.delete(t.key)})}function at(t){t&&t.c()}function lt(t,e,o){const{fragment:c,on_mount:i,on_destroy:a,after_update:l}=t.$$;c&&c.m(e,o),W(()=>{const e=i.map(n).filter(r);a?a.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(W)}function $t(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){-1===t.$$.dirty[0]&&(X.push(t),F||(F=!0,J.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function dt(e,n,r,c,i,a,l=[-1]){const $=T;H(e);const u=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map($?$.$$.context:[]),callbacks:o(),dirty:l};let f=!1;d.ctx=r?r(e,u,(t,n,o=n)=>(d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),f&&ut(e,t)),n)):[],d.update(),f=!0,s(d.before_update),d.fragment=!!c&&c(d.ctx),n.target&&(n.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(n.target)):d.fragment&&d.fragment.c(),n.intro&&nt(e.$$.fragment),lt(e,n.target,n.anchor),Y()),H($)}class ft{$destroy(){$t(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const pt=[];function mt(e,n=t){let o;const s=[];function r(t){if(c(e,t)&&(e=t,o)){const t=!pt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),pt.push(n,e)}if(t){for(let t=0;t<pt.length;t+=2)pt[t][0](pt[t+1]);pt.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(c,i=t){const a=[c,i];return s.push(a),1===s.length&&(o=n(r)||t),c(e),()=>{const t=s.indexOf(a);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}const gt=mt(JSON.parse(localStorage.getItem("cards"))),yt=mt({isOpen:!1,card:{},pos:{x:0,y:0},toggleState:null,deleteCard:null}),ht=mt(""),xt=mt("/"),wt=mt(null),vt=t=>{history.pushState(null,"title",t),window.dispatchEvent(new Event("popstate"))};function bt(t){let e;const n=t[5].default,o=a(n,t,t[4],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,e){o&&o.p&&16&e[0]&&o.p(l(n,t,t[4],null),$(n,t[4],e,null))},i(t){e||(nt(o,t),e=!0)},o(t){ot(o,t),e=!1},d(t){o&&o.d(t)}}}function kt(t){let e,n,o=t[0]===t[1]&&bt(t);return{c(){o&&o.c(),e=S()},m(t,s){o&&o.m(t,s),x(t,e,s),n=!0},p(t,n){t[0]===t[1]?o?(o.p(t,n),nt(o,1)):(o=bt(t),o.c(),nt(o,1),o.m(e.parentNode,e)):o&&(tt(),ot(o,1,1,()=>{o=null}),et())},i(t){n||(nt(o),n=!0)},o(t){ot(o),n=!1},d(t){o&&o.d(t),t&&w(e)}}}function St(t,e,n){let o,s;i(t,xt,t=>n(1,o=t)),i(t,wt,t=>n(3,s=t));let{path:r="/"}=e,{title:c=document.title}=e;window.addEventListener("popstate",()=>{u(xt,o=location.pathname),u(wt,s=new URL(window.location).searchParams),r===o&&(document.title=c)});let{$$slots:a={},$$scope:l}=e;return t.$set=t=>{"path"in t&&n(0,r=t.path),"title"in t&&n(2,c=t.title),"$$scope"in t&&n(4,l=t.$$scope)},[r,o,c,s,l,a]}class zt extends ft{constructor(t){super(),dt(this,t,St,kt,c,{path:0,title:2})}}function Ct(t){const e=t-1;return e*e*e+1}function _t(t){return 1===t?t:1-Math.pow(2,-10*t)}function Et(t,{delay:n=0,duration:o=400,easing:s=e}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:s,css:t=>`opacity: ${t*r}`}}function Ot(t,{delay:e=0,duration:n=400,easing:o=Ct,x:s=0,y:r=0,opacity:c=0}){const i=getComputedStyle(t),a=+i.opacity,l="none"===i.transform?"":i.transform,$=a*(1-c);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${l} translate(${(1-t)*s}px, ${(1-t)*r}px);\n\t\t\topacity: ${a-$*e}`}}function Pt(t){let e,n,o,s;const r=t[3].default,c=a(r,t,t[2],null);return{c(){e=v("header"),c&&c.c(),C(e,"id",t[0]),P(e,"z-index",t[1]),C(e,"class","svelte-7hubel")},m(t,n){x(t,e,n),c&&c.m(e,null),s=!0},p(t,n){c&&c.p&&4&n[0]&&c.p(l(r,t,t[2],null),$(r,t[2],n,null)),(!s||1&n[0])&&C(e,"id",t[0]),(!s||2&n[0])&&P(e,"z-index",t[1])},i(t){s||(nt(c,t),W(()=>{o&&o.end(1),n||(n=rt(e,Ot,{y:-16,duration:300,delay:35,easing:_t})),n.start()}),s=!0)},o(t){ot(c,t),n&&n.invalidate(),o=ct(e,Ot,{y:-8,duration:100}),s=!1},d(t){t&&w(e),c&&c.d(t),t&&o&&o.end()}}}function It(t,e,n){let{id:o}=e,{zIndex:s=100}=e,{$$slots:r={},$$scope:c}=e;return t.$set=t=>{"id"in t&&n(0,o=t.id),"zIndex"in t&&n(1,s=t.zIndex),"$$scope"in t&&n(2,c=t.$$scope)},[o,s,c,r]}class Lt extends ft{constructor(t){super(),dt(this,t,It,Pt,c,{id:0,zIndex:1})}}function Tt(t){let e,n,o,s;const r=t[8].default,c=a(r,t,t[7],null);return{c(){e=v("view-containder"),c&&c.c(),_(e,"id",t[0]),_(e,"class","view svelte-1cog3fi"),P(e,"height",t[6]),P(e,"z-index",t[3]),P(e,"background",t[2]),P(e,"padding-top",t[1])},m(t,n){x(t,e,n),c&&c.m(e,null),s=!0},p(t,n){c&&c.p&&128&n[0]&&c.p(l(r,t,t[7],null),$(r,t[7],n,null)),(!s||1&n[0])&&_(e,"id",t[0]),(!s||64&n[0])&&P(e,"height",t[6]),(!s||8&n[0])&&P(e,"z-index",t[3]),(!s||4&n[0])&&P(e,"background",t[2]),(!s||2&n[0])&&P(e,"padding-top",t[1])},i(r){s||(nt(c,r),W(()=>{o&&o.end(1),n||(n=rt(e,Ot,{y:t[4],delay:35,duration:300,easing:_t})),n.start()}),s=!0)},o(r){ot(c,r),n&&n.invalidate(),o=ct(e,Ot,{y:t[5],duration:100}),s=!1},d(t){t&&w(e),c&&c.d(t),t&&o&&o.end()}}}function At(t,e,n){let{id:o}=e,{paddingTop:s="0px"}=e,{background:r="transparent"}=e,{zIndex:c=1}=e,{flyIn:i=16}=e,{flyOut:a=-8}=e,l=window.innerHeight+"px";window.onresize=()=>{n(6,l=window.innerHeight+"px")};let{$$slots:$={},$$scope:u}=e;return t.$set=t=>{"id"in t&&n(0,o=t.id),"paddingTop"in t&&n(1,s=t.paddingTop),"background"in t&&n(2,r=t.background),"zIndex"in t&&n(3,c=t.zIndex),"flyIn"in t&&n(4,i=t.flyIn),"flyOut"in t&&n(5,a=t.flyOut),"$$scope"in t&&n(7,u=t.$$scope)},[o,s,r,c,i,a,l,u,$]}class Mt extends ft{constructor(t){super(),dt(this,t,At,Tt,c,{id:0,paddingTop:1,background:2,zIndex:3,flyIn:4,flyOut:5})}}function Nt(t){let e,n;const o=t[2].default,s=a(o,t,t[1],null);return{c(){e=v("i"),s&&s.c(),C(e,"class","material-icons-outlined svelte-488iw7"),P(e,"font-size",t[0],1)},m(t,o){x(t,e,o),s&&s.m(e,null),n=!0},p(t,r){s&&s.p&&2&r[0]&&s.p(l(o,t,t[1],null),$(o,t[1],r,null)),(!n||1&r[0])&&P(e,"font-size",t[0],1)},i(t){n||(nt(s,t),n=!0)},o(t){ot(s,t),n=!1},d(t){t&&w(e),s&&s.d(t)}}}function qt(t,e,n){let{fontSize:o="1.5rem"}=e,{$$slots:s={},$$scope:r}=e;return t.$set=t=>{"fontSize"in t&&n(0,o=t.fontSize),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Ht extends ft{constructor(t){super(),dt(this,t,qt,Nt,c,{fontSize:0})}}function Dt(t){let e;const n=t[0].default,o=a(n,t,t[2],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,e){o&&o.p&&4&e[0]&&o.p(l(n,t,t[2],null),$(n,t[2],e,null))},i(t){e||(nt(o,t),e=!0)},o(t){ot(o,t),e=!1},d(t){o&&o.d(t)}}}function Xt(t){let e,n,o;const s=new Ht({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}});return{c(){e=v("icon-button"),at(s.$$.fragment),_(e,"class","svelte-h4tytn"),o=z(e,"click",t[1])},m(t,o){x(t,e,o),lt(s,e,null),n=!0},p(t,e){const n={};4&e[0]&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(nt(s.$$.fragment,t),n=!0)},o(t){ot(s.$$.fragment,t),n=!1},d(t){t&&w(e),$t(s),o()}}}function Rt(t,e,n){let{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"$$scope"in t&&n(2,s=t.$$scope)},[o,function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)},s]}class Bt extends ft{constructor(t){super(),dt(this,t,Rt,Xt,c,{})}}let jt=(t,e,n)=>{let o=t;if(n>=t.length)for(var s=n-t.length+1;s--;)o.push(void 0);return o.splice(n,0,t.splice(e,1)[0]),o},Jt=(t,e)=>{return t.filter(n=>t.indexOf(n)!==e)},Ut=(t,e)=>{let n=0,o=0,s=15,r=!1,c=!1,i=()=>{n=0,o=0,s=15,t.style.setProperty("transition","transform var(--transition), opacity var(--transition)"),t.style.setProperty("transform",null),t.style.setProperty("opacity",null),t.style.setProperty("touch-action",null)};t.addEventListener("touchstart",async e=>{n=e.touches[0].clientX,t.style.setProperty("transition",null)},{passive:!0}),t.addEventListener("touchmove",async e=>{!1===c&&(window.addEventListener("scroll",a,!0),o=Math.round(e.touches[0].clientX-n),t.style.setProperty("transform","translateX("+o+"px)"),t.style.setProperty("opacity",1-Math.abs(o)/150),t.style.setProperty("touch-action","none"),!1===r&&(r=!0,setTimeout(()=>{s=120},400)))},{passive:!0}),t.addEventListener("touchend",async()=>{Math.abs(o)>=s?(t.style.setProperty("transition","transform var(--transition), opacity var(--transition), margin-bottom var(--transition)"),t.style.setProperty("transform",o>0?"translateX(450px)":"translateX(-450px)"),t.style.setProperty("opacity","0"),t.style.setProperty("margin-bottom",-1*t.offsetHeight+"px"),setTimeout(()=>{e()},300)):i(),window.removeEventListener("scroll",a,!0),c=!1,r=!1},{passive:!0});let a=()=>{c=!0,i()}};function Ft(e){let n,o,r,c,i=e[0].content+"";return{c(){n=v("card-item"),o=b(i),_(n,"id",r=e[0].id),_(n,"class","block svelte-xytq3c"),c=[z(n,"click",e[2]),z(n,"contextmenu",e[12])]},m(t,s){x(t,n,s),h(n,o),e[11](n)},p(t,e){1&e[0]&&i!==(i=t[0].content+"")&&E(o,i),1&e[0]&&r!==(r=t[0].id)&&_(n,"id",r)},i:t,o:t,d(t){t&&w(n),e[11](null),s(c)}}}function Wt(t,e,n){let o,s;i(t,gt,t=>n(6,o=t)),i(t,yt,t=>n(7,s=t));let r,{card:c}=e,{editable:a=!0}=e,{swipeable:l=!0}=e,$=t=>{t.preventDefault(),u(yt,s={isOpen:!0,card:c,pos:{x:t.pageX,y:t.pageY},toggleState:()=>p(d),deleteCard:()=>p(f)})};l&&D(()=>Ut(r,d));let d=()=>{""!==c.content?("active"===c.state?n(0,c.state="archived",c):n(0,c.state="active",c),u(gt,o=jt(o,o.indexOf(c),0))):f()},f=()=>{u(gt,o=Jt(o,o.indexOf(c)))},p=t=>{r.style.setProperty("transition","transform var(--transition), opacity var(--transition), margin-bottom var(--transition)"),r.style.setProperty("transform","translateX(450px)"),r.style.setProperty("opacity","0"),r.style.setProperty("margin-bottom",-1*r.offsetHeight+"px"),setTimeout(()=>{t()},300)};return t.$set=t=>{"card"in t&&n(0,c=t.card),"editable"in t&&n(4,a=t.editable),"swipeable"in t&&n(5,l=t.swipeable)},t.$$.update=()=>{64&t.$$.dirty[0]&&localStorage.setItem("cards",JSON.stringify(o))},[c,r,()=>{!0===a&&vt("/editor?id="+c.id)},$,a,l,o,s,d,f,p,function(t){R[t?"unshift":"push"](()=>{n(1,r=t)})},t=>$(t)]}class Yt extends ft{constructor(t){super(),dt(this,t,Wt,Ft,c,{card:0,editable:4,swipeable:5})}}function Gt(t,e,n){const o=t.slice();return o[5]=e[n],o}function Kt(t){let e;const n=t[4].default,o=a(n,t,t[3],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,e){o&&o.p&&8&e[0]&&o.p(l(n,t,t[3],null),$(n,t[3],e,null))},i(t){e||(nt(o,t),e=!0)},o(t){ot(o,t),e=!1},d(t){o&&o.d(t)}}}function Qt(t,e){let n,o;const s=new Yt({props:{card:e[5],editable:e[1],swipeable:e[2]}});return{key:t,first:null,c(){n=S(),at(s.$$.fragment),this.first=n},m(t,e){x(t,n,e),lt(s,t,e),o=!0},p(t,e){const n={};1&e[0]&&(n.card=t[5]),2&e[0]&&(n.editable=t[1]),4&e[0]&&(n.swipeable=t[2]),s.$set(n)},i(t){o||(nt(s.$$.fragment,t),o=!0)},o(t){ot(s.$$.fragment,t),o=!1},d(t){t&&w(n),$t(s,t)}}}function Vt(t){let e,n,o=[],s=new Map,r=t[0];const c=t=>t[5].id;for(let e=0;e<r.length;e+=1){let n=Gt(t,r,e),i=c(n);s.set(i,o[e]=Qt(i,n))}let i=null;return r.length||(i=Kt(t),i.c()),{c(){e=v("main");for(let t=0;t<o.length;t+=1)o[t].c();C(e,"class","card-list svelte-jh7y9n"),I(e,"empty",0===t[0].length)},m(t,s){x(t,e,s);for(let t=0;t<o.length;t+=1)o[t].m(e,null);i&&i.m(e,null),n=!0},p(t,n){const r=t[0];tt(),o=function(t,e,n,o,s,r,c,i,a,l,$,u){let d=t.length,f=r.length,p=d;const m={};for(;p--;)m[t[p].key]=p;const g=[],y=new Map,h=new Map;for(p=f;p--;){const t=u(s,r,p),i=n(t);let a=c.get(i);a?o&&a.p(t,e):(a=l(i,t),a.c()),y.set(i,g[p]=a),i in m&&h.set(i,Math.abs(p-m[i]))}const x=new Set,w=new Set;function v(t){nt(t,1),t.m(i,$),c.set(t.key,t),$=t.first,f--}for(;d&&f;){const e=g[f-1],n=t[d-1],o=e.key,s=n.key;e===n?($=e.first,d--,f--):y.has(s)?!c.has(o)||x.has(o)?v(e):w.has(s)?d--:h.get(o)>h.get(s)?(w.add(o),v(e)):(x.add(s),d--):(a(n,c),d--)}for(;d--;){const e=t[d];y.has(e.key)||a(e,c)}for(;f;)v(g[f-1]);return g}(o,n,c,1,t,r,s,e,it,Qt,null,Gt),et(),!r.length&&i?i.p(t,n):r.length?i&&(i.d(1),i=null):(i=Kt(t),i.c(),i.m(e,null)),1&n[0]&&I(e,"empty",0===t[0].length)},i(t){if(!n){for(let t=0;t<r.length;t+=1)nt(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)ot(o[t]);n=!1},d(t){t&&w(e);for(let t=0;t<o.length;t+=1)o[t].d();i&&i.d()}}}function Zt(t,e,n){let{data:o}=e,{editable:s=!0}=e,{swipeable:r=!0}=e,{$$slots:c={},$$scope:i}=e;return t.$set=t=>{"data"in t&&n(0,o=t.data),"editable"in t&&n(1,s=t.editable),"swipeable"in t&&n(2,r=t.swipeable),"$$scope"in t&&n(3,i=t.$$scope)},[o,s,r,i,c]}class te extends ft{constructor(t){super(),dt(this,t,Zt,Vt,c,{data:0,editable:1,swipeable:2})}}function ee(t){let e,n=t[1]?"search":"add";return{c(){e=b(n)},m(t,n){x(t,e,n)},p(t,o){2&o[0]&&n!==(n=t[1]?"search":"add")&&E(e,n)},d(t){t&&w(e)}}}function ne(t){let e,n=t[1]?"expand_less":"expand_more";return{c(){e=b(n)},m(t,n){x(t,e,n)},p(t,o){2&o[0]&&n!==(n=t[1]?"expand_less":"expand_more")&&E(e,n)},d(t){t&&w(e)}}}function oe(t){let e,n,o,s,r;const c=new Bt({props:{$$slots:{default:[ee]},$$scope:{ctx:t}}});c.$on("click",t[5]);const i=new Bt({props:{$$slots:{default:[ne]},$$scope:{ctx:t}}});return i.$on("click",t[6]),{c(){e=v("h5"),e.textContent="Shade Notes Pro",n=k(),o=v("div"),at(c.$$.fragment),s=k(),at(i.$$.fragment),C(e,"class","text-logo svelte-1qzmo08"),C(o,"class","header-icons")},m(t,a){x(t,e,a),x(t,n,a),x(t,o,a),lt(c,o,null),h(o,s),lt(i,o,null),r=!0},p(t,e){const n={};514&e[0]&&(n.$$scope={dirty:e,ctx:t}),c.$set(n);const o={};514&e[0]&&(o.$$scope={dirty:e,ctx:t}),i.$set(o)},i(t){r||(nt(c.$$.fragment,t),nt(i.$$.fragment,t),r=!0)},o(t){ot(c.$$.fragment,t),ot(i.$$.fragment,t),r=!1},d(t){t&&w(e),t&&w(n),t&&w(o),$t(c),$t(i)}}}function se(t){let e;const n=new Mt({props:{id:"Navigation",zIndex:10,background:"var(--gradient)",flyIn:-32,flyOut:-16,$$slots:{default:[ie]},$$scope:{ctx:t}}});return{c(){at(n.$$.fragment)},m(t,o){lt(n,t,o),e=!0},p(t,e){const o={};512&e[0]&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(nt(n.$$.fragment,t),e=!0)},o(t){ot(n.$$.fragment,t),e=!1},d(t){$t(n,t)}}}function re(t){let e;return{c(){e=b("access_time")},m(t,n){x(t,e,n)},d(t){t&&w(e)}}}function ce(t){let e;return{c(){e=b("settings")},m(t,n){x(t,e,n)},d(t){t&&w(e)}}}function ie(t){let e,n,o,r,c,i,a,l;const $=new Ht({props:{$$slots:{default:[re]},$$scope:{ctx:t}}}),u=new Ht({props:{$$slots:{default:[ce]},$$scope:{ctx:t}}});return{c(){e=v("nav"),n=v("li"),o=b("Archive "),at($.$$.fragment),r=k(),c=v("li"),i=b("Settings "),at(u.$$.fragment),C(n,"class","list-item svelte-1qzmo08"),C(c,"class","list-item svelte-1qzmo08"),C(e,"class","svelte-1qzmo08"),l=[z(n,"click",t[7]),z(c,"click",t[8])]},m(t,s){x(t,e,s),h(e,n),h(n,o),lt($,n,null),h(e,r),h(e,c),h(c,i),lt(u,c,null),a=!0},p(t,e){const n={};512&e[0]&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const o={};512&e[0]&&(o.$$scope={dirty:e,ctx:t}),u.$set(o)},i(t){a||(nt($.$$.fragment,t),nt(u.$$.fragment,t),a=!0)},o(t){ot($.$$.fragment,t),ot(u.$$.fragment,t),a=!1},d(t){t&&w(e),$t($),$t(u),s(l)}}}function ae(t){let e;return{c(){e=b("add")},m(t,n){x(t,e,n)},d(t){t&&w(e)}}}function le(t){let e,n,o,s;const r=new Ht({props:{$$slots:{default:[ae]},$$scope:{ctx:t}}});return{c(){e=v("p"),n=b("Tap "),at(r.$$.fragment),o=b(" to add new card")},m(t,c){x(t,e,c),h(e,n),lt(r,e,null),h(e,o),s=!0},p(t,e){const n={};512&e[0]&&(n.$$scope={dirty:e,ctx:t}),r.$set(n)},i(t){s||(nt(r.$$.fragment,t),s=!0)},o(t){ot(r.$$.fragment,t),s=!1},d(t){t&&w(e),$t(r)}}}function $e(t){let e;const n=new te({props:{data:t[0],$$slots:{default:[le]},$$scope:{ctx:t}}});return{c(){at(n.$$.fragment)},m(t,o){lt(n,t,o),e=!0},p(t,e){const o={};1&e[0]&&(o.data=t[0]),512&e[0]&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(nt(n.$$.fragment,t),e=!0)},o(t){ot(n.$$.fragment,t),e=!1},d(t){$t(n,t)}}}function ue(t){let e,n,o;const s=new Lt({props:{id:"MainHeader",$$slots:{default:[oe]},$$scope:{ctx:t}}});let r=t[1]&&se(t);const c=new Mt({props:{id:"CardList",paddingTop:"90px",$$slots:{default:[$e]},$$scope:{ctx:t}}});return{c(){at(s.$$.fragment),e=k(),r&&r.c(),n=k(),at(c.$$.fragment)},m(t,i){lt(s,t,i),x(t,e,i),r&&r.m(t,i),x(t,n,i),lt(c,t,i),o=!0},p(t,e){const o={};514&e[0]&&(o.$$scope={dirty:e,ctx:t}),s.$set(o),t[1]?r?(r.p(t,e),nt(r,1)):(r=se(t),r.c(),nt(r,1),r.m(n.parentNode,n)):r&&(tt(),ot(r,1,1,()=>{r=null}),et());const i={};513&e[0]&&(i.$$scope={dirty:e,ctx:t}),c.$set(i)},i(t){o||(nt(s.$$.fragment,t),nt(r),nt(c.$$.fragment,t),o=!0)},o(t){ot(s.$$.fragment,t),ot(r),ot(c.$$.fragment,t),o=!1},d(t){$t(s,t),t&&w(e),r&&r.d(t),t&&w(n),$t(c,t)}}}function de(t,e,n){let o,s;i(t,gt,t=>n(3,o=t)),i(t,wt,t=>n(4,s=t));let r=()=>{o[0]?""!==o[0].content?u(gt,o=[{id:Date.now(),type:"text",content:"",state:"active"},...o]):"archived"===o[0].state&&u(gt,o=[{id:Date.now(),type:"text",content:"",state:"active"},...o]):u(gt,o=[{id:Date.now(),type:"text",content:"",state:"active"},...o]),vt("/editor?id="+o[0].id)};let c,a;return t.$$.update=()=>{8&t.$$.dirty[0]&&n(0,c=o.filter(t=>"active"===t.state)),16&t.$$.dirty[0]&&n(1,a=!!s&&"open"===s.get("menu"))},[c,a,r,o,s,()=>a?vt("/search"):r(),()=>vt(a?"/":"/?menu=open"),()=>vt("/archive"),()=>vt("/settings")]}class fe extends ft{constructor(t){super(),dt(this,t,de,ue,c,{})}}function pe(t){let e;return{c(){e=b("keyboard_arrow_left")},m(t,n){x(t,e,n)},d(t){t&&w(e)}}}function me(t){let e,n;const o=new Bt({props:{$$slots:{default:[pe]},$$scope:{ctx:t}}});o.$on("click",t[1]);const s=t[0].default,r=a(s,t,t[2],null);return{c(){at(o.$$.fragment),e=k(),r&&r.c()},m(t,s){lt(o,t,s),x(t,e,s),r&&r.m(t,s),n=!0},p(t,e){const n={};4&e[0]&&(n.$$scope={dirty:e,ctx:t}),o.$set(n),r&&r.p&&4&e[0]&&r.p(l(s,t,t[2],null),$(s,t[2],e,null))},i(t){n||(nt(o.$$.fragment,t),nt(r,t),n=!0)},o(t){ot(o.$$.fragment,t),ot(r,t),n=!1},d(t){$t(o,t),t&&w(e),r&&r.d(t)}}}function ge(t){let e;const n=new Lt({props:{id:"BackPanel",$$slots:{default:[me]},$$scope:{ctx:t}}});return{c(){at(n.$$.fragment)},m(t,o){lt(n,t,o),e=!0},p(t,e){const o={};4&e[0]&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(nt(n.$$.fragment,t),e=!0)},o(t){ot(n.$$.fragment,t),e=!1},d(t){$t(n,t)}}}function ye(t,e,n){let{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"$$scope"in t&&n(2,s=t.$$scope)},[o,()=>vt("/"),s]}class he extends ft{constructor(t){super(),dt(this,t,ye,ge,c,{})}}function xe(t){let e,n,o,s,r;const c=new he({});return{c(){at(c.$$.fragment),e=k(),n=v("textarea"),C(n,"class","editor svelte-12rq76o"),C(n,"name","Editor"),C(n,"placeholder","Type here..."),C(n,"style",t[2]),r=z(n,"input",t[5])},m(o,r){lt(c,o,r),x(o,e,r),x(o,n,r),O(n,t[1].content),t[6](n),s=!0},p(t,e){(!s||4&e[0])&&C(n,"style",t[2]),2&e[0]&&O(n,t[1].content)},i(t){s||(nt(c.$$.fragment,t),o||W(()=>{o=rt(n,Ot,{y:16,delay:35,duration:300,easing:_t}),o.start()}),s=!0)},o(t){ot(c.$$.fragment,t),s=!1},d(o){$t(c,o),o&&w(e),o&&w(n),t[6](null),r()}}}function we(t,e,n){let o,s,r;i(t,gt,t=>n(3,o=t)),i(t,wt,t=>n(4,s=t));let c=o[o.indexOf(o.find(t=>t.id===parseInt(s.get("id"))))];D(()=>{r.focus(),u(gt,o=jt(o,o.indexOf(c),0)),"active"!==c.state&&n(1,c.state="active",c)});let a="height:"+window.innerHeight+"px";return window.onresize=()=>{n(2,a="height:"+window.innerHeight+"px")},t.$$.update=()=>{8&t.$$.dirty[0]&&localStorage.setItem("cards",JSON.stringify(o))},[r,c,a,o,s,function(){c.content=this.value,n(1,c)},function(t){R[t?"unshift":"push"](()=>{n(0,r=t)})}]}class ve extends ft{constructor(t){super(),dt(this,t,we,xe,c,{})}}function be(t){let e,n;return{c(){e=v("input"),C(e,"class","search svelte-drtrsh"),C(e,"type","text"),C(e,"placeholder","Start your search here"),n=z(e,"input",t[4])},m(n,o){x(n,e,o),O(e,t[1]),t[5](e)},p(t,n){2&n[0]&&e.value!==t[1]&&O(e,t[1])},d(o){o&&w(e),t[5](null),n()}}}function ke(t){let e;return{c(){e=v("p"),e.textContent="Can't find anything"},m(t,n){x(t,e,n)},d(t){t&&w(e)}}}function Se(t){let e;const n=new te({props:{data:t[2],swipeable:!1,$$slots:{default:[ke]},$$scope:{ctx:t}}});return{c(){at(n.$$.fragment)},m(t,o){lt(n,t,o),e=!0},p(t,e){const o={};4&e[0]&&(o.data=t[2]),64&e[0]&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(nt(n.$$.fragment,t),e=!0)},o(t){ot(n.$$.fragment,t),e=!1},d(t){$t(n,t)}}}function ze(t){let e,n;const o=new he({props:{$$slots:{default:[be]},$$scope:{ctx:t}}}),s=new Mt({props:{id:"CardListSearch",paddingTop:"90px",$$slots:{default:[Se]},$$scope:{ctx:t}}});return{c(){at(o.$$.fragment),e=k(),at(s.$$.fragment)},m(t,r){lt(o,t,r),x(t,e,r),lt(s,t,r),n=!0},p(t,e){const n={};67&e[0]&&(n.$$scope={dirty:e,ctx:t}),o.$set(n);const r={};68&e[0]&&(r.$$scope={dirty:e,ctx:t}),s.$set(r)},i(t){n||(nt(o.$$.fragment,t),nt(s.$$.fragment,t),n=!0)},o(t){ot(o.$$.fragment,t),ot(s.$$.fragment,t),n=!1},d(t){$t(o,t),t&&w(e),$t(s,t)}}}function Ce(t,e,n){let o,s,r,c;return i(t,ht,t=>n(1,o=t)),i(t,gt,t=>n(3,s=t)),u(ht,o=""),D(()=>r.focus()),t.$$.update=()=>{10&t.$$.dirty[0]&&n(2,c=s.filter(t=>-1!==t.content.toLowerCase().search(o.toLowerCase())))},[r,o,c,s,function(){o=this.value,ht.set(o)},function(t){R[t?"unshift":"push"](()=>{n(0,r=t)})}]}class _e extends ft{constructor(t){super(),dt(this,t,Ce,ze,c,{})}}function Ee(t){let e;return{c(){e=v("p"),e.textContent="Archive is empty"},m(t,n){x(t,e,n)},d(t){t&&w(e)}}}function Oe(t){let e;const n=new te({props:{data:t[0],editable:!1,$$slots:{default:[Ee]},$$scope:{ctx:t}}});return{c(){at(n.$$.fragment)},m(t,o){lt(n,t,o),e=!0},p(t,e){const o={};1&e[0]&&(o.data=t[0]),4&e[0]&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(nt(n.$$.fragment,t),e=!0)},o(t){ot(n.$$.fragment,t),e=!1},d(t){$t(n,t)}}}function Pe(t){let e,n;const o=new he({}),s=new Mt({props:{id:"CardListArchive",paddingTop:"90px",$$slots:{default:[Oe]},$$scope:{ctx:t}}});return{c(){at(o.$$.fragment),e=k(),at(s.$$.fragment)},m(t,r){lt(o,t,r),x(t,e,r),lt(s,t,r),n=!0},p(t,e){const n={};5&e[0]&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(nt(o.$$.fragment,t),nt(s.$$.fragment,t),n=!0)},o(t){ot(o.$$.fragment,t),ot(s.$$.fragment,t),n=!1},d(t){$t(o,t),t&&w(e),$t(s,t)}}}function Ie(t,e,n){let o,s;return i(t,gt,t=>n(1,o=t)),t.$$.update=()=>{2&t.$$.dirty[0]&&n(0,s=o.filter(t=>"archived"===t.state))},[s]}class Le extends ft{constructor(t){super(),dt(this,t,Ie,Pe,c,{})}}function Te(e){let n,o,s,r,c,i;return{c(){n=v("menu"),o=v("section"),s=v("li"),s.textContent="Clear ALL data",r=k(),c=v("section"),c.textContent="Shade Notes Pro - design inspired by @ayndqy. Make sure you've set up ShadeOS for the best experience.",C(s,"class","list-item svelte-178p8s6"),C(o,"class","svelte-178p8s6"),P(c,"padding","var(--padding)"),C(c,"class","svelte-178p8s6"),C(n,"class","settings"),i=z(s,"click",e[1])},m(t,e){x(t,n,e),h(n,o),h(o,s),h(n,r),h(n,c)},p:t,d(t){t&&w(n),i()}}}function Ae(t){let e,n;const o=new he({}),s=new Mt({props:{id:"Settings",paddingTop:"90px",$$slots:{default:[Te]},$$scope:{ctx:t}}});return{c(){at(o.$$.fragment),e=k(),at(s.$$.fragment)},m(t,r){lt(o,t,r),x(t,e,r),lt(s,t,r),n=!0},p(t,e){const n={};5&e[0]&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(nt(o.$$.fragment,t),nt(s.$$.fragment,t),n=!0)},o(t){ot(o.$$.fragment,t),ot(s.$$.fragment,t),n=!1},d(t){$t(o,t),t&&w(e),$t(s,t)}}}function Me(t,e,n){let o;i(t,gt,t=>n(0,o=t));return[o,()=>{localStorage.setItem("cards","[]"),u(gt,o=JSON.parse(localStorage.getItem("cards")))}]}class Ne extends ft{constructor(t){super(),dt(this,t,Me,Ae,c,{})}}function qe(t){let e;return{c(){e=b("notes")},m(t,n){x(t,e,n)},d(t){t&&w(e)}}}function He(t){let e;return{c(){e=b("access_time")},m(t,n){x(t,e,n)},d(t){t&&w(e)}}}function De(t){let e;return{c(){e=b("delete")},m(t,n){x(t,e,n)},d(t){t&&w(e)}}}function Xe(t){let e,n,o,r,c,i,a,l,$,u,d,f,p,m="active"===t[1].card.state?"Archive":"Unarchive";const g=new Ht({props:{fontSize:"1.4rem",$$slots:{default:[qe]},$$scope:{ctx:t}}}),y=new Ht({props:{fontSize:"1.4rem",$$slots:{default:[He]},$$scope:{ctx:t}}}),S=new Ht({props:{fontSize:"1.4rem",$$slots:{default:[De]},$$scope:{ctx:t}}});return{c(){e=v("menu"),n=v("li"),at(g.$$.fragment),o=b(" \r\n      Copy all"),r=k(),c=v("li"),at(y.$$.fragment),i=k(),a=b(m),l=k(),$=v("li"),at(S.$$.fragment),u=b("\r\n      Delete"),C(n,"class","list-item svelte-144hmyp"),C(c,"class","list-item svelte-144hmyp"),C($,"class","list-item svelte-144hmyp"),C(e,"class","card-menu svelte-144hmyp"),P(e,"top",t[2]+"px"),P(e,"left",t[0]+"px"),p=[z(n,"click",t[3]),z(c,"click",t[4]),z($,"click",t[5])]},m(t,s){x(t,e,s),h(e,n),lt(g,n,null),h(n,o),h(e,r),h(e,c),lt(y,c,null),h(c,i),h(c,a),h(e,l),h(e,$),lt(S,$,null),h($,u),f=!0},p(t,n){const o={};64&n[0]&&(o.$$scope={dirty:n,ctx:t}),g.$set(o);const s={};64&n[0]&&(s.$$scope={dirty:n,ctx:t}),y.$set(s),(!f||2&n[0])&&m!==(m="active"===t[1].card.state?"Archive":"Unarchive")&&E(a,m);const r={};64&n[0]&&(r.$$scope={dirty:n,ctx:t}),S.$set(r),(!f||4&n[0])&&P(e,"top",t[2]+"px"),(!f||1&n[0])&&P(e,"left",t[0]+"px")},i(t){f||(nt(g.$$.fragment,t),nt(y.$$.fragment,t),nt(S.$$.fragment,t),d||W(()=>{d=rt(e,Et,{duration:100}),d.start()}),f=!0)},o(t){ot(g.$$.fragment,t),ot(y.$$.fragment,t),ot(S.$$.fragment,t),f=!1},d(t){t&&w(e),$t(g),$t(y),$t(S),s(p)}}}function Re(t,e,n){let o;i(t,yt,t=>n(1,o=t)),D(t=>{window.addEventListener("click",t=>{u(yt,o={isOpen:!1,card:o.card,pos:{x:o.pos.x,y:o.pos.y},toggleState:()=>o.toggleState,deleteCard:()=>o.deleteCard})})});let s,r;return t.$$.update=()=>{2&t.$$.dirty[0]&&n(0,s=o.pos.x+200>window.innerWidth?o.pos.x-200:o.pos.x),2&t.$$.dirty[0]&&n(2,r=o.pos.y+200>window.innerHeight?o.pos.y-204:o.pos.y)},[s,o,r,()=>{document.getElementById(o.card.id).style.userSelect="text",window.getSelection().selectAllChildren(document.getElementById(o.card.id)),document.execCommand("copy"),setTimeout(()=>document.getElementById(o.card.id).style.userSelect=null,100)},()=>o.toggleState(),()=>o.deleteCard()]}class Be extends ft{constructor(t){super(),dt(this,t,Re,Xe,c,{})}}function je(t){let e;const n=new fe({});return{c(){at(n.$$.fragment)},m(t,o){lt(n,t,o),e=!0},i(t){e||(nt(n.$$.fragment,t),e=!0)},o(t){ot(n.$$.fragment,t),e=!1},d(t){$t(n,t)}}}function Je(t){let e;const n=new ve({});return{c(){at(n.$$.fragment)},m(t,o){lt(n,t,o),e=!0},i(t){e||(nt(n.$$.fragment,t),e=!0)},o(t){ot(n.$$.fragment,t),e=!1},d(t){$t(n,t)}}}function Ue(t){let e;const n=new _e({});return{c(){at(n.$$.fragment)},m(t,o){lt(n,t,o),e=!0},i(t){e||(nt(n.$$.fragment,t),e=!0)},o(t){ot(n.$$.fragment,t),e=!1},d(t){$t(n,t)}}}function Fe(t){let e;const n=new Le({});return{c(){at(n.$$.fragment)},m(t,o){lt(n,t,o),e=!0},i(t){e||(nt(n.$$.fragment,t),e=!0)},o(t){ot(n.$$.fragment,t),e=!1},d(t){$t(n,t)}}}function We(t){let e;const n=new Ne({});return{c(){at(n.$$.fragment)},m(t,o){lt(n,t,o),e=!0},i(t){e||(nt(n.$$.fragment,t),e=!0)},o(t){ot(n.$$.fragment,t),e=!1},d(t){$t(n,t)}}}function Ye(t){let e;const n=new Be({});return{c(){at(n.$$.fragment)},m(t,o){lt(n,t,o),e=!0},i(t){e||(nt(n.$$.fragment,t),e=!0)},o(t){ot(n.$$.fragment,t),e=!1},d(t){$t(n,t)}}}function Ge(t){let e,n,o,s,r,c,i;const a=new zt({props:{path:"/",$$slots:{default:[je]},$$scope:{ctx:t}}}),l=new zt({props:{path:"/editor",$$slots:{default:[Je]},$$scope:{ctx:t}}}),$=new zt({props:{path:"/search",$$slots:{default:[Ue]},$$scope:{ctx:t}}}),u=new zt({props:{path:"/archive",$$slots:{default:[Fe]},$$scope:{ctx:t}}}),d=new zt({props:{path:"/settings",$$slots:{default:[We]},$$scope:{ctx:t}}});let f=!0===t[0].isOpen&&Ye();return{c(){at(a.$$.fragment),e=k(),at(l.$$.fragment),n=k(),at($.$$.fragment),o=k(),at(u.$$.fragment),s=k(),at(d.$$.fragment),r=k(),f&&f.c(),c=S()},m(t,p){lt(a,t,p),x(t,e,p),lt(l,t,p),x(t,n,p),lt($,t,p),x(t,o,p),lt(u,t,p),x(t,s,p),lt(d,t,p),x(t,r,p),f&&f.m(t,p),x(t,c,p),i=!0},p(t,e){const n={};8&e[0]&&(n.$$scope={dirty:e,ctx:t}),a.$set(n);const o={};8&e[0]&&(o.$$scope={dirty:e,ctx:t}),l.$set(o);const s={};8&e[0]&&(s.$$scope={dirty:e,ctx:t}),$.$set(s);const r={};8&e[0]&&(r.$$scope={dirty:e,ctx:t}),u.$set(r);const i={};8&e[0]&&(i.$$scope={dirty:e,ctx:t}),d.$set(i),!0===t[0].isOpen?f?nt(f,1):(f=Ye(),f.c(),nt(f,1),f.m(c.parentNode,c)):f&&(tt(),ot(f,1,1,()=>{f=null}),et())},i(t){i||(nt(a.$$.fragment,t),nt(l.$$.fragment,t),nt($.$$.fragment,t),nt(u.$$.fragment,t),nt(d.$$.fragment,t),nt(f),i=!0)},o(t){ot(a.$$.fragment,t),ot(l.$$.fragment,t),ot($.$$.fragment,t),ot(u.$$.fragment,t),ot(d.$$.fragment,t),ot(f),i=!1},d(t){$t(a,t),t&&w(e),$t(l,t),t&&w(n),$t($,t),t&&w(o),$t(u,t),t&&w(s),$t(d,t),t&&w(r),f&&f.d(t),t&&w(c)}}}function Ke(t,e,n){let o,s;i(t,gt,t=>n(1,o=t)),i(t,yt,t=>n(0,s=t));const r=new URL(window.location);return null!==r.searchParams.get("text")?window.addEventListener("DOMContentLoaded",()=>{u(gt,o=[{id:Date.now(),type:"text",content:r.searchParams.get("text"),state:"active"},...o]),vt("/editor?id="+o[0].id)}):D(()=>vt("/")),[s]}return new class extends ft{constructor(t){super(),dt(this,t,Ke,Ge,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
