import{a as U,b as H,c as ue,d as G,g as de,e as J,u as $e,_ as ce}from"./B_U2RU2v.js";import{k as Q,m as M,n as k,f as B,q as j,i as f,U as D,V as C,h as Z,W as ze,o as r,c as o,l as S,v as z,X as Ce,x as m,t as I,y as w,z as A,d as ae,F as T,r as W,b as h,w as _,Y as ge,a as x,s as K,D as ee,A as ie,E as Ae}from"./gJGZtdr2.js";import{_ as F}from"./DlAUqK2U.js";import{Y as Se,G as Ie,S as _e,h as je,l as Ue,u as Oe}from"./BfcCmUDP.js";import"./D-96798Y.js";import"./CvPl5tTm.js";import"./CQx9f-7F.js";function oe(e){return typeof e=="function"?e():Q(e)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const se=()=>{};function Ve(e,t){function n(...a){return new Promise((i,g)=>{Promise.resolve(e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})).then(i).catch(g)})}return n}function Be(e,t={}){let n,a,i=se;const g=l=>{clearTimeout(l),i(),i=se};return l=>{const d=oe(e),u=oe(t.maxWait);return n&&g(n),d<=0||u!==void 0&&u<=0?(a&&(g(a),a=null),Promise.resolve(l())):new Promise((p,$)=>{i=t.rejectOnCancel?$:p,u&&!a&&(a=setTimeout(()=>{n&&g(n),a=null,p(l())},u)),n=setTimeout(()=>{a&&g(a),a=null,p(l())},d)})}}function Te(e,t=200,n={}){return Ve(Be(t,n),e)}const Ne={wrapper:"relative inline-flex items-center justify-center flex-shrink-0",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-full",text:"font-medium leading-none text-gray-900 dark:text-white truncate",placeholder:"font-medium leading-none text-gray-500 dark:text-gray-400 truncate",size:{"3xs":"h-4 w-4 text-[8px]","2xs":"h-5 w-5 text-[10px]",xs:"h-6 w-6 text-xs",sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg",xl:"h-14 w-14 text-xl","2xl":"h-16 w-16 text-2xl","3xl":"h-20 w-20 text-3xl"},chip:{base:"absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",background:"bg-{color}-500 dark:bg-{color}-400",position:{"top-right":"top-0 right-0","bottom-right":"bottom-0 right-0","top-left":"top-0 left-0","bottom-left":"bottom-0 left-0"},size:{"3xs":"h-[4px] min-w-[4px] text-[4px] p-px","2xs":"h-[5px] min-w-[5px] text-[5px] p-px",xs:"h-1.5 min-w-[0.375rem] text-[6px] p-px",sm:"h-2 min-w-[0.5rem] text-[7px] p-0.5",md:"h-2.5 min-w-[0.625rem] text-[8px] p-0.5",lg:"h-3 min-w-[0.75rem] text-[10px] p-0.5",xl:"h-3.5 min-w-[0.875rem] text-[11px] p-1","2xl":"h-4 min-w-[1rem] text-[12px] p-1","3xl":"h-5 min-w-[1.25rem] text-[14px] p-1"}},icon:{base:"text-gray-500 dark:text-gray-400 flex-shrink-0",size:{"3xs":"h-2 w-2","2xs":"h-2.5 w-2.5",xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7","2xl":"h-8 w-8","3xl":"h-10 w-10"}},default:{size:"sm",icon:null,chipColor:null,chipPosition:"top-right"}},Fe={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{size:"sm",variant:"solid",color:"primary"}},Le={wrapper:"relative",base:"relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",form:"form-input",rounded:"rounded-md",placeholder:"placeholder-gray-400 dark:placeholder-gray-500",file:{base:"file:cursor-pointer file:rounded-l-md file:absolute file:left-0 file:inset-y-0 file:font-medium file:m-0 file:border-0 file:ring-1 file:ring-gray-300 dark:file:ring-gray-700 file:text-gray-900 dark:file:text-white file:bg-gray-50 hover:file:bg-gray-100 dark:file:bg-gray-800 dark:hover:file:bg-gray-700/50",padding:{"2xs":"ps-[85px]",xs:"ps-[87px]",sm:"ps-[96px]",md:"ps-[98px]",lg:"ps-[100px]",xl:"ps-[109px]"}},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},leading:{padding:{"2xs":"ps-7",xs:"ps-8",sm:"ps-9",md:"ps-10",lg:"ps-11",xl:"ps-12"}},trailing:{padding:{"2xs":"pe-7",xs:"pe-8",sm:"pe-9",md:"pe-10",lg:"pe-11",xl:"pe-12"}},color:{white:{outline:"shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"},gray:{outline:"shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"}},variant:{outline:"shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",none:"bg-transparent focus:ring-0 focus:shadow-none"},icon:{base:"flex-shrink-0 text-gray-400 dark:text-gray-500",color:"text-{color}-500 dark:text-{color}-400",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"},leading:{wrapper:"absolute inset-y-0 start-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}},trailing:{wrapper:"absolute inset-y-0 end-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}}},default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid"}},De={...Le,form:"form-select",placeholder:"text-gray-400 dark:text-gray-500",default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"}},We={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},He={wrapper:"relative",base:"group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",ring:"focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",padding:"px-2.5 py-1.5",width:"w-full",rounded:"rounded-md",font:"font-medium",size:"text-sm",active:"text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",label:"truncate relative",icon:{base:"flex-shrink-0 w-5 h-5 relative",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"2xs"},badge:{base:"flex-shrink-0 ml-auto relative rounded",color:"gray",variant:"solid",size:"xs"},divider:{wrapper:{base:"p-2"}}},Me={wrapper:"relative w-full flex items-center justify-between",container:"flex items-center min-w-0",inner:"min-w-0",base:"group relative w-full flex items-center gap-1.5 px-2.5 py-3.5 rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75",before:"before:absolute before:inset-x-0 before:inset-y-2 before:inset-px before:rounded-md hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",after:"after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2",active:"text-gray-900 dark:text-white after:bg-primary-500 dark:after:bg-primary-400 after:rounded-full",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",label:"truncate relative",icon:{base:"flex-shrink-0 w-5 h-5 relative",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"2xs"},badge:{base:"flex-shrink-0 ml-auto relative rounded",color:"gray",variant:"solid",size:"xs"}},Re={wrapper:"fixed inset-0 flex z-50",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},base:"relative flex-1 flex flex-col w-full focus:outline-none",background:"bg-white dark:bg-gray-900",ring:"",rounded:"",padding:"",shadow:"shadow-xl",width:"w-screen max-w-md",translate:{base:"translate-x-0",left:"-translate-x-full rtl:translate-x-full",right:"translate-x-full rtl:-translate-x-full"},transition:{enter:"transform transition ease-in-out duration-300",leave:"transform transition ease-in-out duration-200"}},L=M(k.ui.strategy,k.ui.avatar,Ne),Ee=B({components:{UIcon:U},inheritAttrs:!1,props:{as:{type:[String,Object],default:"img"},src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:()=>L.default.icon},size:{type:String,default:()=>L.default.size,validator(e){return Object.keys(L.size).includes(e)}},chipColor:{type:String,default:()=>L.default.chipColor,validator(e){return["gray",...k.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>L.default.chipPosition,validator(e){return Object.keys(L.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},imgClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:n}=H("avatar",j(e,"ui"),L),a=f(()=>typeof e.src=="boolean"?null:e.src),i=f(()=>(e.alt||"").split(" ").map($=>$.charAt(0)).join("").substring(0,2)),g=f(()=>D(C(t.value.wrapper,(u.value||!a.value)&&t.value.background,t.value.rounded,t.value.size[e.size]),e.class)),s=f(()=>D(C(t.value.rounded,t.value.size[e.size]),e.imgClass)),l=f(()=>C(t.value.icon.base,t.value.icon.size[e.size])),d=f(()=>C(t.value.chip.base,t.value.chip.size[e.size],t.value.chip.position[e.chipPosition],t.value.chip.background.replaceAll("{color}",e.chipColor))),u=Z(!1);ze(()=>e.src,()=>{u.value&&(u.value=!1)});function p(){u.value=!0}return{ui:t,attrs:n,wrapperClass:g,imgClass:s,iconClass:l,chipClass:d,url:a,placeholder:i,error:u,onError:p}}});function qe(e,t,n,a,i,g){const s=U;return r(),o("span",{class:m(e.wrapperClass)},[e.url&&!e.error?(r(),S(Ce(e.as),z({key:0,class:e.imgClass,alt:e.alt,src:e.url},e.attrs,{onError:e.onError}),null,16,["class","alt","src","onError"])):e.text?(r(),o("span",{key:1,class:m(e.ui.text)},I(e.text),3)):e.icon?(r(),S(s,{key:2,name:e.icon,class:m(e.iconClass)},null,8,["name","class"])):e.placeholder?(r(),o("span",{key:3,class:m(e.ui.placeholder)},I(e.placeholder),3)):w("",!0),e.chipColor?(r(),o("span",{key:4,class:m(e.chipClass)},I(e.chipText),3)):w("",!0),A(e.$slots,"default")],2)}const R=F(Ee,[["render",qe]]),N=M(k.ui.strategy,k.ui.badge,Fe),Ye=B({inheritAttrs:!1,props:{size:{type:String,default:()=>N.default.size,validator(e){return Object.keys(N.size).includes(e)}},color:{type:String,default:()=>N.default.color,validator(e){return[...k.ui.colors,...Object.keys(N.color)].includes(e)}},variant:{type:String,default:()=>N.default.variant,validator(e){return[...Object.keys(N.variant),...Object.values(N.color).flatMap(t=>Object.keys(t))].includes(e)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:n}=H("badge",j(e,"ui"),N),{size:a,rounded:i}=ue({ui:t,props:e}),g=f(()=>{var l,d;const s=((d=(l=t.value.color)==null?void 0:l[e.color])==null?void 0:d[e.variant])||t.value.variant[e.variant];return D(C(t.value.base,t.value.font,i.value,t.value.size[a.value],s==null?void 0:s.replaceAll("{color}",e.color)),e.class)});return{attrs:n,badgeClass:g}}});function Je(e,t,n,a,i,g){return r(),o("span",z({class:e.badgeClass},e.attrs),[A(e.$slots,"default",{},()=>[ae(I(e.label),1)])],16)}const P=F(Ye,[["render",Je]]),Ke=M(k.ui.strategy,k.ui.horizontalNavigation,Me),Xe=B({components:{UIcon:U,UAvatar:R,UBadge:P,ULink:G},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:n}=H("horizontalNavigation",j(e,"ui"),Ke,j(e,"class")),a=f(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:t,attrs:n,sections:a,getULinkProps:de,twMerge:D,twJoin:C}}}),Qe={key:0,class:"sr-only"};function Ze(e,t,n,a,i,g){const s=R,l=U,d=P,u=G;return r(),o("nav",z({class:e.ui.wrapper},e.attrs),[(r(!0),o(T,null,W(e.sections,(p,$)=>(r(),o("ul",{key:`section${$}`,class:m(e.ui.container)},[(r(!0),o(T,null,W(p,(c,v)=>(r(),o("li",{key:`section${$}-${v}`,class:m(e.ui.inner)},[h(u,z({ref_for:!0},e.getULinkProps(c),{class:[e.ui.base,e.ui.before,e.ui.after],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:c.click,onKeyup:t[0]||(t[0]=ge(y=>y.target.blur(),["enter"]))}),{default:_(({isActive:y})=>[A(e.$slots,"avatar",{link:c,isActive:y},()=>[c.avatar?(r(),S(s,z({key:0,ref_for:!0},{size:e.ui.avatar.size,...c.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):w("",!0)]),A(e.$slots,"icon",{link:c,isActive:y},()=>[c.icon?(r(),S(l,{key:0,name:c.icon,class:m(e.twMerge(e.twJoin(e.ui.icon.base,y?e.ui.icon.active:e.ui.icon.inactive),c.iconClass))},null,8,["name","class"])):w("",!0)]),A(e.$slots,"default",{link:c,isActive:y},()=>[c.label?(r(),o("span",{key:0,class:m(e.twMerge(e.ui.label,c.labelClass))},[y?(r(),o("span",Qe," Current page: ")):w("",!0),ae(" "+I(c.label),1)],2)):w("",!0)]),A(e.$slots,"badge",{link:c,isActive:y},()=>[c.badge?(r(),S(d,z({key:0,ref_for:!0},{size:e.ui.badge.size,color:e.ui.badge.color,variant:e.ui.badge.variant,...typeof c.badge=="string"||typeof c.badge=="number"?{label:c.badge}:c.badge},{class:e.ui.badge.base}),null,16,["class"])):w("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])],2))),128))],2))),128))],16)}const Ge=F(Xe,[["render",Ze]]),X=M(k.ui.strategy,k.ui.divider,We),Pe=B({components:{UIcon:U,UAvatar:R},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>X.default.size,validator(e){return Object.keys(X.border.size.horizontal).includes(e)||Object.keys(X.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:n}=H("divider",j(e,"ui"),X),a=f(()=>D(C(t.value.wrapper.base,t.value.wrapper[e.orientation]),e.class)),i=f(()=>C(t.value.container.base,t.value.container[e.orientation])),g=f(()=>C(t.value.border.base,t.value.border[e.orientation],t.value.border.size[e.orientation][e.size],t.value.border.type[e.type]));return{ui:t,attrs:n,wrapperClass:a,containerClass:i,borderClass:g}}});function ea(e,t,n,a,i,g){const s=U,l=R;return r(),o("div",z({class:e.wrapperClass},e.attrs),[x("div",{class:m(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(r(),o(T,{key:0},[x("div",{class:m(e.containerClass)},[A(e.$slots,"default",{},()=>[e.label?(r(),o("span",{key:0,class:m(e.ui.label)},I(e.label),3)):e.icon?(r(),S(s,{key:1,name:e.icon,class:m(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(r(),S(l,z({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):w("",!0)])],2),x("div",{class:m(e.borderClass)},null,2)],64)):w("",!0)],16)}const fe=F(Pe,[["render",ea]]),aa=M(k.ui.strategy,k.ui.verticalNavigation,He),ta=B({components:{UIcon:U,UAvatar:R,UBadge:P,ULink:G,UDivider:fe},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:n}=H("verticalNavigation",j(e,"ui"),aa,j(e,"class")),a=f(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:t,attrs:n,sections:a,getULinkProps:de,twMerge:D,twJoin:C}}}),na={key:0,class:"sr-only"};function ra(e,t,n,a,i,g){const s=R,l=U,d=P,u=G,p=fe;return r(),o("nav",z({class:e.ui.wrapper},e.attrs),[(r(!0),o(T,null,W(e.sections,($,c)=>(r(),o("ul",{key:`section${c}`},[(r(!0),o(T,null,W($,(v,y)=>(r(),o("li",{key:`section${c}-${y}`},[h(u,z({ref_for:!0},e.getULinkProps(v),{class:[e.ui.base,e.ui.padding,e.ui.width,e.ui.ring,e.ui.rounded,e.ui.font,e.ui.size],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:v.click,onKeyup:t[0]||(t[0]=ge(O=>O.target.blur(),["enter"]))}),{default:_(({isActive:O})=>[A(e.$slots,"avatar",{link:v,isActive:O},()=>[v.avatar?(r(),S(s,z({key:0,ref_for:!0},{size:e.ui.avatar.size,...v.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):w("",!0)]),A(e.$slots,"icon",{link:v,isActive:O},()=>[v.icon?(r(),S(l,{key:0,name:v.icon,class:m(e.twMerge(e.twJoin(e.ui.icon.base,O?e.ui.icon.active:e.ui.icon.inactive),v.iconClass))},null,8,["name","class"])):w("",!0)]),A(e.$slots,"default",{link:v,isActive:O},()=>[v.label?(r(),o("span",{key:0,class:m(e.twMerge(e.ui.label,v.labelClass))},[O?(r(),o("span",na," Current page: ")):w("",!0),ae(" "+I(v.label),1)],2)):w("",!0)]),A(e.$slots,"badge",{link:v,isActive:O},()=>[v.badge?(r(),S(d,z({key:0,ref_for:!0},{size:e.ui.badge.size,color:e.ui.badge.color,variant:e.ui.badge.variant,...typeof v.badge=="string"||typeof v.badge=="number"?{label:v.badge}:v.badge},{class:e.ui.badge.base}),null,16,["class"])):w("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])]))),128)),c<e.sections.length-1?(r(),S(p,{key:0,ui:e.ui.divider},null,8,["ui"])):w("",!0)]))),128))],16)}const la=F(ta,[["render",ra]]),ia=M(k.ui.strategy,k.ui.slideover,Re),oa=B({components:{HDialog:Se,HDialogPanel:Ie,TransitionRoot:_e,TransitionChild:je},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:t}){const{ui:n,attrs:a}=H("slideover",j(e,"ui"),ia,j(e,"class")),i=f({get(){return e.modelValue},set(d){t("update:modelValue",d)}}),g=f(()=>e.transition?{...n.value.transition,enterFrom:e.side==="left"?n.value.translate.left:n.value.translate.right,enterTo:n.value.translate.base,leaveFrom:n.value.translate.base,leaveTo:e.side==="left"?n.value.translate.left:n.value.translate.right}:{});function s(d){if(e.preventClose){t("close-prevented");return}i.value=d,t("close")}const l=()=>{t("after-leave")};return Ue(()=>Oe("$zSEivjycv8")),{ui:n,attrs:a,isOpen:i,transitionClass:g,onAfterLeave:l,close:s}}});function sa(e,t,n,a,i,g){const s=K("TransitionChild"),l=K("HDialogPanel"),d=K("HDialog"),u=K("TransitionRoot");return r(),S(u,{as:"template",appear:e.appear,show:e.isOpen,onAfterLeave:e.onAfterLeave},{default:_(()=>[h(d,z({class:[e.ui.wrapper,{"justify-end":e.side==="right"}]},e.attrs,{onClose:e.close}),{default:_(()=>[e.overlay?(r(),S(s,z({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:_(()=>[x("div",{class:m([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):w("",!0),h(s,z({as:"template",appear:e.appear},e.transitionClass),{default:_(()=>[h(l,{class:m([e.ui.base,e.ui.width,e.ui.background,e.ui.ring,e.ui.padding])},{default:_(()=>[A(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const ua=F(oa,[["render",sa]]),da=(e,t)=>{const n=ee("form-events",void 0),a=ee("form-group",void 0),i=ee("form-inputs",void 0);a&&(e!=null&&e.id&&(a.inputId.value=e==null?void 0:e.id),i&&(i.value[a.name.value]=a.inputId.value));const g=Z(!1);function s(p,$){n&&n.emit({type:p,path:$})}function l(){s("blur",a==null?void 0:a.name.value),g.value=!0}function d(){s("change",a==null?void 0:a.name.value)}const u=Te(()=>{(g.value||a!=null&&a.eagerValidation.value)&&s("input",a==null?void 0:a.name.value)},300);return{inputId:f(()=>(e==null?void 0:e.id)??(a==null?void 0:a.inputId.value)),name:f(()=>(e==null?void 0:e.name)??(a==null?void 0:a.name.value)),size:f(()=>{var $;const p=t.size[a==null?void 0:a.size.value]?a==null?void 0:a.size.value:null;return(e==null?void 0:e.size)??p??(($=t==null?void 0:t.default)==null?void 0:$.size)}),color:f(()=>{var p;return(p=a==null?void 0:a.error)!=null&&p.value?"red":e==null?void 0:e.color}),emitFormBlur:l,emitFormInput:u,emitFormChange:d}},V=M(k.ui.strategy,k.ui.select,De),ca=B({components:{UIcon:U},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>V.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>V.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},size:{type:String,default:null,validator(e){return Object.keys(V.size).includes(e)}},color:{type:String,default:()=>V.default.color,validator(e){return[...k.ui.colors,...Object.keys(V.color)].includes(e)}},variant:{type:String,default:()=>V.default.variant,validator(e){return[...Object.keys(V.variant),...Object.values(V.color).flatMap(t=>Object.keys(t))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:t,slots:n}){const{ui:a,attrs:i}=H("select",j(e,"ui"),V,j(e,"class")),{size:g,rounded:s}=ue({ui:a,props:e}),{emitFormChange:l,inputId:d,color:u,size:p,name:$}=da(e,V),c=f(()=>g.value||p.value),v=b=>{t("update:modelValue",b.target.value)},y=b=>{t("change",b.target.value),l()},O=b=>J(b,e.valueAttribute,J(b,e.optionAttribute)),ve=b=>J(b,e.optionAttribute,J(b,e.valueAttribute)),te=b=>["string","number","boolean"].includes(typeof b)?{[e.valueAttribute]:b,[e.optionAttribute]:b}:{...b,[e.valueAttribute]:O(b),[e.optionAttribute]:ve(b)},ne=f(()=>e.options.map(b=>te(b))),re=f(()=>e.placeholder?[{[e.valueAttribute]:"",[e.optionAttribute]:e.placeholder,disabled:!0},...ne.value]:ne.value),be=f(()=>{const b=te(e.modelValue),E=re.value.find(Y=>Y[e.valueAttribute]===b[e.valueAttribute]);return E?E[e.valueAttribute]:""}),pe=f(()=>{var E,Y;const b=((Y=(E=a.value.color)==null?void 0:E[u.value])==null?void 0:Y[e.variant])||a.value.variant[e.variant];return D(C(a.value.base,a.value.form,s.value,a.value.size[c.value],e.padded?a.value.padding[c.value]:"p-0",b==null?void 0:b.replaceAll("{color}",u.value),(q.value||n.leading)&&a.value.leading.padding[c.value],(le.value||n.trailing)&&a.value.trailing.padding[c.value]),e.placeholder&&!e.modelValue&&a.value.placeholder,e.selectClass)}),q=f(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),le=f(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),me=f(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),ye=f(()=>e.loading&&!q.value?e.loadingIcon:e.trailingIcon||e.icon),he=f(()=>C(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[c.value])),xe=f(()=>C(a.value.icon.base,u.value&&k.ui.colors.includes(u.value)&&a.value.icon.color.replaceAll("{color}",u.value),a.value.icon.size[c.value],e.loading&&a.value.icon.loading)),ke=f(()=>C(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[c.value])),we=f(()=>C(a.value.icon.base,u.value&&k.ui.colors.includes(u.value)&&a.value.icon.color.replaceAll("{color}",u.value),a.value.icon.size[c.value],e.loading&&!q.value&&a.value.icon.loading));return{ui:a,attrs:i,name:$,inputId:d,normalizedOptionsWithPlaceholder:re,normalizedValue:be,isLeading:q,isTrailing:le,selectClass:pe,leadingIconName:me,leadingIconClass:xe,leadingWrapperIconClass:he,trailingIconName:ye,trailingIconClass:we,trailingWrapperIconClass:ke,onInput:v,onChange:y}}}),ga=["id","name","value","required","disabled"],fa=["value","label"],va=["value","selected","disabled","textContent"],ba=["value","selected","disabled","textContent"];function pa(e,t,n,a,i,g){const s=U;return r(),o("div",{class:m(e.ui.wrapper)},[x("select",z({id:e.inputId,name:e.name,value:e.modelValue,required:e.required,disabled:e.disabled,class:e.selectClass},e.attrs,{onInput:t[0]||(t[0]=(...l)=>e.onInput&&e.onInput(...l)),onChange:t[1]||(t[1]=(...l)=>e.onChange&&e.onChange(...l))}),[(r(!0),o(T,null,W(e.normalizedOptionsWithPlaceholder,(l,d)=>(r(),o(T,null,[l.children?(r(),o("optgroup",{key:`${l[e.valueAttribute]}-optgroup-${d}`,value:l[e.valueAttribute],label:l[e.optionAttribute]},[(r(!0),o(T,null,W(l.children,(u,p)=>(r(),o("option",{key:`${u[e.valueAttribute]}-${d}-${p}`,value:u[e.valueAttribute],selected:u[e.valueAttribute]===e.normalizedValue,disabled:u.disabled,textContent:I(u[e.optionAttribute])},null,8,va))),128))],8,fa)):(r(),o("option",{key:`${l[e.valueAttribute]}-${d}`,value:l[e.valueAttribute],selected:l[e.valueAttribute]===e.normalizedValue,disabled:l.disabled,textContent:I(l[e.optionAttribute])},null,8,ba))],64))),256))],16,ga),e.isLeading&&e.leadingIconName||e.$slots.leading?(r(),o("span",{key:0,class:m(e.leadingWrapperIconClass)},[A(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[h(s,{name:e.leadingIconName,class:m(e.leadingIconClass)},null,8,["name","class"])],!0)],2)):w("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(r(),o("span",{key:1,class:m(e.trailingWrapperIconClass)},[A(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[h(s,{name:e.trailingIconName,class:m(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])],!0)],2)):w("",!0)],2)}const ma=F(ca,[["render",pa],["__scopeId","data-v-931b50ef"]]),ya=""+new URL("logo.CfS8-IE4.png",import.meta.url).href,ha={class:"flex gap-12 w-full px-4 md:px-16 items-center absolute top-0 z-10 bg-[#f5f1e8]"},xa=x("a",{href:"/",target:"_self",title:"Veggi garden"},[x("img",{class:"max-w-32 sm:max-w-32",src:ya,alt:"Veggi garden logo",loading:"lazy"})],-1),ka={class:"text-lg text-black group-hover:text-black relative"},wa={class:"sm:hidden"},$a={class:"p-8"},za={class:"p-4 flex-1"},Ca={class:"group-hover:text-primary relative"},Aa=B({__name:"Header",setup(e){const t=[{label:"Home",icon:"i-heroicons-home",to:"/",labelClass:"red"},{label:"contact",icon:"i-heroicons-users",to:"/contact"},{label:"Restaurant",icon:"i-heroicons-building-storefront",to:"/restaurant"}],n=$e(),a=Z(!1),i=Z("");i.value=n.currentLang;const g=[{value:"en",name:"english"},{value:"es",name:"spanish"},{value:"ca",name:"catalan"}],s=()=>{n.updateLang(i.value)};return(l,d)=>{const u=Ge,p=ce,$=la,c=ua,v=ma;return r(),o("header",ha,[xa,h(u,{links:t,class:"hidden sm:block"},{default:_(({link:y})=>[x("span",ka,I(y.label),1)]),_:1}),x("div",wa,[h(p,{color:"white",variant:"solid",icon:"i-heroicons-bars-3",onClick:d[0]||(d[0]=y=>a.value=!0)}),h(c,{modelValue:Q(a),"onUpdate:modelValue":d[2]||(d[2]=y=>ie(a)?a.value=y:null)},{default:_(()=>[x("div",$a,[x("div",null,[h(p,{color:"white",icon:"i-heroicons-x-mark",onClick:d[1]||(d[1]=y=>a.value=!1)})]),x("div",za,[h($,{links:t,size:"text-lg"},{default:_(({link:y})=>[x("span",Ca,I(y.label),1)]),_:1})])])]),_:1},8,["modelValue"])]),h(v,{class:"w-44 font-bold",selectClass:"uppercase",size:"lg",color:"white",variant:"outline",modelValue:Q(i),"onUpdate:modelValue":d[3]||(d[3]=y=>ie(i)?i.value=y:null),options:g,"option-attribute":"name",onChange:s},null,8,["modelValue"])])}}}),Sa={class:"flex justify-center"},Ia={class:"flex flex-row gap-4"},_a=["href"],ja=["src"],Ua=B({__name:"SocialMedia",setup(e){Ae();const t=[{to:"https://www.instagram.com/veggiegardengroup/",img:"instagram-icon.svg"}];return(n,a)=>(r(),o("div",Sa,[x("ul",Ia,[(r(),o(T,null,W(t,(i,g)=>x("li",{key:g},[x("a",{href:i.to},[x("img",{src:i.img,alt:"",class:"max-w-5 transition-all duration-300 ease-in-out hover:max-w-6",loading:"lazy"},null,8,ja)],8,_a)])),64))])]))}}),Oa={class:"my-2 flex flex-col items-center border-t-2 py-2"},Va={class:"flex justify-center gap-2"},Ba={class:"flex gap-2 items-center"},Ta={class:"text-black"},Na=B({__name:"Footer",setup(e){const t=new Date().getFullYear(),n=f(()=>`© ${t} Veggie Garden`);return(a,i)=>{const g=Ua,s=ce,l=U;return r(),o("footer",Oa,[h(g),x("div",Va,[h(s,{class:"font-bold text-black hover:underline hover:text-gray-500",size:"sm",color:"white",variant:"link",label:"privacy",to:"/privacy"}),h(s,{class:"font-bold text-black hover:underline hover:text-gray-500",size:"sm",color:"white",variant:"link",label:"cookies",to:"/cookies"}),h(s,{class:"font-bold text-black hover:underline hover:text-gray-500",size:"sm",color:"white",variant:"link",label:"aviso legal",to:"/aviso-legal"})]),x("div",Ba,[x("span",Ta,I(Q(n)),1),h(s,{class:"font-bold text-black hover:underline hover:text-gray-500",size:"sm",color:"white",variant:"link",label:"Developed by Nepikose",to:"mailto:nepikose@gmail.com"},{trailing:_(()=>[h(l,{name:"i-heroicons-envelope-20-solid",class:"w-5 h-5"})]),_:1})])])}}}),Fa={},La={class:"font-2"};function Da(e,t){const n=Aa,a=Na;return r(),o("div",La,[h(n),x("main",null,[A(e.$slots,"default")]),h(a)])}const Ja=F(Fa,[["render",Da]]);export{Ja as default};
