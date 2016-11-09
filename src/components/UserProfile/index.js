import React from "react";
import spotify from "../../spotifyAPI";

export default class UserProfile extends React.Component {

  componentDidMount() {
    spotify.getUserProfile(this.props.username).then((profile) => {
      this.setState(profile);
    });
  }

  render() {
    return (
      <div>
        {this.state ? this.state.display_name : null}
      </div>
    );
  }
}
