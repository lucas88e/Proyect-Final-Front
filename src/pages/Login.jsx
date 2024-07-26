import React, {
  useState,
} from "react";
import axios from "axios";
import { useShoppingCarContext } from "../context/shoppingCarContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";


const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
const {setUser,user} = useShoppingCarContext()  
const navigate = useNavigate()
const {toggleAuth} = useAuth()

const doLogin = async () =>{
  const payload = {
   username,
   password
  }

  try {
    const responseLogin = await axios.post("http://localhost:5000/login", payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (responseLogin.status !== 200) {
      alert("Error!");
      return;
    }

    const login = responseLogin.data;
    console.log(login);
    localStorage.setItem("token", login.token);
    localStorage.setItem("user", login._id);

    const responseUser = await axios.get(`http://localhost:5000/users/${login._id}`);
    const user = responseUser.data;
    setUser(user);
    toggleAuth()
    navigate("/");

  } catch (error) {
    alert("Error");
    console.error("Login error:", error);
  }
};
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

// import React, {
//   useEffect,
//   useState,
// } from "react";
// import axios from "axios";
// import { useShoppingCarContext } from "../context/shoppingCarContext";
// import { useForm } from "react-hook-form"


// const Login = () => {
//   const [username, setUserName] = useState("");
//   const [password, setPassword] = useState("");
// const {setUser,user} = useShoppingCarContext()  

// const { register, handleSubmit, formState: { errors } } = useForm();
// console.log(errors);

// const doLogin = async () =>{
//   const payload = {
//    username,
//    password
//   }
//  const responseLogin= await axios
//   .post("http://localhost:5000/login",payload)
//   try{
//     const responseLogin = await axios.post("http://localhost:5000/login", payload, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     console.log(responseLogin);

//   }
//   catch{
//     alert("error")
//   }
//   if(responseLogin.status !== 200){
//     alert("Error!")
//     return
//   }
//   const login = responseLogin.data;
//   console.log(login)
//   localStorage.setItem("token",login.token)
//   localStorage.setItem("user",login._id)

//   const responseUser = await axios.get(`http://localhost:5000/users/${login._id}`);
//   const user = responseUser.data;
//   setUser(user);
  

// }
//   return (
//     <form onSubmit={handleSubmit(doLogin)}>
//     <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
   
//     <input type="password" placeholder="contraseña" {...register} />

//     <input {...register("Developer", { required: true })} type="radio" value="Yes" />
//     <input {...register("Developer", { required: true })} type="radio" value="No" />

//     <input type="submit" />
//   </form>
//   );
// };

// export default Login;
