import React, { Component } from "react";
import dayjs from "dayjs";

import DeleteTask from "./DeleteTask";
import UpdateTask from "./UpdateTask.js";

// Styles
import "../styles/Task.css";

class Task extends Component {
  render() {
    const {
      task: { body, createdAt, status, label, taskId },
    } = this.props;

    // Formatting the status
    let status_class;

    if (status === "In Progress") {
      status_class = "in-progress";
    } else {
      status_class = status.toLowerCase();
    }

    return (
      <div key={taskId} className="task-card">
        <div className="line-1">
          <h3 className="task-body">
            {body}{" "}
            <span className={"time-stamp"}>
              posted on {dayjs(createdAt).format("DD/MM/YYYY")}
            </span>
          </h3>
          <div className="other-data">
            <p className={label.toLowerCase() + " label"}>{label}</p>
            <p className={status_class + " status-symbol"}>{status}</p>
          </div>
        </div>
        <div className="line-2">
          <UpdateTask task={this.props.task} />
          <DeleteTask taskId={taskId} />
        </div>
      </div>
    );
  }
}

export default Task;
