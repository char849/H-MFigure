import{u as B,s as I,r as F,a as v,o as d,c as u,b as s,n as i,w as M,d as t,e as o,f as r,t as _,g as C,h as c,F as E,i as H,j as N}from"./index-EZG5mwqT.js";import{u as O}from"./mixins-PPtZt_MZ.js";import{u as P}from"./cartStore-vcoGBTgn.js";import"./selector-engine-i3d1zIky.js";import"./axios-L6U4YIEh.js";import"./sweetalert2.all-vvx13YDX.js";const K="/H-MFigure/img/bars.svg",w="/H-MFigure/img/heart.svg",V="/H-MFigure/img/bag-shopping.svg",T={class:"navbar navbar-expand-lg sticky-top bg-primary"},X=["aria-expanded"],Q=s("img",{src:K,alt:"Bars"},null,-1),G=[Q],S=s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-lee849/1707749509526.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GXFEqpQy04CExUb7x4STbngGE0KIedpcFYbd6aw6OWElk1a13FI%2FZBV7QUdPhIwwiN3OYzyl4XQfPnBMPIVO76gvrzZLptxpXGE%2BT7KECZ435Q0uo%2BaQ0jBD0tYAd%2F0MFXCFKlT9KAWhsukV7%2F8yFXVI%2FTIAsxXsts3MB29%2FvnKv36x%2Bjb0fz7Z2mQofOXHoTEqKscvgfknyK4OoxxuErk0wswWiXu1eVeEmyAB%2BK6Nqhnj%2Fu1f0icBEA4CstMJGqMbNSsCRcUCpPD%2BmRPHN9Z1I403Q6UneyVOPjuFTVMkEmcydyiVyP6taAMqTRsPaFosUMVuy1RgVJOGyWH1GSQ%3D%3D",alt:"Logo",width:"160",class:"d-flex align-items-start"},null,-1),D=s("img",{src:w,alt:"Favorite"},null,-1),j={key:0,class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},z=s("img",{src:V,alt:"Mall"},null,-1),L={class:"nav-item active mx-auto me-lg-5 me-xl-5"},U={class:"nav-item mx-auto me-lg-5 me-xl-5"},Z={class:"nav-item mx-auto me-lg-4 me-xl-4 pb-5 pb-md-5 pb-lg-0 pb-xl-0"},W=s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-lee849/1707749509526.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GXFEqpQy04CExUb7x4STbngGE0KIedpcFYbd6aw6OWElk1a13FI%2FZBV7QUdPhIwwiN3OYzyl4XQfPnBMPIVO76gvrzZLptxpXGE%2BT7KECZ435Q0uo%2BaQ0jBD0tYAd%2F0MFXCFKlT9KAWhsukV7%2F8yFXVI%2FTIAsxXsts3MB29%2FvnKv36x%2Bjb0fz7Z2mQofOXHoTEqKscvgfknyK4OoxxuErk0wswWiXu1eVeEmyAB%2BK6Nqhnj%2Fu1f0icBEA4CstMJGqMbNSsCRcUCpPD%2BmRPHN9Z1I403Q6UneyVOPjuFTVMkEmcydyiVyP6taAMqTRsPaFosUMVuy1RgVJOGyWH1GSQ%3D%3D",alt:"Logo",width:"320",class:"d-flex align-items-start"},null,-1),Y={class:"nav-item ms-3 d-none d-lg-block nav-link"},J=s("img",{src:w,alt:"Favorite"},null,-1),ss={class:"nav-item ms-6 d-none d-lg-block nav-link"},es={key:0,class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},ts=s("img",{src:V,alt:"Mall"},null,-1),os={__name:"FrontNavbar",setup(h){const g=P(),a=B(),{cartsLength:n}=I(g),b=F(),{toggleNavHam:m,closeNavHam:f}=O(),e=F(!1),k=()=>{e.value=!1},x=()=>{m(),e.value=!e.value,e.value&&f()},p=()=>{m(),k()},R=()=>{e.value?(e.value=!1,a.push({path:"/favorite",query:{toggleMenu:!1}})):a.push({path:"/favorite",query:{toggleMenu:!1}})},$=()=>{e.value?(e.value=!1,a.push({path:"/mall",query:{toggleMenu:!1}})):a.push({path:"/mall",query:{toggleMenu:!1}})},q=()=>{e.value?(e.value=!1,a.push({path:"/",query:{toggleMenu:!1}})):a.push({path:"/",query:{toggleMenu:!1}})};return(Es,y)=>{const l=v("RouterLink");return d(),u(E,null,[s("nav",T,[s("div",{class:i(["container position-relative",{"bg-primary":e.value,rounded:e.value}])},[s("button",{class:"navbar-toggler position-absolute",type:"button",onClick:M(x,["prevent"]),"aria-expanded":e.value?"true":"false"},G,8,X),t(l,{class:i(["navbar-brand mx-md-auto d-lg-none",{"bg-primary":e.value,rounded:e.value}]),to:{path:"/",query:{toggleMenu:!1}},onClick:q},{default:o(()=>[S]),_:1},8,["class"]),t(l,{class:i(["nav-link me-4 mb-5 d-lg-none",{"bg-primary":e.value,rounded:e.value}]),to:{path:"/favorite",query:{toggleMenu:!1}},onClick:R},{default:o(()=>[D]),_:1},8,["class"]),t(l,{class:i(["nav-link me-4 mb-5 d-lg-none text-dark position-relative",{"bg-primary":e.value,rounded:e.value}]),to:{path:"/mall",query:{toggleMenu:!1}},onClick:$},{default:o(()=>[r(n)>0?(d(),u("span",j,_(r(n)),1)):C("",!0),z]),_:1},8,["class"]),s("div",{class:"collapse navbar-collapse",id:"navbarNav",ref_key:"collapse",ref:b},[s("ul",{class:"navbar-nav ms-lg-0 ms-lg-0 ms-xl-7 ms-xxl-9 d-flex align-items-center fw-bold",onClick:y[0]||(y[0]=A=>r(f)(A))},[s("li",L,[t(l,{class:"nav-link",to:"/products",onClick:p},{default:o(()=>[c("模型課程")]),_:1})]),s("li",U,[t(l,{class:"nav-link",to:"/record",onClick:p},{default:o(()=>[c("訂單記錄")]),_:1})]),s("li",Z,[t(l,{class:"nav-link",to:"/information",onClick:p},{default:o(()=>[c("展覽資訊")]),_:1})]),t(l,{class:"navbar-brand d-none d-lg-block",to:"/",onClick:k},{default:o(()=>[W]),_:1}),s("li",Y,[t(l,{to:"/favorite"},{default:o(()=>[J]),_:1})]),s("li",ss,[t(l,{to:"/mall",class:"position-relative"},{default:o(()=>[r(n)>0?(d(),u("span",es,_(r(n)),1)):C("",!0),ts]),_:1})])])],512)],2)]),s("div",{class:i({"menu-background":!0,active:e.value}),onClick:M(x,["prevent"])},null,2)],64)}}},as="/H-MFigure/img/logo_white.png",ls="/H-MFigure/img/cog.svg",ns="/H-MFigure/img/instagram.svg",is="/H-MFigure/img/line.svg",cs="/H-MFigure/img/facebook.svg",rs="/H-MFigure/img/Object08.svg",ds={class:"position-relative bg-dark rounded-top-5 OBJECTS03"},us={class:"container"},gs={class:"row"},ms={class:"col-12 d-xl-flex d-lg-flex"},ps={class:"col-12 col-xl-10 col-lg-10 pt-7 pb-6 py-xl-8 py-lg-8"},_s={class:"ms-3 ms-xl-0 ms-lg-0 ms-md-0 ms-md-9"},vs=s("img",{src:as,alt:"Logo",class:"mb-5",width:"300"},null,-1),hs={class:"text-info"},bs=s("p",{class:"mb-2"},"本網站僅供個人作品使用，不提供商業用途",-1),fs={class:"mb-2 d-none d-sm-block"},ks=s("p",{class:"mb-2 d-block d-sm-none"},[c(" Copyright © 2020 by 手作模型館. All Rights"),s("br"),c("Reserved. ")],-1),xs={class:"d-none d-md-block"},ys={class:"d-flex"},Fs=s("div",{class:"pe-1"},[s("img",{src:ls,alt:"Cog"})],-1),Ms=N('<div class="col-12 col-xl-2 col-lg-2"><div class="mb-7 mt-xl-10 mt-lg-10 text-secondary d-flex ms-3 ms-md-0"><a href="https://www.instagram.com/explore/tags/%E6%BC%A2%E6%96%87%E5%B8%9D/" target="_blank"><img src="'+ns+'" alt="Instagram" class="me-2"></a> | <a href="https://line.me/ti/p/XYcRD84KAR" target="_blank"><img src="'+is+'" alt="Line" class="mx-2"></a> | <a href="https://www.facebook.com/search/top?q=%E6%BC%A2%E6%96%87%E5%B8%9D" target="_blank"><img src="'+cs+'" alt="Facebook" class="ms-2"></a></div></div>',1),Cs=s("div",{class:"position-absolute end-0 box-bg08 d-none d-sm-none d-md-block"},[s("img",{src:rs,class:"Object08 img-fluid",alt:"Background Image"})],-1),Bs={__name:"FooterView",setup(h){const g=B(),a=H(()=>g.currentRoute.value.name==="單一產品");return(n,b)=>{const m=v("RouterLink");return d(),u("div",{class:i({bg_opacity:a.value})},[s("footer",ds,[s("div",us,[s("div",gs,[s("div",ms,[s("div",ps,[s("div",_s,[vs,s("div",hs,[bs,s("p",fs," Copyright © "+_(new Date().getFullYear())+" by 手作模型館. All Rights Reserved. ",1),ks,s("div",xs,[s("div",ys,[Fs,t(m,{to:"/login",class:"link"},{default:o(()=>[c("後台管理")]),_:1})])])])])]),Ms])])]),Cs])],2)}}},Is={__name:"FrontView",setup(h){return(g,a)=>{const n=v("RouterView");return d(),u(E,null,[t(os),t(n),t(Bs)],64)}}};export{Is as default};
