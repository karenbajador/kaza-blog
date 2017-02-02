import React, { Component } from 'react'

import './About.css'

export default class About extends Component {

  render () {
    console.log('Rendering About.')
    const page_title = 'About'
    return (
      <div>{page_title}</div>
    )
  }
}