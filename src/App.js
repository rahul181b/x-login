import React, { useState } from "react";
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      alert("please fill out this field");
      return;
    }

    if (username === "user" && password === "password") {

      setError("");
      setIsSubmitted(false);

    }
    else {
      setError("Invalid username or password");
      setIsSubmitted(true);
    }
  }
  return (
    <div >
      <h1>Login Page</h1>

      {!isSubmitted ? (<p>Welcome {username}!</p>)
        : (<form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div>
            <label >
              Username:
              <input type="text" placeholder="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="password" placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>)}

    </div >
  );
}

export default App;
