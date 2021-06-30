<!--
*Author: Eloise
*Date: 2021-06-21 12:36
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
            <li class="breadcrumb-item active"> 订单详情</li>
          </ul>
          <h2>订单详情</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="#">
    <div class="container">
      <div class="shadow p-3 mb-5 bg-white rounded">
        <form class="form-horizontal" role="form">
          <hr>
          <div class="row" style="margin-bottom: 50px; margin-top: 50px">
            <div class="col-1">
            </div>
            <div class="col-4">
              <div class="row">
                <h3>订单编号：{{ dataList.orderId }}</h3>
              </div>
              <div class="row">
                <h3>创建时间：{{ dataList.createtime }}</h3>
              </div>
              <div class="row" v-if="dataList.goodstate === 1">
                <h3>唯一产品码：{{ dataList.tgcode }}</h3>
              </div>
            </div>
            <div class="col-4">
              <div class="row" v-if="dataList.status===1">
                <h3>状态：未支付</h3>
              </div>
              <div class="row" v-if="dataList.status===2">
                <h3>状态：已支付</h3>
              </div>
              <div class="row" v-if="dataList.status===3">
                <h3>状态：已接单</h3>
              </div>
              <div class="row" v-if="dataList.status===4">
                <h3>状态：未签收</h3>
              </div>
              <div class="row" v-if="dataList.status===5">
                <h3>状态：已签收</h3>
              </div>
              <div class="row" v-if="dataList.status===6">
                <h3>状态：取消订单</h3>
              </div>
              <div class="row" v-if="dataList.payway===1">
                <h3>支付方式：支付宝</h3>
              </div>
              <div class="row" v-if="dataList.payway===2">
                <h3>支付方式：微信</h3>
              </div>
              <div class="row" v-if="dataList.payway===3">
                <h3>支付方式：QQ</h3>
              </div>
              <div class="row" v-if="dataList.payway===4">
                <h3>支付方式：其他</h3>
              </div>
              <div class="row" v-if="dataList.paytime!=null">
                <h3>支付时间：{{ dataList.paytime }}</h3>
              </div>
            </div>
            <div class="col-3">
              <div class="row">
                <h3>应付金额：￥{{ dataList.goodprice }}</h3>
              </div>
              <div class="row">
                <h3>优惠金额：￥{{ dataList.discount }}</h3>
              </div>
              <div class="row">
                <h3>实付金额：￥{{ dataList.totalpay }}</h3>
              </div>
            </div>
          </div>
          <hr>
          <div class="row" style="margin-bottom: 50px; margin-top: 50px">
            <div class="col-1"></div>
            <div class="col-3">
              <img :src="dataList.goodpicture" style="width: 200px; height: 200px;" alt="图片找不到了">
            </div>
            <div class="col-5">
              <div class="form-group" v-if="dataList.goodstate===0">
                <h3>[现货]</h3>
              </div>
              <div class="form-group" v-if="dataList.goodstate===1">
                <h3>[预售]</h3>
              </div>
              <div class="form-group">
                <h3>{{ dataList.goodname }}</h3>
              </div>
              <div class="form-group">
                <h3>商品单价：￥{{ dataList.goodprice }}</h3>
              </div>
              <div class="form-group">
                <h3>商品数量：{{ dataList.goodsnum }}</h3>
              </div>
            </div>
            <div class="col-2">
              <div class="row justify-content-end" v-if="dataList.status===4">
                <input type="button" class="btn btn-info" id="cancelPay" value="确认收货" @click="confirmGet()">
              </div>
            </div>
            <div class="col-1"></div>
          </div>
          <hr>
          <div class="row">
            <div class="col-1"></div>
            <div class="col-5">
              <div class="form-group">
                <div class="row"><h3>收货信息：</h3></div>
                <div class="row"><h3>{{ dataList.name }} / {{ dataList.tel }}</h3></div>
                <div class="row"><h3>{{ shipInfo.provinceName }} / {{ shipInfo.cityName }} /
                  {{ shipInfo.areaName }}</h3></div>
                <div class="row"><h3>{{ dataList.address }}</h3></div>
              </div>
            </div>
            <div class="col-6">
              <div class="row" v-if="dataList.status===1"><h3>商家状态：未支付</h3></div>
              <div class="row" v-if="dataList.status===2"><h3>商家状态：未接单</h3></div>
              <div class="row" v-if="dataList.status===3"><h3>商家状态：未发货</h3></div>
              <div class="row" v-if="dataList.status===4"><h3>商家状态：已发货</h3></div>
              <div class="row" v-if="dataList.status===5"><h3>商家状态：已签收</h3></div>
              <div class="row"><h3>备注：{{ dataList.remark }}</h3></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import centerApi from '@/api/center'
import { area as areaData, city as cityData, province as provinceData } from '../ucenter/addressData.json'
import { ElMessage } from 'element-plus'

export default {
  name: 'OrderDetail',
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
    confirmGet () {
      this.$confirm('此操作将确认收货, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const loading = this.$loading({ text: '系统处理中...' })
        centerApi.confirmGet(this.orderId).then((response) => {
          if (response.data.code === 0) { // 收货成功
            loading.close()
            ElMessage.success('收货成功！请对商品进行评价！')
            this.$router.push({ path: '/order-review' })
            this.getDataList()
          } else { // 删除失败
            loading.close()
            ElMessage.error('收货失败！')
            this.$router.push({
              path: '/orderdetail',
              query: { orderId: this.orderId }
            })
          }
        })
      })
    }
  }
}

</script>

<style scoped>

</style>
