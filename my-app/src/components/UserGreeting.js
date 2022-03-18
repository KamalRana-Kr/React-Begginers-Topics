import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    //Short curcuit condition : if left hand is true then right hand evaluet else nothing
    return this.state.isLoggedIn && <div>Wellcome Kamal</div>;

    //3rd approach more eassy way valid proper with ternary operator
    // return this.state.isLoggedIn ? (
    //   <div>Wellcome kamal</div>
    // ) : (
    //   <div>Wellcome Guest</div>
    // );

    //1st approach: this is not valid inside jsx if/else not work proper for return
    // if (this.state.isLoggedIn) {
    //   return <div>Wellcome kamal</div>;
    // } else {
    //   return <div>Wellcome Guest</div>;
    // }
    //2st approach: valid way we use condition(only one return we use)
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Wellcome Kamal</div>;
    // } else {
    //   message = <div>Wellcome Guest</div>;
    // }
    // return <div>{message}</div>;
  }
}
export default UserGreeting;
