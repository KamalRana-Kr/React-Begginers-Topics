import React from "react";
//1)this is function components.
// function Greet(){
//     return <h1>Hello Kamal</h1>
// }

//ES6
const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.first_name} {props.last_name}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;

//2nd way export and sort code
// export const Greet = () =><h1>Hello Kamal</h1>
