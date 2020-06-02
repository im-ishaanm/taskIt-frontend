import React, { Component } from "react";
import "../styles/Tasks.css";

class Tasks extends Component {
  render() {
    return (
      <div className="tasks-container">
        <h2 className="mytasks-title">My Tasks</h2>
        <div className="tasks-list"></div>
      </div>
    );
  }
}

export default Tasks;
