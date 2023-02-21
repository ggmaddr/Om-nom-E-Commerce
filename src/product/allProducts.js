import React from "react";
import {PRODUCTS, GALLERY} from "./productData.js";
import { Product } from "./product.js";import LightGallery from 'lightgallery/react';

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
export const Gallery = ()=>{

    return(
        <section className="gallery" id="gallery">
            <h1 className="heading">rising star <span> gallery</span></h1>
            <div className="gallery-container">
                {GALLERY.map((gal)=>(
                <a href={gal.image} className="box">
                    <img src={gal.image} alt=""/>
                    <div className="icons"><i className="fas fa-plus"></i></div>
                </a>
                ))}
            </div>
    </section>
    )
}