/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../style/style.css";

function ContactUs({ backgroundColor, children }) {
   const [buttonColor, setButtonColor] = useState("dark");

   useEffect(() => {
      if (backgroundColor === "black") {
         setButtonColor("light");
      } else {
         setButtonColor("dark");
      }
   }, [backgroundColor]);

   return (
      <Form variant="dark">
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="name" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" placeholder="phone number" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>let us know what question you may have</Form.Label>
            <Form.Control as="textarea" rows={3} />
         </Form.Group>
         <Button
            variant={buttonColor}
            type="submit"
            style={{ padding: "0.5rem 4rem" }}
            className="button-sch2"
         >
            Submit
         </Button>
      </Form>
   );
}

export default ContactUs;
