import React from "react";
import ProductosPorCategoria from "../components/ProductosPorCategoria";

export function Electronica(){
    return <ProductosPorCategoria categoria="Electronica"/>
}

export function Hogar(){
    return <ProductosPorCategoria categoria="Hogar"/>
}

export function Mascotas(){
    return <ProductosPorCategoria categoria="Mascotas"/>
}
export function Ropa(){
    return <ProductosPorCategoria categoria="Ropa"/>
}