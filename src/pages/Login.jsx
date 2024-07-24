import React, {
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { useShoppingCarContext } from "../context/shoppingCarContext";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
const {setUser,user} = useShoppingCarContext()  

const doLogin = async () =>{
  const payload = {
   username,
   password
  }
 const responseLogin= await axios
  .post("http://localhost:5000/login",payload)
  try{
    const responseLogin = await axios.post("http://localhost:5000/login", payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(responseLogin);

  }
  catch{
    alert("error")
  }
  if(responseLogin.status !== 200){
    alert("Error!")
    return
  }
  const login = responseLogin.data;
  console.log(login)
  localStorage.setItem("token",login.token)
  localStorage.setItem("user",login._id)

  const responseUser = await axios.get(`http://localhost:5000/users/${login._id}`);
  const user = responseUser.data;
  setUser(user);

}
  return (
    <div>
      <h1>Introduce tu nombre y contraseña</h1>
      <label>Usuario:</label>
      <input value={username}  onChange= {(e)=>setUserName(e.target.value)} type="text"></input>
      <p><label>Contraseña</label>
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"></input></p>
      <button onClick={doLogin}>Iniciar Sesion</button>
      <h1>Bienvenido {user.username}</h1>
    </div>
  );
};

export default Login;
