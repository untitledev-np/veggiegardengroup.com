import{_ as D,a as I,b as M}from"./DcVrKZet.js";import{_ as V,u as $}from"./B_U2RU2v.js";import{f as G,o as i,c,a as m,t as p,F as U,r as B,b as r,w as g,d as L,g as N,h as _,i as a,j as A,k as o}from"./gJGZtdr2.js";import{_ as R}from"./DWfO2rrz.js";import"./BfcCmUDP.js";import"./DlAUqK2U.js";import"./D-96798Y.js";import"./CvPl5tTm.js";import"./CQx9f-7F.js";const T={class:"p-4 md:p-12 flex gap-16 flex-col md:flex-row"},j={class:"w-full md:w-2/3"},E={class:"text-3xl text-black font-bold mb-4"},F={class:"text-lg text-black"},H={class:"flex flex-col gap-8 justify-center bg-gray-700 p-20"},z=G({__name:"MenuSection",props:{title:{default:"Discover our menu"},description:{},menuUrl:{},menuList:{}},setup(h){const f=[{title:"Menu English",url:"/menu/menu-sitges.pdf"}];return(e,s)=>{const l=V;return i(),c("section",T,[m("div",j,[m("h2",E,p(e.title),1),m("p",F,p(e.description),1)]),m("div",H,[(i(),c(U,null,B(f,(n,u)=>r(l,{class:"font-bold uppercase rounded-full hover:bg-white hover:text-black",size:"xl",icon:"i-heroicons-book-open",color:"white",variant:"outline",key:u,to:n.url,target:"_blank"},{default:g(()=>[L(p(n.title),1)]),_:2},1032,["to"])),64))])])}}}),P={key:0},q={key:1},ne={__name:"index",setup(h){const e=N().params.location,s=$(),l=_("");l.value=e;const n=_(""),u=a(()=>s.getCurrentData.heroSection);a(()=>s.getCurrentData.restaurants.find(t=>t.key===e).hero.title);const x=a(()=>s.getCurrentData.restaurants.find(t=>t.key===e).hero.description),d=a(()=>s.getCurrentData.restaurants.find(t=>t.key===e).menuSection);a(()=>s.getCurrentData.restaurants.find(t=>t.key===e).multiMediaText);const b=a(()=>v.filter(t=>t.key===e)),v=[{mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.4153967115126!2d2.160511296789545!3d41.38678439999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f34ef76617%3A0x32ea8826bd45df73!2sVeggie%20Garden!5e0!3m2!1sen!2ses!4v1716048017537!5m2!1sen!2ses",title:"Gran via",key:"granvia"},{mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.6226077116216!2d2.1633111967895498!3d41.38228340000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f5bea16a21%3A0xe96a04401af7535b!2sVeggie%20Garden!5e0!3m2!1sen!2ses!4v1716048071715!5m2!1sen!2ses",title:"Raval",key:"raval"},{mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24003.137394647103!2d1.7788618898941282!3d41.23501456432377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a3812ac971e761%3A0xeefdd065ccadf5d2!2sVeggie%20Garden%20Sitges!5e0!3m2!1sen!2ses!4v1716048126165!5m2!1sen!2ses",title:"Sitges",key:"sitges"}];return A(()=>{switch(e){case"sitges":n.value="Content for Sitges";break;case"granvia":n.value="Content for granvia";break;case"raval":n.value="Content for Raval";break;default:n.value="Content not found";break}}),(t,J)=>{const k=D,w=z,y=I,S=M,C=R;return i(),c("div",null,[r(C,null,{default:g(()=>[o(n)?(i(),c("div",P,[r(k,{title:"pageHeroTitle",description:o(x),heroSectionInfo:o(u)},null,8,["description","heroSectionInfo"]),r(w,{title:o(d).title,description:o(d).description,"menu-list":o(d).menus},null,8,["title","description","menu-list"]),r(y),r(S,{mapInfo:o(b)},null,8,["mapInfo"])])):(i(),c("p",q,"Loading..."))]),_:1})])}}};export{ne as default};
