<template>
  <div id="life-wrap">
    <div class="life">
      <div class="row1">
        <div class="title">增加氧气含量，吸收室内有毒气体</div>
        <div class="sub-title">这里是副标题，我也不知道写什么，这里是副标题</div>
      </div>
      <div class="row2" v-if="!$route.params.id">
        <div class="txt">
          <div class="title">多姿多彩的时尚生活</div>
          <div class="sub-title">即采即食、美好环境，缓解个人压力，增加氧气有助于人体健康</div>
        </div>
        <div class="content-wrap">
          <div
            class="item"
            v-for="(item,index) in lifeDataList"
            :key="index"
            @click="selectType(index)"
            :class="{active:currentLife === index}"
          >
            <img v-lazy="item.src" alt />
            <div class="text">{{item.title}}</div>
          </div>
        </div>
      </div>
      <div class="row3" v-if="!$route.params.id">
        <div class="txt">
          <div class="title">科技赋能园艺，智能创造生活</div>
          <div class="sub-title">智慧的本质,是一种生活方式，轻松、有趣、省心，彩虹疏让种植从未这么简单。</div>
        </div>
        <div class="fan-carousel">
          <div
            class="item"
            v-for="item in lifeDataList2"
            :key="item.id"
            :style="{backgroundImage:`url(${item.src})`}"
          >
            <div class="modal">{{item.title}}</div>
            <div class="btn">{{item.title}}</div>
          </div>
        </div>
      </div>
      <div class="life-details" v-else>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLife: null,
      lifeDataList: [
        {
          title: "鲜活蔬菜，即采即食",
          src: require("../../assets/2_2_1.png")
        },
        {
          title: "寓教娱乐，培养孩子综合素质",
          src: require("../../assets/2_2_2.png")
        },
        {
          title: "生物制氧，大自然般的氧吧",
          src: require("../../assets/2_2_3.png")
        },
        {
          title: "绿色美化，鸟语花香的世外桃源",
          src: require("../../assets/2_2_4.png")
        },
        {
          title: "净化加湿-植物蒸腾，双向调节",
          src: require("../../assets/2_2_5.png")
        },
        {
          title: "平缓焦虑，解决自然愉悦心情",
          src: require("../../assets/2_2_6.png")
        }
      ],
      lifeDataList2: [
        { id: 10, title: "物联网", src: require("../../assets/2_3_1.png") },
        { id: 11, title: "大数据", src: require("../../assets/2_3_2.png") },
        { id: 12, title: "人工智能", src: require("../../assets/2_3_3.png") },
        { id: 13, title: "工业设计", src: require("../../assets/2_3_4.png") },
        { id: 14, title: "品种选育", src: require("../../assets/2_3_5.png") },
        { id: 15, title: "光学生活", src: require("../../assets/2_3_6.png") }
      ]
    };
  },
  methods: {
    selectType(index) {
      if (this.currentLife === index) {
        this.currentLife = null;
      } else {
        this.currentLife = index;
      }
      this.$router.push({
        name: "life-details",
        params: {
          id: "11"
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
#life-wrap {
  > .life {
    > .row1 {
      max-width: 1920px;
      height: 6.12rem;
      background-image: url("../../assets/2_1.png");
      background-size: 100% 100%;
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
    > .row2 {
      max-width: 1440px;
      margin: 0 auto;
      > .txt {
        height: 2.75rem;
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
      > .content-wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        // margin-bottom: 0.48rem;
        > .item {
          width: 5.89rem;
          max-width: 442px;
          height: 4.71rem;
          max-height: 353px;
          cursor: pointer;
          background: rgba(246, 246, 246, 1);
          border-radius: 4px;
          margin-bottom: 0.48rem;
          &:hover {
            > .text {
              color: #ffffff;
              background-color: #19ab64;
            }
          }
          &.active {
            > .text {
              color: #ffffff;
              background-color: #30c672;
            }
          }
          > img {
            width: 100%;
            height: 3.88rem;
            max-height: 291px;
            vertical-align: middle;
          }
          > .text {
            max-height: 62px;
            height: 0.83rem;
            color: #333;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
          }
        }
      }
    }
    > .row3 {
      max-width: 1440px;
      margin: 0 auto 1.5rem;
      > .txt {
        height: 2.25rem;
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
      > .fan-carousel {
        height: 9.4rem;
        height: 705px;
        display: flex;
        > .item {
          width: 16.66%;
          transition: all 0.3s linear;
          position: relative;
          > .btn {
            width: 100%;
            height: 72px;
            line-height: 72px;
            text-align: center;
            background-color: #19ab64;
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 24px;
            color: #ffffff;
            opacity: 0;
            transition: all 0.3s linear;
          }
          > .modal {
            width: 100%;
            height: 100%;
            background-color: rgba(25, 171, 100, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            color: #ffffff;
            opacity: 1;
            transition: all 0.3s linear;
          }
          &:hover {
            width: 370px;
            > .btn {
              opacity: 1;
            }
            > .modal {
              opacity: 0;
            }
          }
        }
      }
    }
  }
}
</style>