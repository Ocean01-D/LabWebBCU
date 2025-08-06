import React, { useEffect, useState } from 'react';

function UserProfile() {
  const [data, setData] = useState(null); // user data
  const [loading, setLoading] = useState(true); // loading flag
  const [error, setError] = useState(null); // error info

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) throw new Error('Network response was not ok');

        const json = await response.json();
        setData(json); // set user data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // done loading
      }
    }

    fetchData();
  }, []); 

  if (loading) return <p style={{ textAlign: 'center' }}>Loading user data...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Website:</strong> <a href={`https://${data.website}`} target="_blank" rel="noreferrer">{data.website}</a></p>
    </div>
  );
}

export default UserProfile;
