import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';


function Hogar() {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    
      const getProductos = async () => {
        try {
          const url = `http://localhost:5000/productos`;
          const response = await axios.get(url);
          setProductos(response.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      getProductos();
    
  }, []);

  // Filtrar productos por categoría "Hogar"
  const productosFiltrados = productos.filter(producto => producto.categoria === "Hogar");

  return (
    <div>
      <h2>Productos en la categoría: {categoria}</h2>
      <CardGroup>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <Card key={producto._id}>
                <Card.Text> <h2> {producto.categoria}</h2></Card.Text>

              <Card.Img variant="top" src={producto.imagen} />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
              </Card.Body>
              <h3>{producto.precio} €</h3>
              <Link to={`/productos/${producto._id}`} variant="primary">Accede para realizar puja</Link>


            </Card>
          ))
        ) : (
          <p>No hays productos en esta categoría.</p>
        )}
      </CardGroup>
    </div>
  );
}

export default Hogar;
