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
          <router-link class="navbar-brand" to="/index"><img src="../assets/images/logo11.png" class="logo" alt="">
          </router-link>
        </div>
        <!-- End Header Navigation -->

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbar-menu">
          <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
            <li class="nav-item" @click="navChoose = 1" :class="{'active' : navChoose === 1}">
              <router-link to="/index" class="nav-link">首页</router-link>
            </li>
            <li class="dropdown" @click="navChoose = 2" :class="{'active' : navChoose === 2}">
              <router-link class="nav-link dropdown-toggle arrow" data-toggle="dropdown"
                           :to="{path:'/shop',query: {goodState: 0}}">现货商品
              </router-link>
              <ul class="dropdown-menu">
                <li>
                  <router-link :to="{path:'/shop',query: {typeId: 1,goodState: 0}}">粮油</router-link>
                </li>
                <li>
                  <router-link :to="{path:'/shop',query: {typeId: 2,goodState: 0}}">果蔬</router-link>
                </li>
                <li>
                  <router-link :to="{path:'/shop',query: {typeId: 3,goodState: 0}}">花卉</router-link>
                </li>
                <li>
                  <router-link :to="{path:'/shop',query: {typeId: 22,goodState: 0}}">林产品</router-link>
                </li>
                <li>
                  <router-link :to="{path:'/shop',query: {typeId: 25,goodState: 0}}">畜牧产品</router-link>
                </li>
                <li>
                  <router-link :to="{path:'/shop',query: {typeId: 26,goodState: 0}}">水产品</router-link>
                </li>
                <li>
                  <router-link :to="{path:'/shop',query: {typeId: 37,goodState: 0}}">其他农副产品</router-link>
                </li>
              </ul>
            </li>
            <li class="dropdown" @click="navChoose = 3" :class="{'active' : navChoose === 3}">
              <a href="#" class="nav-link dropdown-toggle arrow" data-toggle="dropdown">在线农场</a>
              <ul class="dropdown-menu">
                <li>
                  <router-link :to="{path:'/shop',query: {goodState: 1}}">农场集市</router-link>
                </li>
                <li>
                  <router-link :to="{path:'/my-farm'}">我的农场</router-link>
                </li>
              </ul>
            </li>

            <li class="dropdown" @click="navChoose = 4" :class="{'active' : navChoose === 4}">
              <a href="#" class="nav-link dropdown-toggle arrow" data-toggle="dropdown">乡村振兴</a>
              <ul class="dropdown-menu">
                <li>
                  <router-link :to="{path:'/shop',query: {typeId: 13}}">农产品</router-link>
                </li>
                <li>
                  <router-link to="/landmark">地理标志</router-link>
                </li>
                <li>
                  <router-link to="/emergency">应急·滞销</router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item" @click="navChoose = 5" :class="{'active' : navChoose === 5}">
              <router-link class="nav-link" to="/tour">文·旅</router-link>
            </li>
            <li class="nav-item" @click="navChoose = 6" :class="{'active' : navChoose === 6}">
              <router-link class="nav-link" to="/origin">产品溯源</router-link>
            </li>
            <li class="nav-item" @click="navChoose = 7" :class="{'active' : navChoose === 7}" style="margin-left: 72px">
              <router-link class="nav-link" to="/search"><i class="fa fa-search"></i></router-link>
            </li>
            <li class="nav-item" @click="navChoose = 8" :class="{'active' : navChoose === 8}">
              <router-link class="nav-link" to="/wishlist"><i class="fa fa-shopping-bag mr-1"></i>我的收藏</router-link>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->

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
</template>

<script>
export default {
  name: 'MainHeader',
  data () {
    return {
      navChoose: 1
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 100px;
}

.attr-nav ul {
  width: 152.13px;
  height: 82.6px;
}
</style>
