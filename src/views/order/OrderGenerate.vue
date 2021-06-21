<!--
*Author: Eloise
*Date: 2021-06-21 12:22
-->
<template>
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/index">首页</router-link></li>
            <li class="breadcrumb-item"><router-link to="/order-list"> 订单 </router-link></li>
            <li class="breadcrumb-item active"> 生成订单</li>
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
      <div class="row">
        <span style="margin-top: 20px; margin-bottom: 20px; font-size: 35px;">收货信息</span>
      </div>
      <div class="row">
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label for="exampleFormControlSelect1">
              <div class="row" style="padding-left: 30px">
                <h3><span>张三</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>15509080002</span></h3>
              </div>
              <div class="row" style="padding-left: 30px">
                <h3><span>四川省</span> / <span>成都市</span> / <span>双流区</span></h3>
              </div>
              <div class="row" style="padding-left: 30px">
                <h3><span>成都信息工程大学（航空港校区）</span></h3>
              </div>
            </label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>
                <div class="row" style="padding-left: 30px">
                  <h3><span>张三</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>15509080002</span></h3>
                </div>
                <div class="row" style="padding-left: 30px">
                  <h3><span>四川省</span> / <span>成都市</span> / <span>双流区</span></h3>
                </div>
                <div class="row" style="padding-left: 30px">
                  <h3><span>成都信息工程大学（航空港校区）</span></h3>
                </div>
              </option>
              <option>
                <div class="row" style="padding-left: 30px">
                  <h3><span>李四</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>15509080002</span></h3>
                </div>
                <div class="row" style="padding-left: 30px">
                  <h3><span>四川省</span> / <span>成都市</span> / <span>双流区</span></h3>
                </div>
                <div class="row" style="padding-left: 30px">
                  <h3><span>成都信息工程大学（航空港校区）</span></h3>
                </div>
              </option>
            </select>
          </div>

          <div class="row" style="margin-top: 20px; padding-left: 30px">
            <div class="form-group form-inline">
              <label for="remark"><h3><span>备注：</span></h3></label>
              <textarea class="form-control" id="remark" cols="300" style="width: 600px" rows="2"
                        placeholder="输入备注"></textarea>
            </div>
          </div>
        </form>
      </div>
      <hr>
      <div class="row">
        <span style="margin-top: 20px; margin-bottom: 20px; font-size: 35px;">支付方式</span>
      </div>
      <div class="row">
        <ul class="list-inline">
          <li class="list-inline-item" style="border: 3px solid white" onmouseenter="modifyToShow(this)"
              onmouseleave="modifyToHide(this)">
            <img style="height: 60px" src="../../assets/images/eloise/ali-pay.png" alt="图片找不到了">
            <span class="align-middle" style="font-size: 25px;">支付宝支付</span>
          </li>
          <li class="list-inline-item" style="border: 3px solid white" onmouseenter="modifyToShow(this)"
              onmouseleave="modifyToHide(this)">
            <img style="height: 60px" src="../../assets/images/eloise/wechat-pay.png" alt="图片找不到了">
            <span class="align-middle" style="font-size: 25px">微信支付</span>
          </li>
          <li class="list-inline-item" style="border: 3px solid white" onmouseenter="modifyToShow(this)"
              onmouseleave="modifyToHide(this)">
            <img style="height: 50px; margin-top: 5px; margin-bottom: 5px" src="../../assets/images/eloise/qq-pay.png"
                 alt="图片找不到了">
            <span class="align-middle" style="font-size: 25px">QQ支付</span>
          </li>
        </ul>
      </div>
      <hr>
      <div class="row">
        <span style="margin-top: 20px; margin-bottom: 20px; font-size: 35px;">生成订单</span>
      </div>
      <div class="row" style="margin-bottom: 100px;">
        <form class="form-horizontal" role="form">
          <div class="row">
            <div class="col">
              <img src="../../assets/images/img-pro-03.jpg" alt="图片找不到了">
            </div>
            <div class="col">
              <div class="form-group">
                <h2><span>[现货]</span><span>[乡村振兴]</span></h2>
              </div>
              <div class="form-group">
                <h3>红富士苹果水果10斤新鲜现摘脆甜一级当季整箱山东省烟...</h3>
              </div>
              <div class="form-group">
                <h3>商品单价：<span>￥</span><span>20.55</span></h3>
              </div>
              <div class="form-group">
                <h3>商品数量：<span>1</span></h3>
              </div>
              <div class="form-group">
                <h3>总优惠：<span>￥</span><span>10.55</span></h3>
              </div>
              <div class="form-group">
                <h3>总需支付：<span>￥</span><span>10.00</span></h3>
              </div>
              <div class="form-group row justify-content-end">
                <div class="col-2">
                  <input type="button" class="btn btn-info" id="cancelPay" value="取消">
                </div>
                <div class="col-auto">
                  <input type="button" class="btn btn-success" id="pay" value="支付"
                         onclick="window.location.href='paycode.html'">
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Review'
}
</script>

<style scoped>

</style>
