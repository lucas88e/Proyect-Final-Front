import { useShoppingCarContext } from "../context/shoppingCarContext";
import Item from "../components/Item";
import { Link } from "react-router-dom";

const Pujas = () => {
  const {items} = useShoppingCarContext();

  return <>

    <Link to="/">Volver al Listado</Link>
    <h1>pujas tienes {items.length}</h1>
    <div>{items.map((item) => <Item key={item._id} itemData={item} />)}</div>
    <div>Total: {items.reduce(((total, item) => total + item.precio), 0)}</div>
    <button>Comprar</button>
  </>
}

export default Pujas;