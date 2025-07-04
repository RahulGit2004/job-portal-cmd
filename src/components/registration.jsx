import React, { useState } from "react";
import linkedIn from "../assets/linkedIn.jpg";
import googleLogo from "../assets/google2.jpg";
import einfratechLogo from "../assets/Einfratech.png";
import facebook from "../assets/facebook.jpg";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobileNumber: "",
    role: "Student", // Default value
  });

  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

 const validateEmail = (email) => {
  if (!email) return false;

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return regex.test(email);
};


  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/signin"), 2000); // Redirect after 2s
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (error) {
      setError("Failed to connect to the server");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>

          {/* Show success or error messages */}
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Full name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
             <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Email ID<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${
            emailError ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your email"
          required
        />
        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Minimum 6 characters"
                required
                minLength={6}
              />
            </div>

            {/* Mobile Number */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Mobile number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={(e) => {
                  const value = e.target.value;
                  // Allow only numbers and max 10 digits
                  if (/^\d{0,10}$/.test(value)) {
                    handleChange(e);
                  }
                }}
                onBlur={(e) => {
                  const value = e.target.value;
                  if (value.length !== 10) {
                    alert("Mobile number must be exactly 10 digits.");
                    // You can also set an error state here if using form validation
                  }
                }}
                className="w-full p-2 border rounded"
                placeholder="Enter your 10-digit mobile number"
                inputMode="numeric"
                required
                pattern="\d{10}"
                maxLength={10}
              />
            </div>

            {/* User Role Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                You are registering as:<span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4 md:flex md:space-x-4">
                {["Student", "Employer", "Admin"].map((role) => (
                  <label
                    key={role}
                    className="flex items-center space-x-2 hover:cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      checked={formData.role === role}
                      onChange={handleChange}
                      className="form-radio border border-gray-400"
                      required
                    />
                    <span>{role}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#1E3A8A] text-white p-2 rounded hover:bg-blue-700"
            >
              Register now
            </button>
          </form>

          {/* Already have an account? */}
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-600">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
