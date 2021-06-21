<!--
*Author: Eloise
*Date: 2021-06-21 12:10
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
            <li class="breadcrumb-item active"> 我的农场</li>
          </ul>
          <h2>我的农场</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="land-list">
    <div class="container mt-5">
      <div class="row">
        <!--一个农场块开始-->
        <div class="col-lg-6">
          <div class="land-item shadow p-3 mb-4">
            <div class="row">
              <div class="col-md-6 text-left"><p>新疆在线农场</p></div>
              <div class="col-md-6 text-right"><p>支付成功</p></div>
            </div>
            <hr>
            <div class="row">
              <div class="col-md-4 text-left">
                <img src="../../assets/images/gallery-img-01.jpg" style="max-width: 150px">
              </div>
              <div class="col-md-8 text-left">
                <div class="row">
                  <div class="col-md-8"><p>新疆在线农场-在线农场1233</p></div>
                  <div class="col-md-4"><p>￥100.00</p></div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6"><p>总价：<span class="font-weight-bold">￥100.00</span></p></div>
                  <div class="col-md-6"><p>实付：<span class="font-weight-bold">￥100.00</span></p></div>
                </div>
              </div>
            </div>
            <hr>
            <div class="row w-75 text-center" style="margin: 0 auto">
              <div class="col-md-4"><a href="orderreview.html">评价</a></div>
              <div class="col-md-4"><a href="shop-detail.html">查看农场详情</a></div>
              <div class="col-md-4"><a href="growing.html">查看农场动态</a>
              </div>
            </div>
          </div>
        </div>
        <!--一个农场块结束-->
        <!--一个农场块开始-->
        <div class="col-lg-6">
          <div class="land-item shadow p-3 mb-4">
            <div class="row">
              <div class="col-md-6 text-left"><p>新疆在线农场</p></div>
              <div class="col-md-6 text-right"><p>支付成功</p></div>
            </div>
            <hr>
            <div class="row">
              <div class="col-md-4 text-left">
                <img src="../../assets/images/gallery-img-01.jpg" style="max-width: 150px">
              </div>
              <div class="col-md-8 text-left">
                <div class="row">
                  <div class="col-md-8"><p>新疆在线农场-在线农场1233</p></div>
                  <div class="col-md-4"><p>￥100.00</p></div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6"><p>总价：<span class="font-weight-bold">￥100.00</span></p></div>
                  <div class="col-md-6"><p>实付：<span class="font-weight-bold">￥100.00</span></p></div>
                </div>
              </div>
            </div>
            <hr>
            <div class="row w-75 text-center" style="margin: 0 auto">
              <div class="col-md-4"><a href="orderreview.html">评价</a></div>
              <div class="col-md-4"><a href="shop-detail.html">查看农场详情</a></div>
              <div class="col-md-4"><a href="growing.html">查看农场动态</a>
              </div>
            </div>
          </div>
        </div>
        <!--一个农场块结束-->
        <!--一个农场块开始-->
        <div class="col-lg-6">
          <div class="land-item shadow p-3 mb-4">
            <div class="row">
              <div class="col-md-6 text-left"><p>新疆在线农场</p></div>
              <div class="col-md-6 text-right"><p>支付成功</p></div>
            </div>
            <hr>
            <div class="row">
              <div class="col-md-4 text-left">
                <img src="../../assets/images/gallery-img-01.jpg" style="max-width: 150px">
              </div>
              <div class="col-md-8 text-left">
                <div class="row">
                  <div class="col-md-8"><p>新疆在线农场-在线农场1233</p></div>
                  <div class="col-md-4"><p>￥100.00</p></div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6"><p>总价：<span class="font-weight-bold">￥100.00</span></p></div>
                  <div class="col-md-6"><p>实付：<span class="font-weight-bold">￥100.00</span></p></div>
                </div>
              </div>
            </div>
            <hr>
            <div class="row w-75 text-center" style="margin: 0 auto">
              <div class="col-md-4"><a href="orderreview.html">评价</a></div>
              <div class="col-md-4"><a href="shop-detail.html">查看农场详情</a></div>
              <div class="col-md-4"><a href="growing.html">查看农场动态</a>
              </div>
            </div>
          </div>
        </div>
        <!--一个农场块结束-->
        <div class="col-lg-12 text-center mt-3 mb-5">
          <a role="button" class="btn btn-outline-primary w-100" href="#">加载更多</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MyFarm'
}
</script>

<style scoped>

</style>
