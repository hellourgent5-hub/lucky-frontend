import React, { useState } from "react";
import { apiPost } from "../api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const res = await apiPost("/auth/login", { email, password });

    if (res.token) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.user.role);
      window.location.href = "/"; 
    } else {
      setError(res.message || "Login failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/><br/>

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/><br/>

      <button onClick={handleLogin}>Login</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>
        Don't have an account? <a href="/signup">Signup</a>
      </p>
    </div>
  );
}

export default Login;
