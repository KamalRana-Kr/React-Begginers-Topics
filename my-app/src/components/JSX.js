import React from "react";
//Here give the example of the jsx and without jsx.

//function componenet and jsx.(when we write code in html REACT library do into createElement function.)
const Hello = () => {
  return (
    <div>
      <h1>Hello Kamal</h1>
    </div>
  );
};

//Here is with out jsx.
// const Hello = () => {
//   return React.createElement(
//     "div",
//     { id: "demoID", className: "Dummy" },
//     React.createElement("h1", null, "Hello Kamal")
//   );
// };
export default Hello;
//this code is jsx.
