<template>
  <div id="life-details">
    <div class="header">
      <span class="title">当前位置:</span>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/life' }">走进彩生活</el-breadcrumb-item>
        <el-breadcrumb-item>文章详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="contnet-wrap">
      <div class="row1">
        <div class="left"></div>
        <div class="right"></div>
      </div>
      <div class="txt">
        <p>您是否将蔬菜洗了一遍又一遍</p>
        <p>依然担心？</p>
        <p>盐水泡、碱水浸，多种办法试了又试，任然担心</p>
      </div>
      <div class="row2">
        <p>
          <span>污水灌溉</span>
          <span>土壤污染</span>
          <span>有害物质</span>
        </p>
        <p>
          <span>催熟剂</span>
          <span>长途运输</span>
          <span>蔬菜放冰箱</span>
        </p>
      </div>
      <div class="txt">
        <div class="title">帮助人们减少焦虑</div>
        <p>“彩虹蔬 ”智慧植物生态系统</p>
        <p>从源头把控蔬菜品质</p>
        <p>远离污染的蔬菜，</p>
        <p>让您吃得放心</p>
        <p></p>
      </div>
      <div class="row3"></div>
      <div class="txt">
        <div class="title">鲜活蔬菜 即采即食</div>
        <p>现种、现收、现吃无品质变化</p>
        <p>无水分流失无维生素流失</p>
        <p>蔬菜采摘后维生素每天流失</p>
        <p></p>
      </div>
      <div class="row4"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style lang="less" scoped>
#life-details {
  margin-top: 0.52rem;
  > .header {
    width: 1158px;
    margin: 0 auto;
    height: 1.06rem;
    display: flex;
    align-items: center;
    font-size: 0.18rem;
    height: 0.54rem;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 0.64rem;
    > .title {
      margin-right: 0.1rem;
    }
  }
  > .contnet-wrap {
    > .row1 {
      height: 475px;
      background-image: url("../../../assets/life_details/1/1_bg.png");
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      > .left {
        width: 672px;
        height: 100%;
        background-image: url("../../../assets/life_details/1/1_1.png");
        background-size: 100% 100%;
        margin-right: 9px;
      }
      > .right {
        width: 477px;
        height: 100%;
        background-image: url("../../../assets/life_details/1/1_2.png");
        background-size: 100% 100%;
      }
    }
    > .txt {
      width: 1158px;
      margin: 0.6rem auto 0.8rem;
      > .title {
        color: #19ab64;
        font-size: 0.22rem;
        height: 0.36rem;
        line-height: 0.36rem;
      }
      > p {
        height: 0.38rem;
        line-height: 0.38rem;
        font-size: 0.16rem;
        color: #333333;
      }
    }
    > .row2 {
      width: 1132px;
      height: 577px;
      margin: 0 auto;
      background-image: url("../../../assets/life_details/1/2_1.png");
      background-size: 100% 100%;
      position: relative;
      > p {
        font-size: 16px;
        height: 16px;
        line-height: 16px;
        position: absolute;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-around;
        &:nth-child(1) {
          top: 50%;
        }
        &:nth-child(2) {
          top: 100%;
        }
        > span:nth-child(2) {
          margin: 0 85px;
        }
      }
    }
    > .row3 {
      width: 1158px;
      height: 353px;
      margin: 0 auto;
      background-image: url("../../../assets/life_details/1/3_1.png");
      background-size: 100% 100%;
    }
    > .row4 {
      width: 1158px;
      height: 500px;
      margin: 0 auto;
      background-image: url("../../../assets/life_details/1/4_1.png");
      background-size: 100% 100%;
      margin-bottom: 1rem;
    }
  }
}
</style>
