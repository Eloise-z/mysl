<!--
*Author: Eloise
*Date: 2021-06-30 13:59
-->
<template>
  <div class="blockquote text-center" style="background-color: gainsboro; height: 100vh">
    <h1 class="display-4" style="padding-top: 100px; font-size: 180px"> 404 !</h1>
    <p class="lead font-weight-bold">没找到对应页面，也许是您输入的路径有问题</p>
    <hr class="my-4">
    <p>您可以点击下方按钮去不同页面</p>
    <router-link class="btn btn-success btn-lg mr-3" to="/index" role="button">首页</router-link>
    <router-link class="btn btn-success btn-lg mr-3" to="/login" role="button">登录</router-link>
    <router-link class="btn btn-success btn-lg" to="" @click="$router.back()" role="button">返回</router-link>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>

<style scoped>

</style>
