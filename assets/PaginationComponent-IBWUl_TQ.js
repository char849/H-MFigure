import{c as i,d as l,e,n as o,s as r,F as d,j as m,t as u}from"./index-0EYJue82.js";const _={"aria-label":"Page navigation example",class:"pb-3 pt-5 d-flex justify-content-center"},h={class:"pagination pagination-lg"},k=e("span",{"aria-hidden":"true"},"«",-1),v=[k],f=["onClick"],b=e("span",{"aria-hidden":"true"},"»",-1),x=[b],j={__name:"PaginationComponent",props:{pages:Object},emits:["emit-pages"],setup(a,{emit:p}){const g=p,n=c=>{g("emit-pages",c)};return(c,s)=>(i(),l("nav",_,[e("ul",h,[e("li",{class:o(["page-item",{disabled:!a.pages.has_pre}])},[e("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:s[0]||(s[0]=r(t=>n(a.pages.current_page-1),["prevent"]))},v)],2),(i(!0),l(d,null,m(a.pages.total_pages,t=>(i(),l("li",{class:o(["page-item",{active:t===a.pages.current_page}]),key:t+"page"},[e("a",{class:"page-link",href:"#",onClick:r(C=>n(t),["prevent"])},u(t),9,f)],2))),128)),e("li",{class:o(["page-item",{disabled:!a.pages.has_next}])},[e("a",{class:"page-link",href:"#","aria-label":"Next",onClick:s[1]||(s[1]=r(t=>n(a.pages.current_page+1),["prevent"]))},x)],2)])]))}};export{j as _};
