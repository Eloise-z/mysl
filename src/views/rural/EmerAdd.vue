<!--
*Author: Eloise
*Date: 2021-06-21 14:17
-->
<template>
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/index">首页</router-link></li>
            <li class="breadcrumb-item"><router-link to="/emergency"> 应急·滞销 </router-link></li>
            <li class="breadcrumb-item active"> 添加滞销</li>
          </ul>
          <h2>添加滞销</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="emer-add">
    <div class="container">
      <div class="row" style="margin: 50px">
        <div class="col-lg-12 shadow p-3 mb-5">
          <div class="row">
            <div class="col-lg-12">
              <div class="border-orange text-center">
                <p class="font-weight-bold" style="color: #e31613">发布虚假、违法信息，造成恶劣影响的，平台将会移交司法机关依法查处。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <form>
            <div class="form-group">
              <label for="emerName">滞销产品</label>
              <input type="text" class="form-control" id="emerName">
            </div>
            <div class="form-group">
              <label for="emerNum">数量</label>
              <input type="text" class="form-control" id="emerNum">
            </div>
            <div class="form-group">
              <label for="emerPlace">地点</label>
              <input type="text" class="form-control" id="emerPlace">
            </div>
            <div class="form-group">
              <label for="emerPeople">联系人</label>
              <input type="text" class="form-control" id="emerPeople">
            </div>
            <div class="form-group">
              <label for="emerContact">联系方式</label>
              <input type="text" class="form-control" id="emerContact">
            </div>
            <div class="form-group">
              <label for="emerOth">其他信息</label>
              <textarea class="form-control" id="emerOth" rows="3"></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-success mr-4">提交</button>
              <button type="button" class="btn">返回</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmerAdd'
}
</script>

<style scoped>

</style>
