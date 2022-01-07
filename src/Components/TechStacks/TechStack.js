import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import {
  Heading,
  HeadingWrapper,
  SuperHeader,
  TechStacks,
  TechWrapper,
  TechBox,
  TechName,
} from './TechStackElements'
import javascript from '../../Images/logos/javascript.png'
import bootstrap from '../../Images/logos/bootstrap.svg'
import chai from '../../Images/logos/chai.png'
import css from '../../Images/logos/css.png'
import docker from '../../Images/logos/docker.png'
import express from '../../Images/logos/express.png'
import Git from '../../Images/logos/Git.png'
import html from '../../Images/logos/html.png'
import java from '../../Images/logos/java.png'
import jquery from '../../Images/logos/jquery.png'
import mocha from '../../Images/logos/mocha.png'
import mongodb from '../../Images/logos/mongodb.png'
import nodeJS from '../../Images/logos/nodeJS.png'
import python from '../../Images/logos/python.png'
import react from '../../Images/logos/react.png'
import redux from '../../Images/logos/redux.png'
import sass from '../../Images/logos/sass.png'
import solidity from '../../Images/logos/solidity.png'

const TechStack = ({ theme }) => {
  return (
    <>
      <TechWrapper id='tech'>
        <HeadingWrapper>
          <SuperHeader>Tech I'm Familiar With</SuperHeader>
          <Heading>SKILLS</Heading>
        </HeadingWrapper>
        <TechStacks>
          <Row>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={javascript} style={{ width: '25px' }} />
                <TechName> JavaScript</TechName>
              </TechBox>
            </Col>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={bootstrap} style={{ width: '25px' }} />
                <TechName> Bootstrap</TechName>
              </TechBox>
            </Col>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={chai} style={{ width: '25px' }} />
                <TechName> Chai</TechName>
              </TechBox>
            </Col>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={css} style={{ width: '25px' }} />
                <TechName> CSS</TechName>
              </TechBox>
            </Col>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={docker} style={{ width: '25px' }} />
                <TechName> Docker</TechName>
              </TechBox>
            </Col>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={express} style={{ width: '25px' }} />
                <TechName> Express</TechName>
              </TechBox>
            </Col>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={Git} style={{ width: '25px' }} />
                <TechName> Git</TechName>
              </TechBox>
            </Col>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={html} style={{ width: '25px' }} />
                <TechName> HTML</TechName>
              </TechBox>
            </Col>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={java} style={{ width: '30px' }} />
                <TechName> Java</TechName>
              </TechBox>
            </Col>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={jquery} style={{ width: '25px' }} />
                <TechName> JQuery</TechName>
              </TechBox>
            </Col>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={mocha} style={{ width: '25px' }} />
                <TechName> Mocha</TechName>
              </TechBox>
            </Col>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={mongodb} style={{ width: '25px' }} />
                <TechName> MongoDB</TechName>
              </TechBox>
            </Col>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={nodeJS} style={{ width: '25px' }} />
                <TechName> NodeJS</TechName>
              </TechBox>
            </Col>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={python} style={{ width: '25px' }} />
                <TechName> Python</TechName>
              </TechBox>
            </Col>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={react} style={{ width: '25px' }} />
                <TechName> React</TechName>
              </TechBox>
            </Col>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={redux} style={{ width: '25px' }} />
                <TechName> Redux</TechName>
              </TechBox>
            </Col>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={sass} style={{ width: '30px' }} />
                <TechName> Sass</TechName>
              </TechBox>
            </Col>
            <Col sm={6} md={4}>
              <TechBox>
                <Image src={solidity} style={{ width: '25px' }} />
                <TechName> Solidity</TechName>
              </TechBox>
            </Col>
          </Row>
        </TechStacks>
      </TechWrapper>
    </>
  )
}

export default TechStack
