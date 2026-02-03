import { NavLink } from "react-router-dom";

import RocketLogo from "../../assets/images/rocketElevators/RocketLogo.png"; // <-- import your local logo

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        {/* to="/" is where the logo is navigating on click */}
        <NavLink to="/">
          <img alt="MongoDB logo" className="h-16 inline" src={RocketLogo}></img>
        </NavLink>

        <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" to="/create">
          Create Employee
        </NavLink>
      </nav>
    </div>
  );
}