import E from"./5TZW9lYD.js";import{h as O,E as G,m as u,o as b,f as p,c as H,Q as k,w as z,r as h,a4 as j,a5 as P,A as x,O as D,a as W,P as Y,a6 as Z,a7 as C,H as R,C as X,j as L,Y as ee,Z as re,V as te,I as $,J as ae,K as ne,M as B,R as I,t as ie}from"./WcQcSfuM.js";import{_ as A}from"./DlAUqK2U.js";import{_ as oe}from"./Bm3mV9bC.js";const U=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function F(e,i){i?i={...U,...i}:i=U;const a=T(i);return a.dispatch(e),a.toString()}const se=Object.freeze(["prototype","__proto__","constructor"]);function T(e){let i="",a=new Map;const t=r=>{i+=r};return{toString(){return i},getContext(){return a},dispatch(r){return e.replacer&&(r=e.replacer(r)),this[r===null?"null":typeof r](r)},object(r){if(r&&typeof r.toJSON=="function")return this.object(r.toJSON());const n=Object.prototype.toString.call(r);let o="";const d=n.length;d<10?o="unknown:["+n+"]":o=n.slice(8,d-1),o=o.toLowerCase();let c=null;if((c=a.get(r))===void 0)a.set(r,a.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(r))return t("buffer:"),t(r.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](r):e.ignoreUnknown||this.unkown(r,o);else{let s=Object.keys(r);e.unorderedObjects&&(s=s.sort());let g=[];e.respectType!==!1&&!K(r)&&(g=se),e.excludeKeys&&(s=s.filter(l=>!e.excludeKeys(l)),g=g.filter(l=>!e.excludeKeys(l))),t("object:"+(s.length+g.length)+":");const f=l=>{this.dispatch(l),t(":"),e.excludeValues||this.dispatch(r[l]),t(",")};for(const l of s)f(l);for(const l of g)f(l)}},array(r,n){if(n=n===void 0?e.unorderedArrays!==!1:n,t("array:"+r.length+":"),!n||r.length<=1){for(const c of r)this.dispatch(c);return}const o=new Map,d=r.map(c=>{const s=T(e);s.dispatch(c);for(const[g,f]of s.getContext())o.set(g,f);return s.toString()});return a=o,d.sort(),this.array(d,!1)},date(r){return t("date:"+r.toJSON())},symbol(r){return t("symbol:"+r.toString())},unkown(r,n){if(t(n),!!r&&(t(":"),r&&typeof r.entries=="function"))return this.array(Array.from(r.entries()),!0)},error(r){return t("error:"+r.toString())},boolean(r){return t("bool:"+r)},string(r){t("string:"+r.length+":"),t(r)},function(r){t("fn:"),K(r)?this.dispatch("[native]"):this.dispatch(r.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(r.name)),e.respectFunctionProperties&&this.object(r)},number(r){return t("number:"+r)},xml(r){return t("xml:"+r.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(r){return t("regex:"+r.toString())},uint8array(r){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(r))},uint8clampedarray(r){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(r))},int8array(r){return t("int8array:"),this.dispatch(Array.prototype.slice.call(r))},uint16array(r){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(r))},int16array(r){return t("int16array:"),this.dispatch(Array.prototype.slice.call(r))},uint32array(r){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(r))},int32array(r){return t("int32array:"),this.dispatch(Array.prototype.slice.call(r))},float32array(r){return t("float32array:"),this.dispatch(Array.prototype.slice.call(r))},float64array(r){return t("float64array:"),this.dispatch(Array.prototype.slice.call(r))},arraybuffer(r){return t("arraybuffer:"),this.dispatch(new Uint8Array(r))},url(r){return t("url:"+r.toString())},map(r){t("map:");const n=[...r];return this.array(n,e.unorderedSets!==!1)},set(r){t("set:");const n=[...r];return this.array(n,e.unorderedSets!==!1)},file(r){return t("file:"),this.dispatch([r.name,r.size,r.type,r.lastModfied])},blob(){if(e.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(r){return t("bigint:"+r.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const _="[native code] }",le=_.length;function K(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-le)===_}function ue(e,i,a={}){return e===i||F(e,a)===F(i,a)}function de(e,i){const a={...e};for(const t of i)delete a[t];return a}function ce(e,i,a){typeof i=="string"&&(i=i.split(".").map(r=>{const n=Number(r);return isNaN(n)?r:n}));let t=e;for(const r of i){if(t==null)return a;t=t[r]}return t!==void 0?t:a}const w={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},ge={as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},fe=e=>Object.keys(w).reduce((a,t)=>(e[t]!==void 0&&(a[t]=e[t]),a),{}),$e=e=>[...Object.keys(w),...Object.keys(ge)].reduce((a,t)=>(e[t]!==void 0&&(a[t]=e[t]),a),{}),ye=O({props:{name:{type:String,required:!0},dynamic:{type:Boolean,default:!1}},setup(e){const i=G();return{dynamic:u(()=>{var t,r;return e.dynamic||((r=(t=i.ui)==null?void 0:t.icons)==null?void 0:r.dynamic)})}}});function be(e,i,a,t,r,n){const o=E;return e.dynamic?(b(),p(o,{key:0,name:e.name},null,8,["name"])):(b(),H("span",{key:1,class:k(e.name)},null,2))}const V=A(ye,[["render",be]]),pe=O({inheritAttrs:!1,props:{...w,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function i(a,t,{isActive:r,isExactActive:n}){return e.exactQuery&&!ue(a.query,t.query)||e.exactHash&&a.hash!==t.hash?e.inactiveClass:e.exact&&n||!e.exact&&r?e.activeClass:e.inactiveClass}return{resolveLinkClass:i}}}),ve=["href","aria-disabled","role","rel","target","onClick"];function he(e,i,a,t,r,n){const o=oe;return e.to?(b(),p(o,x({key:1},e.$props,{custom:""}),{default:z(({route:d,href:c,target:s,rel:g,navigate:f,isActive:l,isExactActive:m,isExternal:S})=>[W("a",x(e.$attrs,{href:e.disabled?void 0:c,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:g,target:s,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(d,e._.provides[Y]||e.$route,{isActive:l,isExactActive:m}),onClick:v=>!S&&!e.disabled&&f(v)}),[h(e.$slots,"default",j(P({isActive:e.active!==void 0?e.active:e.exact?m:l})))],16,ve)]),_:3},16)):(b(),p(D(e.as),x({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:z(()=>[h(e.$slots,"default",j(P({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const J=A(pe,[["render",he]]),me=(e,i,a,t,r=!1)=>{const n=Z(),o=G(),d=u(()=>{var l;const s=C(i),g=C(a),f=C(t);return R((s==null?void 0:s.strategy)||((l=o.ui)==null?void 0:l.strategy),f?{wrapper:f}:{},s||{},r?ce(o.ui,e,{}):{},g||{})}),c=u(()=>de(n,["class"]));return{ui:d,attrs:c}};function ke({ui:e,props:i}){const a=te();if(X("ButtonGroupContextConsumer",!0),L("ButtonGroupContextConsumer",!1))return{size:u(()=>i.size),rounded:u(()=>e.value.rounded)};let r=a.parent,n;for(;r&&!n;){if(r.type.name==="ButtonGroup"){n=L(`group-${r.uid}`);break}r=r.parent}const o=u(()=>n==null?void 0:n.value.children.indexOf(a));return ee(()=>{n==null||n.value.register(a)}),re(()=>{n==null||n.value.unregister(a)}),{size:u(()=>(n==null?void 0:n.value.size)||i.size),rounded:u(()=>!n||o.value===-1?e.value.rounded:n.value.children.length===1?n.value.ui.rounded:o.value===0?n.value.rounded.start:o.value===n.value.children.length-1?n.value.rounded.end:"rounded-none")}}const xe={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},Q={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},M={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...Q,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...M,option:{...M.option},arrow:{...Q}});const y=R($.ui.strategy,$.ui.button,xe),we=O({components:{UIcon:V,ULink:J},inheritAttrs:!1,props:{...w,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>y.default.size,validator(e){return Object.keys(y.size).includes(e)}},color:{type:String,default:()=>y.default.color,validator(e){return[...$.ui.colors,...Object.keys(y.color)].includes(e)}},variant:{type:String,default:()=>y.default.variant,validator(e){return[...Object.keys(y.variant),...Object.values(y.color).flatMap(i=>Object.keys(i))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>y.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:i}){const{ui:a,attrs:t}=me("button",ae(e,"ui"),y),{size:r,rounded:n}=ke({ui:a,props:e}),o=u(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),d=u(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),c=u(()=>e.square||!i.default&&!e.label),s=u(()=>{var q,N;const v=((N=(q=a.value.color)==null?void 0:q[e.color])==null?void 0:N[e.variant])||a.value.variant[e.variant];return ne(B(a.value.base,a.value.font,n.value,a.value.size[r.value],a.value.gap[r.value],e.padded&&a.value[c.value?"square":"padding"][r.value],v==null?void 0:v.replaceAll("{color}",e.color),e.block?a.value.block:a.value.inline),e.class)}),g=u(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),f=u(()=>e.loading&&!o.value?e.loadingIcon:e.trailingIcon||e.icon),l=u(()=>B(a.value.icon.base,a.value.icon.size[r.value],e.loading&&a.value.icon.loading)),m=u(()=>B(a.value.icon.base,a.value.icon.size[r.value],e.loading&&!o.value&&a.value.icon.loading)),S=u(()=>fe(e));return{ui:a,attrs:t,isLeading:o,isTrailing:d,isSquare:c,buttonClass:s,leadingIconName:g,trailingIconName:f,leadingIconClass:l,trailingIconClass:m,linkProps:S}}});function Se(e,i,a,t,r,n){const o=V,d=J;return b(),p(d,x({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:z(()=>[h(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(b(),p(o,{key:0,name:e.leadingIconName,class:k(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):I("",!0)]),h(e.$slots,"default",{},()=>[e.label?(b(),H("span",{key:0,class:k([e.truncate?e.ui.truncate:""])},ie(e.label),3)):I("",!0)]),h(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(b(),p(o,{key:0,name:e.trailingIconName,class:k(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):I("",!0)])]),_:3},16,["type","disabled","class"])}const Oe=A(we,[["render",Se]]);export{Oe as _,V as a,ke as b,J as c,$e as g,me as u};
