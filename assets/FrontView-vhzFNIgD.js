import{a as f}from"./axios-L6U4YIEh.js";import{r as V,a as g,w,o as C,b as p,c as v,d as b,e as t,f as s,g as l,u as x,t as u,h as r,n as I,_ as M,i as T,F as A}from"./index-NAMjyV6c.js";const $="/H-MFigure/img/bars.svg",k="/H-MFigure/img/heart.svg",y="/H-MFigure/img/bag-shopping.svg";var R={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:F,VITE_PATH:E}=R;function O(){const c=V([]),a=g(0),n=g(0),o=()=>{f.get(`${F}api/${E}/cart`).then(e=>{c.value=e.data.data.carts,a.value=e.data.data.final_total,n.value=e.data.data.total,console.log("pina cart",c.value)}).catch(e=>{console.error("Error fetching cart:",e)})};return{cart:c,finalTotal:a,total:n,getCart:o,addToCart:e=>{const m={product_id:e,qty:1};f.post(`${F}api/${E}/cart`,{data:m}),o()}}}function P(){const{cart:c,finalTotal:a,total:n,getCart:o}=O();return{cart:c,finalTotal:a,total:n,getCart:o}}const N={class:"navbar navbar-expand-lg bg-light sticky-top"},S=t("img",{src:$,id:"navbarIcon",alt:"bars"},null,-1),H=[S],K=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-lee849/1707749509526.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GXFEqpQy04CExUb7x4STbngGE0KIedpcFYbd6aw6OWElk1a13FI%2FZBV7QUdPhIwwiN3OYzyl4XQfPnBMPIVO76gvrzZLptxpXGE%2BT7KECZ435Q0uo%2BaQ0jBD0tYAd%2F0MFXCFKlT9KAWhsukV7%2F8yFXVI%2FTIAsxXsts3MB29%2FvnKv36x%2Bjb0fz7Z2mQofOXHoTEqKscvgfknyK4OoxxuErk0wswWiXu1eVeEmyAB%2BK6Nqhnj%2Fu1f0icBEA4CstMJGqMbNSsCRcUCpPD%2BmRPHN9Z1I403Q6UneyVOPjuFTVMkEmcydyiVyP6taAMqTRsPaFosUMVuy1RgVJOGyWH1GSQ%3D%3D",alt:"logo",width:"160",class:"d-flex align-items-start"},null,-1),X=t("img",{src:k,alt:"favorite"},null,-1),D=t("span",{class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"}," 1",-1),Q=t("img",{src:y,alt:"mall"},null,-1),G={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},q={class:"collapse navbar-collapse",id:"navbarNav"},j={class:"navbar-nav ms-lg-0 ms-lg-0 ms-xl-7 ms-xxl-9 d-flex align-items-center fw-bold"},z={class:"nav-item active mx-auto me-lg-5 me-xl-5"},U={class:"nav-item mx-auto me-lg-5 me-xl-5"},L={class:"nav-item mx-auto me-lg-4 me-xl-4"},Z=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-lee849/1707749509526.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GXFEqpQy04CExUb7x4STbngGE0KIedpcFYbd6aw6OWElk1a13FI%2FZBV7QUdPhIwwiN3OYzyl4XQfPnBMPIVO76gvrzZLptxpXGE%2BT7KECZ435Q0uo%2BaQ0jBD0tYAd%2F0MFXCFKlT9KAWhsukV7%2F8yFXVI%2FTIAsxXsts3MB29%2FvnKv36x%2Bjb0fz7Z2mQofOXHoTEqKscvgfknyK4OoxxuErk0wswWiXu1eVeEmyAB%2BK6Nqhnj%2Fu1f0icBEA4CstMJGqMbNSsCRcUCpPD%2BmRPHN9Z1I403Q6UneyVOPjuFTVMkEmcydyiVyP6taAMqTRsPaFosUMVuy1RgVJOGyWH1GSQ%3D%3D",alt:"logo",width:"320",class:"d-flex align-items-start"},null,-1),W={class:"nav-item ms-3 d-none d-lg-block nav-link"},Y=t("img",{src:k,alt:"favorite"},null,-1),J=t("span",{class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"}," 1",-1),tt={class:"nav-item ms-6 d-none d-lg-block nav-link"},st=t("img",{src:y,alt:"mall"},null,-1),at={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},ot={__name:"FrontNavbar",setup(c){const{cart:a,getCart:n}=P(),o=g(!1),h=g(0),e=g([]);w(()=>{a&&(h.value=a.length)});const m=()=>{o.value=!o.value,o.value?document.getElementById("navbarIcon").src="/img/close.svg":document.getElementById("navbarIcon").src="/img/bars.svg"},B=()=>{const _=localStorage.getItem("homeFavorite");_&&(e.value=JSON.parse(_)),console.log(e.value)};return C(()=>{B(),n()}),(_,Ct)=>{const i=p("RouterLink");return v(),b("nav",N,[t("div",{class:I(["container",{open:o.value}])},[t("button",{class:"navbar-toggler mb-5",type:"button",onClick:m,"data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},H),s(i,{class:"navbar-brand ms mx-md-auto d-lg-none",to:"/"},{default:l(()=>[K]),_:1}),s(i,{class:"nav-link me-4 mb-5 d-lg-none position-relative",to:"/favorite"},{default:l(()=>[X,D]),_:1}),s(i,{class:"nav-link me-4 mb-5 d-lg-none text-dark position-relative",to:"/mall"},{default:l(()=>{var d;return[Q,t("span",G,u((d=x(a))==null?void 0:d.length),1)]}),_:1}),t("div",q,[t("ul",j,[t("li",z,[s(i,{class:"nav-link",to:"/products"},{default:l(()=>[r("模型課程")]),_:1})]),t("li",U,[s(i,{class:"nav-link",to:"/record"},{default:l(()=>[r("訂單記錄")]),_:1})]),t("li",L,[s(i,{class:"nav-link",to:"/information"},{default:l(()=>[r("展覽資訊")]),_:1})]),s(i,{class:"navbar-brand d-none d-lg-block",to:"/"},{default:l(()=>[Z]),_:1}),t("li",W,[s(i,{to:"/favorite",class:"position-relative"},{default:l(()=>[Y,J]),_:1})]),t("li",tt,[s(i,{to:"/mall",class:"position-relative"},{default:l(()=>{var d;return[st,t("span",at,u((d=x(a))==null?void 0:d.length),1)]}),_:1})])])])],2)])}}},et="/H-MFigure/img/logo_white.png",lt="/H-MFigure/img/cog.svg",nt="/H-MFigure/img/instagram.svg",it="/H-MFigure/img/line.svg",ct="/H-MFigure/img/facebook.svg",rt="/H-MFigure/img/Object08.svg",dt={},gt={class:"position-relative bg-dark rounded-top-5 OBJECTS03"},mt={class:"container"},_t={class:"row"},ut={class:"col-12 d-xl-flex d-lg-flex"},pt={class:"col-12 col-xl-10 col-lg-10 pt-7 pb-6 py-xl-8 py-lg-8"},vt={class:"ms-3 ms-xl-0 ms-lg-0 ms-md-0 ms-md-9"},bt=t("img",{src:et,alt:"logo white",class:"mb-5",width:"300"},null,-1),ht={class:"text-info"},ft=t("p",{class:"mb-2"},"本網站僅供個人作品使用，不提供商業用途",-1),xt={class:"mb-2 d-none d-sm-block"},Ft=t("p",{class:"mb-2 d-block d-sm-none"},[r(" Copyright © 2020 by 手作模型館. All Rights"),t("br"),r("Reserved. ")],-1),Et={class:"d-flex"},kt=t("div",{class:"pe-1"},[t("img",{src:lt,alt:""})],-1),yt=T('<div class="col-12 col-xl-2 col-lg-2"><div class="mb-7 mt-xl-10 mt-lg-10 text-secondary d-flex ms-3 ms-md-0"><a href="https://www.instagram.com/explore/tags/%E6%BC%A2%E6%96%87%E5%B8%9D/" target="_blank"><img src="'+nt+'" alt="instagram" class="me-2"></a> | <a href="https://line.me/ti/p/XYcRD84KAR" target="_blank"><img src="'+it+'" alt="instagram" class="mx-2"></a> | <a href="https://www.facebook.com/search/top?q=%E6%BC%A2%E6%96%87%E5%B8%9D" target="_blank"><img src="'+ct+'" alt="instagram" class="ms-2"></a></div></div>',1),Bt=t("div",{class:"position-absolute end-0 box-bg08 d-none d-sm-none d-md-block"},[t("img",{src:rt,class:"Object08 img-fluid",alt:"Object08"})],-1);function Vt(c,a){const n=p("RouterLink");return v(),b("footer",gt,[t("div",mt,[t("div",_t,[t("div",ut,[t("div",pt,[t("div",vt,[bt,t("div",ht,[ft,t("p",xt," Copyright © "+u(new Date().getFullYear())+" by 手作模型館. All Rights Reserved. ",1),Ft,t("div",Et,[kt,s(n,{to:"/login",class:"link"},{default:l(()=>[r("後台管理")]),_:1})])])])]),yt])])]),Bt])}const wt=M(dt,[["render",Vt]]),Tt={__name:"FrontView",setup(c){return(a,n)=>{const o=p("RouterView");return v(),b(A,null,[s(ot),s(o),s(wt)],64)}}};export{Tt as default};