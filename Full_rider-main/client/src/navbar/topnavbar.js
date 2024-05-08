import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const TopNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Your App Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Add your navbar links here */}
            <Nav.Link href="#link1">Link 1</Nav.Link>
            <Nav.Link href="#link2">Link 2</Nav.Link>
            {/* Add more navbar links as needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default TopNavbar;