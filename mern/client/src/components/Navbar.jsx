import { NavLink } from "react-router-dom";

import RocketLogo from "../../assets/images/rocketElevators/RocketLogo.png"; // <-- import your local logo

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        {/* to="/" is where the logo is navigating on click */}
        <NavLink to="/">
          <img alt="Rocket logo" className="h-16 inline" src={RocketLogo}></img>
        </NavLink>

        <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" to="/create">
          Create Employee
        </NavLink>
      </nav>
    </div>
  );
}


//THOUGHTS FOR USING LOGIN PAGE STARTING POINT:

// import { NavLink } from "react-router-dom";
// import RocketLogo from "../../assets/images/rocketElevators/RocketLogo.png";

// export default function Navbar({ user, logout }) {
//   return (
//     <div>
//       <nav className="flex justify-between items-center mb-6">
//         {/* Logo */}
//         <NavLink to="/">
//           <img alt="Rocket logo" className="h-16 inline" src={RocketLogo} />
//         </NavLink>

//         {/* Right side links */}
//         <div className="flex gap-4">
//           <NavLink
//             className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
//             to="/create"
//           >
//             Create Employee
//           </NavLink>

//           {/* Conditional login / sign out */}
//           {user ? (
//             <button
//               onClick={logout}
//               className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
//             >
//               Sign Out
//             </button>
//           ) : (
//             <NavLink
//               className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
//               to="/login"
//             >
//               Login
//             </NavLink>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// }
