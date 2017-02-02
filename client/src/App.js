import React, { Component } from 'react'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import logo from './logo.svg'
import headerLogo from './static/images/header.jpg'
import { Menu, Footer } from './components'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className='App'>

        <Menu />

        <div className='App-body'>
          {this.props.children}
        </div>

        <Footer />

      </div>
    )
  }
}

export default App
