import React, { Component } from "react";
import axios from "axios";

// Components
import Task from "./Task";

// Styles
import "../styles/Tasks.css";

class Tasks extends Component {
  state = {
    tasks: null,
  };

  componentDidMount() {
    axios
      .get("/tasks")
      .then((res) => {
        console.log(res.data);
        this.setState({
          tasks: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // TODO: Loading animation

    let tasksMarkup = this.state.tasks ? (
      this.state.tasks.map((task) => <Task key={task.taskId} task={task} />)
    ) : (
      <p>Loading...</p>
    );

    return (
      <div className="tasks-container">
        <h2 className="mytasks-title">My Tasks</h2>
        <div className="tasks-list">{tasksMarkup}</div>
      </div>
    );
  }
}

export default Tasks;
