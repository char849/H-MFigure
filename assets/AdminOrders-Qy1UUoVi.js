import{a as R}from"./axios-L6U4YIEh.js";import{S as I}from"./sweetalert2.all-WwFgFBzC.js";import{u as T}from"./useModal-rRMuX8eZ.js";import{o as l,c as s,b as t,t as e,e as V,r as i,E as C,i as M,F as $,h as E,g as A,a as P,d as g,x as D}from"./index-kYjlavu4.js";import{_ as L}from"./PaginationComponent-5nxOucvT.js";import"./selector-engine-AZniCjOD.js";var S={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const w={class:"modal-dialog",role:"document"},H={class:"modal-content border-0"},B={class:"modal-header bg-danger text-white"},N={class:"modal-title"},F=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),j={class:"modal-body"},q={class:"text-danger"},z=t("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"}," 取消 ",-1),U={__name:"DelOrderModal",props:{item:Object},emits:["del-item"],setup(h,{expose:f,emit:y}){const{openModal:m,hideModal:c,modalRef:u,defineEmits:o}=T(),n=h,{VITE_API:_,VITE_PATH:a}=S,k=y,x=()=>{const p=`${_}api/${a}/admin/order/${n.item.id}`;R.delete(p).then(()=>{I.fire("己刪除未付款預約訂單"),c(),k("del-item")})};return f({openModal:m,hideModal:c}),(p,r)=>(l(),s("div",{class:"modal fade",id:"delOrderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"modalRef",ref:u},[t("div",w,[t("div",H,[t("div",B,[t("h5",N,[t("span",null,"刪除 "+e(h.item.title),1)]),F]),t("div",j,[V(" 是否刪除 "),t("strong",q,e(h.item.title),1),V(" (刪除後將無法恢復)。 ")]),t("div",{class:"modal-footer"},[z,t("button",{type:"button",class:"btn btn-danger",onClick:x}," 確認刪除 ")])])])],512))}},G={class:"modal-dialog modal-xl",role:"document"},J={class:"modal-content border-0"},K=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Q={class:"modal-body"},W={class:"row"},X={class:"col-md-4"},Y=t("h3",null,"用戶資料",-1),Z={class:"table"},tt={key:0},et=t("th",{style:{width:"100px"}},"姓名",-1),lt=t("th",null,"Email",-1),st=t("th",null,"電話",-1),ot=t("th",null,"地址",-1),at={class:"col-md-8"},nt=t("h3",null,"訂單細節",-1),dt={class:"table"},rt=t("th",{style:{width:"100px"}},"訂單編號",-1),it=t("th",null,"下單時間",-1),ct=t("th",null,"付款時間",-1),ut={key:0},_t={key:1},ht=t("th",null,"付款狀態",-1),mt={key:0,class:"text-success"},pt={key:1,class:"text-muted"},bt=t("th",null,"總金額",-1),vt=t("h3",null,"選購商品",-1),ft={class:"table"},yt=t("thead",null,[t("tr")],-1),$t={class:"text-end"},gt=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-outline-danger","data-bs-dismiss":"modal"}," 取消 ")],-1),kt={__name:"OrderModal",props:{order:Object},setup(h,{expose:f}){const{openModal:y,hideModal:m,modalRef:c}=T(),u=h,o=i({});return C(()=>u.order,n=>{o.value=n}),f({openModal:y,hideModal:m}),(n,_)=>(l(),s("div",{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"modalRef",ref:c},[t("div",G,[t("div",J,[K,t("div",Q,[t("div",W,[t("div",X,[Y,t("table",Z,[o.value.user?(l(),s("tbody",tt,[t("tr",null,[et,t("td",null,e(o.value.user.name),1)]),t("tr",null,[lt,t("td",null,e(o.value.user.email),1)]),t("tr",null,[st,t("td",null,e(o.value.user.tel),1)]),t("tr",null,[ot,t("td",null,e(o.value.user.address),1)])])):M("",!0)])]),t("div",at,[nt,t("table",dt,[t("tbody",null,[t("tr",null,[rt,t("td",null,e(o.value.id),1)]),t("tr",null,[it,t("td",null,e(n.$filters.date(o.value.create_at)),1)]),t("tr",null,[ct,t("td",null,[o.value.paid_date?(l(),s("span",ut,e(n.$filters.date(o.value.paid_date)),1)):(l(),s("span",_t,"時間不正確"))])]),t("tr",null,[ht,t("td",null,[o.value.is_paid?(l(),s("strong",mt,"已付款")):(l(),s("span",pt,"尚未付款"))])]),t("tr",null,[bt,t("td",null,e(n.$filters.currency(o.value.total)),1)])])]),vt,t("table",ft,[yt,t("tbody",null,[(l(!0),s($,null,E(o.value.products,a=>(l(),s("tr",{key:a.id},[t("th",null,e(a.product.title),1),t("td",null,e(a.qty)+" / "+e(a.product.unit),1),t("td",$t,e(n.$filters.currency(a.final_total)),1)]))),128))])])])])]),gt])])],512))}};var xt={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Mt={class:"container mt-8"},Et={class:"table"},Ot=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),Vt=["textContent"],Rt={class:"list-unstyled"},It={class:"text-right"},Tt=["for"],Ct={key:0},At={key:1},Pt={class:"btn-group"},Dt=["onClick"],Lt=["onClick"],jt={__name:"AdminOrders",setup(h){const{VITE_API:f,VITE_PATH:y}=xt,m=i(null),c=i(null),u=i({}),o=i(!1),n=i({}),_=i(!1),a=i({}),k=r=>{a.value={...r},o.value=!1,m.value.openModal()},x=r=>{a.value={...r},c.value.openModal()},p=(r=1)=>{const O=`${f}api/${y}/admin/orders?page=${r}`;_.value=!0,R.get(O).then(b=>{u.value=b.data.orders,_.value=!1,n.value=b.data.pagination}).catch(b=>{_.value=!1,I.fire(b.response)})};return A(()=>{p()}),(r,O)=>{const b=P("VueLoading");return l(),s($,null,[g(b,{active:_.value,"z-index":1060},null,8,["active"]),t("div",Mt,[t("table",Et,[Ot,t("tbody",null,[(l(!0),s($,null,E(u.value,d=>(l(),s($,{key:d.id},[u.value.length?(l(),s("tr",{key:0,class:D({"text-secondary":!d.is_paid})},[t("td",null,e(r.$filters.date(d.create_at)),1),t("td",null,[d.user?(l(),s("span",{key:0,textContent:e(d.user.email)},null,8,Vt)):M("",!0)]),t("td",null,[t("ul",Rt,[(l(!0),s($,null,E(d.products,v=>(l(),s("li",{key:v.id},e(v.product.title)+" 數量："+e(v.qty)+" "+e(v.product.unit),1))),128))])]),t("td",It,e(d.total),1),t("td",null,[t("div",null,[t("label",{class:"form-check-label",for:`${d.id}`},[d.is_paid?(l(),s("span",Ct,"已付款")):(l(),s("span",At,"未付款"))],8,Tt)])]),t("td",null,[t("div",Pt,[t("button",{class:"btn btn-outline-dark btn-sm",type:"button",onClick:v=>k(d)}," 檢視 ",8,Dt),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:v=>x(d)}," 刪除 ",8,Lt)])])],2)):M("",!0)],64))),128))])])]),g(kt,{order:a.value,ref_key:"orderModalRef",ref:m},null,8,["order"]),g(U,{item:a.value,ref_key:"delModalRef",ref:c,onDelItem:p},null,8,["item"]),g(L,{pages:n.value,onEmitPages:p},null,8,["pages"])],64)}}};export{jt as default};