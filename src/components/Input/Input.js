import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        type={this.props.type}
        onChange={this.props.onChange}
        checked={this.props.checked}
        className={this.props.className}
        placeholder={this.props.placeholder}
        value={this.props.value}
      />
    );
  }
}
