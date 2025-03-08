import express from "express";

import { 
    createJob, 
    getAllJobs, 
    getJobApplicants, 
    applyForJob, 
    deleteJob, 
    updateJob ,
    getJobsByUser,
    getJobById,
    getAppliedJobsByUserId
} from "../controllers/jobcontroller.js";

import { authenticateUser, authorizeRoles } from "../middlewares/isauthenticated.js";

const router = express.Router();

/**
 * @route   POST /api/jobs
 * @desc    Employers can create jobs
 * @access  Private (Employers only)
 */
router.post("/create", authenticateUser, createJob);

/**
 * @route   GET /api/jobs
 * @desc    Public route to fetch all jobs
 * @access  Public
 */
router.get("/jobs", getAllJobs);

/**
 * @route   GET /api/jobs/:jobId/applicants
 * @desc    Employers can view applicants for a specific job
 * @access  Private (Employers only)
 */
router.get("/jobs/:jobId/applicants", authenticateUser,getJobApplicants);

/**
 * @route   POST /api/jobs/:jobId/apply
 * @desc    Students can apply for a job
 * @access  Private (Students only)
 */
router.post("/jobs/:jobId/apply", authenticateUser, applyForJob);

/**
 * @route   DELETE /api/jobs/:jobId
 * @desc    Employers can delete a job
 * @access  Private (Employers only)
 */
router.delete("/jobs/:jobId", authenticateUser, authorizeRoles("employer"), deleteJob);

/**
 * @route   PUT /api/jobs/:jobId
 * @desc    Employers can update a job
 * @access  Private (Employers only)
 */
router.put("/jobs/:jobId", authenticateUser, authorizeRoles("employer"), updateJob);

router.get("/jobs/id", getJobsByUser);

router.get('/:id', getJobById);

// applied job
router.get("/user-applied-jobs/:userId", getAppliedJobsByUserId);

export default router;
