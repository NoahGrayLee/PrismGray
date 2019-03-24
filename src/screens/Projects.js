import React, { Component } from 'react'

// 1. Dependencies
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// 2. i18n
import T from 'i18n-react'

// 3. Components
import Layout from '../components/Layout'
import { Card } from '../components/common'

// 4. for style
import styled from 'styled-components'

// 5. Static Resources
import test from '../assets/images/test.png'


//-----*-----*-----*-----*-----*-----//

const projectList = [
  {
    projId: "2019-1",
    title: "마녀의 숨결",
    description: "마녀의 숨결은...",
    img: "IMG_witchperfume_1.JPG"
  },
  {
    projId: "2019-2",
    title: "마녀의 처방약",
    description: "마녀의 처방약은...",
    img: "IMG_gemstone_bg.JPG"
  }
]

const Projects = () => (
  // const imgRender = () => {
  //   return (
  //     <div>
  //       <img key={image} src={require(`./`)}
  //     </div>
  //   )
  // }
  // return (
    <StyledProjects>
    <Layout>
      <div className="menu-title-container">
        <div className="menu-title">PROJECTS</div>
        <div className="menu-subtitle">Prism Gray Project List</div>
      </div>
      <div className="F-wrap">
        {projectList.map((item) => {
          return <Card title={item.title} description={item.description} img={item.img} />
        })}
      </div>
    </Layout>
  </StyledProjects>
  // )

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
  & .img: {
    width: 500px;
    height: 500px;
  }
`

export default Projects