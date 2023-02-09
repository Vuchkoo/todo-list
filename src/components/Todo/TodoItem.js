import React, { Component } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li>{this.props.data.text}</li>
        <Button
          text="Delete"
          onClick={(e) => this.props.onClick(e, this.props.data.id)}
        />
      </ul>
    );
  }
}
