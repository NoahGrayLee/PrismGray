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
import PrayLogo from '../assets/public_asset/PrayLogo'

//-----*-----*-----*-----*-----*-----//

const LinkDot = props => {
  return (
    <Link to={props.moveTo} className="FCC menu-item">
      <div className="link-dot" />
      <p className="menu-title">{props.linkTitle}</p>
    </Link>
  )
}

const Home = () => (
  <StyledHome className="FRC">
    <div className="FCC">
      <PrayLogo w="130px" h="75px" className="logo" />
      <p className="title">PRISM GRAY</p>
      <div className="horizontal-line" />
      <div className="FRSB menu-list">
        <LinkDot linkTitle="PROJECT" moveTo="/Projects" />
        <LinkDot linkTitle="PRODUCT" moveTo="/Products" />
        <LinkDot linkTitle="ABOUT" moveTo="/About" />
        <LinkDot linkTitle="MOHM" moveTo="/Mohm" />
        <LinkDot linkTitle="NOAH" moveTo="/Noah" />
      </div>
    </div>
  </StyledHome>
)

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  font-weight: 100;
  color: #1a1a1a;
  & .logo {
    margin-left: 32px;
  }
  & .title {
    font-size: 14px;
    letter-spacing: 12px;
    padding-top: 20px;
  }
  & .horizontal-line {
    height: 0.4pt;
    width: calc(100% - 26rem);
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    z-index: -1;
    margin-top: 44px;
  }
  & .menu-list {
    width: 100vw;
    overflow: hidden;
    padding: 5rem;

    & .menu-item {
      width: 100%;
      & .link-dot {
        width: 8px;
        height: 8px;
        background-color: #fff;
        border: 1px solid gray;
        border-radius: 50%;
        margin-bottom: 8px;
        transition: 0.4s;
      }
      & .menu-title {
        font-size: 12px;
        letter-spacing: 10px;
        text-align: center;
        width: calc(100% - 9px);
      }
    }
    & .menu-item:hover {
      & .link-dot {
        background-color: #1a1a1a;
      }
    }
  }
`

export default Home
