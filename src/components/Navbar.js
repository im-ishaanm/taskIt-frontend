import React, { Component } from "react";
import "../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h1 className="navbar-title">taskIt</h1>
        <ul className="nav-links">
          <li>My Tasks</li>
          <li>About</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
