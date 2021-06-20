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
          <router-link class="navbar-brand" to="#"><img src="../assets/images/logo11.png" class="logo" alt="">
          </router-link>
        </div>
        <!-- End Header Navigation -->

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbar-menu">
          <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
            <li class="nav-item active"><a class="nav-link" href="index.html">首页</a></li>
            <li class="dropdown">
              <a class="nav-link dropdown-toggle arrow" data-toggle="dropdown" href="#">现货商品</a>
              <ul class="dropdown-menu">
                <li><router-link :to="{ path: '/shop', query: { typeId: '1' }}">粮油</router-link></li>
                <li><router-link :to="{ path: '/shop', query: { typeId: '2' }}">果蔬</router-link></li>
                <li><router-link :to="{ path: '/shop', query: { typeId: '3' }}">花卉</router-link></li>
                <li><router-link :to="{ path: '/shop', query: { typeId: '4' }}">林产品</router-link></li>
                <li><router-link :to="{ path: '/shop', query: { typeId: '5' }}">畜禽产品</router-link></li>
                <li><router-link :to="{ path: '/shop', query: { typeId: '6' }}">水产品</router-link></li>
                <li><router-link :to="{ path: '/shop', query: { typeId: '7' }}">其他农副产品</router-link></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="nav-link dropdown-toggle arrow" data-toggle="dropdown">在线农场</a>
              <ul class="dropdown-menu">
                <li><a href="shop.html">农场集市</a></li>
                <li><a href="myland.html">我的农场</a></li>
              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="nav-link dropdown-toggle arrow" data-toggle="dropdown">乡村振兴</a>
              <ul class="dropdown-menu">
                <li><a href="shop.html">农产品</a></li>
                <li><a href="landmark.html">地理标志</a></li>
                <li><a href="emergency.html">应急·滞销</a></li>
              </ul>
            </li>
            <li class="nav-item"><a class="nav-link" href="tour.html">文·旅</a></li>
            <li class="nav-item"><a class="nav-link" href="dateproduct.html">产品溯源</a></li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->

        <!-- Start Atribute Navigation -->
        <div class="attr-nav">
          <ul>
            <li class="searchpage"><a href="search.html"><i class="fa fa-search"></i></a></li>
            <li class="wishlist">
              <a href="wishlist.html">
                <p><i class="fa fa-shopping-bag mr-1"></i>我的收藏</p>
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
              <a href="#" class="photo"><img src="../assets/images/img-pro-01.jpg" class="cart-thumb" alt=""/></a>
              <h6><a href="#">Delica omtantur </a></h6>
              <p>1x - <span class="price">$80.00</span></p>
            </li>
            <li>
              <a href="#" class="photo"><img src="../assets/images/img-pro-02.jpg" class="cart-thumb" alt=""/></a>
              <h6><a href="#">Omnes ocurreret</a></h6>
              <p>1x - <span class="price">$60.00</span></p>
            </li>
            <li>
              <a href="#" class="photo"><img src="../assets/images/img-pro-03.jpg" class="cart-thumb" alt=""/></a>
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

  <!--搜索  （页面没显示）-->
  <div class="top-search">
    <div class="container">
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-search"></i></span>
        <input type="text" class="form-control" placeholder="Search">
        <span class="input-group-addon close-search"><i class="fa fa-times"></i></span>
      </div>
    </div>
  </div>
  <!--搜索结束-->
  <!--通用顶部结束-->
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style scoped>

</style>
