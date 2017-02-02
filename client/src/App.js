import React, { Component } from 'react'
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
