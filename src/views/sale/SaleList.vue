<!--
*Author: Eloise
*Date: 2021-06-24 18:37
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
            <li class="breadcrumb-item active"> 营销管理</li>
          </ul>
          <h2>营销管理</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="userSaleList">
    <div class="container mt-5 mb-5">
      <div class="row mt-5">
        <div class="col-md-12 text-right">
          <router-link :to="{path:'/sale-add'}" class="btn btn-primary mr-2" role="button">新增商品</router-link>
          <router-link class="btn btn-primary" role="button" to="/sale-order">商品订单管理</router-link>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-md-12 text-center">
          <table class="table table-hover table-striped">
            <thead class="thead-light">
            <tr>
              <th scope="col">商品ID</th>
              <th scope="col">商品名称</th>
              <th scope="col">商品数量</th>
              <th scope="col">单价</th>
              <th scope="col">上市时间</th>
              <th scope="col">审核状态</th>
              <th scope="col">操作</th>
            </tr>
            </thead>
            <tbody v-for="list in dataList" :key="list.goodId">
            <tr>
              <th>{{ list.goodId }}</th>
              <td>{{ list.goodName }}</td>
              <td>{{ list.goodNum }}</td>
              <td>￥{{ list.goodPrice }}</td>
              <td>{{ list.createTime }}</td>
              <td v-if="list.goodStatus===1">未审核</td>
              <td v-if="list.goodStatus===2">审核通过</td>
              <td v-if="list.goodStatus===3">审核未通过</td>
              <td>
                <router-link :to="{path:'/sale-add',query:{goodId:list.goodId}}" class="mr-3 btn-outline-info">修改
                </router-link>

                <router-link class="mr-3 btn-outline-info"
                             :to="{ path: '/shop-detail', query: { goodId: list.goodId } }">查看详情
                </router-link>
                <router-link :to="{path:'/sale-class',query:{goodid:list.goodId,goodName:list.goodName}}"
                             class="mr-3 btn-outline-info">管理类别
                </router-link>
                <router-link :to="{path:'/sale-growing',query:{goodId:list.goodId}}" class="mr-3 btn-outline-info">
                  动态管理
                </router-link>
                <a class="btn-outline-danger" @click="deleteUserGoods(list.goodId)">删除</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div v-show="dataList.length !== 0" class="col-lg-12 text-center mb-5">
          <a class="btn btn-outline-primary w-100" role="button" @click="flag=true;getDataList()">展示更多</a>
        </div>
        <div v-show="dataList.length === 0" class="col-lg-12 text-center mb-5">
          <el-empty description="您还没有出售的商品，快去添加吧！"></el-empty>
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
  name: 'SaleList',
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
      centerApi.getUsersaleList(this.params).then((response) => {
        this.dataList = response.data.page
      })
    },
    //
    deleteUserGoods (goodId) {
      this.$confirm('此商品将被删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        centerApi.deletUserGoods(goodId).then((response) => {
          if (response.data.code === 0) { // 删除成功
            ElMessage.success('删除成功!')
            this.getDataList()
          } else { // 删除失败
            ElMessage.error('删除失败!')
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
