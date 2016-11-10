import React from "react";
import ReactDOM from "react-dom";
import UserProfile from "../UserProfile/index";
import spotify from "../../spotifyAPI";
require("./style.css");

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: ""}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    spotify.getUserProfile(this.state.username).then((profile) => {
      if (!profile.error) {
        this.setState({profile: profile});
      } else {
        alert("Error: " + profile.error.message);
      }
    });
  }

  renderUserProfile() {
    if (this.state.profile) {
      return (
          <UserProfile profile={this.state.profile}/>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="display">
        <form onSubmit={this.handleSubmit}>
          Enter a username: <input type="text" value={this.state.username} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        {this.renderUserProfile()}
      </div>
    );
  }
}
