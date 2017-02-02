import React, { Component } from 'react'
import { Link } from 'react-router'
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right'
import './Home.css'


export default class Item extends Component {

  render () {


    return (

      <div className='item' style = {{'border-bottom':'2px solid crimson'}}>
        <div className='article-box'>
          <div className='article-title'>
            <span className='text-title'>This is the title of the blog and it is very very long</span>
            <span className='text-date'>Aug 14, 2017</span>
          </div>
          <div className='article-excerpt'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className='link-box'>
          <Link to='/article/ivan-is-so-pogi'>Read more <FaAngleDoubleRight /></Link>
        </div>
      </div>


    )
  }
}