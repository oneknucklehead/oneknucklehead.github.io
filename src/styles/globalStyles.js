import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.primaryFont};
    font-family: 'Poppins', sans-serif;
  }
  
  
`

export const lightTheme = {
  type: 'light',
  body: '#fff',
  primaryFont: '#121212',
  secondaryFont: '#FF0077',
  tertiaryFont: '#212529',
}

export const darkTheme = {
  type: 'dark',
  body: '#121212',
  primaryFont: '#fff',
  secondaryFont: '#01BF71',
  tertiaryFont: '#d1d1d1',
}
