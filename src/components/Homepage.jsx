import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headshot from '../img/Alex-circle.png';

function HomePage() {
    return (
        <Container className="intro">
            <Row className="content">
                <Col sm={4}>
                    {/* Headshot  */}
                    <div className="headshot-img">
                        <img src={headshot} className="img-fluid" alt="Alex Headshot" />
                    </div>
                </Col>
                <Col sm={8}>
                {/* Name */}
                <div className="name">
                    <h1 className="display-3 text-white">Hi, I'm<br /><strong>Alex Bertrand</strong></h1>
                </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    {/* Bio  */}
                    <a href="#bio" className="downArrow animate_animated animate_bounce">
                        <div>
                            <i className="arrow fa fa-chevron-circle-down fa-3x" />
                        </div>
                    </a>

                </Col>
            </Row >
        </Container >
    )
}

export default HomePage;