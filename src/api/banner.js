import request from '@/utils/request'

export default {
  // 获取幻灯片图片
  getBannerList () {
    return request({
      url: '/product/front/ad/getAllAd',
      method: 'get'
    })
  }
}
