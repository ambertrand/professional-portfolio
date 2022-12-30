import React from "react";

function HomePage() {
  return (
    <>
      <section className="intro">
        <h1 className="name">Alex Bertrand</h1>
        <p className="description">
          I'm a Full Stack Engineer that can create responsive, mobile-first
          applications with stunning user experiences. Currently I'm a Front-End
          Engineer focused on building user-friendly & accessible websites
          at&nbsp;
          <a href="https://www.silvertech.com/" className="company">
            SilverTech
          </a>
        </p>
      </section>
      <section className="contact-info">
        {/* Resume  */}
        <a
          className="contact-item"
          href="https://docs.google.com/document/d/1ypQXx56IDZ_w48dE9wiJ9-V-SNAp4J6UXt01tbAnt3w/edit?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-solid fa-file-lines fa-2x resume"></i>
        </a>

        {/* GitHub  */}
        <a
          className="contact-item"
          href="https://github.com/ambertrand"
          rel="noreferrer"
          target="_blank"
        >
          <strong>
            <i className="fa-brands fa-github fa-2x"></i>
          </strong>
        </a>

        {/* LinkedIn  */}
        <a
          className="contact-item"
          href="https://www.linkedin.com/in/alex-bertrand/"
          rel="noreferrer"
          target="_blank"
        >
          <strong>
            <i className="fa-brands fa-linkedin fa-2x"></i>
          </strong>
        </a>

        {/* Email  */}
        <a className="contact-item" href="mailto:alex.m.bertrand@gmail.com">
          <strong>
            <i className="fa-solid fa-envelope fa-2x"></i>
          </strong>
        </a>
      </section>
    </>
  );
}

export default HomePage;
