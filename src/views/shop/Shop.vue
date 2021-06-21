<!--
*Author: Eloise
*Date: 2021-06-14 14:53
-->
<template>
  <!-- Start Shop Page  -->
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/index">首页</router-link></li>
            <li class="breadcrumb-item active"> 商品列表</li>
          </ul>
          <h2>商品列表</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!-- 通用部分开始  注意，本页面有自带的新写的JS！！ -->
  <div class="shop-box-inner">
    <div class="container">
      <div class="row">
        <!--商品列表主体-->
        <div class="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
          <div class="right-product-box">
            <!--顶部栏-->
            <div class="product-item-filter row">
              <div class="col-12 col-sm-8 text-center text-sm-left">
                <div class="toolbar-sorter-right" >
                  <span style="font-size: 15px" class="font-weight-bold">排序 </span>
                  <select  id="basic" style="width: 200px;" class="custom-select show-tick form-control" data-placeholder="￥">
                    <option data-display="Select">默认</option>
                    <option value="1">浏览量</option>
                    <option value="2">价格从高到低</option>
                    <option value="3">价格从低到高</option>
                    <option value="4">最多售卖</option>
                  </select>
<!--                  <select id="basic1" class="selectpicker show-tick form-control" data-placeholder="$ USD">
                    <option data-display="Select">默认</option>
                    <option value="1">浏览量</option>
                    <option value="2">价格从高到低</option>
                    <option value="3">价格从低到高</option>
                    <option value="4">最多售卖</option>
                  </select>-->
                </div>
              </div>
              <div class="col-12 col-sm-4 text-center text-sm-right">
                <span style="font-size: 15px; display: inline-block;line-height: 41px">展示了所有 4 个结果</span>
<!--                <ul class="nav nav-tabs ml-auto">
                  <li>
                    <a class="nav-link active" href="#grid-view" data-toggle="tab"> <i class="fa fa-th"></i> </a>
                  </li>
                  &lt;!&ndash;  <li>
                        <a class="nav-link" href="#list-view" data-toggle="tab"> <i class="fa fa-list-ul"></i> </a>
                    </li>&ndash;&gt;
                </ul>-->
              </div>
            </div>
            <!--商品列表内容区-->
            <div class="product-categorie-box">
              <div class="tab-content">
                <div role="tabpanel" class="tab-pane fade show active" id="grid-view">
                  <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div class="products-single fix">
                        <div class="box-img-hover">
                          <div class="type-lb-out">
                            <p class="sale">已售罄</p>
                          </div>
                          <img src="../../assets/images/img-pro-01.jpg" class="img-fluid" alt="Image">
                          <div class="mask-icon">
                            <router-link class="cart" :to="{ path: '/shop-detail', query: { goodId: '1' }}">查看详情</router-link>
                          </div>
                        </div>
                        <div class="why-text">
                          <h4>新疆棉花</h4>
                          <h5> ￥100.00</h5>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div class="products-single fix">
                        <div class="box-img-hover">
                          <div class="type-lb">
                            <p class="new">New</p>
                          </div>
                          <img src="../../assets/images/img-pro-02.jpg" class="img-fluid" alt="Image">
                          <div class="mask-icon">
                            <router-link class="cart" to="/shop-detail">查看详情</router-link>
                          </div>
                        </div>
                        <div class="why-text">
                          <h4>新疆棉花</h4>
                          <h5> ￥100.00</h5>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div class="products-single fix">
                        <div class="box-img-hover">
                          <div class="type-lb">
                            <p class="sale">Sale</p>
                          </div>
                          <img src="../../assets/images/img-pro-03.jpg" class="img-fluid" alt="Image">
                          <div class="mask-icon">
                            <router-link class="cart" to="/shop-detail">查看详情</router-link>
                          </div>
                        </div>
                        <div class="why-text">
                          <h4>新疆棉花</h4>
                          <h5> ￥100.00</h5>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div class="products-single fix">
                        <div class="box-img-hover">
                          <div class="type-lb">
                            <p class="new">New</p>
                          </div>
                          <img src="../../assets/images/img-pro-01.jpg" class="img-fluid" alt="Image">
                          <div class="mask-icon">
                            <router-link class="cart" to="/shop-detail">查看详情</router-link>
                          </div>
                        </div>
                        <div class="why-text">
                          <h4>新疆棉花</h4>
                          <h5> ￥100.00</h5>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div class="products-single fix">
                        <div class="box-img-hover">
                          <div class="type-lb">
                            <p class="sale">Sale</p>
                          </div>
                          <img src="../../assets/images/img-pro-02.jpg" class="img-fluid" alt="Image">
                          <div class="mask-icon">
                            <router-link class="cart" to="/shop-detail">查看详情</router-link>
                          </div>
                        </div>
                        <div class="why-text">
                          <h4>新疆棉花</h4>
                          <h5> ￥100.00</h5>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div class="products-single fix">
                        <div class="box-img-hover">
                          <div class="type-lb">
                            <p class="sale">Sale</p>
                          </div>
                          <img src="../../assets/images/img-pro-03.jpg" class="img-fluid" alt="Image">
                          <div class="mask-icon">
                            <router-link class="cart" to="/shop-detail">查看详情</router-link>
                          </div>
                        </div>
                        <div class="why-text">
                          <h4>新疆棉花</h4>
                          <h5> ￥100.00</h5>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div class="products-single fix">
                        <div class="box-img-hover">
                          <div class="type-lb">
                            <p class="sale">Sale</p>
                          </div>
                          <img src="../../assets/images/img-pro-01.jpg" class="img-fluid" alt="Image">
                          <div class="mask-icon">
                            <router-link class="cart" to="/shop-detail">查看详情</router-link>
                          </div>
                        </div>
                        <div class="why-text">
                          <h4>新疆棉花</h4>
                          <h5> ￥100.00</h5>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div class="products-single fix">
                        <div class="box-img-hover">
                          <div class="type-lb">
                            <p class="sale">Sale</p>
                          </div>
                          <img src="../../assets/images/img-pro-02.jpg" class="img-fluid" alt="Image">
                          <div class="mask-icon">
                            <router-link class="cart" to="/shop-detail">查看详情</router-link>
                          </div>
                        </div>
                        <div class="why-text">
                          <h4>新疆棉花</h4>
                          <h5> ￥100.00</h5>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div class="products-single fix">
                        <div class="box-img-hover">
                          <div class="type-lb">
                            <p class="new">New</p>
                          </div>
                          <img src="../../assets/images/img-pro-03.jpg" class="img-fluid" alt="Image">
                          <div class="mask-icon">
                            <router-link class="cart" to="/shop-detail">查看详情</router-link>
                          </div>
                        </div>
                        <div class="why-text">
                          <h4>新疆棉花</h4>
                          <h5> ￥100.00</h5>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                      <a class="btn btn-outline-primary w-100" role="button" href="#">
                        加载更多
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--右侧栏-->
        <div class="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
          <div class="product-categori">
            <div class="search-product">
              <form action="#">
                <input class="form-control" placeholder="输入商品名称" type="text">
                <button type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
            <div class="filter-price-left">
              <div class="title-left">
                <h3>价格筛选</h3>
              </div>
              <div class="price-box-slider">
                <div id="slider-range"></div>
                <p>
                  <input type="text" id="amount" readonly style="border:0; color:#fbb714; font-weight:bold;">
                  <button class="btn hvr-hover" type="submit">筛选</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
(function ($) {
  $(function () {
    $('#slider-range').slider({
      range: true,
      min: 0,
      max: 2000,
      values: [0, 200],
      slide: function (event, ui) {
        $('#amount').val('￥' + ui.values[0] + ' - ￥' + ui.values[1])
      }
    })
    $('#amount').val('￥' + $('#slider-range').slider('values', 0) +
      ' - ￥' + $('#slider-range').slider('values', 1))
  })
}(jQuery))

export default {
  name: 'Shop'
}
</script>

<style scoped>

</style>
