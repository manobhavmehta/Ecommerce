import React from "react";
import { useState } from "react";
import "./Contact.css"
import Navbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import Footer from "./Footer";
import Collapse from 'react-bootstrap/Collapse';

function Contact(){
    
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [query,setquery] = useState('');

    const changename = (event) => {
        setname(event.target.value);
    }
    const changemail = (event) => {
        setemail(event.target.value);
    }
    const changequery = (event) =>{
        setquery(event.target.value);
    }

    const [tablevalues,settablevalues] = useState([]);

    const submitted = (event) => {
        event.preventDefault();
        const lst = {name,email,query};
        
        
        settablevalues([...tablevalues,lst]);
        
        

        
        
    }
  
        async function Query(e){
            e.preventDefault(); 
      const response=await fetch('http://localhost:5000/query',{
        method: 'POST',
        body: JSON.stringify({name,email,query}),
        headers: {'Content-Type':'application/json'},
    })
        if(response.status===200){ 
          
          alert('Your Query is sent.');
        setemail(''); 
        setname('');
        setquery('');
        }
        else
          alert('Try Again');
        }
    return (
        <>
        <Navbar />
    <div className="outer">
        <div className="inner">
            <form onSubmit={Query}>
                <label for="Name">Name: </label>
                <input type="text" 
                value={name}
                onChange={changename}
                ></input>

                <label for="Mail">Email: </label>
                <input type="email" 
                value={email}
                onChange={changemail}
                ></input>

                <label for="Query">Query: </label>
                <input type="text" 
                value={query}
                onChange={changequery}
                ></input>

                <button className="btn"type="submit">Send</button>
            </form>
        </div>
    </div>
    {/* <h2 id="heading"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} >
      
        Your Query
        </h2>
        
      <Collapse in={open}>
        <div id="example-collapse-text">
        <div id="tables">
            <table id="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Query</th>
                    </tr>
                    
                        {tablevalues.map(mapping)}
                    
                    
                </thead>
            </table>
        </div>
        </div>
      </Collapse> */}
            
         
            <Footer />
        </>

    )
}

export default Contact;