import{_ as L}from"./arrow-right-long-6qfimpB6.js";import{_ as F}from"./PaginationComponent-3cFHJocq.js";import{a as P}from"./axios-L6U4YIEh.js";import{S as m}from"./sweetalert2.all-scv4yxnO.js";import{u as T,r as l,g as C,k as j,a as h,o as a,c as n,b as t,d,w as p,F as b,h as y,f as B,e as u,t as c}from"./index-6HpqlA5v.js";var N={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const R={class:"position-relative box-bg05 mb-7"},A={class:"OBJECTS05"},O={class:"container"},D={class:"row"},M=B('<div class="col-12 text-dark mt-xl-7 mt-lg-7 mt-md-7" data-aos="fade-down"><div class="fw-bold title mt-5 mb-2 d-none d-md-block d-lg-block d-xl-block"> 模型課程 <span class="text-info fw-normal fs-5">從選擇材料到創建精美模型的所有步驟</span></div><div class="fw-bold title mt-7 mb-2 d-block d-md-none d-xl-none d-lg-none"> 模型課程 <div class="text-info fw-normal fs-5 d-md-none"> 從選擇材料到創建精美模型的所有步驟 </div></div><span class="text-info fs-4">Model Course</span></div>',1),H={class:"col-12 mt-5 mt-xl-0 mt-lg-0 mt-md-5 nav nav-pills d-inline-flex justify-content-center justify-content-xl-end justify-content-lg-end justify-content-md-center","data-aos":"fade-down"},J={class:"row g-5 pb-5 pb-md-4 pb-lg-4 pb-xl-4 mx-auto justify-content-center","data-aos":"fade-up"},U={class:"card02 rounded-5 shadow bg-white"},q=["src"],z={class:"card-body position-relative"},G={class:"rounded-pill bg-secondary fs-6 px-3 py-1 text-white position-absolute category"},K={class:"card-title pt-5 px-4"},Q=["onClick"],W={key:0},X=t("i",{class:"bi bi-heart-fill fs-4 text-danger"},null,-1),Y=[X],Z={key:1},tt=t("i",{class:"bi bi-heart fs-4 text-danger"},null,-1),et=[tt],st={key:0,class:"fs-5 card-text text-info px-5 pt-2"},ot={key:1,class:"mt-3 d-flex c_font"},at={class:"ms-5 card-text text-info pt-2"},nt={class:"card-text text-dark ms-3 ms-xl-5 ms-lg-5 ms-md-9 pt-2"},it={class:"pb-7 pb-md-5 pb-lg-5 pb-xl-5 pt-2 pt-md-6 d-flex"},lt={class:"classBtn04 position-absolute"},ct=t("img",{src:L,class:"ps-3 pb-1",alt:"arrow-right"},null,-1),gt={__name:"CoursesView",setup(dt){const{VITE_API:k,VITE_PATH:w}=N,S=T(),f=l([]),V=l(["熱門","昆蟲類","動物科","甲殼類"]),i=l([]),g=l({}),E=l(1),_=l(!1),v=(o=1)=>{const{category:r=""}=S.query;_.value=!0,P.get(`${k}api/${w}/products?category=${r}&page=${o}`).then(s=>{_.value=!1,f.value=s.data.products,g.value=s.data.pagination}).catch(s=>{m.fire(s.response.data.message)})},x=()=>{const o=localStorage.getItem("homeFavorite");o&&(i.value=JSON.parse(o))},$=o=>{if(i.value.includes(o)){const r=i.value.findIndex(s=>s===o);i.value.splice(r,1),m.fire("己移除收藏清單")}else i.value.push(o),m.fire("己加入收藏清單");localStorage.setItem("homeFavorite",JSON.stringify(i.value)),x()};return C(()=>{x()}),j(()=>{v()}),(o,r)=>{const s=h("RouterLink"),I=h("VueLoading");return a(),n("section",R,[t("div",A,[t("div",O,[t("div",D,[M,t("ul",H,[t("li",null,[d(s,{class:"btn btn-danger rounded-pill mx-2 px-5 py-2 mt-3 mt-xl-0 mt-lg-0 mt-md-0 my-md-4",to:"/products"},{default:p(()=>[u("全部課程")]),_:1})]),(a(!0),n(b,null,y(V.value,e=>(a(),n("li",{key:e},[d(s,{class:"btn btn-danger rounded-pill mx-2 px-5 py-2 mt-3 mt-xl-0 mt-lg-0 mt-md-0",to:`/products?category=${e}&page=${E.value}`},{default:p(()=>[u(c(e),1)]),_:2},1032,["to"])]))),128))]),d(I,{active:_.value,"z-index":1060,class:"text-center"},null,8,["active"]),t("div",J,[(a(!0),n(b,null,y(f.value,e=>(a(),n("div",{key:e.id,class:"col-12 col-xl-4 col-lg-5 mx-2 mx-xl-0 mx-lg-0 mx-md-0"},[t("div",U,[t("img",{src:e.imageUrl,class:"rounded-top-5 w-100 object-fit-cover",height:"250",alt:"img04"},null,8,q),t("div",z,[t("div",G,c(e.category),1),t("h4",K," 【 "+c(e.title)+" 】 ",1),t("div",{class:"card_Favorite position-absolute",onClick:rt=>$(e.id)},[i.value.includes(e.id)?(a(),n("span",W,Y)):(a(),n("span",Z,et))],8,Q),e.price===e.origin_price?(a(),n("div",st,c(e.price)+" 元 ",1)):(a(),n("div",ot,[t("del",at," 原價 $"+c(e.origin_price)+" 元",1),t("p",nt," 特價 $"+c(e.price)+" 元 ",1)])),t("div",it,[t("div",lt,[d(s,{to:`/product/${e.id}`,type:"button",class:"btn btn-danger rounded-pill ps-6 pe-4 py-2 w-100"},{default:p(()=>[u(" 課程介紹 "),ct]),_:2},1032,["to"])])])])])]))),128))]),d(F,{pages:g.value,onEmitPages:v},null,8,["pages"])])])])])}}};export{gt as default};