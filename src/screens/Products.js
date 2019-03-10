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

const Products = () => (
  <StyledProducts>
    <Layout>
      <div className="menu-title-container">
        <div className="menu-title">PRODUCTS</div>
        <div className="menu-subtitle">Prism Gray Product List</div>
      </div>
    </Layout>
  </StyledProducts>
)

// class Products extends Component {
//   render() {
//     return (
//       <StyledProducts>
// 
//       </StyledProducts>
//     )
//   }
// }


const StyledProducts =  styled.div`

`

export default Products