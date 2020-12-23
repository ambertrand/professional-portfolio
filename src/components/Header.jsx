import React from 'react';
import Container from 'react-bootstrap/Container';

function Header() {
    return (
        <Container className="headBackground">
            <div>
                <h1 className="display-5 text-center">Alex Bertrand</h1>
            </div>
        </Container>
    );
}

export default Header;