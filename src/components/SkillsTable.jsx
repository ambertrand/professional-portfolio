import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function Skills() {
    return (
        <Container>
            <Row className="tableHeader">
                <Col sm={12}>
                    <h2>SKILLS &amp; TECHNOLOGIES</h2>
                    {/* <Table>
                        <thead>
                            <tr>
                                <th className="theader">Languages &nbsp;<i className="fa fa-code fa-2x"></i></th>
                                <th className="theader">Frameworks/Libraries &nbsp; <i className="fa fa-code-fork fa-2x"></i></th>
                                <th className="theader">Tools &nbsp; <i className="fa fa-terminal fa-2x"></i></th>
                                <th className="theader">Skills &nbsp; <i className="fa fa-handshake-o fa-2x"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="trow">
                                <td>HTML5, CSS,<br /> Javascript, JSX</td>
                                <td>React, Express,<br /> Bootstrap, Materialize</td>
                                <td>MongoDB, MySQL,<br /> Git, GitHub</td>
                                <td>Organization, Communication,<br /> Teamwork, Problem Solving</td>
                            </tr>
                        </tbody>
                    </Table> */}
                </Col>
                <Col sm={12}>
                    <a href="#homepage">
                        <div className="upArrow">
                            <i className="fa fa-chevron-circle-up fa-3x" />
                        </div>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;