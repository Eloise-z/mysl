<!--
*Author: Eloise
*Date: 2021-06-21 13:54
-->
<template>
  <!--页面标题-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/index">首页</router-link>
            </li>
            <li class="breadcrumb-item active"> 产品动态</li>
          </ul>
          <h2>产品动态</h2>
        </div>
      </div>
    </div>
  </div>

  <!--主体部分-->
  <div class="datebody" style="margin: 100px">
    <div class="container">
      <div class="center-page">
        <div class="row">
          <!--左侧-->
          <div class="col-lg-4 col-sm-12">
            <!--产品信息-->
            <div class="product-info">
              <div class="info-title border-blue">
                <h3 class="ari-subtitle">批次信息</h3>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <p>当前批次</p>
                </div>
                <div class="col-lg-8">
                  <p>{{ tracklist.twName }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <p>溯源批次码</p>
                </div>
                <div class="col-lg-8">
                  <p>{{ tracklist.twCode }}</p>
                </div>
              </div>
            </div>
            <!--产品信息结束-->
            <hr>
            <!--生长过程开始-->
            <div class="product-growing">
              <div class="info-title border-ori">
                <h3 class="ari-subtitle">生长过程</h3>
              </div>
              <div class="row text-center" style="font-size: 18px">
                <div class="col-lg-12" :class="[MaxPhaseId>=1?'content-green':'content-grey']">
                  <p><i class="far" :class="[MaxPhaseId>=1?'fa-check-circle':'fa-times-circle']"></i>众筹期</p>
                </div>
                <div class="col-lg-12">
                  <p><i class="fas fa-angle-double-down"></i></p>
                </div>
                <div class="col-lg-12" :class="[MaxPhaseId>=2?'content-green':'content-grey']">
                  <p><i class="far" :class="[MaxPhaseId>=2?'fa-check-circle':'fa-times-circle']"></i>准备期</p>
                </div>
                <div class="col-lg-12">
                  <p><i class="fas fa-angle-double-down"></i></p>
                </div>
                <div class="col-lg-12" :class="[MaxPhaseId>=3?'content-green':'content-grey']">
                  <p><i class="far" :class="[MaxPhaseId>=3?'fa-check-circle':'fa-times-circle']"></i>育苗期</p>
                </div>
                <div class="col-lg-12">
                  <p><i class="fas fa-angle-double-down"></i></p>
                </div>
                <div class="col-lg-12" :class="[MaxPhaseId>=4?'content-green':'content-grey']">
                  <p><i class="far" :class="[MaxPhaseId>=4?'fa-check-circle':'fa-times-circle']"></i>生长期</p>
                </div>
                <div class="col-lg-12">
                  <p><i class="fas fa-angle-double-down"></i></p>
                </div>
                <div class="col-lg-12" :class="[MaxPhaseId>=5?'content-green':'content-grey']">
                  <p><i class="far" :class="[MaxPhaseId>=5?'fa-check-circle':'fa-times-circle']"></i>成熟期</p>
                </div>
                <div class="col-lg-12">
                  <p><i class="fas fa-angle-double-down"></i></p>
                </div>
                <div class="col-lg-12" :class="[MaxPhaseId>=6?'content-green':'content-grey']">
                  <p><i class="far" :class="[MaxPhaseId>=6?'fa-check-circle':'fa-times-circle']"></i>结果</p>
                </div>
                <div class="col-lg-12">
                  <p><i class="fas fa-angle-double-down"></i></p>
                </div>
                <div class="col-lg-12" :class="[MaxPhaseId>=7?'content-green':'content-grey']">
                  <p><i class="far" :class="[MaxPhaseId>=7?'fa-check-circle':'fa-times-circle']"></i>本轮农场结束</p>
                </div>
              </div>
            </div>
            <!--生长过程结束-->
          </div>
          <!--左侧结束-->

          <!--动态主体开始-->
          <div class="col-lg-8 col-sm-12">
            <template v-for="dynlist in dynlist" :key="dynlist.gdId">
              <div class="growing-content">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="growing-item">
                      <p class="item-time"><i class="far fa-clock"></i> {{ dynlist.createTime }}</p>
                      <div>
                        <p class="item-content">
                          {{ dynlist.gdText }}
                        </p>
                        <div class="row">
                          <div class="col-lg-12" v-for="urllist in dynpicturl" :key="urllist.gdId">
                            <template v-if="urllist.gdId === dynlist.gdId">
                              <img v-show="urllist.url !== undefined || urllist.url !== null || urllist.url !== ''"
                                   class="item-img" :src="urllist.url" alt="图片不见了">
                            </template>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <el-empty v-if="dynlist.length === 0" description="暂无动态信息，请耐心等待。"></el-empty>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/css/aricommen.css'
import goodsApi from '@/api/goods'
import { ElLoading } from 'element-plus'

export default {
  name: 'Growing',
  data () {
    return {
      goodId: '',
      tracklist: {}, // 批次信息
      dynlist: [], // 动态文本信息
      dynpicturl: [], // 动态图片
      MaxPhaseId: '' // 当前产品处于哪个期
    }
  },
  created () {
    const loading = ElLoading.service({ fullscreen: true, text: '正在获取数据..请稍后' })
    this.goodId = this.$route.query.goodId
    // 获取批次信息
    this.getTrackInfo()
    // 根据商品id查询该当前处于哪个成长期
    this.getPhaseInfo()
    // 获取动态文本信息
    this.getDynInfo()
    // 获取动态图片
    this.getDynPictureInfo()
    loading.close()
  },
  methods: {
    // 获取批次信息
    getTrackInfo () {
      goodsApi.getTrackInfo(this.goodId).then((response) => {
        this.tracklist = response.data.frontTrackInfo
      })
    },
    // 获取动态文本信息
    getDynInfo () {
      goodsApi.getDynInfo(this.goodId).then((response) => {
        this.dynlist = response.data.frontDynVoList
      })
    },
    // 根据商品id查询该当前处于哪个成长期
    getPhaseInfo () {
      goodsApi.getMaxPhasId(this.goodId).then((response) => {
        this.MaxPhaseId = response.data.MaxPhaseId
      })
    },
    // 获取动态图片
    getDynPictureInfo () {
      goodsApi.getDynPictureInfo(this.goodId).then((response) => {
        this.dynpicturl = response.data.frontDynPictureVos
      })
    }
  }
}
</script>

<style scoped>

</style>
