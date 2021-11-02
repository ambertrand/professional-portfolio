import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <>
      <Row className='footer'>
        <Col sm={12} md={6}>
          <span>&copy; Copyright {new Date().getFullYear()}</span>
        </Col>
      </Row>
    </>
  );
}

export default Footer;
