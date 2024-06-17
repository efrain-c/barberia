import React from 'react';
import { CortesBtn } from '../components/CortesBtn';
import './Home.css';
import AboutImg from '../utils/img/about-img.jpg'
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import ContactImage from '../utils/img/contact-img.jpg';
import ReactPlayer from 'react-player';


function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
                        <h2 className='mb-0 text-ligth fw-bold'>Bienbenido a</h2>
                        <h1 className='mb-5 text-ligth fw-bold text-center text-sm-start'>Barberia Style</h1>
                        <CortesBtn/>
                    </div>
                </div>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
                <ReactPlayer url={require("../utils/videos/video1.mp4")} controls />
                </div>
                <div className="col-lg-6 d-flew flew-column align-items-center justify-content-center">
                    <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Nuestra Barberia</h2>
                    <p>La Barberia de Style, un espacio contemporaneo de peluqueria masculina, donde entendemos las inquietudes del hombre de hoy para ofrecer una imagen actual y al estilo que mejor refleja su personalidad.</p>
                    <p>El concepto desde aquel entonces hasta ahora, ha ido migrando año tras año, lo cual hace que hoy en dia se destaque como peluquería y barbería clásica tradicional de los años 20.</p>
                    <p>Se caracteriza por sus afeitados clásicos a navaja con toallas calientes y frias como asi también por sus arreglos de barbas , cortes de estilo europeo y estar siempre a la vanguardia sobre las nuevas tendencias masculinas.</p>
                    <Link to="/about">
                        <button type='button' className='btn btn-outline-success btn-lg'>
                            Nuestro cortes de Moda
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <div className='cortes-section py-5 text-align shadow'>
            <div className="container d-flex flex column align-item-center">
                <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Servicios</h2>
                <div className="row mb-5 w-100">
                    <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                        <h3 className="fs-2 mb-5">Cortes</h3>
                        <ul className="px-0">
                            <li className="d-flex justify-content-between">
                                <p className="fs-3 mx-2">1. Buzz</p>
                                <p className='fs-3 mx-2 text-success fw-bold'>Bs. 60</p>
                            </li>
                            <li className="d-flex justify-content-between">
                                <p className="fs-3 mx-2">2. Fade</p>
                                <p className='fs-3 mx-2 text-success fw-bold'>Bs 60</p>
                            </li>
                            <li className="d-flex justify-content-between">
                                <p className="fs-3 mx-2">3. Militar</p>
                                <p className='fs-3 mx-2 text-success fw-bold'>Bs 50</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                        <h3 className="fs-2 mb-5">Afeitados</h3>
                        <ul className="px-0">
                            <li className="d-flex justify-content-between">
                                <p className="fs-3 mx-2">Barba corta cuadrada</p>
                                <p className='fs-3 mx-2 text-success fw-bold'>Bs. 20</p>
                            </li>
                            <li className="d-flex justify-content-between">
                                <p className="fs-3 mx-2">Barba Balbo</p>
                                <p className='fs-3 mx-2 text-success fw-bold'>Bs 25</p>
                            </li>
                            <li className="d-flex justify-content-between">
                                <p className="fs-3 mx-2">El Pistoler</p>
                                <p className='fs-3 mx-2 text-success fw-bold'>Bs 30</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>    
            <CortesBtn/>        
        </div>
        <ImageGallery/>
        <div className="bg-dark text-ligth py-5 shadow text-bg-info">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
                    <ContactInfo/>
                </div>
                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={ContactImage} className='img-fluid w-50' alt="" />
                </div>
            </div>
        </div>
        

    </div>
  )
}
export default Home;