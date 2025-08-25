import React, { useState } from "react";

export default function Exercise19() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@") || password.length < 4) {
      setError("Invalid input");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Exercise 19: Login Form (for testing)</h2>
      {submitted ? (
        <p>Login successful!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email: </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" disabled={!email || !password}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
