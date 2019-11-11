<template>
  <div id="allmap" class="allmap"></div>
</template>

<script>
import BMap from "BMap";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  created() {},
  mounted() {
    // 百度地图API功能
    // var map = new BMap.Map("allmap"); // 创建Map实例
    // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
    // //添加地图类型控件
    // map.addControl(
    //   new BMap.MapTypeControl({
    //     mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
    //   })
    // );
    // map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
    // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    // map.setMapStyleV2({
    //   styleId: "48affaaf7ee3956baf53d1af9308ea52"
    // });
    // // var marker = new BMap.Marker(new BMap.Point(116.404, 39.915)); // 创建标注
    // // map.addOverlay(marker);
    // // marker.enableDragging(); //点可拖拽
    // //监听拖拽的点的位置
    // // marker.addEventListener("dragend", function(e) {
    // //   alert("当前位置：" + e.point.lng + ", " + e.point.lat);
    // // });
    // var pointArr = [];
    // var polyline = new BMap.Polyline(pointArr, {
    //   strokeColor: "blue",
    //   strokeWeight: 6,
    //   strokeOpacity: 0.5
    // });
    // // map.addOverlay(polyline);
    // map.addEventListener("click", function(e) {
    //   pointArr.push(new BMap.Point(e.point.lng, e.point.lat));
    //   polyline = new BMap.Polyline(pointArr, {
    //     strokeColor: "blue",
    //     strokeWeight: 6,
    //     strokeOpacity: 0.5
    //   });
    //   map.addOverlay(polyline);
    //   polyline.enableEditing();
    //   map.addOverlay(new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat)));
    // });
    // var opts = {
    //   width: 250, // 信息窗口宽度
    //   height: 100, // 信息窗口高度
    //   title: "Hello" // 信息窗口标题
    // };
    // var infoWindow = new BMap.InfoWindow("World", opts); // 创建信息窗口对象
    // map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口

    var map = new BMap.Map("allmap");
    var dataArr = [
      {
        name: "安顺市",
        cp: [105.9082, 25.9882]
      },
      {
        name: "贵阳市",
        cp: [106.6992, 26.7682]
      }
    ];
    map.centerAndZoom(new BMap.Point(106.714476, 26.60403), 8);
    map.panBy(-210, 330);
    map.clearOverlays(); // 清除地图的其余覆盖物
    const bdary = new BMap.Boundary();
    bdary.get("贵州省", rs => {
      const count = rs.boundaries.length;
      if (count === 0) {
        return;
      }
      const EN_JW = "180, 90;";
      const NW_JW = "-180,  90;";
      const WS_JW = "-180, -90;";
      const SE_JW = "180, -90;";
      // 东南西北四个角添加一个覆盖物
      const ply1 = new BMap.Polygon(
        rs.boundaries[0] + SE_JW + SE_JW + WS_JW + NW_JW + EN_JW + SE_JW,
        {
          strokeColor: "none",
          fillColor: "transparent",
          fillOpacity: 1,
          strokeOpacity: 1
        }
      );
      map.addOverlay(ply1);
      // 绘制‘贵州省’整体的外轮廓
      for (let i = 0; i < count; i++) {
        const ply = new BMap.Polygon(rs.boundaries[i], {
          strokeWeight: 0.5,
          strokeColor: "transparent",
          fillColor: "transparent"
        });
        map.addOverlay(ply);
      }
      dataArr.forEach(element => {
        var bdary = new BMap.Boundary();
        bdary.get(element["name"], rs => {
          var count = rs.boundaries.length;
          for (let i = 0; i < count; i++) {
            var ply = new BMap.Polygon(rs.boundaries[i], {
              strokeWeight: 0.5,
              strokeColor: "#fff",
              fillOpacity: 0.6,
              fillColor: "#a9dbf7"
            });
            map.addOverlay(ply);
          }
          var label = new BMap.Label(element["name"], {
            offset: new BMap.Size(-20, -10),
            position: new BMap.Point(element["cp"][0], element["cp"][1])
          });
          label.setStyle({
            border: "none",
            background: "transparent",
            "font-size": "0.25rem",
            color: "#fff"
          });
          map.addOverlay(label);
          map.enableScrollWheelZoom(true);
          // citySetLabel(
          //   new BMap.Point(element["cp"][0], element["cp"][1]),
          //   element["name"]
          // );
        });
      });
    });
  }
};
</script>

<style lang="scss" scoped>
#allmap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
}
</style>