import React, {Component} from 'react'
import { Form, Icon, Input, Button, message} from 'antd'

import { Redirect } from "react-router-dom"
import { reqLogin } from "../../api"
import memoryUtils from '../../utils/memoryUtils'


import './login.less'
import Logo from '../../assets/images/logo.png'
import {saveUser} from '../../utils/strorageUtils' 



/* 
登lu的一级路由组件
*/
 class Login extends Component {
    handleSubmit = (e)=>{
        //取消默认行为
        e.preventDefault()
        /* const users = this.props.form.getFieldValue("Username")
        const password = this.props.form.getFieldValue("password")
        const values = this.props.form.getFieldsValue()
        console.log(users,password,values) */
        
        //没有错误发送请求
        this.props.form.validateFields(async(err, values) => {
            if (!err) {
              //console.log('发送请求')
              const{Username,password} = values
              const result = await reqLogin(Username, password)
              // 如果登录成功了
                if (result.status===0) {
                    // 用来保存用户信息
                    const user = result.data
                    //保存到local文件中
                    saveUser(user)
                    //  保存到内存中
                    memoryUtils.user = user
                    // 跳转到admin界面
                    this.props.history.replace('/')
                } else { // 如果登录失败了
                    message.error(result.msg, 2)
                }
            }
          })
    }
    //密码的自定义验证
    validator=(rule, value='', callback)=>{
        value = value.trim()
        if(!value){
            callback('密码不能为空！')
        }else if(value.length<4){
            callback('密码长度不能小于4位！')
        }else if(value.length>12){
            callback('密码长度不能大于12位！')
        }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
            callback('密码必须是英文、数字或下划线!')
        }else{
            callback()
        }
    }
    render () {
        const { getFieldDecorator } = this.props.form
        // 访问login界面, 如果已经登录, 自动跳转到admin
        if (memoryUtils.user._id) {
            return <Redirect to="/"/>
        }   
      return (
        <div className="login">
            <header className="login-header">
                <img src={Logo} alt="logo"/>
                <h1>React项目：后台管理系统</h1>
            </header>
            <section className="login-content">
                <h2>用户登录</h2>

                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator("Username",{
                            //用户名数据校验
                            rules: [
                                { required: true, message: '用户名不能为空!' },
                                { min: 4, message: '用户名长度不能小于4位!' },
                                { max: 12, message: '用户名长度不能大于12位!' },
                                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线!' },
                            ],

                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                            />
                        )}
                    
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator("password",{
                            //自定义验证规则
                            rules:[{validator:this.validator}]
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                            />
                        )}
                    
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                           登  录
                        </Button>
                    </Form.Item>
                </Form>

                

            </section>
        </div>
      )
    }
  }
  //包装组件并暴露
  const WrapLoginForm = Form.create()(Login)
  export default WrapLoginForm