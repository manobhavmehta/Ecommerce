import React, { useContext } from "react";
// import { CartContext } from "./Context";
import { useEffect ,useState} from "react";
import Navbar from "./Navbar";
import { json } from "react-router-dom";

function Addtocart()
{
    // const [image,setimage] = useState('');
    // const [price,setprice] = useState('');
    // const [review,setreview] = useState('');
    // const [name,setname] = useState('');
    

    const [cart , setCart] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/addtocart',{
          credentials: 'include',
        }).then(response =>{
            response.json().then(cart=>{
                setCart(cart);
            })
        })
    },[])


    function mapping(key)
    {
        async function removeele(){
            console.log(key.name);
            const response = await fetch('http://localhost:5000/delpro',{
                method:'POST',
                body: JSON.stringify({name:key.name}),
                headers: {'Content-Type':'application/json'}, 
                credentials:'include',
            });
            if(response.status===200){
                response.json().then(cart=>{setCart(cart)});
            }
        }
        return(
            <>
                <tr>
                    <td><img src={key.image}></img></td>
                    <td>{key.name}</td>
                    <td>{key.price}</td>
                    <td>{key.review}</td>
                    <td><button onClick = {removeele}className="btn">Remove</button></td>
                </tr>
            </>
        )
    }
    return (
        <>
        <Navbar />
        <div className="outer">
            <div className="inner">
        
        <table className="head" >
            {cart.length === 0 && <div>Explore and add Items in your cart.</div>}
            {cart.length!==0 && <thead>
                <th>Item</th>
                <th>Name</th>
                <th>Price</th>
                <th>Reviews</th>
            </thead>}
            
            {cart.length != 0 &&
            cart.map(mapping)}
            
        </table>
        </div>
        </div>
        </>
    )
}

export default Addtocart;