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
        const response = await axios.get(`http://localhost:5000/categorias/${categoria}`);
        setProductos(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    console.log(categoria)
    getProductos();
  }, []);

  return (
    <div>
      <h2>Productos en la categoría: {productos}</h2>
      <CardGroup>
        {productos.map((producto) => (
          <Card key={producto._id}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{producto.categoria}</Card.Title>
              <Card.Text>
                {producto.descripcion}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Precio: ${producto.precio}</small>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default ProductosPorCategoria;
