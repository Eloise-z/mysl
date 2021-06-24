<!--
*Author: Eloise
*Date: 2021-06-21 12:22
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
              <router-link to="/order-list"> 订单</router-link>
            </li>
            <li class="breadcrumb-item active"> 生成订单</li>
          </ul>
          <h2>生成订单</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="#">
    <div class="container">
      <div class="row">
        <span style="margin-top: 20px; margin-bottom: 20px; font-size: 23px;">收货信息</span>
      </div>
      <div class="row">
        <form class="form-horizontal" role="form">
          <div class="form-group" style="margin-left: 30px">
            <div class="row">
              <h3>张三 / 15509080002</h3>
            </div>
            <div class="row">
              <h3>四川省 / 成都市 / 双流区</h3>
            </div>
            <div class="row">
              <h3>成都信息工程大学（航空港校区）</h3>
            </div>
            <div class="row">
              <select class="form-control" v-model="orderInfo.shipId">
                <option v-for="list in shipList" :value="list.shipId" :key="list.shipId">
                  {{ list.name }} / {{ list.tel }} / {{ list.provinceCode }}
                  / {{ list.cityCode }} / {{ list.areaCode }} / {{ list.address }}
                </option>
              </select>
            </div>
            <div class="row" style="margin-top: 20px;">
              <label for="remark"><b>备注：</b></label>
              <textarea class="form-control" v-model="orderInfo.remark" id="remark" cols="300" style="width: 600px"
                        rows="2"
                        placeholder="请输入备注"></textarea>
            </div>
          </div>
        </form>
      </div>
      <hr>
      <div class="row">
        <span style="margin-top: 20px; margin-bottom: 20px; font-size: 23px;">支付方式</span>
      </div>
      <div class="row">
        <label id="payway1" class="mr-3" style="border: 2px solid white">
          <img style="height: 50px" src="../../assets/images/eloise/ali-pay.png" alt="图片找不到了">
          <span class="align-middle" style="font-size: 20px;">支付宝支付</span>
          <input v-model="payway" style="display: none" type="radio" name="payway" value="1">
        </label>

        <label id="payway2" class="mr-3" style="border: 2px solid white">
          <img style="height: 50px" src="../../assets/images/eloise/wechat-pay.png" alt="图片找不到了">
          <span class="align-middle" style="font-size: 20px">微信支付</span>
          <input v-model="payway" style="display: none" type="radio" name="payway" value="2">
        </label>

        <label id="payway3" class="mr-3" style="border: 2px solid white">
          <img style="height: 50px; " src="../../assets/images/eloise/qq-pay.png" alt="图片找不到了">
          <span class="align-middle" style="font-size: 20px">QQ支付</span>
          <input v-model="payway" style="display: none" type="radio" name="payway" value="3">
        </label>

      </div>
      <hr>
      <div class="row">
        <span style="margin-top: 20px; margin-bottom: 20px; font-size: 23px;">生成订单</span>
      </div>
      <div class="row" style="margin-bottom: 100px;">
        <form class="form-horizontal" role="form">
          <div class="row">
            <div class="col">
              <img :src="goodsinfo.goodPicture" alt="图片找不到了">
            </div>
            <div class="col">
              <div class="form-group">
                <h3>[{{ goodsinfo.goodStatus === 0 ? '现货' : '预售' }}]</h3>
              </div>
              <div class="form-group">
                <h3>{{ goodsinfo.goodName }}</h3>
              </div>
              <div class="form-group">
                <h3>商品单价：￥{{ goodsinfo.goodPricecut }}</h3>
              </div>
              <div class="form-group">
                <h3>商品数量：1</h3>
              </div>
              <div class="form-group">
                <h3>总优惠：￥{{ goodsinfo.goodPrice - goodsinfo.goodPricecut }}</h3>
              </div>
              <div class="form-group">
                <h3>总需支付：￥{{ goodsinfo.goodPricecut }}</h3>
              </div>
              <div class="row justify-content-end">
                <input type="button" class="btn btn-info" style="margin-right: 10px" @click="$router.back()" value="取消">
                <input type="button" class="btn btn-success" id="pay" value="支付" @click="payment()">
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// 引入调用js-cookie
import cookie from 'js-cookie'
import shipApi from '@/api/ship'
import goodsApi from '@/api/goods'
import orderApi from '@/api/order'
import wishApi from '@/api/wish'

export default {
  name: 'Review',
  data () {
    return {
      payway: 0,
      shipList: [], // 地址列表
      page: 0,
      limit: 100,
      goodsinfo: {}, // 商品信息
      orderInfo: { // 生成的订单信息
        goodId: '', // 商品编号
        userId: '', // 用户编号
        shipId: '', // 收货信息编号
        payway: '', // 支付方式
        discount: '', // 优惠金额
        totalpay: '', // 支付金额
        goodsnum: 1, // 购买数量
        remark: '', // 备注
        goodStatus: ''// 商品状态(0现货 1预售)
      },
      goodState: ''// 记录商品是现货还是预售
    }
  },
  created () {
    var userStr = cookie.get('agriculture_ucenter')
    if (userStr) {
      this.orderInfo.userId = JSON.parse(userStr).userId
      // 加载用户地址信息列表
      this.getShipList()
      // 根据goodid获取商品信息
      this.orderInfo.goodId = this.$route.query.goodId
      this.getGoodsInfo()
    } else { // 用户未登录
      alert('请先登录！')
      // 回登录页面
      this.$router.push({ path: '/login' })
    }
  },
  methods: {
    // 获取用户地址信息列表
    getShipList () {
      shipApi.getShipList(this.page, this.limit, this.orderInfo.userId).then((response) => {
        this.shipList = response.data.shiplist
      })
    },
    // 根据goodid获取商品信息
    getGoodsInfo () {
      goodsApi.getGoodDetail(this.orderInfo.goodId).then((response) => {
        this.goodsinfo = response.data.goodsDetail
        this.goodState = this.goodsinfo.goodState
      })
    },
    // 支付=>判断该商品是不是用户收藏名单，若是则从收藏表中删除=>生成订单=>跳转页面
    payment () {
      this.orderInfo.goodStatus = this.goodsinfo.goodStatus
      this.orderInfo.payway = this.payway
      this.orderInfo.discount = (this.goodsinfo.goodPrice - this.goodsinfo.goodPricecut)
      this.orderInfo.totalpay = this.goodsinfo.goodPricecut
      // 判断该商品是不是用户收藏名单，若是则从收藏表中删除
      wishApi.getWishByUserIdAndGoodId(this.orderInfo.userId, this.orderInfo.goodId).then((response) => {
        if (response.data.tag === 1) { // 说明是用户收藏名单
          // 移除收藏名单
          wishApi.deleteByUserIdAndGoodId(this.orderInfo.userId, this.orderInfo.goodId).then((response) => {
            console('商品购买-移除收藏名单:' + response.data.msg)
          })
        }
      })
      // 生成订单
      orderApi.generateOrder(this.orderInfo).then((response) => {
        alert(response.data.msg)
        if (response.data.code === 0) {
          // 跳转页面
          this.$router.push({
            path: '/pay-page',
            query: {
              orderId: response.data.orderId,
              goodState: this.goodState
            }
          })
        }
      })
    }
  },
  watch: {
    payway () {
      console.log('hello2')
      $('#payway1').css('border', '2px solid white')
      $('#payway2').css('border', '2px solid white')
      $('#payway3').css('border', '2px solid white')
      $('#payway' + this.payway).css('border', '2px solid rgb(176 180 53)')
    }
  }
}
</script>

<style scoped>

</style>
