<template>
  <div id="index">
    <div class="row1">
      <el-carousel trigger="click" height="10.42rem" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          <img style="width:100%;height:100%" src="../../assets/banner1_1.png" alt />
          <div class="txt">
            <div class="title">彩虹蔬</div>
            <div class="sub-title">在家拥有菜园</div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="row2">
      <div class="title">拥有彩虹蔬的生活</div>
      <p class="sub-title">从小小的种子开始种植的蔬菜。看着它们的模样、让人既期待又兴奋……</p>
      <p class="sub-title">拥有彩虹蔬 而更丰富一点的生活、你也想开始看看吗？</p>
      <div class="carousel-wrap">
        <el-carousel :interval="400000" @change="carouselChange">
          <el-carousel-item v-for="item in 3" :key="item">
            <img
              style="width:100%;height:100%"
              v-lazy="require(`../../assets/banner2_${item}.jpg`)"
              alt
            />
            <div class="days" v-if="currentCarouselItem===item">
              <CircleProgressBar
                :percent="0.3*item"
                :diameter="104"
                :barWidth="2"
                barColor="#19ab64"
              ></CircleProgressBar>
              <div class="bg">{{`${7*item}天`}}</div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="row3">
      <div class="txt">
        <div class="title">科技赋能园艺，智能创造生活</div>
        <div class="sub-title">智慧的本质,是一种生活方式，轻松、有趣、省心，彩虹疏让种植从未这么简单。</div>
        <div class="btn">查看详情 ></div>
      </div>
    </div>
    <div class="row4">
      <div class="txt">
        <div class="title">用 App 將植物的「现状」通知到智慧型裝置上</div>
        <div class="sub-title">帮助植物“开口说话”，精准传达植物生长过程中所需信号，自动化改善植物生长环境;</div>
        <div class="sub-title">无论是工作中还是旅行中,都可以安心</div>
      </div>
      <div class="img-wrap">
        <div class="title">
          <div class="txt">让植物开口说话的APP</div>
          <div class="btn" @click="gotoApp">查看更多 ></div>
        </div>
      </div>
    </div>
    <div class="row5">
      <lazy-component class="txt">
        <div class="title">种植资讯</div>
        <div class="sub-title">绿色种植与现代科技完美结合，打造室内园艺智能种植一站式解决方案</div>
      </lazy-component>
      <div class="text-wrap">
        <lazy-component class="item" v-for="(item,index) in newList" :key="index">
          <div class="img-wrap">
            <img style="width:100%;height:100%" src="../../assets/1_news_demo.png" alt />
          </div>
          <div class="text">
            <div class="data">
              <span class="month">29</span>
              <span class="day">/8月</span>
            </div>
            <p>{{item.cmsContent.title}}</p>
          </div>
        </lazy-component>
      </div>
      <div class="more" @click="gotoNews">查看更多 ></div>
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
    },
    gotoNews() {
      this.$router.push({ path: "/home/news" });
    },
    gotoApp() {
      this.$router.push({ name: "app-details" });
    }
  }
};
</script>
<style lang="stylus" lang="less">
#index {
  font-size: 0.16rem;
  > .row1 {
    position: relative;
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
    .txt {
      position: absolute;
      left: 2.45rem;
      top: 4.8rem;
      color: #12ac61;
      font-family: PingFang SC;
      > .title {
        font-size: 1.08rem;
        height: 1.08rem;
        line-height: 1.08rem;
        font-weight: 500;
        margin-bottom: 0.45rem;
      }
      > .sub-title {
        font-size: 0.72rem;
        height: 0.72rem;
        line-height: 0.72rem;
        font-weight: 300;
      }
    }
  }
  > .row2 {
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
        width: 15.68rem;
        max-width: 1176px;
        overflow: visible;
        margin: 0 auto;
        > .el-carousel__container {
          width: 15.2rem;
          max-width: 1140px;
          height: 9.47rem;
          max-height: 710px;
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
  > .row3 {
    max-width: 1440px;
    max-height: 750px;
    height: 10rem;
    margin: 0.72rem auto 0;
    position: relative;
    background-image: url("../../assets/1_1.png");
    background-size: 100% 100%;
    > .txt {
      position: absolute;
      top: 19.3%;
      right: 0;
      > .title {
        font-size: 0.36rem;
        height: 0.36rem;
        line-height: 0.36rem;
        color: #333333;
      }
      > .sub-title {
        font-size: 0.18rem;
        height: 0.18rem;
        line-height: 0.18rem;
        margin-top: 0.22rem;
        color: #666;
      }
      > .btn {
        margin-top: 0.45rem;
        width: 2.26rem;
        height: 0.46rem;
        background: rgba(25, 171, 100, 1);
        border-radius: 0.04rem;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.16rem;
        cursor: pointer;
        &:hover {
          background-color: #30c672;
        }
      }
    }
  }
  > .row4 {
    max-width: 1440px;
    margin: 0 auto;
    > .txt {
      height: 3.1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > .title {
        font-size: 0.36rem;
        height: 0.66rem;
        line-height: 0.66rem;
        color: #333333;
      }
      > .sub-title {
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.18rem;
        color: #666;
      }
    }
    > .img-wrap {
      max-height: 1023px;
      height: 13.64rem;
      position: relative;
      background-image: url("../../assets/1_2.png");
      background-size: 100% 100%;
      > .title {
        position: absolute;
        left: 19.86%;
        top: 23.37%;
        > .txt {
          font-size: 36px;
          line-height: 36px;
          height: 36px;
          color: #19ab64;
          font-weight: 700;
        }
        > .btn {
          width: 276px;
          height: 46px;
          background: rgba(25, 171, 100, 1);
          border: 1px solid rgba(25, 171, 100, 1);
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          font-size: 16px;
          margin-top: 48px;
          cursor: pointer;
          &:hover {
            background-color: #30c672;
          }
        }
      }
    }
  }
  > .row5 {
    max-width: 1440px;
    margin: 0 auto;
    > .txt {
      height: 2.2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      animation: jackInTheBox 1s;
      > .title {
        font-size: 0.36rem;
        height: 0.66rem;
        line-height: 0.66rem;
        color: #333333;
      }
      > .sub-title {
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.18rem;
        color: #666;
      }
    }
    > .text-wrap {
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      max-height: 800px;
      > .item {
        width: 25%;
        height: 400px;
        box-sizing: border-box;
        padding: 0 12px;
        animation: fadeInUp 1s;
        > .img-wrap {
          height: 200px;
        }
        > .text {
          > .data {
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            color: #999999;
            > .month {
              font-size: 20px;
            }
            > .day {
              font-size: 12px;
              transform: translateY(2px);
            }
          }
          > p {
            line-height: 30px;
            color: #333333;
            cursor: pointer;
            &:hover {
              color: #19ab64;
            }
          }
        }
      }
    }
    > .more {
      margin: 0 auto 1rem;
      width: 276px;
      height: 46px;
      background: rgba(25, 171, 100, 1);
      border: 1px solid rgba(25, 171, 100, 1);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        background-color: #30c672;
      }
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

@keyframes domMove {
  0% {
    transform: translate3d(-50%, 100%, 0) scale3d(0.8, 0.8, 0.8);
    opacity: 0;
  }
  50% {
    transform: translate3d(-10%, 20%, 0) scale3d(0.8, 0.8, 0.8);
    opacity: 0.3;
  }
  100% {
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    opacity: 1;
  }
}
</style>
