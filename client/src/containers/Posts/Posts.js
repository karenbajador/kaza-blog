import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as postActions from '../../redux/actions'
import Post from './Post'

import './Posts.css'

class Posts extends Component {

  // constructor(props) {
  //   super(props)
  // }

  static propTypes = {
    posts: PropTypes.array,
  }

  componentDidMount() {
    this.props.loadPosts()
  }

  render () {

    const { posts, error } = this.props

    return (

      <div className='posts-container'>
        <div className='side' />
        <div className='bodyContainer'>
          <h1>Posts Archive</h1>

            { (posts && posts.length > 0) && posts.map(post => {
                    return <Post key={post._id} data={post} />
                  }) }

          <p>{ error }</p>

        </div>
        <div className='side' />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    posts : state.posts.posts,
    error: state.posts.error
  }
}

Posts = connect(
  mapStateToProps,
  {...postActions}
)(Posts)

export default Posts