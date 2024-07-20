import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Products from './components/Products'
import Login from './pages/Login'
import NavBars from './components/NavBar'
import './App.css'
import ProductoDetallado from './components/ProductoDetallado'

function App() {


  return (
    <>
        
      <Router>
        <NavBars/>
        <Routes>
        <Route path ="/" element={<Home/>}/>       
         <Route path="/productos" element = {<Products/>}/>
         <Route path="/login" element = {<Login/>}/>
         <Route path="/productos/:id" element = {<ProductoDetallado/>}/>



        </Routes>
    </Router>


    </>
  )
}

export default App
