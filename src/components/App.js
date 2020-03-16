import React from "react";
import Todos from "../containers/Todo";
import "./App.css";

const today = new Date();
const options = {
  weekday: "long",
  month: "long",
  day: "numeric"
};

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="app">
          <div className="app-header">
            <h1>ToDo List</h1>
            <p>{today.toLocaleDateString("en-US", options)}</p>
          </div>
          <div className="newdiv">
            <Todos />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
