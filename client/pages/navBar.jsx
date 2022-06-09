import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';

export default function MainNavbar(props) {
  return (
    <Navbar expand='false' className="mb-3 bg-orange pt-0 navbar-dark">
      <Container fluid className=''>
        <Navbar.Brand href="#" className='righteous white-text logo-shadow f-36 pt-0'>PrintIt</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" className='mb-1 border-white white-text focus-none' />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-false"
          aria-labelledby="offcanvasNavbarLabel-expand-false"
          placement="end"
          className="col-12"
        >
          <Offcanvas.Header closeButton className='bg-orange'>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-false" className='white-text logo-shadow f-28'>
              PrintIt
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='bg-orange pt-0'>
            <Nav className="justify-content-end flex-grow-1 pe-3 text-center">
              <Nav.Link href="#search" className='btn nav-button-styling m-2'>Search</Nav.Link>
              <Nav.Link href="#sign-up" className='btn nav-button-styling m-2'>Sign-Up</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
