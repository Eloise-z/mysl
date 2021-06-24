<!--
*Author: Eloise
*Date: 2021-06-24 18:44
-->
<template>
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/index">首页</router-link></li>
            <li class="breadcrumb-item"><router-link to="/my-account"> 个人中心 </router-link></li>
            <li class="breadcrumb-item"><router-link to="/sale-list"> 营销管理 </router-link></li>
            <li class="breadcrumb-item active"> 添加动态</li>
          </ul>
          <h2>添加动态</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="userSaleAdd">
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-12 p-3 mb-3">
          <div class="row">
            <div class="col-lg-12">
              <div class="border-orange">
                <p class="font-weight-bold ml-2" style="color: #e31613">为保证溯源及动态的真实性、不可篡改性，动态一旦提交不可修改删除，请您谨慎操作！</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 mb-2 text-right">
          <a href="growing.html" class="btn btn-primary">查看本产品全部动态</a>
        </div>
        <div class="col-md-12 mb-5">
          <form>
            <div class="form-group">
              <label for="goodsDateCode">当前批次码</label>
              <input type="text" readonly class="form-control" id="goodsDateCode" value="101122">
            </div>
            <div class="form-group">
              <label for="goodsDateName">当前批次名称</label>
              <input type="text" readonly class="form-control" id="goodsDateName" value="2020春季">
            </div>
            <div class="form-group">
              <label for="goodsImg">动态图片</label>
              <div class="row">
                <div class="col-lg-6">
                  <input type="file" class="form-control form-control-file" id="goodsImg" accept="image/*">
                </div>
                <div class="col-lg-6">
                  <img style="max-width: 300px" src="" id="uploadImgView">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="goodContent">动态内容</label>
              <textarea cols="3" class="form-control" id="goodContent"></textarea>
            </div>
            <button type="submit" class="btn btn-primary mr-3">提交</button>
            <button type="button" class="btn">返回</button>
          </form>
        </div>
      </div>
      <div class="row mt-2">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaleGrowing'
}
</script>

<style scoped>

</style>
