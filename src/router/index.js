import { createRouter, createWebHashHistory } from 'vue-router'

const Common = () => import(/* webpackChunkName: "Common" */ '../components/Common')

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login')
  },
  {
    path: '/',
    component: Common,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '../views/Index')
      },
      {
        path: '/shop',
        name: 'shop',
        props: route => ({ query: route.query.typeId }),
        component: () => import(/* webpackChunkName: "index" */ '../views/shop/Shop')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'hash',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth'
        }
      }
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

export default router
