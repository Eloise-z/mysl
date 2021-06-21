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
                <div class="col-9"><textarea class="form-control" placeholder="具体收货地址"></textarea></div>
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
                  <div class="col-md-6"><input class="form-control address-input"></div>
                </div>
                <div class="row">
                  <div class="col-md-2" style="text-align: right">
                    <p style="display: inline-block; line-height: 38px;margin: 0;font-size: 16px">收货人手机号</p>
                  </div>
                  <div class="col-md-6"><input class="form-control address-input"></div>
                </div>
              </div>
            </div>
            <div class="row form-group justify-content-center" style="margin-top: 20px;">
              <div class="col-auto">
                <input type="button" class="btn btn-success" value="提交">
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

export default {
  name: 'AddressAdd',
  data () {
    return {
      provinceCode: '510100000000',
      cityCode: '510100000000',
      areaCode: '510116000000',

      provinceSelectCode: '510100000000',
      citySelectCode: '510100000000',
      areaSelectCode: '510116000000',

      province: provinceData,
      city: cityData,
      area: areaData
    }
  },
  mounted: function () {
    this.loadAllInfo()
  },
  computed: {
    cityFilter () {
      return this.city[this.provinceCode]
    },
    areaFilter () {
      return this.area[this.cityCode]
    }
  },
  methods: {
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
      this.provinceCode = this.provinceSelectCode
      this.cityCode = this.city['' + this.provinceCode + ''][0].code
      this.areaCode = this.area['' + this.cityCode + ''][0].code

      this.citySelectCode = this.cityCode
      this.areaSelectCode = this.areaCode

      console.log('provinceCode = ' + this.provinceCode)
      console.log('cityCode = ' + this.cityCode)
      console.log('areaCode = ' + this.areaCode)
    },
    citySelected: function () {
      this.cityCode = this.citySelectCode
      this.areaCode = this.area['' + this.cityCode + ''][0].code

      this.areaSelectCode = this.areaCode

      console.log('provinceCode = ' + this.provinceCode)
      console.log('cityCode = ' + this.cityCode)
      console.log('areaCode = ' + this.areaCode)
    },
    areaSelected: function () {
      this.areaCode = this.areaSelectCode

      console.log('provinceCode = ' + this.provinceCode)
      console.log('cityCode = ' + this.cityCode)
      console.log('areaCode = ' + this.areaCode)
    }
  }
}

</script>

<style scoped>

</style>
