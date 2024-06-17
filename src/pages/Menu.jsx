import React from 'react'
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import BreakfastImg from '../utils/img/breakfast.jpg';
import LunchImg from '../utils/img/lunch.jpg';
import DinnerImg from '../utils/img/dinner.jpg';
import DessertImg from '../utils/img/dessert.jpg';

const breakfast = [
  {
    id: 1,
    name:'English Breakfast',
    descripcion: 'soked bacon, sausage, tomato, mushrooms, black padding, biked,beans,eggs',
    price:'£123'
  },
  {
    id: 2,
    name:'Avocado Toast',
    descripcion: 'Poached eggs, avocado, omion, tomatoes, bread',
    price:'£12'
  },
  {
    id: 3,
    name:'Burrito',
    descripcion: 'tortilla, egg, cheesem potatos, pork meat',
    price:'£12'
  },

];

const lunch = [
  {
    id: 1,
    name:'Ceasar salda',
    descripcion: 'Chicken breast, romaine tettuce, croutons, parmesan',
    price:'£15'
  },
  {
    id: 2,
    name:'Spagheti Carbonara',
    descripcion: 'Spagueti, pancetta, garlic, egg parmesan ',
    price:'£14'
  },
  {
    id: 3,
    name:'Pizza',
    descripcion: 'chorizo, italian salad, tomatos',
    price:'£12'
  },
]

const dinner = [
  {
    id: 1,
    name:'Spice Beef',
    descripcion: 'Chicken breast, romaine tettuce, croutons, parmesan',
    price:'£15'
  },
  {
    id: 2,
    name:'Spaggety bolognese',
    descripcion: 'Spagueti, pancetta, garlic, egg parmesan ',
    price:'£14'
  },
  {
    id: 3,
    name:'Pizza',
    descripcion: 'chorizo, italian salad,tomatos',
    price:'£12'
  },
]

const dessert = [
  {
    id: 1,
    name:'Lemon cake',
    descripcion: 'flour, salt, sugar,cinawan, yeast,soup cream',
    price:'£15'
  },
  {
    id: 2,
    name:'Spaggety bolognese',
    descripcion: 'Spagueti, pancetta, garlic, egg parmesan ',
    price:'£14'
  },
  {
    id: 3,
    name:'Vegan Pancake',
    descripcion: 'flour sugar, haking',
    price:'£12'
  },
]

function Menu() {
  return (
    <div className='menu-page'>
        <header className='mt-5'>
          <div className="container h-100 d-flex align-items-center text-center text-light">
            <h1 className="text-link-light">Menu</h1>
          </div>
        </header>
        <div className="breakfast my-5">
          <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
              Breakfast
            </h2>
            <div className="row flex-column-reverse flex-lg-row">
              <div className="col-lg-6 d-flex justify-content-center">
                <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-aroud">
                {breakfast.map((breakfast)=> (
                  <div key={breakfast.id}>
                      <Card className='border-0'>
                        <CardBody>
                          <CardTitle className='text-center fs-3'>
                            {breakfast.name}
                          </CardTitle>
                          <CardText className='text-center fs-5'>
                            {breakfast.descripcion}
                          </CardText>
                          <CardText className='text-center fs-3 fw-bold text-success'>
                            {breakfast.price}
                          </CardText>
                        </CardBody>
                      </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lunch bg-dark py-5">
          <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
              Lunch
            </h2>
            <div className="row">

              <div className="col-lg-6 d-flex flex-column justify-content-aroud">
                {lunch.map((lunch)=> (
                  <div key={lunch.id}>
                      <Card className='border-0 bg-dark text-light'>
                        <CardBody>
                          <CardTitle className='text-center fs-3'>
                            {lunch.name}
                          </CardTitle>
                          <CardText className='text-center fs-5'>
                            {lunch.descripcion}
                          </CardText>
                          <CardText className='text-center fs-3 fw-bold text-success'>
                            {lunch.price}
                          </CardText>
                        </CardBody>
                      </Card>
                  </div>
                ))}
              </div>

              <div className="col-lg-6 d-flex justify-content-center">
                <img src={LunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
              </div>
              
            </div>
          </div>
        </div>

        <div className="dinner my-5">
          <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
              Dinner
            </h2>
            <div className="row flex-column-reverse flex-lg-row">
              <div className="col-lg-6 d-flex justify-content-center">
                <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-aroud">
                {dinner.map((dinner)=> (
                  <div key={dinner.id}>
                      <Card className='border-0'>
                        <CardBody>
                          <CardTitle className='text-center fs-3'>
                            {dinner.name}
                          </CardTitle>
                          <CardText className='text-center fs-5'>
                            {dinner.descripcion}
                          </CardText>
                          <CardText className='text-center fs-3 fw-bold text-success'>
                            {dinner.price}
                          </CardText>
                        </CardBody>
                      </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="dessert bg-dark py-5">
          <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
              Dessert
            </h2>
            <div className="row">

              <div className="col-lg-6 d-flex flex-column justify-content-aroud">
                {dessert.map((dessert)=> (
                  <div key={dessert.id}>
                      <Card className='border-0 bg-dark text-light'>
                        <CardBody>
                          <CardTitle className='text-center fs-3'>
                            {dessert.name}
                          </CardTitle>
                          <CardText className='text-center fs-5'>
                            {dessert.descripcion}
                          </CardText>
                          <CardText className='text-center fs-3 fw-bold text-success'>
                            {dessert.price}
                          </CardText>
                        </CardBody>
                      </Card>
                  </div>
                ))}
              </div>

              <div className="col-lg-6 d-flex justify-content-center">
                <img src={DessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
              </div>
              
            </div>
          </div>
        </div>


    </div>

  )
}
export default Menu;