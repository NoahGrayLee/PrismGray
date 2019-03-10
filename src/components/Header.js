import React from 'react'

// 1. Dependencies
import { Link } from 'react-router-dom'

// 2. i18n
import T from 'i18n-react'

// 3. Components
// 4. for style
import styled from 'styled-components'

// 5. Static Resources


//-----*-----*-----*-----*-----*-----//

const Header = () => (
  <StyledHeader>
    <div className="header-container FRL">
      <Link to="/">Prism Gray</Link>
    </div>
  </StyledHeader>
)

const StyledHeader =  styled.div`
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: #f0f0f0;
  & .header-container {
    max-width: 1440px;
  }
`

export default Header