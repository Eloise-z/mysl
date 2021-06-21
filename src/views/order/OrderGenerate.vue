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
            <li class="breadcrumb-item">
              <router-link to="/index">首页</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/order-list"> 订单</router-link>
            </li>
            <li class="breadcrumb-item active"> 生成订单</li>
          </ul>
          <h2>生成订单</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="#">
    <div class="container">
      <div class="row">
        <span style="margin-top: 20px; margin-bottom: 20px; font-size: 23px;">收货信息</span>
      </div>
      <div class="row">
        <form class="form-horizontal" role="form">
          <div class="form-group" style="margin-left: 30px">
            <div class="row">
              <h3>张三 / 15509080002</h3>
            </div>
            <div class="row">
              <h3>四川省 / 成都市 / 双流区</h3>
            </div>
            <div class="row">
              <h3>成都信息工程大学（航空港校区）</h3>
            </div>
            <div class="row">
              <select class="form-control">
                <option>张三 / 15509080002 / 四川省 / 成都市 / 双流区 / 成都信息工程大学（航空港校区）</option>
                <option>李四 / 15509080002 / 四川省 / 成都市 / 双流区 / 成都信息工程大学（航空港校区）</option>
                <option>王五 / 15509080002 / 四川省 / 成都市 / 双流区 / 成都信息工程大学（航空港校区）</option>
              </select>
            </div>
            <div class="row" style="margin-top: 20px;">
              <label for="remark"><b>备注：</b></label>
              <textarea class="form-control" id="remark" cols="300" style="width: 600px" rows="2"
                        placeholder="请输入备注"></textarea>
            </div>
          </div>
        </form>
      </div>
      <hr>
      <div class="row">
        <span style="margin-top: 20px; margin-bottom: 20px; font-size: 23px;">支付方式</span>
      </div>
      <div class="row">
        <label id="payway1" class="mr-3" style="border: 2px solid white">
          <img style="height: 50px" src="../../assets/images/eloise/ali-pay.png" alt="图片找不到了">
          <span class="align-middle" style="font-size: 20px;">支付宝支付</span>
          <input v-model="payway" style="display: none" type="radio" name="payway" value="1">
        </label>

        <label id="payway2" class="mr-3" style="border: 2px solid white">
          <img style="height: 50px" src="../../assets/images/eloise/wechat-pay.png" alt="图片找不到了">
          <span class="align-middle" style="font-size: 20px">微信支付</span>
          <input v-model="payway" style="display: none" type="radio" name="payway" value="2">
        </label>

        <label id="payway3" class="mr-3" style="border: 2px solid white">
          <img style="height: 50px; " src="../../assets/images/eloise/qq-pay.png" alt="图片找不到了">
          <span class="align-middle" style="font-size: 20px">QQ支付</span>
          <input v-model="payway" style="display: none" type="radio" name="payway" value="3">
        </label>

      </div>
      <hr>
      <div class="row">
        <span style="margin-top: 20px; margin-bottom: 20px; font-size: 23px;">生成订单</span>
      </div>
      <div class="row" style="margin-bottom: 100px;">
        <form class="form-horizontal" role="form">
          <div class="row">
            <div class="col">
              <img src="../../assets/images/img-pro-03.jpg" alt="图片找不到了">
            </div>
            <div class="col">
              <div class="form-group">
                <h3>[现货][乡村振兴]</h3>
              </div>
              <div class="form-group">
                <h3>红富士苹果水果10斤新鲜现摘脆甜一级当季整箱山东省烟...</h3>
              </div>
              <div class="form-group">
                <h3>商品单价：￥20.55</h3>
              </div>
              <div class="form-group">
                <h3>商品数量：1</h3>
              </div>
              <div class="form-group">
                <h3>总优惠：￥10.55</h3>
              </div>
              <div class="form-group">
                <h3>总需支付：￥10.00</h3>
              </div>
              <div class="row justify-content-end">
                <input type="button" class="btn btn-info" style="margin-right: 10px" @click="$router.back()" value="取消">
                <input type="button" class="btn btn-success" id="pay" value="支付" @click="$router.push('/pay-page')">
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
  name: 'Review',
  data () {
    return {
      payway: 0
    }
  },
  watch: {
    payway () {
      console.log('hello2')
      $('#payway1').css('border', '2px solid white')
      $('#payway2').css('border', '2px solid white')
      $('#payway3').css('border', '2px solid white')
      $('#payway' + this.payway).css('border', '2px solid rgb(176 180 53)')
    }
  }
}
</script>

<style scoped>

</style>
