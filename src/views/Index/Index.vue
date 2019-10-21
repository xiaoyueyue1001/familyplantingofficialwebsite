<template>
  <div id="index">
    <div class="row1">
      <el-carousel trigger="click" height="9.6rem" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          <img style="width:100%;height:100%" src="../../assets/u86.png" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="row4">
      <div class="title">拥有彩虹蔬的生活</div>
      <p class="sub-title">从小小的种子开始种植的蔬菜。看着它们的模样、让人既期待又兴奋……</p>
      <p class="sub-title">拥有彩虹蔬 而更丰富一点的生活、你也想开始看看吗？</p>
      <div class="carousel-wrap">
        <el-carousel :interval="400000" height="7.1rem" @change="carouselChange">
          <el-carousel-item v-for="item in 6" :key="item">
            <img style="width:100%;height:100%" src="../../assets/u88.jpg" alt />
            <div class="days" v-if="currentCarouselItem===item">
              <CircleProgressBar
                :percent="0.1*item"
                :diameter="104"
                :barWidth="2"
                barColor="#19ab64"
              ></CircleProgressBar>
              <div class="bg">7天</div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
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
    <div class="row5">
      <img style="width:100%;height:100%" src="../../assets/u86.png" alt />
    </div>
    <div class="row6">
      <h3>种植资讯</h3>
      <p>绿色种植与现代科技完美结合，打造室内园艺智能种植一站式解决方案</p>
      <div class="text-wrap">
        <div class="item" v-for="(item,index) in newList" :key="index">
          <img src="../../assets/u7.svg" alt />
          <div class="text">
            <p>{{item.cmsContent.title}}</p>
          </div>
        </div>
      </div>
      <div class="more">
        <router-link to="/home/news">更多</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { queryNewsList } from "@/api/news";
import CircleProgressBar from "@/components/CircleProgressBar";
export default {
  components: { CircleProgressBar },
  data() {
    return {
      newList: [],
      currentCarouselItem: 1
    };
  },
  created() {
    queryNewsList({
      type: 1747,
      size: 8,
      page: 1
    }).then(res => {
      this.newList = res.data.content;
    });
  },
  methods: {
    carouselChange(next, pre) {
      this.currentCarouselItem = next + 1;
    }
  }
};
</script>
<style lang="stylus" lang="less">
#index {
  font-size: 0.16rem;
  > .row1 {
    .el-carousel__indicator {
      &.is-active {
        .el-carousel__button {
          width: 25px;
          background-color: #19ab64;
        }
      }
      .el-carousel__button {
        background-color: #ffffff;
        width: 4px;
        height: 4px;
        border-radius: 2px;
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
    text-align: center;
    overflow: hidden;
    > .title {
      height: 0.36rem;
      line-height: 0.36rem;
      font-size: 0.36rem;
      padding: 1.2rem 0 0.16rem 0;
      color: #333333;
    }
    > .sub-title {
      font-size: 0.18rem;
      height: 0.3rem;
      line-height: 0.3rem;
    }
    > .carousel-wrap {
      margin: 0.74rem auto 0;
      max-width: 1440px;
      overflow: hidden;
      .el-carousel {
        width: 11.76rem;
        overflow: visible;
        margin: 0 auto;
        > .el-carousel__container {
          width: 11.4rem;
          margin: 0 auto;
          .days {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
            overflow: hidden;
            width: 104px;
            height: 104px;
            animation: circleShow 1s linear 0.6;
            .progress-circle {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate3d(-50%, -50%, 0);
            }
            .bg {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate3d(-50%, -50%, 0);
              font-size: 24px;
              color: #666;
              width: 98px;
              height: 98px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #fff;
            }
          }
        }
      }
    }
  }
  > .row5 {
    height: 8rem;
  }
  > .row6 {
    > h3 {
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      font-size: 0.3rem;
      color: green;
    }
    > p {
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
      font-size: 0.2rem;
    }
    > .text-wrap {
      margin: 0 auto;
      width: 15rem;
      display: flex;
      flex-wrap: wrap;
      > .item {
        width: 7rem;
        height: 3rem;
        margin: 0.3rem 0.25rem;
        display: flex;
        > img {
          width: 3rem;
          height: 100%;
        }
        > .text {
          box-sizing: border-box;
          height: 100%;
          width: calc(100% - 3rem);
          font-size: 0.2rem;
          overflow: hidden;
          padding: 0.2rem;
        }
      }
    }
    > .more {
      height: 1rem;
      line-height: 1rem;
      text-align: center;
    }
  }
}

@keyframes circleShow {
  0% {
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  }
  60% {
    transform: translate3d(-50%, -50%, 0) scale3d(1.3, 1.3, 1.3);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
  }
}
</style>
