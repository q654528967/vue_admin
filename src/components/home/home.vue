<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid_content bg-purple">d</div>
        </el-col>
        <el-col :span="18" class="grid_content bg-purple-light middle">
          <h3>电商后台管理系统</h3>
        </el-col>
        <el-col :span="2">
          <div class="grid_content bg-purple">
            <a class="login_out" @click="handleSignout" href="javascript:;"
              >退出</a
            >
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu unique-opened router>
          <el-submenu
            v-for="item1 of asideList"
            :key="item1.id"
            :index="`${item1.order}`"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item1.authName }}</span>
            </template>
            <el-menu-item
              v-for="item2 in item1.children"
              :key="item2.id"
              :index="`${item2.path}`"
            >
              <i class="el-icon-location"></i>
              <span>{{ item2.authName }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      asideList: []
    };
  },
  methods: {
    handleSignout() {
      localStorage.clear();
      this.$message({ message: "退出成功" });
      this.$router.push("login");
    }
  },
  async created() {
    let token = localStorage.getItem("token");
    token || this.$router.push("login");
    let res = await this.$http({ method: "get", url: "menus" });
    let { data } = res;
    this.asideList = data;
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  .header {
    background-color: #b3c0d1;
    .middle {
      text-align: center;
      h3 {
        margin: 0;
        line-height: 60px;
      }
    }
    .login_out {
      line-height: 60px;
    }
  }
  .aside {
    background-color: #d3dce6;
  }
  .main {
    background-color: #e9eef3;
    height: 100%;
  }
}
</style>
