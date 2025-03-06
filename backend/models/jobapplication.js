import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  experience: { type: String, required: true },
  education: { type: String, required: true },
  appliedDate: { type: Date, default: Date.now },
  status: { type: String, enum: ["Accepted", "Rejected", "Pending"], default: "Pending" },
});
const JobApplication = mongoose.model("JobApplication", JobApplicationSchema);
export default JobApplication; // ✅ Use 'export default' in ES Modules

// export default mongoose.model("JobApplication", JobApplicationSchema);