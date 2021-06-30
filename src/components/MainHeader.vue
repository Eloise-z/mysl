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
        <div class="navbar-header" style="margin-top:10px">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu"
                  aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
          </button>
          <router-link class="navbar-brand" to="/index">
            <img style="height: 70px" src="../assets/images/logo11.png" class="logo" alt="">
          </router-link>
          <a href="#" class="font-weight-bold align-middle" style="height: 82px; font-size: 16px">梦源商旅</a>
        </div>
        <!-- End Header Navigation -->

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbar-menu">
          <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
            <li class="nav-item">
              <router-link to="/index" class="nav-link" :style="{color:(navChoose === 1)?'rgb(176 180 53)':'black'}">
                首页
              </router-link>
            </li>
            <li class="dropdown">
              <router-link class="nav-link dropdown-toggle arrow" data-toggle="dropdown"
                           :to="{path:'/shop',query: {goodState: 0}}"
                           :style="{color:(navChoose === 2)?'rgb(176 180 53)':'black'}">现货商品
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
            <li class="dropdown">
              <router-link :to="{path:'/shop',query: {goodState: 1}}" class="nav-link dropdown-toggle arrow"
                           data-toggle="dropdown" :style="{color:(navChoose === 3)?'rgb(176 180 53)':'black'}">在线农场
              </router-link>
              <ul class="dropdown-menu">
                <li>
                  <router-link :to="{path:'/shop',query: {goodState: 1}}">农场集市</router-link>
                </li>
                <li>
                  <router-link :to="{path:'/my-farm'}">我的农场</router-link>
                </li>
              </ul>
            </li>

            <li class="dropdown">
              <router-link :to="{path:'/shop',query: {typeId: 13}}" class="nav-link dropdown-toggle arrow"
                           data-toggle="dropdown" :style="{color:(navChoose === 4)?'rgb(176 180 53)':'black'}">乡村振兴
              </router-link>
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
            <li class="nav-item">
              <router-link class="nav-link" to="/tour" :style="{color:(navChoose === 5)?'rgb(176 180 53)':'black'}">
                文·旅
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/origin" :style="{color:(navChoose === 6)?'rgb(176 180 53)':'black'}">
                产品溯源
              </router-link>
            </li>
            <li class="nav-item" style="margin-left: 72px">
              <router-link class="nav-link" to="/search" :style="{color:(navChoose === 7)?'rgb(176 180 53)':'black'}">
                <i class="fa fa-search"></i> 搜索
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/wishlist" :style="{color:(navChoose === 8)?'rgb(176 180 53)':'black'}">
                <i class="fa fa-shopping-bag mr-1"></i> 我的收藏
              </router-link>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
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
  },

  // 监听路由变化
  watch: {
    '$route' (to) {
      // 路由发生变化页面刷新
      switch (to.path) {
        case '/index' :
          this.navChoose = 1
          break
        case '/shop' :
          this.navChoose = 2
          switch (to.fullPath) {
            case '/shop?goodState=1' :
              this.navChoose = 3
              break
            case '/shop?typeId=13' :
              this.navChoose = 4
              break
          }
          break
        case '/my-farm' :
          this.navChoose = 3
          break
        case '/landmark' :
          this.navChoose = 4
          break
        case '/emergency' :
          this.navChoose = 4
          break
        case '/tour' :
          this.navChoose = 5
          break
        case '/origin' :
          this.navChoose = 6
          break
        case '/search' :
          this.navChoose = 7
          break
        case '/wishlist' :
          this.navChoose = 8
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 100px;
}

.attr-nav ul {
  width: 152px;
  height: 82px;
}
</style>
