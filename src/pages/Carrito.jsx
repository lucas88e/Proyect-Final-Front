import { useShoppingCarContext } from "../context/shoppingCarContext";
import Item from "../components/Item";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items } = useShoppingCarContext();

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const itemPrice = item.newPrice || item.precio; //Elegir precio
      return total + itemPrice;
    }, 0);
  };

  return (
    <>
      <Link to="/">Volver al Listado</Link>
      <h1>Tienes {items.length} Pujas pendientes </h1>
      <div>{items.map((item) => <Item key={item._id} itemData={item} />)}</div>
      <h2>Total: {calculateTotal()} €</h2>
      <button>Comprar</button>
    </>
  );
}

export default Cart;
