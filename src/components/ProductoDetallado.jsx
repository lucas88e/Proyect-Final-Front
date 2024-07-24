import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useShoppingCarContext } from '../context/shoppingCarContext';
import './productoDetallado.css'
function ProductoDetallado() {
  const [product, setProduct] = useState({});
  const [newPrice, setNewPrice] = useState("")
  const [pujaConfirmada, setPujaConfirmada] = useState(false)
  const {id} = useParams();
  const {updateItems} = useShoppingCarContext()
  
  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`http://localhost:5000/productos/${id}`);
      const productData = response.data;
      setProduct(productData);
    }
   

    getProduct();
}, [id]);
 const getNewPrice = async (e)=>{

      setNewPrice(e.target.value)
      setPujaConfirmada(false)
    }
    const handlePujaClick = (product) => {
      updateItems(product)
     
      setPujaConfirmada(true)
    };
  return (<>
   <Card key={product._id} style={{ width: '25rem' }}>
      <Card.Img variant="top" src={product.imagen} />
      <Card.Body>
        <Card.Title><h2>{product.nombre}</h2></Card.Title>
        <Card.Text>
      <b>Descripcion del producto:</b><p>  {product.descripcion}</p>
       <p> Categoria: {product.categoria}</p>
        <p>Talla:{product?.talla} </p>
        </Card.Text>
        <Card.Text>
          La puja comienza en 
      <h3>{product.precio}</h3> 
      Puja Actual
      <h3 className={pujaConfirmada ? "puja-confirmada": ''}>{newPrice}
        </h3>       
        </Card.Text>
        <input type='number' className='input' value={newPrice} placeholder='Introudce Tu puja' onChange ={getNewPrice} min={product.precio}/>
        <p> <Button className='m-3' onClick={()=>handlePujaClick(product)} >Pujar AHORA</Button>
        {/* <p> <Button onClick={()=>updateItems(product)} >Añadir al carrito </Button></p> */}

      </p> <Link to={`/`} variant="primary">Volver al Inicio</Link>
      </Card.Body> 
    </Card>
    </>
  )
}

export default ProductoDetallado