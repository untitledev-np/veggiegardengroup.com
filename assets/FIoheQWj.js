import{_ as d}from"./Dfo-YH6f.js";import{f,o as s,c as r,a as g,t as v,g as h,r as i,h as $,b as c,w as x,i as a}from"./ODaaD-fh.js";import{_ as k}from"./BbFjdNGO.js";import"./DbN6NTDV.js";import"./BuB6bP0i.js";import"./CvPl5tTm.js";import"./DlAUqK2U.js";import"./DTD6HDIT.js";import"./WquIl2zs.js";const b={class:"my-8 px-12"},D={class:"text-3xl text-black font-bold mb-4"},C=f({__name:"MenuSection",props:{title:{default:"Discover our menu"}},setup(u){return(l,e)=>(s(),r("section",b,[g("h2",D,v(l.title),1)]))}}),V={key:0},y={key:1},j={__name:"index",setup(u){const e=h().params.location,t=i(""),o=i(""),n=i("");return $(()=>{switch(e){case"sitges":t.value="Content for Sitges",o.value=`Veggie garden ${e}`,n.value=`Description ${e}`;break;case"granvia":t.value="Content for Gran Via",o.value=`Veggie garden ${e}`,n.value=`Description ${e}`;break;case"raval":t.value="Content for Raval",o.value=`Veggie garden ${e}`,n.value=`Description ${e}`;break;default:t.value="Content not found";break}}),(w,B)=>{const _=d,p=C,m=k;return s(),r("div",null,[c(m,null,{default:x(()=>[a(t)?(s(),r("div",V,[c(_,{title:a(o),description:a(n)},null,8,["title","description"]),c(p,{title:`Discover our menu for ${a(e)}`},null,8,["title"])])):(s(),r("p",y,"Loading..."))]),_:1})])}}};export{j as default};
