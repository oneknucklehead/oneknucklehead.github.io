import styled, { keyframes } from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'

const scrollTop = keyframes`
    from{
        transform:translateY(5px);
    }
    to{
        transform:translateY(-2px);
    }
`
export const ScrollToTop = styled(LinkScroll)`
  position: fixed;
  width: 40px;
  height: 40px;
  bottom: 10px;
  left: 20px;
  border-radius: 100%;
  background: ${({ theme }) => theme.secondaryFont};
  color: #fff;
  z-index: 99;
  transition: all 0.3s ease-in-out;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translate(0px, -8px);
    color: #fff;
    box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.secondaryFont};
  }
  &:visited {
    color: ${({ theme }) => theme.primaryFont};
  }
`

export const Icon = styled.div`
  animation: ${scrollTop} 0.5s alternate ease infinite;
`
