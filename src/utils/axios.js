import axios from "axios";
import { Message } from 'element-ui';

axios.defaults.timeout = 3000; // 接口请求超时时间设置（3秒）

export default {
  get: (path, params, config) => {
    return new Promise((resolve, reject) => {
      axios
        .get(path, {
          headers: {
            ...config,
            "Content-Type": "application/json;charset=UTF-8"
          },
          params: params
        })
        .then(res => {
          if (res.status === 200 && res.data.code === 200) {
            resolve(res.data);
          } else {
            Message.error({
              message: res.data && res.data.message,
              duration: 3000
            });
            reject(res.data);
          }
        })
        .catch(error => {
          Message.error({
            message: error.message,
            duration: 3000
          });
          reject(error);
        });
    });
  },
  post: (path, params, config) => {
    return new Promise((resolve, reject) => {
      axios
        .post(path, params, {
          ...config,
          headers: {
            "Content-Type": "application/json;charset=UTF-8"
          }
        })
        .then(res => {
          if (res.status === 200 && res.data.code === 200) {
            resolve(res.data);
          } else {
            Message.error({
              message: res.data && res.data.message,
              duration: 3000
            });
            reject(res.data);
          }
        })
        .catch(error => {
          Message.error({
            message: error.message,
            duration: 3000
          });
          reject(error.message);
        });
    });
  },
  postForm: (path, params) => {
    return new Promise((resolve, reject) => {
      axios
        .post(path, params, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          // 提交前更改格式
          transformRequest: [
            function (data) {
              let ret = "";
              for (const it in data) {
                ret +=
                  encodeURIComponent(it) +
                  "=" +
                  encodeURIComponent(data[it]) +
                  "&";
              }
              return ret.substr(0, ret.length - 1);
            }
          ]
        })
        .then(res => {
          if (res.status === 200 && res.data.code === 200) {
            resolve(res.data);
          } else {
            Message.error({
              message: res.data && res.data.message,
              duration: 3000
            });
            reject(res.data);
          }
        })
        .catch(error => {
          Message.error({
            message: error.message,
            duration: 3000
          });
          reject(error.message);
        });
    });
  },
};
