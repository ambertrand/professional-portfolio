import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navigation-wrapper" aria-label="Main navigation">
      <Link to="/" className="logo" aria-label="Go to homepage">
        AB
      </Link>
      <ul className="navigation" id="home">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">
            Work
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
