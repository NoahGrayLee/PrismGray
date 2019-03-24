import React, { Fragment } from 'react'

// 1. Dependencies
import { Link } from 'react-router-dom'

// 2. i18n
// 3. Components
import Header from '../components/Header'
// 4. for style
import styled from 'styled-components'
import '../Theme.scss'

// 5. Static Resources


//-----*-----*-----*-----*-----*-----//


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

  }
  & .contents-container {
    padding-top: 56px;
  }
`

export default Layout