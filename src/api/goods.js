import request from '@/utils/request'

export default {

  // 商品列表
  getGoodsList (searchObj) {
    return request({
      url: '/product/front/goodsinfo/list',
      method: 'post',
      params: searchObj
    })
  }
}
