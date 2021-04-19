import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/about'
import Programs from './components/Programs/programs'
import Contact from './components/Contact/contact'
import Register from './components/Register/register'
import User from './components/User/User'
import Login from './components/Login/Login'

export default (
  <Switch>
    <Route exact path="/"   component={Home} />
    <Route path="/about"    component={About} />
    <Route path="/programs" component={Programs} />
    <Route path="/contact"  component={Contact} />
    <Route path="/user"     component={User}  />
    <Route path="/register" component={Register} />
    <Route path="/login"    component={Login} />
  </Switch>
)