const express = require('express');
const {getAllJobs, getJobById, createJob, deleteJob} = require('../controllers/jobsControllers');
const checkRoleMiddleware = require('../middlewares/roleMiddleware');
const accessTokenMiddleware = require('../middlewares/authMiddlewares');
const jobRouter = express.Router();

jobRouter.get("/",getAllJobs) // Get all jobs
jobRouter.get("/:id", getJobById) // Get one jobs
jobRouter.post("/",accessTokenMiddleware, checkRoleMiddleware("recruiter"), createJob ) // create job jobs
// jobRouter.put("/:id") // update jobs
jobRouter.delete("/:id",accessTokenMiddleware, checkRoleMiddleware("recruiter"), deleteJob) // delete jobs

module.exports = jobRouter;