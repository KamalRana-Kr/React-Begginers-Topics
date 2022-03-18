//State exaple.
//LifeCycle
import React, { Component } from "react";
class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kamal",
    };
    console.log("LifeCycleB controctor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFormProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB DidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleB ShouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }

  render() {
    console.log("LifeCycleB render");
    return <div>LifeCycle B</div>;
  }
}

export default LifeCycleB;
