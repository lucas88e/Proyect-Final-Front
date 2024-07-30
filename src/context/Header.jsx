import { useShoppingCarContext } from "./shoppingCarContext";
import { useAuth } from "./auth";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  const { items, user } = useShoppingCarContext();
  const { isAuth } = useAuth();

  return (
    <>
      <div className="header">
        <h1>
          <img
            className="imgLogo"
            width="250px"
            src="/logo2.png"
          ></img>
        </h1>
        {isAuth ? (
          <h3>Bienvenido {user.username}</h3>
        ) : (
          ""
        )}
        {isAuth ? (
          <Link to="/cart">
            <div className="m-4">
              Tienes {items.length} productos en puja
            </div>
          </Link>
        ) : (
          ""
        )}

        <Link className="m-3" to="/">
          <HomeIcon
            className="m-2"
            fontSize="large"
          />
        </Link>
      </div>
    </>
  );
};

export default Header;
