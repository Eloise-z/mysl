import request from '@/utils/request'

export default {
  // 条件查询分页获取滞销列表
  getEmerList (params) {
    return request({
      url: '/product/emer/front/list',
      method: 'get',
      params: params
    })
  },
  // 添加滞销
  addEmer (emer) {
    return request({
      url: '/product/emer/front/add',
      method: 'post',
      data: emer
    })
  }
}
