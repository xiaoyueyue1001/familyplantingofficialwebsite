<template>
  <div id="app">
    <router-view v-if="isLogin" />
  </div>
</template>

<script>
import { login } from "@/api/news";
export default {
  data() {
    return {
      isLogin: false
    };
  },
  beforeCreate() {
    login().then(() => {
      this.isLogin = true;
    });
  },
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
  min-width: 1440px;
  font-size: 0.16rem;
  height: 100%;
}
</style>
