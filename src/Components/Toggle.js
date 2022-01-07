import React from 'react'

export const Toggle = ({ theme, toggleTheme }) => {
  return <div onClick={toggleTheme}>{theme === 'light' ? 'light' : 'dark'}</div>
}
