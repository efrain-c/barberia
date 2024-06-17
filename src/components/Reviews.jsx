import React from "react";
import { Card, CardBody, CardText, CardFooter,CardTitle } from "react-bootstrap";
import './Reviews.css';
import Person1 from '../utils/img/person1.jpg';
import Person2 from '../utils/img/person2.jpg';
import Person3 from '../utils/img/person3.jpg';
import Person4 from '../utils/img/person4.jpg';


export function Reviews(){
    return(
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">
                Comentarios
            </h2>
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                ”Un cambio de look es un energizante de la autoestima”
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Johnn mike</CardTitle>
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Un cambio de estilo siempre es lo mejor para ir con la moda y la actualidad
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Suscan Castillo</CardTitle>
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Esta barberia ofrece todos los servicios de peluqueria y demas con la mas alta calidad
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Maria Rodriguez</CardTitle>
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Un buen lugar para hacerse unos retoques de aqui para alla
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Denis Rochely</CardTitle>
                        </CardFooter>
                    </Card>
                </div>

            </div>
            

        </div>
    )
}