import{f as i,D as c,B as m,g as h,i as P,h as v,C as L,E as r,G as b,_ as k,H as g,P as S,k as d,I as l,T as R,y as T,J as _,S as j,K as x,L as A}from"./D_9qD6YR.js";const B=i({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,o){const t=await r[e.name]().then(a=>a.default||a);return()=>l(t,e.layoutProps,o.slots)}}),H=i({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(e,o){const t=g(),a=c(S),n=a===m()?h():a,u=P(()=>{let s=d(e.name)??n.meta.layout??"default";return s&&!(s in r)&&e.fallback&&(s=d(e.fallback)),s}),y=v();o.expose({layoutRef:y});const f=t.deferHydration();if(t.isHydrating){const s=t.hooks.hookOnce("app:error",f);L().beforeEach(s)}return()=>{const s=u.value&&u.value in r,p=n.meta.layoutTransition??b;return k(R,s&&p,{default:()=>l(j,{suspensible:!0,onResolve:()=>{_(f)}},{default:()=>l(O,{layoutProps:T(o.attrs,{ref:y}),key:u.value||void 0,name:u.value,shouldProvide:!e.name,hasTransition:!!p},o.slots)})}).default()}}}),O=i({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,o){const t=e.name;return e.shouldProvide&&x(A,{isCurrent:a=>t===(a.meta.layout??"default")}),()=>{var a,n;return!t||typeof t=="string"&&!(t in r)?(n=(a=o.slots).default)==null?void 0:n.call(a):l(B,{key:t,layoutProps:e.layoutProps,name:t},o.slots)}}});export{H as _};