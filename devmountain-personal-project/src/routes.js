import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/about'
import Programs from './components/Programs/programs'
import Login from './components/Login/login'
import Register from './components/Register/register'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/programs" component={Programs} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </Switch>
)