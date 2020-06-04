import React, { Component } from "react";
import "../styles/About.css";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-page">
        <h2>Welcome to taskIt</h2>
        <p>taskIt is a simple task manager app created by Ishaan Mukherjee.</p>
        <br />
        <h3>Frameworks used</h3>
        <h4>Front End</h4>
        <ul>
          <li>React JS</li>
          <li>dayjs</li>
          <li>Redux</li>
          <li>Material UI</li>
        </ul>
        <h4>Back End</h4>
        <ul>
          <li>Express</li>
          <li>Node JS</li>
          <li>Firebase</li>
        </ul>
      </div>
    );
  }
}

export default AboutPage;
