import express from "express";

import { 
    createJob, 
    getAllJobs, 
    getJobApplicants, 
    applyForJob, 
    getJobsByUser,
    getJobById,
    getAppliedJobsByUserId,
} from "../controllers/jobcontroller.js";

import { authenticateUser, authorizeRoles } from "../middlewares/isauthenticated.js";

const router = express.Router();

router.post("/create", authenticateUser, createJob);

router.get("/jobs", getAllJobs);

router.get("/jobs/:jobId/applicants", authenticateUser,getJobApplicants);

router.post("/jobs/:jobId/apply", authenticateUser, applyForJob);

/**
 * @route   DELETE /api/jobs/:jobId
 * @desc    Employers can delete a job
 * @access  Private (Employers only)
 */
// router.delete("/jobs/:jobId", authenticateUser, authorizeRoles("employer"), deleteJob);

/**
 * @route   PUT /api/jobs/:jobId
 * @desc    Employers can update a job
 * @access  Private (Employers only)
 */
// router.put("/jobs/:jobId", authenticateUser, authorizeRoles("employer"), updateJob);

router.get("/jobs/id", getJobsByUser);

router.get('/:id', getJobById);

// applied job
router.get("/user-applied-jobs/:userId", getAppliedJobsByUserId);


export default router;
