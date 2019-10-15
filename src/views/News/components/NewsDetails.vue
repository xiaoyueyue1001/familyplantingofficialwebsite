<template>
  <div id="news-details">
    <div class="header">
      <span class="title">当前位置:</span>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/news' }">植物动态</el-breadcrumb-item>
        <el-breadcrumb-item>文章详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style lang="less" scoped>
#news-details {
  > .header {
    display: flex;
    align-items: center;
    > .title {
      margin-right: 0.1rem;
    }
  }
}
</style>
