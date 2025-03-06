import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/userroute.js";
import subscriptionRoute from "./routes/subscriptionroutes.js";
import jobRoute from "./routes/job.route.js"; 

dotenv.config();

const app = express();

// Middleware
// ✅ Middleware
app.use(cors({
    origin: "http://localhost:5173", // ✅ Replace with frontend URL
    credentials: true,  // ✅ Allows cookies to be sent
}));
app.use(cookieParser());  // ✅ Enables cookie parsing

app.use(express.json()); // ✅ Parse JSON bodies

app.use(express.urlencoded({ extended: true }));

// const corsOptions = {
//     origin: "http://localhost:5173",
//     credentials: true,
// };
// app.use(cors(corsOptions));

const PORT = process.env.PORT || 8080;


app.use((req, res, next) => {
    console.log("🔹 Incoming Cookies:", req.cookies);
    next();
});


// API Routes
app.use("/api/users", userRoute);  /// changed here
app.use("/api/v1/subscription", subscriptionRoute);
app.use("/api/v1/job", jobRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
});
