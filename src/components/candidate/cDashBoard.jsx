import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaBriefcase, FaHeart } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { PiBriefcaseDuotone } from "react-icons/pi";
import einfratechLogo from "../candidate/Einfratech.png";

const JobDescriptionPage = () => {
  const [showAppliedJobs, setShowAppliedJobs] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const jobStatus = [
    { status: "Active", location: "Bangalore", salary: "100k-500k" },
    { status: "Rejected", location: "Bangalore", salary: "100k-500k" }
  ];

  return (
    <div className="max-w-[1440px] mx-auto p-4">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-2 flex justify-between items-center">
  <a href="#" className="text-lg font-bold text-blue-900">LOGO</a>

  {/* Mobile Menu Button */}
  <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
    <FiMenu className="text-xl text-gray-700" />
  </button>

  {/* Navbar Links */}
  <div
    className={`md:flex space-x-4 ${isMenuOpen ? "block" : "hidden"} absolute md:static top-14 left-0 w-full md:w-auto bg-white shadow-md md:shadow-none p-3 md:p-0`}
  >
    <button
      className={`text-gray-700 font-semibold hover:text-blue-900 block w-full md:w-auto text-left md:text-center ${
        !showAppliedJobs ? "font-bold" : ""
      }`}
      onClick={() => setShowAppliedJobs(false)}
    >
      Dashboard
    </button>
    <button
      className={`text-gray-700 hover:text-blue-900 block w-full md:w-auto text-left ml md:text-center ${
        showAppliedJobs ? "font-bold" : ""
      }`}
      onClick={() => setShowAppliedJobs(true)}
    >
      Applied Jobs
    </button>
  </div>

  {/* Profile Image */}
  <button className="border-0 bg-transparent">
    <img
      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      alt="Profile"
      className="w-8 h-8 rounded-full"
    />
  </button>
</nav>


      {/* Show Full Dashboard on Page Load */}
      {!showAppliedJobs && (
        <>
          {/* Search Bar */}
          <div className="flex justify-center mt-6">
            <div className="w-full max-w-lg flex items-center bg-gray-200 p-2 rounded-full">
              <input
                type="text"
                placeholder="Companies / Skills / Experience"
                className="bg-transparent flex-grow outline-none px-4"
              />
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full">
                Search
              </button>
            </div>
          </div>

          {/* Greeting Section */}
          <div className="mt-6 px-4 md:px-12">
            <h2 className="text-2xl font-bold">Hello, Rahul Sinha</h2>
            <p className="text-gray-600">Here is your daily activity and job alerts.</p>
          </div>

          {/* Job Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 px-4 md:px-12">
            <div className="flex items-center justify-between p-4 bg-purple-100 rounded-md shadow-sm">
              <div>
                <h3 className="text-2xl font-bold">600</h3>
                <p className="text-gray-700">Applied Jobs</p>
              </div>
              <FaBriefcase className="text-gray-600 text-2xl" />
            </div>
            <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-md shadow-sm">
              <div>
                <h3 className="text-2xl font-bold">250</h3>
                <p className="text-gray-700">Favorite Jobs</p>
              </div>
              <FaHeart className="text-red-500 text-2xl" />
            </div>
            <div className="flex items-center justify-between p-4 bg-green-100 rounded-md shadow-sm">
              <div>
                <h3 className="text-2xl font-bold">179</h3>
                <p className="text-gray-700">Job Alerts</p>
              </div>
              <IoNotificationsOutline className="text-blue-700 text-2xl" />
            </div>
          </div>

{/* Recently Applied (Now also on Dashboard) */}
<div className="mt-8 px-4 md:px-12">
<h3 className="text-lg font-semibold">Recently Applied</h3>
<div className="mt-3 p-3 rounded-md">
  {jobStatus.map((job, index) => (
    <div
      key={index}
      className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] mb-3"
    >
      {/* Company Info */}
      <div className="flex items-center space-x-3 w-full md:w-auto">
        <img
          src="https://play-lh.googleusercontent.com/XHAMg2tievEEjzTo91f7bCtBjjX6svmgDcPYFKCd3iHSqzG3wd3BajNZftOyjfMg4g"
          alt="Company Logo"
          className="w-10 h-10"
        />
        <div>
          <p className="font-semibold text-sm">
            UPStock{" "}
            <span className="bg-gray-300 text-gray-700 px-2 rounded text-xs">
              Remote
            </span>
          </p>
          <p className="text-gray-500 text-xs">
            {job.location} - {job.salary}
          </p>
        </div>
      </div>

      {/* Job Date */}
      <p className="text-gray-600 text-sm w-full md:w-auto text-center md:text-left">
        {job.status === "Active" ? "29 Feb 2025" : "29 Feb 2025"}
      </p>

      {/* Job Status */}
      <span
        className={`px-3 py-1 text-xs font-semibold rounded-full w-full md:w-auto text-center md:text-left ${
          job.status === "Active"
            ? "bg-green-200 text-green-700"
            : "bg-red-200 text-red-700"
        }`}
      >
        {job.status}
      </span>

      {/* View Button */}
      <Link to="/jobdescription" className="border border-blue-700 text-blue-700 px-6 py-2 text-sm rounded-md hover:bg-blue-900 hover:text-white w-full md:w-auto text-center">
  View
</Link>
    </div>
  ))}
</div>

</div>
        </>
      )}

      {/* Recently Applied Jobs (Now Fully Responsive) */}
      {showAppliedJobs && (
        <div className="mt-8 px-4 md:px-12">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Recently Applied</h3>
            <a href="#" className="text-blue-600 text-sm flex items-center">
              View Details →
            </a>
          </div>
          <div className="mt-3 bg-gray-100 p-3 rounded-md shadow-sm">
            <div className="hidden md:grid grid-cols-4 text-gray-700 font-semibold py-2 border-b">
              <p>JOB</p>
              <p>Date</p>
              <p>Status</p>
              <p>Action</p>
            </div>
            {jobStatus.map((job, index) => (
              <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] mb-3"
            >
              {/* Company Info */}
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <img
                  src="https://play-lh.googleusercontent.com/XHAMg2tievEEjzTo91f7bCtBjjX6svmgDcPYFKCd3iHSqzG3wd3BajNZftOyjfMg4g"
                  alt="Company Logo"
                  className="w-10 h-10"
                />
                <div>
                  <p className="font-semibold text-sm">
                    UPStock{" "}
                    <span className="bg-gray-300 text-gray-700 px-2 rounded text-xs">
                      Remote
                    </span>
                  </p>
                  <p className="text-gray-500 text-xs">
                    {job.location} - {job.salary}
                  </p>
                </div>
              </div>
        
              {/* Job Date */}
              <p className="text-gray-600 text-sm w-full md:w-auto text-center md:text-left">
                {job.status === "Active" ? "29 Feb 2025" : "29 Feb 2025"}
              </p>
        
              {/* Job Status */}
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full w-full md:w-auto text-center md:text-left ${
                  job.status === "Active"
                    ? "bg-green-200 text-green-700"
                    : "bg-red-200 text-red-700"
                }`}
              >
                {job.status}
              </span>
        
              {/* View Button */}
              <Link to="/jobdescription" className="border border-blue-700 text-blue-700 px-6 py-2 text-sm rounded-md hover:bg-blue-900 hover:text-white w-full md:w-auto text-center">
  View
</Link>

            </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


export default JobDescriptionPage;
