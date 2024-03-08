import{r,p as D,g as P,a as f,o as u,c as m,d as n,b as e,F as C,h as E,i as B,t as y,w as I,f as O,m as S,v as j,q as x,x as H,e as L}from"./index-0jHJ3dAU.js";import{S as V}from"./sweetalert2.all-qfhtSGVR.js";import{a as b}from"./axios-L6U4YIEh.js";var z={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const J={class:"container-fulid box-bg09"},G={key:0,class:"container mt-6 mt-md-7 mb-6 mb-md-5"},K=O('<ul class="row justify-content-center list-unstyled py-3 px-3" data-aos="fade-down"><li class="col-md-4"><div class="bg-danger p-3 badge rounded-pill fs-3 w-100 mb-2 bg-secondary text-white"> 1. 填寫資料 </div></li><li class="col-md-4"><div class="p-3 badge rounded-pill fs-3 w-100 mb-2 bg-info text-muted"> 2. 課程結帳 </div></li><li class="col-md-4"><div class="p-3 badge rounded-pill fs-3 w-100 mb-2 bg-info text-muted"> 3. 付款完成 </div></li></ul><div class="col-12 text-dark mt-1 mt-md-4" data-aos="fade-down"><div class="mx-auto text-center OBJECTS"><div class="fw-bold title mb-0">預約課程清單</div><span class="text-info fs-4">Course Reservation List</span></div></div>',2),Q={class:"row justify-content-center order mx-1","data-aos":"fade-up"},W={class:"col-12 col-md-8"},X={class:"col-12"},Y={class:"text-end"},Z=["disabled"],ee={class:"table align-middle"},se=e("thead",null,[e("tr",null,[e("th"),e("th",{class:"class_w"},"課程名稱"),e("th",null,"上課人數 / 位"),e("th"),e("th",{class:"text-end"},"單價")])],-1),te=["onClick","disabled"],ae=e("i",{class:"bi bi-x fs-6 fs-md-5"},null,-1),le=[ae],oe={class:"input-group input-group-sm"},de={class:"input-group my-3"},ne=["onUpdate:modelValue","onChange","disabled"],ie=["value"],ce=e("td",null,null,-1),re={class:"text-end"},ue=e("td",{colspan:"4",class:"text-end fw-bold"},"總計",-1),me={class:"text-end"},_e={class:"col-12"},ve={class:"d-flex justify-content-center mt-5 mt-md-7"},pe={class:"mb-3"},fe=e("div",{class:"mt-2 mb-4 fs-3 ms-1 fw-medium text-dark text-center"},[e("i",{class:"bi bi-feather fs-1 me-2"}),L(" 請填寫個人資料 ")],-1),be=e("label",{for:"email",class:"form-label"},"Email",-1),he={class:"mb-3"},ge=e("label",{for:"name",class:"form-label"},"同學姓名",-1),ye={class:"mb-3"},xe=e("label",{for:"tel",class:"form-label"},"同學電話",-1),Ve={class:"mb-3"},$e=e("label",{for:"address",class:"form-label"},"同學地址",-1),ke={class:"mb-3"},we=e("label",{for:"message",class:"form-label"},"留言",-1),Ce={class:"text-end mb-0 mb-md-5"},Ee=["disabled"],Ie={key:1,class:"text-center mb-7 mb-md-9 pt-7 pt-md-9"},Se=e("h2",{class:"text-info"},"返回模型課程",-1),Le=e("p",{class:"display-3 text-info my-4 mb-6 mx-2"},"預約課程列表目前尚無課程!!!",-1),Me={__name:"MallView",setup(Re){const{VITE_API:_,VITE_PATH:v}=z,k=r(null),i=r({carts:[]}),w=r(""),d=r({user:{name:"",email:"",tel:"",address:""},message:""}),R=D(),l=r(!1),c=r(""),T=s=>/(^09|\+?8869)\d{2}(-?\d{3}-?\d{3})$/.test(s)?!0:"需要正確的電話號碼",p=()=>{l.value=!0,b.get(`${_}api/${v}/cart`).then(s=>{i.value=s.data.data,l.value=!1}).catch(s=>{l.value=!1,alert(s.response.data.message)})},q=s=>{c.value=s,l.value=!0,b.delete(`${_}/api/${v}/cart/${s}`).then(()=>{l.value=!1,p(),c.value="",V.fire("己移除單一預約課程")}).catch(t=>{l.value=!1,alert(t.response.data.message)})},F=()=>{l.value=!0,b.delete(`${_}/api/${v}/carts`).then(()=>{l.value=!1,p(),V.fire("己清空所有預約課程")}).catch(s=>{l.value=!1,alert(s.response.data.message)})},M=s=>{const t={product_id:s.product_id,qty:s.qty};l.value=!0,c.value=s.id,b.put(`${_}/api/${v}/cart/${s.id}`,{data:t}).then(()=>{l.value=!1,p(),c.value="",V.fire("己更改預約人數")}).catch($=>{l.value=!1,alert($.response.data.message)})},U=()=>{l.value=!0;const s=d.value;b.post(`${_}api/${v}/order`,{data:s}).then(t=>{w.value=t.data.orderId,R.push(`/order/${w.value}`),V.fire("己成功預約課程"),k.value.resetForm(),l.value=!1,p()}).catch(t=>{l.value=!1,alert(t.response.data.message)})};return P(()=>{p()}),(s,t)=>{const $=f("VueLoading"),h=f("VeeField"),g=f("ErrorMessage"),N=f("VeeForm"),A=f("RouterLink");return u(),m("div",J,[n($,{active:l.value,"z-index":1060,class:"text-center"},null,8,["active"]),i.value.carts.length>0?(u(),m("div",G,[K,e("div",Q,[e("div",W,[e("div",X,[e("div",Y,[e("button",{class:"btn btn-outline-danger rounded-pill my-2 my-md-3 my-xl-5 ps-6 pe-5 py-3 mb-4",type:"button",onClick:F,disabled:i.value.carts.length===0}," 清空預約課程 ",8,Z)]),e("table",ee,[se,e("tbody",null,[i.value.carts?(u(!0),m(C,{key:0},E(i.value.carts,o=>(u(),m("tr",{key:o.id},[e("td",null,[e("button",{type:"button",id:"btn01",class:"btn btn-outline-danger btn-sm",onClick:a=>q(o.id),disabled:c.value===o.id},le,8,te)]),e("td",null,y(o.product.title),1),e("td",null,[e("div",oe,[e("div",de,[S(e("select",{class:"form-select rounded-end","onUpdate:modelValue":a=>o.qty=a,onChange:a=>M(o),disabled:c.value===o.id},[(u(),m(C,null,E(5,a=>e("option",{value:a,key:`${a}-${o.id}`},y(a),9,ie)),64))],40,ne),[[j,o.qty]])])])]),ce,e("td",re," $"+y(s.$filters.currency(o.total)),1)]))),128)):B("",!0)]),e("tfoot",null,[e("tr",null,[ue,e("td",me,"$"+y(s.$filters.currency(i.value.total)),1)])])])]),e("div",_e,[e("div",ve,[n(N,{ref_key:"formRef",ref:k,class:"col-12",onSubmit:U},{default:I(({errors:o})=>[e("div",pe,[fe,be,n(h,{id:"email",name:"email",type:"email",class:x(["form-control py-3",{"is-invalid":o.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:d.value.user.email,"onUpdate:modelValue":t[0]||(t[0]=a=>d.value.user.email=a)},null,8,["class","modelValue"]),n(g,{name:"email",class:"invalid-feedback"})]),e("div",he,[ge,n(h,{id:"name",name:"姓名",type:"text",class:x(["form-control py-3",{"is-invalid":o.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:d.value.user.name,"onUpdate:modelValue":t[1]||(t[1]=a=>d.value.user.name=a)},null,8,["class","modelValue"]),n(g,{name:"姓名",class:"invalid-feedback"})]),e("div",ye,[xe,n(h,{id:"tel",name:"電話",type:"tel",class:x(["form-control py-3",{"is-invalid":o.電話}]),placeholder:"請輸入電話",rules:T,modelValue:d.value.user.tel,"onUpdate:modelValue":t[2]||(t[2]=a=>d.value.user.tel=a)},null,8,["class","modelValue"]),n(g,{name:"電話",class:"invalid-feedback"})]),e("div",Ve,[$e,n(h,{id:"address",name:"地址",type:"text",class:x(["form-control py-3",{"is-invalid":o.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:d.value.user.address,"onUpdate:modelValue":t[3]||(t[3]=a=>d.value.user.address=a)},null,8,["class","modelValue"]),n(g,{name:"地址",class:"invalid-feedback"})]),e("div",ke,[we,S(e("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[4]||(t[4]=a=>d.value.message=a)},null,512),[[H,d.value.message]])]),e("div",Ce,[e("button",{type:"submit",class:"btn btn-danger rounded-pill my-2 my-md-3 my-xl-4 ps-6 pe-5 py-3",disabled:Object.keys(o).length>0||i.value.carts.length===0}," 確定預約 ",8,Ee)])]),_:1},512)])])])])])):(u(),m("div",Ie,[Se,Le,n(A,{to:"/products",class:"fs-5 btn btn-danger rounded-5 py-3 px-5"},{default:I(()=>[L(" 課程介紹 ! ")]),_:1})]))])}}};export{Me as default};
