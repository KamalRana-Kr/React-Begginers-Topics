import React, { Component } from "react";

//here use destructuring in function
// const Destruct = (props) => {
//   const { name, heroName } = props;
//   return (
//     <div>
//       <h1>
//         Hello {name} And My Hero is {heroName}
//       </h1>
//     </div>
//   );
// };

//Class way Descturing
class Destruct extends Component {
  render() {
    const { name, heroName } = this.props;

    return (
      <div>
        <h1>
          Hello {name} And My Hero is {heroName}
        </h1>
      </div>
    );
  }
}

export default Destruct;
