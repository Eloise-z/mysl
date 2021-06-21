import request from '@/utils/request'

export default {

  // 根据token获取用户信息
  getUserInfo () {
    return request({
      url: '/user/front/getUserInfo',
      method: 'get'
    })
  },

  // 登录
  userLogin (UserLoginVo) {
    return request({
      url: '/user/front/login',
      method: 'post',
      data: UserLoginVo
    })
  },

  // 发送邮件
  sendEmail (email, sign) {
    return request({
      url: `/user/front/sendEmail/${email}/${sign}`,
      method: 'post'
    })
  },

  // 注册
  userRegister (UserRegisterVo) {
    return request({
      url: '/user/front/regist',
      method: 'post',
      data: UserRegisterVo
    })
  },

  // 找回密码
  findPwd (UserFindPwdVo) {
    return request({
      url: '/user/front/findpwd',
      method: 'post',
      data: UserFindPwdVo
    })
  }
}
