import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./components/HomePage/index";
import spotify from "./spotifyAPI";

spotify.getUserProfile("danield9tqh").then((profile)=> {
  ReactDOM.render(<HomePage name={profile.display_name}/>, document.getElementById('root'));
})
