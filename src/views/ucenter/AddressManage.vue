<!--
*Author: Eloise
*Date: 2021-06-20 19:20
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
            <li class="breadcrumb-item active"> 地址管理</li>
          </ul>
          <h2>地址管理</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--地址管理主体部分开始-->
  <div class="address-manage">
    <div class="container my-5">
      <div class="row">
        <div class="col-md-12" style="text-align: right;font-size: 40px">
          <div class="top-botton">
            <button class="btn btn-primary" @click="toAddAddrPage"> 新增地址信息</button>
          </div>
        </div>
      </div>
      <div class="row" style="margin: 20px">
        <div v-for="list in datalist" :key="list.shipId" class="col-lg-6">
          <div class="account-box">
            <div class="service-box">
              <div class="service-desc">
                <ul>
                  <li> {{ provinceName(list.provinceCode) }} {{ cityName(list.provinceCode, list.cityCode) }}
                    {{ areaName(list.cityCode, list.areaCode) }}
                  </li>
                  <li> {{ list.address }}</li>
                  <li> {{ '姓名：' + list.name }}</li>
                  <li> {{ '电话：' + list.tel }}</li>
                </ul>
                <a class="address-delete" @click="flag=false;deleteShip(list.shipId)">
                  <i class="far fa-trash-alt"></i></a>
                <a class="address-edit" @click="updateShip(list.shipId)"><i class="fas fa-edit"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
          <a v-show="datalist.length !== 0" class="btn btn-outline-primary w-100" role="button"
             @click="flag=true;getDataList()">
            加载更多
          </a>
          <el-empty v-if="datalist.length === 0" description="还没有收货地址信息，快去添加吧！"></el-empty>
        </div>
      </div>
    </div>
  </div>
  <!--地址管理主体部分结束-->
</template>

<script>
// 引入调用js-cookie
import cookie from 'js-cookie'
import shipApi from '@/api/ship'
import { area as areaData, city as cityData, province as provinceData } from './addressData.json'
import { ElMessage } from 'element-plus'

export default {
  name: 'AddressManage',
  data () {
    return {
      token: '',
      userId: '', // 当前登录的用户id
      page: 0,
      limit: 4,
      datalist: [],
      flag: false,

      province: provinceData,
      city: cityData,
      area: areaData
    }
  },
  created () {
    var userStr = cookie.get('agriculture_ucenter')
    if (userStr) {
      this.userId = JSON.parse(userStr).userId
    }
    this.getDataList()
  },
  methods: {
    // 获取数据列表
    getDataList () {
      if (this.flag) {
        this.limit += 4
      }
      shipApi.getShipList(this.page, this.limit, this.userId).then((response) => {
        this.datalist = response.data.shiplist
      })
    },
    // 删除
    deleteShip (shipId) {
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        shipApi.deleteById(shipId).then(() => {
          ElMessage.success('删除成功！')
          // 重新加载数据
          this.getDataList()
        })
      })
    },
    // 跳转到添加页面
    toAddAddrPage () {
      this.$router.push({ path: '/add-addr' })
    },
    // 跳转到修改页面
    updateShip (shipId) {
      this.$router.push({
        path: '/add-addr',
        query: { shipId: shipId }
      })
    },
    provinceName (provinceCode) {
      for (const p of this.province) {
        if (p.code === provinceCode) {
          return p.name
        }
      }
      return { name: 'now error happened' }
    },
    cityName (provinceCode, cityCode) {
      for (const k in this.city) {
        if (k === provinceCode) {
          for (const c of this.city[provinceCode]) {
            if (c.code === cityCode) {
              return c.name
            }
          }
          break
        }
      }
      return { name: 'now error happened' }
    },
    areaName (cityCode, areaCode) {
      for (const k in this.area) {
        if (k === cityCode) {
          for (const a of this.area[cityCode]) {
            if (a.code === areaCode) {
              return a.name
            }
          }
          break
        }
      }
      return { name: 'now error happened' }
    }
  }
}
</script>

<style scoped>

</style>
