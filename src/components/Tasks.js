import React, { Component } from "react";

// Components
import Task from "./Task";

// Styles
import "../styles/Tasks.css";

// Redux
import { connect } from "react-redux";
import { getTasks, sortByIncomplete } from "../redux/actions/dataActions";

class Tasks extends Component {
  componentDidMount() {
    this.props.getTasks();
  }

  handleSortIncomplete = () => {
    console.log("sorting");
    this.props.sortByIncomplete();
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
            onClick={this.handleSortIncomplete}
            className="show-incomplete"
          >
            Sort by Incompleted
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

const mapActionsToProps = {
  getTasks,
  sortByIncomplete,
};

export default connect(mapStateToProps, mapActionsToProps)(Tasks);
