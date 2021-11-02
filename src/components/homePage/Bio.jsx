import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillsTable from './../homePage/SkillsTable';
import Footer from '../layout/Footer';

function Bio() {
  return (
    <Container>
      <div className='animate__animated animate__slideInUp' id='bio'>
        <a href='/'>
          <i className='upArrow fa fa-chevron-circle-up fa-2x' />
        </a>
        <Row className='about'>
          <Col sm={12} md={8}>
            <h2 className='about-title'>ABOUT ME</h2>
            <p className='about-content'>
              Full-stack engineer with management background that recently
              earned a certificate in full stack development from the University
              of New Hampshire.
              <br />
              <br />
              Looking to make a change in careers to create responsive and
              mobile-first applications with stunning user experiences. Known
              for my strong work ethic and ability to learn quickly to help
              create solutions to modern technology problems.
              <br />
              <br />
              When I'm not working, you will find me exploring the outdoors such
              as running, cycling, skiing, hiking or golfing with my wife
              Nicole.
            </p>
            <SkillsTable />
          </Col>
          <Footer />
        </Row>
      </div>
    </Container>
  );
}

export default Bio;
