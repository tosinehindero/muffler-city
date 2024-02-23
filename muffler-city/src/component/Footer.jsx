// eslint-disable-next-line no-unused-vars
import React from "react";
import "../style/style.css";
import { NavLink } from "react-router-dom";

export default function Footer() {


   return (
      <footer className="footer">
         <div  className="footer-div">
            <span className="footerText">
               &copy; {new Date().getFullYear()} MufflerCity. All rights reserved.
            </span>
         </div>
         <div>
            <NavLink to="/customeraccesspage">Log in to your customer account</NavLink>
         </div>
      </footer>
   );
}
