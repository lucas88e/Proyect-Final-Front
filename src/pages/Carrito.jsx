import { useShoppingCarContext } from "../context/shoppingCarContext";
import Item from "../components/Item";

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
      <h1>Tienes {items.length} Pujas pendientes </h1>
      <div>{items.map((item) => <Item key={item._id} itemData={item} />)}</div>
      <span className="tamaño">Total: {calculateTotal()} €</span>
      <button>Comprar</button>
    </>
  );
}

export default Cart;
