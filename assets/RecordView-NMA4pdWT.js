import{S as E}from"./sweetalert2.all-aYbIib-n.js";import{a as T}from"./axios-L6U4YIEh.js";import{r as u,k as F,a as p,o as i,c as m,b as e,d as l,e as S,h as b,t as n,F as I,l as N,g as P,n as x}from"./index-dbibF742.js";var $={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const A={class:"container-fulid box-bgTen pb-7 pb-md-9"},B={class:"container"},C={class:"row"},L=e("div",{class:"col-12 text-dark mt-3 mt-md-6","data-aos":"fade-down"},[e("div",{class:"mx-auto text-center OBJECTS"},[e("div",{class:"fw-bold title mb-0"},"交易記錄查詢"),e("span",{class:"text-info fs-4"},"Transaction History Inquiry")])],-1),M={class:"row classFive justify-content-center mx-auto","data-aos":"fade-up"},O={class:"col-12 col-md-8 mb-6 mb-xl-0"},j={class:"d-flex justify-content-center mt-0 mt-md-4"},D={class:"mb-3"},H=e("label",{for:"name",class:"form-label"},"同學姓名",-1),R={class:"mb-3"},U=e("label",{for:"tel",class:"form-label"},"同學電話",-1),q=e("div",{class:"text-end mb-0 mb-md-5"},[e("button",{type:"submit",class:"btn btn-danger rounded-pill my-2 my-md-3 my-xl-4 ps-6 pe-5 py-3"}," 訂單查詢 ")],-1),z={class:"col-12 col-md-8 mt-md-3"},J={key:0,class:"mt-2 mb-4 fs-3 ms-1 fw-medium text-dark text-center","data-aos":"fade-up"},G=e("i",{class:"bi bi-journal-check"},null,-1),K={key:1,"data-aos":"fade-up"},Q=e("div",{class:"mt-2 fs-3 mb-5 ms-1 fw-medium text-dark text-center"},[e("i",{class:"bi bi-journal-bookmark-fill"}),b(" 您的課程交易記錄 ")],-1),W={class:"text-right my-3 text-danger"},X={class:"table"},Y=e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"px-4 py-3"},"訂單編號"),e("th",{scope:"col",class:"px-4 py-3"},"訂單姓名"),e("th",{scope:"col",class:"px-4 py-3"},"訂單日期"),e("th",{scope:"col",class:"px-4 py-3"},"訂單總額"),e("th",{scope:"col",class:"px-4 py-3 text-nowrap"},"付款狀態")])],-1),Z={scope:"row",class:"text-dark px-4 py-4 text-nowrap"},ee={class:"text-dark px-4 py-4"},se={class:"text-dark px-4 py-4"},te={class:"text-dark px-4 py-4 text-nowrap"},ae={class:"text-dark px-4 py-4 text-nowrap"},de={__name:"RecordView",setup(oe){const{VITE_API:y,VITE_PATH:V}=$,_=u({}),c=u({}),d=u(!1),o=u({user:{name:"",tel:""},message:""}),g=s=>/(^09|\+?8869)\d{2}(-?\d{3}-?\d{3})$/.test(s)?!0:"需要正確的電話號碼",v=()=>{d.value=!0,T.get(`${y}/api/${V}/orders`).then(s=>{_.value=s.data.orders,c.value=_.value.filter(t=>t.user.name===o.value.user.name&&t.user.tel===o.value.user.tel),d.value=!1}).catch(s=>{d.value=!1,E.fire("error",s.response.data.message)})};return F(()=>{v()}),(s,t)=>{const h=p("VeeField"),f=p("ErrorMessage"),k=p("VeeForm"),w=p("VueLoading");return i(),m("section",null,[e("div",A,[e("div",B,[e("div",C,[L,e("div",M,[e("div",O,[e("div",j,[l(k,{class:"col-12",onSubmit:v},{default:S(({errors:a})=>[e("div",D,[H,l(h,{id:"name",name:"姓名",type:"text",class:x(["form-control py-3",{"is-invalid":a.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.value.user.name,"onUpdate:modelValue":t[0]||(t[0]=r=>o.value.user.name=r)},null,8,["class","modelValue"]),l(f,{name:"姓名",class:"invalid-feedback"})]),e("div",R,[U,l(h,{id:"tel",name:"電話",type:"tel",class:x(["form-control py-3",{"is-invalid":a.電話}]),placeholder:"請輸入電話",rules:g,modelValue:o.value.user.tel,"onUpdate:modelValue":t[1]||(t[1]=r=>o.value.user.tel=r)},null,8,["class","modelValue"]),l(f,{name:"電話",class:"invalid-feedback"})]),q]),_:1})])]),l(w,{active:d.value,"z-index":1060,class:"text-center"},null,8,["active"]),e("div",z,[!d.value&&c.value.length===0?(i(),m("div",J,[G,b(" 請輸入訂購時的姓名、電話進行查詢交易記錄 ")])):c.value.length>0?(i(),m("div",K,[Q,e("div",W," 共 "+n(c.value.length)+" 筆記錄 ",1),(i(!0),m(I,null,N(c.value,(a,r)=>(i(),m("div",{key:r,class:"mb-3 overflow-x-auto"},[e("table",X,[Y,e("tbody",null,[e("tr",null,[e("th",Z,n(a.id),1),e("td",ee,n(a.user.name),1),e("td",se,n(s.$filters.date(a.paid_date)),1),e("td",te," NT $"+n(s.$filters.currency(a.total)),1),e("td",ae,n(a.is_paid?"已付款":"未付款"),1)])])])]))),128))])):P("",!0)])])])])])])}}};export{de as default};
