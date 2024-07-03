const Category = require ("../models/Category");
const Course = require("../models/Course")

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

//create Category ka handler function 
exports.createCategory = async (req,res) => {
    try{

        // get name , description from req.body
        const {name, description}= req.body;

        //Validation
        if(!name || !description){
            return res.status(200).json({
                success:false,
                message:"All fields are required",
            })
        }

        // create entry in DB
        const categoryDetails = await Category.create({
            name:name,// name wale model mei name ki value daal do jo uinput mei aayi hai 
            description:description,
        });
        console.log(categoryDetails);


        //return response 
        return res.status(200).json({
            success:true,
            message:"Category created successfully",
			data:categoryDetails,
			id:categoryDetails._id
        })

    }   
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal server Error"
        })
    }
}

// getAllCategory hanlder function
exports.showAllCategories = async (req,res) => {
    try{
        const allCategory = await Category.find({},
        {name:true, description:true}
        );
        res.status(200).json({
            success:true,
            message:"All Category returned successfully",
            data: allCategory,
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

//Category page details 
exports.categoryPageDetails = async (req, res) => {
	try {
		const { categoryId } = req.body;

		// Get courses for the specified category
		const selectedCategory = await Category.findById(categoryId)          //populate instuctor and rating and reviews from courses
			.populate({path:"course",match:{status:"Published"},populate:([{path:"instructor"},{path:"ratingAndReviews"}])})
			.exec();
		// console.log(selectedCategory);
		// Handle the case when the category is not found
		if (!selectedCategory) {
			console.log("Category not found.");
			return res
				.status(404)
				.json({ success: false, message: "Category not found" });
		}
		// Handle the case when there are no courses
		if (selectedCategory.course.length === 0) {
			console.log("No courses found for the selected category.");
			return res.status(404).json({
				success: false,
				message: "No courses found for the selected category.",
			});
		}

		const selectedCourses = selectedCategory.course;

		// Get courses for other categories
		const categoriesExceptSelected = await Category.find({
			_id: { $ne: categoryId },
		}).populate({path:"course",match:{status:"Published"},populate:([{path:"instructor"},{path:"ratingAndReviews"}])});
		let differentCourses = [];
		for (const category of categoriesExceptSelected) {
			differentCourses.push(...category.course);
		}

		// Get top-selling courses across all categories
		const allCategories = await Category.find().populate({path:"course",match:{status:"Published"},populate:([{path:"instructor"},{path:"ratingAndReviews"}])});
		const allCourses = allCategories.flatMap((category) => category.course);
		const mostSellingCourses = allCourses
			.sort((a, b) => b.sold - a.sold)
			.slice(0, 10);

		res.status(200).json({
			selectedCourses: selectedCourses,
			differentCourses: differentCourses,
			mostSellingCourses: mostSellingCourses,
			success: true,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Internal server error",
			error: error.message,
		});
	}
};



//add course to category
exports.addCourseToCategory = async (req, res) => {
	const { courseId, categoryId } = req.body;
	// console.log("category id", categoryId);
	try {
		const category = await Category.findById(categoryId);
		if (!category) {
			return res.status(404).json({
				success: false,
				message: "Category not found",
			});
		}
		const course = await Course.findById(courseId);
		if (!course) {
			return res.status(404).json({
				success: false,
				message: "Course not found",
			});
		}
		if(category.courses.includes(courseId)){
			return res.status(200).json({
				success: true,
				message: "Course already exists in the category",
			});
		}
		category.courses.push(courseId);
		await category.save();
		return res.status(200).json({
			success: true,
			message: "Course added to category successfully",
		});
	}
	catch (error) {
		return res.status(500).json({
			success: false,
			message: "Internal server error",
			error: error.message,
		});
	}
}