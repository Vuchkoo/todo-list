import React, { Component } from "react";

export default class Icon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // return <span onClick={this.props.onClick}>{this.props.text}</span>;
    return (
      <i className={this.props.className} onClick={this.props.onClick}></i>
    );
  }
}
