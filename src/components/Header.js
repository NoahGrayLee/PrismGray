import React from 'react'

// 1. Dependencies
import { NavLink } from 'react-router-dom'

// 2. i18n
import T from 'i18n-react'

// 3. Components
// 4. for style
import styled from 'styled-components'

// 5. Static Resources


//-----*-----*-----*-----*-----*-----//

const Header = () => (
  <StyledHeader className="FRC">
    <div className="header-container FRSB">
      <NavLink to="/" className="menu-item" activeClassName="active-menu" exact>PRISM GRAY</NavLink>
      <NavLink to="/Projects" className="menu-item" activeClassName="active-menu" exact>PROJECTS</NavLink>
      <NavLink to="/Products" className="menu-item" activeClassName="active-menu" exact>PRODUCTS</NavLink>
      <NavLink to="/About" className="menu-item" activeClassName="active-menu" exact>ABOUT</NavLink>
      <NavLink to="/Mohm" className="menu-item" activeClassName="active-menu" exact>MOHM</NavLink>
      <NavLink to="/Noah" className="menu-item" activeClassName="active-menu" exact>NOAH</NavLink>
    </div>
  </StyledHeader>
)

const StyledHeader =  styled.div`
  position: fixed;
  width: 100vw;
  height: 56px;
  font-weight: 100;
  font-size: 10px;
  & .header-container {
    width: 1440px;
    padding: 0 5rem;
  }
  & .menu-item {
    opacity: 0.2;
    transition: 0.4s;
    letter-spacing: 8px;
  }
  & .menu-item:hover {
    opacity: 1;
  }
  & .active-menu {
    opacity: 1;
  }
`

export default Header