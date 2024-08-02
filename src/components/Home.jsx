import React from 'react'
import Products from './Products'
import './Products.css'
import { useThemeContext } from '../context/ThemeContext'
import axios from 'axios'
import { useEffect } from 'react'

function Home() {
  const {theme} = useThemeContext()
  
  // const url =  "http://localhost:5000"
  // useEffect(() => {
  //   const getProduct = async () => {
  //    try{ const response = await axios.get(
  //       `${url}/pujas`,
  //        {
  //         headers: {
  //             'x-auth-token': localStorage.getItem("token")
  //         }
  //     })
  //     ;
  //     const productData = response.data;
  //     console.log(productData);
  //    }catch(error){
  //     alert("No tienes permisorrrs logueate primero",error)

  //    }
  //   };

  //   getProduct();
  // }, []);

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