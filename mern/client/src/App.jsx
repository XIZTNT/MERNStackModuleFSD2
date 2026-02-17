import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Unauthorized from "./components/Unauthorized";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [authState, setAuthState] = useState("loading"); 
  // "loading" while we check cookies
  // "loggedOut" | "authorized" | "unauthorized"

  const handleLoginSuccess = () => setAuthState("authorized");
  const handleLoginFail = () => setAuthState("unauthorized");
  const handleBackToLogin = () => setAuthState("loggedOut");

  // Check authrefresh on page load
  useEffect(() => {
    axios
      .get("/authrefresh", { withCredentials: true })
      .then((res) => {
        if (res.status === 200) setAuthState("authorized");
        else setAuthState("loggedOut");
      })
      .catch(() => setAuthState("loggedOut"));
  }, []);

  if (authState === "loading") return <div>Checking authentication...</div>;
  if (authState === "loggedOut") {
    return <Login onLoginSuccess={handleLoginSuccess} onLoginFail={handleLoginFail} />;
  }
  if (authState === "unauthorized") {
    return <Unauthorized onBackToLogin={handleBackToLogin} />;
  }

  // authorized
  return (
    <div className="w-full p-6">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
