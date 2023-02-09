import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <input type={this.props.type} onChange={this.props.onChange} />;
  }
}
