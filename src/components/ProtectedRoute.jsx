import React from "react";
import { useAuth } from "../context/auth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
    element: Element,...rest
}) =>{

    const {isAuth} = useAuth()
    return isAuth ? <Element{...rest}/>: <Navigate to ="/cart" ></Navigate>
}

export default ProtectedRoute