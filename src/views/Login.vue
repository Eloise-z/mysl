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
                  <input type="text" v-model="user.userMail" @change="checkMail" placeholder="电子邮箱">
                </div>
                <div class="col-6">
                  <input v-show="showCode" type="text" id="code" v-model="user.code" placeholder="验证码">
                </div>
                <div class="col-6">
                  <button type="button" class="btn btn-outline-success mt-2 " @click="sendMail()">发送验证码
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
              <input type="text" v-model="user.userMail" name="userMail" @change="checkMail" placeholder="邮箱">
              <input type="password" v-model="user.userPwd" name="userPwd" placeholder="密码">
              <router-link to="/findpwd">忘记密码？</router-link>
              <button type="button" @click="submitLogin()">登录</button>
              <button type="button" @click="$router.push('/index')">游览</button>
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
import { ElMessage, ElLoading } from 'element-plus'
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
  created () {
    this.$loading({ text: '安全检测中...' }).close()
  },
  methods: {
    // 登录的方法
    submitLogin () {
      var mailTest = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (this.user.userMail === '') {
        ElMessage.warning('请输入邮箱！')
        return
      } else if (!(mailTest.test(this.user.userMail))) {
        ElMessage.warning('请输入正确的邮箱格式！[只允许英文字母、数字、下划线、英文句号、以及中划线组成]')
        return
      }
      if (this.user.userPwd === '') {
        ElMessage.warning('请输入密码！')
        return
      }
      // 调用登录接口 返回token字符串
      const loading = ElLoading.service({
        fullscreen: true,
        text: '登录中..请稍后'
      })
      loginApi.userLogin(this.user)
        .then(response => {
          loading.close()
          // alert(response.data.msg)
          if (response.data.code === 0) { // 登录成功
            this.$notify({
              title: '欢迎您使用本平台',
              message: '新用户请进入个人中心上传头像，完善个人信息~',
              type: 'success',
              duration: '10000'
            })
            ElMessage.success('登录成功！')
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
          } else {
            loading.close()
            // 登录失败
            ElMessage({
              showClose: true,
              message: '邮箱或密码错误，登录失败!',
              type: 'error'
            })
            // 路由跳转 跳转页面
            // this.$router.push({ path: '/login' })
          }
        })
    },
    // 注册-发送邮件
    sendMail () {
      var mailTest = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (this.user.userMail === '') {
        ElMessage.warning('请输入邮箱！')
        return
      } else if (!(mailTest.test(this.user.userMail))) {
        ElMessage.warning('请输入正确的邮箱格式！[只允许英文字母、数字、下划线、英文句号、以及中划线组成]')
        return
      }
      const loading = ElLoading.service({
        fullscreen: true,
        text: '系统正在处理，正在发送邮件，请稍后...'
      })
      loginApi.sendEmail(this.user.userMail, this.sign).then((response) => {
        loading.close()
        ElMessage.info(response.data.msg)
        this.showCode = true // 发送邮箱成功后才显示
        this.user.sysCode = response.data.code
      })
    },
    // 注册
    register () {
      var mailTest = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (this.user.userName === '') {
        ElMessage.warning('请输入用户名！')
        return
      }
      if (this.user.userMail === '') {
        ElMessage.warning('请输入邮箱！')
        return
      } else if (!(mailTest.test(this.user.userMail))) {
        ElMessage.warning('请输入正确的邮箱格式！[只允许英文字母、数字、下划线、英文句号、以及中划线组成]')
        return
      }
      if (this.user.sysCode === '') {
        ElMessage.warning('请先获取验证码！')
        return
      }
      if (this.user.code === '') {
        ElMessage.warning('请输入验证码！')
        return
      }
      if (this.user.userPwd === '') {
        ElMessage.warning('请输入密码！')
        return
      }
      loginApi.userRegister(this.user).then((response) => {
        // 路由跳转 跳转登录页面
        ElMessage({
          showClose: true,
          message: response.data.msg,
          type: 'success'
        })
        this.$router.push({ path: '/login' })
      })
    }
  }
}
</script>

<style>

</style>
