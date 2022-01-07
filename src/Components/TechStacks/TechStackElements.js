import styled from 'styled-components'

export const TechWrapper = styled.div`
  width: 100%;
  height: 120%;
`

export const HeadingWrapper = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-bottom: 200px;
  }
`
export const SuperHeader = styled.h1`
  position: absolute;
  top: 10px;
  font-size: 50px;

  color: ${({ theme }) => theme.primaryFont};
`

export const Heading = styled.h1`
  position: absolute;
  font-size: 100px;
  font-weight: 700;
  color: ${({ theme }) => theme.tertiaryFont};
  opacity: 0.09;
  @media screen and (max-width: 500px) {
    display: none;
  }
`
export const TechStacks = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 150px;
`
export const TechBox = styled.div`
  height: 70px;
  border-radius: 3px;
  display: flex;
  font-size: 20px;
  align-items: center;
  margin: 10px;
  padding: 15px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${({ theme }) =>
      theme.type === 'light' ? '#e6e6e6' : '#1a1a1a'};
  }
`
export const TechName = styled.p`
  margin: 0 20px;
`
