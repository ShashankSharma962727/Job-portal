const jwt = require("jsonwebtoken");

const checkRecruiterRole = (req, res, next) => {
    try {
        const user = req.user;

        if(!user){
            return res.status(400).json({success: "False", message: "Please login first!"});
        }

        if(user.role !== "recruiter"){
            return res.status(400).json({status: "False", message: "You are not recruiter, you can't create job!"})
        }

        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = checkRecruiterRole;