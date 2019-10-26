<template>
  <div id="app-details">
    <div class="pages" :style="pagesStyle">
      <div class="page page1">
        <div class="txt">
          <p>科技赋能园艺 智能创造生活</p>
          <div class="download">
            <div class="left">
              <div class="btn">
                <img src="../../../assets/ios_white.png" alt />
                For iPhone
              </div>
              <div class="btn">
                <img src="../../../assets/android_white.png" alt />
                For Android
              </div>
            </div>
            <div class="right">
              <img src="../../../assets/download_QRCode.png" style="width:100%;height:100%" alt />
            </div>
          </div>
        </div>
        <div class="demo">
          <img src="../../../assets/app_1_1.png" style="width:100%;height:100%" alt />
        </div>
      </div>
      <div class="page page2">2</div>
      <div class="page page3">3</div>
      <div class="page page4">4</div>
      <div class="page page5">5</div>
      <div class="page page6">6</div>
      <div class="page page7">
        <div class="title">彩虹蔬在手,</div>
        <div class="title">你也可以成为种植小能手！</div>
        <div class="sub-title">带上彩虹蔬APP，开始你的种植之旅吧。</div>
        <div class="icons">
          <div class="item">
            <div class="icon">
              <img src="../../../assets/ios.png" style="width:0.36rem;height:0.44rem" alt />
            </div>
            <div class="txt">iOS下载</div>
          </div>
          <div class="item">
            <div class="icon">
              <img src="../../../assets/android.png" style="width:0.45rem;height:0.54rem" alt />
            </div>
            <div class="txt">安卓下载</div>
          </div>
          <div class="item">
            <div class="icon">
              <img
                src="../../../assets/download_QRCode.png"
                style="width:0.61rem;height:0.61rem"
                alt
              />
            </div>
            <div class="txt">扫码关注</div>
          </div>
        </div>
        <div class="line"></div>
        <div class="copyright">Copyright © 2012-2019 深圳中琛源科技股份有限公司 粤ICP备12035081号-8</div>
        <div class="top" @click="gototop"></div>
      </div>
    </div>
    <div class="indicator-wrap">
      <div class="indicator" v-for="item in 7" :key="item" :class="{active:currentPage === item-1}"></div>
    </div>
    <div class="modal" :style="modalStyle">
      <div class="txt" :class="{show:currentPage === 1}">
        <div class="title">实时监测植物健康状态</div>
        <div class="sub-title">精准传达植物生长过程中所需信号，自动化改善植物生长环境</div>
        <div class="sub-title">APP上可实时观看植物的虚拟成长过程以及在智能</div>
      </div>
      <div class="txt" :class="{show:currentPage === 2}">
        <div class="title">智能模型控制</div>
        <div class="sub-title">自动化种植系统，再也不用担心出差、度假或是忘记浇水啦</div>
        <div class="sub-title">智能控制解决您的后顾之虑。</div>
      </div>
      <div class="txt" :class="{show:currentPage === 3}">
        <div class="title">轻松有趣的种植游戏</div>
        <div class="sub-title">虚拟种植游戏，植物养成后还能领取积分和智能种植设备哦</div>
      </div>
      <div class="txt" :class="{show:currentPage === 4}">
        <div class="title">权威种植知识服务</div>
        <div class="sub-title">给您带来权威的种植养护知识和便捷的种植服务</div>
      </div>
      <div class="txt" :class="{show:currentPage === 5}">
        <div class="title">有趣互动，人人都是种植家</div>
        <div class="sub-title">平台汇聚专业的种植大人，解决常见的种植问题</div>
      </div>
    </div>
    <div class="circle-wrap" :style="circleWrapStyle">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
    </div>
    <div class="phone-wrap" :style="phoneWrapStyle">
      <div class="phone">
        <img src="../../../assets/phone_bg.png" style="width:100%;height:100%" class="bg" alt />
        <img src="../../../assets/app_phone_hand2.png" class="hand" :style="handBgImgStyle" alt />
        <div class="finger" :style="handBgImgStyle"></div>
      </div>
      <div class="icons">
        <div class="icon">
          <img src="../../../assets/ios.png" style="width:3.33vh;height:4.08vh" alt />
        </div>
        <div class="icon">
          <img src="../../../assets/android.png" style="width:4.17vh;5vh" alt />
        </div>
        <div class="icon">
          <img src="../../../assets/download_QRCode.png" style="width:5.65vh;height:5.65vh" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 0,
      throttlingFlag: false,
      throttlingTime: 500
    };
  },
  computed: {
    pagesStyle() {
      return {
        transform: `translateY(${(-100 / 7) * this.currentPage}%)`
      };
    },
    modalStyle() {
      const minPage = 1;
      const maxPage = 5;
      if (this.currentPage < minPage) {
        return {
          top: "100%"
        };
      } else if (this.currentPage <= maxPage) {
        return {
          top: 0
        };
      } else {
        return {
          top: "-100%"
        };
      }
    },
    circleWrapStyle() {
      const minPage = 3;
      const maxPage = 3;
      if (this.currentPage < minPage - 1) {
        return {
          top: "200%"
        };
      } else if (this.currentPage === minPage - 1) {
        return {
          top: "100%"
        };
      } else if (this.currentPage <= maxPage) {
        return {
          top: 0
        };
      } else if (this.currentPage === maxPage + 1) {
        return {
          top: "-100%"
        };
      } else {
        return {
          top: "-200%"
        };
      }
    },
    phoneWrapStyle() {
      const minPage = 1;
      const maxPage = 5;
      if (this.currentPage < minPage) {
        return {
          top: "150%"
        };
      } else if (this.currentPage <= maxPage) {
        return {
          top: "50%"
        };
      } else {
        return {
          top: "-50%"
        };
      }
    },
    handBgImgStyle() {
      return {
        opacity: this.currentPage === 3 ? 1 : 0
      };
    }
  },
  created() {
    window.addEventListener("mousewheel", this.mousewheelChange);
  },
  beforeDestroy() {
    window.removeEventListener("mousewheel", this.mousewheelChange);
  },
  methods: {
    mousewheelChange(event) {
      event.preventDefault();
      if (this.throttlingFlag) {
        return;
      }
      const minPage = 0;
      const maxPage = 6;
      if (event.wheelDelta > 0) {
        //向上翻页
        if (this.currentPage > minPage) {
          this.throttlingFlag = true;
          this.currentPage--;
          setTimeout(() => {
            this.throttlingFlag = false;
          }, this.throttlingTime);
          console.log(this.currentPage);
        }
      } else {
        //向下翻页
        if (this.currentPage < maxPage) {
          this.throttlingFlag = true;
          this.currentPage++;
          setTimeout(() => {
            this.throttlingFlag = false;
          }, this.throttlingTime);
          console.log(this.currentPage);
        }
      }
    },
    gototop() {
      this.currentPage = 0;
    }
  }
};
</script>
 
 <style lang="less" scoped>
#app-details {
  height: 100vh;
  > .pages {
    transition: all 0.5s linear;
    > .page {
      height: 100vh;
      &.page1 {
        background-image: url("../../../assets/app_bg_1.png");
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        > .txt {
          width: 8.6rem;
          > p {
            color: #19ab64;
            font-weight: 700;
            font-size: 0.6rem;
            height: 0.6rem;
            line-height: 0.6rem;
            margin-bottom: 0.7rem;
          }
          > .download {
            height: 1.44rem;
            display: flex;
            > .left {
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              margin-right: 0.4rem;
              > .btn {
                width: 2.24rem;
                height: 0.58rem;
                background-color: #333;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 0.29rem;
                font-size: 0.25rem;
                font-weight: 700;
                cursor: pointer;
                > img {
                  width: 0.24rem;
                  height: 0.28rem;
                  margin-right: 0.1rem;
                }
              }
            }
            > .right {
              width: 1.44rem;
              height: 1.44rem;
            }
          }
        }
        > .demo {
          width: 4.6rem;
          height: 8.72rem;
        }
      }
      &.page2 {
        background-image: url("../../../assets/app_bg_2.png");
        background-size: cover;
      }
      &.page3 {
        background-image: url("../../../assets/app_bg_3.png");
        background-size: cover;
      }
      &.page4 {
        background-image: url("../../../assets/app_bg_4.png");
        background-size: cover;
      }
      &.page5 {
        background-image: url("../../../assets/app_bg_5.png");
        background-size: cover;
      }
      &.page6 {
        background-image: url("../../../assets/app_bg_6.png");
        background-size: cover;
      }
      &.page7 {
        background-color: #39b06a;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        > .title {
          font-size: 0.6rem;
          height: 0.96rem;
          line-height: 0.96rem;
        }
        > .sub-title {
          font-size: 0.3rem;
          height: 0.54rem;
          line-height: 0.54rem;
        }
        > .icons {
          margin-top: 0.45rem;
          display: flex;
          width: 4.44rem;
          display: flex;
          justify-content: space-between;
          > .item {
            width: 1.05rem;
            > .icon {
              height: 1.05rem;
              border-radius: 50%;
              background-color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            > .txt {
              width: 0.76rem;
              height: 0.2rem;
              line-height: 0.2rem;
              font-size: 0.12rem;
              background: rgba(0, 0, 0, 0.15);
              border-radius: 0.1rem;
              text-align: center;
              margin: 0.1rem auto;
            }
          }
        }
        > .line {
          margin-top: 1.12rem;
          width: 100%;
          max-width: 1440px;
          border-top: 1px solid #8bd1a7;
        }
        > .copyright {
          font-size: 0.12rem;
          text-align: center;
          color: #28804c;
          margin-top: 0.25rem;
        }
        > .top {
          position: absolute;
          width: 0.86rem;
          height: 0.86rem;
          background-image: url("../../../assets/gototop.png");
          background-size: 100% 100%;
          color: #000;
          bottom: 1rem;
          right: calc(50% - 720px);
          transform: translateX(50%);
          cursor: pointer;
        }
      }
    }
  }
  > .indicator-wrap {
    position: fixed;
    left: 0.64rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    > .indicator {
      width: 0.08rem;
      height: 0.08rem;
      border-radius: 0.06rem;
      border: 2px solid #fff;
      margin: 0.05rem 0;
      transition: all 0.5s;
      cursor: pointer;
      &.active {
        height: 0.36rem;
        background-color: #fff;
      }
    }
  }
  > .modal {
    height: 41.67%;
    background: rgba(28, 193, 101, 0.8);
    transition: all 0.5s linear;
    position: fixed;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    > .txt {
      position: absolute;
      top: 17%;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      text-align: center;
      opacity: 0;
      transition: all 0.5s;
      &.show {
        opacity: 1;
      }
      > .title {
        font-size: 0.6rem;
        height: 0.6rem;
        line-height: 0.6rem;
        margin-bottom: 0.3rem;
      }
      > .sub-title {
        font-size: 0.24rem;
        height: 0.24rem;
        line-height: 0.24rem;
        margin-bottom: 0.12rem;
      }
    }
  }
  > .circle-wrap {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    max-width: 1440px;
    width: 100%;
    height: 100%;
    transition: all 1s;
    > .circle {
      width: 0.96rem;
      height: 0.96rem;
      border-radius: 50%;
      border: 0.48rem solid #fff;
      position: absolute;
      transform: translateY(-50%;);
      &.circle1 {
        left: 0;
        top: 0;
      }
      &.circle2 {
        right: 0;
        top: 100%;
      }
    }
  }
  > .phone-wrap {
    width: 32.4vh;
    transition: all 0.5s linear;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    > .phone {
      margin-top: 15vh;
      width: 26.48vh;
      height: 57.96vh;
      background: url("../../../assets/phone_1_1.png") no-repeat 50% 50%;
      background-size: 85% 72%;
      position: relative;
      > img.bg {
        position: absolute;
        z-index: 3;
      }
      > img.hand {
        position: absolute;
        // right: -15%;
        // width: 335%;
        // height: 136%;
        // top: 7%;
        right: -8%;
        width: 302%;
        height: 115%;
        top: 5%;
        transition: all 0.5s;
      }
      > .finger {
        background-image: url("../../../assets/app_phone_hand2.png");
        background-position: 100% -27%;
        background-size: 1200% 116%;
        position: absolute;
        right: -10%;
        top: 0;
        width: 30%;
        height: 100%;
        z-index: 4;
        transition: all 0.5s;
      }
    }
    > .icons {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 2vh;
      > .icon {
        width: 9.72vh;
        height: 9.72vh;
        background-color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3;
      }
    }
  }
}
</style>