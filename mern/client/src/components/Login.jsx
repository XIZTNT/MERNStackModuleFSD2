import { useState } from "react";
import { loginUser } from "../services/loginService";

const Login = ({ onLoginSuccess, onLoginFail }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);
      console.log("Logged in user:", data.user);
      onLoginSuccess();
    } catch (err) {
      onLoginFail();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-20 p-6 border rounded shadow"
    >
      <h2 className="text-2xl font-bold mb-4">Rocket Elevators Employee Login</h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-4 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="w-full p-2 bg-green-600 text-white rounded"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
