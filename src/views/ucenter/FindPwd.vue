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
            <li class="breadcrumb-item">
              <router-link to="/index">首页</router-link>
            </li>
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
              <label for="userEmail">注册邮箱</label>
              <input type="email" v-model="user.userMail" class="form-control" id="userEmail"
                     placeholder="name@example.com">
              <div class="text-right">
                <button type="button" class="btn btn-outline-primary mt-2 " @click="sendMail();showCode=true">发送验证码
                </button>
              </div>
            </div>
            <div v-if="showCode" class="form-group">
              <label for="code">验证码</label>
              <input type="text" v-model="user.code" class="form-control" id="code">
            </div>
            <div class="form-group">
              <label for="userPdw">新密码</label>
              <input type="password" v-model="user.userPwd" class="form-control" id="userPdw">
            </div>
            <div class="form-group">
              <label for="userPdwagain">确认新密码</label>
              <input type="password" class="form-control" id="userPdwagain">
            </div>
            <div class="text-center">
              <button type="button" class="btn btn-success" @click="submit()">提交</button>
              <button type="button" class="btn" style="margin-left: 10px" @click="goOff()">返回</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loginApi from '@/api/login'

export default {
  name: 'FindPwd',
  data () {
    return {
      user: {
        userMail: '',
        userPwd: '',
        code: '', // 用户输入的验证码
        sysCode: '' // 系统发送的验证码
      },
      showCode: false,
      sign: 1 // 表示这是找回密码
    }
  },
  methods: {
    // 发送邮件
    sendMail () {
      loginApi.sendEmail(this.user.userMail, this.sign).then((response) => {
        alert(response.data.msg)
        this.user.sysCode = response.data.code
      })
    },
    // 提交
    submit () {
      loginApi.findPwd(this.user).then((response) => {
        alert(response.data.msg)
        if (response.data.code === 0) {
          // 路由跳转 跳转页面
          this.$router.push({ path: '/login' })
        }
      })
    },
    goOff () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
