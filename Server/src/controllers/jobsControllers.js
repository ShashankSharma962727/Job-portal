const jobModel = require("../models/job");

const getAllJobs = async (req, res) => {
  try {
    const jobs = await jobModel.find();

    if (jobs.length === 0) {
      return res.status(404).json({ status: "Jobs not found!" });
    }

    return res.status(200).json({ status: "Success!", jobs });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await jobModel.findById(id);

    if (!job) {
      return res.status(404).json({ status: "Job not found!" });
    }

    return res.status(200).json({ status: "Success!", job });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createJob = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      jobtype,
      salary,
      experience,
      skills,
      description,
      responsibilities,
      requirements
    } = req.body;

    if (
      !title ||
      !company ||
      !location ||
      !jobtype ||
      salary == null ||
      experience == null ||
      !skills ||
      !description ||
      !responsibilities ||
      !requirements
    ){
      return res
        .status(400)
        .json({ success: "False", message: "All fields are required!" });
    }

    const normalizedSkills = Array.isArray(skills)
      ? skills.map((skill) => String(skill).trim()).filter(Boolean)
      : String(skills)
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean);

    if (normalizedSkills.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one skill is required!",
      });
    }

    const user = req.user;

    const job = await jobModel.create({
      title,
      company,
      location,
      jobtype,
      salary,
      experience,
      skills,
      description,
      responsibilities,
      requirements,
      createdBy: user.userid,
    });
    console.log(req.user);

    return res.status(201).json({
      success: "True",
      message: "Job Listed!",
      job
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;

    const allowedFields = [
      "title",
      "company",
      "location",
      "jobtype",
      "salary",
      "experience",
      "skills",
      "description",
      "responsibilities",
      "requirements",
    ];

    const updates = Object.fromEntries(
      allowedFields
        .filter((field) => Object.prototype.hasOwnProperty.call(req.body, field))
        .map((field) => [field, req.body[field]]),
    );

    if (updates.skills !== undefined) {
      updates.skills = Array.isArray(updates.skills)
        ? updates.skills.map((skill) => String(skill).trim()).filter(Boolean)
        : String(updates.skills)
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean);

      if (updates.skills.length === 0) {
        return res.status(400).json({
          success: false,
          message: "At least one skill is required!",
        });
      }
    }

    if (updates.salary !== undefined) {
      updates.salary = Number(updates.salary);
    }

    if (updates.experience !== undefined) {
      updates.experience = Number(updates.experience);
    }

    const job = await jobModel.findById(id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found!",
      });
    }

    if (job.createdBy.toString() !== user.userid.toString()) {
      return res.status(403).json({
        success: false,
        message: "You can only update your own jobs!",
      });
    }

    Object.assign(job, updates);
    await job.save();

    return res.status(200).json({
      success: true,
      message: "Job updated successfully!",
      job,
    });
  } catch (error) {
    console.error("Update job error:", error);
    return res.status(500).json({ message: error.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.user;

    const job = await jobModel.findById(id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found!",
      });
    }

    if (job.createdBy.toString() !== user.userid.toString()) {
      return res.status(403).json({
        success: false,
        message: "You can only delete your own jobs!",
      });
    }

    await job.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Job deleted",
    });
  } catch (error) {
    console.error("Delete job error:", error);
    return res.status(500).json({ message: error.message });
  }
};

const getMyJobs = async (req, res) => {
  try {
    const user = req.user;

    const jobs = await jobModel.find({
      createdBy: user.userid
    });

    return res.status(200).json({
      success: true,
      message: "Jobs fetched successfully",
      jobs
    });

  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = { getAllJobs, getJobById, createJob, updateJob, deleteJob, getMyJobs };
