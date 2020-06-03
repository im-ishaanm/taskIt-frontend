import React, { Component, Fragment } from "react";

// Styles

import "../styles/TaskForm.css";

// Material UI

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

// Redux
import { editTask } from "../redux/actions/dataActions";
import { connect } from "react-redux";

class UpdateTask extends Component {
  state = {
    body: "",
    label: "",
    status: "",
    taskId: "",
    open: false,
  };

  mapTaskDataToState = (data) => {
    this.setState({
      body: data.body,
      label: data.label,
      status: data.status,
      taskId: data.taskId,
    });
  };

  componentDidMount() {
    const { task } = this.props;
    this.mapTaskDataToState(task);
  }

  handleOpen = () => {
    this.setState({
      open: true,
    });
    this.mapTaskDataToState(this.props.task);
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const newData = {
      body: this.state.body,
      label: this.state.label,
      status: this.state.status,
    };

    e.preventDefault();
    this.props.editTask(newData, this.state.taskId);
    this.handleClose();
  };

  render() {
    return (
      <Fragment>
        <div>
          <button onClick={this.handleOpen} className="update-btn edit-btn">
            Update
          </button>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth={true}
        >
          <DialogContent>
            <h3>Update Task Details</h3>
            <form autoComplete="off" className="update-form">
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
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.handleSubmit}>Update</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default connect(null, { editTask })(UpdateTask);
