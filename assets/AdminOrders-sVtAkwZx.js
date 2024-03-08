import{_ as D,c as l,d as o,e,t as s,h as C,a as i,w as S,k as p,F as y,j as g,q as E,D as w,E as U,b as B,f as $,n as N}from"./index-0EYJue82.js";import{a as V}from"./axios-L6U4YIEh.js";import{S as O}from"./sweetalert2.all-wXZkOPxR.js";import{_ as q}from"./PaginationComponent-IBWUl_TQ.js";import{u as P}from"./useModal-5FPZTsXq.js";import"./selector-engine-Yp5Y2oZC.js";P();const F={},H={class:"modal fade",id:"delOrderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modalRef"},j={class:"modal-dialog",role:"document"},z={class:"modal-content border-0"},G={class:"modal-header bg-success text-white"},J={class:"modal-title"},K=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Q={class:"modal-body"},W={class:"text-danger"},X={class:"modal-footer"},Y=e("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"}," 取消 ",-1);function Z(t,a,m,b,h,f){return l(),o("div",H,[e("div",j,[e("div",z,[e("div",G,[e("h5",J,[e("span",null,"刪除 "+s(t.item.title),1)]),K]),e("div",Q,[C(" 是否刪除 "),e("strong",W,s(t.item.title),1),C(" (刪除後將無法恢復)。 ")]),e("div",X,[Y,e("button",{type:"button",class:"btn btn-secondary",onClick:a[0]||(a[0]=d=>t.emits("del-order-item"))}," 確認刪除 ")])])])],512)}const ee=D(F,[["render",Z]]);P();const te=U(),se=i(null);S(()=>te.order,t=>{se.value=t});const le={},oe={key:0,class:"modal fade",id:"OrderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modalRef"},ne={class:"modal-dialog modal-xl",role:"document"},de={class:"modal-content border-0"},ae=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},[e("span",null,"訂單細節")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),re={class:"modal-body"},ie={class:"row"},ce={class:"col-md-4"},ue=e("h3",null,"用戶資料",-1),_e={class:"table"},he={key:0},pe=e("th",{style:{width:"100px"}},"姓名",-1),me=e("th",null,"Email",-1),be=e("th",null,"電話",-1),fe=e("th",null,"地址",-1),$e={class:"col-md-8"},ye=e("h3",null,"訂單細節",-1),ve={class:"table"},ke=e("th",{style:{width:"100px"}},"訂單編號",-1),Oe=e("th",null,"下單時間",-1),ge=e("th",null,"付款時間",-1),Me={key:0},Ce={key:1},Ve=e("th",null,"付款狀態",-1),De={key:0,class:"text-success"},Ee={key:1,class:"text-muted"},we=e("th",null,"總金額",-1),Pe=e("h3",null,"選購商品",-1),Re={class:"table"},Le=e("thead",null,[e("tr")],-1),xe={class:"text-end"},Ie={class:"d-flex justify-content-end"},Te={class:"form-check"},Ae={class:"form-check-label",for:"flexCheckDefault"},Se={key:0},Ue={key:1},Be={class:"modal-footer"},Ne=e("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"}," 取消 ",-1);function qe(t,a,m,b,h,f){return t.tempOrder?(l(),o("div",oe,[e("div",ne,[e("div",de,[ae,e("div",re,[e("div",ie,[e("div",ce,[ue,e("table",_e,[t.tempOrder.user?(l(),o("tbody",he,[e("tr",null,[pe,e("td",null,s(t.tempOrder.user.name),1)]),e("tr",null,[me,e("td",null,s(t.tempOrder.user.email),1)]),e("tr",null,[be,e("td",null,s(t.tempOrder.user.tel),1)]),e("tr",null,[fe,e("td",null,s(t.tempOrder.user.address),1)])])):p("",!0)])]),e("div",$e,[ye,e("table",ve,[e("tbody",null,[e("tr",null,[ke,e("td",null,s(t.tempOrder.id),1)]),e("tr",null,[Oe,e("td",null,s(t.$filters.date(t.tempOrder.create_at)),1)]),e("tr",null,[ge,e("td",null,[t.tempOrder.paid_date?(l(),o("span",Me,s(t.$filters.date(t.tempOrder.paid_date)),1)):(l(),o("span",Ce,"時間不正確"))])]),e("tr",null,[Ve,e("td",null,[t.tempOrder.is_paid?(l(),o("strong",De,"已付款")):(l(),o("span",Ee,"尚未付款"))])]),e("tr",null,[we,e("td",null,s(t.$filters.currency(t.tempOrder.total)),1)])])]),Pe,e("table",Re,[Le,e("tbody",null,[(l(!0),o(y,null,g(t.tempOrder.products,d=>(l(),o("tr",{key:d.id},[e("th",null,s(d.product.title),1),e("td",null,s(d.qty)+" / "+s(d.product.unit),1),e("td",xe,s(t.$filters.currency(d.final_total)),1)]))),128))])]),e("div",Ie,[e("div",Te,[E(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":a[0]||(a[0]=d=>t.tempOrder.is_paid=d)},null,512),[[w,t.tempOrder.is_paid]]),e("label",Ae,[t.tempOrder.is_paid?(l(),o("span",Se,"已付款")):(l(),o("span",Ue,"未付款"))])])])])])]),e("div",Be,[Ne,e("button",{type:"button",class:"btn btn-secondary",onClick:a[1]||(a[1]=d=>t.updatePaid(t.tempOrder))}," 修改付款狀態 ")])])])],512)):p("",!0)}const Fe=D(le,[["render",qe]]);var He={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const je={class:"container"},ze={class:"table mt-6"},Ge=e("thead",null,[e("tr",null,[e("th",null,"購買時間"),e("th",null,"Email"),e("th",null,"購買款項"),e("th",null,"付款方式"),e("th",null,"應付金額"),e("th",null,"是否付款"),e("th",null,"編輯")])],-1),Je=["textContent"],Ke={class:"list-unstyled"},Qe=["textContent"],We={class:"text-right"},Xe={class:"form-check form-switch"},Ye=["id","onUpdate:modelValue"],Ze=["for"],et={key:0},tt={key:1},st={class:"btn-group"},lt=["onClick"],ot=["onClick"],ut={__name:"AdminOrders",emits:["get-orders"],setup(t,{emit:a}){const{VITE_API:m,VITE_PATH:b}=He,h=i([]),f=i({}),d=i({}),M=i(null),R=i(null),L=i(1),v=i(!1),x=a,k=(r=1)=>{const u=`${m}api/${b}/admin/orders?page=${r}`;v.value=!0,V.get(u).then(_=>{h.value=_.data.orders,v.value=!1,f.value=_.data.pagination}).catch(_=>{O.fire(_.response,"","error")})},I=()=>{const r=`${m}api/${b}/admin/order/${d.value.id}`;V.delete(r).then(u=>{x("get-orders"),O.fire(u.data.message,"","success"),M.value.hideModal(),k(L.value)}).catch(u=>{O.fire(u.response,"","error")})};return(r,u)=>{const _=B("VueLoading");return l(),o("div",je,[$(_,{active:v.value,"z-index":1060,class:"text-center"},null,8,["active"]),e("table",ze,[Ge,e("tbody",null,[(l(!0),o(y,null,g(h.value,(n,T)=>(l(),o(y,{key:T},[h.value.length?(l(),o("tr",{key:0,class:N({"text-danger":!n.is_paid})},[e("td",null,s(r.$filters.date(n.create_at)),1),e("td",null,[n.user?(l(),o("span",{key:0,textContent:s(n.user.email)},null,8,Je)):p("",!0)]),e("td",null,[e("ul",Ke,[(l(!0),o(y,null,g(n.products,(c,A)=>(l(),o("li",{key:A},s(c.product.title)+" 數量："+s(c.qty)+" "+s(c.product.unit),1))),128))])]),e("td",null,[n.user?(l(),o("span",{key:0,textContent:s(n.user.payMethod)},null,8,Qe)):p("",!0)]),e("td",We,s(r.$filters.currency(n.total)),1),e("td",null,[e("div",Xe,[E(e("input",{class:"form-check-input",type:"checkbox",id:`${n.id}`,"onUpdate:modelValue":c=>n.is_paid=c},null,8,Ye),[[w,n.is_paid]]),e("label",{class:"form-check-label",for:`${n.id}`},[n.is_paid?(l(),o("span",et,"已付款")):(l(),o("span",tt,"未付款"))],8,Ze)])]),e("td",null,[e("div",st,[e("button",{class:"btn btn-outline-dark btn-sm",type:"button",onClick:c=>r.openOrdersModal(n)}," 檢視 ",8,lt),e("button",{class:"btn btn-outline-secondary btn-sm",type:"button",onClick:c=>r.openDelOrderModal(n)}," 刪除 ",8,ot)])])],2)):p("",!0)],64))),128))])]),$(q,{pages:f.value,onGetProduct:k},null,8,["pages"]),$(Fe,{order:d.value,ref_key:"orderModalRef",ref:M,onUpdatePaid:k},null,8,["order"]),$(ee,{item:d.value,ref_key:"delModalRef",ref:R,onDelOrderItem:I},null,8,["item"])])}}};export{ut as default};
