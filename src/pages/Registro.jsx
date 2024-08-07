import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Registro() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
  
    const onSubmit = async (data) => {
      const apiUrl = import.meta.env.VITE_API_URL;
      const formData = new FormData();

      // Agregar todos los campos al FormData
      formData.append('username', data.username);
      formData.append('password', data.password);
      formData.append('email', data.email);
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('mobileNumber', data.mobileNumber);
      formData.append('address', data.address);
      formData.append('avatar', data.avatar[0]); // Asegúrate de que el input file se llama 'avatar'
      formData.append('genero', data.genero);
      formData.append('isAdmin', data.isAdmin);
      try {
        const response = await axios.post(`${apiUrl}/register`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        
        console.log(response)
        const result = response.data;
        console.log(result); 
        navigate("/login")// Maneja la respuesta del servidor aquí, como almacenar el token o redirigir al usuario
      } catch (error) {
        console.error('Error en la solicitud', error);
      }
    };


return (
  <form onSubmit={handleSubmit(onSubmit)}>
      <p><input type="text" placeholder="Nombre de usuario" {...register("username", { required: true })} /></p>
      {errors.username && <p>El nombre de usuario es requerido</p>}

      <p><input type="password" placeholder="Contraseña" {...register("password", { required: true })} /></p>
      {errors.password && <p>La contraseña es requerida</p>}

      <p><input type="text" placeholder="Nombre" {...register("firstName", { required: true })} /></p>
      {errors.firstName && <p>El nombre es requerido</p>}

      <p><input type="text" placeholder="Apellidos" {...register("lastName", { required: true })} /></p>
      {errors.lastName && <p>Los apellidos son requeridos</p>}

      <p><input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} /></p>
      {errors.email && <p>El email es requerido y debe ser válido</p>}

      <p><input type="tel" placeholder="Número de móvil" {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} /></p>
      {errors.mobileNumber && <p>El número de móvil es requerido y debe tener entre 6 y 12 caracteres</p>}

      <p><input type="text" placeholder="Dirección" {...register("address")} /></p>
      <input type="file" placeholder="Avatar" {...register("avatar", {})} />


      <p><label>Genero </label></p>
        <input {...register("developer", { required: true })} type="radio" value="Hombre" />Hombre 
        <input {...register("developer", { required: true })} type="radio" value="Mujer" />  Mujer
      {errors.developer && <p>Debe seleccionar una opción</p>}
      <p><input type="checkbox" {...register("isAdmin")} /> Administrador</p>


      <p><input type="submit" /></p>
    </form>
  );
}

export default Registro