import request from '@/utils/request'
export default {

  // 首页数据
  getIndex() {
    return request({
      url: '/product/front/index',
      method: 'get'
    })
  },

  getFirstType() {
    return request({
      url: '/product/typeinfo/firstTypeInfo',
      method: 'get'
    })
  }
}
