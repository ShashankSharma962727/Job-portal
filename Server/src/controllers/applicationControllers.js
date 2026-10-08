
const applicationModel = require("../models/application");
const jobModel = require("../models/job");

// Apply for job - candidate only
const applyForJobs = async (req, res) => {
  try {
    const jobid = req.params.id;
    const candidateId = req.user.userid;
    const { resume, coverLetter } = req.body;

    const job = await jobModel.findById(jobid);

    if (!job) {
      return res.status(404).json({
        message: "Job not found!",
      });
    }

    const duplicateApplication = await applicationModel.findOne({
      job: jobid,
      applicant: candidateId,
    });

    if (duplicateApplication) {
      return res.status(409).json({
        message: "You have already applied for this job",
      });
    }

    const application = await applicationModel.create({
      job: jobid,
      applicant: candidateId,
      resume,
      coverLetter,
    });

    return res.status(201).json({
      message: "Applied successfully!",
      application,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "You have already applied for this job",
      });
    }

    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Get candidate's applications
const getapplication = async (req, res) => {
  try {
    const user = req.user;

    const application = await applicationModel
      .find({
        applicant: user.userid,
      })
      .populate("job")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Applications fetched successfully!",
      application,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

// Get applicants - recruiter only
const getapplicants = async (req, res) => {
  try {
    const jobid = req.params.id;
    const user = req.user;

    const job = await jobModel.findById(jobid);

    if (!job) {
      return res.status(404).json({
        message: "Job not found!",
      });
    }

    if (job.createdBy.toString() !== user.userid.toString()) {
      return res.status(403).json({
        message: "You can only view applicants for your jobs",
      });
    }

    const application = await applicationModel
      .find({
        job: jobid,
      })
      .populate("applicant", "firstname lastname email")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Applicants fetched successfully!",
      application,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};


// Get one application - recruiter can view applications for their jobs.
const getApplicationById = async (req, res) => {
  try {
    const application = await applicationModel
      .findById(req.params.id)
      .populate("applicant", "firstname lastname email profile")
      .populate("job");

    if (!application) {
      return res.status(404).json({ message: "Application not found!" });
    }

    if (
      !application.job ||
      application.job.createdBy.toString() !== req.user.userid.toString()
    ) {
      return res.status(403).json({
        message: "You cannot view this application",
      });
    }

    return res.status(200).json({
      message: "Application fetched successfully!",
      application,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Update application status - recruiter only
const applicationStatusUpdate = async (req, res) => {
  try {
    const applicationid = req.params.id;
    const { status } = req.body;
    const user = req.user;

    const allowedStatus = ["shortlisted", "rejected", "hired"];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        message: "Invalid status!",
      });
    }

    const application = await applicationModel
      .findById(applicationid)
      .populate("job");

    if (!application) {
      return res.status(404).json({
        message: "Application not found!",
      });
    }

    if (!application.job) {
      return res.status(404).json({
        message: "Related job not found!",
      });
    }

    if (
      application.job.createdBy.toString() !==
      user.userid.toString()
    ) {
      return res.status(403).json({
        message: "You cannot update this application",
      });
    }

    application.status = status;
    await application.save();

    return res.status(200).json({
      message: "Application status updated successfully!",
      application,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  applyForJobs,
  getapplication,
  getapplicants,
  getApplicationById,
  applicationStatusUpdate,
};