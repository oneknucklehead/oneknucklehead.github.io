import React, { useEffect, useState } from 'react';
// import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa';
import { FiMoon, FiSun } from 'react-icons/fi';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './HeaderElements';

const Header = ({ theme, toggleTheme, toggle }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setScrollPosition(window.scrollY);
    console.log(scrollPosition);
  }, [scrollPosition]);
  return (
    <>

      <Nav theme={theme}>
        <NavbarContainer>
          <NavLogo onClick={toggleTheme}>
            <span>{theme === 'light' ? <span style={{ color: "#121212" }}> <FiMoon /></span> : <span style={{ color: "#fff" }}> <FiSun /></span>}</span>&nbsp;
            Zoheb.
          </NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about' smooth={true} duration={100} offset={-300}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='tech' smooth={true} duration={100} offset={-150}>
                Tech Stack
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to='projects'
                smooth={true}
                duration={100}
                offset={-210}
              >
                Projects
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              href='https://drive.google.com/file/d/1IDkH8auXVgEiveZegSBLhcobGX1Rm1BM/view?usp=sharing'
              target='_blank'
            >
              Resume
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>

    </>
  );
};

export default Header;
