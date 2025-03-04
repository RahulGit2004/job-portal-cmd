import express from "express";
import { authenticateUser, authorizeRoles } from "../middlewares/isauthenticated.js"; // ✅ Corrected import
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

const router = express.Router();

// ✅ Only authenticated users can post jobs
router.route("/post").post(authenticateUser, postJob);

// ✅ All users can get jobs, but authentication is required
router.route("/get").get(authenticateUser, getAllJobs);

// ✅ Admin-only route to fetch jobs
router.route("/getadminjobs").get(authenticateUser, authorizeRoles("Employer"), getAdminJobs);

// ✅ Fetch a job by ID (authentication required)
router.route("/get/:id").get(authenticateUser, getJobById);

export default router;
