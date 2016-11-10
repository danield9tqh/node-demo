import React from "react";
require("./style.css");

export default class UserProfile extends React.Component {

  renderImage() {
    if(this.props.profile.images && this.props.profile.images[0]) {
      return (
        <img src={this.props.profile.images[0].url} />
      );
    } else {
      const blank_img_url = "http://www.porticodesign.com/wp-content/uploads/2014/03/blank-person-07d1653f840307220b203ecb834f5904.png";
      return <img src={blank_img_url} />;
    }
  }

  renderAttributes() {
    return (
      <div className="attributes">
        <div className="attribute">Name: {this.props.profile.display_name}</div>
        <div className="attribute">Username: {this.props.profile.id}</div>
        <div className="attribute">Followers: {this.props.profile.followers.total}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="profile">
        {this.props.profile ? this.renderImage() : null}
        {this.props.profile ? this.renderAttributes(): null}
      </div>
    );
  }
}
