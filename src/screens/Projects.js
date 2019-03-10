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

const Projects = () => (
  <StyledProjects>
    <Layout>
      <div className="menu-title-container">
        <div className="menu-title">PROJECTS</div>
        <div className="menu-subtitle">Prism Gray Project List</div>
      </div>

      <div></div>
    </Layout>
  </StyledProjects>
)

// class Projects extends Component {
//   render() {
//     return (
//       <StyledProjects>
// 
//       </StyledProjects>
//     )
//   }
// }


const StyledProjects =  styled.div`

`

export default Projects