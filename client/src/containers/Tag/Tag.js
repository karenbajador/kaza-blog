import React, { Component } from 'react'
import { Link } from 'react-router'
import Item from '../Home/Item'
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right'
import './Tag.css'


export default class Tag extends Component {
  render () {
    return (
      <div>

        <div className='container home'>
          <div className='side' />
          <div className='body column'>

            <div className='tags'>Tags   :
              <span className='tag'>Tag1</span>
            </div>

            <Item />
            <Item />
            <Item />
          </div>
          <div className='side' />
        </div>
        <div className='checkMore'>
          <Link to='/posts'>Check more posts <FaAngleDoubleRight/></Link>
        </div>
      </div>
    )
  }
}