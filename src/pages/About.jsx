import React from 'react'
import './About.css';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';
import Gallery1 from '../utils/img/carousel1.jpg';
import Gallery2 from '../utils/img/carousel2.jpg';
import Gallery3 from '../utils/img/carousel3.jpg';
import { Carousel } from '../components/Carousel';



function About() {
  return (
    <div className='about-page'>
        <header className="mt-5">
          <div className="container h-100 d-flex align-items-center justify-content-center">
            <h1 className="text-light">Nosotros</h1>
          </div>
        </header>
        <Carousel/> 

        <div className="container my-5">
          <p>Mision</p>
          <p>Brindar un servicio de alta calidad que satisfaga las necesidades y exigencias de cada cliente.   Contar con un personal profesional, calificado y responsable para que nuestra clientela experimente la sensación de  estar en un ambiente familiar y desee regresar a nuestra barberia.</p>
          <p>Vision</p>
          <p> Ser la barberia número  #1 de Bolivia comprometiendonos con nuestros clientes y ofrecer servicios con los mejores estándares de calidad donde superemos cualquier expectativa innovando dia a dia para su máxima satisfacción.</p>
          <div className="row">
            <div className="col-lg-6">
              <img src={Gallery2} className='img-fluid my-4' alt="" />
            </div>
            <div className="col-lg-6">
              <img src={Gallery3} className='img-fluid my-4' alt="" />
            </div>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores distinctio, iusto non explicabo id placeat nulla unde exercitationem natus asperiores expedita rerum blanditiis voluptatibus amet cupiditate, aut totam laboriosam molestias.</p>
        </div>

        <div className="bg-dark text-light">
          <ImageGallery/>
        </div>


        <div className="my-5">
          <Reviews/>
        </div>
    </div>
  )
}
export default About;