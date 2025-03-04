
import express from "express";
import { 
    registerUser, 
    loginUser, 
    logoutUser, 
    getUserProfile, 
    updateUserProfile 
} from "../controllers/usercontroller.js";

import { authenticateUser, authorizeRoles } from "../middlewares/isauthenticated.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/profile", authenticateUser, getUserProfile);
router.put("/update-profile", authenticateUser, updateUserProfile);

export default router; // ✅ Ensure this is exported properly
