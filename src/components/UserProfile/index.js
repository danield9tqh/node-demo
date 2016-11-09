import React from "react";
import spotify from "../../spotifyAPI";

export default class UserProfile extends React.Component {

  componentDidMount() {
    spotify.getUserProfile(this.props.username).then((profile) => {
      this.setState(profile);
    });
  }

  getImages() {
    if(this.state.images) {
      return (
        this.state.images.map((img) => {
          return <div key={img.toString()}><img src={img.url} /></div>
        })
      );
    } else {
      return null;
    }
  }

  getName() {
    return <div>Name: {this.state.display_name}</div>;
  }

  getUsername() {
    return <div>Username: {this.state.id}</div>;
  }

  getNumFollowers() {
    return <div>Followers: {this.state.followers.total}</div>
  }

  render() {
    if (this.state) {
      return (
        <div>
          {this.getImages()}
          {this.getName()}
          {this.getUsername()}
          {this.getNumFollowers()}
        </div>
      );
    } else {
      return null
    }
  }
}
