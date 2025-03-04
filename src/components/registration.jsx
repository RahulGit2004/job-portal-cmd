import React, { useState } from "react";
import linkedIn from "../assets/linkedIn.jpg";
import googleLogo from "../assets/google2.jpg"
import einfratechLogo from "../assets/Einfratech.png";
import facebook from "../assets/facebook.jpg"
import { Link } from "react-router-dom";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-12 bg-gray-300 shadow-md md:shadow-none p-4 flex justify-between items-center relative">
      <img src={einfratechLogo} alt="Logo" className="h-10 w-15" />

      <div className="flex items-center md:space-x-6 h-10">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navbar Links */}
        <div
          className={`absolute md:static top-full right-0 w-full bg-gray-300 md:flex md:items-center md:space-x-6 md:p-0 shadow-md md:shadow-none transition-all ${
            isOpen ? "block" : "hidden"
          } z-50`}
        >
          <a
            href="#"
            className="block md:inline text-gray-700 hover:text-blue-600 p-2"
          >
            Home
          </a>
          <a
            href="#"
            className="block md:inline text-gray-700 hover:text-blue-600 p-2"
          >
            Jobs
          </a>
          <a
            href="#"
            className="block md:inline text-gray-700 hover:text-blue-600 p-2"
          >
            Employers
          </a>
          <Link to={"/signin"}
            href="#"
            className="block md:inline bg-blue-900 text-white px-4 rounded hover:bg-blue-600 p-2"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

const SignupForm = () => {
  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Full name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Email ID<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                placeholder="Enter your email id"
                required
              />
              <p className="text-xs text-gray-500">
                Job notifications will be sent to this email id
              </p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded"
                placeholder="(Minimum 6 characters)"
                required
              />
              <p className="text-xs text-gray-500">Remember your password</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Mobile number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full p-2 border rounded"
                placeholder="Enter your mobile number"
                required
              />
              <p className="text-xs text-gray-500">
                Recruiters will contact you on this number
              </p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                You are registering as:<span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4 md:flex md:space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="userType"
                    value="student"
                    defaultChecked
                    className="form-radio"
                    required
                  />
                  <span>Student</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="userType"
                    value="employer"
                    className="form-radio"
                    required
                  />
                  <span>Employer</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="userType"
                    value="admin"
                    className="form-radio"
                    required
                  />
                  <span>Admin</span>
                </label>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm">
                Send me important updates & promotions via SMS, email, and
                WhatsApp
              </label>
            </div>

            <button className="w-full bg-[#1E3A8A] text-white p-2 rounded hover:bg-blue-700">
              Register now
            </button>
            <p className="text-xs text-center mt-4">
              By clicking Register, you agree to the{" "}
              <span className="text-blue-600">Terms and Conditions</span> &{" "}
              <span className="text-blue-600">Privacy Policy</span> of
              AlwaysApply.com
            </p>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm">or signup with</p>
            <div className="flex justify-center space-x-4 mt-2">
              <button className="p-2 border rounded-full">
                <img src={googleLogo} alt="Google" className="w-6" />
              </button>
              <button className="p-2 border rounded-full">
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-6"
                />
              </button>
              <button className="p-2 border rounded-full">
                <img
                  src={linkedIn}
                  alt="LinkedIn"
                  className="w-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
