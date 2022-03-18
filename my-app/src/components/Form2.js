import React, { Component } from "react";

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      LastName: "",
      Age: "",
      Address: "",
    };
  }

  onChangeFirstNameHandling = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  onChangeLastNameHandling = (event) => {
    this.setState({
      LastName: event.target.value,
    });
  };

  onChangeAgeHandling = (event) => {
    this.setState({
      Age: event.target.value,
    });
  };

  onChangeAddressHandling = (event) => {
    this.setState({
      Address: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    alert(`
      first_name: ${this.state.firstName} 
      last_name: ${this.state.LastName} 
      age: ${this.state.Age} 
      address: ${this.state.Address}
      `);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div>
          <label> FirstName </label>
          <input
            type="text"
            value={this.firstName}
            onChange={this.onChangeFirstNameHandling}
          />
        </div>
        <div>
          <label> lastName </label>
          <input
            type="text"
            value={this.LastName}
            onChange={this.onChangeLastNameHandling}
          />
        </div>
        <div>
          <label> Age </label>
          <input
            type="text"
            value={this.Age}
            onChange={this.onChangeAgeHandling}
          />
        </div>
        <div>
          <label> Address </label>
          <textarea
            value={this.Address}
            onChange={this.onChangeAddressHandling}
          ></textarea>
        </div>
        <button type="submit"> Submit </button>
      </form>
    );
  }
}
export default UserForm;
