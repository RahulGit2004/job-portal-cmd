import React from "react";
import { Link } from "react-router-dom";
const CreateJobForm = () => {
  return (
//     <div className="container mt-4">
//       {/* Title */}
//       <h2 className="fw-bold text-primary" style={{ color: "#1E3A8A" }}>Create a Job</h2>
//       <p className="text-muted">Find the best talent for your company</p>

//       {/* Form */}
//       <div className="row">
//         {/* Job Title */}
//         <div className="col-12 mb-3">
//           <div className="p-2 rounded">
//             <label className="form-label fw-bold">Job Title</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Add job title, role vacancies etc"
//               style={{ height: "45px" }}
//             />
//           </div>
//         </div>

//         {/* Tags & Job Roles */}

//         <div className="col-md-6 mb-3">
//   <div className="p-2 rounded">
//     <label className="form-label fw-bold">Description</label>
//     <input
//       type="text"
//       className="form-control"
//       placeholder="Job Description of 100 words"
//       style={{ height: "45px" }}
//       onInput={(e) => {
//         const words = e.target.value.trim().split(/\s+/);
//         if (words.length > 100) {
//           e.target.value = words.slice(0, 100).join(" ");
//         }
//       }}
//     />
//   </div>
// </div>




//         <div className="col-md-6 mb-3">
//           <div className="p-2 rounded">
//             <label className="form-label fw-bold">Job Roles</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Job roles, responsibilities..."
//               style={{ height: "45px" }}
//             />
//           </div>
//         </div>

//         {/* Salary Section */}
//         <div className="col-12 mb-3">
//           <div className="p-2 rounded">
//             <h5 className="fw-bold mb-3">Salary</h5>
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label className="form-label">Min Salary</label>
//                 <div className="input-group">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Min Salary..."
//                     style={{ height: "45px" }}
//                   />
//                   <span className="input-group-text">INR</span>
//                 </div>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label">Max Salary</label>
//                 <div className="input-group">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Max Salary..."
//                     style={{ height: "45px" }}
//                   />
//                   <span className="input-group-text">INR</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Vacancies & End Date */}
//         <div className="col-md-6 mb-3">
//           <div className="p-2 rounded">
//             <label className="form-label fw-bold">Vacancies</label>
//             <select className="form-select" style={{ height: "50px" }}>
//               <option>Select...</option>
//             </select>
//           </div>
//         </div>
//         <div className="col-md-6 mb-3">
//           <div className="p-2 rounded">
//             <label className="form-label fw-bold">End Date</label>
//             <input type="date" className="form-control" style={{ height: "50px" }} />
//           </div>
//         </div>

//         {/* Location Section */}
//         <div className="col-12 mb-3">
//           <div className="p-2 rounded">
//             <h5 className="fw-bold mb-3">Location</h5>
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-bold">Country</label>
//                 <select className="form-select" style={{ height: "50px" }}>
//                   <option>Select...</option>
//                 </select>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-bold">City</label>
//                 <select className="form-select" style={{ height: "50px" }}>
//                   <option>Select...</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Submit Button */}
//       <div className="text-center mt-4">
//         <button
//           className="btn px-5 py-2"
//           style={{ backgroundColor: "#1E3A8A", borderColor: "#1E3A8A", color: "white" }}
//         >
//           Create
//         </button>
//       </div>
//     </div>
<div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
  {/* Title */}
  <h2 className="text-2xl font-bold text-center text-blue-900">Create a Job</h2>
  <p className="text-gray-600 text-center mb-6">Find the best talent for your company</p>

  {/* Form */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Job Title */}
    <div className="col-span-2">
      <label className="block font-semibold">Job Title</label>
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        placeholder="Add job title, role vacancies etc"
      />
    </div>

    {/* Description */}
    <div className="col-span-2">
      <label className="block font-semibold">Description</label>
      <textarea
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none resize-none"
        placeholder="Job Description (Max 100 words)"
        rows="4"
        onInput={(e) => {
          const words = e.target.value.trim().split(/\s+/);
          if (words.length > 100) {
            e.target.value = words.slice(0, 100).join(" ");
          }
        }}
      ></textarea>
    </div>

    {/* Job Roles */}
    <div className="col-span-2 md:col-span-1">
      <label className="block font-semibold">Job Roles</label>
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        placeholder="Job roles, responsibilities..."
      />
    </div>

    {/* Job Type (Newly Added Field) */}
    <div>
      <label className="block font-semibold">Job Type</label>
      <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none">
        <option>Select Job Type</option>
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Remote</option>
        <option>Internship</option>
      </select>
    </div>

    {/* Salary Section */}
    <div className="col-span-2">
      <h5 className="font-bold text-lg mb-3">Salary</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold">Min Salary</label>
          <div className="flex border border-gray-300 rounded-md">
            <input
              type="text"
              className="w-full p-3 border-none rounded-l-md focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Min Salary..."
            />
            <span className="px-4 bg-gray-200 flex items-center rounded-r-md">INR</span>
          </div>
        </div>
        <div>
          <label className="block font-semibold">Max Salary</label>
          <div className="flex border border-gray-300 rounded-md">
            <input
              type="text"
              className="w-full p-3 border-none rounded-l-md focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Max Salary..."
            />
            <span className="px-4 bg-gray-200 flex items-center rounded-r-md">INR</span>
          </div>
        </div>
      </div>
    </div>

    {/* Vacancies & End Date */}
    <div className="col-span-2 md:col-span-1">
      <label className="block font-semibold">Vacancies</label>
      <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none">
        <option>Select...</option>
      </select>
    </div>
    <div className="col-span-2 md:col-span-1">
      <label className="block font-semibold">End Date</label>
      <input
        type="date"
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
      />
    </div>

    {/* Location Section */}
    <div className="col-span-2">
      <h5 className="font-bold text-lg mb-3">Location</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold">Country</label>
          <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none">
            <option>Select...</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">City</label>
          <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none">
            <option>Select...</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  {/* Submit Button */}
  <div className="text-center mt-6">
    <button className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-700 transition-all">
      Create
    </button>
  </div>
</div>

  );
};

export default CreateJobForm;