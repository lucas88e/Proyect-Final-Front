import React from "react";
import { useShoppingCarContext } from "../context/shoppingCarContext";
import { Avatar } from "@mui/material";

function MiPerfil() {
  const { user } = useShoppingCarContext();
  
  console.log(user.avatar)
  return (
    <div>
           <img className="profile-image" src={user.avatar}/>
           <div className="profile-info">
      <p><b>Nombre de usuario:</b> {user.username}</p>
      <p><b>Nombre:</b> {user.firstName}</p>
      <p><b>Apellidos: </b>{user.lastName}</p>
      <p>
      <b>Numero de Telefono:</b>{user.mobileNumber}
      </p>
      <p><b>Direccion:</b> {user.address}</p>
      </div>
    </div>
  );
}

export default MiPerfil;
