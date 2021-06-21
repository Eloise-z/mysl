<!--
*Author: Eloise
*Date: 2021-06-21 12:31
-->
<template>
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/index">首页</router-link></li>
            <li class="breadcrumb-item"><router-link to="/my-account"> 用户中心 </router-link></li>
            <li class="breadcrumb-item"><router-link to="/order-list"> 订单列表 </router-link></li>
            <li class="breadcrumb-item"> 评价订单</li>
          </ul>
          <h2>评价订单</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="order-review">
    <div class="container">
      <div class="row" style="margin: 30px">
        <div class="col-lg-12">
          <p class="font-weight-bold" style="font-size: 30px;color: #28a745">确认收货成功</p>
          <p class="font-weight-bold">红富士苹果水果10斤新鲜现摘脆甜一级当季整箱山东省烟...</p>
        </div>
        <div class="col-lg-12 mt-5">
          <form>
            <div class="form-group">
              <label for="review-star">请对商品进行评价</label>
              <select class="form-control w-25" id="review-star">
                <option>好评</option>
                <option>中评</option>
                <option>差评</option>
              </select>
            </div>
            <div class="form-group">
              <label for="review-text">评价内容</label>
              <textarea class="form-control" id="review-text" rows="3"></textarea>
            </div>
            <div class="form-group mt-5">
              <button type="submit" class="btn btn-primary mr-3">提交评价</button>
              <button type="button" class="btn" onclick="window.location.href='orderlist.html'">跳过评价</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderReview'
}
</script>

<style scoped>

</style>
