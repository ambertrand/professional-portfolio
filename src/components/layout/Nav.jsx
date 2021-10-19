import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';

function Navbar() {
  return (
    <Nav className='navbar navbar-expand-lg'>
      <div className='row'>
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
      </div>
    </Nav>
  );
}

export default Navbar;
