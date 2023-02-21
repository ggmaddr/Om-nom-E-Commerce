import React, { useContext } from "react";
import { ShopContext } from "./CartContext";
import { PRODUCTS } from "./productData";
import { click } from "../home/script";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout,  addToCart, removeFromCart, updateCartItemCount, removeComplete } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart-items-container">
        <div id="close-form" className="fas fa-times" onClick={click}></div>
        <div> <h3 className="title">Your Cart</h3>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <div className="cart-item">
                {/* <FontAwesomeIcon id="close-form" style={{fontSize: "2.5rem"}} icon={faTimes} onDoubleClick={cartItems[product.id] == 0} /> */}
                <span className="fas fa-times" onClick={()=>removeComplete(product.id)}></span>
                <img src={product.productImage} />
                <div className="content">
                <h3>{product.productName}</h3>
                <h4> ${product.price * cartItems[product.id]}</h4>
                  <div>
                    <button onClick={() => removeFromCart(product.id)}>-</button>
                    <input className="price"
                      value={cartItems[product.id]}
                      onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}
                    />
                    <button onClick={() => addToCart(product.id)}>+</button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div>
          <h3 style={{fontSize: "2rem"}}> Subtotal: ${totalAmount} </h3>
          <a href="https://www.a.com/" className="btn"> checkout </a>
        </div>
      ) : (
        <h1> Let's add something =^^=</h1>
      )}

    </div>
  );
};
