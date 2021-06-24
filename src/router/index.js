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
        component: () => import(/* webpackChunkName: "my-account" */ '../views/ucenter/MyAccount')
      },
      {
        path: '/order-list',
        name: 'orderList',
        component: () => import(/* webpackChunkName: "my-account" */ '../views/order/OrderList')
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
        component: () => import(/* webpackChunkName: "order" */ '../views/order/OrderReview')
      },
      {
        path: '/order-detail',
        name: 'order-detail',
        component: () => import(/* webpackChunkName: "order" */ '../views/order/OrderDetail')
      },
      {
        path: '/pay-page',
        name: 'pay-page',
        component: () => import(/* webpackChunkName: "order" */ '../views/order/PayPage')
      },
      {
        path: '/pay-res',
        name: 'pay-success',
        component: () => import(/* webpackChunkName: "order" */ '../views/order/PaySuccess')
      },
      {
        path: '/growing',
        name: 'growing',
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
