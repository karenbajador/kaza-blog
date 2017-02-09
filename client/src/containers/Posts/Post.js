import React, { Component } from 'react'
import { Link } from 'react-router'
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right'

import './Posts.css'

export default class Post extends Component {

  render () {

    const { data } = this.props

    return (

          <div className='post-item'>
            <span className='bullet'><FaAngleDoubleRight color='#bf6868'/></span>
            <div className='link-box'>
              <Link to={`/article/${data.permalink}`}>
                <span className='text-title'>{data.title}</span>
              </Link>
              <span className='text-date'>{data.date}</span>
            </div>
          </div>

    )
  }
}