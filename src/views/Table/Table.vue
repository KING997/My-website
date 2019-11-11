<template>
  <div id="Table">
    <el-table height="100%" :data="Data" border>
      <el-table-column
        v-for="(item,index) in dataObj"
        :key="index"
        :label="item.label"
        :width="item.width"
        align="center"
      >
        <template slot-scope="{row}">
          <span v-if="!item.custom">{{row[item.prop]}}</span>
          <span v-else>{{item.custom(row[item.prop])}}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="file" label="文件" align="center">
        <template slot-scope="{row}">
          <a target="_blank" :href="$imgUrl+row[file]" download>查看文件</a>
        </template>
      </el-table-column>
      <el-table-column v-if="img" label="单张图片" align="center">
        <template slot-scope="{row}">
          <el-image
            style="width: 100px; height: 100px"
            :src="$imgUrl+row[img]"
            :preview-src-list="[$imgUrl+row[img]]"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column v-if="imgs" label="多张图片" align="center">
        <template slot-scope="{row}">
          <el-image
            style="width: 100px; height: 100px"
            :src="row[imgs][0]"
            :preview-src-list="row[imgs]"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column v-if="handle" label="操作" align="center">
        <template slot-scope="{row}">
          <el-button
            v-if="handle.edit"
            @click="handle.edit(row)"
            type="primary"
            size="small"
            circle
            icon="el-icon-edit"
          ></el-button>
          <el-button
            v-if="handle.delete"
            @click="handle.delete(row)"
            type="danger"
            size="small"
            circle
            icon="el-icon-delete"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.Data.forEach(item => {
      item[this.imgs].forEach((val, index) => {
        if (val.indexOf(this.$imgUrl) === -1) {
          this.$set(item[this.imgs], index, this.$imgUrl + val);
        }
      });
    });
  },
  props: ["Data", "dataObj", "file", "img", "imgs", "handle"]
};
</script>

<style lang="scss" scoped>
#Table {
  height: 100%;
}
</style>