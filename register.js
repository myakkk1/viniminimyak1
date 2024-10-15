import React, { useState } from'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to create new user
    fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, email }),
    })
     .then((response) => response.json())
     .then((data) => {
        if (data.success) {
          // Registration successful, redirect to login page
          window.location.href = '/login';
        } else {
          setError('Error registering');
        }
      })
     .catch((error) => {
        setError('Error registering');
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        

        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        

        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        

        <button type="submit">Register</button>
        {error && <p style={{ color:'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Register;