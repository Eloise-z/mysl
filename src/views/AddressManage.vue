<!--
*Author: Eloise
*Date: 2021-06-20 19:20
-->
<template>
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">

          <ul class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">首页</a></li>
            <li class="breadcrumb-item"><a href="#"> 用户中心 </a></li>
            <li class="breadcrumb-item active"> 地址管理</li>
          </ul>
          <h2>地址管理</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--地址管理主体部分开始-->
  <div class="address-manage">
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="text-align: right;font-size: 40px">
          <div class="top-botton">
            <button class="btn btn-primary" onclick="window.location.href='addressadd.html'">新增地址信息</button>
          </div>
        </div>
      </div>
      <div class="row" style="margin: 20px">
        <div class="col-lg-6">
          <div class="account-box">
            <div class="service-box">
              <div class="service-desc">
                <h4>家</h4>
                <ul>
                  <li> 四川省 成都市 双流区</li>
                  <li> 成都信息工程大学航空港校区</li>
                  <li> 张三三</li>
                  <li> 130000000</li>
                </ul>
                <a class="address-delete" href="#"><i class="far fa-trash-alt"></i></a>
                <a class="address-edit" href="#"><i class="fas fa-edit"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="account-box">
            <div class="service-box">
              <div class="service-desc">
                <h4>学校</h4>
                <ul>
                  <li> 四川省 成都市 双流区</li>
                  <li> 成都信息工程大学航空港校区</li>
                  <li> 张三三</li>
                  <li> 130000000</li>
                </ul>
                <a class="address-delete" href="#"><i class="far fa-trash-alt"></i></a>
                <a class="address-edit" href="#"><i class="fas fa-edit"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="account-box">
            <div class="service-box">
              <div class="service-desc">
                <h4>家</h4>
                <ul>
                  <li> 四川省 成都市 双流区</li>
                  <li> 成都信息工程大学航空港校区</li>
                  <li> 张三三</li>
                  <li> 130000000</li>
                </ul>
                <a class="address-delete" href="#"><i class="far fa-trash-alt"></i></a>
                <a class="address-edit" href="#"><i class="fas fa-edit"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <!--地址管理主体部分结束-->
</template>

<script>
export default {
  name: 'AddressManage'
}
</script>

<style scoped>

</style>
