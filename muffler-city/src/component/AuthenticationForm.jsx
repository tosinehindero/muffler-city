/* eslint-disable no-unused-vars */
import React from "react";
import users from "./data/Users";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./store/Auth-Context";
import axios from "axios";

function AuthenticationForm() {
   const { isLoggedIn, login, logout, userEmail } = useAuth();
   const [searchParams] = useSearchParams();
   const [error, setError] = useState("");
   const isLogIn = searchParams.get("mode") === "login";
   const navigate = useNavigate();

   const endpoint = isLogIn
      ? `http://localhost:3001/mufflerroutes/login`
      : `http://localhost:3001/mufflerroutes/register`;

   const onHandleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);

      const data = Object.fromEntries(formData);

      if (isLogIn) {
         try {
            const response = await axios({
               method: "post",
               url: endpoint,
               data: data,
               withCredentials: true,
               headers: { "Content-Type": "application/json" },
            });

            const { token, email, username, status } = response.data;

            if (token && email) {
               login(email, token); // Adjust based on your context logic
               console.log("redirecting ");
               navigate("/dashboard"); // Navigate to a protected route after login
            } else {
               // Handle the case where login/signup was successful but no token was returned
               console.error("Token or email missing from response");
               setError("Login/Signup was successful but no token was returned.");
            }
         } catch (error) {
            console.error("Login/Signup error:", error);
            setError("An error occurred during login/signup.");
         }
      } else {
         try {
            const response = await axios({
               method: "post",
               url: endpoint,
               data: data,
               withCredentials: true,
               headers: { "Content-Type": "application/json" },
            });

            if (response.status === 201) {
               navigate("/adminaccesspage?mode=login");
               alert("you can now log in with your credentials");
               console.log("you are now registered frontend");
            }
         } catch (error) {
            console.error("Signup error:", error);
         }
         console.log("register");
      }
   };

   return (
      <>
         <div className="access-title">
            <p>{isLogIn ? "Log-in" : "Create New Acount "} </p>
            <h6>{isLoggedIn ? ` welcome ${userEmail}` : " "} </h6>
         </div>
         <div className="access-form">
            <Container>
               <Row>
                  <Col></Col>
                  <Col lg={6}>
                     <Form method="post" onSubmit={onHandleSubmit}>
                        <Form.Group
                           className="mb-3"
                           controlId="exampleForm.ControlInput1"
                        >
                           <Form.Label>Username </Form.Label>
                           <Form.Control
                              type="text"
                              size="md"
                              placeholder="username"
                              name="username"
                              required
                           />
                        </Form.Group>
                        <Form.Group
                           className="mb-3"
                           controlId="exampleForm.ControlInput2"
                        >
                           <Form.Label>Email </Form.Label>
                           <Form.Control
                              type="email"
                              size="md"
                              placeholder="name@example.com"
                              name="email"
                              required
                           />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPlaintextPassword">
                           <Form.Label>Password</Form.Label>
                           <Form.Control
                              type="password"
                              size="md"
                              placeholder="password"
                              name="password"
                              required
                           />
                        </Form.Group>
                        <div className="d-flex justify-content-start ">
                           <Link to={`?mode=${isLogIn ? "signup" : "login"}`}>
                              {isLogIn ? "Register New User" : "login"}
                           </Link>
                           <Button variant="light" className="admin-btn" type="submit">
                              {isLogIn ? "Login" : "Submit"}
                           </Button>
                        </div>
                     </Form>
                  </Col>
                  <Col></Col>
               </Row>
            </Container>
         </div>
      </>
   );
}

export default AuthenticationForm;
