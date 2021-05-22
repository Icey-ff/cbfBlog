import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from "@/views/HomePage.vue";
import Index from "@/views/Index.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/searchPage',
        name: 'SearchPage',
        // component: resolve => require.ensure([], () => resolve(require('@/views/SearchPage.vue')), 'SearchPage'),
        component: () => import('@/views/SearchPage.vue'),
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/home',
        name: 'HomePage',
        component: HomePage,
        // component: resolve => require.ensure([], () => resolve(require('@/views/HomePage.vue')), 'HomePage'),

        meta: {
          keepAlive: true
        }
      },
      {
        path: '/pigeonhole',
        name: 'Pigeonhole',
        // component: resolve => require.ensure([], () => resolve(require('@/views/Pigeonhole.vue')), 'Pigeonhole'),
        component: () => import('@/views/Pigeonhole.vue'),
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/category',
        name: 'Category',
        component: () => import('@/views/Categories.vue'),
        // component: resolve => require.ensure([], () => resolve(require('@/views/Categories.vue')), 'Category'),
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
        // component: resolve => require.ensure([], () => resolve(require('@/views/About.vue')), 'About'),
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/article/:id',
        name: 'Article',
        component: () => import('@/components/article/Article.vue'),
        // component: resolve => require.ensure([], () => resolve(require('@/components/article/Article.vue')), 'Article'),

        meta: {
          keepAlive: false,

        },
        // beforeEnter: ((to: any, from: any, next: any) => {
        //   console.log(to);
        //   ArticlesService.getArticle(to.params["id"]).then((res) => {
        //     console.log(res.data);
        //     next();
        //   });
        // })
      },
      {
        path: '/categories/:id',
        name: 'Categories',
        component: () => import('@/components/Timeline.vue'),
        // component: resolve => require.ensure([], () => resolve(require('@/components/Timeline.vue')), 'Categories'),

        meta: {
          keepAlive: true
        }
      },
      {
        path: '/tags/:id',
        name: 'Tags',
        component: () => import('@/components/Tags.vue'),
        // component: resolve => require.ensure([], () => resolve(require('@/components/Tags.vue')), 'Tags'),

        meta: {
          noCache: true
        },
        // beforeEnter: ((to: any, from: any, next: any) => {
        //   console.log(to);
        //   // bus.emit('change');
        //   TagsService.getTagPage(to.params["id"]).then((res) => {
        //     console.log(res.data);
        //     next();
        //   });
        // })

      }
    ]
    , redirect: "/home"//设置默认选择的子组件：home
  },

]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to, from) => {
//   console.log(from, to)
// })


export default router
