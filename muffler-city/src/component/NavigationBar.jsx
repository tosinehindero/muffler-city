// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../style/style.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { useAuth } from "./store/Auth-Context";

export default function NavigationBar() {
   const { isLoggedIn, userEmail, custEmail, logout, Custlogout, isCustLoggedIn } =
      useAuth();

   const handleLogout = () => {
      logout();
      Custlogout();
   };

   return (
      <Navbar expand="lg" bg="dark" variant="dark" className="nav-bar" fixed="top">
         <Container fluid>
            <Navbar.Brand as={Link} to="/">
               <img src={logo} alt="logo" className="logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
               >
                  <Nav.Link as={Link} to="/">
                     Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/services"}>
                     Services
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/aboutus"}>
                     About us
                  </Nav.Link>
                  {isLoggedIn && (
                     <Nav.Link as={Link} to={"/dashboard"}>
                        dashboard
                     </Nav.Link>
                  )}
                  <NavDropdown title="More" id="navbarScrollingDropdown">
                     <NavDropdown.Item as={Link} to={"/customeraccesspage"}>
                        Customer account acces
                     </NavDropdown.Item>
                     <NavDropdown.Item as={Link} to={"/scheduleservice"}>
                        Schedule a service
                     </NavDropdown.Item>
                     <NavDropdown.Item as={Link} to={"/action4"}>
                        Career - we are Hiring
                     </NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item as={Link} to={"/adminaccesspage?mode=login"}>
                        Admin access
                     </NavDropdown.Item>
                  </NavDropdown>
               </Nav>

               {isLoggedIn || isCustLoggedIn ? (
                  <h6 style={{ color: "white", marginRight: "1rem" }}>
                     {userEmail || custEmail}
                  </h6>
               ) : (
                  ""
               )}
               {isLoggedIn || isCustLoggedIn ? (
                  <Button onClick={handleLogout} variant="outline-light">
                     logout
                  </Button>
               ) : (
                  ""
               )}
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}
