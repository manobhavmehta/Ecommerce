import React,{useState} from "react";
import "./Cards.css";
import "./ProductsInfo";
import { useContext } from "react";
import { CartContext } from "./Context";

function Cards (props)
{

    const {cart , setCart} = useContext(CartContext);
    async function handleAdd(e){
        
        e.preventDefault();
        const  response = await fetch('http://localhost:5000/add',{
            method: 'POST',
            body: JSON.stringify({name:props.Name , price:props.Price , image:props.image , review:props.Reviews}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
        })
    }
    return (
                <div className="Grid-Item">
            <a href=""><img src={props.image} /> </a>
            <div className="Name">
            <a className="Product" href="/">{props.Name}</a>
            </div>
            <div className="Price">
                <h3>{props.Price}</h3>
            </div>
            <div className="Reviews">
                <p>{props.Reviews}</p> 
            </div>

            <div>
                <button className="btn" onClick={handleAdd}>Add to cart</button>
            </div>
            </div>
       
    );
}

export default Cards;