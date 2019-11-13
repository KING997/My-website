<template>
  <div class="login">
    <div class="login-form">
      <div class="login-header">登 录</div>
      <el-input
        placeholder="请输入用户名"
        prefix-icon="el-icon-user"
        v-model="form.user"
        style="margin-bottom: 18px"
      ></el-input>
      <el-input
        placeholder="请输入密码"
        prefix-icon="el-icon-lock"
        v-model="form.password"
        type="password"
        style="margin-bottom: 18px"
        show-password
        @keyup.native.enter="login"
      ></el-input>
      <el-button type="primary" style="width: 100%;margin-bottom: 18px" @click.prevent="login">登录</el-button>
      <div class="pswBox">
        <div>
          账号：admin
          <span style="margin-left:10px">密码：123123</span>
        </div>
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

<style lang="scss" scoped>
.login {
  .login-form {
    .pswBox {
      color: #fff;
      position: absolute;
      bottom: -30px;
      left: 10px;
    }
  }
}
</style>


