
import store from 'store'

/* 
用来进行local数据存储的工具模块
*/
//统一暴露
/* export default{
    saveUser(){

    },
    getUser (){

    }
} */
//分别暴露
/* 
保存user
*/
export function saveUser (user){
    //localStorage.setItem('USER-KEY', JSON.stringify(user))
    store.set('USER-KEY',user)
}
/* 
获取保存的user
*/
export function getUser (){
    // const c = a || b   // 如果a有值, c的值就为a, 否则c的值为b
    //return JSON.parse(localStorage.getItem('USER-KEY') || '{}')
    return store.get('USER-KEY') || {}
}
/* 
删除保存的user
*/
export function removeUser (){
    store.remove('user')
}