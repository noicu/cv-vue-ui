import{r as t,o as r,g as _,a as e,w as i,b as a,_ as d,d as x,H as $}from"./index-B2iiSUBh.js";function h(s,n,m,u,f,l){const o=t("title-link"),c=t("example");return r(),_("div",null,[e(o,{h2:""},{default:i(()=>[a("Default")]),_:1}),e(c,null,{pug:i(()=>[]),_:1})])}const k={},v=d(k,[["render",h]]),w=x("div",{class:"w-divider my12"},null,-1);function g(s,n,m,u,f,l){const o=t("title-link"),c=t("alert"),p=t("component-api");return r(),_("div",null,[w,e(o,{class:"title1",h2:""},{default:i(()=>[a("API")]),_:1}),e(c,{class:"mb6",info:""},{default:i(()=>[a("The missing props descriptions will be added shortly (all the props are already listed).")]),_:1}),e(p,{class:"mt0",items:l.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(p,{items:s.slots,title:"Slots"},null,8,["items"]),e(p,{items:l.events,title:"Events"},null,8,["items"])])}const D={},y={},B={},E={data:()=>({propsDescs:D,slots:y}),computed:{props(){return $.props},events(){return $.emits.reduce((s,n)=>(s[n]=B[n]||{})&&s,{})}}},N=d(E,[["render",g]]);function P(s,n,m,u,f,l){const o=t("ui-component-title"),c=t("examples"),p=t("api");return r(),_("main",null,[e(o,{slug:"w-date-picker","in-progress":""},{default:i(()=>[a("w-date-picker")]),_:1}),e(c),e(p)])}const V={components:{Examples:v,Api:N}},C=d(V,[["render",P]]);export{C as default};
