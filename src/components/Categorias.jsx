
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios';
import { Link } from 'react-router-dom';

const App = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const getCategoria = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;

        if (!apiUrl) {
          throw new Error('API URL is not defined');
        }

        const response = await axios.get(`${apiUrl}/categorias`);
        const categoriaData = response.data;
        setCategorias(categoriaData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategoria();
  }, []);

  return (
    <div>
      <CardGroup>
        {categorias.map((categoria) => (
          <Card key={categoria._id}>
            <Card.Img variant="top" src={categoria.imagen} />
            <Card.Body>
              <Card.Title>{categoria.categoria}</Card.Title>
              <Card.Text>
                {categoria.descripcion}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Link to={`/${categoria.categoria}`}>IR</Link>
            </Card.Footer>
            
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}


export default App;
