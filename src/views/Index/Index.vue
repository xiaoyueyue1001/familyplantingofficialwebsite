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
export default {
  data() {
    return {
      newList: []
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
</style>
