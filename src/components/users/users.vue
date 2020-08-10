<template>
  <el-card class="box-card">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="input_search">
      <el-col :span="18">
        <el-input placeholder="请输入内容" v-model="query">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="success">添加用户</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" label="#" width="60"></el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="80"
      ></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column prop="create_time" label="创建时间"></el-table-column>
      <el-table-column prop="mg_state" label="用户状态"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      tableData: [],
      pagenum: 1,
      pagesize: 20
    };
  },
  name: "users",
  created() {
    this.getUserList();
  },
  methods: {
    async getUserList() {
      let { query } = this;
      let data = {
        query,
        pagenum: "1",
        pagesize: "20"
      };
      let res = await this.$http({
        url: "users",
        params: data,
        method: "get"
      });
      console.log(res);
      this.tableData = res.data.users;
    }
  }
};
</script>

<style lang="scss" scoped>
.box-card {
  height: 100%;
  box-sizing: border-box;
  .input_search {
    margin: 20px 0;
  }
}
</style>
