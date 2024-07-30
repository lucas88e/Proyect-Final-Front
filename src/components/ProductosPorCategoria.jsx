import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { Button } from 'react-bootstrap';

function ProductosPorCategoria({categoria}) {
  const [productos, setProductos] = useState([]);
  const {toggleAuth} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    
      const getProductos = async () => {
        try {
          const url = `http://localhost:5000/productos`;
          const response = await axios.get(url,
            {
             headers: {
                 'x-auth-token': localStorage.getItem("token")
             }
         });
         toggleAuth()
         const productData = response.data
         setProductos(productData);
        } catch (error) {
          toggleAuth()
          alert("No tienes permisos logueate primero",error)
        }
      };
      getProductos();
    
  }, []);
  const handleClick = (producto)=>{navigate(`/productos/${producto._id}`)
  toggleAuth()}

  // Filtrar productos por categoría "Hogar"
  const productosFiltrados = productos.filter(producto => producto.categoria === categoria);

  return (
    <div>
      <CardGroup>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <Card key={producto._id}>
              <Card.Img variant="top" src={producto.imagen} />
              <Card.Body>
              <Card.Text><h2>{producto.categoria}</h2></Card.Text>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
                <Card.Text>Talla: {producto.talla}</Card.Text>
              </Card.Body>
                <h3>{producto.precio} €</h3>
                <Button
                onClick={()=>handleClick(producto)}
              >
                Conoce los precios
              </Button>
                <Link to={`/categorias`} >Volver a todas las categorias</Link>


            </Card>
          ))
        ) : (
          <p>No hays productos en esta categoría.</p>
        )}
      </CardGroup>
    </div>
  );
}

export default ProductosPorCategoria;
