import{x as f,a as d,b as h,c as v,d as w,e,s as g,q as c,z as u,h as l,t as x,f as b,g as k}from"./index-0EYJue82.js";import{a as V}from"./axios-L6U4YIEh.js";import{S as p}from"./sweetalert2.all-wXZkOPxR.js";var E={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/H-MFigure/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const P={class:"container"},S={class:"row g-2 justify-content-center OBJECTS06"},T={class:"col-12 col-md-4 text-center"},D=e("h1",{class:"pb-5 pt-9 text-dark fw-bold"},"後台登入頁面",-1),I={class:"form-floating"},L=e("label",{for:"floatingInput"},"Email address",-1),R={class:"form-floating mt-3"},y=e("label",{for:"floatingPassword"},"Password",-1),B={class:"mt-6 mb-3 text-muted"},C=e("br",null,null,-1),O={__name:"LoginView",setup(A){const{VITE_API:m}=E,_=f(),o=d({}),a=d(!1),r=()=>{const i=`${m}admin/signin`;a.value=!0,V.post(i,o.value).then(t=>{const{token:n,expired:s}=t.data;document.cookie=`hexToken=${n};expires=${new Date(s)}`,a.value=!1,_.push("/admin/products"),p.fire("己成功登入")}).catch(t=>{a.value=!1,p.fire(t.response)})};return(i,t)=>{const n=h("RouterLink");return v(),w("div",P,[e("div",S,[e("div",T,[D,e("form",{onSubmit:g(r,["prevent"])},[e("div",I,[c(e("input",{type:"email",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=s=>o.value.username=s),id:"floatingInput",placeholder:"Password",required:""},null,512),[[u,o.value.username]]),L]),e("div",R,[c(e("input",{type:"password",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=s=>o.value.password=s),id:"floatingPassword",placeholder:"Password",required:""},null,512),[[u,o.value.password]]),y]),e("button",{class:"btn btn-lg btn-danger w-100 mt-3",type:"button",onClick:r}," 登入 ")],32),e("p",B,[l(" © "+x(new Date().getFullYear())+" - Charlotte Lee",1),C,l(" 本網站僅供個人作品使用，不提供商業用途 "),b(n,{class:"nav-link text-muted",to:"/"},{default:k(()=>[l("返回前台首頁")]),_:1})])])])])}}};export{O as default};
