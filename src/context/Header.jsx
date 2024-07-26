import { useShoppingCarContext } from "./shoppingCarContext"
import { useAuth } from "./auth";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';


const Header = () => {
    const {items,user} = useShoppingCarContext();
    const { isLoginPage } = useAuth();

    return  <>
      <h1>Bazar Subastas Online </h1>
      {isLoginPage ? (<h3>Bienvenido  {user.username}</h3>): "" }
      {isLoginPage ? ( <Link  to="/cart"><div className='m-4'>Tienes {items.length} productos en puja</div></Link>): "" }
     
      <Link className="m-3" to="/"><HomeIcon fontSize="large"/></Link>

    </>
}

export default Header;