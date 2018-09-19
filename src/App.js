import React, { Component } from 'react';
import logo from './logo.svg';
import  './App.css';
import Dashboard from  './components/dashboard'
import Home from  './components/home'
import SignIn from  './components/SignIn'

import { Route } from 'react-router-dom'
import Header from './components/common/header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div style={{marginTop: '8%'}}>
          <Route exact path='/' component={Home}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/sign-in' component={SignIn}/>
        </div>
      </div>
    );
  }
}

export default App;
