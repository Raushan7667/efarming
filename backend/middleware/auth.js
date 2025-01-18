const jwt=require('jsonwebtoken')
require('dotenv').config()
const User=require('../models/Users')

exports.auth=async(req,res,next)=>{
    const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ", "");
    console.log("token in middleware", token)
    if(!token){
        return res.status(401).json({msg:"No token, authorization denied"})
    }
    // verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded jwt token", decoded)
        req.user=decoded;
       next()     
    } catch (error) {
        console.error("Token is not valid", error)
        res.status(403).json({msg:"Token is not valid"})
        
    }
}

// isUser

exports.isUser=async(req,res,next)=>{
    console.log("user role ",req.user.accountType)
    try {
        if(req.user.accountType!='user'){
            return res.status(401).json({
                success: false,
                message: "this is protected route for user only"
            })

        }
        next()
    } catch (error) {
        console.error("Error in isUser middleware", error)
        res.status(500).json({msg:"User Role Not Verified"})
    }
}

// isAdmin

exports.isAdmin=async(req,res,next)=>{
    console.log("user role ",req.user.accountType)
    try {
        if(req.user.accountType!="Admin"){
            return res.status(401).json({
                success: false,
                message: "this is protected route for admin only"
            })

        }
        next()
    } catch (error) {
        console.error("Error in isAdmin middleware", error)
        res.status(500).json({msg:"Admin Role Not Verified"})
    }
}