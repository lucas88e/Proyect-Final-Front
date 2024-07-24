import { useShoppingCarContext } from "../context/shoppingCarContext";

const Item = ({itemData}) => {
    const {removeItem} = useShoppingCarContext();

    return <div> <h3>Enhorabuena has realizado una puja</h3>
        {itemData.nombre} - {itemData.precio} <button onClick={() => removeItem(itemData._id)}>Eliminar</button></div>
}

export default Item;