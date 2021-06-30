<!--
*Author: Eloise
*Date: 2021-06-13 20:12
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
      <div v-for="(list, index) in bannerlist" class="carousel-item" :key="list.adId" :class="{'active' : index === 0}">
        <img :src="list.picUrl" style="width: 100%;height: 80vh;object-fit:cover" class="d-block w-100" alt="">
        <div v-show="list.adName !== ''" class="cover w-100"
             style="position: absolute ;right:0;top: 0;height:80vh;background-color: rgba(0, 0, 0, 0.4);"></div>
        <div class="carousel-caption d-none d-md-block" style="bottom:25% ">
          <h5>
            <!--<i class="fas fa-broadcast-tower" style="padding-right: 5px;"></i>-->
            <strong>{{ list.adName }} <br>{{ list.adTitle }}</strong>
          </h5>
          <p v-show="list.adSubtitle!==''"><i class="fas fa-at" style="padding-right: 5px;"></i>{{ list.adSubtitle }}
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

  <!--纪念袁老题字开始-->
  <div class="recommend" style="margin-top: 40px">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-all text-center">
            <h1>深切缅怀袁隆平院士</h1>
            <p>#袁爷爷留给年轻人的期盼#</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-4 col-sm-12 col-xs-12">
          <div class="offer-box-products" style="text-align: center; height: 360px">
            <img src="../assets/images/mhylp1.jpg" alt="没找到图片"/>
          </div>
        </div>
        <div class="col-lg-6 col-md-4 col-sm-12 col-xs-12">
          <div class="offer-box-products" style="text-align: center; height: 360px">
            <img src="../assets/images/mhylp2.jpg" alt="没找到图片"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--纪念袁老题字结束-->

  <!--3列 推荐商品开始-->
  <!-- 乡村振兴专区  -->
  <div class="categories-shop">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-all text-left">
            <div class="border-orange">
              <h1 style="margin-left: 20px">乡村振兴专区</h1>
            </div>
            <p style="margin-left: 20px">助力乡村振兴，加快农业农村现代化</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="list in ruralList" class="col-lg-4 col-md-4 col-sm-12 col-xs-12" :key="list.goodId">
          <div class="shop-cat-box" style="height: 250px;object-fit: contain">
            <div class="type-lb">
              <p class="hot">乡村振兴</p>
            </div>
            <img class="img-fluid" :src="list.goodPicture" alt=""/>
            <router-link class="btn hvr-hover" :to="{ path: '/shop-detail', query: { goodId: list.goodId } }">
              {{ list.goodName }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--全类商品开始-->
  <!-- Start Products  -->
  <div class="products-box">
    <div class="container">
      <!--标题开始-->
      <div class="row">
        <div class="row">
          <div class="col-lg-12">
            <div class="title-all text-left">
              <div class="border-orange">
                <h1 style="margin-left: 20px">热卖推荐</h1>
              </div>
              <p style="margin-left: 20px">最优质、最受欢迎的产品推荐给您</p>
            </div>
          </div>
        </div>
      </div>
      <!--标题结束-->

      <!--商品展示开始-->
      <div class="row special-list">
        <div v-for="list in bestSellersList" class="col-lg-3 col-md-6 special-grid sale best-seller mb-2"
             style="height:400px;" :key="list.goodId">
          <div class="products-single fix">
            <div class="box-img-hover">
              <div class="type-lb">
                <p class="new">推荐</p>
              </div>
              <img :src="list.goodPicture" class="img-fluid" style="height:300px;object-fit:cover" alt="Image"/>
              <div class="mask-icon">
                <router-link class="cart" :to="{ path: '/shop-detail', query: { goodId: list.goodId } }">查看商品
                </router-link>
              </div>
            </div>
            <div class="why-text">
              <h4>{{ list.goodName }}</h4>
              <h5>￥{{ list.goodPrice }}</h5>
            </div>
          </div>
        </div>
      </div>
      <!--商品展示结束-->
    </div>
  </div>
  <!-- End Products  -->
  <!--全类商品结束-->

  <!--商品简介开始-->
  <!-- Start Blog  -->
  <div class="latest-blog">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-all text-center">
            <h1><span style="color:#D91D10;font-size: 35px">建党100年</span><span
              style="color: #999999;font-size: 25px">&</span><span style="color: #0068b7;font-size: 35px">建校70年</span>
            </h1>
            <p>红旅线路与校园风景推荐</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-6 col-xl-6">
          <div class="blog-box" style="height: 600px">
            <div class="blog-img text-center">
              <img class="img-fluid" style="height: 360px;width:100%;object-fit: cover" alt=""
                   src="https://n1-q.mafengwo.net/s10/M00/D4/D0/wKgBZ1lgRSWAPcRVAA4min43Nsc78.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cHM6Ly9iMS1xLm1hZmVuZ3dvLm5ldC9zMTEvTTAwLzQ0LzlCL3dLZ0JFRnNQNVJ5QUR2N3BBQUFIWlpVUFJsUTk5MC5wbmc%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11">
            </div>
            <div class="blog-content">
              <div class="title-blog">
                <h3>中国共产党第一次全国代表大会会址纪念馆</h3>
                <p>1921年中国共产党第一次全国代表大会，就在这里的一间18平方米的客厅内召开。</p>
              </div>
            </div>
            <ul class="option-blog" style="position: absolute; bottom: 45px">
              <li>
                <router-link :to="{ path: '/tour-detail', query: { toId: 8 } }">
                  <i class="fas fa-eye"></i>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-6">
          <div class="blog-box" style="height: 600px">
            <div class="blog-img text-center">
              <img class="img-fluid" style="height: 360px;width:100%;object-fit: cover" alt=""
                   src="https://www.cuit.edu.cn/__local/0/97/35/07A2E6DAFC4B8AB6CEA8C480683_35845070_6C2A5.jpg?e=.jpg"/>
            </div>
            <div class="blog-content">
              <div class="title-blog">
                <h3>成信大校园风光</h3>
                <p>面向未来，学校将继续秉承“成于大气，信达天下”的大学精神，以人为本，追求卓越，努力为服务国家战略需求和区域经济社会发展做出更多更大贡献。</p>
              </div>
            </div>
            <ul class="option-blog" style="position: absolute; bottom: 45px">
              <li>
                <router-link :to="{ path: '/tour-detail', query: { toId: 9 } }">
                  <i class="fas fa-eye"></i>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Blog  -->
  <!--商品简介结束-->
</template>

<script>
// index.js文件
import indexApi from '@/api/index'
import bannerApi from '@/api/banner'

export default {
  name: 'Index',
  data () {
    return {
      // 封装乡村振兴专区数据
      ruralList: [],
      // 封装热卖推荐数据
      bestSellersList: [],
      bannerlist: []
    }
  },
  created () {
    this.getIndexList()
    this.getBannerList()
  },
  methods: {
    getIndexList () {
      indexApi.getIndex().then((response) => {
        this.ruralList = response.data.rural
        this.bestSellersList = response.data.bestSellers
      })
    },
    getBannerList () {
      bannerApi.getBannerList(1).then((response) => {
        this.bannerlist = response.data.adlist
      })
    }
  }
}
</script>

<style scoped>
.carousel-caption h5 {
  font-size: 65px;
  color: white;
}

.carousel-caption p {
  margin-top: 20px;
  font-size: 18px;
  color: white;
}
</style>
