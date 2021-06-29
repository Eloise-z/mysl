<!--
*Author: Eloise
*Date: 2021-06-21 01:17
-->
<template>
  <!--新轮播图开始-->
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" style="padding: 0" data-interval="3000"
       data-pause="false">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div v-for="(list, index) in bannerlist" class="carousel-item" :key="list.adId" :class="{'active' : index === 0}"
           style="background-color: rgba(0, 0, 0, 0.4);">
        <img
          :src="list.picUrl"
          class="d-block w-100" style="width: 100%;height: 100vh;object-fit:cover" alt="">
        <div class="cover w-100"
             style="position: absolute ;right:0;top: 0;height:100vh;background-color: rgba(0, 0, 0, 0.3);"></div>
        <div class="carousel-caption d-none d-md-block" style="bottom:35vh;right:0 ">
          <p style="font-size: 22px"><i class="fab fa-slack-hash" style="padding-right: 5px;"></i>{{ list.adName }}
          </p>
        </div>
      </div>
    </div>
    <button style="width: auto;border: 0;background: 0;" class="carousel-control-prev" type="button"
            data-target="#carouselExampleCaptions" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button style="width: auto;border: 0;background: 0;" class="carousel-control-next" type="button"
            data-target="#carouselExampleCaptions" data-slide="next">
      <span class="carousel-control-next-icon"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>
  <!--新轮播图结束-->

  <!--3列 革命老区推荐开始-->
  <!-- Start Categories  -->
  <div class="categories-shop">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-all text-left ">
            <div class="border-red">
              <h1 class="content-red" style="margin-left: 20px;color: #bd1e22">革命老区旅游线路</h1>
            </div>
            <p style="margin-left: 20px">传承红色基因，献礼建党100年</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="list in dataList.revolutionaryList" :key="list.toId" class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div class="shop-cat-box">
            <div class="type-lb">
              <p class="new">新线路</p>
            </div>
            <img class="img-fluid"
                 :src="list.toMainpic"
                 alt=""/>
            <router-link class="btn hvr-hover" :to="{ path: '/tour-detail', query: { toId: list.toId } }">
              {{ list.toName }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--纪念袁老题字开始-->
  <div class="recommend" style="margin-top: 40px">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-all text-center">
            <!--<div class="border-red">
              <h1 class="content-red" style="margin-left: -940px;color: #bd1e22">乡村振兴</h1>
            </div>
            <p style="margin-left: -830px">共护诗画万丈湖,同筑百年乡村梦。</p>-->
            <h1>乡村振兴</h1>
            <p>共护诗画万丈湖,同筑百年乡村梦。</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="list in dataList.ruralVitalizationList" :key="list.toId"
             class="col-lg-6 col-md-4 col-sm-12 col-xs-12">
          <div class="offer-box-products" style="text-align: center;height: 360px;">
            <router-link :to="{ path: '/tour-detail', query: { toId: list.toId } }">
              <img style="max-width: 100%"
                   :src="list.toMainpic"
                   alt="">
              <p style="font-size: 20px;margin-top: 5px;">{{ list.toName }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--纪念袁老题字结束-->

  <!--3列 贫困地区推荐开始-->
  <!-- Start Categories  -->
  <div class="categories-shop">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-all text-left ">
            <div class="border-ori">
              <h1 class="content-red" style="margin-left: 20px;color:#b0b435 ">新农村</h1>
            </div>
            <p style="margin-left: 20px"></p>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="list in dataList.newCountrysideList" :key="list.toId"
             class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div class="shop-cat-box">
            <div class="type-lb">
              <p class="new">新线路</p>
            </div>
            <img class="img-fluid"
                 :src="list.toMainpic"
                 alt=""/>
            <router-link class="btn hvr-hover" :to="{ path: '/tour-detail', query: { toId: list.toId } }">
              {{ list.toName }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Categories -->
  <!--3列 贫困地区推荐结束-->

  <!--2列 小广告开始-->
  <div class="box-add-products">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="offer-box-products">
            <img class="img-fluid" alt=""
                 src="https://p1-q.mafengwo.net/s18/M00/EC/1A/CoUBYGDUeHGAWguXACgvdrQm7TY320.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg"/>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="offer-box-products">
            <img class="img-fluid" alt=""
                 src="https://p1-q.mafengwo.net/s16/M00/FF/E3/CoUBUl_tlHSAdImwAAOXSO6qxds42.jpeg?imageMogr2%2Fstrip"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--2列 小广告结束-->

  <!--商品简介开始-->
  <!-- Start Blog  -->
  <div class="latest-blog">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-all text-center">
            <h1>简·攻略</h1>
            <p>提供最可靠、最便捷的攻略心得给唯一的你</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4 col-xl-4">
          <div class="blog-box" style="height: 480px">
            <div class="blog-img">
              <img class="img-fluid"
                   src="https://p1-q.mafengwo.net/s17/M00/39/80/CoUBXl9iOw6ADZObAAV3-OGa7oc722.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                   alt=""/>
            </div>
            <div class="blog-content">
              <div class="title-blog">
                <h3>特殊时期的寻味之旅——西北篇（西安/天水/兰州）</h3>
                <p> 决定去 缙云 ，只因为一块榴莲味的烧饼。 前些天带六宝去朋友家玩，刚巧碰上她家邻居送来几块 缙云 带回来的烧饼。六宝第一次吃到芝士榴莲味的烧饼，整个人都惊呆了。从朋友家离开后的几天里...</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-4">
          <div class="blog-box" style="height: 480px">
            <div class="blog-img">
              <img class="img-fluid" alt=""
                   src="https://b1-q.mafengwo.net/s13/M00/EF/14/wKgEaVzNqOiACl-aAAulsAbzjqw66.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"/>
            </div>
            <div class="blog-content">
              <div class="title-blog">
                <h3>甘肃｜河西四日，丝路千年（自驾探寻冷门景点）</h3>
                <p> 前言 “在曾经的历史 通道 上， 作为通往广阔西部的咽喉， 河西走廊 是那么的意气飞扬，更洒下过无数先辈的血汗，沉淀了太多的期待与渴望。” ——纪录片《 河西走廊 》 两千年前，张骞义无...</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-4">
          <div class="blog-box" style="height: 480px">
            <div class="blog-img">
              <img class="img-fluid" alt=""
                   src="https://p1-q.mafengwo.net/s12/M00/73/B0/wKgED1woYniAZLueABTPJUQaNh023.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"/>
            </div>
            <div class="blog-content">
              <div class="title-blog">
                <h3>重逢云南：大理的夏，丽江的秋</h3>
                <p>某日，看到夏初 大理 的颜色，在我心里轻轻的抚过，像是完成了多年的夙愿，不由得深吸一口气。那种风声灌进领口，阳光洒在肩上的美好依然历历在目。 这一年，不停的回到过去。从 重庆 的十...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Blog  -->
  <!--商品简介结束-->
</template>

<script>
import tourApi from '@/api/tour'
import bannerApi from '@/api/banner'

export default {
  name: 'Tour',
  data () {
    return {
      dataList: {}, // 数据列表
      bannerlist: []// 轮播广告
    }
  },
  created () {
    this.getDataList()
    this.getBannerList()
  },
  methods: {
    // 获取数据列表
    getDataList () {
      tourApi.getIndex().then((response) => {
        this.dataList = response.data.indexList
      })
    },
    // 获取轮播广告
    getBannerList () {
      bannerApi.getBannerList(2).then((response) => {
        this.bannerlist = response.data.adlist
      })
    }
  }
}
</script>

<style scoped>
.shop-cat-box {
  width: 350px;
  height: 200px;
  object-fit: cover;
}

.offer-box-products img {
  width: 540px;
  height: 360px;
  object-fit: cover;
}
</style>
