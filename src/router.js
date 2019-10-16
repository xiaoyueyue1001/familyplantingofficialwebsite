import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/Index/Index.vue')
    },
    {
      path: '/life',
      name: 'life',
      component: () => import('./views/Life/Life.vue'),
      children: [
        {
          path: ":id",
          name: "life-details",
          component: () => import('./views/Life/components/LifeDetails.vue'),
        }
      ]
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('./views/Product/Product.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/News/News.vue'),
      children: [
        {
          path: ":id",
          name: "news-details",
          component: () => import('./views/News/components/NewsDetails.vue'),
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About/About.vue')
    },
    {
      path: '*',
      redirect: '/index'
    },
  ]
})
