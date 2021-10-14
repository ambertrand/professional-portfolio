import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills() {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <h2 className='tableHeader text-center'>SKILLS &amp; TECHNOLOGIES</h2>
          <div className='skillsTable'>
            <div className='col-sm-12 col-md-3'>
              <h3 className='theader'>
                Languages &nbsp; <i className='fa fa-code fa-2x'></i>
              </h3>
              <p className='trow'>
                HTML5, CSS,
                <br /> JavaScript, JSX
              </p>
            </div>
            <div className='col-sm-12 col-md-3'>
              <h3 className='theader'>
                Frameworks &nbsp; <i className='fa fa-code-fork fa-2x'></i>
              </h3>
              <p className='trow'>
                React, Express,
                <br /> Bootstrap, Materialize
              </p>
            </div>
          </div>
          <div className='skillsTable'>
            <div className='col-sm-12 col-md-3'>
              <h3 className='theader'>
                Tools &nbsp; <i className='fa fa-terminal fa-2x'></i>
              </h3>
              <p className='trow'>
                MongoDB, MySQL,
                <br /> Git, GitHub
              </p>
            </div>
            <div className='col-sm-12 col-md-3'>
              <h3 className='theader'>
                Soft Skills &nbsp; <i className='fa fa-handshake-o fa-2x'></i>
              </h3>
              <p className='trow'>
                Organization, Communication,
                <br /> Teamwork, Problem-Solving
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <a href='/'>
            <div className='upArrow'>
              <i className='fa fa-chevron-circle-up fa-3x' />
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
