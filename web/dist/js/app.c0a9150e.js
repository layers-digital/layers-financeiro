(function(t){function e(e){for(var s,i,l=e[0],o=e[1],c=e[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"06d5":function(t,e,a){},"0d86":function(t,e,a){},"0e07":function(t,e,a){},"0eef":function(t,e,a){"use strict";var s=a("372c"),r=a.n(s);r.a},1108:function(t,e,a){t.exports=a.p+"img/attention-yellow-icon.9676edae.svg"},1969:function(t,e,a){},"1f0b":function(t,e,a){},"1f3c":function(t,e,a){"use strict";var s=a("0e07"),r=a.n(s);r.a},2224:function(t,e,a){},"28a5":function(t,e,a){},"2bb2":function(t,e,a){"use strict";var s=a("4bbd"),r=a.n(s);r.a},"372c":function(t,e,a){},"4bbd":function(t,e,a){},"50c3":function(t,e,a){t.exports=a.p+"img/arrow-right.fe16a025.svg"},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ls-ma-0",attrs:{id:"app"}},[a("div",{staticClass:"content-wrap grey-10"},[a("AppBar",{staticClass:"app-bar-layout"}),a("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[a("router-view",{staticStyle:{"padding-top":"72px !important"}})],1)],1)])},n=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-bar-container"},[s("div",{staticClass:"app-bar grey-30-outline"},[s("div",{staticClass:"ls-row ls-no-gutters p-3 ls-align-items-center",staticStyle:{height:"56px","z-index":"5"},on:{click:function(e){return t.setCurrentPage(t.currentPage)}}},[t._m(0),s("span",{staticClass:"ls-text-center title ls-flex-grow-1"},[t._v(" "+t._s(t.currentPage.title)+" ")]),s("div",{staticClass:"ls-col ls-align-self-center ls-flex-grow-0"},[s("img",{staticClass:"group-chevron",class:{active:t.expanded},attrs:{src:a("896a"),height:"24",width:"24"}})])]),s("TransitionExpand",[t.expanded?s("div",{staticClass:"p-3"},t._l(t.links,(function(e,r){return s("div",{key:e.id,staticClass:"ls-row ls-no-gutters ellipsis",class:{"mb-4":r!=t.links.length-1},on:{click:function(a){return t.setCurrentPage(e)}}},[s("div",{staticClass:"ls-col ls-align-self-center mr-2 ls-flex-grow-0",staticStyle:{"max-width":"24px"}},[s("img",{staticClass:"app-icon-radius",attrs:{src:a("711f"),height:"24",width:"24"}})]),s("router-link",{staticClass:"align-center title",class:{"link--text":e.id==t.currentPage.id,"lead--text":e.id!=t.currentPage.id},attrs:{tag:"a",to:e.route}},[t._v(" "+t._s(e.title)+" ")])],1)})),0):t._e()])],1),s("transition",{attrs:{name:"fade"}},[t.expanded?s("div",{staticClass:"overlay",on:{click:function(e){t.expanded=!t.expanded}}}):t._e()])],1)},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ls-col ls-align-self-center mr-2 ls-flex-grow-0",staticStyle:{"max-width":"24px"}},[s("img",{staticClass:"app-icon-radius",attrs:{src:a("79ea"),height:"24",width:"24"}})])}],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"expand"},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave}},[t._t("default")],2)},c=[],u={name:"TransitionExpand",methods:{enter(t){const e=getComputedStyle(t).width;t.style.width=e,t.style.position="absolute",t.style.visibility="hidden",t.style.height="auto";const a=getComputedStyle(t).height;t.style.width=null,t.style.position=null,t.style.visibility=null,t.style.height=0,getComputedStyle(t).height,requestAnimationFrame(()=>{t.style.height=a})},afterEnter(t){t.style.height="auto"},leave(t){const e=getComputedStyle(t).height;t.style.height=e,getComputedStyle(t).height,requestAnimationFrame(()=>{t.style.height=0})}}},p=u,d=(a("fc02"),a("2877")),y=Object(d["a"])(p,o,c,!1,null,"555dacac",null),b=y.exports;const g={id:"overview",title:"Visão geral",icon:"default",route:{name:"overview"}};var f={name:"AppBar",components:{TransitionExpand:b},data(){return{expanded:!1,currentPage:g}},watch:{$route(t){"overview"==t.name&&(this.currentPage=g),"payables.group"==t.name&&(this.currentPage=this.links.find(e=>e.id==t.params.groupId))}},computed:{payablesGroups(){return this.$store.getters["payables/getPayablesGroups"]},links(){let t=this.payablesGroups.map(t=>{let e={id:null,title:null,icon:null,route:{name:null,params:{}}};return e.id=t.id,e.title=t.title,e.icon=t.icon,e.route.name="payables.group",e.route.params.groupId=t.id,e});return t.push(g),t.sort((t,e)=>"overview"==t.id?-1:"overview"==e?1:0)}},methods:{setCurrentPage(t){this.currentPage=t,this.expanded=!this.expanded}}},m=f,h=(a("ac6e"),Object(d["a"])(m,i,l,!1,null,"422b3fec",null)),v=h.exports,C={name:"App",components:{AppBar:v},data:()=>({transitionName:"slide-left"}),watch:{$route(t,e){const a=t.path.split("/").length,s=e.path.split("/").length;this.transitionName=a<s?"slide-right":"slide-left"}}},_=C,x=(a("948f"),Object(d["a"])(_,r,n,!1,null,"376c6c7d",null)),w=x.exports,P=a("8c4f"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ls-container p-3 grey-10",staticStyle:{"min-height":"100%",overflow:"auto !important"}},[t.criticalPayables.length?a("div",{staticClass:"mb-4"},[a("div",{staticClass:"attention-label danger--text mb-2"},[t._v(" "+t._s(t.criticalPayables.length)+" cobranças precisam de atenção ")]),t._l(t.criticalPayables,(function(t){return a("AttentionCard",{key:t.id,staticClass:"mb-2",attrs:{payable:t}})}))],2):a("NoCriticalPayablesCard",{staticClass:"mb-4"}),t._l(t.payablesGroups,(function(t){return a("router-link",{key:t.id,staticClass:"remove-style",attrs:{slot:"reference",tag:"a",to:{name:"payables.group",params:{groupId:t.id}}},slot:"reference"},[a("PayablesCard",{staticClass:"mb-2",attrs:{payablesGroup:t}})],1)}))],2)},S=[],G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ls-row ls-no-gutters card grey-30-outline p-3 ls-align-items-center"},["late"==t.payable.status?s("img",{staticClass:"mr-3",attrs:{src:a("f498"),height:"32",width:"32"}}):s("img",{staticClass:"mr-3",attrs:{src:a("1108"),height:"32",width:"32"}}),s("div",{staticClass:"ls-col ellipsis mr-2"},[s("div",[t._v(" "+t._s(t.payable.title)+" ")]),s("div",{staticClass:"relative-date"},[t._v(" "+t._s(t.readableRelativeDueDate)+" ")])]),s("PayablesCount",{attrs:{friendlyInstallmentsCount:t.payable.friendlyInstallmentsCount}})],1)},$=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"count-badge grey-70--text"},[t._v(" "+t._s(t.friendlyInstallmentsCount)+" ")])},j=[],E={name:"PayablesCount",props:{friendlyInstallmentsCount:{type:String,default:"--"}}},k=E,B=(a("91c8"),Object(d["a"])(k,O,j,!1,null,"33576bf4",null)),I=B.exports;function V(t){let e=Math.floor((new Date-new Date(t))/1e3),a="",s=!1;e<0?(a="Vencerá em",s=!0,e*=-1):a="Venceu há";let r=A(e,s),n=`${a} ${r}`;return"Vence hoje"!=r&&"Vencerá amanhã"!=r&&"Venceu ontem"!=r||(n=r),n}function A(t,e){let a=Math.floor(t/31536e3);if(a>1)return a+" anos";if(a=Math.floor(t/2592e3),a>1)return a+" meses";if(a=Math.floor(t/86400),a>1)return a+" dias";a=Math.floor(t/3600);let s=new Date,r=new Date;return r.setHours(r.getHours()-a),s.getDay()==r.getDay()?"Vence hoje":e?"Vencerá amanhã":"Venceu ontem"}var M={name:"AttentionCard",components:{PayablesCount:I},props:{payable:{type:Object,required:!0}},computed:{readableRelativeDueDate(){return V(this.payable.dueAt)}}},T=M,q=(a("1f3c"),Object(d["a"])(T,G,$,!1,null,"0de59084",null)),R=q.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ls-row ls-no-gutters card grey-30-outline p-3 ls-align-items-center"},[a("div",{staticClass:"ls-col"},[a("div",{staticClass:"card-title mb-3"},[t._v(" "+t._s(t.payablesGroup.title)+" ")]),a("div",[a("PayablesVisualCount",{attrs:{payablesGroup:t.payablesGroup}})],1)]),t._m(0)])},N=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ls-col",staticStyle:{"max-width":"24px"}},[s("img",{attrs:{src:a("50c3"),height:"24",width:"24"}})])}],F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"grey-70--text mb-2",staticStyle:{"font-weight":"700"}},[t._v(" "+t._s(t.payablesGroup.friendlyInstallmentsTotal)+" ")]),a("div",{staticClass:"ls-row ls-no-gutters"},t._l(t.payablesGroup.payables,(function(t){return a("CircleRepresentation",{key:t.id,staticClass:"mr-1",attrs:{payable:t}})})),1)])},z=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"circle",class:t.circleColor})},J=[],U={name:"CircleRepresentation",props:{payable:{type:Object,required:!0}},computed:{circleColor(){return this.payable.isCritical&&"late"==this.payable.status?"danger":this.payable.isCritical&&"late"!=this.payable.status?"warning":"paid"==this.payable.status?"success":"grey-50"}}},Y=U,K=(a("2bb2"),Object(d["a"])(Y,H,J,!1,null,"e8994a86",null)),Q=K.exports,W={name:"PayablesVisualCount",components:{CircleRepresentation:Q},props:{payablesGroup:{type:Object,required:!0}}},X=W,Z=Object(d["a"])(X,F,z,!1,null,"5ccba5e7",null),tt=Z.exports,et={name:"PayablesCard",components:{PayablesVisualCount:tt},props:{payablesGroup:{type:Object,required:!0}}},at=et,st=(a("56e8"),Object(d["a"])(at,L,N,!1,null,"4eee6baa",null)),rt=st.exports,nt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ls-row ls-no-gutters card grey-30-outline p-3 ls-align-items-center"},[s("div",{staticClass:"ls-col ls-align-self-center mr-3",staticStyle:{"max-width":"87px","max-height":"96px"}},[s("img",{staticStyle:{"margin-bottom":"-21px"},attrs:{src:a("ffc0"),height:"auto",width:"auto"}})]),s("div",{staticClass:"ls-col"},[s("span",{staticClass:"caption grey-70--text"},[t._v(" Você não tem cobranças pendentes :) ")])])])}],lt={name:"NoCriticalPayablesCard"},ot=lt,ct=(a("0eef"),Object(d["a"])(ot,nt,it,!1,null,"433540f0",null)),ut=ct.exports,pt={name:"Overview",components:{AttentionCard:R,PayablesCard:rt,NoCriticalPayablesCard:ut},data(){return{}},async created(){await this.$store.dispatch("payables/fetchData")},computed:{criticalPayables(){return this.$store.getters["payables/getCriticalPayables"]},payablesGroups(){return this.$store.getters["payables/getPayablesGroups"]},loading(){return this.$store.state.payables.loading}}},dt=pt,yt=(a("d720"),Object(d["a"])(dt,D,S,!1,null,"4e48d5bb",null)),bt=yt.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ls-container p-3 grey-10",staticStyle:{"min-height":"100%",overflow:"auto !important"}},[a("TransitionExpand",[a("div",{staticClass:"mb-3",staticStyle:{"font-size":"16px"}},[a("div",{domProps:{innerHTML:t._s(t.compiledMarkdown)}})])]),t.criticalPayablesByGroup.length?a("div",{staticClass:"mb-4"},[a("div",{staticClass:"label danger--text mb-2"},[t._v(" "+t._s(t.criticalPayablesByGroup.length)+" cobranças precisam de atenção ")]),t._l(t.criticalPayablesByGroup,(function(t){return a("PayableDetailCard",{key:t.id,staticClass:"mb-2",attrs:{payable:t}})}))],2):a("NoCriticalPayablesCard",{staticClass:"mb-4"}),t.payablesByGroup.length?a("div",{staticClass:"label lead-light--text mb-3"},[t._v(" Demais cobranças ")]):t._e(),t._l(t.payablesByGroup,(function(t){return a("PayableDetailCard",{key:t.id,staticClass:"mb-2",attrs:{payable:t}})}))],2)},ft=[],mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ls-col ls-no-gutters card p-3 ls-align-items-center",class:t.borderColor},[a("div",{staticClass:"ls-row ls-no-gutters mb-3 ls-align-items-center"},[a("div",{staticClass:"ls-col ls-flex-grow-0 mr-2"},[a("PayableStatusBadge",{attrs:{status:t.payable.status}})],1),a("div",{staticClass:"ls-col mr-2 ellipsis"},[a("span",{staticClass:"due-date grey-70--text"},[t._v(" "+t._s(t.readableRelativeDueDate)+" ")])]),a("div",{staticClass:"ls-col",staticStyle:{"max-width":"66px"}},[a("PayablesCount",{attrs:{friendlyInstallmentsCount:t.payable.friendlyInstallmentsCount}})],1)]),a("div",{staticClass:"ls-row ls-no-gutters mb-3"},[a("span",{staticClass:" description grey-70--text"},[t._v(" "+t._s(t.payable.description)+" ")])]),a("div",{staticClass:"ls-row ls-no-gutters"},[a("div",{staticClass:"ls-col mr-2 amount",class:t.amountColor},[a("span",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(t.payable.amount)+" ")])]),a("div",{staticClass:"ls-col"},[a("span",{staticStyle:{"white-space":"nowrap"}},[t._v(" Vencimento: "+t._s(t.formatedDueDate)+" ")])])])])},ht=[],vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"label",class:t.colors+"-light "+t.colors+"--text"},[t._v(" "+t._s(t.statusLabel)+" ")])},Ct=[],_t={name:"PayableStatusBadge",props:{status:{type:String,required:!0}},computed:{statusLabel(){return{late:"Vencida",pending:"Pendente",paid:"Pago",open:"Futura"}[this.status]||this.status},colors(){return{late:"danger",pending:"warning",paid:"success",open:"grey-70"}[this.status]||this.status}}},xt=_t,wt=(a("e29a"),Object(d["a"])(xt,vt,Ct,!1,null,"55c29668",null)),Pt=wt.exports,Dt={name:"PayableDetailCard",components:{PayableStatusBadge:Pt,PayablesCount:I},props:{payable:{type:Object,required:!0}},computed:{readableRelativeDueDate(){return V(this.payable.dueAt)},borderColor(){return this.payable.isCritical&&{late:"danger-outline",pending:"warning-outline"}[this.payable.status]||"grey-30-outline"},amountColor(){return{late:"danger--text",pending:"warning--text",paid:"success--text",open:"grey-80--text"}[this.payable.status]||"grey-80--text"},formatedDueDate(){let t=new Date(this.payable.dueAt),e=t.getDate().toString().padStart(2,"0"),a=(t.getMonth()+1).toString().padStart(2,"0"),s=t.getFullYear();return`${e}/${a}/${s}`}}},St=Dt,Gt=(a("db2f"),Object(d["a"])(St,mt,ht,!1,null,"29874ff2",null)),$t=Gt.exports,Ot=a("e0c1"),jt=a.n(Ot),Et=a("c0c4"),kt=a.n(Et),Bt={name:"PayablesGroup",components:{NoCriticalPayablesCard:ut,PayableDetailCard:$t,TransitionExpand:b},props:{groupId:{type:String,required:!0}},computed:{compiledMarkdown(){return kt.a.sanitize(jt()(this.group.description),{FORBID_TAGS:["style","script","h1","h2"]})},group(){return this.$store.getters["payables/getGroup"](this.groupId)},payablesByGroup(){return console.log(this.$store.getters["payables/getPayablesByGroup"](this.groupId)),this.$store.getters["payables/getPayablesByGroup"](this.groupId)},criticalPayablesByGroup(){return console.log(this.$store.getters["payables/getCriticalPayablesByGroup"](this.groupId)),this.$store.getters["payables/getCriticalPayablesByGroup"](this.groupId)}}},It=Bt,Vt=(a("7b20"),Object(d["a"])(It,gt,ft,!1,null,"0b220d38",null)),At=Vt.exports;s["a"].use(P["a"]);const Mt=[{path:"/",name:"overview",component:bt},{path:"/payables/:groupId",name:"payables.group",component:At,props:!0}],Tt=new P["a"]({mode:"history",base:"/",routes:Mt});var qt=Tt,Rt=a("bc3a"),Lt=a.n(Rt),Nt=a("2f62");const Ft={loading:!1,payablesData:null},zt={setLoading(t,e){t.loading=e},setPayablesData(t,e){t.payablesData=e}},Ht={async fetchData(t){t.commit("setLoading",!0);try{let e=await Lt.a.get("/financeiro");t.commit("setPayablesData",e.data),t.commit("setLoading",!1)}catch(e){console.log("Err",e),t.commit("setLoading",!1)}}},Jt={getCriticalPayables(t){return t.payablesData?t.payablesData.criticalPayables:[]},getPayablesGroups(t){return t.payablesData?t.payablesData.groups:[]},getGroup(t){return t.payablesData?e=>t.payablesData.groups.filter(t=>t.id===e)[0]:null},getPayablesByGroup(t){return e=>t.payablesData.groups.filter(t=>t.id===e)[0].payables.filter(t=>!t.isCritical)},getCriticalPayablesByGroup(t){return e=>t.payablesData.groups.filter(t=>t.id===e)[0].payables.filter(t=>t.isCritical)}};var Ut={namespaced:!0,state:Ft,getters:Jt,actions:Ht,mutations:zt};s["a"].use(Nt["a"]);var Yt=new Nt["a"].Store({modules:{payables:Ut}}),Kt=a("eb8b"),Qt=a.n(Kt),Wt=a("2224"),Xt=a.n(Wt),Zt=a("1f0b"),te=a.n(Zt),ee=a("28a5"),ae=a.n(ee),se=a("7fa7"),re=a.n(se);s["a"].config.productionTip=!1,Lt.a.defaults.baseURL="http://localhost:8050/layers-financeiro/us-central1",new s["a"]({router:qt,store:Yt,General:Qt.a,Grid:Xt.a,Colors:te.a,Transitions:ae.a,Text:re.a,Axios:Lt.a,render:function(t){return t(w)}}).$mount("#app")},"56e8":function(t,e,a){"use strict";var s=a("82a9"),r=a.n(s);r.a},"5fbd":function(t,e,a){},"711f":function(t,e,a){t.exports=a.p+"img/bill.9cd46dd6.svg"},"754f":function(t,e,a){},"79ea":function(t,e,a){t.exports=a.p+"img/logo-meufinanceiro.638e59cf.svg"},"7b20":function(t,e,a){"use strict";var s=a("754f"),r=a.n(s);r.a},"7fa7":function(t,e,a){},"82a9":function(t,e,a){},"896a":function(t,e,a){t.exports=a.p+"img/arrow-down.4b6cec27.svg"},"91c8":function(t,e,a){"use strict";var s=a("06d5"),r=a.n(s);r.a},"948f":function(t,e,a){"use strict";var s=a("c38c"),r=a.n(s);r.a},ac6e:function(t,e,a){"use strict";var s=a("0d86"),r=a.n(s);r.a},c38c:function(t,e,a){},d720:function(t,e,a){"use strict";var s=a("5fbd"),r=a.n(s);r.a},da87:function(t,e,a){},db2f:function(t,e,a){"use strict";var s=a("f995"),r=a.n(s);r.a},e29a:function(t,e,a){"use strict";var s=a("da87"),r=a.n(s);r.a},eb8b:function(t,e,a){},f498:function(t,e,a){t.exports=a.p+"img/attention-icon.d51bbf36.svg"},f995:function(t,e,a){},fc02:function(t,e,a){"use strict";var s=a("1969"),r=a.n(s);r.a},ffc0:function(t,e,a){t.exports=a.p+"img/success-ilustra.8d82471d.svg"}});
//# sourceMappingURL=app.c0a9150e.js.map