import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headshot from '../../img/Alex-headshot-circle.png';
import Bio from '../homePage/Bio';

function HomePage() {
  return (
    <Container>
      {/* Headshot  */}
      <Row className='intro animate__animated animate__slideInUp'>
        <Col sm={12} md={6}>
          {/* <div className='headshot-img'> */}
          <img src={headshot} className='headshot' alt='Alex Headshot' />
          {/* </div> */}
        </Col>

        {/* Name */}
        <Col sm={12} md={6}>
          <h1 className='name'>
            Hello, <br />
            I'm Alex
          </h1>
        </Col>

        {/* Bio  */}
        <Col sm={12} md={6}>
          <a
            href='#bio'
            className='downArrow animate__animated animate__bounce animate__infinite'
          >
            <div>
              <i className='arrow fa fa-chevron-circle-down fa-3x' />
            </div>
          </a>
        </Col>
      </Row>
      {/* <Bio /> */}
    </Container>
  );
}

export default HomePage;

// SMALL EDITS //
// -Color scheme

// MAJOR EDITS //
// -Responsiveness
// -Home page re-design
// -About page re-design
