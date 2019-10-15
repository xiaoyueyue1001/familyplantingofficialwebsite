<template>
  <div id="news">
    <div class="img-wrap">
      <img style="width:100%;height:100%" src="../../assets/u395.jpg" alt />
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
            <div class="item" v-for="item in recommendNewsList" :key="item.id">
              <div class="title">{{item.title}}</div>
              <div class="time">{{item.createTime}}</div>
            </div>
          </div>
          <el-pagination
            ref="pagination"
            background
            :small="true"
            :page-sizes="[5, 10, 15]"
            :page-size="5"
            :pagerCount="5"
            :hide-on-single-page="true"
            layout="prev, pager, next,sizes,jumper"
            :total="totalNews"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </div>
      </div>
      <div class="right">
        <div class="title">文章推荐</div>
        <div class="content-wrap">
          <div class="item" v-for="item in recommendNewsList" :key="item.id">
            <div class="title">{{item.title}}</div>
            <div class="time">{{item.createTime}}</div>
          </div>
        </div>
      </div>
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
      this.recommendNewsList = res.data;
    });
  },
  methods: {
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
        pageSize: this.currentPageSize,
        page: this.currentPage
      }).then(res => {
        this.newList = res.data;
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
#news {
  > .img-wrap {
    height: 7rem;
  }
  > .news-wrap {
    height: 7.5rem;
    display: flex;
    justify-content: center;
    > .left {
      width: 7.5rem;
      height: 100%;
      margin-right: 0.2rem;
      background-color: #eee;
      > .type-list {
        height: 1rem;
        display: flex;
        align-items: center;
        margin-left: 0.2rem;
        > .item {
          font-size: 0.2rem;
          color: #ccc;
          margin-right: 0.2rem;
          cursor: pointer;
          &.active {
            color: #666;
          }
        }
      }
      > .news-wrap {
        > .items {
          height: 4rem;
          > .item {
            cursor: pointer;
            height: 1rem;
          }
        }
      }
    }
    > .right {
      width: 6rem;
      height: 100%;
      background-color: #eee;
      > .title {
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.3rem;
        margin-left: 0.2rem;
      }
      > .content-wrap {
        max-height: 4.8rem;
        > .item {
          height: 0.6rem;
          display: flex;
          padding: 0 0.2rem;
          cursor: pointer;
          > .title {
            flex: 2;
          }
          > .time {
            flex: 1;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
