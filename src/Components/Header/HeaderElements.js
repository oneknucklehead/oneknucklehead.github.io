import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
export const Nav = styled.nav`
  background: #121212;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`
export const NavLogo = styled.div`
  color: #fff;

  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  span {
    color: #fff;
  }
  &:hover span {
    color: #fff;
  }
  &:hover {
    color: ${({ theme }) => theme.secondaryFont};
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
  }
`
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`
export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-top: 10px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.secondaryFont};
  }
`
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: ${({ theme }) => theme.secondaryFont};
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.3s ease-in-out;
    background: ${({ theme }) => theme.secondaryFont};
    color: #fff;
    box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.secondaryFont};
  }
`
