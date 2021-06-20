<!--
*Author: Eloise
*Date: 2021-06-20 19:17
-->
<template>
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">

          <ul class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">首页</a></li>
            <li class="breadcrumb-item"><a href="#">用户中心</a></li>
            <li class="breadcrumb-item active"> 修改密码</li>
          </ul>
          <h2>修改密码</h2>
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
              <label for="userOPdw">旧密码</label>
              <input type="password" class="form-control" id="userOPdw">
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
              <button type="submit" class="btn btn-success mr-3">提交</button>
              <button type="button" class="btn">返回</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModifyPwd'
}
</script>

<style scoped>

</style>
