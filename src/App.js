import { PageContent } from './Components/PageContent'
import { useDarkMode } from './styles/useDarkMode'
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled, { ThemeProvider } from 'styled-components'
import Header from './Components/Header/Header'
import { useState } from 'react'
import SideBar from './Components/SideBar/SideBar'

function App() {
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const Container = styled.div`
    width: 1000px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  `

  return (
    <ThemeProvider theme={themeMode}>
      <SideBar isOpen={isOpen} toggle={toggle} theme={theme} />
      <Header theme={theme} toggleTheme={toggleTheme} toggle={toggle} />
      <Container>
        <GlobalStyles />
        <PageContent theme={theme} toggleTheme={toggleTheme} />
      </Container>
    </ThemeProvider>
  )
}

export default App
