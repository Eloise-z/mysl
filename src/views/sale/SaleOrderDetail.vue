<!--
*Author: Eloise
*Date: 2021-06-24 18:43
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
              <router-link to="/my-account"> 个人中心</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/sale-list"> 营销管理</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/order-list"> 订单管理</router-link>
            </li>
            <li class="breadcrumb-item active"> 订单详情</li>
          </ul>
          <h2>订单详情</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="userSaleList">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-12 mb-5">
          <form>
            <div class="form-group">
              <label for="orderId">订单编号</label>
              <input type="text" readonly class="form-control" id="orderId" required value="101122">
            </div>
            <div class="form-group">
              <label for="goodsID">商品ID</label>
              <input type="text" readonly step="0.01" min="0" class="form-control" id="goodsID" required value="112">
            </div>
            <div class="form-group">
              <label for="goodsName">商品名称</label>
              <input type="text" readonly step="0.01" min="0" class="form-control" id="goodsName" required value="新疆棉花">
            </div>
            <div class="form-group">
              <div class="row p-3">
                <div class="col-md-3">
                  <p class="address-title">收货地址信息</p>
                </div>
                <div class="col-md-9">
                  <select disabled class="form-control mb-3 address-select">
                    <option>四川省</option>
                    <option>重庆市</option>
                    <option>湖南省</option>
                  </select>
                  <select disabled class="form-control mb-3 address-select">
                    <option>成都市</option>
                    <option>宜宾市</option>
                    <option>广安市</option>
                  </select>
                  <select disabled class="form-control  mb-3 address-select">
                    <option>双流区</option>
                    <option>成华区</option>
                    <option>高新区</option>
                  </select>
                  <textarea readonly class="form-control" placeholder="具体收货地址"></textarea>
                </div>
              </div>
            </div>
            <div class="row p-3">
              <div class="col-md-3">
                <p class="address-title">收货人信息</p>
              </div>
              <div class="col-md-9">
                <div class="row mb-3">
                  <div class="col-md-2" style="text-align: right">
                    <p style="display: inline-block; line-height: 48px">收货人姓名</p>
                  </div>
                  <div class="col-md-6"><input readonly class="form-control address-input"></div>
                </div>
                <div class="row">
                  <div class="col-md-2" style="text-align: right">
                    <p style="display: inline-block; line-height: 48px">收货人手机号</p>
                  </div>
                  <div class="col-md-6"><input readonly class="form-control address-input"></div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="createTime">订单创建时间</label>
              <input type="text" class="form-control" id="createTime" readonly>
            </div>
            <div class="form-group">
              <label for="totalPay">支付金额</label>
              <input type="text" class="form-control" id="totalPay" readonly>
            </div>
            <div class="form-group">
              <label for="goodsNum">购买数量</label>
              <input type="text" class="form-control" id="goodsNum" readonly>
            </div>
            <div class="form-group">
              <label for="remark">备注</label>
              <textarea cols="3" class="form-control" id="remark" readonly></textarea>
            </div>
            <button type="button" class="btn">返回</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaleOrderDetail'
}
</script>

<style scoped>

</style>
