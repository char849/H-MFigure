import{a as v,x as D,o as P,b as r,d as c,e as u,g as n,f as e,F as C,j as E,k as I,t as f,w as L,i as j,l as O,h as k,q as T,v as H,n as y,y as z}from"./index-jD3Mu940.js";import{S as x}from"./sweetalert2.all-Fcd4tSP6.js";import{a as b}from"./axios-L6U4YIEh.js";var J={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const G={class:"container-fulid box-bg09"},K={key:0,class:"container mt-6 mt-md-7 mb-6 mb-md-5"},Q=j('<ul class="row justify-content-center list-unstyled py-3 px-3" data-aos="fade-down"><li class="col-md-4"><div class="bg-danger p-3 badge rounded-pill fs-3 w-100 mb-2 bg-secondary text-white"> 1. 填寫資料 </div></li><li class="col-md-4"><div class="p-3 badge rounded-pill fs-3 w-100 mb-2 bg-info text-muted"> 2. 課程結帳 </div></li><li class="col-md-4"><div class="p-3 badge rounded-pill fs-3 w-100 mb-2 bg-info text-muted"> 3. 付款完成 </div></li></ul><div class="col-12 text-dark mt-1 mt-md-4" data-aos="fade-down"><div class="mx-auto text-center OBJECTS"><div class="fw-bold title mb-0">預約課程清單</div><span class="text-info fs-4">Course Reservation List</span></div></div>',2),W={class:"row justify-content-center order mx-1","data-aos":"fade-up"},X={class:"col-12 col-md-8"},Y={class:"col-12"},Z={class:"text-end"},ee=["disabled"],se={class:"table align-middle"},te=e("thead",null,[e("tr",null,[e("th"),e("th",null,"課程名稱"),e("th",{style:{width:"130px"}},"上課人數"),e("th"),e("th",{class:"text-center"},"總價")])],-1),ae=["onClick","disabled"],le={class:"input-group input-group-sm"},oe={class:"input-group my-3"},de=["onUpdate:modelValue","onChange","disabled"],ne=["value"],ie={class:"input-group-text",id:"basic-addon2"},ce=e("td",null,null,-1),re={class:"text-end"},ue=e("td",{colspan:"4",class:"text-end"},"總計",-1),me={class:"text-end"},pe={class:"col-12"},_e={class:"d-flex justify-content-center mt-5 mt-md-7"},ve={class:"mb-3"},fe=e("div",{class:"mt-2 mb-4 fs-3 ms-1 fw-medium text-dark text-center"},[e("i",{class:"bi bi-feather fs-1 me-2"}),k(" 請填寫個人資料 ")],-1),be=e("label",{for:"email",class:"form-label"},"Email",-1),he={class:"mb-3"},ge=e("label",{for:"name",class:"form-label"},"同學姓名",-1),ye={class:"mb-3"},xe=e("label",{for:"tel",class:"form-label"},"同學電話",-1),Ve={class:"mb-3"},ke=e("label",{for:"address",class:"form-label"},"同學地址",-1),$e={class:"mb-3"},we=e("label",{for:"message",class:"form-label"},"留言",-1),Ce={class:"text-end mb-0 mb-md-5"},Ee=["disabled"],Ie={key:1,class:"text-center mb-7 mb-md-9 pt-7 pt-md-9"},Le=e("h2",{class:"text-info"},"返回模型課程",-1),Te=e("p",{class:"display-3 text-info my-4 mb-md-6"},"預約課程列表目前尚無課程!!!",-1),Fe={__name:"MallView",setup(Se){const{VITE_API:m,VITE_PATH:p}=J,$=v(null),i=v({carts:[]}),w=v(""),d=v({user:{name:"",email:"",tel:"",address:""},message:""}),S=D(),o=v(!1),N=s=>/(^09|\+?8869)\d{2}(-?\d{3}-?\d{3})$/.test(s)?!0:"需要正確的電話號碼",_=()=>{o.value=!0,b.get(`${m}api/${p}/cart`).then(s=>{i.value=s.data.data,o.value=!1}).catch(s=>{o.value=!1,alert(s.response.data.message)})},R=s=>{o.value=!0,b.delete(`${m}/api/${p}/cart/${s}`).then(()=>{o.value=!1,_(),x.fire("己移除單一預約課程")}).catch(t=>{o.value=!1,alert(t.response.data.message)})},q=()=>{o.value=!0,b.delete(`${m}/api/${p}/carts`).then(()=>{o.value=!1,_(),x.fire("己清空所有預約課程")}).catch(s=>{o.value=!1,alert(s.response.data.message)})},F=s=>{const t={product_id:s.product_id,qty:s.qty};o.value=!0,b.put(`${m}/api/${p}/cart/${s.id}`,{data:t}).then(()=>{o.value=!1,_(),x.fire("己更改預約人數")}).catch(V=>{o.value=!1,alert(V.response.data.message)})},M=()=>{o.value=!0;const s=d.value;b.post(`${m}api/${p}/order`,{data:s}).then(t=>{w.value=t.data.orderId,S.push(`/order/${w.value}`),x.fire("己成功預約課程"),$.value.resetForm(),o.value=!1,_()}).catch(t=>{o.value=!1,alert(t.response.data.message)})};return P(()=>{_()}),(s,t)=>{const V=r("VueLoading"),U=r("font-awesome-icon"),h=r("VeeField"),g=r("ErrorMessage"),A=r("VeeForm"),B=r("RouterLink");return c(),u("div",G,[i.value.carts.length>0?(c(),u("div",K,[Q,n(V,{active:o.value,"z-index":1060,class:"text-center"},null,8,["active"]),e("div",W,[e("div",X,[e("div",Y,[e("div",Z,[e("button",{class:"btn btn-outline-danger rounded-pill my-2 my-md-3 my-xl-5 ps-6 pe-5 py-3 mb-4",type:"button",onClick:q,disabled:i.value.carts.length===0}," 清空預約課程 ",8,ee)]),e("table",se,[te,e("tbody",null,[i.value.carts?(c(!0),u(C,{key:0},E(i.value.carts,a=>(c(),u("tr",{key:a.id},[e("td",null,[e("button",{type:"button",id:"btn01",class:"btn btn-outline-danger btn-sm",onClick:l=>R(a.id),disabled:s.isLoadingItem===a.id},[s.isLoadingItem===a.id?(c(),O(U,{key:0,icon:"spinner",pulse:""})):I("",!0),k(" x ")],8,ae)]),e("td",null,f(a.product.title),1),e("td",null,[e("div",le,[e("div",oe,[T(e("select",{class:"form-select","onUpdate:modelValue":l=>a.qty=l,onChange:l=>F(a),disabled:s.isLoadingItem===a.id},[(c(),u(C,null,E(5,l=>e("option",{value:l,key:`${l}-${a.id}`},f(l),9,ne)),64))],40,de),[[H,a.qty]]),e("span",ie,f(a.product.unit),1)])])]),ce,e("td",re," NT $"+f(s.$filters.currency(a.total)),1)]))),128)):I("",!0)]),e("tfoot",null,[e("tr",null,[ue,e("td",me,"NT $"+f(s.$filters.currency(i.value.total)),1)])])])]),e("div",pe,[e("div",_e,[n(A,{ref_key:"formRef",ref:$,class:"col-12",onSubmit:M},{default:L(({errors:a})=>[e("div",ve,[fe,be,n(h,{id:"email",name:"email",type:"email",class:y(["form-control",{"is-invalid":a.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:d.value.user.email,"onUpdate:modelValue":t[0]||(t[0]=l=>d.value.user.email=l)},null,8,["class","modelValue"]),n(g,{name:"email",class:"invalid-feedback"})]),e("div",he,[ge,n(h,{id:"name",name:"姓名",type:"text",class:y(["form-control",{"is-invalid":a.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:d.value.user.name,"onUpdate:modelValue":t[1]||(t[1]=l=>d.value.user.name=l)},null,8,["class","modelValue"]),n(g,{name:"姓名",class:"invalid-feedback"})]),e("div",ye,[xe,n(h,{id:"tel",name:"電話",type:"tel",class:y(["form-control",{"is-invalid":a.電話}]),placeholder:"請輸入電話",rules:N,modelValue:d.value.user.tel,"onUpdate:modelValue":t[2]||(t[2]=l=>d.value.user.tel=l)},null,8,["class","modelValue"]),n(g,{name:"電話",class:"invalid-feedback"})]),e("div",Ve,[ke,n(h,{id:"address",name:"地址",type:"text",class:y(["form-control",{"is-invalid":a.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:d.value.user.address,"onUpdate:modelValue":t[3]||(t[3]=l=>d.value.user.address=l)},null,8,["class","modelValue"]),n(g,{name:"地址",class:"invalid-feedback"})]),e("div",$e,[we,T(e("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[4]||(t[4]=l=>d.value.message=l)},null,512),[[z,d.value.message]])]),e("div",Ce,[e("button",{type:"submit",class:"btn btn-danger rounded-pill my-2 my-md-3 my-xl-4 ps-6 pe-5 py-3",disabled:Object.keys(a).length>0||i.value.carts.length===0}," 確定預約 ",8,Ee)])]),_:1},512)])])])])])):(c(),u("div",Ie,[Le,Te,n(B,{to:"/products",class:"fs-5 btn btn-danger rounded-5 py-3 px-5"},{default:L(()=>[k(" 課程介紹 ! ")]),_:1})]))])}}};export{Fe as default};
