webpackJsonp([2],{0:function(t,e,n){t.exports=n("msSN")},"3JWO":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_PAGE_SWITCHING",function(){return c}),n.d(e,"SET_PAGE_SCROLL_POSITION",function(){return l}),n.d(e,"state",function(){return u}),n.d(e,"mutations",function(){return h}),n.d(e,"actions",function(){return d});var i,a=n("bOdI"),r=n.n(a),s=n("Dd8w"),o=n.n(s),c="SET_PAGE_SWITCHING",l="SET_PAGE_SCROLL_POSITION",u=function(){return{isPageSwitching:!1,scrollPostionMap:{}}},h=(i={},r()(i,c,function(t,e){t.isPageSwitching=e}),r()(i,l,function(t,e){var n=e.pageId,i=e.scrollPosition;t.scrollPostionMap=o()({},t.scrollPostionMap,r()({},n,i))}),i),d={setPageSwitching:function(t,e){(0,t.commit)(c,e)},savePageScrollPosition:function(t,e){var n=t.commit,i=e.pageId,a=e.scrollPosition;n(l,{pageId:i,scrollPosition:a})}}},"5e9e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return i}),n.d(e,"mutations",function(){return a});var i=function(){return{enable:!0,type:"none",effect:"none"}},a={setType:function(t,e){t.type=e},setEffect:function(t,e){t.effect=e}}},"7GCc":function(t,e){},"9MRZ":function(t,e){},AGOZ:function(t,e){},CJsk:function(t,e){},IaLg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_SIDEBAR_VISIBILITY",function(){return a}),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return s}),n.d(e,"actions",function(){return o});var i=n("bOdI"),a="SET_SIDEBAR_VISIBILITY",r=function(){return{show:!1,title:{imageLeft:"",altLeft:"",iconLeft:"home",text:"看风景",imageRight:"",altRight:"",iconRight:""},blocks:[{sublistTitle:"值得买",list:[{text:"保险产品超市",icon:"security",url:"https://cps.qixin18.com/m/zt1029065/media-10453.html"},{text:"前端技术咨询",icon:"monetization_on",url:"https://wx.zsxq.com/mweb/views/joingroup/join_group.html?group_id=8452545882"},{text:"科学上网必备",icon:"network_check",url:"https://portal.shadowsocks.nu/aff.php?aff=19825"}]},{sublistTitle:"福利",list:[{text:"妹子十二",icon:"volume_off",route:"/fuli"}]},{sublistTitle:"链接",list:[{text:"前端博客",icon:"create",url:"https://refined-x.com/"},{text:"前端周刊",icon:"book",url:"https://frontend-weekly.com/"}]},{sublistTitle:"关于",list:[{text:"公众号",icon:"camera",route:"/intro"}]}]}},s=n.n(i)()({},a,function(t,e){t.show=e}),o={showSidebar:function(t){(0,t.commit)(a,!0)},hideSidebar:function(t){(0,t.commit)(a,!1)}}},J8lc:function(t,e){},Jfi4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_APP_HEADER",function(){return o}),n.d(e,"state",function(){return c}),n.d(e,"mutations",function(){return l}),n.d(e,"actions",function(){return u});var i=n("bOdI"),a=n.n(i),r=n("woOf"),s=n.n(r),o="SET_APP_HEADER",c=function(){return{show:!0,title:"看风景",logoIcon:{src:"",alt:""},showMenu:!0,showBack:!1,showLogo:!1,actions:[]}},l=a()({},o,function(t,e){t=s()(t,e)}),u={setAppHeader:function(t,e){(0,t.commit)(o,e)}}},NKtq:function(t,e){},Uz7q:function(t,e){t.exports={buildVersion:1549011178306,build:{ssr:!1,publicPath:"/",compress:!0,cssExtract:!0},middleware:{all:[],server:[],client:[]},router:{mode:"hash",base:"/",pageTransition:{type:"slide",transitionClass:"slide"}},errorHandler:{defaultErrorMessage:"Internal Server Error",showRealErrorMessage:!1,errorPath:"/error"},serviceWorker:{enable:!0,swDest:"E:\\workspace\\Github\\programmerslife\\site\\docs\\service-worker.js"},skeleton:{enable:!0,asyncCSS:!0}}},VfP6:function(t,e,n){var i={"./appShell/appHeader.js":"Jfi4","./appShell/appSidebar.js":"IaLg","./appShell/common.js":"3JWO","./common.js":"yxr4","./globToast.js":"Y+RP","./pageTransition.js":"5e9e"};function a(t){return n(r(t))}function r(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id="VfP6"},W3MB:function(t,e,n){var i={"./login-client.js":["knvf",0]};function a(t){var e=i[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}a.keys=function(){return Object.keys(i)},a.id="W3MB",t.exports=a},"Y+RP":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return i}),n.d(e,"mutations",function(){return a});var i=function(){return{show:!1,color:"info",text:"提示"}},a={setToast:function(t,e,n){t.show=!0,t.text=e,t.color=n}}},YWX6:function(t,e){},c7ca:function(t,e){},maet:function(t,e){},msSN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("//Fk"),a=n.n(i),r=n("Gu7T"),s=n.n(r),o=n("Xxa5"),c=n.n(o),l=n("exGp"),u=n.n(l),h=n("/5sW"),d=n("1nuA"),p=function(){var t=u()(c.a.mark(function t(e){var i,r=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i={},t.prev=1,t.next=4,a.a.all(e.map(function(){var t=u()(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("W3MB")("./"+e+".js");case 2:i[e]=t.sent.default;case 3:case"end":return t.stop()}},t,r)}));return function(e){return t.apply(this,arguments)}}()));case 4:return t.abrupt("return",i);case 7:t.prev=7,t.t0=t.catch(1),console.log("[Lavas] fail to import middleware: ",t.t0);case 10:case"end":return t.stop()}},t,this,[[1,7]])}));return function(e){return t.apply(this,arguments)}}();function f(t,e){var n={isClient:!0,app:e,store:t.store,route:t.to,from:t.from},i=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t){var e=t.status,a=void 0===e?302:e,r=t.path,s=void 0===r?"":r,o=t.query,c=void 0===o?{}:o,l=t.external,u=void 0!==l&&l;n._redirected=!0,i({path:s,query:c,status:a,external:u})},n}var v=function(){var t=u()(c.a.mark(function t(e,n){var i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:if(!(i<e.length)){t.next=9;break}if(!n._redirected){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,m(e[i],n);case 6:i++,t.next=1;break;case 9:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}();function m(t,e){var n=void 0;return 2===t.length?n=new a.a(function(n,i){t(e,function(t,a){t?(e.error(t),i(t)):n(a)})}):(n=t(e))&&(n instanceof a.a||"function"==typeof n.then)||(n=a.a.resolve(n)),n}var w=n("Uz7q"),g=n.n(w),b=n("Dd8w"),_=n.n(b),y=n("p3jY"),x=n.n(y),S=n("mvHQ"),k=n.n(S),C=n("pFYg"),T=n.n(C),E=n("/ocq"),P={name:"appshell",metaInfo:{title:"看风景",meta:[{name:"keywords",content:"看风景"},{name:"description",content:"探寻程序员的生活琐事"}],bodyAttrs:{"empty-appshell":void 0}}},O=n("XyMi"),I=Object(O.a)(P,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null).exports,A=n("fZjL"),j=n.n(A),$={name:"error",computed:{message:function(){return this.$route.params.error||"您访问的路径不存在"}},created:function(){var t=this.$route.query;0!==j()(t).length&&this.$router.replace({name:"error",params:t})}},M=Object(O.a)($,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-error"},[e("p",[this._v(this._s(this.message))])])},[],!1,null,null,null).exports,L=n("NYxO"),H={name:"meizi",metaInfo:{title:"“福利”",titleTemplate:"%s - 看风景",meta:[{name:"keywords",content:"福利"},{name:"description",content:"福利-看风景"}]},data:function(){return{classIndex:1}},computed:_()({},Object(L.c)("common",["gank"])),asyncData:function(){var t=u()(c.a.mark(function t(e){var n=e.store;e.route;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.dispatch("common/getGank");case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),methods:{changeClass:function(){this.classIndex<3?this.classIndex++:this.classIndex=1}},created:function(){this.$store.dispatch("appShell/appHeader/setAppHeader",{show:!0})}};var R=function(t){n("J8lc")},W=Object(O.a)(H,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"white_wrap"},[t.gank.length?[n("div",{staticClass:"toggle",on:{click:t.changeClass}},[t._v("切")]),t._v(" "),n("div",{staticClass:"content",class:{size1:1==t.classIndex,size2:2==t.classIndex,size3:3==t.classIndex}},[t._l(t.gank,function(e,i){return n("div",{key:i,staticClass:"items",on:{click:function(n){t.$router.push({name:"fuliDetail",query:{url:e}})}}},[n("div",{staticClass:"rect-100"},[n("div",{staticClass:"_full"},[n("img",{attrs:{src:e}})])])])}),t._v(" "),n("div",{staticClass:"tips"},[t._v("\r\n                内容抓取自“干货集中营”，妹子虽好，不要贪杯哦\r\n            ")])],2)]:[n("v-progress-circular",{staticStyle:{"margin-top":"10rem"},attrs:{size:70,indeterminate:""}})]],2)])},[],!1,R,"data-v-6820692c",null).exports;var B=function(t){n("9MRZ")},q=Object(O.a)({name:"fuliDetail",metaInfo:function(){return{title:"Detail",titleTemplate:"%s - 看风景"}},data:function(){return{url:null}},created:function(){this.url=this.$route.query.url,this.$store.dispatch("appShell/appHeader/setAppHeader",{show:!1})}},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.url?e("div",{staticClass:"detail-wrapper"},[e("img",{attrs:{src:this.url}})]):this._e()])},[],!1,B,"data-v-dc134508",null).exports,D={name:"index",metaInfo:{title:"看风景"},middleware:["login-client"],asyncData:function(){var t=u()(c.a.mark(function t(e){var n=e.store;e.route;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.dispatch("appShell/appHeader/setAppHeader",{show:!0,showMenu:!0,showBack:!1,showLogo:!1,actions:[]});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()};var G=function(t){n("AGOZ")},Y=Object(O.a)(D,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"content"},[e("div",{staticClass:"tags"},[e("a",{attrs:{href:"http://host.refined-x.com/bing.php",download:"bing-wallpaper.jpg",target:"_blank"}},[this._v("\n                下载Bing壁纸\n            ")])])])])}],!1,G,"data-v-906521c8",null).exports;n("mtWM");var X=function(t){n("qXVo")},N=[{path:"/appshell",component:I,meta:{},name:"appshell"},{path:"/fuli",component:W,meta:{},name:"fuli"},{path:"/fuli-detail",component:q,meta:{},name:"fuliDetail"},{path:"/",component:Y,meta:{},name:"index"},{path:"/intro",component:Object(O.a)({name:"meizi",metaInfo:{title:"“福利”",titleTemplate:"%s - 看风景",meta:[{name:"keywords",content:"福利"},{name:"description",content:"福利-看风景"}]},data:function(){return{list:[]}},methods:{fetchData:function(){}},created:function(){this.fetchData()}},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"content"},[e("v-card",[e("v-img",{attrs:{src:"https://refined-x.com/asset/wechat.jpg","aspect-ratio":"1"}}),this._v(" "),e("v-card-title",{attrs:{"primary-title":""}},[e("div",[e("div",[this._v("一个码农的技术、认知、生活、购物、理财相关集散地。")])])])],1)],1)])},[],!1,X,"data-v-ae2d8754",null).exports,meta:{},name:"intro"},{path:"/error",component:M,meta:{},name:"error",alias:"*"}];h.default.use(E.a);var V=["index"],z=[],J=[],U="LAVAS_HISTORY_ARRAY_STACK_LOCAL_KEY",F="LAVAS_HISTORY_STATE_STACK_LOCAL_KEY",K=[],Z=!1;function Q(){return history.state?history.state.key:""}function tt(t,e){try{localStorage.setItem(t,"object"===(void 0===e?"undefined":T()(e))?k()(e):e)}catch(t){}}function et(t,e){var n=!0;return Z?(n=function(){var t=K.indexOf(Q());return t===K.length-1||-1===t||(K.length=t+1,!1)}(),setTimeout(function(){var t=Q(),e=K.indexOf(t);n&&-1===e&&K.push(t),tt(F,K)},300)):((n=function(t,e){var n=J.indexOf(t.fullPath);return-1===n||(J.length=n+1,!1)}(t))&&J.push(t.fullPath),tt(U,J)),t.name&&-1!==V.indexOf(t.name)?n=!1:t.name&&-1!==z.indexOf(t.name)&&(n=!0),n}Z=window.history&&"state"in history;var nt=function(t,e,n){if(n)return n;var i={};return t.hash&&(i.selector=t.hash),t.matched.some(function(t){return t.meta.scrollToTop})&&(i.x=0,i.y=0),i},it=N.filter(function(t){return t.keepAlive||t.meta.keepAlive}).map(function(t){return t.name});function at(){var t=new E.a({mode:"hash",base:"/",scrollBehavior:nt,routes:N});return Z?function(){if(history.length>1)try{var t=JSON.parse(localStorage.getItem(F));t&&t.length&&(K=t.slice(-history.length))}catch(t){}setTimeout(function(){K.length?K[K.length-1]=Q():K.push(Q())},300)}():function(t){var e=location.href.replace(location.origin+t,"/");try{var n=JSON.parse(localStorage.getItem(U));n&&n.length&&n[n.length-1]===e&&(J=n)}catch(t){}-1===J.indexOf(e)&&J.push(e)}(t.options.base),t.beforeEach(function(e,n,i){if(t.app.$store&&t.app.$store.state.pageTransition.enable){var a=et(e)?"slide-left":"slide-right";t.app.$store.commit("pageTransition/setType","slide"),t.app.$store.commit("pageTransition/setEffect",a)}i()}),t}var rt=n("woOf"),st=n.n(rt),ot=n("BO1k"),ct=n.n(ot);h.default.use(L.a);var lt=n("VfP6"),ut=lt.keys(),ht={},dt=!0,pt=!1,ft=void 0;try{for(var vt,mt=ct()(ut);!(dt=(vt=mt.next()).done);dt=!0){var wt=vt.value;if("./index.js"===wt){ht=Pt(wt);break}}}catch(t){pt=!0,ft=t}finally{try{!dt&&mt.return&&mt.return()}finally{if(pt)throw ft}}if("function"!=typeof ht){ht.modules=ht.modules||{};var gt=!0,bt=!1,_t=void 0;try{for(var yt,xt=ct()(ut);!(gt=(yt=xt.next()).done);gt=!0){var St=yt.value;if("./index.js"!==St){var kt=St.replace(/^\.\//,"").replace(/\.js$/,""),Ct=kt.split("/"),Tt=Ot(ht,Ct);Tt[kt=Ct.pop()]=Pt(St),Tt[kt].namespaced=!0}}}catch(t){bt=!0,_t=t}finally{try{!gt&&xt.return&&xt.return()}finally{if(bt)throw _t}}}var Et=ht instanceof Function?ht:function(){return new L.a.Store(st()({},ht,{state:ht.state instanceof Function?ht.state():{}}))};function Pt(t){var e=lt(t),n=e.default||e;if(n.commit)throw new Error("[lavas] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[lavas] state should be a function in store/"+t.replace("./",""));return n}function Ot(t,e){if(1===e.length)return t.modules;var n=e.shift(),i=t.modules[n]=t.modules[n]||{};return i.namespaced=!0,i.modules=i.modules||{},Ot(i,e)}var It=new h.default,At={name:"appHeader",computed:_()({},Object(L.c)("appShell/appHeader",["show","showMenu","showBack","showLogo","logoIcon","title","actions"]),Object(L.c)("appShell/common",["isPageSwitching"])),methods:{handleClick:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actionIdx,i=e.route;if(!this.isPageSwitching){var a={};"action"===t&&(a.actionIdx=n),this.$emit("click-"+t,a),It.$emit("app-header:click-"+t,a),i&&this.$router.push(i)}}}};var jt=function(t){n("NKtq")},$t=Object(O.a)(At,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-down"}},[n("header",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"app-header-wrapper"},[n("div",{staticClass:"app-header-left"},[t.showMenu?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("menu")}}},[n("v-icon",{staticClass:"app-header-icon",attrs:{color:"white"}},[t._v("menu")])],1):t._e(),t._v(" "),t.showBack?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("back")}}},[n("v-icon",{staticClass:"app-header-icon",attrs:{color:"white"}},[t._v("arrow_back")])],1):t._e(),t._v(" "),t.showLogo?n("div",{on:{click:function(e){t.handleClick("logo")}}},[t._t("logo",[t.logoIcon.src?n("img",{staticClass:"app-header-icon",attrs:{src:t.logoIcon.src,alt:t.logoIcon.alt}}):t._e()])],2):t._e()],1),t._v(" "),n("div",{staticClass:"app-header-middle"},[t._t("title",[t._v("\n                程序员的生活琐事\n            ")])],2),t._v(" "),n("div",{staticClass:"app-header-right"},[t._l(t.actions,function(e,i){return t._t("actions",[n("v-btn",{attrs:{icon:"icon"},nativeOn:{click:function(n){t.handleClick("action",{actionIdx:i,route:e.route})}}},[e.icon?n("v-icon",{staticClass:"app-header-icon",attrs:{color:"white"}},[t._v(t._s(e.icon))]):t._e()],1)],{icon:e.icon,route:e.route})})],2)])])},[],!1,jt,"data-v-9bcf15c0",null).exports,Mt=n("bOdI"),Lt=n.n(Mt),Ht=n("XPnZ"),Rt=n.n(Ht),Wt=function(t){setTimeout(t,1e3/60)};Wt=window.requestAnimationFrame||window.webkitRequestAnimationFrame||Wt;var Bt={props:{value:{type:Boolean,default:!1},enable:{type:Boolean,default:!0},width:{type:Number,default:.75},duration:{type:Number,default:200},region:Lt()({type:Object},"default",function(){return{top:0,bottom:0,left:0,width:40}})},data:function(){return{clientWidth:320,clientHeight:568,startX:0,startY:0,scrollEnable:!1,wrapperClass:{expand:!1,collapse:!0,"w-left":!0},opacity:0,iscroll:null}},computed:{itsWidth:function(){return this.width<1?Math.round(this.width*this.clientWidth):this.width},widthProp:function(){return this.itsWidth+"px"},status:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},zone:function(){var t=this.region,e=t.top,n=t.right,i=t.bottom,a=t.left,r=t.width,s=t.height,o=this.clientWidth,c=this.clientHeight;return{top:void 0===e?c-i-s:e,left:void 0===a?o-n-r:a,width:void 0===r?o-a-n:r,height:void 0===s?c-e-a:s}}},watch:{status:function(t){t?this.expand():this.collapse()}},mounted:function(){this.clientWidth=document.documentElement.clientWidth,this.clientHeight=document.documentElement.clientHeight,document.body.addEventListener("touchstart",this.touchStart.bind(this)),document.body.addEventListener("touchmove",this.touchMove.bind(this))},methods:{touchStart:function(t){if(!this.wrapperClass.expand&&this.enable){var e=t.touches[0],n=e.clientX,i=e.clientY,a=this.zone,r=a.left,s=a.top,o=a.width,c=a.height;n<r||n>r+o||i<s||i>s+c||(this.scrollEnable=!0,this.startX=n,this.startY=i)}},touchMove:function(t){var e=this;if(this.scrollEnable){var n=t.touches[0],i=n.clientX,a=n.clientY,r=i-this.startX;r>5&&Math.abs(a-this.startY)/r<.577&&(this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){e.bindScroll(t)}))}},toggleClick:function(t){this.status=!1},bindScroll:function(t){var e=this;this.iscroll||(this.iscroll=new Rt.a(this.$refs.sidebarWrapper,{eventPassthrough:!0,scrollY:!1,scrollX:!0,bounce:!1,startX:-this.itsWidth}),this.iscroll.on("scrollEnd",function(){var t=e.iscroll,n=t.directionX,i=t.x;0===i?e.status=!0:i===-e.itsWidth?e.status=!1:e.status=!(n>0)&&(n<0||!e.status)}),this.changeOpacity(),t&&this.iscroll._start(t))},expand:function(){var t=this;this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){t.iscroll||t.bindScroll(),t.iscroll.x<0&&setTimeout(function(){t.iscroll&&t.iscroll.scrollTo(0,0,t.duration)},10)})},collapse:function(){var t=this;this.iscroll&&(this.iscroll.x===-this.itsWidth?this.unbindScroll():(setTimeout(function(){t.iscroll.scrollTo(-t.itsWidth,0,t.duration)}),setTimeout(function(){t.unbindScroll()},this.duration+10)))},unbindScroll:function(){this.iscroll&&(this.iscroll.destroy(),this.iscroll=null,this.wrapperClass.expand=!1,this.wrapperClass.collapse=!0,this.scrollEnable=!1,this.opacity=0,this.$refs.sidebarScroller.setAttribute("style","padding-left:"+this.widthProp))},changeOpacity:function(){this.wrapperClass.expand&&this.iscroll&&(this.opacity=(this.iscroll.x+this.itsWidth)/this.itsWidth*.5,Wt(this.changeOpacity.bind(this)))}}};var qt=function(t){n("YWX6")},Dt={components:{Sidebar:Object(O.a)(Bt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"sidebarWrapper",staticClass:"sidebar-wrapper",class:t.wrapperClass},[n("div",{ref:"sidebarScroller",staticClass:"sidebar-scroller",style:{"padding-left":t.widthProp}},[n("div",{staticClass:"sidebar-main",style:{width:t.widthProp},on:{scroll:function(t){t.stopPropagation()}}},[t._t("default")],2),t._v(" "),n("div",{ref:"sidebarToggle",staticClass:"touch-toggle",style:{opacity:t.opacity,"padding-left":t.widthProp},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleClick(e)}}})])])},[],!1,qt,"data-v-359957cd",null).exports},computed:_()({},Object(L.c)("appShell/appSidebar",["show","title","user","blocks"]),{sidebarStatus:{get:function(){return this.show},set:function(t){t?this.$emit("show-sidebar"):this.$emit("hide-sidebar")}},enableSidebar:function(){return this.$store.state.appShell.appHeader.show&&this.$store.state.appShell.appHeader.showMenu}}),methods:{close:function(){this.sidebarStatus=!1},closeAndGo:function(t){t.route?(this.$router.push(t.route),this.close()):t.url&&window.open(t.url)}}};var Gt=function(t){n("7GCc")},Yt=Object(O.a)(Dt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("sidebar",{attrs:{enable:t.enableSidebar},model:{value:t.sidebarStatus,callback:function(e){t.sidebarStatus=e},expression:"sidebarStatus"}},[n("div",{staticClass:"app-sidebar-content"},[t.title?n("div",{staticClass:"app-sidebar-title",on:{click:function(e){e.stopPropagation(),t.closeAndGo({route:"/"})}}},[n("span",{staticClass:"app-sidebar-title-left-icon"},[t.title.imageLeft?n("img",{attrs:{src:t.title.imageLeft,alt:t.title.altLeft}}):t.title.iconLeft?n("v-icon",{attrs:{color:"white"}},[t._v(t._s(t.title.iconLeft))]):t._e()],1),t._v(" "),n("span",[t._v(t._s(t.title.text))]),t._v(" "),t._t("logo",[n("span",{staticClass:"app-sidebar-title-right-logo"},[t.title.imageRight?n("img",{attrs:{src:t.title.imageRight,alt:t.title.altRight}}):t.title.iconRight?n("v-icon",[t._v(t._s(t.title.iconRight))]):t._e()],1)])],2):t._e(),t._v(" "),t.user?n("div",{staticClass:"app-sidebar-user"},[n("div",{staticClass:"user-avatar"},[n("v-icon",{staticClass:"user-avatar-icon"},[t._v("face")])],1),t._v(" "),n("div",{staticClass:"user-info"},[n("div",{staticClass:"user-name"},[n("v-icon",[t._v("person")]),t._v(t._s(t.user.name))],1),t._v(" "),n("div",{staticClass:"user-location"},[n("v-icon",[t._v("room")]),t._v(t._s(t.user.location))],1),t._v(" "),n("div",{staticClass:"user-email"},[n("v-icon",[t._v("email")]),t._v(t._s(t.user.email))],1)])]):t._e(),t._v(" "),t.blocks?n("div",{staticClass:"app-sidebar-blocks"},[n("ul",t._l(t.blocks,function(e,i){return n("li",{key:i,staticClass:"app-sidebar-block"},[e.sublistTitle?n("div",{staticClass:"sub-list-title"},[t._v(t._s(e.sublistTitle))]):t._e(),t._v(" "),e.list?n("ul",t._l(e.list,function(e){return n("li",{key:e.text,on:{click:function(n){n.stopPropagation(),t.closeAndGo(e)}}},[e.icon||e.image?n("span",{staticClass:"app-sidebar-block-left-icon"},[e.image?n("img",{attrs:{src:e.image,alt:e.alt}}):e.icon?n("v-icon",[t._v(t._s(e.icon))]):t._e()],1):t._e(),t._v(" "),e.text?n("span",{staticClass:"app-sidebar-block-text"},[t._v(t._s(e.text))]):t._e()])}),0):t._e()])}),0)]):t._e()])])},[],!1,Gt,"data-v-14fe9004",null).exports,Xt={name:"updateToast",props:{text:{type:String,default:"站点发生更新，请手动刷新"}},data:function(){return{show:!1}},mounted:function(){window.addEventListener("sw.update",this.handleUpdate)},beforeDestroy:function(){window.removeEventListener("sw.update",this.handleUpdate)},methods:{handleUpdate:function(t){this.show=!0},handleRefresh:function(){window.location.reload()}}};var Nt=function(t){n("c7ca")},Vt={name:"app",components:{UpdateToast:Object(O.a)(Xt,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"popup"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"update-toast"},[e("span",[this._v(this._s(this.text))]),this._v(" "),e("span",{staticClass:"update-toast-close-btn",on:{click:this.handleRefresh}},[e("i",{staticClass:"iconfont icon-refresh"})])])])},[],!1,Nt,"data-v-fc732238",null).exports,AppHeader:$t,AppSidebar:Yt},computed:_()({},Object(L.c)("pageTransition",{pageTransitionType:function(t){return t.type},pageTransitionEffect:function(t){return t.effect}}),Object(L.c)("appShell/appHeader",{appHeaderShow:function(t){return t.show}}),Object(L.c)("appShell/common",{scrollPostionMap:function(t){return t.scrollPostionMap}}),{pageTransitionClass:function(){return"transition-"+this.pageTransitionType},routerViewKey:function(){var t=this.$route,e=t.name,n=t.params,i=j()(n);return i.length?e+i.reduce(function(t,e){return t+n[e]},""):null}}),data:function(){return{keepAlivePages:it}},methods:_()({},Object(L.b)("appShell/appSidebar",["showSidebar","hideSidebar"]),Object(L.b)("appShell/common",["setPageSwitching","savePageScrollPosition"]),{restoreContainerScrollPosition:function(t,e){t.classList.add("app-view-scroll-enabled"),t.scrollTop=e},restoreBodyScrollPosition:function(t,e){t.classList.remove("app-view-scroll-enabled"),document.body.scrollTop=document.documentElement.scrollTop=e},handleBeforeEnter:function(t){var e=this,n=t.dataset.pageId,i=(this.scrollPostionMap[n]||{}).y,a=void 0===i?0:i;this.setPageSwitching(!0),h.default.nextTick(function(){e.restoreContainerScrollPosition(t,a)})},handleAfterEnter:function(t){var e=t.dataset.pageId,n=(this.scrollPostionMap[e]||{}).y,i=void 0===n?0:n;this.setPageSwitching(!1),this.restoreBodyScrollPosition(t,i)},handleBeforeLeave:function(t){var e=t.dataset.pageId,n=document.body.scrollTop||document.documentElement.scrollTop;this.restoreContainerScrollPosition(t,n),this.savePageScrollPosition({pageId:e,scrollPosition:{y:n}})},handleClickHeaderBack:function(){this.$router.go(-1)},handleClickHeaderMenu:function(){this.showSidebar()},handleHideSidebar:function(){this.hideSidebar()},handleShowSidebar:function(){this.showSidebar()}})};var zt=function(t){n("maet")},Jt=Object(O.a)(Vt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("app-header",{staticClass:"app-shell-header",on:{"click-menu":t.handleClickHeaderMenu,"click-back":t.handleClickHeaderBack}}),t._v(" "),n("app-sidebar",{on:{"hide-sidebar":t.handleHideSidebar,"show-sidebar":t.handleShowSidebar}}),t._v(" "),n("transition",{attrs:{name:t.pageTransitionEffect},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter,"before-leave":t.handleBeforeLeave}},[n("keep-alive",{attrs:{include:[].concat(t.keepAlivePages)}},[n("router-view",{key:t.routerViewKey,staticClass:"app-view",class:[{"app-view-with-header":t.appHeaderShow},t.pageTransitionClass],attrs:{"data-page-id":t.$route.fullPath}})],1)],1),t._v(" "),n("update-toast")],1)],1)},[],!1,zt,null,null).exports,Ut=n("3EgV"),Ft=n.n(Ut);h.default.use(x.a),h.default.use(Ft.a),h.default.config.productionTip=!1;var Kt={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}};var Zt=function(t){n("w5hw")},Qt=Object(O.a)(Kt,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,Zt,"data-v-e0e1a4fc",null).exports,te=n("p5k0"),ee=n.n(te),ne=n("XGXE"),ie=n.n(ne);n("MU8w"),n("CJsk");ee.a.shim(),ie.a.shim();var ae=h.default.prototype.$loading=new h.default(Qt).$mount(),re=function(){var t=at(),e=Et();return{App:h.default.extend(_()({router:t,store:e},Jt)),router:t,store:e}}(),se=re.App,oe=re.router,ce=re.store,le=g.a.build,ue=le.ssr,he=le.cssExtract,de=g.a.middleware,pe=void 0===de?{}:de,fe=g.a.skeleton,ve=fe.enable,me=fe.asyncCSS,we=void 0;window.__INITIAL_STATE__&&ce.replaceState(window.__INITIAL_STATE__),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),document.body.appendChild(ae.$el),h.default.mixin({beforeRouteUpdate:function(){var t=u()(c.a.mark(function t(e,n,i){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(a=this.$options.asyncData)?(ae.start(),a.call(this,{store:this.$store,route:e}).then(function(){ae.finish(),i()}).catch(i)):i();case 2:case"end":return t.stop()}},t,this)}));return function(e,n,i){return t.apply(this,arguments)}}()});var ge=!0;if(function(){var t=this;oe.beforeEach(function(){var e=u()(c.a.mark(function e(n,i,a){var r,o,l,u,h,m,w;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(ge||n.path!==i.path){t.next=2;break}return t.abrupt("return",a());case 2:return ge=!1,r=oe.getMatchedComponents(n),o=[].concat(s()(pe.all||[]),s()(pe.client||[]),s()(r.filter(function(t){var e=t.middleware;return!!e}).reduce(function(t,e){var n=e.middleware;return t.concat(n)},[]))),t.next=7,p(o);case 7:if(l=t.sent,!(u=o.find(function(t){return"function"!=typeof l[t]}))){t.next=11;break}throw new Error("Unknown middleware "+u);case 11:return h=!1,m=f({to:n,from:i,store:ce,next:function(t){if(ae.finish&&ae.finish(),!h){if(h=!0,t.external)return t.query=Object(d.stringify)(t.query),t.path=t.path+(t.query?"?"+t.query:""),window.location.replace(t.path),a();a(t)}}},we),w=o.map(function(t){return l[t]}),t.next=17,v(w,m);case 17:h||a();case 18:case"end":return t.stop()}},e,t)}));return function(t,n,i){return e.apply(this,arguments)}}())}(),!document.body.hasAttribute("empty-appshell")&&ue)we=new se,oe.onReady(function(){_e(),we.$mount("#app")});else{var be=ve&&me&&he;window.mountLavas=function(){setTimeout(function(){var t=document.querySelector("#app");t&&(t.innerHTML=""),we.$mount("#app")},0)},_e(),we=new se,(ue||!be||be&&window.STYLE_READY)&&window.mountLavas()}function _e(){var t=this;oe.beforeResolve(function(e,n,i){var r=oe.getMatchedComponents(e),s=oe.getMatchedComponents(n),o=!1,l=r.filter(function(t,e){return o||(o=s[e]!==t)});if(!l.length)return i();ae.start(),a.a.all(l.filter(function(t){return t.asyncData&&(!t.asyncDataFetched||!e.meta.keepAlive)}).map(function(){var n=u()(c.a.mark(function n(i){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.asyncData({store:ce,route:e});case 2:i.asyncDataFetched=!0;case 3:case"end":return t.stop()}},n,t)}));return function(t){return n.apply(this,arguments)}}())).then(function(){ae.finish(),i()}).catch(i)})}},qXVo:function(t,e){},w5hw:function(t,e){},yxr4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return l}),n.d(e,"mutations",function(){return u}),n.d(e,"actions",function(){return h});var i=n("Xxa5"),a=n.n(i),r=n("exGp"),s=n.n(r),o=n("mtWM"),c=n.n(o),l=function(){return{gank:[]}},u={setGank:function(t,e){t.gank=e}},h={getGank:function(){var t=s()(a.a.mark(function t(e){var n=e.commit,i=e.state;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log(i.gank.length),i.gank.length||c.a.get("https://gank.io/api/history/content/12/1").then(function(t){var e=t.data.results;if(Array.isArray(e)){var i=[];e.forEach(function(t){var e=t.content.match(/src="([^"]+)"/);e&&i.push(e[1])}),n("setGank",i)}});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}}},[0]);
//# sourceMappingURL=index.caededde.js.map