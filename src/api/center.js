import request from '@/utils/request'

export default {
  // 修改密码
  ModifyPwd (userOPdw, userId, newpwd) {
    return request({
      url: `/user/front/ModifyPwd/${userOPdw}/${userId}/${newpwd}`,
      method: 'post'
    })
  },
  // 修改用户信息
  ModifyUserInfo (userInfoVo) {
    return request({
      url: '/user/front/CheckPersonInfo',
      method: 'post',
      data: userInfoVo
    })
  },
  // 根据用户ID查询订单信息
  // 商品列表
  getOrderList (searchObj) {
    return request({
      url: '/order/front/orderlist',
      method: 'post',
      params: searchObj
    })
  },
  // 删除订单
  deletOrder (orderId) {
    return request({
      url: `/order/front/delete/${orderId}`,
      method: 'post'
    })
  },
  getOrderDetail (orderId) {
    return request({
      url: `/order/front/detail/${orderId}`,
      method: 'get'
    })
  },
  confirmGet (orderId) {
    return request({
      url: `/order/front/confirmGet/${orderId}`,
      method: 'post'
    })
  }
}
