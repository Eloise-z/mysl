<!--
*Author: Eloise
*Date: 2021-06-20 14:56
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
              <router-link to="/shop"> 商品列表</router-link>
            </li>
            <li class="breadcrumb-item active"> 商品详情</li>
          </ul>
          <h2>{{ goodsDetail.goodName }}</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!-- Start Shop Detail  -->
  <div class="shop-detail-box-main">
    <div class="container">
      <div class="row">
        <!--左侧图片-->
        <div class="col-xl-5 col-lg-5 col-md-6">
          <div id="carousel-example-1" class="single-product-slider carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
              <div v-for="(list,index) in goodspicList" :key="list.picId" class="carousel-item"
                   :class="{'active': index===0}">
                <img class="d-block w-100" style="height: 300px;width: 420px;object-fit: cover" :src="list.url"
                     alt="First slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carousel-example-1" role="button" data-slide="prev">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel-example-1" role="button" data-slide="next">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
              <span class="sr-only">Next</span>
            </a>
            <ol class="carousel-indicators">
              <li v-for="(list,index) in goodspicList" :key="list.picId"
                  data-target="#carousel-example-1" data-slide-to="index" :class="{'active':index===0}">
                <img class="d-block w-100 img-fluid" :src="list.url" alt=""/>
              </li>
            </ol>
          </div>
        </div>
        <!--右侧商品信息-->
        <div :data="goodsDetail" class="col-xl-7 col-lg-7 col-md-6">
          <div class="single-product-details">
            <h2>{{ goodsDetail.goodName }}</h2>
            <h5>
              <del>￥ {{ goodsDetail.goodPrice }}</del>
              ￥{{ goodsDetail.goodPrice - goodsDetail.goodPricecut }}
            </h5>
            <p class="available-stock"><span> 库存总数{{ goodsDetail.goodNum }} / 已售{{ goodsDetail.salesNum }}件</span>
            </p>
            <p class="goods-info-detail">上市时间：{{ goodsDetail.createTime }}</p>
            <p class="goods-info-detail">商品编号：{{ goodsDetail.goodId }}</p>
            <p class="goods-info-detail">服务支持：<span style="color: #bd1e22"><i
              class="fas fa-american-sign-language-interpreting"></i>放心购</span></p>
            <p style="font-size: 16px" class="goods-info-detail">付款支持：
              <span><i class="fab fa-weixin"></i>微信支付</span>
              <span><i class="fab fa-alipay"></i>支付宝支付</span>
              <span><i class="fab fa-qq"></i>QQ支付</span>
              <span><i class="fab fa-cc-apple-pay"></i>苹果支付</span>
              <span><i class="fas fa-credit-card"></i>银行卡支付</span>
            </p>
            <h4>所属分类</h4>
            <p style="margin: 2px">[{{ goodsDetail.goodState === 0 ? '现货' : '预售' }}]</p>
            <span style="margin: 2px" v-for="list in goodstypeList" :key="list.typeId">[{{ list.typeName }}]</span>
          </div>
          <div class="row">
            <div class="col-xl-12">
              <div class="price-box-bar">
                <div class="cart-and-bay-btn">
                  <!--<a class="btn hvr-hover" style="margin-right: 5px" data-fancybox-close="">
                    <router-link class="cart" :to="{ path: '/order-generate', query: { goodId: goodsDetail.goodId } }">
                      立即购买
                    </router-link>
                  </a>-->
                  <button type="button" class="btn hvr-hover" style="margin-right: 5px"
                          @click="$router.push({ path: '/order-generate', query: { goodId: goodsDetail.goodId } })">立即购买
                  </button>
                  <button type="button" class="btn hvr-hover" data-fancybox-close="" @click="clickWish()">加入收藏</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--商品描述，动态-->
      <div class="row my-5">
        <div class="shop-detail-content card card-outline-secondary col-md-12">
          <div class="card-header">
            <h2>商品详情</h2>
          </div>
          <div class="card-body">
            <div class="media mb-3">
              <div :data="goodsDetail" class="media-body">
                {{ goodsDetail.goodContent }}
                <el-empty v-if="goodsDetail.goodContent === ''" description="该商品还没有商品详情"></el-empty>
              </div>
            </div>
            <hr>
            <template v-if="goodsDetail.goodState === 1">
              <router-link class="btn hvr-hover" :to="{ path: '/growing', query: { goodId: goodsDetail.goodId} }">
                查看农场动态
              </router-link>
            </template>
          </div>
        </div>
      </div>
      <!--用户评论-->
      <div class="row my-5">
        <div class="shop-detail-content card card-outline-secondary my-4 col-md-12">
          <div class="card-header">
            <h2>用户评论</h2>
          </div>
          <div class="card-body">
            <template v-for="list in gcriticList" :key="list.crId">
              <div class="media mb-3">
                <div class="mr-2">
                  <img class="rounded-circle border p-1" :src="list.userAvatar" alt="Generic placeholder image"
                       style="width: 64px;height: 64px;object-fit: cover">
                </div>
                <div class="media-body">
                  <p>{{ list.crText }}</p>
                  <small class="text-muted"><span>{{ list.userName }}</span> {{ list.updateTime }}</small>
                </div>
              </div>
              <hr>
            </template>
            <a v-show="gcriticList.length !== 0" class="btn hvr-hover" @click="flag=true;getDetail()">展示更多</a>
            <el-empty v-if="gcriticList.length === 0" description="还没有用户进行评论"></el-empty>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Cart -->
</template>

<script>
import '../../assets/css/aricommen.css'
import goodsApi from '@/api/goods'
import wishApi from '@/api/wish'
// 引入调用js-cookie
import cookie from 'js-cookie'
import { ElLoading, ElMessage } from 'element-plus'

export default {
  name: 'ShopDetail',
  data () {
    return {
      userId: '',
      goodId: '',
      goodsDetail: {}, // 封装右侧商品信息
      goodstypeList: [], // 封装商品类别信息
      goodspicList: [], // 封装左侧商品图片信息
      gcriticList: [], // 封装商品评论信息
      page: 0, // 当前页
      limit: 3, // 每页显示数据数
      flag: false // 点击加载更多变为true
    }
  },
  created () {
    const loading = ElLoading.service({
      fullscreen: true,
      text: '正在获取数据..请稍后'
    })
    this.getDetail() // 获取商品信息
    loading.close()
  },
  methods: {
    // 获取数据
    getDetail () {
      if (this.flag === true) {
        this.limit += 3
      }
      this.goodId = this.$route.query.goodId
      // eslint-disable-next-line no-unused-expressions
      // 获取商品文本信息
      goodsApi.getGoodDetail(this.goodId).then((response) => {
        this.goodsDetail = response.data.goodsDetail
        this.dynpicList = response.data.dynpicList
        this.goodId = response.data.goodsDetail.goodId
      })
      // 获取商品评论列表
      goodsApi.getgcriticList(this.page, this.limit, this.goodId).then((response) => {
        this.gcriticList = response.data.gcriticList
      })
      // 获取商品类别列表
      goodsApi.getGoodsTypeList(this.goodId).then((response) => {
        this.goodstypeList = response.data.goodstypeList
      })
      // 获取商品所有图片
      goodsApi.getGoodspicByGoodId(this.goodId).then((response) => {
        this.goodspicList = response.data.goodsPicList
      })
    },

    // 点击收藏
    clickWish () {
      var userStr = cookie.get('agriculture_ucenter')
      if (userStr) {
        this.userId = JSON.parse(userStr).userId
        wishApi.getWishByUserIdAndGoodId(this.userId, this.goodId).then((response) => {
          if (response.data.tag === 1) {
            ElMessage.warning('该商品已在您的收藏中！您可在[我的收藏]中查看')
          } else {
            // 加入收藏
            wishApi.addWish(this.userId, this.goodId).then((response) => {
              if (response.data.code === 0) {
                ElMessage({
                  message: '加入成功！您可在[我的收藏]中查看',
                  type: 'success'
                })
              }
            })
          }
        })
      } else {
        ElMessage.error('您还未登录，请先登录！')
      }
    }
  }
}
</script>

<style scoped>
span {
  font-size: 15px;
}

p {
  margin: 5px;
}

a {
  margin: 5px;
  font-size: 15px;
}

button {
  margin: 5px;
  font-size: 15px;
}
</style>
