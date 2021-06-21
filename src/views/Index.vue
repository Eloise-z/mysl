<!--
*Author: Eloise
*Date: 2021-06-13 20:12
-->
<template>
<!--新轮播图开始-->
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" style="padding: 0" data-interval="2500">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active" style="background-color: rgba(0, 0, 0, 0.4);">
        <img src="../assets/images/ylp.jpg" class="d-block w-100" style="width: 100%;height: 80vh;object-fit:cover" alt="">
        <div class="cover w-100"
             style="position: absolute ;right:0;top: 0;height:80vh;background-color: rgba(0, 0, 0, 0.4);"></div>
        <div class="carousel-caption d-none d-md-block" style="bottom:25% ">
          <h5><strong>爱农助农<br>服务三农</strong></h5>
          <p><i class="fas fa-at" style="padding-right: 5px;"></i>缅怀袁隆平院士</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/images/banner-02.jpg" style="width: 100%;height: 80vh;object-fit:cover" class="d-block w-100" alt="">
        <div class="cover w-100"
             style="position: absolute ;right:0;top: 0;height:80vh;background-color: rgba(0, 0, 0, 0.4);"></div>
        <div class="carousel-caption d-none d-md-block" style="bottom:25% ">
          <h5><i class="fas fa-broadcast-tower" style="padding-right: 5px;"></i><strong>全面小康 <br> 乡村振兴</strong></h5>
          <p>助力乡村振兴 <br><br> 加快农业农村现代化</p>
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
          <div
            class="offer-box-products"
            style="text-align: center; height: 360px"
          >
            <img
              src="https://ww1.sinaimg.cn/bmiddle/9b697c38gy1gqts4i5ph4j20go0dfgnf.jpg"
              alt="没找到图片"
            />
          </div>
        </div>
        <div class="col-lg-6 col-md-4 col-sm-12 col-xs-12">
          <div
            class="offer-box-products"
            style="text-align: center; height: 360px"
          >
            <img
              src="https://ww2.sinaimg.cn/bmiddle/9b697c38gy1gqts4hdxtfj20go0bsmya.jpg"
              alt="没找到图片"
            />
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
        <div
          v-for="list in ruralList"
          class="col-lg-4 col-md-4 col-sm-12 col-xs-12"
          :key="list.goodId"
        >
          <div class="shop-cat-box">
            <div class="type-lb">
              <p class="new">2列特推商品</p>
            </div>
            <img class="img-fluid" :src="list.goodPicture" alt="" />
            <a class="btn hvr-hover" href="#">{{ list.goodName }}</a>
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
        <div
          v-for="list in bestSellersList"
          class="col-lg-3 col-md-6 special-grid sale best-seller"
          :key="list.goodId"
        >
          <div class="products-single fix">
            <div class="box-img-hover">
              <div class="type-lb">
                <p class="sale">Sale</p>
              </div>
              <img :src="list.goodPicture" class="img-fluid" alt="Image" />
              <div class="mask-icon">
                <ul>
                  <li>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="View"
                      >
                      <i class="fas fa-eye"></i>
                      </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Compare"
                      >
                      <i class="fas fa-sync-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Add to Wishlist"
                      >
                      <i class="far fa-heart"></i>
                      </a>
                  </li>
                </ul>
                <a class="cart" href="#">Add to Cart</a>
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
            <h1>这是标题</h1>
            <p>这是简介这是简介这是简介这是简介这是简介这是简介这是简介</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4 col-xl-4">
          <div class="blog-box">
            <div class="blog-img">
              <img
                class="img-fluid"
                src="../assets/images/blog-img.jpg"
                alt=""
              />
            </div>
            <div class="blog-content">
              <div class="title-blog">
                <h3>这是标题</h3>
                <p>这是简介这是简介这是简介这是简介这是简介这是简介这是简介</p>
              </div>
              <ul class="option-blog">
                <li>
                  <a href="#"><i class="far fa-heart"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fas fa-eye"></i></a>
                </li>
                <li>
                  <a href="#"><i class="far fa-comments"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-4">
          <div class="blog-box">
            <div class="blog-img">
              <img
                class="img-fluid"
                src="../assets/images/blog-img-01.jpg"
                alt=""
              />
            </div>
            <div class="blog-content">
              <div class="title-blog">
                <h3>这是标题</h3>
                <p>这是简介这是简介这是简介这是简介这是简介这是简介这是简介</p>
              </div>
              <ul class="option-blog">
                <li>
                  <a href="#"><i class="far fa-heart"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fas fa-eye"></i></a>
                </li>
                <li>
                  <a href="#"><i class="far fa-comments"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-4">
          <div class="blog-box">
            <div class="blog-img">
              <img
                class="img-fluid"
                src="../assets/images/blog-img-02.jpg"
                alt=""
              />
            </div>
            <div class="blog-content">
              <div class="title-blog">
                <h3>这是标题</h3>
                <p>这是简介这是简介这是简介这是简介这是简介这是简介这是简介</p>
              </div>
              <ul class="option-blog">
                <li>
                  <a href="#"><i class="far fa-heart"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fas fa-eye"></i></a>
                </li>
                <li>
                  <a href="#"><i class="far fa-comments"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Blog  -->
  <!--商品简介结束-->
  <!--图片滚动开始-->
  <!-- Start Instagram Feed  -->
  <div class="instagram-box">
    <div class="main-instagram owl-carousel owl-theme">
      <div class="item">
        <div class="ins-inner-box">
          <img src="../assets/images/instagram-img-01.jpg" alt="" />
          <div class="hov-in">
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="ins-inner-box">
          <img src="../assets/images/instagram-img-02.jpg" alt="" />
          <div class="hov-in">
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="ins-inner-box">
          <img src="../assets/images/instagram-img-03.jpg" alt="" />
          <div class="hov-in">
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="ins-inner-box">
          <img src="../assets/images/instagram-img-04.jpg" alt="" />
          <div class="hov-in">
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="ins-inner-box">
          <img src="../assets/images/instagram-img-05.jpg" alt="" />
          <div class="hov-in">
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="ins-inner-box">
          <img src="../assets/images/instagram-img-06.jpg" alt="" />
          <div class="hov-in">
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="ins-inner-box">
          <img src="../assets/images/instagram-img-07.jpg" alt="" />
          <div class="hov-in">
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="ins-inner-box">
          <img src="../assets/images/instagram-img-08.jpg" alt="" />
          <div class="hov-in">
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="ins-inner-box">
          <img src="../assets/images/instagram-img-09.jpg" alt="" />
          <div class="hov-in">
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="ins-inner-box">
          <img src="../assets/images/instagram-img-05.jpg" alt="" />
          <div class="hov-in">
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Instagram Feed  -->
  <!--图片滚动结束-->
</template>

<script>
// index.js文件
import indexApi from '@/api/index'
export default {
  name: 'Index',
  data() {
    return {
      // 封装乡村振兴专区数据
      ruralList: [],
      // 封装热卖推荐数据
      bestSellersList: []
    }
  },
  created() {
    this.getIndexList()
  },
  methods: {
    getIndexList() {
      indexApi.getIndex().then((response) => {
        this.ruralList = response.data.rural
        this.bestSellersList = response.data.bestSellers
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
