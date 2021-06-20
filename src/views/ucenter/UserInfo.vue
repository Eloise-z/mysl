<!--
*Author: Eloise
*Date: 2021-06-20 19:23
-->
<template>
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/index">首页</router-link></li>
            <li class="breadcrumb-item"><router-link to="/my-account"> 用户中心 </router-link></li>
            <li class="breadcrumb-item active"> 个人信息</li>
          </ul>
          <h2>个人信息</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="#">
    <div class="container mt-5 mb-5">
      <div class="form" style="margin:0 auto">
        <form>
          <div class="row">
            <div class="userImg" style="margin: 0 auto">
              <img src="../../assets/images/banner-01.jpg" style="width: 150px;height: 150px;object-fit: cover"
                   class="border border-light rounded-circle text-center">
            </div>
          </div>
          <div class="form-group row">
            <label for="updateImg" class="col-sm-2 col-form-label">上传头像</label>
            <div class="col-sm-10">
              <input type="file" class="form-control-file" id="updateImg">
            </div>
          </div>
          <div class="form-group row">
            <label for="userName" class="col-sm-2 col-form-label">用户名</label>
            <div class="col-sm-10">
              <input type="text" readonly class="form-control-plaintext" id="userName" value="这是用户名">
            </div>
          </div>
          <div class="form-group row">
            <label for="inlineRadio1" class="col-sm-2 col-form-label">性别</label>
            <div class="form-check form-check-inline">
              <input class="form-check-input ml-3" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                     value="option1">
              <label class="form-check-label" for="inlineRadio1">男</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
              <label class="form-check-label" for="inlineRadio2">女</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
              <label class="form-check-label" for="inlineRadio3">未知</label>
            </div>
          </div>
          <div class="form-group row">
            <label for="userEmail" class="col-sm-2 col-form-label">电子邮箱</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="userEmail">
            </div>
          </div>
          <div class="form-group row">
            <label for="wechat" class="col-sm-2 col-form-label">绑定微信</label>
            <div class="col-sm-10">
              <a href="#" id="wechat">未绑定，点击这里进行绑定</a>
            </div>
          </div>
          <div class="form-group row">
            <label for="phone" class="col-sm-2 col-form-label">电话</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="phone">
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-success mr-3">修改</button>
            <button type="button" class="btn">返回</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style scoped>

</style>
