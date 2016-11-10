import React from "react";
import spotify from "../../spotifyAPI";
require("./style.css");

export default class UserProfile extends React.Component {

  componentDidMount() {
    spotify.getUserProfile(this.props.username).then((profile) => {
      this.setState(profile);
    });
  }

  getImages() {
    if(this.state.images) {
      return (
        <div key={this.state.images[0].toString()}><img src={this.state.images[0].url} /></div>
      );
    } else {
      return null;
    }
  }

  getName() {
    return <div className="attribute">Name: {this.state.display_name}</div>;
  }

  getUsername() {
    return <div className="attribute">Username: {this.state.id}</div>;
  }

  getNumFollowers() {
    return <div className="attribute">Followers: {this.state.followers.total}</div>
  }

  render() {
    if (this.state) {
      return (
        <div className="profile">
          {this.getImages()}
          <div className="attributes">
            {this.getName()}
            {this.getUsername()}
            {this.getNumFollowers()}
          </div>
        </div>
      );
    } else {
      return null
    }
  }
}
