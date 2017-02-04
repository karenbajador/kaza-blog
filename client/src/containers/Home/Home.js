import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Item from './Item'
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right'
import './Home.css'


class Home extends Component {
  render () {
    return (
      <div>
        <div className='header' />
        <div className='container home'>
          <div className='side' />
          <div className='body column'>
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


// const Home = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home)

export default Home

