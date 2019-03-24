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

const CategoryOfMember = props => (
  <StyledCategoryOfMember>
    <div className="image-container FRC">Image Box</div>
    <div className="category-title FRC txt-h2">{props.title}</div>
  </StyledCategoryOfMember>
)

// class CategoryOfMember extends Component {
//   render() {
//     return (
//       <StyledCategoryOfMember>
//
//       </StyledCategoryOfMember>
//     )
//   }
// }

const StyledCategoryOfMember = styled.div`
  min-width: 260px;
  min-height: 300px;
  border: 1px solid gray;
  padding: 8px;
  margin: 8px;
  & .image-container {
    border: 1px solid gray;
    width: 100%;
    min-height: 300px;
  }
  & .category-title {
    width: 100%;
    height: 40px;
  }
`

export default CategoryOfMember
