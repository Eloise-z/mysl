<!--
*Author: Eloise
*Date: 2021-06-13 15:37
-->
<template>
  <!--页顶开始-->
  <div class="main-top">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div class="right-phone-box">
            <p>CUIT:- <a href="#"> 软件工程学院</a></p>
          </div>
          <div class="our-link">
            <ul>
              <li>
                <router-link to="/login"><i class="fa fa-user s_color"></i> 登录注册</router-link>
              </li>
              <li>
                <router-link to="/orderlist" append><i class="fas fa-file-alt"></i> 订单</router-link>
              </li>
              <li>
                <router-link to="/notice" append><i class="fas fa-bell"></i> 系统消息</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div class="login-box">
            <!-- <select id="basic" class="selectpicker show-tick form-control" data-placeholder="Sign In">
                 <option>注册</option>
                 <option href="login.html">登录</option>
             </select>-->
            <!-- <ul>
                 <li><a href="#"><i class="fa fa-user s_color"></i> 注册登录</a></li>
             </ul>-->
          </div>
          <div class="text-slid-box">
            <div id="offer-box" class="carouselTicker">
              <ul class="offer-box">
                <li>
                  <i class="fab fa-slack-hash"></i> 助力乡村振兴，加快农业农村现代化
                </li>
                <li>
                  <i class="fab fa-slack-hash"></i> 全面建成小康社会
                </li>
                <li>
                  <i class="fab fa-slack-hash"></i> 乡村振兴
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--页顶结束-->
</template>

<script>

export default {
  name: 'MainTop'
}
</script>

<style scoped>

</style>
