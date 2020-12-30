import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

function Skills() {
    return (
        <Container>
            <div className="row tableHeader">
                <div className="col-sm-12">
                    <h2>SKILLS &amp; TECHNOLOGIES</h2>
                    <Table>
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
                    </Table>
                    <a href="#homepage">
                        <div className="upArrow">
                            <i className="fa fa-chevron-circle-up fa-3x" />
                        </div>
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default Skills;