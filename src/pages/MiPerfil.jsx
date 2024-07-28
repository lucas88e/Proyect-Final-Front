import React from 'react'
import { useShoppingCarContext } from '../context/shoppingCarContext'

function MiPerfil() {
    const {user} = useShoppingCarContext()
  return (
    <div>Nombre de usuario: {user.username}</div>
  )
}

export default MiPerfil