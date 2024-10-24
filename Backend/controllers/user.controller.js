import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudnary.js";



export const register = async (req, res) => {
  try {
    // check if all required fields are provided
    const { fullname, email, password, phoneNumber, role } = req.body;
    if (!fullname || !email || !password || !role || !phoneNumber) {
      return res.status(400).json({
        message: "Somthing is missing",
        success: false,
      });
    }

    const file = req.file;
    const fileUri = getDataUri(file);
    
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content)
    // check if the user already exits
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "user already ragisterd",
        success: false,
      });
    }

    // Hash the password
    const hashpassword = await bcrypt.hash(password, 10);

    // Create a new user
    await User.create({
      fullname,
      email,
      password: hashpassword,
      phoneNumber,
      role,
      profile: {
        profilePhoto: cloudResponse.secure_url
      }
    });

    return res.status(200).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Account creation failed",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    // check if all required fields are provided
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Somthing is missing",
        success: false,
      });
    }

    // check if the user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid username or password",
        success: false,
      });
    }

    // check if the password is correct or not
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({
        message: "Invalid password or email",
        success: false,
      });
    }

    // check role is correct or not
    if (role !== user.role) {
      return res.status(400).json({
        message: "Account doesn't exist with current role",
        success: false,
      });
    }

    // generate a token
    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    user = {
      id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 100,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Account login failed",
      success: false,
    });
  }
};

export const logout = (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "logout successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;


    const file = req.file; // Aap jo code dekh rahe ho, usme teen main steps hain: file ko process karna, usse Data URI me convert karna, aur usko Cloudinary pe upload karna. Main isko step-by-step samjhata hoon.
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    

    // split skills string into array and remove any empty strings
    let skillsArray;
    if (skills) {
      // Split the skills by comma, then trim each skill and remove quotes
      skillsArray = skills.split(",").map(skill => skill.trim().replace(/^["']|["']$/g, ""));
      console.log("Skills Array: ", skillsArray);
    }
    const userId = req.id;
    let user = await User.findOne({_id: userId});

  
    // check if user found or not
    if (!user) {
      return res.status(400).json({
        message: "user not found",
        success: false,
      });
    }



    // update profile picture if provided
    if(fullname) user.fullname = fullname;
    if(email) user.email = email;
    if(phoneNumber) user.phoneNumber = phoneNumber;
    if(bio) user.profile.bio = bio;
    if(skillsArray) user.profile.skills = skillsArray;

    if(cloudResponse){
      user.profile.resume = cloudResponse.secure_url;  // update resume link in the user's profile document.
      user.profile.resumeOriginalName = file.originalname; // save the original name in the profile document.
    }

    await user.save();


    user = {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile,
      };

      return res.status(200).json({
        message: "Profile updated successfully",
        user,
        success: true,
      })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
        message: "Profile updated failed",
        success: false,
    })
  }
};
