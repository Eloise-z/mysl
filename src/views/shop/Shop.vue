<!--
*Author: Eloise
*Date: 2021-06-14 14:53
-->
<template>
  <!-- Start Shop Page  -->
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/index">首页</router-link>
            </li>
            <li class="breadcrumb-item active"> {{ navName }}</li>
          </ul>
          <h2>{{ navName }}</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!-- 通用部分开始  注意，本页面有自带的新写的JS！！ -->
  <div class="shop-box-inner">
    <div class="container">
      <div class="row">
        <!--商品列表主体-->
        <div class="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
          <div class="right-product-box">
            <!--顶部栏-->
            <div class="product-item-filter row">
              <div class="col-12 col-sm-8 text-center text-sm-left">
                <div class="toolbar-sorter-right">
                  <span class="col-3" style="font-size: 15px">排序 </span>
                  <select v-model="params.option" class="form-control col-6" @change="getDataList();flag=false">
                    <option value="0">默认</option>
                    <option value="1">最新商品</option>
                    <option value="2">价格从高到低</option>
                    <option value="3">价格从低到高</option>
                    <option value="4">最多售卖</option>
                  </select>
                </div>
                <span class="col-3 align-middle" style="line-height: 42px;font-size: 15px">展示了 {{ dataList.length }} 个结果</span>
              </div>
              <div class="col-12 col-sm-4 text-center text-sm-right">
                <ul class="nav nav-tabs ml-auto">
                  <li>
                    <a style="margin: 0" class="nav-link active" href="#" data-toggle="tab"> <i class="fa fa-th"></i> </a>
                  </li>
                </ul>
              </div>
            </div>
            <!--商品列表内容区-->
            <div class="product-categorie-box">
              <div class="tab-content">
                <div role="tabpanel" class="tab-pane fade show active" id="grid-view">
                  <div class="row">
                    <div v-for="list in dataList" :key="list.goodId" class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div class="products-single fix">
                        <div class="box-img-hover">
                          <div class="type-lb">
                            <p class="hot">热卖</p>
                            <p class="new">正品保证</p>
                          </div>
                          <img :src="list.goodPicture" class="img-fluid" alt="Image"
                               style="height: 300px;object-fit: cover">
                          <div class="mask-icon">
                            <router-link class="cart" :to="{ path: '/shop-detail', query: { goodId: list.goodId } }">
                              查看详情
                            </router-link>
                          </div>
                        </div>
                        <div class="why-text">
                          <h4>{{ list.goodName }}</h4>
                          <h5> ￥{{ list.goodPrice }}</h5>
                          <h6>已出售{{ list.salesNum }}件</h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                      <a v-show="dataList.length !== 0" class="btn btn-outline-primary w-100" role="button"
                         @click="flag=true;getDataList()">
                        加载更多
                      </a>
                      <el-empty v-show="dataList.length === 0" description="当前类别下没有商品"></el-empty>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--右侧栏-->
        <div class="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
          <div class="product-categori">
            <div class="search-product">
              <form action="#">
                <input class="form-control" v-model="params.goodName" placeholder="输入商品名称" type="text">
                <button type="button"><i class="fa fa-search" @click="getDataList();flag=false"></i></button>
              </form>
            </div>
            <div class="filter-price-left">
              <div class="title-left">
                <h3>价格筛选</h3>
              </div>
              <div class="price-box-slider">
                <div id="slider-range"></div>
                <p>
                  <input type="text" @keyup.enter="changePrice" @click="changePrice();flag=false" id="amount" readonly
                         v-model="eloisePrice" style="border:0; color:#fbb714; font-weight:bold;">
                  <!--                  <button class="btn hvr-hover" type="submit">筛选</button>-->
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import goodsApi from '@/api/goods'
import { ElLoading } from 'element-plus'

export default {
  name: 'Shop',
  data () {
    return {
      // 条件查询参数
      params: {
        page: 0, // 当前页
        limit: 3, // 每页显示数据数
        typeId: '', // 当前商品类型id
        goodState: '', // 0 现货 1预售
        goodName: '', // 商品名称模糊查询
        Topprice: '', // 最高价
        Lowprice: '', // 最低价
        option: '0' // 1 最新商品 2价格从高到低  3价格从低到高 4最多售卖
      },
      // 封装数据
      dataList: [],
      flag: false, // 点击加载更多变为true
      eloisePrice: '', // 价格那一列的值，之后再拆分
      navName: '商品列表' // 导航栏名字
    }
  },
  created () {
    const loading = ElLoading.service({
      fullscreen: true,
      text: '正在获取数据..请稍后'
    })
    this.params.typeId = this.$route.query.typeId
    this.params.goodState = this.$route.query.goodState
    this.params.goodName = this.$route.query.goodName
    this.getDataList()
    loading.close()

    $(function () {
      $('#slider-range').slider({
        range: true,
        min: 0,
        max: 2000,
        values: [0, 200],
        slide: function (event, ui) {
          $('#amount').val('￥' + ui.values[0] + ' - ￥' + ui.values[1])
          $('#amount').click()
        }
      })
      $('#amount').val('￥' + $('#slider-range').slider('values', 0) +
        ' - ￥' + $('#slider-range').slider('values', 1))
    })
  },
  // 监听路由变化
  watch: {
    '$route' (to, from) {
      // 路由发生变化页面刷新
      this.params.typeId = this.$route.query.typeId
      this.params.goodState = this.$route.query.goodState
      this.getDataList()
    }
  },
  methods: {
    // 获取数据
    getDataList () {
      if (this.flag === true) {
        this.params.limit += 3
      }
      goodsApi.getGoodsList(this.params).then((response) => {
        this.dataList = response.data.page
        if (this.params.goodState === '0') {
          this.navName = '现货商品'
        } else if (this.params.goodState === '1') {
          this.navName = '预售农场'
        }
        if (this.params.typeId === '13') {
          this.navName = '乡村振兴系列产品'
        }
      })
    },
    changePrice () {
      this.eloisePrice = $('#amount').val() // ￥457 - ￥995
      this.params.Topprice = this.eloisePrice.split(' - ')[1].slice(1) // 最高价
      this.params.Lowprice = this.eloisePrice.split(' - ')[0].slice(1) // 最低价
      this.getDataList()
    }
  }
}
</script>

<style scoped>

</style>
