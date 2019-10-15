<template>
  <div id="app">
    <div id="nav">
      <router-link to="/index">首页</router-link>
      <router-link to="/life">走进彩色生活</router-link>
      <router-link to="/product">产品中心</router-link>
      <router-link to="/news">植物动态</router-link>
      <router-link to="/about">关于我们</router-link>
    </div>
    <div id="view">
      <router-view />
    </div>
    <div id="footer">
      <div class="links">
        <div class="column">
          <div class="item">产品中心</div>
          <div class="item">产品中心</div>
          <div class="item">产品中心</div>
        </div>
        <div class="column">
          <div class="item">产品中心</div>
          <div class="item">产品中心</div>
          <div class="item">产品中心</div>
        </div>
        <div class="column">
          <div class="item">产品中心</div>
          <div class="item">产品中心</div>
          <div class="item">产品中心</div>
        </div>
        <div class="column">
          <div class="item">产品中心</div>
          <div class="item">产品中心</div>
          <div class="item">产品中心</div>
        </div>
        <div class="column">
          <div class="item">产品中心</div>
          <div class="item">产品中心</div>
          <div class="item">产品中心</div>
        </div>
      </div>
      <div class="copyright">Copyright © 2012-2019 深圳中琛源科技股份有限公司 粤ICP备12035081号-8</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    //设置html的fontSize以便自适应rem使用
    const dom = document.getElementsByTagName("html");
    dom[0].style["fontSize"] =
      ((window.innerWidth >= 1366 ? window.innerWidth : 1440) / 1920) * 100 +
      "px";
    window.addEventListener("resize", () => {
      const dom = document.getElementsByTagName("html");
      dom[0].style["fontSize"] =
        ((window.innerWidth >= 1366 ? window.innerWidth : 1440) / 1920) * 100 +
        "px";
    });
  }
};
</script>

<style lang="less" scope>
#app {
  font-size: 0.16rem;
  > #nav {
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fefefe;
    border-bottom: 1px solid #000;
    > a {
      margin: 0 0.2rem;
      color: #ccc;
      &.router-link-active {
        color: #666;
      }
    }
  }
  > #footer {
    height: 4rem;
    background-color: #333;
    color: #fff;
    > .links {
      padding-top: 1rem;
      height: 2rem;
      display: flex;
      margin-left: 1rem;
      > .column {
        height: 100%;
        flex: 1;
      }
    }
    > .copyright {
      text-align: center;
      font-size: 0.14rem;
    }
  }
}
</style>
