import React from "react";
import { useState, useContext } from "react";
import "../styles/loginForm.css";
import { MovieContext } from "../context/MovieContext";
import "./styles.css";

function LoginForm({ Login, error }) {
  const { isLogged } = useContext(MovieContext);

  const [details, setDetails] = useState({ email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <h3>Login Here</h3>

      <label for="username">Username</label>
      <input
        type="text"
        name="email"
        id="email"
        value={details.email}
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      />
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={details.password}
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
      />

      {error != "" ? <div className="error">{error}</div> : ""}

      <button type="submit" value="LOGIN">
        Log In
      </button>
    </form>
  );
}
export default LoginForm;
