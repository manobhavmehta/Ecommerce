import React from 'react';
import './App.css';
import Divline from "./Component/Divline";
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./Component/Register";
import About from './Component/About';
import Login from "./Component/Login";
import Products from "./Component/Products";
import Contact from "./Component/Contact";
import Addtocart from "./Component/Addtocart";
import { useState } from 'react';
import { CartContext } from './Component/Context';
// import Navbar from './Component/Navbar';

function App() {
  const [cart , setCart] = useState([]);


  return (

   <div className='App'>
    <CartContext.Provider value={{cart,setCart}}>
<Router basename={process.env.PUBLIC_URL}> 
<Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/register" element= {<Register />} />
    <Route exact path="/products" element={<Products />} />
    <Route exact path="/contact" element={<Contact />} />
   <Route exact path="/cart" element={<Addtocart />} />
   {/* <Route exact path="/logout" element={<Navbar />} /> */}

</Routes>
</Router>
</CartContext.Provider>
    
    </div>
  );
}

export default App;
