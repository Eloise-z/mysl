import request from '@/utils/request'

export default {
  // 根据商品id和用户id判断商品是否已加入收藏
  getWishByUserIdAndGoodId (userId, goodId) {
    return request({
      url: `/user/wish/front/getWishByUserIdAndGoodId/${userId}/${goodId}`,
      method: 'get'
    })
  },
  // 加入收藏
  addWish (userId, goodId) {
    return request({
      url: `/user/wish/front/addWish/${userId}/${goodId}`,
      method: 'get'
    })
  },
  // 根据userId获取所有收藏信息
  getWishByUserId (userId, page, limit) {
    return request({
      url: `/user/wish/front/getWishByUserId/${userId}/${page}/${limit}`,
      method: 'get'
    })
  },
  // 根据wId移除收藏
  deleteByWid (wId) {
    return request({
      url: `/user/wish/front/deleteByWid/${wId}`,
      method: 'delete'
    })
  },
  // 根据userId和goodId移除收藏
  deleteByUserIdAndGoodId (userId, goodId) {
    return request({
      url: `/user/wish/front/deleteByUserIdAndGoodId/${userId}/${goodId}`,
      method: 'delete'
    })
  }
}
