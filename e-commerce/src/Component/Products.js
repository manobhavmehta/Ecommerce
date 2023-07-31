import React from "react";
import Cards from "./Cards";
import ProductsInfo from "./ProductsInfo";
import Navbar from "./Navbar";
import "./Products.css";

function Products ()
{
   function ProductMapping(product){
    return(
    <Cards
image = {product.image}
Name = {product.Name}
Price = {product.Price}
Reviews = {product.Reviews}
    />
    )
   }
    return(
        <div className="Container">
<Navbar />
        <div className="Grid"> {ProductsInfo.map(ProductMapping)} </div>
        </div>
    )
}
export default Products;