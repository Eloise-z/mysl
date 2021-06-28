<!--
*Author: Eloise
*Date: 2021-06-24 18:45
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
              <router-link to="/my-account"> 个人中心</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/sale-list"> 营销管理</router-link>
            </li>
            <li class="breadcrumb-item active"> 商品类别管理</li>
          </ul>
          <h2>商品类别管理</h2>
        </div>
      </div>
    </div>
  </div>
  <!--面包屑结束-->

  <!--主体部分-->
  <div class="userSaleClass">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-12 mb-5">
          <form>
            <div class="form-group">
              <label for="goodsID">商品编号</label>
              <input type="number" readonly class="form-control" id="goodsID" v-model="param.goodId">
            </div>
            <div class="form-group">
              <label for="goodsName">商品名称</label>
              <input type="text" readonly class="form-control" id="goodsName" v-model="param.goodName">
            </div>
          </form>
        </div>
        <div class="col-md-12 text-center">
          <table class="table table-hover table-striped">
            <thead class="thead-light">
            <tr>
              <th scope="col">类别ID</th>
              <th scope="col">类别名称</th>
              <th scope="col">商品类别状态</th>
              <th scope="col">操作时间</th>
              <th scope="col">操作</th>
            </tr>
            </thead>
            <tbody v-for="list in dataForm" :key="list.typeId">
            <tr>
              <th>{{ list.typeId }}</th>
              <td>{{ list.typeName }}</td>
              <td>已添加</td>
              <td>{{ list.createTime }}</td>
              <td>
                <a class="btn btn-outline-danger" @click="removeGoodstype(list.typeId)" role="button">移除该类别</a>
              </td>
            </tr>
            </tbody>
            <tbody v-for="list in dataList" :key="list.typeId">
            <tr>
              <th>{{ list.typeId }}</th>
              <td>{{ list.typeName }}</td>
              <td>不属于</td>
              <td></td>
              <td>
                <a class="btn btn-outline-success" @click="addGoodstype(list.typeId)" role="button">添加该类别</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row mt-2">
      </div>
    </div>
  </div>
</template>

<script>
import centerApi from '@/api/center'

export default {
  name: 'SaleClass',
  data () {
    return {
      param: {
        goodId: '',
        goodName: ''
      },
      dataList: [], // 不含有的类别
      dataForm: [], // 含有的类别
      flag: false // 点击加载更多变为true
    }
  },
  created () {
    this.getquery()
    this.getDataList()
  },
  methods: {
    // 获取数据
    getDataList () {
      // 获取不含有的数据在一个表
      centerApi.getNotTypeInfo(this.param.goodId).then((response) => {
        this.dataList = response.data.goodsTypeList
      })
      // 获取含有的数据在一个表
      centerApi.getTypeInfo(this.param.goodId).then((response) => {
        this.dataForm = response.data.goodsTypeList
      })
    },
    // 获取商品信息
    getquery () {
      this.param.goodId = this.$route.query.goodid
      this.param.goodName = this.$route.query.goodName
    },
    // 返回上一页
    goOff () {
      this.$router.go(-1)
    },
    // 移除商品类别
    removeGoodstype (typeId) {
      if (confirm('确定移除该类别')) {
        centerApi.removeGoodstype(typeId, this.param.goodId).then((response) => {
          if (response.data.code === 0) { // 移除成功
            alert(response.data.msg)
            this.getDataList()
          } else { // 移除失败
            alert(response.data.msg)
            this.getDataList()
          }
        })
      }
    },
    // 增加商品类别
    addGoodstype (typeId) {
      if (confirm('确定添加该类别')) {
        centerApi.addGoodstype(typeId, this.param.goodId).then((response) => {
          if (response.data.code === 0) { // 增加成功
            alert(response.data.msg)
            this.getDataList()
          } else { // 移除失败
            alert(response.data.msg)
            this.getDataList()
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
