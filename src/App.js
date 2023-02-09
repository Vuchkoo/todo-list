import "./App.css";
import React, { Component } from "react";
import TodoList from "./components/Todo/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TodoList />;
  }
}

export default App;
