import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as postActions from '../../redux/actions'
import Item from './Item'
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right'
import './Home.css'


class Home extends Component {

  // constructor(props) {
  //   super(props)
  // }

  static propTypes = {
    posts: PropTypes.array,
  }

  componentDidMount() {
    this.props.loadPosts()
  }

  componentWillReceiveProps(nextProps) {
  }

  render () {

    const { posts, error } = this.props

    const MAX_ARTICLES = 3
    const MAX_EXCERPT_WORDS = 80

    const posts_home = posts
                        ? (posts.length >= MAX_ARTICLES) ? posts.slice(0,MAX_ARTICLES) : posts
                        : []

    const CheckMore = (
      <div className='checkMore'>
        <Link to='/posts'>Check more posts <FaAngleDoubleRight/></Link>
      </div>
    )

    return (

      <div>
        <div className='header' />
        <div className='container home'>
          <div className='side' />
          <div className='body column'>

            { posts_home.length > 0 && posts_home.map(post => {
                    return <Item
                             key={post._id}
                             data={post}
                             max_words={MAX_EXCERPT_WORDS}
                           />
                  }) }

            { posts_home.length > 0 && CheckMore }

            <p>{ error }</p>

          </div>
          <div className='side' />
        </div>

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

Home = connect(
  mapStateToProps,
  {...postActions}
)(Home)

export default Home

