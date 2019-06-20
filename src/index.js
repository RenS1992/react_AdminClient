import React from 'react'
import ReactDOM from 'react-dom'

import memeoryUtils from './utils/memoryUtils'
import {getUser} from './utils/strorageUtils'
import App from './App'

import './api'
/* 
入口文件
*/
// 读取local中保存的user, 缓存到内存中

const user = getUser()
memeoryUtils.user = user

ReactDOM.render(<App />, document.getElementById('root'))