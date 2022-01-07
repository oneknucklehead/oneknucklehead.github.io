import React from 'react'
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarLinks,
  SideBtnWrap,
  SideBarRoute,
  SideBarMenu,
} from './SideBarElements'

const SideBar = ({ toggle, isOpen, theme }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle} teme={theme}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLinks to='about' onClick={toggle} offset={-300}>
            About
          </SideBarLinks>
          <SideBarLinks to='tech' onClick={toggle} offset={-150}>
            Tech Stack
          </SideBarLinks>
          <SideBarLinks to='projects' onClick={toggle} offset={-200}>
            Projects
          </SideBarLinks>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute
            href='https://drive.google.com/file/d/17F9OEIATYsTXBr9KGKvorV7T2-UIEs8b/view?usp=sharing'
            target='_blank'
          >
            Resume
          </SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar
