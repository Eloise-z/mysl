<!--
*Author: Eloise
*Date: 2021-06-24 18:46
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
            <li class="breadcrumb-item active"> 商品添加/修改</li>
          </ul>
          <h2>商品添加/修改</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="userSaleAdd">
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-12 mb-5">
          <div class="border-blue">
            <p class="font-weight-bold ml-2" style="color: #0092ff">产品信息提交后，经管理员审核通过后才予以上架。请您谅解支持。</p>
          </div>
        </div>
        <div class="col-md-12 mb-5">
          <form>
            <div class="form-group">
              <label for="goodsImg">商品图片</label>
              <div class="row">
                <div class="col-lg-6">
                  <input type="file" class="form-control form-control-file" id="goodsImg" accept="image/*">
                </div>
                <div class="col-lg-6">
                  <img style="max-width: 300px" :src="dataForm.goodPicture" id="uploadImgView" alt="">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="goodsName">商品名称</label>
              <input type="text" class="form-control" id="goodsName" v-model="dataForm.goodName">
            </div>
            <div class="form-group">
              <label for="goodsPrice">商品价格</label>
              <input type="number" step="0.01" min="0" class="form-control" id="goodsPrice" required
                     v-model="dataForm.goodPrice">
            </div>
            <div class="form-group">
              <label for="goodPricecut">商品折扣</label>
              <input type="number" step="0.01" min="0" class="form-control" id="goodPricecut" required
                     v-model="dataForm.goodPricecut">
              <small id="PricecutHelpInline" class="text-muted">
                填写0.01~1之间小数
              </small>
            </div>
            <div class="form-group">
              <label for="goodsNum">商品数量</label>
              <input type="number" min="0" class="form-control" id="goodsNum" required v-model="dataForm.goodNum">
            </div>
            <div class="form-group">
              <label for="goodsState">商品类型</label>
              <select class="custom-select" id="goodsState" required v-model="dataForm.goodState">
                <option value="0">现货</option>
                <option value="1">预售</option>
              </select>
            </div>
            <div class="form-group">
              <label for="isBuy">商品销售状态</label>
              <select class="custom-select" id="isBuy" required v-model="dataForm.isBuy">
                <option value="1">正常销售</option>
                <option value="0">暂停销售</option>
              </select>
            </div>
            <div class="form-group">
              <label for="goodPlace">商品产地</label>
              <input type="text" min="0" class="form-control" id="goodPlace" required v-model="dataForm.goodPlace">
            </div>
            <div class="form-group" v-if="dataForm.goodState===1">
              <label for="goodFarm">商品农场</label>
              <input type="text" min="0" class="form-control" id="goodFarm" aria-describedby="FarmHelpInline"
                     v-model="dataForm.goodFarm">
              <small id="FarmHelpInline" class="text-muted">
                预售商品填写
              </small>
            </div>
            <div class="form-group">
              <label for="goodContent">商品简介</label>
              <textarea cols="3" class="form-control" id="goodContent" v-model="dataForm.goodContent"></textarea>
            </div>
            <button type="submit" class="btn btn-primary mr-3" @click="addorupdateSaleGoods()">提交</button>
            <button type="button" class="btn" @click="goOff()">返回</button>
          </form>
        </div>
      </div>
      <div class="row mt-2">

      </div>
    </div>
  </div>
</template>

<script>
import centerApi from '@/api/center'
// 引入调用js-cookie
import cookie from 'js-cookie'

$('#goodsImg').change(function () {
  var newPreview = $('#goodsImg').val()

  var regext = /\.jpg$|\.gif$|\.jpeg$|\.png$|\.bmp$/gi
  if (!regext.test(newPreview)) {
    alert('选择的照片格式不正确，请重新选择！')
    return
  }

  var reads = new FileReader()
  var f = document.getElementById('goodsImg').files[0]
  reads.readAsDataURL(f)
  reads.onload = function () {
    document.getElementById('uploadImgView').src = this.result
  }
})

export default {
  name: 'SaleAdd',
  data () {
    return {
      // 条件查询参数
      dataForm: {
        goodPicture: '',
        goodId: '',
        goodName: '',
        goodStatus: '',
        goodPrice: '',
        goodPricecut: '',
        goodNum: '',
        goodState: '',
        goodContent: '',
        goodPlace: '',
        goodFarm: '',
        gooduserId: ''
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
    this.getgoodId()
    this.getDataList()
  },
  methods: {
    // 获取数据
    getDataList () {
      if (this.dataForm.goodId) {
        centerApi.getUsersaleDetail(this.dataForm.goodId).then((response) => {
          this.dataForm = response.data.goodsinfo
        })
      }
    },
    // 获取商品ID
    getgoodId () {
      if (this.$route.query.goodId) {
        this.dataForm.goodId = this.$route.query.goodId
      }
    },
    // 返回上一页
    goOff () {
      this.$router.go(-1)
    },
    addorupdateSaleGoods () {
      if (this.dataForm.goodId) {
        centerApi.updateSaleGoods(this.dataForm).then((response) => {
          if (response.data.code === 0) { // 修改成功
            alert(response.data.msg)
            this.$router.push({ path: '/sale-list' })
          } else { // 修改失败
            alert(response.data.msg)
            this.$router.push({ path: '/sale-list' })
          }
        })
      } else {
        this.dataForm.gooduserId = this.loginInfo.userId
        centerApi.addSaleGoods(this.dataForm).then((response) => {
          if (response.data.code === 0) { // 增加成功
            alert(response.data.msg)
            this.$router.push({ path: '/sale-list' })
          } else { // 增加失败
            alert(response.data.msg)
            this.$router.push({ path: '/sale-list' })
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
