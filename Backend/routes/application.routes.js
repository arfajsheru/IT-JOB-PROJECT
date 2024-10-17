import express from "express";
import isAthenticated from "../middlewares/isAuthenticated.js"
import { applyjob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";
const router = express.Router();


router.route("/apply/:id").get( isAthenticated, applyjob);
router.route("/getappliedjobs").get( isAthenticated, getAppliedJobs);
router.route("/:id/applicants").get( isAthenticated, getApplicants);
router.route("/status/:id/update").post( isAthenticated, updateStatus);


export default router;


