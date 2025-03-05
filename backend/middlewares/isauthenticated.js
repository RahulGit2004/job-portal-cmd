import jwt from "jsonwebtoken";  
import dotenv from "dotenv";
import User from "../models/user.js";  
import cookieParser from "cookie-parser";

dotenv.config(); // Load environment variables

// ✅ Middleware: Authenticate User using Token
const authenticateUser = async (req, res, next) => {
    try {
        const token = req.cookies?.token || req.headers.authorization?.split(" ")[1]; // Support both cookie & header token

        if (!token) {
            return res.status(401).json({ message: "Not authorized, no token provided" });
        }

        // Verify and decode token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = user; // Attach user to request
        next(); // Proceed to the next middleware
    } catch (error) {
        console.error("Authentication Error:", error.message);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

// ✅ Middleware: Authorize Roles (Only Employer Allowed)
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            console.warn(`Access denied: User role '${req.user?.role || "Unknown"}' is not authorized.`);
            return res.status(403).json({ message: `Access denied for role: ${req.user?.role || "Unknown"}` });
        }
        next(); // Allow access if the role is valid
    };
};

export { authenticateUser, authorizeRoles };
