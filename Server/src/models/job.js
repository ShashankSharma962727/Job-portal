const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    jobtype: {
      type: String,
      enum: ["Full-time", "Part-time", "Remote","Contract", "Internship"],
      required: true
    },
    salary: {
      type: Number,
      required: true,
      min: 0,
    },
    experience: {
      type: Number,
      required: true,
      min: 0,
    },
    skills: {
      type: [String],
      required: true,
      validate: {
        validator: (arr) => arr.length > 0,
        message: "At least one skill is required",
      },
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    responsibilities: {
      type: String,
      required: true,
      trim: true,
    },
    requirements: {
      type: String,
      required: true,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      rrquired: true,
    },
  },
  {
    timestamps: true,
  },
);

const jobModel = mongoose.model("jobs", jobSchema);

module.exports = jobModel;
