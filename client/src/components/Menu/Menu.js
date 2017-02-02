
import React, { Component } from 'react'
import { Link } from 'react-router'
import './Menu.css'

export default class Menu extends Component {

  render () {
    return (
      <ul className='topnav' id='myTopnav'>
        <li><p className='logo'>Kaza<span className='logo2'>.Blog</span></p></li>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
        {/*<li><Link to='/about'>About</Link></li>*/}
      </ul>

    )
  }
}

