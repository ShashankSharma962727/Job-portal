const express = require('express');
const {getAllJobs, getJobById, createJob, deleteJob} = require('../controllers/jobsControllers');
const checkRecruiterRole = require('../middlewares/roleMiddleware');
const accessTokenMiddleware = require('../middlewares/authMiddlewares');
const jobRouter = express.Router();

jobRouter.get("/",getAllJobs) // Get all jobs
jobRouter.get("/:id", getJobById) // Get one jobs
jobRouter.post("/",accessTokenMiddleware, checkRecruiterRole, createJob ) // create job jobs
// jobRouter.put("/:id") // update jobs
jobRouter.delete("/:id",accessTokenMiddleware, checkRecruiterRole, deleteJob) // delete jobs

module.exports = jobRouter;