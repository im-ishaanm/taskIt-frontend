import React, { Component } from "react";
import "../styles/Navbar.css";

// Router
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/" className="react-link react-link-title">
          <h1 className="navbar-title">taskIt</h1>
        </Link>
        <ul className="nav-links">
          <Link className="react-link" to="/">
            <li>My Tasks</li>
          </Link>
          <Link className="react-link" to="/about">
            <li>About</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Navbar;
