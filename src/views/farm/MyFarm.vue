<!--
*Author: Eloise
*Date: 2021-06-21 12:10
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
            <li class="breadcrumb-item active"> 我的农场</li>
          </ul>
          <h2>我的农场</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="land-list">
    <div class="container mt-5">
      <div class="row">
        <!--一个农场块的开始-->
        <div v-for="list in farmlist" :key="list.orderId" class="col-lg-6">
          <div class="land-item shadow p-3 mb-4">
            <div class="row">
              <div class="col-md-6 text-left"><p>{{ list.goodFarm }}</p></div>
              <div class="col-md-6 text-right">
                <p v-if="list.status ===  1">未支付</p>
                <p v-if="list.status ===  2">未接单</p>
                <p v-if="list.status ===  3">未发货</p>
                <p v-if="list.status ===  4">未签收</p>
                <p v-if="list.status ===  5">已完成</p>
                <p v-if="list.status ===  6">取消订单</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-md-4 text-left">
                <img :src="list.goodPicture" style="max-width: 150px" alt="图片不见了">
              </div>
              <div class="col-md-8 text-left">
                <div class="row">
                  <div class="col-md-8">
                    <p>{{ list.goodName }}</p>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6"><p>优惠：<span class="font-weight-bold">￥{{ list.discount }}</span></p></div>
                  <div class="col-md-6"><p>实付：<span class="font-weight-bold">￥{{ list.totalpay }}</span></p></div>
                </div>
              </div>
            </div>
            <hr>
            <div class="row w-75 text-center" style="margin: 0 auto">
              <div class="col-md-4">
                <P v-if="list.status === 5" style="display: inline;">
                  <router-link :to="{ path: '/order-review', query: { orderId: list.orderId, userId: list.userId} }">
                    评价
                  </router-link>
                </P>
                <P v-if="list.status !== 5" style="display: inline;">
                  不可评价
                </P>
              </div>
              <div class="col-md-4">
                <router-link class="cart" :to="{ path: '/shop-detail', query: { goodId: list.goodId } }">
                  查看商品详情
                </router-link>
              </div>
              <div class="col-md-4">
                <router-link :to="{ path: '/growing', query: { goodId: list.goodId} }">
                  查看农场动态
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!--一个农场块的结束-->
        <div class="col-lg-12 text-center mt-3 mb-5">
          <a role="button" class="btn btn-outline-primary w-100" @click="flag=true;getMyfarmList()">加载更多</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// 引入调用js-cookie
import cookie from 'js-cookie'
import orderApi from '@/api/order'

export default {
  name: 'MyFarm',
  data () {
    return {
      userId: '',
      farmlist: [],
      limit: 2, // 每页显示数量
      flag: false // 点击加载更多时变为true
    }
  },
  created () {
    var userStr = cookie.get('agriculture_ucenter')
    if (userStr) { // 已登录
      this.userId = JSON.parse(userStr).userId
    } else { // 未登录
      // 跳转到登录页面
      this.$router.push({ path: '/login' })
    }
    // 获取我的农场
    this.getMyfarmList()
  },
  methods: {
    getMyfarmList () {
      if (this.flag) {
        this.limit += 4
      }
      orderApi.getPreOrderByUserId(this.userId, this.limit).then((response) => {
        this.farmlist = response.data.order
      })
    }
  }
}
</script>

<style scoped>

</style>
