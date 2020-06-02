import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <Tasks />
        </div>
      </Provider>
    );
  }
}

export default App;
