const express = require('express');
const { applyForJobs, getapplication, getapplicants, applicationStatusUpdate } = require('../controllers/applicationControllers');
const accessTokenMiddleware = require('../middlewares/authMiddlewares');
const checkRoleMiddleware = require('../middlewares/roleMiddleware');
const applicationRouter = express.Router();

applicationRouter.post("/apply/:id",accessTokenMiddleware,checkRoleMiddleware("candidate"), applyForJobs); // POST: Apply job - access by canidate
applicationRouter.get("/my",accessTokenMiddleware,checkRoleMiddleware("candidate"), getapplication); // GET: Get application - access by canidate
applicationRouter.get("/applicants/:id",accessTokenMiddleware,checkRoleMiddleware("recruiter"), getapplicants); // GET: Get applicants - access by recruiter
applicationRouter.patch("/status/:id",accessTokenMiddleware,checkRoleMiddleware("recruiter"), applicationStatusUpdate); // PATCH: application status update - access by recruiter

module.exports = applicationRouter;