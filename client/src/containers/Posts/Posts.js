import React, { Component } from 'react'
import Post from './Post'

import './Posts.css'

export default class Posts extends Component {

  render () {

    return (

      <div className='posts-container'>
        <div className='side' />
        <div className='bodyContainer'>
          <h1>Posts Archive</h1>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
        <div className='side' />
      </div>
    )
  }
}