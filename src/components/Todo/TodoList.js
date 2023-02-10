import React, { Component } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Input from "../Input/Input";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
    input: "",
    showDone: false,
    showTodo: false,
    editingItem: "",
    editedInput: "",
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleClick = () => {
    console.log("click");
    this.setState({
      data: [
        ...this.state.data,
        { text: this.state.input, id: this.generateRandomId(), isDone: false },
      ],
      input: "",
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

  handleCheckbox = (e, id) => {
    console.log("checked");
    this.setState({
      data: this.state.data.map((item, index, array) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      }),
    });
  };

  showAll = () => {
    this.setState({ showDone: true, showTodo: true });
  };
  showDone = () => {
    this.setState({ showDone: true, showTodo: false });
  };
  showTodo = () => {
    this.setState({ showDone: false, showTodo: true });
  };

  deleteDoneTasks = () => {
    this.setState({ data: this.state.data.filter((item) => !item.isDone) });
  };

  deleteAllTasks = () => {
    this.setState({ data: [] });
  };

  editItem = (e, id) => {
    this.setState({ editingItem: id });
  };

  saveItem = () => {
    console.log("saved");
  };

  onExit = () => {
    this.setState({ editingItem: "" });
  };

  editedInput = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <h1>Todo Input</h1>
            <div className="new-task-box">
              <Icon className="fa-solid fa-book" />
              <Input
                type="text"
                onChange={this.handleChange}
                className="todo-input"
                placeholder="New Todo"
                value={this.state.input}
              />
              <br />
              <Button
                text="Add new task"
                onClick={this.handleClick}
                className="new-task-btn"
              />
            </div>
          </div>
          <div>
            <h2>Todo List</h2>
            <Button text="All" className="btn" onClick={this.showAll} />
            <Button text="Done" className="btn" onClick={this.showDone} />
            <Button text="Todo" className="btn" onClick={this.showTodo} />
            {this.state.data
              ?.filter((item) => {
                if (this.state.showDone && item.isDone) {
                  return true;
                }
                if (this.state.showTodo && !item.isDone) {
                  return true;
                }
                if (!this.state.showDone && !this.state.showTodo) {
                  return true;
                }
                return false;
              })
              .map((item, index) => {
                return (
                  <TodoItem
                    data={item}
                    key={index}
                    onDelete={this.deleteItem}
                    onCheckbox={(e) => this.handleCheckbox(e, item.id)}
                    className={item.isDone ? "done" : ""}
                    editingItem={this.state.editingItem}
                    onEdit={this.editItem}
                    onChange={this.handleChange}
                    onSave={this.saveItem}
                    onExit={this.onExit}
                  />
                );
              })}
            <br />
            <Button
              text="Delete done tasks"
              className="delete"
              onClick={this.deleteDoneTasks}
            />
            <Button
              text="Delete all tasks"
              className="delete"
              onClick={this.deleteAllTasks}
            />
          </div>
        </form>
      </div>
    );
  }
}
