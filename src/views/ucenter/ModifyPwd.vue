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
            <li class="breadcrumb-item">
              <router-link to="/index">首页</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/my-account"> 用户中心 </router-link>
            </li>
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
              <input type="password" class="form-control" id="userOPdw" v-model="pwd.userOPdw">
            </div>
            <div class="form-group">
              <label for="userPdw">新密码</label>
              <input type="password" class="form-control" id="userPdw" v-model="pwd.userPdw">
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-success mr-3" @click="modifyPwd()">提交</button>
              <button type="button" class="btn" @click="goOff()">返回</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import centerApi from '@/api/center'
// 引入调用js-cookie
import cookie from 'js-cookie'

export default {
  name: 'ModifyPwd',
  data () {
    return {
      pwd: {
        userId: 0,
        userOPdw: '',
        userPdw: ''
      },
      loginInfo: {}, // 用户信息
      dataRule: {
        userOPdw: [
          {
            required: true,
            message: '旧密码不能为空',
            trigger: 'blur'
          }
        ],
        userPdw: [
          {
            required: true,
            message: '新密码不能为空',
            trigger: 'blur'
          }
        ]
      }
    }
  },

  created () {
    var userStr = cookie.get('agriculture_ucenter')
    if (userStr) {
      this.loginInfo = JSON.parse(userStr)
    }
    this.pwd.userId = this.loginInfo.userId
  },
  methods: {
    // 修改密码方法
    modifyPwd () {
      // 调用修改密码接口
      centerApi.ModifyPwd(this.pwd.userOPdw, this.pwd.userId, this.pwd.userPdw)
        .then(response => {
          alert(response.data.msg)
          if (response.data.code === 0) { // 修改成功
            cookie.set('agriculture_ucenter', '', { domain: 'localhost' })
            cookie.set('agriculture_token', '', { domain: 'localhost' })
            // 回登录页面
            this.$router.push({ path: '/login' })
          } else { // 登录失败
            // 路由跳转 跳转页面
            // this.$router.push({ path: '/login' })
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
