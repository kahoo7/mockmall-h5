// 2020-1-26 因为还没有后端所以用easy-mock数据代替
// link: https://mock.presstime.cn/

import request from '@/util/axios'

export const exRequest = () => {
  return request({
    url: '/api/example',
    methods: 'get'
  })
}

export const getList = () => {
  return request({
    url: '/api/home/get-list',
    methods: 'get'
  })
}
