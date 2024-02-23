// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "react-bootstrap/Button";
import "../style/style.css";
import mechpic1 from "../assets/mechpic1.jpg";
import axel from "../assets/axel.png";
import catalytic from "../assets/catalytic.png";
import performance from "../assets/performance.png";
import emissions from "../assets/emissions.png";
import brake from "../assets/brake.png";
import carepair from "../assets/carepair.png";
import clutche from "../assets/clutche.png";
import appl from "../assets/applyimage.jpeg";
import Testimonialcard from "./testimonialcard";
import ContactUs from "./ContactUs";
import Map from "./map";



function Home() {

const backgroundStyle = "white";


   return (
      <>
         <div className="main-container1">
            <div className="div1">
               <div className="welcom-statement1">
                  <h1>Welcome to Muffler City</h1>
               </div>
               <div className="welcom-statement2">
                  
                     <h2>Muffler & Catalytic Converter Services Atlanta, GA</h2>
                     <h3>
                        <span>Financing Available!</span>
                     </h3>
                  
               </div>
               <div className="welcom-statement3">
                  <p>
                     Muffler City is your Under Car Specialists! Whether you need to
                     replace your muffler, catalytic converter repair, emissions
                     testing, new brakes, CV Axles Repair, Clutches etc{" "}
                  </p>
               </div>
               <div className="button1">
                  <Button variant="dark">Schedule service</Button>{" "}
               </div>
            </div>
            <div className="div2">
               <div className="offer-statement">
                  
                     <h3>
                        We offer a broad-spectrum services which keep your car in
                        tip-top condition
                     </h3>
                  
               </div>
               <div className="image-mech">
                  <img src={mechpic1} className="mech1" alt="Descriptive Alt Text" />
               </div>
            </div>
         </div>
         <div className="main-container2">
            <div className="service-images">
               <div>
                  <img src={catalytic} alt="image" className="serv-img" />

                  <h3>Catalytic Converters</h3>
               </div>
               <div>
                  <img src={brake} alt="image" className="serv-img" />

                  <h3>Brake Services & Repairs</h3>
               </div>
               <div>
                  <img src={carepair} alt="image" className="serv-img" />

                  <h3>General Car Repair & Maintenance</h3>
               </div>
               <div>
                  <img src={clutche} alt="image" className="serv-img" />

                  <h3>Clutches & Transmissions</h3>
               </div>
            </div>
            <div className="service-images">
               <div>
                  <img src={emissions} alt="image" className="serv-img" />

                  <h3>emissions</h3>
               </div>
               <div>
                  <img src={performance} alt="image" className="serv-img" />

                  <h3>performance</h3>
               </div>
               <div>
                  <img src={axel} alt="image" className="serv-img" />
                  
                     <h3>CV Axles Repair & Replacement</h3>
                  
               </div>
            </div>
            <hr className="line"></hr>
            <div className="apply-image">
               <img src={appl} alt="image" className="apimage" />
            </div>
            <hr className="line"></hr>
         </div>
         <div className=" main-contaioner4">
            <div className="div-1">
               <div>
                  <hr className="line2"></hr>
               </div>
               <div>
                  <h2>Muffler City Car Repair and Maintenance Services in Atlanta</h2>

                  <p>
                     We offer a broad-spectrum services which keep your car in tip-top
                     condition. Our services include the following
                  </p>

                  <h3>Catalytic Converter Services Atlanta</h3>

                  <p>
                     The catalytic converter is a key part in any vehicle and controls
                     the emission system. A faulty catalytic converter will lead to
                     failed emission tests. If your cars muffler exhaust system is
                     generating black or dark colored smoke, or giving a horrible odor,
                     then your catalytic converter probably needs replacement. If you
                     suspect that your car has a damaged converter, then schedule a
                     quick appointment with our professional catalytic converter
                     replacement services. We provide catalytic converter installation
                     and replacement for nearly all makes of cars.
                  </p>

                  <h3>Muffler Services Atlanta</h3>

                  <p>
                     When your cars muffler encounter a problem there may be deep, loud
                     and rumbling sounds with an exhaust leak. This can be a cracked or
                     rusty muffler pipe or exhaust, bad gasket or joint, or a hole in
                     your cars exhaust system, which leads to problems in the muffler.
                     The issues in the muffler of your car can lead to failure of
                     vehicle emission test. In this case, your car needs exhaust system
                     repair or replacement. Our certified mechanics help with quick
                     diagnosis and repair your cars exhaust system, which enables you
                     to easily pass the emission test. We specialize in providing
                     muffler repair or replacement services in Atlanta for all brands
                     and models of cars.
                  </p>
               </div>
               <hr className="line3"></hr>
            </div>
            <div className="div-2">
               <div>
                  <hr className="line4"></hr>
               </div>
               <h2>Car Diagnostics Services</h2>
               <p>
                  The latest cars are equipped with onboard computer systems that
                  indicate any problems in your car and give you warning in case
                  something goes wrong. Our expert car diagnostics services help
                  diagnose the problem that your car might be facing. The onboard
                  computer system in your car helps us in the identification of the
                  issue. By finding the precise problem, we are able to resolve it
                  efficiently.
               </p>
               <h2>Car Repair Atlanta</h2>
               <p>
                  Our specialist car repair services encompass all kinds of car repairs
                  from brake to muffler and exhaust repair, catalytic converter to
                  electrical wiring and engine repair and much more. Our experts
                  thoroughly inspect your car before undertaking any types of repairs
                  and give recommendations based on their investigations. This helps
                  you take an informed decision regarding your car repair and
                  maintenance, saving your time and money.
               </p>
               <div>
                  <br></br>
                  <Button
                     variant="dark"
                     className="button-sch"
                     style={{ padding: "0.5rem 4rem" }}
                  >
                     Schedule service
                  </Button>{" "}
               </div>
            </div>
         </div>

         <div className=" main-contaioner3">
            <Testimonialcard />
         </div>
         <div className="main-container5" style={{backgroundStyle:backgroundStyle}}>
            <div className="contact-form">
               <h2>Please leave us a message</h2>
               <ContactUs backgroundColor={backgroundStyle} />
            </div>
            <div className="map">
               <Map />
            </div>
         </div>

         
      </>
   );
}

export default Home;
