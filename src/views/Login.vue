<!--
*Author: Eloise
*Date: 2021-06-13 15:22
-->
<template>
  <!--登录主体部分-->
  <div class="login">
    <div class="row">
      <div class="col-md-12">
        <div class="dowebok" id="dowebok">
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
              <input type="email" placeholder="用户名">
              <input type="password" placeholder="密码">
              <a href="#">忘记密码？</a>
              <button @click="login">登录</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>已有帐号？</h1>
                <p>请使用您的帐号进行登录</p>
                <button class="ghost" id="signIn">登录</button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>没有帐号？</h1>
                <p>立即注册加入我们，和我们一起开启购物吧</p>
                <button class="ghost" id="signUp">注册</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login () {
      this.$router.push({ path: '/index' })
    }
  }
}
</script>

<style>

</style>
