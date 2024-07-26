import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useShoppingCarContext } from "../context/shoppingCarContext";
import { format } from "date-fns";
import "./productoDetallado.css";

function ProductoDetallado() {
  const [product, setProduct] = useState({});
  const [pujaConfirmada, setPujaConfirmada] =
    useState(false);
  const { id } = useParams();
  const { updateItems } = useShoppingCarContext();

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `http://localhost:5000/productos/${id}`
      );
      const productData = response.data;
      productData.newPrice = productData.precio; // Initialize newPrice with the product's initial price
      setProduct(productData);
    };

    getProduct();
  }, [id]);

  const getNewPrice = (e) => {
    const value = Number(e.target.value);
    setProduct((prevProduct) => ({
      ...prevProduct,
      newPrice: value,
    }));
    setPujaConfirmada(false);
  };

  const handlePujaClick = (product) => {
    const updatedProduct = {
      ...product,
      newPrice: product.newPrice,
    }; // Ensure newPrice is part of the product object
    updateItems(updatedProduct);
    setPujaConfirmada(true);
    localStorage.setItem(
      "puja",
      product.newPrice
    );
  };

  const fechaFormateada = product.fechaFinal
    ? format(
        new Date(product.fechaFinal),
        "dd-MM-yyyy"
      )
    : ""; // Formateo de fecha horas y minutos

  return (
    <>
      <Card
        key={product._id}
        style={{ width: "25rem" }}
      >
        <Card.Img
          variant="top"
          src={product.imagen}
        />
        <Card.Body>
          <Card.Title>
            <h2>{product.nombre}</h2>
          </Card.Title>
          <Card.Text>
            <b>Descripcion del producto:</b>
          </Card.Text>{" "}
          <span>{product.descripcion}</span>
          <Card.Text>
            <b>Categoria:</b>{" "}
            <span>{product.categoria}</span>
          </Card.Text>
          <Card.Text>
            <b>Talla:</b>{" "}
            <span>{product.talla}</span>
          </Card.Text>
          <Card.Text>
            <b>La puja Finaliza el dia:</b>{" "}
            <span className="tamaño">
              {fechaFormateada}
            </span>
          </Card.Text>
          <Card.Text>
            <b>Puja de salida:</b>{" "}
            <span className="tamaño">
              {product.precio}€
            </span>
          </Card.Text>
          <Card.Text>
            <b>Puja Actual:</b>{" "}
            <span
              className={
                pujaConfirmada
                  ? "puja-confirmada tamaño"
                  : "tamaño"
              }
            >
              {product.newPrice}€
            </span>
          </Card.Text>
          <input
            type="number"
            className="input"
            value={product.newPrice}
            placeholder="Introduce Tu puja"
            onChange={getNewPrice}
            min={product.precio}
          />
          <p>
            <Button
              className="m-3"
              onClick={() =>
                handlePujaClick(product)
              }
            >
              Pujar AHORA
            </Button>
          </p>
          <Link to={`/`}>Volver al Inicio</Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductoDetallado;
