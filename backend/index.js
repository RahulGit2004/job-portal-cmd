import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/userroute.js";
import jobRoute from "./routes/jobroute.js";
import subscriptionRoute from "./routes/subscriptionroutes.js";
import adminRoute from "./routes/adminroute.js";

dotenv.config();

const app = express();

// ✅ Middleware Order
app.use(express.json());
app.use(cookieParser()); // 🟢 Parse cookies before other middleware
app.use(express.urlencoded({ extended: true }));

// ✅ CORS Configuration
const corsOptions = {
    origin: ["http://localhost:5173", "http://localhost:5175", "http://localhost:5174","http://localhost:5176"],
    credentials: true, // 🟢 Allow cookies
    methods: ["GET", "POST", "PUT", "DELETE"], // 🟢 Allow common request methods
    allowedHeaders: ["Content-Type", "Authorization"], // 🟢 Ensure correct headers are sent
};

app.use(cors(corsOptions));

// ✅ Debugging - Log incoming cookies (REMOVE in production)
app.use((req, res, next) => {
    console.log("cstm Incoming Cookies:", req.cookies);
    next();
});

const PORT = process.env.PORT || 8080;

// ✅ API Routes (Only User Routes Kept)
app.use("/api/v1/user", userRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/subscription", subscriptionRoute);
app.use("/api/v1/admin", adminRoute);

// ✅ Start Server
app.listen(PORT, () => {
    connectDB();
    console.log(`🚀 Server running at port ${PORT}`);
});
