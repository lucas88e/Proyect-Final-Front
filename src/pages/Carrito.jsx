import { useShoppingCarContext } from "../context/shoppingCarContext";
import Item from "../components/Item";
import { Link } from "react-router-dom";

const Cart = () => {
  const {items} = useShoppingCarContext();

  return <>
    <Link to="/">Volver al Listado</Link>
    <h1>Tienes {items.length} Pujas pendientes </h1>
    <div>{items.map((item) => <Item key={item._id} itemData={item} />)}</div>
    <div>Total: {items.reduce(((total, item) => total + item.precio), 0)}</div>
    <h3>Tiempo restante:</h3>
    <button>Comprar</button>
  </>
}

export default Cart;