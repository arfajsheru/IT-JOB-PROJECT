import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

// Apply for a job by user id and job id  - POST /api/applications/:id
export const applyjob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(400).json({
        message: "Job id is required",
        success: false,
      });
    }
    // check if the user is already applyed or not
    const existingAppliaction = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (existingAppliaction) {
      return res.status(200).json({
        message: "You have already applied for this job",
        success: false,
      });
    }

    // Check if the jobs exist

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(400).json({
        message: "Job not found",
        success: false,
      });
    }

    // create a new application
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    job.applications.push(newApplication._id);
    await job.save();

    return res.status(200).json({
      message: "job apply successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to apply job",
      success: false,
    });
  }
};

// Get all applied jobs by user id - GET /api/applications/:id
export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });

      if(!application) {
        return res.status(400).json({
            message: "No application ",
            success: false,
        })
      }

      return res.status(200).json({
        message: "Applications retrieved successfully",
        application,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

// Admin dekhega ki kitne log ne apply kiya he
export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: 'applications',
            options: {sort: { createdAt: -1}},
            populate: {
                path: 'applicant',
            },
        });

        if(!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false,
            });
        }

        return res.status(200).json({
            job,
            success: true,
        });
    } catch (error) {
        console.log(error);
    }
}

// application status update 
export const updateStatus = async(req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;  

        if(!status){
            return res.status(400).json({
                message: "Status is required",
                success: false,
            });
        }

        // find the application by application id

        const application = await Application.findOne({_id: applicationId});
        if(!application){
            return res.status(404).json({
                message: "Application not found",
                success: false,
            });
        }

        // update the status of the application

        application.status = status.toLowerCase()
        await application.save();

        return res.status(200).json({
            message: "Application status updated successfully",
            application,
            success: true,
        });

    } catch (error) {
        
    }
}
