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
    <div class="container">
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
          <a class="btn btn-outline-primary w-100" role="button" @click="flag=true;getDataList()">
            加载更多
          </a>
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
      shipApi.deleteById(shipId).then((response) => {
        alert(response.data.msg)
        // 重新加载数据
        this.getDataList()
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
      for (var i in this.province) {
        if (this.province[i].code === provinceCode) {
          return this.province[i].name
        }
      }
      return '默认四川'
    },
    cityName (provinceCode, cityCode) {
      for (var k in this.city) {
        if (k === provinceCode) {
          for (var c in this.city[k]) {
            if (this.city[k][c].code === cityCode) {
              return this.city[k][c].name
            }
          }
          break
        }
      }
      return '默认成都'
    },
    areaName (cityCode, areaCode) {
      for (var k in this.area) {
        if (k === cityCode) {
          for (var a in this.area[k]) {
            if (this.area[k][a].code === areaCode) {
              return this.area[k][a].name
            }
          }
          break
        }
      }
      return '默认双流'
    }
  }
}
</script>

<style scoped>

</style>
