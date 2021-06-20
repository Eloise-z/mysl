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
      },
      {
        path: '/shop-detail',
        name: 'shop-detail',
        props: route => ({ query: route.query.goodId }),
        component: () => import(/* webpackChunkName: "index" */ '../views/shop/ShopDetail')
      },
      {
        path: '/my-account',
        name: 'my-account',
        component: () => import(/* webpackChunkName: "my-account" */ '../views/ucenter/MyAccount')
      },
      {
        path: '/order-list',
        name: 'orderList',
        component: () => import(/* webpackChunkName: "my-account" */ '../views/ucenter/OrderList')
      },
      {
        path: '/modifypwd',
        name: 'modifypwd',
        component: () => import(/* webpackChunkName: "my-account" */ '../views/ucenter/ModifyPwd')
      },
      {
        path: '/addr',
        name: 'addr',
        component: () => import(/* webpackChunkName: "my-account" */ '../views/ucenter/AddressManage')
      },
      {
        path: '/userinfo',
        name: 'userinfo',
        component: () => import(/* webpackChunkName: "my-account" */ '../views/ucenter/UserInfo')
      },
      {
        path: '/notice',
        name: 'notice',
        component: () => import(/* webpackChunkName: "my-account" */ '../views/ucenter/Notice')
      },
      {
        path: '/add-addr',
        name: 'add-addr',
        component: () => import(/* webpackChunkName: "my-account" */ '../views/ucenter/AddAddress')
      },
      {
        path: '/findpwd',
        name: 'findpwd',
        component: () => import(/* webpackChunkName: "my-account" */ '../views/ucenter/FindPwd')
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
