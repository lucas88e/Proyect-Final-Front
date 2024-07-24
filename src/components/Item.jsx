import { useShoppingCarContext } from "../context/shoppingCarContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
;


const Item = ({ itemData }) => {
  console.log(itemData);
  const { removeItem } = useShoppingCarContext();

  return (
    <div>
      <h3>Enhorabuena has realizado una puja de {itemData.newPrice}€</h3>
      {/* {itemData.nombre} - {itemData.newPrice} - <img src={itemData.imagen}/>
      <button onClick={() => removeItem(itemData._id)}>Eliminar</button> */}


      <Card key={itemData._id} className="card-horizontal">
      <Card.Img variant="top" src={itemData.imagen} />
      <Card.Body>
        <Card.Title>{itemData.nombre}</Card.Title>
        <Card.Text>
        {itemData.descripcion}
        <p>Puja actual: {itemData.newPrice}€ </p>
        <h3>Tiempo restante:</h3>

        </Card.Text>
        <Button variant="danger" onClick={() => removeItem(itemData._id)}>Eliminar</Button>

      </Card.Body> 
    </Card>
    </div>
  );
}

export default Item;
