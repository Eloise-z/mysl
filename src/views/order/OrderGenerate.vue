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
        <form v-show="currShip.provinceCode!==undefined" class="form-horizontal" role="form">
          <div class="form-group" style="margin-left: 30px">
            <div class="row">
              <h3>{{ currShip.name }} {{ currShip.tel }}</h3>
            </div>
            <div class="row">
              <h3>{{ currShip.provinceName }} / {{ currShip.cityName }} / {{ currShip.areaName }}</h3>
            </div>
            <div class="row">
              <h3>{{ currShip.address }}</h3>
            </div>
            <div class="row">
              <select class="form-control" v-model="orderInfo.shipId">
                <option v-for="list in shipList" :value="list.shipId" :key="list.shipId">
                  {{ list.name }} {{ list.tel }}
                  {{ currShip.provinceName }} / {{ currShip.cityName }} / {{ currShip.areaName }} /
                  {{ list.address }}
                </option>
              </select>
            </div>
            <div class="row">
              <router-link :to="{ path: '/add-addr' }">
                <el-button type="primary">新增收货地址</el-button>
              </router-link>
            </div>
            <div class="row" style="margin-top: 20px;">
              <label for="remark"><b>备注：</b></label>
              <textarea class="form-control" v-model="orderInfo.remark" id="remark" cols="300" rows="2"
                        style="width: 600px" placeholder="请输入备注"></textarea>
            </div>
          </div>
        </form>
        <el-empty description="暂无地址信息" v-show="currShip.provinceCode===undefined">
          <router-link :to="{ path: '/add-addr' }">
            <el-button type="primary">添加收货地址</el-button>
          </router-link>
        </el-empty>
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
            <div class="col border">
              <img style="height: 300px; width: 300px; object-fit: cover" class="pt-4" :src="goodsinfo.goodPicture"
                   alt="图片找不到了">
            </div>
            <div class="col">
              <div class="form-group">
                <h3>[{{ goodsinfo.goodState === 0 ? '现货' : '预售' }}]</h3>
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
import { ElMessage, ElLoading } from 'element-plus'

import { area as areaData, city as cityData, province as provinceData } from '../ucenter/addressData.json'

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
      goodState: '', // 记录商品是现货还是预售

      province: provinceData,
      city: cityData,
      area: areaData
    }
  },
  created () {
    var userStr = cookie.get('agriculture_ucenter')
    if (userStr) {
      const loading = ElLoading.service({
        fullscreen: true,
        text: '正在加载用户和商品信息..请稍后'
      })
      this.orderInfo.userId = JSON.parse(userStr).userId
      // 加载用户地址信息列表
      this.getShipList()
      // 根据goodid获取商品信息
      this.orderInfo.goodId = this.$route.query.goodId
      this.getGoodsInfo()
      loading.close()
    } else { // 用户未登录
      ElMessage.error('用户未登录，请先登录！')
      // 回登录页面
      this.$router.push({ path: '/login' })
    }
  },
  computed: {
    currShip () {
      for (const i of this.shipList) {
        if (i.shipId === this.orderInfo.shipId) {
          for (const p of this.province) {
            if (p.code === i.provinceCode) {
              i.provinceName = p.name
              for (const c of this.city[p.code]) {
                if (c.code === i.cityCode) {
                  i.cityName = c.name
                  for (const a of this.area[c.code]) {
                    if (a.code === i.areaCode) {
                      i.areaName = a.name
                      return i
                    }
                  }
                }
              }
            }
          }
        }
      }
      return { name: '你应该先去个人中心页面添加收货地址，' }
    }
  },
  methods: {
    // 获取用户地址信息列表
    getShipList () {
      shipApi.getShipList(this.page, this.limit, this.orderInfo.userId).then((response) => {
        this.shipList = response.data.shiplist
        this.orderInfo.shipId = this.shipList[0].shipId
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
      console.log('watching payway')
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
