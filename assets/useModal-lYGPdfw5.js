import{B as v,C as it,r as R,k as st}from"./index-yC9jJfhG.js";import{a as y,d as Y,c as k,b as C,e as nt,r as ot}from"./selector-engine-5AnjKWuM.js";var K={exports:{}},L={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var B;function rt(){return B||(B=1,function(d,f){(function(o,i){d.exports=i(y(),Y(),k())})(v,function(o,i,r){const _="backdrop",p="fade",a="show",u=`mousedown.bs.${_}`,g={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},E={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class n extends i{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return g}static get DefaultType(){return E}static get NAME(){return _}show(e){if(!this._config.isVisible){r.execute(e);return}this._append();const h=this._getElement();this._config.isAnimated&&r.reflow(h),h.classList.add(a),this._emulateAnimation(()=>{r.execute(e)})}hide(e){if(!this._config.isVisible){r.execute(e);return}this._getElement().classList.remove(a),this._emulateAnimation(()=>{this.dispose(),r.execute(e)})}dispose(){this._isAppended&&(o.off(this._element,u),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(p),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=r.getElement(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),o.on(e,u,()=>{r.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){r.executeAfterTransition(e,this._getElement(),this._config.isAnimated)}}return n})}(L)),L.exports}var S={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var $;function at(){return $||($=1,function(d,f){(function(o,i){i(f,y(),C(),k())})(v,function(o,i,r,_){const p=(a,u="hide")=>{const g=`click.dismiss${a.EVENT_KEY}`,E=a.NAME;i.on(document,g,`[data-bs-dismiss="${E}"]`,function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),_.isDisabled(this))return;const t=r.getElementFromSelector(this)||this.closest(`.${E}`);a.getOrCreateInstance(t)[u]()})};o.enableDismissTrigger=p,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})})}(S,S.exports)),S.exports}var M={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var W;function lt(){return W||(W=1,function(d,f){(function(o,i){d.exports=i(y(),C(),Y())})(v,function(o,i,r){const _="focustrap",a=".bs.focustrap",u=`focusin${a}`,g=`keydown.tab${a}`,E="Tab",n="forward",t="backward",e={autofocus:!0,trapElement:null},h={autofocus:"boolean",trapElement:"element"};class A extends r{constructor(c){super(),this._config=this._getConfig(c),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return e}static get DefaultType(){return h}static get NAME(){return _}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),o.off(document,a),o.on(document,u,c=>this._handleFocusin(c)),o.on(document,g,c=>this._handleKeydown(c)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,o.off(document,a))}_handleFocusin(c){const{trapElement:T}=this._config;if(c.target===document||c.target===T||T.contains(c.target))return;const D=i.focusableChildren(T);D.length===0?T.focus():this._lastTabNavDirection===t?D[D.length-1].focus():D[0].focus()}_handleKeydown(c){c.key===E&&(this._lastTabNavDirection=c.shiftKey?t:n)}}return A})}(M)),M.exports}var x={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var F;function ct(){return F||(F=1,function(d,f){(function(o,i){d.exports=i(nt(),C(),k())})(v,function(o,i,r){const _=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",p=".sticky-top",a="padding-right",u="margin-right";class g{constructor(){this._element=document.body}getWidth(){const n=document.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}hide(){const n=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,a,t=>t+n),this._setElementAttributes(_,a,t=>t+n),this._setElementAttributes(p,u,t=>t-n)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,a),this._resetElementAttributes(_,a),this._resetElementAttributes(p,u)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(n,t,e){const h=this.getWidth(),A=b=>{if(b!==this._element&&window.innerWidth>b.clientWidth+h)return;this._saveInitialAttribute(b,t);const c=window.getComputedStyle(b).getPropertyValue(t);b.style.setProperty(t,`${e(Number.parseFloat(c))}px`)};this._applyManipulationCallback(n,A)}_saveInitialAttribute(n,t){const e=n.style.getPropertyValue(t);e&&o.setDataAttribute(n,t,e)}_resetElementAttributes(n,t){const e=h=>{const A=o.getDataAttribute(h,t);if(A===null){h.style.removeProperty(t);return}o.removeDataAttribute(h,t),h.style.setProperty(t,A)};this._applyManipulationCallback(n,e)}_applyManipulationCallback(n,t){if(r.isElement(n)){t(n);return}for(const e of i.find(n,this._element))t(e)}}return g})}(x)),x.exports}/*!
  * Bootstrap modal.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(d,f){(function(o,i){d.exports=i(ot(),y(),C(),rt(),at(),lt(),k(),ct())})(v,function(o,i,r,_,p,a,u,g){const E="modal",t=".bs.modal",e=".data-api",h="Escape",A=`hide${t}`,b=`hidePrevented${t}`,c=`hidden${t}`,T=`show${t}`,D=`shown${t}`,q=`resize${t}`,P=`click.dismiss${t}`,G=`mousedown.dismiss${t}`,z=`keydown.dismiss${t}`,U=`click${t}${e}`,I="modal-open",Q="fade",V="show",O="modal-static",J=".modal.show",X=".modal-dialog",Z=".modal-body",j='[data-bs-toggle="modal"]',H={backdrop:!0,focus:!0,keyboard:!0},tt={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class w extends o{constructor(s,l){super(s,l),this._dialog=r.findOne(X,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new g,this._addEventListeners()}static get Default(){return H}static get DefaultType(){return tt}static get NAME(){return E}toggle(s){return this._isShown?this.hide():this.show(s)}show(s){this._isShown||this._isTransitioning||i.trigger(this._element,T,{relatedTarget:s}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(I),this._adjustDialog(),this._backdrop.show(()=>this._showElement(s)))}hide(){!this._isShown||this._isTransitioning||i.trigger(this._element,A).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(V),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){i.off(window,t),i.off(this._dialog,t),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new _({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new a({trapElement:this._element})}_showElement(s){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const l=r.findOne(Z,this._dialog);l&&(l.scrollTop=0),u.reflow(this._element),this._element.classList.add(V);const m=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,i.trigger(this._element,D,{relatedTarget:s})};this._queueCallback(m,this._dialog,this._isAnimated())}_addEventListeners(){i.on(this._element,z,s=>{if(s.key===h){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),i.on(window,q,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),i.on(this._element,G,s=>{i.one(this._element,P,l=>{if(!(this._element!==s.target||this._element!==l.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(I),this._resetAdjustments(),this._scrollBar.reset(),i.trigger(this._element,c)})}_isAnimated(){return this._element.classList.contains(Q)}_triggerBackdropTransition(){if(i.trigger(this._element,b).defaultPrevented)return;const l=this._element.scrollHeight>document.documentElement.clientHeight,m=this._element.style.overflowY;m==="hidden"||this._element.classList.contains(O)||(l||(this._element.style.overflowY="hidden"),this._element.classList.add(O),this._queueCallback(()=>{this._element.classList.remove(O),this._queueCallback(()=>{this._element.style.overflowY=m},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const s=this._element.scrollHeight>document.documentElement.clientHeight,l=this._scrollBar.getWidth(),m=l>0;if(m&&!s){const N=u.isRTL()?"paddingLeft":"paddingRight";this._element.style[N]=`${l}px`}if(!m&&s){const N=u.isRTL()?"paddingRight":"paddingLeft";this._element.style[N]=`${l}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(s,l){return this.each(function(){const m=w.getOrCreateInstance(this,s);if(typeof s=="string"){if(typeof m[s]>"u")throw new TypeError(`No method named "${s}"`);m[s](l)}})}}return i.on(document,U,j,function(et){const s=r.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&et.preventDefault(),i.one(s,T,N=>{N.defaultPrevented||i.one(s,c,()=>{u.isVisible(this)&&this.focus()})});const l=r.findOne(J);l&&w.getInstance(l).hide(),w.getOrCreateInstance(s).toggle(this)}),p.enableDismissTrigger(w),u.defineJQueryPlugin(w),w})})(K);var ut=K.exports;const ht=it(ut),mt=()=>{const d=R(null),f=R(null);return st(()=>{f.value=new ht(d.value)}),{modalRef:d,openModal(){f.value.show()},hideModal(){f.value.hide()}}};export{mt as u};