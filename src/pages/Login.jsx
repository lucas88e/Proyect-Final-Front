import React, {
  useEffect,
  useState,
} from "react";
import axios from "axios";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

const doLogin = async () =>{
  const payload = {
   username,
   password
  }
 const responseLogin= await axios
  .post("http://localhost:5000/login",payload)
  try{
    console.log(responseLogin)

  }
  catch{
    alert("error")
  }
  // if(responseLogin.status !== 200){
  //   alert("Error!")
  //   return
  // }
  // const login = responseLogin.data;
  // localStorage.setItem("token",login.token)
  // localStorage.setItem("user",login._id)



}


  return (
    <div>
      <h1>Introduce tu nombre y contraseña</h1>
      <label>Usuario:</label>
      <input value={username}  onChange= {(e)=>setUserName(e.target.value)} type="text"></input>
      <p><label>Contraseña</label>
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"></input></p>
      <button onClick={doLogin}>Iniciar Sesion</button>
    </div>
  );
};

export default Login;
