<!--
*Author: Eloise
*Date: 2021-06-20 18:53
-->
<template>
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to='/index'>首页</router-link>
            </li>
            <li class="breadcrumb-item active"> 用户中心</li>
          </ul>
          <h2>用户中心</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!-- Start My Account  -->
  <div class="my-account-box-main">
    <div class="container">
      <div class="my-account-page">
        <div class="row">
          <div class="col-lg-4 col-md-12">
            <div class="account-box">
              <div class="service-box">
                <div class="service-icon">
                  <router-link :to="{ path: '/order-list', query: { userId: userId} }">
                    <i class="fa fa-gift"></i>
                  </router-link>
                </div>
                <div class="service-desc">
                  <h4>订单中心</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="account-box">
              <div class="service-box">
                <div class="service-icon">
                  <router-link :to="{ path: '/modifypwd', query: { userId: userId} }">
                    <i class="fa fa-lock"></i>
                  </router-link>
                </div>
                <div class="service-desc">
                  <h4>修改密码</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="account-box">
              <div class="service-box">
                <div class="service-icon">
                  <router-link :to="{ path: '/addr', query: { userId: userId} }">
                    <i class="fa fa-location-arrow"></i>
                  </router-link>
                </div>
                <div class="service-desc">
                  <h4>地址管理</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="account-box">
              <div class="service-box">
                <div class="service-icon">
                  <router-link :to="{ path: '/userinfo', query: { userId: userId} }">
                    <i class="fa fa-user"></i>
                  </router-link>
                </div>
                <div class="service-desc">
                  <h4>个人信息</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="account-box">
              <div class="service-box">
                <div class="service-icon">
                  <router-link :to="{ path: '/sale-list', query: { userId: userId} }">
                    <i class="fas fa-store"></i>
                  </router-link>
                </div>
                <div class="service-desc">
                  <h4>商品营销</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="account-box">
              <div class="service-box">
                <div class="service-icon">
                  <router-link :to="{ path: '/notice', query: { userId: userId} }">
                    <i class="fas fa-bell"></i>
                  </router-link>
                </div>
                <div class="service-desc">
                  <h4>系统消息</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End My Account -->
</template>

<script>
export default {
  name: 'MyAccount',
  data () {
    return {
      userId: ''
    }
  },
  created () {
    this.userId = this.$route.query.userId
  }
}
</script>

<style scoped>

</style>
