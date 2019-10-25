<template>
  <div id="news-details">
    <div class="header">
      <span class="title">当前位置:</span>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: 'home/news' }">植物动态</el-breadcrumb-item>
        <el-breadcrumb-item>文章详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="contnet-wrap">
      <div class="title">
        {{textContent&&textContent.title.title}}
        <span v-if="textContent&&textContent.shortTitle">|</span>
        {{textContent&&textContent.shortTitle}}
      </div>
      <div class="info">创建时间:{{textContent&&textContent.releaseTime}}</div>
      <div class="txt" v-html="textContent&&textContent.content"></div>
    </div>
    <div class="navigation">
      <div class="item">上一篇：致夏天——别着急喊热，未来热的日子还长着呢！</div>
      <div class="item">下一篇：2019，全民健身时代又来了！</div>
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

<style lang="less">
#news-details {
  margin-top: 0.52rem;
  > .header {
    width: 1158px;
    margin: 0 auto;
    height: 1.06rem;
    display: flex;
    align-items: center;
    font-size: 0.18rem;
    height: 0.54rem;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 0.64rem;
    > .title {
      margin-right: 0.1rem;
    }
  }
  > .contnet-wrap {
    width: 1158px;
    margin: 0 auto;
    color: #333;
    border-bottom: 1px solid #e5e5e5;
    > .title {
      height: 0.42rem;
      line-height: 0.42rem;
      font-size: 0.22rem;
    }
    > .info {
      font-size: 0.16rem;
      height: 0.32rem;
      line-height: 0.32rem;
    }
    > .txt {
      margin-top: 0.5rem;
      text-indent: 0.5rem;
      p {
        font-size: 0.18rem;
        line-height: 0.38rem;
        margin: 0.18rem 0;
      }
    }
  }
  > .navigation {
    width: 1158px;
    margin: 0 auto;
    height: 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0.4rem;
    > .item {
      height: 0.36rem;
      line-height: 0.36rem;
      font-size: 0.18rem;
      color: #333;
      cursor: pointer;
      &:hover {
        color: #19ab64;
      }
    }
  }
}
</style>
