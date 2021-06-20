import request from '@/utils/request'
export default {
  // 根据token获取用户信息
  getUserInfo() {
    return request({
      url: '/user/front/getUserInfo',
      method: 'get'
    })
  },

  // 登录
  userLogin(userLoginVo) {
    return request({
      url: '/user/front/login',
      method: 'post',
      data: userLoginVo
    })
  }

}
