import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
  return (
    <Container>
      <Row>
        <Col className='contactHeader' sm={12} md={4}>
          <h2 className='display-4'>Contact</h2>
        </Col>
        <Col className='contactInfo' sm={12} md={8}>
          {/* Resume  */}
          <a
            className='contactItem'
            href='https://docs.google.com/document/d/1ypQXx56IDZ_w48dE9wiJ9-V-SNAp4J6UXt01tbAnt3w/edit?usp=sharing'
            rel='noreferrer'
            target='_blank'
          >
            <strong>
              <i className='fa fa-file-text-o pr-3'></i>
            </strong>
            Resume
          </a>

          {/* GitHub  */}
          <a
            className='contactItem'
            href='https://github.com/ambertrand'
            rel='noreferrer'
            target='_blank'
          >
            <strong>
              <i className='fa fa-github fa-2x pr-3'></i>
            </strong>
            github.com/ambertrand
          </a>

          {/* LinkedIn  */}
          <a
            className='contactItem'
            href='https://www.linkedin.com/in/alex-bertrand/'
            rel='noreferrer'
            target='_blank'
          >
            <strong>
              <i className='fa fa-linkedin-square fa-2x pr-3'></i>
            </strong>
            linkedin.com/in/alex-bertrand/
          </a>

          {/* Email  */}
          <a className='contactItem' href='mailto:alex.m.bertrand@gmail.com'>
            <strong>
              <i className='fa fa-envelope fa-2x pr-3'></i>
            </strong>
            alex.m.bertrand@gmail.com
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
