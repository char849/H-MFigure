import{_ as S}from"./arrow-right-long-6qfimpB6.js";import{a as V}from"./axios-L6U4YIEh.js";import{S as m}from"./sweetalert2.all-SLF1XtGN.js";import{r as d,z as E,h as F,a as h,o,c as a,d as r,b as t,F as I,i as L,e as x,g as $,t as c,f as b}from"./index-nD2xfSwd.js";var T={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const C={class:"position-relative box-bg05 mb-7"},P={key:0,class:"OBJECTS05"},B={class:"container"},N={class:"row"},A=$('<div class="col-12 text-dark mt-xl-7 mt-lg-7 mt-md-7 ein_center" data-aos="fade-down"><div class="fw-bold title mt-5 mb-2 d-none d-md-block d-lg-block d-xl-block"> 課程收藏 <span class="text-info fw-normal fs-5">保存自己感興趣或有意向學習的課程</span></div><div class="fw-bold title mt-7 mb-2 d-block d-md-none d-xl-none d-lg-none"> 課程收藏 <div class="text-info fw-normal fs-5 d-md-none"> 保存自己感興趣或有意向學習的課程 </div></div><span class="text-info fs-4">Course Collection</span></div>',1),O={class:"row g-5 pb-5 pb-md-4 pb-lg-4 pb-xl-7 justify-content-center m-0","data-aos":"fade-up"},R={class:"card02 rounded-5 shadow bg-white"},D=["src"],H={class:"card-body position-relative"},J={class:"rounded-pill bg-secondary fs-6 px-3 py-1 text-white position-absolute category"},M={class:"card-title pt-5 px-4"},j=["onClick"],z={key:0},U=t("i",{class:"bi bi-heart-fill fs-4 text-danger"},null,-1),q=[U],G={key:1},K=t("i",{class:"bi bi-heart fs-4 text-danger"},null,-1),Q=[K],W={key:0,class:"fs-5 card-text text-info px-5 pt-2"},X={key:1,class:"mt-3 d-flex c_font"},Y={class:"ms-5 card-text text-info pt-2"},Z={class:"card-text text-dark ms-3 ms-xl-5 ms-lg-5 ms-md-9 pt-2"},tt={class:"pb-7 pb-md-5 pb-lg-5 pb-xl-5 pt-2 pt-md-6 d-flex"},st={class:"classBtn04 position-absolute"},et=t("img",{src:S,class:"ps-3 pb-1",alt:"課程介紹"},null,-1),ot={key:1,class:"text-center mb-7 mb-md-9 pt-7 pt-md-9"},at=t("h2",{class:"text-info"},"沒有我的收藏",-1),it=t("p",{class:"display-3 text-info my-4 mb-md-6"},"前往預約課程列表!!!",-1),pt={__name:"FavoriteView",setup(ct){const l=d(!1),{VITE_API:g,VITE_PATH:y}=T,_=d([]),i=d([]),p=E(()=>_.value.filter(s=>i.value.includes(s.id))),k=()=>{l.value=!0,V.get(`${g}api/${y}/products/all`).then(s=>{_.value=s.data.products,l.value=!1}).catch(s=>{l.value=!1,m.fire(s.response.data.message)})},u=()=>{const s=localStorage.getItem("homeFavorite");s&&(i.value=JSON.parse(s))},w=s=>{if(i.value.includes(s)){const f=i.value.findIndex(n=>n===s);i.value.splice(f,1)}else i.value.push(s);m.fire("己移除收藏清單"),localStorage.setItem("homeFavorite",JSON.stringify(i.value)),u()};return F(()=>{k(),u()}),(s,f)=>{const n=h("VueLoading"),v=h("RouterLink");return o(),a("section",C,[r(n,{active:l.value,"z-index":1060,class:"text-center"},null,8,["active"]),p.value.length>0?(o(),a("div",P,[t("div",B,[t("div",N,[A,t("div",O,[(o(!0),a(I,null,L(p.value,e=>(o(),a("div",{key:e.id,class:"col-12 col-xl-4 col-lg-5 mx-2 mx-xl-0 mx-lg-0 mx-md-0"},[t("div",R,[t("img",{src:e.imageUrl,class:"rounded-top-5 w-100 object-fit-cover",height:"250",alt:"課程圖片"},null,8,D),t("div",H,[t("div",J,c(e.category),1),t("h4",M,"【 "+c(e.title)+" 】",1),t("div",{class:"card_Favorite position-absolute",onClick:lt=>w(e.id)},[i.value.includes(e.id)?(o(),a("span",z,q)):(o(),a("span",G,Q))],8,j),e.price===e.origin_price?(o(),a("div",W,c(s.$filters.currency(e.price))+" 元 ",1)):(o(),a("div",X,[t("del",Y," 原價 $"+c(s.$filters.currency(e.origin_price))+" 元",1),t("p",Z," 特價 $"+c(s.$filters.currency(e.price))+" 元 ",1)])),t("div",tt,[t("div",st,[r(v,{to:`/product/${e.id}`,type:"button",class:"btn btn-danger rounded-pill ps-6 pe-4 py-2 w-100"},{default:x(()=>[b(" 課程介紹 "),et]),_:2},1032,["to"])])])])])]))),128))])])])])):(o(),a("div",ot,[at,it,r(v,{to:"/products",class:"fs-5 btn btn-danger rounded-5 py-3 px-5"},{default:x(()=>[b(" 課程介紹 !! ")]),_:1})]))])}}};export{pt as default};
