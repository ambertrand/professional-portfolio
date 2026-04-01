import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <section className="intro">
        <h1>Hi, I’m Alex.</h1>
        <p className="intro-description">
          Full Stack Software Engineer building scalable SaaS that drives real business impact.
          Currently I’m a Software Engineer focused on modernizing and securing web & mobile applications at <a href="https://www.theatomgroup.com/" target="_blank" rel="noopener noreferrer">The ATOM Group</a>.
        </p>
      </section>

      <section className="contact-info" aria-label="Contact links">
        <a
          className="contact-item"
          href="https://www.linkedin.com/in/alex-bertrand/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Open LinkedIn profile in a new tab"
        >
          <i className="fa-brands fa-linkedin fa-2x" aria-hidden="true"></i>
          <span className="sr-only">LinkedIn</span>
        </a>

        <a
          className="contact-item"
          href="mailto:alex.m.bertrand@gmail.com"
          aria-label="Send email"
        >
          <i className="fa-solid fa-envelope fa-2x" aria-hidden="true"></i>
          <span className="sr-only">Email</span>
        </a>

        <a
          className="contact-item"
          href="https://github.com/ambertrand"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Open GitHub profile in a new tab"
        >
          <i className="fa-brands fa-github fa-2x" aria-hidden="true"></i>
          <span className="sr-only">GitHub</span>
        </a>
      </section>
    </>
  );
}

export default HomePage;
