import React, { Component } from 'react'
import { Link } from 'react-router'
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right'

import './Posts.css'

export default class Post extends Component {

  render () {

    return (

          <div className='post-item'>
            <span className='bullet'><FaAngleDoubleRight color='#bf6868'/></span>
            <div className='link-box'>
              <Link to='/article/ivan-is-so-pogi'>
                <span className='text-title'>This is the title of the blog and it is very very long.</span>
              </Link>
              <span className='text-date'>14.Aug.2017</span>
            </div>
          </div>

    )
  }
}