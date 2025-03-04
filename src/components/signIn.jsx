import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center w-full relative">
      <a href="#">
        <img src="../assets/Einfratech.png" alt="Company Logo" className="h-10" />
      </a>
      <button className="md:hidden text-2xl" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </button>
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center md:space-x-4 absolute md:static top-16 left-0 w-full bg-white md:w-auto p-4 md:p-0 shadow-md md:shadow-none text-center z-50`}
      >
        <a href="#" className="block py-2 text-gray-700 hover:text-blue-900 transition-all" onClick={toggleMenu}><b>Home</b></a>
        <a href="#" className="block py-2 text-gray-700 hover:text-blue-900 transition-all" onClick={toggleMenu}><b>Jobs</b></a>
        <a href="#" className="block py-2 text-gray-700 hover:text-blue-900 transition-all" onClick={toggleMenu}><b>Employers</b></a>
        <a href="#" className="block py-2 border border-blue-900 px-4 rounded text-blue-900 hover:bg-blue-900 hover:text-white transition-all" onClick={toggleMenu}>Sign Up</a>
        <a href="#" className="block py-2 bg-blue-900 text-white px-4 rounded hover:bg-blue-600 transition-all" onClick={toggleMenu}>Sign In</a>
      </div>
    </nav>
  );
};

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow justify-center items-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">SIGN IN</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
              <input type="email" placeholder="Enter email id" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="Enter password" className="w-full p-3 pr-10 border rounded focus:ring-2 focus:ring-blue-400" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <img src={showPassword ? "/blind.png" : "/blind.png"} alt="Toggle Password" className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm mb-6">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label>Remember me</label>
              </div>
              <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
            </div>
            <button className="w-full bg-blue-900 text-white p-3 rounded hover:bg-blue-600">Login</button>
            <div className="text-center mt-6">
              <p className="text-sm">or login with</p>
              <div className="flex justify-center space-x-4 mt-2">
                <button className="p-2 border rounded-full hover:border-blue-900">
                  <img src="/google.png" alt="Google" className="w-6" />
                </button>
                <button className="p-2 border rounded-full hover:border-blue-900">
                  <img src="/facebook.png" alt="Facebook" className="w-6" />
                </button>
                <button className="p-2 border rounded-full hover:border-blue-900">
                  <img src="/linkedin.png" alt="LinkedIn" className="w-6" />
                </button>
              </div>
            </div>
            <p className="text-sm text-center mt-4">
              Do not have an account? <a href="http://localhost:5175/" className="text-blue-600 font-medium hover:underline">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;