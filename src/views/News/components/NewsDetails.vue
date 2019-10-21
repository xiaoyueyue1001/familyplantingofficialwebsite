<template>
  <div id="news-details">
    <div class="header">
      <img style="width:100%;height:100%" src="../../../assets/u268.png" alt />
    </div>
    <div class="text">
      <div class="header">
        <span class="title">当前位置:</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: 'home/news' }">植物动态</el-breadcrumb-item>
          <el-breadcrumb-item>文章详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="contnet-wrap">
        <div
          class="title"
        >{{textContent&&textContent.title.title}}|{{textContent&&textContent.shortTitle}}</div>
        <div class="info">创建时间:{{textContent&&textContent.releaseTime}}</div>
        <div class="txt" v-html="textContent&&textContent.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { queryNewsById } from "@/api/news";
export default {
  data() {
    return {
      textContent: null
    };
  },
  created() {
    this.queryNewsById();
  },
  methods: {
    queryNewsById() {
      let id = this.$route.params.id;
      queryNewsById({ id }).then(res => {
        this.textContent = res.data.dataField;
      });
    }
  }
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
    background-color: #eee;
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
      > .title {
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.36rem;
      }
      > .txt {
        margin-top: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.24rem;
        text-indent: 0.5rem;
      }
    }
  }
}
</style>
