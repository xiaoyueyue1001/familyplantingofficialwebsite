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
          if (res.status === 200 && res.data.code === 0) {
            resolve(res.data);
          } else {
            Message.error({
              messgae: res.data && res.data.msg,
              duration: 3000
            });
            reject(res.data);
          }
        })
        .catch(error => {
          Message.error({
            messgae: error.message,
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
          if (res.status === 200 && res.data.code === 0) {
            resolve(res.data);
          } else {
            Message.error({
              messgae: res.data && res.data.msg,
              duration: 3000
            });
            reject(res.data);
          }
        })
        .catch(error => {
          Message.error({
            messgae: error.message,
            duration: 3000
          });
          reject(error.message);
        });
    });
  }
};
