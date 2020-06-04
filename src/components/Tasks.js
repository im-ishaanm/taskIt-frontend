import React, { Component } from "react";

// Components
import Task from "./Task";

// Styles
import "../styles/Tasks.css";

// Redux
import { connect } from "react-redux";
import { getTasks, sortBy } from "../redux/actions/dataActions";

class Tasks extends Component {
  componentDidMount() {
    this.props.getTasks();
  }

  handleSortChange = (e) => {
    this.props.sortBy(e.target.value);
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
          <select
            onChange={this.handleSortChange}
            name="status"
            id="sort-by-dropdown"
          >
            <option hidden="true" value="Sort By">
              Sort By
            </option>
            <option value="Incomplete Tasks">Incomplete Tasks</option>
            <option value="New">New Tasks</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
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
  sortBy,
};

export default connect(mapStateToProps, mapActionsToProps)(Tasks);
