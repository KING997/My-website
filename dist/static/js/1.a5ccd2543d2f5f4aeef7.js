webpackJsonp([1],{"1/l6":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".app-breadcrumb.el-breadcrumb[data-v-3608d9c0]{display:inline-block;font-size:14px;line-height:50px;margin-left:8px}.app-breadcrumb.el-breadcrumb .no-redirect[data-v-3608d9c0]{color:#97a8be;cursor:text}",""])},"2QSG":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Ygqm"),r=n.n(a),i={data:function(){return{levelList:null}},watch:{$route:function(){this.getBreadcrumb()}},created:function(){this.getBreadcrumb()},methods:{getBreadcrumb:function(){var t=this.$route.matched.filter(function(t){return t.meta&&t.meta.title});t[0];this.levelList=t.filter(function(t){return t.meta&&t.meta.title&&!1!==t.meta.breadcrumb})},pathCompile:function(t){var e=this.$route.params;return r.a.compile(t)(e)},handleLink:function(t){var e=t.redirect,n=t.path;e?this.$router.push(e):this.$router.push(this.pathCompile(n))}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{separator:"/"}},[n("transition-group",{attrs:{name:"el-fade-in"}},t._l(t.levelList,function(e,a){return n("el-breadcrumb-item",{key:e.path},[a==t.levelList.length-1?n("span",{staticClass:"no-redirect"},[t._v(t._s(e.meta.title))]):n("a",{on:{click:function(n){return n.preventDefault(),t.handleLink(e)}}},[t._v(t._s(e.meta.title))])])}),1)],1)},staticRenderFns:[]};var o=n("VU/8")(i,s,!1,function(t){n("wE21")},"data-v-3608d9c0",null).exports,l={name:"scrollPane",data:function(){return{left:0}},methods:{handleScroll:function(t){var e=t.wheelDelta||3*-t.deltaY,n=this.$refs.scrollContainer.offsetWidth,a=this.$refs.scrollWrapper.offsetWidth;e>0?this.left=Math.min(0,this.left+e):n-15<a?this.left<-(a-n+15)?this.left=this.left:this.left=Math.max(this.left+e,n-a-15):this.left=0},moveToTarget:function(t){var e=this.$refs.scrollContainer.offsetWidth,n=t.offsetLeft,a=t.offsetWidth;n<-this.left?this.left=15-n:n+15>-this.left&&n+a<-this.left+e-15||(this.left=-(n-(e-a)+15))}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"scrollContainer",staticClass:"scroll-container",on:{wheel:function(e){return e.preventDefault(),t.handleScroll(e)}}},[n("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",style:{left:t.left+"px"}},[t._t("default")],2)])},staticRenderFns:[]};var u={data:function(){return{nav:[]}},components:{ScrollPane:n("VU/8")(l,c,!1,function(t){n("RJli")},"data-v-0666d0d6",null).exports},created:function(){this.$router.afterEach(this.afterEachHandler)},methods:{afterEachHandler:function(t,e){this.nav.some(function(e){return e.path===t.path})||this.nav.push({path:t.path,title:t.meta.title})},closeSelectedTag:function(t){var e=this.nav,n=e[t].path;e.splice(t,1),n==this.$route.path&&this.$router.push(e[e.length-1].path)}},mounted:function(){this.nav.push({path:this.$route.path,title:this.$route.meta.title})}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav-bar"},[n("ScrollPane",{staticClass:"nav-bar-scroll"},t._l(t.nav,function(e,a){return n("router-link",{key:a.path,staticClass:"nav-bar-tag",class:t.$route.path==e.path?" active":"",attrs:{to:e.path}},[n("i",{staticClass:"point"}),t._v("\n      "+t._s(e.title)+"\n      "),n("div",{directives:[{name:"show",rawName:"v-show",value:1!=t.nav.length,expression:"nav.length != 1"}],staticClass:"close-box"},[n("span",{staticClass:"el-icon-close",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.closeSelectedTag(a)}}})])])}),1)],1)},staticRenderFns:[]};var d={created:function(){},components:{Breadcrumb:o,TagsView:n("VU/8")(u,p,!1,function(t){n("8p8d")},"data-v-2d0bd99d",null).exports},computed:{key:function(){return this.$route.path}},data:function(){return{isCollapse:!1,menus:[{icon:"el-icon-s-home",url:"/index",name:"首页"},{icon:"el-icon-s-home",url:"2",name:"组件库",child:[{url:"/table",name:"表格组件"},{url:"/dialog",name:"弹窗组件"},{url:"/tinymce",name:"富文本编辑器"},{url:"/mixin",name:"动效合集"},{url:"/backtotop",name:"返回顶部"},{url:"/todolist",name:"To Do List"},{url:"/bmap",name:"百度地图"},{url:"/amap",name:"高德地图"}]},{icon:"el-icon-s-home",url:"3",name:"小游戏",child:[{url:"/gobang",name:"五子棋"}]},{icon:"el-icon-error",url:"/error",name:"404"}],userInfo:{name:"",orgname:""}}},methods:{click:function(){document.getElementsByTagName("body")[0].style.setProperty("--bg-color","red"),document.getElementsByTagName("body")[0].style.setProperty("--color-primary","red")},logout:function(){},sidebarToggle:function(t){t.preventDefault(),this.isCollapse?(document.body.classList.remove("sidebar-hidden"),this.isCollapse=!1):(document.body.classList.add("sidebar-hidden"),this.isCollapse=!0)},hiddenSidebar:function(t){t.preventDefault(),document.body.classList.toggle("sidebar-close")}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"header"},[t._m(0),t._v(" "),n("span",{staticClass:"header-btn",on:{click:t.hiddenSidebar}},[n("i",{staticClass:"el-icon-menu"})]),t._v(" "),n("breadcrumb",{staticClass:"breadcrumb-container"}),t._v(" "),n("div",{staticClass:"right"},[n("span",{staticClass:"header-btn"},[n("i",{staticClass:"iconyonghu_yuan_A iconfont"}),t._v("\n        "+t._s(t.userInfo.name)+"\n      ")]),t._v(" "),n("span",{staticClass:"header-btn"},[t._v(t._s(t.userInfo.orgname))]),t._v(" "),n("span",{staticClass:"header-btn close-btn",on:{click:t.logout}},[n("i",{staticClass:"iconguanbi iconfont"})]),t._v(" "),n("el-dropdown",[n("span",{staticClass:"header-btn"},[t._v("\n          "+t._s(t.userInfo.name)+"\n          "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(e){return t.$router.push({name:"personalcenter"})}}},[n("i",{staticClass:"fa fa-cog",staticStyle:{"padding-right":"8px"}}),t._v("个人中心\n          ")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(e){return t.logout(e)}}},[n("i",{staticClass:"fa fa-key",staticStyle:{"padding-right":"8px"}}),t._v("退出登录\n          ")])],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"app"},[n("div",{staticClass:"aside"},[n("div",{staticClass:"menu"},[n("el-menu",{staticClass:"menu",attrs:{router:!0,"background-color":"#222d32","text-color":"#fff","default-active":t.$route.path,"unique-opened":"",collapse:t.isCollapse}},[t._l(t.menus,function(e){return[e.child?[n("el-submenu",{key:e.name,attrs:{index:e.url}},[n("template",{slot:"title"},[n("i",{staticClass:"iconfont",class:e.icon}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])]),t._v(" "),t._l(e.child,function(e){return[e.child?n("el-submenu",{key:e.name,attrs:{index:e.url}},[n("template",{slot:"title"},[t._v(t._s(e.name))]),t._v(" "),t._l(e.child,function(e){return n("el-menu-item",{key:e.name,attrs:{index:e.url}},[t._v(t._s(e.name))])})],2):n("el-menu-item",{key:e.name,attrs:{index:e.url}},[t._v("  "+t._s(e.name))])]})],2)]:[n("el-menu-item",{key:e.name,attrs:{index:e.url}},[n("i",{staticClass:"iconfont",class:e.icon}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])])]]})],2)],1),t._v(" "),n("div",{staticClass:"sidebar-toggle",on:{click:t.sidebarToggle}},[t._m(1)])]),t._v(" "),n("div",{staticClass:"app-body"},[n("tags-view"),t._v(" "),n("div",{staticClass:"main-container",attrs:{id:"mainContainer"}},[n("transition",{attrs:{name:"el-fade-in"}},[n("router-view",{key:t.key})],1)],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("span",{staticClass:"big"},[this._v("PC端模板组件")]),this._v(" "),e("span",{staticClass:"min"},[e("img",{staticStyle:{"margin-top":"5px"},attrs:{width:"40",src:n("CgFv"),alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon-left"},[e("i",{staticClass:"el-icon-back"})])}]};var h=n("VU/8")(d,f,!1,function(t){n("zzJQ")},"data-v-0d843f6b",null);e.default=h.exports},"4c4b":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},"8p8d":function(t,e,n){var a=n("4c4b");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("f1306958",a,!0,{})},CgFv:function(t,e,n){t.exports=n.p+"static/img/404.a57b6f3.png"},"HOY/":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".scroll-container[data-v-0666d0d6]{cursor:ew-resize;white-space:nowrap;position:relative;overflow:hidden;width:100%}.scroll-container .scroll-wrapper[data-v-0666d0d6]{padding:0 4px;position:absolute;-webkit-transition:left .3s ease-in-out;transition:left .3s ease-in-out}",""])},RJli:function(t,e,n){var a=n("HOY/");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("ef7d8478",a,!0,{})},Ygqm:function(t,e){t.exports=u,t.exports.parse=r,t.exports.compile=function(t,e){return i(r(t,e))},t.exports.tokensToFunction=i,t.exports.tokensToRegExp=c;var n="/",a=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function r(t,e){for(var r,i=[],l=0,c=0,u="",p=e&&e.delimiter||n,d=e&&e.whitelist||void 0,f=!1;null!==(r=a.exec(t));){var h=r[0],m=r[1],v=r.index;if(u+=t.slice(c,v),c=v+h.length,m)u+=m[1],f=!0;else{var g="",b=r[2],_=r[3],x=r[4],y=r[5];if(!f&&u.length){var C=u.length-1,w=u[C];(!d||d.indexOf(w)>-1)&&(g=w,u=u.slice(0,C))}u&&(i.push(u),u="",f=!1);var $="+"===y||"*"===y,k="?"===y||"*"===y,E=_||x,T=g||p;i.push({name:b||l++,prefix:g,delimiter:T,optional:k,repeat:$,pattern:E?o(E):"[^"+s(T===p?T:T+p)+"]+?"})}}return(u||c<t.length)&&i.push(u+t.substr(c)),i}function i(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,a){for(var r="",i=a&&a.encode||encodeURIComponent,s=0;s<t.length;s++){var o=t[s];if("string"!=typeof o){var l,c=n?n[o.name]:void 0;if(Array.isArray(c)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but got array');if(0===c.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var u=0;u<c.length;u++){if(l=i(c[u],o),!e[s].test(l))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'"');r+=(0===u?o.prefix:o.delimiter)+l}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!o.optional)throw new TypeError('Expected "'+o.name+'" to be '+(o.repeat?"an array":"a string"))}else{if(l=i(String(c),o),!e[s].test(l))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but got "'+l+'"');r+=o.prefix+l}}else r+=o}return r}}function s(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function o(t){return t.replace(/([=!:$/()])/g,"\\$1")}function l(t){return t&&t.sensitive?"":"i"}function c(t,e,a){for(var r=(a=a||{}).strict,i=!1!==a.start,o=!1!==a.end,c=a.delimiter||n,u=[].concat(a.endsWith||[]).map(s).concat("$").join("|"),p=i?"^":"",d=0;d<t.length;d++){var f=t[d];if("string"==typeof f)p+=s(f);else{var h=f.repeat?"(?:"+f.pattern+")(?:"+s(f.delimiter)+"(?:"+f.pattern+"))*":f.pattern;e&&e.push(f),f.optional?f.prefix?p+="(?:"+s(f.prefix)+"("+h+"))?":p+="("+h+")?":p+=s(f.prefix)+"("+h+")"}}if(o)r||(p+="(?:"+s(c)+")?"),p+="$"===u?"$":"(?="+u+")";else{var m=t[t.length-1],v="string"==typeof m?m[m.length-1]===c:void 0===m;r||(p+="(?:"+s(c)+"(?="+u+"))?"),v||(p+="(?="+s(c)+"|"+u+")")}return new RegExp(p,l(a))}function u(t,e,n){return t instanceof RegExp?function(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var a=0;a<n.length;a++)e.push({name:a,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return t}(t,e):Array.isArray(t)?function(t,e,n){for(var a=[],r=0;r<t.length;r++)a.push(u(t[r],e,n).source);return new RegExp("(?:"+a.join("|")+")",l(n))}(t,e,n):function(t,e,n){return c(r(t,n),e,n)}(t,e,n)}},qvZF:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".main .header .breadcrumb-container[data-v-0d843f6b]{float:left}",""])},wE21:function(t,e,n){var a=n("1/l6");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("3c8ed2bc",a,!0,{})},zzJQ:function(t,e,n){var a=n("qvZF");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("16f3bc39",a,!0,{})}});