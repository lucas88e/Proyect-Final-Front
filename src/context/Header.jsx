import { useShoppingCarContext } from "./shoppingCarContext"
import { Link } from "react-router-dom";


const Header = () => {
    const {items} = useShoppingCarContext();
    return  <>
      <h1>Bazar Subastas Online </h1>
      <Link to="/cart"><div>Tienes {items.length} productos en el carrito</div></Link>
    </>
}

export default Header;