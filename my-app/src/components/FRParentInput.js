import React, { Component } from "react";
import FRInput from "./FRInput";
class FRParentInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  clickHandler = () => {
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHandler} style={{ "pedding": "10px 100px;", "color": "black", "background": "#E75480", "border": "pink", "text-align": "center", "width": "100px", "height": "25px" }}>Focus Input</button>
      </div >
    );
  }
}

export default FRParentInput;
