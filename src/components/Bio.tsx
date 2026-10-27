import React from "react";

const Bio: React.FC = () => {
  return (
    <>
      <section className="about">
        <h2 className="about-title">ABOUT ME</h2>
        <div className="about-content">
          <ul>
            <li className="list-item">
              Full-Stack Software Engineer with 5 years of experience designing, developing, and optimizing scalable web applications across frontend and backend systems. Skilled in TypeScript, JavaScript, React, Angular, Node.js, Python, and AWS, with hands-on experience in cloud infrastructure, REST APIs, authentication, and legacy application modernization. Experienced in delivering features end-to-end, from development and deployment to production monitoring, troubleshooting, and continuous improvement. Focused on building secure, maintainable, high-performance applications that enhance user experience and support business objectives.
            </li>
          </ul>
        </div>
      </section>
      <section className="skills-table">
        <div className="skills-cols">
          <div className="skill-block">
            <div className="header">Languages</div>
            <p className="info">
              JavaScript, TypeScript, Python, PHP, C#, HTML5, CSS3, SASS 
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
              AWS EC2, RDS, EFS, Lambda, S3, Docker, CI/CD pipelines
            </p>
          </div>
        
          <div className="skill-block">
            <div className="header">Monitoring & Observability</div>
            <p className="info">
              AWS CloudWatch, Sentry, Pingdom, PostHog
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
              Node.js, Express, REST API Design, Serverless Architecture
            </p>
          </div>

          <div className="skill-block">
            <div className="header">Databases</div>
            <p className="info">
              MySQL, PostgreSQL, MongoDB, Relational & Non-Relational Databases
            </p>
          </div>

          <div className="skill-block">
            <div className="header">CMS & eCommerce</div>
            <p className="info">
              Umbraco, Magento, MODX, Drupal
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bio;
