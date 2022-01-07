import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'
import {
  Heading,
  HeadingWrapper,
  SuperHeader,
} from '../TechStacks/TechStackElements'

import {
  ProjectWrapper,
  CardWrapper,
  Card,
  CardContent,
  CardHeader,
  CardInfo,
  Link,
  Stack,
  MoreButton,
} from './ProjectElements'
const Project = () => {
  return (
    <>
      <ProjectWrapper id='projects'>
        <HeadingWrapper>
          <SuperHeader>My Works</SuperHeader>
          <Heading>PROJECTS</Heading>
        </HeadingWrapper>
        <CardWrapper>
          <Row>
            <Col md={4}>
              <Card>
                <CardContent>
                  <CardHeader
                    href='https://smoleapp.herokuapp.com/'
                    target={'_blank'}
                  >
                    Preview
                    <span>⇾</span>
                  </CardHeader>
                  <Link
                    href='https://github.com/oneknucklehead/Smole'
                    target={'_blank'}
                  >
                    <AiFillGithub /> Github
                  </Link>
                  <CardInfo>Smole: An E-commerce marketplace</CardInfo>
                  <hr />
                  <Stack>
                    Tech Stack: React, NodeJS, MongoDB, ExpressJS, Redux
                  </Stack>
                </CardContent>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardContent>
                  <CardHeader
                    href='https://oneknucklehead.github.io/hotAirBalloonGame/'
                    target={'_blank'}
                  >
                    Preview
                    <span>⇾</span>
                  </CardHeader>
                  <Link
                    href='https://github.com/oneknucklehead/hotAirBalloonGame'
                    target={'_blank'}
                  >
                    <AiFillGithub /> Github
                  </Link>
                  <CardInfo>Coins &amp; Balloons!</CardInfo>
                  <hr />
                  <Stack>Tech Stack: Vanilla JavaScript, HTML, CSS</Stack>
                </CardContent>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardContent>
                  <Link
                    href='https://github.com/oneknucklehead/HackOFind'
                    target={'_blank'}
                  >
                    <AiFillGithub /> Github
                  </Link>
                  <CardInfo>HackOFind: Find Your Hackathon partner </CardInfo>
                  <hr />
                  <Stack>Tech Stack: React, NodeJS, MongoDB, ExpressJS</Stack>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </CardWrapper>
        {/* <Row>
          <Col> */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '80px 0',
          }}
        >
          <MoreButton href='https://github.com/oneknucklehead?tab=repositories'>
            More projects here..
          </MoreButton>
        </div>
      </ProjectWrapper>
    </>
  )
}

export default Project
