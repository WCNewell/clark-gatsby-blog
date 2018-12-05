import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import logo from '../images/SmOgLogoTrans.png'

const HeaderWrapper = styled.div`
  
    background: rebeccapurple;
    marginBottom: 1.45rem;
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
          <img src={logo} alt='Clark Newell Web Development Logo'/>
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
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
