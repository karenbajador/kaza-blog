import React, { Component } from 'react'
// import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import './Article.css'
import HtmlToReact from 'html-to-react'




class Article extends Component {

  // constructor(props) {
  //   super(props)
  //
  // }


  static propTypes = {
    // posts: PropTypes.array,
  }


  componentDidMount() {
    this.props.loadArticle(this.props.params.title)
  }

  componentWillMount() {
    // this.props.loadPosts()
  }

  render () {

    const { article, error } = this.props


    const htmlToReactParser = new HtmlToReact.Parser(React)

    const reactComponent = article ? htmlToReactParser.parse(`<div>${article.body}</div>`) : null

    const errorDisplay = (
      <div>
        <h1>Whoooops!!!</h1>
        <p>{error}</p>
      </div>
    )


    return (


      <div className='container'>
        <div className='article-side' />
        <div className='article-bodyContainer'>



          {
            (article)
              ? (
                  <div>
                    <div className='article-date article-text-date'>{article.date}</div>
                    <h1>{article.title}</h1>
                    <div className='article-excerpt'>
                      {reactComponent}
                    </div>
                    <div className='tags'>Tags:

                      {
                        article.tags.map(tag => {
                          return <span key={tag} className='tag'>{tag}</span>
                        })
                      }
                    {/*<Link to='/posts/tags/tag'><span className='tag'>Tag2</span></Link>*/}
                    </div>
                  </div>
                )
              : errorDisplay
          }

        </div>
        <div className='article-side' />
      </div>


    )
  }
}


const mapStateToProps = (state) => {
  return {
    article : state.article.data,
    error: state.article.error
  }
}

Article = connect(
  mapStateToProps,
  {...actions}
)(Article)

export default Article