<!--
*Author: Eloise
*Date: 2021-06-21 01:48
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
            <li class="breadcrumb-item active"> 地理标志</li>
          </ul>
          <h2>地理标志</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="#">
    <div class="container">
      <div class="introduce-landemark">
        <div class="row mt-5">
          <div class="col-md-12" style="text-align: center">
            <img style="max-width: 200px" src="../../assets/images/landmark.png" alt="图片不见了">
          </div>
          <div class="col-md-12" style="font-size: 16px; margin-top: 10px">
            <p style="font-size: 18px">
              世界贸易组织在有关贸易的知识产权协议中，对地理标志的定义为：地理标志是鉴别原产于一成员国领土或该领土的一个地区或一地点的产品的标志，该标志产品的质量、声誉或其他确定的特性应主要决定于其原产地。因此，地理标志主要用于鉴别某一产品的产地，即是该产品的产地标志。地理标志也是知识产权的一种。</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--2列 小广告开始-->
  <div class="box-add-products">
    <div class="container">
      <div class="row">
        <div v-for="list in bannerlist" :key="list.adId" class="col-lg-6 col-md-6 col-sm-12 mb-4">
          <div class="offer-box-products shadow">
            <img class="img-fluid" style="width: 100%;height:300px;object-fit: cover"
                 :src="list.picUrl"
                 alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--2列 小广告结束-->
</template>

<script>
import bannerApi from '@/api/banner'

export default {
  name: 'LandMark',
  data () {
    return {
      bannerlist: []// 轮播广告
    }
  },
  created () {
    this.getBannerList()
  },
  methods: {
    // 获取广告
    getBannerList () {
      bannerApi.getBannerList(3).then((response) => {
        this.bannerlist = response.data.adlist
      })
    }
  }
}
</script>

<style scoped>

</style>
