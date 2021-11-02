import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headshot from '../../img/Alex-headshot-circle.png';

function HomePage() {
  return (
    <>
      {/* Headshot  */}
      <Row className='intro animate__animated animate__slideInUp'>
        <Col sm={12} md={4}>
          <img src={headshot} className='headshot' alt='Alex Headshot' />
        </Col>

        {/* Name */}
        <Col sm={12} md={4}>
          <h1 className='name'>
            Hello, <br />
            I'm Alex
          </h1>
        </Col>

        {/* Bio  */}
        <Col sm={12} md={6}>
          <a
            href='/bio'
            className='downArrow animate__animated animate__bounce animate__infinite'
          >
            <div>
              <i className='arrow fa fa-chevron-circle-down fa-2x' />
            </div>
          </a>
        </Col>
      </Row>
    </>
  );
}

export default HomePage;
