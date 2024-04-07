import{r as m,u as U,a as u,o as r,c,d,f as n,b as e,F as g,l as V,g as D,t as f,e as w,j as M,v as k,x as P,n as v,y as j,h as E}from"./index-Hs0vecW0.js";import{S as C}from"./sweetalert2.all-bOrz902A.js";import{a as B}from"./axios-L6U4YIEh.js";import{u as O}from"./cartStore-sd49-ezw.js";var q={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const H={class:"container-fulid box-bg_Nine"},z={key:0,class:"container mt-6 mt-md-7 mb-6 mb-md-5"},J=M('<ul class="row justify-content-center list-unstyled py-3 px-3" data-aos="fade-down"><li class="col-4 col-md-4"><div class="bg-danger p-3 px-1 badge rounded-pill mall_w w-100 mb-2 bg-secondary text-white"> 1. 填寫資料 </div></li><li class="col-4 col-md-4"><div class="p-3 px-1 badge rounded-pill mall_w w-100 mb-2 bg-info text-muted"> 2. 課程結帳 </div></li><li class="col-4 col-md-4"><div class="p-3 px-1 badge rounded-pill mall_w w-100 mb-2 bg-info text-muted"> 3. 付款完成 </div></li></ul><div class="col-12 text-dark mt-1 mt-md-4" data-aos="fade-down"><div class="mx-auto text-center OBJECTS"><div class="fw-bold title mb-0">預約清單</div><span class="text-info fs-4">Course Reservation List</span></div></div>',2),G={class:"row justify-content-center order mx-1","data-aos":"fade-up"},K={class:"col-12 col-md-8"},Q={class:"col-12"},W={class:"text-end"},X=["disabled"],Y={class:"table align-middle"},Z=e("thead",null,[e("tr",null,[e("th"),e("th",{class:"text-nowrap"},"課程名稱"),e("th",{class:"text-nowrap"},"上課人數 / 位"),e("th"),e("th",{class:"text-end"},"單價")])],-1),ee=["onClick","disabled"],se=e("i",{class:"bi bi-x fs-6 fs-md-5"},null,-1),te=[se],le={class:"px-2"},ae={class:"input-group input-group-sm"},oe={class:"input-group my-3"},de=["onUpdate:modelValue","onChange","disabled"],ne=["value"],ie=e("td",null,null,-1),re={class:"text-end"},ce=e("td",{colspan:"4",class:"text-end fw-bold"},"總計",-1),me={class:"text-end"},ue={class:"col-12"},_e={class:"d-flex justify-content-center mt-5 mt-md-7"},pe={class:"mb-3"},be=e("div",{class:"mt-2 mb-4 fs-3 ms-1 fw-medium text-dark text-center"},[e("i",{class:"bi bi-feather fs-1 me-2"}),E(" 請填寫個人資料 ")],-1),fe=e("label",{for:"email",class:"form-label"},"Email*",-1),ve={class:"mb-3"},he=e("label",{for:"name",class:"form-label"},"同學姓名*",-1),xe={class:"mb-3"},ye=e("label",{for:"tel",class:"form-label"},"聯絡電話*",-1),ge={class:"mb-3"},Ve=e("label",{for:"address",class:"form-label"},"聯絡地址*",-1),we={class:"mb-3"},ke=e("label",{for:"message",class:"form-label"},"留言",-1),Ce={class:"text-end mb-0 mb-md-5"},Ee=["disabled"],$e={key:1,class:"text-center mb-7 mb-md-9 pt-7 pt-md-9"},Le=e("h2",{class:"text-info"},"返回模型課程",-1),Se=e("p",{class:"display-3 text-info my-4 mb-6 mx-2"}," 預約課程列表目前尚無課程!!! ",-1),Ae={__name:"MallView",setup(Ie){const a=O(),{VITE_API:$,VITE_PATH:L}=q,h=m(null),S=U(),_=m(!1),x=m(),y=m(""),o=m({user:{name:"",email:"",tel:"",address:""},message:""}),I=i=>/(^09|\+?8869)\d{2}(-?\d{3}-?\d{3})$/.test(i)?!0:"需要正確的電話號碼",N=i=>/^[\u4E00-\u9FA5]{2,4}$/.test(i)?!0:"請輸入有效的中文姓名",F=()=>{_.value=!0;const i=o.value;B.post(`${$}api/${L}/order`,{data:i}).then(s=>{y.value=s.data.orderId,S.push(`/order/${y.value}`),C.fire("己成功預約課程"),h.value.resetForm(),_.value=!1,a.clearCartLength()}).catch(s=>{_.value=!1,C.fire(s.response.data.message)})};return(i,s)=>{const R=u("VueLoading"),p=u("VeeField"),b=u("ErrorMessage"),T=u("VeeForm"),A=u("RouterLink");return r(),c("div",H,[d(R,{active:_.value,"z-index":1060,class:"text-center"},null,8,["active"]),n(a).cartsLength>0?(r(),c("div",z,[J,e("div",G,[e("div",K,[e("div",Q,[e("div",W,[e("button",{class:"btn btn-outline-danger rounded-pill my-2 my-md-3 my-xl-5 ps-6 pe-5 py-3 mb-4",type:"button",onClick:s[0]||(s[0]=(...t)=>n(a).confirmDeleteAllCarts&&n(a).confirmDeleteAllCarts(...t)),disabled:n(a).cart.length===0}," 清空預約課程 ",8,X)]),e("table",Y,[Z,e("tbody",null,[n(a).cart.length>0?(r(!0),c(g,{key:0},V(n(a).cart,t=>(r(),c("tr",{key:t.id},[e("td",null,[e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:l=>n(a).removeCartItem(t.id),disabled:x.value===t.id},te,8,ee)]),e("td",le,f(t.product.title),1),e("td",null,[e("div",ae,[e("div",oe,[k(e("select",{class:"form-select rounded-end","onUpdate:modelValue":l=>t.qty=l,onChange:l=>n(a).updateCartItem(t),disabled:x.value===t.id},[(r(),c(g,null,V(10,l=>e("option",{value:l,key:`${l}-${t.id}`},f(l),9,ne)),64))],40,de),[[P,t.qty]])])])]),ie,e("td",re," $"+f(i.$filters.currency(t.total)),1)]))),128)):D("",!0)]),e("tfoot",null,[e("tr",null,[ce,e("td",me," $"+f(i.$filters.currency(n(a).total)),1)])])])]),e("div",ue,[e("div",_e,[d(T,{ref_key:"formRef",ref:h,class:"col-12",onSubmit:F},{default:w(({errors:t})=>[e("div",pe,[be,fe,d(p,{id:"email",name:"email",type:"email",class:v(["form-control py-3",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.value.user.email,"onUpdate:modelValue":s[1]||(s[1]=l=>o.value.user.email=l)},null,8,["class","modelValue"]),d(b,{name:"email",class:"invalid-feedback"})]),e("div",ve,[he,d(p,{id:"name",name:"姓名",type:"text",class:v(["form-control py-3",{"is-invalid":t.姓名}]),placeholder:"請輸入姓名",rules:N,modelValue:o.value.user.name,"onUpdate:modelValue":s[2]||(s[2]=l=>o.value.user.name=l)},null,8,["class","modelValue"]),d(b,{name:"姓名",class:"invalid-feedback"})]),e("div",xe,[ye,d(p,{id:"tel",name:"電話",type:"tel",class:v(["form-control py-3",{"is-invalid":t.電話}]),placeholder:"請輸入電話",rules:I,modelValue:o.value.user.tel,"onUpdate:modelValue":s[3]||(s[3]=l=>o.value.user.tel=l)},null,8,["class","modelValue"]),d(b,{name:"電話",class:"invalid-feedback"})]),e("div",ge,[Ve,d(p,{id:"address",name:"地址",type:"text",class:v(["form-control py-3",{"is-invalid":t.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:o.value.user.address,"onUpdate:modelValue":s[4]||(s[4]=l=>o.value.user.address=l)},null,8,["class","modelValue"]),d(b,{name:"地址",class:"invalid-feedback"})]),e("div",we,[ke,k(e("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[5]||(s[5]=l=>o.value.message=l)},null,512),[[j,o.value.message]])]),e("div",Ce,[e("button",{type:"submit",class:"btn btn-danger rounded-pill my-2 my-md-3 my-xl-4 px-5 py-3",disabled:Object.keys(t).length>0||n(a).cartsLength===0}," 確定預約 ",8,Ee)])]),_:1},512)])])])])])):(r(),c("div",$e,[Le,Se,d(A,{to:"/products",class:"fs-5 btn btn-danger rounded-5 py-3 px-5"},{default:w(()=>[E(" 查看課程 ! ")]),_:1})]))])}}};export{Ae as default};
