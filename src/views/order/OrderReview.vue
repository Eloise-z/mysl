<!--
*Author: Eloise
*Date: 2021-06-21 12:31
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
              <router-link to="/my-account"> 用户中心</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/order-list"> 订单列表</router-link>
            </li>
            <li class="breadcrumb-item"> 评价订单</li>
          </ul>
          <h2>评价订单</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="order-review">
    <div class="container">
      <div class="row" style="margin: 30px">
        <div class="col-lg-12">
          <p class="font-weight-bold" style="font-size: 30px;color: #28a745">确认收货成功</p>
          <p class="font-weight-bold">{{ reviewInfo.goodName }}</p>
        </div>
        <div class="col-lg-12 mt-5">
          <form>
            <div class="form-group">
              <label for="review-star">请对商品进行评价</label>
              <select class="form-control w-25" id="review-star" v-model="reviewInfo.crDegree">
                <option :value="1">好评</option>
                <option :value="2">中评</option>
                <option :value="3">差评</option>
              </select>
            </div>
            <div class="form-group">
              <label for="review-text">评价内容</label>
              <textarea v-model="reviewInfo.crText" class="form-control" id="review-text" rows="3"></textarea>
            </div>
            <div class="form-group mt-5">
              <button v-if="reviewInfo.flag" type="button" class="btn btn-primary mr-3" @click="submit()">修改评价</button>
              <button v-if="!reviewInfo.flag" type="button" class="btn btn-primary mr-3" @click="submit()">提交评价</button>
              <button type="button" class="btn" @click="$router.back()">跳过评价</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import goodsApi from '@/api/goods'

export default {
  name: 'OrderReview',
  data () {
    return {
      reviewInfo: {
        userId: '', // 用户编号
        orderId: '', // 订单编号
        crDegree: '', // 1好评 2中评 3差评
        crText: '', // 评论内容
        flag: false // 判断用户是否评价过
      }
    }
  },
  created () {
    this.reviewInfo.userId = this.$route.query.userId
    this.reviewInfo.orderId = this.$route.query.orderId
    this.reviewInfo.crDegree = this.$route.query.crDegree
    this.reviewInfo.crText = this.$route.query.crText
    if (this.reviewInfo.crDegree) {
      this.reviewInfo.flag = true
    }
  },
  methods: {
    submit () {
      if (this.reviewInfo.flag) {
        goodsApi.updateReview(this.reviewInfo).then((response) => {
          if (response.data.code === 0) {
            this.$notify({
              title: '成功',
              message: '修改评价成功！',
              type: 'success',
              duration: '5000'
            })
            this.reviewInfo.flag = false
            if (this.$route.query.flag) {
              // 跳转到个人中心
              this.$router.push({
                path: '/my-account',
                query: { userId: this.reviewInfo.userId }
              })
            } else {
              // 跳转到我的农场
              this.$router.push({ path: '/my-farm' })
            }
          } else {
            this.$notify({
              title: '错误',
              message: '修改评价失败！',
              type: 'error',
              duration: '5000'
            })
          }
        })
      } else {
        goodsApi.addReview(this.reviewInfo).then((response) => {
          if (response.data.code === 0) {
            this.$notify({
              title: '成功',
              message: '评价成功！',
              type: 'success',
              duration: '5000'
            })
            if (this.$route.query.flag) {
              // 跳转到个人中心
              this.$router.push({
                path: '/my-account',
                query: { userId: this.reviewInfo.userId }
              })
            } else {
              // 跳转到我的农场
              this.$router.push({ path: '/my-farm' })
            }
          } else {
            this.$notify({
              title: '错误',
              message: '评价失败！',
              type: 'error',
              duration: '5000'
            })
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
