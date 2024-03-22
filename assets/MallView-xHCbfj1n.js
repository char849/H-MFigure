import{r as u,q as D,h as P,a as b,o as m,c as p,d as n,b as e,F as C,i as E,j,t as y,e as I,g as B,p as S,v as O,n as V,x as H,f as L}from"./index-zP3FjPSG.js";import{S as i}from"./sweetalert2.all-MWYKf9ie.js";import{a as h}from"./axios-L6U4YIEh.js";var z={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const J={class:"container-fulid box-bg09"},G={key:0,class:"container mt-6 mt-md-7 mb-6 mb-md-5"},K=B('<ul class="row justify-content-center list-unstyled py-3 px-3" data-aos="fade-down"><li class="col-4 col-md-4"><div class="bg-danger p-3 px-1 badge rounded-pill mall_w w-100 mb-2 bg-secondary text-white"> 1. 填寫資料 </div></li><li class="col-4 col-md-4"><div class="p-3 px-1 badge rounded-pill mall_w w-100 mb-2 bg-info text-muted"> 2. 課程結帳 </div></li><li class="col-4 col-md-4"><div class="p-3 px-1 badge rounded-pill mall_w w-100 mb-2 bg-info text-muted"> 3. 付款完成 </div></li></ul><div class="col-12 text-dark mt-1 mt-md-4" data-aos="fade-down"><div class="mx-auto text-center OBJECTS"><div class="fw-bold title mb-0">預約課程清單</div><span class="text-info fs-4">Course Reservation List</span></div></div>',2),Q={class:"row justify-content-center order mx-1","data-aos":"fade-up"},W={class:"col-12 col-md-8"},X={class:"col-12"},Y={class:"text-end"},Z=["disabled"],ee={class:"table align-middle"},se=e("thead",null,[e("tr",null,[e("th"),e("th",{class:"text-nowrap"},"課程名稱"),e("th",{class:"text-nowrap"},"上課人數 / 位"),e("th"),e("th",{class:"text-start"},"單價")])],-1),te=["onClick","disabled"],ae={class:"px-2"},le={class:"input-group input-group-sm"},oe={class:"input-group my-3"},de=["onUpdate:modelValue","onChange","disabled"],ne=["value"],ie=e("td",null,null,-1),ce={class:"text-start"},re=e("td",{colspan:"4",class:"text-end fw-bold"},"總計",-1),ue={class:"text-end"},me={class:"col-12"},pe={class:"d-flex justify-content-center mt-5 mt-md-7"},_e={class:"mb-3"},ve=e("div",{class:"mt-2 mb-4 fs-3 ms-1 fw-medium text-dark text-center"},[e("i",{class:"bi bi-feather fs-1 me-2"}),L(" 請填寫個人資料 ")],-1),fe=e("label",{for:"email",class:"form-label"},"Email*",-1),be={class:"mb-3"},he=e("label",{for:"name",class:"form-label"},"同學姓名*",-1),ge={class:"mb-3"},xe=e("label",{for:"tel",class:"form-label"},"聯絡電話*",-1),ye={class:"mb-3"},Ve=e("label",{for:"address",class:"form-label"},"聯絡地址*",-1),$e={class:"mb-3"},we=e("label",{for:"message",class:"form-label"},"留言",-1),ke={class:"text-end mb-0 mb-md-5"},Ce=["disabled"],Ee={key:1,class:"text-center mb-7 mb-md-9 pt-7 pt-md-9"},Ie=e("h2",{class:"text-info"},"返回模型課程",-1),Se=e("p",{class:"display-3 text-info my-4 mb-6 mx-2"}," 預約課程列表目前尚無課程!!! ",-1),Fe={__name:"MallView",setup(Le){const{VITE_API:_,VITE_PATH:v}=z,w=u(null),c=u({carts:[]}),k=u(""),d=u({user:{name:"",email:"",tel:"",address:""},message:""}),R=D(),l=u(!1),r=u(""),T=s=>/(^09|\+?8869)\d{2}(-?\d{3}-?\d{3})$/.test(s)?!0:"需要正確的電話號碼",f=()=>{l.value=!0,h.get(`${_}api/${v}/cart`).then(s=>{c.value=s.data.data,l.value=!1}).catch(s=>{l.value=!1,i.fire(s.response.data.message)})},q=s=>{r.value=s,l.value=!0,h.delete(`${_}/api/${v}/cart/${s}`).then(()=>{l.value=!1,f(),r.value="",i.fire("己取消單一預約課程")}).catch(t=>{l.value=!1,i.fire(t.response.data.message)})},F=()=>{l.value=!0,h.delete(`${_}/api/${v}/carts`).then(()=>{l.value=!1,f(),i.fire("己取消所有預約課程")}).catch(s=>{l.value=!1,i.fire(s.response.data.message)})},M=s=>{const t={product_id:s.product_id,qty:s.qty};l.value=!0,r.value=s.id,h.put(`${_}/api/${v}/cart/${s.id}`,{data:t}).then(()=>{f(),l.value=!1,r.value="",i.fire("己更改預約人數")}).catch($=>{l.value=!1,i.fire($.response.data.message)})},U=()=>{l.value=!0;const s=d.value;h.post(`${_}api/${v}/order`,{data:s}).then(t=>{k.value=t.data.orderId,R.push(`/order/${k.value}`),i.fire("己成功預約課程"),w.value.resetForm(),l.value=!1,f()}).catch(t=>{l.value=!1,i.fire(t.response.data.message)})};return P(()=>{f()}),(s,t)=>{const $=b("VueLoading"),g=b("VeeField"),x=b("ErrorMessage"),N=b("VeeForm"),A=b("RouterLink");return m(),p("div",J,[n($,{active:l.value,"z-index":1060,class:"text-center"},null,8,["active"]),c.value.carts.length>0?(m(),p("div",G,[K,e("div",Q,[e("div",W,[e("div",X,[e("div",Y,[e("button",{class:"btn btn-outline-danger rounded-pill my-2 my-md-3 my-xl-5 ps-6 pe-5 py-3 mb-4",type:"button",onClick:F,disabled:c.value.carts.length===0}," 清空預約課程 ",8,Z)]),e("table",ee,[se,e("tbody",null,[c.value.carts?(m(!0),p(C,{key:0},E(c.value.carts,o=>(m(),p("tr",{key:o.id},[e("td",null,[e("button",{type:"button",id:"btn01",class:"btn btn-outline-danger btn-sm",onClick:a=>q(o.id),disabled:r.value===o.id}," x ",8,te)]),e("td",ae,y(o.product.title),1),e("td",null,[e("div",le,[e("div",oe,[S(e("select",{class:"form-select rounded-end","onUpdate:modelValue":a=>o.qty=a,onChange:a=>M(o),disabled:r.value===o.id},[(m(),p(C,null,E(5,a=>e("option",{value:a,key:`${a}-${o.id}`},y(a),9,ne)),64))],40,de),[[O,o.qty]])])])]),ie,e("td",ce," $"+y(s.$filters.currency(o.total)),1)]))),128)):j("",!0)]),e("tfoot",null,[e("tr",null,[re,e("td",ue," $"+y(s.$filters.currency(c.value.total)),1)])])])]),e("div",me,[e("div",pe,[n(N,{ref_key:"formRef",ref:w,class:"col-12",onSubmit:U},{default:I(({errors:o})=>[e("div",_e,[ve,fe,n(g,{id:"email",name:"email",type:"email",class:V(["form-control py-3",{"is-invalid":o.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:d.value.user.email,"onUpdate:modelValue":t[0]||(t[0]=a=>d.value.user.email=a)},null,8,["class","modelValue"]),n(x,{name:"email",class:"invalid-feedback"})]),e("div",be,[he,n(g,{id:"name",name:"姓名",type:"text",class:V(["form-control py-3",{"is-invalid":o.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:d.value.user.name,"onUpdate:modelValue":t[1]||(t[1]=a=>d.value.user.name=a)},null,8,["class","modelValue"]),n(x,{name:"姓名",class:"invalid-feedback"})]),e("div",ge,[xe,n(g,{id:"tel",name:"電話",type:"tel",class:V(["form-control py-3",{"is-invalid":o.電話}]),placeholder:"請輸入電話",rules:T,modelValue:d.value.user.tel,"onUpdate:modelValue":t[2]||(t[2]=a=>d.value.user.tel=a)},null,8,["class","modelValue"]),n(x,{name:"電話",class:"invalid-feedback"})]),e("div",ye,[Ve,n(g,{id:"address",name:"地址",type:"text",class:V(["form-control py-3",{"is-invalid":o.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:d.value.user.address,"onUpdate:modelValue":t[3]||(t[3]=a=>d.value.user.address=a)},null,8,["class","modelValue"]),n(x,{name:"地址",class:"invalid-feedback"})]),e("div",$e,[we,S(e("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[4]||(t[4]=a=>d.value.message=a)},null,512),[[H,d.value.message]])]),e("div",ke,[e("button",{type:"submit",class:"btn btn-danger rounded-pill my-2 my-md-3 my-xl-4 ps-6 pe-5 py-3",disabled:Object.keys(o).length>0||c.value.carts.length===0}," 確定預約 ",8,Ce)])]),_:1},512)])])])])])):(m(),p("div",Ee,[Ie,Se,n(A,{to:"/products",class:"fs-5 btn btn-danger rounded-5 py-3 px-5"},{default:I(()=>[L(" 查看課程 ! ")]),_:1})]))])}}};export{Fe as default};
