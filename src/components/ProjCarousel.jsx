import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import portfolio from '../utils/portfolio';

function ProjCarousel() {
  // console.log(portfolio);
  return (
    <Container className='projects'>
      <Carousel>
        {portfolio.map((info) => {
          return (
            <Carousel.Item key={info.key}>
              <Row className='projCard'>
                <Card style={{ width: '40rem' }}>
                  <Card.Img variant='top' src={info.image} />
                  <Card.Body>
                    <Card.Title>{info.title}</Card.Title>
                    <Card.Text>{info.description}</Card.Text>
                    <Card.Text>
                      <strong>Tech Used:</strong> {info.tech}
                    </Card.Text>
                    <Card.Link
                      className='projLink'
                      href={info.deployed}
                      target='_blank'
                    >
                      Deployed App
                    </Card.Link>
                    <Card.Link
                      className='projLink'
                      href={info.github}
                      target='_blank'
                    >
                      View Code
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Row>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default ProjCarousel;
