import React, { Component } from 'react'

// 1. Dependencies
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// 2. i18n
import T from 'i18n-react'

// 3. Components
// 4. for style
import styled from 'styled-components'

// 5. Static Resources


//-----*-----*-----*-----*-----*-----//

const Home = () => (
  <StyledHome>
    <div className="FRSB menu-list">
      <Link to="/Projects">Projects</Link>
      <Link to="/Products">Products</Link>
      <Link to="/About">About</Link>
      <Link to="/Mohm">Mohm</Link>
      <Link to="/Noah">Noah</Link>
    </div>
  </StyledHome>
)

// class Home extends Component {
//   render() {
//     return (
//       <StyledHome>
// 
//       </StyledHome>
//     )
//   }
// }


const StyledHome =  styled.div`
  & .menu-list {
    width: 100%;
    padding: 5rem;
  }
`

export default Home