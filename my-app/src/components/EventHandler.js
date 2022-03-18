import React, { Component } from "react";

class EventClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    //for the 3rd step we used this.
    // this.Eventhandler = this.Eventhandler.bind(this);
  }

  // Eventhandler() {
  //   this.setState({
  //     message: "GoodBye.",
  //   });
  // }

  //4rth step use this only calling not used bind for this array function.
  Eventhandler = () => {
    this.setState({ message: "GoodBye." });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 1st way : we use another way istead of bind() used calling()*/}
        {/* <button onClick={this.Eventhandler.bind(this)}>Click</button> */}

        {/* 2nd way : we use another way istead of bind() used calling()*/}
        {/* <button onClick={() => this.Eventhandler()}>Click</button> */}

        {/* 3rd way : we use simple require function */}
        {/* <button onClick={this.Eventhandler}>Click</button> */}

        {/* 4rd way : we use simple require function */}
        <button onClick={this.Eventhandler}>Click</button>
      </div>
    );
  }
}

export default EventClick;
