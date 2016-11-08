import React from "react";
import ReactDOM from "react-dom";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>Hello, {this.props.name}!</div>
    );
  }
}
