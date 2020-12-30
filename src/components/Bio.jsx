import React from 'react';
import Container from 'react-bootstrap/Container';
import SkillsTable from './SkillsTable';

function Bio() {
    return (
        <Container className="about-me" id="bio">
            <div className="row">
                <h2 className="about-title">ABOUT</h2>

                <p className="about-content">
                    Full-stack web developer with event management background that recently earned a certificate in full stack web development from the University of New Hampshire.  
                    <br />
                    <br />
                    Looking to make a change in careers to create responsive and mobile-first applications with stunning user experiences.  
                    Known for my strong work ethic and ability to learn quickly to help create solutions to modern technology problems. 
                    <br/>
                    <br/>
                    When I'm not working, you will find me exploring the outdoors such as running, hiking, skiing or golfing with my fiancée Nicole. 
                </p>
            </div>
            <SkillsTable />
        </Container>
    )
}

export default Bio;