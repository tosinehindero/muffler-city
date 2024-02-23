/* eslint-disable no-unused-vars */
import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useAuth } from "./store/Auth-Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CustomerAuthForm() {
   const navigate = useNavigate();
   const { Custlogin, isCustLoggedIn } = useAuth();
   const [error, setError] = useState("");
   const [searchParams] = useSearchParams();
   const isCustlogin = searchParams.get("mode") === "login";

   const endpoint = isCustlogin
      ? `http://localhost:3001/mufflerroutes/custlogin`
      : `http://localhost:3001/mufflerroutes/custregister`;

   const HandleCustformSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);

      const data = Object.fromEntries(formData);

      let payload = {
         fullname:data.fullname,
         username: data.username,
         email: data.email,
         phone_number:data.phone_number,
         password: data.password,
      };

      if (isCustlogin) {
         try {
            // Construct the configuration object for Axios request
            const response = await axios({
               method: "post", // Assuming the login API expects a POST request
               url: endpoint, // Replace with your actual login API endpoint /customeraccesspage
               data: payload,
               withCredentials: true, // If you need to include cookies for cross-origin requests
               headers: { "Content-Type": "application/json" },
            });
               console.log(response.data)
            const { token, email} = response.data;
            if (token && email) {
               Custlogin(email, token);
               console.log("redirecting ");
               navigate("/"); // Navigate to a protected route after login
            } else {
               // Handle the case where login/signup was successful but no token was returned
               console.error("Token or email missing from response");
               setError("Login/Signup was successful but no token was returned.");
            }
         } catch (error) {
            console.error("Login error:", error);
            setError("An error occurred during login/signup.");
         }
      } else {
         try {
            const response = await axios({
               method: "post",
               url: endpoint,
               data: payload,
               withCredentials: true,
               headers: { "Content-Type": "application/json" },
            });

            if (response.status === 201) {
               navigate("/customeraccesspage?mode=login");
               alert("you can now log in with your customer credentials");
               console.log("you are now registered frontend");
            }
         } catch (error) {
            console.error("Signup error:", error);
         }
      }
   };

   return (
      <div className="custAuth-form">
         <h2>Customer Account Access</h2>
         <h6>{isCustlogin ? "Log-in with credentials" : "Create New Acount "}</h6>
         <br></br>
         <Form method="post" onSubmit={HandleCustformSubmit}>
            {!isCustlogin ? (
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Fullname</Form.Label>
                  <Form.Control
                     type="text"
                     placeholder="fullname"
                     name="fullname"
                     required
                     maxLength={20}
                     minLength={1}
                  />
               </Form.Group>
            ) : (
               ""
            )}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
               <Form.Label>Username</Form.Label>
               <Form.Control
                  type="text"
                  placeholder="create username"
                  name="username"
                  required
                  maxLength={12}
                  minLength={4}
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
               <Form.Label>Email address</Form.Label>
               <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  required
               />
            </Form.Group>
            {!isCustlogin ? (
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                     type="text"
                     placeholder="phone number"
                     name="phone_number"
                     required
                     minLength={10}
                  />
               </Form.Group>
            ) : (
               ""
            )}

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
               <Form.Label>password</Form.Label>
               <Form.Control
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  maxLength={12}
                  minLength={4}
               />
            </Form.Group>
            <Link to={`?mode=${isCustlogin ? "signup" : "login"}`}>
               {isCustlogin ? "Create new customer account" : "login"}
            </Link>
            <Button variant="light" className="admin-btn" type="submit">
               {isCustlogin ? "Login" : "Submit"}
            </Button>
         </Form>
      </div>
   );
}

export default CustomerAuthForm;
