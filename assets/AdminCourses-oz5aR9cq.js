import{a as R}from"./axios-L6U4YIEh.js";import{S as P}from"./sweetalert2.all-4cBuOcJD.js";import{u as F}from"./useModal-nXica9Rc.js";import{o as n,c as i,b as e,h as D,t as M,E as H,r as b,f as o,v as a,y as d,g as B,F as C,l as S,G as O,k as N,a as j,d as I}from"./index-2Qo6419k.js";import{_ as G}from"./PaginationComponent-NIKYkflY.js";import"./selector-engine-Hy5N7oO_.js";var q={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const z={class:"modal-dialog"},J={class:"modal-content border-0"},K=e("div",{class:"modal-header bg-danger text-white"},[e("h5",{id:"delProductModalLabel",class:"modal-title"},[e("span",null,"刪除產品")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Q={class:"modal-body"},W={class:"text-danger"},X=e("button",{type:"button",class:"btn btn-outline-danger","data-bs-dismiss":"modal"}," 取消 ",-1),Y={__name:"DelModal",props:{tempProduct:Object},emits:["get-data"],setup($,{expose:V,emit:w}){const{openModal:p,hideModal:f,modalRef:g}=F(),t=$,y=w,{VITE_API:k,VITE_PATH:x}=q,m=()=>{const h=`${k}api/${x}/admin/product/${t.tempProduct.id}`;R.delete(h).then(r=>{P.fire(r.data.message),f(),y("get-data")})};return V({openModal:p,hideModal:f}),(h,r)=>(n(),i("div",{id:"delModal",ref_key:"modalRef",ref:g,class:"modal fade",tabindex:"-1","aria-labelledby":"delModalLabel","aria-hidden":"true"},[e("div",z,[e("div",J,[K,e("div",Q,[D(" 是否刪除 "),e("strong",W,M($.tempProduct.title),1),D(" 商品(刪除後將無法恢復)。 ")]),e("div",{class:"modal-footer"},[X,e("button",{type:"button",class:"btn btn-danger",onClick:m}," 確認刪除 ")])])])],512))}};var Z={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ee={class:"modal-dialog modal-xl"},te={class:"modal-content border-0"},oe={class:"modal-header bg-dark text-white"},le={id:"productModalLabel",class:"modal-title"},se={key:0},ae={key:1},ne=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),ie={class:"modal-body"},de={class:"row"},re={class:"col-sm-4"},ce={class:"mb-3"},ue=e("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),pe={class:"mb-3"},me={for:"customFile",class:"form-label"},_e={key:0,class:"fas fa-spinner fa-spin"},be=["src"],fe=e("h3",{class:"mb-3"},"多圖新增",-1),he={key:0},ve={class:"mb-3"},ge=e("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),ye=["onUpdate:modelValue"],ke=["src"],Ue={key:0},xe={key:1},$e={key:1},Ve={class:"col-sm-8"},we={class:"mb-3"},Me=e("label",{for:"title",class:"form-label"},"課程名稱",-1),Pe={class:"row"},Ee={class:"mb-3 col-md-6"},Te=e("label",{for:"category",class:"form-label"},"課程分類",-1),Ie={class:"mb-3 col-md-6"},Re=e("label",{for:"unit",class:"form-label"},"單位",-1),Ce={class:"row"},Ae={class:"mb-3 col-md-6"},De=e("label",{for:"origin_price",class:"form-label"},"課程原價",-1),Fe={class:"mb-3 col-md-6"},Se=e("label",{for:"price",class:"form-label"},"課程售價",-1),Le={class:"row"},He={class:"mb-3 col-md-6"},Be=e("label",{for:"level",class:"form-label"},"難易程度",-1),Oe={class:"mb-3 col-md-6"},Ne=e("label",{for:"time",class:"form-label"},"課程時間",-1),je={class:"row"},Ge={class:"mb-3 col-md-6"},qe=e("label",{for:"hr",class:"form-label"},"課程時數",-1),ze={class:"mb-3 col-md-6"},Je=e("label",{for:"people",class:"form-label"},"上課人數",-1),Ke={class:"row"},Qe={class:"mb-3 col-md-6"},We=e("label",{for:"week",class:"form-label"},"一週天數",-1),Xe={class:"mb-3 col-md-6"},Ye=e("label",{for:"location",class:"form-label"},"上課地點",-1),Ze=e("hr",null,null,-1),et={class:"mb-3"},tt=e("label",{for:"description",class:"form-label"},"注意事項",-1),ot={class:"mb-3"},lt=e("label",{for:"content",class:"form-label"},"說明內容",-1),st={class:"mb-3"},at={class:"form-check"},nt=e("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),it=e("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"}," 取消 ",-1),dt={__name:"ProductModal",props:{tempProduct:Object,isNew:Boolean},emits:["get-data"],setup($,{expose:V,emit:w}){const{VITE_API:p,VITE_PATH:f}=Z,g=$,{tempProduct:t,isNew:y}=H(g),k=w,{openModal:x,hideModal:m,modalRef:h}=F(),r=b(null),c=b({}),v=()=>{const E={title:"課程名稱",category:"課程分類",unit:"單位",origin_price:"課程原價",price:"課程售價",level:"難易程度",time:"課程時間",hr:"課程時數",people:"上課人數",week:"一週天數",location:"上課地點",description:"注意事項",content:"說明內容"},s=["title","category","unit","origin_price","price","level","time","hr","people","week","location","description","content"].filter(U=>!t.value[U]);if(s.length>0){const U=s.map(L=>E[L]);P.fire({title:"以下欄位為必填",text:`${U.join(", ")}`,icon:"warning",reverseButtons:!0});return}let _=`${p}api/${f}/admin/product`,T="post";y.value||(_=`${p}api/${f}/admin/product/${t.value.id}`,T="put"),R[T](_,{data:t.value}).then(U=>{P.fire(U.data.message),m(),k("get-data")}).catch(U=>{P.fire(U.response.data.message)})},u=()=>{t.value.imagesUrl=[""],t.value.imagesUrl.push("")},A=()=>{const E=r.value.files[0],l=new FormData;l.append("file-to-upload",E);const s="https://vue3-course-api.hexschool.io/v2//api/charlotte-lee849/admin/upload";c.value.fileUploading=!0,R.post(s,l,{headers:{"Content-Type":"multipart/form-data"}}).then(_=>{c.value.fileUploading=!1,_.data.success&&(t.value.imageUrl=_.data.imageUrl),r.value.value=""}).catch(()=>{c.value.fileUploading=!1})};return V({openModal:x,hideModal:m}),(E,l)=>(n(),i("div",{id:"productModal",ref_key:"modalRef",ref:h,class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},[e("div",ee,[e("div",te,[e("div",oe,[e("h5",le,[o(y)?(n(),i("span",se,"新增產品")):(n(),i("span",ae,"編輯產品"))]),ne]),e("div",ie,[e("div",de,[e("div",re,[e("div",ce,[ue,a(e("input",{"onUpdate:modelValue":l[0]||(l[0]=s=>o(t).imageUrl=s),type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,512),[[d,o(t).imageUrl]]),e("div",pe,[e("label",me,[D("或 上傳圖片 "),c.value.fileUploading?(n(),i("i",_e)):B("",!0)]),e("input",{type:"file",id:"customFile",class:"form-control",ref_key:"fileInputRef",ref:r,onChange:A},null,544)]),e("img",{class:"img-fluid",src:o(t).imageUrl},null,8,be)]),fe,Array.isArray(o(t).imagesUrl)?(n(),i("div",he,[(n(!0),i(C,null,S(o(t).imagesUrl,(s,_)=>(n(),i(C,{key:_},[e("div",ve,[ge,a(e("input",{"onUpdate:modelValue":T=>o(t).imagesUrl[_]=T,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,ye),[[d,o(t).imagesUrl[_]]])]),e("img",{class:"img-fluid",src:s},null,8,ke)],64))),128)),!o(t).imagesUrl.length||o(t).imagesUrl[o(t).imagesUrl.length-1]?(n(),i("div",Ue,[e("button",{class:"btn btn-outline-dark btn-sm d-block w-100",onClick:l[1]||(l[1]=s=>o(t).imagesUrl.push(""))}," 新增圖片 ")])):(n(),i("div",xe,[e("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:l[2]||(l[2]=s=>o(t).imagesUrl.pop())}," 刪除圖片 ")]))])):(n(),i("div",$e,[e("button",{type:"button",class:"btn btn-outline-dark btn-sm d-block w-100",onClick:u}," 新增圖片 ")]))]),e("div",Ve,[e("div",we,[Me,a(e("input",{id:"title","onUpdate:modelValue":l[3]||(l[3]=s=>o(t).title=s),type:"text",class:"form-control",placeholder:"請輸入課程名稱"},null,512),[[d,o(t).title]])]),e("div",Pe,[e("div",Ee,[Te,a(e("input",{id:"category","onUpdate:modelValue":l[4]||(l[4]=s=>o(t).category=s),type:"text",class:"form-control",placeholder:"請輸入課程分類"},null,512),[[d,o(t).category]])]),e("div",Ie,[Re,a(e("input",{id:"unit","onUpdate:modelValue":l[5]||(l[5]=s=>o(t).unit=s),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[d,o(t).unit]])])]),e("div",Ce,[e("div",Ae,[De,a(e("input",{id:"origin_price","onUpdate:modelValue":l[6]||(l[6]=s=>o(t).origin_price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入課程原價"},null,512),[[d,o(t).origin_price,void 0,{number:!0}]])]),e("div",Fe,[Se,a(e("input",{id:"price","onUpdate:modelValue":l[7]||(l[7]=s=>o(t).price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入課程售價"},null,512),[[d,o(t).price,void 0,{number:!0}]])])]),e("div",Le,[e("div",He,[Be,a(e("input",{id:"level","onUpdate:modelValue":l[8]||(l[8]=s=>o(t).level=s),type:"text",class:"form-control",placeholder:"請輸入難易程度"},null,512),[[d,o(t).level]])]),e("div",Oe,[Ne,a(e("input",{id:"time","onUpdate:modelValue":l[9]||(l[9]=s=>o(t).time=s),type:"text",class:"form-control",placeholder:"請輸入課程時間"},null,512),[[d,o(t).time]])])]),e("div",je,[e("div",Ge,[qe,a(e("input",{id:"hr","onUpdate:modelValue":l[10]||(l[10]=s=>o(t).hr=s),type:"text",class:"form-control",placeholder:"請輸入課程時數"},null,512),[[d,o(t).hr]])]),e("div",ze,[Je,a(e("input",{id:"people","onUpdate:modelValue":l[11]||(l[11]=s=>o(t).people=s),type:"text",class:"form-control",placeholder:"請輸入上課人數"},null,512),[[d,o(t).people]])])]),e("div",Ke,[e("div",Qe,[We,a(e("input",{id:"week","onUpdate:modelValue":l[12]||(l[12]=s=>o(t).week=s),type:"text",class:"form-control",placeholder:"請輸入一週天數"},null,512),[[d,o(t).week]])]),e("div",Xe,[Ye,a(e("input",{id:"location","onUpdate:modelValue":l[13]||(l[13]=s=>o(t).location=s),type:"text",class:"form-control",placeholder:"請輸入上課地點"},null,512),[[d,o(t).location]])])]),Ze,e("div",et,[tt,a(e("textarea",{id:"description","onUpdate:modelValue":l[14]||(l[14]=s=>o(t).description=s),type:"text",class:"form-control",placeholder:"請輸入注意事項"},`
                `,512),[[d,o(t).description]])]),e("div",ot,[lt,a(e("textarea",{id:"content","onUpdate:modelValue":l[15]||(l[15]=s=>o(t).content=s),type:"text",class:"form-control",placeholder:"請輸入說明內容"},`
                `,512),[[d,o(t).content]])]),e("div",st,[e("div",at,[a(e("input",{id:"is_enabled","onUpdate:modelValue":l[16]||(l[16]=s=>o(t).is_enabled=s),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[O,o(t).is_enabled]]),nt])])])])]),e("div",{class:"modal-footer"},[it,e("button",{type:"button",class:"btn btn-danger",onClick:v}," 確認 ")])])])],512))}};var rt={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ct={class:"container"},ut={class:"text-end mt-8"},pt={class:"table mt-4"},mt=e("thead",null,[e("tr",null,[e("th",{width:"120"},"課程分類"),e("th",null,"課程名稱"),e("th",{width:"120"},"課程原價"),e("th",{width:"120"},"課程售價"),e("th",{width:"100"},"是否上架"),e("th",{width:"120"},"編輯課程")])],-1),_t={class:"text-start"},bt={class:"text-start"},ft={key:0,class:"text-success"},ht={key:1},vt={class:"btn-group"},gt=["onClick"],yt=["onClick"],Mt={__name:"AdminCourses",setup($){const{VITE_API:V,VITE_PATH:w}=rt,p=b(!1),f=b([]),g=b(!1),t=b({imagesUrl:[]}),y=b({}),k=b(null),x=b(null),m=(r=1)=>{const c=`${V}api/${w}/admin/products/?page=${r}`;p.value=!0,R.get(c).then(v=>{f.value=v.data.products,y.value=v.data.pagination,p.value=!1}).catch(v=>{p.value=!1,P.fire(v.response.data.message)})},h=(r,c)=>{r==="new"?(t.value={imagesUrl:[]},g.value=!0,k.value.openModal()):r==="edit"?(t.value={...c},g.value=!1,k.value.openModal()):r==="delete"&&(t.value={...c},x.value.openModal())};return N(()=>{m()}),(r,c)=>{const v=j("VueLoading");return n(),i(C,null,[e("div",ct,[e("div",ut,[e("button",{type:"button",class:"btn btn-danger",onClick:c[0]||(c[0]=u=>h("new"))}," 建立新課程 ")]),e("table",pt,[I(v,{active:p.value,"z-index":1060,class:"text-center"},null,8,["active"]),mt,e("tbody",null,[(n(!0),i(C,null,S(f.value,u=>(n(),i("tr",{key:u.id},[e("td",null,M(u.category),1),e("td",null,M(u.title),1),e("td",_t,M(u.origin_price),1),e("td",bt,M(u.price),1),e("td",null,[u.is_enabled?(n(),i("span",ft,"啟用")):(n(),i("span",ht,"未啟用"))]),e("td",null,[e("div",vt,[e("button",{type:"button",class:"btn btn-outline-dark btn-sm",onClick:A=>h("edit",u)}," 編輯 ",8,gt),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:A=>h("delete",u)}," 刪除 ",8,yt)])])]))),128))])]),I(G,{pages:y.value,onEmitPages:m},null,8,["pages"])]),I(dt,{"temp-product":t.value,"is-new":g.value,onGetData:m,ref_key:"productModalRef",ref:k},null,8,["temp-product","is-new"]),I(Y,{"temp-product":t.value,onGetData:m,ref_key:"delModalRef",ref:x},null,8,["temp-product"])],64)}}};export{Mt as default};