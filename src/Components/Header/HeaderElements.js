import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
export const Nav = styled.nav`
  padding:0 15px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 10px;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 1000px;
  background: ${({ theme }) => theme.type === 'light' ? "#fff" : "#121212"};
  border: 2px solid ${({ theme }) => theme.type === 'light' ? "rgba(34, 34, 34, 0.1)" : "rgb(1,191,113,0.8)"};
  border-radius:100px;

  border-radius: 50px;
  margin: 20px 0;

  --tw-ring-shadow: 
  ${({ theme }) => theme.type === 'light' ? "0 0 #0000" : "0 0 #01bf71"}
  ;
  --tw-ring-offset-shadow: ${({ theme }) => theme.type === 'light' ? "0 0 #0000" : "0 0 #01bf71"};
  --tw-shadow:
  ${({ theme }) => theme.type === 'light' ? " 0 2.65546px 95px rgba(0, 0, 0, 0.1)" : " 0 2.65546px 95px rgb(1,191,113,0.8)"}
  ;
  box-shadow:  ${({ theme }) => theme.type === 'light' ? "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);" : "rgba(1, 191, 113, 0.2) 0px 7px 29px 0px;"};
  max-width: 100%;
  padding: 0 12px;
  margin: 0 auto;
`;
export const NavLogo = styled.div`
color: ${({ theme }) => theme.type === 'light' ? "#121212" : "#fff"};

  justify-self: flex-start;
  padding-left:5px;
  cursor: pointer;
  font-size: 1.4rem;
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
`;
export const MobileIcon = styled.div`
  display: none;
  color:${({ theme }) => theme.type === "light" ? "#000" : "#fff"};
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 7px;
    right: 8px;
    transform: translate(-100%, 40%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkScroll)`
  color:${({ theme }) => theme.type === 'light' ? "#121212" : "#fff"};
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
`;
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled.a`
  border-radius: 150px;
  background: ${({ theme }) => theme.secondaryFont};
  white-space: nowrap;
  padding: 6px 18px;
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
`;
