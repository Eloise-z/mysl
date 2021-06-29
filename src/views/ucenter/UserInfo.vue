<!--
*Author: Eloise
*Date: 2021-06-20 19:23
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
              <router-link to="/my-account"> 用户中心</router-link>
            </li>
            <li class="breadcrumb-item active"> 个人信息</li>
          </ul>
          <h2>个人信息</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="#">
    <div class="container mt-5 mb-5">
      <div class="form" style="margin:0 auto">
        <form>
          <div class="row">
            <div class="userImg" style="margin: 0 auto">
              <img :src="loginInfo.userAvatar" style="width: 150px;height: 150px;object-fit: cover"
                   class="border border-light rounded-circle text-center" alt="">
            </div>
          </div>
          <div class="form-group row">
            <label for="uploadImage" class="col-sm-2 col-form-label">上传头像</label>
            <div class="col-sm-10">
              <input type="file" id="uploadImage" @change="toUpload">
            </div>
          </div>

          <div class="form-group row">
            <label for="userName" class="col-sm-2 col-form-label">用户名</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="userName" v-model="loginInfo.userName">
            </div>
          </div>
          <div class="form-group row">
            <label for="inlineRadio1" class="col-sm-2 col-form-label">性别</label>
            <div class="form-check form-check-inline">
              <input class="form-check-input ml-3" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                     value="1" v-model="loginInfo.gender">
              <label class="form-check-label" for="inlineRadio1">男</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2"
                     v-model="loginInfo.gender">
              <label class="form-check-label" for="inlineRadio2">女</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3"
                     v-model="loginInfo.gender">
              <label class="form-check-label" for="inlineRadio3">保密</label>
            </div>
          </div>
          <div class="form-group row">
            <label for="userEmail" class="col-sm-2 col-form-label">电子邮箱</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="userEmail" @change="checkMail" v-model="loginInfo.userMail">
            </div>
          </div>
          <div class="form-group row">
            <label for="phone" class="col-sm-2 col-form-label">电话</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="phone" v-model="loginInfo.userTel">
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-success mr-3" @click="modifyUserInfo()">修改</button>
            <button type="button" class="btn" @click="goOff()">返回</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import centerApi from '@/api/center'
// 引入调用js-cookie
import cookie from 'js-cookie'
import { ElMessage } from 'element-plus'
import OSS from 'ali-oss'

export default {
  name: 'UserInfo',
  data () {
    return {
      loginInfo: {
        userAvatar: ''
      } // 用户信息
    }
  },
  created () {
    var userStr = cookie.get('agriculture_ucenter')
    if (userStr) {
      this.loginInfo = JSON.parse(userStr)
    }
  },
  methods: {
    // 修改用户信息
    modifyUserInfo () {
      if (this.checkMail()) {
        // 调用修改用户信息接口
        centerApi.ModifyUserInfo(this.loginInfo)
          .then(response => {
            alert(response.data.msg)
            if (response.data.code === 0) { // 修改成功
              cookie.set('agriculture_ucenter', this.loginInfo, { domain: 'localhost' })
              // this.$router.push({ path: '/my-account' })
            } else {
            }
          })
      }
    },
    // 返回
    goOff () {
      this.$router.go(-1)
    },
    checkMail () {
      if (/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/.test(this.loginInfo.userMail)) {
        return true
      } else {
        ElMessage({
          showClose: true,
          message: '邮箱格式不对!',
          type: 'error'
        })
        return false
      }
    },
    toUpload () {
      const _this = this
      _this.loading = true
      var client = new OSS({
        region: 'oss-cn-hangzhou',
        accessKeyId: 'LTAI4Fz5NWHGpfiaHcFQJfUD',
        accessKeySecret: 'TSEel61Sf4mBR5CSDFFudBzSr7s24X',
        bucket: 'agricultureproduct-cuit'
      })
      // 获取文件信息
      const files = document.getElementById('uploadImage')
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      month = month < 10 ? '0' + month : month
      var mydate = date.getDate()
      mydate = mydate < 10 ? '0' + mydate : mydate
      this.baseurl = 'agriculture-front/user/' + year + '/' + month + '/' + mydate + '/' // 上传到阿里云指定路径

      if (files.files) {
        const fileLen = document.getElementById('uploadImage').files
        const name = this.baseurl + (new Date().getTime() + 1000) + fileLen[0].name // 文件名
        for (let i = 0; i < fileLen.length; i++) {
          const file = fileLen[i]
          client.put(name, file).then(function (res) {
            _this.loading = false
            var str = res.res.requestUrls[0]
            console.log('url:' + str.split('?')[0])
            _this.loginInfo.userAvatar = str.split('?')[0]
            _this.$emit('childByValue', str.split('?')[0])
          }).catch((err) => {
            console.log(err)
          })
        }
      }
    }
  }
}
</script>

<style scoped>
.avatar-uploader :hover {
  border-color: #409EFF;
}
</style>
