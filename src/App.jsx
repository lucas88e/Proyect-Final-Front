import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Products from './components/Products'
import Login from './pages/Login'
import NavBars from './components/NavBar'
import Cart from './pages/Carrito'
import './App.css'
import ProductoDetallado from './components/ProductoDetallado'
import Categorias from './components/Categorias'
import Hogar from './pages/Hogar'
import { ShoppingCarProvider } from './context/shoppingCarContext'
import Header from './context/Header'
import Pujas from './pages/Pujas'
import Mascotas from "./pages/Mascotas"
import Electronica from './pages/Electronica'
import Ropa from './pages/Ropa'

function App() {


  return (
    <>
        <ShoppingCarProvider>
      <Router>
        <Header/>
        <NavBars/>
        <Routes>
        <Route path ="/" element={<Home/>}/>       
         <Route path="/pujas" element = {<Pujas/>}/>
         <Route path="/productos" element = {<Products/>}/>
         <Route path="/cart" element={<Cart/>} />
         <Route path="/login" element = {<Login/>}/>
         <Route path="/productos/:id" element = {<ProductoDetallado/>}/>
         <Route path="/categorias" element = {<Categorias/>}/>
         <Route path="/hogar" element = {<Hogar/>}/>
         <Route path="/mascotas" element = {<Mascotas/>}/>
         <Route path="/electronica" element = {<Electronica/>}/>
         <Route path="/ropa" element = {<Ropa/>}/>




        </Routes>
    </Router>
</ShoppingCarProvider>

    </>
  )
}

export default App
