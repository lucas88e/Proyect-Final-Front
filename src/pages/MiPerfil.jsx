import React, { useState } from "react";
import { useShoppingCarContext } from "../context/shoppingCarContext";
import { Avatar } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
function MiPerfil() {
  const { user } = useShoppingCarContext();
    const apiUrl = import.meta.env.VITE_API_URL;
    const url = "http://localhost:5000"
  const { idUser } = useParams();
  const navigate = useNavigate();
  const toggleAuth = useAuth();

  const [isEditing, setIsEditing] =
    useState(false);
  const [formData, setFormData] = useState({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    mobileNumber: user.mobileNumber,
    address: user.address,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const editPerfil = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${apiUrl}/updateUser/${idUser}`,
        formData,
        {
          headers: {
            "x-auth-token":
              localStorage.getItem("token"),
          },
        }
      );
      const updatedUser = response.data;
      console.log(updatedUser);

      setIsEditing(false);
    } catch (error) {
      console.log(error);
      alert(
        "No tienes permisos logueate primero",
        error
      );
    }
  };

  const borrarUsuario = async (e) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/borrarUser/${idUser}`,
        formData,
        {
          headers: {
            "x-auth-token":
              localStorage.getItem("token"),
          },
        }
      );
      const usuarioBorrado = response.data;
      setIsEditing(false);

      alert("Usuario borrado");
      navigate("/");
      toggleAuth();
    } catch (error) {
      console.log(error);
      alert(
        "No tienes permisos logueate primero",
        error
      );
    }
  };

  return (
    <div>
      <img
        className="profile-image"
        src={`/${user.avatar}`}
      />

      <div className="profile-info">
        {isEditing ? (
          <form onSubmit={editPerfil}>
            <div>
              <label>Nombre de usuario:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Apellidos:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Numero de Telefono:</label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Guardar</button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
            >
              Cancelar
            </button>
          </form>
        ) : (
          <div>
            <p>
              <b>Nombre de usuario:</b>{" "}
              {user.username}
            </p>
            <p>
              <b>Nombre:</b> {user.firstName}
            </p>
            <p>
              <b>Apellidos: </b>
              {user.lastName}
            </p>
            <p>
              <b>Numero de Telefono:</b>
              {user.mobileNumber}
            </p>
            <p>
              <b>Direccion:</b> {user.address}
            </p>
            <button
              onClick={() => setIsEditing(true)}
            >
              Editar
            </button>
            <button onClick={borrarUsuario}>
              Borrar usuario
            </button>
            <p>
              Vuelve a loguearte para ver los
              cambios realizados
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MiPerfil;
