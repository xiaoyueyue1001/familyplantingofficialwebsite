<template>
  <div id="news-wrap">
    <div class="news" v-if="!$route.params.id">
      <div class="header">
        <div class="title">一起感受植物之美，一起享受种植的乐趣</div>
        <div class="sub-title">这里是副标题，我也不知道写什么，这里是副标题</div>
      </div>
      <div class="news-wrap">
        <div class="left">
          <div class="type-list">
            <div class="item" :class="{active:currentType === 0 }" @click="selectType(0)">新闻动态</div>
            <div class="item" :class="{active:currentType === 1 }" @click="selectType(1)">趣味种植</div>
            <div class="item" :class="{active:currentType === 2 }" @click="selectType(2)">种植教程</div>
          </div>
          <div class="news-wrap">
            <div class="items">
              <div
                class="item"
                v-for="item in newList"
                :key="item.cmsContent.id"
                @click="selectNews(item)"
              >
                <img src="../../assets/4_demo.png" alt />
                <div class="txt">
                  <div class="title">{{item.cmsContent.title}}</div>
                  <div class="sub-title">{{item.cmsContent.subtitle}}</div>
                  <div
                    class="time"
                  >{{item.cmsContent.createTime}}&nbsp;{{item.cmsContent.createUser}}</div>
                </div>
              </div>
            </div>
            <div class="news-pagination">
              <el-pagination
                ref="pagination"
                background
                :page-sizes="[5, 10, 15]"
                :page-size="5"
                :pagerCount="5"
                layout="prev, pager, next,jumper"
                :total="totalNews"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="title">文章推荐</div>
          <div class="content-wrap">
            <div class="item" v-for="item in recommendNewsList" :key="item.cmsContent.id">
              <span class="dot"></span>
              <div class="title">{{item.cmsContent.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="news-details" v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { queryRecommendNewsList, queryNewsList } from "@/api/news";
export default {
  data() {
    return {
      currentType: 0, //当前新闻类型
      newList: [], //新闻列表
      currentPage: 1, //当前分页数
      currentPageSize: 5, //分页大小
      recommendNewsList: [], //推荐文章列表
      totalNews: 100
    };
  },
  created() {
    //查询新闻
    this.queryNewsList();
    //查询推荐文章
    queryRecommendNewsList().then(res => {
      this.recommendNewsList = res.data.content;
    });
  },
  methods: {
    //选择新闻类型
    selectType(select) {
      if (select !== this.currentType) {
        this.currentType = select;
        this.$refs.pagination.handleCurrentChange(1);
      }
    },
    queryNewsList() {
      //检验参数有效性
      if (this.currentPage * (this.currentPage - 1) >= this.totalNews) {
        return;
      }
      queryNewsList({
        type: this.currentType,
        size: this.currentPageSize,
        page: this.currentPage
      }).then(res => {
        this.totalNews = res.data.totalElements;
        this.newList = res.data.content;
      });
    },
    //选择新闻详情
    selectNews(news) {
      delete this.$refs.pagination; //当跳转的时候v-if会清除pagination的Dom结构 导致找不到
      this.$router.push({
        name: "news-details",
        params: {
          id: news.cmsContent.id
        }
      });
    },
    handleSizeChange(value) {
      console.log(`每页 ${value} 条`);
      this.currentPageSize = value;
      this.queryNewsList();
    },
    handleCurrentChange(value, val) {
      console.log(`当前页: ${value}`);
      this.currentPage = value;
      this.queryNewsList();
    }
  }
};
</script>

<style lang="less" scoped>
#news-wrap {
  .news {
    > .header {
      height: 6.12rem;
      background-image: url("../../assets/4_1_1.png");
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
    > .news-wrap {
      width: 1200px;
      margin: 0.6rem auto 0;
      display: flex;
      justify-content: space-between;
      > .left {
        width: 770px;
        height: 100%;
        > .type-list {
          height: 46px;
          display: flex;
          align-items: flex-start;
          border-bottom: 1px solid #e5e5e5;
          > .item {
            font-size: 20px;
            color: #333;
            margin-right: 70px;
            cursor: pointer;
            height: 100%;
            &.active {
              color: #19ab64;
              border-bottom: 1px solid #19ab64;
            }
          }
        }
        > .news-wrap {
          > .items {
            max-height: 1600px;
            > .item {
              cursor: pointer;
              height: 200px;
              display: flex;
              align-items: center;
              border-bottom: 1px solid #e5e5e5;
              > img {
                width: 220px;
                height: 138px;
                margin-right: 30px;
              }
              > .txt {
                flex-grow: 1;
                height: 138px;
                > .title {
                  font-size: 20px;
                  height: 46px;
                  line-height: 46px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  color: #333;
                }
                > .sub-title {
                  font-size: 16px;
                  height: 16px;
                  line-height: 16px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  color: #666;
                }
                > .time {
                  margin-top: 24px;
                  font-size: 12px;
                  color: #aaa;
                }
              }
            }
          }
          > .news-pagination {
            height: 126px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      > .right {
        width: 323px;
        > .title {
          height: 46px;
          font-size: 20px;
          border-bottom: 1px solid #e5e5e5;
        }
        > .content-wrap {
          margin-top: 10px;
          > .item {
            height: 35px;
            line-height: 35px;
            font-size: 16px;
            display: flex;
            align-items: center;
            cursor: pointer;
            > .dot {
              width: 3px;
              height: 3px;
              border-radius: 50%;
              background-color: #19ab64;
              margin-right: 5px;
            }
            > .title {
              color: #333333;
              height: 35px;
              line-height: 35px;
              &:hover {
                color: #19ab64;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
#news-wrap {
  .news {
    .news-pagination {
      .el-pagination {
        display: flex;
        justify-content: center;
        &.is-background .el-pager li:not(.disabled).active {
          background-color: #19ab64;
        }
      }
    }
  }
}
</style>
