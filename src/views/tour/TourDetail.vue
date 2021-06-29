<!--
*Author: Eloise
*Date: 2021-06-21 01:58
-->
<template>
  <!--面包屑开始-->
  <div class="all-title-box"
       style="background: url('http://b1-q.mafengwo.net/s16/M00/5F/7C/CoUBUl_qF9CAdXxJABsoivMteVU34.jpeg?imageMogr2%2Fstrip') no-repeat top center">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/index">首页</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/tour"> 文·旅</router-link>
            </li>
            <li class="breadcrumb-item active"> 旅游线路详情</li>
          </ul>
          <h2>旅游线路详情丨{{ tourDetail.toName }}</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="#">
    <div class="container mb-5">
      <div class="row mt-5">
        <div class="col-md-12 mb-3" style="text-align: left;">
          <p style="font-size: 30px">{{ tourDetail.toName }}</p>
        </div>
      </div>
      <hr>
      <div class="row mt-3">
        <div class="col-md-8 text-center">
          <img style="height: 392px;width: 731px;object-fit: cover" alt=""
               :src="tourDetail.toMainpic">
        </div>
        <div class="col-md-4">
          <div class="col-lg-12 text-center">
            <img style="height: 183px;width: 305px;object-fit: cover" alt=""
                 :src="tourDetail.toSecpic">
          </div>
          <div class="col-lg-12 text-center mt-4">
            <img style="height: 183px;width: 305px;object-fit: cover" alt=""
                 :src="tourDetail.toThpic">
          </div>
        </div>
      </div>
      <hr>
      <div class="row mt-3 ml-5">
        <div class="col-lg-12">
          <p>{{ tourDetail.toIntro }}</p>
        </div>
      </div>
      <hr>
      <div class="row mt-5 border-blue">
        <div class="col-lg-6 ">
          <h3>交通</h3>
          <p>
            {{ tourDetail.toTraffic }}
          </p>
        </div>
        <div class="col-lg-3">
          <h3>电话</h3>
          <p>
            {{ tourDetail.toPhone }}
          </p>
        </div>
        <div class="col-lg-3">
          <h3>网址</h3>
          <p>
            {{ tourDetail.toWeb }}
          </p>
        </div>
      </div>
      <div class="row mt-5 border-green ">
        <div class="col-lg-4">
          <h3>门票</h3>
          <p>
            {{ tourDetail.toTicket }}
          </p>
        </div>
        <div class="col-lg-4">
          <h3>用时参考</h3>
          <p>
            {{ tourDetail.toTime }}
          </p>
        </div>
        <div class="col-lg-4">
          <h3>开放时间</h3>
          <p>
            {{ tourDetail.toOpen }}
          </p>
        </div>
      </div>
      <div class="row mt-5 border-orange">
        <div class="col-lg-12">
          <h3>其他注意事项</h3>
          <p>
            {{ tourDetail.toOth }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tourApi from '@/api/tour'

export default {
  name: 'TourDetail',
  data () {
    return {
      toId: '',
      tourDetail: {}
    }
  },
  created () {
    this.toId = this.$route.query.toId
    this.getTourDetail()
  },
  methods: {
    getTourDetail () {
      tourApi.getTourInfoById(this.toId).then((response) => {
        this.tourDetail = response.data.tourDetail
      })
    }
  }
}
</script>

<style scoped>
p {
  margin: 0;
  font-size: 16px;
}
</style>
