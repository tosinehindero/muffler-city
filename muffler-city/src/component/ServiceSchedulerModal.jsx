/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ServiceDatePicker from './ServiceDatePicker';


function ServiceSchedulerModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Please feel out service form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Include vehicle Information</h4>
        <Form variant="dark">

         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Vehicle Year</Form.Label>
            <Form.Control type="text" placeholder="vehicle Year" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Vehicle Make</Form.Label>
            <Form.Control type="text" placeholder="Make" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Vehicle Model</Form.Label>
            <Form.Control type="text" placeholder="Vehicle Model" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Select Date</Form.Label>
            <ServiceDatePicker />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Service needed</Form.Label>
            <Form.Control as="textarea" rows={8} />
         </Form.Group>
         <Button
            variant='dark'
            type="submit"
            style={{ padding: "0.5rem 4rem" }}
            className="button-sch2"
         >
            Schedule Service
         </Button>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ServiceSchedulerModal
