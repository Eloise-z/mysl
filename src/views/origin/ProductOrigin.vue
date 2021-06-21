<!--
*Author: Eloise
*Date: 2021-06-21 01:33
-->
<template>
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/index">首页</router-link></li>
            <li class="breadcrumb-item active"> 产品溯源</li>
          </ul>
          <h2>产品溯源</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="datebody" style="margin: 100px">
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

          <!--查询主体开始-->
          <div class="col-lg-8 col-sm-12">
            <div class="date-form">
              <!--  <h1>标题</h1>-->
              <div class="border-green">
                <p style="margin-left:10px; margin-bottom: 20px">每个产品对应唯一的产品码，输入产品码溯源产品生长全过程。</p>
              </div>
              <form id="dateform">
                <div class="col-md-8">
                  <div class="form-group">
                    <input type="text" class="form-control" id="name" name="name" placeholder="产品码" required
                           data-error="请输入产品码">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <input type="text" class="form-control" id="yzm" name="yzm" placeholder="验证码" required
                                 data-error="请输入验证码">
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <img src="../../assets/images/yzm.png" alt="图片不见了">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="form-group">
                      <div class="submit-button text-center">
                        <!--<button class="btn hvr-hover" id="submit" type="submit">查询</button>-->
                        <button class="btn hvr-hover" onclick="window.location.href = 'dateresult.html'">查询</button>
                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductOrigin'
}
</script>

<style scoped>

</style>
