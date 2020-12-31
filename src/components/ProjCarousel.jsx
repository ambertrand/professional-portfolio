import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import portfolio from '../utils/portfolio';

function ProjCarousel() {
    console.log(portfolio);
    return (
        <Container className="projects">
            <Carousel>
                {portfolio.map((info) => {
                    return (
                        <Carousel.Item key={info.key}>
                            <Row className="projCard">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={info.image} />
                                    <Card.Body>
                                        <Card.Title>{info.title}</Card.Title>
                                        <Card.Text>{info.description}</Card.Text>
                                        <Card.Text><strong>Tech Used:</strong> {info.tech}</Card.Text>
                                        <Card.Link className="link" href={info.deployed} target="_blank">
                                            <Button>Deployed App</Button>
                                        </Card.Link>
                                        <Card.Link className="link" href={info.github} target="_blank">
                                            <Button>View Code</Button>
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </Container>
    )
}

export default ProjCarousel;