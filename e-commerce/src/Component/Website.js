import React from "react";
import {Link} from "react-router-dom";
import Typewriter from "typewriter-effect";
import "./Website.css";



function Website () {
  var tar = document.getElementById('txt');
  var typewriter = new Typewriter(tar, {
    loop: true,
    delay: 75,
  });
    return ( 
<div className="full">


  <div className="Left">
<img src="https://th.bing.com/th/id/R.3884f91e785b21a7166b548f61956651?rik=OGxJaumvKQCV5A&riu=http%3a%2f%2fwww.thexerxes.com%2fwp-content%2fuploads%2f2018%2f10%2fHome-Renovation.jpg&ehk=16X1Y%2bpfcXsS2qmFDa%2blN6YjS%2f5xLUftrosCCsVWNm4%3d&risl=&pid=ImgRaw&r=0" />
  </div>


  <div className="Right">
    <div className="InnerRight ">

   <h2 id="txt"><Typewriter
 options={{
  autoStart: true,
  loop: true,
}}
 onInit={(typewriter) => {
     typewriter
         .typeString("Get Best Products that will make your House Modern.")
         .pauseFor(100)
         .deleteAll()
         .start();
         
 }}
/></h2>
   <h5>
    Click on the button below and start exploring the products that suits your house the best and all other tools,materials etc that you require while renovating your house. Our vision is to provide you best quality Products at your doorstep within few hours like you are ordering food.
    This will help you to complete your house without any hassle.
   </h5>
   <h4>Start Exploring to view Products for your Home</h4>
   <div className="d-grid gap-2 col-6 mx-auto">
   <Link to ="/products"><button type="button" className="btn btn-dark btn-primary btn-lg">Explore</button></Link>
   </div>
      </div>
  </div>
</div>
    );
}

export default Website;