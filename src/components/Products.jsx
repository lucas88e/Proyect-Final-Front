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
  const apiUrl = import.meta.env.VITE_API_URL;

  const [productos, setProductos] = useState([]);
  const [loading,setLoading] = useState(true)


  const navigate = useNavigate()
  const {toggleAuth} = useAuth()
  const {theme} = useThemeContext()
  useEffect(() => {
    
    const traerProductos = async () => {
      try{
       const response = await axios.get(
        `${apiUrl}/productos`
      );
      const productosData = response.data;
      setProductos(productosData);
      console.log(response);
    }
    catch{
      

    }
    finally{
      setLoading(false)
    }
      }
     
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
