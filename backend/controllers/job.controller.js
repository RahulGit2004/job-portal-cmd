import { Job } from "../models/job.model.js";

// Admin creates a job
export const postJob = async (req, res) => {
    try {
        const {
            title, tags, jobRole, minSalary, maxSalary,
            vacancies, endDate, location
        } = req.body;
        const userId = req.user?._id;  // Ensure this is received from middleware

        console.log("User ID:", userId); // Debugging

        if (!userId) {
            return res.status(401).json({ message: "Unauthorized: User ID is missing.", success: false });
        }

        if (!title || !jobRole || !minSalary || !maxSalary || !vacancies || !endDate || !location?.country || !location?.city) {
            return res.status(400).json({ message: "Missing required fields.", success: false });
        }

        const job = await Job.create({
            title,
            tags: Array.isArray(tags) ? tags : tags?.split(",") || [],
            jobRole,
            minSalary: Number(minSalary),
            maxSalary: Number(maxSalary),
            vacancies: Number(vacancies),
            endDate,
            location,
            created_by: userId // Ensure user ID is correctly stored
        });

        return res.status(201).json({ message: "New job created successfully.", job, success: true });

    } catch (error) {
        console.error("Error creating job:", error);
        res.status(500).json({ message: "Server error.", success: false });
    }
};




// Get all jobs (for students)
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";

        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { jobRole: { $regex: keyword, $options: "i" } }
            ]
        };

        const jobs = await Job.find(query)
            .sort({ createdAt: -1 });

        if (!jobs.length) {
            return res.status(404).json({ message: "No jobs found.", success: false });
        }

        return res.status(200).json({ jobs, success: true });

    } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json({ message: "Server error.", success: false });
    }
};

// Get job by ID
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;

        const job = await Job.findById(jobId).populate("applications");

        if (!job) {
            return res.status(404).json({ message: "Job not found.", success: false });
        }

        return res.status(200).json({ job, success: true });

    } catch (error) {
        console.error("Error fetching job:", error);
        res.status(500).json({ message: "Server error.", success: false });
    }
};

// Get all jobs created by the admin
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;  // Logged-in admin ID

        const jobs = await Job.find({ created_by: adminId })
            .sort({ createdAt: -1 });

        if (!jobs.length) {
            return res.status(404).json({ message: "No jobs found.", success: false });
        }

        return res.status(200).json({ jobs, success: true });

    } catch (error) {
        console.error("Error fetching admin jobs:", error);
        res.status(500).json({ message: "Server error.", success: false });
    }
};
