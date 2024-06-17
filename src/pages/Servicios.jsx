import React from 'react'
import './Servicios.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import CorteImg1 from '../utils/img/corte1.png';
import CorteImg2 from '../utils/img/corte2.png';
import CorteImg3 from '../utils/img/corte3.png';
import CorteImg4 from '../utils/img/corte4.png';
import BarbaImg1 from '../utils/img/barba1.avif';
import BarbaImg2 from '../utils/img/barba2.jpg';



function Servicios() {
  return (
    <div className='servicios-page'>
        <header className='mt-5'>
          <div className="container h-100 d-flex align-items-center text-center text-light">
            <h1 className="text-link-light">Nuestro Servicios</h1>
          </div>
        </header>
        <div className="breakfast my-5">
          <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
              Cortes
            </h2>
            <div className="row flex-column-reverse flex-lg-row">
              <div className="col-lg-6 d-flex justify-content-center">
                <img src={CorteImg1} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-aroud">
                <Card className='border-0'>
                    <CardBody>
                        <CardTitle className='text-center fs-3'>
                            Low Fade
                        </CardTitle>
                        <CardText className='text-center fs-5'>
                            El low fade o degradado bajo comienza cerca de la parte inferior de la cabeza y se desvanece gradualmente. Esta técnica de desvanecimiento se ha convertido en el estilo más demandado. El degradado en general es versátil, y puedes optar por un contraste suave o más pronunciado.
                        </CardText>
                        <CardText className='text-center fs-3 fw-bold text-success'>
                            Bs 50
                        </CardText>
                    </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>


        <div className="breakfast bg-dark m-5">
          <div className="container">
            
            <div className="row flex-column-reverse flex-lg-row">
              
              <div className="col-lg-6 d-flex flex-column justify-content-aroud mt-5">
                <Card className='border-0 bg-dark text-light'>
                    <CardBody>
                        <CardTitle className='text-center fs-3'>
                            Drop Fade
                        </CardTitle>
                        <CardText className='text-center fs-5'>
                            Este corte puede resultar similar al low fade común. La principal diferencia entre ambos se basa en la dirección del degradado, el cual comienza en la parte alta de la cabeza y desciende hacia la nuca en una “caída”.
                        </CardText>
                        <CardText className='text-center fs-3 fw-bold text-success '>
                            Bs 45
                        </CardText>
                    </CardBody>
                </Card>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <img src={CorteImg2} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="breakfast  m-5">
          <div className="container">
            
            <div className="row flex-column-reverse flex-lg-row">
                <div className="col-lg-6 d-flex justify-content-center">
                <img src={CorteImg3} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-aroud mt-5">
                <Card className='border-0'>
                    <CardBody>
                        <CardTitle className='text-center fs-3'>
                            Taper Fade
                        </CardTitle>
                        <CardText className='text-center fs-5'>
                        Esta variedad de low fade se enfoca en la parte inferior del pelo, especialmente en la línea de la nuca y alrededor de las orejas. El pelo se afeita creando un degradado gradual hacia arriba, fusionándose con longitudes más largas en la parte superior de la cabeza.</CardText>
                        <CardText className='text-center fs-3 fw-bold text-success '>
                            Bs 60
                        </CardText>
                    </CardBody>
                </Card>
              </div>
              
            </div>
          </div>
        </div>

        <div className="breakfast bg-dark m-5">
          <div className="container">
            
            <div className="row flex-column-reverse flex-lg-row">
              
              <div className="col-lg-6 d-flex flex-column justify-content-aroud mt-5">
                <Card className='border-0 bg-dark text-light'>
                    <CardBody>
                        <CardTitle className='text-center fs-3'>
                            Burst Fade
                        </CardTitle>
                        <CardText className='text-center fs-5'>
                         Este estilo de desvanecimiento puede combinarse con otros estilos. Se define por un corte semicircular en los laterales, creando un efecto visual llamativo y dinámico.</CardText>
                        <CardText className='text-center fs-3 fw-bold text-success '>
                            Bs 60
                        </CardText>
                    </CardBody>
                </Card>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <img src={CorteImg4} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
              </div>
            </div>
          </div>
        </div>     

        <div className="breakfast my-5">
          <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
              Estilos de barba
            </h2>
            <div className="row flex-column-reverse flex-lg-row">
              <div className="col-lg-6 d-flex justify-content-center">
                <img src={BarbaImg1} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-aroud">
                <Card className='border-0'>
                    <CardBody>
                        <CardTitle className='text-center fs-3'>
                             Barba Goatee con parche
                        </CardTitle>
                        <CardText className='text-center fs-5 justify-content'>
                             
                            1. Barba Goatee con parche
                            Consigue tu barba de “rodaje”
                            El parche de la barbilla es un pequeño mechón de cabello que conecta la perilla de quien la lleve con su labio inferior, y es un estilo bastante fácil de lograr y mantener; de hecho, los parches incluso se han descrito como ''rodaje” o entrenamiento para una barba completa, aunque algunos de los más veteranos en llevar perillas pueden sentirse un poco ofendidos por esta afirmación.
                        
                            ¿Listo para probar este estilo de barba Goatee?  Descubre aquí como recortar y arreglar una perilla correctamente  </CardText>
                        <CardText className='text-center fs-3 fw-bold text-success'>
                            Bs 50
                        </CardText>
                    </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="breakfast bg-dark m-5">
          <div className="container">
            
            <div className="row flex-column-reverse flex-lg-row">
              
              <div className="col-lg-6 d-flex flex-column justify-content-aroud mt-5">
                <Card className='border-0 bg-dark text-light'>
                    <CardBody>
                        <CardTitle className='text-center fs-3'>
                         2.Barba Goatee con bigote de manillar (o ‘Balbo’)
                        </CardTitle>
                        <CardText className='text-center fs-5'>
                        Entre todos los diferentes estilos de perilla y bigote, este podría ser el santo grial del hipster aristocrático: la barba Goatee con bigote de manillar, también conocida como la barba Balbo. Gracias a este fenómeno social, se ha convertido en una de las perillas más de moda en los últimos años.</CardText>
                        <CardText className='text-center fs-3 fw-bold text-success '>
                            Bs 60
                        </CardText>
                    </CardBody>
                </Card>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <img src={BarbaImg2} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
              </div>
            </div>
          </div>
        </div>

    </div>




  )
}
export default Servicios;