<!--
*Author: Eloise
*Date: 2021-06-20 19:26
-->
<template>
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/index">首页</router-link></li>
            <li class="breadcrumb-item active"> 系统消息</li>
          </ul>
          <h2>系统消息</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="notice">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-12 shadow mb-3 p-3">
          <p style="font-size: 18px">您购买的 ”特色苹果“ 商品状态发生改变。<span
            style="float: right;font-size: 12px">2021-6-19 20:07:18</span></p>
        </div>
        <div class="col-lg-12 shadow mb-2 p-3">
          <p style="font-size: 18px">您购买的 ”特色苹果“ 商品状态发生改变。<span
            style="float: right;font-size: 12px">2021-6-19 20:07:18</span></p>
        </div>
        <div class="col-lg-12 shadow mb-2 p-3">
          <p style="font-size: 18px">您购买的 ”特色苹果“ 商品状态发生改变。<span
            style="float: right;font-size: 12px">2021-6-19 20:07:18</span></p>
        </div>
        <div class="col-lg-12 shadow mb-2 p-3">
          <p style="font-size: 18px">您购买的 ”特色苹果“ 商品状态发生改变。<span
            style="float: right;font-size: 12px">2021-6-19 20:07:18</span></p>
        </div>
        <div class="col-lg-12 shadow mb-2 p-3">
          <p style="font-size: 18px">您购买的 ”特色苹果“ 商品状态发生改变。<span
            style="float: right;font-size: 12px">2021-6-19 20:07:18</span></p>
        </div>
        <div class="col-lg-12 text-center mt-3 mb-5">
          <a role="button" class="btn btn-outline-primary w-100" href="#">加载更多</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notice'
}
</script>

<style scoped>

</style>
