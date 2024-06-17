import React from 'react';
import './Contact.css';
import { ContactInfo } from '../components/ContactInfo';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div className="contact-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-success">
            Contactos
          </h1>
        </div>
      </header>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center text-bg-info">
            <ContactInfo/>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <Form>
              <Form.Group className='col'>
                <Form.Label htmlFor='Nombre'>Nombres</Form.Label>
                <Form.Control type='text' id='nombre'/>
              </Form.Group>

              <Form.Group className='col'>
                <Form.Label htmlFor='apellido'>Apellido</Form.Label>
                <Form.Control type='text' id='apellido'/>
              </Form.Group>

              <Form.Group className='col'>
                <Form.Label htmlFor='correo_electronico'>Correo Electronico</Form.Label>
                <Form.Control type='text' id='correo_electronico'/>
              </Form.Group>

              <Form.Group className='col'>
                <Form.Label htmlFor='apellido'>Nro. Telefonico</Form.Label>
                <Form.Control type='tel' id='apellido'/>
              </Form.Group>

              <Form.Group className='col'>
                <Form.Label htmlFor='apellido'>Fecha</Form.Label>
                <Form.Control type='date' id='fecha'/>
              </Form.Group>
             
              <Button type="submit" className='mt-5 btn btn-success'>Enviar</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact;