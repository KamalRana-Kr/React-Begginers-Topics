import React from "react";

const withCounter = (WrappedComponent) => {
  class withCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <WrappedComponent
          incrementCount={this.incrementCount}
          count={this.state.count}
        />
      );
    }
  }
  return withCounter;
};

export default withCounter;
