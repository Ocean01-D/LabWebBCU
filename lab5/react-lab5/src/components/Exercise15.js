import React, { useState, useCallback } from "react";

const ListItem = React.memo(({ item, onDelete }) => {
  console.log("Rendering:", item);
  return (
    <li>
      {item} <button onClick={() => onDelete(item)}>Delete</button>
    </li>
  );
});

export default function Exercise15() {
  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);
  const [count, setCount] = useState(0);

  const handleDeleteItem = useCallback(
    (item) => {
      setItems((prev) => prev.filter((i) => i !== item));
    },
    [] // stable function
  );

  return (
    <div>
      <h2>Exercise 15: React.memo + useCallback</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count ({count})</button>
      <ul>
        {items.map((i) => (
          <ListItem key={i} item={i} onDelete={handleDeleteItem} />
        ))}
      </ul>
    </div>
  );
}
