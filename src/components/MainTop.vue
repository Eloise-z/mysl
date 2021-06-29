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
          <div class="our-link">
            <ul>
              <li>
                <router-link to="/index">梦源商旅</router-link>
              </li>
              <li v-if="!loginInfo.userId">
                <router-link to="/login"><i class="fa fa-user s_color"></i> 登录注册</router-link>
              </li>
              <li v-if="loginInfo.userId" id="is-login-two" class="h-r-user">
                <router-link class="mr-3" :to="{ path: '/my-account', query: { userId: loginInfo.userId} }">
                  <img
                    v-show="loginInfo.userAvatar !== null && loginInfo.userAvatar !== undefined && loginInfo.userAvatar !== ''"
                    :src="loginInfo.userAvatar" style="width: 25px;height: 25px;border-radius: 50%;object-fit: cover"
                    class="vam picImg mr-2" alt/>
                  <span id="userName" class="vam disIb"> {{ loginInfo.userName }}</span>
                </router-link>
                <a href="" title="退出" @click="logout()" class="ml5"> 退出</a>
              </li>
              <li>
                <router-link to="/order-list"><i class="fas fa-file-alt"></i> 订单</router-link>
              </li>
              <li>
                <router-link to="/notice"><i class="fas fa-bell"></i> 系统消息</router-link>
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
          <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="2000">
              <div class="carousel-inner">
                <div v-for="(list, index) in claimList" :key="list.clId" :class="{'active' : index === 0}"
                     class="carousel-item">
                  <span style="font-size: 14px" class="font-weight-bold">
                    <i style="color: rgb(176 180 53)" class="fab fa-slack-hash"></i>
                    {{ list.clTitle }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--页顶结束-->
</template>

<script>
// 引入调用js-cookie
import cookie from 'js-cookie'
// 引入调用login.js文件
import loginApi from '@/api/login'
import indexApi from '@/api/index'

export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      token: '',
      loginInfo: {
        userId: '',
        userAvatar: '',
        userTel: '',
        userName: ''
      },
      claimList: ''// 系统消息
    }
  },
  created () {
    // 获取路径里面token值
    this.token = this.$route.query.token
    if (this.token) {
      // 判断路径是否有token值
      this.wxLogin()
    }
    // 从cookie中获取用户信息
    this.showInfoFromCookie()
    // 获取公告消息
    this.getClaimList()
  },
  methods: {
    // 从cookie中获取用户信息
    showInfoFromCookie () {
      // 从cookie中获取用户信息
      var userStr = cookie.get('agriculture_ucenter')
      // userStr是字符串   需要转换为json对象
      if (userStr) {
        this.loginInfo = JSON.parse(userStr)
      }
    },

    // 获取公告消息
    getClaimList () {
      indexApi.getTopClaim().then((response) => {
        this.claimList = response.data.claimList
      })
    },

    // 退出  cookie清空
    logout () {
      cookie.set('agriculture_ucenter', '', { domain: 'localhost' })
      cookie.set('agriculture_token', '', { domain: 'localhost' })
      // 回首页
      window.location.href = '/'
    },

    // 微信登录显示的方法
    wxLogin () {
      // 把token值放到cookie里面
      cookie.set('agriculture_token', this.token, { domain: 'localhost' })
      cookie.set('agriculture_ucenter', '', { domain: 'localhost' })
      // 调用接口，根据token值获取用户信息
      loginApi.getUserInfo().then((response) => {
        this.loginInfo = response.data.userInfo
        cookie.set('agriculture_ucenter', this.loginInfo, {
          domain: 'localhost'
        })
      })
    }
  }
}
</script>

<style scoped>
.our-link ul li {
  border: 0;
}
</style>
