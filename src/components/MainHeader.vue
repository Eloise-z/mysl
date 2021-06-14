<!--
*Author: Eloise
*Date: 2021-06-13 19:46
-->
<template>
  <!--导航栏开始-->
  <header class="main-header">
    <!-- Start Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
      <div class="container">
        <!-- Start Header Navigation -->
        <div class="navbar-header">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu"
                  aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
          </button>
          <router-link class="navbar-brand" to="#"><img src="../assets/images/logo11.png" class="logo" alt=""></router-link>
        </div>
        <!-- End Header Navigation -->

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbar-menu">
          <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
            <li class="nav-item active"><router-link to="/index" class="nav-link">首页</router-link></li>
            <li class="dropdown">
              <a class="nav-link dropdown-toggle arrow" data-toggle="dropdown" href="#">现货商品</a>
              <ul class="dropdown-menu">
                <li><router-link to="/shop">粮油</router-link></li>
                <li><a href="shop.html">果蔬</a></li>
                <li><a href="shop.html">花卉</a></li>
                <li><a href="shop.html">林产品</a></li>
                <li><a href="shop.html">畜禽产品</a></li>
                <li><a href="shop.html">水产品</a></li>
                <li><a href="shop.html">其他农副产品</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="nav-link dropdown-toggle arrow" data-toggle="dropdown">在线农场</a>
              <ul class="dropdown-menu">
                <li><a href="shop.html">农场集市</a></li>
                <li><a href="shop-detail.html">我的农场</a></li>
              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="nav-link dropdown-toggle arrow" data-toggle="dropdown">乡村振兴</a>
              <ul class="dropdown-menu">
                <li><a href="shop.html">农产品</a></li>
                <li><a href="landmark.html">地理标志</a></li>
              </ul>
            </li>
            <li class="nav-item"><a class="nav-link" href="tour.html">游·览</a></li>
            <li class="nav-item"><a class="nav-link" href="dateproduct.html">产品溯源</a></li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->

        <!-- Start Atribute Navigation -->
        <div class="attr-nav">
          <ul>
            <li class="search"><a href="#"><i class="fa fa-search"></i></a></li>
            <li class="side-menu">
              <a href="#">
                <i class="fa fa-shopping-bag"></i>
                <!--<span class="badge">3</span>-->
                <p>我的收藏</p>
              </a>
            </li>
          </ul>
        </div>
        <!-- End Atribute Navigation -->
      </div>
      <!-- Start Side Menu -->
      <div class="side">
        <a href="#" class="close-side"><i class="fa fa-times"></i></a>
        <li class="cart-box">
          <ul class="cart-list">
            <li>
              <a href="#" class="photo"><img src="images/img-pro-01.jpg" class="cart-thumb" alt=""/></a>
              <h6><a href="#">Delica omtantur </a></h6>
              <p>1x - <span class="price">$80.00</span></p>
            </li>
            <li>
              <a href="#" class="photo"><img src="images/img-pro-02.jpg" class="cart-thumb" alt=""/></a>
              <h6><a href="#">Omnes ocurreret</a></h6>
              <p>1x - <span class="price">$60.00</span></p>
            </li>
            <li>
              <a href="#" class="photo"><img src="images/img-pro-03.jpg" class="cart-thumb" alt=""/></a>
              <h6><a href="#">Agam facilisis</a></h6>
              <p>1x - <span class="price">$40.00</span></p>
            </li>
            <li class="total">
              <a href="#" class="btn btn-default hvr-hover btn-cart">VIEW CART</a>
              <span class="float-right"><strong>Total</strong>: $180.00</span>
            </li>
          </ul>
        </li>
      </div>
      <!-- End Side Menu -->
    </nav>
    <!-- End Navigation -->
  </header>
  <!--导航栏结束-->
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style scoped>

</style>
