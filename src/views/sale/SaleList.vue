<!--
*Author: Eloise
*Date: 2021-06-24 18:37
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
            <li class="breadcrumb-item active"> 营销管理</li>
          </ul>
          <h2>营销管理</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="userSaleList">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-12 text-right">
          <router-link class="btn btn-primary" role="button" to="/sale-add">新增商品</router-link>
          <router-link class="btn btn-primary" role="button" to="/sale-order">商品订单管理</router-link>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-md-12 text-center">
          <table class="table table-hover table-striped">
            <thead class="thead-light">
            <tr>
              <th scope="col">商品ID</th>
              <th scope="col">商品名称</th>
              <th scope="col">商品数量</th>
              <th scope="col">单价</th>
              <th scope="col">上市时间</th>
              <th scope="col">审核状态</th>
              <th scope="col">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th>1</th>
              <td>新疆棉花</td>
              <td>1000</td>
              <td>￥99.9</td>
              <td>2021-6-23 22:15:28</td>
              <td>审核未通过</td>
              <td>
                <router-link class="mr-3 btn-outline-info" to="/sale-add">修改</router-link>
                <router-link class="mr-3 btn-outline-info" to="/shop-detail">查看评论</router-link>
                <router-link class="mr-3 btn-outline-info" to="/sale-class">管理类别</router-link>
                <router-link class="mr-3 btn-outline-info" to="/sale-growing">动态管理</router-link>
                <a class="btn-outline-danger" href="#">删除</a>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>这是现货商品，没有动态管理</td>
              <td>1000</td>
              <td>￥99.9</td>
              <td>2021-6-23 22:15:28</td>
              <td>审核未通过</td>
              <td>
                <router-link class="mr-3 btn-outline-info" to="/sale-add">修改</router-link>
                <router-link class="mr-3 btn-outline-info" to="/shop-detail">查看评论</router-link>
                <router-link class="mr-3 btn-outline-info" to="/sale-class">管理类别</router-link>
                <a class="btn-outline-danger" href="#">删除</a>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>新疆棉花</td>
              <td>1000</td>
              <td>￥99.9</td>
              <td>2021-6-23 22:15:28</td>
              <td>审核未通过</td>
              <td>
                <router-link class="mr-3 btn-outline-info" to="/sale-add">修改</router-link>
                <router-link class="mr-3 btn-outline-info" to="/shop-detail">查看评论</router-link>
                <router-link class="mr-3 btn-outline-info" to="/sale-class">管理类别</router-link>
                <a class="btn-outline-danger" href="#">删除</a>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>新疆棉花</td>
              <td>1000</td>
              <td>￥99.9</td>
              <td>2021-6-23 22:15:28</td>
              <td>审核未通过</td>
              <td>
                <router-link class="mr-3 btn-outline-info" to="/sale-add">修改</router-link>
                <router-link class="mr-3 btn-outline-info" to="/shop-detail">查看评论</router-link>
                <router-link class="mr-3 btn-outline-info" to="/sale-class">管理类别</router-link>
                <router-link class="mr-3 btn-outline-info" to="/sale-growing">动态管理</router-link>
                <a class="btn-outline-danger" href="#">删除</a>
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
  name: 'SaleList'
}
</script>

<style scoped>

</style>
