import React, {
  useState,
  useEffect,
} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useThemeContext } from "../context/ThemeContext";
function Products() {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate()
  const {toggleAuth} = useAuth()
  const {theme} = useThemeContext()
  useEffect(() => {
    const traerProductos = async () => {
      const response = await axios.get(
        "http://localhost:5000/productos"
      );
      const productosData = response.data;
      setProductos(productosData);
      console.log(productosData);
    };
    traerProductos();
  }, []);

  const handleClick = (item)=>{navigate(`/productos/${item._id}`)
   }
  return (
    <>
      <h2 className="center">Productos Actualmente en Subasta</h2>
      <div className="orden">
        {productos.map((item) => (
          <div className={`${theme}`}>
          <Card
            key={item._id}
            style={{ width: "18rem" }}
          >
            <Card.Img
              variant="top"
              src={item.imagen}
            />
            <Card.Body>
              <Card.Title>
                {item.nombre}
              </Card.Title>
              <Card.Text>
                {item.descripcion}
              </Card.Text>
              <Button
                onClick={()=>handleClick(item)}
              >
                Conoce los precios
              </Button>
            </Card.Body>
          </Card>
          </div>
        ))}
      </div>{" "}
    </>
  );
}

export default Products;
{
  /* <Row xs={1} md={2} className="g-4">
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
         */
}
