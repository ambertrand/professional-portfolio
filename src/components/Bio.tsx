import React from "react";

const Bio: React.FC = () => {
  return (
    <>
      <section className="about">
        <h2 className="about-title">ABOUT ME</h2>
        <div className="about-content">
          <ul>
            <li className="list-item">
              Detail-oriented and solution-driven Full-Stack Software Engineer with 4+ years of experience building scalable, high-performance, and secure web applications across frontend and backend architectures. Proven in delivering modern, API-driven SaaS products that enhance user experience and create measurable business impact. Experienced collaborating closely with product, design, and cross-functional teams to ship reliable and maintainable software. Passionate about crafting intuitive software that solves real-world problems and scales with growing user and business needs.
            </li>
          </ul>
        </div>
      </section>
      <section className="skills-table">
        <div className="skills-cols">
          <div className="skill-block">
            <div className="header">Languages</div>
            <p className="info">
              JavaScript, TypeScript, Python, PHP, C#, HTML5, CSS3/SASS, 
            </p>
          </div>

          <div className="skill-block">
            <div className="header">Front-End</div>
            <p className="info">
              React, React Native, Angular, StencilJS
            </p>
          </div>

          <div className="skill-block">
            <div className="header">Cloud & DevOps</div>
            <p className="info">
              AWS(EC2, RDS, EFS, Lambda, S3), Docker
            </p>
          </div>
        </div>

        <div className="skills-cols">
          <div className="skill-block">
            <div className="header">Tools</div>
            <p className="info">
              VSCode, Visual Studio, Git, GitHub, Jira, Postman, Expo
              
            </p>
          </div>

          <div className="skill-block">
            <div className="header">Back-End</div>
            <p className="info">
              Node.js, Express, RESTful API Development
            </p>
          </div>

          <div className="skill-block">
            <div className="header">Databases</div>
            <p className="info">
              MySQL, MongoDB, Relational & Non-Relational Databases
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bio;
