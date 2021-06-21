<!--
*Author: Eloise
*Date: 2021-06-21 12:06
-->
<template>
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/index">首页</router-link></li>
            <li class="breadcrumb-item active"> 我的收藏</li>
          </ul>
          <h2>我的收藏</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!-- 我的收藏开始  -->
  <div class="wishlist-box-main">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="table-main table-responsive">
            <table class="table">
              <thead>
              <tr>
                <th>商品图片</th>
                <th>商品名称</th>
                <th>添加时间</th>
                <th>查看详情</th>
                <th>去购买</th>
                <th>移除</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="thumbnail-img">
                  <a href="#">
                    <img class="img-fluid" src="../../assets/images/img-pro-01.jpg" alt=""/>
                  </a>
                </td>
                <td class="name-pr">
                  <a href="#">
                    新疆棉花优质
                  </a>
                </td>
                <td class="go-detail">
                  <p>2021年6月19日21:02:57</p>
                </td>
                <td><a class="btn btn-outline-success" href="#">查看详情</a></td>
                <td class="go-buy">
                  <a class="btn btn-outline-success" href="#">购买</a>
                </td>
                <td class="remove-pr">
                  <a href="#">
                    <i class="fas fa-times"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="thumbnail-img">
                  <a href="#">
                    <img class="img-fluid" src="../../assets/images/img-pro-01.jpg" alt=""/>
                  </a>
                </td>
                <td class="name-pr">
                  <a href="#">
                    新疆棉花优质
                  </a>
                </td>
                <td class="go-detail">
                  <p>2021年6月19日21:02:57</p>
                </td>
                <td><a class="btn btn-outline-success" href="#">查看详情</a></td>
                <td class="go-buy">
                  <a class="btn btn-outline-success" href="#">购买</a>
                </td>
                <td class="remove-pr">
                  <a href="#">
                    <i class="fas fa-times"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="thumbnail-img">
                  <a href="#">
                    <img class="img-fluid" src="../../assets/images/img-pro-01.jpg" alt=""/>
                  </a>
                </td>
                <td class="name-pr">
                  <a href="#">
                    新疆棉花优质
                  </a>
                </td>
                <td class="go-detail">
                  <p>2021年6月19日21:02:57</p>
                </td>
                <td><a class="btn btn-outline-success" href="#">查看详情</a></td>
                <td class="go-buy">
                  <a class="btn btn-outline-success" href="#">购买</a>
                </td>
                <td class="remove-pr">
                  <a href="#">
                    <i class="fas fa-times"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="thumbnail-img">
                  <a href="#">
                    <img class="img-fluid" src="../../assets/images/img-pro-01.jpg" alt=""/>
                  </a>
                </td>
                <td class="name-pr">
                  <a href="#">
                    新疆棉花优质
                  </a>
                </td>
                <td class="go-detail">
                  <p>2021年6月19日21:02:57</p>
                </td>
                <td><a class="btn btn-outline-success" href="#">查看详情</a></td>
                <td class="go-buy">
                  <a class="btn btn-outline-success" href="#">购买</a>
                </td>
                <td class="remove-pr">
                  <a href="#">
                    <i class="fas fa-times"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td colspan="6">
                  <div class="col-lg-12 text-center mt-3 mb-5">
                    <a role="button" class="btn btn-outline-primary w-100" href="#">加载更多</a>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 我的收藏结束 -->
</template>

<script>
export default {
  name: 'WishList'
}
</script>

<style scoped>

</style>
