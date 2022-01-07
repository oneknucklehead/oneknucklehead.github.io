import React from 'react'
import BMCButton from './BMCButton/BMCButton'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Project from './Projects/Project'
import TechStack from './TechStacks/TechStack'
import ToTopButton from './ToTopButton/ToTopButton'

export const PageContent = ({ theme, toggleTheme }) => {
  return (
    <>
      <Home theme={theme} toggleTheme={toggleTheme} />
      <TechStack theme={theme} />
      <Project theme={theme} />
      <Contact theme={theme} />
      <BMCButton theme={theme} />
      <ToTopButton theme={theme} />
      <Footer />
    </>
  )
}
