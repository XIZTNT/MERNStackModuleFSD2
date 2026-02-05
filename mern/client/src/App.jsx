import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Unauthorized from "./components/Unauthorized";
import { useState } from "react";

const App = () => {
  const [authState, setAuthState] = useState("loggedOut"); 
  // "loggedOut" | "authorized" | "unauthorized"

  const handleLoginSuccess = () => setAuthState("authorized");
  const handleLoginFail = () => setAuthState("unauthorized");
  const handleBackToLogin = () => setAuthState("loggedOut");

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
