const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "jobs",
      required: true,
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    resume: {
      type: String,
      trim: true,
      default: "Resume",
    },
    coverLetter: {
      type: String,
      maxlength: 2000,
      trim: true,
      default: "Cover Letter",
    },
    status: {
      type: String,
      enum: ["applied", "shortlisted", "rejected", "hired"],
      default: "applied",
    },
  },
  {
    timestamps: true,
  },
);

applicationSchema.index(
  { job: 1, applicant: 1 },
  { unique: true },
);

const applicationModel = mongoose.model("applications", applicationSchema);

module.exports = applicationModel;
