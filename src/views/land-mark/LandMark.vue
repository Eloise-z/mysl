<!--
*Author: Eloise
*Date: 2021-06-21 01:48
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
            <li class="breadcrumb-item active"> 地理标志</li>
          </ul>
          <h2>地理标志</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="#">
    <div class="container">
      <div class="introduce-landemark">
        <div class="row">
          <div class="col-md-12" style="text-align: center">
            <img style="max-width: 200px" src="../../assets/images/landmark.png" alt="图片不见了">
          </div>
          <div class="col-md-12" style="font-size: 16px; margin-top: 10px">
            <p>
              世界贸易组织在有关贸易的知识产权协议中，对地理标志的定义为：地理标志是鉴别原产于一成员国领土或该领土的一个地区或一地点的产品的标志，该标志产品的质量、声誉或其他确定的特性应主要决定于其原产地。因此，地理标志主要用于鉴别某一产品的产地，即是该产品的产地标志。地理标志也是知识产权的一种。</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--2列 小广告开始-->
  <div class="box-add-products">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="offer-box-products">
            <img class="img-fluid"
                 src="https://img14.360buyimg.com/pop/s1180x940_jfs/t1/179481/27/5650/97458/60ab16c8E8dab80d4/d15ababeebbaa6c8.jpg.webp"
                 alt=""/>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="offer-box-products">
            <img class="img-fluid"
                 src="https://img30.360buyimg.com/babel/s1180x940_jfs/t1/183807/18/5717/133726/60ac5c43E8b59e8e7/2891a14fde501fbc.jpg.webp"
                 alt=""/>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12" style="padding-top: 30px">
          <div class="offer-box-products">
            <img class="img-fluid"
                 src="https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100012241666/FocusFullshop/CkJqZnMvdDEvMTIyNTMyLzcvMTYwMjIvOTIyNjUvNWY5Mzk3NTZFNzFiYTQyZGYvOGE1NzEwNTc3ZmI1M2U5MC5qcGcSCjk5OS10eV8wXzEwATjui3o/cr/s/q.jpg"
                 alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--2列 小广告结束-->
</template>

<script>
export default {
  name: 'LandMark'
}
</script>

<style scoped>

</style>
