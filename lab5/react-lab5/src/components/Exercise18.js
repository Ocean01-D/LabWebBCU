import React, { useState } from "react";

export default function Exercise18() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Exercise 18: Counter (for testing)</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
