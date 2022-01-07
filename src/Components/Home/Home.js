import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import image from '../../Images/profile1.jpg'
import {
  Container,
  Wrapper,
  ContentWrapper,
  Heading,
  Para,
  SocialContainer,
  SocialLink,
} from './HomeElements'
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineMail,
  AiFillLinkedin,
} from 'react-icons/ai'
import { FaDev } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import Typewriter from 'typewriter-effect'
const Home = ({ theme, toggleTheme }) => {
  return (
    <Wrapper id='about'>
      <Row>
        <Col md={6}>
          <ContentWrapper>
            <Heading>
              <Typewriter
                options={{
                  strings: ['Hey There!', 'Nice to meet ya!'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Heading>

            <h1 className='fw-bold fs-1'>I'm Zoheb Ahmed,</h1>
            <Para>
              A Junior from 🇮🇳 , an open source enthusiast and a web developer
              who enjoys learning new stuffs and showcasing the acquired skills
              through cool projects. I have a keen eye for web application
              design and engineering. When I'm not dillydallying with code, I'm
              mostly watching some Anime (だってばよ!).
            </Para>
          </ContentWrapper>
        </Col>
        <Col md={6} theme={theme}>
          <Container theme={theme}>
            <Image
              title='Click Me'
              src={image}
              onClick={toggleTheme}
              roundedCircle
              fluid
              thumbnail
            />
          </Container>
        </Col>
      </Row>
      <Row>
        <SocialContainer>
          <SocialLink href='https://www.instagram.com/oneknucklehead/'>
            <AiOutlineInstagram />
          </SocialLink>
          <SocialLink href='https://github.com/oneknucklehead'>
            <AiFillGithub />
          </SocialLink>
          <SocialLink href='mailto:zohebcool1542@gmail.com'>
            <AiOutlineMail />
          </SocialLink>
          <SocialLink href='https://dev.to/oneknucklehead'>
            <FaDev />
          </SocialLink>
          <SocialLink href='https://twitter.com/oneknucklehead_'>
            <FiTwitter />
          </SocialLink>
          <SocialLink href='https://www.linkedin.com/in/oneknucklehead/'>
            <AiFillLinkedin />
          </SocialLink>
        </SocialContainer>
      </Row>
    </Wrapper>
  )
}

export default Home
