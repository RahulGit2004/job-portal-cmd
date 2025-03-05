
import {useState} from 'react';
import Human from './human.png';
import { Link } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle, FaMapMarkerAlt, FaBars } from "react-icons/fa";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is imported
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import EinfratechLogo from "../admin/Einfratech.png"; // Import the logo


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
 <>
  <header className="flex justify-between items-center py-4 border-b border-gray-300 mb-6">
         
         <img className="w-15 h-12" src={EinfratechLogo}/>
         <nav className="hidden md:flex space-x-8 text-gray-700 font-semibold">
           <Link to='/postedjobs' href="#" className="hover:text-blue-500 transition-all font-bold">Posted Jobs</Link>
           <Link to="/paidfeatures" href="#" className="hover:text-blue-500 transition-all">Paid Features</Link>
           <a href="#" className="hover:text-blue-500 transition-all">Certification</a>
           <Link to= "/profiledashboard" className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"><img src={Human}/></Link>
         </nav>
         <button className="md:hidden text-gray-700 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
           <FaBars />
         </button>
       </header>
       {menuOpen && (
         <nav className="md:hidden flex flex-col space-y-4 text-gray-700 font-semibold p-4 bg-gray-100 rounded-lg shadow-md">
           <a href="#" className="hover:text-blue-500 transition-all">Posted Jobs</a>
           <Link to="/paidfeatures" href="#" className="hover:text-blue-500 transition-all">Paid Features</Link>
           <a href="#" className="hover:text-blue-500 transition-all">Certification</a>
         </nav>
       )}
 </>
        )}
      


export default Navbar;






