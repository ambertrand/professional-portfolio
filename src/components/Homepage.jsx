import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import headshot from '../img/Alex-circle.png';

function HomePage() {
    return (
        <Container className="intro">
            {/* Headshot  */}
            <div className="headshot-img">
                <img src={headshot} className="img-fluid" alt="Alex Headshot" />
            </div>

            {/* Name */}
            <div className="name">
                <h1 className="display-3 text-center text-white"><strong>Alex Bertrand</strong></h1>

                {/* Projects  */}
                <Link to="/projects">
                    <Button>Projects</Button>
                </Link>
            </div>

            {/* Bio  */}
            <a href="#bio" className="downArrow">
                <div>
                    <i className="arrow fa fa-chevron-circle-down fa-3x" />
                </div>
            </a>
        </Container>
    )
}

export default HomePage;