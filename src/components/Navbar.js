/* eslint-disable */

// react & Library
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  //state

  return (
    <div className="navbar">
      <div className="nav-center">
        <Link to="/" className="nav-logo">
          archive.macworks
        </Link>
        <div className="nav-wrapper">
          <Link to="/" className="nav-btn">
            Projects
          </Link>

          <Link to="/about" className="nav-btn">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
