import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import humanIcon from "../employer/profile.png";
import EinfratechLogo from "../employer/Einfratech.png";
import { Link } from "react-router-dom";


// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
//       <div className="container">
//         {/* Logo */}
//         <a className="navbar-brand" href="#">
//           <img src={EinfratechLogo} alt="Einfratech Logo" style={{ height: "40px" }} />
//         </a>

//         {/* Mobile Menu Button */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Items */}
//         <div className="collapse.show navbar-collapse justify-content-center" id="navbarNav">
//           <ul className="navbar-nav text-center">
//             <li className="nav-item">
//               <a className="nav-link fw-semibold text-dark" href="#">Approvals</a>
//             </li>
//             <li className="nav-item">
//               <Link to="/createjobform" className="nav-link fw-semibold text-dark" href="#">Posted Jobs</Link>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link fw-semibold text-dark" href="#">Paid Features</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link fw-semibold text-dark" href="#">Certifications</a>
//             </li>
//           </ul>
//         </div>

//         {/* User Icon */}
//         <Link to = "/profiledashboard"><div className="d-flex align-items-center">
//           <img src={humanIcon} alt="User" className="rounded-circle ms-3" style={{ height: "40px", width: "40px" }} />
//         </div>
//         </Link>
//       </div>
      
//     </nav>
//   );
// };


const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
  <nav className="container mx-auto flex justify-between items-center px-4 md:px-6 max-w-[1125px] py-2">
    
    {/* Logo Section - Left Side */}
    <a href="#">
      <img src={EinfratechLogo} alt="Einfratech Logo" className="h-8" />
    </a>

    {/* Right Side - Post Job & Profile */}
    <div className="flex items-center gap-8">
      {/* Post Job Button */}
      <Link
        to="/createjobform"
        className="border border-blue-900 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-100 transition"
      >
        Post Job
      </Link>

      {/* Profile Icon */}
      <Link to="/profiledashboard">
        <img
          src={humanIcon}
          alt="User"
          className="rounded-full border border-gray-300"
          style={{ height: "36px", width: "36px" }}
        />
      </Link>
    </div>
  </nav>
</div>

  );
};
export default Navbar;