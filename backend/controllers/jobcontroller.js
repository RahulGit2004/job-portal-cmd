import { Job } from "../models/jobmodel.js";
import { JobApplication } from "../models/jobapplication.js";

// Create a new job
export const createJob = async (req, res) => {
  try {
    const { title, tags, jobRole, minSalary, maxSalary, vacancies, endDate, location } = req.body;

    const newJob = new Job({
      title,
      tags,
      jobRole,
      minSalary,
      maxSalary,
      vacancies,
      endDate,
      location,
      created_by: req.user.id, // Assuming `req.user.id` contains logged-in employer ID
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

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    const application = new JobApplication({
      job: jobId,
      applicant: req.user.id, // Assuming logged-in student ID
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
