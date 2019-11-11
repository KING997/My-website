<template>
  <el-dialog :title="props.title" :visible.sync="props.show">
    <el-form>
      <!-- <el-form-item :label-width="formLabelWidth">
        <template slot="label">上传文件</template>
        <el-button type="primary" icon="el-icon-plus" @click="File"></el-button>
        {{fileName}}
        <input
          id="test"
          type="file"
          ref="Files"
          @change="InputClick($event)"
          style="display: none"
        />
      </el-form-item>-->
      <el-form-item
        v-for="(item,index) in props.form"
        :key="index"
        :label="item.label"
        :label-width="props.formLabelWidth"
      >
        <el-input v-model="item.value"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="props.close">取 消</el-button>
      <el-button type="primary">保 存</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["props"]
};
</script>

<style>
</style>