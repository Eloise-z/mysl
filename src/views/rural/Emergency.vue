<!--
*Author: Eloise
*Date: 2021-06-21 14:03
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
            <li class="breadcrumb-item active"> 应急·滞销</li>
          </ul>
          <h2>应急·滞销</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="emer-list">
    <div class="container mt-5">
      <div class="row">
        <!--左侧发布-->
        <div class="col-lg-4" style="text-align: center;font-size: 40px">
          <div class="put-eminfo">
            <router-link to="/emeradd" class="btn btn-primary w-75">发布滞销信息</router-link>
          </div>
        </div>
        <div class="col-lg-8" style="text-align: center;">
          <div class="emer-list">
            <div class="row">
              <div class="col-lg-12 shadow p-3 mb-3">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="border-orange">
                      <p class="font-weight-bold" style="color: #e31613">本平台人人均可发布滞销信息，我们热情欢迎您帮助他人，在帮助他人的同时，请谨防诈骗！</p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-for="list in datalist" :key="list.emId" class="col-lg-12 shadow p-3 mb-3">
                <table class="table  table-hover">
                  <thead>
                  <tr>
                    <th colspan="3">滞销信息</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <!--<th scope="row">1</th>-->
                    <td style="min-width: 150px">滞销产品</td>
                    <td>{{ list.emName }}</td>
                  </tr>
                  <tr>
                    <td>数量</td>
                    <td>{{ list.emNum }}</td>
                  </tr>
                  <tr>
                    <td>地点</td>
                    <td>{{ list.emPlace }}</td>
                  </tr>
                  <tr>
                    <td>联系人</td>
                    <td>{{ list.emMan }}</td>
                  </tr>
                  <tr>
                    <td>联系方式</td>
                    <td>{{ list.emContact }}</td>
                  </tr>
                  <tr>
                    <td>其他信息</td>
                    <td>{{ list.emOth }}</td>
                  </tr>
                  <tr>
                    <td>发布时间</td>
                    <td>{{ list.createTime }}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-lg-12 text-center mt-3 mb-5">
                <a role="button" class="btn btn-outline-primary w-100" @click="flag=true;getDataList()">加载更多</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import emerApi from '@/api/emer'
import { ElLoading } from 'element-plus'

export default {
  name: 'Emergency',
  data () {
    return {
      params: {
        page: 0, // 当前页
        limit: 2 // 每页显示数量
      },
      datalist: [], // 封装数据
      flag: false // 单击加载更多时变为true
    }
  },
  created () {
    const loading = ElLoading.service({
      fullscreen: true,
      text: '正在获取数据..请稍后'
    })
    this.getDataList()
    loading.close()
  },
  methods: {
    getDataList () {
      if (this.flag) {
        this.params.limit += 3
      }
      emerApi.getEmerList(this.params).then((response) => {
        this.datalist = response.data.emerlist
      })
    }
  }
}
</script>

<style scoped>

</style>
