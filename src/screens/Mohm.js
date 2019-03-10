import React, { Component } from 'react'

// 1. Dependencies
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// 2. i18n
import T from 'i18n-react'

// 3. Components
import Layout from '../components/Layout'
import CategoryOfMember from '../components/CategoryOfMember'

// 4. for style
import styled from 'styled-components'

// 5. Static Resources


//-----*-----*-----*-----*-----*-----//

const Mohm = () => (
  <StyledMohm>
    <Layout>
      <div className="menu-title-container">
        <div className="menu-title">MOHM</div>
        <div className="menu-subtitle">Prism Gray - Mohm</div>
      </div>
      <div className="category-of-member-container">
        <CategoryOfMember title="Drawing" />
        <CategoryOfMember title="Wand" />
        <CategoryOfMember title="Jewelry" />
      </div>
    </Layout>
  </StyledMohm>
)

// class Mohm extends Component {
//   render() {
//     return (
//       <StyledMohm>
// 
//       </StyledMohm>
//     )
//   }
// }


const StyledMohm =  styled.div`

`

export default Mohm