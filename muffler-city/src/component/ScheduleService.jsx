/* eslint-disable no-unused-vars */
import React from "react";
import ContactUsModal from "./ContactUsModal";
import Button from "react-bootstrap/Button";
import PicCarousel from "./PicCarousel";

function ScheduleService() {
   const [modalShow, setModalShow] = React.useState(false);

   return (
      
         <div className="schedule-container">
               <h1>
                  <strong>A little More About The Services We Offer </strong>
                  <hr></hr>
               </h1>
            <div>
               <h3>Services Available at Muffler City</h3>
               <p>
                  At Muffler City, we want to be your go-to auto service specialists.
                  Whatever problem your vehicle may be experiencing, understand that we
                  have the professionals and services to ensure it’s performing at its
                  best. We are a full-service auto repair shop that happily accepts all
                  makes and models. Our services, which are performed with
                  state-of-the-art equipment & components, include general repair,
                  preventative maintenance, tune-ups, engine light diagnostics, brake
                  repair, suspension repair, engine repair, heating & cooling services,
                  transmission repair, and more! Whatever your auto needs may be, know
                  that our team can get the job done right the first time. But we don’t
                  have services just for your vehicle, as we also offer conveniences
                  for you! We understand it can be inconvenient to have your vehicle
                  serviced. If you have places to be during your visit, we offer loaner
                  vehicles to help get you where you need to go. We’ll make sure you
                  know how your car is doing as well, so you know when it’s time to
                  return to our shop!
               </p>
            </div>
            <div>
               <h3>Trained Automotive Professionals</h3>
               <p>
                  We understand that it takes more than a comprehensive list of auto
                  services and state-of-the-art equipment to bring the best out of your
                  vehicle. For your car to receive top-quality care, it must be
                  serviced by qualified professionals that truly understand
                  automobiles, and we can provide just that. Our ASE Certified
                  technicians are some of the best in the business, as they carry over
                  100 years of combined auto service experience. Along with that, they
                  also go through regular training to stay updated on everything new
                  going on within the industry. Regardless if your Oldsmobile needs
                  transmission repair or your BMW needs an oil change, our technicians
                  are prepared for any vehicle and problem you may have. Our team also
                  takes time to answer any questions you may have and provide insight &
                  tips on how to properly handle your vehicle. We’ll make sure you’re
                  armed with all the information you need so that you can take care of
                  your car inside and out of our shop!
               </p>
            </div>
            <div>
               <h3>Schedule a Service!</h3>
               <p>
                  Is your vehicle in need of its next maintenance service? Or maybe the
                  transmission system requires a comprehensive repair? Whatever your
                  automotive needs may be, know that the team at Stephen’s Automotive
                  is ready and waiting to help you and your vehicle. Our shop in
                  Rockville, Virginia, is stocked with state-of-the-art equipment and
                  the finest ASE Certified technicians in the industry. Our technicians
                  will make sure that your vehicle is always performing at its best,
                  and our service writer will make sure you always know what’s going on
                  with your car. From wheel alignments to transmission repair, we make
                  sure to get the job done right! Give us a call at (804) 374-9328 to
                  schedule your service appointment today! Our service writer is ready
                  and waiting to help you. If you’re in the area, feel free to stop by
                  our shop on 2382-A Lanier Road and schedule your visit in person! We
                  look forward to providing sustainable auto service solutions for you
                  and your vehicle!
               </p>
            </div>

            <div>
               <Button variant="dark" onClick={() => setModalShow(true)}>
                  Select here to schedule service
               </Button>

               <ContactUsModal show={modalShow} onHide={() => setModalShow(false)} />
            </div>
            <div className="service-description">
               Is your vehicle in need of its next maintenance service? Or maybe the
               transmission system requires a comprehensive repair? Whatever your
               automotive needs may be, know that the team at Stephen’s Automotive is
               ready and waiting to help you and your vehicle. Our shop in Rockville,
            </div>
            <div className="pic-carousel">
            <PicCarousel />
         </div>
         </div>
      
   );
}

export default ScheduleService;
