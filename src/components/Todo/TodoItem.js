import React, { Component } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Input from "../Input/Input";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.data);
    return (
      <div>
        {this.props.data.id === this.props.editingItem ? (
          <div className="edit-card">
            <Input
              type={this.props.edit}
              className="hidden-input"
              onChange={this.props.onEditInput}
            />
            <div>
              <Icon
                className="fa-solid fa-circle-check"
                onClick={this.props.onSave}
              />
              <Icon
                className="fa-solid fa-circle-xmark"
                onClick={this.props.onExit}
              />
            </div>
          </div>
        ) : (
          <ul>
            <li className={this.props.className}>{this.props.data.text}</li>
            <div>
              <Input
                type="checkbox"
                checked={this.props.data.isDone}
                onChange={(e) => {
                  this.props.onCheckbox(e, this.props.data.id);
                }}
              />
              <Icon
                className="fa-solid fa-pencil"
                onClick={(e) => this.props.onEdit(e, this.props.data.id)}
              />
              <Icon
                className="fa-solid fa-trash"
                onClick={(e) => this.props.onDelete(e, this.props.data.id)}
              />
            </div>
          </ul>
        )}
      </div>
    );
  }
}
