import React, { useState } from "react";

function HookCount() {
  const [count, setCount] = useState(0);
  console.log("count", count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}
export default HookCount;
