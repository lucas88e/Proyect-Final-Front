import { useShoppingCarContext } from "../context/shoppingCarContext";
import Item from "../components/Item";
import { Link } from "react-router-dom";

const Pujas = () => {
  const {items} = useShoppingCarContext();

  return <>
    <Link to="/">Volver al Listado</Link>
    <div> 
      {items.map((item) =><div>Enhorabuena has realiza una puja en los siguientes artículos {item.nombre}</div> )}</div>
    <div>Total: {items.reduce(((total, item) => total + item.precio), 0)}</div>
    <button>Comprar</button>
  </>
}

export default Pujas;