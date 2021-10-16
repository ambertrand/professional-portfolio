import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import headshot from '../img/Alex-circle.png';
import headshot from '../../img/Alex-headshot.jpg';

function HomePage() {
  return (
    <Container className='intro animate__animated animate__slideInUp'>
      <Row className='content'>
        <Col sm={4}>
          {/* Headshot  */}
          <div className='headshot-img'>
            <img
              src={headshot}
              className='headshot img-fluid'
              alt='Alex Headshot'
            />
          </div>
        </Col>
        <Col>
          {/* Name */}
          <div className='name'>
            <h1 className='display-3'>
              Hello,
              <br />
              I'm <strong>Alex</strong>
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          {/* Bio  */}
          {/* <a
            href='#bio'
            className='downArrow animate__animated animate__bounce animate__infinite'
          >
            <div>
              <i className='arrow fa fa-chevron-circle-down fa-3x' />
            </div>
          </a> */}
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
