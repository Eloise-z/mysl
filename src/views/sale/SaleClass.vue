<!--
*Author: Eloise
*Date: 2021-06-24 18:45
-->
<template>
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/index">首页</router-link></li>
            <li class="breadcrumb-item"><router-link to="/my-account"> 个人中心 </router-link></li>
            <li class="breadcrumb-item"><router-link to="/sale-list"> 营销管理 </router-link></li>
            <li class="breadcrumb-item active"> 商品类别管理</li>
          </ul>
          <h2>商品类别管理</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="userSaleClass">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-12 mb-5">
          <form>
            <div class="form-group">
              <label for="goodsID">商品编号</label>
              <input type="number" readonly class="form-control" id="goodsID" value="101122">
            </div>
            <div class="form-group">
              <label for="goodsName">商品名称</label>
              <input type="text" readonly class="form-control" id="goodsName" value="新疆棉花">
            </div>
          </form>
        </div>
        <div class="col-md-12 text-center">
          <table class="table table-hover table-striped">
            <thead class="thead-light">
            <tr>
              <th scope="col">类别ID</th>
              <th scope="col">类别名称</th>
              <th scope="col">商品类别状态</th>
              <th scope="col">操作时间</th>
              <th scope="col">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th>1</th>
              <td>乡村振兴</td>
              <td>已添加</td>
              <td>2021-6-23 22:15:28</td>
              <td>
                <a class="btn btn-outline-danger" href="#" role="button">移除该类别</a>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>水果</td>
              <td>不属于</td>
              <td></td>
              <td>
                <a class="btn btn-outline-success" href="#" role="button">添加该类别</a>
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>蔬菜</td>
              <td>不属于</td>
              <td></td>
              <td>
                <a class="btn btn-outline-success" href="#" role="button">添加该类别</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row mt-2">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaleClass'
}
</script>

<style scoped>

</style>
