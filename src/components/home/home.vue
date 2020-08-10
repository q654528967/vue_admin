<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid_content bg-purple">
            d
          </div>
        </el-col>
        <el-col :span="18" class="grid_content bg-purple-light middle">
          <h3>电商后台管理系统</h3>
        </el-col>
        <el-col :span="2">
          <div class="grid_content bg-purple">
            <router-link class="login_out" to="">退出</router-link>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu unique-opened>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="1-1">
                    <i class="el-icon-location"></i>
                    <span>用户列表</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>权限管理</span>
                </template>
                <el-menu-item index="2-1">
                    <i class="el-icon-location"></i>
                    <span>角色列表</span>
                </el-menu-item>
                <el-menu-item index="2-2">
                    <i class="el-icon-location"></i>
                    <span>权限管理</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>商品管理</span>
                </template>
                <el-menu-item index="3-1">
                    <i class="el-icon-location"></i>
                    <span>商品列表</span>
                </el-menu-item>
                <el-menu-item index="3-2">
                    <i class="el-icon-location"></i>
                    <span>分类参数</span>
                </el-menu-item>
                <el-menu-item index="3-3">
                    <i class="el-icon-location"></i>
                    <span>商品分类</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>订单管理</span>
                </template>
                <el-menu-item index="4-1">
                    <i class="el-icon-location"></i>
                    <span>选项1</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>数据统计</span>
                </template>
                <el-menu-item index="5-1">
                    <i class="el-icon-location"></i>
                    <span>选项1</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">111</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
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
