import { createContext, useState } from "react";
import {PRODUCTS} from "./productData.js";

export const ShopContext = createContext(null);
//set default {#1: 0; #2: 0; ... #n: 0}
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      //check if cartItems[item](number of #item in cart) greater than 0
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
        console.log("My total is: " + totalAmount);
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const removeComplete = (itemId) =>{
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    removeComplete,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
