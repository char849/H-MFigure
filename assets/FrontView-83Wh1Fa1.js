import{a as f}from"./axios-L6U4YIEh.js";import{r as y,a as g,w as B,o as V,b as v,c as h,d as b,e as t,f as s,g as e,t as u,h as m,n as w,_ as C,i as I,F as M}from"./index-41VCt7Sx.js";const T="/H-MFigure/img/bars.svg",k="/H-MFigure/img/heart.svg",E="/H-MFigure/img/bag-shopping.svg";var A={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:x,VITE_PATH:F}=A;function $(){const a=y([]),r=g(0),l=g(0),o=g(0),n=()=>{f.get(`${x}api/${F}/cart`).then(c=>{a.splice(0),a.push(...c.data.data.carts),r.value=c.data.data.final_total,l.value=c.data.data.total,o.value=a.length,console.log("pina cart",a),console.log("pina cart",a.length)}).catch(c=>{console.error("Error fetching cart:",c)})};return{cart:a,finalTotal:r,total:l,getCart:n,addToCart:c=>{const p={product_id:c,qty:1};f.post(`${x}api/${F}/cart`,{data:p}),n()},cartsLength:o}}function R(){const{cart:a,finalTotal:r,total:l,getCart:o,cartsLength:n}=$();return{cart:a,finalTotal:r,total:l,getCart:o,cartsLength:n}}const O={class:"navbar navbar-expand-lg bg-light sticky-top"},P=t("img",{src:T,id:"navbarIcon",alt:"bars"},null,-1),S=[P],H=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-lee849/1707749509526.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GXFEqpQy04CExUb7x4STbngGE0KIedpcFYbd6aw6OWElk1a13FI%2FZBV7QUdPhIwwiN3OYzyl4XQfPnBMPIVO76gvrzZLptxpXGE%2BT7KECZ435Q0uo%2BaQ0jBD0tYAd%2F0MFXCFKlT9KAWhsukV7%2F8yFXVI%2FTIAsxXsts3MB29%2FvnKv36x%2Bjb0fz7Z2mQofOXHoTEqKscvgfknyK4OoxxuErk0wswWiXu1eVeEmyAB%2BK6Nqhnj%2Fu1f0icBEA4CstMJGqMbNSsCRcUCpPD%2BmRPHN9Z1I403Q6UneyVOPjuFTVMkEmcydyiVyP6taAMqTRsPaFosUMVuy1RgVJOGyWH1GSQ%3D%3D",alt:"logo",width:"160",class:"d-flex align-items-start"},null,-1),N=t("img",{src:k,alt:"favorite"},null,-1),K={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},X=t("img",{src:E,alt:"mall"},null,-1),D={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},Q={class:"collapse navbar-collapse",id:"navbarNav"},G={class:"navbar-nav ms-lg-0 ms-lg-0 ms-xl-7 ms-xxl-9 d-flex align-items-center fw-bold"},L={class:"nav-item active mx-auto me-lg-5 me-xl-5"},q={class:"nav-item mx-auto me-lg-5 me-xl-5"},j={class:"nav-item mx-auto me-lg-4 me-xl-4"},z=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-lee849/1707749509526.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GXFEqpQy04CExUb7x4STbngGE0KIedpcFYbd6aw6OWElk1a13FI%2FZBV7QUdPhIwwiN3OYzyl4XQfPnBMPIVO76gvrzZLptxpXGE%2BT7KECZ435Q0uo%2BaQ0jBD0tYAd%2F0MFXCFKlT9KAWhsukV7%2F8yFXVI%2FTIAsxXsts3MB29%2FvnKv36x%2Bjb0fz7Z2mQofOXHoTEqKscvgfknyK4OoxxuErk0wswWiXu1eVeEmyAB%2BK6Nqhnj%2Fu1f0icBEA4CstMJGqMbNSsCRcUCpPD%2BmRPHN9Z1I403Q6UneyVOPjuFTVMkEmcydyiVyP6taAMqTRsPaFosUMVuy1RgVJOGyWH1GSQ%3D%3D",alt:"logo",width:"320",class:"d-flex align-items-start"},null,-1),U={class:"nav-item ms-3 d-none d-lg-block nav-link"},Z=t("img",{src:k,alt:"favorite"},null,-1),W={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},Y={class:"nav-item ms-6 d-none d-lg-block nav-link"},J=t("img",{src:E,alt:"mall"},null,-1),tt={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},st={__name:"FrontNavbar",setup(a){const{cart:r,getCart:l}=R(),o=g(!1),n=g(0),_=g([]);B(r,d=>{console.log("Cart changed:",d),n.value=d.length,console.log("cartsLength updated:",n.value)});const c=()=>{o.value=!o.value,o.value?document.getElementById("navbarIcon").src="/img/close.svg":document.getElementById("navbarIcon").src="/img/bars.svg"},p=()=>{const d=localStorage.getItem("homeFavorite");d&&(_.value=JSON.parse(d)),console.log(_.value)};return V(()=>{p(),l()}),(d,Vt)=>{const i=v("RouterLink");return h(),b("nav",O,[t("div",{class:w(["container",{open:o.value}])},[t("button",{class:"navbar-toggler mb-5",type:"button",onClick:c,"data-bs-toggle":"collapse","data-bs-target":"#navbarNav"},S),s(i,{class:"navbar-brand ms mx-md-auto d-lg-none",to:"/"},{default:e(()=>[H]),_:1}),s(i,{class:"nav-link me-4 mb-5 d-lg-none position-relative",to:"/favorite"},{default:e(()=>[N,t("span",K,u(_.value.length),1)]),_:1}),s(i,{class:"nav-link me-4 mb-5 d-lg-none text-dark position-relative",to:"/mall"},{default:e(()=>[X,t("span",D,u(n.value),1)]),_:1}),t("div",Q,[t("ul",G,[t("li",L,[s(i,{class:"nav-link",to:"/products"},{default:e(()=>[m("模型課程")]),_:1})]),t("li",q,[s(i,{class:"nav-link",to:"/record"},{default:e(()=>[m("訂單記錄")]),_:1})]),t("li",j,[s(i,{class:"nav-link",to:"/information"},{default:e(()=>[m("展覽資訊")]),_:1})]),s(i,{class:"navbar-brand d-none d-lg-block",to:"/"},{default:e(()=>[z]),_:1}),t("li",U,[s(i,{to:"/favorite",class:"position-relative"},{default:e(()=>[Z,t("span",W,u(_.value.length),1)]),_:1})]),t("li",Y,[s(i,{to:"/mall",class:"position-relative"},{default:e(()=>[J,t("span",tt,u(n.value),1)]),_:1})])])])],2)])}}},at="/H-MFigure/img/logo_white.png",ot="/H-MFigure/img/cog.svg",et="/H-MFigure/img/instagram.svg",lt="/H-MFigure/img/line.svg",nt="/H-MFigure/img/facebook.svg",ct="/H-MFigure/img/Object08.svg",it={},rt={class:"position-relative bg-dark rounded-top-5 OBJECTS03"},dt={class:"container"},gt={class:"row"},mt={class:"col-12 d-xl-flex d-lg-flex"},_t={class:"col-12 col-xl-10 col-lg-10 pt-7 pb-6 py-xl-8 py-lg-8"},ut={class:"ms-3 ms-xl-0 ms-lg-0 ms-md-0 ms-md-9"},pt=t("img",{src:at,alt:"logo white",class:"mb-5",width:"300"},null,-1),vt={class:"text-info"},ht=t("p",{class:"mb-2"},"本網站僅供個人作品使用，不提供商業用途",-1),bt={class:"mb-2 d-none d-sm-block"},ft=t("p",{class:"mb-2 d-block d-sm-none"},[m(" Copyright © 2020 by 手作模型館. All Rights"),t("br"),m("Reserved. ")],-1),xt={class:"d-flex d-none d-md-block"},Ft=t("div",{class:"pe-1"},[t("img",{src:ot,alt:""})],-1),kt=I('<div class="col-12 col-xl-2 col-lg-2"><div class="mb-7 mt-xl-10 mt-lg-10 text-secondary d-flex ms-3 ms-md-0"><a href="https://www.instagram.com/explore/tags/%E6%BC%A2%E6%96%87%E5%B8%9D/" target="_blank"><img src="'+et+'" alt="instagram" class="me-2"></a> | <a href="https://line.me/ti/p/XYcRD84KAR" target="_blank"><img src="'+lt+'" alt="instagram" class="mx-2"></a> | <a href="https://www.facebook.com/search/top?q=%E6%BC%A2%E6%96%87%E5%B8%9D" target="_blank"><img src="'+nt+'" alt="instagram" class="ms-2"></a></div></div>',1),Et=t("div",{class:"position-absolute end-0 box-bg08 d-none d-sm-none d-md-block"},[t("img",{src:ct,class:"Object08 img-fluid",alt:"Object08"})],-1);function yt(a,r){const l=v("RouterLink");return h(),b("footer",rt,[t("div",dt,[t("div",gt,[t("div",mt,[t("div",_t,[t("div",ut,[pt,t("div",vt,[ht,t("p",bt," Copyright © "+u(new Date().getFullYear())+" by 手作模型館. All Rights Reserved. ",1),ft,t("div",xt,[Ft,s(l,{to:"/login",class:"link"},{default:e(()=>[m("後台管理")]),_:1})])])])]),kt])])]),Et])}const Bt=C(it,[["render",yt]]),It={__name:"FrontView",setup(a){return(r,l)=>{const o=v("RouterView");return h(),b(M,null,[s(st),s(o),s(Bt)],64)}}};export{It as default};