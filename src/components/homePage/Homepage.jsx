import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import headshot from '../../img/Alex-headshot-circle.png';

function HomePage() {
  return (
    <Container>
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

      <Row className='content intro animate__animated animate__slideInUp'>
        {/* Headshot  */}
        <Col sm={12} md={4}>
          {/* <div className='headshot-img'> */}
          <img src={headshot} className='headshot' alt='Alex Headshot' />
          {/* </div> */}
        </Col>

        {/* Name */}
        <Col sm={12} md={4}>
          <h1 className='name'>
            Hello,
            <br />
            I'm <strong>Alex</strong>
          </h1>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={6}>
          {/* Bio  */}
          <a
            href='#bio'
            // className='downArrow animate__animated animate__bounce animate__infinite'
          >
            <div>
              <i className='arrow fa fa-chevron-circle-down fa-3x' />
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;

// SMALL EDITS //
// -Edit Bio section
// -Color scheme

// MAJOR EDITS //
// -Responsiveness
// -Home page re-design
// -About page re-design
