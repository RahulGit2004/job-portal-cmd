import express from "express";
import { 
    registerUser, 
    loginUser, 
    logoutUser, 
    getUserProfile, 
    updateUserProfile 
} from "../controllers/usercontroller.js";

import { authenticateUser } from "../middlewares/isauthenticated.js";

const router = express.Router();

// ✅ Authentication Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

// ✅ Profile Routes (Requires Authentication)
router.get("/profile", authenticateUser, getUserProfile);
router.put("/update-profile", authenticateUser, updateUserProfile);

// ✅ Debug Route (Check Cookies)
router.get("/get-cookie", (req, res) => {
    console.log("Cookies Sent to Client:", req.cookies);
    res.json({ cookie: req.cookies.token || "No cookie found" });
});

export default router; // ✅ Ensure correct export
