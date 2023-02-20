import React from "react";
import {PRODUCTS} from "./productData.js";
import { Product } from "./product.js";

export const AllProducts = ()=>{
    return(
        <section className="product" id="product">

        <h1 className="heading">our <span> products</span></h1>
        <div className="box-container" id = "first">
            {PRODUCTS.map((product)=>(
                <Product data = {product} />
            ))}
            
        </div>
        
    </section>
    )
}