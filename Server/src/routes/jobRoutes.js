const express = require('express');
const {getAllJobs, getJobById, createJob, updateJob, deleteJob, getMyJobs} = require('../controllers/jobsControllers');
const checkRoleMiddleware = require('../middlewares/roleMiddleware');
const accessTokenMiddleware = require('../middlewares/authMiddlewares');
const jobRouter = express.Router();

jobRouter.get("/",getAllJobs) // Get all jobs
jobRouter.get("/myjobs",accessTokenMiddleware, checkRoleMiddleware("recruiter"), getMyJobs )
jobRouter.get("/:id", getJobById) // Get one jobs
jobRouter.post("/",accessTokenMiddleware, checkRoleMiddleware("recruiter"), createJob ) // create job jobs
jobRouter.put("/:id", accessTokenMiddleware, checkRoleMiddleware("recruiter"), updateJob) // update job
jobRouter.delete("/:id",accessTokenMiddleware, checkRoleMiddleware("recruiter"), deleteJob) // delete jobs

module.exports = jobRouter;