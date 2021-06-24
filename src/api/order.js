import request from '@/utils/request'

export default {
  // 生成订单
  generateOrder (frontOrderVo) {
    return request({
      url: '/order/front/generate',
      method: 'post',
      data: frontOrderVo
    })
  },
  // 根据订单编号查询订单信息
  getOrderById (orderId) {
    return request({
      url: `/order/front/info/${orderId}`,
      method: 'get'
    })
  },
  // 订单支付
  orderPayment (orderId) {
    return request({
      url: `/order/front/payment/${orderId}`,
      method: 'get'
    })
  },

  // 根据用户id查询订单(只含预售订单)
  getPreOrderByUserId (userId, limit) {
    return request({
      url: `/order/front/getPreOrderByUserId/${userId}/${limit}`,
      method: 'get'
    })
  }

}
