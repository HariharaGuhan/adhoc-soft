import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Nav className="sidebar">
      {/* Add your sidebar links here */}
      <Nav.Link href="#link1">Link 1</Nav.Link>
      <Nav.Link href="#link2">Link 2</Nav.Link>
      
    </Nav>
  );
};

export default Sidebar;