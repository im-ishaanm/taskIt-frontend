import React, { Component } from "react";

// Styles
import "../styles/TaskForm.css";

// Redux
import { connect } from "react-redux";
import { postTask } from "../redux/actions/dataActions";

class TaskForm extends Component {
  constructor() {
    super();
    this.state = {
      label: "",
      body: "",
      status: "New",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postTask(this.state);

    this.setState({
      label: "",
      body: "",
      status: "New",
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form
          autocomplete="off"
          onSubmit={this.handleSubmit}
          className="task-form"
        >
          <h2 className="create-task-header">Create a Task</h2>
          <label htmlFor="body">Task</label>
          <input
            placeholder="What is your task?"
            className="text-form"
            onChange={this.handleChange}
            type="text"
            name="body"
            id="task-body"
            value={this.state.body}
          />
          <label htmlFor="label">Label</label>
          <input
            placeholder="Give it a label"
            className="text-form"
            onChange={this.handleChange}
            type="text"
            name="label"
            id="task-label"
            value={this.state.label}
          />
          <label htmlFor="status">Status</label>
          <select
            value={this.state.status}
            name="status"
            onChange={this.handleChange}
            id="task-status"
          >
            <option value="New">New</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <button id="create-task-btn" type="submit">
            Create Task
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { postTask })(TaskForm);
