<template>
  <div id="AMap">
    <div id="container"></div>
    <div class="input-card">
      <h4>选择省份</h4>
      <el-select v-model="adcode" placeholder="请选择" @change="changeAdcode">
        <el-option
          v-for="item in adcodes"
          :key="item.adcode"
          :label="item.name"
          :value="item.adcode"
        ></el-option>
      </el-select>
      <h4>选择层级</h4>
      <el-select v-model="depth" placeholder="请选择">
        <option :value="0">0 - 显示省级</option>
        <option :value="1">1 - 显示市级</option>
        <option :value="2">2 - 显示区/县级</option>
      </el-select>
      <!-- <select
        name="code-list"
        id="adcode-list"
        style="height: 28px;margin-right: 10px;"
        onchange="changeAdcode(this.value)"
      >
        <option value="-1">选择省份</option>
        <option v-for="item in ">选择省份</option>
      </select>
      <h4>选择层级</h4>
      <select
        name="code-list"
        style="height: 28px;margin-right: 10px;"
        onchange="changeDepth(this.value)"
      >
        <option value="0">0 - 显示省级</option>
        <option value="1">1 - 显示市级</option>
        <option selected value="2">2 - 显示区/县级</option>
      </select>-->
    </div>
  </div>
</template>

<script>
import AMap from "AMap";
import adcodes from "./adcodes";
var abc = 1;
export default {
  name: "HelloWorld",
  data() {
    return {
      adcode: -1,
      adcodes: [],
      depth: 2,
      colors: {},
      map: {},
      disProvince: {}
    };
  },
  created() {
    this.adcodes = adcodes;
  },
  mounted() {
    this.map = new AMap.Map("container", {
      zoom: 4.5,
      center: [116.412427, 39.303573],
      pitch: 0,
      viewMode: "3D"
    });
    this.initPro(130000, 2);
    // 创建省份图层
    // var disProvince;
    // 颜色辅助方法
    // var colors = {};
    // var getColorByAdcode = function(adcode) {
    //   if (!colors[adcode]) {
    //     var gb = Math.random() * 155 + 50;
    //     colors[adcode] = "rgb(" + gb + "," + gb + ",255)";
    //   }
    //   return colors[adcode];
    // };
    // 按钮事件
    // function changeAdcode(code) {
    //     if (code != 100000) {
    //         initPro(code, depth);
    //     }
    // }
    // function changeDepth(dep) {
    //   initPro(adCode, dep);
    // }
    // initPro(adCode, depth);
  },
  methods: {
    changeAdcode() {
      if (this.adcode != 100000) {
        this.initPro(this.adcode, this.depth);
      }
    },
    initPro(adCode, depth) {
      let that = this;
      this.disProvince = new AMap.DistrictLayer.Province({
        zIndex: 12,
        adcode: [adCode],
        depth,
        styles: {
          fill: function(properties) {
            let adcode = properties.adcode;
            if (!that.colors[adcode]) {
              let gb = Math.random() * 155 + 50;
              that.colors[adcode] = "rgb(" + gb + "," + gb + ",255)";
            }

            return that.colors[adcode];
          },
          "province-stroke": "cornflowerblue",
          "city-stroke": "white", //中国地级市边界
          "county-stroke": "rgba(255,255,255,0.5)" //中国区县边界
        }
      });
      this.disProvince.setMap(this.map);
    }
  }
};
</script>

<style lang="scss" scoped>
#AMap {
  width: 100%;
  height: 100%;
  #container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    font-family: "微软雅黑";
  }
  .input-card {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: #fff;
  }
}
</style>