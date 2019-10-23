<template>
  <div id="about">
    <div class="header">
      <div class="title">了解彩虹蔬，了解更多我们</div>
      <div class="sub-title">这里是副标题，我也不知道写什么，这里是副标题</div>
    </div>
    <div class="text-wrap">
      <div class="title">了解家庭种植</div>
      <p>深圳中琛源科技股份有限公司，成立于2012年4月,是国内领先的数字智能应用服务提供商。中琛源始终秉承“需求决定市场、市场引领技术、技术指导市场”的理念,依托“移动互联、云计算、大数据”等核心技术，专注数字技术的自主创新与应用服务,深度融合实体经济的市场需求,为企业级客户提供安全可靠、高速稳定的智能应用服务,让数据创造更多价值,推动行业数字化、智能化发展。</p>
      <p>公司深耕智慧物联、云计算、大数据、5G、区块链等信息技术领域，具有大数据分析和挖掘、智能应用的综合能力，并将各系统间业务流融合贯通，形成了以科技创新驱动公司业务发展的系统生态圈。</p>
      <p>公司将持续整合更多的数字化服务应用，进一步深化和创新数字化融合服务体系，在数据业务与应用领域、数字内容服务领域、物联网集成与应用领域、大数据分析与应用领域进行深耕细作，立志成为企业级数字智能应用服务的领航者</p>
      <img src="../../assets/5_2.png" alt />
    </div>
    <div class="contact-wrap">
      <div class="title">联系我们</div>
      <div class="content-wrap">
        <div class="map-wrap">
          <baidu-map
            class="baidu-map-container"
            :center="{lng: 113.957576, lat: 22.53698}"
            :zoom="16"
          >
            <bm-marker
              :position="{lng: 113.957576, lat: 22.53698}"
              :dragging="true"
              animation="BMAP_ANIMATION_BOUNCE"
            ></bm-marker>
          </baidu-map>
        </div>
        <div class="info">
          <div class="item">
            <p>公司地址</p>
            <span>广东省深圳市南山区深圳湾生态科技园11栋B座11楼</span>
          </div>
          <div class="item">
            <p>公司总机</p>
            <span>0755-6699123</span>
          </div>
          <div class="item">
            <p>热线电话</p>
            <span>400-101-5108</span>
          </div>
          <div class="item">
            <p>邮箱</p>
            <span>xiezzh@ibumobile.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
#about {
  > .header {
    height: 6.12rem;
    background-image: url("../../assets/5_1.png");
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #666;
    > .title {
      line-height: 0.32rem;
      height: 0.32rem;
      font-size: 0.32rem;
      font-weight: 700;
      margin-bottom: 0.26rem;
    }
    > .sub-title {
      height: 0.18rem;
      line-height: 0.18rem;
      font-size: 0.18rem;
    }
  }
  > .text-wrap {
    max-width: 1200px;
    margin: 0 auto;
    color: #333333;
    > .title {
      font-size: 20px;
      height: 1rem;
      line-height: 1rem;
      border-bottom: 1px solid #e5e5e5;
    }
    > p {
      color: #666666;
      line-height: 28px;
      margin: 30px 47px;
      text-indent: 35px;
    }
    > img {
      width: 1105px;
      height: 357px;
    }
  }
  > .contact-wrap {
    max-width: 1200px;
    margin: 0 auto;
    color: #333333;
    margin-bottom: 1rem;
    > .title {
      font-size: 20px;
      height: 1rem;
      line-height: 1rem;
      border-bottom: 1px solid #e5e5e5;
    }
    > .content-wrap {
      height: 357px;
      display: flex;
      justify-content: center;
      margin-top: 64px;
      > .map-wrap {
        width: 641px;
        height: 100%;
        > .baidu-map-container {
          height: 100%;
        }
      }
      > .info {
        width: 509px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        > .item {
          margin-left: 60px;
          font-size: 16px;
          line-height: 30px;
          > p {
            color: #333;
          }
          > span {
            color: #666;
          }
        }
      }
    }
  }
}
</style>
