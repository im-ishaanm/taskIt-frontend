import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <TaskForm />
          <Tasks />
        </div>
      </Provider>
    );
  }
}

export default App;
