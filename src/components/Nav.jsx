import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';

function Navbar() {
    return (
        <Nav className="navbar navbar-expand-lg justify-content-end">
            <div className="row">
                <Nav.Item className="col-sm-12 col-md-3">
                <NavLink href="/" className="navbar-brand">Home</NavLink>
                </Nav.Item>
                <Nav.Item className="col-sm-12 col-md-3">
                <NavLink href="/projects" className="navbar-brand">Projects</NavLink>
                </Nav.Item>
                <Nav.Item className="col-sm-12 col-md-3">
                <NavLink href="/contact" className="navbar-brand">Contact</NavLink>
                </Nav.Item>
            </div>
        </Nav>
    )
}

export default Navbar;