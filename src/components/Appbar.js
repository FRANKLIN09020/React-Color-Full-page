import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Appbar = () => {
  return (
    <section >
   <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" >React Developer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className='justify-content-center'>
          <Nav >
            <Nav.Link href="#home" > <Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#Services"> <Link to="Services"> Services</Link></Nav.Link>
            <Nav.Link href="#About"> <Link to="About"> About us</Link></Nav.Link>
            <Nav.Link href="#Contact"><Link to="Contact"> Contact us</Link></Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end'  id="text">
           <Nav>
        <Nav.Link href="#Signin"> <Link to="Signin"> Signin</Link></Nav.Link>
        </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  </section>
  );
}

export default Appbar;