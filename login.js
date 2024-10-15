import React, { useState } from'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to authenticate user
    fetch('/api/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
     .then((response) => response.json())
     .then((data) => {
        if (data.success) {
          // Login successful, redirect to book list page
          window.location.href = '/books';
        } else {
          setError('Invalid username or password');
        }
      })
     .catch((error) => {
        setError('Error logging in');
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        

        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        

        <button type="submit">Login</button>
        {error && <p style={{ color:'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;