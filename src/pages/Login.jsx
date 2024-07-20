import React, {
  useEffect,
  useState,
} from "react";
import axios from "axios";

const Login = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/login")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the users!",
          error
        );
      });
  }, []);

  return (
    <div>
      <h1>Introduce tu nombre y contraseña</h1>
      <label>Usuario:</label>
      <input type="text"></input>
      <p><label>Contraseña</label>
      <input type="password"></input></p>
      <button>Iniciar Sesion</button>
    </div>
  );
};

export default Login;
