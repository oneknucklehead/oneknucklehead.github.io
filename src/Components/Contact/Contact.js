import React from 'react'
import {
  Heading,
  HeadingWrapper,
  SuperHeader,
} from '../TechStacks/TechStackElements'
import { SocialContainer, SocialLink } from '../Home/HomeElements'
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineMail,
  AiFillLinkedin,
} from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import { ContactContent, ContactWrapper } from './ContactElements'
const Contact = () => {
  return (
    <>
      <ContactWrapper>
        <HeadingWrapper>
          <SuperHeader>Reach out to me,</SuperHeader>
          <Heading>CONTACT</Heading>
        </HeadingWrapper>
        <ContactContent>
          If you've got any interesting project idea that could benefit from my
          skillset,
          <br /> I would love to talk and work along on your product.
          <br />
          <br /> Feel free to shoot me a text on my socials.
          <br /> ( unless your internet is down, then just throw a pigeon my way
          📧 )
        </ContactContent>
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
          <SocialLink href='https://twitter.com/oneknucklehead_'>
            <FiTwitter />
          </SocialLink>
          <SocialLink href='https://www.linkedin.com/in/oneknucklehead/'>
            <AiFillLinkedin />
          </SocialLink>
        </SocialContainer>
      </ContactWrapper>
    </>
  )
}

export default Contact
