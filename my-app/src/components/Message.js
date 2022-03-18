//State exaple.
import React, { Component } from "react";

//like i have one requirement when user click on the button the message color will be change.this is state.
//state maintain inside the componenet.
class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "WellCome Visitor.",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing.",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
