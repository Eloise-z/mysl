import request from '@/utils/request'

export default {
  // 商品列表
  getGoodsList (searchObj) {
    return request({
      url: '/product/front/goodsinfo/list',
      method: 'post',
      params: searchObj
    })
  },

  // 商品详情
  getGoodDetail (goodId) {
    return request({
      url: `/product/front/goodsinfo/detail/${goodId}`,
      method: 'get'
    })
  },
  // 根据商品id查询类别信息
  getGoodsTypeList (goodId) {
    return request({
      url: `/product/front/goodsinfo/typelist/${goodId}`,
      method: 'get'
    })
  },
  // 商品评论列表
  getgcriticList (page, limit, goodId) {
    return request({
      url: `/product/front/goodsinfo/gcriticList/${page}/${limit}/${goodId}`,
      method: 'get'
    })
  },
  // 根据订单编号生成产品码
  addTrackgoods (orderId) {
    return request({
      url: `/product/trackgoods/front/addTrackgoods/${orderId}`,
      method: 'get'
    })
  },
  // 根据产品码查询商品
  getGoodsInfoByTgCode (tgcode) {
    return request({
      url: `/product/trackgoods/front/getTrackgoodsBytgCode/${tgcode}`,
      method: 'get'
    })
  },
  // 根据订单编号添加评价
  addReview (frontGcriticVo) {
    return request({
      url: '/product/gcritic/front/addReview',
      method: 'post',
      data: frontGcriticVo
    })
  },
  // 根据商品id查询该商品所属批次名称和溯源批次码
  getTrackInfo (goodId) {
    return request({
      url: `/product/goodsdyn/front/getTrackInfo/${goodId}`,
      method: 'get'
    })
  },
  // 根据商品id查询该商品所有动态信息
  getDynInfo (goodId) {
    return request({
      url: `/product/goodsdyn/front/getDynInfo/${goodId}`,
      method: 'get'
    })
  },
  // 根据商品id查询该商品所有动态图片信息
  getDynPictureInfo (goodId) {
    return request({
      url: `/product/goodsdyn/front/getDynPictureInfo/${goodId}`,
      method: 'get'
    })
  }
}
