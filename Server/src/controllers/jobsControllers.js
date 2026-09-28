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
      description,
      company,
      location,
      salary,
      jobType,
      skills,
      experience,
    } = req.body;

    if (
      !title ||
      !description ||
      !company ||
      !location ||
      salary == null ||
      !jobType ||
      !skills ||
      experience == null
    ) {
      return res
        .status(400)
        .json({ success: "False", message: "All fields are required!" });
    }

    const user = req.user;

    const job = await jobModel.create({
      title,
      description,
      company,
      location,
      salary,
      jobType,
      skills,
      experience,
      createdBy: user.userid,
    });

    return res.status(201).json({
      success: "True",
      message: "Job Listed!",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    const id = req.params.id;
    const job = await jobModel.findByIdAndDelete(id);

    if(!job){
      return res.status(404).json({success: "False", message: "Job not found!"});
    }

    return res.status(200).json({success: "True", message: "Job deleted"});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllJobs, getJobById, createJob, deleteJob };
