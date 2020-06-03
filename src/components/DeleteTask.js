import React, { Component } from "react";

// Styles
import "../styles/Task.css";

// Redux
import { connect } from "react-redux";
import { deleteTask } from "../redux/actions/dataActions";

class DeleteTask extends Component {
  handleDelete = () => {
    this.props.deleteTask(this.props.taskId);
  };

  render() {
    return (
      <button onClick={this.handleDelete} className="delete-btn edit-btn">
        Delete
      </button>
    );
  }
}

export default connect(null, { deleteTask })(DeleteTask);
