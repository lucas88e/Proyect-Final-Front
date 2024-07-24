import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function ProductosPorCategoria() {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
     
      const getProductos = async () => {
        try {
          const url = `http://localhost:5000/productos`;
          const response = await axios.get(url);
          setProductos(response.data);
          console.log(response.data)
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      getProductos();
    
  }, []);

  // Filtrar productos por categoría "Hogar"
  const productosFiltrados = productos.filter(producto => producto.categoria === "Ropa");
console.log(productosFiltrados)
  return (
    <div>
      <h2>Productos en la categoría: {categoria}</h2>
      <CardGroup>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <Card key={producto._id}>
              <Card.Img variant="top" src={producto.imagen} />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
                <Card.Text>Talla: {producto.talla}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Precio: ${producto.precio}</small>
              </Card.Footer>
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
