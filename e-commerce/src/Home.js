import React from "react";
import Website from "./Component/Website";
import Parallex from "./Component/Parallex";
import Carasoul from './Component/Carasoul';
import Props from "./Component/Props";
import Divline from "./Component/Divline";
import Info from "./Component/Info";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

function Home(){

  function mapping(props)
{
  return( <Props
   Sign = {props.Sign}
   heading = {props.heading}
    description = {props.description}
    />);
}

    return(
        <div>
          <Navbar />
             <Website />
     <Parallex />
      <div className='grid-container'>{Info.map(mapping)}</div> 
       <Divline /> 
      <Carasoul />
      <Footer />
        </div>
    )
}
export default Home;