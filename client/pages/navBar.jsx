import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';

export default class MainNavbar extends React.Component {

  render(props) {
    if (this.props.user) {
      const userId = this.props.user.userId;
      return (
      <Navbar expand='false' className="mb-3 bg-orange pt-0 navbar-dark">
        <Container fluid className=''>
          <Navbar.Brand href="#search" className='righteous white-text logo-shadow f-36 pt-0'>PrintIt</Navbar.Brand>
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
            <Offcanvas.Body className='bg-orange pt-0 align-items-end'>
              <Nav className="justify-content-end flex-grow-1 pe-3 text-center">
                <Nav.Link href="#search" className='btn nav-button-styling m-2'>Search</Nav.Link>
                <Nav.Link href={'#entries?userId=' + userId} className='btn nav-button-styling m-2'>My Entries</Nav.Link>
                <Nav.Link href="#create" className='btn nav-button-styling m-2'>Create Entry</Nav.Link>
              </Nav>
            </Offcanvas.Body>
              <Offcanvas.Body className='bg-orange pt-0 align-items-end justify-content-end d-flex border-none'>
                <Nav className=" flex-grow-1 text-center pe-3">
                  <Nav.Link className='btn nav-button-styling m-2 position-relative' href="#log-in" onClick={this.props.onSignOut}>Log Out <i className="fa-solid fa-arrow-right-to-bracket bg-dark-gray position-absolute absolute-styling"></i></Nav.Link>
                </Nav>
              </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      );
    }
    return (
    <Navbar expand='false' className="mb-3 bg-orange pt-0 navbar-dark">
      <Container fluid className=''>
        <Navbar.Brand href="#search" className='righteous white-text logo-shadow f-36 pt-0'>PrintIt</Navbar.Brand>
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
              <Nav.Link href="#log-in" className='btn nav-button-styling m-2'>Log In</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    );
  }
}
