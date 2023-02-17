import React from "react";
import Icon from "../Icon/Icon";
import Input from "../Input/Input";

const TodoItem = (props) => {
  return (
    <div>
      {props.data.id === props.editingItem ? (
        <div className="edit-card">
          <Input
            type={props.edit}
            className="hidden-input"
            onChange={props.onEditInput}
          />
          <div>
            <Icon className="fa-solid fa-circle-check" onClick={props.onSave} />
            <Icon className="fa-solid fa-circle-xmark" onClick={props.onExit} />
          </div>
        </div>
      ) : (
        <ul>
          <li className={props.className}>{props.data.text}</li>
          <div>
            <Input
              type="checkbox"
              checked={props.data.isDone}
              onChange={(e) => {
                props.onCheckbox(e, props.data.id);
              }}
            />
            <Icon
              className="fa-solid fa-pencil"
              onClick={(e) => props.onEdit(e, props.data.id)}
            />
            <Icon
              className="fa-solid fa-trash"
              onClick={(e) => props.onDelete(e, props.data.id)}
            />
          </div>
        </ul>
      )}
    </div>
  );
};

export default TodoItem;
