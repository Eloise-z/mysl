<!--
*Author: Eloise
*Date: 2021-06-20 19:26
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
            <li class="breadcrumb-item active"> 系统消息</li>
          </ul>
          <h2>系统消息</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="notice">
    <div class="container mt-5">
      <div class="row">
        <div v-for="list in dataList" :key="list.clId" class="col-lg-12 shadow mb-3 p-3">
          <p style="font-size: 18px">{{ list.clTitle }}<span
            style="float: right;font-size: 12px">{{ list.createTime }}</span></p>
        </div>
        <div class="col-lg-12 text-center mt-3 mb-5">
          <a role="button" class="btn btn-outline-primary w-100" @click="flag=true;getDataList()">加载更多</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import indexApi from '@/api/index'

export default {
  name: 'Notice',
  data () {
    return {
      // 查询参数
      params: {
        page: 0,
        limit: 3
      },
      flag: false, // 点击加载更多变为true
      dataList: [] // 数据列表
    }
  },
  created () {
    this.getDataList()
  },
  methods: {
    getDataList () {
      if (this.flag) {
        this.params.limit += 3
      }
      indexApi.getClaim(this.params).then((response) => {
        this.dataList = response.data.claimList
      })
    }
  }
}
</script>

<style scoped>

</style>
