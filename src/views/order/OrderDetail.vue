<!--
*Author: Eloise
*Date: 2021-06-21 12:36
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
            <li class="breadcrumb-item active"> 订单详情</li>
          </ul>
          <h2>订单详情</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="#">
    <div class="container">
      <div class="shadow p-3 mb-5 bg-white rounded">
        <form class="form-horizontal" role="form">
          <hr>
          <div class="row" style="margin-bottom: 50px; margin-top: 50px">
            <div class="col-1">
            </div>
            <div class="col-4">
              <div class="row">
                <h3>订单编号：<span>210520100010001</span></h3>
              </div>
              <div class="row">
                <h3>创建时间：<span>2021-5-27 18:53:13</span></h3>
              </div>
              <div class="row">
                <h3>唯一产品码：<span>XXXXXXXXXX</span></h3>
              </div>
              <div class="row">
                <h3>物流号：<span>XXXXXXXXXX</span></h3>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <h3>状态：<span>已付款</span></h3>
              </div>
              <div class="row">
                <h3>支付方式：<span>支付宝</span></h3>
              </div>
              <div class="row">
                <h3>支付订单编号：<span>XXXXXXXXXX</span></h3>
              </div>
              <div class="row">
                <h3>支付时间：<span>2021-5-27 21:53:13</span></h3>
              </div>
            </div>
            <div class="col-3">
              <div class="row">
                <h3>应付金额：<span>￥</span><span>20.55</span></h3>
              </div>
              <div class="row">
                <h3>优惠金额：<span>￥</span><span>10.55</span></h3>
              </div>
              <div class="row">
                <h3>实付金额：<span>￥</span><span>10.00</span></h3>
              </div>
            </div>
          </div>
          <hr>
          <div class="row" style="margin-bottom: 50px; margin-top: 50px">
            <div class="col-1"></div>
            <div class="col-3">
              <img src="../../assets/images/img-pro-03.jpg" style="width: 200px; height: 200px;" alt="图片找不到了">
            </div>
            <div class="col-5">
              <div class="form-group">
                <h3><span>[现货]</span><span>[乡村振兴]</span></h3>
              </div>
              <div class="form-group">
                <h3>红富士苹果水果10斤新鲜现摘斤新鲜现斤新鲜现脆甜摘斤新级当季整箱山东省烟........................</h3>
              </div>
              <div class="form-group">
                <h3>商品单价：<span>￥</span><span>20.55</span></h3>
              </div>
              <div class="form-group">
                <h3>商品数量：<span>1</span></h3>
              </div>
            </div>
            <div class="col-2">
              <div class="row justify-content-end">
                <input type="button" class="btn btn-info" id="cancelPay" value="确认收货" onclick="window.location.href='orderreview.html'">
              </div>
            </div>
            <div class="col-1"></div>
          </div>
          <hr>
          <div class="row">
            <div class="col-1"></div>
            <div class="col-6">
              <div class="form-group">
                <div class="row"><h3>收货信息：</h3></div>
                <div class="row">
                  <h3><span>李四</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>15509080002</span></h3>
                </div>
                <div class="row">
                  <h3><span>四川省</span> / <span>成都市</span> / <span>双流区</span></h3>
                </div>
                <div class="row">
                  <h3><span>成都信息工程大学（航空港校区）</span></h3>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <h3>状态：<span>商家处理中</span></h3>
              </div>
              <div class="row">
                <h3>备注：<span>请速发货！！！请速发货！！！请速发货！！！请速发货！！！请速发货！！！请速发货！！！</span></h3>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderDetail'
}
</script>

<style scoped>

</style>
