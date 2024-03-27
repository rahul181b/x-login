import React, { useState } from "react";
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      alert("please fill out this field");
      return;
    }

    if (username === "user" && password === "password") {
      setError("");
      setIsSubmitted(true);
    } else {
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div>
            <label htmlFor="username" name="username">
              Username:
              <input
                type="text"
                placeholder="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="username" name="username">
              Password:
              <input
                type="password"
                placeholder="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Welcome, {username}!</p>
      )}
    </div>
  );
}

export default App;
