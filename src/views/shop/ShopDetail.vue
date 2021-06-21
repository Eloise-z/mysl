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
            <li class="breadcrumb-item"><a href="#">首页</a></li>
            <li class="breadcrumb-item"><a href="#"> 商品列表 </a></li>
            <li class="breadcrumb-item active"> 商品详情</li>
          </ul>
          <h2>XXX</h2>
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
              <div class="carousel-item active"><img class="d-block w-100" src="../../assets/images/big-img-01.jpg"
                                                     alt="First slide"></div>
              <div class="carousel-item"><img class="d-block w-100" src="../../assets/images/big-img-02.jpg"
                                              alt="Second slide">
              </div>
              <div class="carousel-item"><img class="d-block w-100" src="../../assets/images/big-img-03.jpg"
                                              alt="Third slide"></div>
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
              <li data-target="#carousel-example-1" data-slide-to="0" class="active">
                <img class="d-block w-100 img-fluid" src="../../assets/images/smp-img-01.jpg" alt=""/>
              </li>
              <li data-target="#carousel-example-1" data-slide-to="1">
                <img class="d-block w-100 img-fluid" src="../../assets/images/smp-img-02.jpg" alt=""/>
              </li>
              <li data-target="#carousel-example-1" data-slide-to="2">
                <img class="d-block w-100 img-fluid" src="../../assets/images/smp-img-03.jpg" alt=""/>
              </li>
            </ol>
          </div>
        </div>
        <!--右侧商品信息-->
        <div class="col-xl-7 col-lg-7 col-md-6">
          <div class="single-product-details">
            <h2>新疆葡萄</h2>
            <h5>
              <del>￥ 60.00</del>
              ￥40.79
            </h5>
            <p class="available-stock"><span> 库存999 / <a href="#">销售999 </a></span>
            </p>
            <p class="goods-info-detail">上市时间：2021年6月19日</p>
            <p class="goods-info-detail">商品编号：1</p>
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
            <p>[乡村振兴][现货]</p>
          </div>
          <div class="row">
            <div class="col-xl-12">
              <div class="price-box-bar">
                <div class="cart-and-bay-btn">
                  <router-link class="btn hvr-hover" style="margin-right: 5px" data-fancybox-close="" to="/order-generate">立即购买</router-link>
                  <a class="btn hvr-hover" data-fancybox-close="" href="#">加入收藏</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <!--商品详情-->
      <div class="row my-5">
        <div class="shop-detail-content card card-outline-secondary col-md-12">
          <div class="card-header">
            <h2>商品详情</h2>
          </div>
          <div class="card-body">
            <div class="media mb-3">
              <div class="media-body">
                这是商品视频简介，CF限定 G36-精英（永久）CF限定 G36-精英（永久）
                CF限定 G36-精英（永久）CF限定 G36-精英（永久）
              </div>
            </div>
            <hr>
            <router-link to="/growing" class="btn hvr-hover">查看商品动态</router-link>
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
            <div class="media mb-3">
              <div class="mr-2">
                <img class="rounded-circle border p-1"
                     src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                     alt="Generic placeholder image">
              </div>
              <div class="media-body">
                <p>评价方未及时做出评价,系统默认好评!</p>
                <small class="text-muted"><span>我爱农产品</span> 2021年6月19日12:31:04</small>
              </div>
            </div>
            <hr>
            <div class="media mb-3">
              <div class="mr-2">
                <img class="rounded-circle border p-1"
                     src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                     alt="Generic placeholder image">
              </div>
              <div class="media-body">
                <p>评价方未及时做出评价,系统默认好评!</p>
                <small class="text-muted"><span>我爱农产品</span> 2021年6月19日12:31:04</small>
              </div>
            </div>
            <hr>
            <div class="media mb-3">
              <div class="mr-2">
                <img class="rounded-circle border p-1"
                     src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                     alt="Generic placeholder image">
              </div>
              <div class="media-body">
                <p>评价方未及时做出评价,系统默认好评!</p>
                <small class="text-muted"><span>我爱农产品</span> 2021年6月19日12:31:04</small>
              </div>
            </div>
            <hr>
            <a href="#" class="btn hvr-hover">展示更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Cart -->
</template>

<script>
import '../../assets/css/aricommen.css'

export default {
  name: 'ShopDetail'
}
</script>

<style scoped>

</style>
