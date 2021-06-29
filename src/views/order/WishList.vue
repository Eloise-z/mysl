<!--
*Author: Eloise
*Date: 2021-06-21 12:06
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
            <li class="breadcrumb-item active"> 我的收藏</li>
          </ul>
          <h2>我的收藏</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!-- 我的收藏开始  -->
  <div class="wishlist-box-main">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="table-main table-responsive">
            <table class="table">
              <thead>
              <tr>
                <th>商品图片</th>
                <th>商品名称</th>
                <th>添加时间</th>
                <th>查看详情</th>
                <th>去购买</th>
                <th>移除</th>
              </tr>
              </thead>
              <tbody v-show="datalist.length!==0">
              <tr v-for="list in datalist" :key="list.wId">
                <td class="thumbnail-img">
                  <a>
                    <img class="img-fluid" :src="list.goodPicture" alt=""/>
                  </a>
                </td>
                <td class="name-pr">
                  <a href="#">
                    {{ list.goodName }}
                  </a>
                </td>
                <td class="go-detail">
                  <p>{{ list.createTime }}</p>
                </td>
                <td>
                  <router-link class="btn btn-outline-primary"
                               :to="{ path: '/shop-detail', query: { goodId: list.goodId } }">
                    查看详情
                  </router-link>
                </td>
                <td class="go-buy">
                  <router-link class="btn btn-outline-success"
                               :to="{ path: '/order-generate', query: { goodId: list.goodId } }">
                    购买
                  </router-link>
                </td>
                <td class="remove-pr">
                  <a role="button" style="color: #dc3545" class="btn btn-outline-danger"
                     @click="deleteWish(list.wid)"><i class="fas fa-times">
                  </i></a>
                </td>
              </tr>
              <tr>
                <td colspan="6">
                  <div class="col-lg-12 text-center mt-3 mb-5">
                    <a role="button" style="color: #007bff;" class="btn btn-outline-primary w-100"
                       @click="flag=true;getDataList()">加载更多</a>
                  </div>
                </td>
              </tr>
              </tbody>
              <tr v-show="datalist.length===0">
                <td colspan="6">
                  <el-empty description="暂无收藏信息，快去收藏商品吧！"></el-empty>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 我的收藏结束 -->
</template>

<script>
// 引入调用js-cookie
import cookie from 'js-cookie'
import wishApi from '@/api/wish'
import { ElLoading, ElMessage } from 'element-plus'

export default {
  name: 'WishList',
  data () {
    return {
      userId: '',
      page: 0,
      limit: 3,
      datalist: [],
      flag: false
    }
  },
  created () {
    const loading = ElLoading.service({
      fullscreen: true,
      text: '加载中..请稍后'
    })
    // 从cookie中获取用户信息
    var userStr = cookie.get('agriculture_ucenter')
    // userStr是字符串   需要转换为json对象
    if (userStr) {
      this.userId = JSON.parse(userStr).userId
      this.getDataList()
      loading.close()
    } else {
      ElMessage.error('您还未登录！请先登录在查看')
      this.$router.push('/login')
    }
  },
  methods: {
    // 获取数据列表
    getDataList () {
      if (this.flag) {
        this.limit += 3
      }
      wishApi.getWishByUserId(this.userId, this.page, this.limit).then((response) => {
        this.datalist = response.data.wishlist
      })
    },
    // 移除收藏信息
    deleteWish (wid) {
      this.$confirm('此操作将移除该收藏, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        wishApi.deleteByWid(wid).then((response) => {
          ElMessage.success('移除成功！')
          this.getDataList()
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
