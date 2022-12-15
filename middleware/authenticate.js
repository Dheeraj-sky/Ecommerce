const jwt= require("jsonwebtoken");

const USER=require("../models/userSchema");
const keysecret = process.env.KEY;
const athenticate=async(req,res,next)=>{
    try {
        const token =req.cookies.Amazonweb;
        const verifyToken=jwt.verify(token, keysecret);
        rootUser=await USER.findOne({_id:verifyToken._id,"tokens.token":token});
        console.log(rootUser);
        if(!rootUser){throw new Error("user not found")};
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;
        next();
    } catch (error) {
        res.status(401).send("unauthorized:No token provid");
        console.log(error);
    }
};
module.exports=athenticate;