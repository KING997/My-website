webpackJsonp([10],{"lJ/5":function(e,a,n){var o=n("sBYJ");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("774cd8f5",o,!0,{})},leTs:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=n("jkKj"),r=n.n(o),t={name:"HelloWorld",data:function(){return{}},created:function(){},mounted:function(){var e=new r.a.Map("allmap"),a=[{name:"安顺市",cp:[105.9082,25.9882]},{name:"贵阳市",cp:[106.6992,26.7682]}];e.centerAndZoom(new r.a.Point(106.714476,26.60403),8),e.panBy(-210,330),e.clearOverlays(),(new r.a.Boundary).get("贵州省",function(n){var o=n.boundaries.length;if(0!==o){var t=new r.a.Polygon(n.boundaries[0]+"180, -90;180, -90;-180, -90;-180,  90;180, 90;180, -90;",{strokeColor:"none",fillColor:"transparent",fillOpacity:1,strokeOpacity:1});e.addOverlay(t);for(var l=0;l<o;l++){var i=new r.a.Polygon(n.boundaries[l],{strokeWeight:.5,strokeColor:"transparent",fillColor:"transparent"});e.addOverlay(i)}a.forEach(function(a){(new r.a.Boundary).get(a.name,function(n){for(var o=n.boundaries.length,t=0;t<o;t++){var l=new r.a.Polygon(n.boundaries[t],{strokeWeight:.5,strokeColor:"#fff",fillOpacity:.6,fillColor:"#a9dbf7"});e.addOverlay(l)}var i=new r.a.Label(a.name,{offset:new r.a.Size(-20,-10),position:new r.a.Point(a.cp[0],a.cp[1])});i.setStyle({border:"none",background:"transparent","font-size":"0.25rem",color:"#fff"}),e.addOverlay(i),e.enableScrollWheelZoom(!0)})})}})}},l={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"allmap",attrs:{id:"allmap"}})},staticRenderFns:[]};var i=n("VU/8")(t,l,!1,function(e){n("lJ/5")},"data-v-1c68356c",null);a.default=i.exports},sBYJ:function(e,a,n){(e.exports=n("FZ+f")(!1)).push([e.i,"#allmap[data-v-1c68356c]{width:100%;height:100%;overflow:hidden;margin:0;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1}",""])}});