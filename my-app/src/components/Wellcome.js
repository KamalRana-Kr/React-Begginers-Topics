// here is the class components.
import React, { Component } from "react";

class Wellcome extends Component {
  render() {
    return (
      //this is props example.
      <h1>
        Hello {this.props.first_name} {this.props.last_name}
      </h1>
    );
  }
}

export default Wellcome;
