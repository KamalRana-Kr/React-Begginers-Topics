import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure render method");
    return <div>Pure components {this.props.name}</div>;
  }
}

export default PureComp;
