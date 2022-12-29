import React from "react";

function HomePage() {
  return (
    <>
      {/* Name */}
      <div className="intro">
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
      </div>
    </>
  );
}

export default HomePage;
