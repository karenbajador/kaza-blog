import React, { Component } from 'react'
import { Link } from 'react-router'

import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import FaGithub from 'react-icons/lib/fa/github'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaFacebook from 'react-icons/lib/fa/facebook'

import './Footer.css'

export default class Footer extends Component {

  render () {
    return (
      <footer className='footer-distributed'>

        <div className='footer-left'>

          <h3>Kaza<span>.Blog</span></h3>

          <p className='footer-links'>
            <Link to='/home'>Home</Link>
             <span className='dot'>·</span>
            <Link to='/posts'>Posts</Link>


          </p>

          <p className='footer-company-name'>&copy;2017 Kaza.blog, Inc. All rights reserved.</p>
        </div>


        <div className='footer-center'>

          <p className='footer-company-about'>
            <span>About Kaza.blog</span>
            An non-fancy but functional blog site maintained by Karen Bajador, a Software Engineer who is currently living in Melbourne, Australia and working at Bueno Systems. The blog is attempted to be built using modern web technologies for learning purposes and to benefit from all the perks that comes with having a blog! Source code of this project is shared in Github.
          </p>

          <div className='footer-icons'>

            <a target='_blank'  href='https://www.facebook.com/arnjak'><FaFacebook size={35}/></a>
            <a target='_blank'  href='https://twitter.com/kmb_v'><FaTwitter size={35}/></a>
            <a target='_blank'  href='https://www.linkedin.com/in/karen-mae-bajador-640a6636'><FaLinkedinSquare size={35}/></a>
            <a target='_blank' href='https://github.com/karenbajador/kaza-blog'><FaGithub size={35}/></a>

          </div>

        </div>

        {/*<div className='footer-right'>*/}

          {/*<p className='footer-company-about'>*/}
            {/*<span>Connect</span>*/}
          {/*</p>*/}

          {/*<div className='footer-icons'>*/}

            {/*<a href='#'><FaFacebook size={35}/></a>*/}
            {/*<a href='#'><FaTwitter size={35}/></a>*/}
            {/*<a href='#'><FaLinkedinSquare size={35}/></a>*/}
            {/*<a href='#'><FaGithub size={35}/></a>*/}

          {/*</div>*/}

        {/*</div>*/}



      </footer>
    )
  }
}





