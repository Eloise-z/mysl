import request from '@/utils/request'
export default {

  // 商品列表
  getIndex() {
    return request({
      url: '/product/front/goodsinfo/list',
      method: 'get'
    })
  }
}
