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

const Card = item => {
  console.log('props', item)
  const { props } = item
  return (
    <StyledCard>
      <Link to={`Projects/${props.projId}`}>
        <div>
          <img
            className="styledImage"
            src={require(`../../assets/product-images/${props.img}`)}
            alt={props.img}
          />
        </div>
        {props.title}
        {props.description}
      </Link>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  width: 300px;
  height: 500px;
  border: 1px solid black;
  margin: 15px;
  & .styledImage {
    width: 100px;
    height: 100px;
    background-color: gray;
  }
`

export default Card
