import { useState } from "react";
import { adminLogin } from "../api/api";

export default function Login() {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("123456");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await adminLogin({ email, password });
      localStorage.setItem("adminToken", res.data.token);
      setMessage("✅ Login Successful!");
    } catch (err) {
      setMessage("❌ Login Failed: " + err.response?.data?.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-4 rounded"
          placeholder="Password"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
        {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
      </div>
    </div>
  );
}
