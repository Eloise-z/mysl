<!--
*Author: Eloise
*Date: 2021-06-20 23:48
-->
<template>
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/index">首页</router-link></li>
            <li class="breadcrumb-item active"> 找回密码</li>
          </ul>
          <h2>找回密码</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="#">
    <div class="container">
      <div class="row" style="margin: 150px">
        <div class="col-md-12">
          <form>
            <div class="form-group">
              <label for="userName">用户名</label>
              <input type="text" class="form-control" id="userName">
            </div>
            <div class="form-group">
              <label for="userEmail">注册邮箱</label>
              <input type="email" class="form-control" id="userEmail" placeholder="name@example.com">
              <div class="text-right">
                <button class="btn btn-outline-primary mt-2 ">发送验证码</button>
              </div>
            </div>
            <div class="form-group">
              <label for="userPdw">新密码</label>
              <input type="password" class="form-control" id="userPdw">
            </div>
            <div class="form-group">
              <label for="userPdwagain">确认新密码</label>
              <input type="password" class="form-control" id="userPdwagain">
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-success">提交</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindPwd'
}
</script>

<style scoped>

</style>
