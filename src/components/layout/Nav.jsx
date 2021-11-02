import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Row from 'react-bootstrap/Row';

function Navbar() {
  return (
    <Nav className='navbar navbar-expand-lg' id='home'>
      <Row>
        <Nav.Item className='col-md-4 col-sm-12'>
          <NavLink href='/' className='link'>
            Home
          </NavLink>
        </Nav.Item>
        <Nav.Item className='col-md-4 col-sm-12'>
          <NavLink href='/projects' className='link'>
            Projects
          </NavLink>
        </Nav.Item>
        <Nav.Item className='col-md-4 col-sm-12'>
          <NavLink href='/contact' className='link'>
            Contact
          </NavLink>
        </Nav.Item>
      </Row>
    </Nav>
  );
}

export default Navbar;
