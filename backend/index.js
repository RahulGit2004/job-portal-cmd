import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "./utils/db.js";
import userRoute from "./routes/userroute.js";
import subscriptionRoute from "./routes/subscriptionroutes.js";
import jobRoute from "./routes/job.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log incoming cookies
app.use((req, res, next) => {
    console.log("🔹 Incoming Cookies:", req.cookies);
    next();
});

// MongoDB Connection
connectDB();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB Connection Error:", err));

// User Schema & Model
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const User = mongoose.models.User || mongoose.model("User", UserSchema);


// Job Schema & Model
const JobSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    company: String,
    location: String,
    salary: String,
    remote: Boolean,
    date: String,
    status: String
});
const Job = mongoose.models.Job || mongoose.model("Job", JobSchema);  /// changed here


// Register API
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    
    res.json({ message: "User registered successfully" });
});

// Login API
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
});

// Middleware to Verify Token
const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        req.userId = decoded.userId;
        next();
    });
};

// Get User Dashboard Data (Authenticated)
app.get("/user", authMiddleware, async (req, res) => {
    const user = await User.findById(req.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    const appliedJobsCount = await Job.countDocuments({ userId: req.userId });

    res.json({
        id: user._id,
        fullName: user.name,
        appliedJobsCount,
        favoriteJobs: 250, // Placeholder
        jobAlerts: 179 // Placeholder
    });
});

// Get Applied Jobs for Logged-in User
app.get("/applied-jobs", authMiddleware, async (req, res) => {
    const jobs = await Job.find({ userId: req.userId });
    res.json(jobs);
});

// API Routes
app.use("/api/users", userRoute);
app.use("/api/v1/subscription", subscriptionRoute);
app.use("/api/v1/job", jobRoute);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
