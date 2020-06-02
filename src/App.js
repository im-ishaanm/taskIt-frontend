import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Tasks />
      </div>
    );
  }
}

export default App;
