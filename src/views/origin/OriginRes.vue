<!--
*Author: Eloise
*Date: 2021-06-21 14:21
-->
<template>
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/index">首页</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/origin"> 产品溯源 </router-link></li>
            <li class="breadcrumb-item active"> 溯源结果</li>
          </ul>
          <h2>溯源结果</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="dateresult" style="margin: 100px">
    <div class="container">
      <div class="center-page">
        <div class="row">
          <!--图片滚动开始-->
          <div class="col-lg-4 col-sm-12">
            <div class="scrollproduct">
              <div class="my-instagram owl-carousel owl-theme">
                <div class="item">
                  <div class="ins-inner-box">
                    <img src="../../assets/images/ylp.jpg" alt=""/>
                    <div class="hov-in">
                      <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ins-inner-box">
                    <img src="../../assets/images/instagram-img-01.jpg" alt=""/>
                    <div class="hov-in">
                      <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ins-inner-box">
                    <img src="../../assets/images/banner-01.jpg" alt=""/>
                    <div class="hov-in">
                      <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Instagram Feed  -->
            <!--图片滚动结束-->
          </div>
          <!--图片滚动结束-->

          <!--主体开始-->
          <div class="col-lg-8 col-sm-12">
            <div class="date-form">
              <!--  <h1>标题</h1>-->
              <div class="border-green">
                <p style="margin-left:10px; margin-bottom: 20px">这是第2次查询，首次查询是2021年5月18日17:10:11。</p>
              </div>

              <form id="dateform">
                <div class="col-md-12">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-3">
                        <p>产品类别</p>
                      </div>
                      <div class="col-md-9">
                        <p><span style="color: #f92672"><i class="fas fa-sun"></i></span>乡村振兴</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>产品名称</p>
                      </div>
                      <div class="col-md-9">
                        <p>新疆特级棉花</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>批次名称</p>
                      </div>
                      <div class="col-md-9">
                        <p>2020春季1批</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>播种时间</p>
                      </div>
                      <div class="col-md-9">
                        <p>2020-03-01</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>成熟时间</p>
                      </div>
                      <div class="col-md-9">
                        <p>2021-04-01</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>产地农场</p>
                      </div>
                      <div class="col-md-9">
                        <p>新疆乌鲁木齐生态农场</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>货号</p>
                      </div>
                      <div class="col-md-9">
                        <p>20200417AC-a2s-ad-23566</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>产品信息</p>
                      </div>
                      <div class="col-md-9">
                        <a href="#">点击查看</a>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>生长全程溯源</p>
                      </div>
                      <div class="col-md-9">
                        <router-link to="/growing">点击查看</router-link>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>备注</p>
                      </div>
                      <div class="col-md-9">
                        <text>无</text>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-12" style="margin-top: 20px;">
                  <div class="text-center">
                    <button class="btn hvr-hover" onclick="alert('打印页面')">打印页面</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!--主体结束-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OriginRes'
}
</script>

<style scoped>

</style>
