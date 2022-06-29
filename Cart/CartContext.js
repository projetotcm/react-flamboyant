import React, {createContext, useState} from 'react';
import { getProduct } from '../services/ProductsService.js';

export const CartContext = createContext();
export default function CartProvider(props) {
  const [items, setItems] = useState([]);

  function addItemToCart(id) {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qtd: 1,
              product,
              totalPreco: product.preco 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qtd++;
              item.totalPreco += product.preco;
            }
            return item;
          });
      }
    });
}
function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qtd), 0);
  }

  function getTotalPreco() {
      return items.reduce((sum, item) => (sum + item.totalPreco), 0);
  }  

  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPreco}}>
      {props.children}
    </CartContext.Provider>
  );
}