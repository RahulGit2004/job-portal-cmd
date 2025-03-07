import { Job } from "../models/jobmodel.js";
import { JobApplication } from "../models/jobapplication.js";
import mongoose from "mongoose";

// Create a new job
export const createJob = async (req, res) => {
  try {
    console.log("📌 Received Payload:", req.body); 
    const { title, description, jobRole, minSalary, maxSalary, vacancies, endDate, location } = req.body;

    const newJob = new Job({
      title,
      description,
      jobRole,
      minSalary,
      maxSalary,
      vacancies,
      endDate,
      location,
      created_by: req.user.id, // Assuming req.user.id contains logged-in employer ID
    });

    await newJob.save();
    res.status(201).json({ message: "Job created successfully", job: newJob });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a list of all jobs
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("created_by", "name email"); // Fetch employer details
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all candidates who applied for a specific job
export const getJobApplicants = async (req, res) => {
  try {
    const { jobId } = req.params;
    
    const job = await Job.findById(jobId).populate({
      path: "applications",
      populate: { path: "applicant", select: "firstName lastName email phoneNumber education" },
    });

    if (!job) return res.status(404).json({ message: "Job not found" });

    res.status(200).json({ applicants: job.applications });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Apply for a job
export const applyForJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { firstName, lastName, email, phoneNumber, employmentStatus, education, position, resume } = req.body;

    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: "Unauthorized: User not authenticated" });
    }

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    const application = new JobApplication({
      job: jobId,
      applicant: req.user._id, // ✅ Matches your middleware (req.user._id)
      firstName,
      lastName,
      email,
      phoneNumber,
      employmentStatus,
      education,
      position,
      resume,
    });

    await application.save();

    job.applications.push(application._id);
    await job.save();

    res.status(201).json({ message: "Application submitted successfully", application });
  } catch (error) {
    console.error("Error submitting application:", error.message);
    res.status(500).json({ error: error.message });
  }
};


// Delete a job
export const deleteJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    if (job.created_by.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized to delete this job" });
    }

    await JobApplication.deleteMany({ job: jobId }); // Delete all applications related to the job
    await Job.findByIdAndDelete(jobId);

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update job details
export const updateJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const updateData = req.body;

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    if (job.created_by.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized to update this job" });
    }

    const updatedJob = await Job.findByIdAndUpdate(jobId, updateData, { new: true });

    res.status(200).json({ message: "Job updated successfully", job: updatedJob });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// get jobs by user Id
export const getJobsByUser = async (req, res) => {
  try {
    const { employerId } = req.query; // Get employerId from query params

    if (!employerId) {
      return res.status(400).json({ success: false, message: "Employer ID is required" });
    }

    const jobs = await Job.find({ created_by: new mongoose.Types.ObjectId(employerId) }).sort({ createdAt: -1 });

    if (!jobs.length) {
      return res.status(404).json({ success: false, message: "No jobs found for this employer" });
    }

    res.status(200).json({ success: true, jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// get job details by jobId
export const getJobById = async (req, res) => {
  try {
      const job = await Job.findById(req.params.id);
      if (!job) {
          return res.status(404).json({ message: 'Job not found' });
      }
      res.json(job);
  } catch (error) {
      res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


// get applied jobs by id for student
export const getAppliedJobsById = async (req, res) => {
  try {
    const userId = req.params.id; // Get user ID from request parameters

    // Find job applications where the user has applied
    const jobApplications = await JobApplication.find({ applicant: userId })
      .populate({
        path: "job",
        select: "title jobRole location minSalary maxSalary endDate createdAt",
      }) // Populate job details
      .sort({ createdAt: -1 }); // Sort by most recent application

      console.log(jobApplications);

    if (!jobApplications.length) {
      return res.status(404).json({ message: "No applied jobs found" });
    }

    res.status(200).json({ appliedJobs: jobApplications });
  } catch (error) {
    console.error("Error fetching applied jobs:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};





