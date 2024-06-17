import React from "react";
import Gallery1 from '../utils/img/carousel1.jpg';
import Gallery2 from '../utils/img/carousel2.jpg';
import Gallery3 from '../utils/img/carousel3.jpg';

export function Carousel(){
    return(
        <div className="container mt-5">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src={Gallery1} alt="First slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={Gallery2}  alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={Gallery3}  alt="Third slide"/>
                </div>
            </div>
            </div>
        </div>
    )
}