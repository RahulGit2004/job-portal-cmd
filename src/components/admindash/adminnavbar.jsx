// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
// import EinfratechLogo from "/src/assets/Einfratech.png"; 
// import logo from "../admindash/human.png";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">Navbar</a>
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-bs-toggle="collapse" 
//           data-bs-target="#navbarSupportedContent" 
//           aria-controls="navbarSupportedContent" 
//           aria-expanded="false" 
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Link</a>
//             </li>
//           </ul>
//           {/* Search Bar with Image */}
//           <form className="d-flex align-items-center" role="search">
//             <button className="btn btn-outline-success me-2" type="submit">
//               Search
//             </button>
//             <img src={logo} alt="Logo" style={{ width: "40px", height: "40px" }} />
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import {useState} from 'react';
import Human from './human.png';
import { Link } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle, FaMapMarkerAlt, FaBars } from "react-icons/fa";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is imported
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import EinfratechLogo from "../admindash/Einfratech.png"; // Import the logo


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
 <>
  <header className="flex justify-between items-center py-4 border-b border-gray-300 mb-6">
         
         <img className="w-15 h-12" src={EinfratechLogo}/>
         <nav className="hidden md:flex space-x-8 text-gray-700 font-semibold">
           <a href="#" className="hover:text-blue-500 transition-all">Job list</a>
           <Link to='/postedjobs' href="#" className="hover:text-blue-500 transition-all">Posted Jobs</Link>
           <a href="#" className="hover:text-blue-500 transition-all">Job status</a>
           <a href="#" className="hover:text-blue-500 transition-all">Approved status</a>
           <Link to= "/profiledashboard" className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"><img src={Human}/></Link>
         </nav>
         <button className="md:hidden text-gray-700 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
           <FaBars />
         </button>
       </header>
       {menuOpen && (
         <nav className="md:hidden flex flex-col space-y-4 text-gray-700 font-semibold p-4 bg-gray-100 rounded-lg shadow-md">
           <a href="#" className="hover:text-blue-500 transition-all">Job list</a>
           <a href="#" className="hover:text-blue-500 transition-all">Posted Jobs</a>
           <a href="#" className="hover:text-blue-500 transition-all">Job status</a>
           <a href="#" className="hover:text-blue-500 transition-all">Approved status</a>
         </nav>
       )}
 </>
        )}
      


export default Navbar;






