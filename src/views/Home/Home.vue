<template>
  <div id="home">
    <div id="nav">
      <router-link to="/home/index">首页</router-link>
      <router-link to="/home/life">走进彩色生活</router-link>
      <router-link to="/home/product">产品中心</router-link>
      <router-link to="/home/news">植物动态</router-link>
      <router-link to="/home/about">关于我们</router-link>
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
export default {};
</script>

<style lang="less" scope>
#home {
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
