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
  // 获取订单详情
  getOrderDetail (orderId) {
    return request({
      url: `/order/front/detail/${orderId}`,
      method: 'get'
    })
  },
  // 确定收货
  confirmGet (orderId) {
    return request({
      url: `/order/front/confirmGet/${orderId}`,
      method: 'post'
    })
  },
  // 获取售货列表
  getUsersaleList (Obj) {
    return request({
      url: '/product/front/goodsinfo/usersalelist',
      method: 'post',
      params: Obj
    })
  },
  // 删除售货商品
  deletUserGoods (goodId) {
    return request({
      url: `/product/front/goodsinfo/deleteusersale/${goodId}`,
      method: 'post'
    })
  },
  // 获取售货商品详情
  getUsersaleDetail (goodId) {
    return request({
      url: `/product/front/goodsinfo/selectusersale/${goodId}`,
      method: 'get'
    })
  },
  // 修改售货商品
  updateSaleGoods (goodsinfoVo) {
    return request({
      url: '/product/front/goodsinfo/updateusersale',
      method: 'post',
      data: goodsinfoVo
    })
  },
  // 增加售货商品
  addSaleGoods (goodsinfoVo) {
    return request({
      url: '/product/front/goodsinfo/add',
      method: 'post',
      data: goodsinfoVo
    })
  },
  // 获得售货商品列表
  getsaleOrderList (Obj) {
    return request({
      url: '/order/front/orderGoodsList',
      method: 'get',
      params: Obj
    })
  },
  // 接单
  recevieOrder (orderId) {
    return request({
      url: `/order/front/recevieOrder/${orderId}`,
      method: 'post'
    })
  },
  // 取消订单
  cacelOrder (orderId) {
    return request({
      url: `/order/front/cacelOrder/${orderId}`,
      method: 'post'
    })
  },
  // 发货
  sendOrder (orderId) {
    return request({
      url: `/order/front/sendOrder/${orderId}`,
      method: 'post'
    })
  },
  selectdynById (goodId) {
    return request({
      url: `/product/front/goodsinfo/selectdynById/${goodId}`,
      method: 'get'
    })
  },
  adddyn (dynInfo) {
    return request({
      url: '/product/front/goodsinfo/adddyn',
      method: 'post',
      data: dynInfo
    })
  },
  getNotTypeInfo (goodId) {
    return request({
      url: `/product/goodstype/getGoodsTypeList/${goodId}`,
      method: 'get'
    })
  },
  getTypeInfo (goodId) {
    return request({
      url: `/product/goodstype/getGoodsTypeListIs/${goodId}`,
      method: 'get'
    })
  },
  removeGoodstype (typeId, goodId) {
    return request({
      url: `/product/goodstype/deleteFromCenter/${goodId}/${typeId}`,
      method: 'post'
    })
  },
  addGoodstype (typeId, goodId) {
    return request({
      url: `/product/goodstype/addFromCenter/${goodId}/${typeId}`,
      method: 'post'
    })
  },
  nextPhase (twId) {
    return request({
      url: '/product/goodsphase/next?twId=' + twId,
      method: 'post'
    })
  }
}
