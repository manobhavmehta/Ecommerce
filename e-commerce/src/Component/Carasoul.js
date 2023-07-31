import React from "react";
import "./Carasoul.css"

function Carasoul (){
    
  return (<div className= "carousel">
  <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
<div className="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div className="carousel-inner">
<div className="carousel-item active" data-bs-interval="4000">
<img src="https://www.4mgroup.co.uk/foto.php?foto=/projects/20130802173925143.jpg&width=990&height=660https://api.qanvast.com/image/106475_0fce7ada43/standard" className="d-block w-100" alt="..." />
<div className="carousel-caption d-none d-md-block">
  
  
</div>
</div>
<div className="carousel-item" data-bs-interval="4000">
<img src="https://st.hzcdn.com/simgs/pictures/living-rooms/hdb-segar-palmview-549b-segar-road-carpenters-com-sg-img~ef91a5eb05fa3d63_4-7697-1-535857e.jpg" className="d-block w-100" alt="..." />
<div className="carousel-caption d-none d-md-block">
  
  
</div>
</div>
<div className="carousel-item">
<img src="https://www.dkorinteriors.com/wp-content/uploads/2014/09/A-Miami-Modern-Home-3.jpg" className="d-block w-100" alt="..." />
<div className="carousel-caption d-none d-md-block">
  
  
</div>
</div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</button>
</div>




</div> 
    );
}

export default Carasoul;