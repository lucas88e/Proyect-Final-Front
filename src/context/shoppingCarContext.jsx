import React, { createContext, useState, useContext } from 'react';

const ShoppingCarContext = createContext();

export const ShoppingCarProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [user,setUser] = useState({})
  const [newPrice, setNewPrice] = useState()


  const updateItems = (newItem) => {
    let newItems = [...items, newItem];
    setItems(newItems);
    
    console.log({items})
  };

  const removeItem = (id) => {
    let newItems = [...items];
    newItems = newItems.filter((currentItem) => currentItem._id !== id);
    setItems(newItems);
  }

  return (
    <ShoppingCarContext.Provider value={{ items, updateItems, removeItem,user,setUser,newPrice,setNewPrice}}>
      {children}
    </ShoppingCarContext.Provider>
  );
};

export const useShoppingCarContext = () => {
    return( useContext(ShoppingCarContext));
}