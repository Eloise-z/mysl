import { createRouter, createWebHashHistory } from 'vue-router'
import cookie from 'js-cookie'
import { ElMessage } from 'element-plus'

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
        props: route => ({ query: route.query }),
        component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop')
      },
      {
        path: '/shop-detail',
        name: 'shop-detail',
        props: route => ({ query: route.query.goodId }),
        component: () => import(/* webpackChunkName: "shop" */ '../views/shop/ShopDetail')
      },
      {
        path: '/my-account',
        name: 'my-account',
        props: route => ({ query: route.query.userId }),
        component: () => import(/* webpackChunkName: "my-account" */ '../views/ucenter/MyAccount')
      },
      {
        path: '/order-list',
        name: 'orderList',
        props: route => ({ query: route.query.userId }),
        component: () => import(/* webpackChunkName: "my-account" */ '../views/order/OrderList')
      },
      {
        path: '/modifypwd',
        name: 'modifypwd',
        props: route => ({ query: route.query.userId }),
        component: () => import(/* webpackChunkName: "my-account" */ '../views/ucenter/ModifyPwd')
      },
      {
        path: '/addr',
        name: 'addr',
        props: route => ({ query: route.query.userId }),
        component: () => import(/* webpackChunkName: "my-account" */ '../views/ucenter/AddressManage')
      },
      {
        path: '/userinfo',
        name: 'userinfo',
        props: route => ({ query: route.query.userId }),
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
        props: route => ({ query: route.query.shipId }),
        component: () => import(/* webpackChunkName: "my-account" */ '../views/ucenter/AddAddress')
      },
      {
        path: '/findpwd',
        name: 'findpwd',
        component: () => import(/* webpackChunkName: "my-account" */ '../views/ucenter/FindPwd')
      },
      {
        path: '/tour',
        name: 'tour',
        component: () => import(/* webpackChunkName: "tour" */ '../views/tour/Tour')
      },
      {
        path: '/search',
        name: 'search',
        component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Search')
      },
      {
        path: '/origin',
        name: 'origin',
        component: () => import(/* webpackChunkName: "origin" */ '../views/origin/ProductOrigin')
      },
      {
        path: '/origin-res',
        name: 'origin-res',
        props: route => ({ query: route.query.tgCode }),
        component: () => import(/* webpackChunkName: "origin" */ '../views/origin/OriginRes')
      },
      {
        path: '/landmark',
        name: 'landmark',
        component: () => import(/* webpackChunkName: "rural" */ '../views/rural/LandMark')
      },
      {
        path: '/tour-detail',
        name: 'tour-detail',
        props: route => ({ query: route.query.toId }),
        component: () => import(/* webpackChunkName: "tour" */ '../views/tour/TourDetail')
      },
      {
        path: '/wishlist',
        name: 'wishlist',
        component: () => import(/* webpackChunkName: "order" */ '../views/order/WishList')
      },
      {
        path: '/my-farm',
        name: 'my-farm',
        component: () => import(/* webpackChunkName: "farm" */ '../views/farm/MyFarm')
      },
      {
        path: '/order-generate',
        name: 'order-generate',
        component: () => import(/* webpackChunkName: "order" */ '../views/order/OrderGenerate')
      },
      {
        path: '/order-review',
        name: 'order-review',
        props: route => ({ query: route.query }),
        component: () => import(/* webpackChunkName: "order" */ '../views/order/OrderReview')
      },
      {
        path: '/order-detail',
        name: 'order-detail',
        props: route => ({ query: route.query.orderId }),
        component: () => import(/* webpackChunkName: "order" */ '../views/order/OrderDetail')
      },
      {
        path: '/pay-page',
        name: 'pay-page',
        props: route => ({ query: route.query }),
        component: () => import(/* webpackChunkName: "order" */ '../views/order/PayPage')
      },
      {
        path: '/pay-res',
        name: 'pay-success',
        props: route => ({ query: route.query.totalpay }),
        component: () => import(/* webpackChunkName: "order" */ '../views/order/PaySuccess')
      },
      {
        path: '/growing',
        name: 'growing',
        props: route => ({ query: route.query.goodId }),
        component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Growing')
      },
      {
        path: '/emergency',
        name: 'emergency',
        component: () => import(/* webpackChunkName: "rural" */ '../views/rural/Emergency')
      },
      {
        path: '/emeradd',
        name: 'emeradd',
        component: () => import(/* webpackChunkName: "rural" */ '../views/rural/EmerAdd')
      },
      {
        path: '/sale-list',
        name: 'sale-list',
        component: () => import(/* webpackChunkName: "sale" */ '../views/sale/SaleList')
      },
      {
        path: '/sale-add',
        name: 'sale-add',
        component: () => import(/* webpackChunkName: "sale" */ '../views/sale/SaleAdd')
      },
      {
        path: '/sale-class',
        name: 'sale-class',
        component: () => import(/* webpackChunkName: "sale" */ '../views/sale/SaleClass')
      },
      {
        path: '/sale-growing',
        name: 'sale-growing',
        component: () => import(/* webpackChunkName: "sale" */ '../views/sale/SaleGrowing')
      },
      {
        path: '/sale-order',
        name: 'sale-order',
        component: () => import(/* webpackChunkName: "sale" */ '../views/sale/SaleOrder')
      },
      {
        path: '/sale-order-detail',
        name: 'sale-order-detail',
        component: () => import(/* webpackChunkName: "sale" */ '../views/sale/SaleOrderDetail')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "index" */ '../views/404')
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

/* 让页面切换时滚动到顶部 */
router.afterEach(() => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

// 去 personal 中的页面时要判断是否登录
router.beforeEach((to, from, next) => {
  var personal = ['/wishlist', '/emeradd', '/my-account', '/order-generate', '/order-list', '/my-farm']
  // true 表示需要检查是否登录
  if (personal.includes(to.fullPath)) {
    // 从cookie中获取用户信息
    var userStr = cookie.get('agriculture_ucenter')
    // 有数据，说明登录了的
    if (userStr) {
      next()
    } else {
      ElMessage.warning('登录后才能访问该页面！')
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
