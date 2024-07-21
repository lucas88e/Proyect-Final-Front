import React, {
  useState,
  useEffect,
} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

function Products() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const traerProductos = async () => {
      const response = await axios.get(
        "http://localhost:5000/productos"
      );
      const productosData = response.data;
      setProductos(productosData);
    };
    traerProductos();
  }, []);

  return (
    <>
      <h2>Productos Actualmente en Subasta</h2>
      <div className="orden">
            {productos.map((item) => (

         <Card key={item._id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imagen} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
        {item.descripcion}
        </Card.Text>
        <Link to={`/productos/${item._id}`} variant="primary">Conoce los precios</Link>
      </Card.Body> 
    </Card>
      ))}
    </div> </>
  );
}

export default Products;
{/* <Row xs={1} md={2} className="g-4">
{productos.map((item,idx) => (
  <Col key={idx}>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
))}
</Row>
         */}