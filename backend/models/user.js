
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    role: { type: String, enum: ["Student", "Employer", "College", "Admin"], required: true },
    profilePicture: { type: String, default: "" },  // Profile image URL
    location: { type: String, default: "" },        // User's location
    isVerified: { type: Boolean, default: false },  // Email verification status
    bio: { type: String, default: "" },             // Short bio
}, { timestamps: true });

export default model("user", userSchema);
