import React, {Component} from 'react'


import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'


export default class App extends Component{
   
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route pach='/login' component={Login}/>
                    <Route pach='/' component={Admin}/>
                </Switch>
            </BrowserRouter>  
        )
    }

} 