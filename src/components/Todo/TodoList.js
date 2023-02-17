import React, { useState } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Input from "../Input/Input";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [done, setDone] = useState(false);
  const [todo, setTodo] = useState(false);
  const [editingItem, setEditingItem] = useState("");
  const [updatedInput, setUpdatedInput] = useState("");

  const handleChange = (e) => {
    // this.setState({ input: e.target.value });
    setInput(e.target.value);
  };

  const handleClick = () => {
    console.log("click");
    // this.setState({
    //   data: [
    //     ...data,
    //     { text: input, id: this.generateRandomId(), isDone: false },
    //   ],
    //   input: "",
    // });
    setData([...data, { text: input, id: generateRandomId(), isDone: false }]);
    setInput("");
  };

  const deleteItem = (e, id) => {
    // this.setState({
    //   data: data.filter((item) => {
    //     return item.id !== id;
    //   }),
    // });
    setData(
      data.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const generateRandomId = () => {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    return s4() + s4();
  };

  const handleCheckbox = (e, id) => {
    // console.log("checked");
    // this.setState({
    //   data: data.map((item, index, array) => {
    //     if (item.id === id) {
    //       return { ...item, isDone: !item.isDone };
    //     }
    //     return item;
    //   }),
    // });
    setData(
      data.map((item, index, array) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })
    );
  };

  const showAll = () => {
    // this.setState({ showDone: true, showTodo: true });
    setDone(true);
    setTodo(true);
  };
  const showDone = () => {
    // this.setState({ showDone: true, showTodo: false });
    setDone(true);
    setTodo(false);
  };
  const showTodo = () => {
    // this.setState({ showDone: false, showTodo: true });
    setDone(false);
    setTodo(true);
  };

  const deleteDoneTasks = () => {
    // this.setState({ data: data.filter((item) => !item.isDone) });
    setData(data.filter((item) => !item.isDone));
  };

  const deleteAllTasks = () => {
    // this.setState({ data: [] });
    setData([]);
  };

  const editItem = (e, id) => {
    // this.setState({ editingItem: id });
    setEditingItem(id);
  };

  const saveItem = (e, id) => {
    // this.setState({
    //   data: [
    //     ...data?.filter((item) => {
    //       if (item.id === id) {
    //         return (item.text = editedInput);
    //       }
    //       return item;
    //     }),
    //   ],
    //   editingItem: "",
    // });
    setData([
      ...data?.filter((item) => {
        if (item.id === id) {
          return (item.text = updatedInput);
        }
        return item;
      }),
    ]);
    setEditingItem("");
  };

  const onExit = () => {
    // this.setState({ editingItem: "" });
    setEditingItem("");
  };

  const editedInput = (e) => {
    // this.setState({
    //   data: data.map((item) => {
    //     if (item.id === editingItem) {
    //       return { ...item, text: e.target.value };
    //     }
    //     return item;
    //   }),
    // });
    setData(
      data.map((item) => {
        if (item.id === editingItem) {
          return { ...item, text: e.target.value };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <h1>Todo Input</h1>
          <div className="new-task-box">
            <Icon className="fa-solid fa-book" />
            <Input
              type="text"
              onChange={handleChange}
              className="todo-input"
              placeholder="New Todo"
              value={input}
              onSave={saveItem}
            />
            <br />
            <Button
              text="Add new task"
              onClick={handleClick}
              className="new-task-btn"
            />
          </div>
        </div>
        <div>
          <h2>Todo List</h2>
          <Button text="All" className="btn" onClick={showAll} />
          <Button text="Done" className="btn" onClick={showDone} />
          <Button text="Todo" className="btn" onClick={showTodo} />
          {data
            ?.filter((item) => {
              if (done && item.isDone) {
                return true;
              }
              if (todo && !item.isDone) {
                return true;
              }
              if (!done && !todo) {
                return true;
              }
              return false;
            })
            .map((item, index) => {
              return (
                <TodoItem
                  data={item}
                  key={index}
                  onDelete={deleteItem}
                  onCheckbox={(e) => handleCheckbox(e, item.id)}
                  className={item.isDone ? "done" : ""}
                  editingItem={editingItem}
                  onEdit={editItem}
                  onEditInput={editedInput}
                  onSave={saveItem}
                  onExit={onExit}
                />
              );
            })}
          <br />
          <Button
            text="Delete done tasks"
            className="delete"
            onClick={deleteDoneTasks}
          />
          <Button
            text="Delete all tasks"
            className="delete"
            onClick={deleteAllTasks}
          />
        </div>
      </form>
    </div>
  );
};

export default TodoList;
