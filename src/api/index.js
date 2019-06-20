/*
包含n个接口请求函数的模块
每个函数返回promise
 */
import ajax from './ajax'
// const BASE = 'http://localhost:3000'
const BASE = ''
// 1. 用户登录
export const reqLogin = (username, password) => ajax(BASE + '/login', {username, password}, 'POST')

// 2. 添加用户
export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST')


// 测试
reqLogin('admin', 'admin').then(result => {
  console.log('result', result)
})



/* import ajax from "./ajax";
// const BASE = 'http://localhost:3000'
const BASE = ''

// 1. 登陆

export const reqLogin = (username, password) => ajax(BASE + '/login', {username, password}, 'POST')

// 添加用户
export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST')


// 简单测试一下
reqLogin('admin', 'admin').then(result => {
  console.log('result', result)
})  
*/
