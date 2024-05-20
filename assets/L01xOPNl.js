import{_ as m}from"./BzQ5QJOo.js";import{f as c,o,c as n,a as t,t as l,z as h,F as f,r as g,b as r,w as x}from"./Bj_C4SKV.js";const b={class:"relative h-44 md:h-60 rounded-lg overflow-hidden"},v=["src"],w=t("div",{class:"absolute inset-0 bg-black bg-opacity-55"},null,-1),k={class:"absolute inset-0 flex items-center pl-6"},$={class:"text-white text-2xl font-bold"},C={class:"text-white text-lg mb-4"},S=c({__name:"Card",props:{title:String,description:String,imageName:String},setup(e){const a=e;return(i,d)=>(o(),n("div",b,[t("img",{src:`${a.imageName}.png`,class:"absolute inset-0 w-full h-full object-cover"},null,8,v),w,t("div",k,[t("div",null,[t("h2",$,l(e.title),1),t("p",C,l(e.description),1),h(i.$slots,"default")])])]))}}),y={class:"my-8 px-8 md:px-8"},B=t("h2",{class:"text-3xl text-black font-bold mb-4 text-center"}," Veggie garden restaurants ",-1),N={class:"flex justify-between flex-col md:flex-row gap-4"},V={class:"text-lg text-black mb-4"},F=c({__name:"RestaurantSection",props:{restaurantCardInfo:{}},setup(e){const a=e;return(i,d)=>{const _=m,p=S;return o(),n("section",y,[B,t("div",N,[(o(!0),n(f,null,g(a.restaurantCardInfo,(s,u)=>(o(),n("div",{key:u,class:"flex-grow"},[r(p,{title:s.title,description:s.subtitle,"image-name":s.image},{default:x(()=>[r(_,{class:"font-bold uppercase hover:invert",size:"sm",icon:"i-heroicons-book-open",color:"white",variant:"solid",label:"reserva",to:s.url},null,8,["to"])]),_:2},1032,["title","description","image-name"]),t("p",V,l(s.description),1)]))),128))])])}}});export{F as _};