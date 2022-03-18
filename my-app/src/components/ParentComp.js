import React, { Component } from "react";
import PureComp from "./pureComp";
import RegComp from "./RegComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Kamal",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Kamal",
      });
    }, 2000);
  }
  render() {
    console.log(
      "**********************Parent render method*************************"
    );
    return (
      <div>
        Parent components
        <MemoComp />
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
      </div>
    );
  }
}

export default ParentComp;
