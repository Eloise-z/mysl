<!--
*Author: Eloise
*Date: 2021-06-13 15:22
-->
<template>
  <!--登录主体部分-->
  <div class="login">
    <div class="row">
      <div class="col-md-12">
        <div class="dowebok" id="dowebok" :class="{'right-panel-active' : isRegisterShow}">
          <div class="form-container sign-up-container">
            <form>
              <h1>注册</h1>
              <div class="social-container">
                <a href="#" class="social"><i class="fab fa-weixin"></i></a>
                <a href="#" class="social"><i class="fab fa-qq"></i></a>
              </div>
              <span>或使用邮箱注册</span>
              <div class="row">
                <div class="col-12">
                  <input type="text" id="userName" v-model="user.userName" placeholder="用户名">
                </div>
                <div class="col-12">
                  <input type="text" v-model="user.userMail" placeholder="电子邮箱">
                </div>
                <div class="col-6">
                  <input v-show="showCode" type="text" id="code" v-model="user.code" placeholder="验证码">
                </div>
                <div class="col-6">
                  <button type="button" class="btn btn-outline-success mt-2 " @click="sendMail();showCode=true">发送验证码
                  </button>
                </div>
                <div class="col-12">
                  <input type="password" v-model="user.userPwd" placeholder="密码">
                </div>
                <div class="col-12">
                  <button type="button" @click="register()">注册</button>
                </div>
              </div>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form>
              <h1>登录</h1>
              <div class="social-container">
                <a href="#" class="social"><i class="fab fa-weixin"></i></a>
                <a href="#" class="social"><i class="fab fa-qq"></i></a>
              </div>
              <span>或使用您的帐号</span>
              <input type="text" v-model="user.userMail" name="userMail" placeholder="邮箱">
              <input type="password" v-model="user.userPwd" name="userPwd" placeholder="密码">
              <router-link to="/findpwd">忘记密码？</router-link>
              <button type="button" @click="submitLogin()">登录</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>已有帐号？</h1>
                <p>请使用您的帐号进行登录</p>
                <button type="submit" class="ghost" id="signIn" @click="submitLogin;isRegisterShow=false">登录</button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>没有帐号？</h1>
                <p>立即注册加入我们，和我们一起开启购物吧</p>
                <button class="ghost" id="signUp" @click="isRegisterShow=true">注册</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入调用js-cookie
import cookie from 'js-cookie'
// 引入调用login.js文件
import loginApi from '@/api/login'
// function checkCode(){
//   var code = document.getElementById("code").nodeValue
//   var syscode = this.user.sysCode;
//   if(code != syscode){
//     alert("验证码错误！")
//     return;
//   }
// }
export default {
  layout: 'sign',

  data () {
    return {
      // 封装登录和注册对象
      user: {
        userMail: '', // 邮箱
        userPwd: '', // 密码
        userName: '', // 用户名
        code: '', // 用户输入的验证码
        sysCode: '' // 系统发送的验证码
      },
      // 获取到用户信息  用于显示头部
      loginInfo: {},
      isRegisterShow: false,
      sign: 0, // 表示这是注册
      showCode: false // 注册-验证码展示
    }
  },

  methods: {
    // 登录的方法
    submitLogin () {
      // 调用登录接口 返回token字符串
      loginApi.userLogin(this.user)
        .then(response => {
          alert(response.data.msg)
          if (response.data.code === 0) { // 登录成功
            // 获取到的token字符串放入cookie
            // 1.cookie名称，2.token参数值，3.作用范围-在什么样的请求中
            cookie.set('agriculture_token', response.data.token, { domain: 'localhost' })
            // 调用接口 根据token解析出用户信息 给首页用
            loginApi.getUserInfo()
              .then(response => {
                this.loginInfo = response.data.userInfo
                // 获取返回的用户信息  放入cookie
                cookie.set('agriculture_ucenter', this.loginInfo, { domain: 'localhost' })
                // 路由跳转 跳转守页面
                this.$router.push({ path: '/' })
              })
          } else { // 登录失败
            // 路由跳转 跳转页面
            // this.$router.push({ path: '/login' })
          }
        })
    },
    // 注册-发送邮件
    sendMail () {
      loginApi.sendEmail(this.user.userMail, this.sign).then((response) => {
        alert(response.data.msg)
        this.user.sysCode = response.data.code
      })
    },
    // 注册
    register () {
      loginApi.userRegister(this.user).then((response) => {
        // 路由跳转 跳转登录页面
        alert(response.data.msg)
        this.$router.push({ path: '/login' })
      })
    }
  }
}
</script>

<style>

</style>
