import React ,{useState} from "react";
import {Link, Navigate} from "react-router-dom";

import Navbar from "./Navbar";

function Register(){
  
  const [email , setEmail] = useState("");
  const [name , setName] = useState("");
  const [pass , setPass] = useState("");
  const [cpass,setCpass] = useState("");
  const [redirect,setredirect] = useState(false);
  

  async function registration(e){
    e.preventDefault(); 
      const response=await fetch('http://localhost:5000/register',{
        method: 'POST',
        body: JSON.stringify({email,name,pass,cpass}),
        // credentials: "include",
        headers: {'Content-Type':'application/json'},})
        if(response.status===200){ 
          setredirect(true);
          alert('registration sucessful');
        }
        else
          alert('Wrong Credentials');
          
    }

  if(redirect)
    return <Navigate to={'/'} />
  
    return (
        <div>
            <Navbar />
            <div className="outer">
           
            <div className="inner">

            <form onSubmit={registration}>
            <h1>REGISTER</h1>
             <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" placeholder="Email">Email</label>
                  <input type= "email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                  value={email}
                  onChange={e=>{setEmail(e.target.value)}}
                  />
             </div>
             <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label" placeholder="Password">Name</label>
                    <input type= "Text" name="name" class="form-control" id="exampleInputName"
                    value={name}
                    onChange={e=>{setName(e.target.value)}}
                    />
             </div>
             <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" placeholder="Enterpass">Enter Password</label>
                  <input type= "password" name="pass" class="form-control" id="exampleInputPassword1" aria-describedby="emailHelp"
                  value={pass}
                  onChange={e=>{setPass(e.target.value)}}
                  />
             </div>
             <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" placeholder="Confirmpass">Confirm Password</label>
                  <input type= "password" name="confirmpass" class="form-control" id="exampleInputPassword2" aria-describedby="emailHelp" 
                  value={cpass}
                  onChange={e=>{setCpass(e.target.value)}}
                  />
             </div>
             <div className="registerlink"><p>Already have an account? <Link to="/login">Login</Link></p></div>
             <button className="btn  btn-lg">Sign Up</button>
             
                    </form>

                </div>
            
         </div>

        </div>
    );
}

export default Register;