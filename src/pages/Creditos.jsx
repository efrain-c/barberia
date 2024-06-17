import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import miFoto from '../utils/img/miFoto.jpg';

export default function Creditos() {
  return (
    <div className="container mt-5">
        <div className="row flex-column-reverse bg-dark flex-lg-row mt-5">      
            <div className="col-lg-6 d-flex flex-column justify-content-aroud">
                <Card className='border-0 bg-dark text-light'>
                    <CardBody >
                        <CardTitle className='text-center fs-3 text-success'>
                            Desarrollador
                        </CardTitle>
                        <CardText className='text-center fs-5'>
                        <p>Nombre: Jhonny Efrain</p>
                        <p>Apellido: Carvajal Ajata</p>
                        <p>Cedula: 8480704</p>
                        <p>Nro Matricula: 1856204</p>
                        <p>Carrera: Informatica</p>
                        </CardText>
                        <CardText className='text-center fs-3 fw-bold text-success '>
                            Universidad Mayor de San Andres
                        </CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
                <img src={miFoto} className='img-fluid w-75 mt-4 mt-lg-0 rounded-circle' alt="" />
            </div>
        </div>
    </div>
  )
}
