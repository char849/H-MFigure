import{a as O}from"./axios-L6U4YIEh.js";import{S as R}from"./sweetalert2.all-qfhtSGVR.js";import{u as D}from"./useModal-tWDPIlpv.js";import{o as l,c as s,b as e,t,e as C,r as c,C as I,i as M,F as $,h as E,m as T,B as A,g as P,a as w,d as k,q as L}from"./index-0jHJ3dAU.js";import{_ as S}from"./PaginationComponent-rrnw3CMB.js";import"./selector-engine-m2OqvO0_.js";var B={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const H={class:"modal-dialog",role:"document"},N={class:"modal-content border-0"},F={class:"modal-header bg-danger text-white"},j={class:"modal-title"},q=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),U={class:"modal-body"},z={class:"text-danger"},G=e("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"}," 取消 ",-1),J={__name:"DelOrderModal",props:{item:Object},emits:["del-item"],setup(h,{expose:f,emit:y}){const{openModal:p,hideModal:u,modalRef:_,defineEmits:o}=D(),n=h,{VITE_API:r,VITE_PATH:a}=B,g=y,x=()=>{const m=`${r}api/${a}/admin/order/${n.item.id}`;O.delete(m).then(i=>{R.fire(i.data.message),u(),g("del-item")})};return f({openModal:p,hideModal:u}),(m,i)=>(l(),s("div",{class:"modal fade",id:"delOrderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"modalRef",ref:_},[e("div",H,[e("div",N,[e("div",F,[e("h5",j,[e("span",null,"刪除 "+t(h.item.title),1)]),q]),e("div",U,[C(" 是否刪除 "),e("strong",z,t(h.item.title),1),C(" (刪除後將無法恢復)。 ")]),e("div",{class:"modal-footer"},[G,e("button",{type:"button",class:"btn btn-danger",onClick:x}," 確認刪除 ")])])])],512))}},K={class:"modal-dialog modal-xl",role:"document"},Q={class:"modal-content border-0"},W=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},[e("span",null,"訂單細節")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),X={class:"modal-body"},Y={class:"row"},Z={class:"col-md-4"},ee=e("h3",null,"用戶資料",-1),te={class:"table"},le={key:0},se=e("th",{style:{width:"100px"}},"姓名",-1),oe=e("th",null,"Email",-1),ae=e("th",null,"電話",-1),ne=e("th",null,"地址",-1),de={class:"col-md-8"},ie=e("h3",null,"訂單細節",-1),re={class:"table"},ce=e("th",{style:{width:"100px"}},"訂單編號",-1),ue=e("th",null,"下單時間",-1),_e=e("th",null,"付款時間",-1),he={key:0},pe={key:1},me=e("th",null,"付款狀態",-1),be={key:0,class:"text-success"},ve={key:1,class:"text-muted"},fe=e("th",null,"總金額",-1),ye=e("h3",null,"選購商品",-1),$e={class:"table"},ke=e("thead",null,[e("tr")],-1),ge={class:"text-end"},xe={class:"d-flex justify-content-end"},Me={class:"form-check"},Ee={class:"form-check-label",for:"flexCheckDefault"},Ve={key:0},Ce={key:1},Oe=e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-outline-danger","data-bs-dismiss":"modal"}," 取消 ")],-1),Re={__name:"OrderModal",props:{order:Object},setup(h,{expose:f}){const{openModal:y,hideModal:p,modalRef:u}=D(),_=h,o=c({});return I(()=>_.order,n=>{o.value=n}),f({openModal:y,hideModal:p}),(n,r)=>(l(),s("div",{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"modalRef",ref:u},[e("div",K,[e("div",Q,[W,e("div",X,[e("div",Y,[e("div",Z,[ee,e("table",te,[o.value.user?(l(),s("tbody",le,[e("tr",null,[se,e("td",null,t(o.value.user.name),1)]),e("tr",null,[oe,e("td",null,t(o.value.user.email),1)]),e("tr",null,[ae,e("td",null,t(o.value.user.tel),1)]),e("tr",null,[ne,e("td",null,t(o.value.user.address),1)])])):M("",!0)])]),e("div",de,[ie,e("table",re,[e("tbody",null,[e("tr",null,[ce,e("td",null,t(o.value.id),1)]),e("tr",null,[ue,e("td",null,t(n.$filters.date(o.value.create_at)),1)]),e("tr",null,[_e,e("td",null,[o.value.paid_date?(l(),s("span",he,t(n.$filters.date(o.value.paid_date)),1)):(l(),s("span",pe,"時間不正確"))])]),e("tr",null,[me,e("td",null,[o.value.is_paid?(l(),s("strong",be,"已付款")):(l(),s("span",ve,"尚未付款"))])]),e("tr",null,[fe,e("td",null,t(n.$filters.currency(o.value.total)),1)])])]),ye,e("table",$e,[ke,e("tbody",null,[(l(!0),s($,null,E(o.value.products,a=>(l(),s("tr",{key:a.id},[e("th",null,t(a.product.title),1),e("td",null,t(a.qty)+" / "+t(a.product.unit),1),e("td",ge,t(n.$filters.currency(a.final_total)),1)]))),128))])]),e("div",xe,[e("div",Me,[T(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":r[0]||(r[0]=a=>o.value.is_paid=a)},null,512),[[A,o.value.is_paid]]),e("label",Ee,[o.value.is_paid?(l(),s("span",Ve,"已付款")):(l(),s("span",Ce,"未付款"))])])])])])]),Oe])])],512))}};var De={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Ie={class:"container mt-8"},Te={class:"table"},Ae=e("thead",null,[e("tr",null,[e("th",null,"購買時間"),e("th",null,"Email"),e("th",null,"購買款項"),e("th",null,"應付金額"),e("th",null,"是否付款"),e("th",null,"編輯")])],-1),Pe=["textContent"],we={class:"list-unstyled"},Le={class:"text-right"},Se=["for"],Be={key:0},He={key:1},Ne={class:"btn-group"},Fe=["onClick"],je=["onClick"],Qe={__name:"AdminOrders",setup(h){const{VITE_API:f,VITE_PATH:y}=De,p=c(null),u=c(null),_=c({}),o=c(!1),n=c({}),r=c(!1),a=c({}),g=i=>{a.value={...i},o.value=!1,p.value.openModal()},x=i=>{a.value={...i},u.value.openModal()},m=(i=1)=>{const V=`${f}api/${y}/admin/orders?page=${i}`;r.value=!0,O.get(V).then(b=>{_.value=b.data.orders,r.value=!1,n.value=b.data.pagination}).catch(b=>{r.value=!1,R.fire(b.response)})};return P(()=>{m()}),(i,V)=>{const b=w("VueLoading");return l(),s($,null,[k(b,{active:r.value,"z-index":1060},null,8,["active"]),e("div",Ie,[e("table",Te,[Ae,e("tbody",null,[(l(!0),s($,null,E(_.value,d=>(l(),s($,{key:d.id},[_.value.length?(l(),s("tr",{key:0,class:L({"text-secondary":!d.is_paid})},[e("td",null,t(i.$filters.date(d.create_at)),1),e("td",null,[d.user?(l(),s("span",{key:0,textContent:t(d.user.email)},null,8,Pe)):M("",!0)]),e("td",null,[e("ul",we,[(l(!0),s($,null,E(d.products,v=>(l(),s("li",{key:v.id},t(v.product.title)+" 數量："+t(v.qty)+" "+t(v.product.unit),1))),128))])]),e("td",Le,t(d.total),1),e("td",null,[e("div",null,[e("label",{class:"form-check-label",for:`${d.id}`},[d.is_paid?(l(),s("span",Be,"已付款")):(l(),s("span",He,"未付款"))],8,Se)])]),e("td",null,[e("div",Ne,[e("button",{class:"btn btn-outline-dark btn-sm",type:"button",onClick:v=>g(d)}," 檢視 ",8,Fe),e("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:v=>x(d)}," 刪除 ",8,je)])])],2)):M("",!0)],64))),128))])])]),k(Re,{order:a.value,ref_key:"orderModalRef",ref:p},null,8,["order"]),k(J,{item:a.value,ref_key:"delModalRef",ref:u,onDelItem:m},null,8,["item"]),k(S,{pages:n.value,onEmitPages:m},null,8,["pages"])],64)}}};export{Qe as default};
