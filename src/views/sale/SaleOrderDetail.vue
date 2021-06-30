<!--
*Author: Eloise
*Date: 2021-06-24 18:43
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
            <li class="breadcrumb-item">
              <router-link to="/sale-list"> 营销管理</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/sale-order"> 订单管理</router-link>
            </li>
            <li class="breadcrumb-item active"> 订单详情</li>
          </ul>
          <h2>订单详情</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="userSaleList">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-12 mb-5">
          <form>
            <div class="form-group">
              <label for="orderId">订单编号</label>
              <input type="text" readonly class="form-control" id="orderId" required v-model="dataList.orderId">
            </div>
            <div class="form-group">
              <label for="goodsID">商品ID</label>
              <input type="text" readonly step="0.01" min="0" class="form-control" id="goodsID" required
                     v-model="dataList.goodId">
            </div>
            <div class="form-group">
              <label for="goodsName">商品名称</label>
              <input type="text" readonly step="0.01" min="0" class="form-control" id="goodsName" required
                     v-model="dataList.goodname">
            </div>
            <div class="form-group">
              <div class="row p-3">
                <div class="col-md-3">
                  <p class="address-title">收货地址信息</p>
                </div>
                <div class="col-md-9">
                  <select disabled class="form-control mb-3 address-select">
                    <option>{{ shipInfo.provinceName }}</option>
                  </select>
                  <select disabled class="form-control mb-3 address-select">
                    <option>{{ shipInfo.cityName }}</option>
                  </select>
                  <select disabled class="form-control  mb-3 address-select">
                    <option>{{ shipInfo.areaName }}</option>
                  </select>
                  <textarea readonly class="form-control" placeholder="具体收货地址" v-model="dataList.address"></textarea>
                </div>
              </div>
            </div>
            <div class="row p-3">
              <div class="col-md-3">
                <p class="address-title">收货人信息</p>
              </div>
              <div class="col-md-9">
                <div class="row mb-3">
                  <div class="col-md-2" style="text-align: right">
                    <p style="display: inline-block; line-height: 48px">收货人姓名</p>
                  </div>
                  <div class="col-md-6"><input readonly class="form-control address-input" v-model="dataList.name">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2" style="text-align: right">
                    <p style="display: inline-block; line-height: 48px">收货人手机号</p>
                  </div>
                  <div class="col-md-6"><input readonly class="form-control address-input" v-model="dataList.tel"></div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="createTime">订单创建时间</label>
              <input type="text" class="form-control" id="createTime" readonly v-model="dataList.createtime">
            </div>
            <div class="form-group">
              <label for="totalPay">支付金额</label>
              <input type="text" class="form-control" id="totalPay" readonly v-model="dataList.totalpay">
            </div>
            <div class="form-group">
              <label for="goodsNum">购买数量</label>
              <input type="text" class="form-control" id="goodsNum" readonly v-model="dataList.goodsnum">
            </div>
            <div class="form-group">
              <label for="remark">备注</label>
              <textarea cols="3" class="form-control" id="remark" readonly v-model="dataList.remark"></textarea>
            </div>
            <button type="button" class="btn" @click="goOff()">返回</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import centerApi from '@/api/center'
import { area as areaData, city as cityData, province as provinceData } from '../ucenter/addressData.json'

export default {
  name: 'SaleOrderDetail',
  data () {
    return {
      dataList: {
        orderId: ''
      },
      orderId: '',

      province: provinceData,
      city: cityData,
      area: areaData,

      shipInfo: {
        provinceName: '',
        cityName: '',
        areaName: ''
      }
    }
  },
  created () {
    this.getorderId()
    this.getDataList()
  },
  methods: {
    getorderId () {
      this.orderId = this.$route.query.orderId
    },
    getDataList () {
      centerApi.getOrderDetail(this.orderId).then((response) => {
        this.dataList = response.data.orderDetail
        if (this.dataList.goodstate === 1) {
          this.$notify({
            title: '预售商品提示',
            message: '当前出售产品为预售商品，可延缓发货时间。在本轮农场结束的30个工作日内完成发货。',
            type: 'success',
            duration: 10000
          })
        } else {
          this.$notify({
            title: '现货商品提示',
            message: '当前出售产品为现货商品，需要您在3个工作日内完成发货。请尽快发货！',
            type: 'warning',
            duration: 10000
          })
        }
        /* 获取地址具体名字 */
        for (const p of this.province) {
          if (p.code === this.dataList.provinceCode) {
            this.shipInfo.provinceName = p.name
            for (const c of this.city[p.code]) {
              if (c.code === this.dataList.cityCode) {
                this.shipInfo.cityName = c.name
                for (const a of this.area[c.code]) {
                  if (a.code === this.dataList.areaCode) {
                    this.shipInfo.areaName = a.name
                  }
                }
              }
            }
          }
        }
      })
    },
    goOff () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
