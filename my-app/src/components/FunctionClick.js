import React from "react";

//Event handling in function component
function FunctionOnClick() {
  function clickHandler() {
    console.log("button clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionOnClick;
