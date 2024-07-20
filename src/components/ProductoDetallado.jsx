import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
function ProductoDetallado() {
  const [product, setProduct] = useState({});
  const {id} = useParams();
  
  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`http://localhost:5000/productos/${id}`);
      const productData = response.data;
      setProduct(productData);
    }

    getProduct();
}, []);

  return (<>
   <Card key={product._id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title><h2>{product.nombre}</h2></Card.Title>
        <Card.Text>
      <p> Descripcion del producto: {product.descripcion}</p>
       <p> Categoria: {product.categoria}</p>
        <p>Talla:{product?.talla} </p>
        </Card.Text>
        <Card.Text>
          La puja comienza en 
      <h3>{product.precio}</h3> 
        </Card.Text>
        <input type='number' className='input' placeholder='Introudce Tu puja' min={product.precio}/>
        <p> <Button>Pujar AHORA</Button>
      </p> <Link to={`/`} variant="primary">Volver al Inicio</Link>
      </Card.Body> 
    </Card>
    </>
  )
}

export default ProductoDetallado