import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import logo from '../images/SmOgLogoTrans.png'
import BloggerImage from './bloggerImage'

const HeaderWrapper = styled.div`
  
    marginBottom: 1.45rem;
    overflow: hidden;
    position: relative;
    height: 70vh;
    h1 {
      img {
        height: 200px;
      }
    }
`

const HeaderContainer = styled.div `
  
      margin: 0 auto;
      max-width: 960px;
      padding: 1.45rem 1.0875rem;
      position: absolute;
      z-index: 2;
`

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img
            style={{
              margin: 20
            }}

            src={logo} alt='Clark Newell Web Development Logo'
          />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
      <BloggerImage />
  </HeaderWrapper>
)

export default Header
