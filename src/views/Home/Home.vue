<template>
  <div id="home">
    <div id="nav">
      <router-link to="/home/index">首页</router-link>
      <router-link to="/home/life">走进彩色生活</router-link>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link" :class="{active:$route.name === 'product'}">
          产品中心
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/home/product">桌面智能种植</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/home/product">阳台智能种植</router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
          <div class="item" @click="gotoRouter('/home/product')">智慧家庭种植机ZC01</div>
          <div class="item" @click="gotoRouter('/home/product')">智能种植花盆ZC02</div>
        </div>
        <div class="column">
          <div class="item">植物中心</div>
          <div class="item">新闻动态</div>
          <div class="item">趣味种植</div>
        </div>
        <div class="column">
          <div class="item">关于我们</div>
          <div class="item">品牌介绍</div>
          <div class="item">联系我们</div>
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
  methods: {
    gotoRouter(path = "/home/index") {
      if (this.$route.path !== path) {
        this.$router.push({ path });
      }
    }
  }
};
</script>

<style lang="less" scope>
#home {
  > #nav {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid #e4e4e4;
    > a {
      margin: 0 0.2rem;
      color: #666666;
      &.router-link-active {
        color: #19ab64;
      }
    }
    > .el-dropdown {
      margin: 0 0.2rem;
      .el-dropdown-link {
        color: #666666;
        &.active {
          color: #19ab64;
        }
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
        > .item {
          cursor: pointer;
        }
      }
    }
    > .copyright {
      text-align: center;
      font-size: 0.14rem;
    }
  }
}
</style>
