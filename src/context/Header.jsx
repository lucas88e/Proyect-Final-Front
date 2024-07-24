import { useShoppingCarContext } from "./shoppingCarContext"
import { Link } from "react-router-dom";


const Header = () => {
    const {items,user} = useShoppingCarContext();
    return  <>
      <h1>Bazar Subastas Online {user.username} </h1>
      <Link to="/cart"><div>Tienes {items.length} productos en puja</div></Link>
    </>
}

export default Header;