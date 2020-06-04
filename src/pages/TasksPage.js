import React, { Component } from "react";
import Tasks from "../components/Tasks";
import TaskForm from "../components/TaskForm";

class TasksPage extends Component {
  render() {
    return (
      <div>
        <TaskForm />
        <Tasks />
      </div>
    );
  }
}

export default TasksPage;
