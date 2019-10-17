<template>
  <div id="life-wrap">
    <div class="life" v-if="!$route.params.id">
      <div class="row1">
        <img style="width:100%;height:100%" src="../../assets/u86.png" alt />
      </div>
      <div class="row2">
        <h4 class="title">多姿多彩的时尚生活</h4>
        <div class="content-wrap">
          <div class="item" @click="selectType">
            <img src="../../assets/u198.png" alt />
            <div class="text">鲜活蔬菜，即采即食</div>
          </div>
          <div class="item">
            <img src="../../assets/u198.png" alt />
            <div class="text">鲜活蔬菜，即采即食</div>
          </div>
          <div class="item">
            <img src="../../assets/u198.png" alt />
            <div class="text">鲜活蔬菜，即采即食</div>
          </div>
          <div class="item">
            <img src="../../assets/u198.png" alt />
            <div class="text">鲜活蔬菜，即采即食</div>
          </div>
          <div class="item">
            <img src="../../assets/u198.png" alt />
            <div class="text">鲜活蔬菜，即采即食</div>
          </div>
          <div class="item">
            <img src="../../assets/u198.png" alt />
            <div class="text">鲜活蔬菜，即采即食</div>
          </div>
        </div>
      </div>
    </div>
    <div class="life-details" v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    selectType() {
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
      height: 7rem;
    }
    > .row2 {
      > .title {
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        font-size: 0.3rem;
      }
      > .content-wrap {
        width: 11.4rem;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-items: center;
        > .item {
          margin: 0.2rem 0.1rem;
          width: 3.6rem;
          height: 3.8rem;
          cursor: pointer;
          > img {
            width: 100%;
            height: 3rem;
            vertical-align: top;
          }
          > .text {
            height: 0.8rem;
            background-color: #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>