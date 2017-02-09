import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import HtmlToReact from 'html-to-react'
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right'
import './Home.css'



export default class Item extends Component {

  constructor(props) {
    super(props)
    this.state = {hover: false}
    this.onHover = this.onHover.bind(this)
    this.onLeave = this.onLeave.bind(this)
  }

  static propTypes = {
    data: PropTypes.object
  }


  onHover() {
    this.setState({hover: true})
  }

  onLeave() {
    this.setState({hover: false})
  }

  render () {

    const { data, max_words } = this.props
    const borderLeft = this.state.hover ? '2px solid crimson' : null

    const htmlToReactParser = new HtmlToReact.Parser(React)

    const bodyComponent = htmlToReactParser.parse(`<div>${data.body.split(' ').slice(0, max_words).join(' ')}</div>`)

    return (
        <div
          className='item'
          style = {{'borderLeft': borderLeft}}
          onMouseEnter={this.onHover}
          onMouseLeave={this.onLeave}
        >
          <div className='article' >
            <div className='title'>
              <span className='text-title'>{data.title}</span>
              <span className='text-date'>{data.date}</span>
            </div>
            <div className='excerpt'>
              {bodyComponent}
            </div>
            <div className='link'>
              <Link to={`/article/${data.permalink}`}>Read more <FaAngleDoubleRight /></Link>
            </div>
          </div>
        </div>
    )
  }
}