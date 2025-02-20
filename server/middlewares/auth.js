const jwt = require ("jsonwebtoken");
require("dotenv").config()
const User = require ("../models/User");



//auth
exports.auth = async (req, res, next) =>{
    try{
        //extract token 
        const token = req.cookies.token
         || req.body.token || req.header("Authorisation").replace("Bearer ","");

        console.log("middleware wala token", token)

        //if token missing return response 
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token is missing",
            });
        }


        //verify the token 
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode // req ke andr jo user object hai usme decode daal do !
            
        }
        catch(error){
            //verification issue
            return res.status(401).json({
                success:false,
                message:'Token is invaliddd',
            });
        }
        next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:'Something wenmt wrong while validating the token '
        })
    }
}


//is student 
exports.isStudent = async(req, res, next )=>{


    try{
        if(req.user.accountType !== "Student") {
          return res.status(401).json({
            success:false,
            message:"This is a protected route for Students only"
          })
        }
        next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'User role cant be verified'
        })
    }
}


//is instructor

exports.isInstructor = async(req, res, next )=>{


    try{
        if(req.user.accountType !== "Instructor") {
          return res.status(401).json({
            success:false,
            message:"This is a protected route for Instructor only"
          })
        }
        next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'User role cant be verified'
        })
    }
}

// isAdmin
exports.isAdmin = async(req, res, next )=>{


    try{
        if(req.user.accountType !== "Admin") {
          return res.status(401).json({
            success:false,
            message:"This is a protected route for Admin only"
          })
        }
        next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'User role cant be verified'
        })
    }
}