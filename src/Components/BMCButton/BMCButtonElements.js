import styled from 'styled-components'

export const Button = styled.a`
  position: fixed;
  bottom: 10px;
  right: 20px;
  background-color: ${({ theme }) => theme.secondaryFont};
  border-radius: 100%;
  padding: 15px 15px;
`

export const Image = styled.img`
  height: 35px;
  width: 35px;
`
