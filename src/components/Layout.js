import React, { Fragment } from 'react'

// 1. Dependencies
import { Link } from 'react-router-dom'

// 2. i18n
// 3. Components
// 4. for style
import styled from 'styled-components'
import '../Theme.scss'

// 5. Static Resources


//-----*-----*-----*-----*-----*-----//

const Header = () => (
  <div className="header FRSB">
    <Link to="/">Prism Gray</Link>
  </div>
)


const Layout = ({ children }) => (
  <StyledLayout className="FCT">
    <Fragment>
      <Header />
      <div className="contents-container">
        {children}
      </div>
    </Fragment>
  </StyledLayout>
)


const StyledLayout =  styled.div`
  & .header {
    position: fixed;
    width: 100vw;
    height: 40px;
    background-color: #f0f0f0;
  }
  & .contents-container {
    padding-top: 40px;
  }
`

export default Layout