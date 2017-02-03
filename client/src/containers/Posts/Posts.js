import React, { Component } from 'react'
import { Link } from 'react-router'
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right'

import './Posts.css'

export default class Posts extends Component {

  render () {

    return (

      <div className='posts-container'>
        <div className='side' />
        <div className='bodyContainer'>
          <h1>Posts Archive</h1>
          <div className='posts-article-title'>
            <FaAngleDoubleRight color='#bf6868'/>
            <Link to='/article/ivan-is-so-pogi'>
            <span className='posts-text-title'>This is the title of the blog and it is very very long.</span>
            </Link>
            <span className='text-date'>Aug 14, 2017</span>
          </div>
          <div className='posts-article-title'>
            <FaAngleDoubleRight color='#bf6868'/>
            <Link to='/article/ivan-is-so-pogi'>
            <span className='posts-text-title'>This is the title of the blog</span>
             </Link>
            <span className='text-date'>Aug 14, 2017</span>
          </div>
          <div className='posts-article-title'>
            <FaAngleDoubleRight color='#bf6868'/>
            <Link to='/article/ivan-is-so-pogi'>
              <span className='posts-text-title'>This is the title of the blog</span>
            </Link>
              <span className='text-date'>Aug 14, 2017</span>

          </div>
          <div className='posts-article-title'>
            <FaAngleDoubleRight color='#bf6868'/>
            <Link to='/article/ivan-is-so-pogi-talaga'>
              <span className='posts-text-title'>This is the title of the blog</span>
            </Link>
            <span className='text-date'>Aug 14, 2017</span>

          </div>
        </div>
        <div className='side' />





      </div>

    )
  }
}