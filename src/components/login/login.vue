<template>
  <div class="login_wrap">
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
      class="login_form"
    >
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          @keyup.enter.native="handleLogin"
          v-model="formLabelAlign.password"
        ></el-input>
      </el-form-item>
      <el-button @click="handleLogin" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      formLabelAlign: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async handleLogin() {
      let res = await this.$http({
        method: "post",
        data: this.formLabelAlign,
        url: "login"
      });
      console.log(res);
      let {
        data,
        meta: { msg, status }
      } = res;
      this.$message({ message: msg });
      if (status == 200) {
        localStorage.setItem("token", data.token);
        this.$router.push("home");
      }
      console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped>
.login_wrap {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #324152;
  .login_form {
    width: 400px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
    h2 {
      text-align: center;
      margin: 0;
    }
    .el-button--primary {
      width: 100%;
    }
  }
}
</style>
