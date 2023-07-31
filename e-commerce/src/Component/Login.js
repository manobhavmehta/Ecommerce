import React, { useState } from "react";
import "./Login.css";
// import Navbar from "./Navbar";
import {Link, Navigate} from "react-router-dom";

function Login () {
  const [email,setemail] = useState("");
  const [pass,setpass] = useState("");
  const [redirect,setredirect] = useState(false);

   async function loginned (e){
    e.preventDefault();
    const  response = await fetch('http://localhost:5000/login',{
      method: 'POST',
      body: JSON.stringify({email,pass}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    })
    if(response.status === 200)
    {
      alert("Done")
      setredirect(true);
    }
    else
    alert("Not");
   }
   if(redirect)
   {
    return <Navigate to={'/'} />
   }

    return (<div className="login" onSubmit={loginned}>
        {/* <Navbar /> */}
         <div className="outer">
           
            <div className="inner">

            <form>
            <h1>LOGIN</h1>
             <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                  <input type= "email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}
                  onChange={e=>{setemail(e.target.value)}}/>
             </div>
             <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type= "password" class="form-control" id="exampleInputPassword1" value={pass}
                  onChange={e=>{setpass(e.target.value)}}/>
             </div>
             <div className="registerlink"><p>New user?<Link to ="/register">Register</Link></p> </div>
             <button type="submit" className="btn  btn-lg">Login</button>
                    </form>

                </div>
            
         </div>
    </div>
    )
}

export default Login;