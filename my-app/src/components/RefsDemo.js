import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbref = null;
    this.setCbref = (element) => {
      this.cbref = element;
    };
  }

  componentDidMount() {
    if (this.cbref) {
      this.cbref.focus();
    }
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(`Hello ${this.inputRef.current.value}..`);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbref} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefDemo;
