import React, { useReducer, useState } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "TOGGLE_TODO":
      return state.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
    case "REMOVE_TODO":
      return state.filter((t) => t.id !== action.payload);
    default:
      return state;
  }
}

export default function Exercise14() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      dispatch({ type: "ADD_TODO", payload: input });
      setInput("");
    }
  };

  return (
    <div>
      <h2>Exercise 14: Todo with useReducer</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => dispatch({ type: "TOGGLE_TODO", payload: t.id })}
            />
            <span style={{ textDecoration: t.completed ? "line-through" : "none" }}>
              {t.text}
            </span>
            <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: t.id })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
