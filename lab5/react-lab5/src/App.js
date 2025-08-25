import React, { useState } from "react";
import Exercise13 from "./components/Exercise13";
import Exercise14 from "./components/Exercise14";
import Exercise15 from "./components/Exercise15";
import Exercise16 from "./components/Exercise16";
import Exercise17 from "./components/Exercise17";
import Exercise18 from "./components/Exercise18";
import Exercise19 from "./components/Exercise19";

function App() {
  const [current, setCurrent] = useState("Exercise13");

  const renderComponent = () => {
    switch (current) {
      case "Exercise13":
        return <Exercise13 />;
      case "Exercise14":
        return <Exercise14 />;
      case "Exercise15":
        return <Exercise15 />;
      case "Exercise16":
        return <Exercise16 />;
      case "Exercise17":
        return <Exercise17 />;
      case "Exercise18":
        return <Exercise18 />;
      case "Exercise19":
        return <Exercise19 />;
      default:
        return <h2>Select an exercise</h2>;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lab 5 Exercises</h1>
      <div style={{ marginBottom: "20px" }}>
        {["Exercise13","Exercise14","Exercise15","Exercise16","Exercise17","Exercise18","Exercise19"].map((ex) => (
          <button
            key={ex}
            onClick={() => setCurrent(ex)}
            style={{
              marginRight: "10px",
              padding: "8px 12px",
              cursor: "pointer",
            }}
          >
            {ex}
          </button>
        ))}
      </div>
      <div>{renderComponent()}</div>
    </div>
  );
}

export default App;
