import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h3 style={{ color: "red" }}>Something went wrong!</h3>;
    }
    return this.props.children;
  }
}

function BuggyComponent() {
  const [count, setCount] = React.useState(0);
  if (count === 3) throw new Error("Crashed at 3!");
  return <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>;
}

export default function Exercise16() {
  return (
    <div>
      <h2>Exercise 16: Error Boundary</h2>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}
