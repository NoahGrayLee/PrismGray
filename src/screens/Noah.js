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

const Noah = () => (
  <StyledNoah>
    <Layout>
      <div className="menu-title-container">
        <div className="menu-title">NOAH</div>
        <div className="menu-subtitle">Prism Gray - Noah</div>
      </div>
    </Layout>
  </StyledNoah>
)

// class Noah extends Component {
//   render() {
//     return (
//       <StyledNoah>
// 
//       </StyledNoah>
//     )
//   }
// }


const StyledNoah =  styled.div`

`

export default Noah