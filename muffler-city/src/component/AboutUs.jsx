/* eslint-disable no-unused-vars */
import React from "react";
import Image from "react-bootstrap/Image";
import mechanic2 from "../assets/mechanic2.jpg";
import mechanic3 from "../assets/mechanic3.jpg";

const AboutUs = () => {
   return (
      <div className="aboutUs-container">
         <p>
            <h1>
               <strong>About us </strong>
            </h1>
         </p>
         <div className="about-statement1">
            <div >
            <Image src={mechanic2} rounded className="aboutus-image" />
            </div>
            <h5>The catalytic converter is a key part in any vehicle and controls
                     the emission system. A faulty catalytic converter will lead to
                     failed emission tests. If your cars muffler exhaust system is
                     generating black or dark colored smoke, or giving a horrible odor,
                     then your catalytic converter probably needs replacement.</h5>
         </div>
         <div className="about-statement2">
         <h5>The catalytic converter is a key part in any vehicle and controls
                     the emission system. A faulty catalytic converter will lead to
                     failed emission tests. If your cars muffler exhaust system is
                     generating black or dark colored smoke, or giving a horrible odor,
                     then your catalytic converter probably needs replacement.</h5>
            <div>
            <Image src={mechanic3} rounded />
            </div>
         </div>
      </div>
   );
};

export default AboutUs;
