import React, { Component } from 'react'
import { Link } from 'react-router'
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right'
import './Home.css'

export default class Item extends Component {

  constructor(props) {
    super(props)
    this.state = {hover: false}
    this.onHover = this.onHover.bind(this)
    this.onLeave = this.onLeave.bind(this)
  }

  onHover() {
    console.log('Hovered!')
    this.setState({hover: true})
  }

  onLeave() {
    console.log('Left!')
    this.setState({hover: false})
  }

  render () {

    const borderLeft = this.state.hover ? '2px solid crimson' : null

    return (
        <div
          className='item'
          style = {{'border-left': borderLeft}}
          onMouseEnter={this.onHover}
          onMouseLeave={this.onLeave}
        >
          <div className='article' >
            <div className='title'>
              <span className='text-title'>This is the title of the blog and it is very very long</span>
              <span className='text-date'>14.Aug.2017</span>
            </div>
            <div className='excerpt'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className='link' >
              <Link to='/article/ivan-is-so-pogi'>Read more <FaAngleDoubleRight /></Link>
            </div>
          </div>
        </div>
    )
  }
}