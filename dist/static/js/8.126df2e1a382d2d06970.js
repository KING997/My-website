webpackJsonp([8],{LjTe:function(v,i){},"NnQ+":function(v,i,_){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t={name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,interval:null,isMoving:!1}},mounted:function(){document.getElementById("mainContainer").addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){document.getElementById("mainContainer").removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){var v=document.getElementById("mainContainer");this.visible=v.scrollTop>this.visibilityHeight},backToTop:function(){var v=this,i=document.getElementById("mainContainer");if(!this.isMoving){var _=i.scrollTop,t=0;this.isMoving=!0,this.interval=setInterval(function(){var e=Math.floor(v.easeInOutQuad(10*t,_,-_,500));e<=v.backPosition?(i.scrollTo(0,v.backPosition),clearInterval(v.interval),v.isMoving=!1):i.scrollTo(0,e),t++},16.7)}},easeInOutQuad:function(v,i,_,t){return(v/=t/2)<1?_/2*v*v+i:-_/2*(--v*(v-2)-1)+i}}},e={render:function(){var v=this.$createElement,i=this._self._c||v;return i("transition",{attrs:{name:this.transitionName}},[i("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:this.customStyle,on:{click:this.backToTop}},[i("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[i("path",{attrs:{d:"M12.036 15.59a1 1 0 0 1-.997.995H5.032a.996.996 0 0 1-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z"}})])])])},staticRenderFns:[]};var d={name:"BackToTopDemo",components:{BackToTop:_("VU/8")(t,e,!1,function(v){_("wQ1T")},"data-v-0d396820",null).exports},data:function(){return{myBackToTopStyle:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}}},n={render:function(){var v=this.$createElement,i=this._self._c||v;return i("div",{staticClass:"components-container"},[i("aside",[this._v("页面滚动到指定位置会在右下角出现返回顶部按钮")]),this._v(" "),i("aside",[this._v("可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素")]),this._v(" "),this._m(0),this._v(" "),i("el-tooltip",{attrs:{placement:"top",content:"tooltip"}},[i("back-to-top",{attrs:{"custom-style":this.myBackToTopStyle,"visibility-height":300,"back-position":50,"transition-name":"fade"}})],1)],1)},staticRenderFns:[function(){var v=this,i=v.$createElement,_=v._self._c||i;return _("div",{staticClass:"placeholder-container"},[_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")]),v._v(" "),_("div",[v._v("无敌螺旋可爱美少女")])])}]};var o=_("VU/8")(d,n,!1,function(v){_("LjTe")},"data-v-3a5f6f00",null);i.default=o.exports},wQ1T:function(v,i){}});