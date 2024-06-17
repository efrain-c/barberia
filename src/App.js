
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Servicios from './pages/Servicios';
import Creditos from './pages/Creditos';


function App() {
  return (
    <div>
      <Navbar expand='lg' className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success fw-semibold'>
              Barberia Style
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='active text-uppercase'>Inicio</Nav.Link>
              <Nav.Link href='/servicios' className='active text-uppercase'>Servicios</Nav.Link>
              <Nav.Link href='/about' className='active text-uppercase'>Nosotros</Nav.Link>
              <Nav.Link href='/contact' className='active text-uppercase'>Contactanos</Nav.Link>
              <Nav.Link href='/creditos' className='active text-uppercase'>Creditos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>     
        <Route path='/' element={<Home/>}/>
        <Route path='/servicios' element={<Servicios/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/creditos' element={<Creditos/>}/>
      </Routes>

      <footer className='bg-body-tertiary'>
        <div className='container'>
          <div className='row'>
            <div className='col'>              
              <ul className='list-unstyled'>
                    <h4>Servicios</h4>
                    <li>+591 67382938</li>
                    <li>La Paz, Bolivia</li>
                    <li>Cota Cota, Calle 24 de Septiembre</li>
                </ul>
            </div>

            <div className='col'>
            <h4>Lema</h4>
                <ul className='list-unstyled'>
                    
                    <li>”Espero que tu día sea tan agradable como tu cabello”</li>
                    <li>”Luce tu barba tanto como tu sonrisa”</li>                    
                </ul>
            </div>
            <div className='col'>
            <h4>Encuentranos</h4>
                <ul className='list-unstyled'>
                    <li>Facebook</li>
                    <li>Instragram</li>
                    <li>WhatsApp</li>
                </ul>
            </div>
            
          </div>
        </div>
        <p className='p-3 m-0 text-center'>copyright @ made by Carvajal</p>
      </footer>

      

    </div>
  );
}

export default App;
