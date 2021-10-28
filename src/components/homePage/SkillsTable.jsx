import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills() {
  return (
    <>
      <h2 className='tableHeader'>SKILLS &amp; TECHNOLOGIES</h2>
      <Row className='skillsTable'>
        <Col sm={12} md={6}>
          <div>
            <h3 className='theader'>
              Languages &nbsp; <i className='fa fa-code fa-2x'></i>
            </h3>
            <p className='trow'>
              HTML5, CSS,
              <br /> JavaScript, JSX
            </p>
            <h3 className='theader'>
              Tools &nbsp; <i className='fa fa-terminal fa-2x'></i>
            </h3>
            <p className='trow'>
              MongoDB, MySQL,
              <br /> Git, GitHub
            </p>
          </div>
        </Col>

        <Col sm={12} md={6}>
          <div>
            <h3 className='theader'>
              Frameworks &nbsp; <i className='fa fa-code-fork fa-2x'></i>
            </h3>
            <p className='trow'>
              React, Express,
              <br /> Bootstrap, Materialize
            </p>
            <h3 className='theader'>
              Soft Skills &nbsp; <i className='fa fa-handshake-o fa-2x'></i>
            </h3>
            <p className='trow'>
              Organization, Communication,
              <br /> Teamwork, Problem-Solving
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={6}>
          <a href='#home'>
            <div className='arrow'>
              <i className='upArrow fa fa-chevron-circle-up fa-3x' />
            </div>
          </a>
        </Col>
      </Row>
    </>
  );
}

export default Skills;
