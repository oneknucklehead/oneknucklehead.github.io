import styled from 'styled-components'
export const ProjectWrapper = styled.div`
  margin: 150px 0;
  width: 100%;
  heihgt: 100%;
`

export const CardWrapper = styled.div`
  margin-top: 150px;
`
export const Card = styled.div`
  min-height: 300px;
  border: 1px solid ${({ theme }) => theme.primaryFont};
  border-radius: 10px;
  //   box-shadow: 25px 25px 50px #1b1c1b, -25px -25px 50px #2d302f;
  padding: 30px;
  overflow-wrap: break-word;
  @media screen and (max-width: 768px) {
    margin: 10px 20px;
  }
`
export const CardContent = styled.div``
export const CardHeader = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.primaryFont};
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 2rem;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  span {
    font-size: 40px;
    margin-left: 8px;
    margin-bottom: 8px;
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.secondaryFont};
  }
  &:hover {
    color: ${({ theme }) => theme.primaryFont};
  }
  &:hover span {
    transition: all 0.2s ease-in-out;
    transform: translate(10px);
  }
  &:visited {
    color: ${({ theme }) => theme.primaryFont};
  }
  @media screen and (max-width: 320px) {
    display: block;
  }
`
export const CardInfo = styled.div`
  font-size: 20px;
  font-weight: 600;
`
export const Link = styled.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
  margin: 0 0 10px 0;
`
export const Stack = styled.div`
  font-style: italic;
  font-size: 14px;
`
export const MoreButton = styled.a`
  background-color: ${({ theme }) => theme.secondaryFont};
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;

  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.secondaryFont};
    transition: all 0.3s ease-in-out;
  }
  &:visited {
    color: #fff;
  }
`
export const RepoLink = styled.a``
