import React from "react";
import { Parallax} from "react-parallax";
import "./About.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About () {
    return (<div>
        <Navbar />
        <div className="Image">

            <Parallax strength={300} bgImage="https://images1.apartments.com/i2/c2YAvuM-JU2tl_oGYlVwM3cNdgF6jdWaVUi_hSaM6wU/111/toscana-at-rancho-del-rey-chula-vista-ca-primary-photo.jpg?p=1" bgImageAlt="the cat">
           <div className="yo" >
           <div className="heading"><h2>Want to Build your Dream house in Budget.</h2></div> 
           <div className="link"><a href="mailto:manobhavmehta88@gmail.com">GET IN TOUCH</a></div>
           </div>
           </Parallax>
        </div>
        <h1 className="h">The Best Construction Company in India</h1>
       <div className="Para"> <p>We provide customers the materials that their respective labours,plumbers,Electricians etc demand for while you are out, in constructing your dream Home or Shop . You can contact us also if you need help in any part of construction,not finding architect we are there for you. House2Home has achieved a remarkable reputation as one of the best construction companies in India and has also gained healthy experience in all types of design and build, house renovation, home extension, basement conversion, loft conversion, loft extension and kitchen extension jobs. We are always dedicated to understanding your potential requirements and convert it into reality through our expert and affordable solutions. All our works are guaranteed to exceed industry standards and building construction criteria set forth by the local authorities.</p></div>
       <Footer />
        </div>
    );
}

export default About;