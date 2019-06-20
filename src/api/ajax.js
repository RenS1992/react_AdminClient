/* 
通用的能发送任何ajax请求的函数模块
封装axios库
函数返回一个promise对象
*/

import axios from 'axios'

export default function ajax(url, data = {}, method="GET") {

  return new Promise((resolve, reject) => {
    let promise
    // 1. 执行异步ajax请求(使用axios)
    // 发get请求
    if (method === 'GET') {
      promise = axios.get(url, {
        params: data // 指定quey参数
      })
    } else { // 发post请求
      promise = axios.post(url, data)
    }
    promise.then(
      // 2. 如果成功了, 调用resolve(), 并指定成功的数据
      response => { 
        resolve(response.data)
      },
       // 3. 如果出错了, 不调用reject(), 显示错误的提示
      error => {
        alert('请求出错: ' + error.message)
      }
    )
  })

  
}