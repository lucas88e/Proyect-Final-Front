import React from 'react'
import Products from './Products'
import './Products.css'
import { useThemeContext } from '../context/ThemeContext'

function Home() {
  const {theme} = useThemeContext()
  return (
    <div className={`${theme}`}>
      <h1>Bazar Subastas Online</h1>
      <h4>Somos una gran comunidad nos encargamos de subastar productos asequibles para cualquier persona, y de primera calidad.
        No lo dudes elige tu producto y realiza una puja si tienes suerte será tuyo
      </h4>
      <img width ="250px" src="/logo2.png"></img>
    
    <Products/>
    </div>
  )
}

export default Home