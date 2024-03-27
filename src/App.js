import React, { useState } from "react";
import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setUserInfo((preInfo) => ({ ...preInfo, [e.target.name]: e.target.value }))
    setError(null)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (userInfo.username === "user" && userInfo.password === "password") {

        setError("");
        setIsSubmitted(false);

      } else if (userInfo.username.trim() === "" || userInfo.password.trim() === "") {
        alert("please fill out this field");
        return;
      }
      else {
        setError("Invalid username or password");
        setIsSubmitted(true);
      }
    } catch (e) {

      console.log(e)

    }
  }
  return (
    <div >
      <h1>Login Page</h1>
      {error && <p>{error}</p>}
      {!isSubmitted ? (<div><p>Welcome {userInfo.username}!</p></div>)
        : (<form onSubmit={handleSubmit}>

          <div>
            <label >
              Username:
              <input type="text" placeholder="username" name="username" value={userInfo.username} onChange={handleChange} />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="password" name="password" placeholder="password" value={userInfo.password} onChange={handleChange} />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>)}

    </div >
  );
}

export default App;
