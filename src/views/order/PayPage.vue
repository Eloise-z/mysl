<!--
*Author: Eloise
*Date: 2021-06-21 12:48
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
            <li class="breadcrumb-item active"> 支付</li>
          </ul>
          <h2>支付</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="paycode">
    <div class="container">
      <div class="shadow p-3 mb-5 bg-white rounded mt-5">
        <form class="form-horizontal" role="form">
          <div class="top-tip">
            <div class="border-green">
              <p class="ml-2">订单提交成功，请尽快付款！订单编号：7</p>
              <p class="ml-2">应付金额<span class="font-weight-bold" style="color: #e31613;font-size: 18px">100.00</span>元
              </p>
            </div>
          </div>
          <hr>
          <div class="row" style="margin-bottom: 50px; margin-top: 50px">
            <div class="paycode" style="margin: 0 auto">
              <h3>测试阶段，点击图片即视为支付</h3>
              <img src="../../assets/images/paycode.png" @click="$router.push('/pay-res')" alt="图片找不到了">
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="tip text-center" style="text-align: center">
              <p class="ml-5"><i class="fas fa-qrcode p-2"></i>请使用微信或支付宝扫一扫，扫描二维码支付</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PayPage'
}
</script>

<style scoped>

</style>
