<!--
*Author: Eloise
*Date: 2021-06-24 18:44
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
              <router-link to="/my-account"> 个人中心</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/sale-list"> 营销管理</router-link>
            </li>
            <li class="breadcrumb-item active"> 添加动态</li>
          </ul>
          <h2>添加动态</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="userSaleAdd">
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-12 p-3 mb-3">
          <div class="row">
            <div class="col-lg-12">
              <div class="border-orange">
                <p class="font-weight-bold ml-2" style="color: #e31613">为保证溯源及动态的真实性、不可篡改性，动态一旦提交不可修改删除，请您谨慎操作！</p>
              </div>
            </div>
          </div>
        </div>
        <div v-show="dataList !== null" class="col-lg-12 mb-2 text-right">
          <router-link :to="{ path: '/growing', query: { goodId: dataForm.goodId} }" class="btn btn-primary">
            查看本产品全部动态
          </router-link>
        </div>
        <div v-if="dataList !== null" class="col-md-12 mb-5">
          <form>
            <div class="form-group">
              <label for="goodsDateCode">当前批次码</label>
              <input type="text" readonly class="form-control" id="goodsDateCode" v-model="dataList.twCode">
            </div>
            <div class="form-group">
              <label for="goodsDateName">当前批次名称</label>
              <input type="text" readonly class="form-control" id="goodsDateName" v-model="dataList.twName">
            </div>
            <!-- <div class="form-group" v-if="dataList.phaseId === 0">
              <label for="goodsPhase">当前阶段</label>
              <input type="text" class="form-control" id="goodsPhase" v-model="dataList.phaseId">
            </div> -->
            <div class="form-group">
              <label>当前阶段</label>
              <tr>
                <td v-if="dataList.phaseId===0">[未开始]</td>
                <td v-if="dataList.phaseId===1">[众筹期]</td>
                <td v-if="dataList.phaseId===2">[准备期]</td>
                <td v-if="dataList.phaseId===3">[育苗期]</td>
                <td v-if="dataList.phaseId===4">[生长期]</td>
                <td v-if="dataList.phaseId===5">[成熟期]</td>
                <td v-if="dataList.phaseId===6">[结果]</td>
                <td v-if="dataList.phaseId===7">[结束]</td>
              </tr>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary mr-3" @click="openNextPhase(dataList.twId)">开启下一阶段</button>
            </div>
            <div class="form-group">
              <label for="uploadImage">动态图片</label>
              <div class="row">
                <div class="col-lg-6">
                  <input type="file" class="form-control form-control-file" id="uploadImage" accept="image/*"
                         @change="toUpload" required>
                </div>
                <div class="col-lg-6">
                  <img style="max-width: 300px" :src="dataList.url" id="uploadImgView" alt="">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="goodContent">动态内容</label>
              <textarea cols="3" class="form-control" id="goodContent" v-model="dataList.gdText"></textarea>
            </div>
            <button type="submit" class="btn btn-primary mr-3" @click="adddyn()">提交</button>
            <button type="button" class="btn" @click="goOff()">返回</button>
          </form>
        </div>
      </div>
      <div class="row mt-2">

      </div>
    </div>
  </div>
</template>

<script>
import centerApi from '@/api/center'
import goodsApi from '@/api/goods'
import { ElMessage } from 'element-plus'
import OSS from 'ali-oss'

export default {
  name: 'SaleGrowing',
  data () {
    return {
      dataForm: {
        goodId: ''
      },
      // 封装数据
      dataList: {
        url: '',
        gdText: ''
      }
    }
  },
  created () {
    this.getgoodId()
    this.judgeGood()
  },
  methods: {
    // 判断商品是否是预售商品
    judgeGood () {
      goodsApi.getGoodDetail(this.dataForm.goodId).then((response) => {
        if (response.data.goodsDetail.goodState === 0) {
          this.$msgbox({
            confirmButtonText: '确定',
            type: 'warning',
            title: '警告',
            message: '该产品不是预售产品，没有动态信息！',
            showClose: false,
            closeOnClickModal: false,
            closeOnPressEscape: false
          }).then(() => {
            this.$router.push('/sale-list')
          })
        } else {
          this.getDataList()
        }
      })
    },
    // 获取数据
    getDataList () {
      centerApi.selectdynById(this.dataForm.goodId).then((response) => {
        this.dataList = response.data.frontDynInfo
      })
    },
    // 获取商品ID
    getgoodId () {
      this.dataForm.goodId = this.$route.query.goodId
    },
    goOff () {
      this.$router.go(-1)
    },
    adddyn () {
      centerApi.adddyn(this.dataList).then((response) => {
        if (response.data.code === 0) { // 增加成功
          ElMessage.success(response.data.msg)
          this.$router.push({ path: '/sale-list' })
        } else { // 增加失败
          ElMessage.error(response.data.msg)
          this.$router.push({ path: '/sale-list' })
        }
      })
    },
    openNextPhase (twid) {
      alert('twid:' + twid)
      centerApi.nextPhase(twid).then((response) => {
        if (response.data.code === 0) { // 开启成功
          ElMessage.success(response.data.msg)
          this.$router.push({ path: '/sale-list' })
        } else { // 开启失败
          ElMessage.error(response.data.msg)
          this.$router.push({ path: '/sale-list' })
        }
      })
    },
    // 头像上传到阿里云OSS
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
      this.baseurl = 'agriculture-front/dynpic/' + year + '/' + month + '/' + mydate + '/' // 上传到阿里云指定路径

      if (files.files) {
        const fileLen = document.getElementById('uploadImage').files
        const name = this.baseurl + (new Date().getTime() + 1000) + fileLen[0].name // 文件名
        for (let i = 0; i < fileLen.length; i++) {
          const file = fileLen[i]
          client.put(name, file).then(function (res) {
            _this.loading = false
            var str = res.res.requestUrls[0]
            console.log('url:' + str.split('?')[0])
            _this.dataList.url = str.split('?')[0]
            _this.$emit('childByValue', str.split('?')[0])
          }).catch((err) => {
            console.log(err)
          })
        }
      }
    },
    checkInfoFormat () {
      if (this.dataList.url === '') {
        ElMessage.warning('请选择商品图片！')
        return false
      }
      if (this.dataList.gdText === '') {
        ElMessage.warning('动态内容不能为空！')
        return false
      }
      return true
    }
  }
}
</script>

<style scoped>

</style>
