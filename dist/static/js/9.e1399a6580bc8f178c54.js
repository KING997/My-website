webpackJsonp([9],{"4HJ4":function(e,a,d){(e.exports=d("FZ+f")(!1)).push([e.i,"#AMap[data-v-6af06616]{width:100%;height:100%}#AMap #container[data-v-6af06616]{width:100%;height:100%;overflow:hidden;margin:0;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1}#AMap .input-card[data-v-6af06616]{position:absolute;bottom:20px;right:20px;background-color:#fff}",""])},I06m:function(e,a,d){var o=d("4HJ4");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);d("rjj0")("6f5fe602",o,!0,{})},Wz2z:function(e,a,d){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=d("+aT9"),n=d.n(o),c=[{adcode:-1,name:"选择省份"},{adcode:1e5,name:"全国"},{adcode:11e4,name:"北京市"},{adcode:12e4,name:"天津市"},{adcode:13e4,name:"河北省"},{adcode:14e4,name:"山西省"},{adcode:15e4,name:"内蒙古自治区"},{adcode:21e4,name:"辽宁省"},{adcode:22e4,name:"吉林省"},{adcode:23e4,name:"黑龙江省"},{adcode:31e4,name:"上海市"},{adcode:32e4,name:"江苏省"},{adcode:33e4,name:"浙江省"},{adcode:34e4,name:"安徽省"},{adcode:35e4,name:"福建省"},{adcode:36e4,name:"江西省"},{adcode:37e4,name:"山东省"},{adcode:41e4,name:"河南省"},{adcode:42e4,name:"湖北省"},{adcode:43e4,name:"湖南省"},{adcode:44e4,name:"广东省"},{adcode:45e4,name:"广西壮族自治区"},{adcode:46e4,name:"海南省"},{adcode:5e5,name:"重庆市"},{adcode:51e4,name:"四川省"},{adcode:52e4,name:"贵州省"},{adcode:53e4,name:"云南省"},{adcode:54e4,name:"西藏自治区"},{adcode:61e4,name:"陕西省"},{adcode:62e4,name:"甘肃省"},{adcode:63e4,name:"青海省"},{adcode:64e4,name:"宁夏回族自治区"},{adcode:65e4,name:"新疆维吾尔自治区"},{adcode:71e4,name:"台湾省"},{adcode:81e4,name:"香港特别行政区"},{adcode:82e4,name:"澳门特别行政区"}],t={name:"HelloWorld",data:function(){return{adcode:-1,adcodes:[],depth:2,colors:{},map:{},disProvince:{}}},created:function(){this.adcodes=c},mounted:function(){this.map=new n.a.Map("container",{zoom:4.5,center:[116.412427,39.303573],pitch:0,viewMode:"3D"}),this.initPro(13e4,2)},methods:{changeAdcode:function(){1e5!=this.adcode&&this.initPro(this.adcode,this.depth)},initPro:function(e,a){var d=this;this.disProvince=new n.a.DistrictLayer.Province({zIndex:12,adcode:[e],depth:a,styles:{fill:function(e){var a=e.adcode;if(!d.colors[a]){var o=155*Math.random()+50;d.colors[a]="rgb("+o+","+o+",255)"}return d.colors[a]},"province-stroke":"cornflowerblue","city-stroke":"white","county-stroke":"rgba(255,255,255,0.5)"}}),this.disProvince.setMap(this.map)}}},i={render:function(){var e=this,a=e.$createElement,d=e._self._c||a;return d("div",{attrs:{id:"AMap"}},[d("div",{attrs:{id:"container"}}),e._v(" "),d("div",{staticClass:"input-card"},[d("h4",[e._v("选择省份")]),e._v(" "),d("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeAdcode},model:{value:e.adcode,callback:function(a){e.adcode=a},expression:"adcode"}},e._l(e.adcodes,function(e){return d("el-option",{key:e.adcode,attrs:{label:e.name,value:e.adcode}})}),1),e._v(" "),d("h4",[e._v("选择层级")]),e._v(" "),d("el-select",{attrs:{placeholder:"请选择"},model:{value:e.depth,callback:function(a){e.depth=a},expression:"depth"}},[d("option",{domProps:{value:0}},[e._v("0 - 显示省级")]),e._v(" "),d("option",{domProps:{value:1}},[e._v("1 - 显示市级")]),e._v(" "),d("option",{domProps:{value:2}},[e._v("2 - 显示区/县级")])])],1)])},staticRenderFns:[]};var r=d("VU/8")(t,i,!1,function(e){d("I06m")},"data-v-6af06616",null);a.default=r.exports}});