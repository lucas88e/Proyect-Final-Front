import { useShoppingCarContext } from "./shoppingCarContext"
import { Link } from "react-router-dom";


const Header = () => {
    const {items,user} = useShoppingCarContext();
    return  <>
      <h1>Bazar Subastas Online </h1>
      <h3>Bienvenido  {user.username}</h3>
      <Link  to="/cart"><div className='m-4'>Tienes {items.length} productos en puja</div></Link>
      <Link  to="/"><div> Volver al inicio</div></Link>

    </>
}

export default Header;