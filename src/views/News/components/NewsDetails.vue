<template>
  <div id="news-details">
    <div class="header">
      <img style="width:100%;height:100%" src="../../../assets/u268.png" alt />
    </div>
    <div class="text">
      <div class="header">
        <span class="title">当前位置:</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/news' }">植物动态</el-breadcrumb-item>
          <el-breadcrumb-item>文章详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="contnet-wrap">
        <img style="width:100%;height:5rem" src="../../../assets/u270.jpg" alt />
      </div>
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
    height: 4rem;
  }
  > .text {
    width: 13rem;
    margin: 0 auto;
    background-color: #ccc;
    transform: translateY(-1.5rem);
    > .header {
      height: 1rem;
      display: flex;
      align-items: center;
      padding-left: 0.5rem;
      > .title {
        margin-right: 0.1rem;
      }
    }
    > .contnet-wrap {
      width: 10rem;
      margin: 0 auto;
    }
  }
}
</style>
