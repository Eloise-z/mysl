import request from '@/utils/request'

export default {
  // 首页数据
  getIndex () {
    return request({
      url: '/product/front/index',
      method: 'get'
    })
  },

  // 获取系统顶部公告
  getTopClaim () {
    return request({
      url: '/product/claim/front/getTopClaim',
      method: 'get'
    })
  },

  // 分页获取系统公告
  getClaim (params) {
    return request({
      url: '/product/claim/front/getClaim',
      method: 'get',
      params: params
    })
  }
}
