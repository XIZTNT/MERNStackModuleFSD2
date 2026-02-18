import { NavLink, useNavigate } from "react-router-dom";
import RocketLogo from "../../assets/images/rocketElevators/RocketLogo.png";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // 1️⃣ Call backend directly (full URL, not relying on Vite proxy)
      const res = await fetch("http://localhost:5050/logout", {
        method: "POST",
        credentials: "include", // VERY IMPORTANT for cookies
      });

      // 2️⃣ Check response OK
      if (!res.ok) {
        throw new Error(`Logout failed with status ${res.status}`);
      }

      // 3️⃣ Redirect to login page after successful logout
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
      // Optional: display a toast/alert to the user
    }
  };

  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          <img alt="Rocket logo" className="h-16 inline" src={RocketLogo} />
        </NavLink>

        <div className="flex gap-4 items-center">
          <NavLink
            className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
            to="/create"
          >
            Create Employee
          </NavLink>

          <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center text-md font-medium bg-red-500 text-white hover:bg-red-600 h-9 rounded-md px-3"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}
