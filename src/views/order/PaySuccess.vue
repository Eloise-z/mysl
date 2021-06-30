<!--
*Author: Eloise
*Date: 2021-06-21 13:49
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
            <li class="breadcrumb-item active"> 支付结果</li>
          </ul>
          <h2>支付结果</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="paysuccess">
    <div class="container">
      <div class="shadow p-3 mb-5 bg-white rounded mt-5">
        <form class="form-horizontal" role="form">
          <div class="top-tip">
            <div class="pay-info">
              <p class="ml-2 font-weight-bold" style="font-size: 25px;color: #b0b435">支付成功！</p>
              <p class="ml-2">本次支付金额<span class="font-weight-bold"
                                          style="color: #e31613;font-size: 18px">{{ totalpay }}</span>元</p>
            </div>
          </div>
          <hr>
          <div class="row" style="margin-bottom: 30px; margin-top: 30px">
            <div class="col-md-12 text-center">
              <router-link class="btn btn-outline-primary w-25" to="/shop">继续购物</router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaySuccess',
  data () {
    return {
      totalpay: ''
    }
  },
  created () {
    this.totalpay = this.$route.query.totalpay
  }
}
</script>

<style scoped>

</style>
