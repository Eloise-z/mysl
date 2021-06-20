<!--
*Author: Eloise
*Date: 2021-06-21 01:17
-->
<template>
  <!--新轮播图开始-->
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" style="padding: 0" data-interval="3000">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active" style="background-color: rgba(0, 0, 0, 0.4);">
        <img
          src="https://n1-q.mafengwo.net/s18/M00/30/5D/CoUBYGCrgl6AKA0AACiF5UeTDzY091.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg"
          class="d-block w-100" style="width: 100%;height: 100vh;object-fit:cover" alt="">
        <div class="cover w-100"
             style="position: absolute ;right:0;top: 0;height:100vh;background-color: rgba(0, 0, 0, 0.3);"></div>
        <div class="carousel-caption d-none d-md-block" style="bottom:35vh;right:0 ">
          <p style="font-size: 22px"><i class="fab fa-slack-hash" style="padding-right: 5px;"></i>飞入心中的梦幻岛：圣托里尼！（圣岛小镇全记录+完美日落+写真大片）
          </p>
        </div>
      </div>
      <div class="carousel-item" style="background-color: rgba(0, 0, 0, 0.4);">
        <img
          src="https://b1-q.mafengwo.net/s18/M00/80/23/CoUBYGCn27yAaYeBAC6QTEPDmSA585.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg"
          class="d-block w-100" style="width: 100%;height: 100vh;object-fit:cover" alt="">
        <div class="cover w-100"
             style="position: absolute ;right:0;top: 0;height:100vh;background-color: rgba(0, 0, 0, 0.3);"></div>
        <div class="carousel-caption d-none d-md-block" style="bottom:35vh;right:0 ">
          <p style="font-size: 22px"><i class="fab fa-slack-hash" style="padding-right: 5px;"></i>开着房车去新疆，独库公路+南疆20天自驾
          </p>
        </div>
      </div>
      <div class="carousel-item" style="background-color: rgba(0, 0, 0, 0.4);">
        <img
          src="https://n1-q.mafengwo.net/s18/M00/73/11/CoUBYGDJ7e-AXKKvACEqUm69j8o791.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg"
          class="d-block w-100" style="width: 100%;height: 100vh;object-fit:cover" alt="">
        <div class="cover w-100"
             style="position: absolute ;right:0;top: 0;height:100vh;background-color: rgba(0, 0, 0, 0.3);"></div>
        <div class="carousel-caption d-none d-md-block" style="bottom:35vh;right:0 ">
          <p style="font-size: 22px"><i class="fab fa-slack-hash" style="padding-right: 5px;"></i>「带妈妈去旅行」在玉龙雪山下过几天悠哉慢生活
          </p>
        </div>
      </div>
    </div>
    <button style="width: auto;border: 0;background: 0;" class="carousel-control-prev" type="button"
            data-target="#carouselExampleCaptions" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button style="width: auto;border: 0;background: 0;" class="carousel-control-next" type="button"
            data-target="#carouselExampleCaptions" data-slide="next">
      <span class="carousel-control-next-icon"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>
  <!--新轮播图结束-->

  <!--3列 革命老区推荐开始-->
  <!-- Start Categories  -->
  <div class="categories-shop">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-all text-left ">
            <div class="border-red">
              <h1 class="content-red" style="margin-left: 20px;color: #bd1e22">革命老区旅游线路</h1>
            </div>
            <p style="margin-left: 20px">传承红色基因</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div class="shop-cat-box">
            <div class="type-lb">
              <p class="new">新线路</p>
            </div>
            <img class="img-fluid"
                 src="https://b1-q.mafengwo.net/s10/M00/64/D1/wKgBZ1i_vHCAK5gMAA9i-gEH7iM94.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cHM6Ly9iMS1xLm1hZmVuZ3dvLm5ldC9zMTEvTTAwLzQ0LzlCL3dLZ0JFRnNQNVJ5QUR2N3BBQUFIWlpVUFJsUTk5MC5wbmc%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11"
                 alt=""/>
            <router-link class="btn hvr-hover" to="/tour-detail">重庆渣滓洞</router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div class="shop-cat-box">
            <img class="img-fluid"
                 src="https://b1-q.mafengwo.net/s5/M00/77/80/wKgB21ASPsmU6cjvABuIA31sx4A28.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100"
                 alt=""/>
            <router-link class="btn hvr-hover" to="/tour-detail">红岩村革命纪念馆</router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div class="shop-cat-box">
            <img class="img-fluid"
                 src="https://p1-q.mafengwo.net/s11/M00/F7/0C/wKgBEFtP7_SALTYvAA4GOR25Lk408.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100"
                 alt=""/>
            <router-link class="btn hvr-hover" to="/tour-detail">井冈山革命博物馆</router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div class="shop-cat-box">
            <img class="img-fluid"
                 src="https://p1-q.mafengwo.net/s6/M00/EF/B9/wKgB4lNl_O6AdnrTAAEjlmH__Jc56.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100"
                 alt=""/>
            <router-link class="btn hvr-hover" to="/tour-detail">赵一曼纪念馆</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--纪念袁老题字开始-->
  <div class="recommend" style="margin-top: 40px">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-all text-center">
            <h1>乡村振兴</h1>
            <p>共护诗画万丈湖,同筑百年乡村梦。</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-4 col-sm-12 col-xs-12">
          <div class="offer-box-products" style="text-align: center;height: 360px;">
            <router-link to="/tour-detail">
              <img style="max-width: 100%"
                   src="https://b1-q.mafengwo.net/s18/M00/62/E8/CoUBYGBd1BiAXakuAA6MFnA66Jk647.jpg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90"
                   alt="">
              <p style="font-size: 20px;margin-top: 5px;">株洲攸县</p>
            </router-link>
          </div>
        </div>
        <div class="col-lg-6 col-md-4 col-sm-12 col-xs-12">
          <div class="offer-box-products" style="text-align: center;height: 360px">
            <router-link to="/tour-detail">
              <img style="max-width: 100%"
                   src="http://b1-q.mafengwo.net/s11/M00/EC/7F/wKgBEFxboPqAC5spAA8iGx9NlPk80.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90"
                   alt="">
              <p style="font-size: 20px;margin-top: 5px;">宜宾屏山</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--纪念袁老题字结束-->

  <!--3列 贫困地区推荐开始-->
  <!-- Start Categories  -->
  <div class="categories-shop">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-all text-left ">
            <div class="border-ori">
              <h1 class="content-red" style="margin-left: 20px;color:#b0b435 ">新农村</h1>
            </div>
            <p style="margin-left: 20px"></p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div class="shop-cat-box">
            <div class="type-lb">
              <p class="new">新线路</p>
            </div>
            <img class="img-fluid"
                 src="https://b1-q.mafengwo.net/s18/M00/83/EA/CoUBYGCn4ciAfLDDABkIOyciOPU502.jpg?imageMogr2%2Fthumbnail%2F%21310x175r%2Fgravity%2FCenter%2Fcrop%2F%21310x175%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cHM6Ly9iMS1xLm1hZmVuZ3dvLm5ldC9zMTEvTTAwLzQ0LzlCL3dLZ0JFRnNQNVJ5QUR2N3BBQUFIWlpVUFJsUTk5MC5wbmc%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11"
                 alt=""/>
            <router-link class="btn hvr-hover" to="/tour-detail">湘西十八洞村</router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div class="shop-cat-box">
            <div class="type-lb">
              <p class="new">新线路</p>
            </div>
            <img class="img-fluid"
                 src="https://b1-q.mafengwo.net/s18/M00/83/EA/CoUBYGCn4ciAfLDDABkIOyciOPU502.jpg?imageMogr2%2Fthumbnail%2F%21310x175r%2Fgravity%2FCenter%2Fcrop%2F%21310x175%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cHM6Ly9iMS1xLm1hZmVuZ3dvLm5ldC9zMTEvTTAwLzQ0LzlCL3dLZ0JFRnNQNVJ5QUR2N3BBQUFIWlpVUFJsUTk5MC5wbmc%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11"
                 alt=""/>
            <router-link class="btn hvr-hover" to="/tour-detail">湘西十八洞村</router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div class="shop-cat-box">
            <div class="type-lb">
              <p class="new">新线路</p>
            </div>
            <img class="img-fluid"
                 src="https://b1-q.mafengwo.net/s18/M00/83/EA/CoUBYGCn4ciAfLDDABkIOyciOPU502.jpg?imageMogr2%2Fthumbnail%2F%21310x175r%2Fgravity%2FCenter%2Fcrop%2F%21310x175%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cHM6Ly9iMS1xLm1hZmVuZ3dvLm5ldC9zMTEvTTAwLzQ0LzlCL3dLZ0JFRnNQNVJ5QUR2N3BBQUFIWlpVUFJsUTk5MC5wbmc%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11"
                 alt=""/>
            <router-link class="btn hvr-hover" to="/tour-detail">湘西十八洞村</router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div class="shop-cat-box">
            <div class="type-lb">
              <p class="new">新线路</p>
            </div>
            <img class="img-fluid"
                 src="https://b1-q.mafengwo.net/s18/M00/83/EA/CoUBYGCn4ciAfLDDABkIOyciOPU502.jpg?imageMogr2%2Fthumbnail%2F%21310x175r%2Fgravity%2FCenter%2Fcrop%2F%21310x175%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cHM6Ly9iMS1xLm1hZmVuZ3dvLm5ldC9zMTEvTTAwLzQ0LzlCL3dLZ0JFRnNQNVJ5QUR2N3BBQUFIWlpVUFJsUTk5MC5wbmc%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11"
                 alt=""/>
            <router-link class="btn hvr-hover" to="/tour-detail">湘西十八洞村</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Categories -->
  <!--3列 贫困地区推荐结束-->

  <!--2列 小广告开始-->
  <div class="box-add-products">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="offer-box-products">
            <img class="img-fluid" src="../../assets/images/add-img-02.jpg" alt=""/>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="offer-box-products">
            <img class="img-fluid" src="../../assets/images/add-img-02.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--2列 小广告结束-->

  <!--商品简介开始-->
  <!-- Start Blog  -->
  <div class="latest-blog">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-all text-center">
            <h1>简·攻略</h1>
            <p>提供最可靠、最便捷的攻略心得给唯一的你</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4 col-xl-4">
          <div class="blog-box">
            <div class="blog-img">
              <img class="img-fluid"
                   src="https://p1-q.mafengwo.net/s17/M00/39/80/CoUBXl9iOw6ADZObAAV3-OGa7oc722.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                   alt=""/>
            </div>
            <div class="blog-content">
              <div class="title-blog">
                <h3>特殊时期的寻味之旅——西北篇（西安/天水/兰州）</h3>
                <p> 决定去 缙云 ，只因为一块榴莲味的烧饼。 前些天带六宝去朋友家玩，刚巧碰上她家邻居送来几块 缙云 带回来的烧饼。六宝第一次吃到芝士榴莲味的烧饼，整个人都惊呆了。从朋友家离开后的几天里...</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-4">
          <div class="blog-box">
            <div class="blog-img">
              <img class="img-fluid"
                   src="https://p1-q.mafengwo.net/s17/M00/39/80/CoUBXl9iOw6ADZObAAV3-OGa7oc722.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                   alt=""/>
            </div>
            <div class="blog-content">
              <div class="title-blog">
                <h3>特殊时期的寻味之旅——西北篇（西安/天水/兰州）</h3>
                <p> 决定去 缙云 ，只因为一块榴莲味的烧饼。 前些天带六宝去朋友家玩，刚巧碰上她家邻居送来几块 缙云 带回来的烧饼。六宝第一次吃到芝士榴莲味的烧饼，整个人都惊呆了。从朋友家离开后的几天里...</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-4">
          <div class="blog-box">
            <div class="blog-img">
              <img class="img-fluid"
                   src="https://p1-q.mafengwo.net/s17/M00/39/80/CoUBXl9iOw6ADZObAAV3-OGa7oc722.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                   alt=""/>
            </div>
            <div class="blog-content">
              <div class="title-blog">
                <h3>特殊时期的寻味之旅——西北篇（西安/天水/兰州）</h3>
                <p> 决定去 缙云 ，只因为一块榴莲味的烧饼。 前些天带六宝去朋友家玩，刚巧碰上她家邻居送来几块 缙云 带回来的烧饼。六宝第一次吃到芝士榴莲味的烧饼，整个人都惊呆了。从朋友家离开后的几天里...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Blog  -->
  <!--商品简介结束-->
</template>

<script>
export default {
  name: 'Tour'
}
</script>

<style scoped>
.shop-cat-box {
  width: 350px;
  height: 200px;
  object-fit: cover;
}

.offer-box-products img {
  width: 540px;
  height: 360px;
  object-fit: cover;
}
</style>
