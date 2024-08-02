import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import Login from './pages/Login';
import NavBars from './components/NavBar';
import Cart from './pages/Carrito';
import ProductoDetallado from './components/ProductoDetallado';
import Categorias from './components/Categorias';
import { ShoppingCarProvider } from './context/shoppingCarContext';
import Header from './context/Header';
import { Ropa, Mascotas, Electronica, Hogar } from './pages/todasCategorias';
import { AuthProvider } from './context/auth';
import './App.css';
import MiPerfil from './pages/MiPerfil';
import Registro from './pages/Registro';
import { useThemeContext,ThemeContextProvider } from './context/ThemeContext'
function App() {
  return ( 
    <>
   <ThemeContextProvider>
    <ShoppingCarProvider>
      <AuthProvider>
        <Router>
          <NavBars />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/perfil" element={<MiPerfil />} />
            <Route path="/register" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/productos/:id" element={<ProductoDetallado />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/hogar" element={<Hogar />} />
            <Route path="/mascotas" element={<Mascotas />} />
            <Route path="/electronica" element={<Electronica />} />
            <Route path="/ropa" element={<Ropa />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ShoppingCarProvider>
    </ThemeContextProvider>

 </>
  );
}

export default App;
