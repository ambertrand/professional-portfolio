import React from "react";

function Navbar() {
  return (
    <div className="navigation-wrapper">
      <a href="/" className="initials">
        AB
      </a>
      <div className="navigation" id="home">
        <a href="/about" className="link">
          Learn More
        </a>
        <a href="/projects" className="link">
          Work
        </a>
      </div>
    </div>
  );
}

export default Navbar;
