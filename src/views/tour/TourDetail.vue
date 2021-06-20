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
            <li class="breadcrumb-item"><router-link to="/index">首页</router-link></li>
            <li class="breadcrumb-item"><router-link to="/tour"> 文·旅 </router-link></li>
            <li class="breadcrumb-item active"> 旅游线路详情</li>
          </ul>
          <h2>旅游线路详情</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="#">
    <div class="container mb-5">
      <div class="row mt-5">
        <div class="col-md-12" style="text-align: left;font-size: 30px">
          <p>渣滓洞监狱旧址</p>
        </div>
      </div>
      <hr>
      <div class="row mt-3">
        <div class="col-md-8 text-center" style="height:30px;width: 100%;object-fit: cover ">
          <img style="width: 100%"
               src="https://b1-q.mafengwo.net/s10/M00/64/D1/wKgBZ1i_vHCAK5gMAA9i-gEH7iM94.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100"
               alt="">
        </div>
        <div class="col-md-4">
          <div class="col-lg-12 text-center" style="width: 100%;height: 200px;object-fit: fill">
            <img
              src="https://n1-q.mafengwo.net/s12/M00/F8/46/wKgED1vK6YmAaof7AAwyI3VTsVw33.jpeg?imageMogr2%2Fthumbnail%2F%21305x183r%2Fgravity%2FCenter%2Fcrop%2F%21305x183%2Fquality%2F100"
              alt="">
          </div>
          <div class="col-lg-12 text-center mt-2" style="width: 100%;height: 200px;object-fit: fill">
            <img
              src="https://b1-q.mafengwo.net/s11/M00/F2/E6/wKgBEFs64_qAV7ieAA2IEk-ooTg87.jpeg?imageMogr2%2Fthumbnail%2F%21305x183r%2Fgravity%2FCenter%2Fcrop%2F%21305x183%2Fquality%2F100"
              alt="">
          </div>
        </div>
      </div>
      <hr>
      <div class="row mt-3 ml-5">
        <div class="col-lg-12">
          <p>·原是重庆郊外的是一个煤洞，于1920年开办的小煤窑，之后被国民政府军统局设为看守所。</p>
          <p>·渣滓洞三面环山，一面临沟，地形隐蔽，专门关押和迫害革命者，比较著名的就是“江姐”。</p>
          <p>·渣滓洞在原址上修复重建，真实的反映出了当时的场景，气氛压抑，展示的刑具让人触目惊心。</p>
          <p>·整个景点不大，可将烈士墓、白公馆一起参观游览，景区还有专线客车安排，非常方便。</p>
        </div>
      </div>
      <hr>
      <div class="row mt-5 border-blue">
        <div class="col-lg-6 ">
          <h3>交通</h3>
          <p>
            乘215、221路等公交车在烈士墓站下车可达；距离白公馆约5分钟车程，步行15分钟也可到达 。
            景区有可乘坐的往返专线客车，每人20元。
          </p>
        </div>
        <div class="col-lg-3">
          <h3>电话</h3>
          <p>
            023-65314419
          </p>
        </div>
        <div class="col-lg-3">
          <h3>网址</h3>
          <p>
            http://www.hongyan.info
          </p>
        </div>
      </div>
      <div class="row mt-5 border-green ">
        <div class="col-lg-4">
          <h3>门票</h3>
          <p>
            免费
          </p>
        </div>
        <div class="col-lg-4">
          <h3>用时参考</h3>
          <p>
            1小时
          </p>
        </div>
        <div class="col-lg-4">
          <h3>开放时间</h3>
          <p>
            09:00-16:30 (1月1日-12月31日 周一-周日)
          </p>
        </div>
      </div>
      <div class="row mt-5 border-orange">
        <div class="col-lg-12">
          <h3>其他注意事项</h3>
          <p>
            凭身份证在进口处领取免费券参观，会视游客人数配备免费讲解员。
            （从2019年1月1日起，渣滓洞景区实行网上实名预约免费参观。网上预约办法如下：登录重庆红岩联线文化发展管理中心官网http://www.hongyan.info/或直接关注微信公众号“红岩联线”、“红村掌媒”、“红村网”点击“网上预约”，预约成功后凭身份证进入景区参观）
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TourDetail'
}
</script>

<style scoped>

</style>
