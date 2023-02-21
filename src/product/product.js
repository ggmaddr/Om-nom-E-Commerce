import React, { useContext } from "react";
import { ShopContext } from "./CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

export const Product =(props)=>{
    const {id, productName, price, productImage, action, reviewStars} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemCount = cartItems[id];
    
    // loop function to write stars
    const writeStar = ()=>{
        const stars = []; 
        for (let i = 0; i < reviewStars[0]; i++) {
            stars.push(<FontAwesomeIcon className='icon' icon={faStar} />);
        }
        // if there is half star
        if (reviewStars[1] == 1){
            //set key = 6(<5) is always possible
            stars.push(<FontAwesomeIcon className='icon' icon={faStarHalfStroke} />);

        }
        return stars;
    }
    
    return(
        <div className="box" >
                <div className="image">
                    <img src={productImage} alt="product"/>
                </div>
                <div className="content">
                    <h3>{productName}</h3>
                    <div className="stars">
                       {writeStar()}
                    </div>
                    <span className="price">${price}</span>
                    <button onClick={() => addToCart(id)} className="btn">{action} {cartItemCount > 0 && <> ({cartItemCount})</>}
                    </button>
                </div>
            </div>
    )
}