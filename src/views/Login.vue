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
            <form action="#">
              <h1>注册</h1>
              <div class="social-container">
                <a href="#" class="social"><i class="fab fa-weixin"></i></a>
                <a href="#" class="social"><i class="fab fa-qq"></i></a>
                <!--  <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                  <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>-->
              </div>
              <span>或使用邮箱注册</span>
              <input type="text" placeholder="姓名">
              <input type="email" placeholder="电子邮箱">
              <input type="password" placeholder="密码">
              <input type="password" placeholder="确认密码">
              <button>注册</button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form>
              <h1>登录</h1>
              <div class="social-container">
                <a href="#" class="social"><i class="fab fa-weixin"></i></a>
                <a href="#" class="social"><i class="fab fa-qq"></i></a>
                <!-- <a href="#" class="social"><i class="fab fa-alipay"></i></a>-->
              </div>
              <span>或使用您的帐号</span>
              <input type="text" v-model="user.userTel" name="userTel" placeholder="用户名">
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

export default {
  layout: 'sign',

  data () {
    return {
      // 封装登录的手机号和密码对象
      user: {
        userTel: '',
        userPwd: ''
      },
      // 获取到用户信息  用于显示头部
      loginInfo: {},
      isRegisterShow: false
    }
  },

  methods: {
    // 登录的方法
    submitLogin () {
      // 调用登录接口 返回token字符串
      loginApi.userLogin(this.user)
        .then(response => {
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
        })
    },

    checkPhone (rule, value, callback) {
      // debugger
      if (!(/^1[34578]\d{9}$/.test(value))) {
        return callback(new Error('手机号码格式不正确'))
      }
      return callback()
    }
  }
}
</script>

<style>

</style>
