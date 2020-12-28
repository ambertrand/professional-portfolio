import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';

function Navbar() {
    return (
        <Nav className="navbar-expand-lg justify-content-center">
            <div className="row">
                <Nav.Item className="col-4">
                <NavLink href="/" className="link">Home</NavLink>
                </Nav.Item>
                <Nav.Item className="col-4">
                <NavLink href="/projects" className="link">Projects</NavLink>
                </Nav.Item>
                <Nav.Item className="col-4 contact">
                <NavLink href="/contact" className="link">Contact</NavLink>
                </Nav.Item>
            </div>
        </Nav>
    )
}

export default Navbar;