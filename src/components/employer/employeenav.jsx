import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import humanIcon from "../employer/profile.png";
import EinfratechLogo from "../employer/Einfratech.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={EinfratechLogo} alt="Einfratech Logo" style={{ height: "40px" }} />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse.show navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="#">Approvals</a>
            </li>
            <li className="nav-item">
              <Link to="/createjobform" className="nav-link fw-semibold text-dark" href="#">Posted Jobs</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="#">Paid Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="#">Certifications</a>
            </li>
          </ul>
        </div>

        {/* User Icon */}
        <Link to = "/profiledashboard"><div className="d-flex align-items-center">
          <img src={humanIcon} alt="User" className="rounded-circle ms-3" style={{ height: "40px", width: "40px" }} />
        </div>
        </Link>
      </div>
      
    </nav>
  );
};


// const Navbar = () => {
  
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="shadow-sm fixed top-0 left-0 w-full bg-white z-50">
//       <div className="container-fluid flex justify-between items-center p-4 max-w-[1125px] mx-auto">
//         {/* Logo */}
//         <a href="#">
//           <img src={EinfratechLogo} alt="Einfratech Logo" className="h-10" />
//         </a>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700 focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           ☰
//         </button>

//         {/* Navbar Links & Buttons */}
//         <div className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex items-center bg-white shadow-md md:shadow-none transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"}`}>
//           <ul className="md:flex md:space-x-6 text-center md:text-left">
//             <li><Link className="block py-2 px-4 hover:text-blue-700" to="/">Home</Link></li>
//             <li><Link className="block py-2 px-4 hover:text-blue-700" to="/jobs">Jobs</Link></li>
//             <li><Link className="block py-2 px-4 hover:text-blue-700" to="/signin">Employers</Link></li>
//           </ul>

//           {/* Buttons - Stack on mobile, inline on desktop */}
//           <div className="md:flex md:space-x-3 text-center mt-2 md:mt-0">
//             <Link to="/signup" className="block md:inline-block border border-blue-900 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-100">Sign Up</Link>
//             <Link to="/signin" className="block md:inline-block bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign In</Link>
//           </div>
//         </div>

        



//       </div>
//     </nav>
//   );
// };
export default Navbar;