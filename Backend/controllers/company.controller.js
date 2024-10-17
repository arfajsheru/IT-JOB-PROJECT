import { Company } from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }

    // Convert company name to lowercase for uniformity
    const normalizedCompanyName = companyName.toLowerCase();

    // Check if the company already exists
    let company = await Company.findOne({ name: normalizedCompanyName });
    if (company) {
      return res.status(400).json({
        message: "You cannot register the same company",
        success: false,
      });
    }

    // Create a new company
    company = await Company.create({
      name: normalizedCompanyName,
      userId: req.id,  // Ensure req.id is set
    });

    return res.status(200).json({
      message: "Company registered successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to register company",
      success: false,
    });
  }
};

export const getCompany = async (req, res) => {
  try {
    const  userId = req.id; //logged in user id

    const companies = await Company.find({ userId });

    if (!companies) {
      return res.status(400).json({
        message: "companies not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "companies found successfully",
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to get companies",
      success: false,
    });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(400).json({
        message: "company not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "company found successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to get company",
      success: false,
    });
  }
};

export const upadateCompany = async (req, res) => {
  try {
    const { name, desccription, website, location } = req.body;
    const file = req.file;

    const updateData = { name, desccription, website, location };
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if(!company){
        return res.status(400).json({
            message: "Company not found",
            success: false,
        })
    }

    return res.status(200).json({
        message: "Company information updated",
        company,
        success: true,
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to update company information",
      success: false,
    });
  }
};
