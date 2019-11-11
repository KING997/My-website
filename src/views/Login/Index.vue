<template>
  <div class="login">
    <div class="login-form">
      <div class="login-header">
        PC端模板组件
        <!-- <img src="../../assets/images/logo.svg" width="195" height="48" alt=""> -->
      </div>
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
      <!-- <div>
        <el-checkbox v-model="Remenber"> Remenber</el-checkbox>
        <router-link to="/register" style="float: right;color: #333940;font-size: 14px">Register</router-link>
      </div>-->
    </div>
  </div>
</template>

<script>
// import qs from "qs";
// import { axiosPost } from "../../utils/post";
export default {
  data() {
    return {
      form: {
        user: "",
        password: ""
      },
      Remenber: true
    };
  },
  methods: {
    login() {
      //   axiosPost(
      //     "/login.do",
      //     qs.stringify(this.form),
      //     "登录成功",
      //     { headers: { "Content-Type": "application/x-www-form-urlencoded" } },
      //     data => {
      //       sessionStorage.setItem("token", data.uuid);
      //       this.$router.push("/");
      //     }
      //   );
    }
  }
};
</script>
<style>
</style>


