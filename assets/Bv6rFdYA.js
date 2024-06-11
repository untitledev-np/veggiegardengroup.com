import{b as I,_ as B}from"./DI5Zcjxd.js";import{Y as S,G as R,S as T,h as V,l as A,u as D}from"./DFEDbKgN.js";import{m as H,n as b,f as w,q as x,i as $,s as g,o as d,l as j,w as p,b as u,v as y,a,x as _,y as L,z as U,h as z,c as f,t as h,P as C,k as F,A as M,B as n,C as O,F as P,r as N}from"./C7PNXuwU.js";import{_ as k}from"./DlAUqK2U.js";const Y={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}},E=H(b.ui.strategy,b.ui.modal,Y),G=w({components:{HDialog:S,HDialogPanel:R,TransitionRoot:T,TransitionChild:V},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:t}){const{ui:s,attrs:o}=I("modal",x(e,"ui"),E,x(e,"class")),r=$({get(){return e.modelValue},set(l){t("update:modelValue",l)}}),m=$(()=>e.transition?{...s.value.transition}:{});function i(l){if(e.preventClose){t("close-prevented");return}r.value=l,t("close")}const c=()=>{t("after-leave")};return A(()=>D("$HAJMhYDoe7")),{ui:s,attrs:o,isOpen:r,transitionClass:m,onAfterLeave:c,close:i}}});function J(e,t,s,o,r,m){const i=g("TransitionChild"),c=g("HDialogPanel"),l=g("HDialog"),v=g("TransitionRoot");return d(),j(v,{appear:e.appear,show:e.isOpen,as:"template",onAfterLeave:e.onAfterLeave},{default:p(()=>[u(l,y({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:p(()=>[e.overlay?(d(),j(i,y({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:p(()=>[a("div",{class:_([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):L("",!0),a("div",{class:_(e.ui.inner)},[a("div",{class:_([e.ui.container,!e.fullscreen&&e.ui.padding])},[u(i,y({as:"template",appear:e.appear},e.transitionClass),{default:p(()=>[u(c,{class:_([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:p(()=>[U(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const q=k(G,[["render",J]]),K=""+new URL("hero-image.uOMLnMJ2.jpg",import.meta.url).href,Q={class:"relative"},W={class:"hero-section"},X=a("img",{src:K,alt:"",class:"absolute w-full left-0"},null,-1),Z={class:"z-20 flex flex-col px-2 md:px-8 gap-2 mt-24"},ee={class:"text-3xl md:text-6xl text-white font-bold"},ae={class:"text-lg md:text-2xl text-white"},te=a("div",{class:"overlay"},null,-1),se={class:"px-2 md:px-10 py-6 flex flex-col gap-4"},oe={class:"flex justify-between px-4"},le={class:"text-black text-2xl font-bold"},ne={class:"h-44"},re={class:"text-black text-lg text-center"},Re=w({__name:"HeroSection",props:{showReservationCTA:{type:Boolean},heroSectionInfo:{}},setup(e){const t=z(!1);return(s,o)=>{var i,c;const r=B,m=q;return d(),f("div",Q,[a("div",W,[X,a("div",Z,[a("span",ee,h((i=s.heroSectionInfo)==null?void 0:i.title),1),a("span",ae,h((c=s.heroSectionInfo)==null?void 0:c.description),1)]),te]),u(m,{modelValue:F(t),"onUpdate:modelValue":o[1]||(o[1]=l=>M(t)?t.value=l:null),"prevent-close":""},{default:p(()=>{var l,v;return[a("div",se,[a("div",oe,[a("span",le," Reservation "+h((l=(s._.provides[C]||s.$route).path)==null?void 0:l.slice(1)),1),u(r,{color:"gray",size:"xl",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:o[0]||(o[0]=Ce=>t.value=!1)})]),a("div",ne,[a("span",re," Reservation form here for "+h((v=(s._.provides[C]||s.$route).path)==null?void 0:v.slice(1)),1)])])]}),_:1},8,["modelValue"])])}}}),ie=n("/gallery/1.jpg"),de=n("/gallery/2.jpg"),ce=n("/gallery/3.jpg"),pe=n("/gallery/4.jpg"),ue=n("/gallery/5.jpg"),fe=n("/gallery/6.jpg"),me=n("/gallery/7.jpg"),ve=n("/gallery/8.jpg"),ge={},_e={class:"my-12 px-8 md:px-8 text-white flex flex-col gap-2"},he=O('<h2 class="text-3xl text-white font-bold my-2" data-v-e5dbae1f>Especiales</h2><div class="image-grid flex flex-wrap -m-2" data-v-e5dbae1f><div class="w-1/2 md:w-1/3 lg:w-1/4 p-2" data-v-e5dbae1f><img src="'+ie+'" alt="Image 1" class="w-full h-full object-cover rounded" data-v-e5dbae1f></div><div class="w-1/2 md:w-1/3 lg:w-1/4 p-2" data-v-e5dbae1f><img src="'+de+'" alt="Image 1" class="w-full h-full object-cover rounded" data-v-e5dbae1f></div><div class="w-1/2 md:w-1/3 lg:w-1/4 p-2" data-v-e5dbae1f><img src="'+ce+'" alt="Image 1" class="w-full h-full object-cover rounded" data-v-e5dbae1f></div><div class="w-1/2 md:w-1/3 lg:w-1/4 p-2" data-v-e5dbae1f><img src="'+pe+'" alt="Image 1" class="w-full h-full object-cover rounded" data-v-e5dbae1f></div><div class="w-1/2 md:w-1/3 lg:w-1/4 p-2" data-v-e5dbae1f><img src="'+ue+'" alt="Image 1" class="w-full h-full object-cover rounded" data-v-e5dbae1f></div><div class="w-1/2 md:w-1/3 lg:w-1/4 p-2" data-v-e5dbae1f><img src="'+fe+'" alt="Image 1" class="w-full h-full object-cover rounded" data-v-e5dbae1f></div><div class="w-1/2 md:w-1/3 lg:w-1/4 p-2" data-v-e5dbae1f><img src="'+me+'" alt="Image 1" class="w-full h-full object-cover rounded" data-v-e5dbae1f></div><div class="w-1/2 md:w-1/3 lg:w-1/4 p-2" data-v-e5dbae1f><img src="'+ve+'" alt="Image 1" class="w-full h-full object-cover rounded" data-v-e5dbae1f></div></div>',2),ye=[he];function we(e,t){return d(),f("section",_e,ye)}const Te=k(ge,[["render",we],["__scopeId","data-v-e5dbae1f"]]),be={class:"my-8 px-8 md:px-8"},xe=a("h2",{class:"text-3xl text-black font-bold mb-4"}," Closer and closer to you! ",-1),$e={class:"flex gap-8 flex-col md:flex-row rounded"},je=["src"],Ve=w({__name:"MapSection",props:{mapInfo:[]},setup(e){return(t,s)=>(d(),f("section",be,[xe,a("div",$e,[(d(!0),f(P,null,N(e.mapInfo,(o,r)=>(d(),f("iframe",{src:o==null?void 0:o.mapUrl,width:"100%",height:"300",style:{"border-radius":"4px"},loading:"lazy",referrerpolicy:"no-referrer-when-downgrade",key:r},null,8,je))),128))])]))}});export{Re as _,Te as a,Ve as b};