import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/style/index.less'
import "@/style/iconfont/iconfont.css"; //引入iconfont字体图标
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import "@/utils/wangEditor/wangEditor.js"
// import "@/utils/wangEditor/wangEditor.css"

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
