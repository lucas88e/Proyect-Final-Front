import { useShoppingCarContext } from "../context/shoppingCarContext";

const Item = ({itemData}) => {
    const {removeItem} = useShoppingCarContext();

    return <div>{itemData.nombre} - {itemData.precio} <button onClick={() => removeItem(itemData._id)}>Eliminar</button></div>
}

export default Item;