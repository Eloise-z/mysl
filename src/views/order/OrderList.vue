<!--
*Author: Eloise
*Date: 2021-06-20 19:11
-->
<template>
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">

          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/index">首页</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/my-account"> 个人中心</router-link>
            </li>
            <li class="breadcrumb-item active"> 订单列表</li>
          </ul>
          <h2>订单列表</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="order-list">
    <div class="container mt-5">
      <div class="row">
        <!--一个订单块开始-->
        <div class="col-lg-6" v-for="list in dataList" :key="list.orderId">
          <div class="order-item shadow p-3 mb-4">
            <div class="row">
              <div class="col-md-6 text-left"><p>{{ list.goodFarm }}</p></div>
              <div class="col-md-6 text-right" v-if="list.status===1"><p>未支付</p></div>
              <div class="col-md-6 text-right" v-if="list.status===2"><p>未接单</p></div>
              <div class="col-md-6 text-right" v-if="list.status===3"><p>未发货</p></div>
              <div class="col-md-6 text-right" v-if="list.status===4"><p>未签收</p></div>
              <div class="col-md-6 text-right" v-if="list.status===5"><p>已完成</p></div>
              <div class="col-md-6 text-right" v-if="list.status===6"><p>取消订单</p></div>
            </div>
            <hr>
            <div class="row">
              <div class="col-md-4 text-left">
                <img :src="list.goodpicture" style="max-width: 150px" alt="">
              </div>
              <div class="col-md-8 text-left">
                <div class="row">
                  <div class="col-md-8"><p>{{ list.goodName }}</p></div>
                  <div class="col-md-4"><p>￥{{ list.goodprice }}</p></div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6"><p>优惠：<span class="font-weight-bold">￥{{ list.discount }}</span></p></div>
                  <div class="col-md-6"><p>实付：<span class="font-weight-bold">￥{{ list.totalpay }}</span></p></div>
                </div>
              </div>
              <hr>
              <div class="row w-75 text-center" style="margin: 0 auto">
                <div class="col-md-3" v-if="list.status===5">
                  <router-link to="/order-review">评价</router-link>
                </div>
                <div class="col-md-3" v-if="list.status===1">
                  <router-link to="/pay-page">去支付</router-link>
                </div>
                <div class="col-md-3"><a role="button">再次购买</a></div>
                <div class="col-md-3"><a @click="deletOrder(list.orderId)">删除订单</a></div>
                <div class="col-md-3"><a @click="orderDetail(list.orderId)">查看详情</a></div>

              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 text-center mt-3 mb-5">
          <a role="button" class="btn btn-outline-primary w-100" @click="flag=true;getDataList()">加载更多</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import centerApi from '@/api/center'
// 引入调用js-cookie
import cookie from 'js-cookie'

export default {
  name: 'OrderList',
  data () {
    return {
      // 条件查询参数
      params: {
        page: 0, // 当前页
        limit: 4, // 每页显示数据数
        userId: ''
      },
      loginInfo: {}, // 用户信息
      // 封装数据
      dataList: [],
      flag: false // 点击加载更多变为true
    }
  },
  created () {
    var userStr = cookie.get('agriculture_ucenter')
    if (userStr) {
      this.loginInfo = JSON.parse(userStr)
    }
    this.params.userId = this.loginInfo.userId
    this.getDataList()
  },
  methods: {
    // 获取数据
    getDataList () {
      if (this.flag === true) {
        this.params.limit += 4
      }
      centerApi.getOrderList(this.params).then((response) => {
        this.dataList = response.data.page
      })
    },
    deletOrder (orderId) {
      if (confirm('是否对此订单进行删除？')) {
        centerApi.deletOrder(orderId).then((response) => {
          if (response.data.code === 0) { // 删除成功
            alert(response.data.msg)
            this.$router.push({ path: '/order-list' })
          } else { // 删除失败
            alert(response.data.msg)
            this.$router.push({ path: '/order-list' })
          }
        })
      } else {
        this.$router.push({ path: '/order-list' })
      }
    },
    orderDetail (orderId) {
      this.$router.push({
        path: '/orderdetail',
        query: { orderId: orderId }
      })
    }
  }
}
</script>

<style scoped>

</style>
