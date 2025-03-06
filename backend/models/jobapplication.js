import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema(
  {
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true }, // Link to the job
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link to student applying
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    employmentStatus: { type: String },
    education: { type: String },
    position: { type: String },
    resume: { type: String }, // File path for the uploaded resume
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);
