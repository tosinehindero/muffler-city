/* eslint-disable no-unused-vars */
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../style/style.css";
import ContactUs from "./ContactUs";

function Services() {

    const backgroundStyle = 'black';

   return (
      <div className="service-container">
         <h1>Check-out Services Offered</h1>
         <hr className="line"></hr>
         <Accordion className="accordion-services">
            <Accordion.Item eventKey="0">
               <Accordion.Header>
                  Catalytic Converter Services Atlanta
               </Accordion.Header>
               <Accordion.Body>
                  The catalytic converter is a key part in any vehicle and controls the
                  emission system. A faulty catalytic converter will lead to failed
                  emission tests. If your car’s muffler exhaust system is generating
                  black or dark colored smoke, or giving a horrible odor, then your
                  catalytic converter probably needs replacement. If you suspect that
                  your car has a damaged converter, then schedule a quick appointment
                  with our professional catalytic converter replacement services. We
                  provide catalytic converter installation and replacement for nearly
                  all makes of cars.
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
               <Accordion.Header>Muffler Services Atlanta</Accordion.Header>
               <Accordion.Body>
                  When your car’s muffler encounter a problem there may be deep, loud
                  and rumbling sounds with an exhaust leak. This can be a cracked or
                  rusty muffler pipe or exhaust, bad gasket or joint, or a hole in your
                  car’s exhaust system, which leads to problems in the muffler. The
                  issues in the muffler of your car can lead to failure of vehicle
                  emission test. In this case, your car needs exhaust system repair or
                  replacement. Our certified mechanics help with quick diagnosis and
                  repair your car’s exhaust system, which enables you to easily pass
                  the emission test. We specialize in providing muffler repair or
                  replacement services in Atlanta for all brands and models of cars.
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
               <Accordion.Header>Car Diagnostics Services</Accordion.Header>
               <Accordion.Body>
                  The latest cars are equipped with onboard computer systems that
                  indicate any problems in your car and give you warning in case
                  something goes wrong. Our expert car diagnostics services help
                  diagnose the problem that your car might be facing. The onboard
                  computer system in your car helps us in the identification of the
                  issue. By finding the precise problem, we are able to resolve it
                  efficiently.
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
               <Accordion.Header>Car Repair Atlanta</Accordion.Header>
               <Accordion.Body>
                  Our specialist car repair services encompass all kinds of car repairs
                  from brake to muffler and exhaust repair, catalytic converter to
                  electrical wiring and engine repair and much more. Our experts
                  thoroughly inspect your car before undertaking any types of repairs
                  and give recommendations based on their investigations. This helps
                  you take an informed decision regarding your car repair and
                  maintenance, saving your time and money.
               </Accordion.Body>
            </Accordion.Item>
         </Accordion>
         <div className="contact-form2">
            <ContactUs backgroundColor={backgroundStyle}/>
         </div>
      </div>
   );
}

export default Services;
