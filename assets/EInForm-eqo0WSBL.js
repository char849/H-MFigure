import{a as v,_ as x}from"./Object06-FpxDkohD.js";import{_ as u}from"./Object07-uL3_ycV8.js";import{a as h}from"./axios-L6U4YIEh.js";import{r as n,g,a as b,o as a,c as d,b as s,d as E,F as V,h as w,f as r,t as e,e as k}from"./index-0jHJ3dAU.js";var I={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const T={class:"OBJECTS05"},y={class:"container"},A={class:"row"},S=r('<div class="col-12 text-dark mt-xl-7 mt-lg-7 mt-md-7" data-aos="fade-down"><div class="fw-bold title mt-5 mb-2 d-none d-md-block d-lg-block d-xl-block"> 展覽資訊 <span class="text-info fw-normal fs-5">踏入藝術的奇幻世界，展覽資訊一手掌握</span></div><div class="fw-bold title mt-7 mb-2 d-block d-md-none d-xl-none d-lg-none"> 展覽資訊 <div class="text-info fw-normal fs-5 d-md-none"> 踏入藝術的奇幻世界，展覽資訊一手掌握 </div></div><span class="text-info fs-4">Exhibition Information</span></div>',1),j={class:"row g-5","data-aos":"fade-up"},B={class:"card02 rounded-5 shadow bg-white h-100"},L=["src"],O={class:"card-body position-relative"},P={class:"card-title pt-5 px-4"},D={class:"card-text text-dark px-5 pt-3"},F={class:"pb-6 pb-md-5 pb-lg-5 pb-xl-5 pt-2"},N={class:"fs-6 fs-lg-5 fs-xl-5 fs-md-5 text-secondary"},H=s("img",{src:x,alt:"calendar",class:"ms-5 pb-xl-2 pe-2"},null,-1),M={class:"text-secondary ps-3 ps-xl-7 ps-md-10"},R=r('<div class="col-12 d-flex"><div class="d-flex justify-content-start" data-aos="fade-left"><img src="'+v+'" class="box-bg07 pb-5" alt="Object06"></div><div class="d-flex ms-auto justify-content-end" data-aos="fade-right"><img src="'+u+'" class="box-bg07 pb-5" alt="Object07"></div></div>',1),q={__name:"EInForm",setup(C){const{VITE_API:_,VITE_PATH:m}=I,c=n([]),o=n(!1),p=()=>{const i=`${_}api/${m}/articles`;o.value=!0,h.get(i).then(l=>{o.value=!1,c.value=l.data.articles})};return g(()=>{p()}),(i,l)=>{const f=b("VueLoading");return a(),d("div",T,[s("div",y,[s("div",A,[S,E(f,{active:o.value,"z-index":1060,class:"text-center"},null,8,["active"]),s("div",j,[(a(!0),d(V,null,w(c.value,t=>(a(),d("div",{key:t.id,class:"col-12 col-xl-4 col-lg-4 mx-3 mx-xl-0 mx-lg-0 mx-md-3"},[s("div",B,[s("img",{src:t.image,class:"rounded-top-5 w-100 object-fit-cover",alt:"img04",height:"280"},null,8,L),s("div",O,[s("h4",P,"【"+e(t.title)+"】",1),s("p",D,e(t.description),1),s("div",F,[s("span",N,[H,k(e(t.date),1)]),s("span",M,e(t.info),1)])])])]))),128))])])]),R])}}};export{q as default};
