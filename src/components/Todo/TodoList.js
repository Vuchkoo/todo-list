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
    setInput(e.target.value);
  };

  const handleClick = () => {
    setData([...data, { text: input, id: generateRandomId(), isDone: false }]);
    setInput("");
  };

  const deleteItem = (e, id) => {
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
    setDone(true);
    setTodo(true);
  };
  const showDone = () => {
    setDone(true);
    setTodo(false);
  };
  const showTodo = () => {
    setDone(false);
    setTodo(true);
  };

  const deleteDoneTasks = () => {
    setData(data.filter((item) => !item.isDone));
  };

  const deleteAllTasks = () => {
    setData([]);
  };

  const editItem = (e, id) => {
    setEditingItem(id);
  };

  const saveItem = (e, id) => {
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
    setEditingItem("");
  };

  const editedInput = (e) => {
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
