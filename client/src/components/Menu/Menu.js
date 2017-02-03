
import React, { Component } from 'react'
import { Link } from 'react-router'

import FaBars from 'react-icons/lib/fa/bars'
import './Menu.css'

export default class Menu extends Component {

  constructor(props) {
    super(props)
    this.handleMenuToggle = this.handleMenuToggle.bind(this)
    this.handleCollapse = this.handleCollapse.bind(this)
    this.state = {collapse: true}
  }



  handleMenuToggle() {
    this.setState({collapse: !this.state.collapse})
  }

  handleCollapse() {
    this.setState({collapse: true})
  }

  render () {
    const responsive = !this.state.collapse ? 'responsive' : null
    const ulClass = `topnav ${responsive}`

    return (
      <ul className={ulClass} id='myTopnav'>
        <li><p className='logo'>Kaza<span className='logo2'>.Blog</span></p></li>
        <li onClick={this.handleCollapse}><Link to='/home'>Home</Link></li>
        <li onClick={this.handleCollapse}><Link to='/posts'>Posts</Link></li>
        {/*<li><Link to='/about'>About</Link></li>*/}

        <li className='icon' onClick={this.handleMenuToggle}><span><FaBars /></span></li>
      </ul>

    )
  }
}

Menu.propTypes = {

}