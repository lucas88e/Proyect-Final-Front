import { useShoppingCarContext } from "../context/shoppingCarContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { differenceInSeconds, format, formatDistanceToNow } from "date-fns";
import { useState,useEffect } from "react";




const Item = ({ itemData }) => {
  const { removeItem ,user} = useShoppingCarContext();
  const fechaFormateada = itemData.fechaFinal
  ? format(
    new Date(itemData.fechaFinal),
    "dd-MM-yyyy / HH:mm"
  )
  : ""; // Formateo de fecha horas y minutos
  const [diasRestantes,setDiasRestantes] = useState("")
  const [horasRestantes,setHorasRestantes] = useState("")
  const [minutosRestantes,setMinutosRestantes] = useState("")
  const [segundosRestantes,setSegundosRestantes] = useState("")



  
  useEffect(()=>{
    if(itemData.fechaFinal){
      const fechaFinal = new Date(itemData.fechaFinal)
    
    const actualizarCuentaAtras = ()=>{

      const ahora = new Date()
      const segundosRestantes = differenceInSeconds(fechaFinal,ahora)
      if(segundosRestantes <=0){
        setTiempoRestante("La subasta ha terminado")
        clearInterval(intervalo)
      }else{
        const dias = Math.floor(segundosRestantes /(3600*24))
        const horas = Math.floor(segundosRestantes % (3600*24)/3600)
        const minutos = Math.floor((segundosRestantes % 3600) /60)
        const segundos = segundosRestantes % 60

        setDiasRestantes(`${dias} dias`)
        setHorasRestantes(`${horas} horas`)
        setMinutosRestantes(`${minutos} minutos`)
        setSegundosRestantes(`${segundos} segundos`)


      }
    }
    const intervalo = setInterval(actualizarCuentaAtras,1000)
    actualizarCuentaAtras()
    return () => clearInterval(intervalo)
  }
  

  },[itemData.fechaFinal])


  return (
    <div>
      <h3>Enhorabuena {user.username} has realizado una puja de {itemData.newPrice}€</h3>
  

      <Card key={itemData._id} className="card-horizontal">
      <Card.Img variant="top" src={itemData.imagen} />
      <Card.Body>
        <Card.Title><h2>{itemData.nombre}</h2></Card.Title>
        <Card.Text> <b>Descripcion:</b></Card.Text>
        {itemData.descripcion} 
        <Card.Text><b>Puja actual:</b><span className="tamaño"> {itemData.newPrice}€ </span></Card.Text>
        <span className="tamaño">Finalización: {fechaFormateada}H</span >
        <Card.Text className="tiempo">{diasRestantes} {horasRestantes} {minutosRestantes} {segundosRestantes}</Card.Text>


       
        <Button variant="danger" onClick={() => removeItem(itemData._id)}>Eliminar</Button>

      </Card.Body> 
    </Card>
    </div>
  );
}

export default Item;
