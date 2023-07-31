import React from "react";
import "./Footer.css";

function Footer ()
{
    return(
        <div className="footer">


        <div className="text">
<p>© copyright 2015-2022 || House2Home.com</p>
<p>All Rights Reserved</p>
<p>Located in</p>
<p>Delhi || Mumbai || Banglore || Noida || Gurgaon || Hyderabad </p>
        </div>


        <div className="Icons">
       <div className="LinkedIn"> <a href=""> <i class="fa-brands fa-linkedin"></i> </a> </div>
       <div className="Insta"> <a href=""> <i class="fa-brands fa-square-instagram"></i>  </a></div>
       <div className="YouTube"> <a href=""> <i class="fa-brands fa-youtube"></i> </a> </div>
       <div className="Twitter"> <a href=""> <i class="fa-brands fa-twitter"></i>  </a></div>
       <div className="Facebook"> <a href=""> <i class="fa-brands fa-square-facebook"></i>  </a></div>
        </div>


        </div>
    )
}

export default Footer;