import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login/Login.vue')
    },
    {
      path: '/cms',
      name: 'cms',
      component: () => import('./views/Cms/Cms.vue')
    },
    {
      path: "/app",
      name: "app-details",
      component: () => import('./views/Index/components/AppDetails.vue'),
    },
    {
      path: '/home',
      name: 'home',
      redirect: 'home/index',
      component: () => import('./views/Home/Home.vue'),
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('./views/Index/Index.vue')
        },
        {
          path: 'life',
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
          path: 'product',
          name: 'product',
          component: () => import('./views/Product/Product.vue')
        },
        {
          path: 'news',
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
          path: 'about',
          name: 'about',
          component: () => import('./views/About/About.vue')
        },
      ]
    },

    {
      path: '*',
      redirect: 'home/index'
    },
  ]
})
