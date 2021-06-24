import request from '@/utils/request'

export default {
  // 添加地址信息
  addShipInfo (shipVo) {
    return request({
      url: '/user/front/ship/add',
      method: 'post',
      data: shipVo
    })
  },
  // 获取地址列表
  getShipList (page, limit, userId) {
    return request({
      url: `/user/front/ship/list/${page}/${limit}/${userId}`,
      method: 'get'
    })
  },
  // 根据shipId获取地址信息
  getInfoById (shipId) {
    return request({
      url: `/user/front/ship/info/${shipId}`,
      method: 'get'
    })
  },
  // 修改地址信息
  updateInfoById (ship) {
    return request({
      url: '/user/front/ship/update',
      method: 'post',
      data: ship
    })
  },
  // 删除地址信息
  deleteById (shipId) {
    return request({
      url: `/user/front/ship/delete/${shipId}`,
      method: 'delete'
    })
  }
}
