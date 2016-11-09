import React from "react";
import ReactDOM from "react-dom";
import UserProfile from "../UserProfile/index";
require("./style.css");

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="display">
        <UserProfile username={"danield9tqh"}/>
      </div>
    );
  }
}
