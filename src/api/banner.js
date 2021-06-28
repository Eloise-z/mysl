import request from '@/utils/request'

export default {
  // 获取幻灯片图片
  getBannerList (pos) {
    return request({
      url: `/product/front/ad/getAdListByPos/${pos}`,
      method: 'get'
    })
  }
}
