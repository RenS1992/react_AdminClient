import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu, Icon } from 'antd'

import './index.less'
import logo from '../../assets/images/logo.png'
import menuList from '../../config/menuConfig.js'




const { SubMenu, Item }  = Menu
console.log(menuList)



/* 
admin的导航组件
*/
export default class LeftNav extends Component {
  /* 
  根据menu数据中的数组生成包含<Item></Item> / <SubMenu></SubMenu>的数组
  */
  getMenuNodes = (menuList) =>{
    return menuList.map(item =>{
      if(!item.children){
        return (
          <Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Item>
        )
      }else{
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {
              this.getMenuNodes(item.children)
            }
          </SubMenu>
        )
      }
    })
  }  
  render() {
        return (
            <div className='left-nav'>
                <Link to="/home" className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>后台管理</h1>
                </Link>
                
                <Menu
                  mode="inline"
                  theme="dark"
                >
                  {
                    this.getMenuNodes(menuList)
                  }
                {/* <Item key="/home">
                  <Link to="/home">
                    <Icon type="home" />
                    <span>首页</span>
                  </Link>
                </Item>
                <SubMenu
                  key="/products"
                  title={
                    <span>
                      <Icon type="appstore" />
                      <span>商品</span>
                    </span>
                  }
                >
                  <Item key="/category">
                    <Link to="/category">
                      <Icon type="bars" />
                      <span>分类管理</span>
                    </Link>
                  </Item>
                  <Item key="/product">
                    <Link to="/product">
                      <Icon type="tool" />
                      <span>商品管理</span>
                    </Link>
                  </Item>
                </SubMenu> */}
                
              </Menu>
            </div>
        )
    }
}
