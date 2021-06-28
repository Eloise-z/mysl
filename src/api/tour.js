import request from '@/utils/request'

export default {
  // 获取文旅首页数据
  getIndex () {
    return request({
      url: '/tour/front/index',
      method: 'get'
    })
  },
  // 根据文旅id获取详细信息
  getTourInfoById (toId) {
    return request({
      url: `/tour/front/info/${toId}`,
      method: 'get'
    })
  }
}
