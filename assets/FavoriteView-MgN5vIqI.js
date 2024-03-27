import{r as d,u as F,i as I,k as L,a as x,o,c as a,d as p,b as s,F as T,l as P,e as b,j as B,t as i,w as N,h as g}from"./index-iOKBh3mu.js";import{_ as R}from"./arrow-right-long-6qfimpB6.js";import{a as y}from"./axios-L6U4YIEh.js";import{S as k}from"./sweetalert2.all-AQ5N05Vi.js";var A={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const O={class:"position-relative box-bg05 mb-7"},D={key:0,class:"OBJECTS05"},M={class:"container"},j={class:"row"},H=B('<div class="col-12 text-dark mt-xl-7 mt-lg-7 mt-md-7 ein_center" data-aos="fade-down"><div class="fw-bold title mt-5 mb-2 d-none d-md-block d-lg-block d-xl-block"> 課程收藏 <span class="text-info fw-normal fs-5">保存自己感興趣或有意向學習的課程</span></div><div class="fw-bold title mt-7 mb-2 d-block d-md-none d-xl-none d-lg-none"> 課程收藏 <div class="text-info fw-normal fs-5 d-md-none"> 保存自己感興趣或有意向學習的課程 </div></div><span class="text-info fs-4">Course Collection</span></div>',1),J={class:"row g-5 pb-5 pb-md-4 pb-lg-4 pb-xl-7 justify-content-start m-0","data-aos":"fade-up"},U=["onClick"],z=["src"],q={class:"card-body position-relative"},G={class:"rounded-pill bg-secondary fs-6 px-3 py-1 text-white position-absolute category"},K={class:"card-title pt-5 px-4"},Q=["onClick"],W={key:0},X=s("i",{class:"bi bi-heart-fill fs-4 text-danger"},null,-1),Y=[X],Z={key:1},tt=s("i",{class:"bi bi-heart fs-4 text-danger"},null,-1),st=[tt],et={key:0,class:"fs-5 card-text text-info px-5 pt-2"},ot={key:1,class:"mt-3 d-flex c_font"},at={class:"ms-5 card-text text-info pt-2"},ct={class:"card-text text-dark ms-3 ms-xl-5 ms-lg-5 ms-md-9 pt-2"},it={class:"pb-7 pb-md-5 pb-lg-5 pb-xl-5 pt-2 pt-md-6 d-flex"},nt={class:"classBtn04 position-absolute"},lt=s("img",{src:R,class:"ps-3 pb-1",alt:"課程介紹"},null,-1),dt={key:1,class:"text-center mb-7 mb-md-9 pt-7 pt-md-9"},rt=s("h2",{class:"text-info"},"沒有我的收藏",-1),pt=s("p",{class:"display-3 text-info my-4 mb-md-6"},"前往預約課程列表!!!",-1),mt={__name:"FavoriteView",setup(_t){const n=d(!1),{VITE_API:_,VITE_PATH:u}=A,w=F(),v=d([]),$=d([]),c=d([]),f=I(()=>v.value.filter(t=>c.value.includes(t.id))),S=t=>{y.get(`${_}api/${u}/product/${t}`).then(l=>{$.value=l.data.product,w.push(`/product/${t}`)})},V=()=>{n.value=!0,y.get(`${_}api/${u}/products/all`).then(t=>{v.value=t.data.products,n.value=!1}).catch(t=>{n.value=!1,k.fire(t.response.data.message)})},h=()=>{const t=localStorage.getItem("homeFavorite");t&&(c.value=JSON.parse(t))},C=t=>{if(c.value.includes(t)){const l=c.value.findIndex(r=>r===t);c.value.splice(l,1)}else c.value.push(t);k.fire("己移除收藏清單"),localStorage.setItem("homeFavorite",JSON.stringify(c.value)),h()};return L(()=>{V(),h()}),(t,l)=>{const r=x("VueLoading"),m=x("RouterLink");return o(),a("section",O,[p(r,{active:n.value,"z-index":1060,class:"text-center"},null,8,["active"]),f.value.length>0?(o(),a("div",D,[s("div",M,[s("div",j,[H,s("div",J,[(o(!0),a(T,null,P(f.value,e=>(o(),a("div",{key:e.id,class:"col-12 col-xl-4 col-lg-5 mx-2 mx-xl-0 mx-lg-0 mx-md-0"},[s("div",{class:"card02 rounded-5 shadow bg-white position-relative cardTo",role:"button",onClick:E=>S(e.id)},[s("img",{src:e.imageUrl,class:"rounded-top-5 w-100 object-fit-cover",height:"250",alt:"課程圖片"},null,8,z),s("div",q,[s("div",G,i(e.category),1),s("h4",K,"【 "+i(e.title)+" 】",1),s("div",{class:"card_Favorite position-absolute",onClick:N(E=>C(e.id),["stop"])},[c.value.includes(e.id)?(o(),a("span",W,Y)):(o(),a("span",Z,st))],8,Q),e.price===e.origin_price?(o(),a("div",et,i(t.$filters.currency(e.price))+" 元 ",1)):(o(),a("div",ot,[s("del",at," 原價 $"+i(t.$filters.currency(e.origin_price))+" 元",1),s("p",ct," 特價 $"+i(t.$filters.currency(e.price))+" 元 ",1)])),s("div",it,[s("div",nt,[p(m,{to:`/product/${e.id}`,type:"button",class:"btn btn-danger rounded-pill ps-6 pe-4 py-2 w-100"},{default:b(()=>[g(" 課程介紹 "),lt]),_:2},1032,["to"])])])])],8,U)]))),128))])])])])):(o(),a("div",dt,[rt,pt,p(m,{to:"/products",class:"fs-5 btn btn-danger rounded-5 py-3 px-5"},{default:b(()=>[g(" 課程介紹 !! ")]),_:1})]))])}}};export{mt as default};
