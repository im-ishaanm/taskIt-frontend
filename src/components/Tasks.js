import React, { Component } from "react";

// Components
import Task from "./Task";

// Styles
import "../styles/Tasks.css";

// Redux
import { connect } from "react-redux";
import { getTasks, deleteAllCompleted } from "../redux/actions/dataActions";

class Tasks extends Component {
  state = {
    tasks: null,
    showIncomplete: false,
  };

  componentDidMount() {
    this.props.getTasks();
  }

  handleDeleteAllCompleted = () => {
    if (this.state.showIncomplete) {
      this.props.deleteAllCompleted();
    } else {
      this.props.getTasks();
    }
  };

  handleToggle = () => {
    this.setState(
      {
        showIncomplete: !this.state.showIncomplete,
      },
      () => {
        console.log(this.state.showIncomplete);
        this.handleDeleteAllCompleted();
      }
    );
  };

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
        <div className="tasks-header-area">
          <h2 className="mytasks-title">My Tasks</h2>
          <button
            onClick={this.handleToggle}
            class={this.state.showIncomplete ? "show-all" : "show-incomplete"}
          >
            {this.state.showIncomplete
              ? "View All Tasks"
              : "View Incomplete Tasks"}
          </button>
        </div>
        <div className="tasks-list">{tasksMarkup}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getTasks, deleteAllCompleted })(
  Tasks
);
