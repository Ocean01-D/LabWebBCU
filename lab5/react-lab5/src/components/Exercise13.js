import React, { useState, useEffect } from "react";

function DataLoader({ render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return render({ data, loading, error });
}

export default function Exercise13() {
  return (
    <div>
      <h2>Exercise 13: Render Props</h2>
      <DataLoader
        render={({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p style={{ color: "red" }}>{error}</p>;
          return (
            <div>
              <h3>{data.title}</h3>
              <p>{data.body}</p>
            </div>
          );
        }}
      />
    </div>
  );
}
