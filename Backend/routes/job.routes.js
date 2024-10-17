import express from "express"
import isAuthenticated from "../middlewares/isAuthenticated.js" 
import { getAdminJobs, getAllJobs, getJobById, jobPost } from "../controllers/job.controller.js";

const router = express.Router();

router.route("/jobpost").post(isAuthenticated, jobPost);
router.route("/getjobs").get(isAuthenticated, getAllJobs);
router.route("/getjob/:id").get(isAuthenticated, getJobById);
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);

export default router;