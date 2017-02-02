import React, { Component } from 'react'
import { Link } from 'react-router'
import Item from './Item'
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right'
import './Home.css'


export default class Home extends Component {
  render () {
    return (
      <div>
        <div className='header' />
        <div className='container'>
          <div className='home-side' />
          <div className='home-bodyContainer'>
            <Item />
            <Item />
            <Item />
          </div>
          <div className='home-side' />
        </div>
        <div className='checkMore'>
          <Link to='/posts'>Check more posts <FaAngleDoubleRight/></Link>
        </div>
      </div>
    )
  }
}