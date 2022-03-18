import React, { Component } from "react";

class ClickHandle extends Component {
  clickHandler() {
    console.log("class button clicked");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me.</button>
      </div>
    );
  }
}

export default ClickHandle;
