import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"; 
import { useNavigate } from "react-router-dom";

import linkedIn from "../assets/linkedIn.jpg";
import googleLogo from "../assets/google2.jpg"
import einfratechLogo from "../assets/Einfratech.png";

import facebook from "../assets/facebook.jpg"
import hidden from "../assets/hidden.jpg"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="h-12 bg-white shadow-md md:shadow-none p-4 flex justify-between items-center relative">
      <a href="#">
        <img src={einfratechLogo} alt="Company Logo" className="h-10" />
      </a>
      <button className="md:hidden text-2xl" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </button>
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center md:space-x-4 absolute md:static top-16 left-0 w-full bg-white md:w-auto  md:p-0 shadow-md md:shadow-none text-center z-50`}
      >
        <Link to={"/"} href="#" className="block text-gray-700 hover:text-blue-900 transition-all" onClick={toggleMenu}><b>Home</b></Link>
        <Link to={"/jobs"} href="#" className="block  text-gray-700 hover:text-blue-900 transition-all" onClick={toggleMenu}><b>Jobs</b></Link>
        <Link to={"/signin"} href="#" className="block text-gray-700 hover:text-blue-900 transition-all" onClick={toggleMenu}><b>Employers</b></Link>
        <Link to={"/signup"} href="#" className="block border border-blue-900 px-4 rounded text-blue-900 hover:bg-blue-900 hover:text-white transition-all" onClick={toggleMenu}>Sign Up</Link>
      </div>
    </nav>
  );
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For navigation after login


  const handleLogin = async (e) => {
      e.preventDefault();
      setError(""); // Reset errors
  
      try {
          const response = await fetch("http://localhost:8000/api/users/login", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, password }),
              credentials: "include", // ✅ Ensure cookies are sent and received
          });
  
          const data = await response.json();
  
          if (!response.ok) {
              throw new Error(data.message || "Invalid credentials");
          }
  
          console.log("Login Successful:", data);
  
          // ✅ Fetch and store the cookie
          const authCookie = Cookies.get("token"); // Fetch cookie using js-cookie
  
          if (authCookie) {
              console.log("Auth Cookie:", authCookie); // ✅ Print cookie in console
              localStorage.setItem("authToken", authCookie); // ✅ Store in local storage
          } else {
              console.warn("Auth cookie not found in frontend. Check if it's HTTP-only.");
          }
  
          // ✅ Store user role in localStorage for easy access
          localStorage.setItem("userRole", data.user.role);
  
          // ✅ Role-based navigation
          switch (data.user.role) {
              case "Admin":
                  navigate("/admindashboard");
                  break;
              case "Student":
                  navigate("/candidatedash");
                  break;
              case "Employer":
                  navigate("/employeedash");
                  break;
              default:
                  navigate("/"); // Default fallback
          }
      } catch (err) {
          console.error("Login Error:", err.message);
          setError(err.message);
      }
  };
  


  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow justify-center items-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">SIGN IN</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
              <input
                type="email"
                placeholder="Enter email id"
                className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full p-3 pr-10 border rounded focus:ring-2 focus:ring-blue-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-900 text-white p-3 rounded hover:bg-blue-600">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;



