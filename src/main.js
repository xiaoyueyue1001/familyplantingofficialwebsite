import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/style/index.less'
import "@/style/iconfont/iconfont.css"; //引入iconfont字体图标
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import "@/utils/wangEditor/wangEditor.js"
// import "@/utils/wangEditor/wangEditor.css"
import BaiduMap from 'vue-baidu-map'
import VueLazyload from 'vue-lazyload'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '2RN0RXTPQSVkk3BXDiTxG7c3ABgYMuWz'
})
Vue.use(VueLazyload, {
  error: require("./assets/img_error.png"),
  loading: require("./assets/img_none.png"),
  lazyComponent: true
})

Vue.config.productionTip = false

Vue.use(ElementUI);

//路由守卫  切换页面回到顶部
router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
