import React, { useContext, useState } from 'react'
import { ThemeContext } from './ThemeContext'



const Home = () => {
   const { darkMode, toggleTheme } = useContext (ThemeContext)

 

  return (
    <div>
      <h1>{darkMode ? 'DarkMode' : 'Light Mode'}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Home
