import React, { useState, useEffect } from "react";
import Jobimg from "../assets/jobboard.png";
import JobIcon from "../assets/job-icon.jpg";
import { Link } from "react-router-dom";

const JobBoard = () => {
  const [jobListings, setJobListings] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    applyFilters();
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:8000/api/v1/job/jobs");
        const data = await response.json();
        if (Array.isArray(data)) {
          setJobListings(data);
          setFilteredJobs(data);
        } else if (data.jobs && Array.isArray(data.jobs)) {
          setJobListings(data.jobs);
          setFilteredJobs(data.jobs);
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  },  [selectedLocation, selectedRole, searchQuery]);

 // Function to filter jobs based on search and selected criteria
 const applyFilters = () => {
  let filtered = jobListings.filter(job => {
    const jobCity = job?.location?.city ? job.location.city.toLowerCase().trim() : "";
    const selectedCity = selectedLocation.toLowerCase().trim();
    const jobRole = job?.jobRole ? job.jobRole.toLowerCase().trim() : "";
    const selectedJobRole = selectedRole.toLowerCase().trim();
    const query = searchQuery.toLowerCase().trim();

    // Match location if selected
    const locationMatch = selectedLocation ? jobCity === selectedCity : true;

    // Match job role if selected
    const roleMatch = selectedRole ? jobRole === selectedJobRole : true;

    // Match search query if entered
    const searchMatch = query
      ? job.title.toLowerCase().includes(query) ||
        job.jobRole.toLowerCase().includes(query) ||
        (job.tags && job.tags.some(tag => tag.toLowerCase().includes(query)))
      : true;

    return locationMatch && roleMatch && searchMatch;
  });

  setFilteredJobs(filtered);
};


    
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 flex flex-col items-center md:h-full">
        <h2 className="text-2xl font-bold">JOB BOARD</h2>
        <div className="w-24 h-24 bg-gray-300 rounded-full my-4">
          <img src={Jobimg} alt="Job Board Logo" className="w-full h-full rounded-full" />
        </div>
        <nav className="w-full text-center">
          <ul className="space-y-2">
           <Link to="/candidatedash" ><li className="hover:underline cursor-pointer">Dashboard</li> </Link>
           <Link to="/landingPage" > <li className="hover:underline cursor-pointer">Home</li></Link>
            <li className="hover:underline cursor-pointer font-bold">Job Board</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-4 items-center">
          <input
            type="text"
            placeholder="Search by Title / Company"
            className="border p-2 rounded flex-1 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-blue-900 text-white px-4 py-2 rounded w-full md:w-auto" onClick={applyFilters}>
            Search
          </button>
        </div>

        {/* Filters (Location & Role) */}
        <div className="flex flex-wrap gap-4 justify-between mb-4">
        <select
    className="border p-2 rounded w-full md:w-1/3"
    value={selectedLocation}
    onChange={(e) => setSelectedLocation(e.target.value)}
  >
    <option value="">Select Location</option>
    <option value="Delhi">Delhi</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Bangalore">Bangalore</option>
    <option value="Hyderabad">Hyderabad</option>
  </select>

          <select
    className="border p-2 rounded w-full md:w-1/3"
    value={selectedRole}
    onChange={(e) => setSelectedRole(e.target.value)}
  >
    <option value="">Select Role</option>
    <option value="Software Developer">Software Developer</option>
    <option value="Cyber Security">Cyber Security</option>
    <option value="Backend Developer">Backend Developer</option>
    <option value="Frontend Engineer">Frontend Engineer</option>
  </select>
        </div>

        {/* Job Listings */}
        <div>
          {loading ? (
            <p className="text-center">Loading jobs...</p>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : filteredJobs.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredJobs.map((job, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-md flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full">
                    <img src={JobIcon} className="w-full h-full rounded-full" alt="Job Icon" />
                  </div>
                  <Link to ="/jobdescription"> 
                  <div className="flex-1">
                    <h2 className="font-bold text-lg">{job.title}</h2>
                    <p className="text-gray-600">{job.jobRole}</p>
                    <p className="text-gray-500">{job.location.city}</p>
                    <p className="font-semibold">₹{job.minSalary} - ₹{job.maxSalary}</p>
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">No jobs found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
