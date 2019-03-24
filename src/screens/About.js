import React, { Component } from 'react'

// 1. Dependencies
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// 2. i18n
import T from 'i18n-react'

// 3. Components
import Layout from '../components/Layout'

// 4. for style
import styled from 'styled-components'

// 5. Static Resources

//-----*-----*-----*-----*-----*-----//

const About = () => (
  <StyledAbout>
    <Layout>
      <div className="menu-title-container">
        <div className="menu-title">ABOUT</div>
        <div className="menu-subtitle">About Prism Gray</div>
      </div>
    </Layout>
  </StyledAbout>
)

// class About extends Component {
//   render() {
//     return (
//       <StyledAbout>
//
//       </StyledAbout>
//     )
//   }
// }

const StyledAbout = styled.div``

export default About
