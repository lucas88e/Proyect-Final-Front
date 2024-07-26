import React from 'react'
import Products from './Products'
import './Products.css'

function Home() {
  return (<>
    <div className='top'>
      <h1>Bazar Subastas Online</h1>
      <h4>Somos una gran comunidad nos encargamos de subastar productos asequibles para cualquier persona, y de primera calidad.
        No lo dudes elige tu producto y realiza una puja si tienes suerte será tuyo
      </h4>
    </div>
    <Products/>
    </>
  )
}

export default Home