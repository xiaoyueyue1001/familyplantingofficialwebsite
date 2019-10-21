import axios from "@/utils/axios";

//登录
export function login() {
  let params = {
    identity: "admin",
    desStr: "EwSSctvjsSycLoylnuKejCSr3s2OGuYM",
    captcha: "",
    sessionId: ""
  }
  return new Promise((resolve, reject) => {
    axios
      .postForm("/smartPlanting/admin/login", params)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}

//查询新闻
export function queryNewsList({ type, page, size }) {
  let channelId = ""
  switch (type) {
    case 0:
      //新闻
      channelId = 1747;
      break;
    case 1:
      //趣味种植
      channelId = 2084;
      break;
    case 2:
      //种植教程
      channelId = 2085;
      break;
  }
  let params = {
    channelIds: [channelId],
    contentSecretId: "",
    contentSecretIds: [],
    contentType: "",
    createEndTime: "",
    createStartTime: "",
    createType: "",
    issueNum: "",
    issueOrg: "",
    issueYear: "",
    key: "",
    keyType: 1,
    modelId: "",
    myself: false,
    orderType: 0,
    page,
    releaseEndTime: "",
    releaseStartTime: "",
    senior: false,
    size,
    status: "",
    update: false
  }
  return new Promise((resolve, reject) => {
    axios
      .post("/smartPlanting/admin/contentext/page", params)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
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
export function queryRecommendNewsList() {
  let params = {
    channelIds: [1747],
    contentSecretId: "",
    contentSecretIds: [],
    contentType: "",
    createEndTime: "",
    createStartTime: "",
    createType: "",
    issueNum: "",
    issueOrg: "",
    issueYear: "",
    key: "",
    keyType: 1,
    modelId: "",
    myself: false,
    orderType: 0,
    page: 1,
    releaseEndTime: "",
    releaseStartTime: "",
    senior: false,
    size: 10,
    status: "",
    update: false
  }
  return new Promise((resolve, reject) => {
    axios
      .post("/smartPlanting/admin/contentext/page", params)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
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

//查询文章详情
export function queryNewsById(params) {
  return new Promise((resolve, reject) => {
    axios
      .get(`/smartPlanting/admin/content/${params.id}`)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}