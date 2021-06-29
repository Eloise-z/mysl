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
            <li class="breadcrumb-item">
              <router-link to="/index">首页</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/origin"> 产品溯源</router-link>
            </li>
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
            <div class="date-form" v-show="goodsinfo !== undefined">
              <!--  <h1>标题</h1>-->
              <div class="border-green">
                <p style="margin-left:10px; margin-bottom: 20px">
                  这是第{{ goodsinfo.tgNum }}次查询，
                  首次查询是{{ goodsinfo.stTime }}。
                </p>
              </div>

              <form id="dateform">
                <div class="col-md-12">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-3">
                        <p>产品类别</p>
                      </div>
                      <div class="col-md-9">
                        <p v-for="list in typelist" style="" :key="list.typeId">
                          <span style="color: #f92672">
                          <i class="fas fa-sun">
                          </i>
                          </span>{{ list.typeName }}
                        </p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>产品名称</p>
                      </div>
                      <div class="col-md-9">
                        <p>{{ goodsinfo.goodName }}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>批次名称</p>
                      </div>
                      <div class="col-md-9">
                        <p>{{ goodsinfo.twName }}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>播种时间</p>
                      </div>
                      <div class="col-md-9">
                        <p>{{ goodsinfo.stime }}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>成熟时间</p>
                      </div>
                      <div class="col-md-9">
                        <p>{{ goodsinfo.etime }}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>产地农场</p>
                      </div>
                      <div class="col-md-9">
                        <p>{{ goodsinfo.goodFarm }}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>货号</p>
                      </div>
                      <div class="col-md-9">
                        <p>{{ goodsinfo.twOthnum }}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>产品信息</p>
                      </div>
                      <div class="col-md-9">
                        <router-link style="display: inline-block;height: 70px" class="cart"
                                     :to="{ path: '/shop-detail', query: { goodId: goodsinfo.goodId } }">
                          查看详情
                        </router-link>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>生长全程溯源</p>
                      </div>
                      <div class="col-md-9">
                        <router-link style="display: inline-block;height: 70px"
                                     :to="{ path: '/growing', query: { goodId: goodId} }">点击查看
                        </router-link>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <p>备注</p>
                      </div>
                      <div class="col-md-9">
                        <text>{{ goodsinfo.twInfo }}</text>
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
import goodsApi from '@/api/goods'
import { ElMessage, ElLoading } from 'element-plus'

export default {
  name: 'OriginRes',
  data () {
    return {
      tgCode: '',
      goodsinfo: {}, // 商品信息
      typelist: [], // 商品类别信息
      goodId: ''
    }
  },
  created () {
    this.tgCode = this.$route.query.tgCode
    this.getGoodsInfo()
  },
  methods: {
    // 根据产品码查询商品信息
    getGoodsInfo () {
      const loading = ElLoading.service({
        fullscreen: true,
        text: '溯源中..请稍后'
      })
      goodsApi.getGoodsInfoByTgCode(this.tgCode).then((response) => {
        loading.close()
        this.goodsinfo = response.data.trackgoods
        console.log(this.goodsinfo)
        if (this.goodsinfo === undefined) {
          ElMessage.error('没有找到溯源信息！')
          this.$router.push('/origin')
        } else {
          ElMessage.success('查询成功')
          this.goodId = response.data.trackgoods.goodId
          this.getTypeList()
        }
      })
    },
    // 根据产品id查询类别信息
    getTypeList () {
      goodsApi.getGoodsTypeList(this.goodId).then((response) => {
        this.typelist = response.data.goodstypeList
      })
    }
  }
}
</script>

<style scoped>

</style>
