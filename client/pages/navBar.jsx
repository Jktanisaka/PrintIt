import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';

export default function MainNavbar(props) {
  return (
    <Navbar expand='false' className="mb-3 bg-orange pt-0 ">
      <Container fluid className=''>
        <Navbar.Brand href="#" className='righteous white-text logo-shadow f-36'>PrintIt</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" className='mb-2 border-white white-text' />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-false"
          aria-labelledby="offcanvasNavbarLabel-expand-false"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-false">
              PrintIt
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className>
            <Nav className="justify-content-end flex-grow-1 pe-3 text-center">
              <Nav.Link href="#search" classname="border-dark text-center">Search</Nav.Link>
              <Nav.Link href="#sign-up">Sign-Up</Nav.Link>
              <button>search</button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

  // <nav className="navbar bg-orange fixed-top p-0">
  //   <div className="container-fluid">
  //     <a className="navbar-brand logo-shadow righteous" href="#">PrintIt</a>
  //     <button className="navbar-toggler btn-orange-custom" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
  //       <span className="navbar-toggler-icon btn-orange-custom"></span>
  //     </button>
  // <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
  //   <div className="offcanvas-header">
  //     <h5 className="offcanvas-title righteous" id="offcanvasNavbarLabel">PrintIt</h5>
  //     <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  //   </div>
  //   <div className="offcanvas-body">
  //     <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
  //       <li className="nav-item">
  //         <a className="nav-link" href="#search">Search</a>
  //       </li>
  //       <li className="nav-item">
  //         <a className="nav-link" href="#sign-up">Sign Up</a>
  //       </li>
  //     </ul>
  //   </div>
  // </div>
  //   </div>
  // </nav>
  );
}
