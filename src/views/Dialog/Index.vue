<template>
  <div id="mainDialog">
    <el-button @click="props.show = true">打开弹窗</el-button>
    <Dialog :props="props" />
  </div>
</template>

<script>
import Dialog from "./Dialog";
export default {
  data() {
    let _this = this;
    return {
      props: {
        show: false,
        title: "添加弹窗",
        formLabelWidth: "150px",
        form: [
          {
            prop: "title",
            value: "",
            label: "标题",
            custom: "input"
          },
          {
            prop: "time",
            value: "",
            label: "时间",
            custom: "input"
          }
        ],
        close: function() {
          _this.props.show = false;
        }
      }
    };
  },
  components: {
    Dialog
  }
};
</script>

<style>
</style>