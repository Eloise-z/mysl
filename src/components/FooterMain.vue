<!--
*Author: Eloise
*Date: 2021-06-13 20:06
-->
<template>
  <!--底部开始-->
  <footer>
    <div class="footer-main">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="footer-link">
              <h4>系列网站|友情链接</h4>
              <ul style="color: #ffffff; font-size: 16px;">
                <li><a href="http://game.copot.cn">爱游戏交易平台</a></li>
                <li><a href="http://www.copot.cn">卡路里智能运动匹配平台</a></li>
                <li><a href="#">农产品交易平台</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="footer-link">
              <h4>网站服务</h4>
              <ul>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">后台管理</a></li>
                <li><a href="#">客户服务</a></li>
                <li><a href="#">服务条款</a></li>
                <li><a href="#">免责声明</a></li>
                <li><a href="#">用户协议</a></li>
                <li><a href="#">隐私政策</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="footer-link-contact">
              <h4>其他信息</h4>
              <ul>
                <li>
                  <p><i class="fas fa-ban"></i>本网站所列数据，除特殊说明，均为测试学习所用，不用于商业用途。请您知悉！</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr>
      </div>
    </div>
  </footer>
  <!-- 底部结束  -->

  <!-- 版权开始  -->
  <div class="footer-copyright">
    <p class="footer-company">All Rights Reserved. &copy; 2021 <a href="#">软件工程学院-工程实践4</a>
      <a href="http://www.copot.cn/">工程实践系列网站</a></p>
  </div>
  <!-- 版权结束  -->

  <!-- 返回顶部 -->
  <span title="返回顶部" id="back-to-top" style="display: none" @click="scrollTop"><i style="padding-top: 2px" class="fas fa-angle-double-up"></i></span>
</template>

<script>
export default {
  name: 'FooterMain',
  methods: {
    scrollTop () {
      $('html, body').animate({
        scrollTop: 0
      }, 600)
      return false
    }
  }
}
</script>

<style scoped>

</style>
