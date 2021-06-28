<!--
*Author: Eloise
*Date: 2021-06-20 19:41
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
              <router-link to="/addr"> 地址管理</router-link>
            </li>
            <li class="breadcrumb-item active"> 地址添加编辑</li>
          </ul>
          <h2>地址添加/编辑</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--地址管理主体部分开始-->
  <div class="address-manage" style="margin: 20px">
    <div class="container">
      <div class="row mt-5 mb-5">
        <div class="col-md-12">
          <form action="#">
            <div class="form-group">
              <div class="row p-3">
                <div class="col-md-3">
                  <h3 class="address-title">收货地址信息</h3>
                </div>
                <div class="col-md-3">
                  <select name="province" v-model="provinceSelectCode" class="form-control address-select"
                          @change="provinceSelected()">
                    <option v-for="item in province" :value="item.code" :key="item.code">{{ item.name }}</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <select name="city" v-model="citySelectCode" class="form-control address-select"
                          @change="citySelected()">
                    <template v-for="v in cityFilter" :key="v.code">
                      <option :value="v.code">{{ v.name }}</option>
                    </template>
                  </select>
                </div>
                <div class="col-md-3">
                  <select name="area" v-model="areaSelectCode" class="form-control address-select"
                          @change="areaSelected()">
                    <template v-for="v in areaFilter" :key="v.code">
                      <option :value="v.code">{{ v.name }}</option>
                    </template>
                  </select>
                </div>
              </div>
              <div class="row p-3">
                <div class="col-3"></div>
                <div class="col-9"><textarea class="form-control" v-model="shipInfo.address"
                                             placeholder="具体收货地址"></textarea></div>
              </div>
            </div>
            <hr>
            <div class="row p-3">
              <div class="col-md-3">
                <h3 class="address-title">收货人信息</h3>
              </div>
              <div class="col-md-9">
                <div class="row mb-3">
                  <div class="col-md-2" style="text-align: right">
                    <p style="display: inline-block; line-height: 38px;margin: 0;font-size: 16px">收货人姓名</p>
                  </div>
                  <div class="col-md-6"><input v-model="shipInfo.name" class="form-control address-input"></div>
                </div>
                <div class="row">
                  <div class="col-md-2" style="text-align: right">
                    <p style="display: inline-block; line-height: 38px;margin: 0;font-size: 16px">收货人手机号</p>
                  </div>
                  <div class="col-md-6"><input v-model="shipInfo.tel" class="form-control address-input"></div>
                </div>
              </div>
            </div>
            <div class="row form-group justify-content-center" style="margin-top: 20px;">
              <div class="col-auto">
                <input type="button" class="btn btn-success" value="提交" @click="submit()">
              </div>
              <div class="col-auto">
                <input type="button" class="btn" @click="$router.back()" value="返回">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!--地址管理主体部分结束-->
</template>

<script>
import { province as provinceData, city as cityData, area as areaData } from './addressData.json'
import cookie from 'js-cookie'
import shipApi from '@/api/ship'
import { ElMessage } from 'element-plus'

export default {
  name: 'AddressAdd',
  data () {
    return {
      // 用户信息
      loginInfo: {},

      provinceSelectCode: '510100000000',
      citySelectCode: '510100000000',
      areaSelectCode: '510116000000',

      shipInfo: {
        shipId: '',
        userId: '',
        provinceCode: '510100000000',
        cityCode: '510100000000',
        areaCode: '510116000000',
        address: '',
        name: '',
        tel: ''
      },

      province: provinceData,
      city: cityData,
      area: areaData
    }
  },
  created () {
    var userStr = cookie.get('agriculture_ucenter')
    if (userStr) {
      this.shipInfo.userId = JSON.parse(userStr).userId
    }
    this.shipInfo.shipId = this.$route.query.shipId
    if (this.shipInfo.shipId) {
      this.getShipInfo(this.shipInfo.shipId)
    }
  },
  mounted: function () {
    this.loadAllInfo()
  },
  computed: {
    cityFilter () {
      return this.city[this.shipInfo.provinceCode]
    },
    areaFilter () {
      return this.area[this.shipInfo.cityCode]
    }
  },
  methods: {
    // 判断是添加还是修改
    submit () {
      if (this.shipInfo.shipId) {
        // alert('调用修改方法')
        this.update()
      } else {
        // alert('调用添加方法')
        this.add()
      }
    },
    // 添加地址信息
    add () {
      shipApi.addShipInfo(this.shipInfo).then((response) => {
        // alert(response.data.msg)
        ElMessage({
          showClose: true,
          message: response.data.msg,
          type: 'success'
        })
        if (response.data.code === 0) {
          this.$router.push({ path: '/addr' })
        }
      })
    },
    // 根据shipId获取地址信息
    getShipInfo () {
      shipApi.getInfoById(this.shipInfo.shipId).then((response) => {
        this.shipInfo = response.data.ship
      })
    },
    // 修改地址信息
    update () {
      shipApi.updateInfoById(this.shipInfo).then((response) => {
        // alert(response.data.msg)
        ElMessage({
          showClose: true,
          message: response.data.msg,
          type: 'success'
        })
        if (response.data.code === 0) {
          this.$router.push({ path: '/addr' })
        }
      })
    },
    loadAllInfo () {
      /* 停止使用此方法获取源数据了，直接import就可以了
      var that = this
      this.axios.get('./addressData.json')
        .then((resp) => {
          that.province = resp.data.province
          that.city = resp.data.city
          that.area = resp.data.area
        })
        .catch((error) => {
          console.log(error)
        }) */
    },
    provinceSelected: function () {
      this.shipInfo.provinceCode = this.provinceSelectCode
      this.shipInfo.cityCode = this.city['' + this.shipInfo.provinceCode + ''][0].code
      this.shipInfo.areaCode = this.area['' + this.shipInfo.cityCode + ''][0].code

      this.citySelectCode = this.shipInfo.cityCode
      this.areaSelectCode = this.shipInfo.areaCode

      console.log('provinceCode = ' + this.shipInfo.provinceCode)
      console.log('cityCode = ' + this.shipInfo.cityCode)
      console.log('areaCode = ' + this.shipInfo.areaCode)
    },
    citySelected: function () {
      this.shipInfo.cityCode = this.citySelectCode
      this.shipInfo.areaCode = this.area['' + this.shipInfo.cityCode + ''][0].code

      this.areaSelectCode = this.shipInfo.areaCode

      console.log('provinceCode = ' + this.shipInfo.provinceCode)
      console.log('cityCode = ' + this.shipInfo.cityCode)
      console.log('areaCode = ' + this.shipInfo.areaCode)
    },
    areaSelected: function () {
      this.shipInfo.areaCode = this.areaSelectCode

      console.log('provinceCode = ' + this.shipInfo.provinceCode)
      console.log('cityCode = ' + this.shipInfo.cityCode)
      console.log('areaCode = ' + this.shipInfo.areaCode)
    }
  }
}

</script>

<style scoped>

</style>
