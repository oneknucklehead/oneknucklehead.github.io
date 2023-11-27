import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 15% 0;
  @media screen and (max-width: 768px) {
    margin:0 0 10% 0;
  }
`;
export const Heading = styled.h1`
  color: ${({ theme }) => theme.secondaryFont};
  font-weight: bold;
`;

export const Container = styled.div`
  position: relative;
  cursor: pointer;
`;
export const Para = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.tertiaryFont};
`;
export const Toggler = styled.div`
  position: absolute;
  right: 12%;
  bottom: 7%;
  font-size: 1.2rem;
  background: #fff;
  padding: 0.4rem;
  border-radius:100%;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  &:hover{
    transform:scale(1.1);
  }
  @media screen and (max-width: 768px) {
    right: 15%;
    bottom: 8%;
  }
`;
export const ContentWrapper = styled.div`
  margin: 25% 0;
  text-align: right;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const SocialContainer = styled.ul`
  list-style: none;
  font-size: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    margin: 40px 0;
    font-size: 30px;
  }
`;
export const SocialLink = styled.a`
  margin: 0 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.primaryFont};
  &:visited {
    color: ${({ theme }) => theme.primaryFont};
  }
  &:hover {
    color: ${({ theme }) => theme.secondaryFont};
    transition: all 0.2s ease-in-out;
  }
`;
