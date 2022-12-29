import React from "react";

function Bio() {
  return (
    <>
      <section className="about">
        <h1 className="about-title">ABOUT ME</h1>
        <p className="about-content">
          <ul>
            <li className="list-item">
              I'm a full-stack engineer with a management background that earned
              a certificate in full stack development from the University of New
              Hampshire.
            </li>
            <li className="list-item">
              Transitioning into a development career with 1+ year experience
              looking to create responsive and mobile-first applications with
              stunning user experiences. Known for my strong work ethic and
              ability to learn quickly to help create solutions to modern
              technology problems.
            </li>
            <li className="list-item">
              When I'm not working, you will find me exploring the outdoors such
              as running, biking, skiing, or golfing with my family and puppy.
            </li>
          </ul>
        </p>
      </section>
      <section className="skills-table">
        <div className="skills-cols">
          <div className="skill-block">
            <div className="header">
              Languages &nbsp; <i className="fa fa-code fa-2x"></i>
            </div>
            <p className="info">
              HTML5, CSS3, SASS, <br /> JavaScript, TypeScript
            </p>
          </div>

          <div className="skill-block">
            <div className="header">
              Tools &nbsp; <i className="fa fa-terminal fa-2x"></i>
            </div>
            <p className="info">
              MongoDB, MySQL, Sitefinity, Adobe Creative Suite
            </p>
          </div>
        </div>

        <div className="skills-cols">
          <div className="skill-block">
            <div className="header">
              Frameworks &nbsp; <i className="fa fa-code-fork fa-2x"></i>
            </div>
            <p className="info">React, Stencil, Nodejs, Express, Bootstrap</p>
          </div>

          <div className="skill-block">
            <div className="header">
              Soft Skills &nbsp; <i className="fa fa-handshake-o fa-2x"></i>
            </div>
            <p className="info">
              Communication, Teamwork, Organization, Problem-Solving
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bio;
