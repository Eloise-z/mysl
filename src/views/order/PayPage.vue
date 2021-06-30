<!--
*Author: Eloise
*Date: 2021-06-21 12:48
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
            <li class="breadcrumb-item active"> 支付</li>
          </ul>
          <h2>支付</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="paycode">
    <div class="container">
      <div class="shadow p-3 mb-5 bg-white rounded mt-5">
        <form class="form-horizontal" role="form">
          <div class="top-tip">
            <div class="border-green">
              <div class="row">
                <div class="col-6"><p class="ml-2">订单提交成功，请尽快付款！</p></div>
                <div class="col-6"><p class="ml-2 text-right">应付金额
                  <span class="font-weight-bold" style="color: #e31613;font-size: 18px">{{ orderInfo.totalpay }}
                </span>元
                </p></div>
              </div>
              <p class="ml-2">订单编号：{{ orderInfo.orderId }}</p>
            </div>
          </div>
          <hr>
          <div class="row" style="margin-bottom: 50px; margin-top: 50px">
            <div class="paycode" style="margin: 0 auto">
              <el-alert
                title="测试阶段，点击图片即视为支付"
                type="info"
                :closable="false"
                show-icon>
              </el-alert>
              <img src="../../assets/images/paycode.png" @click="payment()" alt="图片找不到了">
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="tip text-center" style="text-align: center">
              <p class="ml-5"><i class="fas fa-qrcode p-2"></i>请使用微信或支付宝扫一扫，扫描二维码支付</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import orderApi from '@/api/order'
import goodsApi from '@/api/goods'
import { ElMessage, ElLoading } from 'element-plus'

export default {
  name: 'PayPage',
  data () {
    return {
      orderId: '', // 订单编号
      goodState: '', // 商品销售类型 0现货 1预售
      orderInfo: {} // 订单信息
    }
  },
  created () {
    this.orderId = this.$route.query.orderId
    this.goodState = this.$route.query.goodState
    this.getOrderInfo()
  },
  methods: {
    // 获取订单信息
    getOrderInfo () {
      const loading = ElLoading.service({
        fullscreen: true,
        text: '正在加载订单信息..请稍后'
      })
      orderApi.getOrderById(this.orderId).then((response) => {
        loading.close()
        this.orderInfo = response.data.order
        console.log(this.orderInfo)
        console.log(this.goodState)
        if (this.goodState === '1') {
          this.$notify({
            title: '预售认证',
            message: '您当前购买的是预售产品，付款即可享受全程溯源、正品保证服务。',
            type: 'info',
            duration: 10000
          })
        }
      })
    },
    // 支付
    payment () {
      const loading = ElLoading.service({
        fullscreen: true,
        text: '正在获取支付信息，请不要关闭页面...'
      })
      orderApi.orderPayment(this.orderId).then((response) => {
        loading.close()
        if (response.data.code === 0) { // 支付成功
          ElMessage.success('支付成功！')
          this.$router.push({
            path: '/pay-res',
            query: { totalpay: response.data.totalpay }
          })
          // 支付成功后生成产品码
          if (this.goodState === '1') {
            this.generateTgCode() // 预售产品才生成
          } else {
            this.$notify({
              title: '提示',
              message: '购买预售产品，正品保证，全程溯源。欢迎购买预售产品！',
              type: 'info',
              duration: 5000
            })
          }
        } else {
          ElMessage.error('支付失败，请重新支付！')
        }
      })
    },
    // 生成产品码
    generateTgCode () {
      goodsApi.addTrackgoods(this.orderId).then(() => {
        this.$notify({
          title: '溯源码生成成功',
          message: '您购买的是预售商品，唯一产品溯源码已生成！购买预售产品，正品保证，全程溯源。',
          type: 'success',
          duration: 10000
        })
      })
    }
  }
}
</script>

<style scoped>
p{
  margin: 2px;
}
</style>
