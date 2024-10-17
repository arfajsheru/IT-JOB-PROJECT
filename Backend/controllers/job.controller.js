import { Job } from "../models/job.model.js";

// admin job creation post
export const jobPost = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      position,
      experiense,
      companyId,
    } = req.body;

    console.log(title, description, requirements,salary, location, jobType, position, experiense, companyId);
    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !companyId ||
      !jobType ||
      !position ||
      !experiense ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Somthing is missing",
        success: false,
      });
    }

    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobType,
      position,
      experienseLevel: experiense,
      company: companyId,
      created_by: userId,
    });

    if(!job){
        return res.status(400).json({
          message: "Failed to create new job",
          success: false,
        });
    }

    return res.status(200).json({
      message: "New job created successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to create new job error",
      success: false,
    });
  }
};

// user get job details
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || " ";

    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    const jobs = await Job.find(query).populate({
        path: "company",
    }).sort({createdAt: 1});

    if (!jobs) {
      return res.status(400).json({
        message: "Job not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Jobs found successfully",
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to get all jobs",
      success: false,
    });
  }
};

// user get job by id
export const getJobById = async (req,res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if( !job) {
            return res.status(400).json({
                message: "Job not found",
                success: false,
            });
        };

        return res.status(200).json({
            message: "Job found successfully",
            job,
            success: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to get job by id",
            success: false,
        });
    }
}

// how many created job by admin
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const job = await Job.find({created_by: adminId});

        if(!job){
            return res.status(400).json({
                message: "Jobs are not found",
                success: false,
            })
        }
        return res.status(200).json({
            message: "Jobs found successfully",
            job,
            success: true,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Failed to get admin jobs",
            success: false,
        })
    }
}
