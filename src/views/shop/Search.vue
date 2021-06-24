<!--
*Author: Eloise
*Date: 2021-06-21 01:26
-->
<template>
  <!--面包屑开始-->
  <div class="all-title-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/index">首页</router-link></li>
            <li class="breadcrumb-item active"> 搜索</li>
          </ul>
          <h2>搜索</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="search">
    <div class="container">
      <div class="row" style="margin: 150px 0">
        <div class="col-md-12" style="text-align: center;">
          <form>
            <div class="form-row justify-content-center mx-5">
              <div class="col-8">
                <label class="sr-only" for="searchInput">Name</label>
                <input type="text" v-model="goodName" class="form-control mb-2" id="searchInput" placeholder="输入商品名称搜索">
              </div>
              <button type="submit"
                style="background-color: rgb(176 180 53); border: #1c7430"
                class="btn btn-danger ml-2 mb-2 col-2"
                @click="search()"
              >
                搜索
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      goodName: ''
    }
  },
  methods: {
    search() {
      this.$router.push({ path: '/shop', query: { goodName: this.goodName } })
    }
  }
}
</script>

<style scoped>

</style>
