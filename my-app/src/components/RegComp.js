import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("Reg render method");
    return <div>Reg components {this.props.name}</div>;
  }
}

export default RegComp;
