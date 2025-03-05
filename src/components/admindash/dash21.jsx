import React, { useState } from "react";
import { Link } from "react-router-dom";
import Human from './human.png';
import Einfratech from './Einfratech.png';
import { FaCheckCircle, FaTimesCircle, FaMapMarkerAlt, FaBars } from "react-icons/fa";

const jobs = [
  {
    title: "Software Developer",
    type: "Full Time",
    salary: "$400000-$500000",
    location: "Newyork, USA",
  },
  {
    title: "Web Developer",
    type: "Full Time",
    salary: "$300000-$500000",
    location: "Newyork, USA",
  },
  {
    title: "App Developer",
    type: "Full Time",
    salary: "$400000-$500000",
    location: "Newyork, USA",
  },
  {
    title: "Software Developer",
    type: "Full Time",
    salary: "$400000-$500000",
    location: "Newyork, USA",
  },
];

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col sm:flex-row justify-between items-center border border-gray-200 transition-transform hover:scale-105 duration-300">
      <div className="w-full sm:w-2/3 text-left">
        <h2 className="text-lg font-semibold">{job.title}</h2>
        <p className="text-gray-500">{job.type} <span className="font-bold">{job.salary}</span></p>
        <p className="text-gray-500 flex items-center gap-1"><FaMapMarkerAlt /> {job.location}</p>
      </div>
      <div className="flex items-center gap-4 mt-4 sm:mt-0">
 <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">Active</span>
        <button className="flex items-center gap-1 text-green-500 hover:text-green-700 transition-colors text-lg">
          <FaCheckCircle /> Approve
        </button>
        <button className="flex items-center gap-1 text-red-500 hover:text-red-700 transition-colors text-lg">
          <FaTimesCircle /> Reject
        </button>
      </div>
    </div>
  );
};

const PostedJobs = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center py-4 border-b border-gray-300 mb-6">
        
        <img className="w-15 h-12" src={Einfratech}/>
        <nav className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <a href="#" className="hover:text-blue-500 transition-all">Job list</a>
          <a href="#" className="hover:text-blue-500 transition-all">Posted Jobs</a>
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
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-left">All Posted Job's Are Here</h1>
        <p className="text-gray-600 mb-5 font-semibold cursor-pointer hover:text-blue-500 transition-all text-left">View All</p>
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostedJobs;






