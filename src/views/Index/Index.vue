<template>
  <div id="index">
    <div class="row1">
      <el-carousel trigger="click" height="550px" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          <img style="width:100%;height:100%" src="../../assets/u86.png" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="row2">
      <h4 class="title">智慧场景</h4>
      <p class="sub-title">把大自然搬回家，和家人一起唤醒健康的生活方式</p>
      <div class="img-wrap">
        <img style="width:100%;height:100%" src="../../assets/u36.png" alt />
      </div>
    </div>
    <div class="row3">
      <img style="width:100%;height:100%" src="../../assets/u75.jpg" alt />
    </div>
    <div class="row4">
      <h4 class="title">拥有彩虹蔬的生活</h4>
      <p class="sub-title">从小小的种子开始种植的蔬菜。看着它们的模样、让人既期待又兴奋……</p>
      <p class="sub-title">拥有彩虹蔬 而更丰富一点的生活、你也想开始看看吗？</p>
      <div class="carousel-wrap">
        <el-carousel :interval="4000" type="card" height="4rem">
          <el-carousel-item v-for="item in 6" :key="item">
            <img style="width:100%;height:100%" src="../../assets/u88.png" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="row5"></div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="stylus" lang="less">
#index {
  font-size: 0.16rem;
  > .row1 {
    .el-carousel__indicator {
      &.is-active {
        .el-carousel__button {
          background-color: #666;
        }
      }
      .el-carousel__button {
        background-color: #ccc;
      }
    }
  }
  > .row2 {
    height: 7rem;
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    > .title {
      height: 1rem;
      padding-top: 1rem;
      font-size: 0.3rem;
    }
    > .sub-title {
      height: 0.5rem;
    }
    > .img-wrap {
      width: 11.09rem;
      height: 4.68rem;
    }
  }
  > .row3 {
    height: 6.64rem;
  }
  > .row4 {
    height: 6.8rem;
    text-align: center;
    > .title {
      padding-top: 0.7rem;
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.3rem;
    }
    > .sub-title {
      height: 0.5rem;
      line-height: 0.5rem;
    }
  }
  > .row5 {
    height: 8rem;
  }
}
</style>
