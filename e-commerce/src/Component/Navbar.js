import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './Navbar.css'
// import { response } from "express";

const Navbar = () =>{
  const [username,setusername] = React.useState(null);
  const [showicon , setshowicon] = React.useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/profile',{
      credentials: 'include'
    }).then(response =>{
        response.json().then(userInfo  =>{
          setusername(userInfo.email);
    }).catch(err=>console.log(err));
      }).catch(err =>{
        console.log(err);
      })
   
  })

function logout(){
  fetch('http://localhost:5000/logout',{
    credentials: 'include',
    method: 'POST'
  })
  setusername(null);
}

  return( <div className="nav-bar">

<div className="title">
  <h2>🏡House2Home</h2>
</div>


<div className={showicon ? "after-click links" : "links" }>
  <ul>
  <li>
  <Link to = '/'>Home</Link>
  </li>

  <li>
  <Link to = '/about'>About</Link>
  </li>

  <li>
  <Link to = '/products'>Products</Link>
  </li>

  {!username && <li>
  <Link to = '/login'>Login</Link>
  </li>}

  {username && <li>
  <a className="anchortag" onClick={logout}>Logout</a>
  </li>}

  <li>
    <Link to= '/contact'>Contact Us</Link>
  </li>
</ul>


</div>


{username && <div className="cart">

  <Link to="/cart"><h3><i className="fa-solid fa-cart-arrow-down"></i></h3></Link>
  <a onClick={() => setshowicon(!showicon)}><i className="fa-solid fa-bars"></i></a>
  
</div>}



  </div>
  
/*<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand">🏡HousetoHome.com</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to ="/">Home </Link>
        </li>
        <li className="nav-item">
          <Link to ="/about" >About </Link>
        </li> 
        {/* <li className="nav-item">
          <Link className="nav-link active"  to ="/">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  to ="/">SignUp/Login</Link>
        </li> }
        
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">🔍</button>
      </form>
    </div>
  </div>
</nav> */
  ) 
}

export default Navbar;