<template>
  <div class="login">
    <div class="login-form">
      <div class="login-header">登 录</div>
      <el-input
        placeholder="请输入用户名"
        suffix-icon="fa fa-user"
        v-model="form.user"
        style="margin-bottom: 18px"
      ></el-input>

      <el-input
        placeholder="请输入密码"
        suffix-icon="fa fa-keyboard-o"
        v-model="form.password"
        type="password"
        style="margin-bottom: 18px"
        @keyup.native.enter="login"
      ></el-input>
      <el-button type="primary" style="width: 100%;margin-bottom: 18px" @click.prevent="login">登录</el-button>
      <div style="text-align:center">
        <span style="color:rgb(45, 58, 75)">账号：</span>admin
        <span style="color:rgb(45, 58, 75)">密码：</span>123123
      </div>
    </div>
  </div>
</template>

<script>
import Cookie from "@/tools/cookie";
export default {
  beforeRouteEnter(to, from, next) {
    if (!Cookie.get("username")) {
      //判断sessionStorage是否存在token
      next();
    } else {
      if (to.path === "/") {
        next();
        return;
      } else {
        next({
          path: "/"
        });
      }
    }
  },
  data() {
    return {
      form: {
        user: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.form.user === "admin" && this.form.password === "123123") {
        this.$Cookie.set("username", this.form.user);
        this.$router.push("/");
      } else {
        this.$message.error("用户名或密码错误！");
      }
    }
  }
};
</script>
<style>
</style>


