<!--
*Author: Eloise
*Date: 2021-06-24 18:42
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
            <li class="breadcrumb-item active"> 订单管理</li>
          </ul>
          <h2>订单管理</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="userSaleList">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-12 text-center">
          <table class="table table-hover table-striped">
            <thead class="thead-light">
            <tr>
              <th scope="col">订单ID</th>
              <th scope="col">商品名称</th>
              <th scope="col">订单状态</th>
              <th scope="col">订单创建时间</th>
              <th scope="col">操作</th>
            </tr>
            </thead>
            <tbody v-for="list in dataList" :key="list.orderId">
            <tr>
              <th>{{ list.orderId }}</th>
              <td>{{ list.goodname }}</td>
              <td v-if="list.status===1">未支付</td>
              <td v-if="list.status===2">已支付</td>
              <td v-if="list.status===3">已接单</td>
              <td v-if="list.status===4">未签收</td>
              <td v-if="list.status===5">已签收</td>
              <td v-if="list.status===6">取消订单</td>
              <td>{{ list.createtime }}</td>
              <td>
                <a class="mr-3 btn btn-outline-success" @click="getOrder(list.orderId)" v-if="list.status===2">接单</a>
                <a class="mr-3 btn btn-outline-success" @click="getOrderFahuo(list.orderId)" v-if="list.status===3">发货</a>
                <a class="mr-3 btn btn-outline-warning" @click="cacelOrder(list.orderId)"
                   v-if="list.status===1">取消订单</a>
                <a class="mr-3 btn btn-outline-warning" @click="cacelOrder(list.orderId)"
                   v-if="list.status===2">取消订单</a>
                <router-link :to="{path:'/sale-order-detail',query:{orderId:list.orderId}}"
                             class="mr-3 btn btn-outline-info">查看详情
                </router-link>
                <!--<a class="btn btn-outline-danger" href="#">删除</a>-->
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-lg-12 text-center mb-5">
          <a v-if="dataList.length !== 0" class="btn btn-outline-primary w-100" role="button"
             @click="flag=true;getDataList()">展示更多</a>
          <el-empty v-if="dataList.length === 0" description="暂时没有用户下单哦~"></el-empty>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import centerApi from '@/api/center'
// 引入调用js-cookie
import cookie from 'js-cookie'
import { ElMessage } from 'element-plus'

export default {
  name: 'SaleOrder',
  data () {
    return {
      // 条件查询参数
      params: {
        page: 0, // 当前页
        limit: 4, // 每页显示数据数
        goodId: ''
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
    // 获取数据列表
    getDataList () {
      if (this.flag === true) {
        this.params.limit += 4
      }
      centerApi.getsaleOrderList(this.params).then((response) => {
        this.dataList = response.data.page
      })
    },
    getOrder (orderId) {
      this.$confirm('此操作将接单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'success'
      }).then(() => {
        centerApi.recevieOrder(orderId).then((response) => {
          if (response.data.code === 0) { // 接单成功
            ElMessage.success('接单成功！')
            this.getDataList()
          } else { // 接单失败
            ElMessage.error('接单失败！')
            this.getDataList()
          }
        })
      })
    },
    getOrderFahuo (orderId) {
      this.$confirm('此操作将发货, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'success'
      }).then(() => {
        centerApi.recevieOrder(orderId).then((response) => {
          if (response.data.code === 0) { // 发货成功
            ElMessage.success('发货成功！')
            this.getDataList()
          } else { // 发货失败
            ElMessage.error('发货失败！')
            this.getDataList()
          }
        })
      })
    },
    cacelOrder (orderId) {
      this.$confirm('此操作将取消订单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        centerApi.cacelOrder(orderId).then((response) => {
          if (response.data.code === 0) { // 取消订单成功
            ElMessage.success('取消订单成功！')
            this.getDataList()
          } else { // 取消订单失败
            ElMessage.error('取消订单失败！')
            this.getDataList()
          }
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
