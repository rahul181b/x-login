import React, { useState } from "react";
import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setUserInfo((preInfo) => ({ ...preInfo, [e.target.name]: e.target.value }))

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo.username.trim() === "" || userInfo.password.trim() === "") {
      alert("please fill out this field");
      return;
    }

    if (userInfo.username === "user" && userInfo.password === "password") {

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

      {!isSubmitted ? (<div><p>Welcome {userInfo.username}!</p></div>)
        : (<form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div>
            <label >
              Username:
              <input type="text" name="username" value={userInfo.username} onChange={handleChange} />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="password" name="password" value={userInfo.password} onChange={handleChange} />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>)}

    </div >
  );
}

export default App;
