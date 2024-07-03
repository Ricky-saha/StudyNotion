const Profile = require("../models/Profile");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const Course = require("../models/Course");
//update profile isliye kyuki when we were making schema of profile we already send null data for profile so we are just updating that 
exports.updateProfile = async(req,res) => {
    try{

        //get data 
		const { dateOfBirth = "", about = "", contactNumber="",firstName,lastName,gender="" } = req.body;
        // const {gender, dateOfBirth="", about="", contactNumber} = req.body

        //get userId
        const id = req.user.id;

        //validation
        if(!contactNumber )  {
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            })
        }

        //find profile
        const userDetails = await User.findById(id);
		const profile = await Profile.findById(userDetails.additionalDetails);

        //update profile
        userDetails.firstName = firstName || userDetails.firstName;
		userDetails.lastName = lastName || userDetails.lastName;
		profile.dateOfBirth = dateOfBirth || profile.dateOfBirth;
		profile.about = about || profile.about;
		profile.gender=gender || profile.gender;
		profile.contactNumber = contactNumber || profile.contactNumber;
        
        // Save the updated profile
        await profile.save();
        await userDetails.save();

        //return response 
        return res.status(200).json({
            success:true,
            message:"Profile Updated successfully",
            profile,
			userDetails
        })


    }
    catch(error){
        return res.status(501).json({
            success:false,
            message:error.message

        })
    }
}

//delete account 
//explore -> how can we schedule the delete account event
//job scheduling 
exports.deleteAccount = async (req, res)=>{
    try{

        // get id 
        const id = req.user.id

        //validation
        const userDetails = await User.findById({_id: id});
        if (!userDetails) {
            return res.status(400).json({
                success:false,
                message:"User not found"
            })
        }

        //delete profile
        await Profile.findByIdAndDelete({_id:userDetails.additionalDetails})

        //delete user
        await User.findByIdAndDelete({_id:id});
        
        //TODO:HW unroll user form all enrolled courses

        //return response
        return res.status(200).json({
            success:true,
            message:"Account deleted succesfully "
        })
        // how we can schedule the handler event ??
    }
    catch(error) {
        return res.status(401).aboutjson({
            success:false,
            message:"something went wrong"
        })

    }
}

// get all user details 
exports.getAllUserDetails = async (req,res)=>{


    try{
        //get id 
        const id = req.user.id

        // get user details
        const userDetails = await User.findById(id)
        .populate("additionalDetails")
        .exec();
        console.log(userDetails);
        
        // return response 
        return res.status(200).json({
            success:true,
            message:"User data Fetched Successfully",
            data: userDetails
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}



// get EnrolledCourses
exports.getEnrolledCourses=async (req,res) => {
	try {
        const id = req.user.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        const enrolledCourses = await User.findById(id).populate({
			path : "courses",
				populate : {
					path: "courseContent",
			}
		}
		).populate("courseProgress").exec();
        // console.log(enrolledCourses);
        res.status(200).json({
            success: true,
            message: "User Data fetched successfully",
            data: enrolledCourses,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

//updateDisplayPicture
// exports.updateDisplayPicture = async (req, res) => {
// 	try {

// 		const id = req.user.id;
// 	const user = await User.findById(id);
// 	if (!user) {
// 		return res.status(404).json({
//             success: false,
//             message: "User not found",
//         });
// 	}
// 	const image = req.files;
//     console.log(image);
// 	if (!image) {
// 		return res.status(404).json({
//             success: false,
//             message: "Image not found",
//         });
//     }
// 	const uploadDetails = await uploadImageToCloudinary(
// 		image,
// 		process.env.FOLDER_NAME
// 	);
// 	console.log(uploadDetails);

// 	const updatedImage = await User.findByIdAndUpdate({_id:id},{image:uploadDetails.secure_url},{ new: true });

//     res.status(200).json({
//         success: true,
//         message: "Image updated successfully",
//         data: updatedImage,
//     });
		
// 	} catch (error) {
// 		return res.status(500).json({
//             success: false,
//             message: error.message,
//         });
		
// 	}



// }

exports.updateDisplayPicture = async (req, res) => {
    try {
      const displayPicture = req.files.displayPicture
      const userId = req.user.id
      const image = await uploadImageToCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      console.log(image)
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { image: image.secure_url },
        { new: true }
      )
      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }

//instructor Dashboard 
exports.instructorDashboard = async (req, res) => {
	try {
		const id = req.user.id;
		const courseData = await Course.find({instructor:id});
		const courseDetails = courseData.map((course) => {
			totalStudents = course?.studentsEnrolled?.length;
			totalRevenue = course?.price * totalStudents;
			const courseStats = {
				_id: course._id,
				courseName: course.courseName,
				courseDescription: course.courseDescription,
				totalStudents,
				totalRevenue,
			};
			return courseStats;
		});
		res.status(200).json({
			success: true,
			message: "User Data fetched successfully",
			data: courseDetails,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
}