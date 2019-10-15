//查询新闻
export function queryNewsList(params) {
  return new Promise(resolve => {
    setTimeout(() => {
      const resData = {
        total: 2,
        data: [
          {
            id: "1",
            title: "田园理想生活图鉴 | 大好时光，怎能浪费在都市高墙里！",
            createTime: "2019-09-03"
          },
          {
            id: "2",
            title: "营养液调配视频2",
            createTime: "2019-09-03"
          },
          {
            id: "3",
            title: "营养液调配视频3",
            createTime: "2019-09-03"
          }
        ],
        code: 0,
        msg: null
      };
      console.log(params);
      resolve(resData);
    }, 1000);
  })
}

//查询推荐文章
export function queryRecommendNewsList(params) {
  return new Promise(resolve => {
    setTimeout(() => {
      const resData = {
        total: 2,
        data: [
          {
            id: "1",
            title: "营养液调配视频1",
            createTime: "2019-09-03"
          },
          {
            id: "2",
            title: "营养液调配视频2",
            createTime: "2019-09-03"
          },
          {
            id: "3",
            title: "营养液调配视频3",
            createTime: "2019-09-03"
          }
        ],
        code: 0,
        msg: null
      };
      resolve(resData);
    }, 1000);
  })
}