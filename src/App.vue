<template>
  <div id="app">
    <div id="nav">
      <router-link to="/index">首页</router-link>
      <router-link to="/life">走进彩色生活</router-link>
      <router-link to="/product">产品中心</router-link>
      <router-link to="/news">植物动态</router-link>
      <router-link to="/about">关于我们</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    //设置html的fontSize以便自适应rem使用
    const dom = document.getElementsByTagName("html");
    dom[0].style["fontSize"] =
      ((window.innerWidth >= 1366 ? window.innerWidth : 1366) / 1920) * 100 +
      "px";
    window.addEventListener("resize", () => {
      const dom = document.getElementsByTagName("html");
      dom[0].style["fontSize"] =
        ((window.innerWidth >= 1366 ? window.innerWidth : 1366) / 1920) * 100 +
        "px";
    });
  }
};
</script>

<style lang="less" scope>
#app {
  > #nav {
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    > a {
      margin: 0 0.2rem;
      color: #ccc;
      &.router-link-active {
        color: #666;
      }
    }
  }
}
</style>
