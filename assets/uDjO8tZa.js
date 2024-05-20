import{D as L,H as dt,X as We,K as P,Y as x,h as g,i as h,Z as ct,I as S,F as _e,f as R,j as A,$ as j,U as K,a0 as ft,a1 as vt,a2 as pt,J as mt,x as ht}from"./Cx7Ox8po.js";const gt=Symbol.for("nuxt:client-only"),wt="data-n-ids",bt="-";function bn(e){var r,o,i,a,u,d;if(typeof e!="string")throw new TypeError("[nuxt] [useId] key must be a string.");e=`n${e.slice(1)}`;const t=dt(),n=We();if(!n)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");t._id||(t._id=0),n._nuxtIdIndex||(n._nuxtIdIndex={}),(r=n._nuxtIdIndex)[e]||(r[e]=0);const l=e+bt+n._nuxtIdIndex[e]++;if(t.payload.serverRendered&&t.isHydrating&&!L(gt,!1)){const s=((o=n.vnode.el)==null?void 0:o.nodeType)===8&&((a=(i=n.vnode.el)==null?void 0:i.nextElementSibling)!=null&&a.getAttribute)?(u=n.vnode.el)==null?void 0:u.nextElementSibling:n.vnode.el,p=JSON.parse(((d=s==null?void 0:s.getAttribute)==null?void 0:d.call(s,wt))||"{}");if(p[l])return p[l]}return e+"_"+t._id++}let qe=Symbol("headlessui.useid"),yt=0;function Pe(){return L(qe,()=>`${++yt}`)()}function yn(e){P(qe,e)}function E(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function N(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,N),l}var Et=Object.defineProperty,St=(e,t,n)=>t in e?Et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,je=(e,t,n)=>(St(e,typeof t!="symbol"?t+"":t,n),n);let Tt=class{constructor(){je(this,"current",this.detect()),je(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},ee=new Tt;function X(e){if(ee.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=E(e);if(t)return t.ownerDocument}return document}let Se=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var k=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(k||{}),Ve=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ve||{}),$t=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))($t||{});function Lt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Se)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Ye=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Ye||{});function Ft(e,t=0){var n;return e===((n=X(e))==null?void 0:n.body)?!1:N(t,{0(){return e.matches(Se)},1(){let l=e;for(;l!==null;){if(l.matches(Se))return!0;l=l.parentElement}return!1}})}var Ot=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Ot||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function V(e){e==null||e.focus({preventScroll:!0})}let At=["textarea","input"].join(",");function Pt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,At))!=null?n:!1}function xt(e,t=n=>n){return e.slice().sort((n,l)=>{let r=t(n),o=t(l);if(r===null||o===null)return 0;let i=r.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ce(e,t,{sorted:n=!0,relativeTo:l=null,skipElements:r=[]}={}){var o;let i=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,a=Array.isArray(e)?n?xt(e):e:Lt(e);r.length>0&&a.length>1&&(a=a.filter(f=>!r.includes(f))),l=l??i.activeElement;let u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(l))-1;if(t&4)return Math.max(0,a.indexOf(l))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=t&32?{preventScroll:!0}:{},p=0,c=a.length,v;do{if(p>=c||p+c<=0)return 0;let f=d+p;if(t&16)f=(f+c)%c;else{if(f<0)return 3;if(f>=c)return 1}v=a[f],v==null||v.focus(s),p+=u}while(v!==i.activeElement);return t&6&&Pt(v)&&v.select(),2}function Ge(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Dt(){return/Android/gi.test(window.navigator.userAgent)}function Ct(){return Ge()||Dt()}function ue(e,t,n){ee.isServer||x(l=>{document.addEventListener(e,t,n),l(()=>document.removeEventListener(e,t,n))})}function Ke(e,t,n){ee.isServer||x(l=>{window.addEventListener(e,t,n),l(()=>window.removeEventListener(e,t,n))})}function Nt(e,t,n=h(()=>!0)){function l(o,i){if(!n.value||o.defaultPrevented)return;let a=i(o);if(a===null||!a.getRootNode().contains(a))return;let u=function d(s){return typeof s=="function"?d(s()):Array.isArray(s)||s instanceof Set?s:[s]}(e);for(let d of u){if(d===null)continue;let s=d instanceof HTMLElement?d:E(d);if(s!=null&&s.contains(a)||o.composed&&o.composedPath().includes(s))return}return!Ft(a,Ye.Loose)&&a.tabIndex!==-1&&o.preventDefault(),t(o,a)}let r=g(null);ue("pointerdown",o=>{var i,a;n.value&&(r.value=((a=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:a[0])||o.target)},!0),ue("mousedown",o=>{var i,a;n.value&&(r.value=((a=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:a[0])||o.target)},!0),ue("click",o=>{Ct()||r.value&&(l(o,()=>r.value),r.value=null)},!0),ue("touchend",o=>l(o,()=>o.target instanceof HTMLElement?o.target:null),!0),Ke("blur",o=>l(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var fe=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(fe||{}),B=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(B||{});function I({visible:e=!0,features:t=0,ourProps:n,theirProps:l,...r}){var o;let i=ze(l,n),a=Object.assign(r,{props:i});if(e||t&2&&i.static)return be(a);if(t&1){let u=(o=i.unmount)==null||o?0:1;return N(u,{0(){return null},1(){return be({...r,props:{...i,hidden:!0,style:{display:"none"}}})}})}return be(a)}function be({props:e,attrs:t,slots:n,slot:l,name:r}){var o,i;let{as:a,...u}=Je(e,["unmount","static"]),d=(o=n.default)==null?void 0:o.call(n,l),s={};if(l){let p=!1,c=[];for(let[v,f]of Object.entries(l))typeof f=="boolean"&&(p=!0),f===!0&&c.push(v);p&&(s["data-headlessui-state"]=c.join(" "))}if(a==="template"){if(d=Xe(d??[]),Object.keys(u).length>0||Object.keys(t).length>0){let[p,...c]=d??[];if(!Rt(p)||c.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(u).concat(Object.keys(t)).map(m=>m.trim()).filter((m,b,D)=>D.indexOf(m)===b).sort((m,b)=>m.localeCompare(b)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let v=ze((i=p.props)!=null?i:{},u,s),f=ct(p,v,!0);for(let m in v)m.startsWith("on")&&(f.props||(f.props={}),f.props[m]=v[m]);return f}return Array.isArray(d)&&d.length===1?d[0]:d}return S(a,Object.assign({},u,s),{default:()=>d})}function Xe(e){return e.flatMap(t=>t.type===_e?Xe(t.children):[t])}function ze(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let l of e)for(let r in l)r.startsWith("on")&&typeof l[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(l[r])):t[r]=l[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(l=>[l,void 0])));for(let l in n)Object.assign(t,{[l](r,...o){let i=n[l];for(let a of i){if(r instanceof Event&&r.defaultPrevented)return;a(r,...o)}}});return t}function Je(e,t=[]){let n=Object.assign({},e);for(let l of t)l in n&&delete n[l];return n}function Rt(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var ve=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ve||{});let Te=R({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var l;let{features:r,...o}=e,i={"aria-hidden":(r&2)===2?!0:(l=o["aria-hidden"])!=null?l:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return I({ourProps:i,theirProps:o,slot:{},attrs:n,slots:t,name:"Hidden"})}}}),Qe=Symbol("Context");var $=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))($||{});function Mt(){return xe()!==null}function xe(){return L(Qe,null)}function Ht(e){P(Qe,e)}var Ze=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ze||{});function jt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let _=[];jt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&_[0]!==t.target&&(_.unshift(t.target),_=_.filter(n=>n!=null&&n.isConnected),_.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function De(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function te(){let e=[],t={addEventListener(n,l,r,o){return n.addEventListener(l,r,o),t.add(()=>n.removeEventListener(l,r,o))},requestAnimationFrame(...n){let l=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(l))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let l=setTimeout(...n);t.add(()=>clearTimeout(l))},microTask(...n){let l={current:!0};return De(()=>{l.current&&n[0]()}),t.add(()=>{l.current=!1})},style(n,l,r){let o=n.style.getPropertyValue(l);return Object.assign(n.style,{[l]:r}),this.add(()=>{Object.assign(n.style,{[l]:o})})},group(n){let l=te();return n(l),this.add(()=>l.dispose())},add(n){return e.push(n),()=>{let l=e.indexOf(n);if(l>=0)for(let r of e.splice(l,1))r()}},dispose(){for(let n of e.splice(0))n()}};return t}function et(e,t,n,l){ee.isServer||x(r=>{e=e??window,e.addEventListener(t,n,l),r(()=>e.removeEventListener(t,n,l))})}var Z=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Z||{});function It(){let e=g(0);return Ke("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function tt(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let l=E(n);l instanceof HTMLElement&&t.add(l)}return t}var nt=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(nt||{});let J=Object.assign(R({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:g(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:l}){let r=g(null);l({el:r,$el:r});let o=h(()=>X(r)),i=g(!1);A(()=>i.value=!0),j(()=>i.value=!1),Bt({ownerDocument:o},h(()=>i.value&&!!(e.features&16)));let a=Ut({ownerDocument:o,container:r,initialFocus:h(()=>e.initialFocus)},h(()=>i.value&&!!(e.features&2)));Wt({ownerDocument:o,container:r,containers:e.containers,previousActiveElement:a},h(()=>i.value&&!!(e.features&8)));let u=It();function d(v){let f=E(r);f&&(m=>m())(()=>{N(u.value,{[Z.Forwards]:()=>{ce(f,k.First,{skipElements:[v.relatedTarget]})},[Z.Backwards]:()=>{ce(f,k.Last,{skipElements:[v.relatedTarget]})}})})}let s=g(!1);function p(v){v.key==="Tab"&&(s.value=!0,requestAnimationFrame(()=>{s.value=!1}))}function c(v){if(!i.value)return;let f=tt(e.containers);E(r)instanceof HTMLElement&&f.add(E(r));let m=v.relatedTarget;m instanceof HTMLElement&&m.dataset.headlessuiFocusGuard!=="true"&&(lt(f,m)||(s.value?ce(E(r),N(u.value,{[Z.Forwards]:()=>k.Next,[Z.Backwards]:()=>k.Previous})|k.WrapAround,{relativeTo:v.target}):v.target instanceof HTMLElement&&V(v.target)))}return()=>{let v={},f={ref:r,onKeydown:p,onFocusout:c},{features:m,initialFocus:b,containers:D,...T}=e;return S(_e,[!!(m&4)&&S(Te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:ve.Focusable}),I({ourProps:f,theirProps:{...t,...T},slot:v,attrs:t,slots:n,name:"FocusTrap"}),!!(m&4)&&S(Te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:ve.Focusable})])}}}),{features:nt});function kt(e){let t=g(_.slice());return K([e],([n],[l])=>{l===!0&&n===!1?De(()=>{t.value.splice(0)}):l===!1&&n===!0&&(t.value=_.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(l=>l!=null&&l.isConnected))!=null?n:null}}function Bt({ownerDocument:e},t){let n=kt(t);A(()=>{x(()=>{var l,r;t.value||((l=e.value)==null?void 0:l.activeElement)===((r=e.value)==null?void 0:r.body)&&V(n())},{flush:"post"})}),j(()=>{t.value&&V(n())})}function Ut({ownerDocument:e,container:t,initialFocus:n},l){let r=g(null),o=g(!1);return A(()=>o.value=!0),j(()=>o.value=!1),A(()=>{K([t,n,l],(i,a)=>{if(i.every((d,s)=>(a==null?void 0:a[s])===d)||!l.value)return;let u=E(t);u&&De(()=>{var d,s;if(!o.value)return;let p=E(n),c=(d=e.value)==null?void 0:d.activeElement;if(p){if(p===c){r.value=c;return}}else if(u.contains(c)){r.value=c;return}p?V(p):ce(u,k.First|k.NoScroll)===Ve.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.value=(s=e.value)==null?void 0:s.activeElement})},{immediate:!0,flush:"post"})}),r}function Wt({ownerDocument:e,container:t,containers:n,previousActiveElement:l},r){var o;et((o=e.value)==null?void 0:o.defaultView,"focus",i=>{if(!r.value)return;let a=tt(n);E(t)instanceof HTMLElement&&a.add(E(t));let u=l.value;if(!u)return;let d=i.target;d&&d instanceof HTMLElement?lt(a,d)?(l.value=d,V(d)):(i.preventDefault(),i.stopPropagation(),V(u)):V(l.value)},!0)}function lt(e,t){for(let n of e)if(n.contains(t))return!0;return!1}function _t(e){let t=ft(e.getSnapshot());return j(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function qt(e,t){let n=e(),l=new Set;return{getSnapshot(){return n},subscribe(r){return l.add(r),()=>l.delete(r)},dispatch(r,...o){let i=t[r].call(n,...o);i&&(n=i,l.forEach(a=>a()))}}}function Vt(){let e;return{before({doc:t}){var n;let l=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-l.clientWidth},after({doc:t,d:n}){let l=t.documentElement,r=l.clientWidth-l.offsetWidth,o=e-r;n.style(l,"paddingRight",`${o}px`)}}}function Yt(){return Ge()?{before({doc:e,d:t,meta:n}){function l(r){return n.containers.flatMap(o=>o()).some(o=>o.contains(r))}t.microTask(()=>{var r;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let a=te();a.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>a.dispose()))}let o=(r=window.scrollY)!=null?r:window.pageYOffset,i=null;t.addEventListener(e,"click",a=>{if(a.target instanceof HTMLElement)try{let u=a.target.closest("a");if(!u)return;let{hash:d}=new URL(u.href),s=e.querySelector(d);s&&!l(s)&&(i=s)}catch{}},!0),t.addEventListener(e,"touchstart",a=>{if(a.target instanceof HTMLElement)if(l(a.target)){let u=a.target;for(;u.parentElement&&l(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(a.target,"touchAction","none")}),t.addEventListener(e,"touchmove",a=>{if(a.target instanceof HTMLElement)if(l(a.target)){let u=a.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()},{passive:!1}),t.add(()=>{var a;let u=(a=window.scrollY)!=null?a:window.pageYOffset;o!==u&&window.scrollTo(0,o),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function Gt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Kt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let q=qt(()=>new Map,{PUSH(e,t){var n;let l=(n=this.get(e))!=null?n:{doc:e,count:0,d:te(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let l={doc:e,d:t,meta:Kt(n)},r=[Yt(),Vt(),Gt()];r.forEach(({before:o})=>o==null?void 0:o(l)),r.forEach(({after:o})=>o==null?void 0:o(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});q.subscribe(()=>{let e=q.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let l=t.get(n.doc)==="hidden",r=n.count!==0;(r&&!l||!r&&l)&&q.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&q.dispatch("TEARDOWN",n)}});function Xt(e,t,n){let l=_t(q),r=h(()=>{let o=e.value?l.value.get(e.value):void 0;return o?o.count>0:!1});return K([e,t],([o,i],[a],u)=>{if(!o||!i)return;q.dispatch("PUSH",o,n);let d=!1;u(()=>{d||(q.dispatch("POP",a??o,n),d=!0)})},{immediate:!0}),r}let ye=new Map,Q=new Map;function Ie(e,t=g(!0)){x(n=>{var l;if(!t.value)return;let r=E(e);if(!r)return;n(function(){var i;if(!r)return;let a=(i=Q.get(r))!=null?i:1;if(a===1?Q.delete(r):Q.set(r,a-1),a!==1)return;let u=ye.get(r);u&&(u["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",u["aria-hidden"]),r.inert=u.inert,ye.delete(r))});let o=(l=Q.get(r))!=null?l:0;Q.set(r,o+1),o===0&&(ye.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0)})}function zt({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let l=g(null),r=X(l);function o(){var i,a,u;let d=[];for(let s of e)s!==null&&(s instanceof HTMLElement?d.push(s):"value"in s&&s.value instanceof HTMLElement&&d.push(s.value));if(t!=null&&t.value)for(let s of t.value)d.push(s);for(let s of(i=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?i:[])s!==document.body&&s!==document.head&&s instanceof HTMLElement&&s.id!=="headlessui-portal-root"&&(s.contains(E(l))||s.contains((u=(a=E(l))==null?void 0:a.getRootNode())==null?void 0:u.host)||d.some(p=>s.contains(p))||d.push(s));return d}return{resolveContainers:o,contains(i){return o().some(a=>a.contains(i))},mainTreeNodeRef:l,MainTreeNode(){return n!=null?null:S(Te,{features:ve.Hidden,ref:l})}}}let rt=Symbol("ForcePortalRootContext");function Jt(){return L(rt,!1)}let ke=R({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return P(rt,e.force),()=>{let{force:l,...r}=e;return I({theirProps:r,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}}),ot=Symbol("StackContext");var $e=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))($e||{});function Qt(){return L(ot,()=>{})}function Zt({type:e,enabled:t,element:n,onUpdate:l}){let r=Qt();function o(...i){l==null||l(...i),r(...i)}A(()=>{K(t,(i,a)=>{i?o(0,e,n):a===!0&&o(1,e,n)},{immediate:!0,flush:"sync"})}),j(()=>{t.value&&o(1,e,n)}),P(ot,o)}let en=Symbol("DescriptionContext");function tn({slot:e=g({}),name:t="Description",props:n={}}={}){let l=g([]);function r(o){return l.value.push(o),()=>{let i=l.value.indexOf(o);i!==-1&&l.value.splice(i,1)}}return P(en,{register:r,slot:e,name:t,props:n}),h(()=>l.value.length>0?l.value.join(" "):void 0)}function nn(e){let t=X(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}const Le=new WeakMap;function ln(e){var t;return(t=Le.get(e))!=null?t:0}function Be(e,t){let n=t(ln(e));return n<=0?Le.delete(e):Le.set(e,n),n}let rn=R({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=g(null),r=h(()=>X(l)),o=Jt(),i=L(at,null),a=g(o===!0||i==null?nn(l.value):i.resolveTarget());a.value&&Be(a.value,c=>c+1);let u=g(!1);A(()=>{u.value=!0}),x(()=>{o||i!=null&&(a.value=i.resolveTarget())});let d=L(Fe,null),s=!1,p=We();return K(l,()=>{if(s||!d)return;let c=E(l);c&&(j(d.register(c),p),s=!0)}),j(()=>{var c,v;let f=(c=r.value)==null?void 0:c.getElementById("headlessui-portal-root");!f||a.value!==f||Be(a.value,m=>m-1)||a.value.children.length>0||(v=a.value.parentElement)==null||v.removeChild(a.value)}),()=>{if(!u.value||a.value===null)return null;let c={ref:l,"data-headlessui-portal":""};return S(vt,{to:a.value},I({ourProps:c,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),Fe=Symbol("PortalParentContext");function on(){let e=L(Fe,null),t=g([]);function n(o){return t.value.push(o),e&&e.register(o),()=>l(o)}function l(o){let i=t.value.indexOf(o);i!==-1&&t.value.splice(i,1),e&&e.unregister(o)}let r={register:n,unregister:l,portals:t};return[t,R({name:"PortalWrapper",setup(o,{slots:i}){return P(Fe,r),()=>{var a;return(a=i.default)==null?void 0:a.call(i)}}})]}let at=Symbol("PortalGroupContext"),an=R({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let l=pt({resolveTarget(){return e.target}});return P(at,l),()=>{let{target:r,...o}=e;return I({theirProps:o,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}});var un=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(un||{});let Oe=Symbol("DialogContext");function it(e){let t=L(Oe,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,it),n}return t}let se="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Sn=R({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:se},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:r}){var o,i;let a=(o=e.id)!=null?o:`headlessui-dialog-${Pe()}`,u=g(!1);A(()=>{u.value=!0});let d=!1,s=h(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(d||(d=!0,console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),p=g(0),c=xe(),v=h(()=>e.open===se&&c!==null?(c.value&$.Open)===$.Open:e.open),f=g(null),m=h(()=>X(f));if(r({el:f,$el:f}),!(e.open!==se||c!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof v.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${v.value===se?void 0:e.open}`);let b=h(()=>u.value&&v.value?0:1),D=h(()=>b.value===0),T=h(()=>p.value>1),U=L(Oe,null)!==null,[ne,le]=on(),{resolveContainers:Y,mainTreeNodeRef:re,MainTreeNode:oe}=zt({portals:ne,defaultContainers:[h(()=>{var w;return(w=G.panelRef.value)!=null?w:f.value})]}),me=h(()=>T.value?"parent":"leaf"),ae=h(()=>c!==null?(c.value&$.Closing)===$.Closing:!1),he=h(()=>U||ae.value?!1:D.value),ge=h(()=>{var w,y,F;return(F=Array.from((y=(w=m.value)==null?void 0:w.querySelectorAll("body > *"))!=null?y:[]).find(O=>O.id==="headlessui-portal-root"?!1:O.contains(E(re))&&O instanceof HTMLElement))!=null?F:null});Ie(ge,he);let C=h(()=>T.value?!0:D.value),z=h(()=>{var w,y,F;return(F=Array.from((y=(w=m.value)==null?void 0:w.querySelectorAll("[data-headlessui-portal]"))!=null?y:[]).find(O=>O.contains(E(re))&&O instanceof HTMLElement))!=null?F:null});Ie(z,C),Zt({type:"Dialog",enabled:h(()=>b.value===0),element:f,onUpdate:(w,y)=>{if(y==="Dialog")return N(w,{[$e.Add]:()=>p.value+=1,[$e.Remove]:()=>p.value-=1})}});let M=tn({name:"DialogDescription",slot:h(()=>({open:v.value}))}),H=g(null),G={titleId:H,panelRef:g(null),dialogState:b,setTitleId(w){H.value!==w&&(H.value=w)},close(){t("close",!1)}};P(Oe,G);let Re=h(()=>!(!D.value||T.value));Nt(Y,(w,y)=>{w.preventDefault(),G.close(),mt(()=>y==null?void 0:y.focus())},Re);let Me=h(()=>!(T.value||b.value!==0));et((i=m.value)==null?void 0:i.defaultView,"keydown",w=>{Me.value&&(w.defaultPrevented||w.key===Ze.Escape&&(w.preventDefault(),w.stopPropagation(),G.close()))});let He=h(()=>!(ae.value||b.value!==0||U));return Xt(m,He,w=>{var y;return{containers:[...(y=w.containers)!=null?y:[],Y]}}),x(w=>{if(b.value!==0)return;let y=E(f);if(!y)return;let F=new ResizeObserver(O=>{for(let we of O){let ie=we.target.getBoundingClientRect();ie.x===0&&ie.y===0&&ie.width===0&&ie.height===0&&G.close()}});F.observe(y),w(()=>F.disconnect())}),()=>{let{open:w,initialFocus:y,...F}=e,O={...n,ref:f,id:a,role:s.value,"aria-modal":b.value===0?!0:void 0,"aria-labelledby":H.value,"aria-describedby":M.value},we={open:b.value===0};return S(ke,{force:!0},()=>[S(rn,()=>S(an,{target:f.value},()=>S(ke,{force:!1},()=>S(J,{initialFocus:y,containers:Y,features:D.value?N(me.value,{parent:J.features.RestoreFocus,leaf:J.features.All&~J.features.FocusLock}):J.features.None},()=>S(le,{},()=>I({ourProps:O,theirProps:{...F,...n},slot:we,attrs:n,slots:l,visible:b.value===0,features:fe.RenderStrategy|fe.Static,name:"Dialog"})))))),S(oe)])}}}),Tn=R({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:l}){var r;let o=(r=e.id)!=null?r:`headlessui-dialog-panel-${Pe()}`,i=it("DialogPanel");l({el:i.panelRef,$el:i.panelRef});function a(u){u.stopPropagation()}return()=>{let{...u}=e,d={id:o,ref:i.panelRef,onClick:a};return I({ourProps:d,theirProps:u,slot:{open:i.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}});function sn(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Ee(e,...t){e&&t.length>0&&e.classList.add(...t)}function de(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Ae=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Ae||{});function dn(e,t){let n=te();if(!e)return n.dispose;let{transitionDuration:l,transitionDelay:r}=getComputedStyle(e),[o,i]=[l,r].map(a=>{let[u=0]=a.split(",").filter(Boolean).map(d=>d.includes("ms")?parseFloat(d):parseFloat(d)*1e3).sort((d,s)=>s-d);return u});return o!==0?n.setTimeout(()=>t("finished"),o+i):t("finished"),n.add(()=>t("cancelled")),n.dispose}function Ue(e,t,n,l,r,o){let i=te(),a=o!==void 0?sn(o):()=>{};return de(e,...r),Ee(e,...t,...n),i.nextFrame(()=>{de(e,...n),Ee(e,...l),i.add(dn(e,u=>(de(e,...l,...t),Ee(e,...r),a(u))))}),i.add(()=>de(e,...t,...n,...l,...r)),i.add(()=>a("cancelled")),i.dispose}function W(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let Ce=Symbol("TransitionContext");var cn=(e=>(e.Visible="visible",e.Hidden="hidden",e))(cn||{});function fn(){return L(Ce,null)!==null}function vn(){let e=L(Ce,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function pn(){let e=L(Ne,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Ne=Symbol("NestingContext");function pe(e){return"children"in e?pe(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function ut(e){let t=g([]),n=g(!1);A(()=>n.value=!0),j(()=>n.value=!1);function l(o,i=B.Hidden){let a=t.value.findIndex(({id:u})=>u===o);a!==-1&&(N(i,{[B.Unmount](){t.value.splice(a,1)},[B.Hidden](){t.value[a].state="hidden"}}),!pe(t)&&n.value&&(e==null||e()))}function r(o){let i=t.value.find(({id:a})=>a===o);return i?i.state!=="visible"&&(i.state="visible"):t.value.push({id:o,state:"visible"}),()=>l(o,B.Unmount)}return{children:t,register:r,unregister:l}}let st=fe.RenderStrategy,mn=R({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:r}){let o=g(0);function i(){o.value|=$.Opening,t("beforeEnter")}function a(){o.value&=~$.Opening,t("afterEnter")}function u(){o.value|=$.Closing,t("beforeLeave")}function d(){o.value&=~$.Closing,t("afterLeave")}if(!fn()&&Mt())return()=>S(gn,{...e,onBeforeEnter:i,onAfterEnter:a,onBeforeLeave:u,onAfterLeave:d},l);let s=g(null),p=h(()=>e.unmount?B.Unmount:B.Hidden);r({el:s,$el:s});let{show:c,appear:v}=vn(),{register:f,unregister:m}=pn(),b=g(c.value?"visible":"hidden"),D={value:!0},T=Pe(),U={value:!1},ne=ut(()=>{!U.value&&b.value!=="hidden"&&(b.value="hidden",m(T),d())});A(()=>{let C=f(T);j(C)}),x(()=>{if(p.value===B.Hidden&&T){if(c.value&&b.value!=="visible"){b.value="visible";return}N(b.value,{hidden:()=>m(T),visible:()=>f(T)})}});let le=W(e.enter),Y=W(e.enterFrom),re=W(e.enterTo),oe=W(e.entered),me=W(e.leave),ae=W(e.leaveFrom),he=W(e.leaveTo);A(()=>{x(()=>{if(b.value==="visible"){let C=E(s);if(C instanceof Comment&&C.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function ge(C){let z=D.value&&!v.value,M=E(s);!M||!(M instanceof HTMLElement)||z||(U.value=!0,c.value&&i(),c.value||u(),C(c.value?Ue(M,le,Y,re,oe,H=>{U.value=!1,H===Ae.Finished&&a()}):Ue(M,me,ae,he,oe,H=>{U.value=!1,H===Ae.Finished&&(pe(ne)||(b.value="hidden",m(T),d()))})))}return A(()=>{K([c],(C,z,M)=>{ge(M),D.value=!1},{immediate:!0})}),P(Ne,ne),Ht(h(()=>N(b.value,{visible:$.Open,hidden:$.Closed})|o.value)),()=>{let{appear:C,show:z,enter:M,enterFrom:H,enterTo:G,entered:Re,leave:Me,leaveFrom:He,leaveTo:w,...y}=e,F={ref:s},O={...y,...v.value&&c.value&&ee.isServer?{class:ht([n.class,y.class,...le,...Y])}:{}};return I({theirProps:O,ourProps:F,slot:{},slots:l,attrs:n,features:st,visible:b.value==="visible",name:"TransitionChild"})}}}),hn=mn,gn=R({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l}){let r=xe(),o=h(()=>e.show===null&&r!==null?(r.value&$.Open)===$.Open:e.show);x(()=>{if(![!0,!1].includes(o.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let i=g(o.value?"visible":"hidden"),a=ut(()=>{i.value="hidden"}),u=g(!0),d={show:o,appear:h(()=>e.appear||!u.value)};return A(()=>{x(()=>{u.value=!1,o.value?i.value="visible":pe(a)||(i.value="hidden")})}),P(Ne,a),P(Ce,d),()=>{let s=Je(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),p={unmount:e.unmount};return I({ourProps:{...p,as:"template"},theirProps:{},slot:{},slots:{...l,default:()=>[S(hn,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...p,...s},l.default)]},attrs:{},features:st,visible:i.value==="visible",name:"Transition"})}}});export{Tn as G,gn as S,Sn as Y,mn as h,yn as l,bn as u};
