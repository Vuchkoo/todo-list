import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.onClick} className={this.props.className}>
        {this.props.text}
      </button>
    );
  }
}
