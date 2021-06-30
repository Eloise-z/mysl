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
                <button type="button" class="btn btn-outline-primary mt-2 " @click="sendMail()">发送验证码
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
              <label for="userPwdAgain">确认新密码</label>
              <input type="password" v-model="user.userPwdAgain" class="form-control" id="userPwdAgain">
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
import { ElMessage, ElLoading } from 'element-plus'

export default {
  name: 'FindPwd',
  data () {
    return {
      user: {
        userMail: '',
        userPwd: '',
        code: '', // 用户输入的验证码
        sysCode: '', // 系统发送的验证码
        userPwdAgain: '' // 确认密码
      },
      showCode: false,
      sign: 1 // 表示这是找回密码
    }
  },
  methods: {
    // 发送邮件
    sendMail () {
      var mailTest = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (this.user.userMail === '') {
        ElMessage.warning('请输入邮箱！')
        return
      } else if (!(mailTest.test(this.user.userMail))) {
        ElMessage.warning('请输入正确的邮箱格式！[只允许英文字母、数字、下划线、英文句号、以及中划线组成]')
        return
      }
      const loading = ElLoading.service({ fullscreen: true, text: '邮件处理中..请稍后' })
      loginApi.sendEmail(this.user.userMail, this.sign).then((response) => {
        loading.close()
        ElMessage.info(response.data.msg)
        this.showCode = true // 发送邮箱成功后才显示
        this.user.sysCode = response.data.code
      })
    },
    // 提交
    submit () {
      var mailTest = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (this.user.userMail === '') {
        ElMessage.warning('请输入邮箱！')
        return
      } else if (!(mailTest.test(this.user.userMail))) {
        ElMessage.warning('请输入正确的邮箱格式！[只允许英文字母、数字、下划线、英文句号、以及中划线组成]')
        return
      }
      if (this.user.sysCode === '') {
        ElMessage.warning('请获取验证码！')
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
      if (this.user.userPwdAgain !== this.user.userPwd) {
        ElMessage.warning('两次密码不一致！')
        return
      }
      const loading = ElLoading.service({ fullscreen: true, text: '处理中..请稍后' })
      loginApi.findPwd(this.user).then((response) => {
        loading.close()
        if (response.data.code === 0) {
          ElMessage.success('密码修改成功！')
          // 路由跳转 跳转页面
          this.$router.push({ path: '/login' })
        } else {
          ElMessage.error(response.data.msg)
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
