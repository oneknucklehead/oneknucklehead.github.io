import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 15% 0;
  @media screen and (max-width: 768px) {
  }
`
export const Heading = styled.h1`
  color: ${({ theme }) => theme.secondaryFont};
  font-weight: bold;
`

export const Container = styled.div`
  position: relative;
  cursor: pointer;
`
export const Para = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.tertiaryFont};
`
export const ContentWrapper = styled.div`
  margin: 25% 0;
  text-align: right;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
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
`
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
`
