/* eslint-disable no-unused-vars */
import React from "react";
import "./testimonial.css";
import headshot from "../assets/headshot.jpg";
import testimonialData from "./testimonials";

function Testimonialcard() {
   const testimonialDataMap = (tesimonial) => {
      return (
         <div key={tesimonial.id} className="testimonial-card">
         <div className="testimonial-image">
            <img src={tesimonial.image} alt="image" />
         </div>
         <div className="testimonial-content">
            <p>{tesimonial.testimonial}</p>
            <h4>{tesimonial.name}</h4>
         </div>
      </div>
      )
   };

   return <div className="inner-cardDive">{testimonialData.map(testimonialDataMap)}</div>;
}

export default Testimonialcard;
