import React from "react";
import "./Props.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

function Props (props) {
    return ( 
    <div className="grid-item">
       <div className="sign"><h1> {props.Sign} </h1></div>
       <div className="heading"><h3> {props.heading} </h3></div>
       <div className="description"><p> {props.description} </p></div>
    </div>
    )
    
}

export default Props;