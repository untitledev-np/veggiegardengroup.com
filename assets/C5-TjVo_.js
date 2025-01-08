import{_ as I,m as B,n as j,f as C,q as D,s as S,g,v as _,o as d,c as x,w as p,j as c,x as b,a,y as h,z as R,A as T,B as r,C as H,h as v,t as y,P as k,i as w,D as U,l as L,E as z,F,r as G,b as P}from"./1id5jgAR.js";import{Y as M,G as N,S as O,h as E,l as Y,u as q}from"./B-YaJXTA.js";import{_ as J}from"./YHX2L-NI.js";import{u as K}from"./B40yu1Ro.js";const Q={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}},W=B(j.ui.strategy,j.ui.modal,Q),X=C({components:{HDialog:M,HDialogPanel:N,TransitionRoot:O,TransitionChild:E},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:t}){const{ui:s,attrs:o}=D("modal",S(e,"ui"),W,S(e,"class")),i=g({get(){return e.modelValue},set(n){t("update:modelValue",n)}}),m=g(()=>e.transition?{...s.value.transition}:{});function l(n){if(e.preventClose){t("close-prevented");return}i.value=n,t("close")}const u=()=>{t("after-leave")};return Y(()=>q("$HAJMhYDoe7")),{ui:s,attrs:o,isOpen:i,transitionClass:m,onAfterLeave:u,close:l}}});function Z(e,t,s,o,i,m){const l=_("TransitionChild"),u=_("HDialogPanel"),n=_("HDialog"),f=_("TransitionRoot");return d(),x(f,{appear:e.appear,show:e.isOpen,as:"template",onAfterLeave:e.onAfterLeave},{default:p(()=>[c(n,b({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:p(()=>[e.overlay?(d(),x(l,b({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:p(()=>[a("div",{class:h([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):R("",!0),a("div",{class:h(e.ui.inner)},[a("div",{class:h([e.ui.container,!e.fullscreen&&e.ui.padding])},[c(l,b({as:"template",appear:e.appear},e.transitionClass),{default:p(()=>[c(u,{class:h([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:p(()=>[T(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const ee=I(X,[["render",Z]]),ae=r("/video/hero-videoV.mp4"),te=r("/video/hero-videoH.mp4"),se={class:"relative"},oe={class:"hero-section"},ne=a("video",{loop:"",muted:"",autoplay:"",playsinline:"",poster:"",class:"absolute w-full left-0 object-cover md:h-full block md:hidden"},[a("source",{src:ae,type:"video/mp4"})],-1),le=a("video",{loop:"",muted:"",autoplay:"",playsinline:"",poster:"",class:"absolute w-full left-0 object-cover md:h-full hidden md:block"},[a("source",{src:te,type:"video/mp4"})],-1),re={class:"text-container z-20 flex flex-col px-2 md:px-8 gap-2"},ie={class:"text-4xl md:text-6xl text-white font-bold"},ce={class:"text-lg md:text-2xl text-white"},de=a("div",{class:"overlay"},null,-1),ue={class:"px-2 md:px-10 py-6 flex flex-col gap-4"},pe={class:"flex justify-between px-4"},me={class:"text-black text-2xl font-bold"},fe={class:"h-44"},ge={class:"text-black text-lg text-center"},ve=C({__name:"HeroSection",props:{showReservationCTA:{type:Boolean},heroSectionInfo:{}},setup(e){const t=H(!1);return(s,o)=>{var l,u;const i=L,m=ee;return d(),v("div",se,[a("div",oe,[ne,le,a("div",re,[a("h1",ie,y((l=s.heroSectionInfo)==null?void 0:l.title),1),a("span",ce,y((u=s.heroSectionInfo)==null?void 0:u.description),1)]),de]),c(m,{modelValue:w(t),"onUpdate:modelValue":o[1]||(o[1]=n=>U(t)?t.value=n:null),"prevent-close":""},{default:p(()=>{var n,f;return[a("div",ue,[a("div",pe,[a("span",me," Reservation "+y((n=(s._.provides[k]||s.$route).path)==null?void 0:n.slice(1)),1),c(i,{color:"gray",size:"xl",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:o[0]||(o[0]=$=>t.value=!1)})]),a("div",fe,[a("span",ge," Reservation form here for "+y((f=(s._.provides[k]||s.$route).path)==null?void 0:f.slice(1)),1)])])]}),_:1},8,["modelValue"])])}}}),_e=r("/gallery/1.jpg"),he=r("/gallery/2.jpg"),ye=r("/gallery/3.jpg"),we=r("/gallery/4.jpg"),be=r("/gallery/5.jpg"),xe=r("/gallery/6.jpg"),Ce=r("/gallery/7.jpg"),$e=r("/gallery/8.jpg"),je={},Se={class:"my-12 px-8 md:px-8 text-white flex flex-col gap-2"},ke=z('<h2 class="text-3xl md:text-4xl text-white font-bold my-2" data-v-ca408162>Especiales</h2><div class="image-grid flex flex-wrap -m-2" data-v-ca408162><div class="w-1/2 md:w-1/3 lg:w-1/4 p-2" data-v-ca408162><img src="'+_e+'" alt="veggie garden restaurant gallery images" class="w-full h-full object-cover rounded" data-v-ca408162></div><div class="w-1/2 md:w-1/3 lg:w-1/4 p-2" data-v-ca408162><img src="'+he+'" alt="veggie garden restaurant gallery images" class="w-full h-full object-cover rounded" data-v-ca408162></div><div class="w-1/2 md:w-1/3 lg:w-1/4 p-2" data-v-ca408162><img src="'+ye+'" alt="veggie garden restaurant gallery images" class="w-full h-full object-cover rounded" data-v-ca408162></div><div class="w-1/2 md:w-1/3 lg:w-1/4 p-2" data-v-ca408162><img src="'+we+'" alt="veggie garden restaurant gallery images" class="w-full h-full object-cover rounded" data-v-ca408162></div><div class="w-1/2 md:w-1/3 lg:w-1/4 p-2" data-v-ca408162><img src="'+be+'" alt="veggie garden restaurant gallery images" class="w-full h-full object-cover rounded" data-v-ca408162></div><div class="w-1/2 md:w-1/3 lg:w-1/4 p-2" data-v-ca408162><img src="'+xe+'" alt="veggie garden restaurant gallery images" class="w-full h-full object-cover rounded" data-v-ca408162></div><div class="w-1/2 md:w-1/3 lg:w-1/4 p-2" data-v-ca408162><img src="'+Ce+'" alt="veggie garden restaurant gallery images" class="w-full h-full object-cover rounded" data-v-ca408162></div><div class="w-1/2 md:w-1/3 lg:w-1/4 p-2" data-v-ca408162><img src="'+$e+'" alt="veggie garden restaurant gallery images" class="w-full h-full object-cover rounded" data-v-ca408162></div></div>',2),Ie=[ke];function Ve(e,t){return d(),v("section",Se,Ie)}const Ae=I(je,[["render",Ve],["__scopeId","data-v-ca408162"]]),Be={class:"my-8 px-8 md:px-8"},De=a("h2",{class:"text-3xl text-black font-bold mb-4"}," Closer and closer to you! ",-1),Re={class:"flex gap-8 flex-col md:flex-row rounded"},Te=["src"],He=C({__name:"MapSection",props:{mapInfo:Array},setup(e){return(t,s)=>(d(),v("section",Be,[De,a("div",Re,[(d(!0),v(F,null,G(e.mapInfo,(o,i)=>(d(),v("iframe",{width:"100%",height:"300",style:{"border-radius":"4px"},loading:"lazy",referrerpolicy:"no-referrer-when-downgrade",key:i,src:o==null?void 0:o.mapUrl},null,8,Te))),128))])]))}}),Ge={__name:"index",setup(e){const t=K(),s=g(()=>t.getCurrentData.restaurants.branch.map(l=>l.cardInfo)),o=g(()=>t.getCurrentData.restaurants.title),i=g(()=>t.getCurrentData.heroSection),m=[{mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.4153967115126!2d2.160511296789545!3d41.38678439999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f34ef76617%3A0x32ea8826bd45df73!2sVeggie%20Garden!5e0!3m2!1sen!2ses!4v1716048017537!5m2!1sen!2ses",title:"Gran via",key:"granvia"},{mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.6226077116216!2d2.1633111967895498!3d41.38228340000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f5bea16a21%3A0xe96a04401af7535b!2sVeggie%20Garden!5e0!3m2!1sen!2ses!4v1716048071715!5m2!1sen!2ses",title:"Raval",key:"raval"}];return(l,u)=>{const n=ve,f=J,$=Ae,V=He,A=P;return d(),x(A,{class:"bg-black"},{default:p(()=>[c(n,{heroSectionInfo:w(i)},null,8,["heroSectionInfo"]),c(f,{restaurantCardInfo:w(s),title:w(o)},null,8,["restaurantCardInfo","title"]),c($),c(V,{mapInfo:m})]),_:1})}}};export{Ge as default};