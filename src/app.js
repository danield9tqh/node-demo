import React from "react";
import ReactDOM from "react-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div>Hello, React!</div>
    );
  }
}

ReactDOM.render(<HomePage />, document.getElementById('root'));
