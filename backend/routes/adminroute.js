import express from "express";
import { approveOrRejectUser } from "../controllers/admincontroller.js";
import { isAdmin } from "../middlewares/isadmin.js";

const router = express.Router();

router.put("/user/approve-reject/:id", isAdmin, approveOrRejectUser);

// router.put("/user/reject/:id", isAdmin, rejectUser);
// router.put("/job/approve/:id", isAdmin, approveJob);
// router.put("/job/reject/:id", isAdmin, rejectJob);

export default router;

