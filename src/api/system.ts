import request from '@/utils/request'

export const getUserInfo = (params: any) =>
  request({
    url: '/system/user/getInfo',
    method: 'get',
    params
  })
