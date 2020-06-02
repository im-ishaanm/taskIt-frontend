import React, { Component } from "react";

// Components
import Task from "./Task";

// Styles
import "../styles/Tasks.css";

// Redux
import { connect } from "react-redux";
import { getTasks } from "../redux/actions/dataActions";

class Tasks extends Component {
  state = {
    tasks: null,
  };

  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    const { tasks } = this.props.data;
    // TODO: Loading animation

    let tasksMarkup = tasks ? (
      tasks.map((task) => <Task key={task.taskId} task={task} />)
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

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getTasks })(Tasks);
