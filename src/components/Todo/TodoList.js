import React, { Component } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [{ text: "test", id: 1 }],
    input: "",
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleClick = () => {
    console.log("click");
    this.setState({
      data: [
        ...this.state.data,
        { text: this.state.input, id: this.generateRandomId() },
      ],
    });
  };

  deleteItem = (e, id) => {
    this.setState({
      data: this.state.data.filter((item) => {
        return item.id !== id;
      }),
    });
  };

  generateRandomId = () => {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    return s4() + s4();
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <h1>Todo Input</h1>
            <Input onChange={this.handleChange} />
            <br />
            <Button text="Add new task" onClick={this.handleClick} />
          </div>
          <div>
            <h2>Todo List</h2>
            <Button text="All" />
            <Button text="Done" />
            <Button text="Todo" />
            {this.state.data?.map((item, index) => {
              return (
                <TodoItem data={item} key={index} onClick={this.deleteItem} />
              );
            })}
          </div>
        </form>
      </div>
    );
  }
}
