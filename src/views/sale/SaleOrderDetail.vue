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
            <li class="breadcrumb-item active"> 订单管理</li>
          </ul>
          <h2>订单管理</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="userSaleList">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-12 text-center">
          <table class="table table-hover table-striped">
            <thead class="thead-light">
            <tr>
              <th scope="col">订单ID</th>
              <th scope="col">商品名称</th>
              <th scope="col">订单状态</th>
              <th scope="col">订单创建时间</th>
              <th scope="col">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th>1</th>
              <td>新疆棉花</td>
              <td>已支付</td>
              <td>2021-6-23 22:15:28</td>
              <td>
                <a class="mr-3 btn btn-outline-success" href="#">接单</a>
                <a class="mr-3 btn btn-outline-warning" href="#">取消订单</a>
                <router-link class="mr-3 btn btn-outline-info" to="/sale-order-detail">查看详情</router-link>
                <a class="btn btn-outline-danger" href="#">删除</a>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>新疆棉花</td>
              <td>已接单</td>
              <td>2021-6-23 22:15:28</td>
              <td>
                <a class="mr-3 btn btn-outline-success" href="#">发货</a>
                <router-link class="mr-3 btn btn-outline-info" to="/sale-order-detail">查看详情</router-link>
                <a class="btn btn-outline-danger" href="#">删除</a>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>新疆棉花</td>
              <td>已发货</td>
              <td>2021-6-23 22:15:28</td>
              <td>
                <router-link class="mr-3 btn btn-outline-info" to="/sale-order-detail">查看详情</router-link>
                <a class="btn btn-outline-danger" href="#">删除</a>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>新疆棉花</td>
              <td>用户已签收</td>
              <td>2021-6-23 22:15:28</td>
              <td>
                <router-link class="mr-3 btn btn-outline-info" to="/sale-order-detail">查看详情</router-link>
                <a class="btn btn-outline-danger" href="#">删除</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-lg-12 text-center mb-5">
          <a class="btn btn-outline-primary w-100" role="button" href="#">展示更多</a>
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
